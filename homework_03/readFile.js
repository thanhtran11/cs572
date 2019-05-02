var http = require('http');
var server = http.createServer();

const {promisify} = require('util');
const fs = require('fs');
const path = require('path');

server.on('request', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    fs.readFile(path.join(__dirname, 'test.txt'), 'utf8',
        function(err, content) {
            res.write(content);
            res.end();
    });


});
server.listen(1234);