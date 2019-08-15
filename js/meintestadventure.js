var textadventure = {
     adventures: {
          Tatawin: {
               options: {},
               Areas: {},
               NPCs: {},
               Items: {}
          }
     }
}
lol ich habe ein test gemacht

textadventure.adventures.Tatawin.options = {
     title: "Tatawin - Zerfallene Welt",
     beschreibung: "Rette Tatawin vor der Macht des Tenodrits",
     money: {
          name: "Goldmünze",
          plural: "Goldmünzen"
     },
     startarea: "Grimberg"
}


textadventure.adventures.Tatawin.Areas = {
     Grimberg: {
          options: {
               type: "Town"
          },
          Start: {
               preloginMessages: [
                    "Hallo Abenteurer!",
                    "Wie lautet dein Name?"
               ],
               knownName: [
                    "Willkommen zurück!"
               ],
               notKnownName: [
                    
               ]
          },
          Marktplatz: {
          },
          Taverne: {
               options: {
                    type: "Building",
                    opentime: "10:00-22:00",
                    building: {
                         displayName: "Taverne",
                         article: "Die", // Die Taverne
                         articleGenitive: "Der", // Das Licht der Taverne
                         articleAccusative: "Die", // Du betrittst die Taverne
                         undefinedArticle: "Eine", // Eine Taverne
                    },
                    title: {
                         displayName: "Kupferzwerg",
                         article: "Der", // Der Kupferzwerg
                         articleGenitive: "Des|es", // Das Licht des Kupferzwerges
                         articleAccusative: "Den", // Du betrittst den Kupferzwerg
                         undefinedArticle: "Ein", // Ein Kupferzwerg
                    }
               },
               NPCs: [
                         {name: "TiemiTrinkgut", time: "10:05-19:00"}
               ],
               objects: [

               ]
          }
     }
}

textadventure.adventures.Tatawin.NPCs = {
     TiemiTrinkgut: {
          name: "Tiemi",
          lastName: "Trinkgut",
          gender: "Weiblich",
          race: "Dwarf",
          quests: {
               TestReden: {
                    displayName: "Test Reden",
                    shortDescription: "Ich habe etwas für dich. Rede einfach nochmal mit mir.",
                    completeMessage: "Und jetzt geh weg! Hier 5 Brote!",
                    rewards: [
                         {type: "Item", amount: 5, name: "Brot"},
                         {type: "Experience", amount: 120},
                         {type: "Money", amount: 16}
                    ],
                    task: [
                         {type: "Talk", NPC: "TiemiTrinkgut", helpMessage: "Rede mit Tiemie Trinkgut!", completeMessage: "Hi! Ich wollte gernicht mit dir reden.."},
                         {type: "Talk", NPC: "TiemiTrinkgut", helpMessage: "Rede noch ein mal mit Tiemie Trinkgut!", completeMessage: "Ok gut du hast gewonnen."}
                    ]
               }
          }
     }
}

textadventure.adventures.Tatawin.Items = {
     Brot: {
          type: "Usable",
          name: "Brot",
          levelRequirement: 1,
          worth: 14,
          effects: [
               {type: "Health", amount: 5, ranModifier: 1},
               {type: "Stamina", amount: 2, ranModifier: 4}
          ],
          useText: [
               "Mhhm.. lecker Brot.",
               "Das schmeckt gut."
          ]
     },
     KrugWasser: {
          type: "Usable",
          name: "Krug mit Wasser",
          worth: 8,
          levelRequirement: 1,
          effects: [
               {type: "Stamina", amount: 12, ranModifier: 4},
               {type: "Health", amount: 1, ranModifier: 1}
          ],
          useText: [
               "Das habe ich gebraucht.",
               "Erfrischend."
          ]
     },
     TrankDesTesters: {
          type: "Usable",
          name: "Trank des Testers",
          levelRequirement: 34,
          worth: 160,
          effects: [
               {type: "Boost", what: "Experience", multiplier: "2", time: "2h"}
          ],
          useText: [
               "Das sollte ich nicht zu oft trinken."
          ]
     },
     Ast: {
          type: "Craftable",
          name: "Ast",
          levelRequirement: 2,
          worth: 2
     }
}




console.log(textadventure.adventures)
