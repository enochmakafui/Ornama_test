import articleImageOne from '/src/img/articleImageOne.png';
import articleImageTwo from '/src/img/articleImageTwo.png';
import articleImageThree from '/src/img/articleImageThree.png';
import articleImageFour from '/src/img/articleImageFour.png';

class ArticlePreviewSectionView {
  render() {
    return `
   <section class="mx-5 md:mx-auto py-8 md:px-10 section section--hidden article_section lg:max-w-[1440px]">
    <div>
        <h2 class="text-white section-heading text-center">More Articles</h2>
    </div>
    <div class="flex  flex-col md:flex-row justify-between gap-4 mt-8">
        <figure class="w-full md:w-auto">
            <img class="w-full h-auto object-cover" src="${articleImageOne}" alt="" />
            <figcaption class="mt-4">
                <p class="text-white">The Business of Design</p>
                <small class="text-white">Richmond Aryeh</small>
            </figcaption>
        </figure>
        <figure class="w-full md:w-auto">
            <img class="w-full h-auto object-cover" src="${articleImageTwo}" alt="" />
            <figcaption class="mt-4">
                <p class="text-white">Client Relationships</p>
                <small class="text-white">Joseph Sa-Ambo</small>
            </figcaption>
        </figure>
        <figure class="w-full md:w-auto">
            <img class="w-full h-auto object-cover" src="${articleImageThree}" alt="" />
            <figcaption class="mt-4">
                <p class="text-white">UX Research 101</p>
                <small class="text-white">Joseph Sa-Ambo</small>
            </figcaption>
        </figure>
        <figure class="w-full md:w-auto">
            <img class="w-full h-auto object-cover" src="${articleImageFour}" alt="" />
            <figcaption class="mt-4">
                <p class="text-white">Colours in UI Design</p>
                <small class="text-white">Richmond Aryeh</small>
            </figcaption>
        </figure>
    </div>
</section>
        `;
  }
}

export default new ArticlePreviewSectionView();
