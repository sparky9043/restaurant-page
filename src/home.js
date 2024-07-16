function updateHome(contentDiv) {
  if (contentDiv.firstChild) contentDiv.removeChild(contentDiv.firstChild);

  const homeContainer = document.createElement('div');
  const header = document.createElement('h2');
  const intro = document.createElement('p');

  homeContainer.classList.add('container');
  

  const contentArray = [header, intro];
  
  header.textContent = 'Bienvenue dans mon restaurant!';
  intro.textContent = 'This restaurant has been in my family for generations since its conception in 1867!';

  for (const content of contentArray) {
    homeContainer.appendChild(content);
  }

  contentDiv.appendChild(homeContainer);
}

export default updateHome;