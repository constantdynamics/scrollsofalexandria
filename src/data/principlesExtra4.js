// Extra principles – batch 4 (10 principes: Psychologie & Besliskunde)

export const extraPrinciples4 = [
  // ── PSYCHOLOGIE ──────────────────────────────────────────────
  {
    id: "social-proof",
    title: "Sociale Bewijskracht",
    difficulty: 2,
    emoji: "👥",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    tags: ["Psychologie", "Beïnvloeding", "Groepsgedrag", "Mensen Begrijpen"],
    definition: "We beschouwen gedrag als correct als we zien dat anderen het ook doen. In onzekerheid kijken we naar wat de meerderheid doet als aanwijzing voor de juiste keuze.",
    abstractExample: "Als niemand weet wat de norm is, kopiëren mensen elkaars gedrag. Dit kan leiden tot kuddedrag: een trend zet door omdat iedereen denkt dat anderen het al evalueerden.",
    examples: [
      { domain: "business", icon: "💼", text: "'Al 10.000 klanten gingen je voor.' Restaurants plaatsen populaire gerechten bovenaan om sociale bewijskracht op te wekken." },
      { domain: "daily", icon: "🏠", text: "Een lege kroeg voelt ongemakkelijk; een volle kroeg trekt meer mensen aan. De drukte zelf is het signaal." },
      { domain: "science", icon: "🔬", text: "In Milgrams gehoorzaamheidsexperiment speelde de aanwezigheid van anderen die meededen een grote rol in het gedrag van deelnemers." }
    ],
    prerequisites: ["availability-heuristic"],
    unlocks: ["scarcity-effect"],
    relatedPrinciples: ["availability-heuristic", "confirmation-bias", "dunning-kruger"],
    exercises: [{
      type: "multiple-choice",
      question: "Waarom starten YouTubers soms met een gekochte hoeveelheid abonnees?",
      options: ["Om de algoritmes te misleiden", "Sociale bewijskracht: mensen abonneren liever op al-populaire kanalen", "Omdat het goedkoop is", "Om adverteerders aan te trekken"],
      correct: 1,
      feedback: "Sociale bewijskracht: een hoog aantal abonnees suggereert dat anderen al waarde zien in het kanaal, wat nieuwe bezoekers overtuigt om ook te abonneren."
    }],
    creativePrompt: "Bedenk drie manieren waarop sociale bewijskracht jouw aankoopbeslissingen beïnvloedt.",
    aiHelperPrompts: [
      "Wanneer vertrouw jij op wat anderen doen als leidraad voor jouw keuzes?",
      "Hoe zou jij een product lanceren zonder bestaande sociale bewijskracht?",
      "Wanneer is sociale bewijskracht een nuttige heuristiek en wanneer gevaarlijk?"
    ]
  },
  {
    id: "scarcity-effect",
    title: "Schaarste-effect",
    difficulty: 2,
    emoji: "⏳",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    tags: ["Psychologie", "Beïnvloeding", "Schaarste", "Mensen Begrijpen"],
    definition: "Dingen lijken waardevoller als ze schaars zijn of dreigen te verdwijnen. Beperkte beschikbaarheid verhoogt de gepercipieerde waarde, ongeacht de intrinsieke kwaliteit.",
    abstractExample: "Wanneer iets moeilijker te verkrijgen is, schrijven we het meer waarde toe. Dit geldt voor tijd ('nog 2 beschikbaar!'), toegang en exclusiviteit.",
    examples: [
      { domain: "business", icon: "💼", text: "'Nog 3 kamers beschikbaar op dit tijdstip!' Booking.com en vergelijkbare sites gebruiken schaarste actief om urgentie te creëren." },
      { domain: "daily", icon: "🏠", text: "Limited-edition sneakers zijn soms objectief niet beter, maar de schaarste maakt ze begeerlijker en duurder." },
      { domain: "science", icon: "🔬", text: "Onderzoekers gaven groepen identieke koekjes, maar één groep had een pot met 2 koekjes en de ander met 10. De groep met 2 beoordeelde ze als lekkerder." }
    ],
    prerequisites: ["social-proof", "loss-aversion"],
    unlocks: [],
    relatedPrinciples: ["loss-aversion", "framing-effect", "anchoring"],
    exercises: [{
      type: "multiple-choice",
      question: "Een webshop toont: 'Aanbieding eindigt over 02:14:33.' Welk principe wordt hier gebruikt?",
      options: ["Ankering", "Schaarste-effect (tijdschaarste)", "Sociale bewijskracht", "Framing"],
      correct: 1,
      feedback: "Schaarste-effect: de aftellende klok creëert kunstmatige tijdschaarste, wat de urgentie vergroot en impulsaankopen stimuleert."
    }],
    creativePrompt: "Beschrijf een situatie waarbij schaarste jou deed besluiten iets te kopen of doen wat je anders had uitgesteld.",
    aiHelperPrompts: [
      "Wanneer werd jij beïnvloed door 'op = op' of 'tijdelijk aanbod'?",
      "Hoe kun je schaarste onderscheiden van echte van kunstmatige schaarste?",
      "Hoe zou jij schaarste ethisch inzetten voor een eigen product?"
    ]
  },
  {
    id: "reciprocity",
    title: "Wederkerigheid",
    difficulty: 2,
    emoji: "🤝",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    tags: ["Psychologie", "Beïnvloeding", "Sociaal", "Mensen Begrijpen"],
    definition: "We voelen een sterke drang om terug te geven wat we ontvangen. Een gunst, cadeau of concessie creëert een sociale verplichting om iets terug te doen.",
    abstractExample: "Als A iets geeft aan B, ervaart B een psychologische druk om iets terug te geven. Dit werkt zelfs bij ongewenste giften en is een van de krachtigste sociale normen.",
    examples: [
      { domain: "business", icon: "💼", text: "Gratis samples in supermarkten verhogen de verkoopkans aanzienlijk: klanten voelen zich verplicht iets terug te doen voor het gratis monster." },
      { domain: "daily", icon: "🏠", text: "Als iemand je uitnodigt voor een feestje, voel je de druk om hem/haar ook uit te nodigen – zelfs als je dat normaal niet zou doen." },
      { domain: "science", icon: "🔬", text: "Cialdini toonde aan dat het sturen van een klein cadeau bij een enquête de respons significant verhoogde, ook al was het cadeau niets waard." }
    ],
    prerequisites: ["social-proof"],
    unlocks: [],
    relatedPrinciples: ["social-proof", "loss-aversion", "ikea-effect"],
    exercises: [{
      type: "multiple-choice",
      question: "Een verzekeraar stuurt je gratis een agenda met hun logo. Waarom doen ze dit?",
      options: ["Om naamsbekendheid te creëren", "Om wederkerigheid op te wekken en jou meer geneigd te maken zaken met hen te doen", "Omdat agenda's goedkoop zijn", "Om verplicht te stellen dat je klant wordt"],
      correct: 1,
      feedback: "Wederkerigheid: het gratis cadeau creëert een gevoel van verplichting. Mensen zijn daarna eerder geneigd de verzekeraar positief te beoordelen of te bellen."
    }],
    creativePrompt: "Beschrijf een moment waarop je iets deed (of kocht) omdat je je verplicht voelde na het ontvangen van een gunst.",
    aiHelperPrompts: [
      "Heb je wel eens iets gedaan puur omdat iemand je eerder heeft geholpen?",
      "Hoe gebruik jij wederkerigheid bewust in je relaties of werk?",
      "Wanneer is wederkerigheid een positieve sociale norm en wanneer manipulatief?"
    ]
  },
  {
    id: "spotlight-effect",
    title: "Schijnwerperseffect",
    difficulty: 2,
    emoji: "🔦",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    tags: ["Psychologie", "Zelfperceptie", "Sociaal", "Mensen Begrijpen"],
    definition: "We overschatten hoeveel anderen letten op ons uiterlijk, gedrag en fouten. De 'schijnwerper' die wij op onszelf richten, zien anderen nauwelijks.",
    abstractExample: "Als jij een vlek op je shirt hebt, denk je dat iedereen het ziet. In werkelijkheid merkt de meerderheid het niet of vergeet het snel – ze zijn bezig met hun eigen zorgen.",
    examples: [
      { domain: "science", icon: "🔬", text: "Gilovich et al. lieten studenten een shirt dragen met een gênant logo. Studenten dachten dat ~50% het zou opmerken; in werkelijkheid was het ~25%." },
      { domain: "daily", icon: "🏠", text: "Je zegt iets onhandigs in een vergadering en denkt de rest van de dag dat iedereen er nog aan denkt. Maar je collega's zijn er al lang overheen." },
      { domain: "business", icon: "💼", text: "Een presentator die een kleine fout maakt denkt dat het zijn geloofwaardigheid heeft geschaad. Het publiek heeft de fout vaak niet eens geregistreerd." }
    ],
    prerequisites: ["dunning-kruger"],
    unlocks: [],
    relatedPrinciples: ["dunning-kruger", "illusory-superiority", "curse-of-knowledge"],
    exercises: [{
      type: "multiple-choice",
      question: "Je struikelt in het openbaar. Hoe lang denken omstanders hier waarschijnlijk aan terug?",
      options: ["De rest van de dag", "Een week", "Seconden tot minuten", "Ze vergeten het nooit"],
      correct: 2,
      feedback: "Schijnwerperseffect: anderen besteden veel minder aandacht aan jouw momenten dan jijzelf. Ze zijn gefocust op hun eigen leven en vergeten het snel."
    }],
    creativePrompt: "Beschrijf een moment waarop je je erg zelfbewust voelde – en bedenk hoe anderen het waarschijnlijk echt ervaarden.",
    aiHelperPrompts: [
      "Wanneer heb jij je het meest bewust gevoeld van wat anderen van je zouden denken?",
      "Hoe zou het je gedrag veranderen als je wist dat mensen je veel minder observeren dan je denkt?",
      "Hoe helpt het schijnwerperseffect je om angst voor publiek optreden te begrijpen?"
    ]
  },
  {
    id: "planning-fallacy",
    title: "Planningsdrogreden",
    difficulty: 2,
    emoji: "📅",
    academicCategory: "Psychologie",
    skillCategory: "Beter Beslissen",
    tags: ["Psychologie", "Planning", "Tijdschatting", "Beter Beslissen"],
    definition: "We onderschatten systematisch de tijd, kosten en risico's van toekomstige plannen, terwijl we tegelijkertijd vergelijkbare taken in het verleden correct inschatten. We negeren historische data ten gunste van optimistische scenario's.",
    abstractExample: "Kahneman en Tversky: mensen schatten de voltooiingstijd van projecten te laag in, ook als ze weten dat vergelijkbare projecten uitliepen. De binnenperspectief overschaduwt het buitenperspectief.",
    examples: [
      { domain: "science", icon: "🔬", text: "De Sydney Opera House was gepland voor 1963 met een budget van 7 miljoen. Het werd klaar in 1973 voor 102 miljoen – een factor 14 over budget en 10 jaar vertraging." },
      { domain: "business", icon: "💼", text: "Softwareprojecten lopen gemiddeld 66% over budget en 33% over tijd – het is zo voorspelbaar dat het een eigen naam heeft: Hofstadters wet." },
      { domain: "daily", icon: "🏠", text: "'Dit rapport schrijf ik in twee uur.' Drie uur later ben je er nog mee bezig. Je negeerde onderbrekingen, complexiteit en perfectiedrang." }
    ],
    prerequisites: ["hyperbolic-discounting", "loss-aversion"],
    unlocks: [],
    relatedPrinciples: ["hyperbolic-discounting", "overconfidence", "sunk-cost-fallacy"],
    exercises: [{
      type: "multiple-choice",
      question: "Wat is de beste manier om de planningsdrogreden te corrigeren?",
      options: ["Extra motivatie om sneller te werken", "Vergelijkbare projecten uit het verleden raadplegen en die als basis nemen", "De deadline gewoon strikter stellen", "Meer mensen inzetten"],
      correct: 1,
      feedback: "Het 'buitenperspectief': gebruik de referentieklasse van vergelijkbare projecten om realistische tijden en kosten te schatten in plaats van je eigen optimistische scenario."
    }],
    creativePrompt: "Schat de tijd die je nodig hebt voor een aankomend project. Zoek dan een vergelijkbaar afgerond project en vergelijk die tijdsduur.",
    aiHelperPrompts: [
      "Welk project in jouw leven liep het meest uit op tijd of budget?",
      "Hoe zou je een project plannen als je wist dat je de tijd altijd onderschat?",
      "Wat is het verschil tussen optimisme en wishful thinking in planning?"
    ]
  },

  // ── BESLISKUNDE & ECONOMIE ───────────────────────────────────
  {
    id: "expected-value",
    title: "Verwachte Waarde",
    difficulty: 3,
    emoji: "🎰",
    academicCategory: "Besliskunde",
    skillCategory: "Beter Beslissen",
    tags: ["Besliskunde", "Statistiek", "Kansen", "Beter Beslissen"],
    definition: "De verwachte waarde van een keuze is de som van alle mogelijke uitkomsten, elk gewogen met hun kans. Het is de gemiddelde uitkomst bij een groot aantal herhalingen van dezelfde beslissing.",
    abstractExample: "EV = Σ (kans × uitkomst). Als een loterij 1 op 1.000.000 kans biedt op €1.000.000 en een lot kost €2, is de EV €1 – je verliest gemiddeld €1 per lot.",
    examples: [
      { domain: "science", icon: "🔬", text: "Bij medische beslissingen helpt verwachte waarde om behandelingen te vergelijken: kans op genezing × kwaliteitswinst minus kans op bijwerkingen × kwaliteitsverlies." },
      { domain: "business", icon: "💼", text: "Een project heeft 30% kans op €100.000 winst en 70% kans op €10.000 verlies. EV = 0,3×100.000 + 0,7×(−10.000) = €23.000. Positieve EV, dus rationeel om te doen." },
      { domain: "daily", icon: "🏠", text: "Een paraplu meenemen kost je 2 minuten ongemak. Geen paraplu en regen betekent nat worden (waarde −20). Bij 10% kans op regen: EV van meenemen is beter." }
    ],
    prerequisites: ["opportunity-cost", "diminishing-returns"],
    unlocks: ["risk-aversion"],
    relatedPrinciples: ["opportunity-cost", "loss-aversion", "risk-aversion"],
    exercises: [{
      type: "multiple-choice",
      question: "Een spel: 50% kans op €10 winnen, 50% kans op €6 verliezen. Wat is de verwachte waarde per spel?",
      options: ["€2", "€4", "€0", "€-3"],
      correct: 0,
      feedback: "EV = 0,5×10 + 0,5×(−6) = 5 − 3 = €2 per spel. Positieve verwachte waarde: rationeel om mee te doen als je vaak genoeg speelt."
    }],
    creativePrompt: "Kies een beslissing die je binnenkort moet nemen en bereken de verwachte waarde van je opties.",
    aiHelperPrompts: [
      "Welke grote beslissing heb jij genomen op gevoel terwijl kansen en uitkomsten bekend waren?",
      "Wanneer is de verwachte waarde een onvoldoende leidraad (denk aan risicogevoeligheid)?",
      "Hoe zou je de verwachte waarde gebruiken bij een sollicitatie of investering?"
    ]
  },
  {
    id: "risk-aversion",
    title: "Risicoaversie",
    difficulty: 3,
    emoji: "🛡️",
    academicCategory: "Besliskunde",
    skillCategory: "Beter Beslissen",
    tags: ["Besliskunde", "Risico", "Nutsfunctie", "Beter Beslissen"],
    definition: "Mensen kiezen doorgaans liever een zekere uitkomst boven een onzekere met dezelfde of zelfs hogere verwachte waarde. We zijn bereid te betalen voor zekerheid, boven en buiten de verwachte waarde.",
    abstractExample: "De nutsfunctie van geld is concaaf: €100 zekerheid is waardevoller dan 50% kans op €200, ook al zijn de verwachte waarden gelijk. De pijn van verlies weegt zwaarder dan het plezier van winst.",
    examples: [
      { domain: "science", icon: "🔬", text: "Bernoulli beschreef in 1738 al dat mensen liever €500 zeker nemen dan 50% kans op €1000, zelfs als de EV gelijk is." },
      { domain: "business", icon: "💼", text: "Verzekeringen zijn rationeel vanuit risicoaversie: je betaalt een premie (negatieve EV) voor de zekerheid dat je niet met een enorme schade zit." },
      { domain: "daily", icon: "🏠", text: "Je kiest een vaste baan boven zelfstandig ondernemen met hogere verwachte inkomsten maar meer onzekerheid – dat is risicoaversie in de praktijk." }
    ],
    prerequisites: ["expected-value", "loss-aversion"],
    unlocks: [],
    relatedPrinciples: ["loss-aversion", "expected-value", "hyperbolic-discounting"],
    exercises: [{
      type: "multiple-choice",
      question: "Je kiest tussen €50 zeker en 60% kans op €100 (EV = €60). Je kiest de €50. Wat laat dit zien?",
      options: ["Je maakt een rationele fout", "Risicoaversie: zekerheid heeft voor jou meer nut dan de EV suggereert", "Je begrijpt kansen niet", "Je bent irrationeel"],
      correct: 1,
      feedback: "Risicoaversie is niet irrationeel: het reflecteert dat de marginale waarde van geld afneemt. €50 zeker kan meer nut hebben dan een onzekere hogere EV."
    }],
    creativePrompt: "Noem drie keuzes in je leven waarbij je bewust een lagere EV koos voor zekerheid. Was dat verstandig?",
    aiHelperPrompts: [
      "Hoe risicoavers ben jij in financiële beslissingen vergeleken met in dagelijks leven?",
      "Wanneer is risicoaversie een verstandige strategie en wanneer een rem op groei?",
      "Hoe zou je risicoaversie gebruiken om te begrijpen waarom mensen een ziektekostenverzekering nemen?"
    ]
  },
  {
    id: "comparative-advantage",
    title: "Comparatief Voordeel",
    difficulty: 3,
    emoji: "🔄",
    academicCategory: "Besliskunde",
    skillCategory: "Beter Beslissen",
    tags: ["Economie", "Samenwerking", "Specialisatie", "Beter Beslissen"],
    definition: "Zelfs als iemand (of een land) absoluut beter is in alles, is het rationeel om te specialiseren in datgene waarbij de opportuniteitskosten het laagst zijn en de rest uit te besteden.",
    abstractExample: "Als A beter is in zowel X als Y, maar relatief nog beter in X, dan profiteert A van specialisatie in X en B van Y. Door handel zijn beide beter af dan zonder.",
    examples: [
      { domain: "science", icon: "🔬", text: "Ricardo's klassieke voorbeeld: Portugal produceert zowel wijn als laken efficiënter dan Engeland, maar heeft het grootste voordeel bij wijn. Specialisatie en handel maken beiden rijker." },
      { domain: "business", icon: "💼", text: "Een topadvocaat die ook snel typt, besteedt het typen toch uit. Zijn comparatief voordeel ligt bij juridisch advies; de typist heeft comparatief voordeel bij typen." },
      { domain: "daily", icon: "🏠", text: "Zelfs als jij beter kunt koken én beter kunt klussen dan je huisgenoot, is het efficiënter om te verdelen op basis van relatieve sterktes." }
    ],
    prerequisites: ["opportunity-cost", "diminishing-returns"],
    unlocks: [],
    relatedPrinciples: ["opportunity-cost", "pareto-efficiency", "diminishing-returns"],
    exercises: [{
      type: "multiple-choice",
      question: "Land A produceert in 1 uur 4 auto's of 8 ton graan. Land B produceert 1 auto of 1 ton graan. Wie heeft comparatief voordeel in graan?",
      options: ["Land A, want ze produceren meer graan", "Land B, want hun opportuniteitskosten voor graan zijn lager", "Beiden gelijk", "Het hangt af van de prijs"],
      correct: 1,
      feedback: "Voor land A kost 1 ton graan ½ auto. Voor land B kost 1 ton graan 1 auto. Land B heeft lagere opportuniteitskosten voor graan → comparatief voordeel in graan."
    }],
    creativePrompt: "Analyseer jouw sterke en zwakke punten. Waar heb jij comparatief voordeel ten opzichte van je collega's of vrienden?",
    aiHelperPrompts: [
      "Wat doe jij dat relatief beter is dan wat je collega's doen, zelfs als zij sommige dingen absoluut beter kunnen?",
      "Hoe gebruik jij comparatief voordeel in samenwerking of taakverdeling?",
      "Wanneer is specialisatie een risico (denk aan afhankelijkheid)?"
    ]
  },
  {
    id: "moral-hazard",
    title: "Moreel Risico",
    difficulty: 3,
    emoji: "⚖️",
    academicCategory: "Besliskunde",
    skillCategory: "Beter Beslissen",
    tags: ["Economie", "Gedrag", "Prikkels", "Beter Beslissen"],
    definition: "Als iemand beschermd is tegen de gevolgen van zijn risicovol gedrag, neemt hij meer risico dan hij anders zou nemen. De kosten worden gedragen door anderen; de baten zijn voor hemzelf.",
    abstractExample: "Als actor A verzekerd is voor de gevolgen van zijn acties, maar de kosten worden gedragen door actor B (verzekeraar, overheid, samenleving), heeft A een prikkel tot risicovoller gedrag.",
    examples: [
      { domain: "science", icon: "🔬", text: "Verzekeringstheorie: een volledig verzekerd automobilist rijdt minder voorzichtig dan een onverzekerde. De verzekeraar draagt de kosten, de bestuurder plukt de baten van risicogedrag." },
      { domain: "business", icon: "💼", text: "'Too big to fail': banken die weten dat de overheid hen zal redden, nemen meer financieel risico dan verantwoord is – de winsten zijn privaat, de verliezen sociaal." },
      { domain: "daily", icon: "🏠", text: "Een huurder die weet dat de verhuurder de borg toch terug betaalt, past minder goed op het huurhuis. De scheiding van kosten en baten verandert gedrag." }
    ],
    prerequisites: ["opportunity-cost", "prisoners-dilemma"],
    unlocks: [],
    relatedPrinciples: ["prisoners-dilemma", "tragedy-commons", "nash-equilibrium"],
    exercises: [{
      type: "multiple-choice",
      question: "Een zorgverzekering zonder eigen risico leidt ertoe dat mensen vaker de dokter bezoeken dan nodig. Wat illustreert dit?",
      options: ["Selectiebias", "Moreel risico: de scheiding van kosten en baten verandert gedrag", "Nash-evenwicht", "Comparatief voordeel"],
      correct: 1,
      feedback: "Moreel risico: als de kosten van zorg gedragen worden door de verzekeraar, neemt de drempel voor een doktersbezoek af. Dit is een prikkelprobleem, geen moreel oordeel."
    }],
    creativePrompt: "Beschrijf een situatie waarbij jij of anderen meer risico namen doordat de consequenties bij iemand anders lagen.",
    aiHelperPrompts: [
      "Hoe verandert jouw rijgedrag als je een volledig casco-verzekering hebt?",
      "Welke prikkels in jouw organisatie kunnen moreel risico veroorzaken?",
      "Hoe zou je een systeem ontwerpen dat moreel risico vermindert?"
    ]
  },
  {
    id: "margin-thinking",
    title: "Marginaal Denken",
    difficulty: 3,
    emoji: "➕",
    academicCategory: "Besliskunde",
    skillCategory: "Beter Beslissen",
    tags: ["Economie", "Besliskunde", "Marginalisme", "Beter Beslissen"],
    definition: "Rationele beslissingen worden gemaakt op de marge: wat kost of levert de volgende eenheid op? Niet de gemiddelde kosten of opbrengsten, maar de marginale zijn bepalend voor de optimale keuze.",
    abstractExample: "Als de marginale baten van een extra eenheid groter zijn dan de marginale kosten, is uitbreiding rationeel. Op het punt waarop marginale kosten = marginale baten, is het optimum bereikt.",
    examples: [
      { domain: "science", icon: "🔬", text: "Een fabriek besluit of ze een extra product maakt op basis van marginale kosten (extra grondstof, arbeid), niet de totale vaste kosten per product." },
      { domain: "business", icon: "💼", text: "Airlines bieden last-minute tickets aan voor prijzen ver onder de gemiddelde prijs: de vliegtuigstoel heeft toch nauwelijks marginale kosten als het vliegtuig al vliegt." },
      { domain: "daily", icon: "🏠", text: "'Ik heb al zo veel gegeten, één koekje meer maakt niet meer uit.' Dit is soms vreemd marginaal denken – het extra koekje heeft wel degelijk marginale calorieën." }
    ],
    prerequisites: ["opportunity-cost", "diminishing-returns"],
    unlocks: [],
    relatedPrinciples: ["opportunity-cost", "diminishing-returns", "sunk-cost-fallacy"],
    exercises: [{
      type: "multiple-choice",
      question: "Een student heeft al 3 uur gestudeerd en vraagt zich af of een 4e uur zinvol is. Wat is de juiste denkwijze?",
      options: ["Kijk hoeveel je in totaal hebt gestudeerd", "Vergelijk de extra leeropbrengst van het 4e uur met de kosten (tijd, vermoeidheid)", "Ga door, want je bent al begonnen", "Stop altijd na 3 uur"],
      correct: 1,
      feedback: "Marginaal denken: de vraag is niet hoeveel je al deed, maar wat het volgende uur extra oplevert versus kost. De eerdere uren zijn verzonken kosten."
    }],
    creativePrompt: "Beschrijf een beslissing waarbij jij ten onrechte naar gemiddelden keek in plaats van naar de marginale kosten en baten.",
    aiHelperPrompts: [
      "Hoe beslis jij wanneer je stopt met een activiteit – op basis van totalen of op de marge?",
      "Hoe gebruiken bedrijven marginaal denken bij prijsbeleid?",
      "Wanneer kan marginaal denken leiden tot slechte langetermijnbeslissingen?"
    ]
  }
];
