//1. display all the documents in the collection restaurant
db.restaurants.find({});
//2. display the fields restaurant_id, name, district, cuisine
db.restaurants.find({}, {restaurant_id:1, name:1, district:1, cuisine:1});
//3. display the fields restaurant_id, name, district, cuisine but exclude the field _id
db.restaurants.find({}, {restaurant_id:1, name:1, district:1, cuisine:1, _id:0 });
//4. display the fields restaurant_id, name, district, zipcode but exclude the field _id
db.restaurants.find({}, {restaurant_id:1, name:1, district:1, 'address.zipcode':1, _id:0 });
//5. display all the restaurant which is in the district Bronx
db.restaurants.find({district: 'Bronx'});
//6. display the first 5 restaurant which is in the district Bronx
db.restaurants.find({district: 'Bronx'}).limit(5);
//7. display the first 5 restaurant which is in the district Bronx
db.restaurants.find({district: 'Bronx'}).limit(5).skip(5);
//8. find the restaurants which locates in coord value less than -95.75
//db.restaurants.find({'address.coord': {$lt:-95.754168}}, {restaurant_id:1, name:1, 'address.coord':1, _id:0 });
db.restaurants.find({'address.coord': {$lt:-95.754168}});
//9. find the restaurants that does not prepare any cuisine of 'American'
// and their grade score more than 70 and coord value less than -65.75
db.restaurants.find({cuisine:{$nin:['American ']}, 'grades.score':{$gt:70}, 'address.coord': {$lt:-65.754168}});
//10. find the restaurant_id, name, district, cuisine
// for those restaurants which contains 'Wil' as first 3 letters for its name
db.restaurants.find({name:{$regex:'^Wil'}}, {restaurant_id:1, name:1, district:1, cuisine:1, _id:0 });

//11. find the restaurant_id, name, district, cuisine
// for those restaurants which contains 'ces' as last 3 letters for its name
db.restaurants.find({name:{$regex:'ces$'}}, {restaurant_id:1, name:1, district:1, cuisine:1, _id:0 });
//12. find the restaurant_id, name, district, cuisine
// for those restaurants which contains 'Reg' as 3 letters somewhere in its name
db.restaurants.find({name:{$regex:'Reg'}}, {restaurant_id:1, name:1, district:1, cuisine:1, _id:0 });

//13. find the restaurants which belongs to the district Bronx
// and prepared either American or Chinese dish
//db.restaurants.find({district: 'Bronx', cuisine: {$in:['American ', 'Chinese']}}, {restaurant_id:1, name:1, district:1, cuisine:1, _id:0 });
db.restaurants.find({district: 'Bronx', cuisine: {$in:['American ', 'Chinese']}});

//14. find the restaurant_id, name, district, cuisine
// for those restaurants which belongs to the district Staten Island or Queens or Bronx or Brooklyn
db.restaurants.find({district:{$in:['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}}, {restaurant_id:1, name:1, district:1, cuisine:1, _id:0 });

//15. find the restaurant_id, name, district, cuisine
// for those restaurants which are not belonging to the district Staten Island or Queens or Bronx or Brooklyn
db.restaurants.find({district:{$nin:['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}}, {restaurant_id:1, name:1, district:1, cuisine:1, _id:0 });

//16. find the restaurant_id, name, district, cuisine
// for those restaurants which achieved a score which is not more than 10
db.restaurants.find({'grades.score':{$lte:10}}, {restaurant_id:1, name:1, district:1, cuisine:1, 'grades.score':1, _id:0 });

//17. find the restaurant_id, name, address and geographical location
//for those restaurants where 2nd element of coord array contains a value which is more than 42 and up to 52
db.restaurants.find({'address.coord.1':{$gt:42, $lt:52}}, {restaurant_id:1, name:1, address: 1, _id:0 });

//18. arrange the name ascending order
db.restaurants.find({}).sort({name:1});

//19. arrange the name descending order
db.restaurants.find({}).sort({name:-1});

//20. arrange the name of the cuisine
db.restaurants.find({}, {district:1, cuisine:1}).sort({cuisine:1, district:-1});

//21. coord field value is Double
db.restaurants.find({"address.coord":{$type:"double"}}, {district:1, 'address.coord':1});

//22
db.restaurants.find({name:{$regex:'^Mad'}}, {name:1, district:1,  cuisine:1, _id:0 });

//create index
db.restaurants.createIndex({location:'2d'});