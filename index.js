var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');
app.use(express.static('public'));

app.engine('hbs', exphbs({}));
app.set('view engine', 'hbs');

app.get('/hbs', function (req, res) {
  res.render('index',{title:'Homepage',message:'This is my Homepage'})
});
port = 3000;
app.listen(3000, function () {
  console.log('Example app listening on port ' + port +'!');
});
