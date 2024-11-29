
import View from '../view'
import comingSoonImage from '/src/img/comingSoonImage.png'
class StorePageView extends View{

    _generateMarkup(){
        return `<div class=" px-2 md:px-20 pt-8 md:pt-16 pb-16"	>
            <img src="${comingSoonImage}" alt="" class="w-full"/>	
        </div>`

    }

}

export default new StorePageView()