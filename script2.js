

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


// Function to change margin above arrows image on the home page
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


// Function to scroll on click to bottom of home
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


// Function to scroll down to advisors of team page
document.addEventListener("DOMContentLoaded", function() {
    const downScroll = document.getElementById("team-see-advisors");
    const targetSection = document.getElementById("team-advisors");
    const header = document.querySelector('header');

    function scrollDown() {
        const headerHeight = header.offsetHeight; 
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight + 15;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
        downScroll.style.opacity = 0;
    }

    downScroll.addEventListener("click", scrollDown);
});


// Function to make Impact title disappear smoothly
document.addEventListener("DOMContentLoaded", function() {
    const targetText = document.getElementById("impact-title-main");
    const scrollTriggerPoint = 30; 

    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;

        if (scrollPosition > scrollTriggerPoint) {
            targetText.style.opacity = 0; 
        } else {
            targetText.style.opacity = 1;
        }
    });
});


// Function for parallax scroll of impact background
document.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;
    const backgroundElement = document.getElementById("impact-title");
    backgroundElement.style.transform = `translateY(${-scrollPosition * 0.2}px)`;
});

/*
// Function to make Tech top section disappear smoothly
document.addEventListener("DOMContentLoaded", function() {
    const targetText1 = document.getElementById("tech-title-txt");
    const targetText2 = document.getElementById("tech-im1");
    const scrollTriggerPoint = 60; 

    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;

        if (scrollPosition > scrollTriggerPoint) {
            targetText1.style.opacity = 0; 
            targetText2.style.opacity = 0; 
        } else {
            targetText1.style.opacity = 1;
            targetText2.style.opacity = 1;
        }
    });
});

// Function to switch images on the tech page top
document.addEventListener("DOMContentLoaded", function() {
    const techIm1 = document.getElementById("tech-im1");
    const images = [
        'images/bag_processed.jpg',
        'images/dme-ball-s.png'
    ];
    let currentImageIndex = 0;

    setInterval(function() {
        techIm1.style.opacity = 0;

        setTimeout(function() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            techIm1.style.backgroundImage = `url(${images[currentImageIndex]})`;
            techIm1.style.opacity = 1;
        }, 1500); // transition time
    }, 5000); // wait time
});
*/

// Function to make Tech top section disappear smoothly and switch images in it
document.addEventListener("DOMContentLoaded", function() {
    const targetText1 = document.getElementById("tech-title-txt");
    const targetText2 = document.getElementById("tech-im1");
    const scrollTriggerPoint = 60;
    let isHidden = false;

    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;

        if (scrollPosition > scrollTriggerPoint) {
            targetText1.style.opacity = 0;
            targetText2.style.opacity = 0;
            isHidden = true; 
        } else {
            targetText1.style.opacity = .9;
            targetText2.style.opacity = .9;
            isHidden = false; 
        }
    });

    const images = [
        'images/bag_processed.jpg',
        'images/dme-ball-s.png'
    ];
    let currentImageIndex = 0;

    setInterval(function() {
        if (!isHidden) { 
            targetText2.style.opacity = 0;

            setTimeout(function() {
                currentImageIndex = (currentImageIndex + 1) % images.length;
                targetText2.style.backgroundImage = `url(${images[currentImageIndex]})`;
                targetText2.style.opacity = .9;
            }, 1500); // transition time
        }
    }, 5000); // wait time
});


// Function for parallax scroll of impact background
document.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;
    const backgroundElement = document.getElementById("tech-title");
    backgroundElement.style.transform = `translateY(${-scrollPosition * 0.2}px)`;
});