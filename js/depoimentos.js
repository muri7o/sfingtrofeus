// Dados dos depoimentos
const depoimentos = [
    {
        nome: "Rubia Capretti",
        cargo: "",
        texto: "Sempre fui muito bem atendida.  Desde a captação a entrega. Não exito em indicar a empresa.",
        imagem: "public/img/iconpadrao.png"
    },
    {
        nome: "Renato Neves",
        cargo: "TRI SPORTS",
        texto: "A experiência com a Sfing Troféus foi EXCELENTE. Já fiz premiações de 7 eventos diferentes com a empresa e em todas as vezes fui prontamente atendido, recebi várias dicas legais para a premiação, os troféus e medalhas foram entregues antes do tempo estimado e com uma qualidade altíssima. Indico muito essa empresa para outros lugares e hoje é a número 1 pra mim quando penso em solicitar premiações. Parabéns pelo trabalho e que sigamos nessa parceria muito legal que construímos.",
        imagem: "public/img/trisports.jpg"
    },
    {
        nome: "Dioneia",
        cargo: "Fênix Torneios",
        texto: "Passando aqui para falar que mais ou menos a 1 ano venho trabalhando com a Sfing através de meus torneios e desde então fiquei fixa com essa empresa. Os designers dos troféus e medalhas são impecáveis, além disso os preços são bem em conta e um excelente atendimento desde a encomenda até a entrega. Só tenho a agradecer pela ótima atenção que recebo.",
        imagem: "public/img/fenixtorneios.jpg"
    },
    {
        nome: "Marco",
        cargo: "Integração Cruzaltense",
        texto: "Desde 2024, quando o Integração Cruzaltense realizou seu primeiro evento esportivo, começamos a trilhar um caminho cheio de desafios, conquistas e, principalmente, boas parcerias, e foi exatamente nessa trajetória que conhecemos a Sfing. Na busca por uma empresa de confiança no ramo de premiações, encontramos na Sfing muito mais que um fornecedor: encontramos uma equipe parceira, que nos atendeu com atenção, agilidade e excelência desde o primeiro contato. A cada novo torneio, a Sfing sempre esteve ao nosso lado, sempre pronta para esclarecer dúvidas, sugerir as melhores opções e garantir que cada troféu refletisse a essência do nosso grupo e das nossas competições. É uma empresa acessível, comprometida e que realmente entende a importância dos detalhes em cada entrega. Agradecemos imensamente por essa parceria de confiança e recomendamos de olhos fechados a Sfing para quem busca qualidade e dedicação no mundo das premiações esportivas.",
        imagem: "public/img/integracaocruzaltense.jpg"
    },
    {
        nome: "João Pedro Martins",
        cargo: "",
        texto: "Tudo ótimo, produto e atendimento 100%",
        imagem: "public/img/iconpadrao.png"
    },
    {
        nome: "Mateus",
        cargo: "Paladino Tênis Clube",
        texto: "A SFING é parceira de todos os momentos para nossos torneios do clube Paladino. Confiança, qualidade e excelência nos produtos e entregas.",
        imagem: "public/img/paladino.jpg"
    },
    {
        nome: "Gabriel Costa",
        cargo: "Atena Tênis",
        texto: "Muito bom, atendimento ótimo com respostas rápidas, boa variedade de produtos e qualidade ótima. Sempre recorremos à Sfing na maioria de nossos torneios e eventos de tênis, e sempre foram atenciosos e atenderam nossas expectativas e a dos tenistas. Recomendo!",
        imagem: "public/img/atenatenis.jpg"
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