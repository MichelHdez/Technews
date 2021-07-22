//Evento click para menu 
document.querySelector('.menu-btn').addEventListener('click', () =>{
	document.querySelector('.nav-menu').classList.toggle('show');
});

//Evento ScrollReveal 
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay:500 });
ScrollReveal().reveal('.banner-one', { delay:500 });
ScrollReveal().reveal('.banner-two', { delay:500 });