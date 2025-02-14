// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Contact form validation (if you add a form)
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contact-form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission for testing

            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const message = document.querySelector("#message").value.trim();
            const errorMessage = document.querySelector("#error-message");

            if (!name || !email || !message) {
                errorMessage.textContent = "Please fill in all fields.";
                errorMessage.style.color = "red";
            } else {
                errorMessage.textContent = "Message sent successfully!";
                errorMessage.style.color = "green";
                form.reset(); // Clear the form
            }
        });
    }
});
