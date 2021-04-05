const express = require('express');
const newsRoute = express.Router();
const {
    getCurrentNews,
    getTechNews,
    getBusinessNews,
    getSportNews,
    searchNews
    } = require('../controllers/newsController');

newsRoute.get('/', getCurrentNews)

// TECH ROUTE
newsRoute.get('/tech', getTechNews)

// BUSINESS ROUTE
newsRoute.get('/bus', getBusinessNews)

// SPORT ROUTE
newsRoute.get('/sport', getSportNews)

// SEARCH ROUTE
newsRoute.post('/search', searchNews)

module.exports = newsRoute;