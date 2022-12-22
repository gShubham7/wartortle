const express = require("express");
const Router = express.Router();
// const GoogleAuth = require("../config/google-oauth");
const { register, login } = require("../controllers/auth.controller");

// Router.use("/google", GoogleAuth);
Router.use("/register", register);
Router.use("/login", login);

module.exports = Router;
