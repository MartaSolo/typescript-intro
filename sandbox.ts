// any type
let age: any;
age = 25;

let age: any = 25;
age = true; // true
age = 3; //3
age = { name: "marta" }; // {name: 'marta'}

console.log(age);

//
let mixed: any[] = [];

mixed.push(false);
mixed.push("bob");
mixed.push(1);
console.log(mixed);
// [false, 'bob', 1]

let mixedObject: { name: any; age: any };
mixedObject = { name: 13, age: "unknown" };
console.log(mixedObject);
// {name: 13, age: 'unknown'}
