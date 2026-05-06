class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hacerSonido() {
    return "Hace un sonido";
  }
}

class Perro extends Animal {
  hacerSonido() {
    return "guau";
  }
}

const perro1 = new Perro("Pirata");

console.log(perro1.nombre);
console.log(perro1.hacerSonido());