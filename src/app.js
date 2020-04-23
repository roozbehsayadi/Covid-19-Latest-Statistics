
var express = require('express');
var app = express();

const PORT = process.env.PORT;

const fetch = require('node-fetch');

//app.engine('ejs', require('ejs').renderFile);
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	fetch('http://covid19api.xapix.io/v2/locations')
	.then(res => res.json())
	.then(json => res.render('pages/home', json ));
});

app.listen(PORT);
console.log(`Listening on port ${PORT}.`);
