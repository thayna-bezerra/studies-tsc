"use strict";
let username = 'Thayna';
console.log(username);
let age = 17.0;
console.log(age);
let havehobbies = false;
//tipos explícitos
let myAge;
myAge = 17;
console.log(typeof myAge);
//array
let hobbies = ["music", "bodybuilding"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
// tuplas
let address = ["Av Rodoviaria", 163];
console.log(address);
//enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; //2
})(Color || (Color = {}));
let myColor = Color.Blue;
console.log(myColor);
console.log(Color.Gray);
//any
let car = 'BMW';
car = {
    marca: 'BMW',
    ano: 2010
};
console.log(car);
