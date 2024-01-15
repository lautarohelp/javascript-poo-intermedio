/* const Lautaro = {
  name: "Lautarito",
  age: 18,
  approvedCourses: ["Curso 1"],
  addCourse(newCourse) {
    console.log("This", this);
    console.log("This.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  }
} */

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
/* 
Object.seal(Lautaro); //hace el configurable se ponga el falls
Object.freeze(Lautaro); //nos impide borrar y editar

console.log(Object.getOwnPropertyDescriptors(Lautaro)); */

/* const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
  editA() {
    this.a = "AAAAA";
  }
}; */









function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);


  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  }else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      // copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key])
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}

// const studentsBase = {
//   name: undefined,
//   email: undefined,
//   age: undefined,
//   approvedCourses: undefined,
//   learningPaths: undefined,
//   socialMedia: {
//     X: undefined,
//     instagram: undefined,
//     facebook: undefined,
//   },
// };

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
} 

function createStudents({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  x,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {

  const private = {
    "_name": name,
  };

  const public = {
    
    email,
    age,
    socialMedia: {
          x,
          instagram,
          facebook,
    },
    approvedCourses ,
    learningPaths ,
    readName() {
      return private["_name"];
    },
    changeName(newName) {
      private["_name"] = newName;
    },
  };

  Object.defineProperty(public, "readName", {
    writable: false,
    configurable: false,
  });

  return public;
}

const Lautaro = createStudents({
  name: "Lautaro",
  email: "kjnsakad@ñ,d.com",
  age: 19,
  x: "elTaro",
  instagram: "lautiii.321",
  facebook: "Lauti Bj",
  approvedCourses:"Curso de las POO"
}); //{}








/* const Lautaro = deepCopy(studentsBase);
Object.seal(Lautaro); */
// Object.isSealed(Lautaro);
// Object.defineProperty(Lautaro, "name", {
//   value: "Lautarito",
//   configurable: false,
// });


/* const stringifiedComplexObj = JSON.stringify(obj1);
const obj = JSON.parse(obj1);
console.log(stringifiedComplexObj);
console.log(obj);

for (prop in obj1) {
  obj2[prop] = obj1[prop];
} */


/* const obj3 = Object.assign({}, obj1)
const obj4 = Object.create(obj1) //el objeto se copio dentro de PROTO
 */


// function recursiva() {
//   if (/* validacion */) {
//       llamados recursivos
//   } else {
//       llamados normales, sin recursividad
//   }
// }

// const numeritos = [0,1,2,3,4,5,6,7,8,9,0,0,2];
// let numerito = 0;

// for (let index = 0; index < numeritos.length; index++) {
//   numerito = numeritos[index];
//   console.log({ index, numerito });
// }

/* function recursiva(numberArray) {
  if (numberArray.length != 0) {
    const firstNum = numberArray[0];
    console.log(firstNum);

    numberArray.shift();
    recursiva(numberArray);
  }
} */