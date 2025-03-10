const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}


// Script para as abas
function openTab(tabName) {
    var i, tabContent, tabButtons;
    
    // Esconde todos os conteúdos das abas
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active");
    }
    
    // Remove a classe active de todos os botões
    tabButtons = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }
    
    // Mostra o conteúdo da aba atual e marca o botão como ativo
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}

// Dados dos depoimentos
const depoimentos = [
    {
        nome: "João Silva",
        cargo: "Clube Esportivo Nacional",
        texto: "Os troféus da Sfing superaram todas as nossas expectativas. A qualidade e o acabamento são impecáveis!",
        imagem: "https://placedog.net/100/100"
    },
    {
        nome: "Maria Oliveira",
        cargo: "Empresa XYZ",
        texto: "Nossas premiações corporativas ganharam um novo nível com os produtos personalizados da Sfing.",
        imagem: "https://placedog.net/101/100"
    },
    {
        nome: "Carlos Santos",
        cargo: "Federação Estadual de Vôlei",
        texto: "Trabalhamos com a Sfing há 5 anos e a qualidade e pontualidade sempre foram excepcionais.",
        imagem: "https://placedog.net/102/100"
    }
];

let depoimentoAtual = 0;

// Função para mostrar o depoimento atual
function mostrarDepoimento() {
    const depoimento = depoimentos[depoimentoAtual];
    document.querySelector('.depoimento-avatar img').src = depoimento.imagem;
    document.querySelector('.depoimento-avatar img').alt = depoimento.nome;
    document.querySelector('.depoimento-texto').textContent = `"${depoimento.texto}"`;
    document.querySelector('.depoimento-autor').textContent = depoimento.nome;
    document.querySelector('.depoimento-cargo').textContent = depoimento.cargo;
}

// Funções para navegar entre depoimentos
function nextDepoimento() {
    depoimentoAtual = (depoimentoAtual + 1) % depoimentos.length;
    mostrarDepoimento();
}

function prevDepoimento() {
    depoimentoAtual = (depoimentoAtual - 1 + depoimentos.length) % depoimentos.length;
    mostrarDepoimento();
}

// Inicializa o primeiro depoimento quando a página carrega
document.addEventListener('DOMContentLoaded', mostrarDepoimento);