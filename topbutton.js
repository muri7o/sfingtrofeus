// Obter o botão de voltar ao topo
var mybutton = document.querySelector(".voltar-topo");

// Quando o usuário rolar a página para baixo, mostre o botão
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block"; // Exibe o botão quando rolar
    } else {
        mybutton.style.display = "none"; // Esconde o botão quando estiver no topo
    }
};

// Quando o usuário clicar no botão, vá para o topo
mybutton.addEventListener("click", function(event) {
    event.preventDefault();
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
});
