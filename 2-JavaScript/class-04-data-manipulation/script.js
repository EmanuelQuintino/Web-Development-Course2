// strings

console.log("test");

let concept = "prototype (chain)";
let myName = "Emanuel Quintino";

console.log(myName.__proto__);
console.log(myName.toLocaleLowerCase());
console.log(myName.toLocaleUpperCase());

console.log(myName.slice(2));
console.log(myName.slice(-3));
console.log(myName.slice(2, -3));

console.log(concept.length);
console.log(concept.indexOf("o", 5));

// numbers

let num1 = 123456789;
let num2 = 5.9999942343256;

console.log(String(num1).length);
console.log(num2);
console.log(num2.toFixed(2));

console.log(Math.sqrt(81));
console.log(Math.pow(2, 10));

console.log(Math.abs(num2));
console.log(Math.trunc(num2));

console.log(Math.round(5.4)); // 0-4 / 5-9
console.log(Math.ceil(5.001));
console.log(Math.floor(5.999));

console.log(Math.random());
console.log(Math.ceil(Math.random() * 10));

const times = ["Corinthians", "Flamengo", "Vasco", "Fortaleza", "Ceará", "São Paulo"];

const randomNumber = Math.floor(Math.random() * times.length);
console.log(times[randomNumber]);
