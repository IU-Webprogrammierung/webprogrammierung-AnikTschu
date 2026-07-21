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


    // Direkte Navigationslinks aktivieren (Desktop + Mobile)
    const links = document.querySelectorAll(
        `.nav-button[href$="${page}.html"]`
    );

    links.forEach(link => {
        link.classList.add("active");
    });


    // Seiten, bei denen "Schrift" aktiv bleiben soll
    const schriftPages = [
        "schrift",
        "hiragana",
        "katakana",
        "kanji"
    ];


    if (schriftPages.includes(page)) {

        const schriftButtons = document.querySelectorAll(
            "#schriftButton, #schriftButtonMobile"
        );

        schriftButtons.forEach(button => {
            button.classList.add("active");
        });

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

function initBackToTop() {

    const backToTop = document.getElementById("backToTop");

    if (!backToTop || backToTop.dataset.initialized) return;

    backToTop.dataset.initialized = "true";

    function toggleButton() {
        if (window.scrollY > 200) {
            backToTop.style.display = "flex";
        } else {
            backToTop.style.display = "none";
        }
    }

    // Direkt beim Initialisieren den richtigen Zustand setzen
    toggleButton();

    // Beim Scrollen aktualisieren
    window.addEventListener("scroll", toggleButton);

    // Nach oben scrollen
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

}

// Bei Geräten OHNE Hover-Funktion und schmalem Bildschirm (mobile Version) wird die Schriftkarte, die in 
// der Mitte des Bildschirms ist (zu 95 % sichtbar), hervorgehoben

function initSchriftkartenHighlight() {

    // Nur auf Geräten ohne Hover (z. B. Smartphones)
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        return;
    }

    const cards = document.querySelectorAll(".schriftkarte");

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                entry.target.classList.toggle(
                    "active",
                    entry.isIntersecting
                );

            });

        },
        {
            threshold: 0.95
        }
    );

    cards.forEach(card => observer.observe(card));

}

// Bei der mobilen Version werden die Boxen per Klick gedreht (kultur.html und Kanji.html)

const cards = document.querySelectorAll(".boxes-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        // Nur auf Geräten ohne Hover
        if (window.matchMedia("(hover: none)").matches) {
            card.classList.toggle("flipped");
        }

    });

});

// Wechsel zwischen den Modi Dark <->Light

function initDarkMode() {

    const buttons = document.querySelectorAll(".darkmode-button");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("darkmode");
    }


    buttons.forEach(button => {

        if (button.dataset.initialized) return;

        button.dataset.initialized = "true";

        updateDarkModeIcon(button);

        button.addEventListener("click", function () {

            document.body.classList.toggle("darkmode");


            if (document.body.classList.contains("darkmode")) {

                localStorage.setItem("theme", "dark");

                // Wechsel zu Dark Mode → Sterne anzeigen
                createThemeEffect("✦");

            } else {

                localStorage.setItem("theme", "light");

                // Wechsel zu Light Mode → Kirschblüten anzeigen
                createThemeEffect("🌸");

            }


            buttons.forEach(btn => {
                updateDarkModeIcon(btn);
            });

        });

    });

}


function updateDarkModeIcon(button) {

    const icon = button.querySelector(".darkmode-icon");

    if (!icon) return;

    if (document.body.classList.contains("darkmode")) {

        // Dark Mode aktiv → Sonne anzeigen
        icon.src = "images/mode-light.webp";
        icon.alt = "";
        icon.title = "Zum Light Mode wechseln";
        button.setAttribute("aria-label", "Zum Light Mode wechseln");

    } else {

        // Light Mode aktiv → Mond anzeigen
        icon.src = "images/mode-dark.webp";
        icon.alt = "";
        icon.title = "Zum Dark Mode wechseln";
        button.setAttribute("aria-label", "Zum Dark Mode wechseln");

    }

}

// Effekte beim Wechsel zwischen den Modi Dark <-> Light

function createThemeEffect(symbol) {

    const container = document.getElementById("theme-effects");

    if (!container) return;

    for (let i = 0; i < 8; i++) {

        const particle = document.createElement("span");

        particle.classList.add("theme-particle");

        particle.textContent = symbol;

        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 80 + "%";

        particle.style.animationDelay = Math.random() * 0.3 + "s";

        container.appendChild(particle);


        particle.addEventListener("animationend", () => {
            particle.remove();
        });

    }

}


// init für alle Funktionen
function initPage() {

    initDropdown();
    initHamburgerMenu();
    setActiveNav();
    initSchriftkartenHighlight();
    initDarkMode();
    initBackToTop();

}

/* normale Seite */
document.addEventListener("DOMContentLoaded", initPage);

/* HTMX Nachladen */
document.body.addEventListener("htmx:afterSwap", initPage);