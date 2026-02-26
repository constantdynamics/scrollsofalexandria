// Extra 85 principles – batch 1 of 3 (principles 1-28)

export const extraPrinciples1 = [
  // ── LOGICA ──────────────────────────────────────────────────
  {
    id: "modus-tollens",
    title: "Modus Tollens",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    tags: ["Logica", "Deductie", "Redeneren", "Beter Argumenteren"],
    definition: "Als A dan B. B is niet waar. Dus is A ook niet waar. De contrapositive van modus ponens: door het gevolg te ontkennen, ontken je de oorzaak.",
    abstractExample: "Gegeven P→Q en ¬Q, volgt ¬P. Als we weten dat B niet waar is en dat A altijd B veroorzaakt, kan A ook niet gelden.",
    examples: [
      { domain: "science", icon: "🔬", text: "Als de theorie klopt, moeten we röntgenstraling meten. We meten niks. Dus klopt de theorie niet." },
      { domain: "daily", icon: "🏠", text: "Als de winkel open is, brandt het licht. Het licht is uit. Dus is de winkel dicht." },
      { domain: "business", icon: "💼", text: "Als de campagne werkte, stijgen de verkopen. Ze zijn niet gestegen. Dus heeft de campagne niet gewerkt." }
    ],
    prerequisites: ["modus-ponens"],
    unlocks: ["contrapositive", "falsification"],
    relatedPrinciples: ["modus-ponens", "falsification", "deduction-induction"],
    exercises: [{
      type: "multiple-choice",
      question: "Gegeven: 'Als het vriest, glijdt de weg.' De weg glijdt niet. Wat volgt via modus tollens?",
      options: ["Het vriest", "Het vriest niet", "De weg is droog", "We weten het niet"],
      correct: 1,
      feedback: "Juist! Modus tollens: als Q niet geldt en P→Q, dan geldt P ook niet. De weg glijdt niet → het vriest niet."
    }],
    creativePrompt: "Bedenk een 'als-dan' regel en gebruik modus tollens om iets te weerleggen.",
    aiHelperPrompts: ["Denk aan een wetenschappelijk experiment dat een theorie weerlegt.", "Wanneer bewees een ontbrekend resultaat dat een aanname fout was?", "Hoe sluit je iets uit door te kijken wat er níet is?"]
  },
  {
    id: "necessary-sufficient",
    title: "Noodzakelijke vs. Voldoende Voorwaarden",
    difficulty: 2,
    emoji: "🔑",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    tags: ["Logica", "Causaliteit", "Redeneren", "Beter Argumenteren"],
    definition: "Een noodzakelijke voorwaarde moet aanwezig zijn voor X, maar garandeert X niet. Een voldoende voorwaarde garandeert X, maar X kan ook zonder haar optreden.",
    abstractExample: "Zuurstof is noodzakelijk voor vuur (geen zuurstof = geen vuur), maar niet voldoende (zuurstof ≠ automatisch vuur). Een lucifer aansteken is voldoende voor vuur, maar niet noodzakelijk.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Water is noodzakelijk om te leven, maar niet voldoende: je hebt ook voedsel, lucht, etc." },
      { domain: "business", icon: "💼", text: "Hard werken is noodzakelijk voor succes, maar niet voldoende – je hebt ook talent, netwerk en timing nodig." },
      { domain: "science", icon: "🔬", text: "Een hypothese hebben is noodzakelijk voor wetenschap, maar niet voldoende – je moet hem ook testen." }
    ],
    prerequisites: ["set-theory-basics"],
    unlocks: ["cause-reason"],
    relatedPrinciples: ["modus-ponens", "deduction-induction", "correlation-causation"],
    exercises: [{
      type: "multiple-choice",
      question: "Een diploma is noodzakelijk voor de baan. Jan heeft een diploma. Krijgt Jan de baan?",
      options: ["Ja, want het diploma is vereist", "Niet per se – het is noodzakelijk, maar misschien niet voldoende", "Nee, hij mist iets", "Ja, het is voldoende bewijs"],
      correct: 1,
      feedback: "Precies! Een noodzakelijke voorwaarde is verplicht maar niet automatisch genoeg. Er kunnen andere eisen zijn."
    }],
    creativePrompt: "Noem iets wat noodzakelijk maar niet voldoende is voor iets dat jij wil bereiken.",
    aiHelperPrompts: ["Denk aan de minimumvereisten voor een doel.", "Wat heb je sowieso nodig, maar is dat ook genoeg?", "Wanneer had iemand aan alle minimumvereisten voldaan maar toch het doel niet behaald?"]
  },
  {
    id: "reductio-ad-absurdum",
    title: "Reductio ad Absurdum",
    difficulty: 2,
    emoji: "🎭",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    tags: ["Logica", "Bewijsvoering", "Redeneren", "Beter Argumenteren"],
    definition: "Een bewijs- of weerleggingsmethode waarbij je aanneemt dat het tegendeel waar is en vervolgens aantoont dat dit leidt tot een onmogelijke of absurde conclusie.",
    abstractExample: "Om P te bewijzen: stel ¬P. Leidt ¬P tot een contradictie (¬P → absurditeit), dan moet P wel waar zijn.",
    examples: [
      { domain: "science", icon: "🔬", text: "Bewijs dat √2 irrationeel is: stel dat √2 = p/q (volledig vereenvoudigd). Dan volgt p² = 2q², dus p is even → p = 2k → 4k² = 2q² → q is ook even. Maar dan is p/q niet vereenvoudigd – tegenspraak!" },
      { domain: "politics", icon: "🏛️", text: "Als iedereen het recht heeft om altijd te liegen, zou 'ik lieg nooit' ook een leugen kunnen zijn – wat zichzelf tegenspreekt." },
      { domain: "daily", icon: "🏠", text: "Als niemand verantwoordelijk is, is ook de regel 'niemand is verantwoordelijk' van niemand afkomstig – een tegenspraak." }
    ],
    prerequisites: ["modus-ponens"],
    unlocks: [],
    relatedPrinciples: ["modus-tollens", "falsification", "deduction-induction"],
    exercises: [{
      type: "multiple-choice",
      question: "Je wil bewijzen dat er oneindig veel priemgetallen zijn. Je begint met: 'Stel er zijn maar eindig veel priemgetallen.' Wat doe je dan?",
      options: ["Je toont direct aan dat dit waar is", "Je leidt hieruit een tegenspraak af om het tegendeel te bewijzen", "Je zoekt een tegenvoorbeeld", "Je gebruikt inductie"],
      correct: 1,
      feedback: "Correct! Bij reductio ad absurdum neem je het tegendeel aan en toon je aan dat dit tot een onmogelijkheid leidt."
    }],
    creativePrompt: "Bedenk een alledaagse situatie waar je door het tegendeel aan te nemen kunt aantonen dat iets absurd is.",
    aiHelperPrompts: ["Denk aan regels die zichzelf tegenspreken als je ze universeel toepast.", "Wat gebeurt er als iedereen tegelijk hetzelfde doet – leidt dat tot chaos?", "Wanneer bewees een absurde conclusie dat een aanname fout was?"]
  },
  {
    id: "contrapositive",
    title: "Contrapositief",
    difficulty: 2,
    emoji: "↔️",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    tags: ["Logica", "Equivalentie", "Redeneren", "Beter Argumenteren"],
    definition: "'Als P dan Q' is logisch equivalent aan 'Als niet-Q dan niet-P'. De contrapositieve stelling heeft dezelfde waarheidswaarde als de originele.",
    abstractExample: "P→Q ≡ ¬Q→¬P. Je kunt een uitspraak bewijzen via de contrapositieve: in plaats van te bewijzen dat P tot Q leidt, bewijs je dat het ontbreken van Q het ontbreken van P impliceert.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'Als het een zoogdier is, dan is het warmbloedig' ≡ 'Als het niet warmbloedig is, is het geen zoogdier'." },
      { domain: "business", icon: "💼", text: "'Als het product aan de norm voldoet, mag het de markt op' ≡ 'Als het de markt niet op mag, voldoet het niet aan de norm'." },
      { domain: "science", icon: "🔬", text: "'Als experiment X slaagt, klopt theorie T' ≡ 'Als theorie T niet klopt, slaagt experiment X niet'." }
    ],
    prerequisites: ["modus-tollens"],
    unlocks: [],
    relatedPrinciples: ["modus-tollens", "modus-ponens", "necessary-sufficient"],
    exercises: [{
      type: "multiple-choice",
      question: "Wat is de contrapositieve van: 'Als je lid bent, krijg je korting'?",
      options: ["Als je geen korting krijgt, ben je geen lid", "Als je geen lid bent, krijg je geen korting", "Als je korting krijgt, ben je lid", "Alle leden krijgen korting"],
      correct: 0,
      feedback: "Juist! P→Q wordt ¬Q→¬P. 'Geen korting → geen lid' is logisch equivalent aan de originele stelling."
    }],
    creativePrompt: "Herschrijf een regel die je kent als de contrapositieve ervan.",
    aiHelperPrompts: ["Welke regels ken je die je ook achterstevoren kunt lezen?", "Hoe kun je bewijzen dat iets geldt door het omgekeerde te weerleggen?", "Geef een voorbeeld van een wet of beleid en formuleer de contrapositieve."]
  },
  {
    id: "denying-antecedent",
    title: "Denying the Antecedent (Denkfout)",
    difficulty: 2,
    emoji: "🚫",
    academicCategory: "Logica",
    skillCategory: "Manipulatie Herkennen",
    tags: ["Logica", "Fallacy", "Redeneerfouten", "Manipulatie Herkennen"],
    definition: "De fout om te concluderen dat als de voorwaarde (A) niet geldt, het gevolg (B) ook niet kan gelden. Maar B kan ook via andere wegen waar worden.",
    abstractExample: "Als P dan Q. Niet P. Foutieve conclusie: dus niet Q. Dit is ongeldig – Q kan via een andere weg optreden.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Fout: 'Als het regent, is de straat nat. Het regent niet. Dus is de straat niet nat.' – Iemand kan ook water over de straat gegoten hebben." },
      { domain: "business", icon: "💼", text: "Fout: 'Als we adverteren stijgen de verkopen. We adverteren niet. Dus stijgen de verkopen niet.' – Er zijn andere manieren om verkopen te stimuleren." },
      { domain: "politics", icon: "🏛️", text: "Fout: 'Als er een crisis is, stijgen de belastingen. Er is geen crisis. Dus stijgen de belastingen niet.' – Er zijn andere redenen voor belastingverhogingen." }
    ],
    prerequisites: ["modus-ponens"],
    unlocks: [],
    relatedPrinciples: ["affirming-consequent", "modus-tollens", "necessary-sufficient"],
    exercises: [{
      type: "multiple-choice",
      question: "Welke redenering is 'denying the antecedent'?",
      options: [
        "Als A dan B. A is waar. Dus B.",
        "Als A dan B. B is niet waar. Dus niet A.",
        "Als A dan B. A is niet waar. Dus niet B.",
        "Als A dan B. B is waar. Dus A."
      ],
      correct: 2,
      feedback: "Correct! Optie 3 is de fout: alleen omdat A niet geldt, mag je niet concluderen dat B ook niet geldt. B kan andere oorzaken hebben."
    }],
    creativePrompt: "Bedenk een regel waarbij het ontbreken van de oorzaak ten onrechte als bewijs wordt gezien dat het gevolg ook uitblijft.",
    aiHelperPrompts: ["Denk aan situaties met meerdere oorzaken voor hetzelfde gevolg.", "Heb je wel eens geconcludeerd dat iets niet zou gebeuren omdat de 'normale' oorzaak ontbrak?", "Welke alternatieven bestaan er voor de meest voor de hand liggende oorzaak?"]
  },
  // ── EPISTEMOLOGIE ────────────────────────────────────────────
  {
    id: "occams-razor",
    title: "Occam's Razor (Spaarzaamheidsbeginsel)",
    difficulty: 1,
    emoji: "✂️",
    academicCategory: "Epistemologie",
    skillCategory: "Patronen Zien",
    tags: ["Epistemologie", "Wetenschap", "Redeneren", "Patronen Zien"],
    definition: "De eenvoudigste verklaring die de feiten verklaart, is bij voorkeur de juiste. Vermenigvuldig geen verklarende entiteiten meer dan noodzakelijk.",
    abstractExample: "Als verklaring A alle feiten verklaart met 2 aannames en verklaring B hetzelfde doet met 5 aannames, is A bij voorkeur juist – tenzij er goede redenen zijn voor die extra aannames.",
    examples: [
      { domain: "daily", icon: "🏠", text: "De auto start niet. Occam: controleer eerst de accu. Niet: ga meteen uit van een complex elektrisch defect." },
      { domain: "science", icon: "🔬", text: "Hemellichamen bewegen in ellipsen. De eenvoudigste verklaring (zwaartekracht) wint van complexe epicykels." },
      { domain: "business", icon: "💼", text: "Verkoop daalt na productwijziging. Occam: de wijziging is waarschijnlijk de oorzaak – niet een samenloop van macro-economie, seizoen én concurrentie." }
    ],
    prerequisites: [],
    unlocks: ["falsification"],
    relatedPrinciples: ["falsification", "burden-of-proof", "correlation-causation"],
    exercises: [{
      type: "multiple-choice",
      question: "Je hoort een geluid in de nacht. Occam's Razor zou welke verklaring verkiezen?",
      options: ["Een inbreker die geavanceerde technieken gebruikt", "De kat die van een stoel valt", "Een onbekend fenomeen", "Een buurman met een tunnel"],
      correct: 1,
      feedback: "Juist! De eenvoudigste verklaring (kat) vereist de minste aannames en is statistisch het meest waarschijnlijk."
    }],
    creativePrompt: "Beschrijf een situatie waar je een ingewikkelde verklaring gaf voor iets wat een eenvoudigere oorzaak bleek te hebben.",
    aiHelperPrompts: ["Wanneer zocht je een complexe oplossing terwijl de simpele oplossing voor de hand lag?", "Hoe vaak bleek de meest voor de hand liggende verklaring de juiste?", "Bedenk een voorbeeld waar extra aannames onnodig waren."]
  },
  {
    id: "falsification",
    title: "Falsificeerbaarheid (Popper)",
    difficulty: 2,
    emoji: "🧪",
    academicCategory: "Epistemologie",
    skillCategory: "Causale Verbanden Begrijpen",
    tags: ["Wetenschap", "Epistemologie", "Kritisch Denken", "Causale Verbanden Begrijpen"],
    definition: "Een wetenschappelijke theorie moet in principe weerlegbaar zijn door observaties. Als geen enkele mogelijke waarneming de theorie kan weerleggen, is het geen wetenschap maar onweerlegbaar geloof.",
    abstractExample: "Een goede theorie T maakt voorspelling P die getest kan worden. Als P niet uitkomt, is T weerlegd. Een theorie die elke uitkomst 'verklaard', is niet falsifieerbaar.",
    examples: [
      { domain: "science", icon: "🔬", text: "Einstein: 'Als zwaartekracht licht buigt, zie je sterren verschoven tijdens een zonsverduistering.' Dit werd in 1919 getest – en klopte. Falsifieerbaar en bevestigd." },
      { domain: "daily", icon: "🏠", text: "Onweerlegbaar: 'De goden doen wat ze willen – succes én falen zijn hun wil.' Geen observatie kan dit weerleggen, dus het is geen wetenschappelijke claim." },
      { domain: "business", icon: "💼", text: "Goed: 'Onze nieuwe marketing verhoogt conversie met 10%.' Testbaar en dus falsifieerbaar. Slecht: 'Ons product is voor altijd revolutionair.' – niet toetsbaar." }
    ],
    prerequisites: ["occams-razor"],
    unlocks: ["scientific-method"],
    relatedPrinciples: ["scientific-method", "modus-tollens", "deduction-induction"],
    exercises: [{
      type: "multiple-choice",
      question: "Welke uitspraak is NIET falsifieerbaar?",
      options: [
        "Water kookt bij 100°C op zeeniveau",
        "Alles wat gebeurt, heeft een reden – ook al weten we die niet",
        "Dit medicijn verlaagt bloeddruk bij 80% van de patiënten",
        "Metalen zetten uit bij verhitting"
      ],
      correct: 1,
      feedback: "Juist! 'Alles heeft een reden – ook al weten we die niet' kan nooit weerlegd worden. Geen enkele observatie kan het ontkrachten."
    }],
    creativePrompt: "Bedenk een overtuiging die je hebt. Welke observatie zou jou van het tegendeel overtuigen?",
    aiHelperPrompts: ["Wat zou jou van een bepaalde mening kunnen overtuigen?", "Zijn er overtuigingen die jij koestert die niet falsifieerbaar zijn?", "Hoe verschilt een wetenschappelijke claim van een geloofsovertuiging?"]
  },
  {
    id: "burden-of-proof",
    title: "Bewijslast (Burden of Proof)",
    difficulty: 1,
    emoji: "⚖️",
    academicCategory: "Epistemologie",
    skillCategory: "Beter Argumenteren",
    tags: ["Logica", "Argumentatie", "Epistemologie", "Beter Argumenteren"],
    definition: "Wie een claim maakt, draagt de bewijslast. Je hoeft iets niet te weerleggen alleen omdat iemand het beweert – de bewering zelf moet onderbouwd worden.",
    abstractExample: "Als iemand P beweert, is het aan hen om P te onderbouwen. Het is niet aan de ontvanger om ¬P te bewijzen. Afwezigheid van bewijs voor ¬P is geen bewijs voor P.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Iemand zegt: 'Thee met honing geneest verkoudheid.' De bewijslast ligt bij hen, niet bij jou om het tegendeel te bewijzen." },
      { domain: "business", icon: "💼", text: "'Ons product geeft u energie!' – het bedrijf moet dit aantonen. Jij hoeft niet te bewijzen dat het niet werkt." },
      { domain: "politics", icon: "🏛️", text: "'De overheid verspilt al ons belastinggeld.' De spreker moet dit aantonen met cijfers, niet de luisteraar het tegendeel." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["occams-razor", "falsification", "ad-hominem"],
    exercises: [{
      type: "multiple-choice",
      question: "Iemand zegt: 'Astrologische sterrenbeelden bepalen je persoonlijkheid. Bewijs maar dat het NIET zo is!' Wat klopt hieraan niet?",
      options: ["De stelling is interessant en het waard om te onderzoeken", "De bewijslast ligt bij de persoon die de claim maakt, niet bij jou", "Je moet inderdaad het tegendeel bewijzen", "Astrologie is wetenschap"],
      correct: 1,
      feedback: "Precies! Wie een claim maakt, draagt de bewijslast. Je hoeft niet aan te tonen dat iets NIET bestaat; zij moeten aantonen dat het WEL bestaat."
    }],
    creativePrompt: "Beschrijf een situatie waarin iemand een bijzondere claim deed en de bewijslast omgooide.",
    aiHelperPrompts: ["Wanneer moest jij iets ontkrachten terwijl de ander nooit bewijs leverde?", "Hoe reageer je als iemand zegt: 'Bewijs maar dat ik ongelijk heb'?", "Welke claims hoor je regelmatig zonder dat er bewijs bij geleverd wordt?"]
  },
  {
    id: "black-swan",
    title: "Zwarte Zwaan (Black Swan)",
    difficulty: 2,
    emoji: "🦢",
    academicCategory: "Epistemologie",
    skillCategory: "Beslissingen Nemen",
    tags: ["Epistemologie", "Risico", "Onzekerheid", "Beslissingen Nemen"],
    definition: "Een onverwachte gebeurtenis met enorme impact die achteraf 'voorspelbaar' lijkt. Zwarte zwaan-theorie (Taleb) stelt dat zulke zeldzame maar impactvolle uitschieters de geschiedenis bepalen.",
    abstractExample: "Een zwarte zwaan is: 1) een uitbijter buiten normale verwachtingen, 2) met enorme gevolgen, 3) die achteraf geconstrueerd verklaarbaar lijkt. Eens leefde men in de veronderstelling dat alle zwanen wit zijn – tot men Australië ontdekte.",
    examples: [
      { domain: "business", icon: "💼", text: "De opkomst van internet, 9/11 of de financiële crisis van 2008 waren onverwacht maar veroverden de wereld compleet." },
      { domain: "science", icon: "🔬", text: "De ontdekking van penicilline was een zwarte zwaan: een bacteriekweek werd 'verpest' door schimmel – en dat redde miljoenen levens." },
      { domain: "politics", icon: "🏛️", text: "De val van de Berlijnse Muur in 1989 was voor nagenoeg iedereen onverwacht – maar had enorme gevolgen." }
    ],
    prerequisites: ["deduction-induction"],
    unlocks: [],
    relatedPrinciples: ["falsification", "base-rate-fallacy", "availability-heuristic"],
    exercises: [{
      type: "multiple-choice",
      question: "Wat is een kenmerk van een 'zwarte zwaan' gebeurtenis?",
      options: ["Ze zijn voorspeld door experts", "Ze hebben weinig langdurige gevolgen", "Ze zijn achteraf makkelijk te verklaren maar vooraf onvoorzienbaar", "Ze komen regelmatig voor"],
      correct: 2,
      feedback: "Juist! Zwarte zwaan-gebeurtenissen zijn achteraf begrijpelijk ('natuurlijk, zo moest het gaan') maar waren vooraf nagenoeg onvoorzienbaar."
    }],
    creativePrompt: "Bedenk een voorbeeld uit je leven of de geschiedenis van een zwarte zwaan – iets volledig onverwachts dat alles veranderde.",
    aiHelperPrompts: ["Welke technologie, uitvinding of gebeurtenis veranderde alles en was moeilijk te voorspellen?", "Heb je zelf een onverwachte wending meegemaakt die alles anders maakte?", "Hoe kun je je voorbereiden op het onvoorzienbare?"]
  },
  {
    id: "base-rate-fallacy",
    title: "Base Rate Fallacy",
    difficulty: 2,
    emoji: "📉",
    academicCategory: "Epistemologie",
    skillCategory: "Causale Verbanden Begrijpen",
    tags: ["Statistiek", "Cognitieve Bias", "Besluitvorming", "Causale Verbanden Begrijpen"],
    definition: "De neiging om basispercentages (hoe vaak iets voorkomt in de populatie) te negeren en teveel gewicht te geven aan specifieke informatie over een geval.",
    abstractExample: "Als een test 99% accuraat is maar de ziekte slechts 0,1% van de bevolking treft, is een positieve test nog steeds vaker een vals-positief dan een echte ziekte.",
    examples: [
      { domain: "science", icon: "🔬", text: "Een drugstest is 99% accuraat. Slechts 1% van atleten gebruikt drugs. Als je positief test, is de kans ~50% dat het vals-positief is. Het basispercentage (1%) matcht." },
      { domain: "daily", icon: "🏠", text: "Je hoort dat iemand je beschrijft als 'stil en nauwkeurig'. Je denkt: bibliotheekmedewerker. Maar er zijn véél meer boekhoudkundige medewerkers dan bibliotheekmedewerkers." },
      { domain: "business", icon: "💼", text: "95% van de startups mislukt. Dat je een gepassioneerde ondernemer bent, verandert het basispercentage niet." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["availability-heuristic", "representativeness-heuristic", "correlation-causation"],
    exercises: [{
      type: "multiple-choice",
      question: "Een test voor een zeldzame ziekte (prevalentie 1%) is 95% accuraat. Je test positief. Hoe groot is de kans dat je de ziekte hebt?",
      options: ["Bijna 95%", "Bijna zeker", "Minder dan 20% – het basispercentage telt mee", "50/50"],
      correct: 2,
      feedback: "Correct! Door het lage basispercentage (1%) zijn er bij 10.000 mensen ~100 echte zieken (95 gedetecteerd) maar ook ~495 vals-positieven. De kans is < 20%."
    }],
    creativePrompt: "Bedenk een situatie waarin je een individueel geval beoordeelde zonder aan het achterliggende percentage te denken.",
    aiHelperPrompts: ["Hoe vaak denk je na over hoe zeldzaam of gewoon iets is voordat je een conclusie trekt?", "Welke aannames maak je over kansen zonder de basisprevalentie te kennen?", "Wanneer overrompelde specifieke informatie je bredere statistische kennis?"]
  },
  {
    id: "scientific-method",
    title: "Wetenschappelijke Methode",
    difficulty: 2,
    emoji: "🔭",
    academicCategory: "Epistemologie",
    skillCategory: "Causale Verbanden Begrijpen",
    tags: ["Wetenschap", "Epistemologie", "Methodologie", "Causale Verbanden Begrijpen"],
    definition: "Een systematische aanpak voor kennisverwerving: observeren, hypothese formuleren, voorspellingen doen, testen, resultaten analyseren en conclusies herzien op basis van bewijs.",
    abstractExample: "1) Observeer fenomeen X. 2) Formuleer hypothese H die X verklaart. 3) Leid testbare voorspelling P af. 4) Voer experiment uit. 5) Vergelijk resultaat met P. 6) Verwerp of verfijn H.",
    examples: [
      { domain: "science", icon: "🔬", text: "Semmelweis observeerde dat minder vrouwen stierven als artsen handen wasten. Hypothese: microben veroorzaken infecties. Test: handenwassen invoeren. Resultaat: sterftecijfer daalde drastisch." },
      { domain: "business", icon: "💼", text: "A/B-testen is de wetenschappelijke methode in actie: hypothese (versie B converteert beter), experiment, meting, conclusie." },
      { domain: "daily", icon: "🏠", text: "Je slaapt slecht. Hypothese: koffie 's middags is de oorzaak. Test: 2 weken geen koffie na 14u. Observeer slaapkwaliteit. Conclusie baseren op resultaat." }
    ],
    prerequisites: ["falsification", "deduction-induction"],
    unlocks: [],
    relatedPrinciples: ["falsification", "correlation-causation", "occams-razor"],
    exercises: [{
      type: "multiple-choice",
      question: "Wat is de juiste volgorde van de wetenschappelijke methode?",
      options: [
        "Conclusie → hypothese → experiment → observatie",
        "Observatie → hypothese → experiment → conclusie",
        "Hypothese → conclusie → observatie → experiment",
        "Experiment → observatie → hypothese → conclusie"
      ],
      correct: 1,
      feedback: "Juist! Je begint met observeren, stelt een hypothese op, test die met een experiment en trekt een conclusie."
    }],
    creativePrompt: "Beschrijf een alledaags probleem dat je kunt aanpakken met de wetenschappelijke methode.",
    aiHelperPrompts: ["Welk probleem in je leven zou je systematisch kunnen testen?", "Hoe zou je een hypothese over je gewoonten testen?", "Wanneer heb je informeel de wetenschappelijke methode toegepast?"]
  },
  {
    id: "epistemic-humility",
    title: "Epistemische Bescheidenheid",
    difficulty: 2,
    emoji: "🙏",
    academicCategory: "Epistemologie",
    skillCategory: "Beslissingen Nemen",
    tags: ["Epistemologie", "Filosofie", "Kritisch Denken", "Beslissingen Nemen"],
    definition: "De erkenning dat onze kennis altijd beperkt, feilbaar en gekleurd is door onze positie, cultuur en ervaring. Goede denkers zijn bereid hun overtuigingen te herzien bij nieuwe informatie.",
    abstractExample: "We weten wat we weten, maar er is altijd meer we niet weten dan wat we wel weten. Epistemische bescheidenheid = bewust zijn van de grenzen van je eigen kennis.",
    examples: [
      { domain: "science", icon: "🔬", text: "Newton's mechanica was revolutionair en 'zeker', totdat Einstein aantoonde dat het slechts een benadering is bij lage snelheden." },
      { domain: "politics", icon: "🏛️", text: "Historisch 'zekere' opvattingen over ras, gender of religie zijn herhaaldelijk herzien naarmate de wereld meer leerde." },
      { domain: "daily", icon: "🏠", text: "Een goede arts zegt: 'Op basis van de huidige kennis adviseer ik X. Als nieuwe studies iets anders wijzen, herzien we het.' Dat is epistemische bescheidenheid." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["falsification", "confirmation-bias", "dunning-kruger"],
    exercises: [{
      type: "multiple-choice",
      question: "Welk gedrag toont epistemische bescheidenheid?",
      options: [
        "Vastbesloten blijven bij je mening ondanks tegenbewijs",
        "Je overtuigingen herzien als er sterk bewijs tegen is",
        "Anderen overtuigen van jouw gelijk",
        "Nooit een mening hebben om fouten te vermijden"
      ],
      correct: 1,
      feedback: "Precies! Epistemische bescheidenheid betekent open staan voor herziening – niet twijfelen aan alles, maar bereid zijn te leren."
    }],
    creativePrompt: "Beschrijf een mening die je ooit sterk hield maar op basis van nieuwe informatie hebt herzien.",
    aiHelperPrompts: ["Welke overtuigingen heb je bijgesteld na nieuwe ervaringen?", "Op welke gebieden weet je dat je blinde vlekken hebt?", "Hoe vraag je anderen om je overtuigingen te challengen?"]
  },
  // ── BEHAVIORAL ECONOMICS ─────────────────────────────────────
  {
    id: "loss-aversion",
    title: "Verliesaversie (Loss Aversion)",
    difficulty: 1,
    emoji: "😨",
    academicCategory: "Behavioral Economics",
    skillCategory: "Beslissingen Nemen",
    tags: ["Economie", "Psychologie", "Besluitvorming", "Beslissingen Nemen"],
    definition: "Verliezen wegen psychologisch zwaarder dan equivalente winsten. Het verlies van €100 voelt erger dan de vreugde van €100 winnen – doorgaans zo'n 2x zo sterk.",
    abstractExample: "Nutsfunctie is asymmetrisch: de pijn van verlies X is sterker dan de vreugde van winst X. Mensen gaan irrationele risico's aan om verliezen te vermijden.",
    examples: [
      { domain: "business", icon: "💼", text: "Investeerders houden verlieslatende aandelen te lang vast, omdat verkopen het verlies 'officieel' maakt. Ze wachten tot het 'herstelt'." },
      { domain: "daily", icon: "🏠", text: "Je koopt een abonnement niet op vanwege de kans op mislukking, ook al zou de verwachte waarde positief zijn." },
      { domain: "politics", icon: "🏛️", text: "'We kunnen deze rechten niet verliezen!' mobiliseert meer kiezers dan 'We kunnen nieuwe rechten winnen!'" }
    ],
    prerequisites: ["sunk-cost-fallacy"],
    unlocks: ["status-quo-bias", "framing-effect"],
    relatedPrinciples: ["sunk-cost-fallacy", "status-quo-bias", "framing-effect"],
    exercises: [{
      type: "multiple-choice",
      question: "Onderzoek toont: mensen vermijden een weddenschap tenzij de mogelijke winst minstens 2x de mogelijke verlies is. Wat verklaart dit?",
      options: ["Rationele risicoberekening", "Verliesaversie: verlies doet meer pijn dan winst vreugde geeft", "Gebrek aan begrip van kansen", "Gebrek aan geld"],
      correct: 1,
      feedback: "Correct! Verliesaversie betekent dat de pijn van verlies psychologisch zwaarder weegt dan de vreugde van winst."
    }],
    creativePrompt: "Beschrijf een situatie waarin je een risico vermeed vanwege het mogelijke verlies, ook al was de verwachte winst groter.",
    aiHelperPrompts: ["Wanneer bleef je bij een slechte situatie omdat verandering riskant leek?", "Hoe beïnvloedt angst voor verlies jouw dagelijkse beslissingen?", "Wanneer held je een slechte situatie vol terwijl stoppen rationeler was?"]
  },
  {
    id: "status-quo-bias",
    title: "Status Quo Bias",
    difficulty: 1,
    emoji: "🛑",
    academicCategory: "Behavioral Economics",
    skillCategory: "Beslissingen Nemen",
    tags: ["Cognitieve Bias", "Besluitvorming", "Verandering", "Beslissingen Nemen"],
    definition: "De voorkeur voor de huidige situatie boven verandering, zelfs als verandering objectief beter zou zijn. De status quo fungeert als psychologisch anker.",
    abstractExample: "Als standaardoptie A is, kiezen de meeste mensen A – ook al is B beter. Dit is niet rationeel maar psychologisch: verandering vereist moeite en riskeert verlies.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Mensen blijven bij dezelfde energieleverancier ook al is overstappen goedkoper – omschakelen kost moeite." },
      { domain: "business", icon: "💼", text: "Bedrijven houden verouderde systemen omdat overstappen 'te veel gedoe' is, ook al zijn de nieuwe systemen aantoonbaar beter." },
      { domain: "politics", icon: "🏛️", text: "Kiezers stemmen op de zittende partij zelfs als een nieuw alternatief objectief beter lijkt. 'Liever de duivel die je kent.'" }
    ],
    prerequisites: ["loss-aversion"],
    unlocks: [],
    relatedPrinciples: ["loss-aversion", "anchoring", "sunk-cost-fallacy"],
    exercises: [{
      type: "multiple-choice",
      question: "Een pensioenfonds vraagt je een beleggingsprofiel te kiezen. Het standaardprofiel 'Neutraal' is voor jou suboptimaal. Wat doet status quo bias?",
      options: [
        "Je kiest bewust het beste profiel",
        "Je kiest het standaardprofiel ondanks dat een ander beter is",
        "Je vergelijkt alle opties uitgebreid",
        "Je stelt de beslissing uit tot je meer weet"
      ],
      correct: 1,
      feedback: "Precies! Status quo bias zorgt ervoor dat mensen bij de standaardoptie blijven, ook als een andere optie objectief beter is."
    }],
    creativePrompt: "Noem iets in je leven dat je al lang niet hebt veranderd, terwijl verandering waarschijnlijk beter zou zijn.",
    aiHelperPrompts: ["Welke abonnementen, gewoonten of keuzes heb je gewoon gelaten terwijl je ze eens zou moeten herzien?", "Wanneer koste het je moeite om van iets te veranderen terwijl het duidelijk voordelig was?", "Hoe kun je status quo bias tegengaan bij een belangrijke beslissing?"]
  },
  {
    id: "framing-effect",
    title: "Framing Effect",
    difficulty: 1,
    emoji: "🖼️",
    academicCategory: "Behavioral Economics",
    skillCategory: "Manipulatie Herkennen",
    tags: ["Cognitieve Bias", "Communicatie", "Besluitvorming", "Manipulatie Herkennen"],
    definition: "Dezelfde informatie leidt tot andere beslissingen afhankelijk van hoe die gepresenteerd wordt. '90% overlevingskans' en '10% sterftekans' zijn identiek maar leiden tot verschillende keuzes.",
    abstractExample: "De weergave (frame) van informatie beïnvloedt de interpretatie: positieve frames ('winst van X') versus negatieve frames ('verlies van Y') activeren verschillende psychologische reacties.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'95% vetvrij' klinkt gezonder dan '5% vet', maar het is precies hetzelfde product." },
      { domain: "business", icon: "💼", text: "'Dit project heeft 40% kans op succes' klinkt beter dan '60% kans op mislukking'." },
      { domain: "politics", icon: "🏛️", text: "'Belasting op overwinst' klinkt rechtvaardig; 'winststraf voor succesvolle bedrijven' klinkt problematisch. Zelfde beleid." }
    ],
    prerequisites: ["anchoring"],
    unlocks: [],
    relatedPrinciples: ["anchoring", "loss-aversion", "availability-heuristic"],
    exercises: [{
      type: "multiple-choice",
      question: "Een arts zegt: 'Van 100 patiënten sterven er 10 aan deze operatie.' Een andere arts zegt: '90 van de 100 patiënten overleven.' Wat verwacht framing-onderzoek?",
      options: [
        "Patiënten kiezen vaker de operatie bij de tweede formulering",
        "Beide formuleringen leiden tot dezelfde beslissing",
        "De eerste formulering overtuigt meer",
        "Artsen manipuleren bewust met frames"
      ],
      correct: 0,
      feedback: "Juist! Onderzoek toont dat mensen meer geneigd zijn de operatie te kiezen bij de 'overlevingsframe' dan de 'sterftekans-frame' – ook al zijn de cijfers identiek."
    }],
    creativePrompt: "Herschrijf een bericht of advertentie door het frame om te draaien – hoe verandert de indruk?",
    aiHelperPrompts: ["Welke frames gebruik je onbewust in je communicatie?", "Wanneer merkte je dat een 'spin' op informatie jouw mening beïnvloedde?", "Hoe kun je bewust frames herkennen in nieuws of marketing?"]
  },
  {
    id: "mental-accounting",
    title: "Mental Accounting",
    difficulty: 2,
    emoji: "🗂️",
    academicCategory: "Behavioral Economics",
    skillCategory: "Beslissingen Nemen",
    tags: ["Economie", "Psychologie", "Geld", "Beslissingen Nemen"],
    definition: "De neiging om geld in mentale 'potjes' te verdelen op basis van herkomst of bestemming, en daarin anders mee te omgaan dan rationeel verdedigbaar is. Geld is fungibel – €1 is €1, ongeacht waarvandaan.",
    abstractExample: "Je vindt €100 en geeft het meteen uit (het is 'gratis geld'). Maar hetzelfde geld dat je had gespaard, geef je bewuster uit. Rationeel zijn beide €100 gelijk in waarde.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Je krijgt een onverwachte belastingteruggave van €500 en geeft die uit aan een luxeaankoop. Maar je spaarsaldo met €500 had je nooit zo besteed." },
      { domain: "business", icon: "💼", text: "Een bedrijf spendeert het marketingbudget royaal op in december 'anders valt het vrij', ook al zijn er betere investeringen." },
      { domain: "daily", icon: "🏠", text: "Casinochips voelen als minder echt geld – je neemt meer risico dan met contant geld." }
    ],
    prerequisites: ["opportunity-cost"],
    unlocks: [],
    relatedPrinciples: ["sunk-cost-fallacy", "loss-aversion", "framing-effect"],
    exercises: [{
      type: "multiple-choice",
      question: "Je wint €200 in een loterij. Een week later verlies je €200 aan je telefoon. Rationeel gezien is het netto effect nul. Hoe ervaart men dit typisch?",
      options: [
        "Als netto nul – het compenseert elkaar",
        "De winst veroorzaakt meer vreugde dan het verlies pijn doet",
        "Het verlies voelt zwaarder dan de winst – ze komen uit 'verschillende potjes'",
        "Ze voelen gelijk maar worden anders besteed"
      ],
      correct: 2,
      feedback: "Correct! Door mental accounting komen de €200 uit verschillende 'potjes'. De loterijwinst voelde al besteed; het telefoonverlies voelt als echt verlies."
    }],
    creativePrompt: "Beschrijf een situatie waarin je geld uit een 'bonus' of 'onverwachte pot' anders besteedde dan normaal spaargeld.",
    aiHelperPrompts: ["Wanneer gaf je onverwacht geld anders uit dan gepland geld?", "Heb je 'vakantiegeld', 'bonusgeld' of 'gevonden geld' ooit royaler uitgegeven?", "Hoe kun je fungibiliteit van geld bewust gebruiken om betere beslissingen te maken?"]
  },
  {
    id: "hyperbolic-discounting",
    title: "Hyperbolisch Verdisconteren",
    difficulty: 3,
    emoji: "⏳",
    academicCategory: "Behavioral Economics",
    skillCategory: "Beslissingen Nemen",
    tags: ["Economie", "Psychologie", "Temporele Besluitvorming", "Beslissingen Nemen"],
    definition: "De neiging om onmiddellijke beloningen veel hoger te waarderen dan toekomstige beloningen, op een manier die inconsistent is met rationele discontering. Morgen voelt anders dan nu.",
    abstractExample: "Je kiest liever €100 nu boven €110 in een week, maar kiest wel voor €110 over een jaar boven €100 over 51 weken. Dezelfde tijdspanne, totaal andere keuze. Dit heet tijdsinconsistentie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Je weet dat je morgen vroeg op moet maar blijft nog even Netflix kijken. Je toekomstige zelf krijgt de rekening – je huidige zelf betaalt er niet voor." },
      { domain: "business", icon: "💼", text: "Mensen kiezen liever voor een kleine directe beloning (snack, feature) dan een grote toekomstige beloning (gezondheid, betere software)." },
      { domain: "daily", icon: "🏠", text: "Spaargedrag: 'Ik begin maandag te sparen' – maar maandag schuif je het opnieuw naar maandag. Uitstelgedrag is hyperbolisch verdisconteren in actie." }
    ],
    prerequisites: ["sunk-cost-fallacy"],
    unlocks: [],
    relatedPrinciples: ["status-quo-bias", "loss-aversion", "opportunity-cost"],
    exercises: [{
      type: "multiple-choice",
      question: "Wat is een kenmerk van hyperbolisch verdisconteren?",
      options: [
        "Consistente voorkeur voor grotere beloningen later",
        "Voorkeur verandert inconsistent afhankelijk van hoe nabij de beloning is",
        "Rationele afweging van kosten en baten",
        "Voorkeur voor zekerheid boven kans"
      ],
      correct: 1,
      feedback: "Precies! Hyperbolisch verdisconteren is tijdsinconsistent: je keuze verandert afhankelijk van hoe nabij de beloning is."
    }],
    creativePrompt: "Beschrijf een gewoonte of doel dat je steeds uitstelt – en hoe je toekomstige zelf daar last van heeft.",
    aiHelperPrompts: ["Welke beslissingen stel je regelmatig uit ten gunste van onmiddellijk genot?", "Hoe kun je je toekomstige zelf beschermen tegen je huidige impulsen?", "Wanneer koos je voor direct genot terwijl je wist dat geduld beter was?"]
  },
  {
    id: "diminishing-returns",
    title: "Afnemende Meeropbrengsten",
    difficulty: 1,
    emoji: "📈",
    academicCategory: "Behavioral Economics",
    skillCategory: "Beslissingen Nemen",
    tags: ["Economie", "Optimalisatie", "Strategisch Denken", "Beslissingen Nemen"],
    definition: "Elk extra eenheid input levert minder extra output op dan de vorige, na een bepaald punt. De marginale waarde neemt af naarmate je meer toevoegt.",
    abstractExample: "Functie van input X naar output Y: de afgeleide dY/dX neemt af voorbij een optimaal punt. De eerste eenheid X levert de meeste Y op, elke volgende eenheid minder.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Het eerste kopje koffie maakt je wakker en scherp. Het tweede helpt nog een beetje. Het zevende maakt je trillerig en moe." },
      { domain: "business", icon: "💼", text: "Een team van 5 ontwikkelaars is productiever dan 1. Maar 50 ontwikkelaars is niet 10x productiever – communicatie en coördinatie kosten steeds meer." },
      { domain: "science", icon: "🔬", text: "Kunstmest verbetert gewasopbrengst, maar na een optimale hoeveelheid leidt meer toe tot vervuiling en zelfs opbrengstverlies." }
    ],
    prerequisites: ["opportunity-cost"],
    unlocks: [],
    relatedPrinciples: ["ceteris-paribus", "opportunity-cost", "pareto-efficiency"],
    exercises: [{
      type: "multiple-choice",
      question: "Je traint 1 uur per dag en verbetert sterk. Je besluit 5 uur per dag te trainen. Wat voorspelt de wet van afnemende meeropbrengsten?",
      options: [
        "Je verbetert 5x zo snel",
        "Je verbetering neemt toe lineair met trainingstijd",
        "Extra uren leveren minder extra verbetering op en kunnen blessures veroorzaken",
        "Je verbetert hetzelfde als bij 1 uur"
      ],
      correct: 2,
      feedback: "Correct! Na een punt leveren extra inputs steeds minder extra outputs – en te veel input kan zelfs negatief worden (overtraining)."
    }],
    creativePrompt: "Noem iets waarbij meer doen juist minder resultaat oplevert na een bepaald punt.",
    aiHelperPrompts: ["Wanneer werkte harder werken contraproductief?", "Welk niveau van inspanning levert voor jou de meeste waarde op?", "Waar is 'genoeg' vaak beter dan 'zo veel mogelijk'?"]
  },
  {
    id: "ceteris-paribus",
    title: "Ceteris Paribus (Al het Andere Gelijk)",
    difficulty: 2,
    emoji: "🧮",
    academicCategory: "Behavioral Economics",
    skillCategory: "Causale Verbanden Begrijpen",
    tags: ["Economie", "Methodologie", "Analyse", "Causale Verbanden Begrijpen"],
    definition: "Een Latijns begrip dat betekent 'al het andere gelijk'. In analyses isoleer je de invloed van één variabele door alle andere factoren constant te houden.",
    abstractExample: "Als je de invloed van X op Y wilt kennen, houd je alle andere factoren Z1, Z2, Z3 constant. Alleen dan meet je de 'zuivere' relatie tussen X en Y.",
    examples: [
      { domain: "science", icon: "🔬", text: "Als de prijs van een product stijgt (ceteris paribus), daalt de vraag. Maar als tegelijkertijd de inkomens stijgen, geldt die regel mogelijk niet." },
      { domain: "business", icon: "💼", text: "We veranderen de knopkleur op de website. Ceteris paribus (alles hetzelfde), meten we of conversie stijgt. Maar als ook het seizoen verandert, weet je het niet." },
      { domain: "science", icon: "🔬", text: "In medisch onderzoek: een controlegroep zorgt ervoor dat ceteris paribus geldt – alles is hetzelfde behalve de behandeling." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["scientific-method", "correlation-causation", "diminishing-returns"],
    exercises: [{
      type: "multiple-choice",
      question: "Je wil weten of een nieuw dieet werkt. Je begint met het dieet én begint tegelijk te sporten. Je neemt af. Wat is het probleem?",
      options: [
        "Het dieet werkt niet",
        "Je kunt niet vaststellen welke factor (dieet of sport) bijdroeg – ceteris paribus is geschonden",
        "Je meet het verkeerd",
        "Sport en dieet mogen niet samen"
      ],
      correct: 1,
      feedback: "Precies! Je hebt twee variabelen tegelijk veranderd. Je kunt niet concluderen welke de oorzaak was. Ceteris paribus vereist dat je één ding tegelijk verandert."
    }],
    creativePrompt: "Beschrijf een situatie waarin je twee dingen tegelijk veranderde en daarna niet wist welke de oorzaak van het resultaat was.",
    aiHelperPrompts: ["Wanneer veranderde je meerdere dingen tegelijk en kon je niet achterhalen wat werkte?", "Hoe kun je in je werk of leven betere experimenten opzetten?", "Wat is de waarde van een controlegroep of baseline?"]
  },
  {
    id: "cause-reason",
    title: "Oorzaak vs. Reden",
    difficulty: 2,
    emoji: "🎯",
    academicCategory: "Epistemologie",
    skillCategory: "Causale Verbanden Begrijpen",
    tags: ["Causaliteit", "Filosofie", "Redeneren", "Causale Verbanden Begrijpen"],
    definition: "Een oorzaak is een mechanistische, causale factor die een gevolg voortbrengt. Een reden is een motivatie of rechtvaardiging voor een handeling. Ze zijn niet hetzelfde.",
    abstractExample: "De fysieke oorzaak van een brand is hitte + brandstof + zuurstof. De reden waarom iemand brand stichtte is wraak. Oorzaak = mechanisme; Reden = motivatie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Oorzaak van de botsing: gladde weg. Reden waarom de bestuurder reed: hij moest naar het ziekenhuis. Beide zijn relevant maar niet hetzelfde." },
      { domain: "business", icon: "💼", text: "Oorzaak van het faillissement: cashflowprobleem. Reden waarom het bedrijf die keuzes maakte: overmoedige expansie. Oorzaak is technisch, reden is intentioneel." },
      { domain: "politics", icon: "🏛️", text: "Oorzaak van een oorlog: militaire acties. Reden: geopolitieke belangen. Historici analyseren beide lagen." }
    ],
    prerequisites: ["correlation-causation", "post-hoc-ergo"],
    unlocks: [],
    relatedPrinciples: ["correlation-causation", "necessary-sufficient", "post-hoc-ergo"],
    exercises: [{
      type: "multiple-choice",
      question: "Een werknemer maakt fouten omdat hij moe is (oorzaak) en werkte tot middernacht (reden: deadline). Wat is het onderscheid?",
      options: [
        "Er is geen onderscheid – het is hetzelfde",
        "Oorzaak is het mechanisme (vermoeidheid) dat de fouten produceerde; reden is de motivatie voor het gedrag (deadline)",
        "Reden is mechanisme; oorzaak is motivatie",
        "Beide zijn mechanismen"
      ],
      correct: 1,
      feedback: "Juist! Vermoeidheid is de causale factor die fouten veroorzaakt. De deadline is de reden (motivatie) waarom hij zo laat werkte."
    }],
    creativePrompt: "Beschrijf een situatie waarbij de oorzaak van een probleem en de reden waarom het zich voordeed duidelijk verschillend zijn.",
    aiHelperPrompts: ["Wanneer loste je een symptoom op in plaats van de onderliggende oorzaak?", "Hoe verschilt het oplossen van de oorzaak van het aanpakken van de motivatie?", "Kun je een maatschappelijk probleem noemen waarbij oorzaak en reden worden verwisseld?"]
  }
];
