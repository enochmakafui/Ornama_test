import View from '../view';
import calCareOldLadyAndLadyImage from 'url:/src/img/careBrandMedia/calCareOldLadyAndLadyImage.png';
import planeImage from 'url:/src/img/DevronBrandMedia/planeImage.png';

class BrandPageView extends View {
  _generateMarkup() {
    return `
         <div class="bg-[#121212]">
            <section class="hero  text-white mx-5 md:mx-[80px] lg:mx-[auto] md:px-10  mt-8 md:mt-[96px]">
                <h2 class="brand-heading ">We have worked on some <br class="hidden md:block"> delightful brand identities in <br class="hidden md:block"> recent years and here are a few</h2>
            </section> 
            <section class="px-5 md:mx-[80px] lg:mx-[auto] md:px-10 mt-4 md:mt-[138px] py-8">
                <a href="/branding/careBrand" data-route="/branding/careBrand" class="relative ">
                    <div class="mb-10 md:mb-[96px]">
                        <img src="${calCareOldLadyAndLadyImage}" alt="brand image" class="rounded-[19px] md:rounded-[68px] "/>
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-[19px] md:rounded-b-[68px]">
                        <h3 class="text-white text-[24px] md:text-5xl mb-1 md:mb-[17px] ml-[24px] md:ml-[64px] uppercase">Call2Care</h3>
                        <p class="px-2 md:px-[20px] ml-[24px] md:ml-[64px] mb-[24px] md:mb-[56px] py-2 md:py-[10px] rounded-[36px] bg-blue-400 text-white w-max">Visual Identity</p>
                        </div>
                    </div>
                </a>


                <a href="/branding/devronNexus" data-route="/branding/devronNexus" class="relative block">
                    <div class="mb-[71px] ">
                        <img src="${planeImage}" alt="brand image" class="rounded-[19px] md:rounded-[68px]"/>
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-[19px] md:rounded-b-[68px]">
                            <h3 class="text-white text-[24px] text-5xl mb-1 md:mb-[17px] ml-[24px] md:ml-[64px] uppercase ">Devron Nexus</h3>
                            <p class="px-2 md:px-[20px] ml-[24px] md:ml-[64px] mb-[24px] md:mb-[56px] py-2 md:py-[10px] rounded-[36px] bg-blue-400 text-white w-max">Visual Identity</p>
                        </div>
                    </div>
                </a>
               
                
            </section>     
        </div>

        `;
  }
}

export default new BrandPageView();
