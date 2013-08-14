var express = require('express');
var app = express();


var ipaddress = process.env.OPENSHIFT_INTERNAL_IP;
var port      = process.env.OPENSHIFT_INTERNAL_PORT || 8080;

if (typeof ipaddress === "undefined") {
  //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
  //  allows us to run/test the app locally.
  console.warn('No OPENSHIFT_INTERNAL_IP var, using 127.0.0.1');
  ipaddress = "127.0.0.1";
}

app.get('/test', function(req, res){
  res.send({msg:'hello world'});
});

app.use(express.static(__dirname + '/content'));

app.listen(port, ipaddress, function() {
  console.log("Server listening on " + ipaddress + ":"+port);
});