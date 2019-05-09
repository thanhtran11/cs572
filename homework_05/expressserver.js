const express = require('express');
const app = express();
const port = 8080;

const axios = require('axios');

//app.enable('case sensitive routing');
//app.set('strict routing', true);

app.get('/users', function(req, res){
   res.status(200);
   res.set('Content-Type', 'application/json');
   res.set('Cache-Control', 'private, max-age=36000');
   res.set();
   makeGetRequest(res);

});

async function makeGetRequest(response) {
    let res = await axios.get('https://randomuser.me/api?result=10');
    response.send(res.data);
    response.end();
}

app.listen(port, function(){
   console.log(`The server is running on port %s`, port);
});