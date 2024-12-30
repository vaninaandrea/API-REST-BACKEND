dejar numero1 = analizarFloat(inmediato("Ingrese el primer número:"));
dejar numero2 = analizarFloat(inmediato("Ingrese el segundo número:"));

si (numero1 > numero2) {
    console.log(`El número ${numero1} es mayor que ${numero2}`);
} demas si (numero1 < numero2) {
    console.log(`El número ${numero2} es mayor que ${numero1}`);
} demas {
    console.log("Ambos números son iguales");
}