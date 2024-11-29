import brandCardImage from '/src/img/ScopeOfWork_Branding_ImageCard.png';
import marketingCardImage from '/src/img/ScopeOfWork_Marketting_ImageCard.png';
import webAndAppCardImage from '/src/img/ScopeOfWork_Web_and_Design_ImageCard.png';
class WorkScopeSectionView {
  render() {
    return ` <section class="service section section--hidden text-white mt-8 md:mt-32 px-2 md:px-20">
        
        <h2 class="text-center text-2xl md:text-4xl">
            Our Scope Of Work
        </h2>
        <div class="scope-of-work-card-container mt-8 md:mt-16 flex justify-between gap-4 flex-wrap"> 
            <div >
            <img src="${brandCardImage}" alt="branding card "  />
            </div>
            <div>
            <img src="${webAndAppCardImage}" alt="Web and App Development card" />
            </div>
            <div >
            <img src="${marketingCardImage}" alt="Marketing card" />
            </div>
        </div>
    </section>`;
  }
}

export default new WorkScopeSectionView();
