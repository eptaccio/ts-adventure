import * as express from "express"

const app = express()

app.get('/status', (req:  express.Request, res: express.Response) => {
  res.send({
    ok: 200
  })
})

app.listen(3000)