var express = require('express')
var app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 5000;
app.post('/messages', function (req, res) {
  var requestBody=req.body;
  console.log(JSON.stringify(requestBody));
  res.send('Hello World!')
})

app.get('/data', function (req, res) {
  res.send('Hello Bhuvan!')
})

app.listen(port, function () {
  console.log('Example app listening on port '+port);
})
