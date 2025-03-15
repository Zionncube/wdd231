document.addEventListener("DOMContentLoaded", () => {
    // Toggle mobile menu
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("show");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && event.target !== menuToggle) {
            menu.classList.remove("show");
        }
    });
});