// Extra principles – batch 7 (7 principes: Psychologie & Organisatie)

export const extraPrinciples7 = [
  {
    id: "brooks-law",
    title: "Wet van Brooks",
    difficulty: 3,
    emoji: "👷",
    academicCategory: "Organisatie",
    skillCategory: "Beter Beslissen",
    tags: ["Organisatie", "Softwareontwikkeling", "Projectmanagement", "Beter Beslissen"],
    definition: "Meer mensen toevoegen aan een laat softwareproject maakt het nog later. Nieuwe teamleden vereisen inwerktijd, communicatiekosten stijgen kwadratisch en de productiviteit van het bestaande team daalt.",
    abstractExample: "Als project P achterloopt en n mensen worden toegevoegd, zijn de inleerkosten I(n) en de extra communicatiekosten C(n²) initieel groter dan de extra productiviteit. Op korte termijn wordt het project later, niet eerder.",
    examples: [
      { domain: "science", icon: "🔬", text: "Fred Brooks (The Mythical Man-Month, 1975): 'Negen vrouwen kunnen geen baby in één maand maken.' Sommige taken zijn inherent sequentieel en schalen niet met mensen." },
      { domain: "business", icon: "💼", text: "Een softwarebedrijf voegt 5 extra developers toe aan een al-late release. De bestaande developers besteden nu 30% van hun tijd aan onboarding → de deadline schuift nog verder op." },
      { domain: "daily", icon: "🏠", text: "Te veel koks bederven de broth: in een keuken met te veel medewerkers stijgen de coördinatiekosten sneller dan de output." }
    ],
    prerequisites: ["planning-fallacy", "parkinsons-law"],
    unlocks: [],
    relatedPrinciples: ["planning-fallacy", "dunbar-number", "bikeshedding"],
    exercises: [{
      type: "multiple-choice",
      question: "Een app-project loopt 2 maanden achter. De manager voegt 4 extra developers toe. Wat voorspelt Brooks' wet?",
      options: ["Het project wordt 2 maanden eerder klaar", "Op korte termijn loopt het project nog verder achter", "De kwaliteit verbetert", "De bestaande developers worden productiever"],
      correct: 1,
      feedback: "Brooks' wet: nieuwe developers vereisen inwerktijd van bestaande teamleden. Communicatiekosten stijgen kwadratisch met teamgrootte. Op korte termijn wordt het project later, niet eerder."
    }],
    creativePrompt: "Beschrijf een situatie waarbij meer mensen inzetten een probleem erger maakten in plaats van beter.",
    aiHelperPrompts: [
      "Wanneer helpt meer mensen inzetten wél (vroeg in een project vs. laat)?",
      "Hoe zou je een achterlopend project redden zonder Brooks' wet te overtreden?",
      "Welke taken schalen wel goed met meer mensen en welke niet?"
    ]
  },
  {
    id: "abilene-paradox",
    title: "Abilene-paradox",
    difficulty: 3,
    emoji: "🚌",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    tags: ["Groepsdynamica", "Communicatie", "Beslissen", "Mensen Begrijpen"],
    definition: "Een groep neemt collectief een beslissing die niemand individueel wil, omdat iedereen denkt dat de anderen het willen en niemand zijn echte voorkeur uitspreekt.",
    abstractExample: "Ieder individu I heeft voorkeur P, maar denkt dat de rest voorkeur Q heeft. Om te conformeren spreekt niemand P uit. De groep besluit tot Q – wat niemand wilde. Mis-communicatie over groepsvoorkeuren.",
    examples: [
      { domain: "science", icon: "🔬", text: "Jerry Harvey (1974): een familie rijdt naar Abilene terwijl niemand dat eigenlijk wil – iedereen dacht dat de anderen het wilden. Klassiek gedragseconomisch fenomeen." },
      { domain: "business", icon: "💼", text: "Een MT stemt in met een dure conferentie omdat niemand als eerste 'nee' wil zeggen. Na afloop blijkt iedereen er twijfels over had maar conformisme overheerste." },
      { domain: "daily", icon: "🏠", text: "Vrienden gaan naar een restaurant dat niemand leuk vindt omdat iedereen dacht dat de anderen het wilden. Niemand sprak zijn echte voorkeur uit." }
    ],
    prerequisites: ["social-proof", "groupthink"],
    unlocks: [],
    relatedPrinciples: ["groupthink", "social-proof", "bikeshedding"],
    exercises: [{
      type: "multiple-choice",
      question: "Een team besluit unaniem voor een aanpak die achteraf niemand de beste vond. Wat was waarschijnlijk het probleem?",
      options: ["Het team had de verkeerde data", "Abilene-paradox: conformisme verhinderde dat iedereen zijn echte voorkeur uitsprak", "De manager koos voor het team", "Ze stemden niet echt"],
      correct: 1,
      feedback: "Abilene-paradox: als niemand zijn echte mening durft te geven (uit conformisme of angst om af te wijken), kan een groep unaniem instemmen met iets dat niemand echt wil."
    }],
    creativePrompt: "Beschrijf een situatie waarbij jij instemde met een groepsbeslissing die je eigenlijk niet wilde. Wat weerhield je van spreken?",
    aiHelperPrompts: [
      "Hoe zorg je in vergaderingen dat iedereen zijn echte mening geeft?",
      "Wanneer heb jij meegedaan aan iets wat je niet wilde om conformisme?",
      "Hoe verschilt de Abilene-paradox van groupthink?"
    ]
  },
  {
    id: "bikeshedding",
    title: "Bikeshedding (Trivialiteitswet)",
    difficulty: 2,
    emoji: "🚲",
    academicCategory: "Organisatie",
    skillCategory: "Beter Beslissen",
    tags: ["Organisatie", "Vergaderingen", "Prioritering", "Beter Beslissen"],
    definition: "Groepen besteden onevenredig veel tijd aan triviale, begrijpelijke kwesties en te weinig aan complexe, belangrijke ones. Iedereen kan meepraten over een fietsenstalling; niemand snapt de kernreactor.",
    abstractExample: "Bij agenda-items van verschillende complexiteit neemt de groepsdiscussietijd toe met de begrijpelijkheid, niet met de importantie. Triviaal maar begrijpelijk > complex maar cruciaal.",
    examples: [
      { domain: "science", icon: "🔬", text: "C. Northcote Parkinson: een comité keurt een kernreactor in 2 minuten goed (te complex om te bespreken) en debatteert 45 minuten over de kleur van de fietsenstalling." },
      { domain: "business", icon: "💼", text: "Een productvergadering besteedt 5 minuten aan de strategische roadmap en 40 minuten aan de kleur van de knop in de UI. Iedereen heeft een mening over de knop." },
      { domain: "daily", icon: "🏠", text: "Een buurtcomité beslist snel over een grootschalig renovatieplan maar debatteert eindeloos over de soort bloembakken op straat." }
    ],
    prerequisites: ["parkinsons-law", "abilene-paradox"],
    unlocks: [],
    relatedPrinciples: ["parkinsons-law", "abilene-paradox", "opportunity-cost"],
    exercises: [{
      type: "multiple-choice",
      question: "Waarom besteden vergaderingen vaak meer tijd aan kleine beslissingen dan aan grote?",
      options: ["Kleine beslissingen zijn belangrijker", "Iedereen begrijpt kleine kwesties en kan meepraten; grote kwesties zijn te complex voor breed debat", "Grote beslissingen worden altijd apart behandeld", "Het is toeval"],
      correct: 1,
      feedback: "Bikeshedding: begrijpelijkheid bepaalt discussieduur, niet importantie. Iedereen heeft een mening over triviale zaken; complexe zaken worden gemeden of snel doorgewuifd."
    }],
    creativePrompt: "Denk aan de laatste vergadering die jij bijwoonde. Waar werd verhouding te veel vs. te weinig tijd aan besteed?",
    aiHelperPrompts: [
      "Hoe structureer je een agenda om bikeshedding te voorkomen?",
      "Welke beslissingen in jouw organisatie krijgen te veel aandacht relatief aan hun belang?",
      "Wanneer is uitgebreid debat over details wél waardevol?"
    ]
  },
  {
    id: "hindsight-bias",
    title: "Achterafbias",
    difficulty: 2,
    emoji: "🔮",
    academicCategory: "Psychologie",
    skillCategory: "Beter Redeneren",
    tags: ["Psychologie", "Bias", "Oordeel", "Beter Redeneren"],
    definition: "Na het kennen van een uitkomst lijkt die achteraf voorspelbaar en onvermijdelijk te zijn geweest, ook al was dat van tevoren niet zo. We overschatten hoe goed we het hadden kunnen weten.",
    abstractExample: "Na het kennen van uitkomst O oordelen mensen dat O 'duidelijk' was. Dit vertekent evaluaties van beslissingen: een slechte uitkomst doet een beslissing als onverstandig lijken, ook als ze op basis van beschikbare informatie rationeel was.",
    examples: [
      { domain: "science", icon: "🔬", text: "Na de financiële crisis van 2008 zeiden velen: 'Het was zo duidelijk dat dit zou gebeuren.' Maar vóór de crisis hadden weinig experts het voorspeld." },
      { domain: "business", icon: "💼", text: "Na een mislukte productlancering: 'We hadden dit kunnen weten.' Maar op het moment van beslissing was de informatie anders geïnterpreteerd." },
      { domain: "daily", icon: "🏠", text: "Na een ongeluk: 'Ik wist altijd al dat die weg gevaarlijk was.' Maar was die kennis er echt vóór het ongeluk, of lijkt het zo achteraf?" }
    ],
    prerequisites: ["self-serving-bias", "confirmation-bias"],
    unlocks: [],
    relatedPrinciples: ["self-serving-bias", "confirmation-bias", "overconfidence"],
    exercises: [{
      type: "multiple-choice",
      question: "Een investeerder verliest geld op een aandeel. Een vriend zegt: 'Dat had je kunnen zien aankomen.' Wat illustreert dit?",
      options: ["De vriend had betere informatie", "Achterafbias: na de uitkomst lijkt die voorspelbaar, ook al was dat van tevoren niet zo", "De investeerder was dom", "Markten zijn voorspelbaar"],
      correct: 1,
      feedback: "Achterafbias: kennis van de uitkomst vervormt hoe we de voorspelbaarheid van tevoren inschatten. 'Ik wist het altijd al' is vaak een illusie achteraf."
    }],
    creativePrompt: "Denk aan een situatie waarbij jij achteraf dacht 'dat had ik kunnen weten' – was die kennis er echt van tevoren?",
    aiHelperPrompts: [
      "Hoe beïnvloedt achterafbias de manier waarop je beslissingen van anderen beoordeelt?",
      "Hoe kun je achterafbias corrigeren bij het evalueren van projecten of beslissingen?",
      "Waarom is achterafbias schadelijk voor leren van fouten?"
    ]
  },
  {
    id: "peak-end-rule",
    title: "Piek-eindregel",
    difficulty: 2,
    emoji: "🏔️",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    tags: ["Psychologie", "Ervaring", "Geheugen", "Mensen Begrijpen"],
    definition: "We beoordelen ervaringen op basis van het emotionele hoogtepunt en het einde – niet het gemiddelde of de totale duur. Een korte negatieve ervaring met een goed einde wordt beter herinnerd dan een lange positieve ervaring met een slecht einde.",
    abstractExample: "Herinnering aan ervaring E = f(piek, einde) en niet f(gemiddelde). De duur van E heeft nauwelijks invloed op de beoordeling achteraf (durationeglect).",
    examples: [
      { domain: "science", icon: "🔬", text: "Kahneman's colonoscopie-experiment: patiënten met een langer ongemakkelijk einde beoordeelden de procedure slechter dan patiënten met een kortere maar minder ongemakkelijke finale, ook al was de totale pijn groter bij groep 2." },
      { domain: "business", icon: "💼", text: "Vluchten die vroeg vertragen maar op tijd landen worden beter beoordeeld dan vluchten die op tijd vertrekken maar vertraagd aankomen. Het einde bepaalt de herinnering." },
      { domain: "daily", icon: "🏠", text: "Een vakantie met een geweldig laatste weekend wordt beter herinnerd dan een vakantie met tien goede dagen en een verregende laatste dag." }
    ],
    prerequisites: ["loss-aversion", "availability-heuristic"],
    unlocks: [],
    relatedPrinciples: ["loss-aversion", "availability-heuristic", "hindsight-bias"],
    exercises: [{
      type: "multiple-choice",
      question: "Een restaurant wil dat gasten positief vertrekken. Wat is de meest effectieve strategie volgens de piek-eindregel?",
      options: ["Zorg voor constante hoge kwaliteit gedurende het hele diner", "Zorg voor een memorabel hoogtepunt en een uitstekend dessert/afscheid", "Houd de prijs laag", "Begin sterk met het amuse"],
      correct: 1,
      feedback: "Piek-eindregel: de herinnering wordt bepaald door het hoogtepunt en het einde. Een memorabel gerecht plus een warme, positieve afsluiting heeft meer impact dan consistent goed zijn."
    }],
    creativePrompt: "Ontwerp een klantervaring (event, dienst, product) met de piek-eindregel in gedachten. Waar leg jij de pieken?",
    aiHelperPrompts: [
      "Hoe gebruik jij de piek-eindregel bij het ontwerpen van presentaties of vergaderingen?",
      "Welke ervaringen in jouw leven zijn positiever herinnerd dan ze feitelijk waren?",
      "Hoe helpt durationneglect je begrijpen waarom mensen soms irrationele keuzes maken?"
    ]
  },
  {
    id: "curse-of-knowledge",
    title: "Vloek van de Kennis",
    difficulty: 2,
    emoji: "🧠",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    tags: ["Psychologie", "Communicatie", "Kennis", "Mensen Begrijpen"],
    definition: "Als je iets weet, kun je je nauwelijks voorstellen hoe het is om het niet te weten. Experts communiceren onduidelijk met beginners omdat ze vergeten hoe complex hun kennis is voor iemand zonder die achtergrond.",
    abstractExample: "Expert E weet feit F. E kan zich moeilijk inleven in de perspectieven van niet-experts die F niet weten. Dit leidt tot communicatie die te veel aannames maakt over gedeelde kennis.",
    examples: [
      { domain: "science", icon: "🔬", text: "Heath & Heath (Made to Stick): getikte melodieën. Tikkers dachten dat 50% van de luisteraars de melodie zou raden; werkelijk slaagde 2,5%. De tikker 'hoorde' de melodie in zijn hoofd; de luisteraar hoorde slechts tikken." },
      { domain: "business", icon: "💼", text: "Een expert schrijft documentatie die voor collega-experts begrijpelijk is, maar voor nieuwe gebruikers volledig ondoorgrondelijk. Ze vergeten hoe ze zelf leerden." },
      { domain: "daily", icon: "🏠", text: "Een ervaren fietser legt iemand uit hoe je fietst: 'Je houdt gewoon je balans.' Wat voor hem vanzelfsprekend is, is voor de beginner een mysterie." }
    ],
    prerequisites: ["dunning-kruger", "spotlight-effect"],
    unlocks: [],
    relatedPrinciples: ["dunning-kruger", "fundamental-attribution-error", "anchoring"],
    exercises: [{
      type: "multiple-choice",
      question: "Een software-engineer legt een feature uit aan een klant met technische termen. De klant begrijpt niets. Wat is het probleem?",
      options: ["De klant is niet slim genoeg", "Vloek van de kennis: de engineer vergeet dat de klant zijn achtergrondkennis niet heeft", "De feature is te complex", "De engineer spreekt te snel"],
      correct: 1,
      feedback: "Vloek van de kennis: de expert kan zich niet meer inleven in het perspectief van iemand zonder zijn kennis. Hij maakt onbewust te veel aannames over gedeelde begrippen."
    }],
    creativePrompt: "Leg een concept uit jouw vakgebied uit aan iemand zonder die achtergrond. Welke aannames maak je onbewust?",
    aiHelperPrompts: [
      "In welke situaties merk jij dat je te veel aannames maakt over andermans kennis?",
      "Hoe test je of jouw uitleg echt begrijpelijk is voor de doelgroep?",
      "Hoe helpt het concept van 'beginnersmind' (shoshin) de vloek van kennis te overwinnen?"
    ]
  },
  {
    id: "overfitting",
    title: "Overfitting",
    difficulty: 3,
    emoji: "📈",
    academicCategory: "Statistiek",
    skillCategory: "Beter Redeneren",
    tags: ["Statistiek", "Machine Learning", "Modelleren", "Beter Redeneren"],
    definition: "Een model dat te precies is afgesteld op trainingsdata past slecht op nieuwe, onziene data. Het heeft ruis en toevallige patronen geleerd in plaats van echte structuur. Meer complexiteit leidt hier tot slechtere generalisatie.",
    abstractExample: "Model M met k parameters past beter op trainingsdata naarmate k groeit. Maar als k te hoog is, past M op ruis. De test-fout daalt aanvankelijk met k maar stijgt daarna – de bias-variantie-afweging.",
    examples: [
      { domain: "science", icon: "🔬", text: "Een epidemiologisch model dat 50 variabelen past op 60 gevallen zal de trainingsdata perfect verklaren maar nieuwe gevallen slecht voorspellen. Te weinig data voor te veel parameters." },
      { domain: "business", icon: "💼", text: "Een handelsstrategie die historische data perfect beschrijft, faalt op nieuwe markten. De strategie leerde marktspecifieke ruis, geen algemene patronen." },
      { domain: "daily", icon: "🏠", text: "Je generaliseert op basis van drie ervaringen met één type persoon. Je 'model' is overfit op een te kleine steekproef en voorspelt nieuwe ontmoetingen slecht." }
    ],
    prerequisites: ["law-of-large-numbers", "multiple-comparisons"],
    unlocks: [],
    relatedPrinciples: ["occams-razor", "multiple-comparisons", "hasty-generalization"],
    exercises: [{
      type: "multiple-choice",
      question: "Een machine learning model scoort 99% nauwkeurigheid op trainingsdata maar 60% op nieuwe data. Wat is er waarschijnlijk mis?",
      options: ["De testdata is fout", "Het model is overfit: het heeft ruis geleerd in plaats van echte patronen", "99% is niet goed genoeg", "Er zijn te weinig features"],
      correct: 1,
      feedback: "Overfitting: het model heeft toevallige patronen in de trainingsdata geleerd die niet generaliseren. De kloof tussen train- en testprestatie is het signaal."
    }],
    creativePrompt: "Beschrijf een menselijke redenering (buiten ML) die 'overfit' is op te weinig of te eenzijdige ervaringen.",
    aiHelperPrompts: [
      "Hoe herken je overfitting in menselijk redeneren (overgeneralisatie van kleine steekproeven)?",
      "Hoe balanceer je modellcomplexiteit met generaliseerbaarheid?",
      "Wanneer is meer data beter dan een simpeler model?"
    ]
  }
];
