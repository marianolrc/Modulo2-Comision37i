/*
15. Escribir un programa que pida ingresar coordenadas (x,y) que representan puntos en
el plano. Informar cuántos puntos se han ingresado en el primer, segundo, tercer y
cuarto cuadrante. Al comenzar el programa se pide que se ingrese la cantidad de
puntos a procesar.
*/


let cuad1 = 0;
let cuad2 = 0;
let cuad3 = 0;
let cuad4 = 0;
let cant = parseInt(prompt('Cuantos puntos procesará:'));
cant = parseInt(cant);
for (let i = 1; i <= cant; i++) {
    let x = parseInt(prompt('Ingrese coordenada x:'));
    let y = parseInt(prompt('Ingrese coordenada y:'));
    if (x > 0 && y > 0) {
        cuad1++;
    } else {
        if (x < 0 && y > 0) {
            cuad2++;
        } else {
            if (x < 0 && y < 0) {
                cuad3++;
            } else {
                if (x > 0 && y < 0) {
                    cuad4++;
                }
            }
        }
    }
}
document.write(`Cantidad de puntos ingresados en el primer cuadrante: ${cuad1} <br>`);
document.write(`Cantidad de puntos ingresados en el segundo cuadrante: ${cuad2} <br>`);
document.write(`Cantidad de puntos ingresados en el tercer cuadrante: ${cuad3} <br>`);
document.write(`Cantidad de puntos ingresados en el cuarto cuadrante: ${cuad4} <br>`);
