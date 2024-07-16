import updateHome from "./home";
import updateMenu from "./menu";
import updateAbout from "./about";

const enableUI = (function() {
  const buttons = document.querySelectorAll('.header button');

  buttons.forEach(button => button.addEventListener('click', function(event) {
    const id = event.target.id;

    if (id.includes('home')) {
      console.log(id);
    } else if (id.includes('menu')) {
      console.log(id);
    } else if (id.includes('about')) {
      console.log(id);
    }
    
  }));
})();