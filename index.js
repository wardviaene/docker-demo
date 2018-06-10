var express = require('express');
var app = express();

app.get('/', function (req, res) {
<<<<<<< HEAD
  res.send('Hello World xxx (v1.0.3)!');
=======
  res.send('Hello World Manny Divina v1.0.3!');
>>>>>>> c4296b80ba87622c990995b7669b5cc0181ba6c4
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
