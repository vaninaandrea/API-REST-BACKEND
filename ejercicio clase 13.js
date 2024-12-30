
// ejercicio 1 clase 13

function calcularAreaTriangulo (base, altura){
    return (base * altura) / 2
}
console.log("El area del triangulo es ", calcularAreaTriangulo(10, 5));


// ejercicio 2 clase 13 

function (a, b) {
    if (a > b) {
        return a; 
    } else {
        return b; 
    }
};
console.log(encontrarMayor(8, 15)); 

//ejercicio 3 clase 13

let saludoGlobal = "Hola desde el scope global";

function mostrarMensaje() {
    
    
    let saludoLocal = "Hola desde el scope local";
    console.log(saludoGlobal);
    
    console.log(saludoLocal); 
    
mostrarMensaje();

