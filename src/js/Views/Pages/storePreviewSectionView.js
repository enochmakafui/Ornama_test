import thinkOutsideBoxImage from '/src/img/ThinkOutSideBox.jpeg';

class StorePreviewSectionView {
  render() {
    return `
    <section class="h-[400px] md:h-[562px] section section--hidden store_section ">
        <div class="store_section__content  w-[90%] md:w-auto">
            <h2 class="text-white text-[24px] md:text-[64px] text-center ">Find the best of picture frames, books and digital assets</h2>
            <a  href="/store" data-route="/store" class="w-max text-nowrap button-black text-[16px] md:text-2xl  px-8 md:px-12 py-3 md:py-4 rounded-[100px]  mt-5 md:mt-12 border-white border"> <span>Visit Our Store</span><span class="text-nowrap">Visit Our Store</span></a>
        </div>  
    </section>
    <section class="insight_section bg-black section section--hidden text-white pt-[77px] md:pt-[77px] pb-[98px]">
  <div class="mx-0 md:mx-[80px] lg:mx-[auto] px-2 md:px-10 lg:max-w-[1440px]">
    <h2 class="text-white section-heading text-center text-2xl md:text-5xl tracking-[0.8px]">Some Insights From Us</h2>
    <div class="mt-4 md:mt-[74px] grid grid-cols-2 gap-0 h-[119px] md:h-auto">
      <div class="insights__text-box bg-[#383838CC] w-full p-[9px] md:p-9">
        <h2 class="text-[24px] md:text-[80px] italic mb-5 md:mb-10">THINK OUTSIDE THE BOX</h2>
        <p class="text-[12px] md:text-[40px] italic mb-8 md:mb-16">The Creative Journey Starts Here</p>
      </div>
      <img src=${thinkOutsideBoxImage} alt="think outside the box" class="w-full h-full" />
    </div>
  </div>
</section>
        `;
  }
}

export default new StorePreviewSectionView();
