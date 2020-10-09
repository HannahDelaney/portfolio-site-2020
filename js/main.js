const navToggle = document.querySelector('.navtoggle');
const header = document.querySelector('.header');

navToggle.addEventListener('click', function(e){
  e.preventDefault();
  header.classList.toggle('open');
})

header.classList.remove('no-js');
