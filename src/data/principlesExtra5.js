// Extra principles – batch 5 (12 principes: Systeemdenken & Wetenschapsfilosofie)

export const extraPrinciples5 = [
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
  }
];
