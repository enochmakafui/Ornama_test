import carrouselView from './carrouselView';
import View from '../view';
import athleticManImage from '/src/img/athleticManImage.png';
import blogCardImage1 from '/src/img/blogCardImage1.png';
import blogCardImage2 from '/src/img/blogCardImage2.png';
import blogCardImage3 from '/src/img/blogCardImage3.png';
class BlogPageView extends View {
  _generateMarkup() {
    return `
        <div class="pt-8 md:pt-[56px] "	>
                <div class="text-white px-5 md:px-20 lg:px-[auto]">
                    <h1 class="hero-heading italic mb-8"> Insights from the frontlines</h1>
                    <p>Stay up-to-date with the latest industry trends, expert advice, and captivating stories here</p>
                </div>
                <div class="px-5 md:px-20 lg:px-[auto] mt-8 md:mt-[96px]">
                    <div class="bg-white text-[color:#343a40] rounded-2xl flex flex-col md:flex-row justify-between gap-4 md:gap-[75px] px-[16px] md:px-[40px] py-[20px] md:py-[78px]">
                        <div class="hidden md:block"> 
                            <h3 class="mb-[48px]">Article by Richmond Aryeh | 2024 </h3>
                            <h2 class="text-2xl md:text-6xl font-semibold mb-[16px]">The power of <br/> branding for small-scale startups</h2>
                            <p class="mb-[48px]">Branding has become an essential part of business development and is fast becoming quite indispensable in the priority of business needs globally.</p>
                            <a href="#" data-route="/blog/1" class="text-white bg-black rounded-2xl  px-8 py-2 text-2xl">Read more</a>
                        </div>
                        <img src="${athleticManImage}" alt="athleticMan" class=""/>
                        <div class="block md:hidden">
                            <h2 class="text-2xl md:text-6xl font-bold mb-[16px]">The power of branding for small-scale startups</h2>
                            <h3 class="mb-[48px]">Article by Richmond Aryeh | 2024 </h3>
                            <a href="#" data-route="/blog/1" class="text-white bg-black rounded-[64px]  px-[110px] md:px-8 py-[12px] md:py-2 text-base md:text-2xl text-nowrap">Read more</a>
                        

                        </div>
                    </div>
                </div>
                <div >
                    <ul class="flex justify-center items-center text-white mt-[40px] gap-[96px] bg-black py-4">
                        <li>
                            <a href="/blog/1" data-route="/blog/1" class="text-2xl">Top articles</a>
                        </li>
                        <li>
                            <a href="/blog/2" data-route="/blog/2" class="text-2xl">Videos</a>
                        </li>
                        
                    </ul>
                    
                    <div class="top-articles ">
                        <ul class="flex flex-col md:flex-row gap-[20px] px-5 md:px-20 mt-[58px] justify-between">
                            <li class="bg-[#383838] px-[28px] py-[12px] rounded-[30px]">
                                <p class="bg-[#FF7E2133] w-max text-[#FF7E21] px-2 py-1 rounded-lg mb-[13px]">Branding </p>
                                <figure >
                                    <img src="${blogCardImage1}" />
                                    <figcaption class="mt-[20px]">
                                        <h3 class="text-white text-xl mb-[20px]">The Role of Typography in Brand Communication </h3>
                                        <p class="text-white mb-[25px]">Typography goes beyond aesthetics, it plays a crucial role in communicating your brand’s voice. Discover how to select fonts that enhance readability and evoke emotion. </p>
                                        <a href="#" class="text-white">Read more</a>
                                    </figcaption>
                                </figure>
                            </li>
                            <li class="bg-[#383838] px-[28px] py-[12px] rounded-[30px]">
                                <p class="bg-[#9747FF33] px-4 py-1 rounded-lg text-[#9747FF] w-max mb-[13px]"> Marketing</p>
                                <figure>
                                    <img src="${blogCardImage2}" />
                                    <figcaption class="mt-[20px]">
                                        <h3 class="text-white text-xl mb-[20px]">Design for Good: How Creativity Changes the World </h3>
                                        <p class="text-white mb-[25px]">Learn how creative agencies are using design to drive social impact, solve real-world problems, and inspire positive change in communities around the globe.</p>
                                        <a href="#" class="text-white">Read more </a>
                                    </figcaption>
                                </figure>
                            </li>
                            <li class="bg-[#383838] px-[28px] py-[12px] rounded-[30px]">
                                <p class="bg-[#3dacbd6c] px-4 py-1 rounded-lg w-max mb-[13px] text-[#3DABBD]">UI/UX</p>
                                 <figure>
                                    <img src="${blogCardImage3}"  />
                                    <figcaption class="mt-[20px]">
                                        <h3 class="text-white text-xl mb-[20px]">Elevating UX: Designing with the User in Mind</h3>
                                        <p class="text-white mb-[25px]">Understand the importance of user-centric design and how focusing on the user experience can lead to more intuitive, accessible, and engaging digital products. </p>
                                        <a href="#" class="text-white">Read more </a>
                                    </figcaption>
                                </figure>
                            </li>
                        </ul>
                    </div>
                    <div class="videos hidden">
                        <ul class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <li>
                            </li>
                            <li>
                            </li>
                            <li>
                            </li>
                        </ul>
                    </div> 
                    <div class="border-b border-white mx-2 md:mx-20 mt-[82px]">
                        <h3 class="text-white mb-4 text-xl pl-5">Other stories</h3>
                    </div>
                    <div>
                        <ul class="flex flex-col md:flex-row gap-[20px] px-5 md:px-20 mt-[40px] justify-between">
                        <li class="bg-[#383838] px-[28px] py-[12px] rounded-[30px]">
                                <p class="bg-[#3dacbd6c] px-4 py-1 rounded-lg w-max mb-[13px] text-[#3DABBD]">UI/UX</p>
                                 <figure>
                                    <img src="${blogCardImage3}"  />
                                    <figcaption class="mt-[20px]">
                                        <h3 class="text-white text-xl mb-[20px]">Elevating UX: Designing with the User in Mind</h3>
                                        <p class="text-white mb-[25px]">Understand the importance of user-centric design and how focusing on the user experience can lead to more intuitive, accessible, and engaging digital products. </p>
                                        <a href="#" class="text-white">Read more </a>
                                    </figcaption>
                                </figure>
                        </li>
                        <li class="bg-[#383838] px-[28px] py-[12px] rounded-[30px]">
                                <p class="bg-[#FF7E2133] w-max text-[#FF7E21] px-2 py-1 rounded-lg mb-[13px]">Branding </p>
                                <figure >
                                    <img src="${blogCardImage1}" />
                                    <figcaption class="mt-[20px]">
                                        <h3 class="text-white text-xl mb-[20px]">The Role of Typography in Brand Communication </h3>
                                        <p class="text-white mb-[25px]">Typography goes beyond aesthetics, it plays a crucial role in communicating your brand’s voice. Discover how to select fonts that enhance readability and evoke emotion. </p>
                                        <a href="#" class="text-white">Read more</a>
                                    </figcaption>
                                </figure>
                        </li>
                        <li class="bg-[#383838] px-[28px] py-[12px] rounded-[30px]">
                                <p class="bg-[#9747FF33] px-4 py-1 rounded-lg text-[#9747FF] w-max mb-[13px]"> Marketing</p>
                                <figure>
                                    <img src="${blogCardImage2}" />
                                    <figcaption class="mt-[20px]">
                                        <h3 class="text-white text-xl mb-[20px]">Design for Good: How Creativity Changes the World </h3>
                                        <p class="text-white mb-[25px]">Learn how creative agencies are using design to drive social impact, solve real-world problems, and inspire positive change in communities around the globe.</p>
                                        <a href="#" class="text-white">Read more </a>
                                    </figcaption>
                                </figure>
                        </li>
                        
                        
                        </ul>
                    </div>
                </div>
                ${carrouselView.render()}
                <div class="bg-[#E7E9ED] px-5 md:px-20 pb-[42px] flex flex-col md:flex-row items-center gap-[20px] md:gap-[80px] mt-[64px] mb-[64px] md:mb-0 md:mt-[16px]">
                    <div class="pt-[40px] md:pb-[44px]">
                        <h3 class="mb-[8px] text-[24px] md:text-[36px] font-bold">Subscribe for New Updates </h3>
                        <p class="text-base text-[20px]">Have access to our Content, by becoming a Member of our Blog</p>
                    </div>
                    <form class="flex items-end gap-3 md:gap-[80px] ">
                        <div class="flex flex-col gap-[4px]">
                            <label class="text-[14px] md:text-[20px]">Email</label>
                            <input type="email" placeholder="johndoe@gmail.com" class="bg-[#585858] text-white py-[16px] pl-[18px] pr-[23px] md:pr-[78px]"/>
                        </div>
                        <button class="bg-[#FF7E21] py-[12px] md:py-[16px] px-[24px] md:px-[48px] rounded-[64px] text-base md:text-[24px] font-medium" >Subscribe</button>
                    </form>
                </div>
         </div>`;
  }

  render() {
    const markup = this._generateMarkup();
    this._clear();
    this._rootElement.insertAdjacentHTML('afterbegin', markup);
    carrouselView.initSwiper();
  }
}

export default new BlogPageView();
