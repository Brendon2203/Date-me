document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("movableButton");
    const successButton = document.getElementById("staticButton");
    const contBtn = document.querySelector(".cont-btn");

    // Evento para mover o botão Danger ao ser clicado
    button.addEventListener("click", () => {
        const maxWidth = contBtn.clientWidth - button.offsetWidth;
        const maxHeight = contBtn.clientHeight - button.offsetHeight;

        const randomX = Math.random() * maxWidth;
        const randomY = Math.random() * maxHeight;

        button.style.position = "absolute";
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    });

    
});
