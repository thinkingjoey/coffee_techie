var express = require('express');
var router = express.Router();

var authController = require("../controllers/authController")
var userController = require("../controllers/userController")

router.post("/login", authController.login)
router.post("/register", authController.register)
router.get("/user", authController.verifyToken, userController.user)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
