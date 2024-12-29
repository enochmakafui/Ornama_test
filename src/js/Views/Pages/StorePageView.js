import View from '../view';
import comingSoonImage from '/src/img/comingSoonImage.jpg';
class StorePageView extends View {
  _generateMarkup() {
    return `
    <div class=" px-5 md:px-20 pt-8 md:pt-[100px] pb-16"	>
            <img src="${comingSoonImage}" alt="" class="w-full"/>	
    </div>`;
  }
}

export default new StorePageView();
