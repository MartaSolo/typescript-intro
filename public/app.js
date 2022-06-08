import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/Payments.js";
// DOM
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    let values = [
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    ];
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    console.log(doc);
});
// tuples
// array
let arr = ["run", 25, true];
arr[0] = false;
arr[1] = "jump";
let tup = ["run", 25, true];
tup[0] = 34;
// Type 'number' is not assignable to type 'string'.
tup[1] = "swim";
// Type 'string' is not assignable to type 'number'
tup[1] = 39;
