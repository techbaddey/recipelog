// dropdown for table of content of blogs and recipes

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');

  select.addEventListener('click', () => {
   select.classList.toggle('select-clicked');
   caret.classList.toggle('caret-rotate');
   menu.classList.toggle('menu-open');
  });

  options.forEach(option => {
   option.addEventListener('click', () => {
     select.classList.remove('select-clicked');
     caret.classList.remove('caret-rotate');
     menu.classList.remove('menu-open');

    });
   
  });

});