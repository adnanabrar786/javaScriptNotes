// setTimeout + Closures Interview Question | Namaste  JavaScript Ep. 11


// let b = 40 ;
const a = () => {

    for(i = 0 ; i <= 5; i++){
        setTimeout(() => {
            console.log(i);
        }, i * 3000);
    }

    console.log("hello world");
}

a();


// Closures in JS  | Namaste JavaScript Episode 10
// function a(){
//    let a = 7;
//    return function b () {
//    console.log(a);
//    }
// }

// let z = a();
// console.log(z);
// z();


// BLOCK SCOPE & Shadowing in JS | Namaste JavaScript Ep. 9

// let a = 100;
// {
//    a = 10;
// }
// console.log(a);
// console.log(e);
// console.log(f);

// // lexical environment
// function a() {
//     var b = 10;
//     c();
//     function c(){
//         console.log(b);
//     }
// }
// a();

// function a() {
//     console.log(b);
// }

// var b = 10 ;
// a();

// var x= 1;
// a();
// b();

// console.log(x);

// function a() {
//      var x = 10;
//      console.log(x);
// }

// function b() {
//      var x = 100;
//      console.log(x);
// }

// myfunc();

// console.log(x);

// const x = "23";

// function myfunc(a, b, c, d) {
//   console.log(arguments);
// }
// myfunc("1", "2", "3", "4");

// const arrowfunc = function(a, b, c, d)  {
//     console.log(arguments,">>>>>>>>>");
// };

// arrowfunc("1", "2", "3", "4");

// console.log(arrowfunc);

// function myfunctwo() {
//   console.log(arguments);
// }

// myfunctwo();
// console.log("hello world");

// extra practice
// function subtract(...[a,b]){
//     return a- b;
// }

// var x = subtract(10);
// var y = subtract(10, 5);
// var z = subtract(10, 5, 5);

// console.log(x);
// console.log(y);
// console.log(z);

// console.log(myfunc());
// console.log(x);

// var x= 1;
// a();
// b();

// function a() {
//      var x = 10;
//      console.log(x);
// }

// function b() {
//      var x = 100;
//      console.log(x);
// }
