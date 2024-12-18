import thinkAloudImage from '/src/img/thinkAloudImage.png';

import storePreviewImage from '/src/img/storePreviewImage.png';
class StorePreviewSectionView {
  render() {
    return `
    <section class="section section--hidden store_section  ">
        <div class=""> 
            <img src="${storePreviewImage}" alt="" class="w-full h-[184px] md:h-auto"/>
        </div> 
    </section>
    <section class="mx-5 md:mx-[80px] lg:mx-[auto] md:px-10 lg:max-w-[1440px] pt-[48px] pb-1 md:pb-[98px] section section--hidden  insight_section ">
            <div>
                <h2 class="text-white section-heading text-center">Some Insights From Us </h2>
            </div>
            <div class="mt-5 md:mt-[48px] ">
                <img src="${thinkAloudImage}" alt="think aloud image" class="w-full h-[119px] md:h-auto"/>
            </div>
    </section>
        `;
  }
}

export default new StorePreviewSectionView();
