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