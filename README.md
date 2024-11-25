# Lemon - Lime 
MERN Recipe Application

## Table of Contents
- [Description](#description)
- [Screenshots](#screenshots)
- [Live URL](#live-url)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Design](#design)
- [Choices of technologies](#choices)
- [License](#license)
- [Contact](#contact)

## Description
A MERN Recipe Application where you can favorite, search, share, edit and create your favorite recipes. 

## Screenshots:
![Screenshot](screenshot.png)

## Live URL:
https://lemon-lime.onrender.com

## Features:
- User Authentication with Auth0
- Create, edit, and delete recipes
- Search and filter through all recipes posted
- Favorite recipes and view them in your account
- Responsive Design

## Technologies Used:
###Front End:
- React
- React-Router-Dom
- Auth0 (For Authentication)
- UUID 
- Hamburger Menu 
- Framer-Motion
- Styled Components
- Cloudinary (For Images)

### Back End:
- MongoDB
- Mongoose
- Express
- Security Packages; dotenv, helmet, bcrypt, cors

## Instiallation:
1. Clone the repository
2. Install the dependenices on client and server
3. Create accounts for OAuth and Cloudinary
4. .env files for both the client and server
- Server .env file: MONGO_URL, PORT, NODE_ENV=development, and FRONTEND_ROUTE=http://localhost:3000
- Client .env file: REACT_APP_OAUTH_CLIENTID, REACT_APP_OAUTH_DOMAIN,
REACT_APP_OAUTH_SECRET,
REACT_APP_CLOUDNAME,
REACT_APP_CLOUDAPI,
REACT_APP_CLOUDSECRET,
REACT_APP_CLOUDAPIENVVAR,
REACT_APP_API_URL=http://localhost:10000,
REACT_APP_HOME_URL=http://localhost:3000
5. Change into respective files and start up server: node server.js, and start up client: npm run start

## Design:
For the design I knew that I wanted to go with citrus colours, I created a custom logo and background. 
I tried to follow as many good UI practices as I could within my time constraints like adding clear labels, tooltips, descriptions, hierarchy of data, different colour buttons for primary and secondary buttons. 

## Choices of technologies:
For the backend I chose MongoDB, because of it easy with flexibility when it comes to storing data, it gave me the ease of not having to have every part of the recipe that I wanted to include right away and was able to build out the application with ease. It also came with features that I knew that I wanted to implement such as regex for searching a recipe, created at to filter the newest recipes posted and the most popular recipes. 

## License:
Apache

## Contact:
