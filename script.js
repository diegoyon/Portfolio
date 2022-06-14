const mobile = document.querySelector('.mobile img');
const body = document.querySelector('body');

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

let projects = [
  {
    name: document.querySelector('.card1 h3'),
    description: 'Lorem Ipsum 1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImg: './images/card1img.png',
    technologies: document.querySelector('.card1 ul'),
    linkLive: 'https://google.com',
    linkSource: 'https://github.com',
  },
  {
    name: document.querySelector('.card2 h3'),
    description: 'Lorem Ipsum 2 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImg: './images/card1img.png',
    technologies: document.querySelector('.card2 ul'),
    linkLive: 'https://google.com',
    linkSource: 'https://github.com',
  },
  {
    name: document.querySelector('.card3 h3'),
    description: 'Lorem Ipsum 3 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImg: './images/card1img.png',
    technologies: document.querySelector('.card3 ul'),
    linkLive: 'https://google.com',
    linkSource: 'https://github.com',
  },
  {
    name: document.querySelector('.card4 h3'),
    description: 'Lorem Ipsum 4 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImg: './images/card1img.png',
    technologies: document.querySelector('.card4 ul'),
    linkLive: 'https://google.com',
    linkSource: 'https://github.com',
  },
  {
    name: document.querySelector('.card5 h3'),
    description: 'Lorem Ipsum 5 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImg: './images/card1img.png',
    technologies: document.querySelector('.card5 ul'),
    linkLive: 'https://google.com',
    linkSource: 'https://github.com',
  },
  {
    name: document.querySelector('.card6 h3'),
    description: 'Lorem Ipsum 6 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImg: './images/card1img.png',
    technologies: document.querySelector('.card6 ul'),
    linkLive: 'https://google.com',
    linkSource: 'https://github.com',
  }
]

let buttons = document.querySelectorAll('.card button');
buttons = [...buttons]; //turn nodelist to array
for(let i=0; i<buttons.length; i++){
  buttons[i].addEventListener('click', displaymodal);
}

function displaymodal(event){
  let modal = parseInt(event.srcElement.className.slice(-1))-1;

  const popupBackground = document.createElement('div');
  popupBackground.className = 'popup-background';
  body.appendChild(popupBackground);

  const popup = document.createElement('div');
  popup.className = 'popup';
  popupBackground.appendChild(popup);

  const modalimg = document.createElement('img');
  modalimg.src = projects[modal].featuredImg;
  popup.appendChild(modalimg)

  popup.appendChild(projects[modal].name);
  
  popup.appendChild(projects[modal].technologies);

  const paragraph = document.createElement('p');
  paragraph.innerText = projects[modal].description;
  popup.appendChild(paragraph);

  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'buttons-container';
  popup.appendChild(buttonsContainer);

  const button1 = document.createElement('a');
  button1.innerHTML = 'See Live';
  button1.href = projects[modal].linkLive;
  button1.className = 'button-modal';
  buttonsContainer.appendChild(button1);

  const button2 = document.createElement('a');
  button2.innerHTML = 'See Source';
  button2.href = projects[modal].linkSource;
  button2.className = 'button-modal';
  buttonsContainer.appendChild(button2);
}