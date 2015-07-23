var express = require('express');
var app 	= express();
var parser	= require('body-parser');
var mysql	= require('mysql');

var connection = mysql.createConnection ({
	host: 		'localhost',
	user: 		'root',
	password: 	'',
	database: 	'nero'
})

// Look for static files
app.use(express.static (__dirname + '/public'));
// Use body parser for POST requests and to parse JSON
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

app.get('/contactList', function (request, response) {
	connection.query("SELECT * FROM users", function (errors, rows) {
		if (errors) 
			console.log('Problem with MySQL');
		else
			response.end(JSON.stringify(rows));
	});
});

app.post('/contactList', function (request, response) {
	console.log(request.body);
	connection.query("INSERT INTO users (`username`, `email`, `password`) VALUES ('"+request.body.username+"', '"+request.body.email+"', '"+request.body.password+"')", request.body, function (errors) {
		if (errors)
			console.log('Problem wth insertion', errors);
		else
			response.end();
	});
});

app.listen(3000);
console.log('Sever running on port 3000');