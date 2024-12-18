class HeroSectionView {
  render() {
    return `<section class="hero section section--hidden text-white mx-5 mb-[9px] md:mb-0 md:mx-[80px] lg:mx-[auto] md:px-10 pt-[77px] md:pt-[110px] lg:max-w-[1440px]">
        <h2 class="hero-heading ">
            <span class="font-light md:font-normal"> We are a creative agency <br class="hidden md:block"> building brands that <br class="hidden md:block"> make a </span> difference
        </h2>
        <div class="hero-btn-container flex gap-5 md:gap-[32px]  mt-4 md:mt-[74px]">
            <div class="hidden md:block">
                <button class="bg-white  text-black px-3 md:px-6 py-2 md:py-3 rounded-3xl text-base md:text-xl">Let's Talk</button>
            </div>
            <div class="hidden md:block">
                <button class="rounded-3xl text-base md:text-xl border-white border px-3 md:px-6 py-2 md:py-3">See our work</button>
            </div>
        </div>
    </section>
        `;
  }
}

export default new HeroSectionView();
