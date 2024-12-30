dejar numero1 = analizarFloat(inmediato("Ingrese el primer número:"));
dejar numero2 = analizarFloat(inmediato("Ingrese el segundo número:"));

si (numero1 > numero2) {
    console.log(`El número ${numero1} es mayor que ${numero2}`);
} demas si (numero1 < numero2) {
    console.log(`El número ${numero2} es mayor que ${numero1}`);
} demas {
    console.log("Ambos números son iguales");
}

//ejercicio 2 .clase 9

const RANGO_MINIMO = 10; // Puedes cambiar este valor
const RANGO_MAXIMO = 20; // Puedes cambiar este valor


let numero = parseFloat(prompt("Ingrese un número:"));

if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
    console.log("El número está dentro del rango");
} else {
    console.log("El número está fuera del rango");

    //ejercicio 3 clase 9

 let condicion1 = prompt("Ingrese true o false para la primera condición:").a minuscula() === "verdadero";
let condicion2 = prompt("Ingrese true o false para la segunda condición:").a minuscula () === "verdadero";


console.log(`condicion1 Y condicion2: ${condicion1 && condicion2}`);
console.log(`condicion1 O condicion2: ${condicion1 || condicion2}`);
console.log(`NO condicion1: ${!condicion1}`);
