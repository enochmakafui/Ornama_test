import View from '../view';
import weCareWithLoveVideo from 'url:/src/img/careBrandMedia/weCareWithLoveVideo.mp4';
import oldManAndLadyLongImage from 'url:/src/img/careBrandMedia/oldManAndLadyLongImage.png';
import oldManAndLadyLongImageLazy from 'url:/src/img/careBrandMedia/oldManAndLadyLongImage-lazy.jpg';

import oldManAndLadyImage from 'url:/src/img/careBrandMedia/oldManAndLadyImage.png';
import oldManAndLadyImageLazy from '/src/img/careBrandMedia/oldManAndLadyImage-lazy.jpg';

import calCareOldLadyAndLadyImage from 'url:/src/img/careBrandMedia/calCareOldLadyAndLadyImage.png';
import calCareOldLadyAndLadyImageLazy from '/src/img/careBrandMedia/calCareOldLadyAndLadyImage-lazy.jpg';

import fourLogosImage from 'url:/src/img/careBrandMedia/fourLogosImage.png';
import fourTypeFacesImage from 'url:/src/img/careBrandMedia/fourTypefacesImage.png';
import typeFaceImage from 'url:/src/img/careBrandMedia/typeFaceImage.png';
import calCareLogoImage from 'url:/src/img/careBrandMedia/careLogoImage.png';

import businessCardImage from 'url:/src/img/careBrandMedia/businessCardImage.png';
import businessCardImageLazy from '/src/img/careBrandMedia/businessCardImage-lazy.jpg';

import oldLadyAndNurseImage from 'url:/src/img/careBrandMedia/oldLadyAndNurseImage.png';
import oldLadyAndNurseImageLazy from '/src/img/careBrandMedia/oldLadyAndNurseImage-lazy.jpg';

import lotsOfLogosImage from 'url:/src/img/careBrandMedia/lotOfLogosImage.png';
import carVideo from 'url:/src/img/careBrandMedia/carVideo.mp4';
import threePostersImage from 'url:/src/img/careBrandMedia/threePostersImage.png';
import threePostersImageLazy from '/src/img/careBrandMedia/threePostersImage-lazy.jpg';

import twoPostersSideBySide from 'url:/src/img/careBrandMedia/twoPostersSideBySideImage.jpg';
import twoPostersSideBySideLazy from '/src/img/careBrandMedia/twoPostersSideBySideImage-lazy.jpg';

import lotOfPostersImages from 'url:/src/img/careBrandMedia/lotOfPostersImage.jpg';
import lotOfPostersImagesLazy from '/src/img/careBrandMedia/lotOfPostersImage-lazy.jpg';

import twoPostersImage from 'url:/src/img/careBrandMedia/twoPostersImage.png';
import twoPostersImageLazy from '/src/img/careBrandMedia/twoPostersImage-lazy.jpg';

import posterImage from 'url:/src/img/careBrandMedia/posterImage.png';
import posterImageLazy from '/src/img/careBrandMedia/posterImage-lazy.jpg';
import sideBySideLoveAndLogoImage from 'url:/src/img/careBrandMedia/sideBySideLoveAndLogoImage.png';

class Cal2CarePageView extends View {
  _ImagesToLazyLoad;

  _lazyLoadingHandler() {
    const imgObserver = new IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        entry.target.src = entry.target.dataset.src;
        entry.target.addEventListener('load', () => {
          entry.target.classList.remove('lazy-img');
        });
        observer.unobserve(entry.target);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );
    this._ImagesToLazyLoad.forEach(img => imgObserver.observe(img));
  }
  _generateMarkup() {
    return `
    <div class="bg-white text-[color:#343a40] px-5 md:px-[100px] lg:px-[auto] pt-8 md:pt-[100px] pb-[100px] ">
        <div class="lg:max-w-[1440px] lg:mx-[auto]">
        <section class="">
            <div >
                <video autoPlay loop muted class="rounded-[11px] md:rounded-[40px]">
                    <source src="${weCareWithLoveVideo}" type="video/mp4" />
                </video>
            </div>
        </section>
        <section class="mt-8 md:mt-[100px] flex flex-col md:flex-row items-center px-2 md:px-16">
            <div class="basis-2/4">
                <h2 class="text-[50px] font-normal  mb-8 care-solution-text">Call2Care solutions </br> UK <span class="italic">Rebrand</span></h2>
                <p class="text-[18px]">A Domiciliary care service provider</p>
            </div>
            <div class="basis-2/4">
                <p class="text-[20px] care-solution-long-text">Some brands are deeply embedded with the essence of compassion and humanity, possessing the power to provide comfort, support, and hope to those in need. When Call2Care Solution approached us for their rebranding project, we recognized that we were about to collaborate with a brand that epitomizes the genuine spirit of care and love.</p>
            </div>
        </section>
        <section class="mt-8 md:mt-[100px]">
            <div >
                <img src="${oldManAndLadyLongImageLazy}" data-src="${oldManAndLadyLongImage}"  alt="" class="rounded-[11px] md:rounded-[40px] lazy-img"/>
            </div>
        </section>
        <section class="mt-8 md:mt-[100px]">
            <div >
                <img src="${oldManAndLadyImageLazy}" data-src="${oldManAndLadyImage}"  alt="" class="rounded-[11px] md:rounded-[40px] lazy-img"/>
            </div>
        </section>
        <section class="mt-8 md:mt-[100px] flex flex-col  md:flex-row gap-[128px] items-center px-2 md:px-16">
            <div class="basis-[45%]">
                <h2 class="text-5xl mb-8 care-decision-head">The Decision to </br> Rebrand</h2>
                <ul class="flex flex-col gap-5">
                    <li class="mb-2">
                    <p class="text-[20px]"><span class="font-bold">Uniqueness:</span> The client's previous logo was similar to others in the industry, lacking a unique identity that set them apart.
                    </p>
                    </li>
                    <li>
                     <p class="text-[20px]">
                     <span class="font-bold">Color Scheme:</span> The old color scheme failed to clearly represent the company’s values of trust, unity, and care.
                     </p>
                    </li>
                   
                    <li>
                    <p class="text-[20px]">
                    <span class="font-bold">Icon Misinterpretation:</span> The "call" icon in the previous logo was often mistaken for a phone call, rather than symbolizing a natural calling to care as an ethos.</p>
                    </li>
                </ul>
            </div>
            <div class="basis-[55%]">
                <img src="${sideBySideLoveAndLogoImage}" alt=""/>
            </div>
        </section>

        <section class="mt-8 md:mt-[100px]">
            <div >
                <img src="${calCareOldLadyAndLadyImageLazy}" data-src="${calCareOldLadyAndLadyImage}" alt="" class="rounded-[11px] md:rounded-[40px] lazy-img"/>
            </div>
        </section>
        <section class="mt-8 md:mt-[100px]">
            <div >
                <img src="${fourLogosImage}" alt="" class="rounded-[11px] md:rounded-[40px]"/>
            </div>
        </section>
        
        <section class="mt-8 md:mt-[100px]">
            <div >
                <img src="${fourTypeFacesImage}" alt="" class="rounded-[11px] md:rounded-[40px]"/>
            </div>
        </section>
        <section class="mt-8 md:mt-[100px]">
            <div >
                <img src="${typeFaceImage}" alt="" class="rounded-[11px] md:rounded-[40px]"/>
            </div>
        </section>
        <section class="mt-8 md:mt-[100px]">
            <div >
                <img src="${calCareLogoImage}" alt="" class="rounded-[11px] md:rounded-[40px]"/>
            </div>
        </section>
        <section class="mt-8 md:mt-[100px]">
            <div >
                <img src="${businessCardImageLazy}" data-src="${businessCardImage}" alt="" class="rounded-[11px] md:rounded-[40px] lazy-img"/>
            </div>
        </section>
        <section class="mt-8 md:mt-[100px]">
            <div >
                <img src="${oldLadyAndNurseImageLazy}" data-src="${oldLadyAndNurseImage}" alt="" class="rounded-[11px] md:rounded-[40px] lazy-img"/>
            </div>
        </section>
        <section class="mt-8 md:mt-[100px]">
            <div >
                <img src="${lotsOfLogosImage}" alt="" class="rounded-[11px] md:rounded-[40px] "/>
            </div>
        </section>
        <section class="mt-8 md:mt-[100px]">
            <div >
                <video autoPlay loop muted class="rounded-[11px] md:rounded-[40px]">
                    <source src="${carVideo}" type="video/mp4" />
                </video>
            </div>
        </section>
        <section class="mt-8 md:mt-[100px]">
                <div class=" px-[266px]">
                    <p class="mb-5 text-[20px] care-quote text-center">“ I was impressed by the outcome so I awarded a 3-month contract to <span class="font-bold">Ornama Studio</span> to aid in the post branding process. The team did my company’s brochures and social media posts and they were awesome.” </p>
                    <p class="quote-author text-center">Pius- Call2Care Solutions CEO</p>
                </div>
        </section>
         <section class="mt-8 md:mt-[100px]">
            <div >
                <img src="${threePostersImageLazy}" data-src="${threePostersImage}" alt="" class="rounded-[11px] md:rounded-[40px] lazy-img"/>
            </div>
        </section>

        <section class="mt-8 md:mt-[100px] overlapping-container">
            <div class="container-1">
                <img src="${twoPostersSideBySideLazy}" data-src="${twoPostersSideBySide}" alt="" class="rounded-[11px] md:rounded-[40px] w-[713px] h-[535px] lazy-img"/>
            </div>
            <div class="container-2 ">
                <img src="${lotOfPostersImagesLazy}" data-src="${lotOfPostersImages}" alt="" class="rounded-[11px] md:rounded-[40px] h-[404px] -rotate-12  ml-[20px] mt-[20px] w-[90%] lazy-img"/>
            </div>
        </section>
        
        <section class="mt-8 md:mt-[100px]">
           <div >
               <img src="${twoPostersImageLazy}" data-src="${twoPostersImage}" alt="" class="rounded-[11px] md:rounded-[40px] lazy-img"/>
           </div>
       </section>
        <section class="mt-8 md:mt-[100px]">
           <div >
               <img src="${posterImageLazy}" data-src="${posterImage}" alt="" class="rounded-[11px] md:rounded-[40px] lazy-img"/>
           </div>
       </section>
       </div>
    </div>

        `;
  }

  render() {
    const markup = this._generateMarkup();

    this._clear();
    this._rootElement.insertAdjacentHTML('afterbegin', markup);
    this._ImagesToLazyLoad = document.querySelectorAll('.lazy-img');
    this._lazyLoadingHandler();
  }
}

export default new Cal2CarePageView();
