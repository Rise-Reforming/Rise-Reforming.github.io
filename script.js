// Code to create smooth page fade outs 
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevent default navigation behavior
        event.preventDefault();
        
        // Fade out the body by adding fade-out class
        document.body.classList.add('fade-out');
        
        // Wait for the transition to complete, then navigate to the new page
        setTimeout(() => {
            window.location.href = link.href;
        }, 500); // Adjust the time to match the transition duration
    });
});

// Trigger the fade-in effect after a delay when the new page content is fully loaded
window.addEventListener('load', function() {
    // Remove fade-out class to reset opacity to 1
    document.body.classList.remove('fade-out');
    // Add fade-in class after a short delay to trigger the transition effect
    setTimeout(() => {
        document.body.classList.add('fade-in');
    }, 5); // Adjust the delay as needed
});

// Define a function in script.js
function myFunction() {
    console.log("clicked");
    window.open('https://www.linkedin.com/company/risereforming/', '_blank');
    //alert("Look, I know how to use JavaScript to make something happen.");
}

window.addEventListener('scroll', function() {
    console.log("scrolled");
    var header = document.querySelector('header');
    var logos = document.querySelectorAll('.logo img'); // Select the logo image

    if (window.scrollY > 25) { // Change 25 to adjust when the header starts shrinking
        header.classList.add('minimized');
        header.style.opacity = '1';
        logos.forEach(function(logo) {
            logo.style.height = '40px'; // Adjust the height of each logo image
        });
    } else {
        header.classList.remove('minimized');
        header.style.opacity = '.8';
        logos.forEach(function(logo) {
            logo.style.height = '100px'; // Adjust the height of each logo image
        });
    }
});

// Add an event listener to the button
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myButton").addEventListener("click", function() {
        myFunction(); // Call the function when the button is clicked
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Stop observing once the element is in view
            }
        });
    }, {
        threshold: 0.05 // Adjust this threshold to control when the animations trigger
    });

    const elements = document.querySelectorAll('.hidden');
    elements.forEach(element => {
        observer.observe(element);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const header2 = document.querySelector('header2');

    function checkWidth() {
        if (window.innerWidth < 900) { 
            header.classList.add('invis');
            header2.classList.remove('invis');
            document.getElementById('main1').style.padding = '120px';
        } else {
            header.classList.remove('invis');
            header2.classList.add('invis');
            document.getElementById('main1').style.padding = '200px';
        }
    }

    // Check width on page load
    checkWidth();

    // Add event listener to monitor resize
    window.addEventListener('resize', checkWidth);
});

window.addEventListener('scroll', function() {
    console.log("scrolled");
    var header2 = document.querySelector('header2');
    //var logos = document.querySelectorAll('.logo img'); // Select the logo image

    if (window.scrollY > 25) { // Change 25 to adjust when the header starts shrinking
        header2.classList.add('minimized');
        document.getElementById('head2').style.marginLeft = '65px';
        header2.style.opacity = '1';
    } else {
        header2.classList.remove('minimized');
        document.getElementById('head2').style.marginLeft = '45px';
        header2.style.opacity = '.8';
    }
});



let texts = ["Tomorrow's Value", "Today's Waste"]; // Array of texts to cycle through
let currentIndex = 0; // Index of the current text
const pElement = document.querySelector('.custom-p1');

// Function to switch text
function switchText() {
    pElement.classList.add('hidden');
    setTimeout(() => {
        pElement.textContent = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length; // Move to the next text
        setTimeout(() => {
            pElement.classList.remove('hidden');
        }, 100); // Wait 0.2 seconds before fading in
    }, 800); // Match this value with the transition duration
}

// Start timer for auto-switching text
setInterval(switchText, 4000); // Change text every 3 seconds


document.addEventListener('DOMContentLoaded', () => {

    function checkWidth() {
        if (window.innerWidth < 800) { 
            document.getElementById('titletext').style.fontSize = '60px';
        } else {
            document.getElementById('titletext').style.fontSize = '90px';
        }
    }

    // Check width on page load
    checkWidth();

    // Add event listener to monitor resize
    window.addEventListener('resize', checkWidth);
});

function adjustTextSize() {
    const element0 = document.getElementById('tech1p');
    const element1 = document.getElementById('tech-bg');
    const element2 = document.getElementById('tech2txt1');
    if (window.matchMedia('(max-width: 1400px)').matches) {
        element0.style.fontSize = '45px'; // Change to the desired smaller font size
    } else {
        element0.style.fontSize = '60px'; // Change to the original font size
    }
    /*
    if (window.matchMedia('(max-width: 600px)').matches) {
        element1.style.height = '600px'; 
    } else {
        element1.style.height = '500px'; 
    } */
    if (window.matchMedia('(max-width: 800px)').matches) {
        element2.style.marginTop = '0px'; 
    } else {
        element2.style.marginTop = '-130px'; 
    }
}

adjustTextSize();
window.addEventListener('resize', adjustTextSize);
