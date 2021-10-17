const { json } = require('express');
var express = require('express');
var router = express.Router();

const TAMANHORETORNO = 18;

router.get('/', async function(req, res,next){
    const {MongoClient} = require("mongodb");
    const uri = "mongodb://localhost:27017/";
    const mongoClient = new MongoClient(uri);
    await mongoClient.connect()
    const db = await mongoClient.db("MovieStars");
    
    let param = req.body;
    let movies = await moviesPrincipal(db, param);
    
    if(movies)
        res.status(200).send(movies); 
    else    
        res.status(500).end()
});

async function moviesPrincipal(db, param){
    const ObjectId = require('mongodb').ObjectId;

    let movies = [];
    if(param == "new"){
        movies =  await db.collection("movies").find().limit(TAMANHORETORNO).toArray();
    }else if(param == "fav"){
        userId = new ObjectId("616c8907901549da121dbd9a");
        user = await db.collection("users").findOne({_id: userId})
        console.log(user)
        for(let i =0;i<user.favs.length; i++){
            fav = (user.favs[i].movieId).toString();
            movie = await db.collection("movies").findOne({id:fav});
            
            movies.push(movie);
        }
    }else{
        movies = await db.collection("movies").find({genre:{$in:[param]}}).limit(TAMANHORETORNO).toArray();   
    }
    
    return movies
}
/* const {MongoClient} = require("mongodb");
    const ObjectId = require('mongodb').ObjectId;
    const uri = "mongodb://localhost:27017/";
    const mongoClient = new MongoClient(uri);
    
    

 (async () => {
    await mongoClient.connect()
    const db = await mongoClient.db("MovieStars");
    
    let param = "fav"//req.body;
    let movies = await moviesPrincipal(db, param);
    console.log(movies)
    process.exit();
})(); */

/* async function soOPresente(db){
    let ids = await db.collection("movies").find({}, {_id : 1})
    .limit(194).toArray();
    for(let i=0;i<ids.length; i++){
        await db.collection("movies").deleteOne({_id:ids[i]._id});
    }
} */
/*
async function atualizaGenres(db, param){
    var stringArr;
    let movies = await db.collection("movies").find().toArray();
    
    for(let i=0; i<movies.length; i++){
        if(movies[i].genre){
            genre = movies[i].genre.toString();
            genre = genre.replace("["," ")
            genre = genre.replace("]"," ");
            stringArr = genre.split(",");
            for(let j =0;j<stringArr.length;j++){
                stringArr[j] = parseInt(stringArr[j])
            }
            await db.collection("movies").updateMany({_id: movies[i]._id}, {$unset: {genre:1}}, false);
            console.log(stringArr)
            await db.collection("movies").update(
                {_id: movies[i]._id},
                {$set: {'genre': stringArr}},
                false); 
        }
    }
} */

module.exports = router;