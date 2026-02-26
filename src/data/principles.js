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
