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
  // using getters to get sections after they have been rendered ...

  get _heroSection() {
    return document.querySelector('.hero');
  }

  get _serviceSection() {
    return document.querySelector('.service');
  }

  get _clientSection() {
    return document.querySelector('.client_section');
  }
  get _articleSection() {
    return document.querySelector('.article_section');
  }

  get _insightSection() {
    return document.querySelector('.insight_section');
  }

  get _storeSection() {
    return document.querySelector('.store_section');
  }

  // observing all sections rendered ...

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
      <div class="hero-bg">
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
  }
}

export default new HomePageView();
