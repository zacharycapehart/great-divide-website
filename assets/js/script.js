/* =============================================
   Dynamic Year
   ============================================= */
const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

/* =============================================
   Mobile Navigation Toggle
   ============================================= */
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.getElementById("main-nav");

if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
        const isOpen = navToggle.getAttribute("aria-expanded") === "true";
        navToggle.setAttribute("aria-expanded", String(!isOpen));
        mainNav.classList.toggle("is-open", !isOpen);
    });

    // Close nav when a link is clicked
    mainNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navToggle.setAttribute("aria-expanded", "false");
            mainNav.classList.remove("is-open");
        });
    });

    // Close nav on outside click
    document.addEventListener("click", (e) => {
        if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
            navToggle.setAttribute("aria-expanded", "false");
            mainNav.classList.remove("is-open");
        }
    });
}

/* =============================================
   Reservation Form
   ============================================= */
const reserveForm = document.querySelector(".reserve-form");
const formStatus = document.getElementById("form-status");

if (reserveForm && formStatus) {
    // Set minimum date to today
    const dateInput = document.getElementById("res-date");
    if (dateInput) {
        const today = new Date().toISOString().split("T")[0];
        dateInput.setAttribute("min", today);
    }

    reserveForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("res-name").value.trim();
        const phone = document.getElementById("res-phone").value.trim();
        const date = document.getElementById("res-date").value;
        const guests = document.getElementById("res-guests").value;

        if (!name || !phone || !date || !guests) {
            formStatus.textContent = "Please fill in all fields before submitting.";
            formStatus.style.color = "#ffb3a7";
            return;
        }

        // Simulate a successful form submission
        formStatus.textContent = `Thanks, ${name}! We'll confirm your table for ${guests} on ${new Date(date + "T00:00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })} shortly.`;
        formStatus.style.color = "rgba(255,255,255,0.9)";
        reserveForm.reset();
    });
}