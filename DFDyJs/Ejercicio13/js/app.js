/*
13. Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la
tabla de multiplicar del mismo (los primeros 12 términos)
Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el 36.
*/

let valor = prompt('Ingrese un valor del 1 al 10'),
    tabla = 0;

if(valor>=1 && valor<= 10){
    for(i=1; i<=12;i++){
        tabla= valor * i;
        document.write(`La tabla de multiplicar del 1 al 12 de ${valor} es ${i}: ${tabla} <br>`);
    }
}else{
    document.write(`Valor ingresado invalido`)
}