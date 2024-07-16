function updateHome(contentDiv) {
  if (contentDiv.firstChild) contentDiv.removeChild(contentDiv.firstChild);

  const homeContainer = document.createElement('div');
  const header = document.createElement('h2');
  const intro = document.createElement('p');

  const contentArray = [header, intro];

  homeContainer.classList.add('container');
  
  header.textContent = 'Bienvenue dans mon restaurant!';
  intro.textContent = 'This restaurant has been in my family for generations since its conception in 1867! We hope you enjoy our food as much as we do making it!';

  for (const content of contentArray) {
    homeContainer.appendChild(content);
  }

  contentDiv.appendChild(homeContainer);
}

export default updateHome;