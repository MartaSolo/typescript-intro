"use strict";
var form = document.querySelector(".new-item-form");
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
// classes
// class instance
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes $").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
// class object
var invoice1 = new Invoice("Bob", "plumbing job", 300);
var invoice2 = new Invoice("Kate", "cleaning job", 150);
console.log(invoice1);
console.log(invoice2);
invoice1.client = "Garry";
invoice2.amount = 500;
var invoices = [];
invoices.push(invoice1);
invoices.push(invoice2);
console.log(invoices);
