const Lautaro = {
  name: "Lautarito",
  age: 18,
  approvedCourses: ["Curso 1"],
  addCourse(newCourse) {
    console.log("This", this);
    console.log("This.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  }
}

/* console.log(Object.keys(Lautaro));
console.log(Object.getOwnPropertyNames(Lautaro));
console.log(Object.entries(Lautaro)); */

/* 
Object.defineProperty(Lautaro, "navigator", {
  value: "Chrome",
  enumerable: false, no la podemos enumerar cuando hacemos keys.
  writable: true,
  configurable: true,
});

Object.defineProperty(Lautaro, "editor", {
  value: "VS Code",
  enumerable: true,
  writable: false, no podemos editarla
  configurable: true,
});

Object.defineProperty(Lautaro, "terminal", {
  value: "WSL",
  enumerable: true,
  writable: true,
  configurable: false, no podemos borrarla
});

Object.defineProperty(Lautaro, "pruebaNASA", {
  value: "extraterrestres",
  enumerable: false,
  writable: false,
  configurable: false,
}); 
*/

Object.seal(Lautaro); //hace el configurable se ponga el falls
Object.freeze(Lautaro); //nos impide borrar y editar

console.log(Object.getOwnPropertyDescriptors(Lautaro));
