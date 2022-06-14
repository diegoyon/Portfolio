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
    name: 'Project1',
    description: 'Lorem Ipsum 1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImg: './images/card1img.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    linkLive: 'https://google.com',
    linkSource: 'https://github.com',
  },
  {
    name: 'Project1',
    description: 'Lorem Ipsum 2 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImg: './images/card1img.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    linkLive: 'https://google.com',
    linkSource: 'https://github.com',
  },
  {
    name: 'Project1',
    description: 'Lorem Ipsum 3 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImg: './images/card1img.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    linkLive: 'https://google.com',
    linkSource: 'https://github.com',
  },
  {
    name: 'Project1',
    description: 'Lorem Ipsum 4 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImg: './images/card1img.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    linkLive: 'https://google.com',
    linkSource: 'https://github.com',
  },
  {
    name: 'Project1',
    description: 'Lorem Ipsum 5 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImg: './images/card1img.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    linkLive: 'https://google.com',
    linkSource: 'https://github.com',
  },
  {
    name: 'Project1',
    description: 'Lorem Ipsum 6 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImg: './images/card1img.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
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

const gridContainer = document.querySelector('.grid-container');
for (let i = 0; i < projects.length; i++) {
  const card1 = document.createElement('div');
  card1.className = 'card card'+i;
  const description = document.createElement('div');
  description.className = 'description';
  const miniTitle = document.createElement('h2');
  miniTitle.innerText = projects[i].name;
  const technologies2 = document.createElement('ul');
  const rubyOnRails = document.createElement('li');
  rubyOnRails.innerText = projects[i].technologies[0];
  const css = document.createElement('li');
  css.innerText = projects[i].technologies[1];
  const javaScript = document.createElement('li');
  javaScript.innerText = projects[i].technologies[2];
  const html = document.createElement('li');
  html.innerText = projects[i].technologies[3];
  const buttonCard1 = document.createElement('button');
  

  gridContainer.appendChild(card1);
  card1.appendChild(description);
  description.appendChild(miniTitle);
  description.appendChild(technologies2);
  technologies2.appendChild(rubyOnRails);
  technologies2.appendChild(css);
  technologies2.appendChild(javaScript);
  technologies2.appendChild(html);
  description.appendChild(buttonCard1);
}