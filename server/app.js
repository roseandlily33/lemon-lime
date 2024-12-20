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
    origin: process.env.FRONTEND_ROUTE,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
   // preflightContinue: false,
   // optionsSuccessStatus: 204, 
    //allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(helmet());
// app.use(helmet({
//   contentSecurityPolicy: {
//     directives: {
//       defaultSrc: ["'self'"],
//       connectSrc: ["'self'", 'http://127.0.0.1:10000', 'ws://localhost:42877/']
//     }
//   }
// }));

app.use(express.static(path.join(__dirname, '..', 'public' )));

// app.use((req, res, next) => {
//     console.log('INCOMING REQUEST', req.path);
//     next()
// });

app.use('/', router);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  
  app.get('*', (req, res) => {
    res.json({msg: "Welcome to the Recipe App"});
  });

module.exports = app;
