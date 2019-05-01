function evenCallback(arr){
    let result = arr.filter(x=>(x%2) === 0);
    console.log(result);
    return result;
}

function oddCallback(arr){
    let result = arr.filter(x=>(x%2) !== 0);
    console.log(result);
    return result;
}
Array.prototype.even = function(){setImmediate(evenCallback, this); };

Array.prototype.odd = function() {setImmediate(oddCallback, this)};

console.log('start');
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();

console.log('end');