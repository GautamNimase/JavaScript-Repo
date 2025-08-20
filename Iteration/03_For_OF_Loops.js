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


*/