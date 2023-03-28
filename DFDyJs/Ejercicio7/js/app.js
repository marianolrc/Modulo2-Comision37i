let numero;

numero= parseInt(prompt('Ingrese un Número'));

if(numero>0){
    document.write(`El número es Positivo`)
}else if(numero==0){
    document.write(`El número es Cero`)
}else if(numero<0){
    document.write(`El número es Negativo`)
}else{
    document.write(`Valor Invalido`)
}