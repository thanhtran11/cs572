const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const app = express();

const client = new MongoClient('mongodb+srv://homework07:homework07@cs572-ikici.mongodb.net/test', {useNewUrlParser:true});
let db = null;
client.connect(function(err){
    db = client.db('homework07');
});

app.use(express.json());
//find all lectures
app.get('/lectures', function (req, res, next) {
    const collection = db.collection('lectures');
    if(typeof collection !== undefined){
        collection.find({}).toArray(function (err, doc) {
            if(err){
                console.log(err);
            } else {
                res.send(doc);
                res.end();
            }
        });
    }
});
//find one lecture
app.get('/lectures/:id', function (req, res, next) {
    const collection = db.collection('lectures');
    console.log("param " + req.params.id);
    const o_id = new ObjectId(req.params.id);
    if(typeof collection !== undefined){
        collection.findOne({_id:o_id}, function (err, doc) {
            if(err){
                console.log(err);
            } else {
                res.send(doc);
                res.end();
            }
        });
    }
});
//add a lecture
app.post('/lectures', function (req, res, next) {
    const collection = db.collection('lectures');
    if(typeof collection !== undefined){
        const newLect = {course:req.body.course,
                        lecture:req.body.lecture};
        collection.insertOne(newLect, function (err, doc) {
            if(err){
                console.log(err);
            } else {
                collection.find({}).toArray(function (err, doc) {
                    if(err){
                        console.log(err);
                    } else {
                        res.send(doc);
                        res.end();
                    }
                });
            }
        });
    }
});
//search a lecture
app.get('/search/:q', function (req, res, next) {
    const collection = db.collection('lectures');
    if(typeof collection !== undefined){
        collection.findOne({lecture:req.params.q}, function (err, doc) {
            if(err){
                console.log(err);
            } else {
                res.send(doc);
                res.end();
            }
        });
    }
});

app.listen(8080);



