// -------------------- MENU HAMBÚRGUER --------------------

// Seleciona todos os links do menu
const linksMenu = document.querySelectorAll('#menu a');

// Função para fechar o menu ao clicar em um link
function fecharMenu() {
  document.getElementById('menu').classList.remove('ativo');        // Fecha o menu
  document.getElementById('menu-toggle').classList.remove('ativo'); // Volta o ícone para hambúrguer
}

// Adiciona o evento de clique para cada link do menu
linksMenu.forEach(link => {
  link.addEventListener('click', fecharMenu);
});

// Mostra ou oculta o menu ao clicar no botão
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('ativo');
  menuToggle.classList.toggle('ativo');
});


// -------------------- EFEITOS AO ROLAR A PÁGINA --------------------

// Mostra elementos com animação ao rolar a página
function revealOnScroll() {
  // Desativa em telas menores que 768px (celulares)
  if (window.innerWidth < 768) return;

  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-bottom');
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}


// Aplica a função ao carregar e rolar a página
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


// -------------------- CARROSSEL DE SLIDES --------------------

const slides = document.querySelectorAll('.carrossel-slide');
const indicadores = document.querySelectorAll('.indicador');
const btnProximo = document.getElementById('proximo');
const btnAnterior = document.getElementById('anterior');

let slideAtual = 0;

// Mostra o slide atual e atualiza o fundo
function mostrarSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('ativo', i === index);
    indicadores[i].classList.toggle('ativo', i === index);
  });

  // Muda a cor de fundo com base no slide
  const corDeFundo = slides[index].dataset.bg;
  document.querySelector('.carrossel-container').style.backgroundColor = corDeFundo;

  // Esconde ou mostra os botões se for o primeiro ou último slide
  btnAnterior.style.visibility = index === 0 ? 'hidden' : 'visible';
  btnProximo.style.visibility = index === slides.length - 1 ? 'hidden' : 'visible';
}

// Botões de navegação
btnProximo.addEventListener('click', () => {
  if (slideAtual < slides.length - 1) {
    slideAtual++;
    mostrarSlide(slideAtual);
  }
});

btnAnterior.addEventListener('click', () => {
  if (slideAtual > 0) {
    slideAtual--;
    mostrarSlide(slideAtual);
  }
});

// Inicializa o carrossel
mostrarSlide(slideAtual);


// -------------------- CABEÇALHO ENCOLHE AO ROLAR --------------------

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('shrink', window.scrollY > 50);
});


// -------------------- TEMA DINÂMICO --------------------

function setTema(tema) {
  document.body.className = ''; // Limpa temas anteriores
  document.body.classList.add(`tema-${tema}`); // Adiciona o novo tema
}
