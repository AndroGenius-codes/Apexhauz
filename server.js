const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
require("dotenv").config();


app.get('/src', (req, res) => {
    res.send("hello")
});

app.listen(port, () => console.log(`listening at ${port}`))