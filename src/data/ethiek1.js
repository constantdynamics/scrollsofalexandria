// Ethiek – Batch 1: 15 kernprincipes van de ethiek

export const ethiek1 = [
  {
    id: 'deontologie',
    title: 'Deontologie: Plichtethiek',
    difficulty: 2,
    emoji: '📜',
    academicCategory: 'Ethiek',
    skillCategory: 'Beter Redeneren',
    definition: 'Deontologie stelt dat de moraliteit van een handeling wordt bepaald door of ze voldoet aan een regel of plicht, ongeacht de gevolgen. Kant\'s categorisch imperatief is het bekendste voorbeeld: handel alleen volgens de maxime die je tegelijkertijd als universele wet zou willen.',
    abstractExample: 'Als liegen altijd verkeerd is (plicht), dan is liegen ook verkeerd als het iemand zou redden. De deontoloog beoordeelt de handeling zelf, niet de uitkomst. Dit staat in scherp contrast met consequentialisme, dat alleen kijkt naar gevolgen.',
    examples: [
      { domain: 'daily', icon: '🏠', text: 'Jij vindt dat je vriend zijn baas moet vertellen over de fout die hij per ongeluk heeft gemaakt, ook al leidt dit tot ontslag — want eerlijkheid is een plicht, ongeacht de gevolgen.' },
      { domain: 'business', icon: '💼', text: 'Een bedrijf weigert klantdata te verkopen aan een derde partij, ook al is het lucratief en wettelijk toegestaan, omdat het de privacy-belofte die ze hebben gedaan schendt.' },
      { domain: 'science', icon: '🔬', text: 'Kant (Kritiek van de Praktische Rede, 1788): de morele wet in ons is absoluut — een leugen blijft een leugen, ook als ze een leven redt. Dit is wat deontologie fundamenteel anders maakt.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wat is het kernonderscheid van deontologische ethiek?',
        options: [
          'De uitkomst bepaalt of een handeling goed is',
          'De handeling zelf bepaalt of ze moreel is, ongeacht gevolgen',
          'Moraal wordt bepaald door sociale consensus',
          'Elke situatie vereist een nieuwe morele afweging'
        ],
        correct: 1,
        feedback: 'Deontologie focust op de handeling zelf en de naleving van plichten of regels, niet op de gevolgen.'
      }
    ],
    creativePrompt: 'Beschrijf een situatie waarbij jij een deontologisch standpunt innam — je deed het "juiste" zelfs al had dat slechte gevolgen. Was dat de juiste keuze?',
    aiHelperPrompts: ['Wanneer is een plicht absoluut en wanneer niet?', 'Hoe verschilt deontologie van consequentialisme in alledaagse beslissingen?']
  },
  {
    id: 'consequentialisme',
    title: 'Consequentialisme: Gevolgen Bepalen Moraliteit',
    difficulty: 2,
    emoji: '⚖️',
    academicCategory: 'Ethiek',
    skillCategory: 'Beter Redeneren',
    definition: 'Consequentialisme stelt dat de moraliteit van een handeling uitsluitend wordt bepaald door haar gevolgen. De "beste" handeling is die welke de beste uitkomst produceert, doorgaans gemeten als maximaal welzijn of geluk voor het grootste aantal mensen.',
    abstractExample: 'Als liegen het meeste geluk produceert in een gegeven situatie, is liegen de moreel juiste keuze. Consequentialisme vraagt altijd: wat zijn de gevolgen van alle beschikbare opties? De optie met de beste balans van goed vs. kwaad wint.',
    examples: [
      { domain: 'daily', icon: '🏠', text: 'Je liegt tegen je terminale oma dat de dokter positief is, omdat de waarheid alleen maar pijn veroorzaakt zonder enige voordeel. Consequentialist: dat is de juiste keuze.' },
      { domain: 'business', icon: '💼', text: 'Een fabriek sluit een afdeling om 500 banen te redden elders — vijftig mensen verliezen hun werk, maar de meerderheidsbenefit rechtvaardigt de beslissing vanuit consequentialistisch perspectief.' },
      { domain: 'science', icon: '🔬', text: 'Peter Singer (Practical Ethics, 1979): consequentialisme leidt tot de conclusie dat je moreel verplicht bent om te doneren tot het punt dat je iets van gelijke waarde zou opofferen.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wat bepaalt de moraliteit van een handeling volgens het consequentialisme?',
        options: [
          'De intentie van de persoon die handelt',
          'De handeling zelf ongeacht gevolgen',
          'De gevolgen van de handeling',
          'De regels van de samenleving'
        ],
        correct: 2,
        feedback: 'Consequentialisme beoordeelt handelingen puur op basis van hun gevolgen — de beste uitkomst bepaalt de moreel juiste keuze.'
      }
    ],
    creativePrompt: 'Bedenk een situatie waarbij consequentialistisch redeneren leidt tot een conclusie die intuïtief "verkeerd" aanvoelt. Wat zegt dat over de beperkingen van deze ethische theorie?',
    aiHelperPrompts: ['Hoe beslis je welke gevolgen "beter" zijn als je ze vergelijkt?', 'Wanneer schiet consequentialisme tekort als morele gids?']
  },
  {
    id: 'utilitarisme',
    title: 'Utilitarisme: Het Grootste Geluk voor de Meesten',
    difficulty: 2,
    emoji: '😊',
    academicCategory: 'Ethiek',
    skillCategory: 'Beslissingen Nemen',
    definition: 'Utilitarisme (Bentham, Mill) is een vorm van consequentialisme die stelt dat de juiste handeling die is welke het totale geluk of welzijn maximaliseert. "Het grootste geluk voor het grootste aantal" is het leidende principe. Geluk wordt meetbaar geacht via het nutsprincipe.',
    abstractExample: 'Bentham\'s "gelukscalculus" probeert geluk te kwantificeren: intensiteit, duur, zekerheid, nabijheid, vruchtbaarheid, zuiverheid, en omvang. De handeling met de hoogste uitkomst op deze schaal is de juiste. Mill verfijnde dit door kwaliteitsonderscheiden in geluk te maken.',
    examples: [
      { domain: 'daily', icon: '🏠', text: 'Jij besluit je vakantiebudget te doneren aan een effectief liefdadigheidsproject dat tien levens redt, in plaats van een luxevakantie. Utilitarist: dit maximaliseert het totale welzijn.' },
      { domain: 'business', icon: '💼', text: 'Een overheid weegt kosten-batenanalyse: een nieuwe brug kost €100 miljoen maar redt verwacht 20 levens per jaar. Utilitaristische kosten-batenanalyse is standaard in beleidsbeslissingen.' },
      { domain: 'science', icon: '🔬', text: 'Jeremy Bentham (Introduction to the Principles of Morals and Legislation, 1789): "nature has placed mankind under the governance of two sovereign masters, pain and pleasure" — de basis van zijn hedonistische rekening.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wat is het centrale criterium in het utilitarisme?',
        options: [
          'Het respecteren van rechten en plichten',
          'Het maximaliseren van welzijn voor het grootste aantal',
          'Het volgen van de deugden van een goed karakter',
          'Het naleven van een sociaal contract'
        ],
        correct: 1,
        feedback: 'Utilitarisme maximaliseert het totale geluk of welzijn — "het grootste geluk voor het grootste aantal" is het leidende principe.'
      }
    ],
    creativePrompt: 'Beschrijf een beleidsbeslissing (echt of bedacht) waarbij utilitaristische logica tot een moreel ongemakkelijke conclusie leidt. Hoe zou jij het oplossen?',
    aiHelperPrompts: ['Hoe meet je geluk objectief?', 'Is het rechtvaardig dat een minderheid lijdt voor het welzijn van de meerderheid?']
  },
  {
    id: 'deugdethiek',
    title: 'Deugdethiek: Wat Zou Een Goed Mens Doen?',
    difficulty: 2,
    emoji: '🏛️',
    academicCategory: 'Ethiek',
    skillCategory: 'Mensen Begrijpen',
    definition: 'Deugdethiek (Aristoteles) verschuift de morele vraag van "wat moet ik doen?" naar "wat voor persoon moet ik zijn?". Moreel goed handelen vloeit voort uit een goed karakter met deugden zoals moed, rechtvaardigheid, vriendelijkheid en eerlijkheid. Deugden worden verworven door oefening.',
    abstractExample: 'In plaats van een regel te volgen (deontologie) of gevolgen te berekenen (consequentialisme), vraagt de deugdethicus: "Wat zou een deugdzaam, wijs persoon in deze situatie doen?" Het doel is eudaimonia — het goede, florerende leven.',
    examples: [
      { domain: 'daily', icon: '🏠', text: 'Je helpt een vreemde niet uit angst voor straf of om voordeel te halen, maar omdat medeleven deel uitmaakt van wie je bent — je hebt de deugd van vriendelijkheid ontwikkeld.' },
      { domain: 'business', icon: '💼', text: 'Een leider beslist niet enkel op basis van protocol of winstmaximalisatie, maar vraagt: "Wat zou een eerlijke, moedige en rechtvaardige leider in deze situatie doen?"' },
      { domain: 'science', icon: '🔬', text: 'Aristoteles (Nicomachische Ethiek, ~330 v.Chr.): deugd is het midden tussen twee extremen (de gouden middenweg). Moed ligt tussen lafheid en roekeloosheid. Rechtvaardig handelen vereist praktische wijsheid (phronesis).' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wat is het centrale begrip in Aristoteles\' deugdethiek?',
        options: [
          'Plicht en regel',
          'Maximale geluk voor de meerderheid',
          'Een goed karakter met deugden',
          'Het sociale contract'
        ],
        correct: 2,
        feedback: 'Deugdethiek focust op het ontwikkelen van een goed karakter met deugden — de vraag is "wat voor persoon moet ik zijn?" in plaats van "wat moet ik doen?".'
      }
    ],
    creativePrompt: 'Welke drie deugden vind jij het belangrijkst voor een goed leven? Hoe cultiveer je ze actief?',
    aiHelperPrompts: ['Hoe verhoudt deugdethiek zich tot morele regels?', 'Kunnen deugden in conflict raken met elkaar?']
  },
  {
    id: 'trolleyprobleem',
    title: 'Het Trolleyprobleem',
    difficulty: 2,
    emoji: '🚃',
    academicCategory: 'Ethiek',
    skillCategory: 'Beter Redeneren',
    definition: 'Het trolleyprobleem (Foot, Thomson) is een gedachte-experiment: een trolley rijdt naar vijf mensen op het spoor. Jij kunt een hendel omzetten waardoor de trolley naar een zijspoor met één persoon gaat. De meesten zeggen: zet de hendel om. Maar waarom is het anders als je iemand van een brug moet duwen om dezelfde vijf te redden?',
    abstractExample: 'Het probleem onthult spanning tussen consequentialisme (vijf levens > één leven, dus handel) en deontologie (je mag iemand niet gebruiken als middel, ook niet als het meer levens redt). De varianten tonen dat onze morele intuïties inconsistent zijn en context-afhankelijk.',
    examples: [
      { domain: 'daily', icon: '🏠', text: 'Je moet kiezen: één vriend teleurstellen om een groep van vijf te helpen. De trolley-logica doemt op — en de meeste mensen worstelen met de keuze, ook al lijkt de rekening simpel.' },
      { domain: 'business', icon: '💼', text: 'Een ziekenhuis heeft één beademingsapparaat en twee patiënten nodig het. De arts moet beslissen wie het krijgt. De trolley-ethiek speelt in triage-beslissingen dagelijks.' },
      { domain: 'science', icon: '🔬', text: 'Joshua Greene (Moral Tribes, 2013): fMRI-studies tonen dat de brug-variant een emotionele hersenrespons activeert die de hendel-variant niet doet. Morele intuïties zijn neurale feiten, niet puur rationele oordelen.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wat maakt de "van de brug duwen" variant anders dan de hendel-variant?',
        options: [
          'Er zijn meer mensen betrokken',
          'Je gebruikt iemand actief als middel om anderen te redden',
          'De kans op succes is lager',
          'Je bent dichter bij de slachtoffers'
        ],
        correct: 1,
        feedback: 'De kern is dat je bij de brug-variant iemand actief inzet als instrument — dit schendt het deontologische principe dat mensen nooit louter middelen mogen zijn.'
      }
    ],
    creativePrompt: 'Bedenk een moderne versie van het trolleyprobleem in een technologische context (bijv. zelfrijdende auto\'s, AI-triage). Hoe zou jij het oplossen?',
    aiHelperPrompts: ['Waarom reageert ons brein anders op directe versus indirecte schade?', 'Is consequentialisme de enige weg in noodsituaties?']
  },
  {
    id: 'rawls-sluier-van-onwetendheid',
    title: 'Rawls\' Sluier van Onwetendheid',
    difficulty: 3,
    emoji: '🎭',
    academicCategory: 'Ethiek',
    skillCategory: 'Beslissingen Nemen',
    definition: 'John Rawls\' "sluier van onwetendheid" is een gedachte-experiment voor rechtvaardigheid: stel je een maatschappij in vanuit een "originele positie" waarbij je niet weet welke positie je zult innemen — arm of rijk, man of vrouw, getalenteerd of niet. Wat voor regels zou je dan kiezen?',
    abstractExample: 'Achter de sluier kies je regels die voor iedereen eerlijk zijn, want je kunt zelf aan de onderkant terechtkomen. Rawls concludeert: ongelijkheden zijn alleen rechtvaardig als ze de minst bedeelden ten goede komen (differentieprincipe). Dit is een procedurele benadering van rechtvaardigheid.',
    examples: [
      { domain: 'daily', icon: '🏠', text: 'Je kiest regels voor je groep project — maar je weet niet welke rol je zult krijgen. Je kiest automatisch eerlijkere regels dan als je al wist dat je de leider bent.' },
      { domain: 'business', icon: '💼', text: 'Een aandeelhouder die niet weet of hij in de toekomst werknemer of directeur is, zou voor eerlijker beloningsstructuren stemmen. Rawls\'s gedachte-experiment onthult hoe eigenbelang ons verblind.' },
      { domain: 'science', icon: '🔬', text: 'Rawls (A Theory of Justice, 1971): de twee principes van rechtvaardigheid — gelijke basisvrijheden voor iedereen, en ongelijkheden enkel toegestaan als ze de minst bedeelden bevoordelen (het differentieprincipe).' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wat is het doel van Rawls\' sluier van onwetendheid?',
        options: [
          'Aantonen dat ongelijkheid altijd onrechtvaardig is',
          'Een onpartijdig perspectief creëren voor rechtvaardige regels',
          'Emoties uit morele redenering verwijderen',
          'Aantonen dat individuen altijd eigenbelang nastreven'
        ],
        correct: 1,
        feedback: 'De sluier verwijdert persoonlijke bias door je je eigen positie onbekend te maken — zo kun je onpartijdig redeneren over wat rechtvaardig is.'
      }
    ],
    creativePrompt: 'Gebruik de sluier van onwetendheid om beleid te ontwerpen voor één maatschappelijk vraagstuk (onderwijs, zorg, belastingen). Welke keuzes maak je?',
    aiHelperPrompts: ['Hoe verschilt Rawls van utilitarisme?', 'Is de sluier van onwetendheid een realistische methode?']
  },
  {
    id: 'categorisch-imperatief',
    title: 'Het Categorisch Imperatief van Kant',
    difficulty: 3,
    emoji: '⚖️',
    academicCategory: 'Ethiek',
    skillCategory: 'Beter Redeneren',
    definition: 'Kant\'s categorisch imperatief is het hoogste morele principe: (1) Universaliteitsformule: handel alleen zoals je zou willen dat iedereen altijd handelt. (2) Mensheidsformule: behandel mensen altijd als doel op zich, nooit louter als middel. Beide formulaties leiden tot hetzelfde.',
    abstractExample: 'Liegen om voordeel te behalen: als iedereen altijd zou liegen, verdwijnt vertrouwen en taal verliest zijn functie. Liegen kan niet worden gegeneraliseerd zonder zichzelf te vernietigen — dus liegen is categorisch verkeerd, ongeacht gevolgen.',
    examples: [
      { domain: 'daily', icon: '🏠', text: 'Je vraagt jezelf: "Als iedereen in dezelfde situatie zo handelde als ik, zou de maatschappij dan functioneren?" Als het antwoord nee is, is de handeling moreel ontoelaatbaar.' },
      { domain: 'business', icon: '💼', text: 'Manipulatie in marketing: je behandelt de klant als middel (te overtuigen ten koste van hun autonomie) in plaats van doel. Kant zou dit categorisch afwijzen als moreel ontoelaatbaar.' },
      { domain: 'science', icon: '🔬', text: 'Kant (Grondlegging voor de Metafysica van de Zeden, 1785): het categorisch imperatief is a priori — het geldt onafhankelijk van situatie, cultuur of gevolgen. Dit onderscheidt het van een hypothetisch imperatief.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wat toetst de universaliteitsformule van het categorisch imperatief?',
        options: [
          'Of een handeling geluk maximaliseert',
          'Of een handeling universaliseerbaar is zonder zichzelf te vernietigen',
          'Of een handeling een deugdzaam karakter vertegenwoordigt',
          'Of de gevolgen positief zijn voor de meerderheid'
        ],
        correct: 1,
        feedback: 'De universaliteitsformule vraagt: kan de maxime van mijn handeling worden gegeneraliseerd naar een universele wet zonder tegenstrijdigheid? Zo niet, dan is de handeling moreel onjuist.'
      }
    ],
    creativePrompt: 'Pas de universaliteitsformule toe op drie alledaagse keuzes die je deze week maakte. Kunnen ze alle drie worden gegeneraliseerd?',
    aiHelperPrompts: ['Waarom neemt Kant nooit uitzonderingen op zijn regels?', 'Hoe verhoudt Kants ethiek zich tot moderne mensenrechten?']
  },
  {
    id: 'zorgethiek',
    title: 'Zorgethiek: Relaties als Morele Basis',
    difficulty: 2,
    emoji: '🤝',
    academicCategory: 'Ethiek',
    skillCategory: 'Mensen Begrijpen',
    definition: 'Zorgethiek (Gilligan, Noddings) stelt dat moraal niet primair gaat over abstracte principes maar over concrete relaties en zorg. Verantwoordelijkheid voor de andere — specifiek, kwetsbaar, in context — is de kern. Het verwerpt de nadruk op universele regels als te abstract en genderversterkend.',
    abstractExample: 'In plaats van te vragen "welke regel geldt hier?" vraagt de zorgethicus: "Wie heeft hier zorg nodig en hoe kan ik die geven?" Moreel redeneren is in wezen relationeel, contextgebonden en gericht op specifieke personen — niet op generaliseerbare principes.',
    examples: [
      { domain: 'daily', icon: '🏠', text: 'Jij annuleert een professionele verplichting om bij je zieke moeder te zijn. De zorgethiek rechtvaardigt dit — de specifieke relatie en haar kwetsbaarheid wegen zwaarder dan de abstracte plicht.' },
      { domain: 'business', icon: '💼', text: 'Een leidinggevende die niet enkel vraagt wat de KPI zegt maar actief luistert naar de noden van een kwetsbare medewerker, handelt vanuit zorgethische principes.' },
      { domain: 'science', icon: '🔬', text: 'Carol Gilligan (In a Different Voice, 1982): mannen redeneren vanuit rechtvaardigheidsethiek (regels), vrouwen vanuit zorgethiek (relaties). Beide zijn legitieme morele stemmen, niet hiërarchisch.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wat onderscheidt zorgethiek van deontologie en utilitarisme?',
        options: [
          'Ze berekent gevolgen nauwkeuriger',
          'Ze focust op specifieke relaties en concrete zorg in plaats van abstracte principes',
          'Ze stelt plichten boven alles',
          'Ze maximaliseert het welzijn van de gemeenschap'
        ],
        correct: 1,
        feedback: 'Zorgethiek is relationeel en contextgebonden — ze vertrekt van de specifieke persoon en haar noden, niet van universele regels of berekeningen.'
      }
    ],
    creativePrompt: 'Beschrijf een situatie waarbij zorgethiek en deontologie tot tegengestelde conclusies leiden. Welke benadering vind jij overtuigender en waarom?',
    aiHelperPrompts: ['Kan zorgethiek leiden tot partijdigheid of nepotisme?', 'Hoe verhoud je zorg voor nabijen met eerlijkheid voor vreemden?']
  },
  {
    id: 'moreel-relativisme',
    title: 'Moreel Relativisme: Is Moraal Cultuurgebonden?',
    difficulty: 2,
    emoji: '🌍',
    academicCategory: 'Ethiek',
    skillCategory: 'Beter Redeneren',
    definition: 'Moreel relativisme stelt dat morele oordelen niet universeel gelden maar relatief zijn aan cultuur, samenleving of individu. Er bestaan geen absolute morele waarheden. Wat in de ene cultuur goed is, kan in de andere slecht zijn — en geen cultuur heeft gelijk of ongelijk.',
    abstractExample: 'Diefstal is verboden in Nederland maar in bepaalde context mogelijk eerbaar in andere culturen (bv. van vijanden). Relativisme zegt: we kunnen dit niet beoordelen vanuit ons eigen systeem. Critici antwoorden: dan kunnen we ook genocide niet moreel veroordelen — wat een levensgevaarlijk gevolg is.',
    examples: [
      { domain: 'daily', icon: '🏠', text: '"Wie ben jij om te zeggen dat andere culturen fout zijn met hun tradities?" — dit is een relativistisch argument. Maar leidt het niet tot moreel stilzwijgen over mensenrechtenschendingen?' },
      { domain: 'business', icon: '💼', text: 'Een multinational past zijn ethische standaarden aan per land: in landen met lage arbeidsnormen betaalt het minder. Moreel relativisme geeft daarvoor theoretische dekking, maar is dat aanvaardbaar?' },
      { domain: 'science', icon: '🔬', text: 'Ruth Benedict (Patterns of Culture, 1934): morele normen zijn culturele constructies. Moreel universalisme is ethnocentrisme. James Rachels beargumenteerde dat dit leidt tot onvermogen om sociale vooruitgang te erkennen.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wat is het voornaamste bezwaar tegen moreel relativisme?',
        options: [
          'Het is te ingewikkeld om toe te passen',
          'Het maakt het onmogelijk om praktijken als genocide moreel te veroordelen',
          'Het negeert individuele rechten',
          'Het is uitsluitend gebaseerd op westerse filosofie'
        ],
        correct: 1,
        feedback: 'Moreel relativisme impliceert dat we geen cultuuroverschrijdende morele oordelen kunnen vellen — inclusief veroordeling van genocide of slavernij — wat de meeste mensen als problematisch ervaren.'
      }
    ],
    creativePrompt: 'Beschrijf een culturele praktijk die jij moreel problematisch vindt. Hoe zou een moreel relativist reageren, en hoe reageer jij op dat antwoord?',
    aiHelperPrompts: ['Hoe kunnen we respect voor culturele diversiteit combineren met morele standaarden?', 'Is moreel relativisme zelf een absolute morele claim?']
  },
  {
    id: 'contractarisme',
    title: 'Contractarisme: Moraal als Sociaal Contract',
    difficulty: 3,
    emoji: '🤝',
    academicCategory: 'Ethiek',
    skillCategory: 'Strategisch Denken',
    definition: 'Contractarisme (Hobbes, Locke, Rousseau, Rawls) stelt dat morele en politieke regels hun geldigheid ontlenen aan een (hypothetisch of werkelijk) sociaal contract — overeenstemming van rationele individuen over de spelregels van samen leven.',
    abstractExample: 'Hobbes: zonder contract is het leven "solitary, poor, nasty, brutish, and short." Individuen rationeel bewust van dit geven rechten op aan een soeverein in ruil voor bescherming. Locke: het contract beperkt de soeverein — individuen behouden onvervreemdbare rechten.',
    examples: [
      { domain: 'daily', icon: '🏠', text: 'Verkeersregels zijn een sociaal contract: jij geeft de vrijheid op om willekeurig te rijden, in ruil voor de veiligheid die iedereen die hetzelfde doet je biedt.' },
      { domain: 'business', icon: '💼', text: 'Arbeidscontracten, belastingplicht en mededingingsrecht zijn uitdrukkingen van het sociale contract — we beperken onze vrijheid collectief voor gedeeld voordeel.' },
      { domain: 'science', icon: '🔬', text: 'Hobbes (Leviathan, 1651), Locke (Two Treatises of Government, 1689), Rousseau (Du Contrat Social, 1762): drie versies van het sociale contract met radicaal verschillende gevolgen voor staatsmacht en individuele vrijheid.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Waarop baseren contractaristen de geldigheid van morele regels?',
        options: [
          'Op goddelijke geboden',
          'Op universele rationele principes',
          'Op overeenstemming van rationele individuen via een sociaal contract',
          'Op de belangen van de meerderheid'
        ],
        correct: 2,
        feedback: 'Contractarisme fundeert morele en politieke regels in een (hypothetische) overeenstemming die rationele individuen zouden sluiten om samen te leven.'
      }
    ],
    creativePrompt: 'Ontwerp jouw eigen sociaal contract voor een kleine gemeenschap van 50 mensen die samen leven. Welke regels zijn essentieel?',
    aiHelperPrompts: ['Wat als mensen het contract niet zelf hebben ondertekend?', 'Hoe verhoudt contractarisme zich tot de rechten van toekomstige generaties?']
  },
  {
    id: 'is-ought-probleem',
    title: 'Het Is-Ought Probleem van Hume',
    difficulty: 3,
    emoji: '🔗',
    academicCategory: 'Ethiek',
    skillCategory: 'Beter Argumenteren',
    definition: 'Hume observeerde dat men niet van een feit (is) naar een moreel oordeel (ought) kan springen zonder extra rechtvaardiging. "Mensen doden elkaar altijd" (feit) rechtvaardigt niet "mensen mogen elkaar doden" (norm). Dit onderscheid tussen zijn en behoren is fundamenteel in de ethiek.',
    abstractExample: 'Naturalistische fout: van "X is natuurlijk" naar "X is goed" gaan. Agressie is evolutionair verklaarbaar (is), maar dat rechtvaardigt agressief gedrag niet (ought). Elk moreel betoog dat van feiten naar normen springt zonder die stap te verantwoorden maakt de is-ought fout.',
    examples: [
      { domain: 'daily', icon: '🏠', text: '"Mensen eten altijd vlees" (feit) → "We mogen altijd vlees eten" (norm). Dit is een is-ought sprong — het bestaan van een praktijk rechtvaardigt die praktijk niet moreel.' },
      { domain: 'business', icon: '💼', text: '"Het bedrijf heeft altijd zo gewerkt" (is) → "We moeten zo blijven werken" (ought). Gewoonte is geen morele rechtvaardiging — dit is een is-ought fout in organisatielogica.' },
      { domain: 'science', icon: '🔬', text: 'Hume (Treatise of Human Nature, 1739): de kloof tussen is en ought is de kern van de meta-ethiek. G.E. Moore (1903) noemde de sprong van "is" naar "goed" de "naturalistische fout".' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wat stelt Humes is-ought probleem?',
        options: [
          'Feiten en normen zijn hetzelfde soort uitspraken',
          'Van beschrijvende feiten kan men niet zomaar normatieve conclusies afleiden',
          'Moraliteit is volledig subjectief en onkenbaar',
          'Wetenschappelijke feiten bepalen morele waarden'
        ],
        correct: 1,
        feedback: 'Hume stelt dat er een logische kloof zit tussen feitelijke uitspraken (is) en normatieve conclusies (ought). Je hebt altijd een extra normatieve stap nodig om de brug te slaan.'
      }
    ],
    creativePrompt: 'Identificeer drie veelgehoorde argumenten in het publieke debat die de is-ought fout maken. Hoe zou je ze verbeteren?',
    aiHelperPrompts: ['Hoe kun je de is-ought kloof legitimiet overbruggen?', 'Maakt dit probleem empirische ethiek onmogelijk?']
  },
  {
    id: 'moreel-geluk',
    title: 'Moreel Geluk: Verdienen We Onze Oordelen?',
    difficulty: 3,
    emoji: '🎲',
    academicCategory: 'Ethiek',
    skillCategory: 'Mensen Begrijpen',
    definition: 'Moreel geluk (Nagel, Williams) verwijst naar het fenomeen dat onze morele beoordeling van personen sterk wordt beïnvloed door factoren buiten hun controle. Twee identieke situaties met different toevallige uitkomsten leiden tot verschillende morele oordelen — maar is dat rechtvaardig?',
    abstractExample: 'Twee chauffeurs rijden even onvoorzichtig. De ene raakt niemand; de andere rijdt een kind aan dat plotseling de weg oversteken. De tweede wordt moreel sterker veroordeeld — maar hun gedrag was identiek. Het toeval bepaalt hun lot, niet hun keuze.',
    examples: [
      { domain: 'daily', icon: '🏠', text: 'Twee vrienden drinken een biertje te veel en rijden naar huis. Eén komt veilig thuis; de ander veroorzaakt een ongeluk. We oordelen ze totaal anders — maar was hun morele fout niet gelijk?' },
      { domain: 'business', icon: '💼', text: 'Twee startups nemen identieke risico\'s. De ene heeft geluk en slaagt; de andere faalt door externe omstandigheden. Investeerders en buitenwereld oordelen de oprichters heel verschillend.' },
      { domain: 'science', icon: '🔬', text: 'Thomas Nagel (Mortal Questions, 1979): moreel geluk omvat resultaatgeluk, omstandigheidsgeluk, constitutief geluk (je karakter) en causaal geluk (je verleden). Verantwoordelijkheid veronderstelt controle — maar we hebben beperkte controle.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wat maakt moreel geluk filosofisch problematisch?',
        options: [
          'Het maakt rechtvaardigheid onmogelijk',
          'We vellen morele oordelen op basis van factoren buiten iemands controle',
          'Het ontkent het bestaan van vrije wil',
          'Het maximaliseert niet het algemeen welzijn'
        ],
        correct: 1,
        feedback: 'Moreel geluk toont aan dat onze oordelen over anderen worden beïnvloed door toeval — factoren die de persoon zelf niet kon kiezen of beheersen.'
      }
    ],
    creativePrompt: 'Beschrijf een situatie waarbij jij iemand hebt beoordeeld op een uitkomst die door pech of geluk werd bepaald. Was dat eerlijk?',
    aiHelperPrompts: ['Hoe beïnvloedt moreel geluk het strafrecht?', 'Kunnen we verantwoordelijkheid houden als we ook moreel geluk erkennen?']
  },
  {
    id: 'positieve-negatieve-plicht',
    title: 'Positieve vs. Negatieve Plichten',
    difficulty: 2,
    emoji: '➕➖',
    academicCategory: 'Ethiek',
    skillCategory: 'Beter Argumenteren',
    definition: 'Negatieve plichten verbieden handelingen (niet doden, niet stelen). Positieve plichten vereisen handelingen (redden, helpen). Klassieke ethiek geeft negatieve plichten vaak meer gewicht: "laat iemand niet doden" is sterker dan "red iemand". Maar is dat verschil gerechtvaardigd?',
    abstractExample: 'Je ziet een kind verdrinken in een ondiepe vijver. Je kunt het eenvoudig redden. Als je dat niet doet, ben je dan moreel schuldig? Negatieve-plicht-denkers zeggen: je schond geen plicht (jij hebt het kind niet in de vijver gegooid). Peter Singer zegt: je had een positieve plicht om te helpen en schond die.',
    examples: [
      { domain: 'daily', icon: '🏠', text: '"Ik heb niemand actief geschaad" — maar deed je genoeg om te helpen? Het verschil tussen niet-schaden en actief-helpen bepaalt hoe zwaar we morele verplichtingen inschatten.' },
      { domain: 'business', icon: '💼', text: 'Een bedrijf dat zijn milieu niet actief vervuilt (negatieve plicht voldaan) maar ook niets doet aan duurzaamheid: voldoet het aan zijn morele plichten of heeft het ook positieve plichten?' },
      { domain: 'science', icon: '🔬', text: 'Peter Singer (Famine, Affluence, and Morality, 1972): het onderscheid tussen negatieve en positieve plichten is moreel niet gerechtvaardigd. Als je kunt helpen en dat niet doet, ben je moreel verantwoordelijk voor het gevolg.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wat is een positieve plicht?',
        options: [
          'Een plicht om iets niet te doen',
          'Een plicht om actief iets goeds te doen of te helpen',
          'Een plicht die juridisch is vastgelegd',
          'Een plicht die meer goed dan kwaad doet'
        ],
        correct: 1,
        feedback: 'Positieve plichten vereisen actief handelen — iemand helpen, iets goeds doen. Negatieve plichten verbieden bepaald gedrag — niet schaden, niet stelen.'
      }
    ],
    creativePrompt: 'Hoeveel positieve plicht heb jij om te helpen bij wereldarmoede? Aan welke grens stopt jouw plicht en waarom?',
    aiHelperPrompts: ['Wanneer overschrijdt een positieve plicht wat redelijkerwijs van je verwacht mag worden?', 'Hoe bepalen we de omvang van onze positieve plichten?']
  },
  {
    id: 'moreel-intuitionisme',
    title: 'Moreel Intuïtionisme: Weten We Zonder Redeneren?',
    difficulty: 2,
    emoji: '💡',
    academicCategory: 'Ethiek',
    skillCategory: 'Beter Redeneren',
    definition: 'Moreel intuïtionisme (G.E. Moore, W.D. Ross) stelt dat bepaalde morele waarheden direct kenbaar zijn via intuïtie, zonder redenering. "Pijn is slecht" of "onschuldigen kwetsen is verkeerd" zijn zulke basismorele waarheden. Ze behoeven geen verdere rechtvaardiging.',
    abstractExample: 'Net zoals 2+2=4 niet verder bewezen hoeft te worden, hoeft "foltering van onschuldigen is verkeerd" niet te worden afgeleid uit een theorie. Onze morele intuïties zijn de bron van ethische kennis, niet de conclusies ervan.',
    examples: [
      { domain: 'daily', icon: '🏠', text: 'Jij weet meteen dat een aangeboden hypothetisch scenario waarbij een kind wordt mishandeld voor financieel gewin verkeerd is — je hoeft daar geen theorie voor nodig. Dat is morele intuïtie.' },
      { domain: 'business', icon: '💼', text: 'Wanneer een vergadering een beslissing neemt die "juridisch okay" maar "gewoon verkeerd aanvoelt", vertrouwen de meeste mensen intuïtief op een morele kennis die ze niet volledig kunnen articuleren.' },
      { domain: 'science', icon: '🔬', text: 'W.D. Ross (The Right and the Good, 1930): prima facie plichten — belofte nakomen, niet schaden, dankbaarheid tonen — zijn intuïtief kenbaar. In conflicten moet je afwegen welke het sterkst is in die situatie.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wat stelt moreel intuïtionisme?',
        options: [
          'Moreel oordeel vereist altijd redenering',
          'Bepaalde morele waarheden zijn direct kenbaar via intuïtie',
          'Morele intuïties zijn altijd cultureel bepaald',
          'Emoties zijn de enige bron van morele kennis'
        ],
        correct: 1,
        feedback: 'Moreel intuïtionisme stelt dat sommige morele waarheden direct kenbaar zijn, zonder verdere redenering of rechtvaardiging nodig te hebben.'
      }
    ],
    creativePrompt: 'Beschrijf drie morele overtuigingen die jij zo sterk ervaart dat je ze niet nader kunt of hoeft te beargumenteren. Wat maakt ze zo zeker?',
    aiHelperPrompts: ['Wanneer conflicteren morele intuïties met theoretische argumenten?', 'Hoe ga je om met intuïties die cultureel gekleurd blijken?']
  },
  {
    id: 'morele-verantwoordelijkheid',
    title: 'Morele Verantwoordelijkheid en Vrije Wil',
    difficulty: 3,
    emoji: '🧩',
    academicCategory: 'Ethiek',
    skillCategory: 'Beter Redeneren',
    definition: 'Morele verantwoordelijkheid veronderstelt dat iemand anders had kunnen handelen dan hij deed. Maar als determinisme waar is — als alle handelingen worden bepaald door oorzaken buiten onze controle — hoe kunnen we dan iemand moreel aanspreken? Dit is het spanningsveld van vrije wil en verantwoordelijkheid.',
    abstractExample: 'Compatibilisme (Hume, Frankfurt): morele verantwoordelijkheid vereist geen libertaire vrije wil, slechts dat je handelingen voortkomen uit je eigen verlangens en karakter, niet uit externe dwang. Je bent verantwoordelijk als je handelt op basis van wie je bent, ook al is dat karakter veroorzaakt.',
    examples: [
      { domain: 'daily', icon: '🏠', text: 'Een verslafde die steelt: is hij volledig verantwoordelijk? Hij handelt vanuit een dwang die zijn keuzevrijheid beperkt. Hoe volledig zijn verantwoordelijkheid is, heeft praktische gevolgen voor straf versus behandeling.' },
      { domain: 'business', icon: '💼', text: 'Groepsdruk in een bedrijf leidde tot corruptie. Waren individuele medewerkers volledig verantwoordelijk, of speelde de structuur een causale rol? Dit beïnvloedt hoe we sancties en hervormingen ontwerpen.' },
      { domain: 'science', icon: '🔬', text: 'Harry Frankfurt (Freedom of the Will, 1971): vrije wil als de capaciteit om de wil te willen die je hebt — second-order desires. Een verslafde wil wellicht niet willen wat hij wil: dat vermindert zijn verantwoordelijkheid.' }
    ],
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wat stelt compatibilisme over morele verantwoordelijkheid en determinisme?',
        options: [
          'Determinisme maakt morele verantwoordelijkheid onmogelijk',
          'Verantwoordelijkheid vereist libertaire vrije wil',
          'Verantwoordelijkheid is verenigbaar met determinisme als je handelt vanuit je eigen karakter',
          'Verantwoordelijkheid is een illusie'
        ],
        correct: 2,
        feedback: 'Compatibilisme stelt dat morele verantwoordelijkheid en determinisme kunnen coëxisteren: je bent verantwoordelijk als je handelt vanuit je eigen karakter en verlangens, zelfs als die zijn veroorzaakt door eerdere oorzaken.'
      }
    ],
    creativePrompt: 'Beschrijf een situatie waarbij iemand moreel verantwoordelijk werd gehouden voor een handeling die sterk werd beïnvloed door externe omstandigheden. Was dat rechtvaardig?',
    aiHelperPrompts: ['Hoe beïnvloedt de neurowetenschappelijke visie op vrije wil onze ideeën over straf?', 'Is morele verantwoordelijkheid nog zinvol in een deterministisch universum?']
  },
];
