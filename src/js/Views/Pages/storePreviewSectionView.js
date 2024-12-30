import frame1Image from '/src/img/Frame-1.png';
import frame2Image from '/src/img/Frame-2.png';
import frame3Image from '/src/img/Frame-4.png';
import thinkOutsideBoxImage from '/src/img/ThinkOutSideBox.jpeg';

class StorePreviewSectionView {
  render() {
    return `
    <section class="grid grid-cols-2 gap-0 relative section section--hidden store_section h-[186px] md:h-auto">
        <img src=${frame1Image} alt="frame image" class="w-full h-full" />
        <div class="grid grid-cols-2 ">
            <img src=${frame2Image} alt="frame image" class="col-span-2 w-full h-full"/>
            <img src=${frame3Image} alt="frame image" class="w-full h-full" />
            <img src=${frame3Image} alt="frame image" class="w-full h-full" />
        </div>
        <div class="absolute flex flex-col  items-center top-1/2 left-1/4 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 class="text-white text-[24px] md:text-[64px] md:text-center">Find the best of picture frames, books and digital assets</h2>
            <a  href="/store" data-route="/store" class="text-nowrap button-black text-[18px] md:text-2xl  px-8 md:px-12 py-3 md:py-4 rounded-[100px]  mt-5 md:mt-12 border-white border"> <span>Visit Our Store</span><span class="text-nowrap">Visit Our Store</span></a>
        </div>
        
    </section>
    <section class="insight_section bg-black section section--hidden text-white pt-[77px] md:pt-[77px] pb-[98px]">
  <div class="mx-5 md:mx-[80px] lg:mx-[auto] md:px-10 lg:max-w-[1440px]">
    <h2 class="text-white section-heading text-center text-2xl md:text-5xl tracking-[0.8px]">Some Insights From Us</h2>
    <div class="mt-4 md:mt-[74px] grid grid-cols-2 gap-0">
      <div class="insights__text-box bg-[#383838CC] w-full p-9">
        <h2 class="text-[80px] italic mb-10">THINK OUTSIDE THE BOX</h2>
        <p class="text-[40px] italic mb-16">The Creative Journey Starts Here</p>
      </div>
      <img src=${thinkOutsideBoxImage} alt="think outside the box" class="w-full h-full" />
    </div>
  </div>
</section>
        `;
  }
}

export default new StorePreviewSectionView();
