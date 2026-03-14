// ── Year in footer ──────────────────────────────
const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// ── Mobile navigation toggle ────────────────────
const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.getElementById("primary-nav");

if (navToggle && primaryNav) {
    navToggle.addEventListener("click", function () {
        const isOpen = primaryNav.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close nav when a link is clicked
    primaryNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            primaryNav.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });
}

// ── Reservation form: set minimum date to today ──
const dateInput = document.getElementById("res-date");
if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
}

// ── Reservation form: client-side submission feedback ──
const reservationForm = document.querySelector(".reservation-form");
if (reservationForm) {
    reservationForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const submitBtn = reservationForm.querySelector("[type='submit']");
        submitBtn.textContent = "Request Sent!";
        submitBtn.disabled = true;
        const note = reservationForm.querySelector(".form-note");
        if (note) {
            note.textContent = "Thank you! We will confirm your reservation by email within 24 hours.";
        }
    });
}