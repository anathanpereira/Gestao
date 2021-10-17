var express = require('express');
var router = express.Router();

const { MongoClient } = require("mongodb");
const ObjectId = require('mongodb').ObjectId;
const uri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
const mongoClient = new MongoClient(uri);

const TAMANHORETORNO = 18;

const db = mongoClient.db("MovieStars");

router.get('/moviesByGenre', function(req, res,next){
        let param = req.body;
        let movies = moviesPrincipal(param);
        res.status(200).send(movies);
        if(movies)
            res.status(200).send(movies);
        else    
            res.status(500).end()
});

function moviesPrincipal(param){
    console.log("opa")
    let movies = {};
    if(param == "new"){
        movies =  db.collection("movies").find({$lte: new ISODate(new Date().format('YYYY-MM-DD hh:mm:ss'))}, {name:1, img:1}).limit(TAMANHORETORNO).toArray();
    }else if(param == "fav"){

    }else{
        movies =  db.collection("movies").find({$in:{gender:param}}, {name:1, img:1}).limit(TAMANHORETORNO).toArray();
        
    }
    
    return movies
}

module.exports = router;