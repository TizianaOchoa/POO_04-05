# 📘 Ejercicios de Programación Orientada a Objetos en JavaScript

## 📚 Descripción

Este repositorio contiene una colección de ejercicios prácticos de **Programación Orientada a Objetos (POO)** desarrollados en **JavaScript**.

El objetivo es comprender los conceptos fundamentales de POO aplicados a JavaScript, comenzando desde lo más básico hasta estructuras más avanzadas como clases, herencia y prototipos.

---

## 🎓 Información Académica 
* 📖 **Materia:** Programación Orientada a Objetos
* 👨‍🏫 **Profesor:** Narciso Perez
* 💼 **Carrera:** Programación Full Stack
* 🏫 **Año:** Segundo Año - 2026
* 👩‍💻 **Estudiante:** Tiziana Ochoa
  
---

## 🧩 Contenido

El proyecto está organizado por niveles de dificultad:

### 🟢 Nivel 1 – Objetos

* Creación de objetos literales
* Propiedades y métodos
* Acceso a datos

---

### 🟡 Nivel 2 – Funciones constructoras

* Uso de funciones como “clases”
* Creación de instancias con `new`
* Métodos definidos dentro del constructor

---

### 🟠 Nivel 3 – Prototipos

* Uso de `prototype`
* Métodos compartidos entre instancias
* Optimización de memoria

---

### 🔵 Nivel 4 – Clases e herencia

* Uso de `class`
* Herencia con `extends`
* Sobrescritura de métodos

---

### 🔴 Nivel 5 – Desafío práctico

* Implementación de una clase `CuentaBancaria`
* Métodos:

  * `depositar()`
  * `retirar()`
  * `verSaldo()`
* Validaciones básicas

---

## 🧠 Parte Teórica

## Conceptuales

## 1. ¿Qué es un objeto en JavaScript?
Un objeto es una estructura de datos clave–valor que puede almacenar propiedades (datos) y métodos (funciones). Es la unidad fundamental de organización en JavaScript.

## 2. ¿Qué diferencia hay entre clase y objeto?
Una clase es una plantilla o molde para crear objetos. Un objeto es una instancia concreta de esa clase, con valores reales en sus propiedades.

## 3. ¿Qué es un prototipo?
Es un objeto interno que actúa como base de herencia. Permite que múltiples instancias compartan propiedades y métodos sin duplicarlos en memoria.

## 4. ¿Qué hace la palabra new?
Crea una nueva instancia y realiza internamente:

Genera un objeto vacío
Vincula ese objeto al prototype del constructor
Ejecuta el constructor con this apuntando al nuevo objeto
Devuelve ese objeto

## 5. ¿Por qué JS no es realmente orientado a clases?
Porque su modelo es prototípico, no clásico. Las clases (class) son solo azúcar sintáctico sobre prototipos; no hay clases “reales” como en Java o C#.

## Técnicas

## 6. ¿Qué diferencia hay entre método dentro del constructor y método en prototype?

Dentro del constructor:
Se crea una copia por cada instancia
Mayor consumo de memoria
En prototype:
Se comparte entre todas las instancias
Más eficiente y es la forma correcta

## 7. ¿Qué hace extends?
Permite que una clase herede de otra. La clase hija obtiene propiedades y métodos de la clase padre.

## 8. ¿Para qué sirve super()?
Se usa en clases hijas para:

Llamar al constructor de la clase padre
Inicializar correctamente this

## 9. ¿Qué es la prototype chain?
Es la cadena de búsqueda que sigue JavaScript cuando accedés a una propiedad.
Si no la encuentra en el objeto, la busca en su prototipo, luego en el prototipo del prototipo, y así sucesivamente.

## Pensamiento (importantes)

## 10. ¿Cuándo conviene usar POO y cuándo no?

Conviene cuando:
Hay entidades claras (usuarios, cuentas, productos)
Necesitás reutilización y organización

No conviene cuando:

El problema es simple
Funciones puras o enfoque funcional resuelven mejor

## 11. ¿Qué ventaja tiene sobre código “normal”?

Mejora la organización
Permite reutilización (herencia, prototipos)
Facilita el mantenimiento y escalabilidad

## 12. ¿Qué problema resuelve la herencia?
Evita duplicar código permitiendo que una clase reutilice comportamiento de otra.
Resuelve el problema de repetición y mantenimiento en estructuras similares.

---

## 🎯 Objetivo

* Practicar POO en JavaScript
* Entender cómo funciona internamente el modelo prototípico
* Aplicar buenas prácticas en la organización del código

---

## 🛠️ Tecnologías utilizadas

* JavaScript (ES6+)
* Node.js

---

## ✍️ Autor
Tiziana Ochoa
