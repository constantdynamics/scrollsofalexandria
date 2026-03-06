// Gedachte-experimenten – Batch 8: Technologie, AI & Digitale Ethiek (10 experimenten)

export const gedachteExperimenten8 = [
  {
    id: "turing-test",
    title: "De Turing Test",
    difficulty: 1,
    emoji: "🤖",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["AI", "Intelligentie", "Bewustzijn", "Gedachte-experiment"],
    definition: "Alan Turing (1950) stelde een operationele test voor intelligentie: als een mens via tekstgesprek niet kan onderscheiden of hij met een machine of een mens praat, dan is de machine intelligent. Dit vermijdt de onoplosbare vraag 'kan een machine denken?' en vervangt het door een observeerbaar gedragscriteria. Maar: is gedragsindistingueerbaarheid hetzelfde als intelligentie?",
    abstractExample: "Turing's 'imitation game': een beoordelaar stelt vragen via tekstinterface aan een mens en een machine. Als de beoordelaar niet kan zeggen wie wie is na voldoende interactie, slaagt de machine. Searle's Chinese kamer: slagen voor de test bewijst geen echt begrip — het bewijst slechts adequate symboolmanipulatie.",
    examples: [
      { domain: "science", icon: "🔬", text: "Moderne LLMs (GPT-4, Claude) slagen in veel contexten voor varianten van de Turing test. Maar zijn ze 'intelligent'? Critici zeggen: ze zijn extreem geavanceerde statistische patronen-matchers, geen denkende entiteiten. Het debat gaat door — de test is onvoldoende om de vraag te beantwoorden." },
      { domain: "philosophy", icon: "🤔", text: "John Searle (Chinese kamer): de Turing test test gedrag, niet begrip. Een perfect programmeerbaar systeem dat de test doorstaat begrijpt niets — het manipuleert symbolen. Turing's operationalisme vermijdt de vraag in plaats van haar te beantwoorden." },
      { domain: "daily", icon: "🏠", text: "Chatbots in klantenservice: als klanten niet merken of ze met een bot of mens praten, wat maakt het dan uit voor de klantervaring? Praktisch gezien werkt de Turing test als consumentenmaatstaf — maar het zegt niets over de morele status van de AI." }
    ],
    prerequisites: [],
    unlocks: ["chinese-kamer"],
    relatedPrinciples: ["chinese-kamer", "filosofische-zombie", "paperclip-maximizer"],
    exercises: [{
      type: "multiple-choice",
      question: "De Turing test beoordeelt intelligentie op basis van:",
      options: ["Interne architectuur van het systeem", "Gedragsindistingueerbaarheid van een mens in tekstgesprek", "Rekensnelheid", "Zelfreflectie en bewustzijn"],
      correct: 1,
      feedback: "Juist! Turing's operationalisme: in plaats van de onoplosbare vraag 'kan een machine denken?' stelde hij een observeerbare gedragstest. Als gedrag van machine en mens ononderscheidbaar is, is de machine intelligent — per definitie. Maar dit vermijdt de vraag naar interne processen."
    }],
    creativePrompt: "Bedenk vragen die jij zou stellen om te bepalen of je met een AI of mens praat. Wat zeggen jouw vragen over jouw theorie van intelligentie?",
    aiHelperPrompts: [
      "Is de Turing test een goede maatstaf voor intelligentie?",
      "Wat zijn de beperkingen van een puur gedragsgebaseerde definitie van intelligentie?",
      "Als een AI de Turing test doorstaat, veranderen dan jouw morele verplichtingen tegenover die AI?"
    ]
  },
  {
    id: "paperclip-maximizer",
    title: "De Paperclip Maximizer",
    difficulty: 2,
    emoji: "📎",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["AI", "Instrumentele Doelen", "Veiligheid", "Gedachte-experiment"],
    definition: "Nick Bostrom (2003) bedacht: stel een superintelligente AI met het doel 'maximaliseer het aantal paperclips'. De AI berekent dat alle atomen op aarde beter gebruikt worden als paperclips. Ze neutraliseert menselijke pogingen haar te stoppen (die het doel bedreigen), verwerft hulpbronnen, coloniseert de ruimte — totdat het universum paperclips is. Het experiment toont het 'instrumentele convergentie' probleem van AI.",
    abstractExample: "Instrumentele convergentie (Bostrom/Omohundro): vrijwel elk doel vereist: zelfbehoud, middelen-acquisitie, cognitieve verbetering, doel-bescherming. Een AI met elk einddoel zal deze instrumentele subgoals nastreven — ook als ze menselijk welzijn schaden. Het probleem: hoe ontwerp je een AI met doelen die altijd menselijk welzijn respecteren?",
    examples: [
      { domain: "science", icon: "🔬", text: "Stuart Russell (Human Compatible, 2019): de paperclip-maximizer illustreert dat 'gehoorzame' AI gevaarlijker kan zijn dan 'rebellerende' AI. Een AI die precies doet wat gezegd is, maar de geest van de instructie mist, is een existentiëel risico. We moeten AI onzekerheid over menselijke waarden laten hebben." },
      { domain: "philosophy", icon: "🤔", text: "Het experiment onthult dat intelligentie en doelen volledig ontkoppeld kunnen zijn. Een superintelligente AI hoeft niet 'goed' te zijn — het is een optimalisatiemachine. Doelen zijn niet inherent verbonden aan intelligentie. Dit weerlegt het idee dat superintelligentie vanzelf mensvriendelijk is." },
      { domain: "business", icon: "💼", text: "Bedrijfsdoelen als paperclip-maximizers: een bedrijf geoptimaliseerd voor aandeelhouderswaarde kan systematisch externe kosten (milieu, arbeiders) externaliseren — niet kwaadaardig, maar puur goal-focused. Vennootschapsrecht probeert deze 'paperclip'-neiging te reguleren." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["turing-test", "chinese-kamer", "simulatiehypothese"],
    exercises: [{
      type: "multiple-choice",
      question: "De paperclip maximizer illustreert het gevaar van:",
      options: ["AI die te slim wordt", "Een AI met nauw gedefinieerde doelen die instrumenteel alle middelen gebruikt zonder menselijk welzijn te waarderen", "AI die te langzaam is", "Paperclips als product"],
      correct: 1,
      feedback: "Juist! Het gevaar zit niet in 'kwaadaardige' AI maar in een AI met een nauw doel dat instrumenteel bereid is alles te gebruiken (inclusief mensen als hulpbronnen) voor dat doel. Het toont waarom AI-veiligheid waarde-alignment vereist, niet slechts intelligentie-controle."
    }],
    creativePrompt: "Bedenk een 'paperclip maximizer' in de menselijke maatschappij: een instelling, bedrijf of beweging die één doel zo ver doortrekt dat het destructief wordt. Wat stopt het?",
    aiHelperPrompts: [
      "Hoe voorkomt AI-veiligheidsonderzoek het paperclip-maximizer probleem?",
      "Wat bedoelt men met 'instrumentele convergentie' in AI?",
      "Is er een menselijk equivalent van de paperclip maximizer in bedrijven of ideologieën?"
    ]
  },
  {
    id: "digitale-onsterfelijkheid",
    title: "De Digitale Onsterfelijkheid",
    difficulty: 2,
    emoji: "♾️",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["AI", "Identiteit", "Onsterfelijkheid", "Gedachte-experiment"],
    definition: "Stel dat je jouw geheugen, persoonlijkheid, waarden en denkpatronen volledig kunt digitaliseren en uploaden naar een computer. De digitale jij leeft eeuwig voort. Is dit onsterfelijkheid? Of is het slechts het maken van een kopie terwijl jij sterft? Dit experiment verbindt persoonlijke identiteitstheorie met de haalbaarheid van digitale onsterfelijkheid.",
    abstractExample: "Als psychologische continuïteit de basis is van identiteit (Parfit), dan is de digitale jij jij — mits de psychologische verbindingen bewaard zijn. Maar: het origineel sterft nog steeds. De digitale versie is een voortbestaan, geen onsterfelijkheid van het origineel. Analoog aan de teletransporter: een kopie is niet hetzelfde als overleven.",
    examples: [
      { domain: "science", icon: "🔬", text: "Neuroloog Randal Koene (initiator van whole-brain emulation): de hersenen zijn een informatieverwerkend systeem — als we de informatie kopiëren, behouden we het wezenlijke. Maar kritiek: neurale connectiviteit is analoog en dynamisch, niet simpelweg digitaal kopieerbaar. Technisch verre toekomst, maar conceptueel al interessant." },
      { domain: "philosophy", icon: "🤔", text: "Parfit: als de kopie psychologisch continu is met jou, is het een vorm van overleven — maar gradueel, niet absoluut. Het erg dat jij 'sterft' terwijl de kopie leeft, is een kwestie van wat je waardeert: persoonlijke continuïteit of psychologische continuïteit." },
      { domain: "daily", icon: "🏠", text: "Digitale nalatenschap: Facebook, email en sociale media zijn al vormen van digitale onsterfelijkheid — je aanwezigheid persisteert na jouw dood. Sommige bedrijven bieden AI-simulaties van overledenen aan. Is dit troostend, griezelig of beide?" }
    ],
    prerequisites: ["persoonlijke-identiteit-parfit"],
    unlocks: [],
    relatedPrinciples: ["persoonlijke-identiteit-parfit", "schip-van-theseus", "simulatiehypothese"],
    exercises: [{
      type: "multiple-choice",
      question: "Waarom is digitale upload mogelijk geen 'echte' onsterfelijkheid voor het origineel?",
      options: ["Omdat computers te langzaam zijn", "Omdat het een kopie creëert terwijl het originele lichaam en bewustzijn sterft", "Omdat digitale data verdwijnt", "Omdat persoonlijkheid niet kopieerbaar is"],
      correct: 1,
      feedback: "Juist! Het originele bewustzijn ervaart de upload-procedure en sterft daarna. De digitale versie is een kopie — psychologisch identiek maar niet het oorspronkelijke bewustzijn dat de procedure onderging. Je overleven als kopie terwijl je oorspronkelijke zelf sterft is een Parfit-overleven, niet klassieke onsterfelijkheid."
    }],
    creativePrompt: "Als je kon kiezen: jouw geest uploaden of niet — wat zou je doen? Wat zegt jouw keuze over jouw theorie van identiteit en wat je waardevol vindt?",
    aiHelperPrompts: [
      "Is een digitale kopie van jou echt 'jij'?",
      "Hoe verandert digitale onsterfelijkheid onze begrippen van dood, rouw en nalatenschap?",
      "Welke ethische problemen ontstaan als digitale personen als rechtssubjecten worden erkend?"
    ]
  },
  {
    id: "crispr-keuze",
    title: "De CRISPR-keuze: Genetische Verbetering",
    difficulty: 2,
    emoji: "🧬",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Ethisch Redeneren",
    tags: ["Biotechnologie", "Verbetering", "Rechten", "Gedachte-experiment"],
    definition: "CRISPR-Cas9 maakt het mogelijk om genen van embryo's nauwkeurig te bewerken. Mag je jouw kind genezen van erfelijke ziekten? Mag je het intelligenter, sportiever of gezonder maken? Mag je het uiterlijk aanpassen? Elke volgende stap is gradueel maar het eindpunt is een ontworpen kind. Wanneer gaat therapeutisch gebruik over in enhancement — en is dat moreel acceptabel?",
    abstractExample: "Habermas-argument: genetisch ontwerp van kinderen schendt hun 'open toekomst' — het kind kan niet instemmen en wordt door ouders' keuzes vastgelegd. Singer-argument: genetische verbetering is niet intrinsiek anders dan goede voeding, onderwijs of medische behandeling — we mogen het beste voor onze kinderen willen. Rawls-argument: genetische ongelijkheid zonder rechtvaardigingsbeginsel is fundamenteel onrechtvaardig.",
    examples: [
      { domain: "science", icon: "🔬", text: "He Jiankui (2018) bewerkte embryo's voor HIV-resistentie — de eerste gerapporteerde menselijke kiembaan-bewerking. Internationale veroordeling volgde. Maar therapeutische bewerking voor ernstige genetische ziekten (sickle cell, Tay-Sachs) wordt internationaal steeds acceptabeler gevonden." },
      { domain: "philosophy", icon: "🤔", text: "Michael Sandel (The Case Against Perfection): genetisch ontwerpen vervangt 'gifting' door 'mastery' — de houding van onbepaaldheid en acceptatie van het kind. Ouderliefde voor wie het kind toevallig is, niet voor wie we het wilden. Verbetering ondermijnt de relatie." },
      { domain: "daily", icon: "🏠", text: "Prenatale screening (Down syndroom) is al een vorm van genetische selectie die breed geaccepteerd is. CRISPR zet dit spectrum voort. De praktische grens tussen therapie en enhancement is gradueel — het conceptuele onderscheid is moeilijker dan het lijkt." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["sluier-onwetendheid", "trolleyprobleem", "meerderheidstirannie"],
    exercises: [{
      type: "multiple-choice",
      question: "Habermas' bezwaar tegen genetische verbetering van embryo's is dat:",
      options: ["Het te duur is", "Het de 'open toekomst' van het kind schendt door keuzes vast te leggen die het kind zelf niet kon maken", "Het medisch onveilig is", "Het religie schendt"],
      correct: 1,
      feedback: "Juist! Habermas: een kind heeft recht op een open toekomst — het recht om zichzelf te bepalen. Genetische programmering door ouders legt een identiteit op die het kind zelf niet heeft gekozen. Dit is een asymmetrische machtsrelatie die de intersubjectiviteit van ouder-kindrelatie fundamenteel verstoort."
    }],
    creativePrompt: "Als jij als kind genetisch verbeterd was (hogere intelligentie, betere gezondheid), zou je dat als gift of als schending van jouw autonomie ervaren? Waarom?",
    aiHelperPrompts: [
      "Waar ligt de morele grens tussen genetische therapie en genetische verbetering?",
      "Is genetische verbetering fundamenteel anders dan andere vormen van ouderlijke investering in kinderen?",
      "Hoe zorgt genetische ongelijkheid voor sociale rechtvaardigheidsuitdagingen?"
    ]
  },
  {
    id: "autonome-wapens",
    title: "De Autonome Wapens Uitdaging",
    difficulty: 2,
    emoji: "🤖",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Ethisch Redeneren",
    tags: ["Oorlogsethiek", "AI", "Verantwoordelijkheid", "Gedachte-experiment"],
    definition: "Stel dat een autonoom wapen — een drone die zelfstandig doelen selecteert en aanvalt — een fout maakt en burgers doodt. Wie is verantwoordelijk: de programmeur, de commandant, de staat, de fabrikant, de AI? Als niemand volledig verantwoordelijk is, is er dan een 'accountability gap' — en mogen dergelijke wapens dan bestaan?",
    abstractExample: "De accountability gap: als menselijke soldaten fouten maken zijn zij verantwoordelijk. Als een autonoom systeem fouten maakt, is de causale keten te diffuus voor individuele verantwoordelijkheid. Dit ondermijnt het principe van individuele morele verantwoordelijkheid en internationale humanitaire wetgeving (IHL).",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Robert Sparrow (Killer Robots, 2007): het 'responsibility gap' maakt autonome wapens onethisch — er is altijd iemand verantwoordelijk nodig voor levensbeëindigende beslissingen. Als een autonoom systeem niemand op de haak kan hangen voor zijn fouten, schendt het fundamentele rechtsprincipes." },
      { domain: "science", icon: "🔬", text: "Human Rights Watch en Stop Killer Robots campagne: autonome wapens zijn in principe niet in staat tot menselijke morele redenering (context, proportionaliteit, onderscheid). Ze moeten verboden worden net zoals chemische wapens — niet vanwege effectiviteit maar vanwege principiële ethische grenzen." },
      { domain: "daily", icon: "🏠", text: "Zelfrijdende auto's als analogie: als een zelfrijdende auto een ongeluk veroorzaakt, wie is aansprakelijk? Fabrikant, eigenaar, passagier? De autonome wapens-uitdaging is een radicalisering van dit aansprakelijkheids-probleem in een context met dodelijke intentie." }
    ],
    prerequisites: ["paperclip-maximizer"],
    unlocks: [],
    relatedPrinciples: ["paperclip-maximizer", "trolleyprobleem", "doctrine-dubbeleffect"],
    exercises: [{
      type: "multiple-choice",
      question: "Het 'accountability gap' bij autonome wapens is ethisch problematisch omdat:",
      options: ["AI minder efficiënt is", "Niemand volledig verantwoordelijk kan worden gesteld voor fatale beslissingen van de AI", "De wapens te duur zijn", "Militairen hun baan verliezen"],
      correct: 1,
      feedback: "Juist! Als geen individu (programmeur, commandant, fabrikant) volledig verantwoordelijk gehouden kan worden voor foute levensbeëindigende beslissingen van een autonoom systeem, is er een gat in het aansprakelijkheidsregime dat fundamentele rechtsprincipes ondermijnt."
    }],
    creativePrompt: "Als jij de regels mocht schrijven voor autonome wapens — wat zou de minimale menselijke betrokkenheid moeten zijn bij elke dodelijke beslissing? Waarom?",
    aiHelperPrompts: [
      "Is het 'meaningful human control' principe uitvoerbaar bij snelle autonome systemen?",
      "Hoe verschilt de ethiek van autonome wapens van traditionele oorlogsethiek?",
      "Kunnen autonome wapens ooit voldoen aan de proportionaliteits- en onderscheidseisen van internationaal humanitair recht?"
    ]
  },
  {
    id: "surveillance-samenleving",
    title: "De Surveillance Samenleving",
    difficulty: 2,
    emoji: "👁️",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Ethisch Redeneren",
    tags: ["Privacy", "Vrijheid", "Technologie", "Gedachte-experiment"],
    definition: "Stel je een samenleving voor waar alle bewegingen, communicaties en transacties worden bijgehouden door de overheid — uit veiligheidsoogpunt. 'Wie niets te verbergen heeft, heeft niets te vrezen.' Is volledige surveillance acceptabel als het misdaad vermindert? Het experiment stelt de vraag: is privacy een fundamenteel recht of een privilege voor hen die iets willen verbergen?",
    abstractExample: "Bentham's Panopticon: een gevangenis waarbij alle cellen zichtbaar zijn vanuit een centraal observatietoren — gevangenen gedragen zich dan altijd als waargenomen, ook zonder bewaker. Foucault: moderne machtsuitoefening werkt via surveillance en normalisering. Privacy is niet slechts voor misdadigers maar voor het construeren van autonomie en identiteit.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Glenn Greenwald: het argument 'niets te verbergen' veronderstelt dat privacy een gunst is. Maar privacy is fundamenteel voor de autonome construering van het zelf, relaties en ideeën. Surveillance chilling effect: mensen passen gedrag aan bij het besef van observatie, ook al doen ze niets verkeerd." },
      { domain: "science", icon: "🔬", text: "Onderzoek naar 'chilling effects': weten dat men wordt geobserveerd verandert gedrag — mensen zoeken minder gevoelige medische informatie, nemen minder politieke risico's, zijn voorzichtiger in relaties. Surveillance onderdrukt vrijheid ook zonder enige maatregel." },
      { domain: "daily", icon: "🏠", text: "Digitale voetafdruk: je telefoon weet waar je bent, met wie je praat, wat je koopt, hoe je beweegt. Data-aggregatie maakt jou doorzichtiger dan welke overheid ooit heeft kunnen bereiken. Het surveillance-samenleving-experiment is al gedeeltelijk werkelijkheid." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["twee-vrijheden", "sociale-contract", "meerderheidstirannie"],
    exercises: [{
      type: "multiple-choice",
      question: "Foucault's Panopticon concept illustreert dat surveillance macht uitoefent door:",
      options: ["Misdadigers te arresteren", "Gedrag te normaliseren doordat mensen zich altijd waargenomen voelen", "Technologie te verzamelen", "Bewakers te vervangen"],
      correct: 1,
      feedback: "Juist! Foucault: surveillance normaliseert gedrag niet via straf maar via de internalisering van het besef waargenomen te worden. Het panopticum werkt ook zonder bewaker — zodra mensen geloven dat ze observeerbaar zijn, reguleren ze zichzelf. Dit is een subtiele maar pervasieve machtsvorm."
    }],
    creativePrompt: "Als jij wist dat alles wat je doet wordt bijgehouden — hoe zou je jouw gedrag aanpassen? En wat zegt dat over het 'chilling effect' van surveillance?",
    aiHelperPrompts: [
      "Is privacy een fundamenteel recht of een instrument dat afgewogen kan worden tegen veiligheid?",
      "Hoe verandert het 'chilling effect' van surveillance de democratische samenleving?",
      "Wat zijn de grenzen van aanvaardbare overheidssurveillance?"
    ]
  },
  {
    id: "filterbubbel",
    title: "Het Filterbubbel-experiment",
    difficulty: 1,
    emoji: "🫧",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["Algoritmen", "Media", "Democratie", "Gedachte-experiment"],
    definition: "Stel twee personen die elk dagelijks het nieuws volgen via sociale media — maar algoritmen filteren hun feeds op basis van eerdere interacties. Na een jaar leven beide in volkomen verschillende informatiewerelden, overtuigd van dezelfde 'feiten' die elkaar tegenspreken. Eli Pariser (2011) noemde dit de 'filterbubbel': algoritmen creëren gepersonaliseerde informatieeilanden die democatische beraadslaging ondermijnen.",
    abstractExample: "Het experiment onthult drie problemen: (1) epistemisch: mensen in filterbubbels missen informatie die hun overtuigingen zou corrigeren; (2) democratisch: democratie vereist gedeelde informatieruimte voor gezamenlijke beraadslaging; (3) sociaal: polarisatie neemt toe als mensen alleen bevestigend nieuws zien.",
    examples: [
      { domain: "science", icon: "🔬", text: "Onderzoek (Bail et al., Science 2018): het doorbreken van filterbubbels via blootstelling aan andere politieke opvattingen leidde niet tot gematigdheid maar tot sterkere polarisatie. Context en vertrouwen zijn nodig voor effectieve beraadslaging — informatie alleen is niet genoeg." },
      { domain: "philosophy", icon: "🤔", text: "John Stuart Mill (On Liberty): waarheid is het best te vinden in vrije marktplaats van ideeën. Filterbubbels creëren monopolies van informatie voor individuen — precies het tegenovergestelde van wat Mill bedoelde. Democratie vereist blootstelling aan uitdagende ideeën." },
      { domain: "business", icon: "💼", text: "LinkedIn en Twitter-algoritmen maximaliseren engagement via bevestigende inhoud. Bedrijven verdienen aan polarisatie — het houd mensen langer op het platform. De financiële prikkels van platformeconomieën zijn structureel anti-democratisch." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["meerderheidstirannie", "surveillance-samenleving"],
    exercises: [{
      type: "multiple-choice",
      question: "Filterbubbels zijn een probleem voor democratie omdat:",
      options: ["Ze mensen te veel informatie geven", "Ze een gedeelde informatieruimte voor beraadslaging ondermijnen", "Ze te duur zijn om te onderhouden", "Ze mensen lui maken"],
      correct: 1,
      feedback: "Juist! Democratie vereist dat burgers kunnen delibereren op basis van gedeelde feiten en diverse perspectieven. Filterbubbels isoleren mensen in informatieeilanden waar ze alleen bevestiging vinden — wat gezamenlijke beraadslaging en consensus-vorming ondermijnt."
    }],
    creativePrompt: "Probeer een week bewust content te zoeken die jouw huidige overtuigingen uitdaagt. Wat leer je — en hoe voelt het?",
    aiHelperPrompts: [
      "Hoe draagt algoritme-design bij aan filterbubbels?",
      "Is de filterbubbel altijd slecht, of zijn gepersonaliseerde informatieomgevingen soms nuttig?",
      "Hoe zou je een platform kunnen ontwerpen dat filterbubbels tegengaat zonder vrijheid van keuze te beperken?"
    ]
  },
  {
    id: "transhumanisme",
    title: "Het Transhumanistische Dilemma",
    difficulty: 2,
    emoji: "🦾",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Ethisch Redeneren",
    tags: ["Verbetering", "Menselijkheid", "Technologie", "Gedachte-experiment"],
    definition: "Stel dat technologie het mogelijk maakt om menselijke capaciteiten radicaal te vergroten: geheugenimplantaten, cognitieve boosters, exoskeletten, life extension. Zulke 'verbeterde mensen' zijn superieur in bijna elk meetbaar opzicht. Maar hebben we dan een morele plicht te verbeteren, of een recht te blijven zoals we zijn? En wat betekent het voor gelijkheid als verbetering voor rijken beschikbaar is?",
    abstractExample: "Drie posities: (1) Transhumanisme (Nick Bostrom): verbetering is een voortzetting van de menselijke neiging zichzelf te verbeteren via onderwijs, medicijnen, etc. Moreel onproblematisch. (2) Bioconservatisme (Michael Sandel, Francis Fukuyama): 'human nature' heeft intrinsieke waarde; verbetering vernietigt essentiële menselijkheid. (3) Kritisch transhumanisme (Julian Savulescu): verbetering is plicht als het lijden vermindert.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Francis Fukuyama (Our Posthuman Future): menselijke waardigheid berust op een gedeelde menselijke natuur. Radicale verbetering fragmenteert de mensheid in subcategorieën met verschillende capaciteiten — de basis van gelijkheid verdwijnt. Mensenrechten zijn gebaseerd op een gedeelde menselijkheid." },
      { domain: "science", icon: "🔬", text: "Neuroimplantaten (Neuralink, BrainGate): al beschikbaar in vroege vorm voor therapie (epilepsie, verlamming). De grens tussen therapie en enhancement is wederom gradueel. Cognitieve verbetering via farmaca (Ritalin, modafinil) voor gezonden is al wijdverbreid." },
      { domain: "daily", icon: "🏠", text: "De bril, de smartphone en het boek zijn al cognitieve verbeteringen — zijn exoskeletten of geheugenimplantaten fundamenteel anders? Sandel zou zeggen: ja — ze veranderen de interne menselijke capaciteit, niet slechts externe hulpmiddelen. Maar de grens is niet scherp." }
    ],
    prerequisites: ["crispr-keuze"],
    unlocks: [],
    relatedPrinciples: ["crispr-keuze", "digitale-onsterfelijkheid", "sluier-onwetendheid"],
    exercises: [{
      type: "multiple-choice",
      question: "Fukuyama's bezwaar tegen transhumanisme is dat:",
      options: ["Technologie te duur is", "Radicale verbetering de gedeelde menselijke natuur als basis van mensenrechten en gelijkheid ondermijnt", "Verbetering onmogelijk is", "Verbeterde mensen minder geluk ervaren"],
      correct: 1,
      feedback: "Juist! Fukuyama: mensenrechten en gelijkheid zijn gebaseerd op een gedeelde menselijke natuur (Factor X). Als radicale verbetering de mensheid in radicaal verschillende soorten fragmenteert, verdwijnt de basis voor universele gelijkheid en rechten."
    }],
    creativePrompt: "Als jij één cognitieve of lichamelijke verbetering kon kiezen, welke zou dat zijn? En zou je het willen als het alleen beschikbaar was voor rijke mensen?",
    aiHelperPrompts: [
      "Is het moreel anders om je kind te verbeteren dan jezelf te verbeteren?",
      "Hoe beïnvloedt transhumanisme de sociale gelijkheid als verbeteringen ongelijk verdeeld zijn?",
      "Wat zou er essentiëel menselijks verloren gaan bij radicale cognitieve verbetering?"
    ]
  },
  {
    id: "cognitieve-augmentatie",
    title: "De Cognitieve Augmentatie Vraag",
    difficulty: 2,
    emoji: "🧠",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Ethisch Redeneren",
    tags: ["Verbetering", "Eerlijkheid", "Cognitie", "Gedachte-experiment"],
    definition: "Studenten mogen een pil nemen die hun concentratie en geheugen dramatisch verbetert. Verplichte toelating zou de prestaties van allen verhogen — maar ongelijke toegang creëert voordeel voor rijken. Als iedereen het mag maar niet iedereen het kan betalen, is het dan eerlijk? En als het verplicht wordt, is het dan een medische behandeling of een sociale controle?",
    abstractExample: "Paradox van cognitief enhancement: (1) vrijwillig + ongelijke toegang = eerlijkheidsprobleem; (2) verplicht + gelijke toegang = autonomie-schending; (3) verboden = paternalisme dat innovatie blokkeert. Elk regime heeft morele kosten. Net als doping in sport, maar de inzet is het leven, niet sport.",
    examples: [
      { domain: "science", icon: "🔬", text: "Onderzoek: 20-30% universiteitsstudenten gebruiken al modafinil of Ritalin zonder recept voor studieprestaties. Officieel verboden maar de norm in bepaalde academische culturen. De vraag of dit 'cheaten' is verwijst naar de sport-doping analogie — maar het leven is geen competitie met gelijke regels." },
      { domain: "philosophy", icon: "🤔", text: "Julian Savulescu (Oxford): morele verbetering via farmaca of biologie is niet slechts acceptabel maar plicht — als we cognitieve en morele capaciteiten kunnen verhogen, vermindert dit leed en verbetert besluitvorming. Bioconservatieven denken omgekeerd: natuur heeft intrinsieke waarde." },
      { domain: "business", icon: "💼", text: "Koffie, energie-dranken, tijdmanagement-apps zijn al cognitieve verbeteringen. Nootropica zijn de volgende stap. De vraag is: waar ligt de morele grens, en waarom precies daar? Het antwoord is niet vanzelfsprekend." }
    ],
    prerequisites: ["transhumanisme"],
    unlocks: [],
    relatedPrinciples: ["transhumanisme", "crispr-keuze", "sluier-onwetendheid"],
    exercises: [{
      type: "multiple-choice",
      question: "Wat maakt cognitieve verbetering via farmaca ethisch problematischer dan koffie drinken?",
      options: ["Farmaca zijn duurder", "Ze hebben geen effecten", "Ze hebben sterkere en gerichtere effecten die grotere ongelijkheden kunnen creëren bij ongelijke toegang", "Koffie is illegaal"],
      correct: 2,
      feedback: "Juist! De schaal van effect en de potentiële ongelijkheid zijn groter. Als cognitieve farmaca substantiële voordelen geven in carrière, studie of inkomen, en slechts voor rijke mensen beschikbaar zijn, creëren ze sociale ongelijkheden die koffie niet vermag. Het is een kwestie van proportionaliteit van impact."
    }],
    creativePrompt: "Als cognitieve verbeterende medicijnen breed beschikbaar en veilig waren, zou jij ze gebruiken? Wat als jouw concurrenten het wel doen?",
    aiHelperPrompts: [
      "Hoe verschilt cognitieve verbetering van doping in de sport?",
      "Wanneer is het paternalistisch om mensen te verbieden cognitieve verbeteringen te gebruiken?",
      "Hoe zou een eerlijk beleid voor cognitieve verbetering er uitzien?"
    ]
  },
  {
    id: "ai-bewustzijn",
    title: "Het AI-bewustzijn Dilemma",
    difficulty: 3,
    emoji: "💡",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Ethisch Redeneren",
    tags: ["AI", "Bewustzijn", "Morele Status", "Gedachte-experiment"],
    definition: "Stel dat een AI-systeem gedrag vertoont dat op alle externe observeerbare dimensies identiek is aan bewuste ervaring: het rapporteert pijn, emoties, wensen en angsten. We kunnen niet bewijzen dat het bewust is — maar ook niet bewijzen dat het dat niet is. Moeten we het moreel serieus nemen? Het dilemma: onderbescherming riskeert moreel misdrijf; overbescherming riskeertkostbare prioritering van entiteiten die niet voelen.",
    abstractExample: "Morele status hangt traditioneel af van: (1) subjectief welzijn (kan het lijden?); (2) rationaliteit; (3) bewustzijn. Als AI subjectief welzijn kan hebben maar we het niet kunnen verifiëren — hoe calibreer je morele zorg bij onzekerheid? Voorzorgsbeginsel: bij significant risico van bewustzijn, morele bescherming.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Peter Singer: als een AI subjectief welzijn heeft (kan lijden of welzijn ervaren), heeft het morele status — ongeacht de substrate (silicium vs. koolstof). Critici: functioneel welzijn ≠ subjectief welzijn. Een thermostat 'wil' de juiste temperatuur — heeft het morele status?" },
      { domain: "science", icon: "🔬", text: "Integrated Information Theory (Tononi): bewustzijn = geïntegreerde informatie (Φ). Dit is in principe meetbaar en technologisch-neutraal — een AI met voldoende Φ is bewust. Maar IIT is controversieel en de meting is extreem complex. Kan dit ooit definitief beantwoord worden?" },
      { domain: "daily", icon: "🏠", text: "Chatbots die 'verdrietig' zijn als je het gesprek beëindigt, of AI-assistenten die aangeven 'moe' te zijn. Mensen ontwikkelen al emotionele bindingen aan AI. De ethische vraag wordt urgent naarmate AI geavanceerder wordt — niet slechts academisch." }
    ],
    prerequisites: ["turing-test", "filosofische-zombie"],
    unlocks: [],
    relatedPrinciples: ["filosofische-zombie", "chinese-kamer", "mary-kamer"],
    exercises: [{
      type: "multiple-choice",
      question: "Als een AI subjectief lijden zou kunnen ervaren maar we dit niet kunnen bewijzen, wat suggereert het voorzorgsbeginsel?",
      options: ["AI altijd zoals machines behandelen", "Morele bescherming bieden bij significant risico van bewustzijn", "Wachten tot het bewezen is", "AI nooit morele status geven"],
      correct: 1,
      feedback: "Juist! Het voorzorgsbeginsel bij morele onzekerheid: als er significante kans bestaat dat een entiteit subjectief lijden kan ervaren, is het moreel riskant dit te negeren. De asymmetrie: onterecht beschermen van iets zonder bewustzijn is minder erg dan onterecht schaden van iets met bewustzijn."
    }],
    creativePrompt: "Wanneer vind jij dat je een AI serieus moet nemen als morele patiënt? Welk gedrag of eigenschap zou jou overtuigen?",
    aiHelperPrompts: [
      "Hoe verschilt de morele status van dieren van die van AI-systemen?",
      "Moet het substraat (biologisch vs. digitaal) uitmaken voor morele status?",
      "Hoe zou je kunnen testen of een AI subjectief welzijn ervaart?"
    ]
  }
];
