  const openMenu = document.getElementById("open-menu");
  const closeMenu = document.getElementById("close-menu");
  const navList = document.querySelector(".nav-list ul");

  openMenu.addEventListener("click", () => {
    navList.style.display = "flex";       
    openMenu.style.display = "none";      
    closeMenu.style.display = "block";    
  });

  closeMenu.addEventListener("click", () => {
    navList.style.display = "none";       
    openMenu.style.display = "block";     
    closeMenu.style.display = "none";     
  });

var typed1 = new Typed('#types-js', {
    strings: ['Web Devloper.', ' Web Designer.'],
    typeSpeed: 50,
});

// Scroll
  ScrollReveal().reveal('.reveal', {
    duration: 1000,     
    distance: '50px',   
    easing: 'ease-in-out',
    origin: 'top', 
    once: false
  });

 ScrollReveal().reveal('.border-bottom', {
    duration: 1000,
    distance: '50px',
    easing: 'ease-in-out',
    origin: 'left',
    reset: true 
  });
