var express = require('express');
var app 	= express();
var mysql	= require('mysql');

var connection = mysql.createConnection ({
	host: 		'localhost',
	user: 		'root',
	password: 	'',
	database: 	'nero'
})

// Look for static files
app.use(express.static (__dirname + '/public'));

app.get('/contactList', function (request, response) {
	connection.query("SELECT * FROM users", function (errors, rows) {
		if (errors) 
			console.log('Problem with MySQL');
		else
			response.end(JSON.stringify(rows));
	});
});

app.listen(3000);
console.log('Sever running on port 3000');