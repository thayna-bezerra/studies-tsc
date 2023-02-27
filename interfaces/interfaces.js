"use strict";
function greetWithHello(people) {
    console.log('Hello, ' + people.name);
}
function changeName(people) {
    people.name = 'Joana';
}
const people = {
    name: 'Maria',
    age: 23,
    greet(surname) {
        console.log("Hello, my name is " + this.name + ' ' + surname);
    }
};
greetWithHello(people);
changeName(people);
/*greetWithHello({ name: 'Jonas', age: 39, height: 1.75 })*/
people.greet('Ghrool');
//Usando Classes...
class Client {
    constructor() {
        this.name = '';
        this.lastSale = new Date;
    }
    greet(surname) {
        console.log("Hello, my name is " + this.name + " " + surname);
    }
}
const myClient = new Client();
myClient.name = 'Han';
greetWithHello(myClient);
myClient.greet('Solo');
console.log(myClient.lastSale);
let potentiation;
potentiation = function (base, exp) {
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potentiation(3, 10));
