const typed = new Typed('.auto-type',{
    strings:['Frontend developer'],
    typeSpeed:100,
});

// ==================change background =========== 
function scrollHeader(){
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height , add the xcroll-header class to the header tag
    if(this.scrollY>=50){
        header.classList.add('scroll-header');
    } 
    else{
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll',scrollHeader);

// ===================SERVICES MODAL=================

const modalViews = document.querySelectorAll('.services__modal'),
     modalBtns = document.querySelectorAll('.services__button'),
     modalClose=document.querySelectorAll('.services__modal');

let modal =function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((mb,i)=>{
    mb.addEventListener('click',()=>{
        modal(i)
    })
})
modalClose.forEach((mc)=>{
    mc.addEventListener('click',()=>{
        modalViews.forEach((mv)=>{
            mv.classList.remove('active-modal');
        })
    })
})
/* link : https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa2dnM1AwS2N0YU0xSFVfbGViUkFVajlQeWlMUXxBQ3Jtc0trYWF0TEN2MTVJZUNRMEhRcFNnOWpOQXVMcDVqcTBCMGdxNVRQbVJrNmpvQTR4Ql9XenVTd1d5UktnWEwyeGlzNTBWUEd3N0pPdDhMbWRVVVBxSGZNZjNkczNFTm9wVGFjTTNsNHU1WE5kV0ZsU2xCMA&q=https%3A%2F%2Fwww.kunkalabs.com%2Fmixitup%2F&v=oy8dSsK57Ps */

// ================MIXITUP FILTER PORTFOLIO===============
let mixerPortfolio= mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

// link active work 
const linkwork = document.querySelectorAll('.work__item')
function activeWork(){
    linkwork.forEach(l=>l.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkwork.forEach(l=>l.addEventListener('click',activeWork));
//IMG SCRIPT FOR GALLERY

var fullimgbox = document.getElementById("fullimgbox");
var fullimg = document.getElementById("fullimg");

function openfullimg(pic){
    fullimgbox.style.display="flex";
    fullimg.src=pic
}
function closefullimg(){
    fullimgbox.style.display="none";
}









// ===============================SWIPER TESTIMONILA=============
let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop:true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 48,
        },
       
      },
  });
// ==========================SCROLL SECTIONS ACTIVE LINKS=====================
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
              console.log(sectionId)

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


//light theme

const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// ===================Scroll reveal animation ========================

const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true,
    
})
sr.reveal('.home__data')
sr.reveal('.home__handle',{delay:700})
sr.reveal('.home__social, .home__scroll',{delay:900,origin:'bottom'})


// =======================================EmailJS===============================

//emailjs link:https://www.emailjs.com/

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')
const sendEmail = (e)=>{
    e.preventDefault()
  //serviceID-templateID-#form-publickey
    emailjs.sendForm('service_nzl5dts','template_yhl0bao','#contact-form','K0ALCamcrzA9Jw3Rc')
        .then(()=>{
            //show sent message
            contactMessage.textContent = 'Message sent successfully ✅'

            //timeout
            setTimeout(()=>{
                contactMessage.textContent=''
            },2000)
            //clear input
            contactForm.reset()
        },()=>{
            //show error message
            contactMessage.textContent='Message not sent (service error) ❌'
        })
      
}

  
contactForm.addEventListener('submit',sendEmail)
