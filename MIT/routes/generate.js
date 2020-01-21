var express = require('express');
var router = express.Router();
var request = require("request");
const fs = require('fs');


var url = "https://api.unsplash.com/search/photos?query=milan&client_id=d4dcf0dfc3caf8747f06bb8a9251d39d5ecba6c0b0edcb5b8382f3f49a33463a"

router.get('/', function(req,res,next ) {
    
    request({
    url: url,
    json: true

    //req.body => PRENDE IL PARAMETRO PASSATO DA UNA FORM IN PUG
    
}, function (error, response, body) {
    
    if (!error && response.statusCode === 200) {
       res.send(body);
       let oggettoJson = {results:[]};
       oggettoJson.results.push(body);
        let data = JSON.stringify(body);
        fs.writeFileSync('mit.json', data);
        return data;
     //res.render({body});
    }
    
    
})
});
module.exports = router;