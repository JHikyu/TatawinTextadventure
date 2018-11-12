var advData = {
               "Startup": {
                              1: {
                                   Text: "Stadtwache:<br>Hallo Abenteurer!|||Stadtwache:<br>Guten Tag, Abenteurer!",
                                   Settings: {
                                        Typ: "Skip",
                                        To: 2
                                   }
                              },
                              2: {
                                   Text: "Stadtwache:<br>Wie lautet Dein Name?|||Stadtwache:<br>Sag Mir, wie lautet Dein Name?",
                                   Settings: {
                                        Typ: "WriteVar",
                                        Var: "USER_Name",
                                        Not: " ",
                                        To: 3
                                   }
                              },
                              3: {
                                   Text: "Stadtwache:<br>°USER_Name°?|||Stadtwache:<br>°USER_Name° also?",
                                   Settings: {
                                        Typ: "Bool",
                                        True: {
                                             To: 333
                                        },
                                        False: {
                                             To: 2
                                        }
                                   }
                              },
                              333: {
                                   Text: "",
                                   Settings: {
                                        Typ: "DBExists",
                                        What: "TatawinTextadventure/Users",
                                        Var: "USER_Name",
                                        True: {
                                             To: 25
                                        },
                                        False: {
                                             To: 4
                                        }
                                   }
                              },
                              4: {
                                   Text: "Stadtwache:<br>'Dich kenne Ich nicht..'|||Stadtwache:<br>'Nein. Den Namen habe ich noch nicht gehört.'",
                                   Settings: {
                                        Typ: "Skip",
                                        To: 5
                                   }
                              },
                              5: {
                                   Text: "Stadtwache:<br>'Sag mir Abenteurer, reist Du zum ersten Mal her?'",
                                   Settings: {
                                        Typ: "Bool",
                                        True: {
                                             To: 8
                                        },
                                        False: {
                                             To: 6
                                        }
                                   }
                              },
                              6: {
                                   Text: "Stadtwache:<br>'Bist Du Dir sicher, dass du °USER_Name° heißt?'|||Stadtwache:<br>'Hast Du Dich vielleicht versprochen? Du heißt wirklich °USER_Name°?'",
                                   Settings: {
                                        Typ: "Bool",
                                        True: {
                                             To: 7
                                        },
                                        False: {
                                             To: 2
                                        }
                                   }
                              },
                              7: {
                                   Text: "Stadtwache:<br>'Also sehe Ich Dich doch zum Ersten mal. Ich wusste, dass mir Dein Gesicht noch nicht bekannt war!'",
                                   Settings: {
                                        Typ: "Skip",
                                        To: 8
                                   }
                              },
                              8: {
                                   Text: "Stadtwache:<br>'Ich bin Turweck Eisenstein, die Stadtwache von Kleinwacht.'|||Stadtwache:<br>'Turweck Eisenstein Mein Name. Ich Schütze Kleinwacht vor dem Bösen!'",
                                   Settings: {
                                        Typ: "DBWrite",
                                        To: 9,
                                        What: "TatawinTextadventure/Users/°USER_Name°",
                                        Write: {
                                             Menge: 10,
                                             1: "Level:::1",
                                             2: "Erfahrung:::0",
                                             3: "Leben:::25",
                                             4: "Stärke:::10",
                                             5: "Geschick:::10",
                                             6: "Intelligenz:::10",
                                             7: "Ausdauer:::10",
                                             8: "Glück:::10",
                                             9: "Story:::0",
                                             10: "Münzen:::0"
                                        }
                                   }
                              },
                              9: {
                                   Text: "",
                                   Settings: {
                                        Typ: "DBWrite",
                                        To: 10,
                                        What: "TatawinTextadventure/Users/°USER_Name°/Inventar",
                                        Write: {
                                             Menge: 2,
                                             1: "Apfel:::2",
                                             2: "Brot:::1"
                                        }
                                   }
                              },
                              10: {
                                   Text: "Turweck Eisenstein:<br>'Brauchst Du eine kleine Führung durch die Mauern?'|||Turweck Eisenstein:<br>'Soll Dich Jemand begleiten und Dir alles zeigen?'",
                                   Settings: {
                                        Typ: "Bool",
                                        True: {
                                             To: 11
                                        },
                                        False: {
                                             To: 25
                                        }
                                   }
                              },
                              11: {
                                   Text: "Turweck Eisenstein:<br>'Warte hier einen Moment Ich hole Tiemi..'",
                                   Settings: {
                                        Typ: "Skip",
                                        To: 12
                                   }
                              },
                              12: {
                                   Text: "...",
                                   Settings: {
                                        Typ: "Skip",
                                        To: 13
                                   }
                              },
                              13: {
                                   Text: "Unbekannter:<br>'Tiemi Trinkgut mein Name, folge mir.'",
                                   Settings: {
                                        Typ: "Skip",
                                        To: 14
                                   }
                              },
                              14: {
                                   Text: "Tiemi Trinkgut:<br>'Dort drüben ist der Marktplatz, an Ihm stehen oft große Verkäufer.'",
                                   Settings: {
                                        Typ: "Skip",
                                        To: 15
                                   }
                              },
                              15: {
                                   Text: "Tiemi Trinkgut:<br>'Du kannst bei Verkäufern nahezu alles kaufen, was es auf Tatawin gibt!'",
                                   Settings: {
                                        Typ: "Skip",
                                        To: 16
                                   }
                              },
                              16: {
                                   Text: "Tiemi Trinkgut:<br>'Hier, links ist unsere Taverne. Die meisten nennen den Laden Kupfer Zwerg. Frag einfach nicht.'",
                                   Settings: {
                                        Typ: "Skip",
                                        To: 17
                                   }
                              },
                              17: {
                                   Text: "Tiemi Trinkgut:<br>'In den Kupfer Zwerg verlieren sich oft die Reisenden, daher ist die Taverne gut dazu, um Händler und Aufträge zu ergattern!'",
                                   Settings: {
                                        Typ: "Skip",
                                        To: 18
                                   }
                              },
                              18: {
                                   Text: "Tiemi Trinkgut:<br>'Beim Wirt bekommst Du auch jede Information, die Du Versäumst.. Keine sorge Du bist in Kleinwacht gut aufgehoben!'",
                                   Settings: {
                                        Typ: "Skip",
                                        To: 19
                                   }
                              },
                              19: {
                                   Text: "Tiemi Trinkgut:<br>'Gehen wir weiter.. dort ist der Hafen, erkundige Dich lieber selbst sobald du stark genug bist. Dort treiben sich nicht die nettesten Partner rum.'",
                                   Settings: {
                                        Typ: "Skip",
                                        To: 20
                                   }
                              },
                              20: {
                                   Text: "Tiemi Trinkgut:<br>'Stimmt! Bevor ich es vergesse: Du hast wie jeder andere Charakter auf Tatawin ein Inventar. In diesem sammeln sich alle Gegenstände die Du sonst wo ergatters an.'",
                                   Settings: {
                                        Typ: "Skip",
                                        To: 21
                                   }
                              },
                              21: {
                                   Text: "Tiemi Trinkgut:<br>'Ich bringe Dich jetzt zum Marktplatz, von da an kannst du Selbst entscheiden was Du tun willst.'",
                                   Settings: {
                                        Typ: "Skip",
                                        To: 22
                                   }
                              },
                              22: {
                                   Text: "Tiemi Trinkgut:<br>'Ich bringe Dich jetzt zum Marktplatz, von da an kannst du Selbst entscheiden was Du tun willst.'",
                                   Settings: {
                                        Typ: "Skip",
                                        To: 23
                                   }
                              },
                              23: {
                                   Text: "...",
                                   Settings: {
                                        Typ: "Skip",
                                        To: 24
                                   }
                              },
                              24: {
                                   Text: "Tiemi Trinkgut:<br>'Falls du noch Fragen hast, kannst du gerne zu mir in die Taverne kommen. Viel glück auf Tatawin!'",
                                   Settings: {
                                        Typ: "Skip",
                                        To: 25
                                   }
                              },
                              25: {
                                   Text: "",
                                   Settings: {
                                        Typ: "Adventure",
                                        Adventure: "Kleinwacht",
                                        To: "Marktplatz"
                                   }
                              },
                              26: {
                                   Text: "Schreib einfach das, was Du machen möchtest in das Feld hinein.",
                                   Settings: {
                                        Typ: "Skip",
                                        To: 25
                                   }
                              },
                              27: {
                                   Text: "Du stehst mitten auf Dem Marktplatz. Um Dich herum sind viele Bürger der Stadt Kleinwacht.",
                                   Settings: {
                                        Typ: "Skip",
                                        To: 25
                                   }
                              }
               },
               "Kleinwacht": {
                              Marktplatz: {
                                   Text: "Kleinwacht - Der Marktplatz<br>Was möchtest du tun?",
                                   Settings: {
                                        Console: "Kleinwacht - Der Marktplatz",
                                        Typ: "Choice",
                                        Choices: {
                                             Menge: 7,
                                             1: "inventar|||rucksack|||tasche|||backpack|||inventory|||beutel|||tüte",
                                             2: "laden|||shop|||kaufen|||verkaufen|||händler|||handeln",
                                             3: "taverne|||bar|||kneipe|||kupfer zwerg",
                                             4: "tiemi|||trinkgut",
                                             5: "was kann|||hilfe|||tip",
                                             6: "umsehen|||hier",
                                             7: ""
                                        },
                                        1: {
                                             To: "Inventar"
                                        },
                                        2: {
                                             To: "Händler"
                                        },
                                        3: {
                                             To: "Taverne"
                                        },
                                        4: {
                                             To: "WoIstTiemi"
                                        },
                                        5: {
                                             To: "MarktplatzWasMachen"
                                        },
                                        6: {
                                             To: "MarktplatzUmsehen"
                                        },
                                        7: {
                                             To: "Marktplatz"
                                        }
                                   }
                              },
                              Taverne: {
                                   Text: "",
                                   Settings: {
                                        Typ: "DBGet",
                                        What: "TatawinTextadventure/Users/°USER_Name°",
                                        Get: "Story",
                                        Var: "USER_Story",
                                        To: "Taverne2"
                                   }
                              },
                              Taverne2: {
                                   Text: "",
                                   Settings: {
                                        Typ: "IfNumber",
                                        Var: "USER_Story",
                                        Compare: 0,
                                        Equal: {
                                             To: "Taverne3"
                                        }
                                   }
                              },
                              Taverne3: {
                                   Text: "°USER_Name°:<br>'Der Kupfer Zwerg'. Wer auch immer sich diesen Namen ausgedacht hat.. Ich hoffe Tiemi ist da drinnen.",
                                   Settings: {
                                        Console: "Taverne weiter machen",
                                        Typ: "none",
                                        To: "Taverne2"
                                   }
                              },
                              Händler: {
                                   Text: "",
                                   Settings: {
                                        Typ: "DBGet",
                                        What: "TatawinTextadventure/Users/°USER_Name°",
                                        Get: "Story",
                                        Var: "USER_Story",
                                        To: "Händler2"
                                   }
                              },
                              Händler2: {
                                   Text: "",
                                   Settings: {
                                        Typ: "IfNumber",
                                        Var: "USER_Story",
                                        Compare: 0,
                                        Equal: {
                                             To: "Händler3"
                                        },
                                        Greater: {
                                             To: "Händler4"
                                        }
                                   }
                              },
                              Händler3: {
                                   Text: "°USER_Name°:<br>Ich sollte erstmal bei Tiemi vorbei schauen..",
                                   Settings: {
                                        Typ: "Skip",
                                        To: "Marktplatz"
                                   }
                              },
                              Händler4: {
                                   Text: "°Läden:",
                                   Console: "Kleinwacht Läden fertig machen",
                                   Settings: {
                                        Typ: "Skip",
                                        To: "Marktplatz"
                                   }
                              },
                              MarktplatzWasMachen: {
                                   Text: "°USER_Name°:<br>Ich könnte gucken, was es Neues in der Taverne gibt.|||°USER_Name°:<br>Vielleicht gibt es neue Aufträge an dem Schwarzen Brett.|||°USER_Name°:<br>Ich kann nachsehen, was Tiemi mal wieder benötigt.|||°USER_Name°:<br>Ich kann gucken, ob es neue Händler gibt.",
                                   Settings: {
                                        Typ: "Skip",
                                        To: "Marktplatz"
                                   }
                              },
                              MarktplatzUmsehen: {
                                   Text: "°USER_Name°:<br>Ich stehe auf dem Marktplatz. Um mich rum laufen viele Zwerge.. manche von ihnen verkaufen Waren. Westlich von dem Tor aus ist die Taverne auch genannt 'Der Kupfer Zwerg'. Unten am Meer ein kleiner Hangar mit vielen Zwergen und Menschen",
                                   Settings: {
                                        Typ: "Skip",
                                        To: "Marktplatz"
                                   }
                              },
                              Inventar: {
                                   Text: "Öffne Rucksack..|||Mal sehen was drinnen ist..",
                                   Settings: {
                                        Typ: "DBGetAll",
                                        What: "TatawinTextadventure/Users/°USER_Name°/Inventar",
                                        Var: "USER_Inventory",
                                        To: "Inventar2"
                                   }
                              },
                              Inventar2: {
                                   Text: "Durchwühle Rucksack..|||Durchsuche Rucksack|||Sieh an.. sieh an..",
                                   Settings: {
                                        Typ: "Skip",
                                        To: "Inventar3"
                                   }
                              },
                              Inventar3: {
                                   Text: "Inventar<br>°USER_Inventory°",
                                   Settings: {
                                        Typ: "Skip",
                                        To: "Marktplatz"
                                   }
                              },
                              WoIstTiemi: {
                                   Text: "°USER_Name°:<br>Tiemi sagte, dass sie in der Taverne.. 'Kupfer Zwerg' aufzufinden ist.",
                                   Settings: {
                                        Typ: "Skip",
                                        To: "Marktplatz"
                                   }
                              }
               }
}
