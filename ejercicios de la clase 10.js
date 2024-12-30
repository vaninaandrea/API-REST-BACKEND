//ejercicio 1 clase 10 

let edad = 40;  
let peso = 60; 

console.log(edad, peso); 

//ejercicio 2 clase 10

const prompt = require('prompt-sync')();  
let nombre = prompt("Ingresa tu nombre: ");  
let edad = prompt("Ingresa tu edad: "); 
let peso = prompt("Ingresa tu peso: "); 

console.log(`Hola, ${nombre}. Tienes ${edad} años y pesas ${peso} kg.`);  

// ejercicio 3 clase 10 

const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

let edad = parseInt(prompt("Ingresa tu edad: "));  

if (edad >= EDAD_MINIMA && edad <= EDAD_MAXIMA) {
    console.log("Tu edad está dentro del rango permitido.");
} else {
    console.log("Tu edad está fuera del rango permitido.");
}