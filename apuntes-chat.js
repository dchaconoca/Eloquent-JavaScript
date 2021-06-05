// // El siguiente código es posible
// const persona = {
//     name: "Diana"
// }
// persona.edad  = 24

// // Por el contrario, esto da error
// // persona = {
// //     nombre: "Diana",
// //     edad: 24
// // }


// // Para medir tiempo de ejecución
// console.time("time")
// for(let i = 1; i < 100; i ++) {}
// console.timeEnd("time")

// // !!! Buscar los diferentes métodos de console.
 

// // Uso del método map: Recorre un arreglo, aplica una función a cada elemento
// // y devuelve un nuevo arreglo con los elementos modificados
// // En el siguiente ejemplo
// // (num) => {
// //     return num * 2;
// // }
// // es una función flecha que se aplica a cada uno de los elementos del arreglo
// let arr1 = [1, 2, 4];

// let arr2 = arr1.map((num) => {
//     return num * 2;
// })

// console.log(arr2);



// let persona = {
//     nombre: "Bill",
//     empresa: "Microsoft",
//     saludar: function() {
//       function miEmpresa() {
//         console.log(`Mi empresa es ${this.empresa}`)
//       } 
//       console.log(`Hola, me llamo ${this.nombre}`)
//       miEmpresa()
//     },
//     esposa: {
//       nombre: "Melinda",
//       saludar: function() {
//         console.log(`Hola, soy ${this.nombre} la esposa de Bill`)
//       }
//     }
//   }
//   persona.saludar()


//   let persona = {
//     nombre: "Bill",
//     empresa: "Microsoft",
//     saludar: function() {
//       console.log(`Hola, me llamo ${this.nombre}`)
//       this.miEmpresa()
//     },
//     miEmpresa: function() {
//       console.log(`Mi empresa es ${this.empresa}`)
//     },
//     esposa: {
//       nombre: "Melinda",
//       saludar: function() {
//         console.log(`Hola, soy ${this.nombre} la esposa de Bill`)
//       }
//     }
//   }



//   function Persona(nombre, apellido, altura) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.altura = altura;
//   };
  
//   function Desarrollador(nombre, apellido) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//   };
//   function heredaDe(prototipoHijo, prototipoPadre) {
//     let fn = function () {};
  
//     fn.prototype = prototipoPadre.prototype;
//     prototipoHijo.prototype = new fn;
//     prototipoHijo.prototype.constructor = prototipoHijo;
//   }



//   // Cómo se definía antes del 2015 la herencia
//   function heredaDe(prototipoHijo, prototipoPadre) {
//     let fn = function () {};
  
//     fn.prototype = prototipoPadre.prototype;
//     prototipoHijo.prototype = new fn;
//     prototipoHijo.prototype.constructor = prototipoHijo;
//   }
  
  
//   function Persona(nombre, apellido, altura) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.altura = altura;
//   };
  
//   Persona.prototype.saludar = function() {
//     console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
//   };
  
//   Persona.prototype.soyAlto = function() {
//     return this.altura > 1.78;
//   };
  
//   function Desarrollador(nombre, apellido) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//   };
  
//   heredaDe(Desarrollador, Persona)
  
//   Desarrollador.prototype.saludar = function() {
//     console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`);
//   }

//   let maria = new Desarrollador("Maria", "Lupita",  1.62);

//   class Persona {
//     constructor(nombre, apellido, altura) {
//       this.nombre = nombre;
//       this.apellido = apellido;
//       this.altura = altura;
//       this.inicializar()
//     }
  
//     inicializar() {
//        this.saludar = this.saludar.bind(this)
//     }
  
//     saludar() {
//       setTimeout(() => {
//         console.log(`Hola me llamo ${this.nombre}`)
//       }, 1000);
//     }
//   }



// // Modo estricto
// function saludar() {
//   "use strict"
//   console.log("Saludo en modo estricto")
// }

// variable = "Hola"
// console.log(variable)
// "use strict"

// variable = "Hola"
// console.log(variable)
// // Uncaught ReferenceError: variable is not defined

// undefined = 5;
// Infinity = 5;
// "use strict"

// undefined = 5;
// Infinity = 5;

// console.log(undefined, Infinity)
// // TypeError: Cannot assign to read only property 'undefined' of object

// let persona = { nombre: "Tim" }
// delete persona

// // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.

// // - Lexical Binding (Arrow Functions)
// // - New Binding (Instanciar Objetos)
// // - Explicit Binding (Invocación indirecta)
// // - Implicit Binding (Invocación de método)
// // - Default Binding (Invocación directa)

// function saludo() {
//   console.log("Saludos desde el grupo de lectura 3", this);
// }

// saludo()

// this === window

// this.nombre = "Diana"
// console.log(window.nombre)

// "use strict"

// function saludo() {
//   console.log(this) // salida: undefined
//   console.log(window) // Cambiar de this a window
// }

// saludo()
// console.log(this)


// let persona = {
//   nombre: "Bill",
//   saludar: function() {
//     console.log(`Hola, me llamo ${this.nombre}`)
//   },
//   esposa: {
//     nombre: "Melinda",
//     saludar: function() {
//       console.log(`Hola, soy ${this.nombre} la esposa de Bill`)
//     }
//   }
// }

// persona.saludar();
// persona.esposa.saludar();


// const lenguaje = {
//   nombre: "C++",
//   verTipado: function() {
//       console.log(`El lenguaje de programación ${this.nombre} es fuertemente tipado`)
//   }
// }

// lenguaje.verTipado()

// const java = { nombre: "Java" }

// lenguaje.verTipado.call(java)

// function Lenguaje(nombre, creacion) {
//   this.nombre = nombre;
//   this.creacion = creacion;
// }

// function LenguajeTipadoFuerte(nombre, creacion) {
//   Lenguaje.call(this, nombre, creacion);
//   this.tipado = 'Fuerte';
// }

// function LenguajeTipadoDebil(nombre, creacion) {
//   Lenguaje.call(this, nombre, creacion);
//   this.tipado = 'Debil';
// }

// const java = new LenguajeTipadoFuerte("Java", 1995)
// const javascript = new LenguajeTipadoDebil("Javascript", 1995)

// console.log(java, javascript)


// function Lenguaje(nombre, creacion) {
//   this.nombre = nombre;
//   this.creacion = creacion;
// }

// function LenguajeTipadoFuerte(nombre, creacion) {
//   Lenguaje.apply(this, [nombre, creacion]);
//   this.tipado = 'Fuerte';
// }

// function LenguajeTipadoDebil(nombre, creacion) {
//   Lenguaje.apply(this, [nombre, creacion]);
//   this.tipado = 'Debil';
// }

// const java = new LenguajeTipadoFuerte("Java", 1995)
// const javascript = new LenguajeTipadoDebil("Javascript", 1995)

// console.log(java, javascript)

// class Persona {
//   constructor(nombre, apellido) {
//       this.enlazar()
//       this.nombre = nombre;
//       this.apellido = apellido;
//   }
  
//   enlazar() {
//       this.presentarse = this.presentarse.bind(this)
//   }

//   saludar() {
//       setTimeout(this.presentarse, 500)
//   }

//   presentarse() {
//       console.log(`Hola mi nombre es ${this.nombre}`)
//   }
// }

// const bill = new Persona("Bill", "Gates");
// bill.saludar();


// class Persona {
//   constructor(nombre, apellido) {
//       this.nombre = nombre;
//       this.apellido = apellido;
//   }
// }

// function Persona(nombre, apellido) {
//   this.nombre - nombre;
//   this.apellido - apellido;
// }

// const bill = new Persona("Bill", "Gates");
// const tim = new Persona("Tim", "Cook");

// const lenguaje = {
//   nombre: "C++",
//   // verTipado: () => {
//   verTipado: function() {
//       return console.log(`El lenguaje de programación ${this.nombre} es fuertemente tipado`)
//   }
// }

// lenguaje.verTipado();


// const lenguaje = {
//   nombre: "C++",
//   verTipado: function() {
//       setTimeout(()  => {
//           console.log(`El lenguaje de programación ${this.nombre} es fuertemente tipado`)
//       }, 1000)
//   }
// }

// lenguaje.verTipado();


class Persona {
  constructor(nombre, apellido) {
      this.nombre = nombre;
      this.apellido = apellido;
  }

  saludar(personas) {
      console.log("Hola, soy " + this.nombre)
      // Función de flecha "hereda" el this
      personas.map(p=>console.log(`${this.nombre} saludó a ${p}`))
  }

}

const bill = new Persona("Bill", "Gates");
const personas = ['Andrés', 'Diana', 'Rhon']
bill.saludar(personas)