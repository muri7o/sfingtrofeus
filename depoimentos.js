// Dados dos depoimentos
const depoimentos = [
    {
        nome: "Rubia Capretti",
        cargo: "------------",
        texto: "Sempre fui muito bem atendida.  Desde a captação a entrega. Não exito em indicar a empresa.",
        imagem: "../public/img/iconpadrao.png"
    },
    {
        nome: "Renato Neves",
        cargo: "TRI SPORTS",
        texto: "A experiência com a Sfing Troféus foi EXCELENTE. Já fiz premiações de 7 eventos diferentes com a empresa e em todas as vezes fui prontamente atendido, recebi várias dicas legais para a premiação, os troféus e medalhas foram entregues antes do tempo estimado e com uma qualidade altíssima. Indico muito essa empresa para outros lugares e hoje é a número 1 pra mim quando penso em solicitar premiações. Parabéns pelo trabalho e que sigamos nessa parceria muito legal que construímos.",
        imagem: "../public/img/trisports.jpg"
    },
    {
        nome: "Dioneia",
        cargo: "Fênix Torneios",
        texto: "Passando aqui para falar que mais ou menos a 1 ano venho trabalhando com a Sfing através de meus torneios e desde então fiquei fixa com essa empresa. Os designers dos troféus e medalhas são impecáveis, além disso os preços são bem em conta e um excelente atendimento desde a encomenda até a entrega. Só tenho a agradecer pela ótima atenção que recebo.",
        imagem: "../public/img/fenixtorneios.jpg"
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