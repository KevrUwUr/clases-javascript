//? Declaración de funciones (Function Declaration)
//? Este tipo de función se puede invocar en cualquier parte del código, incluso antes de la declaración, debido al hoisting.
function saludar(nombre) {
  return `Hola, ${nombre}`;
}
console.log(saludar("Kevin")); //* Hola, Kevin

function hola() {
  console.log('Hola')
}

//? Expresión de función (Function Expression)
//? Las expresiones de función no se "levantan" (no hay hoisting), por lo que solo pueden ser usadas después de ser definidas.
const despedirse = function (nombre) {
  return `Adiós, ${nombre}`;
};
console.log(despedirse("Kevin")); //* Adiós, Kevin

//? Funciones anónimas
//? Son funciones sin nombre y suelen usarse como callbacks o funciones que no necesitan reutilización.
const boton = document.createElement("button");
boton.textContent = "Click Me";
boton.addEventListener("click", function () {
  console.log("Botón clicado");
});
document.body.appendChild(boton);

//? Funciones flecha (Arrow Functions)
//? Son una forma más concisa de escribir funciones y no tienen su propio valor de `this`.
const multiplicar = (a, b) => {
  const respuesta = a * b
  return respuesta
};
console.log(multiplicar(5, 3)); //* 15

//? Función de retorno implícito
//? Si la función tiene una sola línea de código que retorna un valor, se puede omitir la palabra `return` y las llaves.
const cuadrado = (n) => n * n;
console.log(cuadrado(4)); //* 16

//? Función como parámetro (Callback)
//? Las funciones pueden pasarse como argumentos a otras funciones.
function procesarDatos(nombre, callback) {
  console.log(`Procesando datos de ${nombre}...`);
  callback(nombre);
}

procesarDatos("Kevin", function (nombre) {
  console.log(`Datos de ${nombre} procesados.`);
});

//* Procesando datos de Kevin...
//* Datos de Kevin procesados.

//? Función autoinvocada (IIFE - Immediately Invoked Function Expression)
//? Se invoca automáticamente justo después de ser definida.
(function () {
  console.log("Esto es una función autoinvocada.");
})();
//* Esto es una función autoinvocada.

//? Funciones con valores por defecto
//? Los parámetros pueden tener valores predeterminados si no se pasan argumentos.
function saludarConEdad(nombre = "Invitado", edad = 18) {
  return `Hola ${nombre}, tienes ${edad} años.`;
}
console.log(saludarConEdad()); //* Hola Invitado, tienes 18 años.
console.log(saludarConEdad("Kevin", 25)); //* Hola Kevin, tienes 25 años.

//? Funciones generadoras (Generator Functions)
//? Las funciones generadoras pueden pausar su ejecución y luego retomarla, lo que permite producir una secuencia de valores.
function* generador() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generador();
console.log(gen.next().value); //* 1
console.log(gen.next().value); //* 2
console.log(gen.next().value); //* 3

function* generadorInfinito() {
  let i = 0;
  while (true) {
    yield i++; //? Produce valores indefinidamente
  }
}

const infinito = generadorInfinito();

console.log(infinito.next().value); //* 0
console.log(infinito.next().value); //* 1
console.log(infinito.next().value); //* 2

//? Función recursiva
//? Una función recursiva es aquella que se llama a sí misma hasta cumplir una condición de parada.
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); //* 120

//? Funciones asincrónicas (Async/Await)
//? Estas funciones permiten manejar código asincrónico de una forma más fácil y legible.
const funcionAcync = async () => {
}
async function obtenerDatos() {
  const datos = await fetch("https://pokeapi.co/api/v2/pokemon");
  const resultado = await datos.json();
  return resultado;
}

//? Función pura
//? No tiene efectos secundarios y siempre produce el mismo resultado para los mismos argumentos.
function suma(a, b) {
  return a + b;
}
console.log(suma(2, 3)); //* 5

//? Función de primera clase
//? Las funciones en JavaScript son de primera clase, lo que significa que se pueden asignar a variables, pasarse como argumentos y 
//retornarse desde otras funciones.
const operaciones = {
  'nombre': 'Estefania',
  suma: (a, b) => a + b,
  resta: (a, b) => a - b,
  multiplicacion: (a, b) => a * b,
};
console.log(operaciones.suma(5, 3)); //* 8
console.log(operaciones.nombre); //* Estefania


const test = [1,2,4,5]

test.pop(2)