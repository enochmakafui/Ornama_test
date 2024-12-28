import View from '../view';
import headlineOverlayImage from '/src/img/headlineOverlay.png';
import rehomeMediaImage from '/src/img/RehomeSocial.png';
import recruitSocialImage from '/src/img/RecruitSocial.png';
import freshBaySocialImage from '/src/img/FreshBaySocial.png';
import interiorSocialImage from '/src/img/InteriorSocial.png';

class SocialMediaReelsPage extends View {
  _generateMarkup() {
    return `
                <div class="pt-8 md:pt-[211px]  social-media lg:max-w-[1440px] lg:mx-[auto]">
                    <div class="px-5 md:px-[100px]">
                        <img src=${headlineOverlayImage} alt="headline overlay" class="w-full" />
                    </div>
                    <div class="px-5 md:px-[100px] flex justify-center mt-[80px] mb-[60px] gap-[40px]">
                    <a href="#" class="bg-[#585858] text-white p-5 rounded-[36px] flex items-center gap-2 text-[20px]">
                    <span class="social-media-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg >
                        <g id="tv-smart">
                        <path id="Vector" d="M14 3H10C6.22876 3 4.34315 3 3.17157 4.17157C2 5.34315 2 7.22876 2 11C2 14.7712 2 16.6569 3.17157 17.8284C4.34315 19 6.22876 19 10 19H14C17.7712 19 19.6569 19 20.8284 17.8284C22 16.6569 22 14.7712 22 11C22 7.22876 22 5.34315 20.8284 4.17157C19.6569 3 17.7712 3 14 3Z" stroke="#FF7E21" stroke-width="1.5" stroke-linecap="round"/>
                        <path id="Vector_2" d="M16.9 15.5C16.9 14.6163 17.6163 13.9 18.5 13.9M13.7 15.5C13.7 12.849 15.849 10.7 18.5 10.7M10.5 15.5C10.5 11.0817 14.0817 7.5 18.5 7.5" stroke="#FF7E21" stroke-width="1.5" stroke-linecap="round"/>
                        <path id="Vector_3" d="M18 19L19 21" stroke="#FF7E21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="Vector_4" d="M6 19L5 21" stroke="#FF7E21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        </svg>
                        </span>
                        media marketing</a>
                    <a href="#" class="bg-[#585858] text-white p-5 rounded-[36px] flex items-center gap-2 text-[20px]" >
                        <span class="social-media-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg >
                        <g id="advertisiment">
                        <path id="Vector" d="M5.50586 16.9916L8.03146 10.0288C8.49073 9.06222 9.19305 8.26286 9.99777 10.18C10.7406 11.9497 11.8489 15.1903 12.5031 16.9954M6.65339 14.002H11.3215" stroke="#FF7E21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="Vector_2" d="M3.46447 5.31802C2 6.63604 2 8.75736 2 13C2 17.2426 2 19.364 3.46447 20.682C4.92893 22 7.28596 22 12 22C16.714 22 19.0711 22 20.5355 20.682C22 19.364 22 17.2426 22 13C22 8.75736 22 6.63604 20.5355 5.31802C19.0711 4 16.714 4 12 4C7.28596 4 4.92893 4 3.46447 5.31802Z" stroke="#FF7E21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="Vector_3" d="M18.4843 9.98682V12.9815M18.4843 12.9815V16.9252M18.4843 12.9815H16.466C16.2263 12.9815 15.9885 13.0261 15.7645 13.113C14.0707 13.7702 14.0707 16.2124 15.7645 16.8696C15.9885 16.9565 16.2263 17.0011 16.466 17.0011H18.4843" stroke="#FF7E21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        </svg>
                        </span>

                    Ads</a>
                    <a href="#" class="bg-[#585858] text-white p-5 rounded-[36px] flex items-center gap-2 text-[20px]">
                        <span class="social-media-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg class="social-media-icon">
                        <g id="store-01">
                        <path id="Vector" d="M2.9668 10.4961V15.4979C2.9668 18.3273 2.9668 19.742 3.84548 20.621C4.72416 21.5001 6.13837 21.5001 8.9668 21.5001H14.9668C17.7952 21.5001 19.2094 21.5001 20.0881 20.621C20.9668 19.742 20.9668 18.3273 20.9668 15.4979V10.4961" stroke="#FF7E21" stroke-width="1.5" stroke-linecap="round"/>
                        <path id="Vector_2" d="M14.9668 16.9932C14.2827 17.6004 13.1936 17.9932 11.9668 17.9932C10.74 17.9932 9.65089 17.6004 8.9668 16.9932" stroke="#FF7E21" stroke-width="1.5" stroke-linecap="round"/>
                        <path id="Vector_3" d="M10.1038 8.41848C9.82182 9.43688 8.79628 11.1936 6.84777 11.4482C5.12733 11.673 3.82246 10.922 3.48916 10.608C3.12168 10.3534 2.28416 9.53872 2.07906 9.02952C1.87395 8.52032 2.11324 7.41706 2.28416 6.96726L2.96743 4.98888C3.13423 4.49196 3.5247 3.31666 3.92501 2.91913C4.32533 2.5216 5.13581 2.5043 5.4694 2.5043H12.4749C14.2781 2.52978 18.2209 2.48822 19.0003 2.50431C19.7797 2.52039 20.2481 3.17373 20.3848 3.45379C21.5477 6.27061 22 7.88382 22 8.57124C21.8482 9.30456 21.22 10.6873 19.0003 11.2955C16.6933 11.9275 15.3854 10.6981 14.9751 10.2261M9.15522 10.2261C9.47997 10.625 10.4987 11.4279 11.9754 11.4482C13.4522 11.4686 14.7273 10.4383 15.1802 9.92062C15.3084 9.76786 15.5853 9.31467 15.8725 8.41848" stroke="#FF7E21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        </svg>
                        </span>
                        Shopify</a>
                </div>
    
                    <div class="border-b border-[#868e96] border-t">
                        <div class="flex justify-center gap-[60px] items-center ">
                            <a href="/social-media-post" data-route="/social-media-post" class="text-white pt-5 text-[20px]  flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_4372_1543)">
                                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM14 17H7V15H14V17ZM17 13H7V11H17V13ZM17 9H7V7H17V9Z" fill="#D9D9D9"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_4372_1543">
                                    <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                                </svg>
                            Post</a>
                            <a href="#" class="text-white pt-4 text-[20px] border-t-4 border-[#FF7E21] flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_4372_1548)">
                                <path d="M21 3H3C1.89 3 1 3.89 1 5V17C1 18.1 1.89 19 3 19H8V21H16V19H21C22.1 19 22.99 18.1 22.99 17L23 5C23 3.89 22.1 3 21 3ZM21 17H3V5H21V17ZM16 11L9 15V7L16 11Z" fill="#D9D9D9"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_4372_1548">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                            </svg>
                            Reels</a>
                        </div>
                        <div class="px-5 md:px-[100px]">
                        <p class="text-[28px] text-white mt-[80px]">We Drove awareness and sign-ups targeting professionals.</p>
                        <div class="flex items-center gap-4 pb-5  mt-[51px]">
                            <figure>
                                <img src=${rehomeMediaImage} alt="rehome media" class="w-full mb-10" />
                                <figcaption class="text-white text-[28px] text-center">Rehome Africa</figcaption>
                            </figure>
                            
                            <figure>
                                <img src=${recruitSocialImage} alt="recruit social" class="w-full mb-10" />
                                <figcaption class="text-white text-[28px] text-center">Personnel Practice Ltd</figcaption>
                            </figure>
                            <figure>
                                <img src=${freshBaySocialImage} alt="fresh bay social" class="w-full mb-10" />
                                <figcaption class="text-white text-[28px] text-center">Fresh Bay Social</figcaption>
                            </figure>
                        </div>
                    </div>
                    </div>
    
    
                    <div class=" border-b border-[#868e96]">
                        <div class="px-5 md:px-[100px]">
                        <p class="text-[28px] text-white mt-[40px]">Boosted social media engagement which increase memberships by running a 30-day challenge campaign.</p>
    
                            <div class="flex items-center gap-4 pb-5  mt-[51px] px-5">
                                <figure>
                                    <img src=${freshBaySocialImage} alt="fresh bay social" class="w-full mb-10" />
                                    <figcaption class="text-white text-[28px] text-center">Fresh Bay Social</figcaption>
                                </figure>
                                <figure>
                                    <img src=${recruitSocialImage} alt="recruit social" class="w-full mb-10 " />
                                    <figcaption class="text-white text-[28px] text-center">Personnel Practice Ltd</figcaption>
                                </figure>
                                <figure>
                                    <img src=${rehomeMediaImage} alt="rehome media" class="w-full mb-10" />
                                    <figcaption class="text-white text-[28px] text-center">Rehome Africa</figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
    
                    <div class="">
                        <div class="px-5 md:px-[100px]">
                        <p class="text-[28px] text-white mt-[40px]">Redesign and optimize the Shopify store to improve user experience, increase mobile purchases, and reduce cart abandonment.</p>
    
                            <div class="flex items-center gap-4 pb-5   mt-[51px] px-5" >
                                <figure>
                                    <img src=${recruitSocialImage} alt="recruit social" class="w-full mb-10" />
                                    <figcaption class="text-white text-[28px] text-center">Personnel Practice Ltd</figcaption>
                                </figure>
                                <figure>
                                    <img src=${rehomeMediaImage} alt="rehome media" class="w-full mb-10" />
                                    <figcaption class="text-white text-[28px] text-center">Rehome Africa</figcaption>
                                </figure>
                                <figure>
                                    <img src=${freshBaySocialImage} alt="fresh bay social" class="w-full mb-10" />
                                    <figcaption class="text-white text-[28px] text-center">Fresh Bay Social</figcaption>
                                </figure>
    
                            
                            </div>
                        </div>
                    </div>
                    <div class="post-media-stat flex justify-center  md:px-[100px] py-24">
                        <ul class="flex items-center gap-[180px]">
                            <li class="flex flex-col items-center">
                            <span>
                            <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="add-team">
                            <path id="Vector" d="M24.5 15C24.5 18.866 21.366 22 17.5 22C13.634 22 10.5 18.866 10.5 15C10.5 11.134 13.634 8 17.5 8C21.366 8 24.5 11.134 24.5 15Z" stroke="#FF7E21" stroke-width="1.5"/>
                            <path id="Vector_2" d="M27.5 22C31.366 22 34.5 18.866 34.5 15C34.5 11.134 31.366 8 27.5 8" stroke="#FF7E21" stroke-width="1.5" stroke-linecap="round"/>
                            <path id="Vector_3" d="M26.7858 40H8.21428C6.16294 40 4.5 38.465 4.5 36.5714C4.5 31.8376 8.65736 28 13.7857 28H21.2142C23.3046 28 25.2338 28.6376 26.7858 29.7136" stroke="#FF7E21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path id="Vector_4" d="M38.5 28V40M44.5 34H32.5" stroke="#FF7E21" stroke-width="1.5" stroke-linecap="round"/>
                            </g>
                            </svg>

                            </span>
                            <p class="text-[#FF7E21] text-[28px] post-stat">50,000+</p>
                            <p class="text-white text-center">new followers on all social Media platforms</p>
                        </li>
                        <li class="flex flex-col items-center">
                            <span>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="trade-up">
                            <path id="Vector" d="M40 26V16H30" stroke="#FF7E21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path id="Vector_2" d="M40 16L30 26C28.2348 27.7652 27.3524 28.6476 26.2692 28.7452C26.09 28.7614 25.91 28.7614 25.7308 28.7452C24.6476 28.6476 23.7652 27.7652 22 26C20.2348 24.2348 19.3523 23.3524 18.2691 23.2548C18.0901 23.2386 17.9099 23.2386 17.7309 23.2548C16.6477 23.3524 15.7651 24.2348 14 26L8 32" stroke="#FF7E21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            </svg>
                            </span>
                            <p class="text-[#FF7E21] text-[28px] post-stat">35%</p>
                            <p class="text-white text-center">Sales increased within three months.</p>
                        </li>
                        <li class="flex flex-col items-center">
                            <span>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="view">
                                <path id="Vector" d="M43.088 22.09C43.696 22.9426 44 23.369 44 24C44 24.631 43.696 25.0574 43.088 25.91C40.3558 29.7412 33.3784 38 24 38C14.6216 38 7.6442 29.7412 4.91208 25.91C4.30402 25.0574 4 24.631 4 24C4 23.369 4.30402 22.9426 4.91208 22.09C7.6442 18.2589 14.6216 10 24 10C33.3784 10 40.3558 18.2589 43.088 22.09Z" stroke="#FF7E21" stroke-width="1.5"/>
                                <path id="Vector_2" d="M30 24C30 20.6862 27.3138 18 24 18C20.6862 18 18 20.6862 18 24C18 27.3138 20.6862 30 24 30C27.3138 30 30 27.3138 30 24Z" stroke="#FF7E21" stroke-width="1.5"/>
                                </g>
                                </svg>

                            </span>
                            <p class="text-[#FF7E21] text-[28px] post-stat">2.5 million</p>
                            <p class="text-white text-center">Ad videos views with a 10% click-through rate.</p>
                        </li> 
                        </ul>
                    </div>
    
                </div>
            `;
  }
}

export default new SocialMediaReelsPage();
