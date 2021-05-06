const express = require('express');
const newsRoute = express.Router();
const {getNews,
	getTechNews,
	getBusinessNews,
	getSportNews,
	search} = require('../controllers/news');


newsRoute.get('/', getNews)

// TECH ROUTE
newsRoute.get('/tech', getTechNews)

// BUSINESS ROUTE
newsRoute.get('/bus', getBusinessNews)

// SPORT ROUTE
newsRoute.get('/sport', getSportNews)

// SEARCH ROUTE
newsRoute.post('/search', search)



module.exports = newsRoute;