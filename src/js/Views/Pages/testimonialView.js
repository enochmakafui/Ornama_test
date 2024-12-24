import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import avatarImage from '/src/img/avatarImage.png';

class TestimonialView {
  initSwiper() {
    this.swiper = new Swiper('.testimonial-swiper-container', {
      modules: [Navigation, Pagination],
      centeredSlides: true,
      loop: true,
      spaceBetween: 40,
      slidesPerView: 1.8,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 1,
          //   spaceBetween: 10,
        },
        768: {
          slidesPerView: 1.8,
        },
      },
      navigation: {
        nextEl: '.testimonial-button-next',
        prevEl: '.testimonial-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  _testimonialContent = Array.from({ length: 4 }, (_, i) => i)
    .map(() => {
      return `<div class="swiper-slide">
                        <div class="testimonial-card bg-[#121212] py-[24px] md:py-8 px-[24px] md:px-12 rounded-2xl">
                            <h3 class=" mb-8  bg-[#000000] uppercase px-[24px] py-[12px] rounded-[20px] w-max">Testimonials</h3>
                            <h2 class="text-[56px] mb-4">What our clients <span class="italic font-semibold text-[#ff7e21] said">said</span></h2>
                            <div class="flex gap-2 mb-4">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ff7e21" stroke="#ff7e21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ff7e21" stroke="#ff7e21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ff7e21" stroke="#ff7e21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ff7e21" stroke="#ff7e21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ff7e21" stroke="#ff7e21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                                </span>
                            </div>
                            <p class="testimonial-text">Avat and his team did a brilliant job on strategy for my company’s marketing and branding efforts which led to a dramatic and sharp increase in sales as well as a first round pre-seed funding of 20,000 USD
                            </p>
                            <div class="profile flex items-center gap-4 mt-5">
                                <img src=${avatarImage} alt="profile image" class="w-[100px] h-[100px]"/>
                                <div class="profile-about ">
                                <p class="head text-2xl">Jonathan Mensah</p>
                                <p class="role text-xl ">CEO of ReHome Africa</p>
                            </div>
                        </div>
                        </div>
                </div>`;
    })
    .join('');

  render() {
    return `
        <div class="testimonial">
            <div class="testimonial-swiper-container text-white">
                <div class="swiper-wrapper">
                    ${this._testimonialContent}
                </div>
                    <div class="testimonial-button-prev">
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
                    <div class="testimonial-button-next">
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
                    <div class="swiper-pagination"></div>
                </div>
        </div>
    `;
  }
}

export default new TestimonialView();
