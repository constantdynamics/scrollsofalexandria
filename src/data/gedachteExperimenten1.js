// Gedachte-experimenten – Batch 1: Ethische Dilemma's (10 experimenten)

export const gedachteExperimenten1 = [
  {
    id: "trolleyprobleem",
    title: "Het Trolleyprobleem",
    difficulty: 2,
    emoji: "🚋",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Ethisch Redeneren",
    tags: ["Ethiek", "Utilitarisme", "Deontologie", "Gedachte-experiment"],
    definition: "Een op hol geslagen tram raast op vijf vastgebonden mensen af. Jij staat bij een wisselspoor en kunt een hendel omzetten — dan rijdt de tram een zijspoor in en doodt één persoon. Doe je het? Het trolleyprobleem legt de spanning bloot tussen het redden van de meeste levens (utilitarisme) en het verbod om iemand actief te doden (deontologie).",
    abstractExample: "Morele keuze: (A) niets doen → 5 doden, jij bent passief. (B) hendel omzetten → 1 dood, jij bent actief oorzaak. Utilitaristen kiezen B; Kantianen twijfelen omdat je iemand als middel gebruikt. De meeste mensen kiezen intuïtief B, maar kunnen de rechtvaardiging moeilijk verwoorden.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Filosoof Philippa Foot formuleerde dit in 1967 om de grens tussen doen en laten te onderzoeken. Judith Jarvis Thomson verfijnde het met de 'dikke man' variant om te tonen dat niet alle gevallen hetzelfde aanvoelen." },
      { domain: "business", icon: "💼", text: "Medische triageprofessionals staan dagelijks voor trolleyproblemen: beperkte IC-bedden verdelen, organen toewijzen, schaarse middelen inzetten. Protocollen proberen willekeur te vervangen door rechtvaardigingskaders." },
      { domain: "daily", icon: "🏠", text: "Moet een zelfrijdende auto bij een onvermijdelijk ongeluk de inzittende of voetgangers offeren? Autofabrikanten moeten dit expliciet programmeren — een politiek-ethische keuze verpakt als software." }
    ],
    prerequisites: [],
    unlocks: ["dikke-man-brug", "doctrine-dubbeleffect"],
    relatedPrinciples: ["dikke-man-brug", "doctrine-dubbeleffect", "utilitarisme-bentham"],
    exercises: [{
      type: "multiple-choice",
      question: "Het trolleyprobleem toont primair de spanning tussen welke twee ethische theorieën?",
      options: ["Deugdethiek vs. relativisme", "Utilitarisme vs. deontologie", "Contractualisme vs. nihilisme", "Emotivisme vs. naturalisme"],
      correct: 1,
      feedback: "Juist! Utilitarisme wil het totale welzijn maximaliseren (5 vs. 1), terwijl deontologie stelt dat sommige daden — zoals iemand actief doden — intrinsiek fout zijn, ongeacht de uitkomst."
    }],
    creativePrompt: "Bedenk een modern trolleyprobleem uit jouw dagelijks leven of werk. Wie of wat staat er op het spel, en hoe zou jij kiezen?",
    aiHelperPrompts: [
      "Zou jij de hendel omzetten? Wat zegt dat over jouw morele intuïtie?",
      "Hoe verschilt actief iemand doden van passief iemand laten sterven in jouw ogen?",
      "Zou je anders kiezen als de ene persoon een familielid was?"
    ]
  },
  {
    id: "dikke-man-brug",
    title: "De Dikke Man op de Brug",
    difficulty: 3,
    emoji: "🌉",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Ethisch Redeneren",
    tags: ["Ethiek", "Utilitarisme", "Deontologie", "Gedachte-experiment"],
    definition: "Dezelfde tram raast op vijf mensen af. Nu sta je op een brug naast een dikke man — als je hem van de brug duwt, stopt zijn lichaam de tram en sterven de vijf mensen niet. Duwen? De meeste mensen zeggen 'nee', ook al is de rekenkunde identiek aan het trolleyprobleem. Dit onthult dat we een verschil voelen tussen iemand als middel gebruiken versus als bijkomstig slachtoffer.",
    abstractExample: "Structureel identiek aan het trolleyprobleem: 1 vs. 5. Maar psychologisch fundamenteel anders: je gebruikt iemands lichaam fysiek als middel. Kant's categorisch imperatief verbiedt dit expliciet: behandel mensen nooit alleen als middel maar altijd ook als doel op zichzelf.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Thomson toonde aan dat hoewel de uitkomsten gelijk zijn, de meeste mensen dit geval anders beoordelen. Dit suggereert dat morele intuïties niet puur consequentialistisch zijn — we reageren op structuur en nabijheid, niet alleen op getallen." },
      { domain: "science", icon: "🔬", text: "Neuroimagingstudies (Greene, 2001) tonen dat het brein bij de 'dikke man' casus emotionele hersengebieden (amygdala) sterker activeert dan bij de hendel-versie. Morele oordelen zijn deels emotionele reacties, geen pure logica." },
      { domain: "daily", icon: "🏠", text: "Een arts die een gezonde patiënt doodt om vijf anderen te redden via orgaantransplantatie voelt moreel verkeerd aan — hoewel de rekensom identiek is aan triage. Het verschil ligt in intentie en middel, niet in uitkomst." }
    ],
    prerequisites: ["trolleyprobleem"],
    unlocks: ["doctrine-dubbeleffect"],
    relatedPrinciples: ["trolleyprobleem", "doctrine-dubbeleffect"],
    exercises: [{
      type: "multiple-choice",
      question: "Waarom oordelen de meeste mensen dat de dikke man duwen moreel erger is dan de hendel omzetten, hoewel de uitkomst identiek is?",
      options: ["Omdat meer mensen sterven", "Omdat je iemand als instrument gebruikt", "Omdat de tram gevaarlijker is", "Omdat het illegaal is"],
      correct: 1,
      feedback: "Correct! De morele intuïtie richt zich op het gebruiken van een persoon als middel (instrument) — iets wat Kant categorisch verbood. De hendel omzetten veroorzaakt de dood als bijkomstig effect; de man duwen gebruikt zijn lichaam doelbewust als remmiddel."
    }],
    creativePrompt: "Kun je een situatie bedenken waarbij je iemand 'als middel' gebruikt maar het toch moreel acceptabel voelt? Wat is er anders in die situatie?",
    aiHelperPrompts: [
      "Voelt het voor jou anders om iemand te duwen dan een hendel om te zetten? Waarom?",
      "Kant zei: behandel mensen nooit alleen als middel. Geldt dat ook in noodsituaties?",
      "Zou een arts die het beste voor vijf patiënten wil een gezonde patiënt mogen offeren?"
    ]
  },
  {
    id: "ervaringsmachine",
    title: "De Ervaringsmachine (Nozick)",
    difficulty: 2,
    emoji: "🧠",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["Ethiek", "Hedonisme", "Welzijn", "Gedachte-experiment"],
    definition: "Stel je voor: een machine kan je elke gewenste ervaring geven — vriendschap, liefde, succes, geluk — terwijl je lichaam in een tank drijft. Je weet niet dat het nep is. Zou je er voor altijd in stappen? Robert Nozick gebruikte dit om aan te tonen dat mensen méér willen dan goede ervaringen: ze willen dat dingen echt zijn.",
    abstractExample: "Als hedonisme klopt (welzijn = maximale positieve ervaringen), zou je in de machine moeten stappen. Maar de meeste mensen weigeren. Dit bewijst dat welzijn méér omvat dan subjectieve ervaringen: relaties, prestaties en werkelijkheid tellen ook — zelfs als je ze niet 'voelt'.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Nozick (1974) ontwikkelde dit als weerlegging van hedonistisch utilitarisme. Als geluk = prettige gevoelens, dan is de machine perfect. Maar we weigeren — bewijs dat we ook 'echt leven' waarderen, niet alleen de gevoelens van een goed leven." },
      { domain: "daily", icon: "🏠", text: "Social media biedt een 'light versie' van de ervaringsmachine: likes, complimenten en aandacht zonder echte verbinding. Veel mensen ervaren na intensief gebruik een leegte — de ervaringen zijn echt, maar iets essentiëels ontbreekt." },
      { domain: "business", icon: "💼", text: "Virtuele realiteit in therapie en training geeft échte ervaringen die leerwaarde hebben. Maar niemand stelt voor om het volledige leven digitaal te maken — mensen willen levensloopbaan, niet gesimuleerd leven." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["trolleyprobleem", "utilitarisme-bentham"],
    exercises: [{
      type: "multiple-choice",
      question: "Nozick's ervaringsmachine weerlegt welke ethische theorie?",
      options: ["Deontologie", "Deugdethiek", "Hedonistisch utilitarisme", "Contractualisme"],
      correct: 2,
      feedback: "Juist! Hedonistisch utilitarisme stelt dat welzijn = maximale positieve ervaringen. Als dat klopt, is de machine perfect. Maar mensen weigeren hem — bewijs dat we méér willen dan goede gevoelens: echte relaties, echte prestaties, echte werkelijkheid."
    }],
    creativePrompt: "Als je de ervaringsmachine kon instappen voor slechts één jaar — zou je het doen? Wat zou je mislopen en wat zou je winnen?",
    aiHelperPrompts: [
      "Waarom vind jij echte ervaringen belangrijker dan gesimuleerde, als de beleving identiek is?",
      "Welke aspecten van jouw leven zouden verdwijnen in de ervaringsmachine?",
      "Hoe verschilt de ervaringsmachine van een boek lezen of film kijken?"
    ]
  },
  {
    id: "violiste-argument",
    title: "Het Violiste-argument (Thomson)",
    difficulty: 3,
    emoji: "🎻",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Ethisch Redeneren",
    tags: ["Ethiek", "Rechten", "Autonomie", "Gedachte-experiment"],
    definition: "Je wordt wakker verbonden aan een beroemde violist die een zeldzame nierziekte heeft. Artsen hebben jou zonder toestemming aangesloten — jouw nieren reinigen negen maanden lang zijn bloed, daarna is hij gezond. Morgen ontkoppelen betekent zijn dood. Ben je verplicht te blijven? Judith Jarvis Thomson gebruikte dit om te betogen dat zelfs als een foetus een recht op leven heeft, dit niet automatisch lichamelijke dienstbaarheid van de moeder vereist.",
    abstractExample: "Recht op leven (violist) vs. recht op lichaamsautonomie (jij). Thomson betoogt: recht op leven betekent niet het recht om andermans lichaam te gebruiken. Zelfs als leven heilig is, vereist dat niet dat anderen hun lichaam opofferen om dat leven te ondersteunen.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Thomson (1971) schreef dit om te tonen dat zelfs als men accepteert dat foetussen rechten hebben, abortus moreel verdedigbaar kan zijn. De centrale vraag: verplicht het recht op leven anderen tot lichamelijke opoffering?" },
      { domain: "science", icon: "🔬", text: "Orgaandonatie vormt een parallel: je bent wettelijk niet verplicht om nieren te doneren aan een stervende patiënt, ook al red je hem. Positieve morele plicht (helpen) vs. negatieve plicht (niet schaden) is centraal in rechtsethiek." },
      { domain: "daily", icon: "🏠", text: "Het experiment stelt de vraag: als jij de enige persoon bent die iemand kan redden — ben je dan verplicht je lichaam of leven op het spel te zetten? De meeste rechtstelsels zeggen nee: er is geen algemene Good Samaritan-dwang." }
    ],
    prerequisites: ["trolleyprobleem"],
    unlocks: [],
    relatedPrinciples: ["trolleyprobleem", "dikke-man-brug"],
    exercises: [{
      type: "multiple-choice",
      question: "Thomson's violiste-argument demonstreert dat recht op leven:",
      options: ["Absoluut is en alle andere rechten overschrijft", "Niet automatisch het recht geeft andermans lichaam te gebruiken", "Alleen geldt voor volwassenen", "Afhankelijk is van bewustzijn"],
      correct: 1,
      feedback: "Correct! Thomson's kernpunt: zelfs als de violist (of foetus) een recht op leven heeft, geeft dit niet automatisch het recht om andermans lichaam tegen diens wil te gebruiken. Rechten op leven en lichaamsautonomie staan in spanning."
    }],
    creativePrompt: "Wanneer vind jij dat iemands recht op leven lichamelijke hulp van anderen verplicht? Trek zelf een grens.",
    aiHelperPrompts: [
      "Zou jij negen maanden verbonden blijven aan de violist? Wat zou je rechtvaardiging zijn?",
      "Verschilt jouw verantwoordelijkheid als jij bewust hebt ingestemd vs. onbewust aangesloten bent?",
      "Wanneer zijn we verplicht ons lichaam in te zetten voor anderen?"
    ]
  },
  {
    id: "sluier-onwetendheid",
    title: "De Sluier van Onwetendheid (Rawls)",
    difficulty: 2,
    emoji: "😶‍🌫️",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Ethisch Redeneren",
    tags: ["Politieke Filosofie", "Rechtvaardigheid", "Rawls", "Gedachte-experiment"],
    definition: "Stel dat je een rechtvaardige samenleving moet ontwerpen, maar je weet niet welke positie jij daarin zult innemen — rijk of arm, slim of minder slim, gezond of ziek, man of vrouw. Achter deze 'sluier van onwetendheid' zou jij kiezen voor een systeem dat ook de slechtst-gestelden beschermt, omdat je zelf in die positie terecht zou kunnen komen.",
    abstractExample: "John Rawls' gedachte-experiment leidt tot twee rechtvaardigheids-principes: (1) gelijke basisvrijheden voor iedereen; (2) sociale en economische ongelijkheden zijn alleen rechtvaardig als ze de minst begunstigden ten goede komen (het 'differentiepincipe'). De sluier elimineert eigenbelang van het ontwerp.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Rawls (A Theory of Justice, 1971) betoogt dat rationele actoren achter de sluier een egalitaire samenleving zouden kiezen — niet omdat ze altruïstisch zijn, maar omdat ze de risico's van de slechtste positie niet willen nemen." },
      { domain: "business", icon: "💼", text: "Stel dat je een arbeidscontract moest ontwerpen zonder te weten of je werkgever of werknemer wordt. Hoogstwaarschijnlijk zou je eerlijkere lonen, betere bescherming en democratischer beleid kiezen dan wanneer je weet dat je de baas bent." },
      { domain: "daily", icon: "🏠", text: "Denk aan belastingbeleid: als je niet wist of je in de top 1% of onderste 20% zat, welk belastingstelsel zou je dan kiezen? De sluier dwingt je tot structureel nadenken, los van eigenbelang." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["trolleyprobleem", "gevangenendilemma"],
    exercises: [{
      type: "multiple-choice",
      question: "Wat is het doel van Rawls' sluier van onwetendheid?",
      options: ["Beslissingen nemen zonder emoties", "Eigenbelang elimineren bij het ontwerpen van rechtvaardigheid", "Rijken meer laten betalen", "Volledige gelijkheid afdwingen"],
      correct: 1,
      feedback: "Juist! De sluier elimineert eigenbelang: als je niet weet welke positie je krijgt, kies je structuren die ook voor de zwaksten werken. Het is een denkgereedschap om onpartijdigheid te simuleren."
    }],
    creativePrompt: "Ontwerp achter de sluier van onwetendheid een regel voor jouw werkplek, school of wijk. Wat verandert er in jouw redenering?",
    aiHelperPrompts: [
      "Zou jij anders over belasting denken als je niet wist hoe rijk je was?",
      "Welke huidige regels in de samenleving zouden veranderen als iedereen achter de sluier moest beslissen?",
      "Kan de sluier van onwetendheid ook gebruikt worden voor kleine alledaagse beslissingen?"
    ]
  },
  {
    id: "gevangenendilemma",
    title: "Het Gevangenendilemma",
    difficulty: 2,
    emoji: "🔒",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Beslissen",
    tags: ["Speltheorie", "Samenwerking", "Eigenbelang", "Gedachte-experiment"],
    definition: "Twee verdachten worden apart ondervraagd. Als beiden zwijgen: beiden 1 jaar. Als één bekent en de ander zwijgt: bekennende vrij, zwijgende 10 jaar. Als beiden bekennen: beiden 5 jaar. Rationeel gezien is bekennen altijd beter voor het individu — maar leidt collectief tot een slechter resultaat. Dit legt de spanning bloot tussen individuele rationaliteit en collectief belang.",
    abstractExample: "Dominante strategie: bekennen is altijd rationeel, ongeacht wat de ander doet. Maar als beiden rationeel redeneren, komen ze bij (5,5) terecht — slechter dan de coöperatieve uitkomst (1,1). De structuur van het dilemma verklaart waarom rationele individuen suboptimale uitkomsten produceren zonder vertrouwen of communicatie.",
    examples: [
      { domain: "science", icon: "🔬", text: "John Nash (Beautiful Mind) bewees dat elke symmetrisch gemengde strategie in eindige spelletjes een evenwichtspunt heeft — het Nash-evenwicht. In het gevangenendilemma is (bekennen, bekennen) het Nash-evenwicht, ondanks dat het beide spelers slechter af laat." },
      { domain: "business", icon: "💼", text: "Prijsoorlogen tussen supermarkten zijn een gevangenendilemma: als beiden laag geprijsd zijn (bekennen), verdienen beiden minder. Als ze beiden hoog geprijsd zijn (zwijgen), verdienen beiden meer. Maar niemand vertrouwt de concurrent, dus blijven prijzen laag." },
      { domain: "daily", icon: "🏠", text: "Klimaatverandering is een mondiaal gevangenendilemma: elk land heeft belang bij minder CO₂, maar ook bij het goedkope voordeel van eigen uitstoot. Zonder bindende afspraken leidt rationeel nationaal eigenbelang tot collectieve schade." }
    ],
    prerequisites: [],
    unlocks: ["tragedie-van-meent"],
    relatedPrinciples: ["tragedie-van-meent", "sluier-onwetendheid"],
    exercises: [{
      type: "multiple-choice",
      question: "Waarom is het gevangenendilemma een dilemma?",
      options: ["Omdat de straf onduidelijk is", "Omdat individuele rationaliteit leidt tot collectief slechtere uitkomsten", "Omdat samenwerken altijd beter is", "Omdat de gevangenen kunnen communiceren"],
      correct: 1,
      feedback: "Precies! Beide spelers handelen rationeel (bekennen is de dominante strategie), maar het collectieve resultaat (5+5=10 jaar) is slechter dan de coöperatieve uitkomst (1+1=2 jaar). Individualistische rationaliteit faalt hier collectief."
    }],
    creativePrompt: "Bedenk een actueel maatschappelijk probleem dat de structuur heeft van het gevangenendilemma. Hoe zou je het oplossen?",
    aiHelperPrompts: [
      "Wanneer vertrouw jij anderen genoeg om samen te werken, ook al kun je er voordeel uit halen door dat niet te doen?",
      "Hoe verandert het gevangenendilemma als je het herhaaldelijk speelt met dezelfde persoon?",
      "Welke mechanismen in de samenleving zijn ontworpen om gevangenendilemma's op te lossen?"
    ]
  },
  {
    id: "tragedie-van-meent",
    title: "De Tragedie van de Meent",
    difficulty: 2,
    emoji: "🐄",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Ecologie", "Collectieve actie", "Economie", "Gedachte-experiment"],
    definition: "Een gemeenschappelijk weiland (de 'meent') wordt gedeeld door boeren. Elke boer heeft belang om één extra koe te laten grazen — de winst is voor hem alleen, de schade (uitputting van gras) wordt verdeeld. Als allen rationeel handelen, wordt de meent overbegrazen en vernietigd. Garrett Hardin (1968) gebruikte dit om te betogen dat gedeelde hulpbronnen zonder regulering onvermijdelijk uitgeput worden.",
    abstractExample: "Individuele rationaliteit: voeg koe toe → +1 voor jou, -1/n voor allen. Als n groot is, is -1/n verwaarloosbaar. Maar als IEDEREEN zo redeneert, is de schade -n voor allen. Structureel identiek aan het gevangenendilemma, maar met n spelers en een fysieke hulpbron.",
    examples: [
      { domain: "science", icon: "🔬", text: "Elinor Ostrom (Nobelprijs 2009) bewees dat gemeenschappen wél succesvol gemeengoed kunnen beheren — mits er duidelijke regels, monitoring en sancties zijn. Hardin's pessimisme was te zwart-wit: de tragedie is niet onvermijdelijk." },
      { domain: "daily", icon: "🏠", text: "Overvisserij: elke visser heeft belang om zo veel mogelijk vis te vangen. Collectief leidt dit tot leegvissing van de oceaan. Internationale quota proberen de meent-tragedie te voorkomen, maar handhaving is moeilijk." },
      { domain: "business", icon: "💼", text: "Gratis kantoor-snacks verdwijnen sneller dan betaald eten. Gratis parkeerplaatsen bij kantoren raken overvol. Gratis Wi-Fi wordt misbruikt. Gedeelde hulpbronnen zonder eigenaarschap of regulering worden systematisch overbenut." }
    ],
    prerequisites: ["gevangenendilemma"],
    unlocks: [],
    relatedPrinciples: ["gevangenendilemma", "sluier-onwetendheid"],
    exercises: [{
      type: "multiple-choice",
      question: "Welke oplossing WERKT NIET voor de tragedie van de meent, volgens Ostrom?",
      options: ["Duidelijke regels en monitoring", "Privatisering van de hulpbron", "Overheidsbeheer met sancties", "Elke gebruiker zelf laten beslissen hoeveel hij neemt"],
      correct: 3,
      feedback: "Correct! Vrijwillige zelfregulering zonder externe regels, monitoring en sancties faalt — dat is juist de kern van de tragedie. Iedereen heeft een prikkel om méér te nemen dan zijn eerlijk aandeel. Ostrom toonde dat gemeenschappen slagen met expliciete afspraken, niet zonder."
    }],
    creativePrompt: "Bedenk een moderne tragedie van de meent in jouw buurt, sector of land. Welke regels of prikkels zouden hem oplossen?",
    aiHelperPrompts: [
      "Ken jij een voorbeeld waarbij een gedeelde hulpbron wél succesvol werd beheerd? Wat maakte het verschil?",
      "Is privatisering altijd de oplossing voor de tragedie van de meent? Wanneer niet?",
      "Hoe lijkt klimaatverandering op de tragedie van de meent op mondiale schaal?"
    ]
  },
  {
    id: "transplantatiechirurg",
    title: "De Transplantatiechirurg",
    difficulty: 3,
    emoji: "🏥",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Ethisch Redeneren",
    tags: ["Ethiek", "Utilitarisme", "Deontologie", "Gedachte-experiment"],
    definition: "Een chirurg heeft vijf patiënten die sterven zonder organen en één gezonde patiënt in de wachtkamer. De organen van de gezonde patiënt zouden de vijf redden. Mag de chirurg de gezonde patiënt doden? Bijna iedereen zegt nee — hoewel de utilitaristische rekensom identiek is aan het trolleyprobleem. Dit onthult dat we beroep-specifieke morele grenzen hanteren.",
    abstractExample: "5 levens vs. 1 leven: identiek aan het trolleyprobleem. Maar hier gebruikt de chirurg doelbewust een persoon als middel, heeft een vertrouwensrelatie met alle patiënten, en handelt in professionele hoedanigheid. De meeste ethici accepteren dit nooit — het zou het vertrouwen in de geneeskunde vernietigen.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Judith Thomson gebruikte dit als contrast met de trolley: de chirurg-casus laat zien dat we morele intuïties hebben die strenger zijn dan simpel utilistisch rekenen. De positie, relatie en intentie spelen een cruciale rol in morele oordelen." },
      { domain: "science", icon: "🔬", text: "Medische ethiek heeft expliciet 'primum non nocere' (doe eerst geen schade) als kernbeginsel. Artsen mogen patiënten niet doden, ook niet voor een groter goed. Dit is een deontologische grens, geen utilistische afweging." },
      { domain: "business", icon: "💼", text: "Vergelijkbaar: een bankdirecteur mag geen klant beroven om andere klanten te redden, ook al is de som positief. Professionele vertrouwensrelaties scheppen absolute grenzen die utilistisch redeneren overstijgen." }
    ],
    prerequisites: ["trolleyprobleem", "dikke-man-brug"],
    unlocks: [],
    relatedPrinciples: ["trolleyprobleem", "dikke-man-brug", "doctrine-dubbeleffect"],
    exercises: [{
      type: "multiple-choice",
      question: "Waarom is de transplantatiechirurg-casus moreel anders dan het trolleyprobleem, ook al zijn de aantallen gelijk?",
      options: ["Omdat artsen beter opgeleid zijn", "Omdat er een vertrouwensrelatie is en een persoon als middel wordt gebruikt", "Omdat de patiënten zieker zijn", "Omdat het in een ziekenhuis plaatsvindt"],
      correct: 1,
      feedback: "Juist! De morele context verschilt: de chirurg heeft een vertrouwensrelatie, handelt professioneel, en gebruikt iemand doelbewust als middel. Het institutionele vertrouwen in de geneeskunde zou instorten als dit werd toegestaan."
    }],
    creativePrompt: "Bedenk een situatie in jouw beroep of leven waarbij een utilitaristische redenering leidt tot een conclusie die je intuïtief fout vindt. Wat zegt dat over de grenzen van utilistisch redeneren?",
    aiHelperPrompts: [
      "Zijn er situaties waarbij jij een onschuldige zou opofferen voor het grotere goed?",
      "Waarom vertrouwen we artsen meer als we weten dat ze bepaalde grenzen nooit overschrijden?",
      "Hoe verschilt dit van triage in de oorlog, waarbij artsen wél kiezen wie ze redden?"
    ]
  },
  {
    id: "doctrine-dubbeleffect",
    title: "De Doctrine van het Dubbeleffect",
    difficulty: 3,
    emoji: "⚖️",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Ethisch Redeneren",
    tags: ["Ethiek", "Deontologie", "Intentie", "Gedachte-experiment"],
    definition: "Een handeling met twee effecten — één goed, één slecht — is moreel toegestaan als: (1) de handeling zelf niet slecht is, (2) je de goede uitkomst beoogt en de slechte slechts tolereert, (3) de goede uitkomst niet via de slechte wordt bereikt, (4) de goede uitkomst proportioneel zwaarder weegt. Ontwikkeld door Thomas van Aquino, toegepast in medische ethiek en oorlogsrecht.",
    abstractExample: "Een pijnstillerdosis die patiënt comfort geeft maar mogelijk het leven verkort (morfine bij terminale patiënten): moreel toegestaan. Intentie is palliatief, dood is onbedoeld bijeffect. Versus: een bom op een militair doel waarbij burgers sterven — de burgerdood mag niet het middel zijn waarmee het doel bereikt wordt.",
    examples: [
      { domain: "science", icon: "🔬", text: "Palliatieve sedatie: een arts geeft hoge doses morfine aan een stervende patiënt om pijn te verlichten. Als bijeffect overlijdt de patiënt sneller. Doctrine van dubbeleffect staat dit toe: het goede (pijnstilling) is bedoeld, de dood is onbedoeld bijeffect." },
      { domain: "philosophy", icon: "🤔", text: "Aquino's doctrine distinguisheert intentie van voorzien gevolg. Critici (Bennett, 1966) betogen dat het onderscheid 'bedoeld' vs. 'voorzien' kunstmatig is: als je weet dat de dood volgt en toch handelt, is de intentie relevant." },
      { domain: "daily", icon: "🏠", text: "Je vertelt een harde waarheid die de ander kwetst maar hen helpt groeien. Je beoogde uitkomst is hulp; de pijn is onbedoeld bijeffect. Voldoet dit aan de doctrine? Velen vinden van wel — als de pijn niet het mechanisme is waardoor de hulp werkt." }
    ],
    prerequisites: ["trolleyprobleem", "dikke-man-brug"],
    unlocks: [],
    relatedPrinciples: ["trolleyprobleem", "dikke-man-brug", "transplantatiechirurg"],
    exercises: [{
      type: "multiple-choice",
      question: "Wanneer is een handeling met een slecht bijeffect moreel toegestaan volgens de doctrine van het dubbeleffect?",
      options: ["Altijd als het goede gevolg groter is", "Als het slechte gevolg niet het middel is waarmee het goede bereikt wordt", "Als de handeling snel genoeg is", "Als niemand het weet"],
      correct: 1,
      feedback: "Juist! Een cruciale voorwaarde: het goede gevolg mag niet bereikt worden via het slechte. Als het slechte gevolg het mechanisme is (bijv. iemand doden om organen te oogsten), is het verboden. Als het slechte een tolererbaar bijeffect is, kan het zijn toegestaan."
    }],
    creativePrompt: "Bedenk een situatie in jouw leven waarbij je iets doet dat twee effecten heeft — één gewenst, één ongewenst. Past de doctrine van dubbeleffect hier?",
    aiHelperPrompts: [
      "Maakt het voor jou verschil of je een slechte uitkomst bedoeld of onbedoeld veroorzaakt?",
      "Is de doctrine van dubbeleffect een manier om moeilijke ethische keuzes te rationaliseren?",
      "Hoe past de doctrine in moderne medische beslissingen over levenseinde?"
    ]
  },
  {
    id: "lifeboat-ethiek",
    title: "De Lifeboat-ethiek (Hardin)",
    difficulty: 2,
    emoji: "🚣",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Ethisch Redeneren",
    tags: ["Ethiek", "Hulpbronnen", "Migratie", "Gedachte-experiment"],
    definition: "Een reddingsboot heeft capaciteit voor 60 mensen en zit vol. In het water zwemmen 100 mensen. Als je er meer inlaat, zinkt de boot en sterven allen. Wie laat je in? Hardin (1974) gebruikte dit als metafoor voor rijke landen tegenover arme landen: onbeperkte hulp en immigratie leiden tot de 'tragedie van de boot' waarbij allemaal verdrinken.",
    abstractExample: "Distributieve ethiek: moet een beperkte hulpbron tot de noodgrens worden gedeeld? Hardin's neo-Malthusiaanse conclusie: nee — zelfbehoud rechtvaardigt selectiviteit. Critici (Singer) betogen: rijke landen hebben meer dan genoeg en het selectie-argument rechtvaardigt onrecht door luxe te framen als noodzaak.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Peter Singer weerlegde Hardin: rijke landen zijn geen volle reddingsboten maar luxejachten. Utilitarisme vereist hulp zolang jij meer verliest door te helpen dan een ander wint. Dat punt bereiken rijke landen pas bij extreme armoede." },
      { domain: "daily", icon: "🏠", text: "Debat over vluchtelingenopvang: 'We kunnen niet iedereen opnemen' klinkt als reddingsboten-logica. Maar kapaciteits-argumenten hangen af van politieke keuzes over wat 'vol' betekent — niet alleen van fysieke grenzen." },
      { domain: "science", icon: "🔬", text: "Ecologisch draagvlak (carrying capacity) is een reëel begrip: ecosystemen hebben grenzen. Maar Hardin paste dit misleidend toe op sociale systemen die wél schaalbaar zijn via technologie, beleid en herverdeling." }
    ],
    prerequisites: ["tragedie-van-meent"],
    unlocks: [],
    relatedPrinciples: ["tragedie-van-meent", "gevangenendilemma", "sluier-onwetendheid"],
    exercises: [{
      type: "multiple-choice",
      question: "Wat is het belangrijkste bezwaar van Peter Singer tegen Hardin's lifeboat-ethiek?",
      options: ["Rijke landen zijn geen volle boten maar luxejachten met veel ruimte", "Immigratie is altijd goed voor economie", "Reddingsboten zijn groot genoeg", "Hardin rekende verkeerd"],
      correct: 0,
      feedback: "Juist! Singer's kern-kritiek: de analogie klopt niet. Rijke landen zijn niet op de grens van overleving — ze hebben enorme overcapaciteit. 'We kunnen het niet' is een politieke keuze, geen fysieke onmogelijkheid. De reddingsboot-metafoor legitimeert onrecht door luxe te framen als nood."
    }],
    creativePrompt: "Stel je voor dat je moet beslissen wie er in jouw 'reddingsboot' mag. Op welke criteria zou jij beslissen? Kun je die criteria rechtvaardig verdedigen?",
    aiHelperPrompts: [
      "Is er een grens aan de hoeveelheid hulp die rijke landen moreel verplicht zijn te bieden?",
      "Hoe verschilt de lifeboat-metafoor van de werkelijkheid van migratie en vluchtelingen?",
      "Wanneer rechtvaardigt zelfbehoud het weigeren van hulp aan anderen?"
    ]
  }
];
