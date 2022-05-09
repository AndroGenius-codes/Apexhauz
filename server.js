const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.get('/api', (req, res) => {
    res.send("hello")
});

app.listen(port, () => console.log(`listening at ${port}`))