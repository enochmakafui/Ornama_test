class MobileScreenNavView {
  _hamburgerMenu = document.querySelector('.hamburger');
  _closeMenu = document.querySelector('.close');
  _fullScreenNav = document.getElementById('fullscreenNav');
  _ourWorkBtn = document.getElementById('ourWorkBtn');
  _dropdownMenu = document.getElementById('dropdownMenu');

  addHandlerWorkBtnClick(handler) {
    this._ourWorkBtn.addEventListener('click', e => {
      console.log(e.target);
      console.log(this._dropdownMenu);

      // handler();
    });
  }
  addHandlerHamburgerMenuClick(handler) {
    this._hamburgerMenu.addEventListener('click', e => {
      this._fullScreenNav.classList.toggle('hidden');
      //   this._dropdownMenu.classList.remove('hidden');

      // handler();
    });
    this._closeMenu.addEventListener('click', e => {
      console.log(e.target);
      console.log(this._fullScreenNav);
      this._fullScreenNav.classList.toggle('hidden');

      // handler();
    });
  }
}

export default new MobileScreenNavView();
