// Nieuwe principes – batches 1-9 (90 principes)

export const principlesNew = [
// ── BATCH 1: COGNITIEVE BIASES (1) ───────────────────────────
  {
    id: "actor-observer-bias",
    title: "Acteur-Observator-Bias",
    difficulty: 2,
    emoji: "🎭",
    academicCategory: "Psychologie",
    skillCategory: "Beter Redeneren",
    tags: ["Psychologie", "Cognitieve Bias", "Attributie", "Beter Redeneren"],
    definition: "We verklaren ons eigen gedrag door externe omstandigheden, maar het gedrag van anderen door hun persoonlijkheid of karakter. Als acteur zie je de situatie; als observator zie je de persoon.",
    abstractExample: "Wanneer jij te laat bent, lag dat aan het verkeer. Wanneer een ander te laat is, is die persoon onbetrouwbaar of lui. Dezelfde handeling krijgt een andere verklaring afhankelijk van wie die uitvoert.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Je fout in een discussie kwam door stress; de fout van je partner komt door onzorgvuldigheid." },
      { domain: "business", icon: "💼", text: "Je eigen mislukte project had onvoorziene obstakels; het mislukte project van een collega was slechte planning." },
      { domain: "science", icon: "🔬", text: "Sociaal-psychologisch onderzoek toont dat mensen consequent meer situationele verklaringen geven voor eigen gedrag dan voor andermans gedrag." }
    ],
    prerequisites: ["fundamental-attribution-error"],
    unlocks: ["self-serving-bias"],
    exercises: [
      { type: "multipleChoice", question: "Je collega maakt een fout. Wat doet de acteur-observator-bias waarschijnlijk?", options: ["Je schrijft het toe aan zijn persoonlijkheid", "Je schrijft het toe aan de situatie", "Je zoekt de fout bij jezelf", "Je negeert de fout"], correctIndex: 0, explanation: "Als observator schrijven we andermans fouten toe aan hun karakter, niet aan de situatie." }
    ],
    creativePrompt: "Beschrijf een situatie waarbij jij 'het slechtoffer was van omstandigheden'. Schrijf daarna dezelfde situatie opnieuw alsof jij de observator bent die jouw eigen gedrag beoordeelt.",
    aiHelperPrompts: ["Hoe kan ik mezelf eraan herinneren dat anderen ook in situaties zitten die hun gedrag beïnvloeden?", "Geef een voorbeeld van acteur-observator-bias op de werkvloer.", "Hoe hangt deze bias samen met empathie?"]
  },
  {
    id: "barnum-effect",
    title: "Barnum-Effect",
    difficulty: 1,
    emoji: "🔮",
    academicCategory: "Psychologie",
    skillCategory: "Kritisch Denken",
    tags: ["Psychologie", "Cognitieve Bias", "Kritisch Denken", "Zelfkennis"],
    definition: "De neiging om vage, algemene persoonlijkheidsbeschrijvingen als heel specifiek en accuraat voor jezelf te accepteren. Mensen herkennen zich in uitspraken die eigenlijk voor bijna iedereen gelden.",
    abstractExample: "De zin 'Je hebt soms twijfels over jezelf, maar diep van binnen weet je wat je waard bent' lijkt heel persoonlijk, maar geldt voor nagenoeg iedereen. Toch voelt het als een scherpe karakterschets.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Horoscopen beschrijven je als 'creatief maar ook praktisch' — een combinatie die voor de meeste mensen klopt." },
      { domain: "business", icon: "💼", text: "Vage leiderschapsprofielen ('U bent ambitieus maar ook bezorgd om anderen') worden als perfect passend ervaren door vrijwel alle managers." },
      { domain: "science", icon: "🔬", text: "Psycholoog Bertram Forer gaf studenten identieke profielen; ze beoordeelden die als 'uiterst nauwkeurig' voor henzelf." }
    ],
    prerequisites: ["confirmation-bias"],
    unlocks: ["illusory-superiority"],
    exercises: [
      { type: "multipleChoice", question: "Waarom voelen horoscopen zo persoonlijk aan?", options: ["Ze zijn gebaseerd op gedetailleerde data", "Ze gebruiken vage taal die voor iedereen geldt", "Ze zijn wetenschappelijk gevalideerd", "Ze lezen gedachten"], correctIndex: 1, explanation: "Barnum-effect werkt precies omdat de beschrijvingen breed genoeg zijn om voor bijna iedereen te gelden." }
    ],
    creativePrompt: "Schrijf een 'persoonlijk' psychologisch profiel van twee alinea's dat eigenlijk voor iedereen geldt. Test het op iemand en vraag hoe nauwkeurig ze het vinden.",
    aiHelperPrompts: ["Hoe kan ik herkennen wanneer een beschrijving te vaag is om zinvol te zijn?", "Welke andere contexten buiten horoscopen maken gebruik van het Barnum-effect?", "Hoe bescherm ik mezelf tegen het Barnum-effect bij persoonlijkheidstests?"]
  },
  {
    id: "frequency-illusion",
    title: "Frequentie-Illusie",
    difficulty: 1,
    emoji: "👁️",
    academicCategory: "Psychologie",
    skillCategory: "Beter Redeneren",
    tags: ["Psychologie", "Cognitieve Bias", "Aandacht", "Beter Redeneren"],
    definition: "Zodra je iets nieuws leert of een nieuw concept tegenkomt, lijkt het alsof je het plotseling overal ziet. De frequentie is niet echt gestegen — je aandacht is erop gericht.",
    abstractExample: "Na het kopen van een rode auto zie je overal rode auto's. Het aantal rode auto's is niet veranderd; jouw selectieve aandacht en geheugen zijn veranderd.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Je leert een nieuw woord en hoort het de volgende week drie keer. Het woord bestond al eerder, maar viel je niet op." },
      { domain: "business", icon: "💼", text: "Na een training over agressieve verkooptactieken herken je ze plotseling in elke vergadering." },
      { domain: "science", icon: "🔬", text: "Cognitief psychologen noemen dit ook het Baader-Meinhof-fenomeen: selectieve aandacht gecombineerd met bevestigingsneiging." }
    ],
    prerequisites: ["availability-heuristic"],
    unlocks: ["attentional-bias"],
    exercises: [
      { type: "multipleChoice", question: "Wat veroorzaakt de frequentie-illusie?", options: ["Een echte toename van het fenomeen", "Selectieve aandacht en geheugen", "Toeval", "Telepathie"], correctIndex: 1, explanation: "Je brein filtert informatie en zodra iets relevant is geworden, valt het vaker op — maar de werkelijke frequentie is gelijk gebleven." }
    ],
    creativePrompt: "Kies vandaag een kleur of een specifiek object. Tel hoe vaak je het ziet. Reflecteer daarna: zag je het vroeger ook, maar merkte je het niet?",
    aiHelperPrompts: ["Hoe kan ik dit gebruiken om goede gewoontes te versterken?", "Is de frequentie-illusie altijd een bias, of is het soms nuttig?", "Hoe hangt dit samen met priming in de psychologie?"]
  },
  {
    id: "denomination-effect",
    title: "Denominatie-Effect",
    difficulty: 1,
    emoji: "💶",
    academicCategory: "Gedragseconomie",
    skillCategory: "Betere Beslissingen",
    tags: ["Gedragseconomie", "Cognitieve Bias", "Geld", "Betere Beslissingen"],
    definition: "Mensen geven minder snel grote biljetten uit dan kleine biljetten of muntgeld, ook al is de totale waarde gelijk. Een briefje van €50 voelt 'te kostbaar' om te breken.",
    abstractExample: "Je hebt €50 in één biljet en €50 in vijfjes. Je geeft het kleine geld eerder uit voor impulsaankopen. De geldhoeveelheid is identiek, maar de psychologische drempel verschilt.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Je koopt eerder een snack als je wisselgeld op zak hebt dan wanneer je alleen een briefje van €50 hebt." },
      { domain: "business", icon: "💼", text: "Casino's gebruiken chips juist om het 'echte geld'-gevoel te verminderen en uitgaven te verhogen." },
      { domain: "science", icon: "🔬", text: "Onderzoek van Priya Raghubir en Joydeep Srivastava toonde aan dat mensen met grotere coupures consistent minder uitgeven." }
    ],
    prerequisites: ["mental-accounting"],
    unlocks: ["loss-aversion"],
    exercises: [
      { type: "multipleChoice", question: "Waarom geven mensen grote biljetten minder snel uit?", options: ["Ze zijn banger voor diefstal", "Het 'breken' van groot geld voelt als een groter verlies", "Groot geld is zeldzamer", "Ze vergeten het geld te gebruiken"], correctIndex: 1, explanation: "Het denominatie-effect is een vorm van mentale boekhouding waarbij de vorm van geld de uitgavenbereidheid beïnvloedt." }
    ],
    creativePrompt: "Houd een week bij hoe je betalingen doet (contant, pin, app). Merk je verschil in hoeveel je uitgeeft per betaalvorm? Wat zegt dit over jouw geldpsychologie?",
    aiHelperPrompts: ["Hoe gebruik ik het denominatie-effect om meer te sparen?", "Waarom werken digitale betalingen anders dan contant geld psychologisch gezien?", "Hoe gebruiken marketeers dit effect bij prijsstelling?"]
  },
  {
    id: "illusory-truth-effect",
    title: "Illusoire-Waarheidseffect",
    difficulty: 2,
    emoji: "🔁",
    academicCategory: "Psychologie",
    skillCategory: "Kritisch Denken",
    tags: ["Psychologie", "Cognitieve Bias", "Waarheid", "Kritisch Denken", "Media"],
    definition: "Herhaalde blootstelling aan een bewering vergroot de kans dat je die bewering als waar beschouwt, ook als je weet dat ze onwaar is. Herhaling creëert een gevoel van vertrouwdheid dat als waarheid wordt ervaren.",
    abstractExample: "Als een politieke slogan honderd keer herhaald wordt, beginnen mensen hem als vanzelfsprekend te accepteren — zelfs critici twijfelen uiteindelijk. Herhaling vervangt evaluatie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Reclameslogans worden door herhaling geloofwaardig: 'Rood Kruis, altijd betrouwbaar' klinkt na jaren als een feit." },
      { domain: "business", icon: "💼", text: "Fake news verspreidt zich sneller dan correcties omdat herhaalde leugens geloofwaardiger aanvoelen dan eenmalige waarheden." },
      { domain: "science", icon: "🔬", text: "Hasher et al. (1977) toonden als eersten aan dat herhaling de subjectieve waarheidswaarde verhoogt, onafhankelijk van feitelijke juistheid." }
    ],
    prerequisites: ["confirmation-bias"],
    unlocks: ["narrative-fallacy"],
    exercises: [
      { type: "multipleChoice", question: "Waarom wordt een bewering geloofwaardiger door herhaling?", options: ["Herhaling geeft meer bewijzen", "Vertrouwdheid wordt als waarheid ervaren", "Mensen worden het eens", "Herhaling verhoogt de logica van een stelling"], correctIndex: 1, explanation: "Het gevoel 'dit heb ik vaker gehoord' wordt onbewust verward met 'dit klopt'." }
    ],
    creativePrompt: "Zoek drie overtuigingen die je altijd als vanzelfsprekend hebt beschouwd. Vraag jezelf: heb je ooit bewijs gezien, of heb je het gewoon heel vaak gehoord?",
    aiHelperPrompts: ["Hoe bescherm ik mezelf tegen het illusoire-waarheidseffect in nieuwsconsumptie?", "Hoe kan een leraar dit effect gebruiken om leerstof te laten beklijven?", "Wat is het verschil tussen herhaling als leren en herhaling als manipulatie?"]
  },
  {
    id: "hot-hand-fallacy",
    title: "Hete-Hand-Drogreden",
    difficulty: 2,
    emoji: "🏀",
    academicCategory: "Statistiek",
    skillCategory: "Beter Redeneren",
    tags: ["Statistiek", "Cognitieve Bias", "Kansrekening", "Beter Redeneren"],
    definition: "De overtuiging dat iemand die een reeks successen heeft behaald, meer kans heeft op het volgende succes. In werkelijkheid zijn veel opeenvolgende uitkomsten statistisch onafhankelijk.",
    abstractExample: "Een basketbalspeler maakt vijf schoten op rij. Toeschouwers denken hij 'heet' is en meer kans heeft op het zesde schot. Maar elke worp heeft zijn eigen kanspercentage.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Na drie goede handelsdag op rij denkt een belegger op een winning streak te zitten en neemt hij meer risico." },
      { domain: "business", icon: "💼", text: "Een verkoper die drie deals sloot geeft de volgende prospect minder aandacht — hij verwacht de vierde deal ook te sluiten." },
      { domain: "science", icon: "🔬", text: "Gilovich, Vallone & Tversky (1985) vonden geen statistisch bewijs voor de hete hand in basketbal, maar de overtuiging bleef bestaan." }
    ],
    prerequisites: ["gambler-fallacy", "law-of-large-numbers"],
    unlocks: ["clustering-illusion"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het verschil tussen de hete-hand-drogreden en de gokkersdrogreden?", options: ["Ze zijn identiek", "Hete hand verwacht meer van hetzelfde; gokkersdrogreden verwacht verandering", "Hete hand gaat over sport, gokkersdrogreden over gokken", "Er is geen verband"], correctIndex: 1, explanation: "Beide zijn onjuiste patronen in kansperceptie, maar hete hand zegt 'de serie gaat door' en gokkersdrogreden zegt 'de serie keert om'." }
    ],
    creativePrompt: "Denk aan een domein waar jij gelooft in 'momentum' (sport, werk, geluk). Analyseer: is dat momentum statistisch aantoonbaar of is het een patroon dat jij erin ziet?",
    aiHelperPrompts: ["Wanneer is momentum in prestaties wél reëel en wanneer is het illusoir?", "Hoe beïnvloedt de hete-hand-drogreden sportcoaching?", "Hoe hangt dit samen met clustering-illusie?"]
  },
  {
    id: "clustering-illusion",
    title: "Clusteringsillusie",
    difficulty: 2,
    emoji: "🎲",
    academicCategory: "Statistiek",
    skillCategory: "Beter Redeneren",
    tags: ["Statistiek", "Cognitieve Bias", "Patroonherkenning", "Beter Redeneren"],
    definition: "De neiging om betekenisvolle patronen te zien in willekeurige reeksen. Ons brein is zo goed in patroonherkenning dat het patronen 'vindt' ook waar ze niet bestaan.",
    abstractExample: "Gooi een munt twintig keer. Je krijgt waarschijnlijk clusters van meerdere 'koppen' op rij of meerdere 'munten' op rij. Dit ziet er niet-willekeurig uit, maar is precies wat verwacht mag worden bij toeval.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Mensen zien 'gezichten' in wolken, toast of boomschors — ons brein zoekt patronen die er niet zijn." },
      { domain: "business", icon: "💼", text: "Een manager ziet drie slechte kwartalen als 'een trend' terwijl het normale variatie in bedrijfsresultaten kan zijn." },
      { domain: "science", icon: "🔬", text: "In epidemiologie worden kankercluster-onderzoeken vaak gestart op basis van toevallige geografische clustering van gevallen." }
    ],
    prerequisites: ["gambler-fallacy"],
    unlocks: ["hot-hand-fallacy", "narrative-fallacy"],
    exercises: [
      { type: "multipleChoice", question: "Waarom verwachten mensen dat willekeurige reeksen er 'meer wisselend' uitzien?", options: ["Ze kennen statistiek niet", "Ze denken dat willekeur betekent: regelmatig afwisselen", "Ze geloven in pech en geluk", "Ze begrijpen kans verkeerd door ervaring"], correctIndex: 1, explanation: "Mensen verwarren willekeur met gelijkmatige verdeling. Echte willekeur produceert clusters." }
    ],
    creativePrompt: "Genereer een reeks van 20 muntwerpuitkomsten door echt een munt te gooien en schrijf deze op. Genereer daarna een 'nep-willekeurige' reeks die willekeurig aanvoelt. Vergelijk ze.",
    aiHelperPrompts: ["Hoe kan ik mezelf trainen om echte patronen te onderscheiden van willekeurige clusters?", "In welke wetenschappelijke vakgebieden is de clusteringsillusie het gevaarlijkst?", "Hoe hangt dit samen met de narratieve drogreden?"]
  },
  {
    id: "restraint-bias",
    title: "Terughoudendheidsvertekening",
    difficulty: 2,
    emoji: "🍰",
    academicCategory: "Psychologie",
    skillCategory: "Betere Beslissingen",
    tags: ["Psychologie", "Cognitieve Bias", "Zelfcontrole", "Betere Beslissingen"],
    definition: "We overschatten onze vermogen om verleidingen te weerstaan als we ze nog niet ondervinden. In koud-toestand denken we dat we sterker zijn dan we zijn in warm-toestand.",
    abstractExample: "Iemand op dieet zegt: 'Als er cake is op het feest, neem ik gewoon een klein stukje — ik heb voldoende zelfcontrole.' Maar op het feest, met de geur van cake, valt de zelfcontrole weg.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Je denkt dat je je telefoon makkelijk kunt negeren tijdens studeren. Maar zodra je ermee in de buurt bent, check je hem toch." },
      { domain: "business", icon: "💼", text: "Onderhandelaars denken dat ze rustig kunnen blijven onder druk — maar in hitte van onderhandeling reageren ze emotioneel." },
      { domain: "science", icon: "🔬", text: "Nordgren et al. (2009) toonden aan dat mensen die zich sterk in zelfcontrole voelden, eerder aan verleidingen bezweken door blootstelling te onderschatten." }
    ],
    prerequisites: ["hot-cold-empathy-gap"],
    unlocks: ["self-efficacy"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de beste strategie als je weet dat je terughoudendheidsvertekening hebt?", options: ["Meer vertrouwen in jezelf kweken", "Verleidingen vermijden in plaats van ertegen vechten", "Harder oefenen op zelfcontrole", "Negatieve gevolgen negeren"], correctIndex: 1, explanation: "Als je weet dat je zelfcontrole overschat, is de beste strategie situaties vermijden die zelfcontrole vereisen." }
    ],
    creativePrompt: "Beschrijf een situatie waar je jezelf hebt beloofd dat je je goed zou gedragen, maar dit niet lukte. Wat had je anders kunnen doen in de planning?",
    aiHelperPrompts: ["Hoe kan ik rekening houden met mijn terughoudendheidsvertekening bij het plannen van gezond gedrag?", "Wat is het verschil tussen zelfcontrole en situatieontwerp?", "Hoe hangt dit samen met implementatieplannen?"]
  },
  {
    id: "declinism",
    title: "Achteruitgangsdenken",
    difficulty: 1,
    emoji: "📉",
    academicCategory: "Psychologie",
    skillCategory: "Beter Redeneren",
    tags: ["Psychologie", "Cognitieve Bias", "Nostalgie", "Beter Redeneren"],
    definition: "De neiging om te geloven dat de wereld of een situatie vroeger beter was en nu achteruitgaat, terwijl objectieve data dit niet altijd ondersteunen. Het verleden wordt geïdealiseerd en het heden overdreven negatief beoordeeld.",
    abstractExample: "Elke generatie klaagt dat 'de jeugd van tegenwoordig' slechter is dan vroeger, en dat de samenleving verloedert. Historici vinden dezelfde klachten in teksten van 2000 jaar oud.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Ouders denken dat muziek, films en omgangsvormen vroeger beter waren — ook al was er altijd schandaal en 'verval'." },
      { domain: "business", icon: "💼", text: "Langdurige werknemers zeggen dat de bedrijfscultuur vroeger beter was, ook als productiviteit en winst gestegen zijn." },
      { domain: "science", icon: "🔬", text: "Pinker toont in 'Enlightenment Now' met data aan dat geweld, armoede en kindersterfte historisch gezien sterk zijn gedaald ondanks algemeen pessimisme." }
    ],
    prerequisites: ["availability-heuristic"],
    unlocks: ["rosy-retrospection"],
    exercises: [
      { type: "multipleChoice", question: "Welk cognitief mechanisme versterkt achteruitgangsdenken?", options: ["Perfecte herinnering van het verleden", "Rooskleurige terugblik die het verleden idealiseer", "Logische analyse van feiten", "Beschikbaarheidsheuristiek voor positieve herinneringen"], correctIndex: 1, explanation: "Rooskleurige terugblik maakt dat we slechte herinneringen dimmen en goede versterken, waardoor het verleden beter lijkt dan het was." }
    ],
    creativePrompt: "Noem drie dingen die vroeger 'beter' waren. Zoek voor elk punt data of concrete feiten die je bewering ondersteunen of weerleggen.",
    aiHelperPrompts: ["Hoe kan ik onderscheid maken tussen terechte zorgen over achteruitgang en achteruitgangsdenken?", "Welke rol speelt media bij het versterken van achteruitgangsdenken?", "Hoe kan nostalgie zowel nuttig als schadelijk zijn?"]
  },
  {
    id: "rosy-retrospection",
    title: "Rooskleurige Terugblik",
    difficulty: 1,
    emoji: "🌹",
    academicCategory: "Psychologie",
    skillCategory: "Beter Redeneren",
    tags: ["Psychologie", "Cognitieve Bias", "Geheugen", "Beter Redeneren"],
    definition: "De neiging om het verleden positiever te beoordelen dan het in werkelijkheid was. Negatieve ervaringen worden afgevlakt in het geheugen terwijl positieve worden uitvergroot.",
    abstractExample: "Een vakantie die deels regenachtig en vermoeiend was, herinnert je later als bijna perfect. De slechte momenten verbleken; de goede blijven glinsteren.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Schooljaren worden later herinnerd als de beste jaren van je leven, ook al waren er ook pestproblemen en stress." },
      { domain: "business", icon: "💼", text: "Voormalige medewerkers herinneren hun oude baan als veel beter dan de nieuwe, ook als ze destijds ontevreden vertrokken." },
      { domain: "science", icon: "🔬", text: "Mitchell et al. (1997) toonden aan dat mensen reizen beter evalueerden na afloop dan vooraf verwacht, door rooskleurige terugblik." }
    ],
    prerequisites: ["peak-end-rule"],
    unlocks: ["declinism"],
    exercises: [
      { type: "multipleChoice", question: "Hoe beïnvloedt rooskleurige terugblik beslissingen over de toekomst?", options: ["Het maakt ons voorzichtiger", "Het laat ons dezelfde fouten herhalen doordat we problemen vergeten", "Het verbetert ons plannen", "Het heeft geen invloed op beslissingen"], correctIndex: 1, explanation: "Als we het negatieve vergeten, plannen we opnieuw dezelfde situaties in zonder de lessen mee te nemen." }
    ],
    creativePrompt: "Denk aan een ervaring die je nu positief herinnert. Schrijf op wat er echt gebeurde, inclusief de moeilijke momenten. Hoe verschilt dit van je huidige herinnering?",
    aiHelperPrompts: ["Is rooskleurige terugblik altijd slecht of heeft het ook voordelen voor geluk?", "Hoe kan ik nauwkeuriger herinneringen bijhouden om te leren van ervaringen?", "Hoe hangt dit samen met het piek-eindeffect?"]
  },

  // ── BATCH 2: COGNITIEVE BIASES (2) ───────────────────────────
  {
    id: "attentional-bias",
    title: "Aandachtsvertekening",
    difficulty: 1,
    emoji: "🔍",
    academicCategory: "Psychologie",
    skillCategory: "Beter Redeneren",
    tags: ["Psychologie", "Cognitieve Bias", "Aandacht", "Beter Redeneren"],
    definition: "Onze aandacht wordt automatisch getrokken naar informatie die emotioneel relevant is voor ons, waardoor we een vertekend beeld krijgen van hoe vaak of hoe significant iets is.",
    abstractExample: "Iemand met een fobie voor spinnen ziet spinnen in een kamer eerder dan andere mensen. Iemand die op dieet is, ziet voedsel eerder in zijn omgeving. Aandacht is niet neutraal.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Als je ziek bent, valt je op hoeveel mensen hoesten en niezen in het openbaar vervoer — voorheen merkte je dit nauwelijks." },
      { domain: "business", icon: "💼", text: "Een manager die bang is voor slechte resultaten let meer op negatieve signalen van medewerkers dan op positieve." },
      { domain: "science", icon: "🔬", text: "In klinische psychologie is aandachtsvertekening een kernsymptoom van angststoornissen en wordt het behandeld met aandachtstraining." }
    ],
    prerequisites: ["frequency-illusion"],
    unlocks: ["confirmation-bias"],
    exercises: [
      { type: "multipleChoice", question: "Hoe beïnvloedt aandachtsvertekening risicobeoordelingen?", options: ["Het maakt ze accurater", "Het vergroot de aandacht voor risico's die emotioneel relevant zijn", "Het neutraliseert angst", "Het heeft geen invloed"], correctIndex: 1, explanation: "Emotioneel geladen risico's — voor jou persoonlijk — krijgen meer aandacht dan objectief even grote risico's." }
    ],
    creativePrompt: "Kies een onderwerp waar je nu emotioneel bij betrokken bent. Let een dag lang op hoe vaak je informatie over dit onderwerp opmerkt. Is het objectief vaker aanwezig of is het je aandacht?",
    aiHelperPrompts: ["Hoe kan ik mijn aandachtsvertekening verminderen bij belangrijke beslissingen?", "Hoe wordt aandachtstraining gebruikt in therapie?", "Wat is het verband tussen aandachtsvertekening en stress?"]
  },
  {
    id: "reactance",
    title: "Psychologische Reactantie",
    difficulty: 2,
    emoji: "🚫",
    academicCategory: "Psychologie",
    skillCategory: "Betere Beslissingen",
    tags: ["Psychologie", "Cognitieve Bias", "Vrijheid", "Betere Beslissingen", "Gedrag"],
    definition: "Wanneer mensen het gevoel hebben dat hun vrijheid wordt beperkt, reageren ze met een sterk verlangen om juist dat te doen wat verboden of beperkt wordt. Verbod wekt begeerte.",
    abstractExample: "Zeg tegen een kind dat het niet aan een rode knop mag komen, en het enige wat het wil is die knop indrukken. De beperking verhoogt de aantrekkingskracht.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Ouders die een bepaald muziekgenre verbieden, maken het daarmee aantrekkelijker voor hun tieners." },
      { domain: "business", icon: "💼", text: "'Nog maar 3 op voorraad!' verhoogt de koopbereidheid door een gevoel van schaarste en dreigende beperking." },
      { domain: "science", icon: "🔬", text: "Brehm (1966) beschreef reactantie als een motivationele staat die wordt geactiveerd wanneer gedragskeuzevrijheid bedreigd wordt." }
    ],
    prerequisites: ["scarcity-effect"],
    unlocks: ["reverse-psychology"],
    exercises: [
      { type: "multipleChoice", question: "Hoe kan een manager gebruik maken van kennis over reactantie?", options: ["Meer verboden instellen", "Autonomie en keuzevrijheid geven in plaats van opdrachten", "Strikte regels instellen", "Mensen negeren"], correctIndex: 1, explanation: "Wanneer mensen keuzevrijheid hebben, ervaren ze minder reactantie en zijn ze gemotiveerder." }
    ],
    creativePrompt: "Schrijf over een situatie waarin je iets wilde juist doordat het niet mocht of moeilijk verkrijgbaar was. Wat vertelt dit over de psychologie van verbod?",
    aiHelperPrompts: ["Hoe gebruik ik kennis over reactantie bij opvoeden of leidinggeven?", "Wanneer is reactantie een beschermend mechanisme voor autonomie?", "Hoe hangt dit samen met schaarste-effect in marketing?"]
  },
  {
    id: "effort-justification",
    title: "Inspanningsrechtvaardiging",
    difficulty: 2,
    emoji: "💪",
    academicCategory: "Psychologie",
    skillCategory: "Betere Beslissingen",
    tags: ["Psychologie", "Cognitieve Bias", "Investering", "Betere Beslissingen"],
    definition: "We waarderen uitkomsten hoger naarmate we meer moeite hebben gedaan om ze te bereiken, zelfs als de kwaliteit objectief niet verschilt. Inspanning rechtvaardigt achteraf de waarde.",
    abstractExample: "Studenten die een moeilijk initiatieraproces doorliepen voor een studentenvereniging vonden de groep waardevoller dan studenten die gemakkelijk werden toegelaten — ook bij dezelfde objectieve groepskwaliteit.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een zelf gemonteerde kast van IKEA voelt waardevoller dan een identieke kant-en-klare kast (het IKEA-effect is hieraan verwant)." },
      { domain: "business", icon: "💼", text: "Initiatieprogramma's voor nieuwe medewerkers creëren binding: hoe zwaarder het programma, hoe loyaler de medewerkers." },
      { domain: "science", icon: "🔬", text: "Aronson & Mills (1959) toonden aan dat zware initiatie leidt tot hogere waardering van de groep, zelfs als die groep tegenvalt." }
    ],
    prerequisites: ["sunk-cost-fallacy", "cognitive-dissonance"],
    unlocks: ["ikea-effect"],
    exercises: [
      { type: "multipleChoice", question: "Waarom leidt harde training tot meer binding met een team?", options: ["Training verbetert objectief de kwaliteit", "Gedeelde inspanning creëert een gevoel van gerechtvaardigde investering", "Teams worden beter door training", "Er is geen verband"], correctIndex: 1, explanation: "Inspanningsrechtvaardiging maakt dat gedeelde zwakte of moeilijkheid de waarde van de beloning vergroot." }
    ],
    creativePrompt: "Denk aan iets wat je heel moeilijk hebt bereikt. Hoe waardevol vind je het? Vraag jezelf eerlijk: zou je het even waardevol vinden als je er nauwelijks moeite voor had gedaan?",
    aiHelperPrompts: ["Hoe kan ik onderscheid maken tussen echte kwaliteit en inspanningsrechtvaardiging?", "Hoe gebruiken organisaties dit effect bij onboarding?", "Hoe hangt dit samen met cognitieve dissonantie?"]
  },
  {
    id: "projection-bias",
    title: "Projectievertekening",
    difficulty: 2,
    emoji: "🔭",
    academicCategory: "Psychologie",
    skillCategory: "Betere Beslissingen",
    tags: ["Psychologie", "Cognitieve Bias", "Toekomst", "Betere Beslissingen"],
    definition: "We overschatten in hoeverre onze huidige voorkeuren, gevoelens en staat ook onze toekomstige staat zullen bepalen. We projecteren ons huidige zelf op de toekomst.",
    abstractExample: "Honger boodschappen doen leidt tot het kopen van te veel eten, omdat je verwacht ook later even hongerig te zijn. In werkelijkheid veranderen onze behoeften voortdurend.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Als je je nu slecht voelt, kun je je moeilijk voorstellen ooit gelukkig te zijn — en omgekeerd." },
      { domain: "business", icon: "💼", text: "Mensen onderschrijven abonnementen terwijl ze denken ze even intensief te gebruiken als nu — maar gebruik daalt na verloop van tijd." },
      { domain: "science", icon: "🔬", text: "Loewenstein, O'Donoghue & Rabin (2003) formaliseerden projectievertekening als een economitheorie van irrationeel toekomstgedrag." }
    ],
    prerequisites: ["hot-cold-empathy-gap"],
    unlocks: ["hyperbolic-discounting"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de gevolg van projectievertekening bij langetermijnbeslissingen?", options: ["Betere plannen door consistentie", "Beslissingen die passen bij de huidige staat maar niet bij de toekomstige", "Meer realistische verwachtingen", "Grotere gevoeligheid voor risico"], correctIndex: 1, explanation: "Omdat we de toekomst inkleuren met onze huidige emoties en behoeften, maken we beslissingen die daar niet bij passen." }
    ],
    creativePrompt: "Denk aan een grote aankoop of beslissing die je hebt genomen op een moment van sterke emotie. Wat dacht je dat je in de toekomst zou willen? Wat bleek er te kloppen van die verwachting?",
    aiHelperPrompts: ["Hoe kan ik projectievertekening verminderen bij toekomstplanning?", "Waarom kopen mensen meer bij boodschappen als ze hongerig zijn?", "Hoe hangt dit samen met affectieve prognosefouten?"]
  },
  {
    id: "social-desirability-bias",
    title: "Sociale Wenselijkheidsvertekening",
    difficulty: 1,
    emoji: "😇",
    academicCategory: "Psychologie",
    skillCategory: "Kritisch Denken",
    tags: ["Psychologie", "Cognitieve Bias", "Sociaal", "Kritisch Denken", "Onderzoek"],
    definition: "De neiging om te antwoorden of te gedragen op een manier die sociaal acceptabel of positief gewaardeerd wordt, in plaats van eerlijk over de eigen meningen, gevoelens of gedrag te zijn.",
    abstractExample: "Gevraagd hoeveel alcohol iemand drinkt, geeft men in een enquête minder op dan werkelijk. Bij vragen over milieubewust gedrag zegt men meer te recyclen dan men echt doet.",
    examples: [
      { domain: "daily", icon: "🏠", text: "In gesprekken zeg je vaker dat je sport en gezond eet dan je werkelijk doet, om een goede indruk te wekken." },
      { domain: "business", icon: "💼", text: "Medewerkers geven in tevredenheidsonderzoeken positiever antwoord als hun namen bekend zijn bij de werkgever." },
      { domain: "science", icon: "🔬", text: "Enquêteonderzoekers corrigeren voor sociale wenselijkheid met anonimiteit, indirecte vragen en impliciete metingen." }
    ],
    prerequisites: ["self-serving-bias"],
    unlocks: ["selection-bias"],
    exercises: [
      { type: "multipleChoice", question: "Waarom zijn anonieme enquêtes betrouwbaarder dan enquêtes met naam?", options: ["Anonieme mensen liegen meer", "Zonder identificatie is er minder druk om sociaal wenselijk te antwoorden", "Anonimiteit maakt mensen onbetrouwbaarder", "Er is geen verschil"], correctIndex: 1, explanation: "Sociale wenselijkheidsvertekening neemt af wanneer er geen sociale consequenties zijn aan eerlijk antwoorden." }
    ],
    creativePrompt: "Schrijf eerlijk op hoe je werkelijk leeft op een dag (voeding, sport, schermtijd, etc.). Vergelijk dit met hoe je het zou beschrijven in een gesprek met iemand die je bewondert.",
    aiHelperPrompts: ["Hoe ontwerp ik een enquête die sociale wenselijkheidsvertekening vermindert?", "Hoe beïnvloedt sociale wenselijkheid de uitkomsten van klinische onderzoeken?", "Wat is het verband met zelfpresentatie in sociale media?"]
  },
  {
    id: "optimism-bias",
    title: "Optimismevertekening",
    difficulty: 1,
    emoji: "🌞",
    academicCategory: "Psychologie",
    skillCategory: "Betere Beslissingen",
    tags: ["Psychologie", "Cognitieve Bias", "Risico", "Betere Beslissingen", "Plannen"],
    definition: "De neiging om te geloven dat goede dingen eerder ons zullen overkomen en slechte dingen minder snel dan gemiddeld. We overschatten onze kansen op succes en onderschatten risico's.",
    abstractExample: "De meeste mensen denken dat hun huwelijk niet zal eindigen in scheiding, dat ze niet ziek worden van roken, en dat hun bedrijf zal slagen — ook al wijzen statistieken op andere uitkomsten.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Negen van de tien nieuwe restaurants falen binnen vijf jaar, maar elke restauranteigenaar denkt tot de uitzonderingen te behoren." },
      { domain: "business", icon: "💼", text: "Projecten eindigen structureel later en duurder dan gepland, deels door de planningsdrogreden die gevoed wordt door optimismevertekening." },
      { domain: "science", icon: "🔬", text: "Sharot (2011) toonde via hersenscans aan dat het brein positieve informatie over de toekomst sterker verwerkt dan negatieve." }
    ],
    prerequisites: ["planning-fallacy", "illusory-superiority"],
    unlocks: ["overconfidence"],
    exercises: [
      { type: "multipleChoice", question: "Wat is een positieve kant van optimismevertekening?", options: ["Het maakt beslissingen altijd beter", "Het geeft motivatie en veerkracht bij tegenslag", "Het elimineert risico's", "Het verbetert statistisch inzicht"], correctIndex: 1, explanation: "Ondanks de risico's zorgt optimismevertekening ook voor doorzettingsvermogen en hogere motivatie bij uitdagingen." }
    ],
    creativePrompt: "Schat de kans dat een specifiek project of doel van jou succesvol wordt. Zoek dan de basispercentages op voor vergelijkbare projecten. Hoe realistisch is jouw schatting?",
    aiHelperPrompts: ["Hoe balanceer ik optimisme met realisme bij plannen?", "Is optimismevertekening universeel of verschilt het per cultuur?", "Hoe kan ik een pre-mortem doen om optimismevertekening te corrigeren?"]
  },
  {
    id: "group-polarization",
    title: "Groepspolarisatie",
    difficulty: 2,
    emoji: "⬆️",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Beter Communiceren",
    tags: ["Sociale Psychologie", "Groepen", "Besluitvorming", "Beter Communiceren"],
    definition: "Na groepsdiscussie worden meningen extremer dan de aanvankelijke individuele standpunten. Gelijkgestemde groepen versterken elkaars overtuigingen en duwen ze naar extremen.",
    abstractExample: "Een groep licht-risicovolle personen besluit na discussie meer risico te nemen. Een groep die al voorzichtig is, wordt na discussie nog voorzichtiger. De groep versterkt de dominante neiging.",
    examples: [
      { domain: "daily", icon: "🏠", text: "In online echokamers worden politieke meningen steeds extremer naarmate mensen meer met gelijkgestemden communiceren." },
      { domain: "business", icon: "💼", text: "Een managementteam dat al positief staat tegenover een risicovolle investering, neemt na overleg nog grotere risico's." },
      { domain: "science", icon: "🔬", text: "Moscovici & Zavalloni (1969) documenteerden als eersten het 'risky shift'-fenomeen dat later werd uitgebreid tot groepspolarisatie." }
    ],
    prerequisites: ["confirmation-bias", "social-proof"],
    unlocks: ["abilene-paradox"],
    exercises: [
      { type: "multipleChoice", question: "Waarom versterkt groepsdiscussie bestaande meningen?", options: ["Mensen worden overtuigd door de meerderheid", "Meer argumenten voor de dominante mening worden gedeeld en herhaald", "Mensen passen hun mening altijd aan in groepen", "Groepen zijn altijd extremistisch"], correctIndex: 1, explanation: "In homogene groepen worden meer argumenten voor de gedeelde mening uitgewisseld, waardoor die mening sterker wordt." }
    ],
    creativePrompt: "Denk aan een groep waar je deel van uitmaakt (familie, werk, vrienden). Zijn er onderwerpen waarbij de groep steeds extremere standpunten heeft gekregen? Hoe is dat gebeurd?",
    aiHelperPrompts: ["Hoe voorkom je groepspolarisatie in vergaderingen?", "Wat is de relatie tussen groepspolarisatie en online radicaliserng?", "Hoe verschilt groepspolarisatie van groepsdenken?"]
  },
  {
    id: "zero-sum-thinking",
    title: "Nulsom-Denken",
    difficulty: 2,
    emoji: "⚖️",
    academicCategory: "Psychologie",
    skillCategory: "Betere Beslissingen",
    tags: ["Psychologie", "Cognitieve Bias", "Samenwerking", "Betere Beslissingen"],
    definition: "De overtuiging dat in elke situatie de winst van één partij gelijk staat aan het verlies van een andere, ook als dat objectief niet het geval is. Nulsom-denken ondermijnt samenwerking.",
    abstractExample: "Als een collega promotie maakt, denk je dat jouw kansen daardoor kleiner worden — zelfs als beide promoties mogelijk waren. Niet elke situatie is een nulsom-spel.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Mensen denken soms dat als anderen gelukkiger of succesvoller zijn, er minder geluk of succes voor henzelf overblijft." },
      { domain: "business", icon: "💼", text: "In onderhandelingen denken partijen dat elke concessie een verlies is voor hen, terwijl win-win-oplossingen mogelijk zijn." },
      { domain: "science", icon: "🔬", text: "Onderzoek toont dat nulsom-denken sterk correleert met competitiviteit, nationalisme en weerstand tegen immigratie." }
    ],
    prerequisites: ["zero-sum-games", "prisoners-dilemma"],
    unlocks: ["nash-equilibrium"],
    exercises: [
      { type: "multipleChoice", question: "Wanneer is nulsom-denken een juiste inschatting?", options: ["Altijd", "Nooit", "Alleen bij echte nulsom-situaties zoals wedstrijden of verdeling van vaste middelen", "Bij alle economische transacties"], correctIndex: 2, explanation: "Bij vaste middelen (een taart verdelen, een wedstrijd) is nulsom correct. Bij handel, innovatie en samenwerking is het dat zelden." }
    ],
    creativePrompt: "Identificeer een situatie in jouw leven waar je nulsom denkt maar het wellicht niet is. Hoe zou de situatie er uitzien als beide partijen kunnen winnen?",
    aiHelperPrompts: ["Hoe kan ik onderhandelen zonder nulsom-denken?", "In welke echte situaties is nulsom-denken correct?", "Hoe hangt nulsom-denken samen met jaloezie?"]
  },
  {
    id: "telescope-effect",
    title: "Telescoop-Effect",
    difficulty: 2,
    emoji: "🔭",
    academicCategory: "Psychologie",
    skillCategory: "Beter Redeneren",
    tags: ["Psychologie", "Cognitieve Bias", "Geheugen", "Tijd", "Beter Redeneren"],
    definition: "Recente gebeurtenissen lijken verder weg dan ze zijn (telescoop omgekeerd), en verre gebeurtenissen lijken dichterbij dan ze zijn (telescoop rechtop). Ons tijdsgevoel is systematisch vertekend.",
    abstractExample: "Een vakantie van twee jaar geleden voelt als 'pas nog', terwijl iets wat vijf jaar geleden was aanvoelt als 'heel lang geleden'. Mensen plaatsen zowel recente als oude gebeurtenissen verkeerd in de tijd.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Iemand schat dat een evenement van drie jaar geleden 'misschien anderhalf jaar geleden' was — forward telescoping." },
      { domain: "business", icon: "💼", text: "Managers onderschatten hoe lang projecten duurden in het verleden, waardoor ze toekomstige planningen onderschatten." },
      { domain: "science", icon: "🔬", text: "Watkins & Peynircioğlu (1990) documenteerden systematische fouten in tijdsschatting bij autobiografisch geheugen." }
    ],
    prerequisites: ["rosy-retrospection"],
    unlocks: ["planning-fallacy"],
    exercises: [
      { type: "multipleChoice", question: "Welk type telescoop-effect leidt tot onderschatting van projectduur?", options: ["Omgekeerd telescopen van recent verleden", "Recht telescopen van recent verleden maakt het dichter voelen", "Forward telescoping waarbij recente projecten dichterbij voelen", "Alle typen hebben hetzelfde effect"], correctIndex: 2, explanation: "Als recente projecten dichterbij voelen dan ze zijn, lijken ze ook sneller verlopen — wat leidt tot onderschatting van benodigde tijd." }
    ],
    creativePrompt: "Denk aan vijf gebeurtenissen uit je leven. Schrijf op wanneer je denkt dat ze waren. Check dan de werkelijke datum. Hoe groot zijn de fouten en in welke richting?",
    aiHelperPrompts: ["Hoe beïnvloedt het telescoop-effect projectplanning?", "Waarom is ons tijdgevoel zo onbetrouwbaar?", "Hoe kan ik betere schattingen maken van tijdsduur?"]
  },
  {
    id: "verbatim-effect",
    title: "Verbatim-Effect",
    difficulty: 2,
    emoji: "📝",
    academicCategory: "Cognitieve Psychologie",
    skillCategory: "Beter Leren",
    tags: ["Cognitieve Psychologie", "Geheugen", "Begrip", "Beter Leren"],
    definition: "We onthouden de betekenis en essentie van informatie beter dan de exacte woorden. Ons geheugen slaat snel de kern op maar verliest de letterlijke formulering. Tegelijkertijd denken we soms dat we woord-voor-woord onthouden terwijl we reconstueren.",
    abstractExample: "Na het lezen van een artikel kun je perfect uitleggen waar het over ging, maar de exacte zinnen kun je niet herhalen. Ons geheugen is meer interpretatief dan fotografisch.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Na een gesprek onthoud je de teneur en het gevoel, maar kun je de exacte woorden van de ander niet herhalen." },
      { domain: "business", icon: "💼", text: "Getuigen in rechtszaken reconstrueren uitspraken die ze 'woordelijk' denken te onthouden, maar in werkelijkheid interpreteren." },
      { domain: "science", icon: "🔬", text: "Brainerd & Reyna's fuzzy-trace theorie onderscheidt 'verbatim traces' van 'gist traces' en toont dat gist langer bewaard blijft." }
    ],
    prerequisites: ["hindsight-bias"],
    unlocks: ["narrative-fallacy"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de praktische implicatie van het verbatim-effect voor getuigenverklaringen?", options: ["Getuigen zijn volledig betrouwbaar", "Getuigen reconstrueren herinneringen en kunnen onbedoeld fout zijn", "Getuigen liegen bewust", "Getuigen onthouden alles fotografisch"], correctIndex: 1, explanation: "Omdat we de gist opslaan en de letterlijke woorden reconstrueren, zijn getuigenverklaringen feilbaar ook zonder kwade wil." }
    ],
    creativePrompt: "Lees een artikel en leg het weg. Schrijf daarna uit je hoofd de kerninformatie op. Vergelijk dit met het origineel. Wat heb je onthouden en wat hebt je vervormd?",
    aiHelperPrompts: ["Hoe kan ik beter leren met kennis van het verbatim-effect?", "Hoe beïnvloedt het verbatim-effect de betrouwbaarheid van getuigenverklaringen?", "Wat is het verschil tussen begrip en memorizatie?"]
  },

  // ── BATCH 3: DROGREDEN & LOGICA ───────────────────────────────
  {
    id: "appeal-to-tradition",
    title: "Beroep op Traditie",
    difficulty: 1,
    emoji: "🏛️",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    tags: ["Logica", "Drogreden", "Redeneren", "Beter Argumenteren"],
    definition: "De drogreden waarbij iets gerechtvaardigd wordt louter omdat het altijd zo gedaan is, of omdat het traditioneel is. Ouderdom is geen bewijs van juistheid.",
    abstractExample: "We hanteren dit beleid al twintig jaar, dus het moet wel goed zijn.' De leeftijd van een gewoonte zegt niets over haar waarde of correctheid.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'We vieren Kerstmis altijd op deze manier in onze familie, dus we kunnen dat niet veranderen.' Traditie als argument mist de vraag of het ook goed is." },
      { domain: "business", icon: "💼", text: "'We gebruiken dit formulier al dertig jaar' is geen reden om niet te digitaliseren als dat efficiënter is." },
      { domain: "science", icon: "🔬", text: "Vóór Semmelweis werden handen wassen bij operaties niet gedaan 'omdat dat altijd zo was'. Miljoenen stierven aan deze traditie." }
    ],
    prerequisites: ["modus-ponens"],
    unlocks: ["appeal-to-novelty"],
    exercises: [
      { type: "multipleChoice", question: "Wanneer is een beroep op traditie wél legitiem?", options: ["Altijd", "Nooit", "Als bewezen is dat de traditie goede uitkomsten heeft", "Als het om cultuur gaat"], correctIndex: 2, explanation: "Traditie kan een aanwijzing zijn dat iets werkt, maar alleen als er bewijs is voor de uitkomsten — niet puur op basis van ouderdom." }
    ],
    creativePrompt: "Benoem drie gewoonten of regels in je leven of werk die er zijn 'omdat het altijd zo was'. Vraag voor elk: is er een goede reden buiten de traditie zelf?",
    aiHelperPrompts: ["Hoe onderscheid ik een legitiem gebruik van traditie van een drogreden?", "Wanneer is innovatie versus respect voor traditie gepast?", "Hoe hangt dit samen met het argument van autoriteit?"]
  },
  {
    id: "appeal-to-novelty",
    title: "Beroep op Nieuwigheid",
    difficulty: 1,
    emoji: "✨",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    tags: ["Logica", "Drogreden", "Redeneren", "Beter Argumenteren"],
    definition: "De drogreden waarbij iets gerechtvaardigd wordt louter omdat het nieuw is. Nieuwheid op zich is geen bewijs van kwaliteit of juistheid.",
    abstractExample: "'Dit is de nieuwste aanpak, dus het moet beter zijn dan de oude.' Nieuwheid garandeert geen vooruitgang — nieuwe dingen kunnen ook slechter zijn.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'De nieuwste smartphone moet de beste zijn, dus ik koop hem.' Technologische nieuwheid is niet automatisch verbeterd." },
      { domain: "business", icon: "💼", text: "Managementmodes komen en gaan: 'agile' of 'holacracy' zijn aantrekkelijk door nieuwheid, niet altijd door bewijs." },
      { domain: "science", icon: "🔬", text: "Nieuwe medische behandelingen worden soms aangeprezen als revolutionair voordat klinische trials ze gevalideerd hebben." }
    ],
    prerequisites: ["appeal-to-tradition"],
    unlocks: ["false-dilemma"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het probleem met 'dit is de nieuwste methode dus het is de beste'?", options: ["Nieuwheid is geen bewijs van superioriteit", "Nieuwe dingen zijn altijd beter", "Oude methoden zijn altijd beter", "Er is geen probleem"], correctIndex: 0, explanation: "Nieuwheid zegt niets over effectiviteit. Alleen vergelijkend onderzoek of bewijs kan bepalen wat beter is." }
    ],
    creativePrompt: "Noem drie dingen die je kocht of deed puur omdat ze nieuw of de nieuwste versie waren. Waren ze werkelijk beter dan het oude?",
    aiHelperPrompts: ["Hoe balanceer ik nieuwsgierigheid naar het nieuwe met kritisch evalueren?", "In welke domeinen is nieuwheid wél een goede proxy voor kwaliteit?", "Hoe hangt dit samen met reclame en marketing?"]
  },
  {
    id: "appeal-to-emotion",
    title: "Beroep op Emotie",
    difficulty: 1,
    emoji: "😢",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    tags: ["Logica", "Drogreden", "Retorica", "Beter Argumenteren"],
    definition: "Een argument wordt gepresenteerd op basis van emotionele impact in plaats van logische redenering of bewijs. Emotie vervangt argumenten en bewijslast.",
    abstractExample: "'Denk aan de kinderen!' is een emotioneel beroep dat een discussie kan sluiten zonder het argument te beantwoorden. Medelijden, angst of woede worden aangewend om redenering te vervangen.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een reclame toont een zielig dier om donaties te werven, zonder informatie te geven over hoe effectief de organisatie is." },
      { domain: "business", icon: "💼", text: "Een kandidaat wordt aangenomen omdat het verhaal van zijn strijd zo indrukwekkend was, terwijl zijn competenties niet objectief geëvalueerd werden." },
      { domain: "science", icon: "🔬", text: "In debatten over vaccinaties worden patiëntverhalen gebruikt om statistisch bewijs te overtroefen — zowel voor als tegen." }
    ],
    prerequisites: ["modus-ponens", "ad-hominem"],
    unlocks: ["narrative-fallacy"],
    exercises: [
      { type: "multipleChoice", question: "Wanneer is een emotioneel appel in een argument legitiem?", options: ["Nooit", "Als het de emotionele component van het onderwerp illustreert zonder het bewijs te vervangen", "Altijd als mensen ermee instemmen", "Als het bewijs ontbreekt"], correctIndex: 1, explanation: "Emotie kan een argumentonderdeel zijn als het de menselijke impact illustreert, maar mag niet als vervanging voor bewijs fungeren." }
    ],
    creativePrompt: "Bekijk drie reclameboodschappen. Identificeer welk emotie ze aanspreken. Vraag daarna: welk bewijs geven ze dat hun product of dienst echt werkt?",
    aiHelperPrompts: ["Wanneer is emotionele retoriek manipulatief versus legitiem?", "Hoe herken ik een beroep op emotie in politieke toespraken?", "Hoe kan ik reageren op emotionele argumenten zonder bot te lijken?"]
  },
  {
    id: "ad-populum",
    title: "Beroep op de Massa",
    difficulty: 1,
    emoji: "👥",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    tags: ["Logica", "Drogreden", "Redeneren", "Beter Argumenteren"],
    definition: "De drogreden waarbij iets als waar of goed wordt gepresenteerd omdat veel mensen het geloven of doen. Populariteit is geen bewijs van juistheid.",
    abstractExample: "'Miljarden mensen geloven in dit, dus het moet kloppen.' Of: 'Iedereen koopt bij dit merk, dus het moet het beste zijn.' Meerderheid bepaalt geen waarheid.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'Iedereen in onze buurt heeft zonnepanelen, dus wij moeten ze ook nemen' is sociale druk, geen onderbouwde redenering." },
      { domain: "business", icon: "💼", text: "Een beleggingshype: 'Alle experts investeren hierin' — populariteit creëert zeepbellen, geen garanties." },
      { domain: "science", icon: "🔬", text: "Vóór Copernicus geloofde vrijwel iedereen dat de zon om de aarde draaide. Consensus was verkeerd; bewijs was doorslaggevend." }
    ],
    prerequisites: ["social-proof", "confirmation-bias"],
    unlocks: ["group-polarization"],
    exercises: [
      { type: "multipleChoice", question: "Wat onderscheidt een beroep op de massa van een legitiem gebruik van consensus?", options: ["Er is geen verschil", "Wetenschappelijke consensus is gebaseerd op bewijs, populaire consensus niet per se", "Masse-consensus is altijd juist", "Wetenschappelijke consensus is ook een drogreden"], correctIndex: 1, explanation: "Wetenschappelijke consensus is gebaseerd op herhaaldelijk getest bewijs. Populariteit in het dagelijks leven is dat niet." }
    ],
    creativePrompt: "Identificeer drie overtuigingen die je hebt mede omdat 'iedereen' ze heeft. Vraag voor elk: wat is het daadwerkelijke bewijs, los van populariteit?",
    aiHelperPrompts: ["Hoe onderscheid ik een beroep op de massa van legitieme sociale normen?", "Wanneer is het rationeel om de meerderheid te volgen?", "Hoe hangt dit samen met het sociale-bewijs principe?"]
  },
  {
    id: "genetic-fallacy",
    title: "Genetische Drogreden",
    difficulty: 2,
    emoji: "🧬",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    tags: ["Logica", "Drogreden", "Redeneren", "Beter Argumenteren"],
    definition: "Een argument verwerpen of accepteren op basis van zijn oorsprong in plaats van zijn inhoud. De herkomst van een idee bepaalt niet zijn juistheid.",
    abstractExample: "'Dit idee komt van een lobbyist, dus het deugt niet.' Of: 'Einstein zei dit, dus het klopt.' Beide redeneren vanuit oorsprong, niet vanuit inhoud.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'Die informatie staat op een nepnieuws-site, dus het is sowieso fout' — soms staat feitelijk correcte informatie op slechte bronnen." },
      { domain: "business", icon: "💼", text: "'Het idee van die stagiaire kan nooit goed zijn' — goede ideeën kunnen van overal komen." },
      { domain: "science", icon: "🔬", text: "Mendel's erfelijkheidswetten werden decennialang genegeerd deels omdat hij een monnik was, geen professioneel wetenschapper." }
    ],
    prerequisites: ["ad-hominem", "appeal-to-authority"],
    unlocks: ["confirmation-bias"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het verschil tussen de genetische drogreden en een legitieme bronkritiek?", options: ["Ze zijn identiek", "Genetische drogreden verwerpt de inhoud op basis van oorsprong; bronkritiek evalueert de betrouwbaarheid van bewijs", "Bronkritiek is altijd ongeldig", "Genetische drogreden gaat over DNA"], correctIndex: 1, explanation: "Het beoordelen of een bron betrouwbaar is voor bewijs is legitiem; het verwerpen van een claim puur vanwege de afzender is een drogreden." }
    ],
    creativePrompt: "Zoek een bewering die je aanvankelijk afwees vanwege de bron. Evalueer nu de bewering op haar eigen merites. Was je eerste oordeel juist?",
    aiHelperPrompts: ["Hoe kan ik een idee evalueren zonder te laten afleiden door de bron?", "Wanneer is het oorsprong van informatie wél relevant?", "Hoe hangt de genetische drogreden samen met ad hominem?"]
  },
  {
    id: "middle-ground-fallacy",
    title: "Gulden-Middenweg-Drogreden",
    difficulty: 2,
    emoji: "⚖️",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    tags: ["Logica", "Drogreden", "Redeneren", "Beter Argumenteren"],
    definition: "De aanname dat het midden tussen twee standpunten altijd de juiste positie is. Soms is een van de extremen correct en het midden verkeerd.",
    abstractExample: "'Wetenschapper A zegt 5 graden opwarming, scepticus B zegt 0 graden, dus de waarheid is 2,5 graden.' Het gemiddelde van twee standpunten is geen bewijs.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'Jij wilt het raam dicht, ik wil het open, dus laten we het op een kier zetten' — soms is dit goed, soms is een van de extremen correct." },
      { domain: "business", icon: "💼", text: "In onderhandelingen denken mensen dat het midden van twee eisen de eerlijke uitkomst is, maar een van de partijen kan juist zijn." },
      { domain: "science", icon: "🔬", text: "Aardebol versus platte aarde: het 'midden' (deels bol?) is niet de oplossing. Bewijs bepaalt welk standpunt correct is." }
    ],
    prerequisites: ["false-dilemma"],
    unlocks: ["appeal-to-consequences"],
    exercises: [
      { type: "multipleChoice", question: "Wanneer is het midden kiezen wél rationeel?", options: ["Altijd bij meningsverschillen", "Als beide standpunten grond van waarheid bevatten en bewijs voor beide bestaat", "Nooit", "Als iemand agressief debatteert"], correctIndex: 1, explanation: "Compromis en het midden zijn soms rationeel als beide perspectieven deels gegrond zijn — maar niet automatisch omdat er onenigheid is." }
    ],
    creativePrompt: "Denk aan een recent debat of conflict. Was er een echte 'middenweg'? Of was een van de standpunten beter onderbouwd dan het andere?",
    aiHelperPrompts: ["Hoe onderscheid ik een goed compromis van een gulden-middenweg-drogreden?", "Waarom neigen mensen naar het midden bij meningsverschillen?", "Hoe hangt dit samen met valse dichotomie?"]
  },
  {
    id: "appeal-to-consequences",
    title: "Beroep op Gevolgen",
    difficulty: 2,
    emoji: "🎯",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    tags: ["Logica", "Drogreden", "Redeneren", "Beter Argumenteren"],
    definition: "Een bewering als waar of onwaar bestempelen op basis van de wenselijkheid van de gevolgen als de bewering waar zou zijn. Wat we wensen te geloven bepaalt niet wat waar is.",
    abstractExample: "'Als er geen God zou zijn, zou het leven zinloos zijn, dus er moet een God zijn.' De wenselijkheid van een conclusie maakt haar niet waar.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'Als klimaatverandering echt is, moeten we onze economie aanpassen — dat wil ik niet, dus klimaatverandering is overdreven.'" },
      { domain: "business", icon: "💼", text: "'Als de studie aantoont dat ons product schadelijk is, krijgen we rechtszaken. Dus de studie klopt niet.' Gewenste gevolgen staan los van feiten." },
      { domain: "science", icon: "🔬", text: "Wetenschapsfilosofen noemen dit ook 'wishful thinking' — de voorkeur voor bepaalde waarheden beïnvloedt de evaluatie van bewijs." }
    ],
    prerequisites: ["modus-ponens", "appeal-to-emotion"],
    unlocks: ["confirmation-bias"],
    exercises: [
      { type: "multipleChoice", question: "Waarom is 'als dit waar is, wil ik het niet, dus het is niet waar' een drogreden?", options: ["Omdat wenselijkheid de werkelijkheid niet bepaalt", "Omdat gevolgen altijd positief moeten zijn", "Omdat het een emotioneel argument is", "Omdat het over de toekomst gaat"], correctIndex: 0, explanation: "De waarheid van een uitspraak is onafhankelijk van onze voorkeur voor de gevolgen als het waar zou zijn." }
    ],
    creativePrompt: "Denk aan een onaangename waarheid die je liever niet wilde geloven. Hoe heb je argumenten gezocht om haar te verwerpen? Was dat rationeel?",
    aiHelperPrompts: ["Hoe herken ik beroep op gevolgen in politiek debat?", "Hoe kan ik mijn eigen wishful thinking corrigeren?", "Hoe hangt dit samen met motivational reasoning?"]
  },
  {
    id: "begging-the-question",
    title: "Circulair Bewijs",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    tags: ["Logica", "Drogreden", "Redeneren", "Beter Argumenteren"],
    definition: "Een argument waarbij de conclusie als premisse wordt gebruikt. De redenering bewijst niets nieuws omdat de conclusie al impliciet in de aanname zit.",
    abstractExample: "'De Bijbel is waar omdat de Bijbel zegt dat hij waar is.' De bron bewijst zichzelf. Of: 'Hij liegt omdat hij een leugenaar is' — het woord 'leugenaar' veronderstelt al wat bewezen moet worden.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'We moeten deze regel volgen omdat het de regel is.' De rechtvaardiging van de regel is de regel zelf." },
      { domain: "business", icon: "💼", text: "'Ons product is het beste omdat wij de beste zijn' — de conclusie (best) staat al in de premisse (beste bedrijf)." },
      { domain: "science", icon: "🔬", text: "In ethiek: 'Abortus is moord omdat het een leven beëindigt' veronderstelt al dat een foetus een 'leven' is in de morele zin — dit is precies wat in debat is." }
    ],
    prerequisites: ["circular-reasoning"],
    unlocks: ["false-dilemma"],
    exercises: [
      { type: "multipleChoice", question: "Wat maakt circulair bewijs ongeldig?", options: ["Het gebruikt emotie", "De conclusie staat al in de premisse — er wordt niets bewezen", "Het heeft geen premissen", "Het is te simplistisch"], correctIndex: 1, explanation: "Een goed argument voegt informatie toe: de premissen leiden tot de conclusie. Bij circulair bewijs is de conclusie al de premisse." }
    ],
    creativePrompt: "Schrijf drie argumenten die je geregeld hoort of gebruikt. Zijn de conclusies verborgen in de premissen? Probeer de circulaire redenering te identificeren.",
    aiHelperPrompts: ["Hoe kan ik circulaire bewijsvoering herkennen in debatten?", "Wat is het verschil tussen circulair bewijs en een tautologie?", "Geef een voorbeeld van circulair bewijs in politiek beleid."]
  },
  {
    id: "equivocation-fallacy",
    title: "Dubbelzinnigheidsvertekening",
    difficulty: 2,
    emoji: "🔀",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    tags: ["Logica", "Drogreden", "Taal", "Beter Argumenteren"],
    definition: "Een drogreden waarbij een woord of uitdrukking in twee verschillende betekenissen gebruikt wordt in hetzelfde argument, waardoor de redenering ongeldig wordt.",
    abstractExample: "'Niks is beter dan eeuwig geluk. Een boterham is beter dan niks. Dus een boterham is beter dan eeuwig geluk.' 'Niks' betekent eerst 'niets bestaat' en daarna 'leegte als optie'.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'De wet van de natuur dicteert dat de sterkste overleeft. Mensen zijn deel van de natuur. Dus de sterkste mensen moeten heersen.' 'Wet' en 'sterk' worden dubbelzinnig gebruikt." },
      { domain: "business", icon: "💼", text: "'We moeten kritisch zijn op onze concurrenten (kritisch = analyserend). Kritisch zijn is destructief (kritisch = afbrekend). Dus analyse is destructief.'" },
      { domain: "science", icon: "🔬", text: "Filosofische debatten over 'realiteit' zijn vaak vertroebeld door dubbelzinnig gebruik van 'bestaan', 'object' of 'bewustzijn'." }
    ],
    prerequisites: ["modus-ponens", "necessary-sufficient"],
    unlocks: ["begging-the-question"],
    exercises: [
      { type: "multipleChoice", question: "Hoe herken je dubbelzinnigheidsvertekening?", options: ["Het argument is emotioneel", "Een sleutelwoord heeft verschillende betekenissen in de premisse en conclusie", "Het argument is te lang", "Het argument heeft geen conclusie"], correctIndex: 1, explanation: "Zoek naar sleutelwoorden die een betekenisverschuiving ondergaan tijdens het argument." }
    ],
    creativePrompt: "Zoek drie woorden die meerdere betekenissen hebben (bijv. 'bank', 'recht', 'macht'). Schrijf een argument dat ongeldig wordt doordat het de betekenis halverwege verschuift.",
    aiHelperPrompts: ["Hoe kan ik dubbelzinnigheid in taal vermijden bij mijn eigen argumenten?", "Geef voorbeelden van dubbelzinnigheidsvertekening in politiek taalgebruik.", "Hoe hangt dit samen met semantische drift?"]
  },
  {
    id: "special-pleading",
    title: "Speciale Uitzondering",
    difficulty: 2,
    emoji: "🙋",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    tags: ["Logica", "Drogreden", "Redeneren", "Beter Argumenteren"],
    definition: "Een uitzondering eisen op een algemene regel voor jezelf of een favoriete positie, zonder die uitzondering te rechtvaardigen. De standaard wordt selectief toegepast.",
    abstractExample: "Iemand zegt dat iedereen deadlines moet halen, maar als hun eigen deadline voorbij gaat: 'Bij mij was het uitzonderlijk druk.' De uitzondering wordt geclaimd maar niet onderbouwd.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'Roddelen is fout, maar ik vertel dit alleen omdat ik bezorgd ben.' Iedereen die roddelt heeft een rechtvaardiging — dat maakt het niet anders." },
      { domain: "business", icon: "💼", text: "Een land bepleit vrije handel voor andere landen, maar beschermt zijn eigen industrie met subsidies en tarieven." },
      { domain: "science", icon: "🔬", text: "Homeopaten accepteren wetenschappelijke standaarden voor reguliere geneesmiddelen, maar eisen andere standaarden voor hun eigen behandelingen." }
    ],
    prerequisites: ["no-true-scotsman", "confirmation-bias"],
    unlocks: ["tu-quoque"],
    exercises: [
      { type: "multipleChoice", question: "Wat onderscheidt een legitieme uitzondering van speciale pleitering?", options: ["Legitieme uitzonderingen worden onderbouwd met principes die voor iedereen gelden", "Alle uitzonderingen zijn dropgreden", "Speciale pleitering is altijd bewust", "Uitzonderingen voor jezelf zijn altijd oneerlijk"], correctIndex: 0, explanation: "Een uitzondering is legitiem als je een principe kunt aanwijzen dat voor iedereen in die situatie geldt, niet alleen voor jou." }
    ],
    creativePrompt: "Denk aan een situatie waar jij een uitzondering voor jezelf opeiste. Kon je die rechtvaardiging voor iedereen in die situatie verdedigen, of was het echt speciaal voor jou?",
    aiHelperPrompts: ["Hoe herken ik speciale pleitering bij mezelf?", "Is hypocrisie altijd speciale pleitering?", "Hoe hangt dit samen met de tu quoque-drogreden?"]
  },

  // ── BATCH 4: ECONOMIE & BESLISKUNDE ──────────────────────────
  {
    id: "bounded-rationality",
    title: "Begrensd Rationaliteit",
    difficulty: 2,
    emoji: "🧠",
    academicCategory: "Gedragseconomie",
    skillCategory: "Betere Beslissingen",
    tags: ["Gedragseconomie", "Besluitvorming", "Cognitie", "Betere Beslissingen"],
    definition: "Mensen streven niet naar perfecte rationaliteit maar naar 'goed genoeg' beslissingen, vanwege beperkte informatie, cognitieve capaciteit en tijd. Echte rationaliteit is altijd begrensd.",
    abstractExample: "Een volledig rationele actor vergelijkt alle supermarktproducten op prijs per gram en kiest altijd de optimale optie. In werkelijkheid kijkt iemand naar 3-4 opties en kiest de eerste die goed genoeg lijkt.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Bij het kiezen van een restaurant vergelijk je niet elke optie in de stad; je pakt de eerste die redelijk lijkt." },
      { domain: "business", icon: "💼", text: "Managers nemen beslissingen met onvolledige informatie onder tijdsdruk — perfecte analyse is luxe die de werkelijkheid zelden toelaat." },
      { domain: "science", icon: "🔬", text: "Herbert Simon bedacht de term 'bounded rationality' in 1955 en won er de Nobelprijs voor economie mee in 1978." }
    ],
    prerequisites: ["opportunity-cost"],
    unlocks: ["satisficing"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de reden dat beslissingen altijd begrensd rationeel zijn?", options: ["Mensen zijn lui", "Informatie, tijd en cognitieve capaciteit zijn altijd beperkt", "Rationaliteit bestaat niet", "Mensen maken altijd fouten"], correctIndex: 1, explanation: "Perfecte rationaliteit vereist volledige informatie en onbeperkte verwerkingscapaciteit — beides is in de praktijk nooit beschikbaar." }
    ],
    creativePrompt: "Beschrijf een recente beslissing die je nam. Hoeveel opties heb je echt overwogen? Hoeveel informatie had je? Wat zou een 'volledig rationele' keuze hebben vereist?",
    aiHelperPrompts: ["Hoe kan ik betere beslissingen nemen binnen mijn cognitieve begrenzingen?", "Wanneer is een snelle beslissing beter dan een uitgebreide analyse?", "Hoe verschilt begrensd rationaliteit van irrationeel gedrag?"]
  },
  {
    id: "satisficing",
    title: "Voldoenend Kiezen",
    difficulty: 1,
    emoji: "✅",
    academicCategory: "Gedragseconomie",
    skillCategory: "Betere Beslissingen",
    tags: ["Gedragseconomie", "Besluitvorming", "Strategie", "Betere Beslissingen"],
    definition: "De strategie om de eerste optie te kiezen die aan een minimumdrempel voldoet, in plaats van te zoeken naar de absolute beste optie. Satisficing = 'satisfying' + 'sufficing' (bevredigend + voldoende).",
    abstractExample: "Je zoekt een appartement en stelt minimumcriteria (prijs, ligging, grootte). Je neemt het eerste appartement dat aan al deze criteria voldoet, in plaats van maanden te zoeken naar het perfecte appartement.",
    examples: [
      { domain: "daily", icon: "🏠", text: "In een restaurant kies je een gerecht dat goed klinkt en aan je wensen voldoet, in plaats van het menu te analyseren voor de theoretisch beste keuze." },
      { domain: "business", icon: "💼", text: "Een HR-manager selecteert de eerste kandidaat die aan alle functie-eisen voldoet, in plaats van alle sollicitanten te ranken." },
      { domain: "science", icon: "🔬", text: "Barry Schwartz toonde aan dat 'maximizers' (die altijd het beste zoeken) minder gelukkig zijn dan 'satisficers' die 'goed genoeg' accepteren." }
    ],
    prerequisites: ["bounded-rationality", "choice-overload"],
    unlocks: ["default-effect"],
    exercises: [
      { type: "multipleChoice", question: "Wanneer is satisficing een betere strategie dan maximeren?", options: ["Nooit", "Altijd", "Als de zoekkosten hoger zijn dan de verwachte meerwaarde van de perfecte optie", "Alleen bij kleine beslissingen"], correctIndex: 2, explanation: "Als het vinden van de perfecte optie meer kost (tijd, energie, stress) dan het voordeel ervan, is satisficing rationeel." }
    ],
    creativePrompt: "Stel minimumcriteria voor een beslissing die voor jou ligt. Kies de eerste optie die eraan voldoet. Hoe voelt dit vergeleken met uitgebreid zoeken?",
    aiHelperPrompts: ["Hoe stel ik goede minimumcriteria op voor beslissingen?", "Wanneer moet ik wél maximeren en niet satisficen?", "Hoe hangt dit samen met de paradox van keuze?"]
  },
  {
    id: "nudge-theory",
    title: "Duwtjestheorie",
    difficulty: 2,
    emoji: "👆",
    academicCategory: "Gedragseconomie",
    skillCategory: "Betere Beslissingen",
    tags: ["Gedragseconomie", "Gedragsverandering", "Beleid", "Betere Beslissingen"],
    definition: "Kleine aanpassingen in de omgeving of de manier waarop keuzes worden gepresenteerd, leiden tot betere beslissingen zonder keuzevrijheid te beperken. Mensen worden 'geduwd' naar betere opties.",
    abstractExample: "In een schoolkantine worden gezonde opties op ooghoogte gezet en ongezonde opties aan het einde. Kinderen kiezen vaker gezond — zonder verbod op ongezond eten.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Automatische inschrijving voor pensioenfondsen (opt-out in plaats van opt-in) verhoogt deelname dramatisch zonder verplichting." },
      { domain: "business", icon: "💼", text: "Trappen in zichtbare positie en liften verstopt achter een deur verhoogt trapgebruik op kantoren." },
      { domain: "science", icon: "🔬", text: "Thaler & Sunstein's boek 'Nudge' (2008) populariseerde de theorie; beide auteurs adviseerden overheden wereldwijd over gedragsbeleid." }
    ],
    prerequisites: ["default-effect", "choice-overload"],
    unlocks: ["satisficing"],
    exercises: [
      { type: "multipleChoice", question: "Wat onderscheidt een nudge van een verbod?", options: ["Een nudge dwingt gedrag af; een verbod suggereert", "Een nudge behoudt keuzevrijheid; een verbod elimineert opties", "Ze zijn identiek", "Een nudge is altijd effectiever"], correctIndex: 1, explanation: "Een nudge is per definitie niet-dwingend — alle opties blijven beschikbaar, maar de context wordt aangepast." }
    ],
    creativePrompt: "Ontwerp een nudge voor een gewoonte die je wilt verbeteren (sport, voeding, slaap). Welke aanpassing in je omgeving zou je in de goede richting duwen zonder wilskracht?",
    aiHelperPrompts: ["Is nudging manipulatief of is het paternalistisch?", "Welke nudges werken in de praktijk het beste?", "Hoe kan ik mijn eigen omgeving inrichten als een nudge voor goed gedrag?"]
  },
  {
    id: "veblen-effect",
    title: "Veblen-Effect",
    difficulty: 2,
    emoji: "💎",
    academicCategory: "Economie",
    skillCategory: "Kritisch Denken",
    tags: ["Economie", "Consumptie", "Status", "Kritisch Denken"],
    definition: "Het verschijnsel waarbij de vraag naar een product toeneemt als de prijs stijgt, in tegenstelling tot normale vraagcurves. Hogere prijs signaleert status en exclusiviteit.",
    abstractExample: "Een duur handtas verkoopt beter na een prijsverhoging omdat de hogere prijs de sociale status van het bezit vergroot. De prijs zelf is het product.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Luxe auto's, designer kleding en dure horloges worden deels gekocht vanwege hun prijs — die is het bewijs van exclusiviteit." },
      { domain: "business", icon: "💼", text: "Een consultancybureau verhoogde zijn dagprijs en kreeg plotseling meer aanvragen — de hogere prijs signaleerde kwaliteit." },
      { domain: "science", icon: "🔬", text: "Thorstein Veblen beschreef in 1899 'conspicuous consumption' — zichtbare consumptie als statusvertoon, de basis van het effect." }
    ],
    prerequisites: ["scarcity-effect", "decoy-effect"],
    unlocks: ["information-asymmetry"],
    exercises: [
      { type: "multipleChoice", question: "Waarom werkt het Veblen-effect alleen voor bepaalde producten?", options: ["Alle producten werken zo", "Alleen producten die zichtbaar geconsumeerd worden en status symboliseren", "Alleen dure producten", "Het werkt voor goedkope producten"], correctIndex: 1, explanation: "Het Veblen-effect vereist zichtbaarheid en een sociale context waar prijs als statussignaal werkt." }
    ],
    creativePrompt: "Denk aan een aankoop waarbij de prijs onderdeel was van de aantrekkingskracht. Wat kocht je eigenlijk — het product of het signaal?",
    aiHelperPrompts: ["Hoe beïnvloedt het Veblen-effect luxe marketing?", "Is er een grens aan wat als statusgoed kan worden verkocht?", "Hoe hangt het Veblen-effect samen met informatieasymmetrie?"]
  },
  {
    id: "hot-cold-empathy-gap",
    title: "Warm-Koud-Empatiekloof",
    difficulty: 2,
    emoji: "🌡️",
    academicCategory: "Gedragseconomie",
    skillCategory: "Betere Beslissingen",
    tags: ["Gedragseconomie", "Emotie", "Besluitvorming", "Betere Beslissingen"],
    definition: "In een koude (emotieloze) toestand onderschatten we hoe sterk emoties ons gedrag en beslissingen zullen beïnvloeden in een warme (emotionele) toestand, en vice versa.",
    abstractExample: "Nuchter plannen om matig te drinken op een feest klinkt logisch. Op het feest zelf, in de warme toestand, voelt die afspraak heel ver weg. De koude je kan de warme je niet goed voorspellen.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Op een dieet besluit je dat je op feestjes geen cake zult eten. Maar de geur van verse cake in een sociale setting overmant je plan." },
      { domain: "business", icon: "💼", text: "Onderhandelaars plannen kalm hun strategie — maar in hitte van debat reageren ze emotioneel in strijd met hun plan." },
      { domain: "science", icon: "🔬", text: "Loewenstein (1996, 2005) documenteerde de warm-koud-kloof uitgebreid en toonde de asym metrische zelfinschatting aan." }
    ],
    prerequisites: ["projection-bias"],
    unlocks: ["restraint-bias"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de beste manier om de warm-koud-kloof te overbruggen?", options: ["Meer vertrouwen in jezelf kweken", "Bindende afspraken maken in koude toestand", "Warme toestand vermijden", "Meer emotie toelaten in koude planning"], correctIndex: 1, explanation: "Precommitment — bindende afspraken maken als je nuchter bent — helpt om de warme versie van jezelf te sturen." }
    ],
    creativePrompt: "Beschrijf een situatie waar je in koude toestand plannen maakte die je in warme toestand niet volgde. Wat had je anders kunnen plannen?",
    aiHelperPrompts: ["Hoe gebruik ik precommitment om mijn koude beslissingen te handhaven?", "In welke situaties is de warm-koud-kloof het gevaarlijkst?", "Hoe hangt dit samen met zelfcontrole in psychologie?"]
  },
  {
    id: "default-effect",
    title: "Standaard-Effect",
    difficulty: 1,
    emoji: "⚙️",
    academicCategory: "Gedragseconomie",
    skillCategory: "Betere Beslissingen",
    tags: ["Gedragseconomie", "Besluitvorming", "Keuze-architectuur", "Betere Beslissingen"],
    definition: "Mensen kiezen vaker de standaardoptie dan alternatieven, ook als de standaard niet de beste keuze is. Inactiviteit en het vermijden van keuze leiden naar de default.",
    abstractExample: "Als donorregistratie standaard 'ja' is (opt-out), zijn veel meer mensen donor dan bij standaard 'nee' (opt-in) — ook al is het een identieke keuzesituatie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Software installeert standaard extra toolbars of instellingen; de meeste gebruikers laten dit staan zonder bewust te kiezen." },
      { domain: "business", icon: "💼", text: "Abonnementen verlengen automatisch tenzij opgezegd — de meeste klanten blijven door inactiviteit." },
      { domain: "science", icon: "🔬", text: "Johnson & Goldstein (2003) toonden aan dat orgaandonatiegraden dramatisch verschilden tussen landen op basis van opt-in vs. opt-out systemen." }
    ],
    prerequisites: ["status-quo-bias"],
    unlocks: ["nudge-theory"],
    exercises: [
      { type: "multipleChoice", question: "Waarom kiezen mensen zo vaak de standaardoptie?", options: ["De standaard is altijd de beste optie", "Status-quo-bias, inactiviteit en de aanname dat de standaard aanbevolen is", "Ze weten niet dat er alternatieven zijn", "Standaarden zijn wettelijk verplicht"], correctIndex: 1, explanation: "De standaard profiteert van status-quo-bias, gemak én de impliciete aanbeveling die er van uitgaat." }
    ],
    creativePrompt: "Controleer de standaardinstellingen van een apparaat of dienst die je gebruikt. Zijn ze in jouw belang of in het belang van de aanbieder? Wat wijzig je?",
    aiHelperPrompts: ["Hoe kan ik bewust omgaan met standaardopties in mijn leven?", "Hoe gebruiken bedrijven het standaard-effect om inkomsten te maximeren?", "Hoe hangt dit samen met opt-in vs. opt-out in beleid?"]
  },
  {
    id: "transaction-costs",
    title: "Transactiekosten",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Economie",
    skillCategory: "Betere Beslissingen",
    tags: ["Economie", "Organisatie", "Kosten", "Betere Beslissingen"],
    definition: "De kosten die verbonden zijn aan het verrichten van een transactie, buiten de directe prijs: zoeken, onderhandelen, contracteren en handhaven. Transactiekosten bepalen hoe economische activiteit georganiseerd wordt.",
    abstractExample: "Een bedrijf kan een product zelf maken of inkopen bij een leverancier. Zelfs als de externe prijs lager is, kunnen de transactiekosten (zoeken, onderhandelen, contractbeheer) het zinvol maken om intern te produceren.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een klusjesman inhuren kost niet alleen zijn uurtarief, maar ook tijd om hem te zoeken, afspraken te maken en zijn werk te controleren." },
      { domain: "business", icon: "💼", text: "Fusies en overnames kunnen zinvol zijn om transactiekosten te verminderen die ontstaan bij marktinkoop van diensten." },
      { domain: "science", icon: "🔬", text: "Ronald Coase won in 1991 de Nobelprijs voor economie voor zijn theorie van transactiekosten als verklaring voor de bestaansreden van bedrijven." }
    ],
    prerequisites: ["opportunity-cost", "comparative-advantage"],
    unlocks: ["principal-agent"],
    exercises: [
      { type: "multipleChoice", question: "Waarom bestaan bedrijven volgens Coase?", options: ["Om winst te maken", "Om transactiekosten te verminderen ten opzichte van marktinkoop", "Om werknemers te beschermen", "Omdat de overheid ze verplicht"], correctIndex: 1, explanation: "Bedrijven internaliseren transacties die te duur zijn om via de markt te organiseren vanwege hoge zoek-, contract- en handhavingskosten." }
    ],
    creativePrompt: "Analyseer een recente beslissing om iets zelf te doen vs. uit te besteden. Welke transactiekosten waren er bij beide opties? Was je keuze optimaal?",
    aiHelperPrompts: ["Hoe bereken ik transactiekosten bij een make-or-buy beslissing?", "Hoe veranderen digitale platforms de transactiekosten in de economie?", "Hoe hangt dit samen met de principaal-agent verhouding?"]
  },
  {
    id: "price-signaling",
    title: "Prijs als Signaal",
    difficulty: 2,
    emoji: "📡",
    academicCategory: "Economie",
    skillCategory: "Kritisch Denken",
    tags: ["Economie", "Informatie", "Markten", "Kritisch Denken"],
    definition: "Prijzen werken niet alleen als allocatiemechanisme maar ook als informatiesignaal: een hoge prijs communiceert kwaliteit en omgekeerd. Prijzen bevatten kennis die verspreid is over miljoenen actoren.",
    abstractExample: "Als de prijs van olie stijgt, weten producenten wereldwijd dat ze meer moeten produceren en consumenten dat ze minder moeten verbruiken — zonder centrale planning. De prijs bevat alle relevante informatie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een duur restaurant signaleert kwaliteit; zelfs mensen die er nooit geweest zijn, nemen dit aan op basis van de prijs." },
      { domain: "business", icon: "💼", text: "Een bedrijf dat zijn product te goedkoop prijst, wekt het vermoeden van lage kwaliteit — ook als het product goed is." },
      { domain: "science", icon: "🔬", text: "Hayek (1945) betoogde dat het prijssysteem een coördinatiemechanisme is dat gedecentraliseerde kennis samenbrengt die geen centrale planner kan bezitten." }
    ],
    prerequisites: ["information-asymmetry"],
    unlocks: ["veblen-effect"],
    exercises: [
      { type: "multipleChoice", question: "Wat is Hayeks centraal argument over prijzen?", options: ["Prijzen zijn willekeurig", "Prijzen coördineren gedecentraliseerde kennis die geen planner kan bezitten", "Prijzen zijn altijd eerlijk", "Prijzen zijn alleen numerieke labels"], correctIndex: 1, explanation: "De prijs integreert informatie van miljoenen individuen over vraag, aanbod en schaarste — een functie die geen centrale instantie kan repliceren." }
    ],
    creativePrompt: "Kijk naar een plotselinge prijsverandering van iets wat je koopt. Wat 'zegt' de prijs je over de onderliggende situatie van dat product? Welke informatie zit erin?",
    aiHelperPrompts: ["Wanneer falen prijssignalen als coördinatiemechanisme?", "Hoe beïnvloeden subsidies en belastingen de signaalkracht van prijzen?", "Hoe hangt dit samen met informatieasymmetrie?"]
  },
  {
    id: "rent-seeking",
    title: "Renteniergedrag",
    difficulty: 3,
    emoji: "🏰",
    academicCategory: "Politieke Economie",
    skillCategory: "Kritisch Denken",
    tags: ["Politieke Economie", "Organisatie", "Macht", "Kritisch Denken"],
    definition: "Het nastreven van rijkdom door het manipuleren van de politieke of economische omgeving in plaats van door productieve activiteit te creëren. Renteniergedrag redistributeert waarde zonder nieuwe waarde te scheppen.",
    abstractExample: "Een bedrijf besteedt miljoenen aan lobbyen voor importtarieven die concurrenten buitensluiten. Het bedrijf wordt rijker, maar de samenleving wordt armer — er is geen extra productie, alleen een verschuiving van rijkdom.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een taxibedrijf dat meer lobby t voor regelgeving die Uber buiten houdt dan dat het de service voor klanten verbetert." },
      { domain: "business", icon: "💼", text: "Farmaceutische bedrijven die patentwetten lobbyen om generieke concurrentie uit te stellen in plaats van nieuwe medicijnen te ontwikkelen." },
      { domain: "science", icon: "🔬", text: "Gordon Tullock (1967) introduceerde het concept; Anne Krueger bedacht de term 'rent-seeking' in 1974 om dit economisch parasitisme te beschrijven." }
    ],
    prerequisites: ["externalities", "tragedy-commons"],
    unlocks: ["principal-agent"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het verschil tussen ondernemen en renteniergedrag?", options: ["Ondernemen creëert waarde; renteniergedrag redistributeert het", "Ze zijn economisch equivalent", "Renteniergedrag is efficiënter", "Ondernemen is altijd legaal, renteniergedrag niet"], correctIndex: 0, explanation: "Ondernemen verhoogt de totale welvaart door productie; renteniergedrag vergroot het aandeel van één partij zonder de totale taart te vergroten." }
    ],
    creativePrompt: "Zoek een sector in de economie die sterk gelobbyd heeft voor regelgeving. Wie profiteert, wie betaalt? Is de samenleving er beter van geworden?",
    aiHelperPrompts: ["Hoe kan democratie renteniergedrag tegengaan?", "Hoe onderscheid ik legitiem lobbyen van rent-seeking?", "Hoe hangt dit samen met de tragedie van de meent?"]
  },
  {
    id: "tragedy-anticommons",
    title: "Tragedie van de Anti-Meent",
    difficulty: 3,
    emoji: "🔒",
    academicCategory: "Economie",
    skillCategory: "Kritisch Denken",
    tags: ["Economie", "Eigendomsrechten", "Samenwerking", "Kritisch Denken"],
    definition: "Wanneer te veel partijen vetorecht hebben over een gedeelde hulpbron, wordt de hulpbron onderbenut. Het tegengestelde van de tragedie van de meent: hier leidt versnipperd eigendom tot blokkades.",
    abstractExample: "Een medicijn blijft onontwikkeld omdat tientallen patenthouders elk een klein stukje van de benodigde kennis bezitten en geen van allen toestemming wil geven. Alles samen bezit niemand het medicijn.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een leeg pand in een stad blijft braak liggen omdat het eigendom is van zoveel erfgenamen dat niemand het kan kopen of ontwikkelen." },
      { domain: "business", icon: "💼", text: "Patent-thickets in de halfgeleiderindustrie: zo veel overlappende patenten dat innovatie stagneert door transactiekosten en blokkeringen." },
      { domain: "science", icon: "🔬", text: "Michael Heller beschreef in 1998 de 'tragedy of the anticommons' als spiegelbeeld van Hardin's klassieke tragedie van de meent." }
    ],
    prerequisites: ["tragedy-commons", "transaction-costs"],
    unlocks: ["externalities"],
    exercises: [
      { type: "multipleChoice", question: "Wanneer ontstaat een tragedie van de anti-meent?", options: ["Als niemand eigendomsrechten heeft", "Als te veel partijen vetorecht hebben over gebruik", "Als er te veel eigenaren zijn die willen verkopen", "Als de overheid eigendom nationaliseert"], correctIndex: 1, explanation: "De anti-meent ontstaat door gefragmenteerd vetorecht — te veel eigenaren die elk gebruik kunnen blokkeren." }
    ],
    creativePrompt: "Bedenk een situatie in je leven of werk waar samenwerking mislukt door te veel vetorechten of eigendomsclaims. Hoe zou je dit kunnen oplossen?",
    aiHelperPrompts: ["Hoe verschilt de tragedie van de anti-meent van de klassieke tragedie van de meent?", "Hoe kunnen patentpools de anti-meent aanpakken?", "Welke rol speelt de overheid bij het voorkomen van anti-meent-situaties?"]
  },

  // ── BATCH 5: SOCIOLOGIE ───────────────────────────────────────
  {
    id: "matthew-effect",
    title: "Matteüs-Effect",
    difficulty: 2,
    emoji: "📈",
    academicCategory: "Sociologie",
    skillCategory: "Beter Redeneren",
    tags: ["Sociologie", "Ongelijkheid", "Systemen", "Beter Redeneren"],
    definition: "Voordelen stapelen zich op bij degenen die al voordelen hebben; nadelen stapelen zich op bij wie al achtergesteld is. Successen vergroten de kansen op verder succes.",
    abstractExample: "Een wetenschapper met veel citaties krijgt meer funding, publicaties en erkenning, waardoor ze nog meer citaties krijgen. Wie al veel heeft, krijgt nog meer — wie weinig heeft, raakt verder achterop.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Kinderen die vroeg goed leren lezen, lezen meer en worden nog beter — terwijl kinderen die achterlopen verder achteropraken." },
      { domain: "business", icon: "💼", text: "Grote platforms (Amazon, Google) trekken meer gebruikers aan, waardoor ze meer data hebben, waardoor ze beter worden." },
      { domain: "science", icon: "🔬", text: "Socioloog Robert Merton bedacht de term in 1968, gebaseerd op de bijbeltekst: 'Aan wie heeft, zal gegeven worden.'" }
    ],
    prerequisites: ["network-effects", "feedback-loop"],
    unlocks: ["relative-deprivation"],
    exercises: [
      { type: "multipleChoice", question: "Hoe draagt het Matteüs-effect bij aan ongelijkheid?", options: ["Het maakt alle rijken armer", "Cumulatieve voordelen vergroten de kloof tussen wie al heeft en wie niet", "Het treft alleen wetenschappers", "Het werkt alleen in het onderwijs"], correctIndex: 1, explanation: "Elke ronde versterkende feedback vergroot het verschil tussen winnaars en verliezers, ook als de initiële kansen klein waren." }
    ],
    creativePrompt: "Identificeer een domein in je leven of werk waar het Matteüs-effect zichtbaar is. Hoe versterken initiële voordelen of nadelen zich over tijd?",
    aiHelperPrompts: ["Hoe kan beleid het Matteüs-effect tegengaan?", "Is het Matteüs-effect altijd slecht, of heeft het ook positieve effecten?", "Hoe hangt dit samen met het netwerk-effect?"]
  },
  {
    id: "broken-windows",
    title: "Gebroken-Ramen-Theorie",
    difficulty: 2,
    emoji: "🪟",
    academicCategory: "Criminologie",
    skillCategory: "Beter Redeneren",
    tags: ["Criminologie", "Sociologie", "Omgeving", "Beter Redeneren"],
    definition: "Zichtbare tekenen van wanorde en verwaarlozing (gebroken ramen, graffiti, zwerfvuil) bevorderen meer wanorde en criminaliteit. De omgeving communiceert normen over wat acceptabel is.",
    abstractExample: "Een gebroken raam dat niet gerepareerd wordt, signaleert dat niemand let. Dit nodigt uit tot meer vandalisme. Schone, goed onderhouden omgevingen communiceren het tegengestelde.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een schone wijk heeft minder zwerfvuil — mensen gooien minder snel een wikkel weg als de stoep al schoon is." },
      { domain: "business", icon: "💼", text: "Kleine overtredingen op kantoor (snoepen uit de koffiekas) die getolereerd worden, normaliseren grotere overtredingen." },
      { domain: "science", icon: "🔬", text: "Wilson & Kelling (1982) publiceerden de theorie; het beleid werd controversieel getest in New York City in de jaren '90." }
    ],
    prerequisites: ["social-proof", "normalization-deviance"],
    unlocks: ["normalization-deviance"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de kernlogica van de gebroken-ramen-theorie?", options: ["Criminaliteit veroorzaakt armoede", "Omgevingssignalen normaliseren bepaald gedrag", "Gebroken ramen veroorzaken onveiligheid", "Criminaliteit is altijd intentioneel"], correctIndex: 1, explanation: "De omgeving communiceert sociale normen — wanorde signaleert dat regels niet gehandhaafd worden, wat meer wanorde uitlokt." }
    ],
    creativePrompt: "Observeer je directe omgeving (thuis, werk, buurt). Welke kleine tekenen van wanorde zijn er? Hoe beïnvloeden die jouw eigen gedrag?",
    aiHelperPrompts: ["Is de gebroken-ramen-theorie wetenschappelijk bewezen?", "Hoe kan ik de gebroken-ramen-theorie toepassen in mijn eigen omgeving?", "Hoe hangt dit samen met sociale normen en conformiteit?"]
  },
  {
    id: "social-capital",
    title: "Sociaal Kapitaal",
    difficulty: 2,
    emoji: "🤝",
    academicCategory: "Sociologie",
    skillCategory: "Beter Samenwerken",
    tags: ["Sociologie", "Netwerken", "Vertrouwen", "Beter Samenwerken"],
    definition: "De waarde die voortvloeit uit sociale netwerken, relaties en gedeelde normen van vertrouwen en wederkerigheid. Sociaal kapitaal maakt samenwerking goedkoper en effectiever.",
    abstractExample: "Twee buren die elkaar kennen en vertrouwen, kunnen elkaars pakketjes aannemen, om gereedschap vragen en in noodsituaties helpen — zonder formeel contract. Dat is sociaal kapitaal in actie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "In een gemeenschap met hoog sociaal vertrouwen worden winkelwagens teruggebracht, deuren niet gesloten en informele overeenkomsten nagekomen." },
      { domain: "business", icon: "💼", text: "Teams met goede onderlinge relaties communiceren beter, lossen conflicten sneller op en presteren beter dan teams met hetzelfde talent maar lage cohesie." },
      { domain: "science", icon: "🔬", text: "Robert Putnam toonde in 'Bowling Alone' (2000) aan dat het sociaal kapitaal in de VS sterk was gedaald en dit correleerde met lagere democratische participatie." }
    ],
    prerequisites: ["reciprocity", "dunbar-number"],
    unlocks: ["homophily"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het verschil tussen bonding en bridging sociaal kapitaal?", options: ["Ze zijn identiek", "Bonding verbindt gelijkgestemden; bridging verbindt verschillende groepen", "Bridging gaat over technologie", "Bonding gaat over familie"], correctIndex: 1, explanation: "Bonding sociaal kapitaal versterkt bestaande groepen; bridging sociaal kapitaal verbindt verschillende groepen en creëert nieuwe kansen." }
    ],
    creativePrompt: "Inventariseer je sociale netwerk. Wie zijn je sterkste relaties (bonding)? Wie zijn mensen in andere kringen die je informatie of kansen geven (bridging)?",
    aiHelperPrompts: ["Hoe bouw ik bewust sociaal kapitaal op?", "Wanneer is sociaal kapitaal exclusief (in-group) en wanneer inclusief?", "Hoe hangt sociaal kapitaal samen met economische welvaart?"]
  },
  {
    id: "moral-panic",
    title: "Morele Paniek",
    difficulty: 2,
    emoji: "😱",
    academicCategory: "Sociologie",
    skillCategory: "Kritisch Denken",
    tags: ["Sociologie", "Media", "Sociale Controle", "Kritisch Denken"],
    definition: "Een heftige, soms overdreven reactie van de samenleving op een veronderstelde bedreiging voor sociale waarden en normen. Media, politici en experts versterken de angst en creëren een 'folk devil'.",
    abstractExample: "In de jaren '80 leidde de 'Satanic Panic' in de VS tot massale veroordelingen van onschuldige kleuterschoolleidsters op basis van nauwelijks bewijs — aangewakkerd door media en therapeuten.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Nieuwe muziekstijlen (rock, hiphop) worden telkens als morele gevaren voor de jeugd gepresenteerd — dit herhaalpatroon is een klassieker morele paniek." },
      { domain: "business", icon: "💼", text: "Morele paniek rond videogames en geweld leidde tot regelgeving, terwijl wetenschappelijk bewijs voor een direct verband zwak is." },
      { domain: "science", icon: "🔬", text: "Stanley Cohen beschreef morele paniek voor het eerst in 1972 bij zijn studie van de 'Mods and Rockers'-rellen in Groot-Brittannië." }
    ],
    prerequisites: ["availability-heuristic", "illusory-truth-effect"],
    unlocks: ["overton-window"],
    exercises: [
      { type: "multipleChoice", question: "Wat zijn de typische kenmerken van een morele paniek?", options: ["Rationeel bewijs voor een echte dreiging", "Overdreven reactie, een aangewezen vijand, media-versterking, en uiteindelijk verdwijning van de paniek", "Een langdurige wetenschappelijke consensus", "Democratische besluitvorming over een probleem"], correctIndex: 1, explanation: "Morele paniek kenmerkt zich door disproportionaliteit, een 'folk devil' (vijand), mediaversterking en vaak tijdelijkheid." }
    ],
    creativePrompt: "Denk aan een recente publieke angst of ophef. Voldeed die aan de kenmerken van morele paniek? Was de dreiging reëel of overdreven?",
    aiHelperPrompts: ["Hoe onderscheid ik een legitieme sociale zorg van morele paniek?", "Welke rol speelt sociale media in moderne morele paniek?", "Hoe kunnen we als samenleving beter omgaan met nieuwe technologie zonder in morele paniek te vervallen?"]
  },
  {
    id: "homophily",
    title: "Gelijksoortigheidsprincipe",
    difficulty: 1,
    emoji: "🪞",
    academicCategory: "Sociologie",
    skillCategory: "Beter Samenwerken",
    tags: ["Sociologie", "Netwerken", "Diversiteit", "Beter Samenwerken"],
    definition: "De neiging van mensen om zich te associëren met en te verbinden aan anderen die op hen lijken. Gelijke trekken gelijke aan — in opleiding, etniciteit, politieke overtuiging, leeftijd en waarden.",
    abstractExample: "Sociale netwerken zijn zelden willekeurig. Mensen hebben gemiddeld vaker vrienden met dezelfde politieke overtuiging, achtergrond en opleiding. Dit creëert homogene 'bubbels'.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Onderzoek toont dat de meeste mensen vijf beste vrienden hebben die op hen lijken qua opleiding, politieke overtuiging en etniciteit." },
      { domain: "business", icon: "💼", text: "Recruiters kiezen onbewust kandidaten die op hen lijken — dit ondermijnt diversiteit en versterkt homogeniteit in teams." },
      { domain: "science", icon: "🔬", text: "McPherson, Smith-Lovin & Cook toonden in 2001 aan dat homofily de sterkste structurerende kracht in sociale netwerken is." }
    ],
    prerequisites: ["ingroup-bias", "confirmation-bias"],
    unlocks: ["social-capital"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het risico van sterke homofily in informatienetwerken?", options: ["Meer diversiteit van meningen", "Echokamers en versterking van bestaande overtuigingen", "Snellere informatieverspreiding", "Betere besluitvorming"], correctIndex: 1, explanation: "Als we alleen contact hebben met gelijkgestemden, krijgen we alleen informatie die onze eigen overtuigingen bevestigt." }
    ],
    creativePrompt: "Analyseer je vijf nauwste sociale relaties. Hoe gelijkend zijn ze op jou qua opleiding, politieke overtuiging en achtergrond? Wat is de impact van deze homogeniteit?",
    aiHelperPrompts: ["Hoe kan ik bewust diversere sociale verbindingen opbouwen?", "Is homofily altijd negatief of heeft het ook voordelen?", "Hoe hangt homofily samen met de filterbubbel online?"]
  },
  {
    id: "diffusion-of-responsibility",
    title: "Verspreiding van Verantwoordelijkheid",
    difficulty: 2,
    emoji: "👥",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Beter Samenwerken",
    tags: ["Sociale Psychologie", "Groepen", "Verantwoordelijkheid", "Beter Samenwerken"],
    definition: "Hoe meer mensen aanwezig zijn in een noodsituatie, hoe minder ieder individu zich persoonlijk verantwoordelijk voelt om in te grijpen. Aanwezigheid van anderen vermindert individuele actie.",
    abstractExample: "In een grote menigte valt iemand flauw. Iedereen wacht totdat iemand anders helpt — want er zijn zoveel mensen, zeker één zal wel ingrijpen. Niemand doet iets. In een kleine groep helpt iemand direct.",
    examples: [
      { domain: "daily", icon: "🏠", text: "In een druk bezet kantoor zijn de keuken en badkamer het vuilste — iedereen denkt dat een ander het wel schoonmaakt." },
      { domain: "business", icon: "💼", text: "In grote vergaderingen neemt niemand verantwoordelijkheid voor een slecht besluit — iedereen dacht dat iemand anders het zou tegenhouden." },
      { domain: "science", icon: "🔬", text: "Latané & Darley (1968) ontdekten het fenomeen na de Kitty Genovese-zaak, waarbij tientallen buren beweren getuige te zijn geweest maar niemand ingreep." }
    ],
    prerequisites: ["bystander-effect"],
    unlocks: ["social-loafing"],
    exercises: [
      { type: "multipleChoice", question: "Hoe neutraliseer je verspreiding van verantwoordelijkheid in een noodgeval?", options: ["Wachten tot iemand anders ingrijpt", "Een specifiek persoon aanwijzen ('u in de rode jas, bel 112')", "Harder roepen", "Meer mensen verzamelen"], correctIndex: 1, explanation: "Specifieke aanwijzing doorbreekt de diffusie — een benoemde persoon kan de verantwoordelijkheid niet meer aan anderen overlaten." }
    ],
    creativePrompt: "Beschrijf een situatie op je werk of in je leven waar een probleem lang bleef bestaan omdat iedereen dacht dat iemand anders het zou aanpakken. Hoe had dit voorkomen kunnen worden?",
    aiHelperPrompts: ["Hoe ontwerp ik projectteams zodat verantwoordelijkheden duidelijk zijn?", "Wanneer is dit effect het sterkst aanwezig?", "Hoe hangt dit samen met sociaal luieren?"]
  },
  {
    id: "relative-deprivation",
    title: "Relatieve Deprivatie",
    difficulty: 2,
    emoji: "😤",
    academicCategory: "Sociologie",
    skillCategory: "Beter Redeneren",
    tags: ["Sociologie", "Welzijn", "Vergelijking", "Beter Redeneren"],
    definition: "Het gevoel van ontevredenheid dat ontstaat niet door absolute armoede maar door vergelijking met anderen. We meten onze welvaart aan de hand van de omgeving, niet aan absolute standaarden.",
    abstractExample: "Iemand die €60.000 verdient in een buurt van miljonairs voelt zich arm. Diezelfde persoon in een armere buurt voelt zich welvarend. Het inkomen is gelijk; de referentiegroep verschilt.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Na een salarisverhoging voel je je slechter wanneer je hoort dat een collega een grotere verhoging kreeg — ook al verdien je meer dan ervoor." },
      { domain: "business", icon: "💼", text: "Onderzoek toont dat tevredenheid over salaris meer bepaald wordt door de positie ten opzichte van collega's dan door het absolute bedrag." },
      { domain: "science", icon: "🔬", text: "Stouffer et al. beschreven het fenomeen in 1949 bij onderzoek naar tevredenheid van soldaten: promotieontevredenheid was groter in eenheden met meer promoties." }
    ],
    prerequisites: ["loss-aversion", "social-proof"],
    unlocks: ["matthew-effect"],
    exercises: [
      { type: "multipleChoice", question: "Welke referentiegroep beïnvloedt relatieve deprivatie het meest?", options: ["Mensen die veel slechter af zijn", "Mensen die net iets beter of vergelijkbaar af zijn", "Historische generaties", "Mensen in andere landen"], correctIndex: 1, explanation: "We vergelijken ons het meest met mensen in onze directe omgeving — collega's, buren, vrienden — niet met mensen ver van ons bed." }
    ],
    creativePrompt: "Met wie vergelijk jij jezelf het meest (salaris, succes, bezit)? Hoe beïnvloedt deze referentiegroep jouw tevredenheid? Wat zou een andere referentiegroep veranderen?",
    aiHelperPrompts: ["Hoe kan ik mijn referentiegroep bewust kiezen voor meer tevredenheid?", "Is relatieve deprivatie een politieke of persoonlijke kwestie?", "Hoe hangt dit samen met de hedonic treadmill?"]
  },
  {
    id: "labeling-theory",
    title: "Labelingtheorie",
    difficulty: 2,
    emoji: "🏷️",
    academicCategory: "Sociologie",
    skillCategory: "Beter Redeneren",
    tags: ["Sociologie", "Identiteit", "Afwijking", "Beter Redeneren"],
    definition: "Wanneer mensen gelabeld worden als afwijkend, internaliseren ze dit label en gedragen ze zich er naar. Het label wordt een self-fulfilling prophecy. Sociale reactie op gedrag is medebepalend voor toekomstig gedrag.",
    abstractExample: "Een kind dat op school als 'probleemkind' wordt bestempeld, gedraagt zich steeds meer als een probleemkind — niet omdat het 'slecht' is, maar omdat de sociale omgeving dat verwacht en versterkt.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Iemand die na een incident 'crimineel' wordt gelabeld, ondervindt dat dit label sociale uitsluiting veroorzaakt, wat de kans op herhaling vergroot." },
      { domain: "business", icon: "💼", text: "Medewerkers die als 'high potential' worden gelabeld, groeien sneller — deels door meer aandacht en kansen die ze krijgen." },
      { domain: "science", icon: "🔬", text: "Howard Becker beschreef in 'Outsiders' (1963) hoe deviantie een sociaal geconstrueerd label is, niet een intrinsieke eigenschap." }
    ],
    prerequisites: ["social-proof", "self-serving-bias"],
    unlocks: ["normalization-deviance"],
    exercises: [
      { type: "multipleChoice", question: "Wat impliceert de labelingtheorie voor de aanpak van recidive?", options: ["Strenger straffen", "Labels verwijderen en re-integratie bevorderen", "Meer gevangenisstraf", "Labels zijn onschadelijk"], correctIndex: 1, explanation: "Als labels gedrag beïnvloeden, helpt het verwijderen van stigma en het bieden van nieuwe identiteiten bij het doorbreken van criminele patronen." }
    ],
    creativePrompt: "Denk aan een label dat jij ooit op jezelf of een ander hebt geplakt. Hoe beïnvloedde dit label het gedrag? Was het label eerlijk of te simpel?",
    aiHelperPrompts: ["Hoe kan ik voorkomen dat ik anderen onterecht labelt?", "Welke positieve labels kunnen gedrag constructief beïnvloeden?", "Hoe hangt de labelingtheorie samen met de zelfvervullende profetie?"]
  },
  {
    id: "social-loafing",
    title: "Sociaal Luieren",
    difficulty: 1,
    emoji: "😴",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Beter Samenwerken",
    tags: ["Sociale Psychologie", "Groepen", "Prestatie", "Beter Samenwerken"],
    definition: "Individuen leveren minder inspanning wanneer ze werken als deel van een groep dan wanneer ze individueel werken. Anonimiteit in een groep vermindert persoonlijk accountability.",
    abstractExample: "Bij touwtrekken trekt een groep van acht mensen niet acht keer zo hard als één persoon — elke persoon levert gemiddeld minder kracht dan wanneer ze alleen trekken.",
    examples: [
      { domain: "daily", icon: "🏠", text: "In groepsprojecten op school doen sommige studenten minder, wetende dat het groepsgemiddelde hun individuele bijdrage maskeert." },
      { domain: "business", icon: "💼", text: "In grote vergaderingen zijn bijdragen van individuen minder specifiek en minder eigenaardig dan in een-op-een gesprekken." },
      { domain: "science", icon: "🔬", text: "Ringelmann ontdekte in 1913 als eerste dat de individuele inspanning bij touwtrekken daalt naarmate de groep groter wordt." }
    ],
    prerequisites: ["diffusion-of-responsibility"],
    unlocks: ["abilene-paradox"],
    exercises: [
      { type: "multipleChoice", question: "Hoe verminder je sociaal luieren in teamprojecten?", options: ["De groep groter maken", "Individuele bijdragen zichtbaar en meetbaar maken", "Niemand verantwoordelijk maken", "Meer groepsleden aannemen"], correctIndex: 1, explanation: "Zichtbaarheid van individuele bijdragen heft de anonimiteit op die sociaal luieren mogelijk maakt." }
    ],
    creativePrompt: "Denk aan een groepsproject uit je verleden. Wie deed hoeveel? Was er sprake van sociaal luieren? Hoe had de groepsstructuur dit kunnen voorkomen?",
    aiHelperPrompts: ["Hoe ontwerp ik samenwerking die sociaal luieren minimaliseert?", "Wanneer werkt anonimiteit positief in groepen?", "Hoe hangt dit samen met de verspreiding van verantwoordelijkheid?"]
  },
  {
    id: "normalization-deviance",
    title: "Normalisering van Afwijking",
    difficulty: 3,
    emoji: "⚠️",
    academicCategory: "Organisatiesociologie",
    skillCategory: "Betere Beslissingen",
    tags: ["Organisatiesociologie", "Veiligheid", "Risico", "Betere Beslissingen"],
    definition: "Wanneer kleine afwijkingen van veiligheidsnormen geen onmiddellijke gevolgen hebben, worden ze geleidelijk als normaal geaccepteerd — totdat een catastrofale mislukking optreedt.",
    abstractExample: "Een team stelt vast dat er kleine scheurtjes in een onderdeel zijn, maar het onderdeel houdt het steeds. Na tientallen vluchten wordt dit als 'normaal' beschouwd — totdat het onderdeel fataal faalt.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Autobanden met iets te lage spanning rijden de eerste honderd keer prima. Men stopt het controleren — totdat er een klapband is." },
      { domain: "business", icon: "💼", text: "Kleine veiligheidsprotocollen worden genegeerd omdat ze 'altijd goed gaan'. Tot er een ongeluk is." },
      { domain: "science", icon: "🔬", text: "Diane Vaughan beschreef normalisering van afwijking als de kernverklaring voor de Challenger-ramp (1986) in haar boek 'The Challenger Launch Decision'." }
    ],
    prerequisites: ["hindsight-bias", "confirmation-bias"],
    unlocks: ["broken-windows"],
    exercises: [
      { type: "multipleChoice", question: "Waarom is normalisering van afwijking zo gevaarlijk in veiligheidskritische systemen?", options: ["Kleine afwijkingen zijn altijd onschadelijk", "Ze creëren een valse zekerheid die grote risico's maskeert", "Veiligheidsnormen zijn altijd te streng", "Afwijkingen worden altijd opgemerkt"], correctIndex: 1, explanation: "Elke 'succesvolle' overtreding zonder gevolgen versterkt de overtuiging dat de norm onnodig was, waardoor de risicograad geleidelijk stijgt." }
    ],
    creativePrompt: "Zoek in je dagelijks leven of werk drie kleine 'afwijkingen' die je accepteert omdat ze nooit direct problemen gaven. Wat is het maximale risico als ze tegelijk fout gaan?",
    aiHelperPrompts: ["Hoe bouw ik een organisatiecultuur die normalisering van afwijking tegengaat?", "Welke bekende rampen werden veroorzaakt door normalisering van afwijking?", "Hoe hangt dit samen met de gebroken-ramen-theorie?"]
  },

  // ── BATCH 6: WETENSCHAPSFILOSOFIE & EPISTEMOLOGIE ─────────────
  {
    id: "replication-crisis",
    title: "Replicatiecrisis",
    difficulty: 2,
    emoji: "🔬",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Kritisch Denken",
    tags: ["Wetenschapsfilosofie", "Wetenschap", "Methodologie", "Kritisch Denken"],
    definition: "De ontdekking dat veel gepubliceerde wetenschappelijke bevindingen niet reproduceerbaar zijn door onafhankelijke onderzoekers. Factoren als publicatiebias, kleine steekproeven en p-hacking dragen bij.",
    abstractExample: "Slechts 36% van de gepubliceerde psychologiestudies gaf hetzelfde resultaat bij herhaling (Open Science Collaboration, 2015). Veel klassieke bevindingen bleken niet te repliceren.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Populair wetenschappelijk nieuws over 'bewezen' effecten van koffie, wijn of bepaalde diëten keert vaak terug als 'toch niet bewezen'." },
      { domain: "business", icon: "💼", text: "Managementinterventies gebaseerd op psychologieonderzoek (sommige priming-experimenten) bleken in de praktijk niet te werken." },
      { domain: "science", icon: "🔬", text: "De replicatiecrisis leidde tot open science beweging: pre-registratie, open data en grotere steekproeven als structurele oplossingen." }
    ],
    prerequisites: ["falsification", "selection-bias"],
    unlocks: ["publication-bias"],
    exercises: [
      { type: "multipleChoice", question: "Wat is een van de oorzaken van de replicatiecrisis?", options: ["Wetenschappers liegen systematisch", "Publicatiebias: positieve resultaten worden vaker gepubliceerd dan negatieve", "Wetenschap is onbetrouwbaar", "Replicatie is onmogelijk"], correctIndex: 1, explanation: "Tijdschriften publiceren liever positieve resultaten; negatieve resultaten verdwijnen in een la, waardoor het gedrukte beeld vertekend is." }
    ],
    creativePrompt: "Zoek een wetenschappelijk 'feit' dat je altijd voor waar aannam. Controleer of het gebaseerd is op gerepliceerd onderzoek of op een enkele studie.",
    aiHelperPrompts: ["Hoe kan ik als leek beoordelen of wetenschappelijk nieuws betrouwbaar is?", "Wat is pre-registratie van studies en waarom helpt het?", "Welke vakgebieden hebben het meeste last van de replicatiecrisis?"]
  },
  {
    id: "publication-bias",
    title: "Publicatiebias",
    difficulty: 2,
    emoji: "📰",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Kritisch Denken",
    tags: ["Wetenschapsfilosofie", "Statistiek", "Methodologie", "Kritisch Denken"],
    definition: "De neiging van wetenschappelijke tijdschriften om studies met positieve, statistisch significante resultaten vaker te publiceren dan studies met negatieve of nulresultaten. Het gepubliceerde beeld is systematisch te positief.",
    abstractExample: "Stel: 20 onderzoeken naar een medicijn. Vijf vinden een positief effect (door kans); vijftien vinden niets. Alleen de vijf positieve worden gepubliceerd. Het lijkt of het medicijn werkt.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Dieetonderzoek dat werkt haalt het nieuws; het grote deel dat niet werkt wordt niet gepubliceerd of vergeten." },
      { domain: "business", icon: "💼", text: "Positieve casestudies van managementstrategieën worden gepubliceerd; de vele mislukkingen zijn minder zichtbaar." },
      { domain: "science", icon: "🔬", text: "Meta-analyses correcting for publication bias via funnel plots tonen systematisch dat effectgroottes kleiner zijn dan de gepubliceerde literatuur suggereert." }
    ],
    prerequisites: ["selection-bias", "replication-crisis"],
    unlocks: ["multiple-comparisons"],
    exercises: [
      { type: "multipleChoice", question: "Wat is een 'funnel plot' in meta-analyse?", options: ["Een grafiek van publicatieaantallen per jaar", "Een visualisatie die publicatiebias zichtbaar maakt door asymmetrie in studieresultaten", "Een statistisch toets voor effect", "Een soort barplot"], correctIndex: 1, explanation: "In een funnel plot zonder bias zijn kleine en grote studies symmetrisch verdeeld rond het ware effect; asymmetrie wijst op bias." }
    ],
    creativePrompt: "Zoek een terrein waar je veel positieve berichten hoort (diëten, investeringen, therapieën). Hoeveel negatieve resultaten zijn er? Is het beeld compleet?",
    aiHelperPrompts: ["Hoe kan ik publicatiebias detecteren bij het lezen van onderzoek?", "Wat doet pre-registratie om publicatiebias te verminderen?", "Is publicatiebias bewust of onbewust?"]
  },
  {
    id: "demarcation-problem",
    title: "Afbakeningsprobleem",
    difficulty: 3,
    emoji: "🔭",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Kritisch Denken",
    tags: ["Wetenschapsfilosofie", "Wetenschap", "Pseudowetenschap", "Kritisch Denken"],
    definition: "De filosofische vraag hoe we wetenschap kunnen onderscheiden van pseudowetenschap, metafysica en andere vormen van kennis. Er is geen scherpe grens die breed geaccepteerd is.",
    abstractExample: "Is astrologie wetenschap? Is de evolutietheorie te falsificeren? Is Freudiaanse psychoanalyse wetenschappelijk? Het afbakeningsprobleem vraagt naar de criteria voor 'echte wetenschap'.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Homeopathie promoot zichzelf als wetenschap maar voldoet niet aan de criteria van herhaalbaarheid en falsificeerbaarheid." },
      { domain: "business", icon: "💼", text: "Bedrijven die wetenschappelijke taal gebruiken voor onbewezen claims maken gebruik van de vage grens tussen wetenschap en pseudowetenschap." },
      { domain: "science", icon: "🔬", text: "Karl Popper stelde falsificeerbaarheid voor als demarkatiecriterium; Lakatos en Kuhn boden complexere alternatieven." }
    ],
    prerequisites: ["falsification", "scientific-method"],
    unlocks: ["inference-to-best-explanation"],
    exercises: [
      { type: "multipleChoice", question: "Waarom is Poppers falsificeerbaarheidscriterium niet volledig adequaat?", options: ["Het is correct en volledig", "Sommige wetenschappelijke theorieën zijn technisch niet falsificeerbaar maar toch wetenschappelijk", "Falsificatie is onmogelijk", "Popper was geen filosoof"], correctIndex: 1, explanation: "Evolutietheorie, kosmologie en kwantummechanica zijn in sommige opzichten moeilijk falsificeerbaar maar zijn duidelijk wetenschappelijk van karakter." }
    ],
    creativePrompt: "Kies een claim (bv. 'multivitamines verbeteren gezondheid', 'astrologie klopt'). Stel de vraag: is dit wetenschappelijk? Welke criteria gebruik je?",
    aiHelperPrompts: ["Hoe herken ik pseudowetenschap in de media?", "Waarom is het afbakeningsprobleem filosofisch zo lastig?", "Welke criteria zijn het meest bruikbaar voor niet-wetenschappers?"]
  },
  {
    id: "inference-to-best-explanation",
    title: "Redeneren naar Beste Verklaring",
    difficulty: 2,
    emoji: "🕵️",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Beter Redeneren",
    tags: ["Wetenschapsfilosofie", "Logica", "Redeneren", "Beter Redeneren"],
    definition: "We kiezen de hypothese die, als ze waar is, het bestaande bewijs het beste verklaart. Ook wel 'abductieve redenering' of 'abductie' — redeneren naar de meest plausibele verklaring.",
    abstractExample: "Je komt thuis en je hond zit bij zijn lege bakje te huilen. De beste verklaring: hij heeft honger en wil eten. Er zijn andere mogelijkheden, maar dit verklaart het bewijs het eenvoudigst en volledigst.",
    examples: [
      { domain: "daily", icon: "🏠", text: "De dokter ziet symptomen (koorts, hoest, vermoeidheid) en concludeert 'waarschijnlijk griep' — de beste verklaring voor het patroon." },
      { domain: "business", icon: "💼", text: "Een bedrijf ziet verkopen dalen en klachten stijgen na een productupdating: de beste verklaring is een probleem in de update." },
      { domain: "science", icon: "🔬", text: "Darwin's evolutietheorie was oorspronkelijk een abductieve gevolgtrekking: deze theorie verklaart de variatie in soorten het best." }
    ],
    prerequisites: ["abduction", "scientific-method"],
    unlocks: ["occams-razor"],
    exercises: [
      { type: "multipleChoice", question: "Wat onderscheidt abductie van deductie?", options: ["Abductie geeft zekere conclusies; deductie niet", "Deductie trekt zekere conclusies uit premissen; abductie kiest de meest plausibele verklaring voor data", "Ze zijn identiek", "Abductie is altijd fout"], correctIndex: 1, explanation: "Deductie garandeert conclusies als premissen waar zijn. Abductie selecteert de beste verklaring — plausibel maar niet zeker." }
    ],
    creativePrompt: "Beschrijf een probleem of situatie waarbij je 'op zoek was naar de waarheid'. Welke verklaringen overwoog je? Welke koos je en waarom?",
    aiHelperPrompts: ["Hoe verhoudt abductie zich tot Occams scheermes?", "Wanneer is redeneren naar beste verklaring riskant?", "Hoe gebruiken detectives en wetenschappers abductie?"]
  },
  {
    id: "underdetermination",
    title: "Onderbepaling",
    difficulty: 3,
    emoji: "🔀",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Kritisch Denken",
    tags: ["Wetenschapsfilosofie", "Wetenschap", "Epistemologie", "Kritisch Denken"],
    definition: "Bewijzen zijn altijd compatibel met meerdere concurrerende theorieën. Data bepalen niet uniek welke theorie juist is — er zijn altijd alternatieven die hetzelfde bewijs verklaren.",
    abstractExample: "Alle meetresultaten van het sterrenstelsel zijn compatibel met Newton's zwaartekrachtswet én met Einsteins relativiteitstheorie (voor normale situaties). Het bewijs 'onderbepalt' de theorie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een arts ziet dezelfde symptomen bij tien patiënten maar vijf hebben ziekte A, vijf hebben ziekte B. De symptomen bepalen de diagnose niet uniek." },
      { domain: "business", icon: "💼", text: "Dezelfde verkoopdaling kan verklaard worden door economische recessie, slechte marketing of productproblemen — de data sluiten geen van de theorieën uit." },
      { domain: "science", icon: "🔬", text: "Quine-Duhem-stelling: bij een experiment test je nooit één theorie maar altijd een combinatie van theorieën en hulphypothesen." }
    ],
    prerequisites: ["falsification", "demarcation-problem"],
    unlocks: ["principle-of-charity"],
    exercises: [
      { type: "multipleChoice", question: "Wat betekent onderbepaling voor wetenschappelijke zekerheid?", options: ["Wetenschap is onmogelijk", "Zelfs bij bewijs zijn er altijd concurrerende theorieën die hetzelfde verklaren", "Alle theorieën zijn gelijkwaardig", "Meer bewijs elimineert alle alternatieven"], correctIndex: 1, explanation: "Onderbepaling betekent dat bewijs altijd meerdere theorieën ondersteunt — wetenschappelijke keuze vraagt ook om eenvoud, coherentie en voorspellingskracht." }
    ],
    creativePrompt: "Neem een overtuiging die je stevig houdt. Bedenk drie alternatieve verklaringen voor hetzelfde bewijs. Hoe sterk is jouw favoriete verklaring echt?",
    aiHelperPrompts: ["Hoe gaan wetenschappers om met onderbepaling bij het kiezen van theorieën?", "Maakt onderbepaling realisme onhoudbaar?", "Hoe hangt dit samen met Occams scheermes?"]
  },
  {
    id: "principle-of-charity",
    title: "Liefdadigheidsprincipe",
    difficulty: 1,
    emoji: "🫱",
    academicCategory: "Filosofie",
    skillCategory: "Beter Communiceren",
    tags: ["Filosofie", "Debat", "Communicatie", "Beter Communiceren", "Argumenteren"],
    definition: "Interpreteer het argument van de ander in zijn sterkst mogelijke vorm voordat je het beantwoordt. Dit leidt tot eerlijker debat en betere begrip van het tegenstandpunt.",
    abstractExample: "Als iemand een zwak geformuleerd argument geeft, zoek dan de sterkste interpretatie voordat je reageert. Zeg: 'Ik begrijp jouw punt als X, klopt dat?' — en debatteer dan met die sterkste versie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "In een discussie met je partner zoek je de beste interpretatie van hun klacht in plaats van het zwakste punt aan te vallen." },
      { domain: "business", icon: "💼", text: "Een goede advocaat of debater begrijpt het tegenstandpunt zo goed dat ze het zelf kunnen verdedigen voordat ze het weerleggen." },
      { domain: "science", icon: "🔬", text: "Het liefdadigheidsprincipe is de tegenhanger van de 'steel man' versus 'straw man' aanpak in argumentatie." }
    ],
    prerequisites: ["straw-man-fallacy"],
    unlocks: ["epistemic-humility"],
    exercises: [
      { type: "multipleChoice", question: "Waarom is het liefdadigheidsprincipe nuttig in debat?", options: ["Het maakt je verzwakken van het tegenstandpunt gemakkelijker", "Het leidt tot eerlijker debat en sterker begrip van het tegenstandpunt", "Het maakt je argument altijd winnen", "Het is een teken van zwakte"], correctIndex: 1, explanation: "Door het sterkste argument te weerleggen, weerleg je het tegenstandpunt echt — niet slechts een karikateur ervan." }
    ],
    creativePrompt: "Kies een mening die je niet deelt. Schrijf het sterkst mogelijke argument voor die mening. Hoe heeft dit je begrip van het tegenstandpunt veranderd?",
    aiHelperPrompts: ["Hoe pas ik het liefdadigheidsprincipe toe in sociale media-discussies?", "Wat is het verschil tussen een steel man en een straw man?", "Wanneer is het liefdadigheidsprincipe niet van toepassing?"]
  },
  {
    id: "epistemic-closure",
    title: "Epistemische Afsluiting",
    difficulty: 3,
    emoji: "🔒",
    academicCategory: "Epistemologie",
    skillCategory: "Kritisch Denken",
    tags: ["Epistemologie", "Filosofie", "Kennisleer", "Kritisch Denken"],
    definition: "Een gesloten kennissysteem waarin alle nieuwe informatie wordt geïnterpreteerd als bevestiging van bestaande overtuigingen. Tegenbewijzen worden weggeredeneerd of gereïnterpreteerd.",
    abstractExample: "Een samenzweringsdenker gelooft in een complot. Bewijs voor het complot bevestigt het. Afwezigheid van bewijs is ook bewijs: 'ze verbergen het'. Tegenbewijzen zijn 'plantingen'. Het systeem is gesloten.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Iemand die gelooft in een medisch complot beschouwt afwijkende wetenschappers als betalend door de farmaceutische industrie, waardoor elke weerlegging in het systeem past." },
      { domain: "business", icon: "💼", text: "Een manager die overtuigd is van het succes van een strategie interpreteert tegenvallers als tijdelijke obstakels in plaats van bewijs dat de strategie faalt." },
      { domain: "science", icon: "🔬", text: "Popper beschreef dit als het kenmerk van pseudowetenschap: een theorie die altijd bevestigd wordt en nooit weerlegd kan worden, is informatieloos." }
    ],
    prerequisites: ["confirmation-bias", "falsification"],
    unlocks: ["epistemic-humility"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het kenmerk van epistemische afsluiting?", options: ["Open houding tegenover nieuwe informatie", "Alle informatie — inclusief tegenbewijzen — past in het bestaande systeem", "Verandering van overtuiging bij nieuw bewijs", "Systematisch zoeken naar weerlegging"], correctIndex: 1, explanation: "Epistemische afsluiting is wanneer een overtuiging principieel niet meer weerlegbaar is — elk bewijs wordt geabsorbeerd als bevestiging." }
    ],
    creativePrompt: "Identificeer een overtuiging van jezelf die je moeilijk kunt loslaten. Welk bewijs zou jou écht van mening doen veranderen? Als je dat niet kunt noemen, is de overtuiging mogelijk epistemisch gesloten.",
    aiHelperPrompts: ["Hoe herken ik epistemische afsluiting bij mezelf?", "Hoe verschilt gezond scepticisme van epistemische afsluiting?", "Hoe ga ik in gesprek met iemand met een gesloten overtuigingssysteem?"]
  },
  {
    id: "theory-ladenness",
    title: "Theoriebeladenheid",
    difficulty: 3,
    emoji: "🔭",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Kritisch Denken",
    tags: ["Wetenschapsfilosofie", "Wetenschap", "Waarneming", "Kritisch Denken"],
    definition: "Waarnemingen zijn altijd gekleurd door de theoretische achtergrond van de waarnemer. Er bestaat geen 'onschuldige' observatie — wat je ziet, is deels wat je al gelooft.",
    abstractExample: "Een arts en een leek kijken naar een röntgenfoto. De arts 'ziet' een tumor; de leek ziet grijze vlekken. Dezelfde retinale stimulatie, verschillende waarnemingen door verschillende theoretische achtergronden.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een expert ziet een schaakbord heel anders dan een beginner — de theoretische kennis structureert de waarneming." },
      { domain: "business", icon: "💼", text: "Een econoom en een socioloog bekijken dezelfde arbeidsmarktdata maar 'zien' heel verschillende problemen en patronen." },
      { domain: "science", icon: "🔬", text: "Norwood Hanson beschreef in 'Patterns of Discovery' (1958) hoe Tycho Brahe en Copernicus dezelfde zonsopgang 'zagen' maar verschillende dingen waarnamen." }
    ],
    prerequisites: ["confirmation-bias", "scientific-method"],
    unlocks: ["underdetermination"],
    exercises: [
      { type: "multipleChoice", question: "Wat impliceert theoriebeladenheid voor objectiviteit in wetenschap?", options: ["Objectiviteit is onmogelijk", "Pure, theorievrije observatie bestaat niet maar intersubjectiviteit en kritische toetsing compenseren dit", "Wetenschap is puur subjectief", "Theorieën bepalen niet wat we zien"], correctIndex: 1, explanation: "Geen enkel waarnemend subject is theorievrij, maar wetenschappelijke methoden bouwen controles in om theoriebeladenheid te compenseren." }
    ],
    creativePrompt: "Kies een domein waar je expertise hebt. Wat 'zie' je nu dat je tien jaar geleden niet zag in dezelfde situaties? Hoe heeft kennis je waarneming veranderd?",
    aiHelperPrompts: ["Hoe kan wetenschap objectief zijn als observaties theoriebeladen zijn?", "Hoe verschilt theoriebeladenheid van subjectiviteit?", "Welke rol speelt training in het veranderen van waarneming?"]
  },
  {
    id: "confirmation-holism",
    title: "Bevestigingsholisme",
    difficulty: 3,
    emoji: "🌐",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Kritisch Denken",
    tags: ["Wetenschapsfilosofie", "Wetenschap", "Epistemologie", "Kritisch Denken"],
    definition: "Wetenschappelijke statements worden niet afzonderlijk getest maar als deel van een netwerk van overtuigingen. Een gefaalde voorspelling kan aan elke schakel worden toegeschreven.",
    abstractExample: "Een experiment faalt. Is de theorie fout? Of de meetinstrumenten? Of de randcondities? Of de mathematische modellen? Je test nooit één stelling maar altijd een heel stelsel tegelijk.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Als je recept mislukt, is het de fout van het recept, de kwaliteit van ingrediënten, de oven of jouw techniek? Je weet het niet zeker." },
      { domain: "business", icon: "💼", text: "Een marketingcampagne faalt. Was het de boodschap, het kanaal, het product, de timing, of de concurrentie? Elke schakel kan de oorzaak zijn." },
      { domain: "science", icon: "🔬", text: "Duhem (1914) en Quine (1951) formuleerden de these dat theorieën het empirische bewijs altijd als netwerk confronteren, niet stuk voor stuk." }
    ],
    prerequisites: ["falsification", "underdetermination"],
    unlocks: ["demarcation-problem"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de implicatie van bevestigingsholisme voor falsificatie?", options: ["Falsificatie is altijd eenvoudig", "Een mislukt experiment kan toegeschreven worden aan hulphypothesen, niet aan de kerntheorie", "Falsificatie is onmogelijk", "Holisme versterkt falsificatie"], correctIndex: 1, explanation: "Omdat je altijd een netwerk test, kan een anomalie de kerntheorie intact laten door een hulphypothese aan te passen." }
    ],
    creativePrompt: "Beschrijf een situatie waarbij je plan faalde. Maak een lijst van alle mogelijke oorzaken. Hoe besloot je welke schakel de oorzaak was?",
    aiHelperPrompts: ["Hoe gaan wetenschappers om met anomalieën zonder hun theorie op te geven?", "Is bevestigingsholisme een probleem voor wetenschappelijke kennis?", "Hoe hangt dit samen met de Quine-Duhem-these?"]
  },
  {
    id: "instrumentalism",
    title: "Instrumentalisme",
    difficulty: 3,
    emoji: "🔧",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Kritisch Denken",
    tags: ["Wetenschapsfilosofie", "Wetenschap", "Filosofie", "Kritisch Denken"],
    definition: "De opvatting dat wetenschappelijke theorieën niet letterlijk waar hoeven te zijn, maar slechts nuttige instrumenten voor voorspelling en controle. Tegenover wetenschappelijk realisme: theorieën beschrijven werkelijkheid.",
    abstractExample: "Een instrumentalist zegt over de kwantummechanica: 'Ik hoef niet te geloven dat elektronen echt bestaan — het is een model dat perfect voorspelt.' Een realist zegt: 'Elektronen zijn echt.'",
    examples: [
      { domain: "daily", icon: "🏠", text: "Gebruik van GPS werkt perfect zonder te begrijpen dat de relativiteitstheorie 'echt' is — het instrument werkt, de filosofie is onbelangrijk." },
      { domain: "business", icon: "💼", text: "Economische modellen worden als instrumenten gebruikt om beleidseffecten te voorspellen, ongeacht of ze de economische realiteit 'werkelijk' beschrijven." },
      { domain: "science", icon: "🔬", text: "Niels Bohr hanteerde een instrumentalistische houding tegenover de kwantummechanica: 'Shut up and calculate'." }
    ],
    prerequisites: ["scientific-method", "falsification"],
    unlocks: ["demarcation-problem"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het kernverschil tussen instrumentalisme en realisme?", options: ["Instrumentalisme is altijd correct; realisme niet", "Instrumentalisme ziet theorieën als nuttige instrumenten; realisme als beschrijvingen van werkelijkheid", "Realisme is pragmatischer", "Ze zijn identiek voor de wetenschappelijke praktijk"], correctIndex: 1, explanation: "Instrumentalisme vraagt alleen om voorspellende kracht; realisme vraagt ook om correspondentie met de werkelijkheid." }
    ],
    creativePrompt: "Kies een wetenschappelijke theorie die je gebruikt. Geef je echt om of ze 'echt' is of alleen of ze werkt? Wat verschilt er praktisch voor jou?",
    aiHelperPrompts: ["Wanneer is instrumentalisme een beter standpunt dan realisme?", "Hoe beïnvloedt de instrumentalisme-realisme kwestie hoe we wetenschap financieren?", "Hoe hangt dit samen met het afbakeningsprobleem?"]
  },

  // ── BATCH 7: SYSTEEMDENKEN & COMPLEXITEIT ────────────────────
  {
    id: "emergence",
    title: "Emergentie",
    difficulty: 2,
    emoji: "🌊",
    academicCategory: "Systeemdenken",
    skillCategory: "Beter Redeneren",
    tags: ["Systeemdenken", "Complexiteit", "Organisatie", "Beter Redeneren"],
    definition: "Eigenschappen die ontstaan op het niveau van een systeem maar niet aanwezig zijn in de afzonderlijke onderdelen. Het geheel heeft eigenschappen die niet kunnen worden afgeleid uit de delen.",
    abstractExample: "Water is nat, maar een afzonderlijk watermolecule is niet nat. Nat-zijn is een emergente eigenschap die ontstaat door de collectieve interactie van miljoenen moleculen.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een verkeersopstopping bestaat als patroon, maar geen enkel afzonderlijk voertuig 'is' de file. Het patroon emergeert uit interacties." },
      { domain: "business", icon: "💼", text: "Bedrijfscultuur is een emergent verschijnsel: geen enkel individu draagt de cultuur, maar ze ontstaat uit alle interacties samen." },
      { domain: "science", icon: "🔬", text: "Bewustzijn wordt door velen beschouwd als een emergente eigenschap van neurale netwerken — niet aanwezig in een enkel neuron." }
    ],
    prerequisites: ["feedback-loop", "second-order-effects"],
    unlocks: ["self-organization"],
    exercises: [
      { type: "multipleChoice", question: "Wat is een voorbeeld van emergentie?", options: ["Water bestaat uit waterstof en zuurstof", "Nattigheid als eigenschap van water terwijl moleculen niet nat zijn", "Een auto heeft vier wielen", "Delen zijn de som van het geheel"], correctIndex: 1, explanation: "Nattigheid is een emergente eigenschap van water — aanwezig op het systeemniveau maar afwezig op het moleculaire niveau." }
    ],
    creativePrompt: "Bedenk drie voorbeelden van emergentie in je dagelijks leven — situaties waar het geheel iets heeft dat de delen niet hebben.",
    aiHelperPrompts: ["Is bewustzijn echt emergent of kan het gereduceerd worden tot neuronen?", "Hoe beïnvloedt emergentie ons vermogen om complexe systemen te begrijpen?", "Hoe hangt emergentie samen met zelforganisatie?"]
  },
  {
    id: "tipping-point",
    title: "Kantelpunt",
    difficulty: 2,
    emoji: "⚖️",
    academicCategory: "Systeemdenken",
    skillCategory: "Beter Redeneren",
    tags: ["Systeemdenken", "Complexiteit", "Verandering", "Beter Redeneren"],
    definition: "Het punt waarop een systeem abrupt van één stabiele toestand naar een andere overgaat. Na het kantelpunt versnelt verandering dramatisch en is ze moeilijk te keren.",
    abstractExample: "Water bij 99°C: nog vloeibaar. Bij 100°C: kookt plotseling. De temperatuur steeg langzaam, maar de gedragsverandering is abrupt. Veel sociale en ecologische systemen hebben vergelijkbare drempels.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een geruchtenverspreiding verspreidt langzaam totdat een kritisch punt wordt bereikt — dan verspreidt het zich exponentieel." },
      { domain: "business", icon: "💼", text: "Een merk dat jarenlang leegloopt bereikt een reputatiekantelpunt waarna negatief nieuws viraal gaat en de omzet instort." },
      { domain: "science", icon: "🔬", text: "Klimaatmodellen beschrijven kantelpunten: verlies van poolijs, ontdooiing van permafrost, die klimaatverandering onomkeerbaar versnellen." }
    ],
    prerequisites: ["feedback-loop", "emergence"],
    unlocks: ["path-dependency"],
    exercises: [
      { type: "multipleChoice", question: "Wat maakt kantelpunten gevaarlijk bij complexe systemen?", options: ["Ze zijn altijd zichtbaar van tevoren", "Ze zijn moeilijk te voorspellen en de overgang is snel en moeilijk te keren", "Ze zijn altijd positief", "Ze vertrouwen op lineaire verandering"], correctIndex: 1, explanation: "Kantelpunten zijn verradelijk omdat het systeem lang stabiel lijkt terwijl de verandering onder de oppervlakte groeit, tot abrupte omschakeling." }
    ],
    creativePrompt: "Identificeer een systeem in je leven (relatie, gezondheid, werk, milieu) waarbij je denkt dat er een kantelpunt nadert. Wat zijn de vroege signalen?",
    aiHelperPrompts: ["Hoe herken ik vroege waarschuwingssignalen van een kantelpunt?", "Zijn kantelpunten altijd negatief?", "Hoe hangt dit samen met padafhankelijkheid?"]
  },
  {
    id: "leverage-points",
    title: "Hefboompunten",
    difficulty: 3,
    emoji: "🔧",
    academicCategory: "Systeemdenken",
    skillCategory: "Betere Beslissingen",
    tags: ["Systeemdenken", "Strategie", "Verandering", "Betere Beslissingen"],
    definition: "Plaatsen in een systeem waar een kleine verandering grote effecten teweegbrengt. Donella Meadows identificeerde twaalf hefboompunten, van zwak (getallen veranderen) tot sterk (paradigma's veranderen).",
    abstractExample: "In een schoolsysteem: meer boeken kopen is een zwak hefboompunt. De structuur van examens veranderen is sterker. Het paradigma over wat leren is veranderen is het sterkst.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een kleine verandering in je ochtendroutine kan een dagelijks patroon volledig kantelen — een zwak hefboompunt met groot cumulatief effect." },
      { domain: "business", icon: "💼", text: "Een bedrijf dat zijn beloningssysteem aanpast (incentives) verandert gedrag meer dan regels toevoegen — een sterker hefboompunt." },
      { domain: "science", icon: "🔬", text: "Donella Meadows beschreef in 'Thinking in Systems' (2008) twaalf hefboompunten in oplopende effectiviteit." }
    ],
    prerequisites: ["feedback-loop", "second-order-effects"],
    unlocks: ["emergence"],
    exercises: [
      { type: "multipleChoice", question: "Welk type hefboompunt heeft doorgaans het grootste effect?", options: ["Het aanpassen van getallen (subsidies, tarieven)", "Het veranderen van de structuur van informatiestroom", "Het veranderen van het dominante paradigma", "Het aanpassen van regels"], correctIndex: 2, explanation: "Meadows toonde aan dat het veranderen van het mentale model of paradigma van een systeem het sterkste en moeilijkste hefboompunt is." }
    ],
    creativePrompt: "Kies een systeem dat je wilt veranderen (persoonlijk of professioneel). Identificeer drie mogelijke hefboompunten op verschillende niveaus. Welke is het krachtigst?",
    aiHelperPrompts: ["Hoe identificeer ik hefboompunten in een complex systeem?", "Waarom zijn de sterkste hefboompunten zo moeilijk te gebruiken?", "Hoe hangt dit samen met het vlindereffect?"]
  },
  {
    id: "path-dependency",
    title: "Padafhankelijkheid",
    difficulty: 2,
    emoji: "🛤️",
    academicCategory: "Systeemdenken",
    skillCategory: "Beter Redeneren",
    tags: ["Systeemdenken", "Economie", "Geschiedenis", "Beter Redeneren"],
    definition: "Eerdere beslissingen beperken de huidige keuzemogelijkheden. Historische toevalligheden in vroege keuzes kunnen een systeem voor lange tijd in een suboptimale richting vastzetten.",
    abstractExample: "Het QWERTY-toetsenbord was ontworpen om typewriter-mechanismen te beschermen, niet voor snelheid. Hoewel ergonomischere alternatieven bestaan, is overstappen bijna onmogelijk door het netwerk van gebruikers.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een stad met historisch slecht geplande weginfrastructuur kan die infrastructuur moeilijk vervangen omdat zoveel gebouwen eromheen zijn gebouwd." },
      { domain: "business", icon: "💼", text: "Technologiebedrijven die vroeg kozen voor een bepaalde programmeertaal of architectuur zijn er decennialang aan gebonden door legacy code." },
      { domain: "science", icon: "🔬", text: "David (1985) beschreef QWERTY als het klassieke voorbeeld van padafhankelijkheid in technologie-adoptie." }
    ],
    prerequisites: ["status-quo-bias", "lock-in-effect"],
    unlocks: ["tipping-point"],
    exercises: [
      { type: "multipleChoice", question: "Wat is een ander woord voor een situatie van sterke padafhankelijkheid?", options: ["Optimale situatie", "Lock-in", "Kantelpunt", "Emergentie"], correctIndex: 1, explanation: "Lock-in is een extreme padafhankelijkheid waarbij overstappen naar alternatieven nagenoeg onmogelijk is geworden." }
    ],
    creativePrompt: "Welke vroege beslissingen in jouw leven of werk hebben je 'pad' gezet? Hoe moeilijk was het om van dat pad af te wijken? Waar klopt padafhankelijkheid voor jou?",
    aiHelperPrompts: ["Is padafhankelijkheid altijd slecht of kan het ook stabiliteit bieden?", "Hoe doorbreek je padafhankelijkheid in organisaties?", "Welke technologische lock-ins zijn er vandaag de dag?"]
  },
  {
    id: "lock-in-effect",
    title: "Vergrendeling",
    difficulty: 2,
    emoji: "🔐",
    academicCategory: "Economie",
    skillCategory: "Betere Beslissingen",
    tags: ["Economie", "Strategie", "Technologie", "Betere Beslissingen"],
    definition: "Wanneer gebruikers of bedrijven zo afhankelijk zijn geworden van een product, platform of technologie dat overstappen naar een alternatief te kostbaar is, ook als het alternatief beter is.",
    abstractExample: "Zodra al jouw contacten op één social media platform zitten, is de overstapdrempel enorm — ook als een beter platform bestaat. De netwerkwaarde houdt je gevangen.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Microsoft Office: iedereen gebruikt het, waardoor je het ook moet gebruiken voor compatibiliteit, ook als alternatieven goedkoper zijn." },
      { domain: "business", icon: "💼", text: "Bedrijven die hun data in één cloud-platform opslaan, zijn vatbaar voor prijsverhogingen omdat migratie naar concurrenten duur is." },
      { domain: "science", icon: "🔬", text: "Switching costs (overstapkosten) zijn het economische mechanisme achter lock-in: de som van leer-, compatibiliteits- en verlieskosten." }
    ],
    prerequisites: ["path-dependency", "network-effects"],
    unlocks: ["tragedy-anticommons"],
    exercises: [
      { type: "multipleChoice", question: "Welke strategie helpt bedrijven lock-in te creëren?", options: ["Lage prijzen voor nieuwe klanten", "Hoge overstapkosten door data-eigendom, ecosystemen en gewenning", "Open standaarden en interoperabiliteit", "Goedkopere producten"], correctIndex: 1, explanation: "Lock-in wordt versterkt door gegevensaccumulatie, ecosystem-afhankelijkheden en de hoge kosten van overstap naar een concurrent." }
    ],
    creativePrompt: "Inventariseer drie producten of diensten waarvan je afhankelijk bent. Hoe hoog zijn de overstapkosten? Ben je bewust voor een lock-in gegaan of is het ongemerkt ontstaan?",
    aiHelperPrompts: ["Hoe vermijd ik als consument of bedrijf ongewenste lock-in?", "Wanneer is lock-in voor een bedrijf een strategisch voordeel?", "Hoe hangt vergrendeling samen met patdafhankelijkheid?"]
  },
  {
    id: "self-organization",
    title: "Zelforganisatie",
    difficulty: 2,
    emoji: "🐝",
    academicCategory: "Systeemdenken",
    skillCategory: "Beter Redeneren",
    tags: ["Systeemdenken", "Complexiteit", "Natuur", "Beter Redeneren"],
    definition: "Het proces waarbij orde en structuur spontaan ontstaan in een systeem zonder centrale aansturing. Lokale interacties leiden tot globale patronen zonder dat iemand het patroon ontworpen heeft.",
    abstractExample: "Een bijenkorf heeft geen architect of manager. Tienduizenden bijen volgen simpele regels en produceren samen een perfect geoptimaliseerde structuur. De orde is het gevolg van lokale interacties.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Drukke markten regelen prijzen zonder centrale planning — vraag en aanbod leiden via lokale interacties tot globale evenwichten." },
      { domain: "business", icon: "💼", text: "Open source software-projecten produceren complexe producten zonder hiërarchie: duizenden individuen coördineren via gedeelde normen en code." },
      { domain: "science", icon: "🔬", text: "Murmurations (spreeuwen in vlucht) tonen hoe duizenden vogels via eenvoudige lokale regels complexe groepspatronen creëren zonder leider." }
    ],
    prerequisites: ["emergence", "feedback-loop"],
    unlocks: ["tipping-point"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de minimale vereiste voor zelforganisatie?", options: ["Een centrale coördinator", "Lokale interacties met eenvoudige regels die global patronen produceren", "Perfecte informatie voor alle actoren", "Externe sturing"], correctIndex: 1, explanation: "Zelforganisatie vereist alleen lokale interacties met eenvoudige regels — globale orde ontstaat emergent uit die lokale handelingen." }
    ],
    creativePrompt: "Zoek een systeem in je omgeving dat zichzelf organiseert zonder centrale leiding (verkeer, taal, mode). Welke simpele lokale regels produceren de complexe globale patronen?",
    aiHelperPrompts: ["Hoe kan zelforganisatie worden gestimuleerd in organisaties?", "Is zelforganisatie altijd efficiënt?", "Hoe hangt zelforganisatie samen met emergentie?"]
  },
  {
    id: "butterfly-effect",
    title: "Vlindereffect",
    difficulty: 2,
    emoji: "🦋",
    academicCategory: "Systeemdenken",
    skillCategory: "Beter Redeneren",
    tags: ["Systeemdenken", "Chaos", "Complexiteit", "Beter Redeneren"],
    definition: "In chaotische systemen kunnen kleine initiële verschillen leiden tot grote, onvoorspelbare uitkomsten. Sensitieve afhankelijkheid van begincondities maakt langetetermijn voorspelling fundamenteel onmogelijk.",
    abstractExample: "Edward Lorenz: een vlinder die zijn vleugels beweegt in Brazilië kan theoretisch een tornado in Texas veroorzaken. Kleine verstoringen versterken zich exponentieel in chaotische systemen.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een toevallige ontmoeting leidt tot een nieuw contact, een baan-aanbieding, verhuizing naar een andere stad. Kleine begineventen, grote levensuitkomsten." },
      { domain: "business", icon: "💼", text: "Een vroeg klantreview (positief of negatief) op een platform kan het succes van een product fundamenteel bepalen via sneeuwbaleffecten." },
      { domain: "science", icon: "🔬", text: "Lorenz ontdekte het effect bij computersimulaties van het weer in 1961: afrondingsverschillen in beginwaarden produceerden totaal verschillende weerpatronen." }
    ],
    prerequisites: ["feedback-loop", "emergence"],
    unlocks: ["nonlinear-dynamics"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de praktische implicatie van het vlindereffect voor weersvoorspelling?", options: ["Weer is exact te voorspellen met voldoende data", "Langetermijn weersvoorspelling is fundamenteel begrensd door sensitieve afhankelijkheid", "Het weer is deterministisch en voorspelbaar", "Computers kunnen het vlindereffect elimineren"], correctIndex: 1, explanation: "Zelfs met perfecte begindata blijft kleine meetfout exponentieel groeien, waardoor weersvoorspelling na ~10 dagen fundamenteel onbetrouwbaar wordt." }
    ],
    creativePrompt: "Trace een grote levensgebeurtenis terug. Welke kleine, ogenschijnlijk onbelangrijke gebeurtenissen leidden indirect tot die uitkomst?",
    aiHelperPrompts: ["Hoe gaan we om met onzekerheid in chaotische systemen?", "Is het vlindereffect een reden voor fatalisme?", "Hoe hangt het vlindereffect samen met niet-lineaire dynamica?"]
  },
  {
    id: "nonlinear-dynamics",
    title: "Niet-Lineaire Dynamica",
    difficulty: 3,
    emoji: "📈",
    academicCategory: "Systeemdenken",
    skillCategory: "Beter Redeneren",
    tags: ["Systeemdenken", "Wiskunde", "Complexiteit", "Beter Redeneren"],
    definition: "In niet-lineaire systemen zijn uitkomsten niet evenredig met oorzaken. Kleine oorzaken kunnen grote effecten hebben; grote oorzaken soms kleine effecten. De wereld is overwegend niet-lineair.",
    abstractExample: "Lineair: twee keer zo hard duwen = twee keer zo snel. Niet-lineair: bij een bepaalde drempel verandert de stroom plotseling van laminair naar turbulent — geen evenredige relatie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Stress en prestatie: een beetje stress verbetert prestatie; te veel stress doet de prestatie instorten. Geen lineaire relatie." },
      { domain: "business", icon: "💼", text: "Virale marketing: de meeste campagnes mislukken, maar incidenteel versterkt een kleine initiale verspreiding zich naar miljoenen." },
      { domain: "science", icon: "🔬", text: "Populatiedynamica: een paar roofdieren toegevoegen kan een ecosysteem stabiliseren (niet-lineair) — geen simpele evenredige relatie." }
    ],
    prerequisites: ["feedback-loop", "butterfly-effect"],
    unlocks: ["tipping-point"],
    exercises: [
      { type: "multipleChoice", question: "Waarom is lineair denken gevaarlijk bij complexe systemen?", options: ["Het is te simpel", "Het verwacht evenredige reacties waar het systeem niet evenredig reageert", "Lineaire modellen zijn onnauwkeurig", "Er is geen probleem"], correctIndex: 1, explanation: "Lineaire extrapolaties falen bij tipping points, exponentiële groei en niet-lineaire terugkoppelingsprocessen." }
    ],
    creativePrompt: "Bedenk drie situaties waarbij 'meer van hetzelfde' niet het verwachte lineaire resultaat gaf. Wat was het werkelijke niet-lineaire patroon?",
    aiHelperPrompts: ["Hoe herken ik niet-lineaire dynamica in sociale systemen?", "Welke modellen helpen bij het denken over niet-lineariteit?", "Hoe hangt dit samen met exponentiële groei?"]
  },
  {
    id: "resilience-ecology",
    title: "Ecologische Weerbaarheid",
    difficulty: 2,
    emoji: "🌿",
    academicCategory: "Systeemdenken",
    skillCategory: "Beter Redeneren",
    tags: ["Systeemdenken", "Ecologie", "Risico", "Beter Redeneren"],
    definition: "Het vermogen van een systeem om verstoringen te absorberen en te herstellen naar zijn oorspronkelijke staat, of te transformeren naar een nieuwe stabiele toestand. Veerkracht is anders dan stabiliteit.",
    abstractExample: "Een oerbos is weerbaarder dan een monocultuur: als een parasiet één boomsoort treft, overleven andere soorten en herstelt het bos. De monocultuur heeft geen interne buffers.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een persoon met diverse sociale connecties en vaardigheden is weerbaarder bij een baanverlies dan iemand met één baan en één netwerk." },
      { domain: "business", icon: "💼", text: "Bedrijven met diverse productportfolios en markten overleven economische crises beter dan bedrijven die afhankelijk zijn van één product." },
      { domain: "science", icon: "🔬", text: "C.S. Holling (1973) introduceerde het concept van ecologische veerkracht als het vermogen van systemen om verstoringen te absorberen terwijl ze hun structuur behouden." }
    ],
    prerequisites: ["feedback-loop", "tipping-point"],
    unlocks: ["self-organization"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het verschil tussen weerbaarheid en robuustheid?", options: ["Ze zijn identiek", "Robuustheid weerstaat verstoringen; weerbaarheid absorbeert ze en herstelt", "Weerbaarheid vermijdt verstoringen; robuustheid herstelt na verstoringen", "Robuustheid is altijd beter"], correctIndex: 1, explanation: "Een robuust systeem verbuigt niet; een weerbaar systeem kan verbuigen maar keert terug. Weerbaarheid is flexibeler en vaak duurzamer." }
    ],
    creativePrompt: "Analyseer hoe weerbaar jij bent op drie domeinen (financieel, sociaal, gezondheid). Wat zijn jouw buffers? Waar ben je kwetsbaar?",
    aiHelperPrompts: ["Hoe bouw ik persoonlijke weerbaarheid op?", "Is diversiteit altijd de sleutel tot weerbaarheid?", "Hoe hangt ecologische weerbaarheid samen met crisismanagement?"]
  },
  {
    id: "adaptive-capacity",
    title: "Aanpassingsvermogen",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Systeemdenken",
    skillCategory: "Betere Beslissingen",
    tags: ["Systeemdenken", "Organisatie", "Verandering", "Betere Beslissingen"],
    definition: "Het vermogen van een systeem, organisatie of individu om te leren, te innoveren en de structuur te veranderen als reactie op veranderende omstandigheden. Aanpassingsvermogen gaat verder dan aanpassen: het omvat fundamenteel veranderen.",
    abstractExample: "Een taxi-bedrijf dat zijn diensten verbetert om Uber bij te houden, past zich aan. Een bedrijf dat zichzelf transformeert tot een mobiliteitsplatform, heeft aanpassingsvermogen op het diepste niveau.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Mensen met hoog aanpassingsvermogen leren nieuwe vaardigheden, zoeken nieuwe perspectieven en herdefiniëren hun identiteit bij tegenslagen." },
      { domain: "business", icon: "💼", text: "Amazon begon als boekverkoper en transformeerde tot cloud-provider, streamingdienst en logistiek bedrijf — hoog aanpassingsvermogen." },
      { domain: "science", icon: "🔬", text: "In evolutie is aanpassingsvermogen niet 'snelst' of 'sterkst' maar 'meest responsief op omgevingsveranderingen' — Darwin's echte boodschap." }
    ],
    prerequisites: ["resilience-ecology", "feedback-loop"],
    unlocks: ["path-dependency"],
    exercises: [
      { type: "multipleChoice", question: "Wat onderscheidt aanpassingsvermogen van eenvoudige aanpassing?", options: ["Ze zijn identiek", "Aanpassingsvermogen omvat het vermogen om de eigen structuur en paradigma te veranderen", "Aanpassing is dieper dan aanpassingsvermogen", "Aanpassingsvermogen is alleen relevant voor organisaties"], correctIndex: 1, explanation: "Aanpassing is het optimaliseren binnen bestaande parameters; aanpassingsvermogen omvat het veranderen van de parameters zelf." }
    ],
    creativePrompt: "Analyseer hoe een organisatie of persoon die je bewondert omging met grote veranderingen. Wat waren de bronnen van hun aanpassingsvermogen?",
    aiHelperPrompts: ["Hoe bouw ik aanpassingsvermogen op in mijn carrière?", "Wat blokkeert aanpassingsvermogen in grote organisaties?", "Hoe hangt aanpassingsvermogen samen met leercultuur?"]
  },

  // ── BATCH 8: SPELTHEORIE & STRATEGIE ─────────────────────────
  {
    id: "signaling-theory",
    title: "Signaleringstheorie",
    difficulty: 2,
    emoji: "📡",
    academicCategory: "Speltheorie",
    skillCategory: "Betere Beslissingen",
    tags: ["Speltheorie", "Economie", "Informatie", "Betere Beslissingen"],
    definition: "Partijen met private informatie sturen signalen naar anderen om die informatie geloofwaardig te communiceren. Een signaal is alleen geloofwaardig als het duur of moeilijk te imiteren is.",
    abstractExample: "Een universiteitsgraad communiceert intellect aan werkgevers. Zelfs als de opleiding weinig praktische vaardigheden geeft, werkt het als signaal omdat het alleen haalbaar is voor mensen met voldoende cognitieve capaciteit.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een pauw met een zware staart bewijst zijn gezondheid juist doordat de last zo groot is — alleen gezonde pauwen kunnen hem dragen." },
      { domain: "business", icon: "💼", text: "Een bedrijf dat een hoog dividend uitkeert, signaleert financiële gezondheid — alleen gezonde bedrijven kunnen zich dit veroorloven." },
      { domain: "science", icon: "🔬", text: "Michael Spence won in 2001 de Nobelprijs voor zijn signaleringsmodel op de arbeidsmarkt (1973)." }
    ],
    prerequisites: ["information-asymmetry", "nash-equilibrium"],
    unlocks: ["screening-theory"],
    exercises: [
      { type: "multipleChoice", question: "Waarom is een duur signaal geloofwaardiger dan een goedkoop signaal?", options: ["Dure signalen zijn altijd accuraat", "Alleen individuen met de gesignaleerde kwaliteit kunnen het hoge signaalgedrag veroorloven", "Goedkope signalen zijn verboden", "Prijs bepaalt kwaliteit"], correctIndex: 1, explanation: "Als een signaal goedkoop is, kunnen ook partijen zonder de gesignaleerde kwaliteit het geven. De duurte filtert imitators eruit." }
    ],
    creativePrompt: "Welke signalen geeft jij af (kleding, diploma's, auto, linkedin-profiel)? Wat communiceren ze? Zijn het geloofwaardige signalen of zijn ze gemakkelijk te imiteren?",
    aiHelperPrompts: ["Hoe herken ik signaleringsgedrag in de arbeidsmarkt?", "Is signalering economisch efficiënt of is het verspilling?", "Hoe hangt signaleringstheorie samen met screening?"]
  },
  {
    id: "screening-theory",
    title: "Screeningstheorie",
    difficulty: 2,
    emoji: "🔍",
    academicCategory: "Speltheorie",
    skillCategory: "Betere Beslissingen",
    tags: ["Speltheorie", "Economie", "Selectie", "Betere Beslissingen"],
    definition: "Partijen zonder private informatie ontwerpen contracten of mechanismen die partijen met verschillende kwaliteiten ertoe aanzetten zichzelf te onthullen. De geïnformeerde partij 'screent' zichzelf.",
    abstractExample: "Een verzekeraar kan niet weten of een klant hoog of laag risico is. Door verschillende contracten aan te bieden (hoge premie/laag eigen risico vs. lage premie/hoog eigen risico), laten klanten hun eigen risicoprofiel blijken.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Proefperiodes bij abonnementen screenen klanten: wie blijft na de proefperiode, is serieus; wie opzegt, wilde toch niet betalen." },
      { domain: "business", icon: "💼", text: "Sollicitatiegesprekken met casussen screenen sollicitanten: goede kandidaten presteren beter dan kandidaten die slechts het curriculum hadden geleerd." },
      { domain: "science", icon: "🔬", text: "Joseph Stiglitz formaliseerde screening in de economie en won er mede de Nobelprijs voor in 2001." }
    ],
    prerequisites: ["signaling-theory", "information-asymmetry"],
    unlocks: ["mechanism-design"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het verschil tussen signalering en screening?", options: ["Ze zijn identiek", "Bij signalering onthult de geïnformeerde partij zichzelf; bij screening ontwerpt de ongeïnformeerde partij een mechanisme", "Screening is altijd effectiever", "Signalering vereist extern bewijs"], correctIndex: 1, explanation: "Signalering: de geïnformeerde partij stuurt een signaal. Screening: de ongeïnformeerde partij creëert omstandigheden die zelfopenbaring uitlokken." }
    ],
    creativePrompt: "Ontwerp een screeningsmechanisme voor een probleem van informatieasymmetrie in je werk of dagelijks leven (bijv. betrouwbare dienstverleners vinden, goede medewerkers selecteren).",
    aiHelperPrompts: ["Hoe vermijdt screening adverse selection?", "Welke screeningsmechanismen zijn ethisch problematisch?", "Hoe hangt screening samen met mechanisme-ontwerp?"]
  },
  {
    id: "credible-commitment",
    title: "Geloofwaardige Toezegging",
    difficulty: 2,
    emoji: "🤝",
    academicCategory: "Speltheorie",
    skillCategory: "Betere Beslissingen",
    tags: ["Speltheorie", "Strategie", "Onderhandeling", "Betere Beslissingen"],
    definition: "Een belofte of dreiging is geloofwaardig als de toezeggende partij zich zo heeft gebonden dat ze er werkelijk belang bij heeft de toezegging na te komen. Geloofwaardigheid vereist kosten voor terugdraaien.",
    abstractExample: "Een generaal die zijn terugtrekroute afsluit, stuurt een geloofwaardige boodschap aan de vijand: zijn troepen moeten winnen, want terugtrekken is onmogelijk. De beperking van eigen vrijheid is de bron van geloofwaardigheid.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een deadline publiek maken vergroot de kans dat je het haalt — je hebt jezelf gebonden aan sociale consequenties." },
      { domain: "business", icon: "💼", text: "Een contractuele boete voor niet-nakoming maakt een belofte geloofwaardiger dan een verbale garantie." },
      { domain: "science", icon: "🔬", text: "Thomas Schelling analyseerde in 'The Strategy of Conflict' (1960) hoe geloofwaardige toezeggingen de kern vormen van onderhandeling en afschrikking." }
    ],
    prerequisites: ["nash-equilibrium", "prisoners-dilemma"],
    unlocks: ["repeated-game"],
    exercises: [
      { type: "multipleChoice", question: "Waarom is een onomkeerbare actie een sterkere toezegging dan een belofte?", options: ["Beloften zijn wettelijk bindend", "Onomkeerbaarheid maakt terugdraaien onmogelijk, waardoor de actor de toezegging werkelijk moet nakomen", "Beloften zijn goedkoper", "Onomkeerbare acties zijn riskanter"], correctIndex: 1, explanation: "Als terugdraaien niet mogelijk is, heeft de actor geen keuze meer dan door te zetten — dat maakt de commitment geloofwaardig voor anderen." }
    ],
    creativePrompt: "Denk aan een persoonlijk doel waarbij je moeite hebt met volhouden. Hoe zou je een geloofwaardige toezegging kunnen doen die terugdraaien kostbaarder maakt?",
    aiHelperPrompts: ["Wanneer is precommitment een goede strategie?", "Hoe gebruik ik geloofwaardige toezeggingen in onderhandelingen?", "Hoe hangt dit samen met het herhaalde-spel principe?"]
  },
  {
    id: "repeated-game",
    title: "Herhaald Spel",
    difficulty: 2,
    emoji: "🔁",
    academicCategory: "Speltheorie",
    skillCategory: "Beter Samenwerken",
    tags: ["Speltheorie", "Strategie", "Samenwerking", "Beter Samenwerken"],
    definition: "Wanneer spelers een interactie herhalen, veranderen de strategische mogelijkheden drastisch. Samenwerking en reputatie worden rationeel in herhaalde spelen, ook als ze dat in een éénmalig spel niet zijn.",
    abstractExample: "In een eenmalige ontmoeting is bedriegen rationeel als het voordeel oplevert. In een herhaald spel schept bedriegen een slechte reputatie die toekomstige samenwerking vernietigt — waardoor eerlijkheid rationeel wordt.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Restauranthouders in toeristische trekpleisters bedriegen vaker dan restaurants in woonwijken — toeristen komen éénmalig; buren komen terug." },
      { domain: "business", icon: "💼", text: "Leveranciers die weten dat ze een langdurige relatie met een afnemer hebben, leveren betrouwbaarder dan bij éénmalige transacties." },
      { domain: "science", icon: "🔬", text: "Axelrod's toernooien (1980) toonden dat 'Tit-for-Tat' de succesvolste strategie is in herhaalde gevangendilemma's." }
    ],
    prerequisites: ["prisoners-dilemma", "tit-for-tat"],
    unlocks: ["credible-commitment"],
    exercises: [
      { type: "multipleChoice", question: "Waarom is samenwerking rationeel in een herhaald spel maar niet in een eenmalig spel?", options: ["Mensen worden altruïstischer", "Reputatie en toekomstige interacties creëren incentives voor eerlijk gedrag", "Het speltheoretisch evenwicht verandert", "Herhaalde spelen zijn anders dan eenmalige spelen"], correctIndex: 1, explanation: "In herhaald spel betaal je de prijs van verraad in toekomstige rondes — reputatie maakt coöperatie rationeel." }
    ],
    creativePrompt: "Identificeer drie langdurige relaties in je leven (werk, persoonlijk). Hoe verandert de herhaalde aard van de interactie jouw strategie versus een éénmalige transactie?",
    aiHelperPrompts: ["Wat is de 'schaduw van de toekomst' in speltheorie?", "Wanneer breekt samenwerking in herhaalde spelen af?", "Hoe hangt dit samen met tit-for-tat strategie?"]
  },
  {
    id: "information-cascade",
    title: "Informatiecascade",
    difficulty: 2,
    emoji: "🌊",
    academicCategory: "Speltheorie",
    skillCategory: "Betere Beslissingen",
    tags: ["Speltheorie", "Sociale Psychologie", "Informatie", "Betere Beslissingen"],
    definition: "Wanneer individuen hun eigen private informatie negeren en de beslissingen van anderen imiteren, ongeacht of die anderen ook goede informatie hadden. Collectieve dwaling via informatiecascade.",
    abstractExample: "Tien mensen kiezen een restaurant. De eerste twee kiezen restaurant A. De derde heeft twijfels maar ziet twee mensen al gekozen hebben en volgt ook. De vierde ziet drie mensen en volgt. Zo kiest iedereen A — ook als restaurant B beter was.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Boeken en films die 'bestsellers' worden omdat mensen ze kopen omdat anderen ze kopen — ook als andere boeken beter zijn." },
      { domain: "business", icon: "💼", text: "Financiële zeepbellen: investeerders stappen in omdat anderen instappen, ongeacht de fundamentele waarde van het actief." },
      { domain: "science", icon: "🔬", text: "Bikhchandani, Hirshleifer & Welch (1992) formaliseerden het model van informatiecascades als verklaring voor kuddegedrag." }
    ],
    prerequisites: ["social-proof", "herding"],
    unlocks: ["group-polarization"],
    exercises: [
      { type: "multipleChoice", question: "Wanneer is een informatiecascade gevaarlijk?", options: ["Als de eerste beslissers slechte informatie hadden maar anderen hen volgden", "Als iedereen dezelfde informatie heeft", "Als er weinig deelnemers zijn", "Als de informatie openbaar is"], correctIndex: 0, explanation: "Als een cascade begint op basis van slechte eerste informatie, volgt iedereen een verkeerde keuze terwijl ze denken wijs te zijn." }
    ],
    creativePrompt: "Beschrijf een situatie waarbij jij meedeed met een trend omdat 'iedereen het deed'. Had je onafhankelijke informatie om de keuze te rechtvaardigen of volgde je de cascade?",
    aiHelperPrompts: ["Hoe bescherm ik mezelf tegen informatiecascades?", "Welke rol speelt sociale media bij informatiecascades?", "Hoe hangt dit samen met het bijenvolk-effect?"]
  },
  {
    id: "mechanism-design",
    title: "Mechanisme-Ontwerp",
    difficulty: 3,
    emoji: "⚙️",
    academicCategory: "Speltheorie",
    skillCategory: "Betere Beslissingen",
    tags: ["Speltheorie", "Economie", "Strategie", "Betere Beslissingen"],
    definition: "Het ontwerpen van regels, incentives en procedures zodat rationele agenten, die hun eigenbelang nastreven, collectief gewenste uitkomsten produceren. Omgekeerde speltheorie: van uitkomst naar regels.",
    abstractExample: "Een veiling ontwerpen zodat bieders hun ware waarde onthullen, niet strategisch bieden. Het juiste mechanisme zorgt dat eerlijk gedrag de dominante strategie wordt.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Peer-review bij wetenschappelijke publicaties is een mechanisme dat incentives voor kwaliteitscontrole creëert door reputatiestimuli." },
      { domain: "business", icon: "💼", text: "Bonussystemen zijn mechanismes: slecht ontworpen bonussen leiden tot korte-termijn denken; goed ontworpen bonussen stimuleren het gewenste gedrag." },
      { domain: "science", icon: "🔬", text: "Hurwicz, Maskin & Myerson wonnen in 2007 de Nobelprijs voor hun grondleggende werk aan mechanisme-ontwerp." }
    ],
    prerequisites: ["nash-equilibrium", "principal-agent"],
    unlocks: ["screening-theory"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het doel van mechanisme-ontwerp?", options: ["Mensen dwingen goed gedrag te vertonen", "Regels ontwerpen zodat eigenbelang leidt tot gewenste collectieve uitkomsten", "De sterkste partij bevoordelende regels", "Informatieasymmetrie elimineren"], correctIndex: 1, explanation: "Mechanisme-ontwerp werkt met eigenbelang — het allineert individu's incentives met het collectief belang via de juiste spelregels." }
    ],
    creativePrompt: "Ontwerp een mechanisme voor een collectief actieprobleem in je omgeving (bijv. schoon houden van gemeenschappelijke ruimtes, punctualiteit bij vergaderingen). Hoe maak je goed gedrag de rationele keuze?",
    aiHelperPrompts: ["Hoe verschilt mechanisme-ontwerp van gewone regelgeving?", "Welke veilingvormen zijn bekend in mechanisme-ontwerp?", "Hoe hangt dit samen met de principaal-agentverhouding?"]
  },
  {
    id: "backward-induction",
    title: "Achterwaartse Inductie",
    difficulty: 3,
    emoji: "⏪",
    academicCategory: "Speltheorie",
    skillCategory: "Betere Beslissingen",
    tags: ["Speltheorie", "Strategie", "Logica", "Betere Beslissingen"],
    definition: "Een methode om de optimale strategie te vinden door te beginnen bij het eindpunt en terug te redeneren naar het beginpunt. Elke speler voorspelt toekomstige keuzes en handelt nu dienovereenkomstig.",
    abstractExample: "Schaak: om de beste zet nu te vinden, bedenk je welke positie je einddoel is, welke zetten daartoe leiden, en redeneer je terug naar de huidige situatie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Om je loopbaandoel in 10 jaar te bereiken, bedenk je wat je in jaar 9 nodig hebt, dan jaar 8, enzovoort terug naar nu." },
      { domain: "business", icon: "💼", text: "Projectplanning: begin bij de deadline en werk terug naar het begin om te zien welke stappen wanneer moeten worden gezet." },
      { domain: "science", icon: "🔬", text: "Zermelo bewees in 1913 dat schaak in principe volledig analyseerbaar is via achterwaartse inductie — de uitkomst is theoretisch bepaald." }
    ],
    prerequisites: ["dominant-strategy", "nash-equilibrium"],
    unlocks: ["credible-commitment"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de achterwaartse-inductieparadox bij het geketende gevangendilemma?", options: ["Samenwerking is altijd optimaal", "Rationele spelers defecten in elke ronde — ook in ronde 1 — door achterwaartse inductie vanuit de laatste ronde", "Samenwerking is onmogelijk", "Inductie werkt niet in speltheorie"], correctIndex: 1, explanation: "Als spelers weten wanneer het spel eindigt, defecten ze in de laatste ronde, waarna ook de voorlaatste ronde onstabiel wordt — helemaal terug naar ronde 1." }
    ],
    creativePrompt: "Neem een doel dat je over 5 jaar wilt bereiken. Gebruik achterwaartse inductie om de kritische paden en beslissingen te identificeren. Wat moet je nu doen?",
    aiHelperPrompts: ["Wanneer faalt achterwaartse inductie als voorspellingsmethode?", "Hoe gebruik ik achterwaartse inductie bij projectplanning?", "Hoe hangt dit samen met het eindige herhaalde-spel probleem?"]
  },
  {
    id: "evolutionary-stable-strategy",
    title: "Evolutionair Stabiele Strategie",
    difficulty: 3,
    emoji: "🧬",
    academicCategory: "Speltheorie",
    skillCategory: "Beter Redeneren",
    tags: ["Speltheorie", "Evolutiebiologie", "Strategie", "Beter Redeneren"],
    definition: "Een strategie die, eenmaal wijdverspreid in een populatie, niet geïnvadeerd kan worden door een afwijkende strategie. Een ESS is evolutionair stabiel: zelfinvaders slagen er niet in zich te verspreiden.",
    abstractExample: "In een populatie van 'duiven' (niet agressief) kan een 'havik' (agressief) slagen. Maar een populatie puur haviken is ook instabiel — ze vernietigen elkaar. ESS is often een gemend evenwicht.",
    examples: [
      { domain: "daily", icon: "🏠", text: "In menselijke samenleving is een mix van coöperatie en assertiviteit vaak een evolutionair stabiel evenwicht — pure agressie of pure passiviteit worden beiden uitgeroeid." },
      { domain: "business", icon: "💼", text: "In markten is een mix van concurrentie en samenwerking (co-opetitie) vaak stabieler dan puur agressieve marktstrategie." },
      { domain: "science", icon: "🔬", text: "John Maynard Smith introduceerde ESS in 1973 als toepassing van speltheorie op biologische evolutie." }
    ],
    prerequisites: ["nash-equilibrium", "tit-for-tat"],
    unlocks: ["repeated-game"],
    exercises: [
      { type: "multipleChoice", question: "Wat onderscheidt een ESS van een Nash-evenwicht?", options: ["Ze zijn identiek", "Een ESS is stabiel tegen kleine populatiemutaties; een Nash-evenwicht niet per se", "Nash-evenwicht is sterker", "ESS is alleen biologisch relevant"], correctIndex: 1, explanation: "Een ESS-eis is strenger: niet alleen niemand wil afwijken, maar ook kleine groepen afwijkers kunnen de strategie niet overnemen." }
    ],
    creativePrompt: "Analyseer de dominante strategie in een sociale groep die je kent (sport, werk, familie). Is het een ESS? Wat zou er gebeuren als iemand een radicaal andere strategie koos?",
    aiHelperPrompts: ["Hoe verklaart ESS altruïsme in de biologie?", "Welke menselijke sociale normen zijn ESS?", "Hoe hangt dit samen met Nash-evenwicht?"]
  },
  {
    id: "winner-curse",
    title: "Vloek van de Winnaar",
    difficulty: 2,
    emoji: "🏆",
    academicCategory: "Speltheorie",
    skillCategory: "Betere Beslissingen",
    tags: ["Speltheorie", "Economie", "Veiling", "Betere Beslissingen"],
    definition: "De winnaar van een veiling of competitie heeft systematisch overbetaald. Door de verdeling van biedingen zal de hoogste bieder degene zijn die de waarde het meest heeft overschat.",
    abstractExample: "Bij een veiling op een oliebronrecht is de winnaar degene die de oliereserves het hoogst heeft ingeschat. Maar als alle schattingen rond de ware waarde zijn verdeeld, is de hoogste schatting vrijwel zeker een overschatting.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Wie het meest biedt op een huis in een biedingssituatie, heeft waarschijnlijk de waarde overschat — ze betalen meer dan het waard is." },
      { domain: "business", icon: "💼", text: "Bedrijven die overnames doen via biedstrijd, betalen gemiddeld te veel — overnames vernietigen statistisch gezien aandeelhouderswaarde." },
      { domain: "science", icon: "🔬", text: "Capen, Clapp & Campbell (1971) ontdekten de winners curse bij olieveilingen — hun studie was de eerste empirische documentatie." }
    ],
    prerequisites: ["expected-value", "signaling-theory"],
    unlocks: ["information-asymmetry"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de optimale strategie bij gemeenschappelijke-waarde-veilingen?", options: ["Zo hoog mogelijk bieden om te winnen", "Bied minder dan je schatting om de winners curse te compenseren", "Bied exact je geschatte waarde", "Niet bieden is het veiligst"], correctIndex: 1, explanation: "Rationele bieders in gemeenschappelijke-waarde-veilingen corrigeren hun bod naar beneden omdat winnen impliceert dat anderen lager schatten." }
    ],
    creativePrompt: "Analyseer een situatie waar je concurreerde om iets (baan, contract, relatie). Betaalde de winnaar (jij of iemand anders) meer dan het waard was? Hoe herken je de vloek van de winnaar?",
    aiHelperPrompts: ["Hoe vermijd ik de vloek van de winnaar bij aanbestedingen?", "Is de vloek van de winnaar altijd aanwezig bij veilingen?", "Hoe hangt dit samen met cursus van kennisverwerving?"]
  },
  {
    id: "focal-point-game",
    title: "Coördinatiepunt",
    difficulty: 2,
    emoji: "🎯",
    academicCategory: "Speltheorie",
    skillCategory: "Beter Samenwerken",
    tags: ["Speltheorie", "Coördinatie", "Samenwerking", "Beter Samenwerken"],
    definition: "Wanneer mensen zonder communicatie moeten coördineren, kiezen ze instinctief opties die prominent, uniek of cultureel opvallen. Coördinatiepunten ontstaan door gedeelde culturele kennis of saillantie.",
    abstractExample: "Stel: je moet een vriend ontmoeten in New York zonder afspraken te maken. Wanneer ga je? Wat zou jij kiezen? De meeste New Yorkers zeggen: 12:00, Grand Central Station. Dit is een coördinatiepunt.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Bij een groepsreis zonder planning kiest iedereen instinctief om bij de ingang te wachten — de meest opvallende locatie wordt coördinatiepunt." },
      { domain: "business", icon: "💼", text: "In een markt zonder expliciete afspraken convergeren concurrenten naar 'ronde getallen' als prijspunten — €9,99, €100, €1000." },
      { domain: "science", icon: "🔬", text: "Thomas Schelling beschreef coördinatiepunten in 'The Strategy of Conflict' (1960) als 'focal points' of 'Schelling points'." }
    ],
    prerequisites: ["nash-equilibrium", "schelling-point"],
    unlocks: ["information-cascade"],
    exercises: [
      { type: "multipleChoice", question: "Wat bepaalt of iets een coördinatiepunt wordt?", options: ["Rationele analyse", "Culturele saillantie en gedeelde verwachtingen", "Formele afspraken", "Wettelijke regelgeving"], correctIndex: 1, explanation: "Coördinatiepunten werken door gedeelde culturele kennis — iets is een coördinatiepunt als iedereen verwacht dat iedereen het kiest." }
    ],
    creativePrompt: "Stel dat je een nieuwe standaard wilt introduceren in je team zonder vergadering. Welk coördinatiepunt zou je kunnen creëren dat mensen spontaan zouden adopteren?",
    aiHelperPrompts: ["Hoe kunnen leiders coördinatiepunten creëren?", "Waarom zijn coördinatiepunten cultureel gebonden?", "Hoe hangt dit samen met de Nash-evenwichttheorie?"]
  },

  // ── BATCH 9: COMMUNICATIE & TAAL ─────────────────────────────
  {
    id: "ethos-pathos-logos",
    title: "Ethos, Pathos en Logos",
    difficulty: 1,
    emoji: "🎙️",
    academicCategory: "Retorica",
    skillCategory: "Beter Communiceren",
    tags: ["Retorica", "Communicatie", "Overtuigen", "Beter Communiceren"],
    definition: "Aristoteles' drie middelen van overtuiging: ethos (geloofwaardigheid van de spreker), pathos (emotionele aansluiting bij het publiek) en logos (logische argumenten en bewijs).",
    abstractExample: "Een arts die een gezondheidsadvies geeft: ethos = zijn opleiding en ervaring, pathos = zijn empathie met de patiënt, logos = de wetenschappelijke onderbouwing. Alle drie versterken de overtuigingskracht.",
    examples: [
      { domain: "daily", icon: "🏠", text: "In een gesprek met je baas: ethos (jouw trackrecord), pathos (toon die respect en begrip uitstraalt), logos (concrete feiten en cijfers)." },
      { domain: "business", icon: "💼", text: "Een succesvolle presentatie combineert credentialsk (ethos), een emotioneel verhaal (pathos) en harde data (logos)." },
      { domain: "science", icon: "🔬", text: "Aristoteles beschreef deze retorica-driehoek in zijn 'Rhetorica' (~330 v.Chr.) als het fundament van effectieve communicatie." }
    ],
    prerequisites: ["appeal-to-emotion"],
    unlocks: ["narrative-framing"],
    exercises: [
      { type: "multipleChoice", question: "Welk overtuigingsmiddel is het meest kwetsbaar voor misbruik?", options: ["Logos, want bewijs kan worden vervalst", "Pathos, want emotie kan los van de inhoud worden aangewend om te manipuleren", "Ethos, want geloofwaardigheid is altijd juist", "Alle drie zijn even kwetsbaar"], correctIndex: 1, explanation: "Pathos kan worden losgemaakt van inhoud — een emotioneel beroep kan mensen overtuigen ongeacht de feiten of de betrouwbaarheid van de spreker." }
    ],
    creativePrompt: "Analyseer een overtuigende toespraak of advertentie. Identificeer hoe ethos, pathos en logos worden ingezet. Welke werkt het sterkst voor het publiek?",
    aiHelperPrompts: ["Hoe balanceer ik ethos, pathos en logos in een presentatie?", "Wanneer moet ik meer inzetten op logos dan op pathos?", "Hoe bouw ik ethos op als ik minder bekende spreker ben?"]
  },
  {
    id: "euphemism-treadmill",
    title: "Eufemisme-Loopband",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Linguïstiek",
    skillCategory: "Beter Communiceren",
    tags: ["Linguïstiek", "Taal", "Communicatie", "Beter Communiceren"],
    definition: "Eufemismen die gecreëerd zijn om beladen woorden te vervangen, worden zelf beladen door associatie met de geassocieerde realiteit. Dan is er weer een nieuw eufemisme nodig. De loopband draait door.",
    abstractExample: "Shell shock → combat fatigue → PTSD. Elk nieuw woord probeerde de stigma te verminderen. Maar de ervaring bleef, het nieuwe woord werd beladen, en het proces herhaalt zich.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Gehandicapt → beperkt → anders-valide → persoon met een beperking. Elk nieuw woord wordt op zijn beurt gevoelig." },
      { domain: "business", icon: "💼", text: "Ontslagen → afgevloeid → bedrijfsorganisatie-optimalisatie. Bedrijfstaal vult de eufemisme-loopband voortdurend aan." },
      { domain: "science", icon: "🔬", text: "Steven Pinker beschreef de eufemisme-loopband als bewijs dat de negativiteit van een concept aan het woord kleeft, niet aan de klank." }
    ],
    prerequisites: ["semantic-drift"],
    unlocks: ["linguistic-relativity"],
    exercises: [
      { type: "multipleChoice", question: "Wat veroorzaakt de eufemisme-loopband?", options: ["Taalverandering door generaties", "De negatieve connotatie van een concept kleeft aan elk woord dat ermee geassocieerd raakt", "Politieke censuur", "Gebrek aan goede woorden"], correctIndex: 1, explanation: "De realiteit waarnaar een woord verwijst, kleurt het woord zelf. Elk nieuw eufemisme absorbeert dezelfde negatieve lading." }
    ],
    creativePrompt: "Zoek drie voorbeelden van eufemismen in jouw vakgebied of dagelijks leven. Trace hoe ze zijn veranderd over de jaren. Wat zegt dit over de realiteit erachter?",
    aiHelperPrompts: ["Wanneer zijn eufemismen nuttig en wanneer misleidend?", "Hoe beïnvloeden eufemismen beleidsdiscussies?", "Hoe hangt de eufemisme-loopband samen met taalrelativiteit?"]
  },
  {
    id: "linguistic-relativity",
    title: "Taalrelativiteit",
    difficulty: 2,
    emoji: "🌐",
    academicCategory: "Linguïstiek",
    skillCategory: "Beter Redeneren",
    tags: ["Linguïstiek", "Cognitie", "Cultuur", "Beter Redeneren"],
    definition: "De hypothese dat de taal die je spreekt je denken en perceptie beïnvloedt. De sterke versie (Sapir-Whorf): taal bepaalt denken. De zwakke versie: taal beïnvloedt denken.",
    abstractExample: "Het Russische heeft twee woorden voor blauw (lichtblauw en donkerblauw). Russische sprekers onderscheiden deze tinten sneller in tests dan Engelse sprekers — talige categorieën versnellen perceptie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Het Inuïtische heeft vele woorden voor sneeuw — dit maakt genuanceerder waarnemen van sneeuwtypes makkelijker voor sprekers." },
      { domain: "business", icon: "💼", text: "Organisaties die andere woorden gebruiken voor 'falen' (vs. 'leren') bouwen een andere omgang met tegenslag in hun taal — en daarmee in hun cultuur." },
      { domain: "science", icon: "🔬", text: "Boroditsky et al. (2003) toonden empirisch aan dat ruimtelijk taalgebruik ruimtelijk denken beïnvloedt." }
    ],
    prerequisites: ["euphemism-treadmill"],
    unlocks: ["semantic-drift"],
    exercises: [
      { type: "multipleChoice", question: "Welke versie van de Sapir-Whorf-hypothese is wetenschappelijk het best onderbouwd?", options: ["Sterke versie: taal bepaalt denken volledig", "Zwakke versie: taal beïnvloedt denken", "Geen van beide is aannemelijk", "De sterke versie is recent bewezen"], correctIndex: 1, explanation: "De zwakke versie is goed gedocumenteerd: taalcategorieën beïnvloeden waarneming en categorisering. De sterke versie heeft weinig empirisch support." }
    ],
    creativePrompt: "Kies een concept dat in jouw moedertaal een woord heeft maar moeilijk te vertalen is. Hoe beïnvloedt het bestaan van dit woord jouw denken over dat concept?",
    aiHelperPrompts: ["Hoe beïnvloedt de taal die ik spreek mijn professioneel denken?", "Welke taalkundige concepten heeft het Nederlands die andere talen missen?", "Hoe hangt taalrelativiteit samen met interculturele communicatie?"]
  },
  {
    id: "semantic-drift",
    title: "Semantische Drift",
    difficulty: 1,
    emoji: "⏳",
    academicCategory: "Linguïstiek",
    skillCategory: "Kritisch Denken",
    tags: ["Linguïstiek", "Taal", "Geschiedenis", "Kritisch Denken"],
    definition: "Woorden veranderen van betekenis over tijd, soms volledig tegengesteld aan hun oorspronkelijke betekenis. Wat een woord nu betekent, is het product van eeuwen aan taalmutatie.",
    abstractExample: "'Verschrikkelijk' betekende ooit 'dat ontzag wekt' (als in 'angst/ontzag inboezemen'). Nu is het puur negatief. 'Leuk' is een afkorting van 'lauk' dat ooit 'flauw of zouteloos' betekende.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'Vrij' had in middeleeuws Nederlands de betekenis van 'dapper'. Nu betekent het 'niet gebonden'. De politieke lading verschoof volledig." },
      { domain: "business", icon: "💼", text: "'Investering' heeft een positieve klank gekregen waar het vroeger neutraal was — 'we investeren in medewerkers' klinkt beter dan 'we betalen voor training'." },
      { domain: "science", icon: "🔬", text: "Etymologie bestudeert semantische drift systematisch. 'Terrible' en 'terrific' deelden een Latijnse wortel maar evolueerden naar tegengestelde betekenissen." }
    ],
    prerequisites: ["euphemism-treadmill"],
    unlocks: ["linguistic-relativity"],
    exercises: [
      { type: "multipleChoice", question: "Wat toont semantische drift aan over taal?", options: ["Taal is stabiel en betrouwbaar", "Taal is een levend systeem waarvan betekenissen evolueren door gebruik", "Woorden hebben vaste betekenissen", "Semantische drift is altijd bewust"], correctIndex: 1, explanation: "Semantische drift toont dat taal een sociaal systeem is dat continu verandert door collectief gebruik — niet vastgepind door logica of regelgeving." }
    ],
    creativePrompt: "Kies drie woorden die voor ouderen een andere betekenis hebben dan voor jongeren. Welk maatschappelijk verandering weerspiegelt deze semantische drift?",
    aiHelperPrompts: ["Hoe beïnvloedt semantische drift politieke discussies?", "Hoe kan ik bewust omgaan met semantische drift in communicatie?", "Geef voorbeelden van semantische drift in management-jargon."]
  },
  {
    id: "speech-act-theory",
    title: "Taalhandeling",
    difficulty: 2,
    emoji: "🗣️",
    academicCategory: "Filosofie",
    skillCategory: "Beter Communiceren",
    tags: ["Filosofie", "Linguïstiek", "Communicatie", "Beter Communiceren"],
    definition: "Taal doet meer dan beschrijven — het voert handelingen uit. Een belofte, een uitnodiging, een vonnis, een huwelijk zijn allemaal taalhandelingen die de werkelijkheid veranderen door het spreken zelf.",
    abstractExample: "'Hierbij verklaar ik u man en vrouw' beschrijft geen werkelijkheid maar creëert die. 'Ik beloof je dat' verandert de sociale werkelijkheid door de uitspraak zelf.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'Ik verontschuldig me' is niet alleen een beschrijving maar een handeling die de sociale relatie herstelt." },
      { domain: "business", icon: "💼", text: "'Ik bied je de baan aan' (performatief) vs. 'Ik beschrijf de baanvereisten' (constatatief) — fundamenteel verschillende taalhandelingen." },
      { domain: "science", icon: "🔬", text: "J.L. Austin beschreef in 'How to Do Things with Words' (1962) de driedeling: locutionaire (inhoud), illocutionaire (intentie) en perlocutionaire (effect) acten." }
    ],
    prerequisites: ["linguistic-relativity"],
    unlocks: ["pragmatic-implicature"],
    exercises: [
      { type: "multipleChoice", question: "Wat maakt een taalhandeling geldig?", options: ["De juiste woordkeuze", "De juiste context, autoriteit van de spreker en sociale conventies", "Luid uitspreken", "Schriftelijk vastleggen"], correctIndex: 1, explanation: "Een taalhandeling vereist de juiste sociale context en autoriteit — een willekeurig persoon kan je niet 'aanstellen als minister' door simpelweg de woorden te zeggen." }
    ],
    creativePrompt: "Maak een lijst van vijf uitspraken die je vandaag deed. Waren ze beschrijvend of voerden ze handelingen uit? Hoe veranderden ze de sociale realiteit?",
    aiHelperPrompts: ["Hoe beïnvloedt bewustzijn van taalhandelingen mijn communicatie?", "Wanneer heeft een taalhandeling niet het gewenste effect?", "Hoe hangt dit samen met pragmatische implicatuur?"]
  },
  {
    id: "pragmatic-implicature",
    title: "Pragmatische Implicatuur",
    difficulty: 2,
    emoji: "💬",
    academicCategory: "Linguïstiek",
    skillCategory: "Beter Communiceren",
    tags: ["Linguïstiek", "Communicatie", "Begrip", "Beter Communiceren"],
    definition: "De betekenis die wordt gecommuniceerd maar niet letterlijk gezegd. Wat we bedoelen is altijd meer dan wat we zeggen, gebaseerd op contextuele aannames en cooperatieve communicatieprincipes.",
    abstractExample: "Gevraagd: 'Kan jij de deur dichtdoen?' Letterlijk: 'Bezit jij het vermogen dit te doen?' Bedoeld: 'Doe de deur dicht.' De letterlijke vraag en de pragmatische betekenis zijn totaal verschillend.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een recensie zegt 'de acteur was aanwezig op het toneel' — letterlijk een niet-evaluatieve uitspraak, maar pragmatisch impliceert het 'de acteur was slecht'." },
      { domain: "business", icon: "💼", text: "Een manager zegt 'interessante aanpak' — letterlijk neutraal, maar de context impliceert kritiek." },
      { domain: "science", icon: "🔬", text: "Paul Grice beschreef in 1975 de conversationele maximes (kwantiteit, kwaliteit, relatie, manier) die de basis vormen voor implicatuur." }
    ],
    prerequisites: ["speech-act-theory"],
    unlocks: ["ethos-pathos-logos"],
    exercises: [
      { type: "multipleChoice", question: "Wat is Grice's coöperatieprincipe?", options: ["Wees altijd aardig in gesprekken", "Communiceer op een manier die het doel van de interactie dient: wees informatief, oprecht, relevant en duidelijk", "Zeg altijd meer dan nodig", "Vermijd implicaturen"], correctIndex: 1, explanation: "Grice's principe stelt dat spreker en luisteraar in normale communicatie samenwerken volgens gedeelde normen — afwijking hiervan creëert implicatuur." }
    ],
    creativePrompt: "Luister een dag bewust naar indirecte communicatie. Noteer drie situaties waarbij de letterlijke betekenis sterk verschilt van de bedoelde boodschap.",
    aiHelperPrompts: ["Hoe herken ik pragmatische implicatuur in professionele communicatie?", "Wanneer is directe communicatie beter dan indirecte?", "Hoe hangt implicatuur samen met culturele verschillen in communicatie?"]
  },
  {
    id: "narrative-framing",
    title: "Narratieve Framing",
    difficulty: 2,
    emoji: "🖼️",
    academicCategory: "Communicatiewetenschap",
    skillCategory: "Beter Communiceren",
    tags: ["Communicatiewetenschap", "Psychologie", "Media", "Beter Communiceren"],
    definition: "Hoe een verhaal wordt ingekaderd bepaalt mede hoe het publiek het interpreteert en waardeert. Dezelfde feiten kunnen tot tegengestelde conclusies leiden afhankelijk van het frame.",
    abstractExample: "Een politiek programma kan worden omschreven als 'ondersteuning voor kwetsbare groepen' of als 'beloning voor niet-werken'. Dezelfde maatregel, twee tegengestelde frames, twee verschillende reacties.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'Ons glas is halfvol' vs. 'ons glas is halfleeg' — dezelfde situatie, maar het frame stuurt de emotionele reactie." },
      { domain: "business", icon: "💼", text: "Een reorganisatie als 'noodzakelijke herstructurering' vs. 'kaalslag door hebzuchtige aandeelhouders' — het frame bepaalt de publieke reactie." },
      { domain: "science", icon: "🔬", text: "George Lakoff toonde aan dat politieke frames zo diep in taal zijn ingebed dat enkel tegenargumenten het frame versterken." }
    ],
    prerequisites: ["framing-effect"],
    unlocks: ["ethos-pathos-logos"],
    exercises: [
      { type: "multipleChoice", question: "Waarom is het zo moeilijk om een frame te doorbreken door het te ontkennen?", options: ["Ontkenning werkt altijd", "Door een frame te ontkennen activeer je het — de ontkenning roept het frame op", "Frames zijn niet ontkenbaar", "Mensen luisteren niet naar ontkenningen"], correctIndex: 1, explanation: "Lakoff: ontkenning van een frame activeert dat frame. 'Ik ben geen crimineel' roept 'crimineel' op — je moet een nieuw frame aanbieden." }
    ],
    creativePrompt: "Kies een maatregel of beleid dat je wilt communiceren. Schrijf twee totaal verschillende frames voor dezelfde feitelijke inhoud. Welke verwacht je dat beter aanslaat?",
    aiHelperPrompts: ["Hoe herken ik wanneer ik door een frame wordt beïnvloed?", "Hoe creëer ik een effectief frame voor mijn boodschap?", "Hoe hangt dit samen met Lakoffs politieke taalkunde?"]
  },
  {
    id: "overgeneralization",
    title: "Overgeneralisatie",
    difficulty: 1,
    emoji: "🌍",
    academicCategory: "Logica",
    skillCategory: "Beter Redeneren",
    tags: ["Logica", "Cognitie", "Redeneren", "Beter Redeneren"],
    definition: "Een conclusie trekken die te breed is voor de beschikbare specifieke gevallen. Van één of weinig observaties een algemene regel afleiden die niet gerechtvaardigd is.",
    abstractExample: "Eén slechte ervaring met een product van een merk: 'Dat merk is altijd slecht.' Of één positieve interactie: 'Alle mensen uit dat land zijn vriendelijk.' Beide zijn overgeneralisaties.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'Ik ben één keer gevallen bij dat pad. Het pad is altijd gevaarlijk.' Één incident bepaalt niet het patroon." },
      { domain: "business", icon: "💼", text: "Een mislukte productlancering leiden leidt tot: 'Onze doelgroep koopt nooit nieuwe producten' — een overgeneralisatie van één mislukking." },
      { domain: "science", icon: "🔬", text: "Overgeneralisatie is een cognitieve fout in de cognitieve therapie van Beck: negatieve ervaringen worden als universele wetmatigheden behandeld." }
    ],
    prerequisites: ["hasty-generalization", "induction-problem"],
    unlocks: ["confirmation-bias"],
    exercises: [
      { type: "multipleChoice", question: "Wat onderscheidt een geldige inductie van overgeneralisatie?", options: ["Ze zijn identiek", "Geldige inductie is gebaseerd op voldoende gevarieerde observaties; overgeneralisatie op te weinig of te homogene gevallen", "Overgeneralisatie is altijd fout", "Inductie vereist logisch bewijs"], correctIndex: 1, explanation: "De stap van specifieke observaties naar algemene conclusies is alleen gerechtvaardigd bij een representatieve en grote genoeg steekproef." }
    ],
    creativePrompt: "Identificeer drie overtuigingen over groepen mensen, producten of situaties die je hebt gevormd op basis van slechts een paar ervaringen. Hoe representatief waren die ervaringen?",
    aiHelperPrompts: ["Hoe herken ik overgeneralisatie bij mezelf?", "Wanneer is generalisatie wél gerechtvaardigd?", "Hoe hangt overgeneralisatie samen met stereotypering?"]
  },
  {
    id: "dog-whistle",
    title: "Hondenfluittaal",
    difficulty: 2,
    emoji: "🐕",
    academicCategory: "Communicatiewetenschap",
    skillCategory: "Kritisch Denken",
    tags: ["Communicatiewetenschap", "Politiek", "Taal", "Kritisch Denken"],
    definition: "Communicatie die voor het algemeen publiek onschuldig klinkt maar een specifieke boodschap overbrengt aan een doelgroep die de code kent. De boodschap is ontworpen voor dubbele interpretatie.",
    abstractExample: "Een politicus gebruikt de term 'wet en orde' in een context die voor brede kiezers klinkt als veiligheidsbeleid, maar voor een specifieke groep een raciale politieke boodschap bevat.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Verborgen berichten in teksten, slogans of humor die alleen herkenbaar zijn voor insiders — een sociale binding via gedeelde code." },
      { domain: "business", icon: "💼", text: "Bedrijfstaal die klinkt als neutrale efficiëntieretoriek maar een specifieke stakeholder-groep aanspreekt met impliciete beleidsbelofte." },
      { domain: "science", icon: "🔬", text: "Politicologen als Mendelberg analyseren hoe raciale politiek via codetaal opereerde zonder expliciet racistisch te zijn, en daarmee breder aanvaardbaar bleef." }
    ],
    prerequisites: ["pragmatic-implicature", "narrative-framing"],
    unlocks: ["ethos-pathos-logos"],
    exercises: [
      { type: "multipleChoice", question: "Waarom is hondenfluittaal effectief in politieke communicatie?", options: ["Het is altijd puur figuurlijk", "Het bereikt doelgroepen met een specifieke boodschap zonder het brede publiek te vervreemden", "Het is wettelijk verboden", "Mensen luisteren er niet naar"], correctIndex: 1, explanation: "Hondenfluittaal biedt deniability — de spreker kan ontkennen dat de boodschap bedoeld was, terwijl de doelgroep de bedoeling perfect begrijpt." }
    ],
    creativePrompt: "Zoek in een politieke toespraak of advertentie taalgebruik dat mogelijk dubbel gelezen kan worden. Wat is de oppervlakkige en de diepere boodschap?",
    aiHelperPrompts: ["Hoe herken ik hondenfluittaal in media en politiek?", "Is hondenfluittaal altijd kwaadaardig of heeft het legitieme toepassingen?", "Hoe hangt dit samen met framing?"]
  },
  {
    id: "metalinguistic-awareness",
    title: "Metalinguïstisch Bewustzijn",
    difficulty: 2,
    emoji: "🪞",
    academicCategory: "Linguïstiek",
    skillCategory: "Kritisch Denken",
    tags: ["Linguïstiek", "Communicatie", "Zelfbewustzijn", "Kritisch Denken"],
    definition: "Het vermogen om taal als object te beschouwen en erover na te denken — reflectief bewustzijn van hoe taal werkt, hoe woorden worden gebruikt en hoe betekenis wordt geconstrueerd.",
    abstractExample: "Een kind dat ontdekt dat het woord 'bank' zowel een zitbank als een financiële instelling kan betekenen, heeft metalinguïstisch bewustzijn ontwikkeld — het begrijpt dat taal een systeem is los van de werkelijkheid.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Beseffen dat 'gratis' in reclametaal bijna nooit werkelijk gratis betekent — dit is metalinguïstisch bewustzijn over marketingtaal." },
      { domain: "business", icon: "💼", text: "Een jurist die contracttaal analyseert op dubbele interpretatie, gebruikt metalinguïstisch bewustzijn professioneel." },
      { domain: "science", icon: "🔬", text: "Metalinguïstisch bewustzijn is een kernvaardigheid voor leesvaardigheid: onderzoek toont dat kinderen beter leren lezen als ze over taal kunnen nadenken." }
    ],
    prerequisites: ["linguistic-relativity"],
    unlocks: ["semantic-drift"],
    exercises: [
      { type: "multipleChoice", question: "Welke praktische vaardigheid profiteert het meest van metalinguïstisch bewustzijn?", options: ["Sneller lezen", "Kritische media-analyse en detectie van framing en manipulatie", "Sneller typen", "Beter spellen"], correctIndex: 1, explanation: "Metalinguïstisch bewustzijn stelt je in staat taal te analyseren als systeem — waardoor framing, dubbele betekenissen en manipulatieve woordkeuzes zichtbaar worden." }
    ],
    creativePrompt: "Kies een tekst (artikel, contract, reclame). Analyseer de woordkeuze: welke woorden zijn bewust gekozen? Welke associaties laden ze? Wat zou het effect zijn van andere woorden?",
    aiHelperPrompts: ["Hoe ontwikkel ik metalinguïstisch bewustzijn?", "Hoe hangt metalinguïstisch bewustzijn samen met kritisch denken?", "Hoe gebruik ik dit bij het analyseren van politieke taal?"]
  },

  // ── BATCH 10: PERSOONLIJKE ONTWIKKELING & PSYCHOLOGIE ────────
  {
    id: "impostor-syndrome",
    title: "Impostor-Syndroom",
    difficulty: 1,
    emoji: "🎭",
    academicCategory: "Psychologie",
    skillCategory: "Zelfkennis",
    tags: ["Psychologie", "Zelfkennis", "Carrière", "Beter Redeneren"],
    definition: "Het gevoel dat je successen te danken zijn aan geluk of misleiding, en dat anderen je vroeg of laat zullen 'ontmaskeren' als onbekwaam — ook als objectief bewijs het tegendeel aantoont.",
    abstractExample: "Een expert met twintig jaar ervaring die voor een conferentie staat denkt: 'Ze zullen erachter komen dat ik eigenlijk niks weet.' Tegelijkertijd ziet het publiek een autoriteit.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een student die een hoog cijfer haalt denkt: 'Ik had mazzel, volgende keer prik ik door de mand'." },
      { domain: "business", icon: "💼", text: "Onderzoek toont dat 70% van hoogpresteerders zich af en toe 'oplichters' voelt — inclusief veel bekende wetenschappers en leiders." },
      { domain: "science", icon: "🔬", text: "Clance & Imes (1978) beschreven het 'impostor phenomeen' eerst bij academisch succesvolle vrouwen; het bleek later universeel." }
    ],
    prerequisites: ["self-serving-bias", "dunning-kruger"],
    unlocks: ["self-efficacy"],
    exercises: [
      { type: "multipleChoice", question: "Wat is een effectieve aanpak tegen het impostor-syndroom?", options: ["Meer bewijzen verzamelen voor je competentie", "Erkennen dat het gevoel universeel is en succesverhalen bewust documenteren", "Verwachtingen verlagen", "Het gevoel negeren"], correctIndex: 1, explanation: "Bewust bijhouden van successen en beseffen dat het gevoel bijna universeel is, helpt het impostor-syndroom te normaliseren en relativeren." }
    ],
    creativePrompt: "Maak een lijst van je vijf grootste professionele successen. Schrijf bij elk: was dit puur geluk, of droeg jouw inzet en kennis bij? Hoe objectief is je beoordeling?",
    aiHelperPrompts: ["Hoe onderscheid ik gezonde bescheidenheid van impostor-syndroom?", "Waarom treft impostor-syndroom juist hoogpresteerders?", "Hoe help ik iemand die lijdt aan impostor-syndroom?"]
  },
  {
    id: "learned-helplessness",
    title: "Aangeleerde Hulpeloosheid",
    difficulty: 2,
    emoji: "😔",
    academicCategory: "Psychologie",
    skillCategory: "Zelfkennis",
    tags: ["Psychologie", "Zelfkennis", "Motivatie", "Beter Redeneren"],
    definition: "Na herhaalde blootstelling aan situaties waar men geen controle heeft, stopt men met pogingen te ondernemen — ook wanneer situatie verandert en controle wel mogelijk is. Hulpeloosheid wordt geleerd.",
    abstractExample: "Honden die herhaaldelijk elektrische schokken krijgen die ze niet kunnen stoppen, maken later geen poging meer te ontsnappen als dat wél mogelijk is. Ze leerden dat acties zinloos zijn.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Iemand die jarenlang in armoede leefde, ziet nieuwe kansen soms niet — de overtuiging 'niets helpt toch' is geïnternaliseerd." },
      { domain: "business", icon: "💼", text: "Een medewerker wiens ideeën altijd worden afgewezen, stopt na verloop van tijd met initiatieven nemen — ook als de manager verandert." },
      { domain: "science", icon: "🔬", text: "Seligman & Maier (1967) ontdekten aangeleerde hulpeloosheid bij honden en koppelden het later aan depressie bij mensen." }
    ],
    prerequisites: ["locus-of-control"],
    unlocks: ["self-efficacy"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de beste interventie voor aangeleerde hulpeloosheid?", options: ["Meer mislukkingen toevoegen", "Kleine successen creëren waarbij de persoon controle ervaart", "Vermijden van alle uitdagingen", "Uitleggen dat de situatie veranderd is"], correctIndex: 1, explanation: "Kleine, behaalbare successen waarbij de persoon merkt dat zijn acties wél effect hebben, beginnen de aangeleerde hulpeloosheid te doorbreken." }
    ],
    creativePrompt: "Herken je in je leven een domein waar je gestopt bent met proberen na herhaald falen? Is de situatie nu anders? Wat zou je anders kunnen proberen?",
    aiHelperPrompts: ["Hoe herken ik aangeleerde hulpeloosheid bij mijzelf?", "Hoe herstel ik mijn gevoel van controle na langdurig falen?", "Hoe hangt dit samen met locus of control?"]
  },
  {
    id: "self-efficacy",
    title: "Zelf-Effectiviteit",
    difficulty: 1,
    emoji: "💪",
    academicCategory: "Psychologie",
    skillCategory: "Zelfkennis",
    tags: ["Psychologie", "Zelfkennis", "Motivatie", "Beter Redeneren"],
    definition: "De overtuiging in je eigen vermogen om specifieke taken uit te voeren en gewenste uitkomsten te bereiken. Zelf-effectiviteit is specifiek (niet globaal zelfvertrouwen) en sterk bepalend voor prestatie.",
    abstractExample: "Twee studenten met identieke vaardigheid gaan een examen in. De student met hoge zelf-effectiviteit presteert beter — niet door meer kennis, maar door hogere inzet en beter omgaan met obstakels.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Iemand die gelooft dat hij een presentatie aankan, bereidt zich beter voor, spreekt zelfverzekerder en presteert dan ook beter." },
      { domain: "business", icon: "💼", text: "Verkopers met hogere zelf-effectiviteit verwerven statistisch meer deals — niet door betere productkennis maar door volharding bij weigeringen." },
      { domain: "science", icon: "🔬", text: "Bandura (1977) introduceerde de term en toonde aan dat zelf-effectiviteit gedrag, inspanning en doorzettingsvermogen sterker voorspelt dan vaardigheidsniveau." }
    ],
    prerequisites: ["learned-helplessness", "locus-of-control"],
    unlocks: ["growth-mindset"],
    exercises: [
      { type: "multipleChoice", question: "Hoe bouw je zelf-effectiviteit het meest effectief op?", options: ["Door anderen te observeren", "Door verbale aanmoediging", "Door eigen ervaringen van succes (mastery experiences)", "Door theorie te bestuderen"], correctIndex: 2, explanation: "Bandura identificeerde mastery experiences (eigen successen) als de sterkste bron van zelf-effectiviteit — sterker dan observatie of aanmoediging." }
    ],
    creativePrompt: "Kies een vaardigheid die je wilt verbeteren. Stel een serie oplopende uitdagingen op waarbij je telkens net buiten je comfortzone werkt. Hoe bouw je mastery experiences op?",
    aiHelperPrompts: ["Hoe beïnvloedt zelf-effectiviteit leergedrag?", "Hoe onderscheidt zelf-effectiviteit zich van zelfvertrouwen?", "Hoe kan ik zelf-effectiviteit bij anderen versterken?"]
  },
  {
    id: "growth-mindset",
    title: "Groeimindset",
    difficulty: 1,
    emoji: "🌱",
    academicCategory: "Psychologie",
    skillCategory: "Beter Leren",
    tags: ["Psychologie", "Leren", "Motivatie", "Beter Leren"],
    definition: "De overtuiging dat talenten en intelligentie kunnen worden ontwikkeld door inspanning, goede strategieën en ondersteuning. Tegenover een vaste mindset die aanneemt dat kwaliteiten aangeboren en onveranderlijk zijn.",
    abstractExample: "Twee kinderen krijgen een moeilijke opgave. Vast mindset-kind: 'Dit kan ik niet, ik ben niet slim genoeg.' Groeimindset-kind: 'Dit is moeilijk, maar als ik oefen, leer ik het.' Beide zullen uitlopen op zelfvervullende profetieën.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Bij het leren van een nieuw instrument: vaste mindset zegt 'ik heb geen muzikaal talent'. Groeimindset zegt 'ik heb nog niet genoeg geoefend'." },
      { domain: "business", icon: "💼", text: "Teams met groeimindset reageren constructiever op fouten — ze zien fouten als leermomenten, niet als bewijs van incompetentie." },
      { domain: "science", icon: "🔬", text: "Carol Dweck's decennialange onderzoek (samengevat in 'Mindset', 2006) toonde robuust aan dat mindset prestatie en welbevinden beïnvloedt." }
    ],
    prerequisites: ["self-efficacy"],
    unlocks: ["deliberate-practice"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de kritiek op het mindset-onderzoek van Dweck?", options: ["Het werkt nooit", "De effecten zijn in sommige meta-analyses kleiner dan oorspronkelijk gerapporteerd en interventies zijn soms moeilijk te repliceren", "De theorie is fout", "Alle kritiek is onterecht"], correctIndex: 1, explanation: "Groeimindset-interventies zijn veelbelovend maar sommige effecten zijn kleiner dan verwacht; de context en implementatie bepalen sterk het resultaat." }
    ],
    creativePrompt: "Identificeer een terrein waarop je een 'vaste mindset' hebt ('ik ben geen wiskundige/kunstenaar/sporter'). Herschrijf die overtuiging als een groeimindset-statement. Wat verandert er?",
    aiHelperPrompts: ["Hoe cultiveer ik een groeimindset in mijn dagelijks leven?", "Wanneer is een vaste mindset ook nuttig?", "Hoe geef ik groeimindset-feedback als manager of leraar?"]
  },
  {
    id: "deliberate-practice",
    title: "Doelgerichte Oefening",
    difficulty: 2,
    emoji: "🎯",
    academicCategory: "Psychologie",
    skillCategory: "Beter Leren",
    tags: ["Psychologie", "Leren", "Expertise", "Beter Leren"],
    definition: "Oefening die specifiek gericht is op verbetering door feedback, het aanpakken van zwakke punten en bewuste concentratie, buiten de comfortzone. Niet alle oefening leidt tot verbetering.",
    abstractExample: "Een pianist die zijn lievelingsstukken herhaalt, oefent — maar verbetert weinig. Een pianist die focust op de moeilijkste passages, feedback vraagt en systematisch zijn zwakke punten aanpakt, doet deliberate practice.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Taal leren door gesprekken met native speakers met gerichte feedback verbetert sneller dan passief luisteren naar dezelfde films." },
      { domain: "business", icon: "💼", text: "Topsprekers verbeteren door gerichte oefening met feedback op specifieke aspecten (openingszin, contact met publiek), niet door simpelweg meer toespraken te geven." },
      { domain: "science", icon: "🔬", text: "Anders Ericsson toonde aan dat de '10.000 uren'-regel van Gladwell sloeg op deliberate practice, niet op elk soort oefening." }
    ],
    prerequisites: ["growth-mindset"],
    unlocks: ["metacognition"],
    exercises: [
      { type: "multipleChoice", question: "Wat onderscheidt deliberate practice van gewone oefening?", options: ["Het duurt langer", "Het is gericht op specifieke zwakke punten, met feedback, buiten de comfortzone", "Het is altijd plezieriger", "Het vereist geen leraar"], correctIndex: 1, explanation: "Deliberate practice vereist bewuste concentratie, gerichte aandacht voor verbetering en constante feedback — het tegenovergestelde van routineuze herhaling." }
    ],
    creativePrompt: "Kies een vaardigheid die je wilt verbeteren. Ontwerp een deliberate practice-sessie: welk specifiek zwak punt pak je aan, hoe krijg je feedback, en wat is de uitdaging?",
    aiHelperPrompts: ["Hoe ontwerp ik deliberate practice voor mijn vakgebied?", "Waarom is deliberate practice vaak niet leuk?", "Hoe kan ik feedback krijgen als ik geen coach of leraar heb?"]
  },
  {
    id: "flow-state",
    title: "Flowstaat",
    difficulty: 1,
    emoji: "🌊",
    academicCategory: "Psychologie",
    skillCategory: "Beter Leren",
    tags: ["Psychologie", "Motivatie", "Productiviteit", "Beter Leren"],
    definition: "Een mentale toestand van volledige absorptie in een uitdagende activiteit, waarbij het tijdsbesef verloren gaat en prestatie en plezier tegelijk optimaal zijn. Flow vereist balans tussen uitdaging en vaardigheid.",
    abstractExample: "Een schaker die zo verdiept is in een wedstrijd dat ze uren voorbijvlogen zonder dat het opviel. Noch te gemakkelijk (saai), noch te moeilijk (angstig). Precies op de rand van vaardigheid.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een programmeur die zo diep in een probleem duikt dat ze pas uren later opkijkt — flow is de reden dat 'time flies when you're having fun' werkt." },
      { domain: "business", icon: "💼", text: "Topchirurgen in complexe operaties, professionele atleten in wedstrijden — flow is gerapporteerd als het beste gevoel in hun loopbaan." },
      { domain: "science", icon: "🔬", text: "Mihaly Csikszentmihalyi beschreef flow in 1975 na decennialang onderzoek naar wanneer mensen optimaal gelukkig en productief zijn." }
    ],
    prerequisites: ["self-efficacy", "deliberate-practice"],
    unlocks: ["metacognition"],
    exercises: [
      { type: "multipleChoice", question: "Welke condities zijn noodzakelijk voor flow?", options: ["Alleen rust en geen stress", "Balans tussen uitdaging en vaardigheid, duidelijke doelen en directe feedback", "Maximale ontspanning", "Externe druk van anderen"], correctIndex: 1, explanation: "Flow vereist een activiteit die net uitdagend genoeg is om volledige concentratie te vereisen, maar niet zo moeilijk dat angst ontstaat." }
    ],
    creativePrompt: "Beschrijf een situatie waarbij je in flowstaat was. Wat maakte die ervaring zo? Hoe kun je vaker die condities creëren in je werk of hobby?",
    aiHelperPrompts: ["Hoe creëer ik de omstandigheden voor flow in mijn werk?", "Is flow altijd productief?", "Hoe hangt flow samen met deliberate practice — zijn ze tegenstrijdig?"]
  },
  {
    id: "metacognition",
    title: "Metacognitie",
    difficulty: 2,
    emoji: "🧠",
    academicCategory: "Cognitieve Psychologie",
    skillCategory: "Beter Leren",
    tags: ["Cognitieve Psychologie", "Leren", "Zelfkennis", "Beter Leren"],
    definition: "Denken over je eigen denkproces — het bewustzijn en de regulatie van je eigen cognitie. Metacognitie stelt je in staat te monitoren wat je weet, hoe je leert en waar je tekortschiet.",
    abstractExample: "Een leerling die beseft 'Ik denk dat ik dit begrijp, maar kan ik het ook uitleggen?' en zichzelf toetst voor het examen, gebruikt metacognitie. Ze weten wanneer ze weten.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Het 'gevoel van weten' dat je de naam kent maar niet kunt ophalen — dit is metacognitief bewustzijn van je geheugenprocessen." },
      { domain: "business", icon: "💼", text: "Een manager die na een beslissing denkt: 'Was ik beïnvloed door confirmation bias?' gebruikt metacognitie om zijn eigen redeneerfouten te corrigeren." },
      { domain: "science", icon: "🔬", text: "Flavell (1979) introduceerde de term; sindsdien toont onderzoek consistent dat metacognitief bewustzijn een sterke predictor is van leerprestaties." }
    ],
    prerequisites: ["epistemic-humility"],
    unlocks: ["deliberate-practice"],
    exercises: [
      { type: "multipleChoice", question: "Welke leerstrategie is het meest gebaseerd op metacognitie?", options: ["Herhaaldelijk lezen", "Zichzelf toetsen na leren (retrieval practice)", "Markeren van teksten", "Samenvatten in de marge"], correctIndex: 1, explanation: "Retrieval practice vereist dat je inschat wat je weet en niet weet — een directe metacognitieve activiteit die ook het geheugen versterkt." }
    ],
    creativePrompt: "Gebruik na je volgende leeractiviteit metacognitie: schrijf op wat je wist, wat je niet wist, en hoe effectief je leerstrategie was. Wat had je anders gedaan?",
    aiHelperPrompts: ["Hoe train ik mijn metacognitieve vaardigheden?", "Hoe gebruik ik metacognitie bij het beoordelen van informatie?", "Hoe hangt metacognitie samen met dunning-kruger effect?"]
  },
  {
    id: "emotional-regulation",
    title: "Emotieregulatie",
    difficulty: 2,
    emoji: "⚖️",
    academicCategory: "Psychologie",
    skillCategory: "Zelfkennis",
    tags: ["Psychologie", "Emoties", "Zelfkennis", "Betere Beslissingen"],
    definition: "Het bewuste of onbewuste proces van het moduleren van emotionele ervaringen en uitingen — welke emoties we hebben, wanneer, en hoe we ze uitdrukken. Effectieve regulatie verbetert welzijn en relaties.",
    abstractExample: "Je raakt gefrustreerd in een vergadering. Regulatie kan betekenen: herwaarderen ('dit is een kans om te oefenen'), suppressie (geen reactie tonen), of de situatie verlaten. Elke strategie heeft andere langetermijneffecten.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Bij hevige teleurstelling pauzeren en doorademen alvorens te reageren — cognitieve herwaardering vermindert de emotionele intensiteit." },
      { domain: "business", icon: "💼", text: "Leiders die hun emoties effectief reguleren, worden als betrouwbaarder beschouwd en hebben beter presterende teams." },
      { domain: "science", icon: "🔬", text: "Gross (1998) beschreef het procesmodel van emotieregulatie; herwaardering (reappraisal) bleek langetermijn effectiever dan suppressie." }
    ],
    prerequisites: ["affect-heuristic"],
    unlocks: ["metacognition"],
    exercises: [
      { type: "multipleChoice", question: "Welke regulatiestrategie is langetermijn het meest effectief?", options: ["Emoties onderdrukken (suppressie)", "Cognitieve herwaardering (de situatie anders interpreteren)", "Emoties volledig uiten", "Emoties ontkennen"], correctIndex: 1, explanation: "Herwaardering verandert de emotie zelf; suppressie vermindert de uiting maar verhoogt de fysiologische stress. Herwaardering is duurzamer." }
    ],
    creativePrompt: "Kies een situatie die je sterk van je stuk brengt. Oefen cognitieve herwaardering: schrijf drie alternatieve interpretaties van de situatie die minder emotioneel laden.",
    aiHelperPrompts: ["Wat is het verschil tussen emotieregulatie en het onderdrukken van emoties?", "Hoe leer ik herwaardering als emotieregulatietechniek?", "Hoe hangt emotieregulatie samen met besluitvorming?"]
  },
  {
    id: "implementation-intention",
    title: "Implementatievoornemen",
    difficulty: 1,
    emoji: "📋",
    academicCategory: "Psychologie",
    skillCategory: "Betere Beslissingen",
    tags: ["Psychologie", "Gedragsverandering", "Planning", "Betere Beslissingen"],
    definition: "Een specifiek plan van de vorm 'Als situatie X zich voordoet, dan voer ik actie Y uit.' Implementatievoornemens zijn bewezen effectiever dan vage intenties voor het vertalen van doelen naar gedrag.",
    abstractExample: "Vage intentie: 'Ik wil meer sporten.' Implementatievoornemen: 'Als het maandag is en ik thuiskom van werk, trek ik direct mijn sportschoenen aan en ga ik hardlopen.' Het specifieke if-then plan overbrugt de kloof tussen intentie en actie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'Als ik opstaat zet ik mijn vitamines naast mijn tandenborstel' — een implementatievoornemen dat het vergeten elimineert." },
      { domain: "business", icon: "💼", text: "'Als ik na een vergadering mijn agenda open, schrijf ik direct de actiepunten op' — context-triggered gedrag vermijdt uitstel." },
      { domain: "science", icon: "🔬", text: "Gollwitzer (1999) toonde aan dat implementatievoornemens de kans op gewenst gedrag met 200-300% verhogen ten opzichte van vage intenties." }
    ],
    prerequisites: ["nudge-theory", "default-effect"],
    unlocks: ["self-efficacy"],
    exercises: [
      { type: "multipleChoice", question: "Wat maakt een implementatievoornemen effectiever dan een gewone intentie?", options: ["Het is positiever geformuleerd", "Het koppelt een specifieke trigger-situatie aan een specifieke actie, waardoor de handeling automatisch kan plaatsvinden", "Het is schriftelijk", "Het heeft een deadline"], correctIndex: 1, explanation: "Door de trigger expliciet te koppelen aan de actie, wordt de situatie zelf de herinnering — zonder willenskracht of mentale monitoring." }
    ],
    creativePrompt: "Kies een doel dat je al lang wilt bereiken. Formuleer vijf concrete if-then implementatieplannen. Hoe verandert dit de kans dat je werkelijk actie onderneemt?",
    aiHelperPrompts: ["Hoe maak ik effectieve implementatieplannen?", "Wanneer werken implementatieplannen niet?", "Hoe combineer ik implementatieplannen met omgevingsontwerp?"]
  },
  {
    id: "self-determination-theory",
    title: "Zelfbeschikkingstheorie",
    difficulty: 2,
    emoji: "🔑",
    academicCategory: "Psychologie",
    skillCategory: "Beter Samenwerken",
    tags: ["Psychologie", "Motivatie", "Leiderschap", "Beter Samenwerken"],
    definition: "Mensen gedijen wanneer drie basisbehoeften worden vervuld: autonomie (keuze en regie), competentie (gevoel van meesterschap) en verbondenheid (betekenisvolle relaties). Externe beloning kan intrinsieke motivatie ondermijnen.",
    abstractExample: "Een kind dat enthousiast tekent voor het plezier, begint minder te tekenen als het een beloning krijgt voor elk tekening. De externe beloning vervangt de intrinsieke motivatie en ondermijnt die.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Vrijwilligerswerk dat men doet uit persoonlijke motivatie, maar dat betaald gaat worden, kan minder aantrekkelijk worden door het 'crowding out'-effect van extrinsieke beloning." },
      { domain: "business", icon: "💼", text: "Managers die autonomie geven (keuze in hoe taken worden uitgevoerd) hebben gemotiveerdere en productiever medewerkers dan managers die nauwgezet controleren." },
      { domain: "science", icon: "🔬", text: "Deci & Ryan (1985) beschreven de zelfbeschikkingstheorie; het 'overjustification effect' (beloning ondermijnt intrinsieke motivatie) is replicated in honderden studies." }
    ],
    prerequisites: ["locus-of-control", "social-capital"],
    unlocks: ["growth-mindset"],
    exercises: [
      { type: "multipleChoice", question: "Wanneer ondermijnt beloning intrinsieke motivatie?", options: ["Altijd", "Wanneer de beloning contingent is aan het uitvoeren van intrinsiek motiverende activiteiten", "Nooit bij volwassenen", "Alleen bij kinderen"], correctIndex: 1, explanation: "Belonen voor activiteiten die mensen al uit zichzelf leuk vinden, signaleert dat de activiteit zelf niet de moeite waard is — de beloning is het doel geworden." }
    ],
    creativePrompt: "Analyseer een activiteit die je vroeger leuk vond maar nu minder aantrekkelijk is. Is er een externe beloning of verplichting bijgekomen? Hoe hervindt je de intrinsieke motivatie?",
    aiHelperPrompts: ["Hoe ontwerp ik taken die autonomie, competentie en verbondenheid bevorderen?", "Wanneer is extrinsieke motivatie wél nuttig?", "Hoe hangt zelfbeschikkingstheorie samen met groeimindset?"]
  }
];
