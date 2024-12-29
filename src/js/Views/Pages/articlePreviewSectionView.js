import articleImageOne from '/src/img/articleImageOne.png';
import articleImageTwo from '/src/img/articleImageTwo.png';
import articleImageThree from '/src/img/articleImageThree.png';
import articleImageFour from '/src/img/articleImageFour.png';

class ArticlePreviewSectionView {
  render() {
    return `
   <section class="mx-5 md:mx-[80px] lg:mx-[auto] pt-[64px] md:pt-[137px] pb-1 md:pb-[68px] md:px-10 section section--hidden article_section lg:max-w-[1440px]">
    <div>
        <h2 class="text-white section-heading text-center">More Articles</h2>
    </div>
    <div class="flex  flex-col md:flex-row justify-between gap-[20px] mt-[40px] md:mt-[64px]">
        <figure class="w-full md:w-auto hover:scale-105 transition-all duration-300 ease-in-out">
            <img class="w-full h-auto object-cover" src="${articleImageOne}" alt="" />
            <figcaption class="mt-[24px]">
                <p class="text-white text-[24px]">The Business of Design</p>
                <p class="text-white italic">Richmond Aryeh</small>
            </figcaption>
        </figure>
        <figure class="w-full md:w-auto hover:scale-105 transition-all duration-300 ease-in-out">
            <img class="w-full h-auto object-cover" src="${articleImageTwo}" alt="" />
            <figcaption class="mt-[24px]">
                <p class="text-white text-[24px]">Client Relationships</p>
                <p class="text-white italic">Joseph Sa-Ambo</p>
            </figcaption>
        </figure>
        <figure class="w-full md:w-auto hover:scale-105 transition-all duration-300 ease-in-out">
            <img class="w-full h-auto object-cover" src="${articleImageThree}" alt="" />
            <figcaption class="mt-[24px]">
                <p class="text-white text-[24px]">UX Research 101</p>
                <p class="text-white italic">Joseph Sa-Ambo</p>
            </figcaption>
        </figure>
        <figure class="w-full md:w-auto hover:scale-105 transition-all duration-300 ease-in-out">
            <img class="w-full h-auto object-cover" src="${articleImageFour}" alt="" />
            <figcaption class="mt-[24px]">
                <p class="text-white text-[24px]">Colours in UI Design</p>
                <p class="text-white italic">Richmond Aryeh</p>
            </figcaption>
        </figure>
    </div>
</section>
        `;
  }
}

export default new ArticlePreviewSectionView();
