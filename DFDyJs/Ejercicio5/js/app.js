/*
 5. Se ingresan tres notas de un alumno, si el promedio es mayor o igual a siete mostrar
el mensaje 'Promocionado'. Tener en cuenta que para obtener el promedio debemos
operar suma=nota1+nota2+nota3; y luego hacer promedio=suma/3;
Cuando cargamos una nota y queremos convertir inmediatamente el valor ingresado
a entero podemos hacer:
nota1=prompt('Ingrese primer nota:','');
nota1=parseInt(nota1);
O en forma más corta:
nota1=parseInt(prompt('Ingrese primer nota:',''));
 */

let nota1,nota2,nota3,suma,promedio;

nota1 = parseInt(prompt('Ingrese la primera Nota'));
nota2 = parseInt(prompt('Ingrese la segunda Nota'));
nota3 = parseInt(prompt('Ingrese la tercera Nota'));
suma= nota1+nota2+nota3;
promedio= suma/3;

if(promedio>=7){
    document.write(`Promocionado`);
}else if(promedio<7 && promedio>=4){
    document.write(`Regular`);
}else if(promedio>=0 && promedio<4){
    document.write(`Reprobado`)
}else{
    document.write(`Libre o Ausente`);
}