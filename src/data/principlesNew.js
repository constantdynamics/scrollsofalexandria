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
  },

  // ── BATCH A: COMMUNICATIE & GESPREKSTECHNIEKEN ────────────────
  {
    id: "active-listening",
    title: "Actief Luisteren",
    difficulty: 1,
    emoji: "👂",
    academicCategory: "Communicatie",
    skillCategory: "Beter Communiceren",
    tags: ["Communicatie", "Relaties", "Empathie", "Beter Communiceren"],
    definition: "Volledig aanwezig zijn in een gesprek door bewust te luisteren, te begrijpen en te reageren op de ander — zonder al te formuleren wat je zelf wilt zeggen. Actief luisteren gaat verder dan horen.",
    abstractExample: "In een gesprek waarbij je actief luistert, richt je alle aandacht op de ander: je houdt oogcontact, knikt, parafraseert wat je hoort en stelt verdiepende vragen. Je denkt niet aan je eigen volgende zin.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een partner die klaagt over zijn dag voelt het verschil tussen iemand die 'mmm' zegt achter zijn telefoon en iemand die echt aanwezig is en doorvraagt." },
      { domain: "business", icon: "💼", text: "Managers die actief luisteren ontdekken problemen eerder en medewerkers delen meer nuttige informatie met hen." },
      { domain: "science", icon: "🔬", text: "Onderzoek van Itzchakov & Kluger (2018) toont dat kwalitatief luisteren de gesprekspartner helderder laat denken en openheid vergroot." }
    ],
    prerequisites: ["principle-of-charity"],
    unlocks: ["nonviolent-communication"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de grootste belemmering voor actief luisteren?", options: ["Te weinig woorden kennen", "Innerlijke dialoog: al formuleren wat je zelf wilt zeggen", "Te snel praten", "Te weinig kennis over het onderwerp"], correctIndex: 1, explanation: "De meeste mensen luisteren om te antwoorden, niet om te begrijpen. De innerlijke dialoog verstoort echte aandacht voor de ander." }
    ],
    creativePrompt: "Voer vandaag een gesprek waarbij je jezelf verbiedt iets over jezelf te zeggen. Stel alleen vragen en parafraseer. Wat merk je?",
    aiHelperPrompts: ["Hoe kan ik mijn luisterkwaliteit meten?", "Wat zijn praktische technieken voor actief luisteren?", "Hoe helpt actief luisteren bij conflictoplossing?"]
  },
  {
    id: "nonviolent-communication",
    title: "Geweldloze Communicatie",
    difficulty: 2,
    emoji: "🕊️",
    academicCategory: "Communicatie",
    skillCategory: "Beter Communiceren",
    tags: ["Communicatie", "Conflictoplossing", "Empathie", "Beter Communiceren"],
    definition: "Een communicatiemethode gebaseerd op vier stappen: observatie (feiten zonder oordeel), gevoel (jouw emotie), behoefte (onderliggende waarde) en verzoek (concreet, uitvoerbaar). Scheidt feiten van interpretaties.",
    abstractExample: "Aanklacht: 'Jij luistert nooit.' GCC: 'Wanneer je tijdens ons gesprek op je telefoon kijkt [observatie], voel ik me niet gehoord [gevoel], want verbinding is voor mij belangrijk [behoefte]. Kun je je telefoon wegleggen? [verzoek]'",
    examples: [
      { domain: "daily", icon: "🏠", text: "In plaats van 'Je bent altijd te laat!': 'Wanneer je 20 minuten later komt dan afgesproken, voel ik me niet gewaardeerd. Ik heb behoefte aan stiptheid. Kun je me laten weten als je vertraging hebt?'" },
      { domain: "business", icon: "💼", text: "GCC-feedback op het werk scheidt gedrag ('Je rapport miste drie secties') van persoon ('Je bent slordig'), wat minder defensieve reacties uitlokt." },
      { domain: "science", icon: "🔬", text: "Marshall Rosenberg ontwikkelde GCC in de jaren '60; onderzoek toont dat het empathisch begrip vergroot en conflicten constructiever maakt." }
    ],
    prerequisites: ["active-listening"],
    unlocks: ["conflict-resolution"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het verschil tussen een observatie en een evaluatie in GCC?", options: ["Ze zijn identiek", "Een observatie beschrijft concrete feiten; een evaluatie bevat oordelen over de ander", "Een evaluatie is objectiever", "GCC gebruikt alleen evaluaties"], correctIndex: 1, explanation: "Observatie: 'Je was er niet bij de vergadering.' Evaluatie: 'Je bent onbetrouwbaar.' De eerste beschrijft feiten; de tweede bevat een oordeel dat defensiviteit uitlokt." }
    ],
    creativePrompt: "Denk aan een recente ruzie of irritatie. Herschrijf jouw reactie in vier GCC-stappen: observatie, gevoel, behoefte, verzoek.",
    aiHelperPrompts: ["Hoe leer ik mijn behoeften te onderscheiden van mijn verzoeken?", "Wanneer werkt GCC niet of minder goed?", "Hoe gebruik ik GCC met iemand die er niet bekend mee is?"]
  },
  {
    id: "assertiveness",
    title: "Assertiviteit",
    difficulty: 1,
    emoji: "🦁",
    academicCategory: "Communicatie",
    skillCategory: "Beter Communiceren",
    tags: ["Communicatie", "Zelfkennis", "Grenzen", "Beter Communiceren"],
    definition: "De vaardigheid om je mening, behoeften en grenzen duidelijk en respectvol te uiten, zonder passief (alles accepteren) of agressief (anderen overheersen) te zijn. Assertiviteit is de middenweg.",
    abstractExample: "Passief: 'Oh, het maakt mij niet uit.' Agressief: 'Jij hebt het altijd mis!' Assertief: 'Ik denk hier anders over. Mijn perspectief is...' Dezelfde situatie, drie totaal verschillende reacties.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Nee zeggen op een verzoek zonder schuldgevoel: 'Ik heb die avond al iets gepland, ik kan er niet bij zijn.'" },
      { domain: "business", icon: "💼", text: "Een medewerker die assertief zijn werkdrempel aangeeft ('Ik kan dit kwalitatief leveren als ik tot vrijdag heb') werkt duurzamer dan iemand die stil instemt maar overbelast raakt." },
      { domain: "science", icon: "🔬", text: "Assertiviteitstraining is een bewezen effectieve cognitief-gedragstherapeutische techniek voor angst- en zelfbeeldproblemen." }
    ],
    prerequisites: ["nonviolent-communication"],
    unlocks: ["boundary-setting"],
    exercises: [
      { type: "multipleChoice", question: "Wat onderscheidt assertiviteit van agressiviteit?", options: ["Assertiviteit is zachter van toon", "Assertiviteit respecteert zowel de eigen als andermans rechten; agressiviteit negeert andermans rechten", "Assertiviteit vraagt altijd toestemming", "Agressiviteit is assertiever"], correctIndex: 1, explanation: "Assertiviteit is gericht op wederzijds respect. Agressiviteit gaat ten koste van de ander om de eigen wil door te zetten." }
    ],
    creativePrompt: "Kies drie situaties waar je passief reageerde maar eigenlijk 'nee' wilde zeggen. Herschrijf jouw reactie assertief. Hoe voelt dat?",
    aiHelperPrompts: ["Hoe ontwikkel ik assertiviteit als ik van nature vermijdend ben?", "Wat zijn de culturele grenzen van assertiviteit?", "Hoe blijf ik assertief zonder te botsen?"]
  },
  {
    id: "radical-candor",
    title: "Radicale Openheid",
    difficulty: 2,
    emoji: "💬",
    academicCategory: "Leiderschap",
    skillCategory: "Beter Communiceren",
    tags: ["Leiderschap", "Communicatie", "Feedback", "Beter Communiceren"],
    definition: "Feedback geven die zowel direct als oprecht bezorgd is — tegelijkertijd uitdagen en persoonlijk betrokken zijn. Het kwadrant van Kim Scott: ruineuze empathie, wrede eerlijkheid, manipulatieve onoprechtheid en radicale openheid.",
    abstractExample: "Ruineuze empathie: problemen verzwijgen om gevoelens te sparen. Radicale openheid: 'Ik zeg je dit omdat ik geloof in jouw potentieel: dit rapport mist drie cruciale secties. Laten we kijken hoe we het aanpakken.'",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een vriend eerlijk vertellen dat zijn idee een kritisch probleem heeft, maar hem ook aanbieden te helpen het te verbeteren." },
      { domain: "business", icon: "💼", text: "Een manager die direct feedback geeft ('Je presentatie miste structuur') maar ook persoonlijke ondersteuning biedt, bouwt meer vertrouwen dan een die zwijgt of alleen kritiseert." },
      { domain: "science", icon: "🔬", text: "Kim Scott beschreef het concept in 'Radical Candor' (2017) op basis van haar ervaring bij Google en Apple." }
    ],
    prerequisites: ["assertiveness", "active-listening"],
    unlocks: ["psychological-safety"],
    exercises: [
      { type: "multipleChoice", question: "Wat is 'ruineuze empathie'?", options: ["Te veel feedback geven", "Kritische feedback achterhouden om gevoelens te sparen, waardoor de ander niet kan groeien", "Te direct zijn", "Feedback die anderen kwetst"], correctIndex: 1, explanation: "Ruineuze empathie klinkt vriendelijk maar is uiteindelijk schadelijk: door problemen te verzwijgen, ontneemt je iemand de kans om te verbeteren." }
    ],
    creativePrompt: "Denk aan kritische feedback die je al een tijdje niet geeft aan iemand om die te sparen. Hoe zou je die feedback formuleren in de geest van radicale openheid?",
    aiHelperPrompts: ["Hoe geef ik moeilijke feedback zonder de relatie te beschadigen?", "Hoe verschilt radicale openheid van bot zijn?", "Hoe creëer ik een cultuur van radicale openheid in een team?"]
  },
  {
    id: "power-of-silence",
    title: "Kracht van Stilte",
    difficulty: 1,
    emoji: "🤫",
    academicCategory: "Communicatie",
    skillCategory: "Beter Communiceren",
    tags: ["Communicatie", "Onderhandeling", "Bewustzijn", "Beter Communiceren"],
    definition: "Stilte in communicatie is geen leegte maar een krachtig instrument — het geeft ruimte voor reflectie, dwingt de ander te reageren, en versterkt de impact van wat voorafging.",
    abstractExample: "Na een sterk argument bewust zwijgen laat het bezinken. In onderhandeling: na het noemen van je prijs zwijgen. De eerste die praat, geeft concessies. Stilte is onderhandelingskracht.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Na het stellen van een moeilijke vraag niet meteen de stilte opvullen — de ander heeft ruimte nodig om eerlijk na te denken." },
      { domain: "business", icon: "💼", text: "Ervaren onderhandelaars zwijgen na hun openingsbod. Wie als eerste de stilte verbreekt, geeft gewoonlijk toe." },
      { domain: "science", icon: "🔬", text: "Onderzoek toont dat mensen gemiddeld maar 1,5 seconde stilte tolereren voor ze de stilte opvullen. Bewust langer zwijgen geeft strategisch voordeel." }
    ],
    prerequisites: ["active-listening"],
    unlocks: ["assertiveness"],
    exercises: [
      { type: "multipleChoice", question: "Waarom vullen mensen stilte zo snel op?", options: ["Ze hebben altijd iets te zeggen", "Stilte voelt ongemakkelijk en mensen proberen die discomfort te reduceren", "Stilte is sociaal onaanvaardbaar", "Ze vergeten te zwijgen"], correctIndex: 1, explanation: "Stilte triggert discomfort; mensen praten om de spanning te verminderen. Degene die bewust de stilte aanhoudt, heeft meer controle in het gesprek." }
    ],
    creativePrompt: "Oefening: stel vandaag een vraag aan iemand en tel daarna bewust tot tien voor je reageert op hun antwoord. Wat merk je aan het gesprek?",
    aiHelperPrompts: ["Hoe gebruik ik stilte effectief in onderhandelingen?", "Wanneer is stilte als instrument manipulatief?", "Hoe leer ik mijn discomfort bij stilte te verdragen?"]
  },
  {
    id: "mirroring",
    title: "Spiegelen",
    difficulty: 1,
    emoji: "🪞",
    academicCategory: "Communicatie",
    skillCategory: "Beter Communiceren",
    tags: ["Communicatie", "Rapport", "Empathie", "Beter Communiceren"],
    definition: "Het subtiel imiteren van de lichaamstaal, toon, tempo en woordkeuze van de gesprekspartner. Spiegelen bouwt onbewust rapport op en laat de ander zich begrepen voelen.",
    abstractExample: "Iemand leunt achterover; jij leunt ook iets achterover. Iemand spreekt langzaam en rustig; jij past je tempo aan. Dit gaat niet over bewust nadoen maar over aansluiting bij de energie en stijl van de ander.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Vrienden die al lang bevriend zijn, synchroniseren automatisch hun lichaamstaal. Bewust spiegelen versnelt dit rapport-opbouwproces." },
      { domain: "business", icon: "💼", text: "FBI-onderhandelaar Chris Voss beschrijft spiegelen (het herhalen van de laatste 2-3 woorden van de ander) als een van de krachtigste gesprekstechnieken." },
      { domain: "science", icon: "🔬", text: "Spiegelneuronen in de hersenen zijn deels verantwoordelijk voor spontaan spiegelgedrag; bewust toepassen vergroot prosociaal gedrag." }
    ],
    prerequisites: ["active-listening"],
    unlocks: ["rapport-building"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het effect van bewust spiegelen in een gesprek?", options: ["Irritatie bij de ander", "Verhoogd gevoel van verbinding en begrip bij de gesprekspartner", "Verwarring", "Dominantie over de ander"], correctIndex: 1, explanation: "Spiegelen communiceert non-verbaal 'ik stem af op jou', wat een gevoel van synchronie en begrip opwekt." }
    ],
    creativePrompt: "Probeer in je volgende gesprek bewust de woordkeuze en het spreektempo van de ander te weerspiegelen. Let op hoe het gesprek verloopt.",
    aiHelperPrompts: ["Hoe spiegel ik subtiel zonder dat het nep voelt?", "Wanneer werkt spiegelen averechts?", "Hoe hangt spiegelen samen met empathie?"]
  },
  {
    id: "reframing-technique",
    title: "Herkadering",
    difficulty: 2,
    emoji: "🖼️",
    academicCategory: "Psychologie",
    skillCategory: "Beter Communiceren",
    tags: ["Psychologie", "Communicatie", "Creativiteit", "Beter Communiceren"],
    definition: "Een situatie, probleem of overtuiging in een ander kader plaatsen zodat de betekenis verandert. Herkader je een situatie, dan verandert niet de situatie zelf maar de manier waarop je er tegenaan kijkt.",
    abstractExample: "Falen op een examen: 'Ik ben mislukt' → 'Ik heb waardevolle informatie ontvangen over wat ik nog moet leren.' Dezelfde gebeurtenis, ander kader, andere emotie en ander vervolggedrag.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een drukke dag als 'overladen' herkaderd naar 'mijn vaardigheden zijn gevraagd' verandert de ervaring zonder de feiten te veranderen." },
      { domain: "business", icon: "💼", text: "Een kritische klant herkaderd als 'een kans om ons product te verbeteren' verandert de emotionele reactie van het team." },
      { domain: "science", icon: "🔬", text: "Cognitieve herkadering is een kerntechniek in cognitieve gedragstherapie (CBT); het veranderen van gedachtenpatronen beïnvloedt emoties en gedrag." }
    ],
    prerequisites: ["cognitive-dissonance", "narrative-framing"],
    unlocks: ["cognitive-reappraisal"],
    exercises: [
      { type: "multipleChoice", question: "Wat verandert herkadering in een situatie?", options: ["De feiten van de situatie", "De betekenis die je aan de situatie geeft", "Andermans gedrag", "De externe omstandigheden"], correctIndex: 1, explanation: "Herkadering verandert niet de werkelijkheid maar wel de lens waardoorheen je die bekijkt — wat directe invloed heeft op emoties en gedrag." }
    ],
    creativePrompt: "Kies een situatie die je als negatief ervaart. Schrijf vijf alternatieve frames voor diezelfde situatie. Welk frame geeft je de meeste energie?",
    aiHelperPrompts: ["Is herkadering altijd positief of kan het ook ontkenning zijn?", "Hoe gebruik ik herkadering in moeilijke gesprekken met anderen?", "Welke herkaderingen zijn wetenschappelijk het meest effectief?"]
  },
  {
    id: "storytelling-structure",
    title: "Verhalenstructuur",
    difficulty: 2,
    emoji: "📖",
    academicCategory: "Communicatie",
    skillCategory: "Beter Communiceren",
    tags: ["Communicatie", "Overtuigen", "Creativiteit", "Beter Communiceren"],
    definition: "Informatie gestructureerd als verhaal (met protagonist, conflict, klimax en resolutie) overtuigt en wordt beter onthouden dan droge feiten. Het menselijk brein is ontworpen voor verhalen.",
    abstractExample: "Statistiek: '1 op de 5 mensen lijdt aan slaaptekort.' Verhaal: 'Maria werkte 70 uur per week, sliep 5 uur en maakte een dodelijk verkeersongeluk. Slaaptekort doodt.' De statistiek informeert; het verhaal beweegt.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Op een feestje je werk uitleggen via een boeiend verhaal over een klant die je hielp, werkt beter dan een functieomschrijving." },
      { domain: "business", icon: "💼", text: "De beste TED-talks gebruiken altijd een persoonlijk verhaal als anker voor een abstract idee — de emotionele verbinding maakt het memorabel." },
      { domain: "science", icon: "🔬", text: "Neuraal koppeling ('neural coupling'): bij een goed verhaal synchroniseren de hersengolven van luisteraar en verteller, wat begrip en empathie vergroot." }
    ],
    prerequisites: ["ethos-pathos-logos"],
    unlocks: ["narrative-framing"],
    exercises: [
      { type: "multipleChoice", question: "Welk verhaalstructuur-element is het meest essentieel voor overtuiging?", options: ["Een happy end", "Conflict en spanning die de protagonist moet overwinnen", "Een morele les", "Veel details"], correctIndex: 1, explanation: "Conflict is de motor van een verhaal. Zonder conflict is er geen spanning, geen emotie, en daalt de aandacht van het publiek." }
    ],
    creativePrompt: "Vertel iets wat je wilt communiceren (een idee, je werk, een overtuiging) als een verhaal met een protagonist, een probleem en een oplossing. Hoe verandert de impact?",
    aiHelperPrompts: ["Wat zijn de meest gebruikte verhalenstructuren en wanneer gebruik ik welke?", "Hoe gebruik ik verhalen in professionele presentaties?", "Hoe hangt de verhalenstructuur samen met geheugen?"]
  },
  {
    id: "crucial-conversations",
    title: "Cruciale Gesprekken",
    difficulty: 2,
    emoji: "⚡",
    academicCategory: "Communicatie",
    skillCategory: "Beter Communiceren",
    tags: ["Communicatie", "Conflictoplossing", "Leiderschap", "Beter Communiceren"],
    definition: "Gesprekken met hoge inzet, sterke emoties en tegenstrijdige meningen. De meeste mensen vermijden ze of voeren ze slecht. Cruciale gesprekken goed voeren is een van de meest waardevolle sociale vaardigheden.",
    abstractExample: "Een cruciaal gesprek is: je baas confronteren over oneerlijk gedrag, je partner over een fundamenteel probleem, of een medewerker over zijn prestaties. Ze worden vermeden — maar de kosten van vermijding zijn groter dan die van het gesprek.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een gesprek over geld met je partner dat al maanden uitgesteld wordt. Elke dag dat het uitgesteld wordt, groeit de spanning." },
      { domain: "business", icon: "💼", text: "Onderzoek toont dat mislukte cruciale gesprekken de hoofdoorzaak zijn van projectmislukkingen, toxische werkomgevingen en ontslagen." },
      { domain: "science", icon: "🔬", text: "Patterson et al. beschreven in 'Crucial Conversations' (2002) dat de kwaliteit van cruciale gesprekken de kwaliteit van relaties en organisaties bepaalt." }
    ],
    prerequisites: ["nonviolent-communication", "assertiveness"],
    unlocks: ["conflict-resolution"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de eerste stap in een cruciaal gesprek?", options: ["Meteen je probleem benoemen", "Een veilige omgeving creëren door je intentie duidelijk te maken", "De ander overtuigen dat je gelijk hebt", "De feiten presenteren"], correctIndex: 1, explanation: "Zonder psychologische veiligheid sluiten mensen zich af en wordt het gesprek defensief. Veiligheid creëren is de eerste stap." }
    ],
    creativePrompt: "Identificeer een cruciaal gesprek dat je al uitstelt. Wat maakt het moeilijk? Schrijf hoe je het zou openen met als doel: veiligheid creëren.",
    aiHelperPrompts: ["Hoe bereid ik me voor op een cruciaal gesprek?", "Hoe herstel ik de veiligheid als het gesprek escaleert?", "Hoe voer ik een cruciaal gesprek met een machtigere persoon?"]
  },
  {
    id: "feedback-giving",
    title: "Effectief Feedback Geven",
    difficulty: 1,
    emoji: "🎯",
    academicCategory: "Communicatie",
    skillCategory: "Beter Communiceren",
    tags: ["Communicatie", "Leiderschap", "Groei", "Beter Communiceren"],
    definition: "Feedback is effectief als ze specifiek, tijdig, gedragsgericht (niet persoonsgericht), toekomstgericht en uitnodigend tot dialoog is. Goede feedback helpt groeien; slechte feedback demotiveert.",
    abstractExample: "Slechte feedback: 'Jij bent slordig.' Goede feedback: 'In dit rapport ontbreken drie onderbouwingen op pagina 4 en 7. Als je die toevoegt, wordt het veel sterker. Wat heb je nodig om dat goed te doen?'",
    examples: [
      { domain: "daily", icon: "🏠", text: "Aan een kind dat een tekening maakt: 'Wat fijn dat je zoveel tijd hebt gestoken in de kleuren!' werkt beter dan 'Goed gedaan!' (te vaag) of 'De oren zijn raar' (demotiverend)." },
      { domain: "business", icon: "💼", text: "360-graden feedback systemen zijn effectiever als ze gedragsgericht zijn en specifieke voorbeelden bevatten in plaats van vage kwalificaties." },
      { domain: "science", icon: "🔬", text: "Kluger & DeNisi (1996) toonden aan dat 38% van alle feedback-interventies prestaties verlaagde — vooral wanneer feedback gericht was op de persoon, niet op het gedrag." }
    ],
    prerequisites: ["radical-candor"],
    unlocks: ["growth-mindset"],
    exercises: [
      { type: "multipleChoice", question: "Wat maakt feedback het meest effectief?", options: ["Positief beginnen (sandwich-methode)", "Specifiek, gedragsgericht en toekomstgericht zijn", "Zo snel mogelijk na een incident geven", "Schriftelijk zodat het bewaard blijft"], correctIndex: 1, explanation: "Specificiteit en gerichtheid op gedrag (niet op persoon) zijn de sterkste predictors van effectieve feedback die tot verbetering leidt." }
    ],
    creativePrompt: "Denk aan de laatste feedback die je iemand gaf. Was het specifiek? Gedragsgericht? Toekomstgericht? Herschrijf het naar het effectieve model.",
    aiHelperPrompts: ["Wanneer geef ik feedback direct en wanneer wacht ik?", "Hoe geef ik feedback omhoog (aan mijn leidinggevende)?", "Hoe ontvang ik feedback constructief?"]
  },

  // ── BATCH B: LEIDERSCHAP & INVLOED ───────────────────────────
  {
    id: "servant-leadership",
    title: "Dienend Leiderschap",
    difficulty: 2,
    emoji: "🫂",
    academicCategory: "Leiderschap",
    skillCategory: "Beter Samenwerken",
    tags: ["Leiderschap", "Organisatie", "Motivatie", "Beter Samenwerken"],
    definition: "Een leiderschapsstijl waarbij de leider in de eerste plaats dient: de behoeften van medewerkers staan centraal. De leider verwijdert obstakels, ontwikkelt mensen en faciliteert hun succes.",
    abstractExample: "Een traditionele leider vraagt: 'Hoe kunnen mijn medewerkers mij helpen mijn doelen te bereiken?' Een dienend leider vraagt: 'Hoe kan ik mijn medewerkers helpen hún doelen te bereiken — die samenvallen met die van de organisatie?'",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een ouder als dienend leider: niet het kind in dienst stellen van de ouders' plannen, maar de omgeving creëren waarin het kind kan floreren." },
      { domain: "business", icon: "💼", text: "Bedrijven als Southwest Airlines en The Container Store bouwen culturen op dienend leiderschap — medewerkers eerst, klanten tweede, aandeelhouders derde." },
      { domain: "science", icon: "🔬", text: "Robert Greenleaf introduceerde het concept in 1970; onderzoek toont correlatie tussen dienend leiderschap en hogere medewerkersbetrokkenheid en teameffectiviteit." }
    ],
    prerequisites: ["self-determination-theory"],
    unlocks: ["psychological-safety"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de kernvraag van dienend leiderschap?", options: ["Hoe maximaliseer ik mijn macht?", "Hoe help ik mijn mensen te groeien en hun werk te doen?", "Hoe bereik ik mijn persoonlijke doelen via mijn team?", "Hoe zorg ik voor efficiency?"], correctIndex: 1, explanation: "Dienend leiderschap begint bij de behoeften van de mensen die worden geleid, niet bij de doelen of status van de leider zelf." }
    ],
    creativePrompt: "Als je een leiderschapsrol hebt: vraag je teamleden wat jij kunt doen om hun werk makkelijker te maken. Luister zonder te verdedigen. Wat hoor je?",
    aiHelperPrompts: ["Hoe combineer ik dienend leiderschap met het halen van harde doelen?", "Wanneer is dienend leiderschap niet de juiste stijl?", "Hoe bouw ik een dienende cultuur in een hiërarchische organisatie?"]
  },
  {
    id: "psychological-safety",
    title: "Psychologische Veiligheid",
    difficulty: 2,
    emoji: "🛡️",
    academicCategory: "Organisatiepsychologie",
    skillCategory: "Beter Samenwerken",
    tags: ["Organisatiepsychologie", "Leiderschap", "Teams", "Beter Samenwerken"],
    definition: "De gedeelde overtuiging in een team dat het veilig is om interpersoonlijke risico's te nemen — ideeën delen, fouten toegeven, kritiek uiten — zonder angst voor vergelding of beschaming.",
    abstractExample: "In een team met hoge psychologische veiligheid zegt iemand: 'Ik denk dat we een fout maken' en wordt serieus genomen. In een team zonder veiligheid wordt dezelfde persoon buitengesloten of ontslagen.",
    examples: [
      { domain: "daily", icon: "🏠", text: "In een gezin met psychologische veiligheid kunnen kinderen fouten toegeven zonder angst voor bestraffing — wat eerlijkheid en leren bevordert." },
      { domain: "business", icon: "💼", text: "Google's Project Aristotle (2015) ontdekte dat psychologische veiligheid de sterkste predictor is van teamprestaties — sterker dan individuele competentie." },
      { domain: "science", icon: "🔬", text: "Amy Edmondson (Harvard) ontwikkelde het construct in 1999 en toonde aan dat hoge psychologische veiligheid leidt tot meer innovatie en minder vermijdbaar falen." }
    ],
    prerequisites: ["servant-leadership"],
    unlocks: ["radical-candor"],
    exercises: [
      { type: "multipleChoice", question: "Hoe creëer je als leider psychologische veiligheid?", options: ["Door hoge eisen te stellen", "Door kwetsbaarheid te modelleren, nieuwsgierigheid te tonen en fouten te normaliseren", "Door geen kritiek te geven", "Door altijd positief te zijn"], correctIndex: 1, explanation: "Leiders die zelf fouten toegeven, vragen stellen en oordelen opschorten, signaleren dat het veilig is om hetzelfde te doen." }
    ],
    creativePrompt: "Beoordeel de psychologische veiligheid in jouw team of omgeving op een schaal van 1-10. Wat maakt het veilig of onveilig? Wat kun jij doen om het te verbeteren?",
    aiHelperPrompts: ["Hoe meet ik psychologische veiligheid in mijn team?", "Hoe herstel ik psychologische veiligheid na een incident?", "Wat is het verschil tussen psychologische veiligheid en vriendelijkheid?"]
  },
  {
    id: "situational-leadership",
    title: "Situationeel Leiderschap",
    difficulty: 2,
    emoji: "🎛️",
    academicCategory: "Leiderschap",
    skillCategory: "Beter Samenwerken",
    tags: ["Leiderschap", "Organisatie", "Aanpassen", "Beter Samenwerken"],
    definition: "Effectieve leiders passen hun stijl aan de situatie en het ontwikkelingsniveau van de medewerker aan. Er is geen one-size-fits-all leiderschap: beginners hebben sturing nodig, experts hebben autonomie nodig.",
    abstractExample: "Een nieuwe medewerker heeft directe instructies en toezicht nodig (S1: directief). Een ervaren medewerker met laag vertrouwen heeft begeleiding en uitleg nodig (S2). Een competente medewerker met hoge motivatie heeft vrijheid (S4: delegeren).",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een ouder past zijn stijl aan de leeftijd en vaardigheid van het kind aan — meer directief met een kleuter, meer coachend met een tiener." },
      { domain: "business", icon: "💼", text: "Een manager die alle medewerkers hetzelfde behandelt, demotiveert zowel beginners (te weinig sturing) als experts (te weinig autonomie)." },
      { domain: "science", icon: "🔬", text: "Hersey & Blanchard ontwikkelden het situationeel leiderschapsmodel in 1969; het is sindsdien een van de meest gebruikte managementtrainingen worldwide." }
    ],
    prerequisites: ["servant-leadership"],
    unlocks: ["delegation-principles"],
    exercises: [
      { type: "multipleChoice", question: "Welke leiderschapsstijl past bij een competente medewerker met hoge motivatie?", options: ["Directief: stap-voor-stap instrueren", "Coachend: uitleggen en overtuigen", "Ondersteunend: aanmoedigen", "Delegeren: autonomie geven"], correctIndex: 3, explanation: "Competente en gemotiveerde medewerkers hebben minimale sturing nodig — te veel toezicht ondermijnt hun autonomie en motivatie." }
    ],
    creativePrompt: "Identificeer drie mensen die je leidt of samenwerkt. Wat is hun ontwikkelingsniveau? Welke leiderschapsstijl vraagt elk? Pas je jouw stijl daar op aan?",
    aiHelperPrompts: ["Hoe bepaal ik het ontwikkelingsniveau van een medewerker?", "Hoe schakel ik soepel tussen leiderschapsstijlen?", "Wanneer werkt situationeel leiderschap niet?"]
  },
  {
    id: "delegation-principles",
    title: "Delegatieprincipes",
    difficulty: 2,
    emoji: "📤",
    academicCategory: "Leiderschap",
    skillCategory: "Betere Beslissingen",
    tags: ["Leiderschap", "Productiviteit", "Vertrouwen", "Betere Beslissingen"],
    definition: "Effectief delegeren betekent de juiste taak overdragen aan de juiste persoon met de juiste bevoegdheid, duidelijke verwachtingen en adequate ondersteuning — en vervolgens loslaten.",
    abstractExample: "Zwak delegeren: 'Regel dit.' Effectief delegeren: 'Ik vertrouw je met het organiseren van de klantevenement [taak]. Je hebt €5000 budget en beslist zelf [bevoegdheid]. Doel: 50 tevreden klanten [resultaat]. Ik sta beschikbaar voor vragen [ondersteuning].'",
    examples: [
      { domain: "daily", icon: "🏠", text: "Kinderen verantwoordelijkheid geven voor huistaken met duidelijke verwachtingen — niet opnieuw doen wat ze deden, maar ze laten leren van hun eigen aanpak." },
      { domain: "business", icon: "💼", text: "Managers die niet delegeren, creëren een flessenhals: alles gaat via hen, medewerkers groeien niet, en de manager raakt overbelast." },
      { domain: "science", icon: "🔬", text: "Onderzoek toont dat delegeren medewerkersbetrokkenheid verhoogt, competentie ontwikkelt en leiderschapscapaciteit opbouwt in de organisatie." }
    ],
    prerequisites: ["situational-leadership"],
    unlocks: ["psychological-safety"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de grootste fout bij delegeren?", options: ["Te veel vertrouwen geven", "Micromanagen na delegatie: de taak terugpakken of elk detail controleren", "Te weinig uitleggen", "Te snel delegeren"], correctIndex: 1, explanation: "Micromanagen na delegatie ondermijnt het vertrouwen, ontneemt medewerkers autonomie en maakt delegatie ineffectief." }
    ],
    creativePrompt: "Maak een lijst van taken die jij doet maar die iemand anders ook zou kunnen (of beter) doen. Welke kun je delegeren? Wat weerhoudt je?",
    aiHelperPrompts: ["Hoe delegeer ik aan iemand die minder ervaren is dan ik?", "Hoe geef ik delegatie en behoud ik eindverantwoordelijkheid?", "Wanneer is delegeren niet de juiste keuze?"]
  },
  {
    id: "influence-without-authority",
    title: "Invloed Zonder Autoriteit",
    difficulty: 2,
    emoji: "🧲",
    academicCategory: "Leiderschap",
    skillCategory: "Beter Samenwerken",
    tags: ["Leiderschap", "Organisatie", "Invloed", "Beter Samenwerken"],
    definition: "Het vermogen om anderen te bewegen en bij te sturen zonder gebruik te maken van formele macht of hiërarchische positie. Invloed via relaties, expertise, netwerk en afstemming op belangen.",
    abstractExample: "Een junior medewerker zonder titel die een nieuw project wil starten, heeft geen bevoegdheid om te 'eisen'. Maar door draagvlak te bouwen, de voordelen voor anderen te benoemen en sleutelpersonen te betrekken, creëert ze beweging.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een kind dat zijn ouders overtuigt van iets zonder 'autoritaire' macht — door een sterk argument te maken, alternatieven te bieden en empathie te tonen." },
      { domain: "business", icon: "💼", text: "Projectmanagers, consultants en experts opereren vaak zonder directe autoriteit over mensen en moeten invloed opbouwen via vertrouwen en afstemming." },
      { domain: "science", icon: "🔬", text: "Cohen & Bradford beschreven in 'Influence Without Authority' (1989) hoe 'valuta' (iets van waarde voor de ander) de basis is voor invloed zonder macht." }
    ],
    prerequisites: ["signaling-theory", "reciprocity"],
    unlocks: ["servant-leadership"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de basis van invloed zonder formele autoriteit?", options: ["Hogere senioriteit", "Wederzijdse belangen begrijpen en aansluiten bij wat de ander waardevol vindt", "Dreigen met consequenties", "Hogere intelligentie"], correctIndex: 1, explanation: "Invloed zonder autoriteit werkt via waarde creëren voor de ander — door te geven wat zij nodig hebben, bouw je de 'valuta' op voor jouw eigen verzoeken." }
    ],
    creativePrompt: "Identificeer iemand die je wilt beïnvloeden maar waar je geen formele autoriteit over hebt. Wat zijn hun belangen? Hoe kun je die aansluiten bij wat jij nodig hebt?",
    aiHelperPrompts: ["Hoe bouw ik invloed op in een nieuwe organisatie?", "Hoe ga ik om met weerstand als ik geen formele macht heb?", "Hoe verschilt invloed van manipulatie?"]
  },
  {
    id: "vision-clarity",
    title: "Visieduidelijkheid",
    difficulty: 2,
    emoji: "🔭",
    academicCategory: "Leiderschap",
    skillCategory: "Betere Beslissingen",
    tags: ["Leiderschap", "Strategie", "Richting", "Betere Beslissingen"],
    definition: "Een heldere, inspirerende en begrijpelijke visie geeft richting aan een team of organisatie. Zonder visie werken mensen aan taken, niet aan een doel. Met visie kunnen zij zelf prioriteiten stellen.",
    abstractExample: "Martin Luther King zei niet: 'Ik heb een plan met vijf stappen voor rassengelijkheid.' Hij zei: 'I have a dream.' De kracht van een visie ligt in haar aantrekkingskracht, niet in haar precisie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een gezin met een gedeeld beeld van hun ideale leven (meer tijd samen, minder werkdruk) neemt betere beslissingen over werk, huis en prioriteiten." },
      { domain: "business", icon: "💼", text: "Teams zonder duidelijke visie optimaliseren lokaal: ieder doet zijn deel goed, maar het geheel klopt niet. Met visie coördineren ze zichzelf." },
      { domain: "science", icon: "🔬", text: "Onderzoek naar doel-oriëntatie toont dat een helder, betekenisvol doel de intrinsieke motivatie en doorzettingsvermogen van mensen significant verhoogt." }
    ],
    prerequisites: ["servant-leadership"],
    unlocks: ["delegation-principles"],
    exercises: [
      { type: "multipleChoice", question: "Wat maakt een visie inspirerend?", options: ["Zo gedetailleerd mogelijk zijn", "Een aantrekkelijk toekomstig beeld schetsen dat aansluit bij diepere waarden en behoeften", "Meetbare KPI's bevatten", "Realistisch zijn"], correctIndex: 1, explanation: "Visie werkt via emotionele aansluiting: het aantrekkelijke beeld van de toekomst motiveert mensen om er naartoe te bewegen." }
    ],
    creativePrompt: "Schrijf een persoonlijke visie van 5 jaar in drie zinnen: wat wil jij hebben bereikt, wie wil jij zijn, en welke impact wil jij gemaakt hebben?",
    aiHelperPrompts: ["Hoe communiceer ik een visie effectief aan een divers team?", "Hoe ga ik om met mensen die mijn visie niet delen?", "Hoe maak ik een visie concreet zonder het inspirerende te verliezen?"]
  },
  {
    id: "trust-building",
    title: "Vertrouwen Opbouwen",
    difficulty: 1,
    emoji: "🌉",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Beter Samenwerken",
    tags: ["Sociale Psychologie", "Leiderschap", "Relaties", "Beter Samenwerken"],
    definition: "Vertrouwen is opgebouwd uit competentie (kan je het?), integriteit (doe je wat je zegt?) en welwillendheid (geef je om mij?). Vertrouwen groeit langzaam en breekt snel.",
    abstractExample: "Een manager bouwt vertrouwen door beloftes na te komen (integriteit), resultaten te leveren (competentie) en oprecht in medewerkers te investeren (welwillendheid). Elke breuk in één dimensie schade het totale vertrouwen.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een vriend die altijd op tijd is, zijn beloftes nakomt en er is als je hem nodig hebt, is iemand die je vertrouwt — alle drie dimensies zijn aanwezig." },
      { domain: "business", icon: "💼", text: "Één publiek gelogen statement van een CEO kan decennialang opgebouwd merkvertrouwen in dagen vernietigen." },
      { domain: "science", icon: "🔬", text: "Mayer, Davis & Schoorman (1995) modelleerden vertrouwen in organisaties als functie van de drie dimensies: vermogen, welwillendheid en integriteit." }
    ],
    prerequisites: ["reciprocity"],
    unlocks: ["psychological-safety"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de snelste manier om vertrouwen te breken?", options: ["Een kleine fout maken", "Een duidelijke leugen of gebroken belofte", "Te laat zijn", "Minder competent dan verwacht zijn"], correctIndex: 1, explanation: "Integrity-breuken (liegen, beloftes breken) zijn het meest destructief voor vertrouwen — ze signaleren dat de persoon niet te vertrouwen is ongeacht andere kwaliteiten." }
    ],
    creativePrompt: "Analyseer een relatie (werk of privé) waarbij vertrouwen laag is. Welke dimensie schort het aan: competentie, integriteit of welwillendheid? Wat kun je eraan doen?",
    aiHelperPrompts: ["Hoe herstel ik gebroken vertrouwen?", "Hoe bouw ik snel vertrouwen op in een nieuwe werkomgeving?", "Wanneer is vertrouwen 'te naïef'?"]
  },
  {
    id: "accountability-culture",
    title: "Cultuur van Verantwoordelijkheid",
    difficulty: 2,
    emoji: "✋",
    academicCategory: "Organisatiepsychologie",
    skillCategory: "Beter Samenwerken",
    tags: ["Organisatiepsychologie", "Leiderschap", "Teams", "Beter Samenwerken"],
    definition: "Een cultuur waarin mensen verantwoording nemen voor hun acties en commitments, zonder schuld of angst maar met een focus op leren en verbeteren. Verantwoordelijkheid is een gift, geen straf.",
    abstractExample: "In een angstcultuur worden fouten verborgen. In een verantwoordelijkheidscultuur worden fouten openlijk gedeeld met de vraag: 'Wat leren we hiervan en hoe voorkomen we het?' De cultuur bepaalt welk gedrag veilig is.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een kind dat leert 'ik heb dit gebroken, hoe kan ik het herstellen?' heeft meer aan verantwoordelijkheid dan schuldbewustzijn." },
      { domain: "business", icon: "💼", text: "Teams waar mensen fouten melden voor ze groter worden, presteren beter dan teams waar fouten worden verstopt uit angst voor consequenties." },
      { domain: "science", icon: "🔬", text: "Edmondson's onderzoek naar medische fouten toonde aan dat teams die fouten meldden betere zorg leverden — niet omdat ze meer fouten maakten, maar omdat ze ze vroeger corrigeerden." }
    ],
    prerequisites: ["psychological-safety"],
    unlocks: ["normalization-deviance"],
    exercises: [
      { type: "multipleChoice", question: "Wat onderscheidt verantwoordelijkheid van schuld?", options: ["Ze zijn identiek", "Verantwoordelijkheid focust op leren en verbeteren; schuld focust op straf en oordeel", "Schuld is altijd aanwezig bij fouten", "Verantwoordelijkheid is vrijwillig; schuld is verplicht"], correctIndex: 1, explanation: "Schuldculturen leiden tot verbergen van fouten; verantwoordelijkheidsculturen leiden tot open leren — beide reageren op dezelfde fouten maar met tegengesteld effect." }
    ],
    creativePrompt: "Denk aan een fout die je recent maakte. Hoe reageerde je omgeving? Hoe zou je gereageerd hebben in een ideale verantwoordelijkheidscultuur?",
    aiHelperPrompts: ["Hoe transformeer ik een schuldcultuur naar een verantwoordelijkheidscultuur?", "Hoe houd ik iemand verantwoordelijk zonder hem te beschamen?", "Wanneer is consequentie nodig naast verantwoordelijkheid?"]
  },
  {
    id: "change-leadership",
    title: "Veranderleiderschap",
    difficulty: 3,
    emoji: "🔄",
    academicCategory: "Leiderschap",
    skillCategory: "Betere Beslissingen",
    tags: ["Leiderschap", "Verandering", "Organisatie", "Betere Beslissingen"],
    definition: "Het proces van het leiden van mensen door organisatieverandering op een manier die betrokkenheid creëert, weerstand vermindert en duurzame adoptie bevordert. Verandering is menselijk, niet technisch.",
    abstractExample: "Een nieuw IT-systeem invoeren is technisch eenvoudig. Mensen ertoe brengen het te omarmen is de echte uitdaging. Veranderleiderschap begrijpt dat mensen verandering weerstand bieden niet uit luiheid maar uit verlies: controle, routine, identiteit.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een gezin dat verhuist: het logistieke gedeelte (dozen, verhuiswagen) is eenvoudig. De emotionele overgang (het oude thuis loslaten) is het echte werk." },
      { domain: "business", icon: "💼", text: "70% van organisatieveranderingen mislukt — niet door slechte plannen maar door gebrek aan aandacht voor menselijke dimensies van verandering." },
      { domain: "science", icon: "🔬", text: "Kotter's 8-stappen model en Kübler-Ross' veranderingscurve (rouw/verlies analoog) zijn de meest gebruikte kaders voor veranderleiderschap." }
    ],
    prerequisites: ["vision-clarity", "psychological-safety"],
    unlocks: ["adaptive-capacity"],
    exercises: [
      { type: "multipleChoice", question: "Waarom bieden mensen weerstand aan verandering?", options: ["Ze zijn lui", "Ze verliezen vertrouwde routines, controle of identiteit", "Ze begrijpen de voordelen niet", "Ze zijn bang voor nieuw werk"], correctIndex: 1, explanation: "Weerstand is bijna altijd een reactie op verlies, niet op de verandering zelf. Wie het verlies erkent en adresseert, vermindert de weerstand." }
    ],
    creativePrompt: "Identificeer een verandering die je wilt doorvoeren (persoonlijk of professioneel). Wie worden beïnvloed? Wat verliezen zij? Hoe kun je dat verlies erkennen en compenseren?",
    aiHelperPrompts: ["Hoe begeleid ik mensen door de emotionele fasen van verandering?", "Hoe creëer ik urgentie zonder paniek bij veranderingen?", "Hoe ga ik om met actieve weerstand van sleutelpersonen?"]
  },
  {
    id: "leading-by-example",
    title: "Leiden door Voorbeeld",
    difficulty: 1,
    emoji: "⭐",
    academicCategory: "Leiderschap",
    skillCategory: "Beter Samenwerken",
    tags: ["Leiderschap", "Integriteit", "Cultuur", "Beter Samenwerken"],
    definition: "Mensen kopiëren gedrag van hun leiders, bewust en onbewust. Wat een leider doet is krachtiger dan wat hij zegt. Culturele normen worden gevormd door welk gedrag de leider modelleert.",
    abstractExample: "Een manager die zegt 'werk-privébalans is belangrijk' maar zelf elke avond tot middernacht werkt en 's weekends e-mails stuurt, communiceert het tegenovergestelde. Medewerkers kijken naar gedrag, niet naar woorden.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Ouders die zelf boeken lezen, kweken eerder lezende kinderen dan ouders die 'lees meer!' zeggen terwijl ze zelf televisie kijken." },
      { domain: "business", icon: "💼", text: "Een CEO die persoonlijk onkosten verantwoord en geen vluchten in business class neemt, maakt kostenbewustzijn geloofwaardiger in de organisatie." },
      { domain: "science", icon: "🔬", text: "Observationeel leren (Bandura): mensen leren het effectiefst door gedrag van anderen te observeren — vooral van gezaghebbende figuren." }
    ],
    prerequisites: ["trust-building"],
    unlocks: ["accountability-culture"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het effect als een leider inconsistent is tussen woord en daad?", options: ["Mensen negeren het", "Geloofwaardigheid daalt en cynisme groeit; medewerkers volgen het gedrag, niet de woorden", "Mensen worden extra gemotiveerd", "Het heeft geen invloed op cultuur"], correctIndex: 1, explanation: "Inconsistentie tussen woord en daad is een van de grootste vertrouwensbrekers in leiderschap — mensen zien het altijd en passen hun gedrag aan op wat ze zien." }
    ],
    creativePrompt: "Welk gedrag wil jij in je omgeving (team, gezin, vrienden) zien? Doe je dat gedrag zelf? Waar is er een kloof?",
    aiHelperPrompts: ["Hoe kan ik mijn leiderschapsgedrag meer consistent maken?", "Wat zijn de meest zichtbare vormen van 'leiden door voorbeeld'?", "Hoe handel ik als ik mezelf betrap op inconsistentie?"]
  }
,
  {
    id: "eisenhower-matrix",
    title: "Eisenhower Matrix",
    difficulty: 1,
    emoji: "🗂️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Productiviteit",
    tags: ["prioritering", "tijdbeheer", "urgentie", "focus"],
    definition: "De Eisenhower Matrix verdeelt taken in vier kwadranten op basis van urgentie en belang: doe het nu (urgent + belangrijk), plan het (niet-urgent + belangrijk), delegeer het (urgent + niet-belangrijk), elimineer het (niet-urgent + niet-belangrijk).",
    abstractExample: "Stel je inbox voor als een trechter. Niet alles wat binnenkomt is even waardevol — de matrix helpt je filteren wat echte aandacht verdient versus wat slechts rumoer is.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een projectdeadline van morgen valt in kwadrant I (doe nu). Langetermijnplanning valt in kwadrant II (plan). Onnodige vergaderingen val je in kwadrant III (delegeer of weiger)." },
      { domain: "Studie", icon: "📚", text: "Een tentamen volgende week is belangrijk maar nog niet urgent — plan er nu al studietijd voor in. Sociale media checken is noch urgent noch belangrijk: elimineer het uit studietijd." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Een lekkende kraan is urgent en belangrijk (doe nu). Sporten is belangrijk maar niet urgent — plan het. Elk telefoontje direct beantwoorden is urgent maar zelden echt belangrijk." }
    ],
    prerequisites: [],
    unlocks: ["time-blocking", "decision-fatigue"],
    exercises: [
      { type: "multipleChoice", question: "Welk kwadrant bevat taken die je idealiter het meeste tijd aan besteedt voor langetermijnsucces?", options: ["Kwadrant I: urgent en belangrijk", "Kwadrant II: niet-urgent maar belangrijk", "Kwadrant III: urgent maar niet-belangrijk", "Kwadrant IV: niet-urgent en niet-belangrijk"], correctIndex: 1, explanation: "Kwadrant II — langetermijnplanning, relaties onderhouden, persoonlijke ontwikkeling — is de sleutel tot duurzaam succes. Wie hier voldoende tijd insteekt, voorkomt dat taken escaleren naar kwadrant I." }
    ],
    creativePrompt: "Maak een Eisenhower Matrix van je huidige takenlijst. Welk kwadrant is het meest gevuld? Wat zegt dat over hoe je je tijd spendeert?",
    aiHelperPrompts: ["Hoe categoriseer ik mijn taken effectief met de Eisenhower Matrix?", "Wat doe ik als bijna alles urgent lijkt?", "Hoe leer ik meer tijd in kwadrant II te investeren?"]
  },
  {
    id: "time-blocking",
    title: "Time Blocking",
    difficulty: 1,
    emoji: "🧱",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Productiviteit",
    tags: ["planning", "focus", "agenda", "tijdbeheer"],
    definition: "Time blocking is de techniek waarbij je vaste tijdsblokken in je agenda reserveert voor specifieke taken of categorieën van werk, zodat je kalender je intenties weerspiegelt in plaats van reactieve verplichtingen.",
    abstractExample: "Denk aan je dag als een container. Zonder structuur vult het zich met andermans prioriteiten. Time blocking is het van tevoren vullen van de container met wat jíj belangrijk vindt.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een software-ontwikkelaar blokkeert elke ochtend van 9-12 voor focuswerk (coderen), van 12-13 voor e-mail/Slack, en van 14-16 voor vergaderingen — zo beschermt hij zijn meest productieve uren." },
      { domain: "Studie", icon: "📚", text: "Een student blokkeert elke dag van 19-21 voor studietijd en markeert dit in de agenda als een onbreekbare afspraak met zichzelf, net als een college." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Een ouder blokkeert zaterdagochtend als 'gezinstijd' zonder telefoon, en vrijdagmiddag voor boodschappen en huishoudelijke taken." }
    ],
    prerequisites: ["eisenhower-matrix"],
    unlocks: ["single-tasking"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het grootste voordeel van time blocking ten opzichte van een gewone to-do lijst?", options: ["Je schrijft taken sneller op", "Je hoeft minder taken te doen", "Je weet wanneer je iets doet, niet alleen wát je doet", "Je kalender wordt mooier"], correctIndex: 2, explanation: "Een to-do lijst zegt 'wat', time blocking zegt 'wanneer'. Door tijd te reserveren behandel je je taken als echte afspraken, wat de kans dat je ze doet enorm vergroot." }
    ],
    creativePrompt: "Ontwerp je ideale werkdag in tijdsblokken. Wanneer doe je diepgaand werk? Wanneer ben je beschikbaar? Vergelijk het met hoe je dag er nu uitziet.",
    aiHelperPrompts: ["Hoe begin ik met time blocking zonder mijn flexibiliteit te verliezen?", "Wat doe ik als mijn tijdsblokken steeds verstoord worden?", "Hoeveel blokken zijn realistisch per dag?"]
  },
  {
    id: "two-minute-rule",
    title: "De Twee-minutenregel",
    difficulty: 1,
    emoji: "⏱️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Productiviteit",
    tags: ["GTD", "actie", "uitstelgedrag", "efficiëntie"],
    definition: "De twee-minutenregel (van David Allen's GTD-systeem) stelt: als een taak minder dan twee minuten kost, doe het dan onmiddellijk — de overhead van het opschrijven en later oppakken kost meer tijd dan de taak zelf.",
    abstractExample: "Stel je voor dat je elke kleine taak in een bakje gooit om later te sorteren. Op een gegeven moment kost het sorteren meer tijd dan de taken zelf hadden gekost. De twee-minutenregel voorkomt dat bakje.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Je collega stuurt een korte vraag per e-mail die je in één zin kunt beantwoorden — beantwoord het nu. Je pakt een document op maar het moet naar een andere map — doe het direct." },
      { domain: "Studie", icon: "📚", text: "Je ziet dat je notitieboek vol is en je een nieuwe nodig hebt — bestel het nu (2 minuten). Wacht niet tot 'later' met dit soort kleine beslissingen." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Na het koken: zet het bord gelijk in de vaatwasser (30 seconden), niet op het aanrecht 'voor later'. Kleine handelingen direct doen voorkomt stapeling van rommel." }
    ],
    prerequisites: [],
    unlocks: ["batch-processing"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de belangrijkste reden om de twee-minutenregel te volgen?", options: ["Het maakt je dag korter", "De overhead van uitstellen is groter dan de taak zelf", "Je hebt dan meer vergadertijd", "Je hoeft minder te plannen"], correctIndex: 1, explanation: "Kleine taken opschrijven, onthouden, herplannen en later oppakken kost mentale energie en tijd. Als de taak minder dan twee minuten duurt, is direct doen bijna altijd efficiënter." }
    ],
    creativePrompt: "Ga één dag bewust de twee-minutenregel toepassen. Hoeveel kleine taken kun je direct afhandelen? Wat merk je aan het einde van de dag?",
    aiHelperPrompts: ["Hoe weet ik of iets echt minder dan twee minuten duurt?", "Wanneer is de twee-minutenregel juist niet handig?", "Hoe combineer ik deze regel met time blocking?"]
  },
  {
    id: "single-tasking",
    title: "Single-Tasking",
    difficulty: 1,
    emoji: "🎯",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Productiviteit",
    tags: ["focus", "aandacht", "multitasking", "kwaliteit"],
    definition: "Single-tasking is de praktijk van bewust slechts aan één taak tegelijk werken, in tegenstelling tot multitasking. Onderzoek toont dat de hersenen niet echt kunnen multitasken — ze schakelen snel heen en weer, wat leidt tot fouten, meer tijd en minder diep werk.",
    abstractExample: "Multitasken is als proberen twee boeken tegelijk te lezen door afwisselend één zin per boek te lezen. Je 'leest' beide, maar begrijpt geen van beide goed.",
    examples: [
      { domain: "Werk", icon: "💼", text: "In plaats van e-mail checken terwijl je een rapport schrijft, sluit je alle afleidingen en schrijft je gedurende een uur uitsluitend het rapport. Het resultaat is beter en het kost minder tijd." },
      { domain: "Studie", icon: "📚", text: "Studeren met Netflix aan de achtergrond voelt productief maar verlaagt het begrip. Eén onderwerp, één sessie, zonder andere schermen — dit is single-tasking." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Tijdens het eten met je partner de telefoon wegleggen en écht aanwezig zijn — dit is single-tasking in relaties, wat de verbinding verdiept." }
    ],
    prerequisites: ["time-blocking"],
    unlocks: ["pomodoro-technique"],
    exercises: [
      { type: "multipleChoice", question: "Wat laat onderzoek zien over de tijd die verloren gaat bij taakwisseling (task switching)?", options: ["Vrijwel geen tijdverlies", "Tot 40% minder productiviteit door context-switching", "Multitasking is sneller voor eenvoudige taken", "Alleen experts verliezen tijd bij taakwisseling"], correctIndex: 1, explanation: "Elke keer dat je van taak wisselt, kost de hersenen tijd om opnieuw context te laden. Dit zogeheten 'switching cost' kan bij kenniswerk oplopen tot 40% productiviteitsverlies." }
    ],
    creativePrompt: "Probeer één ochtendsessie te werken met alle notificaties uit en slechts één taak open. Wat merk je aan je gedachten, productiviteit en gevoel van voldoening?",
    aiHelperPrompts: ["Hoe ga ik om met onderbrekingen als ik single-task?", "Welke tools helpen bij single-tasking?", "Hoe overtuig ik mijn omgeving dat ik niet afgeleid wil worden?"]
  },
  {
    id: "pomodoro-technique",
    title: "Pomodoro-techniek",
    difficulty: 1,
    emoji: "🍅",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Productiviteit",
    tags: ["focus", "pauze", "ritme", "tijdbeheer"],
    definition: "De Pomodoro-techniek is een tijdmanagementmethode waarbij je 25 minuten geconcentreerd werkt (een 'pomodoro'), gevolgd door een korte pauze van 5 minuten. Na vier pomodoro's neem je een langere pauze van 15-30 minuten.",
    abstractExample: "Denk aan werken als sprinten in plaats van marathonlopen. Korte, intense inspanningsblokken afgewisseld met herstel zijn effectiever dan urenlang doorzwoegen zonder pauze.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een schrijver zet een timer op 25 minuten en schrijft uitsluitend, zonder e-mail of social media. Na de timer: 5 minuten koffie. Na vier rondes: een uur pauze of andere activiteit." },
      { domain: "Studie", icon: "📚", text: "Een student plant vijf pomodoro's voor studietijd. Door de vaste structuur is uitstelgedrag minder verleidelijk — je hoeft maar 25 minuten vol te houden, niet de hele avond." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Thuis opruimen voelt overweldigend. Maar 'ik doe één pomodoro aan opruimen' is behapbaar. Na 25 minuten stop je — en vaak is er al veel gedaan." }
    ],
    prerequisites: ["single-tasking"],
    unlocks: ["energy-management"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het belangrijkste principe achter de Pomodoro-techniek?", options: ["Je werkt altijd precies 25 minuten, nooit langer", "Regelmatige onderbrekingen verhogen de algehele focus en productiviteit", "Pauzes zijn tijdverspilling", "Je moet altijd vier pomodoro's achter elkaar doen"], correctIndex: 1, explanation: "De techniek is gebaseerd op het idee dat regelmatige pauzes de mentale wendbaarheid bewaren en burn-out voorkomen. De timer creëert ook urgentie en vermindert perfectionisme." }
    ],
    creativePrompt: "Doe vandaag drie pomodoro's voor een taak die je al lang uitstelt. Hoe voelt het om jezelf toestemming te geven te stoppen na 25 minuten?",
    aiHelperPrompts: ["Wat doe ik als 25 minuten te kort voelt?", "Hoe pas ik de Pomodoro-techniek aan mijn eigen ritme aan?", "Welke Pomodoro-apps zijn goed?"]
  },
  {
    id: "batch-processing",
    title: "Batch Processing",
    difficulty: 1,
    emoji: "📦",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Productiviteit",
    tags: ["efficiëntie", "planning", "context-switching", "systeem"],
    definition: "Batch processing is het groeperen van vergelijkbare taken en ze in één blok uitvoeren, in plaats van ze verspreid door de dag te doen. Dit vermindert context-switching en maakt gebruik van mentale 'opwarmtijd'.",
    abstractExample: "Het is als de was doen: je doet niet na elke jas één wasbeurt. Je verzamelt en doet alles tegelijk. Dezelfde logica geldt voor mentaal werk.",
    examples: [
      { domain: "Werk", icon: "💼", text: "In plaats van e-mails de hele dag door te beantwoorden, reserveer je twee vaste momenten per dag (bijv. 9:00 en 16:00) voor alle e-mailcommunicatie." },
      { domain: "Studie", icon: "📚", text: "Alle citaten voor een essay zoek je in één sessie op, in plaats van steeds heen en weer te gaan tussen schrijven en zoeken." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Alle telefoontjes naar instanties, afspraken maken en administratie doe je op één vaste middag per week — niet tussendoor verspreid." }
    ],
    prerequisites: ["two-minute-rule"],
    unlocks: ["decision-fatigue"],
    exercises: [
      { type: "multipleChoice", question: "Waarom vermindert batch processing de algehele tijdsbesteding aan taken?", options: ["Taken duren individueel korter", "Er is minder context-switching, waardoor de hersenen in 'flow' kunnen blijven", "Je vergeet minder taken", "Het is een kwestie van discipline"], correctIndex: 1, explanation: "Elke taakwissel kost mentale energie en tijd om opnieuw op te starten. Door gelijksoortige taken te bundelen, hoef je maar één keer 'op te warmen' en behoud je momentum." }
    ],
    creativePrompt: "Welke terugkerende taken in jouw leven kun je batchen? Maak een lijst van drie categorieën en plan vaste momenten voor elk.",
    aiHelperPrompts: ["Welke taken lenen zich het best voor batch processing?", "Hoe combineer ik batch processing met time blocking?", "Wat doe ik met urgente taken die mijn batches verstoren?"]
  },
  {
    id: "energy-management",
    title: "Energiebeheer",
    difficulty: 2,
    emoji: "⚡",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Productiviteit",
    tags: ["energie", "ritme", "circadiaan", "prestatie"],
    definition: "Energiebeheer is de praktijk van afstemmen van taken op je energieniveaus in plaats van uitsluitend op tijd. Je hebt beperkte aandacht, emotionele en fysieke energie per dag — het slim inzetten ervan is effectiever dan meer uren maken.",
    abstractExample: "Tijd is oneindig deelbaar maar energie is dat niet. Een uur werken met volle energie levert meer op dan drie uur werken met lege accu. Beheer de accu, niet de klok.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een ochtendmens plant creatief en analytisch werk voor 9-12 uur, vergaderingen na de lunch, en administratief werk aan het einde van de dag wanneer diep denken moeilijker is." },
      { domain: "Studie", icon: "📚", text: "Een student merkt dat hij het best begrijpt na een dutje van 20 minuten na de lunch. Hij plant zijn moeilijkste stof bewust na dat dutje." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Regelmatig sporten, goed slapen en bewust pauzes nemen zijn energiemanagement-strategieën die de productiviteit de rest van de dag verhogen." }
    ],
    prerequisites: ["pomodoro-technique"],
    unlocks: ["decision-fatigue"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de kern van energiebeheer als productiviteitsstrategie?", options: ["Zoveel mogelijk uren werken", "Taken afstemmen op je energieniveaus voor maximale output", "Altijd vroeg opstaan", "Minder slapen om meer tijd te hebben"], correctIndex: 1, explanation: "Energiebeheer erkent dat menselijke energie een beperkte, herlaadbare hulpbron is. Door taken te plannen wanneer je energie piekt, bereik je meer in minder tijd." }
    ],
    creativePrompt: "Houd drie dagen bij wanneer je je meest energiek en gefocust voelt. Wat patroon zie je? Hoe kun je je schema aanpassen op basis hiervan?",
    aiHelperPrompts: ["Hoe herken ik mijn persoonlijke energiepieken en -dalen?", "Welke gewoontes bouwen energie op in plaats van verbruiken?", "Hoe herstel ik sneller na energieverlies?"]
  },
  {
    id: "decision-fatigue",
    title: "Beslissingsvermoeidheid",
    difficulty: 2,
    emoji: "🧠",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Productiviteit",
    tags: ["beslissingen", "willpower", "cognitieve belasting", "routine"],
    definition: "Beslissingsvermoeidheid beschrijft het verschijnsel dat de kwaliteit van beslissingen afneemt naarmate je meer keuzes maakt. Elke beslissing verbruikt mentale energie — aan het einde van de dag zijn we minder rationeel en vatbaarder voor impulsiviteit of vermijding.",
    abstractExample: "De wilskracht is als een spier. Na intensief gebruik vermoeit hij en functioneert hij minder goed — totdat hij herstelt door rust. Elke beslissing is een rep aan de machine.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Rechters blijken aanzienlijk vaker parole toe te kennen aan het begin van de dag dan aan het einde — beslissingsvermoeidheid beïnvloedt zelfs kritieke professionele oordelen." },
      { domain: "Studie", icon: "📚", text: "Een student die elke dag beslissingen maakt over wat, wanneer en hoe te studeren, raakt mentaal vermoeid. Een vast studiesysteem elimineert deze keuzes en spaart energie." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Barack Obama en Steve Jobs droegen bewust elke dag hetzelfde soort kleding om beslissingsenergie te sparen voor belangrijkere zaken." }
    ],
    prerequisites: ["energy-management", "batch-processing"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke strategie helpt het meest om beslissingsvermoeidheid te verminderen?", options: ["Meer beslissingen nemen om te oefenen", "Routines en standaardkeuzes instellen voor terugkerende situaties", "Beslissingen uitstellen naar de avond", "Altijd anderen laten beslissen"], correctIndex: 1, explanation: "Door routines te creëren voor terugkerende keuzes (wat te eten, wanneer te sporten, welke kleren te dragen) elimineer je de mentale belasting van die keuzes en behoud je energie voor wat echt telt." }
    ],
    creativePrompt: "Identificeer vijf terugkerende beslissingen in je dag die je zou kunnen automatiseren of standaardiseren. Wat zou dat opleveren?",
    aiHelperPrompts: ["Hoe bouw ik routines op om beslissingsvermoeidheid te verminderen?", "Op welk moment van de dag neem ik mijn beste beslissingen?", "Hoe herken ik dat ik last heb van beslissingsvermoeidheid?"]
  },
  {
    id: "parkinson-law-time",
    title: "Wet van Parkinson",
    difficulty: 2,
    emoji: "🕰️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Productiviteit",
    tags: ["deadlines", "tijd", "efficiëntie", "uitstelgedrag"],
    definition: "De wet van Parkinson stelt: 'Werk breidt zich uit om de tijd die ervoor beschikbaar is, te vullen.' Als je drie uur hebt voor een taak die een uur kost, duurt het drie uur. Kunstmatige deadlines verhogen efficiëntie.",
    abstractExample: "Water vult altijd de container volledig, ongeacht de grootte van de container. Zo vult werk ook altijd de beschikbare tijd — tenzij je bewust de container verkleint.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een rapport waarvoor een week uitgetrokken is, kost een week. Hetzelfde rapport met een deadline van twee dagen kost twee dagen — en is vaak van vergelijkbare kwaliteit." },
      { domain: "Studie", icon: "📚", text: "Een student die 'de hele dag' heeft om te studeren, procrastineert tot de avond. Dezelfde student met een afgesproken sociale activiteit om 17:00 studeert efficiënt van 13:00-17:00." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Vergaderingen duren standaard een uur, ongeacht de agenda. Verander ze naar 45 minuten en je merkt dat alles evengoed behandeld wordt — efficiënter en zonder uitloop." }
    ],
    prerequisites: ["eisenhower-matrix"],
    unlocks: ["minimum-viable-effort"],
    exercises: [
      { type: "multipleChoice", question: "Hoe kun je de wet van Parkinson gebruiken om je productiviteit te verhogen?", options: ["Altijd meer tijd plannen voor taken", "Bewust kortere deadlines instellen dan je denkt nodig te hebben", "Werken zonder deadlines voor maximale creativiteit", "Taken delegeren aan anderen"], correctIndex: 1, explanation: "Door bewust kortere tijdsvensters te plannen, creëer je constructieve druk die focus en besluitvaardigheid verhoogt. Parkinson's Law werkt ook omgekeerd: minder tijd = minder uitrekken." }
    ],
    creativePrompt: "Kies een taak die je altijd uitstelt. Geef jezelf de helft van de tijd die je normaal zou plannen. Wat gebeurt er?",
    aiHelperPrompts: ["Hoe stel ik realistische maar ambitieuze deadlines?", "Wat doe ik als ik mijn zelfopgelegde deadline niet haal?", "Hoe voorkom ik dat kortere deadlines kwaliteit schaden?"]
  },
  {
    id: "minimum-viable-effort",
    title: "Minimale Effectieve Inspanning",
    difficulty: 2,
    emoji: "🎯",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Productiviteit",
    tags: ["perfectionism", "Pareto", "efficiëntie", "pragmatisme"],
    definition: "De minimale effectieve inspanning is de kleinste hoeveelheid actie die het gewenste resultaat oplevert. Gebaseerd op het Pareto-principe (80/20): 20% van de inspanning levert 80% van het resultaat op. Meer doen levert afnemende meeropbrengsten.",
    abstractExample: "Je kunt water laten koken bij 100°C. Meer energie erin stoppen maakt het niet natter — het kookt al. Zo geldt voor veel taken: voorbij een bepaald punt voegt meer inspanning weinig toe.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een presentatie die 'goed genoeg' is voor de vergadering kost vier uur. Haar perfectioneren tot 'perfect' kost nog eens acht uur, maar het effect op het publiek is minimaal." },
      { domain: "Studie", icon: "📚", text: "De eerste 70% begrijpen van een onderwerp kost weinig tijd; de laatste 30% volledig beheersen kost vaak evenveel of meer. Soms is 70% voldoende voor het doel." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Twee keer per week 30 minuten intensief sporten geeft al grote gezondheidsbaten. Elke dag twee uur gaat je niet lineair gezonder maken — de meerwaarde daalt snel." }
    ],
    prerequisites: ["parkinson-law-time"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is de kern van het concept 'minimale effectieve inspanning'?", options: ["Zo min mogelijk doen", "De inspanning vinden waarbij meeropbrengst niet langer opweegt tegen de kosten", "Altijd 80% van taken overslaan", "Nooit perfectionistisch zijn"], correctIndex: 1, explanation: "Het gaat niet om luiheid maar om efficiëntie: het punt vinden waar extra inspanning nauwelijks extra resultaat oplevert. Voorbij dat punt is meer doen verspilling van tijd en energie." }
    ],
    creativePrompt: "Kies een project waar je de neiging hebt te perfectioneren. Wat is het minimale dat je kunt doen om het 'goed genoeg' te maken? Wat win je als je daarbij stopt?",
    aiHelperPrompts: ["Hoe weet ik wanneer iets 'goed genoeg' is?", "Hoe overwin ik perfectionisme zonder kwaliteit te verliezen?", "Welke taken vragen wel maximale inspanning en welke niet?"]
  },
  {
    id: "spaced-repetition",
    title: "Gespreide Herhaling",
    difficulty: 2,
    emoji: "🔁",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Leren",
    tags: ["geheugen", "leren", "studie", "retentie"],
    definition: "Gespreide herhaling is een leertechniek waarbij informatie wordt herhaald op toenemend langere intervallen, net voordat je het vergeet. Dit maakt gebruik van het 'spacing effect': verspreid leren is aanzienlijk effectiever dan herhaling in één blok.",
    abstractExample: "Stel je een curve voor die daalt naarmate de tijd verstrijkt — de vergeetcurve. Gespreide herhaling hakt telkens in op de curve net voor het dieptepunt, waarna de curve minder snel daalt. Na elke herhaling duurt het langer voor je vergeet.",
    examples: [
      { domain: "Studie", icon: "📚", text: "Apps als Anki gebruiken algoritmen om flashcards precies op het juiste moment te tonen: woorden die je goed kent zie je minder; woorden die je bijna vergeet zie je vaker." },
      { domain: "Werk", icon: "💼", text: "Een verkoper herhaalt de kenmerken van nieuwe producten op dag 1, dag 3, dag 7 en dag 14 na de training — in plaats van alles op dag 1 te stampen." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Namen leren op feestjes: herhaal de naam direct bij kennismaking, zeg hem drie minuten later in een zin, en gebruik hem aan het einde van het gesprek nog een keer." }
    ],
    prerequisites: [],
    unlocks: ["retrieval-practice", "interleaving"],
    exercises: [
      { type: "multipleChoice", question: "Waarom is gespreide herhaling effectiever dan 'crammen' (alles in één sessie leren)?", options: ["Crammen geeft stress die leren blokkeert", "Gespreide herhaling benut de vergeetcurve om geheugensporen te versterken op het optimale moment", "Crammen werkt alleen voor feiten, niet voor begrip", "Spreiding maakt leren leuker"], correctIndex: 1, explanation: "Elke keer dat je iets net voor het vergeetpunt herhaalt, versterkt de hersenen de geheugensporen sterker dan wanneer je het recent nog zag. Dit resulteert in diepere, langdurigere opslag." }
    ],
    creativePrompt: "Kies iets wat je wil onthouden (vocabulaire, feiten, concepten). Maak 10 flashcards en oefen ze vandaag, dan morgen, dan over drie dagen. Hoe verschilt dit van hoe je normaal leert?",
    aiHelperPrompts: ["Hoe begin ik met Anki of een ander spaced repetition systeem?", "Wat zijn goede intervallen voor spaced repetition?", "Voor welk type kennis werkt spaced repetition het best?"]
  },
  {
    id: "retrieval-practice",
    title: "Ophaaleffect",
    difficulty: 2,
    emoji: "🧲",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Leren",
    tags: ["geheugen", "testen", "actief leren", "retentie"],
    definition: "Retrieval practice (het ophaaleffect) is de bevinding dat actief proberen informatie uit het geheugen op te halen — in plaats van het opnieuw te lezen — het geheugen veel sterker versterkt. Testen is een leeractiviteit, niet alleen een meetinstrument.",
    abstractExample: "Lezen is als water in een lekkende emmer gieten. Opzoeken (retrieving) is als de gaten dichten — elke keer dat je iets ophaalt, wordt de opslag sterker en duurzamer.",
    examples: [
      { domain: "Studie", icon: "📚", text: "Na het lezen van een hoofdstuk het boek sluiten en opschrijven wat je je herinnert (brain dump) is effectiever dan het hoofdstuk herlezen — ook al voelt herlezen makkelijker en comfortabeler." },
      { domain: "Werk", icon: "💼", text: "Na een vergadering de belangrijkste punten opschrijven zonder je aantekeningen te raadplegen versterkt het geheugen beter dan de notulen herlezen." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Jezelf quizzen over wat je gisteren las of zag — in plaats van het opnieuw bekijken — is een eenvoudige maar krachtige dagelijkse gewoonte." }
    ],
    prerequisites: ["spaced-repetition"],
    unlocks: ["elaborative-interrogation"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het 'testing effect' in leerpsychologie?", options: ["Toetsen verlagen de leerprestaties door angst", "Regelmatig jezelf testen verbetert het langetermijngeheugen meer dan herlezen", "Testen werkt alleen voor feitenkennis", "Het testing effect verdwijnt na het middelbaar onderwijs"], correctIndex: 1, explanation: "Het testing effect is een van de meest robuuste bevindingen in de cognitieve psychologie: de handeling van ophalen versterkt geheugensporen sterker dan passief herhalen, zelfs als je fouten maakt." }
    ],
    creativePrompt: "Lees een artikel of hoofdstuk. Leg het weg. Schrijf in 5 minuten alles op wat je je herinnert. Lees dan terug. Wat ontbrak? Wat klopt? Hoe voelt dit vergeleken met herlezen?",
    aiHelperPrompts: ["Hoe integreer ik retrieval practice in mijn studie?", "Welke quizmethodes zijn het meest effectief?", "Hoe maak ik goede vragen voor mezelf?"]
  },
  {
    id: "interleaving",
    title: "Verweven Leren",
    difficulty: 2,
    emoji: "🔀",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Leren",
    tags: ["leren", "variatie", "probleemoplossing", "transfer"],
    definition: "Verweven leren (interleaving) is het afwisselen van verschillende onderwerpen of soorten problemen tijdens een studiesessie, in tegenstelling tot geblokt leren (één onderwerp volledig afronden voor je verder gaat). Interleaving voelt moeilijker maar leidt tot beter begrip en overdracht.",
    abstractExample: "Blokkeren is als elke dag alleen linksbenig trappen om dat te verbeteren. Verweven is afwisselen: links, rechts, hoofd. Het voelt minder gecontroleerd maar maakt je een betere voetballer.",
    examples: [
      { domain: "Studie", icon: "📚", text: "Wiskunde oefenen door steeds van type te wisselen (algebra, meetkunde, statistiek) in één sessie levert beter begrip op dan drie uur puur algebra, ook al voelt het minder vloeiend." },
      { domain: "Werk", icon: "💼", text: "Een designer die wisselt tussen verschillende soorten ontwerpuitdagingen (UX, visueel, typografie) in een werkdag, ontwikkelt flexibeler vaardigheden dan iemand die een week puur aan UX werkt." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Gitaarlessen waarbij je afwisselt tussen akkoorden, melodielijnen en ritme geven sneller een volledig muzikant dan maanden uitsluitend akkoorden studeren." }
    ],
    prerequisites: ["spaced-repetition"],
    unlocks: ["transfer-of-learning"],
    exercises: [
      { type: "multipleChoice", question: "Waarom voelt verweven leren moeilijker dan geblokt leren, terwijl het effectiever is?", options: ["Het is niet moeilijker — het is gewoon minder populair", "Wisselen van context vereist meer cognitieve inspanning, wat leidt tot diepere verwerking", "Interleaving werkt beter voor gevorderde leerders", "De moeilijkheid zelf is het leren"], correctIndex: 1, explanation: "De extra cognitieve inspanning van contextswitch is precies wat het effectief maakt. Hersenen moeten harder werken om verbanden te leggen, wat leidt tot robuustere kennisstructuren." }
    ],
    creativePrompt: "Plan je volgende studiesessie met drie verschillende maar gerelateerde onderwerpen die je afwisselt. Hoe verschilt dit van je gebruikelijke aanpak?",
    aiHelperPrompts: ["Hoe pas ik interleaving toe in mijn studie?", "Welke onderwerpen zijn goed om te verweven?", "Hoeveel wissel ik idealiter per sessie?"]
  },
  {
    id: "elaborative-interrogation",
    title: "Uitdiepend Vragen Stellen",
    difficulty: 2,
    emoji: "❓",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Leren",
    tags: ["begrip", "waarom", "redeneren", "diep leren"],
    definition: "Uitdiepend vragen stellen (elaborative interrogation) is de techniek van jezelf 'waarom' en 'hoe' vragen stellen bij nieuwe informatie, in plaats van feiten passief te accepteren. Dit verbindt nieuwe kennis met bestaande kennis en verdiept begrip.",
    abstractExample: "In plaats van te onthouden 'bomen verliezen blad in de herfst', vraag je 'waarom verliezen bomen blad?' Je antwoord verbindt het feit met fotosynthese, koude, waterverlies — een web van kennis.",
    examples: [
      { domain: "Studie", icon: "📚", text: "Een student leert 'de Franse Revolutie begon in 1789'. In plaats van dit te memoriseren vraagt hij: 'Waarom juist 1789? Wat maakte die periode rijp voor revolutie?' Dit bouwt een causaal begrip." },
      { domain: "Werk", icon: "💼", text: "Na het lezen van een bedrijfsrapport: 'Waarom daalde de omzet juist in dit kwartaal? Hoe hangt dit samen met markttrends?' Dit leidt tot dieper inzicht dan het onthouden van de cijfers." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Bij het koken een nieuw recept niet alleen volgen, maar vragen: 'Waarom voeg ik zout toe aan het kookwater? Waarom laat ik vlees rusten na het bakken?' Zo word je een beter kok." }
    ],
    prerequisites: ["retrieval-practice"],
    unlocks: ["feynman-technique"],
    exercises: [
      { type: "multipleChoice", question: "Wat maakt uitdiepend vragen stellen effectiever dan simpelweg herhalen?", options: ["Het duurt korter", "Het verbindt nieuwe informatie met bestaande kennis via causale verklaringen", "Het is makkelijker om te onthouden dan herhaling", "Het maakt leren leuker"], correctIndex: 1, explanation: "Elaborative interrogation werkt omdat causale verbanden (waarom X leidt tot Y) sterkere geheugensporen vormen dan losse feiten. Begrip is duurzamer dan memorisatie." }
    ],
    creativePrompt: "Lees een pagina uit een boek of artikel. Stop na elke alinea en stel jezelf de vraag 'waarom?' of 'hoe?' bij de hoofdpunten. Hoe dieper begrijp je de stof vergeleken met gewoon lezen?",
    aiHelperPrompts: ["Hoe formuleer ik goede 'waarom'-vragen bij studiemateriaal?", "Hoe weet ik of mijn uitleg klopt?", "Hoe combineer ik dit met andere leertechnieken?"]
  },
  {
    id: "feynman-technique",
    title: "Feynman-techniek",
    difficulty: 2,
    emoji: "🧑‍🏫",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Leren",
    tags: ["begrip", "uitleggen", "leertechniek", "vereenvoudigen"],
    definition: "De Feynman-techniek is een vierstapsleermethode: 1) Kies een concept, 2) Leg het uit alsof je het uitlegt aan een kind, 3) Identificeer hiaten in je begrip en bestudeer opnieuw, 4) Vereenvoudig en gebruik analogieën. Het doel: diep begrip, geen oppervlakkige memorisatie.",
    abstractExample: "Als je iets echt begrijpt, kun je het simpel uitleggen. Als je het niet eenvoudig kunt uitleggen, begrijp je het zelf niet goed genoeg. De techniek gebruikt uitleggen als spiegel van begrip.",
    examples: [
      { domain: "Studie", icon: "📚", text: "Na het leren van 'elektromagnetische inductie' probeer je het uit te leggen zonder vaktermen: 'Als je een magneet beweegt door een koper ring, gaan elektronen stromen.' Kun je dit? Dan begrijp je het." },
      { domain: "Werk", icon: "💼", text: "Een consultant die een strategie kan uitleggen aan een sceptische buurman zonder jargon, begrijpt het echt — en kan het beter verkopen dan iemand die alleen de buzzwords kent." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Uitleggen aan je kind waarom er seizoenen zijn (niet 'de aarde kantelt op zijn as' maar: 'in de winter staat de zon lager, dus geeft hij minder warmte aan ons stukje aarde') verdiept je eigen begrip." }
    ],
    prerequisites: ["elaborative-interrogation"],
    unlocks: ["chunking"],
    exercises: [
      { type: "multipleChoice", question: "Wat onthult het als je een concept niet kunt uitleggen in eenvoudige taal?", options: ["Dat het concept te moeilijk is", "Dat je begrip oppervlakkiger is dan je dacht", "Dat je meer feiten moet memoriseren", "Dat het concept niet nuttig is"], correctIndex: 1, explanation: "Jargon en technische taal verbergen vaak hiaten in begrip. Wanneer je eenvoudige taal moet gebruiken, word je gedwongen de essentie te begrijpen en niet te verbergen achter complexe terminologie." }
    ],
    creativePrompt: "Kies een concept dat je 'denkt te begrijpen'. Leg het uit in eenvoudige taal aan een denkbeeldig kind van 10 jaar. Waar stok je? Dat zijn de gaten in je begrip.",
    aiHelperPrompts: ["Hoe vind ik eenvoudige analogieën voor complexe concepten?", "Wat doe ik als ik een concept niet kan vereenvoudigen?", "Hoe gebruik ik de Feynman-techniek voor technische vakken?"]
  },
  {
    id: "chunking",
    title: "Chunking",
    difficulty: 1,
    emoji: "🧩",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Leren",
    tags: ["geheugen", "werkgeheugen", "organisatie", "patroonherkenning"],
    definition: "Chunking is het groeperen van losse informatie-eenheden in betekenisvolle clusters ('chunks'), zodat ze als één eenheid in het werkgeheugen kunnen worden opgeslagen. Experts denken in chunks; beginners in losse onderdelen.",
    abstractExample: "Een telefoonnummer als '0612345678' onthouden is moeilijk. Als '06-1234-5678' is het drie chunks. In muziek is een akkoord een chunk — een expert ziet 'Dm7' als één ding, een beginner ziet vier losse noten.",
    examples: [
      { domain: "Studie", icon: "📚", text: "Een schaakmeesters ziet niet 32 losse stukken, maar patronen en formaties — chunks. Beginners zien losse stukken. Chunking is waarom experts sneller en beter denken in hun domein." },
      { domain: "Werk", icon: "💼", text: "Een ervaren programmeur ziet 'een lus die filtert en transformeert' als één chunk — een beginner ziet afzonderlijke regels. Dit maakt experts sneller bij code lezen en schrijven." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Leren typen begint met losse letters, dan worden woorden chunks, dan zinnen. Je hoeft niet meer na te denken over elke letter afzonderlijk." }
    ],
    prerequisites: ["feynman-technique"],
    unlocks: ["mind-mapping"],
    exercises: [
      { type: "multipleChoice", question: "Hoe vergroot chunking de capaciteit van het werkgeheugen?", options: ["Door het werkgeheugen te trainen meer te bevatten", "Door meerdere eenheden samen te voegen tot één betekenisvolle eenheid", "Door irrelevante informatie te vergeten", "Door te slapen na het leren"], correctIndex: 1, explanation: "Het werkgeheugen heeft een beperkte capaciteit (7±2 items). Chunking omzeilt dit door losse items samen te voegen tot één betekenisvol item, waardoor er effectief meer informatie in past." }
    ],
    creativePrompt: "Kies iets dat je moeilijk vindt te onthouden (namen, nummers, stappen). Hoe kun je het organiseren in betekenisvolle groepen? Probeer dit en test het na een dag.",
    aiHelperPrompts: ["Hoe maak ik effectieve chunks voor studiemateriaal?", "Hoe weet ik of een chunk te groot is?", "Hoe gebruik ik chunking voor het leren van talen?"]
  },
  {
    id: "mind-mapping",
    title: "Mind Mapping",
    difficulty: 1,
    emoji: "🗺️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Leren",
    tags: ["visueel leren", "organisatie", "creativiteit", "geheugen"],
    definition: "Mind mapping is een visuele denkorganisatietechniek waarbij je een centraal concept in het midden plaatst en gerelateerde ideeën als takken uitbreidt. Dit weerspiegelt hoe de hersenen associatief werken en helpt bij begrijpen, onthouden en creatief denken.",
    abstractExample: "Een mind map is als een boom. De stam is het hoofdonderwerp. Grote takken zijn hoofdthema's. Kleine takken zijn details. De boom toont hoe alles samenhangt — een lineaire lijst doet dat niet.",
    examples: [
      { domain: "Studie", icon: "📚", text: "In plaats van lineaire aantekeningen maakt een student een mind map van een hoofdstuk: centraal 'fotosynthese', takken voor 'lichtreactie', 'donkerreactie', 'chloroplasten', etc." },
      { domain: "Werk", icon: "💼", text: "Bij een brainstorm over een nieuw product wordt een mind map gemaakt met 'productlancering' in het midden, takken voor marketing, techniek, klantenservice, tijdlijn." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Een vakantie plannen via mind map: centraal 'zomervakantie', takken voor bestemming, budget, activiteiten, logistiek — geeft overzicht en mist niets." }
    ],
    prerequisites: ["chunking"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is de belangrijkste reden dat mind mapping beter werkt dan lineaire notities voor begrip?", options: ["Het is sneller te maken", "Het weerspiegelt de associatieve manier waarop de hersenen informatie opslaan", "Het ziet er mooier uit", "Je schrijft minder tekst"], correctIndex: 1, explanation: "De hersenen slaan informatie niet lineair op, maar in netwerken van associaties. Mind maps weerspiegelen deze structuur, waardoor ze beter aansluiten bij hoe geheugen werkt." }
    ],
    creativePrompt: "Maak een mind map van een onderwerp dat je interesseert of wil leren. Begin met het centrale concept en breid uit in takken zonder censuur. Wat ontdek je over je eigen kennisstructuur?",
    aiHelperPrompts: ["Hoe maak ik een effectieve mind map?", "Welke tools zijn goed voor digitale mind maps?", "Wanneer gebruik ik mind mapping versus lineaire aantekeningen?"]
  },
  {
    id: "desirable-difficulty",
    title: "Gewenste Moeilijkheid",
    difficulty: 3,
    emoji: "💪",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Leren",
    tags: ["leren", "uitdaging", "diepgaand leren", "cognitie"],
    definition: "Gewenste moeilijkheid (desirable difficulty) is het principe dat leren dat zich moeilijk aanvoelt — ophalen, interleaven, genereren — leidt tot robuustere en duurzamere kennis, terwijl leren dat makkelijk aanvoelt (herlezen, blokkeren) oppervlakkiger is.",
    abstractExample: "Een spier groeit niet van makkelijke oefeningen — die houden hem alleen actief. Zo ook het geheugen: gemakkelijk leren houdt kennis oppervlakkig. De juiste moeilijkheidsgraad bouwt echte kracht.",
    examples: [
      { domain: "Studie", icon: "📚", text: "Herlezen voelt productief (je herkent alles) maar leidt tot illusie van kennis. Jezelf quizzen voelt moeilijker en frustrerender, maar leidt tot werkelijk leren — desirable difficulty in actie." },
      { domain: "Werk", icon: "💼", text: "Een trainingsprogramma dat medewerkers direct aan moeilijke cases zet (niet eerst makkelijke oefeningen) is minder comfortabel maar leidt tot snellere competentieontwikkeling." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Een nieuwe taal leren zonder vertaaltools (moeilijker) leidt tot betere taalbeheersing dan met constante hulpmiddelen studeren." }
    ],
    prerequisites: ["retrieval-practice", "interleaving"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Waarom geeft makkelijk leren een gevoel van vaardigheid dat misleidend kan zijn?", options: ["Makkelijk leren activeert geen geheugensporen", "Herkenning (passief) is makkelijker dan ophalen (actief), maar herkenning bewijst geen werkelijke kennis", "Makkelijk leren is altijd ineffectief", "Het gevoel van leren is altijd betrouwbaar"], correctIndex: 1, explanation: "Wanneer je herkent dat iets bekend is (bij herlezen), voelt dat als kennis — maar herkenning en ophaalvermogen zijn verschillende processen. Echte kennis is testen of je het kunt ophalen zonder hints." }
    ],
    creativePrompt: "Denk aan iets wat je 'weet' maar al lang niet actief hebt gebruikt. Test jezelf: kun je het uitleggen zonder hulp? Wat zegt dit over het verschil tussen herkennen en weten?",
    aiHelperPrompts: ["Hoe weet ik of mijn studie moeilijk genoeg is?", "Hoe vind ik de juiste moeilijkheidsgraad voor leren?", "Hoe ga ik om met de frustratie van moeilijk leren?"]
  },
  {
    id: "transfer-of-learning",
    title: "Transfer van Leren",
    difficulty: 3,
    emoji: "🔗",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Leren",
    tags: ["transfer", "toepassing", "generalisatie", "abstractie"],
    definition: "Transfer van leren is het vermogen om kennis of vaardigheden opgedaan in één context toe te passen in een nieuwe, andere context. Diep begrip bevordert transfer; oppervlakkige memorisatie doet dat niet. Onderscheid: nabije transfer (gelijke context) en verre transfer (andere context).",
    abstractExample: "Leren pianospelen tranfsereert deels naar gitaar spelen — de muziektheorie en ritmevaardigheden zijn overdraagbaar. Maar als je alleen de noten memoriseert (niet de muziektheorie), is die transfer minimaal.",
    examples: [
      { domain: "Studie", icon: "📚", text: "Een student die statistiek begrijpt als 'hoe meet ik onzekerheid' kan dit toepassen in psychologie, economie en biologie — verre transfer. Iemand die formules stampt, struikelt bij elke nieuw type vraag." },
      { domain: "Werk", icon: "💼", text: "Projectmanagementvaardigheden (plannen, risicomanagement, communicatie) transfereren naar diverse branches — een ervaren projectmanager kan snel omschakelen." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Iemand die heeft leren debuggen in programmering, past diezelfde systematische probleemoplossende aanpak toe op technische problemen thuis of in de auto." }
    ],
    prerequisites: ["interleaving", "desirable-difficulty"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat bevordert transfer van leren het meest?", options: ["Veel oefenen in precies dezelfde context", "Begrip van onderliggende principes en oefenen in diverse contexten", "Memoriseren van zoveel mogelijk feiten", "Focussen op één specifiek toepassingsdomein"], correctIndex: 1, explanation: "Transfer vereist abstractie: de onderliggende structuur herkennen los van de specifieke context. Oefenen in variatie helpt hersenen patronen te extraheren die overdraagbaar zijn naar nieuwe situaties." }
    ],
    creativePrompt: "Kies een vaardigheid die je goed beheerst. In welke onverwachte contexten zou je deze vaardigheid kunnen toepassen? Probeer één concrete transfer te identificeren en te testen.",
    aiHelperPrompts: ["Hoe train ik bewust op transfer van leren?", "Waarom lukt transfer mij niet altijd?", "Hoe ontwerp ik leeromgevingen die transfer bevorderen?"]
  },
  {
    id: "worked-examples",
    title: "Uitgewerkte Voorbeelden",
    difficulty: 1,
    emoji: "📝",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Leren",
    tags: ["leren", "voorbeelden", "cognitieve belasting", "instructie"],
    definition: "Uitgewerkte voorbeelden (worked examples) zijn volledig uitgewerkte oplossingen die stap voor stap tonen hoe een probleem wordt opgelost. Beginners leren effectiever van uitgewerkte voorbeelden dan van zelfstandig problemen oplossen — later, als expertise groeit, verschuift dit.",
    abstractExample: "Bij leren koken is het efficiënter te kijken hoe een chef een recept stap voor stap bereidt, dan zelf te experimenteren. Later, als je de basis kent, helpt eigenlijk experimenteren meer.",
    examples: [
      { domain: "Studie", icon: "📚", text: "Een student die wiskundeproblemen leert door uitgewerkte voorbeelden grondig te analyseren, leert sneller de principes dan iemand die meteen zelf oefenopgaven probeert zonder voorbeeld." },
      { domain: "Werk", icon: "💼", text: "Nieuwe medewerkers leren sneller van geannoteerde voorbeeldprojecten (wat gedaan werd en waarom) dan van een abstracte handleiding." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Leren beleggen door uitgewerkte analyses van succesvolle en mislukte investeringsbeslissingen te bestuderen geeft dieper inzicht dan alleen theorie lezen." }
    ],
    prerequisites: [],
    unlocks: ["feynman-technique"],
    exercises: [
      { type: "multipleChoice", question: "Wanneer zijn uitgewerkte voorbeelden het meest effectief als leermateriaal?", options: ["Voor experts die al goed begrijpen hoe een probleem werkt", "Voor beginners die nog geen schema's hebben voor probleemoplossing in een domein", "Voor gemakkelijke, routineuze taken", "Nooit — zelfstandig oefenen is altijd beter"], correctIndex: 1, explanation: "Beginners missen de cognitieve schema's om problemen efficiënt aan te pakken. Uitgewerkte voorbeelden bieden die structuur direct, waardoor cognitieve overbelasting wordt verminderd en leren versnelt." }
    ],
    creativePrompt: "Zoek een uitgewerkt voorbeeld van een probleem in een domein dat je wil leren. Analyseer elk stap: waarom wordt deze stap genomen? Wat is het achterliggende principe?",
    aiHelperPrompts: ["Waar vind ik goede uitgewerkte voorbeelden voor mijn vakgebied?", "Hoe analyseer ik uitgewerkte voorbeelden effectief?", "Wanneer moet ik overstappen van voorbeelden naar zelfstandig oefenen?"]
  },
  {
    id: "post-traumatic-growth",
    title: "Posttraumatische Groei",
    difficulty: 3,
    emoji: "🌱",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Emotioneel Welzijn",
    tags: ["veerkracht", "trauma", "groei", "betekenis"],
    definition: "Posttraumatische groei (PTG) is het fenomeen waarbij mensen na moeilijke levensgebeurtenissen niet alleen herstellen maar daadwerkelijk groeien — in zelfkennis, relaties, levensvisie of spiritualiteit. Het is geen ontkenning van pijn, maar groei erdoor heen.",
    abstractExample: "Botbreuken herstellen soms sterker op de breukplaats dan het bot daarvoor was. Zo kunnen mensen na ernstige tegenslag op bepaalde gebieden veerkrachtiger en dieper worden dan ze ooit waren.",
    examples: [
      { domain: "Persoonlijk", icon: "💙", text: "Iemand die een ernstige ziekte overleeft, rapporteert vaak waardering voor kleine dingen, diepere relaties en een hernieuwd gevoel van richting — ook al was de ziekte vreselijk." },
      { domain: "Werk", icon: "💼", text: "Een ondernemer wiens bedrijf failliet gaat, bouwt een tweede bedrijf met meer zelfkennis, realisme en authenticiteit — geworteld in de pijnlijke ervaring." },
      { domain: "Studie", icon: "📚", text: "Een student die een jaar verliest door ziekte en achterloopt, ontwikkelt discipline, tijdsmanagement en veerkracht die studiegenoten zonder die ervaring niet hebben." }
    ],
    prerequisites: [],
    unlocks: ["resilience-building", "meaning-making"],
    exercises: [
      { type: "multipleChoice", question: "Wat onderscheidt posttraumatische groei van simpelweg 'herstellen'?", options: ["PTG is herstellen zonder littekens", "PTG betekent dat mensen boven hun uitgangsconditie uitstijgen op bepaalde gebieden", "PTG impliceert dat trauma niet echt schadelijk was", "PTG treedt bij iedereen op na moeilijkheden"], correctIndex: 1, explanation: "Herstellen betekent terugkeren naar het baseline-niveau van functioneren. PTG beschrijft groei voorbij dat niveau — nieuwe capaciteiten, diepere relaties of een rijkere levensvisie die zonder de moeilijkheid niet was ontstaan." }
    ],
    creativePrompt: "Denk aan een moeilijke ervaring uit je verleden. Welke krachten, inzichten of waarden heeft het je gebracht die je zonder die ervaring niet zou hebben? Schrijf drie dingen op.",
    aiHelperPrompts: ["Hoe stimuleer ik posttraumatische groei na een moeilijke periode?", "Is het normaal dat ik nog pijn voel maar ook gegroeid ben?", "Hoe onderscheid ik PTG van het ontkennen van pijn?"]
  },
  {
    id: "gratitude-practice",
    title: "Dankbaarheidspraktijk",
    difficulty: 1,
    emoji: "🙏",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Emotioneel Welzijn",
    tags: ["geluk", "positieve psychologie", "welzijn", "aandacht"],
    definition: "Dankbaarheidspraktijk is de bewuste, regelmatige gewoonte van aandacht schenken aan wat goed gaat en waardering uiten voor mensen, ervaringen en omstandigheden. Onderzoek toont dat regelmatige dankbaarheidspraktijk welzijn, slaap en relaties verbetert.",
    abstractExample: "De hersenen hebben een negativiteitsbias — ze scannen automatisch op gevaar en problemen. Dankbaarheid is als een tegengewicht: bewust aandacht richten op wat werkt, bestaat en geschonken wordt.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "Elke avond drie specifieke dingen opschrijven waarvoor je dankbaar bent (niet 'mijn gezin' maar 'dat mijn dochter lachte bij het avondeten') verhoogt aantoonbaar welzijn na zes weken." },
      { domain: "Werk", icon: "💼", text: "Een manager die wekelijks een handgeschreven bedankbriefje schrijft aan teamleden, verbetert de teammoraal en eigen welzijn tegelijk." },
      { domain: "Relaties", icon: "❤️", text: "Partners die elkaar regelmatig vertellen waarvoor ze dankbaar zijn (niet alleen bij grote dingen) bouwen positieve reservoirs op die hen door moeilijker periodes helpen." }
    ],
    prerequisites: [],
    unlocks: ["hedonic-adaptation", "present-moment-focus"],
    exercises: [
      { type: "multipleChoice", question: "Wat maakt dankbaarheid effectiever dan algemene positieve denken?", options: ["Dankbaarheid is positiever dan andere technieken", "Dankbaarheid richt aandacht op specifieke, werkelijke goede dingen — niet op abstracte optimisme", "Dankbaarheid vereist minder discipline", "Er is geen verschil"], correctIndex: 1, explanation: "Specifieke dankbaarheid — voor concrete mensen, momenten en ervaringen — activeert werkelijke herinneringen en verbindingen. Algemeen positief denken zonder specificiteit heeft minder effect op welbevinden." }
    ],
    creativePrompt: "Schrijf een brief van drie alinea's aan iemand die een positief verschil in je leven heeft gemaakt, maar die je dat nooit hebt verteld. Lees het voor (eventueel aan de persoon zelf).",
    aiHelperPrompts: ["Hoe bouw ik een consistente dankbaarheidspraktijk op?", "Wat doe ik als ik niets kan bedenken waarvoor ik dankbaar ben?", "Hoe maak ik dankbaarheid niet oppervlakkig of dwangmatig?"]
  },
  {
    id: "cognitive-reappraisal",
    title: "Cognitieve Herwaardering",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Emotioneel Welzijn",
    tags: ["emoties", "cognitie", "perspectief", "regulatie"],
    definition: "Cognitieve herwaardering is de emotieregulatietechniek waarbij je de betekenis van een situatie bewust herinterpreteert om de emotionele impact te veranderen. In tegenstelling tot onderdrukking verandert herwaardering de emotionele beleving zelf.",
    abstractExample: "Dezelfde berg kan gezien worden als een hindernis of als een avontuur. De berg verandert niet — de interpretatie wel. Herwaardering is het bewust kiezen van een andere lens voor dezelfde werkelijkheid.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Kritiek ontvangen op een project: in plaats van 'Ik faal' denken 'Dit is informatie die mij helpt groeien'. Dezelfde feedback, fundamenteel andere emotionele reactie." },
      { domain: "Persoonlijk", icon: "💙", text: "Een afwijzing voor een baan: 'Dit was duidelijk niet de juiste match' in plaats van 'Ik ben niet goed genoeg'. Herwaardering verschuift de interpretatie zonder de realiteit te ontkennen." },
      { domain: "Relaties", icon: "❤️", text: "De irritante eigenschap van een partner herinterpreteren als uitdrukking van een waarde — 'Hij is traag maar grondig' — vermindert irritatie zonder de situatie te negeren." }
    ],
    prerequisites: [],
    unlocks: ["emotional-flexibility", "acceptance-commitment"],
    exercises: [
      { type: "multipleChoice", question: "Waarom is cognitieve herwaardering effectiever dan emotionele onderdrukking?", options: ["Herwaardering is makkelijker", "Herwaardering verandert de emotionele beleving zelf; onderdrukking kost energie en lekt toch uit", "Onderdrukking werkt beter op lange termijn", "Ze zijn even effectief"], correctIndex: 1, explanation: "Emotionele onderdrukking (het gevoel verborgen houden) kost cognitieve middelen en lekt toch uit in fysiologische reacties en gedrag. Herwaardering verandert de appraisal — de bron van de emotie — wat fundamenteel efficiënter is." }
    ],
    creativePrompt: "Denk aan een situatie die je momenteel negatief beïnvloedt. Schrijf drie alternatieve interpretaties op van dezelfde situatie. Welke klopt ook en geeft je meer handlingsruimte?",
    aiHelperPrompts: ["Hoe onderscheid ik herwaardering van zelfbedrog of ontkenning?", "Welke situaties lenen zich goed voor cognitieve herwaardering?", "Hoe oefen ik cognitieve herwaardering in het moment?"]
  },
  {
    id: "mindfulness-practice",
    title: "Mindfulness",
    difficulty: 2,
    emoji: "🧘",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Emotioneel Welzijn",
    tags: ["aandacht", "bewustzijn", "meditatie", "aanwezigheid"],
    definition: "Mindfulness is de praktijk van bewuste, niet-oordelende aandacht voor het huidige moment — gedachten, gevoelens, lichaamssensaties. Het is geen leeghoofd, maar het observeren van de stroom van ervaringen zonder erin meegesleurd te worden.",
    abstractExample: "De geest is als water dat altijd in beweging is. Mindfulness is niet het water stilzetten — dat kan niet. Het is leren op de oever staan en de stroom observeren zonder erin te springen.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "Vijf minuten aandacht geven aan je adem — niet om het te veranderen maar om te observeren — traint het vermogen om uit automatische reactiviteit te stappen en bewuster te reageren." },
      { domain: "Werk", icon: "💼", text: "Voor een moeilijk gesprek even stoppen, drie keer adem halen en opmerken wat je voelt (spanning in de borst, snellere hartslag) helpt je bewuster en minder reactief te reageren." },
      { domain: "Eten", icon: "🍽️", text: "Mindful eten — langzaam, zonder afleiding, met aandacht voor smaak, textuur en gevoel — leidt tot beter eten, meer voldoening en minder overeten." }
    ],
    prerequisites: [],
    unlocks: ["present-moment-focus", "emotional-regulation"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het doel van mindfulness bij gedachten die opkomen?", options: ["Gedachten stoppen of onderdrukken", "Gedachten observeren zonder erin meegezogen te worden of ze te beoordelen", "Positieve gedachten versterken", "Negatieve gedachten vervangen door positieve"], correctIndex: 1, explanation: "Mindfulness leert dat gedachten mentale evenementen zijn, niet de werkelijkheid. Door ze te observeren als 'er is een gedachte dat X' creëer je afstand tussen jezelf en de gedachte, wat reactief gedrag vermindert." }
    ],
    creativePrompt: "Doe een vijf-minuten lichaamsscan: breng aandacht naar elk lichaamsdeel van voeten tot hoofd. Wat merk je? Wat werd eerder genegeerd dat er nu is?",
    aiHelperPrompts: ["Hoe begin ik met een mindfulness-praktijk?", "Wat doe ik als mijn geest steeds afdwaalt?", "Hoeveel mindfulness per dag is voldoende?"]
  },
  {
    id: "self-compassion",
    title: "Zelfmededogen",
    difficulty: 2,
    emoji: "💗",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Emotioneel Welzijn",
    tags: ["zelfkritiek", "welzijn", "veerkracht", "innerlijke stem"],
    definition: "Zelfmededogen (self-compassion) is de houding van vriendelijkheid en begrip naar jezelf bij pijn, falen of tekortkoming — dezelfde warmte die je een goede vriend zou tonen. Het bestaat uit drie elementen: zelfvriendelijkheid, gedeelde menselijkheid, en mindfulness.",
    abstractExample: "Stel je voor dat een vriend dezelfde fout maakt die jij maakte. Wat zou je zeggen? Zelfmededogen is: dat zeggen tegen jezelf. De meeste mensen zijn veel vriendelijker voor anderen dan voor zichzelf.",
    examples: [
      { domain: "Persoonlijk", icon: "💙", text: "Na een sociaal blunder jezelf niet eeuwig de les lezen ('wat was ik dom') maar denken: 'Dat was ongemakkelijk. Iedereen maakt fouten. Ik kan hier van leren.' — dat is zelfmededogen." },
      { domain: "Werk", icon: "💼", text: "Na een mislukt project: in plaats van zelfkastijding erkennen dat presteren moeilijk is, dat falen deel is van het proces, en je afvragen wat je kunt leren." },
      { domain: "Studie", icon: "📚", text: "Een slecht tentamenresultaat: niet plagen ('ik ben stom') maar begrijpen ('ik was niet goed voorbereid, ik was gespannen — dat is menselijk') en plannen hoe het beter kan." }
    ],
    prerequisites: ["mindfulness-practice"],
    unlocks: ["resilience-building"],
    exercises: [
      { type: "multipleChoice", question: "Hoe verschilt zelfmededogen van zelfmedelijden of verwennerij?", options: ["Zelfmededogen is hetzelfde als zelfmedelijden", "Zelfmededogen erkent moeilijkheid als deel van de menselijke ervaring en motiveert groei; zelfmedelijden isoleert en versterkt lijden", "Zelfmededogen maakt je lui", "Zelfmededogen vereist dat je je fouten goedkeurt"], correctIndex: 1, explanation: "Zelfmededogen erkent pijn zonder te dramatiseren en verbindt je aan de gedeelde menselijke ervaring van mislukken. Het motiveert verandering vanuit vriendelijkheid — effectiever dan zelfkritiek voor langetermijnontwikkeling." }
    ],
    creativePrompt: "Schrijf een brief aan jezelf vanuit het perspectief van een meelevende vriend die weet wat je doormaakt. Wat zou die vriend zeggen?",
    aiHelperPrompts: ["Hoe oefen ik zelfmededogen als ik gewend ben aan zelfkritiek?", "Is zelfmededogen hetzelfde als lage standaarden hebben?", "Hoe verbind ik zelfmededogen met persoonlijke groei?"]
  },
  {
    id: "hedonic-adaptation",
    title: "Hedonische Adaptatie",
    difficulty: 2,
    emoji: "📉",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Emotioneel Welzijn",
    tags: ["geluk", "aanpassing", "verwachting", "tevredenheid"],
    definition: "Hedonische adaptatie is het psychologische fenomeen waarbij mensen snel wennen aan positieve of negatieve veranderingen in hun leven, terugkerend naar hun baseline geluksniveau. Dit verklaart waarom nieuwe dingen snel gewoon worden en waarom rampen minder lang pijn doen dan verwacht.",
    abstractExample: "Een nieuwe auto geeft een week lang vreugde, dan is het gewoon vervoer. Een promotie geeft blijdschap, dan is het de nieuwe norm. We zijn adaptatiemachines — zowel aan het goede als het kwade.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "Onderzoek toont dat lottowinnaar en mensen die verlamd raakten na een jaar gemiddeld vergelijkbare geluksniveaus rapporteren als daarvoor — hedonische adaptatie werkt in beide richtingen." },
      { domain: "Werk", icon: "💼", text: "Die droomsalaris verhoging: de eerste maand voel je het. Na drie maanden is het de nieuwe norm. Materiële winsten adapteren snel — ervaringen en relaties minder snel." },
      { domain: "Persoonlijk", icon: "💙", text: "Nieuwheid van een hobby die maanden geleden je passie was voelt nu gewoon. Begrip van hedonische adaptatie helpt bewust variatie in te bouwen om enjoyment te behouden." }
    ],
    prerequisites: ["gratitude-practice"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke strategie werkt het beste om hedonische adaptatie te vertragen?", options: ["Meer en grotere aankopen doen", "Genot spreiden en variëren, en periodiek afzien om waardering te hernieuwen", "Hogere verwachtingen stellen", "Vermijden van positieve ervaringen"], correctIndex: 1, explanation: "We adapteren sneller aan constante, continue ervaringen dan aan gevarieerde of afgewisselde ervaringen. Bewust genieten van kleine dingen, en soms afzien van iets om het later te herwaarderen, vertraagt adaptatie." }
    ],
    creativePrompt: "Kies drie dingen in je leven waaraan je gewend bent geraakt maar die vroeger bijzonder aanvoelden. Hoe kun je ze weer 'vers' zien? Probeer één ding te doen alsof het de eerste keer is.",
    aiHelperPrompts: ["Hoe gebruik ik kennis van hedonische adaptatie om gelukkiger te zijn?", "Hoe weet ik wat langdurig geluk geeft versus wat snel adapteert?", "Zijn ervaringen beter dan bezittingen voor geluk?"]
  },
  {
    id: "meaning-making",
    title: "Betekenisgeving",
    difficulty: 3,
    emoji: "🌟",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Emotioneel Welzijn",
    tags: ["betekenis", "veerkracht", "narratief", "zingeving"],
    definition: "Betekenisgeving is het actieve proces van het construeren van betekenis uit ervaringen — met name moeilijke — door ze te integreren in een coherent levensverhaal. Mensen die betekenis kunnen geven aan tegenslag verwerken dit beter en herstellen sneller.",
    abstractExample: "Dezelfde verlieservaring kan worden beleefd als 'mijn leven is verwoest' of als 'dit heeft me geleerd wat werkelijk telt'. De feiten zijn identiek — de betekenis die we eraan geven bepaalt de impact.",
    examples: [
      { domain: "Persoonlijk", icon: "💙", text: "Iemand die kanker overleeft en zegt 'dit heeft mij doen inzien wat echt belangrijk is' heeft betekenis gegeven — niet ontkend dat de ziekte erg was, maar er iets zinvols in gevonden." },
      { domain: "Werk", icon: "💼", text: "Een professional die zijn baan verliest en dit herinterpreteert als 'de duw die ik nodig had om mijn eigenlijke passie na te jagen' maakt actief betekenis van pijn." },
      { domain: "Relaties", icon: "❤️", text: "Een scheiding verwerken door te begrijpen wat je ervan hebt geleerd over jezelf en over wat je nodig hebt in een relatie, in plaats van puur te ervaren als falen." }
    ],
    prerequisites: ["post-traumatic-growth", "cognitive-reappraisal"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het verschil tussen betekenisgeving en het 'goedpraten' van iets moelijks?", options: ["Er is geen verschil — beide zijn vormen van zelfbedrog", "Betekenisgeving erkent pijn volledig maar integreert de ervaring in een groter zinvol verhaal", "Goedpraten is constructiever", "Betekenisgeving werkt alleen bij kleine tegenslagen"], correctIndex: 1, explanation: "Betekenisgeving ontkent de pijn niet — het erkent haar volledig. Het integreert de ervaring in een groter verhaal waarbij de ervaring bijdraagt aan wie je bent of wat je waardeert, wat fundamenteel verschilt van ontkenning." }
    ],
    creativePrompt: "Denk aan een moeilijke ervaring die je hebt overwonnen. Schrijf een paragraaf vanuit toekomstig perspectief: hoe zal je over tien jaar op deze periode terugkijken? Welke betekenis geef je er dan aan?",
    aiHelperPrompts: ["Hoe geef ik betekenis aan iets dat zinloos lijkt?", "Wanneer is betekenisgeving gezond versus een vlucht voor pijn?", "Hoe help ik anderen betekenis te vinden na verlies?"]
  },
  {
    id: "acceptance-commitment",
    title: "Acceptatie en Commitment",
    difficulty: 3,
    emoji: "🤝",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Emotioneel Welzijn",
    tags: ["acceptatie", "waarden", "psychologische flexibiliteit", "ACT"],
    definition: "Acceptatie en Commitment Therapie (ACT) is een gedragsmatige benadering die psychologische flexibiliteit bevordert: het vermogen om moeilijke gedachten en gevoelens te accepteren (zonder ze te bestrijden), terwijl je leeft in lijn met je diepste waarden.",
    abstractExample: "Stel je voor dat je een zak met stenen draagt (ongewenste gedachten/gevoelens). ACT zegt niet: 'Zet de stenen neer.' Het vraagt: 'Kun je de zak dragen terwijl je tóch naar je bestemming loopt?' Acceptatie maakt de zak lichter; commitment geeft richting.",
    examples: [
      { domain: "Persoonlijk", icon: "💙", text: "Angst voor falen volledig accepteren — voelen, erkennen — maar toch het moeilijke gesprek aangaan omdat verbinding een waarde is die groter is dan de angst." },
      { domain: "Werk", icon: "💼", text: "Onzekerheid over een carrièrebeslissing accepteren als inherent aan de situatie, en toch stappen zetten in de richting van werk dat zinvol aanvoelt." },
      { domain: "Relaties", icon: "❤️", text: "Pijn na een conflict accepteren zonder erin vast te blijven, en je gedrag richten op wat jij wil zijn als partner — vanuit waarden, niet vanuit de emotie." }
    ],
    prerequisites: ["mindfulness-practice", "self-compassion"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is de kern van de ACT-benadering?", options: ["Negatieve gedachten elimineren", "Ongewenste gedachten en gevoelens accepteren terwijl je handelt naar diepste waarden", "Altijd positief denken", "Cognitieve uitdaging van irrationele gedachten"], correctIndex: 1, explanation: "ACT onderscheidt zich van andere benaderingen door niet te streven naar het elimineren van ongewenste innerlijke ervaringen, maar naar psychologische flexibiliteit: de ervaringen te accepteren en toch in lijn met waarden te handelen." }
    ],
    creativePrompt: "Identificeer één moeilijk gevoel dat je vermijdt. Probeer het bewust op te zoeken en er vijf minuten bij te blijven — observeer het als een meteoroloog die weer bestudeert. Wat merk je?",
    aiHelperPrompts: ["Hoe verschilt ACT van gewone cognitieve gedragstherapie?", "Hoe oefen ik acceptatie zonder in passiviteit te vervallen?", "Hoe vind ik mijn kernwaarden voor commitment?"]
  },
  {
    id: "resilience-building",
    title: "Veerkracht Opbouwen",
    difficulty: 2,
    emoji: "🏋️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Emotioneel Welzijn",
    tags: ["veerkracht", "stress", "aanpassing", "sterk"],
    definition: "Veerkracht is het vermogen om te herstellen van tegenslagen, stress en moeilijkheden. Het is geen aangeboren eigenschap maar een vaardigheid die opgebouwd wordt via sociale verbinding, zingeving, coping-strategieën en bewuste omgang met stress.",
    abstractExample: "Veerkracht werkt als een veer: ze kan worden ingedrukt, maar keert terug. Hoe sterker en flexibeler de veer (door training en onderhoud), hoe dieper ze kan worden ingedrukt zonder te breken.",
    examples: [
      { domain: "Persoonlijk", icon: "💙", text: "Na een verlies tijdelijk stilstaan, rouw toelaten, steun zoeken, en kleine stappen zetten naar herstel — dit is actieve veerkracht, niet stoïcijnse gevoelloosheid." },
      { domain: "Werk", icon: "💼", text: "Na een mislukt project: wat ging mis analyseren, lessen trekken, het team samenhouden en met hernieuwd enthousiasme beginnen aan het volgende — veerkracht in teamcontext." },
      { domain: "Studie", icon: "📚", text: "Een student die na een slecht semester zijn studieaanpak herziet, hulp zoekt en opnieuw start met concrete verbeteringen, oefent veerkracht als leerproces." }
    ],
    prerequisites: ["self-compassion", "post-traumatic-growth"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke factor draagt het meest bij aan veerkracht, volgens onderzoek?", options: ["Positief denken altijd", "Sociale verbinding en het gevoel te kunnen steunen op anderen", "Vermijden van moeilijke situaties", "Professioneel succes"], correctIndex: 1, explanation: "Sociale steun is de sterkste voorspeller van veerkracht in bijna alle onderzoeken. Mensen die kunnen steunen op sterke sociale verbindingen herstellen sneller en beter van tegenslagen dan mensen die dat niet kunnen." }
    ],
    creativePrompt: "Kijk terug op een moeilijke periode in je leven die je hebt overleefd. Wat heeft je toen geholpen? Welke bronnen van veerkracht gebruikte je, bewust of onbewust?",
    aiHelperPrompts: ["Hoe bouw ik veerkracht op vóórdat ik hem nodig heb?", "Wat zijn concrete dagelijkse praktijken voor veerkrachtontwikkeling?", "Hoe ondersteun ik anderen bij het opbouwen van veerkracht?"]
  },
  {
    id: "emotional-flexibility",
    title: "Emotionele Flexibiliteit",
    difficulty: 2,
    emoji: "🌊",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Emotioneel Welzijn",
    tags: ["emoties", "flexibiliteit", "regulatie", "aanpassing"],
    definition: "Emotionele flexibiliteit is het vermogen om een breed scala van emoties te ervaren en te reguleren — passend bij de context — zonder vast te zitten in rigide patronen van onderdrukking of overweldiging. Het omvat het kunnen bewegen tussen emoties en het aanpassen van emotionele responses.",
    abstractExample: "Emotionele flexibiliteit is als een goed gestemde gitaar: alle snaren kunnen klinken, van zacht tot hard, afhankelijk van wat de muziek vraagt. Een rigide instrument kan maar één toon spelen.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een manager die verdriet kan tonen bij slecht nieuws, assertief kan zijn bij moeilijke beslissingen, en enthousiast bij inspirerende presentaties — zonder te berekend of onecht over te komen." },
      { domain: "Relaties", icon: "❤️", text: "In staat zijn te huilen met een vriend die rouwt, te lachen bij een feest, en zakelijk te zijn bij een conflict — allemaal authentiek, allemaal gepast." },
      { domain: "Persoonlijk", icon: "💙", text: "Teleurstelling voelen bij een tegenslag (eerlijk), het verwerken, en dan kiezen voor actie — zonder vast te blijven in de teleurstelling of deze weg te drukken." }
    ],
    prerequisites: ["cognitive-reappraisal", "mindfulness-practice"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat onderscheidt emotionele flexibiliteit van emotionele instabiliteit?", options: ["Ze zijn hetzelfde", "Flexibiliteit is doelgerichte aanpassing aan context; instabiliteit is reactief en ongecontroleerd wisselen", "Flexibele mensen voelen minder intens", "Instabiele mensen zijn flexibeler"], correctIndex: 1, explanation: "Emotionele flexibiliteit is een actieve, bewuste capaciteit om emoties te moduleren passend bij de situatie. Instabiliteit is reactief — gedreven door triggers, niet door bewuste keuze of contextbewustzijn." }
    ],
    creativePrompt: "Reflecteer op een situatie waarin je een emotie onderdrukte die eigenlijk gepast was, of een situatie waarin je emotie niet paste bij de context. Wat zou emotionele flexibiliteit er anders aan gemaakt hebben?",
    aiHelperPrompts: ["Hoe vergroot ik mijn emotionele flexibiliteit?", "Hoe weet ik welke emotie past bij een situatie?", "Hoe ga ik om met emoties die ik niet wil voelen maar die toch aanwezig zijn?"]
  },
  {
    id: "lateral-thinking",
    title: "Lateraal Denken",
    difficulty: 2,
    emoji: "↔️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Creativiteit",
    tags: ["creativiteit", "probleemoplossing", "innovatie", "denken"],
    definition: "Lateraal denken (bedacht door Edward de Bono) is het benaderen van problemen vanuit onverwachte hoeken — buiten de logische, lineaire redenering om. Het daagt aannames uit en zoekt alternatieve frames die nieuwe oplossingen openen.",
    abstractExample: "Verticaal denken graaft hetzelfde gat dieper. Lateraal denken begint een nieuw gat op een andere plek. Soms is de oplossing niet dieper graven maar ergens anders beginnen.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een hotel met lange wachttijden bij liften loste dit niet op door meer liften te plaatsen, maar door spiegels bij de liften te zetten. Klachten verdwenen — mensen waren bezig met zichzelf bekijken. Lateraal denken in actie." },
      { domain: "Studie", icon: "📚", text: "Vastgelopen op een essay? In plaats van harder proberen: schrijf het essay vanuit het tegenovergestelde standpunt. Dit onthult zwakke punten en geeft nieuwe inzichten." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Ruzie over het opruimen van de keuken oplossen niet door de taken te verdelen, maar door een systeem te ontwerpen dat opruimen verleidelijker maakt." }
    ],
    prerequisites: [],
    unlocks: ["first-principles-thinking", "inversion-thinking"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het kernverschil tussen lateraal en verticaal denken?", options: ["Lateraal denken is sneller", "Lateraal denken zoekt alternatieve perspectieven; verticaal denken verdiept de bestaande benadering", "Verticaal denken is creatiever", "Ze zijn hetzelfde maar voor verschillende problemen"], correctIndex: 1, explanation: "Verticaal denken excelleert bij problemen met één juist antwoord. Lateraal denken is effectiever bij complexe problemen waar de standaardaanpak vastloopt — het daagt het frame zelf uit." }
    ],
    creativePrompt: "Kies een probleem dat je al lang hebt. Bedenk vijf compleet onlogische of absurde oplossingen. Welke absurde oplossing bevat een kern van iets nuttigs?",
    aiHelperPrompts: ["Hoe oefen ik lateraal denken dagelijks?", "Welke technieken helpen lateraal denken te stimuleren?", "Wanneer is lateraal denken beter dan analytisch denken?"]
  },
  {
    id: "first-principles-thinking",
    title: "Redeneren vanuit Eerste Principes",
    difficulty: 3,
    emoji: "🔬",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Creativiteit",
    tags: ["redeneren", "innovatie", "aannames", "fundamenten"],
    definition: "Redeneren vanuit eerste principes is het ontmantelen van problemen tot hun meest fundamentele bouwstenen — feiten die niet verder herleid kunnen worden — en van daaruit opnieuw opbouwen. Het weigert analogieën en bestaande aannames als startpunt.",
    abstractExample: "Analoog denken: 'We doen het zo omdat anderen het zo doen.' Eerste-principes denken: 'Waarom doen we het überhaupt? Wat zijn de fundamentele feiten? Wat is de theoretisch beste oplossing?'",
    examples: [
      { domain: "Werk", icon: "💼", text: "SpaceX vroeg niet 'Hoe maken we raketten goedkoper?' maar 'Wat kost een raket in grondstoffen?' (~2% van marktprijs). Dit leidde tot een volledig nieuw bedrijfsmodel." },
      { domain: "Studie", icon: "📚", text: "In plaats van een essay schrijven 'zoals je het hebt geleerd': 'Wat is een essay eigenlijk? Een betoog. Welke elementen zijn essentieel voor een overtuigend betoog?' Terug naar de kern." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Dieet kiezen niet op basis van trends, maar vragen: 'Welke voedingsstoffen heeft mijn lichaam daadwerkelijk nodig? Wat zijn de werkelijke effecten van voedsel op mijn doelen?'" }
    ],
    prerequisites: ["lateral-thinking"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat onderscheidt eerste-principes denken van analogisch denken?", options: ["Eerste-principes denken is sneller", "Eerste-principes denken begint bij fundamentele feiten; analogisch denken laat zich leiden door wat anderen doen", "Analogisch denken is altijd fout", "Ze zijn complementair en even waardevol"], correctIndex: 1, explanation: "Analogisch denken is efficiënt maar beperkt tot bestaande oplossingen. Eerste-principes denken is trager maar kan radicaal nieuwe oplossingen genereren door aannames te elimineren." }
    ],
    creativePrompt: "Kies een gewoonte of systeem in je leven. Vraag vijf keer 'waarom' totdat je bij de fundamentele aanname aankomt. Is die aanname werkelijk waar?",
    aiHelperPrompts: ["Hoe pas ik eerste-principes denken toe op alledaagse problemen?", "Wanneer is analoog denken beter dan eerste principes?", "Hoe weet ik of ik bij een eerste principe ben aangekomen?"]
  },
  {
    id: "inversion-thinking",
    title: "Inversiedenken",
    difficulty: 2,
    emoji: "🔃",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Creativiteit",
    tags: ["probleemoplossing", "strategie", "denken", "risico"],
    definition: "Inversiedenken (geïnspireerd door Carl Jacobi en Charlie Munger) is het omdraaien van een probleem: in plaats van 'Hoe bereik ik succes?' vragen 'Hoe zou ik zeker falen?' Door faalscenario's te identificeren kun je ze vermijden.",
    abstractExample: "Wil je gelukkig zijn? Vraag: 'Wat maakt mensen miserable?' Vermijd dat. Wil je een goed product bouwen? Vraag: 'Hoe zou ik dit product zo slecht mogelijk maken?' Doe het tegenovergestelde.",
    examples: [
      { domain: "Werk", icon: "💼", text: "In plaats van 'Hoe maak ik dit project succesvol?' vragen: 'Wat zou dit project zeker laten mislukken?' Gebrekkige communicatie, geen duidelijke verantwoordelijkheid, te optimistische planning — elimineer die." },
      { domain: "Relaties", icon: "❤️", text: "In plaats van 'Hoe verbeter ik mijn relatie?': 'Wat zou mijn relatie zeker beschadigen?' Gebrek aan eerlijkheid, verwaarlozing, weinig waardering. Vermijd die." },
      { domain: "Studie", icon: "📚", text: "'Hoe zorg ik ervoor dat ik absoluut niets leer?' Passief lezen, geen oefening, geen herhaling. Het tegenovergestelde van die lijst is een effectief studieplan." }
    ],
    prerequisites: ["lateral-thinking"],
    unlocks: ["pre-mortem"],
    exercises: [
      { type: "multipleChoice", question: "Wanneer is inversiedenken bijzonder nuttig?", options: ["Alleen bij kleine beslissingen", "Bij complexe systemen waar directe aanpak moeilijk is en faalrisico's helder zijn", "Als alternatief voor gewone planning", "Nooit — het is te negatief"], correctIndex: 1, explanation: "Inversiedenken is krachtig bij complexe situaties omdat menselijke hersenen beter zijn in het identificeren van wat fout kan gaan dan wat succes garandeert. Door te starten bij faalscenario's worden blinde vlekken blootgelegd." }
    ],
    creativePrompt: "Kies een doel. Schrijf een lijst van alles wat dit doel zeker zou saboteren. Hoe goed beschermt je huidige aanpak je tegen die sabotages?",
    aiHelperPrompts: ["Hoe gebruik ik inversiedenken bij persoonlijke beslissingen?", "Hoe combineer ik inversie met andere denkstijlen?", "Is inversiedenken pessimistisch of realistisch?"]
  },
  {
    id: "pre-mortem",
    title: "Pre-mortem Analyse",
    difficulty: 2,
    emoji: "🔮",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Creativiteit",
    tags: ["risico", "planning", "projectmanagement", "vooruitdenken"],
    definition: "Een pre-mortem is een planningsoefening waarbij je je voorstelt dat een project al mislukt is en terugredeneert: 'Stel het is over een jaar mislukt — wat is er misgegaan?' Dit activeert kritisch denken en identificeert risico's die optimisme en groepsdruk anders verbergen.",
    abstractExample: "Een post-mortem analyseert een mislukt project na afloop. Een pre-mortem doet dit vóóraf — je reist mentaal naar een mislukt toekomst en analyseert de oorzaken alsof ze al zijn gebeurd.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Voor een productlancering het team vragen: 'Stel dat we over zes maanden op de voorpagina staan als voorbeeld van een mislukte lancering — wat is er fout gegaan?' Mensen benoemen risico's die ze anders niet uitspreken." },
      { domain: "Studie", icon: "📚", text: "Voor een grote presentatie vragen: 'Stel ik sta er morgen slecht voor — wat heeft dat veroorzaakt?' Onvoldoende voorbereiding, technische problemen, geen backup. Nu kun je ze voorkomen." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Voor een grote reis: 'Stel dat de vakantie een ramp wordt — wat is er misgegaan?' Paspoort vergeten, geen reisverzekering. Checklist van preventie volgt vanzelf." }
    ],
    prerequisites: ["inversion-thinking"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Waarom is een pre-mortem effectiever dan gewone risicoanalyse?", options: ["Het is sneller", "Het 'prospective hindsight' frame maakt het makkelijker risico's te benoemen die optimisme anders onderdrukken", "Het vereist minder expertise", "Het is hetzelfde als gewone risicoanalyse"], correctIndex: 1, explanation: "Onderzoek toont dat 'prospective hindsight' (jezelf in de toekomst plaatsen alsof iets al is gebeurd) mensen 30% beter maakt in het identificeren van oorzaken. Het omzeilt ook groepsdenken door risico's legitiem te maken." }
    ],
    creativePrompt: "Kies een huidig project. Schrijf een krantenkopartikel van de toekomst: 'Project X mislukt na een jaar.' Wat staat in de eerste alinea? Wat ging er mis?",
    aiHelperPrompts: ["Hoe leid ik een pre-mortem sessie met een team?", "Hoe diep moet een pre-mortem gaan?", "Hoe zorg ik dat mensen eerlijk zijn in een pre-mortem?"]
  },
  {
    id: "design-thinking",
    title: "Design Thinking",
    difficulty: 2,
    emoji: "🎨",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Creativiteit",
    tags: ["ontwerp", "empathie", "innovatie", "probleemoplossing"],
    definition: "Design thinking is een mensgerichte probleemoplossingsmethodologie in vijf fasen: Empathie (begrijp de gebruiker), Definieer (formuleer het werkelijke probleem), Ideeer (genereer veel ideeën), Prototypeer (maak snelle modellen), Test (valideer met echte gebruikers).",
    abstractExample: "Ingenieurs vragen: 'Hoe bouwen we dit?' Design thinkers vragen eerst: 'Wie gebruikt dit, en wat probeert hij werkelijk te bereiken?' Het antwoord verandert soms het hele probleem.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een ziekenhuis wilde de patiëntervaring verbeteren. Observaties toonden dat het grootste probleem verveling en angst was tijdens wachten. Oplossing: betere oriëntatie en entertainment — niet meer personeel." },
      { domain: "Studie", icon: "📚", text: "Een scriptie schrijven met design thinking: eerst diep begrijpen welke lezer het leest (empathie), dan het werkelijke kennisgat definiëren, dan meerdere onderzoeksaanpakken bedenken." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Een cadeau kopen met design thinking: niet 'wat wil ik geven' maar 'wat beleeft deze persoon dagelijks, wat mist hij, wat zou zijn dag beter maken?'" }
    ],
    prerequisites: [],
    unlocks: ["lateral-thinking"],
    exercises: [
      { type: "multipleChoice", question: "Waarom begint design thinking met empathie?", options: ["Empathie is altijd de eerste stap bij elk proces", "Diep begrip van de gebruiker onthult het werkelijke probleem dat anders verkeerd gedefinieerd wordt", "Empathie maakt het proces sneller", "Zonder empathie kun je niet prototyperen"], correctIndex: 1, explanation: "De meest gemaakte fout in probleemoplossing is het verkeerd definiëren van het probleem. Door te beginnen met empathisch begrip van de gebruiker vermijd je oplossingen die technisch perfect zijn maar het verkeerde probleem aanpakken." }
    ],
    creativePrompt: "Kies een frustratie in je dagelijks leven. Stel jezelf drie vragen: Wie ervaart dit probleem? Wat probeert hij werkelijk te bereiken? Wat zijn zijn echte belemmeringen? Hoe verandert dit je probleemoplossing?",
    aiHelperPrompts: ["Hoe pas ik design thinking toe op persoonlijke problemen?", "Wat is het verschil tussen design thinking en gewoon creatief zijn?", "Hoe doe ik empathisch onderzoek zonder middelen?"]
  },
  {
    id: "six-thinking-hats",
    title: "Zes Denkhoeden",
    difficulty: 2,
    emoji: "🎩",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Creativiteit",
    tags: ["denken", "besluitvorming", "perspectief", "groepsdynamiek"],
    definition: "De Zes Denkhoeden (Edward de Bono) is een denkkader waarbij zes 'hoeden' zes denkstijlen vertegenwoordigen: wit (feiten), rood (gevoel), zwart (risico), geel (optimisme), groen (creativiteit), blauw (proces). Door bewust van hoed te wisselen, denk je vollediger.",
    abstractExample: "Normaal denk je gelijktijdig over feiten, risico's, emoties en ideeën — en ze storen elkaar. De hoeden zorgen dat iedereen tegelijk in dezelfde richting denkt, wat denken effectiever maakt.",
    examples: [
      { domain: "Werk", icon: "💼", text: "In een vergadering over een nieuw product: Witte hoed: 'Wat zijn de marktcijfers?' Zwarte hoed: 'Welke risico's zijn er?' Gele hoed: 'Welke kansen zien we?' Groene hoed: 'Welke creatieve ideeën hebben we?' Dit voorkomt dat pessimisme creativiteit blokkeert." },
      { domain: "Studie", icon: "📚", text: "Een essay kritisch beoordelen met alle zes hoeden: de feiten checken (wit), de sterke punten benoemen (geel), de zwakke argumenten identificeren (zwart), alternatieve invalshoeken bedenken (groen)." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Een groot besluit nemen (verhuizen, carrièreswitch) door bewust elke hoed 'op te zetten' en vanuit die lens vijf minuten te denken, voordat je conclusies trekt." }
    ],
    prerequisites: ["lateral-thinking"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het hoofddoel van de zes denkhoedenmethode?", options: ["Sneller vergaderen", "Parallel denken faciliteren — iedereen denkt tegelijk vanuit dezelfde lens", "Creativiteit bevorderen ten koste van analyse", "Conflicten vermijden"], correctIndex: 1, explanation: "Paralleel denken (iedereen tegelijk in dezelfde richting) is efficiënter dan adversarieel denken (voor vs. tegen). De hoeden zorgen dat alle perspectieven systematisch worden overwogen zonder dat ze elkaar in de weg zitten." }
    ],
    creativePrompt: "Neem een beslissing die je voor je uitschuift. Loop door elk van de zes hoeden: wat zegt elke hoed over deze beslissing? Welke hoed gebruik je normaal bijna nooit?",
    aiHelperPrompts: ["Hoe gebruik ik de zes denkhoeden alleen (zonder groep)?", "Welke hoed is het moeilijkst voor mij en hoe oefen ik die?", "Hoe introduceer ik de zes hoeden in mijn team?"]
  },
  {
    id: "divergent-convergent",
    title: "Divergent en Convergent Denken",
    difficulty: 2,
    emoji: "🔀",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Creativiteit",
    tags: ["creativiteit", "probleemoplossing", "ideeëngeneratie", "selectie"],
    definition: "Creatief probleemoplossen vereist twee denkfasen: divergent denken (zo veel mogelijk ideeën genereren zonder oordeel) en convergent denken (het beste idee selecteren via analyse). Ze mogen elkaar niet verstoren — oordelen tijdens ideegeneratie doodt creativiteit.",
    abstractExample: "Divergent denken is als een vuurwerk: ideeën vliegen in alle richtingen. Convergent denken is als een trechter: al die ideeën worden gefilterd tot één krachtige richting. Beide fasen zijn noodzakelijk.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een brainstorm wordt effectiever in twee fasen: eerst 20 minuten alle ideeën opschrijven zonder commentaar (divergent), dan de beste drie selecteren op basis van criteria (convergent)." },
      { domain: "Studie", icon: "📚", text: "Een essay beginnen: eerst alles opschrijven wat je over het onderwerp weet (divergent), dan structureren en selecteren wat relevant is (convergent)." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Een verjaardag plannen: eerst alle ideeën noteren zonder te beoordelen, dan filteren op budget en voorkeur van de jarige." }
    ],
    prerequisites: [],
    unlocks: ["design-thinking"],
    exercises: [
      { type: "multipleChoice", question: "Waarom mogen divergent en convergent denken niet gelijktijdig plaatsvinden?", options: ["Ze vereisen verschillende ruimtes", "Oordelen tijdens ideegeneratie remt de vrije associatie die creatieve ideeën voortbrengt", "Divergent denken is altijd de betere fase", "Ze zijn beide analytisch"], correctIndex: 1, explanation: "Vroeg oordelen tijdens brainstormen filtert ideeën weg voor ze volledig zijn uitgedacht. De meest bizarre ideeën kunnen soms de beste kern bevatten — maar alleen als ze niet meteen worden afgewezen." }
    ],
    creativePrompt: "Stel jezelf een creatieve uitdaging. Stel een timer op 10 minuten en schrijf alle ideeën op zonder te oordelen. Stop dan en selecteer de drie meest interessante. Hoe verschilt dit van hoe je normaal ideeën genereert?",
    aiHelperPrompts: ["Hoe schakel ik bewust tussen divergent en convergent denken?", "Hoe genereer ik meer ideeën tijdens divergent denken?", "Welke criteria gebruik ik bij convergent denken?"]
  },
  {
    id: "five-whys",
    title: "Vijf Keer Waarom",
    difficulty: 1,
    emoji: "❓",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Creativiteit",
    tags: ["oorzaak", "analyse", "probleemoplossing", "Toyota"],
    definition: "De Vijf Keer Waarom-methode (ontwikkeld door Toyota) is een root-cause analyse techniek: op elke 'waarom'-vraag geef je een antwoord en stel je opnieuw 'waarom', totdat je de fundamentele oorzaak bereikt. Vijf is een richtlijn — soms zijn het drie, soms zeven.",
    abstractExample: "Je auto start niet. Waarom? Accu leeg. Waarom? Dynamo kapot. Waarom? Riem gebroken. Waarom? Niet vervangen bij onderhoudsbeurt. Waarom? Geen onderhoudsschema. Dáár zit de werkelijke oorzaak.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Klant is ontevreden. Waarom? Levering te laat. Waarom? Productie vertraagd. Waarom? Grondstofprobleem. Waarom? Leverancier niet gecommuniceerd. Waarom? Geen vroegwaarschuwingssysteem. Oplossing: systeem bouwen." },
      { domain: "Studie", icon: "📚", text: "Ik slaag niet voor dit vak. Waarom? Ik begrijp de stof niet goed. Waarom? Ik lees het wel maar oefen niet. Waarom? Oefenopgaven voelen saai. Waarom? Ik zie het nut niet. Oplossing: verbind de stof aan praktische toepassingen." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Ik sport niet. Waarom? Geen tijd. Waarom? Avonden vol. Waarom? Te veel verplichtingen. Waarom? Ik kan moeilijk nee zeggen. Werkelijke probleem: assertiviteit, niet agenda-beheer." }
    ],
    prerequisites: [],
    unlocks: ["inversion-thinking"],
    exercises: [
      { type: "multipleChoice", question: "Waarom is de vijf-keer-waarom methode effectiever dan directe probleemoplossing?", options: ["Het is sneller", "Het identificeert de grondoorzaak in plaats van symptomen te behandelen", "Het vereist meer expertise", "Het is beter voor grote problemen"], correctIndex: 1, explanation: "Directe probleemoplossing behandelt vaak symptomen — de zichtbare uitingen van een onderliggend probleem. Door herhaald 'waarom' te vragen, bereik je de root cause, waardoor de oplossing het probleem definitief aanpakt." }
    ],
    creativePrompt: "Kies een probleem dat telkens terugkeert in je leven. Stel vijf keer 'waarom'. Wat is de diepste oorzaak? Is dit wat je dacht?",
    aiHelperPrompts: ["Hoe weet ik wanneer ik de echte oorzaak heb bereikt?", "Wat doe ik als er meerdere antwoorden zijn op één waarom-vraag?", "Hoe gebruik ik de vijf-keer-waarom in teamverband?"]
  },
  {
    id: "brainwriting",
    title: "Brainwriting",
    difficulty: 1,
    emoji: "✍️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Creativiteit",
    tags: ["brainstormen", "groepswerk", "ideeën", "creativiteit"],
    definition: "Brainwriting is een alternatief voor mondelinge brainstormen waarbij deelnemers ideeën schriftelijk noteren en elkaars ideeën verder ontwikkelen. Dit vermijdt sociale remming, dominante sprekers en groepsdenken die traditionele brainstormsessies beperken.",
    abstractExample: "In een klassieke brainstorm domineert wie het hardst praat. Brainwriting geeft iedereen evenveel stem — introvert of extrovert, junior of senior — omdat ideeën op papier staan, niet in de lucht.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Elk teamlid schrijft drie ideeën op een vel, geeft het door, de volgende voegt drie ideeën toe op basis van wat er staat. Na vier rondes heeft elk vel twaalf ideeën — zonder dominantie." },
      { domain: "Studie", icon: "📚", text: "Groepsopdracht beginnen met brainwriting: iedereen schrijft vijf minuten individueel ideeën, deelt ze dan. Minder groepsdenken, meer diversiteit in output." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Met je gezin vakantieideeën plannen: iedereen schrijft vijf ideeën op, dan vergelijk je. Kinderen durven vaker iets te schrijven dan te zeggen als de ouders al iets zeiden." }
    ],
    prerequisites: ["divergent-convergent"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welk probleem van traditioneel brainstormen lost brainwriting op?", options: ["Te weinig ideeën worden gegenereerd", "Sociale remming en dominantie van bepaalde stemmen", "Ideeën worden te vaag", "Er is geen structuur"], correctIndex: 1, explanation: "Onderzoek toont dat groepen minder en minder diverse ideeën produceren bij mondeling brainstormen dan bij individueel genereren + combineren. Sociale remming, evaluatieangst en productieblokkering zijn de oorzaken." }
    ],
    creativePrompt: "Doe een solo brainwriting-oefening: stel jezelf een creatief probleem. Schrijf 5 minuten lang onophoudelijk ideeën op. Geen oordeel. Geen pauze. Wat verrast je?",
    aiHelperPrompts: ["Hoe faciliteer ik een brainwriting-sessie?", "Wanneer gebruik ik brainwriting versus mondelinge brainstorm?", "Hoe bouw ik voort op andermans ideeën in brainwriting?"]
  },
  {
    id: "creative-constraints",
    title: "Creatieve Beperkingen",
    difficulty: 2,
    emoji: "🔒",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Creativiteit",
    tags: ["creativiteit", "beperkingen", "innovatie", "focus"],
    definition: "Creatieve beperkingen zijn bewust opgestelde limieten (tijd, middelen, regels) die de creativiteit paradoxaal genoeg stimuleren. Onbeperkte vrijheid leidt vaak tot verlamming of oppervlakkigheid; beperkingen dwingen tot diep nadenken en onconventionele oplossingen.",
    abstractExample: "Een blanco canvas kan verlammend zijn. Een canvas met drie kleuren en de opdracht 'maak een portret in 30 minuten' dwingt tot keuzes en creativiteit. Beperkingen zijn geen hindernis maar een springplank.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Twitter's 280-tekenlimiet dwong gebruikers tot scherper, bondiger schrijven — wat een geheel nieuwe schrijfcultuur creëerde die zonder de limiet niet was ontstaan." },
      { domain: "Studie", icon: "📚", text: "Een essay schrijven in maximaal 500 woorden dwingt tot scherper nadenken over wat werkelijk belangrijk is — effectiever dan 'schrijf zoveel als nodig'." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Koken met alleen wat in de koelkast zit dwingt tot creatieve combinaties die je nooit zelf zou bedenken bij een leeg receptenboek." }
    ],
    prerequisites: ["divergent-convergent"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Waarom stimuleren beperkingen soms meer creativiteit dan volledige vrijheid?", options: ["Beperkingen maken taken makkelijker", "Beperkingen forceren creatieve probleemoplossing door voor de hand liggende opties weg te nemen", "Vrijheid leidt altijd tot mindere resultaten", "Beperkingen zijn alleen nuttig voor beginners"], correctIndex: 1, explanation: "Volledige vrijheid leidt vaak tot het kiezen van de veiligste optie. Beperkingen elimineren die opties, waardoor het brein gedwongen wordt dieper te graven naar onconventionele oplossingen." }
    ],
    creativePrompt: "Kies een creatief project. Stel jezelf drie willekeurige beperkingen op (bijv. geen gebruik van kleur X, max 100 woorden, klaar in een uur). Hoe beïnvloedt dit je creatieve proces?",
    aiHelperPrompts: ["Hoe gebruik ik creatieve beperkingen in mijn werk?", "Welke soorten beperkingen zijn het meest stimulerend?", "Hoe vermijd ik dat beperkingen me frustreren in plaats van inspireren?"]
  },
  {
    id: "empathic-accuracy",
    title: "Empathische Nauwkeurigheid",
    difficulty: 2,
    emoji: "🎯",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Sociale Vaardigheden",
    tags: ["empathie", "begrip", "perspectief", "relaties"],
    definition: "Empathische nauwkeurigheid is het vermogen om nauwkeurig te begrijpen wat iemand anders denkt en voelt — niet alleen te veronderstellen. Het verschilt van sympatie (meevoelen) en algemene empathie (inleven): het gaat om precisie in het begrijpen van andermans innerlijke wereld.",
    abstractExample: "Empathie zonder nauwkeurigheid is als navigeren met een kompas dat soms de verkeerde richting wijst. Je probeert te begrijpen, maar je aannames kloppen niet. Nauwkeurigheid vereist navragen, luisteren en aanpassen.",
    examples: [
      { domain: "Relaties", icon: "❤️", text: "Je partner is stil na het werk. In plaats van aannemen dat hij boos is (lage empathische nauwkeurigheid), vraag je: 'Ben je moe, of zit er iets wat je bezig houdt?' De werkelijkheid kan totaal anders zijn." },
      { domain: "Werk", icon: "💼", text: "Een collega stelt kritische vragen in een vergadering. Lage nauwkeurigheid: 'Hij is moeilijk.' Hoge nauwkeurigheid: 'Hij maakt zich zorgen over de tijdlijn — navragen bevestigt dit.' Reactie verandert volledig." },
      { domain: "Opvoeding", icon: "👨‍👩‍👧", text: "Een kind is boos en huilt. In plaats van 'hij is moe' automatisch aannnemen, vraag je door wat er is. Soms is de echte oorzaak anders dan de vermoedde — en dan helpt de juiste respons veel beter." }
    ],
    prerequisites: [],
    unlocks: ["perspective-taking", "conflict-resolution"],
    exercises: [
      { type: "multipleChoice", question: "Wat onderscheidt empathische nauwkeurigheid van gewone empathie?", options: ["Empathische nauwkeurigheid is sterker dan empathie", "Nauwkeurigheid vereist actief toetsen of je begrip van andermans innerlijke toestand klopt", "Empathie is altijd voldoende", "Ze zijn hetzelfde"], correctIndex: 1, explanation: "Gewone empathie ('ik probeer te begrijpen hoe jij je voelt') kan gebaseerd zijn op projectie of aannames. Empathische nauwkeurigheid voegt de stap toe van toetsen en corrigeren: 'Klopt mijn beeld?' Dit maakt het aanzienlijk effectiever." }
    ],
    creativePrompt: "Denk aan iemand met wie je regelmatig contact hebt. Schrijf op wat je denkt dat zij momenteel bezighoudt. Ga dan een gesprek aan en toets dit. Hoe nauwkeurig was je?",
    aiHelperPrompts: ["Hoe verbeter ik mijn empathische nauwkeurigheid?", "Hoe vraag ik door zonder indringend te zijn?", "Wanneer is het goed genoeg om te veronderstellen versus actief te toetsen?"]
  },
  {
    id: "perspective-taking",
    title: "Perspectiefname",
    difficulty: 2,
    emoji: "👓",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Sociale Vaardigheden",
    tags: ["perspectief", "empathie", "begrip", "conflicten"],
    definition: "Perspectiefname is het bewust innemen van het standpunt van een ander persoon — hun situatie, achtergrond, behoeften en overtuigingen in overweging nemen bij het begrijpen van hun gedrag. Het is een cognitieve vaardigheid die begrip en samenwerking verdiept.",
    abstractExample: "Stel je voor dat je dezelfde film ziet vanuit de ogen van een ander personage. Plotseling begrijp je waarom 'de slechterik' doet wat hij doet — hij is de held van zijn eigen verhaal. Perspectiefname is dat ook in het echte leven doen.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een moeilijke klant begrijp je beter als je nadenkt over zijn context: hij heeft zijn eigen baas, zijn eigen druk, zijn eigen angst. Zijn 'onredelijke' eisen worden logisch vanuit zijn perspectief." },
      { domain: "Relaties", icon: "❤️", text: "Een argument met je partner: in plaats van je eigen gelijk verdedigen, je afvragen: 'Welk verhaal vertelt hij zichzelf over deze situatie? Welke behoefte speelt hierin?' Dit opent de dialoog." },
      { domain: "Studie", icon: "📚", text: "Een historische figuur begrijpen door je af te vragen: 'In welke wereld leefde hij? Wat waren zijn opties? Wat wist hij wel en niet?' Dit leidt tot genuanceerder historisch begrip." }
    ],
    prerequisites: ["empathic-accuracy"],
    unlocks: ["conflict-resolution"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de belangrijkste valkuil bij perspectiefname?", options: ["Dat je te veel begrip toont", "Dat je je eigen perspectief projecteert op de ander in plaats van werkelijk hun standpunt in te nemen", "Dat je je eigen mening verliest", "Dat het te lang duurt"], correctIndex: 1, explanation: "De meest gemaakte fout bij perspectiefname is te denken vanuit 'hoe zou ik mij voelen in zijn situatie?' in plaats van 'hoe voelt hij zich, gegeven wie hij is?' Dit leidt tot projectie, niet tot werkelijk begrip." }
    ],
    creativePrompt: "Kies een persoon met wie je een meningsverschil hebt. Schrijf een brief vanuit hun perspectief — alsof jij die persoon bent en je jouw eigen standpunt verdedigt. Wat leer je?",
    aiHelperPrompts: ["Hoe neem ik een perspectief in van iemand die heel anders is dan ik?", "Wat is het verschil tussen perspectiefname en instemmen?", "Hoe gebruik ik perspectiefname in conflicten?"]
  },
  {
    id: "rapport-building",
    title: "Rapport Opbouwen",
    difficulty: 1,
    emoji: "🤝",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Sociale Vaardigheden",
    tags: ["vertrouwen", "verbinding", "communicatie", "relaties"],
    definition: "Rapport opbouwen is het creëren van een gevoel van wederzijds begrip, vertrouwen en verbinding met een ander persoon. Het bestaat uit elementen als actieve aandacht, gelijkschakeling, oprechte interesse en het vinden van gemeenschappelijke grond.",
    abstractExample: "Rapport is als een brug tussen twee mensen. Zonder brug staan jullie op aparte oevers — communicatie is moeilijk en inspannend. Met een stevige brug stroomt uitwisseling gemakkelijk en vanzelf.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een salesgesprek beginnen met oprechte interesse in de persoon (niet het product), luisteren naar zijn situatie en spiegelen van zijn tempo en taal — dit bouwt rapport dat verkoopgesprekken effectiever maakt." },
      { domain: "Studie", icon: "📚", text: "Een goede relatie met een docent opbouwen door actief te luisteren, vragen te stellen en interesse te tonen — dit maakt feedback ontvangen en hulp zoeken gemakkelijker." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Bij een eerste ontmoeting: de naam onthouden, doorvragen op wat de ander zegt, en iets persoonlijks delen. Kleine handelingen die een grote verbindingsbrug bouwen." }
    ],
    prerequisites: [],
    unlocks: ["trust-building", "conflict-resolution"],
    exercises: [
      { type: "multipleChoice", question: "Welk element draagt het meest bij aan snel rapport opbouwen?", options: ["Veel over jezelf vertellen", "Oprechte, actieve aandacht voor de ander tonen", "Professionele competentie demonstreren", "Grappig zijn"], correctIndex: 1, explanation: "Mensen voelen zich verbonden als ze zich gezien en gehoord voelen. Oprechte aandacht — oogcontact, doorvragen, samenvatten wat gezegd is — signaleert respect en interesse, de basis van rapport." }
    ],
    creativePrompt: "Ga een week lang bewust één nieuw rapport-element oefenen: bijv. de naam van de persoon drie keer gebruiken in een gesprek, of altijd één verdiepende vraag stellen. Wat merk je?",
    aiHelperPrompts: ["Hoe bouw ik snel rapport op in zakelijke situaties?", "Hoe bouw ik rapport op met moeilijke persoonlijkheden?", "Is rapport opbouwen manipulatief?"]
  },
  {
    id: "conflict-resolution",
    title: "Conflictoplossing",
    difficulty: 2,
    emoji: "⚖️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Sociale Vaardigheden",
    tags: ["conflict", "communicatie", "samenwerking", "onderhandeling"],
    definition: "Conflictoplossing is het proces van het constructief aanpakken van meningsverschillen zodat alle partijen zich gehoord voelen en een duurzame oplossing wordt gevonden. Effectieve conflictoplossing richt zich op belangen (waarom iemand iets wil), niet op posities (wat iemand eist).",
    abstractExample: "Twee mensen willen dezelfde sinaasappel. Positie-denken: je snijdt hem doormidden. Belangen-denken: de een wil het sap, de ander de schil. Beiden kunnen volledig krijgen wat ze willen — als je vraagt waarom.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Twee teamleden botsen over de aanpak van een project. In plaats van te oordelen wie gelijk heeft, vraag je elk: 'Welk resultaat is voor jou het belangrijkst?' Vaak zijn de onderliggende doelen compatibel." },
      { domain: "Relaties", icon: "❤️", text: "Een herhalend argument over huishoudtaken aanpakken door te vragen: 'Wat maakt dit voor jou zo belangrijk?' Het antwoord ('Ik wil me gewaardeerd voelen') opent een heel andere oplossingsruimte." },
      { domain: "Buurt", icon: "🏘️", text: "Buurconflict over geluidsoverlast: in plaats van beschuldigingen, samen praten over wederzijdse behoeften (rust vs. sociale vrijheid) en gezamenlijk werkbare afspraken maken." }
    ],
    prerequisites: ["perspective-taking", "rapport-building"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het verschil tussen focussen op posities vs. belangen bij conflictoplossing?", options: ["Posities zijn altijd juister", "Posities zijn wat iemand eist; belangen zijn waarom — belangen bieden meer ruimte voor creatieve oplossingen", "Belangen zijn minder belangrijk dan posities", "Ze zijn hetzelfde"], correctIndex: 1, explanation: "Posities zijn starre standpunten. Belangen zijn de onderliggende behoeften en motivaties. Door te focussen op belangen ontdek je oplossingen die voor beide partijen werken — iets wat bij positie-denken onmogelijk lijkt." }
    ],
    creativePrompt: "Denk aan een huidig conflict of meningsverschil. Schrijf op: wat is je positie? Wat zijn je werkelijke belangen? Wat zijn de waarschijnlijke belangen van de andere partij? Welke oplossing dient beide?",
    aiHelperPrompts: ["Hoe begin ik een moeilijk conflictgesprek?", "Hoe ga ik om met iemand die niet constructief wil zijn?", "Wanneer is het beter een conflict te vermijden dan op te lossen?"]
  },
  {
    id: "boundary-setting",
    title: "Grenzen Stellen",
    difficulty: 2,
    emoji: "🛑",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Sociale Vaardigheden",
    tags: ["grenzen", "assertiviteit", "zelfrespect", "relaties"],
    definition: "Grenzen stellen is het communiceren van wat voor jou acceptabel is in hoe anderen zich naar jou gedragen, en dit handhaven met respectvolle duidelijkheid. Gezonde grenzen beschermen je welzijn zonder de ander uit te sluiten.",
    abstractExample: "Grenzen zijn als de wanden van een huis: ze definiëren wat binnen (acceptabel) en buiten (niet-acceptabel) valt. Zonder wanden is er geen beschutting. Maar een huis dat volledig afgesloten is, is ook geen thuis — er moeten ook deuren zijn.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Aan een manager die 's avonds verwacht te bereiken zijn: 'Ik ben van 9-18 uur beschikbaar voor urgente zaken. Na werktijd ben ik offline tenzij we dat vooraf afspreken.' Dit is een duidelijke, respectvolle grens." },
      { domain: "Relaties", icon: "❤️", text: "Aan een vriend die je regelmatig afzegtop het laatste moment: 'Als je een afspraak afzegt, hoor ik dat graag minstens een dag van tevoren — tenzij het echt niet anders kan.' Grens gesteld, vriendschap intact." },
      { domain: "Familie", icon: "👨‍👩‍👧", text: "Aan ouders die overal commentaar op hebben: 'Ik waardeer jullie betrokkenheid, maar over X (opvoedkeuzes, relatie) beslis ik zelf. Jullie mening vraag ik wanneer ik die nodig heb.'" }
    ],
    prerequisites: [],
    unlocks: ["conflict-resolution"],
    exercises: [
      { type: "multipleChoice", question: "Wat maakt grenzen stellen effectief in plaats van afwijzend?", options: ["Grenzen zo zacht mogelijk formuleren", "Grenzen communiceren vanuit eigen behoeften, niet als aanval op de ander, en consequent handhaven", "Altijd een reden geven voor elke grens", "Grenzen alleen stellen als situaties al eskaleren"], correctIndex: 1, explanation: "Effectieve grenzen zijn helder, komen vanuit 'ik' (niet 'jij doet fout'), zijn consistent en worden gehandhaafd. Grenzen die worden gesteld maar niet gehandhaafd, werken averechtsen — ze ondermijnen je geloofwaardigheid." }
    ],
    creativePrompt: "Identificeer één situatie in je leven waar je een grens wil stellen maar dat nog niet hebt gedaan. Schrijf precies op wat je zou zeggen — rustig, duidelijk, zonder verontschuldiging.",
    aiHelperPrompts: ["Hoe stel ik grenzen als ik bang ben voor de reactie?", "Hoe handhaaf ik grenzen als iemand ze negeert?", "Is grenzen stellen egoïstisch?"]
  },
  {
    id: "vulnerability-courage",
    title: "Kwetsbaarheid als Kracht",
    difficulty: 2,
    emoji: "💎",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Sociale Vaardigheden",
    tags: ["kwetsbaarheid", "authenticiteit", "verbinding", "moed"],
    definition: "Kwetsbaarheid als kracht (gebaseerd op Brené Brown's onderzoek) is de inzicht dat kwetsbaarheid — het durven tonen van onzekerheid, risico en emotionele blootstelling — de basis is van diepe menselijke verbinding, creativiteit en moed, niet een teken van zwakte.",
    abstractExample: "Pantser beschermt, maar sluit ook buiten. Mensen die volledig gepantserd leven, vermijden pijn maar missen ook verbinding, vreugde en groei. Kwetsbaarheid is het afleggen van het pantser wanneer het veilig genoeg is.",
    examples: [
      { domain: "Werk", icon: "💼", text: "In een vergadering zeggen 'Ik weet het antwoord op deze vraag niet' in plaats van bluffen. Dit bouwt meer vertrouwen dan een zelfverzekerd fout antwoord." },
      { domain: "Relaties", icon: "❤️", text: "Aan iemand vertellen dat je om hem geeft, wetende dat er kans is op afwijzing. Dit is kwetsbaarheid in actie — de basis van echte intimiteit." },
      { domain: "Studie", icon: "📚", text: "Om hulp vragen bij iets wat je niet begrijpt, in plaats van te doen alsof je het snapt. Dit vereist kwetsbaarheid maar leidt tot daadwerkelijk leren." }
    ],
    prerequisites: [],
    unlocks: ["trust-building"],
    exercises: [
      { type: "multipleChoice", question: "Waarom beschouwt Brené Brown kwetsbaarheid als de oorsprong van verbinding?", options: ["Omdat kwetsbaarheid zwakheid toont die anderen willen beschermen", "Omdat alleen echte, imperfecte presentatie van jezelf diepe verbinding mogelijk maakt", "Omdat kwetsbaarheid anderen minder bedreigd laat voelen", "Omdat kwetsbaarheid de spanning verlaagt"], correctIndex: 1, explanation: "Verbinding vereist gezien worden zoals je werkelijk bent, niet zoals je wil overkomen. Kwetsbaarheid is de bereidheid om dat risico te nemen. Perfecte presentaties creëren bewondering maar geen diepe verbinding." }
    ],
    creativePrompt: "Kies één situatie komende week waar je iets echts kunt delen — een twijfel, een fout, een gevoel — met iemand die je vertrouwt. Wat merk je in het contact daarna?",
    aiHelperPrompts: ["Hoe weet ik wanneer kwetsbaarheid veilig is en wanneer niet?", "Hoe oefen ik kwetsbaarheid als ik daar niet mee ben opgegroeid?", "Wat is het verschil tussen kwetsbaarheid en oversharing?"]
  },
  {
    id: "forgiveness-psychology",
    title: "Psychologie van Vergeven",
    difficulty: 3,
    emoji: "🕊️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Sociale Vaardigheden",
    tags: ["vergeven", "loslaten", "welzijn", "relaties"],
    definition: "Vergeven is het bewuste loslaten van wrok, rancune en negatieve gevoelens jegens iemand die je heeft gekwetst — niet voor hen, maar voor je eigen welzijn. Vergeven betekent niet goedkeuren, vergeten of de relatie herstellen.",
    abstractExample: "Wrok vasthouden is als vergif drinken en hopen dat de ander eraan doodgaat. Vergeven is het vergif neerzetten — niet omdat de ander het verdient, maar omdat jij het niet verdient te dragen.",
    examples: [
      { domain: "Relaties", icon: "❤️", text: "Een ex-partner vergeven die je heeft bedrogen — niet om de relatie te herstellen of het goed te praten, maar om jezelf te bevrijden van de mentale last van aanhoudende woede." },
      { domain: "Familie", icon: "👨‍👩‍👧", text: "Ouders vergeven voor fouten in de opvoeding — begrijpen dat ze deden wat ze konden met wat ze hadden, zonder dat te goedkeuren of te bagatelliseren." },
      { domain: "Werk", icon: "💼", text: "Een collega vergeven die je oneerlijk heeft behandeld en doorgestuurd — loslaten zodat je energie vrijkomt voor je eigen groei in plaats van de wrok te koesteren." }
    ],
    prerequisites: ["self-compassion"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het grootste misverstand over vergeven?", options: ["Dat vergeven moeilijk is", "Dat vergeven goedkeuring inhoudt of de relatie herstelt", "Dat vergeven voor de ander is", "Dat vergeven te lang duurt"], correctIndex: 1, explanation: "Vergeven is geen oordeel over de handeling (die kan nog steeds verkeerd zijn) of de relatie (die hoef je niet te herstellen). Het is een keuze voor je eigen emotionele vrijheid — loslaten van de last van wrok." }
    ],
    creativePrompt: "Denk aan iemand aan wie je wrok koestert. Schrijf hem een brief (die je niet hoeft te versturen) waarin je alles uitdrukt wat je voelt EN een poging doet te begrijpen hoe het zo is gegaan. Wat verandert er?",
    aiHelperPrompts: ["Hoe vergeef ik iemand die geen spijt heeft?", "Hoe weet ik wanneer vergeven gezond is en wanneer het zelfbedrog is?", "Wat is het verschil tussen vergeven en toestaan dat iemand je blijft kwetsen?"]
  },
  {
    id: "social-intuition",
    title: "Sociale Intuïtie",
    difficulty: 2,
    emoji: "🔮",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Sociale Vaardigheden",
    tags: ["intuïtie", "lezen", "non-verbaal", "sociale intelligentie"],
    definition: "Sociale intuïtie is het vermogen om snel en accuraat de sociale dynamiek, stemming en behoeften van een groep of individu te lezen — vaak op basis van subtiele signalen zoals lichaamstaal, toon, ritme en context. Het is trainbare sociale intelligentie, geen aangeboren gave.",
    abstractExample: "Een goede muzikant voelt de sfeer van de kamer en speelt daarnaar — hij legt zijn setlist naast zich neer als de energie anders is dan verwacht. Sociale intuïtie is hetzelfde maar in menselijk contact.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een presentator voelt halverwege dat het publiek afhaakt — gespannen lichaamstaal, minder oogcontact, onrust. Hij past zijn tempo en aanpak aan zonder dat er iets gezegd is." },
      { domain: "Relaties", icon: "❤️", text: "Je partner binnenkomt en direct voelen — door subtiele signalen — of hij behoefte heeft aan gesprek of juist aan ruimte. En dit accuraat aflezen, niet projecteren." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Bij een etentje voelen wanneer een onderwerp gevoelig ligt voor iemand aan tafel, voordat hij het zelf zegt, en het gesprek subtiel sturen." }
    ],
    prerequisites: ["empathic-accuracy"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Hoe wordt sociale intuïtie het best ontwikkeld?", options: ["Door boeken over lichaamstaal te lezen", "Door aandachtig te observeren, hypotheses te toetsen en feedback te ontvangen over je sociale lezingen", "Het is aangeboren en niet te trainen", "Door meer sociale situaties te vermijden"], correctIndex: 1, explanation: "Sociale intuïtie is patroonherkenning opgebouwd door ervaring. Het wordt verfijnd door bewust te observeren, te toetsen wat je waarneemt (door te vragen of door uitkomsten te monitoren) en te corrigeren op basis van feedback." }
    ],
    creativePrompt: "Observeer in je volgende sociale situatie bewust drie minuten lang zonder te spreken. Wie heeft de meeste invloed? Wie voelt zich ongemakkelijk? Hoe weet je dat? Toets daarna je observaties.",
    aiHelperPrompts: ["Hoe verbeter ik mijn vermogen om sociale situaties te lezen?", "Wat zijn de meest betrouwbare non-verbale signalen?", "Hoe vermijd ik dat mijn eigen projecties mijn sociale lezingen vertekenen?"]
  },
  {
    id: "giving-receiving-help",
    title: "Hulp Vragen en Ontvangen",
    difficulty: 2,
    emoji: "🤲",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Sociale Vaardigheden",
    tags: ["hulp", "kwetsbaarheid", "samenwerking", "afhankelijkheid"],
    definition: "Hulp vragen en ontvangen is een sociale vaardigheid die veel mensen moeilijk vinden door angst voor zwakte, afhankelijkheid of het opleggen van lasten. Onderzoek toont dat hulp vragen relaties versterkt en dat mensen die hulp ontvangen meer waardering voelen voor de helper (het Benjamin Franklin-effect).",
    abstractExample: "Mensen denken dat hulp vragen een schuld creëert. In werkelijkheid schept hulp geven de helper een investering in jou — ze willen dat je slaagt. Het vragen is geen zwakheid; het is een uitnodiging tot verbinding.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een nieuwe medewerker die snel om hulp vraagt bij onduidelijkheden (specifiek, niet alles) leert sneller én bouwt sneller relaties dan iemand die alles zelf probeert uit te vogelen." },
      { domain: "Studie", icon: "📚", text: "Na een slecht tentamen een docent opzoeken om feedback te vragen — niet makkelijk, maar het toont initiatief en leidt tot beter begrip dan alleen de stof opnieuw lezen." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Aan buren om hulp vragen bij een verhuizing in plaats van het alleen te doen — dit bouwt gemeenschap. En jij helpt hen als zij het nodig hebben." }
    ],
    prerequisites: ["vulnerability-courage"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het Benjamin Franklin-effect?", options: ["Mensen waarderen je minder als je hen om hulp vraagt", "Mensen die jou een gunst hebben gedaan, staan welwillender tegenover je dan daarvoor", "Hulp vragen creëert afhankelijkheid", "Mensen vinden het irritant om om hulp gevraagd te worden"], correctIndex: 1, explanation: "Het Benjamin Franklin-effect beschrijft dat mensen die jou een gunst hebben gedaan, deze actie rationaliseren door te concluderen dat ze je graag mogen. Hulp vragen versterkt zo paradoxaal genoeg de relatie." }
    ],
    creativePrompt: "Vraag deze week bewust om hulp bij iets wat je normaal alleen zou doen. Hoe voelde het om te vragen? Hoe reageerde de ander? Wat gebeurde er met de relatie?",
    aiHelperPrompts: ["Hoe vraag ik op een goede manier om hulp?", "Hoe ga ik om met de schaamte van hulp nodig hebben?", "Wanneer is het beter zelf iets op te lossen dan hulp te vragen?"]
  },
  {
    id: "loneliness-connection",
    title: "Eenzaamheid en Verbinding",
    difficulty: 2,
    emoji: "🌐",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Sociale Vaardigheden",
    tags: ["eenzaamheid", "verbinding", "welzijn", "gemeenschap"],
    definition: "Eenzaamheid is de pijnlijke discrepantie tussen gewenste en werkelijke sociale verbinding — het gaat om kwaliteit, niet kwantiteit van relaties. Chronische eenzaamheid heeft vergelijkbare gezondheidsrisico's als roken. Verbinding is een fundamentele menselijke behoefte, geen luxe.",
    abstractExample: "Je kunt omringd zijn door mensen en diep eenzaam zijn, of alleen zijn en je volledig verbonden voelen. Eenzaamheid zit niet in de aanwezigheid van anderen, maar in de kwaliteit van de verbinding.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "Iemand die honderden online volgers heeft maar niemand heeft om 's nachts mee te praten over wat hem echt bezighoudt, ervaart functionele eenzaamheid ondanks sociale aanwezigheid." },
      { domain: "Werk", icon: "💼", text: "Veel werknemers rapporteren eenzaamheid zelfs in actieve kantooromgevingen — oppervlakkige professionele interacties vervangen geen echte verbinding." },
      { domain: "Ouderen", icon: "👴", text: "Oudereneenzaamheid is een gezondheidscrisis: sociaal geïsoleerde ouderen hebben hogere sterftecijfers dan rokers. Regelmatig contact — ook digitaal — heeft meetbaar gezondheideffect." }
    ],
    prerequisites: ["vulnerability-courage"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is de effectiefste manier om eenzaamheid te verminderen?", options: ["Meer sociale media gebruiken", "Diepere, kwalitatieve verbindingen bouwen door oprechte interesse en kwetsbaarheid", "Zoveel mogelijk mensen ontmoeten", "Professionele hulp zoeken"], correctIndex: 1, explanation: "Onderzoek toont dat het aantal contacten weinig correleert met eenzaamheid — de kwaliteit van verbinding telt. Diepere gesprekken, oprechte interesse en bereidheid jezelf te laten zien zijn effectiever dan meer oppervlakkige contacten." }
    ],
    creativePrompt: "Hoeveel echte, diepgaande gesprekken heb jij per week? Met wie kun jij je echt uitspreken? Wat is één stap die je kunt zetten om een bestaande relatie te verdiepen?",
    aiHelperPrompts: ["Hoe onderscheid ik eenzaamheid van introversie?", "Hoe bouw ik echte verbindingen op als volwassene?", "Hoe help ik iemand die eenzaam is zonder opdringerig te zijn?"]
  },
  {
    id: "ikigai",
    title: "Ikigai",
    difficulty: 2,
    emoji: "🌸",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Persoonlijke Strategie",
    tags: ["zingeving", "carrière", "passie", "doel"],
    definition: "Ikigai is een Japans concept dat verwijst naar de reden om 's ochtends op te staan — het snijpunt van vier cirkels: wat je liefhebt, wat je goed in bent, wat de wereld nodig heeft, en wat je betaald kunt krijgen. In het midden ligt je ikigai.",
    abstractExample: "Stel je vier overlappende cirkels voor. Elk overlapt geeft iets: passie (liefde + talent), missie (liefde + behoefte), roeping (talent + behoefte), professie (talent + betaling). Alleen in het midden van alle vier is er ikigai.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een leraar die schrijven geweldig vindt (liefde), er goed in is (talent), die schrijfvaardigheid nodig is in de maatschappij (behoefte), en er een salaris voor ontvangt (betaling) — heeft zijn ikigai gevonden." },
      { domain: "Studie", icon: "📚", text: "Een student die worstelt met studiekeuze kan ikigai gebruiken: Wat vind ik fascinerend? Waar ben ik goed in? Welke problemen wil ik in de wereld oplossen? Wat kan ik verdienen?" },
      { domain: "Dagelijks leven", icon: "🏠", text: "Iemand die zijn dag doorbrengt met werk dat hij niet liefheeft en slecht doet, voelt de leegte — het ikigai-kader helpt verklaren waarom en richting wijzen." }
    ],
    prerequisites: [],
    unlocks: ["smart-goals", "values-clarification"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het risico als je werk slechts op drie van de vier ikigai-cirkels overlapt?", options: ["Er is geen risico — drie is al goed", "Elk ontbrekend kwadrant leidt tot een specifieke leegte: bijv. talent + behoefte + betaling zonder liefde leidt tot gevoel van leegte ondanks succes", "Je bent altijd tevreden als je betaald wordt voor iets goeds", "Ikigai vereist geen betaling"], correctIndex: 1, explanation: "Elk kwadrant-ontbrekende combinatie heeft een eigen gevolg: liefde + talent zonder betaling = armoede; talent + betaling zonder liefde = gevoel van leegte; liefde + behoefte zonder talent = frustratie. Het volledige midden vereist alle vier." }
    ],
    creativePrompt: "Teken vier overlappende cirkels en schrijf in elke cirkel wat voor jou geldt. Wat staat in het midden? Wat is er bijna maar niet helemaal in het midden? Welke cirkel is het minst gevuld?",
    aiHelperPrompts: ["Hoe vind ik mijn ikigai als ik niet weet wat ik liefheb?", "Moet ikigai altijd over werk gaan?", "Hoe verander ik mijn situatie als mijn ikigai niet mijn huidige job is?"]
  },
  {
    id: "smart-goals",
    title: "SMART-doelen",
    difficulty: 1,
    emoji: "🎯",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Persoonlijke Strategie",
    tags: ["doelen", "planning", "succes", "motivatie"],
    definition: "SMART-doelen zijn doelstellingen die Specifiek, Meetbaar, Acceptabel (haalbaar), Relevant en Tijdgebonden zijn. Het SMART-kader transformeert vage intenties ('ik wil fitter worden') in concrete plannen ('ik loop drie keer per week 30 minuten, startend maandag, tot einde van het kwartaal').",
    abstractExample: "Een wens is een richting: 'Ik wil naar Parijs.' Een SMART-doel is een navigatieplan: 'Ik boek een ticket naar Parijs voor 15 juni, binnen een budget van €400, om het Louvre en Musée d'Orsay te bezoeken.' De kans op aankomst verschilt enorm.",
    examples: [
      { domain: "Werk", icon: "💼", text: "'Beter presenteren' wordt: 'Ik volg voor 1 april een presentatietraining van 4 sessies en geef in mei mijn eerste presentatie aan het management met een feedbackformulier.' SMART." },
      { domain: "Studie", icon: "📚", text: "'Betere cijfers halen' wordt: 'Ik leer de komende vier weken drie uur per dag voor statistiek en doe elke week één proefexamen, met het doel een 7 of hoger.' SMART." },
      { domain: "Dagelijks leven", icon: "🏠", text: "'Meer sparen' wordt: 'Ik boek elke eerste van de maand automatisch €200 over naar een spaarrekening die ik niet kan pinnen.' SMART." }
    ],
    prerequisites: ["ikigai"],
    unlocks: ["implementation-intention", "habit-stacking"],
    exercises: [
      { type: "multipleChoice", question: "Waarom zijn vage doelen minder effectief dan SMART-doelen?", options: ["Vage doelen zijn minder ambitieus", "Vage doelen bieden geen basis voor actie, meting of bijsturing", "SMART-doelen zijn altijd makkelijker te bereiken", "Vage doelen laten meer ruimte voor flexibiliteit"], correctIndex: 1, explanation: "Zonder specificiteit weet je niet wanneer je begint of klaar bent. Zonder meetbaarheid kun je geen voortgang zien. Zonder tijdskader creëert de wet van Parkinson eindeloze uitstelling. SMART-doelen maken actie concreet en voortgang zichtbaar." }
    ],
    creativePrompt: "Neem één grote wens of intentie. Herschrijf hem als SMART-doel. Merk je verschil in hoe haalbaar en concreet het nu voelt?",
    aiHelperPrompts: ["Hoe maak ik een SMART-doel voor langetermijnambities?", "Wat doe ik als mijn doel niet meetbaar is?", "Hoe hou ik mezelf gemotiveerd bij langetermijn SMART-doelen?"]
  },
  {
    id: "habit-stacking",
    title: "Gewoontesstapeling",
    difficulty: 1,
    emoji: "🔗",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Persoonlijke Strategie",
    tags: ["gewoonten", "routine", "gedragsverandering", "automatisering"],
    definition: "Gewoontesstapeling (habit stacking) is de techniek van het koppelen van een nieuwe gewoonte aan een bestaande, als anker: 'Na [bestaande gewoonte] doe ik [nieuwe gewoonte].' Dit maakt gebruik van bestaande neurale paden om nieuwe gedragingen in te bedden.",
    abstractExample: "Een nieuw gedrag proberen op een willekeurig moment is moeilijk — je moet er steeds aan denken. Door het te koppelen aan iets wat je al automatisch doet (koffie zetten, tanden poetsen), 'leent' de nieuwe gewoonte de kracht van de bestaande.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "'Na het poetsen van mijn tanden doe ik twee minuten meditatie.' De tandenborstel wordt de cue die de meditatie triggert — zo wordt de nieuwe gewoonte vastgehecht aan een bestaande routine." },
      { domain: "Werk", icon: "💼", text: "'Na het openen van mijn laptop schrijf ik eerst drie prioriteiten op voor de dag.' Het opstarten wordt de trigger voor doelbewuste dagplanning." },
      { domain: "Studie", icon: "📚", text: "'Na het eten van de lunch doe ik 15 minuten flashcards.' De lunch is het anker — de studietijd volgt automatisch zonder wilskracht." }
    ],
    prerequisites: ["smart-goals"],
    unlocks: ["identity-based-habits"],
    exercises: [
      { type: "multipleChoice", question: "Waarom werkt gewoontesstapeling beter dan simpelweg een nieuw tijdstip plannen?", options: ["Gewoontesstapeling is makkelijker te onthouden", "Bestaande gewoonten fungeren als krachtige contextuele signalen die automatisch gedrag activeren", "Tijdsplanning werkt niet voor gewoonten", "Gewoontesstapeling vereist minder discipline"], correctIndex: 1, explanation: "Gedrag is sterk contextgebonden. Bestaande gewoonten activeren een reeks automatische gedragingen. Door de nieuwe gewoonte te koppelen aan deze context, profiteert ze van de automatisering die al bestaat — waardoor wilskracht minder nodig is." }
    ],
    creativePrompt: "Kies één nieuwe gewoonte die je wil opbouwen. Identificeer drie bestaande gewoonten in je dag. Welk anker is het logischst? Schrijf de exacte formule op: 'Na [X] doe ik [Y].'",
    aiHelperPrompts: ["Hoe kies ik het beste anker voor een nieuwe gewoonte?", "Wat doe ik als de gestapelde gewoonte te groot is?", "Hoe vermijd ik dat stapeling mijn bestaande gewoonten verstoort?"]
  },
  {
    id: "identity-based-habits",
    title: "Identiteitsgebaseerde Gewoontes",
    difficulty: 2,
    emoji: "🪞",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Persoonlijke Strategie",
    tags: ["identiteit", "gewoonten", "gedragsverandering", "zelfconcept"],
    definition: "Identiteitsgebaseerde gewoontes (uit James Clear's Atomic Habits) is het principe dat duurzame gedragsverandering begint bij het veranderen van hoe je jezelf ziet, niet wat je doet. In plaats van 'Ik probeer te hardlopen' denk je 'Ik ben een hardloper.' Elke actie bewijst dan je identiteit.",
    abstractExample: "Er zijn twee niveaus van doelen: uitkomst ('ik wil 10 kilo afvallen') en identiteit ('ik ben iemand die gezond leeft'). Uitkomstdoelen eindigen na bereiken; identiteitsdoelen houden het gedrag in stand — omdat elke actie de identiteit bevestigt.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "In plaats van 'Ik probeer minder te drinken' denken: 'Ik ben iemand die niet drinkt.' Als iemand je een drankje aanbiedt: 'Nee dank je, ik drink niet' — niet 'Ik probeer te stoppen.' De taal vormt de identiteit." },
      { domain: "Werk", icon: "💼", text: "In plaats van 'Ik moet schrijven voor mijn werk': 'Ik ben een schrijver.' Schrijven is dan geen taak maar een uitdrukking van wie je bent — consistentie volgt naturlijk." },
      { domain: "Studie", icon: "📚", text: "In plaats van 'Ik moet studeren': 'Ik ben iemand die elke dag iets nieuws leert.' Elke studiesessie bevestigt en versterkt die identiteit." }
    ],
    prerequisites: ["habit-stacking"],
    unlocks: ["keystone-habits"],
    exercises: [
      { type: "multipleChoice", question: "Waarom zijn identiteitsgebaseerde gewoontes effectiever dan uitkomstgebaseerde doelen?", options: ["Identiteitsverandering is makkelijker", "Identiteit houdt gedrag in stand na het bereiken van doelen — uitkomstdoelen eindigen bij bereik", "Uitkomstdoelen zijn te concreet", "Ze zijn even effectief maar voor verschillende mensen"], correctIndex: 1, explanation: "Na het bereiken van een uitkomstdoel (10 kilo kwijt) is er geen motivatie meer om het gedrag voort te zetten. Identiteitsgebaseerde verandering ('ik ben iemand die gezond leeft') heeft geen eindpunt — het is wie je bent." }
    ],
    creativePrompt: "Kies een gewoonte die je wil opbouwen. Welk type persoon vertoont dat gedrag? Herschrijf je doel als identiteitsverklaring. Hoe voelt die verklaring? Welke kleine acties bewijzen die identiteit vandaag al?",
    aiHelperPrompts: ["Hoe verander ik mijn zelfconcept als dat diep geworteld is?", "Wat doe ik als mijn identiteitsverklaring niet klopt met wie ik ben?", "Hoe vermijd ik dat identiteitsverandering oppervlakkig blijft?"]
  },
  {
    id: "keystone-habits",
    title: "Sleutelgewoontes",
    difficulty: 2,
    emoji: "🗝️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Persoonlijke Strategie",
    tags: ["gewoonten", "domino-effect", "gedrag", "verandering"],
    definition: "Sleutelgewoontes (keystone habits) zijn gewoontes die als hefboom werken: het opbouwen ervan triggert automatisch positieve veranderingen in andere levensdomeinen. Ze creëren structuren die ander gewenst gedrag gemakkelijker maken.",
    abstractExample: "Een keystone habit is als het eerste dominosteen: zodra het valt, brengt het een ketting van andere stenen in beweging. Je zet slechts één steen op, maar de rest volgt vanzelf.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "Regelmatig sporten blijkt voor velen een keystone habit: het verbetert automatisch slaapkwaliteit, eetpatroon, stressmanagement en concentratie — zonder dat daarvoor extra doelen worden gesteld." },
      { domain: "Werk", icon: "💼", text: "Een dagelijkse planning maken (10 minuten 's ochtends) is een keystone habit die focus, prioritering en gevoel van controle over de dag verbetert." },
      { domain: "Studie", icon: "📚", text: "Dagelijks vroeg opstaan is een keystone habit: het creëert rustige ochtendstudetijd, verbetert slaapritme en vermindert nachtelijke stress — andere positieve gewoonten volgen." }
    ],
    prerequisites: ["identity-based-habits"],
    unlocks: ["environment-design"],
    exercises: [
      { type: "multipleChoice", question: "Wat maakt een gewoonte een 'keystone habit'?", options: ["Het kost veel discipline", "Het triggert automatisch positieve veranderingen in andere levensdomeinen als bijproduct", "Het is de moeilijkste gewoonte op te bouwen", "Het vereist altijd meerdere stappen"], correctIndex: 1, explanation: "Keystone habits werken als katalysatoren. Ze scheppen structuren, rituelen en kleine zeges die andere positieve gedragspatronen bevorderen. Niet alle gewoonten hebben dit domino-effect — keystone habits zijn de uitzonderingen die het meeste rendement geven." }
    ],
    creativePrompt: "Wat is de gewoonte in jouw leven die, als je ze opbouwt, de meeste andere positieve effecten zou hebben? Hoe kun je daar stapsgewijs mee beginnen?",
    aiHelperPrompts: ["Hoe identificeer ik mijn persoonlijke keystone habits?", "Hoe bouw ik een keystone habit op als ik al eerder gefaald ben?", "Hoe lang duurt het voor een keystone habit zijn domino-effecten toont?"]
  },
  {
    id: "environment-design",
    title: "Omgevingsontwerp",
    difficulty: 2,
    emoji: "🏗️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Persoonlijke Strategie",
    tags: ["omgeving", "gedrag", "gewoonten", "design"],
    definition: "Omgevingsontwerp is het bewust aanpassen van je fysieke en digitale omgeving om gewenst gedrag makkelijker en ongewenst gedrag moeilijker te maken. Gedrag is sterk contextafhankelijk — de omgeving stuurt keuzes meer dan we denken.",
    abstractExample: "Fruit op het aanrecht eten versus verstopt in de koelkast — de kans dat je fruit eet verdubbelt door positie alleen. Je karakter verandert niet; de omgeving verandert. Gedrag volgt de weg van minste weerstand.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "Sportkleding de avond ervoor klaarleggen (omgevingsontwerp voor sporten). Telefoon buiten de slaapkamer laden (ontwerp voor beter slapen). Ongezond eten niet in huis hebben (ontwerp voor gezonder eten)." },
      { domain: "Werk", icon: "💼", text: "Notificaties uitzetten, website-blockers instellen voor sociale media, en een opgeruimd bureau — dit zijn ontwerpen die focuswerk gemakkelijker maken zonder extra wilskracht." },
      { domain: "Studie", icon: "📚", text: "Een vaste studieplek die alleen voor leren wordt gebruikt, traint de hersenen om in die ruimte automatisch in studiemodus te gaan — omgevingsontwerp als conditionering." }
    ],
    prerequisites: ["keystone-habits"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Waarom is omgevingsontwerp effectiever dan puur op wilskracht vertrouwen?", options: ["Wilskracht is altijd betrouwbaarder", "Wilskracht is een beperkte hulpbron; omgeving stuurt gedrag automatisch en verbruikt geen wilskracht", "Omgevingsontwerp werkt alleen voor eenvoudige gewoonten", "Ze zijn even effectief"], correctIndex: 1, explanation: "Wilskracht is beperkt en put uit. Omgevingsontwerp verschuift de standaard — het maakt het gewenste gedrag de 'weg van minste weerstand', waardoor wilskracht zelden nodig is. Architectuur van keuze bepaalt gedrag meer dan karakter." }
    ],
    creativePrompt: "Loop door je huis en werkplek. Welke drie kleine aanpassingen aan je omgeving zouden goed gedrag makkelijker en slecht gedrag moeilijker maken? Voer er één vandaag door.",
    aiHelperPrompts: ["Hoe ontwerp ik mijn digitale omgeving voor beter focuswerk?", "Welke omgevingsveranderingen hebben het meeste impact op gewoontevorming?", "Hoe overwin ik sociale omgevingen die slecht gedrag aanmoedigen?"]
  },
  {
    id: "temptation-bundling",
    title: "Verleiding Koppelen",
    difficulty: 1,
    emoji: "🎁",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Persoonlijke Strategie",
    tags: ["motivatie", "gewoonten", "beloning", "zelfcontrole"],
    definition: "Verleiding koppelen (temptation bundling) is de strategie van het combineren van een taak die je moet doen (maar niet leuk vindt) met iets wat je wil doen (maar 'niet zou mogen' doen tenzij als beloning). Dit maakt verplichte taken aantrekkelijker.",
    abstractExample: "Je mag je favoriete podcast alleen luisteren terwijl je sport. De podcast wordt een reden om te sporten — want anders mis je de afleveringen. De beloning en de verplichting zijn onlosmakelijk verbonden.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "Je favoriete serie alleen kijken terwijl je de vaatwasser inruimt, de was doet of de woonkamer opruimt. Huishoudtaken worden aangenamer; de serie wordt een beloning die plichtvervulling vereist." },
      { domain: "Werk", icon: "💼", text: "Je favoriete koffie of muziek alleen toelaten tijdens de meest vervelende taken van de dag — administratie, facturering, rapportages. Dit maakt die taken minder zwaar." },
      { domain: "Studie", icon: "📚", text: "Flashcards oefenen alleen op je comfortabele favoriete stoel. Die stoel wordt geassocieerd met studeren én gemak — beide positief." }
    ],
    prerequisites: ["habit-stacking"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Waarom werkt verleiding koppelen psychologisch?", options: ["Het elimineert de vervelende taak", "Het vergroot de directe beloning van een taak die anders alleen uitgestelde beloning heeft", "Het maakt de taak makkelijker", "Het leidt af van de vervelende taak"], correctIndex: 1, explanation: "Mensen zijn sterk gericht op directe beloningen boven uitgestelde. Een taak die pas later beloont (bijv. sporten → gezondheid over jaren) legt het af tegen een taak met directe beloning. Verleiding koppelen voegt directe beloning toe." }
    ],
    creativePrompt: "Maak een lijst van drie taken die je uitstelt én drie genoegens die je reserveert voor vrije tijd. Koppel ze. Wat klinkt het meest als een eerlijke deal?",
    aiHelperPrompts: ["Welke verleidingen werken het beste voor koppelen?", "Wat doe ik als de koppeling niet meer werkt?", "Is verleiding koppelen een duurzame strategie?"]
  },
  {
    id: "personal-board",
    title: "Persoonlijke Raad van Advies",
    difficulty: 2,
    emoji: "🧑‍🤝‍🧑",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Persoonlijke Strategie",
    tags: ["mentorship", "netwerk", "groei", "advies"],
    definition: "Een persoonlijke raad van advies is een informeel netwerk van mentoren, adviseurs en rolmodellen — mensen die elk een ander perspectief, expertise of levenservaring vertegenwoordigen die aanvullend is op de jouwe. Dit concept past het corporate governance-model toe op persoonlijke ontwikkeling.",
    abstractExample: "Grote bedrijven hebben een raad van bestuur die diverse perspectieven inbrengt voor betere beslissingen. Jij als individu verdient hetzelfde: een diverse groep mensen die jou helpt groeien vanuit complementaire invalshoeken.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een jonge professional bouwt een persoonlijke raad met: een senior in het vakgebied (expertise), een leeftijdsgenoot in een andere branche (fris perspectief), een ondernemer (risicodenkwijze), en een levenscoach (persoonlijk welzijn)." },
      { domain: "Studie", icon: "📚", text: "Een student bouwt haar raad met: een succesvolle alumnus (loopbaanperspectief), een medestudent die verder is (peer learning), en een professor die haar uitdaagt (intellectuele scherpte)." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Voor grote levensbeslissingen (verhuizen, carrièreswitch) een informele raad raadplegen van drie tot vijf mensen met relevante ervaringen, in plaats van alleen de mening te zoeken van mensen die het met je eens zijn." }
    ],
    prerequisites: ["rapport-building"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het grootste voordeel van een persoonlijke raad van advies?", options: ["Je hebt altijd mensen die het met je eens zijn", "Diverse perspectieven helpen blinde vlekken identificeren en betere beslissingen nemen", "Je hoeft geen eigen beslissingen meer te nemen", "Het bouwt je professionele netwerk op"], correctIndex: 1, explanation: "Het grootste risico bij persoonlijke besluitvorming is het zoeken van bevestiging bij mensen die al op jou lijken. Diversiteit in adviseurs — leeftijd, achtergrond, denkstijl — brengt perspectieven die je eigenblindheid compenseren." }
    ],
    creativePrompt: "Wie zijn de vijf mensen die je nu raadpleegt bij grote beslissingen? Welk perspectief ontbreekt in die groep? Wie zou dat perspectief kunnen toevoegen?",
    aiHelperPrompts: ["Hoe vraag ik iemand om mentoring zonder opdringerig te zijn?", "Hoe onderhoud ik relaties met mijn persoonlijke raad?", "Hoeveel adviseurs is ideaal?"]
  },
  {
    id: "after-action-review",
    title: "Evaluatie na Actie",
    difficulty: 1,
    emoji: "🔍",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Persoonlijke Strategie",
    tags: ["reflectie", "leren", "verbetering", "evaluatie"],
    definition: "Een evaluatie na actie (After Action Review, ontwikkeld door het Amerikaanse leger) is een gestructureerde reflectiepraktijk na een gebeurtenis: Wat was de bedoeling? Wat gebeurde er werkelijk? Wat ging goed? Wat kan beter? Wat leer ik hiervan? Regelmatig toegepast, versnelt het leren enorm.",
    abstractExample: "Ervaring alleen leert weinig — het is gereflecteerde ervaring die leert. Een vliegtuig met alleen instrumenten maar geen piloot die ze leest, is nutteloos. De evaluatie is de piloot die de instrumenten leest.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Na elke projectmijlpaal 30 minuten nemen om te bespreken: wat was de planning, wat is er gebeurd, welke beslissingen werkten, wat zouden we anders doen. Dit versnelt teamleren exponentieel." },
      { domain: "Studie", icon: "📚", text: "Na elk tentamen: wat had ik verwacht, hoe ging het werkelijk, welke vragen overvielen me, hoe studeer ik anders voor het volgende tentamen?" },
      { domain: "Dagelijks leven", icon: "🏠", text: "Een wekelijkse persoonlijke evaluatie van 15 minuten: wat waren mijn intenties deze week, wat heb ik bereikt, wat hield me tegen, wat doe ik volgende week anders?" }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Waarom leert een evaluatie na actie méér dan alleen nadenken over wat misging?", options: ["Het is sneller dan nadenken", "Structuur dwingt zowel successen als mislukkingen te onderzoeken, wat volledigere lessen oplevert", "Het vereist een team", "Informeel nadenken is altijd voldoende"], correctIndex: 1, explanation: "Zonder structuur focust reflectie op het meest opvallende (vaak wat misging), mist het successen die herhaalbaar zijn, en vergeet het de oorspronkelijke intentie. Een structureel kader zorgt voor volledigheid en eerlijkheid." }
    ],
    creativePrompt: "Doe nu een mini-evaluatie van de afgelopen week: Wat was je intentie? Wat heb je bereikt? Wat ging goed (schrijf minstens drie dingen)? Wat doe je volgende week anders?",
    aiHelperPrompts: ["Hoe doe ik een effectieve persoonlijke evaluatie na actie?", "Hoe regelmatig moet ik evalueren voor maximale groei?", "Hoe vermijd ik dat evaluaties te negatief worden?"]
  },
  {
    id: "stoic-dichotomy",
    title: "Stoïcijnse Dichotomie van Controle",
    difficulty: 2,
    emoji: "⚖️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Zingeving",
    tags: ["stoïcisme", "controle", "acceptatie", "rust"],
    definition: "De dichotomie van controle (Epictetus) is het fundamentele stoïcijnse principe dat alles in twee categorieën valt: wat in onze macht is (onze oordelen, intenties, reacties) en wat niet in onze macht is (de acties van anderen, ons lichaam, reputatie, bezittingen). Geluk vloeit uit acceptatie van dit onderscheid.",
    abstractExample: "Je kunt niet kiezen of het regent — maar je kunt kiezen hoe je erop reageert, of je een jas pakt, en welke betekenis je eraan geeft. De stoïcijn richt energie uitsluitend op wat hij kan beïnvloeden.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een negatieve beoordeling ontvangen: de beoordeling zelf is niet in jouw macht (wat anderen oordelen), maar jouw reactie, je leerbereidheid en je volgende stap zijn dat wel. Stoïcijnse focus." },
      { domain: "Sport", icon: "🏃", text: "Een atleet kan niet controleren of tegenstanders beter presteren, maar wel zijn training, mentale voorbereiding en inzet op de dag. Dit onderscheid vermindert angst en verhoogt focus." },
      { domain: "Dagelijks leven", icon: "🏠", text: "File staan: de file is niet in jouw macht. Jouw stemming, hoe je de tijd gebruikt (luisterboek, muziek) en hoe je aankomt (gefrustreerd of kalm) — dat is jouw keuze." }
    ],
    prerequisites: [],
    unlocks: ["acceptance-commitment", "present-moment-focus"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het praktische gevolg van consequent de dichotomie van controle toepassen?", options: ["Je wordt passief en geeft op", "Je richt energie op wat je kunt beïnvloeden, wat stress vermindert en effectiviteit verhoogt", "Je raakt onverschillig voor de wereld", "Alleen filosofen kunnen dit toepassen"], correctIndex: 1, explanation: "Door energie te richten op de enige dingen die daadwerkelijk in je macht zijn, voorkom je de verspilling van energie aan zorgen over het oncontroleerbare. Dit leidt tot meer rust én meer effectief handelen tegelijk." }
    ],
    creativePrompt: "Schrijf je belangrijkste zorgen op. Categoriseer elke zorg: 'in mijn macht' of 'niet in mijn macht.' Wat kan je direct doen aan de eerste categorie? Hoe laat je de tweede categorie los?",
    aiHelperPrompts: ["Hoe pas ik de dichotomie van controle toe bij gezondheidsangst?", "Hoe vermijd ik dat acceptatie in passiviteit verandert?", "Hoe combineer ik stoïcijnse acceptatie met ambitie?"]
  },
  {
    id: "memento-mori",
    title: "Memento Mori",
    difficulty: 3,
    emoji: "💀",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Zingeving",
    tags: ["sterfelijkheid", "prioriteiten", "stoïcisme", "urgentie"],
    definition: "Memento mori (Latijn: 'bedenk dat je sterfelijk bent') is de stoïcijnse en humanistische praktijk van bewust nadenken over de eindigheid van het leven, als middel om te focussen op wat werkelijk belangrijk is, uitstelgedrag te overwinnen en het leven dieper te waarderen.",
    abstractExample: "Stel je voor dat je een afteltimer ziet naast elk uur van je dag. Zou je anders omgaan met je tijd? Memento mori is niet macaber — het is urgent: je tijd is eindig, gebruik haar bewust.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "De vraag 'Als ik nog één jaar te leven had, zou ik dit doen?' is geen catastrofale gedachte maar een prioriteringsinstrument. Wat blijft? Wat valt weg? Dit is memento mori in praktijk." },
      { domain: "Werk", icon: "💼", text: "Steve Jobs zei dat de herinnering aan zijn eigen sterfelijkheid de krachtigste tool was om grote keuzes te maken — het verwijdert de angst voor schaamte, falen en andermans mening." },
      { domain: "Relaties", icon: "❤️", text: "Je beseffen dat dit gesprek met je ouder, kind of vriend eindig is — dat je niet weet hoeveel gesprekken er nog zijn — verdiept de aanwezigheid en waardering in het moment." }
    ],
    prerequisites: ["stoic-dichotomy"],
    unlocks: ["legacy-thinking"],
    exercises: [
      { type: "multipleChoice", question: "Hoe werkt memento mori als motivatietool?", options: ["Het maakt mensen angstig en passief", "Bewustzijn van eindigheid verhoogt de waargenomen waarde van tijd en helpt onbelangrijke beslommeringen loslaten", "Het motiveert alleen mensen met een terminale ziekte", "Het leidt tot nihilisme"], correctIndex: 1, explanation: "Psychologisch onderzoek (Terror Management Theory) toont dat bewust omgaan met de eigen sterfelijkheid — in plaats van het te vermijden — leidt tot meer authenticiteit, diepere verbindingen en focus op zinvolle activiteiten." }
    ],
    creativePrompt: "Schrijf je eigen nekrologie — niet wat je hebt bereikt, maar wie je was voor de mensen om je heen. Wat staat erin? Wat ontbreekt dat je nog wil toevoegen? Hoe wil je leven zodat die tekst klopt?",
    aiHelperPrompts: ["Hoe denk ik aan memento mori zonder depressief te worden?", "Hoe integreer ik bewustzijn van eindigheid in mijn dagelijks leven?", "Wat is het verschil tussen memento mori en doodsangst?"]
  },
  {
    id: "amor-fati",
    title: "Amor Fati",
    difficulty: 3,
    emoji: "🌊",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Zingeving",
    tags: ["acceptatie", "lot", "liefde", "nietzsche"],
    definition: "Amor fati (Latijn: 'liefde voor het lot') is het filosofische begrip — benadrukt door Nietzsche en de stoïcijnen — van het niet slechts accepteren maar actief omarmen van alles wat je overkomt, inclusief tegenslagen en pijn, als onlosmakelijk onderdeel van je leven.",
    abstractExample: "Acceptatie zegt: 'Ik draag de steen.' Amor fati zegt: 'Ik omarm de steen — hij heeft me gemaakt wie ik ben.' Niet stoïcijnse gelatenheid, maar actieve liefde voor alles wat is, ook het moeilijke.",
    examples: [
      { domain: "Persoonlijk", icon: "💙", text: "Iemand die zegt 'zonder die moeilijke periode had ik nooit deze richting gevonden' oefent amor fati — niet het lijden wegdenken, maar de waarde ervan in het geheel omarmen." },
      { domain: "Werk", icon: "💼", text: "Een mislukt project niet enkel 'leren accepteren' maar actief zeggen: 'Dit falen heeft me scherper, zorgvuldiger en bescheidener gemaakt — ik zou het niet willen missen.' Amor fati." },
      { domain: "Gezondheid", icon: "❤️‍🩹", text: "Iemand die een ziekte verwerkt door te zeggen: 'Dit heeft me gedwongen te vertragen en te prioriteren wat ik anders had doorgejut' — de ziekte omarmen als leraar." }
    ],
    prerequisites: ["stoic-dichotomy", "memento-mori"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat onderscheidt amor fati van passieve resignatie?", options: ["Er is geen verschil — beide accepteren wat is", "Amor fati is actief omarmen en betekenis geven; resignatie is passief ondergaan", "Resignatie is gezonder", "Amor fati werkt alleen bij kleine tegenslagen"], correctIndex: 1, explanation: "Resignatie is 'het moet maar'. Amor fati is 'dit is precies wat er moest zijn voor wie ik wil worden'. Het is een actieve, creatieve houding die tegenslagen integreert als betekenisvolle onderdelen van het verhaal, niet als te tolereren pech." }
    ],
    creativePrompt: "Kies de moeilijkste periode of beslissing in je leven. Schrijf op hoe die periode — ondanks of dankzij de pijn — iets heeft gevormd of gegeven wat je anders niet zou hebben. Kun je het omarmen?",
    aiHelperPrompts: ["Hoe oefen ik amor fati bij dingen die ik echt niet wil accepteren?", "Is amor fati een excuus om niet te proberen dingen te veranderen?", "Hoe combineer ik amor fati met de wil tot verbetering?"]
  },
  {
    id: "values-clarification",
    title: "Waardenverduidelijking",
    difficulty: 2,
    emoji: "🧭",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Zingeving",
    tags: ["waarden", "authenticiteit", "beslissingen", "identiteit"],
    definition: "Waardenverduidelijking is het bewust identificeren van je kernwaarden — wat je diepst waardeert in het leven — zodat je beslissingen, prioriteiten en doelen hierop kunt afstemmen. Onduidelijke waarden leiden tot diffuus leven; heldere waarden geven richting en maken keuzes makkelijker.",
    abstractExample: "Waarden zijn als een intern kompas. Zonder kompas dwaal je — elke richting lijkt even goed. Met een helder kompas weet je direct welke richting 'thuisvoelt', ook als de weg moeilijk is.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Iemand die pas ontdekt dat 'autonomie' zijn kernwaarde is, begrijpt waarom hij zich steeds ongelukkig voelde in hiërarchische omgevingen — en kan bewustere carrièrekeuzes maken." },
      { domain: "Relaties", icon: "❤️", text: "Waardenverduidelijking helpt begrijpen waarom bepaalde conflicten steeds terugkeren: als jij 'eerlijkheid' hoog waardeert en je partner 'harmonie', zit daar een fundamentele spanning." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Bij moeilijke beslissingen (huis kopen, job wisselen, verhuizen) heb je minder nodig als je weet: 'Vrijheid en verbinding zijn mijn topwaarden.' Opties die die waarden dienen winnen." }
    ],
    prerequisites: ["ikigai"],
    unlocks: ["philosophical-journaling"],
    exercises: [
      { type: "multipleChoice", question: "Hoe komen mensen er het meest achter wat hun diepste waarden zijn?", options: ["Door een lijst waarden te lezen en de mooiste te kiezen", "Door te observeren wanneer ze zich diep tevreden of diep ontevreden voelen, en dat patroon te analyseren", "Door anderen te vragen wat hun waarden zijn", "Waarden zijn aangeboren en hoeven niet ontdekt te worden"], correctIndex: 1, explanation: "Echte waarden blijken niet altijd uit wat mensen zeggen te waarderen, maar uit hoe ze reageren op ervaringen. Sterke emoties — vreugde, woede, schaamte — zijn signalen dat een waarde wordt geëerd of geschonden. Die patronen onthullen de echte waarden." }
    ],
    creativePrompt: "Schrijf drie momenten op waarop je je diep tevreden voelde. Drie momenten waarop je je diep verontwaardigd of ongelukkig voelde. Welke waarden werden in die momenten geëerd of geschonden? Dat zijn waarschijnlijk jouw kernwaarden.",
    aiHelperPrompts: ["Hoe weet ik of iets een echte waarde is of alleen een 'zou moeten'?", "Wat doe ik als mijn waarden conflicteren?", "Hoe gebruik ik waarden bij moeilijke beslissingen?"]
  },
  {
    id: "philosophical-journaling",
    title: "Filosofisch Dagboek",
    difficulty: 1,
    emoji: "📓",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Zingeving",
    tags: ["reflectie", "schrijven", "filosofie", "zelfkennis"],
    definition: "Filosofisch dagboek schrijven is de praktijk van regelmatig schriftelijk reflecteren op je ervaringen, overtuigingen, waarden en vragen — in de traditie van Marcus Aurelius' Meditaties. Het externaliseren van gedachten maakt ze concreet, analyseerbaar en transformeerbaar.",
    abstractExample: "Gedachten in het hoofd zijn vluchtig en circulair. Op papier gezet worden ze concreet: je kunt ze observeren, bevragen en aanpassen. Het dagboek is een spiegel die terugkijkt met helderheid.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "Marcus Aurelius schreef zijn Meditaties als persoonlijk dagboek — niet voor publicatie. Drie stoeages per dag: dankbaarheid, een filosofisch principe om te oefenen, en reflectie op de dag." },
      { domain: "Werk", icon: "💼", text: "Na een moeilijke vergadering schrijven: 'Wat maakte me defensief? Welke waarde voelde ik bedreigd? Hoe wil ik de volgende keer reageren?' Dit verdiept zelfkennis sneller dan onbewerkte ervaring." },
      { domain: "Persoonlijk", icon: "💙", text: "De 'morning pages' methode (drie pagina's stroom van bewustzijn elke ochtend) helpt gedachten leeg te maken, patronen te ontdekken en innerlijke helderheid te vinden." }
    ],
    prerequisites: ["values-clarification"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat maakt schriftelijke reflectie effectiever dan alleen nadenken?", options: ["Schrijven duurt langer", "Externalisatie maakt gedachten concreet, zichtbaar en daarmee bespreekbaar en veranderbaar", "Schriftelijke reflectie is makkelijker", "Alleen professionele schrijvers profiteren ervan"], correctIndex: 1, explanation: "Gedachten in het hoofd zijn vaag, circulair en vluchtig. Ze opschrijven dwing je tot precisie, sluit cirkels af en maakt abstracte gevoelens concreet. Bovendien kun je teruglezen en patronen zien over tijd." }
    ],
    creativePrompt: "Schrijf tien minuten onafgebroken over de vraag: 'Wat is op dit moment het belangrijkst in mijn leven?' Stel geen regels, geen correct-incorrectoordeel. Wat ontdek je?",
    aiHelperPrompts: ["Hoe begin ik met filosofisch dagboekschrijven?", "Welke vragen stel ik mezelf in mijn dagboek?", "Hoe lang moet mijn dagboekinschrijving zijn?"]
  },
  {
    id: "examined-life",
    title: "Het Onderzochte Leven",
    difficulty: 3,
    emoji: "🦉",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Zingeving",
    tags: ["filosofie", "Socrates", "zelfkennis", "reflectie"],
    definition: "Socrates stelde dat 'een leven dat niet onderzocht wordt, niet waard is om geleefd te worden.' Het onderzochte leven is de praktijk van actieve, kritische zelfreflectie op je overtuigingen, waarden, keuzes en leven — niet als eenmalig project maar als voortdurende houding.",
    abstractExample: "Veel mensen leven reactief — gevangen in routines, aannames en conventies die ze nooit hebben gekozen of bevraagd. Het onderzochte leven vraagt: 'Waarom doe ik dit? Is dit wat ik werkelijk wil? Klopt dit met wie ik wil zijn?'",
    examples: [
      { domain: "Werk", icon: "💼", text: "Iemand die na 15 jaar in dezelfde sector vraagt: 'Heb ik dit bewust gekozen, of ben ik hier gebleven door gemak en angst?' Dit is het onderzochte leven — niet automatisch maar bewust kiezen." },
      { domain: "Overtuigingen", icon: "🧠", text: "Je politieke of religieuze overtuigingen bevragen: 'Heb ik dit zelf doorgedacht, of heb ik het overgenomen? Zou ik hetzelfde geloven als ik in andere omstandigheden was opgegroeid?'" },
      { domain: "Relaties", icon: "❤️", text: "Vragen: 'Waarom hecht ik waarde aan deze vriendschap? Wat breng ik erin? Wat verwacht ik?' Dit maakt relaties bewuster en authentieker." }
    ],
    prerequisites: ["philosophical-journaling", "values-clarification"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat was Socrates' belangrijkste punt over het ononderzochte leven?", options: ["Mensen die niet nadenken zijn dom", "Zonder kritische reflectie leef je het leven van anderen — conventies, verwachtingen, angsten — niet jouw eigen gekozen leven", "Onderzoek maakt altijd ongelukkig", "Alleen filosofen hebben het onderzochte leven nodig"], correctIndex: 1, explanation: "Socrates' punt was dat een leven zonder reflectie geen authentiek eigen leven is — je bent dan een marionnet van culturele conditionering, andermans verwachtingen en onbevraagde impulsen. Onderzoek is de weg naar vrijheid." }
    ],
    creativePrompt: "Kies één fundamentele overtuiging in je leven (over succes, relaties, God, politiek, of een andere waarde). Onderzoek haar: Waar komt ze vandaan? Heb je haar bewust gekozen? Zou je haar nog steeds kiezen als je opnieuw kon beginnen?",
    aiHelperPrompts: ["Hoe onderzoek ik mijn overtuigingen zonder alles te verliezen?", "Hoe ga ik om met de onzekerheid die het onderzochte leven brengt?", "Wat is het doel van het onderzochte leven?"]
  },
  {
    id: "legacy-thinking",
    title: "Nagedachtenisdenken",
    difficulty: 2,
    emoji: "🌳",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Zingeving",
    tags: ["erfenis", "bijdrage", "zingeving", "langetermijn"],
    definition: "Nagedachtenisdenken is het bewust nadenken over welke bijdrage, invloed of waarden je wil achterlaten — hoe je herinnerd wilt worden en welk verschil je wil maken. Dit vergroot tijdshorizon, richt handelen en geeft persoonlijk en professioneel werk een diepere betekenis.",
    abstractExample: "Een boom plant zijn wortels niet voor zichzelf — hij biedt schaduw aan mensen die hij nooit zal kennen. Nagedachtenisdenken is bewust handelen vanuit een horioznt die verder reikt dan je eigen leven.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een manager die zich afvraagt: 'Over twintig jaar, wat zullen mensen zeggen over wat ik hier heb opgebouwd? Welke mensen heb ik ontwikkeld?' Dit geeft dagelijkse handelingen meer gewicht en richting." },
      { domain: "Ouderschap", icon: "👨‍👩‍👧", text: "Ouders die nadenken over welke waarden, gewoontes en levenslessen ze doorgeven — niet welke regels ze stellen — denken vanuit nagedachtenis." },
      { domain: "Gemeenschap", icon: "🏘️", text: "Vrijwilligerswerk, mentorschap, bijdragen aan iets groters dan jezelf — dit zijn uitingen van nagedachtenisdenken in de dagelijkse praktijk." }
    ],
    prerequisites: ["memento-mori", "values-clarification"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Hoe helpt nagedachtenisdenken bij dagelijkse beslissingen?", options: ["Het maakt beslissingen moeilijker door te veel perspectief", "Het schept een langetermijnkader dat helpt onderscheid te maken tussen wat urgent voelt en wat werkelijk belangrijk is", "Het werkt alleen voor beroemde mensen", "Nagedachtenis is pas relevant op het einde van een leven"], correctIndex: 1, explanation: "De meeste urgente dagelijkse stress lost op als je hem beoordeelt vanuit het perspectief van wat je over twintig jaar wil hebben gedaan. Nagedachtenisdenken fungeert als een filter: wat verdient werkelijk mijn energie?" }
    ],
    creativePrompt: "Schrijf de laatste alinea van je autobiografie — wat je over je leven en bijdrage wil zeggen. Bekijk dan je afgelopen week: sluit die week aan bij die alinea? Wat zou je anders doen?",
    aiHelperPrompts: ["Hoe vind ik wat mijn nagedachtenis moet zijn?", "Hoe ga ik om met het gevoel dat ik niets bijzonders bijdraag?", "Hoe gebruik ik nagedachtenisdenken om dagelijkse keuzes te maken?"]
  },
  {
    id: "eudaimonia",
    title: "Eudaimonia",
    difficulty: 3,
    emoji: "🌟",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Zingeving",
    tags: ["geluk", "Aristoteles", "bloei", "deugd"],
    definition: "Eudaimonia (Aristoteles) is het concept van menselijke bloei — een dieper, duurzamer geluk dan hedonistisch genot. Het gaat om een actief leven in overeenstemming met je beste vermogens en deugden. Eudaimonia is een activiteit, geen gevoel: je doet het, je ervaart het niet passief.",
    abstractExample: "Hedonistisch geluk is lekker eten, mooie muziek, plezier. Eudaimonia is de voldoening van je beste zelf worden — uitdagingen aangaan, bijdragen, groeien. Het eerste is meer aangenaam; het tweede is meer vervullend.",
    examples: [
      { domain: "Werk", icon: "💼", text: "De voldoening van een moeilijk project dat je hart klopte — niet omdat het makkelijk was, maar juist omdat het je uitdaagde en het iets nieuws van je vroeg. Dat is eudaimonia, niet hedonia." },
      { domain: "Sport", icon: "🏃", text: "De vreugde na een zware training is anders dan de vreugde van een lekker maaltijd. De eerste is eudaimonisch — resultaat van inzet; de tweede hedonistisch — directe zintuigelijkheid." },
      { domain: "Relaties", icon: "❤️", text: "Diep investeren in vriendschappen die je uitdagen en groeien, niet alleen die comfortabel zijn. Eudaimonia in relaties gaat over diepe verbinding en wederzijdse groei." }
    ],
    prerequisites: ["examined-life", "values-clarification"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het kernverschil tussen hedonistisch geluk en eudaimonia?", options: ["Hedonistisch geluk is dieper", "Hedonistisch geluk is passief genot; eudaimonia is de voldoening van actief leven in overeenstemming met je beste vermogens", "Eudaimonia is alleen voor filosofen", "Ze zijn synoniem voor geluk"], correctIndex: 1, explanation: "Aristoteles zag eudaimonia als superieur: het is niet hoe je je voelt, maar hoe je leeft. Actieve inzet van je vermogens in dienst van iets goeds — dit is waar mensen diepst tevreden over zijn aan het einde van hun leven." }
    ],
    creativePrompt: "Wanneer in je leven voelde je de diepe voldoening van eudaimonia — niet het plezier van genot maar de vervulling van je beste zelf? Wat kenmerkte die momenten?",
    aiHelperPrompts: ["Hoe balanceer ik hedonistisch genot en eudaimonia?", "Hoe weet ik wat mijn 'beste vermogens' zijn?", "Is eudaimonia haalbaar in een gewoon dagelijks leven?"]
  },
  {
    id: "present-moment-focus",
    title: "Focus op het Huidige Moment",
    difficulty: 2,
    emoji: "🕐",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Zingeving",
    tags: ["aanwezigheid", "mindfulness", "nu", "aandacht"],
    definition: "Focus op het huidige moment is de praktijk van volledige aandacht geven aan wat nu is, in plaats van te piekeren over het verleden of te fantaseren over de toekomst. Onderzoek toont dat een 'wandering mind' — de geest die niet bij wat men doet is — gecorreleerd is met minder geluk.",
    abstractExample: "Tachtig procent van onze geestelijke activiteit is niet gericht op het huidige moment. Het verleden is voorbij; de toekomst is nog niet. Het enige moment waarop je werkelijk leeft, is nu — toch besteden de meeste mensen het meeste mentale energie elders.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "Een maaltijd eten zonder telefoon, volledig aanwezig bij de smaak, textuur en gezelschap — dit klinkt simpel maar is voor de meeste mensen zeldzaam en waardevol." },
      { domain: "Werk", icon: "💼", text: "Volledig aanwezig zijn in een vergadering — niet tegelijk e-mail checken of nadenken over de volgende taak — leidt tot betere bijdragen en minder vermoeidheid na afloop." },
      { domain: "Natuur", icon: "🌿", text: "Een wandeling waarbij je echt kijkt, hoort en voelt — in plaats van plannen te maken of problemen te malen — herstelt de aandacht en geeft energie op een manier die alleen-lopend niet doet." }
    ],
    prerequisites: ["mindfulness-practice"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat toonde Harvard-onderzoek naar 'mind wandering' aan?", options: ["Een dwalende geest is creatiever", "Mensen zijn minder gelukkig als hun geest niet bij de huidige activiteit is, ongeacht welke activiteit ze doen", "Mind wandering is gezond en noodzakelijk", "Aanwezigheid maakt mensen minder productief"], correctIndex: 1, explanation: "Het Harvard-onderzoek (Killingsworth & Gilbert) mat duizenden mensen en vond dat een dwalende geest — zelfs bij aangename activiteiten — consistent lagere geluksniveaus gaf dan een aanwezige geest. 'Een geest die niet ronddwaalt, is een gelukkige geest.'" }
    ],
    creativePrompt: "Kies één dagelijkse activiteit die je normaal 'op de automatische piloot' doet. Doe het morgen volledig bewust — geef er al je zintuigen en aandacht aan. Wat merk je dat je anders normaal mist?",
    aiHelperPrompts: ["Hoe train ik focus op het huidige moment in een druk leven?", "Wat doe ik als mijn geest steeds afdwaalt naar zorgen?", "Hoe verschilt focus op het nu van vermijding van de toekomst?"]
  },
  {
    id: "categorical-imperative",
    title: "Categorische Imperatief",
    difficulty: 3,
    emoji: "⚖️",
    academicCategory: "Filosofie & Ethiek",
    skillCategory: "Zingeving",
    tags: ["ethiek", "Kant", "moraal", "universaliteit"],
    definition: "De categorische imperatief (Immanuel Kant) is een moreel principe: 'Handel alleen op grond van die maxime waarvan je tegelijkertijd kunt willen dat ze een algemene wet wordt.' Anders gezegd: doe alleen wat je zou willen dat iedereen doet in dezelfde situatie.",
    abstractExample: "Voordat je liegt, vraag: 'Wat als iedereen loog wanneer het hen uitkwam?' De samenleving zou instorten — vertrouwen is onmogelijk zonder eerlijkheid. Dus: liegen is moreel verkeerd, ongeacht de gevolgen voor jou.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Je overweegt je prestaties op je cv op te blazen. Kategorische imperatief: 'Wat als iedereen dit deed?' CV's zouden zinloos worden. Conclusie: het mag niet, ongeacht hoe klein de leugen lijkt." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Afval dumpen in de natuur: 'Wat als iedereen dit deed?' Natuur raakt vernield. De maxime kan niet universeel worden gewild — dus het is verkeerd." },
      { domain: "Relaties", icon: "❤️", text: "Beloftes breken als het uitkomt: 'Wat als iedereen beloftes brak wanneer het handig was?' Belofte als instituut verliest alle betekenis. Kant: beloftes zijn heilig." }
    ],
    prerequisites: [],
    unlocks: ["moral-realism"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het centrale criterium in Kants categorische imperatief?", options: ["Het goede gevoel dat een handeling geeft", "Of de maxime van de handeling universaliseerbaar is zonder zichzelf te ondermijnen", "De gevolgen van de handeling voor de meeste mensen", "De intentie van de persoon die handelt"], correctIndex: 1, explanation: "Kant wilde een objectief moreel principe dat onafhankelijk van gevoel of gevolg werkte. De universaliseerbaarheidstest vraagt: als iedereen zo handelde, zou de handeling zichzelf logisch tegenspreken of de samenleving vernietigen? Dan is het moreel verboden." }
    ],
    creativePrompt: "Kies een morele grenszone die je zelf ervaart (kleine leugentjes, belasting, regels omzeilen). Pas Kants test toe: wat als iedereen dit deed? Hoe voelt die gedachte?",
    aiHelperPrompts: ["Hoe verschilt Kant van consequentialism?", "Is de categorische imperatief realistisch in het echte leven?", "Hoe ga ik om met Kants principes als ze leiden tot ondraaglijk resultaat?"]
  },
  {
    id: "utilitarianism",
    title: "Utilitarisme",
    difficulty: 2,
    emoji: "⚖️",
    academicCategory: "Filosofie & Ethiek",
    skillCategory: "Zingeving",
    tags: ["ethiek", "gevolgen", "welzijn", "Bentham"],
    definition: "Utilitarisme (Bentham, Mill) is de ethische theorie dat een handeling moreel juist is als ze het totale geluk (of welzijn) van alle betrokkenen maximaliseert. Het is een consequentialistische ethiek: de morele waarde van een handeling hangt uitsluitend af van haar gevolgen.",
    abstractExample: "Stel je vijf mensen op een treinspoor en één op een zijspoor. Je kunt de trein omzetten — één persoon sterft, vijf worden gered. Utilitarisme: zet om (meer geluk, minder leed). Kant: nooit actief iemand doden (ook al redt het vijf). Dit is het trolleyprobleem.",
    examples: [
      { domain: "Beleid", icon: "🏛️", text: "Vaccinatiebeleid is utilitaristisch: beperkte individuele keuzevrijheid voor maximale collectieve gezondheidswinst. De meeste gezondheidsmaatregelen denken in termen van totale welzijnsmaximalisatie." },
      { domain: "Werk", icon: "💼", text: "Een moeilijk besluit om één medewerker te ontslaan om tien banen te redden — utilitaristisch redeneren. Maar het negeert de impact op die ene persoon specifiek." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Het verdelen van schaarse middelen (wie krijgt het laatste orgaan? wie gaat er voor in de rij?) is bijna altijd impliciet utilitaristisch van aard." }
    ],
    prerequisites: ["categorical-imperative"],
    unlocks: ["moral-realism"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de grootste kritiek op het utilitarisme?", options: ["Het is te ingewikkeld om te berekenen", "Het kan individuen opofferen voor het grotere goed, wat fundamentele rechten schendt", "Het werkt alleen in theorie", "Het negeert gevolgen volledig"], correctIndex: 1, explanation: "Utilitarisme kan legitimeren dat minderheden worden opgeofferd als de meerderheid er genoeg van profiteert. Dit botst met intuïties over onvervreemdbare rechten — het verkrachten van één persoon kan nooit 'goed' zijn, ook niet als tien anderen er blij van worden." }
    ],
    creativePrompt: "Denk aan een moeilijke morele keuze in je leven. Redeneer er eerst utilitaristisch over (wat maximaliseert het totale welzijn?), dan deontologisch (Kant: wat is je plicht, ongeacht gevolgen?). Welk antwoord voelt juister en waarom?",
    aiHelperPrompts: ["Hoe verschilt Mill's utilitarisme van Bentham's?", "Wanneer leidt utilitarisme tot onacceptabele conclusies?", "Hoe gebruik ik utilitaristisch denken in dagelijkse beslissingen?"]
  },
  {
    id: "moral-realism",
    title: "Moreel Realisme vs. Relativisme",
    difficulty: 3,
    emoji: "🌐",
    academicCategory: "Filosofie & Ethiek",
    skillCategory: "Zingeving",
    tags: ["ethiek", "objectiviteit", "relativisme", "moraal"],
    definition: "Moreel realisme is de opvatting dat morele feiten objectief bestaan, onafhankelijk van wat mensen denken of voelen. Moreel relativisme stelt dat morele oordelen enkel gelden binnen een cultuur of persoon. Het debat hierover raakt aan fundamentele vragen over de basis van ethiek.",
    abstractExample: "Is slavernij altijd moreel fout, of was het 'goed' in culturen die het normaal vonden? Realisten zeggen: fout, altijd en overal. Relativisten zeggen: morele oordelen gelden alleen binnen een cultureel kader. Beide standpunten hebben radicale implicaties.",
    examples: [
      { domain: "Politiek", icon: "🏛️", text: "Mensenrechten zijn gebaseerd op moreel realisme: ze gelden universeel, ongeacht culturele context. Relativisme zou impliceren dat mensenrechtenschendingen 'goed' kunnen zijn in culturen die ze accepteren." },
      { domain: "Persoonlijk", icon: "💙", text: "Zeggen 'Wie ben ik om te oordelen over een andere cultuur?' is een relativistische houding. Zeggen 'Marteling van kinderen is altijd verkeerd' is een realistische uitspraak." },
      { domain: "Filosofie", icon: "🦉", text: "Kan de wetenschap morele feiten ontdekken? Sam Harris denkt van wel. Veel filosofen zijn sceptisch. Dit is het hart van het realisme-relativisme debat." }
    ],
    prerequisites: ["utilitarianism"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke uitdaging stelt moreel relativisme voor aan het concept mensenrechten?", options: ["Relativisme versterkt mensenrechten", "Als morele oordelen cultuurgebonden zijn, kunnen mensenrechten niet universeel worden geclaimd", "Relativisme is neutraal over mensenrechten", "Mensenrechten zijn niet moreel van aard"], correctIndex: 1, explanation: "Als morele oordelen alleen gelden binnen culturele kaders, is er geen basis om culturen te veroordelen die andere waarden hanteren. Dit ondermijnt universele mensenrechten fundamenteel — een van de sterkste argumenten tegen radicaal moreel relativisme." }
    ],
    creativePrompt: "Kies een culturele praktijk ergens ter wereld die je moreel verkeerd vindt. Is dat oordeel absoluut (moreel realistisch) of enkel vanuit jouw cultureel perspectief (relativistisch)? Hoe verdedig je je standpunt?",
    aiHelperPrompts: ["Hoe vermijd ik moreel relativisme dat leidt tot passiviteit bij onrecht?", "Hoe vermijd ik moreel arrogantie als ik universele oordelen vel?", "Bestaat er een middenweg tussen relativisme en dogmatisch realisme?"]
  },
  {
    id: "trolley-problem",
    title: "Het Trolleyprobleem",
    difficulty: 2,
    emoji: "🚋",
    academicCategory: "Filosofie & Ethiek",
    skillCategory: "Zingeving",
    tags: ["ethiek", "dilemma", "intuïtie", "moreel redeneren"],
    definition: "Het trolleyprobleem (Philippa Foot, Judith Jarvis Thomson) is een gedankenexperiment dat morele intuïties blootlegt: mag je actief één persoon doden om vijf te redden? De meeste mensen zeggen 'ja' bij een hendel, 'nee' bij het duwen van een persoon — terwijl het rekenkundig identiek is.",
    abstractExample: "Vijf mensen zijn vastgebonden aan een spoor. Een trein komt eraan. Je kunt: (A) een hendel overhalen die de trein omlegt — één persoon sterft; (B) niets doen — vijf sterven. De meeste mensen kiezen A. Maar: mag je een dikke man van een brug duwen om met zijn lichaam de trein te stoppen en vijf te redden? De meeste mensen zeggen nee — terwijl de berekening identiek is.",
    examples: [
      { domain: "Geneeskunde", icon: "🏥", text: "Orgaantoewijzing: één patiënt weigeren om vijf anderen te redden is moreel geaccepteerd. Een patiënt aktief doden voor zijn organen is dat niet — hoewel de uitkomst hetzelfde kan zijn." },
      { domain: "Oorlog", icon: "⚔️", text: "Collateral damage (burgerslachtoffers om militaire doelen te bereiken) is een reëel trolleydilemma dat legerethici dagelijks confronteert." },
      { domain: "Tech", icon: "💻", text: "Zelfrijdende auto's moeten geprogrammeerd worden om te 'kiezen' bij onvermijdelijke botsingen. Hoe? Dit is het trolleyprobleem als softwareontwerp." }
    ],
    prerequisites: ["utilitarianism", "categorical-imperative"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Waarom reageren de meeste mensen anders op de hendel- versus de brug-versie, terwijl de uitkomst identiek is?", options: ["Mensen zijn inconsistent en irrationeel", "De psychologische afstand en het directe handelen (aanraken) activeren andere morele intuïties dan indirect handelen", "De uitkomsten zijn niet werkelijk identiek", "De meeste mensen zijn utilitaristisch"], correctIndex: 1, explanation: "Onderzoek toont dat persoonlijk fysiek contact (iemand duwen) sterkere deontologische intuïties activeert dan afstandelijk handelen (hendel). Dit onthult dat morele oordelen niet puur rationeel zijn maar deels worden bepaald door emotionele en evolutionaire systemen." }
    ],
    creativePrompt: "Welke versie van het trolleyprobleem vind jij moeilijker en waarom? Wat zegt de inconsistentie (als die er is) tussen je antwoorden over hoe jij moreel redeneert?",
    aiHelperPrompts: ["Wat leert het trolleyprobleem ons over hoe we ethisch redeneren?", "Hoe gebruiken filosofen gedankenexperimenten om ethiek te onderzoeken?", "Zijn er echte toepassingen van het trolleydilemma in beleidsmaker?"]
  },
  {
    id: "virtue-ethics",
    title: "Deugdethiek",
    difficulty: 2,
    emoji: "🦁",
    academicCategory: "Filosofie & Ethiek",
    skillCategory: "Zingeving",
    tags: ["Aristoteles", "deugd", "karakter", "ethiek"],
    definition: "Deugdethiek (Aristoteles) vraagt niet 'Wat moet ik doen?' maar 'Wat voor persoon moet ik zijn?' Het gaat om het cultiveren van karaktereigenschappen (deugden) zoals moed, eerlijkheid, rechtvaardigheid en gematigdheid — niet om regels of gevolgen.",
    abstractExample: "Een deugenethicus vraagt niet 'Is liegen toegestaan?' maar 'Zou een eerlijk persoon in mijn situatie liegen?' Karakter is het kompas, niet regels of berekeningen. Je wordt wat je herhaaldelijk doet.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Integriteit op de werkvloer is deugdethiek in actie: niet 'Wat mag ik er mee wegkomen?' maar 'Hoe zou iemand met integriteit hier handelen?' Het gaat om wie je bent, niet wat je kunt." },
      { domain: "Relaties", icon: "❤️", text: "Een goede vriend zijn als deugdethische praktijk: niet wat vriendschap verplicht, maar welke eigenschappen een goede vriend heeft, en die actief cultiveren." },
      { domain: "Opvoeding", icon: "👨‍👩‍👧", text: "Kinderen opvoeden met deugdethiek: niet regels geven maar karaktereigenschappen voorleven — moed, eerlijkheid, vriendelijkheid — zodat het kind een moreel kompas ontwikkelt." }
    ],
    prerequisites: ["categorical-imperative"],
    unlocks: ["eudaimonia"],
    exercises: [
      { type: "multipleChoice", question: "Hoe verschilt deugdethiek van Kants plichtethiek?", options: ["Deugdethiek geeft dezelfde antwoorden als Kant", "Deugdethiek richt zich op karakter en wie je bent; Kant richt zich op plicht en wat je doet", "Kant heeft ook deugdethiek geschreven", "Ze zijn hetzelfde maar voor verschillende culturen"], correctIndex: 1, explanation: "Kant vraagt: 'Wat is je plicht?' (deontologie). Deugdethiek vraagt: 'Wat voor persoon ben je?' Beide kijken naar het handelen, maar het referentiepunt verschilt: externe wet vs. intern karakter." }
    ],
    creativePrompt: "Welke drie deugden wil jij het sterkst cultiveren in de komende vijf jaar? Welk concrete dagelijks gedrag zou elk van die deugden uitdrukken? Begin met één.",
    aiHelperPrompts: ["Hoe cultiveer ik deugden als ze niet van nature bij me komen?", "Welke deugden zijn het meest waardevol in de moderne wereld?", "Hoe verschilt deugdethiek van karakterontwikkeling in de psychologie?"]
  },
  {
    id: "social-contract",
    title: "Sociaal Contract",
    difficulty: 2,
    emoji: "📜",
    academicCategory: "Filosofie & Ethiek",
    skillCategory: "Zingeving",
    tags: ["politiek", "Rousseau", "Locke", "rechtvaardigheid"],
    definition: "Het sociaal contract (Hobbes, Locke, Rousseau) is de filosofische theorie dat politieke autoriteit gebaseerd is op een (impliciete) overeenkomst tussen individuen: zij geven bepaalde vrijheden op in ruil voor bescherming, orde en gezamenlijk voordeel. Het legt de basis voor modern democratisch denken.",
    abstractExample: "Stel je een wereld voor zonder regels — iedereen voor zichzelf. Hobbes noemde dit 'een oorlog van allen tegen allen'. Mensen sluiten dan vrijwillig een contract: we creëren samen regels en een overheid, en geven daarvoor deel van onze ongebreidelde vrijheid op.",
    examples: [
      { domain: "Politiek", icon: "🏛️", text: "Belasting betalen is een vorm van het sociaal contract: je staat deel van je inkomen af in ruil voor wegen, onderwijs, veiligheid — collectieve goederen die niemand alleen kan organiseren." },
      { domain: "Werk", icon: "💼", text: "Een arbeidscontract is een micro-sociaal contract: jij geeft tijd en inspanning; de werkgever geeft salaris en zekerheid. Beide geven iets op voor wederzijds voordeel." },
      { domain: "Gemeenschap", icon: "🏘️", text: "Buurtregels, HOA-overeenkomsten, Wikipedia-richtlijnen — allemaal micro-versies van het sociaal contract: individuen stemmen in met regels voor collectief voordeel." }
    ],
    prerequisites: [],
    unlocks: ["moral-realism"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het centrale dilemma in het sociaal contractdenken?", options: ["Hoe groot de overheid moet zijn", "Hoeveel vrijheid mensen bereid zijn op te geven voor veiligheid en orde, en wie dat contract bepaalt", "Of belasting ethisch is", "Hoe democratie werkt"], correctIndex: 1, explanation: "Het fundamentele dilemma is de spanning tussen individuele vrijheid en collectieve orde. Hobbes wil meer orde (sterke staat); Locke en Rousseau meer vrijheid. Dit debat is de basis van moderne politieke filosofie." }
    ],
    creativePrompt: "Welke regels in jouw samenleving vind jij een eerlijke ruil (vrijheid voor voordeel) en welke niet? Wat maakt een social contract in jouw ogen legitiem of illegitiem?",
    aiHelperPrompts: ["Hoe verschilt Hobbes van Locke in hun visie op het sociaal contract?", "Is het sociaal contract een realistische beschrijving of een nuttige fictie?", "Hoe is Rawls' sluier van onwetendheid een moderne versie van het sociaal contract?"]
  },
  {
    id: "existentialism",
    title: "Existentialisme",
    difficulty: 3,
    emoji: "🌑",
    academicCategory: "Filosofie & Ethiek",
    skillCategory: "Zingeving",
    tags: ["existentialisme", "vrijheid", "verantwoordelijkheid", "Sartre"],
    definition: "Existentialisme (Sartre, Camus, de Beauvoir) is de filosofische stroming die stelt dat mensen geen vooraf bepaald wezen of doel hebben ('existentie gaat aan essence vooraf'). We zijn volledig vrij en volledig verantwoordelijk voor wie we worden — en dat vrijheid is zowel bevrijdend als angstaanjagend.",
    abstractExample: "Een stoel heeft een doel dat de maker bepaalde. Mensen hebben geen vooraf bepaald doel — we zijn als een blanco canvas. Dit is radicale vrijheid: jij bepaalt de betekenis van je leven. En die vrijheid brengt ook radicale verantwoordelijkheid.",
    examples: [
      { domain: "Persoonlijk", icon: "💙", text: "Sartre's concept 'bad faith' (mauvaise foi): jezelf voordoen alsof je geen keuze hebt ('Ik ben nou eenmaal zo', 'Ik had geen andere keus') is zelfbedrog. Altijd is er een keuze, ook als die pijnlijk is." },
      { domain: "Werk", icon: "💼", text: "Zeggen 'Mijn werk is mijn identiteit' is existentialistische bad faith: je reduceert jezelf tot een rol. Sartre: je bent altijd meer dan de functies die je vervult." },
      { domain: "Maatschappij", icon: "🏛️", text: "Camus' absurdisme: het leven heeft geen inherente betekenis, maar de rebel — die betekenis creëert ondanks de absurditeit — is vrijer dan wie zich neerlegt bij passiviteit of valse zekerheden." }
    ],
    prerequisites: ["examined-life"],
    unlocks: ["amor-fati"],
    exercises: [
      { type: "multipleChoice", question: "Wat bedoelt Sartre met 'existentie gaat aan essence vooraf'?", options: ["We bestaan voor een essentieel doel", "Mensen hebben geen vooraf bepaalde aard — we bepalen onszelf door onze keuzes en daden", "Essentie is belangrijker dan bestaan", "Filosofie gaat voor praktijk"], correctIndex: 1, explanation: "In tegenstelling tot religieuze of essentialistische visies (mensen hebben een door God of natuur bepaald doel), stelt Sartre dat mensen eerst bestaan, dan zichzelf definiëren door hun keuzes. Dit maakt ons radicaal vrij én radicaal verantwoordelijk." }
    ],
    creativePrompt: "In welk deel van je leven handelt je vanuit 'bad faith' — alsof je geen keuze hebt, terwijl je die wel hebt? Wat zou je kiezen als je de volle verantwoordelijkheid aannam?",
    aiHelperPrompts: ["Hoe ga ik om met de angst die radicale vrijheid met zich meebrengt?", "Wat is het verschil tussen existentialisme en nihilisme?", "Hoe past Camus' absurdisme bij existentialisme?"]
  },
  {
    id: "epistemic-humility",
    title: "Epistemische Bescheidenheid",
    difficulty: 2,
    emoji: "🙇",
    academicCategory: "Filosofie & Ethiek",
    skillCategory: "Zingeving",
    tags: ["kennis", "onzekerheid", "epistemologie", "bescheidenheid"],
    definition: "Epistemische bescheidenheid is de intellectuele houding van erkennen dat je kennis en overtuigingen onvolledig, feilbaar en beïnvloed zijn door je perspectief en ervaring. Het is de bereidheid te twijfelen, te updaten en andermans perspectieven serieus te nemen — zonder relativisme.",
    abstractExample: "Het verschil tussen 'Ik weet het' en 'Ik denk het met hoge zekerheid' is epistemische bescheidenheid. De eerste sluit verdere informatie uit; de tweede houdt ruimte voor correctie. Een groot wetenschapper vraagt altijd: 'Hoe kan ik dit falsifiëren?'",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een manager die zegt 'Ik kan het mis hebben — vertel me waarom ik fout zit' geeft epistemische bescheidenheid blijk en creëert een cultuur van eerlijkheid en leren." },
      { domain: "Politiek", icon: "🏛️", text: "Politici die toegeven 'We hadden het mis' over beleid (ipv spin) tonen epistemische bescheidenheid — zeldzaam maar effectief voor langetermijnvertrouwen." },
      { domain: "Persoonlijk", icon: "💙", text: "Je overtuigingen bijstellen op basis van nieuwe informatie — in plaats van nieuwe info te filteren om bestaande overtuigingen te bevestigen — is epistemische bescheidenheid in de praktijk." }
    ],
    prerequisites: [],
    unlocks: ["moral-realism"],
    exercises: [
      { type: "multipleChoice", question: "Wat onderscheidt epistemische bescheidenheid van relativisme?", options: ["Ze zijn hetzelfde", "Bescheidenheid erkent dat kennis feilbaar is; relativisme ontkent dat sommige overtuigingen beter zijn dan andere", "Relativisme is bescheidener", "Bescheidenheid heeft geen positief kennisbegrip"], correctIndex: 1, explanation: "Epistemische bescheidenheid zegt: 'Mijn overtuigingen kunnen fout zijn, ik update ze op basis van bewijs.' Relativisme zegt: 'Alle overtuigingen zijn even geldig.' De eerste is een deugd; de tweede leidt tot intellectuele stasis." }
    ],
    creativePrompt: "Kies drie overtuigingen die je heel zeker houdt. Voor elke overtuiging: welk bewijs zou je doen twijfelen of je mening doen veranderen? Als je geen antwoord kunt geven, is dat een rode vlag.",
    aiHelperPrompts: ["Hoe oefen ik epistemische bescheidenheid zonder alles te betwijfelen?", "Hoe onderscheid ik overtuigingen waar ik terecht zeker over ben van overmoedigheid?", "Hoe ga ik om met mensen die geen epistemische bescheidenheid tonen?"]
  },
  {
    id: "golden-rule",
    title: "De Gulden Regel",
    difficulty: 1,
    emoji: "🌿",
    academicCategory: "Filosofie & Ethiek",
    skillCategory: "Zingeving",
    tags: ["empathie", "ethiek", "universeel", "religie"],
    definition: "De Gulden Regel ('Behandel anderen zoals je zelf behandeld wil worden') is het meest universele ethische principe — aanwezig in vrijwel alle grote religies en filosofieën. Het is de basisvorm van perspectiefname als morele handlingsrichtlijn.",
    abstractExample: "Confucius, Jezus, Hillel, Mohammed — allemaal formuleerden ze versies van hetzelfde principe. Dit universalisme suggereert dat de Gulden Regel een diepgeworteld menselijk moreel inzicht uitdrukt dat cultuuroverstijgend is.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een manager die overweegt een medewerker onverwacht zijn contract te beëindigen, vraagt zichzelf: 'Hoe zou ik het willen dat dit werd gedaan als het mij overkwam?' Dat beïnvloedt het proces." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Bij elke kritische reactie op social media: 'Zou ik willen dat iemand dit over mij schrijft?' Zo simpel — en zo zelden toegepast." },
      { domain: "Zaken", icon: "💰", text: "Een leverancier die aan klanten levert zoals hij zelf als klant behandeld wil worden — eerlijk, transparant, tijdig — bouwt duurzamere relaties dan een kortetermijnoptimizer." }
    ],
    prerequisites: [],
    unlocks: ["categorical-imperative", "virtue-ethics"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de beperking van de Gulden Regel?", options: ["Ze is te simpel", "Ze gaat ervan uit dat anderen dezelfde wensen en behoeften hebben als jij", "Ze is te moeilijk toe te passen", "Ze is niet universeel"], correctIndex: 1, explanation: "De Platina Regel verbetert de Gulden Regel: 'Behandel anderen zoals zíj behandeld willen worden.' Mensen verschillen — wat jij prettig vindt (veel lof in het openbaar) kan voor een ander (introverte voorkeur voor private feedback) onaangenaam zijn." }
    ],
    creativePrompt: "Denk aan drie recente interacties met anderen. Hoe zou jij willen dat je zelf in die situaties was behandeld? Verschilt dat van hoe je hebt gehandeld? Wat leer je hieruit?",
    aiHelperPrompts: ["Wat is het verschil tussen de Gulden en de Platina Regel?", "Hoe werkt de Gulden Regel bij mensen met heel andere behoeften dan ik?", "Is de Gulden Regel voldoende als ethisch kompas?"]
  },
  {
    id: "sleep-science",
    title: "Slaapwetenschap",
    difficulty: 2,
    emoji: "😴",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Gezondheid",
    tags: ["slaap", "herstel", "cognitie", "gezondheid"],
    definition: "Slaapwetenschap bestudeert hoe slaap het brein en lichaam herstelt, consolideert en reguleert. Slaaptekort heeft ernstige gevolgen voor cognitie, emotieregulatie, immuunfunctie en gezondheid op lange termijn. Kwaliteitsvolle slaap is geen luxe maar een biologische noodzaak.",
    abstractExample: "Slaap is het meest onderschatte herstelprotocol dat bestaat — het is wanneer het brein de dag verwerkt, het geheugen consolideert, gifstoffen uitruimt en het lichaam herstelt. Elke nacht slechte slaap is als gedeeltelijk leeglaten van de batterij terwijl je steeds meer van haar vraagt.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Na 17 uur wakker zijn presteren mensen cognitief vergelijkbaar met iemand met een promillage van 0,5 (licht dronken). Toch beschouwen de meeste professionals slaaptekort als prestige." },
      { domain: "Studie", icon: "📚", text: "Geleerde informatie wordt tijdens slaap geconsolideerd van korte- naar langetermijngeheugen. Slaapt een student na het studeren, dan is de retentie tot 40% hoger dan bij doorleren." },
      { domain: "Gezondheid", icon: "❤️‍🩹", text: "Chronisch slaaptekort (onder 7 uur) verhoogt het risico op hart- en vaatziekten, diabetes, depressie en zelfs Alzheimer. Slaap is letterlijk een preventieve gezondheidsmaatregel." }
    ],
    prerequisites: [],
    unlocks: ["energy-management", "circadian-rhythm"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het meest bewezen effect van slaaptekort op cognitief functioneren?", options: ["Verhoogde creativiteit door vermoeidheid", "Significant verminderd oordeelsvermogen, werkgeheugen en emotionele regulatie", "Slaaptekort heeft vooral lichamelijke, niet cognitieve effecten", "Het effect verschilt sterk per persoon"], correctIndex: 1, explanation: "Slaaptekort tast vrijwel alle cognitieve functies aan: aandacht, beslissingssnelheid, werkgeheugen, creativiteit en emotionele controle. Bovendien zijn slaapgebrektige mensen slechte beoordelaars van hun eigen cognitieve achteruitgang — ze denken dat het prima gaat." }
    ],
    creativePrompt: "Houd een week lang bij hoe lang je slaapt en hoe je je de dag erna voelt (energie, stemming, concentratie). Welk patroon zie je? Wat is jouw optimale slaaplengte?",
    aiHelperPrompts: ["Hoe verbeter ik mijn slaapkwaliteit praktisch?", "Wat is slaaphygiëne en hoe pas ik het toe?", "Hoe herstel ik van chronisch slaaptekort?"]
  },
  {
    id: "circadian-rhythm",
    title: "Circadiaans Ritme",
    difficulty: 2,
    emoji: "🌅",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Gezondheid",
    tags: ["bioritme", "slaap", "energie", "licht"],
    definition: "Het circadiaanse ritme is het interne ~24-uurs biologisch klokken van het lichaam dat slaap, waakzaamheid, hormoonafgifte, lichaamstemperatuur en metabolisme reguleert. Het wordt primair gesynchroniseerd door licht en bepaalt wanneer je het meest alert, energiek of moe bent.",
    abstractExample: "Je lichaam heeft een intern horloge dat onafhankelijk van externe prikkels tikt — in een donkere kamer zonder klok zou je nog steeds een dag-nacht-ritme hebben. Maar dit horloge is instelbaar via licht, timing van maaltijden en activiteit.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Ochtendmensen (chronotype 'leeuw') presteren cognitief het best tussen 9-12. Avondmensen ('wolf') pas na de middag. Taken afstemmen op je chronotype verhoogt productiviteit zonder extra inspanning." },
      { domain: "Gezondheid", icon: "❤️‍🩹", text: "Blauw licht van schermen 's avonds onderdrukt melatonine en verschuift je circadiaanse ritme. Dit maakt inslapen moeilijker en vermindert slaapkwaliteit — zelfs als je voldoende uren slaapt." },
      { domain: "Reizen", icon: "✈️", text: "Jetlag is een desynchronisatie van het circadiaanse ritme en de externe tijdzone. Strategisch gebruik van licht, maaltijden en beweging helpt het ritme sneller te resetten." }
    ],
    prerequisites: ["sleep-science"],
    unlocks: ["energy-management"],
    exercises: [
      { type: "multipleChoice", question: "Welke aanpassing heeft het grootste effect op het verbeteren van het circadiaanse ritme?", options: ["Elke nacht precies hetzelfde tijdstip naar bed gaan", "Vaste blootstelling aan helder licht 's ochtends en vermijding van blauw licht 's avonds", "Veel koffie drinken om alert te blijven", "Later opstaan in het weekend om bij te slapen"], correctIndex: 1, explanation: "Licht is de sterkste zeitgeber (tijdgever) voor het circadiaanse systeem. Ochtendzonnlicht verankert je ritme vroeg, terwijl blauw licht 's avonds het ritme verschuift en melatonine onderdrukt." }
    ],
    creativePrompt: "Wat is jouw chronotype? Wanneer voel je je het meest energiek? Hoe sluit je huidige schema aan bij dat biologische ritme? Welke aanpassing zou één uur energie geven zonder extra inspanning?",
    aiHelperPrompts: ["Hoe bepaal ik mijn chronotype?", "Hoe reset ik mijn circadiaans ritme na nachtwerk of reizen?", "Hoe gebruik ik kennis van mijn bioritme voor betere prestaties?"]
  },
  {
    id: "exercise-brain",
    title: "Bewegen voor de Hersenen",
    difficulty: 1,
    emoji: "🏃",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Gezondheid",
    tags: ["beweging", "cognitie", "hersenen", "gezondheid"],
    definition: "Lichaamsbeweging heeft directe, bewezen effecten op hersenstructuur en -functie: het vergroot de hippocampus (geheugen), verhoogt BDNF (breingroeifactor), vermindert stress en angst, verbetert focus en beschermt tegen cognitieve achteruitgang. Bewegen is de sterkste nootropica die bestaat.",
    abstractExample: "We beschouwen sporten als iets voor het lichaam. In werkelijkheid is het ook de meest krachtige behandeling voor het brein — effectiever dan veel cognitieve supplementen, vergelijkbaar met antidepressiva bij milde tot matige depressie.",
    examples: [
      { domain: "Studie", icon: "📚", text: "Onderzoek toont dat 20 minuten aëroob bewegen vóór een leestaak het begrip en de retentie significant verbetert — meer dan hetzelfde tijd extra studeren." },
      { domain: "Werk", icon: "💼", text: "Een middagsessie van 15-20 minuten wandelen combatteert de post-lunch dip effectiever dan koffie, en zonder het later slaapverstorende effect." },
      { domain: "Gezondheid", icon: "❤️‍🩹", text: "Regelmatig bewegen (3-5 uur per week moderate intensiteit) is de meest effectieve preventieve maatregel tegen Alzheimer — effectiever dan elke huidige medicamenteuze behandeling." }
    ],
    prerequisites: [],
    unlocks: ["keystone-habits"],
    exercises: [
      { type: "multipleChoice", question: "Wat is BDNF en waarom is het relevant voor cognitief functioneren?", options: ["Een negatief bijproduct van beweging", "Brain-Derived Neurotrophic Factor: een stof die neuronen laat groeien en nieuwe verbindingen bevordert — aangemaakt bij beweging", "Een voedingsstof die je via eten binnenkrijgt", "Een hormoon dat slaap reguleert"], correctIndex: 1, explanation: "BDNF wordt 'miracle-gro voor de hersenen' genoemd: het stimuleert groei van nieuwe neuronen en verbindingen, met name in de hippocampus. Aerobe beweging is de sterkste bekende trigger voor BDNF-productie." }
    ],
    creativePrompt: "Probeer drie ochtenden lang je dag te beginnen met 20 minuten beweging (wandelen, lopen, fietsen). Registreer je energie, focus en stemming die dag. Wat merk je?",
    aiHelperPrompts: ["Welk type beweging is het beste voor de hersenen?", "Hoeveel beweging is nodig voor cognitieve voordelen?", "Hoe integreer ik beweging in een zittend werk?"]
  },
  {
    id: "stress-response",
    title: "Stressrespons",
    difficulty: 2,
    emoji: "⚡",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Gezondheid",
    tags: ["stress", "cortisol", "vecht-vlucht", "regulatie"],
    definition: "De stressrespons is de fysiologische reactie van het lichaam op (vermeende) bedreiging: adrenaline en cortisol verhogen, hartslag en ademhaling versnellen, spieren spannen. Dit is functioneel bij acute bedreiging maar schadelijk bij chronische activering. Begrip van de stressrespons helpt hem bewust te reguleren.",
    abstractExample: "De stressrespons is ontworpen voor een leeuw die je achtervolgt — een burst van energie en alertheid voor gevecht of vlucht. Maar in de moderne wereld is de 'leeuw' een inbox, een vergadering of financiële zorgen — chronisch, niet acuut. Het systeem raakt overbelast.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Presentatieangst is de stressrespons op een sociale dreiging. Het lichaam reageert alsof er een leeuw is. Begrip hiervan — 'dit is adrenaline, geen gevaar' — helpt de respons te reguleren." },
      { domain: "Gezondheid", icon: "❤️‍🩹", text: "Chronische stress (verhoogd cortisol over weken of maanden) beschadigt letterlijk de hippocampus, verzwakt het immuunsysteem, verhoogt bloeddruk en verstoort slaap en spijsvertering." },
      { domain: "Sport", icon: "🏃", text: "Topsporters leren het onderscheid tussen 'good stress' (eustress: optimale activering voor prestatie) en 'bad stress' (distress: te hoog voor optimale functie). Regulatie is een trainbare vaardigheid." }
    ],
    prerequisites: [],
    unlocks: ["resilience-building", "mindfulness-practice"],
    exercises: [
      { type: "multipleChoice", question: "Waarom is chronische stress schadelijker dan acute stress?", options: ["Acute stress is altijd onschadelijk", "Chronische stressactivering raakt het systeem uit en beschadigt fysieke en mentale gezondheid structureel", "Chronische stress is minder intens", "Het lichaam adapteert volledig aan chronische stress"], correctIndex: 1, explanation: "Acute stress is functioneel en herstelt snel. Chronische stress houdt het lichaam in een permanente staat van activering, wat cortisol chronisch verhoogt. Dit tast immuunsysteem, geheugen, cardiovasculaire gezondheid en mentale welzijn structureel aan." }
    ],
    creativePrompt: "Welke situaties triggeren jouw stressrespons het sterkst? Zijn dat echte bedreigingen of sociale/symbolische? Welke ademhaling- of mindfulnesstechniek helpt jou om van 'aan' naar 'uit' te schakelen?",
    aiHelperPrompts: ["Welke ademhalingstechnieken verlagen de stressrespons het snelst?", "Hoe herken ik chronische stress bij mezelf?", "Wat is de rol van cortisol in dagelijks functioneren?"]
  },
  {
    id: "nutrition-basics",
    title: "Voedingswetenschap Basis",
    difficulty: 1,
    emoji: "🥦",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Gezondheid",
    tags: ["voeding", "gezondheid", "energie", "biochemie"],
    definition: "Basisprincipes van voedingswetenschap: het lichaam heeft macronutriënten (koolhydraten, eiwitten, vetten) en micronutriënten (vitaminen, mineralen) nodig in de juiste balans. Voeding beïnvloedt energie, cognitie, stemming en gezondheid op lange termijn — maar het bewijs is genuanceerder dan populaire dieetclaims.",
    abstractExample: "Voeding is brandstof én bouwmateriaal. De kwaliteit van de brandstof bepaalt hoe de motor draait. Maar het is complexer dan een auto: het lichaam past zich aan, heeft micronutriënten nodig naast energie, en varieert sterk per persoon.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "De glycemische index van voedsel bepaalt hoe snel bloedsuiker stijgt. Hoog-glycemische voeding (wit brood, suiker) geeft snelle energie-pieken gevolgd door dalen — niet ideaal voor stabiele concentratie." },
      { domain: "Werk", icon: "💼", text: "Eiwitrijke lunch (peulvruchten, vis, eieren) geeft stabieler energie dan koolhydraatrijke lunch — door langzamere vertering en stabielere bloedsuiker. Meetbaar effect op middagproductiviteit." },
      { domain: "Sport", icon: "🏃", text: "Timing van koolhydraten (voor training) en eiwitten (na training) optimaliseert prestatie en herstel — gebaseerd op hoe spieren glucose en aminozuren gebruiken." }
    ],
    prerequisites: [],
    unlocks: ["energy-management"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de meest bewezen voedingsaanbeveling voor algemene gezondheid?", options: ["Een ketogeen dieet voor iedereen", "Veel bewerkte voeding vermijden en gevarieerd eten met veel groente, fruit en volle granen", "Zo weinig mogelijk vet eten", "Elke dag supplementen nemen"], correctIndex: 1, explanation: "Ondanks de veelheid aan dieettrends is het meest consistente bewijs: minimale verwerking, gevarieerd plantaardig eten, matig dierlijk, en vermijding van toegevoegd suiker en transvetten — dit reduceert risico op vrijwel alle chronische ziekten." }
    ],
    creativePrompt: "Houd drie dagen bij wat je eet. Hoeveel bewerkte voeding? Hoeveel groente en fruit? Welk patroon zie je in hoe je energie en stemming correleren met wat je eet?",
    aiHelperPrompts: ["Hoe onderscheid ik goede voedingswetenschap van dieettrends?", "Wat zijn de meest bewezen voedingsinterventies voor cognitieve prestatie?", "Hoe eet ik gezonder zonder ingewikkelde diëten te volgen?"]
  },
  {
    id: "pain-discomfort-distinction",
    title: "Pijn vs. Ongemak",
    difficulty: 2,
    emoji: "💪",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Gezondheid",
    tags: ["pijn", "ongemak", "groei", "begrenzing"],
    definition: "Het onderscheid tussen pijn (signaal van weefselschade of gevaar — stop) en ongemak (onaangename maar veilige sensatie die groei of aanpassing signaleert — doorgaan) is cruciaal voor zowel sport als persoonlijke ontwikkeling. Verwarring tussen beide leidt tot blessures of vermijding van groei.",
    abstractExample: "Spierpijn na training is ongemak — groeisignaal. Scherpe pijn in een gewricht is pijn — stopsignaal. In het leven: de ongemakelijkheid van een moeilijk gesprek is ongemak (groeizaam). Angst die wijst op werkelijk gevaar is pijn (pas op). Het leren onderscheiden is een vaardigheid.",
    examples: [
      { domain: "Sport", icon: "🏃", text: "Brandend gevoel in de spieren tijdens intensieve training is ongemak — de spieren zijn bezig te groeien. Kniepijn tijdens hardlopen is pijn — stop en onderzoek. Dit onderscheid voorkomt zowel blessures als vermijding van groei." },
      { domain: "Persoonlijk", icon: "💙", text: "De discomfort van een moeilijk gesprek is productief ongemak — vermijden kost meer. Angst die je vertelt dat iemand je bedreigt is een wezenlijk signaal — luister ernaar." },
      { domain: "Studie", icon: "📚", text: "Het hoofd vol en gefrustreerd voelen bij een moeilijke taak is leerongemak — de hersenen zijn bezig patronen te bouwen. Dit is anders dan de angst die wijst op een reëel probleem." }
    ],
    prerequisites: [],
    unlocks: ["desirable-difficulty", "resilience-building"],
    exercises: [
      { type: "multipleChoice", question: "Hoe onderscheid je functioneel ongemak van wezenlijke pijn?", options: ["Pijn is altijd heviger dan ongemak", "Ongemak is een diffuus groei- of inspanningssignaal; pijn is scherp, gelokaliseerd en wijst op schade of gevaar", "Ongemak verdwijnt als je doorgaat; pijn ook", "Er is geen betrouwbaar onderscheid"], correctIndex: 1, explanation: "Pijn heeft specifieke kwaliteiten: scherp, gelokaliseerd, worsening bij doorgaan. Ongemak is meer diffuus, de sensatie van aanpassing of inspanning. Maar ook: sociale en emotionele 'pijn' kan hetzelfde zijn als fysieke pijn in het brein — de vraag is of het een signaal van gevaar of van groei is." }
    ],
    creativePrompt: "Denk aan een situatie die je vermijdt 'omdat het pijn doet'. Is het werkelijk pijn (signaal van schade) of ongemak (signaal van groei)? Wat doe je met dat onderscheid?",
    aiHelperPrompts: ["Hoe train ik mezelf om meer ongemak te tolereren zonder pijn te negeren?", "Hoe herken ik het verschil tussen productief ongemak en schadelijke overbelasting?", "Hoe gebruik ik dit onderscheid bij emotionele groei?"]
  },
  {
    id: "gut-brain-axis",
    title: "Darm-Brein As",
    difficulty: 3,
    emoji: "🦠",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Gezondheid",
    tags: ["microbioom", "darmen", "cognitie", "stemming"],
    definition: "De darm-brein as is de bidirectionele communicatie tussen het darmstelsel en de hersenen — via de nervus vagus, hormonen en immuunsysteem. Het darmmicrobioom beïnvloedt stemming, cognitie, stress en immuunfunctie. Een gezond microbioom is onderdeel van mentale gezondheid.",
    abstractExample: "90% van het serotonine in het lichaam wordt geproduceerd in de darmen, niet de hersenen. De darmen bevatten meer zenuwcellen dan het ruggenmerg. De darmen zijn een 'tweede brein' — en ze communiceren constant met het eerste.",
    examples: [
      { domain: "Gezondheid", icon: "❤️‍🩹", text: "Onderzoek toont dat patiënten met prikkelbare darm (IBS) hogere angst- en depressiescores hebben — en omgekeerd: psychische stress verergert darmproblemen. De verbinding is bidirectioneel." },
      { domain: "Voeding", icon: "🥦", text: "Vezelrijk dieet (groente, fruit, peulvruchten) voedt gunstige darmbacteriën die korteketenvetzuren produceren — stoffen met directe positieve effecten op breinontwikkeling en stemming." },
      { domain: "Stress", icon: "⚡", text: "Chronische stress verandert de darmsamenstelling (dysbiose) wat ontstekingen bevordert die op hun beurt de stemming negatief beïnvloeden — een negatieve spiraal die van twee kanten kan worden aangepakt." }
    ],
    prerequisites: ["nutrition-basics"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Waarom wordt de darm ook wel 'het tweede brein' genoemd?", options: ["De darmen denken onafhankelijk van de hersenen", "Het enterisch zenuwstelsel in de darmen bevat ~500 miljoen neuronen en werkt semi-autonoom, met intensieve tweerichtingscommunicatie met de hersenen", "Darmen zijn net zo groot als hersenen", "De darmen produceren gedachten"], correctIndex: 1, explanation: "Het enterisch zenuwstelsel in de darmen is zo uitgebreid en geïntegreerd dat het zelfstandig kan functioneren. De communicatie met de hersenen is intensief en bidirectioneel — wat we eten, voelen en denken beïnvloedt de darmen en vice versa." }
    ],
    creativePrompt: "Let een week lang bewust op de verbinding tussen wat je eet en hoe je je voelt (mentaal en emotioneel). Zie je patronen? Wat beïnvloedt jouw stemming vanuit je voeding?",
    aiHelperPrompts: ["Hoe verbeter ik mijn darmmicrobioom voor betere stemming?", "Welke probiotica zijn bewezen effectief?", "Hoe beïnvloedt stress mijn darmgezondheid?"]
  },
  {
    id: "hormesis",
    title: "Hormesis",
    difficulty: 3,
    emoji: "🔆",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Gezondheid",
    tags: ["stress", "veerkracht", "aanpassing", "groei"],
    definition: "Hormesis is het biologisch principe dat lage doses van stressoren (die in hoge doses schadelijk zijn) adaptieve, versterkende effecten hebben. Kortom: kleine dosissen van wat je uitdaagt, maakt je sterker. Dit geldt voor lichamelijke training, thermische stress en zelfs bepaalde toxines.",
    abstractExample: "Spiertraining is hormesis: je beschadigt microscopisch spiervezels (stressor) en ze herstellen sterker dan daarvoor. Zonnebrand is het schadelijke extreme; matige blootstelling stimuleert vitamine D en melanineproductie. De dosis maakt het geneesmiddel of het gif.",
    examples: [
      { domain: "Sport", icon: "🏃", text: "Intervaltraining is geconcentreerde hormesis: korte perioden van hoge inspanning zorgen voor aanpassing van hart, longen en spieren die continue matige training niet bereikt." },
      { domain: "Koudetherapie", icon: "🧊", text: "Koud douchen of koude onderdompeling (10-15 minuten op 15°C) is een hormese-stressor die aantoonbaar noradrenaline, dopamine en metabolisme verhoogt — adaptieve respons op milde kou-stress." },
      { domain: "Vasten", icon: "🥗", text: "Intermittent fasting is hormetisch: perioden van calorierestrictie activeren celreparatiemechanismen (autofagie) die bij constante voedseltoevoer niet actief worden." }
    ],
    prerequisites: ["stress-response"],
    unlocks: ["resilience-building"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de kernwet van hormesis?", options: ["Meer stress is altijd beter", "Lage doses van een stressor produceren adaptieve voordelen; hoge doses zijn schadelijk", "Rust is altijd beter dan stress", "Het effect van stressoren is lineair"], correctIndex: 1, explanation: "Hormesis beschrijft een omgekeerde U-curve: te weinig stress geeft geen aanpassing, de juiste dosering geeft versterking, te veel geeft schade. Dit heeft implicaties voor training, dieet, temperatuurblootstelling en zelfs psychologische uitdaging." }
    ],
    creativePrompt: "Welke hormese-stressoren pas jij al toe in je leven? Welke zou je willen toevoegen? Denk aan koude, hitte, vasten, intensieve training of mentale uitdaging.",
    aiHelperPrompts: ["Hoe vind ik de juiste dosering voor hormese-stressoren?", "Welke bewijzen zijn er voor koud douchen?", "Is intermittent fasting veilig voor iedereen?"]
  },
  {
    id: "placebo-effect",
    title: "Placebo-effect",
    difficulty: 2,
    emoji: "💊",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Gezondheid",
    tags: ["verwachting", "geloof", "genezing", "psychologie"],
    definition: "Het placebo-effect is de bewezen verbetering in gezondheid of welzijn die optreedt door de verwachting van een behandeling, niet door de behandeling zelf. Het is niet 'verbeelding' maar een werkelijk fysiologisch mechanisme waarbij verwachting neurochemische processen activeert.",
    abstractExample: "Een suikerpil werkt als een dokter hem vol overtuiging voorschrijft — en zelfs in sommige studies als de patiënt weet dat het een placebo is. Verwachting is een biologisch actieve kracht, geen fantasie.",
    examples: [
      { domain: "Geneeskunde", icon: "🏥", text: "Placebo-pijnstillers activeren in het brein dezelfde gebieden als echte pijnstillers — en produceren endorfines. Dit is meetbaar neurochemie, geen inbeelding." },
      { domain: "Sport", icon: "🏃", text: "Atleten die dachten een prestatieverbeterend supplement te nemen presteerden beter — ook als het alleen suiker was. Verwachting optimaliseert prestatie via reële fysiologische routes." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Koffie 'werkt' voor sommige mensen al bij de geur, voordat ze het drinken. De verwachting van alertheid activeert aandachtssystemen proactief." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Waarom is het placebo-effect wetenschappelijk interessant in plaats van alleen misleidend?", options: ["Het bewijst dat alle behandelingen nep zijn", "Het toont dat verwachting, geloof en context reële fysiologische processen activeren die therapeutisch benut kunnen worden", "Het is enkel een meetkundig artefact", "Het werkt alleen bij inbeeldingszieke mensen"], correctIndex: 1, explanation: "Het placebo-effect onthult de kracht van de geest op het lichaam. Het is het bewijs dat mentale staat, verwachting en context reële neurochemische, immunologische en autonome effecten hebben — kennis die hoe we geneeskunde en zelfzorg conceptualiseren diepgaand beïnvloedt." }
    ],
    creativePrompt: "Hoe kun je bewust positieve verwachtingen benutten in je dagelijks leven — voor sport, herstel of leren? Wat is het verschil tussen het gebruik van het placebo-effect en zelfbedrog?",
    aiHelperPrompts: ["Hoe gebruik ik de kracht van verwachting constructief?", "Is het placebo-effect ethisch als het werkt?", "Hoe herken ik pseudowetenschap die ten onrechte naar het placebo-effect verwijst?"]
  },
  {
    id: "compound-interest-life",
    title: "Samengestelde Groei",
    difficulty: 2,
    emoji: "📈",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Financieel Bewustzijn",
    tags: ["compounding", "groei", "tijd", "investeren"],
    definition: "Samengestelde groei is het fenomeen waarbij groei zichzelf herberekent over de gecumuleerde basis — niet alleen de oorspronkelijke inzet. Dit geldt voor geld (rente op rente), maar ook voor vaardigheden, kennis en relaties: kleine dagelijkse verbeteringen cumuleren exponentieel over tijd.",
    abstractExample: "Een investering van €1000 met 7% jaarlijks rendement groeit in 30 jaar tot ~€7600 — meer dan zevenmaal het startbedrag, zonder extra inleg. De tijd doet het werk. Omgekeerd: een dagelijkse verbetering van 1% levert na een jaar een 37-voudige verbetering op.",
    examples: [
      { domain: "Financieel", icon: "💰", text: "Iemand die op 25 begint met €200/maand te investeren met 7% rendement heeft op 65 ~€525.000. Iemand die op 35 begint met €400/maand heeft slechts ~€490.000. Tien jaar eerder beginnen is sterker dan het dubbele inleggen." },
      { domain: "Studie", icon: "📚", text: "Elke dag 30 minuten lezen geeft 18 boeken per jaar. Na tien jaar: 180 boeken. Na twintig jaar: 360 boeken — en de inzichten bouwen op elkaar voort." },
      { domain: "Werk", icon: "💼", text: "Elke dag 1% beter worden in een vaardigheid levert na een jaar bijna een 38-voudige verbetering op (1,01^365 = 37,8). Dit is samengestelde groei in competentie." }
    ],
    prerequisites: [],
    unlocks: ["time-value-money", "long-term-thinking"],
    exercises: [
      { type: "multipleChoice", question: "Waarom is vroeg beginnen met sparen of investeren zo krachtig?", options: ["Vroege investeringen hebben hogere rentes", "Meer jaren van samengestelde groei vermenigvuldigt het effect exponentieel — tijd is de meest waardevolle variabele", "Vroege investeringen zijn risicovrij", "Financiële producten zijn goedkoper voor jongeren"], correctIndex: 1, explanation: "Bij samengestelde groei is tijd de exponentiële factor. Elke extra jaar compounding verdubbelt de krachtontwikkeling op termijn. Dit is waarom Warren Buffett stelt dat zijn rijkdom bijna volledig verklaard wordt door het vroeg beginnen en geduld hebben." }
    ],
    creativePrompt: "Bereken wat €100/maand investering met 6% jaarlijks rendement na 10, 20 en 30 jaar oplevert (gebruik een online calculator). Wat vertelt dit je over het belang van vroeg beginnen?",
    aiHelperPrompts: ["Hoe pas ik samengestelde groei toe op vaardigheidsontwikkeling?", "Wat is een realistisch rendement om op te rekenen?", "Hoe begin ik met beleggen als beginner?"]
  },
  {
    id: "time-value-money",
    title: "Tijdswaarde van Geld",
    difficulty: 2,
    emoji: "⏳",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Financieel Bewustzijn",
    tags: ["geld", "inflatie", "opportuniteitskosten", "financiën"],
    definition: "De tijdswaarde van geld is het principe dat geld nu meer waard is dan hetzelfde bedrag in de toekomst, omdat huidig geld geïnvesteerd kan worden voor groei, terwijl inflatie toekomstig geld in koopkracht uitholt. Dit is de basis van vrijwel alle financiële beslissingen.",
    abstractExample: "€1000 nu is meer waard dan €1000 over tien jaar. Bij 3% inflatie is €1000 over tien jaar nog slechts ~€744 waard in huidige koopkracht. Tegelijkertijd: €1000 nu geïnvesteerd is over tien jaar bij 7% rendement ~€1967. Het verschil: €1223.",
    examples: [
      { domain: "Financieel", icon: "💰", text: "Pensioensystemen zijn gebaseerd op tijdswaarde: bijdragen nu worden geïnvesteerd en groeien over decennia tot bedragen die de inleg veelvoudig overtreffen." },
      { domain: "Werk", icon: "💼", text: "Een loonsverhoging nu is meer waard dan dezelfde verhoging in twee jaar — niet alleen door inflatie maar ook door het extra groeipotentieel van het hogere salaris over de tussenliggende periode." },
      { domain: "Keuzes", icon: "🔄", text: "Uitgesteld betalingen: is het beter om nu €1000 te betalen of €1100 over een jaar? Hangt af van wat je met die €1000 in tussentijd kunt doen — dit is tijdswaarde." }
    ],
    prerequisites: ["compound-interest-life"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat betekent inflatie voor spaargeld dat niet rendeert?", options: ["Het spaargeld wordt meer waard", "De koopkracht van het spaargeld daalt elk jaar met het inflatiepercentage", "Inflatie heeft geen effect op spaargeld", "Spaargeld groeit altijd sneller dan inflatie"], correctIndex: 1, explanation: "Bij 3% inflatie is €10.000 na tien jaar in koopkracht geslonken tot ~€7441 — zonder dat je ook maar één cent hebt uitgegeven. Spaargeld dat minder rendement heeft dan inflatie, verliest reële waarde elk jaar." }
    ],
    creativePrompt: "Bereken wat €10.000 spaargeld bij 0,1% rente over 20 jaar waard is in huidige koopkracht (bij 2,5% inflatie). Vergelijk dit met investeren met 6% rendement. Wat zie je?",
    aiHelperPrompts: ["Hoe bescherm ik mijn vermogen tegen inflatie?", "Wanneer is sparen beter dan investeren?", "Wat is de wiskundige formule voor tijdswaarde?"]
  },
  {
    id: "opportunity-cost",
    title: "Opportuniteitskosten",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Financieel Bewustzijn",
    tags: ["kosten", "alternatieven", "beslissingen", "economie"],
    definition: "Opportuniteitskosten zijn de waarde van het beste alternatief dat je opgeeft als je een keuze maakt. Elke beslissing heeft verborgen kosten — niet alleen wat je betaalt maar wat je had kunnen krijgen met dezelfde middelen in de beste alternatieve besteding.",
    abstractExample: "Een huis kopen voor €300.000 kost niet alleen €300.000 — het kost ook de potentiële rendement van €300.000 geïnvesteerd over 30 jaar (~€2,4 miljoen bij 7%). Dit is de ware kostenrekening. Elke keuze mist iets anders.",
    examples: [
      { domain: "Financieel", icon: "💰", text: "Een leaseauto van €600/maand kost na 5 jaar €36.000 + gemiste investering. Diezelfde €600/maand geïnvesteerd geeft na 5 jaar ~€43.000 — de opportuniteitskosten van de lease zijn reëel en groot." },
      { domain: "Tijd", icon: "⏰", text: "Een uur tv kijken kost een uur studie, sport, een project of een gesprek. Tijd heeft de hoogste opportuniteitskosten omdat het de enige niet-herwinbare hulpbron is." },
      { domain: "Werk", icon: "💼", text: "Een werknemer die uren besteedt aan taken die hij kan delegeren aan €20/uur, betaalt opportuniteitskosten van zijn eigen uurloon minus €20 — als hij €80/uur waard is, verliest hij per gedelegeerde uur €60." }
    ],
    prerequisites: ["time-value-money"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Waarom zijn opportuniteitskosten onzichtbare maar reële kosten?", options: ["Ze zijn niet echt, alleen theoretisch", "Ze zijn wat je opgeeft — wat niet zichtbaar is maar wél de totale kosten van een keuze bepaalt", "Ze gelden alleen bij grote financiële beslissingen", "Alleen economen hoeven hier rekening mee te houden"], correctIndex: 1, explanation: "Mensen evalueren keuzes bijna altijd op directe kosten, niet op wat ze opgeven. Maar de waarde van het beste alternatief is net zo reëel als de directe kosten. Het negeren ervan leidt systematisch tot suboptimale beslissingen." }
    ],
    creativePrompt: "Kies drie grote tijdsbestedingen in je week. Wat zijn de opportuniteitskosten? Wat geef je op door dit te doen in plaats van iets anders? Is de keuze nog steeds de beste?",
    aiHelperPrompts: ["Hoe bereken ik opportuniteitskosten bij grote beslissingen?", "Hoe gebruik ik opportuniteitskostendenken bij tijdmanagement?", "Waarom negeren mensen opportuniteitskosten zo gemakkelijk?"]
  },
  {
    id: "mental-accounting",
    title: "Mentale Boekhouding",
    difficulty: 2,
    emoji: "🧮",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Financieel Bewustzijn",
    tags: ["geld", "cognitieve bias", "beslissingen", "gedragseconomie"],
    definition: "Mentale boekhouding (Richard Thaler) is de neiging van mensen om geld in mentale 'potjes' te verdelen en anders te behandelen afhankelijk van de herkomst of bestemming, ook al is geld in werkelijkheid fungibel (uitwisselbaar). Dit leidt tot systematisch irrationele financiële beslissingen.",
    abstractExample: "Je vindt €100 op straat (meevaller) en geeft het makkelijker uit dan €100 uit je salaris. Maar het is hetzelfde geld. Of: je zet apart geld op een spaarrekening terwijl je een creditcard-schuld hebt tegen 20% rente — irrationeel maar psychologisch begrijpelijk.",
    examples: [
      { domain: "Financieel", icon: "💰", text: "Vakantiegeld voelt anders dan regulier salaris — mensen geven het vrijgeviger uit. Maar €1000 vakantiegeld en €1000 salaris zijn identiek en zouden identieke beslissingen moeten leiden." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Een cadeaubon van €50 uitgeven aan luxe die je nooit zou kopen voor 'echt geld' — terwijl €50 cadeaubon en €50 cash identiek zijn. Mentale boekhouding in actie." },
      { domain: "Investeren", icon: "📈", text: "Dividenden (inkomsten) herfinvesteren voelt anders dan aandelenkoers-winst verkopen. Maar beide zijn vermogensopbouw — de mentale scheiding is economisch irrelevant maar psychologisch krachtig." }
    ],
    prerequisites: ["opportunity-cost"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Hoe schaadt mentale boekhouding financiële beslissingen?", options: ["Het helpt mensen geld te organiseren", "Het leidt tot inconsistente beslissingen waarbij geld uit verschillende 'potjes' anders wordt behandeld ondanks gelijke waarde", "Het heeft geen effect op rijkdom", "Alleen arme mensen doen aan mentale boekhouding"], correctIndex: 1, explanation: "Economisch rationeel gezien is geld fungibel — €1 is €1, ongeacht herkomst. Mentale boekhouding creëert kunstmatige scheidslijnen die leiden tot gedrag zoals te veel sparen terwijl schuld bestaat, of te weinig investeren terwijl 'luxegeld' wordt verspild." }
    ],
    creativePrompt: "Kijk naar hoe jij geld behandelt uit verschillende bronnen (salaris, bonus, meevaller, erfenis). Behandel je het anders? Is dat rationeel? Welke 'potjes' in jouw hoofd leiden tot irrationeel gedrag?",
    aiHelperPrompts: ["Hoe overwin ik mentale boekhouding voor betere financiële beslissingen?", "Is mentale boekhouding ooit nuttig?", "Hoe gebruik ik mentale boekhouding bewust om spaargedrag te verbeteren?"]
  },
  {
    id: "loss-aversion-finance",
    title: "Verliesaversie in Financiën",
    difficulty: 2,
    emoji: "📉",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Financieel Bewustzijn",
    tags: ["verliesaversie", "investeren", "risico", "gedragseconomie"],
    definition: "Verliesaversie in financiële context is de disproportionele pijn van financiële verliezen vergeleken met de vreugde van gelijke winsten (Kahneman & Tversky: verlies voelt ~2x zo erg als equivalente winst). Dit leidt tot suboptimale beleggingsbeslissingen als irrationeel risicovermijding.",
    abstractExample: "€1000 verliezen voelt psychologisch even erg als €2000 winnen. Dit leidt ertoe dat beleggers te snel verliezende posities vasthouden ('het herstelt nog'), te vroeg winnende posities verkopen, en risicovolle maar waardevolle investeringen vermijden.",
    examples: [
      { domain: "Investeren", icon: "📈", text: "Een belegger die een aandeel koopt voor €100 dat daalt naar €70 verkoopt het niet — want dan is het verlies 'echt'. Hij houdt vast en hoopt op herstel, ook als rationele analyse zegt verkopen. Dit is verliesaversie." },
      { domain: "Werk", icon: "💼", text: "Een mislukt project doorzetten 'omdat we al zoveel geïnvesteerd hebben' (sunk cost fallacy gekoppeld aan verliesaversie) — de investering is verloren ongeacht wat je doet." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Iemand weigert een redelijk goed huis te verkopen met €20.000 verlies ten opzichte van aankoopprijs, ook als dat de rationeel beste beslissing is. De pijn van het 'officiële verlies' blokkeert." }
    ],
    prerequisites: ["mental-accounting"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke beleggingsstrategie helpt het meest om verliesaversie te overwinnen?", options: ["Dagelijks je portfolio controleren", "Automatisch en regelmatig investeren zonder dagelijkse koersmonitoring", "Alleen winnen investeren en verliezers direct verkopen", "Geen enkel risico nemen"], correctIndex: 1, explanation: "Dagelijkse monitoring versterkt verliesaversie door frequente confrontatie met dalingen. Automatisch periodiek investeren (dollar cost averaging) vermindert emotionele beslissingen door het koopgedrag los te koppelen van dagelijkse marktemotie." }
    ],
    creativePrompt: "Herken je verliesaversie in je eigen financiële of andere beslissingen? Welke keuze heb je uitgesteld of vermeden vanwege de pijn van potentieel verlies? Was dat rationeel?",
    aiHelperPrompts: ["Hoe vermijd ik verliesaversie bij beleggingsbeslissingen?", "Hoe bereken ik of vasthouden of verkopen rationeel is?", "Is verliesaversie ooit nuttig als beschermingsmechanisme?"]
  },
  {
    id: "long-term-thinking",
    title: "Langetermijndenken",
    difficulty: 2,
    emoji: "🔭",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Financieel Bewustzijn",
    tags: ["langetermijn", "vertraging", "strategie", "toekomst"],
    definition: "Langetermijndenken is het vermogen om beslissingen te nemen met een horioznt van jaren of decennia in plaats van weken of maanden — en daarvoor directe beloningen op te geven. Het is een trainbare cognitieve vaardigheid die systematisch gecorreleerd is met betere gezondheids-, financiële en relationele uitkomsten.",
    abstractExample: "Het marshmallow-experiment (Stanford) toonde dat kinderen die een beloning konden uitstellen later betere uitkomsten hadden op vrijwel alle levensgebieden. Vertraagde bevrediging is een voorspeller van succes — en het is trainbaar.",
    examples: [
      { domain: "Financieel", icon: "💰", text: "In 2009 aandelen kopen tijdens de crisis vereiste langetermijndenken — op korte termijn leken ze risicovolle verliezen, op lange termijn waren het de beste aankopen in een generatie." },
      { domain: "Werk", icon: "💼", text: "Jaren investeren in een vaardigheid (programmeren, schrijven, spreken) die nu weinig oplevert maar over tien jaar enorm waardevol is — dit is langetermijndenken over carrière." },
      { domain: "Relaties", icon: "❤️", text: "Een moeilijk gesprek voeren dat op korte termijn ongemak geeft maar de relatie op lange termijn versterkt — dit is langetermijndenken in relaties." }
    ],
    prerequisites: ["compound-interest-life"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Waarom worden kortetermijnbeslissingen zo dominant in menselijk gedrag?", options: ["Mensen zijn van nature lui", "Het brein is evolutionair geoptimaliseerd voor directe beloningen en bedreigingen — een drang die bewust moet worden tegengegaan voor langetermijndenken", "Kortetermijndenken is altijd rationeel", "Langetermijn is niet te voorspellen"], correctIndex: 1, explanation: "De prefrontale cortex (langetermijnplanning) is evolutionair jonger dan het limbisch systeem (directe beloning). In een wereld van onmiddellijke bedreigingen was kortetermijnrespons overlevingsvoordeel. Moderne omgevingen vereisen bewuste overschrijving van dit systeem." }
    ],
    creativePrompt: "Welke beslissing weet je dat je op lange termijn moet nemen maar stel je uit vanwege kortetermijnpijn of genot? Schrijf op: wat kost uitstellen je over vijf jaar?",
    aiHelperPrompts: ["Hoe train ik langetermijndenken als ik sterk gericht ben op nu?", "Hoe balanceer ik genieten van het nu met investeren in de toekomst?", "Welke langetermijninvesteringen zijn het meest waardevol voor een 25-jarige?"]
  },
  {
    id: "financial-independence",
    title: "Financiële Onafhankelijkheid",
    difficulty: 3,
    emoji: "🏝️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Financieel Bewustzijn",
    tags: ["vrijheid", "vermogen", "FIRE", "leven"],
    definition: "Financiële onafhankelijkheid is de toestand waarbij passief inkomen (rente, dividenden, huur) de levensstijlkosten dekt — waardoor werk een keuze wordt, niet een noodzaak. Het FIRE-concept (Financial Independence, Retire Early) heeft dit gepopulariseerd als haalbaar doel.",
    abstractExample: "Financiële onafhankelijkheid is niet rijkdom hebben — het is genoeg hebben. De 4%-regel: als je vermogen 25x je jaaruitgaven bedraagt, kun je 4% per jaar opnemen zonder het ooit te lege trekken (historisch bewezen bij gespreide beleggingsportefeuille).",
    examples: [
      { domain: "Financieel", icon: "💰", text: "Bij €30.000 jaaruitgaven is het doel €750.000 belegd vermogen (25x). Bij 7% rendement, 4% opname, groeit het resterende 3% mee met inflatie — eeuwigdurend inkomen theoretisch." },
      { domain: "Werk", icon: "💼", text: "Iemand met financiële onafhankelijkheid kiest werk op basis van zingeving en bijdrage — niet op basis van salaris. Dit verandert fundamenteel de arbeidsmarktpositie en levenskwaliteit." },
      { domain: "Leven", icon: "🌅", text: "FIRE betekent niet noodzakelijk 'stoppen met werken' — het betekent dat je dat kunt kiezen. Mensen die het bereiken, werken vaak door — maar anders en met meer voldoening." }
    ],
    prerequisites: ["compound-interest-life", "long-term-thinking"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is de '4%-regel' voor financiële onafhankelijkheid?", options: ["Je mag nooit meer dan 4% rente betalen", "Een goed gespreide portefeuille kan historisch 4% per jaar opnemen zonder uitgeput te raken", "Je moet 4% van je salaris sparen", "Na 4% rendement ben je financieel onafhankelijk"], correctIndex: 1, explanation: "De 4%-regel (Trinity Study) toont dat een gediversifieerde portefeuille van aandelen en obligaties historisch 4% per jaar kan worden onttrokken over 30+ jaar zonder uitgeput te raken. Dit geeft een praktische richtlijn: 25x jaaruitgaven = financiële onafhankelijkheid." }
    ],
    creativePrompt: "Bereken jouw FI-getal: hoeveel zijn je jaarlijkse uitgaven? Vermenigvuldig met 25. Hoe ver ben je? Wat is één concrete stap om de kloof te verkleinen?",
    aiHelperPrompts: ["Hoe bereik ik financiële onafhankelijkheid op mijn inkomen?", "Is de 4%-regel nog steeds geldig?", "Hoe denk ik over werk en betekenis als geld geen drijfveer meer is?"]
  },
  {
    id: "frugality-vs-cheapness",
    title: "Zuinigheid vs. Gierigheid",
    difficulty: 1,
    emoji: "💡",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Financieel Bewustzijn",
    tags: ["zuinigheid", "waarde", "beslissingen", "levenstijl"],
    definition: "Zuinigheid is het bewust maximaliseren van waarde voor elke uitgegeven euro — niet minder uitgeven maar slimmer. Gierigheid is uitgaven vermijden ten koste van kwaliteit van leven, relaties of langetermijnbelangen. Het onderscheid zit in het doel: waarde versus onthouding.",
    abstractExample: "Een zuinig persoon koopt een kwaliteitsjas van €200 die 10 jaar meegaat (€20/jaar). Een gierig persoon koopt elk jaar een goedkopere jas van €40 (€400 over 10 jaar). Zuinigheid is soms meer uitgeven voor minder totaalkosten — het gaat om waarde per euro, niet om euro's besparen.",
    examples: [
      { domain: "Financieel", icon: "💰", text: "Abonnementen die je niet gebruikt annuleren (zuinig). Maar nooit naar een restaurant gaan met vrienden 'om geld te sparen' terwijl je prima kunt betalen (gierig) — sociale schade overstijgt de besparing." },
      { domain: "Gezondheid", icon: "❤️‍🩹", text: "Besparen op goede schoenen tot je knieproblemen krijgt, is niet zuinigheid — het is gierigheid. Investeren in kwalitatief schoeisel is zuinigheid: minder toekomstige medische kosten." },
      { domain: "Werk", icon: "💼", text: "Een ondernemer die goedkope software koopt die hem 5 uur per week extra kost, is gierig. Betalen voor betere tools die tijd besparen is zuinig: de ROI is positief." }
    ],
    prerequisites: ["opportunity-cost"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Hoe onderscheid je een zuinige van een gierige beslissing?", options: ["Zuinigheid is altijd minder geld uitgeven", "Zuinigheid maximaliseert waarde per euro; gierigheid vermijdt uitgaven ook als de kosten-batenanalyse positief is", "Gierigheid is een deugd", "Ze zijn hetzelfde, enkel een kwestie van perspectief"], correctIndex: 1, explanation: "Zuinigheid is strategisch: investeer waar het waarde creëert, bespaar waar het geen waarde toevoegt. Gierigheid is irrationeel: vermijdt uitgaven ook als de opbrengst groter is dan de kosten — wat leidt tot hogere totaalkosten, schade aan relaties of gezondheid." }
    ],
    creativePrompt: "Kijk naar je laatste vijf grotere aankopen. Welke waren zuinig (maximale waarde voor de prijs) en welke waren gierig (besparen leidde tot meer kosten)? Welke waren verspilling? Wat leert dit patroon je?",
    aiHelperPrompts: ["Hoe leer ik goed onderscheid maken tussen zuinigheid en gierigheid?", "Hoe beslis ik of iets 'de prijs waard is'?", "Hoe stop ik met verspilling zonder gierig te worden?"]
  },
  {
    id: "financial-psychology",
    title: "Psychologie van Geld",
    difficulty: 2,
    emoji: "🧠",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Financieel Bewustzijn",
    tags: ["geld", "psychologie", "gedrag", "overtuigingen"],
    definition: "De psychologie van geld (Morgan Housel) onderzoekt hoe emoties, overtuigingen, ervaringen en biases financiële beslissingen bepalen — meer dan kennis of rationele berekeningen. Rijkdom is minder een kwestie van intellect en meer van gedrag, geduld en zelfkennis.",
    abstractExample: "Twee mensen weten beide dat indexfondsen langetermijn het beste presteren. Eén doet het; de ander schiet tijdens een crash in paniek de posities uit. Het verschil is niet kennis maar emotionele regulatie, geduld en gedrag. Dat is de psychologie van geld.",
    examples: [
      { domain: "Financieel", icon: "💰", text: "Iemand die opgroeide in armoede heeft andere geldovertuigingen dan iemand die opgroeide in welvaart — en dat beïnvloedt risicobereidheid, spaarneiging en financieel gedrag voor de rest van het leven." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Veel mensen met hoge inkomens zijn niet vermogend — omdat inkomen en vermogen niet hetzelfde zijn. Rijkdom is wat je niet uitgeeft. Dit is gedragspsychologie, geen economie." },
      { domain: "Investeren", icon: "📈", text: "Iedereen weet 'koop laag, verkoop hoog'. Vrijwel niemand doet het consequent — omdat angst en hebzucht op de verkeerde momenten winnen van kennis." }
    ],
    prerequisites: ["loss-aversion-finance"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het centrale argument in Morgan Housel's 'The Psychology of Money'?", options: ["Geld is het belangrijkste in het leven", "Financieel gedrag wordt meer bepaald door psychologie dan door kennis of intelligentie", "Rijke mensen zijn slimmer", "Financiën zijn te complex voor gewone mensen"], correctIndex: 1, explanation: "Housel's centrale punt: iemand met gemiddeld inkomen die consequent spaart, bescheiden leeft en geduldige investeringen aanhoudt, bouwt meer vermogen dan een hoogverdienende die zijn lifestyle-inflatie en emotionele beslissingen niet controleert." }
    ],
    creativePrompt: "Schrijf vijf overtuigingen op die je over geld hebt ('geld is moeilijk te verdienen', 'rijke mensen zijn hebzuchtig', etc.). Waar komen ze vandaan? Helpen ze je of houden ze je tegen?",
    aiHelperPrompts: ["Hoe verbeter ik mijn financieel gedrag als ik de theorie al ken?", "Hoe herken ik mijn persoonlijke geldpsychologie?", "Hoe ga ik om met de emotionele component van beleggen?"]
  },
  {
    id: "attention-economy",
    title: "Aandachtseconomie",
    difficulty: 2,
    emoji: "📱",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Technologie & Digitaal Leven",
    tags: ["aandacht", "technologie", "sociale media", "focus"],
    definition: "De aandachtseconomie is het economisch model waarbij platforms concurreren om de schaarse aandacht van gebruikers als commercieel product — jouw aandacht wordt verkocht aan adverteerders. Apps zijn ontworpen door addictie-experts om maximale aandacht te vergrendelen, niet voor jouw welzijn.",
    abstractExample: "Als je niet betaalt voor een product, ben jij het product. Social media platforms verdienen geld door jouw aandacht te verkopen. Elke notificatie, auto-play video en infinite scroll is een bewuste ontwerpkeuze om meer van je aandacht te vangen.",
    examples: [
      { domain: "Technologie", icon: "💻", text: "Tristan Harris (ex-Google ethicus): sociale media zijn ontworpen als gokkasten — variabele beloningsschema's (likes, reacties) activeren hetzelfde dopaminesysteem als gokken. Dit is geen bijwerking maar een ontwerpdoelstelling." },
      { domain: "Dagelijks leven", icon: "🏠", text: "De gemiddelde smartphone gebruiker checkt zijn telefoon 150+ keer per dag. Elke check is een fractie van zijn aandacht die wordt gecapteerd — geaggregeerd over een jaar zijn dit letterlijk weken aan aandacht." },
      { domain: "Studie", icon: "📚", text: "Diep lezen en studeren vereist aanhoudende aandacht — precies het cognitieve vermogen dat de aandachtseconomie systematisch afbreekt. Dit heeft meetbare effecten op concentratievermogen." }
    ],
    prerequisites: [],
    unlocks: ["digital-minimalism", "deep-work-concept"],
    exercises: [
      { type: "multipleChoice", question: "Waarom zijn sociale media platforms zo ontworpen dat ze verslavend zijn?", options: ["Toeval — goede apps zijn gewoon leuk", "Variabele beloningsschema's maximaliseren engagement en aandachtstijd, wat direct correleert met advertentie-inkomsten", "Bedrijven willen hun gebruikers helpen verbonden te blijven", "Algoritmen zijn neutraal en zonder intentie"], correctIndex: 1, explanation: "Platforms optimaliseren voor 'engagement' (tijd in de app) omdat dit direct advertentie-inkomsten bepaalt. Variabele beloningen (soms een like, soms niet) zijn bewezen het meest verslavende schema — identiek aan gokautomaten." }
    ],
    creativePrompt: "Controleer je schermtijd van de afgelopen week. Hoeveel uur? Hoe verhoudt dit zich tot wat je ermee hebt 'gewonnen'? Welk ander gebruik van die tijd zou meer waarde hebben gebracht?",
    aiHelperPrompts: ["Hoe bevecht ik de aandachtseconomie praktisch?", "Welke apps zijn het meest verslavend ontworpen?", "Hoe help ik mijn kinderen bewust omgaan met de aandachtseconomie?"]
  },
  {
    id: "digital-minimalism",
    title: "Digitaal Minimalisme",
    difficulty: 2,
    emoji: "🧘",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Technologie & Digitaal Leven",
    tags: ["minimalisme", "technologie", "focus", "intentionaliteit"],
    definition: "Digitaal minimalisme (Cal Newport) is de filosofie van bewust en selectief technologiegebruik: uitsluitend tools gebruiken die wezenlijk bijdragen aan je waarden, en de rest elimineren — ongeacht de potentiële voordelen. Kwaliteit van technologiegebruik boven kwantiteit.",
    abstractExample: "Minimalisme voor bezittingen: minder spullen, meer ruimte. Digitaal minimalisme: minder digitale tools, meer aandacht en energie voor wat echt telt. Het gaat niet om technologiehaat maar om intentioneel ontwerpen van hoe technologie jouw leven dient.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "Een digitale detox van 30 dagen: alle optionele apps verwijderen, dan alleen teruginstalleren wat na 30 dagen duidelijk gemist werd. Wat je niet mist, had je niet nodig." },
      { domain: "Werk", icon: "💼", text: "E-mail twee keer per dag controleren (geen notificaties) in plaats van constant reageren. Minder responsiviteit, maar significant meer diep werk en minder stressniveau." },
      { domain: "Studie", icon: "📚", text: "Studeren in een app-vrije omgeving met een 'dumb phone' naast je of telefoon in een andere kamer — elimineert de cognitieve belasting van potentiële afleiding, ook als je de telefoon niet actief bekijkt." }
    ],
    prerequisites: ["attention-economy"],
    unlocks: ["deep-work-concept"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het kernprincipe van digitaal minimalisme?", options: ["Zo min mogelijk technologie gebruiken", "Uitsluitend technologie gebruiken die wezenlijk bijdraagt aan je waarden, al het overige elimineren", "Technologie volledig vermijden", "Zo efficiënt mogelijk technologie gebruiken"], correctIndex: 1, explanation: "Digitaal minimalisme is niet anti-technologie — het is pro-intentionaliteit. De vraag is niet 'Heeft dit voordelen?' maar 'Zijn de voordelen significant genoeg om de kosten in aandacht, tijd en afleiding te rechtvaardigen?'" }
    ],
    creativePrompt: "Maak een lijst van alle digitale tools die je dagelijks gebruikt. Welke zijn essentieel voor je waarden? Welke zijn gewoonten? Welke brengen netto negatief? Welke drie zou je komende maand kunnen elimineren als test?",
    aiHelperPrompts: ["Hoe begin ik een digitale detox?", "Hoe ga ik om met sociale druk om constant bereikbaar te zijn?", "Hoe ontwerp ik mijn telefoon als gereedschap in plaats van vermaak?"]
  },
  {
    id: "deep-work-concept",
    title: "Diepgaand Werken",
    difficulty: 2,
    emoji: "🎯",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Technologie & Digitaal Leven",
    tags: ["focus", "diep werk", "cognitie", "prestatie"],
    definition: "Diepgaand werken (Cal Newport) is de staat van gefocuste, ononderbroken concentratie op cognitief veeleisende taken — waarbij maximale waarde wordt gecreëerd in minimale tijd. Het is zeldzamer en waardevoller geworden naarmate de aandachtseconomie oppervlakkig werk normaliseert.",
    abstractExample: "De meeste kenniswerkers spenderen het merendeel van hun dag in 'shallow work': e-mail, vergaderingen, berichten, lopende taken. Diepgaand werk — echte intellectuele inspanning op moeilijke problemen — is wat werkelijk waarde creëert maar steeds zeldzamer is.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een programmeur die 4 uur ononderbroken codeert (diep werk) produceert meer dan iemand die dezelfde 4 uur verspreid werkt over de dag met constante e-mail- en Slack-onderbrekingen." },
      { domain: "Studie", icon: "📚", text: "Studeren in blokken van 90 minuten zonder onderbrekingen (diep werk) leidt tot significant beter begrip en retentie dan hetzelfde aantal uren verspreid met afleiding." },
      { domain: "Schrijven", icon: "✍️", text: "J.K. Rowling huurde een hotelkamer om te schrijven. Charles Darwin had dagelijkse ononderbroken uren. De patronen van productief schrijvers en denkers tonen diep werk als gemeenschappelijk kenmerk." }
    ],
    prerequisites: ["digital-minimalism", "single-tasking"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat maakt diepgaand werken moeilijk in moderne werkomgevingen?", options: ["Werk is te complex geworden", "Constante verbondenheid, open kantoorruimten en 'beschikbaar zijn' worden als productiviteitsmetrics behandeld, terwijl ze diep werk systematisch ondermijnen", "Mensen hebben te weinig motivatie", "Diep werk is niet nodig in de meeste beroepen"], correctIndex: 1, explanation: "De moderne werkplek optimaliseert voor zichtbare activiteit (snel reageren op e-mail, meetings bijwonen) in plaats van voor waardecreatie. Dit is deels economisch (resultaten zijn moeilijk te meten) en deels sociaal (beschikbaar zijn is een status signaal)." }
    ],
    creativePrompt: "Plan één blok van 90 minuten diep werk voor komende week: volledig offline, één taak, geen onderbrekingen. Wat wil je bereiken? Vergelijk de output met een normale werkdag.",
    aiHelperPrompts: ["Hoe bescherm ik diep werktijd in een omgeving met veel verwachte beschikbaarheid?", "Hoe lang duurt het om in de 'flow state' van diep werk te komen?", "Welke omstandigheden zijn optimaal voor diep werk?"]
  },
  {
    id: "filter-bubble",
    title: "Filterbubbel",
    difficulty: 2,
    emoji: "🫧",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Technologie & Digitaal Leven",
    tags: ["algoritme", "bias", "media", "informatie"],
    definition: "Een filterbubbel (Eli Pariser) is het fenomeen waarbij personalisatie-algoritmen mensen toenemend isoleren in informatiekamers die hun bestaande overtuigingen bevestigen, andere perspectieven filteren en zo polarisatie en epistemic closure versterken.",
    abstractExample: "Het algoritme leert dat je graag content X ziet, toont meer van X, je raakt nog meer op X gefixeerd, het algoritme toont alleen nog maar X. Je informatiediet wordt een echo — versterking zonder correctie. Dit is de filterbubbel.",
    examples: [
      { domain: "Politiek", icon: "🏛️", text: "Facebook- en YouTube-algoritmen tonen je steeds extremere versies van politieke content die je al aansprak. Mensen in dezelfde samenleving zien compleet verschillende 'waarheden' van dezelfde werkelijkheid." },
      { domain: "Studie", icon: "📚", text: "Uitsluitend bronnen lezen die jouw academische theorie bevestigen, door algoritmen en zoekmachines verder gefaciliteerd — leidt tot selectieve literatuurbestudering en zwakkere onderzoeksposities." },
      { domain: "Werk", icon: "💼", text: "LinkedIn-algoritmen tonen je mensen en ideeën uit je eigen sector en netwerk — wat informatiehomogeniteit versterkt terwijl cross-sectorale innovatie vrijwel altijd uit perspectief-diversiteit komt." }
    ],
    prerequisites: ["attention-economy"],
    unlocks: ["epistemic-closure"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het gevaar van filterbubbels voor democratisch discours?", options: ["Ze maken mensen te slim", "Ze creëren parallelle informatierealiteiten die gemeenschappelijk gesprek en begrip tussen groepen ondermijnen", "Ze zijn een neutrale weerspiegeling van voorkeuren", "Ze bevorderen diversiteit in denken"], correctIndex: 1, explanation: "Wanneer verschillende groepen letterlijk verschillende feitenbases zien, wordt gemeenschappelijk debat onmogelijk. Filterbubbels creëren niet alleen perspectievenverschillen maar feitenverschillen — wat de grond voor dialoog wegneemt." }
    ],
    creativePrompt: "Zoek actief één bron op die een perspectief vertegenwoordigt dat je normaal nooit leest — een ander politiek spectrum, een andere cultuur, een andere industrie. Wat leer je over je eigen bubbel?",
    aiHelperPrompts: ["Hoe doorbreek ik mijn filterbubbel actief?", "Welke bronnen helpen diverse perspectieven te bieden?", "Hoe herken ik wanneer ik in een filterbubbel zit?"]
  },
  {
    id: "algorithmic-influence",
    title: "Algoritmische Beïnvloeding",
    difficulty: 3,
    emoji: "🤖",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Technologie & Digitaal Leven",
    tags: ["algoritme", "AI", "gedrag", "autonomie"],
    definition: "Algoritmische beïnvloeding is de manier waarop computationele systemen het gedrag, de keuzes en overtuigingen van mensen sturen — vaak zonder bewustzijn van de beïnvloede persoon. Van Netflix-aanbevelingen tot politieke targeting: algoritmen vormen steeds meer de realiteit die mensen ervaren.",
    abstractExample: "Een algoritme dat beslist wat je ziet, bepaalt mede wat je gelooft, wat je koopt, voor wie je stemt, en wat je voelt. Het is niet neutraal — het optimaliseert voor metrics (engagement, conversie) die niet hoeven te correleren met jouw belang.",
    examples: [
      { domain: "Consumentgedrag", icon: "🛒", text: "Amazon's aanbevelingsalgoritme verhoogt gemiddeld 35% van de omzet. Elke 'anderen kochten ook' is een zorgvuldig ontworpen beïnvloedingsinterventie — geen onpartijdige suggestie." },
      { domain: "Politiek", icon: "🏛️", text: "Micro-targeting in politieke campagnes: algoritmen identificeren twijfelende kiezers en tonen gepersonaliseerde berichten die precies inspelen op hun psychografisch profiel — elke kiezer ziet een andere boodschap." },
      { domain: "Relaties", icon: "❤️", text: "Dating-apps optimaliseren voor engagement (mensen op het platform houden), niet voor het vinden van een partner. Dit kan leiden tot FOMO-gedrag en onrealistische verwachtingen." }
    ],
    prerequisites: ["filter-bubble"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Hoe kun je algoritmische beïnvloeding bewuster tegengaan?", options: ["Door geen technologie te gebruiken", "Door bewust te zijn van de doelstelling van algoritmen en actief diversiteit in informatie en ervaring te zoeken", "Door alleen betrouwbare platforms te gebruiken", "Algoritmische beïnvloeding is onontkoombaar en dus irrelevant"], correctIndex: 1, explanation: "Bewustzijn is de eerste stap: begrijpen dat algoritmen optimaliseren voor hun doelen (niet de jouwe) maakt je een kritischer consument. Actief diversifiëren van bronnen, doelbewust zoeken in plaats van passief ontvangen, en digitale hygiëne vergroten autonomie." }
    ],
    creativePrompt: "Kies één platform dat je dagelijks gebruikt. Vraag je af: welk gedrag probeert het algoritme van mij te maximaliseren? Wat zijn de gevolgen voor mijn overtuigingen, koopgedrag of stemming? Dient dit mijn belang?",
    aiHelperPrompts: ["Hoe herken ik algoritmische beïnvloeding in mijn dagelijkse leven?", "Is alle algoritmische beïnvloeding manipulatie?", "Hoe behoud ik digitale autonomie in een geautomatiseerde wereld?"]
  },
  {
    id: "digital-identity",
    title: "Digitale Identiteit",
    difficulty: 2,
    emoji: "👤",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Technologie & Digitaal Leven",
    tags: ["identiteit", "privacy", "online", "authenticiteit"],
    definition: "Digitale identiteit is het geheel van data, gedrag, representaties en aanwezigheid waarmee een persoon online wordt gedefinieerd — door zichzelf en door anderen. Het omvat bewuste zelfpresentatie, onbewuste datasporen en algoritmische profielen die anderen over jou bouwen.",
    abstractExample: "Je digitale identiteit is als een schaduw: ze volgt je, ze is jouw contouren maar vergroot, vervormd en permanent zichtbaar. En anders dan je schaduw, wordt ze opgeslagen, geanalyseerd en verkocht.",
    examples: [
      { domain: "Werk", icon: "💼", text: "89% van de recruiters googelt kandidaten. Je LinkedIn-profiel, tweets, GitHub of publicaties vormen je professionele digitale identiteit — en die werkt voor of tegen je ongeacht je cv." },
      { domain: "Relaties", icon: "❤️", text: "Wat je online deelt, bepaalt hoe je wordt gezien door mensen die je nog niet kennen. De zorgvuldig gecureerde Instagram feed creëert een identiteit die vaak verschilt van de werkelijkheid — met gevolgen voor verwachtingen en verbinding." },
      { domain: "Privacy", icon: "🔒", text: "Elke zoekopdracht, aankoop, locatiecheckin en klik bouwt een dataprofiel dat bedrijven en overheden over jou hebben — dikwijls uitgebreider en nauwkeuriger dan jij je eigen leven in kaart hebt." }
    ],
    prerequisites: ["algorithmic-influence"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het risico van een grote kloof tussen fysieke en digitale identiteit?", options: ["Er is geen risico — online is niet echt", "Digitale identiteiten worden beoordeeld als representatief voor de echte persoon, wat bij discrepantie leidt tot verwachtingsbreuken en authenticiteitsschade", "Online identiteit is onbelangrijk voor professioneel succes", "Een curatieve online aanwezigheid is altijd positief"], correctIndex: 1, explanation: "De meeste mensen presenteren online een ideale versie van zichzelf. Wanneer de realiteit niet overeenkomt — bij een sollicitatiegesprek, eerste date of zakelijk contact — leidt de discrepantie tot vertrouwensbreuk. Authenticiteit in digitale identiteit is een strategisch voordeel." }
    ],
    creativePrompt: "Google jezelf. Wat vind je? Wat vinden anderen als ze jou googlen? Welk beeld geeft dit? Klopt dat met wie je werkelijk bent en wie je wil zijn? Wat wil je aanpassen?",
    aiHelperPrompts: ["Hoe bouw ik een authentieke digitale identiteit?", "Hoe bescherm ik mijn privacy online?", "Hoe ga ik om met negatieve online aanwezigheid?"]
  },
  {
    id: "information-overload",
    title: "Informatie-overbelasting",
    difficulty: 2,
    emoji: "🌊",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Technologie & Digitaal Leven",
    tags: ["informatie", "cognitie", "overvloed", "filteren"],
    definition: "Informatie-overbelasting treedt op wanneer de hoeveelheid beschikbare informatie het vermogen van een persoon om deze te verwerken en te gebruiken voor goede beslissingen overschrijdt. In de informatierijke omgeving van de 21e eeuw is het filteren van informatie een kernvaardigheid geworden.",
    abstractExample: "Meer informatie leidt paradoxaal genoeg tot slechtere beslissingen voorbij een bepaald punt — omdat het mentale bandbreedte, aandacht en beslissingsvermogen uitput. De menselijke geest is geoptimaliseerd voor een wereld met informatielschaarste, niet -overvloed.",
    examples: [
      { domain: "Nieuws", icon: "📰", text: "Continu nieuws consumeren creëert een gevoel van informatiegelijke urgentie — alles lijkt even belangrijk. In werkelijkheid is 95% van het nieuws irrelevant voor jouw dagelijks handelen en welzijn." },
      { domain: "Werk", icon: "💼", text: "Te veel data in een vergadering leidt tot slechte beslissingen — 'paralysis by analysis'. Betere beslissingen vereisen soms bewust minder informatie en meer vertrouwen op principes en intuïtie." },
      { domain: "Studie", icon: "📚", text: "Een student die tien boeken tegelijk begint en eindeloos research doet voor zijn scriptie, lijdt aan informatie-overbelasting. Curatieve selectie en diepte over breedte is de remedie." }
    ],
    prerequisites: ["attention-economy"],
    unlocks: ["digital-minimalism"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de meest effectieve strategie tegen informatie-overbelasting?", options: ["Sneller lezen en verwerken", "Curatieve selectie: bewust kiezen welke informatiebronnen je toelaat en welke je weert", "Meer informatie consumeren om het te kunnen vergelijken", "Technologie gebruiken om alle informatie te filteren"], correctIndex: 1, explanation: "De oplossing voor informatie-overbelasting is niet betere verwerking maar minder input. Door bewust te curatoren welke bronnen, welke frequentie en welke typen informatie je toelaat, behoud je cognitieve capaciteit voor wat werkelijk telt." }
    ],
    creativePrompt: "Tel vandaag hoeveel informatiebronnen je raadpleegt (apps, websites, podcasts, kranten). Welke zijn essentieel voor jouw doelen en waarden? Welke zijn gewoonte? Welke drie zou je kunnen elimineren?",
    aiHelperPrompts: ["Hoe ontwerp ik een gezond informatiedieet?", "Hoe leer ik snel relevante van irrelevante informatie te onderscheiden?", "Hoeveel nieuws is genoeg voor een goed geïnformeerd burger?"]
  },
  {
    id: "tech-ethics",
    title: "Technologie-ethiek",
    difficulty: 3,
    emoji: "⚖️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Technologie & Digitaal Leven",
    tags: ["ethiek", "AI", "technologie", "verantwoordelijkheid"],
    definition: "Technologie-ethiek onderzoekt de morele implicaties van technologische systemen — wie profiteert, wie wordt geschaad, wie beslist, en welke waarden worden ingebakken in code. Naarmate technologie meer invloed heeft, wordt de ethische dimensie ervan urgenter.",
    abstractExample: "Een algoritme dat sollicitanten selecteert, is niet neutraal — het belichaamt de waarden en biases van zijn makers en trainingsdata. Technologie is een morele keuze vermomd als een neutraal gereedschap. De vraag is altijd: voor wie, door wie, en ten koste van wie?",
    examples: [
      { domain: "AI", icon: "🤖", text: "Gezichtsherkenningssoftware heeft aantoonbaar hogere foutpercentages voor donkere huidskleur — een ethisch probleem met reële consequenties als het wordt gebruikt voor politiële identificatie." },
      { domain: "Data", icon: "📊", text: "Cambridge Analytica gebruikte persoonlijke Facebook-data van miljoenen mensen zonder toestemming voor politieke micro-targeting — een schandaal dat de politieke discussie over dataprivacy heeft getransformeerd." },
      { domain: "Automatisering", icon: "⚙️", text: "Automatisering creëert welvaart maar verdringt banen — de ethische vraag is hoe de winst wordt verdeeld en hoe werknemers worden ondersteund die door automatisering worden verdrongen." }
    ],
    prerequisites: ["algorithmic-influence"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Waarom is technologie nooit moreel neutraal?", options: ["Technologie heeft geen mening", "Technologische systemen belichamen de waarden, prioriteiten en biases van hun makers en de context waarin ze zijn ontwikkeld", "Ethiek is een menselijke kwestie, niet technologisch", "Alleen slecht gebruikte technologie is ethisch problematisch"], correctIndex: 1, explanation: "Elke technologische keuze — welke data te verzamelen, welke metric te optimaliseren, wie te betrekken in ontwerp — is een waardeoordeel. Code is geen neutrale wiskunde maar belichaamd beleid dat bepaalt wie wint en wie verliest." }
    ],
    creativePrompt: "Denk aan een technologie die je dagelijks gebruikt. Wie heeft die gemaakt en voor wie? Welke biases of waarden zijn erin ingebakken? Wie wordt erdoor benadeel die je misschien over het hoofd ziet?",
    aiHelperPrompts: ["Hoe word ik een meer ethisch bewuste tech-gebruiker?", "Welke principes zijn richtinggevend voor technologie-ethiek?", "Hoe kunnen gewone gebruikers technologie-ethiek beïnvloeden?"]
  },
  {
    id: "scientific-method",
    title: "Wetenschappelijke Methode",
    difficulty: 2,
    emoji: "🔭",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Kritisch Denken",
    tags: ["wetenschap", "methode", "falsificatie", "kennis"],
    definition: "De wetenschappelijke methode is het systematische proces van kennisverwerving via observatie, hypothesevorming, experimenteren, falsificatie en peer review. Het onderscheidt wetenschappelijke kennis van mening, dogma en pseudowetenschap door haar zelfcorrigerende mechanismes.",
    abstractExample: "Wetenschap is de enige kennissysteem die zichzelf actief probeert te ontkrachten. Een goede wetenschapper zoekt niet naar bevestiging maar naar falsificatie: 'Hoe kan ik bewijzen dat ik het mis heb?' Deze anticonfirmatie-instelling is de kern van wetenschappelijke integriteit.",
    examples: [
      { domain: "Geneeskunde", icon: "🏥", text: "Dubbelblinde gerandomiseerde gecontroleerde trials (RCT's) zijn de goudstandaard in medisch onderzoek: ze controleren voor placebo, bias en toeval — exact wat anekdotisch bewijs mist." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Jezelf afvragen: 'Welk bewijs zou mij doen twijfelen aan deze overtuiging?' als je iets leest of hoort. Als je het antwoord niet kunt geven, geloofje het dogmatisch in plaats van empirisch." },
      { domain: "Werk", icon: "💼", text: "A/B testen van marketingstrategieën, productfuncties of processen is toegepaste wetenschappelijke methode: hypothese (X werkt beter), test, meet, concludeer, herhaal." }
    ],
    prerequisites: [],
    unlocks: ["epistemic-humility"],
    exercises: [
      { type: "multipleChoice", question: "Wat maakt de wetenschappelijke methode uniek vergeleken met andere kennissystemen?", options: ["Ze is altijd juist", "Ze is actief zelfcorrigerend — ontworpen om fouten te detecteren en te elimineren via falsificatie en peer review", "Ze is de enige manier om kennis te verwerven", "Ze is onpartijdig en objectief"], correctIndex: 1, explanation: "Het unieke van wetenschap is niet dat ze nooit fout is, maar dat ze een systematisch mechanisme heeft om fouten te ontdekken en te corrigeren. Dit maakt wetenschappelijke kennis cumulatief en betrouwbaarder dan andere systemen over tijd." }
    ],
    creativePrompt: "Kies een overtuiging die je sterk aanhangt. Formuleer een duidelijk falsifieerbare hypothese ervan. Welk experiment of welke observatie zou bewijzen dat je het mis hebt? Is die test ooit gedaan?",
    aiHelperPrompts: ["Hoe gebruik ik wetenschappelijk denken in dagelijkse beslissingen?", "Hoe herken ik pseudowetenschap?", "Wat is het verschil tussen correlatie en causaliteit?"]
  },
  {
    id: "evolution-thinking",
    title: "Evolutionair Denken",
    difficulty: 2,
    emoji: "🦎",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Kritisch Denken",
    tags: ["evolutie", "aanpassing", "biologie", "gedrag"],
    definition: "Evolutionair denken is het toepassen van evolutionaire principes (variatie, selectie, adaptatie, erfelijkheid) als verklarend kader voor biologisch en gedragsmatig verschijnselen. Het biedt inzicht in waarom mensen voelen, denken en handelen zoals ze doen — en welke aanpassingen in de moderne wereld niet meer passen.",
    abstractExample: "Mensen zijn gemaakt door evolutie voor een wereld die er 10.000 jaar geleden uitzag. Veel van onze driften, angsten en verlangens zijn adaptief voor die wereld maar maladaptief voor de onze. Begrip hiervan is begrip van de kloof tussen evolutie en moderniteit.",
    examples: [
      { domain: "Gedrag", icon: "🧠", text: "Zucht naar suiker en vet is evolutionair adaptief (kalorieënarme omgeving) maar maladaptief in een omgeving met onbeperkte calorieën. Begrip hiervan helpt bij gericht omgaan met eetgedrag." },
      { domain: "Sociale psychologie", icon: "👥", text: "In-group/out-group denken (wij vs. zij) is een evolutionaire aanpassing voor stammenleven maar leidt in moderne samenlevingen tot tribalism en discriminatie." },
      { domain: "Angst", icon: "😨", text: "Angst voor spinnen is evolutionair begrijpelijk (giftige bedreigingen). Angst voor publiek spreken is evolutionair minder begrijpelijk — tenzij sociaal uitgestoten worden door de groep letterlijk dodelijk was." }
    ],
    prerequisites: ["scientific-method"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Hoe helpt evolutionair denken bij het begrijpen van menselijke irrationele gedragingen?", options: ["Het maakt gedrag excuseerbaar", "Het toont dat 'irrationeel' gedrag vaak rationeel was voor een vroegere omgeving — inzicht dat corrigerende strategieën begeleidt", "Evolutie verklaart alleen lichaam, niet gedrag", "Alle menselijk gedrag is rationeel als je het goed begrijpt"], correctIndex: 1, explanation: "Gedrag dat irrationeel lijkt in moderne context is vaak begrijpelijk als evolutionaire aanpassing. Dit inzicht verlegt de vraag van 'waarom ben je zo dom?' naar 'hoe overtreed ik de evolutionaire druk die dit gedrag stuurt?' — een constructiever startpunt." }
    ],
    creativePrompt: "Kies een gewoonte of drang die je moeilijk te beheersen vindt. Welke evolutionaire functie had dit gedrag in een vroegere omgeving? Hoe verschilt die omgeving van nu? Wat helpt bij het omgaan met die mismatch?",
    aiHelperPrompts: ["Welke moderne problemen worden verklaard door evolutionaire mismatch?", "Hoe gebruik ik evolutionair denken bij gedragsverandering?", "Wat is evolutionaire psychologie en hoe betrouwbaar is het?"]
  },
  {
    id: "complexity-theory",
    title: "Complexiteitstheorie",
    difficulty: 3,
    emoji: "🌀",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Systeemdenken",
    tags: ["complexiteit", "systemen", "voorspelling", "emergentie"],
    definition: "Complexiteitstheorie bestudeert systemen met veel onderling afhankelijke delen die niet-lineair, onvoorspelbaar gedrag vertonen — waarbij het geheel fundamenteel anders is dan de som der delen. Complexe systemen zijn niet gecompliceerd (oplosbaar met genoeg expertise) maar onherleidbaar complex.",
    abstractExample: "Het weer is complex: duizenden variabelen interacteren niet-lineair. Je kunt niet het weer volgende maand voorspellen door het van vandaag te kennen. Een machine is gecompliceerd: veel onderdelen, maar elk voorspelbaar. Het verschil is cruciaal voor hoe je met systemen omgaat.",
    examples: [
      { domain: "Economie", icon: "💰", text: "Markten zijn complex systemen — niemand kan ze consequent voorspellen, omdat elk actie feedback loops creëert die het systeem veranderen. Dit is waarom economen zo vaak fout zitten bij voorspellingen." },
      { domain: "Organisaties", icon: "🏢", text: "Een grote organisatie is een complex systeem: gedetailleerde managementplannen falen vaak omdat ze aannames maken over lineaire causaliteit in een niet-lineair systeem." },
      { domain: "Gezondheid", icon: "❤️‍🩹", text: "Het menselijk lichaam is een complex systeem — medicijnen die één variabele 'repareren' hebben onvoorziene effecten op andere variabelen. Complexiteit verklaart de moeilijkheid van gepersonaliseerde geneeskunde." }
    ],
    prerequisites: ["scientific-method"],
    unlocks: ["emergence"],
    exercises: [
      { type: "multipleChoice", question: "Wat onderscheidt een complex systeem van een gecompliceerd systeem?", options: ["Complexe systemen zijn moeilijker te begrijpen", "Gecompliceerde systemen zijn beheersbaar via expertise; complexe systemen vertonen niet-lineair, emergent gedrag dat niet volledig te beheersen of voorspellen is", "Complexe systemen hebben meer onderdelen", "Ze zijn hetzelfde, enkel een terminologieverschil"], correctIndex: 1, explanation: "Een vliegtuig is gecompliceerd: veel onderdelen maar elk voorspelbaar gedrag. Een ecosysteem is complex: onderdelen interacteren op manieren die onvoorziene eigenschappen produceren (emergentie) en niet-lineaire feedback loops creëren. Berbenadering vereist een fundamenteel andere aanpak." }
    ],
    creativePrompt: "Identificeer een complex systeem in je leven (een relatie, een organisatie, je gezondheid). Welke aanpak past echt bij de complexiteit (iteratief, adaptief, experimenteel) versus een gecompliceerde aanpak (expertoplossing, masterplan)?",
    aiHelperPrompts: ["Hoe ga ik om met complexiteit die ik niet kan beheersen?", "Welke strategieën werken in complexe omgevingen?", "Wat zijn voorbeelden van complexe systemen in het dagelijks leven?"]
  },
  {
    id: "nature-exposure",
    title: "Blootstelling aan Natuur",
    difficulty: 1,
    emoji: "🌿",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Gezondheid",
    tags: ["natuur", "welzijn", "stress", "herstel"],
    definition: "Blootstelling aan natuur heeft bewezen positieve effecten op mentale gezondheid, stressherstel, cognitieve vermoeidheid en aandacht. 'Shinrin-yoku' (bosbaden in Japan) en Attention Restoration Theory tonen dat natuur een uniek hersteleffect heeft dat stedelijke omgevingen niet bieden.",
    abstractExample: "Het brein heeft twee aandachtssystemen: direct (actief, uitputtend) en involuntair (passief, herstelend). Natuur activeert het involuntaire systeem via zachte fascinatie — ruisend water, bewegende bladeren, vogels. Dit herstelt de capaciteit voor gerichte aandacht.",
    examples: [
      { domain: "Gezondheid", icon: "❤️‍🩹", text: "20-30 minuten in een park of bos significant verlaagt cortisol (stresshormoon), bloeddruk en hartslag — meetbaar en reproduceerbaar in tientallen studies." },
      { domain: "Werk", icon: "💼", text: "Werknemers met uitzicht op natuur rapporteren minder ziekteverzuim, minder stress en meer tevredenheid dan werknemers zonder — zelfs planten in kantoren hebben meetbaar effect." },
      { domain: "Studie", icon: "📚", text: "Studeren in of na een wandeling in de natuur verbetert cognitieve prestatie op geheugentests. Zelfs afbeeldingen van natuur hebben aantoonbaar effect op cognitieve herstel." }
    ],
    prerequisites: [],
    unlocks: ["mindfulness-practice"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de Attention Restoration Theory?", options: ["Natuur traint aandacht via stimulering", "Natuur herstelt uitgeputte gerichte aandacht door involuntaire zachte fascinatie te activeren", "Aandacht is een onuitputtelijke hulpbron", "Natuur is alleen ontspannend, niet herstellend"], correctIndex: 1, explanation: "ART (Kaplan & Kaplan) stelt dat gerichte aandacht uitput en herstel nodig heeft. Natuur biedt dit herstel via 'soft fascination' — het trekt aandacht zonder cognitieve inspanning te vereisen, waardoor uitgeputte aandachtssystemen zich kunnen herstellen." }
    ],
    creativePrompt: "Plan twee keer deze week een 20-minuten-buitensessie in een groene omgeving. Registreer hoe je je voelt voor en na. Noteer ook de kwaliteit van je concentratie nadien.",
    aiHelperPrompts: ["Hoe integreer ik natuurblootstelling in een stedelijk leven?", "Werkt virtuele natuur ook herstelend?", "Hoeveel natuurblootstelling is optimaal per week?"]
  },
  {
    id: "systems-thinking-basics",
    title: "Systeemdenken Basis",
    difficulty: 2,
    emoji: "⚙️",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Systeemdenken",
    tags: ["systemen", "feedback", "oorzaak", "holisme"],
    definition: "Systeemdenken is een analytisch kader dat gericht is op het begrijpen van hoe elementen van een systeem elkaar beïnvloeden, via feedback loops, vertraging en emergente eigenschappen. Het contrasteert met lineair denken (A veroorzaakt B) en erkent circulaire causaliteit (A beïnvloedt B, B beïnvloedt A).",
    abstractExample: "Lineair denken: 'We hebben te weinig politieagenten, daarom stijgt de criminaliteit. Meer politie = minder criminaliteit.' Systeemdenken vraagt: Welke feedback loops bestaan er? Wat zijn de vertragingen? Welke onbedoelde gevolgen heeft meer politie? Wat zijn de achterliggende oorzaken van criminaliteit?",
    examples: [
      { domain: "Organisaties", icon: "🏢", text: "Een bedrijf verhoogt productiviteitsdruk (meer output eisen). Op korte termijn stijgt output. Maar op lange termijn stijgt burn-out, daalt de kwaliteit en vertrekken goede medewerkers — een negatieve feedback loop die het systeem schade doet." },
      { domain: "Economie", icon: "💰", text: "Systeemdenken in economie: verhoog de minimumloon (A), meer koopkracht consumenten (B), meer vraag naar producten (C), meer productie nodig (D), meer arbeiders in dienst (E) — een positieve feedback loop die het model compliceert." },
      { domain: "Persoonlijk", icon: "💙", text: "Slaaptekort → vermoeidheid → slechte beslissingen → stress → slaaptekort. Dit is een reinforcing feedback loop (vicieuze cirkel). Systeemdenken identificeert de hefboom: niet 'meer discipline' maar de ene interruptie die de loop doorbreekt." }
    ],
    prerequisites: ["complexity-theory"],
    unlocks: ["leverage-points"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het verschil tussen een versterkende en een balancerende feedback loop?", options: ["Ze zijn hetzelfde", "Versterkende loops versterken verandering (spiralen op of neer); balancerende loops streven naar een doel of evenwicht", "Balancerende loops zijn altijd positief", "Versterkende loops zijn altijd negatief"], correctIndex: 1, explanation: "Versterkende (reinforcing) loops versterken elke verandering — ze leiden tot exponentiële groei of ineenstorting. Balancerende (balancing) loops corrigeren afwijkingen van een doel. Beide zijn fundamenteel in het begrijpen van hoe systemen zich gedragen." }
    ],
    creativePrompt: "Kies een terugkerend probleem in je leven of werk. Teken een eenvoudige systeemkaart: welke variabelen spelen mee? Hoe beïnvloeden ze elkaar? Zijn er feedback loops? Wat zijn de hefboompunten?",
    aiHelperPrompts: ["Hoe herken ik systeemdynamieken in mijn dagelijks leven?", "Hoe gebruik ik systeemdenken voor probleemoplossing?", "Wat zijn de meest voorkomende systemische valkuilen in organisaties?"]
  },
  {
    id: "probability-thinking",
    title: "Probabilistisch Denken",
    difficulty: 2,
    emoji: "🎲",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Kritisch Denken",
    tags: ["kansen", "onzekerheid", "beslissingen", "statistiek"],
    definition: "Probabilistisch denken is het redeneren in kansen en waarschijnlijkheden in plaats van zekerheden, en het updaten van overtuigingen op basis van nieuw bewijs (Bayesiaans denken). Het erkent inherente onzekerheid en maakt betere beslissingen mogelijk onder onzekerheid.",
    abstractExample: "Binair denken: 'Zal het slagen of falen?' Probabilistisch denken: 'Welke kans schat ik op succes, gegeven beschikbare informatie? Hoe verandert die kans als X of Y optreedt?' Dit maakt beslissingen genuanceerder en beter gekalibreerd.",
    examples: [
      { domain: "Investeren", icon: "📈", text: "Een goede belegger denkt niet 'Zal dit aandeel stijgen?' maar 'Gegeven alle informatie, is de kans op winst groter dan de prijs van het risico?' Probabilistisch denken over portefeuille-risico." },
      { domain: "Medisch", icon: "🏥", text: "Een positieve test op een zeldzame ziekte (1% prevalentie) met 99% nauwkeurigheid geeft slechts ~50% kans op de ziekte — door Bayes' wet. Probabilistisch denken voorkomt onnodige angst of overbehandeling." },
      { domain: "Beslissingen", icon: "🔄", text: "In plaats van te vragen 'Moet ik dit project starten?', vragen: 'Wat is mijn beste schatting van succeskans? Wat zijn de kosten van falen? Wat zijn de baten van succes?' — een probabilistische kosten-batenanalyse." }
    ],
    prerequisites: ["scientific-method"],
    unlocks: ["epistemic-humility"],
    exercises: [
      { type: "multipleChoice", question: "Wat betekent goed 'gekalibreerd' zijn bij probabilistisch denken?", options: ["Altijd 50/50 inschatten om neutraal te blijven", "Dat je kansschattingen over een periode van tijd kloppen: dingen waarvan je zegt 70% kans te hebben, gebeuren inderdaad ~70% van de tijd", "Nooit zeker zijn over iets", "Statistiek kennen"], correctIndex: 1, explanation: "Kalibratie is de correlatie tussen je uitgesproken kansen en de werkelijkheid. Goed gekalibreerd zijn betekent dat je zelfvertrouwen overeenkomt met je nauwkeurigheid — niet te zeker (overconfident) of te onzeker (underconfident)." }
    ],
    creativePrompt: "Maak een lijst van vijf toekomstige gebeurtenissen en schat de kans in dat elk optreedt. Na een maand: kijk terug. Hoe goed gekalibreerd was je? Systematisch te optimistisch of pesismistisch?",
    aiHelperPrompts: ["Hoe verbeter ik mijn Bayesiaans redeneren?", "Hoe ga ik om met beslissingen waarbij de kansen onbekend zijn?", "Wat zijn veelgemaakte fouten in probabilistisch denken?"]
  },
  {
    id: "scientific-literacy",
    title: "Wetenschappelijke Geletterdheid",
    difficulty: 2,
    emoji: "📊",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Kritisch Denken",
    tags: ["wetenschap", "media", "bewijs", "geletterdheid"],
    definition: "Wetenschappelijke geletterdheid is het vermogen om wetenschappelijke claims te begrijpen, te evalueren en kritisch te beoordelen — inclusief het herkennen van methodologische kwaliteit, statistische valkuilen en hoe media wetenschappelijk onderzoek vaak vertekenen.",
    abstractExample: "Een krant schrijft: 'Studie bewijst dat koffie kanker veroorzaakt.' Een wetenschappelijk geletterdie leest: 'Welke studie? Hoe groot? Correlatie of causaliteit? Observationeel of gecontroleerd? Welke confounders? Is het gerepliceerd?' De meeste mensen kunnen dit niet — en worden misleid.",
    examples: [
      { domain: "Gezondheid", icon: "❤️‍🩹", text: "'Superfoods' worden vaak gepromoot op basis van kleine, niet-gerepliceerde studies. Een wetenschappelijk geletterdie kijkt naar effectgrootte, studie-kwaliteit, replicatie en of er publiek bewijs is — niet naar één studie of anekdote." },
      { domain: "Media", icon: "📰", text: "Media rapporteren graag: 'Studie toont verband tussen X en Y.' Wetenschappelijke geletterdheid: correlatie ≠ causaliteit, relatief risico ≠ absoluut risico, 'statistisch significant' ≠ 'praktisch relevant'." },
      { domain: "Beleid", icon: "🏛️", text: "COVID-vaccindebat: mensen met wetenschappelijke geletterdheid konden de kwaliteit van bewijs evalueren, begrijpen wat RCT's zeggen en wat niet, en onderscheid maken tussen politiek en wetenschap." }
    ],
    prerequisites: ["scientific-method", "probability-thinking"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het meest gemeenschappelijke misverstand in nieuwsberichtgeving over wetenschappelijk onderzoek?", options: ["Resultaten worden te technisch weergegeven", "Correlatie wordt gepresenteerd als causaliteit, en een enkele studie als bewijs", "Studies worden te kritisch benaderd", "Wetenschappers worden niet geciteerd"], correctIndex: 1, explanation: "Media simplificeren systematisch: één studie wordt bewijs, correlatie wordt causaliteit, statistisch significantie wordt praktische relevantie. Wetenschappelijke geletterdheid herkent deze vertekeningen en vereist: gerepliceerd? Gecontroleerde studie? Effectgrootte? Consensus?" }
    ],
    creativePrompt: "Zoek een recent nieuwsartikel over een wetenschappelijk onderzoek. Zoek de originele studie op. Kloppen de claims in het artikel? Wat zijn de methodologische beperkingen van de studie die het artikel niet noemt?",
    aiHelperPrompts: ["Hoe lees ik een wetenschappelijk artikel kritisch?", "Hoe herken ik slechte wetenschap versus goede wetenschap?", "Welke vragen stel ik bij een nieuwe gezondheidsclaim?"]
  },
  {
    id: "naturalistic-fallacy",
    title: "Naturalistisch Drogargument",
    difficulty: 2,
    emoji: "🌱",
    academicCategory: "Filosofie & Ethiek",
    skillCategory: "Kritisch Denken",
    tags: ["logica", "natuur", "ethiek", "drogreden"],
    definition: "Het naturalistisch drogargument is de fout van afleiden dat iets goed of wenselijk is omdat het 'natuurlijk' is. Maar 'natuurlijk' en 'moreel goed' zijn niet synoniem: gif, ziekte en dood zijn ook natuurlijk. De term 'natuurlijk' heeft in marketing en ethiek vaak geen inhoudelijke betekenis.",
    abstractExample: "Argument: 'X is natuurlijk, dus X is goed/veilig.' Dit is een drogreden: natuur produceert zowel antibiotica als botulinum-toxine (het dodelijkste gif dat bestaat). Kunstmatig en schadelijk zijn niet synoniem, net zoals natuurlijk en veilig dat niet zijn.",
    examples: [
      { domain: "Marketing", icon: "📢", text: "'100% natuurlijk!' op voedselverpakkingen suggereert dat het gezond of beter is. Maar arseen, hemlockvergif en salmonella zijn ook 100% natuurlijk. De claim betekent zonder context niets." },
      { domain: "Ethiek", icon: "⚖️", text: "'Homo-zijn is niet natuurlijk' als argument dat het immoreel is — dit is een naturalistisch drogargument: ook als het onnatuurlijk was (wat empirisch onjuist is), zou dat niets zeggen over de moraliteit." },
      { domain: "Gezondheid", icon: "❤️‍🩹", text: "'Kruiden zijn veilig want ze zijn van nature.' Sint-Janskruid (een kruid) interacteert gevaarlijk met antidepressiva. Digitaline (hartmedicijn) is uit foxglove — een 'natuurlijk' gif dat in hoge dosis dodelijk is." }
    ],
    prerequisites: [],
    unlocks: ["moral-realism"],
    exercises: [
      { type: "multipleChoice", question: "Waarom is 'het is natuurlijk' geen geldig argument voor veiligheid of moraliteit?", options: ["Natuur is altijd beter dan kunst", "'Natuurlijk' beschrijft herkomst, niet eigenschap — natuur produceert zowel geneesmiddelen als dodelijke giffen", "Alleen kunstmatige dingen zijn schadelijk", "De natuur is altijd in balans en daardoor veilig"], correctIndex: 1, explanation: "De kern van het naturalistische drogargument: het verward een descriptief feit (X is van nature) met een normatieve conclusie (X is goed). Feiten over wat is zeggen op zichzelf niets over wat moet of wenselijk is." }
    ],
    creativePrompt: "Zoek drie recente advertenties of uitspraken die 'natuurlijk' als argument voor veiligheid of kwaliteit gebruiken. Is de claim inhoudelijk onderbouwd of is het een naturalistisch drogargument?",
    aiHelperPrompts: ["Hoe onderscheid ik het naturalistisch drogargument van terechte claims over natuur?", "Zijn er andere 'descriptief naar normatief'-drogredenen?", "Hoe reageer ik constructief als iemand dit argument gebruikt?"]
  },
  {
    id: "aesthetic-experience",
    title: "Esthetische Ervaring",
    difficulty: 2,
    emoji: "🎨",
    academicCategory: "Kunst & Esthetiek",
    skillCategory: "Zingeving",
    tags: ["schoonheid", "kunst", "ervaring", "esthetiek"],
    definition: "Een esthetische ervaring is een intensief, aandachtig contact met iets schoons of kunstzinnigs waarbij de normale doelgerichtheid wegvalt — je bent volledig aanwezig in het waarnemen zelf, niet in wat het oplevert. Filosoof Kant noemde dit 'doelmatigheid zonder doel'.",
    abstractExample: "Je loopt langs een landschap en stopt plotseling — niet omdat je iets wil doen, maar omdat de aanblik je grijpt. De normale stroom van gedachten valt weg. Je bent puur aanwezig bij het zien. Dat is de esthetische ervaring.",
    examples: [
      { domain: "Kunst", icon: "🖼️", text: "Stil staan voor een schilderij in een museum en merken dat de tijd stopt — je bent in gesprek met het werk, niet er langs lopend. Dit is de esthetische ervaring die kunst beoogt te creëren." },
      { domain: "Muziek", icon: "🎵", text: "Een muziekstuk dat je volledig absorbeert — waarbij je de regie kwijtraakt en puur ervaart. Niet analyseren, niet evalueren: ondergaan. Dat is esthetisch horen." },
      { domain: "Natuur", icon: "🌄", text: "Een zonsondergang die je plotseling tot stilstand brengt. Geen plannen, geen telefoon, geen 'wat moet ik vanavond nog doen' — alleen het zien. Een spontane esthetische ervaring." }
    ],
    prerequisites: ["present-moment-focus"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat maakt een ervaring 'esthetisch' in filosofische zin?", options: ["Het gaat altijd om kunst", "De ervaring is zelfgericht, aandachtig, en los van praktisch nut — je waarneemt omwille van het waarnemen zelf", "Esthetiek vereist professionele opleiding", "Alleen mooie dingen geven esthetische ervaringen"], correctIndex: 1, explanation: "Kant beschreef esthetische ervaring als 'vrij welgevallen' — plezier dat niet gebaseerd is op persoonlijk nut, begeerte of conceptueel oordeel, maar op de pure waarneming zelf. Het is contemplatief, aandachtig en niet-instrumenteel." }
    ],
    creativePrompt: "Plan een uur voor puur esthetische ervaring: bezoek een museum, luister aandachtig naar muziek, of wandel bewust in de natuur. Laat je telefoon thuis. Wat neem je waar? Wanneer raak je afgeleid naar doelgericht denken?",
    aiHelperPrompts: ["Hoe cultiveer ik meer esthetische aandacht in het dagelijks leven?", "Is esthetische ervaring te trainen?", "Hoe verschilt esthetisch genieten van passief vermaak?"]
  },
  {
    id: "creative-process",
    title: "Het Creatieve Proces",
    difficulty: 2,
    emoji: "✨",
    academicCategory: "Kunst & Esthetiek",
    skillCategory: "Creativiteit",
    tags: ["creativiteit", "inspiratie", "incubatie", "proces"],
    definition: "Het creatieve proces verloopt typisch in vier fasen (Graham Wallas): Voorbereiding (intensief onderzoek), Incubatie (bewust loslaten), Illuminatie (het 'aha-moment'), Verificatie (kritisch uitwerken). Creativiteit is geen mysterieus talent maar een begrijpelijk en deels bestuurbaar proces.",
    abstractExample: "Je hebt urenlang een probleem bestudeerd. Je zet het opzij. Douchen, wandelen, slapen — en plotseling: de oplossing. Dit is incubatie en illuminatie in actie. Het onbewuste heeft de connecties gelegd die bewust denken blokkeerde.",
    examples: [
      { domain: "Wetenschap", icon: "🔬", text: "Archimedes' 'Eureka!'-moment in bad is illuminatie na voorbereiding (hij bestudeerde het probleem) en incubatie (hij was zich aan het ontspannen). Bijna alle grote wetenschappelijke doorbraken hebben dit patroon." },
      { domain: "Schrijven", icon: "✍️", text: "Een schrijver die vastloopt, stopt bewust te schrijven en gaat wandelen. Bij terugkomst weet hij hoe de plot zich ontvouwt — het onbewuste heeft de structuur gevonden terwijl hij liep." },
      { domain: "Werk", icon: "💼", text: "Een moeilijk strategisch probleem 'slapen over' is letterlijk incubatie. Slaap consolideert informatie en het onbewuste maakt verbanden — de ochtendinzichten zijn niet toevallig." }
    ],
    prerequisites: ["lateral-thinking"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Waarom is incubatie (loslaten) een essentieel onderdeel van het creatieve proces?", options: ["Rust is altijd beter dan hard werken", "Het onbewuste brein verwerkt verbanden en patronen door zonder de beperkingen van bewuste lineaire verwerking", "Incubatie vervangt voorbereiding", "Creatieve ideeën komen altijd spontaan"], correctIndex: 1, explanation: "Bewust denken is lineair en beperkt. Het onbewuste werkt parallel, associatief en zonder de beperkingen van mentale sets. Incubatie geeft het onbewuste ruimte om verbindingen te maken die bewust denken blokkeert — vandaar de 'eureka' na afstand nemen." }
    ],
    creativePrompt: "Kies een creatief probleem dat je bezighoudt. Bestudeer het intensief (30 minuten). Laat het dan los (ga iets heel anders doen). Noteer wat er opkomt in de volgende 24 uur — gedachten, dromen, invallen.",
    aiHelperPrompts: ["Hoe begeleid ik het incubatieproces bewust?", "Hoe weet ik wanneer ik klaar ben voor illuminatie?", "Hoe combineer ik het creatieve proces met deadlines?"]
  },
  {
    id: "art-interpretation",
    title: "Kunstinterpretatie",
    difficulty: 2,
    emoji: "🖼️",
    academicCategory: "Kunst & Esthetiek",
    skillCategory: "Zingeving",
    tags: ["interpretatie", "kunst", "betekenis", "perspectief"],
    definition: "Kunstinterpretatie is het actieve proces van betekenis geven aan een kunstwerk — niet passief ontvangen maar actief construeren van betekenis vanuit de interactie tussen het werk, de context en de toeschouwer. Er is geen enkele 'correcte' interpretatie, maar sommige zijn rijker dan andere.",
    abstractExample: "Een schilderij spreekt nooit voor zichzelf — het spreekt in dialoog met de toeschouwer. Twee mensen voor hetzelfde werk 'zien' fundamenteel iets anders, afhankelijk van hun cultuur, ervaringen en aandacht. Interpretatie is co-creatie.",
    examples: [
      { domain: "Beeldende kunst", icon: "🖼️", text: "Munch's 'De Schreeuw': is het angst? existentiële paniek? milieu-vernietiging (de rode lucht is historisch gelinkt aan de vulkaanuitbarsting van Krakatau)? Alle interpretaties zijn geldig en verrijken de ervaring." },
      { domain: "Literatuur", icon: "📚", text: "Kafka's 'Het Proces': is het een politieke metafoor (totalitarisme)? een psychologische beschrijving (neurose)? een religieuze allegorie (God's oordeel)? De rijkdom van het werk ligt in deze meervoudigheid." },
      { domain: "Muziek", icon: "🎵", text: "Beethoven's 9e Symfonie: voor de componist een expressie van menselijke triomf. Voor de EU het symbool van Europese eenheid. Voor een Zuid-Afrikaan tijdens apartheid: een marslied van vrijheid. Dezelfde muziek, radicaal verschillende resonantie." }
    ],
    prerequisites: ["aesthetic-experience"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is de 'intentional fallacy' in kunstinterpretatie?", options: ["Dat de kunstenaar altijd gelijk heeft over de betekenis van zijn werk", "Dat de bedoeling van de kunstenaar irrelevant is voor de betekenis van het werk — de tekst 'emancipeert' zich van zijn maker", "Dat kunstinterpretatie subjectief is", "Dat kunstenaars hun werk niet moeten verklaren"], correctIndex: 1, explanation: "W.K. Wimsatt en Monroe Beardsley betoogden dat de intentie van de kunstenaar geen doorslaggevend criterium is voor interpretatie. Het werk bestaat autonoom — de toeschouwer construeert betekenis in dialoog met het werk, los van wat de maker bedoelde." }
    ],
    creativePrompt: "Bekijk een kunstwerk (schilderij, muziek, film) en schrijf je eigen interpretatie op zonder naslag te doen. Lees dan daarna wat anderen erover schrijven. Hoe verschilt jouw interpretatie? Wat verrijkt de andermans perspectief jouw begrip?",
    aiHelperPrompts: ["Hoe leer ik beter naar kunst te kijken?", "Zijn alle kunstinterpretaties even geldig?", "Hoe interpreteer ik moderne kunst die ik niet begrijp?"]
  },
  {
    id: "beauty-truth",
    title: "Schoonheid en Waarheid",
    difficulty: 3,
    emoji: "💫",
    academicCategory: "Kunst & Esthetiek",
    skillCategory: "Zingeving",
    tags: ["schoonheid", "waarheid", "filosofie", "esthetiek"],
    definition: "De relatie tussen schoonheid en waarheid is een centraal filosofisch thema: Plato zag schoonheid als een verschijningsvorm van het Ware en het Goede. Keats schreef 'Beauty is truth, truth beauty.' Wetenschappers beschrijven elegante theorieën als 'mooi' — en deze schoonheidservaring blijkt een betrouwbare gids voor wetenschappelijke juistheid.",
    abstractExample: "Wiskundigen beschrijven vaak dat hun mooiste bewijzen 'waar moeten zijn' — een esthetisch gevoel dat hen naar correcte resultaten leidt. Einstein vertrouwde zijn relativiteitstheorie mede omdat ze zo elegant was. Schoonheid blijkt een epistemisch kompas.",
    examples: [
      { domain: "Wetenschap", icon: "🔬", text: "E=mc² is een schone vergelijking: weinig symbolen, grote omvang van werkelijkheid. De schoonheid van wiskundige elegantie blijkt historisch een betrouwbare indicator van diepe waarheid." },
      { domain: "Kunst", icon: "🎨", text: "Dostojevski: 'Schoonheid zal de wereld redden.' Niet sentimenteel maar als geloof dat esthetische ervaring ons verbindt met het diepere — het echte, het waardevolle, het transcendente." },
      { domain: "Filosofie", icon: "🦉", text: "Plato's kalokagathia: het idee dat het ware, goede en mooie uiteindelijk samenvallen. Dit is een radicale filosofische positie maar met verrassend veel steun in de geschiedenis van wetenschappelijke ontdekking." }
    ],
    prerequisites: ["aesthetic-experience"],
    unlocks: ["eudaimonia"],
    exercises: [
      { type: "multipleChoice", question: "Waarom gebruiken wiskundigen en fysici 'elegantie' als een aanwijzing voor waarheid?", options: ["Toeval — mooie theorie kunnen ook fout zijn", "Historisch bleek dat theorieën die als elegant werden beschreven dieper structuren van de werkelijkheid vingen — schoonheid als indicatie van juistheid", "Schoonheid is objectief in wiskunde", "Elegantie maakt complexe ideeën simpeler"], correctIndex: 1, explanation: "Er is een mysterieuze maar empirisch waarneembare correlatie tussen wiskundige elegantie en diepte/waarheid. Dirac's mooie vergelijkingen bleken later experimenteel bevestigd. Feynman, Einstein en anderen vertrouwden esthetiek als epistemisch kompas naast logica." }
    ],
    creativePrompt: "Denk aan iets in jouw leven of vakgebied dat je als 'elegant' of 'mooi' ervaart — een oplossing, een argument, een idee. Wat maakt het mooi? Klopt die schoonheid met de werkelijkheid of juistheid ervan?",
    aiHelperPrompts: ["Is schoonheid objectief of subjectief?", "Hoe gebruik ik esthetische intuïtie bij beslissingen of probleemoplossing?", "Welke filosofen schreven het meest inspirerend over schoonheid?"]
  },
  {
    id: "creative-courage",
    title: "Creatieve Moed",
    difficulty: 2,
    emoji: "🦁",
    academicCategory: "Kunst & Esthetiek",
    skillCategory: "Creativiteit",
    tags: ["moed", "creativiteit", "angst", "scheppen"],
    definition: "Creatieve moed is de bereidheid om iets te maken — te scheppen, te delen, te tonen — ondanks de angst voor oordeel, mislukking of afwijzing. Het is erkennen dat het maken van kwetsbaar werk de meest menselijke daad is, en het toch doen.",
    abstractExample: "Elke kunstenaar, schrijver of maker kent de lege pagina-angst. Creatieve moed is niet de afwezigheid van die angst, maar het scheppen ondanks haar. Het is het wereld geven van iets wat volledig van jou is — en dus volledig kwetsbaar.",
    examples: [
      { domain: "Kunst", icon: "🎨", text: "Een beginnend schrijver zijn eerste verhaal delen — wetend dat het onvolmaakt is, wetend dat het beoordeeld kan worden, het toch doen. Dit is creatieve moed in haar puurste vorm." },
      { domain: "Werk", icon: "💼", text: "Een onorthodox voorstel doen in een vergadering, wetend dat het afgewezen kan worden. Een nieuw businessmodel verdedigen dat haaks staat op de conventie. Creatieve moed in professionele context." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Je mening geven over iets dat je diep beweegt, ook als je weet dat anderen het er niet mee eens zijn. Of iets maken — muziek, koken, tuinieren — puur voor de vreugde van het maken, zonder resultaatgarantie." }
    ],
    prerequisites: ["vulnerability-courage"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is 'kunstenaarsblok' (creative block) in psychologische zin?", options: ["Gebrek aan talent", "De angst voor oordeel of mislukking die de cognitieve en emotionele vrijheid blokkeert die creativiteit vereist", "Te weinig inspiratie", "Een fase die iedereen doormaakt en die vanzelf overgaat"], correctIndex: 1, explanation: "Creative block is primair een angstfenomeen: de verwachting van perfectionisme, oordeel of mislukking blokkeert de speelse staat die creativiteit vereist. De remedie is zelden 'meer inspiratie' maar 'meer toestemming voor onvolmaatheid'." }
    ],
    creativePrompt: "Maak iets vanavond — schrijf een gedicht, teken iets, kook iets nieuws, maak muziek — zonder het te plannen en zonder het te delen tenzij je wil. Laat het onvolmaakt zijn. Hoe voelt het om te scheppen zonder doel?",
    aiHelperPrompts: ["Hoe overwin ik creative block?", "Hoe leer ik omgaan met de angst voor oordeel over mijn creatief werk?", "Is creatieve moed te trainen?"]
  },
  {
    id: "cultural-literacy",
    title: "Culturele Geletterdheid",
    difficulty: 2,
    emoji: "🌍",
    academicCategory: "Kunst & Esthetiek",
    skillCategory: "Zingeving",
    tags: ["cultuur", "referenties", "context", "communicatie"],
    definition: "Culturele geletterdheid (E.D. Hirsch) is de brede kennis van gedeelde culturele referenties — literatuur, geschiedenis, kunst, mythologie — die effectieve communicatie in een samenleving mogelijk maakt. Gedeelde culturele kennis is de impliciete woordenschat van een beschaving.",
    abstractExample: "Iemand zegt 'hij heeft echt een pyrrusoverwinning behaald' — dit veronderstelt kennis van de Griekse koning Pyrrus. Of 'dat is een kafkaeske situatie' — zonder Kafka-kennis is de communicatie mislukt. Culturele geletterdheid is de gedeelde code die communicatie verrijkt.",
    examples: [
      { domain: "Communicatie", icon: "💬", text: "Politici en columnisten verwijzen naar Dante, Shakespeare, de Bijbel of de Verlichting als gedeeld referentiekader. Wie die kennis mist, mist de halve betekenis van de tekst." },
      { domain: "Werk", icon: "💼", text: "In een internationale context weten welke culturele verwijzingen anderen hebben (Confucius in Azië, de Bijbel in het Midden-Oosten, de Renaissance in Europa) maakt cross-culturele communicatie dieper." },
      { domain: "Kunst", icon: "🎨", text: "Een schilderij begrijpen dat verwijst naar de mythe van Icarus, of een roman die alludeert aan Hamlet, vereist culturele geletterdheid — het mist zijn volle rijkdom zonder die context." }
    ],
    prerequisites: [],
    unlocks: ["aesthetic-experience"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het risico van beperkte culturele geletterdheid in een diverse samenleving?", options: ["Het maakt mensen minder intelligent", "Communicatie verliest diepte en nuance als gedeelde referenties ontbreken, wat verstand en verbinding bemoeilijkt", "Culturele geletterdheid is elitistisch en overbodig", "Het heeft alleen gevolgen voor academici"], correctIndex: 1, explanation: "Culturele geletterdheid is de gedeelde code die diepe communicatie mogelijk maakt. Naarmate samenlevingen diverser worden en gedeelde referenties minder worden, wordt het harder om gedeelde betekenis te creëren — een democratisch en sociaal probleem." }
    ],
    creativePrompt: "Ga op culturele safari: maak een lijst van vijf culturele referenties (mythologisch, historisch, literair) die je vaag kent maar niet goed genoeg om te gebruiken. Bestudeer één ervan diepgaand. Hoe opent het andere teksten en gesprekken?",
    aiHelperPrompts: ["Hoe bouw ik mijn culturele geletterdheid op als volwassene?", "Welke culturele kennis is het meest nuttig voor communicatie?", "Is culturele geletterdheid elitistisch?"]
  },
  {
    id: "sublimity",
    title: "Het Sublieme",
    difficulty: 3,
    emoji: "⛰️",
    academicCategory: "Kunst & Esthetiek",
    skillCategory: "Zingeving",
    tags: ["subliem", "ontzag", "grootsheid", "filosofie"],
    definition: "Het sublieme (Edmund Burke, Immanuel Kant) is de esthetische ervaring van iets dat zo geweldig, overweldigend of onmetelijk groot is dat het de normale menselijke schaal overschrijdt en tegelijkertijd angst en verrukking wekt. Het sublieme overstijgt het mooie — het is onrustig, groots, onbeheerst.",
    abstractExample: "Schoonheid kalmeert en stelt je op je gemak. Het sublieme overweldigt je — een vulkaan, een storm, het uitspansel 's nachts, een titanisch muziekstuk. Je voelt je klein maar ook, paradoxaal, verheven. Het sublieme confronteert met je eigen eindigheid én grootheid.",
    examples: [
      { domain: "Natuur", icon: "🌋", text: "Staan aan de rand van de Grand Canyon of onder een sterrenhemel ver van stedelijke verlichting geeft de sublieme ervaring: overweldiging, ontzag, het besef van de eigen kleinheid en de grootheid van het heelal." },
      { domain: "Muziek", icon: "🎵", text: "Beethovens 9e Symfonie, Mahlers 8e, Wagners Parsifal — werken die zo groot en intens zijn dat ze de luisteraar overmeesteren. Niet prettig in de gewone zin maar diep transformerend." },
      { domain: "Kunst", icon: "🖼️", text: "Rothko's grootschalige kleurenvelden geven sommige beschouwers een bijna religieuze ervaring van het sublieme — overweldigend aanwezig, grensoverschrijdend, bijna angstaanjagend in hun directheid." }
    ],
    prerequisites: ["aesthetic-experience"],
    unlocks: ["memento-mori"],
    exercises: [
      { type: "multipleChoice", question: "Wat onderscheidt het sublieme van het gewoon mooie?", options: ["Het sublieme is mooier", "Het sublieme overweldigt en confronteert met iets dat de normale menselijke schaal overschrijdt — angst en verrukking tegelijk", "Het sublieme is altijd lawaaiiger", "Alleen natuur kan subliem zijn"], correctIndex: 1, explanation: "Burke en Kant onderscheiden: het mooie stelt ons op ons gemak en past in onze schaal. Het sublieme overstijgt ons — het is groter, rauwer, overweldigender. Het confronteert ons met onze eindigheid en wekt tegelijk ontzag voor het grotere." }
    ],
    creativePrompt: "Wanneer heb jij het sublieme ervaren — in natuur, muziek, kunst, of een andere context? Beschrijf de ervaring zo precies mogelijk: wat voelde je? Wat dacht je? Hoe lang hield het aan? Wat bleef er daarna?",
    aiHelperPrompts: ["Hoe zoek ik bewust sublieme ervaringen op?", "Wat is het psychologisch effect van sublieme ervaringen?", "Is het sublieme in moderne cultuur minder aanwezig dan vroeger?"]
  },
  {
    id: "music-cognition",
    title: "Muziek en Cognitie",
    difficulty: 2,
    emoji: "🎵",
    academicCategory: "Kunst & Esthetiek",
    skillCategory: "Zingeving",
    tags: ["muziek", "hersenen", "emotie", "cognitie"],
    definition: "Muziek en cognitie bestudeert hoe muziek de hersenen beïnvloedt: emotionele regulatie, geheugen, motoriek en zelfs taalverwerving. Muziek is een uniek menselijk fenomeen dat vrijwel alle hersengebieden tegelijkertijd activeert — de meest holistische hersenactiviteit die bekend is.",
    abstractExample: "Luisteren naar muziek is geen passieve activiteit voor de hersenen: het activeert motorgebieden (ritme), emotionele centra (amygdala), geheugengebieden (hippocampus), taalgebieden en beloningssystemen tegelijk. Muziek is een totaalsimulatie van het brein.",
    examples: [
      { domain: "Alzheimer", icon: "🧠", text: "Alzheimer-patiënten die geen familieleden meer herkennen, herkennen soms nog liederen uit hun jeugd — muziekgeheugen zit in andere (meer duurzame) hersensystemen dan episodisch geheugen." },
      { domain: "Sportprestatie", icon: "🏃", text: "Muziek tijdens sporten verhoogt prestatie met gemiddeld 10-15%: het maskeert vermoeidheid, reguleert ritme en verhoogt motivatie via dopamine-response — een van de meest bewezen ergogene hulpmiddelen." },
      { domain: "Leren", icon: "📚", text: "Muziekonderwijs op jonge leeftijd verbetert executieve functies, taalverwerking en wiskundige vaardigheden — muziek traint breedspectrum hersenconnectiviteit die overdraagt op andere domeinen." }
    ],
    prerequisites: ["aesthetic-experience"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Waarom is muziek zo effectief bij het oproepen van herinneringen (de 'Proust-effect')?", options: ["Muziek activeert het visuele geheugen", "Muziek is emotioneel gecodeerd — herinneringen met sterke emotionele lading zijn duurzamer opgeslagen, en muziek activeert direct emotionele geheugensporen", "Muzikanten hebben een beter geheugen", "Het is toeval — muziek is niet speciaal voor geheugen"], correctIndex: 1, explanation: "Herinneringen die zijn gevormd tijdens sterke emotionele ervaringen worden duurzamer opgeslagen en makkelijker opgehaald. Muziek activeert het limbisch systeem (emotie) en de hippocampus (geheugen) tegelijk — vandaar de krachtige herinneringsreactie bij vertrouwde muziek." }
    ],
    creativePrompt: "Maak een afspeellijst van tien nummers die sterke herinneringen oproepen. Luister bewust naar elk nummer: welke herinneringen, gevoelens, beelden komen op? Wat vertelt dit over hoe je geheugen werkt?",
    aiHelperPrompts: ["Hoe gebruik ik muziek bewust voor betere cognitieve prestaties?", "Welke muziek helpt bij focus en welke bij creativiteit?", "Hoe beïnvloedt het spelen van een instrument de hersenen anders dan luisteren?"]
  },
  {
    id: "narrative-identity",
    title: "Narratieve Identiteit",
    difficulty: 3,
    emoji: "📖",
    academicCategory: "Kunst & Esthetiek",
    skillCategory: "Zingeving",
    tags: ["verhaal", "identiteit", "betekenis", "autobiografie"],
    definition: "Narratieve identiteit (Dan McAdams) is de theorie dat mensen hun identiteit construeren als een persoonlijk mythos — een voortdurend herzien levensverhaal dat hun ervaringen integreert in een coherent geheel. Wie je bent is deels het verhaal dat je over jezelf vertelt.",
    abstractExample: "Je bent niet de som van je feiten (geboren op X, getrouwd op Y, werkt bij Z). Je bent het verhaal dat je van die feiten maakt: hoe je de moeilijkheden omschrijft, welke betekenis je aan gebeurtenissen geeft, welke personage jij bent in je eigen epische vertelling.",
    examples: [
      { domain: "Persoonlijk", icon: "💙", text: "Twee mensen maken dezelfde scheiding mee. Eén vertelt het als 'ik ben mislukt als partner'. De andere als 'ik heb geleerd wat ik echt nodig heb'. Hetzelfde feit, fundamenteel ander verhaal — en dus fundamenteel andere identiteit en toekomst." },
      { domain: "Therapie", icon: "🛋️", text: "Narratieve therapie (White & Epston) helpt mensen hun levensverhaal te 'herschrijven' — niet de feiten veranderen maar de betekenis en het perspectief. Dit is een van de effectiefste psychotherapeutische benaderingen." },
      { domain: "Werk", icon: "💼", text: "Hoe jij je carrièrepad vertelt — als een rechte lijn, als een kronkelpad vol onverwachte lessen, als een heldentocht — bepaalt hoe jij en anderen jou zien en wat voor kansen je aangaat." }
    ],
    prerequisites: ["meaning-making", "values-clarification"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is de kern van narratieve identiteitstheorie?", options: ["Feiten bepalen je identiteit", "Identiteit wordt geconstrueerd via de verhalen die we over onze ervaringen vertellen — en die verhalen zijn veranderbaar", "Je identiteit is aangeboren en stabiel", "Verhalen zijn illusies die identiteit verbergen"], correctIndex: 1, explanation: "McAdams toont dat mensen actief hun ervaringen selecteren, ordenen en interpreteren in een persoonlijk mythos. Die constructie is dynamisch — het verhaal kan worden herzien, wat directe gevolgen heeft voor identiteit, welzijn en richting." }
    ],
    creativePrompt: "Schrijf de eerste alinea van je levensverhaal — het genre, de toon, de centrale spanning. Is het een held's journey, een coming-of-age verhaal, een tragedie met redemptie? Wat vertelt dat verhaal over hoe je je leven interpreteert?",
    aiHelperPrompts: ["Hoe herschrijf ik een negatief levensverhaal constructief?", "Hoe beïnvloedt mijn levensverhaal mijn toekomstvisie?", "Is narratieve identiteit manipulatie van de werkelijkheid?"]
  },
  {
    id: "reciprocity-principle",
    title: "Wederkerigheid",
    difficulty: 1,
    emoji: "🔄",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Sociale Vaardigheden",
    tags: ["overtuiging", "invloed", "sociale norm", "Cialdini"],
    definition: "Wederkerigheid (Cialdini) is het principe dat mensen zich verplicht voelen iets terug te doen als ze iets hebben ontvangen. Dit diepgewortelde sociale mechanisme is een van de krachtigste beïnvloedingsprincipes en kan worden gebruikt voor oprechte verbinding of manipulatie.",
    abstractExample: "Als iemand je een cadeau geeft — ook een klein, ongewenst cadeau — voel je de sociale druk om iets terug te geven. Dit gevoel van verplichting is zo sterk dat marketeers, politici en fondsenwervers het systematisch benutten.",
    examples: [
      { domain: "Marketing", icon: "📢", text: "Gratis proefversies, monsters in de supermarkt, gratis e-books — allemaal gebaseerd op wederkerigheid: geef iets weg, wek de verplichting, verhoog de kans op aankoop aanzienlijk." },
      { domain: "Relaties", icon: "❤️", text: "Oprechte wederkerigheid bouwt gezonde relaties: jij helpt mij verhuizen, ik help jou wanneer jij het nodig hebt. Dit is het cement van sociale gemeenschappen." },
      { domain: "Onderhandelen", icon: "💼", text: "Een concessie doen in een onderhandeling activeert wederkerigheid: de ander voelt de druk ook een concessie te doen. Dit is de basis van het 'deur in het gezicht'-techniek." }
    ],
    prerequisites: [],
    unlocks: ["social-proof", "commitment-consistency"],
    exercises: [
      { type: "multipleChoice", question: "Hoe werkt wederkerigheid als manipulatiestrategie?", options: ["Door agressief te zijn", "Door een klein ongewenst cadeau te geven dat de ontvanger verplicht voelt groter terug te geven", "Door hoge prijzen te vragen", "Door vriendelijk te zijn"], correctIndex: 1, explanation: "De kracht van wederkerigheid zit in de asymmetrie: een klein cadeau kan een grote verplichting wekken. Fondsenwervers die kleine geschenken sturen zien donaties stijgen — de verplichting overstijgt de waarde van het geschenk." }
    ],
    creativePrompt: "Observeer een week lang hoe wederkerigheid in jouw leven werkt. Wanneer geef jij iets om iets terug te verwachten? Wanneer voel jij je verplicht vanwege een ontvangen gunst? Is die verplichting proportioneel?",
    aiHelperPrompts: ["Hoe gebruik ik wederkerigheid ethisch?", "Hoe herken ik wanneer wederkerigheid tegen mij wordt ingezet?", "Hoe zeg ik nee als wederkerigheid me onder druk zet?"]
  },
  {
    id: "social-proof-2",
    title: "Sociale Bewijskracht",
    difficulty: 1,
    emoji: "👥",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Sociale Vaardigheden",
    tags: ["conformiteit", "normen", "kuddegedrag", "Cialdini"],
    definition: "Sociale bewijskracht is het principe dat mensen het gedrag van anderen als richtlijn gebruiken voor eigen gedrag, met name in onzekere situaties. Als veel mensen iets doen, lijkt het de juiste keuze — ongeacht of dat werkelijk zo is.",
    abstractExample: "Een restaurant waar het vol zit lijkt beter dan een leeg restaurant — ook al heb je geen informatie over de kwaliteit. De aanwezigheid van anderen is het 'bewijs'. Dit is sociale bewijskracht: anderen doen het, dus het klopt.",
    examples: [
      { domain: "Online", icon: "💻", text: "'Meer dan 10.000 tevreden klanten', vijf sterren reviews, 'bestseller' labels — allemaal sociale bewijskracht die koopbeslissingen beïnvloedt zonder inhoudelijke informatie over kwaliteit." },
      { domain: "Gezondheid", icon: "❤️‍🩹", text: "De meeste mensen doen wat hun omgeving doet: als je vrienden weinig bewegen en ongezond eten, is de kans groter dat jij dat ook doet. Sociale norm als gedragsbeïnvloeder." },
      { domain: "Politiek", icon: "🏛️", text: "Peilingen beïnvloeden verkiezingen: een kandidaat die hoog scoort wint extra stemmen van mensen die 'met de winnaar mee' willen — sociale bewijskracht in politiek." }
    ],
    prerequisites: ["reciprocity-principle"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wanneer is sociale bewijskracht het sterkst?", options: ["Altijd en overal", "Bij onzekerheid en wanneer de anderen op jou lijken", "Alleen bij aankopen", "Alleen bij grote groepen"], correctIndex: 1, explanation: "Sociale bewijskracht is het krachtigst wanneer we onzeker zijn (wat is hier de norm?) en wanneer degenen die het doen op ons lijken ('als mensen zoals ik het doen, is het relevant voor mij'). Gelijkenis versterkt het effect significant." }
    ],
    creativePrompt: "Identificeer drie recente beslissingen die je hebt gemaakt op basis van wat anderen doen. Was die invloed bewust of onbewust? Hoe zou je de beslissing anders hebben genomen op basis van eigen criteria?",
    aiHelperPrompts: ["Hoe herken ik wanneer sociale bewijskracht mijn oordeel vertekent?", "Hoe gebruik ik sociale bewijskracht ethisch in mijn werk?", "Wanneer is het verstandig de sociale norm te volgen en wanneer niet?"]
  },
  {
    id: "commitment-consistency",
    title: "Toewijding en Consistentie",
    difficulty: 2,
    emoji: "📌",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Sociale Vaardigheden",
    tags: ["consistentie", "commitment", "overtuiging", "identiteit"],
    definition: "Het toewijdings- en consistentieprincipe (Cialdini) stelt dat mensen nadat ze een standpunt hebben ingenomen of een actie hebben ondernomen, sterk gedreven worden om consistent te blijven met die keuze — zelfs als nieuwe informatie het tegendeel suggereert.",
    abstractExample: "Als je publiekelijk zegt dat je X steunt, zul je waarschijnlijk X blijven steunen — ook als je dat later betwijfelt — om consistent te lijken. Het is psychologisch moeilijker toe te geven dat je van mening bent veranderd dan consistent te zijn.",
    examples: [
      { domain: "Marketing", icon: "📢", text: "De 'voet tussen de deur'-techniek: eerst om een kleine gunst vragen (één euro voor goed doel), dan later om een grotere. Na de eerste toewijding voelt de tweede consistent." },
      { domain: "Persoonlijk", icon: "💙", text: "Iemand die zichzelf identificeert als 'niet-lezer' zal minder snel een boek oppakken — ook als hij veel zou profiteren van lezen. De zelfidentificatie stuurt gedrag via consistentiedrang." },
      { domain: "Politiek", icon: "🏛️", text: "Kiezers die publiekelijk een kandidaat hebben gesteund of een verkiezingsbord hebben geplaatst, zijn moeilijker te overtuigen van andere standpunten — toewijding vergrendelt overtuigingen." }
    ],
    prerequisites: ["reciprocity-principle"],
    unlocks: ["identity-based-habits"],
    exercises: [
      { type: "multipleChoice", question: "Hoe kan het toewijdings- en consistentieprincipe je schaden?", options: ["Het maakt je betrouwbaarder", "Het kan je vasthouden aan foute beslissingen omdat toegeven inconsistentie zou impliceren", "Het heeft geen nadelen", "Het werkt alleen bij anderen, niet bij jezelf"], correctIndex: 1, explanation: "Consistentiedrang kan de sunk cost fallacy versterken: je investering in een standpunt maakt het psychologisch moeilijker om het te herzien. Dit leidt tot voortgezet fout gedrag ter bescherming van zelfconsistentie." }
    ],
    creativePrompt: "Herinner je een beslissing die je lang hebt volgehouden ook nadat je wist dat het niet goed werkte. Wat hield je vast? Was het consistent willen zijn? Hoe had je dit eerder kunnen doorbreken?",
    aiHelperPrompts: ["Hoe vermijd ik dat consistentiedrang me vasthoudt aan foute keuzes?", "Hoe gebruik ik kleine commitments om gewenst gedrag op te bouwen?", "Hoe maak ik het voor anderen makkelijker van mening te veranderen?"]
  },
  {
    id: "scarcity-principle",
    title: "Schaarsteprincipe",
    difficulty: 1,
    emoji: "⏳",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Sociale Vaardigheden",
    tags: ["schaarste", "urgentie", "waarde", "beïnvloeding"],
    definition: "Het schaarsteprincipe stelt dat mensen dingen meer waarderen naarmate ze minder beschikbaar zijn. Beperkte beschikbaarheid — in tijd, hoeveelheid of toegang — verhoogt de waargenomen waarde en urgentie, ongeacht de werkelijke kwaliteit van het object.",
    abstractExample: "Een cookie uit een pot met tien koekjes smaakt minder goed dan dezelfde cookie uit een bijna lege pot — dit is aangetoond in onderzoek. Schaarste verandert de waargenomen waarde letterlijk, niet alleen psychologisch.",
    examples: [
      { domain: "Marketing", icon: "📢", text: "'Nog maar 3 op voorraad!', 'Aanbieding geldig tot middernacht', 'Exclusief voor leden' — allemaal toepassingen van het schaarsteprincipe die urgentie en waarde verhogen." },
      { domain: "Relaties", icon: "❤️", text: "Mensen die moeilijk bereikbaar zijn worden soms aantrekkelijker gevonden — deels door het schaarsteprincipe. Beschikbaarheid verlaagt paradoxaal genoeg soms de waargenomen waarde." },
      { domain: "Collectibles", icon: "🏺", text: "Beperkte oplages, gecertificeerde unieke kunstwerken, één-van-een items — schaarste is de primaire waardedrijver, niet gebruikswaarde." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Waarom verhoogt schaarste de waarde van een object psychologisch?", options: ["Zeldzame dingen zijn altijd van hogere kwaliteit", "Schaarste activeert verliesaversie en reactance, wat urgentie en verlangen vergroot", "Mensen zijn altijd rationeel over prijs", "Schaarste is een objectief kwaliteitscriterium"], correctIndex: 1, explanation: "Schaarste activeert twee mechanismen: verliesaversie (ik zou iets kunnen missen) en psychologische reactance (mijn vrijheid om het te verkrijgen wordt beperkt, dus ik wil het meer). Beide verhogen het verlangen ongeacht werkelijke kwaliteit." }
    ],
    creativePrompt: "Herinner drie aankopen of keuzes die je maakte omdat iets 'schaars' of 'tijdelijk' was. Hoe groot was de bijdrage van schaarste aan je beslissing? Hoe zou je dezelfde keuze maken zonder de tijdsdruk?",
    aiHelperPrompts: ["Hoe herken ik kunstmatige schaarste in marketing?", "Wanneer is echte schaarste een goede reden om snel te beslissen?", "Hoe gebruik ik het schaarsteprincipe ethisch?"]
  },
  {
    id: "authority-bias-influence",
    title: "Autoriteitsbias",
    difficulty: 2,
    emoji: "👔",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Kritisch Denken",
    tags: ["autoriteit", "gezag", "overtuiging", "conformiteit"],
    definition: "Autoriteitsbias is de neiging om de meningen en richtlijnen van mensen met autoriteit — door titel, positie, expertise of symbolen — als juister te beschouwen dan die van anderen, soms boven eigen oordeel. Dit is soms nuttig maar kan ook leiden tot blind volgen van foute autoriteiten.",
    abstractExample: "Een dokter met een witte jas overtuigt anders dan dezelfde persoon in vrijetijdskleding — ook als de inhoud identiek is. Symbolen van autoriteit activeren automatisch meer vertrouwen en gehoorzaamheid.",
    examples: [
      { domain: "Psychologie", icon: "🧠", text: "Milgram's gehoorzaamheidsexperiment: gewone mensen gaven schijnbaar dodelijke elektroshocks aan anderen op aanwijzing van een autoriteit. Autoriteit overschrijft individueel moreel oordeel in schokkende mate." },
      { domain: "Werk", icon: "💼", text: "Een medewerker die een duidelijk fout besluit niet aanvecht omdat het van de CEO komt, illustreert autoriteitsbias in praktijk. Hierarchische positie vervangt inhoudelijk oordeel." },
      { domain: "Media", icon: "📺", text: "Een 'expert' op tv overtuigt kijkers meer dan dezelfde mening van een vriend — ook als de expert geen relevante expertise heeft voor de specifieke claim die hij maakt." }
    ],
    prerequisites: ["social-proof-2"],
    unlocks: ["epistemic-humility"],
    exercises: [
      { type: "multipleChoice", question: "Wanneer is het volgen van autoriteit nuttig en wanneer niet?", options: ["Altijd nuttig", "Nuttig bij legitieme expertise in relevant domein; gevaarlijk bij misplaatste autoriteit of gecreëerde autoriteitsperceptie", "Nooit nuttig — altijd zelf beoordelen", "Nuttig bij grote beslissingen, onnuttig bij kleine"], correctIndex: 1, explanation: "Autoriteit als heuristiek is efficiënt: een neurochirurg vertrouwen op hersenchirurgie is rationeel. Het wordt problematisch als: de autoriteit buiten haar expertise spreekt, de perceptie kunstmatig is gecreëerd, of als autoriteit kritisch denken vervangt." }
    ],
    creativePrompt: "Identificeer drie mensen of instituten wiens mening jij automatisch meer vertrouwt. Waarop is dat vertrouwen gebaseerd? Is het gebaseerd op werkelijke expertise of op symbolen van autoriteit? Hoe zou je hun claims kunnen toetsen?",
    aiHelperPrompts: ["Hoe onderscheid ik legitieme expertise van gecreëerde autoriteitsperceptie?", "Hoe bevraag ik autoriteiten respectvol maar kritisch?", "Hoe bouw ik zelf gezag op dat op werkelijke expertise is gebaseerd?"]
  },
  {
    id: "liking-principle",
    title: "Sympathieprincipe",
    difficulty: 1,
    emoji: "😊",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Sociale Vaardigheden",
    tags: ["sympathie", "invloed", "aantrekkelijkheid", "gelijkenis"],
    definition: "Het sympathieprincipe stelt dat mensen eerder instemmen met verzoeken van mensen die ze sympathiek vinden. Sympathie wordt vergroot door: fysieke aantrekkelijkheid, gelijkenis, vertrouwdheid, complimenten en associatie met positieve dingen.",
    abstractExample: "We kopen meer van verkopers die we aardig vinden, stemmen meer op politici die we sympathiek achten, en helpen eerder vrienden dan vreemden — ook als de inhoud van het verzoek identiek is. Sympathie is een sociale smeerolie die beslissingen beïnvloedt los van inhoud.",
    examples: [
      { domain: "Verkoop", icon: "💼", text: "Tupperware-feestjes zijn volledig gebaseerd op het sympathieprincipe: je koopt van een vriendin in jouw sociale omgeving. De vriendschapsband vergroot de koopbereidheid enorm." },
      { domain: "Politiek", icon: "🏛️", text: "Onderzoek toont dat fysiek aantrekkelijkere kandidaten meer stemmen krijgen — een direct effect van het sympathieprincipe, niet van politieke inhoud." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Mensen geven vaker toe aan verzoeken van vrienden dan van vreemden met identieke verzoeken. Sympathie overbrugt sociale grenzen die inhoud alleen niet kan overbruggen." }
    ],
    prerequisites: ["reciprocity-principle"],
    unlocks: ["rapport-building"],
    exercises: [
      { type: "multipleChoice", question: "Welke factoren verhogen sympathie het meest?", options: ["Hoge status en expertise", "Gelijkenis, vertrouwdheid, complimenten en associatie met positieve ervaringen", "Formele kleding en professionele taal", "Directheid en efficiëntie"], correctIndex: 1, explanation: "Cialdini identificeert vijf sympathiefactoren: fysieke aantrekkelijkheid, gelijkenis, vertrouwdheid, complimenten, en conditionering. Gelijkenis en vertrouwdheid zijn de meest krachtige." }
    ],
    creativePrompt: "Bij wie in jouw leven hecht je meer waarde aan wat ze zeggen dan misschien inhoudelijk gerechtvaardigd is? Is dat gezonde sympathie of sympathiebias? Hoe houdt je het onderscheid bij?",
    aiHelperPrompts: ["Hoe bouw ik oprechte sympathie op in professionele relaties?", "Hoe herken ik wanneer sympathie mijn oordeel vertekent?", "Is het gebruik van sympathie in overtuiging altijd manipulatie?"]
  },
  {
    id: "foot-in-door",
    title: "Voet-in-de-deur Techniek",
    difficulty: 1,
    emoji: "🚪",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Sociale Vaardigheden",
    tags: ["overtuiging", "stapsgewijs", "commitment", "verzoeken"],
    definition: "De voet-in-de-deur techniek is een overtuigingsstrategie waarbij je begint met een klein verzoek dat vrijwel zeker wordt ingewilligd, en daarna een groter verzoek doet. Door de eerste instemming voelt het grotere verzoek consistenter met het zelfbeeld van de persoon.",
    abstractExample: "Een verkoopster die eerst vraagt of je even de winkel in wil kijken (klein verzoek), dan of je dit product wil proberen, dan of je het wil kopen — heeft stapsgewijs commitment opgebouwd. Elke stap is kleiner dan de volgende stap als directe vraag zou voelen.",
    examples: [
      { domain: "Fondsenwerving", icon: "❤️", text: "Vredesorganisaties vroegen mensen eerst een kleine sticker te plaatsen (bijna niemand weigert). Later vroegen ze een groot bord in de tuin te plaatsen. Sticker-groep: 76% ja; controlegroep: 17% ja." },
      { domain: "Werk", icon: "💼", text: "Een junior medewerker die zijn baas overtuigt een klein experiment toe te staan, heeft een opening gecreëerd. Als het werkt: commitment voor groter experiment." },
      { domain: "Relaties", icon: "❤️", text: "Kleine gunsten vragen en verlenen bouwt wederkerigheid en commitment op. Dit is de organische manier waarop mensen diepere banden vormen." }
    ],
    prerequisites: ["commitment-consistency"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Waarom werkt de voet-in-de-deur techniek?", options: ["Mensen zijn lui en zeggen liever ja", "De eerste instemming verandert het zelfconcept — 'ik ben iemand die dit soort dingen doet' — wat grotere verzoeken consistent maakt", "Kleine verzoeken conditioneren mensen om automatisch ja te zeggen", "Het werkt alleen bij vrienden"], correctIndex: 1, explanation: "Na de eerste instemming herdefiniëren mensen hun zelfconcept subtiel: 'ik steun dit soort zaak'. Het grotere verzoek voelt dan consistent met die nieuwe zelfperceptie. Consistentiedrang doet de rest." }
    ],
    creativePrompt: "Kies iets wat je graag wil bereiken van iemand. Wat is de kleinste, gemakkelijkste eerste stap die je kunt vragen? Plan een reeks van toenemende stappen richting je doel.",
    aiHelperPrompts: ["Wanneer is de voet-in-de-deur ethisch en wanneer manipulatief?", "Hoe herken ik wanneer deze techniek op mij wordt toegepast?", "Hoe combineer ik dit met andere overtuigingstechnieken?"]
  },
  {
    id: "anchoring-negotiation",
    title: "Ankereffect in Onderhandeling",
    difficulty: 2,
    emoji: "⚓",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Sociale Vaardigheden",
    tags: ["ankereffect", "onderhandelen", "prijzen", "cognitie"],
    definition: "Het ankereffect in onderhandeling beschrijft hoe het eerste getal of voorstel dat wordt geïntroduceerd — het 'anker' — de volledige verdere discussie beïnvloedt. Onderhandelen begint altijd vanuit het anker, zelfs als het volkomen willekeurig of extreem was.",
    abstractExample: "Gooi een dartpijl op een rad met willekeurige getallen. Vraag daarna: 'Hoeveel Afrikaanse landen zijn er in de VN?' De willekeurige waarde van het rad voorspelt het antwoord — ook al is het aantoonbaar irrelevant. Dit is het ankereffect.",
    examples: [
      { domain: "Vastgoed", icon: "🏠", text: "De vraagprijs van een huis is het anker voor de onderhandeling. Onderzoek toont dat een hogere vraagprijs leidt tot hogere verkoopprijzen — ook als het huis objectief hetzelfde waard is." },
      { domain: "Salaris", icon: "💰", text: "De eerste die een salarisgetal noemt in een onderhandeling, zet het anker. Als jij als eerste een hoog bedrag noemt, verschuift de hele discussie." },
      { domain: "Retail", icon: "🛒", text: "'Normaalprijs €299, nu €149' — de €299 is het anker dat €149 goedkoop laat lijken, ook als €149 de werkelijke marktwaarde is." }
    ],
    prerequisites: ["scarcity-principle"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke onderhandelingsstrategie neutraliseert het ankereffect het best?", options: ["Altijd een tegenbod doen ver van het anker", "Het anker expliciet erkennen als irrelevant en de discussie herkaderen vanuit objectieve criteria", "Nooit als eerste een bod doen", "Hogere aankopen altijd in termijnen denken"], correctIndex: 1, explanation: "Het anker expliciet benoemen ('Dat getal is een startpunt, maar laten we kijken naar objectieve criteria') vermindert zijn kracht. Bewust alternatieve referentiepunten invoeren ondermijnt het ankereffect." }
    ],
    creativePrompt: "Bereid een onderhandeling voor die je binnenkort hebt. Welk anker ga jij introduceren? Hoe hoog is het realistisch hoog? Hoe ga je reageren als de ander als eerste een anker gooit?",
    aiHelperPrompts: ["Hoe bepaal ik een sterk openingsbod in onderhandelingen?", "Hoe herken ik wanneer ik door een anker word beïnvloed?", "Welke andere cognitieve biases spelen een rol in onderhandelingen?"]
  },
  {
    id: "door-in-face",
    title: "Deur-in-het-gezicht Techniek",
    difficulty: 2,
    emoji: "🔚",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Sociale Vaardigheden",
    tags: ["overtuiging", "contrast", "verzoeken", "wederkerigheid"],
    definition: "De deur-in-het-gezicht techniek is de omgekeerde van voet-in-de-deur: begin met een extreem groot verzoek dat bijna zeker wordt geweigerd, doe dan een kleiner verzoek dat je eigenlijk wil. Door contrast en wederkerigheid stijgt de kans op instemming met het tweede verzoek.",
    abstractExample: "Je wil dat een vriend je helpt verhuizen (één dag). Je vraagt eerst of hij een week wil helpen bij een renovatie. Hij weigert. Dan vraag je of hij één dag wil helpen verhuizen. De kans op 'ja' is groter dan als je direct om één dag had gevraagd.",
    examples: [
      { domain: "Fondsenwerving", icon: "❤️", text: "Een fondsenwerver vraagt €500 aan een potentiële donor. Na weigering vraagt hij €50. De kans op €50-instemming is groter dan als hij direct om €50 had gevraagd — door contrast en wederkerigheid." },
      { domain: "Opvoeding", icon: "👨‍👩‍👧", text: "Een tiener vraagt of hij de hele nacht mag wegblijven (zeker nee). Dan vraagt hij of hij tot 1 uur mag blijven. De eerste weigering maakt de tweede concessie voor de ouder aantrekkelijker." },
      { domain: "Werk", icon: "💼", text: "Een werknemer vraagt zijn baas om een week thuiswerken (nee). Dan vraagt hij om twee dagen per week thuiswerken. De eerste weigering creëert een 'concessie' voor het kleinere verzoek." }
    ],
    prerequisites: ["reciprocity-principle", "foot-in-door"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Waarom werkt de deur-in-het-gezicht techniek?", options: ["Mensen vergeten het eerste verzoek snel", "Het gecreëerde contrast maakt het tweede verzoek kleiner lijken, en de concessie wekt wederkerigheid", "Mensen zijn inconsistent in hun beslissingen", "Het werkt alleen bij autoritaire persoonlijkheden"], correctIndex: 1, explanation: "Twee mechanismen werken samen: contrast (na een groot verzoek lijkt het kleine verzoek redelijker) en wederkerigheid (de aanvrager deed een concessie door te reduceren; de ander voelt de norm ook een concessie te doen door in te stemmen)." }
    ],
    creativePrompt: "Bedenk een situatie waarbij je deur-in-het-gezicht zou kunnen toepassen voor iets dat je werkelijk wil. Wat is het extreme verzoek? Wat is het echte doel? Hoe ver moet het extreme verzoek gaan om effectief te zijn?",
    aiHelperPrompts: ["Wanneer is deur-in-het-gezicht effectiever dan voet-in-de-deur?", "Is deur-in-het-gezicht altijd manipulatie?", "Hoe ga ik om met dit als het op mij wordt toegepast?"]
  },
  {
    id: "priming-effect",
    title: "Primingeffect",
    difficulty: 2,
    emoji: "🔑",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Kritisch Denken",
    tags: ["priming", "onderbewust", "context", "gedrag"],
    definition: "Priming is het verschijnsel waarbij blootstelling aan één stimulus de verwerking van en reactie op een latere stimulus beïnvloedt — vaak buiten bewust bewustzijn. Onze gedachten, oordelen en gedragingen worden continu beïnvloed door recente ervaringen en context.",
    abstractExample: "Mensen die gevraagd worden een zin met het woord 'oud' te maken, lopen daarna langzamer de gang door. Mensen die een warme kop koffie vasthouden beoordelen anderen als 'warmer'. Dit is priming: context beïnvloedt gedrag zonder dat je het weet.",
    examples: [
      { domain: "Marketing", icon: "📢", text: "Supermarkten spelen langzame muziek om klanten langzamer te laten lopen en meer te laten kopen. Of Franse muziek in de wijnafdeling om Franse wijn te primen. Subtiele priming verhoogt verkopen." },
      { domain: "Werk", icon: "💼", text: "Een vergadering beginnen met positieve nieuwsberichten primet de groep voor constructief denken. Een vergadering beginnen met problemen primet defensief denken." },
      { domain: "Onderwijs", icon: "📚", text: "Studenten herinneren aan hun studenten-identiteit voor een toets verbetert prestaties. Herinneren aan stereotypen verslechtert dit — het 'stereotype threat' is een vorm van negatieve priming." }
    ],
    prerequisites: ["social-proof-2"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat maakt priming zo krachtig als beïnvloedingsinstrument?", options: ["Het is altijd bewust toegepast", "Het werkt buiten bewust bewustzijn — mensen merken de beïnvloeding niet en kunnen zich er daardoor niet tegen verdedigen", "Priming werkt alleen bij zwakke wilskracht", "Het heeft alleen korte-termijneffecten"], correctIndex: 1, explanation: "Priming is effectief juist omdat het onbewust werkt. Bewuste beïnvloeding kan worden herkend en weerstaan. Priming beïnvloedt associatieve netwerken zonder dat de persoon zich bewust is van de invloed." }
    ],
    creativePrompt: "Ontwerp de ideale 'priming-omgeving' voor een doel dat je wil bereiken: een productieve werkdag, een creatieve sessie, een moeilijk gesprek. Welke elementen in je omgeving kun je aanpassen om je de juiste richting te primen?",
    aiHelperPrompts: ["Hoe gebruik ik priming bewust voor betere prestaties?", "Hoe herken ik wanneer ik ongewenst geprimd word?", "Welke omgevingsfactoren primen het meest?"]
  },

  // Batch Q – Ondernemerschap & Innovatie
  {
    id: "lean-startup",
    title: "Lean Startup",
    difficulty: 2,
    emoji: "🚀",
    academicCategory: "Bedrijfskunde",
    skillCategory: "Ondernemerschap & Innovatie",
    tags: ["startup", "validatie", "mvp", "iteratie"],
    definition: "De Lean Startup-methode bouwt snel een minimaal werkbaar product (MVP), meet de reactie van echte gebruikers en leert van die data om te beslissen of je doorgaat of van richting verandert.",
    abstractExample: "In plaats van een jaar aan een perfect product te bouwen, lanceer je in zes weken een eenvoudige versie, kijk je wie het gebruikt en pas je aan op basis van wat je leert.",
    examples: [
      { domain: "Technologie", icon: "💻", text: "Een app-idee wordt eerst getest met een simpele landingspagina om te meten of mensen zich aanmelden, vóór een regel code wordt geschreven." },
      { domain: "Horeca", icon: "🍽️", text: "Een restaurantconcept wordt getest met een pop-up van één weekend voordat je een lang huurcontract tekent." },
      { domain: "Onderwijs", icon: "📚", text: "Een nieuwe cursus wordt eerst als live workshop gegeven voor vijf studenten om te zien wat werkt voordat het online platform wordt gebouwd." }
    ],
    prerequisites: [],
    unlocks: ["minimum-viable-product", "pivot-persevere"],
    exercises: [
      { type: "multipleChoice", question: "Wat is het primaire doel van een MVP?", options: ["Een perfect product lanceren", "Zo snel mogelijk leren van echte gebruikers", "Investeerders indrukken", "Concurrenten voor zijn"], correct: 1, explanation: "Een MVP is bedoeld om maximaal te leren met minimale inspanning." }
    ],
    creativePrompt: "Kies een idee dat je al lang hebt. Beschrijf de absolute minimale versie die je in één week zou kunnen testen. Wat wil je precies leren?",
    aiHelperPrompts: ["Hoe bepaal ik wat essentieel is voor mijn MVP?", "Wanneer is het tijd om te pivotten versus doorzetten?", "Hoe valideer ik een business-idee zonder code te schrijven?"]
  },
  {
    id: "minimum-viable-product",
    title: "Minimaal Levensvatbaar Product",
    difficulty: 2,
    emoji: "🧪",
    academicCategory: "Bedrijfskunde",
    skillCategory: "Ondernemerschap & Innovatie",
    tags: ["mvp", "prototyping", "iteratie", "launch"],
    definition: "Een MVP is de meest basale versie van een product die genoeg waarde biedt om vroege gebruikers aan te trekken en waardevolle feedback te verzamelen voor verdere ontwikkeling.",
    abstractExample: "Een MVP is als een schets van een huis: gedetailleerd genoeg om feedback te krijgen over de indeling, maar zonder de dure bouw van muren en daken.",
    examples: [
      { domain: "Software", icon: "💻", text: "Dropbox begon met een eenvoudige demovideo om te testen of er vraag was naar cloudopslag, vóór het product technisch bestond." },
      { domain: "Fashion", icon: "👗", text: "Een kledingmerk test nieuwe stijlen door een kleine oplage van tien stuks te maken en die op markten te verkopen." },
      { domain: "Dienstverlening", icon: "🤝", text: "Een consultant biedt één specifieke dienst aan via een eenvoudige website voordat een volledig bureau wordt opgericht." }
    ],
    prerequisites: ["lean-startup"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welk criterium is het meest essentieel voor een MVP?", options: ["Zo goedkoop mogelijk", "Geeft de kern van de waardepropositie weer", "Heeft alle gewenste functies", "Is technisch perfect"], correct: 1, explanation: "Een MVP moet de kern van de waardepropositie aantonen om echte lessen te genereren." }
    ],
    creativePrompt: "Voor jouw favoriete product of dienst: welke ene kernfunctie maakt alles waardevol? Hoe zou je alleen díé functie in één dag kunnen bouwen?",
    aiHelperPrompts: ["Wat is het verschil tussen MVP en prototype?", "Hoe voorkom ik dat mijn MVP te klein wordt?", "Welke metrics zijn belangrijk bij een MVP-test?"]
  },
  {
    id: "pivot-persevere",
    title: "Pivotten of Doorzetten",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Bedrijfskunde",
    skillCategory: "Ondernemerschap & Innovatie",
    tags: ["strategie", "beslissing", "richting", "aanpassen"],
    definition: "Op basis van wat je leert van gebruikers besluit je of je de huidige richting doorzet (persevere) of een fundamentele koerswijziging maakt (pivot) naar een kansrijkere aanpak.",
    abstractExample: "Een pivot is als een zeiler die de wind verkeerd inschat: je houdt hetzelfde doel (de bestemming), maar kiest een andere route om er toch te komen.",
    examples: [
      { domain: "Technologie", icon: "💻", text: "Instagram begon als een locatie-check-in app (Burbn) maar pivotteerde naar foto's delen toen bleek dat gebruikers alleen die functie gebruikten." },
      { domain: "Gaming", icon: "🎮", text: "Slack begon als een interne communicatietool voor een gamebedrijf dat mislukte, en werd gelanceerd als zelfstandig product." },
      { domain: "Retail", icon: "🛍️", text: "Een webshop voor hondenvoer stopt daarmee maar start met gepersonaliseerde huisdierabonnementen na feedback van trouwe klanten." }
    ],
    prerequisites: ["lean-startup"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wanneer is pivotten de juiste keuze?", options: ["Als het moeilijk wordt", "Als data aantoont dat de huidige aanpak niet werkt", "Als investeerders het vragen", "Na één maand altijd"], correct: 1, explanation: "Pivotten is een datagedreven beslissing, niet een emotionele reactie op tegenslagen." }
    ],
    creativePrompt: "Denk aan een project dat 'mislukte'. Welke onverwachte inzichten of bijproducten kwamen er uit? Had een pivot geholpen, en zo ja, welke richting had je kunnen inslaan?",
    aiHelperPrompts: ["Hoe weet ik wanneer ik moet pivotten?", "Wat zijn klassieke pivot-patronen bij startups?", "Hoe communiceer ik een pivot naar investeerders?"]
  },
  {
    id: "design-thinking",
    title: "Design Thinking",
    difficulty: 2,
    emoji: "🎨",
    academicCategory: "Ontwerpleer",
    skillCategory: "Ondernemerschap & Innovatie",
    tags: ["creativiteit", "empathie", "prototyping", "gebruiker"],
    definition: "Design Thinking is een mensgerichte aanpak voor innovatie die empathie voor de gebruiker, creatief brainstormen, prototyping en testen combineert om oplossingen te vinden die écht werken.",
    abstractExample: "Design Thinking is als een detective die eerst de misdaadscène grondig onderzoekt (empathie), dan theorieën bedenkt (ideeën), een vermoeden test (prototype) en dan aanpasst op basis van bewijs.",
    examples: [
      { domain: "Gezondheidszorg", icon: "🏥", text: "Ziekenhuizen ontwerpen patiëntroutes door eerst een dag als patiënt mee te lopen en de emotionele reis in kaart te brengen." },
      { domain: "Onderwijs", icon: "📚", text: "Scholen herontwerpen de kantine door leerlingen te interviewen over wat ze écht vervelend vinden aan de lunchpauze." },
      { domain: "Productontwerp", icon: "🛠️", text: "IDEO ontwierp betere ziekenhuisbedsystemen door nachtdiensten van verpleegkundigen bij te wonen." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is de eerste stap in Design Thinking?", options: ["Prototypen", "Brainstormen", "Empathie opbouwen met de gebruiker", "Testen"], correct: 2, explanation: "Empathie staat centraal: je moet de gebruiker echt begrijpen voordat je oplossingen bedenkt." }
    ],
    creativePrompt: "Kies een alledaags probleem (wachten bij de kassa, vergeten sleutels). Doe 30 minuten 'veldonderzoek' door mensen te observeren. Wat zie je dat je daarvoor niet zag?",
    aiHelperPrompts: ["Hoe voer ik een empathie-interview?", "Wat zijn goede prototyping-technieken?", "Hoe combineer ik Design Thinking met Agile?"]
  },
  {
    id: "opportunity-recognition",
    title: "Kansen Herkennen",
    difficulty: 1,
    emoji: "🔍",
    academicCategory: "Bedrijfskunde",
    skillCategory: "Ondernemerschap & Innovatie",
    tags: ["kansen", "observatie", "markt", "creativiteit"],
    definition: "Kansen herkennen is het vermogen om problemen, frustraties of inefficiënties in de wereld te zien als mogelijke basis voor een waardevol product, dienst of verbetering.",
    abstractExample: "Kansen herkennen is als een plumber die niet alleen een lekkende kraan ziet, maar ook beseft dat er een markt is voor preventief leidingonderhoud.",
    examples: [
      { domain: "Transport", icon: "🚕", text: "Uber ontstond doordat de oprichters op een koude avond geen taxi konden vinden in Parijs en zich afvroegen: 'Wat als je via een app direct een rit kon bestellen?'" },
      { domain: "Voeding", icon: "🥗", text: "HelloFresh herkende dat mensen gezond willen koken maar te druk zijn om te plannen en boodschappen te doen." },
      { domain: "Werkplek", icon: "🏢", text: "WeWork zag dat freelancers nood hadden aan professionele werkruimte zonder de hoge kosten van een kantoorhuur." }
    ],
    prerequisites: [],
    unlocks: ["lean-startup"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de beste bron voor het herkennen van ondernemerskansen?", options: ["Businessplanwedstrijden", "Dagelijkse frustraties en problemen", "Wat investeerders leuk vinden", "Academische trends"], correct: 1, explanation: "De meeste succesvolle bedrijven lossen een probleem op dat de oprichter zelf ervaarde." }
    ],
    creativePrompt: "Houd één dag een 'frustratielijst' bij: noteer elk moment dat iets je ergert of niet werkt zoals je wilt. Aan het eind van de dag: welke frustratieoplossing zou het meest waardevol zijn?",
    aiHelperPrompts: ["Hoe onderscheid ik een echte kans van een vals-positief?", "Welke vragen helpen bij het evalueren van een kans?", "Hoe vind ik onontdekte marktkansen?"]
  },
  {
    id: "value-proposition",
    title: "Waardepropositie",
    difficulty: 2,
    emoji: "💎",
    academicCategory: "Bedrijfskunde",
    skillCategory: "Ondernemerschap & Innovatie",
    tags: ["waarde", "klant", "differentiatie", "propositie"],
    definition: "Een waardepropositie is een heldere uitleg van hoe jouw product of dienst een specifiek klantprobleem oplost, welke voordelen het biedt en waarom de klant jou zou kiezen boven alternatieven.",
    abstractExample: "Een waardepropositie is als een eerste date: je legt in één zin uit wie je bent, wat je te bieden hebt en waarom dit de moeite waard is om verder te verkennen.",
    examples: [
      { domain: "Technologie", icon: "💻", text: "Zoom: 'Videovergaderen dat gewoon werkt' — eenvoudig, betrouwbaar, geen technische rompslomp." },
      { domain: "Financiën", icon: "💳", text: "Revolut: 'Bankieren voor de geglobaliseerde wereld' — geen wisselkosten, directe internationale overschrijvingen." },
      { domain: "Gezondheidszorg", icon: "🏥", text: "Een huisartsenpraktijk met avondopenstelling: 'Medische zorg die past bij jouw agenda, niet andersom.'" }
    ],
    prerequisites: ["opportunity-recognition"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welk element is NIET deel van een sterke waardepropositie?", options: ["Het probleem dat je oplost", "De voordelen voor de klant", "Jouw oprichtingsverhaal", "Waarom jij beter bent dan alternatieven"], correct: 2, explanation: "Je oprichtingsverhaal is interessant maar maakt geen deel uit van de kernwaardepropositie." }
    ],
    creativePrompt: "Schrijf de waardepropositie voor jezelf als professional in één zin: 'Ik help [doelgroep] om [probleem] op te lossen door [unieke aanpak], waardoor zij [resultaat].'",
    aiHelperPrompts: ["Hoe test ik of mijn waardepropositie resoneert?", "Wat is het verschil tussen waardepropositie en missie?", "Hoe maak ik mijn waardepropositie concreter?"]
  },
  {
    id: "network-effects",
    title: "Netwerkeffecten",
    difficulty: 2,
    emoji: "🕸️",
    academicCategory: "Economie",
    skillCategory: "Ondernemerschap & Innovatie",
    tags: ["netwerk", "schaalvoordeel", "platform", "groei"],
    definition: "Netwerkeffecten treden op wanneer een product of dienst waardevoller wordt naarmate meer mensen het gebruiken — elk nieuw lid vergroot de waarde voor alle bestaande leden.",
    abstractExample: "Een telefoon is nutteloos als jij de enige bent die er een heeft; elke nieuwe gebruiker maakt het netwerk voor iedereen waardevoller.",
    examples: [
      { domain: "Technologie", icon: "💻", text: "WhatsApp: hoe meer vrienden er zitten, hoe groter de reden voor anderen om ook te stappen." },
      { domain: "Marktplaatsen", icon: "🛍️", text: "Airbnb: meer hosts trekken meer reizigers aan, wat weer meer hosts aantrekt — een zichzelf versterkende cyclus." },
      { domain: "Betalen", icon: "💳", text: "Creditcards zijn waardevoller als meer winkels ze accepteren en meer klanten ze gebruiken." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat beschrijft het netwerkeffect het best?", options: ["Hoe groot het netwerk van investeerders is", "Hoe waarde toeneemt met het aantal gebruikers", "Hoe snel een product groeit", "Hoeveel servers nodig zijn"], correct: 1, explanation: "Netwerkeffecten beschrijven de relatie tussen het aantal gebruikers en de waarde per gebruiker." }
    ],
    creativePrompt: "Welke producten gebruik jij dagelijks die sterke netwerkeffecten hebben? Hoe zou jouw leven eruitzien als je de enige gebruiker was? Schrijf de gedachtenexperiment uit.",
    aiHelperPrompts: ["Hoe bouw ik netwerkeffecten in mijn product?", "Wat is het 'cold start'-probleem bij netwerkeffecten?", "Hoe beschermen netwerkeffecten tegen concurrentie?"]
  },
  {
    id: "business-model-canvas",
    title: "Business Model Canvas",
    difficulty: 2,
    emoji: "📊",
    academicCategory: "Bedrijfskunde",
    skillCategory: "Ondernemerschap & Innovatie",
    tags: ["businessmodel", "strategie", "canvas", "planning"],
    definition: "Het Business Model Canvas is een strategisch hulpmiddel dat een businessmodel visualiseert in negen bouwblokken: klantsegmenten, waardepropositie, kanalen, klantrelaties, inkomstenstromen, sleutelbronnen, sleutelactiviteiten, sleutelpartners en kostenstructuur.",
    abstractExample: "Een Business Model Canvas is als een röntgenfoto van een bedrijf: het toont alle interne structuren tegelijkertijd op één pagina.",
    examples: [
      { domain: "Media", icon: "📺", text: "Netflix's canvas toont twee klantsegmenten (kijkers en contentmakers), meerdere inkomstenstromen en technologie als sleutelbron." },
      { domain: "Retail", icon: "🛒", text: "IKEA's canvas benadrukt zelfbouw als waardepropositie, gecombineerd met enorme inkoopkracht als sleutelbron." },
      { domain: "Onderwijs", icon: "📚", text: "Een online cursusplatform tekent apart de kanalen voor studenten (social media) en docenten (partnerschappen met universiteiten)." }
    ],
    prerequisites: ["value-proposition"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke van de negen bouwblokken staat centraal in het Business Model Canvas?", options: ["Kostenstructuur", "Waardepropositie", "Klantsegmenten", "Inkomstenstromen"], correct: 1, explanation: "De waardepropositie is het hart: alle andere bouwblokken organiseren zich er omheen." }
    ],
    creativePrompt: "Teken het Business Model Canvas voor een hypothetisch bedrijf dat jouw grootste dagelijkse ergernis oplost. Vul alle negen vakjes in.",
    aiHelperPrompts: ["Hoe gebruik ik het Business Model Canvas voor een bestaand bedrijf?", "Wat is het verschil tussen Business Model Canvas en businessplan?", "Welke bouwblokken veranderen het meest bij een pivot?"]
  },
  {
    id: "bootstrapping",
    title: "Bootstrappen",
    difficulty: 1,
    emoji: "👢",
    academicCategory: "Bedrijfskunde",
    skillCategory: "Ondernemerschap & Innovatie",
    tags: ["financiering", "autonomie", "groei", "zelfvoorzienend"],
    definition: "Bootstrappen betekent een bedrijf starten en laten groeien met eigen middelen en inkomsten uit klanten, zonder externe investeerders of leningen — wat leidt tot maximale controle maar beperkt de groeisnelheid.",
    abstractExample: "Bootstrappen is als een boom kweken van een eikel die je zelf plant: het duurt langer dan een kant-en-klare boom kopen, maar de boom is helemaal van jou.",
    examples: [
      { domain: "Technologie", icon: "💻", text: "Basecamp (nu Hey) groeide jarenlang zonder externe investeerders en is nog steeds volledig in eigendom van de oprichters." },
      { domain: "Dienstverlening", icon: "🤝", text: "Een freelance designer bouwt een agency op door winst te herinvesteren in een eerste werknemer, dan een tweede." },
      { domain: "Retail", icon: "🛍️", text: "Een handgemaakt sieradenmerk verkoopt op Etsy, gebruikt die inkomsten om materialen te kopen en groeit maand voor maand." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het grootste voordeel van bootstrappen?", options: ["Snelle groei", "Volledige controle en eigenaarschap", "Toegang tot expertise van investeerders", "Minder risico bij mislukking"], correct: 1, explanation: "Bootstrappers behouden 100% eigendom en hoeven geen verantwoording af te leggen aan externe partijen." }
    ],
    creativePrompt: "Stel je voor dat je een bedrijf start met €500 en geen externe financiering. Welke stappen zou je de eerste drie maanden zetten? Beschrijf hoe je de eerste euro's verdient.",
    aiHelperPrompts: ["Hoe financier ik groei zonder investeerders?", "Wanneer is externe financiering toch verstandig?", "Wat zijn de valkuilen van bootstrappen?"]
  },
  {
    id: "disruptive-innovation",
    title: "Disruptieve Innovatie",
    difficulty: 3,
    emoji: "💥",
    academicCategory: "Innovatiemanagement",
    skillCategory: "Ondernemerschap & Innovatie",
    tags: ["disruptie", "innovatie", "markt", "strategie"],
    definition: "Disruptieve innovatie beschrijft hoe kleinere bedrijven met eenvoudigere, goedkopere producten eerst de onderkant van de markt bedienen en geleidelijk de marktleiders verdringen die te veel focussen op hun beste klanten.",
    abstractExample: "Disruptieve innovatie is als water dat langzaam een rots uitholst: aanvankelijk lijkt het verwaarloosbaar, maar uiteindelijk verandert het de hele landschapsvorm.",
    examples: [
      { domain: "Media", icon: "📺", text: "Netflix begon met dvd-verhuur per post (goedkoper dan Blockbuster) en verdrong uiteindelijk de gehele videotheeksector." },
      { domain: "Fotografie", icon: "📷", text: "Digitale camera's begonnen als lagekwaliteitsalternatieven voor film, maar verbeterden snel en maakten analoge fotografie marginaal." },
      { domain: "Transport", icon: "🚗", text: "Uber en Lyft begonnen in niches die taxi's negeerden (luchthaventransport laat op de nacht) en veroverden de hele markt." }
    ],
    prerequisites: ["opportunity-recognition"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Hoe beginnen de meeste disruptieve innovaties?", options: ["Door de beste klanten te bedienen", "Door de marktleider direct aan te vallen", "Door eenvoudige producten aan verwaarloosde marktsegmenten te bieden", "Door hogere kwaliteit tegen hogere prijzen"], correct: 2, explanation: "Disruptieve innovaties beginnen onderaan de markt of in niches die gevestigde spelers negeren." }
    ],
    creativePrompt: "Welke sector zou jij graag 'verstoren'? Beschrijf welk marktsegment nu wordt verwaarloosd en hoe een eenvoudiger, goedkoper alternatief eruit zou zien.",
    aiHelperPrompts: ["Hoe onderscheid ik disruptieve van gewone innovatie?", "Hoe bescherm ik mijn bedrijf tegen disruptie?", "Welke sectoren zijn het meest kwetsbaar voor disruptie?"]
  },

  // Batch R – Politiek & Bestuur
  {
    id: "separation-of-powers",
    title: "Machtenscheiding",
    difficulty: 2,
    emoji: "⚖️",
    academicCategory: "Politicologie",
    skillCategory: "Politiek & Bestuur",
    tags: ["democratie", "macht", "wetgeving", "controle"],
    definition: "Machtenscheiding is het principe dat staatsmacht wordt verdeeld over drie onafhankelijke organen — wetgevende, uitvoerende en rechtsprekende macht — om machtsmisbruik te voorkomen.",
    abstractExample: "Net zoals een bedrijf drie onafhankelijke afdelingen heeft (directie, HR, juridisch) die elkaars beslissingen kunnen aanvechten, verdeelt een democratie macht om willekeur te voorkomen.",
    examples: [
      { domain: "Nederland", icon: "🇳🇱", text: "Het parlement maakt wetten, de minister-president voert ze uit, en de rechter toetst of ze in overeenstemming zijn met de grondwet." },
      { domain: "VS", icon: "🇺🇸", text: "Het Congres keurt wetten goed, de president tekent ze (of veto's ze), het Hooggerechtshof kan ze ongrondwettelijk verklaren." },
      { domain: "Bedrijfsleven", icon: "🏢", text: "Een goed bestuur heeft scheiding tussen directie (uitvoerend), raad van commissarissen (toezichthoudend) en externe accountant (controlerend)." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het primaire doel van machtenscheiding?", options: ["Efficiëntere besluitvorming", "Voorkomen van machtsmisbruik", "Snellere wetgeving", "Grotere representativiteit"], correct: 1, explanation: "Machtenscheiding is bedoeld om te voorkomen dat één persoon of groep te veel macht accumuleert." }
    ],
    creativePrompt: "Ontwerp een fictief bestuur voor een stad van 10.000 mensen. Welke drie machten creëer je, wie krijgen ze en hoe controleren ze elkaar?",
    aiHelperPrompts: ["Wat zijn moderne bedreigingen voor machtenscheiding?", "Hoe verschilt machtenscheiding per land?", "Wanneer kan machtenscheiding falen?"]
  },
  {
    id: "public-goods-problem",
    title: "Het Publieke Goederen Probleem",
    difficulty: 2,
    emoji: "🌉",
    academicCategory: "Economie",
    skillCategory: "Politiek & Bestuur",
    tags: ["collectief", "vrijbuiter", "marktfalen", "overheid"],
    definition: "Publieke goederen zijn niet-uitsluitbaar (je kunt niemand buitensluiten) en niet-rivaliserend (gebruik door de één vermindert het niet voor anderen) — waardoor de markt ze onderprovideert en overheidsinterventie nodig is.",
    abstractExample: "Een vuurtoren helpt alle schepen maar geen enkel schip kan worden buitengesloten van het licht; geen reder zal dus vrijwillig betalen, waarna niemand bouwt tenzij de overheid ingrijpt.",
    examples: [
      { domain: "Infrastructuur", icon: "🏗️", text: "Dijken in Nederland beschermen iedereen in een regio — je kunt niet alleen de betalers beschermen, dus de overheid organiseert en financiert het." },
      { domain: "Defensie", icon: "🛡️", text: "Militaire bescherming geldt voor alle burgers tegelijk; een privé-leger van één burger zou alle anderen gratis beschermen." },
      { domain: "Kennis", icon: "📖", text: "Basiswetenschappelijk onderzoek levert kennis op die iedereen kan gebruiken, waardoor overheden universiteiten subsidiëren." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat maakt een goed 'publiek' in economische zin?", options: ["Het is eigendom van de staat", "Het is niet-uitsluitbaar én niet-rivaliserend", "Het is gratis voor iedereen", "Het wordt gefinancierd door belastingen"], correct: 1, explanation: "De combinatie van niet-uitsluitbaarheid en niet-rivaliteit definieert een puur publiek goed." }
    ],
    creativePrompt: "Bedenk drie dingen in jouw stad die publieke goederen zijn en drie die dat bijna zijn maar toch privaat worden geleverd. Waarom werkt dat onderscheid?",
    aiHelperPrompts: ["Wat is het vrijbuiterprobleem?", "Hoe kunnen publieke goederen privaat worden geleverd?", "Welke nieuwe publieke goederen ontstaan in het digitale tijdperk?"]
  },
  {
    id: "social-contract",
    title: "Sociaal Contract",
    difficulty: 3,
    emoji: "📜",
    academicCategory: "Politieke Filosofie",
    skillCategory: "Politiek & Bestuur",
    tags: ["legitimiteit", "overheid", "vrijheid", "filosofie"],
    definition: "Het sociaal contract is de impliciete overeenkomst waarbij individuen bepaalde vrijheden opgeven aan een overheid in ruil voor bescherming, orde en collectieve diensten — de basis van politieke legitimiteit.",
    abstractExample: "Het sociaal contract is als een huisreglement: je geeft wat persoonlijke vrijheid op (geen lawaai na 22:00) in ruil voor een prettige leefomgeving voor iedereen.",
    examples: [
      { domain: "Belasting", icon: "💰", text: "Burgers betalen belasting (opgave van eigendom) in ruil voor wegen, onderwijs en veiligheid die de overheid levert." },
      { domain: "Wetgeving", icon: "⚖️", text: "Je geeft het recht op eigenrichting op in ruil voor een rechtssysteem dat conflicten oplost." },
      { domain: "Grondwet", icon: "📋", text: "Een grondwet legt het sociaal contract vast: wat de overheid mag, wat ze moet bieden en welke rechten onvervreemdbaar zijn." }
    ],
    prerequisites: [],
    unlocks: ["separation-of-powers"],
    exercises: [
      { type: "multipleChoice", question: "Welke filosoof beschreef het sociaal contract als een 'oorlog van allen tegen allen' zonder overheid?", options: ["John Locke", "Jean-Jacques Rousseau", "Thomas Hobbes", "Immanuel Kant"], correct: 2, explanation: "Hobbes beschreef de 'state of nature' als chaotisch en gevaarlijk, waardoor mensen een Leviathan (sterke overheid) nodig zouden hebben." }
    ],
    creativePrompt: "Als je jouw eigen sociaal contract zou schrijven met de overheid: welke drie vrijheden geef je op en welke drie dingen verwacht je er absoluut voor terug?",
    aiHelperPrompts: ["Hoe verschilt Hobbes van Locke over het sociaal contract?", "Is het sociaal contract vandaag nog relevant?", "Hoe onderbouwen revoluties zich met het sociaal contract?"]
  },
  {
    id: "bureaucracy-theory",
    title: "Bureaucratie",
    difficulty: 2,
    emoji: "🗂️",
    academicCategory: "Bestuurskunde",
    skillCategory: "Politiek & Bestuur",
    tags: ["organisatie", "regels", "efficiency", "hiërarchie"],
    definition: "Bureaucratie is een systeem van bestuur via vaste regels, hiërarchische structuren en gespecialiseerde ambtenaren — bedoeld voor consistentie en eerlijkheid, maar berucht om zijn inflexibiliteit.",
    abstractExample: "Een bureaucratie is als een strak geprogrammeerde robot: hij voert precies uit wat geprogrammeerd is, ook als de situatie vraagt om een andere aanpak.",
    examples: [
      { domain: "Overheid", icon: "🏛️", text: "Een belastingdienst past dezelfde regels toe op miljoen aangifte om eerlijkheid te garanderen, ook als individuele gevallen uniek zijn." },
      { domain: "Zorg", icon: "🏥", text: "Ziekenhuisbureaucratie zorgt dat elke patiënt dezelfde veiligheidsprotocollen doorloopt, ook al vertraagt dit soms urgente zorg." },
      { domain: "Onderwijs", icon: "📚", text: "Diploma-eisen zijn bureaucratisch gestandaardiseerd zodat een MBO-diploma overal in Nederland hetzelfde betekent." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is de primaire functie van bureaucratie?", options: ["Innovatie stimuleren", "Consistentie en gelijkheid in besluitvorming", "Kosten minimaliseren", "Democratische participatie vergroten"], correct: 1, explanation: "Bureaucratie zorgt voor gelijke behandeling door vaste regels te volgen, ongeacht wie de ambtenaar is." }
    ],
    creativePrompt: "Beschrijf een moment waarop bureaucratie jou frustreerde. Schrijf daarna de bureaucratische 'gedachtegang' op: welk legitiem doel probeerde die regel te bereiken?",
    aiHelperPrompts: ["Hoe onderscheid ik goede bureaucratie van onnodige bureaucratie?", "Wat zijn alternatieven voor bureaucratisch bestuur?", "Hoe hervormt men een trage bureaucratie?"]
  },
  {
    id: "electoral-systems",
    title: "Kiesstelsels",
    difficulty: 2,
    emoji: "🗳️",
    academicCategory: "Politicologie",
    skillCategory: "Politiek & Bestuur",
    tags: ["democratie", "verkiezingen", "representatie", "stemmen"],
    definition: "Kiesstelsels zijn de regels die bepalen hoe stemmen worden omgezet in politieke vertegenwoordiging — waarbij proportionele stelsels diversiteit bevorderen en meerderheidsstelsels stabiliteit.",
    abstractExample: "Een kiestelsel is als de spelregels van een wedstrijd: dezelfde uitslag (stemmen) kan leiden tot heel andere winnaars afhankelijk van hoe de punten worden geteld.",
    examples: [
      { domain: "Nederland", icon: "🇳🇱", text: "Proportionele vertegenwoordiging: 10% van de stemmen levert ~10% van de zetels op, wat leidt tot coalitieregeringen." },
      { domain: "UK", icon: "🇬🇧", text: "First-past-the-post: wie de meeste stemmen haalt in een district wint alles, wat vaak tweepartijenstelsels creëert." },
      { domain: "Duitsland", icon: "🇩🇪", text: "Gemengd stelsel: helft via directe districten, helft via lijsten — combineert lokale vertegenwoordiging met proportionaliteit." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welk kiesstelsel leidt het meest tot tweepartijenpolitiek?", options: ["Proportioneel", "First-past-the-post", "Gemengd", "Preferentieel"], correct: 1, explanation: "First-past-the-post beloont grote partijen onevenredig, waardoor kleine partijen geen kans maken en het systeem convergeert naar twee partijen." }
    ],
    creativePrompt: "Ontwerp jouw ideale kiesstelsel voor een land van vijf miljoen mensen. Welke waarden wil je bereiken (representativiteit, stabiliteit, lokale binding) en hoe weeg je die af?",
    aiHelperPrompts: ["Hoe beïnvloedt een kiesstelsel de politieke cultuur?", "Wat zijn voor- en nadelen van referenda?", "Hoe werkt het Nederlandse proportionele stelsel precies?"]
  },
  {
    id: "lobbying-interest-groups",
    title: "Lobbyisme",
    difficulty: 2,
    emoji: "🤝",
    academicCategory: "Politicologie",
    skillCategory: "Politiek & Bestuur",
    tags: ["invloed", "belangen", "democratie", "transparantie"],
    definition: "Lobbyisme is het systematisch beïnvloeden van politieke beslissingen door georganiseerde belangengroepen — een legitiem onderdeel van democratie maar met risico's voor gelijke vertegenwoordiging.",
    abstractExample: "Lobbyen is als een pleitbezorger in de rechtbank: je presenteert de sterkste argumenten voor jouw kant, maar de rechter (politicus) moet ook alle andere partijen horen.",
    examples: [
      { domain: "Farmacie", icon: "💊", text: "Farmaceutische bedrijven lobbyen voor lagere geneesmiddelenprijzen bij inkooponderhandelingen met overheden." },
      { domain: "Milieu", icon: "🌿", text: "Milieuorganisaties zoals Greenpeace lobbyen voor strengere klimaatregels door politici te informeren en campagne te voeren." },
      { domain: "Vakbonden", icon: "✊", text: "Vakbonden lobbyen voor hogere minimumlonen door onderhandelingen, stakingsacties en politieke druk." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het grootste democratische risico van lobbyisme?", options: ["Het vertraagt besluitvorming", "Rijke belangen krijgen meer invloed dan gewone burgers", "Het is illegaal in de meeste landen", "Het leidt altijd tot corruptie"], correct: 1, explanation: "Het gevaar is dat georganiseerde geldkrachtige belangen meer politieke toegang krijgen dan burgers zonder middelen." }
    ],
    creativePrompt: "Kies een maatschappelijk probleem dat jou bezighoudt. Schrijf een lobbybrief aan een fictieve minister: welke argumenten gebruik je, welke cijfers, welke emotionele appeals?",
    aiHelperPrompts: ["Hoe verschilt lobbyen van corruptie?", "Hoe werkt het lobbyregister in Nederland?", "Hoe kunnen burgers lobbyen zonder grote budgetten?"]
  },
  {
    id: "federalism",
    title: "Federalisme",
    difficulty: 2,
    emoji: "🗺️",
    academicCategory: "Politicologie",
    skillCategory: "Politiek & Bestuur",
    tags: ["decentralisatie", "regio", "autonomie", "bestuur"],
    definition: "Federalisme is een staatsinrichtingsprincipe waarbij macht wordt verdeeld tussen een centrale overheid en decentrale eenheden (staten, provincies) die elk eigen bevoegdheden hebben.",
    abstractExample: "Federalisme is als een appartementencomplex: de VvE beslist over het dak en de lift, maar elke bewoner bepaalt zelf hoe zijn appartement is ingericht.",
    examples: [
      { domain: "Duitsland", icon: "🇩🇪", text: "De 16 Bundesländer hebben eigen parlementen en bepalen zelf onderwijs- en politiebeleid, terwijl federale wetten buitenlands beleid regelen." },
      { domain: "VS", icon: "🇺🇸", text: "Staten stellen eigen wetten vast over belastingen, abortus en drugs — vandaar grote verschillen tussen California en Texas." },
      { domain: "EU", icon: "🇪🇺", text: "De EU is een quasi-federale unie: lidstaten zijn soeverein maar hebben bevoegdheden overgedragen op gebieden als handel en mededinging." }
    ],
    prerequisites: ["separation-of-powers"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welk land is een voorbeeld van een federale staat?", options: ["Nederland", "Frankrijk", "Duitsland", "Denemarken"], correct: 2, explanation: "Duitsland is een federale republiek met 16 Bundesländer die substantiële eigen bevoegdheden hebben." }
    ],
    creativePrompt: "Stel dat Nederland morgen federaal wordt met drie regio's (Noord, Midden, Zuid). Welke drie beleidsgebieden geef je aan de regio's en welke drie houd je centraal? Waarom?",
    aiHelperPrompts: ["Wat zijn voor- en nadelen van federalisme?", "Hoe verschilt federalisme van decentralisatie?", "Welke spanningen bestaan in federale staten?"]
  },
  {
    id: "propaganda-techniques",
    title: "Propagandatechnieken",
    difficulty: 2,
    emoji: "📢",
    academicCategory: "Politicologie",
    skillCategory: "Politiek & Bestuur",
    tags: ["media", "manipulatie", "framing", "overtuiging"],
    definition: "Propagandatechnieken zijn methoden die worden gebruikt om publieke opinie te vormen via emotionele appeals, selectieve informatie en herhaling — vaak ten dienste van politieke of ideologische doelen.",
    abstractExample: "Propaganda is als een fotograaf die alleen de flattering angles van zijn onderwerp fotografeert: technisch accuraat maar misleidend in het totaalbeeld.",
    examples: [
      { domain: "Politiek", icon: "🗳️", text: "Het herhalen van 'de elite versus het volk' creëert een wij-zij-dynamiek die complexe politieke realiteit versimpelt tot vijanden." },
      { domain: "Reclame", icon: "📺", text: "Associatie van producten met gelukkige gezinnen en zonnige dagen gebruikt emotionele beelden om rationele aankopen te beïnvloeden." },
      { domain: "Oorlog", icon: "⚔️", text: "Vijandelijke soldaten worden als 'monsters' of 'onmensen' afgeschilderd om morele remmingen tegen geweld te verlagen." }
    ],
    prerequisites: ["priming-effect"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke propagandatechniek gebruikt het principe 'iedereen doet het'?", options: ["Ad hominem", "Bandwagon", "Strawman", "Cherry-picking"], correct: 1, explanation: "De bandwagon-techniek suggereert dat je de grote meerderheid moet volgen, wat groepsdruk als argument gebruikt." }
    ],
    creativePrompt: "Analyseer een recente politieke campagne of nieuwsitem. Welke van de klassieke propagandatechnieken herken je? Hoe zou je het opnieuw formuleren op een neutrale manier?",
    aiHelperPrompts: ["Hoe herken ik propaganda in de media?", "Wat is het verschil tussen overtuiging en manipulatie?", "Hoe bescherm ik mezelf tegen propagandainvloeden?"]
  },
  {
    id: "collective-action-problem",
    title: "Collectief Actieprobleem",
    difficulty: 3,
    emoji: "🚧",
    academicCategory: "Politieke Economie",
    skillCategory: "Politiek & Bestuur",
    tags: ["samenwerking", "coördinatie", "vrijbuiter", "collectief"],
    definition: "Het collectief actieprobleem treedt op wanneer individuele rationele keuzes leiden tot een collectief slechte uitkomst — iedereen profiteert liever van andermans inzet zonder zelf bij te dragen.",
    abstractExample: "Als niemand zijn flat poetst omdat iedereen op de ander wacht, is de flat vies voor iedereen — terwijl iedereen een schone flat prefereert boven een vuile.",
    examples: [
      { domain: "Klimaat", icon: "🌍", text: "Elk land wil de voordelen van klimaatactie, maar prefereert dat andere landen de kosten dragen — waardoor collectief te weinig actie volgt." },
      { domain: "Vakbonden", icon: "✊", text: "Arbeiders profiteren van vakbondsonderhandelingen zonder lid te worden — als te velen dit doen, verzwakt de vakbond." },
      { domain: "Stemmen", icon: "🗳️", text: "Individueel heeft één stem nauwelijks invloed, waardoor sommigen rationeel kiezen om niet te stemmen, wat democratie ondermijnt." }
    ],
    prerequisites: ["public-goods-problem"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke mechanismen helpen collectieve actieproblemen op te lossen?", options: ["Meer competitie", "Externe regulering of sociale normen", "Betere technologie", "Minder communicatie"], correct: 1, explanation: "Regelgeving (bijv. verplichte belasting) of sterke sociale normen (schaamte voor vrij rijden) dwingen collectieve bijdragen af." }
    ],
    creativePrompt: "Beschrijf een collectief actieprobleem in jouw eigen leven of gemeenschap. Welk slim mechanisme zou het kunnen oplossen?",
    aiHelperPrompts: ["Hoe lost de gevangenendilemma het collectief actieprobleem uit?", "Wat zijn voorbeelden van succesvolle oplossingen?", "Hoe verschilt het van het tragische-van-de-gemeenschap?"]
  },
  {
    id: "rule-of-law",
    title: "Rechtsstatelijkheid",
    difficulty: 2,
    emoji: "🏛️",
    academicCategory: "Rechtswetenschappen",
    skillCategory: "Politiek & Bestuur",
    tags: ["rechtsstaat", "wet", "gelijkheid", "bescherming"],
    definition: "Rechtsstatelijkheid is het principe dat iedereen — inclusief de overheid — gebonden is aan de wet; wetten worden transparant gemaakt, gelijkelijk toegepast en onafhankelijk gehandhaafd.",
    abstractExample: "Rechtsstatelijkheid is als een scheidsrechter bij voetbal die ook gele kaarten uitdeelt aan de thuisploeg: de regels gelden voor iedereen, ook de machtigen.",
    examples: [
      { domain: "Overheid", icon: "🏛️", text: "Ook een minister kan worden vervolgd als hij de wet overtreedt — zoals blijkt uit vervolgingen van politici in meerdere democratieën." },
      { domain: "Bedrijfsleven", icon: "💼", text: "Grote multinationals kunnen niet boven de wet staan: mededingingsautoriteiten bestraffen marktmisbruik ongeacht de bedrijfsgrootte." },
      { domain: "Burger", icon: "👤", text: "Elk individu heeft het recht op een eerlijk proces en kan de overheid aanvechten bij de rechter." }
    ],
    prerequisites: ["social-contract"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is een kernkenmerk van rechtsstatelijkheid?", options: ["Wetten worden gemaakt door de sterkste partij", "Iedereen is gelijk voor de wet", "De overheid beslist welke rechten burgers hebben", "Wetten worden geheim gehouden"], correct: 1, explanation: "Gelijkheid voor de wet — ongeacht macht, rijkdom of status — is de kern van rechtsstatelijkheid." }
    ],
    creativePrompt: "Beschrijf een situatie uit het nieuws waarbij rechtsstatelijkheid werd uitgedaagd. Wat was er op het spel? Wat had er moeten gebeuren om de rechtsstaat te versterken?",
    aiHelperPrompts: ["Hoe verschilt een rechtsstaat van een politiestaat?", "Welke bedreigingen voor rechtsstatelijkheid bestaan in Europa?", "Hoe bescherm ik mijn rechten als burger?"]
  },

  // Batch S – Retorica & Taal
  {
    id: "ethos-pathos-logos",
    title: "Ethos, Pathos en Logos",
    difficulty: 2,
    emoji: "🎭",
    academicCategory: "Retorica",
    skillCategory: "Retorica & Taal",
    tags: ["overtuiging", "spreken", "argumentatie", "aristoteles"],
    definition: "Aristoteles' drie overtuigingsmiddelen: ethos (geloofwaardigheid van de spreker), pathos (emotionele appeal) en logos (logische argumentatie) — een effectieve speech combineert alle drie.",
    abstractExample: "Een goede dokter overtuigt patiënten door zijn expertise te tonen (ethos), de emotionele impact van de ziekte te benoemen (pathos) en de statistische kansen te presenteren (logos).",
    examples: [
      { domain: "Politiek", icon: "🏛️", text: "Martin Luther King gebruikte zijn predicantsautoriteit (ethos), emotionele beelden van onderdrukking (pathos) en constitutionele argumenten (logos) in 'I Have a Dream'." },
      { domain: "Reclame", icon: "📺", text: "Een autoreclame met een beroemde autocoureur (ethos), opwindende beelden (pathos) en MPG-cijfers (logos) trekt drie soorten kopers aan." },
      { domain: "Sollicitatie", icon: "💼", text: "Een goede sollicitatiebrief toont relevante ervaring (ethos), passie voor het werk (pathos) en meetbare resultaten (logos)." }
    ],
    prerequisites: [],
    unlocks: ["rhetorical-devices"],
    exercises: [
      { type: "multipleChoice", question: "Een spreker zegt: 'Als vader van drie kinderen weet ik hoe belangrijk goede scholen zijn.' Welk overtuigingsmiddel gebruikt hij?", options: ["Logos", "Pathos", "Ethos", "Ironie"], correct: 2, explanation: "Door zijn persoonlijke situatie te benoemen bouwt hij geloofwaardigheid (ethos) op als betrokken ouder." }
    ],
    creativePrompt: "Schrijf een korte speech (150 woorden) over een onderwerp dat jou bezighoudt, waarbij je bewust ethos, pathos én logos incorporeert. Markeer welke zin welk element is.",
    aiHelperPrompts: ["Hoe versterk ik mijn ethos als jonge spreker?", "Wanneer is pathos te veel en wordt het manipulatie?", "Hoe structureer ik een logos-argument logisch?"]
  },
  {
    id: "rhetorical-devices",
    title: "Retorische Stijlfiguren",
    difficulty: 2,
    emoji: "✍️",
    academicCategory: "Retorica",
    skillCategory: "Retorica & Taal",
    tags: ["stijl", "taal", "schrijven", "metafoor"],
    definition: "Retorische stijlfiguren zijn taalkundige technieken die tekst krachtig, memorabel of overtuigend maken — van metafoor en analogie tot anafoor, chiasme en hyperbool.",
    abstractExample: "Stijlfiguren zijn als kruiden in de keuken: de maaltijd (je boodschap) is al aanwezig, maar de kruiden maken het smakelijk en onderscheidend.",
    examples: [
      { domain: "Politiek", icon: "🏛️", text: "Anafoor: Churchill's 'We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields' — herhaling bouwt ritme en kracht." },
      { domain: "Literatuur", icon: "📖", text: "Metafoor: 'Het leven is een reis' herstructureert hoe we over tijd, doelen en obstakels denken." },
      { domain: "Wetenschap", icon: "🔬", text: "Analogie: DNA uitleggen als een 'blauwdruk' of 'receptenboek' maakt abstracte biologie begrijpelijk voor leken." }
    ],
    prerequisites: ["ethos-pathos-logos"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke retorische figuur is dit: 'Vragen staat vrij, antwoord ook'?", options: ["Metafoor", "Anafoor", "Chiasme", "Hyperbool"], correct: 2, explanation: "Een chiasme keert de volgorde van woorden in twee parallelle zinsdelen om." }
    ],
    creativePrompt: "Kies één retorische stijlfiguur (metafoor, anafoor, chiasme, hyperbool of litotes). Schrijf drie originele zinnen die het gebruiken voor een toespraak over klimaatverandering.",
    aiHelperPrompts: ["Wat zijn de krachtigste retorische stijlfiguren?", "Hoe gebruik ik stijlfiguren zonder overdreven te klinken?", "Welke stijlfiguren werken het beste in schriftelijke versus gesproken taal?"]
  },
  {
    id: "framing-language",
    title: "Framing via Taal",
    difficulty: 2,
    emoji: "🖼️",
    academicCategory: "Taalkunde",
    skillCategory: "Retorica & Taal",
    tags: ["frame", "taal", "perceptie", "beïnvloeding"],
    definition: "Framing via taal betekent dat de keuze van woorden, metaforen en categorisering de manier waarop mensen een situatie begrijpen en beoordelen fundamenteel beïnvloedt — dezelfde feiten kunnen heel anders overkomen.",
    abstractExample: "Een operatie met 90% overlevingskans klinkt anders dan dezelfde operatie met 10% sterftekans — de feiten zijn identiek, maar de framing verandert de beslissing.",
    examples: [
      { domain: "Politiek", icon: "🏛️", text: "'Belastingverlichting' frame suggerreert dat belasting een last is die verlicht moet worden; 'belastinghervorming' is neutraler." },
      { domain: "Milieu", icon: "🌿", text: "'Global warming' werd door sommigen vervangen door 'climate change' omdat het minder alarmerend klinkt." },
      { domain: "Marketing", icon: "🛍️", text: "'95% vetvrij' yoghurt verkoopt beter dan '5% vet' yoghurt — dezelfde voedingswaarde, ander frame." }
    ],
    prerequisites: ["priming-effect"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat beschrijft het beste waarom 'belastingverlichting' een krachtig politiek frame is?", options: ["Het is feitelijk accurater", "Het impliceert dat belasting inherent slecht is", "Het is eenvoudiger te begrijpen", "Het is neutraler dan alternatieven"], correct: 1, explanation: "Het woord 'verlichting' impliceert dat belasting een pijn of last is — wat al een politiek oordeel inbrengt." }
    ],
    creativePrompt: "Herschrijf hetzelfde nieuws twee keer: één keer met een progressief frame, één keer met een conservatief frame. Gebruik precies dezelfde feiten maar kies zorgvuldig je woorden.",
    aiHelperPrompts: ["Hoe herken ik framing in nieuws?", "Hoe frame ik mijn eigen boodschappen effectiever?", "Wat is het verschil tussen framing en liegen?"]
  },
  {
    id: "active-listening",
    title: "Actief Luisteren",
    difficulty: 1,
    emoji: "👂",
    academicCategory: "Communicatiewetenschappen",
    skillCategory: "Retorica & Taal",
    tags: ["luisteren", "communicatie", "empathie", "begrip"],
    definition: "Actief luisteren is volledig aanwezig zijn bij wat iemand zegt — zonder mentaal alvast je antwoord te formuleren — en begrip tonen door samen te vatten, vragen te stellen en non-verbaal te reageren.",
    abstractExample: "Actief luisteren is als een spiegel die niet alleen reflecteert wat je zegt, maar ook de emotie achter je woorden teruggeeft.",
    examples: [
      { domain: "Therapie", icon: "🧠", text: "Een therapeut herhaalt: 'Dus als ik je goed begrijp, voel je je buitengesloten door je collega's ondanks je inspanningen?' — samenvatting en verificatie." },
      { domain: "Leiderschap", icon: "👔", text: "Een manager legt zijn telefoon weg, maakt oogcontact en vraagt door bij een medewerker die feedback geeft over werkdruk." },
      { domain: "Relaties", icon: "💑", text: "In een conflict wacht een partner tot de ander volledig uitgesproken is voordat hij reageert, en parafraseert dan het bezwaar." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het verschil tussen horen en actief luisteren?", options: ["Er is geen verschil", "Actief luisteren vereist gerichte aandacht en verificatie van begrip", "Horen is bewuster dan luisteren", "Actief luisteren is alleen voor professionals"], correct: 1, explanation: "Horen is passief (geluid verwerken); actief luisteren is bewust aandacht geven en begrip controleren." }
    ],
    creativePrompt: "Doe vandaag een experiment: kies één gesprek waar je uitsluitend luistert, nooit meer dan één vraag per minuut stelt, en aan het eind samenvat wat je hoorde. Wat viel je op?",
    aiHelperPrompts: ["Welke concrete technieken zijn er voor actief luisteren?", "Hoe luister ik actief in een moeilijk gesprek?", "Hoe herken ik wanneer iemand niet actief luistert?"]
  },
  {
    id: "storytelling-structure",
    title: "Verhalenstructuur",
    difficulty: 1,
    emoji: "📖",
    academicCategory: "Narratologie",
    skillCategory: "Retorica & Taal",
    tags: ["verhaal", "structuur", "narrative", "communicatie"],
    definition: "Effectieve verhalen volgen structuren zoals de drieaktsstructuur (begin-midden-einde) of de heldenreis: een protagonist staat voor een uitdaging, doorloopt transformatie en keert terug met inzicht.",
    abstractExample: "Een verhaal zonder structuur is als een reis zonder kaart: je kunt interessante dingen beleven, maar je publiek weet niet waar jullie naartoe gaan of wanneer jullie aankomen.",
    examples: [
      { domain: "Marketing", icon: "🛍️", text: "Airbnb-advertenties volgen de heldenreis: de reiziger (held) verlaat het gewone leven, ervaart avontuur via Airbnb, keert veranderd terug." },
      { domain: "Presentaties", icon: "🎤", text: "TED-talks beginnen met een provocerende vraag (conflict), bouwen naar een inzicht (transformatie) en sluiten met een call to action (resolutie)." },
      { domain: "Leiderschap", icon: "👔", text: "Een CEO vertelt de oorsprong van het bedrijf als heldenreis: de founders zagen een probleem, worstelden, vonden een oplossing — nu zijn jullie samen in dat avontuur." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het centrale element van de heldenreis?", options: ["Een bijzondere setting", "De transformatie van de protagonist", "Veel conflict en actie", "Een happy ending"], correct: 1, explanation: "De heldenreis draait om de innerlijke verandering van de held — niet de externe avonturen." }
    ],
    creativePrompt: "Vertel jouw eigen heldenreis: wanneer stond je voor een grote uitdaging, wie of wat hielp je, wat leerde je en hoe ben je veranderd? Schrijf het als een verhaal van 200 woorden.",
    aiHelperPrompts: ["Hoe gebruik ik verhalenstructuur in een zakelijke presentatie?", "Wat maakt een verhaal emotioneel resonant?", "Hoe vertel ik data als een verhaal?"]
  },
  {
    id: "socratic-method",
    title: "Socratische Methode",
    difficulty: 2,
    emoji: "❓",
    academicCategory: "Filosofie",
    skillCategory: "Retorica & Taal",
    tags: ["vragen", "dialoog", "kritisch denken", "filosofie"],
    definition: "De Socratische methode is een vorm van samenwerking via vragen en antwoorden die aannames blootlegt, tegenstellingen ontdekt en tot dieper begrip leidt — zonder de antwoorden direct te geven.",
    abstractExample: "De Socratische methode is als een GPS die je niet vertelt waar je naartoe moet, maar vragen stelt die je helpen te ontdekken dat je al de weg weet.",
    examples: [
      { domain: "Onderwijs", icon: "📚", text: "Een leraar vraagt niet 'wat is democratie?' maar: 'Als je een beslissing moet nemen die iedereen raakt, wie mag er dan meebeslissen? En waarom?'" },
      { domain: "Coaching", icon: "🎯", text: "In plaats van 'je moet meer delegeren' vraagt een coach: 'Wat zou er gebeuren als je dit aan je team overliet? Wat houdt je tegen?'" },
      { domain: "Recht", icon: "⚖️", text: "Een advocaat gebruikt kruisvragen om inconsistenties in een getuigenverklaring bloot te leggen via een reeks gerichte vragen." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het primaire doel van de Socratische methode?", options: ["De ander overtuigen van jouw standpunt", "Aannames blootleggen en dieper begrip bereiken", "Snel een antwoord vinden", "De ander verwarren"], correct: 1, explanation: "Socrates geloofde dat waarheid wordt gevonden door samen kritisch te onderzoeken, niet door antwoorden op te leggen." }
    ],
    creativePrompt: "Voer een 10-minuten Socratisch gesprek met jezelf over een overtuiging die je sterk aanhangt. Schrijf de vragen op die je aannames uitdagen. Wat ontdek je?",
    aiHelperPrompts: ["Hoe gebruik ik de Socratische methode in een vergadering?", "Welke soorten Socratische vragen zijn er?", "Hoe voorkom ik dat Socratisch vragen aanvoelt als verhoor?"]
  },
  {
    id: "euphemism-doublespeak",
    title: "Eufemisme en Dubbelspeak",
    difficulty: 2,
    emoji: "🎭",
    academicCategory: "Taalkunde",
    skillCategory: "Retorica & Taal",
    tags: ["taal", "manipulatie", "framing", "politiek"],
    definition: "Eufemismen zijn zachte woorden voor harde realiteiten; dubbelspeak is taal die bewust verhult, misleidt of de realiteit vervormt — beide kunnen taal gebruiken om waarheid te verbergen.",
    abstractExample: "Een eufemisme is zoals 'hij is heengegaan' voor 'hij is dood': begrijpelijk en humaan. Dubbelspeak is zoals 'collateral damage' voor burgerslachtoffers: bewust verhullend.",
    examples: [
      { domain: "Militair", icon: "⚔️", text: "'Enhanced interrogation techniques' is dubbelspeak voor foltering — het klinkt technisch en bureaucratisch om de werkelijkheid te verhullen." },
      { domain: "Bedrijfsleven", icon: "💼", text: "'Right-sizing' of 'workforce optimization' zijn eufemismen voor ontslag — bedrijven vermijden het harde woord." },
      { domain: "Politiek", icon: "🏛️", text: "'Revenue enhancement' (belastingverhoging) en 'investment' (overheidsuitgaven) zijn politieke eufemismen om publieke weerstand te verminderen." }
    ],
    prerequisites: ["framing-language"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat onderscheidt dubbelspeak van een normaal eufemisme?", options: ["Dubbelspeak is altijd fout", "Dubbelspeak heeft de bewuste intentie om de realiteit te verhullen", "Eufemismen zijn vriendelijker", "Er is geen verschil"], correct: 1, explanation: "De intentie om te misleiden is het kritische verschil — dubbelspeak probeert waarheid te verbergen, niet alleen te verzachten." }
    ],
    creativePrompt: "Zoek drie voorbeelden van dubbelspeak in recent nieuws of bedrijfscommunicatie. Herformuleer ze in directe, eerlijke taal. Wat verandert er in de boodschap?",
    aiHelperPrompts: ["Hoe herken ik dubbelspeak in politieke taal?", "Wanneer is een eufemisme acceptabel?", "Hoe schrijf ik zelf duidelijk en direct?"]
  },
  {
    id: "debate-argumentation",
    title: "Debatteren en Argumenteren",
    difficulty: 2,
    emoji: "⚔️",
    academicCategory: "Retorica",
    skillCategory: "Retorica & Taal",
    tags: ["debat", "argument", "logica", "weerlegging"],
    definition: "Effectief debatteren vereist het opbouwen van sterke argumenten (stelling + bewijs + redenering), het anticiperen op tegenargumenten en het weerleggen ervan zonder de ander persoonlijk aan te vallen.",
    abstractExample: "Een goed debat is als een schaakpartij: je speelt je eigen stukken (argumenten) maar moet ook de zetten van je tegenstander (tegenargumenten) voorzien en weerleggen.",
    examples: [
      { domain: "Academisch", icon: "🎓", text: "In een academisch paper presenteer je bewust de sterkste tegenargumenten (steelmanning) voordat je ze weerleg — dit verhoogt je geloofwaardigheid." },
      { domain: "Rechtbank", icon: "⚖️", text: "Een advocaat structureert zijn pleidooi: stelling (mijn cliënt is onschuldig), bewijs (alibi), redenering (dus dit sluit schuld uit)." },
      { domain: "Bedrijf", icon: "💼", text: "In een boardroom-presentatie presenteer je de risico's van je voorstel zelf (voor anderen ze noemen) en leg je uit hoe je ze mitigeert." }
    ],
    prerequisites: ["ethos-pathos-logos"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is 'steelmanning' in een debat?", options: ["Het gebruiken van feiten als wapen", "Het presenteren van het sterkst mogelijke tegenargument", "Het versterken van je eigen positie", "Het overtuigen via emotie"], correct: 1, explanation: "Steelmanning is het eerlijk weergeven van het beste tegenargument — het tegenovergestelde van een strawman." }
    ],
    creativePrompt: "Kies een standpunt dat je NIET aanhangt. Schrijf de best mogelijke verdediging ervan (steelman). Wat leer je over de krachten van de andere kant?",
    aiHelperPrompts: ["Hoe win ik een debat zonder de relatie te schaden?", "Wat zijn veelgemaakte redeneerfouten?", "Hoe weerleg ik een emotioneel argument logisch?"]
  },
  {
    id: "written-communication",
    title: "Effectief Schrijven",
    difficulty: 1,
    emoji: "✏️",
    academicCategory: "Communicatiewetenschappen",
    skillCategory: "Retorica & Taal",
    tags: ["schrijven", "duidelijkheid", "structuur", "communicatie"],
    definition: "Effectief schrijven vereist helderheid (eenvoudige taal), structuur (logische volgorde), correctheid (juiste feiten) en aanpassing aan je doelgroep — het doel is dat de lezer precies begrijpt wat jij bedoelt.",
    abstractExample: "Goed schrijven is als een goede wegwijzer: hij vertelt niet alles over de reis, maar precies genoeg om je naar de juiste bestemming te leiden.",
    examples: [
      { domain: "Bedrijf", icon: "💼", text: "Een effectief rapport begint met de conclusie (niet de methode), gebruikt bullet points voor scanbaarheid en vermijdt jargon voor niet-experts." },
      { domain: "Email", icon: "📧", text: "Een goede zakelijke email heeft één duidelijk doel per bericht, een actie in de subject line en houdt de tekst onder 150 woorden." },
      { domain: "Academisch", icon: "🎓", text: "Een sterke academische essay begint met een stellige these, onderbouwt die met bewijs en erkent tegenargumenten." }
    ],
    prerequisites: [],
    unlocks: ["storytelling-structure"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de meest kritische eigenschap van effectief schrijven?", options: ["Uitgebreid vocabulaire", "Lange, complexe zinnen", "Helderheid en aanpassing aan de lezer", "Gebruik van citaten"], correct: 2, explanation: "De boodschap moet overkomen bij de doelgroep — alle andere elementen zijn dienend aan dat doel." }
    ],
    creativePrompt: "Schrijf hetzelfde nieuwtje ('bedrijf lanceert nieuw product') vier keer: voor een kind van 10, een journalist, een investeerder en een expert in de sector. Wat verandert er?",
    aiHelperPrompts: ["Hoe maak ik mijn schrijfstijl beknopter?", "Hoe structureer ik een overtuigend essay?", "Welke fouten maak ik als niet-native schrijver?"]
  },
  {
    id: "metaphor-cognition",
    title: "Metaforen en Cognitie",
    difficulty: 3,
    emoji: "🧠",
    academicCategory: "Cognitieve Taalkunde",
    skillCategory: "Retorica & Taal",
    tags: ["metafoor", "denken", "taal", "concepten"],
    definition: "Metaforen zijn niet alleen stijlfiguren maar fundamentele cognitieve structuren die bepalen hoe we abstracte concepten begrijpen — de metaforen die we gebruiken bepalen letterlijk hoe we denken.",
    abstractExample: "Als we 'een argument winnen' zeggen, denken we over argumenteren als oorlogsvoering. Als we 'samen bouwen aan een idee' zeggen, denken we als constructeurs samen werken — volkomen andere aanpak.",
    examples: [
      { domain: "Economie", icon: "💰", text: "De metafoor 'tijd is geld' structureert hoe we over vrije tijd denken (verspilling), vakantie (kostbaar) en efficiëntie (rendement)." },
      { domain: "Onderwijs", icon: "📚", text: "Studenten als 'lege containers' die gevuld worden versus studenten als 'planten die groeien' leiden tot compleet verschillende didactische aanpakken." },
      { domain: "Gezondheid", icon: "🏥", text: "'Kanker bestrijden' (militaire metafoor) versus 'omgaan met kanker' (acceptance-metafoor) beïnvloeden hoe patiënten hun ziekte ervaren." }
    ],
    prerequisites: ["framing-language"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat ontdekten Lakoff en Johnson over metaforen?", options: ["Metaforen zijn slechts decoratieve taal", "Metaforen structureren fundamenteel hoe we denken", "Metaforen moeten vermeden worden in academisch schrijven", "Metaforen zijn cultuurgebonden maar niet cognitief"], correct: 1, explanation: "Lakoff & Johnson's 'Metaphors We Live By' toonde aan dat metaforen ons conceptuele systeem structureren, niet alleen onze taal." }
    ],
    creativePrompt: "Welke metafoor gebruik jij voor 'leven'? Is het een reis, een gevecht, een spel, een film? Schrijf hoe die metafoor jouw keuzes en houding beïnvloedt — en kies dan een andere metafoor en bekijk wat er verandert.",
    aiHelperPrompts: ["Welke metaforen zijn het meest invloedrijk in het Nederlands?", "Hoe kies ik bewust mijn metaforen?", "Hoe beïnvloeden metaforen politieke ideologie?"]
  },

  // Batch T – Statistiek & Dataredeneren
  {
    id: "correlation-causation",
    title: "Correlatie vs. Causaliteit",
    difficulty: 2,
    emoji: "🔗",
    academicCategory: "Statistiek",
    skillCategory: "Statistiek & Dataredeneren",
    tags: ["statistiek", "oorzaak", "onderzoek", "redeneren"],
    definition: "Correlatie betekent dat twee variabelen samen variëren; causaliteit betekent dat de ene de andere veroorzaakt. Correlatie bewijst geen causaliteit — er kan een derde variabele zijn of de relatie kan toevallig zijn.",
    abstractExample: "IJsconsumptie en verdrinkingen correleren sterk — niet omdat ijs gevaarlijk is, maar omdat beide oplopen bij warm weer. De derde variabele (temperatuur) verklaart alles.",
    examples: [
      { domain: "Gezondheid", icon: "🏥", text: "Mensen die meer ziekenhuisbezoeken hebben, sterven vaker — maar dat betekent niet dat ziekenhuizen dodelijk zijn; ziekte is de gemeenschappelijke oorzaak." },
      { domain: "Economie", icon: "💰", text: "Landen met meer chocoladeconsumptie hebben meer Nobelprijswinnaars (echte data) — maar rijkdom (de derde variabele) verklaart beide." },
      { domain: "Onderwijs", icon: "📚", text: "Kinderen met meer boeken thuis presteren beter op school — maar rijkere ouders kopen meer boeken én zorgen ook voor betere educatie op andere manieren." }
    ],
    prerequisites: [],
    unlocks: ["regression-to-mean"],
    exercises: [
      { type: "multipleChoice", question: "Welke methode bewijst het best causaliteit?", options: ["Correlatie-analyse", "Groot steekproefonderzoek", "Gerandomiseerd gecontroleerd experiment", "Historische data"], correct: 2, explanation: "Alleen in een gerandomiseerd experiment worden verstorende variabelen uitgemiddeld, waardoor je echte causaliteit kunt vaststellen." }
    ],
    creativePrompt: "Zoek een opmerkelijke correlatie in het nieuws. Bedenk drie alternatieve verklaringen: een omgekeerde causaliteit, een derde variabele en puur toeval. Welke is het meest plausibel?",
    aiHelperPrompts: ["Hoe test ik of een correlatie causaal is?", "Wat zijn bekende voorbeelden van spurieuze correlaties?", "Hoe gebruik ik correlatie-inzichten zonder causale conclusies te trekken?"]
  },
  {
    id: "regression-to-mean",
    title: "Regressie naar het Gemiddelde",
    difficulty: 2,
    emoji: "📉",
    academicCategory: "Statistiek",
    skillCategory: "Statistiek & Dataredeneren",
    tags: ["statistiek", "gemiddelde", "meting", "bias"],
    definition: "Regressie naar het gemiddelde is het statistische verschijnsel dat extreme uitkomsten bij herhaalde meting tenderen naar het gemiddelde — mensen die uitzonderlijk goed of slecht scoren, presteren meestal gemiddeld bij de volgende meting.",
    abstractExample: "Een kind dat de slechtste toets scoort in de klas zal bij de volgende toets waarschijnlijk iets beter scoren — niet door interventie, maar puur door statistiek.",
    examples: [
      { domain: "Sport", icon: "⚽", text: "De 'Sports Illustrated vloek': topsporters op de cover presteren daarna vaak slechter — maar dit is regressie naar het gemiddelde, geen vloek." },
      { domain: "Management", icon: "👔", text: "Managers die medewerkers belonen voor excellente prestaties en straffen voor slechte, concluderen dat straf werkt beter — maar regressie verklaart de verbetering." },
      { domain: "Medisch", icon: "🏥", text: "Mensen zoeken medische hulp wanneer ze het ergst ziek zijn — na behandeling voelen ze zich beter, maar deels door regressie naar het gemiddelde, niet alleen de behandeling." }
    ],
    prerequisites: ["correlation-causation"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Waarom is regressie naar het gemiddelde een probleem bij het evalueren van interventies?", options: ["Het maakt statistieken inaccuraat", "Het kan doen lijken dat een interventie werkt terwijl de verbetering statistisch is", "Het geldt alleen voor sportprestaties", "Het is een rekenfout"], correct: 1, explanation: "Als je een interventie doet na een extreme score, zal de volgende meting statistisch gezien beter zijn — ongeacht de interventie." }
    ],
    creativePrompt: "Bedenk een situatie in je eigen leven of werk waar je regressie naar het gemiddelde zou kunnen verwarren met een echte oorzaak. Hoe zou je het onderscheid kunnen maken?",
    aiHelperPrompts: ["Hoe herken ik regressie naar het gemiddelde in data?", "Hoe ontwerp ik onderzoek dat regressie naar het gemiddelde corrigeert?", "Waarom is de 'Sports Illustrated vloek' statistisch verklaarbaar?"]
  },
  {
    id: "base-rate-fallacy",
    title: "De Basispercentagefout",
    difficulty: 3,
    emoji: "📊",
    academicCategory: "Statistiek",
    skillCategory: "Statistiek & Dataredeneren",
    tags: ["statistiek", "kansen", "redeneren", "bias"],
    definition: "De basispercentagefout treedt op wanneer mensen specifieke informatie zwaarder wegen dan statistische basispercentages — waardoor ze de kans op een gebeurtenis systematisch overschatten of onderschatten.",
    abstractExample: "Een medische test met 99% nauwkeurigheid voor een ziekte die 1 op 10.000 mensen treft, geeft bij een positieve uitslag slechts ~1% kans dat je echt ziek bent — maar dit voelt contra-intuïtief.",
    examples: [
      { domain: "Medisch", icon: "🏥", text: "Een mammografie detecteert 80% van borstkankers maar geeft ook 10% vals-positieven. Bij zeldzame kanker (1 op 100) is een positieve uitslag vaker vals dan echt positief." },
      { domain: "Recht", icon: "⚖️", text: "DNA-bewijs met 1 op een miljoen kans op vals match klinkt overweldigend, maar als er een miljoen verdachten zijn, zijn er gemiddeld ook vals-matches." },
      { domain: "Vliegen", icon: "✈️", text: "Mensen vrezen vliegtuigongelukken meer dan auto-ongelukken ondanks dat vliegen veel veiliger is — het spectaculaire nieuws van een crash overschaduwt het basispercentage." }
    ],
    prerequisites: ["correlation-causation"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is de oplossing voor de basispercentagefout?", options: ["Meer data verzamelen", "De basispercentages (prior probability) meewegen in de berekening", "Intuïtie vertrouwen", "Specifieke gevallen negeren"], correct: 1, explanation: "Bayes' stelling formaliseert hoe je basispercentages correct combineert met specifieke bewijs." }
    ],
    creativePrompt: "Je hoort dat iemand een Lamborghini rijdt. Hoe groot is de kans dat hij rijk is? Bedenk welke basispercentages (hoe veel mensen zijn 'rijk', hoe veel rijke mensen rijden Lamborghini) je nodig hebt voor een eerlijk antwoord.",
    aiHelperPrompts: ["Hoe gebruik ik Bayes' stelling in de praktijk?", "Welke beslissingen worden het meest beïnvloed door de basispercentagefout?", "Hoe leg ik statistische kansen uit aan niet-statistici?"]
  },
  {
    id: "p-value-significance",
    title: "P-waarden en Statistische Significantie",
    difficulty: 3,
    emoji: "🔬",
    academicCategory: "Statistiek",
    skillCategory: "Statistiek & Dataredeneren",
    tags: ["statistiek", "onderzoek", "significantie", "data"],
    definition: "Een p-waarde geeft de kans dat de waargenomen resultaten toevallig zijn als de nulhypothese klopt. P < 0.05 wordt conventioneel 'significant' genoemd, maar dit is een drempelwaarde, geen bewijs van werkelijk belang.",
    abstractExample: "Een p-waarde van 0.05 betekent: als er geen effect is, zou je dit resultaat in 1 op 20 experimenten toevallig zien. Dat is bewijs — maar geen zekerheid.",
    examples: [
      { domain: "Medisch", icon: "🏥", text: "Een medicijn heeft p = 0.04: bij toeval zou dit resultaat in 4% van de gevallen optreden als het medicijn niet werkt — geen bewijs van klinisch belang." },
      { domain: "Marketing", icon: "🛍️", text: "A/B-test toont p = 0.03 voor een nieuwe knopkleur — statistisch significant, maar het effect (0.01% meer clicks) is praktisch onbeduidend." },
      { domain: "Wetenschap", icon: "🔬", text: "De replicatiecrisis in psychologie toont dat veel 'significante' resultaten (p < 0.05) niet reproduceerbaar zijn door publicatiebias en p-hacking." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat betekent een p-waarde van 0.05 NIET?", options: ["De kans dat de nulhypothese waar is", "De kans op het resultaat als de nulhypothese klopt", "Een drempelwaarde voor 'significantie'", "Een maat voor toevallig optreden"], correct: 0, explanation: "P-waarde is NIET de kans dat de nulhypothese klopt — dit is een veelgemaakte misvatting. Het is de kans op de data gegeven de nulhypothese." }
    ],
    creativePrompt: "Lees een wetenschappelijk nieuwsartikel. Zoek op of de originele studie p-waarden rapporteert. Wat was de steekproefgrootte? Beschrijf of je het resultaat betrouwbaar vindt.",
    aiHelperPrompts: ["Wat is het verschil tussen statistische en praktische significantie?", "Wat is p-hacking en hoe herken ik het?", "Hoe interpreteer ik statistisch bewijs in nieuws?"]
  },
  {
    id: "survivorship-bias-data",
    title: "Overlevingsbias in Data",
    difficulty: 2,
    emoji: "🏆",
    academicCategory: "Statistiek",
    skillCategory: "Statistiek & Dataredeneren",
    tags: ["bias", "data", "steekproef", "statistiek"],
    definition: "Overlevingsbias treedt op wanneer analyses alleen de 'overlevers' (succesgevallen) bevatten en de mislukkingen negeert — waardoor succespatronen worden overschat en faalpatronen worden gemist.",
    abstractExample: "We bestuderen succesvolle bedrijven om te leren wat ze gemeen hebben — maar we vergeten te vragen: deden mislukte bedrijven hetzelfde maar hadden ze pech?",
    examples: [
      { domain: "Muziek", icon: "🎵", text: "Bekende muzikanten vertellen dat ze 10.000 uur oefenden en succesvol werden — maar talloze musici oefenden even hard en werden niet beroemd." },
      { domain: "Militair", icon: "✈️", text: "WWII: legerleiding wilde pantsering toevoegen aan beschadigde vliegtuigen — statisticus Abraham Wald wees erop dat je ook de neergestorte vliegtuigen moest analyseren die niet terugkwamen." },
      { domain: "Beleggen", icon: "📈", text: "Beursindexen bevatten alleen de bedrijven die overleven — bedrijven die failliet gaan verdwijnen uit de index, waardoor historische rendementen er rooskleuriger uitzien." }
    ],
    prerequisites: ["correlation-causation"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Hoe voorkom je overlevingsbias in onderzoek?", options: ["Meer succesgevallen bestuderen", "Actief zoeken naar en includeren van mislukkingen in de analyse", "Alleen recente data gebruiken", "Grotere steekproeven nemen"], correct: 1, explanation: "Overlevingsbias voorkom je door bewust te zoeken naar de 'mislukkingen' die normaal niet in je data zitten." }
    ],
    creativePrompt: "In welk domein van jouw leven of werk ben je geneigd om alleen successen te bestuderen? Zoek actief naar drie mislukkingen en analyseer wat er écht misging.",
    aiHelperPrompts: ["Hoe herken ik overlevingsbias in mijn eigen redenering?", "Hoe verzamel ik ook data over mislukkingen?", "Welke sectoren zijn het meest gevoelig voor overlevingsbias?"]
  },
  {
    id: "data-visualization",
    title: "Datavisualisatie",
    difficulty: 1,
    emoji: "📊",
    academicCategory: "Statistiek",
    skillCategory: "Statistiek & Dataredeneren",
    tags: ["data", "visualisatie", "grafiek", "communicatie"],
    definition: "Datavisualisatie is het omzetten van numerieke informatie in visuele representaties die patronen, trends en relaties direct zichtbaar maken — maar kunnen ook misleiden als de schaal of context onjuist is.",
    abstractExample: "Een grafiek is als een kaart: het maakt de complexe werkelijkheid begrijpelijk, maar de kaartenmaker kiest wat te tonen en hoe — die keuzes beïnvloeden de interpretatie.",
    examples: [
      { domain: "Media", icon: "📺", text: "Een staafdiagram dat niet bij nul begint maakt kleine verschillen dramatisch groot lijken — een veelgebruikte misleidingstechniek in nieuwsgraphics." },
      { domain: "Wetenschap", icon: "🔬", text: "Edward Tufte's 'sparklines' comprimeren complexe tijdreeksen tot miniatuurgrafieken die direct in tekst leesbaar zijn." },
      { domain: "Beleid", icon: "🏛️", text: "Een warmtekaart van coronabesmettingen per regio maakt in één oogopslag zichtbaar welke gebieden het hardst geraakt zijn." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke grafiek is het meest geschikt voor het tonen van een trend over tijd?", options: ["Cirkeldiagram", "Staafdiagram", "Lijndiagram", "Scatterplot"], correct: 2, explanation: "Lijndiagrammen verbinden datapunten in tijd en maken trends en veranderingen direct zichtbaar." }
    ],
    creativePrompt: "Vind een misleidende grafiek in een krant of op sociale media. Beschrijf wat misleidend is (schaal, assenstart, weglaten van data) en maak een schets van hoe een eerlijke versie eruit ziet.",
    aiHelperPrompts: ["Welke soorten grafieken gebruik ik voor welke data?", "Hoe herken ik misleidende visualisaties?", "Welke tools gebruik ik voor professionele datavisualisaties?"]
  },
  {
    id: "sampling-bias",
    title: "Steekproefbias",
    difficulty: 2,
    emoji: "🎯",
    academicCategory: "Statistiek",
    skillCategory: "Statistiek & Dataredeneren",
    tags: ["steekproef", "bias", "onderzoek", "representativiteit"],
    definition: "Steekproefbias treedt op wanneer de groep die je onderzoekt systematisch afwijkt van de populatie die je wil begrijpen — waardoor conclusies niet generaliseerbaar zijn.",
    abstractExample: "Als je vraagt aan mensen op een sportschool of ze genoeg bewegen, zal je antwoord heel anders zijn dan als je willekeurige voorbijgangers vraagt — je steekproef is al geselecteerd.",
    examples: [
      { domain: "Politiek", icon: "🗳️", text: "Telefonische peilingen bereiken geen jongeren zonder vaste lijn — waardoor peilingen de mening van ouderen oververtegenwoordigen." },
      { domain: "Medisch", icon: "🏥", text: "Klinische trials met voornamelijk witte mannen als deelnemers leveren behandelingen op die minder goed werken voor vrouwen en andere groepen." },
      { domain: "Tech", icon: "💻", text: "Gezichtsherkenningssystemen getraind op voornamelijk lichte gezichten functioneren slechter bij donkerdere huidtinten." }
    ],
    prerequisites: [],
    unlocks: ["p-value-significance"],
    exercises: [
      { type: "multipleChoice", question: "Wat is de beste manier om steekproefbias te verminderen?", options: ["Grotere steekproef nemen", "Willekeurige steekproef uit de volledige doelpopulatie", "Alleen deskundigen bevragen", "Meer gedetailleerde vragen stellen"], correct: 1, explanation: "Alleen willekeurige steekproef garandeert dat elk lid van de populatie gelijke kans heeft om gekozen te worden." }
    ],
    creativePrompt: "Ontwerp een enquête over gelukkige relaties. Beschrijf hoe je je steekproef zou selecteren en identificeer drie manieren waarop je steekproef systematisch vertekend kan zijn.",
    aiHelperPrompts: ["Hoe minimaliseer ik steekproefbias in mijn onderzoek?", "Welke soorten steekproefbias bestaan er?", "Hoe beoordeel ik de representativiteit van een studie?"]
  },
  {
    id: "effect-size",
    title: "Effect Grootte",
    difficulty: 2,
    emoji: "📏",
    academicCategory: "Statistiek",
    skillCategory: "Statistiek & Dataredeneren",
    tags: ["statistiek", "onderzoek", "praktisch", "meting"],
    definition: "Effect grootte meet hoe groot of praktisch belangrijk een statistisch gevonden verschil is — los van statistische significantie. Een klein p-waarde garandeert niet dat het effect groot genoeg is om praktisch relevant te zijn.",
    abstractExample: "Een nieuwe leesmethode verhoogt gemiddelde scores met 0.3 punten (p = 0.001): statistisch significant, maar is 0.3 punt verbetering de kosten van een heel nieuwe methode waard?",
    examples: [
      { domain: "Medisch", icon: "🏥", text: "Een medicijn vermindert bloeddruk met 2 mmHg (statistisch significant bij grote groepen) — maar dit heeft nauwelijks klinische betekenis voor individuele patiënten." },
      { domain: "Onderwijs", icon: "📚", text: "Meta-analyses meten Cohen's d om te vergelijken welke interventies werkelijk grote leereffecten hebben vs. statistisch significante maar kleine verbeteringen." },
      { domain: "Marketing", icon: "🛍️", text: "A/B-test toont 0.1% hogere conversie (p < 0.001) bij miljoen bezoekers — statistisch significant, maar is de aanpassing de ontwikkelkosten waard?" }
    ],
    prerequisites: ["p-value-significance"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke maat voor effect grootte is het meest gebruikt in psychologisch onderzoek?", options: ["P-waarde", "Cohen's d", "R-kwadraat", "Standaarddeviatie"], correct: 1, explanation: "Cohen's d meet het verschil in gemiddelden uitgedrukt in standaarddeviaties — een gestandaardiseerde maat voor effect grootte." }
    ],
    creativePrompt: "Zoek een wetenschappelijk onderzoeksresultaat dat jou verraste. Bedenk vragen die je zou stellen om te bepalen of het effect groot genoeg is om je gedrag te veranderen.",
    aiHelperPrompts: ["Wat is het verschil tussen statistisch en praktisch significant?", "Hoe interpreteer ik Cohen's d?", "Wanneer moet ik effect grootte meewegen bij beleidsbeslissingen?"]
  },
  {
    id: "anecdote-vs-data",
    title: "Anekdote versus Data",
    difficulty: 1,
    emoji: "📝",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Statistiek & Dataredeneren",
    tags: ["bewijs", "redeneren", "data", "anekdote"],
    definition: "Een anekdote is een persoonlijk verhaal of individueel geval; data is systematisch verzamelde informatie over een groep. Anekdotes zijn krachtig voor illustratie maar kunnen geen statistische patronen vervangen als bewijs.",
    abstractExample: "Mijn oma rookte elke dag en werd 95 — dit anekdote weerlegt niet de statistische realiteit dat roken de levensverwachting gemiddeld met tien jaar verkort.",
    examples: [
      { domain: "Gezondheid", icon: "🏥", text: "Een vriend die genas van kanker na een dieet bewijst niet dat het dieet kanker geneest — individuele gevallen zijn geen statistische studies." },
      { domain: "Economie", icon: "💰", text: "'Ik ken een immigrant die succesvol is' en 'de meeste immigranten integreren goed' zijn beide valide observaties op verschillende niveaus." },
      { domain: "Beleid", icon: "🏛️", text: "Politici gebruiken hartverscheurende individuele gevallen om beleid te bepleiten — wetgeving moet echter gegrond zijn op hoe de wet de brede bevolking beïnvloedt." }
    ],
    prerequisites: [],
    unlocks: ["base-rate-fallacy"],
    exercises: [
      { type: "multipleChoice", question: "Wanneer is een anekdote wél wetenschappelijk relevant?", options: ["Nooit", "Als het een hypothesis genereert voor verder onderzoek", "Als het van een expert komt", "Als er meerdere anekdotes zijn"], correct: 1, explanation: "Anekdotes zijn waardevol als startpunt voor hypotheses, maar moeten worden gevolgd door systematisch onderzoek." }
    ],
    creativePrompt: "Zoek een mening die je sterk aanhangt die voornamelijk is gebaseerd op persoonlijke ervaringen. Wat zou de data zeggen? Zoek een studie op en vergelijk het met jouw anekdote.",
    aiHelperPrompts: ["Hoe gebruik ik anekdotes effectief zonder te misleiden?", "Wanneer is kwalitatief onderzoek even goed als kwantitatief?", "Hoe weeg ik persoonlijke ervaringen af tegen statistische data?"]
  },
  {
    id: "a-b-testing",
    title: "A/B-testen",
    difficulty: 2,
    emoji: "🧪",
    academicCategory: "Experimenteel Onderzoek",
    skillCategory: "Statistiek & Dataredeneren",
    tags: ["experiment", "testen", "data", "beslissing"],
    definition: "A/B-testen is het vergelijken van twee varianten (A en B) door ze tegelijkertijd aan willekeurig geselecteerde groepen aan te bieden, om te meten welke variant beter presteert op een gedefinieerde metriek.",
    abstractExample: "A/B-testen is als twee versies van een recept serveren aan twee willekeurige tafels in een restaurant en meten welke gasten meer opeten.",
    examples: [
      { domain: "Website", icon: "💻", text: "Amazon test constant knopkleuren, teksten en layouts op willekeurige bezoekers — kleine verbeteringen bij miljarden bezoekers zijn enorme omzetverhogingen." },
      { domain: "Email", icon: "📧", text: "Een nieuwsbrief test twee onderwerpregels bij 10% van de lijst, stuurt de winnaar naar de rest — data bepaalt de beste formulering." },
      { domain: "Beleid", icon: "🏛️", text: "Gedragseconomen testen via gerandomiseerde trials welke formulering van belastingherinneringen de hoogste betalingsratio oplevert." }
    ],
    prerequisites: ["p-value-significance"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is de meest kritische voorwaarde voor een valide A/B-test?", options: ["Grote steekproef", "Willekeurige toewijzing van deelnemers", "Lange testduur", "Professionele tools"], correct: 1, explanation: "Willekeurige toewijzing garandeert dat de twee groepen vergelijkbaar zijn — anders vergelijk je appels met peren." }
    ],
    creativePrompt: "Ontwerp een A/B-test voor iets in jouw leven: een manier van vragen stellen, een ochtendoefening, of een communicatiestijl. Wat test je, hoe randomiseer je en wat is je sucesmetriek?",
    aiHelperPrompts: ["Hoe bepaal ik de juiste steekproefgrootte voor een A/B-test?", "Welke fouten maak ik bij A/B-testen?", "Hoe voer ik A/B-tests uit zonder techniekafdeling?"]
  },

  // Batch U – Geschiedenis & Tijd
  {
    id: "historical-cycles",
    title: "Historische Cycli",
    difficulty: 3,
    emoji: "🔄",
    academicCategory: "Geschiedenis",
    skillCategory: "Geschiedenis & Tijd",
    tags: ["geschiedenis", "patronen", "cycli", "herhaling"],
    definition: "Historische cycli zijn terugkerende patronen in de menselijke geschiedenis — zoals Turchin's seculaire cycli van politieke instabiliteit — die suggereren dat geschiedenis geen rechte lijn is maar ritmische golven.",
    abstractExample: "Net zoals golven op zee steeds terugkomen zonder precies hetzelfde te zijn, vertoont de geschiedenis cycli van opkomst, bloei, verval en hergeboorte in naties en beschavingen.",
    examples: [
      { domain: "Politiek", icon: "🏛️", text: "Grote rijken (Romeins, Mongools, Brits) vertonen vergelijkbare groeicycli van expansie, hoogtepunt en fragmentatie over 200-400 jaar." },
      { domain: "Economie", icon: "💰", text: "Kondratieff-cycli beschrijven ~50-jarige economische golven van innovatie, groei, verzadiging en depressie die elke halve eeuw terugkeren." },
      { domain: "Democratie", icon: "🗳️", text: "Democratieën vertonen cycli van liberalisering (burgerrechten uitbreiden) en conservatieve reactie die om de generaties lijken te slingeren." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het grootste risico bij het gebruik van historische cycli als voorspelmodel?", options: ["Cycli zijn altijd exact", "Neiging tot te vereenvoudigen en historische overeenkomsten te overdrijven", "Cycli zijn wetenschappelijk bewezen", "Ze werken alleen voor economie"], correct: 1, explanation: "Historische cycli zijn patronen, geen wetten — de verleiding om te veel te extrapoleren leidt tot flauwe determinisme." }
    ],
    creativePrompt: "Welk historisch patroon zie je terugkomen in jouw eigen leven, familie of werkomgeving? Beschrijf de cyclus en wat je hieruit kunt leren voor de volgende fase.",
    aiHelperPrompts: ["Hoe gebruik ik historische kennis voor toekomstvoorspellingen?", "Welke historische cycli zijn het meest bewezen?", "Hoe vermijd ik deterministisch denken over geschiedenis?"]
  },
  {
    id: "path-dependency",
    title: "Padafhankelijkheid",
    difficulty: 2,
    emoji: "🛤️",
    academicCategory: "Economische Geschiedenis",
    skillCategory: "Geschiedenis & Tijd",
    tags: ["geschiedenis", "keuzes", "lock-in", "institutie"],
    definition: "Padafhankelijkheid beschrijft hoe vroegere keuzes en omstandigheden de huidige opties beperken — zelfs als de oorspronkelijke redenen voor die keuzes al lang niet meer relevant zijn.",
    abstractExample: "De breedte van moderne treinsporen is gebaseerd op de breedte van Engelse wagens uit de 19e eeuw, die was gebaseerd op paardensporen uit de Middeleeuwen — antieke beslissingen bepalen moderne infrastructuur.",
    examples: [
      { domain: "Technologie", icon: "💻", text: "QWERTY-toetsenbord: ontworpen om typemachinestoring te voorkomen, maar nu onmogelijk te vervangen ondanks ergonomisch betere alternatieven bestaan." },
      { domain: "Recht", icon: "⚖️", text: "Grondwetten zijn padafhankelijk: de Amerikaanse grondwet van 1787 beperkt en vormt hoe 21e-eeuwse wetgeving eruitziet." },
      { domain: "Bedrijf", icon: "💼", text: "Veel bedrijven gebruiken verouderde software niet vanwege kwaliteit maar vanwege de enorme kosten van migratie — path lock-in." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Waarom verandert padafhankelijkheid zo moeilijk?", options: ["Mensen zijn te dom om te veranderen", "De kosten van overgang overtreffen vaak de voordelen van een beter alternatief", "Padafhankelijkheid is altijd optimaal", "Verandering is onmogelijk"], correct: 1, explanation: "Switching costs — trainingskosten, infrastructuur, netwerk — maken het rationeel om een suboptimaal pad te blijven volgen." }
    ],
    creativePrompt: "Identificeer drie 'padafhankelijkheden' in jouw organisatie of persoonlijk leven. Voor elk: wat was de originele reden? Is die reden nog geldig? Wat zou het kosten om te veranderen?",
    aiHelperPrompts: ["Hoe herken ik padafhankelijkheid in organisaties?", "Wanneer is het de moeite waard om een padafhankelijkheid te doorbreken?", "Welke grote technologische padafhankelijkheden bestaan er?"]
  },
  {
    id: "great-man-vs-forces",
    title: "Grote Mannen vs. Historische Krachten",
    difficulty: 3,
    emoji: "⚔️",
    academicCategory: "Geschiedfilosofie",
    skillCategory: "Geschiedenis & Tijd",
    tags: ["geschiedenis", "leiderschap", "structuur", "causaliteit"],
    definition: "Het 'grote mannen'-debat vraagt of geschiedenis wordt gevormd door uitzonderlijke individuen of door diepere structurele krachten (economie, technologie, klimaat) — een spanning tussen agency en determinisme.",
    abstractExample: "Had Hitler Duitsland geregeerd als de Grote Depressie niet had plaatsgevonden? Had Napoleon de Franse Revolutie kunnen vervangens als hij niet bestond? Kon het niet zonder de contextuele krachten?",
    examples: [
      { domain: "Politiek", icon: "🏛️", text: "Napoleon was een buitengewoon leider — maar historici debatteren in hoeverre de Franse Revolutie iemand als Napoleon 'produceerde' ongeacht de persoon." },
      { domain: "Wetenschap", icon: "🔬", text: "Darwin en Wallace kwamen onafhankelijk tot de evolutietheorie — suggererende dat de 'tijd rijp' was voor die ontdekking los van de persoon." },
      { domain: "Technologie", icon: "💻", text: "Had een andere persoon dan Steve Jobs Apple kunnen leiden? Of zorgden de technologische en markttrends voor een succesvolle iPhone-variant hoe dan ook?" }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke benadering hanteert de 'materialistische' geschiedschrijving?", options: ["Individuen bepalen de loop van de geschiedenis", "Economische en sociale krachten bepalen de uitkomst", "Toeval is het meest bepalend", "Religie stuurt de geschiedenis"], correct: 1, explanation: "Materialistische historici zoals Marx stellen dat economische structuren en klassenverhoudingen de motor van de geschiedenis zijn, niet individuen." }
    ],
    creativePrompt: "Kies een historisch moment. Schrijf twee versies: één waar een individuele leider het resultaat volledig bepaalde en één waar structurele krachten het resultaat bepaalden ongeacht de leider. Welke vind je overtuigender?",
    aiHelperPrompts: ["Hoe balanceer ik agency en structuur in historische verklaring?", "Wat zeggen contrafactuele geschiedenissen ons?", "Hoe denk ik over leiderschap via historische lenzen?"]
  },
  {
    id: "long-term-thinking",
    title: "Langtermijndenken",
    difficulty: 2,
    emoji: "🔭",
    academicCategory: "Filosofie",
    skillCategory: "Geschiedenis & Tijd",
    tags: ["toekomst", "strategie", "duurzaamheid", "planning"],
    definition: "Langtermijndenken is het vermogen om beslissingen te nemen door de gevolgen op een tijdschaal van jaren, decennia of generaties te overwegen — niet alleen de directe kortetermijnvoordelen.",
    abstractExample: "Langtermijndenken is als een boer die in de herfst zaait voor de volgende zomer: kortetermijnkosten (zaaigoed, arbeid) voor langetermijnwinst (oogst).",
    examples: [
      { domain: "Milieu", icon: "🌍", text: "Finland plant bomen die pas over 80 jaar gekapt worden — een langtermijninvestering die hedendaagse generaties niet zelf zullen oogsten." },
      { domain: "Onderwijs", icon: "📚", text: "Investeren in kleuterschooleducatie levert de hoogste economische rendementen op — maar pas na 15-25 jaar, buiten de politieke cyclus van 4 jaar." },
      { domain: "Bedrijf", icon: "💼", text: "Amazon verloor jarenlang geld om marktpositie op te bouwen — Bezos' 'long-term greed' strategie betaalde zich terug over decennia." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het grootste structurele obstakel voor langtermijndenken in democratieën?", options: ["Gebrek aan kennis", "De korte politieke cyclus (4 jaar) vs. lange beleidshorizonten", "Burgers zijn te egoïstisch", "Economische modellen zijn incorrect"], correct: 1, explanation: "Politici worden beloond voor zichtbare kortetermijnresultaten, niet voor investeringen die pas na decennia renderen." }
    ],
    creativePrompt: "Schrijf een brief aan jezelf over 20 jaar. Welke beslissingen die je nu neemt zullen dan het meest bepalend zijn? Welke kortetermijnsatisfacties zijn het minst waard op lange termijn?",
    aiHelperPrompts: ["Hoe train ik langtermijndenken in een wereld van instant gratification?", "Welke frameworks helpen bij strategische langetermijnplanning?", "Hoe overtuig ik anderen van langtermijninvesteringen?"]
  },
  {
    id: "presentism-bias",
    title: "Presentismebias",
    difficulty: 2,
    emoji: "⏰",
    academicCategory: "Geschiedenis",
    skillCategory: "Geschiedenis & Tijd",
    tags: ["bias", "geschiedenis", "oordeel", "anachronisme"],
    definition: "Presentismebias is het beoordelen van historische mensen, acties of normen met hedendaagse morele maatstaven — zonder rekening te houden met de historische context en de kennis die toen beschikbaar was.",
    abstractExample: "Aristoteles verdedigde slavernij — maar hem met dezelfde morele ernst veroordelen als een moderne slavenhouder negeert dat zijn gehele culturele context fundamenteel anders was.",
    examples: [
      { domain: "Wetenschap", icon: "🔬", text: "Medici die bloedlaten toepasten deden dit conform de beste beschikbare kennis — ze 'wisten' niet beter, en zijn daarin te onderscheiden van wie nu bloedlaten zou toepassen." },
      { domain: "Politiek", icon: "🏛️", text: "Koloniale figuren uit de 18e eeuw oordelen naar 21e-eeuwse mensenrechtsstandaarden negeert dat die standaarden zelf een historisch product zijn." },
      { domain: "Kunst", icon: "🎨", text: "Kunstwerken die vandaag als stereotyperend worden gezien, werden in hun tijd soms als progressief of neutraal beschouwd." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is presentismebias?", options: ["Geloven dat het heden beter is dan het verleden", "Historische situaties beoordelen met huidige normen", "Zich te veel met het heden bezighouden", "Toekomst negeren ten gunste van heden"], correct: 1, explanation: "Presentisme in de historiografie betekent het toepassen van hedendaagse waarden op historische contexten die fundamenteel anders waren." }
    ],
    creativePrompt: "Kies een historische figuur die vandaag sterk wordt bekritiseerd. Probeer zijn of haar acties te begrijpen vanuit de normen en kennis van hun eigen tijd. Wat verandert er in je oordeel?",
    aiHelperPrompts: ["Hoe vermijd ik presentisme in historische analyse?", "Wanneer is het wél gepast om historische figuren te veroordelen?", "Hoe beïnvloedt presentisme hedendaagse debatten over standbeelden?"]
  },
  {
    id: "generational-theory",
    title: "Generatietheorie",
    difficulty: 2,
    emoji: "👥",
    academicCategory: "Sociologie",
    skillCategory: "Geschiedenis & Tijd",
    tags: ["generaties", "cultuur", "demografie", "verandering"],
    definition: "Generatietheorie beschrijft hoe de omstandigheden tijdens de opgroeifase (economisch, cultureel, politiek) een generatie vormen met gedeelde waarden, attitudes en gedragspatronen die verschijnen van andere generaties.",
    abstractExample: "Een generatie die als kind een economische depressie meemaakte, zal spaarzamer zijn dan een generatie die opgroeide in welvaart — ongeacht individuele persoonlijkheid.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Babyboomers valoriseren loyaliteit aan één werkgever; millennials prefereren flexibiliteit en purpose — verschil in opgroeicondities, niet karakter." },
      { domain: "Politiek", icon: "🏛️", text: "Generaties die oorlog meemaakten steunen vaker internationale samenwerking; generaties die vrede kenden zijn sceptischer over haar kosten." },
      { domain: "Technologie", icon: "💻", text: "Digital natives (geboren na 1995) hebben fundamenteel andere verwachtingen van privacynormen dan digital immigrants die voor het internet opgroeiden." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het grootste gevaar van generatiegeneralisaties?", options: ["Ze zijn altijd onjuist", "Ze negeren enorme individuele variatie binnen generaties", "Ze zijn alleen nuttig voor marketing", "Ze zijn te wetenschappelijk voor algemeen gebruik"], correct: 1, explanation: "Generatiepatronen zijn statistische tendensen — enorme individuele variatie betekent dat elk individu niet per se past in het generatieprofiel." }
    ],
    creativePrompt: "Welke waarden uit jouw opgroeifase zijn zo fundamenteel voor jou dat je ze moeilijk kunt loslaten? Hoe kijkt een andere generatie naar dezelfde kwestie? Wat verklaart het verschil?",
    aiHelperPrompts: ["Zijn generatieverschillen echt of overdreven door media?", "Hoe werk ik effectief met mensen van andere generaties?", "Welke generatieconflicten zijn er in de huidige arbeidsmarkt?"]
  },
  {
    id: "primary-secondary-sources",
    title: "Primaire en Secundaire Bronnen",
    difficulty: 1,
    emoji: "📜",
    academicCategory: "Historiografie",
    skillCategory: "Geschiedenis & Tijd",
    tags: ["bronnen", "onderzoek", "kritisch denken", "historiografie"],
    definition: "Primaire bronnen zijn directe getuigenissen of artefacten uit de bestudeerde periode (dagboeken, wetten, foto's); secundaire bronnen zijn interpretaties en analyses van primaire bronnen door historici.",
    abstractExample: "Een brief van Anne Frank is een primaire bron; een historisch boek over de Holocaust dat die brief analyseert is een secundaire bron — beide zijn waardevol maar op verschillende manieren.",
    examples: [
      { domain: "Geschiedenis", icon: "📚", text: "De dagboeken van Samuel Pepys zijn een primaire bron voor het dagelijks leven in 17e-eeuws Londen; een biografie over hem is secundair." },
      { domain: "Recht", icon: "⚖️", text: "Een rechtbankuitspraak is primair; een rechtswetenschappelijk artikel dat de uitspraak bespreekt is secundair." },
      { domain: "Wetenschap", icon: "🔬", text: "Een origineel wetenschappelijk artikel (paper) is primair; een review-artikel dat meerdere studies samenvat is secundair." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het voordeel van primaire bronnen boven secundaire bronnen?", options: ["Ze zijn altijd betrouwbaarder", "Ze geven directe toegang tot de oorspronkelijke bron zonder interpretatielagen", "Ze zijn eenvoudiger te begrijpen", "Ze zijn moderner"], correct: 1, explanation: "Primaire bronnen geven rechtstreeks toegang tot het origineel, zonder de interpretatielagen die elke intermediair toevoegt." }
    ],
    creativePrompt: "Kies een historisch onderwerp. Zoek één primaire en één secundaire bron erover. Vergelijk: wat vertelt de primaire bron dat de secundaire niet vertelt, en vice versa?",
    aiHelperPrompts: ["Hoe vind ik primaire bronnen online?", "Hoe evalueer ik de betrouwbaarheid van een bron?", "Wanneer gebruik ik secundaire boven primaire bronnen?"]
  },
  {
    id: "historiography",
    title: "Historiografie",
    difficulty: 3,
    emoji: "📚",
    academicCategory: "Geschiedenis",
    skillCategory: "Geschiedenis & Tijd",
    tags: ["geschiedenis", "interpretatie", "methode", "perspectief"],
    definition: "Historiografie is de studie van hoe geschiedenis wordt geschreven — welke vragen historici stellen, welke bronnen ze gebruiken, welke interpretaties ze bieden — en hoe deze veranderen over tijd en cultuur.",
    abstractExample: "Dezelfde Eerste Wereldoorlog werd in de 1920s beschreven als 'de oorlog om oorlogen te beëindigen', in de 1960s als imperialistisch avontuur en in de 2010s als systeemfalen — de feiten veranderden niet, de vragen wel.",
    examples: [
      { domain: "Koloniaal verleden", icon: "🌍", text: "Kolonialisme werd door Europese historici lange tijd als 'beschavingsmissie' beschreven; postkoloniale historici beschrijven het als exploitatie en geweld." },
      { domain: "Gendergeschiedenis", icon: "♀️", text: "Traditionele geschiedschrijving focuste op mannen en macht; feminist history bracht vrouwen, huishouden en dagelijks leven in beeld." },
      { domain: "Lokale geschiedenis", icon: "🏘️", text: "Nationale geschiedenissen worden uitgedaagd door lokale en regionale perspectieven die andere ervaringen documenteren." }
    ],
    prerequisites: ["primary-secondary-sources"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat bestudeert historiografie?", options: ["De feiten van de geschiedenis", "Hoe historici geschiedenis schrijven en interpreteren", "Alleen de geschriften van beroemde historici", "Methodologische fouten in historisch onderzoek"], correct: 1, explanation: "Historiografie richt zich op de methoden, aannames en paradigma's van de geschiedbeoefening zelf — meta-geschiedenis." }
    ],
    creativePrompt: "Zoek twee beschrijvingen van hetzelfde historische evenement uit verschillende landen of periodes. Wat benadrukken ze anders? Welke vragen stellen ze? Wat laat elk weg?",
    aiHelperPrompts: ["Hoe beïnvloedt nationalisme de geschiedschrijving?", "Wat zijn de grote paradigma's in de moderne historiografie?", "Hoe lees ik een historisch werk kritisch?"]
  },
  {
    id: "black-swan-events",
    title: "Zwarte Zwaan Gebeurtenissen",
    difficulty: 2,
    emoji: "🦢",
    academicCategory: "Risicobeheer",
    skillCategory: "Geschiedenis & Tijd",
    tags: ["risico", "onzekerheid", "kansen", "verrassing"],
    definition: "Zwarte Zwanen (Nassim Taleb) zijn zeldzame, extreem impactvolle gebeurtenissen die achteraf als voorspelbaar worden verklaard maar vóóraf nauwelijks te voorzien waren — ze domineren de loop van de geschiedenis.",
    abstractExample: "Vóór 1697 geloofde Europa dat alle zwanen wit waren — totdat Australische zwanen werden ontdekt. Eén observatie vernietigde eeuwen van aanname.",
    examples: [
      { domain: "Technologie", icon: "💻", text: "Het internet veranderde de mondiale samenleving fundamenteel — weinigen voorspelden in 1990 de impact die het in 2000 zou hebben." },
      { domain: "Gezondheid", icon: "🏥", text: "COVID-19 was technisch voorspelbaar (pandemieexperts waarschuwden) maar werd toch een verrassing voor de wereldwijde economie en politiek." },
      { domain: "Financieel", icon: "📈", text: "De financiële crisis van 2008 werd door risicomodellen niet voorzien omdat die gebaseerd waren op historische normale distributies." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat maakt iets een 'Zwarte Zwaan' volgens Taleb?", options: ["Het is zeldzaam", "Het is zeldzaam, extreem impactvol, en achteraf verklaarbaar", "Het is onmogelijk te voorzien", "Het is altijd negatief"], correct: 1, explanation: "Taleb's drie kenmerken: outlier (zeldzaam), enorme impact, en ex-post rationaliseerbaarheid — achteraf zeggen we 'dat hadden we moeten zien'." }
    ],
    creativePrompt: "Welke 'Zwarte Zwaan' veranderde jouw persoonlijke leven het meest? Hoe robuster had je jezelf kunnen maken tegen die verrassing? Welke zwarte zwanen kunnen nog komen?",
    aiHelperPrompts: ["Hoe maak ik mijn leven robuuster tegen Zwarte Zwanen?", "Wat is het verschil tussen risico en onzekerheid?", "Welke Zwarte Zwanen verwacht Taleb in de nabije toekomst?"]
  },
  {
    id: "time-preference",
    title: "Tijdpreferentie",
    difficulty: 2,
    emoji: "⏳",
    academicCategory: "Economie",
    skillCategory: "Geschiedenis & Tijd",
    tags: ["tijd", "beloning", "geduld", "economie"],
    definition: "Tijdpreferentie beschrijft de mate waarin mensen huidige beloningen boven toekomstige beloningen prefereren — hoge tijdpreferentie betekent 'nu genieten', lage tijdpreferentie betekent bereid zijn te wachten voor grotere toekomstige winst.",
    abstractExample: "Het Stanford marshmallow-experiment: kinderen die één marshmallow konden nemen of wachten voor twee. Hoge tijdpreferentie: neem het nu. Lage tijdpreferentie: wacht en krijg meer.",
    examples: [
      { domain: "Financiën", icon: "💰", text: "Pensioensparen vereist lage tijdpreferentie: je geeft nu koopkracht op voor een beter leven over 30 jaar." },
      { domain: "Onderwijs", icon: "📚", text: "Een opleiding kost nu jaren en geld — de beloning (hoger inkomen) materialiseert pas jaren later." },
      { domain: "Maatschappij", icon: "🌍", text: "Samenlevingen met lage tijdpreferentie investeren meer in infrastructuur, onderwijs en onderzoek die generaties later renderen." }
    ],
    prerequisites: [],
    unlocks: ["long-term-thinking"],
    exercises: [
      { type: "multipleChoice", question: "Wat suggereert een hoge discontovoet in economisch model?", options: ["Toekomstige waarden zijn erg belangrijk", "Mensen hechten weinig waarde aan toekomstige uitkomsten", "Inflatie is hoog", "Rente is laag"], correct: 1, explanation: "Een hoge discontovoet geeft aan dat toekomstige waarden snel in waarde dalen — uitdrukking van hoge tijdpreferentie." }
    ],
    creativePrompt: "Analyseer jouw eigen tijdpreferentie in drie domeinen: geld, gezondheid en relaties. Ben je consistent? Waar wijkt jouw werkelijke gedrag af van wat je ideaal zou willen?",
    aiHelperPrompts: ["Hoe verlaag ik mijn tijdpreferentie voor betere beslissingen?", "Wat bepaalt iemands tijdpreferentie?", "Hoe verschilden tijdpreferenties door de geschiedenis heen?"]
  },

  // Batch V – Recht & Rechtvaardigheid
  {
    id: "presumption-of-innocence",
    title: "Onschuldpresumptie",
    difficulty: 1,
    emoji: "⚖️",
    academicCategory: "Rechtswetenschappen",
    skillCategory: "Recht & Rechtvaardigheid",
    tags: ["recht", "bewijs", "strafrecht", "eerlijk proces"],
    definition: "De onschuldpresumptie houdt in dat iemand onschuldig wordt geacht totdat zijn schuld buiten redelijke twijfel is bewezen — de bewijslast ligt bij de aanklager, niet bij de verdachte.",
    abstractExample: "Een onbekende vliegtuigtekening veronderstelt dat een vliegtuig vliegt totdat bewijs van een defect overtuigend aantoont dat het gevaarlijk is — veiligheid vereist de omgekeerde last.",
    examples: [
      { domain: "Strafrecht", icon: "⚖️", text: "In een strafproces hoeft een verdachte niet te bewijzen dat hij onschuldig is; de aanklager moet schuld aantonen." },
      { domain: "Arbeidsrecht", icon: "💼", text: "Een werknemer die van diefstal wordt beschuldigd heeft recht op een eerlijk onderzoek voordat disciplinaire maatregelen worden genomen." },
      { domain: "Social media", icon: "📱", text: "Online beschuldigingen zonder bewijs die reputaties vernietigen schenden de geest van de onschuldpresumptie buiten de rechtszaal." }
    ],
    prerequisites: [],
    unlocks: ["burden-of-proof"],
    exercises: [
      { type: "multipleChoice", question: "Waarom ligt de bewijslast bij de aanklager en niet bij de verdachte?", options: ["Omdat verdachten liegen", "Om te voorkomen dat onschuldigen worden veroordeeld door onmogelijke negatieve bewijzen", "Omdat aanklagers beter opgeleid zijn", "Om het proces sneller te maken"], correct: 1, explanation: "Het is onmogelijk om te bewijzen dat je iets níét hebt gedaan — de aanklager die de positieve bewering maakt, draagt logischerwijs de bewijslast." }
    ],
    creativePrompt: "Beschrijf een situatie buiten de rechtszaal (werk, school, sociaal) waarbij de onschuldpresumptie werd geschonden. Wat was de impact? Hoe had het anders moeten gaan?",
    aiHelperPrompts: ["Hoe werkt de onschuldpresumptie in de praktijk?", "Wanneer kan een rechter de onschuldpresumptie beperken?", "Hoe verhoudt sociale veroordeling zich tot juridische onschuld?"]
  },
  {
    id: "burden-of-proof",
    title: "Bewijslast",
    difficulty: 2,
    emoji: "🔍",
    academicCategory: "Rechtswetenschappen",
    skillCategory: "Recht & Rechtvaardigheid",
    tags: ["bewijs", "argumentatie", "recht", "logica"],
    definition: "De bewijslast is de verplichting van degene die een bewering doet om die bewering te onderbouwen met bewijs — 'wie stelt, bewijst'. Het niveau van vereist bewijs verschilt per context (strafrecht vs. civiel recht).",
    abstractExample: "Als iemand beweert dat eenhoorns bestaan, is het niet aan sceptici om te bewijzen dat ze niet bestaan — de bewering vereist bewijs van degene die hem doet.",
    examples: [
      { domain: "Strafrecht", icon: "⚖️", text: "'Beyond reasonable doubt' (buiten redelijke twijfel) is de hoge standaard voor schuldigverklaring in strafzaken — ~95%+ zekerheid." },
      { domain: "Civiel recht", icon: "📋", text: "'Preponderance of evidence' (overwicht van bewijs) is de lagere standaard in civiele zaken — meer dan 50% aannemelijk." },
      { domain: "Wetenschap", icon: "🔬", text: "In wetenschap draagt degene die een nieuwe claim maakt de bewijslast — anderen hoeven niets te doen totdat positief bewijs wordt geleverd." }
    ],
    prerequisites: ["presumption-of-innocence"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het verschil in bewijsstandaard tussen strafrecht en civiel recht?", options: ["Er is geen verschil", "Strafrecht vereist hogere zekerheid dan civiel recht", "Civiel recht is strenger", "Alleen strafrecht heeft bewijsstandaarden"], correct: 1, explanation: "Strafrecht heeft de hoogste standaard ('buiten redelijke twijfel') omdat de gevolgen — vrijheidsstraf — zo ernstig zijn." }
    ],
    creativePrompt: "Analyseer drie alledaagse discussies (in het nieuws, met vrienden, online). Wie draagt de bewijslast in elk geval? Wordt die last correct gedragen of wordt de logica omgekeerd?",
    aiHelperPrompts: ["Hoe verschilt de bewijslast in verschillende rechtssystemen?", "Wat is 'burden shifting' in juridische argumentatie?", "Hoe pas ik de bewijslastlogica toe in dagelijkse discussies?"]
  },
  {
    id: "restorative-justice",
    title: "Herstelrecht",
    difficulty: 2,
    emoji: "🤝",
    academicCategory: "Criminologie",
    skillCategory: "Recht & Rechtvaardigheid",
    tags: ["recht", "herstel", "slachtoffer", "dader"],
    definition: "Herstelrecht is een benadering van gerechtigheid die focust op het herstel van schade aan slachtoffers, gemeenschappen en daders — in plaats van uitsluitend op straf en vergelding.",
    abstractExample: "Herstelrecht is als een gebroken vaas herstellen: in plaats van de persoon die hem brak te straffen, zoek je samen naar hoe de vaas gerepareerd en de relatie hersteld kan worden.",
    examples: [
      { domain: "School", icon: "📚", text: "Na pesten op school praten dader en slachtoffer onder begeleiding over de impact, zoeken herstel en maken gezamenlijke afspraken." },
      { domain: "Criminologie", icon: "⚖️", text: "Maori-geïnspireerde Family Group Conferencing in Nieuw-Zeeland laat daders, slachtoffers en gemeenschap samen herstelplannen maken." },
      { domain: "Werkplek", icon: "💼", text: "Na een conflict op de werkvloer mediatie waarbij beide partijen hun impact benoemen en samen naar oplossingen zoeken." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het primaire doel van herstelrecht?", options: ["De dader maximaal straffen", "Schade herstellen en relaties verbeteren", "Recidive voorkomen via angst", "De samenleving te beschermen"], correct: 1, explanation: "Herstelrecht plaatst het herstel van alle betrokkenen centraal — niet de straf van de dader." }
    ],
    creativePrompt: "Beschrijf een conflict waarbij herstelrecht beter had gewerkt dan een punitieve aanpak. Hoe zou het herstelproces eruitzien? Wie zouden deelnemen en wat zouden ze bereiken?",
    aiHelperPrompts: ["Wanneer werkt herstelrecht beter dan traditionele straf?", "Hoe verhoudt herstelrecht zich tot vergiffenis?", "Welke landen gebruiken herstelrecht het meest?"]
  },
  {
    id: "proportionality-principle",
    title: "Proportionaliteitsbeginsel",
    difficulty: 2,
    emoji: "⚖️",
    academicCategory: "Rechtswetenschappen",
    skillCategory: "Recht & Rechtvaardigheid",
    tags: ["straf", "evenredigheid", "recht", "beleid"],
    definition: "Het proportionaliteitsbeginsel vereist dat straffen, maatregelen of ingrepen evenredig zijn aan de ernst van het vergrijp of het doel dat nagestreefd wordt — overreactie is ongerechtvaardigd.",
    abstractExample: "Een verkeersboete voor 5 km/u te hard rijden is proportioneel; rijbewijs intrekken voor dezelfde overtreding is dat niet — de straf moet overeenstemmen met de ernst.",
    examples: [
      { domain: "Strafrecht", icon: "⚖️", text: "Minimumstraffen die geen rekening houden met verzachtende omstandigheden worden bekritiseerd als disproportioneel." },
      { domain: "Internationaal recht", icon: "🌍", text: "Militaire vergeldingsacties moeten proportioneel zijn aan de aanval — massabombardementen als reactie op één aanval schenden dit beginsel." },
      { domain: "Arbeidsrecht", icon: "💼", text: "Ontslag wegens kleine administratieve fout is disproportioneel als een waarschuwing voldoende was geweest." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "In welk rechtsterrein speelt proportionaliteit een cruciale rol?", options: ["Alleen in strafrecht", "In strafrecht, internationaal recht en bestuursrecht", "Alleen in internationaal recht", "Uitsluitend in civiel recht"], correct: 1, explanation: "Proportionaliteit is een fundamenteel rechtsbeginsel dat in meerdere rechtsgebieden geldt: strafrecht, bestuursrecht en internationaal humanitair recht." }
    ],
    creativePrompt: "Beschrijf een situatie waarbij jij (of iemand die je kent) disproportioneel werd behandeld. Wat was de straf, wat was het vergrijp en wat zou proportioneel zijn geweest?",
    aiHelperPrompts: ["Hoe bepaal ik of een straf proportioneel is?", "Hoe wordt proportionaliteit getoetst door rechters?", "Wat zijn voorbeelden van disproportioneel beleid?"]
  },
  {
    id: "natural-law",
    title: "Natuurrecht",
    difficulty: 3,
    emoji: "🌿",
    academicCategory: "Rechtsfilosofie",
    skillCategory: "Recht & Rechtvaardigheid",
    tags: ["filosofie", "recht", "moraal", "universeel"],
    definition: "Natuurrecht is de theorie dat er universele morele principes bestaan die onafhankelijk zijn van menselijke wetgeving — wetten die deze schenden zijn onrechtvaardig, zelfs als ze legaal zijn.",
    abstractExample: "Als een wet voorschrijft dat je onschuldige mensen moet doden, is het volgen van die wet moreel onjuist — er bestaat een hogere morele wet boven de positieve wet.",
    examples: [
      { domain: "Mensenrechten", icon: "🌍", text: "De Universele Verklaring van de Rechten van de Mens berust op de idee dat sommige rechten universeel en onvervreemdbaar zijn — onafhankelijk van nationale wetgeving." },
      { domain: "Neurenberg", icon: "⚖️", text: "Nazi-officieren konden 'ik volgde orders' niet als verdediging gebruiken — het tribunaal erkende een hogere wet boven nationale wetgeving." },
      { domain: "Burgerrechten", icon: "✊", text: "Martin Luther King rechtvaardigde civiele ongehoorzaamheid via natuurrecht: onrechtvaardige wetten zijn geen ware wetten." }
    ],
    prerequisites: ["social-contract"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat onderscheidt natuurrecht van positief recht?", options: ["Natuurrecht is ouder", "Natuurrecht claimt universele morele geldigheid onafhankelijk van wet", "Positief recht is moreler", "Natuurrecht is alleen religieus"], correct: 1, explanation: "Positief recht is door mensen gemaakt en kan veranderen; natuurrecht claimt dat sommige morele principes universeel en onveranderlijk zijn." }
    ],
    creativePrompt: "Beschrijf een wet die legaal is maar die jij moreel onjuist vindt. Vanuit welk principe is ze onjuist? Hoe zou je dat principe articuleren als een universeel beginsel?",
    aiHelperPrompts: ["Hoe verschilt natuurrecht van religieus recht?", "Wat zijn moderne toepassingen van de natuurrechttraditie?", "Hoe verdedigt men mensenrechten zonder religieuze grondslag?"]
  },
  {
    id: "due-process",
    title: "Zorgvuldige Rechtsprocedure",
    difficulty: 2,
    emoji: "📋",
    academicCategory: "Rechtswetenschappen",
    skillCategory: "Recht & Rechtvaardigheid",
    tags: ["procedure", "recht", "eerlijk", "bescherming"],
    definition: "Zorgvuldige rechtsprocedure (due process) is het principe dat de overheid bij ingrijpen in rechten van burgers vastgestelde, eerlijke procedures moet volgen — bescherming tegen willekeurig overheidsoptreden.",
    abstractExample: "Due process is als de spelregels van een bordspel: zelfs als je verliest, moet het spel eerlijk zijn gespeeld — de uitkomst is minder belangrijk dan de rechtmatigheid van het proces.",
    examples: [
      { domain: "Strafrecht", icon: "⚖️", text: "Een verdachte heeft recht op een advocaat, het recht om getuigen te horen en het recht op een onpartijdige rechter — voor en tijdens het proces." },
      { domain: "Bestuursrecht", icon: "🏛️", text: "Een ambtenaar die wordt ontslagen heeft recht op informatie over de redenen en de mogelijkheid om zich te verdedigen voordat het besluit definitief is." },
      { domain: "Onderwijs", icon: "📚", text: "Een student die van plagiaat wordt beschuldigd heeft recht op een eerlijk disciplinair onderzoek met mogelijkheid tot verweer." }
    ],
    prerequisites: ["presumption-of-innocence"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het kernprincipe van due process?", options: ["Dat de sterkste altijd wint", "Dat overheidsoptreden eerlijke, vastgestelde procedures volgt", "Dat procedures zo snel mogelijk verlopen", "Dat iedereen een advocaat kan betalen"], correct: 1, explanation: "Due process beschermt burgers door te vereisen dat de overheid consistente en transparante procedures volgt bij elk ingrijpen." }
    ],
    creativePrompt: "Ontwerp de minimale due-process-vereisten voor een disciplinaire procedure op een school of werkplek. Welke stappen zijn absoluut noodzakelijk voor een eerlijk proces?",
    aiHelperPrompts: ["Hoe verschilt procedurele van substantiële due process?", "Wanneer kan due process worden beperkt?", "Hoe bescherm ik mijn due-process-rechten in de praktijk?"]
  },
  {
    id: "intellectual-property",
    title: "Intellectueel Eigendom",
    difficulty: 2,
    emoji: "©️",
    academicCategory: "Rechtswetenschappen",
    skillCategory: "Recht & Rechtvaardigheid",
    tags: ["auteursrecht", "patent", "innovatie", "eigendom"],
    definition: "Intellectueel eigendom (IE) zijn juridische rechten die creaties van de geest beschermen: auteursrecht (kunstwerken), patent (uitvindingen), handelsmerk (merknamen) en handelsgeheimen — een balans tussen incentive en publieke toegang.",
    abstractExample: "IE-rechten zijn als een tijdelijke monopolie: de samenleving geeft de uitvinder exclusieve rechten voor een beperkte tijd in ruil voor openbaarmaking van de uitvinding.",
    examples: [
      { domain: "Muziek", icon: "🎵", text: "Componisten ontvangen auteursrecht: niemand mag hun muziek commercieel gebruiken zonder toestemming gedurende 70 jaar na hun dood." },
      { domain: "Farmaceutisch", icon: "💊", text: "Patenten op medicijnen geven 20 jaar exclusiviteit aan uitvinders om R&D-kosten te recupereren, waarna generische versies legaal zijn." },
      { domain: "Tech", icon: "💻", text: "Apple's patentenportefeuille beschermt iPhone-designs — maar critici stellen dat patent-trolls innovatie eerder remmen dan stimuleren." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het maatschappelijke doel van intellectueel eigendom?", options: ["Rijke creators rijker maken", "Innovatie stimuleren door tijdelijke exclusiviteit te bieden", "Kennisverspreiding beletten", "Nationale trots bevorderen"], correct: 1, explanation: "IE biedt een tijdelijk monopolie als incentive voor innovatie, waarna kennis publiek domein wordt — een maatschappelijke deal." }
    ],
    creativePrompt: "Stel dat je morgen een revolutionaire uitvinding doet. Welke IE-bescherming vraag je aan, hoelang wil je die exclusiviteit en wanneer vind je het rechtvaardig dat anderen het gratis mogen gebruiken?",
    aiHelperPrompts: ["Wat is het verschil tussen copyright, patent en handelsmerk?", "Wanneer vervalt intellectueel eigendom?", "Hoe bescherm ik mijn eigen creatieve werk?"]
  },
  {
    id: "distributive-justice",
    title: "Distributieve Rechtvaardigheid",
    difficulty: 3,
    emoji: "🏛️",
    academicCategory: "Politieke Filosofie",
    skillCategory: "Recht & Rechtvaardigheid",
    tags: ["rechtvaardigheid", "verdeling", "ongelijkheid", "filosofie"],
    definition: "Distributieve rechtvaardigheid gaat over de eerlijke verdeling van voordelen en lasten in een samenleving — verschillende theorieën (Rawls, Nozick, utilitarisme) geven fundamenteel verschillende antwoorden op wat 'eerlijk' is.",
    abstractExample: "Drie kinderen krijgen één taart: gelijke stukken (egalitarisme), de grootste voor wie het hardst werkte (meritocratisme), of de grootste voor wie het meest honger heeft (prioritarisme) — elk principe is intern consistent.",
    examples: [
      { domain: "Belastingen", icon: "💰", text: "Progressieve belasting (rijken betalen proportioneel meer) reflecteert prioritaristische principes; vlaktaks reflecteert meer gelijkheidsdenken." },
      { domain: "Gezondheidszorg", icon: "🏥", text: "Universele zorg (Rawls: gun de slechtste positie zo goed mogelijk) vs. marktzorg (Nozick: rechten op wat je verdiende zijn heilig)." },
      { domain: "Onderwijs", icon: "📚", text: "Gelijke middelen voor alle scholen vs. extra middelen voor achterstandsscholen — twee distributieve benaderingen van onderwijsgelijkheid." }
    ],
    prerequisites: ["social-contract"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Rawls' 'sluier van onwetendheid' is een gedachtenexperiment waarbij je niet weet welke positie je in de samenleving zult innemen. Wat volgt hieruit?", options: ["Je kiest de meest ongelijke samenleving", "Je kiest de samenleving die de slechtste positie zo goed mogelijk maakt", "Je kiest willekeurig", "Je kiest voor maximale vrijheid ongeacht uitkomst"], correct: 1, explanation: "Achter de sluier is het rationeel om een samenleving te kiezen die zelfs de slechtste positie acceptabel maakt — je weet immers niet waar je belandt." }
    ],
    creativePrompt: "Stel je bent de wetgever achter Rawls' sluier: je weet niet of je arm of rijk, gezond of ziek, man of vrouw bent in de samenleving die je ontwerpt. Schrijf drie concrete wetten die je zou invoeren.",
    aiHelperPrompts: ["Wat zijn de grootste geschilpunten tussen Rawls en Nozick?", "Hoe verhoudt distributieve rechtvaardigheid zich tot procedurele?", "Welk land benadert distributieve rechtvaardigheid het beste?"]
  },
  {
    id: "international-law",
    title: "Internationaal Recht",
    difficulty: 3,
    emoji: "🌍",
    academicCategory: "Rechtswetenschappen",
    skillCategory: "Recht & Rechtvaardigheid",
    tags: ["internationaal", "soevereiniteit", "verdragen", "vn"],
    definition: "Internationaal recht is het geheel van regels en verdragen dat de betrekkingen tussen staten regelt — van diplomatieke normen tot oorlogsrecht — maar het handhavingsmechanisme is zwak vergeleken met nationaal recht.",
    abstractExample: "Internationaal recht is als huisregels in een appartementencomplex zonder huisbaas: bewoners hebben regels afgesproken, maar niemand kan ze afdwingen als een buur ze schendt.",
    examples: [
      { domain: "Oorlog", icon: "⚔️", text: "De Geneefse Conventies beschermen gewonde soldaten en burgers in oorlogstijd — staten die ze schenden begaan oorlogsmisdaden." },
      { domain: "Handel", icon: "🛒", text: "WTO-regels regelen internationale handel; geschillen worden beslecht via een arbitrageprocedure." },
      { domain: "Milieu", icon: "🌿", text: "Het Parijs-akkoord is een internationaalrechtelijk klimaatverdrag — maar zonder afdwingingsmechanisme blijft naleving vrijwillig." }
    ],
    prerequisites: ["rule-of-law"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat maakt internationaal recht minder effectief dan nationaal recht?", options: ["Slechte kwaliteit van verdragen", "Gebrek aan centrale handhaving — staten zijn soeverein", "Te weinig landen participeren", "Internationaal recht is niet bindend"], correct: 1, explanation: "Er is geen mondiale politiemacht die internationaal recht kan afdwingen — staten moeten vrijwillig naleven of diplomatieke/economische druk accepteren." }
    ],
    creativePrompt: "Stel je ontwerpt een mondiaal handhavingsmechanisme voor internationaal milieurecht. Welke bevoegdheden geef je het, wie controleert het en hoe voorkom je misbruik?",
    aiHelperPrompts: ["Hoe wordt internationaal recht gehandhaafd?", "Wat is het verschil tussen hard law en soft law?", "Welke internationale rechtsinstellingen zijn het meest effectief?"]
  },
  {
    id: "legal-pluralism",
    title: "Rechtspluralisme",
    difficulty: 3,
    emoji: "🌐",
    academicCategory: "Rechtswetenschappen",
    skillCategory: "Recht & Rechtvaardigheid",
    tags: ["recht", "cultuur", "diversiteit", "normen"],
    definition: "Rechtspluralisme erkent dat in veel samenlevingen meerdere rechtssystemen naast elkaar bestaan — nationaal recht, religieus recht, gewoonterecht — die soms met elkaar in conflict zijn.",
    abstractExample: "In een familie kunnen familienormen (je deelt alles), religieuze normen (het sabbat-gebod) en nationaal recht (eigendomsrecht) tegelijkertijd gelden en soms conflicteren.",
    examples: [
      { domain: "Familierecht", icon: "👨‍👩‍👧", text: "In sommige landen erkennen rechtbanken zowel nationaal familierecht als religieuze huwelijkswetten — soms met conflicterende bepalingen over echtscheiding." },
      { domain: "Inheems recht", icon: "🌿", text: "Veel Canadese First Nations hanteren eigen stamrechtssystemen naast Canadees federaal recht — beide gelden tegelijkertijd." },
      { domain: "Internationaal bedrijf", icon: "💼", text: "Een multinational in meerdere landen navigeert tegelijkertijd lokale wetten, internationale verdragen en sectorregulering." }
    ],
    prerequisites: ["international-law"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke uitdaging brengt rechtspluralisme mee?", options: ["Te veel wetten bestaan", "Conflicten tussen systemen zijn moeilijk op te lossen zonder hiërarchie", "Culturele rechten zijn altijd superieur", "Nationaal recht is altijd ondergeschikt"], correct: 1, explanation: "Wanneer twee rechtssystemen tegenstrijdige eisen stellen, is er geen vanzelfsprekende autoriteit om te beslissen welk systeem prevaleert." }
    ],
    creativePrompt: "In welke situaties ervaar jij meerdere 'rechtssystemen' tegelijkertijd (familie-etiquette, professionele normen, culturele verwachtingen, nationale wet)? Hoe navigeer je conflicten tussen die systemen?",
    aiHelperPrompts: ["Hoe gaan rechters om met conflicterende rechtssystemen?", "Wat zijn bekende voorbeelden van rechtspluralisme?", "Hoe verhoudt religieus recht zich tot nationaal recht in Nederland?"]
  },

  // Batch W – Onderwijs & Pedagogie
  {
    id: "zone-of-proximal-development",
    title: "Zone van Naaste Ontwikkeling",
    difficulty: 2,
    emoji: "📈",
    academicCategory: "Pedagogie",
    skillCategory: "Onderwijs & Pedagogie",
    tags: ["leren", "vygotsky", "scaffolding", "ontwikkeling"],
    definition: "Vygotsky's Zone van Naaste Ontwikkeling (ZPD) is het gebied tussen wat een leerling zelfstandig kan en wat hij met begeleiding kan bereiken — effectief onderwijs vindt in deze zone plaats.",
    abstractExample: "Als een kind net kan fietsen met zijwieltjes, is fietsen zonder hulp in de ZPD — met de juiste steun (even vasthouden) kan het kind de sprong maken die het zelfstandig nog niet kon.",
    examples: [
      { domain: "Onderwijs", icon: "📚", text: "Een leraar geeft een wiskundesom die net iets moeilijker is dan wat een leerling zelfstandig kan — met hints en begeleiding slaagt de leerling." },
      { domain: "Sport", icon: "⚽", text: "Een trainer laat een sporter oefeningen doen die net buiten zijn comfortzone liggen, met technische ondersteuning om de techniek te verbeteren." },
      { domain: "Werk", icon: "💼", text: "Een mentor geeft een junior een project dat net boven zijn huidige niveau ligt, met beschikbaarheid voor begeleiding bij obstakels." }
    ],
    prerequisites: [],
    unlocks: ["scaffolding-learning"],
    exercises: [
      { type: "multipleChoice", question: "Wat is 'scaffolding' in onderwijscontext?", options: ["Bouw van scholen", "Tijdelijke steun die geleidelijk wordt afgebouwd terwijl de leerling zelfstandiger wordt", "Het beoordelen van leerlingen", "Het structureren van leerdoelen"], correct: 1, explanation: "Scaffolding is de pedagogische steiger: tijdelijke ondersteuning die precies genoeg helpt en geleidelijk wordt weggenomen als de leerling het zelf kan." }
    ],
    creativePrompt: "Identificeer jouw eigen huidige ZPD in een vaardigheid die je wil leren. Wat kun je al? Wat lukt nog niet zelfstandig? Welke 'scaffolding' heb je nodig om de volgende stap te zetten?",
    aiHelperPrompts: ["Hoe pas ik de ZPD toe als docent of mentor?", "Hoe weet ik wanneer een taak in de ZPD van een leerling ligt?", "Wat is het verschil tussen ZPD en differentiatie?"]
  },
  {
    id: "scaffolding-learning",
    title: "Scaffolding in Leren",
    difficulty: 1,
    emoji: "🏗️",
    academicCategory: "Pedagogie",
    skillCategory: "Onderwijs & Pedagogie",
    tags: ["scaffolding", "leren", "steun", "instructie"],
    definition: "Scaffolding is het bieden van tijdelijke, gerichte ondersteuning die geleidelijk wordt afgebouwd naarmate de leerling bekwamer wordt — zodat uiteindelijk zelfstandig functioneren mogelijk is.",
    abstractExample: "Scaffolding werkt als een bouwsteiger: essentieel tijdens de bouw, maar pas nuttig als hij uiteindelijk wordt verwijderd — het gebouw (de vaardigheid) staat dan op zichzelf.",
    examples: [
      { domain: "Schrijven", icon: "✏️", text: "Leerlingen krijgen eerst een sjabloon voor een betoog (stelling, argument, tegenargument, conclusie) en schrijven later zonder die structuur." },
      { domain: "Wiskunde", icon: "🔢", text: "Rekenmachine toestaan bij moeilijke sommen terwijl de conceptuele stap wordt geleerd; later de rekenmachine weghalen." },
      { domain: "Programmeren", icon: "💻", text: "Beginners krijgen een kant-en-klare codestructuur met TODO-opmerkingen; gevorderden starten vanaf nul." }
    ],
    prerequisites: ["zone-of-proximal-development"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wanneer is scaffolding het meest effectief?", options: ["Als het permanent beschikbaar blijft", "Als het tijdelijk is en geleidelijk wordt afgebouwd", "Als het door peers wordt gegeven", "Als het digitaal is"], correct: 1, explanation: "Scaffolding werkt alleen als leerinstrument als het uiteindelijk wordt verwijderd — anders creëert het afhankelijkheid in plaats van competentie." }
    ],
    creativePrompt: "Ontwerp scaffolding voor iemand die van nul wil leren koken. Welke steun geef je in week 1, week 4 en week 12? Wanneer en hoe bouw je die steun af?",
    aiHelperPrompts: ["Welke soorten scaffolding zijn er?", "Hoe vermijd ik dat leerlingen te afhankelijk worden van scaffolding?", "Hoe gebruik ik digitale tools als scaffolding?"]
  },
  {
    id: "formative-vs-summative",
    title: "Formatief vs. Summatief Beoordelen",
    difficulty: 1,
    emoji: "📊",
    academicCategory: "Pedagogie",
    skillCategory: "Onderwijs & Pedagogie",
    tags: ["beoordeling", "toets", "feedback", "leren"],
    definition: "Formatief beoordelen geeft tussentijdse feedback om het leerproces te sturen ('leren van toetsen'); summatief beoordelen meet prestaties aan het einde om te classificeren ('toetsen van leren').",
    abstractExample: "Formatief beoordelen is als de scheidsrechter die tijdens het spel corrigeert; summatief beoordelen is de eindstand die bepaalt wie wint.",
    examples: [
      { domain: "Onderwijs", icon: "📚", text: "Een wekelijkse exit-ticket (formatief) helpt de docent te zien welke concepten nog niet begrepen zijn voor de volgende les." },
      { domain: "Werk", icon: "💼", text: "Tussentijdse functioneringsgesprekken (formatief) zijn waardevoller voor ontwikkeling dan alleen een jaarlijkse beoordeling (summatief)." },
      { domain: "Sport", icon: "⚽", text: "Trainerscoaching tijdens training (formatief) vs. wedstrijdresultaten als maat voor seizoensprestaties (summatief)." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welk type beoordeling is het meest waardevol voor het verbeteren van leerprocessen?", options: ["Summatief, want dit bepaalt de cijfers", "Formatief, want dit geeft tijdige feedback om bij te sturen", "Diagnostisch, want dit meet startkennis", "Portfoliobeoordeling"], correct: 1, explanation: "Formatief beoordelen vindt plaats tijdens het leerproces en geeft zowel leerling als docent informatie om direct bij te sturen." }
    ],
    creativePrompt: "Ontwerp een formatief beoordelingssysteem voor een vaardigheid die jij anderen zou willen leren. Welke tussentijdse checkpoints gebruik je en welke feedback geef je?",
    aiHelperPrompts: ["Welke formatieve beoordelingstechnieken zijn het meest effectief?", "Hoe zorg ik dat cijfers (summatief) ook formatieve waarde hebben?", "Hoe geef ik effectieve schriftelijke feedback?"]
  },
  {
    id: "growth-mindset-education",
    title: "Groeimindset in Onderwijs",
    difficulty: 1,
    emoji: "🌱",
    academicCategory: "Pedagogie",
    skillCategory: "Onderwijs & Pedagogie",
    tags: ["mindset", "inspanning", "intelligentie", "groei"],
    definition: "Carol Dweck's groeimindset is de overtuiging dat intelligentie en vaardigheden ontwikkelbaar zijn door inspanning — in tegenstelling tot de fixed mindset die aangeboren talent als onveranderlijk ziet.",
    abstractExample: "Een groeimindset ziet een toetsfout als een uitnodiging om beter te begrijpen; een fixed mindset ziet dezelfde fout als bewijs van beperkte intelligentie.",
    examples: [
      { domain: "Onderwijs", icon: "📚", text: "Leerlingen loven om hun inspanning ('je hebt hard gewerkt') in plaats van talent ('je bent slim') stimuleert groeimindset." },
      { domain: "Sport", icon: "⚽", text: "Een atleet die verlies ziet als data voor verbetering bereikt op lange termijn meer dan iemand die verlies als persoonlijk falen ervaart." },
      { domain: "Werk", icon: "💼", text: "Teams die fouten behandelen als leerkansen innoveren meer dan teams die falen afstraffen." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke lof stimuleert een groeimindset?", options: ["'Je bent zo slim!'", "'Je hebt echt hard gewerkt aan dit probleem'", "'Je hebt het makkelijk gevonden'", "'Je bent een natuurtalent'"], correct: 1, explanation: "Lof voor inspanning benadrukt dat prestatie voortkomt uit werk — iets dat de leerling kan beïnvloeden — wat een groeimindset versterkt." }
    ],
    creativePrompt: "In welk domein heb jij een fixed mindset? Welke specifieke overtuiging houdt je tegen? Herschrijf die overtuiging als een groeimindset-statement en beschrijf wat jij concreet kunt doen om te groeien.",
    aiHelperPrompts: ["Hoe stimuleer ik een groeimindset bij kinderen?", "Is groeimindset werkelijk bewezen effectief?", "Hoe herken ik fixed mindset-patronen in mijn eigen denken?"]
  },
  {
    id: "differentiated-instruction",
    title: "Gedifferentieerd Onderwijs",
    difficulty: 2,
    emoji: "🎯",
    academicCategory: "Pedagogie",
    skillCategory: "Onderwijs & Pedagogie",
    tags: ["differentiatie", "individueel", "aanpassing", "leerstijl"],
    definition: "Gedifferentieerd onderwijs past inhoud, proces en product aan op basis van de individuele behoeften, interesses en leerstijlen van leerlingen — in plaats van één aanpak voor iedereen.",
    abstractExample: "Een uitstekende kok past hetzelfde recept aan voor vegetariërs, allergici en voorkeursmaken — hetzelfde gerecht, aangepast voor wie er aan tafel zit.",
    examples: [
      { domain: "Lezen", icon: "📖", text: "Leerlingen lezen over hetzelfde onderwerp maar op verschillende niveaus — sommigen de basisversie, anderen de verdiepende tekst." },
      { domain: "Wiskunde", icon: "🔢", text: "Snelle leerlingen krijgen uitdagingsopgaven; leerlingen die de stof nog verwerken krijgen meer oefening met basisconcepten." },
      { domain: "Project", icon: "🎨", text: "Leerlingen tonen hun begrip op hun eigen manier: sommigen schrijven een essay, anderen maken een poster, anderen geven een presentatie." }
    ],
    prerequisites: ["zone-of-proximal-development"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Op welke drie dimensies kan gedifferentieerd worden in onderwijs?", options: ["Moeilijkheid, snelheid en locatie", "Inhoud, proces en product", "Groepsgrootte, tijd en materialen", "Leerkracht, leerling en ouder"], correct: 1, explanation: "Tomlinson's model differentieert op inhoud (wat geleerd wordt), proces (hoe geleerd wordt) en product (hoe begrip wordt aangetoond)." }
    ],
    creativePrompt: "Ontwerp een les over een onderwerp naar keuze voor drie niveaus: beginnend, gemiddeld en gevorderd. Hoe pas je inhoud, activiteiten en eindproduct aan voor elk niveau?",
    aiHelperPrompts: ["Hoe differentieer ik in een klas van 30 leerlingen?", "Is differentiatie evidence-based?", "Hoe combineer ik differentiatie met klassenmanagement?"]
  },
  {
    id: "inquiry-based-learning",
    title: "Onderzoekend Leren",
    difficulty: 2,
    emoji: "🔬",
    academicCategory: "Pedagogie",
    skillCategory: "Onderwijs & Pedagogie",
    tags: ["onderzoek", "vragen", "ontdekking", "leren"],
    definition: "Onderzoekend leren is een aanpak waarbij leerlingen zelf vragen stellen, hypothesen formuleren, informatie verzamelen en conclusies trekken — actief leren door te ontdekken in plaats van passief ontvangen.",
    abstractExample: "In plaats van docent die uitlegt waarom planten groeien, laten leerlingen zelf planten groeien onder verschillende condities en concluderen waarom sommige beter gedijen.",
    examples: [
      { domain: "Wetenschap", icon: "🔬", text: "Leerlingen ontwerpen een eigen experiment om te testen of suiker of zout beter oplost in warm water — ze formuleren de vraag, het experiment en de conclusie." },
      { domain: "Maatschappijleer", icon: "🌍", text: "Leerlingen onderzoeken zelf de oorzaken van een lokaal probleem (files, ongelijkheid) via interviews, data en rapportage." },
      { domain: "Taal", icon: "📖", text: "In plaats van grammaticaregels uit het hoofd leren, ontdekken leerlingen zelf patronen in taalgebruik via voorbeeldzinnen." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welk risico heeft onderzoekend leren?", options: ["Leerlingen leren te veel", "Leerlingen kunnen verkeerde conclusies trekken zonder voldoende begeleiding", "Het is te snel", "Docenten verliezen controle"], correct: 1, explanation: "Zonder goede begeleiding kunnen leerlingen misconcepties ontwikkelen die moeilijk te corrigeren zijn — begeleide ontdekking is effectiever dan puur vrije ontdekking." }
    ],
    creativePrompt: "Ontwerp een onderzoekende leeractiviteit voor iets dat jij goed begrijpt. Welke vraag stel je, hoe ontdekken leerlingen het antwoord zelf en hoe begeleidt je zonder de antwoorden te geven?",
    aiHelperPrompts: ["Wat zijn de vier fasen van onderzoekend leren?", "Hoe combineer ik directe instructie met onderzoekend leren?", "Welke leeftijd is het meest geschikt voor onderzoekend leren?"]
  },
  {
    id: "cognitive-load-teaching",
    title: "Cognitieve Belasting in Onderwijs",
    difficulty: 2,
    emoji: "🧠",
    academicCategory: "Cognitieve Psychologie",
    skillCategory: "Onderwijs & Pedagogie",
    tags: ["cognitie", "werkgeheugen", "instructie", "leren"],
    definition: "Cognitive Load Theory (Sweller) stelt dat het werkgeheugen beperkt is — effectief onderwijs minimaliseert onnodige cognitieve belasting en maximaliseert de beschikbare capaciteit voor daadwerkelijk leren.",
    abstractExample: "Proberen tegelijkertijd te lezen, aantekeningen te maken én een moeilijke uitleg te volgen overbelast het werkgeheugen — net als drie programma's tegelijk draaien op een trage computer.",
    examples: [
      { domain: "Onderwijs", icon: "📚", text: "Instructies worden stap voor stap gegeven in plaats van alle stappen tegelijk — vermindert extraneous load." },
      { domain: "Interface", icon: "💻", text: "Een goed ontworpen leerapp toont één concept per scherm zonder afleidende animaties — vermindert cognitieve overbelasting." },
      { domain: "Presentaties", icon: "🎤", text: "Volgeladen PowerPoint-slides met veel tekst worden vervangen door één kernboodschap per slide — voorkomt split-attention effect." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke drie soorten cognitieve belasting onderscheidt de theorie?", options: ["Intrinsiek, extrinsiek en gemotiveerd", "Intrinsiek (moeilijkheid inhoud), extraneous (onnodige belasting) en germane (leerbelasting)", "Kortetermijn, langetermijn en werkgeheugen", "Visueel, auditief en tactiel"], correct: 1, explanation: "Intrinsieke load hangt af van de moeilijkheid; extraneous load is onnodige belasting door slechte instructie; germane load is de 'goede' belasting van daadwerkelijk leren." }
    ],
    creativePrompt: "Analyseer een uitleg of instructie die jij recentelijk ontving. Welke elementen verhoogden de cognitieve belasting onnodig? Hoe zou je de instructie herontwerpen om de belasting te verminderen?",
    aiHelperPrompts: ["Hoe ontwerp ik instructie met minimale cognitieve belasting?", "Welk effect heeft multitasken op leren?", "Hoe pas ik cognitive load theory toe in digitale leeromgevingen?"]
  },
  {
    id: "mastery-learning",
    title: "Beheersend Leren",
    difficulty: 2,
    emoji: "🎓",
    academicCategory: "Pedagogie",
    skillCategory: "Onderwijs & Pedagogie",
    tags: ["beheersing", "leren", "competentie", "tempo"],
    definition: "Beheersend leren (mastery learning) is een aanpak waarbij leerlingen nieuwe stof pas aangeboden krijgen als ze de voorgaande stof volledig beheersen — elk kind leert op zijn eigen tempo maar bereikt hetzelfde eindniveau.",
    abstractExample: "Mastery learning is als een videospel: je gaat pas naar het volgende level als je het huidige hebt voltooid — de tijdsduur verschilt, de beheersing is gelijk.",
    examples: [
      { domain: "Wiskunde", icon: "🔢", text: "Khan Academy past mastery learning toe: leerlingen oefenen vermenigvuldigen totdat ze 5 van 5 correct hebben, daarna pas staartdeling." },
      { domain: "Muziek", icon: "🎵", text: "Een muziekleraar laat een student één compositie pas loslaten als ze haar foutloos kan spelen — tempo verschilt per student." },
      { domain: "Pilotenopleiding", icon: "✈️", text: "Piloten mogen pas solovliegen als ze alle procedures feilloos beheersen — geen tijdslimiet, wel beheersingseis." }
    ],
    prerequisites: ["formative-vs-summative"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het kernverschil tussen mastery learning en traditioneel onderwijs?", options: ["Mastery learning is duurder", "Mastery learning gaat pas verder als stof wordt beheerst, ongeacht tijd", "Mastery learning heeft geen toetsen", "Mastery learning werkt alleen voor exacte vakken"], correct: 1, explanation: "Traditioneel onderwijs beweegt op een vaste kalender; mastery learning beweegt op tempo van beheersing — fundamenteel andere logica." }
    ],
    creativePrompt: "Ontwerp een mastery learning-pad voor het leren van een taal. Welke bouwblokken moet je beheersen voordat je naar de volgende fase gaat? Hoe toets je beheersing?",
    aiHelperPrompts: ["Hoe implementeer ik mastery learning in een groepsonderwijs setting?", "Wat zijn de bewezen effecten van mastery learning?", "Hoe combineer ik mastery learning met beoordelingssystemen?"]
  },
  {
    id: "hidden-curriculum",
    title: "Verborgen Curriculum",
    difficulty: 2,
    emoji: "🔍",
    academicCategory: "Onderwijssociologie",
    skillCategory: "Onderwijs & Pedagogie",
    tags: ["socialisatie", "normen", "school", "cultuur"],
    definition: "Het verborgen curriculum zijn de impliciete lessen die scholen overbrengen buiten de officiële vakken: normen, waarden, autoriteitsrelaties en sociale verwachtingen die leerlingen onbewust internaliseren.",
    abstractExample: "Leerlingen leren niet alleen rekenen; ze leren ook dat ze stil moeten zijn als een volwassene spreekt, dat succes wordt gemeten door cijfers en dat regels worden gemaakt door anderen dan zijzelf.",
    examples: [
      { domain: "Discipline", icon: "📋", text: "Schoolregels over stiptheid, uniformen en gedrag socialiseren leerlingen in arbeidsdiscipline die economisch nuttig is voor werkgevers." },
      { domain: "Gender", icon: "♀️", text: "Impliciete verwachtingen dat meisjes stiller zijn en jongens actiever beïnvloeden genderrollen via alledaagse schoolinteracties." },
      { domain: "Autoriteit", icon: "🏫", text: "De structuur van school (docent als autoriteit, leerling als volger) leert een bepaalde relatie tot gezag die overdraagbaar is naar de werkplek." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wie beschreef het verborgen curriculum als instrument van sociale reproductie?", options: ["Vygotsky", "Bourdieu en Bowles & Gintis", "Dewey", "Freire"], correct: 1, explanation: "Bourdieu (cultureel kapitaal) en Bowles & Gintis (correspondentieprincipe) toonden aan hoe scholen sociale ongelijkheid reproduceren via impliciete normen." }
    ],
    creativePrompt: "Welke verborgen lessen leerde jij op school die niets te maken hadden met vakinhoud? Hoe beïnvloeden die lessen jou nu als volwassene?",
    aiHelperPrompts: ["Hoe maak ik het verborgen curriculum bewust zichtbaar?", "Hoe verschilt het verborgen curriculum per school of land?", "Hoe kan onderwijs bewust het verborgen curriculum bijsturen?"]
  },
  {
    id: "transfer-of-learning",
    title: "Transfer van Leren",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Leerpsychologie",
    skillCategory: "Onderwijs & Pedagogie",
    tags: ["transfer", "toepassing", "generalisatie", "leren"],
    definition: "Transfer is het vermogen om geleerde kennis of vaardigheden toe te passen in nieuwe, andere contexten — het ultieme doel van onderwijs, maar moeilijker te bereiken dan het lijkt.",
    abstractExample: "Wiskunde op school leren is waardevol als je het kan toepassen bij het berekenen van kortingen in een winkel — anders is het geïsoleerde kennis zonder transfer.",
    examples: [
      { domain: "Taal", icon: "📖", text: "Een student die kritisch schrijven op school leert, past diezelfde argumentatiestructuur toe in een zakelijk rapport — positieve transfer." },
      { domain: "Sport", icon: "⚽", text: "Coördinatie geleerd bij turnen transfereert naar betere beheersing bij dansen — transfereerbare motorische vaardigheden." },
      { domain: "Programmeren", icon: "💻", text: "Conceptueel begrip van datastructuren in Python helpt snel te leren programmeren in JavaScript — transfer van abstracte concepten." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke onderwijspraktijk bevordert transfer het meest?", options: ["Veel memorisatie", "Leren in gevarieerde contexten en expliciete verbanden leggen", "Herhaling in dezelfde context", "Focus op één onderwerp tegelijk"], correct: 1, explanation: "Transfer wordt gestimuleerd door variatie in oefencontexten en door leerlingen expliciet te laten nadenken over hoe concepten in nieuwe situaties toepasbaar zijn." }
    ],
    creativePrompt: "Identificeer drie dingen die je op school hebt geleerd die je nooit hebt kunnen toepassen. Waarom transfereerde die kennis niet? Hoe had het onderwijs de transfer beter kunnen faciliteren?",
    aiHelperPrompts: ["Hoe ontwerp ik lessen die transfer bevorderen?", "Wat is het verschil tussen near transfer en far transfer?", "Waarom is transfer zo moeilijk bij abstracte vakken?"]
  },

  // Batch X – Ecologie & Duurzaamheid
  {
    id: "planetary-boundaries",
    title: "Planetaire Grenzen",
    difficulty: 2,
    emoji: "🌍",
    academicCategory: "Aardwetenschappen",
    skillCategory: "Ecologie & Duurzaamheid",
    tags: ["klimaat", "grenzen", "duurzaamheid", "aarde"],
    definition: "Het planetaire grenzen-framework (Rockström e.a.) identificeert negen aardse systeemgrenzen waarbinnen de mensheid veilig kan opereren — het overschrijden ervan riskeert onomkeerbare veranderingen.",
    abstractExample: "Planetaire grenzen zijn als de veiligheidsmarges van een vliegtuig: je kunt een beetje te snel vliegen en nog veilig landen, maar voorbij bepaalde grenzen verlies je controle onomkeerbaar.",
    examples: [
      { domain: "Klimaat", icon: "🌡️", text: "De klimaatgrens (1,5-2°C opwarming) is al onder druk — overschrijding riskeert cascade-effecten als smeltende permafrost en zeespiegelstijging." },
      { domain: "Biodiversiteit", icon: "🦋", text: "De biodiversiteitsgrens (soortenverlies) is al overschreden — ecosystemen worden minder veerkrachtig bij verlies van soortendiversiteit." },
      { domain: "Stikstof", icon: "🌿", text: "Intensieve landbouw heeft de stikstofcyclus overschreden — met gevolgen voor waterkwaliteit, biodiversiteit en klimaat." }
    ],
    prerequisites: [],
    unlocks: ["tipping-points-ecology"],
    exercises: [
      { type: "multipleChoice", question: "Hoeveel planetaire grenzen zijn er in het Rockström-framework?", options: ["5", "7", "9", "12"], correct: 2, explanation: "Het framework identificeert negen grenzen: klimaatverandering, biodiversiteit, biogeochemische cycli, oceaanverzuring, zoetwatergebruik, landgebruik, ozonlaag, atmosferische aerosolen en nieuwe entiteiten." }
    ],
    creativePrompt: "Kies één planetaire grens en onderzoek hoe jouw dagelijks leven bijdraagt aan het overschrijden ervan. Welke concrete verandering zou de grootste impact hebben?",
    aiHelperPrompts: ["Welke planetaire grenzen zijn al overschreden?", "Hoe verhouden planetaire grenzen zich tot de SDGs?", "Wat zijn de meest urgente planetaire grenzen om aan te pakken?"]
  },
  {
    id: "tipping-points-ecology",
    title: "Kantelingspunten in Ecologie",
    difficulty: 3,
    emoji: "🌊",
    academicCategory: "Ecologie",
    skillCategory: "Ecologie & Duurzaamheid",
    tags: ["systeem", "klimaat", "onomkeerbaar", "cascade"],
    definition: "Ecologische kantelingspunten (tipping points) zijn drempelwaarden waarna een systeem snel en onomkeerbaar overschakelt naar een nieuwe toestand — kleine extra druk kan grote, irreversibele veranderingen veroorzaken.",
    abstractExample: "Een kantelingspunt is als een wiebelige steen op een helling: je kunt er lang aan porren zonder gevolg, totdat één laatste por hem definitief doet kantelen — en dan is er geen weg terug.",
    examples: [
      { domain: "Klimaat", icon: "🌡️", text: "Het smelten van het Groenlandse ijskapsel kan een zichzelf versterkend proces worden dat niet stopt ook als we de uitstoot terugbrengen." },
      { domain: "Ecosysteem", icon: "🌳", text: "Het Amazoneregenwoud heeft een drempelwaarde: bij ~20-25% ontbossing kantelt het van regenwoud naar savanne, met mondiale klimaatgevolgen." },
      { domain: "Koraalrif", icon: "🐠", text: "Boven ~2°C opwarming kantelen koraalriffen massaal naar algendominantie — een staat die zichzelf in standhoud." }
    ],
    prerequisites: ["planetary-boundaries"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat maakt kantelingspunten bijzonder gevaarlijk?", options: ["Ze zijn moeilijk te meten", "Ze zijn onomkeerbaar en treden plotseling op", "Ze zijn alleen lokaal relevant", "Ze zijn theoretisch niet bewezen"], correct: 1, explanation: "De combinatie van plotselinge overgang én onomkeerbaarheid maakt kantelingspunten extra zorgwekkend voor beleidsmakers." }
    ],
    creativePrompt: "Beschrijf een persoonlijk of sociaal 'kantelingspunt' dat je hebt meegemaakt: een situatie die langzaam escaleerde totdat een onherstelbare verandering optrad. Wat had je eerder kunnen doen?",
    aiHelperPrompts: ["Hoe dichtbij zijn de klimaatkantelingspunten?", "Zijn er positieve kantelingspunten voor duurzaamheid?", "Hoe houd ik rekening met kantelingspunten in beleid?"]
  },
  {
    id: "circular-economy",
    title: "Circulaire Economie",
    difficulty: 2,
    emoji: "♻️",
    academicCategory: "Duurzaamheidswetenschap",
    skillCategory: "Ecologie & Duurzaamheid",
    tags: ["circulair", "afval", "economie", "duurzaamheid"],
    definition: "De circulaire economie is een economisch model dat afval minimaliseert door grondstoffen zo lang mogelijk in gebruik te houden via hergebruik, reparatie, recycling en regeneratie — in contrast met het lineaire 'maak-gebruik-gooi weg'-model.",
    abstractExample: "Een circulaire economie is als een goed huishouden: je gooit niets weg maar vindt voor elk bijproduct een nieuwe bestemming, zodat de kringloop gesloten blijft.",
    examples: [
      { domain: "Mode", icon: "👗", text: "Patagonia repareert kleding kosteloos en koopt oude Patagonia-kleding terug om te herverkopen — sluit de kringloop in fast fashion." },
      { domain: "Technologie", icon: "💻", text: "Fairphone ontwerpt modulaire telefoons waarbij elk onderdeel vervangbaar is, waardoor de levensduur wordt verlengd." },
      { domain: "Bouw", icon: "🏗️", text: "Cradle-to-cradle bouw gebruikt materialen die aan het einde van de levensduur van een gebouw volledig kunnen worden hergebruikt." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het fundamentele verschil tussen lineaire en circulaire economie?", options: ["Circulair is duurder", "Lineair eindigt in afval; circulair sluit de grondstoffenkringloop", "Circulair werkt alleen voor grote bedrijven", "Lineair is sneller"], correct: 1, explanation: "Het lineaire model is 'take-make-waste'; het circulaire model ontwerpt afval uit het systeem en houdt waarde zo lang mogelijk in de keten." }
    ],
    creativePrompt: "Kies een product dat je regelmatig weggooit (verpakking, kledingstuk, apparaat). Ontwerp een circulair alternatief: hoe wordt het gemaakt, gebruikt, hersteld en uiteindelijk hergebruikt?",
    aiHelperPrompts: ["Hoe verschilt recyclen van echt circulair denken?", "Welke bedrijven zijn koplopers in circulaire economie?", "Hoe pas ik circulaire principes toe in mijn eigen leven?"]
  },
  {
    id: "ecosystem-services",
    title: "Ecosysteemdiensten",
    difficulty: 2,
    emoji: "🌳",
    academicCategory: "Ecologie",
    skillCategory: "Ecologie & Duurzaamheid",
    tags: ["natuur", "waarde", "ecosysteem", "diensten"],
    definition: "Ecosysteemdiensten zijn de voordelen die mensen gratis ontvangen van gezonde ecosystemen: schone lucht, zuiver water, bestuiving, klimaatregulering, voedsel en recreatie — waarvan de economische waarde zelden wordt meegerekend.",
    abstractExample: "Een bos is gratis bewolking en waterfilter, een gratis CO2-opslagplaats en een gratis recreatieplek — als je die waarden in geld uitdrukt, is beschermen goedkoper dan kappen.",
    examples: [
      { domain: "Bestuiving", icon: "🐝", text: "Bijen bestuiven gewassen ter waarde van honderden miljarden euros per jaar wereldwijd — een dienst die bij bijensterfte vervangen moet worden door menselijke arbeid." },
      { domain: "Waterfiltering", icon: "💧", text: "New York City investeerde in bescherming van Catskill Mountains-wetlands in plaats van een waterfilterinstallatie — de natuur doet het goedkoper." },
      { domain: "Klimaat", icon: "🌡️", text: "Oceanen absorberen ~25% van al het CO2-uitstoot — een ecosysteemdienst die de opwarming aanzienlijk vertraagt zonder menselijke ingreep." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Waarom worden ecosysteemdiensten zelden meegewogen in economische beslissingen?", options: ["Ze zijn onmeetbaar", "Ze hebben geen marktprijs en worden daardoor als 'gratis' beschouwd", "Economen kennen ze niet", "Ze zijn te klein om relevant te zijn"], correct: 1, explanation: "Zonder marktprijs worden ecosysteemdiensten als extern beschouwd in economische analyses — hun verlies wordt niet zichtbaar totdat het te laat is." }
    ],
    creativePrompt: "Schat de jaarlijkse economische waarde van een natuur nabij jouw woonplaats (park, bos, rivier). Welke diensten levert het? Hoe zou je die waarde kunnen berekenen?",
    aiHelperPrompts: ["Hoe worden ecosysteemdiensten gemeten?", "Zijn er succesvolle voorbeelden van betalen voor ecosysteemdiensten?", "Hoe verhoudt biodiversiteit zich tot ecosysteemdiensten?"]
  },
  {
    id: "tragedy-of-commons",
    title: "De Tragedie van de Meent",
    difficulty: 2,
    emoji: "🐄",
    academicCategory: "Ecologie",
    skillCategory: "Ecologie & Duurzaamheid",
    tags: ["collectief", "overgebruik", "duurzaamheid", "regulering"],
    definition: "De tragedie van de meent (Hardin) beschrijft hoe een gedeelde hulpbron wordt uitgeput wanneer individuen rationeel hun eigen voordeel maximaliseren ten koste van het collectief — elk individu profiteert van overgebruik maar deelt de kosten.",
    abstractExample: "Als alle boeren één extra koe op de gemeenschappelijke weide zetten, profiteert elke individuele boer volledig terwijl de kosten (uitputting van gras) worden gedeeld door allen — rationeel individueel, rampzalig collectief.",
    examples: [
      { domain: "Vissen", icon: "🐟", text: "Internationale vissers hebben belang bij het wegvangen van zoveel mogelijk vis — maar als iedereen dit doet, raken visbestanden uitgeput." },
      { domain: "Lucht", icon: "💨", text: "Elk bedrijf wil zo goedkoop mogelijk produceren door emissies in de lucht te lozen — schone lucht is een gemeenschappelijke bron die wordt uitgeput." },
      { domain: "Internet", icon: "💻", text: "Bandbreedte, aandacht en vertrouwen online zijn gemeenschappelijke bronnen die door spam, desinformatie en clickbait worden uitgeput." }
    ],
    prerequisites: ["public-goods-problem"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke drie oplossingen voor de tragedie van de meent beschreef Ostrom?", options: ["Privatisering, regulering of geweld", "Coöperatieve zelfregulering door gebruikers, privatisering of staatscontrole", "Technologie, belasting of boycot", "Educatie, subsidie of verbod"], correct: 1, explanation: "Elinor Ostrom won de Nobelprijs door aan te tonen dat gemeenschappen (zonder markt of staat) gemeenschappelijke goederen duurzaam kunnen beheren via eigen regels." }
    ],
    creativePrompt: "Welke digitale 'meent' zie jij uitgeput worden? Beschrijf wat er wordt overgebruikt, wie er van profiteert en welk mechanisme de uitputting zou kunnen stoppen.",
    aiHelperPrompts: ["Wat zijn Ostrom's principes voor duurzaam gemeenschappelijk beheer?", "Hoe verschilt de tragedie van de meent van het vrijbuiterprobleem?", "Zijn er succesvolle moderne meent-commons?"]
  },
  {
    id: "environmental-justice",
    title: "Milieugerechtigheld",
    difficulty: 2,
    emoji: "⚖️",
    academicCategory: "Milieuwetenschap",
    skillCategory: "Ecologie & Duurzaamheid",
    tags: ["rechtvaardigheid", "milieu", "ongelijkheid", "klimaat"],
    definition: "Milieugerechtigheld erkent dat milieuschade en klimaatrisico's ongelijk zijn verdeeld — kwetsbare en arme gemeenschappen worden disproportioneel getroffen door vervuiling en klimaatverandering terwijl ze er het minst aan bijdragen.",
    abstractExample: "Mensen die vlak bij een chemische fabriek wonen inademen de meeste vervuiling maar profiteren het minst van de economische activiteit — een disproportionele verdeling van lasten en lusten.",
    examples: [
      { domain: "Klimaat", icon: "🌡️", text: "Kleine eilandstaten zoals Tuvalu dreigen te verdrinken door zeespiegelstijging terwijl ze vrijwel geen CO2 uitstoten." },
      { domain: "Stedelijk", icon: "🏙️", text: "Achterstandswijken in steden hebben minder groen, meer luchtvervuiling en minder klimaatbestendige woningen dan rijkere wijken." },
      { domain: "Internationaal", icon: "🌍", text: "Lage-inkomenslanden dragen het meest bij aan goedkope productie maar lijden het meest onder de milieugevolgen van het westerse consumptiepatroon." }
    ],
    prerequisites: ["planetary-boundaries"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het kernprobleem van milieugerechtigheld?", options: ["Arme mensen maken meer vervuiling", "De lasten van milieuschade zijn disproportioneel bij kwetsbare groepen", "Rijke landen investeren meer in milieu", "Milieuproblemen zijn gelijk verdeeld"], correct: 1, explanation: "Milieuongerechtigheld bestaat wanneer degenen die het minst bijdragen aan een probleem het meest de gevolgen dragen." }
    ],
    creativePrompt: "Analyseer een milieukwestie in jouw eigen omgeving. Wie draagt de lasten (geluid, vervuiling, risico) en wie profiteert van de economische activiteit? Is de verdeling rechtvaardig?",
    aiHelperPrompts: ["Hoe is milieugerechtigheld verbonden met klimaatbeleid?", "Welke bewegingen zetten zich in voor milieugerechtigheld?", "Hoe integreer ik milieurechtvaardigheid in bedrijfsbeslissingen?"]
  },
  {
    id: "biodiversity-loss",
    title: "Biodiversiteitsverlies",
    difficulty: 2,
    emoji: "🦋",
    academicCategory: "Ecologie",
    skillCategory: "Ecologie & Duurzaamheid",
    tags: ["biodiversiteit", "soorten", "ecosysteem", "uitsterven"],
    definition: "Biodiversiteitsverlies is de versnelling van soortuitsterving door menselijke activiteiten — met een huidig tempo 100-1000 maal hoger dan de natuurlijke achtergrondsnelheid — wat ecosystemen minder veerkrachtig maakt.",
    abstractExample: "Een ecosysteem is als een vliegtuig met honderden bouten: het verliezen van één bout is misschien ok, maar naarmate je meer bouten verliest neemt het risico op catastrofaal falen exponentieel toe.",
    examples: [
      { domain: "Insecten", icon: "🐛", text: "Insectenpopulaties zijn in Europa met 75% gedaald in 40 jaar — met directe gevolgen voor bestuiving, vogelvoedsel en bodemgezondheid." },
      { domain: "Vissen", icon: "🐟", text: "Meer dan een derde van de zoetwatervissoorten is bedreigd — gevolgen voor voedselzekerheid van miljarden mensen." },
      { domain: "Plantensoorten", icon: "🌺", text: "40% van de plantensoorten is met uitsterven bedreigd — verlies van potentiële medicijnen, voedselgewassen en ecosysteemdiensten." }
    ],
    prerequisites: ["ecosystem-services"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke menselijke activiteit draagt het meest bij aan biodiversiteitsverlies?", options: ["Klimaatverandering", "Habitatverlies door landgebruiksverandering", "Invasieve soorten", "Overexploitatie"], correct: 1, explanation: "Habitatverlies door landbouw, stedelijke uitbreiding en ontbossing is de grootste directe oorzaak van biodiversiteitsverlies wereldwijd." }
    ],
    creativePrompt: "Kies één diersoort die in jouw regio bedreigd is. Onderzoek de oorzaken van achteruitgang en ontwerp een concrete actie die jij persoonlijk kunt ondernemen om te helpen.",
    aiHelperPrompts: ["Hoe verhoudt biodiversiteitsverlies zich tot klimaatverandering?", "Wat is de '30x30'-doelstelling?", "Hoe kan ik bijdragen aan biodiversiteit in mijn eigen tuin?"]
  },
  {
    id: "regenerative-agriculture",
    title: "Regeneratieve Landbouw",
    difficulty: 2,
    emoji: "🌾",
    academicCategory: "Landbouwwetenschappen",
    skillCategory: "Ecologie & Duurzaamheid",
    tags: ["landbouw", "bodem", "koolstof", "regeneratie"],
    definition: "Regeneratieve landbouw is een set praktijken die bodems actief herstelt en verbetert, koolstof vastlegt, biodiversiteit vergroot en watersystemen verbetert — in contrast met conventionele landbouw die bodems uitput.",
    abstractExample: "Regeneratieve landbouw is als interesse op interesse verdienen: je investeert in bodemgezondheid en die investering groeit elk jaar, terwijl conventionele landbouw kapitaal verbruikt.",
    examples: [
      { domain: "Veehouderij", icon: "🐄", text: "Managed grazing roteert vee door weilanden zodat grassen volledig herstellen — verbetert bodemkoolstof en voorkomt overbegrazing." },
      { domain: "Akkerbouw", icon: "🌽", text: "No-till farming laat bodems intact, vermindert erosie en verhoogt het organisch materiaal — met als gevolg gezondere bodems en hoger waterretentie." },
      { domain: "Agroforestry", icon: "🌳", text: "Combineren van bomen met landbouwgewassen verbetert bodems, biedt schaduw en habitat, en vergroot de biodiversiteit op het erf." }
    ],
    prerequisites: ["ecosystem-services"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het centrale doel van regeneratieve landbouw versus duurzame landbouw?", options: ["Ze zijn identiek", "Regeneratief streeft naar actief herstel, duurzaam naar minder schade", "Duurzaam is ambitieuzer", "Regeneratief focust op productiviteit"], correct: 1, explanation: "Duurzaam landbouwen wil de schade beperken; regeneratief wil systemen actief verbeteren en herstellen — een fundamenteel ambitieverschil." }
    ],
    creativePrompt: "Stel je hebt een stuk grond van 1 hectare. Ontwerp een regeneratief landbouwsysteem dat voedsel produceert, koolstof vastlegt én biodiversiteit vergroot. Welke keuzes maak je?",
    aiHelperPrompts: ["Is regeneratieve landbouw bewezen effectief?", "Hoe past regeneratieve landbouw in het voedselbeleid?", "Wat kan ik zelf doen in een moestuin?"]
  },
  {
    id: "life-cycle-assessment",
    title: "Levenscyclusanalyse",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Milieuwetenschap",
    skillCategory: "Ecologie & Duurzaamheid",
    tags: ["product", "impact", "analyse", "levenscyclus"],
    definition: "Levenscyclusanalyse (LCA) is een methode die de milieuimpact van een product of dienst beoordeelt over de gehele levensduur: van grondstofwinning via productie, gebruik en transport tot afdanking.",
    abstractExample: "Een elektrische auto heeft geen directe uitstoot, maar de levenscyclusanalyse omvat ook de batterijproductie, elektriciteitsopwekking en recycling — pas dan is de totale impact duidelijk.",
    examples: [
      { domain: "Elektrische auto", icon: "🚗", text: "LCA toont dat een elektrische auto over 150.000 km ~60% minder CO2 uitstoot dan een benzineauto, ondanks de energie-intensieve batterijproductie." },
      { domain: "Katoenen vs. plastic zak", icon: "🛍️", text: "Een katoenen tas moet ~131 keer worden gebruikt voor een lagere klimaatimpact dan één plastic zak — katoenteelt is water- en pesticideintensief." },
      { domain: "Voedsel", icon: "🍖", text: "Rundvlees heeft de hoogste levenscyclusimpact van alle voedingsmiddelen; peulvruchten hebben een fractie van die impact." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is de scope van een levenscyclusanalyse?", options: ["Alleen de productie", "Van grondstofwinning tot afdanking ('cradle to grave')", "Alleen het gebruik van het product", "De impact op de eindgebruiker"], correct: 1, explanation: "LCA analyseert alle levensfasen: grondstofwinning, productie, transport, gebruik en afdanking — ook wel 'van wieg tot graf' genoemd." }
    ],
    creativePrompt: "Doe een informele LCA van je favoriete kledingstuk. Welke grondstoffen, welke productieprocessen, hoeveel water en energie? Hoe verandert dit jouw perspectief op het kledingstuk?",
    aiHelperPrompts: ["Hoe voer ik een eenvoudige LCA uit?", "Wat zijn de beperkingen van LCA?", "Hoe gebruik ik LCA-data voor duurzame inkoop?"]
  },
  {
    id: "energy-transition",
    title: "Energietransitie",
    difficulty: 2,
    emoji: "⚡",
    academicCategory: "Energiewetenschappen",
    skillCategory: "Ecologie & Duurzaamheid",
    tags: ["energie", "duurzaam", "transitie", "klimaat"],
    definition: "De energietransitie is de systemische verschuiving van fossiele brandstoffen naar hernieuwbare energiebronnen — een multidecadaal transformatieproces dat technologie, economie, gedrag en politiek omvat.",
    abstractExample: "De energietransitie is als een grote locomotief van richting veranderen: enorm veel energie nodig om de draai te maken, maar eenmaal op de nieuwe baan gaat het vanzelf.",
    examples: [
      { domain: "Zonne-energie", icon: "☀️", text: "Zonnepanelen zijn in 10 jaar met 90% goedkoper geworden — technologische S-curve-dynamiek maakt hernieuwbare energie nu goedkoper dan kolen." },
      { domain: "Netbeheer", icon: "🔌", text: "De integratie van variabele zon en wind vereist slimme netwerken, batterijopslag en vraagrespons — een systeemtransformatie." },
      { domain: "Industrie", icon: "🏭", text: "Groene waterstof is essentieel voor de decarbonisatie van staalindustrie en scheepvaart — sectoren die niet direct op stroom kunnen draaien." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het grootste uitdaging van een hogere penetratie hernieuwbare energie?", options: ["Te duur", "Variabiliteit en opslagcapaciteit", "Gebrek aan technologie", "Politieke weerstand"], correct: 1, explanation: "Zon en wind produceren variabel — de integratie in een stabiel elektriciteitsnet vereist opslag, flexibele back-up en vraagrespons." }
    ],
    creativePrompt: "Stel je bent energieminister in 2030. Welke drie prioriteiten stel je om Nederland in 2050 klimaatneutraal te maken? Welke compromissen moet je sluiten?",
    aiHelperPrompts: ["Hoe snel verloopt de energietransitie wereldwijd?", "Welke rol speelt kernenergie in de energietransitie?", "Hoe beïnvloedt de energietransitie mijn eigen energierekening?"]
  },

  // Batch Y – Menselijke Natuur & Evolutie
  {
    id: "kin-selection",
    title: "Verwantenselectie",
    difficulty: 3,
    emoji: "👨‍👩‍👧",
    academicCategory: "Evolutiebiologie",
    skillCategory: "Menselijke Natuur & Evolutie",
    tags: ["evolutie", "altruïsme", "familie", "biologie"],
    definition: "Verwantenselectie (Hamilton's regel) verklaart altruïsme voor verwanten: een gen kan zich verspreiden door gedrag dat de eigen reproductie vermindert maar de reproductie van voldoende verwanten verhoogt — want verwanten dragen dezelfde genen.",
    abstractExample: "Hamilton's regel: r × B > C (verwantschapsgraad × voordeel voor verwant > kosten voor helper). Jij helpt je broer als het evolutionaire voordeel voor zijn genen groter is dan je eigen kosten.",
    examples: [
      { domain: "Dieren", icon: "🐝", text: "Werkbijen vermenigvuldigen zich niet zelf maar helpen de koningin — hun genen verspreiden zich via zussen die 75% van hun genen delen (supernormaal hoog)." },
      { domain: "Mensen", icon: "👨‍👩‍👧", text: "Mensen geven significant meer geld en tijd aan directe familie dan aan vreemden — een evolutionaire logica die ook cultureel is versterkt." },
      { domain: "Nepotisme", icon: "💼", text: "Nepotisme (banen geven aan familie) is evolutionair begrijpelijk als verwantenselectie, ook al is het sociaal ongewenst in moderne instituties." }
    ],
    prerequisites: [],
    unlocks: ["reciprocal-altruism"],
    exercises: [
      { type: "multipleChoice", question: "Hoe groot is de genetische verwantschap tussen broers en zussen?", options: ["25%", "50%", "75%", "100%"], correct: 1, explanation: "Broers en zussen delen gemiddeld 50% van hun genen (r = 0.5) — hetzelfde als ouder-kind." }
    ],
    creativePrompt: "Beschrijf drie situaties waar je meer moeite deed voor familie dan voor vrienden. Zijn er gevallen waar je voor een vriend meer deed dan voor een verre familielid? Wat bepaalt de keuze?",
    aiHelperPrompts: ["Wat is het verschil tussen verwantenselectie en groepsselectie?", "Hoe verklaart verwantenselectie adoptie?", "Hoe beïnvloedt verwantschapsperceptie ons altruïsme?"]
  },
  {
    id: "reciprocal-altruism",
    title: "Wederkerig Altruïsme",
    difficulty: 2,
    emoji: "🤝",
    academicCategory: "Evolutiebiologie",
    skillCategory: "Menselijke Natuur & Evolutie",
    tags: ["samenwerking", "evolutie", "wederkerigheid", "vertrouwen"],
    definition: "Wederkerig altruïsme (Trivers) verklaart samenwerking tussen niet-verwanten: jij helpt mij nu, ik help jou later — evolutionair stabiel als individuen elkaar herkennen en interacties herhalen.",
    abstractExample: "Wederkerig altruïsme is als een oud dorpssysteem: jij helpt mij mijn dak te repareren nu, en ik help jou bij jouw oogst straks — iedereen wint over de lange termijn.",
    examples: [
      { domain: "Vampieren", icon: "🦇", text: "Vampierknuppels delen bloed met hongerige groepsgenoten — maar weigeren te delen met vleermuizen die eerder niet deelden. Exacte tit-for-tat." },
      { domain: "Handel", icon: "🛒", text: "Menselijke handel is fundamenteel gebouwd op wederkerig altruïsme: ik geef jou dit, jij geeft mij dat — een evolutionair voorgebakken instinct." },
      { domain: "Vriendschap", icon: "👫", text: "Vriendschappen die imbalanced worden (één persoon geeft altijd meer) verwelken — ons evolutionaire systeem registreert eerlijkheid nauwgezet." }
    ],
    prerequisites: ["kin-selection"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke omstandigheid maakt wederkerig altruïsme evolutionair stabiel?", options: ["Grote groepen", "Herhaalde interacties tussen individuen die elkaar herkennen", "Verwantschap", "Toevallige ontmoetingen"], correct: 1, explanation: "Tit-for-tat werkt alleen als je de ander kunt herkennen en de kans groot is dat je hem opnieuw ontmoet — anders loont bedriegen te veel." }
    ],
    creativePrompt: "Analyseer drie relaties in jouw leven (vriendschap, collega, buur). Is de wederkerigheid in balans? Hoe zou een evolutionair psycholoog jouw gedrag verklaren?",
    aiHelperPrompts: ["Wat is de tit-for-tat strategie in game theory?", "Hoe onderscheid ik wederkerig altruïsme van berekende samenwerking?", "Verklaart wederkerig altruïsme ook liefdadigheid aan vreemden?"]
  },
  {
    id: "sexual-selection",
    title: "Seksuele Selectie",
    difficulty: 2,
    emoji: "🦚",
    academicCategory: "Evolutiebiologie",
    skillCategory: "Menselijke Natuur & Evolutie",
    tags: ["evolutie", "aantrekkelijkheid", "selectie", "mate-choice"],
    definition: "Seksuele selectie is een evolutief mechanisme naast natuurlijke selectie: kenmerken evolueren niet omdat ze overleven bevorderen, maar omdat ze de kans op paring vergroten — via partnerkeuze of concurrentie tussen soortgenoten.",
    abstractExample: "De pauwenstaart is levensgevaarlijk (roofvijanden zien hem snel) maar geeft aan dat de pauw zo fit is dat hij dit handicap kan dragen — een 'eerlijk signaal' van genetische kwaliteit.",
    examples: [
      { domain: "Dieren", icon: "🦁", text: "De leeuwenmanen zijn metabolisch duur en hinder hinderlijk bij jacht — maar signaleren naar leeuwinnen een gezond, fit individu." },
      { domain: "Mensen", icon: "👤", text: "Menselijke voorkeuren voor symmetrische gezichten, lange benen (vrouwen) en V-taille (mannen) zijn waarschijnlijk evolutionaire signalen van genetische gezondheid." },
      { domain: "Kunst", icon: "🎵", text: "Geoffrey Miller argumenteert dat menselijke creativiteit en kunst deels seksueel geselecteerde signalen zijn van cognitieve fit." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat zijn de twee mechanismen van seksuele selectie?", options: ["Concurrentie en camouflage", "Partnerkeuze en intraseksuele competitie", "Voortplanting en overleving", "Lerend en genetisch gedrag"], correct: 1, explanation: "Seksuele selectie werkt via (1) het kiezen door partners (interseksueel) en (2) concurrentie binnen hetzelfde geslacht om toegang tot partners (intraseksueel)." }
    ],
    creativePrompt: "Beschrijf drie menselijke gedragingen of kenmerken die moeilijk te verklaren zijn via overleving maar wel via seksuele selectie. Wat zegt dit over hoe wij zijn geworden wie we zijn?",
    aiHelperPrompts: ["Hoe beïnvloedt seksuele selectie genderrollen?", "Zijn menselijke schoonheidsidealen universeel of cultureel?", "Hoe verhoudt seksuele selectie zich tot evolutie van intelligentie?"]
  },
  {
    id: "status-hierarchy-evolution",
    title: "Statushiërarchie en Evolutie",
    difficulty: 2,
    emoji: "👑",
    academicCategory: "Evolutionaire Psychologie",
    skillCategory: "Menselijke Natuur & Evolutie",
    tags: ["status", "hiërarchie", "dominantie", "sociaal"],
    definition: "Statusgedrag is evolutionair diep geworteld: hogere status levert toegang tot betere bronnen, partners en allianties op — waardoor mensen automatisch statussignalen sturen en ontvangen, vaak onbewust.",
    abstractExample: "Statusgedrag is als de evolutionaire armoede die we draagbaar hebben gemaakt met jas: we dragen nog altijd de onderliggende hiërarchische software, maar vertolken die nu via auto's, titels en volgers.",
    examples: [
      { domain: "Werkplek", icon: "💼", text: "Hoekkantoortjes, grote bureaus en bijzondere parkeerplaatsen zijn moderne statusmarkers die dezelfde evolutionaire logica weerspiegelen als alfadieren in een kudde." },
      { domain: "Consumptie", icon: "🛍️", text: "Luxe goederen zijn deels statusmarkers: ze signaleren aanwezige hulpbronnen ('ik kan dit permitteren') aan potentiële partners en rivalen." },
      { domain: "Sociale media", icon: "📱", text: "Volgersaantallen, likes en verificatievinkjes zijn digitale statusmarkers die dezelfde neurale beloningscircuits activeren als traditionele sociale status." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het verschil tussen dominantie- en prestige-gebaseerde status?", options: ["Er is geen verschil", "Dominantie via intimidatie; prestige via bewondering en expertise", "Prestige is moderner", "Dominantie geldt alleen voor mannen"], correct: 1, explanation: "Dominantie (alfa-gedrag) en prestige (bewondering voor competentie/grootmoedigheid) zijn twee evolutionair verschillende statusroutes met eigen gedragsprofielen." }
    ],
    creativePrompt: "Analyseer jouw eigen statusgedrag. Welke signalen stuur jij bewust of onbewust? Via welk type status (dominantie of prestige) probeer je doorgaans status te verwerven?",
    aiHelperPrompts: ["Hoe verschilt statusgedrag bij mannen en vrouwen?", "Hoe beïnvloedt statusangst onze beslissingen?", "Hoe bouw ik op een gezonde manier aan sociale status?"]
  },
  {
    id: "mismatch-hypothesis",
    title: "Mismatch-hypothese",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Evolutionaire Psychologie",
    skillCategory: "Menselijke Natuur & Evolutie",
    tags: ["evolutie", "omgeving", "gedrag", "modern leven"],
    definition: "De mismatch-hypothese stelt dat veel moderne gezondheidsproblemen (obesitas, angst, eenzaamheid) voortkomen uit een mismatch tussen de omgeving waarvoor onze hersenen zijn geëvolueerd (het Pleistoceen) en de moderne wereld.",
    abstractExample: "Onze vetopslag-instincten zijn perfect voor een wereld waar voedsel schaars en onregelmatig beschikbaar is — catastrofaal voor een wereld waar calorieëndichterijke voeding 24/7 beschikbaar is.",
    examples: [
      { domain: "Voeding", icon: "🍔", text: "Suiker- en vetdrang is evolutionair nuttig (schaarse calorieën opslaan) maar leidt tot obesitas in een wereld van overvloed." },
      { domain: "Sociale media", icon: "📱", text: "Onze hersenen zijn geëvolueerd voor kleine, stabiele sociale groepen (~150 personen) — sociale media blootstelt ons aan miljoenen oordelen en vergelijkingen." },
      { domain: "Stress", icon: "😰", text: "De stressrespons is geëvolueerd voor acute fysieke gevaren (tijger) maar wordt geactiveerd door chronische zorgen (werk, geld) — met gezondheidsschade als gevolg." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welk aspect van moderne leven veroorzaakt de meeste mismatch met onze evolutionaire aard?", options: ["Technologie gebruik", "Zittende levensstijl en ongezond dieet", "Internationale reizen", "Hoog opleidingsniveau"], correct: 1, explanation: "Onze lichamen zijn geoptimaliseerd voor beweging en wisselend voedsel — zittend werken met calorierijke voeding veroorzaakt de grootste fysiologische mismatch." }
    ],
    creativePrompt: "Identificeer drie aspecten van jouw modern leven die waarschijnlijk een evolutionaire mismatch veroorzaken. Welke aanpassingen zou je kunnen maken om die mismatch te verkleinen?",
    aiHelperPrompts: ["Hoe pas ik mismatch-inzichten toe op mijn gezondheid?", "Zijn alle evolutionaire neigingen problematisch in de moderne wereld?", "Wat zegt de mismatch-hypothese over mentale gezondheid?"]
  },
  {
    id: "in-group-out-group",
    title: "Ingroep-Uitgroep Dynamiek",
    difficulty: 2,
    emoji: "👥",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Menselijke Natuur & Evolutie",
    tags: ["groep", "bias", "tribaal", "sociale identiteit"],
    definition: "De neiging om de eigen groep (ingroep) te bevoordelen en uitgroepen te wantrouwen of te devalueren is een evolutionaire aanpassing die samenwerking bevorderde maar ook tribaal conflict veroorzaakt.",
    abstractExample: "Zelfs willekeurige groepsindeling (rood versus blauw team) activeert direct ingroep-bias: mensen geven teamgenoten hogere beoordelingen, vertrouwen hen meer en zien hen als individuen.",
    examples: [
      { domain: "Sport", icon: "⚽", text: "Voetbalsupporters overschatten de kwaliteit van hun eigen team en zien overwinningen als verdiend, verlies als pech of slechte scheidsrechter." },
      { domain: "Politiek", icon: "🏛️", text: "Mensen lezen dezelfde statistieken fundamenteel anders afhankelijk van of 'hun partij' er goed of slecht uitkomt." },
      { domain: "Werk", icon: "💼", text: "Afdelingsbias: mensen beoordelen voorstellen van de eigen afdeling systematisch positiever dan gelijkwaardige voorstellen van andere afdelingen." }
    ],
    prerequisites: ["kin-selection"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat toonde Tajfel's minimale groepsparadigma aan?", options: ["Alleen echte groepen creëren bias", "Zelfs willekeurige groepsindeling activeert ingroep-favoritisme", "Ingroep-bias is aangeleerd, niet aangeboren", "Volwassenen zijn immuun voor groepsbias"], correct: 1, explanation: "Tajfel toonde dat zelfs toewijzing aan 'groep rood vs. blauw' op basis van niets onmiddellijk ingroep-favoritisme activeerde — de neiging is basaal." }
    ],
    creativePrompt: "Beschrijf een situatie waarbij jij ingroep-bias ervaarde of zelf vertoonde. Wat was de groepsbasis (familie, team, nationaliteit, partij)? Hoe beïnvloedde dit je oordeel?",
    aiHelperPrompts: ["Hoe verminder ik mijn eigen ingroep-bias?", "Wat zijn interventies om tribaal denken te verminderen?", "Hoe beïnvloedt ingroep-uitgroep dynamiek conflicten?"]
  },
  {
    id: "moral-foundations-theory",
    title: "Morele Fundamententheorie",
    difficulty: 3,
    emoji: "🏛️",
    academicCategory: "Moraalpsychologie",
    skillCategory: "Menselijke Natuur & Evolutie",
    tags: ["moraliteit", "politiek", "waarden", "evolutie"],
    definition: "Jonathan Haidt's morele fundamententheorie stelt dat menselijke moraliteit is opgebouwd uit zes evolutionair geselecteerde fundamenten: zorg/schade, eerlijkheid, loyaliteit, autoriteit, heiligheid en vrijheid — en dat politieke stromingen zich onderscheiden door welke fundamenten ze benadrukken.",
    abstractExample: "Progressieven benadrukken zorg en eerlijkheid; conservatieven benadrukken alle zes fundamenten — waardoor ze elkaar letterlijk moreel onbegrijpelijk vinden.",
    examples: [
      { domain: "Politiek", icon: "🏛️", text: "Discussies over immigratie raken loyaliteits- (nationale identiteit) én zorgfundament (vluchtelingen helpen) — verschillende basismorele talen." },
      { domain: "Voeding", icon: "🥩", text: "Veganisme raakt het schaadfundament (dieren); vleeseten kan het loyaliteitsfundament raken (traditionele cultuur, gemeenschap)." },
      { domain: "Religie", icon: "🕌", text: "Religieuze rituelen activeren heiligheids- en loyaliteitsfundamenten sterk — seculiere mensen begrijpen vaak niet waarom dit zo moreel geladen is voor gelovigen." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welk moreel fundament benadrukt 'het volgen van traditie en het respecteren van autoriteit'?", options: ["Zorg/schade", "Eerlijkheid", "Autoriteit/subversie", "Heiligheid"], correct: 2, explanation: "Het autoriteit/subversie-fundament heeft betrekking op respect voor hiërarchie, traditie en rolgedrag — sterk aanwezig in conservatieve morele systemen." }
    ],
    creativePrompt: "Doe de Moral Foundations Questionnaire online. Analyseer jouw profiel: welke fundamenten zijn het sterkst? Hoe verklaren ze standpunten die jij inneemt en die anderen je misschien niet begrijpen?",
    aiHelperPrompts: ["Hoe gebruik ik morele fundamententheorie in politieke discussies?", "Zijn de zes fundamenten universeel of cultureel?", "Hoe verbeter ik begrip tussen mensen met andere morele fundamenten?"]
  },
  {
    id: "evolved-intuitions",
    title: "Geëvolueerde Intuïties",
    difficulty: 2,
    emoji: "⚡",
    academicCategory: "Evolutionaire Psychologie",
    skillCategory: "Menselijke Natuur & Evolutie",
    tags: ["intuïtie", "evolutie", "instinct", "hersenen"],
    definition: "Veel van onze morele en sociale intuïties zijn geëvolueerde snelle antwoorden op terugkerende uitdagingen in de ancestrale omgeving — ze zijn niet altijd correct in moderne contexten maar krachtig en moeilijk te negeren.",
    abstractExample: "Weerzin bij het zien van rot voedsel is een geëvolueerde beschermende intuïtie — diezelfde weerzin-emotie wordt echter ook getriggerd bij moreel 'vuile' acties, waar ze minder betrouwbaar is.",
    examples: [
      { domain: "Rechtvaardigheid", icon: "⚖️", text: "Onze intuïtie dat 'straf verdiend is' zelfs als het niemand helpt, is waarschijnlijk een geëvolueerde sociale handhavingsintuïtie." },
      { domain: "Moraal", icon: "🏛️", text: "De trolleyprobleem-intuïtie (meer mensen redden is toch verkeerd als je iemand actief moet doden) weerspiegelt een geëvolueerde aversie tegen direct schaden." },
      { domain: "Gezicht", icon: "👤", text: "Gezichtsherkenning is zo sterk geëvolueerd dat we gezichten zien in wolken, toast en auto's — de hersenen zijn overgeselecteerd voor dit patroon." }
    ],
    prerequisites: ["mismatch-hypothesis"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Waarom zijn geëvolueerde intuïties niet altijd betrouwbare morele gidsen?", options: ["Ze zijn te langzaam", "Ze zijn geëvolueerd voor een andere omgeving dan de moderne wereld", "Ze zijn altijd correct", "Ze zijn alleen voor dieren relevant"], correct: 1, explanation: "Intuïties zijn geoptimaliseerd voor ancestrale problemen — in moderne contexten kunnen dezelfde intuïties leiden tot racism, tribalism of andere bias." }
    ],
    creativePrompt: "Beschrijf een sterke morele intuïtie die jij hebt die je moeilijk rationeel kunt verklaren. Bedenk dan welke ancestrale situatie die intuïtie nuttig zou hebben gemaakt. Vertrouw je haar nog?",
    aiHelperPrompts: ["Hoe onderscheid ik betrouwbare van onbetrouwbare intuïties?", "Hoe verhoudt morele intuïtie zich tot morele redenering?", "Wat zegt evolutionaire psychologie over universele morele regels?"]
  },
  {
    id: "theory-of-mind-evolution",
    title: "Theory of Mind",
    difficulty: 2,
    emoji: "🧠",
    academicCategory: "Cognitieve Wetenschap",
    skillCategory: "Menselijke Natuur & Evolutie",
    tags: ["empathie", "perspectief", "cognitie", "sociaal"],
    definition: "Theory of Mind is het vermogen om te begrijpen dat anderen overtuigingen, wensen en intenties hebben die verschillen van die van jouzelf — een cruciale vaardigheid voor sociale samenwerking die zich vroeg in de evolutie van de mensheid ontwikkelde.",
    abstractExample: "Theory of Mind is het besef dat de kaart in jouw hoofd ('de wereld zoals ik die zie') anders is dan de kaart in jouw hoofd van andermans hoofd — een recursief bewustzijn van perspectivisme.",
    examples: [
      { domain: "Kind", icon: "👶", text: "Kinderen onder 4 jaar begrijpen de 'false belief task' niet — ze denken dat anderen weten wat zij weten. Pas daarna ontwikkelt Theory of Mind." },
      { domain: "Autisme", icon: "🧩", text: "Mensen met autisme hebben vaak moeite met Theory of Mind — waardoor sociale situaties moeilijker te interpreteren zijn." },
      { domain: "Marketing", icon: "🛍️", text: "Effectieve marketing vereist Theory of Mind: je moet de gedachtewereld van de klant modelleren, niet vanuit jezelf redeneren." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welk experiment test Theory of Mind bij kinderen?", options: ["Het marshmallow-experiment", "De valse-overtuiging taak (false belief task)", "Het spiegeltest", "Raven's progressieve matrices"], correct: 1, explanation: "De valse-overtuiging taak vraagt kinderen te voorspellen wat een ander denkt — wie Theory of Mind heeft, begrijpt dat de ander een andere (onjuiste) overtuiging heeft." }
    ],
    creativePrompt: "Kies een recent conflict of misverstand. Reconstrueer zorgvuldig hoe de andere partij de situatie zag: welke overtuigingen, informatie en intenties hadden zij? Wat begrijp je nu anders?",
    aiHelperPrompts: ["Hoe verbeter ik mijn Theory of Mind?", "Hoe verhoudt Theory of Mind zich tot empathie?", "Welke dieren hebben Theory of Mind?"]
  },
  {
    id: "costly-signaling",
    title: "Kostbare Signalering",
    difficulty: 3,
    emoji: "🎁",
    academicCategory: "Evolutiebiologie",
    skillCategory: "Menselijke Natuur & Evolutie",
    tags: ["signaal", "eerlijkheid", "altruïsme", "evolutie"],
    definition: "Kostbare signalering is het principe dat geloofwaardige signalen van kwaliteit of intentie kosten met zich meebrengen — juist omdat ze duur zijn, kunnen ze niet makkelijk worden nagemaakt door inferieure individuen.",
    abstractExample: "Een dure huwelijksring is kostbaar signalering: juist de hoge prijs communiceert toewijding — een goedkope imitatie signaleert hetzelfde maar kost meer voor wie het zich niet kan permitteren.",
    examples: [
      { domain: "Liefdadigheid", icon: "❤️", text: "Openbaar doneren is kostbaar signalering van grootmoedigheid — het is geloofwaardig juist omdat je echt iets opgeeft." },
      { domain: "Opleiding", icon: "🎓", text: "Een dure elite-opleiding signaleert niet alleen kennis maar ook capaciteit om door een rigoureus selectieproces te komen — het signaal is ook de prestatie." },
      { domain: "Rituelen", icon: "🕌", text: "Religieuze rituelen die veel moeite kosten (vasten, pelgrimstochten) signaleren oprechte toewijding aan de geloofsgroep." }
    ],
    prerequisites: ["sexual-selection"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Waarom zijn kostbare signalen geloofwaardiger dan goedkope signalen?", options: ["Ze zijn mooier", "Nep-signalen kunnen de kosten niet dragen, waardoor het signaal eerlijk blijft", "Ze zijn ouder", "Ze zijn wetenschappelijk bewezen"], correct: 1, explanation: "Het kostbare karakter van het signaal filtert imitators eruit — wie het signaal niet kan waarmaken, kan de kosten niet dragen." }
    ],
    creativePrompt: "Welke kostbare signalen stuur jij in je leven (in werk, relaties, sociale context)? Zijn er goedkopere manieren om hetzelfde te communiceren, of ondermijnt dat de geloofwaardigheid?",
    aiHelperPrompts: ["Hoe herken ik kostbare vs. goedkope signalen in dagelijks leven?", "Hoe verhoudt kostbare signalering zich tot performatief altruïsme?", "Wat zijn voorbeelden van digitale kostbare signalering?"]
  },

  // Batch Z1 – Psychologie van Groepen
  {
    id: "groupthink",
    title: "Groepsdenken",
    difficulty: 2,
    emoji: "🧠",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Psychologie van Groepen",
    tags: ["groep", "besluitvorming", "consensus", "conformiteit"],
    definition: "Groepsdenken treedt op wanneer de wens naar harmonie en conformiteit in een groep het kritisch evalueren van alternatieven overheerst — resulterend in slechte beslissingen die niemand individueel zou nemen.",
    abstractExample: "Een groep vrienden plant een wandeltocht bij slecht weer: niemand wil de stemming bederven dus zegt niemand 'dit is een slecht idee' — de groep gaat en raakt in de problemen.",
    examples: [
      { domain: "Bedrijf", icon: "💼", text: "NASA's Challenger-ramp: ingenieurs hadden zorgen over de O-ringen maar de groepsdynamiek onderdrukte kritische stemmen voor de lancering." },
      { domain: "Politiek", icon: "🏛️", text: "De Bay of Pigs-invasie: Kennedy's team was intern zo eensgezind dat alternatieve scenario's niet serieus werden overwogen." },
      { domain: "Investeren", icon: "📈", text: "Investeringscommissies die positief enthousiasme beloningen boven kritisch denken raken regelmatig in groupthink-valkuilen." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke maatregel vermindert groepsdenken het meest effectief?", options: ["Grotere groepen", "Een aangewezen duivelsadvocaat die systematisch tegenargumenten brengt", "Meer vergaderingen", "Sterkere leider"], correct: 1, explanation: "Een formele duivelsadvocaat-rol geeft toestemming voor kritisch denken zonder de groepssfeer te schaden — een bewezen effectieve interventie." }
    ],
    creativePrompt: "Identificeer een beslissing in jouw leven of werk waarbij groepsdenken mogelijk een rol speelde. Welke signalen waren er? Wat zou een effectieve duivelsadvocaat hebben gezegd?",
    aiHelperPrompts: ["Hoe herken ik groepsdenken in vergaderingen?", "Welke teamstructuren verminderen groepsdenken?", "Hoe kan ik als leider groepsdenken voorkomen?"]
  },
  {
    id: "social-loafing",
    title: "Sociaal Lummelen",
    difficulty: 1,
    emoji: "😴",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Psychologie van Groepen",
    tags: ["groep", "inspanning", "verantwoordelijkheid", "samenwerking"],
    definition: "Sociaal lummelen (social loafing) is de neiging van individuen om minder inspanning te leveren wanneer ze in een groep werken dan wanneer ze alleen werken — verantwoordelijkheid en bijdrage worden diffuser.",
    abstractExample: "Wanneer acht mensen een touw trekken, trekt elk gemiddeld minder hard dan wanneer ze het alleen trekken — het individu 'verbergt zich' in de groep.",
    examples: [
      { domain: "Schoolproject", icon: "📚", text: "In een groepsproject van vijf doen twee mensen 80% van het werk terwijl de anderen wachten — diffuse verantwoordelijkheid verlaagt individuele inspanning." },
      { domain: "Vergadering", icon: "💼", text: "In grote vergaderingen zeggen minder mensen iets dan in kleine groepen — het individu voelt minder verantwoordelijk om bij te dragen." },
      { domain: "Vrijwilligerswerk", icon: "❤️", text: "Anonieme online-petitietekenaar: de bijdrage voelt klein en onzichtbaar, wat de motivatie om actief bij te dragen vermindert." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke omstandigheid vermindert sociaal lummelen het meest?", options: ["Grotere groepen", "Individuele bijdragen meetbaar en zichtbaar maken", "Meer vrije tijd geven", "Minder regels stellen"], correct: 1, explanation: "Wanneer individuele bijdragen zichtbaar en evalueerbaar zijn, neemt social loafing sterk af — anonimiteit is de voedingsbodem voor lummelen." }
    ],
    creativePrompt: "Ontwerp een systeem voor een groepsproject dat sociaal lummelen minimaliseert zonder het wantrouwen te verhogen. Welke concrete mechanismen gebruik je?",
    aiHelperPrompts: ["Hoe verschilt sociaal lummelen van trollen?", "Welke culturen vertonen minder social loafing?", "Hoe motiveer ik stille teamleden zonder hen te dwingen?"]
  },
  {
    id: "bystander-effect",
    title: "Toeschouwerseffect",
    difficulty: 2,
    emoji: "👁️",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Psychologie van Groepen",
    tags: ["verantwoordelijkheid", "hulp", "groep", "diffusie"],
    definition: "Het toeschouwerseffect is het fenomeen dat individuen minder geneigd zijn hulp te bieden bij een noodsituatie wanneer er meer anderen aanwezig zijn — door diffusie van verantwoordelijkheid en pluralistische onwetendheid.",
    abstractExample: "Kitty Genovese-geval: 38 buren hoorden een aanval maar niemand belde de politie — elke buur dacht 'een ander doet het al'. Meer getuigen betekende minder actie.",
    examples: [
      { domain: "Openbaar", icon: "🚌", text: "Iemand die flauwvalt in een drukke trein krijgt soms minder snel hulp dan op een stille straat — meer toeschouwers, minder individuele actie." },
      { domain: "Online", icon: "💻", text: "Cyberpesten wordt vaak gezien door velen maar weinig mensen grijpen in — de groepsgrootte vergroot de passiviteit." },
      { domain: "Werkplek", icon: "💼", text: "Ongepast gedrag op kantoor wordt soms genegeerd door meerdere collega's — elk wacht af of iemand anders ingrijpt." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Hoe doorbreek je het toeschouwerseffect als je zelf hulp nodig hebt?", options: ["Schreeuwen naar iedereen", "Één specifieke persoon aanspreken en om hulp vragen", "Wachten tot iemand vrijwillig helpt", "Een ander mensen vragen te helpen"], correct: 1, explanation: "Door één specifieke persoon direct aan te spreken, verwijder je de diffusie van verantwoordelijkheid — die persoon weet nu dat hij specifiek aangesproken is." }
    ],
    creativePrompt: "Beschrijf een situatie waarbij jij het toeschouwerseffect ervaarde (als toeschouwer of als iemand die hulp nodig had). Wat had je moeten doen? Wat hield je tegen?",
    aiHelperPrompts: ["Hoe conditioneer ik mezelf om het toeschouwerseffect te overwinnen?", "Zijn er situaties waarbij het toeschouwerseffect positief kan zijn?", "Hoe ontwerp ik noodhulpsystemen die het toeschouwerseffect verminderen?"]
  },
  {
    id: "conformity-asch",
    title: "Conformiteitsdruk",
    difficulty: 2,
    emoji: "🐑",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Psychologie van Groepen",
    tags: ["conformiteit", "groepsdruk", "onafhankelijk denken", "sociaal"],
    definition: "Conformiteitsdruk is de neiging om de meningen en gedragingen van anderen over te nemen — zelfs wanneer de groepsmening duidelijk onjuist is — zoals aangetoond in Asch's lijnexperimenten.",
    abstractExample: "In Asch's experiment ontkenden mensen hun eigen ogen: ze zeiden dat een kortere lijn even lang was als een langere, gewoon omdat zeven acteurs dat zeiden. De groepsmening overwon de sensorische realiteit.",
    examples: [
      { domain: "Mode", icon: "👗", text: "Trends in kleding worden gevolgd zelfs als individuen ze persoonlijk niet mooi vinden — sociale norm-conformiteit." },
      { domain: "Vergadering", icon: "💼", text: "Een medewerker die een anders mening heeft, houdt zijn mond als de baas en alle collega's het er al mee eens lijken." },
      { domain: "Consumentisme", icon: "🛍️", text: "Mensen kopen producten die ze niet nodig hebben omdat 'iedereen het heeft' — sociale vergelijkingsconformiteit." }
    ],
    prerequisites: [],
    unlocks: ["groupthink"],
    exercises: [
      { type: "multipleChoice", question: "Wat verminderde conformiteitsdruk in Asch's experimenten?", options: ["Meer acteurs", "Eén bondgenoot die de correcte mening deelde", "Grotere beloningen", "Hogere opleiding"], correct: 1, explanation: "Één enkele bondgenoot die de correcte mening deelde, reduceerde conformiteit drastisch — je hoeft niet alleen te staan om onafhankelijk te denken." }
    ],
    creativePrompt: "Beschrijf een moment waarbij jij meeging met de groep terwijl je eigenlijk een andere mening had. Wat hield je tegen om jouw werkelijke mening te uiten? Was de sociale druk bewust of onbewust?",
    aiHelperPrompts: ["Hoe weerstand ik conformiteitsdruk zonder confronterend te zijn?", "Wanneer is conformiteit nuttig en wanneer schadelijk?", "Hoe creëer ik een omgeving die onafhankelijk denken beloont?"]
  },
  {
    id: "social-identity-theory",
    title: "Sociale Identiteitstheorie",
    difficulty: 2,
    emoji: "🪪",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Psychologie van Groepen",
    tags: ["identiteit", "groep", "zelfconcept", "status"],
    definition: "Sociale identiteitstheorie (Tajfel & Turner) stelt dat een deel van iemands zelfconcept wordt afgeleid uit het lidmaatschap van sociale groepen — en dat mensen hun groepen positief willen evalueren om een positief zelfconcept te behouden.",
    abstractExample: "Je voelt trots wanneer jouw voetbalteam wint, ook al heb jij niet gespeeld — de prestatie van de groep beïnvloedt jouw persoonlijk gevoel van eigenwaarde.",
    examples: [
      { domain: "Sport", icon: "⚽", text: "Fans identificeren sterk met hun club: overwinning verhoogt eigenwaarde ('wij wonnen'), verlies roept defensieve reacties op ('het was de scheidsrechter')." },
      { domain: "Nationalisme", icon: "🌍", text: "Nationale trots — trots op wetenschappers, sporters of kunstenaars die 'jouw land' vertegenwoordigen — is sociale identiteitstheorie in actie." },
      { domain: "Werkplek", icon: "💼", text: "Werknemers bij prestigieuze bedrijven ontlenen status aan het bedrijfsmerk — zelfs bij taken die niets met dat prestige te maken hebben." }
    ],
    prerequisites: ["in-group-out-group"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welk mechanisme gebruiken mensen om een positief sociaal zelfconcept te behouden?", options: ["Sociale vergelijking naar boven", "Vergelijken met minder succesvolle uitgroepen", "Isoleren van de groep", "Persoonlijke prestaties verhogen"], correct: 1, explanation: "Downward comparison — de eigen groep vergelijken met minder succesvolle groepen — verhoogt het groepsgevoel van superioriteit en daarmee eigenwaarde." }
    ],
    creativePrompt: "Lijst vijf sociale groepen waarmee jij je identificeert (religie, nationaliteit, beroep, team, etc.). Hoe beïnvloedt elk van die identiteiten jouw gedrag, oordelen en emoties?",
    aiHelperPrompts: ["Hoe beïnvloedt sociale identiteit vooroordelen?", "Kunnen mensen meerdere sociale identiteiten tegelijk hebben?", "Hoe gebruik ik sociale identiteitstheorie voor teambuilding?"]
  },
  {
    id: "deindividuation",
    title: "Deïndividuatie",
    difficulty: 2,
    emoji: "🎭",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Psychologie van Groepen",
    tags: ["anonimiteit", "groep", "gedrag", "verantwoordelijkheid"],
    definition: "Deïndividuatie is het verlies van zelfbewustzijn en individuele identiteit in groepen of anonieme situaties — waardoor mensen gedrag vertonen dat ze individueel nooit zouden stellen, van positief (zelfloze reddingsacties) tot negatief (riotvandalism).",
    abstractExample: "Een carnavalsmaskerganger doet dingen die hij nuchter en herkenbaar nooit zou doen — de anonimiteit verlaagt de zelfcensuur en verhoogt de groepsdynamiek.",
    examples: [
      { domain: "Online", icon: "💻", text: "Anonieme internetcommentators schrijven beledigingen die ze face-to-face nooit zouden uitspreken — deïndividuatie via online anonimiteit." },
      { domain: "Protestgeweld", icon: "✊", text: "Rellen beginnen zelden met individuen maar escaleren wanneer groepsidentiteit en anonimiteit persoonlijke verantwoordelijkheid overschrijven." },
      { domain: "Helpend gedrag", icon: "❤️", text: "Bij calamiteiten kunnen mensen ook positieve deïndividuatie vertonen: ze doen spontaan heldendaden die ze individueel niet hadden overwogen." }
    ],
    prerequisites: ["bystander-effect"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke factor verhoogt deïndividuatie het meest?", options: ["Groepsgrootte", "Anonimiteit gecombineerd met groepsidentiteit", "Hoge emotionele intensiteit", "Aanwezigheid van autoriteit"], correct: 1, explanation: "Anonimiteit verlaagt zelfevaluatie en gecombineerd met een sterke groepsidentiteit leiden beide tot de sterkste deïndividuatie." }
    ],
    creativePrompt: "Analyseer een online gemeenschap (forum, sociale media) waarbij je deïndividuatie-effecten herkent. Welke gedragingen worden gestimuleerd? Welk ontwerpelement draagt het meest bij?",
    aiHelperPrompts: ["Hoe kunnen platforms deïndividuatie verminderen?", "Is deïndividuatie altijd negatief?", "Hoe houdt ik mijn individuele verantwoordelijkheid in groepen?"]
  },
  {
    id: "risky-shift",
    title: "Groepspolarisatie",
    difficulty: 2,
    emoji: "📊",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Psychologie van Groepen",
    tags: ["groep", "beslissing", "risico", "polarisatie"],
    definition: "Groepspolarisatie is het fenomeen dat groepsdiscussies de initiële tendens van de leden versterken — groepen nemen risicovollere beslissingen dan individuen als de leden al risicobereid zijn, en conservatievere als de leden al voorzichtig zijn.",
    abstractExample: "Als vijf licht-positieve mensen over een voorstel discussiëren, eindigt de groep uitbundiger positief dan elk individu begon — overleggen versterkt de starttendens.",
    examples: [
      { domain: "Online echo-kamer", icon: "💻", text: "Sociale mediaalgoritmen die gelijkgestemden clusteren versterken groepspolarisatie — gematigde standpunten worden extremer door herhaalde blootstelling aan gelijkgezinden." },
      { domain: "Jury", icon: "⚖️", text: "Een jury die aanvankelijk licht neigt naar schuld, kan na deliberatie extremer worden in die richting door groepspolarisatie." },
      { domain: "Investering", icon: "📈", text: "Investeringscomités kunnen risicovollere beslissingen nemen dan individuele leden — het 'risky shift'-effect in de originele onderzoeken." }
    ],
    prerequisites: ["conformity-asch"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welk mechanisme verklaart groepspolarisatie?", options: ["Groepen zijn altijd extremer", "Overtuigende argumenten die al aanwezig waren, worden versterkt door het horen van gelijkgezinden", "Groepsdruk forceert extremen", "Individuen verbergen matige standpunten"], correct: 1, explanation: "Twee processen: (1) persuasive arguments — je hoort overtuigende argumenten die jouw richting versterken en (2) sociale vergelijking — je wil niet de meest gematigde van de groep lijken." }
    ],
    creativePrompt: "Beschrijf een groepsgesprek waarbij de conclusie extremer was dan de individuele startpunten. Wat waren de mechanismen? Hoe had een facilitator dit kunnen temperen?",
    aiHelperPrompts: ["Hoe design ik besluitvormingsprocessen die polarisatie verminderen?", "Hoe beïnvloedt sociale media groepspolarisatie?", "Wanneer is groepspolarisatie nuttig?"]
  },
  {
    id: "leadership-styles",
    title: "Leiderschapsstijlen",
    difficulty: 2,
    emoji: "👔",
    academicCategory: "Organisatiepsychologie",
    skillCategory: "Psychologie van Groepen",
    tags: ["leiderschap", "stijl", "groep", "management"],
    definition: "Verschillende leiderschapsstijlen (autocratisch, democratisch, laissez-faire, transformationeel, dienend) zijn meer of minder effectief afhankelijk van de situatie — er is geen universeel beste stijl.",
    abstractExample: "Een brandweercommandant tijdens een brand heeft een autocratische stijl nodig; dezelfde persoon die een creatief team leidt, heeft een dienende stijl nodig — de situatie bepaalt de stijl.",
    examples: [
      { domain: "Crises", icon: "🚒", text: "Autocratisch leiderschap is effectief in crisissituaties die snelle, duidelijke beslissingen vereisen zonder ruimte voor discussie." },
      { domain: "Innovatie", icon: "💡", text: "Transformationeel leiderschap (visie, inspiratie, individuele aandacht) is het meest effectief voor creatieve en kenniswerkers." },
      { domain: "Zelfsturende teams", icon: "🤝", text: "Laissez-faire werkt bij experts met hoge autonomiebehoefte — maar faalt bij medewerkers die richting en structuur nodig hebben." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke leiderschapsstijl is het meest geassocieerd met hogere medewerkerstevredenheid en innovatie?", options: ["Autocratisch", "Laissez-faire", "Transformationeel", "Transactioneel"], correct: 2, explanation: "Transformationeel leiderschap — via inspiratie, individuele ontwikkeling en collectieve visie — correleert consistent sterk met tevredenheid en innovatie." }
    ],
    creativePrompt: "Wat is jouw dominante leiderschapsstijl? In welke situaties werkt die stijl goed en in welke situaties moet je bewust een andere stijl inzetten? Beschrijf een concreet voorbeeld van elke situatie.",
    aiHelperPrompts: ["Hoe ontwikkel ik situationeel leiderschap?", "Wat is het verschil tussen transactioneel en transformationeel leiderschap?", "Hoe meet ik de effectiviteit van mijn leiderschapsstijl?"]
  },
  {
    id: "team-dynamics-tuckman",
    title: "Teamontwikkelingsfasen",
    difficulty: 1,
    emoji: "🚀",
    academicCategory: "Organisatiepsychologie",
    skillCategory: "Psychologie van Groepen",
    tags: ["team", "groep", "ontwikkeling", "samenwerking"],
    definition: "Tuckman's model beschrijft vier fasen van teamontwikkeling: Forming (verkennen), Storming (conflict), Norming (normen stellen) en Performing (presteren) — elk team doorloopt deze fasen, ook na terugval.",
    abstractExample: "Een nieuw team is als een nieuwe band: eerst kennismaken (forming), dan ruzies over muziekstijl (storming), dan afspraken over repertoire (norming), dan geweldig optreden (performing).",
    examples: [
      { domain: "Startup", icon: "🚀", text: "Een nieuw startupteam begint enthousiast (forming), botst dan over richting (storming), vindt een werkwijze (norming) en presteert dan samen (performing)." },
      { domain: "Sport", icon: "⚽", text: "Nieuwe teams presteren eerst slechter dan veteranenteams — de teamontwikkelingsfasen kosten tijd en kunnen niet worden overgeslagen." },
      { domain: "Fusie", icon: "🏢", text: "Na een bedrijfsfusie doorlopen gecombineerde teams opnieuw alle fasen — zelfs ervaren professionals beginnen opnieuw met forming." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "In welke fase van Tuckman is de kans op teambreuk het grootst?", options: ["Forming", "Storming", "Norming", "Performing"], correct: 1, explanation: "In de storming-fase komen conflicten over richting, rollen en werkwijze aan de oppervlakte — teams die hier niet doorheen komen, stagneren." }
    ],
    creativePrompt: "Identificeer in welke fase een team waarvan jij deel uitmaakt (of uitmaakt) zich bevindt. Welke signalen herken je? Wat heeft het team nodig om naar de volgende fase te bewegen?",
    aiHelperPrompts: ["Hoe begeleid ik een team door de stormingfase?", "Wat doe ik als een team steeds terugvalt naar storming?", "Hoe versnelt een goede facilitator teamontwikkeling?"]
  },
  {
    id: "psychological-safety",
    title: "Psychologische Veiligheid",
    difficulty: 2,
    emoji: "🛡️",
    academicCategory: "Organisatiepsychologie",
    skillCategory: "Psychologie van Groepen",
    tags: ["veiligheid", "vertrouwen", "team", "innovatie"],
    definition: "Psychologische veiligheid (Amy Edmondson) is het teamklimaat waarin individuen zich veilig voelen om interpersoonlijke risico's te nemen — ideeën delen, fouten toegeven en kritiek uiten zonder angst voor bestraffing of vernedering.",
    abstractExample: "Een chirurgisch team met psychologische veiligheid meldt een bijna-fout aan de rest van het team — een team zonder die veiligheid zwijgt, en de volgende fout is echte schade.",
    examples: [
      { domain: "Google", icon: "💻", text: "Google's Project Aristotle ontdekte dat psychologische veiligheid de sterkste voorspeller was van teamprestaties — sterker dan talenten of ervaring." },
      { domain: "Zorg", icon: "🏥", text: "Ziekenhuisafdelingen met hoge psychologische veiligheid rapporteren meer medische fouten — niet omdat ze meer fouten maken, maar omdat ze veiliger worden gemeld." },
      { domain: "Innovatie", icon: "💡", text: "Teams met psychologische veiligheid genereren meer creatieve ideeën — leden durven half-uitgewerkte concepten te delen zonder angst voor afwijzing." }
    ],
    prerequisites: ["groupthink"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat toonde Google's Project Aristotle aan over teamprestaties?", options: ["Individuele talenten zijn doorslaggevend", "Psychologische veiligheid is de sterkste teampredictor", "Teamgrootte is het meest bepalend", "Taakverdeling is de sleutel"], correct: 1, explanation: "Ondanks verwachtingen bleek psychologische veiligheid — meer dan individueel talent, diversiteit of structuur — de beste voorspeller van teameffectiviteit." }
    ],
    creativePrompt: "Beoordeel de psychologische veiligheid in een groep waarvan jij deel uitmaakt op een schaal van 1-10. Wat is het concreetste ding dat zou veranderen als de veiligheid met 2 punten steeg?",
    aiHelperPrompts: ["Hoe bouw ik psychologische veiligheid als teamleider?", "Hoe meet ik psychologische veiligheid?", "Hoe herstel ik psychologische veiligheid na een conflict?"]
  },

  // Batch Z2 – Filosofie van de Geest
  {
    id: "hard-problem-consciousness",
    title: "Het Harde Probleem van Bewustzijn",
    difficulty: 3,
    emoji: "🧠",
    academicCategory: "Filosofie",
    skillCategory: "Filosofie van de Geest",
    tags: ["bewustzijn", "geest", "qualia", "filosofie"],
    definition: "Het harde probleem van bewustzijn (Chalmers) is de vraag waarom fysische hersenprocessen gepaard gaan met subjectieve ervaring — waarom is er überhaupt 'iets dat het is' om iets te ervaren?",
    abstractExample: "We kunnen volledig begrijpen hoe het brein rood licht verwerkt — maar waarom ervaart het rood als rood? De kloof tussen fysisch proces en subjectieve beleving is het harde probleem.",
    examples: [
      { domain: "Wetenschap", icon: "🔬", text: "Neurowetenschappers kunnen de hersenactiviteit bij pijn volledig mappen — maar waarom voelt pijn zo verschrikkelijk? Dat is het harde probleem." },
      { domain: "AI", icon: "🤖", text: "Een computer kan 'pijn' rapporteren als output, maar ervaart hij pijn? Het harde probleem maakt dit onmogelijk van buiten te bepalen." },
      { domain: "Filosofie", icon: "📚", text: "De filosoof Thomas Nagel vroeg: 'What is it like to be a bat?' — subjectieve ervaring is niet reduceerbaar tot objectieve beschrijving." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het 'makkelijke probleem' van bewustzijn (in contrast met het harde)?", options: ["Waarom bewustzijn bestaat", "Hoe hersenen informatie verwerken en gedrag sturen", "Waarom subjectieve ervaring aanwezig is", "Of dieren bewustzijn hebben"], correct: 1, explanation: "De 'makkelijke' problemen zijn functioneel: hoe verwerkt het brein informatie, hoe stuurt het gedrag? Deze zijn moeilijk maar in principe oplosbaar via wetenschap." }
    ],
    creativePrompt: "Probeer jouw eigen bewustzijn te beschrijven zonder woorden die verwijzen naar subjectiviteit (voelen, beleven, ervaren). Wat blijft er over? Wat gaat er verloren?",
    aiHelperPrompts: ["Welke oplossingen bestaan er voor het harde probleem?", "Heeft AI bewustzijn?", "Wat zijn de praktische implicaties van het harde probleem?"]
  },
  {
    id: "free-will-debate",
    title: "Vrije Wil",
    difficulty: 3,
    emoji: "🎲",
    academicCategory: "Filosofie",
    skillCategory: "Filosofie van de Geest",
    tags: ["vrije wil", "determinisme", "verantwoordelijkheid", "filosofie"],
    definition: "Het vrije-wil-debat vraagt of onze keuzes werkelijk vrij zijn of worden bepaald door eerdere oorzaken (genetica, hersenen, omgeving) — en wat dit betekent voor morele verantwoordelijkheid en straf.",
    abstractExample: "Als jouw brein de beslissing neemt 0.5 seconde vóórdat jij je bewust 'beslist' (Libet-experiment) — wie besliste dan eigenlijk?",
    examples: [
      { domain: "Recht", icon: "⚖️", text: "Als hersenletsel aantoonbaar leidt tot crimineel gedrag, in hoeverre is de dader dan moreel verantwoordelijk? Rechtsstelsels worstelen hiermee." },
      { domain: "Verslaving", icon: "💊", text: "Is een verslaafde vrij om te stoppen? Als zijn hersenen fysiologisch zijn veranderd, is zijn 'keuze' dan vrij?" },
      { domain: "Neurowetenschappen", icon: "🔬", text: "Libet's experimenten toonden dat hersenen al beslissingen nemen vóór bewuste intentie — wat de illusie van vrije wil suggereert." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welk standpunt stelt dat vrije wil en determinisme beide waar kunnen zijn?", options: ["Hard determinisme", "Libertarianisme", "Compatibilisme", "Indeterminisme"], correct: 2, explanation: "Compatibilisme (Hume, Frankfurt) stelt dat 'vrije wil' betekent handelen conform je eigen wensen zonder externe dwang — wat compatibel is met determinisme." }
    ],
    creativePrompt: "Beschrijf een keuze die je recent maakte. Analyseer alle factoren die die keuze 'bepaalden' (genetica, opvoeding, omstandigheid, emotie). Was er een moment van echte vrijheid? Wat betekent dat voor jouw verantwoordelijkheid?",
    aiHelperPrompts: ["Wat zijn de praktische implicaties als vrije wil niet bestaat?", "Hoe verhoudt compatibilisme zich tot morele verantwoordelijkheid?", "Wat zeggen neurowetenschappers over vrije wil?"]
  },
  {
    id: "personal-identity",
    title: "Persoonlijke Identiteit",
    difficulty: 3,
    emoji: "👤",
    academicCategory: "Filosofie",
    skillCategory: "Filosofie van de Geest",
    tags: ["identiteit", "continuïteit", "zelf", "filosofie"],
    definition: "Persoonlijke identiteit is de vraag wat maakt dat jij over de tijd heen dezelfde persoon bent — ondanks dat je cellen, herinneringen, overtuigingen en lichaam voortdurend veranderen.",
    abstractExample: "Het schip van Theseus: als je elk plank geleidelijk vervangt, is het nog hetzelfde schip? Zo ook: als al jouw cellen en herinneringen veranderen, ben jij nog dezelfde persoon?",
    examples: [
      { domain: "Medisch", icon: "🏥", text: "Iemand met ernstige amnesie verliest persoonlijke herinneringen — is hij nog 'dezelfde persoon' in morele, juridische en persoonlijke zin?" },
      { domain: "Bewustzijn", icon: "🧠", text: "Als jouw hersenen stap voor stap worden vervangen door siliconen chips, verdwijnt dan jouw bewustzijn abrupt of geleidelijk?" },
      { domain: "Groei", icon: "🌱", text: "Je 10-jarige zelf en je huidige zelf delen weinig overtuigingen, relaties of interesses — wat maakt jullie toch 'dezelfde' persoon?" }
    ],
    prerequisites: ["hard-problem-consciousness"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke theorie van persoonlijke identiteit benadrukt psychologische continuïteit?", options: ["Lichamelijke continuïteitstheorie", "Locke's geheugentheorie", "Parfit's reductionisme", "Substantieel dualisme"], correct: 1, explanation: "Locke stelde dat persoonlijke identiteit afhangt van continuïteit van bewustzijn en geheugen — niet van het lichaam." }
    ],
    creativePrompt: "Stel dat je morgen wakker wordt met de herinneringen van een andere persoon maar jouw lichaam. Ben jij dat nog? En stel dat jouw lichaam wakker wordt maar met andere herinneringen — wie ben jij dan?",
    aiHelperPrompts: ["Hoe beïnvloedt persoonlijke identiteit morele verantwoordelijkheid?", "Wat betekent persoonlijke identiteit voor reïncarnatie-overtuigingen?", "Hoe denkt Parfit over persoonlijke identiteit?"]
  },
  {
    id: "dualism-vs-monism",
    title: "Dualisme vs. Monisme",
    difficulty: 3,
    emoji: "⚖️",
    academicCategory: "Metafysica",
    skillCategory: "Filosofie van de Geest",
    tags: ["geest", "lichaam", "dualisme", "bewustzijn"],
    definition: "Dualisme (Descartes) stelt dat geest en lichaam fundamenteel verschillende substanties zijn; monisme stelt dat alles één substantie is — ofwel alleen materie (materialisme) of alleen geest (idealisme) of neutraal.",
    abstractExample: "Dualisme: software en hardware zijn fundamenteel verschillende dingen. Monisme: er is alleen hardware, software is slechts een beschrijving van hoe hardware functioneert.",
    examples: [
      { domain: "Religie", icon: "🕌", text: "Veel religieuze tradities zijn dualistisch: de ziel is onsterfelijk en verschilt fundamenteel van het sterfelijke lichaam." },
      { domain: "Neurowetenschappen", icon: "🔬", text: "Moderne neurowetenschappen zijn methodologisch monistisch: al het mentale wordt verklaard via hersenen — maar dit lost het harde probleem niet op." },
      { domain: "Dagelijks denken", icon: "💭", text: "Mensen denken intuïtief dualistisch: 'mijn lichaam deed het maar ík wist beter' impliceert een scheiding tussen zelf en lichaam." }
    ],
    prerequisites: ["hard-problem-consciousness"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het grootste probleem met Cartesiaans dualisme?", options: ["Het is te eenvoudig", "Het interactieprobleem: hoe beïnvloeden immateriële geest en materieel lichaam elkaar?", "Het is wetenschappelijk weerlegd", "Het heeft geen aanhangers"], correct: 1, explanation: "Als geest en lichaam fundamenteel verschillend zijn (niet-materieel vs. materieel), hoe veroorzaken gedachten dan fysieke bewegingen? Dit interactieprobleem is het klassieke probleem voor dualisme." }
    ],
    creativePrompt: "Ben jij intuïtief een dualist of monist? Beschrijf een dagelijkse ervaring (pijn, verliefdheid, creatief inzicht) en analyseer of je die beter kunt begrijpen via dualisme of monisme.",
    aiHelperPrompts: ["Zijn er moderne vormen van dualisme?", "Hoe verhoudt panpsychisme zich tot dualisme en monisme?", "Waarom gelooft de moderne wetenschap in monisme?"]
  },
  {
    id: "embodied-cognition",
    title: "Belichaamd Cognitie",
    difficulty: 2,
    emoji: "🧘",
    academicCategory: "Cognitieve Wetenschap",
    skillCategory: "Filosofie van de Geest",
    tags: ["lichaam", "cognitie", "denken", "ervaring"],
    definition: "Belichaamd cognitie (embodied cognition) stelt dat denken niet alleen in de hersenen plaatsvindt maar fundamenteel is verweven met het lichaam en de omgeving — lichamelijke ervaringen vormen onze concepten en emoties.",
    abstractExample: "We denken over 'toekomst' als 'voor ons' en 'verleden' als 'achter ons' — een ruimtelijke metafoor die voortkomt uit lichamelijke oriëntatie, niet abstracte logica.",
    examples: [
      { domain: "Taal", icon: "📖", text: "Houd een warme kop koffie vast en je beoordeelt een vreemde als warmer (vriendelijker) — lichamelijke warmte beïnvloedt sociale oordelen." },
      { domain: "Sport", icon: "⚽", text: "Sporters die 'feel' praten over hun spel beschrijven cognitieve processen die zijn ingebed in lichamelijke gewoonten, niet bewuste redenering." },
      { domain: "Onderwijs", icon: "📚", text: "Kinderen leren rekenen beter via lichamelijke manipulaties (blokken tellen) dan abstracte symbolen — het lichaam verankert concepten." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke bevinding ondersteunt belichaamd cognitie?", options: ["Hersenen werken als een computer", "Lichamelijke houding beïnvloedt gedachten en gevoelens", "Cognitie is puur neuraal", "Taal bepaalt volledig hoe we denken"], correct: 1, explanation: "Onderzoek toont dat lichamelijke toestanden (warmte, zwaarte, hardheid) direct conceptuele oordelen beïnvloeden — lichaam en geest zijn verweven." }
    ],
    creativePrompt: "Doe een experiment: verander bewust je lichaamshouding naar 'krachtig' (rechtop, open borst) voor 2 minuten. Hoe beïnvloedt dit hoe je denkt en voelt? Wat zegt dit over cognitie?",
    aiHelperPrompts: ["Hoe beïnvloedt belichaamd cognitie onderwijs?", "Is er bewijs voor embodied cognition?", "Hoe verhoudt het zich tot traditionele informatieverwerkingstheorie?"]
  },
  {
    id: "philosophy-of-language",
    title: "Taalfilosofie",
    difficulty: 3,
    emoji: "🗣️",
    academicCategory: "Filosofie",
    skillCategory: "Filosofie van de Geest",
    tags: ["taal", "betekenis", "referentie", "filosofie"],
    definition: "Taalfilosofie onderzoekt hoe woorden betekenis hebben, hoe taal de werkelijkheid beschrijft en of taal ons denken bepaalt (Sapir-Whorf) of enkel uitdrukt — fundamentele vragen over de relatie tussen taal, geest en realiteit.",
    abstractExample: "Beschrijft de zin 'de berg is groen' een feit dat bestaat onafhankelijk van de zin? Of bepaalt de taal mede hoe we de wereld organiseren?",
    examples: [
      { domain: "Kleuren", icon: "🌈", text: "Sommige talen hebben meer kleurcategorieën dan andere — sprekers van die talen onderscheiden kleurnuances sneller, wat suggereert dat taal perceptie beïnvloedt." },
      { domain: "Recht", icon: "⚖️", text: "Wat 'moord' en 'doodslag' betekenen heeft juridische consequenties — taalkundige categorisering heeft reële gevolgen." },
      { domain: "Politiek", icon: "🏛️", text: "Woorden als 'vrijheidsstrijder' vs. 'terrorist' beschrijven dezelfde persoon maar impliceren fundamenteel verschillende morele oordelen." }
    ],
    prerequisites: ["metaphor-cognition"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat stelt de sterke versie van de Sapir-Whorf-hypothese?", options: ["Taal beïnvloedt licht hoe we denken", "Taal bepaalt wat we kunnen denken", "Alle talen zijn gelijkwaardig", "Denken is onafhankelijk van taal"], correct: 1, explanation: "De sterke hypothese (linguïstisch determinisme) stelt dat de structuur van een taal bepaalt wat sprekers überhaupt kunnen denken — een controversieel maar invloedrijk idee." }
    ],
    creativePrompt: "Kies een concept uit een andere taal waarvoor Nederlands geen enkel woord heeft. Beschrijf welke nuance verloren gaat bij vertaling. Hoe beïnvloedt het ontbreken van dat woord jouw ervaring?",
    aiHelperPrompts: ["Wat is de wetenschappelijke status van de Sapir-Whorf-hypothese?", "Hoe verhoudt taalfilosofie zich tot cognitieve wetenschap?", "Wat zijn de grote stromingen in de taalfilosofie?"]
  },
  {
    id: "extended-mind",
    title: "Uitgebreide Geest",
    difficulty: 3,
    emoji: "📱",
    academicCategory: "Cognitieve Filosofie",
    skillCategory: "Filosofie van de Geest",
    tags: ["geest", "tools", "cognitie", "technologie"],
    definition: "De uitgebreide geest-hypothese (Clark & Chalmers) stelt dat cognitie niet stopt bij de schedel — notitieboeken, smartphones en andere tools zijn functioneel deel van het cognitieve systeem, niet slechts hulpmiddelen erbuiten.",
    abstractExample: "Als een alzheimerpatiënt een notitieboek gebruikt als extern geheugen, is dat notitieboek dan functioneel equivalent aan hersenengeheugen? Clark & Chalmers zeggen: ja.",
    examples: [
      { domain: "Technologie", icon: "📱", text: "Jouw smartphone slaat contacten, afspraken en kennis op — verwijder het en een groot deel van jouw 'functionele geheugen' is weg." },
      { domain: "Schrijven", icon: "✏️", text: "Filosofen die denken door te schrijven gebruiken papier als cognitief verlengstuk — denken vindt deels buiten de schedel plaats." },
      { domain: "Architectuur", icon: "🏛️", text: "Steden en gebouwen zijn cognitieve scaffolding — ze structureren hoe we ons gedragen en denken." }
    ],
    prerequisites: ["embodied-cognition"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welk criterium stellen Clark en Chalmers voor een 'uitgebreide' cognitieve component?", options: ["Het moet digitaal zijn", "Het moet functioneel causaal bijdragen op dezelfde manier als interne cognitie", "Het moet altijd beschikbaar zijn", "Het moet door mensen zijn gemaakt"], correct: 1, explanation: "Als een extern systeem de juiste functionele rol speelt (opslaan, ophalen, verwerken van informatie), is er geen reden het te excluderen van het cognitieve systeem." }
    ],
    creativePrompt: "Maak een lijst van externe tools en systemen die deel zijn van jouw 'uitgebreide geest'. Wat zou je verliezen (cognitief) als elk ervan verdween? Hoe verandert dit je visie op privacy en data-eigendom?",
    aiHelperPrompts: ["Wat zijn de ethische implicaties van de uitgebreide geest?", "Hoe verhoudt de uitgebreide geest zich tot AI-assistenten?", "Kritiek op Clark en Chalmers?"]
  },
  {
    id: "phenomenology",
    title: "Fenomenologie",
    difficulty: 3,
    emoji: "🌅",
    academicCategory: "Filosofie",
    skillCategory: "Filosofie van de Geest",
    tags: ["ervaring", "bewustzijn", "fenomeen", "filosofie"],
    definition: "Fenomenologie is de filosofische studie van de structuur van directe bewuste ervaring — hoe verschijnen dingen aan ons, los van objectieve beschrijvingen — gesticht door Husserl en uitgewerkt door Heidegger en Merleau-Ponty.",
    abstractExample: "Fenomenologie onderzoekt niet de stoel als fysiek object, maar hoe de stoel verschijnt aan jou als iets om op te zitten — de betekenisvolle structuur van jouw ervaring.",
    examples: [
      { domain: "Zorg", icon: "🏥", text: "Fenomenologische verplegingskunde vraagt niet 'wat zijn de symptomen?' maar 'hoe ervaart de patiënt zijn ziekte?' — voor betere zorg." },
      { domain: "Ontwerp", icon: "🎨", text: "Fenomenologisch geïnspireerd UX-design vraagt hoe gebruikers hun interactie met een product écht ervaren, niet alleen meten wat ze klikken." },
      { domain: "Psychologie", icon: "🧠", text: "Existentiële psychologie (Frankl, May) gebruikt fenomenologie om de unieke ervaring van individuen centraal te stellen in therapie." }
    ],
    prerequisites: ["hard-problem-consciousness"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat bedoelt Husserl met 'intentionaliteit'?", options: ["Bewuste intenties en plannen", "Bewustzijn is altijd bewustzijn VAN iets — het is altijd gericht", "De bedoeling achter acties", "De structuur van de hersenen"], correct: 1, explanation: "Intentionaliteit in fenomenologie betekent dat bewustzijn altijd gericht is op een object — er is geen bewustzijn zonder dat het iets bewust is." }
    ],
    creativePrompt: "Doe een fenomenologische beschrijving van een alledaagse handeling (koffie zetten, wandelen). Beschrijf niet de objectieve feiten maar hoe de ervaring aan jou verschijnt: kleuren, texturen, emoties, verwachtingen.",
    aiHelperPrompts: ["Hoe verschilt fenomenologie van psychologie?", "Hoe beïnvloedde Heidegger Husserls fenomenologie?", "Welke impact heeft fenomenologie op de hedendaagse wetenschap?"]
  },
  {
    id: "epistemic-humility-mind",
    title: "Epistemische Bescheidenheid",
    difficulty: 2,
    emoji: "🤔",
    academicCategory: "Epistemologie",
    skillCategory: "Filosofie van de Geest",
    tags: ["kennis", "onzekerheid", "filosofie", "bescheidenheid"],
    definition: "Epistemische bescheidenheid is de erkenning van de grenzen van onze kennis — dat onze overtuigingen feilbaar zijn, dat we belangrijke blinde vlekken hebben en dat zekerheid zelden gerechtvaardigd is.",
    abstractExample: "Een epistemisch bescheiden persoon zegt 'ik denk dat dit klopt en hier zijn mijn redenen' in plaats van 'dit is gewoon zo' — hij houdt altijd ruimte voor nieuwe informatie.",
    examples: [
      { domain: "Wetenschap", icon: "🔬", text: "Wetenschappelijke methode is gebaseerd op epistemische bescheidenheid: theorieën zijn nooit bewezen, alleen (voorlopig) bevestigd of weerlegd." },
      { domain: "Politiek", icon: "🏛️", text: "Politici die toegeven dat ze ongelijk hadden of situaties verkeerd inschatten, tonen zeldzame epistemische bescheidenheid." },
      { domain: "Persoonlijk", icon: "👤", text: "Iemand die zegt 'ik begrijp pas achteraf dat ik hier volledig naast zat' beoefent epistemische bescheidenheid over zijn eigen denkprocessen." }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is epistemische arrogantie?", options: ["Te veel twijfelen aan jezelf", "Overtuigingen vasthouden met meer zekerheid dan gerechtvaardigd is", "Te veel weten", "Kennis voor jezelf houden"], correct: 1, explanation: "Epistemische arrogantie is het omgekeerde: zekerheid claimen die niet wordt ondersteund door de beschikbare informatie of de complexiteit van het onderwerp." }
    ],
    creativePrompt: "Lijst vijf overtuigingen die jij sterk aanhangt. Beoordeel elke overtuiging: hoe zeker ben je (0-100%)? Welk bewijs zou je overtuiging kunnen falsificeren? Hoe bescheiden zijn jouw zekerheidsschattingen?",
    aiHelperPrompts: ["Hoe balanceer ik epistemische bescheidenheid met daadkracht?", "Wanneer is epistemische bescheidenheid ongepast?", "Hoe beïnvloedt epistemische bescheidenheid besluitvorming?"]
  },
  {
    id: "philosophy-of-perception",
    title: "Perceptiefilosofie",
    difficulty: 2,
    emoji: "👁️",
    academicCategory: "Filosofie",
    skillCategory: "Filosofie van de Geest",
    tags: ["perceptie", "werkelijkheid", "zintuig", "filosofie"],
    definition: "Perceptiefilosofie onderzoekt de relatie tussen onze zintuigelijke ervaringen en de buitenwereld — zien we de wereld direct zoals ze is, of construeert de geest een representatie die kan afwijken van de werkelijkheid?",
    abstractExample: "Een stok die half in water steekt ziet eruit alsof hij geknikt is — zintuiglijke informatie klopt, maar de conclusie ('geknikt') is onjuist. Wat zien we dan echt?",
    examples: [
      { domain: "Illusies", icon: "🌈", text: "Optische illusies tonen dat perceptie een constructie is van de geest, niet een directe registratie van de werkelijkheid." },
      { domain: "Kleur", icon: "🎨", text: "Kleuren bestaan niet in de buitenwereld — objecten hebben golflengte, maar 'rood' is een mentale constructie van het visuele systeem." },
      { domain: "VR", icon: "🥽", text: "Virtual reality bewijst dat de geest overtuigd kan worden van een werkelijkheid die puur geconstrueerd is — wat zegt dit over 'echte' perceptie?" }
    ],
    prerequisites: ["hard-problem-consciousness"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welk filosofisch standpunt stelt dat we de buitenwereld direct waarnemen, zonder tussenkomst van mentale representaties?", options: ["Representationalisme", "Direct realisme", "Idealisme", "Scepticisme"], correct: 1, explanation: "Direct realisme (naïef realisme) stelt dat we de buitenwereld direct en rechtstreeks waarnemen — contrasteer dit met representationalisme dat een mentale tussenlaag aanneemt." }
    ],
    creativePrompt: "Zoek drie optische illusies. Beschrijf wat je ziet versus wat er objectief is. Wat leert dit over de betrouwbaarheid van jouw perceptie in alledaagse situaties?",
    aiHelperPrompts: ["Hoe beïnvloedt verwachting perceptie?", "Is perceptie cultuurgebonden?", "Wat zeggen neurowetenschappen over directe vs. geconstrueerde perceptie?"]
  },

  // Batch Z3 – Complexiteit & Systemen
  {
    id: "emergence-complexity",
    title: "Emergentie",
    difficulty: 3,
    emoji: "🌀",
    academicCategory: "Complexiteitswetenschap",
    skillCategory: "Complexiteit & Systemen",
    tags: ["systemen", "emergentie", "complexiteit", "zelforganisatie"],
    definition: "Emergentie is het verschijnsel dat complexe systemen eigenschappen ontwikkelen die niet aanwezig zijn in de afzonderlijke delen — het geheel is anders dan (en niet reduceerbaar tot) de som der delen.",
    abstractExample: "Watermoleculen hebben geen eigenschap 'nat' — maar miljarden samen produceren een vloeistof die je kunt voelen. Natheidheid emergeert uit de interacties.",
    examples: [
      { domain: "Bewustzijn", icon: "🧠", text: "Bewustzijn emergeert uit neuronen die individueel geen bewustzijn hebben — de meest mysterieuze emergentie in de natuur." },
      { domain: "Markt", icon: "📈", text: "Marktprijzen emergeren uit miljoenen individuele transacties — geen centrale planner berekent ze, ze zijn het resultaat van de interacties." },
      { domain: "Mierenkolo", icon: "🐜", text: "Een mierenkolo vertoont complex collectief gedrag (voedselroutes, verdediging) zonder centrale planning — emergentie uit eenvoudige lokale regels." }
    ],
    prerequisites: [],
    unlocks: ["complex-adaptive-systems"],
    exercises: [
      { type: "multipleChoice", question: "Welke eigenschap kenmerkt emergente eigenschappen?", options: ["Ze zijn voorspelbaar vanuit de delen", "Ze zijn aanwezig in elk individueel deel", "Ze zijn niet reduceerbaar tot de eigenschappen van de afzonderlijke delen", "Ze vereisen centrale coördinatie"], correct: 2, explanation: "Emergente eigenschappen zijn inherent niet-reduceerbaar: 'nat' is niet aanwezig in één watermolecuul, het emergeert alleen in het collectief." }
    ],
    creativePrompt: "Beschrijf drie emergente eigenschappen in jouw eigen leven of omgeving (een vriendschapsgroep, een bedrijf, een stad). Welke eigenschappen heeft het geheel die de individuele delen niet hebben?",
    aiHelperPrompts: ["Hoe verschilt zwakke van sterke emergentie?", "Welke wetenschapsgebieden bestuderen emergentie?", "Heeft emergentie implicaties voor reductionisme?"]
  },
  {
    id: "complex-adaptive-systems",
    title: "Complexe Adaptieve Systemen",
    difficulty: 3,
    emoji: "🕸️",
    academicCategory: "Complexiteitswetenschap",
    skillCategory: "Complexiteit & Systemen",
    tags: ["systemen", "adaptatie", "complexiteit", "zelforganisatie"],
    definition: "Complexe adaptieve systemen (CAS) zijn systemen bestaande uit vele interacterende agenten die zich aanpassen aan hun omgeving — producerend orde zonder centrale leiding, via terugkoppeling en selectie.",
    abstractExample: "Een stedelijk verkeerssysteem is een CAS: duizenden bestuurders passen individueel hun rijgedrag aan op basis van lokale informatie, waardoor globale verkeerspatronen emergeren zonder dirigent.",
    examples: [
      { domain: "Economie", icon: "📈", text: "Markten zijn CAS: miljoenen agenten handelen lokaal, producerend macro-economische patronen die niemand centraal heeft ontworpen." },
      { domain: "Immune systeem", icon: "🦠", text: "Het immuunsysteem is een CAS: T-cellen en B-cellen interageren en leren van nieuwe pathogenen zonder centrale command." },
      { domain: "Sociale media", icon: "📱", text: "Virale trends op sociale media emergeren uit miljoenen individuele shares en likes — niemand plan ze, ze zijn CAS-fenomenen." }
    ],
    prerequisites: ["emergence-complexity"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is een kenmerkende eigenschap van complexe adaptieve systemen?", options: ["Centrale sturing", "Terugkoppeling en aanpassing op basis van lokale informatie", "Eenvoudige lineaire causaliteit", "Stabiele, voorspelbare uitkomsten"], correct: 1, explanation: "CAS werken via terugkoppellussen: agenten passen hun gedrag aan op basis van lokale feedback, wat globale patronen produceert die niemand heeft gepland." }
    ],
    creativePrompt: "Kies een organisatie of systeem dat jij kent. Analyseer het als CAS: wie zijn de agenten, welke lokale regels volgen ze, welke feedback-loops bestaan er en welke globale patronen emergeren?",
    aiHelperPrompts: ["Hoe beheer je complexe adaptieve systemen?", "Wat is het verschil tussen complex en ingewikkeld?", "Welke interventies werken wel en niet in CAS?"]
  },
  {
    id: "feedback-loops",
    title: "Terugkoppellussen",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Systeemtheorie",
    skillCategory: "Complexiteit & Systemen",
    tags: ["terugkoppeling", "systemen", "versterking", "regulering"],
    definition: "Terugkoppellussen zijn circuits in systemen waarbij output de input beïnvloedt: positieve terugkoppeling versterkt verandering (instabiliteit); negatieve terugkoppeling dempte verandering (stabiliteit).",
    abstractExample: "Een thermostaat is een negatieve terugkoppellus: als het te warm wordt, zet hij de verwarming uit. Een microfoonstoring is positief: geluid wordt versterkt, wat meer geluid maakt.",
    examples: [
      { domain: "Klimaat", icon: "🌡️", text: "Smeltend ijs reflecteert minder zonlicht → meer warmteabsorptie → meer ijs smelt: positieve terugkoppeling die klimaatverandering versnelt." },
      { domain: "Economie", icon: "📈", text: "Economische groei → meer investeringen → meer groei: positieve terugkoppeling (totdat een rem optreedt)." },
      { domain: "Leren", icon: "📚", text: "Succes → meer zelfvertrouwen → meer inspanning → meer succes: positieve terugkoppeling in het leerproces." }
    ],
    prerequisites: [],
    unlocks: ["emergence-complexity"],
    exercises: [
      { type: "multipleChoice", question: "Welk type terugkoppeling stabiliseert een systeem?", options: ["Positieve terugkoppeling", "Negatieve terugkoppeling", "Vertraagde terugkoppeling", "Lineaire terugkoppeling"], correct: 1, explanation: "Negatieve terugkoppeling dempt afwijkingen van een doelistant — zoals een thermostaat of biologische homeostase." }
    ],
    creativePrompt: "Identificeer drie terugkoppellussen in jouw eigen leven: één positieve (versterkend) en twee negatieve (stabiliserend). Beschrijf hoe ze werken en of je er bewust van bent.",
    aiHelperPrompts: ["Hoe ontwerp ik negatieve terugkoppelling in organisaties?", "Wat zijn gevaarlijke positieve terugkoppellussen in de maatschappij?", "Hoe herken ik terugkoppellussen in systemen?"]
  },
  {
    id: "nonlinear-dynamics",
    title: "Niet-lineaire Dynamica",
    difficulty: 3,
    emoji: "🦋",
    academicCategory: "Wiskunde",
    skillCategory: "Complexiteit & Systemen",
    tags: ["chaos", "niet-lineair", "gevoeligheid", "systemen"],
    definition: "Niet-lineaire dynamica beschrijft systemen waarbij kleine veranderingen in beginomstandigheden leiden tot dramatisch verschillende uitkomsten — het 'vlindereffect' maakt perfecte voorspelling op lange termijn onmogelijk.",
    abstractExample: "Een pendulum dat iets harder wordt aangeslagen beweegt niet iets harder maar chaotisch compleet anders — kleine input, dramatisch andere output.",
    examples: [
      { domain: "Weer", icon: "⛈️", text: "Lorenz ontdekte dat weermodellen exponentieel afwijken bij minimale meetfouten — vandaar de 7-dag weersgrens voor betrouwbare voorspelling." },
      { domain: "Ecologie", icon: "🦁", text: "Prooi-predatorcycli in ecosystemen zijn niet-lineair: kleine verstoringen kunnen leiden tot populatieexplosies of -crashes." },
      { domain: "Economie", icon: "📈", text: "Financiële crises emergeren uit kleine aanvankelijke verstoringen die via niet-lineaire terugkoppeling escaleren naar systeemcrises." }
    ],
    prerequisites: ["feedback-loops"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het 'vlindereffect' in chaotheorie?", options: ["Vlinders zijn chaotische vliegers", "Kleine beginverschillen leiden tot grote verschillen in uitkomst", "Niet-lineaire systemen zijn oncontroleerbaar", "Chaos is willekeurig"], correct: 1, explanation: "Lorenz beschreef hoe een vlindervleugel in Brazilië een tornado in Texas kon veroorzaken — extreem gevoel voor beginomstandigheden." }
    ],
    creativePrompt: "Beschrijf een moment in je leven waarbij een kleine, schijnbaar onbelangrijke gebeurtenis leidde tot grote veranderingen (een ontmoeting, een beslissing, een toevalligheid). Wat leer je over het plannen van je leven?",
    aiHelperPrompts: ["Hoe verschilt chaos van willekeur?", "Kunnen chaotische systemen worden beheerd?", "Welke systemen zijn het meest chaotisch?"]
  },
  {
    id: "systems-thinking",
    title: "Systeemdenken",
    difficulty: 2,
    emoji: "🔭",
    academicCategory: "Systeemtheorie",
    skillCategory: "Complexiteit & Systemen",
    tags: ["systemen", "denken", "verbanden", "holisme"],
    definition: "Systeemdenken is een benadering die focust op hoe onderdelen van een systeem met elkaar interageren en hoe systemen als geheel functioneren — in contrast met lineair denken dat oorzaken en gevolgen isoleert.",
    abstractExample: "Lineair denken: bacteriën veroorzaken ziekte → antibiotica doden bacteriën → probleem opgelost. Systeemdenken: antibiotica beïnvloeden ook het microbioom, resistentie en immuunsysteem — het systeem als geheel.",
    examples: [
      { domain: "Gezondheidszorg", icon: "🏥", text: "Behandelen van diabetes alleen met medicatie negeert het systeem: voeding, beweging, stress, slaap en sociaaleconomische context zijn allen verweven." },
      { domain: "Onderwijs", icon: "📚", text: "Lage schoolprestaties oplossen via betere docenten negeert het systeem: armoede, ouderlijk support, psychologische veiligheid en buurtomgeving spelen allen mee." },
      { domain: "Bedrijf", icon: "💼", text: "Verkoop verhogen via meer verkopers zonder naar het productie- en distributiesysteem te kijken kan het systeem overbelasten." }
    ],
    prerequisites: ["feedback-loops"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat onderscheidt systeemdenken van lineair denken?", options: ["Systeemdenken is altijd beter", "Systeemdenken erkent terugkoppeling, vertraging en verbanden tussen delen", "Lineair denken is eenvoudiger", "Ze zijn complementair maar nooit verschillend"], correct: 1, explanation: "Systeemdenken erkent dat effecten terugwerken op oorzaken, dat er vertragingen zijn en dat interventies onbedoelde bijeffecten kunnen hebben." }
    ],
    creativePrompt: "Kies een probleem dat jou bezighoudt. Teken een systeemlus: welke factoren beïnvloeden het probleem, hoe hangen ze samen en welke terugkoppellussen bestaan er? Wat ontdek je dat lineaire analyse miste?",
    aiHelperPrompts: ["Hoe maak ik een causal loop diagram?", "Welke problemen zijn het best te begrijpen met systeemdenken?", "Hoe gebruik ik systeemdenken in beleidsontwikkeling?"]
  },
  {
    id: "scale-free-networks",
    title: "Schaalvrije Netwerken",
    difficulty: 3,
    emoji: "🌐",
    academicCategory: "Netwerkwetenschap",
    skillCategory: "Complexiteit & Systemen",
    tags: ["netwerk", "hub", "verbinding", "distributie"],
    definition: "Schaalvrije netwerken volgen een machtswetdistributie: de meeste knopen hebben weinig verbindingen, maar een kleine minderheid (hubs) heeft extreem veel — internet, sociale netwerken en biologische netwerken volgen dit patroon.",
    abstractExample: "Het internet is schaalvrij: de meeste sites hebben enkele bezoekers, maar Google en Wikipedia hebben miljarden — een kleine elite van hubs domineert het netwerk.",
    examples: [
      { domain: "Internet", icon: "💻", text: "Weinige websites ontvangen het leeuwendeel van het webverkeer — schaalvrije distributie maakt zoekmachines dominant en kleine sites kwetsbaar." },
      { domain: "Biologie", icon: "🦠", text: "Metabolische netwerken in cellen zijn schaalvrij: weinige metabolieten zijn betrokken bij de meeste reacties — verwijdering van hubs is fataal." },
      { domain: "Sociaal", icon: "👥", text: "Sociale netwerken zijn schaalvrij: superconnectors (hubs) zijn cruciaal voor informatieverbreiding — zij starten epidemieën van ideeën en virussen." }
    ],
    prerequisites: ["complex-adaptive-systems"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat is het voordeel én nadeel van schaalvrije netwerken?", options: ["Altijd stabiel", "Robuust tegen willekeurige fouten, kwetsbaar voor gerichte aanvallen op hubs", "Kwetsbaar voor alle fouten", "Gelijkmatig verdeeld risico"], correct: 1, explanation: "Schaalvrije netwerken zijn robuust als willekeurige knopen uitvallen (die zijn waarschijnlijk niet-hubs), maar bijzonder kwetsbaar als hubs worden aangevallen." }
    ],
    creativePrompt: "Analyseer jouw eigen sociale netwerk. Wie zijn de 'hubs' (mensen met extreem veel verbindingen)? Hoe beïnvloedt dat informatiestroom, geruchten en kansen in jouw netwerk?",
    aiHelperPrompts: ["Hoe beïnvloeden hubs epidemieën?", "Hoe bouw je een schaalvrij netwerk?", "Waarom volgen zoveel netwerken een machtswetdistributie?"]
  },
  {
    id: "cynefin-framework",
    title: "Cynefin-raamwerk",
    difficulty: 2,
    emoji: "🗺️",
    academicCategory: "Managementwetenschap",
    skillCategory: "Complexiteit & Systemen",
    tags: ["complexiteit", "beslissing", "context", "management"],
    definition: "Het Cynefin-raamwerk (Snowden) onderscheidt vier contexten: eenvoudig (beste praktijken), ingewikkeld (goede praktijken via expertise), complex (emergente praktijken via experimenteren) en chaotisch (novelpraktijken via daadkracht) — elk vereist een andere beslisaanpak.",
    abstractExample: "Een vliegtuigmotor repareren is ingewikkeld (expertise nodig maar kenbare procedure); een nieuwe markt betreden is complex (probeer-observeer-leer); een brand blussen is chaotisch (handel nu, analyseer later).",
    examples: [
      { domain: "Bedrijf", icon: "💼", text: "Productielijn is 'eenvoudig' (standaard procedures); R&D is 'complex' (onzekerheid vereist experimenten); PR-crisis is 'chaotisch' (handle first, analyze later)." },
      { domain: "Beleid", icon: "🏛️", text: "Een pandemie begint chaotisch, wordt complex naarmate data groeit, en onderdelen worden ingewikkeld als oplossingen zijn gevonden." },
      { domain: "Onderwijs", icon: "📚", text: "Rekenaritmetiek leren is 'ingewikkeld'; creatief schrijven faciliteren is 'complex'; kindbescherming bij crisissituatie is 'chaotisch'." }
    ],
    prerequisites: ["complex-adaptive-systems"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke aanpak past het beste bij een complex probleem?", options: ["Beste praktijken toepassen", "Expert raadplegen", "Experimenteren, observeren, reageren", "Onmiddellijk handelen zonder analyse"], correct: 2, explanation: "In een complexe context zijn oorzaak-gevolg relaties pas achteraf zichtbaar — experimenten en pilots zijn de aangewezen aanpak om te leren." }
    ],
    creativePrompt: "Kies drie uitdagingen in jouw werk of leven. Classificeer elk in het Cynefin-raamwerk. Hoe verandert die classificatie jouw aanpak voor elke uitdaging?",
    aiHelperPrompts: ["Hoe gebruik ik het Cynefin-raamwerk in leiderschap?", "Wat zijn de gevaren van complexe problemen behandelen als ingewikkeld?", "Hoe verschuiven problemen tussen Cynefin-domeinen?"]
  },
  {
    id: "self-organization",
    title: "Zelforganisatie",
    difficulty: 2,
    emoji: "🌿",
    academicCategory: "Complexiteitswetenschap",
    skillCategory: "Complexiteit & Systemen",
    tags: ["zelforganisatie", "orde", "systemen", "spontaan"],
    definition: "Zelforganisatie is het emergeren van orde en structuur in een systeem zonder externe sturing — via lokale interacties tussen componenten die globale patronen produceren.",
    abstractExample: "IJskristallen vormen ingewikkelde, symmetrische vormen via eenvoudige moleculaire interacties — geen blauwdruk, geen ontwerper, pure zelforganisatie.",
    examples: [
      { domain: "Biologie", icon: "🦋", text: "Vogelopstijgpatronen (murmurations) zijn zelforganisatie: duizenden vogels volgen drie eenvoudige regels (afstand houden, snelheid aanpassen, richting volgen) en produceren prachtige golven." },
      { domain: "Samenleving", icon: "🏙️", text: "Stadswijken met karakter (Jordaan, Pijp) zijn zelforganiserend: ze emergeerden uit lokale interacties van bewoners, zonder masterplan." },
      { domain: "Internet", icon: "💻", text: "Wikipedia is zelforganiserend: duizenden bijdragers coördineren zonder hiërarchie en produceren een coherente encyclopedie." }
    ],
    prerequisites: ["emergence-complexity"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Wat zijn de minimale vereisten voor zelforganisatie?", options: ["Centrale coördinatie", "Lokale interactie-regels en terugkoppeling", "Externe ontwerper", "Willekeurige beweging"], correct: 1, explanation: "Zelforganisatie vereist alleen lokale regels en terugkoppeling — uit die eenvoudige ingrediënten emergeren complexe globale patronen." }
    ],
    creativePrompt: "Ontwerp een zelforganiserend systeem voor een probleem: een buurtschoonmaakactie, een open-source project, of een informele leergroep. Welke minimale regels stel je in om goede zelforganisatie te bevorderen?",
    aiHelperPrompts: ["Hoe faciliteer ik zelforganisatie in teams?", "Wanneer werkt zelforganisatie beter dan hiërarchie?", "Wat zijn gevaren van ongecontroleerde zelforganisatie?"]
  },
  {
    id: "resilience-systems",
    title: "Systeemveerkracht",
    difficulty: 2,
    emoji: "🌊",
    academicCategory: "Complexiteitswetenschap",
    skillCategory: "Complexiteit & Systemen",
    tags: ["veerkracht", "systemen", "herstel", "robuustheid"],
    definition: "Systeemveerkracht is het vermogen van een systeem om verstoringen op te vangen en te herstellen terwijl de essentiële structuur en functie behouden blijft — veerkracht verschilt van stabiliteit (geen verstoring) en weerstand (verstoring weerstaan).",
    abstractExample: "Een rietstengel is veerkrachtig: hij buigt in de wind maar breekt niet en keert terug naar zijn oorspronkelijke positie. Een eiken plank is resistent maar breekt bij hoge spanning.",
    examples: [
      { domain: "Ecologie", icon: "🌳", text: "Een divers ecosysteem is veerkrachtiger dan een monocultuur: als één soort wegvalt, nemen andere de functie over." },
      { domain: "Economie", icon: "💰", text: "Landen met gediversifieerde economieën herstellen sneller van crises dan landen die afhankelijk zijn van één sector." },
      { domain: "Persoonlijk", icon: "👤", text: "Mensen met brede sociale netwerken, vaardigheden en financiële reserves zijn veerkrachtiger bij persoonlijke crises." }
    ],
    prerequisites: ["complex-adaptive-systems"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke eigenschap verhoogt systeemveerkracht het meest?", options: ["Maximale efficiëntie", "Redundantie en diversiteit", "Centrale controle", "Snelle groei"], correct: 1, explanation: "Redundantie (meerdere wegen naar hetzelfde doel) en diversiteit (verschillende typen componenten) zijn de twee centrale drivers van systeemveerkracht." }
    ],
    creativePrompt: "Beoordeel de veerkracht van jouw persoonlijk leven op drie dimensies: financieel, sociaal en professioneel. Waar is de grootste kwetsbaarheid? Wat zou jouw veerkracht het meest versterken?",
    aiHelperPrompts: ["Hoe meet ik systeemveerkracht?", "Wat is het verschil tussen veerkracht en robuustheid?", "Hoe bouw ik veerkrachtige organisaties?"]
  },
  {
    id: "unintended-consequences",
    title: "Onbedoelde Gevolgen",
    difficulty: 2,
    emoji: "🎯",
    academicCategory: "Systeemtheorie",
    skillCategory: "Complexiteit & Systemen",
    tags: ["gevolgen", "systemen", "beleid", "complexiteit"],
    definition: "Onbedoelde gevolgen zijn effecten van interventies die niet waren beoogd en vaak het tegenovergestelde bereiken van het doel — een klassieke uitdaging bij ingrijpen in complexe systemen.",
    abstractExample: "Pythons werden geïntroduceerd in Florida als huisdier, ontsnapten en verwoesten nu de lokale fauna — een onbedoeld gevolg van een ogenschijnlijk onschuldige actie.",
    examples: [
      { domain: "Cobra-effect", icon: "🐍", text: "De Britse overheid betaalde voor ingeleverde cobra-hoofden om slangen te bestrijden — kweekkwekers begonnen cobra's te kweeken voor het geld. Meer cobra's." },
      { domain: "Verkeer", icon: "🚗", text: "Bredere wegen introduceren om files op te lossen trekken meer automobilisten aan — het geïnduceerde vraageffect herstelt de file." },
      { domain: "Gezondheidszorg", icon: "🏥", text: "Antibioticaoveralgebruik in de veehouderij lost kortetermijninfecties op maar produceert resistente bacteriën — een serieuze lange-termijn bedreiging." }
    ],
    prerequisites: ["systems-thinking"],
    unlocks: [],
    exercises: [
      { type: "multipleChoice", question: "Welke eigenschap van complexe systemen maakt onbedoelde gevolgen het meest waarschijnlijk?", options: ["Te weinig data", "Terugkoppellussen en niet-lineariteit", "Slechte planning", "Onvoldoende budget"], correct: 1, explanation: "Terugkoppellussen zorgen dat interventies terugwerken op het systeem, wat adaptief gedrag uitlokt dat de interventie kan ondermijnen of verergeren." }
    ],
    creativePrompt: "Beschrijf drie beleidsmaatregel of bedrijfsbeslissingen die je kent die onbedoelde gevolgen hadden. Welk systeemkenmerk maakte dat onvermijdelijk? Hoe had een systeemdenkende aanpak het kunnen voorkomen?",
    aiHelperPrompts: ["Hoe voorspel ik onbedoelde gevolgen voor de implementatie?", "Welke methoden helpen bij het ontwerpen van robuust beleid?", "Zijn onbedoelde gevolgen altijd vermijdbaar?"]
  }
];
