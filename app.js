const express = require('express');
const app = express();
const data = require('./data.js');
console.log(data.users[0].job);
const mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress());
app.set('views',  './views');
app.set('view engine', 'mustache');


app.get('/', function(req, res) {
  res.render('index', {img: data.users[0].avatar});
});

app.listen(3000, function(req, res){

})
