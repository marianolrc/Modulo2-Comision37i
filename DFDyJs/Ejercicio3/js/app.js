/*
3. Realizar un programa que lea cuatro valores numéricos e informe su suma y
producto.
*/

let num1,num2,num3,num4,suma,producto;

num1 = parseInt(prompt('Ingrese el primer valor'));
num2 = parseInt(prompt('Ingrese el segundo valor'));
num3 = parseInt(prompt('Ingrese el tercer valor'));
num4 = parseInt(prompt('Ingrese el cuarto valor'));
suma = num1+num2+num3+num4;
producto = num1*num2*num3*num4;

document.write(`El resultado de la Suma de los 4 valores es ${suma}, y el producto es ${producto}`);