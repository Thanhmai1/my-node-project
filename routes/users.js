var express = require('express');
var router = express.Router();
const user_controller = require("../controllers/user_controller.js");

/* GET users listing. */
router.route('/')
      .get(user_controller.getAllUsers)
      .post(user_controller.createUser)

module.exports = router;
