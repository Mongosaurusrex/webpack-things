const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/', function(req, res){
	const pathToHtml = path.resolve(__dirname, '../dist/index.html');
	const contentFromHtmlFile = fs.readFileSync(pathToHtml, 'utf-8');
	res.send(contentFromHtmlFile);
});

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.listen(3000, function() {
	console.log('Application is running on http://localhost:3000');
});
