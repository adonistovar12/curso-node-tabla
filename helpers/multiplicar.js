const fs = require("fs");
const colors = require ('colors');

const crearArchivo = async( base = 5, listar= false, hasta = 10 )=> {
    

    try {
        
        
        
        let salida = "";
        let consola = '';
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${"x".yellow} ${i} ${'x'.yellow} ${base * i}\n`;
        }
        if (listar){
            console.log("==================".yellow);
            console.log( 'tabla del:'.yellow, colors.blue(base));
            console.log("====================".yellow);
            console.log (salida);
        }
        
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);
         
        
        return `tabla-${base}.txt`;
        
    } catch (err) {
        return err
        
    }
    
    
    }
    module.exports = {
     crearArchivo 
    }