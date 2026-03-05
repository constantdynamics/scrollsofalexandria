// Gedachte-experimenten – Batch 4: Wetenschapsfilosofie & Fysica (10 experimenten)

export const gedachteExperimenten4 = [
  {
    id: "schrodingers-kat",
    title: "Schrödinger's Kat",
    difficulty: 2,
    emoji: "🐱",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Kwantummechanica", "Meting", "Superpositie", "Gedachte-experiment"],
    definition: "Een kat zit in een gesloten doos met een radioactief atoom, een detector en een gifcapsule. Als het atoom vervalt (kans 50%), opent de detector de capsule en sterft de kat. Kwantummechanica stelt dat het atoom in superpositie is (vervallen en niet-vervallen tegelijk) totdat het gemeten wordt. Is de kat dan ook tegelijk levend en dood? Schrödinger bedoelde dit als reductio ad absurdum van de Kopenhagen-interpretatie.",
    abstractExample: "De Kopenhagen-interpretatie: kwantumobjecten zijn in superpositie totdat ze gemeten worden. Meting 'collaps' de golffunctie naar één waarde. Schrödinger vroeg: als dit geldt voor atomen, geldt het dan ook voor katten? Op welke schaal stopt superposition? Het experiment onthult het meet-probleem in de kwantummechanica.",
    examples: [
      { domain: "science", icon: "🔬", text: "Erwin Schrödinger (1935) bedoelde het experiment als kritiek, niet als letterlijk scenario. De Kopenhagen-interpretatie van Bohr en Heisenberg was onvoldoende voor macroscopische objecten. Sindsdien zijn er tientallen interpretaties van kwantummechanica voorgesteld." },
      { domain: "philosophy", icon: "🤔", text: "Het meet-probleem: wat 'meet' de kwantumsysteem — een machine, een menselijk bewustzijn, een interactie? Eugene Wigner suggereerde dat bewustzijn de golffunctie collaps veroorzaakt. Weinig fysici zijn het daarmee eens." },
      { domain: "daily", icon: "🏠", text: "'Schrödinger's kat' is een populaire metafoor geworden voor overlappende toestanden: een onbeantwoorde e-mail is Schrödinger's kat (kan goed of slecht nieuws zijn). Of een relatie die 'misschien' is. De term is verrijkt maar ook verwaterd in het populaire gebruik." }
    ],
    prerequisites: [],
    unlocks: ["epr-paradox", "wigner-vriend"],
    relatedPrinciples: ["epr-paradox", "wigner-vriend", "simulatiehypothese"],
    exercises: [{
      type: "multiple-choice",
      question: "Schrödinger's kat was bedoeld als:",
      options: ["Een serieus experiment om katten te bestuderen", "Een reductio ad absurdum van de Kopenhagen-interpretatie", "Een bewijs dat kwantummechanica fout is", "Een ethisch experiment over dierenrechten"],
      correct: 1,
      feedback: "Juist! Schrödinger bedoelde het als kritiek: als kwantummechanica superpositie toepast op atomen, maar een macroscopisch systeem zoals een kat is eraan verbonden — volgt dan de absurde conclusie dat de kat tegelijk dood en levend is? Dit toont de grenzen van de Kopenhagen-interpretatie."
    }],
    creativePrompt: "Bedenk een alledaags Schrödinger's kat scenario: een toestand die 'tegelijk beide' is totdat je kijkt. Wat verandert er als je het opent?",
    aiHelperPrompts: [
      "Wat bedoelen fysici als ze zeggen dat een deeltje in 'superpositie' is?",
      "Op welke schaal stopt kwantum superposition? Waarom katten niet?",
      "Hoe interpreteer jij kwantummechanica: Kopenhagen, Many Worlds, of iets anders?"
    ]
  },
  {
    id: "epr-paradox",
    title: "De EPR-paradox (Einstein-Podolsky-Rosen)",
    difficulty: 3,
    emoji: "🔗",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Kwantummechanica", "Verstrengeling", "Lokaliteit", "Gedachte-experiment"],
    definition: "Einstein, Podolsky en Rosen (1935) bedachten een scenario waarbij twee verstrengelde deeltjes worden gescheiden. Meten van deeltje A beïnvloedt deeltje B onmiddellijk — ongeacht de afstand. Einstein noemde dit 'spooky action at a distance' en geloofde dat kwantummechanica onvolledig was. Latere experimenten (Bell, Aspect) toonden aan dat de wereld inderdaad niet-lokaal is.",
    abstractExample: "Twee verstrengelde deeltjes: meet spin van A (up) → spin van B is onmiddellijk down, ook al is B aan de andere kant van het universum. Drie opties: (1) informatie reist sneller dan licht (verboden door relativiteitstheorie), (2) er waren 'verborgen variabelen' (uitgesloten door Bell-tests), (3) de wereld is inherent niet-lokaal (de huidige wetenschappelijke consensus).",
    examples: [
      { domain: "science", icon: "🔬", text: "John Bell (1964) formuleerde testbare ongelijkheden. Alain Aspect (1982) testte ze experimenteel en bevestigde niet-lokaliteit. Verborgen variabelen zijn uitgesloten. De wereld werkt inderdaad niet lokaal op kwantumniveau — wat Einstein nooit accepteerde." },
      { domain: "philosophy", icon: "🤔", text: "De EPR-paradox raakt aan fundamentele vragen over causaliteit: kan iets happen aan B worden 'veroorzaakt' door meting van A zonder enige signaal van A naar B? Kwantummechanica zegt ja — maar er kan geen bruikbare informatie mee worden overgebracht (no-signaling theorema)." },
      { domain: "daily", icon: "🏠", text: "Kwantumcommunicatie en kwantumcryptografie maken gebruik van verstrengeling. Hoewel je geen sneller-dan-licht informatie kunt sturen, kun je wel onkraakbare sleutels maken via kwantumsleuteldistributie — een praktische toepassing van 'spooky action'." }
    ],
    prerequisites: ["schrodingers-kat"],
    unlocks: [],
    relatedPrinciples: ["schrodingers-kat", "wigner-vriend"],
    exercises: [{
      type: "multiple-choice",
      question: "Wat toonden Bell-tests aan over Einstein's verborgen variabelen hypothese?",
      options: ["Dat verborgen variabelen bestaan en kwantummechanica aanvullen", "Dat verborgen variabelen zijn uitgesloten en niet-lokaliteit reëel is", "Dat Einstein gelijk had", "Dat kwantummechanica onjuist is"],
      correct: 1,
      feedback: "Juist! Bell's theorem en Aspect's experimenten bewezen dat de correlaties bij verstrengeling sterker zijn dan door welke lokale verborgen-variabelen theorie dan ook kan worden verklaard. Niet-lokaliteit is reëel — de wereld is op kwantumniveau niet-lokaal."
    }],
    creativePrompt: "Als twee dingen verstrengeld zijn zodat ze altijd correlatief reageren, hoe denk jij over de verbinding tussen hen? Is dat causaliteit, correlatie of iets nieuws?",
    aiHelperPrompts: [
      "Wat betekent 'niet-lokaliteit' in de kwantummechanica?",
      "Waarom kan verstrengeling niet gebruikt worden voor sneller-dan-licht communicatie?",
      "Hoe past niet-lokaliteit in Einsteins speciale relativiteitstheorie?"
    ]
  },
  {
    id: "laplace-demon",
    title: "Laplace's Demon",
    difficulty: 2,
    emoji: "🎲",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Determinisme", "Vrije Wil", "Causaliteit", "Gedachte-experiment"],
    definition: "Stel dat er een intelligentie bestaat die de positie en impuls van elk atoom in het universum kent en alle krachten begrijpt. Zou die intelligentie de volledige toekomst en het volledige verleden kunnen berekenen? Pierre-Simon Laplace (1814) beschreef dit ideaalwezen als argument voor deterministisch causalisme. Als het universum deterministisch is, is vrije wil dan een illusie?",
    abstractExample: "Laplace's demon: als het universum volledig deterministisch is, is de toekomst volledig bepaald door het verleden. Heisenbergs onzekerheidsprincipe (1927) maakt exacte kennis van positie en impuls tegelijk onmogelijk. Maar zelfs zonder kwantummechanica: chaostheorie toont dat deterministische systemen onvoorspelbaar kunnen zijn.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "De demon is een gedachte-experiment over determinisme en vrije wil. Als alles causaal bepaald is, zijn onze keuzes dan echt vrij? Compatibilisten (Hume, Kant) zeggen: vrijheid en determinisme zijn verenigbaar — vrij handelen betekent handelen zonder dwang, niet zonder oorzaak." },
      { domain: "science", icon: "🔬", text: "Kwantummechanica introduceert fundamentele onbepaaldheid — Laplace's demon is fysiek onmogelijk. Maar chaostheorie toont dat zelfs deterministische systemen (weersystemen) onvoorspelbaar zijn door exponentiële gevoeligheid voor beginwaarden." },
      { domain: "daily", icon: "🏠", text: "Als jouw keuze om koffie te drinken volledig bepaald werd door neuronen die werden bepaald door genen en ervaringen — heb jij dan 'gekozen'? Of was de keuze altijd al vastgelegd? Jouw intuïtief antwoord bepaalt hoe je denkt over verantwoordelijkheid en straf." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["schrodingers-kat", "vrije-wil-experiment"],
    exercises: [{
      type: "multiple-choice",
      question: "Waarom is Laplace's demon fysiek onmogelijk?",
      options: ["Omdat computers niet krachtig genoeg zijn", "Omdat Heisenberg's onzekerheidsprincipe exacte kennis van positie en impuls tegelijk verbiedt", "Omdat het universum eindig is", "Omdat tijd niet meetbaar is"],
      correct: 1,
      feedback: "Juist! Heisenberg's onzekerheidsprincipe: hoe preciezer je de positie van een deeltje meet, hoe onnauwkeuriger zijn impuls — en vice versa. Laplace's demon vereist beide exact, wat fundamenteel verboden is in de kwantummechanica."
    }],
    creativePrompt: "Als de toekomst volledig bepaald is, hoe denk je dan over schuld, straf en beloning? Is verantwoordelijkheid dan een zinloos concept?",
    aiHelperPrompts: [
      "Is vrije wil mogelijk in een deterministisch universum?",
      "Hoe verandert het begrip van morele verantwoordelijkheid als Laplace's demon gelijk had?",
      "Maakt het voor jou praktisch verschil of je vrije wil hebt of niet?"
    ]
  },
  {
    id: "maxwell-demon",
    title: "Maxwell's Demon",
    difficulty: 3,
    emoji: "♨️",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Thermodynamica", "Entropie", "Informatie", "Gedachte-experiment"],
    definition: "Een demon bewaakt een luikje tussen twee gascompartimenten. Hij laat snelle moleculen alleen door naar links en langzame naar rechts — waardoor links warm en rechts koud wordt zonder energie toe te voegen. Dit zou de tweede wet van de thermodynamica schenden (entropie neemt altijd toe). James Clerk Maxwell (1867) stelde dit voor als denkpuzzle. Hoe lost het op?",
    abstractExample: "De oplossing (Szilard, Landauer, Bennett): de demon moet informatie opslaan over elk molecuul. Om eeuwig te draaien moet hij zijn geheugen wissen — en geheugen wissen is een irreversibel proces dat entropie verhoogt. Informatie heeft een fysische realiteit: wissen kost thermodynamische energie (Landauer's principe).",
    examples: [
      { domain: "science", icon: "🔬", text: "Rolf Landauer (1961): elke bit informatie die gewist wordt, produceert minimaal kT ln(2) warmte (≈ 3×10⁻²¹ joule bij kamertemperatuur). Dit is Landauer's limiet — de thermodynamische minimumkosten van computatie. Informatie is fysisch." },
      { domain: "philosophy", icon: "🤔", text: "Maxwell's demon toont de verbinding tussen informatie en fysica. Entropie is niet alleen een thermodynamisch begrip, maar ook een informatiebegrip (Shannon). De demon bevestigt dat informatieverwerking onvermijdelijk thermodynamische kosten heeft." },
      { domain: "business", icon: "💼", text: "Datacenters verbruiken enorme hoeveelheden stroom deels vanwege Landauer's principe: elke berekening die een bitwaarde reset, kost energie. Dit is een fundamenteel fysisch minimum, geen ingenieursgebrek. Energiezuinige computing heeft een thermodynamische vloer." }
    ],
    prerequisites: ["schrodingers-kat"],
    unlocks: [],
    relatedPrinciples: ["schrodingers-kat", "laplace-demon"],
    exercises: [{
      type: "multiple-choice",
      question: "Hoe lost Maxwell's demon op zonder de tweede wet te schenden?",
      options: ["De demon gebruikt toch energie om het luikje te openen", "Het geheugen wissen van de demon veroorzaakt compenserende entropiestijging", "De demon bestaat niet in de realiteit", "Moleculen kunnen het luikje niet echt passeren"],
      correct: 1,
      feedback: "Juist! De demon moet informatie over moleculen opslaan en zijn geheugen periodiek wissen. Geheugen wissen is een irreversibele, entropie-verhogende operatie. Het netto-entropie effect is nul — de tweede wet blijft onaangetast. Informatie heeft fysische thermodynamische kosten."
    }],
    creativePrompt: "Als informatieverwerking altijd energie kost, wat betekent dat voor de toekomst van kunstmatige intelligentie en de energiecrisis?",
    aiHelperPrompts: [
      "Wat is de verbinding tussen informatie en thermodynamische entropie?",
      "Hoe beïnvloedt Landauer's principe de energiebehoefte van computers?",
      "Betekent het dat perfecte computatie thermodynamisch onmogelijk is?"
    ]
  },
  {
    id: "einstein-trein",
    title: "Einstein's Trein (Gelijktijdigheid)",
    difficulty: 2,
    emoji: "🚄",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Relativiteitstheorie", "Tijdruimte", "Gelijktijdigheid", "Gedachte-experiment"],
    definition: "Een trein raast over een spoor. Op hetzelfde moment (voor een waarnemer op het perron) worden twee bliksemschichten een aan het voor- en achtereinde van de trein getroffen. Een passagier midden in de trein ervaart de schichten als niet-gelijktijdig — de voorste eerder dan de achterste. Gelijktijdigheid is relatief: twee gebeurtenissen die tegelijk zijn voor de ene waarnemer, zijn niet-gelijktijdig voor een andere.",
    abstractExample: "Einsteins conclusie uit de speciale relativiteitstheorie (1905): er is geen absolute gelijktijdigheid. 'Nu' is locatie- en snelheidsafhankelijk. Twee waarnemers in verschillende referentieframes kunnen niet het eens zijn over of twee gebeurtenissen tegelijkertijd plaatsvonden. Dit ondermijnt het concept van een universele 'heden'.",
    examples: [
      { domain: "science", icon: "🔬", text: "De speciale relativiteitstheorie heeft reële gevolgen: GPS-satellieten moeten corrigeren voor zowel speciale relativiteit (klokken lopen langzamer bij hogere snelheid) als algemene relativiteit (klokken lopen sneller verder van massa). Zonder correctie: 10 km GPS-fout per dag." },
      { domain: "philosophy", icon: "🤔", text: "De relativiteit van gelijktijdigheid suggereert dat er geen objectief 'nu' bestaat — alleen perspectief-afhankelijk 'nu'. Dit heeft implicaties voor het concept van vrije wil en causale ordening: oorzaak-gevolg is referentiekader-afhankelijk bij lichtsnelheidsnabijheid." },
      { domain: "daily", icon: "🏠", text: "In het dagelijks leven zijn deze effecten verwaarloosbaar bij lage snelheden. Maar voor precisiemetingen (GPS, atoomklokken, deeltjesversnellers) zijn relativistische correcties essentieel. Einsteins gedachte-experiment heeft tastbare technologische consequenties." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["laplace-demon", "schrodingers-kat"],
    exercises: [{
      type: "multiple-choice",
      question: "Wat demonstreert Einstein's trein-experiment over gelijktijdigheid?",
      options: ["Dat gelijktijdigheid absoluut is", "Dat gelijktijdigheid relatief is en afhangt van het referentiekader", "Dat treinen te snel rijden", "Dat licht langzamer is dan gedacht"],
      correct: 1,
      feedback: "Juist! Einstein toonde dat twee gebeurtenissen die voor de ene waarnemer gelijktijdig zijn, voor een bewegende waarnemer niet-gelijktijdig zijn. Er is geen absolute universele tijd — tijd en gelijktijdigheid zijn afhankelijk van het referentiekader van de waarnemer."
    }],
    creativePrompt: "Als er geen objectief 'nu' bestaat, hoe denk je dan over de filosifische idee dat het verleden onveranderlijk is en de toekomst open?",
    aiHelperPrompts: [
      "Wat betekent het dat er geen absolute gelijktijdigheid is?",
      "Hoe past de relativiteit van tijd in het dagelijks leven?",
      "Heeft tijdreizen iets te maken met Einsteins relativiteitstheorie?"
    ]
  },
  {
    id: "zeno-achilles",
    title: "Zeno's Paradox: Achilles en de Schildpad",
    difficulty: 2,
    emoji: "🐢",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Wiskunde", "Oneindige reeks", "Beweging", "Gedachte-experiment"],
    definition: "Achilles geeft een schildpad een voorsprong van 100 meter. Als Achilles naar de startpositie van de schildpad rent, is de schildpad al verder. Als hij naar die positie rent, is de schildpad weer verder. Dit herhaalt zich oneindig — Achilles moet oneindig veel stappen voltooien. Kan hij de schildpad ooit inhalen? Zeno van Elea (5e eeuw v.Chr.) gebruikte dit om te betogen dat beweging een illusie is.",
    abstractExample: "Moderne oplossing: een oneindige reeks kan een eindige som hebben. 1/2 + 1/4 + 1/8 + ... = 1. De oneindig vele stappen van Achilles kosten oneindig kleine tijdstukjes die samen optellen tot een eindige tijd. Zeno's vergissing: hij dacht dat oneindig veel stappen oneindig veel tijd kosten.",
    examples: [
      { domain: "science", icon: "🔬", text: "De wiskundige oplossing via convergente reeksen (17e eeuw, Newton en Leibniz calculus) lost Zeno formeel op. Maar Zeno's filosofische punt bleef relevant: wat is oneindigheid? Kan het universum echt oneindig deelbaar zijn? Kwantummechanica suggereert een minimale lengte (Planck-lengte)." },
      { domain: "philosophy", icon: "🤔", text: "Aristoteles onderscheidde potentiële oneindigheid (altijd verder kunnen delen) van actuele oneindigheid (een echt voltooid oneindig). Hij accepteerde de eerste, verwierp de tweede. Dit onderscheid bleef invloedrijk in de wiskundefilosofie." },
      { domain: "daily", icon: "🏠", text: "Procrastinatie als Zeno's paradox: een taak voelt oneindig als je hem in steeds kleinere stappen opdeelt. 'Ik begin als ik klaar ben met...' → nooit klaar. De paradox van uitstelgedrag: de stap die nooit genomen wordt maar in theorie altijd voor je ligt." }
    ],
    prerequisites: [],
    unlocks: ["zeno-pijl"],
    relatedPrinciples: ["zeno-pijl", "laplace-demon"],
    exercises: [{
      type: "multiple-choice",
      question: "Hoe lost de moderne wiskunde Zeno's paradox van Achilles en de schildpad op?",
      options: ["Door te bewijzen dat beweging niet bestaat", "Door te tonen dat oneindige reeksen eindige sommen kunnen hebben", "Door oneindigheid te vermijden", "Door Zeno's redenering als onlogisch te verwerpen"],
      correct: 1,
      feedback: "Juist! Een oneindige rij termen kan convergeren naar een eindige som: 1/2 + 1/4 + 1/8 + ... = 1. Achilles' oneindig veel stappen kosten oneindig kleine tijdstukjes die samen optellen tot een eindige tijd. Oneindig veel stappen kunnen in eindige tijd worden voltooid."
    }],
    creativePrompt: "Ken jij een situatie in jouw leven die aanvoelt als Zeno's paradox — waarbij je oneindig veel stappen zet maar het doel nooit bereikt? Wat is de echte blokkade?",
    aiHelperPrompts: [
      "Is het universum werkelijk oneindig deelbaar of heeft het een minimale eenheid?",
      "Hoe loste de uitvinding van calculus Zeno's paradox wiskundig op?",
      "Wat is de filosofische les van Zeno, los van de wiskundige oplossing?"
    ]
  },
  {
    id: "zeno-pijl",
    title: "Zeno's Pijlparadox",
    difficulty: 3,
    emoji: "🏹",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Wiskunde", "Beweging", "Tijd", "Gedachte-experiment"],
    definition: "Een vliegende pijl bezet op elk moment een specifieke positie. Op elk moment staat de pijl stil — hij beweegt niet in een ondeelbaar moment. Als de pijl op elk moment stil staat, hoe beweegt hij dan ooit? Zeno betoogde: beweging is logisch onmogelijk als tijd bestaat uit discrete momenten.",
    abstractExample: "De pijl-paradox aanvalt de idee van instant-snelheid. Aristoteles reageerde: snelheid is niet een eigenschap van een moment maar van een tijdsinterval. Moderne calculus definieert instantsnelheid als de limiet van gemiddelde snelheden over steeds kleinere intervallen — een conceptueel precies antwoord op Zeno.",
    examples: [
      { domain: "science", icon: "🔬", text: "Newtons calculus definieert snelheid als ds/dt — de afgeleide van positie naar tijd. Dit is geen eigenschap van een enkel moment maar de limiet van de verhouding Δs/Δt als Δt naar nul gaat. Hiermee is 'instantsnelheid' wiskundig precies gedefinieerd." },
      { domain: "philosophy", icon: "🤔", text: "Is tijd continue of discreet? Als discreet: de pijl springt van positie tot positie, nooit 'between'. Als continue: elk moment is een wiskundig punt zonder tijdsduur. Zeno's paradox dwingt ons te preciseren wat we bedoelen met 'beweging' en 'moment'." },
      { domain: "daily", icon: "🏠", text: "Video bestaat uit 24 frames per seconde — discrete momenten. Toch zien we vloeiende beweging. Ons brein interpoleert tussen frames. Zeno's paradox in digitale media: is digitale continuïteit 'echte' continuïteit of een gesimuleerde illusie van voldoende discretie?" }
    ],
    prerequisites: ["zeno-achilles"],
    unlocks: [],
    relatedPrinciples: ["zeno-achilles", "einstein-trein"],
    exercises: [{
      type: "multiple-choice",
      question: "Hoe lost Aristoteles de pijlparadox op?",
      options: ["Door te zeggen dat de pijl toch beweegt op momenten", "Door snelheid te definiëren als eigenschap van een tijdsinterval, niet een moment", "Door te ontkennen dat pijlen bestaan", "Door discrete tijdstappen te accepteren"],
      correct: 1,
      feedback: "Juist! Aristoteles: snelheid is niet de eigenschap van een enkel tijdstip (een moment) maar van een tijdsinterval. De pijl heeft een snelheid in de zin dat als hij meer tijd had, hij zou bewegen. Moderne calculus formaliseert dit met het limietconcept."
    }],
    creativePrompt: "Denk aan 'dit moment'. Heeft een moment tijdsduur? Als niet, hoe kan er dan beweging en verandering plaatsvinden?",
    aiHelperPrompts: [
      "Is tijd continue of discreet? Wat zijn de implicaties van beide antwoorden?",
      "Hoe definieert calculus instantsnelheid en lost daarmee Zeno's paradox op?",
      "Heeft kwantummechanica iets te zeggen over de minimale tijdseenheid?"
    ]
  },
  {
    id: "wigner-vriend",
    title: "Wigner's Vriend",
    difficulty: 3,
    emoji: "👥",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Kwantummechanica", "Meting", "Bewustzijn", "Gedachte-experiment"],
    definition: "Eugene Wigner (1961) breidde Schrödinger's kat uit: zijn vriend zit in een geïsoleerd lab en meet een kwantumdeeltje. Voor Wigner (buiten het lab) is zijn vriend + het deeltje in superpositie totdat Wigner zelf meet. Maar voor de vriend heeft de superpositie al gecollapsed. Twee waarnemers geven tegengestelde kwantumtoestanden aan hetzelfde systeem. Wie heeft gelijk?",
    abstractExample: "Dit toont een fundamenteel probleem: is golffunctie-collapse subjectief (afhankelijk van de waarnemer) of objectief (globaal)? Wigner suggereerde dat menselijk bewustzijn een speciale rol speelt bij collapse. Moderne uitbreidingen (Frauchiger-Renner, 2018) tonen dat dit leidt tot interne inconsistenties in de kwantummechanica.",
    examples: [
      { domain: "science", icon: "🔬", text: "Frauchiger-Renner (2018) maakten een formeel experiment waarbij Wigner en zijn vriend tot tegengestelde conclusies komen over de uitkomst van een meting. Dit is een echte theoretische inconsistentie — geen gedachte-experiment. Het toont dat niet alle kwantuminterpretaties consistent zijn." },
      { domain: "philosophy", icon: "🤔", text: "Many Worlds interpretatie (Everett, 1957) lost Wigner's vriend op: collapse bestaat niet — alle uitkomsten vinden plaats in vertakkende werelden. Wigner en zijn vriend zijn in dezelfde wereld totdat ze communiceren. Dan 'splitst' Wigner's versie van de wereld." },
      { domain: "daily", icon: "🏠", text: "Wigner's vriend is een metafoor voor organisatorisch denken: twee mensen in hetzelfde project kunnen tegenstrijdige, intern consistente versies van de werkelijkheid hebben — totdat ze communiceren en hun 'werelden' samenvoegen." }
    ],
    prerequisites: ["schrodingers-kat", "epr-paradox"],
    unlocks: [],
    relatedPrinciples: ["schrodingers-kat", "epr-paradox", "filosofische-zombie"],
    exercises: [{
      type: "multiple-choice",
      question: "Wigner's vriend gedachte-experiment toont aan dat:",
      options: ["Bewustzijn noodzakelijk is voor kwantumcollapse", "Twee waarnemers tegenstrijdige kwantumtoestanden aan hetzelfde systeem kunnen toekennen", "Kwantummechanica onjuist is", "Vriendschappen kwantummechanisch zijn"],
      correct: 1,
      feedback: "Juist! Het experiment toont de 'observer-afhankelijkheid' van kwantumcollapse: voor Wigner is het systeem in superpositie, voor zijn vriend niet. Dit stelt fundamentele vragen over de objectiviteit van kwantumtoestanden."
    }],
    creativePrompt: "Als twee mensen in dezelfde situatie zitten maar totaal verschillende ervaringen hebben van wat er gebeurt — wie heeft dan gelijk? Hoe los je dat op?",
    aiHelperPrompts: [
      "Wat betekent het als twee waarnemers verschillende kwantumtoestanden aan hetzelfde systeem geven?",
      "Speelt bewustzijn een rol in kwantummechanica?",
      "Hoe lost de Many Worlds interpretatie Wigner's vriend op?"
    ]
  },
  {
    id: "boltzmann-hersenen",
    title: "De Boltzmann-hersenen",
    difficulty: 3,
    emoji: "💭",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["Kosmologie", "Waarschijnlijkheid", "Bewustzijn", "Gedachte-experiment"],
    definition: "In een oneindig universum over oneindige tijd zullen alle mogelijke configuraties van materie spontaan verschijnen — inclusief een volledig gevormde hersenen met herinneringen aan een volledig verzonnen leven. Zulke 'Boltzmann-hersenen' zijn puur thermodynamisch mogelijk. Als ze ooit verschijnen, zouden er astronomisch meer zijn dan echte mensen. Hoe weet je dan dat jij geen Boltzmann-hersenenen bent?",
    abstractExample: "Ludwig Boltzmann gebruikte statistische mechanica om te tonen hoe orde spontaan kan ontstaan uit chaos. De implicatie: in een oneindig oud universum is een spontaan fluctuerende geest waarschijnlijker dan een geordend kosmologisch verleden. Dit is een absurde implicatie die kosmologische theorieën moet verwerpen.",
    examples: [
      { domain: "science", icon: "🔬", text: "Modern kosmologie gebruikt dit als een 'reductio': elke kosmologische theorie die Boltzmann-hersenen voorspelt als meer waarschijnlijk dan echte waarnemers is waarschijnlijk onjuist. Inflatietheorieën worden gedeeltelijk beoordeeld op of ze dit probleem vermijden." },
      { domain: "philosophy", icon: "🤔", text: "Het Boltzmann-hersenen-probleem is verwant aan de sceptische hypothese: hoe weet je dat jouw herinneringen en ervaringen kloppen? Descartes' boze demon in kosmologische vermomming. Maar het is concreter: het is een kwantificeerbare waarschijnlijkheidsvraag." },
      { domain: "daily", icon: "🏠", text: "Als je gelooft dat jouw ervaringen reëel zijn, dan is dat al een aanname die empirisch niet volledig gerechtvaardigd kan worden. Pragmatisch: het leven is zinvoller als je aanneemt dat ervaringen echt zijn, ongeacht de kosmologische kansen." }
    ],
    prerequisites: ["hersenen-in-vat", "schrodingers-kat"],
    unlocks: [],
    relatedPrinciples: ["hersenen-in-vat", "simulatiehypothese", "descartes-boze-demon"],
    exercises: [{
      type: "multiple-choice",
      question: "Waarom zijn Boltzmann-hersenen een probleem voor kosmologische theorieën?",
      options: ["Omdat hersenen te complex zijn om te begrijpen", "Omdat ze impliceren dat er meer 'neppe' bewuste entiteiten zijn dan echte waarnemers", "Omdat ze de Big Bang tegenspreken", "Omdat ze thermodynamica weerleggen"],
      correct: 1,
      feedback: "Juist! Als een theorie voorspelt dat Boltzmann-hersenen waarschijnlijker zijn dan echte, evolutionair gevormde waarnemers, dan is de kans dat wij echte waarnemers zijn klein. Dit is een absurde implicatie — een goede reden om zulke theorieën te verwerpen."
    }],
    creativePrompt: "Als je de kans niet kunt uitsluiten dat je een Boltzmann-hersenen bent met valse herinneringen, heeft dat invloed op hoe je leeft?",
    aiHelperPrompts: [
      "Hoe verschilt het Boltzmann-hersenen-probleem van hersenen-in-een-vat scepticisme?",
      "Waarom nemen kosmologen dit gedachte-experiment serieus?",
      "Welk praktisch verschil maakt het of je een Boltzmann-hersenenen of een 'echte' persoon bent?"
    ]
  },
  {
    id: "simulatiehypothese",
    title: "De Simulatiehypothese (Bostrom)",
    difficulty: 2,
    emoji: "💻",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["Simulatie", "Werkelijkheid", "Technologie", "Gedachte-experiment"],
    definition: "Nick Bostrom (2003) betoogt dat minstens één van drie stellingen waar is: (1) de mens sterft uit voordat hij gesimuleerde bewustzijnen kan maken; (2) gevorderde beschavingen zijn niet geïnteresseerd om gesimuleerde werelden te draaien; (3) wij leven waarschijnlijk al in een computersimulatie. Als er ooit miljoenen gesimuleerde werelden worden gedraaid, zijn de meeste 'mensen' gesimuleerd.",
    abstractExample: "Probabilistisch argument: als simulaties technisch mogelijk zijn en er ooit worden gedraaid, dan zijn er astronomisch meer gesimuleerde dan niet-gesimuleerde bewustzijnen. Kansrekening: de kans dat jij in de 'basisrealiteit' leeft is dan verwaarloosbaar. Weerlegging: kwantummechanische complexiteit maakt simulaties mogelijk onmogelijk.",
    examples: [
      { domain: "science", icon: "🔬", text: "Fysici als Seth Lloyd hebben bekeken of ons universum beperkingen heeft die op digitale computatie wijzen. Kwantummechanische grenzen aan informatieverwerking (holografisch principe, Bekenstein-limiet) zouden simulatie extreem moeilijk maken — maar sluiten het niet logisch uit." },
      { domain: "philosophy", icon: "🤔", text: "Descartes' boze demon geüpdatete: in plaats van een demon is er een computerprogrammeur. Maar de ethische implicaties zijn anders: als we zelf ooit bewuste wezens simuleren, zijn we moreel verantwoordelijk voor hun welzijn. Dit verbindt de simulatiehypothese met AI-ethiek." },
      { domain: "daily", icon: "🏠", text: "Elon Musk, Neil deGrasse Tyson en anderen nemen de simulatiehypothese serieus. Maar pragmatisch maakt het weinig verschil: de fysieke wetten, relaties en ervaringen zijn even reëel binnen een simulatie als buiten. Reden genoeg om ethisch te handelen." }
    ],
    prerequisites: ["hersenen-in-vat"],
    unlocks: [],
    relatedPrinciples: ["hersenen-in-vat", "boltzmann-hersenen", "descartes-boze-demon"],
    exercises: [{
      type: "multiple-choice",
      question: "Bostrom's simulatiehypothese is gebaseerd op welk argument?",
      options: ["Religieuze overtuiging dat de wereld nep is", "Als gesimuleerde bewustzijnen mogelijk zijn en er ooit worden gemaakt, zijn de meeste bewustzijnen gesimuleerd", "Computerwetenschappelijk bewijs voor simulatie", "Kwantummechanische aanwijzingen voor een code achter de realiteit"],
      correct: 1,
      feedback: "Juist! Bostrom's argument is probabilistisch: als gevorderde beschavingen ooit enorme aantallen bewuste simulaties draaien, zijn er statistisch veel meer gesimuleerde dan niet-gesimuleerde bewustzijnen. Dus de kans dat wij in de basis-realiteit leven, is klein."
    }],
    creativePrompt: "Als je zeker wist dat je in een simulatie leeft — zou je anders handelen? Waarom wel of niet?",
    aiHelperPrompts: [
      "Maakt het moreel verschil of jouw ervaringen in een simulatie of de 'echte wereld' plaatsvinden?",
      "Welke fysische aanwijzingen zouden kunnen wijzen op een simulatie?",
      "Als jij zelf gesimuleerde bewustzijnen zou maken, welke morele verplichtingen heb je dan?"
    ]
  }
];
