import lagosAvenueLogo from '/src/img/59LagosAvenue Logo.png';
import aframOfficialLogo from '/src/img/AframOfficialLogo.png';
import gathrLogo from '/src/img/GathrLogo.png';
import harveyPropertiesLogo from '/src/img/HarveyProperties VerticalLogo.png';
import mersonHrLogo from '/src/img/MersonHRLogo.jpeg';
import personnelPracticeLogo from '/src/img/PersonnelPracticeLogo.png';
import rehomeLogo from '/src/img/RehomeLogo.png';
class ClientSectionView {
  render() {
    return `<section class="client  bg-white mt-16 py-8 flex flex-col justify-center items-center px-5 md:px-20">
    <div class="section section--hidden client_section rotate">
        <div>
        <h2 class="text-center section-heading font-semi-bold">The clients we serve</h2>
        <p class="text-center text-xl md:text-2xl mt-4"> We have been privileged to work with some of these awesome brands</p>
        </div>
            <div class="client-images-container grid grid-cols-2 md:grid-cols-3 mx-2 md:mx-20  gap-x-8 md:gap-x-32 gap-y-8 md:gap-y-16 mt-16">
                <div class="client-image-card w-40 h-40 flex justify-center items-center">
                    <img  src="${aframOfficialLogo}" alt="afram Official logo" />
                </div>
                <div class="client-image-card  w-40 h-40 flex justify-center items-center">
                <img class="h-16 md:h-auto" src="${gathrLogo}" alt="gathr logo" />
                </div>
                <div class="client-image-card  w-40 h-40 flex justify-center items-center">
                <img src="${harveyPropertiesLogo}" alt="harvey properties logo" />
                </div>
                <div class="client-image-card  w-40 h-40 flex justify-center items-center">
                <img src="${mersonHrLogo}" alt="merson HR  logo" />
                </div>
                <div class="client-image-card  w-40 h-40 flex justify-center items-center">
                <img src="${personnelPracticeLogo}" alt="personnel practice  logo" />
                </div>
                <div class="client-image-card  w-40 h-40 flex justify-center items-center">
                <img src="${rehomeLogo}" alt="rehome logo" />
                </div>
                <div class="client-image-card  w-40 h-40 flex justify-center items-center">
                <img src="${lagosAvenueLogo}" alt="rehome logo" />
                </div>
                </div>
        </div>
    </section>`;
  }
}

export default new ClientSectionView();
