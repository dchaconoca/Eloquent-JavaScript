const clients = [
  { id: 1, taxNumber: '86620855', name: 'HECTOR ACUÑA BOLAÑOS' },
  { id: 2, taxNumber: '7317855K', name: 'JESUS RODRIGUEZ ALVAREZ' },
  { id: 3, taxNumber: '73826497', name: 'ANDRES NADAL MOLINA' },
  { id: 4, taxNumber: '88587715', name: 'SALVADOR ARNEDO MANRIQUEZ' },
  { id: 5, taxNumber: '94020190', name: 'VICTOR MANUEL ROJAS LUCAS' },
  { id: 6, taxNumber: '99804238', name: 'MOHAMED FERRE SAMPER' },
];

const accounts = [
  { clientId: 6, bankId: 1, balance: 15000 },
  { clientId: 1, bankId: 3, balance: 18000 },
  { clientId: 5, bankId: 3, balance: 135000 },
  { clientId: 2, bankId: 2, balance: 5600 },
  { clientId: 3, bankId: 1, balance: 23000 },
  { clientId: 5, bankId: 2, balance: 15000 },
  { clientId: 3, bankId: 3, balance: 45900 },
  { clientId: 2, bankId: 3, balance: 19000 },
  { clientId: 4, bankId: 3, balance: 51000 },
  { clientId: 5, bankId: 1, balance: 89000 },
  { clientId: 1, bankId: 2, balance: 1600 },
  { clientId: 5, bankId: 3, balance: 37500 },
  { clientId: 6, bankId: 1, balance: 19200 },
  { clientId: 2, bankId: 3, balance: 10000 },
  { clientId: 3, bankId: 2, balance: 5400 },
  { clientId: 3, bankId: 1, balance: 9000 },
  { clientId: 4, bankId: 3, balance: 13500 },
  { clientId: 2, bankId: 1, balance: 38200 },
  { clientId: 5, bankId: 2, balance: 17000 },
  { clientId: 1, bankId: 3, balance: 1000 },
  { clientId: 5, bankId: 2, balance: 600 },
  { clientId: 6, bankId: 1, balance: 16200 },
  { clientId: 2, bankId: 2, balance: 10000 },
];

const banks = [
  { id: 1, name: 'SANTANDER' },
  { id: 2, name: 'CHILE' },
  { id: 3, name: 'ESTADO' },
];


/*
Realizar las siguientes operaciones

Para la resolución es importante tomar en cuenta las funciones de arrs: map, filter, reduce, find.

1. arr con los ids de los clientes

2. arr con los id de los clientes ordenados por rut

3. arr con los nombres de los clientes de mayor a menor por la suma total de los balances de cada cliente en los bancos que participa.

4. obj en los que las claves sean los nombres de los bancos y los valores un arr con ruts de sus clientes ordenados alfabeticamente por nombre.

5. arr ordenado decrecientemente con los balances de los clientes que tengan mas de 25.000 en el banco santander.

6. arr con los ids de los bancos ordenados crecientemente por la cantidad total de dineto que administran.

7. obj en que las claves sean los nombres de los bancos y los valores el numero de clientes que solo tengan cuenta en ese banco.

8. obj en que las claves sean los nombres de los bancos y los valores el id de su cliente con menos dinero.

9. Agregar un  nuevo cliente con datos ficticios a clientes y agregar una cuenta en el banco estado con un balance de 9000 para este nuevo cliente, luego devolver el lugar que ocupa este cliente en el ranking de la pregunta 3. No modificar los arrs originales para no alterar las respuestas anteriores al correr la solución
*/

// 1. arr con los ids de los clientes

let idClients1 = clients.map((client) => client.id);

console.log(idClients1);

// 2. arr con los id de los clientes ordenados por rut
// El método sort devuelve un arr ordenado según una función
// pasada como parámetro y 2 elements (a y b) que se comparan
// según criterio de ordenamiento
// Si a <= b => -1 y a va primero
// Si a > b => 1 y b va primero
// Una vez ordenado el arr según el criterio de ordenamiento,
// se devuelve un arr con solo los id

let idClients2 = clients.sort((a, b) => 
(a.taxNumber <= b.taxNumber ? -1 : 1)).map((client) => client.id);

console.log(idClients2);

// 3. arr con los nombres de los clientes de mayor a menor 
// por la suma total de los balances de cada cliente en los bancos 
// que participa.

// Calculamos el saldo total de cada cliente
// Se modificó para el ejercicio 5: Ahora le pasamos un parámetro 
// opcional que es una función que permite "filtrar" los clientes
// para los que queremos calcular el total
function totalBalance (ac, clave, filtro) {
  let result = [];
  let aux = [];

  if (filtro != undefined) {
    aux = ac.filter(filtro)
  }
  else {
    aux = ac;
  }

  aux.forEach(element => {

    if (! result.some(item => item.id === element[clave])) {

      let obj = {
        id: null,
        balance: []
      }

      obj.id = element[clave]; 
      obj.balance.push(element.balance);
      result.push(obj);
    }
    else {
      let i = result.findIndex(item => item.id === element[clave]);
      result[i].balance.push(element.balance);
    }
    
  })

  result.forEach(element => {
    let total = element.balance.reduce((a,b) => a + b)
    element.balance = total;
  })

  return result; 
 
}

let totalBalanceCls = totalBalance(accounts, "clientId");

console.log(totalBalanceCls);

// Para cada id de cliente o banco, buscamos su nombre y
// devolvemos un arreglo con los nombres y el balance total
// ordenados por total decreciente
function nameBalance (entity, arrBal, orderDesc = true) {
  let result = [];

  entity.forEach(element => {
    let obj = {
      name: element.name,
      totalBalance: 0
    }
    let i = arrBal.findIndex(item => item.id === element.id);
    
    if (i != -1) {
      obj.totalBalance = arrBal[i].balance;
      result.push(obj);
    }
        
  })

  if (orderDesc) {
    return result.sort((a, b) => (a.totalBalance <= b.totalBalance ? 1 : -1));
  }
  else {
    return result.sort((a, b) => (a.totalBalance <= b.totalBalance ? -1 : 1));
  }
  

}

console.log(nameBalance(clients, totalBalanceCls));


// 4. obj en los que las claves sean los nombres de los bancos 
// y los valores un arr con ruts de sus clientes ordenados 
// alfabeticamente por nombre.

function objBankCl(bk, acc) {
  let obj = {};

  // Objet con las claves = bank.name y valor = arreglo clientId únicos
  bk.forEach((bank) => {

    // Arreglo con los clientId que tienen cuenta en el banco dado
    // Los clientId pueden estar repetidos porque dependen de los
    // elementos de accounts
    let arrAcc = acc.filter((account) => (account.bankId === bank.id)).map(item => item.clientId);

    // Eliminamos los dobles
    let arrCl = new Set(arrAcc);

    // Objeto con clave = Nombre del banco 
    // y valor = arreglo con los clientId del banco
    obj[bank.name] = [...arrCl];
  });

  return obj;
}

function objBanksRUTs(objBk, cl) {

  let obj = objBk;

  // Creamos un arreglo con los id y RUT ordenados por nombre 
  // del cliente
  let RUTClients = cl.sort((a, b) => 
    (a.name <= b.name ? -1 : 1)).map((client) => {
      let obj = {
        id: client.id, 
        rut: client.taxNumber
      }
      return obj;
    });

  // Recorremos cada arreglo de clientId y creamos uno nuevo
  // con los RUT ordenados por name
  for (let clave of Object.keys(obj)) {
    let arrAux = obj[clave];
    let arrRUT = [];
    
    // Usamos forEach para obtener un array con solo los clientId
    // que nos interesa. map devuelve undefined para los clientId
    // que no están en el arreglo
    RUTClients.forEach((client) => {
      if (arrAux.includes(client.id)) {
        arrRUT.push(client.rut);
      }
    })

    obj[clave] = arrRUT;
    
  }
    
  return objBk;

}

let objBankClients = objBankCl(banks, accounts);

console.log(objBanksRUTs(objBankClients, clients));

// 5. arr ordenado decrecientemente con los balances de los clientes 
// que tengan mas de 25.000 en el banco santander.

// Moficamos las función totalBalance (ejercicio 3) para pasarle
// una función que filtra los clientes a los que queremos
// calcular el total, en este caso, solo los del banco Santander
let totalClsSantander = totalBalance(accounts, "clientId", (ac) => (ac.bankId === 1));

let clsSantander = totalClsSantander.filter((item) => (item.balance >= 25000)).sort((a, b) => 
(a.balance <= b.balance ? 1 : -1));

console.log(clsSantander);

console.log(nameBalance(clients, clsSantander));

// 6. arr con los ids de los bancos ordenados crecientemente por 
// la cantidad total de dinero que administran.

// De nuevo, modificamos totalBalance para poder obtener cada banco
// con su balance total

let totalBanks = totalBalance(accounts, "bankId");

console.log(totalBanks);

// Nombre de los bancos con el total del dinero que manejan
// ordenado decrecientemente
console.log(nameBalance(banks, totalBanks, false));


// 7. obj en que las claves sean los nombres de los bancos 
// y los valores el numero de clientes que solo tengan 
// cuenta en ese banco.

// Partimos del objeto objBankClients cuyas claves son los nombres
// de los bancos y los valores un array con los id de los clientes

function clExclusive (cl, obj) {
  cl.forEach((client) => {

    for (let clave of Object.keys(obj)) {

    }

  })
}


// 8. obj en que las claves sean los nombres de los bancos y 
// los valores el id de su cliente con menos dinero.




// 9. Agregar un  nuevo cliente con datos ficticios a clientes 
// y agregar una cuenta en el banco estado con un balance 
// de 9000 para este nuevo cliente, luego devolver el lugar 
// que ocupa este cliente en el ranking de la pregunta 3. 
// No modificar los arrs originales para no alterar las 
// respuestas anteriores al correr la solución

let clients2 = [...clients];
let accounts2 = [...accounts];

let cl = { id: 7, taxNumber: '12345678', name: 'DIANA CHACON' };
clients2.push(cl);
let ac = { clientId: 7, bankId: 3, balance: 9000 };
accounts2.push(ac);

let totalBalanceCls2 = totalBalance(accounts2, "clientId");

console.log(totalBalanceCls2);

console.log(nameBalance(clients2, totalBalanceCls2));








