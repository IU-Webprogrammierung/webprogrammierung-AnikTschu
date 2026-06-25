// Dropdown-Menü klickbar (ein-/ausblenden)

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

// Aktuelle Seite im Menü markieren ("aktivieren" -> zur Orientirung)
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

    // 2. Dropdown-Gruppe "Schrift": aktuelle Seite markieren ("aktivieren")
    const schriftPages = ["schrift", "hiragana", "katakana", "kanji"];

    if (schriftPages.includes(page)) {
        const schriftButton = document.getElementById("schriftButton");

        if (schriftButton) {
            schriftButton.classList.add("active");
        }
    }
}

// Burger-Menü bei mobilen Version für Hauptnavigation (klickbar -> ausblendbar)

function initHamburgerMenu() {

    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!menuButton || !mobileMenu) return;

    if (menuButton.dataset.initialized) return;
    menuButton.dataset.initialized = "true";

    // 1. Toggle beim Klick auf Button
    menuButton.addEventListener("click", function (event) {
        event.stopPropagation();
        mobileMenu.classList.toggle("open");
    });

    // 2. Klick außerhalb schließt Menü
    document.addEventListener("click", function (event) {

        if (
            !mobileMenu.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {
            mobileMenu.classList.remove("open");
        }

    });

}

// Kleine Bilder können per Klick vergrößert werden

function openImage(src) {
    const overlay = document.getElementById("overlay");
    const largeImage = document.getElementById("largeImage");

    largeImage.src = src;
    overlay.style.display = "flex";
}

function closeImage() {
    document.getElementById("overlay").style.display = "none";
}


// Positionierung der Punkte in der Timeline auf der Mitte der Timeline-Karte auf dem Zeitstrahl

const timeline = document.querySelector(".timeline");
const center = document.querySelector(".timeline-center");

document.querySelectorAll(".card").forEach(card => {

    const point = document.createElement("div");
    point.classList.add("point");

    const cardRect = card.getBoundingClientRect();
    const timelineRect = timeline.getBoundingClientRect();

    const middle =
        cardRect.top -
        timelineRect.top +
        cardRect.height / 2;

    point.style.top = middle + "px";

    center.appendChild(point);
});

// init für alle Funktionen
function initPage() {
    initDropdown();
    initHamburgerMenu();
    setActiveNav();
}

/* normale Seite */
document.addEventListener("DOMContentLoaded", initPage);

/* HTMX Nachladen */
document.body.addEventListener("htmx:afterSwap", initPage);