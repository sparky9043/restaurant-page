import updateHome from "./home";
import updateMenu from "./menu";
import updateAbout from "./about";
import './style.css';

const enableUI = (function() {
  const buttons = document.querySelectorAll('.header button');
  const content = document.querySelector('#content');
  
  var currentPage;

  buttons.forEach(button => button.addEventListener('click', function(event) {
    const target = event.target;

    if (target.id.includes('home') && currentPage !== 'home') {
      currentPage = 'home';
      updateHome(content);
      console.log(currentPage + ' loaded');
    } else if (target.id.includes('menu') && currentPage !== 'menu') {
      currentPage = 'menu';
      updateMenu(content);
      console.log(currentPage + ' loaded');
    } else if (target.id.includes('about') && currentPage !== 'about') {
      currentPage = 'about';
      updateAbout(content);
      console.log(currentPage + ' loaded');
    }
    
  }));

})();