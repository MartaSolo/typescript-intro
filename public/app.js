import { Invoice } from "./classes/invoice.js";
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
// classes
const invoice1 = new Invoice("Bob", "plumbing job", 300);
const invoice2 = new Invoice("Kate", "cleaning job", 150);
console.log(invoice1);
console.log(invoice2);
