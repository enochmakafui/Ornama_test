import View from '../view';

class BrandPageView extends View {
  _brandPageImages;

  _generateMarkup() {
    return `
         <div class="bg-[#121212]">
            <section class="hero  text-white mx-5 md:mx-[80px] lg:mx-[auto] md:px-10  mt-8 md:pt-[96px]">
                <h2 class="brand-heading text-[24px] md:text-[64px] leading-tight md:leading-[1.1] ">We have worked on some <br class="hidden md:block"> delightful brand identities in <br class="hidden md:block"> recent years and here are a few</h2>
            </section> 
            <section >
                <div class="px-5 md:mx-[80px] lg:mx-[auto] md:px-10 mt-[40px] md:mt-[138px] py-8 lg:max-w-[1440px]">

                <a href="/branding/careBrand" data-route="/branding/careBrand" class="block">
                    <div class="mb-10 md:mb-[96px] care-brand-page__card h-[200px] md:h-[533px] rounded-[19px] md:rounded-[68px]">
                        <div class="care-brand-page__card__content">
                            <h3 class="brand-page-text text-white text-[18px] md:text-[24px] mb-1 md:mb-[10px] uppercase">Call2Care</h3>
                            <p class="px-2 md:px-[20px]  py-2 md:py-[10px] rounded-[36px] bg-blue-400 text-white w-max">Visual Identity</p>
                        </div>
                    </div>
                </a>
                <a href="/branding/devronNexus" data-route="/branding/devronNexus" class="block">
                    <div class="mb-[71px] devron-brand-page__card h-[200px] md:h-[533px] rounded-[19px] md:rounded-[68px]">
                        <div class="devron-brand-page__card__content">
                            <h3 class="brand-page-text text-white text-[18px] md:text-[24px] mb-1 md:mb-[10px] uppercase">Devron Nexus</h3>
                            <p class="px-2 md:px-[20px]  py-2 md:py-[10px] rounded-[36px] bg-blue-400 text-white w-max">Visual Identity</p>
                        </div>
                    </div>  
                </a>  
                </div>
            </section>     
        </div>
        `;
  }
}

export default new BrandPageView();
