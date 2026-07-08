//___ Dropdown-Menü klickbar (ein-/ausblenden)

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

//___ Aktuelle Seite im Menü markieren ("aktivieren" -> zur Orientirung)
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

//___ Burger-Menü bei mobilen Version für Hauptnavigation (klickbar -> ausblendbar)

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

//___ Kleine Bilder können per Klick vergrößert werden

function openImage(src) {
    const overlay = document.getElementById("overlay");
    const largeImage = document.getElementById("largeImage");

    largeImage.src = src;
    overlay.style.display = "flex";
}

function closeImage() {
    document.getElementById("overlay").style.display = "none";
}


//___ Positionierung der Punkte in der Timeline auf der Mitte der Timeline-Karte auf dem Zeitstrahl

const timeline = document.querySelector(".timeline");

// alte Punkte löschen
document.querySelectorAll(".point").forEach(point => point.remove());

document.querySelectorAll(".card").forEach((card, index) => {

    const point = document.createElement("div");
    point.classList.add("point");

    // 👉 WICHTIG: links / rechts hinzufügen
    if (index % 2 === 0) {
        point.classList.add("left");
    } else {
        point.classList.add("right");
    }

    const cardRect = card.getBoundingClientRect();
    const timelineRect = timeline.getBoundingClientRect();

    let middle =
        cardRect.top -
        timelineRect.top +
        cardRect.height / 2;

    middle += (index % 2 === 0) ? -15 : 15;

    point.style.top = middle + "px";

    timeline.appendChild(point);
});

//___ Back-to-Top Funktion

const backToTop = document.getElementById("backToTop");

    // Button anzeigen oder ausblenden
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

    // Sanft nach oben scrollen
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
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