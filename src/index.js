import updateHome from "./home";
import updateMenu from "./menu";
import updateAbout from "./about";

const enableUI = (function() {
  const buttons = document.querySelectorAll('.header button');
  const content = document.querySelector('#content');

  buttons.forEach(button => button.addEventListener('click', function(event) {
    const id = event.target.id;

    if (id.includes('home')) {
      updateHome(content);
    } else if (id.includes('menu')) {
      updateMenu(content);
    } else if (id.includes('about')) {
      updateAbout(content);
    }
    
  }));
})();