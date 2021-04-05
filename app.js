const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const PORT = process.env.PORT || 5000;
const moment = require('moment');
app.locals.moment = moment;

// require('dotenv').config();

// EJS
app.use(expressLayouts);
app.set('view engine','ejs');
app.set('views','./views')

// BODY PASSER AND STATIC FOLDER
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/', require('./routes/news'));

app.listen(PORT, () => console.log("app running..."));