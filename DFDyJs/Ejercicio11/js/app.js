/*
11. Desarrollar un programa que solicite la carga de 10 números e imprima la suma de
los últimos 5 valores ingresados.
*/
let suma = 0;
for (let i = 1; i <= 10; i++) {
    let valor = parseInt(prompt('Ingrese un nro:'));
    if (i > 5) {
        suma = suma + valor;
    }
}
document.write(`La suma de los últimos cinco valores ingresados es: ${suma}`);