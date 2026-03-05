// Gedachte-experimenten – Batch 6: Politieke Filosofie & Samenleving (10 experimenten)

export const gedachteExperimenten6 = [
  {
    id: "sociale-contract",
    title: "Het Sociaal Contract",
    difficulty: 2,
    emoji: "🤝",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Ethisch Redeneren",
    tags: ["Politieke Filosofie", "Legitimiteit", "Staatsrecht", "Gedachte-experiment"],
    definition: "Stel dat mensen ooit in een 'staatsnatuur' leefden zonder overheid. Om uit die toestand te ontsnappen, sloten ze een 'sociaal contract': ze gaven een deel van hun vrijheid op in ruil voor bescherming en orde. Maar heeft dit contract ook gelding voor mensen die er nooit mee hebben ingestemd? Het gedachte-experiment rechtvaardigt staatsgezag — maar toont ook zijn limieten.",
    abstractExample: "Hobbes: staatsnatuur is 'oorlog van allen tegen allen', leven is 'kort, brutaal en eenzaam'. Contract is rationeel — elk verlies van vrijheid wint meer aan veiligheid. Locke: staatsnatuur is vrij maar onzeker; contract beschermt rechten. Rousseau: staatsnatuur is goed, beschaving corrupt; het ideale contract herstelt vrijheid via volonté générale.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Hume bekritiseerde het contract: niemand heeft het ooit getekend. Rawls moderniseerde het via de sluier van onwetendheid — een hypothetisch contract dat rationele actoren zonder kennis van hun positie zouden sluiten. Het contract is een rechtvaardigingsfictie, geen historisch feit." },
      { domain: "daily", icon: "🏠", text: "Belasting betalen is het meest tastbare sociaal contract: je geeft geld in ruil voor publieke goederen (wegen, veiligheid, onderwijs). Belastingontduiking is een 'free rider' probleem: profiteren van het contract zonder bij te dragen." },
      { domain: "business", icon: "💼", text: "Arbeidscontracten zijn moderne versies van het sociaal contract: vrijheid ingeleverd (tijd, autonomie) in ruil voor beloning (loon, zekerheid). Een eerlijk contract vereist informatie, alternatieven en onderhandelingsmacht — anders is het geen contract maar dwang." }
    ],
    prerequisites: [],
    unlocks: ["sluier-onwetendheid"],
    relatedPrinciples: ["sluier-onwetendheid", "staatsnatuur"],
    exercises: [{
      type: "multiple-choice",
      question: "Welk fundamenteel probleem heeft het sociaal contract als rechtvaardigingsbasis voor staatsgezag?",
      options: ["Dat Hobbes het verkeerd beschreef", "Dat niemand het ooit daadwerkelijk heeft getekend of expliciet ingestemd", "Dat het te liberaal is", "Dat het alleen voor rijke landen werkt"],
      correct: 1,
      feedback: "Juist! Hume's kritiek: als legitimiteit van de staat berust op een historisch contract, maar niemand het ooit expliciet heeft ondertekend — is het dan bindend? Latere theoretici (Rawls, Scanlon) zoeken naar hypothetische of procedurele rechtvaardiging in plaats van een feitelijk contract."
    }],
    creativePrompt: "Als je jouw eigen sociaal contract met de samenleving zou schrijven — welke rechten geef je op en welke waarborgen krijg je terug? Wat is eerlijk?",
    aiHelperPrompts: [
      "Hoe verschilt Hobbes' sociaal contract van Locke's versie?",
      "Is stilzwijgende instemming (door in het land te wonen) voldoende voor contractuele binding?",
      "Kan een sociaal contract mensen die er niet mee instemden legitimaal binden?"
    ]
  },
  {
    id: "staatsnatuur",
    title: "De Staatsnatuur (Hobbes vs. Locke)",
    difficulty: 2,
    emoji: "🌿",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Ethisch Redeneren",
    tags: ["Politieke Filosofie", "Mens", "Natuur", "Gedachte-experiment"],
    definition: "Hoe zou het leven zijn zonder overheid, wetten of sociale instituties? Hobbes beschreef het als oorlogstoestand ('nasty, brutish, short'). Locke als een staat van vrede maar onzekerheid. Rousseau als een idyllisch bestaan dat door beschaving is bedorven. Dit gedachte-experiment bepaalt fundamenteel welke mate van staatsmacht gerechtvaardigd is.",
    abstractExample: "Hobbes' pessimisme → absolutistische staat gerechtvaardigd. Locke's optimisme → beperkte staat gerechtvaardigd (rechten zijn pre-politiek). Rousseau's idyllisme → radicale democratie en gelijkheid. De empirische vraag — hoe leven mensen zonder staat? — wordt beantwoord door antropologie, maar de filosofische vraag gaat over rechtvaardiging, niet feiten.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "David Hume: de staatsnatuur is een fictie — mensen zijn altijd al in gemeenschappen geweest. Wetten en normen zijn geleidelijk gegroeid, niet opeens ingesteld. De contracttheorie veronderstelt een oorspronkelijke vrijheid die nooit heeft bestaan." },
      { domain: "science", icon: "🔬", text: "Antropoloog Marshall Sahlins ('The Original Affluent Society'): jager-verzamelaarsgemeenschappen werkten slechts 4 uur per dag voor voedsel en hadden veel vrije tijd. Hobbes' idee van 'kort en brutaal leven' is historisch onjuist voor vroege mensengemeenschappen." },
      { domain: "daily", icon: "🏠", text: "Mislukte staten (failed states) bieden een empirische blik op de staatsnatuur: zonder effectieve overheid verschijnen milities, lokale machthebbers en willekeurig geweld. Dit bevestigt gedeeltelijk Hobbes — maar ook dat mensen spontaan lokale ordeproblemen oplossen." }
    ],
    prerequisites: ["sociale-contract"],
    unlocks: [],
    relatedPrinciples: ["sociale-contract", "sluier-onwetendheid"],
    exercises: [{
      type: "multiple-choice",
      question: "Rousseau's staatsnatuur-concept verschilt van Hobbes' omdat Rousseau gelooft dat:",
      options: ["Mensen van nature oorlogszuchtig zijn", "De staatsnatuur idyllisch was en beschaving mensen bederft", "Staten noodzakelijk kwaad zijn", "Eignedom een natuurlijk recht is"],
      correct: 1,
      feedback: "Juist! Rousseau: de 'nobele wilde' is vrij en goed; beschaving en privé-eigendom creëren ongelijkheid en corruptie. Het sociale contract moet de oorspronkelijke vrijheid herstellen via de 'volonté générale' — de algemene wil van de gemeenschap."
    }],
    creativePrompt: "Stel je voor dat alle wetten en instituten morgen verdwijnen. Wat zou er als eerste instorten? Wat zou blijven? Wat zegt dit over de functies van de staat?",
    aiHelperPrompts: [
      "Is de mens van nature goed of slecht, of is dit een zinloze vraag?",
      "Welk empirisch bewijs ondersteunen of weerleggen Hobbes' beeld van de staatsnatuur?",
      "Welke staatsfuncties zijn echt noodzakelijk en welke niet?"
    ]
  },
  {
    id: "utilitarisme-bentham",
    title: "Bentham's Felicific Calculus",
    difficulty: 2,
    emoji: "🧮",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Ethisch Redeneren",
    tags: ["Utilitarisme", "Ethiek", "Geluk", "Gedachte-experiment"],
    definition: "Jeremy Bentham stelde voor dat we morele beslissingen kunnen kwantificeren: bereken de totale hoeveelheid plezier minus pijn voor alle betrokkenen (felicific calculus). De moreel juiste handeling maximaliseert de som van welzijn. Stel: moet jij één persoon offeren om tien te redden? Utilistisch: ja, als de pijnreductie groot genoeg is.",
    abstractExample: "Bentham's calculus meet: intensiteit, duur, zekerheid, nabijheid, fecunditeit (leidt het tot meer plezier?) en puurheid van genoegens. John Stuart Mill verfijnde dit: hogere genoegens (intellectueel) zijn kwalitatief meer waard dan lagere (sensueel). 'Beter ontevreden Socrates dan een tevreden dwaas.'",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Robert Nozick's 'utility monster': stel een wezen dat enorm meer plezier beleeft van hulpbronnen dan mensen. Utilitarisme zou impliceren dat alle hulpbronnen naar het monster gaan. Dit toont de contra-intuïtieve implicaties van puur utilistisch redeneren." },
      { domain: "business", icon: "💼", text: "Kosten-batenanalyses zijn gestileerde versies van Bentham's calculus: bereken baten en kosten voor allen betrokkenen, kies de optie met het grootste netto voordeel. Maar niet alle baten en kosten zijn kwantificeerbaar — mensenlevens, pijn, waardigheid weerstaan getallering." },
      { domain: "daily", icon: "🏠", text: "Publiek beleid: moet de overheid één levensreddende behandeling voor 1 persoon financieren (€1M) of basiszorg voor 1000 mensen (€1000/pp)? Utilitarisme kiest het laatste. Maar is het moreel acceptabel een individu te 'offeren' voor statistische levens?" }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["trolleyprobleem", "sluier-onwetendheid", "gevangenendilemma"],
    exercises: [{
      type: "multiple-choice",
      question: "Nozick's 'utility monster' is een kritiek op utilitarisme omdat het toont dat:",
      options: ["Utilitarisme te weinig aandacht geeft aan genoegens", "Puur utilistisch redeneren kan tot diep onrechtvaardige verdeling leiden", "Monsters niet bestaan", "Utility niet meetbaar is"],
      correct: 1,
      feedback: "Juist! Als een wezen enorm meer genot uit hulpbronnen haalt, verplicht puur utilitarisme ons alles te geven aan dat wezen — alle anderen worden verarmd voor het maximale nut. Dit toont dat utilitarisme individuen kan opofferen voor het collectief nut, wat contra-intuïtief onrechtvaardig voelt."
    }],
    creativePrompt: "Noem een situatie waarbij een utilistische redenering leidt tot een conclusie die jij intuitief onrechtvaardig vindt. Wat zou jij als aanvullend moreel principe toevoegen?",
    aiHelperPrompts: [
      "Hoe kun je pijn en plezier meten en vergelijken over mensen heen?",
      "Wat is het verschil tussen Bentham's en Mill's versie van utilitarisme?",
      "Wanneer faalt puur utilistisch redeneren als leidraad voor beleid?"
    ]
  },
  {
    id: "meerderheidstirannie",
    title: "De Meerderheidstirannie",
    difficulty: 2,
    emoji: "👥",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Ethisch Redeneren",
    tags: ["Democratie", "Mensenrechten", "Minderheden", "Gedachte-experiment"],
    definition: "90% van de bevolking stemt voor een wet die een kleine minderheid ernstig benadeelt. Is dat democratisch legitiem? Tocqueville en Mill waarschuwden voor 'meerderheidstirannie': democratische procedures kunnen minderheidsrechten schenden. Mensenrechten zijn bedoeld als grenzen aan wat een meerderheid mag besluiten — zelfs als ze het democratisch doet.",
    abstractExample: "Het dilemma: democratie vereist meerderheidsregel (legitimiteit), maar onbegrensde meerderheidsregel kan fundamentele rechten schenden. Oplossing: constitutionele democratie — sommige rechten zijn buiten democratische besluitvorming geplaatst (vrijheid van meningsuiting, eigendomsrechten, gelijkheid). Maar wie bepaalt welke rechten beschermd zijn?",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "John Stuart Mill (On Liberty, 1859): individuen moeten beschermd worden tegen 'tyrannie van de heersende mening' — sociale druk en sociale normen zijn soms gevaarlijker dan staatsdwang. De 'harm principle': overheid mag alleen handelen ter bescherming van anderen, niet om sociale normen af te dwingen." },
      { domain: "daily", icon: "🏠", text: "Discriminatie via democratisch gekozen wetten: apartheid, Jim Crow-wetten, verbod op homohuwelijk waren allemaal democratisch besloten. Mensenrechtenkaders (VN, EHRM) proberen dit te voorkomen door bepaalde rechten buiten democratische besluitvorming te plaatsen." },
      { domain: "business", icon: "💼", text: "Aandeelhoudersvergaderingen: een 51% meerderheid kan beslissingen nemen die 49% schaden. Beschermingsconstructies (preferente aandelen, super-voting rights) zijn bedoeld om minderheden te beschermen — maar creëren ook anti-democratische concentraties van macht." }
    ],
    prerequisites: ["sociale-contract"],
    unlocks: [],
    relatedPrinciples: ["sociale-contract", "sluier-onwetendheid", "utilitarisme-bentham"],
    exercises: [{
      type: "multiple-choice",
      question: "Mensenrechten als grens aan democratische besluitvorming zijn nodig omdat:",
      options: ["Democratie altijd slecht is", "Meerderheden wettig kunnen besluiten om minderheidsrechten ernstig te schenden", "Minderheden altijd gelijk hebben", "Verkiezingen onbetrouwbaar zijn"],
      correct: 1,
      feedback: "Juist! Democratisch gekozen meerderheden hebben in de geschiedenis fundamentele rechten van minderheden geschonden. Constitutionele grondrechten, internationale mensenrechtenverdragen en onafhankelijke rechterlijke macht zijn ontworpen om dit te voorkomen — ze beperken wat meerderheden mogen beslissen."
    }],
    creativePrompt: "Welke rechten vind jij zo fundamenteel dat ze buiten democratische besluitvorming moeten staan? En wie heeft het gezag om die lijst te bepalen?",
    aiHelperPrompts: [
      "Hoe balanceer je democratische legitimiteit met bescherming van minderheidsrechten?",
      "Is een democratie die minderheden ernstig benadeelt nog een echte democratie?",
      "Welke rol speelt de rechterlijke macht in het beschermen van minderheden?"
    ]
  },
  {
    id: "open-grenzen",
    title: "Het Open Grenzen Experiment",
    difficulty: 3,
    emoji: "🌍",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Ethisch Redeneren",
    tags: ["Migratie", "Rechten", "Wereldburgerschap", "Gedachte-experiment"],
    definition: "Stel dat nationale grenzen morgen verdwijnen en iedereen vrij is om te wonen waar hij wil. Economen voorspellen enorme welvaartsstijging (Clemens: 50-150% BBP-toename). Maar: welke gevolgen heeft het voor cultuur, politieke cohesie, welvaartsstaat en lonen van laagbetaalden? Het experiment stelt de vraag: heeft iemand het recht om op een specifieke plek geboren te worden, en anderen uit te sluiten?",
    abstractExample: "Rawls achter de sluier: als je niet weet in welk land je geboren wordt, zou je open grenzen kiezen. Joseph Carens (1987): geboorterecht in een rijk land is het equivalent van adel — moreel even willekeurig als geboorterecht in een feodaal systeem. Maar: staten zijn meer dan marktplaatsen — ze zijn gemeenschappen met zelfbeschikkingsrecht.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Michael Walzer (Spheres of Justice, 1983): gemeenschappen hebben het recht om hun leden te kiezen — identiteit en cultuur vereisen enige closure. Maar onbeperkte uitsluiting is onrechtvaardig. De spanning: gemeenschap vs. universele mensenrechten." },
      { domain: "science", icon: "🔬", text: "Econoom Bryan Caplan: immigrantiebeperkingen zijn de meest schadelijke marktverstoringen ter wereld. Ze beperken de arbeidsmobiliteit van miljarden mensen op basis van geboorteplaats — net zo willekeurig als rassendiscriminatie. Economisch argument voor open grenzen." },
      { domain: "daily", icon: "🏠", text: "Vrij verkeer binnen de EU is een deelexperiment met open grenzen. Het heeft welvaart gebracht maar ook spanningen over culturele integratie en loondruk in specifieke sectoren. Een proefgeval dat zowel voor- als tegenstanders argumenten biedt." }
    ],
    prerequisites: ["sociale-contract", "lifeboat-ethiek"],
    unlocks: [],
    relatedPrinciples: ["lifeboat-ethiek", "sluier-onwetendheid", "meerderheidstirannie"],
    exercises: [{
      type: "multiple-choice",
      question: "Joseph Carens vergelijkt geboorterecht in een rijk land met:",
      options: ["Een democratisch recht", "Feodale adelsrechten — even willekeurig en moreel onverdedigbaar", "Een aangeboren talent", "Een contractueel verworven recht"],
      correct: 1,
      feedback: "Juist! Carens: je geboren worden in Canada of Nederland is net zo willekeurig als in een adelijke familie geboren worden in de middeleeuwen. Beiden geven onverdiende privileges. Als adelsrechten onrechtvaardig zijn, zijn geboorterechten op welvaart via nationale grenzen dat ook."
    }],
    creativePrompt: "Als je niet wist in welk land je geboren zou worden, welke migratieregels zou jij dan ontwerpen? Hoe verandert jouw standpunt als je achter de sluier staat?",
    aiHelperPrompts: [
      "Hebben mensen een moreel recht op vrije migratie?",
      "Wat zijn de economische gevolgen van open grenzen voor zowel arm als rijk?",
      "Hoe verhoudt nationaal zelfbeschikkingsrecht zich tot universele mensenrechten?"
    ]
  },
  {
    id: "twee-vrijheden",
    title: "Negatieve en Positieve Vrijheid (Berlin)",
    difficulty: 2,
    emoji: "🗽",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Ethisch Redeneren",
    tags: ["Vrijheid", "Politieke Filosofie", "Rechten", "Gedachte-experiment"],
    definition: "Isaiah Berlin (1958) onderscheidde twee vrijheidsconcepten. Negatieve vrijheid: vrijheid VAN interventie — jij bent vrij als niemand jou dwingt. Positieve vrijheid: vrijheid TOT zelfontplooiing — jij bent vrij als je in staat bent je doelen te bereiken. Een arme persoon heeft negatieve vrijheid (niemand verbiedt hem rijke wijn te kopen) maar geen positieve (hij kan het niet betalen). Welk concept dient als basis voor beleid?",
    abstractExample: "Negatieve vrijheid → liberalisme (minimale staat, geen dwang). Positieve vrijheid → welvaartsstaat (staat helpt mensen hun capaciteiten te realiseren). De spanning: als positieve vrijheid de vereisten stelt, rechtvaardigt dit belasting (dwang) om armoedebestrijding te financieren — wat negatieve vrijheid beperkt.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Berlin waarschuwde: positieve vrijheid kan gevaarlijk zijn als overheden beweren te weten wat de 'echte' vrijheid van mensen is — wat leidt tot paternalisme en totalitarisme ('we bevrijden u van uw foute keuzes'). Negatieve vrijheid is veiliger maar onvoldoende voor sociale rechtvaardigheid." },
      { domain: "daily", icon: "🏠", text: "Onderwijs is een positief vrijheidsrecht: je hebt niet alleen het recht om te leren (negatief — niemand verbiedt het), maar de capaciteit (positief — scholen zijn betaalbaar/gratis). Gezondheidszorg: negatief vrijheidsrecht = niemand belet je een dokter te zien; positief = je kunt het betalen." },
      { domain: "business", icon: "💼", text: "Marktliberalen (Hayek, Friedman) prioriteren negatieve vrijheid: minimale staatsinterventie. Sociaaldemocraten prioriteren positieve vrijheid: herverdeling vergroot de effectieve vrijheid voor allen. Dit debat structureert de westerse politiek tot op de dag van vandaag." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["sociale-contract", "sluier-onwetendheid", "utilitarisme-bentham"],
    exercises: [{
      type: "multiple-choice",
      question: "Een dakloze heeft juridisch het recht een hotel te huren. Welk vrijheidstype mist hij?",
      options: ["Negatieve vrijheid (er is een wet die hem verbiedt)", "Positieve vrijheid (hij mist de capaciteit om het te betalen)", "Politieke vrijheid", "Economische rechten"],
      correct: 1,
      feedback: "Juist! Negatieve vrijheid is aanwezig: niemand verbiedt de dakloze juridisch in het hotel te verblijven. Maar hij mist positieve vrijheid: de werkelijke capaciteit, middelen en mogelijkheid om zijn formele rechten te realiseren. Dit onderscheid is cruciaal voor welzijnsbeleid."
    }],
    creativePrompt: "Denk aan een recht dat jij formeel hebt maar praktisch niet kunt uitoefenen. Wat zou er nodig zijn om jouw positieve vrijheid te vergroten?",
    aiHelperPrompts: [
      "Hoe verschilt negatieve van positieve vrijheid in de praktijk van beleid?",
      "Welk vrijheidstype is fundamenteler — negatief of positief? Kun je er één kiezen?",
      "Hoe kan positieve vrijheid door overheden misbruikt worden als rechtvaardiging voor dwang?"
    ]
  },
  {
    id: "democratische-paradox",
    title: "Arrow's Onmogelijkheidstheorema",
    difficulty: 3,
    emoji: "🗳️",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Beslissen",
    tags: ["Democratie", "Stemmen", "Speltheorie", "Gedachte-experiment"],
    definition: "Kenneth Arrow (1951) bewees: geen enkel stemssysteem kan tegelijk voldoen aan vijf redelijke eisen (universaliteit, unanimiteit, onafhankelijkheid van irrelevante alternatieven, niet-dictatuur, transitieve collectieve voorkeur). Elke democratische beslissingsmethode heeft fundamentele gebreken. Er is geen perfecte manier om individuele voorkeuren samen te voegen tot een collectieve beslissing.",
    abstractExample: "Condorcet's paradox illustreert het: als A > B > C voor persoon 1, B > C > A voor persoon 2, en C > A > B voor persoon 3 — dan heeft de meerderheid A > B, B > C, maar ook C > A. Groepsvoorkeur is niet transitief, ook al zijn individuele voorkeuren dat wel. Stemuitkomsten hangen af van de volgorde van stemmen.",
    examples: [
      { domain: "science", icon: "🔬", text: "Arrow won de Nobelprijs voor Economie in 1972. Het theorema toont dat collectieve besluitvorming fundamenteel paradoxen bevat. Alternatieve stemmethoden (ranked choice, Condorcet, Borda) vermijden sommige gebreken maar schenden altijd andere axioma's." },
      { domain: "philosophy", icon: "🤔", text: "Implicatie voor democratie: geen stemssysteem is 'objectief' of 'eerlijk' in absolute zin. Elke institutionele keuze bevoordeelt bepaalde voorkeursstructuren. Democratie is legitimate niet omdat het perfect is, maar omdat alternatieven slechter zijn." },
      { domain: "business", icon: "💼", text: "Boardroom-beslissingen via stemmen hebben dezelfde problemen: de volgorde van agendapunten beïnvloedt de uitkomst (agenda manipulation). Wie de agenda controleert, controleert indirect de uitkomst — ook zonder meerderheid." }
    ],
    prerequisites: ["gevangenendilemma"],
    unlocks: [],
    relatedPrinciples: ["gevangenendilemma", "sluier-onwetendheid", "meerderheidstirannie"],
    exercises: [{
      type: "multiple-choice",
      question: "Arrow's theorema bewijst dat:",
      options: ["Democratie onmogelijk is", "Geen enkel stemssysteem alle redelijke eisen tegelijk kan vervullen", "Meerderheidsregel altijd eerlijk is", "Dictatorschappen beter beslissen"],
      correct: 1,
      feedback: "Juist! Arrow's onmogelijkheidstheorema: er bestaat geen perfect stemsysteem dat universaliteit, unanimiteit, onafhankelijkheid van irrelevante alternatieven, niet-dictatuur en transitiviteit tegelijk garandeert. Elke stemregel heeft fundamentele beperkingen."
    }],
    creativePrompt: "Beschrijf een vergadering of stemming in jouw leven waarbij de agenda-volgorde of stemmethode de uitkomst bepaalde. Hoe zou een andere methode geleid hebben tot een ander resultaat?",
    aiHelperPrompts: [
      "Welk stemsysteem minimaliseert de gebreken die Arrow beschrijft?",
      "Hoe beïnvloedt agendamanipulatie democratische beslissingen?",
      "Maakt Arrow's theorema democratie minder legitiem of alleen minder perfect?"
    ]
  },
  {
    id: "straf-retributief-rehabiliterend",
    title: "Straf: Vergelding of Rehabilitatie?",
    difficulty: 2,
    emoji: "⚖️",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Ethisch Redeneren",
    tags: ["Straf", "Rechtvaardigheid", "Misdaad", "Gedachte-experiment"],
    definition: "Stel dat iemand een ernstig misdrijf heeft gepleegd, maar met zekerheid kan worden aangetoond dat hij nooit meer zal recidiveren en volledig is 'gerehabiliteerd'. Moet hij nog steeds gestraft worden? Als ja: straf dient vergelding (het is verdiend ongeacht gevolgen). Als nee: straf dient uitsluitend preventie (een zinloze straf is onrecht). Welke theorie van straf is gerechtvaardigd?",
    abstractExample: "Retributivisme (Kant): straf is moreel verdiend ongeacht gevolgen. Consequentialisme: straf is alleen gerechtvaardigd als het toekomstig leed vermindert (afschrikking, preventie, rehabilitatie). Expressieve theorie: straf drukt maatschappelijke afkeuring uit. Restorative justice: straf herstelt schade aan slachtoffer en gemeenschap.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Kant: 'Al zal de burgerlijke maatschappij morgen ontbonden worden, de laatste moordenaar in de gevangenis moet nog worden geëxecuteerd.' Vergelding is niet contingent op gevolgen — het is een kwestie van morele schuld en rechtvaardig loon. Consequentialisten vinden dit barbaars." },
      { domain: "science", icon: "🔬", text: "Neurowetenschapper Robert Sapolsky: als gedrag volledig bepaald is door hersenen, biologie en ervaringen — is morele schuld dan zinvol? Zijn argument: vergelding als concept is onhoudbaar in een deterministisch universum. Rehabilitatie is de enige zinvolle respons." },
      { domain: "daily", icon: "🏠", text: "Restorative justice-programma's laten daders en slachtoffers samenkomen. Onderzoek toont hogere slachtoffertevredenheid en lagere recidive dan traditionele straf. Maar het stelt de vraag: is rechtvaardigheid soms meer dan het welzijn van individuen?" }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["trolleyprobleem", "utilitarisme-bentham", "laplace-demon"],
    exercises: [{
      type: "multiple-choice",
      question: "Een perfect gerehabiliteerde misdadiger moet according to Kant nog steeds gestraft worden omdat:",
      options: ["Straf anderen afschrikt", "Straf moreel verdiend is, ongeacht de gevolgen", "De gemeenschap genoegdoening verdient", "Recidive-risico altijd aanwezig blijft"],
      correct: 1,
      feedback: "Juist! Kant's retributivisme: straf is niet instrumenteel (voor gevolgen) maar intrinsiek gerechtvaardigd — de misdadiger heeft straf 'verdiend' vanwege zijn daad. Het is een kwestie van morele schuld en rechtvaardigheid, niet van nuttigheid."
    }],
    creativePrompt: "Welke straftheorie vind jij het meest overtuigend — vergelding, preventie of herstel? En wat zou jou van gedachten doen veranderen?",
    aiHelperPrompts: [
      "Kan straf ooit gerechtvaardigd zijn als het geen enkel goed doel dient?",
      "Hoe verandert het strafbegrip als je gelooft in vrije wil of determinisme?",
      "Welke straftheorie leidt tot het meest rechtvaardige rechtssysteem?"
    ]
  },
  {
    id: "nozick-minimale-staat",
    title: "Nozick's Minimale Staat",
    difficulty: 3,
    emoji: "🏛️",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Ethisch Redeneren",
    tags: ["Libertarisme", "Eigendom", "Staatsgrens", "Gedachte-experiment"],
    definition: "Robert Nozick (Anarchy, State, and Utopia, 1974) stelde: de enige legitieme staat is de minimale staat — die alleen beschermt tegen geweld, diefstal en contractbreuk. Elke verdergaande staat (belasting voor herverdeling, welvaartsstaat) is onrechtmatig omdat het mensen dwingt anderen te helpen tegen hun wil. Maar hoe rechtvaardig is de initiële eigendomsverdeling?",
    abstractExample: "Nozick's entitlement theory: eigendom is rechtvaardig als het werd verworven via rechtvaardige acquisitie EN vrije overdracht. Wilt-Chamberlain argument: als ieder van 1 miljoen fans vrijwillig 25 cent geeft aan Chamberlain, heeft hij een klein fortuin — verdiend. Herverdeling via belasting is dan diefstal.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Rawls vs. Nozick: het klassieke debat. Rawls: distributieve rechtvaardigheid vereist dat ongelijkheden de minst-bevoordeelden helpen. Nozick: historische rechtvaardigheid — verwerving en vrijwillige overdracht zijn voldoende. Hoe de verdeling ook uitpakt, als het proces eerlijk was, is de uitkomst eerlijk." },
      { domain: "daily", icon: "🏠", text: "Erfrecht: Nozick zou erfenissen als vrijwillige overdracht accepteren. Rawls zou hoge erfbelasting verdedigen om gelijke kansen te bevorderen. Dit structureert actueel belastingdebat: is erfenis 'verdiend' of een willekeurig startvoordeel?" },
      { domain: "business", icon: "💼", text: "Belasting voor sociale zekerheid: libertaristen (Nozick) noemen dit dwangarbeid — je wordt gedwongen een deel van je werktijd voor anderen te geven. Sociaaldemocraten: zonder sociale zekerheid is vrijheid voor de armen illusoir. Fundamenteel politiek-filosofisch conflict." }
    ],
    prerequisites: ["sociale-contract", "sluier-onwetendheid"],
    unlocks: [],
    relatedPrinciples: ["sluier-onwetendheid", "utilitarisme-bentham", "twee-vrijheden"],
    exercises: [{
      type: "multiple-choice",
      question: "Nozick's 'Wilt-Chamberlain' argument is bedoeld om te laten zien dat:",
      options: ["Sport meer verdient dan wetenschap", "Vrijwillige transacties die in een eerlijke verdeling resulteren, legitiem zijn — ook al leiden ze tot ongelijkheid", "Belasting altijd rechtvaardig is", "Minimalistische staten rijker zijn"],
      correct: 1,
      feedback: "Juist! Als iedereen vrijwillig een kleine bijdrage geeft aan Chamberlain, is de resulterende ongelijkheid het product van vrijwillige keuzes. Nozick: een staat die dit via herverdeling ongedaan maakt, schendt individuele rechten. Vrijwillige overeenkomsten zijn legitiem, ongeacht de uitkomst."
    }],
    creativePrompt: "Hoe rechtvaardig is jouw initiële startpositie — jouw land, familie, vaardigheden? Hoe verhoudt dit zich tot Nozick's rechtvaardigheidstheorie?",
    aiHelperPrompts: [
      "Is de initiële verdeling van eigendom en kansen ooit echt 'rechtvaardig verworven'?",
      "Hoe verschilt Nozick's historische rechtvaardigheid van Rawls' distributieve rechtvaardigheid?",
      "Is belasting voor sociale zekerheid diefstal of sociale plicht?"
    ]
  },
  {
    id: "kosmopolitisme",
    title: "Het Kosmopolitisme: Burgers van de Wereld",
    difficulty: 2,
    emoji: "🌐",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Ethisch Redeneren",
    tags: ["Wereldburgerschap", "Rechtvaardigheid", "Grenzen", "Gedachte-experiment"],
    definition: "Stel dat je morele verplichtingen aan alle mensen ter wereld even sterk zijn als aan je eigen landgenoten — of zelfs je eigen familie. Kosmopolitisme: de mensheid is één morele gemeenschap, nationale grenzen zijn moreel arbitrair. Peter Singer: als je een kind ziet verdrinken in een vijver en je niet helpt, ben je schuldig. Maar je helpt elke dag niet de kinderen die sterven aan vermijdbare ziekten via donaties.",
    abstractExample: "Singer's argument: afstand is moreel irrelevant — een stervend kind in Bangladesh maakt net zo veel aanspraak op je hulp als een stervend kind naast jou. Als dit klopt, ben je moreel verplicht te geven tot je zelf op het grensniveau zit. Dit is radicaal maar volgt logisch uit universeel utilitarisme.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Samuel Scheffler: we hebben sterke 'agent-relatieve' verplichtingen — aan onszelf, familie, vrienden, gemeenschap. Deze zijn moreel legitiem en overwinnen niet-kosmopolitische redenen om lokaal te prioriteren. Kosmopolitisme onderschat de morele betekenis van bijzondere relaties." },
      { domain: "daily", icon: "🏠", text: "Effectief altruïsme (EA) is een moderne kosmopolitische beweging: geef aan de meest cost-effective charities ter wereld, ongeacht locatie. 'Earn to give': kies een hoog-inkomen carrière en doneer maximaal voor maximale impact. Maximaliseer morele output." },
      { domain: "science", icon: "🔬", text: "Economisten berekenen: €3.500 kan een leven redden via bewezen interventies (malariabedden, ontworming). De gemiddelde Nederlander besteedt dit aan een nieuwe iPhone. Kosmopolitisme maakt deze keuze moreel problematisch — maar de gemiddelde mens doet het toch." }
    ],
    prerequisites: ["open-grenzen", "utilitarisme-bentham"],
    unlocks: [],
    relatedPrinciples: ["open-grenzen", "lifeboat-ethiek", "sluier-onwetendheid"],
    exercises: [{
      type: "multiple-choice",
      question: "Singer's argument dat je moreel verplicht bent de verdrinkende kinderen te helpen impliceert:",
      options: ["Dat zwemmen verboden moet worden", "Dat geografische afstand moreel irrelevant is en rijke mensen meer moeten geven", "Dat kinderen gevaarlijker zijn dan volwassenen", "Dat filantropie optioneel is"],
      correct: 1,
      feedback: "Juist! Singer's logica: als je zonder groot persoonlijk verlies kunt helpen en het niet doet, ben je moreel schuldig — ongeacht afstand. Dit impliceert dat rijken in het globale Noorden moreel verplicht zijn substantial te doneren aan extreme armoede elders."
    }],
    creativePrompt: "Hoe ver reikt jouw morele verantwoordelijkheid? Maak een 'morele cirkel': wie valt erin en waarom, en wie staat erbuiten?",
    aiHelperPrompts: [
      "Is Singer's eis om tot het grensniveau te geven realistisch of counterproductief?",
      "Zijn bijzondere verplichtingen (familie, vrienden) moreel legitiem naast kosmopolitische plichten?",
      "Hoe verhoudt effectief altruïsme zich tot andere vormen van filantropie?"
    ]
  }
];
