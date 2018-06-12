var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(function(req, res, next) {
  res.set('Big-Header', 'Universe');
  next();
});

app.get('/anything/:name', function(req, res) {
  var name = req.params.name;
  res.render('index', {name: name});
});

app.get('/elephants', function(req, res, next) {
  console.log("More elephants middleware");
  // res.setHeader('Content-Type', 'text/xhtml');
  res.send({message: 'Hello Elephant, looking big today\n'});
});

app.get('/elephants/:pancakes', function(req, res) {
  // res.setHeader('Content-Type', 'text/xhtml');
  var message = "";
  for (var i = 0; i < parseInt(req.params.pancakes); i++) {
    message += 'Hello Elephant, looking big today\n'
  }
  res.send({message: message});
});

app.post('/elephants', function(req, res) {
  // res.setHeader('Content-Type', 'text/xhtml');
  res.send({message: 'Creating more elephants'});
});

// app.post();
// app.put();
// app.patch();

var port = 8080;
app.listen(port, function(){
  console.log('Example app listening on port ' + port);
});