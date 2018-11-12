# Tatawin Textadventure
Eine JavaScript Library um das erstellen von Textadventures zu vereinfachen!


## Erste Schritte

### Installation
Füge [Hikyu.js](http://semver.org/) in deinem HTML Projekt hinzu

```
<script src="js/hikyu.js"></script>
```


## Beispiele

### Struktur
Hikyu.js ist auf Javascript [Objekte](https://www.w3schools.com/js/js_objects.asp) aufgebaut.

Das ist die einfachste Möglichkeit, **Tatawin Textadventure** zu benutzen:
```
var advData = {
    "(Ort)": {
        (Id): {
            Text: "Lorem ipsum dolor sit amet",
            Settings: {
                Typ: "none"
            }
        }
    }
}
```
* **Ort:** Der Oberordner aller *Texte* die Zusammen gehören.
* **Id:** Die Id Des Textes. Durch sie wird Identifiziert, wohin das Programm springen muss.
* **Text:** Wird dem Spieler ausgegeben.
* **Typ:** Die Art des ausgeführten Befehls. (none: kein Befehl)


## Befehle

### none
lässt das Programm für Immer und Ewig warten.

- Zusätzlich:
    - keine Funktion
```
var advData = {
    "(Ort)": {
        (Id): {
            Text: "Lorem ipsum dolor sit amet",
            Settings: {
                Typ: "none"
            }
        }
    }
}
```

### Skip
springt nach Drücken einer Taste zum in **To** definierten Bereich.

- Zusätzlich:
    - To: (Id)
```
var advData = {
    "(Ort)": {
        1: {
            Text: "Ich bin der Erste Text",
            Settings: {
                Typ: "Skip",
                To: 2
            }
        },
        2: {
            Text: "Ich bin Nummer Zwei.",
            Settings: {
                Typ: "none"
            }
        }
    }
}
```

### Bool
springt nach Drücken einer Taste zum in **To** definierten Bereich.

- Zusätzlich:
    - True:
        - To: (Id)
    - False:
        - To: (Id)
```
var advData = {
    "(Ort)": {
        1: {
            Text: "Schreibe Ja oder Nein",
            Settings: {
                Typ: "Bool",
                True: {
                     To: "AntwortRichtig"
                },
                False: {
                     To: "AntwortFalsch"
                }
            }
        },
        AntwortRichtig: {
            Text: "Der User hat Ja geschrieben.",
            Settings: {
                Typ: "none"
            }
        },
        AntwortFalsch: {
            Text: "Der User hat Nein geschrieben.",
            Settings: {
                Typ: "none"
            }
        }
    }
}
```
