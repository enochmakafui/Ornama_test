import thinkAloudImage from '/src/img/thinkAloudImage.png';

import storePreviewImage from '/src/img/storePreviewImage.png';
class StorePreviewSectionView {
  render() {
    return `
    <section class="section section--hidden store_section">
        <div>
            <img src="${storePreviewImage}" alt="" class="w-full"/>
        </div> 
    </section>
    <section class="px-2 md:px-20 py-8 section section--hidden  insight_section ">
        <div>
            <h2 class="text-white text-2xl md:text-4xl text-center">Some Insights From Us </h2>
        </div>
        <div class="mt-8">
            <img src="${thinkAloudImage}" alt="think aloud image"	 />
        </div>
    </section>
        `;
  }
}

export default new StorePreviewSectionView();
