//  :::::::::::::::Daily praactice ::::::::::::::::::
//  *) get a  name in object by using function
//  *) inverse string (Two Method) start  (combine array.join(), array.reverse(), string.split(" ") )

//  :::::::::::::::  praactice ::::::::::::::::::

// get a  name in object by using function
const obj = {
  firstName: "Adnan",
  lastName: "Abrar",
  getFullName() {
    return this.firstName + this.lastName;
  },
};

console.log(obj.getFullName());

//  :::::::::::::::  inverse string (Two Method) start ::::::::::::::::::
// let str = "hello"

// Method One
// console.log(str.split("").reverse("").join(""));

//  Method Two
// let str = "hello"
// const myfunc = (val) => {
//   let newStr = "" ;
//   for (let i =  val.length - 1 ; i >= 0 ; i-- ){
//      newStr = newStr += val[i]
//   }
//   return newStr;
// }

// console.log(myfunc(str));

//  :::::::::::::::  inverse string (Two Method)  end::::::::::::::::::



// Q:1) Which of the following variables contains a truthy value?
// Ans) Correct, non-empty strings are truthy!

// Q:2)  What is string interpolation?
// Ans) using template literals to embed variables into strings
