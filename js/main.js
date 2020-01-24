new WOW().init();

var mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.project-pagination',
    bulletClass: 'project-bullet',
    bulletActiveClass: 'project-bullet-active',
    clickable: true
  },
});

const backToTop = document.getElementsByClassName('back-to-top')[0];

console.log(backToTop);

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 300) {
    backToTop.style.opacity = 1;
  } else {
    backToTop.style.opacity = 0;
  }
})

document.addEventListener('DOMContentLoaded', () => {

  const btnOverlay = document.getElementsByClassName('button')[0];
  const overlay = document.getElementsByClassName('overlay')[0];
  const overlayClose = document.getElementsByClassName('close-overlay')[0];

  btnOverlay.addEventListener('click', () => {
    overlay.style.display = 'block';
    document.body.style.overflowY = 'hidden';
  });

  overlayClose.addEventListener('click', () => {
    overlay.style.display = 'none';
    document.body.style.overflowY = 'scroll';
  });
  window.addEventListener('click', e => {
    if(e.target === overlay) {
      overlay.style.display = 'none';
      document.body.style.overflowY = 'scroll';
    }
  })
  // ЗАГРУЗКА
})