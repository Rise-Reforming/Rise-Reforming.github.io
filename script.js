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
    if (window.scrollY > 25) { // Change 25 to adjust when the header starts shrinking
        header.classList.add('minimized');
    } else {
        header.classList.remove('minimized');
    }
});

// Add an event listener to the button
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myButton").addEventListener("click", function() {
        myFunction(); // Call the function when the button is clicked
    });
});




