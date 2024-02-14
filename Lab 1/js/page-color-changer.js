/* Group members names:- Hasti Donga 
                         Sarina Poudel
                         Sugam Khanal
We have finished the lab's requirements and included a new function that modifies the color of the h1 tag and body element.*/

document.addEventListener('DOMContentLoaded', function() {
    
    // Declare and initialize constants for input slider elements
    const sliderofRed = document.getElementById('red');
    const sliderofGreen = document.getElementById('green');
    const sliderofBlue = document.getElementById('blue');

    const bodyElement = document.body;
    const h1Element = document.querySelector('h1');

    function handleSliderChange() {
        updateBackgroundColor();
        updateTextColor();
    }

    // Function to update background color based on slider values
    function updateBackgroundColor() {
        const valueofRed = sliderofRed.value;
        const valueofGreen = sliderofGreen.value;
        const valueofBlue = sliderofBlue.value;

        const rgbColor = `rgb(${valueofRed}, ${valueofGreen}, ${valueofBlue})`;

        bodyElement.style.backgroundColor = rgbColor;
    }

     // Function to update text color based on slider values
    function updateTextColor() {
        const valueofRed = parseInt(sliderofRed.value);
        const valueofGreen = parseInt(sliderofGreen.value);
        const valueofBlue = parseInt(sliderofBlue.value);
        const brightness = (valueofRed * 299 + valueofGreen * 587 + valueofBlue * 114) / 1000;

        // Set text color based on brightness for body text
        if (brightness > 125) {
            bodyElement.style.color = "black";
        } else {
            bodyElement.style.color = "white";
        }

        // Set text color based on brightness for h1
        if (brightness > 125) {
            h1Element.style.color = "blue"; 
        } else {
            h1Element.style.color = "orange"; 
        }
    }

    // Attach event listeners to sliders
    sliderofRed.addEventListener('input', handleSliderChange);
    sliderofGreen.addEventListener('input', handleSliderChange);
    sliderofBlue.addEventListener('input', handleSliderChange);
});
