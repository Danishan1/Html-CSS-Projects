import express from 'express'
import cors from 'cors'
var app = express()

app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for all origins!' })
})
app.get('/', function (req, res, next) {
  res.send("Danishan")
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})