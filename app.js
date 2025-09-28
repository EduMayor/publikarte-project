// Esperar a que cargue la página
document.addEventListener('DOMContentLoaded', function() {
    
    // Buscar el formulario de contacto
    var contactForm = document.getElementById('contact-form');
    
    // Verificar que el formulario existe
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener los valores de los campos
            var nombre = document.getElementById('nombre').value;
            var email = document.getElementById('email').value;
            var mensaje = document.getElementById('mensaje').value;
            
            // Validaciones básicas
            if (nombre === '' || email === '' || mensaje === '') {
                alert('Por favor completa todos los campos');
                return;
            }
            
            if (!email.includes('@')) {
                alert('Por favor ingresa un email válido');
                return;
            }
            
            // Mensaje de éxito
            alert('¡Mensaje enviado correctamente! Te contactaremos pronto.');
            
            // Limpiar el formulario
            document.getElementById('nombre').value = '';
            document.getElementById('email').value = '';
            document.getElementById('mensaje').value = '';
        });
    } else {
        console.log('No se encontró el formulario de contacto');
    }
});
