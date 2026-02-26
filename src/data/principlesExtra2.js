// Extra principles – batch 2 of 3 (principles 29-57)

export const extraPrinciples2 = [
  // ── SPELTHEORIE ──────────────────────────────────────────────
  {
    id: "nash-equilibrium",
    title: "Nash-Evenwicht",
    difficulty: 3,
    emoji: "🎯",
    academicCategory: "Speltheorie",
    skillCategory: "Strategisch Denken",
    tags: ["Speltheorie", "Strategie", "Besluitvorming", "Strategisch Denken"],
    definition: "Een situatie waarbij geen enkele speler zijn uitkomst kan verbeteren door eenzijdig van strategie te wisselen, gegeven de strategieën van de andere spelers.",
    abstractExample: "Stel iedere speler kiest zijn optimale strategie gegeven de keuzes van de anderen. Als niemand een prikkel heeft om af te wijken, is er een Nash-evenwicht – ook al is het voor allen suboptimaal.",
    examples: [
      { domain: "business", icon: "💼", text: "Twee benzinestations tegenover elkaar passen hun prijs voortdurend aan. Ze bereiken een evenwicht: beiden kunnen de prijs niet verhogen zonder klanten te verliezen." },
      { domain: "politics", icon: "🏛️", text: "De wapenwedloop: beide landen bewapenen zich maximaal. Eenzijdig ontwapenen is nadelig, dus blijven beide bewapend – een stabiel maar suboptimaal evenwicht." },
      { domain: "daily", icon: "🏠", text: "In files: rijden over de vluchtstrook helpt het individu maar verergert de file. Als iedereen dezelfde redenering volgt, ontstaat een chaotisch maar 'stabiel' evenwicht." }
    ],
    prerequisites: ["prisoners-dilemma"],
    unlocks: ["pareto-efficiency"],
    relatedPrinciples: ["prisoners-dilemma", "dominant-strategy", "pareto-efficiency"],
    exercises: [{
      type: "multiple-choice",
      question: "Beide bedrijven zetten hoge advertentiebudgetten in. Als één bedrijf stopt, verliest het marktaandeel. Wat beschrijft dit?",
      options: [
        "Een Pareto-optimale situatie",
        "Een Nash-evenwicht – niemand kan eenzijdig verbeteren zonder nadeel",
        "Een prisoner's dilemma",
        "Een dominante strategie"
      ],
      correct: 1,
      feedback: "Juist! Geen enkel bedrijf kan zijn advertentiebudget eenzijdig verlagen zonder marktaandeel te verliezen – typisch Nash-evenwicht."
    }],
    creativePrompt: "Beschrijf een situatie in je werk of leven waarbij iedereen vastzit in een patroon dat niemand eenzijdig kan doorbreken.",
    aiHelperPrompts: ["Welke situaties ken je waarbij iedereen doet wat anderen ook doen, niet wat optimaal is?", "Hoe zou samenwerking een beter evenwicht kunnen creëren?", "Wanneer is een evenwicht stabiel maar suboptimaal voor alle betrokkenen?"]
  },
  {
    id: "zero-sum-games",
    title: "Zero-Sum vs. Niet-Nulsom Spelen",
    difficulty: 2,
    emoji: "🏆",
    academicCategory: "Speltheorie",
    skillCategory: "Strategisch Denken",
    tags: ["Speltheorie", "Samenwerking", "Strategie", "Strategisch Denken"],
    definition: "In een nulsomspel is de winst van de ene speler precies het verlies van de ander (totaal = 0). In niet-nulsomspelen kunnen alle partijen winnen of verliezen.",
    abstractExample: "Nulsom: jij wint €100 = ik verlies €100. Niet-nulsom: handel waarbij beide partijen meer welvaart creëren, of samenwerking waarbij 1+1=3.",
    examples: [
      { domain: "business", icon: "💼", text: "Aanbestedingen zijn vaak nulsom: de winnaar pakt het contract, de rest verliest. Maar samenwerking op standaarden is niet-nulsom: de hele sector wint." },
      { domain: "politics", icon: "🏛️", text: "Territoriale conflicten zijn vaak nulsom: land dat jij hebt, heeft de ander niet. Handelsakkoorden zijn niet-nulsom: beide economieën groeien." },
      { domain: "daily", icon: "🏠", text: "Sport is nulsom: één winnaar, één verliezer. Maar een vriendelijke samenwerking om een klus te klaren is niet-nulsom: beiden bereiken meer." }
    ],
    prerequisites: ["prisoners-dilemma"],
    unlocks: [],
    relatedPrinciples: ["prisoners-dilemma", "nash-equilibrium", "tragedy-commons"],
    exercises: [{
      type: "multiple-choice",
      question: "Twee buurlanden sluiten een handelsverdrag. Beide exporteren meer en importeren goedkopere goederen. Is dit nulsom?",
      options: [
        "Ja, want wat het ene land wint, verliest het andere",
        "Nee, want beide landen worden welvarender – het is niet-nulsom",
        "Ja, want er is altijd een winnaar en een verliezer",
        "Onbekend – het hangt af van de details"
      ],
      correct: 1,
      feedback: "Precies! Handel is klassiek niet-nulsom: door specialisatie en ruil neemt de totale welvaart toe. Beide partijen kunnen winnen."
    }],
    creativePrompt: "Beschrijf een situatie die je aanvankelijk als nulsom zag, maar waarbij samenwerking juist voor beide partijen voordelig kon zijn.",
    aiHelperPrompts: ["Wanneer behandelde je een onderhandeling als wedstrijd terwijl samenwerking meer had opgeleverd?", "Welke problemen in je omgeving zijn niet-nulsom en bieden kansen voor samenwerking?", "Hoe herken je of een situatie echt nulsom is?"]
  },
  {
    id: "tragedy-commons",
    title: "Tragedie van de Meent (Tragedy of the Commons)",
    difficulty: 2,
    emoji: "🌿",
    academicCategory: "Speltheorie",
    skillCategory: "Strategisch Denken",
    tags: ["Speltheorie", "Samenleving", "Collectief Handelen", "Strategisch Denken"],
    definition: "Wanneer een gedeeld, begrensd hulpbron door individuen wordt uitgebuit op basis van eigenbelang, resulteert dit in de uitputting van dat hulpbron – wat schadelijk is voor alle gebruikers.",
    abstractExample: "Elk individu profiteert maximaal van de gemeenschappelijke bron R. Maar als iedereen hetzelfde doet, raakt R uitgeput. Rationeel individueel handelen leidt tot collectief verlies.",
    examples: [
      { domain: "politics", icon: "🏛️", text: "Visserij in internationale wateren: elk land vist zoveel mogelijk, totdat de vispopulatie instort. Rationeel individueel, rampzalig collectief." },
      { domain: "daily", icon: "🏠", text: "Verkeerscongestie: iedereen kiest de auto want het is handig. Maar als iedereen dit doet, staat iedereen in de file." },
      { domain: "business", icon: "💼", text: "Overexploitatie van het internet: spam, bots en clickfraude beschadigen de gedeelde bron (vertrouwen in online communicatie)." }
    ],
    prerequisites: ["prisoners-dilemma"],
    unlocks: [],
    relatedPrinciples: ["prisoners-dilemma", "nash-equilibrium", "zero-sum-games"],
    exercises: [{
      type: "multiple-choice",
      question: "Wat is de kern van de 'tragedie van de meent'?",
      options: [
        "Gedeelde middelen zijn altijd inefficiënt",
        "Individueel rationeel handelen kan collectief irrationele uitkomsten produceren",
        "Eigendom is altijd beter dan gemeenschappelijk bezit",
        "Mensen zijn van nature egoïstisch"
      ],
      correct: 1,
      feedback: "Juist! De kern is dat elk individu rationeel handelt (meer nemen is voordelig voor mij), maar de som van die keuzes verwoest de gedeelde bron."
    }],
    creativePrompt: "Beschrijf een gedeeld middel in jouw omgeving dat door individueel eigenbelang wordt uitgeput.",
    aiHelperPrompts: ["Welke gedeelde middelen zie je in je werk, buurt of online dat overbenut worden?", "Hoe kun je collectieve actie organiseren om een gemeenschappelijk goed te beschermen?", "Wanneer leverde individueel eigenbelang schade op aan de gemeenschap?"]
  },
  {
    id: "tit-for-tat",
    title: "Tit-for-Tat Strategie",
    difficulty: 2,
    emoji: "🤝",
    academicCategory: "Speltheorie",
    skillCategory: "Strategisch Denken",
    tags: ["Speltheorie", "Samenwerking", "Strategie", "Strategisch Denken"],
    definition: "Een coöperatieve strategie: begin met samenwerken, daarna doe je wat de ander de vorige ronde deed. Beloont samenwerking, bestraft verraad direct, maar vergeet snel.",
    abstractExample: "Ronde 1: jij werkt samen. Ronde n+1: jij doet wat de ander in ronde n deed. Resultaat: stabiele samenwerking als de ander ook samenwerkt; directe vergeldging bij verraad.",
    examples: [
      { domain: "business", icon: "💼", text: "Leverancier-afnemer relatie: je betaalt altijd op tijd zolang zij goed leveren. Als zij een keer slecht leveren, pas je je aan. Snel vergeven bij herstel." },
      { domain: "politics", icon: "🏛️", text: "Diplomatie: een land reageert op sancties met tegensancties, maar staat open voor normalisering als de ander de-escaleert." },
      { domain: "daily", icon: "🏠", text: "Buurrelaties: jij helpt je buur als hij jou heeft geholpen. Als hij je pest, wees je minder behulpzaam. Maar zodra hij normaal doet, ook jij weer." }
    ],
    prerequisites: ["prisoners-dilemma"],
    unlocks: [],
    relatedPrinciples: ["prisoners-dilemma", "nash-equilibrium", "zero-sum-games"],
    exercises: [{
      type: "multiple-choice",
      question: "Wat maakt tit-for-tat een succesvolle strategie in herhaalde spelen?",
      options: [
        "Het maximaliseert altijd de korte-termijn winst",
        "Het beloont samenwerking, bestraft verraad en vergeet snel – waardoor duurzame samenwerking mogelijk is",
        "Het is onvoorspelbaar voor de tegenstander",
        "Het vermijdt alle conflicten"
      ],
      correct: 1,
      feedback: "Precies! Tit-for-tat is eenvoudig, vriendelijk (begint met samenwerking), vergeldend (bestraft verraad) en vergevingsgezind (herstelt na normalisering)."
    }],
    creativePrompt: "Beschrijf een relatie waarbij jij een tit-for-tat benadering (bewust of onbewust) hanteert.",
    aiHelperPrompts: ["Hoe reageer jij als iemand je oneerlijk behandelt – sla je terug of vergeet je het?", "Wanneer werkte een vergeldingstactiek goed in het herstel van een samenwerking?", "Hoe kun je tit-for-tat toepassen zonder escalatie?"]
  },
  {
    id: "dominant-strategy",
    title: "Dominante Strategie",
    difficulty: 2,
    emoji: "♟️",
    academicCategory: "Speltheorie",
    skillCategory: "Strategisch Denken",
    tags: ["Speltheorie", "Strategie", "Besluitvorming", "Strategisch Denken"],
    definition: "Een strategie die voor een speler altijd de beste keuze is, ongeacht wat de andere spelers doen.",
    abstractExample: "Strategie D domineert strategie C als D voor elke mogelijke tegenstrategie een betere of gelijke uitkomst geeft. Een rationele speler kiest altijd zijn dominante strategie.",
    examples: [
      { domain: "business", icon: "💼", text: "In een veiling is ophogen met €1 altijd de dominante strategie als je weet dat je het wil winnen en het budget het toelaat." },
      { domain: "politics", icon: "🏛️", text: "In het prisoner's dilemma is 'verraden' de dominante strategie: ongeacht wat de ander doet, ben je beter af met verraden." },
      { domain: "daily", icon: "🏠", text: "Bij rotsteen-papier-schaar bestaat geen dominante strategie: elke keuze verliest van een andere. Zonder dominantie moet je randomiseren." }
    ],
    prerequisites: ["prisoners-dilemma"],
    unlocks: [],
    relatedPrinciples: ["nash-equilibrium", "prisoners-dilemma", "zero-sum-games"],
    exercises: [{
      type: "multiple-choice",
      question: "Wat maakt een strategie 'dominant'?",
      options: [
        "Het is de populairste keuze",
        "Het is ongeacht de keuze van de tegenstander de beste optie",
        "Het leidt altijd tot winst",
        "Het is moeilijk te voorspellen"
      ],
      correct: 1,
      feedback: "Juist! Een dominante strategie is de beste keuze voor jou, ongeacht wat anderen doen – je hoeft hun strategie niet te kennen."
    }],
    creativePrompt: "Beschrijf een beslissing in je werk of leven waarbij één optie bijna altijd de beste is, ongeacht omstandigheden.",
    aiHelperPrompts: ["Welke keuzes in je leven zijn altijd goed, ongeacht de context?", "Hoe herken je een dominante strategie in een onderhandeling?", "Wanneer is diversificatie beter dan één dominante aanpak?"]
  },
  {
    id: "pareto-efficiency",
    title: "Pareto-Efficiëntie",
    difficulty: 2,
    emoji: "🎪",
    academicCategory: "Speltheorie",
    skillCategory: "Strategisch Denken",
    tags: ["Speltheorie", "Economie", "Optimalisatie", "Strategisch Denken"],
    definition: "Een situatie is Pareto-efficiënt als niemand beter af kan worden zonder dat iemand anders slechter af wordt. Pareto-verbeteringen zijn kansen om allen beter te maken.",
    abstractExample: "Toestand A is Pareto-superieur aan B als minstens één persoon in A beter af is en niemand slechter. A is Pareto-optimaal als er geen B bestaat die A Pareto-domineert.",
    examples: [
      { domain: "business", icon: "💼", text: "Een handel waarbij koper meer waardeert wat hij koopt dan de prijs die hij betaalt, en de verkoper meer de prijs waardeert dan het product: Pareto-verbetering." },
      { domain: "politics", icon: "🏛️", text: "Een beleidsmaatregel die alle burgers beter af maakt zonder niemand te benadelen is een Pareto-verbetering. Zulke maatregelen zijn politiek makkelijk te rechtvaardigen." },
      { domain: "daily", icon: "🏠", text: "Twee vrienden ruilen taken: jij kookt (wat je leuk vindt), hij doet de afwas (wat hij minder erg vindt). Beiden profiteren." }
    ],
    prerequisites: ["nash-equilibrium"],
    unlocks: [],
    relatedPrinciples: ["nash-equilibrium", "zero-sum-games", "diminishing-returns"],
    exercises: [{
      type: "multiple-choice",
      question: "Een nieuwe werkverdeling maakt drie medewerkers gelukkiger en één medewerker even tevreden. Is dit een Pareto-verbetering?",
      options: [
        "Nee, want niet iedereen profiteert",
        "Ja, want niemand wordt slechter af en sommigen worden beter af",
        "Alleen als de medewerker die gelijk blijft ermee instemt",
        "Nee, want Pareto vereist dat allen profiteren"
      ],
      correct: 1,
      feedback: "Correct! Een Pareto-verbetering vereist dat niemand slechter af wordt en minstens één persoon beter af wordt. Dit voldoet aan beide voorwaarden."
    }],
    creativePrompt: "Beschrijf een ruil, taakverdeling of akkoord dat een Pareto-verbetering was voor alle betrokkenen.",
    aiHelperPrompts: ["Welke samenwerkingen of ruilingen in je leven maakten iedereen beter af?", "Hoe identificeer je kansen voor Pareto-verbeteringen in teams?", "Wanneer is een compromis toch geen Pareto-verbetering?"]
  },
  {
    id: "schelling-point",
    title: "Schelling Point (Focuspunt)",
    difficulty: 3,
    emoji: "📍",
    academicCategory: "Speltheorie",
    skillCategory: "Strategisch Denken",
    tags: ["Speltheorie", "Coördinatie", "Strategie", "Strategisch Denken"],
    definition: "Een oplossing die mensen kiezen bij gebrek aan communicatie, puur op basis van gezamenlijke verwachting of salience. Mensen convergeren naar het meest 'voor de hand liggende' punt.",
    abstractExample: "Als twee mensen onafhankelijk een afspraakplaats moeten kiezen in een stad (zonder communicatie), kiezen ze waarschijnlijk hetzelfde markante punt – dat is het Schelling point.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Je afspreekt met iemand in New York zonder exact adres. De meeste mensen kiezen Grand Central Station of Times Square – herkenbaar, centraal, uniek." },
      { domain: "business", icon: "💼", text: "Bij onderhandelingen convergeert men snel naar ronde getallen (€100, €500, €1000) zelfs zonder expliciete afspraken." },
      { domain: "politics", icon: "🏛️", text: "Wapenstilstanden houden vaak halt bij geografische markers (rivieren, wegen) die voor beide partijen salient zijn." }
    ],
    prerequisites: ["prisoners-dilemma"],
    unlocks: [],
    relatedPrinciples: ["nash-equilibrium", "tit-for-tat", "zero-sum-games"],
    exercises: [{
      type: "multiple-choice",
      question: "Je moet je vriend ontmoeten in een onbekende stad, maar je telefoon is dood. Waar ga je heen?",
      options: [
        "Het dichtstbijzijnde café",
        "Het meest herkenbare en centrale punt van de stad – het Schelling point",
        "Het hotel waar je logeert",
        "Je wacht bij de bushalte"
      ],
      correct: 1,
      feedback: "Juist! Het Schelling point is het meest voor de hand liggende coördinatiepunt dat beiden onafhankelijk zouden kiezen."
    }],
    creativePrompt: "Beschrijf een situatie waarbij jij en iemand anders onbewust convergerden naar dezelfde oplossing zonder expliciet af te spreken.",
    aiHelperPrompts: ["Welke onuitgesproken normen of verwachtingen bestaan in jouw team of sociale kring?", "Hoe maak je gebruik van Schelling points in onderhandelingen?", "Wanneer koos een groep dezelfde oplossing zonder formele discussie?"]
  },
  // ── COGNITIEVE BIASES ────────────────────────────────────────
  {
    id: "dunning-kruger",
    title: "Dunning-Kruger Effect",
    difficulty: 2,
    emoji: "🧠",
    academicCategory: "Epistemologie",
    skillCategory: "Manipulatie Herkennen",
    tags: ["Cognitieve Bias", "Psychologie", "Zelfkennis", "Manipulatie Herkennen"],
    definition: "Mensen met weinig kennis overschatten hun competentie, terwijl experts hun vaardigheid juist onderschatten. Incompetentie verhindert de herkenning van incompetentie.",
    abstractExample: "Hoe minder je weet over domein X, hoe minder je beseft hoeveel je niet weet. Je confidence is omgekeerd aan competentie bij lage kennisniveaus.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Na één YouTube-tutorial over beleggen voelt iemand zich expert. Na jaren studie realiseert men hoeveel ze nog niet weten." },
      { domain: "business", icon: "💼", text: "Een junior medewerker is zelfverzekerd in een vergadering. Een senior expert zegt voorzichtig: 'Ik weet het niet zeker, maar...'." },
      { domain: "politics", icon: "🏛️", text: "Een politicus zonder economische achtergrond kondigt zelfverzekerd complexe economische maatregelen aan; economen zijn voorzichtiger." }
    ],
    prerequisites: ["confirmation-bias"],
    unlocks: [],
    relatedPrinciples: ["confirmation-bias", "epistemic-humility", "availability-heuristic"],
    exercises: [{
      type: "multiple-choice",
      question: "Welk gedrag illustreert het Dunning-Kruger effect het best?",
      options: [
        "Een expert die twijfelt aan zijn eigen kennis",
        "Een beginner die denkt dat hij het beter weet dan experts",
        "Iemand die leert en zijn kennis overschat",
        "Een professional die zijn fouten toegeeft"
      ],
      correct: 1,
      feedback: "Precies! Het Dunning-Kruger effect: beginners overschatten hun competentie omdat ze niet weten wat ze niet weten."
    }],
    creativePrompt: "Beschrijf een moment waarop je iets nieuws leerde en achteraf besefte dat je het eerder had overschat.",
    aiHelperPrompts: ["Op welk gebied ben je zo'n beetje beginner maar voelde je je toch zeker?", "Wanneer overschatte je je vaardigheden en hoe ontdekte je dat?", "Hoe kun je het Dunning-Kruger effect bij jezelf tegengaan?"]
  },
  {
    id: "representativeness-heuristic",
    title: "Representativiteitsheuristiek",
    difficulty: 2,
    emoji: "🎭",
    academicCategory: "Epistemologie",
    skillCategory: "Manipulatie Herkennen",
    tags: ["Cognitieve Bias", "Statistiek", "Besluitvorming", "Manipulatie Herkennen"],
    definition: "De neiging om de kans op iets in te schatten op basis van hoe goed het past bij een prototype of stereotype, terwijl statistisch bewijs (basispercentages) wordt genegeerd.",
    abstractExample: "Als iemand aan een stereotiep patroon voldoet, schatten we de kans dat ze bij die categorie horen te hoog in, ongeacht de werkelijke prevalentie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Tom is stil, leest veel, en houdt van logica. Is hij een bibliotheekmedewerker of een verkoopmedewerker? We denken bibliotheekmede-werker – maar verkopers zijn veel talrijker." },
      { domain: "business", icon: "💼", text: "Een startup heeft een hippe kantoorinrichting en jonge medewerkers. We denken succesvol tech-bedrijf – maar de financiën kunnen desastreus zijn." },
      { domain: "politics", icon: "🏛️", text: "Iemand die netjes gekleed is en zelfverzekerd spreekt lijkt betrouwbaar – maar kleding en stemgeluid zijn geen indicatoren van integriteit." }
    ],
    prerequisites: ["availability-heuristic"],
    unlocks: [],
    relatedPrinciples: ["availability-heuristic", "base-rate-fallacy", "confirmation-bias"],
    exercises: [{
      type: "multiple-choice",
      question: "Linda is 31, single, outspoken en sociaal bewogen. Wat is waarschijnlijker: A) Linda is bankmedewerker, of B) Linda is bankmedewerker én feminist?",
      options: [
        "B – want het past beter bij haar omschrijving",
        "A – want een enkelvoudige categorie is altijd groter dan een gecombineerde",
        "Ze zijn even waarschijnlijk",
        "We kunnen dit niet bepalen"
      ],
      correct: 1,
      feedback: "Correct! A is altijd waarschijnlijker dan B. Elke conjunctie (bankmedewerker én feminist) is minder waarschijnlijk dan de enkelvoudige categorie. Dit is de 'conjunction fallacy'."
    }],
    creativePrompt: "Beschrijf een situatie waarin je iemand of iets beoordeelde op basis van hoe goed het bij een prototype paste.",
    aiHelperPrompts: ["Wanneer heb je iemand beoordeeld op uiterlijk of gedrag en was je verrast door de werkelijkheid?", "Op welk gebied gebruik je stereotypen als snelkoppeling voor oordelen?", "Hoe kun je basispercentages bewust meenemen in je oordelen?"]
  },
  {
    id: "cognitive-dissonance",
    title: "Cognitieve Dissonantie",
    difficulty: 2,
    emoji: "⚡",
    academicCategory: "Epistemologie",
    skillCategory: "Beslissingen Nemen",
    tags: ["Cognitieve Bias", "Psychologie", "Zelfkennis", "Beslissingen Nemen"],
    definition: "De ongemakkelijkheid die ontstaat wanneer twee tegenstrijdige overtuigingen, waarden of gedragingen tegelijk bestaan. Mensen zijn gemotiveerd om dit ongemak te verminderen – vaak door de realiteit te verdraaien.",
    abstractExample: "Als overtuiging A en handeling B tegenstrijdig zijn, ontstaat dissonantie. Oplossingen: A veranderen, B veranderen, of B rationaliseren zodat het toch past bij A.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Je rookt maar weet dat het ongezond is. Dissonantie-reductie: 'Ik ken mensen die rookten en 90 werden', of 'ik stop later'." },
      { domain: "business", icon: "💼", text: "Je koopt een duur product maar twijfelt achteraf. Je gaat dan extra positieve informatie zoeken om je keuze te rechtvaardigen (post-purchase rationalisatie)." },
      { domain: "politics", icon: "🏛️", text: "Een moreel overtuigd persoon steunt een partij die iets doet dat hij normaal afkeurt. Oplossing: het goedpraten of bagatelliseren." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["confirmation-bias", "framing-effect", "sunk-cost-fallacy"],
    exercises: [{
      type: "multiple-choice",
      question: "Je hebt zojuist een dure auto gekocht. Achteraf zoek je vooral positieve reviews. Wat is dit?",
      options: [
        "Grondige informatieverwerving",
        "Post-purchase cognitieve dissonantie reductie: je zoekt bevestiging om het ongemak van twijfel weg te nemen",
        "Bevestigingsdrang",
        "Rationele beslissingsanalyse"
      ],
      correct: 1,
      feedback: "Juist! Na een grote aankoop zoeken mensen bevestiging dat ze de juiste keuze maakten – dit is cognitieve dissonantie reductie."
    }],
    creativePrompt: "Beschrijf een moment waarop je je gedrag rationaliseerde om een tegenstrijdigheid met je waarden te vermijden.",
    aiHelperPrompts: ["Wanneer heb je iets gedaan dat niet bij je waarden paste en hoe heb je dat verklaard?", "Welke rationalisaties gebruik je om ongemakkelijke keuzes goed te praten?", "Hoe kun je cognitieve dissonantie herkennen en eerlijk mee omgaan?"]
  },
  {
    id: "hindsight-bias",
    title: "Hindsight Bias (Terugkijkbias)",
    difficulty: 1,
    emoji: "🔭",
    academicCategory: "Epistemologie",
    skillCategory: "Beslissingen Nemen",
    tags: ["Cognitieve Bias", "Besluitvorming", "Psychologie", "Beslissingen Nemen"],
    definition: "Na een gebeurtenis geloven mensen dat ze die hadden kunnen voorspellen. 'Ik wist het eigenlijk wel' – terwijl ze het niet wisten voordat het gebeurde.",
    abstractExample: "Na afloop van X is de kennis van X ingebakken in ons geheugen en lijkt het evident. Maar vooraf was er onzekerheid die we achteraf vergeten.",
    examples: [
      { domain: "business", icon: "💼", text: "Na de dotcom-crash van 2000: 'Ik wist dat het een zeepbel was.' Maar voor de crash hadden velen er vol in geïnvesteerd." },
      { domain: "politics", icon: "🏛️", text: "Na een verkiezingsuitslag: 'Ik had het kunnen voorspellen.' Maar peilingen wezen vaak anders." },
      { domain: "daily", icon: "🏠", text: "Na een ruzie: 'Ik wist altijd al dat die vriendschap niet zou duren.' Maar destijds dacht je er anders over." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["confirmation-bias", "availability-heuristic", "dunning-kruger"],
    exercises: [{
      type: "multiple-choice",
      question: "Na een examen zegt een student: 'Die vragen waren makkelijk, ik wist altijd al de antwoorden.' Wat beschrijft dit?",
      options: [
        "Goede voorbereiding",
        "Hindsight bias: het examen voelt achteraf makkelijker omdat je de antwoorden nu kent",
        "Overmoedigheid",
        "Een accuraat zelfbeeld"
      ],
      correct: 1,
      feedback: "Precies! Hindsight bias: nadat je de antwoorden kent, voelen de vragen 'altijd al' makkelijk. Dit vertekent ons geheugen van hoe onzeker we waren."
    }],
    creativePrompt: "Beschrijf een gebeurtenis die je achteraf 'had verwacht', maar waarover je vooraf eigenlijk onzeker was.",
    aiHelperPrompts: ["Wanneer zei je achteraf 'Dat wist ik wel' terwijl je het niet echt wist?", "Hoe kan hindsight bias het leren van fouten belemmeren?", "Hoe kun je besluiten eerlijker evalueren door je mindset van vóór de uitkomst te reconstrueren?"]
  },
  {
    id: "survivorship-bias",
    title: "Survivorship Bias",
    difficulty: 2,
    emoji: "🏅",
    academicCategory: "Epistemologie",
    skillCategory: "Patronen Zien",
    tags: ["Statistiek", "Cognitieve Bias", "Besluitvorming", "Patronen Zien"],
    definition: "De fout om conclusies te baseren op degenen die een selectieproces hebben overleefd (de 'survivors'), terwijl de mislukkingen buiten beeld blijven.",
    abstractExample: "Als je alleen succesvolle X bestudeert, zie je de gedeelde kenmerken van succesvolle X. Maar je mist alle mislukte X met dezelfde kenmerken. Je conclusies zijn vertekend.",
    examples: [
      { domain: "business", icon: "💼", text: "'Alle succesvolle ondernemers dropten uit van de universiteit.' Maar hoeveel dropouts mislukte ook? Die worden niet geïnterviewd." },
      { domain: "science", icon: "🔬", text: "WWII-vliegtuigen die terugkwamen hadden kogelgaten op de vleugels. Conclusie: versterk de vleugels. Fout! Vliegtuigen met gaten in de motor kwamen nooit terug." },
      { domain: "daily", icon: "🏠", text: "'Vroeger werden mensen ook oud en aten ze vet.' Maar de gemiddelde levensverwachting lag vroeger veel lager – de ongezonde mensen bereikten die leeftijd niet." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["confirmation-bias", "base-rate-fallacy", "availability-heuristic"],
    exercises: [{
      type: "multiple-choice",
      question: "Je leest een boek van 10 succesvolle CEO's en ontdekt dat ze allemaal vroeg opstaan. Wat is het probleem?",
      options: [
        "Geen probleem – vroeg opstaan is bewezen effectief",
        "Je mist de mislukte CEO's die ook vroeg opstonden – survivorship bias",
        "Het steekproefformaat is te klein",
        "Vroeg opstaan correleert niet met succes"
      ],
      correct: 1,
      feedback: "Juist! Survivorship bias: je ziet alleen de succesvolle CEO's. Hoeveel mensen stonden vroeg op én mislukten? Die zijn buiten beeld."
    }],
    creativePrompt: "Beschrijf een situatie waarbij jij of iemand anders conclusies trok op basis van alleen de successen, zonder de mislukkingen mee te tellen.",
    aiHelperPrompts: ["Welke populaire succesverhalen negeren waarschijnlijk een groot aantal mislukkingen?", "Hoe kun je actief zoeken naar de 'verdwenen mislukkingen' in een analyse?", "Wanneer baseerde je een beslissing op voorbeelden die de selectiebias niet meenamen?"]
  },
  {
    id: "gambler-fallacy",
    title: "Gambler's Fallacy",
    difficulty: 1,
    emoji: "🎰",
    academicCategory: "Epistemologie",
    skillCategory: "Beslissingen Nemen",
    tags: ["Statistiek", "Cognitieve Bias", "Kansen", "Beslissingen Nemen"],
    definition: "De foutieve overtuiging dat eerdere willekeurige uitkomsten de kans op toekomstige uitkomsten beïnvloeden. Bij onafhankelijke gebeurtenissen heeft het verleden geen invloed op de toekomst.",
    abstractExample: "Een munt is 5x kop gegooid. De kans op munt bij de volgende gooi is nog steeds 50%, niet 50%+ of 50%-. De munt heeft geen geheugen.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'Rood is al 10x gevallen bij roulette, dus zwart is nu zeker.' Elke spin is onafhankelijk – de kans op zwart blijft ~50%." },
      { domain: "business", icon: "💼", text: "'We hebben 3 kwartalen op rij gemist. Dit kwartaal MOET het goed gaan.' Kwartaalresultaten zijn niet van eerdere resultaten afhankelijk op deze manier." },
      { domain: "daily", icon: "🏠", text: "'Het vliegtuig dat net gecrasht is, was gevaarlijk om in te stappen. Maar nu zijn vliegtuigen tijdelijk extra veilig.' Fout – veiligheidsincidenten zijn niet gecorreleerd in deze zin." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["availability-heuristic", "base-rate-fallacy", "correlation-causation"],
    exercises: [{
      type: "multiple-choice",
      question: "Een munt wordt 6x gegooid: kop, kop, kop, kop, kop, kop. Wat is de kans op munt bij de 7e gooi?",
      options: ["Minder dan 50% – het wordt 'tijd' voor munt", "Meer dan 50% – kop heeft een streak", "50% – elke gooi is onafhankelijk", "Hangt af van de munt"],
      correct: 2,
      feedback: "Precies! 50%. Elke muntworp is onafhankelijk. De munt heeft geen geheugen. Eerdere uitslagen beïnvloeden de volgende gooi niet."
    }],
    creativePrompt: "Beschrijf een situatie waarbij jij of iemand anders aannam dat een 'streak' invloed had op de volgende uitkomst.",
    aiHelperPrompts: ["Wanneer dacht je dat de kans 'nu hoger moest zijn' na een reeks tegenvallers?", "Hoe beïnvloedt gambler's fallacy beslissingen bij gokken of investeren?", "Welke onafhankelijke gebeurtenissen behandel je als afhankelijk?"]
  },
  {
    id: "fundamental-attribution-error",
    title: "Fundamentele Attributiefout",
    difficulty: 2,
    emoji: "👥",
    academicCategory: "Epistemologie",
    skillCategory: "Beslissingen Nemen",
    tags: ["Sociale Psychologie", "Cognitieve Bias", "Gedrag", "Beslissingen Nemen"],
    definition: "De neiging om gedrag van anderen toe te schrijven aan hun karakter of persoonlijkheid (intern), terwijl we situationele factoren onderschatten. Bij onszelf doen we het omgekeerde.",
    abstractExample: "Als iemand anders iets fout doet: 'Hij is lui/dom/onbetrouwbaar.' Als wij zelf iets fout doen: 'De omstandigheden waren moeilijk.' De attributie is asymmetrisch.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Iemand snijdt je af in het verkeer: 'Wat een agressieveling!' Maar als jij iemand afsnijdt: 'Ik had haast, het was niet anders.'" },
      { domain: "business", icon: "💼", text: "Een collega mist een deadline: 'Die is niet professioneel.' Als jij een deadline mist: 'Mijn manager had me te veel werk gegeven.'" },
      { domain: "politics", icon: "🏛️", text: "Arme mensen zijn arm 'omdat ze lui zijn' (karakter). Maar contextfactoren (structurele ongelijkheid, kansen) worden vaak onderschat." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["confirmation-bias", "cognitive-dissonance", "availability-heuristic"],
    exercises: [{
      type: "multiple-choice",
      question: "Een medewerker komt te laat op een vergadering. Je denkt: 'Hij is onprofessioneel.' Wat doet de fundamentele attributiefout?",
      options: [
        "Je kijkt naar de situationele oorzaken (file, noodgeval)",
        "Je wijst meteen een karaktereigenschap aan als oorzaak zonder context te kennen",
        "Je vraagt naar de reden voordat je oordeelt",
        "Je geeft hem het voordeel van de twijfel"
      ],
      correct: 1,
      feedback: "Juist! De fundamentele attributiefout: we schrijven andermans gedrag toe aan karakter, terwijl we situationele factoren vergeten."
    }],
    creativePrompt: "Beschrijf een situatie waarbij je andermans gedrag afdeed als karakterfout, maar later besefte dat de omstandigheden een grote rol speelden.",
    aiHelperPrompts: ["Wanneer beoordeelde je iemand op basis van één actie zonder de context te kennen?", "Hoe reageer jij als anderen jouw gedrag verkeerd interpreteren?", "Hoe kun je bewust meer situationele context meenemen bij het beoordelen van anderen?"]
  },
  {
    id: "peak-end-rule",
    title: "Peak-End Regel",
    difficulty: 2,
    emoji: "🏔️",
    academicCategory: "Epistemologie",
    skillCategory: "Beslissingen Nemen",
    tags: ["Psychologie", "Geheugen", "Ervaring", "Beslissingen Nemen"],
    definition: "Mensen beoordelen een ervaring niet op het gemiddelde, maar op basis van het hoogtepunt (positief of negatief) en het einde. De duur doet er weinig toe (duratieveronachtzaming).",
    abstractExample: "Herinnering van ervaring E = f(hoogtepunt van E, einde van E). Niet de integrale van alle momenten. Een korte pijnlijke ervaring met goed einde voelt beter dan een langere pijnlijke ervaring met ook goed einde.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een vakantie met spectaculaire hoogtepunten en goed einde wordt als geweldig herinnerd, ook al waren er saaie momenten tussenin." },
      { domain: "business", icon: "💼", text: "Klantenservice: een klacht die goed is opgelost laat een positievere indruk na dan service die nooit een probleem had maar ook nooit uitblonk." },
      { domain: "science", icon: "🔬", text: "Kahneman's experiment: patiënten die een kortere, pijnlijkere colonoscopie ondergingen herinnerden het als slechter dan patiënten met een langere procedure die eindigde met minder pijn." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["availability-heuristic", "framing-effect", "cognitive-dissonance"],
    exercises: [{
      type: "multiple-choice",
      question: "Een concert had een geweldig slotnummer maar een matige eerste helft. Hoe herinneren mensen het doorgaans?",
      options: [
        "Slecht, want de eerste helft was teleurstellend",
        "Gemiddeld, want ze tellen beide helften mee",
        "Positief, want het einde was uitstekend",
        "Neutraal, want ze vergeten de details"
      ],
      correct: 2,
      feedback: "Juist! De peak-end regel: het einde domineert de herinnering. Een sterk slotnummer verbetert de totaalervaring in het geheugen."
    }],
    creativePrompt: "Beschrijf een ervaring die je goed of slecht herinnert, en analyseer of het hoogtepunt en einde dat beeld domineren.",
    aiHelperPrompts: ["Hoe kun je de peak-end regel bewust gebruiken in presentaties of klantenservice?", "Welke ervaringen herinner je goed of slecht, en wat was het hoogtepunt en einde?", "Hoe beïnvloedt de manier waarop een gesprek of vergadering eindigt de totaalindruk?"]
  },
  {
    id: "ikea-effect",
    title: "IKEA Effect",
    difficulty: 1,
    emoji: "🪑",
    academicCategory: "Behavioral Economics",
    skillCategory: "Beslissingen Nemen",
    tags: ["Cognitieve Bias", "Psychologie", "Waardebeleving", "Beslissingen Nemen"],
    definition: "Mensen hechten meer waarde aan dingen die ze zelf hebben gemaakt of samengesteld, los van de objectieve kwaliteit. Eigen arbeid verhoogt de gepercipieerde waarde.",
    abstractExample: "Object X gebouwd door jou is in jouw ogen meer waard dan identiek object X gemaakt door een ander, zelfs als het objectief gezien gelijkwaardig of slechter is.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een zelfgemaakte cake smaakt je beter dan dezelfde cake van de bakker. Je eigen IKEA-kast voelt waardevoller dan een identieke kant-en-klare kast." },
      { domain: "business", icon: "💼", text: "Medewerkers zijn meer committed aan projecten die ze zelf hebben opgezet, ook als een extern team dezelfde oplossing had kunnen bieden." },
      { domain: "daily", icon: "🏠", text: "Een zelfgeschreven tekst of zelfgemaakt kunstwerk voelt bijzonder – ook als vrienden het objectief minder goed vinden." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["sunk-cost-fallacy", "cognitive-dissonance", "loss-aversion"],
    exercises: [{
      type: "multiple-choice",
      question: "Waarom zijn mensen bereid meer te betalen voor een 'bouw je eigen'-product dan voor een kant-en-klare versie?",
      options: [
        "Kant-en-klaar producten zijn altijd goedkoper",
        "Het IKEA effect: eigen inspanning verhoogt de gepercipieerde waarde",
        "Mensen vertrouwen zelfgemaakte producten meer",
        "Het is rationeel want je bespaart op arbeidskosten"
      ],
      correct: 1,
      feedback: "Correct! Het IKEA effect: de eigen investering (tijd en moeite) verhoogt de gepercipieerde waarde van het eindproduct."
    }],
    creativePrompt: "Beschrijf iets wat je zelf hebt gemaakt dat je meer waardeert dan een professionele versie.",
    aiHelperPrompts: ["Hoe kun je het IKEA effect inzetten in ontwerp of productaanpak?", "Wanneer merkte je dat je eigen werk door anderen minder werd gewaardeerd dan jij verwachtte?", "Hoe beïnvloedt eigenaarschap de betrokkenheid van medewerkers?"]
  },
  {
    id: "curse-of-knowledge",
    title: "Curse of Knowledge (Vloek van Kennis)",
    difficulty: 2,
    emoji: "📚",
    academicCategory: "Epistemologie",
    skillCategory: "Beslissingen Nemen",
    tags: ["Communicatie", "Cognitieve Bias", "Onderwijs", "Beslissingen Nemen"],
    definition: "Wanneer je iets weet, is het moeilijk je voor te stellen hoe het is om het niet te weten. Experts communiceren slecht naar beginners omdat ze vergeten hoe het was om beginner te zijn.",
    abstractExample: "Expert E met kennis K kan zich moeilijk voorstellen hoe het is voor non-expert N die K niet kent. E communiceert alsof N ook K heeft, wat leidt tot miscommunicatie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een muzikant tikt een melodie op tafel. Voor hem is het kristalhelder welk nummer het is. Voor de luisteraar is het slechts tik-tik-tik." },
      { domain: "business", icon: "💼", text: "Een senior developer schrijft documentatie die vol met jargon staat. Voor beginners is het onbegrijpelijk, voor hem 'self-explanatory'." },
      { domain: "science", icon: "🔬", text: "Een professor die 20 jaar zijn vakgebied bestudeert, begrijpt niet waarom studenten de 'basisconcep ten' niet begrijpen." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["dunning-kruger", "epistemic-humility", "cognitive-dissonance"],
    exercises: [{
      type: "multiple-choice",
      question: "Een IT-expert legt aan zijn grootouders uit hoe ze moeten updaten maar vergeet basisstappen uit te leggen. Wat is dit?",
      options: [
        "Luiheid",
        "Curse of knowledge: hij kan zich niet meer voorstellen dat iemand die stappen niet kent",
        "Slechte communicatievaardigheden",
        "Ongeduld"
      ],
      correct: 1,
      feedback: "Juist! Curse of knowledge: zodra je iets weet, vergeet je hoe het was om het niet te weten. Dit leidt tot gaten in uitleg."
    }],
    creativePrompt: "Beschrijf een situatie waarbij jij iets uitlegde of leerde en later besefte dat je aannames maakte over kennis die de ander niet had.",
    aiHelperPrompts: ["Wanneer communiceerde je met iemand die jouw jargon of achtergrond niet kende?", "Hoe leg je iets technisch uit aan iemand zonder die achtergrond?", "Welke aannames maak jij in communicatie die je bewuster zou kunnen maken?"]
  },
  {
    id: "illusory-superiority",
    title: "Illusoire Superioriteit (Lake Wobegon Effect)",
    difficulty: 1,
    emoji: "⭐",
    academicCategory: "Epistemologie",
    skillCategory: "Beslissingen Nemen",
    tags: ["Cognitieve Bias", "Zelfkennis", "Psychologie", "Beslissingen Nemen"],
    definition: "De neiging van mensen om zichzelf boven het gemiddelde te beoordelen op positieve eigenschappen. Statistisch kunnen niet alle mensen bovengemiddeld zijn.",
    abstractExample: "Als 80% van de mensen zichzelf boven het gemiddelde vindt op eigenschap X, is er per definitie een collectieve overschatting. Het gemiddelde betekent dat de helft eronder zit.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Studies tonen: 93% van de Amerikanen denkt beter te rijden dan gemiddeld. Statistisch onmogelijk." },
      { domain: "business", icon: "💼", text: "Managers denken dat hun team beter presteert dan andere teams. Als iedereen dat denkt, klopt het voor minder dan de helft." },
      { domain: "science", icon: "🔬", text: "In evaluaties denkt de meerderheid van de academici dat hun onderzoek boven het gemiddelde impact heeft." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["dunning-kruger", "confirmation-bias", "epistemic-humility"],
    exercises: [{
      type: "multiple-choice",
      question: "In een enquête zegt 85% van de studenten dat ze boven het klasgemiddelde presteren. Wat klopt hier niet?",
      options: [
        "Niets – de meeste studenten zijn inderdaad bovengemiddeld",
        "Statistisch kan maximaal 50% boven het gemiddelde zitten; 85% is illusoire superioriteit",
        "Het gemiddelde is hier geen goede maatstaf",
        "Studenten overschatten de enquêtevraag"
      ],
      correct: 1,
      feedback: "Precies! Per definitie zit de helft van de populatie onder het gemiddelde. 85% die denkt erboven te zitten is een collectieve bias."
    }],
    creativePrompt: "Op welk gebied denk jij boven gemiddeld te presteren? Hoe zou je dat objectief kunnen toetsen?",
    aiHelperPrompts: ["Op welke vaardigheden beoordeel jij jezelf als bovengemiddeld – en hoe weet je dat?", "Hoe kan illusoire superioriteit leiden tot onvoldoende inzet of leren?", "Hoe kun je een realistisch zelfbeeld cultiveren?"]
  }
];
