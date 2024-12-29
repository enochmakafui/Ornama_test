import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import freshBayImage from '/src/img/FreshBay.png';
import freshBayImageLazy from '/src/img/FreshBay-Lazy.jpg';
import devronNexusImage from '/src/img/DevronNexus.png';
import devronNexusImageLazy from '/src/img/DevronNexus-Lazy.jpg';
import socialMediaVideo from 'url:/src/img/Social Media.mp4';
import cal2CareOldLadyAndLadyImageLazy from '/src/img/careBrandMedia/calCareOldLadyAndLadyImage-Lazy.jpg';
import calCareOldLadyAndLadyImage from '/src/img/careBrandMedia/calCareOldLadyAndLadyImage.png';

class CarrouselView {
  initSwiper() {
    this.swiper = new Swiper('.swiper-container', {
      modules: [Navigation, Autoplay],
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      centeredSlides: true,
      speed: 2000,
      spaceBetween: 20,
      slidesPerView: 1.7,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1.7,
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    this.updateSlideClasses();

    this.swiper.on('slideChange', () => this.updateSlideClasses());
  }

  updateSlideClasses() {
    const slides = this.swiper.slides;
    const activeIndex = this.swiper.activeIndex;
    slides.forEach((slide, index) => {
      slide.classList.remove('is-active', 'is-next', 'is-prev');
      if (index === activeIndex) {
        slide.classList.add('is-active');
      } else if (index === (activeIndex + 1) % slides.length) {
        slide.classList.add('is-next');
      } else if (index === (activeIndex - 1 + slides.length) % slides.length) {
        slide.classList.add('is-prev');
      }
    });
  }

  render() {
    return `
    <div class="carrousel mt-16 md:mt-[62px]">
        <div class="carrousel-container">
            <div class="swiper-container">
                <div class="swiper-wrapper">

                    <div class="swiper-slide">
                        <img src="${freshBayImageLazy}" data-src="${freshBayImage}" alt="slide 0" class="image lazy-img">
                    </div>

                    <div class="swiper-slide">
                        <img src="${devronNexusImageLazy}" data-src="${devronNexusImage}" alt="slide 1" class="image lazy-img">
                    </div>

                    <div class="swiper-slide">
                        <img src="${calCareOldLadyAndLadyImage}" data-src="${cal2CareOldLadyAndLadyImageLazy}" alt="slide 2" class="image lazy-img">
                    </div>

                    <div class="swiper-slide">
                        <video autoPlay loop muted class=" video">
                            <source src="${socialMediaVideo}" type="video/mp4" />
                        </video>
                    </div>

                    <div class="swiper-slide">
                        <img src="${freshBayImageLazy}" data-src="${freshBayImage}" alt="slide 0" class="image lazy-img">
                    </div>

                    <div class="swiper-slide">
                        <img src="${devronNexusImageLazy}" data-src="${devronNexusImage}" alt="slide 1" class="image lazy-img">
                    </div>
                    
                    <div class="swiper-slide">
                        <img src="${cal2CareOldLadyAndLadyImageLazy}" data-src="${calCareOldLadyAndLadyImage}" alt="slide 2" class="image lazy-img">
                    </div>
                    <div class="swiper-slide">
                        <video autoPlay loop muted class=" video">
                            <source src="${socialMediaVideo}" type="video/mp4" />
                        </video>
                    </div>
            
                </div>
                <div class="swiper-button-prev ">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        >
                        <path
                        d="M38.9999 22H15.8279L24.8279 13L21.9999 10.172L8.17188 24L21.9999 37.828L24.8279 35L15.8279 26H38.9999V22Z"
                        fill="white"
                        />
                        </svg>
                </div>
                <div class="swiper-button-next ">
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      >
                      <path
                        d="M9.00013 22H32.1721L23.1721 13L26.0001 10.172L39.8281 24L26.0001 37.828L23.1721 35L32.1721 26H9.00013V22Z"
                        fill="white"
                      />
                    </svg>
                </div>
            </div>
        </div>
    </div>
        `;
  }
}

export default new CarrouselView();
