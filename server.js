const express = require('express')
const errorHandlerMiddleware = require("./middleWare/errorHandler")
const notFound = require("./middleWare/notFound")
const restaurantsRoute = require('./routes/restuarant')
const pool = require('./db/db')

const PORT = 3000

const app = express()

app.use(express.json())

app.use("/api/v1/restaurants", restaurantsRoute)
app.use(errorHandlerMiddleware);
app.use(notFound);


app.listen(PORT, () => console.log(`Server has started on ${PORT}`))