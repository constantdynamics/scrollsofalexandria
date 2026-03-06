// Gedachte-experimenten – Batch 3: Kennistheorie & Epistemologie (10 experimenten)

export const gedachteExperimenten3 = [
  {
    id: "descartes-boze-demon",
    title: "Descartes' Boze Demon",
    difficulty: 2,
    emoji: "😈",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["Epistemologie", "Scepticisme", "Zekerheid", "Gedachte-experiment"],
    definition: "Stel dat er een almachtige en kwaadaardige demon bestaat die jou systematisch bedriegt over alles — je zintuigen, je geheugen, zelfs de wiskunde. Kun je dan nog iets weten? Descartes gebruikte dit als methodologische twijfel om te zoeken naar absolute zekerheid. Hij vond slechts één anker: het feit dat hij twijfelt bewijst dat hij denkt, en dus bestaat — 'cogito ergo sum'.",
    abstractExample: "De demon-hypthese: alle ervaringen zijn mogelijk nep. Descartes' conclusie: zelfs als alles nep is, is de twijfelende geest zelf reëel. Cogito ergo sum is onweerlegbaar: de demon kan mij niet misleiden dat ik niet besta terwijl ik twijfel. Dit is het vaste punt waarop kennis kan worden gebouwd.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Descartes (Meditationes, 1641) gebruikte de demon als methodologisch hulpmiddel — niet als werkelijk geloof. Zijn doel: alles afbreken wat twijfelbaar is om te zien wat overblijft. Wat overblijft: het denkende zelf. Vandaar: het zelf als fundament van kennis." },
      { domain: "daily", icon: "🏠", text: "Conspiracy theorieën functioneren als een mini-demon-scenario: als je niet de media, overheid of wetenschap kunt vertrouwen, wie dan wel? De vraag is: op welk punt rechtvaardigt systematische twijfel het verlaten van empirische kennis?" },
      { domain: "science", icon: "🔬", text: "De wetenschappelijke methode is gedeeltelijk een antwoord op de demon: peer review, replicatie en falsificeerbaarheid verminderen de kans op systematisch bedrog. Maar het elimineert de demon nooit volledig — wetenschap werkt met waarschijnlijkheid, niet zekerheid." }
    ],
    prerequisites: [],
    unlocks: ["hersenen-in-vat", "gettier-probleem"],
    relatedPrinciples: ["hersenen-in-vat", "gettier-probleem", "inductieprobleem"],
    exercises: [{
      type: "multiple-choice",
      question: "Wat is Descartes' 'cogito ergo sum' als antwoord op de boze demon?",
      options: ["Een geloofsbewijs voor God", "Het enige feit dat de demon niet kan wegnemen: het bestaan van de twijfelende geest", "Een axioma uit de wiskunde", "Een intuïtieve waarheid over de fysieke wereld"],
      correct: 1,
      feedback: "Juist! Zelfs als de demon over alles liegt, kan hij niet liegen over het feit dat er iemand is die twijfelt. De twijfelende geest bestaat noodzakelijk — dit is Descartes' onweerlegbare fundament voor kennis."
    }],
    creativePrompt: "Wat zou jij over houden als je absoluut alles in twijfel trekt? Wat is voor jou het onweerlegbare fundament van zekerheid?",
    aiHelperPrompts: [
      "Is er iets dat je volledig zeker weet, zelfs als een demon alles probeert te vervalsen?",
      "Hoe verschilt Descartes' methodologische twijfel van dagelijkse scepticisme?",
      "Wat bouwt Descartes vervolgens op zijn cogito-fundament?"
    ]
  },
  {
    id: "gettier-probleem",
    title: "Het Gettier-probleem",
    difficulty: 3,
    emoji: "🎯",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["Epistemologie", "Kennis", "Rechtvaardiging", "Gedachte-experiment"],
    definition: "Kennis werd klassiek gedefinieerd als 'gerechtvaardigd waar geloof' (JTB). Edmund Gettier toonde in 1963 in een kort artikel aan dat er gevallen bestaan waarbij iemand gerechtvaardigd iets gelooft dat waar is — maar toch niet weet. Sindsdien worstelt de epistemologie met de vraag: wat is kennis écht?",
    abstractExample: "Gettier-voorbeeld: jij gelooft terecht dat 'de persoon die de baan krijgt heeft tien munten op zak' — want jouw collega Jones heeft tien munten en jij denkt hij krijgt de baan. Maar jíj krijgt de baan en jíj hebt ook tien munten (onbewust). De overtuiging is waar, gerechtvaardigd — maar jij wist het niet echt.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Gettier's artikel was slechts drie pagina's maar revolutioneerde de epistemologie. Sindsdien zijn tientallen oplossingen voorgesteld (betrouwbaarheidstheorie, contextualisme, sensitiviteitstheorie), maar geen heeft brede acceptatie verworven." },
      { domain: "daily", icon: "🏠", text: "Je vermoedt dat je collega ziek is (hij zag er niet goed uit). Hij is inderdaad ziek — maar om een andere reden dan jij dacht. Heb jij 'geweten' dat hij ziek was? Jouw redenering was geldig, je conclusie was waar, maar causaal niet verbonden." },
      { domain: "science", icon: "🔬", text: "Wetenschappelijke theorieën kunnen goede predictieve kracht hebben om verkeerde redenen (Ptolemaeusmodel voorspelde eclipsen correct, maar de aarde-centrische aanname was fout). Gettier-gevallen in de wetenschap: succesvolle voorspellingen via onjuiste mechanismen." }
    ],
    prerequisites: ["descartes-boze-demon"],
    unlocks: [],
    relatedPrinciples: ["descartes-boze-demon", "inductieprobleem"],
    exercises: [{
      type: "multiple-choice",
      question: "Wat toont het Gettier-probleem aan?",
      options: ["Dat kennis onmogelijk is", "Dat gerechtvaardigd waar geloof niet voldoende is voor kennis", "Dat logica faalt", "Dat rechtvaardigen van overtuigingen onnodig is"],
      correct: 1,
      feedback: "Juist! Gettier toonde aan dat de klassieke JTB-definitie onvolledig is: je kunt gerechtvaardigd iets waars geloven zonder het echt te weten. Er ontbreekt een vierde voorwaarde — maar welke? Dat is nog steeds omstreden."
    }],
    creativePrompt: "Bedenk een Gettier-geval uit jouw eigen leven: een situatie waarbij jij gelijk had, maar om de verkeerde reden. Wist jij het dan?",
    aiHelperPrompts: [
      "Is kennis meer dan alleen gerechtvaardigd waar geloof? Wat ontbreekt?",
      "Maakt het in de praktijk uit of je iets weet of alleen gerechtvaardigd gelooft?",
      "Hoe beïnvloedt het Gettier-probleem de manier waarop we wetenschap begrijpen?"
    ]
  },
  {
    id: "inductieprobleem",
    title: "Het Inductieprobleem (Hume)",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["Epistemologie", "Inductie", "Wetenschap", "Gedachte-experiment"],
    definition: "We vertrouwen inductie: de zon is elke dag opgegaan, dus morgen gaat hij ook op. Maar op basis waarvan? Hume wees erop: inductie rechtvaardigen vereist het aannemen dat de toekomst op het verleden lijkt — maar dat is zelf een inductieve aanname. Inductie rechtvaardigt zichzelf circulair. Dit is een fundamenteel probleem voor alle empirische wetenschap.",
    abstractExample: "Redenering: 'Ik heb 1000 witte zwanen gezien, dus alle zwanen zijn wit.' Dit geldt totdat één zwarte zwaan wordt gevonden (Australië, 18e eeuw). Hume's punt: hoeveel observaties ook, inductieve generalisaties kunnen nooit logisch zeker zijn. Ze zijn altijd feilbaar.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Karl Popper's antwoord: we kunnen inductie niet rechtvaardigen, maar we kunnen falsificatie gebruiken. Wetenschap stelt hypothesen op die in principe weerlegbaar zijn — en elimineert de onjuiste. Dit is deductie, niet inductie." },
      { domain: "science", icon: "🔬", text: "Alle wetenschappelijke wetten zijn inductieve generalisaties: Newton's zwaartekrachtwet werkte perfect tot Einstein's relativiteitstheorie er de grenzen van aantoonde. Wetenschap bouwt op inductie die altijd feilbaar blijft." },
      { domain: "business", icon: "💼", text: "Een bedrijf dat 10 jaar winstgevend is geweest, neemt aan dat dit zo zal blijven — inductieve projectie. Maar markten veranderen, technologie disrupt, pandemieën breken uit. Het verleden garandeert de toekomst niet." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["descartes-boze-demon", "gettier-probleem", "falsificeerbaarheid-popper"],
    exercises: [{
      type: "multiple-choice",
      question: "Hume's inductieprobleem stelt dat inductie:",
      options: ["Perfect betrouwbaar is als er genoeg observaties zijn", "Zichzelf circulair rechtvaardigt en dus nooit logisch zeker kan zijn", "Alleen in de wiskunde werkt", "Vervangen moet worden door deductie"],
      correct: 1,
      feedback: "Juist! Om inductie te rechtvaardigen (toekomst lijkt op verleden) moet je aannemen dat de toekomst op het verleden lijkt — dat is zelf een inductieve aanname. Inductie rechtvaardigt zichzelf nooit cirkelvrij. Wetenschap werkt met inductie, maar heeft geen logisch fundament ervoor."
    }],
    creativePrompt: "Welke zekerheden in jouw leven zijn gebaseerd op inductie? Wat zijn de risico's als die zekerheid vals is?",
    aiHelperPrompts: [
      "Hoe rechtvaardigen wetenschappers hun vertrouwen in inductie als Hume gelijk heeft?",
      "Is er een verschil tussen 'de zon gaat elke dag op' en 'alle zwanen zijn wit' als inductieve claims?",
      "Wat doet het inductieprobleem met ons begrip van wetenschappelijke zekerheid?"
    ]
  },
  {
    id: "falsificeerbaarheid-popper",
    title: "De Falsificeerbaarheid (Popper)",
    difficulty: 2,
    emoji: "🔬",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Wetenschapsfilosofie", "Falsificatie", "Demarcatie", "Gedachte-experiment"],
    definition: "Karl Popper betoogde: een theorie is wetenschappelijk als en alleen als ze falsifieerbaar is — als er een mogelijke observatie bestaat die haar zou weerleggen. Niet wat kan worden bewezen, maar wat kan worden ontkracht, onderscheidt wetenschap van pseudowetenschap. Astrologie, psychoanalyse en marxisme zijn onwetenschappelijk omdat ze elke uitkomst kunnen verklaren.",
    abstractExample: "Einstein's relativiteitstheorie voorspelde dat licht afbuigt bij massa — een specifieke, falsifieerbare voorspelling. In 1919 bevestigde zonsverduistering dit. Als het licht niet had afgebogen, was de theorie weerlegd. Freud's psychoanalyse verklaart alles: zowel 'de patiënt genas' als 'de patiënt genas niet' — omdat het systeem zich aanpast. Onfalsifieerbaar.",
    examples: [
      { domain: "science", icon: "🔬", text: "Popper (The Logic of Scientific Discovery, 1934): elk wetenschappelijk experiment is een poging een theorie te weerleggen. Succesvol overleven van weerleggingspogingen geeft theorieën 'corroboratie' — geen bewijs, maar overleving. Wetenschap is permanent voorlopig." },
      { domain: "philosophy", icon: "🤔", text: "Thomas Kuhn bestreed Popper: in de praktijk geven wetenschappers hun theorieën niet op bij één tegenbeobservatie — ze zoeken ad hoc verklaringen. Paradigma-verschuivingen zijn sociologische, niet puur logische processen." },
      { domain: "daily", icon: "🏠", text: "Consumentenbewustzijn: 'als product X niet werkt, dan nam je te weinig / te veel / op het verkeerde moment.' Dit soort niet-falsifieerbare claims beschermt producten tegen weerlegging. Een rode vlag voor pseudowetenschap." }
    ],
    prerequisites: ["inductieprobleem"],
    unlocks: [],
    relatedPrinciples: ["inductieprobleem", "gettier-probleem"],
    exercises: [{
      type: "multiple-choice",
      question: "Waarom is astrologie volgens Popper onwetenschappelijk?",
      options: ["Omdat het oud is", "Omdat er geen instrumenten voor zijn", "Omdat het elke uitkomst kan verklaren en dus niet falsifieerbaar is", "Omdat sterren te ver weg zijn"],
      correct: 2,
      feedback: "Juist! Astrologie past elke uitkomst achteraf aan ('de sterren waren ongunstig aligneert'). Er is geen voorspelling die haar zou weerleggen. Falsificeerbaarheid vereist een specifieke voorspelling die in principe fout kan blijken."
    }],
    creativePrompt: "Bedenk een overtuiging die je hebt die in principe falsifieerbaar is. Welke observatie zou haar weerleggen? En één die je hebt die onfalsifieerbaar is.",
    aiHelperPrompts: [
      "Is psychologie wetenschappelijk als theorieën moeilijk falsifieerbaar zijn?",
      "Hoe beschermt falsificeerbaarheid ons tegen charlatanerie?",
      "Kan een onweerlegbare overtuiging toch waar zijn? Wat betekent dat voor haar status?"
    ]
  },
  {
    id: "neurath-boot",
    title: "Neurath's Boot",
    difficulty: 3,
    emoji: "⚓",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Epistemologie", "Wetenschap", "Kennis", "Gedachte-experiment"],
    definition: "We zijn als zeelieden die hun boot midden op zee moeten repareren terwijl ze varen. We kunnen niet aan land gaan om de boot opnieuw te bouwen — we moeten planken één voor één vervangen terwijl we drijven. Zo is ook kennis: we kunnen niet alles terzijde leggen en opnieuw beginnen (zoals Descartes wilde). We bouwen altijd voort op bestaande kennis die we tijdelijk accepteren.",
    abstractExample: "Otto Neurath (1932) weerlegde Descartes' fundamentalisme: er is geen Archimedisch punt buiten de kennis van waaruit je haar kunt evalueren. Wetenschap is een coherentieproject — theorieën steunen elkaar als een web, niet als een piramide met één fundament. Holisme over fundationalisme.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "W.V.O. Quine (Two Dogmas of Empiricism, 1951) ontwikkelde dit tot holisme: wetenschappelijke overtuigingen vormen een web dat collectief wordt geconfronteerd met ervaring. Geen enkele overtuiging staat helemaal los — maar ook geen enkele is volledig immuun voor herziening." },
      { domain: "science", icon: "🔬", text: "Wetenschappelijke revoluties (Kuhn) zijn als het repareren van een complete sectie van de boot. We vervangen niet alles tegelijk — soms grote stukken (paradigma-verschuivingen), maar altijd terwijl de rest van de wetenschappelijke infrastructuur blijft werken." },
      { domain: "daily", icon: "🏠", text: "Leren: je kunt niet van nul beginnen bij elke nieuwe informatie. Je beoordeelt nieuwe ideeën altijd met bestaande kennisschema's. Dit is adaptief maar kan ook conservatief zijn — bestaande schemas weerstaan moeilijk radicale nieuwe informatie." }
    ],
    prerequisites: ["inductieprobleem", "descartes-boze-demon"],
    unlocks: [],
    relatedPrinciples: ["inductieprobleem", "falsificeerbaarheid-popper"],
    exercises: [{
      type: "multiple-choice",
      question: "Neurath's boot bekritiseert welk aspect van Descartes' epistemologie?",
      options: ["Het geloof in God", "De gedachte dat je alle kennis kunt loslaten en opnieuw kunt beginnen", "Het cogito-argument", "Het geloof in de buitenwereld"],
      correct: 1,
      feedback: "Juist! Descartes wilde alles in twijfel trekken en opnieuw opbouwen. Neurath: dit is onmogelijk — je kunt niet alle kennis tegelijk loslaten. Je staat altijd al op een platform van aanvaarde overtuigingen terwijl je anderen herziet. Er is geen kennisvrij vertrekpunt."
    }],
    creativePrompt: "Wanneer herzag jij een fundamentele overtuiging terwijl je toch doorging met leven? Welke andere overtuigingen fungeerden als 'vloer' tijdens die revisie?",
    aiHelperPrompts: [
      "Is het mogelijk om ooit volledig van nul te beginnen met jouw kennis?",
      "Welke overtuigingen zijn zo fundamenteel dat je ze zelfs niet kunt in twijfel trekken?",
      "Hoe verhoudt Neurath's boot zich tot wetenschappelijke revoluties?"
    ]
  },
  {
    id: "twin-earth",
    title: "De Tweeling Aarde (Putnam)",
    difficulty: 3,
    emoji: "🌍",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["Taalsemantiek", "Betekenis", "Intentionaliteit", "Gedachte-experiment"],
    definition: "Stel er is een Tweeling Aarde die identiek is aan de Aarde — inclusief een vloeistof genaamd 'water' die precies doet wat water doet, maar een andere chemische samenstelling heeft (XYZ in plaats van H₂O). Als jij en jouw tweelingbroer op Tweeling Aarde allebei 'water' zeggen, zeggen jullie dan hetzelfde? Hilary Putnam betoogt: nee — betekenis wordt deels bepaald door de wereld, niet alleen door de geest.",
    abstractExample: "Putnam (1975): 'betekenis zit niet alleen in het hoofd.' De mentale toestand van jij en jouw tweeling is identiek — maar jullie woorden refereren aan verschillende stoffen. Taalmeaning is deels extern (de wereld bepaalt wat woorden refereren) en deels intern (concepten). Dit weerlegde internalisme over betekenis.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Putnam's 'semantisch externalisme': de referentie van termen als 'goud', 'water' en 'tijger' hangt af van de echte aard van die dingen — niet van hoe mensen ze beschrijven. Deskundigen ('experts') bepalen de betekenis voor de gemeenschap." },
      { domain: "science", icon: "🔬", text: "Voor 1750 wisten mensen niet dat water H₂O was. Maar het woord 'water' refereerde al aan H₂O — ook al kenden ze de chemische samenstelling niet. De aard van de stof bepaalt de referentie retroactief. Betekenis heeft een wetenschappelijke dimensie." },
      { domain: "daily", icon: "🏠", text: "Wanneer een artsenbriefje zegt 'aspirine', refereert dit aan de specifieke chemische verbinding (acetylsalicylzuur) — niet aan alles wat jij denkt dat aspirine is. Experts, niet leken, definieert de werkelijke referentie van technische termen." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["hersenen-in-vat", "chinese-kamer"],
    exercises: [{
      type: "multiple-choice",
      question: "Putnam's Tweeling Aarde experiment demonstreert dat:",
      options: ["Betekenis volledig in het hoofd zit", "Betekenis deels extern wordt bepaald door de wereld", "Tweeling Aarden onmogelijk zijn", "Chemie niet belangrijk is voor taal"],
      correct: 1,
      feedback: "Juist! Putnam's externalisme: zelfs als twee mensen identieke mentale toestanden hebben, kunnen hun woorden verschillende dingen betekenen als ze naar verschillende externe objecten refereren. 'Betekenis is niet in het hoofd' — de wereld speelt mee."
    }],
    creativePrompt: "Denk aan een woord dat voor jou iets anders betekent dan voor iemand anders, ook al gebruiken jullie hetzelfde woord. Hoe beinvloedt dat jullie communicatie?",
    aiHelperPrompts: [
      "Als twee mensen hetzelfde woord gebruiken maar naar andere dingen refereren, begrijpen ze elkaar dan?",
      "Hoe bepalen wetenschappers de 'echte' betekenis van termen als 'elektron' of 'gen'?",
      "Wat betekent het voor communicatie als betekenis deels extern is?"
    ]
  },
  {
    id: "onderdeterminisme",
    title: "Het Onderdeterminisme van Theorie door Feiten",
    difficulty: 3,
    emoji: "🧩",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Wetenschapsfilosofie", "Theoriekeuze", "Reductie", "Gedachte-experiment"],
    definition: "Elke verzameling wetenschappelijke feiten is consistent met meerdere, onderling onverenigbare theorieën. Er zijn altijd alternatieve theorieën die dezelfde feiten even goed verklaren — maar van de feiten alleen kun je niet logisch afleiden welke theorie de juiste is. De feiten onderdetermineren de theorie. Waarom geloven we dan één specifieke theorie?",
    abstractExample: "Newton's mechanica en Einstein's relativiteitstheorie voorspellen bij normale snelheden identiek. Tot de jaren 1900 was er feitelijk geen onderscheid. Astronomische beobservingen kozen uiteindelijk Einstein — maar logisch waren beide lang gelijkwaardig. Buitentheorieëse overwegingen (eenvoud, verklaringskracht) vulden de kloof.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Pierre Duhem (1906) en Willard Quine (1953) formuleerden de Duhem-Quine these: elke hypothese wordt altijd getest samen met hulphypotheses. Een mislukt experiment kan de hypothese weerleggen — of een hulphypothese. Je kiest welke te redden." },
      { domain: "science", icon: "🔬", text: "Ptolemaeus' geocentrisme en Copernicus' heliocentrisme voorspelden aanvankelijk gelijkwaardige observaties. Simplicity, later ook parallax en later telescoop-observaties sloegen de balans. Maar puur logisch waren ze lang gelijkwaardig — feiten alleen beslisten niet." },
      { domain: "daily", icon: "🏠", text: "In een rechtszaak zijn bewijzen altijd consistent met meerdere scenario's. Juryleden kiezen de 'meest plausibele' theorie — een oordeel over coherentie en eenvoud, niet alleen logisch dwang van de feiten. Onderdeterminisme in de rechtbank." }
    ],
    prerequisites: ["falsificeerbaarheid-popper", "inductieprobleem"],
    unlocks: [],
    relatedPrinciples: ["falsificeerbaarheid-popper", "neurath-boot"],
    exercises: [{
      type: "multiple-choice",
      question: "Onderdeterminisme houdt in dat wetenschappelijke feiten:",
      options: ["Altijd één unieke theorie bewijzen", "Consistent zijn met meerdere theorieën, zodat feiten alleen niet kiezen", "Onvoldoende zijn voor wetenschap", "Alleen meetbaar zijn met technologie"],
      correct: 1,
      feedback: "Juist! Onderdeterminisme: dezelfde feiten kunnen in principe door meerdere theorieën verklaard worden. Wetenschappers kiezen op basis van extra-empirische criteria: eenvoud, samenhang, verklaringskracht. Puur logisch dwingen feiten nooit tot één theorie."
    }],
    creativePrompt: "Bedenk een situatie waarbij twee tegengestelde verklaringen dezelfde feiten even goed verklaren. Hoe kies je dan?",
    aiHelperPrompts: [
      "Wat doet het met wetenschappelijke objectiviteit als feiten theorieën niet uniek bepalen?",
      "Welke andere criteria dan feiten gebruiken wetenschappers om tussen theorieën te kiezen?",
      "Is er ooit een definitief experiment dat alle alternatieven uitsluit?"
    ]
  },
  {
    id: "globaal-scepticisme",
    title: "Het Globale Scepticisme",
    difficulty: 2,
    emoji: "❓",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["Epistemologie", "Scepticisme", "Kennis", "Gedachte-experiment"],
    definition: "Kunnen we iets weten? Globale sceptici betogen: nee — alle kennis vereist een fundament dat zelf niet bewezen kan worden zonder circulaire redenering. Pyrrhon van Elis (300 v.Chr.) raadde volledige opschorting van oordeel aan: 'epoché'. Moderne versies: we kunnen de buitenwereld niet bewijzen, noch de betrouwbaarheid van onze zintuigen.",
    abstractExample: "De sceptische trilema (Agrippa): elke rechtvaardiging vereist een reden; die reden vereist een reden; dit leidt tot óf oneindige regressie óf willekeurige aanname óf circulaire redenering. Er is geen logisch ontsnappingspunt. Scepticisme als logische positie is onweerlegbaar — maar ook onleefbaar.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "G.E. Moore's 'commonsense' weerlegging: hij hield zijn handen op en zei: 'Hier zijn twee handen — ik weet het met zekerheid.' Zijn punt: de scepticus moet bewijzen dat normale kennis fout is; de bewijslast ligt bij hem, niet bij ons." },
      { domain: "science", icon: "🔬", text: "Pragmatisme (William James, Peirce): de vraag is niet 'weten we zeker?' maar 'werkt het?' Kennis is wat ons in staat stelt succesvol te handelen. Scepticisme is theoretisch interessant maar praktisch irrelevant — je kunt er niet naar leven." },
      { domain: "daily", icon: "🏠", text: "Een globale scepticus kan theoretisch betogen dat jij een auto niet echt kunt zien — maar als hij de straat oversteekt, kijkt hij toch voor het verkeer. Pragmatische noodzaak overstemt theoretisch scepticisme in het dagelijks leven." }
    ],
    prerequisites: ["descartes-boze-demon"],
    unlocks: [],
    relatedPrinciples: ["descartes-boze-demon", "neurath-boot", "hersenen-in-vat"],
    exercises: [{
      type: "multiple-choice",
      question: "Agrippa's trilema suggereert dat elke rechtvaardiging leidt tot:",
      options: ["Uiteindelijk zekerheid als je ver genoeg gaat", "Oneindige regressie, cirkelredenering, of willekeurig fundament", "Wetenschappelijke verificatie", "Religieuze zekerheid"],
      correct: 1,
      feedback: "Juist! Agrippa's trilema: elke reden heeft een reden nodig → oneindige regressie. Of je stopt ergens willekeurig → dogmatisme. Of je gebruikt je conclusie als reden → cirkelredenering. Er is geen logisch perfecte rechtvaardigingsstructuur."
    }],
    creativePrompt: "Welke kennis vind jij zo fundamenteel dat je bereid bent ze als startpunt te accepteren zonder verdere rechtvaardiging? Waarom die en niet andere?",
    aiHelperPrompts: [
      "Hoe leef je praktisch als globale scepticus?",
      "Is het onderscheid tussen theoretisch scepticisme en praktische zekerheid zinvol?",
      "Welke vormen van zekerheid accepteer jij als 'zeker genoeg' voor dagelijks handelen?"
    ]
  },
  {
    id: "betrouwbaarheidstheorie",
    title: "De Betrouwbaarheidstheorie van Kennis",
    difficulty: 3,
    emoji: "🔍",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Epistemologie", "Kennis", "Rechtvaardiging", "Gedachte-experiment"],
    definition: "Na Gettier zochten epistemologen een betere kennis-definitie. Alvin Goldman stelde: kennis = ware overtuiging geproduceerd door een betrouwbaar cognitief proces. Niet hoe jij jouw overtuiging rechtvaardigt, maar of het cognitieve mechanisme dat haar produceerde betrouwbaar is. Perceptie, geheugen en redenering zijn betrouwbaar; gissen en wensdenken zijn dat niet.",
    abstractExample: "Betrouwbaarheidstheorie lost Gettier op: in Gettier-gevallen is het geloof-producerende proces onbetrouwbaar (toevallig juist). Bij werkelijk weten wordt de waarheid gecauseerd door een betrouwbaar proces. Kritiek: wat maakt een proces 'betrouwbaar'? In welke omgeving? Dit is het 'generaliteitsprobleem'.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Goldman (1979): een klokkijker ziet een klok die toevallig stilstaat op het juiste tijdstip. Hij gelooft de correcte tijd, zijn overtuiging is gerechtvaardigd — maar het is geen kennis. Het proces (kijken naar een stilstaande klok) is niet betrouwbaar." },
      { domain: "science", icon: "🔬", text: "Wetenschappelijke methode als betrouwbaarheidsmechanisme: peer review, replicatie en statistische controles zijn ontworpen om kennis-producerende processen betrouwbaarder te maken. Wetenschappelijke kennis is 'echte kennis' omdat het productieproces betrouwbaar is." },
      { domain: "daily", icon: "🏠", text: "Getuigenverhoren: mensen geloven wat ze zagen — maar ooggetuigengeheugen is notoir onbetrouwbaar (onderzoek toont fouten in 70%+ van zaken). Betrouwbaarheidstheorie zegt: ooggetuigenovertuigingen zijn vaak geen kennis, ook als ze toevallig correct zijn." }
    ],
    prerequisites: ["gettier-probleem"],
    unlocks: [],
    relatedPrinciples: ["gettier-probleem", "inductieprobleem", "falsificeerbaarheid-popper"],
    exercises: [{
      type: "multiple-choice",
      question: "Volgens de betrouwbaarheidstheorie is kennis:",
      options: ["Ware overtuiging die je zelf goed kunt rechtvaardigen", "Ware overtuiging geproduceerd door een betrouwbaar cognitief proces", "Overtuiging die door iedereen wordt gedeeld", "Overtuiging gebaseerd op directe ervaring"],
      correct: 1,
      feedback: "Juist! Goldman's betrouwbaarheidstheorie: het gaat niet om subjectieve rechtvaardiging maar om of het proces dat de overtuiging produceerde betrouwbaar is. Dit lost Gettier-gevallen op: toevallig correcte overtuigingen via onbetrouwbare processen zijn geen kennis."
    }],
    creativePrompt: "Welke van jouw overtuigingen zijn gebaseerd op betrouwbare processen? Welke niet? Maak een eerlijke inventarisatie.",
    aiHelperPrompts: [
      "Hoe bepaal je of een cognitief proces betrouwbaar genoeg is voor kennis?",
      "Is sociale media een betrouwbaar kennisproductieproces?",
      "Hoe verschilt de betrouwbaarheidstheorie van de klassieke JTB-definitie?"
    ]
  },
  {
    id: "wittgenstein-privétaal",
    title: "Het Privétaal-argument (Wittgenstein)",
    difficulty: 3,
    emoji: "🗣️",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["Taalfilosofie", "Bewustzijn", "Privéervaring", "Gedachte-experiment"],
    definition: "Stel je voor dat je een privétaal uitvindt om jouw innerlijke sensaties te benoemen — een taal die niemand anders kan begrijpen. Wittgenstein betoogde dat zo'n taal onmogelijk is: om een teken consistent te gebruiken heb je een criterium van correctheid nodig, en dat criterium kan niet volledig privé zijn. Taal is inherent sociaal en vereist externe validatie.",
    abstractExample: "Als je de letter 'S' gebruikt voor een innerlijke sensatie, hoe weet je dan dat je 'S' morgen hetzelfde gebruikt als vandaag? Je kunt je geheugen niet onafhankelijk controleren. Wittgenstein: 'Wat ook juist lijkt is juist' — maar dan betekent 'juist' niets. Criteria voor correctheid vereisen een publiek kader.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Wittgenstein (Philosophische Untersuchungen, 1953) weerlegde Descartes' idee dat de geest een privédomein is met privileged access. Taal over innerlijke toestanden is verankerd in publieke gedragspraktijken — niet in onfeilbare introspectie." },
      { domain: "daily", icon: "🏠", text: "Als jij zegt 'ik heb pijn', leert de betekenis van 'pijn' zijn betekenis uit publiek gedrag (schreeuwen, wincing, zoeken naar hulp) — niet uit jouw privéervaring alleen. Pijn-taal is gekoppeld aan maatschappelijke praktijken, niet aan een intern woordenboek." },
      { domain: "science", icon: "🔬", text: "Psychologie kan innerlijke toestanden alleen meten via gedragsmanifestaties, zelfrapporten en fysiologische correlaten. Er is geen directe toegang tot privéervaringen. Wittgenstein: dat is niet een methodologisch gebrek, maar een conceptuele noodzakelijkheid." }
    ],
    prerequisites: ["chinese-kamer", "mary-kamer"],
    unlocks: [],
    relatedPrinciples: ["chinese-kamer", "filosofische-zombie", "mary-kamer"],
    exercises: [{
      type: "multiple-choice",
      question: "Wittgenstein's privétaal-argument toont aan dat:",
      options: ["Privé-ervaringen niet bestaan", "Taal voor innerlijke toestanden vereist publieke criteria van correctheid", "Alle taal privé is", "Communicatie onmogelijk is over gevoelens"],
      correct: 1,
      feedback: "Juist! Wittgenstein's kernpunt: taalgebruik vereist criteria voor correctheid die niet volledig privé kunnen zijn — anders kun je 'correcte' van 'incorrecte' toepassingen niet onderscheiden. Taal is inherent sociaal, ook taal over innerlijke ervaringen."
    }],
    creativePrompt: "Probeer een woord te bedenken voor een sensatie die niemand anders heeft. Hoe zou je ooit controleren of je het consistent gebruikt?",
    aiHelperPrompts: [
      "Kan jij iets voelen waarvoor geen woord bestaat in jouw taal?",
      "Hoe beïnvloedt de beschikbare taal jouw innerlijke ervaringen?",
      "Wat zegt Wittgenstein's argument over de grenzen van introspectie?"
    ]
  }
];
