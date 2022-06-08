import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/Payments.js";
import { HasFormatter } from "./interfaces/HasFormatter";

// DOM

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;

  let values: [string, string, number] = [
    tofrom.value,
    details.value,
    amount.valueAsNumber,
  ];

  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  console.log(doc);
});

// tuples

// array
let arr = ["run", 25, true];
arr[0] = false;
arr[1] = "jump";

let tup: [string, number, boolean] = ["run", 25, true];
tup[0] = 34;
// Type 'number' is not assignable to type 'string'.
tup[1] = "swim";
// Type 'string' is not assignable to type 'number'
tup[1] = 39;
