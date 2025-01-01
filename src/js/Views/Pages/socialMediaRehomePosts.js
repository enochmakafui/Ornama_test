import View from '../view';
// import images
import paulPlaceImage from '/src/img/Social_media_images/paulsPlaceImage.jpg';
import rehomeTweetImage from '/src/img/Social_media_images/rehomeTweet.jpg';
import leakingRoofImage from '/src/img/Social_media_images/leakingRoof.jpg';
import independenceImage from '/src/img/Social_media_images/Independence.jpg';
import hanaImage from '/src/img/Social_media_images/hanna.jpg';
import educationGlobe from '/src/img/Social_media_images/education_globe.jpg';
import schoolChildImage from '/src/img/Social_media_images/school_child.jpg';
import shippingImage from '/src/img/Social_media_images/shipping.jpg';
import ImproveWellnessImage from '/src/img/Social_media_images/improve_wellness.jpg';
import easyShippingImage from '/src/img/Social_media_images/easy-shipping.jpg';
import dreamHomeImage from '/src/img/Social_media_images/dream_home.jpg';

class SocialMediaRehomePost extends View {
  _generateMarkup() {
    return `
        <div class="pt-8 md:pt-[100px]  social-media lg:max-w-[1440px] lg:mx-[auto]">
            <div class=" border-[#868e96] border-t">
                    <div class="flex justify-center gap-[60px] items-center ">
                        <a href="/social-media-post" data-route="/social-media-post" class="text-white pt-4 text-[20px] border-t-4 border-[#FF7E21] flex items-center gap-2">
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
                        <a href="/social-media-reels" data-route="/social-media-reels" class="text-white pt-5 text-[20px] flex items-center gap-2">
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

                    <div class="gallery">

                        <img src='${paulPlaceImage}' alt='' />
                        <img src='${rehomeTweetImage}' alt='' />
                        <img src='${leakingRoofImage}' alt='' />
                        <img src='${independenceImage}' alt='' />


                        <img src='${hanaImage}' alt='' />
                        <img src='${educationGlobe}' alt='' />
                        <img src='${schoolChildImage}' alt='' />
                        <img src='${shippingImage}' alt='' />

                        <img src='${ImproveWellnessImage}' alt='' />
                        <img src='${easyShippingImage}' alt='' />
                        <img src='${easyShippingImage}' alt='' />
                        <img src='${dreamHomeImage}' alt='' />


                        <img src='${hanaImage}' alt='' />
                        <img src='${educationGlobe}' alt='' />
                        <img src='${schoolChildImage}' alt='' />
                        <img src='${shippingImage}' alt='' />
                    

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
                            <p class="text-white text-center text-[18px]">new followers on all social Media platforms</p>
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
                            <p class="text-white text-center text-[18px]">Sales increased within three months.</p>
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
                            <p class="text-white text-center text-[18px]">Ad videos views with a 10% click-through rate.</p>
                        </li>
                    </ul>
                </div>

        </div>
    `;
  }
}

export default new SocialMediaRehomePost();
