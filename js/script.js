function mostrarMenu() {
  document.getElementById('page-header').id = 'page-header-mobile-menu';
  document.getElementById('logo').id = 'logo-mobile-menu';
  document.getElementById('hamburger-button').id = 'hamburger-button-mobile-menu';
  document.getElementById('close-btn').id = 'close-btn-mobile-menu';
  document.getElementById('top-menu').id = 'top-menu-mobile-menu';
  document.getElementById('toolbar').id = 'toolbar-mobile-menu';
  document.getElementById('nav-bar').id = 'nav-bar-mobile-menu';
  for (let x = 0; x < document.getElementsByClassName('menu-item').length; x += 1) {
    document.getElementsByClassName('menu-item')[x].classList.add('menu-item-mobile-menu');
  }
  document.getElementById('header-separator').style.display = 'block';
}

function ocultarMenu() {
  document.getElementById('page-header-mobile-menu').id = 'page-header';
  document.getElementById('logo-mobile-menu').id = 'logo';
  document.getElementById('hamburger-button-mobile-menu').id = 'hamburger-button';
  document.getElementById('close-btn-mobile-menu').id = 'close-btn';
  document.getElementById('top-menu-mobile-menu').id = 'top-menu';
  document.getElementById('toolbar-mobile-menu').id = 'toolbar';
  document.getElementById('nav-bar-mobile-menu').id = 'nav-bar';
  for (let x = 0; x < document.getElementsByClassName('menu-item').length; x += 1) {
    document.getElementsByClassName('menu-item')[x].classList.remove('menu-item-mobile-menu');
  }
  document.getElementById('header-separator').style.display = 'none';
}

function fillProjectSection() {
  var tree = document.createDocumentFragment();
  var article = document.createElement('article');
  article.setAttribute('id','my-recent-works-container');

  var heading = document.createElement('h2','headline');
  heading.setAttribute('class','headline');
  heading.appendChild(document.createTextNode('My Recent Works'));

  var separator=document.createElement('hr');
  separator.setAttribute('id','recentWorkSeparator');

  var project= {
    heading: 'Multi-Post Stories',
    subheading: 'Gain+Glory',
    name: 'Keeping track of hundreds of components',
    description: 'Description',
    image: '',
    langBadges: [
      'Ruby on rails',
      'css',
      'JavaScript',
      'html'
    ],
    liveVersionLink:'',
    sourceLink:''
  }

  var projects=[];
  projects.push(project);
  tree.appendChild(article);
  tree.appendChild(heading);
  tree.appendChild(separator);
  document.getElementById("my-recent-works-container").appendChild(tree);
}

function checkMediaIsBelow768(myMediaQuery) {
  if (myMediaQuery.matches) {
    ocultarMenu();
  }
}

const myMediaQuery = window.matchMedia('(min-width: 768px)');

for (let x = 0; x < document.getElementsByClassName('menu-item').length; x += 1) {
  document.getElementsByClassName('menu-item')[x].addEventListener('click', ocultarMenu, false);
}

myMediaQuery.addEventListener('change', checkMediaIsBelow768);
document.getElementById('hamburger-button').addEventListener('click', mostrarMenu);
document.getElementById('close-btn').addEventListener('click', ocultarMenu);
