
var express = require('express');
var app = express();

const fetch = require('node-fetch');

//app.engine('ejs', require('ejs').renderFile);
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	fetch('http://covid19api.xapix.io/v2/locations')
	.then(res => res.json())
	.then(json => res.render('pages/home', json ));
});

app.listen(3000);
console.log('Listening on port 3000.');
