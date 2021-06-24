

export interface QA {
    q: string,
    a: string
}

export interface Document {
    lang: string,
    utterance: string,
    intent: string
}

export interface Answer {
    lang: string,
    intent: string,
    output: string
}

export class TrainingDataParser {

    public async getQAPairsFromFFCContent(trainingDataAsFFCData?: any, ffcContentURL?: string): Promise<QA[]> {

        let trainingDataAsFFCContent
        if (ffcContentURL === undefined) {
            trainingDataAsFFCContent = trainingDataAsFFCData
        } else {
            trainingDataAsFFCContent = await (await fetch(ffcContentURL)).json()
        }

        const qaPairs: QA[] = []

        for (const d of Object.keys(trainingDataAsFFCContent.decks)) {
            console.log('hello')
            console.log(Object.keys(trainingDataAsFFCContent.decks))
            console.log('hi')
            for (const e of Object.keys(trainingDataAsFFCContent.decks[d].cards)) {
                const qa: QA = {
                    q: trainingDataAsFFCContent.decks[d].cards[e].q,
                    a: trainingDataAsFFCContent.decks[d].cards[e].a,
                }

                qaPairs.push(qa)
            }

            console.log('und tschüss')
            console.log(qaPairs.length)
        }

        return qaPairs

    }

    public getMarkdownFromQAPairs(qaPairs: QA[]): string {
        let mdString = ""

        for (const pair of qaPairs) {
            let entity =
                `### ${pair.q}  
${pair.a}  
`
            mdString =
                `${mdString}
${entity}
`
        }

        return mdString
    }

    public getQAPairsFromMarkDown(trainingDataAsMarkDown: any): QA[] {

        const qaPairs: QA[] = []

        // for (const d of Object.keys(trainingData.decks)) {
        //     console.log('hello')
        //     console.log(Object.keys(trainingData.decks))
        //     console.log('hi')
        //     for (const e of Object.keys(trainingData.decks[d].cards)) {
        //         const qa: QA = {
        //             q: trainingData.decks[d].cards[e].q,
        //             a: trainingData.decks[d].cards[e].a,
        //         }

        //         qaPairs.push(qa)
        //     }

        //     console.log('und tschüss')
        //     console.log(qaPairs.length)
        // }

        return qaPairs

    }

    public getDocuments(qaPairs: QA[]): Document[] {
        const documents: Document[] = []

        for (const qaPair of qaPairs) {

            const document: Document = {
                lang: 'de',
                utterance: qaPair.q,
                intent: qaPair.q,
            }

            documents.push(document)
        }


        return documents
    }

    public getAnswers(qaPairs: QA[]): Answer[] {
        const answers: Answer[] = []

        for (const qaPair of qaPairs) {

            const answer: Answer = {
                lang: 'de',
                intent: qaPair.q,
                output: qaPair.a
            }

            answers.push(answer)
        }


        return answers
    }


}


const tP = new TrainingDataParser()

tP.getQAPairsFromFFCContent(undefined, "https://raw.githubusercontent.com/fancy-flashcard/deck-collection/main/wirtschaftsinformatik/Finanzbuchhaltung.json")
    .then((result) => {

        const markdown = tP.getMarkdownFromQAPairs(result)
        console.log(markdown)
        Deno.writeTextFile("./hello.md", markdown)
    })


