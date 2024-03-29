
 1. Arreglo con el id de los clientes
[ 1, 2, 3, 4, 5, 6 ]

 2. Arreglo con el id de los clientes ordenados por RUT
[ 2, 3, 1, 4, 5, 6 ]

 3. Arreglo con los clientes y el balance total
[
  { id: 5, name: 'VICTOR MANUEL ROJAS LUCAS', totalBalance: 294100 },
  { id: 3, name: 'ANDRES NADAL MOLINA', totalBalance: 83300 },
  { id: 2, name: 'JESUS RODRIGUEZ ALVAREZ', totalBalance: 72800 },
  { id: 4, name: 'SALVADOR ARNEDO MANRIQUEZ', totalBalance: 64500 },
  { id: 6, name: 'MOHAMED FERRE SAMPER', totalBalance: 50400 },
  { id: 1, name: 'HECTOR ACU├æA BOLA├æOS', totalBalance: 20600 }
]
Set(4) { 6, 3, 5, 2 }
[ 6, 3, 5, 2 ]
Set(4) { 2, 5, 1, 3 }
[ 2, 5, 1, 3 ]
Set(5) { 1, 5, 3, 2, 4 }
[ 1, 5, 3, 2, 4 ]

 4. Objeto con los bancos y los RUTs de sus clientes
{
  SANTANDER: [ '73826497', '7317855K', '99804238', '94020190' ],
  CHILE: [ '73826497', '86620855', '7317855K', '94020190' ],
  ESTADO: [ '73826497', '86620855', '7317855K', '88587715', '94020190' ]
}

 5. Arreglo clientes del Santander con saldon >= 25000
[
  { id: 5, name: 'VICTOR MANUEL ROJAS LUCAS', totalBalance: 89000 },
  { id: 6, name: 'MOHAMED FERRE SAMPER', totalBalance: 50400 },
  { id: 2, name: 'JESUS RODRIGUEZ ALVAREZ', totalBalance: 38200 },
  { id: 3, name: 'ANDRES NADAL MOLINA', totalBalance: 32000 }
]

 6. Arreglo bancos y total saldo que manejan
[
  { id: 2, name: 'CHILE', totalBalance: 55200 },
  { id: 1, name: 'SANTANDER', totalBalance: 209600 },
  { id: 3, name: 'ESTADO', totalBalance: 330900 }
]
Set(1) { 6 }
[ 6 ]
Set(0) {}
[]
Set(1) { 4 }
[ 4 ]

 7. Bancos y n├║mero de clientes con cuenta s├│lo en ese banco
{ SANTANDER: 1, CHILE: 0, ESTADO: 1 }

 8. Bancos con el id del cliente con menor saldo
Set(4) { 6, 3, 5, 2 }
[ 6, 3, 5, 2 ]
Set(4) { 2, 5, 1, 3 }
[ 2, 5, 1, 3 ]
Set(5) { 1, 5, 3, 2, 4 }
[ 1, 5, 3, 2, 4 ]
{ SANTANDER: 3, CHILE: 1, ESTADO: 1 }

 9. Arreglo con los clientes y el balance total con nuevo cliente
[
  { id: 5, name: 'VICTOR MANUEL ROJAS LUCAS', totalBalance: 294100 },
  { id: 3, name: 'ANDRES NADAL MOLINA', totalBalance: 83300 },
  { id: 2, name: 'JESUS RODRIGUEZ ALVAREZ', totalBalance: 72800 },
  { id: 4, name: 'SALVADOR ARNEDO MANRIQUEZ', totalBalance: 64500 },
  { id: 6, name: 'MOHAMED FERRE SAMPER', totalBalance: 50400 },
  { id: 1, name: 'HECTOR ACU├æA BOLA├æOS', totalBalance: 20600 },
  { id: 7, name: 'DIANA CHACON', totalBalance: 9000 }
]
