import "../components/components";
import {
  burgerButton,
  menu,
} from './elementsNodeList';
import { mobileMenu, maskInput, } from './helpers';

window.addEventListener('load', () => {
  // Mobile menu
  mobileMenu(burgerButton, menu);
  
  //Slider
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
  });
  const swiper2 = new Swiper(".mySwiper2", {
    thumbs: {
      swiper: swiper,
    },
  });
  
  //counter
  let countVal = 1;
  const maxVal = 10;
  
  let count = document.querySelector(".counter__num");
  const increment = document.querySelector(".counter__plus");
  const decrement = document.querySelector(".counter__minus");
  
  increment.onclick = function() {
    if (countVal < maxVal) {
      updateCount(++countVal);
    }
  
    if (countVal === maxVal) {
      increment.disabled = true;
    }
  
    if (countVal > 1) {
      decrement.disabled = false;
    }
  }
  
  decrement.onclick = function() {
    if (countVal > 1) {
      updateCount(--countVal);
    }
  }
  
  function updateCount(val) {
    count.innerHTML = val;
  }
  
  //mask phone
  maskInput(".phone-mask");
});
