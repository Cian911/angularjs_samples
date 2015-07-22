var express = require('express');
var app 	= express();

app.get('/', function (request, response) {
	response.send('Hello world from server');
});

app.listen(3000);
console.log('Sever running on port 3000');