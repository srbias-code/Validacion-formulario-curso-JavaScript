const submitFunction = (event) => {
if(!validarFormulario()){
    event.preventDefault();
}else{
    event.preventDefault();
    alert(
        'Los datos enviados fueron: \n' +
        'Nombre:' + document.getElementById('nombre').value + '\n'+
        'Apellido:' + document.getElementById('apellido').value + '\n'+
        'Documento:' + document.getElementById('documento').value + '\n'+
        'Email:' + document.getElementById('email').value + '\n'+
        'Edad:' + document.getElementById('edad').value + '\n'+
        'Actividad:' + document.getElementById('actividad').value + '\n'+
        'Nivel de estudio:' + document.getElementById('nivelDeEstudio').value + '\n'
    )
}
}

document.getElementById('formulario').addEventListener('submit', submitFunction); // escucha el envío del formulario

function validarFormulario() {
    // Esto valida los campos de texto
    const campoTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true; // Inicializa en true

    campoTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)); // palabra error + id con la primera en mayúscula
        
        if (campo.value.length == 0) {
            mostrarError(errorCampo, 'Este campo es requerido!');
            validacionCorrecta = false; // marcar como inválido
        } else if (campo.value.length > 0 && campo.value.length < 3) {
            mostrarError(errorCampo, 'Este campo debe de tener al menos 3 caracteres!');
            validacionCorrecta = false; // marcar como inválido
        } else {
            ocultarError(errorCampo);
        }
    });

    // Esto valida el campo email
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { // regex para validar el formato de email correctamente
        mostrarError(errorEmail, 'Ingrese un correo electrónico válido!');
        validacionCorrecta = false; // marcar como inválido
    } else {
        ocultarError(errorEmail);
    }

    // validacion de edad
    const edad = document.getElementById('edad');
    const errorEdad = document.getElementById('errorEdad')
    if (edad.value < 18){
        mostrarError(errorEdad, 'Debes ser mayor de 18 años para registrarte!')
        validacionCorrecta = false
    }else{
        ocultarError(errorEdad)
    }

    // validacion de la actividad
    const actividad = document.getElementById('actividad')
    const errorActividad = document.getElementById('errorActividad')
    if(actividad.value == ''){
        mostrarError(errorActividad, 'Por favor, seleccione una actividad')
    }else{
        ocultarError(errorActividad)
    }

    // Validacion de nivel de estudio
    const nivelEstudio = document.getElementById('nivelEstudio')
    const errorNivelEstudio = document.getElementById('errorNivelEstudio')

    if(nivelEstudio.value == ''){
        mostrarError(errorNivelEstudio, 'Por favor, seleccione un nivel de estudio')
    }else{
        ocultarError(errorNivelEstudio)
    }

    // validar los terminos y condiciones
    const aceptoTerminos = document.getElementById('aceptoTerminos')
    const errorAceptoTerminos = document.getElementById('errorAceptoTerminos')

    if(!aceptoTerminos.checked){
        mostrarError(errorAceptoTerminos, 'Debes de aceptar los terminos y condiciones!');
    } else {
        ocultarError(errorAceptoTerminos);
    }
    return validacionCorrecta // esto dira si el formulario completo es o no valido
}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none";
}
