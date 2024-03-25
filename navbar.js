// SCROLLED NAVIGATION --------------------------------------------
// Function to check if page is scrolled and adjust the logo size
function checkScroll() {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    let scrollPosition = window.scrollY;

    const video = document.querySelector('video');
    const noise = document.getElementById('noise');
    const home = document.getElementById('home');

    const logoFontSize = window.getComputedStyle(logo).fontSize;
  
//  Add/Remove 'scrolled' class based on scroll position
    if (scrollPosition > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    if (scrollPosition > 1950) {
        video.classList.add('hide-video');
        noise.classList.add('hide-video');
        home.classList.add('darkBackground');
    } else {
        video.classList.remove('hide-video');
        noise.classList.remove('hide-video');
        home.classList.remove('darkBackground');
    }

    // Calculate new font size based on scroll position
    let newSize = 2.5 - (scrollPosition * 0.03); // Decrease by 0.03 rem for every 1px scrolled

    // Clamping the font size between 1.5rem and 3rem
    newSize = Math.max(1.5, newSize);
    newSize = Math.min(3, newSize);

    logo.style.fontSize = newSize + 'rem';
}
  
// Event Listener to check scroll position
window.addEventListener('scroll', checkScroll);
// -------------------------------------------------------