import uiDesignImage from '/src/img/Ui_design_image.jpg';
import marketingImage from '/src/img/social_media_image.jpg';
class WorkScopeSectionView {
  render() {
    return ` <section class="service section section--hidden text-white md:px-10 mt-8 md:mt[96px] mx-5 md:mx-[80px] lg:mx-[auto] lg:max-w-[1440px]">
        <div class="flex ">
        <h2 class="rounded-[48px] border-white block md:hidden text-center section-heading border w-max px-[63px] py-3 mb-[64px] mx-auto"> See our Works </h2>
        </div>
        <h2 class="text-center section-heading ">
            Our Scope Of Work
        </h2>
        <div class="scope-of-work-card-container mt-8 md:mt-[96px] flex flex-col md:flex-row justify-center gap-[40px] px-auto "> 
            <div class="relative  brand-container">
              <img src="${marketingImage}" alt="branding card "  class="w-[400px] h-[320px] rounded-3xl"/>
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-3xl">
                <h3 class="mb-[17px] md:mb-[18px] ml-[21px] md:ml-[24px] text-[44px]">Branding</h3>
                <div class=" flex-col gap-[8px] ml-[21px]  text-white brand-content-container">
                  <h4 class="text-[21px]">Visual Identity</h4>
                  <h4 class="text-[21px]">Brand Audit & Strategy</h4>
                  <h4 class="text-[21px]">Event Branding </h4>
                </div>
              </div>
            </div>
            <div class="relative design-container">
              <img src="${uiDesignImage}" alt="Web and App Development card" class="w-[400px] h-[320px] rounded-3xl" />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-3xl">
              <h3 class="mb-[17px] md:mb-[18px] ml-[21px] md:ml-[24px] text-[44px]">UI Design</h3>
              <div class=" flex-col gap-[8px] ml-[21px]   text-white design-content-container">
                  <h4 class="text-[21px]">UI and UX Design</h4>
                  <h4 class="text-[21px]">User Experience Research</h4>
                  <h4 class="text-[21px]">Website Design & Development </h4>
                </div>
              </div>
            </div>
            <div class="relative marketing-container">
              <img src="${marketingImage}" alt="Marketing card" class="w-[400px] h-[320px] rounded-3xl" />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-3xl">
              <h3 class="mb-[17px] md:mb-[18px] ml-[21px] md:ml-[24px] text-[44px]">Marketing</h3>
              <div class=" flex-col gap-[8px] ml-[21px]   text-white marketing-content-container">
                  <h4 class="text-[21px]">Social Media Design</h4>
                  <h4 class="text-[21px]">Print Design</h4>
                  <h4 class="text-[21px]">Events & Outdoor Campaigns </h4>
                </div>
              </div>
              </div>
            </div>
        </div>
    </section>`;
  }
}

export default new WorkScopeSectionView();
