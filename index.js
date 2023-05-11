//>>>>>>>>>>>>>>>>>>>>>>>>>> Topic Name >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Hoisting in JavaScript
// typeoof
// array.filter
// Array.splice
// array.map()
// array.find
// array.join
// array.reverse
// str.split
// array.join, array.reverse, str.split
// Math.ceil and  Math.floor
// constructor
// classes
// classes with super keys
// array..reduce()
// Promise
// this in arrow function and simple function
// Object.values(obj)
// array.flat()
// forEach
// .forEach(), .map(), .filter() .... What's the difference?







//   ::::::::::::::::  Topic Name : Hoisting in JavaScript ::::::::::::::::::::::::::::::
// CREATION phase mai function and variable k declear ko top p move karwa deya
// jata hy us k scope k about before the code execute
// Hoisting is not apply in arrow function

//**)  function Hoisting >>>
//*) arrow function
// const a = (one, two) => {
//   console.log(one + two);
// };
// a(12, 20);

//**)  simple function
// sum(12, 15);
// function sum(one, two){
//   console.log(one + two);
// };

// variable Hoisting >>>
// console.log(b); // undefined
// var b = 1;

// Explanation of hoisting :::
//     line by line chalta hy , phly saray variable ko dekhta hy aur usko undefined rakhta hy,
//     phr value ko dekhta hy aur undefined mai value put karta hy,
//     function ko aik box ki tarah treat karta hy first attempt mai

//   ::::::::::::::::  Topic Name :typeoof :::::::::::::::::::::::::::::::::::::::::::::
typeof "John"; // Returns "string"
typeof 3.14; // Returns "number"
typeof NaN; // Returns "number"
typeof false; // Returns "boolean"
typeof [1, 2, 3, 4]; // Returns "object"
typeof { name: "John", age: 34 }; // Returns "object"
typeof new Date(); // Returns "object"
typeof function () {}; // Returns "function"
typeof myCar; // Returns "undefined" *
typeof null; // Returns "object"

//   ::::::::::::::::  Topic Name : Array.isArray([array]) ::::::::::::::::::::::::::::::::::::

const myFruits = ["Banana", "Orange", "Apple", "Mango"];
let resultArr = Array.isArray(myFruits);
// console.log(resultArr);

//   ::::::::::::::::  Topic Name : Array.slice :::::::::::::::::::::::::::::::::::::::::::::::

const sliceArray = [1, 2, 3, 4, 5, 6, 7];
const newArray = sliceArray.slice(1, 5);
// sliceArray.slice(startingIndex , endIndex)

// console.log(sliceArray);
// console.log(newArray);

// Result :::
// *) Return New Array

//   ::::::::::::::::  Topic Name : Array.splice ::::::::::::::::::::::::::::::::::::::::::::::

const fruits = ["Banana", "Orange", "Apple", "Mango"];
//  At position 2, remove 0 , add 2 elements:
fruits.splice(3, 0, "Lemon", "Kiwi");
//  fruits.splice(index, remove value, [ Elements]);
// console.log(fruits);

// Result :::
// *) add value in Array

//   ::::::::::::::::  Topic Name : array.map() :::::::::::::::::::::::::::::::::::::::::::::::
const array = [1, 6, 9, 16];

// pass a function to map
const map = array.map((x) => x * 2);
// array.map(callbackFunction);

// console.log(map);

// Result :::
// array.map is  like a loop
// *) Return New Array

//   ::::::::::::::::  Topic Name : array.filter :::::::::::::::::::::::::::::::::::::::::::::::::

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const resultfilter = words.filter((word) => word.length < 6);

// console.log(resultfilter);

// Result :::
// *) Return New Array

//   ::::::::::::::::  Topic Name : array.find ::::::::::::::::::::::::::::::::::::::::::::::

//  :::::  Example 1 :::::::::::
// const array1 = [5, 9, 8, 130, 44];
// const found = array1.find(element => element > 10);
// console.log(found);

// :::::   Example 2 :::::::::
const inventoryOne = [
  { name: "apples", quantity: 2 },
  { name: "cherries", quantity: 8 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
  { name: "cherries", quantity: 15 },
];

const result = inventoryOne.find(({ name }) => name === "cherries");
// console.log(result);

// :::::   Example 3  :::::::::
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const resultthird = inventory.find((fruit) => {
  return fruit.name === "cherries";
});
// console.log(resultthird);

// Result :::
// *) Return a specific value
// *) not return array

//   ::::::::::::::::  Topic Name : array.join ::::::::::::::::::::::::::::::::::::::::::::::

// const str = "this is a test string";
const arrayJoin = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

// console.log(arrayJoin.join());
// console.log(arrayJoin.join(" "));
// console.log(arrayJoin.join("-"));
// console.log( typeof  arrayJoin.join(" "));

// Result :::
// *) apply in array
// *) it convert array into string
// *) not apply in sting

//   ::::::::::::::::  Topic Name : array.reverse :::::::::::::::::::::::::::::::::::::::::::::

var myArrReverse = [34, 234, 567, 4];
var reverseArr = myArrReverse.reverse();
// console.log(reverseArr);

// Result :::
// *) Return reverse array
// *) apply in array
// *) not apply in string

//   ::::::::::::::::  Topic Name : str.split ::::::::::::::::::::::::::::::::::::::::::

const strSplit = "adnan is best";
const arr = strSplit.split(" ");
// console.log(arr);

// Result :::
// *) apply in string
// *) it convert string into array
// *) not apply in array

// ::::::::::: (combine above three Topics ) Topic Name : array.join, array.reverse, str.split ::::::::::::::::

const stringTitle = "this is a test string";
const reverseStr = stringTitle.split(" ").reverse().join("");
// console.log(reverseStr);

const strTwo = "Adnan is";
const resultSplit = strTwo.split(" ");
// console.log(resultSplit);
const resultReverse = resultSplit.reverse();
// console.log(resultReverse);
const resultJoin = resultReverse.join("");
// console.log(resultJoin);

//   ::::::::::::::::  Topic Name : Math.ceil and  Math.floor ::::::::::::::::::::::::::::::::::::

let myNumber = 22.22;
let resultCeil = Math.ceil(myNumber);
let resultFloor = Math.floor(myNumber);
// console.log(resultCeil);
// console.log(resultFloor);

//   ::::::::::::::::  Topic Name : Constructor ::::::::::::::::::::::::::::::::::::::::::::::::::

function MyConstructor(name, age, myClass, subject) {
  this.name = name;
  this.age = age;
  this.myClass = myClass;
  this.subject = subject;
}

const resultMyConstructor = new MyConstructor("adnan", 25, "Graduation", "Cs");
// console.log(resultMyConstructor);
// console.log("class >>>>", resultMyConstructor.myClass);

// Result :::
// *) first alphabet in Construction function is Capital
// *) it gives object

//   ::::::::::::::::  Topic Name : classes ::::::::::::::::::::::::::::::::::::::::::::::::::

class classMates {
  constructor(firstName, lastName, semester) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.semester = semester;
  }
}

let resultClassMates = new classMates("ali", "ahmed", 2);

// console.log(resultClassMates);

// Result :::
// *) it start with class
// *) it gives object

//   ::::::::::::::::  Topic Name : classes with super keys :::::::::::::::::::::::::::::::::

class Parentclass {
  Parentclass;
  constructor(firstName, lastName, semester) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.semester = semester;
  }
}

class Chilclass extends Parentclass {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }
  getFullNAme() {
    return this.firstName + " " + this.lastName;
  }
}
// const myResult = new Chilclass("adnan", "abrar");
// console.log(myResult.getFullNAme());

// Result :::
// *) super keyword define in child class and fetch value in parent class

//   ::::::::::::::::  Topic Name : array..reduce() :::::::::::::::::::::::::::::::::::::::::::

// Example ::: 01
const S = "PeteR";
const Myfunc = (str) =>
  str
    .split("")
    // S = [ "P" , "e" ,"t" ,"e" ,"R"]
    .reduce(
      // acc means previous value
      // char means current value
      (acc, char) =>
        (acc +=
          char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase())
    );

// console.log(Myfunc(S));

// Example ::: 02
let newarr = [1, 2, 3, 4, 5, 7];

let reduceResult = newarr.reduce((prev, next) => {
  return (prev += next);
});

// console.log(reduceResult);

// Result ::::
// *) return function and initialial value
// *) function have two parameter one is previous value and second is next value
// *) it works like  a loop in array

//   ::::::::::::::::  Topic Name : Promise ::::::::::::::::::::::::::::::::::::::::::::::::::

const prompFunc = (completed) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (completed) {
        resolve("Done!!!!!");
      } else {
        reject("Hello Error");
      }
    }, 2000);
  });
};

// prompFunc(false)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// let num = 0;
// if (nm !== 0) {
//    num = 1;
// } else {
//    num = 2;
// }
// console.log(num === 2)

// let a = 3;
// console.log(a++);
// console.log(a);
// console.log(++a);

// console.log();

//   ::::::::::  Topic Name :this in arrow function and simple function :::::::::::::::::::::::::::::::::::::::::::::

// const person = {
//   test() {
//     setTimeout(() => {
//       console.log(this);
//     }, 2000);

//     setTimeout(function () {
//       console.log(this);
//     }, 2000);
//   },
// };

// person.test();

// Explation >>>>
// means simple function global ko follow karta hy jb k arrow function parent ko follow karta hy

// Answer >>>
// undefined
// {test: ƒ}test: test() {     setTimeout(() => {…}[[Prototype]]: Object
//  Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

//   ::::::::::  Topic Name :Object.values(obj) :::::::::::::::::::::::::::::::::::::::::::::
const objectObject = {
  a: "somestring",
  b: 42,
  c: false,
};

// console.log(Object.values(objectObject));
// Expected output: Array ["somestring", 42, false]

// Result >>>
// Object ki sari key ki value ak aik object ban jaey ga

//   ::::::::::  Topic Name :array.flat() :::::::::::::::::::::::::::::::::::::::::::::

const arrayFlat = [[1, 2, 3]];
// console.log(arrayFlat.flat());

// Result >>>
// The flat() method creates a new array with all sub-array elements concatenated
// into it recursively up to the specified depth.

//   ::::::::::  Topic Name : forEach() :::::::::::::::::::::::::::::::::::::::::::::

const foreachfruits = ["apple", "orange", "cherry"];

// foreachfruits.forEach((name) => {
//   console.log(`I Eat ${name}`);
// });


// Result >>>
// .forEach(), is used to execute the same code on every element in an array 
// but does not change the array and it returns undefined.
