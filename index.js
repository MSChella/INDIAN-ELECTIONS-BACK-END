// index.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const { connectDatabase } = require('./dbConfig');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: ['http://localhost:3000', 'https://elevate2election.netlify.app/'],
    optionsSuccessStatus: 200,
    allowedHeaders: ['Authorization', 'Content-Type'],

};

app.use(cors(corsOptions));
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// MongoDB Connection
connectDatabase();


app.use(express.static(__dirname + "/public"));

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use("/", require('./app'));