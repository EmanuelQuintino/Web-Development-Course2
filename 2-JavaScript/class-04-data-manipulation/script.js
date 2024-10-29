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
console.log(concept.indexOf("web", 5));

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
console.log(Math.ceil(Math.random() * 10)); //⭐

const times = ["Corinthians", "Flamengo", "Vasco", "Fortaleza", "Ceará", "São Paulo"];

const randomNumber = Math.floor(Math.random() * times.length);
console.log(times[randomNumber]);

// array
const crush = ["Tiazinha", "Rambo", "Bolzo", "Paola Oliveira", "Mariana Rui Barbosa"];

console.log(crush.length);
console.log(crush[1]);
crush[0] = "Feiticeira";
console.log(crush);

let a = "Emanuel";
a[1] = "M"; // string is immutable!
console.log(a);

console.log(crush.join("-"));
console.log("Bem vindo à aula".replaceAll(" ", "-"));

console.log(crush.includes("Rambo"));
console.log("João Emanuel Vieira Quintino".split(" ")[1]);
console.log(crush.reverse());
console.log("Emanuel".split("").reverse().join(""));

// Crie uma função que receba um texto como parâmetro e diga quantas palavras ele tem.

function wordCount(text) {
  const count = text.split(" ").length;
  return count;
}
const text = "Emanuel Quintino";

console.log(wordCount(text));
