import brandCardImage from '/src/img/ScopeOfWork_Branding_ImageCard.png';
import marketingCardImage from '/src/img/ScopeOfWork_Marketting_ImageCard.png';
import webAndAppCardImage from '/src/img/ScopeOfWork_Web_and_Design_ImageCard.png';
class WorkScopeSectionView {
  render() {
    return ` <section class="service section section--hidden text-white mt-8 md:mt-32 px-2 md:px-20">
        <div class="flex justify-center">
        <h2 class="rounded-3xl border-white block md:hidden text-center text-2xl md:text-4xl border w-max px-8 py-1 mb-4"> See our Works </h2>
        </div>
        <h2 class="text-center text-2xl md:text-4xl">
            Our Scope Of Work
        </h2>
        <div class="scope-of-work-card-container mt-8 md:mt-16 flex flex-col md:flex-row justify-between gap-4 "> 
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
