// Principles data structure
// Each principle includes full content, exercises, and relationships

export const principles = [
  {
    id: "modus-ponens",
    title: "Modus Ponens",
    difficulty: 1,
    emoji: "🔗",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    tags: ["Logica", "Deductie", "Redeneren", "Beter Argumenteren"],
    definition: "Modus ponens is een fundamentele logische regel die stelt: als A dan B, A is waar, dus B is waar. Het is een van de meest basale vormen van deductief redeneren.",
    abstractExample: "Als P waar is, en we weten dat P→Q (als P dan Q), dan kunnen we concluderen dat Q waar is. Dit is geldig ongeacht de inhoud van P en Q.",
    examples: [
      {
        domain: "business",
        icon: "💼",
        text: "Als we de prijs verlagen, stijgen de verkopen (regel). We verlagen de prijs (feit). Dus de verkopen zullen stijgen (conclusie)."
      },
      {
        domain: "daily",
        icon: "🏠",
        text: "Als het regent, wordt de straat nat (regel). Het regent (feit). Dus de straat wordt nat (conclusie)."
      },
      {
        domain: "science",
        icon: "🔬",
        text: "Als de temperatuur onder 0°C daalt, bevriest water (wet). De temperatuur is -5°C (meting). Dus het water bevriest (voorspelling)."
      }
    ],
    prerequisites: [],
    unlocks: ["affirming-consequent", "modus-tollens"],
    relatedPrinciples: ["deduction-induction", "necessary-sufficient"],
    exercises: [
      {
        type: "multiple-choice",
        question: "Je weet: 'Als het zondag is, dan is de winkel dicht.' Het is zondag. Welke conclusie is geldig volgens modus ponens?",
        options: [
          "De winkel is dicht",
          "Het is geen zondag",
          "De winkel is open",
          "We weten niet of de winkel dicht is"
        ],
        correct: 0,
        feedback: "Correct! Als de regel waar is (als zondag, dan dicht) en de voorwaarde waar is (het is zondag), dan moet de conclusie waar zijn (de winkel is dicht)."
      }
    ],
    creativePrompt: "Bedenk een voorbeeld van modus ponens uit je eigen werk of studie.",
    aiHelperPrompts: [
      "Denk aan een regel of beleid op je werk of school. Wat gebeurt er als een bepaalde voorwaarde waar is?",
      "Welke 'als-dan' situaties kom je tegen in je dagelijks leven?",
      "Kun je een situatie bedenken waar een actie automatisch een gevolg heeft?"
    ]
  },
  {
    id: "affirming-consequent",
    title: "Affirming the Consequent (Denkfout)",
    difficulty: 1,
    emoji: "⚠️",
    academicCategory: "Logica",
    skillCategory: "Manipulatie Herkennen",
    tags: ["Logica", "Fallacy", "Redeneerfouten", "Manipulatie Herkennen"],
    definition: "Een logische fout waarbij je concludeert dat als B waar is, dan moet A ook waar zijn (gegeven: als A dan B). Dit is ongeldig omdat B ook door andere oorzaken kan ontstaan.",
    abstractExample: "Gegeven: Als P dan Q. Q is waar. Foutieve conclusie: dus P is waar. Dit is fout omdat Q ook waar kan zijn zonder P.",
    examples: [
      {
        domain: "daily",
        icon: "🏠",
        text: "Fout: 'Als het regent, is de straat nat. De straat is nat. Dus het heeft geregend.' - Maar iemand kan ook water hebben gemorst!"
      },
      {
        domain: "business",
        icon: "💼",
        text: "Fout: 'Succesvolle bedrijven adverteren veel. Dit bedrijf adverteert veel. Dus dit bedrijf is succesvol.' - Adverteren garandeert geen succes."
      },
      {
        domain: "politics",
        icon: "🏛️",
        text: "Fout: 'Corrupte politici liegen. Deze politicus liegt. Dus deze politicus is corrupt.' - Mensen kunnen om vele redenen liegen."
      }
    ],
    prerequisites: ["modus-ponens"],
    unlocks: ["correlation-causation"],
    relatedPrinciples: ["modus-ponens", "post-hoc-ergo"],
    exercises: [
      {
        type: "multiple-choice",
        question: "Welke redenering bevat de 'affirming the consequent' fout?",
        options: [
          "Als ik sport, voel ik me fit. Ik sport. Dus ik voel me fit.",
          "Als ik sport, voel ik me fit. Ik voel me fit. Dus ik heb gesport.",
          "Als ik sport, voel ik me fit. Ik sport niet. Dus ik voel me niet fit.",
          "Als ik niet sport, voel ik me niet fit. Ik voel me fit. Dus ik heb gesport."
        ],
        correct: 1,
        feedback: "Juist! Je voelt je fit, maar dat kan ook andere oorzaken hebben dan sporten. Je concludeert ten onrechte dat je gesport moet hebben."
      }
    ],
    creativePrompt: "Bedenk een voorbeeld waarin iemand ten onrechte een oorzaak aanwijst omdat het gevolg zichtbaar is.",
    aiHelperPrompts: [
      "Denk aan een situatie waar meerdere dingen hetzelfde resultaat kunnen veroorzaken.",
      "Wanneer heb jij of iemand anders een verkeerde conclusie getrokken over de oorzaak van iets?",
      "Welke symptomen kunnen meerdere oorzaken hebben?"
    ]
  },
  {
    id: "set-theory-basics",
    title: "Set Theory Basics (Een Koe is een Dier)",
    difficulty: 1,
    emoji: "🐄",
    academicCategory: "Logica",
    skillCategory: "Patronen Zien",
    tags: ["Logica", "Verzamelingen", "Categorisatie", "Patronen Zien"],
    definition: "Een element behoort tot een verzameling, maar niet alle elementen van die verzameling zijn dat specifieke element. Bijvoorbeeld: een koe is een dier, maar een dier hoeft geen koe te zijn.",
    abstractExample: "Als X een element is van verzameling Y, betekent dat niet dat alle elementen van Y gelijk zijn aan X. X ⊂ Y, maar Y ≠ X.",
    examples: [
      {
        domain: "daily",
        icon: "🏠",
        text: "Een appel is fruit, maar niet al het fruit is een appel. Bananen, peren en druiven zijn ook fruit."
      },
      {
        domain: "business",
        icon: "💼",
        text: "Tesla is een autobedrijf, maar niet elk autobedrijf is Tesla. Er zijn honderden andere autofabrikanten."
      },
      {
        domain: "politics",
        icon: "🏛️",
        text: "Nederland is een EU-land, maar niet elk EU-land is Nederland. De EU heeft 27 lidstaten."
      }
    ],
    prerequisites: [],
    unlocks: ["necessary-sufficient"],
    relatedPrinciples: ["necessary-sufficient", "false-dilemma"],
    exercises: [
      {
        type: "multiple-choice",
        question: "Welke uitspraak is FOUT volgens het koe-dier principe?",
        options: [
          "Een hond is een zoogdier, maar niet elk zoogdier is een hond",
          "Een roman is een boek, dus elk boek is een roman",
          "Voetbal is een sport, maar niet elke sport is voetbal",
          "Een tulp is een bloem, maar niet elke bloem is een tulp"
        ],
        correct: 1,
        feedback: "Correct! De uitspraak 'dus elk boek is een roman' is fout. Er zijn ook andere soorten boeken zoals biografieën, gedichtenbundels, etc."
      }
    ],
    creativePrompt: "Geef een voorbeeld van een categorie en een specifiek lid daarvan, en leg uit waarom niet alle leden van die categorie hetzelfde zijn.",
    aiHelperPrompts: [
      "Denk aan hobby's: is elke sport bijvoorbeeld voetbal?",
      "Denk aan eten: zijn alle warme maaltijden bijvoorbeeld pizza?",
      "Welke algemene categorie ken je met veel verschillende specifieke voorbeelden?"
    ]
  },
  {
    id: "correlation-causation",
    title: "Correlatie ≠ Causatie",
    difficulty: 1,
    emoji: "📊",
    academicCategory: "Epistemologie",
    skillCategory: "Causale Verbanden Begrijpen",
    tags: ["Causaliteit", "Statistiek", "Redeneerfouten", "Causale Verbanden Begrijpen"],
    definition: "Het feit dat twee dingen samen voorkomen (correlatie) betekent niet dat het ene het andere veroorzaakt (causatie). Er kunnen andere verklaringen zijn zoals toeval, een gemeenschappelijke oorzaak, of omgekeerde causaliteit.",
    abstractExample: "Als A en B vaak samen voorkomen, kan het zijn dat: 1) A veroorzaakt B, 2) B veroorzaakt A, 3) C veroorzaakt beide, of 4) het is toeval. Correlatie alleen is niet genoeg om causaliteit te bewijzen.",
    examples: [
      {
        domain: "daily",
        icon: "🏠",
        text: "IJsverkoop en verdrinkingen correleren, maar ijs eten veroorzaakt geen verdrinkingen. Beide stijgen in de zomer (gemeenschappelijke oorzaak: warm weer)."
      },
      {
        domain: "business",
        icon: "💼",
        text: "Bedrijven die meer uitgeven aan kantoorplanten hebben hogere productiviteit. Maar: succesvolle bedrijven hebben meer budget voor zowel planten als goede werknemers."
      },
      {
        domain: "science",
        icon: "🔬",
        text: "Het aantal piraten is afgenomen en de wereldtemperatuur gestegen. Dit betekent niet dat piraten de opwarming tegengaan - het is een toevalsrelatie."
      }
    ],
    prerequisites: ["affirming-consequent"],
    unlocks: ["post-hoc-ergo", "cause-reason"],
    relatedPrinciples: ["post-hoc-ergo", "confirmation-bias", "availability-heuristic"],
    exercises: [
      {
        type: "multiple-choice",
        question: "Je leest: 'Mensen die elke dag koffie drinken leven langer.' Wat is de beste reactie?",
        options: [
          "Koffie drinken zorgt voor een langer leven",
          "Een langer leven zorgt ervoor dat je meer koffie drinkt",
          "Er is een correlatie, maar er kunnen andere verklaringen zijn",
          "De studie moet fout zijn, koffie is ongezond"
        ],
        correct: 2,
        feedback: "Juist! Er is een correlatie, maar dit bewijst geen causatie. Misschien hebben koffiedrinkers andere gezonde gewoontes, of is er een genetische factor."
      }
    ],
    creativePrompt: "Bedenk twee dingen die waarschijnlijk correleren maar waar geen causaal verband is.",
    aiHelperPrompts: [
      "Denk aan twee dingen die beide toenemen in bepaalde seizoenen.",
      "Welke twee dingen komen vaak samen voor, maar veroorzaken elkaar niet?",
      "Kun je een grappig voorbeeld bedenken van twee ongerelateerde trends?"
    ]
  },
  {
    id: "confirmation-bias",
    title: "Confirmation Bias",
    difficulty: 1,
    emoji: "🔍",
    academicCategory: "Epistemologie",
    skillCategory: "Manipulatie Herkennen",
    tags: ["Cognitieve Bias", "Psychologie", "Redeneerfouten", "Manipulatie Herkennen"],
    definition: "De neiging om informatie te zoeken, te interpreteren en te herinneren op een manier die je bestaande overtuigingen bevestigt, terwijl je tegenstrijdige informatie negeert of afwijst.",
    abstractExample: "Als je gelooft dat X waar is, ben je geneigd om vooral voorbeelden te zien die X bevestigen, en voorbeelden die X weerspreken te negeren of af te doen als uitzonderingen.",
    examples: [
      {
        domain: "daily",
        icon: "🏠",
        text: "Je denkt dat een bepaald merk auto vaak kapot gaat. Vanaf dan val je vooral op wanneer je er eentje langs de weg ziet staan, maar merk je de werkende exemplaren niet op."
      },
      {
        domain: "business",
        icon: "💼",
        text: "Een manager gelooft dat thuiswerken niet productief is. Ze let vooral op thuiswerkers die online niet reageren, maar ziet niet de productieve thuiswerkers."
      },
      {
        domain: "politics",
        icon: "🏛️",
        text: "Je steunt een politieke partij. Je leest vooral nieuws dat je partij in een goed daglicht stelt, en wijt negatief nieuws aan 'biased media'."
      }
    ],
    prerequisites: [],
    unlocks: ["availability-heuristic", "anchoring"],
    relatedPrinciples: ["availability-heuristic", "dunning-kruger", "false-dilemma"],
    exercises: [
      {
        type: "multiple-choice",
        question: "Wat is een goed voorbeeld van confirmation bias?",
        options: [
          "Je test zowel voor- als nadelen van een beslissing",
          "Je zoekt vooral artikelen die je mening ondersteunen",
          "Je verandert je mening na nieuwe informatie",
          "Je vraagt anderen om hun mening"
        ],
        correct: 1,
        feedback: "Precies! Confirmation bias betekent dat je vooral zoekt naar informatie die je bestaande overtuiging bevestigt, in plaats van objectief te kijken."
      }
    ],
    creativePrompt: "Beschrijf een situatie waarin jij of iemand anders vooral informatie zocht die een bestaande overtuiging bevestigde.",
    aiHelperPrompts: [
      "Denk aan een discussie waarin iemand vasthoudt aan hun mening, ondanks tegenbewijs.",
      "Heb je wel eens iets gekocht en daarna vooral positieve reviews gezocht?",
      "Wanneer heb je voor het laatst vooral naar informatie gezocht die jouw standpunt ondersteunt?"
    ]
  },
  {
    id: "sunk-cost-fallacy",
    title: "Sunk Cost Fallacy",
    difficulty: 1,
    emoji: "💸",
    academicCategory: "Behavioral Economics",
    skillCategory: "Beslissingen Nemen",
    tags: ["Economie", "Besluitvorming", "Cognitieve Bias", "Beslissingen Nemen"],
    definition: "De neiging om door te gaan met iets omdat je er al tijd, geld of moeite in hebt gestoken, ook al is stoppen de rationele keuze. Eerdere investeringen die je niet terug kunt krijgen zouden je beslissing niet moeten beïnvloeden.",
    abstractExample: "Je beslissing zou moeten gebaseerd zijn op toekomstige kosten en baten, niet op wat je al hebt geïnvesteerd (sunk costs). Rationale vraag: 'Zou ik dit nu starten met wat ik nu weet?' niet 'Hoeveel heb ik er al in gestoken?'",
    examples: [
      {
        domain: "daily",
        icon: "🏠",
        text: "Je kijkt een saaie film, maar blijft kijken omdat je al een uur hebt gekeken. Rationeel: die tijd is al weg, stop met de film en doe iets leuks."
      },
      {
        domain: "business",
        icon: "💼",
        text: "Een bedrijf blijft investeren in een falend project omdat ze er al €1 miljoen in hebben gestoken. Rationeel: die €1M is al weg, stop het project voordat er meer verlies komt."
      },
      {
        domain: "daily",
        icon: "🏠",
        text: "Je eet je bord leeg ondanks dat je vol zit, 'want je hebt ervoor betaald'. Rationeel: het geld is al uitgegeven, je maakt jezelf alleen maar oncomfortabel."
      }
    ],
    prerequisites: [],
    unlocks: ["opportunity-cost", "loss-aversion"],
    relatedPrinciples: ["opportunity-cost", "loss-aversion", "status-quo-bias"],
    exercises: [
      {
        type: "multiple-choice",
        question: "Welke gedachte helpt je de sunk cost fallacy te vermijden?",
        options: [
          "Ik heb er al zoveel tijd in gestoken, ik moet doorgaan",
          "Als ik nu opnieuw zou beginnen, zou ik dit nog steeds doen?",
          "Ik mag deze investering niet laten verspillen",
          "Anderen zullen denken dat ik heb opgegeven"
        ],
        correct: 1,
        feedback: "Perfect! De vraag 'Zou ik dit nu opnieuw doen met wat ik nu weet?' helpt je focussen op de toekomst in plaats van op het verleden."
      }
    ],
    creativePrompt: "Beschrijf een situatie waarin je of iemand anders doorging met iets alleen omdat er al veel in geïnvesteerd was.",
    aiHelperPrompts: [
      "Denk aan een studie, cursus of opleiding waar je misschien mee door ging terwijl je het eigenlijk niet leuk vond.",
      "Heb je wel eens een abonnement aangehouden terwijl je het niet gebruikte?",
      "Wanneer heb je voor het laatst iets afgemaakt alleen omdat je er al tijd in had gestoken?"
    ]
  },
  {
    id: "prisoners-dilemma",
    title: "Prisoner's Dilemma",
    difficulty: 2,
    emoji: "🎲",
    academicCategory: "Speltheorie",
    skillCategory: "Beslissingen Nemen",
    tags: ["Speltheorie", "Strategie", "Samenwerking", "Beslissingen Nemen"],
    definition: "Een situatie waarin individuele rationele keuzes leiden tot een slechtere uitkomst voor beide partijen dan wanneer ze zouden samenwerken. Het dilemma: vertrouwen op samenwerking riskeert uitbuiting, maar wederzijds wantrouwen maakt beide partijen slechter af.",
    abstractExample: "Twee spelers kunnen samenwerken of verraad plegen. Als beiden samenwerken: redelijke uitkomst. Als één verraadt terwijl de ander samenwerkt: beste voor verrader, slechtst voor samenwerkende. Als beiden verraden: slechte uitkomst voor beiden, maar beter dan uitgebuit worden.",
    examples: [
      {
        domain: "business",
        icon: "💼",
        text: "Twee concurrerende bedrijven kunnen prijzen hoog houden (samenwerken) of een prijzenoorlog starten (verraden). Beiden verlagen hun prijzen uit angst dat de ander het doet, waardoor beide bedrijven minder verdienen."
      },
      {
        domain: "politics",
        icon: "🏛️",
        text: "Twee landen kunnen ontwapenen (samenwerken) of bewapenen (verraden). Uit vrees dat de ander zich bewapent, bewapenen beide zich - resulterend in een dure en gevaarlijke wapenwedloop."
      },
      {
        domain: "daily",
        icon: "🏠",
        text: "Twee huisgenoten kunnen beiden het huis schoonmaken (samenwerken) of beiden het laten zitten (verraden). Als één schoonmaakt en de ander niet, profiteert de luie persoon. Uit angst hiervoor maken beiden niet schoon, met een vies huis als gevolg."
      }
    ],
    prerequisites: [],
    unlocks: ["nash-equilibrium", "tragedy-commons"],
    relatedPrinciples: ["nash-equilibrium", "zero-sum-games", "tragedy-commons"],
    exercises: [
      {
        type: "multiple-choice",
        question: "Waarom kiezen beide spelers vaak om te 'verraden' in het prisoner's dilemma, zelfs als samenwerken beter is?",
        options: [
          "Omdat mensen van nature egoïstisch zijn",
          "Omdat ze bang zijn dat de ander hen uitbuit als ze samenwerken",
          "Omdat verraden altijd de beste strategie is",
          "Omdat ze niet kunnen communiceren"
        ],
        correct: 1,
        feedback: "Exact! Het rationele dilemma is: als ik samenwerk en de ander verraadt, sta ik het slechtst. Dus uit angst hiervoor kiezen beiden om te verraden, ook al zouden beiden beter af zijn met samenwerking."
      }
    ],
    creativePrompt: "Beschrijf een situatie uit je eigen leven waarin samenwerken beter zou zijn, maar waar beide partijen uit eigenbelang een slechtere uitkomst creëren.",
    aiHelperPrompts: [
      "Denk aan situaties op het werk waar collega's elkaar zouden kunnen helpen, maar het niet doen uit angst zelf te veel werk te krijgen.",
      "Heb je wel eens meegemaakt dat twee mensen elkaar niet vertrouwden en daardoor beiden slechter af waren?",
      "Denk aan groepsprojecten waar iedereen dacht dat de ander wel zou werken."
    ]
  },
  {
    id: "opportunity-cost",
    title: "Opportunity Cost",
    difficulty: 1,
    emoji: "⚖️",
    academicCategory: "Behavioral Economics",
    skillCategory: "Beslissingen Nemen",
    tags: ["Economie", "Besluitvorming", "Afwegingen", "Beslissingen Nemen"],
    definition: "De waarde van de beste alternatieve optie die je opgeeft wanneer je een keuze maakt. Elke keuze betekent dat je andere mogelijkheden opgeeft - dat is de 'echte' kost van je beslissing.",
    abstractExample: "Als je kiest voor optie A, zijn de kosten niet alleen wat A kost, maar ook de waarde van optie B die je niet gekozen hebt. De werkelijke kost = directe kost + opportunity cost.",
    examples: [
      {
        domain: "daily",
        icon: "🏠",
        text: "Je kiest een avond Netflix kijken. De opportunity cost is niet alleen je tijd, maar wat je anders had kunnen doen: sporten, vrienden zien, of een vaardigheid leren."
      },
      {
        domain: "business",
        icon: "💼",
        text: "Een bedrijf investeert €1M in project A. De opportunity cost is project B waar ze niet in investeerden, dat misschien meer had opgeleverd. Het gaat niet alleen om wat A kost, maar wat B had kunnen opleveren."
      },
      {
        domain: "daily",
        icon: "🏠",
        text: "Je koopt een huis van €300K. De opportunity cost is niet alleen €300K, maar ook wat je anders met dat geld had kunnen: beleggen (mogelijke returns), reizen, of een bedrijf starten."
      }
    ],
    prerequisites: ["sunk-cost-fallacy"],
    unlocks: ["ceteris-paribus", "diminishing-returns"],
    relatedPrinciples: ["sunk-cost-fallacy", "loss-aversion", "decision-making"],
    exercises: [
      {
        type: "multiple-choice",
        question: "Je kunt je zaterdag besteden aan: A) bijbaan (€100), B) studeren, of C) uitrusten. Je kiest studeren. Wat is de opportunity cost?",
        options: [
          "€100 van de bijbaan",
          "De waarde van de beste alternatieve optie: ofwel €100 ofwel het uitrusten",
          "Niets, want je moet toch studeren",
          "€100 plus de waarde van uitrusten"
        ],
        correct: 1,
        feedback: "Juist! De opportunity cost is de waarde van het beste alternatief dat je opgeeft. Als uitrusten voor jou belangrijker is dan €100, dan is dat je opportunity cost."
      }
    ],
    creativePrompt: "Beschrijf een recente beslissing die je hebt gemaakt en benoem de opportunity cost - wat gaf je op door deze keuze te maken?",
    aiHelperPrompts: [
      "Denk aan hoe je je vrije tijd besteedt. Wat doe je niet omdat je iets anders kiest?",
      "Heb je recentelijk iets gekocht? Wat had je anders met dat geld kunnen doen?",
      "Welke keuzes maak je in je carrière? Welke andere paden geef je daarmee op?"
    ]
  },
  {
    id: "straw-man-fallacy",
    title: "Straw Man Fallacy",
    difficulty: 1,
    emoji: "🎯",
    academicCategory: "Retorica",
    skillCategory: "Manipulatie Herkennen",
    tags: ["Argumentatie", "Fallacy", "Retorica", "Manipulatie Herkennen"],
    definition: "Een denkfout waarbij je het argument van een ander verdraait naar een zwakkere, extremere of vereenvoudigde versie, om die makkelijker aan te kunnen vallen. Je vecht tegen een 'stropop' in plaats van het echte argument.",
    abstractExample: "Persoon A stelt: P. Persoon B verdraait dit naar Q (een extreme of vereenvoudigde versie van P). Persoon B weerlegt Q. Maar Q was nooit het argument van A - het echte argument P blijft onaangevallen.",
    examples: [
      {
        domain: "politics",
        icon: "🏛️",
        text: "A: 'We moeten kinderopvang betaalbaarder maken.' B: 'Dus jij wil dat de overheid al het ouderschap overneemt? Kinderen horen bij hun ouders!' - B verdraait A's voorstel naar een extreem standpunt."
      },
      {
        domain: "business",
        icon: "💼",
        text: "A: 'We moeten het wervingsproces versnellen.' B: 'Dus jij wil zomaar iedereen aannemen zonder te screenen? Dat is onverantwoord!' - B maakt er een extreem en onverantwoord voorstel van."
      },
      {
        domain: "daily",
        icon: "🏠",
        text: "A: 'Ik eet minder vlees voor het milieu.' B: 'Oh dus je dwingt iedereen om veganist te worden?' - B verdraait een persoonlijke keuze naar een extreme eis aan anderen."
      }
    ],
    prerequisites: [],
    unlocks: ["ad-hominem", "false-dilemma"],
    relatedPrinciples: ["ad-hominem", "false-dilemma", "slippery-slope"],
    exercises: [
      {
        type: "multiple-choice",
        question: "Welk antwoord is een straw man?",
        options: [
          "A: 'We moeten recycling stimuleren.' B: 'Hoe stel je voor dat te doen?'",
          "A: 'We moeten recycling stimuleren.' B: 'Dus jij wil iedereen dwingen om alleen recycleerbare producten te kopen?'",
          "A: 'We moeten recycling stimuleren.' B: 'Ik denk dat dat weinig impact heeft op het klimaat.'",
          "A: 'We moeten recycling stimuleren.' B: 'Dat ben ik met je eens, hoe beginnen we?'"
        ],
        correct: 1,
        feedback: "Precies! B verdraait 'stimuleren' naar 'dwingen alleen recycleerbare producten te kopen' - een extreem en vervormd versie van het originele argument."
      }
    ],
    creativePrompt: "Beschrijf een discussie waarin iemands argument werd verdraaid naar een extremere versie om het makkelijker aan te vallen.",
    aiHelperPrompts: [
      "Denk aan een politiek debat waar iemand zegt: 'Dus jij wil...?' en dan iets extrems noemt.",
      "Heb je wel eens gezegd: 'Dat zeg ik niet!' in een discussie?",
      "Wanneer werd jouw mening verdraaid naar iets wat je niet bedoelde?"
    ]
  },
  {
    id: "ad-hominem",
    title: "Ad Hominem",
    difficulty: 1,
    emoji: "👤",
    academicCategory: "Retorica",
    skillCategory: "Manipulatie Herkennen",
    tags: ["Argumentatie", "Fallacy", "Retorica", "Manipulatie Herkennen"],
    definition: "Een denkfout waarbij je de persoon aanvalt in plaats van hun argument. Je probeert iemands argument te ondergraven door hun karakter, motieven of persoonlijke eigenschappen aan te vallen, in plaats van de inhoud van het argument te weerleggen.",
    abstractExample: "Persoon A stelt argument P. Persoon B valt niet P aan, maar de persoon A ('Je bent X, dus je argument is waardeloos'). Dit is ongeldig omdat de validiteit van P onafhankelijk is van wie het stelt.",
    examples: [
      {
        domain: "politics",
        icon: "🏛️",
        text: "'Je zegt dat we moeten investeren in onderwijs, maar jij bent zelf een leraar dus je bent biased.' - Dit valt de persoon aan, niet het argument over onderwijs."
      },
      {
        domain: "business",
        icon: "💼",
        text: "'Je voorstel voor kostenbesparingen is onzin, want je bent zelf altijd te laat.' - Punctualiteit is irrelevant voor de kwaliteit van het voorstel."
      },
      {
        domain: "daily",
        icon: "🏠",
        text: "'Jij zegt dat roken ongezond is, maar je drinkt zelf elke dag frisdrank!' - Dit invalideert niet het argument over roken."
      }
    ],
    prerequisites: ["straw-man-fallacy"],
    unlocks: ["appeal-authority"],
    relatedPrinciples: ["straw-man-fallacy", "appeal-authority", "genetic-fallacy"],
    exercises: [
      {
        type: "multiple-choice",
        question: "Welk antwoord is een ad hominem aanval?",
        options: [
          "Je cijfers kloppen niet, kijk maar naar deze bron",
          "Je bent te jong om dit te begrijpen, dus je argument is onzin",
          "Ik zie je punt, maar ik ben het niet eens omdat...",
          "Dat is een interessante gedachte, maar heb je bewijs?"
        ],
        correct: 1,
        feedback: "Correct! Dit valt de persoon aan (leeftijd) in plaats van het argument. De leeftijd van iemand zegt niets over de validiteit van hun argument."
      }
    ],
    creativePrompt: "Beschrijf een situatie waarin iemand een persoon aanviel in plaats van hun argument te weerleggen.",
    aiHelperPrompts: [
      "Denk aan discussies waar iemand zegt: 'Jij bent X, dus je mening telt niet.'",
      "Heb je wel eens je mening genegeerd zien worden omdat van wie het kwam?",
      "Wanneer werd jouw karakter of achtergrond gebruikt om je argument af te doen?"
    ]
  },
  {
    id: "deduction-induction",
    title: "Deductie vs Inductie",
    difficulty: 2,
    emoji: "🔬",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    tags: ["Logica", "Redeneren", "Wetenschapsmethode", "Beter Argumenteren"],
    definition: "Deductie: van algemeen naar specifiek (als de premissen waar zijn, is de conclusie gegarandeerd waar). Inductie: van specifiek naar algemeen (op basis van observaties een algemene regel afleiden - conclusie is waarschijnlijk maar niet gegarandeerd).",
    abstractExample: "Deductie: Alle A's zijn B. X is een A. Dus X is een B. (geldig)\nInductie: X1, X2, X3 (die A zijn) zijn allemaal B. Dus waarschijnlijk zijn alle A's B. (waarschijnlijk maar niet zeker)",
    examples: [
      {
        domain: "science",
        icon: "🔬",
        text: "Deductie: Alle metalen geleiden electriciteit (wet). Koper is een metaal. Dus koper geleidt electriciteit.\nInductie: Ik zie 100 zwanen, allemaal wit. Dus waarschijnlijk zijn alle zwanen wit. (Fout - er bestaan zwarte zwanen!)"
      },
      {
        domain: "daily",
        icon: "🏠",
        text: "Deductie: Alles wat ik uit de vriezer haal is koud. Dit is uit de vriezer. Dus dit is koud.\nInductie: De zon is elke dag opgekomen. Dus de zon komt morgen ook op. (Waarschijnlijk waar, maar niet gegarandeerd)"
      },
      {
        domain: "business",
        icon: "💼",
        text: "Deductie: Alle klanten met abonnement krijgen korting. Jan heeft een abonnement. Dus Jan krijgt korting.\nInductie: Onze laatste 5 producten waren succesvol. Dus dit nieuwe product wordt ook succesvol. (Niet gegarandeerd!)"
      }
    ],
    prerequisites: ["modus-ponens"],
    unlocks: ["scientific-method", "black-swan"],
    relatedPrinciples: ["modus-ponens", "necessary-sufficient", "falsification"],
    exercises: [
      {
        type: "multiple-choice",
        question: "Welk voorbeeld is INDUCTIEF redeneren?",
        options: [
          "Alle honden zijn zoogdieren. Een labrador is een hond. Dus een labrador is een zoogdier.",
          "Ik heb 20 elektriciens ontmoet en ze waren allemaal man. Dus elektriciens zijn waarschijnlijk meestal mannen.",
          "Als het regent, wordt de grond nat. Het regent. Dus de grond wordt nat.",
          "Alle driehoeken hebben drie hoeken. Dit is een driehoek. Dus dit heeft drie hoeken."
        ],
        correct: 1,
        feedback: "Precies! Dit is inductie: op basis van een beperkt aantal observaties (20 elektriciens) wordt een algemene conclusie getrokken. Dit is waarschijnlijk maar niet gegarandeerd waar."
      }
    ],
    creativePrompt: "Geef een voorbeeld van inductief redeneren uit je eigen leven - iets wat je concludeerde op basis van meerdere observaties.",
    aiHelperPrompts: [
      "Denk aan een patroon dat je hebt opgemerkt na meerdere keren iets te hebben meegemaakt.",
      "Heb je wel eens een algemene regel afgeleid uit je eigen ervaringen?",
      "Welke aannames maak je op basis van wat je tot nu toe hebt gezien?"
    ]
  },
  {
    id: "availability-heuristic",
    title: "Availability Heuristic",
    difficulty: 2,
    emoji: "💭",
    academicCategory: "Epistemologie",
    skillCategory: "Manipulatie Herkennen",
    tags: ["Cognitieve Bias", "Besluitvorming", "Psychologie", "Manipulatie Herkennen"],
    definition: "De neiging om de waarschijnlijkheid van iets te overschatten op basis van hoe gemakkelijk voorbeelden ervan in je gedachten komen. Recentere, emotionelere, of meer gepubliceerde gebeurtenissen lijken waarschijnlijker dan ze werkelijk zijn.",
    abstractExample: "Als voorbeelden van X makkelijk te herinneren zijn (recent, emotioneel, of veel gepubliceerd), overschatten we de frequentie of waarschijnlijkheid van X. Beschikbaarheid in het geheugen ≠ werkelijke frequentie.",
    examples: [
      {
        domain: "daily",
        icon: "🏠",
        text: "Na een vliegtuigongeluk in het nieuws zijn mensen banger om te vliegen, hoewel vliegtuigen statistisch heel veilig zijn. Het recente, emotionele beeld maakt het gevaar groter lijken."
      },
      {
        domain: "business",
        icon: "💼",
        text: "Een manager overschat het risico van een strategie omdat ze zich één keer herinneren dat het misging, terwijl het 10 keer wel werkte. De ene mislukking is emotioneel memorabel."
      },
      {
        domain: "politics",
        icon: "🏛️",
        text: "Criminaliteit voelt alsof het toeneemt door veelvuldige nieuwsberichten, terwijl statistieken tonen dat het daalt. De beschikbaarheid van nieuwsverhalen beïnvloedt onze perceptie."
      }
    ],
    prerequisites: ["confirmation-bias"],
    unlocks: ["representativeness-heuristic"],
    relatedPrinciples: ["confirmation-bias", "correlation-causation", "base-rate-fallacy"],
    exercises: [
      {
        type: "multiple-choice",
        question: "Waarom denken veel mensen dat haaiaanvallen vaker voorkomen dan ze zijn?",
        options: [
          "Omdat haaien gevaarlijke dieren zijn",
          "Omdat haaiaanvallen emotioneel en breed gepubliceerd worden in media",
          "Omdat haaien in veel oceanen voorkomen",
          "Omdat mensen vaak zwemmen in de oceaan"
        ],
        correct: 1,
        feedback: "Juist! Haaiaanvallen zijn zeldzaam, maar wanneer ze gebeuren zijn ze emotioneel en worden breed gepubliceerd. Dit maakt ze makkelijk te herinneren, waardoor we hun frequentie overschatten."
      }
    ],
    creativePrompt: "Beschrijf iets waarvan jij het gevoel hebt dat het vaak gebeurt, maar dat waarschijnlijk komt doordat je er veel over hoort in plaats van dat het echt vaak voorkomt.",
    aiHelperPrompts: [
      "Denk aan angsten die je hebt die misschien komen door nieuwsberichten.",
      "Is er iets waar je bang voor bent dat statistisch eigenlijk heel zeldzaam is?",
      "Welke dingen vallen je op in het nieuws die je gevoel van risico beïnvloeden?"
    ]
  },
  {
    id: "anchoring",
    title: "Anchoring Effect",
    difficulty: 1,
    emoji: "⚓",
    academicCategory: "Behavioral Economics",
    skillCategory: "Manipulatie Herkennen",
    tags: ["Cognitieve Bias", "Onderhandelen", "Besluitvorming", "Manipulatie Herkennen"],
    definition: "De neiging om te veel gewicht te geven aan het eerste stukje informatie (het 'anker') dat je hoort. Dit eerste cijfer of feit beïnvloedt je daaropvolgende oordeel, zelfs als het anker irrelevant of willekeurig is.",
    abstractExample: "Als eerst waarde A wordt genoemd, worden daaropvolgende schattingen en oordelen onbewust naar A toe getrokken, zelfs als A niet relevant is. Het eerste cijfer zet een referentiepunt waar je moeilijk vanaf komt.",
    examples: [
      {
        domain: "business",
        icon: "💼",
        text: "Een huis staat online voor €500K. Je biedt €480K, denkend dat het redelijk is. Maar de verkoopprijs van €500K was het anker - misschien is het huis €400K waard en is je bod nog steeds te hoog."
      },
      {
        domain: "daily",
        icon: "🏠",
        text: "Een restaurant menu toont een wijn van €80, daarna eentje van €30. De €30 wijn lijkt redelijk door het anker van €80, ook al is €30 nog steeds veel voor wijn in dat restaurant."
      },
      {
        domain: "business",
        icon: "💼",
        text: "In een salarisonderhandeling noemt de werkgever eerst €40K. Jouw tegenvoorstel wordt waarschijnlijk richting €40K getrokken. Beter: jij noemt eerst een hoger cijfer als anker."
      }
    ],
    prerequisites: ["confirmation-bias"],
    unlocks: ["framing-effect"],
    relatedPrinciples: ["confirmation-bias", "availability-heuristic", "status-quo-bias"],
    exercises: [
      {
        type: "multiple-choice",
        question: "Een winkel toont een jas: 'Was €200, nu €100!' Je denkt: dat is een goede deal. Wat is hier het anker?",
        options: [
          "€100, want dat is de prijs die je betaalt",
          "€200, wat je gevoel van 'goede deal' beïnvloedt",
          "De kwaliteit van de jas",
          "Er is geen anker in dit voorbeeld"
        ],
        correct: 1,
        feedback: "Exact! €200 is het anker. Het maakt €100 een 'goede deal' lijken, ook al is de jas misschien €100 waard. Het originele (mogelijk opgeblazen) prijskaartje beïnvloedt je perceptie."
      }
    ],
    creativePrompt: "Beschrijf een situatie waarin een eerste cijfer of prijs je gevoel beïnvloedde over wat redelijk was.",
    aiHelperPrompts: [
      "Denk aan een winkelervaring waar de 'originele prijs' je gevoel over de korting beïnvloedde.",
      "Heb je wel eens onderhandeld? Wie noemde het eerste cijfer en hoe beïnvloedde dat de onderhandeling?",
      "Wanneer leek een prijs redelijk omdat je het vergeleek met een duurder alternatief?"
    ]
  },
  {
    id: "post-hoc-ergo",
    title: "Post Hoc Ergo Propter Hoc",
    difficulty: 2,
    emoji: "⏱️",
    academicCategory: "Logica",
    skillCategory: "Causale Verbanden Begrijpen",
    tags: ["Causaliteit", "Fallacy", "Redeneerfouten", "Causale Verbanden Begrijpen"],
    definition: "Latijn voor 'Na dit, dus door dit'. De fout om aan te nemen dat omdat B na A gebeurde, A de oorzaak van B moet zijn. Tijdsvolgorde betekent niet automatisch causaliteit - er kunnen andere verklaringen zijn.",
    abstractExample: "A gebeurt. Daarna gebeurt B. Foutieve conclusie: A veroorzaakte B. Dit negeert andere mogelijkheden: toeval, een gemeenschappelijke oorzaak C, of dat B A veroorzaakte (omgekeerde causatie).",
    examples: [
      {
        domain: "daily",
        icon: "🏠",
        text: "Fout: 'Ik at sushi gisteren en vandaag ben ik ziek, dus de sushi was slecht.' - Maar misschien kreeg je een virus van iemand anders; de timing is toeval."
      },
      {
        domain: "politics",
        icon: "🏛️",
        text: "Fout: 'Na de verkiezing van deze premier daalde de werkloosheid. Deze premier heeft dat veroorzaakt.' - Maar economische trends hebben vaak andere, eerdere oorzaken."
      },
      {
        domain: "daily",
        icon: "🏠",
        text: "Fout: 'Ik droeg mijn gelukssokken en we wonnen de wedstrijd, dus mijn sokken brachten geluk.' - De overwinning heeft andere oorzaken; de sokken zijn toeval."
      }
    ],
    prerequisites: ["correlation-causation"],
    unlocks: ["cause-reason", "necessary-sufficient"],
    relatedPrinciples: ["correlation-causation", "affirming-consequent", "false-cause"],
    exercises: [
      {
        type: "multiple-choice",
        question: "Welk voorbeeld is NIET een post hoc fout?",
        options: [
          "Ik nam een pijnstiller en een uur later was mijn hoofdpijn weg, dus de pijnstiller werkte",
          "De haan kraaide en daarna kwam de zon op, dus het kraaien veroorzaakte de zonsopgang",
          "Ik brak een spiegel en die week had ik pech, dus de spiegel bracht ongeluk",
          "We veranderden de website en verkoop steeg, dus die verandering moet het zijn"
        ],
        correct: 0,
        feedback: "Goed! Pijnstillers hebben een bewezen causaal mechanisme en werken binnen die tijdsspanne. Dit is geen post hoc fout - de causaliteit is aangetoond, niet alleen aangenomen op basis van volgorde."
      }
    ],
    creativePrompt: "Beschrijf een situatie waarin je of iemand anders aannam dat iets de oorzaak was alleen omdat het ervóór gebeurde.",
    aiHelperPrompts: [
      "Denk aan bijgeloof - dingen die je doet omdat je denkt dat ze invloed hebben op uitkomsten.",
      "Heb je wel eens twee ongerelateerde gebeurtenissen met elkaar verbonden omdat ze kort na elkaar gebeurden?",
      "Wanneer heb je voor het laatst gedacht: 'Door X is Y gebeurd' maar was het misschien toeval?"
    ]
  },
  {
    id: "false-dilemma",
    title: "False Dilemma (Vals Dilemma)",
    difficulty: 1,
    emoji: "🔀",
    academicCategory: "Retorica",
    skillCategory: "Manipulatie Herkennen",
    tags: ["Argumentatie", "Fallacy", "Retorica", "Manipulatie Herkennen"],
    definition: "Een denkfout waarbij wordt gesuggereerd dat er slechts twee opties zijn (vaak twee extremen), terwijl er in werkelijkheid meer mogelijkheden bestaan. Ook wel zwart-wit denken genoemd.",
    abstractExample: "Stelling: Je bent voor X of tegen X. Fout: er kunnen vele tussenposities, alternatieven, of nuances zijn. De werkelijkheid is zelden binair.",
    examples: [
      {
        domain: "politics",
        icon: "🏛️",
        text: "Fout: 'Je bent óf voor vrijheid óf voor veiligheid.' - Maar je kunt een balans zoeken tussen beide, of specifieke vormen van elk willen."
      },
      {
        domain: "business",
        icon: "💼",
        text: "Fout: 'We moeten óf groeien óf krimpen.' - Maar je kunt ook stabiliseren, herstructureren, of gefocust groeien in bepaalde gebieden."
      },
      {
        domain: "daily",
        icon: "🏠",
        text: "Fout: 'Je bent óf met ons óf tegen ons.' - Maar je kunt neutraal zijn, gedeeltelijk akkoord gaan, of een derde perspectief hebben."
      }
    ],
    prerequisites: ["straw-man-fallacy"],
    unlocks: ["continuum-fallacy"],
    relatedPrinciples: ["straw-man-fallacy", "slippery-slope", "excluded-middle"],
    exercises: [
      {
        type: "multiple-choice",
        question: "Welke uitspraak bevat een vals dilemma?",
        options: [
          "We kunnen investeren in marketing, sales, of product development",
          "Je bent óf een winnaar óf een loser - er is geen tussenweg",
          "Er zijn voor- en nadelen aan beide opties, laten we ze vergelijken",
          "We hebben meerdere opties om dit probleem aan te pakken"
        ],
        correct: 1,
        feedback: "Precies! De uitspraak suggereert slechts twee extremen (winnaar/loser), terwijl er een spectrum is van uitkomsten en succesniveaus. De meeste mensen zitten ergens in het midden."
      }
    ],
    creativePrompt: "Beschrijf een situatie waarin je twee keuzes kreeg gepresenteerd alsof die de enige opties waren, terwijl er meer mogelijkheden waren.",
    aiHelperPrompts: [
      "Denk aan discussies waar iemand zei: 'Je moet kiezen: A of B.'",
      "Heb je wel eens gehoord: 'Als je niet voor ons bent, ben je tegen ons'?",
      "Wanneer werd je gedwongen om tussen twee extremen te kiezen terwijl je een tussenpositie wilde?"
    ]
  }
];

// Helper function to get principle by ID
export const getPrincipleById = (id) => {
  return principles.find(p => p.id === id);
};

// Helper function to get principles by category
export const getPrinciplesByCategory = (category, system = 'academic') => {
  const categoryKey = system === 'academic' ? 'academicCategory' : 'skillCategory';
  return principles.filter(p => p[categoryKey] === category);
};

// Helper function to get principles by tag
export const getPrinciplesByTag = (tag) => {
  return principles.filter(p => p.tags.includes(tag));
};

// Helper function to get principles by difficulty
export const getPrinciplesByDifficulty = (difficulty) => {
  return principles.filter(p => p.difficulty === difficulty);
};

// Get all unique categories for each system
export const getCategories = (system = 'academic') => {
  const categoryKey = system === 'academic' ? 'academicCategory' : 'skillCategory';
  return [...new Set(principles.map(p => p[categoryKey]))];
};

// Get all unique tags
export const getAllTags = () => {
  const tags = new Set();
  principles.forEach(p => p.tags.forEach(tag => tags.add(tag)));
  return [...tags].sort();
};

export default principles;
