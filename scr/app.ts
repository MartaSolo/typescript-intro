import { Invoice } from "./classes/invoice.js";

// interface
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "marta",
  age: 38,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spend", amount);
    return amount;
  },
};

console.log(me);
// {name: 'marta', age: 38, speak: ƒ, spend: ƒ}

const greetPerson = (person: IsPerson) => {
  console.log("hello", person.name);
};

greetPerson(me); // hello marta

// classes

const invoice1 = new Invoice("Bob", "plumbing job", 300);
const invoice2 = new Invoice("Kate", "cleaning job", 150);
console.log(invoice1);
console.log(invoice2);

// DOM

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.value);
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
