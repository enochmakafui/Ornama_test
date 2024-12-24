// import * as model from './model';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import homePageView from './Views/Pages/homePageView';
import cal2CareBrandPageView from './Views/Pages/cal2CareBrandPageView';
import page from 'page';
import navView from './Views/navView';
import brandPageView from './Views/Pages/brandPageView';
import devronNexusBrandPageView from './Views/Pages/devronNexusBrandPageView';
import mobileScreenNavView from './Views/Pages/mobileScreenNavView';
import storePageView from './Views/Pages/StorePageView';
import blogPageView from './Views/Pages/blogPageView';
import workScopeSectionView from './Views/Pages/workScopeSectionView';

// homepage rendering ...

const renderHomePage = function () {
  homePageView.render();
  homePageView.addHandlerSectionsObserver();
};

// brand page rendering ...

const renderBrandPage = function () {
  brandPageView.render();
};

// store page rendering ...
const renderStorePage = function () {
  storePageView.render();
};

// blog page rendering ...
const renderBlogPage = function () {
  blogPageView.render();
};

// cal2care page rendering ...

const renderCal2CarePage = function () {
  cal2CareBrandPageView.render();
};

// devron nexus page rendering ...

const renderDevronNexusPage = function () {
  devronNexusBrandPageView.render();
};

// controlling navigation routes ...

const controlNavRoutes = function (route) {
  page(route);
};

// first actions
const init = function () {
  const footerYear = document.getElementById('year');
  const year = new Date().getFullYear();
  footerYear.innerHTML = year;
  // navView.addHandlerObserverNav();
  navView.addHandlerWorkHover();
  navView.addHandlerNavLinkClick(controlNavRoutes);
  mobileScreenNavView.addHandlerHamburgerMenuClick();
  mobileScreenNavView.addHandlerWorkBtnClick();
};

init();

// routing ...

page('/', renderHomePage);
page('/branding', renderBrandPage);
page('/store', renderStorePage);
page('/blog', renderBlogPage);
page('/branding/careBrand', renderCal2CarePage);
page('/branding/devronNexus', renderDevronNexusPage);

page();
