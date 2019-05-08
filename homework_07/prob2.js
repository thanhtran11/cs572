const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const encryptor = require('simple-encryptor');

const client = new MongoClient('mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01', {useNewUrlParser:true});
let db = null;

app.use((req, res, next) =>{
   if (!db) {
       client.connect(function(err){
           db = client.db('homework01');
           next();
       });
   } else{
       next();
   }
});
app.get('/secret', function (req, res, next) {
    const collection = db.collection('data');
    if(typeof collection !== undefined){
        collection.findOne({}, {key:1, message:1}, function (err, doc) {
            res.json(encryptor(doc.key).decrypt(doc.message));
        });
    }
});

app.listen(8080);

