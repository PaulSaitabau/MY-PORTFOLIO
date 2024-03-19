window.onload = function() {
    alert("Welcome to my portfolio!");
};
<button id="changeColorButton">Change Background Color</button>

document.getElementById('changeColorButton').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';
});
document.addEventListener('DOMContentLoaded', function() {
    // Find the email address in the footer
    var emailAddress = document.querySelector('footer p:nth-child(2)');

    // Add a click event listener to the email address
    emailAddress.addEventListener('click', function() {
        // Construct the mailto link
        var mailtoLink = 'mailto:' + emailAddress.textContent.trim();

        // Open the default email client with a new message
        window.location.href = mailtoLink;
    });
});