import carrouselView from "./carrouselView";
import View from "../view";
import athleticManImage from "/src/img/athleticManImage.png"
import blogCardImage1 from "/src/img/blogCardImage1.png"
import blogCardImage2 from "/src/img/blogCardImage2.png"
import blogCardImage3 from "/src/img/blogCardImage3.png"
class BlogPageView extends View {

    _generateMarkup(){
        return `
        <div class=" pt-8 md:pt-16 pb-16"	>
                <div class="text-white px-2 md:px-20">
                    <h1 class="hero-heading italic mb-8"> Insights from the frontlines</h1>
                    <p>Stay up-to-date with the latest industry trends, expert advice, and captivating stories here</p>
                </div>
                <div class="px-2 md:px-20 mt-8 md:mt-16">
                    <div class="bg-white rounded-2xl flex flex-col md:flex-row justify-between gap-4 md:gap-8 px-8 py-8">
                        <div>
                            <h3 class="mb-16">Article by Richmond Aryeh | 2024 </h3>
                            <h2 class="text-2xl md:text-6xl font-semibold mb-8">The power of branding for small-scale startups</h2>
                            <p class="mb-16">Branding has become an essential part of business development and is fast becoming quite indispensable in the priority of business needs globally.</p>
                            <a href="#" data-route="/blog/1" class="text-white bg-black rounded-2xl  px-8 py-2 text-2xl">Read more</a>
                        </div>
                        <img src="${athleticManImage}" alt="athleticMan" class="order-1 md:order-2"/>
                    </div>
                </div>
                <div >
                    <ul class="flex justify-center items-center text-white mt-8 gap-4 bg-black py-4">
                        <li>
                            <a href="/blog/1" data-route="/blog/1" class="text-2xl">Top articles</a>
                        </li>
                        <li>
                            <a href="/blog/2" data-route="/blog/2" class="text-2xl">Videos</a>
                        </li>
                        
                    </ul>
                    
                    <div class="top-articles ">
                        <ul class="flex  gap-4 px-2 md:px-20 mt-8 justify-between">
                            <li class="bg-[#383838] px-5 py-4 rounded-3xl">
                                <p class="bg-[#FF7E2133] w-max text-[#FF7E21] px-2 py-1 rounded-lg mb-2">Branding </p>
                                <figure >
                                    <img src="${blogCardImage1}" />
                                    <figcaption>
                                        <h3 class="text-white text-xl mb-2">The Role of Typography in Brand Communication </h3>
                                        <p class="text-white mb-2">Typography goes beyond aesthetics, it plays a crucial role in communicating your brand’s voice. Discover how to select fonts that enhance readability and evoke emotion. </p>
                                        <a href="#" class="text-white">Read more</a>
                                    </figcaption>
                                </figure>
                            </li>
                            <li class="bg-[#383838] px-5 py-4 rounded-3xl">
                                <p class="bg-[#9747FF33] px-4 py-1 rounded-lg text-[#9747FF] w-max mb-2"> Marketing</p>
                                <figure>
                                    <img src="${blogCardImage2}" />
                                    <figcaption>
                                        <h3 class="text-white text-xl mb-2">Design for Good: How Creativity Changes the World </h3>
                                        <p class="text-white mb-2">Learn how creative agencies are using design to drive social impact, solve real-world problems, and inspire positive change in communities around the globe.</p>
                                        <a href="#" class="text-white">Read more </a>
                                    </figcaption>
                                </figure>
                            </li>
                            <li class="bg-[#383838] px-5 py-4 rounded-3xl">
                                <p class="bg-[#3dacbd6c] px-4 py-1 rounded-lg w-max mb-2 text-[#3DABBD]">UI/UX</p>
                                 <figure>
                                    <img src="${blogCardImage3}"  />
                                    <figcaption>
                                        <h3 class="text-white text-xl mb-2">Elevating UX: Designing with the User in Mind</h3>
                                        <p class="text-white mb-2">Understand the importance of user-centric design and how focusing on the user experience can lead to more intuitive, accessible, and engaging digital products. </p>
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
                    <div class="border-b border-white mx-2 md:mx-20 mt-8">
                        <h3 class="text-white mb-4 text-xl">Other stories</h3>
                    </div>
                    <div>
                        <ul class="flex  gap-4 px-2 md:px-20 mt-8 justify-between">
                        <li class="bg-[#383838] px-5 py-4 rounded-3xl">
                                <p class="bg-[#3dacbd6c] px-4 py-1 rounded-lg w-max mb-2 text-[#3DABBD]">UI/UX</p>
                                 <figure>
                                    <img src="${blogCardImage3}"  />
                                    <figcaption>
                                        <h3 class="text-white text-xl mb-2">Elevating UX: Designing with the User in Mind</h3>
                                        <p class="text-white mb-2">Understand the importance of user-centric design and how focusing on the user experience can lead to more intuitive, accessible, and engaging digital products. </p>
                                        <a href="#" class="text-white">Read more </a>
                                    </figcaption>
                                </figure>
                        </li>
                        <li class="bg-[#383838] px-5 py-4 rounded-3xl">
                                <p class="bg-[#FF7E2133] w-max text-[#FF7E21] px-2 py-1 rounded-lg mb-2">Branding </p>
                                <figure >
                                    <img src="${blogCardImage1}" />
                                    <figcaption>
                                        <h3 class="text-white text-xl mb-2">The Role of Typography in Brand Communication </h3>
                                        <p class="text-white mb-2">Typography goes beyond aesthetics, it plays a crucial role in communicating your brand’s voice. Discover how to select fonts that enhance readability and evoke emotion. </p>
                                        <a href="#" class="text-white">Read more</a>
                                    </figcaption>
                                </figure>
                        </li>
                        <li class="bg-[#383838] px-5 py-4 rounded-3xl">
                                <p class="bg-[#9747FF33] px-4 py-1 rounded-lg text-[#9747FF] w-max mb-2"> Marketing</p>
                                <figure>
                                    <img src="${blogCardImage2}" />
                                    <figcaption>
                                        <h3 class="text-white text-xl mb-2">Design for Good: How Creativity Changes the World </h3>
                                        <p class="text-white mb-2">Learn how creative agencies are using design to drive social impact, solve real-world problems, and inspire positive change in communities around the globe.</p>
                                        <a href="#" class="text-white">Read more </a>
                                    </figcaption>
                                </figure>
                        </li>
                        
                        
                        </ul>
                    </div>
                </div>
                ${carrouselView.render()}
         </div>`
    }

    render(){
        const markup = this._generateMarkup();
        this._clear();
        this._rootElement.insertAdjacentHTML('afterbegin', markup);
        carrouselView.initSwiper();

    }
}

export default new BlogPageView();