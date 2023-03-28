/*
2. Escribir un programa en el cual se ingresan cuatro números, calcular e informar la
suma de los dos primeros y el producto del tercero y el cuarto.
*/
let num1 = parseInt(prompt('Ingrese el primer valor')),
    num2 = parseInt(prompt('Ingrese el segundo valor')),
    num3 = parseInt(prompt('Ingrese el tercer valor')),
    num4 = parseInt(prompt('Ingrese el cuarto valor')),
    suma = num1+num2,
    producto = num3 * num4;

    document.write(`La suma de los dos primeros valores ${num1} y ${num2} es ${suma}, <br> y el producto entre el tercero ${num3} 
    y el cuarto ${num4} es ${producto}`);

