const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 8080;

//validate request body if it's JSON
const validate = (req, res, next) => {
    console.log("validate request");
    try{
        //if(typeof req.body ===)
        console.log("validate request" + typeof req.body);
        return next();
    } catch(err){
        console.log("error" + req.body);
    }
};

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
// setup the logger
app.use(morgan('common', { stream: accessLogStream }));

app.use(express.json());
app.use(validate);
let grades = [{id:1, name:'Assad Saad', course:'CS572', grade:95}];
app.get('/grades', function (req, res) {
    res.send(JSON.stringify(grades));
    res.end();
});

app.get('/grades/:id', function (req, res) {
    const grade = grades.find(x=> x.id == req.params.id);
    res.send(JSON.stringify(grade));
    res.end();
});

app.post('/grades', function (req, res) {
    let data = req.query;
    if(data !== 'undefined'){
        grades.push(JSON.parse(JSON.stringify(data)));
    }
    res.send(JSON.stringify(grades));
    res.end();
});

app.put('/grades', function (req, res) {
    let data = req.query;
    let gradeIdx = grades.findIndex(x=> x.id == data.id);
    grades[gradeIdx] = data;
    res.send(JSON.stringify(grades));
    res.end();
});

app.delete('/grades/:id', function (req, res) {
    const gradeIdx = grades.findIndex(x=> x.id == req.params.id);
    grades = grades.slice(0, gradeIdx).concat(grades.slice(gradeIdx + 1, grades.length - 1));
    res.send(JSON.stringify(grades));
    res.end();
});

app.listen(port, function(){
    console.log(`The server is running on port %s`, port);
});