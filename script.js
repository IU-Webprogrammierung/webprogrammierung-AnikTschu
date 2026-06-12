
function initDropdown() {

    const dropdown = document.getElementById("schriftDropdown");

    if (dropdown && !dropdown.dataset.initialized) {

        dropdown.dataset.initialized = "true";

        document.addEventListener("click", function (event) {

            if (!dropdown.contains(event.target)) {
                dropdown.removeAttribute("open");
            }

        });
    }
}

function setActiveNav() {

    const page = document.body.dataset.page;
    if (!page) return;

    // 1. direkte Links aktivieren
    const link = document.querySelector(
        `.nav-button[href="${page}.html"]`
    );

    if (link) {
        link.classList.add("active");
    }

    // 2. Dropdown-Gruppe "Schrift" aktivieren
    const schriftPages = ["schrift", "hiragana", "katakana", "kanji"];

    if (schriftPages.includes(page)) {
        const schriftButton = document.getElementById("schriftButton");

        if (schriftButton) {
            schriftButton.classList.add("active");
        }
    }
}

function setActiveSidebar() {

    const page = document.body.dataset.page;
    if (!page) return;

    const link = document.querySelector(
        `.sidebar-link[data-page="${page}"]`
    );

    if (link) {
        link.classList.add("active");
    }
}

function initPage() {
    initDropdown();
    setActiveNav();
    setActiveSidebar();
}

/* normale Seite */
document.addEventListener("DOMContentLoaded", initPage);

/* HTMX Nachladen */
document.body.addEventListener("htmx:afterSwap", initPage);