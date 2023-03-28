let contraseña, verifContraseña;

contraseña = prompt('Ingrese su Contraseña');
verifContraseña = prompt('Ingrese nuevamente su Contraseña');

if(contraseña==verifContraseña){
    document.write(`Las contraseñas Coinciden`);
}else{
    document.write(`Las contraseñas no coinciden`);
}