import updateHome from "./home";
import updateMenu from "./menu";
import updateAbout from "./about";
import './style.css';

const enableUI = (function() {
  const buttons = document.querySelectorAll('.header button');
  const content = document.querySelector('#content');
  
  var currentPage = 'home';
  updateHome(content);

  const disableButtons = (buttons) => {
    for (const button of buttons) {
      button.disabled = button.id === currentPage ? true : false;
    }
  }

  disableButtons(buttons);


  buttons.forEach(button => button.addEventListener('click', function(event) {
    const target = event.target;

    if (target.id.includes('home') && currentPage !== 'home') {
      currentPage = 'home';
      updateHome(content);
    } else if (target.id.includes('menu') && currentPage !== 'menu') {
      currentPage = 'menu';
      updateMenu(content);
    } else if (target.id.includes('about') && currentPage !== 'about') {
      currentPage = 'about';
      updateAbout(content);
    }

    disableButtons(buttons);
  }));

})();