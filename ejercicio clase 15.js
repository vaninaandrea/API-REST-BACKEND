
// ejercicio 1 clase 15

let personajes = ["Link", "Zelda"];
personajes.push("Mario", "Luigi");
console.log(personajes);

// ejercicio 2 clase 15

let invitados = ["Ana", "Juan", "Carlos", "Sofía"];
let invitadoEliminado = invitados.pop(); 
console.log("Invitado eliminado:", invitadoEliminado);
console.log("Lista actualizada:", invitados);

// ejercicio 3 clase 15 

let mascotas = ["Perro", "Gato", "Conejo"];
mascotas.unshift("Hámster"); 
let mascotaAtendida = mascotas.shift(); 
console.log("Mascota atendida:", mascotaAtendida);
console.log("Fila actualizada:", mascotas);
const numbers = [2, 4, 6, 8];
const squares = numbers.map(num => num ** 2); // Calcula el cuadrado de cada número.
console.log(squares); // Resultado: [4, 16, 36, 64]

