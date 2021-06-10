// to start this web server locally you can run:
// deno run --allow-net --allow-read example-application/backend/example-deno-server.ts

// to start this web server via pm2 you can run:
// pm2 start example-application/backend/example-deno-server.ts --interpreter="deno" --interpreter-args="run --allow-net --allow-read" 
// this would make the application available on http://65.21.110.40:3036

import { opine } from "https://deno.land/x/opine@1.3.4/mod.ts";
import { Request } from 'https://deno.land/x/request@1.3.0/request.ts'
import { opineCors } from "https://deno.land/x/cors/mod.ts";


const app = opine();

app.use(opineCors())

app.get("/getISSPosition", async function (req, res) {

    const result = await Request.get('http://api.open-notify.org/iss-now.json')

    res.send(result);
});

app.get("/", async function (req, res) {

    const pathToIndexHTMLFile = `${Deno.cwd()}/example-application/frontend/index.html`

    console.log(pathToIndexHTMLFile)

    res.sendFile(pathToIndexHTMLFile);
});


app.listen(3036, () => console.log("server has started on http://localhost:3036 🚀 or e.g. on http://65.21.110.40:3036" ));