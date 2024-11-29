import articleImageOne from '/src/img/articleImageOne.png';
import articleImageTwo from '/src/img/articleImageTwo.png';
import articleImageThree from '/src/img/articleImageThree.png';
import articleImageFour from '/src/img/articleImageFour.png';

class ArticlePreviewSectionView {
  render() {
    return `
   <section class="px-2 md:px-20 py-8 section section--hidden article_section">
    <div>
        <h2 class="text-white text-2xl md:text-4xl text-center">More Articles</h2>
    </div>
    <div class="flex flex-col md:flex-row gap-4 justify-between mt-8">
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
