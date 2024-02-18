const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const api = require('./routers/api');
const helmet = require('helmet');
const cookieParser = require("cookie-parser");
const router = require('./routers/index');
//onst { userVerification } = require('./utils/authentication');
require('dotenv').config();

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(helmet());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use(express.urlencoded({ extended: true }));

app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, '..', 'public' )));

app.use(router);
// app.use('/', userVerification,(req, res) => {
//     console.log('Home page')
// })
app.use('/*', (req, res) => {
    console.log('Router is working')
    res.send("Router is working")
    res.sendFile(path.join(__dirname, '..','public', 'index.html'));
});

module.exports = app;
