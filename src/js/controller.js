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
import blogReadMoreView from './Views/Pages/blogReadMoreView';
import socialMediaMarketingView from './Views/Pages/socialMediaPostPageView';
import workScopeSectionView from './Views/Pages/workScopeSectionView';
import socialMediaReelsPage from './Views/Pages/socialMediaReelsPage';
import startProjectPage from './Views/Pages/StartProjectPageView';
import socialMediaRehomePosts from './Views/Pages/socialMediaRehomePosts';

// homepage rendering ...

const renderHomePage = function () {
  window.scrollTo(0, 0); // Scroll to the top

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

const renderBlogReadMorePage = function () {
  blogReadMoreView.render();
};

const renderSocialMediaPage = function () {
  socialMediaMarketingView.render();
};

const renderSocialMediaReelsPage = function () {
  socialMediaReelsPage.render();
};

const renderStartProjectPage = function () {
  startProjectPage.render();
};

const renderRehomePostsPage = function () {
  socialMediaRehomePosts.render();
};

// first actions
const init = function () {
  const footerYear = document.getElementById('year');
  const year = new Date().getFullYear();
  footerYear.innerHTML = year;
  navView.addHandlerNavBarObserver();
  navView.addHandlerNavLinkClick(controlNavRoutes);
  mobileScreenNavView.addHandlerHamburgerMenuClick();
  // mobileScreenNavView.addHandlerWorkBtnClick();
};

init();

// routing ...
page('*', (ctx, next) => {
  const rootElement = document.getElementById('root');
  document.documentElement.style.scrollBehavior = 'auto';

  // Ensure content is fully rendered before attempting to scroll
  setTimeout(() => {
    if (rootElement) {
      rootElement.scrollTop = 0; // Scrollable root
    }
    window.scrollTo(0, 0); // Fallback for window
  }, 0);

  next(); // Allow other handlers (like your render functions) to run
});

page('/', renderHomePage);
page('/branding', renderBrandPage);
page('/store', renderStorePage);
page('/blog', renderBlogPage);
page('/branding/careBrand', renderCal2CarePage);
page('/branding/devronNexus', renderDevronNexusPage);
page('/blog/1', renderBlogReadMorePage);
page('/social-media-post', renderSocialMediaPage);
page('/social-media-reels', renderSocialMediaReelsPage);
page('/startProject', renderStartProjectPage);
page('/rehomePosts', renderRehomePostsPage);

page();
