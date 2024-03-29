const express = require('express');
const authController = require("./../controllers/authController")
const userRouter = express.Router();

userRouter.route("/signup")
.post(authController.signup);

module.exports = userRouter;