/*
***** what is for...of loop?*****
    The for...of loop is used to go through (iterate) items in something that is iterable like:
    1.Arrays 2.Strings.Maps/Sets
    "Go through each item, one by one."

**** Syntax****
for (let item of iterable) {
    something with item
}
iterable → the thing you want to loop through (like an array or string).

item → each value inside it (one at a time).

Example 1: Loop through an array
let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
    console.log(fruit);
}
o/p:
apple
banana
mango

****** Example 2: Loop through a string ******
let word = "Hi";

for (let char of word) {
    console.log(char);
}

Output:
H
i

******* Example 3: Loop through a Set (unique values) *******

let numbers = new Set([1, 2, 3]);

for (let num of numbers) {
    console.log(num);
}

Output:
1 2 3

******** Difference from for...in *********

for...of → gives values
for...in → gives keys/indexes

*************** Map ************
What is a Map?
A Map is like a special object in JavaScript that stores key–value pairs.

let myMap = new Map();

// add values
myMap.set("name", "Alice");
myMap.set("age", 25);
myMap.set("country", "India");

console.log(myMap);

Output:
Map(3) { 'name' => 'Alice', 'age' => 25, 'country' => 'India' }


***** Using for...of with a Map ****

for (let [key, value] of myMap) {
    console.log(key, ":", value);
}

name : Alice
age : 25
country : India

****** Loop only for keys ******
for (let key of myMap.keys()) {
    console.log(key);
}

**** Loop only values ****
for (let value of myMap.values()) {
    console.log(value);
}

**************************** For...IN loop *****************************

What is for...in?
The for...in loop is used to loop through the keys (or indexes) of an object (or array).

Syntax:
for (let key in object) {
  // use key or object[key]
}

****** Example 1: Loop through an object ********

let person = {
    name: "Alice",
    age: 25,
    country: "India"
};

for (let key in person) {
    console.log(key, ":", person[key]);
}

Output:
name : Alice
age : 25
country : India

******** Example 2: Loop through an array*********
let fruits = ["apple", "banana", "mango"];

for (let index in fruits) {
    console.log(index, ":", fruits[index]);
}

Output:
0 : apple
1 : banana
2 : mango


*********************** For Each Loop *************************

What is forEach?

forEach() is a method (not a keyword like for...in or for...of).
It is used to loop through arrays.
It runs a function once for each element in the array.

Syntax:
array.forEach(function(item, index, array) {
    do something with item
});
item → the current value in the array
index → the position (0, 1, 2, …)
array → the whole array (optional)


************          Example 1: Basic use        ************
let fruits = ["apple", "banana", "mango"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});

Output:
apple
banana
mango

*************         Example 2: With index          **********
let fruits = ["apple", "banana", "mango"];

fruits.forEach(function(fruit, index) {
    console.log(index, fruit);
});

Output:
0 apple
1 banana
2 mango

***********       Example 3: Using arrow function          **************
let numbers = [1, 2, 3, 4];

numbers.forEach(num => console.log(num * 2));

Output:
2
4
6
8
*/
