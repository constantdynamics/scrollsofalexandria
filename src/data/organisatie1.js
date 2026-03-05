// Organisatie – Batch 1: 15 kernprincipes van organisatietheorie

export const organisatie1 = [
  {
    id: 'taylors-scientific-management',
    title: 'Scientific Management van Taylor',
    difficulty: 2,
    emoji: '⚙️',
    academicCategory: 'Organisatie',
    skillCategory: 'Strategisch Denken',
    definition: 'Frederick Taylor\'s scientific management (1911) stelt dat arbeidsprocessen kunnen worden geoptimaliseerd door wetenschappelijk onderzoek: tijdstudies, taakvereenvoudiging en het scheiden van denken (management) en doen (werknemers). Efficiëntie is het hoogste doel.',
    abstractExample: 'Taylor ontleedde elke taak in kleinste bewegingen, meet de optimale uitvoeringstijd en elimineerde verspilling. Het resultaat: hogere productiviteit maar ook dehumanisering — de arbeider wordt een onderdeel van de machine. Modern lean management bouwt hierop voort.',
    examples: [
      { domain: 'business', icon: '💼', text: 'Een callcenter dicteert precies hoeveel seconden elk gesprek duurt, welke scripts worden gebruikt, en welke pauzes worden genomen. Dit is scientific management in zijn modernste vorm.' },
      { domain: 'daily', icon: '🏠', text: 'Een keuken die zijn mise en place organiseert via tijdstudies — welk gerecht kost hoeveel stappen, welke volgorde is optimaal — past Tayloriaanse logica toe.' },
      { domain: 'science', icon: '🔬', text: 'Taylor (The Principles of Scientific Management, 1911): "the best management is a true science, resting upon clearly defined laws, rules, and principles." Dit legde de basis voor industrieel engineering.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wat is het centrale doel van Taylor\'s scientific management?',
        options: [
          'Maximale medewerkerstevredenheid',
          'Maximale efficiëntie via wetenschappelijke analyse van arbeid',
          'Democratisch georganiseerde bedrijven',
          'Innovatie via creatieve vrijheid'
        ],
        correct: 1,
        feedback: 'Scientific management richt zich op het maximaliseren van efficiëntie door arbeid wetenschappelijk te analyseren, te standaardiseren en te optimaliseren.'
      }
    ],
    creativePrompt: 'Beschrijf een activiteit in jouw dagelijks leven die je bewust hebt geoptimaliseerd via tijdsbewust denken. Wat won je? Wat verloor je?',
    aiHelperPrompts: ['Wat zijn de grenzen van scientific management bij kenniswerk?', 'Hoe verhoudt lean thinking zich tot Taylors ideeën?']
  },
  {
    id: 'maslow-piramide',
    title: 'Maslow\'s Behoeftepiramide',
    difficulty: 1,
    emoji: '🔺',
    academicCategory: 'Organisatie',
    skillCategory: 'Mensen Begrijpen',
    definition: 'Maslow\'s hiërarchie van behoeften (1943) stelt dat menselijke motivatie verloopt van basisbehoeften (fysiologie, veiligheid) naar hogere behoeften (sociale verbinding, erkenning, zelfactualisatie). Hogere behoeften worden pas relevant als lagere zijn bevredigd.',
    abstractExample: 'Iemand die honger lijdt, motiveert eten — niet zelfontplooiing. Pas als de lagere niveaus zijn bevredigd, verschuift motivatie naar hogere niveaus. Dit model verklaart waarom beloning in werk verschilt: de ene medewerker wil veiligheid, de andere erkenning.',
    examples: [
      { domain: 'business', icon: '💼', text: 'Een medewerker die bang is ontslagen te worden (veiligheidsbehoefte niet bevredigd), zal niet gemotiveerd zijn door een creatief innovatieproject (hogere behoefte). Los eerst de onzekerheid op.' },
      { domain: 'daily', icon: '🏠', text: 'Na een verhuizing naar een nieuwe stad zoek je eerst sociale verbinding (derde niveau) voor je je richt op carrièregroei (vierde niveau). De piramide verklaart de volgorde van prioriteiten.' },
      { domain: 'science', icon: '🔬', text: 'Maslow (A Theory of Human Motivation, 1943): de piramide is invloedrijk maar empirisch zwak onderbouwd. Later onderzoek (Wahba & Bridwell, 1976) vond geen bewijs voor de strikte hiërarchiestelling.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Op welk niveau van Maslow\'s piramide zit erkenning van collega\'s?',
        options: [
          'Fysiologische behoeften',
          'Veiligheidsbehoeften',
          'Sociale behoeften',
          'Esteem/erkenningsbehoeften'
        ],
        correct: 3,
        feedback: 'Erkenning van collega\'s valt onder het vierde niveau: esteem/erkenningsbehoeften — waardering, status en respect van anderen.'
      }
    ],
    creativePrompt: 'Op welk niveau van Maslow\'s piramide zit jij momenteel in je werk of leven? Welk lager niveau vraagt meer aandacht?',
    aiHelperPrompts: ['Is de strikte volgorde van Maslow\'s piramide realistisch?', 'Hoe gebruik je Maslow om werknemers beter te motiveren?']
  },
  {
    id: 'situationeel-leiderschap',
    title: 'Situationeel Leiderschap',
    difficulty: 2,
    emoji: '🎯',
    academicCategory: 'Organisatie',
    skillCategory: 'Mensen Begrijpen',
    definition: 'Situationeel leiderschap (Hersey & Blanchard) stelt dat er geen universele leiderschapsstijl is. Effectieve leiders passen hun stijl aan de situatie en de ontwikkelingsniveau van de medewerker aan: directief voor beginners, coachend voor groeienden, ondersteunend voor gevorderde, delegerend voor experts.',
    abstractExample: 'Dezelfde taak — een rapport schrijven — vraagt directief leiderschap van een nieuwe stagiair (stap voor stap uitleggen) maar delegerend leiderschap van een ervaren medewerker (laat het los). De leider die altijd dezelfde stijl hanteert, faalt voor de een of de ander.',
    examples: [
      { domain: 'business', icon: '💼', text: 'Een manager die een ervaren medewerker blijft micromanagen (directief) creëert frustratie. Dezelfde manager die een nieuweling totaal vrij laat (delegerend), creëert verwarring. Context bepaalt de stijl.' },
      { domain: 'daily', icon: '🏠', text: 'Je leert je kind fietsen: eerst houd je het stuur vast (directief), dan geef je instructies terwijl je naast loopt (coachend), dan volg je op afstand (ondersteunend), dan laat je volledig los (delegerend).' },
      { domain: 'science', icon: '🔬', text: 'Hersey & Blanchard (Management of Organizational Behavior, 1969): vier leiderschapsstijlen (S1-S4) gekoppeld aan vier ontwikkelingsniveaus van medewerkers (D1-D4). Effectief leiderschap = goede matching.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wat is de kern van situationeel leiderschap?',
        options: [
          'Altijd participatief en democratisch leidinggeven',
          'Leiderschapsstijl aanpassen aan de ontwikkelingsniveau en situatie van de medewerker',
          'Taakgerichte aanpak ongeacht persoonlijkheid',
          'Visie uitdragen als primaire verantwoordelijkheid'
        ],
        correct: 1,
        feedback: 'Situationeel leiderschap stelt dat er geen universele beste stijl is — effectief leiderschap past de stijl aan de situatie en het niveau van de medewerker aan.'
      }
    ],
    creativePrompt: 'Denk aan een leider in jouw leven (ouder, manager, coach). Op welke momenten paste die zijn stijl aan, en op welke momenten niet? Wat was het effect?',
    aiHelperPrompts: ['Hoe bepaal je welk ontwikkelingsniveau iemand heeft?', 'Wat zijn de valkuilen van te directief of te delegerend leiderschap?']
  },
  {
    id: 'bureaucratie-weber',
    title: 'Bureaucratie als Rationeel Systeem (Weber)',
    difficulty: 2,
    emoji: '📋',
    academicCategory: 'Organisatie',
    skillCategory: 'Strategisch Denken',
    definition: 'Max Weber beschreef de bureaucratie als het rationaalste organisatiemodel: heldere hiërarchie, gespecialiseerde functies, schriftelijke regels, neutrale selectie op competentie en scheiding van functie en persoon. Dit zorgt voor voorspelbaarheid, eerlijkheid en efficiency op grote schaal.',
    abstractExample: 'Premoderne organisaties waren gebaseerd op persoonlijke loyaliteit (feodaal) of tradities. Bureaucratie vervangt dit door systeem: je doet wat de functie vereist, niet wat de persoon wil. Dit maakt grootschalige coördinatie mogelijk — maar ook rigiditeit en "De Ijzeren Kooi".',
    examples: [
      { domain: 'business', icon: '💼', text: 'Een belastingdienst die elke aanvraag behandelt via identieke procedures, ongeacht wie je bent of kent, is een Weberiaanse bureaucratie in werking — eerlijk en voorspelbaar, maar traag.' },
      { domain: 'daily', icon: '🏠', text: 'De gemeente die een bouwvergunning weigert omdat één document ontbreekt, ook al is het evident dat het project klopt — dit is bureaucratie die zijn doel voorbij schiet.' },
      { domain: 'science', icon: '🔬', text: 'Weber (Wirtschaft und Gesellschaft, 1921-22): bureaucratie is technisch superieur maar leidt tot de "ijzeren kooi van rationaliteit" — een systeem dat individuen gevangenzet in procedures en regels.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welk voordeel heeft Webers bureaucratisch model volgens de theorie?',
        options: [
          'Maximale flexibiliteit',
          'Persoonlijke relaties staan centraal',
          'Voorspelbaarheid en eerlijkheid via regels en procedures',
          'Snelle besluitvorming'
        ],
        correct: 2,
        feedback: 'Webers bureaucratie zorgt voor voorspelbaarheid en eerlijkheid door vaste regels, procedures en neutrale selectie — iedereen wordt gelijk behandeld.'
      }
    ],
    creativePrompt: 'Beschrijf een moment waarbij bureaucratie jou beschermde (eerlijk behandeld werd) en een moment waarbij het je belemmerde (rigiditeit). Wat maakt het verschil?',
    aiHelperPrompts: ['Wanneer is bureaucratie nuttig en wanneer schadelijk?', 'Hoe verhoudt agile organiseren zich tot Webers model?']
  },
  {
    id: 'organisatiecultuur-schein',
    title: 'Organisatiecultuur: Schein\'s Drie Lagen',
    difficulty: 2,
    emoji: '🧅',
    academicCategory: 'Organisatie',
    skillCategory: 'Mensen Begrijpen',
    definition: 'Edgar Schein beschreef organisatiecultuur als drie lagen: (1) artefacten (zichtbare uitingen: huisstijl, kantoorinrichting), (2) beleden waarden (officieel beleid, uitgesproken normen), en (3) basisassumpties (onbewuste overtuigingen die gedrag echt sturen). Echte cultuur zit in de basisassumpties.',
    abstractExample: 'Een bedrijf zegt "we waarderen transparantie" (beleden waarde) maar sluit slecht nieuws steeds toe (basisassumptie: kwetsbaarheid is gevaarlijk). De artefacten en beleden waarden kunnen de basisassumpties maskeren — maar de basisassumpties bepalen het werkelijke gedrag.',
    examples: [
      { domain: 'business', icon: '💼', text: 'Een tech-startup heeft een tafelvoetbal (artefact) en hangt posters op over innovatie (beleden waarde), maar elke medewerker die faalt wordt snel ontslagen (basisassumptie: fouten zijn verboden). De werkelijke cultuur is risicomijdend.' },
      { domain: 'daily', icon: '🏠', text: 'In een familie wordt openlijk gezegd "we praten over alles" (beleden waarde), maar gevoelige onderwerpen worden altijd vermeden (basisassumptie). De echte norm is conflictvermijding.' },
      { domain: 'science', icon: '🔬', text: 'Schein (Organizational Culture and Leadership, 1985): basisassumpties zijn zo vanzelfsprekend dat ze onzichtbaar zijn voor de leden zelf. Ze moeten worden blootgelegd via etnografisch onderzoek.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welke laag van Schein\'s cultuurmodel bepaalt het werkelijke gedrag?',
        options: [
          'Artefacten (zichtbare uitingen)',
          'Beleden waarden (officieel beleid)',
          'Basisassumpties (onbewuste overtuigingen)',
          'Managementdoelstellingen'
        ],
        correct: 2,
        feedback: 'Basisassumpties zijn de diepste laag — onbewuste overtuigingen die daadwerkelijk gedrag sturen, ook als ze haaks staan op de officieel beleden waarden.'
      }
    ],
    creativePrompt: 'Analyseer een organisatie die je kent via Scheins model. Wat zijn de artefacten, beleden waarden, en welke basisassumpties kun je ontdekken?',
    aiHelperPrompts: ['Hoe kun je basisassumpties in een organisatie blootleggen?', 'Kan een cultuur bewust worden veranderd, en zo ja hoe?']
  },
  {
    id: 'matrix-organisatie',
    title: 'De Matrixorganisatie',
    difficulty: 2,
    emoji: '⊞',
    academicCategory: 'Organisatie',
    skillCategory: 'Strategisch Denken',
    definition: 'Een matrixorganisatie combineert twee of meer structuren: medewerkers rapporteren aan zowel een functionele manager (wat ze doen) als een projectmanager (waarvoor ze het doen). Dit bevordert flexibiliteit en kennisdeling maar creëert ook complexiteit en rolconflict.',
    abstractExample: 'Een IT-engineer rapporteert aan de CTO (functionele hiërarchie) én aan de projectmanager van het klantenproject (horizontale coördinatie). Voordeel: optimale benutting van schaarse expertise. Nadeel: twee bazen met conflicterende prioriteiten — "Two-boss problem".',
    examples: [
      { domain: 'business', icon: '💼', text: 'Grote consultancybedrijven zoals McKinsey werken in matrices: consultants horen bij een praktijkgroep (functioneel) maar werken op klantprojecten (projectstructuur). Loyaliteit is altijd gesplitst.' },
      { domain: 'daily', icon: '🏠', text: 'Een schoolleraar die ook coördinator is van een intercollegiaal project, heeft twee rollen met soms conflicterende eisen. Dit is een kleine matrixstructuur in de praktijk.' },
      { domain: 'science', icon: '🔬', text: 'Jay Galbraith (Designing Matrix Organizations that Actually Work, 2009): matrices werken goed bij complexe, onzekere omgevingen met schaarse middelen maar vereisen een sterke conflictresolutiecultuur.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wat is het voornaamste nadeel van een matrixorganisatie?',
        options: [
          'Geen specialisatie mogelijk',
          'Medewerkers hebben te weinig autonomie',
          'Rolconflict door twee rapportagelijnen',
          'Te weinig samenwerking tussen afdelingen'
        ],
        correct: 2,
        feedback: 'In een matrixorganisatie rapporteren medewerkers aan twee managers met mogelijk conflicterende prioriteiten — dit "two-boss problem" is het klassieke nadeel.'
      }
    ],
    creativePrompt: 'Heb jij ooit in een situatie gezeten met twee "bazen" met conflicterende verwachtingen? Hoe navigeerde je dat?',
    aiHelperPrompts: ['Wanneer is een matrixorganisatie zinvol versus een functionele structuur?', 'Hoe voorkom je rolconflict in een matrix?']
  },
  {
    id: 'theorie-x-y',
    title: 'McGregor\'s Theorie X en Theorie Y',
    difficulty: 1,
    emoji: '🔄',
    academicCategory: 'Organisatie',
    skillCategory: 'Mensen Begrijpen',
    definition: 'Douglas McGregor (1960) beschreef twee tegengestelde aannames over medewerkers: Theorie X (mensen zijn lui, vermijden werk, moeten worden gecontroleerd) en Theorie Y (mensen zijn van nature gemotiveerd, zoeken verantwoordelijkheid, willen groeien). Leiderschapsstijl vloeit voort uit welke aanname je hanteert.',
    abstractExample: 'Een Theorie X-manager micromanaged, controleert, en vertrouwt niet. Dit creëert een self-fulfilling prophecy: gecontroleerde medewerkers worden passief. Een Theorie Y-manager geeft autonomie, vertrouwen, en verantwoordelijkheid — en trekt het beste uit mensen naar boven.',
    examples: [
      { domain: 'business', icon: '💼', text: 'Thuiswerken als test: de manager die het onmogelijk maakt (Theorie X: ze werken niet thuis) versus de manager die het vertrouwt (Theorie Y: ze zijn volwassen). Onderzoek bevestigt dat Theorie Y-management betere resultaten geeft.' },
      { domain: 'daily', icon: '🏠', text: 'Een ouder die het kind altijd controleert of huiswerk gemaakt is (Theorie X), tegenover een ouder die het kind verantwoordelijk maakt voor eigen planning (Theorie Y). Welke aanpak ontwikkelt meer autonomie?' },
      { domain: 'science', icon: '🔬', text: 'McGregor (The Human Side of Enterprise, 1960): Theorie Y sluit aan bij Maslow\'s hogere behoeften. Moderne organisaties bewegen naar Theorie Y, maar cultuurverandering vereist consistentie over jaren.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wat is het kernverschil tussen Theorie X en Theorie Y?',
        options: [
          'Theorie X is voor grote bedrijven, Theorie Y voor kleine',
          'Theorie X ziet mensen als lui en ongemotiveerd; Theorie Y ziet mensen als intrinsiek gemotiveerd',
          'Theorie X is modern, Theorie Y is verouderd',
          'Theorie X gaat over taken, Theorie Y over relaties'
        ],
        correct: 1,
        feedback: 'Het fundamentele verschil zit in de aanname over menselijke motivatie: Theorie X ziet mensen als passief en lui; Theorie Y ziet mensen als van nature gemotiveerd en verantwoordelijkheidsgericht.'
      }
    ],
    creativePrompt: 'Welke Theorie X- of Y-aannames sturen jouw gedrag als manager, ouder of teamlid? Hoe beïnvloeden die aannames de mensen om je heen?',
    aiHelperPrompts: ['Zijn er situaties waarin Theorie X-management effectiever is?', 'Hoe verander je een Theorie X-cultuur naar Theorie Y?']
  },
  {
    id: 'verandermanagement-kotter',
    title: 'Kotter\'s 8-Stappen Verandermodel',
    difficulty: 2,
    emoji: '🚀',
    academicCategory: 'Organisatie',
    skillCategory: 'Strategisch Denken',
    definition: 'John Kotter\'s 8-stappen model voor organisatieverandering: (1) gevoel van urgentie creëren, (2) coalitie bouwen, (3) visie ontwikkelen, (4) visie communiceren, (5) empowerment, (6) kortetermijnwinsten boeken, (7) consolideren en meer verandering aanjagen, (8) verankering in cultuur.',
    abstractExample: 'Organisatieverandering mislukt niet door gebrek aan plannen, maar door gebrek aan urgentie, een zwakke coalitie, of te weinig communicatie. Kotter\'s model pakt elke valkuil systematisch aan. Stap 1 (urgentie) is de meest kritische — zonder urgentie beweegt niemand.',
    examples: [
      { domain: 'business', icon: '💼', text: 'Een bank die digitaliseert: (1) "We verliezen klanten aan fintechs" (urgentie), (2) diverse coalitie van IT en business, (3) "digitaal-eerst"-visie, (4) wekelijkse communicatie — stap voor stap door het model.' },
      { domain: 'daily', icon: '🏠', text: 'Een gezin dat wil stoppen met vlees eten: (1) documentaire kijken die urgentie schept, (2) alle gezinsleden meenemen in de beslissing, (3) gezamenlijk kookplan maken — Kotter in miniatuur.' },
      { domain: 'science', icon: '🔬', text: 'Kotter (Leading Change, 1996): 70% van veranderprojecten mislukt. De meest voorkomende fout: stap 1 overslaan (urgentie) en beginnen met de structuur. Zonder urgentie is er geen energie voor de rest.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wat is de meest kritische eerste stap in Kotter\'s verandermodel?',
        options: [
          'Een gedetailleerd veranderplan opstellen',
          'Een gevoel van urgentie creëren',
          'De organisatiestructuur aanpassen',
          'Training organiseren voor alle medewerkers'
        ],
        correct: 1,
        feedback: 'Kotter stelt dat een gevoel van urgentie de meest kritische eerste stap is — zonder urgentie beweegt niemand, ongeacht hoe goed de rest van het plan is.'
      }
    ],
    creativePrompt: 'Beschrijf een verandering die jij hebt geprobeerd door te voeren (persoonlijk of professioneel). Welke stappen van Kotter sloeg je over? Wat was het effect?',
    aiHelperPrompts: ['Hoe creëer je authentic urgentie zonder paniek te zaaien?', 'Wanneer is Kotter\'s model te rigide?']
  },
  {
    id: 'principal-agent-probleem',
    title: 'Het Principal-Agent Probleem',
    difficulty: 3,
    emoji: '🔀',
    academicCategory: 'Organisatie',
    skillCategory: 'Strategisch Denken',
    definition: 'Het principal-agent probleem ontstaat wanneer een principal (opdrachtgever) een agent (uitvoerder) inschakelt maar hun belangen niet volledig overeenkomen, en de principal de agent niet volledig kan monitoren. De agent kan dan in zijn eigen belang handelen ten koste van de principal.',
    abstractExample: 'Aandeelhouder (principal) huurt CEO (agent) in. CEO heeft belang bij prestige, zekerheid en hoog salaris; aandeelhouder wil winstmaximalisatie. CEO kan risicomijdend gedrag vertonen of kortetermijndenken voor bonussen. Dit is de kern van corporate governance.',
    examples: [
      { domain: 'business', icon: '💼', text: 'Een salesmanager (agent) die commissie ontvangt per verkoop (principal: bedrijf), kan oversellen aan klanten die het product niet nodig hebben. Het prikkelontwerp creëert het probleem.' },
      { domain: 'daily', icon: '🏠', text: 'Een autogarage (agent) repareert meer dan nodig is — jij (principal) kunt de diagnose niet controleren. Informatieasymmetrie stelt de agent in staat zijn belang te dienen ten koste van het jouwe.' },
      { domain: 'science', icon: '🔬', text: 'Jensen & Meckling (Theory of the Firm, 1976): agency costs — kosten van monitoring, bonding, en residual loss — zijn de prijs van scheiding van eigendom en controle. Corporate governance probeert deze te minimaliseren.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wat is de kern van het principal-agent probleem?',
        options: [
          'Miscommunicatie tussen partijen',
          'Conflicterende belangen en informatieasymmetrie tussen opdrachtgever en uitvoerder',
          'Gebrek aan contractuele overeenkomsten',
          'Te veel hiërarchiestappen in een organisatie'
        ],
        correct: 1,
        feedback: 'Het principal-agent probleem ontstaat uit conflicterende belangen en informatieasymmetrie — de agent heeft meer informatie en kan die gebruiken in zijn eigen belang, ten koste van de principal.'
      }
    ],
    creativePrompt: 'Identificeer drie principal-agent relaties in jouw dagelijks leven. Welke prikkels sturen het gedrag van de agent? Hoe zou je die beter kunnen ontwerpen?',
    aiHelperPrompts: ['Hoe los je het principal-agent probleem op via prikkelontwerp?', 'Wanneer is monitoring effectief versus contraproductief?']
  },
  {
    id: 'holacracy',
    title: 'Holocratie: Zelfsturende Organisaties',
    difficulty: 3,
    emoji: '🔵',
    academicCategory: 'Organisatie',
    skillCategory: 'Strategisch Denken',
    definition: 'Holocratie (Robertson) is een organisatiemodel dat traditionele managementhiërarchie vervangt door zelfsturende teams ("cirkels") met gedistribueerde autoriteit. Er zijn geen managers — rollen worden gedragen door mensen, niet functies. Beslissingsbevoegdheid ligt zo laag mogelijk.',
    abstractExample: 'In een holocratie bestaat geen "CEO die beslist." Rollen zijn gedefinieerd, cirkels hebben expliciet gedelegeerde bevoegdheden, en iedereen kan spanning aankaarten die de organisatie vooruithelpt. Zappos adopteerde holocratie in 2015 — met gemengde resultaten.',
    examples: [
      { domain: 'business', icon: '💼', text: 'Zappos\' overstap naar holocratie zorgde dat 14% van de medewerkers vertrok via een "vertrekpakket". Zelfsturing werkt niet voor iedereen — het vraagt andere competenties en tolerantie voor ambiguïteit.' },
      { domain: 'daily', icon: '🏠', text: 'Een woongemeenschap die beslissingen neemt via sociocratie — gestructureerde ronden, bezwaren als leidraad, geen stemming — is een kleinschalige holocratische structuur.' },
      { domain: 'science', icon: '🔬', text: 'Brian Robertson (Holacracy, 2015): gezag verschuift van personen naar rollen, en van managers naar processen. Critici (Bernstein et al., 2016) stellen dat informele hiërarchieën gewoon onderduiken.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wat is het kernkenmerk van een holocratische organisatie?',
        options: [
          'Sterke centrale leider met duidelijke visie',
          'Gedistribueerde autoriteit in zelfsturende teams zonder traditionele managers',
          'Maximale specialisatie via diepe functionele hiërarchie',
          'Democratisch stemrecht voor alle medewerkers'
        ],
        correct: 1,
        feedback: 'Holocratie verdeelt autoriteit over zelfsturende cirkels — er zijn geen traditionele managers. Rollen, niet personen, dragen verantwoordelijkheid.'
      }
    ],
    creativePrompt: 'Zou jij goed gedijen in een zelfsturende organisatie zonder manager? Wat zou je aantrekkelijk en uitdagend vinden?',
    aiHelperPrompts: ['Waarom mislukken veel zelfsturende initiatieven?', 'Hoe verhoud zelfsturing zich tot de behoeften van medewerkers aan duidelijkheid?']
  },
  {
    id: 'lerende-organisatie',
    title: 'De Lerende Organisatie (Senge)',
    difficulty: 2,
    emoji: '📚',
    academicCategory: 'Organisatie',
    skillCategory: 'Strategisch Denken',
    definition: 'Peter Senge\'s "lerende organisatie" (1990) is een organisatie die continu haar capaciteit vergroot om haar toekomst te creëren. Vijf disciplines: (1) persoonlijk meesterschap, (2) mentale modellen, (3) gedeelde visie, (4) teamleren, (5) systeemdenken — het fundament dat de rest samenbindt.',
    abstractExample: 'De meeste organisaties leren reactief: ze herstellen fouten. Een lerende organisatie leert generatief: ze creëert nieuw. De grootste belemmering is "defensieve routines" — gedrag dat problemen vermijdt om te bespreken, waardoor het systeem niet leert.',
    examples: [
      { domain: 'business', icon: '💼', text: 'Toyota\'s "kaizen" cultuur is een lerende organisatie in de praktijk: elke medewerker kan en moet problemen aankaarten. De productielijn stopt als er een fout wordt ontdekt — leren > korte termijn productie.' },
      { domain: 'daily', icon: '🏠', text: 'Een sportteam dat na elke wedstrijd eerlijk analyseert wat goed en fout ging (geen excuses, geen verdediging) en dat vertaalt in training — dit is persoonlijk meesterschap en teamleren gecombineerd.' },
      { domain: 'science', icon: '🔬', text: 'Senge (The Fifth Discipline, 1990): de vijfde discipline is systeemdenken — het vermogen om onderliggende patronen en feedback loops te zien, niet slechts symptomen. Zonder dit missen de andere vier hun fundament.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welke is de "vijfde discipline" die alle andere samenbindt in Senge\'s model?',
        options: [
          'Persoonlijk meesterschap',
          'Gedeelde visie',
          'Teamleren',
          'Systeemdenken'
        ],
        correct: 3,
        feedback: 'Systeemdenken is de vijfde en funderende discipline — het vermogen om de onderliggende patronen en feedback loops te zien die alle andere disciplines in samenhang plaatsen.'
      }
    ],
    creativePrompt: 'Beschrijf een "defensieve routine" die jij hebt gezien in een organisatie — een gewoonte die problemen verborgen hield in plaats van ze te leren. Wat was het effect?',
    aiHelperPrompts: ['Hoe doorbreek je defensieve routines in teams?', 'Welke discipline van Senge is het moeilijkst te ontwikkelen en waarom?']
  },
  {
    id: 'nudge-theorie-organisatie',
    title: 'Nudges in Organisaties',
    difficulty: 2,
    emoji: '👉',
    academicCategory: 'Organisatie',
    skillCategory: 'Strategisch Denken',
    definition: 'Nudge-theorie (Thaler & Sunstein) in organisatiecontext: kleine aanpassingen aan de "keuze-architectuur" — de manier waarop opties worden gepresenteerd — sturen gedrag zonder dwang of grote prikkels. Standaardopties, plaatsing, volgorde en framing zijn de instrumenten.',
    abstractExample: 'Pensioenfonds: medewerkers automatisch inschrijven (opt-out) in plaats van ze zelf te laten inschrijven (opt-in) verhoogt deelname van 30% naar 90%. De keuze blijft vrij, maar de standaardoptie is veranderd. Dit is een krachtige nudge.',
    examples: [
      { domain: 'business', icon: '💼', text: 'Een cantine plaatst gezonde opties op ooghoogte en ongezonde opties lager. Verkoop van groenten stijgt 30% zonder verbod of hogere prijzen. Pure keuze-architectuur in actie.' },
      { domain: 'daily', icon: '🏠', text: 'Email-automatisering die na een gesprek automatisch een agenda-uitnodiging stuurt voor de follow-up, in plaats van dat je het moet onthouden. Kleine aanpassing, groot effect op productiviteit.' },
      { domain: 'science', icon: '🔬', text: 'Thaler & Sunstein (Nudge, 2008): libertair paternalisme — behoud van keuzevrijheid, maar keuze-architectuur ontwerpen zodat de meest voordelige optie ook de makkelijkste is.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wat is het kenmerk van een nudge in keuze-architectuur?',
        options: [
          'Het verbiedt ongewenst gedrag via regels',
          'Het straft ongewenst gedrag via kosten',
          'Het stuurt gedrag door de presentatie van opties te veranderen, zonder keuzevrijheid te beperken',
          'Het beloont gewenst gedrag via financiële prikkels'
        ],
        correct: 2,
        feedback: 'Een nudge stuurt gedrag door de keuze-architectuur te veranderen — de manier waarop opties worden gepresenteerd — zonder dwang, verbod of grote financiële prikkels.'
      }
    ],
    creativePrompt: 'Ontwerp drie nudges voor jouw werkplek of thuis die gewenst gedrag stimuleren zonder dwang. Welke keuze-architectuur pas je aan?',
    aiHelperPrompts: ['Wanneer is een nudge manipulatie?', 'Hoe meet je de effectiviteit van nudges?']
  },
  {
    id: 'span-of-control',
    title: 'De Controleomspanning (Span of Control)',
    difficulty: 1,
    emoji: '🕸️',
    academicCategory: 'Organisatie',
    skillCategory: 'Strategisch Denken',
    definition: 'Controleomspanning verwijst naar het aantal directe rapporterende medewerkers dat een manager effectief kan aansturen. Een brede span (veel direct reports) leidt tot een platte organisatie; een smalle span tot een hoge hiërarchie. De optimale span hangt af van taakcomplexiteit, ervaring en communicatiebehoefte.',
    abstractExample: 'Een manager van een callcenter kan 20 medewerkers aansturen (routinewerk, eenvoudig). Een R&D-manager stuurt maximaal 5 onderzoekers aan (complex, kennisintensief). Dezelfde organisatieschaal vraagt dus heel verschillende hiërarchiedieptes.',
    examples: [
      { domain: 'business', icon: '💼', text: 'Amazon is bewust plat via Bezos\' "two-pizza rule": als een team meer mensen nodig heeft dan twee pizza\'s voor kunnen voeden, is het te groot. Dit begrenst de controleomspanning en bevordert autonomie.' },
      { domain: 'daily', icon: '🏠', text: 'Een schoolhoofd die 3 coördinatoren aanstuurt, die elk 10 leerkrachten aansturen — dit is een bewuste keuze voor een smalle span: coördinatoren hebben diepe aandacht nodig.' },
      { domain: 'science', icon: '🔬', text: 'V.A. Graicunas (1933): de complexiteit van toezichtsrelaties groeit exponentieel met de omspanning. Tien directe reports creëren 5.210 potentiële relaties — exponentieel meer coördinatie dan 5 reports.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wat bepaalt de optimale controleomspanning voor een manager?',
        options: [
          'Alleen de persoonlijkheid van de manager',
          'Alleen de bedrijfsgrootte',
          'Taakcomplexiteit, ervaringsniveau van medewerkers, en coördinatiebehoefte',
          'Altijd maximaal 7 directe reports'
        ],
        correct: 2,
        feedback: 'De optimale controleomspanning hangt af van meerdere factoren: hoe complex de taken zijn, hoe ervaren de medewerkers zijn, en hoeveel coördinatie en communicatie er nodig is.'
      }
    ],
    creativePrompt: 'Wat is de ideale span of control voor jouw huidige rol of context? Welke factoren bepalen dat?',
    aiHelperPrompts: ['Hoe beïnvloedt span of control de organisatiecultuur?', 'Wat zijn de voor- en nadelen van een platte versus hoge hiërarchie?']
  },
  {
    id: 'triple-bottom-line',
    title: 'De Triple Bottom Line: People, Planet, Profit',
    difficulty: 1,
    emoji: '♻️',
    academicCategory: 'Organisatie',
    skillCategory: 'Strategisch Denken',
    definition: 'De triple bottom line (Elkington, 1994) stelt dat bedrijven niet enkel financieel rendement (profit) moeten maximaliseren, maar ook verantwoordelijkheid dragen voor sociale (people) en ecologische (planet) impact. Duurzame bedrijven balanceren alle drie.',
    abstractExample: 'Een bedrijf dat winstgevend is maar haar werknemers uitbuit (people-falen) of het milieu vervuilt (planet-falen) is niet duurzaam. De triple bottom line vraagt om een geïntegreerd perspectief waarbij de drie dimensies elkaar versterken, niet uitsluiten.',
    examples: [
      { domain: 'business', icon: '💼', text: 'Unilever\'s Sustainable Living Plan: meetbare doelstellingen voor de footprint (planet), mensenrechten in de supply chain (people), én financiële groei (profit). Alle drie worden gerapporteerd.' },
      { domain: 'daily', icon: '🏠', text: 'Een lokaal horecabedrijf koopt bij kleine boeren (people: steun lokale economie), gebruikt biologische ingrediënten (planet) en maakt een eerlijke prijs (profit). Triple bottom line in het klein.' },
      { domain: 'science', icon: '🔬', text: 'Elkington (Cannibals with Forks, 1997): later erkende Elkington dat de triple bottom line was misbruikt als PR-tool zonder echte systemische verandering. In 2018 riep hij op tot een "recall" van het concept.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wat voegt de triple bottom line toe aan traditionele bedrijfsvoering?',
        options: [
          'Focus op aandeelhouderswaarde als enige maatstaf',
          'Drie gelijkwaardige maatstaven: mensen, planeet en winst',
          'Prioriteit voor werknemerstevredenheid boven winstgevendheid',
          'Milieucertificering als marketinginstrument'
        ],
        correct: 1,
        feedback: 'De triple bottom line voegt sociale (people) en ecologische (planet) maatstaven toe naast financiële winst — alle drie zijn gelijkwaardig en bepalend voor duurzame bedrijfsvoering.'
      }
    ],
    creativePrompt: 'Analyseer een bedrijf of organisatie die jij bewondert via de triple bottom line. Scoort het op alle drie, of is er een dimensie die achterblijft?',
    aiHelperPrompts: ['Hoe voorkom je dat de triple bottom line een PR-oefening wordt?', 'Wanneer conflicteren de drie P\'s met elkaar?']
  },
  {
    id: 'formalisering-standaardisering',
    title: 'Formalisering en Standaardisering in Organisaties',
    difficulty: 2,
    emoji: '📐',
    academicCategory: 'Organisatie',
    skillCategory: 'Strategisch Denken',
    definition: 'Formalisering is de mate waarin regels, procedures en taken schriftelijk zijn vastgelegd. Standaardisering is de mate van uniformiteit in werkprocessen. Hoge formalisering zorgt voor voorspelbaarheid en efficiëntie bij routinewerk; lage formalisering geeft flexibiliteit bij kenniswerk en innovatie.',
    abstractExample: 'Een McDonald\'s heeft maximale formalisering: elk hamburgerprocedure is gedocumenteerd tot op de seconde. Een designstudio heeft minimale formalisering: creativiteit vraagt vrijheid. Dezelfde organisatieschaal vraagt een fundamenteel andere aanpak.',
    examples: [
      { domain: 'business', icon: '💼', text: 'ISO-certificeringen dwingen bedrijven tot hoge formalisering. Dit vermindert fouten in productieprocessen maar kan innovatie vertragen — het balanceren van deze spanning is een kernvraag in organisatieontwerp.' },
      { domain: 'daily', icon: '🏠', text: 'Een huishoudelijk routineschema (wassen op maandag, boodschappen op woensdag) is formalisering in het persoonlijk leven. Het bespaart cognitieve belasting maar verlaagt ook flexibiliteit.' },
      { domain: 'science', icon: '🔬', text: 'Mintzberg (The Structure of Organizations, 1979): formalisering is een van de vijf organisatieparameters. Bureaucratieën zijn hoog geformaliseerd; professionele organisaties (advocatenkantoren, universiteiten) zijn laag geformaliseerd bij kernwerk.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wanneer is hoge formalisering nuttig en wanneer nadelig?',
        options: [
          'Altijd nuttig — meer regels is altijd beter',
          'Nuttig bij routinewerk, nadelig bij creatief en kenniswerk',
          'Altijd nadelig — regels belemmeren productiviteit',
          'Alleen nuttig in grote bedrijven, niet in het MKB'
        ],
        correct: 1,
        feedback: 'Hoge formalisering werkt goed bij routinewerk waar voorspelbaarheid en efficiëntie belangrijk zijn. Bij creatief en kenniswerk beperkt het de noodzakelijke autonomie en flexibiliteit.'
      }
    ],
    creativePrompt: 'Welke processen in jouw werk of leven zouden baat hebben bij meer formalisering? En welke zouden juist moeten worden bevrijd van te veel regels?',
    aiHelperPrompts: ['Hoe vind je de juiste balans tussen flexibiliteit en standaardisering?', 'Hoe heeft digitalisering de formalisering in organisaties veranderd?']
  },
];
