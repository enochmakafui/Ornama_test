class HeroSectionView {
  render() {
    return `<section class="  hero section section--hidden text-white mx-5 mb-[9px] md:mb-0 md:mx-[80px] lg:mx-[auto] md:px-10 pt-[77px] md:pt-[210px] lg:max-w-[1440px]">
        <h2 class="hero-heading ">
            <span class="font-light md:font-normal"> We are a creative agency <br class="hidden md:block"> building brands that <br class="hidden md:block"> make a </span> difference
        </h2>
        <div class="hero-btn-container flex gap-5 md:gap-[32px]  mt-4 md:mt-[74px]">
            <a href="#" class="inline-block text-2xl bg-white px-12 py-4 rounded-[100px] text-black hover:bg-[#e8e8e8]">Let's Talk </a>
            <a href="#" class="inline-block text-2xl px-12 py-4 bg-black rounded-[100px] border">See our work </a>
    
        </div>
    </section>
        `;
  }
}

export default new HeroSectionView();
