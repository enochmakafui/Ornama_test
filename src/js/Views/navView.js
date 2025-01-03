class NavView {
  _header = document.querySelector('header');
  _navEL = document.querySelector('nav');
  _navLogo = document.querySelector('.nav_logo');
  _hamburgerIcon = document.querySelector('.hamburger svg');

  get _fullScreenNav() {
    return document.getElementById('fullscreenNav');
  }

  addHandlerNavBarObserver() {
    const header = this._header;

    window.addEventListener('scroll', () => {
      if (window.scrollY >= 50) {
        if (!header.classList.contains('sticky')) {
          header.classList.add('sticky');
          this._hamburgerIcon.classList.remove('stroke-white');
          this._hamburgerIcon.classList.add('stroke-black');
          this._navLogo.classList.remove('dark');
          this._navLogo.classList.add('light');
        }
      } else {
        header.classList.remove('sticky');
        this._hamburgerIcon.classList.remove('stroke-black');
        this._hamburgerIcon.classList.add('stroke-white');
        this._navLogo.classList.remove('light');
        this._navLogo.classList.add('dark');
      }
    });
  }

  addHandlerNavLinkClick(handler) {
    this._navEL.addEventListener('click', e => {
      e.preventDefault();
      const link =
        e.target.closest('.nav__item-link') ||
        e.target.closest('.nav__link-home') ||
        e.target.closest('.mobile-nav__item-link');
      if (!link) return;

      const route = link.getAttribute('data-route');
      handler(route);
      if (link.classList.contains('mobile-nav__item-link')) {
        this._fullScreenNav.classList.toggle('hidden');
      }
    });
  }
}

export default new NavView();
