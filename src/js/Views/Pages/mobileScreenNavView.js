
class MobileScreenNavView {

    _hamburgerMenu = document.querySelector('.hamburger')
    _closeMenu = document.querySelector('.close')
    _fullScreenNav = document.getElementById('fullscreenNav')
    _ourWorkBtn = document.getElementById('ourWorkBtn');
    _dropdownMenu = document.getElementById('dropdownMenu');

// // Add a click event listener to the "Our Work" button
// ourWorkBtn.addEventListener('click', () => {
//   // Toggle the 'hidden' class on the dropdown menu
//   dropdownMenu.classList.toggle('hidden');
// });
    
    addHandlerWorkBtnClick(handler){
        this._ourWorkBtn.addEventListener('click',(e) => {
            console.log(e.target);
            console.log(this._dropdownMenu);
            this._dropdownMenu.classList.toggle('hidden');
            	
            // handler();
        })
    }
    addHandlerHamburgerMenuClick(handler){
        this._hamburgerMenu.addEventListener('click',(e) => {
            console.log(e.target);
            console.log(this._fullScreenNav);
            this._fullScreenNav.classList.toggle('hidden');
            	
            // handler();
        })
        this._closeMenu.addEventListener('click',(e) => {
            console.log(e.target);
            console.log(this._fullScreenNav);
            this._fullScreenNav.classList.toggle('hidden');
            	
            // handler();
        })
    }
    _generateMarkup(){
        return `
        
        `;
    }

}

export default new MobileScreenNavView()