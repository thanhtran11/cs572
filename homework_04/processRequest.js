const http = require('http');
const url = require('url');
const querystring = require("querystring");
const { fork } = require('child_process');
const server = http.createServer();

server.on('request', (req,res) =>{
    const localurl = url.parse(req.url, true);
    const path = localurl.query.url;
    if(path) {
        console.log(path);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        const  childProcess = fork('readFile.js');
        childProcess.on('message', content => {
            res.end(content);
        });
        childProcess.send(path);
    }

});
server.listen(8080);