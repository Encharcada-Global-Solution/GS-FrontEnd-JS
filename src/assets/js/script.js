
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


const slides = document.querySelectorAll('.carrossel-slide');
const indicadores = document.querySelectorAll('.indicador');
const btnProximo = document.getElementById('proximo');
const btnAnterior = document.getElementById('anterior');

let slideAtual = 0;

function mostrarSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('ativo', i === index);
    indicadores[i].classList.toggle('ativo', i === index);
  });

  // Muda o fundo
  const corDeFundo = slides[index].dataset.bg;
  document.querySelector('.carrossel-container').style.backgroundColor = corDeFundo;

  // Desativa ou ativa os botões
  btnAnterior.style.visibility = index === 0 ? 'hidden' : 'visible';
  btnProximo.style.visibility = index === slides.length - 1 ? 'hidden' : 'visible';
}

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

// Inicialização
mostrarSlide(slideAtual);

window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});

function setTema(tema) {
  document.body.className = '';
  document.body.classList.add(`tema-${tema}`);
}

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
menu.classList.toggle('ativo');
menuToggle.classList.toggle('ativo');
});