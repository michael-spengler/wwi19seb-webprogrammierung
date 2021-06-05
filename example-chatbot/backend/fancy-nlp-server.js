const express = require('express')
const bodyParser = require('body-parser')
const { NlpManager } = require('node-nlp');
const http = require('http')
const https = require('https')
const app = express()
let port = (process.argv[2] === undefined) ? 4443 : process.argv[2]
const fs = require('fs')
const path = require('path')
var cors = require('cors')

const handles = []

const messagesFilePath = path.join(`${__dirname}`, 'operational-data/messages.json')
let readyForMore = true

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('../frontend')) // quick and dirty

app.get('/', (req, res) => {
    const pathToIndex = path.join(`${__dirname}`, '../frontend/index.html')
    console.log(pathToIndex)
    res.sendFile(pathToIndex)
})
app.post('/train', async (req, res) => {

    if (readyForMore) {
        const handle = {
            clientId: (req.body.wallet === undefined) ? Date.now().toString() : req.body.wallet,
            manager: new NlpManager({ languages: req.body.languageCodes })
        }

        for (const document of req.body.documents) {
            handle.manager.addDocument(document.languageCode, document.input, document.intent);
        }
        for (const answer of req.body.answers) {
            handle.manager.addAnswer(answer.languageCode, answer.intent, answer.output);
        }

        await handle.manager.train()

        handles.push(handle)

        limitNumberOfActiveClients() // shall be optimized soon

        res.send({ clientId: handle.clientId })

    } else {
        res.send('give me a break')
    }
})

app.get('/process/input/:input/languageCode/:languageCode/clientId/:clientId', async (req, res) => {

    const handle = handles.filter((e) => e.clientId === req.params.clientId)[0]
    if (handle === undefined) {
        res.send(`Are you sure you submitted a valid clientId?: ${req.params.clientId} - try training again and save the return value`)
    }

    const nlpResult = await handle.manager.process(req.params.languageCode, req.params.input)

    if (nlpResult.answer === undefined) {
        console.log('return the default')
        nlpResult.answer = 'Please say it in a different way.'
    }
    
    const message = {
        clientId: req.params.clientId,
        timeStamp: Date.now().toString(),
        languageCode: req.params.languageCode,
        input: req.params.input,
        output: nlpResult.answer
    }
    
    const messages = JSON.parse(fs.readFileSync(messagesFilePath, 'utf-8'))
    messages.push(message)
    fs.writeFileSync(messagesFilePath, JSON.stringify(messages))
    
    
    res.send({ nlpResult })
})

app.get('/getMessages/clientId/:clientId', async (req, res) => {
    const fileContent = JSON.parse(fs.readFileSync(messagesFilePath, 'utf8'))
    res.send(fileContent.filter((e) => e.clientId === req.params.clientId))
})


function limitNumberOfActiveClients() {
    if (handles.length > 100) {
        handles.splice(0, 1)
        readyForMore = false
        setTimeout(() => {
            readyForMore = true
        }, 60 * 1000)
    }
}

if (port.toString().indexOf('443') !== -1) {
    https.createServer({
        cert: fs.readFileSync('/etc/letsencrypt/live/fancy-chats.com/fullchain.pem'),
        key: fs.readFileSync('/etc/letsencrypt/live/fancy-chats.com/privkey.pem')
    }, app).listen(port)

} else {
    http.createServer(app).listen(port)
}