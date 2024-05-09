const express = require("express");
const APP_SERVER = express();

// set the view engine to ejs
APP_SERVER.set("view engine", "ejs");
APP_SERVER.set('views', "views");

// INJECT THE WEB SERVER
APP_SERVER.use("/", require("./webService"));

const adminRouter = require('./routes/admin.routes');

APP_SERVER.use('/admin', adminRouter);

// Routes

const usersRouter = require('./controller/auth.controller');

// INJECT THE API CONTROLLER

APP_SERVER.use('/api/auth', usersRouter);


module.exports = APP_SERVER;