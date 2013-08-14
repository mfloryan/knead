var express = require('express');
var app = express();


var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

if (typeof ipaddress === "undefined") {
  console.warn('No OPENSHIFT_INTERNAL_IP var, using 127.0.0.1');
  ipaddress = "127.0.0.1";
}

app.get('/test', function(req, res){
  res.send({msg:'hello world'});
});

app.use(express.static(__dirname + '/content'));

app.listen(port, ipaddress, function() {
  console.log("Server listening on " + ipaddress + ":" + port);
});

console.log(process.env);