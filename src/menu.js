function updateMenu(contentDiv) {
  if (contentDiv.firstChild) contentDiv.removeChild(contentDiv.firstChild);

  const menuContainer = document.createElement('div');
  const header = document.createElement('h2');
  const intro = document.createElement('p');

  menuContainer.classList.add('container');
  

  const contentArray = [header, intro];
  
  header.textContent = 'This is the menu!';
  intro.textContent = 'Take a look at how cheap and affordable it is!';

  for (const content of contentArray) {
    menuContainer.appendChild(content);
  }

  contentDiv.appendChild(menuContainer);
}

export default updateMenu;