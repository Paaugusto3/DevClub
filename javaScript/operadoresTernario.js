/*
? se
: se não
 */

const rain = true

const umbrela = rain ? 'levar guarda chuva' : 'deixar guarda-chuva'
console.log(umbrela)

// Trasferencia Bancária

const balance = true
const isNotBlocked = true
const accountExist = true
const transferOk = balance && isNotBlocked && accountExist ? 'transferencia Realizada' : 'Transferencia Negada'

console.log(transferOk)