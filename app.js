const express = require('express');
const app = express();
const data = require('./data.js');
const mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress());
app.set('views',  './views');
app.use(express.static('public'));
app.set('view engine', 'mustache');


app.get('/', function(req, res) {
  res.render('index', data)
});



app.listen(3000, function(req, res){

})
