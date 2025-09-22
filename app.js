// JavaScript muy simple para PubliKarte
// Código básico sin funciones complejas

// Cuando la página termine de cargar
document.addEventListener('DOMContentLoaded', function() {
    
    // Botón de menú móvil
    var menuBtn = document.getElementById('menu-btn');
    var menu = document.getElementById('menu');
    
    // Abrir y cerrar menú móvil
    menuBtn.onclick = function() {
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
    };
    
    // Hacer que los enlaces del menú funcionen
    var enlaces = document.querySelectorAll('nav a[href^="#"]');
    
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].onclick = function(e) {
            e.preventDefault();
            var destino = this.getAttribute('href');
            var elemento = document.querySelector(destino);
            
            if (elemento) {
                elemento.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            
            // Cerrar menú móvil si está abierto
            if (window.innerWidth <= 768) {
                menu.style.display = 'none';
            }
        };
    }
    
    // Hacer que los botones del hero funcionen también
    var btnServicios = document.querySelector('a[href="#servicios"]');
    var btnContacto = document.querySelector('a[href="#contacto"]');
    
    if (btnServicios) {
        btnServicios.onclick = function(e) {
            e.preventDefault();
            document.getElementById('servicios').scrollIntoView({
                behavior: 'smooth'
            });
        };
    }
    
    if (btnContacto) {
        btnContacto.onclick = function(e) {
            e.preventDefault();
            document.getElementById('contacto').scrollIntoView({
                behavior: 'smooth'
            });
        };
    }
    
    // Formulario de contacto simple
    var formulario = document.getElementById('formulario-contacto');
    
    formulario.onsubmit = function(e) {
        e.preventDefault();
        
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var mensaje = document.getElementById('mensaje').value;
        
        // Validación básica
        if (!nombre || !email || !mensaje) {
            alert('Por favor completa todos los campos');
            return false;
        }
        
        // Mostrar mensaje de éxito
        alert('¡Gracias por contactarnos! Te responderemos pronto.');
        
        // Limpiar formulario
        document.getElementById('nombre').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mensaje').value = '';
    };
    
});