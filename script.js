function toggleMenu() {
    const menu = document.getElementById('menu');
    const content = document.getElementById('content');
    const button = document.getElementById('toggle-button');
    const icon = button.querySelector('.toggle-icon'); // Seleciona o ícone da seta

    // Alterna a posição do menu
    if (menu.style.left === "0px") {
        menu.style.left = "-60px"; // Esconde o menu
        content.style.marginLeft = "0"; // Ajusta o conteúdo
        icon.style.transform = "rotate(180deg)"; // Roda a seta
    } else {
        menu.style.left = "0px"; // Mostra o menu
        content.style.marginLeft = "60px"; // Ajusta o conteúdo para a direita
        icon.style.transform = "rotate(0deg)"; // Restaura a seta
    }
}
