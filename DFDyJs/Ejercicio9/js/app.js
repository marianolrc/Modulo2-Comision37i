// De un postulante a un empleo, que realizó un test de capacitación, se obtuvo la
// siguiente información: nombre del postulante, cantidad total de preguntas que se le
// realizaron y cantidad de preguntas que contestó correctamente. Se pide confeccionar
// un programa que lea los datos del postulante e informe el nivel del mismo según el
// porcentaje de respuestas correctas que ha obtenido, y sabiendo que:
// Nivel superior: Porcentaje>=90%.
// Nivel medio: Porcentaje>=75% y

let nombrePostulante,cantidadTotalPreguntas, cantidadPreguntasCorrectas, Porcentaje;

nombrePostulante = prompt('Nombre del Postulante');
cantidadTotalPreguntas = parseInt(prompt('Cantidad Total Preguntas'));
cantidadPreguntasCorrectas = parseInt(prompt('Cantidad de Preguntas Correctas'));


Porcentaje = ((cantidadPreguntasCorrectas/cantidadTotalPreguntas)*100).toFixed(2);

if(Porcentaje>=90){
    document.write(`${nombrePostulante} tiene un porcentaje de ${Porcentaje}%, por lo tanto tiene un Nivel Superior`);
}else if(Porcentaje>=75 && Porcentaje<90){
    document.write(`${nombrePostulante} tiene un porcentaje de ${Porcentaje}%, por lo tanto tiene un Nivel Medio`);
}else if(Porcentaje>=50 && Porcentaje<75){
    document.write(`${nombrePostulante} tiene un porcentaje de ${Porcentaje}%, por lo tanto tiene un Nivel Inferior`);
}else if(Porcentaje<50){
    document.write(`${nombrePostulante} tiene un porcentaje de ${Porcentaje}%, por lo tanto esta Fuera de Nivel`);
}else{
    document.write(`Los datos ingresados no son validos`);
}
