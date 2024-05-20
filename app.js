const express = require("express");
const APP_SERVER = express();


APP_SERVER.set("view engine", "ejs");
APP_SERVER.set('views', "views");

APP_SERVER.use("/", require("./webService"));

const adminRouter = require('./routes/admin.routes');

APP_SERVER.use('/admin', adminRouter);


const usersRouter = require('./routes/user.routes');



APP_SERVER.use('/api/auth', usersRouter);


module.exports = APP_SERVER;