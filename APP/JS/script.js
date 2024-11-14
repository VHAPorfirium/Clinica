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


    const messages = [
        "Bem-vindo à Clínica Saúde e Bem-Estar! Cuide da sua saúde com a gente.",
        "Oferecemos atendimento especializado e acolhedor para pessoas neurodivergentes.",
        "Marque sua consulta hoje mesmo e invista na sua saúde mental!",
        "A clínica de baixo custo que você e sua família merecem!"
    ];

    let currentMessageIndex = 0;

    // Função para atualizar o texto do carrossel com animação
    function updateCarouselText() {
        const carouselText = document.getElementById("carousel-text");

        // Aplica a transição para mover o texto para a esquerda
        carouselText.style.transform = "translateX(-100%)";

        // Espera a transição terminar para atualizar o texto
        setTimeout(() => {
            // Atualiza o texto e reseta a posição
            carouselText.textContent = messages[currentMessageIndex];
            carouselText.style.transform = "translateX(100%)"; 

            carouselText.offsetHeight; 

            carouselText.style.transform = "translateX(0)";

            currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        }, 500);
    }

    // Intervalo para mudar a mensagem a cada 5 segundos
    setInterval(updateCarouselText, 5000);

});
