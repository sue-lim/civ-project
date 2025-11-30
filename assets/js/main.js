
// JS to update the status message if needed
const form = document.getElementById("contactForm");
const statusDiv = document.getElementById("statusMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    statusDiv.textContent = "sending...";

    // Simulate async send
    setTimeout(() => {
        statusDiv.textContent = "Message sent!";
    }, 1500);
});

//Slider 
function moveToSlide(index) {
    document.getElementById("carousel-inner").style.transform =
        `translateX(-${index * 100}%)`;
}