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

const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form);

// console.log(form.children);
// HTMLCollection(5) [div.field, div.field, div.field, div.field, button]

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
// console.log(type);
// console.log(tofrom);
// console.log(details);
// console.log(amount);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.value);
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
