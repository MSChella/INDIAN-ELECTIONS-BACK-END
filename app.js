const express = require("express");
const APP_SERVER = express();


APP_SERVER.set("view engine", "ejs");
APP_SERVER.set('views', "views");

APP_SERVER.use("/", require("./webService"));

const adminRouter = require('./routes/admin.routes');

APP_SERVER.use('/admin', adminRouter);



const usersRouter = require('./routes/user.routes');
const constituencyRouter = require('./routes/constituency.routes');
const districtRouter = require('./routes/district.routes');

APP_SERVER.use('/api/auth', usersRouter);
APP_SERVER.use('/api/constituency', constituencyRouter);
APP_SERVER.use('/api/district', districtRouter)

module.exports = APP_SERVER;