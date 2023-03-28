let numero;
numero = parseInt(prompt('Ingrese un Numero entre 0 y 999'));


    if (numero<10 && numero>=0){
        document.write(`El número tiene 1 cifra`);
    }else if(numero<100 && numero>=10){
        document.write(`El número Tiene 2 cifras`);
    }else if(numero<1000 && numero>=100){
        document.write(`El número tiene 3 cifras`);
    }else{
        document.write(`Valor no Valido`);
    }