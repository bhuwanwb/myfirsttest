var express = require('express')
var app = express()

var port = process.env.PORT || 5000;
app.post('/messages', function (req, res) {
  var requestBody=req;
  console.log(JSON.parse(req));
  res.send('Hello World!')
})

app.get('/data', function (req, res) {
  res.send('Hello Bhuvan!')
})

app.listen(port, function () {
  console.log('Example app listening on port '+port);
})
