// Ejercicios Capítulo 13, Eloquent JavaScript
// Diana Chacón Ocariz

// EJERCICIO 1: TABLA DE MONTAÑAS

const montanas = [
  {nombre: "Púlpito", altura: 3500, ubicacion: "Táchira"},
  {nombre: "Bolívar", altura: 5000, ubicacion: "Mérida"},
  {nombre: "El Ávila", altura: 3000, ubicacion: "Distrito Capital"},
  {nombre: "Espejo", altura: 4900, ubicacion: "Mérida"},
  {nombre: "El Zúmbador", altura: 2800, ubicacion: "Táchira"}
]

function mostrarTabla(idNodo, idPadre, arr) {
  let check = document.getElementById(idNodo);
  if (check.checked) {
    construirTabla(idPadre, arr);
  }
  else {
    destruirTabla(idPadre, "tb-".concat(idPadre));
  }
}

// Se pasa como parámetros el id del nodo padre
// y un arreglo de objetos con los datos
function construirTabla(idPadre, arr) {
  let tabla = document.createElement("table");
  nodoPadre = document.getElementById(idPadre);
  nodoPadre.appendChild(tabla);
  tabla.id = "tb-".concat(idPadre);
  tabla.className = "tabla";

  // Las claves del 1er elemento son los encabezados
  let encabezados = Object.keys(arr[0]).map(element => element.toUpperCase());
  crearLinea(tabla, encabezados, true);

  // Para cada objeto del arreglo, tomamos sus valores y 
  // creamos una nueva línea de la tabla
  arr.forEach(element => {
    let linea = Object.values(element);
    crearLinea(tabla, linea);
  });

}

function crearLinea(tabla, linea, titulo = false) {
  let tr = document.createElement("tr");
  tabla.appendChild(tr);

  for (col of linea) {
    let td = document.createElement(((titulo)?"th":"td"));
    if (titulo) td.className = "cabecera"
    tr.appendChild(td);
    td.appendChild(document.createTextNode(col));
    if (! isNaN(col)) td.className = "numerico";
  }

  return tr;
}

function destruirTabla(idPadre, idHijo) {
  let padre = document.getElementById(idPadre);
  let hijo = document.getElementById(idHijo);
  padre.removeChild(hijo);
}

// Otras tablas
const clientes = [
  { id: 1, taxNumber: '86620855', name: 'HECTOR ACUÑA BOLAÑOS' },
  { id: 2, taxNumber: '7317855K', name: 'JESUS RODRIGUEZ ALVAREZ' },
  { id: 3, taxNumber: '73826497', name: 'ANDRES NADAL MOLINA' },
  { id: 4, taxNumber: '88587715', name: 'SALVADOR ARNEDO MANRIQUEZ' },
  { id: 5, taxNumber: '94020190', name: 'VICTOR MANUEL ROJAS LUCAS' },
  { id: 6, taxNumber: '99804238', name: 'MOHAMED FERRE SAMPER' },
];

const bancos = [
  { id: 1, name: 'SANTANDER' },
  { id: 2, name: 'CHILE' },
  { id: 3, name: 'ESTADO' },
];