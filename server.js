var express = require('express');
var app = express();
var path = require("path");
var bodyParser= require("body-parser");
var PORT = process.env.PORT || 8080;


module.exports = function(app) {

app.get("/", function(req, res) {
	res.send("Hello world");
});


app.use(bodyParser.json())

app.use(function(req, res) {
	res.setHeader('Content-Type', 'text/plain')
	res.write('you posted\n')
	res.end(JSON.stringify(req.body, null, 2))
})

app.listen(PORT, function(){
	console.log("APP listening on Port: " + PORT);
});
};











