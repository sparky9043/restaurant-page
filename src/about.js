function updateAbout(contentDiv) {
  if (contentDiv.firstChild) contentDiv.removeChild(contentDiv.firstChild);

  const aboutContainer = document.createElement('div');
  const header = document.createElement('h2');
  const intro = document.createElement('p');

  aboutContainer.classList.add('container');
  

  const contentArray = [header, intro];
  
  header.textContent = 'We have been in business since 1847';
  intro.textContent = 'To talk to us, please contact us via email at fake-restaurant@fake-email.net';

  for (const content of contentArray) {
    aboutContainer.appendChild(content);
  }

  contentDiv.appendChild(aboutContainer);
}

export default updateAbout;