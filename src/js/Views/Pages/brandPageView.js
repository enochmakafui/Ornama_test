import View from '../view';
import calCareOldLadyAndLadyImage from 'url:/src/img/careBrandMedia/calCareOldLadyAndLadyImage.png';
import planeImage from 'url:/src/img/DevronBrandMedia/planeImage.png';

class BrandPageView extends View {
  _generateMarkup() {
    return `
         <div class="bg-[#121212]">
            <section class="hero  text-white px-5 md:px-20  mt-8 md:mt-16">
                <h2 class="brand-heading ">We have worked on some <br class="hidden md:block"> delightful brand identities in <br class="hidden md:block"> recent years and here are a few</h2>
            </section> 
            <section class="px-5 md:px-20 mt-4 md:mt-16 py-8">
                <a href="/branding/careBrand" data-route="/branding/careBrand" class="relative block">
                    <div class="mb-8">
                        <img src="${calCareOldLadyAndLadyImage}" alt="brand image" class="rounded-2xl "/>
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-2xl">
                        <h3 class="text-white text-xl mb-2">Call2Care</h3>
                        <p class="px-2 md:px-4 py-2 md:py-3 rounded-2xl bg-blue-400 text-white w-max">Visual Identity</p>
                        </div>
                    </div>
                </a>


                <a href="/branding/devronNexus" data-route="/branding/devronNexus" class="relative block">
                    <div class="mb-8 ">
                        <img src="${planeImage}" alt="brand image" class="rounded-2xl"/>
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-2xl">
                            <h3 class="text-white text-xl mb-4 ">Devron Nexus</h3>
                            <p class="px-2 md:px-4 py-2 md:py-3 rounded-2xl bg-blue-400 text-white w-max">Visual Identity</p>
                        </div>
                    </div>
                </a>
               
                
            </section>     
        </div>

        `;
  }
}

export default new BrandPageView();
