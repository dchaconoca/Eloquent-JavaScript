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

Para la resolución es importante tomar en cuenta las funciones de arreglos: map, filter, reduce, find.

1. Arreglo con los ids de los clientes

2. Arreglo con los id de los clientes ordenados por rut

3. Arreglo con los nombres de los clientes de mayor a menor por la suma total de los saldos de cada cliente en los bancos que participa.

4. Objeto en los que las claves sean los nombres de los bancos y los valores un arreglo con ruts de sus clientes ordenados alfabeticamente por nombre.

5. Arreglo ordenado decrecientemente con los saldos de los clientes que tengan mas de 25.000 en el banco santander.

6. Arreglo con los ids de los bancos ordenados crecientemente por la cantidad total de dineto que administran.

7. Objeto en que las claves sean los nombres de los bancos y los valores el numero de clientes que solo tengan cuenta en ese banco.

8. Objeto en que las claves sean los nombres de los bancos y los valores el id de su cliente con menos dinero.

9. Agregar un  nuevo cliente con datos ficticios a clientes y agregar una cuenta en el banco estado con un saldo de 9000 para este nuevo cliente, luego devolver el lugar que ocupa este cliente en el ranking de la pregunta 3. No modificar los arreglos originales para no alterar las respuestas anteriores al correr la solución
*/