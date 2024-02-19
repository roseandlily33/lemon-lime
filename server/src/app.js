const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const Recipes = require('./models/recipes.mongo');
const cookieParser = require("cookie-parser");
const router = require('./routers');

require('dotenv').config();

const mainExcludes = {
    '__v': 0, 'ingredients': 0, 'prepTime':0, 'cookTime': 0, 'instructions': 0
}

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
app.use((req, res, next) => {
    console.log('INCOMING REQUEST', req.path);
    next()
});

app.use('/', router);
// app.use('/', userVerification,(req, res) => {
//     console.log('Home page')
// })
app.get('/', (req, res) => {
    console.log('MAIN', req.body);
    return res.status(200).json({msg: "Hello"})
})
 app.get('/popular', async(req, res) => {
    console.log('GETTING ALL THE POPULAR RECIPES')
    try{
        let faveRecipes = await Recipes.find({}, {
            mainExcludes}).sort({favorites: -1}).limit(6);
         return res.status(200).json(faveRecipes);
    }catch(err){
        console.log('ERERR',err);
        return res.status(400).json(err);
    }
 })
//  async function httpGetPopularRecipes(req, res){
    
//  }


app.use('/*', (req, res) => {
    console.log('Router is working')
    res.send("Router is working")
    res.sendFile(path.join(__dirname, '..','public', 'index.html'));
});

module.exports = app;
