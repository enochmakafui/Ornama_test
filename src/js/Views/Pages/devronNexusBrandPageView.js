import View from '../view';
import topBannerImage from 'url:/src/img/DevronBrandMedia/topBanner.png';
import threeLogosAndArrowImage from 'url:/src/img/DevronBrandMedia/threeLogosAndArrowImage.png';
import fourSideBySideImage from 'url:/src/img/DevronBrandMedia/fourSideBySideImage.png';
import devronNexusVideo from 'url:/src/img/DevronBrandMedia/devronNexusVideo.mp4';
import innovateVideo from 'url:/src/img/DevronBrandMedia/InnovateVideo.mp4';
import threeTypeFacesAndCurvedLogoImage from 'url:/src/img/DevronBrandMedia/threeTypeFacesAndCurvedLogoImage.png';
import typeFaceImage from 'url:/src/img/DevronBrandMedia/typeFaceImage.png';
import typeFaceImageBlack from 'url:/src/img/DevronBrandMedia/typeFaceBlackImage.png';
import ladyAndGuyImage from 'url:/src/img/DevronBrandMedia/ladyAndGuyImage.png';
import ladyImage from 'url:/src/img/DevronBrandMedia/ladyImage.png';
import bookAndShirtImage from 'url:/src/img/DevronBrandMedia/bookAndShirtImage.png';
import planeImage from 'url:/src/img/DevronBrandMedia/planeImage.png';
import carImage from 'url:/src/img/DevronBrandMedia/carImage.png';
import socialMediaVideo from 'url:/src/img/DevronBrandMedia/socialMediaVideo.mp4';
import parcelImage from 'url:/src/img/DevronBrandMedia/parcelImage.png';

class DevronNexusPageView extends View {
  _generateMarkup() {
    return `
    <div class="bg-white text-[color:#343a40] px-2 md:px-20 pt-8 md:pt-[100px] pb-16 ">
    <div  class="lg:max-w-[1440px] lg:mx-[auto]">
        <section class="">
            <div >
                <img src="${topBannerImage}" alt="" class="rounded-[11px] md:rounded-[40px]"/>
            </div>
        </section>
        <section class="mt-8 md:mt-[100px] flex flex-col md:flex-row items-center px-2 md:px-16">
            <div class="basis-2/4">
                <h2 class="text-[32px] md:text-5xl mb-[8px] md:mb-8 devron-solution-text">Devron Nexus </br> Solutions</h2>
                <p class="mb-[50px] md:mb-0"> A Multi-service provider based in  Canada and Ghana</p>
            </div>
            <div class="basis-2/4">
                <p class="text-[20px] devron-solution-long-text">In the heart of connection lies Devron Nexus Solution.a multifaceted provider, weaving threads of opportunity across travel, digital advertising, business, and beyond. Here, the nexus of services bridges dreams to reality, guiding aspirations with precision.</p>
            </div>
        </section>
        <section class="mt-8 md:mt-[100px]">
            <div >
                <img src="${threeLogosAndArrowImage}" alt="" class="rounded-[11px] md:rounded-[40px]"/>
            </div>
        </section>
         <section class="mt-8 md:mt-[100px] flex flex-col md:flex-row  px-2  md:px-16">
            <div class="basis-2/4">
                <h2 class="text-[32px] md:text-5xl mb-8 devron-solution-text">The Mark of </br> Devron Nexus</h2>
            </div>
            <div class="basis-2/4">
                <p class="text-[20px] devron-solution-long-text">The brand identity of Devron Nexus Solution is a visual embodiment of its mission. The logo, a symbol of unity and direction, encapsulates the essence of connection. It is a beacon for those who seek to traverse new paths, knowing that they are guided by a brand that understands the power of being connected.</p>
            </div>
        </section>
        <section class="mt-8 md:mt-[100px] flex flex-col md:flex-row px-2 md:px-16">
            <div class=" md:basis-2/4">
                <video autoPlay loop muted class="rounded-2xl w-full md:w-4/5">
                    <source src="${devronNexusVideo}" type="video/mp4" />
                </video>
            </div>
            <div class=" md:basis-2/4 mt-[80px] md:mt-0">
                <div>
                <h2 class="text-[32px] md:text-5xl mb-8 devron-solution-text">The Nexus <br class="hidden md:block"> Effect</h2>
                </div>
                <p class="text-[20px] devron-solution-long-text">At the core of Devron Nexus is a powerful truth connection is strength. Every service offered is a link in a chain, binding clients to their goals with unyielding support. Whether it’s through cutting-edge digital advertising travel , study or bespoke business consultancy, Devron Nexus empowers with every connection made.</p>
            </div>
        </section>
        <section class="mt-8 md:mt-[100px]">
            <div >
                <img src="${fourSideBySideImage}" alt="" class="rounded-[11px] md:rounded-[40px]"/>
            </div>
        </section>
    
         <section class="flex justify-center mt-8 md:mt-[100px]">
            <div >
                <video autoPlay loop muted class="rounded-[11px] md:rounded-[40px]">
                    <source src="${innovateVideo}" type="video/mp4" />
                </video>
            </div>
        </section>
        <section class="mt-8 md:mt-[100px]">
            <div >
                <img src="${threeTypeFacesAndCurvedLogoImage}" alt="" class="rounded-[11px] md:rounded-[40px]"/>
            </div>
        </section>
        <section class="mt-8 md:mt-[100px]">
            <div >
                <img src="${threeTypeFacesAndCurvedLogoImage}" alt="" class="rounded-[11px] md:rounded-[40px]"/>
            </div>
        </section>
        <section class="mt-8 md:mt-[100px]">
            <div >
                <img src="${typeFaceImage}" alt="" class="rounded-[11px] md:rounded-[40px]"/>
            </div>
        </section>
        <section class="mt-8 md:mt-[100px]">
            <div >
                <img src="${typeFaceImageBlack}" alt="" class="rounded-[11px] md:rounded-[40px]"/>
            </div>
        </section>
        <section class="mt-8 md:mt-[100px]">
            <div >
                <img src="${ladyAndGuyImage}" alt="" class="rounded-[11px] md:rounded-[40px]"/>
            </div>
        </section>
        <section class="mt-8 md:mt-[100px]">
            <div >
                <img src="${ladyImage}" alt="" class="rounded-[11px] md:rounded-[40px]"/>
            </div>
        </section>
        <section class="mt-8 md:mt-[100px]">
            <div >
                <img src="${bookAndShirtImage}" alt="" class="rounded-[11px] md:rounded-[40px]"/>
            </div>
        </section>
        <section class="mt-8 md:mt-[100px]">
            <div >
                <img src="${planeImage}" alt="" class="rounded-[11px] md:rounded-[40px]"/>
            </div>
        </section>
        <section class="mt-8 md:mt-[100px]">
            <div >
                <img src="${carImage}" alt="" class="rounded-[11px] md:rounded-[40px]"/>
            </div>
        </section>
        <section class="mt-8 md:mt-[100px]">
                <div class=" px-5 md:px-[100px] lg:px-[266px] ">
                    <p class="mb-5 text-[20px] care-quote text-center">“ I was impressed by the outcome so I awarded a 3-month contract to <span class="font-bold">Ornama Studio</span> to aid in the post branding process. The team did my company’s brochures and social media posts and they were awesome. ” </p>
                    <p class="quote-author text-center">Pius- Call2Care Solutions CEO</p>
                </div>
        </section>
        <section class="mt-[97px] md:mt-[100px] flex flex-col md:flex-row px-2 md:px-16">
            <div class="basis-2/4">
                <h2 class="text-[32px] md:text-5xl  mb-8 devron-solution-text">A Symphony of </br> Services</h2>
            </div>
            <div class="basis-2/4">
                <p class="text-[20px] devron-solution-long-text">At Devron Nexus Solution, each service is a note in a symphony of success. As the brand designer, I crafted the visual identity that ties it all together. From guiding global wanderers to their academic dreams to crafting business strategies that propel brands forward, every aspect was thoughtfully designed. I also worked on the social media posts, ensuring that the brand’s messaging not only resonates but also connects deeply with its audience.</p>
            </div>
        </section>
         <section class="mt-8 md:mt-[100px]">
            <div >
                <video autoPlay loop muted class="rounded-[11px] md:rounded-[40px]">
                    <source src="${socialMediaVideo}" type="video/mp4" />
                </video>
            </div>
        </section>
         <section class="mt-8 md:mt-[100px]">
            <div >
                <img src="${parcelImage}" alt="" class="rounded-[11px] md:rounded-[40px]"/>
            </div>
        </section>
        </div>
    </div>
        `;
  }
}

export default new DevronNexusPageView();
