<<<<<<< HEAD
1 / 3;
// validacion de los campos input "text" obligatorios
function validacionFormulario() {
  var expresion = /\w+([-+.']\w+)@\w+([-.]\w+)\.\w+([-.]\w+)/;

  primerNombre = document.getElementById("PrimerNombre");
  if (
    primerNombre == null ||
    primerNombre.length == 0 ||
    /^\s+$/.test(primerNombre)
  ) {
    alert("El campo Primer nombre es obligatorio");
    return false;
  }
  primerApellido = document.getElementById("PrimerApellido").value;
  if (
    primerApellido == null ||
    primerApellido.length == 0 ||
    /^\s+$/.test(primerApellido)
  ) {
    alert("El campo Primer apellido es obligatorio");
    return false;
  }
  fechaNacimiento = document.getElementById("FechaNacimiento").value;
  if (
    fechaNacimiento == null ||
    fechaNacimiento.length == 0 ||
    /^\s+$/.test(fechaNacimiento)
  ) {
    alert("El campo Fecha de nacimiento es obligatorio");
    return false;
  }
  lugarNacimiento = document.getElementById("LugarNacimiento").value;
  if (
    lugarNacimiento == null ||
    lugarNacimiento.length == 0 ||
    /^\s+$/.test(lugarNacimiento)
  ) {
    alert("El campo Lugar de nacimiento es obligatorio");
    return false;
  }
  direccion = document.getElementById("Direccion").value;
  if (direccion == null || direccion.length == 0 || /^\s+$/.test(direccion)) {
    alert("El campo Dirección es obligatorio");
    return false;
  }
  casa = document.getElementById("Casa").value;
  if (casa == null || casa.length == 0 || /^\s+$/.test(casa)) {
    alert("El campo Casa es obligatorio");
    return false;
  }
  telPrimario = document.getElementById("TelPrimario").value;
  if (
    telPrimario == null ||
    telPrimario.length == 0 ||
    /^\s+$/.test(telPrimario)
  ) {
    2 / 3;
    alert("El campo Telefono primario es obligatorio");
    return false;
  }
  contraseña = document.getElementById("Contraseña").value;
  if (
    contraseña == null ||
    contraseña.length == 0 ||
    /^\s+$/.test(contraseña)
  ) {
    alert("El campo Contraseña es obligatorio");
    return false;
  }
  // validaciones de las listas
  genero = document.getElementById("Genero").selectedIndex;
  if (genero == null || genero == 0) {
    alert("El campo Género es obligatorio");
    return false;
  }
  estadoCivil = document.getElementById("EstadoCivil").selectedIndex;
  if (estadoCivil == null || estadoCivil == 0) {
    alert("El campo Estado Civil es obligatorio");
    return false;
  }
  identificacion = document.getElementById("Identificacion").selectedIndex;
  if (identificacion == null || identificacion == 0) {
    alert("El campo Identificación es obligatorio");
    return false;
  }
  paisOrigen = document.getElementById("PaisOrigen").selectedIndex;
  if (paisOrigen == null || paisOrigen == 0) {
    alert("El campo País de origen es obligatorio");
    return false;
  }
  provincia = document.getElementById("Provincia").selectedIndex;
  if (provincia == null || provincia == 0) {
    alert("El campo Provincia es obligatorio");
    return false;
  }
  // validacion de los campos input tipo "correo"
  emailPrimario = document.getElementById("EmailPrimario").value;
  if (!expresion.test(emailPrimario)) {
    alert("El campo Correo primario es obligatorio");
    return false;
  }
  contraseña = document.getElementById("Contraseña").value;
  contraseñaConf = document.getElementById("ContraseñaConf").value;

  if (contraseña == contraseñaConf)
    alert(
      "Las dos claves son iguales...\nRealizaríamos las acciones del caso positivo"
    );
  else
    alert(
      "Las dos claves son distintas...\nRealizaríamos las acciones del caso negativo"
    );
}
=======
// validacion de los campos input "text" obligatorios 

function validacionFormulario() { 

    primerNombre = document.getElementsByName("primerNombre").value; 
    
    if( primerNombre == null || primerNombre.length == 0 || /^\s+$/.test(primerNombre) ) { 
    
    return false; 
    
    } 
    
    primerApellido = document.getElementsByName("primerApellido").value; 
    
    if( primerApellido == null || primerApellido.length == 0 || /^\s+$/.test(primerApellido) ) { 
    
    return false; 
    
    } 
    
    fechaNacimiento = document.getElementsByName("fechaNacimiento").value; 
    
    if( fechaNacimiento == null || fechaNacimiento.length == 0 || /^\s+$/.test(fechaNacimiento) ) { 
    
    return false; 
    
    } 
    
    lugarNacimiento = document.getElementsByName("lugarNacimiento").value; 
    
    if( lugarNacimiento == null || lugarNacimiento.length == 0 || /^\s+$/.test(lugarNacimiento) ) { 
    
    return false; 
    
    } 
    
    direccion = document.getElementsByName("direccion").value; 
    
    if( direccion == null || direccion.length == 0 || /^\s+$/.test(direccion) ) { 
    
    return false; 
    
    } 
    
    casa = document.getElementsByName("casa").value; 
    
    if( casa == null || casa.length == 0 || /^\s+$/.test(casa) ) { 
    
    return false; 
    
    } 
    
    telPrimario = document.getElementsByName("telPrimario").value; 
    
    if( telPrimario == null || telPrimario.length == 0 || /^\s+$/.test(telPrimario) ) { 
    
    return false; 
    
    } 
    
    contraseña = document.getElementsByName("contraseña").value; 
    
    if( contraseña == null || contraseña.length == 0 || /^\s+$/.test(contraseña) ) { 
    
    return false; 
    
    } 
    
    // validaciones de las listas  
    
    genero = document.getElementsByName("genero").selectedIndex; 
    
    if( genero == null || genero == 0 ) { 
    
    return false; 
    
    } 
    
    estadoCivil = document.getElementsByName("estadoCivil").selectedIndex; 
    
    if(estadoCivil == null || estadoCivil == 0) { 
    
    return false; 
    
    } 
    
    identificacion = document.getElementsByName("identificacion").selectedIndex; 
    
    if( identificacion == null || identificacion == 0 ) { 
    
    return false; 
    
    } 
    
    paisOrigen = document.getElementsByName("paisOrigen").selectedIndex; 
    
    if(paisOrigen == null || paisOrigen == 0) { 
    
    return false; 
    
    } 
    
    provincia = document.getElementsByName("provincia").selectedIndex; 
    
    if(provincia == null || provincia == 0) { 
    
    return false; 
    
    } 
    
    // validacion de los campos input tipo "correo" 
    
    emailPrimario = document.getElementsByName("emailPrimario").value; 
    
    if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(emailPrimario)) ) { 
    
    return false; 
    
    } 
    
    contraseña = document.getElementsByName("contraseña").value; 
    
    contraseñaConf = document.getElementsByName("contraseñaConf").value; 
    
     
     
    
    if (contraseña == contraseñaConf) 
    
    alert("Las dos claves son iguales...\nRealizaríamos las acciones del caso positivo") 
    
    else 
    
    alert("Las dos claves son distintas...\nRealizaríamos las acciones del caso negativo") 
    
    } 
>>>>>>> 6a62191e8f92d5121760e7bc95e3180a9bf3a992
