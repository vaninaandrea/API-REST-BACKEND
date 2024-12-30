
//ejercicio 1 clase 12 

const prompt = require('prompt-sync')();

let suma = 0;
let numero = analizarInt(prompt("Ingrese un número:"));

while (numero >= 0) {
    suma += numero;
    numero = analizarInt(prompt("Ingrese un número:"));
}

console.log(`La suma de todos los números ingresados es: ${suma}`);

//ejercicio 2 clase 12 

const prompt = require('prompt-sync')();

let password;
do {
    password = prompt("Ingrese la contraseña:");
} while (password !== "1234");
console.log("Contraseña correcta");

//ejercicio 3 clase 12

const prompt = require("prompt-sync")({ sigint: true})
let numberx = parseInt(prompt("Por favor ingrese un numero: "));
let cantidad_impares = 0;

for(let i = 0; i <= numberx; i++){
        if(i %2 !== 0){
           cantidad_impares++;
        }
}
    console.log(`La cantidad de numeros impares es ${cantidad_impares}`);
    