# [Tatawin Textadventure](https://github.com/JHikyu/TatawinTextadventure/edit/master/README.md) / Befehle
[none](https://github.com/JHikyu/TatawinTextadventure/blob/master/README.md#none),
[Skip](https://github.com/JHikyu/TatawinTextadventure/blob/master/README.md#Skip),
[Bool](https://github.com/JHikyu/TatawinTextadventure/blob/master/README.md#Bool),
[IfNumber](https://github.com/JHikyu/TatawinTextadventure/blob/master/README.md#IfNumber),
[WriteVar](https://github.com/JHikyu/TatawinTextadventure/blob/master/README.md#WriteVar),
[SetVar](https://github.com/JHikyu/TatawinTextadventure/blob/master/README.md#SetVar),
[SetRanVar](https://github.com/JHikyu/TatawinTextadventure/blob/master/README.md#SetVar),
[Choice](https://github.com/JHikyu/TatawinTextadventure/blob/master/README.md#Choice),
[DBExists](https://github.com/JHikyu/TatawinTextadventure/blob/master/README.md#DBExists),
[DBWrite](https://github.com/JHikyu/TatawinTextadventure/blob/master/README.md#DBWrite),
[DBGetAll](https://github.com/JHikyu/TatawinTextadventure/blob/master/README.md#DBGetAll),
[DBGet](https://github.com/JHikyu/TatawinTextadventure/blob/master/README.md#DBGet)


## none
lässt das Programm für Immer und Ewig warten.

- Zusätzlich:
    - keine Funktion
```js
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

## Skip
springt nach Drücken einer Taste zum in **To** definierten Bereich.

- Zusätzlich:
    - To: (Id)
```js
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

## Bool
wartet auf eingabe von Spieler. Wenn die Eingabe etwas mit Ja zu tun hat, Springe zu True->To. Wenn nicht, Springe zu False->To

- Zusätzlich:
    - True:
        - To: (Id)
    - False:
        - To: (Id)
```js
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

## IfNumber
prüft ob eine Variable Gleich, Großer oder Kleiner als ein Vergleichswert ist.

- Zusätzlich:
    - Var: "Die zu überprüfende Variable"
    - Compare: "Der Vergleichswert" (Kann auch eine Variable sein)
    - Equal:
        - To: (Id)
    - Greater:
        - To: (Id)
    - Less:
        - To: (Id)
```js
var advData = {
    "(Ort)": {
        1: {
            Text: "Schreibe Ja oder Nein",
            Settings: {
                Typ: "IfNumber",
                Var: "°birnen°",
                Compare: "°äpfel°",
                Equal: {
                     To: "Gleich"
                },
                Greater: {
                     To: "Mehr"
                },
                Less: {
                     To: "Weniger"
                }
            }
        },
        Gleich: {
            Text: "Es gibt gleich viele Birnen wie Äpfel",
            Settings: {
                Typ: "none"
            }
        },
        Mehr: {
            Text: "Es gibt mehr Birnen als Äpfel",
            Settings: {
                Typ: "none"
            }
        },
        Weniger: {
            Text: "Es gibt weniger Birnen als Äpfel",
            Settings: {
                Typ: "none"
            }
        }
    }
}
```

## WriteVar
lässt den Nutzer eine Variable einschreiben.
Gib eine Variable mit ° aus. Beispiel: °BeispielVariable°

- Zusätzlich:
    - To: (Id)
    - Var: (Variable Name)
    - Not: (Gesperrte Wörter mit ||| Trennen)
```js
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

## SetVar
setzt eine Variable.
Gib eine Variable mit ° aus. Beispiel: °BeispielVariable°

- Zusätzlich:
    - To: (Id)
    - Var: (Variable Name)
    - Set: (Variable Inhalt)
```js
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

## SetRanVar
belegt eine Variable mit einer Zufällig generierten Zahl
Gib eine Variable mit ° aus. Beispiel: °BeispielVariable°

- Zusätzlich:
    - To: (Id)
    - Var: (Die zu beschreibene Variable)
    - Min: (Minimaler Wert)
    - Max: (Maximaler Wert)
    - Round: (Zu rundene Stellen [100 = 2 | 1000 = 3])
```js
var advData = {
    "(Ort)": {
        1: {
            Text: "Der Würfel dreht sich..",
            Settings: {
                Typ: "SetRanVar",
                Var: "zufallszahl",
                Min: "1",
                Max: "6",
                To: "Ergebnis"
            }
        },
        Ergebnis: {
            Text: "Du hast eine °zufallszahl° gewürfelt!",
            Settings: {
                Typ: "none"
            }
        }
    }
}
```

## Choice
lässt den Spieler zu eine von mehreren Auswahlmöglichkeiten springen

- Zusätzlich:
    - Choices:
        - Menge: (Anzahl der Möglichkeiten)
        - 1: "(Was muss der Spieler schreiben? Mit ||| Trennen)"
        - 2: ...
        - ...
    - 1:
        - To: (Id)
    - 2:
        - To: (Id)
    ...
```js
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

## DBExists
überprüft ob eine Variable in deiner Datenbank existiert.
Ja: True->To, Nein: False->To

- Zusätzlich:
    - What: "(Pfad des Datenbank 'Ordners')"
    - Var: "(Die gesuchte Variable)"
    - True:
        - To: (Id)
    - False:
        - To: (Id)
```js
var advData = {
    "(Ort)": {
        1: {
            Text: "Schreibe Ja oder Nein",
            Settings: {
                Typ: "DBExists",
                What: "DeineDatenbank/Users",
                Var: "username",
                True: {
                     To: "Ja"
                },
                False: {
                     To: "Nein"
                }
            }
        },
        Ja: {
            Text: "Existiert in der Datenbank",
            Settings: {
                Typ: "none"
            }
        },
        Nein: {
            Text: "Existiert nicht in der Datenbank",
            Settings: {
                Typ: "none"
            }
        }
    }
}
```

## DBWrite
überschreibt beliebig viele einträge in der Datenbank.

- Zusätzlich:
    - To: (Id)
    - What: "(Pfad des Datenbank 'Ordners')"
    - Write:
        - Menge: (Anzahl der Möglichkeiten)
        - 1: "(Eintragname:::Inhalt)"
        - 2: ...
        - ...
```js
var advData = {
    "(Ort)": {
        1: {
            Text: "Datenbank wird beschrieben..",
            Settings: {
                Typ: "DBWrite",
                What: "DeineDatenbank/Settings",
                Write: {
                     Menge: 2,
                     1: "Vollbild:::true",
                     2: "Lang:::GER-DE"
                }
            }
        }
    }
}
```

## DBGetAll
**Arrays können bis dato nur als ganze ausgegeben werden.**

speichert alle Einträge aus einem Datenbank-Pfad in einen Array.

- Zusätzlich:
    - To: (Id)
    - What: "(Pfad des Datenbank 'Ordners')"
    - Var: "(Array, in der alles gespeichert wird)"
```js
var advData = {
    "(Ort)": {
        1: {
            Text: "Variable wird beschrieben..",
            Settings: {
                Typ: "DBGetAll",
                What: "TatawinTextadventure/Nutzer",
                Var: "complete",
                To: 2
            }
        },
        2: {
            Text: "Mein Array: °complete°",
            Settings: {
                Typ: "none"
            }
        }
    }
}
```

## DBGet
speichert den Eintrag aus einem Datenbank-Pfad in eine Variable.

- Zusätzlich:
    - To: (Id)
    - What: "(Pfad des Datenbank 'Ordners')"
    - Get: "(Key des Gesuchten Elementes)"
    - Var: "(Variable in der das Element gespeichert wird)"
```js
var advData = {
    "(Ort)": {
        1: {
            Text: "Variable wird beschrieben..",
            Settings: {
                Typ: "DBGet",
                What: "TatawinTextadventure/Nutzer",
                Get: "Passwort",
                Var: "passwort",
                To: 2
            }
        },
        2: {
            Text: "Meine Variable: °passwort°",
            Settings: {
                Typ: "none"
            }
        }
    }
}
```
