// index.js (Corrected Order)

const { error } = require('console');
const express = require('express');
const fs = require("node:fs");
const { BOOKS } = require('./models/books');
const bookrouter = require('./routes/bookroutes');
const { loggermiddleware } = require('./middlewares/logger');
const app = express();
const port = 3000;
const router = express.Router()

// 1. Core Parsers (MUST BE FIRST)
// middleware to parse json body - MOVED UP
app.use(express.json());

// 2. Logging/Other App-Level Middleware
app.use(loggermiddleware);

// middleware a
app.use(function (req, res, next) {
    console.log("i am middleware a");
    next();
})

// 3. Routers (NOW req.body is defined for all book routes)
app.use('/books', bookrouter)
app.use('/', router)

router.use('/books', (req, res, next) => {
    console.log("books router middleware");
    next();
})

app.listen(port, () =>{
    console.log(`server is running on port ${port}`);
})