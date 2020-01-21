var express = require('express');
var router = express.Router();
const mit_file = require ('../mit.json') 

router.get('/', function(req, res) {
    res.render('index', {
        title: 'PHOTO', 
        mit: mit_file.results
    });
});

module.exports = router;