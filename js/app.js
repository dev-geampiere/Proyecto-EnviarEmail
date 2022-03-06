// Variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

// Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();
function eventListeners () {
    // Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // Campos del formulario
    email.addEventListener('blur', validarFormulario)
    asunto.addEventListener('blur', validarFormulario)
    mensaje.addEventListener('blur', validarMensaje)

    //Reinicia el formulario
    btnReset.addEventListener('click', resetForm);

    // Enviar Email
    formulario.addEventListener('submit', enviarEmail);
}


// Funciones
function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50', 'rounded-full');
}

// Valida el formulario
function validarFormulario(e) {

    if( e.target.value.length > 0 ) {        
        // Elimina los errores
        const error = document.querySelector('p.error')
        if (error) {
            error.remove();
        }

        e.target.classList.remove('border', 'border-red-600');
        e.target.classList.add('border', 'border-green-500');

    } else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-600', 'rounded-full');

        mostrarError('Todos los campos son obligatorios');
    }

    if (e.target.type === 'email') {

        if ( er.test( e.target.value ) ) {
            // Elimina los errores
            const error = document.querySelector('p.error')
            if (error) {
                error.remove();
            }

            e.target.classList.remove('border', 'border-red-600');
            e.target.classList.add('border', 'border-green-500');
        } else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-600', 'rounded-full');
            mostrarError('Email no válido');
        }
    }

    if ( er.test( email.value ) && asunto.value !== "" && mensaje.value !== "" ) {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50',);
    } else {
        btnEnviar.disabled = true;
        btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
    }
}

function validarMensaje(e) {

    if (e.target.value.length > 0) {        
        // Elimina los errores
        const error = document.querySelector('p.error')
        if (error) {
            error.remove();
        }

        e.target.classList.remove('border', 'border-red-600');
        e.target.classList.add('border', 'border-green-500', 'rounded');
    } else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-600', 'rounded');

        mostrarError('Todos los campos son obligatorios');
    }
    
    if ( er.test( email.value ) && asunto.value !== "" && mensaje.value !== "" ) {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    } else {
        btnEnviar.disabled = true;
        btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
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

// Enviar email
function enviarEmail(e) {
    e.preventDefault();

    // Mostrar el spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    setTimeout(() => {
        spinner.style.display = 'none';

        const parrafo = document.createElement('p');
        parrafo.textContent = 'El mensaje se envio correctamente';
        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'font-bold', 'text-white', 'uppercase');

        formulario.insertBefore(parrafo, spinner);

        setTimeout(() => {
            parrafo.remove();

            resetForm();
        }, 4000);
    }, 3000);
}

function resetForm() {
    formulario.reset();

    iniciarApp();
}

