class HeroSectionView {
  render() {
    return `<section class="hero section section--hidden text-white mx-4 md:mx-20 mt-8 md:mt-16">
        <h2 class="hero-heading ">
            <span class="font-light md:font-normal"> We are a creative agency <br class="hidden md:block"> building brands that <br class="hidden md:block"> make a </span> difference
        </h2>
        <div class="hero-btn-container flex gap-5 md:gap-10  mt-4 md:mt-16">
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
