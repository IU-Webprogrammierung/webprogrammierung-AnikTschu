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
├── images/                 Ordner: Bilder der Website
├── components/             Ordner: Components für wiederkehrende Bausteine    
│   └── header.html         Header (für alle Seiten einheitlich)
│   └── footer.html         Footer (für alle Seiten einheitlich)
└── README.md               Beschreibung der Struktur und Funktionen der Website

## Funktionen

1. **Responsive Seitenlayout**
    - Desktop-Variante (Breite: >767 px) 
    - Mobile Variante (Breite: <=767 px)
    - CSS: Break Point wird mithilfe einer Media Query umgesetzt (`@media (max-width: 767px) {...}`)

2. **Interaktionen mithilfe von JavaScript**
    - ausgewählte, kleinere Bilder können durch Anklicken vergrößert werden
    - JavaScript: `function openImage(src)`
    - bei "hiragana.html" und "katakana.html" umgesetzt
    - Struktur
        1. Bild bei Besuch der Seite (kleine Ansicht)
        2. Bild beim Hovern über dem Bild (Hinweis "Hier klicken für größere Ansicht")
        3. Bild wird durch Klicken über gesamten Bildschirm dargestellt (große Ansicht), kann per Klick 
                wieder ausgeblendet werden

3. **Hauptnavigation mit visuellen Hervorhebungen**
    - aktuelle (="aktive") Seite wird in der Hauptnavigation im Header visuell hervorgehoben
    - HTML
        - zu Beginn jeder Seite wird im Body das Attribut `data-page` mit dem Namen der jeweiligen Seite 
            definiert
        - z.B. für Hiragana: `<body data-page="hiragana">`
        - semantisch ist die Hauptnavigation mit `<nav>`, `<ul>` und `<li>` aufgebaut
    - CSS
        - die Klasse `.nav-button` wird mit `.nav-button:hover` ergänzt, sodass visuell hervorgehoben wird, auf welchem Menü-
            Punkt sich der Mauszeiger befindet (Desktop-Variante)
        - die Klasse `.nav-button.active` kennzeichnet die aktuell geöffnete Seite durch eine andere Schriftstärke und eine 
            Unterstreichung.
    - JavaScript 
        - die Funktion `setActiveNav()` liest den Wert des Attributs `data-page` aus.
        - anschließend wird der entsprechende Navigationslink anhand seines href-Attributs ermittelt und mit 
            der CSS-Klasse active versehen.
        - für die Seiten Schrift, Hiragana, Katakana und Kanji wird immer noch zusätzlich der 
            Menüpunkt „Schrift“ als aktiv markiert, damit auch die übergeordnete Kategorie hervorgehoben wird (trägt zur
            besseren Orientierung nach Ausblenden des Dropdown-Menüs bei).
 
4. **HTML-Komponenten**
    - wiederkehrende Elemente per Components umgesetzt, um doppelten Code zu vermeiden
    - Header ("header.html") und Footer ("footer.html") werden als Components umgesetzt
    - fehlende DOCTYPE-Definition
    - alle Seiten beinhalten Header und Footer

5. **CSS-Animationen zur optischen Hervorhebung von Inhalten** 
    - kleine Animationen ohne vom Inhalt abzulenken

  **5.1. bei "schrift.html"**
        - aufgewählte Schriftkarte wird optisch hervorgehoben
        - Geräte MIT Hover-Funktion: 
            - CSS: 
                - festgehalten in `@media (hover: hover) and (pointer: fine) {[...]}` unter
                    `.schriftkarte:hover` -> beim Hovern wird die Schriftkarte 
                    1. leicht nach oben versetzt `transform: translateY(-12px);`
                    2. mit einem Schatten versehen
                    3. mir einer schwarzen Umrandung versehen
                - mit Hilfe von "transition" werden die Änderungen weich animiert
        - Geräte OHNE Hover-Möglichkeit (und mobile Variante):
            - CSS: 
                - festgehalten in `@media (max-width: 767px) {[...]}` unter `.schriftkarte.active`
                -> die Schriftkarte wird 
                1. mit einem Schatten versehen
                2. mir einer schwarzen Umrandung versehen
            - JavaScript: `initSchriftkartenHighlight` setzt Schriftkarte auf aktiv, sobald sie zu 95% 
                (`threshold: 0.95`) zu sehen ist 
        - Problem: bei Geräten mit schmalem Bildschirm (unter 768 px) UND Hover-Funktion sind beide
            Arten der Hervorhebung gleichzeitig aufgetreten. Dies wurde durch folgende Abfrage im JavaScript 
            unterbunden: 
            `if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {return;}`
                - die Abfrage prüft, ob das aktuelle Gerät eine Hover-Funktion unterstützt. Ist dies der Fall,
                    beendet return die Funktion sofort, sodass der IntersectionObserver nur auf Geräten OHNE Hover-Funktion aktiviert wird. Dadurch werden Hover-Effekte und Touch-Effekte nicht gleichzeitig ausgeführt.

    **5.2.** bei "kultur.html" und "kanji.html"
        - Info-Boxen mit Vor- und Rückseite
        - Vorderseite (`card-front`): direkt sichtbar
        - Rückseite (`card-back`):
            - zunächst nicht sichbar: `visibility: hidden;`
                - per Aktion wird die Vorderseite auf `visibility: hidden;` gesetzt und die Rückseite mit `opacity: 1;` und `visibility: visible;` 
                    sichtbar gemacht
        - Desktop-Variante
            - beim Hovern wird die Karte umgedreht
            - mit Hilfe von `transition` wird der Wechsel zwischen Vorder- und Rückseite weich animiert
        - mobile Variante: per Klick
            - umgesetzt mit JavaScript `document.querySelectorAll(".boxes-card")`

    **5.3.** bei "hiragana.html" und "katakana.html"   
        - nur Desktop-Variante
        - Tabellen der japanischen Silbenschriften werden beim Hovern größer (`scale: 1.5`) 

6. **Weboptimierte Medien**
    - für eine bessere Performance wurden Bilder mithilfe von https://squoosh.app/ komprimiert
    - Datei-Typ: .webp
    - daraus ergeben sich Schwellen für die Bildgröße: Größe aller Bilder <400 KB, Größe der meisten Bilder <100 KB

7. **Back-to-Top**
    - in CSS: `backToTop {...}`
    - in HTML: am Ende vom Body mit einem Button definiert
    - in JavaScript: sobald 200 Pixel nach unten gescrollt wurden, wird der Button unten rechts eingeblendet

8. **Einheitliches Farbkonzept mit CSS-Variablen**
    - Über `:root` wurden alle in den Webseiten verwendeten Farben festgelegt
    - Alle Farben von Elementen innerhalb der CSS-Datei sind über `var(--variablenName)` definiert
  
9. **Eigene 404-Seite definiert**
    - dreisprachiger Hinweistext (Deutsch, Englisch, Japanisch)
    - Abschließender Link, um zurück zur Startseite zu gelangen

10. **Favicon und Logo**
    - Bild im Ordner "images" namens "favicon.ico" 
    - wird sowohl als Favicon als auch als Logo verwendet
    - Es zeigt den Anfangsbuchstaben A des Vornamens der Website-Inhaberin im Stil eines japanisches Torii

11. **Dark Mode und Light Mode**
    - Wechsel zwischen den Modi Dark <-> Light wird ermöglicht
    - anstelle verbreiteter Symbole wie 🌙 und ☀️ wurden die japanischen Zeichen für Mond 月 und Sonne 日 mit
        passendem Design eingebaut
    - CSS: über `body.darkmode` werden die Variablen aus `:root` für den Dark Mode neu definiert
    - JavaScript: 
        - `initDarkMode()`: Steuert den Wechsel zwischen Dark- und Light-Mode, speichert die Auswahl im `localStorage` und verwaltet 
            die Button-Interaktionen.
        - `updateDarkModeIcon(button)`: Aktualisiert das angezeigte Symbol abhängig vom aktiven Theme
    - Für eine bessere Barrierefreiheit:
        - alt-Attribut der Icons wird auf `""` (leer) gesetzt, da die Bilder ausschließlich dekorativ sind und keine 
            eigenständige Information vermitteln
        - der Button erhält ein dynamisch angepasstes `aria-label` („Zum Dark Mode wechseln“ bzw. „Zum Light 
            Mode wechseln“). Dadurch liest ein Screenreader nur die eigentliche Funktion des Buttons vor und nicht zusätzlich den Bildinhalt, wodurch redundante Ausgaben wie „Dark Mode. Zum Dark Mode wechseln“ vermieden werden.
    - mit einer CSS-Transition für alle Elemente (`body, header, main, footer, nav, section, article, aside,`
        `button, a, div, span, p, h1, h2, h3, h4, h5, h6, li`) wird der Übergang zwischen den Modi
        Dark <-> Light flüssiger und angenehmer gestaltet
    - Beim Wechsel der Modi Dark <-> Light werden Symbole angezeigt, die sich langsam von oben nach unten
        über den Bildschirm scheben und währenddessen langsam verblassen
        - JavaScript
            - mit Hilfe der Funktion `createThemeEffect(symbol)` werden durch eine For-Schleife 8 Symbole erzeugt
            - diese werden durch `particle.style.left = Math.random() * 100 + "%";` und
                `particle.style.top = Math.random() * 80 + "%";` zufällig platziert
                -  `* 80` → begrenzt die vertikale Position auf die oberen 80 % des Bildschirms.
        - in der CSS-Klasse `theme-particle` wird dafür gesorgt, dass die Symbole nur 0,8 Sekunden eingeblendet   
            werden, damit diese nicht zu lange vom Inhalt ablenken
        - beim Wechsel zum Dark Mode → Sterne anzeigen mit `createThemeEffect("✦");`
        - beim Wechsel zum Light Mode → Kirschblüten anzeigen mit `createThemeEffect("🌸");`
    - um den Flash of Incorrect Theme (FOIT) zu fixen, wurde eine JavaScript-Datei `theme-init.js`
        eingeführt. Diese wird direkt bei jeder Webseite im Head noch VOR der CSS-Datei eingelesen:
        `<head>`
            `[...]`
            `<script src="theme-init.js"></script>`
            `<link rel="stylesheet" href="style.css">`
            `[...]`
        `</head>`
        - Damit prüft die `theme-init.js`-Datei, ob im localStorage der Dark Mode gespeichert wurde. Falls der 
            gespeicherte Wert "dark" ist, wird die Klasse darkmode direkt zum HTML-Element hinzugefügt.

## Verwendete Quellen

- Bilder: Quelle wird bei jedem Bild angegeben
    - ChatGPT
    - Eigene Darstellung
    - vereinzelte Verlinkungen zu Bildern auf Wikipedia)
- Inhalte: Eigene Formulierungen auf Grundlagen von eigenem Wissen und ChatGPT