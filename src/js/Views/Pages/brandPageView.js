import View from '../view';
import calCareOldLadyAndLadyImage from 'url:/src/img/careBrandMedia/calCareOldLadyAndLadyImage.png';
import planeImage from 'url:/src/img/DevronBrandMedia/planeImage.png';
import freshBayBrandPreviewImage from '/src/img/FreshBayBrandPreviewImage.png';

class BrandPageView extends View {
  _generateMarkup() {
    return `
         <div class="bg-[#121212]">
            <section class="hero  text-white px-2 md:px-20  mt-8 md:mt-16">
                <h2 class="hero-heading ">We have worked on some <br class="hidden md:*:"> delightful brand identities in <br class="hidden md:block"> recent years and here are a few</h2>
            </section> 
            <section class="px-2 md:px-20 mt-8 md:mt-16 py-8">
                <a href="/branding/careBrand" data-route="/branding/careBrand">
                    <div class="mb-8 ">
                        <img src="${calCareOldLadyAndLadyImage}" alt="brand image" class="rounded-2xl"/>
                        <div class="">
                            <h3 class="text-white text-xl mb-4">Call2Care</h3>
                            <p class="px-4 py-3 rounded-2xl bg-blue-400 text-white w-max">Visual Identity</p>
                        </div>
                    </div>
                </a>
                <a href="/branding/devronNexus" data-route="/branding/devronNexus">
                    <div class="mb-8 ">
                        <img src="${planeImage}" alt="brand image" class="rounded-2xl"/>
                        <div class="">
                            <h3 class="text-white text-xl mb-4 ">Devron Nexus</h3>
                            <p class="px-4 py-3 rounded-2xl bg-blue-400 text-white w-max">Visual Identity</p>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div >
                        <img src="${freshBayBrandPreviewImage}" alt="brand image" />
                    </div>
                </a>
                
            </section>     
        </div>

        `;
  }
}

export default new BrandPageView();
