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
[none](https://github.com/JHikyu/TatawinTextadventure/blob/master/README.md#none),
[Skip](https://github.com/JHikyu/TatawinTextadventure/blob/master/README.md#Skip),
[Bool](https://github.com/JHikyu/TatawinTextadventure/blob/master/README.md#Bool),
[WriteVar](https://github.com/JHikyu/TatawinTextadventure/blob/master/README.md#WriteVar),
[SetVar](https://github.com/JHikyu/TatawinTextadventure/blob/master/README.md#SetVar),
[Choice](https://github.com/JHikyu/TatawinTextadventure/blob/master/README.md#Choice)
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
wartet auf eingabe von Spieler. Wenn die Eingabe etwas mit Ja zu tun hat, Springe zu True->To. Wenn nicht, Springe zu False->To

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

### WriteVar
lässt den Nutzer eine Variable einschreiben.
Gib eine Variable mit ° aus. Beispiel: °BeispielVariable°

- Zusätzlich:
    - To: (Id)
    - Var: (Variable Name)
    - Not: (Gesperrte Wörter mit ||| Trennen)
```
var advData = {
    "(Ort)": {
        1: {
            Text: "Gib deinen Usernamen ein.",
            Settings: {
                Typ: "WriteVar",
                Var: "username",
                Not: "1|||,|||:|||-|||_",
                To: "MeineVariable"
            }
        },
        MeineVariable: {
            Text: "Dies ist meine Variable: °username°",
            Settings: {
                Typ: "none"
            }
        }
    }
}
```

### SetVar
setzt eine Variable.
Gib eine Variable mit ° aus. Beispiel: °BeispielVariable°

- Zusätzlich:
    - To: (Id)
    - Var: (Variable Name)
    - Set: (Variable Inhalt)
```
var advData = {
    "(Ort)": {
        1: {
            Text: "Ich mache das schon..",
            Settings: {
                Typ: "SetVar",
                Var: "menge",
                Set: "Zehn",
                To: "MeineVariable"
            }
        },
        MeineVariable: {
            Text: "Dies ist meine Variable: °menge°",
            Settings: {
                Typ: "none"
            }
        }
    }
}
```

### Choice
lässt den Spieler zu eine von mehreren Auswahlmöglichkeiten springen

- Zusätzlich:
    - Choices:
        - Menge: (Anzahl der Möglichkeiten)
        - 1: "(Was muss der Spieler schreiben? Mit ||| Trennen)"
        - 2: ...
        - ...
    1:
        - To: (Id)
    2:
        - To: (Id)
    ...
```
var advData = {
    "(Ort)": {
        1: {
            Text: "Schreibe etwas",
            Settings: {
                Typ: "Choice",
                Choices: {
                     Menge: 3,
                     1: "eins|||1|||one",
                     2: "nein|||vielleicht|||oder|||ja|||wort",
                     3: "",
                },
                1: {
                     To: "Eins"
                },
                2: {
                     To: "Zwei"
                },
                3: {
                     To: "Leer"
                }
            }
        },
        Eins: {
            Text: "Es wurde eins, 1 oder one geschrieben.",
            Settings: {
                Typ: "none"
            }
        },
        Zwei: {
            Text: "Es wurde nein, vielleicht, oder, ja oder wort geschrieben.",
            Settings: {
                Typ: "none"
            }
        },
        Leer: {
            Text: "Es wurde nichts des Gleichen geschrieben.",
            Settings: {
                Typ: "Skip",
                To: 1
            }
        }
    }
}
```
