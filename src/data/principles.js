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
  return [...new Set(principles.map(p => p[categoryKey])),

  // ── EXTRA PRINCIPES – BATCH 1 (principes 1-28) ──
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
  },

  // ── EXTRA PRINCIPES – BATCH 2 (principes 29-57) ──
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
  },

  // ── EXTRA PRINCIPES – BATCH 3 (Statistiek & Retorica) ──
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
  },

  // ── EXTRA PRINCIPES – BATCH 4 (Psychologie & Besliskunde) ──
  // ── PSYCHOLOGIE ──────────────────────────────────────────────
  {
    id: "social-proof",
    title: "Sociale Bewijskracht",
    difficulty: 2,
    emoji: "👥",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    tags: ["Psychologie", "Beïnvloeding", "Groepsgedrag", "Mensen Begrijpen"],
    definition: "We beschouwen gedrag als correct als we zien dat anderen het ook doen. In onzekerheid kijken we naar wat de meerderheid doet als aanwijzing voor de juiste keuze.",
    abstractExample: "Als niemand weet wat de norm is, kopiëren mensen elkaars gedrag. Dit kan leiden tot kuddedrag: een trend zet door omdat iedereen denkt dat anderen het al evalueerden.",
    examples: [
      { domain: "business", icon: "💼", text: "'Al 10.000 klanten gingen je voor.' Restaurants plaatsen populaire gerechten bovenaan om sociale bewijskracht op te wekken." },
      { domain: "daily", icon: "🏠", text: "Een lege kroeg voelt ongemakkelijk; een volle kroeg trekt meer mensen aan. De drukte zelf is het signaal." },
      { domain: "science", icon: "🔬", text: "In Milgrams gehoorzaamheidsexperiment speelde de aanwezigheid van anderen die meededen een grote rol in het gedrag van deelnemers." }
    ],
    prerequisites: ["availability-heuristic"],
    unlocks: ["scarcity-effect"],
    relatedPrinciples: ["availability-heuristic", "confirmation-bias", "dunning-kruger"],
    exercises: [{
      type: "multiple-choice",
      question: "Waarom starten YouTubers soms met een gekochte hoeveelheid abonnees?",
      options: ["Om de algoritmes te misleiden", "Sociale bewijskracht: mensen abonneren liever op al-populaire kanalen", "Omdat het goedkoop is", "Om adverteerders aan te trekken"],
      correct: 1,
      feedback: "Sociale bewijskracht: een hoog aantal abonnees suggereert dat anderen al waarde zien in het kanaal, wat nieuwe bezoekers overtuigt om ook te abonneren."
    }],
    creativePrompt: "Bedenk drie manieren waarop sociale bewijskracht jouw aankoopbeslissingen beïnvloedt.",
    aiHelperPrompts: [
      "Wanneer vertrouw jij op wat anderen doen als leidraad voor jouw keuzes?",
      "Hoe zou jij een product lanceren zonder bestaande sociale bewijskracht?",
      "Wanneer is sociale bewijskracht een nuttige heuristiek en wanneer gevaarlijk?"
    ]
  },
  {
    id: "scarcity-effect",
    title: "Schaarste-effect",
    difficulty: 2,
    emoji: "⏳",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    tags: ["Psychologie", "Beïnvloeding", "Schaarste", "Mensen Begrijpen"],
    definition: "Dingen lijken waardevoller als ze schaars zijn of dreigen te verdwijnen. Beperkte beschikbaarheid verhoogt de gepercipieerde waarde, ongeacht de intrinsieke kwaliteit.",
    abstractExample: "Wanneer iets moeilijker te verkrijgen is, schrijven we het meer waarde toe. Dit geldt voor tijd ('nog 2 beschikbaar!'), toegang en exclusiviteit.",
    examples: [
      { domain: "business", icon: "💼", text: "'Nog 3 kamers beschikbaar op dit tijdstip!' Booking.com en vergelijkbare sites gebruiken schaarste actief om urgentie te creëren." },
      { domain: "daily", icon: "🏠", text: "Limited-edition sneakers zijn soms objectief niet beter, maar de schaarste maakt ze begeerlijker en duurder." },
      { domain: "science", icon: "🔬", text: "Onderzoekers gaven groepen identieke koekjes, maar één groep had een pot met 2 koekjes en de ander met 10. De groep met 2 beoordeelde ze als lekkerder." }
    ],
    prerequisites: ["social-proof", "loss-aversion"],
    unlocks: [],
    relatedPrinciples: ["loss-aversion", "framing-effect", "anchoring"],
    exercises: [{
      type: "multiple-choice",
      question: "Een webshop toont: 'Aanbieding eindigt over 02:14:33.' Welk principe wordt hier gebruikt?",
      options: ["Ankering", "Schaarste-effect (tijdschaarste)", "Sociale bewijskracht", "Framing"],
      correct: 1,
      feedback: "Schaarste-effect: de aftellende klok creëert kunstmatige tijdschaarste, wat de urgentie vergroot en impulsaankopen stimuleert."
    }],
    creativePrompt: "Beschrijf een situatie waarbij schaarste jou deed besluiten iets te kopen of doen wat je anders had uitgesteld.",
    aiHelperPrompts: [
      "Wanneer werd jij beïnvloed door 'op = op' of 'tijdelijk aanbod'?",
      "Hoe kun je schaarste onderscheiden van echte van kunstmatige schaarste?",
      "Hoe zou jij schaarste ethisch inzetten voor een eigen product?"
    ]
  },
  {
    id: "reciprocity",
    title: "Wederkerigheid",
    difficulty: 2,
    emoji: "🤝",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    tags: ["Psychologie", "Beïnvloeding", "Sociaal", "Mensen Begrijpen"],
    definition: "We voelen een sterke drang om terug te geven wat we ontvangen. Een gunst, cadeau of concessie creëert een sociale verplichting om iets terug te doen.",
    abstractExample: "Als A iets geeft aan B, ervaart B een psychologische druk om iets terug te geven. Dit werkt zelfs bij ongewenste giften en is een van de krachtigste sociale normen.",
    examples: [
      { domain: "business", icon: "💼", text: "Gratis samples in supermarkten verhogen de verkoopkans aanzienlijk: klanten voelen zich verplicht iets terug te doen voor het gratis monster." },
      { domain: "daily", icon: "🏠", text: "Als iemand je uitnodigt voor een feestje, voel je de druk om hem/haar ook uit te nodigen – zelfs als je dat normaal niet zou doen." },
      { domain: "science", icon: "🔬", text: "Cialdini toonde aan dat het sturen van een klein cadeau bij een enquête de respons significant verhoogde, ook al was het cadeau niets waard." }
    ],
    prerequisites: ["social-proof"],
    unlocks: [],
    relatedPrinciples: ["social-proof", "loss-aversion", "ikea-effect"],
    exercises: [{
      type: "multiple-choice",
      question: "Een verzekeraar stuurt je gratis een agenda met hun logo. Waarom doen ze dit?",
      options: ["Om naamsbekendheid te creëren", "Om wederkerigheid op te wekken en jou meer geneigd te maken zaken met hen te doen", "Omdat agenda's goedkoop zijn", "Om verplicht te stellen dat je klant wordt"],
      correct: 1,
      feedback: "Wederkerigheid: het gratis cadeau creëert een gevoel van verplichting. Mensen zijn daarna eerder geneigd de verzekeraar positief te beoordelen of te bellen."
    }],
    creativePrompt: "Beschrijf een moment waarop je iets deed (of kocht) omdat je je verplicht voelde na het ontvangen van een gunst.",
    aiHelperPrompts: [
      "Heb je wel eens iets gedaan puur omdat iemand je eerder heeft geholpen?",
      "Hoe gebruik jij wederkerigheid bewust in je relaties of werk?",
      "Wanneer is wederkerigheid een positieve sociale norm en wanneer manipulatief?"
    ]
  },
  {
    id: "spotlight-effect",
    title: "Schijnwerperseffect",
    difficulty: 2,
    emoji: "🔦",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    tags: ["Psychologie", "Zelfperceptie", "Sociaal", "Mensen Begrijpen"],
    definition: "We overschatten hoeveel anderen letten op ons uiterlijk, gedrag en fouten. De 'schijnwerper' die wij op onszelf richten, zien anderen nauwelijks.",
    abstractExample: "Als jij een vlek op je shirt hebt, denk je dat iedereen het ziet. In werkelijkheid merkt de meerderheid het niet of vergeet het snel – ze zijn bezig met hun eigen zorgen.",
    examples: [
      { domain: "science", icon: "🔬", text: "Gilovich et al. lieten studenten een shirt dragen met een gênant logo. Studenten dachten dat ~50% het zou opmerken; in werkelijkheid was het ~25%." },
      { domain: "daily", icon: "🏠", text: "Je zegt iets onhandigs in een vergadering en denkt de rest van de dag dat iedereen er nog aan denkt. Maar je collega's zijn er al lang overheen." },
      { domain: "business", icon: "💼", text: "Een presentator die een kleine fout maakt denkt dat het zijn geloofwaardigheid heeft geschaad. Het publiek heeft de fout vaak niet eens geregistreerd." }
    ],
    prerequisites: ["dunning-kruger"],
    unlocks: [],
    relatedPrinciples: ["dunning-kruger", "illusory-superiority", "curse-of-knowledge"],
    exercises: [{
      type: "multiple-choice",
      question: "Je struikelt in het openbaar. Hoe lang denken omstanders hier waarschijnlijk aan terug?",
      options: ["De rest van de dag", "Een week", "Seconden tot minuten", "Ze vergeten het nooit"],
      correct: 2,
      feedback: "Schijnwerperseffect: anderen besteden veel minder aandacht aan jouw momenten dan jijzelf. Ze zijn gefocust op hun eigen leven en vergeten het snel."
    }],
    creativePrompt: "Beschrijf een moment waarop je je erg zelfbewust voelde – en bedenk hoe anderen het waarschijnlijk echt ervaarden.",
    aiHelperPrompts: [
      "Wanneer heb jij je het meest bewust gevoeld van wat anderen van je zouden denken?",
      "Hoe zou het je gedrag veranderen als je wist dat mensen je veel minder observeren dan je denkt?",
      "Hoe helpt het schijnwerperseffect je om angst voor publiek optreden te begrijpen?"
    ]
  },
  {
    id: "planning-fallacy",
    title: "Planningsdrogreden",
    difficulty: 2,
    emoji: "📅",
    academicCategory: "Psychologie",
    skillCategory: "Beter Beslissen",
    tags: ["Psychologie", "Planning", "Tijdschatting", "Beter Beslissen"],
    definition: "We onderschatten systematisch de tijd, kosten en risico's van toekomstige plannen, terwijl we tegelijkertijd vergelijkbare taken in het verleden correct inschatten. We negeren historische data ten gunste van optimistische scenario's.",
    abstractExample: "Kahneman en Tversky: mensen schatten de voltooiingstijd van projecten te laag in, ook als ze weten dat vergelijkbare projecten uitliepen. De binnenperspectief overschaduwt het buitenperspectief.",
    examples: [
      { domain: "science", icon: "🔬", text: "De Sydney Opera House was gepland voor 1963 met een budget van 7 miljoen. Het werd klaar in 1973 voor 102 miljoen – een factor 14 over budget en 10 jaar vertraging." },
      { domain: "business", icon: "💼", text: "Softwareprojecten lopen gemiddeld 66% over budget en 33% over tijd – het is zo voorspelbaar dat het een eigen naam heeft: Hofstadters wet." },
      { domain: "daily", icon: "🏠", text: "'Dit rapport schrijf ik in twee uur.' Drie uur later ben je er nog mee bezig. Je negeerde onderbrekingen, complexiteit en perfectiedrang." }
    ],
    prerequisites: ["hyperbolic-discounting", "loss-aversion"],
    unlocks: [],
    relatedPrinciples: ["hyperbolic-discounting", "overconfidence", "sunk-cost-fallacy"],
    exercises: [{
      type: "multiple-choice",
      question: "Wat is de beste manier om de planningsdrogreden te corrigeren?",
      options: ["Extra motivatie om sneller te werken", "Vergelijkbare projecten uit het verleden raadplegen en die als basis nemen", "De deadline gewoon strikter stellen", "Meer mensen inzetten"],
      correct: 1,
      feedback: "Het 'buitenperspectief': gebruik de referentieklasse van vergelijkbare projecten om realistische tijden en kosten te schatten in plaats van je eigen optimistische scenario."
    }],
    creativePrompt: "Schat de tijd die je nodig hebt voor een aankomend project. Zoek dan een vergelijkbaar afgerond project en vergelijk die tijdsduur.",
    aiHelperPrompts: [
      "Welk project in jouw leven liep het meest uit op tijd of budget?",
      "Hoe zou je een project plannen als je wist dat je de tijd altijd onderschat?",
      "Wat is het verschil tussen optimisme en wishful thinking in planning?"
    ]
  },

  // ── BESLISKUNDE & ECONOMIE ───────────────────────────────────
  {
    id: "expected-value",
    title: "Verwachte Waarde",
    difficulty: 3,
    emoji: "🎰",
    academicCategory: "Besliskunde",
    skillCategory: "Beter Beslissen",
    tags: ["Besliskunde", "Statistiek", "Kansen", "Beter Beslissen"],
    definition: "De verwachte waarde van een keuze is de som van alle mogelijke uitkomsten, elk gewogen met hun kans. Het is de gemiddelde uitkomst bij een groot aantal herhalingen van dezelfde beslissing.",
    abstractExample: "EV = Σ (kans × uitkomst). Als een loterij 1 op 1.000.000 kans biedt op €1.000.000 en een lot kost €2, is de EV €1 – je verliest gemiddeld €1 per lot.",
    examples: [
      { domain: "science", icon: "🔬", text: "Bij medische beslissingen helpt verwachte waarde om behandelingen te vergelijken: kans op genezing × kwaliteitswinst minus kans op bijwerkingen × kwaliteitsverlies." },
      { domain: "business", icon: "💼", text: "Een project heeft 30% kans op €100.000 winst en 70% kans op €10.000 verlies. EV = 0,3×100.000 + 0,7×(−10.000) = €23.000. Positieve EV, dus rationeel om te doen." },
      { domain: "daily", icon: "🏠", text: "Een paraplu meenemen kost je 2 minuten ongemak. Geen paraplu en regen betekent nat worden (waarde −20). Bij 10% kans op regen: EV van meenemen is beter." }
    ],
    prerequisites: ["opportunity-cost", "diminishing-returns"],
    unlocks: ["risk-aversion"],
    relatedPrinciples: ["opportunity-cost", "loss-aversion", "risk-aversion"],
    exercises: [{
      type: "multiple-choice",
      question: "Een spel: 50% kans op €10 winnen, 50% kans op €6 verliezen. Wat is de verwachte waarde per spel?",
      options: ["€2", "€4", "€0", "€-3"],
      correct: 0,
      feedback: "EV = 0,5×10 + 0,5×(−6) = 5 − 3 = €2 per spel. Positieve verwachte waarde: rationeel om mee te doen als je vaak genoeg speelt."
    }],
    creativePrompt: "Kies een beslissing die je binnenkort moet nemen en bereken de verwachte waarde van je opties.",
    aiHelperPrompts: [
      "Welke grote beslissing heb jij genomen op gevoel terwijl kansen en uitkomsten bekend waren?",
      "Wanneer is de verwachte waarde een onvoldoende leidraad (denk aan risicogevoeligheid)?",
      "Hoe zou je de verwachte waarde gebruiken bij een sollicitatie of investering?"
    ]
  },
  {
    id: "risk-aversion",
    title: "Risicoaversie",
    difficulty: 3,
    emoji: "🛡️",
    academicCategory: "Besliskunde",
    skillCategory: "Beter Beslissen",
    tags: ["Besliskunde", "Risico", "Nutsfunctie", "Beter Beslissen"],
    definition: "Mensen kiezen doorgaans liever een zekere uitkomst boven een onzekere met dezelfde of zelfs hogere verwachte waarde. We zijn bereid te betalen voor zekerheid, boven en buiten de verwachte waarde.",
    abstractExample: "De nutsfunctie van geld is concaaf: €100 zekerheid is waardevoller dan 50% kans op €200, ook al zijn de verwachte waarden gelijk. De pijn van verlies weegt zwaarder dan het plezier van winst.",
    examples: [
      { domain: "science", icon: "🔬", text: "Bernoulli beschreef in 1738 al dat mensen liever €500 zeker nemen dan 50% kans op €1000, zelfs als de EV gelijk is." },
      { domain: "business", icon: "💼", text: "Verzekeringen zijn rationeel vanuit risicoaversie: je betaalt een premie (negatieve EV) voor de zekerheid dat je niet met een enorme schade zit." },
      { domain: "daily", icon: "🏠", text: "Je kiest een vaste baan boven zelfstandig ondernemen met hogere verwachte inkomsten maar meer onzekerheid – dat is risicoaversie in de praktijk." }
    ],
    prerequisites: ["expected-value", "loss-aversion"],
    unlocks: [],
    relatedPrinciples: ["loss-aversion", "expected-value", "hyperbolic-discounting"],
    exercises: [{
      type: "multiple-choice",
      question: "Je kiest tussen €50 zeker en 60% kans op €100 (EV = €60). Je kiest de €50. Wat laat dit zien?",
      options: ["Je maakt een rationele fout", "Risicoaversie: zekerheid heeft voor jou meer nut dan de EV suggereert", "Je begrijpt kansen niet", "Je bent irrationeel"],
      correct: 1,
      feedback: "Risicoaversie is niet irrationeel: het reflecteert dat de marginale waarde van geld afneemt. €50 zeker kan meer nut hebben dan een onzekere hogere EV."
    }],
    creativePrompt: "Noem drie keuzes in je leven waarbij je bewust een lagere EV koos voor zekerheid. Was dat verstandig?",
    aiHelperPrompts: [
      "Hoe risicoavers ben jij in financiële beslissingen vergeleken met in dagelijks leven?",
      "Wanneer is risicoaversie een verstandige strategie en wanneer een rem op groei?",
      "Hoe zou je risicoaversie gebruiken om te begrijpen waarom mensen een ziektekostenverzekering nemen?"
    ]
  },
  {
    id: "comparative-advantage",
    title: "Comparatief Voordeel",
    difficulty: 3,
    emoji: "🔄",
    academicCategory: "Besliskunde",
    skillCategory: "Beter Beslissen",
    tags: ["Economie", "Samenwerking", "Specialisatie", "Beter Beslissen"],
    definition: "Zelfs als iemand (of een land) absoluut beter is in alles, is het rationeel om te specialiseren in datgene waarbij de opportuniteitskosten het laagst zijn en de rest uit te besteden.",
    abstractExample: "Als A beter is in zowel X als Y, maar relatief nog beter in X, dan profiteert A van specialisatie in X en B van Y. Door handel zijn beide beter af dan zonder.",
    examples: [
      { domain: "science", icon: "🔬", text: "Ricardo's klassieke voorbeeld: Portugal produceert zowel wijn als laken efficiënter dan Engeland, maar heeft het grootste voordeel bij wijn. Specialisatie en handel maken beiden rijker." },
      { domain: "business", icon: "💼", text: "Een topadvocaat die ook snel typt, besteedt het typen toch uit. Zijn comparatief voordeel ligt bij juridisch advies; de typist heeft comparatief voordeel bij typen." },
      { domain: "daily", icon: "🏠", text: "Zelfs als jij beter kunt koken én beter kunt klussen dan je huisgenoot, is het efficiënter om te verdelen op basis van relatieve sterktes." }
    ],
    prerequisites: ["opportunity-cost", "diminishing-returns"],
    unlocks: [],
    relatedPrinciples: ["opportunity-cost", "pareto-efficiency", "diminishing-returns"],
    exercises: [{
      type: "multiple-choice",
      question: "Land A produceert in 1 uur 4 auto's of 8 ton graan. Land B produceert 1 auto of 1 ton graan. Wie heeft comparatief voordeel in graan?",
      options: ["Land A, want ze produceren meer graan", "Land B, want hun opportuniteitskosten voor graan zijn lager", "Beiden gelijk", "Het hangt af van de prijs"],
      correct: 1,
      feedback: "Voor land A kost 1 ton graan ½ auto. Voor land B kost 1 ton graan 1 auto. Land B heeft lagere opportuniteitskosten voor graan → comparatief voordeel in graan."
    }],
    creativePrompt: "Analyseer jouw sterke en zwakke punten. Waar heb jij comparatief voordeel ten opzichte van je collega's of vrienden?",
    aiHelperPrompts: [
      "Wat doe jij dat relatief beter is dan wat je collega's doen, zelfs als zij sommige dingen absoluut beter kunnen?",
      "Hoe gebruik jij comparatief voordeel in samenwerking of taakverdeling?",
      "Wanneer is specialisatie een risico (denk aan afhankelijkheid)?"
    ]
  },
  {
    id: "moral-hazard",
    title: "Moreel Risico",
    difficulty: 3,
    emoji: "⚖️",
    academicCategory: "Besliskunde",
    skillCategory: "Beter Beslissen",
    tags: ["Economie", "Gedrag", "Prikkels", "Beter Beslissen"],
    definition: "Als iemand beschermd is tegen de gevolgen van zijn risicovol gedrag, neemt hij meer risico dan hij anders zou nemen. De kosten worden gedragen door anderen; de baten zijn voor hemzelf.",
    abstractExample: "Als actor A verzekerd is voor de gevolgen van zijn acties, maar de kosten worden gedragen door actor B (verzekeraar, overheid, samenleving), heeft A een prikkel tot risicovoller gedrag.",
    examples: [
      { domain: "science", icon: "🔬", text: "Verzekeringstheorie: een volledig verzekerd automobilist rijdt minder voorzichtig dan een onverzekerde. De verzekeraar draagt de kosten, de bestuurder plukt de baten van risicogedrag." },
      { domain: "business", icon: "💼", text: "'Too big to fail': banken die weten dat de overheid hen zal redden, nemen meer financieel risico dan verantwoord is – de winsten zijn privaat, de verliezen sociaal." },
      { domain: "daily", icon: "🏠", text: "Een huurder die weet dat de verhuurder de borg toch terug betaalt, past minder goed op het huurhuis. De scheiding van kosten en baten verandert gedrag." }
    ],
    prerequisites: ["opportunity-cost", "prisoners-dilemma"],
    unlocks: [],
    relatedPrinciples: ["prisoners-dilemma", "tragedy-commons", "nash-equilibrium"],
    exercises: [{
      type: "multiple-choice",
      question: "Een zorgverzekering zonder eigen risico leidt ertoe dat mensen vaker de dokter bezoeken dan nodig. Wat illustreert dit?",
      options: ["Selectiebias", "Moreel risico: de scheiding van kosten en baten verandert gedrag", "Nash-evenwicht", "Comparatief voordeel"],
      correct: 1,
      feedback: "Moreel risico: als de kosten van zorg gedragen worden door de verzekeraar, neemt de drempel voor een doktersbezoek af. Dit is een prikkelprobleem, geen moreel oordeel."
    }],
    creativePrompt: "Beschrijf een situatie waarbij jij of anderen meer risico namen doordat de consequenties bij iemand anders lagen.",
    aiHelperPrompts: [
      "Hoe verandert jouw rijgedrag als je een volledig casco-verzekering hebt?",
      "Welke prikkels in jouw organisatie kunnen moreel risico veroorzaken?",
      "Hoe zou je een systeem ontwerpen dat moreel risico vermindert?"
    ]
  },
  {
    id: "margin-thinking",
    title: "Marginaal Denken",
    difficulty: 3,
    emoji: "➕",
    academicCategory: "Besliskunde",
    skillCategory: "Beter Beslissen",
    tags: ["Economie", "Besliskunde", "Marginalisme", "Beter Beslissen"],
    definition: "Rationele beslissingen worden gemaakt op de marge: wat kost of levert de volgende eenheid op? Niet de gemiddelde kosten of opbrengsten, maar de marginale zijn bepalend voor de optimale keuze.",
    abstractExample: "Als de marginale baten van een extra eenheid groter zijn dan de marginale kosten, is uitbreiding rationeel. Op het punt waarop marginale kosten = marginale baten, is het optimum bereikt.",
    examples: [
      { domain: "science", icon: "🔬", text: "Een fabriek besluit of ze een extra product maakt op basis van marginale kosten (extra grondstof, arbeid), niet de totale vaste kosten per product." },
      { domain: "business", icon: "💼", text: "Airlines bieden last-minute tickets aan voor prijzen ver onder de gemiddelde prijs: de vliegtuigstoel heeft toch nauwelijks marginale kosten als het vliegtuig al vliegt." },
      { domain: "daily", icon: "🏠", text: "'Ik heb al zo veel gegeten, één koekje meer maakt niet meer uit.' Dit is soms vreemd marginaal denken – het extra koekje heeft wel degelijk marginale calorieën." }
    ],
    prerequisites: ["opportunity-cost", "diminishing-returns"],
    unlocks: [],
    relatedPrinciples: ["opportunity-cost", "diminishing-returns", "sunk-cost-fallacy"],
    exercises: [{
      type: "multiple-choice",
      question: "Een student heeft al 3 uur gestudeerd en vraagt zich af of een 4e uur zinvol is. Wat is de juiste denkwijze?",
      options: ["Kijk hoeveel je in totaal hebt gestudeerd", "Vergelijk de extra leeropbrengst van het 4e uur met de kosten (tijd, vermoeidheid)", "Ga door, want je bent al begonnen", "Stop altijd na 3 uur"],
      correct: 1,
      feedback: "Marginaal denken: de vraag is niet hoeveel je al deed, maar wat het volgende uur extra oplevert versus kost. De eerdere uren zijn verzonken kosten."
    }],
    creativePrompt: "Beschrijf een beslissing waarbij jij ten onrechte naar gemiddelden keek in plaats van naar de marginale kosten en baten.",
    aiHelperPrompts: [
      "Hoe beslis jij wanneer je stopt met een activiteit – op basis van totalen of op de marge?",
      "Hoe gebruiken bedrijven marginaal denken bij prijsbeleid?",
      "Wanneer kan marginaal denken leiden tot slechte langetermijnbeslissingen?"
    ]
  },

  // ── EXTRA PRINCIPES – BATCH 5 (Systeemdenken & Wetenschapsfilosofie) ──
  // ── SYSTEEMDENKEN ────────────────────────────────────────────
  {
    id: "feedback-loop",
    title: "Terugkoppelingleus",
    difficulty: 3,
    emoji: "🔁",
    academicCategory: "Systeemdenken",
    skillCategory: "Beter Redeneren",
    tags: ["Systeemdenken", "Feedback", "Dynamica", "Beter Redeneren"],
    definition: "Een terugkoppelingleus ontstaat wanneer de uitkomst van een systeem terugwerkt op de invoer. Positieve feedback versterkt verandering (exponentieel); negatieve feedback dempt verandering (stabiliserend).",
    abstractExample: "Positief: meer succes → meer middelen → nog meer succes. Negatief: hoge prijs → minder vraag → lagere prijs → meer vraag. Systemen met terugkoppeling gedragen zich fundamenteel anders dan lineaire systemen.",
    examples: [
      { domain: "science", icon: "🔬", text: "Klimaatwetenschap: opwarming smelt ijs → minder reflectie → meer absorptie → meer opwarming. Dit is een positieve terugkoppeling (versterkend)." },
      { domain: "business", icon: "💼", text: "Een populair product krijgt meer reviews → hogere ranking → meer zichtbaarheid → nog meer verkopen. Positieve terugkoppeling in platformeconomieën." },
      { domain: "daily", icon: "🏠", text: "Lichaamstemperatuur wordt geregeld door negatieve terugkoppeling: te warm → zweten → afkoeling → temperatuur daalt terug naar normaal." }
    ],
    prerequisites: ["correlation-causation"],
    unlocks: ["second-order-effects"],
    relatedPrinciples: ["second-order-effects", "tragedy-commons", "nash-equilibrium"],
    exercises: [{
      type: "multiple-choice",
      question: "Een centrale bank verhoogt de rente → lenen wordt duurder → minder uitgaven → minder inflatie → eventueel lagere rente. Wat voor terugkoppeling is dit?",
      options: ["Positieve terugkoppeling", "Negatieve terugkoppeling", "Geen terugkoppeling", "Lineair systeem"],
      correct: 1,
      feedback: "Negatieve terugkoppeling: het systeem werkt zichzelf tegen en stabiliseert. Hoge rente dempt de inflatie die de aanleiding was voor de renteverhoging."
    }],
    creativePrompt: "Beschrijf een systeem in jouw leven (werk, gezondheid, relaties) en identificeer de terugkoppelingslussen.",
    aiHelperPrompts: [
      "Welke positieve terugkoppelingslussen zie jij in sociale media?",
      "Hoe zorgt negatieve terugkoppeling voor stabiliteit in biologische systemen?",
      "Wanneer kan een positieve terugkoppelingleus gevaarlijk worden?"
    ]
  },
  {
    id: "second-order-effects",
    title: "Tweede-orde-effecten",
    difficulty: 3,
    emoji: "♟️",
    academicCategory: "Systeemdenken",
    skillCategory: "Beter Redeneren",
    tags: ["Systeemdenken", "Onbedoelde Gevolgen", "Complexiteit", "Beter Redeneren"],
    definition: "Elke actie heeft directe (eerste-orde) effecten, maar ook indirecte gevolgen van die gevolgen. Tweede-orde-effecten zijn vaak groter of anders dan verwacht en worden systematisch onderschat.",
    abstractExample: "Actie A → direct effect B (eerste orde) → gevolg van B: effect C (tweede orde) → gevolg van C: effect D (derde orde). Rationeel beleid analyseert minstens tot het tweede niveau.",
    examples: [
      { domain: "science", icon: "🔬", text: "DDT bestreed malaria (eerste orde: goed), maar accumuleerde in voedselketens en bijna uitgeroeide roofvogels (tweede orde: slecht)." },
      { domain: "business", icon: "💼", text: "Hogere lonen voor werknemers (eerste orde: goed voor hen) → hogere productiekosten → hogere prijzen → lagere koopkracht van diezelfde werknemers (tweede orde)." },
      { domain: "daily", icon: "🏠", text: "Snelwegen uitbreiden vermindert files (eerste orde), maar trekt meer autoverkeer aan en vergroot files op termijn (tweede orde: induced demand)." }
    ],
    prerequisites: ["feedback-loop", "correlation-causation"],
    unlocks: [],
    relatedPrinciples: ["feedback-loop", "externalities", "tragedy-commons"],
    exercises: [{
      type: "multiple-choice",
      question: "Een stad verbiedt plastic tassen (eerste-orde-effect: minder plastic afval). Wat is een mogelijk tweede-orde-effect?",
      options: ["Meer plastic tassen", "Meer gebruik van papieren en katoenen tassen, die een hogere CO₂-voetafdruk kunnen hebben", "Minder winkels", "Lagere voedselprijzen"],
      correct: 1,
      feedback: "Tweede-orde-effect: vervangingsgedrag. Katoenen tassen vereisen veel meer energie om te produceren en moeten honderden keren hergebruikt worden om klimaatneutraal te zijn."
    }],
    creativePrompt: "Kies een beleidsmaatregel of beslissing en analyseer zowel de eerste- als tweede-orde-effecten.",
    aiHelperPrompts: [
      "Welke beslissing in jouw leven had onverwachte tweede-orde-effecten?",
      "Hoe kun je systematisch verder vooruitdenken dan het directe effect?",
      "Waarom is het zo moeilijk om tweede-orde-effecten te voorspellen?"
    ]
  },
  {
    id: "externalities",
    title: "Externaliteiten",
    difficulty: 3,
    emoji: "🏭",
    academicCategory: "Systeemdenken",
    skillCategory: "Beter Redeneren",
    tags: ["Economie", "Systeemdenken", "Marktfalen", "Beter Redeneren"],
    definition: "Externaliteiten zijn kosten of baten van een transactie die terechtkomen bij derden die niet bij de transactie betrokken zijn. Negatieve externaliteiten (zoals vervuiling) leiden tot overproductie; positieve tot onderproductie.",
    abstractExample: "Als actor A iets produceert en de kosten (vervuiling, lawaai) bij actor B terechtkomen zonder compensatie, dan zijn de sociale kosten hoger dan de private kosten. De markt faalt.",
    examples: [
      { domain: "science", icon: "🔬", text: "CO₂-uitstoot is een klassieke negatieve externaliteit: de producent betaalt niet voor de klimaatschade die bij de hele samenleving terechtkomt." },
      { domain: "business", icon: "💼", text: "Vaccinaties zijn een positieve externaliteit: wie zich laat vaccineren beschermt ook anderen (kudde-immuniteit), maar betaalt zelf de kosten. Zonder subsidie zou er te weinig worden gevaccineerd." },
      { domain: "daily", icon: "🏠", text: "Een buurman die laat muziek draait legt een negatieve externaliteit op jou: zijn plezier, jouw slaapgebrek." }
    ],
    prerequisites: ["tragedy-commons", "second-order-effects"],
    unlocks: [],
    relatedPrinciples: ["tragedy-commons", "moral-hazard", "pareto-efficiency"],
    exercises: [{
      type: "multiple-choice",
      question: "Waarom produceren vrije markten zonder ingrijpen doorgaans te veel vervuiling?",
      options: ["Bedrijven zijn onethisch", "De vervuilingskosten zijn externaliteiten die niet in de prijs zijn opgenomen", "Consumenten vragen er om", "Overheden stimuleren het"],
      correct: 1,
      feedback: "Negatieve externaliteiten: de vervuilingskosten liggen bij de samenleving, niet bij de producent. Daardoor zijn private kosten lager dan sociale kosten, wat leidt tot overproductie."
    }],
    creativePrompt: "Identificeer drie negatieve en drie positieve externaliteiten in jouw dagelijks leven of werkomgeving.",
    aiHelperPrompts: [
      "Welke negatieve externaliteiten veroorzaak jij onbewust?",
      "Hoe zou jij een belasting ontwerpen om een negatieve externaliteit te corrigeren?",
      "Waarom is het moeilijk om positieve externaliteiten te belonen?"
    ]
  },
  {
    id: "network-effects",
    title: "Netwerkeffecten",
    difficulty: 3,
    emoji: "🌐",
    academicCategory: "Systeemdenken",
    skillCategory: "Beter Redeneren",
    tags: ["Economie", "Technologie", "Netwerken", "Beter Redeneren"],
    definition: "Een product of dienst wordt waardevoller naarmate meer mensen het gebruiken. Netwerkeffecten creëren zichzelf-versterkende monopolies en maken het moeilijk voor nieuwe toetreders om te concurreren.",
    abstractExample: "Als de waarde van product X stijgt met het aantal gebruikers n (Metcalfe's wet: n²), dan heeft de marktleider een cumulatief voordeel dat moeilijk te doorbreken is.",
    examples: [
      { domain: "science", icon: "🔬", text: "Het telefoonnetwerk: één telefoon is nutteloos. Twee telefoons creëren één verbinding. Met n gebruikers zijn er n(n-1)/2 mogelijke verbindingen." },
      { domain: "business", icon: "💼", text: "WhatsApp, Facebook, LinkedIn: hun waarde zit in het netwerk van bestaande gebruikers, niet in de technologie. Nieuwe alternatieven worstelen zelfs als ze technisch beter zijn." },
      { domain: "daily", icon: "🏠", text: "Waarom gebruik je waarschijnlijk nog steeds Word of Excel? Deels omdat iedereen om je heen dat ook doet – uitwisselbaarheid is waardevoller dan de software zelf." }
    ],
    prerequisites: ["feedback-loop", "tragedy-commons"],
    unlocks: [],
    relatedPrinciples: ["feedback-loop", "schelling-point", "pareto-efficiency"],
    exercises: [{
      type: "multiple-choice",
      question: "Waarom is het voor een nieuw sociaal netwerk zo moeilijk om Facebook of Instagram te vervangen, zelfs met betere features?",
      options: ["Mensen zijn lui", "Netwerkeffecten: de waarde zit in de bestaande gebruikers, niet in de technologie", "Nieuwe netwerken zijn altijd slechter", "Adverteerders kiezen altijd voor het grootste platform"],
      correct: 1,
      feedback: "Netwerkeffecten: je netwerk van vrienden, familie en contacten zit op het bestaande platform. Een beter alternatief zonder netwerk heeft minder waarde, hoe goed de technologie ook is."
    }],
    creativePrompt: "Beschrijf drie producten of diensten in jouw leven die hun waarde grotendeels ontlenen aan netwerkeffecten.",
    aiHelperPrompts: [
      "Welke tools gebruik jij puur omdat anderen ze ook gebruiken?",
      "Hoe zou je een nieuw platform kunnen lanceren tegen een gevestigde netwerkspeler?",
      "Wanneer doorbreken netwerkeffecten zichzelf (zie: MySpace, Friendster)?"
    ]
  },
  {
    id: "overton-window",
    title: "Overtonraam",
    difficulty: 3,
    emoji: "🪟",
    academicCategory: "Systeemdenken",
    skillCategory: "Beter Redeneren",
    tags: ["Politiek", "Maatschappij", "Systeemdenken", "Beter Redeneren"],
    definition: "Het spectrum van ideeën dat op een bepaald moment politiek acceptabel is. Buiten dit raam vallen ideeën als 'te radicaal' of 'ondenkbaar'. Het raam verschuift door maatschappelijke veranderingen en discours.",
    abstractExample: "Ideeën bevinden zich op een schaal van ondenkbaar → radicaal → acceptabel → verstandig → beleid. Wat vandaag beleid is, was ooit ondenkbaar, en vice versa.",
    examples: [
      { domain: "science", icon: "🔬", text: "Het Overtonraam voor klimaatbeleid verschoof: CO₂-belasting was in de jaren '90 politiek ondenkbaar; nu is het mainstream beleid in veel landen." },
      { domain: "business", icon: "💼", text: "Vierdaagse werkweek was tien jaar geleden een randbezigheid; nu is het in het Overtonraam van serieus beleid in meerdere landen." },
      { domain: "daily", icon: "🏠", text: "Roken op kantoor was ooit normaal; nu ondenkbaar. Het Overtonraam voor rookbeleid is radicaal verschoven." }
    ],
    prerequisites: ["confirmation-bias", "social-proof"],
    unlocks: [],
    relatedPrinciples: ["social-proof", "availability-heuristic", "status-quo-bias"],
    exercises: [{
      type: "multiple-choice",
      question: "Een politicus stelt een idee voor dat momenteel als 'te radicaal' geldt. Hoe beïnvloedt dit het Overtonraam?",
      options: ["Het verandert niets", "Het kan het raam geleidelijk verschuiven door het idee bespreekbaar te maken", "Het maakt het idee onmogelijk", "Het werkt alleen als de politicus populair is"],
      correct: 1,
      feedback: "Door radicale ideeën in het debat te brengen, verschuift het middelpunt van het bespreekbare spectrum. Wat eerst 'te radicaal' leek, wordt geleidelijk 'acceptabel'."
    }],
    creativePrompt: "Noem drie ideeën die nu ondenkbaar zijn maar over 20 jaar mainstream beleid kunnen zijn. En omgekeerd.",
    aiHelperPrompts: [
      "Welke huidige wet of norm zou 50 jaar geleden ondenkbaar zijn geweest?",
      "Hoe gebruiken politici het Overtonraam strategisch?",
      "Hoe kun je het Overtonraam gebruiken om maatschappelijke verandering te begrijpen?"
    ]
  },

  // ── WETENSCHAPSFILOSOFIE ─────────────────────────────────────
  {
    id: "induction-problem",
    title: "Inductieprobleem (Hume)",
    difficulty: 4,
    emoji: "🦢",
    academicCategory: "Epistemologie",
    skillCategory: "Beter Redeneren",
    tags: ["Epistemologie", "Logica", "Inductie", "Beter Redeneren"],
    definition: "We kunnen nooit met zekerheid afleiden dat iets altijd waar zal zijn, alleen maar omdat het tot nu toe altijd waar was. Inductie geeft geen logische zekerheid, alleen verhoogde waarschijnlijkheid.",
    abstractExample: "Je hebt 1.000 witte zwanen gezien → conclusie: alle zwanen zijn wit. Dit is inductieve redenering. Eén zwarte zwaan weerlegt de conclusie. Het probleem: je kunt nooit genoeg witte zwanen zien om zekerheid te geven.",
    examples: [
      { domain: "science", icon: "🔬", text: "Newton's zwaartekrachtswet was millennialang 'bewezen' door inductie – tot Einstein aantoonde dat hij niet universeel geldig is. Elke wetenschappelijke wet is in principe falsifieerbaar." },
      { domain: "business", icon: "💼", text: "Een bedrijf groeit 10 jaar achter elkaar → 'Ons model werkt altijd.' Maar er is nooit een garantie dat de volgende jaar ook groei brengt." },
      { domain: "daily", icon: "🏠", text: "De zon ging elke dag op → 'De zon gaat morgen ook op.' Rationeel, maar niet logisch zeker – het is inductie." }
    ],
    prerequisites: ["falsification", "epistemic-humility"],
    unlocks: ["paradigm-shift"],
    relatedPrinciples: ["falsification", "black-swan", "epistemic-humility"],
    exercises: [{
      type: "multiple-choice",
      question: "Hoe reageerde de ontdekking van de zwarte zwaan in Australië op de wetenschappelijke claim 'alle zwanen zijn wit'?",
      options: ["Ze bevestigde de claim", "Ze weerlegde de claim volledig", "Ze maakte de claim sterker", "Ze was niet relevant"],
      correct: 1,
      feedback: "Één contra-voorbeeld weerlegde de universele uitspraak. Dit illustreert het inductieprobleem: hoe veel witte zwanen je ook ziet, één zwarte zwaan volstaat als weerlegging."
    }],
    creativePrompt: "Noem drie aannames die jij als 'zeker' beschouwt maar in feite op inductie berusten.",
    aiHelperPrompts: [
      "Welke zekerheden in jouw vakgebied zijn eigenlijk gebaseerd op inductie?",
      "Hoe verschilt inductieve van deductieve zekerheid?",
      "Hoe ga je rationeel om met het feit dat inductie nooit absolute zekerheid geeft?"
    ]
  },
  {
    id: "paradigm-shift",
    title: "Paradigmaverschuiving (Kuhn)",
    difficulty: 4,
    emoji: "🌀",
    academicCategory: "Epistemologie",
    skillCategory: "Beter Redeneren",
    tags: ["Wetenschapsfilosofie", "Epistemologie", "Vooruitgang", "Beter Redeneren"],
    definition: "Wetenschappelijke vooruitgang verloopt niet geleidelijk, maar via revoluties: een dominant paradigma (denkkader) stapelt anomalieën op totdat het bezwijkt en wordt vervangen door een nieuw paradigma.",
    abstractExample: "Normaalwetenschap werkt binnen een paradigma. Anomalieën worden eerst wegverklaard. Als er te veel zijn, treedt crisis op. Een revolutie brengt een nieuw paradigma dat incompatibel is met het oude.",
    examples: [
      { domain: "science", icon: "🔬", text: "Ptolemaeïsch → Copernicaans stelsel. Geocentrisme was het paradigma; anomalieën (planeetbewegingen) stapelden zich op; Copernicus initieerde de revolutie." },
      { domain: "business", icon: "💼", text: "Fysieke retail → e-commerce was geen geleidelijke verbetering, maar een paradigmaverschuiving. Bedrijven die bleven denken in het oude paradigma (Blockbuster, Kodak) verdwenen." },
      { domain: "daily", icon: "🏠", text: "Smartphones waren niet 'een betere telefoon'; ze verschoven het paradigma van communicatie, navigatie, fotografie en meer tegelijk." }
    ],
    prerequisites: ["falsification", "induction-problem"],
    unlocks: [],
    relatedPrinciples: ["falsification", "black-swan", "epistemic-humility"],
    exercises: [{
      type: "multiple-choice",
      question: "Volgens Kuhn: hoe reageert de wetenschappelijke gemeenschap aanvankelijk op anomalieën die het dominante paradigma uitdagen?",
      options: ["Ze omarmen onmiddellijk het nieuwe inzicht", "Ze negeren of herinterpreteren de anomalieën binnen het bestaande paradigma", "Ze starten altijd een revolutie", "Ze publiceren onmiddellijk weerleggingen"],
      correct: 1,
      feedback: "Normaalwetenschap is conservatief: anomalieën worden eerst wegverklaard of genegeerd. Pas als er te veel zijn en een geloofwaardig alternatief bestaat, vindt de paradigmaverschuiving plaats."
    }],
    creativePrompt: "Identificeer een paradigmaverschuiving in jouw vakgebied. Wat waren de anomalieën die het oude paradigma ondermijnden?",
    aiHelperPrompts: [
      "In welk paradigma werkt jouw vakgebied momenteel?",
      "Welke anomalieën zie jij die het huidige paradigma uitdagen?",
      "Hoe herken je of je vastzit in een oud paradigma?"
    ]
  },
  {
    id: "abduction",
    title: "Abductie (Beste Verklaring)",
    difficulty: 3,
    emoji: "🔍",
    academicCategory: "Epistemologie",
    skillCategory: "Beter Redeneren",
    tags: ["Logica", "Epistemologie", "Redeneren", "Beter Redeneren"],
    definition: "Abductie (ook: inference to the best explanation) is het kiezen van de hypothese die de beschikbare feiten het best verklaart. Niet de meest zekere, maar de meest waarschijnlijke verklaring.",
    abstractExample: "Gegeven feiten F, zoek de hypothese H die F het best verklaart. 'Best' betekent: simpelste, meest coherente, meest overeenstemmende met achtergrondkennis. Sherlock Holmes-redenering.",
    examples: [
      { domain: "science", icon: "🔬", text: "Dokters stellen een diagnose via abductie: welke ziekte verklaart deze combinatie van symptomen het best? Ze kiezen niet de zekere diagnose, maar de meest waarschijnlijke." },
      { domain: "business", icon: "💼", text: "Omzet daalt plotseling. Verklaringen: seizoensgebondenheid, concurrent, productprobleem, PR-crisis. Je kiest de hypothese die alle data het best verklaart en test die eerst." },
      { domain: "daily", icon: "🏠", text: "Je komt thuis: de deur staat open, een lamp is kapot. Inbraak of wind? Je kiest de verklaring die alle feiten het best dekt." }
    ],
    prerequisites: ["deduction-induction", "falsification"],
    unlocks: [],
    relatedPrinciples: ["occams-razor", "falsification", "deduction-induction"],
    exercises: [{
      type: "multiple-choice",
      question: "Sherlock Holmes zegt: 'U bent militair arts geweest in Afghanistan.' Op basis van aanwijzingen. Welke redeneervorm gebruikt hij?",
      options: ["Deductie", "Inductie", "Abductie", "Modus ponens"],
      correct: 2,
      feedback: "Abductie: Holmes kiest de hypothese die alle aanwijzingen (houding, gebruinde huid, arm in draagband) het beste verklaart. Niet logisch zeker, maar de meest plausibele verklaring."
    }],
    creativePrompt: "Beschrijf een situatie waarbij jij abductief redeneerde om een probleem op te lossen.",
    aiHelperPrompts: [
      "Hoe kies jij tussen concurrerende verklaringen voor een situatie?",
      "Wanneer is abductie betrouwbaarder dan inductie?",
      "Hoe onderscheid je abductie van voorbarige conclusies?"
    ]
  },
  {
    id: "self-serving-bias",
    title: "Zelfbevestigingsbias",
    difficulty: 2,
    emoji: "😇",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    tags: ["Psychologie", "Bias", "Zelfperceptie", "Mensen Begrijpen"],
    definition: "We schrijven successen toe aan onze eigen capaciteiten en mislukkingen aan externe factoren. Dit beschermt ons zelfbeeld maar vertekent ons leren van fouten.",
    abstractExample: "Bij succes: 'Dat heb ik gedaan door mijn talent en inspanning.' Bij mislukking: 'Dat was pech, timing, of de fout van anderen.' De attributie is systematisch asymmetrisch.",
    examples: [
      { domain: "science", icon: "🔬", text: "Onderzoekers schrijven succesvolle publicaties toe aan hun inzichten; mislukte experimenten aan slechte apparatuur of ongeschikte proefpersonen." },
      { domain: "business", icon: "💼", text: "Een manager pakt de eer voor een succesvol kwartaal, maar wijt een slecht kwartaal aan de marktomstandigheden. Beide oorzaken spelen mee, maar de attribuut is scheef." },
      { domain: "daily", icon: "🏠", text: "Je haalt een goed cijfer: 'Ik heb hard gestudeerd.' Je haalt een slecht cijfer: 'De docent toetst oneerlijk.'" }
    ],
    prerequisites: ["confirmation-bias", "fundamental-attribution-error"],
    unlocks: [],
    relatedPrinciples: ["confirmation-bias", "fundamental-attribution-error", "dunning-kruger"],
    exercises: [{
      type: "multiple-choice",
      question: "Een team wint een wedstrijd. Ieder lid zegt: 'Ik was cruciaal voor de overwinning.' Na een verlies zegt ieder: 'De anderen faalden.' Wat illustreert dit?",
      options: ["Fundamentele attributiefout", "Zelfbevestigingsbias", "Hindsightbias", "Sociale bewijskracht"],
      correct: 1,
      feedback: "Zelfbevestigingsbias: bij succes claimen mensen persoonlijk krediet, bij mislukking wijzen ze naar externe of interne oorzaken bij anderen. Het zelfbeeld wordt consistent beschermd."
    }],
    creativePrompt: "Denk aan een recente mislukking. Hoe groot was de rol van jouw eigen beslissingen vergeleken met externe factoren – eerlijk beoordeeld?",
    aiHelperPrompts: [
      "Wanneer heb jij een mislukking te snel aan externe oorzaken toegeschreven?",
      "Hoe kun je zelfbevestigingsbias herkennen bij jezelf zonder te vervallen in zelfsabotage?",
      "Hoe helpt bewustzijn van deze bias bij beter leren van fouten?"
    ]
  },
  {
    id: "time-value-money",
    title: "Tijdswaarde van Geld",
    difficulty: 3,
    emoji: "💰",
    academicCategory: "Besliskunde",
    skillCategory: "Beter Beslissen",
    tags: ["Economie", "Financiën", "Besliskunde", "Beter Beslissen"],
    definition: "Geld dat je nu hebt is meer waard dan hetzelfde bedrag in de toekomst, omdat je het kunt investeren en rendement kunt maken. Toekomstige geldstromen moeten worden 'verdisconteerd' naar hun huidige waarde.",
    abstractExample: "€100 nu is meer waard dan €100 over een jaar. Bij 5% rente is €100 nu equivalent aan €105 over een jaar. De 'netto contante waarde' verdisconteert alle toekomstige geldstromen naar vandaag.",
    examples: [
      { domain: "science", icon: "🔬", text: "Kosten-batenanalyses van overheidsprojecten gebruiken verdiscontering: een voordeel van €1 miljoen over 20 jaar is nu veel minder waard bij een discontovoet van 5%." },
      { domain: "business", icon: "💼", text: "Investeerders berekenen de netto contante waarde (NPV) van projecten: alle toekomstige kasstromen teruggerekend naar vandaag. Positieve NPV = rendabel." },
      { domain: "daily", icon: "🏠", text: "Waarom is een loterijprijs van €1 miljoen in 20 jaarlijkse termijnen minder waard dan €1 miljoen ineens? Tijdswaarde van geld." }
    ],
    prerequisites: ["opportunity-cost", "hyperbolic-discounting"],
    unlocks: [],
    relatedPrinciples: ["opportunity-cost", "hyperbolic-discounting", "expected-value"],
    exercises: [{
      type: "multiple-choice",
      question: "Je kunt €1000 nu ontvangen of €1100 over een jaar. De spaarrente is 5%. Wat is rationeel?",
      options: ["De €1100 over een jaar, want dat is meer", "De €1000 nu, want €1000 × 1,05 = €1050 – minder dan €1100", "De €1100, want inflatie maakt €1000 nu minder waard", "Maakt niet uit"],
      correct: 1,
      feedback: "€1000 nu groeit bij 5% naar €1050 na een jaar. €1100 > €1050, dus de toekomstige betaling is rationeel te prefereren. Maar als de rente 12% was, zou €1000 nu €1120 opleveren en is nu beter."
    }],
    creativePrompt: "Bereken de tijdswaarde van een grote uitgave of investering die jij overweegt.",
    aiHelperPrompts: [
      "Hoe gebruik jij tijdswaarde van geld bij grote financiële beslissingen?",
      "Wanneer is een betaling nu altijd beter dan later?",
      "Hoe beïnvloedt inflatie de tijdswaarde van geld?"
    ]
  },
  {
    id: "dunbar-number",
    title: "Getal van Dunbar",
    difficulty: 2,
    emoji: "👨‍👩‍👧‍👦",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    tags: ["Psychologie", "Sociaal", "Groepen", "Mensen Begrijpen"],
    definition: "De cognitieve limiet voor het aantal stabiele sociale relaties dat een mens kan onderhouden is ca. 150. Groepen die groter zijn, vereisen formele hiërarchieën en regels om samen te werken.",
    abstractExample: "Robin Dunbar: de neocortexomvang van primaten correleert met groepsgrootte. Voor mensen is de voorspelde groep ~150. Grotere groepen vereisen bureaucratie; kleinere zijn stabiel zonder formele structuur.",
    examples: [
      { domain: "science", icon: "🔬", text: "Historische militaire eenheden (compagnie ~150 man), traditionele dorpen en neolithische nederzettingen convergeren opvallend naar ~150 mensen." },
      { domain: "business", icon: "💼", text: "Gore-Tex (W.L. Gore) limiteert bewust zijn fabrieken tot ~150 medewerkers. Als de grens bereikt is, opent het een nieuwe fabriek – minder bureaucratie, meer cohesie." },
      { domain: "daily", icon: "🏠", text: "Op sociale media heb je misschien 500 contacten, maar actief onderhoud je waarschijnlijk relaties met ~150 of minder – de rest zijn 'slapende' connecties." }
    ],
    prerequisites: ["social-proof"],
    unlocks: [],
    relatedPrinciples: ["social-proof", "reciprocity", "tragedy-commons"],
    exercises: [{
      type: "multiple-choice",
      question: "Een startup groeit van 20 naar 200 medewerkers. Welk probleem voorspelt het getal van Dunbar?",
      options: ["Te weinig klanten", "Verlies van informele cohesie en nood aan formele processen en hiërarchie", "Te hoge huurkosten", "Problemen met productiviteit door thuiswerken"],
      correct: 1,
      feedback: "Boven ~150 mensen kunnen informele sociale banden de organisatie niet meer bij elkaar houden. Formele structuren, regels en management lagen worden noodzakelijk."
    }],
    creativePrompt: "Tel je actieve sociale relaties. Kom je in de buurt van 150? Hoe verdeel je jouw sociale capaciteit?",
    aiHelperPrompts: [
      "Hoe beheert jouw organisatie cohesie naarmate ze groeit?",
      "Welke 'lagen' van je sociale netwerk – intieme vrienden, kennissen, contacten – herken je?",
      "Hoe veranderen sociale media de praktische gevolgen van het getal van Dunbar?"
    ]
  },
  {
    id: "locus-of-control",
    title: "Locus of Control",
    difficulty: 2,
    emoji: "🎮",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    tags: ["Psychologie", "Motivatie", "Zelfperceptie", "Mensen Begrijpen"],
    definition: "De mate waarin mensen geloven dat zij (intern) of externe krachten (extern) de uitkomsten in hun leven bepalen. Een interne locus correleert met meer initiatief, doorzettingsvermogen en veerkracht.",
    abstractExample: "Intern: 'Mijn inspanning en keuzes bepalen mijn uitkomsten.' Extern: 'Succes of mislukking hangt af van geluk, anderen of het systeem.' Beide extremen zijn onrealistisch; de realiteit is altijd gemengd.",
    examples: [
      { domain: "science", icon: "🔬", text: "Rotter (1954) ontwikkelde de locus-of-control-schaal. Studies tonen dat mensen met een interne locus gemiddeld gezonder zijn, hogere schoolprestaties halen en meer tevreden zijn met hun werk." },
      { domain: "business", icon: "💼", text: "Ondernemers scoren doorgaans hoger op interne locus: ze geloven dat hun beslissingen het verschil maken. Extreme interne locus kan echter leiden tot overschatting van eigen controle." },
      { domain: "daily", icon: "🏠", text: "Iemand die denkt dat zijn gezondheid puur door genen bepaald wordt (externe locus), is minder geneigd gezond te leven. Iemand met interne locus zal eerder sport en voeding aanpassen." }
    ],
    prerequisites: ["dunning-kruger", "self-serving-bias"],
    unlocks: [],
    relatedPrinciples: ["self-serving-bias", "planning-fallacy", "dunning-kruger"],
    exercises: [{
      type: "multiple-choice",
      question: "Iemand faalt herhaaldelijk op toetsen en zegt: 'De toetsen zijn altijd oneerlijk.' Wat suggereert dit?",
      options: ["Interne locus of control", "Externe locus of control", "Dunning-Kruger-effect", "Zelfbevestigingsbias"],
      correct: 1,
      feedback: "Externe locus: de oorzaak van mislukking wordt consistent buiten zichzelf gezocht. Dit maakt bijsturing moeilijk, want als het altijd aan anderen ligt, is er geen reden om eigen gedrag te veranderen."
    }],
    creativePrompt: "Identificeer drie gebieden in jouw leven waar je een interne locus hebt en drie waar je meer extern georienteerd bent.",
    aiHelperPrompts: [
      "In welke situaties voel jij je meest in controle over je uitkomsten?",
      "Hoe verschuif je bewust naar een meer interne locus zonder de realiteit van externe factoren te ontkennen?",
      "Wanneer is een externe locus eigenlijk realistischer?"
    ]
  },

  // ── EXTRA PRINCIPES – BATCH 6 (Organisatie & Besliskunde) ──
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
  },

  // ── EXTRA PRINCIPES – BATCH 7 (Psychologie & Organisatie) ──
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
};

// Get all unique tags
export const getAllTags = () => {
  const tags = new Set();
  principles.forEach(p => p.tags.forEach(tag => tags.add(tag)));
  return [...tags].sort();
};

export default principles;
