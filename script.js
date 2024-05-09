// Define a function in script.js
function myFunction() {
    console.log("clicked");
    window.open('https://www.linkedin.com/company/risereforming/', '_blank');
    //alert("Look, I know how to use JavaScript to make something happen.");
}

window.addEventListener('scroll', function() {
    console.log("scrolled");
    var header = document.querySelector('header');
    if (window.scrollY > 25) { // Change 50 to adjust when the header starts shrinking
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
