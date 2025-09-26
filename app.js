document.addEventListener('DOMContentLoaded', function() {

    var menuToggle = document.getElementById('nav-toggle');
    var menu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    var menuLinks = document.querySelectorAll('.nav__link');
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
        });
    });

    var allLinks = document.querySelectorAll('a[href^="#"]');
    allLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    var contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var mensaje = document.getElementById('mensaje').value;

        if (nombre === '' || email === '' || mensaje === '') {
            alert('Por favor completa todos los campos');
            return;
        }

        if (!email.includes('@')) {
            alert('Por favor ingresa un email válido');
            return;
        }

        alert('¡Mensaje enviado correctamente! Te contactaremos pronto.');

        document.getElementById('nombre').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mensaje').value = '';
    });
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');

    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});