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

console.log(Object.getOwnPropertyDescriptors(Lautaro));

Object.defineProperty(Lautaro, "pruebaNASA", {
  value: "extraterrestres",
  enumerable: true,
  writable: true,
  configurable: true,
})
