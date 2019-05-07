const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const encryptor = require('simple-encryptor');

const client = new MongoClient('mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01', {useNewUrlParser:true});
let collection;

client.connect(function(err){
    const db = client.db('homework01');
    collection = db.collection('data');
});

app.get('/secret', function (req, res, next) {
    if(typeof collection !== undefined){
        collection.findOne({}, {key:1, message:1}, function (err, doc) {
            res.json(encryptor(doc.key).decrypt(doc.message));
            client.close();
        });
    }
});

app.listen(8080);

