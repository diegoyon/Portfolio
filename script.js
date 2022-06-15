const mobile = document.querySelector('.mobile img');
const body = document.querySelector('body');

const projects = [
  {
    name: 'Project1',
    description: 'Lorem Ipsum 1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImg: './images/card1img.jpg',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    linkLive: 'https://google.com',
    linkSource: 'https://github.com',
  },
  {
    name: 'Project2',
    description: 'Lorem Ipsum 2 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImg: './images/card2img.jpg',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    linkLive: 'https://google.com',
    linkSource: 'https://github.com',
  },
  {
    name: 'Project3',
    description: 'Lorem Ipsum 3 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImg: './images/card3img.jpg',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    linkLive: 'https://google.com',
    linkSource: 'https://github.com',
  },
  {
    name: 'Project4',
    description: 'Lorem Ipsum 4 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImg: './images/card4img.jpg',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    linkLive: 'https://google.com',
    linkSource: 'https://github.com',
  },
  {
    name: 'Project5',
    description: 'Lorem Ipsum 5 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImg: './images/card5img.jpg',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    linkLive: 'https://google.com',
    linkSource: 'https://github.com',
  },
  {
    name: 'Project6',
    description: 'Lorem Ipsum 6 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImg: './images/card6img.jpg',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html', 'react', 'go'],
    linkLive: 'https://google.com',
    linkSource: 'https://github.com',
  },
];

function displaymenu() {
  const menu = document.createElement('div');
  menu.className = 'menu-attributes';

  const iconX = document.createElement('img');
  iconX.src = './images/IconX.png';
  iconX.className = 'iconx';
  iconX.addEventListener('click', () => { body.removeChild(menu); });

  const portfolio = document.createElement('a');
  portfolio.href = '#portfoliosection';
  portfolio.textContent = 'Portfolio';
  portfolio.className = 'menu-items';
  portfolio.addEventListener('click', () => { body.removeChild(menu); });

  const aboutme = document.createElement('a');
  aboutme.href = '#aboutmesection';
  aboutme.textContent = 'About';
  aboutme.className = 'menu-items';
  aboutme.addEventListener('click', () => { body.removeChild(menu); });

  const contact = document.createElement('a');
  contact.href = '#contactsection';
  contact.textContent = 'Contact';
  contact.className = 'menu-items';
  contact.addEventListener('click', () => { body.removeChild(menu); });

  menu.appendChild(iconX);
  menu.appendChild(portfolio);
  menu.appendChild(aboutme);
  menu.appendChild(contact);

  body.appendChild(menu);
}

mobile.addEventListener('click', displaymenu);

const gridContainer = document.querySelector('.grid-container');
for (let i = 0; i < projects.length; i += 1) {
  const card = document.createElement('div');
  card.className = `card card${i}`;

  const cardImage = document.createElement('img');
  cardImage.src = projects[i].featuredImg;
  cardImage.className = 'card-image';

  const description = document.createElement('div');
  description.className = 'description';

  const miniTitle = document.createElement('h3');
  miniTitle.innerHTML = projects[i].name;

  const technologiesContainer = document.createElement('ul');
  technologiesContainer.className = 'technologies-container';

  for (let j = 0; j < projects[i].technologies.length; j += 1) {
    const technologiesItem = document.createElement('li');
    technologiesItem.innerHTML = projects[i].technologies[j];
    technologiesContainer.appendChild(technologiesItem);
  }

  const buttonCard = document.createElement('button');
  buttonCard.innerHTML = 'See Project';
  buttonCard.classList = `btn${i + 1}`;

  gridContainer.appendChild(card);
  card.appendChild(cardImage);
  card.appendChild(description);
  description.appendChild(miniTitle);
  description.appendChild(technologiesContainer);
  description.appendChild(buttonCard);
}

function displaymodal(event) {
  const modal = event.srcElement.className.slice(-1) - 1;

  const popupBackground = document.createElement('div');
  popupBackground.className = 'popup-background';
  body.appendChild(popupBackground);

  const popup = document.createElement('div');
  popup.className = 'popup';
  popupBackground.appendChild(popup);

  const iconxModal = document.createElement('img');
  iconxModal.src = './images/iconx-modal.png';
  iconxModal.className = 'iconx-modal';
  iconxModal.addEventListener('click', () => { body.removeChild(popupBackground); });
  popup.appendChild(iconxModal);

  const modalimg = document.createElement('img');
  modalimg.src = projects[modal].featuredImg;
  modalimg.className = 'modalimg';
  popup.appendChild(modalimg);

  const titleContainer = document.createElement('div');
  titleContainer.className = 'title-container';
  popup.appendChild(titleContainer);

  const modaltitle = document.createElement('h2');
  modaltitle.innerText = projects[modal].name;
  modaltitle.className = 'modal-h2';
  titleContainer.appendChild(modaltitle);

  const technolist = document.createElement('ul');
  technolist.classList = 'modal-ul';
  popup.appendChild(technolist);

  for (let i = 0; i < projects[modal].technologies.length; i += 1) {
    const technoitem = document.createElement('li');
    technoitem.innerHTML = projects[modal].technologies[i];
    technoitem.classList = 'modal-li';
    technolist.appendChild(technoitem);
  }

  const paragraph = document.createElement('p');
  paragraph.innerText = projects[modal].description;
  paragraph.classList = 'modal-p';
  popup.appendChild(paragraph);

  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'buttons-container';
  popup.appendChild(buttonsContainer);

  const button1 = document.createElement('a');
  button1.innerHTML = 'See Live ';
  button1.href = projects[modal].linkLive;
  button1.className = 'button-modal';
  buttonsContainer.appendChild(button1);

  const liveImg = document.createElement('img');
  liveImg.className = 'icon-button';
  liveImg.src = './images/liveIcon.svg';
  button1.appendChild(liveImg);

  const button2 = document.createElement('a');
  button2.innerHTML = 'See Source';
  button2.href = projects[modal].linkSource;
  button2.className = 'button-modal';
  buttonsContainer.appendChild(button2);

  const sourceImg = document.createElement('img');
  sourceImg.className = 'icon-button';
  sourceImg.src = './images/sourceIcon.png';
  button2.appendChild(sourceImg);

  const buttonsContainer2 = document.createElement('div');
  buttonsContainer2.className = 'buttons-container2';
  titleContainer.appendChild(buttonsContainer2);

  const button3 = document.createElement('a');
  button3.innerHTML = 'See Live';
  button3.href = projects[modal].linkLive;
  button3.className = 'button-modal2';
  buttonsContainer2.appendChild(button3);

  const liveImg2 = document.createElement('img');
  liveImg2.className = 'icon-button';
  liveImg2.src = './images/liveIcon.svg';
  button3.appendChild(liveImg2);

  const button4 = document.createElement('a');
  button4.innerHTML = 'See Source';
  button4.href = projects[modal].linkSource;
  button4.className = 'button-modal2';
  buttonsContainer2.appendChild(button4);

  const sourceImg2 = document.createElement('img');
  sourceImg2.className = 'icon-button';
  sourceImg2.src = './images/sourceIcon.png';
  button4.appendChild(sourceImg2);
}

let buttons = document.querySelectorAll('.card button');
buttons = [...buttons]; // turn nodelist to array
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', displaymodal);
}

function isUpper(str) {
  return !/^[a-z]*$/.test(str) && /[A-Z]/.test(str);
}

const form = document.getElementById('form');
const { email } = form.elements;
const message = document.querySelector('small');

function checkEmail(event) {
  if (isUpper(event.target.value)) {
    message.classList = 'active';
    message.innerText = 'ERROR: email address should be in lowercase.';
    email.setCustomValidity('Email address should be in lowercase');
  } else {
    message.innerText = '';
    message.classList = '';
    email.setCustomValidity('');
  }
}

email.addEventListener('input', checkEmail);