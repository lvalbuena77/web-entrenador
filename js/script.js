// Función para mostrar/ocultar el menú en móviles
function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

// Detectar cuando la ventana cambia de tamaño y ocultar el menú si es necesario
window.addEventListener("resize", function () {
    let menu = document.getElementById("menu");
    if (window.innerWidth > 768) {
        menu.classList.remove("show");
    }
});

// Función para ir hacia arriba
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar el botón "Volver arriba" cuando se haga scroll hacia abajo
window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

