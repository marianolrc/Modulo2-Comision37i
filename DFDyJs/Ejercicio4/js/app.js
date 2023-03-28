/*
4. Se debe desarrollar un programa que pida el ingreso del precio de un artículo y la
cantidad que lleva el cliente. Mostrar lo que debe abonar el comprador (Ingresar por
teclado un precio sin decimales, es decir un entero: 2, 7, 90 etc.)
*/

let precio = parseFloat(prompt('Ingrese el precio del producto:')),
    cantidad = parseInt(prompt('Cantidad que llevo el cliente:')),
    totalAbonar = precio * cantidad;


    document.write(`El Comprador debe abonar ${totalAbonar} `);