import Koa from "koa"
const port = process.env.PORT || 3000

export default function () {
  return new Koa()
    .use(async ctx => {
      ctx.body = '<a href=https://github.com/Tashima42/lorem-ipsum-discord>Git repository</a>'
    })
    .listen(port)
}
