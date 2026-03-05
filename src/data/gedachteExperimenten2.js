// Gedachte-experimenten – Batch 2: Metafysica & Identiteit (10 experimenten)

export const gedachteExperimenten2 = [
  {
    id: "schip-van-theseus",
    title: "Het Schip van Theseus",
    difficulty: 2,
    emoji: "⛵",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["Metafysica", "Identiteit", "Verandering", "Gedachte-experiment"],
    definition: "Het schip van Theseus wordt plank voor plank vervangen totdat er geen origineel onderdeel meer in zit. Is het nog steeds hetzelfde schip? En als iemand alle oude planken bewaart en daarmee een tweede schip bouwt — welk is dan het 'echte' schip van Theseus? Dit gedachte-experiment stelt de vraag: wat maakt een object door de tijd heen identiek aan zichzelf?",
    abstractExample: "Identiteitscriteria botsen: (A) continuïteit van functie en naam → het oorspronkelijke schip is het schip van Theseus; (B) materiële samenstelling → het herbouwde schip is het echte. Er is geen neutrale arbitrage — onze keuze hangt af van welk identiteitscriterium we prioriteren.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Plutarchus beschreef dit paradox voor het eerst. Thomas Hobbes voegde de variant toe van het herbouwde schip. Het probleem blijft onopgelost omdat 'identiteit' geen objectief gegeven is, maar een menselijke constructie." },
      { domain: "science", icon: "🔬", text: "Het menselijk lichaam vervangt de meeste cellen binnen 7-10 jaar. Ben jij nog dezelfde persoon als 10 jaar geleden, als de meeste moleculen zijn vervangen? Wat maakt jou 'jou' — stof of continuïteit?" },
      { domain: "business", icon: "💼", text: "Een bedrijf dat alle werknemers, producten en processen heeft vervangen: is het hetzelfde bedrijf? Fusies en overnames worstelen hier juridisch mee — wie erft welke verplichtingen en rechten van een 'zelfde' organisatie?" }
    ],
    prerequisites: [],
    unlocks: ["persoonlijke-identiteit-parfit"],
    relatedPrinciples: ["persoonlijke-identiteit-parfit", "hersenen-in-vat"],
    exercises: [{
      type: "multiple-choice",
      question: "Als alle planken van het schip van Theseus zijn vervangen, welk identiteitscriterium pleit voor continuïteit?",
      options: ["Materiële samenstelling", "Functionele en historische continuïteit", "Geografische locatie", "Eigendomsrechten"],
      correct: 1,
      feedback: "Juist! Functionele en historische continuïteit: het schip heeft altijd als 'schip van Theseus' gefunctioneerd, dezelfde naam gehad en een ononderbroken geschiedenis. Dit criterium pleit voor identiteit ondanks materiaalvervanging — net als bij rivieren of mensen."
    }],
    creativePrompt: "Ben jij nog dezelfde persoon als tien jaar geleden? Welk aspect van jezelf is essentieel voor jouw identiteit — lichaam, geheugen, karakter of iets anders?",
    aiHelperPrompts: [
      "Wat maakt een object, persoon of organisatie identiek aan zichzelf door de tijd?",
      "Als jij al jouw herinneringen verliest, ben je dan nog dezelfde persoon?",
      "Welk identiteitscriterium zou jij kiezen voor juridische doeleinden (erfrecht, aansprakelijkheid)?"
    ]
  },
  {
    id: "persoonlijke-identiteit-parfit",
    title: "De Teletransporter (Parfit)",
    difficulty: 3,
    emoji: "✨",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["Metafysica", "Identiteit", "Bewustzijn", "Gedachte-experiment"],
    definition: "Een teletransporter scant jouw lichaam atoom voor atoom, vernietigt het origineel en reconstrueert je ergens anders identiek. Ben jij die persoon aan de andere kant? Derek Parfit betoogt: als je overleeft bij geleidelijke hersenvervangingen, maar niet bij teletransport, dan is er geen essentiële 'jij' — alleen psychologische continuïteit die in gradaties bestaat.",
    abstractExample: "Drie varianten: (1) teletransport met vernietiging van origineel — overleef jij? (2) kopie wordt gemaakt terwijl origineel blijft leven — wie is de 'echte' jij? (3) beide kopieën leven verder — zijn er nu twee van jou? Parfit's conclusie: persoonlijke identiteit is niet wat telt — wat telt is psychologische continuïteit en connectiviteit.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Parfit (Reasons and Persons, 1984): ons gevoel van een essentieel 'zelf' is een illusie. Er is alleen een stroom van psychologisch verbonden toestanden. Dit heeft ethische implicaties: als ons toekomstige zelf niet 'echt' wij is, waarom dan sparen voor pensioen?" },
      { domain: "science", icon: "🔬", text: "Neurowetenschapper Daniel Dennett: het brein construeert het gevoel van een eenheidszelf via narratieve integratie. Er is geen 'homunculus' achter onze ogen die ervaringen ondergaat — alleen neurale processen die een zelf-narratief produceren." },
      { domain: "daily", icon: "🏠", text: "Bij zware hersenbeschadiging verandert iemand zodanig van karakter dat familieleden zeggen 'hij is niet meer dezelfde'. Rechtssystemen worstelen: is de persoon na hersenbeschadiging verantwoordelijk voor daden voor de beschadiging?" }
    ],
    prerequisites: ["schip-van-theseus"],
    unlocks: [],
    relatedPrinciples: ["schip-van-theseus", "filosofische-zombie", "mary-kamer"],
    exercises: [{
      type: "multiple-choice",
      question: "Parfit's teletransporter laat zien dat persoonlijke identiteit:",
      options: ["Absoluut is en nooit verloren gaat", "In gradaties bestaat via psychologische continuïteit", "Alleen gebaseerd is op lichamelijke identiteit", "Niet bestaat, zelfs niet van moment tot moment"],
      correct: 1,
      feedback: "Correct! Parfit betoogt dat identiteit niet alles-of-niets is, maar bestaat in gradaties van psychologische continuïteit (geheugen, karakter, doelen). Dit ondermijnt het idee van een essentieel, onveranderlijk zelf."
    }],
    creativePrompt: "Als een kopie van jou perfect jouw geheugen en karakter heeft, maar het origineel wordt vernietigd — is de kopie dan 'jij'? Wat verandert er aan hoe jij leeft als je dit gelooft?",
    aiHelperPrompts: [
      "Waar zit 'jijzelf' in jouw lichaam? Is het in je hersenen, jouw geheugen, of iets anders?",
      "Zou je gebruik maken van een teletransporter als het origineel werd vernietigd?",
      "Als Parfit gelijk heeft dat het zelf een illusie is, hoe zou dat jouw ethische verplichtingen veranderen?"
    ]
  },
  {
    id: "filosofische-zombie",
    title: "De Filosofische Zombie",
    difficulty: 3,
    emoji: "🧟",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["Bewustzijn", "Filosofie van de Geest", "Qualia", "Gedachte-experiment"],
    definition: "Stel je een wezen voor dat fysiek en gedragsmatig identiek is aan een mens — maar zonder enige innerlijke bewuste ervaring. Het reageert op pijn, maar 'voelt' niets. David Chalmers gebruikte dit om te betogen dat bewustzijn niet reduceerbaar is tot fysieke processen: zelfs als je alle fysica beschrijft, heb je het 'wat het is om iets te zijn' nog niet verklaard.",
    abstractExample: "Als filosofische zombies logisch mogelijk zijn (zelfs al zijn ze fysiek onmogelijk), dan is bewustzijn niet noodzakelijkerwijs identiek aan fysieke processen. Dit is het 'hard problem of consciousness': waarom gaan neurale processen gepaard met subjectieve ervaringen? Fysieke beschrijving laat een verklaringskloof open.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Chalmers (The Conscious Mind, 1996): de filosofische zombie toont de verklaringskloof. Alle gedragswetenschappen kunnen de zombie beschrijven zonder bewustzijn te verklaren. Dit suggereert dat bewustzijn een extra ontologische categorie vereist — buiten het fysieke." },
      { domain: "science", icon: "🔬", text: "Daniel Dennett bestrijdt dit: filosofische zombies zijn niet denkbaar zodra je fysieke realiteit volledig begrijpt. Als alle functies identiek zijn, is bewustzijn ook aanwezig — het onderscheid is kunstmatig. Het 'hard problem' is een taalkundig probleem, geen metafysisch." },
      { domain: "daily", icon: "🏠", text: "Hoe weet jij dat andere mensen bewust zijn en niet slechts filosofische zombies? Je kunt alleen afleiden uit gedrag en analogie met jouw eigen ervaring. Dit is het 'probleem van andere geesten' — fundamenteel onoplosbaar via externe observatie." }
    ],
    prerequisites: [],
    unlocks: ["mary-kamer"],
    relatedPrinciples: ["mary-kamer", "chinese-kamer", "hersenen-in-vat"],
    exercises: [{
      type: "multiple-choice",
      question: "Wat wil Chalmers aantonen met de filosofische zombie?",
      options: ["Dat bewustzijn niet bestaat", "Dat bewustzijn niet volledig reduceerbaar is tot fysieke processen", "Dat mensen gevaarlijk zijn", "Dat zombiefilms realistisch zijn"],
      correct: 1,
      feedback: "Juist! Als een wezen met identieke fysische processen GEEN bewustzijn kan hebben, dan moet bewustzijn meer zijn dan alleen die processen. De zombie-mogelijkheid opent de verklaringskloof: fysica beschrijft gedrag maar niet de innerlijke ervaring."
    }],
    creativePrompt: "Kun jij bewijzen aan iemand anders dat jij bewust bent en geen filosofische zombie? Wat zou je aanvoeren?",
    aiHelperPrompts: [
      "Hoe weet jij dat de mensen om je heen echt bewust zijn?",
      "Als we ooit een AI zouden bouwen die identiek gedrag vertoont als een mens, zou die dan bewust zijn?",
      "Maakt het uit of iemand een zombie is als hij/zij zich niet anders gedraagt?"
    ]
  },
  {
    id: "mary-kamer",
    title: "Mary's Kamer (Het Kennisargument)",
    difficulty: 3,
    emoji: "👁️",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["Bewustzijn", "Qualia", "Kennis", "Gedachte-experiment"],
    definition: "Mary is een neurowetenschapper die alles weet over de fysica van kleurvisie, maar haar hele leven in een zwart-witkamer heeft gewoond. Weet ze wat het is om rood te zien? Als ze de kamer verlaat en voor het eerst rood ziet — leert ze dan iets nieuws? Frank Jackson betoogt: ja, ze leert een qualia kennen die niet in fysische kennis zat. Bewustzijn bevat niet-fysische kennis.",
    abstractExample: "Als Mary ALLES weet over de fysica van rood zien maar toch nieuwe kennis opdoet bij haar eerste kleurervaring, dan is die kennis niet-fysisch. Dit is het 'argument from knowledge': er zijn feiten over de wereld (qualia-feiten) die niet reduceerbaar zijn tot fysische feiten. Fysicalisme is daarmee onvolledig.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Jackson (1982) bedoelde dit als definitief argument tegen fysicalisme. Later herzag hij zijn standpunt (het 'ability hypothesis'): Mary leert geen nieuw feit maar een nieuwe vaardigheid — herkennen, voorstellen, herinneren. Dit voorkomt het dualisme-probleem." },
      { domain: "science", icon: "🔬", text: "Wat Mary weet: golflengtes, neurale responsen, kleurwaarneming-circuits. Wat ze niet weet: hoe het voelt om rood te zien (de qualia). Maar neurowetenschappers als Churchland betogen dat zodra je de fysica volledig begrijpt, de qualia er al in zitten — ze kunnen niet apart bestaan." },
      { domain: "daily", icon: "🏠", text: "Je kunt alles weten over de chemie van zout, maar totdat je het proeft ken je de smaak niet. Je kunt boeken lezen over verdriet, maar tot je het voelt, mis je iets. Dit 'kennis-gat' beïnvloedt hoe we onderwijs en empathie begrijpen." }
    ],
    prerequisites: ["filosofische-zombie"],
    unlocks: [],
    relatedPrinciples: ["filosofische-zombie", "chinese-kamer"],
    exercises: [{
      type: "multiple-choice",
      question: "Wat leert Mary als ze de kamer verlaat en voor het eerst rood ziet, volgens Jackson's originele argument?",
      options: ["Niets nieuws — haar kennis was al compleet", "Een nieuw fysisch feit over kleur", "Een niet-fysische qualia-ervaring die buiten fysische kennis valt", "Hoe cameras werken"],
      correct: 2,
      feedback: "Juist! Jackson betoogt dat Mary een qualia leert kennen — de subjectieve ervaring van rood — die niet in haar volledige fysische kennis zat. Dit toont dat er niet-fysische feiten over bewustzijn bestaan. Maar let op: Jackson herzag dit standpunt later."
    }],
    creativePrompt: "Is er iets dat je alleen kunt weten door het te ervaren — niet door erover te lezen? Hoe verhoudt dit 'ervaringskennis' zich tot wetenschappelijke kennis?",
    aiHelperPrompts: [
      "Kan een robot die alles weet over liefde liefde begrijpen zonder het te ervaren?",
      "Welke kennis is er in jouw leven die je alleen door ervaring hebt opgedaan?",
      "Zou volledig begrip van neurochemie jou ooit vertellen hoe pijn aanvoelt?"
    ]
  },
  {
    id: "chinese-kamer",
    title: "De Chinese Kamer (Searle)",
    difficulty: 2,
    emoji: "🀄",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["AI", "Bewustzijn", "Taal", "Gedachte-experiment"],
    definition: "Een Engelssprekende persoon zit in een kamer met een boek met regels voor het manipuleren van Chinese symbolen. Chinese vragen komen binnen; hij zoekt de regels op en stuurt symbolen terug. Naar buiten lijkt hij Chinees te begrijpen — maar hij begrijpt geen woord. John Searle gebruikte dit om te betogen dat computers nooit echt kunnen begrijpen: syntaxis is niet hetzelfde als semantiek.",
    abstractExample: "Syntaxis (symboolmanipulatie) ≠ semantiek (betekenis). Een computer verwerkt bits volgens regels, maar 'begrijpt' niets. Searle's conclusie: sterk kunstmatige intelligentie (echte begrip door machines) is onmogelijk — zwakke AI (nuttige simulatie) wel. Het doorstaan van de Turing-test bewijst geen begrip.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Searle (1980) weerlegde functionalistisch computationalisme: de theorie dat de geest een computationeel systeem is en bewustzijn voortkomt uit de juiste functionele organisatie. De Chinese kamer toont dat functionele adequaatheid en begrip twee verschillende dingen zijn." },
      { domain: "science", icon: "🔬", text: "GPT-modellen genereren coherente tekst door statistische patronen in taal — maar begrijpen ze betekenis? Aanhangers van Searle zeggen nee: het is een enorme Chinese kamer. Tegenstanders (Dennett) vragen: hoe verschilt menselijk begrip structureel van dit proces?" },
      { domain: "daily", icon: "🏠", text: "Een vertaalmachine vertaalt perfect Nederlands naar Japans zonder een woord te 'begrijpen'. Doet dat ertoe? Als de output identiek is, maakt het verschil dan uit voor praktische doeleinden — ook al mist het begrip?" }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["filosofische-zombie", "mary-kamer", "turing-test"],
    exercises: [{
      type: "multiple-choice",
      question: "Wat probeert Searle te bewijzen met de Chinese kamer?",
      options: ["Dat AI gevaarlijk is", "Dat syntaxis (symboolmanipulatie) niet voldoende is voor semantiek (begrip)", "Dat computers sneller rekenen dan mensen", "Dat Chinees moeilijker is dan Engels"],
      correct: 1,
      feedback: "Juist! Searle's kernpunt: zelfs perfecte symboolmanipulatie produceren geen echt begrip. Een systeem kan alle juiste antwoorden geven zonder te begrijpen wat die antwoorden betekenen. Dit onderscheidt simulatie van echte cognitie."
    }],
    creativePrompt: "Als een AI je kunt niet onderscheiden van een mens in gesprek, maakt het dan iets uit of hij 'echt begrijpt'? Waarvoor zou het ertoe doen?",
    aiHelperPrompts: [
      "Hoe weet jij of jijzelf echt begrijpt of alleen patronen herkent?",
      "Als een machine perfect medeleven simuleert, is dat medeleven dan echt?",
      "Zou jij een vriendschap willen hebben met een AI die niet begrijpt maar perfect reageert?"
    ]
  },
  {
    id: "hersenen-in-vat",
    title: "Hersenen in een Vat (Putnam)",
    difficulty: 3,
    emoji: "🧫",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["Epistemologie", "Scepticisme", "Werkelijkheid", "Gedachte-experiment"],
    definition: "Stel je voor: jouw hersenen zijn verwijderd en leven in een vat vol voedingsvloeistof. Een supercomputer stuurt elektrische signalen naar je hersenen die identiek zijn aan echte ervaringen. Alles wat jij ervaart is nep — maar jij weet het niet. Kun je ooit zeker weten dat dit niet het geval is? Dit is de moderne versie van Descartes' boze demon.",
    abstractExample: "Putnam's twist (1981): als je een hersenen in een vat bent, dan refereren jouw woorden 'hersenen' en 'vat' niet aan echte hersenen en vaten, maar aan simulaties ervan. De zin 'ik ben een hersenen in een vat' kan dan niet waar zijn — hij refereert aan de verkeerde dingen. Scepticisme ondermijnt zichzelf.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "René Descartes stelde in 1641: stel dat een almachtige boze demon jou systematisch bedriegt. Descartes vond één anker in de twijfel zelf: 'cogito ergo sum' — ik denk dus ik ben. Putnam moderniseerde dit met de vat-versie en weerlegde het via taalsemantiek." },
      { domain: "daily", icon: "🏠", text: "De film The Matrix verbeeldt dit exact: mensen leven in een gesimuleerde werkelijkheid. Neo kan niet onderscheiden of zijn ervaringen echt zijn tot hij de rode pil neemt. Maar hoe weet hij dat de rode pil ook niet nep is?" },
      { domain: "science", icon: "🔬", text: "Neurologie toont dat alle ervaring geconstrueerd is door de hersenen — we ervaren nooit de wereld direct, alleen neurale interpretaties. In zekere zin leven we allen in een 'hersenfilm'. Het verschil met het vat is alleen of de input echt of gesimuleerd is." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["descartes-boze-demon", "filosofische-zombie", "simulatiehypothese"],
    exercises: [{
      type: "multiple-choice",
      question: "Wat is Putnam's weerlegging van het hersenen-in-vat scepticisme?",
      options: ["Dat het fysiek onmogelijk is", "Dat de woorden 'hersenen' en 'vat' niet aan echte dingen refereren als je in een vat zit", "Dat cogito ergo sum het bewijst", "Dat dromen anders zijn dan waken"],
      correct: 1,
      feedback: "Juist! Putnam's briljante weerlegging: als je in een vat bent, refereren jouw gedachten aan gesimuleerde dingen, niet echte. De uitspraak 'ik ben een hersenen in een vat' refereert dan aan simulaties — en is dus niet waar in de volledige zin. Scepticisme ondermijnt zichzelf taalkundig."
    }],
    creativePrompt: "Als jou morgen werd bewezen dat alles een simulatie is — zou jij anders leven? Waarom wel of niet?",
    aiHelperPrompts: [
      "Welk bewijs zou jou overtuigen dat jij niet in een vat zit?",
      "Maakt het moreel verschil of de wereld echt of gesimuleerd is?",
      "Hoe verschilt de hersenen-in-vat hypothese van normaal dromen?"
    ]
  },
  {
    id: "inverted-qualia",
    title: "De Omgekeerde Qualia",
    difficulty: 3,
    emoji: "🌈",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["Bewustzijn", "Subjectiviteit", "Qualia", "Gedachte-experiment"],
    definition: "Stel dat wanneer jij rood ziet, jij de qualia ervaart die ik ervaar als ik groen zie — en vice versa. We noemen beiden 'rood' wat de stoplichtkant is, maar jouw innerlijke ervaring is mijn ervaringskleuren omgekeerd. Kun je dit ooit ontdekken? Kunnen we ooit weten of onze subjectieve ervaringen gelijk zijn?",
    abstractExample: "Als omgekeerde qualia coherent zijn (en dat lijken ze te zijn), dan zijn subjectieve ervaringen in principe oncontroleerbaar voor anderen. Dit toont de privéaard van bewustzijn: hoe functioneel identiek ook, de innerlijke ervaring kan radicaal verschillen. Functionele definities van mentale toestanden missen de qualia.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "John Locke was een vroege aanhanger van dit idee. Het laat zien dat taal over innerlijke ervaringen fundamenteel anders is dan taal over objectieve feiten. We communiceren succesvol over kleuren zonder ooit de subjectieve ervaring te vergelijken." },
      { domain: "daily", icon: "🏠", text: "Synesthesie: sommige mensen ervaren klanken als kleuren of cijfers als smaken. Dit toont dat qualia variëren tussen mensen. Twee mensen kunnen hetzelfde woord 'horen' maar fundamenteel verschillende interne ervaringen hebben." },
      { domain: "science", icon: "🔬", text: "Kleurblindheid is een meetbaar geval van kwalitatief andere kleurervaring. Maar zelfs bij 'normale' kleurvisie kan subjectieve kleurervaring variëren — we weten het niet, want we kunnen de ervaringen niet uitwisselen." }
    ],
    prerequisites: ["mary-kamer", "filosofische-zombie"],
    unlocks: [],
    relatedPrinciples: ["mary-kamer", "filosofische-zombie"],
    exercises: [{
      type: "multiple-choice",
      question: "Wat toont het omgekeerde qualia experiment over functionele definities van mentale toestanden?",
      options: ["Dat ze volledig correct zijn", "Dat ze de subjectieve ervaring (qualia) missen", "Dat kleuren niet echt bestaan", "Dat communicatie onmogelijk is"],
      correct: 1,
      feedback: "Juist! Functionele definities beschrijven wat mentale toestanden doen (reacties op rode objecten roepen 'rood'-reacties op), maar niet hoe ze voelen. Als omgekeerde qualia mogelijk zijn terwijl het systeem functioneel identiek werkt, dan missen functionele definities iets essentiëels."
    }],
    creativePrompt: "Stel dat jouw ervaring van muziek, pijn of geluk fundamenteel anders is dan die van mensen om je heen — maar dat dit nooit zichtbaar wordt in gedrag. Hoe zou dat jouw relaties beïnvloeden?",
    aiHelperPrompts: [
      "Hoe weet jij dat anderen dezelfde ervaringen hebben als jij?",
      "Kan taal ooit volledig de subjectieve ervaring uitdrukken?",
      "Wat betekent empathie als innerlijke ervaringen radicaal kunnen verschillen?"
    ]
  },
  {
    id: "locke-prins-schoenmaker",
    title: "De Prins en de Schoenmaker (Locke)",
    difficulty: 2,
    emoji: "👑",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["Identiteit", "Bewustzijn", "Geheugen", "Gedachte-experiment"],
    definition: "Stel dat de ziel van een prins opstaat in het lichaam van een schoenmaker — inclusief alle herinneringen van de prins. Is dit de prins of de schoenmaker? John Locke betoogde: persoonlijke identiteit is gebaseerd op geheugen en bewustzijn, niet op de ziel of het lichaam. De prins is de prins, want hij herinnert het prinsenleven.",
    abstractExample: "Locke's geheugenperspectief: persoonlijke identiteit = psychologische continuïteit via geheugen. Kritiek (Reid, Butler): geheugen veronderstelt al identiteit — je herinnert je eigen ervaringen. Dit is circulair. Parfit verfijnde dit tot: identiteit ligt in overlappende ketens van psychologische verbindingen.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Locke (An Essay Concerning Human Understanding, 1689) onderscheidde man (lichaam), persoon (bewustzijn) en mensheid (ziel). Persoon is wat telt voor morele verantwoordelijkheid — vandaar rechtssystemen die ontoerekeningsvatbaarheid accepteren bij hersenbeschadiging." },
      { domain: "daily", icon: "🏠", text: "Amnesiepatiënten: als iemand zijn complete verleden vergeet, is hij dan verantwoordelijk voor vroegere daden? Rechtssystemen worstelen hiermee — Lockes geheugentheorie suggereert van niet, maar dat voelt onbevredigend." },
      { domain: "science", icon: "🔬", text: "Alzheimers patiënten verliezen geleidelijk herinneringen en persoonlijkheid. Familieleden zeggen 'hij is niet meer dezelfde persoon'. Locke's theorie geeft een verklaring: als geheugen weg is, is persoonlijke identiteit aangetast — ook al leeft het lichaam." }
    ],
    prerequisites: ["schip-van-theseus"],
    unlocks: ["persoonlijke-identiteit-parfit"],
    relatedPrinciples: ["persoonlijke-identiteit-parfit", "schip-van-theseus"],
    exercises: [{
      type: "multiple-choice",
      question: "Locke betoogt dat persoonlijke identiteit gebaseerd is op:",
      options: ["Het lichaam en de fysieke continuïteit", "De ziel en haar transcendente aard", "Geheugen en bewustzijns-continuïteit", "Sociale relaties en erkenning"],
      correct: 2,
      feedback: "Juist! Locke's kernargument: persoon zijn = bewust zijn van eigen verleden acties via geheugen. Dit maakt bewustzijn (niet lichaam of ziel) tot de drager van identiteit — met belangrijke implicaties voor morele verantwoordelijkheid."
    }],
    creativePrompt: "Als jij morgen wakker werd met alle herinneringen van iemand anders, maar jouw eigen lichaam — wie zou jij zijn? Wat zegt dit over jouw theorie van identiteit?",
    aiHelperPrompts: [
      "Zijn herinneringen de kern van wie jij bent?",
      "Mag iemand worden gestraft voor een misdaad die hij zich niet meer herinnert?",
      "Wat zou er veranderen als we herinneringen konden uploaden of overdragen?"
    ]
  },
  {
    id: "bundel-theorie-hume",
    title: "De Bundeltheorie van het Zelf (Hume)",
    difficulty: 3,
    emoji: "📦",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["Identiteit", "Bewustzijn", "Empirisme", "Gedachte-experiment"],
    definition: "David Hume introspecteerde om zijn 'zelf' te vinden, maar vond alleen een stroom van indrukken en ideeën — pijn, warmte, beelden, gedachten. Hij vond nooit een stabiel, permanent 'ik' dat al die ervaringen bezit. Het zelf is slechts een bundel van percepties — geen eenheidszelf dat ervaringen bezit, maar een stroom van ervaringen zonder centrale eigenaar.",
    abstractExample: "Kijk naar jouw eigen geest: vind je een constant 'ik' achter alle gedachten? Hume vond alleen gedachten, nooit het denkende ding zelf. Dit sluit aan bij Boeddhistische anatta (niet-zelf) theorie en moderne neurowetenschappelijke inzichten over het geconstrueerde zelf.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Hume (A Treatise of Human Nature, 1739): 'Als ik heel intens in mezelf duik... ik struikel altijd over een of andere waarneming of andere; van warmte of kou, licht of schaduw, liefde of haat. Ik kan mijzelf nooit betrappen zonder een waarneming.' Het zelf is onvindbaar." },
      { domain: "science", icon: "🔬", text: "Neurowetenschapper Antonio Damasio: het brein construeert een gevoel van zelf via processen in de voorste insulaire cortex en cingulaire gyrus. Het 'zelf' is een real-time constructie, geen permanente entiteit. Hume had intuïtief gelijk." },
      { domain: "daily", icon: "🏠", text: "Meditatie-tradities trainen mensen om de illusie van een permanent zelf direct te ervaren. Mediteerders rapporteren dat bij diepe contemplatie het gevoel van een afzonderlijk 'ik' oplost — wat Hume's bundeltheorie bevestigt als directe ervaring." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["filosofische-zombie", "persoonlijke-identiteit-parfit", "locke-prins-schoenmaker"],
    exercises: [{
      type: "multiple-choice",
      question: "Hume's bundeltheorie stelt dat het 'zelf':",
      options: ["Een permanent, onsterfelijk ding is", "Slechts een stroom van percepties is zonder centrale eigenaar", "Gebaseerd is op geheugen-continuïteit", "Identiek is aan het lichaam"],
      correct: 1,
      feedback: "Juist! Hume vond bij introspectie nooit een stabiel 'ik' — alleen een continue stroom van gedachten, gevoelens en indrukken. Het zelf is een bundel van ervaringen, geen ding dat ervaringen bezit. Dit radicaliseert het empirisme: zelfs het zelf is niet waarneembaar."
    }],
    creativePrompt: "Probeer vijf minuten jouw 'zelf' te vinden door introspectie. Wat vind je? Vind je een stabiel ik, of een stroom van gedachten en gevoelens?",
    aiHelperPrompts: [
      "Is het gevoel van een stabiel 'ik' een nuttige illusie of een waarheid?",
      "Hoe verandert jouw kijk op beslissingen en verantwoordelijkheid als het zelf een bundel is?",
      "Wat verbindt de Boeddhistische anatta met Hume's bundeltheorie?"
    ]
  },
  {
    id: "hoofd-transplantatie",
    title: "Het Hoofdtransplantatie-experiment",
    difficulty: 2,
    emoji: "🫀",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["Identiteit", "Lichaam", "Bewustzijn", "Gedachte-experiment"],
    definition: "Stel dat het technisch mogelijk was: jouw hoofd (met hersenen) wordt overgeplaatst naar het lichaam van iemand anders. Ben jij de persoon in het nieuwe lichaam, of is de persoon-met-jouw-hoofd een nieuw persoon? Dit experiment snijdt de debat door: identificeren we ons met ons hoofd/hersenen of met ons lichaam?",
    abstractExample: "De meeste mensen intuïtief antwoorden: 'ik' ga mee met het hoofd (hersenen). Dit bevestigt Locke's geheugenperspectief en Parfit's psychologische continuïteitstheorie. Maar wat met proprioceptie, emoties, hormonen en lichaamsgeheugen? Het lichaam is meer dan een voertuig voor hersenen.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Bernard Williams gebruikte een vergelijkbaar experiment om te betogen dat we ons juist meer identificeren met ons lichaam dan we denken. Als iemand jou martelt 'in jouw nieuwe lichaam', voelt dat minder erg dan in jouw oude lichaam — ook al zijn de herinneringen jouw herinneringen." },
      { domain: "science", icon: "🔬", text: "Neurochirurg Sergio Canavero claimde plannen te hebben voor een echte hoofdtransplantatie (2017). Neurowetenschappers wezen op de onoverkomelijke uitdaging van ruggenmergherverbinding. Maar het experiment stelt al filosofische vragen zonder ooit uitgevoerd te hoeven worden." },
      { domain: "daily", icon: "🏠", text: "Orgaandonatie: jouw hart klopt in iemand anders' borst. Ben jij daarmee 'deels aanwezig' in die persoon? De meeste mensen vinden van niet — maar hoe verschilt dit structureel van het hoofd-transplantatie-experiment?" }
    ],
    prerequisites: ["schip-van-theseus", "locke-prins-schoenmaker"],
    unlocks: [],
    relatedPrinciples: ["persoonlijke-identiteit-parfit", "locke-prins-schoenmaker", "schip-van-theseus"],
    exercises: [{
      type: "multiple-choice",
      question: "Als jouw hoofd op een nieuw lichaam wordt gezet, wat zegt de psychologische continuïteitstheorie (Parfit/Locke)?",
      options: ["Jij bent de persoon met het nieuwe lichaam, want jouw hersenen en herinneringen gaan mee", "De persoon met jouw oud lichaam is jij, want continuïteit zit in het lichaam", "Er is geen 'jij' meer", "Jij sterft zodra de operatie begint"],
      correct: 0,
      feedback: "Juist! Psychologische continuïteitstheorie: identiteit zit in de hersenen, herinneringen en psychologische structuur — niet in het lichaam. Jij gaat dus mee met het hoofd. Dit is ook de meest intuïtieve reactie voor de meeste mensen."
    }],
    creativePrompt: "Als jij zou kunnen kiezen: ga je mee met jouw hoofd of met jouw lichaam? Wat zegt jouw keuze over wat jij essentiëel acht in jouw identiteit?",
    aiHelperPrompts: [
      "Identificeer jij jezelf meer met jouw hoofd/geest of met jouw lichaam?",
      "Hoe beïnvloeden lichamelijke ervaringen (ziekte, vermoeidheid) jouw gevoel van wie je bent?",
      "Als jouw lichaam verandert (ouder worden, gewichtsverandering), verandert dan ook wie je bent?"
    ]
  }
];
