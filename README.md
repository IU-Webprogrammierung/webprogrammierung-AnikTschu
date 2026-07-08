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

5. Mehrfachverwendung von Kategorien/Boxen mit Vor- und Rückseite
    - bei hkultur.html und kanji.html umgesetzt
    - Umsetzung mit CSS
    - Desktopversion: bei "boxes-grid" mit 4 Boxen in einer Reihe definiert (Mobile Variante: alle Boxen untereinander)
    - Vorderseite ("card-front")
    - Rückseite ("card-back") definiert, jedoch per "visibility: hidden;" zunächst nicht sichtbar
    - per :hover wird beim Mouseover die Vordereite auf "visibility: hidden;" gesetzt und die Rückseite mit "opacity: 1;" und
        "visibility: visible;" sichtbar gemacht


## Verwendete Quellen

- Bilder: Quelle bei jedem Bild angegeben (ChatGPT oder Eigene Darstellung, vereinzelt weitere Quellen wie 
    Wikipedia)
- Inhalte: Eigene Formulierungen auf Grundlagen von eigenem Wissen und ChatGPT