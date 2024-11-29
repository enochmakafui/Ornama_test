import logoImageBlack from '/src/img/logo_black.png';
import logoImageWhite from '/src/img/logo-white.png';

class NavView {
  _navEL = document.querySelector('nav');
  _navLogo = document.querySelector('.nav_logo');
  _workLink = document.querySelector('.drop__link');

  _hamburgerIcon = document.querySelector('.hamburger svg');

  _showDropItem;

  
  addHandlerObserverNav() {
    const nav = this._navEL;

    window.addEventListener('scroll', () => {
      if (window.scrollY >= 50) {
        if (!nav.classList.contains('sticky')) {
          nav.classList.add('sticky');
          this._hamburgerIcon.classList.remove('stroke-white');
          this._hamburgerIcon.classList.add('stroke-black');
          this._navLogo.src = logoImageBlack;
        }
      } else {
        nav.classList.remove('sticky');
        this._hamburgerIcon.classList.remove('stroke-black');
        this._hamburgerIcon.classList.add('stroke-white');
        this._navLogo.src = logoImageWhite;
      }
    });
  }

  addHandlerNavLinkClick(handler) {
    this._navEL.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('clicked');
      const link = e.target.closest('.nav__item-link') || e.target.closest('.nav__link-home');

      if (!link) return;
      const route = link.getAttribute('data-route');
      console.log(route);
      handler(route);
    });
  }

  addHandlerWorkHover() {
    const dropDownIcon = document.querySelector('.lucide-chevron-down');
    const dropItem = document.querySelector('.drop__item');
    const showDropDown = function () {
      dropDownIcon.classList.add('rotate-dropdown');
      dropItem.classList.remove('hidden_item');
      dropItem.classList.add('show_item');
    };

    const hideDropDown = function () {
      dropDownIcon.classList.remove('rotate-dropdown');
      dropItem.classList.add('hidden_item');
      dropItem.classList.remove('show_item');
    };

    this._workLink.addEventListener('mouseover', function () {
      this._showDropItem = true;

      if (this._showDropItem) {
        showDropDown();
      }
    });
    this._workLink.addEventListener('mouseout', function (e) {
      this._showDropItem = false;
      if (!this._showDropItem) {
        hideDropDown();
      }
    });
  }
}

export default new NavView();
