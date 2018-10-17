var http = require('http');
var server = http.createServer(function (req, res) {
    var body = 'Amazing lightweight webserver using node.js\n';
    var content_length = body.length;
    res.writeHead(200, {
        'Content-Length': content_length,
        'Content-Type': 'text/plain' });
 
    res.end(body);
});
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080

server.listen(server_port);
console.log('Server is running on port ' + server_port);
