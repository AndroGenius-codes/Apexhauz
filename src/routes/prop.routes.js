
const router = require("express").Router();
const propController = require('../controllers/prop.controller')


module.exports = (app) => {
    app.use(function (req, res, next) {
        res.header("Acces-control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
        next();
    })
  // Create a new Property 
  router.post("/property", propController.createProperty);

 
  app.use('/api/v1', router);

  // error handler
  app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    });
    next();
  });
};


