"use strict";
// const anchor = document.querySelector("a");
// console.log(anchor); // <a href="https://www.thenetninja.co.uk">The Net Ninja</a>
// console.log(anchor.href); // Object is possibly 'null'.
// how to deal with it
// 1 way
// if (anchor) {
//   console.log(anchor.href); // https://www.thenetninja.co.uk/
// }
// 2 way
// const anchor = document.querySelector("a")!;
// console.log(anchor.href); // https://www.thenetninja.co.uk/
// form
// const form = document.querySelector("form")!;
// const form = document.querySelector(".new-item-form")!;
var form = document.querySelector(".new-item-form");
// console.log(form);
// console.log(form.children);
// HTMLCollection(5) [div.field, div.field, div.field, div.field, button]
// inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
// console.log(type);
// console.log(tofrom);
// console.log(details);
// console.log(amount);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
