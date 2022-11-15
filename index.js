//   ::::::::::::::::  Topic Name : Array.slice ::::::::::::::::

const sliceArray = [1, 2, 3, 4, 5, 6, 7];
const newArray = sliceArray.slice(1, 5);
// sliceArray.slice(startingIndex , endIndex)

// console.log(sliceArray);
// console.log(newArray);

// Result :::
// *) Return New Array

//   ::::::::::::::::  Topic Name : Array.splice ::::::::::::::::

const fruits = ["Banana", "Orange", "Apple", "Mango"];
//  At position 2, remove 0 , add 2 elements:
fruits.splice(3, 0, "Lemon", "Kiwi");
//  fruits.splice(index, remove value, [ Elements]);
// console.log(fruits);

// Result :::
// *) add value in Array

//   ::::::::::::::::  Topic Name : Math.ceil and  Math.floor ::::::::::::::::
let myNumber = 22.22;
let resultCeil = Math.ceil(myNumber);
let resultFloor = Math.floor(myNumber);
// console.log(resultCeil);
// console.log(resultFloor);

//   ::::::::::::::::  Topic Name : Math.ceil and  array.map() ::::::::::::::::
const array = [1, 6, 9, 16];

// pass a function to map
const map = array.map((x) => x * 2);
// array.map(callbackFunction);

console.log(map);

// Result :::
// array.map is  like a loop
// *) Return New Array

//   ::::::::::::::::  Topic Name : array.filter ::::::::::::::::
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const resultfilter = words.filter((word) => word.length < 6);

console.log(resultfilter);

// Result :::
//  array.filter is  like a loop
// *) Return New Array
