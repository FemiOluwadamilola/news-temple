require('dotenv').config();
const axios = require('axios');

const key = process.env.API_KEY;

const getCurrentNews = async (res,req) => {
    try{
        const url = `http://newsapi.org/v2/top-headlines?country=ng&apiKey=${key}`;
        const news = await axios.get(url);
        const output = await news.data;
    
        res.render('news',{
            articles:output.articles,
            title:'newstemple'
        })
    
       }catch(err){
           if(err.response){
            console.log(err);
           }
       }
}

const getTechNews = async (req,res) => {
    try{
        const url = `http://newsapi.org/v2/everything?q=tech&apiKey=${key}`;
        const news = await axios.get(url);
        const output = await news.data;
    
        res.render('news',{
            articles:output.articles,
            title:'technologies'
        })
    
       }catch(err){
           if(err.response){
            console.log(err);
           }
       }
}

const getBusinessNews = async (req,res) => {
    try{
        const url = `http://newsapi.org/v2/everything?q=business&apiKey=${key}`;
        const news = await axios.get(url);
        const output = await news.data;
    
        res.render('news',{
            articles:output.articles,
            title:'business'
        })
    
       }catch(err){
           if(err.response){
            console.log(err);
           }
       }
}

const getSportNews = async (req,res) => {
    try{
        const url = `http://newsapi.org/v2/everything?q=sport&apiKey=${key}`;
        const news = await axios.get(url);
        const output = await news.data;
    
        res.render('news',{
            articles:output.articles,
            title:'sport'
        })
    
       }catch(err){
           if(err.response){
            console.log(err);
           }
       }
}

const searchNews = async (req,res) => {
    const search = req.body.search;
    try{
     const url = `http://newsapi.org/v2/everything?q=${search}&apiKey=${key}`;
     const news = await axios.get(url);
     const output = await news.data;

     res.render('news',{
         articles:output.articles,
         title:'search...'
     })

    }catch(err){
        if(err.response){
            console.log(err);
        } 
    }
}

module.exports = {
    getCurrentNews,
    getTechNews,
    getBusinessNews,
    getSportNews,
    searchNews
}