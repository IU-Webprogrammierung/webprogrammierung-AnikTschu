# Projekt: Anikas Japan-Webseite

## Autor

- Name: Anika Tschunt
- Matrikelnummer: IU14091234
- Studiengang: Medieninformatik
- Modul: Projekt: Medieninformatik
- Semester: 04.05.- 27.07.2026

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
├── components/                 
│   └── footer.html
│   └── header.html
└── README.md

## Funktionen

1. Responsive Seitenlayout
    - Desktop-Variante (Breite: 768 px bis 1920 px) 
    - Mobile Variante (Breite: 360 px bis 767 px)
    - Unterscheidung wird mithilfe einer Media Query in style.css umgesetzt (@media (max-width: 767px) {...})

2. Interaktionen mithilfe von JavaScript
    - ausgewählte, kleinere Bilder können durch Anklicken vergrößert werden
    - JavaScript: function openImage(src)
    - bei hiragana.html und katakana.html umgesetzt
    - Struktur
        1. Bild bei Besuch der Seite (kleine Ansicht)
        2. Bild beim Hovern über dem Bild (Hinweis "Hier klicken für größere Ansicht")
        3. Bild wird durch Klicken über gesamten Bildschirm dargestellt (große Ansicht), kann per Klick 
                wieder ausgeblendet werden

3. Navigation mit visuellen Hinweisen mithilfe von JavaScript und CSS
    - aktuelle (="aktive") Seite wird in der Hauptnavigation im Header visuell hervorgehoben
    - HTML
        - zu Beginn jeder Seite wird im Body ein data-page="name-der-seite" definiert
        - z.B. für Hiragana: <body data-page="hiragana">
    - CSS
        - .nav-button wird mit .nav-button:hover ergänzt, sodass visuell hervorgehoben wird, auf welchem Menü-
                Punkt sich der Cursor befindet (Desktop-Variante)
        - .nav-button.active setzt Farbschema für aktuelle ("aktive") Seite
    - JavaScript 
        - function setActiveNav() {} setzt aktuelle Seite auf "active"
 
4. HTML-Komponenten
    - wiederkehrende Elemente per Components umgesetzt
    - umgesetzt beim Header (header.html) und dem Footer (footer.html) werden als Components umgesetzt
    - fehlende DOCTYPE-Definition
    - Vermeidung von sich wiederholendem Code
    - alle Seiten beinhalten Header und Footer

5. CSS-Transition: Boxen mit Vor- und Rückseite
    - bei kultur.html und kanji.html umgesetzt
    - Umsetzung mit CSS
    - Desktopversion: bei "boxes-grid" mit 4 Boxen in einer Reihe definiert (Mobile Variante: alle Boxen untereinander)
    - Vorderseite ("card-front")
    - Rückseite ("card-back") definiert, jedoch per "visibility: hidden;" zunächst nicht sichtbar
    - per :hover wird beim Mouseover die Vordereite auf "visibility: hidden;" gesetzt und die Rückseite mit "opacity: 1;" und
        "visibility: visible;" sichtbar gemacht

6. Weboptimierte Medien
    - mit Ziel einer guten Performance wurden Bilder bei Bedarf mithilfe von https://squoosh.app/ komprimiert
    - Datei-Typ: .webp
    - Ziel: Größe aller Bilder <400 KB, Größe der meisten Bilder <100 KB

7. Back-to-Top
    - in CSS: backToTop {}
    - in HTML: am Ende vom <body> mit einem button definiert
    - in JavaScript: sobald etwa 200 px nach unten gescrollt wurden, wird der Button unten rechts eingeblendet

8. Einheitliches Farbkonzept mit CSS-Variablen
    - Über :root wurden alle in der Webseiten verwendeten Farbe festgelegt
    - Alle Farben von Elemente innerhalb der CSS-Datei sind über var(--xyz) definiert
    - verwendete Farben:  
        --japanred: rgb(188, 0, 45); (angelehnt an das Rot der Japanischen Flagge, wobei es für die
            Webseite etwas dunkler gewählt wurde, um einen ausreichenden Kontrast zu Weiß zu erzeugen)
        --white: white;
        --lightgray: #f0f0f0;
        --darkgray: #666666;
        --black: black;

## Verwendete Quellen

- Bilder: Quelle bei jedem Bild angegeben (ChatGPT oder Eigene Darstellung, vereinzelt weitere Quellen wie 
    Wikipedia)
- Inhalte: Eigene Formulierungen auf Grundlagen von eigenem Wissen und ChatGPT