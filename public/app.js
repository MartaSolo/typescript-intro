import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payments.js";
// DOM
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
// generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "bob", age: 40 });
console.log(docOne); // {name: 'bob', age: 40, uid: 10}
console.log(docOne.name); // bob
let docTwo = addUID({ age: 30 });
// Argument of type '{ age: number; }' is not assignable to parameter of type '{ name: string; }'.
console.log(docTwo);
const docThree = {
    uid: 1,
    resourceName: "person",
    data: "employer",
};
const docFour = {
    uid: 1,
    resourceName: "person",
    data: { name: "employer", status: "active" },
};
