// alert("hola mundo");

console.log("Hola mundo desde java");
let nombre = "Juan"; // Variable que puede cambiar
let edad = 25;
const PI = 3.1416; // Variable constante (no cambia)

console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);

let cadena = "Hola, mundo";
let numero = 42;
let booleano = true;
let lista = [1, 2, 3, 4];
let objeto = { nombre: "Ana", edad: 25 };

console.log(cadena);
console.log(numero);
console.log(booleano);
console.log(lista);
console.log(lista[1]);
console.log(lista.length);
console.log(objeto);
console.log(objeto.nombre);

let hora = 19;
if (hora < 12) {
  console.log("Buenos días");
} else if (hora < 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}

function saludar(nombre) {
    return `Hola, ${nombre}`;
  }
  
  console.log(saludar("Carlos")); // Resultado: Hola, Carlos