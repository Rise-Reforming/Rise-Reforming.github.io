

// Function that controls scroll down from arrow on home page
document.addEventListener("DOMContentLoaded", function() {
    const downScroll = document.getElementById("home-learn-more");
    const targetSection = document.getElementById("home-sec4-wrap");
    const header = document.querySelector('header'); // Assuming your header element is <header>

    function scrollDown() {
        const headerHeight = header.offsetHeight; // Get the height of the header
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    }

    downScroll.addEventListener("click", scrollDown);
});

// Function that controls the fade in between pages
window.addEventListener('load', function() {
    document.body.classList.remove('fade-out');
    setTimeout(() => {
        document.body.classList.add('fade-in');
    }, 5); 
});

// Function that controls the up-sliding of new elements to the page
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.05 
    });

    const elements = document.querySelectorAll('.hidden');
    elements.forEach(element => {
        observer.observe(element);
    });
});


function addMarginIfSmallScreen() {
    const element = document.getElementById('home-arrows-img'); 
    if (window.innerWidth < 830) {
        element.style.marginTop = '50px';
    } else {
        element.style.marginTop = '0'; 
    }
}
window.onload = addMarginIfSmallScreen;
window.onresize = addMarginIfSmallScreen;


document.addEventListener("DOMContentLoaded", function() {
    const downScroll = document.getElementById("home-arrow2");
    const targetSection = document.getElementById("home-one-sol");
    const header = document.querySelector('header');

    function scrollDown() {
        const headerHeight = header.offsetHeight; 
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight + 15;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    }

    downScroll.addEventListener("click", scrollDown);
});