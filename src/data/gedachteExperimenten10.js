// Gedachte-experimenten – Batch 10: Existentie, Vrijheid & Levensfilosofie (10 experimenten)

export const gedachteExperimenten10 = [
  {
    id: "existentiele-keuze",
    title: "De Existentiële Keuze (Sartre)",
    difficulty: 2,
    emoji: "🌀",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Persoonlijke Ontwikkeling",
    tags: ["Existentialisme", "Vrijheid", "Keuze", "Gedachte-experiment"],
    definition: "Sartre's student: zijn moeder is ziek, zijn broer sneuvelde, hij wil de bezetter bevechten. Als hij vertrekt, verlaat hij zijn zieke moeder. Als hij blijft, laat hij zijn land en idealen in de steek. Geen morele theorie lost dit op. Sartre's conclusie: mensen zijn 'veroordeeld tot vrijheid' — elke keuze is onvermijdelijk, geen keuze is ook een keuze, en wij alleen zijn verantwoordelijk voor wie we worden.",
    abstractExample: "Existentialisme: bestaan gaat vooraf aan essentie. Er is geen vooraf gegeven menselijke natuur of goddelijk plan dat ons zegt wat te doen. Elke keuze schept waarden terwijl we die maken. 'Bad faith' (mauvaise foi) is jezelf vertellen dat je geen keuze hebt — het vluchten voor jouw vrijheid en verantwoordelijkheid.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Sartre (L'Existentialisme est un humanisme, 1945): angst (angoisse) is het bewustzijn van jouw absolute vrijheid en verantwoordelijkheid. We vluchten in 'slechte trouw' — ons gedragen als automaten ('ik moet', 'ik heb geen keuze') om de angst van vrijheid te vermijden." },
      { domain: "daily", icon: "🏠", text: "Carrièrekeuze als existentiële keuze: 'ik heb geen keuze, ik moet voor geld zorgen' is slechte trouw. Je kiest altijd — en de keuze vormt wie je bent. Kiezen voor zekerheid boven passie is een geldige keuze, maar erkennen dat het een keuze is, is essentiëel voor authentieke verantwoordelijkheid." },
      { domain: "science", icon: "🔬", text: "Psychologie van keuzeverantwoordelijkheid: Langer's research toont dat het gevoel van controle en keuze sterk samenhangt met gezondheid en welzijn. Ontkennen van keuzevrijheid correleert met hulpeloosheid (learned helplessness, Seligman). Existentialisme heeft psychologische evidentie." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["vrije-wil-experiment", "laplace-demon", "dood-en-onsterfelijkheid"],
    exercises: [{
      type: "multiple-choice",
      question: "Sartre's 'slechte trouw' (mauvaise foi) is:",
      options: ["Bewust liegen", "Jezelf vertellen dat je geen keuze hebt om verantwoordelijkheid te vermijden", "Slechte besluiten nemen", "Anderen bedriegen"],
      correct: 1,
      feedback: "Juist! Slechte trouw: vluchten voor jouw vrijheid door te doen alsof omstandigheid, natuur of regels jouw keuze bepalen. 'Ik heb geen keuze' is bijna altijd slechte trouw — je kiest altijd, ook als de opties pijnlijk zijn. Authentiek leven vereist het erkennen van jouw keuzes."
    }],
    creativePrompt: "Beschrijf een situatie in jouw leven waarbij je dacht 'ik heb geen keuze'. Klopt dat echt? Welke keuze maak je eigenlijk?",
    aiHelperPrompts: [
      "Hoe ga jij praktisch om met de angst (angoisse) van absolute vrijheid?",
      "Wanneer is het legitiem te zeggen dat je geen keuze had?",
      "Hoe beïnvloedt het existentialistische idee van vrijheid jouw gevoel van verantwoordelijkheid?"
    ]
  },
  {
    id: "vrije-wil-experiment",
    title: "Het Vrije Wil Experiment",
    difficulty: 2,
    emoji: "⚡",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Vrije Wil", "Determinisme", "Verantwoordelijkheid", "Gedachte-experiment"],
    definition: "Benjamin Libet (1983) mat hersenactiviteit bij vrijwillige beweging: de 'readiness potential' in de hersenen begint 550ms vóór de beweging — maar de bewuste intentie voelt pas 200ms voor de beweging. De hersenen besluiten eerder dan het bewuste gevoel. Geeft dit aan dat vrije wil een illusie is — dat ons bewuste 'ik' slechts registreert, niet besluit?",
    abstractExample: "Libet's interpretatie (omstreden): bewuste wil volgt na neurologische activatie — het 'besluit' was al genomen voor we ons ervan bewust waren. Maar critici: de readiness potential betekent niet dat het besluit al genomen was; het kan een achtergrondvoorbereiding zijn. Latere studies (Schurger, 2012) suggereren dat het slechts drempelruis is.",
    examples: [
      { domain: "science", icon: "🔬", text: "John-Dylan Haynes (2008): met fMRI kon hij 10 seconden van tevoren voorspellen welke hand iemand zou kiezen — ver vóór bewustzijn. Daniel Wegner (The Illusion of Conscious Will): bewuste wil is causaal weinig effectief — het is een post-hoc narratief. Dit is controversieel maar het debat gaat door." },
      { domain: "philosophy", icon: "🤔", text: "Compatibilisme (Daniel Dennett): vrije wil vereist niet dat de wil buiten causaliteit staat — het vereist dat je handelt vanuit jouw eigen waarden en redenen, zonder dwang van buiten. Libet's experiment weerlegt dit niet: ook causaal bepaalde besluiten kunnen 'vrij' zijn in compatibele zin." },
      { domain: "daily", icon: "🏠", text: "Als vrije wil een illusie is, verandert dat dan iets aan hoe je leeft? Pragmatisch: het gevoel van vrije wil is reëel en functioneel. Zelfs als besluiten causaal bepaald zijn, is het gevoel van overwegen, kiezen en verantwoordelijk zijn een nuttig en reëel psychologisch proces." }
    ],
    prerequisites: ["laplace-demon"],
    unlocks: [],
    relatedPrinciples: ["laplace-demon", "existentiele-keuze", "straf-retributief-rehabiliterend"],
    exercises: [{
      type: "multiple-choice",
      question: "Compatibilisme over vrije wil stelt dat:",
      options: ["Vrije wil en determinisme onverenigbaar zijn", "Vrije wil = handelen vanuit eigen waarden en redenen, ook als dat causaal bepaald is", "Libet's experiment vrije wil weerlegt", "Bewuste wil altijd voor hersenactiviteit komt"],
      correct: 1,
      feedback: "Juist! Compatibilisme: vrije wil vereist niet dat jij buiten de causale orde staat. Het vereist dat jij handelt vanuit jouw eigen waarden, redenen en overwegingen — zonder dwang van buiten. Deterministisch bepaald zijn via jouw eigen mentale processen is precies wat vrijheid betekent."
    }],
    creativePrompt: "Als jouw vrije wil een illusie is — verandert dat jouw gevoel van verantwoordelijkheid voor jouw verleden keuzes? Hoe zou jij dan anders over jezelf denken?",
    aiHelperPrompts: [
      "Hoe interpreteert Dennett Libet's experiment via compatibilisme?",
      "Maakt het praktisch verschil of je vrije wil hebt of niet?",
      "Hoe verhoudt het vrije wil debat zich tot ons rechtssysteem en morele oordelen?"
    ]
  },
  {
    id: "absurdisme",
    title: "De Absurditeitstest (Camus)",
    difficulty: 2,
    emoji: "🪨",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Persoonlijke Ontwikkeling",
    tags: ["Existentialisme", "Zingeving", "Absurdisme", "Gedachte-experiment"],
    definition: "Albert Camus: het absurde is de onverzoenbare botsing tussen menselijk verlangen naar betekenis en het zwijgen van het universum dat geen antwoord geeft. Sisyphus rolt zijn steen de berg op — die altijd terug rolt. Dat is het menselijke lot. Camus vraagt: wat is de enige echte filosofische vraag? 'Moet ik leven of niet?' En zijn antwoord: ja — maar in opstand, niet in hoop of nihilisme.",
    abstractExample: "Drie reacties op het absurde: (1) religieuze sprong (Kierkegaard) — irrationeel geloof; (2) filosofische zelfmoord (nihilisme) — verwerpen van het probleem; (3) opstand (Camus) — het absurde omarmen, ondanks. Sisyphus is gelukkig: niet vanwege de berg, maar ondanks de berg. Rebellie als levenshouding.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Camus (Le Mythe de Sisyphe, 1942): we moeten ons Sisyphus gelukkig voorstellen. Niet omdat zijn taak zinvol is, maar omdat het zijn taak is en hij het volledig omarmt. De opstand zelf — het doorbewust leven in het aangezicht van zinloosheid — is het zingevend antwoord." },
      { domain: "daily", icon: "🏠", text: "Burn-out en zingevingscrisis zijn een moderne confrontatie met het absurde: het gevoel dat de dagelijkse herhaling (werk-slaap-werk) geen diepere betekenis heeft. Camus' antwoord: het absurde zelf is het punt. Zoek niet naar externe rechtvaardiging, maar leef volledig." },
      { domain: "science", icon: "🔬", text: "Psycholoog Viktor Frankl (Man's Search for Meaning): zelfs in extreme omstandigheden (concentratiekamp) konden mensen zingeving creëren door houding en keuze. Frankl's logotherapie: zin is gecreëerd, niet gevonden. Dit parallelt Camus' opstand maar via een positief-constructief kader." }
    ],
    prerequisites: ["existentiele-keuze"],
    unlocks: [],
    relatedPrinciples: ["existentiele-keuze", "zin-van-het-leven", "dood-en-onsterfelijkheid"],
    exercises: [{
      type: "multiple-choice",
      question: "Camus' antwoord op het absurde is:",
      options: ["Religieus geloof als escape", "Nihilisme — het leven heeft geen zin, dus waarom moeite doen", "Opstand — het absurde volledig omarmen en toch doorleven", "Het zoeken naar rationele zingeving"],
      correct: 2,
      feedback: "Juist! Camus verwerpt zowel religieuze escape als nihilisme. Het absurde moet volledig worden erkend en toch geleefd worden — dit is de opstand. Sisyphus is gelukkig niet ondanks maar door zijn confrontatie met het absurde. Het is een houding van volledig bewust, rebellerend leven."
    }],
    creativePrompt: "Is er een 'Sisyphus-taak' in jouw leven — iets dat je herhaaldelijk doet zonder duidelijk eindpunt? Kun je je daarin gelukkig voorstellen, Camus' manier?",
    aiHelperPrompts: [
      "Hoe verschilt Camus' absurdisme van Sartre's existentialisme?",
      "Is Camus' opstand een geloofwaardige houding voor dagelijks leven?",
      "Hoe helpt het absurdisme mensen door zingevingscrisissen?"
    ]
  },
  {
    id: "authenticiteit",
    title: "De Authenticiteitstest (Heidegger)",
    difficulty: 3,
    emoji: "🪞",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Persoonlijke Ontwikkeling",
    tags: ["Existentialisme", "Authenticiteit", "Identiteit", "Gedachte-experiment"],
    definition: "Heidegger onderscheidt twee levensvormen: het authentieke bestaan (Eigentlichkeit) waarbij je je eindigheid en eigenheid confronteert, en het inauthentieke bestaan (Das Man) waarbij je leeft door de normen van 'men' — men doet zo, men denkt zo. De confrontatie met de dood (Sein-zum-Tode) is de aanleiding voor authentiek bestaan: bewust van jouw eindigheid, kies je voor het eerste.",
    abstractExample: "Heidegger's 'Das Man': in het dagelijks leven leven we als 'men' — de anonieme sociale norm bepaalt onze keuzes, meningen en zorgstructuren. We vluchten in praatjes, nieuwsgierigheid en dubbelzinnigheid. Angst (Angst) als stemming onthult ons vereenzaaming en confronteert ons met ons eigen bestaan. Authentieke beslissing vereist dit.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Heidegger (Sein und Zeit, 1927): authentiek zijn is niet individualistisch — het is een ander soort betrokkenheid met anderen, vanuit eigen beslissing en niet slechts conformistisch. Geweten roept ons terug van Das Man naar eigenheid. Schuld is de structuur van ons bestaan — niet morele fout maar ontologische eigenheid." },
      { domain: "daily", icon: "🏠", text: "'Wat zullen de mensen denken?' is het klingelend teken van Das Man. Keuzes gebaseerd op sociale verwachting in plaats van eigen waarden zijn inauthentiek. Niet dat sociale normen irrelevant zijn — maar ze als ondoordacht vanzelfsprekend accepteren zonder zelf te kiezen is inauthenticiteit." },
      { domain: "science", icon: "🔬", text: "Psychologisch: 'Social conformity' (Asch-experimenten) toont hoe sterk Das Man werkt — mensen bevestigen duidelijk fout groepsoordeel om conformiteit te vermijden. Authentiek zijn vereist moed: het bewust kiezen van eigen oordeel ondanks sociale druk." }
    ],
    prerequisites: ["existentiele-keuze"],
    unlocks: [],
    relatedPrinciples: ["existentiele-keuze", "vrije-wil-experiment", "bundel-theorie-hume"],
    exercises: [{
      type: "multiple-choice",
      question: "Heidegger's 'Das Man' verwijst naar:",
      options: ["Een specifiek persoon", "De anonieme sociale norm die ons leven bepaalt zonder eigen beslissing", "Het authentieke zelf", "Heideggers eigen filosofie"],
      correct: 1,
      feedback: "Juist! Das Man (letterlijk: 'men') is de anonieme, diffuse sociale norm die ons vertelt wat men denkt, wil en doet. Leven via Das Man is inauthentiek — het zijn van anderen in plaats van jezelf. Authentiek bestaan vereist een bewuste keuze vanuit jouw eigen eigenvste structuur."
    }],
    creativePrompt: "Welke keuzes in jouw leven zijn gemaakt door 'men' (sociale norm) en welke door jouw eigen beslissing? Is het onderscheid altijd duidelijk?",
    aiHelperPrompts: [
      "Hoe kun je in een sociale wereld authentiek zijn zonder anderen te negeren?",
      "Welke rol speelt de bewustwording van dood (Sein-zum-Tode) in Heideggers authenticiteitsgedachte?",
      "Hoe verschilt Heideggers authenticiteit van Sartre's vrijheid?"
    ]
  },
  {
    id: "zin-van-het-leven",
    title: "De Vraag naar de Zin van het Leven",
    difficulty: 2,
    emoji: "❓",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Persoonlijke Ontwikkeling",
    tags: ["Zingeving", "Filosofie", "Waarden", "Gedachte-experiment"],
    definition: "Is er een zin van het leven? Drie posities: (1) objectieve zin: het leven heeft een externe, gegeven doel (God's plan, evolutionaire doelstelling); (2) subjectieve zin: de zin is wat jij er zelf van maakt; (3) nihilisme: er is geen zin, en dat is het. Susan Wolf's middenpositie: zinvol leven = actief engageren met objectief waardevolle activiteiten — zin is noch puur subjectief noch opgelegd van buiten.",
    abstractExample: "Douglas Adams: '42' — de zin van het leven is het antwoord, maar de vraag is nooit gespecificeerd. Dit suggereert dat de vraag zelf verwarring is. Wittgenstein: de 'zin van het leven' is geen wetenschappelijke vraag maar een uitdrukking van een levenshouding. Niet beantwoord worden, maar geleefd.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Susan Wolf (Meaning in Life, 2010): zinvolheid vereist 'active engagement in projects of worth'. Noch puur subjectief (elke activiteit is zinvol als je het subjectief zo ervaart) noch puur objectief (activiteiten zijn zinvol ongeacht jouw houding). Zin ontstaat in de verbinding van beide." },
      { domain: "daily", icon: "🏠", text: "Viktor Frankl: zin kan worden gevonden in drie wegen — door iets te creëren of realiseren, door een waarde te ervaren (liefde, schoonheid), of door de houding die men aanneemt tegenover onvermijdbaar lijden. Zin is flexibel, persoonlijk en altijd beschikbaar." },
      { domain: "science", icon: "🔬", text: "Psychologie van zingeving: onderzoek (Ryan & Deci, self-determination theory) toont dat zinvolheid samenhangt met autonomie, competentie en verbondenheid — niet met plezier alleen. Mensen kunnen gelukkig zijn zonder zin te ervaren, en zinvol leven ondanks ongeluk." }
    ],
    prerequisites: ["existentiele-keuze", "absurdisme"],
    unlocks: [],
    relatedPrinciples: ["existentiele-keuze", "absurdisme", "ervaringsmachine"],
    exercises: [{
      type: "multiple-choice",
      question: "Susan Wolf's middenpositie over zinvolheid stelt dat zin:",
      options: ["Uitsluitend subjectief is (wat jij ervaart als zinvol)", "Uitsluitend objectief is (wat maatschappij als zinvol beschouwt)", "Ontstaat in actief engagement met objectief waardevolle activiteiten", "Onmogelijk is in een athestische wereld"],
      correct: 2,
      feedback: "Juist! Wolf: zin is noch puur subjectief (elk gevoel van engagement volstaat) noch puur objectief (externe norm dicteert). Zinvol leven vereist dat je actief betrokken bent bij dingen die objectief de moeite waard zijn — en die betrokkenheid subjectief ervaart. Zin is relationneel."
    }],
    creativePrompt: "Wat geeft jouw leven zin? Zijn dat subjectieve ervaringen, externe waarden, of iets van beide? Hoe verschilt jouw antwoord van vijf jaar geleden?",
    aiHelperPrompts: [
      "Hoe verschilt 'geluk' van 'zinvolheid' in het leven?",
      "Kan een nihilist nog zinvol leven?",
      "Hoe verandert jouw begrip van zinvolheid als je ouder wordt?"
    ]
  },
  {
    id: "stoicijnse-dichotomie",
    title: "De Stoïcijnse Dichotomie van Controle",
    difficulty: 1,
    emoji: "🏛️",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Persoonlijke Ontwikkeling",
    tags: ["Stoïcisme", "Controle", "Vrijheid", "Gedachte-experiment"],
    definition: "Epictetus: sommige dingen zijn 'up to us' (eph' hêmin) — onze oordelen, impulsen, verlangens, aversies; andere zijn 'niet up to us' — lichaam, reputatie, bezittingen, externe gebeurtenissen. De stoïcijnse weg: focus uitsluitend op wat in jouw controle is. Loslaten van wat buiten jouw controle ligt is de bron van vrijheid, ongeacht omstandigheden.",
    abstractExample: "Epictetus was een slaaf — en beargumenteerde dat hij volledige innerlijke vrijheid had. Zijn lichaam kon geketend worden, zijn oordelen niet. De dichotomie van controle is een gedachte-experiment dat uitnodigt tot een radicale verschuiving van aandacht: van externe uitkomsten naar interne houding.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Marcus Aurelius (Meditationes): de Romein-keizer die stoïcisme beoefende te midden van oorlog, pestilentie en keizerlijkheid. Zijn dagboek toont de praktische toepassing: steeds terugkeren naar wat je kunt beïnvloeden — jouw oordelen, je houding, je acties — en loslaten wat je niet kunt." },
      { domain: "daily", icon: "🏠", text: "Vergadering waarbij jij bekritiseerd wordt: stoïcijnse reactie — je kunt de kritiek niet controleren (niet up to you), maar wel jouw reactie erop, de kwaliteit van jouw verweer en wat je ervan leert (up to you). Verschuiven van aandacht van uitkomst naar reactie is de stoïcijnse vrijheid." },
      { domain: "science", icon: "🔬", text: "Cognitieve gedragstherapie (CBT) heeft sterke parallels met stoïcisme: de scheiding tussen activerende gebeurtenis, overtuiging en respons (ABC-model van Ellis). Net als stoïcisme: het zijn niet de gebeurtenissen die ons van streek maken, maar onze oordelen erover (Epictetus)." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["existentiele-keuze", "vrije-wil-experiment", "absurdisme"],
    exercises: [{
      type: "multiple-choice",
      question: "Epictetus' dichotomie van controle stelt dat innerlijke vrijheid komt van:",
      options: ["Het verwerven van meer externe controle", "Focussen uitsluitend op wat in jouw controle is en loslaten van wat dat niet is", "Het accepteren van alle omstandigheden passief", "Rijkdom en politieke macht"],
      correct: 1,
      feedback: "Juist! Stoïcijnse vrijheid: je bent vrij zodra je ophoudt te verlangen naar wat buiten jouw controle ligt. Jouw oordelen, reacties en houding zijn altijd in jouw controle — dit is voldoende voor een volledig vrij leven, ongeacht externe omstandigheden."
    }],
    creativePrompt: "Maak een lijst van drie dingen die je momenteel stress geven. Welke zijn echt 'up to you' en welke niet? Wat verandert er als je de tweede categorie loslaat?",
    aiHelperPrompts: [
      "Is de stoïcijnse dichotomie van controle praktisch toepasbaar in de moderne wereld?",
      "Hoe verhoudt stoïcisme zich tot CBT en moderne psychologie?",
      "Kan stoïcisme leiden tot passiviteit tegenover onrechtvaardigheid?"
    ]
  },
  {
    id: "boeddhistische-anatta",
    title: "Anattā: Het Niet-zelf (Boeddhisme)",
    difficulty: 3,
    emoji: "☸️",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Persoonlijke Ontwikkeling",
    tags: ["Boeddhisme", "Identiteit", "Bewustzijn", "Gedachte-experiment"],
    definition: "De Boeddhistische leer van anattā (niet-zelf): er is geen permanent, onveranderlijk zelf. Wat we 'ik' noemen is een bundel van vijf aggregaten (skandha's): vorm, sensatie, perceptie, mentale formaties, bewustzijn — voortdurend in flux. Geen van deze is het zelf. Gehechtheid aan het illusoire zelf is de bron van lijden. De bevrijding (nirvāṇa) is het loslaten van die gehechtheid.",
    abstractExample: "Anattā als gedachte-experiment: ga op zoek naar jouw zelf. Kijk naar jouw lichaam — dat ben jij niet (het verandert). Naar jouw gedachten — die komen en gaan. Naar jouw gevoelens — tijdelijk. Naar jouw waarden — ze zijn ook gevormd en veranderlijk. Wat blijft er over? De Boeddhist antwoordt: niets permanent. Maar dat is bevrijdend, niet tragisch.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Hume's bundeltheorie parallelt anattā perfect — op geen van beiden was directe invloed. Parfit (Reasons and Persons) erkent de gelijkenis expliciet: zijn conclusie (identiteit is niet wat telt, psychologische continuïteit is gradueel) convergeert met Boeddhistische inzichten." },
      { domain: "science", icon: "🔬", text: "Neurowetenschapper Sam Harris: meditatieve inzichten over het niet-zelf zijn direct verificeerbaar door eerste-persoonspraktijk. Het gevoel van een eenheidszelf is een constructie van de hersenen — een nuttig model, maar geen fundamentele realiteit. Mindfulness legt dit bloot." },
      { domain: "daily", icon: "🏠", text: "Ego-gekwetst zijn: 'je hebt mij beledigd' — maar wie is dat 'mij'? Anattā suggereert dat veel psychologisch lijden voortkomt uit overidentificatie met een illusoir stabiel zelf dat beschermd moet worden. Loslaten van het ego-zelf vermindert reactieve emoties." }
    ],
    prerequisites: ["bundel-theorie-hume"],
    unlocks: [],
    relatedPrinciples: ["bundel-theorie-hume", "existentiele-keuze", "absurdisme"],
    exercises: [{
      type: "multiple-choice",
      question: "De Boeddhistische anattā leer stelt dat lijden primair voortkomt uit:",
      options: ["Pijnlijke ervaringen", "Gehechtheid aan een illusoir permanent zelf", "Slechte karma", "Materiële schaarste"],
      correct: 1,
      feedback: "Juist! Boeddha's tweede edele waarheid: de oorzaak van lijden is begeerte en gehechtheid (tanhā) — met name gehechtheid aan de illusie van een permanent zelf. Als er geen permanent zelf is, lost ook de strijd om het te beschermen en te bevredigen op. Dit is de weg naar bevrijding."
    }],
    creativePrompt: "Probeer een week lang 'ik'-taal te vermijden: in plaats van 'ik voel me boos', 'er is boosheid'. Wat verandert er in jouw beleving van emoties en problemen?",
    aiHelperPrompts: [
      "Hoe verhoudt anattā zich tot psychologische therapie en zelfacceptatie?",
      "Maakt het loslaten van het zelf het leven minder betekenisvol?",
      "Hoe verbindt de Boeddhistische anattā met Hume's bundeltheorie en Parfit's persoonlijke identiteit?"
    ]
  },
  {
    id: "epifanische-waarheid",
    title: "Het Epifanische Moment: Plotselinge Inzicht",
    difficulty: 1,
    emoji: "💡",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Persoonlijke Ontwikkeling",
    tags: ["Inzicht", "Kennis", "Ervaring", "Gedachte-experiment"],
    definition: "Archimedes in het bad: 'Eureka!' Een plotseling inzicht na lange inspanning. Poincaré stapte in een rijtuig en besefte plots een wiskundig probleem — na weken niet aan gedacht te hebben. Kekule droomde over de rondedans van slangen en begreep de ringstructuur van benzeen. Hoe werkt plotseling inzicht? En wat zegt het over de verhouding tussen bewuste redenering en onbewuste verwerking?",
    abstractExample: "Vier-fasen model van creativiteit (Wallas, 1926): (1) Voorbereiding — doelbewuste studie; (2) Incubatie — onderbewuste verwerking; (3) Illuminatie — het 'aha-moment'; (4) Verificatie — testen van het inzicht. De incubatiefase is cruciaal: weg van het probleem laat onbewuste hersenverwerkingen doorgaan.",
    examples: [
      { domain: "science", icon: "🔬", text: "Neurowetenschapper Mark Jung-Beeman: vlak voor een inzichtsmoment vertoont de rechter anterieure temporale kwab een plotselinge gamma-golf (30-40 Hz) — samenvalling van distante informatieknopen. Inzicht heeft een identificeerbare neurale signatuur. Het 'gevoel' van inzicht correleert met werkelijke probleemoplossing." },
      { domain: "philosophy", icon: "🤔", text: "Plato's anamnesis: kennis is herinneringswaken van pre-existente kennis — inzicht is herinnering, niet nieuw. Kant: de intuïtie (Anschauung) geeft directe inzichten die de rede later systematiseert. In beide gevallen is er een niet-discursief moment van kennis dat niet te reduceren is tot stap-voor-stap redenering." },
      { domain: "daily", icon: "🏠", text: "Creatieve block en incubatie: als je te hard probeert een oplossing te vinden, blokkeert je. 'Sleep on it' is niet metafoor maar neurobiologische strategie. Dagdromen, wandelen en niet-intentionele activiteiten laten het brein associatief verbinden — de incubatiefase in actie." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["mary-kamer", "gettier-probleem"],
    exercises: [{
      type: "multiple-choice",
      question: "De incubatiefase in het creatieve inzichtsproces is waardevol omdat:",
      options: ["Je dan meer werkt", "Onbewuste hersenverwerkingen verbindingen kunnen maken zonder bewuste blokkade", "Rust productiviteit verhoogt", "Dromen problemen oplossen"],
      correct: 1,
      feedback: "Juist! Tijdens incubatie verwerkt het brein onbewust de informatie, maakt associatieve verbindingen en test combinaties zonder de bewuste 'convergente denk'-blokkade. Dit verklaart waarom afstand nemen van een probleem soms de oplossing brengt die hours of hard thinking niet bracht."
    }],
    creativePrompt: "Denk aan jouw meest waardevolle inzicht. Hoe en wanneer kwam het? Kun je terugkijkend de vier fasen herkennen?",
    aiHelperPrompts: [
      "Hoe kun je de incubatiefase bewust cultiveren in jouw werk of leerproces?",
      "Wat is het verschil tussen analytisch redeneren en intuïtief inzicht?",
      "Hoe verhoudt het epifanische moment zich tot gewone stapsgewijze probleemoplossing?"
    ]
  },
  {
    id: "confrontatie-sterfelijkheid",
    title: "De Confrontatie met Sterfelijkheid",
    difficulty: 2,
    emoji: "⌛",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Persoonlijke Ontwikkeling",
    tags: ["Sterfelijkheid", "Zingeving", "Keuze", "Gedachte-experiment"],
    definition: "Stel dat je morgen sterft. Welke keuzes zou je anders maken? Welke gesprekken zou je voeren? Wat zou je loslaten? Steve Jobs: 'Remembering that I'll be dead soon is the most important tool I've ever encountered to help me make the big choices in life.' Confrontatie met eindigheid als instrument voor levensprioritering. Maar leidt dit tot authentiekere keuzes of angst-driven impulsiviteit?",
    abstractExample: "Terror Management Theory (Solomon, Greenberg, Pyszczynski): bewustzijn van sterfelijkheid (mortality salience) activeert zelfbeschermende psychologische mechanismen — cultureel wereldbeeld versterken, zelfesteem-boost zoeken, out-groups derogeren. Heidegger: hetzelfde bewustzijn kan de basis zijn voor authentiek bestaan. Beide reacties zijn mogelijk — welke kiest jij?",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Montaigne (16e eeuw): 'om te filosoferen is te leren sterven.' Bewuste oefening in sterven — Stoïcijnse meditatio mortis — bevrijdt ons van kleinheid en angst. Wie de dood omarmt, kan volledig leven. Dit is geen depressiviteit maar bevrijding door acceptatie." },
      { domain: "daily", icon: "🏠", text: "Palliatieve zorg-observaties: mensen nabij de dood rapporteren spijt niet over wat ze deden maar over wat ze niet deden — gesprekken niet gevoerd, relaties niet hersteld, reizen niet gemaakt. De sterfelijkheids-confrontatie als list om nu te handelen wat je zou willen." },
      { domain: "science", icon: "🔬", text: "Bronnie Ware's onderzoek (The Top Five Regrets of the Dying): (1) leefde naar andermans verwachtingen; (2) werkte te hard; (3) moed te weinig gehad om gevoelens te uiten; (4) contact niet onderhouden; (5) meer geluk niet toegestaan. De sterfelijkheids-confrontatie als omgekeerde levensplanning." }
    ],
    prerequisites: ["dood-en-onsterfelijkheid", "existentiele-keuze"],
    unlocks: [],
    relatedPrinciples: ["dood-en-onsterfelijkheid", "existentiele-keuze", "authenticiteit"],
    exercises: [{
      type: "multiple-choice",
      question: "Terror Management Theory beschrijft welke reactie op sterfelijkheidsbewustzijn?",
      options: ["Authentiek en vrij leven", "Angst-gedreven versterking van het eigen culturele wereldbeeld en derogatie van anderen", "Zorgeloos leven", "Spirituele verdieping"],
      correct: 1,
      feedback: "Juist! TMT: wanneer sterfelijkheid bewust wordt gemaakt (mortality salience), reageren mensen defensief — ze versterken hun culturele overtuigingen, zoeken zelfesteem en derogeren out-groups. Dit is de angst-reactie. Heidegger beoogde de andere reactie: authentiek bestaan via bewuste confrontatie."
    }],
    creativePrompt: "Schrijf een brief aan jezelf van over 20 jaar. Wat zou je jezelf nu aanraden? Wat zou toekomstig jij het meest betreuren als je het nu niet doet?",
    aiHelperPrompts: [
      "Hoe balanceer je sterfelijkheidsbewustzijn zonder in angst te vervallen?",
      "Welke praktische levenskeuzes zou je maken als je wist dat je over een jaar sterft?",
      "Hoe helpt de dagelijkse meditatie over sterfelijkheid bij prioriteitstelling?"
    ]
  },
  {
    id: "compassie-experiment",
    title: "Het Compassie-experiment",
    difficulty: 1,
    emoji: "💙",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Persoonlijke Ontwikkeling",
    tags: ["Compassie", "Empathie", "Relaties", "Gedachte-experiment"],
    definition: "Stel dat elke persoon die jij ontmoet een geheim draagt — iets pijnlijks dat jij niet kunt zien. Hoe zou jij anders met die persoon omgaan? Ian McLaren (1897): 'Wees vriendelijk, want iedereen die je ontmoet heeft een moeilijke strijd te leveren.' Dit gedachte-experiment nodigt uit tot radicale verdachtzaamheid van onzichtbaar lijden — de basis van compassie.",
    abstractExample: "Empathie vs. compassie: empathie is het voelen van andermans pijn (soms uitputtend). Compassie is de motivatie om te helpen, ook zonder de pijn te voelen. Neuroloog Tania Singer: empathische resonantie activeert pijnnetwerken, compassie-training activeert zorg- en beloningsnetwerken. Compassie is een vaardigheid, niet alleen een gevoel.",
    examples: [
      { domain: "science", icon: "🔬", text: "Tania Singer (Max Planck Institute): compassie-meditatie verlaagt empathische vermoeidheid (burnout bij hulpverleners) terwijl het prosociaal gedrag verhoogt. Compassie als getrainde vaardigheid is psychologisch gezonder dan empathie als reactief gevoel. Metta-meditatie (liefdevolle vriendelijkheid) verhoogt sociale connectiviteit." },
      { domain: "philosophy", icon: "🤔", text: "Schopenhauer: compassie (Mitleid) is de bron van alle morele motivatie — het directe inzicht in de eenheid van alle wil. Wat je de ander aandoet, doe je jezelf aan. Compassie als ontologisch inzicht in de illusie van scheiding." },
      { domain: "daily", icon: "🏠", text: "Conflict-de-escalatie: als je je realiseert dat de persoon die je kwaad maakt waarschijnlijk ook strijd levert die jij niet ziet — angst, stress, verdriet — verandert jouw reactie. Compassief reageren in conflicten is een vaardigheid die de kwaliteit van alle relaties verbetert." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["sluier-onwetendheid", "existentiele-keuze", "absurdisme"],
    exercises: [{
      type: "multiple-choice",
      question: "Wat is het verschil tussen empathie en compassie volgens neurowetenschapper Tania Singer?",
      options: ["Er is geen verschil", "Empathie is het voelen van andermans pijn; compassie is de motivatie te helpen zonder dezelfde pijn te voelen", "Compassie is zwakker dan empathie", "Empathie is only for professionals"],
      correct: 1,
      feedback: "Juist! Singer's onderzoek: empathie activeert dezelfde pijnnetwerken als de ander ervaart (kan leiden tot empathiemoeheid). Compassie activeert zorg- en beloningsnetwerken — het is de wens dat anderen vrij zijn van lijden. Compassie is mentaal duurzamer en leidt tot meer prosociaal gedrag."
    }],
    creativePrompt: "Kies één persoon waarmee je moeite hebt. Stel je voor wat hun geheime strijd is. Hoe verandert dat jouw houding tegenover hen?",
    aiHelperPrompts: [
      "Hoe train je compassie als vaardigheid in het dagelijks leven?",
      "Waarom leidt meer empathie soms tot minder hulpgedrag?",
      "Hoe verschilt Schopenhauer's filosofische compassie van psychologische compassie-training?"
    ]
  },
  {
    id: "spiegelneuron-empathie",
    title: "Spiegelneuronen en Empathie",
    difficulty: 2,
    emoji: "🪞",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Neurowetenschappen", "Empathie", "Implicatie", "Gedachte-experiment"],
    definition: "Giacomo Rizzolatti ontdekte spiegelneuronen: neuronen die zowel vuren wanneer een aap een handeling uitvoert als wanneer hij dezelfde handeling bij een ander observeert. Bij mensen bestaan functioneel vergelijkbare systemen. Dit leidt tot het idee dat ons begrip van anderen via simulatie werkt — we 'simuleren' andermans acties intern. Impliceert dit dat empathie een biologische basis heeft, en ethiek biologisch gestoeld is?",
    abstractExample: "Twee posities: (1) Spiegelneuronen als basis van empathie, sociaal begrip en moraal — we voelen wat anderen voelen via directe neurale simulatie; (2) Critici: spiegelneuronen zijn overhyped, de gelijkenis met menselijk sociaal begrip is te extrapolatief, sociale cognitie is meer constructief dan direct-simulatief.",
    examples: [
      { domain: "science", icon: "🔬", text: "V.S. Ramachandran noemde spiegelneuronen 'neuronen die de beschaving ontwikkelden'. Maar kritiek (Gregory Hickock, The Myth of Mirror Neurons, 2014): het bewijs voor directe simulatie-basis van empathie is zwak. Menselijk sociaal begrip is complexer dan directe motor-simulatie." },
      { domain: "philosophy", icon: "🤔", text: "Als empathie een biologische basis heeft die gedeeld wordt door apen, ondermijnt dit dan ethiek als rationele overweging? Of bevestigt het Schopenhauer's intuïtie dat compassie basaal is en niet rationeel geconstrueerd? Biologische basis ≠ moreel naturalisme (naturalistic fallacy)." },
      { domain: "daily", icon: "🏠", text: "Jeuken bij het kijken naar iemand die sich krabt, huiveren bij het zien van iemand die koud is, lachen aansteken — allemaal tekenen van functionele spiegeling. Onze ingebedde, automatische sociale synchronisatie beïnvloedt hoe we anderen begrijpen en met hen omgaan." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["compassie-experiment", "filosofische-zombie", "mary-kamer"],
    exercises: [{
      type: "multiple-choice",
      question: "Wat is de kern van de wetenschappelijke kritiek op de 'spiegelneuronenhypothese' als basis van empathie?",
      options: ["Spiegelneuronen bestaan niet", "De extrapolatie van motor-simulatie naar complex sociaal begrip is te simplistisch", "Empathie is aangeleerd, niet biologisch", "Mensen hebben minder spiegelneuronen dan apen"],
      correct: 1,
      feedback: "Juist! Critici zoals Hickock: spiegelneuronen zijn motor-systemen die acties coderen — de sprong naar het verklaren van complex sociaal begrip, taalverwerving en empathie is te groot. Menselijk sociaal begrip is constructiever en contextgevoeliger dan directe motor-simulatie suggereert."
    }],
    creativePrompt: "Denk aan een moment waarop jij automatisch meevoelde met iemand — jouw hart sloeg mee, jij huiverde bij hun pijn. Wat zegt dit over de biologische basis van empathie?",
    aiHelperPrompts: [
      "Hoe beïnvloedt het bewijs (of tegenbewijs) voor spiegelneuronen onze theorie van empathie?",
      "Is empathie aangeboren of aangeleerd, en maakt dat verschil voor morele verantwoordelijkheid?",
      "Hoe verbindt de spiegelneuronhypothese met de evolutionaire basis van moraliteit?"
    ]
  }
];
