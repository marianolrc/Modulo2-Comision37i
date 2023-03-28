/*
14. Realizar un programa que lea los lados de 4 triángulos, e informar:
a) De cada uno de ellos, qué tipo de triángulo es: equilátero (tres lados iguales),
isósceles (dos lados iguales), o escaleno (ningún lado igual)
b) Cantidad de triángulos de cada tipo.
c) Tipo de triángulo del que hay menor cantidad.
*/

let lado1,lado2,lado3;
for(i=1; i<=4;i++){
    lado1 = parseFloat(prompt('Ingrese longitud del lado 1')),
    lado2 = parseFloat(prompt('Ingrese longitud del lado 2')),
    lado3 = parseFloat(prompt('Ingrese longitud del lado 3'));
    if(lado1==lado2==lado3){
        document.write(`El triangulo es un Triangulo Equilátero <br>`);
    }else if(lado1==lado2 || lado1==lado3 || lado2==lado3){
        document.write(`El triangulo es un Triangulo Isósceles <br>`); 
    }else if(lado1!=lado2!=lado3){
        document.write(`El triangulo es un Triangulo Escaleno <br>`);
    }else{
        document.write(`Valor invalido <br>`);
    }
}
