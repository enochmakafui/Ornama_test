class WorkScopeSectionView {
  render() {
    return ` <section class="service section section--hidden text-white md:px-10 mt-8 md:mt[96px] mx-5 md:mx-[80px] lg:mx-[auto] lg:max-w-[1440px]">
        <div class="flex ">
        <a href="#" class="see-work-link inline-block px-[63px] py-3 md:hidden rounded-[48px] border-white border w-max mx-auto mb-16 text-xl" > See all our works </a>
        </div>
        <h2 class="text-center section-heading text-2xl md:text-5xl tracking-[0.8px] ">
            Our Scope Of Work
        </h2>
        <div class="scope-of-work-card-container mt-8 md:mt-[96px] flex flex-col md:flex-row justify-center   gap-[40px] px-auto "> 
            <div class="brand-container w-auto md:w-[400px] h-[286px] md:h-[320px]">
              <div class="brand-container__content">
                <h3 class="mb-[17px] md:mb-[18px] ml-[21px] md:ml-[24px] text-[39px] md:text-[44px]">Branding</h3>
                <div class=" flex-col gap-[8px] ml-[21px]  text-white brand-content-container">
                  <h4 class="text-[21px]">Visual Identity</h4>
                  <h4 class="text-[21px]">Brand Audit & Strategy</h4>
                  <h4 class="text-[21px]">Event Branding </h4>
                </div>
              </div>
            </div>
            <div class=" design-container w-auto md:w-[400px] h-[286px] md:h-[320px] ">
              <div class="design-container__content">
              <h3 class="mb-[17px] md:mb-[18px] ml-[21px] md:ml-[24px] text-[39px] md:text-[44px]">UI Design</h3>
              <div class=" flex-col gap-[8px] ml-[21px]   text-white design-content-container">
                  <h4 class="text-[21px]">UI and UX Design</h4>
                  <h4 class="text-[21px]">User Experience Research</h4>
                  <h4 class="text-[21px]">Website Design & Development </h4>
                </div>
              </div>
            </div>
            <div class="marketing-container w-auto md:w-[400px] h-[286px] md:h-[320px] ">
              <div class="marketing-container__content">
              <h3 class="mb-[17px] md:mb-[18px] ml-[21px] md:ml-[24px] text-[39px] md:text-[44px]">Marketing</h3>
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
