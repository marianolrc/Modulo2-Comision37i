/*
12. Desarrollar un programa que muestre la tabla de multiplicar del 5 (del 5 al 50).
*/

let tabla = 0;

for(i=5; i<=50; i++ ){
    tabla= i * 5;
    document.write(`Tabla de multiplicar del 5 desde 5 al 50 para ${i}: ${tabla} <br>`);
}