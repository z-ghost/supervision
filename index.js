#!/bin/env node

ipaddress = process.env.OPENSHIFT_NODEJS_IP;

if (typeof ipaddress === "undefined") {
    //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
    //  allows us to run/test the app locally.
    console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
    ipaddress = "127.0.0.1";
};

var server = app.listen(8080, ipaddress, function() {
  console.log('Listening on port %d', server.address().port);
});
