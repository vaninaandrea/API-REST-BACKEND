

// ejercicio 1 clase 11


const prompt = require('prompt-sync')();


let numero = parseInt(prompt("Ingresa un número: "));


    console.log("El número es positivo. Esto significa que está por encima de cero.");

} else if (numero < 0) {

    console.log("El número es negativo. Esto significa que está por debajo de cero.");
} else {
    console.log("El número es cero. Esto significa que no tiene valor positivo ni negativo.");

}

// ejercicio 2 clase 11 

const prompt = require('prompt-sync')();

let color = prompt("Ingresa un color del semáforo (rojo, amarillo o verde): ").a minuscula ();


cambiar (color) {
    case "rojo":
        console.log("Alto, no puedes avanzar.");
        romper;
    case "amarillo":
        console.log("Precaución, prepárate para avanzar.");
        romper;
    case "verde":
        console.log("Avanza con seguridad.");
        romper;
    por defecto:
    
        console.log("Color no reconocido, ingresa rojo, amarillo o verde.");
}

// ejercicio 3 clase 11

const prompt = require('prompt-sync')();

 let limite = analizar(prompt("Ingresa un número positivo: "));

if (limite > 0) {
    console.log("Contemos desde 1 hasta " + limite + ":");

    for (let i = 1; i <= limite; i++) {
        console.log(i);
    }
} else {
    console.log("Debes ingresar un número positivo.");
}