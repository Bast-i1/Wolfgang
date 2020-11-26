import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const initSwiper = () => {
  const swiper1 = new Swiper('.s1', {
    slidesPerView: 3,
    spaceBetween: 16,
    loop: true,
    mousewheel: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

export {initSwiper}