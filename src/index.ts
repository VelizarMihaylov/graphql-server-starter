import 'module-alias/register'
// import server from '@src/server'
import app from '@src/app'

const port = process.env.PORT || 4445
// server.applyMiddleware({ app })

app.use(ctx => {
  ctx.body = 'Hello world'
})
app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}`)
)
