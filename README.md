# Projekt: Anikas Japan-Website

## Autor

- Name: Anika Tschunt
- Matrikelnummer: IU14091234
- Studiengang: Medieninformatik
- Modul: Projekt: Medieninformatik
- Zeitraum: 04.05.-27.07.2026

## Projektbeschreibung

Diese Website bietet einen einfachen und verständlichen Einstieg in die faszinierende Welt Japans und seiner einzigartigen Schrift. Sie richtet sich an alle, die mehr über die japanische Kultur erfahren und die Grundlagen der japanischen Schriftsysteme kennenlernen möchten.

## Verwendete Technologien

- HTML5
- CSS3
- JavaScript (ES6)
- HTMX zur Einbindung wiederkehrender Komponenten
- WebP zur Bildoptimierung
- LocalStorage zur Speicherung der Theme-Einstellung

## Projektstruktur

Projekt/
│
├── index.html              Startseite
├── ueber-mich.html         Informationen über meine Erfahrungen rund um Japan
├── schrift.html            Übersichtsseite über die japanische Schrift
├── hiragana.html           Unterseite von "schrift.html", Beschreibung von Hiragana
├── katakana.html           Unterseite von "schrift.html", Beschreibung von Katakana
├── kanji.html              Unterseite von "schrift.html", Beschreibung von Kanji
├── kultur.html             Informationen zur japanischen Kultur
├── style.css               Stylesheet
├── script.js               JavaScript-Funktionen
├── theme-init.js           Kurze Datei, wichtig für Wechsel der Modi Dark <-> Light 
├── images/                 Ordner: Bilder der Website
├── components/             Ordner: Components für wiederkehrende Bausteine    
│   └── header.html         Header (für alle Seiten einheitlich)
│   └── footer.html         Footer (für alle Seiten einheitlich)
└── README.md               Beschreibung der Struktur und Funktionen der Website

## Funktionen

1. **Responsive Design**
    - Desktop-Variante (Breite: >767 px) 
    - Mobile Variante (Breite: <=767 px)
    - CSS: Break Point wird mithilfe einer Media Query umgesetzt (`@media (max-width: 767px) {...}`)

2. **Barrierefreiheit**
    - Verwendung semantischer HTML-Elemente (`header`, `nav`, `main`, `section`, `footer`) und Vermeidung
        von `<div>`-Elementen
    - aussagekräftige alt-Attribute für informative Bilder
    - leere alt-Attribute bei rein dekorativen Bildern
    - ARIA-Labels für interaktive Elemente
    - Unterstützung verschiedener Eingabegeräte durch getrennte Hover- und Touch-Interaktionen
        - Hover-Funktionen meist in `@media (hover: hover) and (pointer: fine){...}` zusammengefasst

3. **HTML-Komponenten**
    - wiederkehrende Elemente (Header, Footer) per Components in jeder Webseite umgesetzt
    - enthalten keinen `DOCTYPE`, da sie als HTML-Fragmente eingebunden werden

4. **Weboptimierte Medien**
    - Bildkomprimierung mit [Squoosh](https://squoosh.app/) mit Datei-Typ: `.webp`
    - für eine bessere Performance

5. **Einheitliches Farbkonzept mit CSS-Variablen**
    - in CSS werden über `:root`  alle in den Webseiten verwendeten Farben festgelegt
    - Alle Farben von Elementen innerhalb der CSS-Datei sind über `var(--variablenName)` definiert

6. **Interaktionen mithilfe von JavaScript** (umgesetzt bei "hiragana.html" und "katakana.html")
    - ausgewählte, kleinere Bilder können durch Anklicken vergrößert werden
    - JavaScript: `function openImage(src)`
    - Struktur
        1. Bild bei Besuch der Seite (kleine Ansicht)
        2. Bild beim Hovern über dem Bild (Hinweis "Hier klicken für größere Ansicht")
        3. Bild wird durch Klicken über gesamten Bildschirm dargestellt, kann per Klick 
            wieder ausgeblendet werden

7. **CSS-Animationen zur optischen Hervorhebung von Inhalten** 
    - kleine Animationen ohne vom Inhalt abzulenken

  **7.1. Schriftkarten** (umgesetzt bei "schrift.html")
        - ausgewählte Schriftkarte wird optisch hervorgehoben
        - Geräte MIT Hover-Funktion: 
            - CSS: 
                - festgehalten in `@media (hover: hover) and (pointer: fine) {[...]}` unter
                    `.schriftkarte:hover`
                - mit Hilfe von "transition" werden die Änderungen weich animiert
        - Geräte OHNE Hover-Funktion und schmalen Bildschirm (mobile Variante):
            - CSS: 
                - festgehalten in `@media (max-width: 767px) {[...]}` unter `.schriftkarte.active`
            - JavaScript: `initSchriftkartenHighlight` setzt Schriftkarte auf aktiv, sobald sie zu 85% 
                (`threshold: 0.85`) zu sehen ist 
        - bei Geräten mit schmalem Bildschirm (unter 768 px) UND Hover-Funktion wird das gleichzeitige 
            Aufgetreten beider optischer Hervorhebungen durch eine Abfrage im JavaScript unterbunden: 
            `if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {return;}`

    **7.2. Inforkarten mit Vor-Rückseite** (umgesetzt bei "kultur.html" und "kanji.html")
        - Info-Boxen mit Vor- und Rückseite
        - mit Hilfe von `transition` wird der Wechsel zwischen Vorder- und Rückseite weich animiert
        - Vorderseite (`card-front`): direkt sichtbar
        - Rückseite (`card-back`):
            - zunächst nicht sichtbar: `visibility: hidden;`
                - per Aktion wird die Vorderseite mit `visibility: hidden;` ausgebelndet und die Rückseite mit 
                    `opacity: 1;` und `visibility: visible;` sichtbar gemacht
        - Transition bei Desktop-Variante durch Hovern bei mobiler Variante durch Klick
            - mobil: Java-Script `document.querySelectorAll(".boxes-card")`

    **7.3. Vergrößerung von Bildern** (umgesetzt bei "hiragana.html" und "katakana.html") 
        - Bei kleinen Tabellen für besseres Erkennen der Inhalte
        - nur bei Hover-Funktion
        - Tabellen der japanischen Silbenschriften werden vergrößert (`scale: 1.5`) 
        - CSS: `.big-image:hover .big-image` und `.split-i1-t2 .image:hover img`

8. **Back-to-Top**
    - in CSS: `backToTop {...}`
    - in HTML: in Footer-component definiert (Button mit `id="backToTop"`)
    - in JavaScript Funktion `initBackToTop() {...}`
        - sobald 200 Pixel nach unten gescrollt wurden, wird der Button unten rechts eingeblendet

9. **Hauptnavigation mit visuellen Hervorhebungen**
    - aktuelle (="aktive") Seite wird in der Hauptnavigation im Header visuell hervorgehoben
    - HTML
        - jede Seite erhält im Body das Attribut `data-page` mit einem seitenspezifischen Namen
        - semantisch mit `<nav>`, `<ul>`, `<li>` aufgebaut
    - CSS
        - `.nav-button:hover` sorgt für visuelle HErvorhebung beim Hovern (Desktop-Variante)
        - die Klasse `.nav-button.active` kennzeichnet die aktuell geöffnete Seite
    - JavaScript 
        - die Funktion `setActiveNav()` liest den Wert des Attributs `data-page` aus.
        - anschließend wird der entsprechende Navigationslink anhand seines href-Attributs ermittelt und mit 
            der CSS-Klasse `active` versehen.
        - für die Seiten Hiragana, Katakana und Kanji wird der Oberbegriff „Schrift“ als aktiv markiert, 
            was zur besseren Orientierung nach Ausblenden des Dropdown-Menüs bei trägt
  
10. **404-Seite definiert**
    - dreisprachiger Hinweistext in Deutsch, Englisch und Japanisch
    - Abschließender Link führt zurück zur Startseite

11. **Favicon und Logo**
    - Bild im Ordner "images" namens "favicon.ico" 
    - wird als Favicon und als Logo verwendet
    - zeigt den Anfangsbuchstaben A des Vornamens der Website-Inhaberin im Stil eines japanischen Torii

12. **Dark Mode und Light Mode**
    - Wechsel zwischen den Modi Dark <-> Light wird ermöglicht
    - anstelle verbreiteter Symbole wie 🌙 und ☀️ wurden die japanischen Zeichen für Mond 月 und Sonne 日 mit
        passendem Design als webp-Datei eingebaut
    - CSS: über `body.darkmode` werden die Variablen aus `:root` für den Dark Mode neu definiert
    - JavaScript: 
        - `initDarkMode()`: Steuert den Wechsel zwischen Dark- und Light-Mode, speichert die Auswahl im 
            `localStorage` und verwaltet die Button-Interaktionen.
        - `updateDarkModeIcon(button)`: Aktualisiert das angezeigte Symbol abhängig vom aktiven Theme mit
            passendem title
    - Für eine bessere Barrierefreiheit:
        - alt-Attribut der Icons wird auf `" "` (leer) gesetzt, da die Bilder ausschließlich dekorativ sind 
            und keine eigenständige Information vermitteln
        - der Button erhält ein dynamisch angepasstes `aria-label` („Zum Dark Mode wechseln“ bzw. „Zum Light 
            Mode wechseln“). Ein Screenreader liest nur die Funktion des Buttons vor und nicht zusätzlich den 
            Bildinhalt, wodurch redundante Ausgaben wie „Dark Mode. Zum Dark Mode wechseln“ vermieden werden
    - mit einer CSS-Transition für alle Elemente (`body, header, main, footer, nav, section, article, aside,`
        `button, a, div, span, p, h1, h2, h3, h4, h5, h6, li`) wird der Übergang zwischen den Modi Dark <-> 
        Light flüssiger gestaltet
    - Beim Wechsel der Modi Dark <-> Light werden spielerisch Symbole angezeigt, die langsam von oben 
        nach unten über den Bildschirm schweben und währenddessen langsam verblassen
        - JavaScript
            - mit Hilfe der Funktion `createThemeEffect(symbol)` werden durch eine For-Schleife eine feste 
                Anzahl an Symbolen erzeugt
            - diese werden durch `particle.style.left = Math.random() * 100 + "%";` und
                `particle.style.top = Math.random() * 80 + "%";` zufällig platziert
                -  `* 80` → begrenzt die vertikale Position auf die oberen 80 % des Bildschirms.
        - in der CSS-Klasse `theme-particle` wird dafür gesorgt, dass die Symbole nur 0,8 Sekunde 
            eingeblendet werden, damit diese nicht zu lange vom Inhalt ablenken
        - beim Wechsel zum Dark Mode → Sterne anzeigen mit `createThemeEffect("✦");`
        - beim Wechsel zum Light Mode → Kirschblüten anzeigen mit `createThemeEffect("🌸");`
    - Flash of Incorrect Theme (FOIT) (kurzes Einblenden des Light Modes beim Laden einer neuen Webseite bei 
        Dark Mode) wurde verhindert
        - JavaScript-Datei `theme-init.js` wird direkt bei jeder Webseite im Head noch VOR der CSS-Datei 
            eingelesen: `<head>`
                            `[...]`
                            `<script src="theme-init.js"></script>`
                            `<link rel="stylesheet" href="style.css">`
                            `[...]`
                        `</head>`
        - `theme-init.js` prüft , ob im `localStorage` der Dark Mode gespeichert wurde. Falls 
            der gespeicherte Wert "dark" ist, wird die Klasse `darkmode` direkt zum HTML-Element hinzugefügt.

13. **Berechnen von Punkten und Linien für die Timeline** (umgesetzt bei "ueber-mich.html") 
    - Punkte und Verbindungslinien der Timeline-Karten werden dynamisch durch die Java-Script-Funktion
        `createTimelinePoints()` berechnet
    - JavaScript-Funktion berechnet die Position der Punkte/Verbindungslinien bei der Änderung der 
        Fenstergröße (resize) neu 
        - `window.addEventListener("resize", createTimelinePoints);` ruft `createTimelinePoints()` bei jeder 
            Änderung der Fenstergröße direkt auf. Dadurch werden die Positionen der Timeline-Punkte und 
            Verbindungslinien sofort neu berechnet.
        - die dynamische Berechnung funktioniert zuverlässig bei den vorgesehenen Desktop- und Mobilgrößen. 
            Bei bestimmten Zwischenbreiten können geringfügige Abweichungen auftreten.
        - durch die Verwendung von `setTimeout` wird ein erneute Aufruf der Funktion um 150 ms verzögert und 
            bei weiteren Größenänderungen zurückgesetzt. So wird verhindert, dass die Funktion unnötig oft 
            ausgeführt wird, wodurch die Performance verbessert wird.

14. **Media Query für print**
    - Mit `@media print` werden spezielle CSS-Regeln für den Ausdruck der Webseite definiert
    - es werden Hintergrundfarben und Texte angepasst, Header und Footer ausgeblendet sowie Schatten und Texteffekte entfernt
    - für eine druckerfreundliche Darstellung



## Verwendete Quellen

- Bilder:
  - eigene Aufnahmen und Darstellungen
  - mit Quellenangabe versehene externe Bilder
  - Unterstützung bei einzelnen Grafiken durch ChatGPT

- Inhalte:
  - eigene Recherche und Formulierungen
  - Unterstützung durch ChatGPT bei Strukturierung und sprachlicher Überarbeitung