import View from '../view';
import cal2CareBrandPreviewImage from '/src/img/cal2careBrandPreviewImage.png';
import edgeTellurBrandPreviewImage from '/src/img/EdgeTellurBrandPreviewImage.png';
import freshBayBrandPreviewImage from '/src/img/FreshBayBrandPreviewImage.png';

class BrandPageView extends View {
  _generateMarkup() {
    return `
         <div class="bg-[#121212]">
            <section class="hero  text-white px-20  mt-16">
                <h2 class="hero-heading text-7xl">We have worked on some </br> delightful brand identities in </br> recent years and here are a few</h2>
            </section> 
            <section class="px-20 mt-16 py-8">
                <a href="/branding/careBrand" data-route="/branding/careBrand">
                    <div class="mb-8">
                        <img src="${cal2CareBrandPreviewImage}" alt="brand image"/>
                    </div>
                </a>
                <a href="/branding/devronNexus" data-route="/branding/devronNexus">
                    <div class="mb-8">
                        <img src="${edgeTellurBrandPreviewImage}" alt="brand image"/>
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
