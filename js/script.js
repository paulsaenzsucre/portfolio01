let projs;
const myMediaQuery = window.matchMedia('(min-width: 768px)');
const myMediaQuery2 = window.matchMedia('(min-width: 1100px)');
const menu = document.getElementById('page-header');
const menuOffset = menu.offsetHeight;

async function fetchJSON() {
  const response = await fetch('projs.json');
  const json = await response.json();
  return json;
}

function menuSticky() {
  if (window.scrollY > menuOffset-1) {
    menu.classList.add('sticky');
  } else if (window.scrollY < menuOffset-11) {
    menu.classList.remove('sticky');
  }
}

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

function fillProjectsHeading() {
  const tree = document.createDocumentFragment();
  const article = document.createElement('article');
  article.setAttribute('id', 'my-recent-works-container');

  const heading = document.createElement('h2', 'headline');
  heading.setAttribute('class', 'headline');
  heading.appendChild(document.createTextNode('My Recent Works'));

  const separator = document.createElement('hr');
  separator.setAttribute('id', 'recentWorkSeparator');

  article.appendChild(heading);
  article.appendChild(separator);

  tree.appendChild(article);
  const aux = document.querySelector('#about-me-container');
  aux.insertAdjacentElement('beforebegin', article);
}

function noScroll(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  document.getElementById('popup-back').scrollIntoView();
}

function toggleCard(evt) {
  let element; let article;
  const num = evt.currentTarget.myParam;
  const card = document.getElementById(`proj-${num}`);
  if (card.myToggle) {
    article = document.getElementById('popup-back');
    article.id = 'my-recent-works-container';

    for (let i = 0; i < article.children.length; i += 1) {
      article.children[i].classList.remove('hide');
    }

    card.classList.remove('popup-container');
    card.classList.add('work-card');

    [element] = card.getElementsByClassName('card-img');
    element.setAttribute('src', projs[num].image);
    element.removeEventListener('click', toggleCard);

    [element] = card.getElementsByClassName('info-container');
    element.classList.remove('info-container');
    element.classList.add('work-card-info-container');

    [element] = card.getElementsByClassName('title');
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    element.appendChild(document.createTextNode(projs[num].heading));
    element.appendChild(document.createElement('br'));
    element.appendChild(document.createTextNode(projs[num].subheading));
    element.classList.remove('title');
    element.classList.add('workCardInfoTitle');

    [element] = card.getElementsByClassName('proj-descrition');
    element.classList.add('hide');

    [element] = card.getElementsByClassName('btn-container');
    const [btn1, btn2, btn3] = element.getElementsByClassName('btn-grow');
    btn1.classList.remove('hide');
    btn2.classList.add('hide');
    btn3.classList.add('hide');
    document.removeEventListener('scroll', noScroll);
  } else {
    article = document.getElementById('my-recent-works-container');
    article.id = 'popup-back';

    for (let i = 0; i < article.children.length; i += 1) {
      article.children[i].classList.add('hide');
    }

    card.classList.remove('hide');
    card.classList.remove('work-card');
    card.classList.add('popup-container');

    [element] = card.getElementsByClassName('card-img');
    if (myMediaQuery2.matches) { element.setAttribute('src', projs[num].imagePopup); } else { element.setAttribute('src', projs[num].image); }
    element.myParam = num;
    element.addEventListener('click', toggleCard);

    [element] = card.getElementsByClassName('work-card-info-container');
    element.classList.add('info-container');
    element.classList.remove('work-card-info-container');

    [element] = card.getElementsByClassName('workCardInfoTitle');
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    element.appendChild(document.createTextNode(projs[num].title));
    element.classList.add('title');
    element.classList.remove('workCardInfoTitle');

    [element] = card.getElementsByClassName('proj-descrition');
    element.classList.remove('hide');

    [element] = card.getElementsByClassName('btn-container');
    const [btn1, btn2, btn3] = element.getElementsByClassName('btn-grow');
    btn1.classList.add('hide');
    btn2.classList.remove('hide');
    btn3.classList.remove('hide');
    document.addEventListener('scroll', noScroll);
    article.scrollIntoView();
  }
  card.myToggle = !card.myToggle;
}

function openLive(evt) {
  const num = evt.currentTarget.myParam;
  window.open(projs[num].liveVersionLink);
}

function openSource(evt) {
  const num = evt.currentTarget.myParam;
  window.open(projs[num].sourceLink);
}

function showCards(obj) {
  const tree = document.createDocumentFragment();

  const img = document.createElement('img');
  img.setAttribute('src', obj.image);
  img.setAttribute('class', 'card-img');

  const h3 = document.createElement('h3');
  h3.setAttribute('class', 'workCardInfoTitle');
  h3.appendChild(document.createTextNode(obj.heading));
  h3.appendChild(document.createElement('br'));
  h3.appendChild(document.createTextNode(obj.subheading));

  const ul = document.createElement('ul');
  ul.setAttribute('class', 'badges-container');
  let li;
  for (let i = 0; i < obj.langBadges.length; i += 1) {
    li = document.createElement('li');
    li.setAttribute('class', 'lang-badges');
    li.appendChild(document.createTextNode(obj.langBadges[i]));
    ul.appendChild(li);
  }
  const divDesc = document.createElement('div');
  divDesc.setAttribute('class', 'proj-descrition hide');
  divDesc.appendChild(document.createTextNode(obj.description));

  const divBtn = document.createElement('div');
  divBtn.setAttribute('class', 'flex-container btn-container');

  let ti = document.createElement('i');
  ti.setAttribute('class', 'bx bx-box bx-flashing');
  let btn = document.createElement('button');
  btn.setAttribute('class', 'button btn-grow');
  btn.setAttribute('type', 'button');
  btn.appendChild(document.createTextNode('See Project '));
  btn.appendChild(ti);
  btn.myParam = obj.id;
  btn.addEventListener('click', toggleCard);
  divBtn.appendChild(btn);

  ti = document.createElement('i');
  ti.setAttribute('class', 'bx bx-sm bx-up-arrow-circle bx-fade-up');
  btn = document.createElement('button');
  btn.setAttribute('class', 'button btn-grow hide');
  btn.setAttribute('type', 'button');
  btn.appendChild(document.createTextNode('See Live '));
  btn.appendChild(ti);
  btn.myParam = obj.id;
  btn.addEventListener('click', openLive);
  divBtn.appendChild(btn);

  ti = document.createElement('i');
  ti.setAttribute('class', 'bx bx-sm bxl-github bx-flashing');
  btn = document.createElement('button');
  btn.setAttribute('class', 'button btn-grow hide');
  btn.setAttribute('type', 'button');
  btn.appendChild(document.createTextNode('See Source '));
  btn.appendChild(ti);
  btn.myParam = obj.id;
  btn.addEventListener('click', openSource);
  divBtn.appendChild(btn);

  const divInfo = document.createElement('div');
  divInfo.setAttribute('class', 'flex-container work-card-info-container');

  divInfo.appendChild(h3);
  divInfo.appendChild(ul);
  divInfo.appendChild(divDesc);
  divInfo.appendChild(divBtn);

  const section = document.createElement('section');
  section.setAttribute('id', `proj-${obj.id}`);
  section.setAttribute('class', 'flex-container work-card');
  section.appendChild(img);
  section.appendChild(divInfo);
  section.myToggle = false;

  tree.appendChild(section);
  const article = document.getElementById('my-recent-works-container');
  article.appendChild(tree);
}

async function fillProjectSection() {
  projs = await fetchJSON();

  fillProjectsHeading();

  for (let i = 0; i < projs.length; i += 1) {
    showCards(projs[i]);
  }
  document.getElementById('page-header').scrollIntoView();
}

function checkMediaIsBelow768(myMediaQuery) {
  if (myMediaQuery.matches) {
    ocultarMenu();
  }
}

for (let x = 0; x < document.getElementsByClassName('menu-item').length; x += 1) {
  document.getElementsByClassName('menu-item')[x].addEventListener('click', ocultarMenu, false);
}

myMediaQuery.addEventListener('change', checkMediaIsBelow768);
document.getElementById('hamburger-button').addEventListener('click', mostrarMenu);
document.getElementById('close-btn').addEventListener('click', ocultarMenu);
document.addEventListener('DOMContentLoaded', fillProjectSection);

window.onscroll = menuSticky;

const form = document.getElementById('contact');
const email = document.getElementById('email');
const eMessage = document.getElementById('error');

form.addEventListener('submit', (evt) => {
  if (email.value === email.value.toLowerCase()) {
    eMessage.textContent = '';
  } else {
    evt.preventDefault();
    eMessage.textContent = 'The email address must be in lowercase';
    eMessage.style.display = 'block';
  }
});

const nameIn = document.getElementById('name');
const message = document.getElementById('message');

form.addEventListener('input', () => {
  const valuesObj = {
    nameValue: nameIn.value,
    emailValue: email.value,
    textAreaValue: message.value,
  };
  localStorage.setItem('userFormDataCollected', JSON.stringify(valuesObj));
});

let getData = localStorage.getItem('userFormDataCollected');
getData = JSON.parse(getData);

if (getData != null) {
  nameIn.value = getData.nameValue;
  email.value = getData.emailValue;
  message.value = getData.textAreaValue;
}
