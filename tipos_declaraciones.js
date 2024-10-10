//? UPPER_CASE para declarar constantes

const NOMBRE = 'Estefania Valencia'
const VARIABLE_CONSTANTE = 123

//? Se usa para declarar clases

//? Ejemplo:

class SerHumano {
  constructor(nombre, edad) {
    this.nombre = nombre;
  
    this.edad = edad;
  }

  miNombreEs() {
    return `Mi nombre es ${this.nombre}`;
  }

  miEdadEs() {
    return `Mi edad es ${this.edad}`;
  }
}

//? Objeto con lowerCamelCase
const personaInfo = {
  nombre: "Estefania",
  edad: 25,
  saludar() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  },
};

//? Función con lowerCamelCase
function mostrarSaludo(nombre) {
  if (typeof nombre !== "string" || nombre.trim().length === 0) {
    console.log("Por favor, proporciona un nombre válido.");
    return;
  }
  console.log(`Hola mundo ${nombre}`);
}

//? Uso del objeto y la función
console.log(personaInfo.saludar()); //* Hola, soy Estefania y tengo 25 años.
mostrarSaludo("Estefania"); //* Hola mundo Estefania
mostrarSaludo(""); //* Por favor, proporciona un nombre válido.
