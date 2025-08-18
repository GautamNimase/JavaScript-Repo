/*

function add(num1,num2){
    console.log(num1+num2)
}
let result=add(4,5)
console.log(result);

*/

/*

when we want to return value
function add(num1,num2){
    let result=num1+num2
    return result
}

console.log(add(4,6));

const result=add(7,8)
console.log(result)
*/

/*
when we want to return value
function add(num1, num2){
    return num1 +num2
}

const result=add(4,5)
console.log(result);
*/

/*
string type of function

function isLoggedIn(name="gautam"){
    return `hello ${name}  just logged in `
}

console.log(isLoggedIn("sanu"));
*/

/*

when we want pass multiple values in argument = it return in array

function CalculateCartPrice(...num1){
    return num1
}

console.log(CalculateCartPrice(4,5,6,7))

*/


/*

when we want add object in function 
const user={
    userName:"gautam",
    Price:199
}

function returnObjectValue(anyObject){
    console.log(`user name is ${anyObject.userName} and price is ${anyObject.Price}`)
}

// returnObjectValue(user)
returnObjectValue({
    userName:"gautam",
    Price:199
})

*/

/* 

when we want add array in function


const myArr=[100,50,150,40]

function returnMyArr(getArray){
    return getArray[1]
}

console.log(returnMyArr(myArr));
*/