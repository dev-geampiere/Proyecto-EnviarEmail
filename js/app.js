// Variables
const btnEnviar = document.querySelector('#enviar');

// Variables para campos

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


eventListeners();
function eventListeners () {
    // Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // Campos del formulario
    email.addEventListener('blur', validarFormulario)
    asunto.addEventListener('blur', validarFormulario)
    mensaje.addEventListener('blur', validarMensaje)

}


// Funciones
function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50', 'rounded-full');
}

// Valida el formulario
function validarFormulario(e) {
    if( e.target.value.length > 0 ) {
        console.log('si')
    } else {
        e.target.classList.add('border', 'border-red-600', 'rounded-full');
    }
}

function validarMensaje(e) {
    if (e.target.value.length > 0) {

    } else {
        e.target.classList.add('border', 'border-red-600', 'rounded');
    }
}