import carrouselView from './carrouselView';
import View from '../view';
import athleticManImage from '/src/img/athleticManImage.png';
import blogCardImage1 from '/src/img/blogCardImage1.png';
import blogCardImage2 from '/src/img/blogCardImage2.png';
import blogCardImage3 from '/src/img/blogCardImage3.png';

class BlogPageView extends View {
  _generateMarkup() {
    return `
        <div class="pt-8 md:pt-[110px] lg:max-w-[1440px] lg:mx-[auto]">
                <div class="text-white px-5 md:px-20 lg:px-[auto]">
                    <h1 class="hero-heading italic mb-4 blog-page-head text-[40px] md:text-[96px]"> Insights from the frontlines</h1>
                    <p class="text-[32px] blog-page-text">Stay up-to-date with the latest industry trends, expert advice, and captivating stories here</p>
                </div>
                <div class="px-5 md:px-20 lg:px-[auto] mt-8 md:mt-[96px]">
                    <div class="bg-white text-[color:#343a40] rounded-2xl flex flex-col md:flex-row justify-between gap-4 md:gap-[75px] px-[16px] md:px-[40px] py-[20px] md:py-[78px]">
                        <div class="hidden md:block"> 
                            <h3 class="mb-[48px] text-[20px]">Article by Richmond Aryeh | 2024 </h3>
                            <h2 class="text-2xl md:text-6xl font-semibold mb-[16px]">The power of <br/> branding for small-scale startups</h2>
                            <p class="mb-[48px] text-[20px]">Branding has become an essential part of business development and is fast becoming quite indispensable in the priority of business needs globally.</p>
                            <a href="/blog/1" data-route="/blog/1" class="text-white bg-black rounded-[100px] px-12 py-4 text-2xl blog-page-read-more">Read more</a>
                        </div>
                        <img src="${athleticManImage}" alt="athleticMan" class=""/>
                        <div class="block md:hidden">
                            <h2 class="text-2xl md:text-6xl font-bold mb-[16px]">The power of branding for small-scale startups</h2>
                            <h3 class="mb-[48px]">Article by Richmond Aryeh | 2024 </h3>
                            <a href="#" data-route="/blog/1" class="button-white bg-black rounded-[64px]  px-[110px] md:px-8 py-[12px] md:py-2 text-base md:text-2xl text-nowrap"><span>Read more</span><span>Read more</span></a>
                        </div>
                    </div>
                </div>
                <div >
                    <ul class="flex justify-center items-center text-white mt-[40px] gap-[96px] bg-black py-4">
                        <li class="border-b-4 border-[#FF7E21] pb-4">
                            <a href="/blog/1" data-route="/blog/1" class="text-[32px] flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <g clip-path="url(#clip0_4372_1485)">
                                    <path d="M38 6H10C7.8 6 6 7.8 6 10V38C6 40.2 7.8 42 10 42H38C40.2 42 42 40.2 42 38V10C42 7.8 40.2 6 38 6ZM28 34H14V30H28V34ZM34 26H14V22H34V26ZM34 18H14V14H34V18Z" fill="#D9D9D9"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_4372_1485">
                                    <rect width="48" height="48" fill="white"/>
                                    </clipPath>
                                </defs>
                                </svg>
                            
                            Top articles</a>
                        </li>
                        <li>
                            <a href="/blog/2" data-route="/blog/2" class="text-[32px] flex items-center gap-2">
                            
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                    <g clip-path="url(#clip0_4372_1491)">
                                        <path d="M42 6H6C3.78 6 2 7.78 2 10V34C2 36.2 3.78 38 6 38H16V42H32V38H42C44.2 38 45.98 36.2 45.98 34L46 10C46 7.78 44.2 6 42 6ZM42 34H6V10H42V34ZM32 22L18 30V14L32 22Z" fill="#D9D9D9"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4372_1491">
                                        <rect width="48" height="48" fill="white"/>
                                        </clipPath>
                                    </defs>
                                    </svg>
                            Videos</a>
                        </li>
                        
                    </ul>
                    
                    <div class="top-articles ">
                        <ul class="flex flex-col md:flex-row gap-[20px] px-5 md:px-20 mt-[58px] justify-between">
                            <li class="bg-[#383838] px-[28px] py-[12px] rounded-[30px]">
                                <p class="bg-[#FF7E2133] w-max text-[#FF7E21] px-2 py-1 rounded-lg mb-[13px]">Branding </p>
                                <figure >
                                    <img src="${blogCardImage1}" class='w-full'/>
                                    <figcaption class="mt-[20px]">
                                        <h3 class="text-white text-[24px] font-bold mb-[20px] blog-card-head">The Role of Typography in Brand Communication </h3>
                                        <p class="text-white mb-[25px] text-[20px] blog-card-text ">Typography goes beyond aesthetics, it plays a crucial role in communicating your brand’s...</p>
                                        <a href="#" class="text-white text-[24px] flex items-center gap-1">Read more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</a>
                                    </figcaption>
                                </figure>
                            </li>
                            <li class="bg-[#383838] px-[28px] py-[12px] rounded-[30px]">
                                <p class="bg-[#9747FF33] px-4 py-1 rounded-lg text-[#9747FF] w-max mb-[13px]"> Marketing</p>
                                <figure>
                                    <img src="${blogCardImage2}" class='w-full'/>
                                    <figcaption class="mt-[20px]">
                                        <h3 class="text-white text-[24px] font-bold mb-[20px] blog-card-head">Design for Good: How Creativity Changes the World </h3>
                                        <p class="text-white mb-[25px] text-[20px] blog-card-text">Learn how creative agencies are using design to drive social impact, solve real-wor...</p>
                                        <a href="#" class="text-white text-[24px] flex items-center gap-1">Read more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</a>
                                    </figcaption>
                                </figure>
                            </li>
                            <li class="bg-[#383838] px-[28px] py-[12px] rounded-[30px]">
                                <p class="bg-[#3dacbd6c] px-4 py-1 rounded-lg w-max mb-[13px] text-[#3DABBD]">UI/UX</p>
                                 <figure>
                                    <img src="${blogCardImage3}"  class='w-full'/>
                                    <figcaption class="mt-[20px]">
                                        <h3 class="text-white text-[24px] font-bold mb-[20px] blog-card-head">Elevating UX: Designing with the User in Mind</h3>
                                        <p class="text-white mb-[25px] text-[20px] blog-card-text">Understand the importance of user-centric design and how focusing on the user experience...</p>
                                        <a href="#" class="text-white text-[24px] flex items-center gap-1">Read more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</a>
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
                        <h3 class="text-white mb-4 text-[24px] pl-5 blog-card-head">Other stories</h3>
                    </div>
                    <div>
                        <ul class="flex flex-col md:flex-row gap-[20px] px-5 md:px-20 mt-[40px] justify-between">
                        <li class="bg-[#383838] px-[28px] py-[12px] rounded-[30px]">
                                <p class="bg-[#3dacbd6c] px-4 py-1 rounded-lg w-max mb-[13px] text-[#3DABBD]">UI/UX</p>
                                 <figure>
                                    <img src="${blogCardImage3}"  class='w-full'/>
                                    <figcaption class="mt-[20px]">
                                        <h3 class="text-white text-[24px] font-bold mb-[20px] blog-card-head">Elevating UX: Designing with the User in Mind</h3>
                                        <p class="text-white mb-[25px] text-[20px] blog-card-text">Understand the importance of user-centric design and how focusing on the user experience... </p>
                                        <a href="#" class="text-white text-[24px] flex items-center gap-1">Read more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</a>
                                    </figcaption>
                                </figure>
                        </li>
                        <li class="bg-[#383838] px-[28px] py-[12px] rounded-[30px]">
                                <p class="bg-[#FF7E2133] w-max text-[#FF7E21] px-2 py-1 rounded-lg mb-[13px]">Branding </p>
                                <figure >
                                    <img src="${blogCardImage1}" class='w-full'/>
                                    <figcaption class="mt-[20px]">
                                        <h3 class="text-white text-[24px] font-bold mb-[20px] blog-card-head">The Role of Typography in Brand Communication </h3>
                                        <p class="text-white mb-[25px] text-[20px] blog-card-text">Typography goes beyond aesthetics, it plays a crucial role in communicating your brand’s...</p>
                                        <a href="#" class="text-white text-[24px] flex items-center gap-1">Read more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</a>
                                    </figcaption>
                                </figure>
                        </li>
                        <li class="bg-[#383838] px-[28px] py-[12px] rounded-[30px]">
                                <p class="bg-[#9747FF33] px-4 py-1 rounded-lg text-[#9747FF] w-max mb-[13px]"> Marketing</p>
                                <figure>
                                    <img src="${blogCardImage2}" class="w-full" />
                                    <figcaption class="mt-[20px]">
                                        <h3 class="text-white text-[24px] font-bold mb-[20px] blog-card-head">Design for Good: How Creativity Changes the World </h3>
                                        <p class="text-white mb-[25px] text-[20px] blog-card-text">Learn how creative agencies are using design to drive social impact, solve real-wor...</p>
                                        <a href="#" class="text-white text-[24px] flex items-center gap-1">Read more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</a>
                                    </figcaption>
                                </figure>
                        </li>
                        </ul>
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
