function Persona(nombre) {
  this.nombre = nombre;
}

Persona.prototype.caminar = function () {
  return "Estoy caminando";
};

const persona1 = new Persona("Tiziana");
const persona2 = new Persona("Carolina");

console.log(persona1.caminar());
console.log(persona2.caminar());