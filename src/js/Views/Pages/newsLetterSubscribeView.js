class NewsLetterSubscribeView {
  render() {
    return `    
    <section class="mx-5 md:px-10  md:mx-[80px] lg:mx-[auto] lg:max-w-[1440px] pt-[40px] md:pt-[117px] pb-[60px] md:pb-[113px] flex flex-col md:flex-row gap-6 news__letter">
        <div class="w-full md:w-[50%]">
            <h2 class="text-white text-xl md:text-2xl text-left">
                Subscribe to our newsletter  to <br class="block md:hidden"> get <br class="hidden md:block"> the latest news in your inbox
            </h2>
        </div>
        <div class="w-full flex flex-row items-center gap-4">
            <input 
                class="flex-1 rounded-2xl px-2 py-3" 
                type="email" 
                spellcheck="false" 
                placeholder="Enter your email"
            >
            <button 
                class="flex items-center justify-center gap-2 bg-white text-black rounded-2xl px-4 py-3"
            >
                Subscribe
                <span>
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
                        class="lucide lucide-arrow-right"
                    >
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                    </svg>
                </span>
            </button>
        </div>
    </section>


        `;
  }
}

export default new NewsLetterSubscribeView();
