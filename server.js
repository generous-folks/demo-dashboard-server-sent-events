const Koa = require("koa")

const PORT = 4000

const app = new Koa()

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))