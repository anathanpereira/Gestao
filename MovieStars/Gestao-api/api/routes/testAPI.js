var express = require('express');
var router = express.Router();

router.get('/', function(req, res,next){
    res.send("./Profile/1.jpg");
});

module.exports = router;