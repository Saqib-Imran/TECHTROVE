document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides'); // Container for slides
    const slideImages = document.querySelectorAll('.slides img'); // All slide images
    const prevButton = document.getElementById('prev'); // Previous button
    const nextButton = document.getElementById('next'); // Next button

    let currentIndex = 0; // Current slide index
    const totalSlides = slideImages.length; // Total number of slides

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







// Add to Cart Functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        let productName = this.closest('.product').querySelector('h3').textContent;
        let productPrice = this.closest('.product').querySelectorAll('p')[1].textContent; // Price is the second <p>
        addToCart(productName, productPrice);
    });
});

function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    alert(`${productName} has been added to the cart!`);
}

// Update Cart Display
function updateCartDisplay() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.querySelector('.cart-items');

    if (cartItems) {
        cartItems.innerHTML = ''; // Clear current items
        cart.forEach(item => {
            let cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `<span>${item.name}</span> - <span>${item.price}</span>`;
            cartItems.appendChild(cartItem);
        });
    }

    // Update Cart Count
    updateCartCount();
}

function updateCartCount() {
    const count = JSON.parse(localStorage.getItem('cart'))?.length || 0;
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = count;
    }
}

// Clear Cart Functionality
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('clear-cart')) {
        localStorage.removeItem('cart');
        updateCartDisplay();
    }
});

// Initialize on Page Load
document.addEventListener('DOMContentLoaded', () => {
    updateCartDisplay();

    // Scroll-to-Top Button Functionality
    const scrollToTopButton = document.getElementById("scrollToTopButton");
    if (scrollToTopButton) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                scrollToTopButton.classList.add("show");
            } else {
                scrollToTopButton.classList.remove("show");
            }
        });

        scrollToTopButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }
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
            window.location.href = "home.html";
        });
    });
});
