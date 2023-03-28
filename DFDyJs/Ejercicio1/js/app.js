/*
 1. Realizar la carga del lado de un cuadrado, mostrar por pantalla el perímetro del
mismo (El perímetro de un cuadrado se calcula multiplicando el valor del lado por
cuatro)
 */

let lado = parseFloat(prompt('Ingrese la longitud del lado')),
    perimetro = lado * 4;


document.write(`El perímetro del cuadrado de lado ${lado} es igual a ${perimetro}`);

