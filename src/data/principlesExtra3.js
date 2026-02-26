// Extra principles – batch 3 (10 principes: Statistiek & Retorica)

export const extraPrinciples3 = [
  // ── STATISTIEK ───────────────────────────────────────────────
  {
    id: "law-of-large-numbers",
    title: "Wet van de Grote Getallen",
    difficulty: 2,
    emoji: "📊",
    academicCategory: "Statistiek",
    skillCategory: "Beter Redeneren",
    tags: ["Statistiek", "Kansrekening", "Steekproef", "Beter Redeneren"],
    definition: "Hoe groter de steekproef, hoe dichter het gemiddelde van de uitkomsten bij de werkelijke kans ligt. Kleine steekproeven produceren grillige resultaten; grote steekproeven onthullen de echte patronen.",
    abstractExample: "Gooi een munt 10 keer: je kunt 8× kop gooien. Gooi hem 10.000 keer: het percentage kop nadert 50%. De wet zegt niets over individuele worpen, alleen over gemiddelden over grote aantallen.",
    examples: [
      { domain: "science", icon: "🔬", text: "Een klinische studie met 20 patiënten geeft wisselende resultaten; met 2.000 patiënten worden echte effecten zichtbaar." },
      { domain: "business", icon: "💼", text: "Een casino verliest soms een avond, maar wint vrijwel altijd over duizenden spelers – de wet garandeert hun marge." },
      { domain: "daily", icon: "🏠", text: "Eén slechte recensie kan toeval zijn; honderd slechte recensies onthullen een patroon." }
    ],
    prerequisites: ["base-rate-fallacy"],
    unlocks: ["regression-to-mean", "bayes-theorem"],
    relatedPrinciples: ["base-rate-fallacy", "gambler-fallacy", "selection-bias"],
    exercises: [{
      type: "multiple-choice",
      question: "Een school heeft twee vestigingen: één met 50 leerlingen en één met 500. Welke vestiging heeft vaker een jaar met extreem hoge of lage slagingspercentages?",
      options: ["De grote vestiging", "De kleine vestiging", "Beiden even vaak", "Dat hangt af van de leraren"],
      correct: 1,
      feedback: "Juist! Kleine steekproeven geven extremere uitschieters. De wet van de grote getallen stabiliseert pas bij grote aantallen."
    }],
    creativePrompt: "Bedenk een situatie waarbij iemand op basis van een kleine steekproef een te sterke conclusie trok.",
    aiHelperPrompts: [
      "Heb je wel eens een product beoordeeld op basis van één of twee ervaringen?",
      "Wanneer vertrouw jij een gemiddeld cijfer: bij 5 reviews of bij 500?",
      "Hoe zou je iemand uitleggen waarom casinos altijd winnen?"
    ]
  },
  {
    id: "regression-to-mean",
    title: "Regressie naar het Gemiddelde",
    difficulty: 3,
    emoji: "📉",
    academicCategory: "Statistiek",
    skillCategory: "Beter Redeneren",
    tags: ["Statistiek", "Regressie", "Gemiddelde", "Beter Redeneren"],
    definition: "Extreme metingen worden bij herhaling gevolgd door minder extreme metingen – niet door een echte oorzaak, maar simpelweg door kans. We verwarren dit ten onrechte met oorzaak en gevolg.",
    abstractExample: "Als je de beste prestatie selecteert, is een deel van dat succes geluk. De volgende meting zal gemiddeld lager uitvallen – niet door slecht beleid, maar door statistiek.",
    examples: [
      { domain: "science", icon: "🔬", text: "De hoogst scorende leerlingen op een toets presteren bij de volgende toets gemiddeld iets minder – deels doordat de eerste score deels op geluk berustte." },
      { domain: "business", icon: "💼", text: "Een recordkwartaal wordt vaak gevolgd door een normaler kwartaal. Managers schrijven dit aan hun beleid toe, maar deels is het statistiek." },
      { domain: "daily", icon: "🏠", text: "Geef je iemand een compliment na een geweldige prestatie en straf je hem na een slechte, dan lijkt straf effectiever – maar dat is regressie naar het gemiddelde." }
    ],
    prerequisites: ["law-of-large-numbers", "correlation-causation"],
    unlocks: [],
    relatedPrinciples: ["law-of-large-numbers", "correlation-causation", "post-hoc-ergo"],
    exercises: [{
      type: "multiple-choice",
      question: "Een piloot presteert uitzonderlijk slecht, wordt bekritiseerd en doet het daarna beter. Wat verklaart dit waarschijnlijk?",
      options: ["De kritiek heeft geholpen", "Regressie naar het gemiddelde", "Hij had een goede dag", "De instructeur hielp meer"],
      correct: 1,
      feedback: "Regressie naar het gemiddelde: extreme prestaties (goed of slecht) worden gevolgd door meer gemiddelde prestaties, los van interventies."
    }],
    creativePrompt: "Beschrijf een situatie waarbij iemand ten onrechte dacht dat zijn ingrijpen het verschil maakte, terwijl het regressie naar het gemiddelde was.",
    aiHelperPrompts: [
      "Denk aan sportprestaties: na een recordseizoen volgt vaak een 'dip'.",
      "Heb je wel eens iemand gecomplimenteerd en daarna teleurgesteld worden?",
      "Hoe kun je onderscheid maken tussen echt effect en statistisch toeval?"
    ]
  },
  {
    id: "selection-bias",
    title: "Selectiebias",
    difficulty: 2,
    emoji: "🎯",
    academicCategory: "Statistiek",
    skillCategory: "Beter Redeneren",
    tags: ["Statistiek", "Bias", "Steekproef", "Beter Redeneren"],
    definition: "Als de groep die je onderzoekt niet representatief is voor de bredere populatie, zijn je conclusies vertekend. De manier waarop data worden verzameld bepaalt sterk welke conclusies mogelijk zijn.",
    abstractExample: "Als je alleen mensen ondervraagt die al klant zijn, mis je de mensen die zijn afgehaakt. Je beeld van klanttevredenheid is dan systematisch te positief.",
    examples: [
      { domain: "science", icon: "🔬", text: "Vroege medische studies gebruikten vrijwel alleen mannelijke proefpersonen – bevindingen gelden daardoor minder voor vrouwen." },
      { domain: "business", icon: "💼", text: "Online reviews zijn scheef: mensen met sterke ervaringen (heel goed of heel slecht) schrijven eerder een review dan tevreden middengroepers." },
      { domain: "daily", icon: "🏠", text: "Mensen die overleven schipbreuken worden geïnterviewd over reddingstechnieken – maar we horen nooit van degenen voor wie dezelfde technieken niet werkten." }
    ],
    prerequisites: ["survivorship-bias"],
    unlocks: ["multiple-comparisons"],
    relatedPrinciples: ["survivorship-bias", "confirmation-bias", "base-rate-fallacy"],
    exercises: [{
      type: "multiple-choice",
      question: "Een krant vraagt lezers via een online poll: 'Gebruikt u nog steeds print media?' Wat is het probleem?",
      options: ["De vraag is onduidelijk", "Alleen online gebruikers kunnen stemmen, wat de steekproef scheef trekt", "Er zijn te weinig opties", "De krant is bevooroordeeld"],
      correct: 1,
      feedback: "Selectiebias: de mensen die de online poll invullen zijn per definitie online actief, wat de steekproef niet representatief maakt voor alle mediagebruikers."
    }],
    creativePrompt: "Bedenk een onderzoek waarbij de manier van dataverzameling de uitkomst systematisch zou vertekenen.",
    aiHelperPrompts: [
      "Wie vult enquêtes in en wie niet – en wat zegt dat over de resultaten?",
      "Hoe zou je een representatieve steekproef samenstellen voor jouw stad?",
      "Welke groepen worden in jouw vakgebied systematisch onderzocht of juist vergeten?"
    ]
  },
  {
    id: "bayes-theorem",
    title: "Stelling van Bayes",
    difficulty: 4,
    emoji: "🧮",
    academicCategory: "Statistiek",
    skillCategory: "Beter Redeneren",
    tags: ["Statistiek", "Kansrekening", "Bayes", "Beter Redeneren"],
    definition: "De kans dat een hypothese waar is, gegeven nieuw bewijs, hangt af van hoe waarschijnlijk de hypothese al was (prior) én hoe waarschijnlijk het bewijs is als de hypothese klopt. Nieuwe informatie updatet bestaande kansen.",
    abstractExample: "P(H|E) = P(E|H) × P(H) / P(E). Als een ziekte zeldzaam is (lage prior), kan een positieve test toch grotendeels fout-positief zijn – zelfs bij een nauwkeurige test.",
    examples: [
      { domain: "science", icon: "🔬", text: "Een medische test voor een zeldzame ziekte (1 op 1000) met 99% nauwkeurigheid geeft bij een positief resultaat toch maar ~9% kans op werkelijke ziekte." },
      { domain: "business", icon: "💼", text: "Een spamfilter leert op basis van Bayes: een mail met 'gratis geld' is na veel voorbeelden waarschijnlijk spam, ook al komt het woord soms in legitieme mails voor." },
      { domain: "daily", icon: "🏠", text: "Je hoort een knal buiten: is het een schot of een knallend uitlaatpijp? In een veilige wijk is de kans op uitlaatpijp veel groter – je prior speelt mee." }
    ],
    prerequisites: ["base-rate-fallacy", "law-of-large-numbers"],
    unlocks: [],
    relatedPrinciples: ["base-rate-fallacy", "confirmation-bias", "epistemic-humility"],
    exercises: [{
      type: "multiple-choice",
      question: "Een ziekte treft 1 op de 10.000 mensen. Een test is 99% nauwkeurig. Je test positief. Wat is de kans dat je de ziekte echt hebt?",
      options: ["99%", "Ongeveer 50%", "Minder dan 1%", "Precies 1%"],
      correct: 2,
      feedback: "Correct! De base rate is zo laag (0,01%) dat fout-positieven de echte positieven ver overtreffen. Bayes' theorem laat zien dat een positieve test hier maar ~1% kans op echte ziekte geeft."
    }],
    creativePrompt: "Beschrijf een situatie uit jouw leven waarbij je een conclusie trok op basis van bewijs, zonder de basiswaarschijnlijkheid mee te wegen.",
    aiHelperPrompts: [
      "Hoe zou je de kans inschatten dat een vreemde op straat gevaarlijk is?",
      "Wanneer heb jij eerder gedacht dat iets zeker was, terwijl de kans eigenlijk klein was?",
      "Hoe update je je mening als je nieuw bewijs krijgt?"
    ]
  },
  {
    id: "multiple-comparisons",
    title: "Meervoudige Vergelijkingen (p-hacking)",
    difficulty: 4,
    emoji: "🎲",
    academicCategory: "Statistiek",
    skillCategory: "Beter Redeneren",
    tags: ["Statistiek", "Onderzoek", "p-waarde", "Beter Redeneren"],
    definition: "Als je genoeg vergelijkingen maakt, vind je altijd wel iets 'statistisch significant' door puur toeval. Hoe meer je test, hoe groter de kans op vals alarm.",
    abstractExample: "Bij een significantieniveau van 5% en 20 onafhankelijke tests verwacht je gemiddeld 1 vals positief resultaat – puur door kans. Dit heet het meervoudig vergelijkingsprobleem.",
    examples: [
      { domain: "science", icon: "🔬", text: "Een onderzoeker test 50 voedingssupplementen op kankerrisico. Statistisch verwacht hij 2-3 'significante' verbanden puur door toeval, ook als geen enkel supplement echt werkt." },
      { domain: "business", icon: "💼", text: "Een A/B-test die te lang doorgaat en tientallen varianten test, vindt bijna altijd een 'winnaar' – maar de kans is groot dat dit toeval is." },
      { domain: "daily", icon: "🏠", text: "Zoek lang genoeg naar verbanden in sterrenbeelden en geboortedata, en je vindt altijd iets. Maar dat bewijst niets." }
    ],
    prerequisites: ["bayes-theorem", "falsification"],
    unlocks: [],
    relatedPrinciples: ["confirmation-bias", "survivorship-bias", "falsification"],
    exercises: [{
      type: "multiple-choice",
      question: "Een studie test 20 variabelen op samenhang met een ziekte en vindt 1 significant verband (p < 0.05). Hoe betrouwbaar is dit?",
      options: ["Zeer betrouwbaar – p < 0.05 is de norm", "Twijfelachtig – je verwacht toevallig 1 vals positief bij 20 tests", "Onbetrouwbaar – je moet altijd 100 tests doen", "Betrouwbaar als het verband logisch klinkt"],
      correct: 1,
      feedback: "Juist! Bij 20 tests verwacht je statistisch ~1 vals positief. Zonder correctie voor meervoudige vergelijkingen is het verband waarschijnlijk toeval."
    }],
    creativePrompt: "Bedenk een onderzoeksopzet waarbij p-hacking makkelijk kan optreden en hoe je dat zou voorkomen.",
    aiHelperPrompts: [
      "Heb je wel eens een studie gelezen waarbij heel veel dingen werden getest?",
      "Hoe zou jij controleren of een gevonden verband echt is of toeval?",
      "Waarom publiceren wetenschappelijke tijdschriften liever positieve dan negatieve resultaten?"
    ]
  },

  // ── RETORICA & DROGREDENEN ───────────────────────────────────
  {
    id: "appeal-to-authority",
    title: "Beroep op Autoriteit",
    difficulty: 2,
    emoji: "👑",
    academicCategory: "Retorica",
    skillCategory: "Beter Argumenteren",
    tags: ["Retorica", "Drogreden", "Autoriteit", "Beter Argumenteren"],
    definition: "Een argument is niet juist alleen omdat een autoriteit of expert het zegt. Autoriteit kan relevante expertise ondersteunen, maar vervangt geen bewijs en is feilbaar.",
    abstractExample: "'Professor X zegt Y, dus Y is waar.' Dit is een drogreden als de professor buiten zijn vakgebied spreekt, als experts het oneens zijn, of als de uitspraak los staat van bewijs.",
    examples: [
      { domain: "science", icon: "🔬", text: "Een Nobelprijswinnaar in de natuurkunde promoot vitamine C als kankerkuur – buiten zijn vakgebied, zonder klinisch bewijs." },
      { domain: "business", icon: "💼", text: "'Onze CEO zegt dat de markt herstelt, dus we investeren.' De CEO kan het mis hebben, ook al is hij succesvol." },
      { domain: "daily", icon: "🏠", text: "Een beroemde voetballer adviseert een dieet. Zijn succes op het veld maakt hem geen voedingsdeskundige." }
    ],
    prerequisites: ["ad-hominem"],
    unlocks: ["hasty-generalization"],
    relatedPrinciples: ["ad-hominem", "burden-of-proof", "epistemic-humility"],
    exercises: [{
      type: "multiple-choice",
      question: "Een arts beveelt een financieel product aan. Waarom is dit een zwak argument?",
      options: ["Artsen zijn onbetrouwbaar", "Medische expertise geeft geen financiële autoriteit", "Financiële producten zijn altijd slecht", "Artsen mogen geen advies geven"],
      correct: 1,
      feedback: "Juist! Autoriteit is alleen relevant binnen het vakgebied. Een arts heeft geen bijzondere financiële expertise, dus het beroep op zijn autoriteit is hier zwak."
    }],
    creativePrompt: "Beschrijf een situatie waarbij je iemands mening te zwaar of te licht woog vanwege hun status.",
    aiHelperPrompts: [
      "Wanneer vertrouw je een expert en wanneer niet?",
      "Heb je wel eens iets geloofd omdat een bekende figuur het zei?",
      "Hoe onderscheid je legitiem beroep op expertise van een drogreden?"
    ]
  },
  {
    id: "slippery-slope",
    title: "Het Hellende Vlak",
    difficulty: 2,
    emoji: "🎿",
    academicCategory: "Retorica",
    skillCategory: "Beter Argumenteren",
    tags: ["Retorica", "Drogreden", "Gevolgen", "Beter Argumenteren"],
    definition: "De bewering dat stap A onvermijdelijk tot catastrofale uitkomst Z leidt, zonder bewijs voor de tussenliggende stappen. De redenering gaat ervan uit dat kleine veranderingen een onstuitbare ketting in gang zetten.",
    abstractExample: "A→B→C→…→Z, waarbij elke stap als onvermijdelijk wordt voorgesteld zonder dat dit wordt onderbouwd. Het is een drogreden als de keten speculatief is.",
    examples: [
      { domain: "science", icon: "🔬", text: "'Als we genetische modificatie toestaan bij planten, eindigen we onvermijdelijk met genetisch gemanipuleerde mensen.' De stappen daartussen zijn verre van zeker." },
      { domain: "business", icon: "💼", text: "'Als we één thuiswerkdag toestaan, willen ze binnenkort helemaal niet meer op kantoor komen.' Geen bewijs dat deze stap onvermijdelijk is." },
      { domain: "daily", icon: "🏠", text: "'Als mijn kind één snoepje krijgt, wil het er altijd meer en krijgt het gaatjes.' Elke stap vereist onderbouwing." }
    ],
    prerequisites: ["straw-man-fallacy"],
    unlocks: [],
    relatedPrinciples: ["straw-man-fallacy", "false-dilemma", "post-hoc-ergo"],
    exercises: [{
      type: "multiple-choice",
      question: "Iemand zegt: 'Als we het minimumuurloon verhogen, gaan bedrijven failliet en stijgt de werkloosheid naar recordhoogte.' Wat ontbreekt in dit argument?",
      options: ["Een definitie van 'minimumuurloon'", "Bewijs voor de tussenliggende stappen", "Een alternatieve oplossing", "Statistieken over werkloosheid"],
      correct: 1,
      feedback: "Juist! Het hellende vlak presenteert een reeks stappen als onvermijdelijk zonder te onderbouwen waarom elke stap volgt uit de vorige."
    }],
    creativePrompt: "Bedenk een echt hellend-vlak-argument dat je hebt gehoord en analyseer welke stap het meest twijfelachtig was.",
    aiHelperPrompts: [
      "Welke politieke argumenten gebruik vaak het hellende vlak?",
      "Wanneer is een reeks gevolgen wél aannemelijk en wanneer is het speculatie?",
      "Hoe zou je iemand overtuigen dat een kleine stap niet automatisch tot rampen leidt?"
    ]
  },
  {
    id: "hasty-generalization",
    title: "Overhaaste Generalisatie",
    difficulty: 2,
    emoji: "🏃",
    academicCategory: "Retorica",
    skillCategory: "Beter Argumenteren",
    tags: ["Retorica", "Drogreden", "Generalisatie", "Beter Argumenteren"],
    definition: "Een algemene conclusie trekken op basis van te weinig of niet-representatieve voorbeelden. De steekproef is te klein of te eenzijdig om de conclusie te dragen.",
    abstractExample: "Uit n gevallen (waarbij n te klein of niet-representatief is) wordt een universele of brede regel afgeleid. Hoe kleiner of schefer de steekproef, hoe zwakker de generalisatie.",
    examples: [
      { domain: "science", icon: "🔬", text: "Twee patiënten reageerden goed op een behandeling → 'De behandeling werkt.' Twee gevallen zijn onvoldoende bewijs voor een algemene conclusie." },
      { domain: "business", icon: "💼", text: "Drie klanten klaagden over de app → 'Alle gebruikers haten de nieuwe interface.' Drie klachten weerspiegelen niet alle gebruikers." },
      { domain: "daily", icon: "🏠", text: "Twee slechte ervaringen met een nationaliteit → stereotypering van miljoenen mensen op basis van twee gevallen." }
    ],
    prerequisites: ["appeal-to-authority", "law-of-large-numbers"],
    unlocks: [],
    relatedPrinciples: ["availability-heuristic", "confirmation-bias", "law-of-large-numbers"],
    exercises: [{
      type: "multiple-choice",
      question: "Je spreekt drie enthousiastelingen op een beurs en concludeert: 'De markt is klaar voor ons product.' Wat is het probleem?",
      options: ["Beursbezoekers zijn altijd enthousiast", "Drie enthousiaste personen zijn geen representatieve steekproef", "Je had meer beurzen moeten bezoeken", "Enthousiastelingen kopen niet altijd"],
      correct: 1,
      feedback: "Overhaaste generalisatie: beursbezoekers zijn al geselecteerd op interesse. Drie reacties zeggen weinig over de bredere markt."
    }],
    creativePrompt: "Beschrijf een moment waarop je (of iemand anders) een te brede conclusie trok op basis van een paar voorbeelden.",
    aiHelperPrompts: [
      "Hoe groot moet een groep zijn voordat je er een conclusie uit kunt trekken?",
      "Wanneer is een anekdote nuttig en wanneer misleidend?",
      "Hoe zou je controleren of jouw ervaringen representatief zijn?"
    ]
  },
  {
    id: "tu-quoque",
    title: "Tu Quoque (Jij Ook!)",
    difficulty: 2,
    emoji: "☝️",
    academicCategory: "Retorica",
    skillCategory: "Beter Argumenteren",
    tags: ["Retorica", "Drogreden", "Argumentatie", "Beter Argumenteren"],
    definition: "Een argument verwerpen door te wijzen op inconsequent gedrag van de spreker, in plaats van op de inhoud van het argument in te gaan. 'Jij doet het zelf ook' weerlegde niets.",
    abstractExample: "Persoon A stelt claim C. Persoon B wijst op inconsistentie van A. Conclusie: C is onjuist. Dit is ongeldig: de waarheid van C hangt niet af van het gedrag van A.",
    examples: [
      { domain: "science", icon: "🔬", text: "'Jij rijdt zelf ook auto, dus jij mag niks zeggen over CO₂-uitstoot.' Het argument over klimaat is onafhankelijk van het rijgedrag van de spreker." },
      { domain: "business", icon: "💼", text: "'Jij hebt ook wel eens een deadline gemist, dus jij kunt mij niet aanspreken.' De kritiek op de deadline-mislukking staat los van de verleden fouten van de criticaster." },
      { domain: "daily", icon: "🏠", text: "Ouder: 'Rook niet.' Kind: 'Jij rookte vroeger ook.' Het verleden van de ouder maakt het advies niet minder valide." }
    ],
    prerequisites: ["ad-hominem"],
    unlocks: [],
    relatedPrinciples: ["ad-hominem", "straw-man-fallacy", "burden-of-proof"],
    exercises: [{
      type: "multiple-choice",
      question: "Een politicus pleit voor belastingverlaging. Tegenstander: 'Jij betaalt zelf ook weinig belasting!' Wat is het probleem met dit antwoord?",
      options: ["Het is een leugen", "Het gaat niet in op de inhoud van het argument", "De politicus heeft gelijk", "Dit is een geldige weerlegging"],
      correct: 1,
      feedback: "Tu quoque: het wijzen op het gedrag van de politicus zegt niets over de inhoud van zijn voorstel. Goede of slechte argumenten staan los van wie ze brengt."
    }],
    creativePrompt: "Denk aan een debat of discussie waarbij iemand de inhoud ontweek door te wijzen op inconsistent gedrag.",
    aiHelperPrompts: [
      "Heb je wel eens een discussie meegemaakt die verzandde in 'maar jij doet het ook'?",
      "Hoe kun je een tu-quoque herkennen en er effectief op reageren?",
      "Wanneer is het wél relevant om te wijzen op inconsistent gedrag?"
    ]
  },
  {
    id: "appeal-to-nature",
    title: "Beroep op de Natuur",
    difficulty: 2,
    emoji: "🌿",
    academicCategory: "Retorica",
    skillCategory: "Beter Argumenteren",
    tags: ["Retorica", "Drogreden", "Natuur", "Beter Argumenteren"],
    definition: "De aanname dat iets goed is omdat het 'natuurlijk' is, of slecht omdat het 'kunstmatig' is. Natuurlijk en kunstmatig zeggen op zichzelf niets over veiligheid, waarde of wenselijkheid.",
    abstractExample: "Premisse: X is natuurlijk. Conclusie: X is goed/veilig/gewenst. Dit is een drogreden: veel natuurlijke dingen zijn gevaarlijk (gif, bacteriën) en veel kunstmatige dingen zijn nuttig (vaccins, brillen).",
    examples: [
      { domain: "science", icon: "🔬", text: "'Kruiden zijn natuurlijk, dus veiliger dan medicijnen.' Arseen is ook natuurlijk. Veiligheid hangt af van werking en dosering, niet van herkomst." },
      { domain: "business", icon: "💼", text: "Marketingterm 'natuurlijk' of '100% puur' impliceert kwaliteit, maar zegt niets over effectiviteit of veiligheid." },
      { domain: "daily", icon: "🏠", text: "'Thuisbevallen is natuurlijker dan in het ziekenhuis.' Natuurlijkheid zegt niets over veiligheid voor moeder en kind." }
    ],
    prerequisites: ["straw-man-fallacy"],
    unlocks: [],
    relatedPrinciples: ["appeal-to-authority", "hasty-generalization", "confirmation-bias"],
    exercises: [{
      type: "multiple-choice",
      question: "Iemand zegt: 'Dit supplement is puur plantaardig en dus volkomen veilig.' Wat is de fout?",
      options: ["Supplementen zijn altijd gevaarlijk", "Plantaardig/natuurlijk garandeert geen veiligheid", "De claim is waarschijnlijk juist", "Je moet het zelf proberen"],
      correct: 1,
      feedback: "Beroep op de natuur: plantaardig of natuurlijk zegt niets over veiligheid of effectiviteit. Nicotine, ricine en berenklauw zijn ook plantaardig."
    }],
    creativePrompt: "Noem drie 'natuurlijke' dingen die schadelijk zijn en drie 'kunstmatige' dingen die nuttig zijn.",
    aiHelperPrompts: [
      "Welke producten in jouw omgeving worden verkocht op basis van 'natuurlijkheid'?",
      "Hoe zou je iemand overtuigen dat 'natuurlijk' niet automatisch beter is?",
      "Wanneer is de herkomst (natuur vs. lab) wél relevant?"
    ]
  }
];
