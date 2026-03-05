// Zelfvertrouwen – Batch 35: Sociale Dynamieken extra (15 principes)

export const zelfvertrouwen35 = [
  {
    id: 'sociale-vergelijking-bewust',
    title: 'Sociale Vergelijking: Bewust Kiezen met wie je Vergelijkt',
    difficulty: 2,
    emoji: '🔭',
    academicCategory: 'Sociale Psychologie',
    skillCategory: 'Zelfvertrouwen',
    definition: 'Leon Festinger\'s sociale vergelijkingstheorie: mensen evalueren zichzelf via vergelijking met anderen. Opwaartse vergelijking (met betere) kan inspireren of ontmoedigen; neerwaartse vergelijking (met minder goede) kan geruststellen of complacent maken. Zelfvertrouwen groeit wanneer je bewust kiest met wie en waarom je vergelijkt — en wanneer je de vergelijking loslaat voor directe zelfevaluatie.',
    abstractExample: 'Social media creëert massale opwaartse vergelijking: highlights van duizenden mensen tegelijk. Dit was evolutionair niet beschikbaar. Het brein behandelt de curated highlights van anderen als informatie over gemiddelde sociale standaarden — wat leidt tot systematisch te lage zelfevaluatie.',
    examples: [
      { domain: 'daily', icon: '🏠', text: 'Vraag bij elke vergelijking: "Vergelijk ik me met de goede persoon voor dit doel?" Vergelijk je loopbaan met iemand die tien jaar meer ervaring heeft? Dat is niet helpende informatie maar ontmoedigende informatie. Vergelijk op gelijke positie of met je vorige zelf.' },
      { domain: 'business', icon: '💼', text: 'Benchmark-culturen in bedrijven: vergelijking met de markt geeft informatie over positie. Maar interne rangschikking waarbij medewerkers voortdurend met elkaar vergeleken worden, beschadigt samenwerking en veiligheid. Vergelijkingscultuur is een designkeuze.' },
      { domain: 'science', icon: '🔬', text: 'Vogel et al. (2014): passief Facebook-gebruik (browsen) leidde tot significante verlaagde stemming en zelfwaardering. Actief gebruik (posten, communiceren) had dit effect nauwelijks. Het type vergelijking (vergelijken vs. connecten) bepaalt het effect.' }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [{ type: 'multiple-choice', question: 'Wanneer is opwaartse sociale vergelijking nuttig?', options: ['Altijd — het drijft ambitie', 'Nooit — het beschadigt altijd zelfvertrouwen', 'Wanneer het als inspiratie dient en de vergelijkingspersoon representatief is voor een haalbaar niveau', 'Alleen bij prestaties, niet bij uiterlijk'], correct: 2, feedback: 'Opwaartse vergelijking is nuttig wanneer de vergelijkingspersoon een realistisch richtpunt is en de informatie als inspiratie werkt, niet als oordeel over eigen waarde.' }],
    creativePrompt: 'Noteer drie mensen met wie u uzelf regelmatig vergelijkt. Is die vergelijking helpend of ondermijnend? Met wie zou een nuttiger vergelijking zijn?',
    aiHelperPrompts: ['Met wie vergelijkt u zichzelf het vaakst?', 'Wanneer voelt sociale vergelijking inspirerend versus ontmoedigend?']
  },
  {
    id: 'sociale-normen-invloed',
    title: 'Sociale Normen: Hoe de Groep Ons Gedrag Stuurt',
    difficulty: 2,
    emoji: '👥',
    academicCategory: 'Sociale Psychologie',
    skillCategory: 'Zelfvertrouwen',
    definition: 'Sociale normen — impliciete regels over wat normaal of gewenst is — sturen gedrag sterker dan persoonlijke overtuigingen of intenties. Robert Cialdini: sociale proof (wat anderen doen) is een van de krachtigste beïnvloedingsprincipes. Zelfvertrouwen vereist het vermogen om eigen normen te handhaven ondanks afwijkende sociale norm — zonder agressie of isolatie.',
    abstractExample: 'Als niemand in de vergadering een mening durft te geven, zegt ook de meest zelfverzekerde persoon minder. Als iedereen overwerkt, is stopzetten op een redelijk uur een daad van nonconformiteit. Sociale normen zijn bijna onzichtbaar maar sturen consequent het gedrag van iedereen erin.',
    examples: [
      { domain: 'daily', icon: '🏠', text: 'Experimenteer met bewuste norm-afwijking op kleine schaal: order als eerste, ga als eerste zitten, stel de ongemakkelijke vraag. Kleine norm-afwijkingen trainen het vermogen om eigen koers te varen wanneer het werkelijk telt.' },
      { domain: 'business', icon: '💼', text: 'Cialdini\'s inzicht: hotels die zeiden "75% van de gasten in deze kamer gebruikt de handdoeken opnieuw" (sociale norm) reduceerden handdoekgebruik meer dan generieke milieu-oproepen. Normen sturen gedrag effectiever dan waarden-appels.' },
      { domain: 'science', icon: '🔬', text: 'Asch (1955) conformiteitsexperiment: 75% van de deelnemers gaf op minstens één vraag bewust een fout antwoord omdat de rest van de groep dat deed. Sociale druk overstijgt perceptie. Wie dit weet, kan er bewuster mee omgaan.' }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [{ type: 'multiple-choice', question: 'Hoe werken sociale normen?', options: ['Alleen bij mensen die geen eigen mening hebben', 'Als impliciete gedragsregulators die sterker dan persoonlijke overtuigingen het gedrag sturen via sociale proof en conformiteitsdruk', 'Alleen bewust en expliciet', 'Via formele regels en wetten'], correct: 1, feedback: 'Sociale normen werken grotendeels impliciet en onbewust: ze reguleren gedrag via conformiteitsdruk en sociale proof, vaak sterker dan bewuste overtuigingen.' }],
    creativePrompt: 'Welke sociale norm in uw directe omgeving zou u willen doorbreken? Wat houdt u tegen en wat zou er veranderen als u dat deed?',
    aiHelperPrompts: ['In welke sociale context voelt u de sterkste sociale druk?', 'Wanneer gedroeg u zich anders dan uw omgeving en hoe voelde dat?']
  },
  {
    id: 'statusdynamiek',
    title: 'Statusdynamiek: Ongeschreven Hiërarchieën Begrijpen',
    difficulty: 2,
    emoji: '👑',
    academicCategory: 'Sociale Psychologie',
    skillCategory: 'Zelfvertrouwen',
    definition: 'Status is de positie in een sociale hiërarchie die bepaalt hoeveel invloed, middelen en sociale aandacht je ontvangt. Keith Keltner: status-signalen zijn subtiel maar universeel (lichaamshouding, gespreksdeelname, ruimtegebruik). Wie statusdynamieken bewust begrijpt, kan ze navigeren zonder er volledig door gestuurd te worden — en met meer authentiek zelfvertrouwen deelnemen aan sociale situaties.',
    abstractExample: 'In een vergadering: wie neemt de meeste spreektijd? Wie onderbreekt wie? Wiens ideeën worden herhaald? Dit zijn zichtbare uitdrukkingen van statusdynamiek die de gespreksstructuur bepalen — voor de inhoud zelfs begint. Wie dit bewust ziet, kan bewust deelnemen in plaats van onbewust te volgen.',
    examples: [
      { domain: 'daily', icon: '🏠', text: 'Status is niet hetzelfde als macht of rang. Iemand kan hoge formele rang hebben en lage informele status — en vice versa. In sociale situaties: observeer wie de statusgebaren geeft versus neemt. Dit is informatief over de werkelijke dynamiek.' },
      { domain: 'business', icon: '💼', text: 'In carrières: zichtbaarheid en statusperceptie zijn niet identiek aan kwaliteit van werk. Wie statusdynamieken begrijpt, investeert bewust in zichtbaarheid van zijn bijdragen — niet vals maar authentiek strategisch.' },
      { domain: 'science', icon: '🔬', text: 'Keltner et al. (2003): status (informele hiërarchie) bepaalt wie spreekt, wie onderbroken wordt, wiens ideeën worden geadopteerd en wie de fysieke ruimte bezit. Die patronen zijn consistent over culturen en contexten.' }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [{ type: 'multiple-choice', question: 'Wat is het verschil tussen formele rang en informele status?', options: ['Ze zijn altijd identiek', 'Formele rang is officieel en hiërarchisch; informele status is de werkelijke invloed en sociale positie die ongerelateerd kan zijn aan rang', 'Informele status is altijd lager dan rang', 'Rang is altijd importanter dan status'], correct: 1, feedback: 'Formele rang is officieel; informele status is de werkelijke sociale invloed die door gedrag, zichtbaarheid en perceptie wordt bepaald — en kan sterk van rang afwijken.' }],
    creativePrompt: 'Observeer de volgende vergadering of sociale bijeenkomst met de statusdynamiek-bril. Wie heeft hoge informele status en hoe manifesteert dat?',
    aiHelperPrompts: ['Hoe ervaart u uw eigen status in uw directe sociale omgeving?', 'Wanneer voelt u dat uw bijdragen niet de erkenning krijgen die ze verdienen?']
  },
  {
    id: 'empathie-vs-sympathie',
    title: 'Empathie versus Sympathie: Verbinding zonder Fusie',
    difficulty: 2,
    emoji: '💜',
    academicCategory: 'Sociale Psychologie',
    skillCategory: 'Zelfvertrouwen',
    definition: 'Brené Brown: empathie is het voelen met iemand (gaat de put in samen), sympathie is het voelen voor iemand (blijft buiten de put, geeft adviezen). Empathie creëert verbinding; sympathie distantie. Maar echte empathie vereist een stevige eigen basis: wie zichzelf verliest in andermans pijn, helpt niet — hij/zij verdrinkt mee. Zelfvertrouwen maakt echte empathie mogelijk zonder grensverlies.',
    abstractExample: 'Iemand die van empathie in sympathie schiet: "Het kan erger, kijk naar het positieve." Iemand die echte empathie geeft: "Ik hoor je. Dat klinkt verschrikkelijk moeilijk." Geen adviezen, geen minimalisering — alleen aanwezigheid. Dat vereist dat jij stevig genoeg staat om het verdriet van de ander te houden zonder er in weg te zakken.',
    examples: [
      { domain: 'daily', icon: '🏠', text: 'Empathische aanwezigheid trainen: de volgende keer dat iemand zijn probleem deelt, weersta dan de impuls om te adviseren, gerust te stellen of te vergelijken. Stel alleen vragen die verdiepen: "Hoe voelde dat?" "Wat is het moeilijkste eraan?" Aanwezigheid is het geschenk.' },
      { domain: 'business', icon: '💼', text: 'In leiderschapsgesprekken: de reflex om problemen direct op te lossen of de zorgen te minimaliseren ("het valt wel mee") blokkeer verbinding. Eerst empathisch aanwezig zijn, dan pas oplossen als dat gevraagd wordt.' },
      { domain: 'science', icon: '🔬', text: 'Decety & Jackson (2004): empathie activeert theorie-van-geest-netwerken (je indenken in de ander) en affectieve netwerken (mee-voelen). Het onderhouden van die dubbele activering terwijl je eigen regulatie behoudtt, is de neurocognitieve vaardigheid van empathie.' }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [{ type: 'multiple-choice', question: 'Hoe verschilt empathie van sympathie?', options: ['Empathie is gevoelsarmer dan sympathie', 'Empathie voelt mee met iemand vanuit een eigen stevige basis; sympathie voelt voor iemand vanuit een veilige distantie', 'Sympathie is altijd beter', 'Ze zijn voor de ontvanger hetzelfde'], correct: 1, feedback: 'Empathie voelt mee vanuit een stevige eigen basis; sympathie houdt distantie. Voor de ontvanger is empathie verbindender; maar het vereist meer zelfregulatie van de gever.' }],
    creativePrompt: 'Beschrijf een moment waarop iemand empathie gaf versus sympathie. Wat was het effect op hoe je je voelde in de verbinding?',
    aiHelperPrompts: ['Hoe reageer u van nature als iemand u een moeilijk gevoel deelt?', 'Wanneer verliest u uw eigen basis in de emoties van een ander?']
  },
  {
    id: 'intergenerational-verbinding',
    title: 'Intergenerationele Verbinding: Leren van Leeftijdsverschil',
    difficulty: 1,
    emoji: '🌳',
    academicCategory: 'Ontwikkelingspsychologie',
    skillCategory: 'Zelfvertrouwen',
    definition: 'Intergenerationele verbindingen — relaties tussen mensen van sterk verschillende leeftijden — bieden perspectief, wijsheid en context die leeftijdgenoten niet kunnen geven. Mentoren, oudere familieleden, maar ook jongere generaties die nieuwe perspectieven brengen. Wie actief intergenerationele verbindingen onderhoudt, heeft een rijker begrip van het leven en zichzelf — en daarmee meer geaard zelfvertrouwen.',
    abstractExample: 'Een 35-jarige die een 75-jarige mentor heeft, leert wat er toe doet op de lange termijn, welke zorgen later irrelevant blijken en wat de echte kwaliteiten zijn die een goed leven maken. Een 35-jarige die een 20-jarige mentee heeft, leert zijn eigen aannames te herleven via de ogen van iemand die anders is opgegroeid.',
    examples: [
      { domain: 'daily', icon: '🏠', text: 'Investeer bewust in een relatie met iemand die meer dan twintig jaar ouder of jonger is dan jij. Niet als agenda maar als oprechte nieuwsgierigheid: wat heeft hun generatie anders geleerd? Welk perspectief mist jij?' },
      { domain: 'business', icon: '💼', text: 'Reverse mentoring-programma\'s: jongere medewerkers mentoren senioren in technologie, sociale media en nieuwe cultuurpatronen; senioren mentoren jongeren in strategisch denken en loopbaannavigatie. Wederzijdse waarde over generaties.' },
      { domain: 'science', icon: '🔬', text: 'Erikson (1950): generativiteit — zorg voor en bijdrage aan de volgende generatie — is de centrake taak van middelbare volwassenheid. Wie dit vervult, ervaart meer welzijn en minder stagnatie. Intergenerationele verbinding is ontwikkelingspsychologisch gezond.' }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [{ type: 'multiple-choice', question: 'Welke unieke waarde bieden intergenerationele relaties?', options: ['Puur nostalgische waarde', 'Perspectief op de lange termijn, inzicht in aannames van de eigen generatie en toegang tot wijsheid die niet van leeftijdgenoten beschikbaar is', 'Enkel netwerken', 'Praktische kennis over technologie'], correct: 1, feedback: 'Intergenerationele relaties bieden perspectief dat leeftijdgenoten niet kunnen geven: de lange-termijn-blik, blinde vlekken zichtbaar maken en toegang tot andere levenservaringen en wijsheid.' }],
    creativePrompt: 'Wie in je leven is significant ouder of jonger dan jij? Welk perspectief biedt die persoon dat jij van je leeftijdgenoten niet kunt krijgen?',
    aiHelperPrompts: ['Welke oudere persoon heeft het meeste invloed gehad op uw leven en waarom?', 'Wat leert u van jongere mensen in uw omgeving?']
  },
  {
    id: 'sociale-angst-overwinnen',
    title: 'Sociale Angst Overwinnen: Blootstelling als Therapie',
    difficulty: 2,
    emoji: '🦋',
    academicCategory: 'Klinische Psychologie',
    skillCategory: 'Zelfvertrouwen',
    definition: 'Sociale angst is de vrees voor negatieve beoordeling door anderen in sociale situaties. Het is de meest voorkomende angststoornis (7% van de bevolking klinisch, veel meer subklinisch). Cognitieve gedragstherapie-techniek: graduele exposure (stapsgewijze blootstelling aan gevreesde sociale situaties) is de meest bewezen behandeling. Elk succesvolle blootstelling is een bewijs dat het meevalt, waardoor de angst geleidelijk afneemt.',
    abstractExample: 'Sociale angst-cyclus: vrees voor beoordeling → vermijding → tijdelijke verlichting → versterkte overtuiging dat de situatie gevaarlijk is. Blootstelling doorbreekt die cyclus: je gaat naar de gevreesde situatie, je overleeft het, het negatieve scenario treedt niet op — de overtuiging wordt hergeschreven.',
    examples: [
      { domain: 'daily', icon: '🏠', text: 'Exposure-hiërarchie maken: rangschik gevreesde sociale situaties van laag (een vreemde aanspreken) tot hoog (een speech geven). Begin bij de laagste en werk systematisch omhoog. Elk stapje succes herformuleert de overtuiging "sociale situaties zijn gevaarlijk".' },
      { domain: 'business', icon: '💼', text: 'Toastmasters als exposure-programma: wekelijks spreken in een veilige, ondersteunende omgeving. De effectiviteit is vergelijkbaar met professionele therapie voor spraakvrees. Structuur van exposure plus community biedt veilige oefening.' },
      { domain: 'science', icon: '🔬', text: 'Hofmann & Smits (2008) meta-analyse: cognitieve gedragstherapie met exposure is de meest effectieve behandeling voor sociale angst. Effectgrootte 0.86 (groot). Combinatie van cognitieve herkadering én gedragspracticum is effectiever dan elk apart.' }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [{ type: 'multiple-choice', question: 'Waarom werkt graduele exposure voor sociale angst?', options: ['Omdat de situaties niet echt gevaarlijk zijn', 'Omdat elke succesvolle blootstelling de overtuiging dat de situatie gevaarlijk is herformuleert — via direct bewijs', 'Omdat angst vanzelf verdwijnt', 'Omdat afleiding helpt'], correct: 1, feedback: 'Graduele exposure biedt direct bewijs dat het gevreesde scenario niet of minder intreedt dan verwacht. Dit herformuleert de cognities die de angst in stand houden.' }],
    creativePrompt: 'Maak je persoonlijke exposure-hiërarchie: van de minst bedreigende sociale situatie tot de meest gevreesde. Welke stap nummer 1 zou je komende week kunnen zetten?',
    aiHelperPrompts: ['Welke sociale situaties vermijdt u het meest?', 'Wanneer heeft u een gevreesde sociale situatie aangegaan en wat was het echte resultaat?']
  },
  {
    id: 'conflict-navigeren',
    title: 'Conflict Navigeren: Moeilijke Gesprekken Aangaan',
    difficulty: 2,
    emoji: '⚡',
    academicCategory: 'Conflictpsychologie',
    skillCategory: 'Zelfvertrouwen',
    definition: 'Zelfvertrouwen in sociale dynamieken is onmeetbaar voelbaar in hoe iemand omgaat met conflicten. Wie conflicten vermijdt of escaleert, heeft minder sociale competentie dan wie ze productief kan navigeren. Stone, Patton & Heen (Difficult Conversations): elk conflict heeft drie simultane gesprekken (inhoud, gevoel, identiteit) en effectief navigeren vereist bewustzijn van alle drie.',
    abstractExample: 'De "inhoud"-laag: we zijn het oneens over de planning. De "gevoel"-laag: ik voel me niet gerespecteerd. De "identiteit"-laag: dit raakt aan mijn overtuiging of ik competent ben. Wie alleen de inhoud adresseert, mist waarom het gesprek moeilijk is. Wie alle drie onderkent, kan ze elk aanspreken.',
    examples: [
      { domain: 'daily', icon: '🏠', text: 'Vóór een moeilijk gesprek: drie vragen beantwoorden. Wat is het inhoudspunt? Welke emoties spelen er voor mij en voor de ander? Welke identiteitsbedreiging zit er voor mij in? Die voorbereiding geeft rustiger en effectiever gesprek.' },
      { domain: 'business', icon: '💼', text: 'Leidinggevenden die moeilijke gesprekken uitstellen, laten problemen groeien. Wie ze tijdig aangaat met een "and stance" (jij hebt een geldig perspectief EN ik ook) in plaats van een "or stance" (jij of ik heeft gelijk), produceert betere uitkomsten.' },
      { domain: 'science', icon: '🔬', text: 'Gottman (1994): de vier horsemen die relaties voorspellen te eindigen zijn kritiek (aanval op karakter), minachting (superioriteitsgevoel), defensiviteit (weigering verantwoordelijkheid) en stonewalling (afsluiting). Het omgekeerde — zachte start, nieuwsgierigheid, verantwoordelijkheid, regulatie — is trainbaar.' }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [{ type: 'multiple-choice', question: 'Welke drie lagen bevat elk moeilijk gesprek volgens Stone, Patton & Heen?', options: ['Woorden, toon en timing', 'Inhoud (het feitelijke punt), gevoel (emotionele laag) en identiteit (wat het zegt over wie ik ben)', 'Heden, verleden en toekomst', 'Belangen, posities en alternatieven'], correct: 1, feedback: 'Elk moeilijk gesprek heeft drie simultane gesprekken: inhoud, gevoel en identiteit. Effectief navigeren vereist bewustzijn van en adressering van alle drie.' }],
    creativePrompt: 'Kies een moeilijk gesprek dat je al te lang uitstelt. Identificeer de drie lagen. Hoe zou een gesprek eruit zien dat alle drie adresseert?',
    aiHelperPrompts: ['Welke moeilijke gesprekken stelt u het langst uit?', 'Hoe reageert u van nature bij conflict: vermijden, aanvallen of adresseren?']
  },
  {
    id: 'netwerk-diversiteit',
    title: 'Netwerk Diversiteit: Buiten de Bubbel Verbinden',
    difficulty: 2,
    emoji: '🌐',
    academicCategory: 'Netwerkwetenschap',
    skillCategory: 'Zelfvertrouwen',
    definition: 'Mark Granovetter\'s "strength of weak ties": zwakke verbindingen (kennissen, acquaintances) geven meer toegang tot nieuwe informatie, kansen en perspectieven dan sterke verbindingen (vrienden, familie) die voornamelijk bestaande informatie spiegelen. Netwerk-diversiteit — zowel dichtbij als perifeer — vergroot het wereldmodel en zelfvertrouwen door toegang tot meer contexten.',
    abstractExample: 'Je vrienden denken grotendeels hetzelfde als jij — bevestiging. Je kennissen in andere sectoren, generaties, culturen denken anders — informatie. Carrière-kansen, nieuwe ideeën en perspectiefbreking komen consistent vaker van de zwakke verbindingen dan de sterke. Investeren in diversiteit van je netwerk is investeren in je wereldmodel.',
    examples: [
      { domain: 'daily', icon: '🏠', text: 'Maandelijkse "reach out": contacteer één persoon die je al een tijdje niet gesproken hebt uit een ander domein dan je dagelijkse leven. Stel één oprechte vraag. Die interactie is een oefening in en bijdrage aan netwerk-diversiteit.' },
      { domain: 'business', icon: '💼', text: 'In innovatie-culturen: de meest vernieuwende ideeën komen consistent van de grenzen van clusters — mensen die bruggen slaan tussen twee werelden. Wie bewust zijn netwerk buiten zijn eigen sector uitbreidt, vergroot zijn innovatieve capaciteit.' },
      { domain: 'science', icon: '🔬', text: 'Granovetter (1973), The Strength of Weak Ties: dit baanbrekende artikel toonde aan dat banen vaker via kennissen werden gevonden dan via vrienden. Zwakke ties brengen informatie die niet al aanwezig is in het bestaande netwerk.' }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [{ type: 'multiple-choice', question: 'Waarom zijn zwakke verbindingen (kennissen) waardevol in een netwerk?', options: ['Omdat ze makkelijker te onderhouden zijn', 'Omdat ze toegang geven tot informatie en kansen die buiten je bestaande netwerk liggen — nieuwe perspectieven die sterke ties niet bieden', 'Omdat ze betrouwbaarder zijn', 'Zwakke verbindingen zijn minder waardevol'], correct: 1, feedback: 'Zwakke verbindingen zijn bruggen naar andere informatiewerelden: ze brengen wat je bestaande netwerk niet al heeft — kansen, perspectieven en diversiteit van denken.' }],
    creativePrompt: 'Teken je netwerk als cirkels van nabijheid. Wie zit in de periferie die je al te lang niet hebt gecontacteerd? Wat zou ze kunnen meebrengen dat jouw kern-netwerk niet heeft?',
    aiHelperPrompts: ['Hoe divers is uw netwerk — in sector, cultuur, leeftijd, achtergrond?', 'Van wie in uw netwerk heeft u de meest verrassende ideeën gekregen?']
  },
  {
    id: 'sociale-kapitaal',
    title: 'Sociaal Kapitaal: Investeren in de Relatie-Bank',
    difficulty: 2,
    emoji: '🏦',
    academicCategory: 'Sociologie',
    skillCategory: 'Zelfvertrouwen',
    definition: 'Robert Putnam\'s sociaal kapitaal: de cumulatieve waarde van sociale netwerken, normen van wederkerigheid en vertrouwen die collectieve actie faciliteren. Op individueel niveau: wie in relaties investeert (deposits doet in de "relatie-bank") vóór hij er uitneemt, heeft een sociaal kapitaalreservoir waarop hij kan terugvallen bij behoefte. Zelfvertrouwen in sociale situaties rust deels op de wetenschap dat je sociaal kapitaal hebt opgebouwd.',
    abstractExample: 'Covey\'s emotionele bank account: elke kleine daad van consideratie, eerlijkheid, het nakomen van afspraken is een storting. Elke afwijzing, onbetrouwbaarheid of gebrek aan aandacht is een opname. Wie consistent depositeert, heeft een surplus waaruit sociale verbinding ongecompliceerder en zelfverzekerder wordt.',
    examples: [
      { domain: 'daily', icon: '🏠', text: 'Kleine, frequente deposits: complimenten die je denkt maar niet zegt, een bericht sturen wanneer je aan iemand denkt, een belofte nakomen die niemand je zou herinneren. Elk klein deposit bouwt cumulatief het sociale kapitaalreservoir.' },
      { domain: 'business', icon: '💼', text: 'Givers build the most social capital (Grant): professionals die investeren in anderen vóór ze iets nodig hebben, bouwen de sterkste netwerken. Wanneer ze iets nodig hebben, is de reserve er. Sociaal kapitaal is een langetermijninvestering.' },
      { domain: 'science', icon: '🔬', text: 'Putnam (Bowling Alone, 2000): de erosie van sociaal kapitaal in de VS (minder gemeenschapsactiviteiten, minder buren kennen) correleerde met daling in institutioneel vertrouwen, gezondheid en politieke participatie. Sociaal kapitaal heeft collectieve gevolgen.' }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [{ type: 'multiple-choice', question: 'Hoe bouw je sociaal kapitaal op?', options: ['Door invloedrijke mensen te kennen', 'Door consistent te depositen in relaties vóór je er behoefte aan opnames hebt — via betrouwbaarheid, consideratie en actieve bijdragen', 'Door zoveel mogelijk contacten te hebben', 'Sociaal kapitaal is een statistisch begrip, niet persoonlijk'], correct: 1, feedback: 'Sociaal kapitaal wordt opgebouwd door consistente deposits: betrouwbaarheid, consideratie en bijdragen aan anderen vóór je iets nodig hebt. De reserve maakt later zelfverzekerder vragen en geven mogelijk.' }],
    creativePrompt: 'Identificeer drie relaties waarbij de balans al te lang in opnames staat. Wat zijn drie concrete deposits die je deze week kunt doen?',
    aiHelperPrompts: ['In welke relaties geeft u meer dan u ontvangt en vice versa?', 'Hoe gaat u om met relaties waarbij u iets nodig heeft?']
  },
  {
    id: 'macht-en-invloed',
    title: 'Macht en Invloed: De Zachte Weg van Persoonlijke Autoriteit',
    difficulty: 2,
    emoji: '🌊',
    academicCategory: 'Sociale Psychologie',
    skillCategory: 'Zelfvertrouwen',
    definition: 'Macht heeft twee vormen: positiemacht (autoriteit via rang) en persoonlijke macht (invloed via karakter, expertise, relaties). Positiemacht is vluchtig — het verdwijnt met de functie. Persoonlijke macht is duurzaam — ze blijft bij de persoon. Wie persoonlijke macht opbouwt via betrouwbaarheid, expertise en verbinding, heeft een steviger grond voor zelfvertrouwen dan wie afhankelijk is van positie.',
    abstractExample: 'Een oud-CEO die zijn positie verliest, houdt zijn persoonlijke macht als zijn reputatie, netwerk en expertise intact zijn. Een nieuw-benoemde CEO die puur op positiemacht leunt, heeft geen invloed zodra de formele rang verdwijnt. Persoonlijke macht is portabel; positiemacht is contextueel.',
    examples: [
      { domain: 'daily', icon: '🏠', text: 'Persoonlijke macht opbouwen: betrouwbaarheid (nakomen van kleine beloften), expertise (diepte in een relevant domein), en verbinding (mensen laten zich gezien en gewaardeerd voelen). Elk van deze is dagelijks te cultiveren, ongeacht positie of titel.' },
      { domain: 'business', icon: '💼', text: 'Cialdini\'s invloedsprincipes (wederkerigheid, consistentie, social proof, autoriteit, sympathie, schaarste): elk vertegenwoordigt een aspect van persoonlijke invloed. Wie ze bewust en ethisch gebruikt, heeft meer bereik dan wie puur positiemacht gebruikt.' },
      { domain: 'science', icon: '🔬', text: 'French & Raven (1959): vijf bronnen van macht (beloning, dwang, legitimiteit, referentie/persoonlijkheid, expertise). Referentie- en expertisemacht zijn het meest stabiel en produceren het meest commitment (vs. compliance of dwang).' }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [{ type: 'multiple-choice', question: 'Waarom is persoonlijke macht duurzamer dan positiemacht?', options: ['Positiemacht is altijd beter', 'Persoonlijke macht rust op karakter, expertise en relaties die portabel zijn; positiemacht verdwijnt met de functie', 'Persoonlijke macht is moeilijker te verliezen', 'Ze zijn even duurzaam'], correct: 1, feedback: 'Persoonlijke macht is portabel — ze zit in de persoon, niet de positie. Wie haar opbouwt via karakter, expertise en relaties, heeft steviger basis dan wie op rang leunt.' }],
    creativePrompt: 'Op welke van de drie dimensies van persoonlijke macht (betrouwbaarheid, expertise, verbinding) wil je het meest groeien? Wat zou je deze maand kunnen doen?',
    aiHelperPrompts: ['Hoe ervaart u uw persoonlijke invloed in uw omgeving?', 'Wanneer voelt u dat mensen luisteren, niet omdat ze moeten maar omdat ze willen?']
  },
  {
    id: 'groepsdenken-voorkomen',
    title: 'Groepsdenken Voorkomen: De Afwijkende Stem',
    difficulty: 2,
    emoji: '🔔',
    academicCategory: 'Sociale Psychologie',
    skillCategory: 'Zelfvertrouwen',
    definition: 'Groepsdenken (Irving Janis) treedt op wanneer de wens naar groepsharmonie en -consensus de kwaliteit van besluitvorming overstijgt. Afwijkende meningen worden gesupprimeerd, alternatieve opties niet onderzocht, en risico\'s onderschat. Zelfvertrouwen is wat nodig is om de afwijkende stem te zijn — de persoon die de groep beschermt door wat niemand wil zeggen.',
    abstractExample: 'De Bay of Pigs-invasie (Kennedy-adminsitratie, 1961): een van de meest bestudeerde voorbeelden van groepsdenken. Experts die twijfelden, zwegen. Niemand wilde de sfeer van enthousiasme doorbreken. Het resultaat was een catastrofe. Wie intern had gezegd "wacht, dit klopt niet" had de groep gered.',
    examples: [
      { domain: 'daily', icon: '🏠', text: 'De meest waardevolle vriend in een groep is degene die comfortabel kan zeggen "ik zie het anders." Die rol vereist zelfvertrouwen — het durven doorbreken van de harmonische consensus ten dienste van betere besluiten. Die vriend is een geschenk.' },
      { domain: 'business', icon: '💼', text: 'Jeff Bezos\' rule: in Amazon-vergaderingen mogen mensen pas consensus tonen nadat ze hun bezwaren volledig hebben uitgesproken. De structuur forceert dat de afwijkende stem gehoord wordt vóór consensus wordt bereikt. Groepsdenken by design voorkomen.' },
      { domain: 'science', icon: '🔬', text: 'Janis (1972): groepsdenken correleert met hoge cohesie, externe druk en dominante leider. Preventieve maatregelen: een devil\'s advocate-rol toewijzen, anonieme input verzamelen en externe experts inschakelen die niet sociaal geïnvesteerd zijn in de uitkomst.' }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [{ type: 'multiple-choice', question: 'Wat is de functie van de "devil\'s advocate" in groepsbesluitvorming?', options: ['De groep ontmoedigen', 'Bewust de tegenargumenten inbrengen om groepsdenken te voorkomen en de kwaliteit van de besluitvorming te verhogen', 'Vertragen van het besluitvormingsproces', 'Conflicten aanwakkeren'], correct: 1, feedback: 'De devil\'s advocate brengt bewust tegenargumenten in om groepsdenken te doorbreken. Dit verhoogt de kwaliteit van besluitvorming door alternatieve perspectieven in de analyse te forceren.' }],
    creativePrompt: 'In welke groep of context ben jij het meest geneigd om je stem in te houden? Wat zou er veranderen als je de afwijkende stem was?',
    aiHelperPrompts: ['Wanneer houdt u uw mening in ten gunste van de groepsharmonie?', 'Heeft u ooit spijt gehad dat u iets niet gezegd heeft in een groep?']
  },
  {
    id: 'vertrouwen-opbouwen-snel',
    title: 'Snel Vertrouwen Opbouwen in Nieuwe Relaties',
    difficulty: 1,
    emoji: '🤝',
    academicCategory: 'Sociale Psychologie',
    skillCategory: 'Zelfvertrouwen',
    definition: 'Vertrouwen in nieuwe relaties wordt opgebouwd via drie signalen die snel worden verstrekt: warm (je meent het goed), betrouwbaar (je doet wat je zegt) en competent (je weet wat je doet). Het interessante: warmte wordt als eerste beoordeeld en heeft meer gewicht dan competentie. Amy Cuddy (Presence): "Before people decide what they think of your message, they decide what they think of you."',
    abstractExample: 'In de eerste seconden van een ontmoeting evalueert het brein: "Heeft deze persoon goede of slechte intenties?" (warmte) en "Is hij/zij in staat die intenties te realiseren?" (competentie). Warmte heeft evolutionair prioriteit — een krachtige vijand is gevaarlijker dan een zwakke vijand. Wie warmte als eerste uitstraalt, opent de deur voor vertrouwen.',
    examples: [
      { domain: 'daily', icon: '🏠', text: 'Bewust warmte uitstralen in nieuwe ontmoetingen: oprecht glimlachen, echte interesse tonen door te vragen over de ander vóór je over jezelf praat, en namen onthouden. Kleine warmte-signalen openen verbinding sneller dan indrukwekkende competentiedemonstraties.' },
      { domain: 'business', icon: '💼', text: 'Sollicitatiegesprekken: onderzoek toont dat interviewers de kandidaat snel beoordelen op warmte en die perceptie later rationaliseren via competentie-signalen. Wie de eerste minuut benut om oprechte verbinding te maken, heeft strategisch voordeel.' },
      { domain: 'science', icon: '🔬', text: 'Ambady & Rosenthal (1993): "thin slices" — 10-seconden video\'s van leraren zonder geluid — voorspelden studenten-beoordelingen aan het einde van het semester met r=.76. Eerste indrukken zijn biologisch snel en verbazingwekkend stabiel.' }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [{ type: 'multiple-choice', question: 'Welk signaal wordt als eerste beoordeeld in nieuwe ontmoetingen?', options: ['Competentie', 'Warmte (intenties), gevolgd door competentie (capaciteit die intenties te realiseren)', 'Status en positie', 'Uiterlijk en kleding'], correct: 1, feedback: 'Warmte (intentionaliteit) wordt voor competentie beoordeeld — het brein screent eerst op goede of slechte intenties. Wie warmte uitstraalt, opent de deur voor verdere vertrouwensopbouw.' }],
    creativePrompt: 'Hoe zou je de openingsminuut van een nieuwe ontmoeting bewust anders kunnen inrichten om eerst warmte en dan competentie te communiceren?',
    aiHelperPrompts: ['Wat is uw eerste impuls in nieuwe ontmoetingen: uzelf presenteren of de ander leren kennen?', 'Wanneer voelt vertrouwen in een nieuwe relatie snel opgebouwd?']
  },
  {
    id: 'afwijzing-verwerken',
    title: 'Afwijzing Verwerken: Resiliëntie in Sociale Pijn',
    difficulty: 2,
    emoji: '💔',
    academicCategory: 'Sociale Neurowetenschappen',
    skillCategory: 'Zelfvertrouwen',
    definition: 'Sociale afwijzing activeert dezelfde neurale circuits als fysieke pijn (anterieure cingulate cortex). Het brein behandelt sociale uitsluiting letterlijk als een bedreiging voor overleving — en dat is evolutionair begrijpelijk. Zelfvertrouwen in sociale situaties groeit wanneer je leert dat afwijzing te verdragen is, meestal niets over je waarde als persoon zegt, en dat resiliëntie in sociale pijn trainbaar is.',
    abstractExample: 'Jia Jiang\'s "100 days of rejection" experiment: hij vroeg dagelijks om absurde dingen om afwijzing te normaliseren. Resultaat na honderd dagen: de angst voor afwijzing nam dramatisch af, zijn zelfvertrouwen nam toe. De meeste afwijzingen waren milder dan gevreesd. Afwijzing trainen via expositie verwijdert de tanden.',
    examples: [
      { domain: 'daily', icon: '🏠', text: 'Afwijzing desensitiseren: vraag komende week om drie kleine dingen waarvan je de kans groot acht dat je afgewezen wordt. Vraag een korting, stel een onverwachte vraag, vraag een gunst. Observeer: wat is het echte gevolg van de afwijzing?' },
      { domain: 'business', icon: '💼', text: 'Sales-training via rejection immunization: verkopers die systematisch meer "nee"s verzamelen, worden minder geraakt door elk nee — en vragen meer. De relatie met afwijzing is een sterkere voorspeller van verkoopresultaten dan verkoopvaardigheid.' },
      { domain: 'science', icon: '🔬', text: 'Eisenberger et al. (2003): fMRI-studie toonde dat sociale uitsluiting (Cyberball-experiment) dezelfde breingebieden activeerde als fysieke pijn. Dit maakt de pijn van afwijzing niet overdreven — het is biologisch. En net als fysieke pijn: blootstelling bouwt tolerantie.' }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [{ type: 'multiple-choice', question: 'Waarom activeert sociale afwijzing pijn-circuits in het brein?', options: ['Omdat afwijzing altijd betekenisvol is', 'Omdat sociale uitsluiting evolutionair een overlevingsbedreiging was — de hersenen reageren neurobiologisch analoog aan fysieke pijn', 'Omdat mensen te gevoelig zijn', 'Alleen bij zelfvertrouwen-problemen'], correct: 1, feedback: 'Sociale afwijzing activeert pijn-circuits omdat sociale uitsluiting evolutionair een echte overlevingsbedreiging was. Dit maakt de pijn biologisch reëel — en blootstelling bouwt neurologische tolerantie.' }],
    creativePrompt: 'Wat is de sociale afwijzing die je het meest vreest? Hoe zou je die vrijwillig kunnen oefenen om de angel eruit te halen?',
    aiHelperPrompts: ['Hoe reageert u op afwijzing — sociaal, professioneel of romantisch?', 'Wanneer heeft afwijzing u meer gekost dan het waard was?']
  },
  {
    id: 'kwetsbaarheid-verbinding',
    title: 'Kwetsbaarheid als Verbindingsinstrument',
    difficulty: 2,
    emoji: '🌸',
    academicCategory: 'Sociale Psychologie',
    skillCategory: 'Zelfvertrouwen',
    definition: 'Brené Brown\'s decennialang onderzoek: verbinding — het diepste menselijke verlangen — vereist kwetsbaarheid. Wie zichzelf volledig laat zien, inclusief twijfels en zwakheden, creëert de mogelijkheid voor echte verbinding. Wie zichzelf achter een perfecte of sterke gevel verbergt, bereikt transacties maar geen verbinding. Paradoxaal: kwetsbaarheid vereist zelfvertrouwen — de moed om gezien te worden.',
    abstractExample: 'Wholehearted persons (Brown): mensen die met volle overgave leven, onderscheiden zich niet door afwezigheid van twijfel maar door hun bereidheid ondanks twijfel zichtbaar te zijn. Ze zijn niet kwetsbaar omdat ze moeten maar omdat ze ervoor kiezen. Die keuze is de meest moedige daad van zelfexpressie.',
    examples: [
      { domain: 'daily', icon: '🏠', text: 'Kwetsbaarheid-experiment: deel komende week iets echts over jezelf met iemand die je vertrouwt maar aan wie je je normaal niet toont. Observeer de reactie. Bijna altijd: de ander deelt terug, de verbinding verdiept. Kwetsbaarheid roept kwetsbaarheid op.' },
      { domain: 'business', icon: '💼', text: 'Leiders die in moeilijke tijden hun twijfels en zorgen eerlijk delen — "ik weet ook niet hoe dit afloopt maar hier is wat ik weet" — bouwen meer loyaliteit dan leiders die sterkte simuleren. Authenticiteit in onzekerheid is een leiderschapskwaliteit.' },
      { domain: 'science', icon: '🔬', text: 'Brown (Daring Greatly, 2012): tien jaar kwalitatief onderzoek naar verbinding. Deelnemers die "wholehearted" leefden, hadden allemaal één ding gemeen: ze omarmden kwetsbaarheid als noodzakelijke voorwaarde voor verbinding, liefde en betekenis.' }
    ],
    prerequisites: [],
    unlocks: [],
    exercises: [{ type: 'multiple-choice', question: 'Waarom vereist kwetsbaarheid zelfvertrouwen?', options: ['Kwetsbaarheid is het tegenovergestelde van zelfvertrouwen', 'Omdat zichtbaar zijn ondanks twijfel en risico van afwijzing een bewuste keuze is die intern zekerheid vereist', 'Kwetsbare mensen zijn altijd onzeker', 'Zelfvertrouwen maakt kwetsbaarheid onnodig'], correct: 1, feedback: 'Kwetsbaarheid vereist zelfvertrouwen: je laten zien ondanks risico van afwijzing of oordeel is een daad van moed die intern zekerheid vereist — juist niet de afwezigheid ervan.' }],
    creativePrompt: 'Beschrijf een moment waarop jij je kwetsbaar opstelde. Hoe reageerde de ander? Wat leerde je over de verbindende kracht van kwetsbaarheid?',
    aiHelperPrompts: ['Hoe comfortabel bent u met kwetsbaar zijn bij mensen die u vertrouwt?', 'Wanneer heeft kwetsbaarheid een relatie voor u verdiept?']
  }
];
