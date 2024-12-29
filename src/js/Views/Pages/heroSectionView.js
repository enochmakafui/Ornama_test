class HeroSectionView {
  render() {
    return `
    <section class="hero section section--hidden text-white mx-5 mb-[9px] md:mb-0 md:mx-[80px] lg:mx-[auto] md:px-10 pt-[77px] md:pt-[110px] lg:max-w-[1440px]">

        <h2 class="hero-heading ">
            <span class="font-light md:font-normal"> We are a creative agency <br class="hidden md:block"> building brands that <br class="hidden md:block"> make a </span> difference
        </h2>

        <div class="hero-btn-container flex gap-5 md:gap-[32px]  mt-4 md:mt-[74px]">
        
            <a href="/startProject" data-route="/startProject" class="text-2xl px-12 py-4 rounded-[100px] button-black border-white border">
                <span class="text">Let's Talk </span> <span>Let's Talk</span>
            </a>

            <a href="#" class="text-2xl px-12 py-4 bg-black rounded-[100px] border button-white">
                <span class="text">See our work</span> <span class="text-nowrap">See our work</span> 
            </a>
        </div>

    </section>
        `;
  }
}

export default new HeroSectionView();
