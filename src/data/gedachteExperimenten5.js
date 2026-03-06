// Gedachte-experimenten – Batch 5: Tijdreizen & Logische Paradoxen (10 experimenten)

export const gedachteExperimenten5 = [
  {
    id: "grootvaderparadox",
    title: "De Grootvaderparadox",
    difficulty: 2,
    emoji: "👴",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Tijdreizen", "Causaliteit", "Paradox", "Gedachte-experiment"],
    definition: "Je reist terug in de tijd en doodt jouw grootvader voordat hij kinderen heeft. Dan wordt jouw ouder nooit geboren, en jij ook niet. Als jij niet bestaat, kun je niet terugrijzen om jouw grootvader te doden — maar dan leeft hij, dus word jij geboren, dus reis je terug. Een cirkelredenering zonder oplossing: tijdreizen naar het verleden lijkt logisch onmogelijk.",
    abstractExample: "De paradox heeft drie uitwegen: (1) Novikov consistentieprincipe: tijdreizigers kunnen alleen dingen doen die al zijn gebeurd — je kunt de grootvader niet doden; (2) Branching timelines: doden creëert een alternatieve tijdlijn; (3) Tijdreizen zijn fundamenteel onmogelijk (Hawking's Chronology Protection Conjecture).",
    examples: [
      { domain: "science", icon: "🔬", text: "Stephen Hawking (Chronology Protection Conjecture, 1992): de wetten der natuur verbieden tijdreizen naar het verleden — vacuümfluctuaties zouden een tijdmachine vernietigen zodra ze geopend wordt. Tijdreizen zijn niet alleen praktisch maar fundamenteel onmogelijk." },
      { domain: "philosophy", icon: "🤔", text: "Novikov's zelfconsistentie-principe: als tijdreizen mogelijk zijn, dan zijn alleen zelfconsistente verhalen mogelijk. De tijdreiziger kan de grootvader proberen te doden, maar zal altijd falen — een onzichtbare hand houdt de tijdlijn consistent." },
      { domain: "daily", icon: "🏠", text: "Retroactief spijt: 'als ik dat niet had gedaan, was ik nu gelukkiger.' Maar als je de keuze terugdraait, verander je ook alles wat daarna volgde — inclusief wie je nu bent. De grootvaderparadox in miniformaat: je kunt jouw heden niet veranderen zonder jouw heden te vernietigen." }
    ],
    prerequisites: [],
    unlocks: ["bootstrap-paradox"],
    relatedPrinciples: ["bootstrap-paradox", "laplace-demon"],
    exercises: [{
      type: "multiple-choice",
      question: "Novikov's consistentieprincipe lost de grootvaderparadox op door:",
      options: ["Tijdreizen te verbieden", "Te stellen dat alleen zelfconsistente tijdreis-acties mogelijk zijn", "De grootvader te beschermen via tijdwacht", "Tijdlijnen te laten vertakken"],
      correct: 1,
      feedback: "Juist! Novikov: als tijdreizen mogelijk zijn, is de tijdlijn al consistent — de tijdreiziger zal altijd falen om de grootvader te doden, want als hij zou slagen, zou hij nooit zijn geboren om te proberen. Alleen zelfconsistente lussen zijn mogelijk."
    }],
    creativePrompt: "Als jij terug kon reizen en één keuze in jouw verleden kon veranderen — welke? En zou je het écht willen als je bedenkt dat het ook verandert wie je nu bent?",
    aiHelperPrompts: [
      "Wat zijn de drie main oplossingen voor de grootvaderparadox?",
      "Heeft Hawking's chronologiebeschermingsvermoeden empirische ondersteuning?",
      "Hoe verhoudt de grootvaderparadox zich tot het vrije wil debat?"
    ]
  },
  {
    id: "bootstrap-paradox",
    title: "De Bootstrap-paradox",
    difficulty: 3,
    emoji: "🔁",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Tijdreizen", "Causaliteit", "Lus", "Gedachte-experiment"],
    definition: "Een tijdreiziger reist naar het verleden en geeft Beethoven de partituur van zijn vijfde symfonie. Beethoven kopiëert het uit en publiceert het als zijn eigen werk. De tijdreiziger hoorde de symfonie in de toekomst en nam hem mee. Maar wie heeft de symfonie gecomponeerd? Ze heeft geen oorsprong — ze bestaat in een eeuwige causaliteitslus zonder begin.",
    abstractExample: "Een causale lus: A veroorzaakt B, B veroorzaakt A. Er is geen externe oorzaak — informatie of objecten existeren in een gesloten tijdlus zonder begin. Dit schendt het principe van causaliteit (alles heeft een oorzaak buiten zichzelf). Logisch consistent, maar ontologisch problematisch: wat is de bron van de informatie?",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "De bootstrap-paradox toont dat zelfs causaal-consistente tijdreizen paradoxaal kunnen zijn. Informatie kan 'uit het niets' verschijnen via een gesloten lus. Dit roept vragen op over informatieconservering en ontologische herkomst." },
      { domain: "daily", icon: "🏠", text: "Populaire cultuur is vol bootstrap-paradoxen: in de film 'Terminator' stuurt Skynet een robot om John Connor te doden, maar de robot's overresten leiden tot de creatie van Skynet. Skynet bestaat dankzij zijn eigen poging zichzelf te beschermen — een lus." },
      { domain: "science", icon: "🔬", text: "In kwantummechanica zijn er gesloten tijdachtige krommen (CTCs) theoretisch toegestaan in sommige ruimtetijdoplossingen (Gödel-metriek). David Deutsch ontwikkelde een kwantummechanisch model van CTCs dat informatie-conservering respecteert maar causale lussen toelaat." }
    ],
    prerequisites: ["grootvaderparadox"],
    unlocks: [],
    relatedPrinciples: ["grootvaderparadox", "leugenaar-paradox"],
    exercises: [{
      type: "multiple-choice",
      question: "Wat is het paradoxale aan de bootstrap-paradox?",
      options: ["Dat muziek gestolen wordt", "Dat een object of informatie bestaat zonder een originele oorzaak buiten de tijdlus", "Dat Beethoven niet echt componeerde", "Dat tijdreizen duur zijn"],
      correct: 1,
      feedback: "Juist! De paradox: de symfonie heeft geen oorsprong buiten de tijdlus. Ze wordt gekopiëerd en meegenomen, maar is nooit voor het eerst gecreëerd. Dit schendt het causaliteitsprincipe: alle informatie moet ergens vandaan komen."
    }],
    creativePrompt: "Bedenk een bootstrap-paradox scenario uit jouw eigen leven of sector — een systeem dat zichzelf lijkt te veroorzaken. Hoe zou je de 'echte' oorzaak vinden?",
    aiHelperPrompts: [
      "Kan informatie bestaan zonder een bron buiten zichzelf?",
      "Hoe verschilt de bootstrap-paradox van de kip-en-ei vraag?",
      "Is een tijdlus zonder externe oorzaak logisch consistent?"
    ]
  },
  {
    id: "leugenaar-paradox",
    title: "De Leugenaarparadox",
    difficulty: 2,
    emoji: "🤥",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Logica", "Zelfverwijzing", "Taal", "Gedachte-experiment"],
    definition: "Epimenides de Kretenzer zei: 'Alle Kretenzers zijn leugenaars.' Als hij de waarheid spreekt, liegen alle Kretenzers — dus ook hijzelf, dus liegt hij. Als hij liegt, is zijn zin vals — dus zijn niet alle Kretenzers leugenaars, dus kan hij de waarheid spreken. De moderne versie: 'Deze zin is vals.' Als ze waar is, is ze vals. Als ze vals is, is ze waar.",
    abstractExample: "De leugenaarparadox heeft een zelfverwijzend karakter: de zin beoordeelt zichzelf. Bertrand Russell en Alfred North Whitehead probeerden dit op te lossen via de 'theory of types': zinnen mogen niet over zichzelf spreken. Alfred Tarski onderscheidde object-taal en meta-taal om semantische paradoxen te vermijden.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Tarski's oplossing (1935): 'waar' in een taal L kan niet worden gedefinieerd in diezelfde taal L zonder paradox. Er is altijd een meta-taal nodig om over waarheid in L te spreken. Dit vermijdt zelfverwijzing en dus de paradox." },
      { domain: "science", icon: "🔬", text: "Gödel's incompletheidsstellingen (1931) zijn verwant: in elk consistent formeel systeem dat krachtig genoeg is, zijn er ware stellingen die niet bewezen kunnen worden. Gödel construeerde een stelling die zegt 'deze stelling is onbewijsbaar' — analoog aan de leugenaar." },
      { domain: "daily", icon: "🏠", text: "'Vertrouw nooit iemand die zegt: vertrouw mij.' Als de persoon betrouwbaar is, is zijn advies goed — maar dan is hij zelf te vertrouwen. Zelfverwijzende uitspraken in het dagelijks leven zijn vaak manipulatief of gewoon grappig — zelden echt paradoxaal." }
    ],
    prerequisites: [],
    unlocks: ["russell-paradox"],
    relatedPrinciples: ["russell-paradox", "barbier-paradox"],
    exercises: [{
      type: "multiple-choice",
      question: "Hoe lost Tarski de leugenaarparadox op?",
      options: ["Door te zeggen dat de zin zinloos is", "Door een hiërarchie van talen te onderscheiden zodat zinnen niet over zichzelf kunnen spreken", "Door logica te herdefiniëren", "Door de zin als onbeslisbaar te beschouwen"],
      correct: 1,
      feedback: "Juist! Tarski's onderscheid: een zin in taal L kan zijn waarheidswaarde niet in L zelf uitdrukken — daarvoor heb je een meta-taal nodig. Hierdoor is 'deze zin is vals' geen goed gevormde zin in een rigoreus taalkundig systeem."
    }],
    creativePrompt: "Bedenk een zelfverwijzende zin of situatie in het dagelijks leven. Is het een echte paradox of alleen verwarrend?",
    aiHelperPrompts: [
      "Wat maakt de leugenaarparadox fundamenteel anders dan gewone contradictie?",
      "Hoe verbindt Gödel's stelling zich met de leugenaarparadox?",
      "Zijn er echte problemen in de informatica of wiskunde die door zelfverwijzing ontstaan?"
    ]
  },
  {
    id: "russell-paradox",
    title: "Russell's Paradox",
    difficulty: 3,
    emoji: "🔢",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Verzamelingenleer", "Logica", "Wiskunde", "Gedachte-experiment"],
    definition: "Bertrand Russell (1901) bedacht: beschouw de verzameling R van alle verzamelingen die zichzelf niet bevatten. Bevat R zichzelf? Als R zichzelf bevat, dan mag het niet in R zitten (want R bevat alleen verzamelingen die zichzelf niet bevatten). Als R zichzelf niet bevat, dan moet het in R zitten. Paradox — en een crisis in de fundamenten van de wiskunde.",
    abstractExample: "Russell's paradox toonde aan dat naïeve verzamelingenleer (Cantor's 'elke eigenschap bepaalt een verzameling') inconsistent is. Dit leidde tot axiomatische verzamelingenleer (Zermelo-Fraenkel, ZF), die expliciet verbiedt dat een verzameling zichzelf bevat (Axioma van Fundament).",
    examples: [
      { domain: "science", icon: "🔬", text: "Gottlob Frege, wiens werk Russell's paradox vernietigde, schreef: 'De grond zakt weg onder mij.' Russell meldde de paradox vlak voor publicatie van Frege's grondslagenwerk. Dit leidde tot tien jaar fundamentencrisis in de wiskunde." },
      { domain: "philosophy", icon: "🤔", text: "Wittgenstein reageerde anders: de paradox toont dat naïeve taal over verzamelingen misleidend is. 'Verzameling van alle verzamelingen' is geen zinvol concept maar een taalfout. Filosofische therapie, geen wiskundig probleem." },
      { domain: "daily", icon: "🏠", text: "De barbier-versie: een barbier scheert alle mannen die zichzelf niet scheren. Scheert hij zichzelf? Dezelfde structuur als Russell's paradox — maar direct invoelbaar. Zulke barbiers kunnen niet bestaan, net zoals naïeve universele verzamelingen niet kunnen bestaan." }
    ],
    prerequisites: ["leugenaar-paradox"],
    unlocks: [],
    relatedPrinciples: ["leugenaar-paradox", "barbier-paradox"],
    exercises: [{
      type: "multiple-choice",
      question: "Hoe losten wiskundigen Russell's paradox op?",
      options: ["Door verzamelingenleer te verlaten", "Door te stellen dat oneindig veel verzamelingen niet bestaan", "Door axiomatische regels in te voeren die verbieden dat een verzameling zichzelf bevat", "Door Russell's werk als fout te verklaren"],
      correct: 2,
      feedback: "Juist! Zermelo-Fraenkel axiomatische verzamelingenleer lost dit op door expliciete axioma's: een verzameling mag zichzelf niet bevatten (Axioma van Fundament), en niet elke eigenschap definieert een verzameling. Naïeve verzamelingenleer is vervangen door gecontroleerde axioma's."
    }],
    creativePrompt: "Kun je een Russell-paradox structuur herkennen in het dagelijks leven? Een situatie waarbij een definitie zichzelf tegenspreekt?",
    aiHelperPrompts: [
      "Waarom is het axioma 'elke eigenschap bepaalt een verzameling' gevaarlijk?",
      "Hoe verbindt Russell's paradox met Gödel's incompletheidsstellingen?",
      "Heeft de computer science vergelijkbare zelfverwijzingsproblemen?"
    ]
  },
  {
    id: "barbier-paradox",
    title: "De Barbierparadox",
    difficulty: 1,
    emoji: "✂️",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Logica", "Zelfverwijzing", "Paradox", "Gedachte-experiment"],
    definition: "In een dorp scheert de barbier alle mannen die zichzelf niet scheren — en alleen die mannen. Scheert de barbier zichzelf? Als hij zichzelf scheert, scheert hij een man die zichzelf scheert — maar dat mag hij niet. Als hij zichzelf niet scheert, is hij een man die zichzelf niet scheert — dus moet hij zichzelf scheren. Een toegankelijke versie van Russell's paradox.",
    abstractExample: "De paradox toont dat de beschrijving van de barbier intern inconsistent is. De oplossing is eenvoudig: zo'n barbier bestaat niet. De definitie creëert een onmogelijk object. Dit is hetzelfde als Russell's paradox: naïeve definities kunnen inconsistente entiteiten beschrijven.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "De barbierparadox is bedoeld als populaire versie van Russell's paradox. Net als verzamelingen die zichzelf definiëren via zelfverwijzende eigenschappen, kan de barbier niet bestaan. De paradox is een reductio ad absurdum van de definitie." },
      { domain: "daily", icon: "🏠", text: "'Alles wat je zegt is een leugen' — als dat waar is, is ook die uitspraak een leugen. 'Ik ben een perfect advocaat van de duivel' — als dat klopt, verdedig je ook standpunten tegen jezelf. Zelfverwijzende rollen leiden tot barbierparadox-structuren." },
      { domain: "science", icon: "🔬", text: "In computerwetenschappen: een programma dat alle programma's analyseert die zichzelf niet analyseren — kan het zichzelf analyseren? Dit is het Halt-probleem (Turing, 1936): er bestaat geen algoritme dat voor elk programma bepaalt of het stopt. Hetzelfde zelfverwijzingsargument." }
    ],
    prerequisites: [],
    unlocks: ["russell-paradox"],
    relatedPrinciples: ["russell-paradox", "leugenaar-paradox"],
    exercises: [{
      type: "multiple-choice",
      question: "De oplossing van de barbierparadox is:",
      options: ["De barbier scheert zichzelf altijd", "De barbier scheert zichzelf nooit", "Zo'n barbier kan niet bestaan — de definitie is inconsistent", "De barbier woont buiten het dorp"],
      correct: 2,
      feedback: "Juist! De enige consistente conclusie: de barbier zoals beschreven bestaat niet. De definitie is intern tegenstrijdig — ze beschrijft een onmogelijk object. Dit is geen onoplosbaar raadsel maar een signaal dat de definitie onjuist is."
    }],
    creativePrompt: "Bedenk een beschrijving van een persoon of rol die intern tegenstrijdig is, net als de barbier. Wat onthult de tegenstrijdigheid over de aanname achter de beschrijving?",
    aiHelperPrompts: [
      "Hoe helpt de barbierparadox om de grenzen van definities te begrijpen?",
      "Verbind de barbierparadox met het Halt-probleem in de informatica.",
      "Zijn er reële sociale situaties die de structuur van de barbierparadox hebben?"
    ]
  },
  {
    id: "sorites-paradox",
    title: "De Sorites-paradox (Het Hoop-probleem)",
    difficulty: 2,
    emoji: "⛰️",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Logica", "Vaagheid", "Taal", "Gedachte-experiment"],
    definition: "Eén zandkorrel is geen hoop. Als n zandkorrels geen hoop zijn, dan zijn n+1 zandkorrels ook geen hoop (één korrel meer maakt geen verschil). Conclusie via inductie: geen enkel aantal zandkorrels is een hoop. Maar dat is absurd — 1 miljoen korrels zijn wel degelijk een hoop. Het probleem onthult vaagheid in onze taalcategorieën.",
    abstractExample: "Sorites (van Grieks 'soros' = hoop) toont dat vage predicaten (hoop, groot, kaal, rood) geen scherpe grenzen hebben. Drie antwoorden: (1) Epistemic view: er IS een grens maar we weten niet waar; (2) Supervaluationism: er is geen scherpe grens maar uitspraken kunnen 'supertrue' zijn; (3) Fuzzy logic: waarheden zijn gradueel (0.7 kaal).",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Timothy Williamson (Vagueness, 1994) verdedigt epistemische vaagheid: er IS een exacte grens voor 'kaal', we weten het alleen niet. Onze onwetendheid is fundamenteel (niet verwijderbaar door meer informatie). Vage termen zijn niet vaag in de wereld, alleen in onze kennis." },
      { domain: "daily", icon: "🏠", text: "Beleidsdiscussies lijden aan sorites: wanneer is iemand 'oud genoeg' om te stemmen? 'Arm'? 'Dronken'? Rechtsstelsels moeten scherpe grenzen trekken waar de natuur er geen heeft. Die arbitrariteit is onvermijdelijk maar moet transparant zijn." },
      { domain: "science", icon: "🔬", text: "Bioloog: wanneer wordt een foetus een baby? Geoloog: wanneer is een heuvel een berg? Taalkundige: wanneer wordt een dialect een taal? In alle wetenschapstakken dwingt sorites tot expliciete definitie-keuzes die niet volledig door de feiten worden bepaald." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["leugenaar-paradox", "wittgenstein-privétaal"],
    exercises: [{
      type: "multiple-choice",
      question: "De sorites-paradox onthult primair:",
      options: ["Dat zandkorrels niet bestaan", "Dat vage taalpredicaten geen scherpe grenzen hebben", "Dat inductie altijd fout is", "Dat hopen ontelbaar zijn"],
      correct: 1,
      feedback: "Juist! De paradox toont dat woorden als 'hoop', 'groot', 'kaal' vaag zijn — ze hebben geen precisie-grens. De inductieve stap (n+1 corns is niet meer een hoop dan n) lijkt plausiebel maar leidt tot absurditeiten. Vaagheid is een fundamenteel kenmerk van natuurlijke taal."
    }],
    creativePrompt: "Bedenk een sorites-keten in jouw vakgebied of leven: een graduele overgang waarbij geen duidelijke grens bestaat. Hoe ga je praktisch om met die vaagheid?",
    aiHelperPrompts: [
      "Hoe trekken rechtssystemen scherpe grenzen bij vage begrippen als 'volwassen' of 'arm'?",
      "Is fuzzy logica een oplossing voor de sorites-paradox?",
      "Zijn er domeinspecifieke sorites-problemen in de wetenschap of technologie?"
    ]
  },
  {
    id: "schip-van-neurath-identiteit",
    title: "Identiteitsparadox: Wie Ben Ik Over Tijd?",
    difficulty: 2,
    emoji: "🧭",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["Identiteit", "Tijd", "Continuïteit", "Gedachte-experiment"],
    definition: "Jij van tien jaar geleden had andere waarden, andere kennis, andere relaties, ander lichaam. Bent u dezelfde persoon? Als ja — wat verbindt jullie? Als nee — wie bent u dan? Dit is het probleem van persoonlijke identiteit over tijd: is er een continuïteit die jou dezelfde maakt, of is 'dezelfde persoon' slechts een nuttige fictie?",
    abstractExample: "Drie criteria voor identiteit over tijd: (1) Lichaamscontinuïteit — dezelfde biologische entiteit; (2) Psychologische continuïteit (Locke/Parfit) — aaneengeschakelde herinneringen en karakter; (3) Narratieve identiteit (Ricoeur) — jij bent het verhaal dat jij over jezelf vertelt. Elk criterium heeft zwakheden.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Derek Parfit: identiteit over tijd is minder belangrijk dan we denken. Wat telt is psychologische connectiviteit — en die bestaat in gradaties. Jij over 50 jaar is 'minder verbonden' met jij nu dan jij gisteren. 'Hetzelfde zijn' is gradueel, niet absoluut." },
      { domain: "daily", icon: "🏠", text: "Rechtsystemen gaan uit van continue identiteit: jij bent verantwoordelijk voor wat 'jij' twintig jaar geleden deed, ook al ben jij radicaal veranderd. Maar herstelrecht erkent soms dat een fundamenteel veranderd persoon anders behandeld moet worden." },
      { domain: "science", icon: "🔬", text: "Neurowetenschapper Anil Seth: het 'zelf' is een geconstrueerde voorspelling van het brein — een model dat stabiel voelt maar voortdurend wordt bijgewerkt. Er is geen stabiel zelf in de hersenen, alleen een coherente stroom van zelf-modellering." }
    ],
    prerequisites: ["schip-van-theseus", "persoonlijke-identiteit-parfit"],
    unlocks: [],
    relatedPrinciples: ["schip-van-theseus", "persoonlijke-identiteit-parfit", "bundel-theorie-hume"],
    exercises: [{
      type: "multiple-choice",
      question: "Narratieve identiteitstheorie stelt dat jij dezelfde persoon bent door de tijd omdat:",
      options: ["Jouw lichaam niet verandert", "Jij hetzelfde verhaal over jezelf vertelt en ervaart", "Jij hetzelfde DNA hebt", "Anderen je herkennnen"],
      correct: 1,
      feedback: "Juist! Paul Ricoeur's narratieve identiteit: jij bent dezelfde persoon doordat jij de protagonist bent van een aaneengeschakeld levensverhaal. Identiteit is geen metafysisch feit maar een narratieve constructie die cohesie verleent aan ervaringen over tijd."
    }],
    creativePrompt: "Schrijf het verhaal van jouw leven in drie zinnen. Wie is de hoofdpersoon — en is die persoon ook jij over tien jaar?",
    aiHelperPrompts: [
      "Welk identiteitscriterium vind jij het meest overtuigend — lichaam, psychologie of narratief?",
      "Hoe verandert straf en beloning als identiteit over tijd gradueel is?",
      "Is er een ethische verplichting tegenover je 'toekomstige zelf' die je nu niet kent?"
    ]
  },
  {
    id: "voorspellingsparadox",
    title: "De Voorspellingsparadox (Newcomb's Probleem)",
    difficulty: 3,
    emoji: "📦",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Beslissen",
    tags: ["Beslistheorie", "Vrije Wil", "Speltheorie", "Gedachte-experiment"],
    definition: "Een wezen met perfecte voorspellende kracht heeft twee dozen klaarstaan: doos A (€1.000, altijd zichtbaar) en doos B (€1.000.000 of leeg). Als het wezen voorspelt dat jij beide dozen pakt, is B leeg. Als het voorspelt dat je alleen B pakt, zit er €1M in. Pak jij één of beide dozen? Rationele beslistheoretici zijn het oneens: één doos (causalisten) of twee dozen (evidentialisten)?",
    abstractExample: "Evidentialisten: pak één doos — het bewijs dat je één doos pakt correleert met €1M erin. Causalisten: pak beide — de voorspelling is al gedaan, jouw keuze verandert de inhoud niet causaal. Newcomb's probleem toont een spanning tussen twee plausibele principes van rationele beslissing.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Robert Nozick (1969) introduceerde dit probleem. Filosoof David Lewis (causaal) vs. philosopher Robert Gibbard (evidentieel) vertegenwoordigen de twee kampen. Meer dan 50 jaar later is er geen consensus — het raakt aan vrije wil, causaliteit en beslistheorie." },
      { domain: "science", icon: "🔬", text: "Als het wezen een functionerende Laplace-demon is, zijn jouw toekomstige acties al vastgelegd. Maar dan is 'kiezen' illusoir. Als je vrije wil hebt, is de voorspelling per definitie faalbaar. Het probleem wordt incoherent als vrije wil en perfect voorspelling samengaan." },
      { domain: "business", icon: "💼", text: "Beleggen: als jij gelooft dat de markt jouw verwachtingen 'weet', heeft het dan zin om te beleggen? Als slimme analisten de markt al verslaan, hebben extra analyses dan waarde? Newcomb-structuren zijn aanwezig in markten met asymmetrische informatie." }
    ],
    prerequisites: ["laplace-demon"],
    unlocks: [],
    relatedPrinciples: ["gevangenendilemma", "laplace-demon"],
    exercises: [{
      type: "multiple-choice",
      question: "Het causale argument bij Newcomb's probleem pleit voor:",
      options: ["Alleen doos B pakken", "Beide dozen pakken omdat de voorspelling de inhoud niet causaal kan veranderen", "Geen van beide dozen pakken", "De dozen omwisselen"],
      correct: 1,
      feedback: "Juist! Causalisten: de voorspelling is al gedaan, de inhoud is vastgesteld. Jouw keuze nu kan de inhoud niet causaal beïnvloeden. Dus pak beide dozen — je hebt altijd €1.000 extra. Maar evidentialisten zeggen: het bewijs dat je één doos pakt correleert sterk met €1M erin."
    }],
    creativePrompt: "Welke keuze zou jij maken bij Newcomb's probleem? Wat zegt jouw keuze over jouw theorie van rationele beslissing?",
    aiHelperPrompts: [
      "Wat is het verschil tussen causale en evidentiele beslistheorie?",
      "Hoe verhoudt Newcomb's probleem zich tot de spanning tussen vrije wil en determinisme?",
      "Zijn er praktische situaties die de structuur van Newcomb's probleem hebben?"
    ]
  },
  {
    id: "infinite-bibliotheek",
    title: "De Oneindige Bibliotheek (Borges)",
    difficulty: 2,
    emoji: "📚",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Kritisch Denken",
    tags: ["Oneindige reeksen", "Informatie", "Betekenis", "Gedachte-experiment"],
    definition: "Stel een bibliotheek die alle mogelijke boeken bevat: elk boek heeft 410 pagina's, 40 regels per pagina, 80 tekens per regel. Alle mogelijke combinaties van 25 tekens zijn aanwezig. De bibliotheek bevat dus alle waarheden, alle leugens, alle verhalen, alle onzin — maar ook de betekenis van alle andere boeken, en dat boek, in alle talen. Hoe vind je er iets in? Jorge Luis Borges, 1941.",
    abstractExample: "De bibliotheek bevat: de kuur voor kanker, het exacte tijdstip van jouw dood, perfecte vertalingen van alles — maar ook voor elk waar boek zijn miljoenen bijna-identieke maar foutieve versies. Zonder catalogus is elk waar boek onvindbaar in de zee van onzin. Informatie zonder structuur is gelijk aan geen informatie.",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "De bibliotheek is een metafoor voor het universum van betekenis: alles is er, maar niets is gevonden zonder structuur. Betekenis is niet hetzelfde als symbolische aanwezigheid. De bibliotheek heeft oneindig potentieel maar nul bruikbare kennis zonder navigatie." },
      { domain: "science", icon: "🔬", text: "Het internet is een benadering van Borges' bibliotheek: alles staat erin, maar zoekmachines (structuur, ranking) maken informatie bruikbaar. Google's PageRank is de catalogus die de bibliotheek doorzoekbaar maakt — zonder het zou informatie onvindbaar zijn." },
      { domain: "daily", icon: "🏠", text: "Een ongeorganiseerde boekenwinkel heeft dezelfde boeken als een georganiseerde, maar is veel minder waardevoller. Informatie zonder organisatie is niet bruikbaar. De waarde van kennis zit in structuur, context en toegankelijkheid — niet alleen in aanwezigheid." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["onderdeterminisme", "inductieprobleem"],
    exercises: [{
      type: "multiple-choice",
      question: "De oneindige bibliotheek illustreert dat:",
      options: ["Meer informatie altijd beter is", "Informatie zonder structuur en context niet bruikbaar is", "Boeken overbodig zijn in het digitale tijdperk", "Waarheid onvindbaar is"],
      correct: 1,
      feedback: "Juist! De bibliotheek bevat alle waarheden — maar ook miljarden keer meer onzin. Zonder structuur (catalogus, navigatie, context) is de bibliotheek nutteloos. Het is een metafoor voor de uitdaging van informatiemanagement: meer is niet altijd beter."
    }],
    creativePrompt: "Als alle teksten die ooit geschreven zijn of geschreven kunnen worden al ergens in een bibliotheek bestaan, wat maakt schrijven dan nog waardevol?",
    aiHelperPrompts: [
      "Wat is het verschil tussen informatie en kennis?",
      "Hoe is het internet een moderne versie van Borges' bibliotheek?",
      "Hoe maakt structuur informatie bruikbaar?"
    ]
  },
  {
    id: "omnis-determinatio-negatio",
    title: "Elke Definitie Sluit Uit (Spinoza)",
    difficulty: 2,
    emoji: "🚫",
    academicCategory: "Gedachte-experiment",
    skillCategory: "Beter Redeneren",
    tags: ["Logica", "Definitie", "Identiteit", "Gedachte-experiment"],
    definition: "Spinoza's principe: 'determinatio negatio est' — elke bepaling is een ontkenning. Om iets te definiëren, moet je aangeven wat het NIET is. Een cirkel is geen vierkant. Een held is geen lafaard. Elk begrip krijgt zijn inhoud door contrast en uitsluiting. Wat heeft geen grenzen, heeft geen identiteit — het oneindige is ondefinieerbaar.",
    abstractExample: "Implicatie voor God (bij Spinoza): een oneindig wezen heeft geen begrenzingen. Maar definitie vereist begrenzing. Dus een oneindig wezen is ondefinieerbaar — en misschien ook onbepaald, dus 'gelijk aan alles' of 'gelijk aan niets'. Dit is de kern van negatieve theologie (apofatische theologie).",
    examples: [
      { domain: "philosophy", icon: "🤔", text: "Hegel nam dit principe over: identiteit is dialectisch — A is A doordat A niet-A is. De dialectische beweging (these-antithese-synthese) is gebaseerd op het principe dat identiteit negativiteit vereist. Dialectiek als motor van begripsvorming." },
      { domain: "daily", icon: "🏠", text: "Merkidentiteit: wat maakt Apple 'Apple'? Niet slechts zijn producten, maar het contrast met Microsoft, Samsung, 'gewone' technologie. Merken definiëren zichzelf via uitsluiting en afbakening. Wat ze niet zijn is net zo belangrijk als wat ze zijn." },
      { domain: "science", icon: "🔬", text: "Wetenschappelijke categorieën: wat is 'leven'? Elke definitie sluit grensgeval uit: virussen, prionnen. Wat is een planeet? IAU's definitie sloot Pluto uit — en toonde dat definitie altijd een politieke keuze is naast een empirische." }
    ],
    prerequisites: [],
    unlocks: [],
    relatedPrinciples: ["sorites-paradox", "barbier-paradox"],
    exercises: [{
      type: "multiple-choice",
      question: "Spinoza's principe 'determinatio negatio est' impliceert dat:",
      options: ["Definities overbodig zijn", "Elk begrip zijn identiteit ontleent aan wat het uitsluit", "Negaties onbetrouwbaar zijn", "Oneindige entiteiten het meest bepaald zijn"],
      correct: 1,
      feedback: "Juist! Elke definitie, elke identiteit, is gebaseerd op contrast: wat A is, wordt bepaald door wat A niet is. Een grenzenloos concept heeft geen echte identiteit. Dit is de basis van dialectisch denken en ook een uitdaging voor de definitie van het Absolute of het Oneindige."
    }],
    creativePrompt: "Kies een belangrijk begrip in jouw leven (vrijheid, succes, liefde). Definieer het door te beschrijven wat het NIET is. Wat ontdek je?",
    aiHelperPrompts: [
      "Hoe beïnvloedt Spinoza's principe de manier waarop we identiteit begrijpen?",
      "Geldt dit principe ook voor persoonlijke identiteit: wie je bent door wie je niet bent?",
      "Hoe helpt dit principe bij het analyseren van ideologische conflicten?"
    ]
  }
];
