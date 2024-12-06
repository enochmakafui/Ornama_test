import brandCardImage from '/src/img/ScopeOfWork_Branding_ImageCard.png';
import marketingCardImage from '/src/img/ScopeOfWork_Marketting_ImageCard.png';
import webAndAppCardImage from '/src/img/ScopeOfWork_Web_and_Design_ImageCard.png';
class WorkScopeSectionView {
  render() {
    return ` <section class="service section section--hidden text-white md:px-10 mt-8 md:mt-32 mx-5 md:mx-auto lg:max-w-[1440px]">
        <div class="flex ">
        <h2 class="rounded-3xl border-white block md:hidden text-center section-heading border w-max px-8 py-1 mb-4 mx-auto"> See our Works </h2>
        </div>
        <h2 class="text-center section-heading ">
            Our Scope Of Work
        </h2>
        <div class="scope-of-work-card-container mt-8 md:mt-16 flex flex-col md:flex-row justify-between gap-8 "> 
            <div class="w-full md:w-auto">
            <img src="${brandCardImage}" alt="branding card "  class="w-full"/>
            </div>
            <div class="w-full md:w-auto">
            <img src="${webAndAppCardImage}" alt="Web and App Development card" class="w-full" />
            </div>
            <div class="w-full md:w-auto">
            <img src="${marketingCardImage}" alt="Marketing card" class="w-full" />
            </div>
        </div>
    </section>`;
  }
}

export default new WorkScopeSectionView();
