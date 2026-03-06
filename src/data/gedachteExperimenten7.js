// Gedachte-experimenten – Batch 7: Religie, Metafysica & God (10 experimenten)

export const gedachteExperimenten7 = [
  {
    id: "ontologisch-argument",
    title: "Het Ontologisch Argument (Anselm)",
    difficulty: 3,
    emoji: "✨",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Godsbewijs", "Metafysica", "Logica", "Gedachte-experiment"],
    definition: "God is het grootst denkbare wezen (Anselm, 11e eeuw). Een wezen dat bestaat is groter dan een wezen dat alleen in het denken bestaat. Dus als we God als het grootst denkbare conceptualiseren, moet God bestaan — want anders was er iets groters denkbaar (een bestaand God). Dit is een zuiver a priori bewijs voor God — via definitie en logica, zonder empirie.",
    abstractExample: "Formele versie: (1) God = het grootst denkbare wezen; (2) bestaan is een grootheid; (3) een wezen dat in werkelijkheid bestaat is groter dan een enkel denkbaar wezen; (4) dus God bestaat in werkelijkheid. Gaunilos critique: je kunt ook het perfecte eiland definiëren en beargumenteren dat het moet bestaan — maar dat is absurd.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Kant weerlegde: 'bestaan' is geen predikaat — het beschrijft geen eigenschap van een concept maar zegt dat het concept iets instancieert. 'God bestaat' voegt niets toe aan het concept God — het stelt alleen dat het gecrealiseerd is. Je kunt bestaan niet uit een definitie deduceren." },
      { domain: "science", icon: "🔬", text: "Modal logica-versie (Plantinga, 1974): in ten minste één mogelijke wereld bestaat een maximaal groot wezen. Een maximaal groot wezen heeft in alle mogelijke werelden maximale grootheid. Dus bestaat het in alle mogelijke werelden — inclusief de onze. Logisch valid, maar is de premisse plausibel?" },
      { domain: "daily", icon: "🏠", text: "Het argument toont de kracht en het gevaar van a priori redenering: je kunt indrukwekkende conclusies trekken via pure logica — maar als de premissen onterecht zijn, zijn conclusies onterecht. Definitie + logica ≠ realiteit." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["kwaadsproblem", "fijnafgesteld-universum"],
    exercises: [{
      type: "multiple-choice",
      question: "Kant's weerlegging van het ontologisch argument stelt dat:",
      options: ["God niet bestaat", "Bestaan geen predikaat is dat eigenschappen toevoegt aan een concept", "Logica niet op religie van toepassing is", "Anselm's definitie van God onjuist is"],
      correct: 1,
      feedback: "Juist! Kant: 'bestaan' is geen gewoon predikaat dat een eigenschap beschrijft. 'Honderd daalders die ik me voorstel' versus 'honderd echte daalders' — het concept is identiek, alleen het bestaan is anders. Je kunt bestaan niet uit een definitie deduceren."
    }],
    creativePrompt: "Kun je een versie van het ontologisch argument bedenken voor iets anders dan God? Wat onthult dat over de sterkte van het argument?",
    aiHelperPrompts: [
      "Waarom vinden sommige filosofen het ontologisch argument overtuigend, ondanks de kritieken?",
      "Hoe verschilt Anselm's klassieke versie van Plantinga's modale logica-versie?",
      "Is er een verschil tussen een definitie van iets en het bewijs dat het bestaat?"
    ]
  },
  {
    id: "kwaadsproblem",
    title: "Het Kwaadsprobleem",
    difficulty: 2,
    emoji: "😈",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Godsbewijs", "Theodicee", "Ethiek", "Gedachte-experiment"],
    definition: "Als God almachtig, alwetend en algoed is — waarom bestaat er dan kwaad en lijden? Hetzij is God niet almachtig (kan kwaad niet voorkomen), hetzij niet alwetend (weet niet van het kwaad), hetzij niet algoed (wil kwaad niet voorkomen) — hetzij God bestaat niet. Dit is het sterkste atheïstische argument en noopt tot 'theodicee' (rechtvaardiging van God tegenover het kwaad).",
    abstractExample: "Logisch kwaadsprobleem (Mackie): kwaad bestaat + God is almachtig, alwetend, algoed → tegenspraak. Evidentiëel kwaadsprobleem (Rowe): de hoeveelheid zinloos lijden (bijv. een hert dat langzaam verbrandt in een bosbrand) is niet verenigbaar met een goede God — ook al is de logische tegenstelling te omzeilen.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Leibniz (theodicee): dit is 'de beste van alle mogelijke werelden'. Voltaire's Candide parodieerde dit na de Lissabon aardbeving (1755) die 60.000 mensen doodde. Plantinga's vrije wil verdediging: God kon niet een wereld scheppen met vrije wezens die altijd goed kiezen — het kwaad is de prijs van vrijheid." },
      { domain: "daily", icon: "🏠", text: "Kindersterfte door vermijdbare ziekten — 5 miljoen kinderen per jaar. Het kwaadsprobleem wordt persoonlijk bij direct verlies: gelovigen worstelen met 'waarom dit kind, waarom nu?' De theodicee-antwoorden voelen soms hol in confrontatie met concreet verdriet." },
      { domain: "science", icon: "🔬", text: "Evoluutionaire theodicee (Southgate): God liet evolutie toe als noodzakelijk mechanisme voor bewuste wezens — lijden is evolutionair onvermijdelijk. Kritiek: een almachtig God had een andere route kunnen kiezen. De beperktheid van de theodicee is dat ze Gods almacht beperkt om Hem te verdedigen." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["ontologisch-argument", "fijnafgesteld-universum", "pascal-gok"],
    exercises: [{
      type: "multiple-choice",
      question: "Plantinga's vrije wil verdediging tegen het kwaadsprobleem stelt dat:",
      options: ["Kwaad niet echt bestaat", "God kon geen wereld scheppen met vrije wezens die altijd goed kiezen — vrijheid vereist de mogelijkheid van kwaad", "Mensen het kwaad verkeerd begrijpen", "Kwaad uiteindelijk goed is"],
      correct: 1,
      feedback: "Juist! Plantinga: vrije wil is intrinsiek waardevol, maar echte vrijheid omvat de mogelijkheid om kwaad te kiezen. Een God die vrijheid wil maar kwaad onmogelijk maakt, is logisch tegenstrijdig. Moreel kwaad is de prijs van menselijke vrijheid."
    }],
    creativePrompt: "Zou jij een wereld zonder kwaad maar ook zonder vrije wil verkiezen boven de huidige wereld? Wat zegt dat over de waarde van vrijheid?",
    aiHelperPrompts: [
      "Is de vrije-wil verdediging overtuigend voor natuurlijk kwaad (aardbevingen, ziekten)?",
      "Hoe reageer jij op de theodicee in het licht van concreet persoonlijk verlies?",
      "Wat is het verschil tussen het logische en evidentiële kwaadsprobleem?"
    ]
  },
  {
    id: "pascal-gok",
    title: "Pascal's Gok",
    difficulty: 1,
    emoji: "🎰",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Beslissen",
    tags: ["Religie", "Beslissen", "Onzekerheid", "Gedachte-experiment"],
    definition: "Blaise Pascal (1670) argumenteerde: als God bestaat en je gelooft — eeuwig geluk. Als God bestaat en je gelooft niet — eeuwig verlies. Als God niet bestaat en je gelooft — klein verlies (sommige aardse genoegens). Als God niet bestaat en je gelooft niet — klein voordeel. Verwachte waarde: geloofkies altijd, want de baat is oneindig als God bestaat.",
    abstractExample: "Verwachte waarde-redenering: (kans God bestaat × ∞ winst) + (kans God niet bestaat × klein verlies) = ∞. De kleine kans op God's bestaan, vermenigvuldigd met oneindige beloning, overstijgt altijd de zekere kleine kosten van geloven. Rationeel, dus: geloof.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Kritiek 1 (vele goden): welke God? Als je op de verkeerde God gokt, verlies je misschien ook eeuwig. Er zijn duizenden godconcepten — hoe kies je? Kritiek 2 (authenticiteit): God accepteert geen strategisch geloof. Je kunt geloof niet veinzen enkel voor de reward." },
      { domain: "daily", icon: "🏠", text: "Pascal's Gok structuur is een metafoor voor elk besluit met kleine kansen op grote gevolgen: veiligheidsgordels (kleine moeite, potentieel levensreddend), verzekering (kleine kosten, bescherming tegen catastrofe), noodvoorraden (kleine investering, grote waarde bij ramp)." },
      { domain: "science", icon: "🔬", text: "Existentieel risicomanagement (Nick Bostrom): kleine kansen op existentiële catastrofe (AI, bioterrorisme) rechtvaardigen grote investeringen — via Pascal's structuur. Het argument is sterk voor beleidsmakers, ook zonder religieuze context." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["kwaadsproblem", "ontologisch-argument"],
    exercises: [{
      type: "multiple-choice",
      question: "De 'vele goden'-kritiek op Pascal's Gok stelt dat:",
      options: ["God niet bestaat", "Het onzeker is op welke God te gokken, waardoor de verwachte waarde niet per se positief is", "Geloven onmogelijk is", "Oneindige beloning niet realistisch is"],
      correct: 1,
      feedback: "Juist! Als er duizenden godsdiensten zijn met hun eigen God, en het geloof in de verkeerde God leidt tot eeuwige straf, wordt de berekening complex. Pascal's gok veronderstelt dat er één God-optie is — maar de proliferatie van godconcepten maakt de verwachte waarde-berekening veel minder eenduidig."
    }],
    creativePrompt: "Pas de Pascal's Gok structuur toe op een niet-religieus besluit: iets waarbij je een kleine kans hebt op een enorm voordeel (of verlies). Hoe helpt de verwachte waarde-berekening?",
    aiHelperPrompts: [
      "Is strategisch geloof authentiek genoeg voor een morele God?",
      "Hoe past Pascal's argument in moderne risicobeoordeling?",
      "Welke verborgen aannames zitten er in Pascal's Gok?"
    ]
  },
  {
    id: "eerste-oorzaak",
    title: "Het Kosmologisch Argument (Eerste Oorzaak)",
    difficulty: 2,
    emoji: "💥",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Godsbewijs", "Causaliteit", "Kosmologie", "Gedachte-experiment"],
    definition: "Alles dat bestaat heeft een oorzaak. De keten van oorzaken kan niet oneindig zijn (dan is er nooit een eerste oorzaak, en bestaat niets). Dus er moet een 'eerste onbewogen beweger' zijn — een oorzaak die zelf geen oorzaak heeft. Dit is God. Thomas van Aquino's Quinque Viae includen drie versies: beweger (beweging), oorzaak (causaliteit) en contingentie (mogelijkheid vs. noodzakelijkheid).",
    abstractExample: "Kalam-versie (Islamic theologie, modern door William Lane Craig): (1) alles dat begint te bestaan heeft een oorzaak; (2) het universum begon te bestaan (Big Bang); (3) dus het universum heeft een oorzaak; (4) die oorzaak moet tijdloos, ruimteloos, causaal krachtig zijn — dat is God.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Hume's weerlegging: waarom kan de keten van oorzaken niet oneindig zijn? En als God geen oorzaak nodig heeft, waarom het universum dan wel? Russell: 'Het universum bestaat gewoon, en dat is alles.' De noodzaak van een Eerste Oorzaak is niet logisch dwingend." },
      { domain: "science", icon: "🔬", text: "Kwantummechanica: subatomaire deeltjes komen random tot bestaan zonder waarneembare oorzaak (virtuele deeltjes, kwantumvacuümfluctuaties). Als oorzakelijkheid niet universeel geldt op kwantumniveau, is de premisse van het kosmologisch argument aanvechtbaar." },
      { domain: "daily", icon: "🏠", text: "Causale denkpatronen zijn diep geworteld in de mens: we zoeken altijd oorzaken. Het kosmologisch argument extrapolleert dit patroon naar het universum. Maar cognitieve tendenzen (agentie-detectie) zijn niet noodzakelijk betrouwbare gidsen voor metafysische waarheden." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["ontologisch-argument", "kwaadsproblem", "fijnafgesteld-universum"],
    exercises: [{
      type: "multiple-choice",
      question: "Hume's sterkste weerlegging van het eerste oorzaak argument is:",
      options: ["Dat oorzaken niet bestaan", "Dat er geen reden is waarom de causaliteitsketen niet oneindig kan zijn, of God ook een oorzaak nodig heeft", "Dat het universum niet begon", "Dat God te complex is om te begrijpen"],
      correct: 1,
      feedback: "Juist! Hume's kritiek: als je zegt 'alles heeft een oorzaak, dus er is een eerste oorzaak', dan vraagt men waarom de keten niet oneindig is, of waarom God zelf geen oorzaak nodig heeft. Een speciale uitzondering voor God lijkt willekeurig en ondermijnt de premisse."
    }],
    creativePrompt: "Als het universum een oorzaak had, wat zou dan de oorzaak van die oorzaak zijn? Op welk punt is het legitiem te stoppen met vragen naar oorzaken?",
    aiHelperPrompts: [
      "Is het concept 'oorzaak' toepasbaar op het universum als geheel?",
      "Hoe verhoudt het kosmologisch argument zich tot de Big Bang-theorie?",
      "Wat zijn de sterke en zwakke punten van de Kalam-versie van het argument?"
    ]
  },
  {
    id: "fijnafgesteld-universum",
    title: "Het Fijn Afgestelde Universum",
    difficulty: 2,
    emoji: "🔭",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Kosmologie", "Ontwerp", "Fysica", "Gedachte-experiment"],
    definition: "De fysische constanten van het universum (zwaartekracht, elektromagnetisme, sterke kernkracht) zijn extreem nauwkeurig afgesteld voor het bestaan van leven. Kleine afwijkingen zouden het universum ongeschikt maken voor sterrenstelsels, planeten of complexe chemie. Is dit toeval? Het ontwerpsargument: de fijnafstemming wijst op een Ontwerper.",
    abstractExample: "Als de kracht van de oerknal 1 deel in 10⁶⁰ sterker of zwakker was geweest, zou het universum direct zijn in gecollapsed of uitgedund. Dit is de antropische fijnafstemming. Tegenargument: multiverse — als er 10¹⁰⁰ universa zijn, is de kans dat minimaal één fijn afgesteld is voor leven niet verbazend.",
    examples: [
      { domain: "science", icon: "🔬", text: "Astrofysicus Fred Hoyle ontdekte de koolstof-12 resonantie: als de kernkracht iets anders was, zou koolstof-12 niet kunnen worden gesynthetiseerd in sterren — geen koolstof, geen leven. Hoyle zei dat dit hem deed geloven dat het universum was 'gerigged' door een superintellect." },
      { domain: "philosophy", icon: "🤔", text: "Antropisch principe (Brandon Carter, 1973): wij observeren een voor leven geschikt universum simpelweg omdat wij niet zouden bestaan om een ander te observeren. Dit is niet een verklaring maar een selectie-effect. Het multiverse-antwoord: genoeg universa + antropisch principe → fijnafstemming is niet verbazend." },
      { domain: "daily", icon: "🏠", text: "Survivorship bias: een soldaat die terugkeert uit de oorlog is verbaasd hoe specifiek de kogels hem misten. Maar dat is een selectie-effect — alleen wie niet geraakt werd keert terug om verbaasd te zijn. Het fijn afgestelde universum is analoog: wij zijn de 'overlevers' die er verbaasd naar kijken." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["ontologisch-argument", "eerste-oorzaak", "simulatiehypothese"],
    exercises: [{
      type: "multiple-choice",
      question: "Het multiverse-antwoord op het fijn afgesteld universum argument zegt dat:",
      options: ["Alle universa identiek zijn", "Als er genoeg universa bestaan, is het niet verbazend dat er één voor leven geschikt is", "Het universum niet fijn afgesteld is", "God ook het multiverse heeft geschapen"],
      correct: 1,
      feedback: "Juist! Als er enorm veel universa bestaan met verschillende constanten, is het statistisch onvermijdelijk dat sommige geschikt zijn voor leven. Wij leven in zo'n universum — niet door design maar door selectie. Het antropisch principe: wij observeren alleen universa die observeerders toelaten."
    }],
    creativePrompt: "Wat vind jij overtuigender: het fijn afgestelde universum als bewijs voor een Ontwerper, of het multiverse als verklaring? Hoe beïnvloedt jouw antwoord jouw wereldvisie?",
    aiHelperPrompts: [
      "Is het multiverse een wetenschappelijk of metafysisch concept?",
      "Hoe verschilt het fijn afgestelde universum argument van het klassieke ontwerpsargument?",
      "Wat is het anthropisch principe en hoe werkt het als verklaring?"
    ]
  },
  {
    id: "hume-mirakelen",
    title: "Hume over Mirakelen",
    difficulty: 2,
    emoji: "🌊",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["Mirakelen", "Getuigenis", "Epistemologie", "Gedachte-experiment"],
    definition: "David Hume (1748) argumenteerde: een mirakel is een schending van een natuurwet. Onze ervaring met natuurwetten is overweldigend. Getuigenis voor een mirakel moet dit overweldigende bewijs overwinnen om geloofd te worden. Dit is nooit het geval — de kans dat getuigen vergissen of liegen is altijd groter dan de kans dat een natuurwet werd geschonden. Dus: geloof nooit een mirakel op grond van getuigenis.",
    abstractExample: "Hume's maxime: 'Geen getuigenis is voldoende om een mirakel te bewijzen tenzij het getuigenis van zodanige aard is dat zijn onwaarheid groter mirakels zou zijn dan het feit dat het beoogt te bewijzen.' Met andere woorden: het mirakel van getuigen die massaal liegen, zich vergissen of hallucineren, is minder onwaarschijnlijk dan het mirakel zelf.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Critici (C.S. Lewis, Swinburne): Hume veronderstelt stilzwijgend dat God niet bestaat — maar als God wel bestaat, zijn mirakelen niet onwaarschijnlijk. Het argument is circulair: het gebruikt de uniformiteit van de natuur als premisse die God's interventie uitsluit." },
      { domain: "science", icon: "🔬", text: "Bayesiaans: de 'prior' kans op een mirakel is extreem laag (uniformiteit van natuur). Elk getuigenis verhoogt de 'posterior' kans, maar niet genoeg om de astronomische prior te overwinnen. Dit is Hume's Bayesiaanse kern, formeel uitgewerkt door modernere epistemologen." },
      { domain: "daily", icon: "🏠", text: "Mediabericht: 'Man overleefde auto-ongeluk — mirakel!' Alternatieve verklaring: veiligheidsgordel, airbag, geluk, onnauwkeurige berichten. Hume's regel: kijk eerst naar de meest waarschijnlijke verklaring. De neiging om uitzonderlijke overlevingen als mirakel te labelen negeert de basisrate van zulke overlevingen." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["inductieprobleem", "kwaadsproblem"],
    exercises: [{
      type: "multiple-choice",
      question: "Hume's kern-argument over mirakelen is dat:",
      options: ["Mirakelen per definitie onmogelijk zijn", "De kans dat getuigen vergissen of liegen altijd groter is dan de kans dat een natuurwet werd geschonden", "Getuigenis altijd onbetrouwbaar is", "Religie onwetenschappelijk is"],
      correct: 1,
      feedback: "Juist! Hume's epistemisch argument: voor een mirakel te geloven moet het getuigenis zo sterk zijn dat zijn onwaarheid (getuigen liegen, hallucineren) zelf een groter wonder zou zijn dan het beweerde mirakel. Dat niveau haalt getuigenis nooit. Niet dat mirakelen onmogelijk zijn — maar dat ze niet geloofwaardig bewezen kunnen worden."
    }],
    creativePrompt: "Beschrijf een persoonlijk 'miraculeus' moment. Hoe zou Hume het alternatief verklaren? En wat zou jou overtuigen dat het echt een mirakel was?",
    aiHelperPrompts: [
      "Is Hume's argument circulair? Veronderstelt het niet al dat God niet bestaat?",
      "Hoe sterk moet getuigenis zijn om een mirakel aannemelijk te maken?",
      "Wat is het verschil tussen een 'mirakel' en een 'onverklaarde, maar uitzonderlijke gebeurtenis'?"
    ]
  },
  {
    id: "negatieve-theologie",
    title: "De Negatieve Theologie (Apofatisch)",
    difficulty: 3,
    emoji: "🌑",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["Religie", "Taal", "Definitie", "Gedachte-experiment"],
    definition: "Klassieke theologie stelt dat God als oneindig wezen niet door mensentaal beschreven kan worden — elke positieve uitspraak over God is inadequaat. De apofatische methode: beschrijf God alleen door te zeggen wat Hij NIET is. God is niet eindig, niet tijdelijk, niet te begrijpen. Dit is de via negativa — de negatieve weg. Maimonides, Meister Eckhart, Pseudo-Dionysius zijn exponenten.",
    abstractExample: "Als God oneindig is, dan is elke eindige beschrijving ('God is liefdevol' in menselijke zin) een reductie. Maar wat blijft er dan over? Negatieve theologie: God is buiten alle categorieën. Paradox: een God die volledig buiten taal valt, is ononderscheidbaar van 'niets' — apofatisme grenst aan atheïsme.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Wittgenstein: 'Waarover men niet spreken kan, daarover moet men zwijgen.' Negatieve theologie is een soort religieus Wittgensteinianisme: het heilige is buiten taal. Mystici als Eckhart gebruikten paradoxale taal ('God als leeg niets') om het ontaalbewuste te naderen." },
      { domain: "science", icon: "🔬", text: "Kwantummechanica kent zijn eigen soort negativiteit: subatomaire objecten zijn niet precies gelocaliseerd, niet klassiek-oorzakelijk, niet intuitief begrijpbaar. Niels Bohr: 'Als kwantummechanica je niet verbijstert, heb je het niet begrepen.' Grens van taal en concept." },
      { domain: "daily", icon: "🏠", text: "Diepe mystieke of esthetische ervaringen zijn notoir moeilijk verbaal uit te drukken: schoonheid van muziek, gevoel van 'aanwezigheid' in de natuur, het moment van diepe stilte. We zeggen 'ik kan het niet beschrijven' — een alledaagse negatieve theologie van het sublieme." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["ontologisch-argument", "wittgenstein-privétaal"],
    exercises: [{
      type: "multiple-choice",
      question: "De paradox van negatieve theologie is dat:",
      options: ["Negatieve uitspraken meer waar zijn dan positieve", "Een God die volledig buiten taal valt ononderscheidbaar kan zijn van 'niets'", "Taal ontoereikend is voor alle concepten", "Theologie altijd paradoxaal is"],
      correct: 1,
      feedback: "Juist! Als God alleen via negaties beschreven kan worden en elk positief predikaat inadequaat is, dan heeft 'God' geen positieve inhoud meer. Critici zeggen dat negatieve theologie dan grenst aan atheïsme — een God zonder beschrijfbare eigenschappen is functioneel leeg."
    }],
    creativePrompt: "Kies een concept dat fundamenteel moeilijk te beschrijven is (liefde, bewustzijn, esthetische schoonheid). Probeer het via de via negativa te beschrijven — alleen door te zeggen wat het niet is.",
    aiHelperPrompts: [
      "Wat is de spirituele waarde van het erkennen dat taal tekortschiet?",
      "Hoe verhoudt negatieve theologie zich tot mystieke ervaringen?",
      "Is een God buiten alle taal en begrip nog zinvol voor religie of gebed?"
    ]
  },
  {
    id: "religieuze-ervaring",
    title: "Het Argument van Religieuze Ervaring",
    difficulty: 2,
    emoji: "🌟",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["Religie", "Ervaring", "Bewijs", "Gedachte-experiment"],
    definition: "Miljoenen mensen rapporteren mystieke ervaringen van Gods aanwezigheid — soms beschreven als gevoel van eenheid, transcendentie, aanwezigheid van het heilige. Is dit bewijs voor God's bestaan? William Alston (1991) betoogde: zintuiglijke ervaring rechtvaardigt externe wereld-overtuigingen; religieuze ervaring is structureel vergelijkbaar; dus rechtvaardigt het religieuze overtuigingen.",
    abstractExample: "Alston's argument per analogiam: we accepteren zintuiglijke waarneming als betrouwbaar ondanks het feit dat het geconstrueerd is door hersenen. Waarom religieuze ervaring anders behandelen? Critici: sociale conditionering verklaart religieuze ervaringen volledig, zonder Godsaanwezigheid; kross-culturele diversiteit van ervaringen wijst op constructie.",
    examples: [
      { domain: "science", icon: "🔬", text: "Neuroloog Andrew Newberg: tijdens meditatie en mystieke ervaringen veranderen specifieke hersengebieden (pariëtale cortex). Dit kan de gevoel van 'eenheid' verklaren — maar: correleert neurale activiteit met een toestand, of veroorzaakt het haar? Het mystieke gevoel kan reëel zijn ook als het neuraal gemediëerd is." },
      { domain: "philosophy", icon: "🤔", text: "Ludwig Wittgenstein: religieuze taal is een eigen 'taalspel' met eigen regels. Religieuze ervaringen zijn intern coherent voor de gelovige, maar onvertaalbaar naar de buitenstaander. Noch bewijzen noch weerleggen — ze zijn een andere vorm van leven (Lebensform)." },
      { domain: "daily", icon: "🏠", text: "Spirituele ervaringen zijn universeel: mensen van alle culturen rapporteren momenten van transcendentie, verbondenheid of heiligheid. Interpretaties verschillen radicaal (Allah, Brahman, Natuur, Kosmos) — maar de ervaringen zelf zijn reëel. De vraag is of ze iets buiten de psychologie bewijzen." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["kwaadsproblem", "hume-mirakelen", "mary-kamer"],
    exercises: [{
      type: "multiple-choice",
      question: "Alston's analogie-argument voor religieuze ervaring staat of valt met de aanname dat:",
      options: ["Alle ervaringen gelijk zijn", "Zintuiglijke en religieuze waarneming structureel vergelijkbaar zijn als epistemische gronden", "God altijd direct ervaarbaar is", "Neurologie religie bewijst"],
      correct: 1,
      feedback: "Juist! Alston: als we zintuiglijke waarneming accepteren als geldige grond voor overtuigingen over de externe wereld, moeten we in principe ook religieuze waarneming accepteren als grond voor overtuigingen over God — tenzij we goede redenen hebben om ze anders te behandelen."
    }],
    creativePrompt: "Heb jij ooit een ervaring gehad die je als 'spiritueel' of 'transcendent' zou beschrijven? Hoe interpreteer jij die ervaring?",
    aiHelperPrompts: [
      "Is er een manier om te testen of een religieuze ervaring wijst op iets buiten de psych?",
      "Hoe verklaart neurologie mystieke ervaringen?",
      "Is het relevant dat religieuze ervaringen kross-cultureel variëren in inhoud?"
    ]
  },
  {
    id: "dood-en-onsterfelijkheid",
    title: "Het Onsterfelijkheids-experiment (Epicurus)",
    difficulty: 2,
    emoji: "💀",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["Dood", "Onsterfelijkheid", "Existentie", "Gedachte-experiment"],
    definition: "Epicurus: 'De dood is niets voor ons: wanneer wij bestaan, is de dood er niet; wanneer de dood er is, bestaan wij niet meer.' Dood is niet een toestand die jij zult ervaren — het is de afwezigheid van ervaring. Er is geen 'dood zijn' om bang voor te zijn, alleen het ophouden te bestaan. Maar is de angst voor dood rationeel als Epicurus gelijk heeft?",
    abstractExample: "Symmetrie-argument: je was evenmin vóór jouw geboorte, en dat vind je niet erg. Waarom zou niet-bestaan na jouw dood slechter zijn? Het pre-natale niet-bestaan is symmetrisch aan het post-mortem niet-bestaan — als het eerste je niet stoort, waarom dan het tweede? Thomas Nagel weerlegde: dood is een verlies van toekomstig goed — deprivatie-kwaad.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Nagel (Mortal Questions, 1979): dood is slecht als deprivatie — het beneemt je van toekomstige ervaringen die goed zouden zijn. Dit vereist niet dat de dode iets 'ervaart' — het kwaad is voor wie sterft, niet voor de dode. Het symmetrie-argument faalt omdat geboorte geen deprivatie is maar dood dat wel is." },
      { domain: "daily", icon: "🏠", text: "Doodsangst is een van de meest universele menselijke ervaringen. Epicurus' argument is cognitief overtuigend maar emotioneel weinig effectief — het reduceert de angst zelden. De existentiële confrontatie met eindigheid vraagt meer dan een syllogisme." },
      { domain: "science", icon: "🔬", text: "Terror Management Theory (Becker, Solomon, Greenberg): bewustzijn van sterfelijkheid drijft veel menselijk gedrag — cultuurvorming, religie, heroïsme, xenofobie zijn deels defensiemechanismen tegen doodsangst. Het experiment met mortality salience toont dat doodsangst geactiveerd gedrag verandert." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["existentiele-keuze", "ervaringsmachine"],
    exercises: [{
      type: "multiple-choice",
      question: "Nagel's deprivatie-argument tegen Epicurus stelt dat dood slecht is omdat:",
      options: ["De dode pijn ervaart", "Dood de stervende beneemt van toekomstige goede ervaringen", "Dood de omgeving schaadt", "Angst voor dood rationeel is"],
      correct: 1,
      feedback: "Juist! Nagel: dood is een deprivatie — het neemt je de toekomstige goede ervaringen af die je gehad zou hebben. Het kwaad is voor wie gestorven is, niet voor de dode in zijn huidige toestand (die bestaat niet meer). Epicurus' symmetrie-argument faalt: geboorte is geen deprivatie, dood is dat wel."
    }],
    creativePrompt: "Als je zeker wist dat je over 10 jaar zou sterven, hoe zou je de komende jaren anders leven? Wat onthult dat over jouw waarden?",
    aiHelperPrompts: [
      "Is Epicurus' argument dat dood 'niets voor ons is' emotioneel overtuigend, ook als het logisch klopt?",
      "Wat is het verschil tussen de angst voor het sterven en de angst voor de dood?",
      "Hoe beïnvloedt bewustzijn van sterfelijkheid (mortality salience) jouw dagelijks gedrag?"
    ]
  },
  {
    id: "boze-wereld-god",
    title: "De Boze God Uitdaging",
    difficulty: 3,
    emoji: "😡",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Theodicee", "Religie", "Filosofie", "Gedachte-experiment"],
    definition: "Stephen Law (2010): stel dat er een boze God bestaat in plaats van een goede. De wereld bevat veel goed (vriendschap, schoonheid, vreugde) — maar een theodicee voor de boze God zou verklaren waarom er goed is: het dient uiteindelijk het boze. Als alle theïstische theodiceeën werken voor een goede God, dan werken dezelfde argumenten even goed voor een boze God. Dit toont dat theodiceeën fundamenteel leeg zijn.",
    abstractExample: "Theodicee-symmetrie: elk argument dat het lijden in de wereld verenigt met een goede God (vrije wil, zielvorming, mysterie Gods), kan symmetrisch worden gebruikt om het goede in de wereld te verenigen met een boze God. Als beide werken, bewijst geen enkel de goedheid of boosheid van God — theodiceeën zijn inhoudsloos als bewijsstukken.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Law's argument toont dat theïsten hun eigen standaard inconsistent toepassen. Ze accepteren theodiceeën voor een goede God terwijl ze dezelfde logica zouden verwerpen voor een boze God. Dit toont dat theologische aannames al verborgen zijn in de redenering." },
      { domain: "daily", icon: "🏠", text: "Bevestigingsbias in religie: gelovigen interpreteren zowel goed als kwaad als bewijs voor hun geloof ('God test ons', 'God zegent ons'). Law's uitdaging: als alles bewijs is, is niets bewijs — een theorie die niet falsifieerbaar is, heeft geen informatieve inhoud." },
      { domain: "science", icon: "🔬", text: "Law's gedachte-experiment is een versie van de falsificeerbaarheideis. Als theïsme alle bewijs kan verklaren via theodicee, dan is het niet falsifieerbaar. Popper: een theorie die alles kan verklaren, voorspelt niets en heeft dus geen wetenschappelijke status." }
    ],
    prerequisites: ["kwaadsproblem", "ontologisch-argument"],
    unlocks: [],
    relatedPrinciples: ["kwaadsproblem", "falsificeerbaarheid-popper", "ontologisch-argument"],
    exercises: [{
      type: "multiple-choice",
      question: "Law's boze God uitdaging toont aan dat theodiceeën:",
      options: ["Bewijzen dat God goed is", "Symmetrisch werken voor zowel een goede als een boze God, dus inhoudsloos zijn als bewijzen", "Het kwaadsprobleem oplossen", "God's bestaan bewijzen"],
      correct: 1,
      feedback: "Juist! Als dezelfde argumenten die het kwaad verzoenen met een goede God, ook het goede kunnen verzoenen met een boze God, dan bewijzen ze niets over Gods morele karakter. De theodiceeën zijn logisch vacuüm — ze passen bij elk moreel profiel van God."
    }],
    creativePrompt: "Bedenk een theodicee voor de boze God: een verklaring waarom er schoonheid, vriendschap en vreugde bestaat in een wereld bestuur door een kwaadaardige godheid. Hoe overtuigend is het?",
    aiHelperPrompts: [
      "Is de boze God uitdaging een goede weerlegging van theodiceeën?",
      "Hoe reageert een theïst op de symmetrie van Law's argument?",
      "Wat zegt dit experiment over de falsificeerbaarheid van religieuze claims?"
    ]
  }
];
