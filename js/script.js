function mostrarMenu() {
  document.getElementById('page-header').id = 'page-header-mobile-menu';
  document.getElementById("logo").id= "logo-mobile-menu";
  document.getElementById("hamburger-button").id= "hamburger-button-mobile-menu";
  document.getElementById("close-btn").id= "close-btn-mobile-menu";
  document.getElementById("top-menu").id= "top-menu-mobile-menu";
}

function ocultarMenu() {
  document.getElementById("page-header-mobile-menu").id = "page-header";
  document.getElementById("logo-mobile-menu").id= "logo";
  document.getElementById("hamburger-button-mobile-menu").id= "hamburger-button";
  document.getElementById("close-btn-mobile-menu").id= "close-btn";
  document.getElementById("top-menu-mobile-menu").id= "top-menu";
}

for(let x=0; x<document.getElementsByClassName("menu-item").length; x++)
{
  document.getElementsByClassName("menu-item")[x].addEventListener("click",ocultarMenu,false);
}

document.getElementById("hamburger-button").addEventListener("click",mostrarMenu);
document.getElementById("close-btn").addEventListener("click",ocultarMenu);
