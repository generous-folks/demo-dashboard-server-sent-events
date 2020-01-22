// https://stackoverflow.com/questions/53888030/why-do-server-sent-events-initiate-every-3-seconds
const PORT = 5000;

function randomInt() {
  return Math.round(Math.random() * 100);
}

// const Koa = require("koa");
// const { PassThrough } = require("stream");

// const app = new Koa();

// app.use(async ctx => {
//   ctx.set({
//     "Access-Control-Allow-Origin": "*",
//     Connection: "keep-alive",
//     "Cache-Control": "no-cache"
//   });

//   const stream = new PassThrough();

//   setInterval(() => {
//     const data = { time: Math.round(Math.random() * 1000) };
//     stream.write(`data: ${JSON.stringify(data)}\n\n`);
//   }, 200);

//   ctx.type = "text/event-stream";
//   ctx.body = stream;
// });

// app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Access-Control-Allow-Origin": "*",
      Connection: "keep-alive",
      "Cache-Control": "no-cache"
    });

    setInterval(() => {
      const data = {
        time: randomInt()
      };
      res.write(`data: ${JSON.stringify(data)}`);
      res.write("\n\n");
    }, 500);
  })
  .listen(PORT, () => console.log(`http://localhost:${PORT}`));
