const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');
// const cookieParser = require("cookie-parser");

const router = require('./routers');

require('dotenv').config();

const app = express();
// app.use(cookieParser());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(morgan('combined'));
app.use(cors({
    origin:'http://localhost:3000',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
   // preflightContinue: false,
   // optionsSuccessStatus: 204, 
    //allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(helmet());

app.use(express.static(path.join(__dirname, '..', 'public' )));

app.use((req, res, next) => {
    console.log('INCOMING REQUEST', req.path);
    next()
});

app.use('/', router);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

module.exports = app;
