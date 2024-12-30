

// ejercicio 1 clase 14 
const prompt = require('prompt-sync')();

const calcularPrecioIva = (precio, iva) => precio + (precio * iva / 100);

let precio = parseFloat(prompt("Ingresa el precio del producto: "));
let iva = parseFloat(prompt("Ingrese el porcentaje de IVA (solo numero): "));
let precioFinal = calcularPrecioIva(precio, iva);

console.log(`El precio final con IVA es: ${precioFinal}`);

// ejercicio 2 clase 14

const prompt = require('prompt-sync')();

const calcularPromedio = (calificaciones) => {
    let suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    return suma / calificaciones.length;
};

let calificaciones = [];
for (let i = 0; i < 5; i++) {
    calificaciones[i] = parseFloat(prompt(`Ingresa la calificación ${i + 1}:`));
}

let promedio = calcularPromedio(calificaciones);
console.log(`El promedio de las calificaciones es: ${promedio}`);

// ejercicio 3 clase 14 

const prompt = require("prompt-sync")({ sigint: true})
let edad = parseFloat(prompt("Por favor ingrese su edad: ")); 
const clasificarEdad = (edad)=>{
    if(edad > 0 && edad < 13){
       return `Ninio`;
    } else if(edad >= 13 && edad < 19){
        return `Adolescente`;
    } else if(edad >= 19 && edad <= 60){
        return `Adulto`; 
    } else{
        return `Adulto Mayor`;
    }
}
    console.log(clasificarEdad(edad));