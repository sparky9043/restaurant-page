function updateContact(contentDiv) {
  if (contentDiv.firstChild) contentDiv.removeChild(contentDiv.firstChild);

  const contactContainer = document.createElement('div');
  const header = document.createElement('h2');
  const intro = document.createElement('p');

  contactContainer.classList.add('container');
  

  const contentArray = [header, intro];
  
  header.textContent = 'We have been in business since 1847';
  intro.textContent = 'To talk to us, please contact us via email at fake-restaurant@fake-email.net';

  for (const content of contentArray) {
    contactContainer.appendChild(content);
  }

  contentDiv.appendChild(contactContainer);
}

export default updateContact;