var express = require('express');
var fs = require('fs');
var https = require('https');
var app = express();

module.exports = function() {

	app.use(express.static('public'));
	app.use(express.static('pages'));

	app.get('/', function (req, res) {
	  res.redirect('/index.html');
	});

	https.createServer({
	  key: fs.readFileSync('certificate/server.key'),
	  cert: fs.readFileSync('certificate/server.cert')
	}, app)
	.listen(3000, function () {
	  console.log('Listening on port 3000! Go to https://localhost:3000/')
	});

};

