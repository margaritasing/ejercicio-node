const { crearArchivo } = require('./ayuda/multiplicar');
const argV = require('./config/yargs')
const colors = require('colors')

console.clear()

crearArchivo( argV.b, argV.l, argV.h)
.then( nombreArchivo => console.log(nombreArchivo.rainbow, 'El Archivo fue Creado'))
.catch(err => console.log(err));