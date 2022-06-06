"use strict";
// let greet = () => {
//   console.log("hello world");
// };
// greet = "Bob"; // Type 'string' is not assignable to type '() => void'
// ------------------
// let greet: Function;
// greet = () => {
//   console.log("hello you");
// };
// ------------------
// optional parameter
// const add = (a: number, b: number, c?: number | string) => {
//   console.log(a + b);
//   console.log(a + b + c);
// };
// add(5, 10); // 15   // NaN
// add(5, 10, 2); // 15    //17
// ------------------
// default parameter
// const add = (a: number, b: number, c: number = 8) => {
//   console.log(a + b);
//   console.log(a + b + c);
// };
// add(5, 10); // 15   // 23
// add(5, 10, 2); // 15    //17
// ------------------
// return value
// 1. inference
// const minus = (a: number, b: number) => {
//   return a - b;
// };
// let result = minus(10, 5);
// result type : number
// 2. defined explicitly
var minus = function (a, b) {
    return a - b;
};
var result = minus(10, 5);
console.log(result);
