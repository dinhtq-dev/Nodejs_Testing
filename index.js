const express = require('express')
const app = express()
require('dotenv').config()
// const mongoose = require("mongoose");
var morgan = require('morgan')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
// mongoose.connect(process.env.MONGO_URL);
app.use(morgan('combined'))
const port = 3000
app.set('view engine', 'ejs')

const routes = require('./routes/index')
// routes.routes(app)
app.get('/', (req, res) => {
  return res.json({message: 'Connect successfully'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
