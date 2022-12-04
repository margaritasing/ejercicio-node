const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

try{
    
    let salida = '';
    let consola = '';

    for (let i = 0; i <= hasta ; i++) {
        salida += (`${base} x ${ i } = ${base * i}\n`)  
        consola += (`${base} ${'x'.green} ${ i } ${'='.green} ${base * i}\n`)
    }

    if(listar){
        console.log("=======================================".green)
        console.log('TABLA DEL:'.green , colors.blue(base))
        console.log("=======================================".green)
        console.log(consola)
    }


    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

    return `tabla-${base}.txt creada`;

}catch(error){
    console.log(error)
}
    
}

module.exports = {
    crearArchivo
}