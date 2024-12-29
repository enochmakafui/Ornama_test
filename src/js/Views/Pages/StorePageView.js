import View from '../view';
import comingSoonImage from '/src/img/comingSoonImage.jpg';
import comingSoonImageLazy from '/src/img/comingSoonImage-Lazy.jpg';
class StorePageView extends View {
  _comingSoonImage;

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
    imgObserver.observe(this._comingSoonImage);
  }
  _generateMarkup() {
    return `
    <div class=" px-5 md:px-20 pt-8 md:pt-[100px] pb-16"	>
            <img src="${comingSoonImageLazy}" alt="" data-src="${comingSoonImage}" class="w-full lazy-img"/>	
    </div>`;
  }
  render() {
    const markup = this._generateMarkup();
    this._clear();
    this._rootElement.insertAdjacentHTML('afterbegin', markup);
    this._comingSoonImage = document.querySelector('.lazy-img');
    this._lazyLoadingHandler();
  }
}

export default new StorePageView();
