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
// const addUID = <T extends { name: string }>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };
// let docOne = addUID({ name: "bob", age: 40 });
// console.log(docOne); // {name: 'bob', age: 40, uid: 10}
// console.log(docOne.name); // bob
// let docTwo = addUID({ age: 30 });
// // Argument of type '{ age: number; }' is not assignable to parameter of type '{ name: string; }'.
// console.log(docTwo);
// // generics with interfaces
// interface Resource<T> {
//   uid: number;
//   resourceName: string;
//   data: T;
// }
// const docThree: Resource<string> = {
//   uid: 1,
//   resourceName: "person",
//   data: "employer",
// };
// const docFour: Resource<object> = {
//   uid: 1,
//   resourceName: "person",
//   data: { name: "employer", status: "active" },
// };
// enums
// interface Resource<T> {
//   uid: number;
//   resourceType: number;
//   data: T;
// }
// const docOne: Resource<object> = {
//   uid: 1,
//   resourceType: 3,
//   data: { title: "name of the wind" },
// };
// const docTwo: Resource<object> = {
//   uid: 10,
//   resourceType: 4,
//   data: { name: "marta" },
// };
// -------------
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docOne = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: "name of the wind" },
};
console.log(docOne);
// {uid: 1, resourceType: 0, data: {…}}
const docTwo = {
    uid: 10,
    resourceType: ResourceType.PERSON,
    data: { name: "marta" },
};
console.log(docTwo);
// {uid: 10, resourceType: 4, data: {…}}
