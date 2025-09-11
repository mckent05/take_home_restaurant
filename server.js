const express = require('express')
const pool = require('./db/db')

const PORT = 3000

const app = express()

app.use(express.json())

app.get('/',(req, res) => {
  res.sendStatus(200)
})


app.listen(PORT, () => console.log(`Server has started on ${PORT}`))