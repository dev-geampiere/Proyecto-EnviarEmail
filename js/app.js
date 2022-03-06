// Variables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail')

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
        e.target.classList.remove('border', 'border-red-600');
        e.target.classList.add('border', 'border-green-500');
        
        // Elimina los errores
        const error = document.querySelector('p.error')
        error.remove();
    } else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-600', 'rounded-full');

        mostrarError('Todos los campos son obligatorios');
    }

    if (e.target.type === 'email') {
        const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if ( er.test( e.target.value ) ) {
            e.target.classList.remove('border', 'border-red-600');
            e.target.classList.add('border', 'border-green-500');
            
            // Elimina los errores
            const error = document.querySelector('p.error')
            error.remove();
        } else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-600', 'rounded-full');
            
            mostrarError('Email no válido');
        }
    }
}

function validarMensaje(e) {
    if (e.target.value.length > 0) {
        e.target.classList.remove('border', 'border-red-600');
        e.target.classList.add('border', 'border-green-500');
        
        // Elimina los errores
        const error = document.querySelector('p.error')
        error.remove();
    } else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-600', 'rounded');

        mostrarError('Todos los campos son obligatorios');
    }
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-600', 'background-red-100', 'text-red-500', 'p-3','rounded', 'mb-5', 'text-center', 'font-medium', 'error');

    const errores = document.querySelectorAll('.error')
    if (errores.length === 0) {
        formulario.insertBefore(mensajeError, document.querySelector('.flex'));
    }
}