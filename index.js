// index.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const { connectDatabase } = require('./dbConfig')

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: ['http://localhost:5000',],
    optionsSuccessStatus: 200,
    allowedHeaders: ['Authorization', 'Content-Type'],

};

app.use(cors(corsOptions));
// Middleware
app.use(bodyParser.json());



// MongoDB Connection
connectDatabase();

app.use(express.static(__dirname + "/public"));
// Routes

const usersRouter = require('./controller/auth.controller');



app.use('/api/auth', usersRouter);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
