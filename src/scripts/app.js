import '../estilos/styles.css';
import 'swiper/swiper-bundle.css';

import Swiper from 'swiper';


document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        // Configuración del Swiper
        direction: 'horizontal',
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

     const nextButton = document.querySelector('.swiper-button-next');
     const prevButton = document.querySelector('.swiper-button-prev');
 
     nextButton.addEventListener('click', function () {
         swiper.slideNext();
     });
 
     prevButton.addEventListener('click', function () {
         swiper.slidePrev();
     });
 });


 
 window.addEventListener('load', () => {
    document.querySelector('form').addEventListener('submit', (e) => {
      const nombre = document.querySelector('#nombre').value;
      const apellidos = document.querySelector('#apellidos').value;
      const email = document.querySelector('#email').value;
      const terms = document.querySelector('#terms').checked;
  
      if (!nombre || !apellidos || !email) {
        alert('Por favor, completa todos los campos requeridos.');
        e.preventDefault();
      }
  
      if (!terms) {
        alert('Debes aceptar la política de privacidad para continuar.');
        e.preventDefault(); 
      }
  
    });
  });


  const videoContainer = document.getElementById('video-container');
  const videoThumbnail = document.getElementById('video-thumbnail');

  videoThumbnail.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.width = '560';
      iframe.height = '315';
      iframe.src = 'https://www.youtube.com/embed/Q6ePXM0k9Ag?si=Om4qFC-FWjkygX38&autoplay=1';
      iframe.title = 'YouTube video player';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;

      videoContainer.innerHTML = '';
      videoContainer.appendChild(iframe);
  });