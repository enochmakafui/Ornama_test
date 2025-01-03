class HeroSectionView {
  render() {
    return `
    <section class="hero section section--hidden text-white mx-5 mb-[9px] md:mb-0 md:mx-[80px] lg:mx-[auto] md:px-10 pt-[40px] md:pt-[110px] lg:max-w-[1440px]">

        <h2 class="hero-heading leading-tight md:leading-none text-5xl md:text-8xl">
            <span class="font-light md:font-normal"> We are a creative agency <br class="hidden md:block"> building brands that <br class="hidden md:block"> make a </span> difference
        </h2>

        <div class="hero-btn-container flex gap-5 md:gap-[32px]  mt-6 md:mt-[74px]">
        
            <a href="/startProject" data-route="/startProject" class="inline-block text-[18px] md:text-2xl px-8 md:px-12 py-3 md:py-4 rounded-[100px] button-black border-white border">
                <span class="text-nowrap">Let's Talk </span> <span class="text-nowrap">Let's Talk</span>
            </a>

            <a href="#" class="inline-block text-[18px] md:text-2xl px-8 md:px-12 py-3 md:py-4 bg-black rounded-[100px] border button-white">
                <span class="text-nowrap">See our work</span> <span class="text-nowrap">See our work</span> 
            </a>
        </div>

    </section>
        `;
  }
}

export default new HeroSectionView();
