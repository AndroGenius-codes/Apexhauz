const express = require("express");
const app = express();
port = 8000;
const host = '127.0.0.1';

const cors = require("cors");
app.use(cors());


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
require("./src/routes/user.routes.js")(app);
app.get("/", (req, res) => {
  res.json({ message: "Group 21 nodejs Api project." });
});



app.listen(port,host, () => {console.log("i am listening")});