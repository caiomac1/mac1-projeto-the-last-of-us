/*
    OBJETIVO - quando clicarmos no botão, temos que mostrar a imagem de fundo correspondente;

    Passo 1 - Pegar o elemento html dos botões;

    Passo 2 - Identificar o clique do usuário no botão;

    Passo 3 - Desmarcar o botão selecionado anterior;

    Passo 4 - Marcar o botão clicado como se estivesse selecionado;

    Passo 5 - Esconder a imagem ativa de fundo;

    Passo 6 - Fazer aparecer a imagem de fundo correspondente ao botão selecionado.
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Passo 1 - Pegar o elemento html dos botões;

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// Passo 2 - Identificar o clique do usuário no botão;

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();
        
        mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

