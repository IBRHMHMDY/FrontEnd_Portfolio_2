/*=============== SHOW HIDE MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById('nav-close')

/* Validate if Close Menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
       navMenu.classList.add('show-menu')
   })
}
/* Validate if Show Menu */
if(navClose){
   navClose.addEventListener('click', () =>{
       navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/
let projects = new Swiper('.projects__container', {
   // Optional parameters
   loop: true,
   slidesPerView: 1,
   spaceBetween: 24,
   centeredSlides: true,
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   },
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
   breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
 });

/*=============== SWIPER TESTIMONIAL ===============*/
 let testimonials = new Swiper(".testimonials__container", {
   grapCursor: true,
   autoPlay: true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactProject = document.getElementById('contact-project');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
   e.preventDefault();

   if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
      contactMessage.classList.remove('color-blue');
      contactMessage.classList.add('color-red');
      contactMessage.textContent = 'Write all the input fields'
   }else{
      // 'ServicID','TemplateID',#Form, Public_Key
      emailjs.sendForm('service_uhlkd7s','template_m8l7f2b','#contact-form','PjcosSn95r91RE5bi')
      .then(()=>{
         contactMessage.classList.add('color-blue');
         contactMessage.textContent = 'Message Sent';

         setTimeout(() => {
            contactMessage.textContent = '';
         }, 5000);
      }, (error) => {
         alert('OOPS! SOMTHING HAS FAILED', error);
      });
      contactName.value =''
      contactEmail.value = ''
      contactProject.value = ''
   }
}
contactForm.addEventListener('submit', sendEmail);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
   const scrollUp = document.getElementById('scroll-up')
   // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
   this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                 : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-sun-line' : 'ri-moon-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
   const header = document.getElementById('header')
   // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
   this.scrollY >= 50 ? header.classList.add('bg-header') 
                      : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 400,
   reset: true
})

sr.reveal(`.home__data, .projects__container, .testimonials__container, .footer__container`)
sr.reveal(`.home__info div`, {delay: 600, origin: 'bottom', interval: 100})
sr.reveal(`.skills__container .content__right`, {origin: 'right'})
sr.reveal(`.skills__container .content__left`, {origin: 'left'})
sr.reveal(`.qualification__container .content__left`, {origin: 'left'})
sr.reveal(`.qualification__container .content__right`, {origin: 'right'})
sr.reveal(`.services__card`, {interval: 100})
sr.reveal(`.contact__container .content__left`, {origin: 'left'})
sr.reveal(`.contact__container .content__right`, {origin: 'right'})


