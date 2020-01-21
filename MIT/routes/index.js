var express = require('express');
var router = express.Router();
const mit = require ('../mit.json') 

router.get('/', function(req, res) {
    res.render('index', {
        title: 'ALL PHOTO OF MILAN', 
        mit: mit.results,
    });
});

module.exports = router;