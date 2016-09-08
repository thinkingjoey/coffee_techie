var express = require('express');
var router = express.Router();

var authController = require("../controllers/authController")
var userController = require("../controllers/userController")
var eventController = require("../controllers/eventController")


//users
router.post("/login", authController.login)
router.post("/register", authController.register)
router.get("/user", authController.verifyToken, userController.user)
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//events
router.get('/events', eventController.index)
router.post('/events', authController.verifyToken, eventController.create)
router.get('/events/:id', eventController.show)
// router.put('/events/:id', authController.verifyToken, eventController.update)
router.delete('/events/:id', authController.verifyToken, eventController.destroy)




module.exports = router;
