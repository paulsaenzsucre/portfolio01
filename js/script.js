function mostrarMenu() {
  document.getElementById('page-header').id = 'page-header-mobile-menu';
  document.getElementById("logo").id= "logo-mobile-menu";
  document.getElementById("hamburger-button").id= "hamburger-button-mobile-menu";
  document.getElementById("close-btn").id= "close-btn-mobile-menu";
  document.getElementById("top-menu").id= "top-menu-mobile-menu";
}

document.getElementById("hamburger-button").addEventListener("click",mostrarMenu);