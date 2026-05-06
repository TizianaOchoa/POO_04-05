function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;

  this.saludar = function () {
    return `Hola, soy ${this.nombre}`;
  };
}

// Crear 2 personas
const persona1 = new Persona("Tiziana", 19);
const persona2 = new Persona("Carolina", 40);

console.log(persona1.saludar());
console.log(persona2.saludar());