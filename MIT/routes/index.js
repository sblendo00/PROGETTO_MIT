var express = require('express');
var router = express.Router();
const mit_file = require ('../mit.json') // contiene tutto il json 
/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        title: 'Ciao', 
        mit: mit_file.results
    });
});

module.exports = router;