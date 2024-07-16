import updateHome from "./home";
import updateMenu from "./menu";
import updateAbout from "./about";
import './style.css';

const enableUI = (function() {
  const buttons = document.querySelectorAll('.header button');
  const content = document.querySelector('#content');

  buttons.forEach(button => button.addEventListener('click', function(event) {
    const target = event.target;

    if (target.id.includes('home')) {
      updateHome(content);
    } else if (target.id.includes('menu')) {
      updateMenu(content);
    } else if (target.id.includes('about')) {
      updateAbout(content);
    }
    
  }));

})();