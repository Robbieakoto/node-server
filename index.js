var express = require('express');
var app = express();
var port = 3000 || process.env.PORT;
app.get('/', function(req, res) {
    res.send("Welcome to my homepage");
});
app.listen(port, function() {
    console.log("my webpage is served on port", port);
});