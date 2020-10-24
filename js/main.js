console.log(navigator.userAgent);

const navToggle = document.querySelector('.navtoggle');
const header = document.querySelector('.header');

navToggle.addEventListener('click', function(e){
  e.preventDefault();
  header.classList.toggle('open');
})

header.classList.remove('no-js');




$('.header-home').fixx({
  endElement:'.footer',
  placeholder: false
});

const navHeight = header.offsetHeight;

$('.placehold-head').css("height", navHeight);

$('.svg-banner-wrapper').css("height", `calc(100vh - ${navHeight}px)`);

const caseTitle = document.querySelector('.case-title');

if (caseTitle) {
  const titleHeight = caseTitle.offsetHeight;
  $('.case-banner').css("height", `calc(100vh - ${titleHeight + navHeight}px)`);
}
