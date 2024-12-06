import thinkAloudImage from '/src/img/thinkAloudImage.png';

import storePreviewImage from '/src/img/storePreviewImage.png';
class StorePreviewSectionView {
  render() {
    return `
    <section class="section section--hidden store_section mx-2 md:mx-auto md:px-10 ">
        <div>
            <img src="${storePreviewImage}" alt="" class="w-full"/>
        </div> 
    </section>
    <section class="mx-5 md:mx-auto md:px-10 lg:max-w-[1440px] py-8 section section--hidden  insight_section ">
            <div>
                <h2 class="text-white section-heading text-center">Some Insights From Us </h2>
            </div>
            <div class="mt-8 ">
                <img src="${thinkAloudImage}" alt="think aloud image" class="w-full"/>
            </div>
    </section>
        `;
  }
}

export default new StorePreviewSectionView();
