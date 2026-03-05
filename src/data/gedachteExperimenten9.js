// Gedachte-experimenten – Batch 9: Economie, Speltheorie & Beslissingen (10 experimenten)

export const gedachteExperimenten9 = [
  {
    id: "ultimatumspel",
    title: "Het Ultimatumspel",
    difficulty: 1,
    emoji: "💰",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Beslissen",
    tags: ["Gedragseconomie", "Rechtvaardigheid", "Speltheorie", "Gedachte-experiment"],
    definition: "Speler 1 krijgt €100 en mag een verdeling voorstellen. Speler 2 accepteert of weigert. Bij weigering krijgen beiden niets. Rationeel: elke verdeling > €0 is beter dan niets voor Speler 2, dus hij accepteert altijd. In de praktijk: biedingen onder 30% worden consequent geweigerd. Mensen accepteren liever niets dan een 'oneerlijk' aanbod.",
    abstractExample: "Het ultimatumspel weerlegt het rationele-acteur model in de economie. Mensen zijn bereid kosten te maken om eerlijkheid af te dwingen — ze straffen oneerlijkheid, ook als het hen niets oplevert. Dit illustreert dat menselijk gedrag gedreven wordt door rechtvaardigheidsgevoel, niet slechts eigenbelang.",
    examples: [
      { domain: "science", icon: "🔬", text: "Güth et al. (1982): eerste systematisch ultimatumspel-experiment. Resultaten bevestigd in honderden studies over culturen — inclusief traditionele gemeenschappen (Camerer et al.). Maar variaties bestaan: in gemeenschappen met sterkere marktintegratie zijn acceptatiedrempels anders." },
      { domain: "business", icon: "💼", text: "Loononderhandelingen: werknemers weigeren soms salarisverhogingen die 'te laag' zijn ondanks dat ze meer zijn dan niets. De perceptie van eerlijkheid beïnvloedt acceptatie. Organisaties die als onrechtvaardig worden gezien hebben hogere verlooppercentages, ook als ze marktconform betalen." },
      { domain: "daily", icon: "🏠", text: "Erfenisruzie: als een ouder €100.000 ongelijk verdeelt (€70.000 voor één kind, €30.000 voor de ander), kan het bevoordeelde kind soms zelfs meer frustratie oproepen dan de erfenis waard is — het gevoel van rechtvaardigheid overstijgt het financieel belang." }
    ],
    prerequisites: [],
    unlocks: ["dictatorspel"],
    relatedPrinciples: ["gevangenendilemma", "dictatorspel"],
    exercises: [{
      type: "multiple-choice",
      question: "Het ultimatumspel weerlegt welke economische aanname?",
      options: ["Dat mensen geld waarderen", "Dat mensen altijd rationeel eigenbelang maximaliseren (homo economicus)", "Dat geld verdeeld kan worden", "Dat speltheorie werkt"],
      correct: 1,
      feedback: "Juist! De rationele homo economicus zou elke bieding > €0 accepteren, want meer is beter dan niets. Maar mensen weigeren oneerlijke aanbiedingen — ze maximaleren niet alleen eigen payoff maar ook rechtvaardigheid. Dit toont dat menselijk gedrag complex is en door sociale normen wordt gestuurd."
    }],
    creativePrompt: "Welk minimum aandeel zou jij accepteren in het ultimatumspel? En bij welk aanbod zou jij weigeren, ook al kost het je geld? Wat zegt dat over jouw waarden?",
    aiHelperPrompts: [
      "Wat zegt het ultimatumspel over de grenzen van rationele-keuze theorie?",
      "Hoe varieert het ultimatumspel over culturen?",
      "Welke biologische basis heeft het rechtvaardigheidsgevoel dat het ultimatumspel onthult?"
    ]
  },
  {
    id: "dictatorspel",
    title: "Het Dictatorspel",
    difficulty: 1,
    emoji: "👑",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Beslissen",
    tags: ["Gedragseconomie", "Altruïsme", "Speltheorie", "Gedachte-experiment"],
    definition: "Net als het ultimatumspel, maar Speler 2 heeft geen keuze — hij accepteert altijd. Speler 1 kan elke verdeling kiezen: alles houden of iets geven. Rationeel: hou alles. In de praktijk: de meeste mensen geven 20-30%, sommigen 50%. Waarom geef je weg als je niets hoeft? Dit onthult dat altruïsme, empathie en sociale normen gedrag sturen ook zonder strategische motieven.",
    abstractExample: "Het dictatorspel isoleert altruïstisch gedrag van strategische berekeningen. In het ultimatumspel kan geven strategisch zijn (voorkomen van weigering). In het dictatorspel is er geen strategic motief. Toch geven mensen. Dit bewijst dat altruïsme en sociale normen intrinsiek motiverend zijn, niet alleen instrumenteel.",
    examples: [
      { domain: "science", icon: "🔬", text: "List (2007): als het dictatorspel 'in het veld' wordt gespeeld (reëel geld, minder lab-bewustzijn), daalt de geefbereidheid significant. Anonimiteit en contextveranderingen beïnvloeden altruïsme sterk — sociale normen en observeerbaarheid spelen een grote rol." },
      { domain: "daily", icon: "🏠", text: "Doneren aan goede doelen is het dictatorspel in de praktijk: niemand dwingt je, er is geen strategische beloning — toch doen mensen het. Maar de hoeveelheid varieert sterk op basis van: zichtbaarheid (others watch), identiteitsconnectie en framing van de nood." },
      { domain: "business", icon: "💼", text: "CEO beloningen vs. werknemerslonen: een CEO die zichzelf maximaal beloont terwijl de organisatie overleeft, speelt een dictatorspel ten opzichte van de organisatie. Bestuurders die 'redelijk' verdelen — ook zonder aandeelhoudersdwang — tonen dat altruïsme functioneert ook in boardrooms." }
    ],
    prerequisites: ["ultimatumspel"],
    unlocks: [],
    relatedPrinciples: ["ultimatumspel", "gevangenendilemma"],
    exercises: [{
      type: "multiple-choice",
      question: "Het dictatorspel toont aan dat mensen soms geld weggeven zelfs als:",
      options: ["Ze te veel hebben", "Er geen strategisch motief is en de ander niets kan weigeren", "Ze aardig gevonden willen worden door de onderzoeker", "Ze het geld niet nodig hebben"],
      correct: 1,
      feedback: "Juist! In het dictatorspel is er geen strategic reden om te geven: de ander kan niet weigeren, er is geen reputatie-effect in het experiment. Toch geven mensen. Dit bewijst dat intrinsieke motivatie (empathie, rechtvaardigheidsgevoel, sociale normen) gedrag sturen los van eigenbelang."
    }],
    creativePrompt: "Als je volledig anoniem €1000 mocht verdelen tussen jezelf en een onbekende — hoeveel geef je? En als je €1000 mocht verdelen tussen jezelf en jouw beste vriend?",
    aiHelperPrompts: [
      "Hoe beïnvloedt anonimiteit het altruïstisch gedrag in het dictatorspel?",
      "Is altruïsme in het dictatorspel echt altruïsme of reputatiebeheer?",
      "Hoe helpt het dictatorspel gedragseconomen de homo economicus te herzien?"
    ]
  },
  {
    id: "morele-geluk",
    title: "Moreel Geluk (Nagel & Williams)",
    difficulty: 3,
    emoji: "🍀",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Ethisch Redeneren",
    tags: ["Morele verantwoordelijkheid", "Geluk", "Determinisme", "Gedachte-experiment"],
    definition: "Twee chauffeurs rijden roekeloos. De één botst op een kind dat plotseling de straat overloopt — de ander niet (het kind kruist zijn pad niet). Zijn zij moreel gelijk schuldig? Wij oordelen de eerste strenger — maar de enige moreel relevante factor (roekeloos rijgedrag) was identiek. Het verschil is puur geluk. Moeten we morele oordelen onafhankelijk van geluk zijn?",
    abstractExample: "Thomas Nagel identificeert vier soorten moreel geluk: (1) constitutief (geboortekarakter); (2) omstandigheids (situaties waarmee je wordt geconfronteerd); (3) causaal (determinisme); (4) resultaatgeluk. Bernard Williams: morele geluk is onvermijdelijk — het is een fundamenteel kenmerk van het morele leven, niet een fout.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Nagel's paradox: Kant zei dat alleen de wil moreel relevant is, niet gevolgen (die afhangen van geluk). Maar rechtsstelsels straffen poging tot moord minder dan voltooide moord — ook al is de intentie identiek. We moraliseren op basis van uitkomsten, ondanks dat uitkomsten deels geluk zijn." },
      { domain: "science", icon: "🔬", text: "Neurologie en determinisme: als gedrag volledig bepaald is door neuronen die bepaald zijn door genen en omgeving, is 'moreel geluk' eigenlijk het enige soort morele verantwoordelijkheid dat bestaat. Iedereen die misdaad pleegt, deed dat omdat het 'geluk' van genen en omgeving hem daartoe brachten." },
      { domain: "daily", icon: "🏠", text: "Carrièresucces en moreel geluk: twee identiek gekwalificeerde mensen — één treft de juiste mentor, krijgt de juiste kans; de andere niet. Hun verschillende uitkomsten reflecteren puur situationeel geluk. Maar we schrijven het succes van de eerste toe aan verdienste, het falen van de tweede aan tekortkomingen." }
    ],
    prerequisites: ["laplace-demon"],
    unlocks: [],
    relatedPrinciples: ["laplace-demon", "sluier-onwetendheid", "straf-retributief-rehabiliterend"],
    exercises: [{
      type: "multiple-choice",
      question: "Nagel's kernprobleem met moreel geluk is dat:",
      options: ["Geluk onmeetbaar is", "Morele oordelen consequent beïnvloed worden door factoren buiten de controle van de persoon", "Mensen altijd hun fouten erkennen", "Resultaatgeluk irrelevant is"],
      correct: 1,
      feedback: "Juist! Nagel's paradox: we houden mensen moreel verantwoordelijk op basis van uitkomsten (geluk), terwijl Kantse intuïtie zegt dat alleen intentie en wil moreel relevant zijn. Dit fundamentele conflict is onopgelost — maar het probleem is reëel in recht, ethiek en dagelijks oordeel."
    }],
    creativePrompt: "Denk aan iemand die jij moreel veroordeelt. Welke rol speelde geluk (omstandigheid, situatie, opvoeding) in zijn daad? Verandert dat jouw oordeel?",
    aiHelperPrompts: [
      "Moet straf gebaseerd zijn op intentie of uitkomst?",
      "Is moreel geluk een argument voor meer compassie in morele oordelen?",
      "Hoe verhoudt het concept van moreel geluk zich tot deterministisch denken?"
    ]
  },
  {
    id: "contrafactueel-denken",
    title: "Contrafactueel Denken: Wat Als?",
    difficulty: 1,
    emoji: "🔀",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Causaliteit", "Beslissingen", "Spijt", "Gedachte-experiment"],
    definition: "Causaliteit via contrafactual: 'X veroorzaakte Y' betekent: 'als X niet was gebeurd, was Y ook niet gebeurd.' Hoe anders zou de wereld zijn als Hitler nooit was geboren? Als het Romeinse Rijk niet was gevallen? Als jij die studie had gekozen? Contrafactueel redeneren is fundamenteel voor begrip van causaliteit, spijt, verantwoordelijkheid en geschiedkundig redeneren.",
    abstractExample: "Lewisiaan counterfactuals: een causale relatie is echt als in de 'dichtstbijzijnde mogelijke wereld' zonder X ook Y ontbreekt. Maar: mogelijke werelden zijn complex. Als Hitler nooit was geboren, was misschien een andere ideoloog dezelfde koers ingeslagen. Contrafactuals over historische macrogebeurtenissen zijn waarschijnlijk onbepaald.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "David Lewis (Counterfactuals, 1973): contrafactuele conditionelen analyseer je via 'mogelijke werelden' — de dichtstbijzijnde wereld waar de antecedent (X niet gebeurt) waar is. Dit formaliseert causaliteit. Kritiek: wat is 'dichtstbijzijnde wereld'? De bepaling is vaak vage." },
      { domain: "daily", icon: "🏠", text: "Beslispijt (counterfactual regret): 'als ik die baan had aangenomen...' Onderzoek toont dat pijt sterker is bij actie (dingen die je deed) op korte termijn, maar bij inactiviteit (dingen die je niet deed) op lange termijn. Niet-gerealiseerde mogelijkheden spoken lang." },
      { domain: "science", icon: "🔬", text: "Epidemiologie gebruikt contrafactuals: 'wat waren de sterfteaantallen geweest zonder het vaccin?' is een contrafactuele claim. Causal inference methods (matching, instrumentele variabelen) proberen het contrafactuele scenario empirisch te benaderen." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["laplace-demon", "morele-geluk", "grootvaderparadox"],
    exercises: [{
      type: "multiple-choice",
      question: "Contrafactueel redeneren is essentiëel voor:",
      options: ["Het beschrijven van het verleden", "Het begrijpen van causale relaties ('als A niet was, was B ook niet')", "Statistische berekeningen", "Het voorspellen van de toekomst"],
      correct: 1,
      feedback: "Juist! Causaliteit impliceert contrafactualiteit: 'X veroorzaakte Y' betekent dat in een wereld zonder X, Y ook niet zou zijn geweest. Zonder contrafactueel redeneren kunnen we geen causale claims onderscheiden van correlaties."
    }],
    creativePrompt: "Bedenk de meest impactrijke 'wat als'-vraag in jouw eigen leven. Hoe anders zou jij zijn als dat ene moment anders was verlopen?",
    aiHelperPrompts: [
      "Hoe verschilt een causale claim van een correlatieve claim via contrafactueel redeneren?",
      "Zijn historische contrafactuals zinvol of te speculatief?",
      "Hoe beïnvloedt contrafactueel denken jouw gevoel van spijt en verantwoordelijkheid?"
    ]
  },
  {
    id: "adverse-selectie",
    title: "Akerlof's Citroenenmarkt",
    difficulty: 2,
    emoji: "🍋",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Economie", "Informatie", "Marktfalen", "Gedachte-experiment"],
    definition: "George Akerlof (1970) analyseerde de tweedehands automarkt: verkoper weet of de auto goed (peach) of slecht (lemon) is; koper niet. Kopers betalen gemiddelde prijs. Verkopers van goede auto's worden ontmoedigd (ontvangen te weinig); verkopers van slechte auto's worden aangemoedigd. De markt wordt overheersd door 'lemons' — totdat hij misschien instort. Informatieasymmetrie veroorzaakt marktfalen.",
    abstractExample: "Adverse selectie: bij informatieasymmetrie verdringen slechte kwaliteiten de goede uit de markt. Mechanisme: gemiddelde prijs → goede producten ondergewaardeerd → goede aanbieders verlaten markt → gemiddelde kwaliteit daalt → prijs daalt → meer goede aanbieders verlaten → spiraaleffect. Markt collaps als signalering niet werkt.",
    examples: [
      { domain: "science", icon: "🔬", text: "Akerlof won de Nobelprijs voor Economie in 2001. Het model verklaart tal van institutionele arrangementen: garanties (signalering van kwaliteit), merkregulering, keurmerk-certificering, diploma's — alle zijn mechanismen om informatieasymmetrie te reduceren." },
      { domain: "business", icon: "💼", text: "Arbeidsmarkt: werkgevers kunnen de productiviteit van kandidaten niet direct observeren. Diploma's zijn signalen (Spence, 1973) — niet noodzakelijk productiviteitsbewijzen maar kwaliteitssignalen. Dit verklaart waarom mensen opleidingen volgen die de inhoud later niet gebruiken." },
      { domain: "daily", icon: "🏠", text: "Datingsmarkt: daters weten dingen over zichzelf die de ander niet weet. De eerste date is informatieongelijkheid-overbruggen. Romantische signalering (cadeaus, tijd investeren, kwetsbaarheid tonen) zijn adverse-selectie-oplossingen in de liefde." }
    ],
    prerequisites: ["gevangenendilemma"],
    unlocks: [],
    relatedPrinciples: ["gevangenendilemma", "tragedie-van-meent"],
    exercises: [{
      type: "multiple-choice",
      question: "Adverse selectie in de citroenenmarkt wordt veroorzaakt door:",
      options: ["Te veel concurrentie", "Informatieasymmetrie waarbij de verkoper meer weet dan de koper over kwaliteit", "Overheidsregulering", "Lage prijzen"],
      correct: 1,
      feedback: "Juist! Informatieasymmetrie: verkopers weten of hun auto goed of slecht is, kopers niet. Kopers betalen gemiddeld — wat onvoldoende is voor goede auto's en te veel voor slechte. Resultaat: goede auto's verdwijnen, slechte domineren, markt faalt. Institutionele oplossingen (garanties, keurmerk) zijn antwoorden."
    }],
    creativePrompt: "Bedenk een markt of context in jouw leven met informatieasymmetrie. Wie heeft het informatievoordeel en hoe wordt dat uitgebuit of gecorrigeerd?",
    aiHelperPrompts: [
      "Hoe lossen garanties en certificering het adverse selectie-probleem op?",
      "Zijn diploma's altijd zinvolle signalen of soms pure signalering zonder productiviteitswaarde?",
      "Hoe werkt adverse selectie op de verzekeringsmarkt?"
    ]
  },
  {
    id: "publieke-goederen",
    title: "Het Publieke Goederen Experiment",
    difficulty: 2,
    emoji: "🏙️",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Beslissen",
    tags: ["Samenwerking", "Free rider", "Economie", "Gedachte-experiment"],
    definition: "Vier spelers krijgen elk €10. Ze kunnen een bijdrage doen in een gemeenschappelijk fonds — het fonds wordt verdubbeld en evenredig verdeeld. Als allen €10 geven: €20 elk (200% return). Als één niet geeft en de rest wel: de gratis-meerijder krijgt €10 + €15 = €25. Rationeel: geef niets en free-ride. Maar als allen dat doen: iedereen houdt €10. Sociale dilemma in laboratoriumvorm.",
    abstractExample: "Het publieke goederen experiment reproduceert de structuur van gevangenendilemma voor meerdere spelers. Dominante strategie: niet bijdragen. Maar als allen de dominante strategie volgen, is de uitkomst slechter voor allen. Dit verklaart problemen met publieke goederen (luchtzuivering, nationale verdediging, kennis): iedereen profiteert, niemand wil betalen.",
    examples: [
      { domain: "science", icon: "🔬", text: "Ernst Fehr et al.: in herhaalde publieke goederen-spelen dalen bijdragen richting nul over rondes — maar als deelnemers de free-riders kunnen straffen (via kosten voor henzelf), stijgen bijdragen sterk. Altruïstische straf is een biologisch en cultureel mechanisme voor coöperatie-handhaving." },
      { domain: "daily", icon: "🏠", text: "Open source software: iedereen profiteert, weinigen dragen bij. Wikipedia: iedereen leest, 0.1% schrijft. Belasting: iedereen wil publieke goederen, maar liever anderen laten betalen. Free-rider probleem in alle collectieve actiesituaties." },
      { domain: "business", icon: "💼", text: "Teamwerk in organisaties: gemeenschappelijk succes profiteert allen, maar inzet kost het individu energie. Free-riders in teams profiteren van de bijdragen van anderen. Performance management en transparantie zijn geïnstitutionaliseerde straf-mechanismen voor free-riding." }
    ],
    prerequisites: ["gevangenendilemma"],
    unlocks: [],
    relatedPrinciples: ["gevangenendilemma", "tragedie-van-meent", "ultimatumspel"],
    exercises: [{
      type: "multiple-choice",
      question: "In publieke goederen-experimenten is de dominante rationele strategie:",
      options: ["Altijd maximaal bijdragen", "Niets bijdragen en free-riden op andermans bijdragen", "Precies de helft bijdragen", "Starten met meer bijdragen en afbouwen"],
      correct: 1,
      feedback: "Juist! De rationele strategie: wat anderen ook doen, jij heeft altijd een hoger payoff als je niets bijdraagt (je bespaart je bijdrage en ontvangt toch jouw aandeel van het fonds). Maar als allen zo redeneren, draagt niemand bij en mist iedereen de collectieve winst — het sociale dilemma."
    }],
    creativePrompt: "Bedenk een publiek goed in jouw leven (schoon park, stille straat, veilige buurt) — draag jij bij aan het onderhoud ervan? Hoe zou je meer mensen motiveren bij te dragen?",
    aiHelperPrompts: [
      "Hoe lost altruïstische straf het free-rider probleem op?",
      "Waarom werken open source projecten desondanks, ondanks het free-rider probleem?",
      "Welke institutionele mechanismen houden publieke goederen in stand?"
    ]
  },
  {
    id: "coase-theorema",
    title: "Het Coase Theorema",
    difficulty: 3,
    emoji: "🏭",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Beslissen",
    tags: ["Economie", "Eigendom", "Externaliteiten", "Gedachte-experiment"],
    definition: "Een fabriek vervuilt een rivier die de visser benadelen. Wie moet de kosten dragen? Ronald Coase (1960) betoogde: als transactiekosten nul zijn en eigendomsrechten duidelijk zijn, onderhandelen fabriek en visser altijd naar de meest efficiënte oplossing — ongeacht wie initieel de eigendomsrechten heeft. Het resultaat is efficiënt, maar de verdeling (wie betaalt) hangt af van de eigendomsrechtentoewijzing.",
    abstractExample: "Coase stelling: (1) als eigendomsrechten goed gedefinieerd zijn; (2) transactiekosten nul zijn; dan bereiken partijen spontaan de meest efficiënte uitkomst. In de praktijk: transactiekosten zijn nooit nul. Dit is waarom overheidsregulering (belasting, verboden, caps) nodig is als private onderhandelingen falen.",
    examples: [
      { domain: "science", icon: "🔬", text: "Milieu-economie: emissierechtensystemen (cap-and-trade) zijn Coase-geïnspireerd. Definieer eigendomsrechten op de atmosfeer (emissierechten), laat partijen handelen — het systeem bereikt de efficiënte verdeling tegen laagste kosten. EU ETS is een toepassing." },
      { domain: "philosophy", icon: "🤔", text: "Coase toonde dat de initiële eigendomsrechtenverdeling de verdeling beïnvloedt, maar niet de efficiëntie — met nul transactiekosten. Dit is contra-intuïtief: wie het recht heeft maakt voor de verdeling uit (rechtvaardigheid), maar niet voor de totale welvaart (efficiëntie)." },
      { domain: "business", icon: "💼", text: "Patent-systemen: bedrijven die IP bezitten, kunnen anderen licenties verkopen. Als transactiekosten laag zijn, bereiken partijen efficiënte licentie-overeenkomsten. In praktijk zijn transactiekosten bij patentprocessen enorm — vandaar patent-trolls en inefficiënte uitkomsten." }
    ],
    prerequisites: ["gevangenendilemma", "tragedie-van-meent"],
    unlocks: [],
    relatedPrinciples: ["tragedie-van-meent", "gevangenendilemma"],
    exercises: [{
      type: "multiple-choice",
      question: "Coase theorema stelt dat bij nul transactiekosten:",
      options: ["Overheidsregulering altijd nodig is", "Partijen ongeacht eigendomsrechten spontaan de meest efficiënte uitkomst bereiken", "Vervuiling vanzelf stopt", "De rijkste partij altijd wint"],
      correct: 1,
      feedback: "Juist! Coase: als eigendomsrechten duidelijk zijn en transactiekosten nul, bereiken partijen via onderhandeling altijd de efficiënte uitkomst. De eigendomsrechtentoewijzing bepaalt wie betaalt (verdeling) maar niet of de efficiënte uitkomst bereikt wordt. Transactiekosten zijn waarom overheidsinterventie in de praktijk nodig blijft."
    }],
    creativePrompt: "Bedenk een conflict over externe kosten in jouw omgeving (lawaai, vervuiling, schaarste). Hoe zou Coase's logica de oplossing aanpakken — en waarom lukt dat in de praktijk misschien niet?",
    aiHelperPrompts: [
      "Waarom zijn transactiekosten zo belangrijk voor de toepasselijkheid van het Coase theorema?",
      "Hoe verbindt het Coase theorema met emissiehandel en milieupolitiek?",
      "Wanneer is overheidsregulering efficiënter dan privé-onderhandeling?"
    ]
  },
  {
    id: "keuze-paradox",
    title: "De Keuzeparadox (Schwartz)",
    difficulty: 1,
    emoji: "🍦",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Beslissen",
    tags: ["Gedragseconomie", "Keuze", "Welzijn", "Gedachte-experiment"],
    definition: "Meer keuze is beter — toch? Barry Schwartz (The Paradox of Choice, 2004) toonde aan dat te veel keuzes leiden tot keuzeverlamming, lagere tevredenheid en meer spijt. Supermarkt met 24 jam-smaken: hogere interesse maar minder aankopen dan supermarkt met 6 smaken. Meer keuze verhoogt de opportunity cost van niet-gekozen opties en verlaagt de kans op volledig tevreden zijn.",
    abstractExample: "Iyengar & Lepper (2000): bij 6 jam-opties: 30% kopen; bij 24: 3% kopen. Schwartz's mechanisme: meer opties → hogere opportuniteitskosten (gemist goed van niet-gekozen) → meer spijt → lagere tevredenheid. Maximizers (zoeken altijd het beste) lijden meer dan satisficers (kiezen 'goed genoeg').",
    examples: [
      { domain: "science", icon: "🔬", text: "Shena Iyengar (Choice) en Barry Schwartz (Paradox of Choice) populariseerden dit. Kritiek: latere meta-analyses tonen dat het effect niet altijd repliceert — context, domein en persoonlijkheid modereren sterk. De jam-studie is waarschijnlijk een overgeneralisatie van een complex effect." },
      { domain: "business", icon: "💼", text: "Netflix en keuze-architectuur: te veel opties leidt tot 'decision fatigue'. Netflix beperkt zichtbare opties via recommender-algoritmen. Apple (Steve Jobs) reduceerde de productlijn radicaal. Bewuste keuze-limitering is een strategie: minder keuze, meer aankoop en tevredenheid." },
      { domain: "daily", icon: "🏠", text: "Datingapps: honderden profielen leiden tot chronische vergelijking en toenemende ontevredenheid. 'The paradox of choice' in de liefde: meer opties maken het moeilijker te committent, vergroten spijt en verhogen de lat voor 'goed genoeg'." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["ultimatumspel", "contrafactueel-denken"],
    exercises: [{
      type: "multiple-choice",
      question: "De keuzeparadox verklaart waarom te veel opties leiden tot lagere tevredenheid via:",
      options: ["Te veel informatie", "Hogere opportuniteitskosten en meer spijt bij elke gemaakte keuze", "Cognitieve vermoeidheid van het lezen", "Hogere prijzen bij meer opties"],
      correct: 1,
      feedback: "Juist! Meer opties verhogen de opportuniteitskosten: elk niet-gekozen alternatief is een gemist goed. Na de keuze is het makkelijker te fantaseren over wat de andere opties hadden opgeleverd. Dit verhoogt spijt en verlaagt tevredenheid — ook al is de gekozen optie objectief goed."
    }],
    creativePrompt: "In welk domein van jouw leven ervaart jij te veel keuze als een last? Hoe heb jij die keuze-stress opgelost?",
    aiHelperPrompts: [
      "Hoe gebruik je de keuzeparadox om beter te beslissen?",
      "Is het ethisch om keuzemogelijkheden bewust te beperken (paternalisme)?",
      "Hoe varieert de keuzeparadox tussen culturen met individualisme vs. collectivisme?"
    ]
  },
  {
    id: "wapenwedloop-speltheorie",
    title: "Het Wapenwedloop-experiment",
    difficulty: 2,
    emoji: "💣",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Beslissen",
    tags: ["Speltheorie", "Veiligheid", "Samenwerking", "Gedachte-experiment"],
    definition: "Twee landen moeten kiezen: bewapenen of ontw apenen. Als beiden bewapenen: hoge kosten, geen veiligheidsvoordeel. Als één bewapent en de ander niet: de bewapende wint strategisch voordeel. Als beiden ontwapenen: laagste kosten, veiligst collectief resultaat. De structuur is identiek aan het gevangenendilemma — met nucleaire gevolgen.",
    abstractExample: "Dominant strategie: bewapen (want als de ander bewapent ben je kwetsbaar; als de ander niet bewapent heb je strategisch voordeel). Maar als beiden de dominante strategie volgen, zijn ze beiden slechter af dan bij wederzijdse ontwapening. Dit is de logica achter de Koude Oorlog wapenrace — en actuele nucleaire proliferatie.",
    examples: [
      { domain: "science", icon: "🔬", text: "Thomas Schelling (Nobel Economie, 2005): hij analyseerde de speltheorie van nucleaire afschrikking. Het Mutual Assured Destruction (MAD) concept is een evenwicht: als beiden weten dat aanval totale vernietiging brengt, wordt aanval irrationeel. Instabiel evenwicht — maar het hield 70 jaar stand." },
      { domain: "philosophy", icon: "🤔", text: "Kant's eeuwige vrede: internationale wet en federatie van vrije staten als structurele oplossing voor het wapenwedloop-dilemma. Internationale instituties (VN, NAVO, wapenbeheersverdag en) zijn institutionele antwoorden op het gevangenendilemma van oorlog." },
      { domain: "daily", icon: "🏠", text: "Lokale versies: buurtruzie-escalatie, rechtszaken die beiden uitputten, bedrijven die in een prijsoorlog iedereen schaden. De wapenwedloop-structuur (gevangenendilemma) is universeel aanwezig in competitieve situaties waarbij escalatie niemand helpt." }
    ],
    prerequisites: ["gevangenendilemma"],
    unlocks: [],
    relatedPrinciples: ["gevangenendilemma", "tragedie-van-meent", "publieke-goederen"],
    exercises: [{
      type: "multiple-choice",
      question: "Mutual Assured Destruction (MAD) is een stabiel evenwicht in de speltheorie omdat:",
      options: ["Alle landen vrede willen", "Aanval irrationeel is als beide partijen weten dat het totale vernietiging voor beide betekent", "VN het voorkomt", "Kernwapens niet werken"],
      correct: 1,
      feedback: "Juist! MAD is een Nash-evenwicht: gegeven dat de ander kan vergelden met totale vernietiging, is aanval irrationeel. Beide partijen zijn af van aanvallen — niet vanwege vertrouwen of moraal, maar vanwege wederzijds zeker verlies. Een stabiel maar gevaarlijk evenwicht."
    }],
    creativePrompt: "Bedenk een alledaagse wapenwedloop in jouw omgeving (bedrijfscompetitie, status-concurrentie, sociale media-engagement). Wat zou wederzijdse 'ontwapening' er uitzien?",
    aiHelperPrompts: [
      "Hoe verschilt MAD van conventionele afschrikking in de speltheorie?",
      "Welke internationale instituties zijn ontworpen om wapenwedlopen te voorkomen?",
      "Is ontwapening mogelijk zonder internationaal vertrouwen of handhaving?"
    ]
  },
  {
    id: "verwachte-waarde-paradox",
    title: "De St. Petersburg Paradox",
    difficulty: 3,
    emoji: "🎰",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Beslissen",
    tags: ["Kansrekening", "Beslissen", "Risico", "Gedachte-experiment"],
    definition: "Een munt wordt herhaaldelijk gegooid totdat het eerste keer 'munt' verschijnt. Als munt op de 1e worp: €2; op de 2e: €4; op de 3e: €8; enzovoort (2^n). De verwachte waarde is oneindig. Hoeveel zou jij betalen om mee te spelen? De meeste mensen zeggen €10-€30 — ver beneden de oneindige verwachte waarde. Waarom?",
    abstractExample: "Daniel Bernoulli (1738): marginale nuttigheid van geld daalt — elke extra euro is minder waard naarmate je rijker bent. Verwachte nuttigheidsmaximalisering lost dit op: de verwachte utiliteit is eindig ook al is de verwachte geldswaarde oneindig. Dit is de basis van moderne beslissingstheorie (von Neumann-Morgenstern).",
    examples: [
      { domain: "science", icon: "🔬", text: "Kahneman & Tversky (Prospect Theory, 1979): mensen weigen verliezen zwaarder dan winsten van gelijke omvang (verliesaversie). Ze onderwegen kleine kansen en overwegen grote kansen. Dit verklaart veel afwijkingen van rationele verwachte nuttigheidsmaximalisering — inclusief de St. Petersburg paradox deels." },
      { domain: "philosophy", icon: "🤔", text: "Karl Menger (1934): elke utiliteitsoplossing stuit op een 'superpetersburg paradox' als uitbetalingen sneller groeien dan nuttigheidsdalingen. Er is geen universele oplossing — de paradox onthult fundamentele grenzen van verwachte nuttigheidstheorie." },
      { domain: "business", icon: "💼", text: "Risicokapitaal-investeringen: de verwachte waarde van een portfolio dat veel failures en één unicorn bevat kan enorm hoog zijn. Maar de meeste startups falen — het is een St. Petersburg structuur. Rationele investeringsbeslissingen vereisen nuttigheidsdenken, niet slechts verwachte geldopbrengst." }
    ],
    prerequisites: ["pascal-gok"],
    unlocks: [],
    relatedPrinciples: ["pascal-gok", "voorspellingsparadox"],
    exercises: [{
      type: "multiple-choice",
      question: "Bernoulli's oplossing voor de St. Petersburg paradox is:",
      options: ["De verwachte waarde verkeerd berekend", "Dat marginale nuttigheid van geld daalt, zodat verwachte utiliteit eindig is ondanks oneindige geldwaarde", "Dat het spel nooit gespeeld kan worden", "Dat oneindig geld niets waard is"],
      correct: 1,
      feedback: "Juist! Bernoulli: elke extra euro is minder waard naarmate je rijker bent (afnemende marginale nuttigheid). Hoewel de verwachte geldswaarde oneindig is, is de verwachte utiliteit eindig. Dit verklaart waarom mensen slechts eindig bedragen betalen voor het spel."
    }],
    creativePrompt: "Hoeveel zou jij betalen voor de St. Petersburg paradox? En wat zegt dat over jouw risico-houding en nuttigheidsperceptie?",
    aiHelperPrompts: [
      "Waarom daalt marginale nuttigheid van geld voor de meeste mensen?",
      "Hoe verbindt de St. Petersburg paradox met risico-aversie in beslissingstheorie?",
      "Zijn er situaties waarbij iemand bereid zou zijn de oneindige verwachte waarde te betalen?"
    ]
  }
];
