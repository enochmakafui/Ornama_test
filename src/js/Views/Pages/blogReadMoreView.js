import View from '../view';
import carrouselView from './carrouselView';

class BlogReadMoreView extends View {
  _generateMarkup() {
    return `
            <div class="pt-8 md:pt-[211px] bg-[#F9F9F9]  px-5 md:px-[100px]">
            <div class="  lg:max-w-[1440px] lg:mx-[auto]">
                <div class="read-more-preview">
                    <h2 class="text-white">The power of branding for small-scale startups</h2>
                </div>
                <div class="read-more-content mt-[59px] md:px-[100px]">
                <p>
                Branding has become an essential part of business development and is fast becoming quite indispensable in the priority of business needs globally.
                </p>
                <p>

                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                </p>
                <p>
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
                <p>

                Branding has become an essential part of business development and is fast becoming quite indispensable in the priority of business needs globally.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                Why do we use it?
                It is a long established fact that a reader will be distracted by the and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
                <p>
                Branding has become an essential part of business development and is fast becoming quite indispensable in the priority of business needs globally.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p>
                Branding has become an essential part of business development and is fast becoming quite indispensable in the priority of business needs globally.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p>
                It is a long established fact that a reader will be distracted by the and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
                <div class="read-more-author ">
                <p>
                Article by Richmond Aryeh | 2024
                </p>
                <p class="rate-article">
                Rate Article
                </p>
                </div>

                </div>
               
            </div>
             ${carrouselView.render()}
                                <div class="bg-[#E7E9ED] px-5 md:px-20 pb-[42px] flex flex-col md:flex-row items-center gap-[20px] md:gap-[80px] mt-[64px] mb-[64px] md:mb-0 md:mt-[16px]">
                                    <div class="pt-[40px] md:pb-[44px]">
                                        <h3 class="mb-[8px] text-[24px] md:text-[36px] font-bold blog-form">Subscribe for New Updates </h3>
                                        <p class="text-base md:text-[20px] blog-form">Have access to our Content, by becoming a Member of our Blog</p>
                                    </div>
                                    <form class="flex items-end gap-3 md:gap-[80px] ">
                                        <div class="flex flex-col gap-[4px]">
                                            <label class="text-[14px] md:text-[20px] blog-form">Email</label>
                                            <input type="email" placeholder="johndoe@gmail.com" class="bg-[#585858] text-white py-[16px] pl-[18px] pr-[23px] md:pr-[78px]"/>
                                        </div>
                                        <button class="bg-[#FF7E21] py-[12px] md:py-[16px] px-[24px] md:px-[48px] rounded-[64px] text-base md:text-[24px] font-medium blog-form" >Subscribe</button>
                                    </form>
                                </div>
            </div>
        `;
  }
  render() {
    const markup = this._generateMarkup();
    this._clear();
    this._rootElement.insertAdjacentHTML('afterbegin', markup);
    carrouselView.initSwiper();
  }
}

export default new BlogReadMoreView();
