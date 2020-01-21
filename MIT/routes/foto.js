var createError = require('http-errors'); 
var express = require('express');
var router = express.Router();
const mit = require('../mit.json');
/* GET home page. */
router.get('/:id', function(req, res, next) {
 let mit2 = mit.results.find(p => p.id == req.params.id)
    if (typeof mit2 == 'undefined') {  
    return next(createError(300, 'PERSONA NON TROVATA AHAH')); 
 }
 else
 {
   res.render ('foto',{
            title : `${mit.description}`,
            mit2, 
        }) ; ;
    }
})

module.exports = router;