const express = require('express')
const app = express()
const db = require('./src/config/database.config')
const userRoute = require('./src/routes/user.routes')
const port = process.env.PORT || 3001;
require("dotenv").config();

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/users/api',userRoute)
app.listen(port, () => console.log(`listening at ${port}`))