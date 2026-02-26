// Extra principles – batch 6 (8 principes: Organisatie & Besliskunde)

export const extraPrinciples6 = [
  {
    id: "goodharts-law",
    title: "Wet van Goodhart",
    difficulty: 3,
    emoji: "📏",
    academicCategory: "Besliskunde",
    skillCategory: "Beter Beslissen",
    tags: ["Economie", "Organisatie", "Meting", "Beter Beslissen"],
    definition: "Zodra een maatstaf een doel wordt, houdt het op een goede maatstaf te zijn. Mensen optimaliseren voor de meting in plaats van voor wat de meting probeerde te vatten.",
    abstractExample: "Als prestatie-indicator M het doel wordt, wordt M geoptimaliseerd ten koste van het onderliggende doel D dat M moest meten. M ≠ D meer zodra M beloond wordt.",
    examples: [
      { domain: "science", icon: "🔬", text: "Wetenschappers worden beoordeeld op publicatieaantal → meer publicaties maar lagere gemiddelde kwaliteit. Het aantal publiceert als doel vervangt het eigenlijke doel: kennis vooruitbrengen." },
      { domain: "business", icon: "💼", text: "Callcenter-medewerkers worden beoordeeld op gespreksduur → gesprekken worden kunstmatig kort gehouden, problemen worden niet echt opgelost." },
      { domain: "daily", icon: "🏠", text: "Britse koloniale overheid in India beloonde de inlevering van kobrakoppen → mensen gingen cobra's kweken voor de beloning. Het cobra-effect in de praktijk." }
    ],
    prerequisites: ["second-order-effects", "moral-hazard"],
    unlocks: ["cobra-effect"],
    relatedPrinciples: ["cobra-effect", "moral-hazard", "second-order-effects"],
    exercises: [{
      type: "multiple-choice",
      question: "Een school wordt beoordeeld op slagingspercentage eindexamen. Wat is een voorspelbaar gevolg van Goodhart's wet?",
      options: ["Betere lessen", "Focus op toetsvoorbereiding ten koste van diep leren", "Meer gemotiveerde leerlingen", "Hogere leraarssalarissen"],
      correct: 1,
      feedback: "Goodhart's wet: de maatstaf (slagingspercentage) wordt het doel. Scholen optimaliseren voor de toets, niet voor diep begrip – wat de maatstaf beoogde te meten."
    }],
    creativePrompt: "Noem drie KPI's of meetdoelen in jouw werk of leven die mogelijk perverse prikkels creëren.",
    aiHelperPrompts: [
      "Welke metrics in jouw organisatie sturen onbedoeld het verkeerde gedrag?",
      "Hoe ontwerp je een beloningssysteem dat Goodhart's wet weerstaat?",
      "Wanneer is een maatstaf robuust genoeg om als doel te dienen?"
    ]
  },
  {
    id: "hanlons-razor",
    title: "Scheermes van Hanlon",
    difficulty: 2,
    emoji: "🪒",
    academicCategory: "Epistemologie",
    skillCategory: "Beter Redeneren",
    tags: ["Logica", "Epistemologie", "Attributie", "Beter Redeneren"],
    definition: "Schrijf nooit toe aan kwade wil wat voldoende verklaard kan worden door incompetentie, onwetendheid of onachtzaamheid. De meest parsimonische verklaring voor fouten is zelden slechtheid.",
    abstractExample: "Als actie A een negatief gevolg heeft voor jou, zijn er twee verklaringen: A is bewust kwaadaardig gedaan, of A is het gevolg van incompetentie/onwetendheid. Hanlon's scheermes zegt: kies de tweede verklaring tenzij je bewijs hebt voor de eerste.",
    examples: [
      { domain: "science", icon: "🔬", text: "Een slechte wetenschapper publiceert onjuiste resultaten. Is het fraude of slechte methode? Hanlon zegt: ga uit van methodologische fouten tenzij bewijs wijst op opzettelijke misleiding." },
      { domain: "business", icon: "💼", text: "Een collega stuurt een e-mail die jouw werk bekritiseert. Is het sabotage of slordigheid? Hanlon's scheermes suggereert: ga uit van slechte communicatie, niet slechte intenties." },
      { domain: "daily", icon: "🏠", text: "Je buurman parkeert herhaaldelijk voor jouw oprit. Is hij vijandig of gedachteloos? Waarschijnlijk onachtzaam." }
    ],
    prerequisites: ["occams-razor", "fundamental-attribution-error"],
    unlocks: [],
    relatedPrinciples: ["occams-razor", "fundamental-attribution-error", "self-serving-bias"],
    exercises: [{
      type: "multiple-choice",
      question: "Een overheidsproject loopt ver over budget. Wat is volgens Hanlon's scheermes de meest waarschijnlijke verklaring?",
      options: ["Bewuste corruptie", "Incompetentie en slechte planning", "Sabotage door oppositie", "Opzettelijke misleiding van burgers"],
      correct: 1,
      feedback: "Hanlon's scheermes: incompetentie en slechte planning zijn vaker de oorzaak van mislukkingen dan bewuste kwade wil, tenzij er concreet bewijs is voor opzet."
    }],
    creativePrompt: "Denk aan een situatie waarbij je iemands fout aanvankelijk als opzettelijk beschouwde. Was incompetentie een betere verklaring?",
    aiHelperPrompts: [
      "Wanneer heb jij iemands fout ten onrechte als kwaadaardig geïnterpreteerd?",
      "Hoe helpt Hanlon's scheermes bij het omgaan met conflicten op het werk?",
      "Wanneer is kwade wil wél de meest parsimonische verklaring?"
    ]
  },
  {
    id: "status-quo-bias",
    title: "Status-quo-bias",
    difficulty: 2,
    emoji: "🪨",
    academicCategory: "Psychologie",
    skillCategory: "Beter Beslissen",
    tags: ["Psychologie", "Bias", "Verandering", "Beter Beslissen"],
    definition: "We geven de voorkeur aan de huidige situatie boven verandering, zelfs als de verandering objectief beter is. Afwijking van de status quo voelt als een verlies, niet als een gemiste kans.",
    abstractExample: "Gegeven opties A (huidige situatie) en B (beter alternatief), kiezen mensen vaker A dan rationeel te rechtvaardigen is. De 'default' heeft een buitenproportioneel grote aantrekkingskracht.",
    examples: [
      { domain: "science", icon: "🔬", text: "Orgaandonatie: landen met opt-out (je bent automatisch donor tenzij je je afmeldt) hebben 90%+ donorpercentages. Opt-in landen hebben 10-30%. De default is bijna allesbepalend." },
      { domain: "business", icon: "💼", text: "Werknemers kiezen zelden hun pensioenbijdrage actief om; de standaard instelling van de werkgever wordt doorgaans behouden, ook als een hogere bijdrage beter is." },
      { domain: "daily", icon: "🏠", text: "Je gebruikt nog steeds dezelfde bank, hetzelfde abonnement, dezelfde supermarkt – niet omdat het de beste keuze is, maar omdat overstappen moeite kost." }
    ],
    prerequisites: ["loss-aversion", "anchoring"],
    unlocks: [],
    relatedPrinciples: ["loss-aversion", "sunk-cost-fallacy", "choice-overload"],
    exercises: [{
      type: "multiple-choice",
      question: "Waarom veranderen bedrijven de standaardinstellingen van software zelden naar de meest privacyvriendelijke optie?",
      options: ["Technisch onmogelijk", "Status-quo-bias: de meeste gebruikers passen de default niet aan, dus de default bepaalt het werkelijke gedrag van de massa", "Gebruikers vragen er niet om", "Het kost te veel geld"],
      correct: 1,
      feedback: "Status-quo-bias: de default wordt door de meerderheid behouden. Bedrijven die data willen verzamelen, profiteren hiervan door opt-out als default te kiezen."
    }],
    creativePrompt: "Lijst drie situaties in jouw leven op waar je de status quo aanhoudt niet omdat het optimaal is, maar omdat veranderen energie kost.",
    aiHelperPrompts: [
      "Welke abonnementen of gewoonten houdt jij aan puur uit inertie?",
      "Hoe gebruik jij status-quo-bias bewust in productontwerp of communicatie?",
      "Wanneer is vasthouden aan de status quo een verstandige strategie?"
    ]
  },
  {
    id: "ikea-effect",
    title: "IKEA-effect",
    difficulty: 2,
    emoji: "🪛",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    tags: ["Psychologie", "Waardebepaling", "Arbeid", "Mensen Begrijpen"],
    definition: "We hechten onevenredig veel waarde aan dingen die we zelf hebben gemaakt of samengesteld, ongeacht de objectieve kwaliteit. Eigen inspanning verhoogt de gepercipieerde waarde.",
    abstractExample: "Als persoon A product P zelf in elkaar zet en persoon B een identiek kant-en-klaar product krijgt, waardeert A het product hoger dan B. De inspanning creëert een emotionele binding.",
    examples: [
      { domain: "science", icon: "🔬", text: "Norton, Mochon & Ariely (2011): deelnemers boden meer voor origami die ze zelf hadden gevouwen dan voor identieke origami van professionals. Ze overschatten hun eigen creaties." },
      { domain: "business", icon: "💼", text: "IKEA verkoopt platte pakketten niet alleen voor efficiënt transport – klanten die meubels zelf monteren waarderen ze meer en zijn loyaler aan het merk." },
      { domain: "daily", icon: "🏠", text: "Zelfgekookt eten smaakt (subjectief) beter dan identiek bereid eten van een restaurant. De inspanning van het koken verhoogt de ervaren waarde." }
    ],
    prerequisites: ["loss-aversion", "sunk-cost-fallacy"],
    unlocks: [],
    relatedPrinciples: ["sunk-cost-fallacy", "ownership-effect", "reciprocity"],
    exercises: [{
      type: "multiple-choice",
      question: "Een gebruiker bouwt zijn eigen website met een simpele tool. Hij vindt hem mooier dan professioneel gemaakte websites. Wat verklaart dit?",
      options: ["Hij heeft betere smaak", "Het IKEA-effect: eigen inspanning verhoogt gepercipieerde kwaliteit", "De website is echt mooier", "Hij wil geld besparen"],
      correct: 1,
      feedback: "IKEA-effect: de eigen inspanning creëert emotionele binding en verhoogt de subjectieve waarde, los van de objectieve kwaliteit."
    }],
    creativePrompt: "Denk aan iets wat je zelf hebt gemaakt en nu te hoog waardeert. Hoe zou je het objectief beoordelen?",
    aiHelperPrompts: [
      "Welk project of product van jezelf waardeer jij waarschijnlijk hoger dan anderen?",
      "Hoe gebruik jij het IKEA-effect in een product of dienst om klantloyaliteit te verhogen?",
      "Wanneer is het IKEA-effect schadelijk (bijv. bij bedrijfsbeslissingen over eigen projecten)?"
    ]
  },
  {
    id: "choice-overload",
    title: "Keuzeparadox",
    difficulty: 2,
    emoji: "😵",
    academicCategory: "Psychologie",
    skillCategory: "Beter Beslissen",
    tags: ["Psychologie", "Keuze", "Beslissen", "Beter Beslissen"],
    definition: "Te veel keuzes leiden niet tot meer vrijheid maar tot verlamming, slechtere beslissingen en minder tevredenheid met de gemaakte keuze. Boven een optimaal aantal opties neemt de besliskwaliteit af.",
    abstractExample: "Bij n opties neemt de cognitieve last toe met n. Boven een drempel (empirisch vaak 7±2 tot contextafhankelijk) daalt de kans op een beslissing en de tevredenheid na de keuze.",
    examples: [
      { domain: "science", icon: "🔬", text: "Iyengar & Lepper (2000): jam-experiment. 24 soorten jam trok meer bezoekers, maar 6 soorten leidde tot 10× meer aankopen. Meer keuze = minder actie." },
      { domain: "business", icon: "💼", text: "Netflix verwijderde honderden titels en zag de kijktijd stijgen. Te veel keuze leidt tot het eindeloos scrollen zonder iets te kijken." },
      { domain: "daily", icon: "🏠", text: "In een restaurant met 200 gerechten bestel je minder zeker en ben je minder tevreden dan in een restaurant met 15 goed gekozen opties." }
    ],
    prerequisites: ["status-quo-bias", "loss-aversion"],
    unlocks: [],
    relatedPrinciples: ["status-quo-bias", "satisficing", "anchoring"],
    exercises: [{
      type: "multiple-choice",
      question: "Een webshop vermindert het aantal productvarianten van 50 naar 10 en ziet de conversie stijgen. Wat verklaart dit?",
      options: ["Klanten zijn lui", "Keuzeparadox: minder opties verlagen de cognitieve last en stimuleren beslissingen", "De 10 producten zijn beter", "Prijzen zijn gedaald"],
      correct: 1,
      feedback: "Keuzeparadox: te veel opties creëren beslisverlamming. Minder keuzes verlagen de cognitieve last, waardoor klanten sneller en met meer tevredenheid beslissen."
    }],
    creativePrompt: "Beschrijf een situatie waarbij teveel keuzes jou verlammden. Hoe had een beperktere set geholpen?",
    aiHelperPrompts: [
      "In welke gebieden van jouw leven heb je te veel keuzes en hoe kun je dat vereenvoudigen?",
      "Hoe balanceer je als ontwerper voldoende keuze versus keuzeverlamming?",
      "Wanneer is meer keuze wél beter (bijv. bij experts in hun vakgebied)?"
    ]
  },
  {
    id: "parkinsons-law",
    title: "Wet van Parkinson",
    difficulty: 2,
    emoji: "⏰",
    academicCategory: "Organisatie",
    skillCategory: "Beter Beslissen",
    tags: ["Organisatie", "Productiviteit", "Tijd", "Beter Beslissen"],
    definition: "Werk vult de tijd die ervoor beschikbaar is. Hoe ruimer de deadline, hoe meer het werk uitdijt – niet door meer kwaliteit, maar door uitstelgedrag, perfectiedrang en onnodige uitbreidingen.",
    abstractExample: "Als taak T tijdsconstante D heeft, neemt de feitelijke werktijd toe naar D, ongeacht hoe lang T intrinsiek duurt. Krappe deadlines dwingen prioritering en focus.",
    examples: [
      { domain: "science", icon: "🔬", text: "C. Northcote Parkinson (1955): ambtenarenapparaten groeien ongeacht werkvolume. Een gepensioneerde vrouw schrijft in een uur een brief; een bureaucratie besteedt er een dag aan." },
      { domain: "business", icon: "💼", text: "Een vergadering van 2 uur besteedt aan een 10-minutentaak precies 2 uur. Dezelfde vergadering van 30 minuten rondt de taak af in 30 minuten." },
      { domain: "daily", icon: "🏠", text: "Een rapport dat je eigenlijk in een dagdeel kunt schrijven, neemt een week als je een week hebt. De taak dijt uit om de beschikbare tijd te vullen." }
    ],
    prerequisites: ["planning-fallacy", "hyperbolic-discounting"],
    unlocks: [],
    relatedPrinciples: ["planning-fallacy", "bikeshedding", "satisficing"],
    exercises: [{
      type: "multiple-choice",
      question: "Een team krijgt 3 maanden voor een project dat in 6 weken kan. Wat voorspelt de wet van Parkinson?",
      options: ["Het wordt eerder klaar", "Het werk vult 3 maanden – met meer vergaderingen, revisies en scope-uitbreiding", "De kwaliteit is beter", "Het team werkt harder"],
      correct: 1,
      feedback: "Wet van Parkinson: werk vult de beschikbare tijd. Extra tijd leidt zelden tot significant betere kwaliteit, maar wel tot meer onnodige uitbreidingen en processen."
    }],
    creativePrompt: "Stel jezelf een kunstmatig krappe deadline voor een taak die je uitstelt. Wat gebeurt er met je focus?",
    aiHelperPrompts: [
      "Welke taken in jouw werk of leven dijen uit door te ruime deadlines?",
      "Hoe gebruik je krappe timeboxing om efficiënter te werken?",
      "Wanneer is ruimere tijd wél nodig voor betere kwaliteit?"
    ]
  },
  {
    id: "cobra-effect",
    title: "Cobra-effect",
    difficulty: 3,
    emoji: "🐍",
    academicCategory: "Besliskunde",
    skillCategory: "Beter Beslissen",
    tags: ["Organisatie", "Beleid", "Onbedoelde Gevolgen", "Beter Beslissen"],
    definition: "Een oplossing die het oorspronkelijke probleem erger maakt doordat de prikkel het tegenovergestelde gedrag uitlokt van wat beoogd werd. Slecht ontworpen beloningen en regels creëren perverse prikkels.",
    abstractExample: "Overheid wil probleem P verminderen → beloont/straft indicator I → mensen optimaliseren voor I op manieren die P doen toenemen. De interventie verergert wat ze wilde oplossen.",
    examples: [
      { domain: "science", icon: "🔬", text: "Brits India: overheid betaalde beloning voor dode cobra's om de populatie te verminderen. Indiërs begonnen cobra's te kweken voor de beloning → na stopzetting werden ze vrijgelaten → meer cobra's dan ooit." },
      { domain: "business", icon: "💼", text: "Om de klantenservicedruk te verminderen, werd een FAQ-pagina toegevoegd. Maar de FAQ genereerde meer vragen dan hij beantwoordde – mensen die de FAQ niet lazen, raakten nu verwarder." },
      { domain: "daily", icon: "🏠", text: "Ouder verbiedt kind snoep volledig → kind wordt obsessief met snoep en eet meer bij vrienden thuis dan het anders zou doen." }
    ],
    prerequisites: ["goodharts-law", "second-order-effects"],
    unlocks: [],
    relatedPrinciples: ["goodharts-law", "second-order-effects", "moral-hazard"],
    exercises: [{
      type: "multiple-choice",
      question: "Een stad betaalt subsidie per gesignaleerde rattennest om rattenplaag te bestrijden. Wat is het risico?",
      options: ["Te duur voor de stad", "Bewoners gaan ratten kweken voor de subsidie", "Ratten worden immuun", "De subsidie is te laag"],
      correct: 1,
      feedback: "Cobra-effect: de prikkel (subsidie per nest) lokt het tegenovergestelde gedrag uit. Mensen creëren het probleem dat beloond wordt voor oplossing."
    }],
    creativePrompt: "Bedenk een beleid of regel in jouw omgeving dat mogelijk het cobra-effect heeft (het probleem erger maakt).",
    aiHelperPrompts: [
      "Welke regels of beloningssystemen in jouw werk creëren onbedoeld slecht gedrag?",
      "Hoe test je of een beleid het cobra-effect heeft voordat je het invoert?",
      "Wat is het verschil tussen het cobra-effect en Goodhart's wet?"
    ]
  },
  {
    id: "chestertons-fence",
    title: "Hek van Chesterton",
    difficulty: 3,
    emoji: "🚧",
    academicCategory: "Epistemologie",
    skillCategory: "Beter Redeneren",
    tags: ["Logica", "Epistemologie", "Conservatisme", "Beter Redeneren"],
    definition: "Verwijder of verander niets voordat je begrijpt waarom het er is. Als je het doel van iets niet kunt verklaren, begrijp je het systeem onvoldoende om er veilig iets aan te veranderen.",
    abstractExample: "Als je een hek tegenkomt en zijn doel niet begrijpt, mag je het niet weghalen. Begrijp eerst waarom het er staat; dan kun je besluiten of weghalen verstandig is.",
    examples: [
      { domain: "science", icon: "🔬", text: "Darwinistische 'rudimentaire' organen (appendix, wijsheidstanden) werden lang als nutteloos gezien. Onderzoek toont aan dat veel een functie hebben die we eerder niet begrepen." },
      { domain: "business", icon: "💼", text: "Een nieuwe CTO schrapt een 'verouderd' proces zonder te begrijpen waarvoor het diende. Later blijkt het een workaround te zijn voor een fundamenteel systeemlimiet." },
      { domain: "daily", icon: "🏠", text: "Je verwijdert een 'onnodige' stap uit een recept. Het gerecht mislukt. Die stap had een functie die je niet begreep." }
    ],
    prerequisites: ["second-order-effects", "epistemic-humility"],
    unlocks: [],
    relatedPrinciples: ["second-order-effects", "occams-razor", "epistemic-humility"],
    exercises: [{
      type: "multiple-choice",
      question: "Een nieuwe manager schrapt een wekelijkse status-update-meeting die 'tijdverspilling' lijkt. Wat zegt het hek van Chesterton hierover?",
      options: ["Goede beslissing, meetings zijn altijd verspilling", "Begrijp eerst waarom de meeting er was voordat je hem schrapt", "Vraag de agenda aan", "Vervang het met een e-mail"],
      correct: 1,
      feedback: "Hek van Chesterton: begrijp eerst de functie voordat je iets verwijdert. De meeting kan informele kennisdeling, alignment of vroeg-signalering van problemen faciliteren."
    }],
    creativePrompt: "Noem iets in jouw omgeving (werk, thuis) dat 'nutteloos' lijkt maar mogelijk een functie heeft die je niet meteen ziet.",
    aiHelperPrompts: [
      "Welke regels of processen in jouw organisatie irriteren jou maar waarvan je de rationale niet kent?",
      "Hoe pas je het hek van Chesterton toe bij het refactoren van code?",
      "Wanneer is iets echt nutteloos versus onbegrepen?"
    ]
  }
];
