
// ejercicio 1 clase 17

let estudiante = {
    nombre: "Merlina",
    edad: 33,
    notas: [8, 7, 9, 6, 10]
};

function ProcesadorEstudiante(estudiante) {

   estudiante.notas.push(7);

    estudiante.notas.shift();

    let suma = estudiante.notas.reduce((acc, nota) => acc + nota, 0);
    let promedio = suma / estudiante.notas.length; 
    let nombreMayusculas = estudiante.nombre.aMayusculas();
        nombre:nombreMayusculas,
        promedio:promedio
    };
}

let resultado = ProcesadorEstudiante(estudiante);
console.log("Estudiante: ", resultado);


// ejercicio 2 clase 17 

const prompt = require('prompt-sync')();

let oracion = prompt("Ingresa una oración:");

function procesarOracion(oracion) {
   
    let oracionSinEspacios = oracion.recortar();
    let palabras = oracionSinEspacios.dividir(" ");
    let posicionJavascript = palabras.indiceDe("javascript");
    let palabrasModificadas = palabras.mapa(palabra => palabra.replace(/a/g, '@'));


     let oracionFinal = palabrasModificadas.unirse("-");

    return {
        oracion: oracionFinal,
        posicionJavascript: posicionJavascript
    };
}

let resultado = procesarOracion(oracion);
console.log("Resultado:", resultado);


// ejercicio 3 clase 17

let productos = [
    { nombre: "Alfajores", precio: 30 },
    { nombre: "Chocolates", precio: 50 },
    { nombre: "Chupetines", precio: 70 },
    { nombre: "Caramelos", precio: 20 },
    { nombre: "Bombones", precio: 20 },
];

function gestionarProductos(productos) {
    
    let nuevoProducto = { nombre: "Galletas", precio: 25 };
    productos.empujar(nuevoProducto);

    
    productos.estallido();

    
    let productoBuscado = "Chocolates";
    let indiceProductoBuscado = -1;

    productos.Paracadauno((producto, indice) => {
        if (producto.nombre === productoBuscado) {
            indiceProductoBuscado = indice;
        }
    });

    
    let existeProductoMayor50 = productos.alguno(producto => producto.precio > 50);

    
    let nombresProductos = productos.mapa(producto => producto.nombre).unirse(", ");

    
    return {
        productos,
        indiceProductoBuscado,
        existeProductoMayor50,
        nombresProductos
    };
}

let resultado = gestionarProductos(productos);
console.log("Resultado:", resultado);






 