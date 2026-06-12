
function initDropdown() {

    const dropdown = document.getElementById("schriftDropdown");

    if (!dropdown) {
        return;
    }

    // Nur einmal registrieren
    if (dropdown.dataset.initialized) {
        return;
    }

    dropdown.dataset.initialized = "true";

    document.addEventListener("click", function (event) {

        if (!dropdown.contains(event.target)) {
            dropdown.removeAttribute("open");
        }

    });

}

// normale HTML-Seite
document.addEventListener("DOMContentLoaded", initDropdown);

// falls HTMX Inhalte nachlädt
document.body.addEventListener("htmx:afterSwap", initDropdown);