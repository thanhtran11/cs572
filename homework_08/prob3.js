const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

const client = new MongoClient('mongodb://localhost:27017/', { useNewUrlParser: true });


app.use(express.json());
app.use(express.urlencoded());

let db = null;
app.use(function (req, res, next) {
    if (!db){
        client.connect(function (err) {
            if(err)  console.log('Error connect DB' + err);
            console.log('connect DB');
           db = client.db('homework08');
            req.db = db;
            next();
        });
    } else{
        req.db = db;
        next();
    }
});
app.post('/restaurants', function (req, res) {
    const collection = req.db.collection('restaurants');
    const newLoc = {
        name:req.body.name,
        category:req.body.category,
        location:req.body.location
    };
    console.log('connect collection');
    collection.insert(newLoc, function (err, doc) {
       res.send(doc);
    });
});

app.get('/restaurants', function (req, res) {
    const collection = req.db.collection('restaurants');

    console.log('connect collection');
    collection.find({category:'food', location:{$near:[-91.9665342, 41.017654]}}).limit(3).toArray(function (err, doc) {
        res.send(doc);
    });
});

app.listen(3000);

