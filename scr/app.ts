const form = document.querySelector(".new-item-form") as HTMLFormElement;

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

// classes

// class instance
// class Invoice {
//   client: string;
//   details: string;
//   amount: number;

//   constructor(c: string, d: string, a: number) {
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }
//   format() {
//     return `${this.client} owes $${this.amount} for ${this.details}`;
//   }
// }

// // class object
// const invoice1 = new Invoice("Bob", "plumbing job", 300);
// const invoice2 = new Invoice("Kate", "cleaning job", 150);
// console.log(invoice1);
// console.log(invoice2);

// invoice1.client = "Garry";
// invoice2.amount = 500;

// let invoices: Invoice[] = [];
// invoices.push(invoice1);
// invoices.push(invoice2);
// console.log(invoices);

// invoices.forEach((invoice) => {
//   console.log(
//     invoice.client,
//     invoice.details,
//     invoice.amount,
//     invoice.format()
//   );
// });

// class with private properties

// class instance
// class Invoice {
//   readonly client: string;
//   private details: string;
//   public amount: number;

//   constructor(c: string, d: string, a: number) {
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }
//   format() {
//     this.client = "Alex";
//     // Cannot assign to 'client' because it is a read-only property.
//     return `${this.client} owes $${this.amount} for ${this.details}`;
//   }
// }

// // class object
// const invoice1 = new Invoice("Bob", "plumbing job", 300);
// const invoice2 = new Invoice("Kate", "cleaning job", 150);
// console.log(invoice1);
// console.log(invoice2);

// invoice1.details = "for teaching";
// // Property 'details' is private and only accessible within class 'Invoice'
// invoice2.client = "Steve";
// // Cannot assign to 'client' because it is a read-only property.

// let invoices: Invoice[] = [];
// invoices.push(invoice1);
// invoices.push(invoice2);

// invoices.forEach((invoice) => {
//   console.log(
//     invoice.client,
//     invoice.details,
//     invoice.amount,
//     invoice.format()
//   );
// });
// Property 'details' is private and only accessible within class 'Invoice'

// shorthand for classes with modifiers
class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
const invoice1 = new Invoice("Bob", "plumbing job", 300);
const invoice2 = new Invoice("Kate", "cleaning job", 150);
console.log(invoice1);
console.log(invoice2);
