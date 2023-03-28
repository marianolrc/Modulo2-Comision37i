/*
10. Confeccionar un programa que lea 3 pares de datos, cada par de datos corresponde
a la medida de la base y la altura de un triángulo. El programa deberá informar:
a) De cada triángulo la medida de su base, su altura y su superficie.
b) La cantidad de triángulos cuya superficie es mayor a 12.
*/

let contador = 0;
        for (let i = 1; i <= 3; i++) {
            let base = parseInt(prompt('Ingrese la base:'));
            let altura = parseInt(prompt('Ingrese la altura:'));
            let superficie = base * altura / 2;
            if (superficie > 12) {
                contador++;
            }
            document.write(`Triángulo nro: ${i} <br>`);
            document.write(`Base: ${base} <br>`);
            document.write(`Altura: ${altura} <br>`);
            document.write(`Superficie: ${superficie} <br>`);
            document.write(`Altura: ${altura} <br>`);
        }
        document.write(`Cantidad de triángulos con superficie mayor a 12: ${contador}`);