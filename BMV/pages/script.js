// Select the 'No' button, 'Yes' button, and the GIF element
const noButton = document.querySelector('.btn--no');
const yesButton = document.querySelector('.btn--yes');
const gifElement = document.getElementById('gif');

// Initialize sizes for the 'Yes' button and GIF
let yesSize = 16; // Initial font size for the 'Yes' button
let gifSize = 100; // Initial percentage width for the GIF
let clickCount = 0; // Count for 'No' button clicks

// Array of local GIFs
const gifs = [
    "pages/img/gojo-satoru-gojo.gif",
    "pages/img/gojo-gojo-satoru.gif",
    "pages/img/jujutsu-kaisen-gojo.gif",
    "pages/img/gojofym.gif",
    "pages/img/gojo-jjk.gif", 
    "pages/img/gojo-satoru-did-you-pray-today.gif",
    "pages/img/satoru-gojo-gojo-satoru.gif",
    "pages/img/gojo-satoru-gojo (1).gif",
    "pages/img/satoru-gojo.gif",
    "pages/img/satoru-gojo-gojo.gif",
    "pages/img/satoru-gojo-gojou-satoru.gif",
    "pages/img/gojo-satoru.gif",
    "pages/img/GNUQ2KGWsAAy7pV.jpg",
    "pages/img/F_60_9SakAAG0Ct.jpg",
    "pages/img/elx8ta7h9cm71.jpg",
    "pages/img/833ecf9cdfb8506b4e7d404abc8b2a5a.jpg",
    "pages/img/gojo-jjk.gif",
    "pages/img/satoru-gojo-gojo-satoru.gif",
    "pages/img/gojo-satoru-gojo (1).gif",
    "pages/img/satoru-gojo-gojou-satoru.gif",
];

// Add a click event listener to the 'No' button
noButton.addEventListener('click', () => {
    clickCount++; // Increment the click count

    // Change the GIF each time 'No' is clicked
    const gifIndex = clickCount % gifs.length; // This will cycle through the GIFs
    gifElement.src = gifs[gifIndex];  // Update the GIF

    // Incrementally grow the 'Yes' button
    if (clickCount < 20) {
        yesSize += 10; // Increase size incrementally
        yesButton.style.fontSize = `${yesSize}px`;
        yesButton.style.width = `${yesSize * 4}px`;
        yesButton.style.height = `${yesSize * 3}px`;

        // Adjust the GIF size
        gifSize -= 4; // Decrease size by 5%
        gifElement.style.width = `${gifSize}%`;
    } else {
        // On the 20th click, make the 'Yes' button cover the entire page
        yesButton.style.position = 'fixed';
        yesButton.style.top = '0';
        yesButton.style.left = '0';
        yesButton.style.width = '100vw';
        yesButton.style.height = '100vh';
        yesButton.style.fontSize = '5rem'; // Set large text size
        yesButton.style.display = 'flex';
        yesButton.style.justifyContent = 'center';
        yesButton.style.alignItems = 'center';

        // Make the GIF very small
        gifElement.style.width = '10%';

        // Update the 'Yes' button text
        yesButton.innerText = "JUST SAY YES!";
    }
});
