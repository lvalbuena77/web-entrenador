// Función para mostrar/ocultar el menú en móviles
function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.classList.toggle("show");
    menu.classList.toggle("active"); // Agrega/Elimina 'active' para manejar el estado del menú
}

// Detectar cuando la ventana cambia de tamaño y ocultar el menú si es necesario
window.addEventListener("resize", function () {
    let menu = document.getElementById("menu");
    if (window.innerWidth <= 768) {
        // Asegurarse de que el menú esté cerrado en pantallas grandes
        menu.classList.remove("show");
        menu.classList.remove("active");
    }
});

// Función para ir hacia arriba
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar el botón "Volver arriba" cuando se haga scroll hacia abajo
window.addEventListener('scroll', function () {
    let backToTopBtn = document.querySelector('.back-to-top');
    if (window.scrollY > 100) {
        document.body.classList.add('scrolled');
        backToTopBtn.classList.add('show'); // Mostrar botón
    } else {
        document.body.classList.remove('scrolled');
        backToTopBtn.classList.remove('show'); // Ocultar botón
    }
});

// Cierra el menú al hacer clic en un enlace dentro del menú
document.querySelectorAll('#menu a').forEach(item => {
    item.addEventListener('click', function () {
        let menu = document.getElementById('menu');
        menu.classList.remove('show');
        menu.classList.remove('active');
    });
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', function (event) {
    var menu = document.getElementById('menu');
    var menuIcon = document.querySelector('.menu-icon');
    var isClickInsideMenu = menu.contains(event.target);
    var isClickInsideMenuIcon = menuIcon.contains(event.target);

    // Si el clic es fuera del menú y del icono, lo cerramos
    if (!isClickInsideMenu && !isClickInsideMenuIcon) {
        menu.classList.remove('show');
        menu.classList.remove('active');
    }
});

