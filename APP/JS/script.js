document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link
            const targetId = this.getAttribute("href").substring(1); // Obtém o ID da seção
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth" // Faz a rolagem suave
                });
            }
        });
    });
});
