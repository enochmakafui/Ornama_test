import View from '../view';
import heroSectionView from './heroSectionView';
import marqueeView from './marqueeView';
import workScopeSectionView from './workScopeSectionView';
import clientSectionView from './clientSectionView';
import testimonialView from './testimonialView';
import articlePreviewSectionView from './articlePreviewSectionView';
import storePreviewSectionView from './storePreviewSectionView';
import newsLetterSubscribeView from './newsLetterSubscribeView';
import carrouselView from './carrouselView';

class HomePageView extends View {
  // selecting sections to observe ...
  _heroSection;
  _serviceSection;
  _clientSection;
  _articleSection;
  _insightSection;
  _storeSection;

  // selecting images to lazy load ...
  _ImagesToLazyLoad;

  // observing all sections rendered ...
  _lazyLoadingHandler() {
    const imgObserver = new IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        entry.target.src = entry.target.dataset.src;
        entry.target.addEventListener('load', () => {
          entry.target.classList.remove('lazy-img');
        });
        observer.unobserve(entry.target);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );
    this._ImagesToLazyLoad.forEach(img => imgObserver.observe(img));
  }
  addHandlerSectionsObserver() {
    const sectionsToObserve = [
      this._heroSection,
      this._serviceSection,
      this._clientSection,
      this._articleSection,
      this._insightSection,
      this._storeSection,
    ];
    sectionsToObserve.forEach(function (section) {
      const sectionObserver = new IntersectionObserver(
        function (entries, observer) {
          const [entry] = entries;
          if (!entry.isIntersecting) return;
          entry.target.classList.remove('section--hidden');
          observer.unobserve(entry.target);
        },
        {
          root: null,
          threshold: 0,
        }
      );
      sectionObserver.observe(section);
    });
  }

  // generating homepage markup ...

  _generateMarkup() {
    return `
    <div class="bg-[#121212]">
      <div class="hero-bg  pb-[95px] ">
        ${heroSectionView.render()}
        ${marqueeView.render()}  
      </div>
      ${carrouselView.render()}
      ${workScopeSectionView.render()}
      ${clientSectionView.render()}
      ${testimonialView.render()}
      ${storePreviewSectionView.render()}
      ${articlePreviewSectionView.render()}
      ${newsLetterSubscribeView.render()}
    </div>

        `;
  }

  // overriding the view render function for homepage

  render() {
    const markup = this._generateMarkup();
    this._clear();
    this._rootElement.insertAdjacentHTML('afterbegin', markup);
    carrouselView.initSwiper();
    testimonialView.initSwiper();
    this._heroSection = document.querySelector('.hero');
    this._serviceSection = document.querySelector('.service');
    this._clientSection = document.querySelector('.client_section');
    this._articleSection = document.querySelector('.article_section');
    this._insightSection = document.querySelector('.insight_section');
    this._storeSection = document.querySelector('.store_section');
    this._ImagesToLazyLoad = document.querySelectorAll('.lazy-img');
    this._lazyLoadingHandler();
  }
}

export default new HomePageView();
