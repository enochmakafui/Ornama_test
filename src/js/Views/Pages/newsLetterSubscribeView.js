class NewsLetterSubscribeView {
  render() {
    return `    
    <section class="mx-5 md:px-10  md:mx-[80px] lg:mx-[auto] lg:max-w-[1440px] pt-[40px] md:pt-[117px] pb-[60px] md:pb-[113px] flex flex-col md:flex-row gap-6 news__letter">
        <div class="w-full md:w-[50%]">
            <p class="text-white text-xl md:text-[32px] text-left">
                Subscribe to our newsletter to get the latest news in your inbox
            </p>
        </div>
        <div class="w-full flex flex-row items-center gap-4">
            <input 
                class="flex-1 rounded-[64px] px-4 py-4" 
                type="email" 
                spellcheck="false" 
                placeholder="Enter your email"
            >

           <a href="#" class="flex items-center text-2xl bg-white px-12 py-4 rounded-[100px] text-black ">
                Subscribe
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    class="lucide lucide-arrow-right ml-2"
                >
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                </svg>
                </a>


           
        </div>
    </section>


        `;
  }
}

export default new NewsLetterSubscribeView();
