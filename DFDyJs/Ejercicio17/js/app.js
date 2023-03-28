/*
17. Se cuenta con la siguiente información:
Las edades de 5 estudiantes del turno mañana.
Las edades de 6 estudiantes del turno tarde.
Las edades de 11 estudiantes del turno noche.
Las edades de cada estudiante deben ingresarse por teclado.
a) Obtener el promedio de las edades de cada turno (tres promedios).
b) Imprimir dichos promedios (promedio de cada turno).
c) Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un
promedio de edades mayor.
*/

let edad,promedioM=0,promedioT=0,promedioN=0,edadM=0,edadT=0,edadN=0;

for(i=1;i<=5;i++){
    edad=parseInt(prompt('Ingrese la edad del estudiante turno mañana:'));

    edadM=edad+edadM;
    promedioM=(edadM/i).toFixed(0);
}
for(i=1;i<=6;i++){
    edad=parseInt(prompt('Ingrese la edad del estudiante turno Tarde:'));
    edadT=edadT+edad;
    promedioT=(edadT/i).toFixed(0);
}
for(i=1;i<=11;i++){
    edad=parseInt(prompt('Ingrese la edad del estudiante turno Noche:'));
    edadN=edadN+edad;
    promedioN=(edadN/i).toFixed(0);
}

document.write(`Promedio de edad Turno MAÑANA: ${promedioM}`);
document.write(`Promedio de edad Turno Tarde: ${promedioT}`);
document.write(`Promedio de edad Turno Noche: ${promedioN}`);