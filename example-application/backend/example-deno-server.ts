import { opine } from "https://deno.land/x/opine@1.3.4/mod.ts";
import { Request } from 'https://deno.land/x/request@1.3.0/request.ts'

const app = opine();

app.get("/getISSPosition", async function (req, res) {

    const result = await Request.get('http://api.open-notify.org/iss-now.json')

    // console.log(result)

    res.send(result);
});

app.listen(3000, () => console.log("server has started on http://localhost:3036 🚀"));