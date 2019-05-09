bin\mongoimport --host localhost:27017 --db homework09 --collection zips --file C:\Users\hoait\Learning\MUM\MWA\Assignments\cs572\homework_09\zips.json

//1.
db.zips.aggregate([{$match:{state:"WA"}}]);
//2.
db.zips.aggregate([{$match:{pop:{$lt:5000}}}]);
//3.
db.zips.aggregate([{$group:{_id:{state:"$state", city:"$city"}, num:{$sum:1}}},
    {$match:{num:{$gt:1}}},
    {$project:{state:"$_id.state", city:"$_id.city", _id:0}},
    {$sort:{state:1, city:1}}]);

db.zips.aggregate([{$group:{_id:{state:"$state", city:"$city"}, num:{$sum:1}}}, {$match:{num:{$gt:1}}},{$sort:{_id:1}}]);
//4
db.zips.aggregate([{$group:{_id:{state:"$state", city:"$city"}, sumpop:{$sum:"$pop"}}}, {$sort:{sumpop:1}}, {$group:{_id:"$_id.state", city:{$first:"$_id.city"}, pop:{$first:"$sumpop"}}}]);
