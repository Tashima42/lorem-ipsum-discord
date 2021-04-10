import Koa from "koa"
const port = process.env.PORT || 3000

export default function () {
  return new Koa()
    .use(async ctx => {
      ctx.body = ':)'
    })
    .listen(port)
}
