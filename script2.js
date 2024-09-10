
// Function to scroll down on learn home from home page
document.addEventListener("DOMContentLoaded", function() {
    const homeButton = document.getElementById("home-button");

    function scrollDownOnePage() {
        window.scrollBy({
            top: window.innerHeight,
            behavior: "smooth" 
        });
    }

    homeButton.addEventListener("click", scrollDownOnePage);
});


// Function to reinstate header background on scroll
/*
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header'); 
    const scrollTrigger = 100; 

    window.addEventListener("scroll", function() {
        if (window.scrollY > scrollTrigger) {
            header.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.6)";
            header.style.backgroundImage = "url('images/crystalgif.gif')";
        } else {
            header.style.boxShadow = "none";
            header.style.backgroundImage = "none";
        }
    });
});
*/

// Function that controls scroll down from arrow on home page (old)
/*
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
*/

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


// Function to make Tech top section disappear smoothly and switch images in it
document.addEventListener("DOMContentLoaded", function() {
    const targetText1 = document.getElementById("tech-title-txt");
    const targetText2 = document.getElementById("tech-im1");
    const scrollTriggerPoint = 175;
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


// Function for parallax scroll of tech title background
document.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;
    const backgroundElement = document.getElementById("tech-title");
    backgroundElement.style.transform = `translateY(${-scrollPosition * 0.2}px)`;
});


document.addEventListener("DOMContentLoaded", function() {
    const descText = document.getElementById("tech-sec4-desc");
    const images = document.querySelectorAll("#tech-sec4-modules img");
    
    const descriptions = {
        "tech-scalable": "<strong>Scalable:</strong> Scaling up production is as easy as stacking two of our shipping containers together.",
        "tech-capex": "<strong>Lower CAPEX:</strong> Compared to large chemical plants that often cost hundreds of millions to set up, Rise Refroming's modules are extremely low cost.",
        "tech-deploy": "<strong>Rapid Deployment:</strong> Our modules can be easily shipped on the back of an 18 wheeler, and can be deployed in as little time as just a few days.",
        "tech-reach": "<strong>Greater Reach:</strong> Our modules can be placed directly on the site of plastic waste producers, eliminating the need to transport feedstock.",
        "tech-lowrisk": "<strong>Low Risk:</strong> If one module fails, problems are contained to that single module, and others can continue production."
    };

    let autoCycleInterval;
    let isHovering = false;
    let currentImageIndex = 0;

    function showDescription(id) {
        const desc = descriptions[id];
        const img = document.getElementById(id);
        
        // Set the text and scale the icon
        if (desc) {
            descText.style.opacity = 0;
            setTimeout(() => {
                descText.innerHTML = desc;
                descText.style.opacity = 1;
            }, 300);

            // Scale the icon
            images.forEach(image => image.style.transform = 'scale(1)');
            img.style.transform = 'scale(1.5)';
        }
    }

    // Function to handle automatic cycling of descriptions
    function autoCycleDescriptions() {
        const imageIds = Object.keys(descriptions);

        autoCycleInterval = setInterval(function() {
            if (!isHovering) {
                currentImageIndex = (currentImageIndex + 1) % imageIds.length;
                showDescription(imageIds[currentImageIndex]);
            }
        }, 4000); // Switch every 4 seconds
    }

    // Start the auto cycle on page load
    autoCycleDescriptions();

    // Handle mouse enter and leave events for icons
    images.forEach(img => {
        img.addEventListener("mouseenter", function() {
            isHovering = true;
            clearInterval(autoCycleInterval); // Stop auto-cycling while hovering
            showDescription(img.id);
        });

        img.addEventListener("mouseleave", function() {
            isHovering = false;
            descText.style.opacity = 0;
            setTimeout(() => {
                descText.innerHTML = "Hover on icons<br>to learn more.";
                descText.style.opacity = 1;
                images.forEach(image => image.style.transform = 'scale(1)'); // Reset scale
            }, 300);

            // Restart auto cycling after leaving
            autoCycleDescriptions();
        });
    });
});
