const { json } = require('express');
var express = require('express');
var router = express.Router();

const TAMANHORETORNO = 18;

router.get('/', async function(req, res,next){
   /*  const { MongoClient } = require("mongodb");
    const ObjectId = require('mongodb').ObjectId;
    const uri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
    const mongoClient = new MongoClient(uri);
    const db = mongoClient.db("MovieStars"); */

    let param = "new"//req.body;
    let movies = atualizaGenres(db) //moviesPrincipal(db, param);
    res.status(200).send(movies);
    /*if(movies)
        res.status(200).send(movies);
    else    
        res.status(500).end() */
});

async function moviesPrincipal(db, param){
    
    let movies = {};
    if(param == "new"){
        movies =  await db.collection("movies").find({date:{$lte: new ISODate(new Date().format('YYYY-MM-DD hh:mm:ss'))}}).limit(TAMANHORETORNO).toArray();
    }else if(param == "fav"){

    }else{
        movies = await db.collection("movies").find({genre:{$in:[35]}}).limit(TAMANHORETORNO).toArray();
        
    }
    
    return movies
}
const {MongoClient} = require("mongodb");
    const ObjectId = require('mongodb').ObjectId;
    const uri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
    const mongoClient = new MongoClient(uri);
    
    const db = mongoClient.db("MovieStars");

(async () => {
    
    
    await atualizaGenres(db);

    process.exit();
})();

async function atualizaGenres(db, param){
    var stringArr;
    await db.collection("movies").find().forEach(movie => {
            stringArr = JSON.parse(movie.genre);
            
            console.log(stringArr)
    });
    return stringArr
}

module.exports = router;