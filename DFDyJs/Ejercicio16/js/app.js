/*
16 - Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
a) La cantidad de valores negativos ingresados.
b) La cantidad de valores positivos ingresados.
c) La cantidad de múltiplos de 15.
d) El valor acumulado de los números ingresados que son pares.
*/

let valor,cont1=0,cont2=0,cont3=0,sumapares=0;

for(i=0;i<10;i++){
    valor=parseInt(prompt('Ingrese un numero entero'));
    if (valor < 0) {
        cont1++;
    } else {
        if (valor > 0) {
            cont2++;
        }
    }
    if (valor % 15 == 0 && valor != 0) {
        cont3++;
    }
    if (valor % 2 == 0) {
        sumapares = sumapares + valor;
    }

}

document.write(`Cantidad de valores Negativos: ${cont1} <br>`);
document.write(`Cantidad de Valores Positivos: ${cont2} <br>`);
document.write(`Cantidad de Multiplos de 15: ${cont3} <br>`);
document.write(`Valor Total Acomulado de los números Pares: ${sumapares} <br>`);