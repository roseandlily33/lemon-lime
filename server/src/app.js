const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const api = require('./routers/api');
const helmet = require('helmet');
const session = require('express-session');

require('dotenv').config()
const app = express();

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true,
        maxAge: 24 * 60 * 60 * 1000,
     }
  }))

app.use(helmet());

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(morgan('combined'));

app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public' )));

app.use('/', api);
app.use('/*', (req, res) => {
    console.log('Router is working')
    res.send("Router is working")
    res.sendFile(path.join(__dirname, '..','public', 'index.html'));
});


module.exports = app;