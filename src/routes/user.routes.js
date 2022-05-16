const db = require('../config/database.config')
const express = require('express')
const userController = require('../controllers/user.controller')
const router = express();

router.post('/property',userController.create)


module.exports = router;