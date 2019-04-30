//1. Individual

//Exercise: isWeekend - return weekend or weekday without using if-statement/ternary
console.log("Exercise: isWeekend");
function isWeekend(){
    const todayDate = new Date();
    const day = todayDate.getDay();//0-6(0 is Sunday)
    const days = [0, 1, 2, 3, 4, 5, 6];

    const mapDays = days.map(x=>'weekday');

    mapDays[0] = "weekend";
    mapDays[mapDays.length - 1] = "weekend";
    return mapDays[day];
}

console.log(isWeekend());

//Exercise: applyCoupon - curriable function
console.log("Exercise: applyCoupon");
const item = {
    "name":"Avocado",
    "type": "Fruit",
    "category": "Food",
    "price": 200
};

function applyCouponHelper1(val){
    return function(rate){
        val.price = val.price - val.price*rate/100;
        return val;
    };
}

let applyCoupon = applyCouponHelper1.bind({});
console.log(applyCoupon(item)(10).price);

//2. Group
//Excersise: filterWords
//use ES6 features, not allowed to use for-loop
console.log("Excersise: filterWords");
console.log("use ES6 features");
String.prototype.filterWords = function(arr){
    let str = this;
    arr.map(x=> {str= str.replace(x, "***")});
    return str;
};

console.log("This house is nice!".filterWords(['house', 'nice']));

//Observable
console.log("Observable");


const {of} = rxjs;
const {map} = rxjs.operators;



