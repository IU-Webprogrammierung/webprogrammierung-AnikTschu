# Projekt: Anikas Japan-Webseite

## Autor

- Name: Anika Tschunt
- Matrikelnummer: IU14091234
- Studiengang: Medieninformatik
- Modul: Projekt: Medieninformatik
- Zeitraum: 04.05.-27.07.2026

## Projektbeschreibung

Diese Webseite bietet einen einfachen und verständlichen Einstieg in die faszinierende Welt Japans und seiner einzigartigen Schrift. Sie richtet sich an alle, die mehr über die japanische Kultur erfahren und die Grundlagen der japanischen Schriftsysteme kennenlernen möchten.

## Verwendete Technologien

- HTML5
- CSS3
- JavaScript (ES6)

## Projektstruktur

Projekt/
│
├── index.html              Startseite
├── ueber-mich.html         Informationen über meine Japan-Erfahrung
├── schrift.html            Übersichtsseite über die japanische Schrift
├── hiragana.html           Unterseite von "schrift.html", Beschreibung von Hiragana
├── katakana.html           Unterseite von "schrift.html", Beschreibung von Katakana
├── kanji.html              Unterseite von "schrift.html", Beschreibung von Kanji
├── kultur.html             Informationen zur japanischen Kultur
├── style.css               Stylesheet
├── script.js               JavaScript-Funktionen
├── images/                 Bilder der Webseite
├── components/             Components für wiederkehrende Bausteine    
│   └── header.html         Header (für alle Seiten einheitlich)
└── README.md               Beschreibung der Struktur und Funktionen der Webseite

## Funktionen

1. **Responsive Seitenlayout**
    - Desktop-Variante (Breite: 768 px bis 1920 px) 
    - Mobile Variante (Breite: 360 px bis 767 px)
    - Unterscheidung wird mithilfe einer Media Query in style.css umgesetzt (@media (max-width: 767px) {...})

2. **Interaktionen mithilfe von JavaScript**
    - ausgewählte, kleinere Bilder können durch Anklicken vergrößert werden
    - JavaScript: function openImage(src)
    - bei hiragana.html und katakana.html umgesetzt
    - Struktur
        1. Bild bei Besuch der Seite (kleine Ansicht)
        2. Bild beim Hovern über dem Bild (Hinweis "Hier klicken für größere Ansicht")
        3. Bild wird durch Klicken über gesamten Bildschirm dargestellt (große Ansicht), kann per Klick 
                wieder ausgeblendet werden

3. **Hauptnavigation mit visuellen Hervorhebungen**
    - aktuelle (="aktive") Seite wird in der Hauptnavigation im Header visuell hervorgehoben
    - HTML
        - zu Beginn jeder Seite wird im <body> das Attribut data-page mit dem Namen der jeweiligen Seite 
            definiert
        - z.B. für Hiragana: <body data-page="hiragana">
        - semantisch ist die Hauptnavigation mit <nav>, <ul> und <li> aufgebaut
    - CSS
        - .nav-button wird mit .nav-button:hover ergänzt, sodass visuell hervorgehoben wird, auf welchem Menü-
            Punkt sich der Mauszeiger befindet (Desktop-Variante)
        - .nav-button.active kennzeichnet die aktuell geöffnete Seite durch eine andere Schriftstärke und eine 
            Unterstreichung.
    - JavaScript 
        - Die Funktion setActiveNav() liest den Wert des Attributs data-page aus.
        - Anschließend wird der entsprechende Navigationslink anhand seines href-Attributs ermittelt und mit 
            der CSS-Klasse active versehen.
        - Für die Seiten Schrift, Hiragana, Katakana und Kanji wird immer noch zusätzlich der 
            Dropdown-Menüpunkt „Schrift“ als aktiv markiert, damit auch die übergeordnete Kategorie hervorgehoben wird.
 
4. **HTML-Komponenten**
    - wiederkehrende Elemente per Components umgesetzt
    - umgesetzt beim Header (header.html) und dem Footer (footer.html) werden als Components umgesetzt
    - fehlende DOCTYPE-Definition
    - Vermeidung von sich wiederholendem Code
    - alle Seiten beinhalten Header und Footer

5. **CSS-Animationen zur optischen Hervorhebung von Inhalten** 
    - kleine Animationen, ohne vom Inhalt abzulenken

    **5.1.** bei "schrift.html"
        - Desktop-Variante: die Schriftkarte wird beim Hovern optisch hervorgehoben
            - CSS: 
                -beim Hovern werden die Karten 
                    1. leicht nach oben versetzttransform: translateY(-12px);
                    2. mit einem Schatten versehen: box-shadow: 0 20px 25px rgba(0, 0, 0, 0.25);
                    3. mir einer schwarzen Umrandung versehen: border-color: black;
                - mit Hilfe von "transition" werden die Änderungen weich animiert
        - mobile Variante: die Schriftkarte, die zu 95% zu sehen ist, wird optisch hervorgehoben
            - CSS: 
                - der hover-Effekt der Desktop-Variante wird überschrieben/"deaktiviert"
                - .schriftkarte.active -> Schatten + schwarze Umrandung
            - JavaScript: initSchriftkartenHighlight setzt Schriftkarte auf aktiv, sobald sie zu 95% zu
                sehen ist

    **5.2.** bei "kultur.html" und "kanji.html"
        - Info-Boxen mit Vor- und Rückseite
        - Vorderseite ("card-front"): direkt sichtbar
        - Rückseite ("card-back"):
            - zunächst nicht sichbar: "visibility: hidden;"
                - per Aktion wird die Vordereite auf "visibility: hidden;" gesetzt und die Rückseite mit "opacity: 1;" und "visibility: visible;" sichtbar gemacht
        - Desktop-Variante
            - beim Hovern wird die Karte umgedreht
            - mit Hilfe von "transition" wird der Wechsel zwischen Vorder- und Rückseite weich animiert
        - mobile Variante: per Klick
            - umgesetzt mit JavaScript "document.querySelectorAll(".boxes-card")"

    **5.3.** bei "hiragana.html" und "katakana.html"   
        - nur Desktop-Variante
        - Tabellen der Silbenschriften werden beim hovern größer (scale: 1.5) 

6. **Weboptimierte Medien**
    - mit Ziel einer guten Performance wurden Bilder bei Bedarf mithilfe von https://squoosh.app/ komprimiert
    - Datei-Typ: .webp
    - Ziel: Größe aller Bilder <400 KB, Größe der meisten Bilder <100 KB

7. **Back-to-Top**
    - in CSS: backToTop {}
    - in HTML: am Ende vom <body> mit einem button definiert
    - in JavaScript: sobald etwa 200 px nach unten gescrollt wurden, wird der Button unten rechts eingeblendet

8. **Einheitliches Farbkonzept mit CSS-Variablen**
    - Über :root wurden alle in der Webseiten verwendeten Farbe festgelegt
    - Alle Farben von Elemente innerhalb der CSS-Datei sind über var(--xyz) definiert
  
9. **Eigene 404-Seite definiert**
    - dreisprachiger Hinweistext (deutsch, englisch, japanisch)
    - Abschließender Link zurück zur Startseite

10. **Favicon und Logo**
    - Bild unter images "favicon.ico" 
    - wird sowohl als Favicon als auch als Logo verwendet
    - Es zeigt den Anfangsbuchstaben A des Vornamens der Webseiteninhaberin im Stil eines japanisches Toriis

11. **Dark Mode und Light Mode**
    - Wechsel zwischen den Modi ermöglicht
    - statt der Standardsymbole wie 🌙 und ☀️ wurden die japanischen Zeichen für Mond 月 und Sonne 日 mit
        passendem Design eingebaut
    - CSS: über body.darkmode werden die Variablen aus "root" für den Dark Mode neu definiert
    - JavaScript: 
        - initDarkMode(): Steuert den Dark-/Light-Mode, speichert die Auswahl im localStorage und verwaltet 
            die Button-Interaktionen.
        - updateDarkModeIcon(button): Aktualisiert das angezeigte Symbol abhängig vom aktiven Theme.
    - Für eine bessere Barrierefreiheit:
        - alt-Attribut der Icons wird auf "" gesetzt, da die Bilder ausschließlich dekorativ sind und keine 
            eigenständige Information vermitteln
        - der Button erhält ein dynamisch angepasstes aria-label („Zum Dark Mode wechseln“ bzw. „Zum Light 
            Mode wechseln“). Dadurch liest ein Screenreader nur die eigentliche Funktion des Buttons vor und nicht zusätzlich den Bildinhalt, wodurch redundante Ausgaben wie „Dark Mode. Zum Dark Mode wechseln“ vermieden werden.
    - mit einer CSS-Transition für alle Elemente (body, header, main, footer, nav, section, article, aside,
        button, a, div, span, p, h1, h2, h3, h4, h5, h6, li) wird der Übergang zwischen den Modi
        (Ligth <-> Dark) flüssigerer und visuell angenehmerer gestaltet
    - Beim Wechsel der Modi Dark <-> Light werden Symbole angezeigt, die sich langsam von oben nach unten
        verlagern und währenddessen langsam ausblenden
        - JavaScript
            - mit Hilfe der Funktion "createThemeEffect(symbol)" werden durch eine For-Schleife 8 
                Symbole erzeugt ("for (let i = 0; i < 8; i++)")
            - diese werden durch "particle.style.left = Math.random() * 100 + "%";" und
                "particle.style.top = Math.random() * 80 + "%";" zufällig platziert
                - zufällige horizontale Position
                -  "* 80" → begrenzt die vertikale Position auf die oberen 80 % des Bildschirms.
        - im CSS-Code "theme-particle" wird dafür gesorgt, dass die Symbole nur 0,8 Sekunden eingeblendet   
            werden, damit diese nicht zu lange vom Inhalt ablenken
        - Beim Wechsel zum Dark Mode → Sterne anzeigen mit "createThemeEffect("✦");"
        - Beim Wechsel zum Light Mode → Kirschblüten anzeigen mit "createThemeEffect("🌸");

## Verwendete Quellen

- Bilder: Quelle bei jedem Bild angegeben (ChatGPT oder Eigene Darstellung, vereinzelt weitere Quellen wie 
    Wikipedia)
- Inhalte: Eigene Formulierungen auf Grundlagen von eigenem Wissen und ChatGPT