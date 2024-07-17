function updateMenu(contentDiv) {
  if (contentDiv.firstChild) contentDiv.removeChild(contentDiv.firstChild);

  const menuContainer = document.createElement('div');
  const header = document.createElement('h2');
  const intro = document.createElement('p');

  const foodOneImg = document.createElement('img');
  const foodOneText = document.createElement('p');

  menuContainer.classList.add('container', 'menu-grid');
  header.classList.add('menu__title');
  intro.classList.add('menu__intro');

  foodOneImg.classList.add('menu__foodOne--img');
  foodOneText.classList.add('menu__foodOne--text');

  foodOneText.textContent = 'Cafe au lait $8.00';


  const contentArray = [header, intro, foodOneImg, foodOneText];
  
  header.textContent = 'This is the menu!';
  intro.textContent = 'Take a look at how cheap and affordable it is!';

  for (const content of contentArray) {
    menuContainer.appendChild(content);
  }

  contentDiv.appendChild(menuContainer);
}

export default updateMenu;