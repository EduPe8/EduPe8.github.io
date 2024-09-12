document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario

    let nombre = document.getElementById('nombre').value.trim();
    let email = document.getElementById('email').value.trim();
    let mensaje = document.getElementById('mensaje').value.trim();
    let mensajeDiv = document.getElementById('mensaje');

    // Validar el formulario
    if (nombre && email && mensaje) {
        mensajeDiv.style.color = 'green';

        // Mostrar alerta de éxito
        alert('¡Tu mensaje ha sido enviado!');

        // Limpiar el formulario
        document.getElementById('contactForm').reset();
    } else {
        mensajeDiv.textContent = 'Completa este campo';      
    }
});
