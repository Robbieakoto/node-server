var express = require('express');
var app = express();
//app.set('port', 8080);
app.get('/', function(req, res) {
    res.send("Welcome to my homepage");
});
app.listen(3000, function() {
    console.log("my webpage is served on port", 3000);
});