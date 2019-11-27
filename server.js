const PORT = 5000
const Koa = require("koa")

const app = new Koa()

app.use(async (ctx) => {
    ctx.set({
        "Access-Control-Allow-Origin": "*"
    })
    
    ctx.type = "text/event-stream";
    const data = { "time": Date.now() }
    ctx.body = `data: ${JSON.stringify(data)}\n\n`
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
