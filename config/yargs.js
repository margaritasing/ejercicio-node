const argV = require('yargs')
                    .option('b', {
                        alias:'base',
                        type:'number',
                        demandOption:true,
                        describe:'Es la base de la tabla de multiplicar'
                    })
                    .option('h', {
                        alias:'hasta',
                        type:'number',
                        default:10,
                        describe:'Número hasta donde llega la tabla'
                    })
                    .option('l', {
                        alias:'listar',
                        type:'boolean',
                        default:false,
                        describe:'Muestra la tabla en consola'
                    })
                    .check((argV, options) => {
                        if ( isNaN(argV.b) ) {
                            throw 'la base tiene que ser un número'                            
                        }
                        return true;
                    })
                    .argv;


module.exports = argV;