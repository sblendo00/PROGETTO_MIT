var express = require('express');
var router = express.Router();
//const loadJsonFile = require('load-json-file');
var request = require('request');

/*(async () => {
console.log(await loadJsonFile('foo.json'));
=> {foo: true}
})();*/
router.get('/', function(req, res, next ) {
 res.request('https://api.unsplash.com/search/photos?query=paris&client_id=d4dcf0dfc3caf8747f06bb8a9251d39d5ecba6c0b0edcb5b8382f3f49a33463a.com/sample_data.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
     var importedJSON = JSON.parse(body);
     console.log(importedJSON);
  }
 }
})

module.exports = router;