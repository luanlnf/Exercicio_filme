document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < alturaHero) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }

    })

//sessão de atraçao nas abas> personagens e filmes
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

// sessão perguntas, accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }

})

function ocultaElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}
function  exibeElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(elemento){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}


function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }

}



const modal = document.getElementById('modal');
const closeModal = document.getElementById('close');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');


// Adiciona eventos de clique aos itens da lista
document.querySelectorAll('.shows__list__item').forEach(item => {
    item.addEventListener('click', function() {
        // Obtém o título do personagem e a descrição do data-attribute
        const name = this.querySelector('.title--small').textContent; // Obtém o texto do título
        const description = this.getAttribute('data-description'); // Obtém a descrição
        
        // Atualiza o conteúdo do modal
        modalTitle.textContent = name; // Atualiza o título no modal
        modalDescription.textContent = description; // Atualiza a descrição no modal
        
        // Exibe o modal
        modal.style.display = 'block';
    });
});

// Fecha o modal ao clicar no "X"
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Fecha o modal ao clicar fora do conteúdo
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});