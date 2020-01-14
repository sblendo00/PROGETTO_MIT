var express = require('express');
var router = express.Router();
var request = require("request");

var url = "https://api.unsplash.com/search/photos?query="+ key +"&client_id=d4dcf0dfc3caf8747f06bb8a9251d39d5ecba6c0b0edcb5b8382f3f49a33463a"

router.get('/', function(req,res,next ) {
    
    request({
    url: url,
    json: true
    
}, function (error, response, body) {
    
    if (!error && response.statusCode === 200) {
       res.send(body); 
     //res.render({body});
    }
    
    
})
});
module.exports = router;