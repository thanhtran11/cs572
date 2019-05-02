var http = require('http');
var server = http.createServer();

const {promisify} = require('util');
const fs = require('fs');
const path = require('path');

server.on('request', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    let readable = fs.createReadStream(path.join(__dirname, 'test.txt'), {encoding: 'utf8', highWaterMark: 16*1024});
    readable.on('data', function (chunk) {
        res.write(chunk);
    });
    readable.on('end', function () {
        res.end();
    });


});
server.listen(1234);

// As observation:

//sync: takes about less than 1s to show the first part of content. It takes about 10 minutes to load all data 200MB.
//readfile: takes about less than 1s to show the first part of content. It takes about 10 minutes to load all data 200MB.
//stream: takes about less than 1s to show the first part of content. It takes about 10 minutes to load all data 200MB.
