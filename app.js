const express = require('express');
const app = express();
const port = 3001;
const path = require('path');

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

// app.use(express.static(__dirname + '/build'));

// app.get('/', function (req, res) {
// 	res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.get('/*', function (req, res) {
// 	res.sendFile(path.join(__dirname, '/build/index.html'), function(err) {
// 		if(err) {
// 			res.status(500).send(err);
// 		}
// 	});
// });

// app.get('/about', (req, res) => {
// 	console.log('About page');
// });

// app.get('/portfolio', (req, res) => {
// 	console.log('Portfolio page');
// });

// app.get('/contact', (req, res) => {
// 	console.log('Contact page');
// });

// app.get('/weddings', (req, res) => {
// 	console.log('Weddings page');
// });

// app.get('/africa', (req, res) => {
// 	console.log('Africa page');
// });

// app.get('/asia', (req, res) => {
// 	console.log('Asia page');
// });

// app.get('/europe', (req, res) => {
// 	console.log('Europe page');
// });

// app.get('/casual', (req, res) => {
// 	console.log('Casual page');
// });

// app.get('/corporate', (req, res) => {
// 	console.log('Corporate page');
// });

app.listen(port, () => {
    console.log(`Website applistening at port ${port}`);
})