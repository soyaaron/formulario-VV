1 / 3;
// validacion de los campos input "text" obligatorios
function validacionFormulario() {
  primerNombre = document.getElementById("PrimerNombre");
  if (
    primerNombre == null ||
    primerNombre.length == 0 ||
    /^\s+$/.test(primerNombre)
  ) {
    alert("Primer nombre inválido");
    return false;
  }
  primerApellido = document.getElementById("PrimerApellido").value;
  if (
    primerApellido == null ||
    primerApellido.length == 0 ||
    /^\s+$/.test(primerApellido)
  ) {
    alert("Primer apellido inválido");
    return false;
  }
  fechaNacimiento = document.getElementById("FechaNacimiento").value;
  if (
    fechaNacimiento == null ||
    fechaNacimiento.length == 0 ||
    /^\s+$/.test(fechaNacimiento)
  ) {
    alert("Fecha de nacimiento inválido");
    return false;
  }
  lugarNacimiento = document.getElementById("LugarNacimiento").value;
  if (
    lugarNacimiento == null ||
    lugarNacimiento.length == 0 ||
    /^\s+$/.test(lugarNacimiento)
  ) {
    alert("Lugar de nacimiento inválido");
    return false;
  }
  numIdentificacion = document.getElementById("NumIdentificacion").value;
  if (
    numIdentificacion == null ||
    numIdentificacion.length == 0 ||
    /^\s+$/.test(numIdentificacion)
  ) {
    alert("Número de identificación inválido");
    return false;
  }
  direccion = document.getElementById("Direccion").value;
  if (direccion == null || direccion.length == 0 || /^\s+$/.test(direccion)) {
    alert("Dirección inválida");
    return false;
  }
  casa = document.getElementById("Casa").value;
  if (casa == null || casa.length == 0 || /^\s+$/.test(casa)) {
    alert("Casa inválida");
    return false;
  }
  telPrimario = document.getElementById("TelPrimario").value;
  if (
    telPrimario == null ||
    telPrimario.length == 0 ||
    /^\s+$/.test(telPrimario)
  ) {
    2 / 3;
    alert("Telefono primario inválido");
    return false;
  }
  contraseña = document.getElementById("Contraseña").value;
  if (
    contraseña == null ||
    contraseña.length == 0 ||
    /^\s+$/.test(contraseña)
  ) {
    alert("Contraseña inválida");
    return false;
  }
  // validaciones de las listas
  genero = document.getElementById("Genero").selectedIndex;
  if (genero == null || genero == 0) {
    alert("Género inválida");
    return false;
  }
  estadoCivil = document.getElementById("EstadoCivil").selectedIndex;
  if (estadoCivil == null || estadoCivil == 0) {
    alert("Estado Civil inválido");
    return false;
  }
  identificacion = document.getElementById("Identificacion").selectedIndex;
  if (identificacion == null || identificacion == 0) {
    alert("Identificación inválida");
    return false;
  }
  paisOrigen = document.getElementById("PaisOrigen").selectedIndex;
  if (paisOrigen == null || paisOrigen == 0) {
    alert("País de origen inválido");
    return false;
  }
  provincia = document.getElementById("Provincia").selectedIndex;
  if (provincia == null || provincia == 0) {
    alert("Provincia inválida");
    return false;
  }
  municipio = document.getElementById("Municipio").selectedIndex;
  if (municipio == null || municipio == 0) {
    alert("Muninicipio inválido");
    return false;
  }
  // validacion de los campos input tipo "correo"
  emailPrimario = document.getElementById("EmailPrimario").value;
  if (!/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(emailPrimario)) {
    alert("Correo primario inválido");
    return false;
  }
  contraseña = document.getElementById("Contraseña").value;
  contraseñaConf = document.getElementById("ContraseñaConf").value;
}
