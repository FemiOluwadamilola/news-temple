const express = require('express');
const {key} = require('../config/key');
const axios = require('axios');
const math = require('math');
const newsRoute = express.Router();

newsRoute.get('/', async (req,res) => {
   try{
    const url = `http://newsapi.org/v2/top-headlines?country=ng&apiKey=${key}`;
    const news = await axios.get(url);
    const output = await news.data;

    res.render('news',{
        articles:output.articles
    })

   }catch(err){
       if(err.response){
        console.log(err);
       }
   }

})

// TECH ROUTE
newsRoute.get('/tech', async(req,res) => {
    try{
        const url = `http://newsapi.org/v2/everything?q=tech&apiKey=${key}`;
        const news = await axios.get(url);
        const output = await news.data;
    
        res.render('news',{
            articles:output.articles
        })
    
       }catch(err){
           if(err.response){
            console.log(err);
           }
       }
})

// BUSINESS ROUTE
newsRoute.get('/bus', async(req,res) => {
    try{
        const url = `http://newsapi.org/v2/everything?q=busi&apiKey=${key}`;
        const news = await axios.get(url);
        const output = await news.data;
    
        res.render('news',{
            articles:output.articles
        })
    
       }catch(err){
           if(err.response){
            console.log(err);
           }
       }
})

// SPORT ROUTE
newsRoute.get('/sport', async(req,res) => {
    try{
        const url = `http://newsapi.org/v2/everything?q=sport&apiKey=${key}`;
        const news = await axios.get(url);
        const output = await news.data;
    
        res.render('news',{
            articles:output.articles
        })
    
       }catch(err){
           if(err.response){
            console.log(err);
           }
       }
})

// SEARCH ROUTE
newsRoute.post('/search', async(req,res) => {
    const search = req.body.search;
    try{
     const url = `http://newsapi.org/v2/everything?q=${search}&apiKey=${key}`;
     const news = await axios.get(url);
     const output = await news.data;

     res.render('news',{
         articles:output.articles
     })

    }catch(err){
        if(err.response){
            console.log(err);
        } 
    }
})
module.exports = newsRoute;