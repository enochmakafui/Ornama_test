import frame1Image from '/src/img/Frame-1.png';
import frame2Image from '/src/img/Frame-2.png';
import frame3Image from '/src/img/Frame-4.png';
import thinkOutsideBoxImage from '/src/img/ThinkOutSideBox.jpeg';

class StorePreviewSectionView {
  render() {
    return `
    <section class="grid grid-cols-2 gap-0 relative section section--hidden store_section">
        <img src=${frame1Image} alt="frame image" class="w-full" />
        <div class="grid grid-cols-2 ">
            <img src=${frame2Image} alt="frame image" class="col-span-2 w-full h-full"/>
            <img src=${frame3Image} alt="frame image" class="w-full h-full" />
            <img src=${frame3Image} alt="frame image" class="w-full h-full" />
        </div>
        <div class="absolute flex flex-col  items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 class="text-white text-[64px] text-center">Find the best of picture frames, books and digital assets</h2>
            <a  href="/store" data-route="/store" class="inline-block text-2xl bg-white px-12 py-4 rounded-[100px] text-black mt-12 hover:bg-[#e8e8e8]"> Visit Our Store</a>
        </div>
        
    </section>
    <section class="insight_section bg-black section section--hidden text-white pt-[77px] md:pt-[210px] pb-[98px]">
  <div class="mx-5 md:mx-[80px] lg:mx-[auto] md:px-10 lg:max-w-[1440px]">
    <h2 class="text-white section-heading text-center">Some Insights From Us</h2>
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
