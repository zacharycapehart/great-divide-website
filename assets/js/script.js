/* Set copyright year */
const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

/* Smooth scroll for anchor links */
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href").slice(1);
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
            /* Close mobile nav if open */
            const nav = document.getElementById("primary-nav");
            const toggle = document.querySelector(".nav-toggle");
            if (nav && nav.classList.contains("open")) {
                nav.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
            }
        }
    });
});

/* Mobile navigation toggle */
const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.getElementById("primary-nav");

if (navToggle && primaryNav) {
    navToggle.addEventListener("click", function () {
        const isOpen = primaryNav.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

/* Menu tabs */
const tabs = document.querySelectorAll(".menu-tab");
const panels = document.querySelectorAll(".menu-panel");

tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
        const targetId = this.getAttribute("aria-controls");

        tabs.forEach(function (t) {
            t.classList.remove("active");
            t.setAttribute("aria-selected", "false");
        });
        panels.forEach(function (p) {
            p.classList.remove("active");
            p.hidden = true;
        });

        this.classList.add("active");
        this.setAttribute("aria-selected", "true");

        const targetPanel = document.getElementById(targetId);
        if (targetPanel) {
            targetPanel.classList.add("active");
            targetPanel.hidden = false;
        }
    });
});

/* Active nav link on scroll */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-list a");

function onScroll() {
    let current = "";
    sections.forEach(function (section) {
        const top = section.offsetTop - 90;
        if (window.scrollY >= top) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(function (link) {
        link.removeAttribute("aria-current");
        if (link.getAttribute("href") === `#${current}`) {
            link.setAttribute("aria-current", "page");
        }
    });
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();