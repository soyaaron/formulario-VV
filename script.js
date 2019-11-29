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