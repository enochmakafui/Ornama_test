import View from '../view';
import getInTouchIMage from '/src/img/getInTouch.png';

class StartProjectPageView extends View {
  _generateMarkup() {
    return `
        <div class=" start-project">
        <div class="start-project-banner">
            <img src="${getInTouchIMage}" alt="Get in touch" class="w-full h-full object-cover">
        </div>
        <div class="px-5 md:px-[100px] ">
        <form class="bg-[#585858] p-9 ">
            <p class="flex justify-between items-center">
                <span class="text-white text-[32px] font-bold">SEND A MESSAGE</span>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M2 5.5L8.91302 9.41697C11.4616 10.861 12.5384 10.861 15.087 9.41697L22 5.5" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                    <path d="M21.9953 10.0284C21.9299 6.96114 21.8972 5.42749 20.7655 4.29141C19.6337 3.15532 18.0586 3.11574 14.9083 3.03659C12.9668 2.98781 11.0443 2.9878 9.10276 3.03658C5.95252 3.11573 4.3774 3.1553 3.24564 4.29139C2.11389 5.42748 2.08118 6.96113 2.01577 10.0284C1.99474 11.0147 1.99474 11.9951 2.01577 12.9814C2.08119 16.0487 2.11389 17.5823 3.24565 18.7184C4.3774 19.8545 5.95252 19.8941 9.10277 19.9732C9.57102 19.985 10.0382 19.9939 10.5047 20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.8522 13.4394L21.5446 14.1317C22.1304 14.7174 22.1304 15.6672 21.5446 16.253L17.9172 19.9487C17.6319 20.2341 17.2669 20.4265 16.8702 20.5005L14.622 20.9886C14.2671 21.0656 13.951 20.7505 14.027 20.3953L14.5056 18.16C14.5796 17.7633 14.772 17.3983 15.0574 17.1129L18.7309 13.4394C19.3167 12.8536 20.2665 12.8536 20.8522 13.4394Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </p>
            <div class="form">

            <input type="text" placeholder="Name" class="w-full p-2 my-2">
            <input type="text" placeholder="Business" class="w-full p-2 my-2">
            <input type="email" placeholder="Email" class="w-full p-2 my-2">
            <input type="text" placeholder="Phone Number" class="w-full p-2 my-2">
            <div>
                <p class="text-white text-[24px] mb-6">Project Type</p>
                <ul class="flex gap-5 items-center">
                    <li class="bg-[#FF7E2133] w-max text-[#FF7E21] px-6 py-3 rounded-[20px] ">BRANDING</li>
                    <li class="bg-[#3dacbd6c] px-6 py-3 rounded-[20px] w-max  text-[#3DABBD]">UI/UX DESIGN</li>
                    <li class="bg-[#9747FF33] px-6 py-3 rounded-[20px] text-[#9747FF] w-max ">MARKETING </li>
                    <li class="bg-[#1B1B1B] text-white px-6 py-3 rounded-[20px] w-max">OTHERS</li>
                <ul>
            </div>
            <input type="text" placeholder="Others" class="w-full p-2 my-2 col-span-2">
            <label for="message" class="text-white text-[24px] col-span-2">Brief Description</label>
            <textarea placeholder="" class="w-full p-2 my-2 col-span-2 h-[222px]"></textarea>
            <button class="bg-white px-12 py-4 rounded-[100px] my-2 w-max text-[24px] flex items-center gap-2 font-medium">Let’s do it
            
            <span class="arrow-right-icon-container p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" class="arrow-right" />
            </svg>

            </span>

            </button
            </div>

        </form>


        </div>
        

        
        </div>

        `;
  }
}

export default new StartProjectPageView();
