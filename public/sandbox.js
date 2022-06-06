"use strict";
// function signature
// example 1
var greet;
greet = function (name, greeting) {
    console.log("".concat(name, " says ").concat(greeting));
};
// example 2
var calc;
calc = function (num1, num2, action) {
    if (action === "add") {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
// example
var logDetails;
logDetails = function (ninja) {
    console.log("".concat(ninja.name, " is ").concat(ninja.age, " years old"));
};
