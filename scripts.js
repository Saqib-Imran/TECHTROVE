document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slides img');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentIndex = 0;
    const totalSlides = slideImages.length;

    // Set up initial slide position
    function updateSlidePosition() {
        const offset = currentIndex * -100;
        slides.style.transform = `translateX(${offset}%)`;
    }

    // Show the next slide
    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    }

    // Show the previous slide
    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    }

    // Add event listeners for buttons
    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    // Set up auto-slide (every 5 seconds)
    setInterval(showNextSlide, 5000);

    // Initialize slide position
    updateSlidePosition();
});


//contact us page 
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const confirmationMessage = document.getElementById("confirmationMessage");
    const heading1 = document.querySelector("main h1");
    const heading2 = document.querySelector("main h2");
    const heading3 = document.querySelector("main h3");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate input fields
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }
        // Update confirmation message with user details
        confirmationMessage.innerHTML = `
            <h2>Thank you for contacting us, ${name}!</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Your Message:</strong> ${message}</p>
            <br>
            <p>We will get back to you as soon as possible.</p>
            <h4>Have a great day!</h4>
            <button id="homeButton" style="
                padding: 12px 24px; 
                font-size: 16px; 
                font-weight: bold; 
                color: white; 
                background-color: orange; 
                border: none; 
                border-radius: 25px; 
                cursor: pointer;
                transition: background-color 0.3s ease;
            ">Back to Home</button>
        `;
        
        // Hide headings
        heading1.style.display = "none";
        heading2.style.display = "none";
        heading3.style.display = "none";

        // Hide form and show confirmation
        form.style.display = "none";
        confirmationMessage.style.display = "block";

        // Add hover effect for button
        const homeButton = document.getElementById("homeButton");
        homeButton.addEventListener("mouseover", function () {
            homeButton.style.backgroundColor = "#ff9500"; // Darker orange on hover
        });
        homeButton.addEventListener("mouseout", function () {
            homeButton.style.backgroundColor = "orange"; // Back to original color
        });

        // Redirect to home page on click
        homeButton.addEventListener("click", function () {
            window.location.href = "index.html"; // Updated to redirect to index.html
        });
    });
});