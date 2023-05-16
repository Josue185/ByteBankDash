// Seleciona um elemento HTML com o atributo `data-lista` e armazena em uma constante chamada `lista`.
const lista = document.querySelectorAll('[data-lista]'); 

function selecionaCotacao(nome, valor) {
    lista.forEach((listaEscolhida) => {
        if (listaEscolhida.id == nome) {
            imprimeCotacao(listaEscolhida, nome, valor);
        }
    })
}

// Define uma função chamada `imprimeCotacao` que aceita dois parâmetros: `nome` e `valor`.
function imprimeCotacao(lista, nome, valor) { 
    lista.innerHTML = ''; // Limpa o conteúdo da lista HTML antes de adicionar novos itens.

const plurais = {
    "dolar": "dolares",
    "iene": "ienes",
}

// Define um loop que executa 4 vezes, com `multiplicador` assumindo os valores 1, 10, 100 e 1000.
    for (let multiplicador = 1; multiplicador <= 1000; multiplicador *= 10) { 
        // Cria um novo elemento `li` e armazena em uma constante chamada `listaItem`.
        const listaItem = document.createElement('li'); 
        // Define o valor do novo elemento `li` concatenando `multiplicador`, `nome` e `valor * multiplicador` em uma string formatada.
        listaItem.innerHTML = `${multiplicador} ${multiplicador == 1 ? nome: plurais[nome]}: R$${(valor * multiplicador).toFixed(2)}`; 
        // Adiciona o novo elemento `li` à lista HTML.
        lista.appendChild(listaItem); 
    }
}

export default selecionaCotacao;