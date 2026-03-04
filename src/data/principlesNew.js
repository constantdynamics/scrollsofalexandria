// Nieuwe principes – batches 1-9 (90 principes)

export const principlesNew = [
// ── BATCH 1: COGNITIEVE BIASES (1) ───────────────────────────
  {
    id: "actor-observer-bias",
    title: "Acteur-Observator-Bias",
    difficulty: 2,
    emoji: "🎭",
    academicCategory: "Psychologie",
    skillCategory: "Beter Redeneren",
    definition: "We verklaren ons eigen gedrag door externe omstandigheden, maar het gedrag van anderen door hun persoonlijkheid of karakter. Als acteur zie je de situatie; als observator zie je de persoon.",
    abstractExample: "Wanneer jij te laat bent, lag dat aan het verkeer. Wanneer een ander te laat is, is die persoon onbetrouwbaar of lui. Dezelfde handeling krijgt een andere verklaring afhankelijk van wie die uitvoert.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Je fout in een discussie kwam door stress; de fout van je partner komt door onzorgvuldigheid." },
      { domain: "business", icon: "💼", text: "Je eigen mislukte project had onvoorziene obstakels; het mislukte project van een collega was slechte planning." },
      { domain: "science", icon: "🔬", text: "Sociaal-psychologisch onderzoek toont dat mensen consequent meer situationele verklaringen geven voor eigen gedrag dan voor andermans gedrag." }
    ],
  },
  {
    id: "barnum-effect",
    title: "Barnum-Effect",
    difficulty: 1,
    emoji: "🔮",
    academicCategory: "Psychologie",
    skillCategory: "Kritisch Denken",
    definition: "De neiging om vage, algemene persoonlijkheidsbeschrijvingen als heel specifiek en accuraat voor jezelf te accepteren. Mensen herkennen zich in uitspraken die eigenlijk voor bijna iedereen gelden.",
    abstractExample: "De zin 'Je hebt soms twijfels over jezelf, maar diep van binnen weet je wat je waard bent' lijkt heel persoonlijk, maar geldt voor nagenoeg iedereen. Toch voelt het als een scherpe karakterschets.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Horoscopen beschrijven je als 'creatief maar ook praktisch' — een combinatie die voor de meeste mensen klopt." },
      { domain: "business", icon: "💼", text: "Vage leiderschapsprofielen ('U bent ambitieus maar ook bezorgd om anderen') worden als perfect passend ervaren door vrijwel alle managers." },
      { domain: "science", icon: "🔬", text: "Psycholoog Bertram Forer gaf studenten identieke profielen; ze beoordeelden die als 'uiterst nauwkeurig' voor henzelf." }
    ],
  },
  {
    id: "frequency-illusion",
    title: "Frequentie-Illusie",
    difficulty: 1,
    emoji: "👁️",
    academicCategory: "Psychologie",
    skillCategory: "Beter Redeneren",
    definition: "Zodra je iets nieuws leert of een nieuw concept tegenkomt, lijkt het alsof je het plotseling overal ziet. De frequentie is niet echt gestegen — je aandacht is erop gericht.",
    abstractExample: "Na het kopen van een rode auto zie je overal rode auto's. Het aantal rode auto's is niet veranderd; jouw selectieve aandacht en geheugen zijn veranderd.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Je leert een nieuw woord en hoort het de volgende week drie keer. Het woord bestond al eerder, maar viel je niet op." },
      { domain: "business", icon: "💼", text: "Na een training over agressieve verkooptactieken herken je ze plotseling in elke vergadering." },
      { domain: "science", icon: "🔬", text: "Cognitief psychologen noemen dit ook het Baader-Meinhof-fenomeen: selectieve aandacht gecombineerd met bevestigingsneiging." }
    ],
  },
  {
    id: "denomination-effect",
    title: "Denominatie-Effect",
    difficulty: 1,
    emoji: "💶",
    academicCategory: "Gedragseconomie",
    skillCategory: "Betere Beslissingen",
    definition: "Mensen geven minder snel grote biljetten uit dan kleine biljetten of muntgeld, ook al is de totale waarde gelijk. Een briefje van €50 voelt 'te kostbaar' om te breken.",
    abstractExample: "Je hebt €50 in één biljet en €50 in vijfjes. Je geeft het kleine geld eerder uit voor impulsaankopen. De geldhoeveelheid is identiek, maar de psychologische drempel verschilt.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Je koopt eerder een snack als je wisselgeld op zak hebt dan wanneer je alleen een briefje van €50 hebt." },
      { domain: "business", icon: "💼", text: "Casino's gebruiken chips juist om het 'echte geld'-gevoel te verminderen en uitgaven te verhogen." },
      { domain: "science", icon: "🔬", text: "Onderzoek van Priya Raghubir en Joydeep Srivastava toonde aan dat mensen met grotere coupures consistent minder uitgeven." }
    ],
  },
  {
    id: "illusory-truth-effect",
    title: "Illusoire-Waarheidseffect",
    difficulty: 2,
    emoji: "🔁",
    academicCategory: "Psychologie",
    skillCategory: "Kritisch Denken",
    definition: "Herhaalde blootstelling aan een bewering vergroot de kans dat je die bewering als waar beschouwt, ook als je weet dat ze onwaar is. Herhaling creëert een gevoel van vertrouwdheid dat als waarheid wordt ervaren.",
    abstractExample: "Als een politieke slogan honderd keer herhaald wordt, beginnen mensen hem als vanzelfsprekend te accepteren — zelfs critici twijfelen uiteindelijk. Herhaling vervangt evaluatie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Reclameslogans worden door herhaling geloofwaardig: 'Rood Kruis, altijd betrouwbaar' klinkt na jaren als een feit." },
      { domain: "business", icon: "💼", text: "Fake news verspreidt zich sneller dan correcties omdat herhaalde leugens geloofwaardiger aanvoelen dan eenmalige waarheden." },
      { domain: "science", icon: "🔬", text: "Hasher et al. (1977) toonden als eersten aan dat herhaling de subjectieve waarheidswaarde verhoogt, onafhankelijk van feitelijke juistheid." }
    ],
  },
  {
    id: "hot-hand-fallacy",
    title: "Hete-Hand-Drogreden",
    difficulty: 2,
    emoji: "🏀",
    academicCategory: "Statistiek",
    skillCategory: "Beter Redeneren",
    definition: "De overtuiging dat iemand die een reeks successen heeft behaald, meer kans heeft op het volgende succes. In werkelijkheid zijn veel opeenvolgende uitkomsten statistisch onafhankelijk.",
    abstractExample: "Een basketbalspeler maakt vijf schoten op rij. Toeschouwers denken hij 'heet' is en meer kans heeft op het zesde schot. Maar elke worp heeft zijn eigen kanspercentage.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Na drie goede handelsdag op rij denkt een belegger op een winning streak te zitten en neemt hij meer risico." },
      { domain: "business", icon: "💼", text: "Een verkoper die drie deals sloot geeft de volgende prospect minder aandacht — hij verwacht de vierde deal ook te sluiten." },
      { domain: "science", icon: "🔬", text: "Gilovich, Vallone & Tversky (1985) vonden geen statistisch bewijs voor de hete hand in basketbal, maar de overtuiging bleef bestaan." }
    ],
  },
  {
    id: "clustering-illusion",
    title: "Clusteringsillusie",
    difficulty: 2,
    emoji: "🎲",
    academicCategory: "Statistiek",
    skillCategory: "Beter Redeneren",
    definition: "De neiging om betekenisvolle patronen te zien in willekeurige reeksen. Ons brein is zo goed in patroonherkenning dat het patronen 'vindt' ook waar ze niet bestaan.",
    abstractExample: "Gooi een munt twintig keer. Je krijgt waarschijnlijk clusters van meerdere 'koppen' op rij of meerdere 'munten' op rij. Dit ziet er niet-willekeurig uit, maar is precies wat verwacht mag worden bij toeval.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Mensen zien 'gezichten' in wolken, toast of boomschors — ons brein zoekt patronen die er niet zijn." },
      { domain: "business", icon: "💼", text: "Een manager ziet drie slechte kwartalen als 'een trend' terwijl het normale variatie in bedrijfsresultaten kan zijn." },
      { domain: "science", icon: "🔬", text: "In epidemiologie worden kankercluster-onderzoeken vaak gestart op basis van toevallige geografische clustering van gevallen." }
    ],
  },
  {
    id: "restraint-bias",
    title: "Terughoudendheidsvertekening",
    difficulty: 2,
    emoji: "🍰",
    academicCategory: "Psychologie",
    skillCategory: "Betere Beslissingen",
    definition: "We overschatten onze vermogen om verleidingen te weerstaan als we ze nog niet ondervinden. In koud-toestand denken we dat we sterker zijn dan we zijn in warm-toestand.",
    abstractExample: "Iemand op dieet zegt: 'Als er cake is op het feest, neem ik gewoon een klein stukje — ik heb voldoende zelfcontrole.' Maar op het feest, met de geur van cake, valt de zelfcontrole weg.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Je denkt dat je je telefoon makkelijk kunt negeren tijdens studeren. Maar zodra je ermee in de buurt bent, check je hem toch." },
      { domain: "business", icon: "💼", text: "Onderhandelaars denken dat ze rustig kunnen blijven onder druk — maar in hitte van onderhandeling reageren ze emotioneel." },
      { domain: "science", icon: "🔬", text: "Nordgren et al. (2009) toonden aan dat mensen die zich sterk in zelfcontrole voelden, eerder aan verleidingen bezweken door blootstelling te onderschatten." }
    ],
  },
  {
    id: "declinism",
    title: "Achteruitgangsdenken",
    difficulty: 1,
    emoji: "📉",
    academicCategory: "Psychologie",
    skillCategory: "Beter Redeneren",
    definition: "De neiging om te geloven dat de wereld of een situatie vroeger beter was en nu achteruitgaat, terwijl objectieve data dit niet altijd ondersteunen. Het verleden wordt geïdealiseerd en het heden overdreven negatief beoordeeld.",
    abstractExample: "Elke generatie klaagt dat 'de jeugd van tegenwoordig' slechter is dan vroeger, en dat de samenleving verloedert. Historici vinden dezelfde klachten in teksten van 2000 jaar oud.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Ouders denken dat muziek, films en omgangsvormen vroeger beter waren — ook al was er altijd schandaal en 'verval'." },
      { domain: "business", icon: "💼", text: "Langdurige werknemers zeggen dat de bedrijfscultuur vroeger beter was, ook als productiviteit en winst gestegen zijn." },
      { domain: "science", icon: "🔬", text: "Pinker toont in 'Enlightenment Now' met data aan dat geweld, armoede en kindersterfte historisch gezien sterk zijn gedaald ondanks algemeen pessimisme." }
    ],
  },
  {
    id: "rosy-retrospection",
    title: "Rooskleurige Terugblik",
    difficulty: 1,
    emoji: "🌹",
    academicCategory: "Psychologie",
    skillCategory: "Beter Redeneren",
    definition: "De neiging om het verleden positiever te beoordelen dan het in werkelijkheid was. Negatieve ervaringen worden afgevlakt in het geheugen terwijl positieve worden uitvergroot.",
    abstractExample: "Een vakantie die deels regenachtig en vermoeiend was, herinnert je later als bijna perfect. De slechte momenten verbleken; de goede blijven glinsteren.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Schooljaren worden later herinnerd als de beste jaren van je leven, ook al waren er ook pestproblemen en stress." },
      { domain: "business", icon: "💼", text: "Voormalige medewerkers herinneren hun oude baan als veel beter dan de nieuwe, ook als ze destijds ontevreden vertrokken." },
      { domain: "science", icon: "🔬", text: "Mitchell et al. (1997) toonden aan dat mensen reizen beter evalueerden na afloop dan vooraf verwacht, door rooskleurige terugblik." }
    ],
  },

  // ── BATCH 2: COGNITIEVE BIASES (2) ───────────────────────────
  {
    id: "attentional-bias",
    title: "Aandachtsvertekening",
    difficulty: 1,
    emoji: "🔍",
    academicCategory: "Psychologie",
    skillCategory: "Beter Redeneren",
    definition: "Onze aandacht wordt automatisch getrokken naar informatie die emotioneel relevant is voor ons, waardoor we een vertekend beeld krijgen van hoe vaak of hoe significant iets is.",
    abstractExample: "Iemand met een fobie voor spinnen ziet spinnen in een kamer eerder dan andere mensen. Iemand die op dieet is, ziet voedsel eerder in zijn omgeving. Aandacht is niet neutraal.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Als je ziek bent, valt je op hoeveel mensen hoesten en niezen in het openbaar vervoer — voorheen merkte je dit nauwelijks." },
      { domain: "business", icon: "💼", text: "Een manager die bang is voor slechte resultaten let meer op negatieve signalen van medewerkers dan op positieve." },
      { domain: "science", icon: "🔬", text: "In klinische psychologie is aandachtsvertekening een kernsymptoom van angststoornissen en wordt het behandeld met aandachtstraining." }
    ],
  },
  {
    id: "reactance",
    title: "Psychologische Reactantie",
    difficulty: 2,
    emoji: "🚫",
    academicCategory: "Psychologie",
    skillCategory: "Betere Beslissingen",
    definition: "Wanneer mensen het gevoel hebben dat hun vrijheid wordt beperkt, reageren ze met een sterk verlangen om juist dat te doen wat verboden of beperkt wordt. Verbod wekt begeerte.",
    abstractExample: "Zeg tegen een kind dat het niet aan een rode knop mag komen, en het enige wat het wil is die knop indrukken. De beperking verhoogt de aantrekkingskracht.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Ouders die een bepaald muziekgenre verbieden, maken het daarmee aantrekkelijker voor hun tieners." },
      { domain: "business", icon: "💼", text: "'Nog maar 3 op voorraad!' verhoogt de koopbereidheid door een gevoel van schaarste en dreigende beperking." },
      { domain: "science", icon: "🔬", text: "Brehm (1966) beschreef reactantie als een motivationele staat die wordt geactiveerd wanneer gedragskeuzevrijheid bedreigd wordt." }
    ],
  },
  {
    id: "effort-justification",
    title: "Inspanningsrechtvaardiging",
    difficulty: 2,
    emoji: "💪",
    academicCategory: "Psychologie",
    skillCategory: "Betere Beslissingen",
    definition: "We waarderen uitkomsten hoger naarmate we meer moeite hebben gedaan om ze te bereiken, zelfs als de kwaliteit objectief niet verschilt. Inspanning rechtvaardigt achteraf de waarde.",
    abstractExample: "Studenten die een moeilijk initiatieraproces doorliepen voor een studentenvereniging vonden de groep waardevoller dan studenten die gemakkelijk werden toegelaten — ook bij dezelfde objectieve groepskwaliteit.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een zelf gemonteerde kast van IKEA voelt waardevoller dan een identieke kant-en-klare kast (het IKEA-effect is hieraan verwant)." },
      { domain: "business", icon: "💼", text: "Initiatieprogramma's voor nieuwe medewerkers creëren binding: hoe zwaarder het programma, hoe loyaler de medewerkers." },
      { domain: "science", icon: "🔬", text: "Aronson & Mills (1959) toonden aan dat zware initiatie leidt tot hogere waardering van de groep, zelfs als die groep tegenvalt." }
    ],
  },
  {
    id: "projection-bias",
    title: "Projectievertekening",
    difficulty: 2,
    emoji: "🔭",
    academicCategory: "Psychologie",
    skillCategory: "Betere Beslissingen",
    definition: "We overschatten in hoeverre onze huidige voorkeuren, gevoelens en staat ook onze toekomstige staat zullen bepalen. We projecteren ons huidige zelf op de toekomst.",
    abstractExample: "Honger boodschappen doen leidt tot het kopen van te veel eten, omdat je verwacht ook later even hongerig te zijn. In werkelijkheid veranderen onze behoeften voortdurend.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Als je je nu slecht voelt, kun je je moeilijk voorstellen ooit gelukkig te zijn — en omgekeerd." },
      { domain: "business", icon: "💼", text: "Mensen onderschrijven abonnementen terwijl ze denken ze even intensief te gebruiken als nu — maar gebruik daalt na verloop van tijd." },
      { domain: "science", icon: "🔬", text: "Loewenstein, O'Donoghue & Rabin (2003) formaliseerden projectievertekening als een economitheorie van irrationeel toekomstgedrag." }
    ],
  },
  {
    id: "social-desirability-bias",
    title: "Sociale Wenselijkheidsvertekening",
    difficulty: 1,
    emoji: "😇",
    academicCategory: "Psychologie",
    skillCategory: "Kritisch Denken",
    definition: "De neiging om te antwoorden of te gedragen op een manier die sociaal acceptabel of positief gewaardeerd wordt, in plaats van eerlijk over de eigen meningen, gevoelens of gedrag te zijn.",
    abstractExample: "Gevraagd hoeveel alcohol iemand drinkt, geeft men in een enquête minder op dan werkelijk. Bij vragen over milieubewust gedrag zegt men meer te recyclen dan men echt doet.",
    examples: [
      { domain: "daily", icon: "🏠", text: "In gesprekken zeg je vaker dat je sport en gezond eet dan je werkelijk doet, om een goede indruk te wekken." },
      { domain: "business", icon: "💼", text: "Medewerkers geven in tevredenheidsonderzoeken positiever antwoord als hun namen bekend zijn bij de werkgever." },
      { domain: "science", icon: "🔬", text: "Enquêteonderzoekers corrigeren voor sociale wenselijkheid met anonimiteit, indirecte vragen en impliciete metingen." }
    ],
  },
  {
    id: "optimism-bias",
    title: "Optimismevertekening",
    difficulty: 1,
    emoji: "🌞",
    academicCategory: "Psychologie",
    skillCategory: "Betere Beslissingen",
    definition: "De neiging om te geloven dat goede dingen eerder ons zullen overkomen en slechte dingen minder snel dan gemiddeld. We overschatten onze kansen op succes en onderschatten risico's.",
    abstractExample: "De meeste mensen denken dat hun huwelijk niet zal eindigen in scheiding, dat ze niet ziek worden van roken, en dat hun bedrijf zal slagen — ook al wijzen statistieken op andere uitkomsten.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Negen van de tien nieuwe restaurants falen binnen vijf jaar, maar elke restauranteigenaar denkt tot de uitzonderingen te behoren." },
      { domain: "business", icon: "💼", text: "Projecten eindigen structureel later en duurder dan gepland, deels door de planningsdrogreden die gevoed wordt door optimismevertekening." },
      { domain: "science", icon: "🔬", text: "Sharot (2011) toonde via hersenscans aan dat het brein positieve informatie over de toekomst sterker verwerkt dan negatieve." }
    ],
  },
  {
    id: "group-polarization",
    title: "Groepspolarisatie",
    difficulty: 2,
    emoji: "⬆️",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Beter Communiceren",
    definition: "Na groepsdiscussie worden meningen extremer dan de aanvankelijke individuele standpunten. Gelijkgestemde groepen versterken elkaars overtuigingen en duwen ze naar extremen.",
    abstractExample: "Een groep licht-risicovolle personen besluit na discussie meer risico te nemen. Een groep die al voorzichtig is, wordt na discussie nog voorzichtiger. De groep versterkt de dominante neiging.",
    examples: [
      { domain: "daily", icon: "🏠", text: "In online echokamers worden politieke meningen steeds extremer naarmate mensen meer met gelijkgestemden communiceren." },
      { domain: "business", icon: "💼", text: "Een managementteam dat al positief staat tegenover een risicovolle investering, neemt na overleg nog grotere risico's." },
      { domain: "science", icon: "🔬", text: "Moscovici & Zavalloni (1969) documenteerden als eersten het 'risky shift'-fenomeen dat later werd uitgebreid tot groepspolarisatie." }
    ],
  },
  {
    id: "zero-sum-thinking",
    title: "Nulsom-Denken",
    difficulty: 2,
    emoji: "⚖️",
    academicCategory: "Psychologie",
    skillCategory: "Betere Beslissingen",
    definition: "De overtuiging dat in elke situatie de winst van één partij gelijk staat aan het verlies van een andere, ook als dat objectief niet het geval is. Nulsom-denken ondermijnt samenwerking.",
    abstractExample: "Als een collega promotie maakt, denk je dat jouw kansen daardoor kleiner worden — zelfs als beide promoties mogelijk waren. Niet elke situatie is een nulsom-spel.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Mensen denken soms dat als anderen gelukkiger of succesvoller zijn, er minder geluk of succes voor henzelf overblijft." },
      { domain: "business", icon: "💼", text: "In onderhandelingen denken partijen dat elke concessie een verlies is voor hen, terwijl win-win-oplossingen mogelijk zijn." },
      { domain: "science", icon: "🔬", text: "Onderzoek toont dat nulsom-denken sterk correleert met competitiviteit, nationalisme en weerstand tegen immigratie." }
    ],
  },
  {
    id: "telescope-effect",
    title: "Telescoop-Effect",
    difficulty: 2,
    emoji: "🔭",
    academicCategory: "Psychologie",
    skillCategory: "Beter Redeneren",
    definition: "Recente gebeurtenissen lijken verder weg dan ze zijn (telescoop omgekeerd), en verre gebeurtenissen lijken dichterbij dan ze zijn (telescoop rechtop). Ons tijdsgevoel is systematisch vertekend.",
    abstractExample: "Een vakantie van twee jaar geleden voelt als 'pas nog', terwijl iets wat vijf jaar geleden was aanvoelt als 'heel lang geleden'. Mensen plaatsen zowel recente als oude gebeurtenissen verkeerd in de tijd.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Iemand schat dat een evenement van drie jaar geleden 'misschien anderhalf jaar geleden' was — forward telescoping." },
      { domain: "business", icon: "💼", text: "Managers onderschatten hoe lang projecten duurden in het verleden, waardoor ze toekomstige planningen onderschatten." },
      { domain: "science", icon: "🔬", text: "Watkins & Peynircioğlu (1990) documenteerden systematische fouten in tijdsschatting bij autobiografisch geheugen." }
    ],
  },
  {
    id: "verbatim-effect",
    title: "Verbatim-Effect",
    difficulty: 2,
    emoji: "📝",
    academicCategory: "Cognitieve Psychologie",
    skillCategory: "Beter Leren",
    definition: "We onthouden de betekenis en essentie van informatie beter dan de exacte woorden. Ons geheugen slaat snel de kern op maar verliest de letterlijke formulering. Tegelijkertijd denken we soms dat we woord-voor-woord onthouden terwijl we reconstueren.",
    abstractExample: "Na het lezen van een artikel kun je perfect uitleggen waar het over ging, maar de exacte zinnen kun je niet herhalen. Ons geheugen is meer interpretatief dan fotografisch.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Na een gesprek onthoud je de teneur en het gevoel, maar kun je de exacte woorden van de ander niet herhalen." },
      { domain: "business", icon: "💼", text: "Getuigen in rechtszaken reconstrueren uitspraken die ze 'woordelijk' denken te onthouden, maar in werkelijkheid interpreteren." },
      { domain: "science", icon: "🔬", text: "Brainerd & Reyna's fuzzy-trace theorie onderscheidt 'verbatim traces' van 'gist traces' en toont dat gist langer bewaard blijft." }
    ],
  },

  // ── BATCH 3: DROGREDEN & LOGICA ───────────────────────────────
  {
    id: "appeal-to-tradition",
    title: "Beroep op Traditie",
    difficulty: 1,
    emoji: "🏛️",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    definition: "De drogreden waarbij iets gerechtvaardigd wordt louter omdat het altijd zo gedaan is, of omdat het traditioneel is. Ouderdom is geen bewijs van juistheid.",
    abstractExample: "We hanteren dit beleid al twintig jaar, dus het moet wel goed zijn.' De leeftijd van een gewoonte zegt niets over haar waarde of correctheid.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'We vieren Kerstmis altijd op deze manier in onze familie, dus we kunnen dat niet veranderen.' Traditie als argument mist de vraag of het ook goed is." },
      { domain: "business", icon: "💼", text: "'We gebruiken dit formulier al dertig jaar' is geen reden om niet te digitaliseren als dat efficiënter is." },
      { domain: "science", icon: "🔬", text: "Vóór Semmelweis werden handen wassen bij operaties niet gedaan 'omdat dat altijd zo was'. Miljoenen stierven aan deze traditie." }
    ],
  },
  {
    id: "appeal-to-novelty",
    title: "Beroep op Nieuwigheid",
    difficulty: 1,
    emoji: "✨",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    definition: "De drogreden waarbij iets gerechtvaardigd wordt louter omdat het nieuw is. Nieuwheid op zich is geen bewijs van kwaliteit of juistheid.",
    abstractExample: "'Dit is de nieuwste aanpak, dus het moet beter zijn dan de oude.' Nieuwheid garandeert geen vooruitgang — nieuwe dingen kunnen ook slechter zijn.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'De nieuwste smartphone moet de beste zijn, dus ik koop hem.' Technologische nieuwheid is niet automatisch verbeterd." },
      { domain: "business", icon: "💼", text: "Managementmodes komen en gaan: 'agile' of 'holacracy' zijn aantrekkelijk door nieuwheid, niet altijd door bewijs." },
      { domain: "science", icon: "🔬", text: "Nieuwe medische behandelingen worden soms aangeprezen als revolutionair voordat klinische trials ze gevalideerd hebben." }
    ],
  },
  {
    id: "appeal-to-emotion",
    title: "Beroep op Emotie",
    difficulty: 1,
    emoji: "😢",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    definition: "Een argument wordt gepresenteerd op basis van emotionele impact in plaats van logische redenering of bewijs. Emotie vervangt argumenten en bewijslast.",
    abstractExample: "'Denk aan de kinderen!' is een emotioneel beroep dat een discussie kan sluiten zonder het argument te beantwoorden. Medelijden, angst of woede worden aangewend om redenering te vervangen.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een reclame toont een zielig dier om donaties te werven, zonder informatie te geven over hoe effectief de organisatie is." },
      { domain: "business", icon: "💼", text: "Een kandidaat wordt aangenomen omdat het verhaal van zijn strijd zo indrukwekkend was, terwijl zijn competenties niet objectief geëvalueerd werden." },
      { domain: "science", icon: "🔬", text: "In debatten over vaccinaties worden patiëntverhalen gebruikt om statistisch bewijs te overtroefen — zowel voor als tegen." }
    ],
  },
  {
    id: "ad-populum",
    title: "Beroep op de Massa",
    difficulty: 1,
    emoji: "👥",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    definition: "De drogreden waarbij iets als waar of goed wordt gepresenteerd omdat veel mensen het geloven of doen. Populariteit is geen bewijs van juistheid.",
    abstractExample: "'Miljarden mensen geloven in dit, dus het moet kloppen.' Of: 'Iedereen koopt bij dit merk, dus het moet het beste zijn.' Meerderheid bepaalt geen waarheid.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'Iedereen in onze buurt heeft zonnepanelen, dus wij moeten ze ook nemen' is sociale druk, geen onderbouwde redenering." },
      { domain: "business", icon: "💼", text: "Een beleggingshype: 'Alle experts investeren hierin' — populariteit creëert zeepbellen, geen garanties." },
      { domain: "science", icon: "🔬", text: "Vóór Copernicus geloofde vrijwel iedereen dat de zon om de aarde draaide. Consensus was verkeerd; bewijs was doorslaggevend." }
    ],
  },
  {
    id: "genetic-fallacy",
    title: "Genetische Drogreden",
    difficulty: 2,
    emoji: "🧬",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    definition: "Een argument verwerpen of accepteren op basis van zijn oorsprong in plaats van zijn inhoud. De herkomst van een idee bepaalt niet zijn juistheid.",
    abstractExample: "'Dit idee komt van een lobbyist, dus het deugt niet.' Of: 'Einstein zei dit, dus het klopt.' Beide redeneren vanuit oorsprong, niet vanuit inhoud.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'Die informatie staat op een nepnieuws-site, dus het is sowieso fout' — soms staat feitelijk correcte informatie op slechte bronnen." },
      { domain: "business", icon: "💼", text: "'Het idee van die stagiaire kan nooit goed zijn' — goede ideeën kunnen van overal komen." },
      { domain: "science", icon: "🔬", text: "Mendel's erfelijkheidswetten werden decennialang genegeerd deels omdat hij een monnik was, geen professioneel wetenschapper." }
    ],
  },
  {
    id: "middle-ground-fallacy",
    title: "Gulden-Middenweg-Drogreden",
    difficulty: 2,
    emoji: "⚖️",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    definition: "De aanname dat het midden tussen twee standpunten altijd de juiste positie is. Soms is een van de extremen correct en het midden verkeerd.",
    abstractExample: "'Wetenschapper A zegt 5 graden opwarming, scepticus B zegt 0 graden, dus de waarheid is 2,5 graden.' Het gemiddelde van twee standpunten is geen bewijs.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'Jij wilt het raam dicht, ik wil het open, dus laten we het op een kier zetten' — soms is dit goed, soms is een van de extremen correct." },
      { domain: "business", icon: "💼", text: "In onderhandelingen denken mensen dat het midden van twee eisen de eerlijke uitkomst is, maar een van de partijen kan juist zijn." },
      { domain: "science", icon: "🔬", text: "Aardebol versus platte aarde: het 'midden' (deels bol?) is niet de oplossing. Bewijs bepaalt welk standpunt correct is." }
    ],
  },
  {
    id: "appeal-to-consequences",
    title: "Beroep op Gevolgen",
    difficulty: 2,
    emoji: "🎯",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    definition: "Een bewering als waar of onwaar bestempelen op basis van de wenselijkheid van de gevolgen als de bewering waar zou zijn. Wat we wensen te geloven bepaalt niet wat waar is.",
    abstractExample: "'Als er geen God zou zijn, zou het leven zinloos zijn, dus er moet een God zijn.' De wenselijkheid van een conclusie maakt haar niet waar.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'Als klimaatverandering echt is, moeten we onze economie aanpassen — dat wil ik niet, dus klimaatverandering is overdreven.'" },
      { domain: "business", icon: "💼", text: "'Als de studie aantoont dat ons product schadelijk is, krijgen we rechtszaken. Dus de studie klopt niet.' Gewenste gevolgen staan los van feiten." },
      { domain: "science", icon: "🔬", text: "Wetenschapsfilosofen noemen dit ook 'wishful thinking' — de voorkeur voor bepaalde waarheden beïnvloedt de evaluatie van bewijs." }
    ],
  },
  {
    id: "begging-the-question",
    title: "Circulair Bewijs",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    definition: "Een argument waarbij de conclusie als premisse wordt gebruikt. De redenering bewijst niets nieuws omdat de conclusie al impliciet in de aanname zit.",
    abstractExample: "'De Bijbel is waar omdat de Bijbel zegt dat hij waar is.' De bron bewijst zichzelf. Of: 'Hij liegt omdat hij een leugenaar is' — het woord 'leugenaar' veronderstelt al wat bewezen moet worden.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'We moeten deze regel volgen omdat het de regel is.' De rechtvaardiging van de regel is de regel zelf." },
      { domain: "business", icon: "💼", text: "'Ons product is het beste omdat wij de beste zijn' — de conclusie (best) staat al in de premisse (beste bedrijf)." },
      { domain: "science", icon: "🔬", text: "In ethiek: 'Abortus is moord omdat het een leven beëindigt' veronderstelt al dat een foetus een 'leven' is in de morele zin — dit is precies wat in debat is." }
    ],
  },
  {
    id: "equivocation-fallacy",
    title: "Dubbelzinnigheidsvertekening",
    difficulty: 2,
    emoji: "🔀",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    definition: "Een drogreden waarbij een woord of uitdrukking in twee verschillende betekenissen gebruikt wordt in hetzelfde argument, waardoor de redenering ongeldig wordt.",
    abstractExample: "'Niks is beter dan eeuwig geluk. Een boterham is beter dan niks. Dus een boterham is beter dan eeuwig geluk.' 'Niks' betekent eerst 'niets bestaat' en daarna 'leegte als optie'.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'De wet van de natuur dicteert dat de sterkste overleeft. Mensen zijn deel van de natuur. Dus de sterkste mensen moeten heersen.' 'Wet' en 'sterk' worden dubbelzinnig gebruikt." },
      { domain: "business", icon: "💼", text: "'We moeten kritisch zijn op onze concurrenten (kritisch = analyserend). Kritisch zijn is destructief (kritisch = afbrekend). Dus analyse is destructief.'" },
      { domain: "science", icon: "🔬", text: "Filosofische debatten over 'realiteit' zijn vaak vertroebeld door dubbelzinnig gebruik van 'bestaan', 'object' of 'bewustzijn'." }
    ],
  },
  {
    id: "special-pleading",
    title: "Speciale Uitzondering",
    difficulty: 2,
    emoji: "🙋",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    definition: "Een uitzondering eisen op een algemene regel voor jezelf of een favoriete positie, zonder die uitzondering te rechtvaardigen. De standaard wordt selectief toegepast.",
    abstractExample: "Iemand zegt dat iedereen deadlines moet halen, maar als hun eigen deadline voorbij gaat: 'Bij mij was het uitzonderlijk druk.' De uitzondering wordt geclaimd maar niet onderbouwd.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'Roddelen is fout, maar ik vertel dit alleen omdat ik bezorgd ben.' Iedereen die roddelt heeft een rechtvaardiging — dat maakt het niet anders." },
      { domain: "business", icon: "💼", text: "Een land bepleit vrije handel voor andere landen, maar beschermt zijn eigen industrie met subsidies en tarieven." },
      { domain: "science", icon: "🔬", text: "Homeopaten accepteren wetenschappelijke standaarden voor reguliere geneesmiddelen, maar eisen andere standaarden voor hun eigen behandelingen." }
    ],
  },

  // ── BATCH 4: ECONOMIE & BESLISKUNDE ──────────────────────────
  {
    id: "bounded-rationality",
    title: "Begrensd Rationaliteit",
    difficulty: 2,
    emoji: "🧠",
    academicCategory: "Gedragseconomie",
    skillCategory: "Betere Beslissingen",
    definition: "Mensen streven niet naar perfecte rationaliteit maar naar 'goed genoeg' beslissingen, vanwege beperkte informatie, cognitieve capaciteit en tijd. Echte rationaliteit is altijd begrensd.",
    abstractExample: "Een volledig rationele actor vergelijkt alle supermarktproducten op prijs per gram en kiest altijd de optimale optie. In werkelijkheid kijkt iemand naar 3-4 opties en kiest de eerste die goed genoeg lijkt.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Bij het kiezen van een restaurant vergelijk je niet elke optie in de stad; je pakt de eerste die redelijk lijkt." },
      { domain: "business", icon: "💼", text: "Managers nemen beslissingen met onvolledige informatie onder tijdsdruk — perfecte analyse is luxe die de werkelijkheid zelden toelaat." },
      { domain: "science", icon: "🔬", text: "Herbert Simon bedacht de term 'bounded rationality' in 1955 en won er de Nobelprijs voor economie mee in 1978." }
    ],
  },
  {
    id: "satisficing",
    title: "Voldoenend Kiezen",
    difficulty: 1,
    emoji: "✅",
    academicCategory: "Gedragseconomie",
    skillCategory: "Betere Beslissingen",
    definition: "De strategie om de eerste optie te kiezen die aan een minimumdrempel voldoet, in plaats van te zoeken naar de absolute beste optie. Satisficing = 'satisfying' + 'sufficing' (bevredigend + voldoende).",
    abstractExample: "Je zoekt een appartement en stelt minimumcriteria (prijs, ligging, grootte). Je neemt het eerste appartement dat aan al deze criteria voldoet, in plaats van maanden te zoeken naar het perfecte appartement.",
    examples: [
      { domain: "daily", icon: "🏠", text: "In een restaurant kies je een gerecht dat goed klinkt en aan je wensen voldoet, in plaats van het menu te analyseren voor de theoretisch beste keuze." },
      { domain: "business", icon: "💼", text: "Een HR-manager selecteert de eerste kandidaat die aan alle functie-eisen voldoet, in plaats van alle sollicitanten te ranken." },
      { domain: "science", icon: "🔬", text: "Barry Schwartz toonde aan dat 'maximizers' (die altijd het beste zoeken) minder gelukkig zijn dan 'satisficers' die 'goed genoeg' accepteren." }
    ],
  },
  {
    id: "nudge-theory",
    title: "Duwtjestheorie",
    difficulty: 2,
    emoji: "👆",
    academicCategory: "Gedragseconomie",
    skillCategory: "Betere Beslissingen",
    definition: "Kleine aanpassingen in de omgeving of de manier waarop keuzes worden gepresenteerd, leiden tot betere beslissingen zonder keuzevrijheid te beperken. Mensen worden 'geduwd' naar betere opties.",
    abstractExample: "In een schoolkantine worden gezonde opties op ooghoogte gezet en ongezonde opties aan het einde. Kinderen kiezen vaker gezond — zonder verbod op ongezond eten.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Automatische inschrijving voor pensioenfondsen (opt-out in plaats van opt-in) verhoogt deelname dramatisch zonder verplichting." },
      { domain: "business", icon: "💼", text: "Trappen in zichtbare positie en liften verstopt achter een deur verhoogt trapgebruik op kantoren." },
      { domain: "science", icon: "🔬", text: "Thaler & Sunstein's boek 'Nudge' (2008) populariseerde de theorie; beide auteurs adviseerden overheden wereldwijd over gedragsbeleid." }
    ],
  },
  {
    id: "veblen-effect",
    title: "Veblen-Effect",
    difficulty: 2,
    emoji: "💎",
    academicCategory: "Economie",
    skillCategory: "Kritisch Denken",
    definition: "Het verschijnsel waarbij de vraag naar een product toeneemt als de prijs stijgt, in tegenstelling tot normale vraagcurves. Hogere prijs signaleert status en exclusiviteit.",
    abstractExample: "Een duur handtas verkoopt beter na een prijsverhoging omdat de hogere prijs de sociale status van het bezit vergroot. De prijs zelf is het product.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Luxe auto's, designer kleding en dure horloges worden deels gekocht vanwege hun prijs — die is het bewijs van exclusiviteit." },
      { domain: "business", icon: "💼", text: "Een consultancybureau verhoogde zijn dagprijs en kreeg plotseling meer aanvragen — de hogere prijs signaleerde kwaliteit." },
      { domain: "science", icon: "🔬", text: "Thorstein Veblen beschreef in 1899 'conspicuous consumption' — zichtbare consumptie als statusvertoon, de basis van het effect." }
    ],
  },
  {
    id: "hot-cold-empathy-gap",
    title: "Warm-Koud-Empatiekloof",
    difficulty: 2,
    emoji: "🌡️",
    academicCategory: "Gedragseconomie",
    skillCategory: "Betere Beslissingen",
    definition: "In een koude (emotieloze) toestand onderschatten we hoe sterk emoties ons gedrag en beslissingen zullen beïnvloeden in een warme (emotionele) toestand, en vice versa.",
    abstractExample: "Nuchter plannen om matig te drinken op een feest klinkt logisch. Op het feest zelf, in de warme toestand, voelt die afspraak heel ver weg. De koude je kan de warme je niet goed voorspellen.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Op een dieet besluit je dat je op feestjes geen cake zult eten. Maar de geur van verse cake in een sociale setting overmant je plan." },
      { domain: "business", icon: "💼", text: "Onderhandelaars plannen kalm hun strategie — maar in hitte van debat reageren ze emotioneel in strijd met hun plan." },
      { domain: "science", icon: "🔬", text: "Loewenstein (1996, 2005) documenteerde de warm-koud-kloof uitgebreid en toonde de asym metrische zelfinschatting aan." }
    ],
  },
  {
    id: "default-effect",
    title: "Standaard-Effect",
    difficulty: 1,
    emoji: "⚙️",
    academicCategory: "Gedragseconomie",
    skillCategory: "Betere Beslissingen",
    definition: "Mensen kiezen vaker de standaardoptie dan alternatieven, ook als de standaard niet de beste keuze is. Inactiviteit en het vermijden van keuze leiden naar de default.",
    abstractExample: "Als donorregistratie standaard 'ja' is (opt-out), zijn veel meer mensen donor dan bij standaard 'nee' (opt-in) — ook al is het een identieke keuzesituatie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Software installeert standaard extra toolbars of instellingen; de meeste gebruikers laten dit staan zonder bewust te kiezen." },
      { domain: "business", icon: "💼", text: "Abonnementen verlengen automatisch tenzij opgezegd — de meeste klanten blijven door inactiviteit." },
      { domain: "science", icon: "🔬", text: "Johnson & Goldstein (2003) toonden aan dat orgaandonatiegraden dramatisch verschilden tussen landen op basis van opt-in vs. opt-out systemen." }
    ],
  },
  {
    id: "transaction-costs",
    title: "Transactiekosten",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Economie",
    skillCategory: "Betere Beslissingen",
    definition: "De kosten die verbonden zijn aan het verrichten van een transactie, buiten de directe prijs: zoeken, onderhandelen, contracteren en handhaven. Transactiekosten bepalen hoe economische activiteit georganiseerd wordt.",
    abstractExample: "Een bedrijf kan een product zelf maken of inkopen bij een leverancier. Zelfs als de externe prijs lager is, kunnen de transactiekosten (zoeken, onderhandelen, contractbeheer) het zinvol maken om intern te produceren.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een klusjesman inhuren kost niet alleen zijn uurtarief, maar ook tijd om hem te zoeken, afspraken te maken en zijn werk te controleren." },
      { domain: "business", icon: "💼", text: "Fusies en overnames kunnen zinvol zijn om transactiekosten te verminderen die ontstaan bij marktinkoop van diensten." },
      { domain: "science", icon: "🔬", text: "Ronald Coase won in 1991 de Nobelprijs voor economie voor zijn theorie van transactiekosten als verklaring voor de bestaansreden van bedrijven." }
    ],
  },
  {
    id: "price-signaling",
    title: "Prijs als Signaal",
    difficulty: 2,
    emoji: "📡",
    academicCategory: "Economie",
    skillCategory: "Kritisch Denken",
    definition: "Prijzen werken niet alleen als allocatiemechanisme maar ook als informatiesignaal: een hoge prijs communiceert kwaliteit en omgekeerd. Prijzen bevatten kennis die verspreid is over miljoenen actoren.",
    abstractExample: "Als de prijs van olie stijgt, weten producenten wereldwijd dat ze meer moeten produceren en consumenten dat ze minder moeten verbruiken — zonder centrale planning. De prijs bevat alle relevante informatie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een duur restaurant signaleert kwaliteit; zelfs mensen die er nooit geweest zijn, nemen dit aan op basis van de prijs." },
      { domain: "business", icon: "💼", text: "Een bedrijf dat zijn product te goedkoop prijst, wekt het vermoeden van lage kwaliteit — ook als het product goed is." },
      { domain: "science", icon: "🔬", text: "Hayek (1945) betoogde dat het prijssysteem een coördinatiemechanisme is dat gedecentraliseerde kennis samenbrengt die geen centrale planner kan bezitten." }
    ],
  },
  {
    id: "rent-seeking",
    title: "Renteniergedrag",
    difficulty: 3,
    emoji: "🏰",
    academicCategory: "Politieke Economie",
    skillCategory: "Kritisch Denken",
    definition: "Het nastreven van rijkdom door het manipuleren van de politieke of economische omgeving in plaats van door productieve activiteit te creëren. Renteniergedrag redistributeert waarde zonder nieuwe waarde te scheppen.",
    abstractExample: "Een bedrijf besteedt miljoenen aan lobbyen voor importtarieven die concurrenten buitensluiten. Het bedrijf wordt rijker, maar de samenleving wordt armer — er is geen extra productie, alleen een verschuiving van rijkdom.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een taxibedrijf dat meer lobby t voor regelgeving die Uber buiten houdt dan dat het de service voor klanten verbetert." },
      { domain: "business", icon: "💼", text: "Farmaceutische bedrijven die patentwetten lobbyen om generieke concurrentie uit te stellen in plaats van nieuwe medicijnen te ontwikkelen." },
      { domain: "science", icon: "🔬", text: "Gordon Tullock (1967) introduceerde het concept; Anne Krueger bedacht de term 'rent-seeking' in 1974 om dit economisch parasitisme te beschrijven." }
    ],
  },
  {
    id: "tragedy-anticommons",
    title: "Tragedie van de Anti-Meent",
    difficulty: 3,
    emoji: "🔒",
    academicCategory: "Economie",
    skillCategory: "Kritisch Denken",
    definition: "Wanneer te veel partijen vetorecht hebben over een gedeelde hulpbron, wordt de hulpbron onderbenut. Het tegengestelde van de tragedie van de meent: hier leidt versnipperd eigendom tot blokkades.",
    abstractExample: "Een medicijn blijft onontwikkeld omdat tientallen patenthouders elk een klein stukje van de benodigde kennis bezitten en geen van allen toestemming wil geven. Alles samen bezit niemand het medicijn.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een leeg pand in een stad blijft braak liggen omdat het eigendom is van zoveel erfgenamen dat niemand het kan kopen of ontwikkelen." },
      { domain: "business", icon: "💼", text: "Patent-thickets in de halfgeleiderindustrie: zo veel overlappende patenten dat innovatie stagneert door transactiekosten en blokkeringen." },
      { domain: "science", icon: "🔬", text: "Michael Heller beschreef in 1998 de 'tragedy of the anticommons' als spiegelbeeld van Hardin's klassieke tragedie van de meent." }
    ],
  },

  // ── BATCH 5: SOCIOLOGIE ───────────────────────────────────────
  {
    id: "matthew-effect",
    title: "Matteüs-Effect",
    difficulty: 2,
    emoji: "📈",
    academicCategory: "Sociologie",
    skillCategory: "Beter Redeneren",
    definition: "Voordelen stapelen zich op bij degenen die al voordelen hebben; nadelen stapelen zich op bij wie al achtergesteld is. Successen vergroten de kansen op verder succes.",
    abstractExample: "Een wetenschapper met veel citaties krijgt meer funding, publicaties en erkenning, waardoor ze nog meer citaties krijgen. Wie al veel heeft, krijgt nog meer — wie weinig heeft, raakt verder achterop.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Kinderen die vroeg goed leren lezen, lezen meer en worden nog beter — terwijl kinderen die achterlopen verder achteropraken." },
      { domain: "business", icon: "💼", text: "Grote platforms (Amazon, Google) trekken meer gebruikers aan, waardoor ze meer data hebben, waardoor ze beter worden." },
      { domain: "science", icon: "🔬", text: "Socioloog Robert Merton bedacht de term in 1968, gebaseerd op de bijbeltekst: 'Aan wie heeft, zal gegeven worden.'" }
    ],
  },
  {
    id: "broken-windows",
    title: "Gebroken-Ramen-Theorie",
    difficulty: 2,
    emoji: "🪟",
    academicCategory: "Criminologie",
    skillCategory: "Beter Redeneren",
    definition: "Zichtbare tekenen van wanorde en verwaarlozing (gebroken ramen, graffiti, zwerfvuil) bevorderen meer wanorde en criminaliteit. De omgeving communiceert normen over wat acceptabel is.",
    abstractExample: "Een gebroken raam dat niet gerepareerd wordt, signaleert dat niemand let. Dit nodigt uit tot meer vandalisme. Schone, goed onderhouden omgevingen communiceren het tegengestelde.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een schone wijk heeft minder zwerfvuil — mensen gooien minder snel een wikkel weg als de stoep al schoon is." },
      { domain: "business", icon: "💼", text: "Kleine overtredingen op kantoor (snoepen uit de koffiekas) die getolereerd worden, normaliseren grotere overtredingen." },
      { domain: "science", icon: "🔬", text: "Wilson & Kelling (1982) publiceerden de theorie; het beleid werd controversieel getest in New York City in de jaren '90." }
    ],
  },
  {
    id: "social-capital",
    title: "Sociaal Kapitaal",
    difficulty: 2,
    emoji: "🤝",
    academicCategory: "Sociologie",
    skillCategory: "Beter Samenwerken",
    definition: "De waarde die voortvloeit uit sociale netwerken, relaties en gedeelde normen van vertrouwen en wederkerigheid. Sociaal kapitaal maakt samenwerking goedkoper en effectiever.",
    abstractExample: "Twee buren die elkaar kennen en vertrouwen, kunnen elkaars pakketjes aannemen, om gereedschap vragen en in noodsituaties helpen — zonder formeel contract. Dat is sociaal kapitaal in actie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "In een gemeenschap met hoog sociaal vertrouwen worden winkelwagens teruggebracht, deuren niet gesloten en informele overeenkomsten nagekomen." },
      { domain: "business", icon: "💼", text: "Teams met goede onderlinge relaties communiceren beter, lossen conflicten sneller op en presteren beter dan teams met hetzelfde talent maar lage cohesie." },
      { domain: "science", icon: "🔬", text: "Robert Putnam toonde in 'Bowling Alone' (2000) aan dat het sociaal kapitaal in de VS sterk was gedaald en dit correleerde met lagere democratische participatie." }
    ],
  },
  {
    id: "moral-panic",
    title: "Morele Paniek",
    difficulty: 2,
    emoji: "😱",
    academicCategory: "Sociologie",
    skillCategory: "Kritisch Denken",
    definition: "Een heftige, soms overdreven reactie van de samenleving op een veronderstelde bedreiging voor sociale waarden en normen. Media, politici en experts versterken de angst en creëren een 'folk devil'.",
    abstractExample: "In de jaren '80 leidde de 'Satanic Panic' in de VS tot massale veroordelingen van onschuldige kleuterschoolleidsters op basis van nauwelijks bewijs — aangewakkerd door media en therapeuten.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Nieuwe muziekstijlen (rock, hiphop) worden telkens als morele gevaren voor de jeugd gepresenteerd — dit herhaalpatroon is een klassieker morele paniek." },
      { domain: "business", icon: "💼", text: "Morele paniek rond videogames en geweld leidde tot regelgeving, terwijl wetenschappelijk bewijs voor een direct verband zwak is." },
      { domain: "science", icon: "🔬", text: "Stanley Cohen beschreef morele paniek voor het eerst in 1972 bij zijn studie van de 'Mods and Rockers'-rellen in Groot-Brittannië." }
    ],
  },
  {
    id: "homophily",
    title: "Gelijksoortigheidsprincipe",
    difficulty: 1,
    emoji: "🪞",
    academicCategory: "Sociologie",
    skillCategory: "Beter Samenwerken",
    definition: "De neiging van mensen om zich te associëren met en te verbinden aan anderen die op hen lijken. Gelijke trekken gelijke aan — in opleiding, etniciteit, politieke overtuiging, leeftijd en waarden.",
    abstractExample: "Sociale netwerken zijn zelden willekeurig. Mensen hebben gemiddeld vaker vrienden met dezelfde politieke overtuiging, achtergrond en opleiding. Dit creëert homogene 'bubbels'.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Onderzoek toont dat de meeste mensen vijf beste vrienden hebben die op hen lijken qua opleiding, politieke overtuiging en etniciteit." },
      { domain: "business", icon: "💼", text: "Recruiters kiezen onbewust kandidaten die op hen lijken — dit ondermijnt diversiteit en versterkt homogeniteit in teams." },
      { domain: "science", icon: "🔬", text: "McPherson, Smith-Lovin & Cook toonden in 2001 aan dat homofily de sterkste structurerende kracht in sociale netwerken is." }
    ],
  },
  {
    id: "diffusion-of-responsibility",
    title: "Verspreiding van Verantwoordelijkheid",
    difficulty: 2,
    emoji: "👥",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Beter Samenwerken",
    definition: "Hoe meer mensen aanwezig zijn in een noodsituatie, hoe minder ieder individu zich persoonlijk verantwoordelijk voelt om in te grijpen. Aanwezigheid van anderen vermindert individuele actie.",
    abstractExample: "In een grote menigte valt iemand flauw. Iedereen wacht totdat iemand anders helpt — want er zijn zoveel mensen, zeker één zal wel ingrijpen. Niemand doet iets. In een kleine groep helpt iemand direct.",
    examples: [
      { domain: "daily", icon: "🏠", text: "In een druk bezet kantoor zijn de keuken en badkamer het vuilste — iedereen denkt dat een ander het wel schoonmaakt." },
      { domain: "business", icon: "💼", text: "In grote vergaderingen neemt niemand verantwoordelijkheid voor een slecht besluit — iedereen dacht dat iemand anders het zou tegenhouden." },
      { domain: "science", icon: "🔬", text: "Latané & Darley (1968) ontdekten het fenomeen na de Kitty Genovese-zaak, waarbij tientallen buren beweren getuige te zijn geweest maar niemand ingreep." }
    ],
  },
  {
    id: "relative-deprivation",
    title: "Relatieve Deprivatie",
    difficulty: 2,
    emoji: "😤",
    academicCategory: "Sociologie",
    skillCategory: "Beter Redeneren",
    definition: "Het gevoel van ontevredenheid dat ontstaat niet door absolute armoede maar door vergelijking met anderen. We meten onze welvaart aan de hand van de omgeving, niet aan absolute standaarden.",
    abstractExample: "Iemand die €60.000 verdient in een buurt van miljonairs voelt zich arm. Diezelfde persoon in een armere buurt voelt zich welvarend. Het inkomen is gelijk; de referentiegroep verschilt.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Na een salarisverhoging voel je je slechter wanneer je hoort dat een collega een grotere verhoging kreeg — ook al verdien je meer dan ervoor." },
      { domain: "business", icon: "💼", text: "Onderzoek toont dat tevredenheid over salaris meer bepaald wordt door de positie ten opzichte van collega's dan door het absolute bedrag." },
      { domain: "science", icon: "🔬", text: "Stouffer et al. beschreven het fenomeen in 1949 bij onderzoek naar tevredenheid van soldaten: promotieontevredenheid was groter in eenheden met meer promoties." }
    ],
  },
  {
    id: "labeling-theory",
    title: "Labelingtheorie",
    difficulty: 2,
    emoji: "🏷️",
    academicCategory: "Sociologie",
    skillCategory: "Beter Redeneren",
    definition: "Wanneer mensen gelabeld worden als afwijkend, internaliseren ze dit label en gedragen ze zich er naar. Het label wordt een self-fulfilling prophecy. Sociale reactie op gedrag is medebepalend voor toekomstig gedrag.",
    abstractExample: "Een kind dat op school als 'probleemkind' wordt bestempeld, gedraagt zich steeds meer als een probleemkind — niet omdat het 'slecht' is, maar omdat de sociale omgeving dat verwacht en versterkt.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Iemand die na een incident 'crimineel' wordt gelabeld, ondervindt dat dit label sociale uitsluiting veroorzaakt, wat de kans op herhaling vergroot." },
      { domain: "business", icon: "💼", text: "Medewerkers die als 'high potential' worden gelabeld, groeien sneller — deels door meer aandacht en kansen die ze krijgen." },
      { domain: "science", icon: "🔬", text: "Howard Becker beschreef in 'Outsiders' (1963) hoe deviantie een sociaal geconstrueerd label is, niet een intrinsieke eigenschap." }
    ],
  },
  {
    id: "social-loafing",
    title: "Sociaal Luieren",
    difficulty: 1,
    emoji: "😴",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Beter Samenwerken",
    definition: "Individuen leveren minder inspanning wanneer ze werken als deel van een groep dan wanneer ze individueel werken. Anonimiteit in een groep vermindert persoonlijk accountability.",
    abstractExample: "Bij touwtrekken trekt een groep van acht mensen niet acht keer zo hard als één persoon — elke persoon levert gemiddeld minder kracht dan wanneer ze alleen trekken.",
    examples: [
      { domain: "daily", icon: "🏠", text: "In groepsprojecten op school doen sommige studenten minder, wetende dat het groepsgemiddelde hun individuele bijdrage maskeert." },
      { domain: "business", icon: "💼", text: "In grote vergaderingen zijn bijdragen van individuen minder specifiek en minder eigenaardig dan in een-op-een gesprekken." },
      { domain: "science", icon: "🔬", text: "Ringelmann ontdekte in 1913 als eerste dat de individuele inspanning bij touwtrekken daalt naarmate de groep groter wordt." }
    ],
  },
  {
    id: "normalization-deviance",
    title: "Normalisering van Afwijking",
    difficulty: 3,
    emoji: "⚠️",
    academicCategory: "Organisatiesociologie",
    skillCategory: "Betere Beslissingen",
    definition: "Wanneer kleine afwijkingen van veiligheidsnormen geen onmiddellijke gevolgen hebben, worden ze geleidelijk als normaal geaccepteerd — totdat een catastrofale mislukking optreedt.",
    abstractExample: "Een team stelt vast dat er kleine scheurtjes in een onderdeel zijn, maar het onderdeel houdt het steeds. Na tientallen vluchten wordt dit als 'normaal' beschouwd — totdat het onderdeel fataal faalt.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Autobanden met iets te lage spanning rijden de eerste honderd keer prima. Men stopt het controleren — totdat er een klapband is." },
      { domain: "business", icon: "💼", text: "Kleine veiligheidsprotocollen worden genegeerd omdat ze 'altijd goed gaan'. Tot er een ongeluk is." },
      { domain: "science", icon: "🔬", text: "Diane Vaughan beschreef normalisering van afwijking als de kernverklaring voor de Challenger-ramp (1986) in haar boek 'The Challenger Launch Decision'." }
    ],
  },

  // ── BATCH 6: WETENSCHAPSFILOSOFIE & EPISTEMOLOGIE ─────────────
  {
    id: "replication-crisis",
    title: "Replicatiecrisis",
    difficulty: 2,
    emoji: "🔬",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Kritisch Denken",
    definition: "De ontdekking dat veel gepubliceerde wetenschappelijke bevindingen niet reproduceerbaar zijn door onafhankelijke onderzoekers. Factoren als publicatiebias, kleine steekproeven en p-hacking dragen bij.",
    abstractExample: "Slechts 36% van de gepubliceerde psychologiestudies gaf hetzelfde resultaat bij herhaling (Open Science Collaboration, 2015). Veel klassieke bevindingen bleken niet te repliceren.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Populair wetenschappelijk nieuws over 'bewezen' effecten van koffie, wijn of bepaalde diëten keert vaak terug als 'toch niet bewezen'." },
      { domain: "business", icon: "💼", text: "Managementinterventies gebaseerd op psychologieonderzoek (sommige priming-experimenten) bleken in de praktijk niet te werken." },
      { domain: "science", icon: "🔬", text: "De replicatiecrisis leidde tot open science beweging: pre-registratie, open data en grotere steekproeven als structurele oplossingen." }
    ],
  },
  {
    id: "publication-bias",
    title: "Publicatiebias",
    difficulty: 2,
    emoji: "📰",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Kritisch Denken",
    definition: "De neiging van wetenschappelijke tijdschriften om studies met positieve, statistisch significante resultaten vaker te publiceren dan studies met negatieve of nulresultaten. Het gepubliceerde beeld is systematisch te positief.",
    abstractExample: "Stel: 20 onderzoeken naar een medicijn. Vijf vinden een positief effect (door kans); vijftien vinden niets. Alleen de vijf positieve worden gepubliceerd. Het lijkt of het medicijn werkt.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Dieetonderzoek dat werkt haalt het nieuws; het grote deel dat niet werkt wordt niet gepubliceerd of vergeten." },
      { domain: "business", icon: "💼", text: "Positieve casestudies van managementstrategieën worden gepubliceerd; de vele mislukkingen zijn minder zichtbaar." },
      { domain: "science", icon: "🔬", text: "Meta-analyses correcting for publication bias via funnel plots tonen systematisch dat effectgroottes kleiner zijn dan de gepubliceerde literatuur suggereert." }
    ],
  },
  {
    id: "demarcation-problem",
    title: "Afbakeningsprobleem",
    difficulty: 3,
    emoji: "🔭",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Kritisch Denken",
    definition: "De filosofische vraag hoe we wetenschap kunnen onderscheiden van pseudowetenschap, metafysica en andere vormen van kennis. Er is geen scherpe grens die breed geaccepteerd is.",
    abstractExample: "Is astrologie wetenschap? Is de evolutietheorie te falsificeren? Is Freudiaanse psychoanalyse wetenschappelijk? Het afbakeningsprobleem vraagt naar de criteria voor 'echte wetenschap'.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Homeopathie promoot zichzelf als wetenschap maar voldoet niet aan de criteria van herhaalbaarheid en falsificeerbaarheid." },
      { domain: "business", icon: "💼", text: "Bedrijven die wetenschappelijke taal gebruiken voor onbewezen claims maken gebruik van de vage grens tussen wetenschap en pseudowetenschap." },
      { domain: "science", icon: "🔬", text: "Karl Popper stelde falsificeerbaarheid voor als demarkatiecriterium; Lakatos en Kuhn boden complexere alternatieven." }
    ],
  },
  {
    id: "inference-to-best-explanation",
    title: "Redeneren naar Beste Verklaring",
    difficulty: 2,
    emoji: "🕵️",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Beter Redeneren",
    definition: "We kiezen de hypothese die, als ze waar is, het bestaande bewijs het beste verklaart. Ook wel 'abductieve redenering' of 'abductie' — redeneren naar de meest plausibele verklaring.",
    abstractExample: "Je komt thuis en je hond zit bij zijn lege bakje te huilen. De beste verklaring: hij heeft honger en wil eten. Er zijn andere mogelijkheden, maar dit verklaart het bewijs het eenvoudigst en volledigst.",
    examples: [
      { domain: "daily", icon: "🏠", text: "De dokter ziet symptomen (koorts, hoest, vermoeidheid) en concludeert 'waarschijnlijk griep' — de beste verklaring voor het patroon." },
      { domain: "business", icon: "💼", text: "Een bedrijf ziet verkopen dalen en klachten stijgen na een productupdating: de beste verklaring is een probleem in de update." },
      { domain: "science", icon: "🔬", text: "Darwin's evolutietheorie was oorspronkelijk een abductieve gevolgtrekking: deze theorie verklaart de variatie in soorten het best." }
    ],
  },
  {
    id: "underdetermination",
    title: "Onderbepaling",
    difficulty: 3,
    emoji: "🔀",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Kritisch Denken",
    definition: "Bewijzen zijn altijd compatibel met meerdere concurrerende theorieën. Data bepalen niet uniek welke theorie juist is — er zijn altijd alternatieven die hetzelfde bewijs verklaren.",
    abstractExample: "Alle meetresultaten van het sterrenstelsel zijn compatibel met Newton's zwaartekrachtswet én met Einsteins relativiteitstheorie (voor normale situaties). Het bewijs 'onderbepalt' de theorie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een arts ziet dezelfde symptomen bij tien patiënten maar vijf hebben ziekte A, vijf hebben ziekte B. De symptomen bepalen de diagnose niet uniek." },
      { domain: "business", icon: "💼", text: "Dezelfde verkoopdaling kan verklaard worden door economische recessie, slechte marketing of productproblemen — de data sluiten geen van de theorieën uit." },
      { domain: "science", icon: "🔬", text: "Quine-Duhem-stelling: bij een experiment test je nooit één theorie maar altijd een combinatie van theorieën en hulphypothesen." }
    ],
  },
  {
    id: "principle-of-charity",
    title: "Liefdadigheidsprincipe",
    difficulty: 1,
    emoji: "🫱",
    academicCategory: "Filosofie",
    skillCategory: "Beter Communiceren",
    definition: "Interpreteer het argument van de ander in zijn sterkst mogelijke vorm voordat je het beantwoordt. Dit leidt tot eerlijker debat en betere begrip van het tegenstandpunt.",
    abstractExample: "Als iemand een zwak geformuleerd argument geeft, zoek dan de sterkste interpretatie voordat je reageert. Zeg: 'Ik begrijp jouw punt als X, klopt dat?' — en debatteer dan met die sterkste versie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "In een discussie met je partner zoek je de beste interpretatie van hun klacht in plaats van het zwakste punt aan te vallen." },
      { domain: "business", icon: "💼", text: "Een goede advocaat of debater begrijpt het tegenstandpunt zo goed dat ze het zelf kunnen verdedigen voordat ze het weerleggen." },
      { domain: "science", icon: "🔬", text: "Het liefdadigheidsprincipe is de tegenhanger van de 'steel man' versus 'straw man' aanpak in argumentatie." }
    ],
  },
  {
    id: "epistemic-closure",
    title: "Epistemische Afsluiting",
    difficulty: 3,
    emoji: "🔒",
    academicCategory: "Epistemologie",
    skillCategory: "Kritisch Denken",
    definition: "Een gesloten kennissysteem waarin alle nieuwe informatie wordt geïnterpreteerd als bevestiging van bestaande overtuigingen. Tegenbewijzen worden weggeredeneerd of gereïnterpreteerd.",
    abstractExample: "Een samenzweringsdenker gelooft in een complot. Bewijs voor het complot bevestigt het. Afwezigheid van bewijs is ook bewijs: 'ze verbergen het'. Tegenbewijzen zijn 'plantingen'. Het systeem is gesloten.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Iemand die gelooft in een medisch complot beschouwt afwijkende wetenschappers als betalend door de farmaceutische industrie, waardoor elke weerlegging in het systeem past." },
      { domain: "business", icon: "💼", text: "Een manager die overtuigd is van het succes van een strategie interpreteert tegenvallers als tijdelijke obstakels in plaats van bewijs dat de strategie faalt." },
      { domain: "science", icon: "🔬", text: "Popper beschreef dit als het kenmerk van pseudowetenschap: een theorie die altijd bevestigd wordt en nooit weerlegd kan worden, is informatieloos." }
    ],
  },
  {
    id: "theory-ladenness",
    title: "Theoriebeladenheid",
    difficulty: 3,
    emoji: "🔭",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Kritisch Denken",
    definition: "Waarnemingen zijn altijd gekleurd door de theoretische achtergrond van de waarnemer. Er bestaat geen 'onschuldige' observatie — wat je ziet, is deels wat je al gelooft.",
    abstractExample: "Een arts en een leek kijken naar een röntgenfoto. De arts 'ziet' een tumor; de leek ziet grijze vlekken. Dezelfde retinale stimulatie, verschillende waarnemingen door verschillende theoretische achtergronden.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een expert ziet een schaakbord heel anders dan een beginner — de theoretische kennis structureert de waarneming." },
      { domain: "business", icon: "💼", text: "Een econoom en een socioloog bekijken dezelfde arbeidsmarktdata maar 'zien' heel verschillende problemen en patronen." },
      { domain: "science", icon: "🔬", text: "Norwood Hanson beschreef in 'Patterns of Discovery' (1958) hoe Tycho Brahe en Copernicus dezelfde zonsopgang 'zagen' maar verschillende dingen waarnamen." }
    ],
  },
  {
    id: "confirmation-holism",
    title: "Bevestigingsholisme",
    difficulty: 3,
    emoji: "🌐",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Kritisch Denken",
    definition: "Wetenschappelijke statements worden niet afzonderlijk getest maar als deel van een netwerk van overtuigingen. Een gefaalde voorspelling kan aan elke schakel worden toegeschreven.",
    abstractExample: "Een experiment faalt. Is de theorie fout? Of de meetinstrumenten? Of de randcondities? Of de mathematische modellen? Je test nooit één stelling maar altijd een heel stelsel tegelijk.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Als je recept mislukt, is het de fout van het recept, de kwaliteit van ingrediënten, de oven of jouw techniek? Je weet het niet zeker." },
      { domain: "business", icon: "💼", text: "Een marketingcampagne faalt. Was het de boodschap, het kanaal, het product, de timing, of de concurrentie? Elke schakel kan de oorzaak zijn." },
      { domain: "science", icon: "🔬", text: "Duhem (1914) en Quine (1951) formuleerden de these dat theorieën het empirische bewijs altijd als netwerk confronteren, niet stuk voor stuk." }
    ],
  },
  {
    id: "instrumentalism",
    title: "Instrumentalisme",
    difficulty: 3,
    emoji: "🔧",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Kritisch Denken",
    definition: "De opvatting dat wetenschappelijke theorieën niet letterlijk waar hoeven te zijn, maar slechts nuttige instrumenten voor voorspelling en controle. Tegenover wetenschappelijk realisme: theorieën beschrijven werkelijkheid.",
    abstractExample: "Een instrumentalist zegt over de kwantummechanica: 'Ik hoef niet te geloven dat elektronen echt bestaan — het is een model dat perfect voorspelt.' Een realist zegt: 'Elektronen zijn echt.'",
    examples: [
      { domain: "daily", icon: "🏠", text: "Gebruik van GPS werkt perfect zonder te begrijpen dat de relativiteitstheorie 'echt' is — het instrument werkt, de filosofie is onbelangrijk." },
      { domain: "business", icon: "💼", text: "Economische modellen worden als instrumenten gebruikt om beleidseffecten te voorspellen, ongeacht of ze de economische realiteit 'werkelijk' beschrijven." },
      { domain: "science", icon: "🔬", text: "Niels Bohr hanteerde een instrumentalistische houding tegenover de kwantummechanica: 'Shut up and calculate'." }
    ],
  },

  // ── BATCH 7: SYSTEEMDENKEN & COMPLEXITEIT ────────────────────
  {
    id: "emergence",
    title: "Emergentie",
    difficulty: 2,
    emoji: "🌊",
    academicCategory: "Systeemdenken",
    skillCategory: "Beter Redeneren",
    definition: "Eigenschappen die ontstaan op het niveau van een systeem maar niet aanwezig zijn in de afzonderlijke onderdelen. Het geheel heeft eigenschappen die niet kunnen worden afgeleid uit de delen.",
    abstractExample: "Water is nat, maar een afzonderlijk watermolecule is niet nat. Nat-zijn is een emergente eigenschap die ontstaat door de collectieve interactie van miljoenen moleculen.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een verkeersopstopping bestaat als patroon, maar geen enkel afzonderlijk voertuig 'is' de file. Het patroon emergeert uit interacties." },
      { domain: "business", icon: "💼", text: "Bedrijfscultuur is een emergent verschijnsel: geen enkel individu draagt de cultuur, maar ze ontstaat uit alle interacties samen." },
      { domain: "science", icon: "🔬", text: "Bewustzijn wordt door velen beschouwd als een emergente eigenschap van neurale netwerken — niet aanwezig in een enkel neuron." }
    ],
  },
  {
    id: "tipping-point",
    title: "Kantelpunt",
    difficulty: 2,
    emoji: "⚖️",
    academicCategory: "Systeemdenken",
    skillCategory: "Beter Redeneren",
    definition: "Het punt waarop een systeem abrupt van één stabiele toestand naar een andere overgaat. Na het kantelpunt versnelt verandering dramatisch en is ze moeilijk te keren.",
    abstractExample: "Water bij 99°C: nog vloeibaar. Bij 100°C: kookt plotseling. De temperatuur steeg langzaam, maar de gedragsverandering is abrupt. Veel sociale en ecologische systemen hebben vergelijkbare drempels.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een geruchtenverspreiding verspreidt langzaam totdat een kritisch punt wordt bereikt — dan verspreidt het zich exponentieel." },
      { domain: "business", icon: "💼", text: "Een merk dat jarenlang leegloopt bereikt een reputatiekantelpunt waarna negatief nieuws viraal gaat en de omzet instort." },
      { domain: "science", icon: "🔬", text: "Klimaatmodellen beschrijven kantelpunten: verlies van poolijs, ontdooiing van permafrost, die klimaatverandering onomkeerbaar versnellen." }
    ],
  },
  {
    id: "leverage-points",
    title: "Hefboompunten",
    difficulty: 3,
    emoji: "🔧",
    academicCategory: "Systeemdenken",
    skillCategory: "Betere Beslissingen",
    definition: "Plaatsen in een systeem waar een kleine verandering grote effecten teweegbrengt. Donella Meadows identificeerde twaalf hefboompunten, van zwak (getallen veranderen) tot sterk (paradigma's veranderen).",
    abstractExample: "In een schoolsysteem: meer boeken kopen is een zwak hefboompunt. De structuur van examens veranderen is sterker. Het paradigma over wat leren is veranderen is het sterkst.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een kleine verandering in je ochtendroutine kan een dagelijks patroon volledig kantelen — een zwak hefboompunt met groot cumulatief effect." },
      { domain: "business", icon: "💼", text: "Een bedrijf dat zijn beloningssysteem aanpast (incentives) verandert gedrag meer dan regels toevoegen — een sterker hefboompunt." },
      { domain: "science", icon: "🔬", text: "Donella Meadows beschreef in 'Thinking in Systems' (2008) twaalf hefboompunten in oplopende effectiviteit." }
    ],
  },
  {
    id: "path-dependency",
    title: "Padafhankelijkheid",
    difficulty: 2,
    emoji: "🛤️",
    academicCategory: "Systeemdenken",
    skillCategory: "Beter Redeneren",
    definition: "Eerdere beslissingen beperken de huidige keuzemogelijkheden. Historische toevalligheden in vroege keuzes kunnen een systeem voor lange tijd in een suboptimale richting vastzetten.",
    abstractExample: "Het QWERTY-toetsenbord was ontworpen om typewriter-mechanismen te beschermen, niet voor snelheid. Hoewel ergonomischere alternatieven bestaan, is overstappen bijna onmogelijk door het netwerk van gebruikers.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een stad met historisch slecht geplande weginfrastructuur kan die infrastructuur moeilijk vervangen omdat zoveel gebouwen eromheen zijn gebouwd." },
      { domain: "business", icon: "💼", text: "Technologiebedrijven die vroeg kozen voor een bepaalde programmeertaal of architectuur zijn er decennialang aan gebonden door legacy code." },
      { domain: "science", icon: "🔬", text: "David (1985) beschreef QWERTY als het klassieke voorbeeld van padafhankelijkheid in technologie-adoptie." }
    ],
  },
  {
    id: "lock-in-effect",
    title: "Vergrendeling",
    difficulty: 2,
    emoji: "🔐",
    academicCategory: "Economie",
    skillCategory: "Betere Beslissingen",
    definition: "Wanneer gebruikers of bedrijven zo afhankelijk zijn geworden van een product, platform of technologie dat overstappen naar een alternatief te kostbaar is, ook als het alternatief beter is.",
    abstractExample: "Zodra al jouw contacten op één social media platform zitten, is de overstapdrempel enorm — ook als een beter platform bestaat. De netwerkwaarde houdt je gevangen.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Microsoft Office: iedereen gebruikt het, waardoor je het ook moet gebruiken voor compatibiliteit, ook als alternatieven goedkoper zijn." },
      { domain: "business", icon: "💼", text: "Bedrijven die hun data in één cloud-platform opslaan, zijn vatbaar voor prijsverhogingen omdat migratie naar concurrenten duur is." },
      { domain: "science", icon: "🔬", text: "Switching costs (overstapkosten) zijn het economische mechanisme achter lock-in: de som van leer-, compatibiliteits- en verlieskosten." }
    ],
  },
  {
    id: "self-organization",
    title: "Zelforganisatie",
    difficulty: 2,
    emoji: "🐝",
    academicCategory: "Systeemdenken",
    skillCategory: "Beter Redeneren",
    definition: "Het proces waarbij orde en structuur spontaan ontstaan in een systeem zonder centrale aansturing. Lokale interacties leiden tot globale patronen zonder dat iemand het patroon ontworpen heeft.",
    abstractExample: "Een bijenkorf heeft geen architect of manager. Tienduizenden bijen volgen simpele regels en produceren samen een perfect geoptimaliseerde structuur. De orde is het gevolg van lokale interacties.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Drukke markten regelen prijzen zonder centrale planning — vraag en aanbod leiden via lokale interacties tot globale evenwichten." },
      { domain: "business", icon: "💼", text: "Open source software-projecten produceren complexe producten zonder hiërarchie: duizenden individuen coördineren via gedeelde normen en code." },
      { domain: "science", icon: "🔬", text: "Murmurations (spreeuwen in vlucht) tonen hoe duizenden vogels via eenvoudige lokale regels complexe groepspatronen creëren zonder leider." }
    ],
  },
  {
    id: "butterfly-effect",
    title: "Vlindereffect",
    difficulty: 2,
    emoji: "🦋",
    academicCategory: "Systeemdenken",
    skillCategory: "Beter Redeneren",
    definition: "In chaotische systemen kunnen kleine initiële verschillen leiden tot grote, onvoorspelbare uitkomsten. Sensitieve afhankelijkheid van begincondities maakt langetetermijn voorspelling fundamenteel onmogelijk.",
    abstractExample: "Edward Lorenz: een vlinder die zijn vleugels beweegt in Brazilië kan theoretisch een tornado in Texas veroorzaken. Kleine verstoringen versterken zich exponentieel in chaotische systemen.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een toevallige ontmoeting leidt tot een nieuw contact, een baan-aanbieding, verhuizing naar een andere stad. Kleine begineventen, grote levensuitkomsten." },
      { domain: "business", icon: "💼", text: "Een vroeg klantreview (positief of negatief) op een platform kan het succes van een product fundamenteel bepalen via sneeuwbaleffecten." },
      { domain: "science", icon: "🔬", text: "Lorenz ontdekte het effect bij computersimulaties van het weer in 1961: afrondingsverschillen in beginwaarden produceerden totaal verschillende weerpatronen." }
    ],
  },
  {
    id: "nonlinear-dynamics",
    title: "Niet-Lineaire Dynamica",
    difficulty: 3,
    emoji: "📈",
    academicCategory: "Systeemdenken",
    skillCategory: "Beter Redeneren",
    definition: "In niet-lineaire systemen zijn uitkomsten niet evenredig met oorzaken. Kleine oorzaken kunnen grote effecten hebben; grote oorzaken soms kleine effecten. De wereld is overwegend niet-lineair.",
    abstractExample: "Lineair: twee keer zo hard duwen = twee keer zo snel. Niet-lineair: bij een bepaalde drempel verandert de stroom plotseling van laminair naar turbulent — geen evenredige relatie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Stress en prestatie: een beetje stress verbetert prestatie; te veel stress doet de prestatie instorten. Geen lineaire relatie." },
      { domain: "business", icon: "💼", text: "Virale marketing: de meeste campagnes mislukken, maar incidenteel versterkt een kleine initiale verspreiding zich naar miljoenen." },
      { domain: "science", icon: "🔬", text: "Populatiedynamica: een paar roofdieren toegevoegen kan een ecosysteem stabiliseren (niet-lineair) — geen simpele evenredige relatie." }
    ],
  },
  {
    id: "resilience-ecology",
    title: "Ecologische Weerbaarheid",
    difficulty: 2,
    emoji: "🌿",
    academicCategory: "Systeemdenken",
    skillCategory: "Beter Redeneren",
    definition: "Het vermogen van een systeem om verstoringen te absorberen en te herstellen naar zijn oorspronkelijke staat, of te transformeren naar een nieuwe stabiele toestand. Veerkracht is anders dan stabiliteit.",
    abstractExample: "Een oerbos is weerbaarder dan een monocultuur: als een parasiet één boomsoort treft, overleven andere soorten en herstelt het bos. De monocultuur heeft geen interne buffers.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een persoon met diverse sociale connecties en vaardigheden is weerbaarder bij een baanverlies dan iemand met één baan en één netwerk." },
      { domain: "business", icon: "💼", text: "Bedrijven met diverse productportfolios en markten overleven economische crises beter dan bedrijven die afhankelijk zijn van één product." },
      { domain: "science", icon: "🔬", text: "C.S. Holling (1973) introduceerde het concept van ecologische veerkracht als het vermogen van systemen om verstoringen te absorberen terwijl ze hun structuur behouden." }
    ],
  },
  {
    id: "adaptive-capacity",
    title: "Aanpassingsvermogen",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Systeemdenken",
    skillCategory: "Betere Beslissingen",
    definition: "Het vermogen van een systeem, organisatie of individu om te leren, te innoveren en de structuur te veranderen als reactie op veranderende omstandigheden. Aanpassingsvermogen gaat verder dan aanpassen: het omvat fundamenteel veranderen.",
    abstractExample: "Een taxi-bedrijf dat zijn diensten verbetert om Uber bij te houden, past zich aan. Een bedrijf dat zichzelf transformeert tot een mobiliteitsplatform, heeft aanpassingsvermogen op het diepste niveau.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Mensen met hoog aanpassingsvermogen leren nieuwe vaardigheden, zoeken nieuwe perspectieven en herdefiniëren hun identiteit bij tegenslagen." },
      { domain: "business", icon: "💼", text: "Amazon begon als boekverkoper en transformeerde tot cloud-provider, streamingdienst en logistiek bedrijf — hoog aanpassingsvermogen." },
      { domain: "science", icon: "🔬", text: "In evolutie is aanpassingsvermogen niet 'snelst' of 'sterkst' maar 'meest responsief op omgevingsveranderingen' — Darwin's echte boodschap." }
    ],
  },

  // ── BATCH 8: SPELTHEORIE & STRATEGIE ─────────────────────────
  {
    id: "signaling-theory",
    title: "Signaleringstheorie",
    difficulty: 2,
    emoji: "📡",
    academicCategory: "Speltheorie",
    skillCategory: "Betere Beslissingen",
    definition: "Partijen met private informatie sturen signalen naar anderen om die informatie geloofwaardig te communiceren. Een signaal is alleen geloofwaardig als het duur of moeilijk te imiteren is.",
    abstractExample: "Een universiteitsgraad communiceert intellect aan werkgevers. Zelfs als de opleiding weinig praktische vaardigheden geeft, werkt het als signaal omdat het alleen haalbaar is voor mensen met voldoende cognitieve capaciteit.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een pauw met een zware staart bewijst zijn gezondheid juist doordat de last zo groot is — alleen gezonde pauwen kunnen hem dragen." },
      { domain: "business", icon: "💼", text: "Een bedrijf dat een hoog dividend uitkeert, signaleert financiële gezondheid — alleen gezonde bedrijven kunnen zich dit veroorloven." },
      { domain: "science", icon: "🔬", text: "Michael Spence won in 2001 de Nobelprijs voor zijn signaleringsmodel op de arbeidsmarkt (1973)." }
    ],
  },
  {
    id: "screening-theory",
    title: "Screeningstheorie",
    difficulty: 2,
    emoji: "🔍",
    academicCategory: "Speltheorie",
    skillCategory: "Betere Beslissingen",
    definition: "Partijen zonder private informatie ontwerpen contracten of mechanismen die partijen met verschillende kwaliteiten ertoe aanzetten zichzelf te onthullen. De geïnformeerde partij 'screent' zichzelf.",
    abstractExample: "Een verzekeraar kan niet weten of een klant hoog of laag risico is. Door verschillende contracten aan te bieden (hoge premie/laag eigen risico vs. lage premie/hoog eigen risico), laten klanten hun eigen risicoprofiel blijken.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Proefperiodes bij abonnementen screenen klanten: wie blijft na de proefperiode, is serieus; wie opzegt, wilde toch niet betalen." },
      { domain: "business", icon: "💼", text: "Sollicitatiegesprekken met casussen screenen sollicitanten: goede kandidaten presteren beter dan kandidaten die slechts het curriculum hadden geleerd." },
      { domain: "science", icon: "🔬", text: "Joseph Stiglitz formaliseerde screening in de economie en won er mede de Nobelprijs voor in 2001." }
    ],
  },
  {
    id: "credible-commitment",
    title: "Geloofwaardige Toezegging",
    difficulty: 2,
    emoji: "🤝",
    academicCategory: "Speltheorie",
    skillCategory: "Betere Beslissingen",
    definition: "Een belofte of dreiging is geloofwaardig als de toezeggende partij zich zo heeft gebonden dat ze er werkelijk belang bij heeft de toezegging na te komen. Geloofwaardigheid vereist kosten voor terugdraaien.",
    abstractExample: "Een generaal die zijn terugtrekroute afsluit, stuurt een geloofwaardige boodschap aan de vijand: zijn troepen moeten winnen, want terugtrekken is onmogelijk. De beperking van eigen vrijheid is de bron van geloofwaardigheid.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een deadline publiek maken vergroot de kans dat je het haalt — je hebt jezelf gebonden aan sociale consequenties." },
      { domain: "business", icon: "💼", text: "Een contractuele boete voor niet-nakoming maakt een belofte geloofwaardiger dan een verbale garantie." },
      { domain: "science", icon: "🔬", text: "Thomas Schelling analyseerde in 'The Strategy of Conflict' (1960) hoe geloofwaardige toezeggingen de kern vormen van onderhandeling en afschrikking." }
    ],
  },
  {
    id: "repeated-game",
    title: "Herhaald Spel",
    difficulty: 2,
    emoji: "🔁",
    academicCategory: "Speltheorie",
    skillCategory: "Beter Samenwerken",
    definition: "Wanneer spelers een interactie herhalen, veranderen de strategische mogelijkheden drastisch. Samenwerking en reputatie worden rationeel in herhaalde spelen, ook als ze dat in een éénmalig spel niet zijn.",
    abstractExample: "In een eenmalige ontmoeting is bedriegen rationeel als het voordeel oplevert. In een herhaald spel schept bedriegen een slechte reputatie die toekomstige samenwerking vernietigt — waardoor eerlijkheid rationeel wordt.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Restauranthouders in toeristische trekpleisters bedriegen vaker dan restaurants in woonwijken — toeristen komen éénmalig; buren komen terug." },
      { domain: "business", icon: "💼", text: "Leveranciers die weten dat ze een langdurige relatie met een afnemer hebben, leveren betrouwbaarder dan bij éénmalige transacties." },
      { domain: "science", icon: "🔬", text: "Axelrod's toernooien (1980) toonden dat 'Tit-for-Tat' de succesvolste strategie is in herhaalde gevangendilemma's." }
    ],
  },
  {
    id: "information-cascade",
    title: "Informatiecascade",
    difficulty: 2,
    emoji: "🌊",
    academicCategory: "Speltheorie",
    skillCategory: "Betere Beslissingen",
    definition: "Wanneer individuen hun eigen private informatie negeren en de beslissingen van anderen imiteren, ongeacht of die anderen ook goede informatie hadden. Collectieve dwaling via informatiecascade.",
    abstractExample: "Tien mensen kiezen een restaurant. De eerste twee kiezen restaurant A. De derde heeft twijfels maar ziet twee mensen al gekozen hebben en volgt ook. De vierde ziet drie mensen en volgt. Zo kiest iedereen A — ook als restaurant B beter was.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Boeken en films die 'bestsellers' worden omdat mensen ze kopen omdat anderen ze kopen — ook als andere boeken beter zijn." },
      { domain: "business", icon: "💼", text: "Financiële zeepbellen: investeerders stappen in omdat anderen instappen, ongeacht de fundamentele waarde van het actief." },
      { domain: "science", icon: "🔬", text: "Bikhchandani, Hirshleifer & Welch (1992) formaliseerden het model van informatiecascades als verklaring voor kuddegedrag." }
    ],
  },
  {
    id: "mechanism-design",
    title: "Mechanisme-Ontwerp",
    difficulty: 3,
    emoji: "⚙️",
    academicCategory: "Speltheorie",
    skillCategory: "Betere Beslissingen",
    definition: "Het ontwerpen van regels, incentives en procedures zodat rationele agenten, die hun eigenbelang nastreven, collectief gewenste uitkomsten produceren. Omgekeerde speltheorie: van uitkomst naar regels.",
    abstractExample: "Een veiling ontwerpen zodat bieders hun ware waarde onthullen, niet strategisch bieden. Het juiste mechanisme zorgt dat eerlijk gedrag de dominante strategie wordt.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Peer-review bij wetenschappelijke publicaties is een mechanisme dat incentives voor kwaliteitscontrole creëert door reputatiestimuli." },
      { domain: "business", icon: "💼", text: "Bonussystemen zijn mechanismes: slecht ontworpen bonussen leiden tot korte-termijn denken; goed ontworpen bonussen stimuleren het gewenste gedrag." },
      { domain: "science", icon: "🔬", text: "Hurwicz, Maskin & Myerson wonnen in 2007 de Nobelprijs voor hun grondleggende werk aan mechanisme-ontwerp." }
    ],
  },
  {
    id: "backward-induction",
    title: "Achterwaartse Inductie",
    difficulty: 3,
    emoji: "⏪",
    academicCategory: "Speltheorie",
    skillCategory: "Betere Beslissingen",
    definition: "Een methode om de optimale strategie te vinden door te beginnen bij het eindpunt en terug te redeneren naar het beginpunt. Elke speler voorspelt toekomstige keuzes en handelt nu dienovereenkomstig.",
    abstractExample: "Schaak: om de beste zet nu te vinden, bedenk je welke positie je einddoel is, welke zetten daartoe leiden, en redeneer je terug naar de huidige situatie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Om je loopbaandoel in 10 jaar te bereiken, bedenk je wat je in jaar 9 nodig hebt, dan jaar 8, enzovoort terug naar nu." },
      { domain: "business", icon: "💼", text: "Projectplanning: begin bij de deadline en werk terug naar het begin om te zien welke stappen wanneer moeten worden gezet." },
      { domain: "science", icon: "🔬", text: "Zermelo bewees in 1913 dat schaak in principe volledig analyseerbaar is via achterwaartse inductie — de uitkomst is theoretisch bepaald." }
    ],
  },
  {
    id: "evolutionary-stable-strategy",
    title: "Evolutionair Stabiele Strategie",
    difficulty: 3,
    emoji: "🧬",
    academicCategory: "Speltheorie",
    skillCategory: "Beter Redeneren",
    definition: "Een strategie die, eenmaal wijdverspreid in een populatie, niet geïnvadeerd kan worden door een afwijkende strategie. Een ESS is evolutionair stabiel: zelfinvaders slagen er niet in zich te verspreiden.",
    abstractExample: "In een populatie van 'duiven' (niet agressief) kan een 'havik' (agressief) slagen. Maar een populatie puur haviken is ook instabiel — ze vernietigen elkaar. ESS is often een gemend evenwicht.",
    examples: [
      { domain: "daily", icon: "🏠", text: "In menselijke samenleving is een mix van coöperatie en assertiviteit vaak een evolutionair stabiel evenwicht — pure agressie of pure passiviteit worden beiden uitgeroeid." },
      { domain: "business", icon: "💼", text: "In markten is een mix van concurrentie en samenwerking (co-opetitie) vaak stabieler dan puur agressieve marktstrategie." },
      { domain: "science", icon: "🔬", text: "John Maynard Smith introduceerde ESS in 1973 als toepassing van speltheorie op biologische evolutie." }
    ],
  },
  {
    id: "winner-curse",
    title: "Vloek van de Winnaar",
    difficulty: 2,
    emoji: "🏆",
    academicCategory: "Speltheorie",
    skillCategory: "Betere Beslissingen",
    definition: "De winnaar van een veiling of competitie heeft systematisch overbetaald. Door de verdeling van biedingen zal de hoogste bieder degene zijn die de waarde het meest heeft overschat.",
    abstractExample: "Bij een veiling op een oliebronrecht is de winnaar degene die de oliereserves het hoogst heeft ingeschat. Maar als alle schattingen rond de ware waarde zijn verdeeld, is de hoogste schatting vrijwel zeker een overschatting.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Wie het meest biedt op een huis in een biedingssituatie, heeft waarschijnlijk de waarde overschat — ze betalen meer dan het waard is." },
      { domain: "business", icon: "💼", text: "Bedrijven die overnames doen via biedstrijd, betalen gemiddeld te veel — overnames vernietigen statistisch gezien aandeelhouderswaarde." },
      { domain: "science", icon: "🔬", text: "Capen, Clapp & Campbell (1971) ontdekten de winners curse bij olieveilingen — hun studie was de eerste empirische documentatie." }
    ],
  },
  {
    id: "focal-point-game",
    title: "Coördinatiepunt",
    difficulty: 2,
    emoji: "🎯",
    academicCategory: "Speltheorie",
    skillCategory: "Beter Samenwerken",
    definition: "Wanneer mensen zonder communicatie moeten coördineren, kiezen ze instinctief opties die prominent, uniek of cultureel opvallen. Coördinatiepunten ontstaan door gedeelde culturele kennis of saillantie.",
    abstractExample: "Stel: je moet een vriend ontmoeten in New York zonder afspraken te maken. Wanneer ga je? Wat zou jij kiezen? De meeste New Yorkers zeggen: 12:00, Grand Central Station. Dit is een coördinatiepunt.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Bij een groepsreis zonder planning kiest iedereen instinctief om bij de ingang te wachten — de meest opvallende locatie wordt coördinatiepunt." },
      { domain: "business", icon: "💼", text: "In een markt zonder expliciete afspraken convergeren concurrenten naar 'ronde getallen' als prijspunten — €9,99, €100, €1000." },
      { domain: "science", icon: "🔬", text: "Thomas Schelling beschreef coördinatiepunten in 'The Strategy of Conflict' (1960) als 'focal points' of 'Schelling points'." }
    ],
  },

  // ── BATCH 9: COMMUNICATIE & TAAL ─────────────────────────────
  {
    id: "ethos-pathos-logos",
    title: "Ethos, Pathos en Logos",
    difficulty: 1,
    emoji: "🎙️",
    academicCategory: "Retorica",
    skillCategory: "Beter Communiceren",
    definition: "Aristoteles' drie middelen van overtuiging: ethos (geloofwaardigheid van de spreker), pathos (emotionele aansluiting bij het publiek) en logos (logische argumenten en bewijs).",
    abstractExample: "Een arts die een gezondheidsadvies geeft: ethos = zijn opleiding en ervaring, pathos = zijn empathie met de patiënt, logos = de wetenschappelijke onderbouwing. Alle drie versterken de overtuigingskracht.",
    examples: [
      { domain: "daily", icon: "🏠", text: "In een gesprek met je baas: ethos (jouw trackrecord), pathos (toon die respect en begrip uitstraalt), logos (concrete feiten en cijfers)." },
      { domain: "business", icon: "💼", text: "Een succesvolle presentatie combineert credentialsk (ethos), een emotioneel verhaal (pathos) en harde data (logos)." },
      { domain: "science", icon: "🔬", text: "Aristoteles beschreef deze retorica-driehoek in zijn 'Rhetorica' (~330 v.Chr.) als het fundament van effectieve communicatie." }
    ],
  },
  {
    id: "euphemism-treadmill",
    title: "Eufemisme-Loopband",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Linguïstiek",
    skillCategory: "Beter Communiceren",
    definition: "Eufemismen die gecreëerd zijn om beladen woorden te vervangen, worden zelf beladen door associatie met de geassocieerde realiteit. Dan is er weer een nieuw eufemisme nodig. De loopband draait door.",
    abstractExample: "Shell shock → combat fatigue → PTSD. Elk nieuw woord probeerde de stigma te verminderen. Maar de ervaring bleef, het nieuwe woord werd beladen, en het proces herhaalt zich.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Gehandicapt → beperkt → anders-valide → persoon met een beperking. Elk nieuw woord wordt op zijn beurt gevoelig." },
      { domain: "business", icon: "💼", text: "Ontslagen → afgevloeid → bedrijfsorganisatie-optimalisatie. Bedrijfstaal vult de eufemisme-loopband voortdurend aan." },
      { domain: "science", icon: "🔬", text: "Steven Pinker beschreef de eufemisme-loopband als bewijs dat de negativiteit van een concept aan het woord kleeft, niet aan de klank." }
    ],
  },
  {
    id: "linguistic-relativity",
    title: "Taalrelativiteit",
    difficulty: 2,
    emoji: "🌐",
    academicCategory: "Linguïstiek",
    skillCategory: "Beter Redeneren",
    definition: "De hypothese dat de taal die je spreekt je denken en perceptie beïnvloedt. De sterke versie (Sapir-Whorf): taal bepaalt denken. De zwakke versie: taal beïnvloedt denken.",
    abstractExample: "Het Russische heeft twee woorden voor blauw (lichtblauw en donkerblauw). Russische sprekers onderscheiden deze tinten sneller in tests dan Engelse sprekers — talige categorieën versnellen perceptie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Het Inuïtische heeft vele woorden voor sneeuw — dit maakt genuanceerder waarnemen van sneeuwtypes makkelijker voor sprekers." },
      { domain: "business", icon: "💼", text: "Organisaties die andere woorden gebruiken voor 'falen' (vs. 'leren') bouwen een andere omgang met tegenslag in hun taal — en daarmee in hun cultuur." },
      { domain: "science", icon: "🔬", text: "Boroditsky et al. (2003) toonden empirisch aan dat ruimtelijk taalgebruik ruimtelijk denken beïnvloedt." }
    ],
  },
  {
    id: "semantic-drift",
    title: "Semantische Drift",
    difficulty: 1,
    emoji: "⏳",
    academicCategory: "Linguïstiek",
    skillCategory: "Kritisch Denken",
    definition: "Woorden veranderen van betekenis over tijd, soms volledig tegengesteld aan hun oorspronkelijke betekenis. Wat een woord nu betekent, is het product van eeuwen aan taalmutatie.",
    abstractExample: "'Verschrikkelijk' betekende ooit 'dat ontzag wekt' (als in 'angst/ontzag inboezemen'). Nu is het puur negatief. 'Leuk' is een afkorting van 'lauk' dat ooit 'flauw of zouteloos' betekende.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'Vrij' had in middeleeuws Nederlands de betekenis van 'dapper'. Nu betekent het 'niet gebonden'. De politieke lading verschoof volledig." },
      { domain: "business", icon: "💼", text: "'Investering' heeft een positieve klank gekregen waar het vroeger neutraal was — 'we investeren in medewerkers' klinkt beter dan 'we betalen voor training'." },
      { domain: "science", icon: "🔬", text: "Etymologie bestudeert semantische drift systematisch. 'Terrible' en 'terrific' deelden een Latijnse wortel maar evolueerden naar tegengestelde betekenissen." }
    ],
  },
  {
    id: "speech-act-theory",
    title: "Taalhandeling",
    difficulty: 2,
    emoji: "🗣️",
    academicCategory: "Filosofie",
    skillCategory: "Beter Communiceren",
    definition: "Taal doet meer dan beschrijven — het voert handelingen uit. Een belofte, een uitnodiging, een vonnis, een huwelijk zijn allemaal taalhandelingen die de werkelijkheid veranderen door het spreken zelf.",
    abstractExample: "'Hierbij verklaar ik u man en vrouw' beschrijft geen werkelijkheid maar creëert die. 'Ik beloof je dat' verandert de sociale werkelijkheid door de uitspraak zelf.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'Ik verontschuldig me' is niet alleen een beschrijving maar een handeling die de sociale relatie herstelt." },
      { domain: "business", icon: "💼", text: "'Ik bied je de baan aan' (performatief) vs. 'Ik beschrijf de baanvereisten' (constatatief) — fundamenteel verschillende taalhandelingen." },
      { domain: "science", icon: "🔬", text: "J.L. Austin beschreef in 'How to Do Things with Words' (1962) de driedeling: locutionaire (inhoud), illocutionaire (intentie) en perlocutionaire (effect) acten." }
    ],
  },
  {
    id: "pragmatic-implicature",
    title: "Pragmatische Implicatuur",
    difficulty: 2,
    emoji: "💬",
    academicCategory: "Linguïstiek",
    skillCategory: "Beter Communiceren",
    definition: "De betekenis die wordt gecommuniceerd maar niet letterlijk gezegd. Wat we bedoelen is altijd meer dan wat we zeggen, gebaseerd op contextuele aannames en cooperatieve communicatieprincipes.",
    abstractExample: "Gevraagd: 'Kan jij de deur dichtdoen?' Letterlijk: 'Bezit jij het vermogen dit te doen?' Bedoeld: 'Doe de deur dicht.' De letterlijke vraag en de pragmatische betekenis zijn totaal verschillend.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een recensie zegt 'de acteur was aanwezig op het toneel' — letterlijk een niet-evaluatieve uitspraak, maar pragmatisch impliceert het 'de acteur was slecht'." },
      { domain: "business", icon: "💼", text: "Een manager zegt 'interessante aanpak' — letterlijk neutraal, maar de context impliceert kritiek." },
      { domain: "science", icon: "🔬", text: "Paul Grice beschreef in 1975 de conversationele maximes (kwantiteit, kwaliteit, relatie, manier) die de basis vormen voor implicatuur." }
    ],
  },
  {
    id: "narrative-framing",
    title: "Narratieve Framing",
    difficulty: 2,
    emoji: "🖼️",
    academicCategory: "Communicatiewetenschap",
    skillCategory: "Beter Communiceren",
    definition: "Hoe een verhaal wordt ingekaderd bepaalt mede hoe het publiek het interpreteert en waardeert. Dezelfde feiten kunnen tot tegengestelde conclusies leiden afhankelijk van het frame.",
    abstractExample: "Een politiek programma kan worden omschreven als 'ondersteuning voor kwetsbare groepen' of als 'beloning voor niet-werken'. Dezelfde maatregel, twee tegengestelde frames, twee verschillende reacties.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'Ons glas is halfvol' vs. 'ons glas is halfleeg' — dezelfde situatie, maar het frame stuurt de emotionele reactie." },
      { domain: "business", icon: "💼", text: "Een reorganisatie als 'noodzakelijke herstructurering' vs. 'kaalslag door hebzuchtige aandeelhouders' — het frame bepaalt de publieke reactie." },
      { domain: "science", icon: "🔬", text: "George Lakoff toonde aan dat politieke frames zo diep in taal zijn ingebed dat enkel tegenargumenten het frame versterken." }
    ],
  },
  {
    id: "overgeneralization",
    title: "Overgeneralisatie",
    difficulty: 1,
    emoji: "🌍",
    academicCategory: "Logica",
    skillCategory: "Beter Redeneren",
    definition: "Een conclusie trekken die te breed is voor de beschikbare specifieke gevallen. Van één of weinig observaties een algemene regel afleiden die niet gerechtvaardigd is.",
    abstractExample: "Eén slechte ervaring met een product van een merk: 'Dat merk is altijd slecht.' Of één positieve interactie: 'Alle mensen uit dat land zijn vriendelijk.' Beide zijn overgeneralisaties.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'Ik ben één keer gevallen bij dat pad. Het pad is altijd gevaarlijk.' Één incident bepaalt niet het patroon." },
      { domain: "business", icon: "💼", text: "Een mislukte productlancering leiden leidt tot: 'Onze doelgroep koopt nooit nieuwe producten' — een overgeneralisatie van één mislukking." },
      { domain: "science", icon: "🔬", text: "Overgeneralisatie is een cognitieve fout in de cognitieve therapie van Beck: negatieve ervaringen worden als universele wetmatigheden behandeld." }
    ],
  },
  {
    id: "dog-whistle",
    title: "Hondenfluittaal",
    difficulty: 2,
    emoji: "🐕",
    academicCategory: "Communicatiewetenschap",
    skillCategory: "Kritisch Denken",
    definition: "Communicatie die voor het algemeen publiek onschuldig klinkt maar een specifieke boodschap overbrengt aan een doelgroep die de code kent. De boodschap is ontworpen voor dubbele interpretatie.",
    abstractExample: "Een politicus gebruikt de term 'wet en orde' in een context die voor brede kiezers klinkt als veiligheidsbeleid, maar voor een specifieke groep een raciale politieke boodschap bevat.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Verborgen berichten in teksten, slogans of humor die alleen herkenbaar zijn voor insiders — een sociale binding via gedeelde code." },
      { domain: "business", icon: "💼", text: "Bedrijfstaal die klinkt als neutrale efficiëntieretoriek maar een specifieke stakeholder-groep aanspreekt met impliciete beleidsbelofte." },
      { domain: "science", icon: "🔬", text: "Politicologen als Mendelberg analyseren hoe raciale politiek via codetaal opereerde zonder expliciet racistisch te zijn, en daarmee breder aanvaardbaar bleef." }
    ],
  },
  {
    id: "metalinguistic-awareness",
    title: "Metalinguïstisch Bewustzijn",
    difficulty: 2,
    emoji: "🪞",
    academicCategory: "Linguïstiek",
    skillCategory: "Kritisch Denken",
    definition: "Het vermogen om taal als object te beschouwen en erover na te denken — reflectief bewustzijn van hoe taal werkt, hoe woorden worden gebruikt en hoe betekenis wordt geconstrueerd.",
    abstractExample: "Een kind dat ontdekt dat het woord 'bank' zowel een zitbank als een financiële instelling kan betekenen, heeft metalinguïstisch bewustzijn ontwikkeld — het begrijpt dat taal een systeem is los van de werkelijkheid.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Beseffen dat 'gratis' in reclametaal bijna nooit werkelijk gratis betekent — dit is metalinguïstisch bewustzijn over marketingtaal." },
      { domain: "business", icon: "💼", text: "Een jurist die contracttaal analyseert op dubbele interpretatie, gebruikt metalinguïstisch bewustzijn professioneel." },
      { domain: "science", icon: "🔬", text: "Metalinguïstisch bewustzijn is een kernvaardigheid voor leesvaardigheid: onderzoek toont dat kinderen beter leren lezen als ze over taal kunnen nadenken." }
    ],
  },

  // ── BATCH 10: PERSOONLIJKE ONTWIKKELING & PSYCHOLOGIE ────────
  {
    id: "impostor-syndrome",
    title: "Impostor-Syndroom",
    difficulty: 1,
    emoji: "🎭",
    academicCategory: "Psychologie",
    skillCategory: "Zelfkennis",
    definition: "Het gevoel dat je successen te danken zijn aan geluk of misleiding, en dat anderen je vroeg of laat zullen 'ontmaskeren' als onbekwaam — ook als objectief bewijs het tegendeel aantoont.",
    abstractExample: "Een expert met twintig jaar ervaring die voor een conferentie staat denkt: 'Ze zullen erachter komen dat ik eigenlijk niks weet.' Tegelijkertijd ziet het publiek een autoriteit.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een student die een hoog cijfer haalt denkt: 'Ik had mazzel, volgende keer prik ik door de mand'." },
      { domain: "business", icon: "💼", text: "Onderzoek toont dat 70% van hoogpresteerders zich af en toe 'oplichters' voelt — inclusief veel bekende wetenschappers en leiders." },
      { domain: "science", icon: "🔬", text: "Clance & Imes (1978) beschreven het 'impostor phenomeen' eerst bij academisch succesvolle vrouwen; het bleek later universeel." }
    ],
  },
  {
    id: "learned-helplessness",
    title: "Aangeleerde Hulpeloosheid",
    difficulty: 2,
    emoji: "😔",
    academicCategory: "Psychologie",
    skillCategory: "Zelfkennis",
    definition: "Na herhaalde blootstelling aan situaties waar men geen controle heeft, stopt men met pogingen te ondernemen — ook wanneer situatie verandert en controle wel mogelijk is. Hulpeloosheid wordt geleerd.",
    abstractExample: "Honden die herhaaldelijk elektrische schokken krijgen die ze niet kunnen stoppen, maken later geen poging meer te ontsnappen als dat wél mogelijk is. Ze leerden dat acties zinloos zijn.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Iemand die jarenlang in armoede leefde, ziet nieuwe kansen soms niet — de overtuiging 'niets helpt toch' is geïnternaliseerd." },
      { domain: "business", icon: "💼", text: "Een medewerker wiens ideeën altijd worden afgewezen, stopt na verloop van tijd met initiatieven nemen — ook als de manager verandert." },
      { domain: "science", icon: "🔬", text: "Seligman & Maier (1967) ontdekten aangeleerde hulpeloosheid bij honden en koppelden het later aan depressie bij mensen." }
    ],
  },
  {
    id: "self-efficacy",
    title: "Zelf-Effectiviteit",
    difficulty: 1,
    emoji: "💪",
    academicCategory: "Psychologie",
    skillCategory: "Zelfkennis",
    definition: "De overtuiging in je eigen vermogen om specifieke taken uit te voeren en gewenste uitkomsten te bereiken. Zelf-effectiviteit is specifiek (niet globaal zelfvertrouwen) en sterk bepalend voor prestatie.",
    abstractExample: "Twee studenten met identieke vaardigheid gaan een examen in. De student met hoge zelf-effectiviteit presteert beter — niet door meer kennis, maar door hogere inzet en beter omgaan met obstakels.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Iemand die gelooft dat hij een presentatie aankan, bereidt zich beter voor, spreekt zelfverzekerder en presteert dan ook beter." },
      { domain: "business", icon: "💼", text: "Verkopers met hogere zelf-effectiviteit verwerven statistisch meer deals — niet door betere productkennis maar door volharding bij weigeringen." },
      { domain: "science", icon: "🔬", text: "Bandura (1977) introduceerde de term en toonde aan dat zelf-effectiviteit gedrag, inspanning en doorzettingsvermogen sterker voorspelt dan vaardigheidsniveau." }
    ],
  },
  {
    id: "growth-mindset",
    title: "Groeimindset",
    difficulty: 1,
    emoji: "🌱",
    academicCategory: "Psychologie",
    skillCategory: "Beter Leren",
    definition: "De overtuiging dat talenten en intelligentie kunnen worden ontwikkeld door inspanning, goede strategieën en ondersteuning. Tegenover een vaste mindset die aanneemt dat kwaliteiten aangeboren en onveranderlijk zijn.",
    abstractExample: "Twee kinderen krijgen een moeilijke opgave. Vast mindset-kind: 'Dit kan ik niet, ik ben niet slim genoeg.' Groeimindset-kind: 'Dit is moeilijk, maar als ik oefen, leer ik het.' Beide zullen uitlopen op zelfvervullende profetieën.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Bij het leren van een nieuw instrument: vaste mindset zegt 'ik heb geen muzikaal talent'. Groeimindset zegt 'ik heb nog niet genoeg geoefend'." },
      { domain: "business", icon: "💼", text: "Teams met groeimindset reageren constructiever op fouten — ze zien fouten als leermomenten, niet als bewijs van incompetentie." },
      { domain: "science", icon: "🔬", text: "Carol Dweck's decennialange onderzoek (samengevat in 'Mindset', 2006) toonde robuust aan dat mindset prestatie en welbevinden beïnvloedt." }
    ],
  },
  {
    id: "deliberate-practice",
    title: "Doelgerichte Oefening",
    difficulty: 2,
    emoji: "🎯",
    academicCategory: "Psychologie",
    skillCategory: "Beter Leren",
    definition: "Oefening die specifiek gericht is op verbetering door feedback, het aanpakken van zwakke punten en bewuste concentratie, buiten de comfortzone. Niet alle oefening leidt tot verbetering.",
    abstractExample: "Een pianist die zijn lievelingsstukken herhaalt, oefent — maar verbetert weinig. Een pianist die focust op de moeilijkste passages, feedback vraagt en systematisch zijn zwakke punten aanpakt, doet deliberate practice.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Taal leren door gesprekken met native speakers met gerichte feedback verbetert sneller dan passief luisteren naar dezelfde films." },
      { domain: "business", icon: "💼", text: "Topsprekers verbeteren door gerichte oefening met feedback op specifieke aspecten (openingszin, contact met publiek), niet door simpelweg meer toespraken te geven." },
      { domain: "science", icon: "🔬", text: "Anders Ericsson toonde aan dat de '10.000 uren'-regel van Gladwell sloeg op deliberate practice, niet op elk soort oefening." }
    ],
  },
  {
    id: "flow-state",
    title: "Flowstaat",
    difficulty: 1,
    emoji: "🌊",
    academicCategory: "Psychologie",
    skillCategory: "Beter Leren",
    definition: "Een mentale toestand van volledige absorptie in een uitdagende activiteit, waarbij het tijdsbesef verloren gaat en prestatie en plezier tegelijk optimaal zijn. Flow vereist balans tussen uitdaging en vaardigheid.",
    abstractExample: "Een schaker die zo verdiept is in een wedstrijd dat ze uren voorbijvlogen zonder dat het opviel. Noch te gemakkelijk (saai), noch te moeilijk (angstig). Precies op de rand van vaardigheid.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een programmeur die zo diep in een probleem duikt dat ze pas uren later opkijkt — flow is de reden dat 'time flies when you're having fun' werkt." },
      { domain: "business", icon: "💼", text: "Topchirurgen in complexe operaties, professionele atleten in wedstrijden — flow is gerapporteerd als het beste gevoel in hun loopbaan." },
      { domain: "science", icon: "🔬", text: "Mihaly Csikszentmihalyi beschreef flow in 1975 na decennialang onderzoek naar wanneer mensen optimaal gelukkig en productief zijn." }
    ],
  },
  {
    id: "metacognition",
    title: "Metacognitie",
    difficulty: 2,
    emoji: "🧠",
    academicCategory: "Cognitieve Psychologie",
    skillCategory: "Beter Leren",
    definition: "Denken over je eigen denkproces — het bewustzijn en de regulatie van je eigen cognitie. Metacognitie stelt je in staat te monitoren wat je weet, hoe je leert en waar je tekortschiet.",
    abstractExample: "Een leerling die beseft 'Ik denk dat ik dit begrijp, maar kan ik het ook uitleggen?' en zichzelf toetst voor het examen, gebruikt metacognitie. Ze weten wanneer ze weten.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Het 'gevoel van weten' dat je de naam kent maar niet kunt ophalen — dit is metacognitief bewustzijn van je geheugenprocessen." },
      { domain: "business", icon: "💼", text: "Een manager die na een beslissing denkt: 'Was ik beïnvloed door confirmation bias?' gebruikt metacognitie om zijn eigen redeneerfouten te corrigeren." },
      { domain: "science", icon: "🔬", text: "Flavell (1979) introduceerde de term; sindsdien toont onderzoek consistent dat metacognitief bewustzijn een sterke predictor is van leerprestaties." }
    ],
  },
  {
    id: "emotional-regulation",
    title: "Emotieregulatie",
    difficulty: 2,
    emoji: "⚖️",
    academicCategory: "Psychologie",
    skillCategory: "Zelfkennis",
    definition: "Het bewuste of onbewuste proces van het moduleren van emotionele ervaringen en uitingen — welke emoties we hebben, wanneer, en hoe we ze uitdrukken. Effectieve regulatie verbetert welzijn en relaties.",
    abstractExample: "Je raakt gefrustreerd in een vergadering. Regulatie kan betekenen: herwaarderen ('dit is een kans om te oefenen'), suppressie (geen reactie tonen), of de situatie verlaten. Elke strategie heeft andere langetermijneffecten.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Bij hevige teleurstelling pauzeren en doorademen alvorens te reageren — cognitieve herwaardering vermindert de emotionele intensiteit." },
      { domain: "business", icon: "💼", text: "Leiders die hun emoties effectief reguleren, worden als betrouwbaarder beschouwd en hebben beter presterende teams." },
      { domain: "science", icon: "🔬", text: "Gross (1998) beschreef het procesmodel van emotieregulatie; herwaardering (reappraisal) bleek langetermijn effectiever dan suppressie." }
    ],
  },
  {
    id: "implementation-intention",
    title: "Implementatievoornemen",
    difficulty: 1,
    emoji: "📋",
    academicCategory: "Psychologie",
    skillCategory: "Betere Beslissingen",
    definition: "Een specifiek plan van de vorm 'Als situatie X zich voordoet, dan voer ik actie Y uit.' Implementatievoornemens zijn bewezen effectiever dan vage intenties voor het vertalen van doelen naar gedrag.",
    abstractExample: "Vage intentie: 'Ik wil meer sporten.' Implementatievoornemen: 'Als het maandag is en ik thuiskom van werk, trek ik direct mijn sportschoenen aan en ga ik hardlopen.' Het specifieke if-then plan overbrugt de kloof tussen intentie en actie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'Als ik opstaat zet ik mijn vitamines naast mijn tandenborstel' — een implementatievoornemen dat het vergeten elimineert." },
      { domain: "business", icon: "💼", text: "'Als ik na een vergadering mijn agenda open, schrijf ik direct de actiepunten op' — context-triggered gedrag vermijdt uitstel." },
      { domain: "science", icon: "🔬", text: "Gollwitzer (1999) toonde aan dat implementatievoornemens de kans op gewenst gedrag met 200-300% verhogen ten opzichte van vage intenties." }
    ],
  },
  {
    id: "self-determination-theory",
    title: "Zelfbeschikkingstheorie",
    difficulty: 2,
    emoji: "🔑",
    academicCategory: "Psychologie",
    skillCategory: "Beter Samenwerken",
    definition: "Mensen gedijen wanneer drie basisbehoeften worden vervuld: autonomie (keuze en regie), competentie (gevoel van meesterschap) en verbondenheid (betekenisvolle relaties). Externe beloning kan intrinsieke motivatie ondermijnen.",
    abstractExample: "Een kind dat enthousiast tekent voor het plezier, begint minder te tekenen als het een beloning krijgt voor elk tekening. De externe beloning vervangt de intrinsieke motivatie en ondermijnt die.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Vrijwilligerswerk dat men doet uit persoonlijke motivatie, maar dat betaald gaat worden, kan minder aantrekkelijk worden door het 'crowding out'-effect van extrinsieke beloning." },
      { domain: "business", icon: "💼", text: "Managers die autonomie geven (keuze in hoe taken worden uitgevoerd) hebben gemotiveerdere en productiever medewerkers dan managers die nauwgezet controleren." },
      { domain: "science", icon: "🔬", text: "Deci & Ryan (1985) beschreven de zelfbeschikkingstheorie; het 'overjustification effect' (beloning ondermijnt intrinsieke motivatie) is replicated in honderden studies." }
    ],
  },

  // ── BATCH A: COMMUNICATIE & GESPREKSTECHNIEKEN ────────────────
  {
    id: "active-listening",
    title: "Actief Luisteren",
    difficulty: 1,
    emoji: "👂",
    academicCategory: "Communicatie",
    skillCategory: "Beter Communiceren",
    definition: "Volledig aanwezig zijn in een gesprek door bewust te luisteren, te begrijpen en te reageren op de ander — zonder al te formuleren wat je zelf wilt zeggen. Actief luisteren gaat verder dan horen.",
    abstractExample: "In een gesprek waarbij je actief luistert, richt je alle aandacht op de ander: je houdt oogcontact, knikt, parafraseert wat je hoort en stelt verdiepende vragen. Je denkt niet aan je eigen volgende zin.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een partner die klaagt over zijn dag voelt het verschil tussen iemand die 'mmm' zegt achter zijn telefoon en iemand die echt aanwezig is en doorvraagt." },
      { domain: "business", icon: "💼", text: "Managers die actief luisteren ontdekken problemen eerder en medewerkers delen meer nuttige informatie met hen." },
      { domain: "science", icon: "🔬", text: "Onderzoek van Itzchakov & Kluger (2018) toont dat kwalitatief luisteren de gesprekspartner helderder laat denken en openheid vergroot." }
    ],
  },
  {
    id: "nonviolent-communication",
    title: "Geweldloze Communicatie",
    difficulty: 2,
    emoji: "🕊️",
    academicCategory: "Communicatie",
    skillCategory: "Beter Communiceren",
    definition: "Een communicatiemethode gebaseerd op vier stappen: observatie (feiten zonder oordeel), gevoel (jouw emotie), behoefte (onderliggende waarde) en verzoek (concreet, uitvoerbaar). Scheidt feiten van interpretaties.",
    abstractExample: "Aanklacht: 'Jij luistert nooit.' GCC: 'Wanneer je tijdens ons gesprek op je telefoon kijkt [observatie], voel ik me niet gehoord [gevoel], want verbinding is voor mij belangrijk [behoefte]. Kun je je telefoon wegleggen? [verzoek]'",
    examples: [
      { domain: "daily", icon: "🏠", text: "In plaats van 'Je bent altijd te laat!': 'Wanneer je 20 minuten later komt dan afgesproken, voel ik me niet gewaardeerd. Ik heb behoefte aan stiptheid. Kun je me laten weten als je vertraging hebt?'" },
      { domain: "business", icon: "💼", text: "GCC-feedback op het werk scheidt gedrag ('Je rapport miste drie secties') van persoon ('Je bent slordig'), wat minder defensieve reacties uitlokt." },
      { domain: "science", icon: "🔬", text: "Marshall Rosenberg ontwikkelde GCC in de jaren '60; onderzoek toont dat het empathisch begrip vergroot en conflicten constructiever maakt." }
    ],
  },
  {
    id: "assertiveness",
    title: "Assertiviteit",
    difficulty: 1,
    emoji: "🦁",
    academicCategory: "Communicatie",
    skillCategory: "Beter Communiceren",
    definition: "De vaardigheid om je mening, behoeften en grenzen duidelijk en respectvol te uiten, zonder passief (alles accepteren) of agressief (anderen overheersen) te zijn. Assertiviteit is de middenweg.",
    abstractExample: "Passief: 'Oh, het maakt mij niet uit.' Agressief: 'Jij hebt het altijd mis!' Assertief: 'Ik denk hier anders over. Mijn perspectief is...' Dezelfde situatie, drie totaal verschillende reacties.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Nee zeggen op een verzoek zonder schuldgevoel: 'Ik heb die avond al iets gepland, ik kan er niet bij zijn.'" },
      { domain: "business", icon: "💼", text: "Een medewerker die assertief zijn werkdrempel aangeeft ('Ik kan dit kwalitatief leveren als ik tot vrijdag heb') werkt duurzamer dan iemand die stil instemt maar overbelast raakt." },
      { domain: "science", icon: "🔬", text: "Assertiviteitstraining is een bewezen effectieve cognitief-gedragstherapeutische techniek voor angst- en zelfbeeldproblemen." }
    ],
  },
  {
    id: "radical-candor",
    title: "Radicale Openheid",
    difficulty: 2,
    emoji: "💬",
    academicCategory: "Leiderschap",
    skillCategory: "Beter Communiceren",
    definition: "Feedback geven die zowel direct als oprecht bezorgd is — tegelijkertijd uitdagen en persoonlijk betrokken zijn. Het kwadrant van Kim Scott: ruineuze empathie, wrede eerlijkheid, manipulatieve onoprechtheid en radicale openheid.",
    abstractExample: "Ruineuze empathie: problemen verzwijgen om gevoelens te sparen. Radicale openheid: 'Ik zeg je dit omdat ik geloof in jouw potentieel: dit rapport mist drie cruciale secties. Laten we kijken hoe we het aanpakken.'",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een vriend eerlijk vertellen dat zijn idee een kritisch probleem heeft, maar hem ook aanbieden te helpen het te verbeteren." },
      { domain: "business", icon: "💼", text: "Een manager die direct feedback geeft ('Je presentatie miste structuur') maar ook persoonlijke ondersteuning biedt, bouwt meer vertrouwen dan een die zwijgt of alleen kritiseert." },
      { domain: "science", icon: "🔬", text: "Kim Scott beschreef het concept in 'Radical Candor' (2017) op basis van haar ervaring bij Google en Apple." }
    ],
  },
  {
    id: "power-of-silence",
    title: "Kracht van Stilte",
    difficulty: 1,
    emoji: "🤫",
    academicCategory: "Communicatie",
    skillCategory: "Beter Communiceren",
    definition: "Stilte in communicatie is geen leegte maar een krachtig instrument — het geeft ruimte voor reflectie, dwingt de ander te reageren, en versterkt de impact van wat voorafging.",
    abstractExample: "Na een sterk argument bewust zwijgen laat het bezinken. In onderhandeling: na het noemen van je prijs zwijgen. De eerste die praat, geeft concessies. Stilte is onderhandelingskracht.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Na het stellen van een moeilijke vraag niet meteen de stilte opvullen — de ander heeft ruimte nodig om eerlijk na te denken." },
      { domain: "business", icon: "💼", text: "Ervaren onderhandelaars zwijgen na hun openingsbod. Wie als eerste de stilte verbreekt, geeft gewoonlijk toe." },
      { domain: "science", icon: "🔬", text: "Onderzoek toont dat mensen gemiddeld maar 1,5 seconde stilte tolereren voor ze de stilte opvullen. Bewust langer zwijgen geeft strategisch voordeel." }
    ],
  },
  {
    id: "mirroring",
    title: "Spiegelen",
    difficulty: 1,
    emoji: "🪞",
    academicCategory: "Communicatie",
    skillCategory: "Beter Communiceren",
    definition: "Het subtiel imiteren van de lichaamstaal, toon, tempo en woordkeuze van de gesprekspartner. Spiegelen bouwt onbewust rapport op en laat de ander zich begrepen voelen.",
    abstractExample: "Iemand leunt achterover; jij leunt ook iets achterover. Iemand spreekt langzaam en rustig; jij past je tempo aan. Dit gaat niet over bewust nadoen maar over aansluiting bij de energie en stijl van de ander.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Vrienden die al lang bevriend zijn, synchroniseren automatisch hun lichaamstaal. Bewust spiegelen versnelt dit rapport-opbouwproces." },
      { domain: "business", icon: "💼", text: "FBI-onderhandelaar Chris Voss beschrijft spiegelen (het herhalen van de laatste 2-3 woorden van de ander) als een van de krachtigste gesprekstechnieken." },
      { domain: "science", icon: "🔬", text: "Spiegelneuronen in de hersenen zijn deels verantwoordelijk voor spontaan spiegelgedrag; bewust toepassen vergroot prosociaal gedrag." }
    ],
  },
  {
    id: "reframing-technique",
    title: "Herkadering",
    difficulty: 2,
    emoji: "🖼️",
    academicCategory: "Psychologie",
    skillCategory: "Beter Communiceren",
    definition: "Een situatie, probleem of overtuiging in een ander kader plaatsen zodat de betekenis verandert. Herkader je een situatie, dan verandert niet de situatie zelf maar de manier waarop je er tegenaan kijkt.",
    abstractExample: "Falen op een examen: 'Ik ben mislukt' → 'Ik heb waardevolle informatie ontvangen over wat ik nog moet leren.' Dezelfde gebeurtenis, ander kader, andere emotie en ander vervolggedrag.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een drukke dag als 'overladen' herkaderd naar 'mijn vaardigheden zijn gevraagd' verandert de ervaring zonder de feiten te veranderen." },
      { domain: "business", icon: "💼", text: "Een kritische klant herkaderd als 'een kans om ons product te verbeteren' verandert de emotionele reactie van het team." },
      { domain: "science", icon: "🔬", text: "Cognitieve herkadering is een kerntechniek in cognitieve gedragstherapie (CBT); het veranderen van gedachtenpatronen beïnvloedt emoties en gedrag." }
    ],
  },
  {
    id: "storytelling-structure",
    title: "Verhalenstructuur",
    difficulty: 2,
    emoji: "📖",
    academicCategory: "Communicatie",
    skillCategory: "Beter Communiceren",
    definition: "Informatie gestructureerd als verhaal (met protagonist, conflict, klimax en resolutie) overtuigt en wordt beter onthouden dan droge feiten. Het menselijk brein is ontworpen voor verhalen.",
    abstractExample: "Statistiek: '1 op de 5 mensen lijdt aan slaaptekort.' Verhaal: 'Maria werkte 70 uur per week, sliep 5 uur en maakte een dodelijk verkeersongeluk. Slaaptekort doodt.' De statistiek informeert; het verhaal beweegt.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Op een feestje je werk uitleggen via een boeiend verhaal over een klant die je hielp, werkt beter dan een functieomschrijving." },
      { domain: "business", icon: "💼", text: "De beste TED-talks gebruiken altijd een persoonlijk verhaal als anker voor een abstract idee — de emotionele verbinding maakt het memorabel." },
      { domain: "science", icon: "🔬", text: "Neuraal koppeling ('neural coupling'): bij een goed verhaal synchroniseren de hersengolven van luisteraar en verteller, wat begrip en empathie vergroot." }
    ],
  },
  {
    id: "crucial-conversations",
    title: "Cruciale Gesprekken",
    difficulty: 2,
    emoji: "⚡",
    academicCategory: "Communicatie",
    skillCategory: "Beter Communiceren",
    definition: "Gesprekken met hoge inzet, sterke emoties en tegenstrijdige meningen. De meeste mensen vermijden ze of voeren ze slecht. Cruciale gesprekken goed voeren is een van de meest waardevolle sociale vaardigheden.",
    abstractExample: "Een cruciaal gesprek is: je baas confronteren over oneerlijk gedrag, je partner over een fundamenteel probleem, of een medewerker over zijn prestaties. Ze worden vermeden — maar de kosten van vermijding zijn groter dan die van het gesprek.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een gesprek over geld met je partner dat al maanden uitgesteld wordt. Elke dag dat het uitgesteld wordt, groeit de spanning." },
      { domain: "business", icon: "💼", text: "Onderzoek toont dat mislukte cruciale gesprekken de hoofdoorzaak zijn van projectmislukkingen, toxische werkomgevingen en ontslagen." },
      { domain: "science", icon: "🔬", text: "Patterson et al. beschreven in 'Crucial Conversations' (2002) dat de kwaliteit van cruciale gesprekken de kwaliteit van relaties en organisaties bepaalt." }
    ],
  },
  {
    id: "feedback-giving",
    title: "Effectief Feedback Geven",
    difficulty: 1,
    emoji: "🎯",
    academicCategory: "Communicatie",
    skillCategory: "Beter Communiceren",
    definition: "Feedback is effectief als ze specifiek, tijdig, gedragsgericht (niet persoonsgericht), toekomstgericht en uitnodigend tot dialoog is. Goede feedback helpt groeien; slechte feedback demotiveert.",
    abstractExample: "Slechte feedback: 'Jij bent slordig.' Goede feedback: 'In dit rapport ontbreken drie onderbouwingen op pagina 4 en 7. Als je die toevoegt, wordt het veel sterker. Wat heb je nodig om dat goed te doen?'",
    examples: [
      { domain: "daily", icon: "🏠", text: "Aan een kind dat een tekening maakt: 'Wat fijn dat je zoveel tijd hebt gestoken in de kleuren!' werkt beter dan 'Goed gedaan!' (te vaag) of 'De oren zijn raar' (demotiverend)." },
      { domain: "business", icon: "💼", text: "360-graden feedback systemen zijn effectiever als ze gedragsgericht zijn en specifieke voorbeelden bevatten in plaats van vage kwalificaties." },
      { domain: "science", icon: "🔬", text: "Kluger & DeNisi (1996) toonden aan dat 38% van alle feedback-interventies prestaties verlaagde — vooral wanneer feedback gericht was op de persoon, niet op het gedrag." }
    ],
  },

  // ── BATCH B: LEIDERSCHAP & INVLOED ───────────────────────────
  {
    id: "servant-leadership",
    title: "Dienend Leiderschap",
    difficulty: 2,
    emoji: "🫂",
    academicCategory: "Leiderschap",
    skillCategory: "Beter Samenwerken",
    definition: "Een leiderschapsstijl waarbij de leider in de eerste plaats dient: de behoeften van medewerkers staan centraal. De leider verwijdert obstakels, ontwikkelt mensen en faciliteert hun succes.",
    abstractExample: "Een traditionele leider vraagt: 'Hoe kunnen mijn medewerkers mij helpen mijn doelen te bereiken?' Een dienend leider vraagt: 'Hoe kan ik mijn medewerkers helpen hún doelen te bereiken — die samenvallen met die van de organisatie?'",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een ouder als dienend leider: niet het kind in dienst stellen van de ouders' plannen, maar de omgeving creëren waarin het kind kan floreren." },
      { domain: "business", icon: "💼", text: "Bedrijven als Southwest Airlines en The Container Store bouwen culturen op dienend leiderschap — medewerkers eerst, klanten tweede, aandeelhouders derde." },
      { domain: "science", icon: "🔬", text: "Robert Greenleaf introduceerde het concept in 1970; onderzoek toont correlatie tussen dienend leiderschap en hogere medewerkersbetrokkenheid en teameffectiviteit." }
    ],
  },
  {
    id: "psychological-safety",
    title: "Psychologische Veiligheid",
    difficulty: 2,
    emoji: "🛡️",
    academicCategory: "Organisatiepsychologie",
    skillCategory: "Beter Samenwerken",
    definition: "De gedeelde overtuiging in een team dat het veilig is om interpersoonlijke risico's te nemen — ideeën delen, fouten toegeven, kritiek uiten — zonder angst voor vergelding of beschaming.",
    abstractExample: "In een team met hoge psychologische veiligheid zegt iemand: 'Ik denk dat we een fout maken' en wordt serieus genomen. In een team zonder veiligheid wordt dezelfde persoon buitengesloten of ontslagen.",
    examples: [
      { domain: "daily", icon: "🏠", text: "In een gezin met psychologische veiligheid kunnen kinderen fouten toegeven zonder angst voor bestraffing — wat eerlijkheid en leren bevordert." },
      { domain: "business", icon: "💼", text: "Google's Project Aristotle (2015) ontdekte dat psychologische veiligheid de sterkste predictor is van teamprestaties — sterker dan individuele competentie." },
      { domain: "science", icon: "🔬", text: "Amy Edmondson (Harvard) ontwikkelde het construct in 1999 en toonde aan dat hoge psychologische veiligheid leidt tot meer innovatie en minder vermijdbaar falen." }
    ],
  },
  {
    id: "situational-leadership",
    title: "Situationeel Leiderschap",
    difficulty: 2,
    emoji: "🎛️",
    academicCategory: "Leiderschap",
    skillCategory: "Beter Samenwerken",
    definition: "Effectieve leiders passen hun stijl aan de situatie en het ontwikkelingsniveau van de medewerker aan. Er is geen one-size-fits-all leiderschap: beginners hebben sturing nodig, experts hebben autonomie nodig.",
    abstractExample: "Een nieuwe medewerker heeft directe instructies en toezicht nodig (S1: directief). Een ervaren medewerker met laag vertrouwen heeft begeleiding en uitleg nodig (S2). Een competente medewerker met hoge motivatie heeft vrijheid (S4: delegeren).",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een ouder past zijn stijl aan de leeftijd en vaardigheid van het kind aan — meer directief met een kleuter, meer coachend met een tiener." },
      { domain: "business", icon: "💼", text: "Een manager die alle medewerkers hetzelfde behandelt, demotiveert zowel beginners (te weinig sturing) als experts (te weinig autonomie)." },
      { domain: "science", icon: "🔬", text: "Hersey & Blanchard ontwikkelden het situationeel leiderschapsmodel in 1969; het is sindsdien een van de meest gebruikte managementtrainingen worldwide." }
    ],
  },
  {
    id: "delegation-principles",
    title: "Delegatieprincipes",
    difficulty: 2,
    emoji: "📤",
    academicCategory: "Leiderschap",
    skillCategory: "Betere Beslissingen",
    definition: "Effectief delegeren betekent de juiste taak overdragen aan de juiste persoon met de juiste bevoegdheid, duidelijke verwachtingen en adequate ondersteuning — en vervolgens loslaten.",
    abstractExample: "Zwak delegeren: 'Regel dit.' Effectief delegeren: 'Ik vertrouw je met het organiseren van de klantevenement [taak]. Je hebt €5000 budget en beslist zelf [bevoegdheid]. Doel: 50 tevreden klanten [resultaat]. Ik sta beschikbaar voor vragen [ondersteuning].'",
    examples: [
      { domain: "daily", icon: "🏠", text: "Kinderen verantwoordelijkheid geven voor huistaken met duidelijke verwachtingen — niet opnieuw doen wat ze deden, maar ze laten leren van hun eigen aanpak." },
      { domain: "business", icon: "💼", text: "Managers die niet delegeren, creëren een flessenhals: alles gaat via hen, medewerkers groeien niet, en de manager raakt overbelast." },
      { domain: "science", icon: "🔬", text: "Onderzoek toont dat delegeren medewerkersbetrokkenheid verhoogt, competentie ontwikkelt en leiderschapscapaciteit opbouwt in de organisatie." }
    ],
  },
  {
    id: "influence-without-authority",
    title: "Invloed Zonder Autoriteit",
    difficulty: 2,
    emoji: "🧲",
    academicCategory: "Leiderschap",
    skillCategory: "Beter Samenwerken",
    definition: "Het vermogen om anderen te bewegen en bij te sturen zonder gebruik te maken van formele macht of hiërarchische positie. Invloed via relaties, expertise, netwerk en afstemming op belangen.",
    abstractExample: "Een junior medewerker zonder titel die een nieuw project wil starten, heeft geen bevoegdheid om te 'eisen'. Maar door draagvlak te bouwen, de voordelen voor anderen te benoemen en sleutelpersonen te betrekken, creëert ze beweging.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een kind dat zijn ouders overtuigt van iets zonder 'autoritaire' macht — door een sterk argument te maken, alternatieven te bieden en empathie te tonen." },
      { domain: "business", icon: "💼", text: "Projectmanagers, consultants en experts opereren vaak zonder directe autoriteit over mensen en moeten invloed opbouwen via vertrouwen en afstemming." },
      { domain: "science", icon: "🔬", text: "Cohen & Bradford beschreven in 'Influence Without Authority' (1989) hoe 'valuta' (iets van waarde voor de ander) de basis is voor invloed zonder macht." }
    ],
  },
  {
    id: "vision-clarity",
    title: "Visieduidelijkheid",
    difficulty: 2,
    emoji: "🔭",
    academicCategory: "Leiderschap",
    skillCategory: "Betere Beslissingen",
    definition: "Een heldere, inspirerende en begrijpelijke visie geeft richting aan een team of organisatie. Zonder visie werken mensen aan taken, niet aan een doel. Met visie kunnen zij zelf prioriteiten stellen.",
    abstractExample: "Martin Luther King zei niet: 'Ik heb een plan met vijf stappen voor rassengelijkheid.' Hij zei: 'I have a dream.' De kracht van een visie ligt in haar aantrekkingskracht, niet in haar precisie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een gezin met een gedeeld beeld van hun ideale leven (meer tijd samen, minder werkdruk) neemt betere beslissingen over werk, huis en prioriteiten." },
      { domain: "business", icon: "💼", text: "Teams zonder duidelijke visie optimaliseren lokaal: ieder doet zijn deel goed, maar het geheel klopt niet. Met visie coördineren ze zichzelf." },
      { domain: "science", icon: "🔬", text: "Onderzoek naar doel-oriëntatie toont dat een helder, betekenisvol doel de intrinsieke motivatie en doorzettingsvermogen van mensen significant verhoogt." }
    ],
  },
  {
    id: "trust-building",
    title: "Vertrouwen Opbouwen",
    difficulty: 1,
    emoji: "🌉",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Beter Samenwerken",
    definition: "Vertrouwen is opgebouwd uit competentie (kan je het?), integriteit (doe je wat je zegt?) en welwillendheid (geef je om mij?). Vertrouwen groeit langzaam en breekt snel.",
    abstractExample: "Een manager bouwt vertrouwen door beloftes na te komen (integriteit), resultaten te leveren (competentie) en oprecht in medewerkers te investeren (welwillendheid). Elke breuk in één dimensie schade het totale vertrouwen.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een vriend die altijd op tijd is, zijn beloftes nakomt en er is als je hem nodig hebt, is iemand die je vertrouwt — alle drie dimensies zijn aanwezig." },
      { domain: "business", icon: "💼", text: "Één publiek gelogen statement van een CEO kan decennialang opgebouwd merkvertrouwen in dagen vernietigen." },
      { domain: "science", icon: "🔬", text: "Mayer, Davis & Schoorman (1995) modelleerden vertrouwen in organisaties als functie van de drie dimensies: vermogen, welwillendheid en integriteit." }
    ],
  },
  {
    id: "accountability-culture",
    title: "Cultuur van Verantwoordelijkheid",
    difficulty: 2,
    emoji: "✋",
    academicCategory: "Organisatiepsychologie",
    skillCategory: "Beter Samenwerken",
    definition: "Een cultuur waarin mensen verantwoording nemen voor hun acties en commitments, zonder schuld of angst maar met een focus op leren en verbeteren. Verantwoordelijkheid is een gift, geen straf.",
    abstractExample: "In een angstcultuur worden fouten verborgen. In een verantwoordelijkheidscultuur worden fouten openlijk gedeeld met de vraag: 'Wat leren we hiervan en hoe voorkomen we het?' De cultuur bepaalt welk gedrag veilig is.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een kind dat leert 'ik heb dit gebroken, hoe kan ik het herstellen?' heeft meer aan verantwoordelijkheid dan schuldbewustzijn." },
      { domain: "business", icon: "💼", text: "Teams waar mensen fouten melden voor ze groter worden, presteren beter dan teams waar fouten worden verstopt uit angst voor consequenties." },
      { domain: "science", icon: "🔬", text: "Edmondson's onderzoek naar medische fouten toonde aan dat teams die fouten meldden betere zorg leverden — niet omdat ze meer fouten maakten, maar omdat ze ze vroeger corrigeerden." }
    ],
  },
  {
    id: "change-leadership",
    title: "Veranderleiderschap",
    difficulty: 3,
    emoji: "🔄",
    academicCategory: "Leiderschap",
    skillCategory: "Betere Beslissingen",
    definition: "Het proces van het leiden van mensen door organisatieverandering op een manier die betrokkenheid creëert, weerstand vermindert en duurzame adoptie bevordert. Verandering is menselijk, niet technisch.",
    abstractExample: "Een nieuw IT-systeem invoeren is technisch eenvoudig. Mensen ertoe brengen het te omarmen is de echte uitdaging. Veranderleiderschap begrijpt dat mensen verandering weerstand bieden niet uit luiheid maar uit verlies: controle, routine, identiteit.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een gezin dat verhuist: het logistieke gedeelte (dozen, verhuiswagen) is eenvoudig. De emotionele overgang (het oude thuis loslaten) is het echte werk." },
      { domain: "business", icon: "💼", text: "70% van organisatieveranderingen mislukt — niet door slechte plannen maar door gebrek aan aandacht voor menselijke dimensies van verandering." },
      { domain: "science", icon: "🔬", text: "Kotter's 8-stappen model en Kübler-Ross' veranderingscurve (rouw/verlies analoog) zijn de meest gebruikte kaders voor veranderleiderschap." }
    ],
  },
  {
    id: "leading-by-example",
    title: "Leiden door Voorbeeld",
    difficulty: 1,
    emoji: "⭐",
    academicCategory: "Leiderschap",
    skillCategory: "Beter Samenwerken",
    definition: "Mensen kopiëren gedrag van hun leiders, bewust en onbewust. Wat een leider doet is krachtiger dan wat hij zegt. Culturele normen worden gevormd door welk gedrag de leider modelleert.",
    abstractExample: "Een manager die zegt 'werk-privébalans is belangrijk' maar zelf elke avond tot middernacht werkt en 's weekends e-mails stuurt, communiceert het tegenovergestelde. Medewerkers kijken naar gedrag, niet naar woorden.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Ouders die zelf boeken lezen, kweken eerder lezende kinderen dan ouders die 'lees meer!' zeggen terwijl ze zelf televisie kijken." },
      { domain: "business", icon: "💼", text: "Een CEO die persoonlijk onkosten verantwoord en geen vluchten in business class neemt, maakt kostenbewustzijn geloofwaardiger in de organisatie." },
      { domain: "science", icon: "🔬", text: "Observationeel leren (Bandura): mensen leren het effectiefst door gedrag van anderen te observeren — vooral van gezaghebbende figuren." }
    ],
  }
,
  {
    id: "eisenhower-matrix",
    title: "Eisenhower Matrix",
    difficulty: 1,
    emoji: "🗂️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Productiviteit",
    definition: "De Eisenhower Matrix verdeelt taken in vier kwadranten op basis van urgentie en belang: doe het nu (urgent + belangrijk), plan het (niet-urgent + belangrijk), delegeer het (urgent + niet-belangrijk), elimineer het (niet-urgent + niet-belangrijk).",
    abstractExample: "Stel je inbox voor als een trechter. Niet alles wat binnenkomt is even waardevol — de matrix helpt je filteren wat echte aandacht verdient versus wat slechts rumoer is.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een projectdeadline van morgen valt in kwadrant I (doe nu). Langetermijnplanning valt in kwadrant II (plan). Onnodige vergaderingen val je in kwadrant III (delegeer of weiger)." },
      { domain: "Studie", icon: "📚", text: "Een tentamen volgende week is belangrijk maar nog niet urgent — plan er nu al studietijd voor in. Sociale media checken is noch urgent noch belangrijk: elimineer het uit studietijd." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Een lekkende kraan is urgent en belangrijk (doe nu). Sporten is belangrijk maar niet urgent — plan het. Elk telefoontje direct beantwoorden is urgent maar zelden echt belangrijk." }
    ],
  },
  {
    id: "time-blocking",
    title: "Time Blocking",
    difficulty: 1,
    emoji: "🧱",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Productiviteit",
    definition: "Time blocking is de techniek waarbij je vaste tijdsblokken in je agenda reserveert voor specifieke taken of categorieën van werk, zodat je kalender je intenties weerspiegelt in plaats van reactieve verplichtingen.",
    abstractExample: "Denk aan je dag als een container. Zonder structuur vult het zich met andermans prioriteiten. Time blocking is het van tevoren vullen van de container met wat jíj belangrijk vindt.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een software-ontwikkelaar blokkeert elke ochtend van 9-12 voor focuswerk (coderen), van 12-13 voor e-mail/Slack, en van 14-16 voor vergaderingen — zo beschermt hij zijn meest productieve uren." },
      { domain: "Studie", icon: "📚", text: "Een student blokkeert elke dag van 19-21 voor studietijd en markeert dit in de agenda als een onbreekbare afspraak met zichzelf, net als een college." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Een ouder blokkeert zaterdagochtend als 'gezinstijd' zonder telefoon, en vrijdagmiddag voor boodschappen en huishoudelijke taken." }
    ],
  },
  {
    id: "two-minute-rule",
    title: "De Twee-minutenregel",
    difficulty: 1,
    emoji: "⏱️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Productiviteit",
    definition: "De twee-minutenregel (van David Allen's GTD-systeem) stelt: als een taak minder dan twee minuten kost, doe het dan onmiddellijk — de overhead van het opschrijven en later oppakken kost meer tijd dan de taak zelf.",
    abstractExample: "Stel je voor dat je elke kleine taak in een bakje gooit om later te sorteren. Op een gegeven moment kost het sorteren meer tijd dan de taken zelf hadden gekost. De twee-minutenregel voorkomt dat bakje.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Je collega stuurt een korte vraag per e-mail die je in één zin kunt beantwoorden — beantwoord het nu. Je pakt een document op maar het moet naar een andere map — doe het direct." },
      { domain: "Studie", icon: "📚", text: "Je ziet dat je notitieboek vol is en je een nieuwe nodig hebt — bestel het nu (2 minuten). Wacht niet tot 'later' met dit soort kleine beslissingen." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Na het koken: zet het bord gelijk in de vaatwasser (30 seconden), niet op het aanrecht 'voor later'. Kleine handelingen direct doen voorkomt stapeling van rommel." }
    ],
  },
  {
    id: "single-tasking",
    title: "Single-Tasking",
    difficulty: 1,
    emoji: "🎯",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Productiviteit",
    definition: "Single-tasking is de praktijk van bewust slechts aan één taak tegelijk werken, in tegenstelling tot multitasking. Onderzoek toont dat de hersenen niet echt kunnen multitasken — ze schakelen snel heen en weer, wat leidt tot fouten, meer tijd en minder diep werk.",
    abstractExample: "Multitasken is als proberen twee boeken tegelijk te lezen door afwisselend één zin per boek te lezen. Je 'leest' beide, maar begrijpt geen van beide goed.",
    examples: [
      { domain: "Werk", icon: "💼", text: "In plaats van e-mail checken terwijl je een rapport schrijft, sluit je alle afleidingen en schrijft je gedurende een uur uitsluitend het rapport. Het resultaat is beter en het kost minder tijd." },
      { domain: "Studie", icon: "📚", text: "Studeren met Netflix aan de achtergrond voelt productief maar verlaagt het begrip. Eén onderwerp, één sessie, zonder andere schermen — dit is single-tasking." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Tijdens het eten met je partner de telefoon wegleggen en écht aanwezig zijn — dit is single-tasking in relaties, wat de verbinding verdiept." }
    ],
  },
  {
    id: "pomodoro-technique",
    title: "Pomodoro-techniek",
    difficulty: 1,
    emoji: "🍅",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Productiviteit",
    definition: "De Pomodoro-techniek is een tijdmanagementmethode waarbij je 25 minuten geconcentreerd werkt (een 'pomodoro'), gevolgd door een korte pauze van 5 minuten. Na vier pomodoro's neem je een langere pauze van 15-30 minuten.",
    abstractExample: "Denk aan werken als sprinten in plaats van marathonlopen. Korte, intense inspanningsblokken afgewisseld met herstel zijn effectiever dan urenlang doorzwoegen zonder pauze.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een schrijver zet een timer op 25 minuten en schrijft uitsluitend, zonder e-mail of social media. Na de timer: 5 minuten koffie. Na vier rondes: een uur pauze of andere activiteit." },
      { domain: "Studie", icon: "📚", text: "Een student plant vijf pomodoro's voor studietijd. Door de vaste structuur is uitstelgedrag minder verleidelijk — je hoeft maar 25 minuten vol te houden, niet de hele avond." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Thuis opruimen voelt overweldigend. Maar 'ik doe één pomodoro aan opruimen' is behapbaar. Na 25 minuten stop je — en vaak is er al veel gedaan." }
    ],
  },
  {
    id: "batch-processing",
    title: "Batch Processing",
    difficulty: 1,
    emoji: "📦",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Productiviteit",
    definition: "Batch processing is het groeperen van vergelijkbare taken en ze in één blok uitvoeren, in plaats van ze verspreid door de dag te doen. Dit vermindert context-switching en maakt gebruik van mentale 'opwarmtijd'.",
    abstractExample: "Het is als de was doen: je doet niet na elke jas één wasbeurt. Je verzamelt en doet alles tegelijk. Dezelfde logica geldt voor mentaal werk.",
    examples: [
      { domain: "Werk", icon: "💼", text: "In plaats van e-mails de hele dag door te beantwoorden, reserveer je twee vaste momenten per dag (bijv. 9:00 en 16:00) voor alle e-mailcommunicatie." },
      { domain: "Studie", icon: "📚", text: "Alle citaten voor een essay zoek je in één sessie op, in plaats van steeds heen en weer te gaan tussen schrijven en zoeken." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Alle telefoontjes naar instanties, afspraken maken en administratie doe je op één vaste middag per week — niet tussendoor verspreid." }
    ],
  },
  {
    id: "energy-management",
    title: "Energiebeheer",
    difficulty: 2,
    emoji: "⚡",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Productiviteit",
    definition: "Energiebeheer is de praktijk van afstemmen van taken op je energieniveaus in plaats van uitsluitend op tijd. Je hebt beperkte aandacht, emotionele en fysieke energie per dag — het slim inzetten ervan is effectiever dan meer uren maken.",
    abstractExample: "Tijd is oneindig deelbaar maar energie is dat niet. Een uur werken met volle energie levert meer op dan drie uur werken met lege accu. Beheer de accu, niet de klok.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een ochtendmens plant creatief en analytisch werk voor 9-12 uur, vergaderingen na de lunch, en administratief werk aan het einde van de dag wanneer diep denken moeilijker is." },
      { domain: "Studie", icon: "📚", text: "Een student merkt dat hij het best begrijpt na een dutje van 20 minuten na de lunch. Hij plant zijn moeilijkste stof bewust na dat dutje." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Regelmatig sporten, goed slapen en bewust pauzes nemen zijn energiemanagement-strategieën die de productiviteit de rest van de dag verhogen." }
    ],
  },
  {
    id: "decision-fatigue",
    title: "Beslissingsvermoeidheid",
    difficulty: 2,
    emoji: "🧠",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Productiviteit",
    definition: "Beslissingsvermoeidheid beschrijft het verschijnsel dat de kwaliteit van beslissingen afneemt naarmate je meer keuzes maakt. Elke beslissing verbruikt mentale energie — aan het einde van de dag zijn we minder rationeel en vatbaarder voor impulsiviteit of vermijding.",
    abstractExample: "De wilskracht is als een spier. Na intensief gebruik vermoeit hij en functioneert hij minder goed — totdat hij herstelt door rust. Elke beslissing is een rep aan de machine.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Rechters blijken aanzienlijk vaker parole toe te kennen aan het begin van de dag dan aan het einde — beslissingsvermoeidheid beïnvloedt zelfs kritieke professionele oordelen." },
      { domain: "Studie", icon: "📚", text: "Een student die elke dag beslissingen maakt over wat, wanneer en hoe te studeren, raakt mentaal vermoeid. Een vast studiesysteem elimineert deze keuzes en spaart energie." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Barack Obama en Steve Jobs droegen bewust elke dag hetzelfde soort kleding om beslissingsenergie te sparen voor belangrijkere zaken." }
    ],
  },
  {
    id: "parkinson-law-time",
    title: "Wet van Parkinson",
    difficulty: 2,
    emoji: "🕰️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Productiviteit",
    definition: "De wet van Parkinson stelt: 'Werk breidt zich uit om de tijd die ervoor beschikbaar is, te vullen.' Als je drie uur hebt voor een taak die een uur kost, duurt het drie uur. Kunstmatige deadlines verhogen efficiëntie.",
    abstractExample: "Water vult altijd de container volledig, ongeacht de grootte van de container. Zo vult werk ook altijd de beschikbare tijd — tenzij je bewust de container verkleint.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een rapport waarvoor een week uitgetrokken is, kost een week. Hetzelfde rapport met een deadline van twee dagen kost twee dagen — en is vaak van vergelijkbare kwaliteit." },
      { domain: "Studie", icon: "📚", text: "Een student die 'de hele dag' heeft om te studeren, procrastineert tot de avond. Dezelfde student met een afgesproken sociale activiteit om 17:00 studeert efficiënt van 13:00-17:00." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Vergaderingen duren standaard een uur, ongeacht de agenda. Verander ze naar 45 minuten en je merkt dat alles evengoed behandeld wordt — efficiënter en zonder uitloop." }
    ],
  },
  {
    id: "minimum-viable-effort",
    title: "Minimale Effectieve Inspanning",
    difficulty: 2,
    emoji: "🎯",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Productiviteit",
    definition: "De minimale effectieve inspanning is de kleinste hoeveelheid actie die het gewenste resultaat oplevert. Gebaseerd op het Pareto-principe (80/20): 20% van de inspanning levert 80% van het resultaat op. Meer doen levert afnemende meeropbrengsten.",
    abstractExample: "Je kunt water laten koken bij 100°C. Meer energie erin stoppen maakt het niet natter — het kookt al. Zo geldt voor veel taken: voorbij een bepaald punt voegt meer inspanning weinig toe.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een presentatie die 'goed genoeg' is voor de vergadering kost vier uur. Haar perfectioneren tot 'perfect' kost nog eens acht uur, maar het effect op het publiek is minimaal." },
      { domain: "Studie", icon: "📚", text: "De eerste 70% begrijpen van een onderwerp kost weinig tijd; de laatste 30% volledig beheersen kost vaak evenveel of meer. Soms is 70% voldoende voor het doel." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Twee keer per week 30 minuten intensief sporten geeft al grote gezondheidsbaten. Elke dag twee uur gaat je niet lineair gezonder maken — de meerwaarde daalt snel." }
    ],
  },
  {
    id: "spaced-repetition",
    title: "Gespreide Herhaling",
    difficulty: 2,
    emoji: "🔁",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Leren",
    definition: "Gespreide herhaling is een leertechniek waarbij informatie wordt herhaald op toenemend langere intervallen, net voordat je het vergeet. Dit maakt gebruik van het 'spacing effect': verspreid leren is aanzienlijk effectiever dan herhaling in één blok.",
    abstractExample: "Stel je een curve voor die daalt naarmate de tijd verstrijkt — de vergeetcurve. Gespreide herhaling hakt telkens in op de curve net voor het dieptepunt, waarna de curve minder snel daalt. Na elke herhaling duurt het langer voor je vergeet.",
    examples: [
      { domain: "Studie", icon: "📚", text: "Apps als Anki gebruiken algoritmen om flashcards precies op het juiste moment te tonen: woorden die je goed kent zie je minder; woorden die je bijna vergeet zie je vaker." },
      { domain: "Werk", icon: "💼", text: "Een verkoper herhaalt de kenmerken van nieuwe producten op dag 1, dag 3, dag 7 en dag 14 na de training — in plaats van alles op dag 1 te stampen." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Namen leren op feestjes: herhaal de naam direct bij kennismaking, zeg hem drie minuten later in een zin, en gebruik hem aan het einde van het gesprek nog een keer." }
    ],
  },
  {
    id: "retrieval-practice",
    title: "Ophaaleffect",
    difficulty: 2,
    emoji: "🧲",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Leren",
    definition: "Retrieval practice (het ophaaleffect) is de bevinding dat actief proberen informatie uit het geheugen op te halen — in plaats van het opnieuw te lezen — het geheugen veel sterker versterkt. Testen is een leeractiviteit, niet alleen een meetinstrument.",
    abstractExample: "Lezen is als water in een lekkende emmer gieten. Opzoeken (retrieving) is als de gaten dichten — elke keer dat je iets ophaalt, wordt de opslag sterker en duurzamer.",
    examples: [
      { domain: "Studie", icon: "📚", text: "Na het lezen van een hoofdstuk het boek sluiten en opschrijven wat je je herinnert (brain dump) is effectiever dan het hoofdstuk herlezen — ook al voelt herlezen makkelijker en comfortabeler." },
      { domain: "Werk", icon: "💼", text: "Na een vergadering de belangrijkste punten opschrijven zonder je aantekeningen te raadplegen versterkt het geheugen beter dan de notulen herlezen." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Jezelf quizzen over wat je gisteren las of zag — in plaats van het opnieuw bekijken — is een eenvoudige maar krachtige dagelijkse gewoonte." }
    ],
  },
  {
    id: "interleaving",
    title: "Verweven Leren",
    difficulty: 2,
    emoji: "🔀",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Leren",
    definition: "Verweven leren (interleaving) is het afwisselen van verschillende onderwerpen of soorten problemen tijdens een studiesessie, in tegenstelling tot geblokt leren (één onderwerp volledig afronden voor je verder gaat). Interleaving voelt moeilijker maar leidt tot beter begrip en overdracht.",
    abstractExample: "Blokkeren is als elke dag alleen linksbenig trappen om dat te verbeteren. Verweven is afwisselen: links, rechts, hoofd. Het voelt minder gecontroleerd maar maakt je een betere voetballer.",
    examples: [
      { domain: "Studie", icon: "📚", text: "Wiskunde oefenen door steeds van type te wisselen (algebra, meetkunde, statistiek) in één sessie levert beter begrip op dan drie uur puur algebra, ook al voelt het minder vloeiend." },
      { domain: "Werk", icon: "💼", text: "Een designer die wisselt tussen verschillende soorten ontwerpuitdagingen (UX, visueel, typografie) in een werkdag, ontwikkelt flexibeler vaardigheden dan iemand die een week puur aan UX werkt." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Gitaarlessen waarbij je afwisselt tussen akkoorden, melodielijnen en ritme geven sneller een volledig muzikant dan maanden uitsluitend akkoorden studeren." }
    ],
  },
  {
    id: "elaborative-interrogation",
    title: "Uitdiepend Vragen Stellen",
    difficulty: 2,
    emoji: "❓",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Leren",
    definition: "Uitdiepend vragen stellen (elaborative interrogation) is de techniek van jezelf 'waarom' en 'hoe' vragen stellen bij nieuwe informatie, in plaats van feiten passief te accepteren. Dit verbindt nieuwe kennis met bestaande kennis en verdiept begrip.",
    abstractExample: "In plaats van te onthouden 'bomen verliezen blad in de herfst', vraag je 'waarom verliezen bomen blad?' Je antwoord verbindt het feit met fotosynthese, koude, waterverlies — een web van kennis.",
    examples: [
      { domain: "Studie", icon: "📚", text: "Een student leert 'de Franse Revolutie begon in 1789'. In plaats van dit te memoriseren vraagt hij: 'Waarom juist 1789? Wat maakte die periode rijp voor revolutie?' Dit bouwt een causaal begrip." },
      { domain: "Werk", icon: "💼", text: "Na het lezen van een bedrijfsrapport: 'Waarom daalde de omzet juist in dit kwartaal? Hoe hangt dit samen met markttrends?' Dit leidt tot dieper inzicht dan het onthouden van de cijfers." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Bij het koken een nieuw recept niet alleen volgen, maar vragen: 'Waarom voeg ik zout toe aan het kookwater? Waarom laat ik vlees rusten na het bakken?' Zo word je een beter kok." }
    ],
  },
  {
    id: "feynman-technique",
    title: "Feynman-techniek",
    difficulty: 2,
    emoji: "🧑‍🏫",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Leren",
    definition: "De Feynman-techniek is een vierstapsleermethode: 1) Kies een concept, 2) Leg het uit alsof je het uitlegt aan een kind, 3) Identificeer hiaten in je begrip en bestudeer opnieuw, 4) Vereenvoudig en gebruik analogieën. Het doel: diep begrip, geen oppervlakkige memorisatie.",
    abstractExample: "Als je iets echt begrijpt, kun je het simpel uitleggen. Als je het niet eenvoudig kunt uitleggen, begrijp je het zelf niet goed genoeg. De techniek gebruikt uitleggen als spiegel van begrip.",
    examples: [
      { domain: "Studie", icon: "📚", text: "Na het leren van 'elektromagnetische inductie' probeer je het uit te leggen zonder vaktermen: 'Als je een magneet beweegt door een koper ring, gaan elektronen stromen.' Kun je dit? Dan begrijp je het." },
      { domain: "Werk", icon: "💼", text: "Een consultant die een strategie kan uitleggen aan een sceptische buurman zonder jargon, begrijpt het echt — en kan het beter verkopen dan iemand die alleen de buzzwords kent." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Uitleggen aan je kind waarom er seizoenen zijn (niet 'de aarde kantelt op zijn as' maar: 'in de winter staat de zon lager, dus geeft hij minder warmte aan ons stukje aarde') verdiept je eigen begrip." }
    ],
  },
  {
    id: "chunking",
    title: "Chunking",
    difficulty: 1,
    emoji: "🧩",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Leren",
    definition: "Chunking is het groeperen van losse informatie-eenheden in betekenisvolle clusters ('chunks'), zodat ze als één eenheid in het werkgeheugen kunnen worden opgeslagen. Experts denken in chunks; beginners in losse onderdelen.",
    abstractExample: "Een telefoonnummer als '0612345678' onthouden is moeilijk. Als '06-1234-5678' is het drie chunks. In muziek is een akkoord een chunk — een expert ziet 'Dm7' als één ding, een beginner ziet vier losse noten.",
    examples: [
      { domain: "Studie", icon: "📚", text: "Een schaakmeesters ziet niet 32 losse stukken, maar patronen en formaties — chunks. Beginners zien losse stukken. Chunking is waarom experts sneller en beter denken in hun domein." },
      { domain: "Werk", icon: "💼", text: "Een ervaren programmeur ziet 'een lus die filtert en transformeert' als één chunk — een beginner ziet afzonderlijke regels. Dit maakt experts sneller bij code lezen en schrijven." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Leren typen begint met losse letters, dan worden woorden chunks, dan zinnen. Je hoeft niet meer na te denken over elke letter afzonderlijk." }
    ],
  },
  {
    id: "mind-mapping",
    title: "Mind Mapping",
    difficulty: 1,
    emoji: "🗺️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Leren",
    definition: "Mind mapping is een visuele denkorganisatietechniek waarbij je een centraal concept in het midden plaatst en gerelateerde ideeën als takken uitbreidt. Dit weerspiegelt hoe de hersenen associatief werken en helpt bij begrijpen, onthouden en creatief denken.",
    abstractExample: "Een mind map is als een boom. De stam is het hoofdonderwerp. Grote takken zijn hoofdthema's. Kleine takken zijn details. De boom toont hoe alles samenhangt — een lineaire lijst doet dat niet.",
    examples: [
      { domain: "Studie", icon: "📚", text: "In plaats van lineaire aantekeningen maakt een student een mind map van een hoofdstuk: centraal 'fotosynthese', takken voor 'lichtreactie', 'donkerreactie', 'chloroplasten', etc." },
      { domain: "Werk", icon: "💼", text: "Bij een brainstorm over een nieuw product wordt een mind map gemaakt met 'productlancering' in het midden, takken voor marketing, techniek, klantenservice, tijdlijn." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Een vakantie plannen via mind map: centraal 'zomervakantie', takken voor bestemming, budget, activiteiten, logistiek — geeft overzicht en mist niets." }
    ],
  },
  {
    id: "desirable-difficulty",
    title: "Gewenste Moeilijkheid",
    difficulty: 3,
    emoji: "💪",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Leren",
    definition: "Gewenste moeilijkheid (desirable difficulty) is het principe dat leren dat zich moeilijk aanvoelt — ophalen, interleaven, genereren — leidt tot robuustere en duurzamere kennis, terwijl leren dat makkelijk aanvoelt (herlezen, blokkeren) oppervlakkiger is.",
    abstractExample: "Een spier groeit niet van makkelijke oefeningen — die houden hem alleen actief. Zo ook het geheugen: gemakkelijk leren houdt kennis oppervlakkig. De juiste moeilijkheidsgraad bouwt echte kracht.",
    examples: [
      { domain: "Studie", icon: "📚", text: "Herlezen voelt productief (je herkent alles) maar leidt tot illusie van kennis. Jezelf quizzen voelt moeilijker en frustrerender, maar leidt tot werkelijk leren — desirable difficulty in actie." },
      { domain: "Werk", icon: "💼", text: "Een trainingsprogramma dat medewerkers direct aan moeilijke cases zet (niet eerst makkelijke oefeningen) is minder comfortabel maar leidt tot snellere competentieontwikkeling." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Een nieuwe taal leren zonder vertaaltools (moeilijker) leidt tot betere taalbeheersing dan met constante hulpmiddelen studeren." }
    ],
  },
  {
    id: "transfer-of-learning",
    title: "Transfer van Leren",
    difficulty: 3,
    emoji: "🔗",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Leren",
    definition: "Transfer van leren is het vermogen om kennis of vaardigheden opgedaan in één context toe te passen in een nieuwe, andere context. Diep begrip bevordert transfer; oppervlakkige memorisatie doet dat niet. Onderscheid: nabije transfer (gelijke context) en verre transfer (andere context).",
    abstractExample: "Leren pianospelen tranfsereert deels naar gitaar spelen — de muziektheorie en ritmevaardigheden zijn overdraagbaar. Maar als je alleen de noten memoriseert (niet de muziektheorie), is die transfer minimaal.",
    examples: [
      { domain: "Studie", icon: "📚", text: "Een student die statistiek begrijpt als 'hoe meet ik onzekerheid' kan dit toepassen in psychologie, economie en biologie — verre transfer. Iemand die formules stampt, struikelt bij elke nieuw type vraag." },
      { domain: "Werk", icon: "💼", text: "Projectmanagementvaardigheden (plannen, risicomanagement, communicatie) transfereren naar diverse branches — een ervaren projectmanager kan snel omschakelen." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Iemand die heeft leren debuggen in programmering, past diezelfde systematische probleemoplossende aanpak toe op technische problemen thuis of in de auto." }
    ],
  },
  {
    id: "worked-examples",
    title: "Uitgewerkte Voorbeelden",
    difficulty: 1,
    emoji: "📝",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Leren",
    definition: "Uitgewerkte voorbeelden (worked examples) zijn volledig uitgewerkte oplossingen die stap voor stap tonen hoe een probleem wordt opgelost. Beginners leren effectiever van uitgewerkte voorbeelden dan van zelfstandig problemen oplossen — later, als expertise groeit, verschuift dit.",
    abstractExample: "Bij leren koken is het efficiënter te kijken hoe een chef een recept stap voor stap bereidt, dan zelf te experimenteren. Later, als je de basis kent, helpt eigenlijk experimenteren meer.",
    examples: [
      { domain: "Studie", icon: "📚", text: "Een student die wiskundeproblemen leert door uitgewerkte voorbeelden grondig te analyseren, leert sneller de principes dan iemand die meteen zelf oefenopgaven probeert zonder voorbeeld." },
      { domain: "Werk", icon: "💼", text: "Nieuwe medewerkers leren sneller van geannoteerde voorbeeldprojecten (wat gedaan werd en waarom) dan van een abstracte handleiding." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Leren beleggen door uitgewerkte analyses van succesvolle en mislukte investeringsbeslissingen te bestuderen geeft dieper inzicht dan alleen theorie lezen." }
    ],
  },
  {
    id: "post-traumatic-growth",
    title: "Posttraumatische Groei",
    difficulty: 3,
    emoji: "🌱",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Emotioneel Welzijn",
    definition: "Posttraumatische groei (PTG) is het fenomeen waarbij mensen na moeilijke levensgebeurtenissen niet alleen herstellen maar daadwerkelijk groeien — in zelfkennis, relaties, levensvisie of spiritualiteit. Het is geen ontkenning van pijn, maar groei erdoor heen.",
    abstractExample: "Botbreuken herstellen soms sterker op de breukplaats dan het bot daarvoor was. Zo kunnen mensen na ernstige tegenslag op bepaalde gebieden veerkrachtiger en dieper worden dan ze ooit waren.",
    examples: [
      { domain: "Persoonlijk", icon: "💙", text: "Iemand die een ernstige ziekte overleeft, rapporteert vaak waardering voor kleine dingen, diepere relaties en een hernieuwd gevoel van richting — ook al was de ziekte vreselijk." },
      { domain: "Werk", icon: "💼", text: "Een ondernemer wiens bedrijf failliet gaat, bouwt een tweede bedrijf met meer zelfkennis, realisme en authenticiteit — geworteld in de pijnlijke ervaring." },
      { domain: "Studie", icon: "📚", text: "Een student die een jaar verliest door ziekte en achterloopt, ontwikkelt discipline, tijdsmanagement en veerkracht die studiegenoten zonder die ervaring niet hebben." }
    ],
  },
  {
    id: "gratitude-practice",
    title: "Dankbaarheidspraktijk",
    difficulty: 1,
    emoji: "🙏",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Emotioneel Welzijn",
    definition: "Dankbaarheidspraktijk is de bewuste, regelmatige gewoonte van aandacht schenken aan wat goed gaat en waardering uiten voor mensen, ervaringen en omstandigheden. Onderzoek toont dat regelmatige dankbaarheidspraktijk welzijn, slaap en relaties verbetert.",
    abstractExample: "De hersenen hebben een negativiteitsbias — ze scannen automatisch op gevaar en problemen. Dankbaarheid is als een tegengewicht: bewust aandacht richten op wat werkt, bestaat en geschonken wordt.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "Elke avond drie specifieke dingen opschrijven waarvoor je dankbaar bent (niet 'mijn gezin' maar 'dat mijn dochter lachte bij het avondeten') verhoogt aantoonbaar welzijn na zes weken." },
      { domain: "Werk", icon: "💼", text: "Een manager die wekelijks een handgeschreven bedankbriefje schrijft aan teamleden, verbetert de teammoraal en eigen welzijn tegelijk." },
      { domain: "Relaties", icon: "❤️", text: "Partners die elkaar regelmatig vertellen waarvoor ze dankbaar zijn (niet alleen bij grote dingen) bouwen positieve reservoirs op die hen door moeilijker periodes helpen." }
    ],
  },
  {
    id: "cognitive-reappraisal",
    title: "Cognitieve Herwaardering",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Emotioneel Welzijn",
    definition: "Cognitieve herwaardering is de emotieregulatietechniek waarbij je de betekenis van een situatie bewust herinterpreteert om de emotionele impact te veranderen. In tegenstelling tot onderdrukking verandert herwaardering de emotionele beleving zelf.",
    abstractExample: "Dezelfde berg kan gezien worden als een hindernis of als een avontuur. De berg verandert niet — de interpretatie wel. Herwaardering is het bewust kiezen van een andere lens voor dezelfde werkelijkheid.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Kritiek ontvangen op een project: in plaats van 'Ik faal' denken 'Dit is informatie die mij helpt groeien'. Dezelfde feedback, fundamenteel andere emotionele reactie." },
      { domain: "Persoonlijk", icon: "💙", text: "Een afwijzing voor een baan: 'Dit was duidelijk niet de juiste match' in plaats van 'Ik ben niet goed genoeg'. Herwaardering verschuift de interpretatie zonder de realiteit te ontkennen." },
      { domain: "Relaties", icon: "❤️", text: "De irritante eigenschap van een partner herinterpreteren als uitdrukking van een waarde — 'Hij is traag maar grondig' — vermindert irritatie zonder de situatie te negeren." }
    ],
  },
  {
    id: "mindfulness-practice",
    title: "Mindfulness",
    difficulty: 2,
    emoji: "🧘",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Emotioneel Welzijn",
    definition: "Mindfulness is de praktijk van bewuste, niet-oordelende aandacht voor het huidige moment — gedachten, gevoelens, lichaamssensaties. Het is geen leeghoofd, maar het observeren van de stroom van ervaringen zonder erin meegesleurd te worden.",
    abstractExample: "De geest is als water dat altijd in beweging is. Mindfulness is niet het water stilzetten — dat kan niet. Het is leren op de oever staan en de stroom observeren zonder erin te springen.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "Vijf minuten aandacht geven aan je adem — niet om het te veranderen maar om te observeren — traint het vermogen om uit automatische reactiviteit te stappen en bewuster te reageren." },
      { domain: "Werk", icon: "💼", text: "Voor een moeilijk gesprek even stoppen, drie keer adem halen en opmerken wat je voelt (spanning in de borst, snellere hartslag) helpt je bewuster en minder reactief te reageren." },
      { domain: "Eten", icon: "🍽️", text: "Mindful eten — langzaam, zonder afleiding, met aandacht voor smaak, textuur en gevoel — leidt tot beter eten, meer voldoening en minder overeten." }
    ],
  },
  {
    id: "self-compassion",
    title: "Zelfmededogen",
    difficulty: 2,
    emoji: "💗",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Emotioneel Welzijn",
    definition: "Zelfmededogen (self-compassion) is de houding van vriendelijkheid en begrip naar jezelf bij pijn, falen of tekortkoming — dezelfde warmte die je een goede vriend zou tonen. Het bestaat uit drie elementen: zelfvriendelijkheid, gedeelde menselijkheid, en mindfulness.",
    abstractExample: "Stel je voor dat een vriend dezelfde fout maakt die jij maakte. Wat zou je zeggen? Zelfmededogen is: dat zeggen tegen jezelf. De meeste mensen zijn veel vriendelijker voor anderen dan voor zichzelf.",
    examples: [
      { domain: "Persoonlijk", icon: "💙", text: "Na een sociaal blunder jezelf niet eeuwig de les lezen ('wat was ik dom') maar denken: 'Dat was ongemakkelijk. Iedereen maakt fouten. Ik kan hier van leren.' — dat is zelfmededogen." },
      { domain: "Werk", icon: "💼", text: "Na een mislukt project: in plaats van zelfkastijding erkennen dat presteren moeilijk is, dat falen deel is van het proces, en je afvragen wat je kunt leren." },
      { domain: "Studie", icon: "📚", text: "Een slecht tentamenresultaat: niet plagen ('ik ben stom') maar begrijpen ('ik was niet goed voorbereid, ik was gespannen — dat is menselijk') en plannen hoe het beter kan." }
    ],
  },
  {
    id: "hedonic-adaptation",
    title: "Hedonische Adaptatie",
    difficulty: 2,
    emoji: "📉",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Emotioneel Welzijn",
    definition: "Hedonische adaptatie is het psychologische fenomeen waarbij mensen snel wennen aan positieve of negatieve veranderingen in hun leven, terugkerend naar hun baseline geluksniveau. Dit verklaart waarom nieuwe dingen snel gewoon worden en waarom rampen minder lang pijn doen dan verwacht.",
    abstractExample: "Een nieuwe auto geeft een week lang vreugde, dan is het gewoon vervoer. Een promotie geeft blijdschap, dan is het de nieuwe norm. We zijn adaptatiemachines — zowel aan het goede als het kwade.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "Onderzoek toont dat lottowinnaar en mensen die verlamd raakten na een jaar gemiddeld vergelijkbare geluksniveaus rapporteren als daarvoor — hedonische adaptatie werkt in beide richtingen." },
      { domain: "Werk", icon: "💼", text: "Die droomsalaris verhoging: de eerste maand voel je het. Na drie maanden is het de nieuwe norm. Materiële winsten adapteren snel — ervaringen en relaties minder snel." },
      { domain: "Persoonlijk", icon: "💙", text: "Nieuwheid van een hobby die maanden geleden je passie was voelt nu gewoon. Begrip van hedonische adaptatie helpt bewust variatie in te bouwen om enjoyment te behouden." }
    ],
  },
  {
    id: "meaning-making",
    title: "Betekenisgeving",
    difficulty: 3,
    emoji: "🌟",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Emotioneel Welzijn",
    definition: "Betekenisgeving is het actieve proces van het construeren van betekenis uit ervaringen — met name moeilijke — door ze te integreren in een coherent levensverhaal. Mensen die betekenis kunnen geven aan tegenslag verwerken dit beter en herstellen sneller.",
    abstractExample: "Dezelfde verlieservaring kan worden beleefd als 'mijn leven is verwoest' of als 'dit heeft me geleerd wat werkelijk telt'. De feiten zijn identiek — de betekenis die we eraan geven bepaalt de impact.",
    examples: [
      { domain: "Persoonlijk", icon: "💙", text: "Iemand die kanker overleeft en zegt 'dit heeft mij doen inzien wat echt belangrijk is' heeft betekenis gegeven — niet ontkend dat de ziekte erg was, maar er iets zinvols in gevonden." },
      { domain: "Werk", icon: "💼", text: "Een professional die zijn baan verliest en dit herinterpreteert als 'de duw die ik nodig had om mijn eigenlijke passie na te jagen' maakt actief betekenis van pijn." },
      { domain: "Relaties", icon: "❤️", text: "Een scheiding verwerken door te begrijpen wat je ervan hebt geleerd over jezelf en over wat je nodig hebt in een relatie, in plaats van puur te ervaren als falen." }
    ],
  },
  {
    id: "acceptance-commitment",
    title: "Acceptatie en Commitment",
    difficulty: 3,
    emoji: "🤝",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Emotioneel Welzijn",
    definition: "Acceptatie en Commitment Therapie (ACT) is een gedragsmatige benadering die psychologische flexibiliteit bevordert: het vermogen om moeilijke gedachten en gevoelens te accepteren (zonder ze te bestrijden), terwijl je leeft in lijn met je diepste waarden.",
    abstractExample: "Stel je voor dat je een zak met stenen draagt (ongewenste gedachten/gevoelens). ACT zegt niet: 'Zet de stenen neer.' Het vraagt: 'Kun je de zak dragen terwijl je tóch naar je bestemming loopt?' Acceptatie maakt de zak lichter; commitment geeft richting.",
    examples: [
      { domain: "Persoonlijk", icon: "💙", text: "Angst voor falen volledig accepteren — voelen, erkennen — maar toch het moeilijke gesprek aangaan omdat verbinding een waarde is die groter is dan de angst." },
      { domain: "Werk", icon: "💼", text: "Onzekerheid over een carrièrebeslissing accepteren als inherent aan de situatie, en toch stappen zetten in de richting van werk dat zinvol aanvoelt." },
      { domain: "Relaties", icon: "❤️", text: "Pijn na een conflict accepteren zonder erin vast te blijven, en je gedrag richten op wat jij wil zijn als partner — vanuit waarden, niet vanuit de emotie." }
    ],
  },
  {
    id: "resilience-building",
    title: "Veerkracht Opbouwen",
    difficulty: 2,
    emoji: "🏋️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Emotioneel Welzijn",
    definition: "Veerkracht is het vermogen om te herstellen van tegenslagen, stress en moeilijkheden. Het is geen aangeboren eigenschap maar een vaardigheid die opgebouwd wordt via sociale verbinding, zingeving, coping-strategieën en bewuste omgang met stress.",
    abstractExample: "Veerkracht werkt als een veer: ze kan worden ingedrukt, maar keert terug. Hoe sterker en flexibeler de veer (door training en onderhoud), hoe dieper ze kan worden ingedrukt zonder te breken.",
    examples: [
      { domain: "Persoonlijk", icon: "💙", text: "Na een verlies tijdelijk stilstaan, rouw toelaten, steun zoeken, en kleine stappen zetten naar herstel — dit is actieve veerkracht, niet stoïcijnse gevoelloosheid." },
      { domain: "Werk", icon: "💼", text: "Na een mislukt project: wat ging mis analyseren, lessen trekken, het team samenhouden en met hernieuwd enthousiasme beginnen aan het volgende — veerkracht in teamcontext." },
      { domain: "Studie", icon: "📚", text: "Een student die na een slecht semester zijn studieaanpak herziet, hulp zoekt en opnieuw start met concrete verbeteringen, oefent veerkracht als leerproces." }
    ],
  },
  {
    id: "emotional-flexibility",
    title: "Emotionele Flexibiliteit",
    difficulty: 2,
    emoji: "🌊",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Emotioneel Welzijn",
    definition: "Emotionele flexibiliteit is het vermogen om een breed scala van emoties te ervaren en te reguleren — passend bij de context — zonder vast te zitten in rigide patronen van onderdrukking of overweldiging. Het omvat het kunnen bewegen tussen emoties en het aanpassen van emotionele responses.",
    abstractExample: "Emotionele flexibiliteit is als een goed gestemde gitaar: alle snaren kunnen klinken, van zacht tot hard, afhankelijk van wat de muziek vraagt. Een rigide instrument kan maar één toon spelen.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een manager die verdriet kan tonen bij slecht nieuws, assertief kan zijn bij moeilijke beslissingen, en enthousiast bij inspirerende presentaties — zonder te berekend of onecht over te komen." },
      { domain: "Relaties", icon: "❤️", text: "In staat zijn te huilen met een vriend die rouwt, te lachen bij een feest, en zakelijk te zijn bij een conflict — allemaal authentiek, allemaal gepast." },
      { domain: "Persoonlijk", icon: "💙", text: "Teleurstelling voelen bij een tegenslag (eerlijk), het verwerken, en dan kiezen voor actie — zonder vast te blijven in de teleurstelling of deze weg te drukken." }
    ],
  },
  {
    id: "lateral-thinking",
    title: "Lateraal Denken",
    difficulty: 2,
    emoji: "↔️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Creativiteit",
    definition: "Lateraal denken (bedacht door Edward de Bono) is het benaderen van problemen vanuit onverwachte hoeken — buiten de logische, lineaire redenering om. Het daagt aannames uit en zoekt alternatieve frames die nieuwe oplossingen openen.",
    abstractExample: "Verticaal denken graaft hetzelfde gat dieper. Lateraal denken begint een nieuw gat op een andere plek. Soms is de oplossing niet dieper graven maar ergens anders beginnen.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een hotel met lange wachttijden bij liften loste dit niet op door meer liften te plaatsen, maar door spiegels bij de liften te zetten. Klachten verdwenen — mensen waren bezig met zichzelf bekijken. Lateraal denken in actie." },
      { domain: "Studie", icon: "📚", text: "Vastgelopen op een essay? In plaats van harder proberen: schrijf het essay vanuit het tegenovergestelde standpunt. Dit onthult zwakke punten en geeft nieuwe inzichten." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Ruzie over het opruimen van de keuken oplossen niet door de taken te verdelen, maar door een systeem te ontwerpen dat opruimen verleidelijker maakt." }
    ],
  },
  {
    id: "first-principles-thinking",
    title: "Redeneren vanuit Eerste Principes",
    difficulty: 3,
    emoji: "🔬",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Creativiteit",
    definition: "Redeneren vanuit eerste principes is het ontmantelen van problemen tot hun meest fundamentele bouwstenen — feiten die niet verder herleid kunnen worden — en van daaruit opnieuw opbouwen. Het weigert analogieën en bestaande aannames als startpunt.",
    abstractExample: "Analoog denken: 'We doen het zo omdat anderen het zo doen.' Eerste-principes denken: 'Waarom doen we het überhaupt? Wat zijn de fundamentele feiten? Wat is de theoretisch beste oplossing?'",
    examples: [
      { domain: "Werk", icon: "💼", text: "SpaceX vroeg niet 'Hoe maken we raketten goedkoper?' maar 'Wat kost een raket in grondstoffen?' (~2% van marktprijs). Dit leidde tot een volledig nieuw bedrijfsmodel." },
      { domain: "Studie", icon: "📚", text: "In plaats van een essay schrijven 'zoals je het hebt geleerd': 'Wat is een essay eigenlijk? Een betoog. Welke elementen zijn essentieel voor een overtuigend betoog?' Terug naar de kern." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Dieet kiezen niet op basis van trends, maar vragen: 'Welke voedingsstoffen heeft mijn lichaam daadwerkelijk nodig? Wat zijn de werkelijke effecten van voedsel op mijn doelen?'" }
    ],
  },
  {
    id: "inversion-thinking",
    title: "Inversiedenken",
    difficulty: 2,
    emoji: "🔃",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Creativiteit",
    definition: "Inversiedenken (geïnspireerd door Carl Jacobi en Charlie Munger) is het omdraaien van een probleem: in plaats van 'Hoe bereik ik succes?' vragen 'Hoe zou ik zeker falen?' Door faalscenario's te identificeren kun je ze vermijden.",
    abstractExample: "Wil je gelukkig zijn? Vraag: 'Wat maakt mensen miserable?' Vermijd dat. Wil je een goed product bouwen? Vraag: 'Hoe zou ik dit product zo slecht mogelijk maken?' Doe het tegenovergestelde.",
    examples: [
      { domain: "Werk", icon: "💼", text: "In plaats van 'Hoe maak ik dit project succesvol?' vragen: 'Wat zou dit project zeker laten mislukken?' Gebrekkige communicatie, geen duidelijke verantwoordelijkheid, te optimistische planning — elimineer die." },
      { domain: "Relaties", icon: "❤️", text: "In plaats van 'Hoe verbeter ik mijn relatie?': 'Wat zou mijn relatie zeker beschadigen?' Gebrek aan eerlijkheid, verwaarlozing, weinig waardering. Vermijd die." },
      { domain: "Studie", icon: "📚", text: "'Hoe zorg ik ervoor dat ik absoluut niets leer?' Passief lezen, geen oefening, geen herhaling. Het tegenovergestelde van die lijst is een effectief studieplan." }
    ],
  },
  {
    id: "pre-mortem",
    title: "Pre-mortem Analyse",
    difficulty: 2,
    emoji: "🔮",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Creativiteit",
    definition: "Een pre-mortem is een planningsoefening waarbij je je voorstelt dat een project al mislukt is en terugredeneert: 'Stel het is over een jaar mislukt — wat is er misgegaan?' Dit activeert kritisch denken en identificeert risico's die optimisme en groepsdruk anders verbergen.",
    abstractExample: "Een post-mortem analyseert een mislukt project na afloop. Een pre-mortem doet dit vóóraf — je reist mentaal naar een mislukt toekomst en analyseert de oorzaken alsof ze al zijn gebeurd.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Voor een productlancering het team vragen: 'Stel dat we over zes maanden op de voorpagina staan als voorbeeld van een mislukte lancering — wat is er fout gegaan?' Mensen benoemen risico's die ze anders niet uitspreken." },
      { domain: "Studie", icon: "📚", text: "Voor een grote presentatie vragen: 'Stel ik sta er morgen slecht voor — wat heeft dat veroorzaakt?' Onvoldoende voorbereiding, technische problemen, geen backup. Nu kun je ze voorkomen." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Voor een grote reis: 'Stel dat de vakantie een ramp wordt — wat is er misgegaan?' Paspoort vergeten, geen reisverzekering. Checklist van preventie volgt vanzelf." }
    ],
  },
  {
    id: "design-thinking",
    title: "Design Thinking",
    difficulty: 2,
    emoji: "🎨",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Creativiteit",
    definition: "Design thinking is een mensgerichte probleemoplossingsmethodologie in vijf fasen: Empathie (begrijp de gebruiker), Definieer (formuleer het werkelijke probleem), Ideeer (genereer veel ideeën), Prototypeer (maak snelle modellen), Test (valideer met echte gebruikers).",
    abstractExample: "Ingenieurs vragen: 'Hoe bouwen we dit?' Design thinkers vragen eerst: 'Wie gebruikt dit, en wat probeert hij werkelijk te bereiken?' Het antwoord verandert soms het hele probleem.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een ziekenhuis wilde de patiëntervaring verbeteren. Observaties toonden dat het grootste probleem verveling en angst was tijdens wachten. Oplossing: betere oriëntatie en entertainment — niet meer personeel." },
      { domain: "Studie", icon: "📚", text: "Een scriptie schrijven met design thinking: eerst diep begrijpen welke lezer het leest (empathie), dan het werkelijke kennisgat definiëren, dan meerdere onderzoeksaanpakken bedenken." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Een cadeau kopen met design thinking: niet 'wat wil ik geven' maar 'wat beleeft deze persoon dagelijks, wat mist hij, wat zou zijn dag beter maken?'" }
    ],
  },
  {
    id: "six-thinking-hats",
    title: "Zes Denkhoeden",
    difficulty: 2,
    emoji: "🎩",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Creativiteit",
    definition: "De Zes Denkhoeden (Edward de Bono) is een denkkader waarbij zes 'hoeden' zes denkstijlen vertegenwoordigen: wit (feiten), rood (gevoel), zwart (risico), geel (optimisme), groen (creativiteit), blauw (proces). Door bewust van hoed te wisselen, denk je vollediger.",
    abstractExample: "Normaal denk je gelijktijdig over feiten, risico's, emoties en ideeën — en ze storen elkaar. De hoeden zorgen dat iedereen tegelijk in dezelfde richting denkt, wat denken effectiever maakt.",
    examples: [
      { domain: "Werk", icon: "💼", text: "In een vergadering over een nieuw product: Witte hoed: 'Wat zijn de marktcijfers?' Zwarte hoed: 'Welke risico's zijn er?' Gele hoed: 'Welke kansen zien we?' Groene hoed: 'Welke creatieve ideeën hebben we?' Dit voorkomt dat pessimisme creativiteit blokkeert." },
      { domain: "Studie", icon: "📚", text: "Een essay kritisch beoordelen met alle zes hoeden: de feiten checken (wit), de sterke punten benoemen (geel), de zwakke argumenten identificeren (zwart), alternatieve invalshoeken bedenken (groen)." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Een groot besluit nemen (verhuizen, carrièreswitch) door bewust elke hoed 'op te zetten' en vanuit die lens vijf minuten te denken, voordat je conclusies trekt." }
    ],
  },
  {
    id: "divergent-convergent",
    title: "Divergent en Convergent Denken",
    difficulty: 2,
    emoji: "🔀",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Creativiteit",
    definition: "Creatief probleemoplossen vereist twee denkfasen: divergent denken (zo veel mogelijk ideeën genereren zonder oordeel) en convergent denken (het beste idee selecteren via analyse). Ze mogen elkaar niet verstoren — oordelen tijdens ideegeneratie doodt creativiteit.",
    abstractExample: "Divergent denken is als een vuurwerk: ideeën vliegen in alle richtingen. Convergent denken is als een trechter: al die ideeën worden gefilterd tot één krachtige richting. Beide fasen zijn noodzakelijk.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een brainstorm wordt effectiever in twee fasen: eerst 20 minuten alle ideeën opschrijven zonder commentaar (divergent), dan de beste drie selecteren op basis van criteria (convergent)." },
      { domain: "Studie", icon: "📚", text: "Een essay beginnen: eerst alles opschrijven wat je over het onderwerp weet (divergent), dan structureren en selecteren wat relevant is (convergent)." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Een verjaardag plannen: eerst alle ideeën noteren zonder te beoordelen, dan filteren op budget en voorkeur van de jarige." }
    ],
  },
  {
    id: "five-whys",
    title: "Vijf Keer Waarom",
    difficulty: 1,
    emoji: "❓",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Creativiteit",
    definition: "De Vijf Keer Waarom-methode (ontwikkeld door Toyota) is een root-cause analyse techniek: op elke 'waarom'-vraag geef je een antwoord en stel je opnieuw 'waarom', totdat je de fundamentele oorzaak bereikt. Vijf is een richtlijn — soms zijn het drie, soms zeven.",
    abstractExample: "Je auto start niet. Waarom? Accu leeg. Waarom? Dynamo kapot. Waarom? Riem gebroken. Waarom? Niet vervangen bij onderhoudsbeurt. Waarom? Geen onderhoudsschema. Dáár zit de werkelijke oorzaak.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Klant is ontevreden. Waarom? Levering te laat. Waarom? Productie vertraagd. Waarom? Grondstofprobleem. Waarom? Leverancier niet gecommuniceerd. Waarom? Geen vroegwaarschuwingssysteem. Oplossing: systeem bouwen." },
      { domain: "Studie", icon: "📚", text: "Ik slaag niet voor dit vak. Waarom? Ik begrijp de stof niet goed. Waarom? Ik lees het wel maar oefen niet. Waarom? Oefenopgaven voelen saai. Waarom? Ik zie het nut niet. Oplossing: verbind de stof aan praktische toepassingen." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Ik sport niet. Waarom? Geen tijd. Waarom? Avonden vol. Waarom? Te veel verplichtingen. Waarom? Ik kan moeilijk nee zeggen. Werkelijke probleem: assertiviteit, niet agenda-beheer." }
    ],
  },
  {
    id: "brainwriting",
    title: "Brainwriting",
    difficulty: 1,
    emoji: "✍️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Creativiteit",
    definition: "Brainwriting is een alternatief voor mondelinge brainstormen waarbij deelnemers ideeën schriftelijk noteren en elkaars ideeën verder ontwikkelen. Dit vermijdt sociale remming, dominante sprekers en groepsdenken die traditionele brainstormsessies beperken.",
    abstractExample: "In een klassieke brainstorm domineert wie het hardst praat. Brainwriting geeft iedereen evenveel stem — introvert of extrovert, junior of senior — omdat ideeën op papier staan, niet in de lucht.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Elk teamlid schrijft drie ideeën op een vel, geeft het door, de volgende voegt drie ideeën toe op basis van wat er staat. Na vier rondes heeft elk vel twaalf ideeën — zonder dominantie." },
      { domain: "Studie", icon: "📚", text: "Groepsopdracht beginnen met brainwriting: iedereen schrijft vijf minuten individueel ideeën, deelt ze dan. Minder groepsdenken, meer diversiteit in output." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Met je gezin vakantieideeën plannen: iedereen schrijft vijf ideeën op, dan vergelijk je. Kinderen durven vaker iets te schrijven dan te zeggen als de ouders al iets zeiden." }
    ],
  },
  {
    id: "creative-constraints",
    title: "Creatieve Beperkingen",
    difficulty: 2,
    emoji: "🔒",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Creativiteit",
    definition: "Creatieve beperkingen zijn bewust opgestelde limieten (tijd, middelen, regels) die de creativiteit paradoxaal genoeg stimuleren. Onbeperkte vrijheid leidt vaak tot verlamming of oppervlakkigheid; beperkingen dwingen tot diep nadenken en onconventionele oplossingen.",
    abstractExample: "Een blanco canvas kan verlammend zijn. Een canvas met drie kleuren en de opdracht 'maak een portret in 30 minuten' dwingt tot keuzes en creativiteit. Beperkingen zijn geen hindernis maar een springplank.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Twitter's 280-tekenlimiet dwong gebruikers tot scherper, bondiger schrijven — wat een geheel nieuwe schrijfcultuur creëerde die zonder de limiet niet was ontstaan." },
      { domain: "Studie", icon: "📚", text: "Een essay schrijven in maximaal 500 woorden dwingt tot scherper nadenken over wat werkelijk belangrijk is — effectiever dan 'schrijf zoveel als nodig'." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Koken met alleen wat in de koelkast zit dwingt tot creatieve combinaties die je nooit zelf zou bedenken bij een leeg receptenboek." }
    ],
  },
  {
    id: "empathic-accuracy",
    title: "Empathische Nauwkeurigheid",
    difficulty: 2,
    emoji: "🎯",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Sociale Vaardigheden",
    definition: "Empathische nauwkeurigheid is het vermogen om nauwkeurig te begrijpen wat iemand anders denkt en voelt — niet alleen te veronderstellen. Het verschilt van sympatie (meevoelen) en algemene empathie (inleven): het gaat om precisie in het begrijpen van andermans innerlijke wereld.",
    abstractExample: "Empathie zonder nauwkeurigheid is als navigeren met een kompas dat soms de verkeerde richting wijst. Je probeert te begrijpen, maar je aannames kloppen niet. Nauwkeurigheid vereist navragen, luisteren en aanpassen.",
    examples: [
      { domain: "Relaties", icon: "❤️", text: "Je partner is stil na het werk. In plaats van aannemen dat hij boos is (lage empathische nauwkeurigheid), vraag je: 'Ben je moe, of zit er iets wat je bezig houdt?' De werkelijkheid kan totaal anders zijn." },
      { domain: "Werk", icon: "💼", text: "Een collega stelt kritische vragen in een vergadering. Lage nauwkeurigheid: 'Hij is moeilijk.' Hoge nauwkeurigheid: 'Hij maakt zich zorgen over de tijdlijn — navragen bevestigt dit.' Reactie verandert volledig." },
      { domain: "Opvoeding", icon: "👨‍👩‍👧", text: "Een kind is boos en huilt. In plaats van 'hij is moe' automatisch aannnemen, vraag je door wat er is. Soms is de echte oorzaak anders dan de vermoedde — en dan helpt de juiste respons veel beter." }
    ],
  },
  {
    id: "perspective-taking",
    title: "Perspectiefname",
    difficulty: 2,
    emoji: "👓",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Sociale Vaardigheden",
    definition: "Perspectiefname is het bewust innemen van het standpunt van een ander persoon — hun situatie, achtergrond, behoeften en overtuigingen in overweging nemen bij het begrijpen van hun gedrag. Het is een cognitieve vaardigheid die begrip en samenwerking verdiept.",
    abstractExample: "Stel je voor dat je dezelfde film ziet vanuit de ogen van een ander personage. Plotseling begrijp je waarom 'de slechterik' doet wat hij doet — hij is de held van zijn eigen verhaal. Perspectiefname is dat ook in het echte leven doen.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een moeilijke klant begrijp je beter als je nadenkt over zijn context: hij heeft zijn eigen baas, zijn eigen druk, zijn eigen angst. Zijn 'onredelijke' eisen worden logisch vanuit zijn perspectief." },
      { domain: "Relaties", icon: "❤️", text: "Een argument met je partner: in plaats van je eigen gelijk verdedigen, je afvragen: 'Welk verhaal vertelt hij zichzelf over deze situatie? Welke behoefte speelt hierin?' Dit opent de dialoog." },
      { domain: "Studie", icon: "📚", text: "Een historische figuur begrijpen door je af te vragen: 'In welke wereld leefde hij? Wat waren zijn opties? Wat wist hij wel en niet?' Dit leidt tot genuanceerder historisch begrip." }
    ],
  },
  {
    id: "rapport-building",
    title: "Rapport Opbouwen",
    difficulty: 1,
    emoji: "🤝",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Sociale Vaardigheden",
    definition: "Rapport opbouwen is het creëren van een gevoel van wederzijds begrip, vertrouwen en verbinding met een ander persoon. Het bestaat uit elementen als actieve aandacht, gelijkschakeling, oprechte interesse en het vinden van gemeenschappelijke grond.",
    abstractExample: "Rapport is als een brug tussen twee mensen. Zonder brug staan jullie op aparte oevers — communicatie is moeilijk en inspannend. Met een stevige brug stroomt uitwisseling gemakkelijk en vanzelf.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een salesgesprek beginnen met oprechte interesse in de persoon (niet het product), luisteren naar zijn situatie en spiegelen van zijn tempo en taal — dit bouwt rapport dat verkoopgesprekken effectiever maakt." },
      { domain: "Studie", icon: "📚", text: "Een goede relatie met een docent opbouwen door actief te luisteren, vragen te stellen en interesse te tonen — dit maakt feedback ontvangen en hulp zoeken gemakkelijker." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Bij een eerste ontmoeting: de naam onthouden, doorvragen op wat de ander zegt, en iets persoonlijks delen. Kleine handelingen die een grote verbindingsbrug bouwen." }
    ],
  },
  {
    id: "conflict-resolution",
    title: "Conflictoplossing",
    difficulty: 2,
    emoji: "⚖️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Sociale Vaardigheden",
    definition: "Conflictoplossing is het proces van het constructief aanpakken van meningsverschillen zodat alle partijen zich gehoord voelen en een duurzame oplossing wordt gevonden. Effectieve conflictoplossing richt zich op belangen (waarom iemand iets wil), niet op posities (wat iemand eist).",
    abstractExample: "Twee mensen willen dezelfde sinaasappel. Positie-denken: je snijdt hem doormidden. Belangen-denken: de een wil het sap, de ander de schil. Beiden kunnen volledig krijgen wat ze willen — als je vraagt waarom.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Twee teamleden botsen over de aanpak van een project. In plaats van te oordelen wie gelijk heeft, vraag je elk: 'Welk resultaat is voor jou het belangrijkst?' Vaak zijn de onderliggende doelen compatibel." },
      { domain: "Relaties", icon: "❤️", text: "Een herhalend argument over huishoudtaken aanpakken door te vragen: 'Wat maakt dit voor jou zo belangrijk?' Het antwoord ('Ik wil me gewaardeerd voelen') opent een heel andere oplossingsruimte." },
      { domain: "Buurt", icon: "🏘️", text: "Buurconflict over geluidsoverlast: in plaats van beschuldigingen, samen praten over wederzijdse behoeften (rust vs. sociale vrijheid) en gezamenlijk werkbare afspraken maken." }
    ],
  },
  {
    id: "boundary-setting",
    title: "Grenzen Stellen",
    difficulty: 2,
    emoji: "🛑",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Sociale Vaardigheden",
    definition: "Grenzen stellen is het communiceren van wat voor jou acceptabel is in hoe anderen zich naar jou gedragen, en dit handhaven met respectvolle duidelijkheid. Gezonde grenzen beschermen je welzijn zonder de ander uit te sluiten.",
    abstractExample: "Grenzen zijn als de wanden van een huis: ze definiëren wat binnen (acceptabel) en buiten (niet-acceptabel) valt. Zonder wanden is er geen beschutting. Maar een huis dat volledig afgesloten is, is ook geen thuis — er moeten ook deuren zijn.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Aan een manager die 's avonds verwacht te bereiken zijn: 'Ik ben van 9-18 uur beschikbaar voor urgente zaken. Na werktijd ben ik offline tenzij we dat vooraf afspreken.' Dit is een duidelijke, respectvolle grens." },
      { domain: "Relaties", icon: "❤️", text: "Aan een vriend die je regelmatig afzegtop het laatste moment: 'Als je een afspraak afzegt, hoor ik dat graag minstens een dag van tevoren — tenzij het echt niet anders kan.' Grens gesteld, vriendschap intact." },
      { domain: "Familie", icon: "👨‍👩‍👧", text: "Aan ouders die overal commentaar op hebben: 'Ik waardeer jullie betrokkenheid, maar over X (opvoedkeuzes, relatie) beslis ik zelf. Jullie mening vraag ik wanneer ik die nodig heb.'" }
    ],
  },
  {
    id: "vulnerability-courage",
    title: "Kwetsbaarheid als Kracht",
    difficulty: 2,
    emoji: "💎",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Sociale Vaardigheden",
    definition: "Kwetsbaarheid als kracht (gebaseerd op Brené Brown's onderzoek) is de inzicht dat kwetsbaarheid — het durven tonen van onzekerheid, risico en emotionele blootstelling — de basis is van diepe menselijke verbinding, creativiteit en moed, niet een teken van zwakte.",
    abstractExample: "Pantser beschermt, maar sluit ook buiten. Mensen die volledig gepantserd leven, vermijden pijn maar missen ook verbinding, vreugde en groei. Kwetsbaarheid is het afleggen van het pantser wanneer het veilig genoeg is.",
    examples: [
      { domain: "Werk", icon: "💼", text: "In een vergadering zeggen 'Ik weet het antwoord op deze vraag niet' in plaats van bluffen. Dit bouwt meer vertrouwen dan een zelfverzekerd fout antwoord." },
      { domain: "Relaties", icon: "❤️", text: "Aan iemand vertellen dat je om hem geeft, wetende dat er kans is op afwijzing. Dit is kwetsbaarheid in actie — de basis van echte intimiteit." },
      { domain: "Studie", icon: "📚", text: "Om hulp vragen bij iets wat je niet begrijpt, in plaats van te doen alsof je het snapt. Dit vereist kwetsbaarheid maar leidt tot daadwerkelijk leren." }
    ],
  },
  {
    id: "forgiveness-psychology",
    title: "Psychologie van Vergeven",
    difficulty: 3,
    emoji: "🕊️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Sociale Vaardigheden",
    definition: "Vergeven is het bewuste loslaten van wrok, rancune en negatieve gevoelens jegens iemand die je heeft gekwetst — niet voor hen, maar voor je eigen welzijn. Vergeven betekent niet goedkeuren, vergeten of de relatie herstellen.",
    abstractExample: "Wrok vasthouden is als vergif drinken en hopen dat de ander eraan doodgaat. Vergeven is het vergif neerzetten — niet omdat de ander het verdient, maar omdat jij het niet verdient te dragen.",
    examples: [
      { domain: "Relaties", icon: "❤️", text: "Een ex-partner vergeven die je heeft bedrogen — niet om de relatie te herstellen of het goed te praten, maar om jezelf te bevrijden van de mentale last van aanhoudende woede." },
      { domain: "Familie", icon: "👨‍👩‍👧", text: "Ouders vergeven voor fouten in de opvoeding — begrijpen dat ze deden wat ze konden met wat ze hadden, zonder dat te goedkeuren of te bagatelliseren." },
      { domain: "Werk", icon: "💼", text: "Een collega vergeven die je oneerlijk heeft behandeld en doorgestuurd — loslaten zodat je energie vrijkomt voor je eigen groei in plaats van de wrok te koesteren." }
    ],
  },
  {
    id: "social-intuition",
    title: "Sociale Intuïtie",
    difficulty: 2,
    emoji: "🔮",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Sociale Vaardigheden",
    definition: "Sociale intuïtie is het vermogen om snel en accuraat de sociale dynamiek, stemming en behoeften van een groep of individu te lezen — vaak op basis van subtiele signalen zoals lichaamstaal, toon, ritme en context. Het is trainbare sociale intelligentie, geen aangeboren gave.",
    abstractExample: "Een goede muzikant voelt de sfeer van de kamer en speelt daarnaar — hij legt zijn setlist naast zich neer als de energie anders is dan verwacht. Sociale intuïtie is hetzelfde maar in menselijk contact.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een presentator voelt halverwege dat het publiek afhaakt — gespannen lichaamstaal, minder oogcontact, onrust. Hij past zijn tempo en aanpak aan zonder dat er iets gezegd is." },
      { domain: "Relaties", icon: "❤️", text: "Je partner binnenkomt en direct voelen — door subtiele signalen — of hij behoefte heeft aan gesprek of juist aan ruimte. En dit accuraat aflezen, niet projecteren." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Bij een etentje voelen wanneer een onderwerp gevoelig ligt voor iemand aan tafel, voordat hij het zelf zegt, en het gesprek subtiel sturen." }
    ],
  },
  {
    id: "giving-receiving-help",
    title: "Hulp Vragen en Ontvangen",
    difficulty: 2,
    emoji: "🤲",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Sociale Vaardigheden",
    definition: "Hulp vragen en ontvangen is een sociale vaardigheid die veel mensen moeilijk vinden door angst voor zwakte, afhankelijkheid of het opleggen van lasten. Onderzoek toont dat hulp vragen relaties versterkt en dat mensen die hulp ontvangen meer waardering voelen voor de helper (het Benjamin Franklin-effect).",
    abstractExample: "Mensen denken dat hulp vragen een schuld creëert. In werkelijkheid schept hulp geven de helper een investering in jou — ze willen dat je slaagt. Het vragen is geen zwakheid; het is een uitnodiging tot verbinding.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een nieuwe medewerker die snel om hulp vraagt bij onduidelijkheden (specifiek, niet alles) leert sneller én bouwt sneller relaties dan iemand die alles zelf probeert uit te vogelen." },
      { domain: "Studie", icon: "📚", text: "Na een slecht tentamen een docent opzoeken om feedback te vragen — niet makkelijk, maar het toont initiatief en leidt tot beter begrip dan alleen de stof opnieuw lezen." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Aan buren om hulp vragen bij een verhuizing in plaats van het alleen te doen — dit bouwt gemeenschap. En jij helpt hen als zij het nodig hebben." }
    ],
  },
  {
    id: "loneliness-connection",
    title: "Eenzaamheid en Verbinding",
    difficulty: 2,
    emoji: "🌐",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Sociale Vaardigheden",
    definition: "Eenzaamheid is de pijnlijke discrepantie tussen gewenste en werkelijke sociale verbinding — het gaat om kwaliteit, niet kwantiteit van relaties. Chronische eenzaamheid heeft vergelijkbare gezondheidsrisico's als roken. Verbinding is een fundamentele menselijke behoefte, geen luxe.",
    abstractExample: "Je kunt omringd zijn door mensen en diep eenzaam zijn, of alleen zijn en je volledig verbonden voelen. Eenzaamheid zit niet in de aanwezigheid van anderen, maar in de kwaliteit van de verbinding.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "Iemand die honderden online volgers heeft maar niemand heeft om 's nachts mee te praten over wat hem echt bezighoudt, ervaart functionele eenzaamheid ondanks sociale aanwezigheid." },
      { domain: "Werk", icon: "💼", text: "Veel werknemers rapporteren eenzaamheid zelfs in actieve kantooromgevingen — oppervlakkige professionele interacties vervangen geen echte verbinding." },
      { domain: "Ouderen", icon: "👴", text: "Oudereneenzaamheid is een gezondheidscrisis: sociaal geïsoleerde ouderen hebben hogere sterftecijfers dan rokers. Regelmatig contact — ook digitaal — heeft meetbaar gezondheideffect." }
    ],
  },
  {
    id: "ikigai",
    title: "Ikigai",
    difficulty: 2,
    emoji: "🌸",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Persoonlijke Strategie",
    definition: "Ikigai is een Japans concept dat verwijst naar de reden om 's ochtends op te staan — het snijpunt van vier cirkels: wat je liefhebt, wat je goed in bent, wat de wereld nodig heeft, en wat je betaald kunt krijgen. In het midden ligt je ikigai.",
    abstractExample: "Stel je vier overlappende cirkels voor. Elk overlapt geeft iets: passie (liefde + talent), missie (liefde + behoefte), roeping (talent + behoefte), professie (talent + betaling). Alleen in het midden van alle vier is er ikigai.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een leraar die schrijven geweldig vindt (liefde), er goed in is (talent), die schrijfvaardigheid nodig is in de maatschappij (behoefte), en er een salaris voor ontvangt (betaling) — heeft zijn ikigai gevonden." },
      { domain: "Studie", icon: "📚", text: "Een student die worstelt met studiekeuze kan ikigai gebruiken: Wat vind ik fascinerend? Waar ben ik goed in? Welke problemen wil ik in de wereld oplossen? Wat kan ik verdienen?" },
      { domain: "Dagelijks leven", icon: "🏠", text: "Iemand die zijn dag doorbrengt met werk dat hij niet liefheeft en slecht doet, voelt de leegte — het ikigai-kader helpt verklaren waarom en richting wijzen." }
    ],
  },
  {
    id: "smart-goals",
    title: "SMART-doelen",
    difficulty: 1,
    emoji: "🎯",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Persoonlijke Strategie",
    definition: "SMART-doelen zijn doelstellingen die Specifiek, Meetbaar, Acceptabel (haalbaar), Relevant en Tijdgebonden zijn. Het SMART-kader transformeert vage intenties ('ik wil fitter worden') in concrete plannen ('ik loop drie keer per week 30 minuten, startend maandag, tot einde van het kwartaal').",
    abstractExample: "Een wens is een richting: 'Ik wil naar Parijs.' Een SMART-doel is een navigatieplan: 'Ik boek een ticket naar Parijs voor 15 juni, binnen een budget van €400, om het Louvre en Musée d'Orsay te bezoeken.' De kans op aankomst verschilt enorm.",
    examples: [
      { domain: "Werk", icon: "💼", text: "'Beter presenteren' wordt: 'Ik volg voor 1 april een presentatietraining van 4 sessies en geef in mei mijn eerste presentatie aan het management met een feedbackformulier.' SMART." },
      { domain: "Studie", icon: "📚", text: "'Betere cijfers halen' wordt: 'Ik leer de komende vier weken drie uur per dag voor statistiek en doe elke week één proefexamen, met het doel een 7 of hoger.' SMART." },
      { domain: "Dagelijks leven", icon: "🏠", text: "'Meer sparen' wordt: 'Ik boek elke eerste van de maand automatisch €200 over naar een spaarrekening die ik niet kan pinnen.' SMART." }
    ],
  },
  {
    id: "habit-stacking",
    title: "Gewoontesstapeling",
    difficulty: 1,
    emoji: "🔗",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Persoonlijke Strategie",
    definition: "Gewoontesstapeling (habit stacking) is de techniek van het koppelen van een nieuwe gewoonte aan een bestaande, als anker: 'Na [bestaande gewoonte] doe ik [nieuwe gewoonte].' Dit maakt gebruik van bestaande neurale paden om nieuwe gedragingen in te bedden.",
    abstractExample: "Een nieuw gedrag proberen op een willekeurig moment is moeilijk — je moet er steeds aan denken. Door het te koppelen aan iets wat je al automatisch doet (koffie zetten, tanden poetsen), 'leent' de nieuwe gewoonte de kracht van de bestaande.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "'Na het poetsen van mijn tanden doe ik twee minuten meditatie.' De tandenborstel wordt de cue die de meditatie triggert — zo wordt de nieuwe gewoonte vastgehecht aan een bestaande routine." },
      { domain: "Werk", icon: "💼", text: "'Na het openen van mijn laptop schrijf ik eerst drie prioriteiten op voor de dag.' Het opstarten wordt de trigger voor doelbewuste dagplanning." },
      { domain: "Studie", icon: "📚", text: "'Na het eten van de lunch doe ik 15 minuten flashcards.' De lunch is het anker — de studietijd volgt automatisch zonder wilskracht." }
    ],
  },
  {
    id: "identity-based-habits",
    title: "Identiteitsgebaseerde Gewoontes",
    difficulty: 2,
    emoji: "🪞",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Persoonlijke Strategie",
    definition: "Identiteitsgebaseerde gewoontes (uit James Clear's Atomic Habits) is het principe dat duurzame gedragsverandering begint bij het veranderen van hoe je jezelf ziet, niet wat je doet. In plaats van 'Ik probeer te hardlopen' denk je 'Ik ben een hardloper.' Elke actie bewijst dan je identiteit.",
    abstractExample: "Er zijn twee niveaus van doelen: uitkomst ('ik wil 10 kilo afvallen') en identiteit ('ik ben iemand die gezond leeft'). Uitkomstdoelen eindigen na bereiken; identiteitsdoelen houden het gedrag in stand — omdat elke actie de identiteit bevestigt.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "In plaats van 'Ik probeer minder te drinken' denken: 'Ik ben iemand die niet drinkt.' Als iemand je een drankje aanbiedt: 'Nee dank je, ik drink niet' — niet 'Ik probeer te stoppen.' De taal vormt de identiteit." },
      { domain: "Werk", icon: "💼", text: "In plaats van 'Ik moet schrijven voor mijn werk': 'Ik ben een schrijver.' Schrijven is dan geen taak maar een uitdrukking van wie je bent — consistentie volgt naturlijk." },
      { domain: "Studie", icon: "📚", text: "In plaats van 'Ik moet studeren': 'Ik ben iemand die elke dag iets nieuws leert.' Elke studiesessie bevestigt en versterkt die identiteit." }
    ],
  },
  {
    id: "keystone-habits",
    title: "Sleutelgewoontes",
    difficulty: 2,
    emoji: "🗝️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Persoonlijke Strategie",
    definition: "Sleutelgewoontes (keystone habits) zijn gewoontes die als hefboom werken: het opbouwen ervan triggert automatisch positieve veranderingen in andere levensdomeinen. Ze creëren structuren die ander gewenst gedrag gemakkelijker maken.",
    abstractExample: "Een keystone habit is als het eerste dominosteen: zodra het valt, brengt het een ketting van andere stenen in beweging. Je zet slechts één steen op, maar de rest volgt vanzelf.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "Regelmatig sporten blijkt voor velen een keystone habit: het verbetert automatisch slaapkwaliteit, eetpatroon, stressmanagement en concentratie — zonder dat daarvoor extra doelen worden gesteld." },
      { domain: "Werk", icon: "💼", text: "Een dagelijkse planning maken (10 minuten 's ochtends) is een keystone habit die focus, prioritering en gevoel van controle over de dag verbetert." },
      { domain: "Studie", icon: "📚", text: "Dagelijks vroeg opstaan is een keystone habit: het creëert rustige ochtendstudetijd, verbetert slaapritme en vermindert nachtelijke stress — andere positieve gewoonten volgen." }
    ],
  },
  {
    id: "environment-design",
    title: "Omgevingsontwerp",
    difficulty: 2,
    emoji: "🏗️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Persoonlijke Strategie",
    definition: "Omgevingsontwerp is het bewust aanpassen van je fysieke en digitale omgeving om gewenst gedrag makkelijker en ongewenst gedrag moeilijker te maken. Gedrag is sterk contextafhankelijk — de omgeving stuurt keuzes meer dan we denken.",
    abstractExample: "Fruit op het aanrecht eten versus verstopt in de koelkast — de kans dat je fruit eet verdubbelt door positie alleen. Je karakter verandert niet; de omgeving verandert. Gedrag volgt de weg van minste weerstand.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "Sportkleding de avond ervoor klaarleggen (omgevingsontwerp voor sporten). Telefoon buiten de slaapkamer laden (ontwerp voor beter slapen). Ongezond eten niet in huis hebben (ontwerp voor gezonder eten)." },
      { domain: "Werk", icon: "💼", text: "Notificaties uitzetten, website-blockers instellen voor sociale media, en een opgeruimd bureau — dit zijn ontwerpen die focuswerk gemakkelijker maken zonder extra wilskracht." },
      { domain: "Studie", icon: "📚", text: "Een vaste studieplek die alleen voor leren wordt gebruikt, traint de hersenen om in die ruimte automatisch in studiemodus te gaan — omgevingsontwerp als conditionering." }
    ],
  },
  {
    id: "temptation-bundling",
    title: "Verleiding Koppelen",
    difficulty: 1,
    emoji: "🎁",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Persoonlijke Strategie",
    definition: "Verleiding koppelen (temptation bundling) is de strategie van het combineren van een taak die je moet doen (maar niet leuk vindt) met iets wat je wil doen (maar 'niet zou mogen' doen tenzij als beloning). Dit maakt verplichte taken aantrekkelijker.",
    abstractExample: "Je mag je favoriete podcast alleen luisteren terwijl je sport. De podcast wordt een reden om te sporten — want anders mis je de afleveringen. De beloning en de verplichting zijn onlosmakelijk verbonden.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "Je favoriete serie alleen kijken terwijl je de vaatwasser inruimt, de was doet of de woonkamer opruimt. Huishoudtaken worden aangenamer; de serie wordt een beloning die plichtvervulling vereist." },
      { domain: "Werk", icon: "💼", text: "Je favoriete koffie of muziek alleen toelaten tijdens de meest vervelende taken van de dag — administratie, facturering, rapportages. Dit maakt die taken minder zwaar." },
      { domain: "Studie", icon: "📚", text: "Flashcards oefenen alleen op je comfortabele favoriete stoel. Die stoel wordt geassocieerd met studeren én gemak — beide positief." }
    ],
  },
  {
    id: "personal-board",
    title: "Persoonlijke Raad van Advies",
    difficulty: 2,
    emoji: "🧑‍🤝‍🧑",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Persoonlijke Strategie",
    definition: "Een persoonlijke raad van advies is een informeel netwerk van mentoren, adviseurs en rolmodellen — mensen die elk een ander perspectief, expertise of levenservaring vertegenwoordigen die aanvullend is op de jouwe. Dit concept past het corporate governance-model toe op persoonlijke ontwikkeling.",
    abstractExample: "Grote bedrijven hebben een raad van bestuur die diverse perspectieven inbrengt voor betere beslissingen. Jij als individu verdient hetzelfde: een diverse groep mensen die jou helpt groeien vanuit complementaire invalshoeken.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een jonge professional bouwt een persoonlijke raad met: een senior in het vakgebied (expertise), een leeftijdsgenoot in een andere branche (fris perspectief), een ondernemer (risicodenkwijze), en een levenscoach (persoonlijk welzijn)." },
      { domain: "Studie", icon: "📚", text: "Een student bouwt haar raad met: een succesvolle alumnus (loopbaanperspectief), een medestudent die verder is (peer learning), en een professor die haar uitdaagt (intellectuele scherpte)." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Voor grote levensbeslissingen (verhuizen, carrièreswitch) een informele raad raadplegen van drie tot vijf mensen met relevante ervaringen, in plaats van alleen de mening te zoeken van mensen die het met je eens zijn." }
    ],
  },
  {
    id: "after-action-review",
    title: "Evaluatie na Actie",
    difficulty: 1,
    emoji: "🔍",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Persoonlijke Strategie",
    definition: "Een evaluatie na actie (After Action Review, ontwikkeld door het Amerikaanse leger) is een gestructureerde reflectiepraktijk na een gebeurtenis: Wat was de bedoeling? Wat gebeurde er werkelijk? Wat ging goed? Wat kan beter? Wat leer ik hiervan? Regelmatig toegepast, versnelt het leren enorm.",
    abstractExample: "Ervaring alleen leert weinig — het is gereflecteerde ervaring die leert. Een vliegtuig met alleen instrumenten maar geen piloot die ze leest, is nutteloos. De evaluatie is de piloot die de instrumenten leest.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Na elke projectmijlpaal 30 minuten nemen om te bespreken: wat was de planning, wat is er gebeurd, welke beslissingen werkten, wat zouden we anders doen. Dit versnelt teamleren exponentieel." },
      { domain: "Studie", icon: "📚", text: "Na elk tentamen: wat had ik verwacht, hoe ging het werkelijk, welke vragen overvielen me, hoe studeer ik anders voor het volgende tentamen?" },
      { domain: "Dagelijks leven", icon: "🏠", text: "Een wekelijkse persoonlijke evaluatie van 15 minuten: wat waren mijn intenties deze week, wat heb ik bereikt, wat hield me tegen, wat doe ik volgende week anders?" }
    ],
  },
  {
    id: "stoic-dichotomy",
    title: "Stoïcijnse Dichotomie van Controle",
    difficulty: 2,
    emoji: "⚖️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Zingeving",
    definition: "De dichotomie van controle (Epictetus) is het fundamentele stoïcijnse principe dat alles in twee categorieën valt: wat in onze macht is (onze oordelen, intenties, reacties) en wat niet in onze macht is (de acties van anderen, ons lichaam, reputatie, bezittingen). Geluk vloeit uit acceptatie van dit onderscheid.",
    abstractExample: "Je kunt niet kiezen of het regent — maar je kunt kiezen hoe je erop reageert, of je een jas pakt, en welke betekenis je eraan geeft. De stoïcijn richt energie uitsluitend op wat hij kan beïnvloeden.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een negatieve beoordeling ontvangen: de beoordeling zelf is niet in jouw macht (wat anderen oordelen), maar jouw reactie, je leerbereidheid en je volgende stap zijn dat wel. Stoïcijnse focus." },
      { domain: "Sport", icon: "🏃", text: "Een atleet kan niet controleren of tegenstanders beter presteren, maar wel zijn training, mentale voorbereiding en inzet op de dag. Dit onderscheid vermindert angst en verhoogt focus." },
      { domain: "Dagelijks leven", icon: "🏠", text: "File staan: de file is niet in jouw macht. Jouw stemming, hoe je de tijd gebruikt (luisterboek, muziek) en hoe je aankomt (gefrustreerd of kalm) — dat is jouw keuze." }
    ],
  },
  {
    id: "memento-mori",
    title: "Memento Mori",
    difficulty: 3,
    emoji: "💀",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Zingeving",
    definition: "Memento mori (Latijn: 'bedenk dat je sterfelijk bent') is de stoïcijnse en humanistische praktijk van bewust nadenken over de eindigheid van het leven, als middel om te focussen op wat werkelijk belangrijk is, uitstelgedrag te overwinnen en het leven dieper te waarderen.",
    abstractExample: "Stel je voor dat je een afteltimer ziet naast elk uur van je dag. Zou je anders omgaan met je tijd? Memento mori is niet macaber — het is urgent: je tijd is eindig, gebruik haar bewust.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "De vraag 'Als ik nog één jaar te leven had, zou ik dit doen?' is geen catastrofale gedachte maar een prioriteringsinstrument. Wat blijft? Wat valt weg? Dit is memento mori in praktijk." },
      { domain: "Werk", icon: "💼", text: "Steve Jobs zei dat de herinnering aan zijn eigen sterfelijkheid de krachtigste tool was om grote keuzes te maken — het verwijdert de angst voor schaamte, falen en andermans mening." },
      { domain: "Relaties", icon: "❤️", text: "Je beseffen dat dit gesprek met je ouder, kind of vriend eindig is — dat je niet weet hoeveel gesprekken er nog zijn — verdiept de aanwezigheid en waardering in het moment." }
    ],
  },
  {
    id: "amor-fati",
    title: "Amor Fati",
    difficulty: 3,
    emoji: "🌊",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Zingeving",
    definition: "Amor fati (Latijn: 'liefde voor het lot') is het filosofische begrip — benadrukt door Nietzsche en de stoïcijnen — van het niet slechts accepteren maar actief omarmen van alles wat je overkomt, inclusief tegenslagen en pijn, als onlosmakelijk onderdeel van je leven.",
    abstractExample: "Acceptatie zegt: 'Ik draag de steen.' Amor fati zegt: 'Ik omarm de steen — hij heeft me gemaakt wie ik ben.' Niet stoïcijnse gelatenheid, maar actieve liefde voor alles wat is, ook het moeilijke.",
    examples: [
      { domain: "Persoonlijk", icon: "💙", text: "Iemand die zegt 'zonder die moeilijke periode had ik nooit deze richting gevonden' oefent amor fati — niet het lijden wegdenken, maar de waarde ervan in het geheel omarmen." },
      { domain: "Werk", icon: "💼", text: "Een mislukt project niet enkel 'leren accepteren' maar actief zeggen: 'Dit falen heeft me scherper, zorgvuldiger en bescheidener gemaakt — ik zou het niet willen missen.' Amor fati." },
      { domain: "Gezondheid", icon: "❤️‍🩹", text: "Iemand die een ziekte verwerkt door te zeggen: 'Dit heeft me gedwongen te vertragen en te prioriteren wat ik anders had doorgejut' — de ziekte omarmen als leraar." }
    ],
  },
  {
    id: "values-clarification",
    title: "Waardenverduidelijking",
    difficulty: 2,
    emoji: "🧭",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Zingeving",
    definition: "Waardenverduidelijking is het bewust identificeren van je kernwaarden — wat je diepst waardeert in het leven — zodat je beslissingen, prioriteiten en doelen hierop kunt afstemmen. Onduidelijke waarden leiden tot diffuus leven; heldere waarden geven richting en maken keuzes makkelijker.",
    abstractExample: "Waarden zijn als een intern kompas. Zonder kompas dwaal je — elke richting lijkt even goed. Met een helder kompas weet je direct welke richting 'thuisvoelt', ook als de weg moeilijk is.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Iemand die pas ontdekt dat 'autonomie' zijn kernwaarde is, begrijpt waarom hij zich steeds ongelukkig voelde in hiërarchische omgevingen — en kan bewustere carrièrekeuzes maken." },
      { domain: "Relaties", icon: "❤️", text: "Waardenverduidelijking helpt begrijpen waarom bepaalde conflicten steeds terugkeren: als jij 'eerlijkheid' hoog waardeert en je partner 'harmonie', zit daar een fundamentele spanning." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Bij moeilijke beslissingen (huis kopen, job wisselen, verhuizen) heb je minder nodig als je weet: 'Vrijheid en verbinding zijn mijn topwaarden.' Opties die die waarden dienen winnen." }
    ],
  },
  {
    id: "philosophical-journaling",
    title: "Filosofisch Dagboek",
    difficulty: 1,
    emoji: "📓",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Zingeving",
    definition: "Filosofisch dagboek schrijven is de praktijk van regelmatig schriftelijk reflecteren op je ervaringen, overtuigingen, waarden en vragen — in de traditie van Marcus Aurelius' Meditaties. Het externaliseren van gedachten maakt ze concreet, analyseerbaar en transformeerbaar.",
    abstractExample: "Gedachten in het hoofd zijn vluchtig en circulair. Op papier gezet worden ze concreet: je kunt ze observeren, bevragen en aanpassen. Het dagboek is een spiegel die terugkijkt met helderheid.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "Marcus Aurelius schreef zijn Meditaties als persoonlijk dagboek — niet voor publicatie. Drie stoeages per dag: dankbaarheid, een filosofisch principe om te oefenen, en reflectie op de dag." },
      { domain: "Werk", icon: "💼", text: "Na een moeilijke vergadering schrijven: 'Wat maakte me defensief? Welke waarde voelde ik bedreigd? Hoe wil ik de volgende keer reageren?' Dit verdiept zelfkennis sneller dan onbewerkte ervaring." },
      { domain: "Persoonlijk", icon: "💙", text: "De 'morning pages' methode (drie pagina's stroom van bewustzijn elke ochtend) helpt gedachten leeg te maken, patronen te ontdekken en innerlijke helderheid te vinden." }
    ],
  },
  {
    id: "examined-life",
    title: "Het Onderzochte Leven",
    difficulty: 3,
    emoji: "🦉",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Zingeving",
    definition: "Socrates stelde dat 'een leven dat niet onderzocht wordt, niet waard is om geleefd te worden.' Het onderzochte leven is de praktijk van actieve, kritische zelfreflectie op je overtuigingen, waarden, keuzes en leven — niet als eenmalig project maar als voortdurende houding.",
    abstractExample: "Veel mensen leven reactief — gevangen in routines, aannames en conventies die ze nooit hebben gekozen of bevraagd. Het onderzochte leven vraagt: 'Waarom doe ik dit? Is dit wat ik werkelijk wil? Klopt dit met wie ik wil zijn?'",
    examples: [
      { domain: "Werk", icon: "💼", text: "Iemand die na 15 jaar in dezelfde sector vraagt: 'Heb ik dit bewust gekozen, of ben ik hier gebleven door gemak en angst?' Dit is het onderzochte leven — niet automatisch maar bewust kiezen." },
      { domain: "Overtuigingen", icon: "🧠", text: "Je politieke of religieuze overtuigingen bevragen: 'Heb ik dit zelf doorgedacht, of heb ik het overgenomen? Zou ik hetzelfde geloven als ik in andere omstandigheden was opgegroeid?'" },
      { domain: "Relaties", icon: "❤️", text: "Vragen: 'Waarom hecht ik waarde aan deze vriendschap? Wat breng ik erin? Wat verwacht ik?' Dit maakt relaties bewuster en authentieker." }
    ],
  },
  {
    id: "legacy-thinking",
    title: "Nagedachtenisdenken",
    difficulty: 2,
    emoji: "🌳",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Zingeving",
    definition: "Nagedachtenisdenken is het bewust nadenken over welke bijdrage, invloed of waarden je wil achterlaten — hoe je herinnerd wilt worden en welk verschil je wil maken. Dit vergroot tijdshorizon, richt handelen en geeft persoonlijk en professioneel werk een diepere betekenis.",
    abstractExample: "Een boom plant zijn wortels niet voor zichzelf — hij biedt schaduw aan mensen die hij nooit zal kennen. Nagedachtenisdenken is bewust handelen vanuit een horioznt die verder reikt dan je eigen leven.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een manager die zich afvraagt: 'Over twintig jaar, wat zullen mensen zeggen over wat ik hier heb opgebouwd? Welke mensen heb ik ontwikkeld?' Dit geeft dagelijkse handelingen meer gewicht en richting." },
      { domain: "Ouderschap", icon: "👨‍👩‍👧", text: "Ouders die nadenken over welke waarden, gewoontes en levenslessen ze doorgeven — niet welke regels ze stellen — denken vanuit nagedachtenis." },
      { domain: "Gemeenschap", icon: "🏘️", text: "Vrijwilligerswerk, mentorschap, bijdragen aan iets groters dan jezelf — dit zijn uitingen van nagedachtenisdenken in de dagelijkse praktijk." }
    ],
  },
  {
    id: "eudaimonia",
    title: "Eudaimonia",
    difficulty: 3,
    emoji: "🌟",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Zingeving",
    definition: "Eudaimonia (Aristoteles) is het concept van menselijke bloei — een dieper, duurzamer geluk dan hedonistisch genot. Het gaat om een actief leven in overeenstemming met je beste vermogens en deugden. Eudaimonia is een activiteit, geen gevoel: je doet het, je ervaart het niet passief.",
    abstractExample: "Hedonistisch geluk is lekker eten, mooie muziek, plezier. Eudaimonia is de voldoening van je beste zelf worden — uitdagingen aangaan, bijdragen, groeien. Het eerste is meer aangenaam; het tweede is meer vervullend.",
    examples: [
      { domain: "Werk", icon: "💼", text: "De voldoening van een moeilijk project dat je hart klopte — niet omdat het makkelijk was, maar juist omdat het je uitdaagde en het iets nieuws van je vroeg. Dat is eudaimonia, niet hedonia." },
      { domain: "Sport", icon: "🏃", text: "De vreugde na een zware training is anders dan de vreugde van een lekker maaltijd. De eerste is eudaimonisch — resultaat van inzet; de tweede hedonistisch — directe zintuigelijkheid." },
      { domain: "Relaties", icon: "❤️", text: "Diep investeren in vriendschappen die je uitdagen en groeien, niet alleen die comfortabel zijn. Eudaimonia in relaties gaat over diepe verbinding en wederzijdse groei." }
    ],
  },
  {
    id: "present-moment-focus",
    title: "Focus op het Huidige Moment",
    difficulty: 2,
    emoji: "🕐",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Zingeving",
    definition: "Focus op het huidige moment is de praktijk van volledige aandacht geven aan wat nu is, in plaats van te piekeren over het verleden of te fantaseren over de toekomst. Onderzoek toont dat een 'wandering mind' — de geest die niet bij wat men doet is — gecorreleerd is met minder geluk.",
    abstractExample: "Tachtig procent van onze geestelijke activiteit is niet gericht op het huidige moment. Het verleden is voorbij; de toekomst is nog niet. Het enige moment waarop je werkelijk leeft, is nu — toch besteden de meeste mensen het meeste mentale energie elders.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "Een maaltijd eten zonder telefoon, volledig aanwezig bij de smaak, textuur en gezelschap — dit klinkt simpel maar is voor de meeste mensen zeldzaam en waardevol." },
      { domain: "Werk", icon: "💼", text: "Volledig aanwezig zijn in een vergadering — niet tegelijk e-mail checken of nadenken over de volgende taak — leidt tot betere bijdragen en minder vermoeidheid na afloop." },
      { domain: "Natuur", icon: "🌿", text: "Een wandeling waarbij je echt kijkt, hoort en voelt — in plaats van plannen te maken of problemen te malen — herstelt de aandacht en geeft energie op een manier die alleen-lopend niet doet." }
    ],
  },
  {
    id: "categorical-imperative",
    title: "Categorische Imperatief",
    difficulty: 3,
    emoji: "⚖️",
    academicCategory: "Filosofie & Ethiek",
    skillCategory: "Zingeving",
    definition: "De categorische imperatief (Immanuel Kant) is een moreel principe: 'Handel alleen op grond van die maxime waarvan je tegelijkertijd kunt willen dat ze een algemene wet wordt.' Anders gezegd: doe alleen wat je zou willen dat iedereen doet in dezelfde situatie.",
    abstractExample: "Voordat je liegt, vraag: 'Wat als iedereen loog wanneer het hen uitkwam?' De samenleving zou instorten — vertrouwen is onmogelijk zonder eerlijkheid. Dus: liegen is moreel verkeerd, ongeacht de gevolgen voor jou.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Je overweegt je prestaties op je cv op te blazen. Kategorische imperatief: 'Wat als iedereen dit deed?' CV's zouden zinloos worden. Conclusie: het mag niet, ongeacht hoe klein de leugen lijkt." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Afval dumpen in de natuur: 'Wat als iedereen dit deed?' Natuur raakt vernield. De maxime kan niet universeel worden gewild — dus het is verkeerd." },
      { domain: "Relaties", icon: "❤️", text: "Beloftes breken als het uitkomt: 'Wat als iedereen beloftes brak wanneer het handig was?' Belofte als instituut verliest alle betekenis. Kant: beloftes zijn heilig." }
    ],
  },
  {
    id: "utilitarianism",
    title: "Utilitarisme",
    difficulty: 2,
    emoji: "⚖️",
    academicCategory: "Filosofie & Ethiek",
    skillCategory: "Zingeving",
    definition: "Utilitarisme (Bentham, Mill) is de ethische theorie dat een handeling moreel juist is als ze het totale geluk (of welzijn) van alle betrokkenen maximaliseert. Het is een consequentialistische ethiek: de morele waarde van een handeling hangt uitsluitend af van haar gevolgen.",
    abstractExample: "Stel je vijf mensen op een treinspoor en één op een zijspoor. Je kunt de trein omzetten — één persoon sterft, vijf worden gered. Utilitarisme: zet om (meer geluk, minder leed). Kant: nooit actief iemand doden (ook al redt het vijf). Dit is het trolleyprobleem.",
    examples: [
      { domain: "Beleid", icon: "🏛️", text: "Vaccinatiebeleid is utilitaristisch: beperkte individuele keuzevrijheid voor maximale collectieve gezondheidswinst. De meeste gezondheidsmaatregelen denken in termen van totale welzijnsmaximalisatie." },
      { domain: "Werk", icon: "💼", text: "Een moeilijk besluit om één medewerker te ontslaan om tien banen te redden — utilitaristisch redeneren. Maar het negeert de impact op die ene persoon specifiek." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Het verdelen van schaarse middelen (wie krijgt het laatste orgaan? wie gaat er voor in de rij?) is bijna altijd impliciet utilitaristisch van aard." }
    ],
  },
  {
    id: "moral-realism",
    title: "Moreel Realisme vs. Relativisme",
    difficulty: 3,
    emoji: "🌐",
    academicCategory: "Filosofie & Ethiek",
    skillCategory: "Zingeving",
    definition: "Moreel realisme is de opvatting dat morele feiten objectief bestaan, onafhankelijk van wat mensen denken of voelen. Moreel relativisme stelt dat morele oordelen enkel gelden binnen een cultuur of persoon. Het debat hierover raakt aan fundamentele vragen over de basis van ethiek.",
    abstractExample: "Is slavernij altijd moreel fout, of was het 'goed' in culturen die het normaal vonden? Realisten zeggen: fout, altijd en overal. Relativisten zeggen: morele oordelen gelden alleen binnen een cultureel kader. Beide standpunten hebben radicale implicaties.",
    examples: [
      { domain: "Politiek", icon: "🏛️", text: "Mensenrechten zijn gebaseerd op moreel realisme: ze gelden universeel, ongeacht culturele context. Relativisme zou impliceren dat mensenrechtenschendingen 'goed' kunnen zijn in culturen die ze accepteren." },
      { domain: "Persoonlijk", icon: "💙", text: "Zeggen 'Wie ben ik om te oordelen over een andere cultuur?' is een relativistische houding. Zeggen 'Marteling van kinderen is altijd verkeerd' is een realistische uitspraak." },
      { domain: "Filosofie", icon: "🦉", text: "Kan de wetenschap morele feiten ontdekken? Sam Harris denkt van wel. Veel filosofen zijn sceptisch. Dit is het hart van het realisme-relativisme debat." }
    ],
  },
  {
    id: "trolley-problem",
    title: "Het Trolleyprobleem",
    difficulty: 2,
    emoji: "🚋",
    academicCategory: "Filosofie & Ethiek",
    skillCategory: "Zingeving",
    definition: "Het trolleyprobleem (Philippa Foot, Judith Jarvis Thomson) is een gedankenexperiment dat morele intuïties blootlegt: mag je actief één persoon doden om vijf te redden? De meeste mensen zeggen 'ja' bij een hendel, 'nee' bij het duwen van een persoon — terwijl het rekenkundig identiek is.",
    abstractExample: "Vijf mensen zijn vastgebonden aan een spoor. Een trein komt eraan. Je kunt: (A) een hendel overhalen die de trein omlegt — één persoon sterft; (B) niets doen — vijf sterven. De meeste mensen kiezen A. Maar: mag je een dikke man van een brug duwen om met zijn lichaam de trein te stoppen en vijf te redden? De meeste mensen zeggen nee — terwijl de berekening identiek is.",
    examples: [
      { domain: "Geneeskunde", icon: "🏥", text: "Orgaantoewijzing: één patiënt weigeren om vijf anderen te redden is moreel geaccepteerd. Een patiënt aktief doden voor zijn organen is dat niet — hoewel de uitkomst hetzelfde kan zijn." },
      { domain: "Oorlog", icon: "⚔️", text: "Collateral damage (burgerslachtoffers om militaire doelen te bereiken) is een reëel trolleydilemma dat legerethici dagelijks confronteert." },
      { domain: "Tech", icon: "💻", text: "Zelfrijdende auto's moeten geprogrammeerd worden om te 'kiezen' bij onvermijdelijke botsingen. Hoe? Dit is het trolleyprobleem als softwareontwerp." }
    ],
  },
  {
    id: "virtue-ethics",
    title: "Deugdethiek",
    difficulty: 2,
    emoji: "🦁",
    academicCategory: "Filosofie & Ethiek",
    skillCategory: "Zingeving",
    definition: "Deugdethiek (Aristoteles) vraagt niet 'Wat moet ik doen?' maar 'Wat voor persoon moet ik zijn?' Het gaat om het cultiveren van karaktereigenschappen (deugden) zoals moed, eerlijkheid, rechtvaardigheid en gematigdheid — niet om regels of gevolgen.",
    abstractExample: "Een deugenethicus vraagt niet 'Is liegen toegestaan?' maar 'Zou een eerlijk persoon in mijn situatie liegen?' Karakter is het kompas, niet regels of berekeningen. Je wordt wat je herhaaldelijk doet.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Integriteit op de werkvloer is deugdethiek in actie: niet 'Wat mag ik er mee wegkomen?' maar 'Hoe zou iemand met integriteit hier handelen?' Het gaat om wie je bent, niet wat je kunt." },
      { domain: "Relaties", icon: "❤️", text: "Een goede vriend zijn als deugdethische praktijk: niet wat vriendschap verplicht, maar welke eigenschappen een goede vriend heeft, en die actief cultiveren." },
      { domain: "Opvoeding", icon: "👨‍👩‍👧", text: "Kinderen opvoeden met deugdethiek: niet regels geven maar karaktereigenschappen voorleven — moed, eerlijkheid, vriendelijkheid — zodat het kind een moreel kompas ontwikkelt." }
    ],
  },
  {
    id: "social-contract",
    title: "Sociaal Contract",
    difficulty: 2,
    emoji: "📜",
    academicCategory: "Filosofie & Ethiek",
    skillCategory: "Zingeving",
    definition: "Het sociaal contract (Hobbes, Locke, Rousseau) is de filosofische theorie dat politieke autoriteit gebaseerd is op een (impliciete) overeenkomst tussen individuen: zij geven bepaalde vrijheden op in ruil voor bescherming, orde en gezamenlijk voordeel. Het legt de basis voor modern democratisch denken.",
    abstractExample: "Stel je een wereld voor zonder regels — iedereen voor zichzelf. Hobbes noemde dit 'een oorlog van allen tegen allen'. Mensen sluiten dan vrijwillig een contract: we creëren samen regels en een overheid, en geven daarvoor deel van onze ongebreidelde vrijheid op.",
    examples: [
      { domain: "Politiek", icon: "🏛️", text: "Belasting betalen is een vorm van het sociaal contract: je staat deel van je inkomen af in ruil voor wegen, onderwijs, veiligheid — collectieve goederen die niemand alleen kan organiseren." },
      { domain: "Werk", icon: "💼", text: "Een arbeidscontract is een micro-sociaal contract: jij geeft tijd en inspanning; de werkgever geeft salaris en zekerheid. Beide geven iets op voor wederzijds voordeel." },
      { domain: "Gemeenschap", icon: "🏘️", text: "Buurtregels, HOA-overeenkomsten, Wikipedia-richtlijnen — allemaal micro-versies van het sociaal contract: individuen stemmen in met regels voor collectief voordeel." }
    ],
  },
  {
    id: "existentialism",
    title: "Existentialisme",
    difficulty: 3,
    emoji: "🌑",
    academicCategory: "Filosofie & Ethiek",
    skillCategory: "Zingeving",
    definition: "Existentialisme (Sartre, Camus, de Beauvoir) is de filosofische stroming die stelt dat mensen geen vooraf bepaald wezen of doel hebben ('existentie gaat aan essence vooraf'). We zijn volledig vrij en volledig verantwoordelijk voor wie we worden — en dat vrijheid is zowel bevrijdend als angstaanjagend.",
    abstractExample: "Een stoel heeft een doel dat de maker bepaalde. Mensen hebben geen vooraf bepaald doel — we zijn als een blanco canvas. Dit is radicale vrijheid: jij bepaalt de betekenis van je leven. En die vrijheid brengt ook radicale verantwoordelijkheid.",
    examples: [
      { domain: "Persoonlijk", icon: "💙", text: "Sartre's concept 'bad faith' (mauvaise foi): jezelf voordoen alsof je geen keuze hebt ('Ik ben nou eenmaal zo', 'Ik had geen andere keus') is zelfbedrog. Altijd is er een keuze, ook als die pijnlijk is." },
      { domain: "Werk", icon: "💼", text: "Zeggen 'Mijn werk is mijn identiteit' is existentialistische bad faith: je reduceert jezelf tot een rol. Sartre: je bent altijd meer dan de functies die je vervult." },
      { domain: "Maatschappij", icon: "🏛️", text: "Camus' absurdisme: het leven heeft geen inherente betekenis, maar de rebel — die betekenis creëert ondanks de absurditeit — is vrijer dan wie zich neerlegt bij passiviteit of valse zekerheden." }
    ],
  },
  {
    id: "epistemic-humility",
    title: "Epistemische Bescheidenheid",
    difficulty: 2,
    emoji: "🙇",
    academicCategory: "Filosofie & Ethiek",
    skillCategory: "Zingeving",
    definition: "Epistemische bescheidenheid is de intellectuele houding van erkennen dat je kennis en overtuigingen onvolledig, feilbaar en beïnvloed zijn door je perspectief en ervaring. Het is de bereidheid te twijfelen, te updaten en andermans perspectieven serieus te nemen — zonder relativisme.",
    abstractExample: "Het verschil tussen 'Ik weet het' en 'Ik denk het met hoge zekerheid' is epistemische bescheidenheid. De eerste sluit verdere informatie uit; de tweede houdt ruimte voor correctie. Een groot wetenschapper vraagt altijd: 'Hoe kan ik dit falsifiëren?'",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een manager die zegt 'Ik kan het mis hebben — vertel me waarom ik fout zit' geeft epistemische bescheidenheid blijk en creëert een cultuur van eerlijkheid en leren." },
      { domain: "Politiek", icon: "🏛️", text: "Politici die toegeven 'We hadden het mis' over beleid (ipv spin) tonen epistemische bescheidenheid — zeldzaam maar effectief voor langetermijnvertrouwen." },
      { domain: "Persoonlijk", icon: "💙", text: "Je overtuigingen bijstellen op basis van nieuwe informatie — in plaats van nieuwe info te filteren om bestaande overtuigingen te bevestigen — is epistemische bescheidenheid in de praktijk." }
    ],
  },
  {
    id: "golden-rule",
    title: "De Gulden Regel",
    difficulty: 1,
    emoji: "🌿",
    academicCategory: "Filosofie & Ethiek",
    skillCategory: "Zingeving",
    definition: "De Gulden Regel ('Behandel anderen zoals je zelf behandeld wil worden') is het meest universele ethische principe — aanwezig in vrijwel alle grote religies en filosofieën. Het is de basisvorm van perspectiefname als morele handlingsrichtlijn.",
    abstractExample: "Confucius, Jezus, Hillel, Mohammed — allemaal formuleerden ze versies van hetzelfde principe. Dit universalisme suggereert dat de Gulden Regel een diepgeworteld menselijk moreel inzicht uitdrukt dat cultuuroverstijgend is.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een manager die overweegt een medewerker onverwacht zijn contract te beëindigen, vraagt zichzelf: 'Hoe zou ik het willen dat dit werd gedaan als het mij overkwam?' Dat beïnvloedt het proces." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Bij elke kritische reactie op social media: 'Zou ik willen dat iemand dit over mij schrijft?' Zo simpel — en zo zelden toegepast." },
      { domain: "Zaken", icon: "💰", text: "Een leverancier die aan klanten levert zoals hij zelf als klant behandeld wil worden — eerlijk, transparant, tijdig — bouwt duurzamere relaties dan een kortetermijnoptimizer." }
    ],
  },
  {
    id: "sleep-science",
    title: "Slaapwetenschap",
    difficulty: 2,
    emoji: "😴",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Gezondheid",
    definition: "Slaapwetenschap bestudeert hoe slaap het brein en lichaam herstelt, consolideert en reguleert. Slaaptekort heeft ernstige gevolgen voor cognitie, emotieregulatie, immuunfunctie en gezondheid op lange termijn. Kwaliteitsvolle slaap is geen luxe maar een biologische noodzaak.",
    abstractExample: "Slaap is het meest onderschatte herstelprotocol dat bestaat — het is wanneer het brein de dag verwerkt, het geheugen consolideert, gifstoffen uitruimt en het lichaam herstelt. Elke nacht slechte slaap is als gedeeltelijk leeglaten van de batterij terwijl je steeds meer van haar vraagt.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Na 17 uur wakker zijn presteren mensen cognitief vergelijkbaar met iemand met een promillage van 0,5 (licht dronken). Toch beschouwen de meeste professionals slaaptekort als prestige." },
      { domain: "Studie", icon: "📚", text: "Geleerde informatie wordt tijdens slaap geconsolideerd van korte- naar langetermijngeheugen. Slaapt een student na het studeren, dan is de retentie tot 40% hoger dan bij doorleren." },
      { domain: "Gezondheid", icon: "❤️‍🩹", text: "Chronisch slaaptekort (onder 7 uur) verhoogt het risico op hart- en vaatziekten, diabetes, depressie en zelfs Alzheimer. Slaap is letterlijk een preventieve gezondheidsmaatregel." }
    ],
  },
  {
    id: "circadian-rhythm",
    title: "Circadiaans Ritme",
    difficulty: 2,
    emoji: "🌅",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Gezondheid",
    definition: "Het circadiaanse ritme is het interne ~24-uurs biologisch klokken van het lichaam dat slaap, waakzaamheid, hormoonafgifte, lichaamstemperatuur en metabolisme reguleert. Het wordt primair gesynchroniseerd door licht en bepaalt wanneer je het meest alert, energiek of moe bent.",
    abstractExample: "Je lichaam heeft een intern horloge dat onafhankelijk van externe prikkels tikt — in een donkere kamer zonder klok zou je nog steeds een dag-nacht-ritme hebben. Maar dit horloge is instelbaar via licht, timing van maaltijden en activiteit.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Ochtendmensen (chronotype 'leeuw') presteren cognitief het best tussen 9-12. Avondmensen ('wolf') pas na de middag. Taken afstemmen op je chronotype verhoogt productiviteit zonder extra inspanning." },
      { domain: "Gezondheid", icon: "❤️‍🩹", text: "Blauw licht van schermen 's avonds onderdrukt melatonine en verschuift je circadiaanse ritme. Dit maakt inslapen moeilijker en vermindert slaapkwaliteit — zelfs als je voldoende uren slaapt." },
      { domain: "Reizen", icon: "✈️", text: "Jetlag is een desynchronisatie van het circadiaanse ritme en de externe tijdzone. Strategisch gebruik van licht, maaltijden en beweging helpt het ritme sneller te resetten." }
    ],
  },
  {
    id: "exercise-brain",
    title: "Bewegen voor de Hersenen",
    difficulty: 1,
    emoji: "🏃",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Gezondheid",
    definition: "Lichaamsbeweging heeft directe, bewezen effecten op hersenstructuur en -functie: het vergroot de hippocampus (geheugen), verhoogt BDNF (breingroeifactor), vermindert stress en angst, verbetert focus en beschermt tegen cognitieve achteruitgang. Bewegen is de sterkste nootropica die bestaat.",
    abstractExample: "We beschouwen sporten als iets voor het lichaam. In werkelijkheid is het ook de meest krachtige behandeling voor het brein — effectiever dan veel cognitieve supplementen, vergelijkbaar met antidepressiva bij milde tot matige depressie.",
    examples: [
      { domain: "Studie", icon: "📚", text: "Onderzoek toont dat 20 minuten aëroob bewegen vóór een leestaak het begrip en de retentie significant verbetert — meer dan hetzelfde tijd extra studeren." },
      { domain: "Werk", icon: "💼", text: "Een middagsessie van 15-20 minuten wandelen combatteert de post-lunch dip effectiever dan koffie, en zonder het later slaapverstorende effect." },
      { domain: "Gezondheid", icon: "❤️‍🩹", text: "Regelmatig bewegen (3-5 uur per week moderate intensiteit) is de meest effectieve preventieve maatregel tegen Alzheimer — effectiever dan elke huidige medicamenteuze behandeling." }
    ],
  },
  {
    id: "stress-response",
    title: "Stressrespons",
    difficulty: 2,
    emoji: "⚡",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Gezondheid",
    definition: "De stressrespons is de fysiologische reactie van het lichaam op (vermeende) bedreiging: adrenaline en cortisol verhogen, hartslag en ademhaling versnellen, spieren spannen. Dit is functioneel bij acute bedreiging maar schadelijk bij chronische activering. Begrip van de stressrespons helpt hem bewust te reguleren.",
    abstractExample: "De stressrespons is ontworpen voor een leeuw die je achtervolgt — een burst van energie en alertheid voor gevecht of vlucht. Maar in de moderne wereld is de 'leeuw' een inbox, een vergadering of financiële zorgen — chronisch, niet acuut. Het systeem raakt overbelast.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Presentatieangst is de stressrespons op een sociale dreiging. Het lichaam reageert alsof er een leeuw is. Begrip hiervan — 'dit is adrenaline, geen gevaar' — helpt de respons te reguleren." },
      { domain: "Gezondheid", icon: "❤️‍🩹", text: "Chronische stress (verhoogd cortisol over weken of maanden) beschadigt letterlijk de hippocampus, verzwakt het immuunsysteem, verhoogt bloeddruk en verstoort slaap en spijsvertering." },
      { domain: "Sport", icon: "🏃", text: "Topsporters leren het onderscheid tussen 'good stress' (eustress: optimale activering voor prestatie) en 'bad stress' (distress: te hoog voor optimale functie). Regulatie is een trainbare vaardigheid." }
    ],
  },
  {
    id: "nutrition-basics",
    title: "Voedingswetenschap Basis",
    difficulty: 1,
    emoji: "🥦",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Gezondheid",
    definition: "Basisprincipes van voedingswetenschap: het lichaam heeft macronutriënten (koolhydraten, eiwitten, vetten) en micronutriënten (vitaminen, mineralen) nodig in de juiste balans. Voeding beïnvloedt energie, cognitie, stemming en gezondheid op lange termijn — maar het bewijs is genuanceerder dan populaire dieetclaims.",
    abstractExample: "Voeding is brandstof én bouwmateriaal. De kwaliteit van de brandstof bepaalt hoe de motor draait. Maar het is complexer dan een auto: het lichaam past zich aan, heeft micronutriënten nodig naast energie, en varieert sterk per persoon.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "De glycemische index van voedsel bepaalt hoe snel bloedsuiker stijgt. Hoog-glycemische voeding (wit brood, suiker) geeft snelle energie-pieken gevolgd door dalen — niet ideaal voor stabiele concentratie." },
      { domain: "Werk", icon: "💼", text: "Eiwitrijke lunch (peulvruchten, vis, eieren) geeft stabieler energie dan koolhydraatrijke lunch — door langzamere vertering en stabielere bloedsuiker. Meetbaar effect op middagproductiviteit." },
      { domain: "Sport", icon: "🏃", text: "Timing van koolhydraten (voor training) en eiwitten (na training) optimaliseert prestatie en herstel — gebaseerd op hoe spieren glucose en aminozuren gebruiken." }
    ],
  },
  {
    id: "pain-discomfort-distinction",
    title: "Pijn vs. Ongemak",
    difficulty: 2,
    emoji: "💪",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Gezondheid",
    definition: "Het onderscheid tussen pijn (signaal van weefselschade of gevaar — stop) en ongemak (onaangename maar veilige sensatie die groei of aanpassing signaleert — doorgaan) is cruciaal voor zowel sport als persoonlijke ontwikkeling. Verwarring tussen beide leidt tot blessures of vermijding van groei.",
    abstractExample: "Spierpijn na training is ongemak — groeisignaal. Scherpe pijn in een gewricht is pijn — stopsignaal. In het leven: de ongemakelijkheid van een moeilijk gesprek is ongemak (groeizaam). Angst die wijst op werkelijk gevaar is pijn (pas op). Het leren onderscheiden is een vaardigheid.",
    examples: [
      { domain: "Sport", icon: "🏃", text: "Brandend gevoel in de spieren tijdens intensieve training is ongemak — de spieren zijn bezig te groeien. Kniepijn tijdens hardlopen is pijn — stop en onderzoek. Dit onderscheid voorkomt zowel blessures als vermijding van groei." },
      { domain: "Persoonlijk", icon: "💙", text: "De discomfort van een moeilijk gesprek is productief ongemak — vermijden kost meer. Angst die je vertelt dat iemand je bedreigt is een wezenlijk signaal — luister ernaar." },
      { domain: "Studie", icon: "📚", text: "Het hoofd vol en gefrustreerd voelen bij een moeilijke taak is leerongemak — de hersenen zijn bezig patronen te bouwen. Dit is anders dan de angst die wijst op een reëel probleem." }
    ],
  },
  {
    id: "gut-brain-axis",
    title: "Darm-Brein As",
    difficulty: 3,
    emoji: "🦠",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Gezondheid",
    definition: "De darm-brein as is de bidirectionele communicatie tussen het darmstelsel en de hersenen — via de nervus vagus, hormonen en immuunsysteem. Het darmmicrobioom beïnvloedt stemming, cognitie, stress en immuunfunctie. Een gezond microbioom is onderdeel van mentale gezondheid.",
    abstractExample: "90% van het serotonine in het lichaam wordt geproduceerd in de darmen, niet de hersenen. De darmen bevatten meer zenuwcellen dan het ruggenmerg. De darmen zijn een 'tweede brein' — en ze communiceren constant met het eerste.",
    examples: [
      { domain: "Gezondheid", icon: "❤️‍🩹", text: "Onderzoek toont dat patiënten met prikkelbare darm (IBS) hogere angst- en depressiescores hebben — en omgekeerd: psychische stress verergert darmproblemen. De verbinding is bidirectioneel." },
      { domain: "Voeding", icon: "🥦", text: "Vezelrijk dieet (groente, fruit, peulvruchten) voedt gunstige darmbacteriën die korteketenvetzuren produceren — stoffen met directe positieve effecten op breinontwikkeling en stemming." },
      { domain: "Stress", icon: "⚡", text: "Chronische stress verandert de darmsamenstelling (dysbiose) wat ontstekingen bevordert die op hun beurt de stemming negatief beïnvloeden — een negatieve spiraal die van twee kanten kan worden aangepakt." }
    ],
  },
  {
    id: "hormesis",
    title: "Hormesis",
    difficulty: 3,
    emoji: "🔆",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Gezondheid",
    definition: "Hormesis is het biologisch principe dat lage doses van stressoren (die in hoge doses schadelijk zijn) adaptieve, versterkende effecten hebben. Kortom: kleine dosissen van wat je uitdaagt, maakt je sterker. Dit geldt voor lichamelijke training, thermische stress en zelfs bepaalde toxines.",
    abstractExample: "Spiertraining is hormesis: je beschadigt microscopisch spiervezels (stressor) en ze herstellen sterker dan daarvoor. Zonnebrand is het schadelijke extreme; matige blootstelling stimuleert vitamine D en melanineproductie. De dosis maakt het geneesmiddel of het gif.",
    examples: [
      { domain: "Sport", icon: "🏃", text: "Intervaltraining is geconcentreerde hormesis: korte perioden van hoge inspanning zorgen voor aanpassing van hart, longen en spieren die continue matige training niet bereikt." },
      { domain: "Koudetherapie", icon: "🧊", text: "Koud douchen of koude onderdompeling (10-15 minuten op 15°C) is een hormese-stressor die aantoonbaar noradrenaline, dopamine en metabolisme verhoogt — adaptieve respons op milde kou-stress." },
      { domain: "Vasten", icon: "🥗", text: "Intermittent fasting is hormetisch: perioden van calorierestrictie activeren celreparatiemechanismen (autofagie) die bij constante voedseltoevoer niet actief worden." }
    ],
  },
  {
    id: "placebo-effect",
    title: "Placebo-effect",
    difficulty: 2,
    emoji: "💊",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Gezondheid",
    definition: "Het placebo-effect is de bewezen verbetering in gezondheid of welzijn die optreedt door de verwachting van een behandeling, niet door de behandeling zelf. Het is niet 'verbeelding' maar een werkelijk fysiologisch mechanisme waarbij verwachting neurochemische processen activeert.",
    abstractExample: "Een suikerpil werkt als een dokter hem vol overtuiging voorschrijft — en zelfs in sommige studies als de patiënt weet dat het een placebo is. Verwachting is een biologisch actieve kracht, geen fantasie.",
    examples: [
      { domain: "Geneeskunde", icon: "🏥", text: "Placebo-pijnstillers activeren in het brein dezelfde gebieden als echte pijnstillers — en produceren endorfines. Dit is meetbaar neurochemie, geen inbeelding." },
      { domain: "Sport", icon: "🏃", text: "Atleten die dachten een prestatieverbeterend supplement te nemen presteerden beter — ook als het alleen suiker was. Verwachting optimaliseert prestatie via reële fysiologische routes." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Koffie 'werkt' voor sommige mensen al bij de geur, voordat ze het drinken. De verwachting van alertheid activeert aandachtssystemen proactief." }
    ],
  },
  {
    id: "compound-interest-life",
    title: "Samengestelde Groei",
    difficulty: 2,
    emoji: "📈",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Financieel Bewustzijn",
    definition: "Samengestelde groei is het fenomeen waarbij groei zichzelf herberekent over de gecumuleerde basis — niet alleen de oorspronkelijke inzet. Dit geldt voor geld (rente op rente), maar ook voor vaardigheden, kennis en relaties: kleine dagelijkse verbeteringen cumuleren exponentieel over tijd.",
    abstractExample: "Een investering van €1000 met 7% jaarlijks rendement groeit in 30 jaar tot ~€7600 — meer dan zevenmaal het startbedrag, zonder extra inleg. De tijd doet het werk. Omgekeerd: een dagelijkse verbetering van 1% levert na een jaar een 37-voudige verbetering op.",
    examples: [
      { domain: "Financieel", icon: "💰", text: "Iemand die op 25 begint met €200/maand te investeren met 7% rendement heeft op 65 ~€525.000. Iemand die op 35 begint met €400/maand heeft slechts ~€490.000. Tien jaar eerder beginnen is sterker dan het dubbele inleggen." },
      { domain: "Studie", icon: "📚", text: "Elke dag 30 minuten lezen geeft 18 boeken per jaar. Na tien jaar: 180 boeken. Na twintig jaar: 360 boeken — en de inzichten bouwen op elkaar voort." },
      { domain: "Werk", icon: "💼", text: "Elke dag 1% beter worden in een vaardigheid levert na een jaar bijna een 38-voudige verbetering op (1,01^365 = 37,8). Dit is samengestelde groei in competentie." }
    ],
  },
  {
    id: "time-value-money",
    title: "Tijdswaarde van Geld",
    difficulty: 2,
    emoji: "⏳",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Financieel Bewustzijn",
    definition: "De tijdswaarde van geld is het principe dat geld nu meer waard is dan hetzelfde bedrag in de toekomst, omdat huidig geld geïnvesteerd kan worden voor groei, terwijl inflatie toekomstig geld in koopkracht uitholt. Dit is de basis van vrijwel alle financiële beslissingen.",
    abstractExample: "€1000 nu is meer waard dan €1000 over tien jaar. Bij 3% inflatie is €1000 over tien jaar nog slechts ~€744 waard in huidige koopkracht. Tegelijkertijd: €1000 nu geïnvesteerd is over tien jaar bij 7% rendement ~€1967. Het verschil: €1223.",
    examples: [
      { domain: "Financieel", icon: "💰", text: "Pensioensystemen zijn gebaseerd op tijdswaarde: bijdragen nu worden geïnvesteerd en groeien over decennia tot bedragen die de inleg veelvoudig overtreffen." },
      { domain: "Werk", icon: "💼", text: "Een loonsverhoging nu is meer waard dan dezelfde verhoging in twee jaar — niet alleen door inflatie maar ook door het extra groeipotentieel van het hogere salaris over de tussenliggende periode." },
      { domain: "Keuzes", icon: "🔄", text: "Uitgesteld betalingen: is het beter om nu €1000 te betalen of €1100 over een jaar? Hangt af van wat je met die €1000 in tussentijd kunt doen — dit is tijdswaarde." }
    ],
  },
  {
    id: "opportunity-cost",
    title: "Opportuniteitskosten",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Financieel Bewustzijn",
    definition: "Opportuniteitskosten zijn de waarde van het beste alternatief dat je opgeeft als je een keuze maakt. Elke beslissing heeft verborgen kosten — niet alleen wat je betaalt maar wat je had kunnen krijgen met dezelfde middelen in de beste alternatieve besteding.",
    abstractExample: "Een huis kopen voor €300.000 kost niet alleen €300.000 — het kost ook de potentiële rendement van €300.000 geïnvesteerd over 30 jaar (~€2,4 miljoen bij 7%). Dit is de ware kostenrekening. Elke keuze mist iets anders.",
    examples: [
      { domain: "Financieel", icon: "💰", text: "Een leaseauto van €600/maand kost na 5 jaar €36.000 + gemiste investering. Diezelfde €600/maand geïnvesteerd geeft na 5 jaar ~€43.000 — de opportuniteitskosten van de lease zijn reëel en groot." },
      { domain: "Tijd", icon: "⏰", text: "Een uur tv kijken kost een uur studie, sport, een project of een gesprek. Tijd heeft de hoogste opportuniteitskosten omdat het de enige niet-herwinbare hulpbron is." },
      { domain: "Werk", icon: "💼", text: "Een werknemer die uren besteedt aan taken die hij kan delegeren aan €20/uur, betaalt opportuniteitskosten van zijn eigen uurloon minus €20 — als hij €80/uur waard is, verliest hij per gedelegeerde uur €60." }
    ],
  },
  {
    id: "mental-accounting",
    title: "Mentale Boekhouding",
    difficulty: 2,
    emoji: "🧮",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Financieel Bewustzijn",
    definition: "Mentale boekhouding (Richard Thaler) is de neiging van mensen om geld in mentale 'potjes' te verdelen en anders te behandelen afhankelijk van de herkomst of bestemming, ook al is geld in werkelijkheid fungibel (uitwisselbaar). Dit leidt tot systematisch irrationele financiële beslissingen.",
    abstractExample: "Je vindt €100 op straat (meevaller) en geeft het makkelijker uit dan €100 uit je salaris. Maar het is hetzelfde geld. Of: je zet apart geld op een spaarrekening terwijl je een creditcard-schuld hebt tegen 20% rente — irrationeel maar psychologisch begrijpelijk.",
    examples: [
      { domain: "Financieel", icon: "💰", text: "Vakantiegeld voelt anders dan regulier salaris — mensen geven het vrijgeviger uit. Maar €1000 vakantiegeld en €1000 salaris zijn identiek en zouden identieke beslissingen moeten leiden." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Een cadeaubon van €50 uitgeven aan luxe die je nooit zou kopen voor 'echt geld' — terwijl €50 cadeaubon en €50 cash identiek zijn. Mentale boekhouding in actie." },
      { domain: "Investeren", icon: "📈", text: "Dividenden (inkomsten) herfinvesteren voelt anders dan aandelenkoers-winst verkopen. Maar beide zijn vermogensopbouw — de mentale scheiding is economisch irrelevant maar psychologisch krachtig." }
    ],
  },
  {
    id: "loss-aversion-finance",
    title: "Verliesaversie in Financiën",
    difficulty: 2,
    emoji: "📉",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Financieel Bewustzijn",
    definition: "Verliesaversie in financiële context is de disproportionele pijn van financiële verliezen vergeleken met de vreugde van gelijke winsten (Kahneman & Tversky: verlies voelt ~2x zo erg als equivalente winst). Dit leidt tot suboptimale beleggingsbeslissingen als irrationeel risicovermijding.",
    abstractExample: "€1000 verliezen voelt psychologisch even erg als €2000 winnen. Dit leidt ertoe dat beleggers te snel verliezende posities vasthouden ('het herstelt nog'), te vroeg winnende posities verkopen, en risicovolle maar waardevolle investeringen vermijden.",
    examples: [
      { domain: "Investeren", icon: "📈", text: "Een belegger die een aandeel koopt voor €100 dat daalt naar €70 verkoopt het niet — want dan is het verlies 'echt'. Hij houdt vast en hoopt op herstel, ook als rationele analyse zegt verkopen. Dit is verliesaversie." },
      { domain: "Werk", icon: "💼", text: "Een mislukt project doorzetten 'omdat we al zoveel geïnvesteerd hebben' (sunk cost fallacy gekoppeld aan verliesaversie) — de investering is verloren ongeacht wat je doet." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Iemand weigert een redelijk goed huis te verkopen met €20.000 verlies ten opzichte van aankoopprijs, ook als dat de rationeel beste beslissing is. De pijn van het 'officiële verlies' blokkeert." }
    ],
  },
  {
    id: "long-term-thinking",
    title: "Langetermijndenken",
    difficulty: 2,
    emoji: "🔭",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Financieel Bewustzijn",
    definition: "Langetermijndenken is het vermogen om beslissingen te nemen met een horioznt van jaren of decennia in plaats van weken of maanden — en daarvoor directe beloningen op te geven. Het is een trainbare cognitieve vaardigheid die systematisch gecorreleerd is met betere gezondheids-, financiële en relationele uitkomsten.",
    abstractExample: "Het marshmallow-experiment (Stanford) toonde dat kinderen die een beloning konden uitstellen later betere uitkomsten hadden op vrijwel alle levensgebieden. Vertraagde bevrediging is een voorspeller van succes — en het is trainbaar.",
    examples: [
      { domain: "Financieel", icon: "💰", text: "In 2009 aandelen kopen tijdens de crisis vereiste langetermijndenken — op korte termijn leken ze risicovolle verliezen, op lange termijn waren het de beste aankopen in een generatie." },
      { domain: "Werk", icon: "💼", text: "Jaren investeren in een vaardigheid (programmeren, schrijven, spreken) die nu weinig oplevert maar over tien jaar enorm waardevol is — dit is langetermijndenken over carrière." },
      { domain: "Relaties", icon: "❤️", text: "Een moeilijk gesprek voeren dat op korte termijn ongemak geeft maar de relatie op lange termijn versterkt — dit is langetermijndenken in relaties." }
    ],
  },
  {
    id: "financial-independence",
    title: "Financiële Onafhankelijkheid",
    difficulty: 3,
    emoji: "🏝️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Financieel Bewustzijn",
    definition: "Financiële onafhankelijkheid is de toestand waarbij passief inkomen (rente, dividenden, huur) de levensstijlkosten dekt — waardoor werk een keuze wordt, niet een noodzaak. Het FIRE-concept (Financial Independence, Retire Early) heeft dit gepopulariseerd als haalbaar doel.",
    abstractExample: "Financiële onafhankelijkheid is niet rijkdom hebben — het is genoeg hebben. De 4%-regel: als je vermogen 25x je jaaruitgaven bedraagt, kun je 4% per jaar opnemen zonder het ooit te lege trekken (historisch bewezen bij gespreide beleggingsportefeuille).",
    examples: [
      { domain: "Financieel", icon: "💰", text: "Bij €30.000 jaaruitgaven is het doel €750.000 belegd vermogen (25x). Bij 7% rendement, 4% opname, groeit het resterende 3% mee met inflatie — eeuwigdurend inkomen theoretisch." },
      { domain: "Werk", icon: "💼", text: "Iemand met financiële onafhankelijkheid kiest werk op basis van zingeving en bijdrage — niet op basis van salaris. Dit verandert fundamenteel de arbeidsmarktpositie en levenskwaliteit." },
      { domain: "Leven", icon: "🌅", text: "FIRE betekent niet noodzakelijk 'stoppen met werken' — het betekent dat je dat kunt kiezen. Mensen die het bereiken, werken vaak door — maar anders en met meer voldoening." }
    ],
  },
  {
    id: "frugality-vs-cheapness",
    title: "Zuinigheid vs. Gierigheid",
    difficulty: 1,
    emoji: "💡",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Financieel Bewustzijn",
    definition: "Zuinigheid is het bewust maximaliseren van waarde voor elke uitgegeven euro — niet minder uitgeven maar slimmer. Gierigheid is uitgaven vermijden ten koste van kwaliteit van leven, relaties of langetermijnbelangen. Het onderscheid zit in het doel: waarde versus onthouding.",
    abstractExample: "Een zuinig persoon koopt een kwaliteitsjas van €200 die 10 jaar meegaat (€20/jaar). Een gierig persoon koopt elk jaar een goedkopere jas van €40 (€400 over 10 jaar). Zuinigheid is soms meer uitgeven voor minder totaalkosten — het gaat om waarde per euro, niet om euro's besparen.",
    examples: [
      { domain: "Financieel", icon: "💰", text: "Abonnementen die je niet gebruikt annuleren (zuinig). Maar nooit naar een restaurant gaan met vrienden 'om geld te sparen' terwijl je prima kunt betalen (gierig) — sociale schade overstijgt de besparing." },
      { domain: "Gezondheid", icon: "❤️‍🩹", text: "Besparen op goede schoenen tot je knieproblemen krijgt, is niet zuinigheid — het is gierigheid. Investeren in kwalitatief schoeisel is zuinigheid: minder toekomstige medische kosten." },
      { domain: "Werk", icon: "💼", text: "Een ondernemer die goedkope software koopt die hem 5 uur per week extra kost, is gierig. Betalen voor betere tools die tijd besparen is zuinig: de ROI is positief." }
    ],
  },
  {
    id: "financial-psychology",
    title: "Psychologie van Geld",
    difficulty: 2,
    emoji: "🧠",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Financieel Bewustzijn",
    definition: "De psychologie van geld (Morgan Housel) onderzoekt hoe emoties, overtuigingen, ervaringen en biases financiële beslissingen bepalen — meer dan kennis of rationele berekeningen. Rijkdom is minder een kwestie van intellect en meer van gedrag, geduld en zelfkennis.",
    abstractExample: "Twee mensen weten beide dat indexfondsen langetermijn het beste presteren. Eén doet het; de ander schiet tijdens een crash in paniek de posities uit. Het verschil is niet kennis maar emotionele regulatie, geduld en gedrag. Dat is de psychologie van geld.",
    examples: [
      { domain: "Financieel", icon: "💰", text: "Iemand die opgroeide in armoede heeft andere geldovertuigingen dan iemand die opgroeide in welvaart — en dat beïnvloedt risicobereidheid, spaarneiging en financieel gedrag voor de rest van het leven." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Veel mensen met hoge inkomens zijn niet vermogend — omdat inkomen en vermogen niet hetzelfde zijn. Rijkdom is wat je niet uitgeeft. Dit is gedragspsychologie, geen economie." },
      { domain: "Investeren", icon: "📈", text: "Iedereen weet 'koop laag, verkoop hoog'. Vrijwel niemand doet het consequent — omdat angst en hebzucht op de verkeerde momenten winnen van kennis." }
    ],
  },
  {
    id: "attention-economy",
    title: "Aandachtseconomie",
    difficulty: 2,
    emoji: "📱",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Technologie & Digitaal Leven",
    definition: "De aandachtseconomie is het economisch model waarbij platforms concurreren om de schaarse aandacht van gebruikers als commercieel product — jouw aandacht wordt verkocht aan adverteerders. Apps zijn ontworpen door addictie-experts om maximale aandacht te vergrendelen, niet voor jouw welzijn.",
    abstractExample: "Als je niet betaalt voor een product, ben jij het product. Social media platforms verdienen geld door jouw aandacht te verkopen. Elke notificatie, auto-play video en infinite scroll is een bewuste ontwerpkeuze om meer van je aandacht te vangen.",
    examples: [
      { domain: "Technologie", icon: "💻", text: "Tristan Harris (ex-Google ethicus): sociale media zijn ontworpen als gokkasten — variabele beloningsschema's (likes, reacties) activeren hetzelfde dopaminesysteem als gokken. Dit is geen bijwerking maar een ontwerpdoelstelling." },
      { domain: "Dagelijks leven", icon: "🏠", text: "De gemiddelde smartphone gebruiker checkt zijn telefoon 150+ keer per dag. Elke check is een fractie van zijn aandacht die wordt gecapteerd — geaggregeerd over een jaar zijn dit letterlijk weken aan aandacht." },
      { domain: "Studie", icon: "📚", text: "Diep lezen en studeren vereist aanhoudende aandacht — precies het cognitieve vermogen dat de aandachtseconomie systematisch afbreekt. Dit heeft meetbare effecten op concentratievermogen." }
    ],
  },
  {
    id: "digital-minimalism",
    title: "Digitaal Minimalisme",
    difficulty: 2,
    emoji: "🧘",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Technologie & Digitaal Leven",
    definition: "Digitaal minimalisme (Cal Newport) is de filosofie van bewust en selectief technologiegebruik: uitsluitend tools gebruiken die wezenlijk bijdragen aan je waarden, en de rest elimineren — ongeacht de potentiële voordelen. Kwaliteit van technologiegebruik boven kwantiteit.",
    abstractExample: "Minimalisme voor bezittingen: minder spullen, meer ruimte. Digitaal minimalisme: minder digitale tools, meer aandacht en energie voor wat echt telt. Het gaat niet om technologiehaat maar om intentioneel ontwerpen van hoe technologie jouw leven dient.",
    examples: [
      { domain: "Dagelijks leven", icon: "🏠", text: "Een digitale detox van 30 dagen: alle optionele apps verwijderen, dan alleen teruginstalleren wat na 30 dagen duidelijk gemist werd. Wat je niet mist, had je niet nodig." },
      { domain: "Werk", icon: "💼", text: "E-mail twee keer per dag controleren (geen notificaties) in plaats van constant reageren. Minder responsiviteit, maar significant meer diep werk en minder stressniveau." },
      { domain: "Studie", icon: "📚", text: "Studeren in een app-vrije omgeving met een 'dumb phone' naast je of telefoon in een andere kamer — elimineert de cognitieve belasting van potentiële afleiding, ook als je de telefoon niet actief bekijkt." }
    ],
  },
  {
    id: "deep-work-concept",
    title: "Diepgaand Werken",
    difficulty: 2,
    emoji: "🎯",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Technologie & Digitaal Leven",
    definition: "Diepgaand werken (Cal Newport) is de staat van gefocuste, ononderbroken concentratie op cognitief veeleisende taken — waarbij maximale waarde wordt gecreëerd in minimale tijd. Het is zeldzamer en waardevoller geworden naarmate de aandachtseconomie oppervlakkig werk normaliseert.",
    abstractExample: "De meeste kenniswerkers spenderen het merendeel van hun dag in 'shallow work': e-mail, vergaderingen, berichten, lopende taken. Diepgaand werk — echte intellectuele inspanning op moeilijke problemen — is wat werkelijk waarde creëert maar steeds zeldzamer is.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een programmeur die 4 uur ononderbroken codeert (diep werk) produceert meer dan iemand die dezelfde 4 uur verspreid werkt over de dag met constante e-mail- en Slack-onderbrekingen." },
      { domain: "Studie", icon: "📚", text: "Studeren in blokken van 90 minuten zonder onderbrekingen (diep werk) leidt tot significant beter begrip en retentie dan hetzelfde aantal uren verspreid met afleiding." },
      { domain: "Schrijven", icon: "✍️", text: "J.K. Rowling huurde een hotelkamer om te schrijven. Charles Darwin had dagelijkse ononderbroken uren. De patronen van productief schrijvers en denkers tonen diep werk als gemeenschappelijk kenmerk." }
    ],
  },
  {
    id: "filter-bubble",
    title: "Filterbubbel",
    difficulty: 2,
    emoji: "🫧",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Technologie & Digitaal Leven",
    definition: "Een filterbubbel (Eli Pariser) is het fenomeen waarbij personalisatie-algoritmen mensen toenemend isoleren in informatiekamers die hun bestaande overtuigingen bevestigen, andere perspectieven filteren en zo polarisatie en epistemic closure versterken.",
    abstractExample: "Het algoritme leert dat je graag content X ziet, toont meer van X, je raakt nog meer op X gefixeerd, het algoritme toont alleen nog maar X. Je informatiediet wordt een echo — versterking zonder correctie. Dit is de filterbubbel.",
    examples: [
      { domain: "Politiek", icon: "🏛️", text: "Facebook- en YouTube-algoritmen tonen je steeds extremere versies van politieke content die je al aansprak. Mensen in dezelfde samenleving zien compleet verschillende 'waarheden' van dezelfde werkelijkheid." },
      { domain: "Studie", icon: "📚", text: "Uitsluitend bronnen lezen die jouw academische theorie bevestigen, door algoritmen en zoekmachines verder gefaciliteerd — leidt tot selectieve literatuurbestudering en zwakkere onderzoeksposities." },
      { domain: "Werk", icon: "💼", text: "LinkedIn-algoritmen tonen je mensen en ideeën uit je eigen sector en netwerk — wat informatiehomogeniteit versterkt terwijl cross-sectorale innovatie vrijwel altijd uit perspectief-diversiteit komt." }
    ],
  },
  {
    id: "algorithmic-influence",
    title: "Algoritmische Beïnvloeding",
    difficulty: 3,
    emoji: "🤖",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Technologie & Digitaal Leven",
    definition: "Algoritmische beïnvloeding is de manier waarop computationele systemen het gedrag, de keuzes en overtuigingen van mensen sturen — vaak zonder bewustzijn van de beïnvloede persoon. Van Netflix-aanbevelingen tot politieke targeting: algoritmen vormen steeds meer de realiteit die mensen ervaren.",
    abstractExample: "Een algoritme dat beslist wat je ziet, bepaalt mede wat je gelooft, wat je koopt, voor wie je stemt, en wat je voelt. Het is niet neutraal — het optimaliseert voor metrics (engagement, conversie) die niet hoeven te correleren met jouw belang.",
    examples: [
      { domain: "Consumentgedrag", icon: "🛒", text: "Amazon's aanbevelingsalgoritme verhoogt gemiddeld 35% van de omzet. Elke 'anderen kochten ook' is een zorgvuldig ontworpen beïnvloedingsinterventie — geen onpartijdige suggestie." },
      { domain: "Politiek", icon: "🏛️", text: "Micro-targeting in politieke campagnes: algoritmen identificeren twijfelende kiezers en tonen gepersonaliseerde berichten die precies inspelen op hun psychografisch profiel — elke kiezer ziet een andere boodschap." },
      { domain: "Relaties", icon: "❤️", text: "Dating-apps optimaliseren voor engagement (mensen op het platform houden), niet voor het vinden van een partner. Dit kan leiden tot FOMO-gedrag en onrealistische verwachtingen." }
    ],
  },
  {
    id: "digital-identity",
    title: "Digitale Identiteit",
    difficulty: 2,
    emoji: "👤",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Technologie & Digitaal Leven",
    definition: "Digitale identiteit is het geheel van data, gedrag, representaties en aanwezigheid waarmee een persoon online wordt gedefinieerd — door zichzelf en door anderen. Het omvat bewuste zelfpresentatie, onbewuste datasporen en algoritmische profielen die anderen over jou bouwen.",
    abstractExample: "Je digitale identiteit is als een schaduw: ze volgt je, ze is jouw contouren maar vergroot, vervormd en permanent zichtbaar. En anders dan je schaduw, wordt ze opgeslagen, geanalyseerd en verkocht.",
    examples: [
      { domain: "Werk", icon: "💼", text: "89% van de recruiters googelt kandidaten. Je LinkedIn-profiel, tweets, GitHub of publicaties vormen je professionele digitale identiteit — en die werkt voor of tegen je ongeacht je cv." },
      { domain: "Relaties", icon: "❤️", text: "Wat je online deelt, bepaalt hoe je wordt gezien door mensen die je nog niet kennen. De zorgvuldig gecureerde Instagram feed creëert een identiteit die vaak verschilt van de werkelijkheid — met gevolgen voor verwachtingen en verbinding." },
      { domain: "Privacy", icon: "🔒", text: "Elke zoekopdracht, aankoop, locatiecheckin en klik bouwt een dataprofiel dat bedrijven en overheden over jou hebben — dikwijls uitgebreider en nauwkeuriger dan jij je eigen leven in kaart hebt." }
    ],
  },
  {
    id: "information-overload",
    title: "Informatie-overbelasting",
    difficulty: 2,
    emoji: "🌊",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Technologie & Digitaal Leven",
    definition: "Informatie-overbelasting treedt op wanneer de hoeveelheid beschikbare informatie het vermogen van een persoon om deze te verwerken en te gebruiken voor goede beslissingen overschrijdt. In de informatierijke omgeving van de 21e eeuw is het filteren van informatie een kernvaardigheid geworden.",
    abstractExample: "Meer informatie leidt paradoxaal genoeg tot slechtere beslissingen voorbij een bepaald punt — omdat het mentale bandbreedte, aandacht en beslissingsvermogen uitput. De menselijke geest is geoptimaliseerd voor een wereld met informatielschaarste, niet -overvloed.",
    examples: [
      { domain: "Nieuws", icon: "📰", text: "Continu nieuws consumeren creëert een gevoel van informatiegelijke urgentie — alles lijkt even belangrijk. In werkelijkheid is 95% van het nieuws irrelevant voor jouw dagelijks handelen en welzijn." },
      { domain: "Werk", icon: "💼", text: "Te veel data in een vergadering leidt tot slechte beslissingen — 'paralysis by analysis'. Betere beslissingen vereisen soms bewust minder informatie en meer vertrouwen op principes en intuïtie." },
      { domain: "Studie", icon: "📚", text: "Een student die tien boeken tegelijk begint en eindeloos research doet voor zijn scriptie, lijdt aan informatie-overbelasting. Curatieve selectie en diepte over breedte is de remedie." }
    ],
  },
  {
    id: "tech-ethics",
    title: "Technologie-ethiek",
    difficulty: 3,
    emoji: "⚖️",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Technologie & Digitaal Leven",
    definition: "Technologie-ethiek onderzoekt de morele implicaties van technologische systemen — wie profiteert, wie wordt geschaad, wie beslist, en welke waarden worden ingebakken in code. Naarmate technologie meer invloed heeft, wordt de ethische dimensie ervan urgenter.",
    abstractExample: "Een algoritme dat sollicitanten selecteert, is niet neutraal — het belichaamt de waarden en biases van zijn makers en trainingsdata. Technologie is een morele keuze vermomd als een neutraal gereedschap. De vraag is altijd: voor wie, door wie, en ten koste van wie?",
    examples: [
      { domain: "AI", icon: "🤖", text: "Gezichtsherkenningssoftware heeft aantoonbaar hogere foutpercentages voor donkere huidskleur — een ethisch probleem met reële consequenties als het wordt gebruikt voor politiële identificatie." },
      { domain: "Data", icon: "📊", text: "Cambridge Analytica gebruikte persoonlijke Facebook-data van miljoenen mensen zonder toestemming voor politieke micro-targeting — een schandaal dat de politieke discussie over dataprivacy heeft getransformeerd." },
      { domain: "Automatisering", icon: "⚙️", text: "Automatisering creëert welvaart maar verdringt banen — de ethische vraag is hoe de winst wordt verdeeld en hoe werknemers worden ondersteund die door automatisering worden verdrongen." }
    ],
  },
  {
    id: "scientific-method",
    title: "Wetenschappelijke Methode",
    difficulty: 2,
    emoji: "🔭",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Kritisch Denken",
    definition: "De wetenschappelijke methode is het systematische proces van kennisverwerving via observatie, hypothesevorming, experimenteren, falsificatie en peer review. Het onderscheidt wetenschappelijke kennis van mening, dogma en pseudowetenschap door haar zelfcorrigerende mechanismes.",
    abstractExample: "Wetenschap is de enige kennissysteem die zichzelf actief probeert te ontkrachten. Een goede wetenschapper zoekt niet naar bevestiging maar naar falsificatie: 'Hoe kan ik bewijzen dat ik het mis heb?' Deze anticonfirmatie-instelling is de kern van wetenschappelijke integriteit.",
    examples: [
      { domain: "Geneeskunde", icon: "🏥", text: "Dubbelblinde gerandomiseerde gecontroleerde trials (RCT's) zijn de goudstandaard in medisch onderzoek: ze controleren voor placebo, bias en toeval — exact wat anekdotisch bewijs mist." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Jezelf afvragen: 'Welk bewijs zou mij doen twijfelen aan deze overtuiging?' als je iets leest of hoort. Als je het antwoord niet kunt geven, geloofje het dogmatisch in plaats van empirisch." },
      { domain: "Werk", icon: "💼", text: "A/B testen van marketingstrategieën, productfuncties of processen is toegepaste wetenschappelijke methode: hypothese (X werkt beter), test, meet, concludeer, herhaal." }
    ],
  },
  {
    id: "evolution-thinking",
    title: "Evolutionair Denken",
    difficulty: 2,
    emoji: "🦎",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Kritisch Denken",
    definition: "Evolutionair denken is het toepassen van evolutionaire principes (variatie, selectie, adaptatie, erfelijkheid) als verklarend kader voor biologisch en gedragsmatig verschijnselen. Het biedt inzicht in waarom mensen voelen, denken en handelen zoals ze doen — en welke aanpassingen in de moderne wereld niet meer passen.",
    abstractExample: "Mensen zijn gemaakt door evolutie voor een wereld die er 10.000 jaar geleden uitzag. Veel van onze driften, angsten en verlangens zijn adaptief voor die wereld maar maladaptief voor de onze. Begrip hiervan is begrip van de kloof tussen evolutie en moderniteit.",
    examples: [
      { domain: "Gedrag", icon: "🧠", text: "Zucht naar suiker en vet is evolutionair adaptief (kalorieënarme omgeving) maar maladaptief in een omgeving met onbeperkte calorieën. Begrip hiervan helpt bij gericht omgaan met eetgedrag." },
      { domain: "Sociale psychologie", icon: "👥", text: "In-group/out-group denken (wij vs. zij) is een evolutionaire aanpassing voor stammenleven maar leidt in moderne samenlevingen tot tribalism en discriminatie." },
      { domain: "Angst", icon: "😨", text: "Angst voor spinnen is evolutionair begrijpelijk (giftige bedreigingen). Angst voor publiek spreken is evolutionair minder begrijpelijk — tenzij sociaal uitgestoten worden door de groep letterlijk dodelijk was." }
    ],
  },
  {
    id: "complexity-theory",
    title: "Complexiteitstheorie",
    difficulty: 3,
    emoji: "🌀",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Systeemdenken",
    definition: "Complexiteitstheorie bestudeert systemen met veel onderling afhankelijke delen die niet-lineair, onvoorspelbaar gedrag vertonen — waarbij het geheel fundamenteel anders is dan de som der delen. Complexe systemen zijn niet gecompliceerd (oplosbaar met genoeg expertise) maar onherleidbaar complex.",
    abstractExample: "Het weer is complex: duizenden variabelen interacteren niet-lineair. Je kunt niet het weer volgende maand voorspellen door het van vandaag te kennen. Een machine is gecompliceerd: veel onderdelen, maar elk voorspelbaar. Het verschil is cruciaal voor hoe je met systemen omgaat.",
    examples: [
      { domain: "Economie", icon: "💰", text: "Markten zijn complex systemen — niemand kan ze consequent voorspellen, omdat elk actie feedback loops creëert die het systeem veranderen. Dit is waarom economen zo vaak fout zitten bij voorspellingen." },
      { domain: "Organisaties", icon: "🏢", text: "Een grote organisatie is een complex systeem: gedetailleerde managementplannen falen vaak omdat ze aannames maken over lineaire causaliteit in een niet-lineair systeem." },
      { domain: "Gezondheid", icon: "❤️‍🩹", text: "Het menselijk lichaam is een complex systeem — medicijnen die één variabele 'repareren' hebben onvoorziene effecten op andere variabelen. Complexiteit verklaart de moeilijkheid van gepersonaliseerde geneeskunde." }
    ],
  },
  {
    id: "nature-exposure",
    title: "Blootstelling aan Natuur",
    difficulty: 1,
    emoji: "🌿",
    academicCategory: "Persoonlijke Ontwikkeling",
    skillCategory: "Gezondheid",
    definition: "Blootstelling aan natuur heeft bewezen positieve effecten op mentale gezondheid, stressherstel, cognitieve vermoeidheid en aandacht. 'Shinrin-yoku' (bosbaden in Japan) en Attention Restoration Theory tonen dat natuur een uniek hersteleffect heeft dat stedelijke omgevingen niet bieden.",
    abstractExample: "Het brein heeft twee aandachtssystemen: direct (actief, uitputtend) en involuntair (passief, herstelend). Natuur activeert het involuntaire systeem via zachte fascinatie — ruisend water, bewegende bladeren, vogels. Dit herstelt de capaciteit voor gerichte aandacht.",
    examples: [
      { domain: "Gezondheid", icon: "❤️‍🩹", text: "20-30 minuten in een park of bos significant verlaagt cortisol (stresshormoon), bloeddruk en hartslag — meetbaar en reproduceerbaar in tientallen studies." },
      { domain: "Werk", icon: "💼", text: "Werknemers met uitzicht op natuur rapporteren minder ziekteverzuim, minder stress en meer tevredenheid dan werknemers zonder — zelfs planten in kantoren hebben meetbaar effect." },
      { domain: "Studie", icon: "📚", text: "Studeren in of na een wandeling in de natuur verbetert cognitieve prestatie op geheugentests. Zelfs afbeeldingen van natuur hebben aantoonbaar effect op cognitieve herstel." }
    ],
  },
  {
    id: "systems-thinking-basics",
    title: "Systeemdenken Basis",
    difficulty: 2,
    emoji: "⚙️",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Systeemdenken",
    definition: "Systeemdenken is een analytisch kader dat gericht is op het begrijpen van hoe elementen van een systeem elkaar beïnvloeden, via feedback loops, vertraging en emergente eigenschappen. Het contrasteert met lineair denken (A veroorzaakt B) en erkent circulaire causaliteit (A beïnvloedt B, B beïnvloedt A).",
    abstractExample: "Lineair denken: 'We hebben te weinig politieagenten, daarom stijgt de criminaliteit. Meer politie = minder criminaliteit.' Systeemdenken vraagt: Welke feedback loops bestaan er? Wat zijn de vertragingen? Welke onbedoelde gevolgen heeft meer politie? Wat zijn de achterliggende oorzaken van criminaliteit?",
    examples: [
      { domain: "Organisaties", icon: "🏢", text: "Een bedrijf verhoogt productiviteitsdruk (meer output eisen). Op korte termijn stijgt output. Maar op lange termijn stijgt burn-out, daalt de kwaliteit en vertrekken goede medewerkers — een negatieve feedback loop die het systeem schade doet." },
      { domain: "Economie", icon: "💰", text: "Systeemdenken in economie: verhoog de minimumloon (A), meer koopkracht consumenten (B), meer vraag naar producten (C), meer productie nodig (D), meer arbeiders in dienst (E) — een positieve feedback loop die het model compliceert." },
      { domain: "Persoonlijk", icon: "💙", text: "Slaaptekort → vermoeidheid → slechte beslissingen → stress → slaaptekort. Dit is een reinforcing feedback loop (vicieuze cirkel). Systeemdenken identificeert de hefboom: niet 'meer discipline' maar de ene interruptie die de loop doorbreekt." }
    ],
  },
  {
    id: "probability-thinking",
    title: "Probabilistisch Denken",
    difficulty: 2,
    emoji: "🎲",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Kritisch Denken",
    definition: "Probabilistisch denken is het redeneren in kansen en waarschijnlijkheden in plaats van zekerheden, en het updaten van overtuigingen op basis van nieuw bewijs (Bayesiaans denken). Het erkent inherente onzekerheid en maakt betere beslissingen mogelijk onder onzekerheid.",
    abstractExample: "Binair denken: 'Zal het slagen of falen?' Probabilistisch denken: 'Welke kans schat ik op succes, gegeven beschikbare informatie? Hoe verandert die kans als X of Y optreedt?' Dit maakt beslissingen genuanceerder en beter gekalibreerd.",
    examples: [
      { domain: "Investeren", icon: "📈", text: "Een goede belegger denkt niet 'Zal dit aandeel stijgen?' maar 'Gegeven alle informatie, is de kans op winst groter dan de prijs van het risico?' Probabilistisch denken over portefeuille-risico." },
      { domain: "Medisch", icon: "🏥", text: "Een positieve test op een zeldzame ziekte (1% prevalentie) met 99% nauwkeurigheid geeft slechts ~50% kans op de ziekte — door Bayes' wet. Probabilistisch denken voorkomt onnodige angst of overbehandeling." },
      { domain: "Beslissingen", icon: "🔄", text: "In plaats van te vragen 'Moet ik dit project starten?', vragen: 'Wat is mijn beste schatting van succeskans? Wat zijn de kosten van falen? Wat zijn de baten van succes?' — een probabilistische kosten-batenanalyse." }
    ],
  },
  {
    id: "scientific-literacy",
    title: "Wetenschappelijke Geletterdheid",
    difficulty: 2,
    emoji: "📊",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Kritisch Denken",
    definition: "Wetenschappelijke geletterdheid is het vermogen om wetenschappelijke claims te begrijpen, te evalueren en kritisch te beoordelen — inclusief het herkennen van methodologische kwaliteit, statistische valkuilen en hoe media wetenschappelijk onderzoek vaak vertekenen.",
    abstractExample: "Een krant schrijft: 'Studie bewijst dat koffie kanker veroorzaakt.' Een wetenschappelijk geletterdie leest: 'Welke studie? Hoe groot? Correlatie of causaliteit? Observationeel of gecontroleerd? Welke confounders? Is het gerepliceerd?' De meeste mensen kunnen dit niet — en worden misleid.",
    examples: [
      { domain: "Gezondheid", icon: "❤️‍🩹", text: "'Superfoods' worden vaak gepromoot op basis van kleine, niet-gerepliceerde studies. Een wetenschappelijk geletterdie kijkt naar effectgrootte, studie-kwaliteit, replicatie en of er publiek bewijs is — niet naar één studie of anekdote." },
      { domain: "Media", icon: "📰", text: "Media rapporteren graag: 'Studie toont verband tussen X en Y.' Wetenschappelijke geletterdheid: correlatie ≠ causaliteit, relatief risico ≠ absoluut risico, 'statistisch significant' ≠ 'praktisch relevant'." },
      { domain: "Beleid", icon: "🏛️", text: "COVID-vaccindebat: mensen met wetenschappelijke geletterdheid konden de kwaliteit van bewijs evalueren, begrijpen wat RCT's zeggen en wat niet, en onderscheid maken tussen politiek en wetenschap." }
    ],
  },
  {
    id: "naturalistic-fallacy",
    title: "Naturalistisch Drogargument",
    difficulty: 2,
    emoji: "🌱",
    academicCategory: "Filosofie & Ethiek",
    skillCategory: "Kritisch Denken",
    definition: "Het naturalistisch drogargument is de fout van afleiden dat iets goed of wenselijk is omdat het 'natuurlijk' is. Maar 'natuurlijk' en 'moreel goed' zijn niet synoniem: gif, ziekte en dood zijn ook natuurlijk. De term 'natuurlijk' heeft in marketing en ethiek vaak geen inhoudelijke betekenis.",
    abstractExample: "Argument: 'X is natuurlijk, dus X is goed/veilig.' Dit is een drogreden: natuur produceert zowel antibiotica als botulinum-toxine (het dodelijkste gif dat bestaat). Kunstmatig en schadelijk zijn niet synoniem, net zoals natuurlijk en veilig dat niet zijn.",
    examples: [
      { domain: "Marketing", icon: "📢", text: "'100% natuurlijk!' op voedselverpakkingen suggereert dat het gezond of beter is. Maar arseen, hemlockvergif en salmonella zijn ook 100% natuurlijk. De claim betekent zonder context niets." },
      { domain: "Ethiek", icon: "⚖️", text: "'Homo-zijn is niet natuurlijk' als argument dat het immoreel is — dit is een naturalistisch drogargument: ook als het onnatuurlijk was (wat empirisch onjuist is), zou dat niets zeggen over de moraliteit." },
      { domain: "Gezondheid", icon: "❤️‍🩹", text: "'Kruiden zijn veilig want ze zijn van nature.' Sint-Janskruid (een kruid) interacteert gevaarlijk met antidepressiva. Digitaline (hartmedicijn) is uit foxglove — een 'natuurlijk' gif dat in hoge dosis dodelijk is." }
    ],
  },
  {
    id: "aesthetic-experience",
    title: "Esthetische Ervaring",
    difficulty: 2,
    emoji: "🎨",
    academicCategory: "Kunst & Esthetiek",
    skillCategory: "Zingeving",
    definition: "Een esthetische ervaring is een intensief, aandachtig contact met iets schoons of kunstzinnigs waarbij de normale doelgerichtheid wegvalt — je bent volledig aanwezig in het waarnemen zelf, niet in wat het oplevert. Filosoof Kant noemde dit 'doelmatigheid zonder doel'.",
    abstractExample: "Je loopt langs een landschap en stopt plotseling — niet omdat je iets wil doen, maar omdat de aanblik je grijpt. De normale stroom van gedachten valt weg. Je bent puur aanwezig bij het zien. Dat is de esthetische ervaring.",
    examples: [
      { domain: "Kunst", icon: "🖼️", text: "Stil staan voor een schilderij in een museum en merken dat de tijd stopt — je bent in gesprek met het werk, niet er langs lopend. Dit is de esthetische ervaring die kunst beoogt te creëren." },
      { domain: "Muziek", icon: "🎵", text: "Een muziekstuk dat je volledig absorbeert — waarbij je de regie kwijtraakt en puur ervaart. Niet analyseren, niet evalueren: ondergaan. Dat is esthetisch horen." },
      { domain: "Natuur", icon: "🌄", text: "Een zonsondergang die je plotseling tot stilstand brengt. Geen plannen, geen telefoon, geen 'wat moet ik vanavond nog doen' — alleen het zien. Een spontane esthetische ervaring." }
    ],
  },
  {
    id: "creative-process",
    title: "Het Creatieve Proces",
    difficulty: 2,
    emoji: "✨",
    academicCategory: "Kunst & Esthetiek",
    skillCategory: "Creativiteit",
    definition: "Het creatieve proces verloopt typisch in vier fasen (Graham Wallas): Voorbereiding (intensief onderzoek), Incubatie (bewust loslaten), Illuminatie (het 'aha-moment'), Verificatie (kritisch uitwerken). Creativiteit is geen mysterieus talent maar een begrijpelijk en deels bestuurbaar proces.",
    abstractExample: "Je hebt urenlang een probleem bestudeerd. Je zet het opzij. Douchen, wandelen, slapen — en plotseling: de oplossing. Dit is incubatie en illuminatie in actie. Het onbewuste heeft de connecties gelegd die bewust denken blokkeerde.",
    examples: [
      { domain: "Wetenschap", icon: "🔬", text: "Archimedes' 'Eureka!'-moment in bad is illuminatie na voorbereiding (hij bestudeerde het probleem) en incubatie (hij was zich aan het ontspannen). Bijna alle grote wetenschappelijke doorbraken hebben dit patroon." },
      { domain: "Schrijven", icon: "✍️", text: "Een schrijver die vastloopt, stopt bewust te schrijven en gaat wandelen. Bij terugkomst weet hij hoe de plot zich ontvouwt — het onbewuste heeft de structuur gevonden terwijl hij liep." },
      { domain: "Werk", icon: "💼", text: "Een moeilijk strategisch probleem 'slapen over' is letterlijk incubatie. Slaap consolideert informatie en het onbewuste maakt verbanden — de ochtendinzichten zijn niet toevallig." }
    ],
  },
  {
    id: "art-interpretation",
    title: "Kunstinterpretatie",
    difficulty: 2,
    emoji: "🖼️",
    academicCategory: "Kunst & Esthetiek",
    skillCategory: "Zingeving",
    definition: "Kunstinterpretatie is het actieve proces van betekenis geven aan een kunstwerk — niet passief ontvangen maar actief construeren van betekenis vanuit de interactie tussen het werk, de context en de toeschouwer. Er is geen enkele 'correcte' interpretatie, maar sommige zijn rijker dan andere.",
    abstractExample: "Een schilderij spreekt nooit voor zichzelf — het spreekt in dialoog met de toeschouwer. Twee mensen voor hetzelfde werk 'zien' fundamenteel iets anders, afhankelijk van hun cultuur, ervaringen en aandacht. Interpretatie is co-creatie.",
    examples: [
      { domain: "Beeldende kunst", icon: "🖼️", text: "Munch's 'De Schreeuw': is het angst? existentiële paniek? milieu-vernietiging (de rode lucht is historisch gelinkt aan de vulkaanuitbarsting van Krakatau)? Alle interpretaties zijn geldig en verrijken de ervaring." },
      { domain: "Literatuur", icon: "📚", text: "Kafka's 'Het Proces': is het een politieke metafoor (totalitarisme)? een psychologische beschrijving (neurose)? een religieuze allegorie (God's oordeel)? De rijkdom van het werk ligt in deze meervoudigheid." },
      { domain: "Muziek", icon: "🎵", text: "Beethoven's 9e Symfonie: voor de componist een expressie van menselijke triomf. Voor de EU het symbool van Europese eenheid. Voor een Zuid-Afrikaan tijdens apartheid: een marslied van vrijheid. Dezelfde muziek, radicaal verschillende resonantie." }
    ],
  },
  {
    id: "beauty-truth",
    title: "Schoonheid en Waarheid",
    difficulty: 3,
    emoji: "💫",
    academicCategory: "Kunst & Esthetiek",
    skillCategory: "Zingeving",
    definition: "De relatie tussen schoonheid en waarheid is een centraal filosofisch thema: Plato zag schoonheid als een verschijningsvorm van het Ware en het Goede. Keats schreef 'Beauty is truth, truth beauty.' Wetenschappers beschrijven elegante theorieën als 'mooi' — en deze schoonheidservaring blijkt een betrouwbare gids voor wetenschappelijke juistheid.",
    abstractExample: "Wiskundigen beschrijven vaak dat hun mooiste bewijzen 'waar moeten zijn' — een esthetisch gevoel dat hen naar correcte resultaten leidt. Einstein vertrouwde zijn relativiteitstheorie mede omdat ze zo elegant was. Schoonheid blijkt een epistemisch kompas.",
    examples: [
      { domain: "Wetenschap", icon: "🔬", text: "E=mc² is een schone vergelijking: weinig symbolen, grote omvang van werkelijkheid. De schoonheid van wiskundige elegantie blijkt historisch een betrouwbare indicator van diepe waarheid." },
      { domain: "Kunst", icon: "🎨", text: "Dostojevski: 'Schoonheid zal de wereld redden.' Niet sentimenteel maar als geloof dat esthetische ervaring ons verbindt met het diepere — het echte, het waardevolle, het transcendente." },
      { domain: "Filosofie", icon: "🦉", text: "Plato's kalokagathia: het idee dat het ware, goede en mooie uiteindelijk samenvallen. Dit is een radicale filosofische positie maar met verrassend veel steun in de geschiedenis van wetenschappelijke ontdekking." }
    ],
  },
  {
    id: "creative-courage",
    title: "Creatieve Moed",
    difficulty: 2,
    emoji: "🦁",
    academicCategory: "Kunst & Esthetiek",
    skillCategory: "Creativiteit",
    definition: "Creatieve moed is de bereidheid om iets te maken — te scheppen, te delen, te tonen — ondanks de angst voor oordeel, mislukking of afwijzing. Het is erkennen dat het maken van kwetsbaar werk de meest menselijke daad is, en het toch doen.",
    abstractExample: "Elke kunstenaar, schrijver of maker kent de lege pagina-angst. Creatieve moed is niet de afwezigheid van die angst, maar het scheppen ondanks haar. Het is het wereld geven van iets wat volledig van jou is — en dus volledig kwetsbaar.",
    examples: [
      { domain: "Kunst", icon: "🎨", text: "Een beginnend schrijver zijn eerste verhaal delen — wetend dat het onvolmaakt is, wetend dat het beoordeeld kan worden, het toch doen. Dit is creatieve moed in haar puurste vorm." },
      { domain: "Werk", icon: "💼", text: "Een onorthodox voorstel doen in een vergadering, wetend dat het afgewezen kan worden. Een nieuw businessmodel verdedigen dat haaks staat op de conventie. Creatieve moed in professionele context." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Je mening geven over iets dat je diep beweegt, ook als je weet dat anderen het er niet mee eens zijn. Of iets maken — muziek, koken, tuinieren — puur voor de vreugde van het maken, zonder resultaatgarantie." }
    ],
  },
  {
    id: "cultural-literacy",
    title: "Culturele Geletterdheid",
    difficulty: 2,
    emoji: "🌍",
    academicCategory: "Kunst & Esthetiek",
    skillCategory: "Zingeving",
    definition: "Culturele geletterdheid (E.D. Hirsch) is de brede kennis van gedeelde culturele referenties — literatuur, geschiedenis, kunst, mythologie — die effectieve communicatie in een samenleving mogelijk maakt. Gedeelde culturele kennis is de impliciete woordenschat van een beschaving.",
    abstractExample: "Iemand zegt 'hij heeft echt een pyrrusoverwinning behaald' — dit veronderstelt kennis van de Griekse koning Pyrrus. Of 'dat is een kafkaeske situatie' — zonder Kafka-kennis is de communicatie mislukt. Culturele geletterdheid is de gedeelde code die communicatie verrijkt.",
    examples: [
      { domain: "Communicatie", icon: "💬", text: "Politici en columnisten verwijzen naar Dante, Shakespeare, de Bijbel of de Verlichting als gedeeld referentiekader. Wie die kennis mist, mist de halve betekenis van de tekst." },
      { domain: "Werk", icon: "💼", text: "In een internationale context weten welke culturele verwijzingen anderen hebben (Confucius in Azië, de Bijbel in het Midden-Oosten, de Renaissance in Europa) maakt cross-culturele communicatie dieper." },
      { domain: "Kunst", icon: "🎨", text: "Een schilderij begrijpen dat verwijst naar de mythe van Icarus, of een roman die alludeert aan Hamlet, vereist culturele geletterdheid — het mist zijn volle rijkdom zonder die context." }
    ],
  },
  {
    id: "sublimity",
    title: "Het Sublieme",
    difficulty: 3,
    emoji: "⛰️",
    academicCategory: "Kunst & Esthetiek",
    skillCategory: "Zingeving",
    definition: "Het sublieme (Edmund Burke, Immanuel Kant) is de esthetische ervaring van iets dat zo geweldig, overweldigend of onmetelijk groot is dat het de normale menselijke schaal overschrijdt en tegelijkertijd angst en verrukking wekt. Het sublieme overstijgt het mooie — het is onrustig, groots, onbeheerst.",
    abstractExample: "Schoonheid kalmeert en stelt je op je gemak. Het sublieme overweldigt je — een vulkaan, een storm, het uitspansel 's nachts, een titanisch muziekstuk. Je voelt je klein maar ook, paradoxaal, verheven. Het sublieme confronteert met je eigen eindigheid én grootheid.",
    examples: [
      { domain: "Natuur", icon: "🌋", text: "Staan aan de rand van de Grand Canyon of onder een sterrenhemel ver van stedelijke verlichting geeft de sublieme ervaring: overweldiging, ontzag, het besef van de eigen kleinheid en de grootheid van het heelal." },
      { domain: "Muziek", icon: "🎵", text: "Beethovens 9e Symfonie, Mahlers 8e, Wagners Parsifal — werken die zo groot en intens zijn dat ze de luisteraar overmeesteren. Niet prettig in de gewone zin maar diep transformerend." },
      { domain: "Kunst", icon: "🖼️", text: "Rothko's grootschalige kleurenvelden geven sommige beschouwers een bijna religieuze ervaring van het sublieme — overweldigend aanwezig, grensoverschrijdend, bijna angstaanjagend in hun directheid." }
    ],
  },
  {
    id: "music-cognition",
    title: "Muziek en Cognitie",
    difficulty: 2,
    emoji: "🎵",
    academicCategory: "Kunst & Esthetiek",
    skillCategory: "Zingeving",
    definition: "Muziek en cognitie bestudeert hoe muziek de hersenen beïnvloedt: emotionele regulatie, geheugen, motoriek en zelfs taalverwerving. Muziek is een uniek menselijk fenomeen dat vrijwel alle hersengebieden tegelijkertijd activeert — de meest holistische hersenactiviteit die bekend is.",
    abstractExample: "Luisteren naar muziek is geen passieve activiteit voor de hersenen: het activeert motorgebieden (ritme), emotionele centra (amygdala), geheugengebieden (hippocampus), taalgebieden en beloningssystemen tegelijk. Muziek is een totaalsimulatie van het brein.",
    examples: [
      { domain: "Alzheimer", icon: "🧠", text: "Alzheimer-patiënten die geen familieleden meer herkennen, herkennen soms nog liederen uit hun jeugd — muziekgeheugen zit in andere (meer duurzame) hersensystemen dan episodisch geheugen." },
      { domain: "Sportprestatie", icon: "🏃", text: "Muziek tijdens sporten verhoogt prestatie met gemiddeld 10-15%: het maskeert vermoeidheid, reguleert ritme en verhoogt motivatie via dopamine-response — een van de meest bewezen ergogene hulpmiddelen." },
      { domain: "Leren", icon: "📚", text: "Muziekonderwijs op jonge leeftijd verbetert executieve functies, taalverwerking en wiskundige vaardigheden — muziek traint breedspectrum hersenconnectiviteit die overdraagt op andere domeinen." }
    ],
  },
  {
    id: "narrative-identity",
    title: "Narratieve Identiteit",
    difficulty: 3,
    emoji: "📖",
    academicCategory: "Kunst & Esthetiek",
    skillCategory: "Zingeving",
    definition: "Narratieve identiteit (Dan McAdams) is de theorie dat mensen hun identiteit construeren als een persoonlijk mythos — een voortdurend herzien levensverhaal dat hun ervaringen integreert in een coherent geheel. Wie je bent is deels het verhaal dat je over jezelf vertelt.",
    abstractExample: "Je bent niet de som van je feiten (geboren op X, getrouwd op Y, werkt bij Z). Je bent het verhaal dat je van die feiten maakt: hoe je de moeilijkheden omschrijft, welke betekenis je aan gebeurtenissen geeft, welke personage jij bent in je eigen epische vertelling.",
    examples: [
      { domain: "Persoonlijk", icon: "💙", text: "Twee mensen maken dezelfde scheiding mee. Eén vertelt het als 'ik ben mislukt als partner'. De andere als 'ik heb geleerd wat ik echt nodig heb'. Hetzelfde feit, fundamenteel ander verhaal — en dus fundamenteel andere identiteit en toekomst." },
      { domain: "Therapie", icon: "🛋️", text: "Narratieve therapie (White & Epston) helpt mensen hun levensverhaal te 'herschrijven' — niet de feiten veranderen maar de betekenis en het perspectief. Dit is een van de effectiefste psychotherapeutische benaderingen." },
      { domain: "Werk", icon: "💼", text: "Hoe jij je carrièrepad vertelt — als een rechte lijn, als een kronkelpad vol onverwachte lessen, als een heldentocht — bepaalt hoe jij en anderen jou zien en wat voor kansen je aangaat." }
    ],
  },
  {
    id: "reciprocity-principle",
    title: "Wederkerigheid",
    difficulty: 1,
    emoji: "🔄",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Sociale Vaardigheden",
    definition: "Wederkerigheid (Cialdini) is het principe dat mensen zich verplicht voelen iets terug te doen als ze iets hebben ontvangen. Dit diepgewortelde sociale mechanisme is een van de krachtigste beïnvloedingsprincipes en kan worden gebruikt voor oprechte verbinding of manipulatie.",
    abstractExample: "Als iemand je een cadeau geeft — ook een klein, ongewenst cadeau — voel je de sociale druk om iets terug te geven. Dit gevoel van verplichting is zo sterk dat marketeers, politici en fondsenwervers het systematisch benutten.",
    examples: [
      { domain: "Marketing", icon: "📢", text: "Gratis proefversies, monsters in de supermarkt, gratis e-books — allemaal gebaseerd op wederkerigheid: geef iets weg, wek de verplichting, verhoog de kans op aankoop aanzienlijk." },
      { domain: "Relaties", icon: "❤️", text: "Oprechte wederkerigheid bouwt gezonde relaties: jij helpt mij verhuizen, ik help jou wanneer jij het nodig hebt. Dit is het cement van sociale gemeenschappen." },
      { domain: "Onderhandelen", icon: "💼", text: "Een concessie doen in een onderhandeling activeert wederkerigheid: de ander voelt de druk ook een concessie te doen. Dit is de basis van het 'deur in het gezicht'-techniek." }
    ],
  },
  {
    id: "social-proof-2",
    title: "Sociale Bewijskracht",
    difficulty: 1,
    emoji: "👥",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Sociale Vaardigheden",
    definition: "Sociale bewijskracht is het principe dat mensen het gedrag van anderen als richtlijn gebruiken voor eigen gedrag, met name in onzekere situaties. Als veel mensen iets doen, lijkt het de juiste keuze — ongeacht of dat werkelijk zo is.",
    abstractExample: "Een restaurant waar het vol zit lijkt beter dan een leeg restaurant — ook al heb je geen informatie over de kwaliteit. De aanwezigheid van anderen is het 'bewijs'. Dit is sociale bewijskracht: anderen doen het, dus het klopt.",
    examples: [
      { domain: "Online", icon: "💻", text: "'Meer dan 10.000 tevreden klanten', vijf sterren reviews, 'bestseller' labels — allemaal sociale bewijskracht die koopbeslissingen beïnvloedt zonder inhoudelijke informatie over kwaliteit." },
      { domain: "Gezondheid", icon: "❤️‍🩹", text: "De meeste mensen doen wat hun omgeving doet: als je vrienden weinig bewegen en ongezond eten, is de kans groter dat jij dat ook doet. Sociale norm als gedragsbeïnvloeder." },
      { domain: "Politiek", icon: "🏛️", text: "Peilingen beïnvloeden verkiezingen: een kandidaat die hoog scoort wint extra stemmen van mensen die 'met de winnaar mee' willen — sociale bewijskracht in politiek." }
    ],
  },
  {
    id: "commitment-consistency",
    title: "Toewijding en Consistentie",
    difficulty: 2,
    emoji: "📌",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Sociale Vaardigheden",
    definition: "Het toewijdings- en consistentieprincipe (Cialdini) stelt dat mensen nadat ze een standpunt hebben ingenomen of een actie hebben ondernomen, sterk gedreven worden om consistent te blijven met die keuze — zelfs als nieuwe informatie het tegendeel suggereert.",
    abstractExample: "Als je publiekelijk zegt dat je X steunt, zul je waarschijnlijk X blijven steunen — ook als je dat later betwijfelt — om consistent te lijken. Het is psychologisch moeilijker toe te geven dat je van mening bent veranderd dan consistent te zijn.",
    examples: [
      { domain: "Marketing", icon: "📢", text: "De 'voet tussen de deur'-techniek: eerst om een kleine gunst vragen (één euro voor goed doel), dan later om een grotere. Na de eerste toewijding voelt de tweede consistent." },
      { domain: "Persoonlijk", icon: "💙", text: "Iemand die zichzelf identificeert als 'niet-lezer' zal minder snel een boek oppakken — ook als hij veel zou profiteren van lezen. De zelfidentificatie stuurt gedrag via consistentiedrang." },
      { domain: "Politiek", icon: "🏛️", text: "Kiezers die publiekelijk een kandidaat hebben gesteund of een verkiezingsbord hebben geplaatst, zijn moeilijker te overtuigen van andere standpunten — toewijding vergrendelt overtuigingen." }
    ],
  },
  {
    id: "scarcity-principle",
    title: "Schaarsteprincipe",
    difficulty: 1,
    emoji: "⏳",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Sociale Vaardigheden",
    definition: "Het schaarsteprincipe stelt dat mensen dingen meer waarderen naarmate ze minder beschikbaar zijn. Beperkte beschikbaarheid — in tijd, hoeveelheid of toegang — verhoogt de waargenomen waarde en urgentie, ongeacht de werkelijke kwaliteit van het object.",
    abstractExample: "Een cookie uit een pot met tien koekjes smaakt minder goed dan dezelfde cookie uit een bijna lege pot — dit is aangetoond in onderzoek. Schaarste verandert de waargenomen waarde letterlijk, niet alleen psychologisch.",
    examples: [
      { domain: "Marketing", icon: "📢", text: "'Nog maar 3 op voorraad!', 'Aanbieding geldig tot middernacht', 'Exclusief voor leden' — allemaal toepassingen van het schaarsteprincipe die urgentie en waarde verhogen." },
      { domain: "Relaties", icon: "❤️", text: "Mensen die moeilijk bereikbaar zijn worden soms aantrekkelijker gevonden — deels door het schaarsteprincipe. Beschikbaarheid verlaagt paradoxaal genoeg soms de waargenomen waarde." },
      { domain: "Collectibles", icon: "🏺", text: "Beperkte oplages, gecertificeerde unieke kunstwerken, één-van-een items — schaarste is de primaire waardedrijver, niet gebruikswaarde." }
    ],
  },
  {
    id: "authority-bias-influence",
    title: "Autoriteitsbias",
    difficulty: 2,
    emoji: "👔",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Kritisch Denken",
    definition: "Autoriteitsbias is de neiging om de meningen en richtlijnen van mensen met autoriteit — door titel, positie, expertise of symbolen — als juister te beschouwen dan die van anderen, soms boven eigen oordeel. Dit is soms nuttig maar kan ook leiden tot blind volgen van foute autoriteiten.",
    abstractExample: "Een dokter met een witte jas overtuigt anders dan dezelfde persoon in vrijetijdskleding — ook als de inhoud identiek is. Symbolen van autoriteit activeren automatisch meer vertrouwen en gehoorzaamheid.",
    examples: [
      { domain: "Psychologie", icon: "🧠", text: "Milgram's gehoorzaamheidsexperiment: gewone mensen gaven schijnbaar dodelijke elektroshocks aan anderen op aanwijzing van een autoriteit. Autoriteit overschrijft individueel moreel oordeel in schokkende mate." },
      { domain: "Werk", icon: "💼", text: "Een medewerker die een duidelijk fout besluit niet aanvecht omdat het van de CEO komt, illustreert autoriteitsbias in praktijk. Hierarchische positie vervangt inhoudelijk oordeel." },
      { domain: "Media", icon: "📺", text: "Een 'expert' op tv overtuigt kijkers meer dan dezelfde mening van een vriend — ook als de expert geen relevante expertise heeft voor de specifieke claim die hij maakt." }
    ],
  },
  {
    id: "liking-principle",
    title: "Sympathieprincipe",
    difficulty: 1,
    emoji: "😊",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Sociale Vaardigheden",
    definition: "Het sympathieprincipe stelt dat mensen eerder instemmen met verzoeken van mensen die ze sympathiek vinden. Sympathie wordt vergroot door: fysieke aantrekkelijkheid, gelijkenis, vertrouwdheid, complimenten en associatie met positieve dingen.",
    abstractExample: "We kopen meer van verkopers die we aardig vinden, stemmen meer op politici die we sympathiek achten, en helpen eerder vrienden dan vreemden — ook als de inhoud van het verzoek identiek is. Sympathie is een sociale smeerolie die beslissingen beïnvloedt los van inhoud.",
    examples: [
      { domain: "Verkoop", icon: "💼", text: "Tupperware-feestjes zijn volledig gebaseerd op het sympathieprincipe: je koopt van een vriendin in jouw sociale omgeving. De vriendschapsband vergroot de koopbereidheid enorm." },
      { domain: "Politiek", icon: "🏛️", text: "Onderzoek toont dat fysiek aantrekkelijkere kandidaten meer stemmen krijgen — een direct effect van het sympathieprincipe, niet van politieke inhoud." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Mensen geven vaker toe aan verzoeken van vrienden dan van vreemden met identieke verzoeken. Sympathie overbrugt sociale grenzen die inhoud alleen niet kan overbruggen." }
    ],
  },
  {
    id: "foot-in-door",
    title: "Voet-in-de-deur Techniek",
    difficulty: 1,
    emoji: "🚪",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Sociale Vaardigheden",
    definition: "De voet-in-de-deur techniek is een overtuigingsstrategie waarbij je begint met een klein verzoek dat vrijwel zeker wordt ingewilligd, en daarna een groter verzoek doet. Door de eerste instemming voelt het grotere verzoek consistenter met het zelfbeeld van de persoon.",
    abstractExample: "Een verkoopster die eerst vraagt of je even de winkel in wil kijken (klein verzoek), dan of je dit product wil proberen, dan of je het wil kopen — heeft stapsgewijs commitment opgebouwd. Elke stap is kleiner dan de volgende stap als directe vraag zou voelen.",
    examples: [
      { domain: "Fondsenwerving", icon: "❤️", text: "Vredesorganisaties vroegen mensen eerst een kleine sticker te plaatsen (bijna niemand weigert). Later vroegen ze een groot bord in de tuin te plaatsen. Sticker-groep: 76% ja; controlegroep: 17% ja." },
      { domain: "Werk", icon: "💼", text: "Een junior medewerker die zijn baas overtuigt een klein experiment toe te staan, heeft een opening gecreëerd. Als het werkt: commitment voor groter experiment." },
      { domain: "Relaties", icon: "❤️", text: "Kleine gunsten vragen en verlenen bouwt wederkerigheid en commitment op. Dit is de organische manier waarop mensen diepere banden vormen." }
    ],
  },
  {
    id: "anchoring-negotiation",
    title: "Ankereffect in Onderhandeling",
    difficulty: 2,
    emoji: "⚓",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Sociale Vaardigheden",
    definition: "Het ankereffect in onderhandeling beschrijft hoe het eerste getal of voorstel dat wordt geïntroduceerd — het 'anker' — de volledige verdere discussie beïnvloedt. Onderhandelen begint altijd vanuit het anker, zelfs als het volkomen willekeurig of extreem was.",
    abstractExample: "Gooi een dartpijl op een rad met willekeurige getallen. Vraag daarna: 'Hoeveel Afrikaanse landen zijn er in de VN?' De willekeurige waarde van het rad voorspelt het antwoord — ook al is het aantoonbaar irrelevant. Dit is het ankereffect.",
    examples: [
      { domain: "Vastgoed", icon: "🏠", text: "De vraagprijs van een huis is het anker voor de onderhandeling. Onderzoek toont dat een hogere vraagprijs leidt tot hogere verkoopprijzen — ook als het huis objectief hetzelfde waard is." },
      { domain: "Salaris", icon: "💰", text: "De eerste die een salarisgetal noemt in een onderhandeling, zet het anker. Als jij als eerste een hoog bedrag noemt, verschuift de hele discussie." },
      { domain: "Retail", icon: "🛒", text: "'Normaalprijs €299, nu €149' — de €299 is het anker dat €149 goedkoop laat lijken, ook als €149 de werkelijke marktwaarde is." }
    ],
  },
  {
    id: "door-in-face",
    title: "Deur-in-het-gezicht Techniek",
    difficulty: 2,
    emoji: "🔚",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Sociale Vaardigheden",
    definition: "De deur-in-het-gezicht techniek is de omgekeerde van voet-in-de-deur: begin met een extreem groot verzoek dat bijna zeker wordt geweigerd, doe dan een kleiner verzoek dat je eigenlijk wil. Door contrast en wederkerigheid stijgt de kans op instemming met het tweede verzoek.",
    abstractExample: "Je wil dat een vriend je helpt verhuizen (één dag). Je vraagt eerst of hij een week wil helpen bij een renovatie. Hij weigert. Dan vraag je of hij één dag wil helpen verhuizen. De kans op 'ja' is groter dan als je direct om één dag had gevraagd.",
    examples: [
      { domain: "Fondsenwerving", icon: "❤️", text: "Een fondsenwerver vraagt €500 aan een potentiële donor. Na weigering vraagt hij €50. De kans op €50-instemming is groter dan als hij direct om €50 had gevraagd — door contrast en wederkerigheid." },
      { domain: "Opvoeding", icon: "👨‍👩‍👧", text: "Een tiener vraagt of hij de hele nacht mag wegblijven (zeker nee). Dan vraagt hij of hij tot 1 uur mag blijven. De eerste weigering maakt de tweede concessie voor de ouder aantrekkelijker." },
      { domain: "Werk", icon: "💼", text: "Een werknemer vraagt zijn baas om een week thuiswerken (nee). Dan vraagt hij om twee dagen per week thuiswerken. De eerste weigering creëert een 'concessie' voor het kleinere verzoek." }
    ],
  },
  {
    id: "priming-effect",
    title: "Primingeffect",
    difficulty: 2,
    emoji: "🔑",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Kritisch Denken",
    definition: "Priming is het verschijnsel waarbij blootstelling aan één stimulus de verwerking van en reactie op een latere stimulus beïnvloedt — vaak buiten bewust bewustzijn. Onze gedachten, oordelen en gedragingen worden continu beïnvloed door recente ervaringen en context.",
    abstractExample: "Mensen die gevraagd worden een zin met het woord 'oud' te maken, lopen daarna langzamer de gang door. Mensen die een warme kop koffie vasthouden beoordelen anderen als 'warmer'. Dit is priming: context beïnvloedt gedrag zonder dat je het weet.",
    examples: [
      { domain: "Marketing", icon: "📢", text: "Supermarkten spelen langzame muziek om klanten langzamer te laten lopen en meer te laten kopen. Of Franse muziek in de wijnafdeling om Franse wijn te primen. Subtiele priming verhoogt verkopen." },
      { domain: "Werk", icon: "💼", text: "Een vergadering beginnen met positieve nieuwsberichten primet de groep voor constructief denken. Een vergadering beginnen met problemen primet defensief denken." },
      { domain: "Onderwijs", icon: "📚", text: "Studenten herinneren aan hun studenten-identiteit voor een toets verbetert prestaties. Herinneren aan stereotypen verslechtert dit — het 'stereotype threat' is een vorm van negatieve priming." }
    ],
  },

  // Batch Q – Ondernemerschap & Innovatie
  {
    id: "lean-startup",
    title: "Lean Startup",
    difficulty: 2,
    emoji: "🚀",
    academicCategory: "Bedrijfskunde",
    skillCategory: "Ondernemerschap & Innovatie",
    definition: "De Lean Startup-methode bouwt snel een minimaal werkbaar product (MVP), meet de reactie van echte gebruikers en leert van die data om te beslissen of je doorgaat of van richting verandert.",
    abstractExample: "In plaats van een jaar aan een perfect product te bouwen, lanceer je in zes weken een eenvoudige versie, kijk je wie het gebruikt en pas je aan op basis van wat je leert.",
    examples: [
      { domain: "Technologie", icon: "💻", text: "Een app-idee wordt eerst getest met een simpele landingspagina om te meten of mensen zich aanmelden, vóór een regel code wordt geschreven." },
      { domain: "Horeca", icon: "🍽️", text: "Een restaurantconcept wordt getest met een pop-up van één weekend voordat je een lang huurcontract tekent." },
      { domain: "Onderwijs", icon: "📚", text: "Een nieuwe cursus wordt eerst als live workshop gegeven voor vijf studenten om te zien wat werkt voordat het online platform wordt gebouwd." }
    ],
  },
  {
    id: "minimum-viable-product",
    title: "Minimaal Levensvatbaar Product",
    difficulty: 2,
    emoji: "🧪",
    academicCategory: "Bedrijfskunde",
    skillCategory: "Ondernemerschap & Innovatie",
    definition: "Een MVP is de meest basale versie van een product die genoeg waarde biedt om vroege gebruikers aan te trekken en waardevolle feedback te verzamelen voor verdere ontwikkeling.",
    abstractExample: "Een MVP is als een schets van een huis: gedetailleerd genoeg om feedback te krijgen over de indeling, maar zonder de dure bouw van muren en daken.",
    examples: [
      { domain: "Software", icon: "💻", text: "Dropbox begon met een eenvoudige demovideo om te testen of er vraag was naar cloudopslag, vóór het product technisch bestond." },
      { domain: "Fashion", icon: "👗", text: "Een kledingmerk test nieuwe stijlen door een kleine oplage van tien stuks te maken en die op markten te verkopen." },
      { domain: "Dienstverlening", icon: "🤝", text: "Een consultant biedt één specifieke dienst aan via een eenvoudige website voordat een volledig bureau wordt opgericht." }
    ],
  },
  {
    id: "pivot-persevere",
    title: "Pivotten of Doorzetten",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Bedrijfskunde",
    skillCategory: "Ondernemerschap & Innovatie",
    definition: "Op basis van wat je leert van gebruikers besluit je of je de huidige richting doorzet (persevere) of een fundamentele koerswijziging maakt (pivot) naar een kansrijkere aanpak.",
    abstractExample: "Een pivot is als een zeiler die de wind verkeerd inschat: je houdt hetzelfde doel (de bestemming), maar kiest een andere route om er toch te komen.",
    examples: [
      { domain: "Technologie", icon: "💻", text: "Instagram begon als een locatie-check-in app (Burbn) maar pivotteerde naar foto's delen toen bleek dat gebruikers alleen die functie gebruikten." },
      { domain: "Gaming", icon: "🎮", text: "Slack begon als een interne communicatietool voor een gamebedrijf dat mislukte, en werd gelanceerd als zelfstandig product." },
      { domain: "Retail", icon: "🛍️", text: "Een webshop voor hondenvoer stopt daarmee maar start met gepersonaliseerde huisdierabonnementen na feedback van trouwe klanten." }
    ],
  },
  {
    id: "design-thinking",
    title: "Design Thinking",
    difficulty: 2,
    emoji: "🎨",
    academicCategory: "Ontwerpleer",
    skillCategory: "Ondernemerschap & Innovatie",
    definition: "Design Thinking is een mensgerichte aanpak voor innovatie die empathie voor de gebruiker, creatief brainstormen, prototyping en testen combineert om oplossingen te vinden die écht werken.",
    abstractExample: "Design Thinking is als een detective die eerst de misdaadscène grondig onderzoekt (empathie), dan theorieën bedenkt (ideeën), een vermoeden test (prototype) en dan aanpasst op basis van bewijs.",
    examples: [
      { domain: "Gezondheidszorg", icon: "🏥", text: "Ziekenhuizen ontwerpen patiëntroutes door eerst een dag als patiënt mee te lopen en de emotionele reis in kaart te brengen." },
      { domain: "Onderwijs", icon: "📚", text: "Scholen herontwerpen de kantine door leerlingen te interviewen over wat ze écht vervelend vinden aan de lunchpauze." },
      { domain: "Productontwerp", icon: "🛠️", text: "IDEO ontwierp betere ziekenhuisbedsystemen door nachtdiensten van verpleegkundigen bij te wonen." }
    ],
  },
  {
    id: "opportunity-recognition",
    title: "Kansen Herkennen",
    difficulty: 1,
    emoji: "🔍",
    academicCategory: "Bedrijfskunde",
    skillCategory: "Ondernemerschap & Innovatie",
    definition: "Kansen herkennen is het vermogen om problemen, frustraties of inefficiënties in de wereld te zien als mogelijke basis voor een waardevol product, dienst of verbetering.",
    abstractExample: "Kansen herkennen is als een plumber die niet alleen een lekkende kraan ziet, maar ook beseft dat er een markt is voor preventief leidingonderhoud.",
    examples: [
      { domain: "Transport", icon: "🚕", text: "Uber ontstond doordat de oprichters op een koude avond geen taxi konden vinden in Parijs en zich afvroegen: 'Wat als je via een app direct een rit kon bestellen?'" },
      { domain: "Voeding", icon: "🥗", text: "HelloFresh herkende dat mensen gezond willen koken maar te druk zijn om te plannen en boodschappen te doen." },
      { domain: "Werkplek", icon: "🏢", text: "WeWork zag dat freelancers nood hadden aan professionele werkruimte zonder de hoge kosten van een kantoorhuur." }
    ],
  },
  {
    id: "value-proposition",
    title: "Waardepropositie",
    difficulty: 2,
    emoji: "💎",
    academicCategory: "Bedrijfskunde",
    skillCategory: "Ondernemerschap & Innovatie",
    definition: "Een waardepropositie is een heldere uitleg van hoe jouw product of dienst een specifiek klantprobleem oplost, welke voordelen het biedt en waarom de klant jou zou kiezen boven alternatieven.",
    abstractExample: "Een waardepropositie is als een eerste date: je legt in één zin uit wie je bent, wat je te bieden hebt en waarom dit de moeite waard is om verder te verkennen.",
    examples: [
      { domain: "Technologie", icon: "💻", text: "Zoom: 'Videovergaderen dat gewoon werkt' — eenvoudig, betrouwbaar, geen technische rompslomp." },
      { domain: "Financiën", icon: "💳", text: "Revolut: 'Bankieren voor de geglobaliseerde wereld' — geen wisselkosten, directe internationale overschrijvingen." },
      { domain: "Gezondheidszorg", icon: "🏥", text: "Een huisartsenpraktijk met avondopenstelling: 'Medische zorg die past bij jouw agenda, niet andersom.'" }
    ],
  },
  {
    id: "network-effects",
    title: "Netwerkeffecten",
    difficulty: 2,
    emoji: "🕸️",
    academicCategory: "Economie",
    skillCategory: "Ondernemerschap & Innovatie",
    definition: "Netwerkeffecten treden op wanneer een product of dienst waardevoller wordt naarmate meer mensen het gebruiken — elk nieuw lid vergroot de waarde voor alle bestaande leden.",
    abstractExample: "Een telefoon is nutteloos als jij de enige bent die er een heeft; elke nieuwe gebruiker maakt het netwerk voor iedereen waardevoller.",
    examples: [
      { domain: "Technologie", icon: "💻", text: "WhatsApp: hoe meer vrienden er zitten, hoe groter de reden voor anderen om ook te stappen." },
      { domain: "Marktplaatsen", icon: "🛍️", text: "Airbnb: meer hosts trekken meer reizigers aan, wat weer meer hosts aantrekt — een zichzelf versterkende cyclus." },
      { domain: "Betalen", icon: "💳", text: "Creditcards zijn waardevoller als meer winkels ze accepteren en meer klanten ze gebruiken." }
    ],
  },
  {
    id: "business-model-canvas",
    title: "Business Model Canvas",
    difficulty: 2,
    emoji: "📊",
    academicCategory: "Bedrijfskunde",
    skillCategory: "Ondernemerschap & Innovatie",
    definition: "Het Business Model Canvas is een strategisch hulpmiddel dat een businessmodel visualiseert in negen bouwblokken: klantsegmenten, waardepropositie, kanalen, klantrelaties, inkomstenstromen, sleutelbronnen, sleutelactiviteiten, sleutelpartners en kostenstructuur.",
    abstractExample: "Een Business Model Canvas is als een röntgenfoto van een bedrijf: het toont alle interne structuren tegelijkertijd op één pagina.",
    examples: [
      { domain: "Media", icon: "📺", text: "Netflix's canvas toont twee klantsegmenten (kijkers en contentmakers), meerdere inkomstenstromen en technologie als sleutelbron." },
      { domain: "Retail", icon: "🛒", text: "IKEA's canvas benadrukt zelfbouw als waardepropositie, gecombineerd met enorme inkoopkracht als sleutelbron." },
      { domain: "Onderwijs", icon: "📚", text: "Een online cursusplatform tekent apart de kanalen voor studenten (social media) en docenten (partnerschappen met universiteiten)." }
    ],
  },
  {
    id: "bootstrapping",
    title: "Bootstrappen",
    difficulty: 1,
    emoji: "👢",
    academicCategory: "Bedrijfskunde",
    skillCategory: "Ondernemerschap & Innovatie",
    definition: "Bootstrappen betekent een bedrijf starten en laten groeien met eigen middelen en inkomsten uit klanten, zonder externe investeerders of leningen — wat leidt tot maximale controle maar beperkt de groeisnelheid.",
    abstractExample: "Bootstrappen is als een boom kweken van een eikel die je zelf plant: het duurt langer dan een kant-en-klare boom kopen, maar de boom is helemaal van jou.",
    examples: [
      { domain: "Technologie", icon: "💻", text: "Basecamp (nu Hey) groeide jarenlang zonder externe investeerders en is nog steeds volledig in eigendom van de oprichters." },
      { domain: "Dienstverlening", icon: "🤝", text: "Een freelance designer bouwt een agency op door winst te herinvesteren in een eerste werknemer, dan een tweede." },
      { domain: "Retail", icon: "🛍️", text: "Een handgemaakt sieradenmerk verkoopt op Etsy, gebruikt die inkomsten om materialen te kopen en groeit maand voor maand." }
    ],
  },
  {
    id: "disruptive-innovation",
    title: "Disruptieve Innovatie",
    difficulty: 3,
    emoji: "💥",
    academicCategory: "Innovatiemanagement",
    skillCategory: "Ondernemerschap & Innovatie",
    definition: "Disruptieve innovatie beschrijft hoe kleinere bedrijven met eenvoudigere, goedkopere producten eerst de onderkant van de markt bedienen en geleidelijk de marktleiders verdringen die te veel focussen op hun beste klanten.",
    abstractExample: "Disruptieve innovatie is als water dat langzaam een rots uitholst: aanvankelijk lijkt het verwaarloosbaar, maar uiteindelijk verandert het de hele landschapsvorm.",
    examples: [
      { domain: "Media", icon: "📺", text: "Netflix begon met dvd-verhuur per post (goedkoper dan Blockbuster) en verdrong uiteindelijk de gehele videotheeksector." },
      { domain: "Fotografie", icon: "📷", text: "Digitale camera's begonnen als lagekwaliteitsalternatieven voor film, maar verbeterden snel en maakten analoge fotografie marginaal." },
      { domain: "Transport", icon: "🚗", text: "Uber en Lyft begonnen in niches die taxi's negeerden (luchthaventransport laat op de nacht) en veroverden de hele markt." }
    ],
  },

  // Batch R – Politiek & Bestuur
  {
    id: "separation-of-powers",
    title: "Machtenscheiding",
    difficulty: 2,
    emoji: "⚖️",
    academicCategory: "Politicologie",
    skillCategory: "Politiek & Bestuur",
    definition: "Machtenscheiding is het principe dat staatsmacht wordt verdeeld over drie onafhankelijke organen — wetgevende, uitvoerende en rechtsprekende macht — om machtsmisbruik te voorkomen.",
    abstractExample: "Net zoals een bedrijf drie onafhankelijke afdelingen heeft (directie, HR, juridisch) die elkaars beslissingen kunnen aanvechten, verdeelt een democratie macht om willekeur te voorkomen.",
    examples: [
      { domain: "Nederland", icon: "🇳🇱", text: "Het parlement maakt wetten, de minister-president voert ze uit, en de rechter toetst of ze in overeenstemming zijn met de grondwet." },
      { domain: "VS", icon: "🇺🇸", text: "Het Congres keurt wetten goed, de president tekent ze (of veto's ze), het Hooggerechtshof kan ze ongrondwettelijk verklaren." },
      { domain: "Bedrijfsleven", icon: "🏢", text: "Een goed bestuur heeft scheiding tussen directie (uitvoerend), raad van commissarissen (toezichthoudend) en externe accountant (controlerend)." }
    ],
  },
  {
    id: "public-goods-problem",
    title: "Het Publieke Goederen Probleem",
    difficulty: 2,
    emoji: "🌉",
    academicCategory: "Economie",
    skillCategory: "Politiek & Bestuur",
    definition: "Publieke goederen zijn niet-uitsluitbaar (je kunt niemand buitensluiten) en niet-rivaliserend (gebruik door de één vermindert het niet voor anderen) — waardoor de markt ze onderprovideert en overheidsinterventie nodig is.",
    abstractExample: "Een vuurtoren helpt alle schepen maar geen enkel schip kan worden buitengesloten van het licht; geen reder zal dus vrijwillig betalen, waarna niemand bouwt tenzij de overheid ingrijpt.",
    examples: [
      { domain: "Infrastructuur", icon: "🏗️", text: "Dijken in Nederland beschermen iedereen in een regio — je kunt niet alleen de betalers beschermen, dus de overheid organiseert en financiert het." },
      { domain: "Defensie", icon: "🛡️", text: "Militaire bescherming geldt voor alle burgers tegelijk; een privé-leger van één burger zou alle anderen gratis beschermen." },
      { domain: "Kennis", icon: "📖", text: "Basiswetenschappelijk onderzoek levert kennis op die iedereen kan gebruiken, waardoor overheden universiteiten subsidiëren." }
    ],
  },
  {
    id: "social-contract",
    title: "Sociaal Contract",
    difficulty: 3,
    emoji: "📜",
    academicCategory: "Politieke Filosofie",
    skillCategory: "Politiek & Bestuur",
    definition: "Het sociaal contract is de impliciete overeenkomst waarbij individuen bepaalde vrijheden opgeven aan een overheid in ruil voor bescherming, orde en collectieve diensten — de basis van politieke legitimiteit.",
    abstractExample: "Het sociaal contract is als een huisreglement: je geeft wat persoonlijke vrijheid op (geen lawaai na 22:00) in ruil voor een prettige leefomgeving voor iedereen.",
    examples: [
      { domain: "Belasting", icon: "💰", text: "Burgers betalen belasting (opgave van eigendom) in ruil voor wegen, onderwijs en veiligheid die de overheid levert." },
      { domain: "Wetgeving", icon: "⚖️", text: "Je geeft het recht op eigenrichting op in ruil voor een rechtssysteem dat conflicten oplost." },
      { domain: "Grondwet", icon: "📋", text: "Een grondwet legt het sociaal contract vast: wat de overheid mag, wat ze moet bieden en welke rechten onvervreemdbaar zijn." }
    ],
  },
  {
    id: "bureaucracy-theory",
    title: "Bureaucratie",
    difficulty: 2,
    emoji: "🗂️",
    academicCategory: "Bestuurskunde",
    skillCategory: "Politiek & Bestuur",
    definition: "Bureaucratie is een systeem van bestuur via vaste regels, hiërarchische structuren en gespecialiseerde ambtenaren — bedoeld voor consistentie en eerlijkheid, maar berucht om zijn inflexibiliteit.",
    abstractExample: "Een bureaucratie is als een strak geprogrammeerde robot: hij voert precies uit wat geprogrammeerd is, ook als de situatie vraagt om een andere aanpak.",
    examples: [
      { domain: "Overheid", icon: "🏛️", text: "Een belastingdienst past dezelfde regels toe op miljoen aangifte om eerlijkheid te garanderen, ook als individuele gevallen uniek zijn." },
      { domain: "Zorg", icon: "🏥", text: "Ziekenhuisbureaucratie zorgt dat elke patiënt dezelfde veiligheidsprotocollen doorloopt, ook al vertraagt dit soms urgente zorg." },
      { domain: "Onderwijs", icon: "📚", text: "Diploma-eisen zijn bureaucratisch gestandaardiseerd zodat een MBO-diploma overal in Nederland hetzelfde betekent." }
    ],
  },
  {
    id: "electoral-systems",
    title: "Kiesstelsels",
    difficulty: 2,
    emoji: "🗳️",
    academicCategory: "Politicologie",
    skillCategory: "Politiek & Bestuur",
    definition: "Kiesstelsels zijn de regels die bepalen hoe stemmen worden omgezet in politieke vertegenwoordiging — waarbij proportionele stelsels diversiteit bevorderen en meerderheidsstelsels stabiliteit.",
    abstractExample: "Een kiestelsel is als de spelregels van een wedstrijd: dezelfde uitslag (stemmen) kan leiden tot heel andere winnaars afhankelijk van hoe de punten worden geteld.",
    examples: [
      { domain: "Nederland", icon: "🇳🇱", text: "Proportionele vertegenwoordiging: 10% van de stemmen levert ~10% van de zetels op, wat leidt tot coalitieregeringen." },
      { domain: "UK", icon: "🇬🇧", text: "First-past-the-post: wie de meeste stemmen haalt in een district wint alles, wat vaak tweepartijenstelsels creëert." },
      { domain: "Duitsland", icon: "🇩🇪", text: "Gemengd stelsel: helft via directe districten, helft via lijsten — combineert lokale vertegenwoordiging met proportionaliteit." }
    ],
  },
  {
    id: "lobbying-interest-groups",
    title: "Lobbyisme",
    difficulty: 2,
    emoji: "🤝",
    academicCategory: "Politicologie",
    skillCategory: "Politiek & Bestuur",
    definition: "Lobbyisme is het systematisch beïnvloeden van politieke beslissingen door georganiseerde belangengroepen — een legitiem onderdeel van democratie maar met risico's voor gelijke vertegenwoordiging.",
    abstractExample: "Lobbyen is als een pleitbezorger in de rechtbank: je presenteert de sterkste argumenten voor jouw kant, maar de rechter (politicus) moet ook alle andere partijen horen.",
    examples: [
      { domain: "Farmacie", icon: "💊", text: "Farmaceutische bedrijven lobbyen voor lagere geneesmiddelenprijzen bij inkooponderhandelingen met overheden." },
      { domain: "Milieu", icon: "🌿", text: "Milieuorganisaties zoals Greenpeace lobbyen voor strengere klimaatregels door politici te informeren en campagne te voeren." },
      { domain: "Vakbonden", icon: "✊", text: "Vakbonden lobbyen voor hogere minimumlonen door onderhandelingen, stakingsacties en politieke druk." }
    ],
  },
  {
    id: "federalism",
    title: "Federalisme",
    difficulty: 2,
    emoji: "🗺️",
    academicCategory: "Politicologie",
    skillCategory: "Politiek & Bestuur",
    definition: "Federalisme is een staatsinrichtingsprincipe waarbij macht wordt verdeeld tussen een centrale overheid en decentrale eenheden (staten, provincies) die elk eigen bevoegdheden hebben.",
    abstractExample: "Federalisme is als een appartementencomplex: de VvE beslist over het dak en de lift, maar elke bewoner bepaalt zelf hoe zijn appartement is ingericht.",
    examples: [
      { domain: "Duitsland", icon: "🇩🇪", text: "De 16 Bundesländer hebben eigen parlementen en bepalen zelf onderwijs- en politiebeleid, terwijl federale wetten buitenlands beleid regelen." },
      { domain: "VS", icon: "🇺🇸", text: "Staten stellen eigen wetten vast over belastingen, abortus en drugs — vandaar grote verschillen tussen California en Texas." },
      { domain: "EU", icon: "🇪🇺", text: "De EU is een quasi-federale unie: lidstaten zijn soeverein maar hebben bevoegdheden overgedragen op gebieden als handel en mededinging." }
    ],
  },
  {
    id: "propaganda-techniques",
    title: "Propagandatechnieken",
    difficulty: 2,
    emoji: "📢",
    academicCategory: "Politicologie",
    skillCategory: "Politiek & Bestuur",
    definition: "Propagandatechnieken zijn methoden die worden gebruikt om publieke opinie te vormen via emotionele appeals, selectieve informatie en herhaling — vaak ten dienste van politieke of ideologische doelen.",
    abstractExample: "Propaganda is als een fotograaf die alleen de flattering angles van zijn onderwerp fotografeert: technisch accuraat maar misleidend in het totaalbeeld.",
    examples: [
      { domain: "Politiek", icon: "🗳️", text: "Het herhalen van 'de elite versus het volk' creëert een wij-zij-dynamiek die complexe politieke realiteit versimpelt tot vijanden." },
      { domain: "Reclame", icon: "📺", text: "Associatie van producten met gelukkige gezinnen en zonnige dagen gebruikt emotionele beelden om rationele aankopen te beïnvloeden." },
      { domain: "Oorlog", icon: "⚔️", text: "Vijandelijke soldaten worden als 'monsters' of 'onmensen' afgeschilderd om morele remmingen tegen geweld te verlagen." }
    ],
  },
  {
    id: "collective-action-problem",
    title: "Collectief Actieprobleem",
    difficulty: 3,
    emoji: "🚧",
    academicCategory: "Politieke Economie",
    skillCategory: "Politiek & Bestuur",
    definition: "Het collectief actieprobleem treedt op wanneer individuele rationele keuzes leiden tot een collectief slechte uitkomst — iedereen profiteert liever van andermans inzet zonder zelf bij te dragen.",
    abstractExample: "Als niemand zijn flat poetst omdat iedereen op de ander wacht, is de flat vies voor iedereen — terwijl iedereen een schone flat prefereert boven een vuile.",
    examples: [
      { domain: "Klimaat", icon: "🌍", text: "Elk land wil de voordelen van klimaatactie, maar prefereert dat andere landen de kosten dragen — waardoor collectief te weinig actie volgt." },
      { domain: "Vakbonden", icon: "✊", text: "Arbeiders profiteren van vakbondsonderhandelingen zonder lid te worden — als te velen dit doen, verzwakt de vakbond." },
      { domain: "Stemmen", icon: "🗳️", text: "Individueel heeft één stem nauwelijks invloed, waardoor sommigen rationeel kiezen om niet te stemmen, wat democratie ondermijnt." }
    ],
  },
  {
    id: "rule-of-law",
    title: "Rechtsstatelijkheid",
    difficulty: 2,
    emoji: "🏛️",
    academicCategory: "Rechtswetenschappen",
    skillCategory: "Politiek & Bestuur",
    definition: "Rechtsstatelijkheid is het principe dat iedereen — inclusief de overheid — gebonden is aan de wet; wetten worden transparant gemaakt, gelijkelijk toegepast en onafhankelijk gehandhaafd.",
    abstractExample: "Rechtsstatelijkheid is als een scheidsrechter bij voetbal die ook gele kaarten uitdeelt aan de thuisploeg: de regels gelden voor iedereen, ook de machtigen.",
    examples: [
      { domain: "Overheid", icon: "🏛️", text: "Ook een minister kan worden vervolgd als hij de wet overtreedt — zoals blijkt uit vervolgingen van politici in meerdere democratieën." },
      { domain: "Bedrijfsleven", icon: "💼", text: "Grote multinationals kunnen niet boven de wet staan: mededingingsautoriteiten bestraffen marktmisbruik ongeacht de bedrijfsgrootte." },
      { domain: "Burger", icon: "👤", text: "Elk individu heeft het recht op een eerlijk proces en kan de overheid aanvechten bij de rechter." }
    ],
  },

  // Batch S – Retorica & Taal
  {
    id: "ethos-pathos-logos",
    title: "Ethos, Pathos en Logos",
    difficulty: 2,
    emoji: "🎭",
    academicCategory: "Retorica",
    skillCategory: "Retorica & Taal",
    definition: "Aristoteles' drie overtuigingsmiddelen: ethos (geloofwaardigheid van de spreker), pathos (emotionele appeal) en logos (logische argumentatie) — een effectieve speech combineert alle drie.",
    abstractExample: "Een goede dokter overtuigt patiënten door zijn expertise te tonen (ethos), de emotionele impact van de ziekte te benoemen (pathos) en de statistische kansen te presenteren (logos).",
    examples: [
      { domain: "Politiek", icon: "🏛️", text: "Martin Luther King gebruikte zijn predicantsautoriteit (ethos), emotionele beelden van onderdrukking (pathos) en constitutionele argumenten (logos) in 'I Have a Dream'." },
      { domain: "Reclame", icon: "📺", text: "Een autoreclame met een beroemde autocoureur (ethos), opwindende beelden (pathos) en MPG-cijfers (logos) trekt drie soorten kopers aan." },
      { domain: "Sollicitatie", icon: "💼", text: "Een goede sollicitatiebrief toont relevante ervaring (ethos), passie voor het werk (pathos) en meetbare resultaten (logos)." }
    ],
  },
  {
    id: "rhetorical-devices",
    title: "Retorische Stijlfiguren",
    difficulty: 2,
    emoji: "✍️",
    academicCategory: "Retorica",
    skillCategory: "Retorica & Taal",
    definition: "Retorische stijlfiguren zijn taalkundige technieken die tekst krachtig, memorabel of overtuigend maken — van metafoor en analogie tot anafoor, chiasme en hyperbool.",
    abstractExample: "Stijlfiguren zijn als kruiden in de keuken: de maaltijd (je boodschap) is al aanwezig, maar de kruiden maken het smakelijk en onderscheidend.",
    examples: [
      { domain: "Politiek", icon: "🏛️", text: "Anafoor: Churchill's 'We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields' — herhaling bouwt ritme en kracht." },
      { domain: "Literatuur", icon: "📖", text: "Metafoor: 'Het leven is een reis' herstructureert hoe we over tijd, doelen en obstakels denken." },
      { domain: "Wetenschap", icon: "🔬", text: "Analogie: DNA uitleggen als een 'blauwdruk' of 'receptenboek' maakt abstracte biologie begrijpelijk voor leken." }
    ],
  },
  {
    id: "framing-language",
    title: "Framing via Taal",
    difficulty: 2,
    emoji: "🖼️",
    academicCategory: "Taalkunde",
    skillCategory: "Retorica & Taal",
    definition: "Framing via taal betekent dat de keuze van woorden, metaforen en categorisering de manier waarop mensen een situatie begrijpen en beoordelen fundamenteel beïnvloedt — dezelfde feiten kunnen heel anders overkomen.",
    abstractExample: "Een operatie met 90% overlevingskans klinkt anders dan dezelfde operatie met 10% sterftekans — de feiten zijn identiek, maar de framing verandert de beslissing.",
    examples: [
      { domain: "Politiek", icon: "🏛️", text: "'Belastingverlichting' frame suggerreert dat belasting een last is die verlicht moet worden; 'belastinghervorming' is neutraler." },
      { domain: "Milieu", icon: "🌿", text: "'Global warming' werd door sommigen vervangen door 'climate change' omdat het minder alarmerend klinkt." },
      { domain: "Marketing", icon: "🛍️", text: "'95% vetvrij' yoghurt verkoopt beter dan '5% vet' yoghurt — dezelfde voedingswaarde, ander frame." }
    ],
  },
  {
    id: "active-listening",
    title: "Actief Luisteren",
    difficulty: 1,
    emoji: "👂",
    academicCategory: "Communicatiewetenschappen",
    skillCategory: "Retorica & Taal",
    definition: "Actief luisteren is volledig aanwezig zijn bij wat iemand zegt — zonder mentaal alvast je antwoord te formuleren — en begrip tonen door samen te vatten, vragen te stellen en non-verbaal te reageren.",
    abstractExample: "Actief luisteren is als een spiegel die niet alleen reflecteert wat je zegt, maar ook de emotie achter je woorden teruggeeft.",
    examples: [
      { domain: "Therapie", icon: "🧠", text: "Een therapeut herhaalt: 'Dus als ik je goed begrijp, voel je je buitengesloten door je collega's ondanks je inspanningen?' — samenvatting en verificatie." },
      { domain: "Leiderschap", icon: "👔", text: "Een manager legt zijn telefoon weg, maakt oogcontact en vraagt door bij een medewerker die feedback geeft over werkdruk." },
      { domain: "Relaties", icon: "💑", text: "In een conflict wacht een partner tot de ander volledig uitgesproken is voordat hij reageert, en parafraseert dan het bezwaar." }
    ],
  },
  {
    id: "storytelling-structure",
    title: "Verhalenstructuur",
    difficulty: 1,
    emoji: "📖",
    academicCategory: "Narratologie",
    skillCategory: "Retorica & Taal",
    definition: "Effectieve verhalen volgen structuren zoals de drieaktsstructuur (begin-midden-einde) of de heldenreis: een protagonist staat voor een uitdaging, doorloopt transformatie en keert terug met inzicht.",
    abstractExample: "Een verhaal zonder structuur is als een reis zonder kaart: je kunt interessante dingen beleven, maar je publiek weet niet waar jullie naartoe gaan of wanneer jullie aankomen.",
    examples: [
      { domain: "Marketing", icon: "🛍️", text: "Airbnb-advertenties volgen de heldenreis: de reiziger (held) verlaat het gewone leven, ervaart avontuur via Airbnb, keert veranderd terug." },
      { domain: "Presentaties", icon: "🎤", text: "TED-talks beginnen met een provocerende vraag (conflict), bouwen naar een inzicht (transformatie) en sluiten met een call to action (resolutie)." },
      { domain: "Leiderschap", icon: "👔", text: "Een CEO vertelt de oorsprong van het bedrijf als heldenreis: de founders zagen een probleem, worstelden, vonden een oplossing — nu zijn jullie samen in dat avontuur." }
    ],
  },
  {
    id: "socratic-method",
    title: "Socratische Methode",
    difficulty: 2,
    emoji: "❓",
    academicCategory: "Filosofie",
    skillCategory: "Retorica & Taal",
    definition: "De Socratische methode is een vorm van samenwerking via vragen en antwoorden die aannames blootlegt, tegenstellingen ontdekt en tot dieper begrip leidt — zonder de antwoorden direct te geven.",
    abstractExample: "De Socratische methode is als een GPS die je niet vertelt waar je naartoe moet, maar vragen stelt die je helpen te ontdekken dat je al de weg weet.",
    examples: [
      { domain: "Onderwijs", icon: "📚", text: "Een leraar vraagt niet 'wat is democratie?' maar: 'Als je een beslissing moet nemen die iedereen raakt, wie mag er dan meebeslissen? En waarom?'" },
      { domain: "Coaching", icon: "🎯", text: "In plaats van 'je moet meer delegeren' vraagt een coach: 'Wat zou er gebeuren als je dit aan je team overliet? Wat houdt je tegen?'" },
      { domain: "Recht", icon: "⚖️", text: "Een advocaat gebruikt kruisvragen om inconsistenties in een getuigenverklaring bloot te leggen via een reeks gerichte vragen." }
    ],
  },
  {
    id: "euphemism-doublespeak",
    title: "Eufemisme en Dubbelspeak",
    difficulty: 2,
    emoji: "🎭",
    academicCategory: "Taalkunde",
    skillCategory: "Retorica & Taal",
    definition: "Eufemismen zijn zachte woorden voor harde realiteiten; dubbelspeak is taal die bewust verhult, misleidt of de realiteit vervormt — beide kunnen taal gebruiken om waarheid te verbergen.",
    abstractExample: "Een eufemisme is zoals 'hij is heengegaan' voor 'hij is dood': begrijpelijk en humaan. Dubbelspeak is zoals 'collateral damage' voor burgerslachtoffers: bewust verhullend.",
    examples: [
      { domain: "Militair", icon: "⚔️", text: "'Enhanced interrogation techniques' is dubbelspeak voor foltering — het klinkt technisch en bureaucratisch om de werkelijkheid te verhullen." },
      { domain: "Bedrijfsleven", icon: "💼", text: "'Right-sizing' of 'workforce optimization' zijn eufemismen voor ontslag — bedrijven vermijden het harde woord." },
      { domain: "Politiek", icon: "🏛️", text: "'Revenue enhancement' (belastingverhoging) en 'investment' (overheidsuitgaven) zijn politieke eufemismen om publieke weerstand te verminderen." }
    ],
  },
  {
    id: "debate-argumentation",
    title: "Debatteren en Argumenteren",
    difficulty: 2,
    emoji: "⚔️",
    academicCategory: "Retorica",
    skillCategory: "Retorica & Taal",
    definition: "Effectief debatteren vereist het opbouwen van sterke argumenten (stelling + bewijs + redenering), het anticiperen op tegenargumenten en het weerleggen ervan zonder de ander persoonlijk aan te vallen.",
    abstractExample: "Een goed debat is als een schaakpartij: je speelt je eigen stukken (argumenten) maar moet ook de zetten van je tegenstander (tegenargumenten) voorzien en weerleggen.",
    examples: [
      { domain: "Academisch", icon: "🎓", text: "In een academisch paper presenteer je bewust de sterkste tegenargumenten (steelmanning) voordat je ze weerleg — dit verhoogt je geloofwaardigheid." },
      { domain: "Rechtbank", icon: "⚖️", text: "Een advocaat structureert zijn pleidooi: stelling (mijn cliënt is onschuldig), bewijs (alibi), redenering (dus dit sluit schuld uit)." },
      { domain: "Bedrijf", icon: "💼", text: "In een boardroom-presentatie presenteer je de risico's van je voorstel zelf (voor anderen ze noemen) en leg je uit hoe je ze mitigeert." }
    ],
  },
  {
    id: "written-communication",
    title: "Effectief Schrijven",
    difficulty: 1,
    emoji: "✏️",
    academicCategory: "Communicatiewetenschappen",
    skillCategory: "Retorica & Taal",
    definition: "Effectief schrijven vereist helderheid (eenvoudige taal), structuur (logische volgorde), correctheid (juiste feiten) en aanpassing aan je doelgroep — het doel is dat de lezer precies begrijpt wat jij bedoelt.",
    abstractExample: "Goed schrijven is als een goede wegwijzer: hij vertelt niet alles over de reis, maar precies genoeg om je naar de juiste bestemming te leiden.",
    examples: [
      { domain: "Bedrijf", icon: "💼", text: "Een effectief rapport begint met de conclusie (niet de methode), gebruikt bullet points voor scanbaarheid en vermijdt jargon voor niet-experts." },
      { domain: "Email", icon: "📧", text: "Een goede zakelijke email heeft één duidelijk doel per bericht, een actie in de subject line en houdt de tekst onder 150 woorden." },
      { domain: "Academisch", icon: "🎓", text: "Een sterke academische essay begint met een stellige these, onderbouwt die met bewijs en erkent tegenargumenten." }
    ],
  },
  {
    id: "metaphor-cognition",
    title: "Metaforen en Cognitie",
    difficulty: 3,
    emoji: "🧠",
    academicCategory: "Cognitieve Taalkunde",
    skillCategory: "Retorica & Taal",
    definition: "Metaforen zijn niet alleen stijlfiguren maar fundamentele cognitieve structuren die bepalen hoe we abstracte concepten begrijpen — de metaforen die we gebruiken bepalen letterlijk hoe we denken.",
    abstractExample: "Als we 'een argument winnen' zeggen, denken we over argumenteren als oorlogsvoering. Als we 'samen bouwen aan een idee' zeggen, denken we als constructeurs samen werken — volkomen andere aanpak.",
    examples: [
      { domain: "Economie", icon: "💰", text: "De metafoor 'tijd is geld' structureert hoe we over vrije tijd denken (verspilling), vakantie (kostbaar) en efficiëntie (rendement)." },
      { domain: "Onderwijs", icon: "📚", text: "Studenten als 'lege containers' die gevuld worden versus studenten als 'planten die groeien' leiden tot compleet verschillende didactische aanpakken." },
      { domain: "Gezondheid", icon: "🏥", text: "'Kanker bestrijden' (militaire metafoor) versus 'omgaan met kanker' (acceptance-metafoor) beïnvloeden hoe patiënten hun ziekte ervaren." }
    ],
  },

  // Batch T – Statistiek & Dataredeneren
  {
    id: "correlation-causation",
    title: "Correlatie vs. Causaliteit",
    difficulty: 2,
    emoji: "🔗",
    academicCategory: "Statistiek",
    skillCategory: "Statistiek & Dataredeneren",
    definition: "Correlatie betekent dat twee variabelen samen variëren; causaliteit betekent dat de ene de andere veroorzaakt. Correlatie bewijst geen causaliteit — er kan een derde variabele zijn of de relatie kan toevallig zijn.",
    abstractExample: "IJsconsumptie en verdrinkingen correleren sterk — niet omdat ijs gevaarlijk is, maar omdat beide oplopen bij warm weer. De derde variabele (temperatuur) verklaart alles.",
    examples: [
      { domain: "Gezondheid", icon: "🏥", text: "Mensen die meer ziekenhuisbezoeken hebben, sterven vaker — maar dat betekent niet dat ziekenhuizen dodelijk zijn; ziekte is de gemeenschappelijke oorzaak." },
      { domain: "Economie", icon: "💰", text: "Landen met meer chocoladeconsumptie hebben meer Nobelprijswinnaars (echte data) — maar rijkdom (de derde variabele) verklaart beide." },
      { domain: "Onderwijs", icon: "📚", text: "Kinderen met meer boeken thuis presteren beter op school — maar rijkere ouders kopen meer boeken én zorgen ook voor betere educatie op andere manieren." }
    ],
  },
  {
    id: "regression-to-mean",
    title: "Regressie naar het Gemiddelde",
    difficulty: 2,
    emoji: "📉",
    academicCategory: "Statistiek",
    skillCategory: "Statistiek & Dataredeneren",
    definition: "Regressie naar het gemiddelde is het statistische verschijnsel dat extreme uitkomsten bij herhaalde meting tenderen naar het gemiddelde — mensen die uitzonderlijk goed of slecht scoren, presteren meestal gemiddeld bij de volgende meting.",
    abstractExample: "Een kind dat de slechtste toets scoort in de klas zal bij de volgende toets waarschijnlijk iets beter scoren — niet door interventie, maar puur door statistiek.",
    examples: [
      { domain: "Sport", icon: "⚽", text: "De 'Sports Illustrated vloek': topsporters op de cover presteren daarna vaak slechter — maar dit is regressie naar het gemiddelde, geen vloek." },
      { domain: "Management", icon: "👔", text: "Managers die medewerkers belonen voor excellente prestaties en straffen voor slechte, concluderen dat straf werkt beter — maar regressie verklaart de verbetering." },
      { domain: "Medisch", icon: "🏥", text: "Mensen zoeken medische hulp wanneer ze het ergst ziek zijn — na behandeling voelen ze zich beter, maar deels door regressie naar het gemiddelde, niet alleen de behandeling." }
    ],
  },
  {
    id: "base-rate-fallacy",
    title: "De Basispercentagefout",
    difficulty: 3,
    emoji: "📊",
    academicCategory: "Statistiek",
    skillCategory: "Statistiek & Dataredeneren",
    definition: "De basispercentagefout treedt op wanneer mensen specifieke informatie zwaarder wegen dan statistische basispercentages — waardoor ze de kans op een gebeurtenis systematisch overschatten of onderschatten.",
    abstractExample: "Een medische test met 99% nauwkeurigheid voor een ziekte die 1 op 10.000 mensen treft, geeft bij een positieve uitslag slechts ~1% kans dat je echt ziek bent — maar dit voelt contra-intuïtief.",
    examples: [
      { domain: "Medisch", icon: "🏥", text: "Een mammografie detecteert 80% van borstkankers maar geeft ook 10% vals-positieven. Bij zeldzame kanker (1 op 100) is een positieve uitslag vaker vals dan echt positief." },
      { domain: "Recht", icon: "⚖️", text: "DNA-bewijs met 1 op een miljoen kans op vals match klinkt overweldigend, maar als er een miljoen verdachten zijn, zijn er gemiddeld ook vals-matches." },
      { domain: "Vliegen", icon: "✈️", text: "Mensen vrezen vliegtuigongelukken meer dan auto-ongelukken ondanks dat vliegen veel veiliger is — het spectaculaire nieuws van een crash overschaduwt het basispercentage." }
    ],
  },
  {
    id: "p-value-significance",
    title: "P-waarden en Statistische Significantie",
    difficulty: 3,
    emoji: "🔬",
    academicCategory: "Statistiek",
    skillCategory: "Statistiek & Dataredeneren",
    definition: "Een p-waarde geeft de kans dat de waargenomen resultaten toevallig zijn als de nulhypothese klopt. P < 0.05 wordt conventioneel 'significant' genoemd, maar dit is een drempelwaarde, geen bewijs van werkelijk belang.",
    abstractExample: "Een p-waarde van 0.05 betekent: als er geen effect is, zou je dit resultaat in 1 op 20 experimenten toevallig zien. Dat is bewijs — maar geen zekerheid.",
    examples: [
      { domain: "Medisch", icon: "🏥", text: "Een medicijn heeft p = 0.04: bij toeval zou dit resultaat in 4% van de gevallen optreden als het medicijn niet werkt — geen bewijs van klinisch belang." },
      { domain: "Marketing", icon: "🛍️", text: "A/B-test toont p = 0.03 voor een nieuwe knopkleur — statistisch significant, maar het effect (0.01% meer clicks) is praktisch onbeduidend." },
      { domain: "Wetenschap", icon: "🔬", text: "De replicatiecrisis in psychologie toont dat veel 'significante' resultaten (p < 0.05) niet reproduceerbaar zijn door publicatiebias en p-hacking." }
    ],
  },
  {
    id: "survivorship-bias-data",
    title: "Overlevingsbias in Data",
    difficulty: 2,
    emoji: "🏆",
    academicCategory: "Statistiek",
    skillCategory: "Statistiek & Dataredeneren",
    definition: "Overlevingsbias treedt op wanneer analyses alleen de 'overlevers' (succesgevallen) bevatten en de mislukkingen negeert — waardoor succespatronen worden overschat en faalpatronen worden gemist.",
    abstractExample: "We bestuderen succesvolle bedrijven om te leren wat ze gemeen hebben — maar we vergeten te vragen: deden mislukte bedrijven hetzelfde maar hadden ze pech?",
    examples: [
      { domain: "Muziek", icon: "🎵", text: "Bekende muzikanten vertellen dat ze 10.000 uur oefenden en succesvol werden — maar talloze musici oefenden even hard en werden niet beroemd." },
      { domain: "Militair", icon: "✈️", text: "WWII: legerleiding wilde pantsering toevoegen aan beschadigde vliegtuigen — statisticus Abraham Wald wees erop dat je ook de neergestorte vliegtuigen moest analyseren die niet terugkwamen." },
      { domain: "Beleggen", icon: "📈", text: "Beursindexen bevatten alleen de bedrijven die overleven — bedrijven die failliet gaan verdwijnen uit de index, waardoor historische rendementen er rooskleuriger uitzien." }
    ],
  },
  {
    id: "data-visualization",
    title: "Datavisualisatie",
    difficulty: 1,
    emoji: "📊",
    academicCategory: "Statistiek",
    skillCategory: "Statistiek & Dataredeneren",
    definition: "Datavisualisatie is het omzetten van numerieke informatie in visuele representaties die patronen, trends en relaties direct zichtbaar maken — maar kunnen ook misleiden als de schaal of context onjuist is.",
    abstractExample: "Een grafiek is als een kaart: het maakt de complexe werkelijkheid begrijpelijk, maar de kaartenmaker kiest wat te tonen en hoe — die keuzes beïnvloeden de interpretatie.",
    examples: [
      { domain: "Media", icon: "📺", text: "Een staafdiagram dat niet bij nul begint maakt kleine verschillen dramatisch groot lijken — een veelgebruikte misleidingstechniek in nieuwsgraphics." },
      { domain: "Wetenschap", icon: "🔬", text: "Edward Tufte's 'sparklines' comprimeren complexe tijdreeksen tot miniatuurgrafieken die direct in tekst leesbaar zijn." },
      { domain: "Beleid", icon: "🏛️", text: "Een warmtekaart van coronabesmettingen per regio maakt in één oogopslag zichtbaar welke gebieden het hardst geraakt zijn." }
    ],
  },
  {
    id: "sampling-bias",
    title: "Steekproefbias",
    difficulty: 2,
    emoji: "🎯",
    academicCategory: "Statistiek",
    skillCategory: "Statistiek & Dataredeneren",
    definition: "Steekproefbias treedt op wanneer de groep die je onderzoekt systematisch afwijkt van de populatie die je wil begrijpen — waardoor conclusies niet generaliseerbaar zijn.",
    abstractExample: "Als je vraagt aan mensen op een sportschool of ze genoeg bewegen, zal je antwoord heel anders zijn dan als je willekeurige voorbijgangers vraagt — je steekproef is al geselecteerd.",
    examples: [
      { domain: "Politiek", icon: "🗳️", text: "Telefonische peilingen bereiken geen jongeren zonder vaste lijn — waardoor peilingen de mening van ouderen oververtegenwoordigen." },
      { domain: "Medisch", icon: "🏥", text: "Klinische trials met voornamelijk witte mannen als deelnemers leveren behandelingen op die minder goed werken voor vrouwen en andere groepen." },
      { domain: "Tech", icon: "💻", text: "Gezichtsherkenningssystemen getraind op voornamelijk lichte gezichten functioneren slechter bij donkerdere huidtinten." }
    ],
  },
  {
    id: "effect-size",
    title: "Effect Grootte",
    difficulty: 2,
    emoji: "📏",
    academicCategory: "Statistiek",
    skillCategory: "Statistiek & Dataredeneren",
    definition: "Effect grootte meet hoe groot of praktisch belangrijk een statistisch gevonden verschil is — los van statistische significantie. Een klein p-waarde garandeert niet dat het effect groot genoeg is om praktisch relevant te zijn.",
    abstractExample: "Een nieuwe leesmethode verhoogt gemiddelde scores met 0.3 punten (p = 0.001): statistisch significant, maar is 0.3 punt verbetering de kosten van een heel nieuwe methode waard?",
    examples: [
      { domain: "Medisch", icon: "🏥", text: "Een medicijn vermindert bloeddruk met 2 mmHg (statistisch significant bij grote groepen) — maar dit heeft nauwelijks klinische betekenis voor individuele patiënten." },
      { domain: "Onderwijs", icon: "📚", text: "Meta-analyses meten Cohen's d om te vergelijken welke interventies werkelijk grote leereffecten hebben vs. statistisch significante maar kleine verbeteringen." },
      { domain: "Marketing", icon: "🛍️", text: "A/B-test toont 0.1% hogere conversie (p < 0.001) bij miljoen bezoekers — statistisch significant, maar is de aanpassing de ontwikkelkosten waard?" }
    ],
  },
  {
    id: "anecdote-vs-data",
    title: "Anekdote versus Data",
    difficulty: 1,
    emoji: "📝",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Statistiek & Dataredeneren",
    definition: "Een anekdote is een persoonlijk verhaal of individueel geval; data is systematisch verzamelde informatie over een groep. Anekdotes zijn krachtig voor illustratie maar kunnen geen statistische patronen vervangen als bewijs.",
    abstractExample: "Mijn oma rookte elke dag en werd 95 — dit anekdote weerlegt niet de statistische realiteit dat roken de levensverwachting gemiddeld met tien jaar verkort.",
    examples: [
      { domain: "Gezondheid", icon: "🏥", text: "Een vriend die genas van kanker na een dieet bewijst niet dat het dieet kanker geneest — individuele gevallen zijn geen statistische studies." },
      { domain: "Economie", icon: "💰", text: "'Ik ken een immigrant die succesvol is' en 'de meeste immigranten integreren goed' zijn beide valide observaties op verschillende niveaus." },
      { domain: "Beleid", icon: "🏛️", text: "Politici gebruiken hartverscheurende individuele gevallen om beleid te bepleiten — wetgeving moet echter gegrond zijn op hoe de wet de brede bevolking beïnvloedt." }
    ],
  },
  {
    id: "a-b-testing",
    title: "A/B-testen",
    difficulty: 2,
    emoji: "🧪",
    academicCategory: "Experimenteel Onderzoek",
    skillCategory: "Statistiek & Dataredeneren",
    definition: "A/B-testen is het vergelijken van twee varianten (A en B) door ze tegelijkertijd aan willekeurig geselecteerde groepen aan te bieden, om te meten welke variant beter presteert op een gedefinieerde metriek.",
    abstractExample: "A/B-testen is als twee versies van een recept serveren aan twee willekeurige tafels in een restaurant en meten welke gasten meer opeten.",
    examples: [
      { domain: "Website", icon: "💻", text: "Amazon test constant knopkleuren, teksten en layouts op willekeurige bezoekers — kleine verbeteringen bij miljarden bezoekers zijn enorme omzetverhogingen." },
      { domain: "Email", icon: "📧", text: "Een nieuwsbrief test twee onderwerpregels bij 10% van de lijst, stuurt de winnaar naar de rest — data bepaalt de beste formulering." },
      { domain: "Beleid", icon: "🏛️", text: "Gedragseconomen testen via gerandomiseerde trials welke formulering van belastingherinneringen de hoogste betalingsratio oplevert." }
    ],
  },

  // Batch U – Geschiedenis & Tijd
  {
    id: "historical-cycles",
    title: "Historische Cycli",
    difficulty: 3,
    emoji: "🔄",
    academicCategory: "Geschiedenis",
    skillCategory: "Geschiedenis & Tijd",
    definition: "Historische cycli zijn terugkerende patronen in de menselijke geschiedenis — zoals Turchin's seculaire cycli van politieke instabiliteit — die suggereren dat geschiedenis geen rechte lijn is maar ritmische golven.",
    abstractExample: "Net zoals golven op zee steeds terugkomen zonder precies hetzelfde te zijn, vertoont de geschiedenis cycli van opkomst, bloei, verval en hergeboorte in naties en beschavingen.",
    examples: [
      { domain: "Politiek", icon: "🏛️", text: "Grote rijken (Romeins, Mongools, Brits) vertonen vergelijkbare groeicycli van expansie, hoogtepunt en fragmentatie over 200-400 jaar." },
      { domain: "Economie", icon: "💰", text: "Kondratieff-cycli beschrijven ~50-jarige economische golven van innovatie, groei, verzadiging en depressie die elke halve eeuw terugkeren." },
      { domain: "Democratie", icon: "🗳️", text: "Democratieën vertonen cycli van liberalisering (burgerrechten uitbreiden) en conservatieve reactie die om de generaties lijken te slingeren." }
    ],
  },
  {
    id: "path-dependency",
    title: "Padafhankelijkheid",
    difficulty: 2,
    emoji: "🛤️",
    academicCategory: "Economische Geschiedenis",
    skillCategory: "Geschiedenis & Tijd",
    definition: "Padafhankelijkheid beschrijft hoe vroegere keuzes en omstandigheden de huidige opties beperken — zelfs als de oorspronkelijke redenen voor die keuzes al lang niet meer relevant zijn.",
    abstractExample: "De breedte van moderne treinsporen is gebaseerd op de breedte van Engelse wagens uit de 19e eeuw, die was gebaseerd op paardensporen uit de Middeleeuwen — antieke beslissingen bepalen moderne infrastructuur.",
    examples: [
      { domain: "Technologie", icon: "💻", text: "QWERTY-toetsenbord: ontworpen om typemachinestoring te voorkomen, maar nu onmogelijk te vervangen ondanks ergonomisch betere alternatieven bestaan." },
      { domain: "Recht", icon: "⚖️", text: "Grondwetten zijn padafhankelijk: de Amerikaanse grondwet van 1787 beperkt en vormt hoe 21e-eeuwse wetgeving eruitziet." },
      { domain: "Bedrijf", icon: "💼", text: "Veel bedrijven gebruiken verouderde software niet vanwege kwaliteit maar vanwege de enorme kosten van migratie — path lock-in." }
    ],
  },
  {
    id: "great-man-vs-forces",
    title: "Grote Mannen vs. Historische Krachten",
    difficulty: 3,
    emoji: "⚔️",
    academicCategory: "Geschiedfilosofie",
    skillCategory: "Geschiedenis & Tijd",
    definition: "Het 'grote mannen'-debat vraagt of geschiedenis wordt gevormd door uitzonderlijke individuen of door diepere structurele krachten (economie, technologie, klimaat) — een spanning tussen agency en determinisme.",
    abstractExample: "Had Hitler Duitsland geregeerd als de Grote Depressie niet had plaatsgevonden? Had Napoleon de Franse Revolutie kunnen vervangens als hij niet bestond? Kon het niet zonder de contextuele krachten?",
    examples: [
      { domain: "Politiek", icon: "🏛️", text: "Napoleon was een buitengewoon leider — maar historici debatteren in hoeverre de Franse Revolutie iemand als Napoleon 'produceerde' ongeacht de persoon." },
      { domain: "Wetenschap", icon: "🔬", text: "Darwin en Wallace kwamen onafhankelijk tot de evolutietheorie — suggererende dat de 'tijd rijp' was voor die ontdekking los van de persoon." },
      { domain: "Technologie", icon: "💻", text: "Had een andere persoon dan Steve Jobs Apple kunnen leiden? Of zorgden de technologische en markttrends voor een succesvolle iPhone-variant hoe dan ook?" }
    ],
  },
  {
    id: "long-term-thinking",
    title: "Langtermijndenken",
    difficulty: 2,
    emoji: "🔭",
    academicCategory: "Filosofie",
    skillCategory: "Geschiedenis & Tijd",
    definition: "Langtermijndenken is het vermogen om beslissingen te nemen door de gevolgen op een tijdschaal van jaren, decennia of generaties te overwegen — niet alleen de directe kortetermijnvoordelen.",
    abstractExample: "Langtermijndenken is als een boer die in de herfst zaait voor de volgende zomer: kortetermijnkosten (zaaigoed, arbeid) voor langetermijnwinst (oogst).",
    examples: [
      { domain: "Milieu", icon: "🌍", text: "Finland plant bomen die pas over 80 jaar gekapt worden — een langtermijninvestering die hedendaagse generaties niet zelf zullen oogsten." },
      { domain: "Onderwijs", icon: "📚", text: "Investeren in kleuterschooleducatie levert de hoogste economische rendementen op — maar pas na 15-25 jaar, buiten de politieke cyclus van 4 jaar." },
      { domain: "Bedrijf", icon: "💼", text: "Amazon verloor jarenlang geld om marktpositie op te bouwen — Bezos' 'long-term greed' strategie betaalde zich terug over decennia." }
    ],
  },
  {
    id: "presentism-bias",
    title: "Presentismebias",
    difficulty: 2,
    emoji: "⏰",
    academicCategory: "Geschiedenis",
    skillCategory: "Geschiedenis & Tijd",
    definition: "Presentismebias is het beoordelen van historische mensen, acties of normen met hedendaagse morele maatstaven — zonder rekening te houden met de historische context en de kennis die toen beschikbaar was.",
    abstractExample: "Aristoteles verdedigde slavernij — maar hem met dezelfde morele ernst veroordelen als een moderne slavenhouder negeert dat zijn gehele culturele context fundamenteel anders was.",
    examples: [
      { domain: "Wetenschap", icon: "🔬", text: "Medici die bloedlaten toepasten deden dit conform de beste beschikbare kennis — ze 'wisten' niet beter, en zijn daarin te onderscheiden van wie nu bloedlaten zou toepassen." },
      { domain: "Politiek", icon: "🏛️", text: "Koloniale figuren uit de 18e eeuw oordelen naar 21e-eeuwse mensenrechtsstandaarden negeert dat die standaarden zelf een historisch product zijn." },
      { domain: "Kunst", icon: "🎨", text: "Kunstwerken die vandaag als stereotyperend worden gezien, werden in hun tijd soms als progressief of neutraal beschouwd." }
    ],
  },
  {
    id: "generational-theory",
    title: "Generatietheorie",
    difficulty: 2,
    emoji: "👥",
    academicCategory: "Sociologie",
    skillCategory: "Geschiedenis & Tijd",
    definition: "Generatietheorie beschrijft hoe de omstandigheden tijdens de opgroeifase (economisch, cultureel, politiek) een generatie vormen met gedeelde waarden, attitudes en gedragspatronen die verschijnen van andere generaties.",
    abstractExample: "Een generatie die als kind een economische depressie meemaakte, zal spaarzamer zijn dan een generatie die opgroeide in welvaart — ongeacht individuele persoonlijkheid.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Babyboomers valoriseren loyaliteit aan één werkgever; millennials prefereren flexibiliteit en purpose — verschil in opgroeicondities, niet karakter." },
      { domain: "Politiek", icon: "🏛️", text: "Generaties die oorlog meemaakten steunen vaker internationale samenwerking; generaties die vrede kenden zijn sceptischer over haar kosten." },
      { domain: "Technologie", icon: "💻", text: "Digital natives (geboren na 1995) hebben fundamenteel andere verwachtingen van privacynormen dan digital immigrants die voor het internet opgroeiden." }
    ],
  },
  {
    id: "primary-secondary-sources",
    title: "Primaire en Secundaire Bronnen",
    difficulty: 1,
    emoji: "📜",
    academicCategory: "Historiografie",
    skillCategory: "Geschiedenis & Tijd",
    definition: "Primaire bronnen zijn directe getuigenissen of artefacten uit de bestudeerde periode (dagboeken, wetten, foto's); secundaire bronnen zijn interpretaties en analyses van primaire bronnen door historici.",
    abstractExample: "Een brief van Anne Frank is een primaire bron; een historisch boek over de Holocaust dat die brief analyseert is een secundaire bron — beide zijn waardevol maar op verschillende manieren.",
    examples: [
      { domain: "Geschiedenis", icon: "📚", text: "De dagboeken van Samuel Pepys zijn een primaire bron voor het dagelijks leven in 17e-eeuws Londen; een biografie over hem is secundair." },
      { domain: "Recht", icon: "⚖️", text: "Een rechtbankuitspraak is primair; een rechtswetenschappelijk artikel dat de uitspraak bespreekt is secundair." },
      { domain: "Wetenschap", icon: "🔬", text: "Een origineel wetenschappelijk artikel (paper) is primair; een review-artikel dat meerdere studies samenvat is secundair." }
    ],
  },
  {
    id: "historiography",
    title: "Historiografie",
    difficulty: 3,
    emoji: "📚",
    academicCategory: "Geschiedenis",
    skillCategory: "Geschiedenis & Tijd",
    definition: "Historiografie is de studie van hoe geschiedenis wordt geschreven — welke vragen historici stellen, welke bronnen ze gebruiken, welke interpretaties ze bieden — en hoe deze veranderen over tijd en cultuur.",
    abstractExample: "Dezelfde Eerste Wereldoorlog werd in de 1920s beschreven als 'de oorlog om oorlogen te beëindigen', in de 1960s als imperialistisch avontuur en in de 2010s als systeemfalen — de feiten veranderden niet, de vragen wel.",
    examples: [
      { domain: "Koloniaal verleden", icon: "🌍", text: "Kolonialisme werd door Europese historici lange tijd als 'beschavingsmissie' beschreven; postkoloniale historici beschrijven het als exploitatie en geweld." },
      { domain: "Gendergeschiedenis", icon: "♀️", text: "Traditionele geschiedschrijving focuste op mannen en macht; feminist history bracht vrouwen, huishouden en dagelijks leven in beeld." },
      { domain: "Lokale geschiedenis", icon: "🏘️", text: "Nationale geschiedenissen worden uitgedaagd door lokale en regionale perspectieven die andere ervaringen documenteren." }
    ],
  },
  {
    id: "black-swan-events",
    title: "Zwarte Zwaan Gebeurtenissen",
    difficulty: 2,
    emoji: "🦢",
    academicCategory: "Risicobeheer",
    skillCategory: "Geschiedenis & Tijd",
    definition: "Zwarte Zwanen (Nassim Taleb) zijn zeldzame, extreem impactvolle gebeurtenissen die achteraf als voorspelbaar worden verklaard maar vóóraf nauwelijks te voorzien waren — ze domineren de loop van de geschiedenis.",
    abstractExample: "Vóór 1697 geloofde Europa dat alle zwanen wit waren — totdat Australische zwanen werden ontdekt. Eén observatie vernietigde eeuwen van aanname.",
    examples: [
      { domain: "Technologie", icon: "💻", text: "Het internet veranderde de mondiale samenleving fundamenteel — weinigen voorspelden in 1990 de impact die het in 2000 zou hebben." },
      { domain: "Gezondheid", icon: "🏥", text: "COVID-19 was technisch voorspelbaar (pandemieexperts waarschuwden) maar werd toch een verrassing voor de wereldwijde economie en politiek." },
      { domain: "Financieel", icon: "📈", text: "De financiële crisis van 2008 werd door risicomodellen niet voorzien omdat die gebaseerd waren op historische normale distributies." }
    ],
  },
  {
    id: "time-preference",
    title: "Tijdpreferentie",
    difficulty: 2,
    emoji: "⏳",
    academicCategory: "Economie",
    skillCategory: "Geschiedenis & Tijd",
    definition: "Tijdpreferentie beschrijft de mate waarin mensen huidige beloningen boven toekomstige beloningen prefereren — hoge tijdpreferentie betekent 'nu genieten', lage tijdpreferentie betekent bereid zijn te wachten voor grotere toekomstige winst.",
    abstractExample: "Het Stanford marshmallow-experiment: kinderen die één marshmallow konden nemen of wachten voor twee. Hoge tijdpreferentie: neem het nu. Lage tijdpreferentie: wacht en krijg meer.",
    examples: [
      { domain: "Financiën", icon: "💰", text: "Pensioensparen vereist lage tijdpreferentie: je geeft nu koopkracht op voor een beter leven over 30 jaar." },
      { domain: "Onderwijs", icon: "📚", text: "Een opleiding kost nu jaren en geld — de beloning (hoger inkomen) materialiseert pas jaren later." },
      { domain: "Maatschappij", icon: "🌍", text: "Samenlevingen met lage tijdpreferentie investeren meer in infrastructuur, onderwijs en onderzoek die generaties later renderen." }
    ],
  },

  // Batch V – Recht & Rechtvaardigheid
  {
    id: "presumption-of-innocence",
    title: "Onschuldpresumptie",
    difficulty: 1,
    emoji: "⚖️",
    academicCategory: "Rechtswetenschappen",
    skillCategory: "Recht & Rechtvaardigheid",
    definition: "De onschuldpresumptie houdt in dat iemand onschuldig wordt geacht totdat zijn schuld buiten redelijke twijfel is bewezen — de bewijslast ligt bij de aanklager, niet bij de verdachte.",
    abstractExample: "Een onbekende vliegtuigtekening veronderstelt dat een vliegtuig vliegt totdat bewijs van een defect overtuigend aantoont dat het gevaarlijk is — veiligheid vereist de omgekeerde last.",
    examples: [
      { domain: "Strafrecht", icon: "⚖️", text: "In een strafproces hoeft een verdachte niet te bewijzen dat hij onschuldig is; de aanklager moet schuld aantonen." },
      { domain: "Arbeidsrecht", icon: "💼", text: "Een werknemer die van diefstal wordt beschuldigd heeft recht op een eerlijk onderzoek voordat disciplinaire maatregelen worden genomen." },
      { domain: "Social media", icon: "📱", text: "Online beschuldigingen zonder bewijs die reputaties vernietigen schenden de geest van de onschuldpresumptie buiten de rechtszaal." }
    ],
  },
  {
    id: "burden-of-proof",
    title: "Bewijslast",
    difficulty: 2,
    emoji: "🔍",
    academicCategory: "Rechtswetenschappen",
    skillCategory: "Recht & Rechtvaardigheid",
    definition: "De bewijslast is de verplichting van degene die een bewering doet om die bewering te onderbouwen met bewijs — 'wie stelt, bewijst'. Het niveau van vereist bewijs verschilt per context (strafrecht vs. civiel recht).",
    abstractExample: "Als iemand beweert dat eenhoorns bestaan, is het niet aan sceptici om te bewijzen dat ze niet bestaan — de bewering vereist bewijs van degene die hem doet.",
    examples: [
      { domain: "Strafrecht", icon: "⚖️", text: "'Beyond reasonable doubt' (buiten redelijke twijfel) is de hoge standaard voor schuldigverklaring in strafzaken — ~95%+ zekerheid." },
      { domain: "Civiel recht", icon: "📋", text: "'Preponderance of evidence' (overwicht van bewijs) is de lagere standaard in civiele zaken — meer dan 50% aannemelijk." },
      { domain: "Wetenschap", icon: "🔬", text: "In wetenschap draagt degene die een nieuwe claim maakt de bewijslast — anderen hoeven niets te doen totdat positief bewijs wordt geleverd." }
    ],
  },
  {
    id: "restorative-justice",
    title: "Herstelrecht",
    difficulty: 2,
    emoji: "🤝",
    academicCategory: "Criminologie",
    skillCategory: "Recht & Rechtvaardigheid",
    definition: "Herstelrecht is een benadering van gerechtigheid die focust op het herstel van schade aan slachtoffers, gemeenschappen en daders — in plaats van uitsluitend op straf en vergelding.",
    abstractExample: "Herstelrecht is als een gebroken vaas herstellen: in plaats van de persoon die hem brak te straffen, zoek je samen naar hoe de vaas gerepareerd en de relatie hersteld kan worden.",
    examples: [
      { domain: "School", icon: "📚", text: "Na pesten op school praten dader en slachtoffer onder begeleiding over de impact, zoeken herstel en maken gezamenlijke afspraken." },
      { domain: "Criminologie", icon: "⚖️", text: "Maori-geïnspireerde Family Group Conferencing in Nieuw-Zeeland laat daders, slachtoffers en gemeenschap samen herstelplannen maken." },
      { domain: "Werkplek", icon: "💼", text: "Na een conflict op de werkvloer mediatie waarbij beide partijen hun impact benoemen en samen naar oplossingen zoeken." }
    ],
  },
  {
    id: "proportionality-principle",
    title: "Proportionaliteitsbeginsel",
    difficulty: 2,
    emoji: "⚖️",
    academicCategory: "Rechtswetenschappen",
    skillCategory: "Recht & Rechtvaardigheid",
    definition: "Het proportionaliteitsbeginsel vereist dat straffen, maatregelen of ingrepen evenredig zijn aan de ernst van het vergrijp of het doel dat nagestreefd wordt — overreactie is ongerechtvaardigd.",
    abstractExample: "Een verkeersboete voor 5 km/u te hard rijden is proportioneel; rijbewijs intrekken voor dezelfde overtreding is dat niet — de straf moet overeenstemmen met de ernst.",
    examples: [
      { domain: "Strafrecht", icon: "⚖️", text: "Minimumstraffen die geen rekening houden met verzachtende omstandigheden worden bekritiseerd als disproportioneel." },
      { domain: "Internationaal recht", icon: "🌍", text: "Militaire vergeldingsacties moeten proportioneel zijn aan de aanval — massabombardementen als reactie op één aanval schenden dit beginsel." },
      { domain: "Arbeidsrecht", icon: "💼", text: "Ontslag wegens kleine administratieve fout is disproportioneel als een waarschuwing voldoende was geweest." }
    ],
  },
  {
    id: "natural-law",
    title: "Natuurrecht",
    difficulty: 3,
    emoji: "🌿",
    academicCategory: "Rechtsfilosofie",
    skillCategory: "Recht & Rechtvaardigheid",
    definition: "Natuurrecht is de theorie dat er universele morele principes bestaan die onafhankelijk zijn van menselijke wetgeving — wetten die deze schenden zijn onrechtvaardig, zelfs als ze legaal zijn.",
    abstractExample: "Als een wet voorschrijft dat je onschuldige mensen moet doden, is het volgen van die wet moreel onjuist — er bestaat een hogere morele wet boven de positieve wet.",
    examples: [
      { domain: "Mensenrechten", icon: "🌍", text: "De Universele Verklaring van de Rechten van de Mens berust op de idee dat sommige rechten universeel en onvervreemdbaar zijn — onafhankelijk van nationale wetgeving." },
      { domain: "Neurenberg", icon: "⚖️", text: "Nazi-officieren konden 'ik volgde orders' niet als verdediging gebruiken — het tribunaal erkende een hogere wet boven nationale wetgeving." },
      { domain: "Burgerrechten", icon: "✊", text: "Martin Luther King rechtvaardigde civiele ongehoorzaamheid via natuurrecht: onrechtvaardige wetten zijn geen ware wetten." }
    ],
  },
  {
    id: "due-process",
    title: "Zorgvuldige Rechtsprocedure",
    difficulty: 2,
    emoji: "📋",
    academicCategory: "Rechtswetenschappen",
    skillCategory: "Recht & Rechtvaardigheid",
    definition: "Zorgvuldige rechtsprocedure (due process) is het principe dat de overheid bij ingrijpen in rechten van burgers vastgestelde, eerlijke procedures moet volgen — bescherming tegen willekeurig overheidsoptreden.",
    abstractExample: "Due process is als de spelregels van een bordspel: zelfs als je verliest, moet het spel eerlijk zijn gespeeld — de uitkomst is minder belangrijk dan de rechtmatigheid van het proces.",
    examples: [
      { domain: "Strafrecht", icon: "⚖️", text: "Een verdachte heeft recht op een advocaat, het recht om getuigen te horen en het recht op een onpartijdige rechter — voor en tijdens het proces." },
      { domain: "Bestuursrecht", icon: "🏛️", text: "Een ambtenaar die wordt ontslagen heeft recht op informatie over de redenen en de mogelijkheid om zich te verdedigen voordat het besluit definitief is." },
      { domain: "Onderwijs", icon: "📚", text: "Een student die van plagiaat wordt beschuldigd heeft recht op een eerlijk disciplinair onderzoek met mogelijkheid tot verweer." }
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectueel Eigendom",
    difficulty: 2,
    emoji: "©️",
    academicCategory: "Rechtswetenschappen",
    skillCategory: "Recht & Rechtvaardigheid",
    definition: "Intellectueel eigendom (IE) zijn juridische rechten die creaties van de geest beschermen: auteursrecht (kunstwerken), patent (uitvindingen), handelsmerk (merknamen) en handelsgeheimen — een balans tussen incentive en publieke toegang.",
    abstractExample: "IE-rechten zijn als een tijdelijke monopolie: de samenleving geeft de uitvinder exclusieve rechten voor een beperkte tijd in ruil voor openbaarmaking van de uitvinding.",
    examples: [
      { domain: "Muziek", icon: "🎵", text: "Componisten ontvangen auteursrecht: niemand mag hun muziek commercieel gebruiken zonder toestemming gedurende 70 jaar na hun dood." },
      { domain: "Farmaceutisch", icon: "💊", text: "Patenten op medicijnen geven 20 jaar exclusiviteit aan uitvinders om R&D-kosten te recupereren, waarna generische versies legaal zijn." },
      { domain: "Tech", icon: "💻", text: "Apple's patentenportefeuille beschermt iPhone-designs — maar critici stellen dat patent-trolls innovatie eerder remmen dan stimuleren." }
    ],
  },
  {
    id: "distributive-justice",
    title: "Distributieve Rechtvaardigheid",
    difficulty: 3,
    emoji: "🏛️",
    academicCategory: "Politieke Filosofie",
    skillCategory: "Recht & Rechtvaardigheid",
    definition: "Distributieve rechtvaardigheid gaat over de eerlijke verdeling van voordelen en lasten in een samenleving — verschillende theorieën (Rawls, Nozick, utilitarisme) geven fundamenteel verschillende antwoorden op wat 'eerlijk' is.",
    abstractExample: "Drie kinderen krijgen één taart: gelijke stukken (egalitarisme), de grootste voor wie het hardst werkte (meritocratisme), of de grootste voor wie het meest honger heeft (prioritarisme) — elk principe is intern consistent.",
    examples: [
      { domain: "Belastingen", icon: "💰", text: "Progressieve belasting (rijken betalen proportioneel meer) reflecteert prioritaristische principes; vlaktaks reflecteert meer gelijkheidsdenken." },
      { domain: "Gezondheidszorg", icon: "🏥", text: "Universele zorg (Rawls: gun de slechtste positie zo goed mogelijk) vs. marktzorg (Nozick: rechten op wat je verdiende zijn heilig)." },
      { domain: "Onderwijs", icon: "📚", text: "Gelijke middelen voor alle scholen vs. extra middelen voor achterstandsscholen — twee distributieve benaderingen van onderwijsgelijkheid." }
    ],
  },
  {
    id: "international-law",
    title: "Internationaal Recht",
    difficulty: 3,
    emoji: "🌍",
    academicCategory: "Rechtswetenschappen",
    skillCategory: "Recht & Rechtvaardigheid",
    definition: "Internationaal recht is het geheel van regels en verdragen dat de betrekkingen tussen staten regelt — van diplomatieke normen tot oorlogsrecht — maar het handhavingsmechanisme is zwak vergeleken met nationaal recht.",
    abstractExample: "Internationaal recht is als huisregels in een appartementencomplex zonder huisbaas: bewoners hebben regels afgesproken, maar niemand kan ze afdwingen als een buur ze schendt.",
    examples: [
      { domain: "Oorlog", icon: "⚔️", text: "De Geneefse Conventies beschermen gewonde soldaten en burgers in oorlogstijd — staten die ze schenden begaan oorlogsmisdaden." },
      { domain: "Handel", icon: "🛒", text: "WTO-regels regelen internationale handel; geschillen worden beslecht via een arbitrageprocedure." },
      { domain: "Milieu", icon: "🌿", text: "Het Parijs-akkoord is een internationaalrechtelijk klimaatverdrag — maar zonder afdwingingsmechanisme blijft naleving vrijwillig." }
    ],
  },
  {
    id: "legal-pluralism",
    title: "Rechtspluralisme",
    difficulty: 3,
    emoji: "🌐",
    academicCategory: "Rechtswetenschappen",
    skillCategory: "Recht & Rechtvaardigheid",
    definition: "Rechtspluralisme erkent dat in veel samenlevingen meerdere rechtssystemen naast elkaar bestaan — nationaal recht, religieus recht, gewoonterecht — die soms met elkaar in conflict zijn.",
    abstractExample: "In een familie kunnen familienormen (je deelt alles), religieuze normen (het sabbat-gebod) en nationaal recht (eigendomsrecht) tegelijkertijd gelden en soms conflicteren.",
    examples: [
      { domain: "Familierecht", icon: "👨‍👩‍👧", text: "In sommige landen erkennen rechtbanken zowel nationaal familierecht als religieuze huwelijkswetten — soms met conflicterende bepalingen over echtscheiding." },
      { domain: "Inheems recht", icon: "🌿", text: "Veel Canadese First Nations hanteren eigen stamrechtssystemen naast Canadees federaal recht — beide gelden tegelijkertijd." },
      { domain: "Internationaal bedrijf", icon: "💼", text: "Een multinational in meerdere landen navigeert tegelijkertijd lokale wetten, internationale verdragen en sectorregulering." }
    ],
  },

  // Batch W – Onderwijs & Pedagogie
  {
    id: "zone-of-proximal-development",
    title: "Zone van Naaste Ontwikkeling",
    difficulty: 2,
    emoji: "📈",
    academicCategory: "Pedagogie",
    skillCategory: "Onderwijs & Pedagogie",
    definition: "Vygotsky's Zone van Naaste Ontwikkeling (ZPD) is het gebied tussen wat een leerling zelfstandig kan en wat hij met begeleiding kan bereiken — effectief onderwijs vindt in deze zone plaats.",
    abstractExample: "Als een kind net kan fietsen met zijwieltjes, is fietsen zonder hulp in de ZPD — met de juiste steun (even vasthouden) kan het kind de sprong maken die het zelfstandig nog niet kon.",
    examples: [
      { domain: "Onderwijs", icon: "📚", text: "Een leraar geeft een wiskundesom die net iets moeilijker is dan wat een leerling zelfstandig kan — met hints en begeleiding slaagt de leerling." },
      { domain: "Sport", icon: "⚽", text: "Een trainer laat een sporter oefeningen doen die net buiten zijn comfortzone liggen, met technische ondersteuning om de techniek te verbeteren." },
      { domain: "Werk", icon: "💼", text: "Een mentor geeft een junior een project dat net boven zijn huidige niveau ligt, met beschikbaarheid voor begeleiding bij obstakels." }
    ],
  },
  {
    id: "scaffolding-learning",
    title: "Scaffolding in Leren",
    difficulty: 1,
    emoji: "🏗️",
    academicCategory: "Pedagogie",
    skillCategory: "Onderwijs & Pedagogie",
    definition: "Scaffolding is het bieden van tijdelijke, gerichte ondersteuning die geleidelijk wordt afgebouwd naarmate de leerling bekwamer wordt — zodat uiteindelijk zelfstandig functioneren mogelijk is.",
    abstractExample: "Scaffolding werkt als een bouwsteiger: essentieel tijdens de bouw, maar pas nuttig als hij uiteindelijk wordt verwijderd — het gebouw (de vaardigheid) staat dan op zichzelf.",
    examples: [
      { domain: "Schrijven", icon: "✏️", text: "Leerlingen krijgen eerst een sjabloon voor een betoog (stelling, argument, tegenargument, conclusie) en schrijven later zonder die structuur." },
      { domain: "Wiskunde", icon: "🔢", text: "Rekenmachine toestaan bij moeilijke sommen terwijl de conceptuele stap wordt geleerd; later de rekenmachine weghalen." },
      { domain: "Programmeren", icon: "💻", text: "Beginners krijgen een kant-en-klare codestructuur met TODO-opmerkingen; gevorderden starten vanaf nul." }
    ],
  },
  {
    id: "formative-vs-summative",
    title: "Formatief vs. Summatief Beoordelen",
    difficulty: 1,
    emoji: "📊",
    academicCategory: "Pedagogie",
    skillCategory: "Onderwijs & Pedagogie",
    definition: "Formatief beoordelen geeft tussentijdse feedback om het leerproces te sturen ('leren van toetsen'); summatief beoordelen meet prestaties aan het einde om te classificeren ('toetsen van leren').",
    abstractExample: "Formatief beoordelen is als de scheidsrechter die tijdens het spel corrigeert; summatief beoordelen is de eindstand die bepaalt wie wint.",
    examples: [
      { domain: "Onderwijs", icon: "📚", text: "Een wekelijkse exit-ticket (formatief) helpt de docent te zien welke concepten nog niet begrepen zijn voor de volgende les." },
      { domain: "Werk", icon: "💼", text: "Tussentijdse functioneringsgesprekken (formatief) zijn waardevoller voor ontwikkeling dan alleen een jaarlijkse beoordeling (summatief)." },
      { domain: "Sport", icon: "⚽", text: "Trainerscoaching tijdens training (formatief) vs. wedstrijdresultaten als maat voor seizoensprestaties (summatief)." }
    ],
  },
  {
    id: "growth-mindset-education",
    title: "Groeimindset in Onderwijs",
    difficulty: 1,
    emoji: "🌱",
    academicCategory: "Pedagogie",
    skillCategory: "Onderwijs & Pedagogie",
    definition: "Carol Dweck's groeimindset is de overtuiging dat intelligentie en vaardigheden ontwikkelbaar zijn door inspanning — in tegenstelling tot de fixed mindset die aangeboren talent als onveranderlijk ziet.",
    abstractExample: "Een groeimindset ziet een toetsfout als een uitnodiging om beter te begrijpen; een fixed mindset ziet dezelfde fout als bewijs van beperkte intelligentie.",
    examples: [
      { domain: "Onderwijs", icon: "📚", text: "Leerlingen loven om hun inspanning ('je hebt hard gewerkt') in plaats van talent ('je bent slim') stimuleert groeimindset." },
      { domain: "Sport", icon: "⚽", text: "Een atleet die verlies ziet als data voor verbetering bereikt op lange termijn meer dan iemand die verlies als persoonlijk falen ervaart." },
      { domain: "Werk", icon: "💼", text: "Teams die fouten behandelen als leerkansen innoveren meer dan teams die falen afstraffen." }
    ],
  },
  {
    id: "differentiated-instruction",
    title: "Gedifferentieerd Onderwijs",
    difficulty: 2,
    emoji: "🎯",
    academicCategory: "Pedagogie",
    skillCategory: "Onderwijs & Pedagogie",
    definition: "Gedifferentieerd onderwijs past inhoud, proces en product aan op basis van de individuele behoeften, interesses en leerstijlen van leerlingen — in plaats van één aanpak voor iedereen.",
    abstractExample: "Een uitstekende kok past hetzelfde recept aan voor vegetariërs, allergici en voorkeursmaken — hetzelfde gerecht, aangepast voor wie er aan tafel zit.",
    examples: [
      { domain: "Lezen", icon: "📖", text: "Leerlingen lezen over hetzelfde onderwerp maar op verschillende niveaus — sommigen de basisversie, anderen de verdiepende tekst." },
      { domain: "Wiskunde", icon: "🔢", text: "Snelle leerlingen krijgen uitdagingsopgaven; leerlingen die de stof nog verwerken krijgen meer oefening met basisconcepten." },
      { domain: "Project", icon: "🎨", text: "Leerlingen tonen hun begrip op hun eigen manier: sommigen schrijven een essay, anderen maken een poster, anderen geven een presentatie." }
    ],
  },
  {
    id: "inquiry-based-learning",
    title: "Onderzoekend Leren",
    difficulty: 2,
    emoji: "🔬",
    academicCategory: "Pedagogie",
    skillCategory: "Onderwijs & Pedagogie",
    definition: "Onderzoekend leren is een aanpak waarbij leerlingen zelf vragen stellen, hypothesen formuleren, informatie verzamelen en conclusies trekken — actief leren door te ontdekken in plaats van passief ontvangen.",
    abstractExample: "In plaats van docent die uitlegt waarom planten groeien, laten leerlingen zelf planten groeien onder verschillende condities en concluderen waarom sommige beter gedijen.",
    examples: [
      { domain: "Wetenschap", icon: "🔬", text: "Leerlingen ontwerpen een eigen experiment om te testen of suiker of zout beter oplost in warm water — ze formuleren de vraag, het experiment en de conclusie." },
      { domain: "Maatschappijleer", icon: "🌍", text: "Leerlingen onderzoeken zelf de oorzaken van een lokaal probleem (files, ongelijkheid) via interviews, data en rapportage." },
      { domain: "Taal", icon: "📖", text: "In plaats van grammaticaregels uit het hoofd leren, ontdekken leerlingen zelf patronen in taalgebruik via voorbeeldzinnen." }
    ],
  },
  {
    id: "cognitive-load-teaching",
    title: "Cognitieve Belasting in Onderwijs",
    difficulty: 2,
    emoji: "🧠",
    academicCategory: "Cognitieve Psychologie",
    skillCategory: "Onderwijs & Pedagogie",
    definition: "Cognitive Load Theory (Sweller) stelt dat het werkgeheugen beperkt is — effectief onderwijs minimaliseert onnodige cognitieve belasting en maximaliseert de beschikbare capaciteit voor daadwerkelijk leren.",
    abstractExample: "Proberen tegelijkertijd te lezen, aantekeningen te maken én een moeilijke uitleg te volgen overbelast het werkgeheugen — net als drie programma's tegelijk draaien op een trage computer.",
    examples: [
      { domain: "Onderwijs", icon: "📚", text: "Instructies worden stap voor stap gegeven in plaats van alle stappen tegelijk — vermindert extraneous load." },
      { domain: "Interface", icon: "💻", text: "Een goed ontworpen leerapp toont één concept per scherm zonder afleidende animaties — vermindert cognitieve overbelasting." },
      { domain: "Presentaties", icon: "🎤", text: "Volgeladen PowerPoint-slides met veel tekst worden vervangen door één kernboodschap per slide — voorkomt split-attention effect." }
    ],
  },
  {
    id: "mastery-learning",
    title: "Beheersend Leren",
    difficulty: 2,
    emoji: "🎓",
    academicCategory: "Pedagogie",
    skillCategory: "Onderwijs & Pedagogie",
    definition: "Beheersend leren (mastery learning) is een aanpak waarbij leerlingen nieuwe stof pas aangeboden krijgen als ze de voorgaande stof volledig beheersen — elk kind leert op zijn eigen tempo maar bereikt hetzelfde eindniveau.",
    abstractExample: "Mastery learning is als een videospel: je gaat pas naar het volgende level als je het huidige hebt voltooid — de tijdsduur verschilt, de beheersing is gelijk.",
    examples: [
      { domain: "Wiskunde", icon: "🔢", text: "Khan Academy past mastery learning toe: leerlingen oefenen vermenigvuldigen totdat ze 5 van 5 correct hebben, daarna pas staartdeling." },
      { domain: "Muziek", icon: "🎵", text: "Een muziekleraar laat een student één compositie pas loslaten als ze haar foutloos kan spelen — tempo verschilt per student." },
      { domain: "Pilotenopleiding", icon: "✈️", text: "Piloten mogen pas solovliegen als ze alle procedures feilloos beheersen — geen tijdslimiet, wel beheersingseis." }
    ],
  },
  {
    id: "hidden-curriculum",
    title: "Verborgen Curriculum",
    difficulty: 2,
    emoji: "🔍",
    academicCategory: "Onderwijssociologie",
    skillCategory: "Onderwijs & Pedagogie",
    definition: "Het verborgen curriculum zijn de impliciete lessen die scholen overbrengen buiten de officiële vakken: normen, waarden, autoriteitsrelaties en sociale verwachtingen die leerlingen onbewust internaliseren.",
    abstractExample: "Leerlingen leren niet alleen rekenen; ze leren ook dat ze stil moeten zijn als een volwassene spreekt, dat succes wordt gemeten door cijfers en dat regels worden gemaakt door anderen dan zijzelf.",
    examples: [
      { domain: "Discipline", icon: "📋", text: "Schoolregels over stiptheid, uniformen en gedrag socialiseren leerlingen in arbeidsdiscipline die economisch nuttig is voor werkgevers." },
      { domain: "Gender", icon: "♀️", text: "Impliciete verwachtingen dat meisjes stiller zijn en jongens actiever beïnvloeden genderrollen via alledaagse schoolinteracties." },
      { domain: "Autoriteit", icon: "🏫", text: "De structuur van school (docent als autoriteit, leerling als volger) leert een bepaalde relatie tot gezag die overdraagbaar is naar de werkplek." }
    ],
  },
  {
    id: "transfer-of-learning",
    title: "Transfer van Leren",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Leerpsychologie",
    skillCategory: "Onderwijs & Pedagogie",
    definition: "Transfer is het vermogen om geleerde kennis of vaardigheden toe te passen in nieuwe, andere contexten — het ultieme doel van onderwijs, maar moeilijker te bereiken dan het lijkt.",
    abstractExample: "Wiskunde op school leren is waardevol als je het kan toepassen bij het berekenen van kortingen in een winkel — anders is het geïsoleerde kennis zonder transfer.",
    examples: [
      { domain: "Taal", icon: "📖", text: "Een student die kritisch schrijven op school leert, past diezelfde argumentatiestructuur toe in een zakelijk rapport — positieve transfer." },
      { domain: "Sport", icon: "⚽", text: "Coördinatie geleerd bij turnen transfereert naar betere beheersing bij dansen — transfereerbare motorische vaardigheden." },
      { domain: "Programmeren", icon: "💻", text: "Conceptueel begrip van datastructuren in Python helpt snel te leren programmeren in JavaScript — transfer van abstracte concepten." }
    ],
  },

  // Batch X – Ecologie & Duurzaamheid
  {
    id: "planetary-boundaries",
    title: "Planetaire Grenzen",
    difficulty: 2,
    emoji: "🌍",
    academicCategory: "Aardwetenschappen",
    skillCategory: "Ecologie & Duurzaamheid",
    definition: "Het planetaire grenzen-framework (Rockström e.a.) identificeert negen aardse systeemgrenzen waarbinnen de mensheid veilig kan opereren — het overschrijden ervan riskeert onomkeerbare veranderingen.",
    abstractExample: "Planetaire grenzen zijn als de veiligheidsmarges van een vliegtuig: je kunt een beetje te snel vliegen en nog veilig landen, maar voorbij bepaalde grenzen verlies je controle onomkeerbaar.",
    examples: [
      { domain: "Klimaat", icon: "🌡️", text: "De klimaatgrens (1,5-2°C opwarming) is al onder druk — overschrijding riskeert cascade-effecten als smeltende permafrost en zeespiegelstijging." },
      { domain: "Biodiversiteit", icon: "🦋", text: "De biodiversiteitsgrens (soortenverlies) is al overschreden — ecosystemen worden minder veerkrachtig bij verlies van soortendiversiteit." },
      { domain: "Stikstof", icon: "🌿", text: "Intensieve landbouw heeft de stikstofcyclus overschreden — met gevolgen voor waterkwaliteit, biodiversiteit en klimaat." }
    ],
  },
  {
    id: "tipping-points-ecology",
    title: "Kantelingspunten in Ecologie",
    difficulty: 3,
    emoji: "🌊",
    academicCategory: "Ecologie",
    skillCategory: "Ecologie & Duurzaamheid",
    definition: "Ecologische kantelingspunten (tipping points) zijn drempelwaarden waarna een systeem snel en onomkeerbaar overschakelt naar een nieuwe toestand — kleine extra druk kan grote, irreversibele veranderingen veroorzaken.",
    abstractExample: "Een kantelingspunt is als een wiebelige steen op een helling: je kunt er lang aan porren zonder gevolg, totdat één laatste por hem definitief doet kantelen — en dan is er geen weg terug.",
    examples: [
      { domain: "Klimaat", icon: "🌡️", text: "Het smelten van het Groenlandse ijskapsel kan een zichzelf versterkend proces worden dat niet stopt ook als we de uitstoot terugbrengen." },
      { domain: "Ecosysteem", icon: "🌳", text: "Het Amazoneregenwoud heeft een drempelwaarde: bij ~20-25% ontbossing kantelt het van regenwoud naar savanne, met mondiale klimaatgevolgen." },
      { domain: "Koraalrif", icon: "🐠", text: "Boven ~2°C opwarming kantelen koraalriffen massaal naar algendominantie — een staat die zichzelf in standhoud." }
    ],
  },
  {
    id: "circular-economy",
    title: "Circulaire Economie",
    difficulty: 2,
    emoji: "♻️",
    academicCategory: "Duurzaamheidswetenschap",
    skillCategory: "Ecologie & Duurzaamheid",
    definition: "De circulaire economie is een economisch model dat afval minimaliseert door grondstoffen zo lang mogelijk in gebruik te houden via hergebruik, reparatie, recycling en regeneratie — in contrast met het lineaire 'maak-gebruik-gooi weg'-model.",
    abstractExample: "Een circulaire economie is als een goed huishouden: je gooit niets weg maar vindt voor elk bijproduct een nieuwe bestemming, zodat de kringloop gesloten blijft.",
    examples: [
      { domain: "Mode", icon: "👗", text: "Patagonia repareert kleding kosteloos en koopt oude Patagonia-kleding terug om te herverkopen — sluit de kringloop in fast fashion." },
      { domain: "Technologie", icon: "💻", text: "Fairphone ontwerpt modulaire telefoons waarbij elk onderdeel vervangbaar is, waardoor de levensduur wordt verlengd." },
      { domain: "Bouw", icon: "🏗️", text: "Cradle-to-cradle bouw gebruikt materialen die aan het einde van de levensduur van een gebouw volledig kunnen worden hergebruikt." }
    ],
  },
  {
    id: "ecosystem-services",
    title: "Ecosysteemdiensten",
    difficulty: 2,
    emoji: "🌳",
    academicCategory: "Ecologie",
    skillCategory: "Ecologie & Duurzaamheid",
    definition: "Ecosysteemdiensten zijn de voordelen die mensen gratis ontvangen van gezonde ecosystemen: schone lucht, zuiver water, bestuiving, klimaatregulering, voedsel en recreatie — waarvan de economische waarde zelden wordt meegerekend.",
    abstractExample: "Een bos is gratis bewolking en waterfilter, een gratis CO2-opslagplaats en een gratis recreatieplek — als je die waarden in geld uitdrukt, is beschermen goedkoper dan kappen.",
    examples: [
      { domain: "Bestuiving", icon: "🐝", text: "Bijen bestuiven gewassen ter waarde van honderden miljarden euros per jaar wereldwijd — een dienst die bij bijensterfte vervangen moet worden door menselijke arbeid." },
      { domain: "Waterfiltering", icon: "💧", text: "New York City investeerde in bescherming van Catskill Mountains-wetlands in plaats van een waterfilterinstallatie — de natuur doet het goedkoper." },
      { domain: "Klimaat", icon: "🌡️", text: "Oceanen absorberen ~25% van al het CO2-uitstoot — een ecosysteemdienst die de opwarming aanzienlijk vertraagt zonder menselijke ingreep." }
    ],
  },
  {
    id: "tragedy-of-commons",
    title: "De Tragedie van de Meent",
    difficulty: 2,
    emoji: "🐄",
    academicCategory: "Ecologie",
    skillCategory: "Ecologie & Duurzaamheid",
    definition: "De tragedie van de meent (Hardin) beschrijft hoe een gedeelde hulpbron wordt uitgeput wanneer individuen rationeel hun eigen voordeel maximaliseren ten koste van het collectief — elk individu profiteert van overgebruik maar deelt de kosten.",
    abstractExample: "Als alle boeren één extra koe op de gemeenschappelijke weide zetten, profiteert elke individuele boer volledig terwijl de kosten (uitputting van gras) worden gedeeld door allen — rationeel individueel, rampzalig collectief.",
    examples: [
      { domain: "Vissen", icon: "🐟", text: "Internationale vissers hebben belang bij het wegvangen van zoveel mogelijk vis — maar als iedereen dit doet, raken visbestanden uitgeput." },
      { domain: "Lucht", icon: "💨", text: "Elk bedrijf wil zo goedkoop mogelijk produceren door emissies in de lucht te lozen — schone lucht is een gemeenschappelijke bron die wordt uitgeput." },
      { domain: "Internet", icon: "💻", text: "Bandbreedte, aandacht en vertrouwen online zijn gemeenschappelijke bronnen die door spam, desinformatie en clickbait worden uitgeput." }
    ],
  },
  {
    id: "environmental-justice",
    title: "Milieugerechtigheld",
    difficulty: 2,
    emoji: "⚖️",
    academicCategory: "Milieuwetenschap",
    skillCategory: "Ecologie & Duurzaamheid",
    definition: "Milieugerechtigheld erkent dat milieuschade en klimaatrisico's ongelijk zijn verdeeld — kwetsbare en arme gemeenschappen worden disproportioneel getroffen door vervuiling en klimaatverandering terwijl ze er het minst aan bijdragen.",
    abstractExample: "Mensen die vlak bij een chemische fabriek wonen inademen de meeste vervuiling maar profiteren het minst van de economische activiteit — een disproportionele verdeling van lasten en lusten.",
    examples: [
      { domain: "Klimaat", icon: "🌡️", text: "Kleine eilandstaten zoals Tuvalu dreigen te verdrinken door zeespiegelstijging terwijl ze vrijwel geen CO2 uitstoten." },
      { domain: "Stedelijk", icon: "🏙️", text: "Achterstandswijken in steden hebben minder groen, meer luchtvervuiling en minder klimaatbestendige woningen dan rijkere wijken." },
      { domain: "Internationaal", icon: "🌍", text: "Lage-inkomenslanden dragen het meest bij aan goedkope productie maar lijden het meest onder de milieugevolgen van het westerse consumptiepatroon." }
    ],
  },
  {
    id: "biodiversity-loss",
    title: "Biodiversiteitsverlies",
    difficulty: 2,
    emoji: "🦋",
    academicCategory: "Ecologie",
    skillCategory: "Ecologie & Duurzaamheid",
    definition: "Biodiversiteitsverlies is de versnelling van soortuitsterving door menselijke activiteiten — met een huidig tempo 100-1000 maal hoger dan de natuurlijke achtergrondsnelheid — wat ecosystemen minder veerkrachtig maakt.",
    abstractExample: "Een ecosysteem is als een vliegtuig met honderden bouten: het verliezen van één bout is misschien ok, maar naarmate je meer bouten verliest neemt het risico op catastrofaal falen exponentieel toe.",
    examples: [
      { domain: "Insecten", icon: "🐛", text: "Insectenpopulaties zijn in Europa met 75% gedaald in 40 jaar — met directe gevolgen voor bestuiving, vogelvoedsel en bodemgezondheid." },
      { domain: "Vissen", icon: "🐟", text: "Meer dan een derde van de zoetwatervissoorten is bedreigd — gevolgen voor voedselzekerheid van miljarden mensen." },
      { domain: "Plantensoorten", icon: "🌺", text: "40% van de plantensoorten is met uitsterven bedreigd — verlies van potentiële medicijnen, voedselgewassen en ecosysteemdiensten." }
    ],
  },
  {
    id: "regenerative-agriculture",
    title: "Regeneratieve Landbouw",
    difficulty: 2,
    emoji: "🌾",
    academicCategory: "Landbouwwetenschappen",
    skillCategory: "Ecologie & Duurzaamheid",
    definition: "Regeneratieve landbouw is een set praktijken die bodems actief herstelt en verbetert, koolstof vastlegt, biodiversiteit vergroot en watersystemen verbetert — in contrast met conventionele landbouw die bodems uitput.",
    abstractExample: "Regeneratieve landbouw is als interesse op interesse verdienen: je investeert in bodemgezondheid en die investering groeit elk jaar, terwijl conventionele landbouw kapitaal verbruikt.",
    examples: [
      { domain: "Veehouderij", icon: "🐄", text: "Managed grazing roteert vee door weilanden zodat grassen volledig herstellen — verbetert bodemkoolstof en voorkomt overbegrazing." },
      { domain: "Akkerbouw", icon: "🌽", text: "No-till farming laat bodems intact, vermindert erosie en verhoogt het organisch materiaal — met als gevolg gezondere bodems en hoger waterretentie." },
      { domain: "Agroforestry", icon: "🌳", text: "Combineren van bomen met landbouwgewassen verbetert bodems, biedt schaduw en habitat, en vergroot de biodiversiteit op het erf." }
    ],
  },
  {
    id: "life-cycle-assessment",
    title: "Levenscyclusanalyse",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Milieuwetenschap",
    skillCategory: "Ecologie & Duurzaamheid",
    definition: "Levenscyclusanalyse (LCA) is een methode die de milieuimpact van een product of dienst beoordeelt over de gehele levensduur: van grondstofwinning via productie, gebruik en transport tot afdanking.",
    abstractExample: "Een elektrische auto heeft geen directe uitstoot, maar de levenscyclusanalyse omvat ook de batterijproductie, elektriciteitsopwekking en recycling — pas dan is de totale impact duidelijk.",
    examples: [
      { domain: "Elektrische auto", icon: "🚗", text: "LCA toont dat een elektrische auto over 150.000 km ~60% minder CO2 uitstoot dan een benzineauto, ondanks de energie-intensieve batterijproductie." },
      { domain: "Katoenen vs. plastic zak", icon: "🛍️", text: "Een katoenen tas moet ~131 keer worden gebruikt voor een lagere klimaatimpact dan één plastic zak — katoenteelt is water- en pesticideintensief." },
      { domain: "Voedsel", icon: "🍖", text: "Rundvlees heeft de hoogste levenscyclusimpact van alle voedingsmiddelen; peulvruchten hebben een fractie van die impact." }
    ],
  },
  {
    id: "energy-transition",
    title: "Energietransitie",
    difficulty: 2,
    emoji: "⚡",
    academicCategory: "Energiewetenschappen",
    skillCategory: "Ecologie & Duurzaamheid",
    definition: "De energietransitie is de systemische verschuiving van fossiele brandstoffen naar hernieuwbare energiebronnen — een multidecadaal transformatieproces dat technologie, economie, gedrag en politiek omvat.",
    abstractExample: "De energietransitie is als een grote locomotief van richting veranderen: enorm veel energie nodig om de draai te maken, maar eenmaal op de nieuwe baan gaat het vanzelf.",
    examples: [
      { domain: "Zonne-energie", icon: "☀️", text: "Zonnepanelen zijn in 10 jaar met 90% goedkoper geworden — technologische S-curve-dynamiek maakt hernieuwbare energie nu goedkoper dan kolen." },
      { domain: "Netbeheer", icon: "🔌", text: "De integratie van variabele zon en wind vereist slimme netwerken, batterijopslag en vraagrespons — een systeemtransformatie." },
      { domain: "Industrie", icon: "🏭", text: "Groene waterstof is essentieel voor de decarbonisatie van staalindustrie en scheepvaart — sectoren die niet direct op stroom kunnen draaien." }
    ],
  },

  // Batch Y – Menselijke Natuur & Evolutie
  {
    id: "kin-selection",
    title: "Verwantenselectie",
    difficulty: 3,
    emoji: "👨‍👩‍👧",
    academicCategory: "Evolutiebiologie",
    skillCategory: "Menselijke Natuur & Evolutie",
    definition: "Verwantenselectie (Hamilton's regel) verklaart altruïsme voor verwanten: een gen kan zich verspreiden door gedrag dat de eigen reproductie vermindert maar de reproductie van voldoende verwanten verhoogt — want verwanten dragen dezelfde genen.",
    abstractExample: "Hamilton's regel: r × B > C (verwantschapsgraad × voordeel voor verwant > kosten voor helper). Jij helpt je broer als het evolutionaire voordeel voor zijn genen groter is dan je eigen kosten.",
    examples: [
      { domain: "Dieren", icon: "🐝", text: "Werkbijen vermenigvuldigen zich niet zelf maar helpen de koningin — hun genen verspreiden zich via zussen die 75% van hun genen delen (supernormaal hoog)." },
      { domain: "Mensen", icon: "👨‍👩‍👧", text: "Mensen geven significant meer geld en tijd aan directe familie dan aan vreemden — een evolutionaire logica die ook cultureel is versterkt." },
      { domain: "Nepotisme", icon: "💼", text: "Nepotisme (banen geven aan familie) is evolutionair begrijpelijk als verwantenselectie, ook al is het sociaal ongewenst in moderne instituties." }
    ],
  },
  {
    id: "reciprocal-altruism",
    title: "Wederkerig Altruïsme",
    difficulty: 2,
    emoji: "🤝",
    academicCategory: "Evolutiebiologie",
    skillCategory: "Menselijke Natuur & Evolutie",
    definition: "Wederkerig altruïsme (Trivers) verklaart samenwerking tussen niet-verwanten: jij helpt mij nu, ik help jou later — evolutionair stabiel als individuen elkaar herkennen en interacties herhalen.",
    abstractExample: "Wederkerig altruïsme is als een oud dorpssysteem: jij helpt mij mijn dak te repareren nu, en ik help jou bij jouw oogst straks — iedereen wint over de lange termijn.",
    examples: [
      { domain: "Vampieren", icon: "🦇", text: "Vampierknuppels delen bloed met hongerige groepsgenoten — maar weigeren te delen met vleermuizen die eerder niet deelden. Exacte tit-for-tat." },
      { domain: "Handel", icon: "🛒", text: "Menselijke handel is fundamenteel gebouwd op wederkerig altruïsme: ik geef jou dit, jij geeft mij dat — een evolutionair voorgebakken instinct." },
      { domain: "Vriendschap", icon: "👫", text: "Vriendschappen die imbalanced worden (één persoon geeft altijd meer) verwelken — ons evolutionaire systeem registreert eerlijkheid nauwgezet." }
    ],
  },
  {
    id: "sexual-selection",
    title: "Seksuele Selectie",
    difficulty: 2,
    emoji: "🦚",
    academicCategory: "Evolutiebiologie",
    skillCategory: "Menselijke Natuur & Evolutie",
    definition: "Seksuele selectie is een evolutief mechanisme naast natuurlijke selectie: kenmerken evolueren niet omdat ze overleven bevorderen, maar omdat ze de kans op paring vergroten — via partnerkeuze of concurrentie tussen soortgenoten.",
    abstractExample: "De pauwenstaart is levensgevaarlijk (roofvijanden zien hem snel) maar geeft aan dat de pauw zo fit is dat hij dit handicap kan dragen — een 'eerlijk signaal' van genetische kwaliteit.",
    examples: [
      { domain: "Dieren", icon: "🦁", text: "De leeuwenmanen zijn metabolisch duur en hinder hinderlijk bij jacht — maar signaleren naar leeuwinnen een gezond, fit individu." },
      { domain: "Mensen", icon: "👤", text: "Menselijke voorkeuren voor symmetrische gezichten, lange benen (vrouwen) en V-taille (mannen) zijn waarschijnlijk evolutionaire signalen van genetische gezondheid." },
      { domain: "Kunst", icon: "🎵", text: "Geoffrey Miller argumenteert dat menselijke creativiteit en kunst deels seksueel geselecteerde signalen zijn van cognitieve fit." }
    ],
  },
  {
    id: "status-hierarchy-evolution",
    title: "Statushiërarchie en Evolutie",
    difficulty: 2,
    emoji: "👑",
    academicCategory: "Evolutionaire Psychologie",
    skillCategory: "Menselijke Natuur & Evolutie",
    definition: "Statusgedrag is evolutionair diep geworteld: hogere status levert toegang tot betere bronnen, partners en allianties op — waardoor mensen automatisch statussignalen sturen en ontvangen, vaak onbewust.",
    abstractExample: "Statusgedrag is als de evolutionaire armoede die we draagbaar hebben gemaakt met jas: we dragen nog altijd de onderliggende hiërarchische software, maar vertolken die nu via auto's, titels en volgers.",
    examples: [
      { domain: "Werkplek", icon: "💼", text: "Hoekkantoortjes, grote bureaus en bijzondere parkeerplaatsen zijn moderne statusmarkers die dezelfde evolutionaire logica weerspiegelen als alfadieren in een kudde." },
      { domain: "Consumptie", icon: "🛍️", text: "Luxe goederen zijn deels statusmarkers: ze signaleren aanwezige hulpbronnen ('ik kan dit permitteren') aan potentiële partners en rivalen." },
      { domain: "Sociale media", icon: "📱", text: "Volgersaantallen, likes en verificatievinkjes zijn digitale statusmarkers die dezelfde neurale beloningscircuits activeren als traditionele sociale status." }
    ],
  },
  {
    id: "mismatch-hypothesis",
    title: "Mismatch-hypothese",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Evolutionaire Psychologie",
    skillCategory: "Menselijke Natuur & Evolutie",
    definition: "De mismatch-hypothese stelt dat veel moderne gezondheidsproblemen (obesitas, angst, eenzaamheid) voortkomen uit een mismatch tussen de omgeving waarvoor onze hersenen zijn geëvolueerd (het Pleistoceen) en de moderne wereld.",
    abstractExample: "Onze vetopslag-instincten zijn perfect voor een wereld waar voedsel schaars en onregelmatig beschikbaar is — catastrofaal voor een wereld waar calorieëndichterijke voeding 24/7 beschikbaar is.",
    examples: [
      { domain: "Voeding", icon: "🍔", text: "Suiker- en vetdrang is evolutionair nuttig (schaarse calorieën opslaan) maar leidt tot obesitas in een wereld van overvloed." },
      { domain: "Sociale media", icon: "📱", text: "Onze hersenen zijn geëvolueerd voor kleine, stabiele sociale groepen (~150 personen) — sociale media blootstelt ons aan miljoenen oordelen en vergelijkingen." },
      { domain: "Stress", icon: "😰", text: "De stressrespons is geëvolueerd voor acute fysieke gevaren (tijger) maar wordt geactiveerd door chronische zorgen (werk, geld) — met gezondheidsschade als gevolg." }
    ],
  },
  {
    id: "in-group-out-group",
    title: "Ingroep-Uitgroep Dynamiek",
    difficulty: 2,
    emoji: "👥",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Menselijke Natuur & Evolutie",
    definition: "De neiging om de eigen groep (ingroep) te bevoordelen en uitgroepen te wantrouwen of te devalueren is een evolutionaire aanpassing die samenwerking bevorderde maar ook tribaal conflict veroorzaakt.",
    abstractExample: "Zelfs willekeurige groepsindeling (rood versus blauw team) activeert direct ingroep-bias: mensen geven teamgenoten hogere beoordelingen, vertrouwen hen meer en zien hen als individuen.",
    examples: [
      { domain: "Sport", icon: "⚽", text: "Voetbalsupporters overschatten de kwaliteit van hun eigen team en zien overwinningen als verdiend, verlies als pech of slechte scheidsrechter." },
      { domain: "Politiek", icon: "🏛️", text: "Mensen lezen dezelfde statistieken fundamenteel anders afhankelijk van of 'hun partij' er goed of slecht uitkomt." },
      { domain: "Werk", icon: "💼", text: "Afdelingsbias: mensen beoordelen voorstellen van de eigen afdeling systematisch positiever dan gelijkwaardige voorstellen van andere afdelingen." }
    ],
  },
  {
    id: "moral-foundations-theory",
    title: "Morele Fundamententheorie",
    difficulty: 3,
    emoji: "🏛️",
    academicCategory: "Moraalpsychologie",
    skillCategory: "Menselijke Natuur & Evolutie",
    definition: "Jonathan Haidt's morele fundamententheorie stelt dat menselijke moraliteit is opgebouwd uit zes evolutionair geselecteerde fundamenten: zorg/schade, eerlijkheid, loyaliteit, autoriteit, heiligheid en vrijheid — en dat politieke stromingen zich onderscheiden door welke fundamenten ze benadrukken.",
    abstractExample: "Progressieven benadrukken zorg en eerlijkheid; conservatieven benadrukken alle zes fundamenten — waardoor ze elkaar letterlijk moreel onbegrijpelijk vinden.",
    examples: [
      { domain: "Politiek", icon: "🏛️", text: "Discussies over immigratie raken loyaliteits- (nationale identiteit) én zorgfundament (vluchtelingen helpen) — verschillende basismorele talen." },
      { domain: "Voeding", icon: "🥩", text: "Veganisme raakt het schaadfundament (dieren); vleeseten kan het loyaliteitsfundament raken (traditionele cultuur, gemeenschap)." },
      { domain: "Religie", icon: "🕌", text: "Religieuze rituelen activeren heiligheids- en loyaliteitsfundamenten sterk — seculiere mensen begrijpen vaak niet waarom dit zo moreel geladen is voor gelovigen." }
    ],
  },
  {
    id: "evolved-intuitions",
    title: "Geëvolueerde Intuïties",
    difficulty: 2,
    emoji: "⚡",
    academicCategory: "Evolutionaire Psychologie",
    skillCategory: "Menselijke Natuur & Evolutie",
    definition: "Veel van onze morele en sociale intuïties zijn geëvolueerde snelle antwoorden op terugkerende uitdagingen in de ancestrale omgeving — ze zijn niet altijd correct in moderne contexten maar krachtig en moeilijk te negeren.",
    abstractExample: "Weerzin bij het zien van rot voedsel is een geëvolueerde beschermende intuïtie — diezelfde weerzin-emotie wordt echter ook getriggerd bij moreel 'vuile' acties, waar ze minder betrouwbaar is.",
    examples: [
      { domain: "Rechtvaardigheid", icon: "⚖️", text: "Onze intuïtie dat 'straf verdiend is' zelfs als het niemand helpt, is waarschijnlijk een geëvolueerde sociale handhavingsintuïtie." },
      { domain: "Moraal", icon: "🏛️", text: "De trolleyprobleem-intuïtie (meer mensen redden is toch verkeerd als je iemand actief moet doden) weerspiegelt een geëvolueerde aversie tegen direct schaden." },
      { domain: "Gezicht", icon: "👤", text: "Gezichtsherkenning is zo sterk geëvolueerd dat we gezichten zien in wolken, toast en auto's — de hersenen zijn overgeselecteerd voor dit patroon." }
    ],
  },
  {
    id: "theory-of-mind-evolution",
    title: "Theory of Mind",
    difficulty: 2,
    emoji: "🧠",
    academicCategory: "Cognitieve Wetenschap",
    skillCategory: "Menselijke Natuur & Evolutie",
    definition: "Theory of Mind is het vermogen om te begrijpen dat anderen overtuigingen, wensen en intenties hebben die verschillen van die van jouzelf — een cruciale vaardigheid voor sociale samenwerking die zich vroeg in de evolutie van de mensheid ontwikkelde.",
    abstractExample: "Theory of Mind is het besef dat de kaart in jouw hoofd ('de wereld zoals ik die zie') anders is dan de kaart in jouw hoofd van andermans hoofd — een recursief bewustzijn van perspectivisme.",
    examples: [
      { domain: "Kind", icon: "👶", text: "Kinderen onder 4 jaar begrijpen de 'false belief task' niet — ze denken dat anderen weten wat zij weten. Pas daarna ontwikkelt Theory of Mind." },
      { domain: "Autisme", icon: "🧩", text: "Mensen met autisme hebben vaak moeite met Theory of Mind — waardoor sociale situaties moeilijker te interpreteren zijn." },
      { domain: "Marketing", icon: "🛍️", text: "Effectieve marketing vereist Theory of Mind: je moet de gedachtewereld van de klant modelleren, niet vanuit jezelf redeneren." }
    ],
  },
  {
    id: "costly-signaling",
    title: "Kostbare Signalering",
    difficulty: 3,
    emoji: "🎁",
    academicCategory: "Evolutiebiologie",
    skillCategory: "Menselijke Natuur & Evolutie",
    definition: "Kostbare signalering is het principe dat geloofwaardige signalen van kwaliteit of intentie kosten met zich meebrengen — juist omdat ze duur zijn, kunnen ze niet makkelijk worden nagemaakt door inferieure individuen.",
    abstractExample: "Een dure huwelijksring is kostbaar signalering: juist de hoge prijs communiceert toewijding — een goedkope imitatie signaleert hetzelfde maar kost meer voor wie het zich niet kan permitteren.",
    examples: [
      { domain: "Liefdadigheid", icon: "❤️", text: "Openbaar doneren is kostbaar signalering van grootmoedigheid — het is geloofwaardig juist omdat je echt iets opgeeft." },
      { domain: "Opleiding", icon: "🎓", text: "Een dure elite-opleiding signaleert niet alleen kennis maar ook capaciteit om door een rigoureus selectieproces te komen — het signaal is ook de prestatie." },
      { domain: "Rituelen", icon: "🕌", text: "Religieuze rituelen die veel moeite kosten (vasten, pelgrimstochten) signaleren oprechte toewijding aan de geloofsgroep." }
    ],
  },

  // Batch Z1 – Psychologie van Groepen
  {
    id: "groupthink",
    title: "Groepsdenken",
    difficulty: 2,
    emoji: "🧠",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Psychologie van Groepen",
    definition: "Groepsdenken treedt op wanneer de wens naar harmonie en conformiteit in een groep het kritisch evalueren van alternatieven overheerst — resulterend in slechte beslissingen die niemand individueel zou nemen.",
    abstractExample: "Een groep vrienden plant een wandeltocht bij slecht weer: niemand wil de stemming bederven dus zegt niemand 'dit is een slecht idee' — de groep gaat en raakt in de problemen.",
    examples: [
      { domain: "Bedrijf", icon: "💼", text: "NASA's Challenger-ramp: ingenieurs hadden zorgen over de O-ringen maar de groepsdynamiek onderdrukte kritische stemmen voor de lancering." },
      { domain: "Politiek", icon: "🏛️", text: "De Bay of Pigs-invasie: Kennedy's team was intern zo eensgezind dat alternatieve scenario's niet serieus werden overwogen." },
      { domain: "Investeren", icon: "📈", text: "Investeringscommissies die positief enthousiasme beloningen boven kritisch denken raken regelmatig in groupthink-valkuilen." }
    ],
  },
  {
    id: "social-loafing",
    title: "Sociaal Lummelen",
    difficulty: 1,
    emoji: "😴",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Psychologie van Groepen",
    definition: "Sociaal lummelen (social loafing) is de neiging van individuen om minder inspanning te leveren wanneer ze in een groep werken dan wanneer ze alleen werken — verantwoordelijkheid en bijdrage worden diffuser.",
    abstractExample: "Wanneer acht mensen een touw trekken, trekt elk gemiddeld minder hard dan wanneer ze het alleen trekken — het individu 'verbergt zich' in de groep.",
    examples: [
      { domain: "Schoolproject", icon: "📚", text: "In een groepsproject van vijf doen twee mensen 80% van het werk terwijl de anderen wachten — diffuse verantwoordelijkheid verlaagt individuele inspanning." },
      { domain: "Vergadering", icon: "💼", text: "In grote vergaderingen zeggen minder mensen iets dan in kleine groepen — het individu voelt minder verantwoordelijk om bij te dragen." },
      { domain: "Vrijwilligerswerk", icon: "❤️", text: "Anonieme online-petitietekenaar: de bijdrage voelt klein en onzichtbaar, wat de motivatie om actief bij te dragen vermindert." }
    ],
  },
  {
    id: "bystander-effect",
    title: "Toeschouwerseffect",
    difficulty: 2,
    emoji: "👁️",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Psychologie van Groepen",
    definition: "Het toeschouwerseffect is het fenomeen dat individuen minder geneigd zijn hulp te bieden bij een noodsituatie wanneer er meer anderen aanwezig zijn — door diffusie van verantwoordelijkheid en pluralistische onwetendheid.",
    abstractExample: "Kitty Genovese-geval: 38 buren hoorden een aanval maar niemand belde de politie — elke buur dacht 'een ander doet het al'. Meer getuigen betekende minder actie.",
    examples: [
      { domain: "Openbaar", icon: "🚌", text: "Iemand die flauwvalt in een drukke trein krijgt soms minder snel hulp dan op een stille straat — meer toeschouwers, minder individuele actie." },
      { domain: "Online", icon: "💻", text: "Cyberpesten wordt vaak gezien door velen maar weinig mensen grijpen in — de groepsgrootte vergroot de passiviteit." },
      { domain: "Werkplek", icon: "💼", text: "Ongepast gedrag op kantoor wordt soms genegeerd door meerdere collega's — elk wacht af of iemand anders ingrijpt." }
    ],
  },
  {
    id: "conformity-asch",
    title: "Conformiteitsdruk",
    difficulty: 2,
    emoji: "🐑",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Psychologie van Groepen",
    definition: "Conformiteitsdruk is de neiging om de meningen en gedragingen van anderen over te nemen — zelfs wanneer de groepsmening duidelijk onjuist is — zoals aangetoond in Asch's lijnexperimenten.",
    abstractExample: "In Asch's experiment ontkenden mensen hun eigen ogen: ze zeiden dat een kortere lijn even lang was als een langere, gewoon omdat zeven acteurs dat zeiden. De groepsmening overwon de sensorische realiteit.",
    examples: [
      { domain: "Mode", icon: "👗", text: "Trends in kleding worden gevolgd zelfs als individuen ze persoonlijk niet mooi vinden — sociale norm-conformiteit." },
      { domain: "Vergadering", icon: "💼", text: "Een medewerker die een anders mening heeft, houdt zijn mond als de baas en alle collega's het er al mee eens lijken." },
      { domain: "Consumentisme", icon: "🛍️", text: "Mensen kopen producten die ze niet nodig hebben omdat 'iedereen het heeft' — sociale vergelijkingsconformiteit." }
    ],
  },
  {
    id: "social-identity-theory",
    title: "Sociale Identiteitstheorie",
    difficulty: 2,
    emoji: "🪪",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Psychologie van Groepen",
    definition: "Sociale identiteitstheorie (Tajfel & Turner) stelt dat een deel van iemands zelfconcept wordt afgeleid uit het lidmaatschap van sociale groepen — en dat mensen hun groepen positief willen evalueren om een positief zelfconcept te behouden.",
    abstractExample: "Je voelt trots wanneer jouw voetbalteam wint, ook al heb jij niet gespeeld — de prestatie van de groep beïnvloedt jouw persoonlijk gevoel van eigenwaarde.",
    examples: [
      { domain: "Sport", icon: "⚽", text: "Fans identificeren sterk met hun club: overwinning verhoogt eigenwaarde ('wij wonnen'), verlies roept defensieve reacties op ('het was de scheidsrechter')." },
      { domain: "Nationalisme", icon: "🌍", text: "Nationale trots — trots op wetenschappers, sporters of kunstenaars die 'jouw land' vertegenwoordigen — is sociale identiteitstheorie in actie." },
      { domain: "Werkplek", icon: "💼", text: "Werknemers bij prestigieuze bedrijven ontlenen status aan het bedrijfsmerk — zelfs bij taken die niets met dat prestige te maken hebben." }
    ],
  },
  {
    id: "deindividuation",
    title: "Deïndividuatie",
    difficulty: 2,
    emoji: "🎭",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Psychologie van Groepen",
    definition: "Deïndividuatie is het verlies van zelfbewustzijn en individuele identiteit in groepen of anonieme situaties — waardoor mensen gedrag vertonen dat ze individueel nooit zouden stellen, van positief (zelfloze reddingsacties) tot negatief (riotvandalism).",
    abstractExample: "Een carnavalsmaskerganger doet dingen die hij nuchter en herkenbaar nooit zou doen — de anonimiteit verlaagt de zelfcensuur en verhoogt de groepsdynamiek.",
    examples: [
      { domain: "Online", icon: "💻", text: "Anonieme internetcommentators schrijven beledigingen die ze face-to-face nooit zouden uitspreken — deïndividuatie via online anonimiteit." },
      { domain: "Protestgeweld", icon: "✊", text: "Rellen beginnen zelden met individuen maar escaleren wanneer groepsidentiteit en anonimiteit persoonlijke verantwoordelijkheid overschrijven." },
      { domain: "Helpend gedrag", icon: "❤️", text: "Bij calamiteiten kunnen mensen ook positieve deïndividuatie vertonen: ze doen spontaan heldendaden die ze individueel niet hadden overwogen." }
    ],
  },
  {
    id: "risky-shift",
    title: "Groepspolarisatie",
    difficulty: 2,
    emoji: "📊",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Psychologie van Groepen",
    definition: "Groepspolarisatie is het fenomeen dat groepsdiscussies de initiële tendens van de leden versterken — groepen nemen risicovollere beslissingen dan individuen als de leden al risicobereid zijn, en conservatievere als de leden al voorzichtig zijn.",
    abstractExample: "Als vijf licht-positieve mensen over een voorstel discussiëren, eindigt de groep uitbundiger positief dan elk individu begon — overleggen versterkt de starttendens.",
    examples: [
      { domain: "Online echo-kamer", icon: "💻", text: "Sociale mediaalgoritmen die gelijkgestemden clusteren versterken groepspolarisatie — gematigde standpunten worden extremer door herhaalde blootstelling aan gelijkgezinden." },
      { domain: "Jury", icon: "⚖️", text: "Een jury die aanvankelijk licht neigt naar schuld, kan na deliberatie extremer worden in die richting door groepspolarisatie." },
      { domain: "Investering", icon: "📈", text: "Investeringscomités kunnen risicovollere beslissingen nemen dan individuele leden — het 'risky shift'-effect in de originele onderzoeken." }
    ],
  },
  {
    id: "leadership-styles",
    title: "Leiderschapsstijlen",
    difficulty: 2,
    emoji: "👔",
    academicCategory: "Organisatiepsychologie",
    skillCategory: "Psychologie van Groepen",
    definition: "Verschillende leiderschapsstijlen (autocratisch, democratisch, laissez-faire, transformationeel, dienend) zijn meer of minder effectief afhankelijk van de situatie — er is geen universeel beste stijl.",
    abstractExample: "Een brandweercommandant tijdens een brand heeft een autocratische stijl nodig; dezelfde persoon die een creatief team leidt, heeft een dienende stijl nodig — de situatie bepaalt de stijl.",
    examples: [
      { domain: "Crises", icon: "🚒", text: "Autocratisch leiderschap is effectief in crisissituaties die snelle, duidelijke beslissingen vereisen zonder ruimte voor discussie." },
      { domain: "Innovatie", icon: "💡", text: "Transformationeel leiderschap (visie, inspiratie, individuele aandacht) is het meest effectief voor creatieve en kenniswerkers." },
      { domain: "Zelfsturende teams", icon: "🤝", text: "Laissez-faire werkt bij experts met hoge autonomiebehoefte — maar faalt bij medewerkers die richting en structuur nodig hebben." }
    ],
  },
  {
    id: "team-dynamics-tuckman",
    title: "Teamontwikkelingsfasen",
    difficulty: 1,
    emoji: "🚀",
    academicCategory: "Organisatiepsychologie",
    skillCategory: "Psychologie van Groepen",
    definition: "Tuckman's model beschrijft vier fasen van teamontwikkeling: Forming (verkennen), Storming (conflict), Norming (normen stellen) en Performing (presteren) — elk team doorloopt deze fasen, ook na terugval.",
    abstractExample: "Een nieuw team is als een nieuwe band: eerst kennismaken (forming), dan ruzies over muziekstijl (storming), dan afspraken over repertoire (norming), dan geweldig optreden (performing).",
    examples: [
      { domain: "Startup", icon: "🚀", text: "Een nieuw startupteam begint enthousiast (forming), botst dan over richting (storming), vindt een werkwijze (norming) en presteert dan samen (performing)." },
      { domain: "Sport", icon: "⚽", text: "Nieuwe teams presteren eerst slechter dan veteranenteams — de teamontwikkelingsfasen kosten tijd en kunnen niet worden overgeslagen." },
      { domain: "Fusie", icon: "🏢", text: "Na een bedrijfsfusie doorlopen gecombineerde teams opnieuw alle fasen — zelfs ervaren professionals beginnen opnieuw met forming." }
    ],
  },
  {
    id: "psychological-safety",
    title: "Psychologische Veiligheid",
    difficulty: 2,
    emoji: "🛡️",
    academicCategory: "Organisatiepsychologie",
    skillCategory: "Psychologie van Groepen",
    definition: "Psychologische veiligheid (Amy Edmondson) is het teamklimaat waarin individuen zich veilig voelen om interpersoonlijke risico's te nemen — ideeën delen, fouten toegeven en kritiek uiten zonder angst voor bestraffing of vernedering.",
    abstractExample: "Een chirurgisch team met psychologische veiligheid meldt een bijna-fout aan de rest van het team — een team zonder die veiligheid zwijgt, en de volgende fout is echte schade.",
    examples: [
      { domain: "Google", icon: "💻", text: "Google's Project Aristotle ontdekte dat psychologische veiligheid de sterkste voorspeller was van teamprestaties — sterker dan talenten of ervaring." },
      { domain: "Zorg", icon: "🏥", text: "Ziekenhuisafdelingen met hoge psychologische veiligheid rapporteren meer medische fouten — niet omdat ze meer fouten maken, maar omdat ze veiliger worden gemeld." },
      { domain: "Innovatie", icon: "💡", text: "Teams met psychologische veiligheid genereren meer creatieve ideeën — leden durven half-uitgewerkte concepten te delen zonder angst voor afwijzing." }
    ],
  },

  // Batch Z2 – Filosofie van de Geest
  {
    id: "hard-problem-consciousness",
    title: "Het Harde Probleem van Bewustzijn",
    difficulty: 3,
    emoji: "🧠",
    academicCategory: "Filosofie",
    skillCategory: "Filosofie van de Geest",
    definition: "Het harde probleem van bewustzijn (Chalmers) is de vraag waarom fysische hersenprocessen gepaard gaan met subjectieve ervaring — waarom is er überhaupt 'iets dat het is' om iets te ervaren?",
    abstractExample: "We kunnen volledig begrijpen hoe het brein rood licht verwerkt — maar waarom ervaart het rood als rood? De kloof tussen fysisch proces en subjectieve beleving is het harde probleem.",
    examples: [
      { domain: "Wetenschap", icon: "🔬", text: "Neurowetenschappers kunnen de hersenactiviteit bij pijn volledig mappen — maar waarom voelt pijn zo verschrikkelijk? Dat is het harde probleem." },
      { domain: "AI", icon: "🤖", text: "Een computer kan 'pijn' rapporteren als output, maar ervaart hij pijn? Het harde probleem maakt dit onmogelijk van buiten te bepalen." },
      { domain: "Filosofie", icon: "📚", text: "De filosoof Thomas Nagel vroeg: 'What is it like to be a bat?' — subjectieve ervaring is niet reduceerbaar tot objectieve beschrijving." }
    ],
  },
  {
    id: "free-will-debate",
    title: "Vrije Wil",
    difficulty: 3,
    emoji: "🎲",
    academicCategory: "Filosofie",
    skillCategory: "Filosofie van de Geest",
    definition: "Het vrije-wil-debat vraagt of onze keuzes werkelijk vrij zijn of worden bepaald door eerdere oorzaken (genetica, hersenen, omgeving) — en wat dit betekent voor morele verantwoordelijkheid en straf.",
    abstractExample: "Als jouw brein de beslissing neemt 0.5 seconde vóórdat jij je bewust 'beslist' (Libet-experiment) — wie besliste dan eigenlijk?",
    examples: [
      { domain: "Recht", icon: "⚖️", text: "Als hersenletsel aantoonbaar leidt tot crimineel gedrag, in hoeverre is de dader dan moreel verantwoordelijk? Rechtsstelsels worstelen hiermee." },
      { domain: "Verslaving", icon: "💊", text: "Is een verslaafde vrij om te stoppen? Als zijn hersenen fysiologisch zijn veranderd, is zijn 'keuze' dan vrij?" },
      { domain: "Neurowetenschappen", icon: "🔬", text: "Libet's experimenten toonden dat hersenen al beslissingen nemen vóór bewuste intentie — wat de illusie van vrije wil suggereert." }
    ],
  },
  {
    id: "personal-identity",
    title: "Persoonlijke Identiteit",
    difficulty: 3,
    emoji: "👤",
    academicCategory: "Filosofie",
    skillCategory: "Filosofie van de Geest",
    definition: "Persoonlijke identiteit is de vraag wat maakt dat jij over de tijd heen dezelfde persoon bent — ondanks dat je cellen, herinneringen, overtuigingen en lichaam voortdurend veranderen.",
    abstractExample: "Het schip van Theseus: als je elk plank geleidelijk vervangt, is het nog hetzelfde schip? Zo ook: als al jouw cellen en herinneringen veranderen, ben jij nog dezelfde persoon?",
    examples: [
      { domain: "Medisch", icon: "🏥", text: "Iemand met ernstige amnesie verliest persoonlijke herinneringen — is hij nog 'dezelfde persoon' in morele, juridische en persoonlijke zin?" },
      { domain: "Bewustzijn", icon: "🧠", text: "Als jouw hersenen stap voor stap worden vervangen door siliconen chips, verdwijnt dan jouw bewustzijn abrupt of geleidelijk?" },
      { domain: "Groei", icon: "🌱", text: "Je 10-jarige zelf en je huidige zelf delen weinig overtuigingen, relaties of interesses — wat maakt jullie toch 'dezelfde' persoon?" }
    ],
  },
  {
    id: "dualism-vs-monism",
    title: "Dualisme vs. Monisme",
    difficulty: 3,
    emoji: "⚖️",
    academicCategory: "Metafysica",
    skillCategory: "Filosofie van de Geest",
    definition: "Dualisme (Descartes) stelt dat geest en lichaam fundamenteel verschillende substanties zijn; monisme stelt dat alles één substantie is — ofwel alleen materie (materialisme) of alleen geest (idealisme) of neutraal.",
    abstractExample: "Dualisme: software en hardware zijn fundamenteel verschillende dingen. Monisme: er is alleen hardware, software is slechts een beschrijving van hoe hardware functioneert.",
    examples: [
      { domain: "Religie", icon: "🕌", text: "Veel religieuze tradities zijn dualistisch: de ziel is onsterfelijk en verschilt fundamenteel van het sterfelijke lichaam." },
      { domain: "Neurowetenschappen", icon: "🔬", text: "Moderne neurowetenschappen zijn methodologisch monistisch: al het mentale wordt verklaard via hersenen — maar dit lost het harde probleem niet op." },
      { domain: "Dagelijks denken", icon: "💭", text: "Mensen denken intuïtief dualistisch: 'mijn lichaam deed het maar ík wist beter' impliceert een scheiding tussen zelf en lichaam." }
    ],
  },
  {
    id: "embodied-cognition",
    title: "Belichaamd Cognitie",
    difficulty: 2,
    emoji: "🧘",
    academicCategory: "Cognitieve Wetenschap",
    skillCategory: "Filosofie van de Geest",
    definition: "Belichaamd cognitie (embodied cognition) stelt dat denken niet alleen in de hersenen plaatsvindt maar fundamenteel is verweven met het lichaam en de omgeving — lichamelijke ervaringen vormen onze concepten en emoties.",
    abstractExample: "We denken over 'toekomst' als 'voor ons' en 'verleden' als 'achter ons' — een ruimtelijke metafoor die voortkomt uit lichamelijke oriëntatie, niet abstracte logica.",
    examples: [
      { domain: "Taal", icon: "📖", text: "Houd een warme kop koffie vast en je beoordeelt een vreemde als warmer (vriendelijker) — lichamelijke warmte beïnvloedt sociale oordelen." },
      { domain: "Sport", icon: "⚽", text: "Sporters die 'feel' praten over hun spel beschrijven cognitieve processen die zijn ingebed in lichamelijke gewoonten, niet bewuste redenering." },
      { domain: "Onderwijs", icon: "📚", text: "Kinderen leren rekenen beter via lichamelijke manipulaties (blokken tellen) dan abstracte symbolen — het lichaam verankert concepten." }
    ],
  },
  {
    id: "philosophy-of-language",
    title: "Taalfilosofie",
    difficulty: 3,
    emoji: "🗣️",
    academicCategory: "Filosofie",
    skillCategory: "Filosofie van de Geest",
    definition: "Taalfilosofie onderzoekt hoe woorden betekenis hebben, hoe taal de werkelijkheid beschrijft en of taal ons denken bepaalt (Sapir-Whorf) of enkel uitdrukt — fundamentele vragen over de relatie tussen taal, geest en realiteit.",
    abstractExample: "Beschrijft de zin 'de berg is groen' een feit dat bestaat onafhankelijk van de zin? Of bepaalt de taal mede hoe we de wereld organiseren?",
    examples: [
      { domain: "Kleuren", icon: "🌈", text: "Sommige talen hebben meer kleurcategorieën dan andere — sprekers van die talen onderscheiden kleurnuances sneller, wat suggereert dat taal perceptie beïnvloedt." },
      { domain: "Recht", icon: "⚖️", text: "Wat 'moord' en 'doodslag' betekenen heeft juridische consequenties — taalkundige categorisering heeft reële gevolgen." },
      { domain: "Politiek", icon: "🏛️", text: "Woorden als 'vrijheidsstrijder' vs. 'terrorist' beschrijven dezelfde persoon maar impliceren fundamenteel verschillende morele oordelen." }
    ],
  },
  {
    id: "extended-mind",
    title: "Uitgebreide Geest",
    difficulty: 3,
    emoji: "📱",
    academicCategory: "Cognitieve Filosofie",
    skillCategory: "Filosofie van de Geest",
    definition: "De uitgebreide geest-hypothese (Clark & Chalmers) stelt dat cognitie niet stopt bij de schedel — notitieboeken, smartphones en andere tools zijn functioneel deel van het cognitieve systeem, niet slechts hulpmiddelen erbuiten.",
    abstractExample: "Als een alzheimerpatiënt een notitieboek gebruikt als extern geheugen, is dat notitieboek dan functioneel equivalent aan hersenengeheugen? Clark & Chalmers zeggen: ja.",
    examples: [
      { domain: "Technologie", icon: "📱", text: "Jouw smartphone slaat contacten, afspraken en kennis op — verwijder het en een groot deel van jouw 'functionele geheugen' is weg." },
      { domain: "Schrijven", icon: "✏️", text: "Filosofen die denken door te schrijven gebruiken papier als cognitief verlengstuk — denken vindt deels buiten de schedel plaats." },
      { domain: "Architectuur", icon: "🏛️", text: "Steden en gebouwen zijn cognitieve scaffolding — ze structureren hoe we ons gedragen en denken." }
    ],
  },
  {
    id: "phenomenology",
    title: "Fenomenologie",
    difficulty: 3,
    emoji: "🌅",
    academicCategory: "Filosofie",
    skillCategory: "Filosofie van de Geest",
    definition: "Fenomenologie is de filosofische studie van de structuur van directe bewuste ervaring — hoe verschijnen dingen aan ons, los van objectieve beschrijvingen — gesticht door Husserl en uitgewerkt door Heidegger en Merleau-Ponty.",
    abstractExample: "Fenomenologie onderzoekt niet de stoel als fysiek object, maar hoe de stoel verschijnt aan jou als iets om op te zitten — de betekenisvolle structuur van jouw ervaring.",
    examples: [
      { domain: "Zorg", icon: "🏥", text: "Fenomenologische verplegingskunde vraagt niet 'wat zijn de symptomen?' maar 'hoe ervaart de patiënt zijn ziekte?' — voor betere zorg." },
      { domain: "Ontwerp", icon: "🎨", text: "Fenomenologisch geïnspireerd UX-design vraagt hoe gebruikers hun interactie met een product écht ervaren, niet alleen meten wat ze klikken." },
      { domain: "Psychologie", icon: "🧠", text: "Existentiële psychologie (Frankl, May) gebruikt fenomenologie om de unieke ervaring van individuen centraal te stellen in therapie." }
    ],
  },
  {
    id: "epistemic-humility-mind",
    title: "Epistemische Bescheidenheid",
    difficulty: 2,
    emoji: "🤔",
    academicCategory: "Epistemologie",
    skillCategory: "Filosofie van de Geest",
    definition: "Epistemische bescheidenheid is de erkenning van de grenzen van onze kennis — dat onze overtuigingen feilbaar zijn, dat we belangrijke blinde vlekken hebben en dat zekerheid zelden gerechtvaardigd is.",
    abstractExample: "Een epistemisch bescheiden persoon zegt 'ik denk dat dit klopt en hier zijn mijn redenen' in plaats van 'dit is gewoon zo' — hij houdt altijd ruimte voor nieuwe informatie.",
    examples: [
      { domain: "Wetenschap", icon: "🔬", text: "Wetenschappelijke methode is gebaseerd op epistemische bescheidenheid: theorieën zijn nooit bewezen, alleen (voorlopig) bevestigd of weerlegd." },
      { domain: "Politiek", icon: "🏛️", text: "Politici die toegeven dat ze ongelijk hadden of situaties verkeerd inschatten, tonen zeldzame epistemische bescheidenheid." },
      { domain: "Persoonlijk", icon: "👤", text: "Iemand die zegt 'ik begrijp pas achteraf dat ik hier volledig naast zat' beoefent epistemische bescheidenheid over zijn eigen denkprocessen." }
    ],
  },
  {
    id: "philosophy-of-perception",
    title: "Perceptiefilosofie",
    difficulty: 2,
    emoji: "👁️",
    academicCategory: "Filosofie",
    skillCategory: "Filosofie van de Geest",
    definition: "Perceptiefilosofie onderzoekt de relatie tussen onze zintuigelijke ervaringen en de buitenwereld — zien we de wereld direct zoals ze is, of construeert de geest een representatie die kan afwijken van de werkelijkheid?",
    abstractExample: "Een stok die half in water steekt ziet eruit alsof hij geknikt is — zintuiglijke informatie klopt, maar de conclusie ('geknikt') is onjuist. Wat zien we dan echt?",
    examples: [
      { domain: "Illusies", icon: "🌈", text: "Optische illusies tonen dat perceptie een constructie is van de geest, niet een directe registratie van de werkelijkheid." },
      { domain: "Kleur", icon: "🎨", text: "Kleuren bestaan niet in de buitenwereld — objecten hebben golflengte, maar 'rood' is een mentale constructie van het visuele systeem." },
      { domain: "VR", icon: "🥽", text: "Virtual reality bewijst dat de geest overtuigd kan worden van een werkelijkheid die puur geconstrueerd is — wat zegt dit over 'echte' perceptie?" }
    ],
  },

  // Batch Z3 – Complexiteit & Systemen
  {
    id: "emergence-complexity",
    title: "Emergentie",
    difficulty: 3,
    emoji: "🌀",
    academicCategory: "Complexiteitswetenschap",
    skillCategory: "Complexiteit & Systemen",
    definition: "Emergentie is het verschijnsel dat complexe systemen eigenschappen ontwikkelen die niet aanwezig zijn in de afzonderlijke delen — het geheel is anders dan (en niet reduceerbaar tot) de som der delen.",
    abstractExample: "Watermoleculen hebben geen eigenschap 'nat' — maar miljarden samen produceren een vloeistof die je kunt voelen. Natheidheid emergeert uit de interacties.",
    examples: [
      { domain: "Bewustzijn", icon: "🧠", text: "Bewustzijn emergeert uit neuronen die individueel geen bewustzijn hebben — de meest mysterieuze emergentie in de natuur." },
      { domain: "Markt", icon: "📈", text: "Marktprijzen emergeren uit miljoenen individuele transacties — geen centrale planner berekent ze, ze zijn het resultaat van de interacties." },
      { domain: "Mierenkolo", icon: "🐜", text: "Een mierenkolo vertoont complex collectief gedrag (voedselroutes, verdediging) zonder centrale planning — emergentie uit eenvoudige lokale regels." }
    ],
  },
  {
    id: "complex-adaptive-systems",
    title: "Complexe Adaptieve Systemen",
    difficulty: 3,
    emoji: "🕸️",
    academicCategory: "Complexiteitswetenschap",
    skillCategory: "Complexiteit & Systemen",
    definition: "Complexe adaptieve systemen (CAS) zijn systemen bestaande uit vele interacterende agenten die zich aanpassen aan hun omgeving — producerend orde zonder centrale leiding, via terugkoppeling en selectie.",
    abstractExample: "Een stedelijk verkeerssysteem is een CAS: duizenden bestuurders passen individueel hun rijgedrag aan op basis van lokale informatie, waardoor globale verkeerspatronen emergeren zonder dirigent.",
    examples: [
      { domain: "Economie", icon: "📈", text: "Markten zijn CAS: miljoenen agenten handelen lokaal, producerend macro-economische patronen die niemand centraal heeft ontworpen." },
      { domain: "Immune systeem", icon: "🦠", text: "Het immuunsysteem is een CAS: T-cellen en B-cellen interageren en leren van nieuwe pathogenen zonder centrale command." },
      { domain: "Sociale media", icon: "📱", text: "Virale trends op sociale media emergeren uit miljoenen individuele shares en likes — niemand plan ze, ze zijn CAS-fenomenen." }
    ],
  },
  {
    id: "feedback-loops",
    title: "Terugkoppellussen",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Systeemtheorie",
    skillCategory: "Complexiteit & Systemen",
    definition: "Terugkoppellussen zijn circuits in systemen waarbij output de input beïnvloedt: positieve terugkoppeling versterkt verandering (instabiliteit); negatieve terugkoppeling dempte verandering (stabiliteit).",
    abstractExample: "Een thermostaat is een negatieve terugkoppellus: als het te warm wordt, zet hij de verwarming uit. Een microfoonstoring is positief: geluid wordt versterkt, wat meer geluid maakt.",
    examples: [
      { domain: "Klimaat", icon: "🌡️", text: "Smeltend ijs reflecteert minder zonlicht → meer warmteabsorptie → meer ijs smelt: positieve terugkoppeling die klimaatverandering versnelt." },
      { domain: "Economie", icon: "📈", text: "Economische groei → meer investeringen → meer groei: positieve terugkoppeling (totdat een rem optreedt)." },
      { domain: "Leren", icon: "📚", text: "Succes → meer zelfvertrouwen → meer inspanning → meer succes: positieve terugkoppeling in het leerproces." }
    ],
  },
  {
    id: "nonlinear-dynamics",
    title: "Niet-lineaire Dynamica",
    difficulty: 3,
    emoji: "🦋",
    academicCategory: "Wiskunde",
    skillCategory: "Complexiteit & Systemen",
    definition: "Niet-lineaire dynamica beschrijft systemen waarbij kleine veranderingen in beginomstandigheden leiden tot dramatisch verschillende uitkomsten — het 'vlindereffect' maakt perfecte voorspelling op lange termijn onmogelijk.",
    abstractExample: "Een pendulum dat iets harder wordt aangeslagen beweegt niet iets harder maar chaotisch compleet anders — kleine input, dramatisch andere output.",
    examples: [
      { domain: "Weer", icon: "⛈️", text: "Lorenz ontdekte dat weermodellen exponentieel afwijken bij minimale meetfouten — vandaar de 7-dag weersgrens voor betrouwbare voorspelling." },
      { domain: "Ecologie", icon: "🦁", text: "Prooi-predatorcycli in ecosystemen zijn niet-lineair: kleine verstoringen kunnen leiden tot populatieexplosies of -crashes." },
      { domain: "Economie", icon: "📈", text: "Financiële crises emergeren uit kleine aanvankelijke verstoringen die via niet-lineaire terugkoppeling escaleren naar systeemcrises." }
    ],
  },
  {
    id: "systems-thinking",
    title: "Systeemdenken",
    difficulty: 2,
    emoji: "🔭",
    academicCategory: "Systeemtheorie",
    skillCategory: "Complexiteit & Systemen",
    definition: "Systeemdenken is een benadering die focust op hoe onderdelen van een systeem met elkaar interageren en hoe systemen als geheel functioneren — in contrast met lineair denken dat oorzaken en gevolgen isoleert.",
    abstractExample: "Lineair denken: bacteriën veroorzaken ziekte → antibiotica doden bacteriën → probleem opgelost. Systeemdenken: antibiotica beïnvloeden ook het microbioom, resistentie en immuunsysteem — het systeem als geheel.",
    examples: [
      { domain: "Gezondheidszorg", icon: "🏥", text: "Behandelen van diabetes alleen met medicatie negeert het systeem: voeding, beweging, stress, slaap en sociaaleconomische context zijn allen verweven." },
      { domain: "Onderwijs", icon: "📚", text: "Lage schoolprestaties oplossen via betere docenten negeert het systeem: armoede, ouderlijk support, psychologische veiligheid en buurtomgeving spelen allen mee." },
      { domain: "Bedrijf", icon: "💼", text: "Verkoop verhogen via meer verkopers zonder naar het productie- en distributiesysteem te kijken kan het systeem overbelasten." }
    ],
  },
  {
    id: "scale-free-networks",
    title: "Schaalvrije Netwerken",
    difficulty: 3,
    emoji: "🌐",
    academicCategory: "Netwerkwetenschap",
    skillCategory: "Complexiteit & Systemen",
    definition: "Schaalvrije netwerken volgen een machtswetdistributie: de meeste knopen hebben weinig verbindingen, maar een kleine minderheid (hubs) heeft extreem veel — internet, sociale netwerken en biologische netwerken volgen dit patroon.",
    abstractExample: "Het internet is schaalvrij: de meeste sites hebben enkele bezoekers, maar Google en Wikipedia hebben miljarden — een kleine elite van hubs domineert het netwerk.",
    examples: [
      { domain: "Internet", icon: "💻", text: "Weinige websites ontvangen het leeuwendeel van het webverkeer — schaalvrije distributie maakt zoekmachines dominant en kleine sites kwetsbaar." },
      { domain: "Biologie", icon: "🦠", text: "Metabolische netwerken in cellen zijn schaalvrij: weinige metabolieten zijn betrokken bij de meeste reacties — verwijdering van hubs is fataal." },
      { domain: "Sociaal", icon: "👥", text: "Sociale netwerken zijn schaalvrij: superconnectors (hubs) zijn cruciaal voor informatieverbreiding — zij starten epidemieën van ideeën en virussen." }
    ],
  },
  {
    id: "cynefin-framework",
    title: "Cynefin-raamwerk",
    difficulty: 2,
    emoji: "🗺️",
    academicCategory: "Managementwetenschap",
    skillCategory: "Complexiteit & Systemen",
    definition: "Het Cynefin-raamwerk (Snowden) onderscheidt vier contexten: eenvoudig (beste praktijken), ingewikkeld (goede praktijken via expertise), complex (emergente praktijken via experimenteren) en chaotisch (novelpraktijken via daadkracht) — elk vereist een andere beslisaanpak.",
    abstractExample: "Een vliegtuigmotor repareren is ingewikkeld (expertise nodig maar kenbare procedure); een nieuwe markt betreden is complex (probeer-observeer-leer); een brand blussen is chaotisch (handel nu, analyseer later).",
    examples: [
      { domain: "Bedrijf", icon: "💼", text: "Productielijn is 'eenvoudig' (standaard procedures); R&D is 'complex' (onzekerheid vereist experimenten); PR-crisis is 'chaotisch' (handle first, analyze later)." },
      { domain: "Beleid", icon: "🏛️", text: "Een pandemie begint chaotisch, wordt complex naarmate data groeit, en onderdelen worden ingewikkeld als oplossingen zijn gevonden." },
      { domain: "Onderwijs", icon: "📚", text: "Rekenaritmetiek leren is 'ingewikkeld'; creatief schrijven faciliteren is 'complex'; kindbescherming bij crisissituatie is 'chaotisch'." }
    ],
  },
  {
    id: "self-organization",
    title: "Zelforganisatie",
    difficulty: 2,
    emoji: "🌿",
    academicCategory: "Complexiteitswetenschap",
    skillCategory: "Complexiteit & Systemen",
    definition: "Zelforganisatie is het emergeren van orde en structuur in een systeem zonder externe sturing — via lokale interacties tussen componenten die globale patronen produceren.",
    abstractExample: "IJskristallen vormen ingewikkelde, symmetrische vormen via eenvoudige moleculaire interacties — geen blauwdruk, geen ontwerper, pure zelforganisatie.",
    examples: [
      { domain: "Biologie", icon: "🦋", text: "Vogelopstijgpatronen (murmurations) zijn zelforganisatie: duizenden vogels volgen drie eenvoudige regels (afstand houden, snelheid aanpassen, richting volgen) en produceren prachtige golven." },
      { domain: "Samenleving", icon: "🏙️", text: "Stadswijken met karakter (Jordaan, Pijp) zijn zelforganiserend: ze emergeerden uit lokale interacties van bewoners, zonder masterplan." },
      { domain: "Internet", icon: "💻", text: "Wikipedia is zelforganiserend: duizenden bijdragers coördineren zonder hiërarchie en produceren een coherente encyclopedie." }
    ],
  },
  {
    id: "resilience-systems",
    title: "Systeemveerkracht",
    difficulty: 2,
    emoji: "🌊",
    academicCategory: "Complexiteitswetenschap",
    skillCategory: "Complexiteit & Systemen",
    definition: "Systeemveerkracht is het vermogen van een systeem om verstoringen op te vangen en te herstellen terwijl de essentiële structuur en functie behouden blijft — veerkracht verschilt van stabiliteit (geen verstoring) en weerstand (verstoring weerstaan).",
    abstractExample: "Een rietstengel is veerkrachtig: hij buigt in de wind maar breekt niet en keert terug naar zijn oorspronkelijke positie. Een eiken plank is resistent maar breekt bij hoge spanning.",
    examples: [
      { domain: "Ecologie", icon: "🌳", text: "Een divers ecosysteem is veerkrachtiger dan een monocultuur: als één soort wegvalt, nemen andere de functie over." },
      { domain: "Economie", icon: "💰", text: "Landen met gediversifieerde economieën herstellen sneller van crises dan landen die afhankelijk zijn van één sector." },
      { domain: "Persoonlijk", icon: "👤", text: "Mensen met brede sociale netwerken, vaardigheden en financiële reserves zijn veerkrachtiger bij persoonlijke crises." }
    ],
  },
  {
    id: "unintended-consequences",
    title: "Onbedoelde Gevolgen",
    difficulty: 2,
    emoji: "🎯",
    academicCategory: "Systeemtheorie",
    skillCategory: "Complexiteit & Systemen",
    definition: "Onbedoelde gevolgen zijn effecten van interventies die niet waren beoogd en vaak het tegenovergestelde bereiken van het doel — een klassieke uitdaging bij ingrijpen in complexe systemen.",
    abstractExample: "Pythons werden geïntroduceerd in Florida als huisdier, ontsnapten en verwoesten nu de lokale fauna — een onbedoeld gevolg van een ogenschijnlijk onschuldige actie.",
    examples: [
      { domain: "Cobra-effect", icon: "🐍", text: "De Britse overheid betaalde voor ingeleverde cobra-hoofden om slangen te bestrijden — kweekkwekers begonnen cobra's te kweeken voor het geld. Meer cobra's." },
      { domain: "Verkeer", icon: "🚗", text: "Bredere wegen introduceren om files op te lossen trekken meer automobilisten aan — het geïnduceerde vraageffect herstelt de file." },
      { domain: "Gezondheidszorg", icon: "🏥", text: "Antibioticaoveralgebruik in de veehouderij lost kortetermijninfecties op maar produceert resistente bacteriën — een serieuze lange-termijn bedreiging." }
    ],
  },

  // Batch Z4 – Culturele Intelligentie
  {
    id: "hofstede-dimensions",
    title: "Hofstede's Cultuurdimensies",
    difficulty: 2,
    emoji: "🌍",
    academicCategory: "Cross-culturele Psychologie",
    skillCategory: "Culturele Intelligentie",
    definition: "Hofstede identificeerde zes dimensies waarop nationale culturen verschillen: machtsafstand, individualisme/collectivisme, onzekerheidsvermijding, masculiniteit/feminiteit, lange/korte termijnoriëntatie en inschikkelijkheid/ingetogenheid.",
    abstractExample: "Een hoge machtsafstand cultuur verwacht dat medewerkers opdrachten uitvoeren zonder te vragen; een lage machtsafstand cultuur verwacht dat medewerkers terugkoppelen en aanvechten.",
    examples: [
      { domain: "Bedrijfsleven", icon: "💼", text: "Nederlandse medewerkers (lage machtsafstand) spreken managers direct aan; Japanse medewerkers (hoge machtsafstand) vermijden openbaar conflict met superieuren." },
      { domain: "Familiecultuur", icon: "👨‍👩‍👧", text: "Collectivistische culturen (China, India) verwachten dat familiale overwegingen carrièrebeslissingen domineren; individualistische culturen (VS, NL) verwachten het omgekeerde." },
      { domain: "Risico", icon: "🎲", text: "Landen met hoge onzekerheidsvermijding (Japan, Duitsland) hebben meer regels, protocollen en risicoaversie; lage (Denemarken, Singapore) accepteren meer ambiguïteit." }
    ],
  },
  {
    id: "high-low-context-culture",
    title: "Hoge- en Lage-Contextculturen",
    difficulty: 2,
    emoji: "💬",
    academicCategory: "Communicatiewetenschap",
    skillCategory: "Culturele Intelligentie",
    definition: "In hoge-contextculturen hangt communicatie sterk af van impliciete context, relaties en non-verbale signalen; in lage-contextculturen is communicatie expliciet, direct en grotendeels in woorden zelf.",
    abstractExample: "In Japan kan 'dat is moeilijk' 'nee' betekenen — de context geeft de werkelijke betekenis. In Nederland betekent 'nee' gewoon nee en wordt dit direct uitgesproken.",
    examples: [
      { domain: "Vergadering", icon: "💼", text: "Japanse onderhandelaars die zwijgen of indirect reageren, communiceren 'nee' — directe Nederlanders interpreteren dat als onzekerheid en gaan door." },
      { domain: "E-mail", icon: "📧", text: "Hoge-contextculturen beginnen e-mails met uitgebreide begroetingen en contextbuilding; lage-contextculturen komen onmiddellijk to the point." },
      { domain: "Feedback", icon: "🗣️", text: "Een Amerikaanse manager geeft direct kritische feedback; een Koreaanse manager geeft dezelfde kritiek indirect via subtiele signalen." }
    ],
  },
  {
    id: "cultural-intelligence-cq",
    title: "Culturele Intelligentie (CQ)",
    difficulty: 2,
    emoji: "🌐",
    academicCategory: "Organisatiepsychologie",
    skillCategory: "Culturele Intelligentie",
    definition: "Culturele intelligentie (CQ) is het vermogen om effectief te functioneren in cultureel diverse omgevingen — bestaande uit CQ-kennis (begrip van cultuurverschillen), CQ-strategie (bewust omgaan ermee) en CQ-gedrag (aanpassen van eigen stijl).",
    abstractExample: "CQ is als muzikale intelligentie: je kunt muzieknotenschrift kennen (kennis), een nieuw stuk analyseren (strategie) en het spelen aanpassen aan een andere stijl (gedrag) — allemaal vereist zijn eigen vaardigheid.",
    examples: [
      { domain: "Internationaal zakendoen", icon: "✈️", text: "Een hoge-CQ manager begrijpt dat een Japanse partner die een beslissing uitstelt niet twijfelt maar meer informele consensus nodig heeft." },
      { domain: "Zorg", icon: "🏥", text: "Een verpleegkundige met hoge CQ past communicatiestijl aan bij patiënten uit verschillende culturele achtergronden." },
      { domain: "Leiderschap", icon: "👔", text: "Een globale teamleider met hoge CQ begrijpt dat motivatietechnieken die in Nederland werken niet universeel effectief zijn." }
    ],
  },
  {
    id: "cultural-relativism",
    title: "Cultureel Relativisme",
    difficulty: 3,
    emoji: "🌈",
    academicCategory: "Antropologie",
    skillCategory: "Culturele Intelligentie",
    definition: "Cultureel relativisme is de opvatting dat culturele praktijken en waarden begrepen moeten worden binnen hun eigen context, niet beoordeeld met maatstaven van een andere cultuur — maar het heeft grenzen als het culturele morele relativisme wordt.",
    abstractExample: "Cultureel relativisme: begrijp eerder waarom in sommige culturen ouders bij echtgenoten beslissen, dan het direct als 'fout' te labelen. Moreel absolutisme: erken tegelijk dat gedwongen huwelijken universele mensenrechten schenden.",
    examples: [
      { domain: "Antropologie", icon: "🌍", text: "Boas ontwikkelde cultureel relativisme om Europees etnocentrisme te bestrijden — culturen zijn niet 'primitiever' of 'geavanceerder', alleen anders." },
      { domain: "Mensenrechten", icon: "⚖️", text: "De grens van cultureel relativisme: vrouwenbesnijdenis wordt door sommigen verdedigd als culturele praktijk, maar gaat in tegen het universele recht op lichamelijke integriteit." },
      { domain: "Zakendoen", icon: "💼", text: "Corruptie als culturele norm: cultureel relativisme begrijpt het, maar de grens is dat naleving van corruptie ernstige schade berokkent." }
    ],
  },
  {
    id: "acculturation",
    title: "Acculturatie",
    difficulty: 2,
    emoji: "🤝",
    academicCategory: "Culturele Psychologie",
    skillCategory: "Culturele Intelligentie",
    definition: "Acculturatie beschrijft de aanpassing van individuen of groepen bij contact met een andere cultuur — via assimilatie (eigen cultuur opgeven), integratie (beide behouden), separatie (eigen cultuur behouden) of marginalisatie (beiden verliezen).",
    abstractExample: "Een immigrant integreert wanneer hij Nederlandse feestdagen viert terwijl hij ook zijn eigen culturele tradities thuis behoudt — beide culturen zijn actief.",
    examples: [
      { domain: "Immigratie", icon: "🌍", text: "Berry's model toont dat integratie (beide culturen) het meest positief correleert met psychologisch welzijn bij immigranten." },
      { domain: "Bedrijfsfusie", icon: "🏢", text: "Bij fusies assimileren sommige afdelingen de cultuur van de nieuwe eigenaar; andere behouden hun cultuur (separatie) — integratie is zelden het gevolg." },
      { domain: "Expats", icon: "✈️", text: "Expats die lokale gewoontes adopteren terwijl ze hun professionele identiteit behouden (integratie) passen zich het snelst aan." }
    ],
  },
  {
    id: "stereotype-threat",
    title: "Stereotypedreig",
    difficulty: 2,
    emoji: "⚡",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Culturele Intelligentie",
    definition: "Stereotype-dreiging is het fenomeen waarbij mensen slechter presteren op een taak wanneer ze zich bewust zijn van een negatief stereotype over hun groep — de angst het stereotype te bevestigen ondermijnt zelf de prestatie.",
    abstractExample: "Vrouwen die voor een wiskunde-examen worden herinnerd dat 'vrouwen slechter zijn in wiskunde', scoren gemiddeld lager — niet vanwege intelligentie maar vanwege de prestatiedruk het stereotype te ontkrachten.",
    examples: [
      { domain: "Onderwijs", icon: "📚", text: "Steele's originele onderzoek: zwarte studenten presteerden slechter op verbale tests wanneer ze de test als intelligentiemeting zagen, maar gelijkwaardig wanneer dat label werd verwijderd." },
      { domain: "Sport", icon: "⚽", text: "Witte sprinters presteren slechter wanneer ze worden herinnerd aan het stereotype dat 'zwarte atleten sneller zijn' — stereotype-dreiging werkt beide kanten op." },
      { domain: "Ouderdom", icon: "👴", text: "Ouderen doen het slechter op geheugentests wanneer ze vooraf worden geconfronteerd met statistieken over leeftijdsgerelateerd geheugenverlies." }
    ],
  },
  {
    id: "intercultural-communication",
    title: "Interculturele Communicatie",
    difficulty: 2,
    emoji: "🗺️",
    academicCategory: "Communicatiewetenschap",
    skillCategory: "Culturele Intelligentie",
    definition: "Interculturele communicatie onderzoekt hoe culturele achtergronden communicatiepatronen beïnvloeden en hoe misverstanden ontstaan en overwonnen worden — essentieel in een geglobaliseerde wereld.",
    abstractExample: "Een handreiking, knikje of stilte betekenen totaal verschillende dingen in verschillende culturen — dezelfde actie, completely andere boodschap.",
    examples: [
      { domain: "Non-verbaal", icon: "🤝", text: "Een duim omhoog is positief in Nederland, maar beledigend in delen van het Midden-Oosten — non-verbale communicatie is niet universeel." },
      { domain: "Vergadering", icon: "💼", text: "Stilte in een vergadering: Finnen respecteren stille pauzes; Amerikanen ervaren stilte als ongemakkelijk en vullen het onmiddellijk op." },
      { domain: "E-mail", icon: "📧", text: "Een bondig antwoord als 'OK, dank je' wordt in Nederland als normaal gezien; in sommige Latijnse culturen kan het koud of ongeïnteresseerd overkomen." }
    ],
  },
  {
    id: "sapir-whorf-revisited",
    title: "Taal en Denken",
    difficulty: 2,
    emoji: "🗣️",
    academicCategory: "Taalkunde",
    skillCategory: "Culturele Intelligentie",
    definition: "De relatie tussen taal en denken: taalstructuur beïnvloedt aantoonbaar bepaalde cognitieve processen (ruimtelijke oriëntatie, tijdperceptie, kleurnuance) — een zwakkere versie van de Sapir-Whorf-hypothese die empirisch wordt ondersteund.",
    abstractExample: "De Pirahã-taal heeft geen getallen — en sprekers hebben moeite met exacte kwantiteiten. Taal zonder concept beperkt cognitie op dat gebied.",
    examples: [
      { domain: "Kleur", icon: "🎨", text: "Russischsprekenden hebben twee basiswoorden voor blauw (licht en donker) en onderscheiden blauwtinten sneller dan Engelstaligen die maar één basiswoord hebben." },
      { domain: "Ruimte", icon: "🧭", text: "Guugu Yimithirr-sprekers (Australisch Inheems) navigeren via absolute windrichtingen (noorden, zuiden) in plaats van relatieve richtingen (links, rechts) — en hebben een superieur intern kompas." },
      { domain: "Tijd", icon: "⏰", text: "Talen met een zwak uitgesproken toekomst (Fins vs. Engels) correleren met hogere spaar- en gezondheidsinvesteringen — toekomst voelt minder ver weg." }
    ],
  },
  {
    id: "globalization-culture",
    title: "Globalisering en Cultuur",
    difficulty: 2,
    emoji: "🌐",
    academicCategory: "Culturele Studies",
    skillCategory: "Culturele Intelligentie",
    definition: "Globalisering homogeniseert culturele expressie (McDonald's, Netflix, jeans) maar creëert tegelijkertijd lokale resistentie en hybridisatie — globale culturen en lokale identiteiten bestaan naast en doorheen elkaar.",
    abstractExample: "K-pop is een hybride: Koreaanse culturele identiteit gecombineerd met westerse pop-productietechnieken en wereldwijde distributie via YouTube — noch volledig westers, noch traditioneel Koreaans.",
    examples: [
      { domain: "Voeding", icon: "🍔", text: "McDonald's past menu's aan per land (McSpaghetti in de Filipijnen, Maharaja Mac in India) — globale formule, lokale aanpassing." },
      { domain: "Media", icon: "📺", text: "K-pop, Bollywood en Telenovela's tonen dat culturele producten niet alleen van west naar oost stromen — globale cultuur is meervoudig." },
      { domain: "Taal", icon: "🗣️", text: "Engels als lingua franca homogeniseert zakelijke communicatie, maar lokale talen herwinnen terrein via sociale media en cultuurtrots." }
    ],
  },
  {
    id: "implicit-bias",
    title: "Impliciete Bias",
    difficulty: 2,
    emoji: "🔍",
    academicCategory: "Sociale Psychologie",
    skillCategory: "Culturele Intelligentie",
    definition: "Impliciete bias zijn onbewuste attitudes of stereotypen die automatisch oordelen en gedrag beïnvloeden — zonder dat de persoon zich ervan bewust is of er mee instemt.",
    abstractExample: "Een sollicitatiecommissie die dezelfde CV tweemaal evalueert met een mannelijke of vrouwelijke naam, beoordeelt de 'mannelijke' versie consistent competenter — ook als alle leden zeggen geen gender-bias te hebben.",
    examples: [
      { domain: "Sollicitaties", icon: "💼", text: "Studies tonen dat CV's met 'witte' namen vaker uitnodigingen krijgen dan identieke CV's met 'allochtone' namen — aantoonbare impliciete bias." },
      { domain: "Geneeskunde", icon: "🏥", text: "Zwarte patiënten krijgen aantoonbaar minder pijnstillers voorgeschreven bij vergelijkbare pijn — impliciete bias bij medisch personeel." },
      { domain: "Rechtbank", icon: "⚖️", text: "Rechters geven soms hogere straffen aan mensen met 'sterker Afrikaans-Amerikaans gezicht' — onbewuste rassenbias beïnvloedt juridische oordelen." }
    ],
  },

  // Batch Z5 – Persoonlijke Effectiviteit II
  {
    id: "ikigai",
    title: "Ikigai",
    difficulty: 1,
    emoji: "🌸",
    academicCategory: "Levensfilosofie",
    skillCategory: "Persoonlijke Effectiviteit",
    definition: "Ikigai is een Japans concept dat de reden voor het opstaan beschrijft — het snijpunt van wat je liefhebt, waar je goed in bent, wat de wereld nodig heeft en waarvoor je betaald kunt worden.",
    abstractExample: "Een muziekdocent in een achterstandswijk vindt ikigai: hij houdt van muziek (passie), is een goede leraar (talent), helpt kwetsbare kinderen (missie) en verdient er zijn brood mee (beroep).",
    examples: [
      { domain: "Carrière", icon: "💼", text: "Een datawetenschapper die passie combineert met technische competentie, milieuoplossingen onderzoekt en een goed salaris verdient, heeft een sterk ikigai-alignment." },
      { domain: "Vrijwilligerswerk", icon: "❤️", text: "Een gepensioneerde die gratis taal-les geeft aan vluchtelingen vindt ikigai zonder financieel component — passie, talent en missie overlappen." },
      { domain: "Burnout-preventie", icon: "🔥", text: "Mensen zonder ikigai — die goed verdienen maar geen passie of missie ervaren — lopen hoger risico op burnout en zinloosheidscrises." }
    ],
  },
  {
    id: "time-blocking",
    title: "Tijdblokken",
    difficulty: 1,
    emoji: "📅",
    academicCategory: "Productiviteitswetenschap",
    skillCategory: "Persoonlijke Effectiviteit",
    definition: "Tijdblokken is de productiviteitsmethode waarbij je agenda-blokken reserveert voor specifieke taken in plaats van open tijd te laten — het omzetten van een takenlijst naar een concreet tijdschema.",
    abstractExample: "In plaats van 'schrijf rapport schrijven' op een takenlijst, blokkeer je maandag 09:00-11:00 voor 'rapport schrijven' in de agenda — specifiek, dus uitvoerbaar.",
    examples: [
      { domain: "Schrijven", icon: "✏️", text: "Cal Newport blokkeert 'deep work'-uren in de vroege ochtend voor zijn meest cognitief veeleisende werk, vrij van e-mail en vergaderingen." },
      { domain: "Leiderschap", icon: "👔", text: "Elon Musk gebruikte 5-minuut tijdblokken voor maximale controle over zijn agenda — extreme versie van de methode." },
      { domain: "Creativiteit", icon: "🎨", text: "Kunstenaars als Charles Darwin hadden vaste dagelijkse werkblokken — de structuur gaf creativiteit ruimte zonder eindeloze beslissingsmoeheid." }
    ],
  },
  {
    id: "second-brain",
    title: "Het Tweede Brein",
    difficulty: 1,
    emoji: "💾",
    academicCategory: "Productiviteitswetenschap",
    skillCategory: "Persoonlijke Effectiviteit",
    definition: "Een 'tweede brein' (Forte) is een persoonlijk kennisbeheersysteem — digitale notities, verbanden en referenties — dat als extern geheugen fungeert en creatieve verbanden legt die het biologische brein alleen niet kan bijhouden.",
    abstractExample: "In plaats van een briljant inzicht uit een boek te vergeten, leg je het vast in een gekoppeld notitiesysteem waar je het later terugvindt wanneer je het nodig hebt.",
    examples: [
      { domain: "Schrijven", icon: "✏️", text: "Een schrijver bouwt een Zettelkasten (kaartensysteem) van ideeën — bij het schrijven van een essay verbindt hij automatisch relevante notities." },
      { domain: "Onderzoek", icon: "🔬", text: "Wetenschappers die Roam Research of Obsidian gebruiken, bouwen een netwerk van concepten dat nieuwe verbanden zichtbaar maakt." },
      { domain: "Leren", icon: "📚", text: "Elke interessante quote, concept of inzicht wordt opgeslagen met context en verband — kennis accumuleeert over jaren en wordt bruikbaar." }
    ],
  },
  {
    id: "energy-management",
    title: "Energiebeheer",
    difficulty: 1,
    emoji: "⚡",
    academicCategory: "Productiviteitswetenschap",
    skillCategory: "Persoonlijke Effectiviteit",
    definition: "Energiebeheer erkent dat productiviteit niet alleen afhankelijk is van tijd maar ook van energie — fysieke, emotionele, mentale en spirituele energie moeten actief beheerd worden voor duurzame hoge prestaties.",
    abstractExample: "Je kunt 12 uur werken maar weinig bereiken bij lage energie; of in 4 uur uitzonderlijk presteren met hoge energie — de energiekwaliteit bepaalt meer dan de tijdkwantiteit.",
    examples: [
      { domain: "Atleten", icon: "🏃", text: "Topsporters plannen herstel zo zorgvuldig als training — energiebeheer is het plannen van herstelperiodes, niet alleen werktijden." },
      { domain: "Creatieven", icon: "🎨", text: "Schrijvers als Maya Angelou schreven alleen 's ochtends vroeg wanneer mentale energie op zijn hoogst was — pieken benutten, dalen accepteren." },
      { domain: "Management", icon: "💼", text: "De meest impactvolle beslissingen nemen in de ochtend (piek mentale energie) en routinetaken 's middags plannen." }
    ],
  },
  {
    id: "decision-fatigue",
    title: "Beslissingsvermoeidheid",
    difficulty: 2,
    emoji: "😩",
    academicCategory: "Cognitieve Psychologie",
    skillCategory: "Persoonlijke Effectiviteit",
    definition: "Beslissingsvermoeidheid is de verslechterende kwaliteit van beslissingen na een lange reeks beslismomenten — de mentale hulpbron voor beslissen raakt op, wat leidt tot impulsiviteit of vermijding.",
    abstractExample: "Rechters die eerder op de dag beslissen over gratieverzoeken, stemmen vaker in dan rechters die laat op de dag beslissen — de mentale hulpbron is uitgeput.",
    examples: [
      { domain: "Recht", icon: "⚖️", text: "Israelische rechters gaven 65% invrijheidsstelling na de ochtendpauze en vrijwel 0% vlak voor lunch — beslissingsvermoeidheid beïnvloede ernstige beslissingen." },
      { domain: "Winkelen", icon: "🛒", text: "Supermarkten plaatsen verleidelijke producten bij de kassa — aan het einde van een lang winkelproces is je beslissingsenergie op en zijn impulsaankopen het meest waarschijnlijk." },
      { domain: "Creatief werk", icon: "🎨", text: "Barack Obama en Steve Jobs droegen elke dag hetzelfde soort kleding om triviaal beslissingen te elimineren en beslissingsenergie te bewaren voor het belangrijke." }
    ],
  },
  {
    id: "atomic-habits-system",
    title: "Atoomgewoontes",
    difficulty: 1,
    emoji: "⚛️",
    academicCategory: "Gedragspsychologie",
    skillCategory: "Persoonlijke Effectiviteit",
    definition: "James Clear's atoomgewoontes stellen dat kleine 1%-verbeteringen dagelijks cumuleren tot enorme transformaties — en dat focus op systemen (gewoontes) consistenter resultaat geeft dan focus op doelen.",
    abstractExample: "1% beter per dag is na een jaar 37 keer beter; 1% slechter per dag is na een jaar vrijwel nul — de kracht van dagelijkse cumulatie is niet-intuïtief maar wiskundig enorm.",
    examples: [
      { domain: "Sport", icon: "🏃", text: "Brailsford's 'aggregation of marginal gains' bij Team Sky: tientallen 1%-verbeteringen in fietsers, voeding, slaap en uitrusting leidden naar meerdere Tour de France-overwinningen." },
      { domain: "Schrijven", icon: "✏️", text: "Elke dag 200 woorden schrijven bouwt een roman in een jaar — de dagelijkse atoomgewoonte maakt het onmogelijk om niet te slagen." },
      { domain: "Gezondheid", icon: "💪", text: "Elke dag de sportschoenen aan bij het opstaan (cue-routine) vermindert de drempel voor sporten drastisch — de gewoonte wordt automatisch." }
    ],
  },
  {
    id: "deliberate-practice",
    title: "Bewust Oefenen",
    difficulty: 2,
    emoji: "🎯",
    academicCategory: "Expertise-onderzoek",
    skillCategory: "Persoonlijke Effectiviteit",
    definition: "Bewust oefenen (Ericsson) is gefocuste, gedisciplineerde training buiten de comfortzone — met onmiddellijke feedback, gerichte correctie en doelbewuste aandacht voor zwakheden — in contrast met onderbewust 'herhalen van wat al goed gaat'.",
    abstractExample: "Een pianist die dezelfde stukken speelt die hij al kent, oefent niet bewust. Bewust oefenen: de moeilijkste passages 50 keer herhalen tot ze foutloos zijn.",
    examples: [
      { domain: "Muziek", icon: "🎵", text: "Yo-Yo Ma oefent niet zijn gehele repertoire maar focust op de maten die technisch onvolmaakt zijn — gerichte zwakte-aanpak." },
      { domain: "Sport", icon: "⚽", text: "Cristiano Ronaldo staat na training uren extra vrijschoppentraining te oefenen — bewuste repetitie van specifieke zwakheden." },
      { domain: "Schrijven", icon: "✏️", text: "Een schrijver die zijn eigen stijl analyseert, bewust probeert nieuwe structuren en feedback zoekt van redacteuren, groeit sneller dan iemand die 'gewoon schrijft'." }
    ],
  },
  {
    id: "mental-contrasting",
    title: "Mentaal Contrasteren",
    difficulty: 2,
    emoji: "⚖️",
    academicCategory: "Motivatiepsychologie",
    skillCategory: "Persoonlijke Effectiviteit",
    definition: "Mentaal contrasteren (Oettingen) combineert positieve visualisatie van het gewenste resultaat met realistisch nadenken over obstakels — bewezen effectiever dan puur positief denken of negatief piekeren.",
    abstractExample: "WOOP-methode: Wish (doel), Outcome (visualiseer het succes), Obstacle (identificeer het reële obstakel), Plan (als X, dan Y). Positief dromen mét obstakelbewustzijn.",
    examples: [
      { domain: "Gezondheid", icon: "🏃", text: "Vrouwen die WOOP toepasten bij gewichtsverlies bereikten significant meer dan vrouwen die alleen positief fantaseerden of alleen obstakels zagen." },
      { domain: "Werk", icon: "💼", text: "Een medewerker die een projectdoel visualiseert én de verwachte teamweerstand expliciet nadenkt, bereidt betere oplossingen voor dan iemand die alleen het doel voor ogen heeft." },
      { domain: "Relaties", icon: "💑", text: "Stel die positief denken combineert met realistisch nadenken over uitdagingen in hun relatie, rapporteert hogere relationele tevredenheid na jaren." }
    ],
  },
  {
    id: "self-compassion",
    title: "Zelfcompassie",
    difficulty: 1,
    emoji: "🤗",
    academicCategory: "Positieve Psychologie",
    skillCategory: "Persoonlijke Effectiviteit",
    definition: "Zelfcompassie (Neff) is het behandelen van jezelf bij mislukking of moeilijkheid met dezelfde vriendelijkheid en begrip als een goede vriend — in contrast met zelfkritiek die prestatie ondermijnt en veerkracht verlaagt.",
    abstractExample: "Wanneer je een fout maakt: zelfkritiek zegt 'je bent zo stom'; zelfcompassie zegt 'fouten maken is menselijk, hoe herstel ik?'. Zelfcompassie leidt paradoxaal tot betere prestaties.",
    examples: [
      { domain: "Sport", icon: "🏃", text: "Atleten met hoge zelfcompassie herstellen sneller van mislukkingen en nemen meer risico in training dan atleten met hoge zelfkritiek." },
      { domain: "Werk", icon: "💼", text: "Na een mislukt project: zelfcompassie analyseert wat er fout ging en leert, zelfkritiek piekert en vermijdt vergelijkbare uitdagingen." },
      { domain: "Gezondheid", icon: "💪", text: "Mensen met zelfcompassie houden hun gezonde gewoontes beter vol na een 'slip' — één slechte dag saboteert niet de hele week." }
    ],
  },
  {
    id: "essentialism",
    title: "Essentialisme",
    difficulty: 2,
    emoji: "🎯",
    academicCategory: "Levensfilosofie",
    skillCategory: "Persoonlijke Effectiviteit",
    definition: "Essentialisme (McKeown) is de discipline om systematisch te onderscheiden wat essentieel is en alles wat dat niet is bewust te elimineren — zodat de hoogste bijdrage aan wat echt telt mogelijk wordt.",
    abstractExample: "Een essentialist zegt niet 'ja' op 99% van de kansen en offert zijn beste werk op. Hij zegt 'ja' op 10% van de kansen en bereikt 10x meer met elk van die tien.",
    examples: [
      { domain: "Bedrijf", icon: "💼", text: "Apple lanceerde in de periode 1997-2007 slechts een handvol producten; Jobs' essentialisme maakte de Mac, iPod, iPhone en iPad mogelijk." },
      { domain: "Persoonlijk", icon: "👤", text: "Iemand die drie grote commitments heeft (gezin, één project, gezondheid) in plaats van twintig, presteert op elk van die drie consequent." },
      { domain: "Agenda", icon: "📅", text: "Een essentialistische agenda heeft 'nee' als standaardantwoord en 'ja' als uitzondering die defensief wordt bewaakt." }
    ],
  },

  // Batch Z6 – Leren & Geheugen
  {
    id: "spaced-repetition",
    title: "Gespreide Herhaling",
    difficulty: 2,
    emoji: "📅",
    academicCategory: "Leerpsychologie",
    skillCategory: "Leren & Geheugen",
    definition: "Gespreide herhaling is het principe dat herhaling van leerstof op toenemende intervallen (1 dag, 3 dagen, 1 week, 1 maand) dramatisch effectiever is voor langetermijnretentie dan herhaling in één sessie (cramming).",
    abstractExample: "Je brein vergeet informatie volgens een exponentiële curve — maar elke herhaling vlak voor het vergeetpunt herstelt én verlengt de retentie. Timing is alles.",
    examples: [
      { domain: "Talen", icon: "🗣️", text: "Anki-flashcards met spaced repetition-algoritme: woordenschat die je gisteren leerde, herhaal je morgen; die van een maand geleden, over een week." },
      { domain: "Geneeskunde", icon: "🏥", text: "Medische studenten die gestratificeerde herhaling gebruiken, scoren jaren later nog significant beter op staatsexamens dan 'crammers'." },
      { domain: "Muziek", icon: "🎵", text: "Pianisten die hetzelfde stuk iedere dag spelen leren het langzamer dan pianisten die het op dag 1, 3, 7 en 14 instuderen." }
    ],
  },
  {
    id: "retrieval-practice",
    title: "Ophaaloefen",
    difficulty: 2,
    emoji: "🧲",
    academicCategory: "Cognitieve Psychologie",
    skillCategory: "Leren & Geheugen",
    definition: "Ophaaloefen (retrieval practice) is de techniek van actief proberen informatie uit je geheugen op te halen — zelftesten, flashcards, vrije recall — wat leren sterker verankert dan passief herlezen.",
    abstractExample: "Het ophalen van een herinnering maakt die herinnering sterker — net zoals een spier die getraind wordt. Passief herlezen geeft het gevoel van kennen zonder het geheugenspoor te versterken.",
    examples: [
      { domain: "Studeren", icon: "📚", text: "Studenten die na het lezen het boek sluiten en opschrijven wat ze weten (free recall), onthouden 50% meer dan studenten die opnieuw lezen." },
      { domain: "Vergaderingen", icon: "💼", text: "Na een presentatie de aanwezigen vragen drie kernpunten op te schrijven verbetert retentie meer dan een samenvatting te geven." },
      { domain: "Talen", icon: "🗣️", text: "Flashcards (Anki): de ophaalmoeite bij moeilijk te herinneren woorden versterkt het geheugenspoor — de moeite zelf is het voordeel." }
    ],
  },
  {
    id: "interleaving-learning",
    title: "Doorweven Oefenen",
    difficulty: 2,
    emoji: "🧩",
    academicCategory: "Cognitieve Psychologie",
    skillCategory: "Leren & Geheugen",
    definition: "Doorweven oefenen (interleaving) is het afwisselen van verschillende onderwerpen of probleemtypen in één sessie — aanvankelijk minder efficiënt voelend maar op lange termijn effectiever dan geblokt oefenen.",
    abstractExample: "In plaats van 30 vermenigvuldigsommen, dan 30 deelsommen, doe je 10 vermenigvuldig, 10 deel, 10 vermenigvuldig — de afwisseling dwingt actieve discriminatie van probleemtypes.",
    examples: [
      { domain: "Wiskunde", icon: "🔢", text: "Studenten die oefenen met gemengde probleemsoorten scoren op de eindtoets 43% hoger dan studenten die per type geblokt oefenden — ook al voelden de geblokte oefeningen 'beter'." },
      { domain: "Sport", icon: "⚽", text: "Tennissers die services, forehand en backhand afwisselen, leren beter dan spelers die per slag oefent — doorweven dwingt adaptatie." },
      { domain: "Muziek", icon: "🎵", text: "Muzikanten die stukken uit verschillende periodes afwisselen, bouwen flexibelere muzikale interpretatie dan zij die per componist blokken." }
    ],
  },
  {
    id: "desirable-difficulty",
    title: "Wenselijke Moeilijkheid",
    difficulty: 2,
    emoji: "💪",
    academicCategory: "Cognitieve Psychologie",
    skillCategory: "Leren & Geheugen",
    definition: "Wenselijke moeilijkheid (Bjork) is het principe dat bepaalde leerhindernisnissen — retrieval practice, interleaving, gespreide herhaling — leren verbeteren juist doordat ze het moeilijker maken, ook als ze in het moment minder effectief lijken.",
    abstractExample: "Lezen met een moeilijk lettertype maakt lezen moeilijker maar vergroot retentie — de extra cognitieve inspanning diept het geheugenspoor uit.",
    examples: [
      { domain: "Studeren", icon: "📚", text: "Studenten die handgeschreven aantekeningen maken onthouden meer dan studenten die alles intikken — de vertragende moeilijkheid dwingt verwerking." },
      { domain: "Instructie", icon: "🎓", text: "Een leraar die leerlingen vraagt problemen op te lossen voordat hij de oplossing toont (productief falen) bereikt meer diep begrip dan directe instructie." },
      { domain: "Training", icon: "⚽", text: "Sporters die trainen in variabele omstandigheden (regen, wind, onbekend veld) presteren beter in wedstrijden dan sporters die altijd in ideale omstandigheden trainden." }
    ],
  },
  {
    id: "elaborative-interrogation",
    title: "Elaboratieve Ondervraging",
    difficulty: 2,
    emoji: "❓",
    academicCategory: "Leerpsychologie",
    skillCategory: "Leren & Geheugen",
    definition: "Elaboratieve ondervraging is de techniek van 'waarom'-vragen stellen bij leerstof — 'Waarom is dit waar?' — wat feiten verankert in een conceptueel netwerk en diep begrip bevordert boven oppervlakkige memorisatie.",
    abstractExample: "In plaats van te onthouden 'haaien hebben geen zwemblaas', vraag je 'waarom missen haaien een zwemblaas?' — het antwoord (ze moeten blijven zwemmen om niet te zinken) creëert een memorabel netwerk.",
    examples: [
      { domain: "Biologie", icon: "🦎", text: "Studenten die bij feiten vragen 'waarom is dit zo?' voor relevante feiten, onthouden significant meer dan studenten die herhalen of samenvatten." },
      { domain: "Geschiedenis", icon: "📜", text: "Waarom verloor Napoleon bij Waterloo? Het verbinden van oorzaken (vermoeidheid, slechte communicatie, Pruisische aankomst) maakt de factoren onvergetelijk." },
      { domain: "Wiskunde", icon: "🔢", text: "Waarom werkt de stelling van Pythagoras? Het begrijpen van de geometrische reden maakt de formule makkelijker te herinneren dan memorisatie." }
    ],
  },
  {
    id: "memory-palace",
    title: "Geheugenpaleis",
    difficulty: 2,
    emoji: "🏛️",
    academicCategory: "Cognitieve Psychologie",
    skillCategory: "Leren & Geheugen",
    definition: "Het geheugenpaleis (method of loci) is een memorisatietechniek waarbij informatie wordt gevisualiseerd op bekende ruimtelijke locaties — het brein herinnert ruimtelijke en visuele informatie makkelijker dan abstracte feiten.",
    abstractExample: "Om de planeten te onthouden visualiseer je elke planeet als een object op een bekende route door jouw huis: Mercurius is een kwikzilverbal bij de voordeur, Venus een spiegel in de gang...",
    examples: [
      { domain: "Geheugenwereld", icon: "🏆", text: "Geheugenwereldkampioen Dominic O'Brien memoriseerde willekeurige kaartspelen via geheugenpaleis-technieken — soms 50+ kaartspellen." },
      { domain: "Medicijnen", icon: "🏥", text: "Medische studenten gebruiken geheugenpaleis voor anatomie: elk orgaan op een locatie in een vertrouwde ruimte — het mnemotische netwerk verankert complexe systemen." },
      { domain: "Speeches", icon: "🎤", text: "Cicero gebruikte al het geheugenpaleis voor zijn redevoeringen — elke sectie van de speech gekoppeld aan een ruimte in zijn villa." }
    ],
  },
  {
    id: "sleep-and-memory",
    title: "Slaap en Geheugen",
    difficulty: 1,
    emoji: "😴",
    academicCategory: "Neurowetenschappen",
    skillCategory: "Leren & Geheugen",
    definition: "Slaap is essentieel voor geheugenconsolidatie: tijdens slow-wave slaap worden herinneringen van de hippocampus naar de neocortex overgebracht en tijdens REM-slaap worden verbanden versterkt en emotionele herinneringen verwerkt.",
    abstractExample: "Slaap is als een back-up systeem: overdag sla je informatie tijdelijk op (hippocampus); 's nachts worden de meest waardevolle bestanden permanent opgeslagen (neocortex) en geïntegreerd.",
    examples: [
      { domain: "Studeren", icon: "📚", text: "Studenten die na het studeren slapen onthouden significant meer dan studenten die studeren en daarna wakker blijven voor een activiteit — slaap is cruciaal voor retentie." },
      { domain: "Motorisch leren", icon: "🎵", text: "Pianisten die een nieuw stuk 's avonds oefenen en slapen, presteren de volgende ochtend beter dan pianisten die direct verder oefenen — motore consolidatie vindt 's nachts plaats." },
      { domain: "Creativiteit", icon: "💡", text: "REM-slaap verbindt disparate ideeën — veel creatieve 'aha-momenten' komen na een goede nachtrust over een uitdagend probleem." }
    ],
  },
  {
    id: "chunking-memory",
    title: "Chunken",
    difficulty: 1,
    emoji: "🧩",
    academicCategory: "Cognitieve Psychologie",
    skillCategory: "Leren & Geheugen",
    definition: "Chunken is het groeperen van informatie in betekenisvolle eenheden (chunks) die het beperkte werkgeheugen effectiever benutten — experts chunken automatisch, waardoor ze meer informatie tegelijk kunnen verwerken.",
    abstractExample: "Een telefoonnummer '0612345678' is moeilijk te onthouden als 10 losse cijfers, maar makkelijk als drie chunks '06-123-45-678' — het werkgeheugen ziet dan drie items in plaats van tien.",
    examples: [
      { domain: "Schaken", icon: "♟️", text: "Schaakgrootmeesters onthouden schaakposities als betekenisvolle patronen (aanvalsstelling, gevangengezette toren) — niet als losse stukken." },
      { domain: "Muziek", icon: "🎵", text: "Een ervaren pianist leest bladmuziek als musikalische zinnen (chunks), niet als individuele noten — dat maakt het lezen veel sneller." },
      { domain: "Programmeren", icon: "💻", text: "Een ervaren programmeur herkent code-patronen ('dit is een singleton factory') terwijl een beginner elke regel apart verwerkt." }
    ],
  },
  {
    id: "metacognition",
    title: "Metacognitie",
    difficulty: 2,
    emoji: "🔭",
    academicCategory: "Cognitieve Psychologie",
    skillCategory: "Leren & Geheugen",
    definition: "Metacognitie is het denken over het eigen denken — bewust zijn van wat je weet en niet weet, hoe je leert en hoe effectief jouw leerstrategieën zijn — en het aanpassen van leergedrag op basis van die bewustheid.",
    abstractExample: "Metacognitie is als een rijinstructeur die tegelijkertijd rijdt én observeert hoe goed hij rijdt — en op basis van die observatie zijn techniek aanpast.",
    examples: [
      { domain: "Studeren", icon: "📚", text: "Een leerling die na het studeren zichzelf toetst en herkent dat hij het begrip niet echt begrijpt (alleen herkenning), past zijn studieroutine aan — metacognitie in actie." },
      { domain: "Probleemoplossing", icon: "💡", text: "Een ingenieur die vastzit, stapt bewust terug om te evalueren of zijn aanpak juist is voor dit type probleem — metacognitieve strategie-switch." },
      { domain: "Onderwijs", icon: "🎓", text: "Studenten met hogere metacognitieve bewustheid presteren consistent beter, ongeacht intelligentie — ze monitoren en sturen hun eigen leren effectiever." }
    ],
  },
  {
    id: "illusion-of-knowing",
    title: "Illusie van Kennen",
    difficulty: 2,
    emoji: "🪞",
    academicCategory: "Cognitieve Psychologie",
    skillCategory: "Leren & Geheugen",
    definition: "De illusie van kennen is het fenomeen dat mensen denken een concept of vaardigheid te beheersen terwijl ze het slechts herkennen of oppervlakkig begrijpen — het verschil tussen herkenning en werkelijk beheersen.",
    abstractExample: "Je leest een wiskundeoplossing en denkt 'ik snap het' — maar als je het blad omkeert en het zelf moet oplossen, lukt het niet. Je herkende de stappen, je begreep ze niet.",
    examples: [
      { domain: "Wiskunde", icon: "🔢", text: "Studenten die uitgewerkte voorbeelden bestuderen, ervaren de illusie van kennen — pas bij zelfstandig problemen oplossen blijkt het begrip oppervlakkig." },
      { domain: "Techniek", icon: "💻", text: "Een programmeur die code leest en denkt het te begrijpen, ontdekt bij zelf schrijven dat zijn begrip hiaten had — 'read to understand' vs. 'write to know'." },
      { domain: "Talen", icon: "🗣️", text: "Woorden herkennen in een tekst (passief) is fundamenteel anders van woorden actief kunnen gebruiken (productief) — de herkenningsillusie van taalverwerving." }
    ],
  },

  // Batch Z7 – Gedragseconomie II
  {
    id: "mental-accounting",
    title: "Mentale Boekhouding",
    difficulty: 2,
    emoji: "📒",
    academicCategory: "Gedragseconomie",
    skillCategory: "Gedragseconomie",
    definition: "Mentale boekhouding is de neiging om geld te categoriseren in aparte mentale 'accounts' (loon, erfenis, gokwinst) en het anders uit te geven afhankelijk van die herkomst — ook al is geld fungibel.",
    abstractExample: "€100 op je loon voelt 'verdiend' en je spaart het; €100 gewonnen bij poker voelt als 'huis geld' en je geeft het uit aan luxe — maar beide zijn precies €100.",
    examples: [
      { domain: "Bonus", icon: "💰", text: "Mensen geven bonussen vaker uit aan luxe dan regulier loon — ze categoriseren het als 'extra geld' en geven het anders uit." },
      { domain: "Belasting", icon: "💳", text: "Een belastingteruggave voelt als een meevaller die uitgegeven mag worden; dezelfde som als salarisverhoging zou gespaard worden — hetzelfde geld, ander mentaal account." },
      { domain: "Rondjes", icon: "🍺", text: "Bij rondjes kopen voel je je minder de pinautomaat omdat je 'rondjes-account' mentaal is gecompartmentaliseerd van je spaar-account." }
    ],
  },
  {
    id: "status-quo-bias",
    title: "Status Quo Bias",
    difficulty: 1,
    emoji: "🔒",
    academicCategory: "Gedragseconomie",
    skillCategory: "Gedragseconomie",
    definition: "Status quo bias is de voorkeur voor de huidige toestand boven verandering — zelfs als rationeel een alternatief beter is — voortkomend uit verliesaversie, inertie en cognitieve gemakzucht.",
    abstractExample: "Je blijft bij je huidige stroomleverancier ook al zijn er goedkopere alternatieven — de moeite van wisselen voelt groter dan de besparing, ook als het objectief de moeite waard is.",
    examples: [
      { domain: "Orgaandonatie", icon: "❤️", text: "Landen met opt-out systeem (standaard donor) hebben 90%+ donorpercentages; opt-in landen ~15% — status quo bias bepaalt leven en dood." },
      { domain: "Beleggen", icon: "📈", text: "Beleggers houden hun huidige portefeuille aan ook als herbalancering voordelig is — de status quo voelt als de veilige keuze." },
      { domain: "Carrière", icon: "💼", text: "Mensen blijven in onbevredigende banen langer dan rationeel — de zekerheid van het bekende overwint het risico van beter." }
    ],
  },
  {
    id: "peak-end-rule",
    title: "Piek-Eind-Regel",
    difficulty: 2,
    emoji: "📈",
    academicCategory: "Gedragseconomie",
    skillCategory: "Gedragseconomie",
    definition: "De piek-eindregel (Kahneman) stelt dat mensen een ervaring niet beoordelen op het gemiddelde maar op het piekmoment (het beste of slechtste) en het einde — implicaties voor klantervaring, pijnbehandeling en evenementenontwerp.",
    abstractExample: "Een vakantie met één fantastisch moment en een goede afsluiting wordt beter herinnerd dan een vakantie die continu goed was maar vlak eindigde — ook al was de tweede objectief beter.",
    examples: [
      { domain: "Geneeskunde", icon: "🏥", text: "Kahneman's coloscopie-studie: patiënten met een langere maar eindende met minder pijn, waardeerden de procedure lager dan kortere procedures die eindigden met pijn." },
      { domain: "Klantenservice", icon: "🛍️", text: "Restaurants die klanten verrassen met een gratis dessert aan het einde scoren hoger in herinneringswaardering dan betere restaurants zonder die eindervaring." },
      { domain: "Evenementen", icon: "🎉", text: "Concerten investeren enorm in de encore (eindervaring) — de piek-eindregel verklaart waarom het publiek dit het meest onthoudt." }
    ],
  },
  {
    id: "endowment-effect",
    title: "Bezitseffect",
    difficulty: 2,
    emoji: "🏠",
    academicCategory: "Gedragseconomie",
    skillCategory: "Gedragseconomie",
    definition: "Het bezitseffect is de neiging om bezittingen hoger te waarderen simpelweg omdat ze van jou zijn — mensen vragen meer voor hun bezit dan ze zelf zouden betalen voor hetzelfde object.",
    abstractExample: "Een mok die jij hebt gekregen, waardeer je op €7; diezelfde mok zou je niet kopen voor meer dan €3 als je hem niet had. Bezit verhoogt de waargenomen waarde.",
    examples: [
      { domain: "Woningmarkt", icon: "🏠", text: "Huizenverkopers overschatten consequent de waarde van hun woning — de emotionele band met het bezit beïnvloedt de prijs." },
      { domain: "Handel", icon: "🛒", text: "Thaler's klassieke experimenten: studenten die een mok kregen vroegen significant meer om hem te verkopen dan anderen bereid waren te betalen." },
      { domain: "Onderhandeling", icon: "🤝", text: "Twee partijen zien een verschil in de 'objectieve waarde' van wat ze inbrengen — elk overschat de waarde van zijn eigen bezit." }
    ],
  },
  {
    id: "choice-overload",
    title: "Keuzeparadox",
    difficulty: 2,
    emoji: "😵",
    academicCategory: "Gedragseconomie",
    skillCategory: "Gedragseconomie",
    definition: "De keuzeparadox (Schwartz) stelt dat meer keuzevrijheid boven een optimum leidt tot minder tevredenheid — te veel opties veroorzaken decisie-verlamming, verhoogde verwachtingen en spijt over de niet-gekozen alternatieven.",
    abstractExample: "Jam-experiment (Iyengar): 24 jam-soorten trok meer bezoekers dan 6, maar de 6-keuzestand verkocht 10x meer — meer keuze leidde tot minder actie.",
    examples: [
      { domain: "Consumentisme", icon: "🛒", text: "Netflix's immense catalogus leidt tot eindeloos scrollen zonder keuze — meer opties, minder kijkplezier en meer keuzespijt." },
      { domain: "Werk", icon: "💼", text: "Te veel projectopties voor een medewerker leiden tot verlamming en uitstelgedrag — het vereenvoudigen van keuzes verhoogt de productiviteit." },
      { domain: "Pensioen", icon: "💰", text: "Bedrijven met meer pensioenfondsopties hebben lagere deelnamecijfers — meer keuze ontmoedigt actie." }
    ],
  },
  {
    id: "projection-bias",
    title: "Projectiebias",
    difficulty: 2,
    emoji: "🔮",
    academicCategory: "Gedragseconomie",
    skillCategory: "Gedragseconomie",
    definition: "Projectiebias is de neiging om te verwachten dat onze toekomstige voorkeuren en gevoelens dezelfde zijn als onze huidige — terwijl ze in werkelijkheid significant veranderen met omstandigheden.",
    abstractExample: "Honger boodschappen doen leidt tot teveel kopen — je verwacht morgen ook hongerig te zijn. Een vol gevoel leidt tot te weinig kopen — je vergeet dat morgen je honger terugkeert.",
    examples: [
      { domain: "Boodschappen", icon: "🛒", text: "Mensen die hongerig boodschappen doen kopen significant meer dan nodig — ze projecteren hun huidige hongergevoel op de toekomst." },
      { domain: "Aankopen", icon: "🚗", text: "Mensen die een auto kopen in de zomer kiezen vaker voor een cabriolet — ze projecteren de zomervreugde op hun toekomstige autogebruik in de winter." },
      { domain: "Abonnementen", icon: "📺", text: "Mensen nemen abonnementen op basis van hoe enthousiast ze nu zijn, zonder te beseffen dat enthousiasme vervaagt — Netflix, sportschool, tijdschriften." }
    ],
  },
  {
    id: "affect-heuristic",
    title: "Affectieve Heuristiek",
    difficulty: 2,
    emoji: "❤️",
    academicCategory: "Gedragseconomie",
    skillCategory: "Gedragseconomie",
    definition: "De affectieve heuristiek is de neiging om beslissingen te baseren op hoe iets voelt in plaats van een rationele risico-baten-analyse — positieve gevoelens verlagen de waargenomen risico's en verhogen de waargenomen voordelen, negatieve gevoelens doen het omgekeerde.",
    abstractExample: "Als je kernenergie eng vindt, schat je de risico's hoger en voordelen lager in — als je kernenergie omarmt, doe je het omgekeerde — dezelfde feiten, tegengestelde risicoperceptie.",
    examples: [
      { domain: "Kernenergie", icon: "⚛️", text: "Mensen die kernenergie als 'eng' ervaren, schatten de risico's significant hoger in en voordelen lager — affect trekt de perceptie mee." },
      { domain: "Investeren", icon: "📈", text: "Mensen die enthousiast zijn over een startup (positief affect) onderschatten systematisch de risico's en overschatten de kansen." },
      { domain: "Gezondheid", icon: "🏥", text: "Risicovolle activiteiten (extreme sport) die als 'opwindend' worden ervaren, lijken veiliger dan ze zijn — positief affect verlaagt risicoperceptie." }
    ],
  },
  {
    id: "gambler-fallacy",
    title: "Gokkersdrogdenkt",
    difficulty: 2,
    emoji: "🎲",
    academicCategory: "Gedragseconomie",
    skillCategory: "Gedragseconomie",
    definition: "De gokkersdrogdenkt is de onjuiste overtuiging dat eerdere willekeurige uitkomsten toekomstige kansen beïnvloeden — de overtuiging dat 'na vijf keer kop, munt nu 'aan de beurt is'.",
    abstractExample: "Na vijf keer kop, gooit je weer op — munt is nu 'verplicht' denk je. Maar de munt heeft geen geheugen: elke worp is 50/50 ongeacht de geschiedenis.",
    examples: [
      { domain: "Gokken", icon: "🎰", text: "Casinospelers zetten na een reeks verlies met meer zekerheid in — ze geloven dat 'hun beurt' nadert. De roulettetal heeft geen geheugen." },
      { domain: "Sport", icon: "⚽", text: "Na vijf verlorenwedstrijden verwacht een trainer dat 'de volgende' gewonnen moet worden — statistisch gedrag dat tot overmoed leidt." },
      { domain: "Beleggen", icon: "📈", text: "Na een reeks dalende koersen verwachten beleggers een stijging — maar de markt heeft geen verplichting tot herstel op elke tijdschaal." }
    ],
  },
  {
    id: "present-bias",
    title: "Heden-bias",
    difficulty: 2,
    emoji: "⏰",
    academicCategory: "Gedragseconomie",
    skillCategory: "Gedragseconomie",
    definition: "Heden-bias is de neiging om onmiddellijke beloningen onevenredig hoog te waarderen ten opzichte van toekomstige beloningen — zelfs bij gelijke rationele waarde voelt de directe beloning zo veel aantrekkelijker.",
    abstractExample: "Je kiest €50 nu boven €60 over twee weken — maar je kiest geen €50 over zes maanden boven €60 over zes maanden en twee weken. De heden-bias vervormt de tijdshorizon.",
    examples: [
      { domain: "Gezondheid", icon: "🏥", text: "Het genot van ongezond eten nu versus gezondheidsvoordelen over jaren — heden-bias verklaart waarom we weten wat goed is maar er anders naar handelen." },
      { domain: "Sparen", icon: "💰", text: "De pensioenspaarpuzzel: logisch weten dat we moeten sparen, maar de onmiddellijke consumptie wint steeds van het verre toekomstdoel." },
      { domain: "Studeren", icon: "📚", text: "Uitstelgedrag: een film kijken nu versus studeren voor een examen over drie weken — heden-bias maakt de film veel aantrekkelijker dan rationeel gerechtvaardigd." }
    ],
  },
  {
    id: "nudge-theory",
    title: "Nudge-theorie",
    difficulty: 2,
    emoji: "👆",
    academicCategory: "Gedragseconomie",
    skillCategory: "Gedragseconomie",
    definition: "Nudge-theorie (Thaler & Sunstein) stelt dat keuze-architectuur — hoe keuzes worden gepresenteerd — gedrag significant kan sturen zonder dwang of financiële prikkels, via slim gebruik van gedragspsychologische patronen.",
    abstractExample: "Het plaatsen van gezond eten op ooghoogte in de kantine en ongezond eten op moeilijk bereikbare plekken 'nudget' naar gezondere keuzes zonder een ongezond eten te verbieden.",
    examples: [
      { domain: "Orgaandonatie", icon: "❤️", text: "Opt-out systeem (standaard donor) nudget naar hoge donorpercentages zonder iemand te dwingen donor te zijn." },
      { domain: "Sparen", icon: "💰", text: "Automatische inschrijving voor pensioensparen (opt-out) verhoogt spaarparticipatiecijfers dramatisch versus opt-in systemen." },
      { domain: "Energie", icon: "⚡", text: "Bericht op energierekening dat jouw verbruik vergelijkt met buren reduceert energiegebruik — sociale norm-nudge." }
    ],
  },

  // ── Batch Z8: Communicatie & Media ──────────────────────────────────────────
  {
    id: "framing-effect-media",
    title: "Framing in Media",
    difficulty: 2,
    emoji: "🖼️",
    academicCategory: "Communicatiewetenschappen",
    skillCategory: "Communicatie & Media",
    definition: "Hoe een bericht wordt geframed — welke aspecten worden belicht, welke worden weggelaten — bepaalt sterk hoe de ontvanger de werkelijkheid begrijpt en beoordeelt, los van de feitelijke inhoud.",
    abstractExample: "Hetzelfde glas water kan worden beschreven als 'halfvol' of 'halfleeg'. De feiten zijn identiek, maar de frame stuurt de emotionele reactie en conclusie.",
    examples: [
      { domain: "Nieuws", icon: "📰", text: "Een protest van 10.000 mensen kan worden geframed als 'massale betoging' of als 'slechts 10.000 van de 17 miljoen Nederlanders'. Beide zijn feitelijk correct, maar sturen perceptie anders." },
      { domain: "Politiek", icon: "🏛️", text: "Belastingverlaging framen als 'meer geld voor burgers' of 'minder geld voor publieke voorzieningen' — afhankelijk van politieke agenda." },
      { domain: "Gezondheid", icon: "🏥", text: "'95% overlevingskans' versus '5% sterftekans' zijn statistisch identiek maar leiden tot andere patiëntbeslissingen over behandelingen." }
    ],
  },
  {
    id: "agenda-setting",
    title: "Agenda-Setting",
    difficulty: 2,
    emoji: "📋",
    academicCategory: "Communicatiewetenschappen",
    skillCategory: "Communicatie & Media",
    definition: "Media bepalen niet wat mensen denken, maar waarover ze nadenken. Door aandacht te geven aan bepaalde onderwerpen boven andere, bepalen media welke kwesties als belangrijk worden ervaren.",
    abstractExample: "Als kranten drie weken lang over criminaliteit schrijven, gaan burgers criminaliteit als belangrijkste probleem zien — ook als de statistieken niet zijn veranderd.",
    examples: [
      { domain: "Journalistiek", icon: "📡", text: "Wanneer media intensief over immigratie berichten, stijgt dit onderwerp in peilingen als 'grootste zorg van burgers', ongeacht objectieve trends." },
      { domain: "Verkiezingen", icon: "🗳️", text: "De thema's die domineren in media-agenda bepalen sterk welke kwesties kandidaten moeten beantwoorden in campagnes." },
      { domain: "Bedrijfsleven", icon: "💼", text: "Negatieve media-aandacht voor een bedrijf schaadt reputatie en aandelenkoers, zelfs als de berichtgeving feitelijk onjuist of overdreven is." }
    ],
  },
  {
    id: "echo-chamber",
    title: "Echokamer",
    difficulty: 2,
    emoji: "🔊",
    academicCategory: "Communicatiewetenschappen",
    skillCategory: "Communicatie & Media",
    definition: "Een echokamer is een omgeving — online of offline — waarin mensen alleen informatie tegenkomen die hun bestaande overtuigingen bevestigt, waardoor polarisatie en blinde vlekken toenemen.",
    abstractExample: "Als je alleen vrienden volgt die jouw mening delen en algoritmen content filteren op engagement, hoor je nooit tegengestelde argumenten — je eigen stem weerkaatst terug.",
    examples: [
      { domain: "Sociale media", icon: "📱", text: "Algoritmen van Facebook en Twitter tonen content waar je op klikt — als je op politieke content van één kant klikt, verdwijnt de andere kant uit je feed." },
      { domain: "Nieuws", icon: "📰", text: "Mensen die alleen hun 'eigen' nieuwsbron volgen, ontwikkelen een vertekend beeld van hoe groot het draagvlak voor tegenstanders werkelijk is." },
      { domain: "Bedrijf", icon: "🏢", text: "Teams die intern nooit kritiek ontvangen van buiten, maken vaker slechte beslissingen door groepsdenken en gebrek aan externe perspectieven." }
    ],
  },
  {
    id: "gatekeeping",
    title: "Gatekeeping",
    difficulty: 2,
    emoji: "🚪",
    academicCategory: "Communicatiewetenschappen",
    skillCategory: "Communicatie & Media",
    definition: "Gatekeeping is het proces waarbij redacteuren, platforms of algoritmen bepalen welke informatie doorgaat naar een publiek en welke wordt gefilterd — ze zijn de 'poortwachters' van informatie.",
    abstractExample: "Van de duizenden nieuwsgebeurtenissen per dag, selecteert een hoofdredacteur er twintig voor de voorpagina. Die selectie bepaalt wat 'nieuws' is.",
    examples: [
      { domain: "Journalistiek", icon: "📡", text: "Een hoofdredacteur beslist welke verhalen worden gepubliceerd, welke bronnen worden geciteerd en welke invalshoek wordt gekozen." },
      { domain: "Sociale media", icon: "📱", text: "Platforms als YouTube en Instagram bepalen via algoritmen welke content wordt aanbevolen — ze zijn de nieuwe gatekeepers, maar zonder transparantie." },
      { domain: "Wetenschap", icon: "🔬", text: "Peer-review tijdschriften selecteren welk onderzoek wordt gepubliceerd — positieve bevindingen hebben hogere kans dan nullresultaten (publicatiebias)." }
    ],
  },
  {
    id: "parasocial-relationship",
    title: "Parasociale Relatie",
    difficulty: 2,
    emoji: "👤",
    academicCategory: "Communicatiewetenschappen",
    skillCategory: "Communicatie & Media",
    definition: "Een parasociale relatie is een eenzijdige, emotionele band die een publiek opbouwt met een mediapersona — een presentator, influencer of filmfiguur — die geen weet heeft van het individu.",
    abstractExample: "Je voelt je verdrietig als een YouTuber stopt, terwijl die persoon je niet kent. Die gevoelsband is reëel voor jou, maar bestaat niet wederzijds.",
    examples: [
      { domain: "Social media", icon: "📱", text: "Miljoenen volgers voelen een persoonlijke band met influencers die dagelijks hun leven delen, waardoor zij hun productaanbevelingen meer vertrouwen dan reclame." },
      { domain: "TV", icon: "📺", text: "Nieuwslezers die jarenlang in de huiskamer komen, worden ervaren als 'bekende gezichten' met een vertrouwensrelatie die de kijker beïnvloedt." },
      { domain: "Podcasts", icon: "🎙️", text: "Luisteraars die dagelijks een uur naar dezelfde presentator luisteren, ervaren een intieme band die koopgedrag en politieke opvattingen kan sturen." }
    ],
  },
  {
    id: "disinformation-vs-misinformation",
    title: "Desinformatie vs. Misinformatie",
    difficulty: 2,
    emoji: "🔍",
    academicCategory: "Communicatiewetenschappen",
    skillCategory: "Communicatie & Media",
    definition: "Misinformatie is onjuiste informatie die onbewust wordt verspreid. Desinformatie is bewust gecreëerde en verspreide onjuiste informatie met de intentie te misleiden. Het onderscheid zit in de intentie.",
    abstractExample: "Een vriend die een onjuist gerucht doorstuur omdat hij het gelooft: misinformatie. Een staatsmedia die bewust valse verhalen verspreidt om de publieke opinie te manipuleren: desinformatie.",
    examples: [
      { domain: "Politiek", icon: "🏛️", text: "Nepnieuws dat bewust door actoren wordt gecreëerd en verspreid voor electorale beïnvloeding is desinformatie. Journalisten die fouten maken zijn misinformatie." },
      { domain: "Gezondheid", icon: "🏥", text: "Patiënten die onjuiste volkswijsheden over medicijnen doorgeven zijn misinformatie. Farmaceutische fraude met bewust vervalste studies is desinformatie." },
      { domain: "Bedrijf", icon: "💼", text: "Een werknemer die verkeerde verkoopscijfers doorgeeft bij vergissing verschilt fundamenteel van een concurrent die bewust valse geruchten verspreidt over jouw product." }
    ],
  },
  {
    id: "media-literacy",
    title: "Mediawijsheid",
    difficulty: 1,
    emoji: "🧭",
    academicCategory: "Communicatiewetenschappen",
    skillCategory: "Communicatie & Media",
    definition: "Mediawijsheid is het vermogen om media-inhoud kritisch te analyseren, te evalueren en te creëren — inclusief het herkennen van bias, framing, bronkwaliteit en manipulatietechnieken.",
    abstractExample: "Een mediawijs persoon vraagt bij elk bericht: Wie maakt dit? Wat willen ze bereiken? Welk perspectief ontbreekt? Welk bewijs onderbouwt dit? Hoe wordt taal gebruikt om te overtuigen?",
    examples: [
      { domain: "Nieuws", icon: "📰", text: "Controleren of een nieuwsbericht meerdere bronnen heeft, of citaten in context staan en of de foto bij het artikel is of van een andere situatie." },
      { domain: "Social media", icon: "📱", text: "Herkennen dat een viraal bericht dat sterke emoties oproept extra verificatie verdient — emotionele inhoud wordt bewust gebruikt om verificatiereflex uit te schakelen." },
      { domain: "Onderwijs", icon: "📚", text: "Leerlingen leren om onderscheid te maken tussen opinie en feit, primaire en secundaire bronnen, en advertentie-inhoud versus redactionele inhoud." }
    ],
  },
  {
    id: "spiral-of-silence",
    title: "Spiraal van Zwijgen",
    difficulty: 2,
    emoji: "🌀",
    academicCategory: "Communicatiewetenschappen",
    skillCategory: "Communicatie & Media",
    definition: "De spiraal van zwijgen (Noelle-Neumann) beschrijft hoe mensen met minderheidsstandpunten geneigd zijn te zwijgen uit angst voor sociale isolatie, waardoor de dominante mening nog dominanter lijkt.",
    abstractExample: "Als je denkt dat je mening over een controversieel onderwerp niet populair is, zwijg je. Daardoor horen anderen alleen de dominante mening en denken zij ook dat iedereen het eens is.",
    examples: [
      { domain: "Politiek", icon: "🏛️", text: "Kiezers die op een onpopulair geachte partij stemmen, zeggen dit niet openlijk. In de stemhokjes wijkt de uitslag dan af van peilingen (het 'shy voter'-effect)." },
      { domain: "Werkplek", icon: "💼", text: "Als een teamlid denkt dat zijn kritiek op een besluit niet wordt gewaardeerd, zwijgt hij — waardoor de manager denkt dat iedereen akkoord gaat." },
      { domain: "Onderwijs", icon: "📚", text: "Studenten die niet begrijpen wat de docent uitlegt, zwijgen als ze denken de enige zijn die het niet snapt. De docent concludeert ten onrechte dat de stof duidelijk is." }
    ],
  },
  {
    id: "two-step-flow",
    title: "Tweestapsmodel van Communicatie",
    difficulty: 2,
    emoji: "↔️",
    academicCategory: "Communicatiewetenschappen",
    skillCategory: "Communicatie & Media",
    definition: "Het tweestapsmodel (Lazarsfeld) stelt dat media-invloed verloopt via opinieleiders: media beïnvloeden eerst opinieleiders, die vervolgens hun directe sociale omgeving beïnvloeden — persoonlijke invloed is krachtiger dan directe media-invloed.",
    abstractExample: "Je wijzigt je mening over een politieke kwestie niet na het tv-nieuws, maar na een gesprek met een vriend die het nieuws geloofwaardig interpreteerde. Die vriend is de opinieleider.",
    examples: [
      { domain: "Marketing", icon: "📣", text: "Influencer-marketing benut het tweestapsmodel: merken bereiken via influencers (opinieleiders) hun volgers effectiever dan via directe advertenties." },
      { domain: "Politiek", icon: "🏛️", text: "Politieke partijen investeren in activering van actieve leden (opinieleiders) die vervolgens hun netwerk overtuigen — directe reclame is minder effectief." },
      { domain: "Gezondheid", icon: "🏥", text: "Vaccinatiecampagnes zijn succesvoller als ze eerst huisartsen en dorpsoudsten overtuigen, die vervolgens hun gemeenschap bereiken dan massamedia alleen." }
    ],
  },
  {
    id: "uses-gratifications",
    title: "Gebruiks- en Gratificatietheorie",
    difficulty: 2,
    emoji: "🎯",
    academicCategory: "Communicatiewetenschappen",
    skillCategory: "Communicatie & Media",
    definition: "De gebruiks- en gratificatietheorie stelt dat mensen actief media kiezen om specifieke behoeften te vervullen: informatie, vermaak, identiteitsvorming of sociale integratie. Mensen gebruiken media, media gebruiken niet mensen.",
    abstractExample: "Jij kiest bewust het nieuws om geïnformeerd te blijven, een serie om te ontspannen en sociale media om contact te houden — elk medium vervult een andere behoefte.",
    examples: [
      { domain: "Televisie", icon: "📺", text: "Mensen kijken naar realityshows niet passief maar actief — voor sociale vergelijking, gespreksstof of vicarisch avontuur. Begrip van de behoefte verklaart kijkgedrag." },
      { domain: "Social media", icon: "📱", text: "Jongeren gebruiken Instagram voor identiteitsvorming en sociale validatie, TikTok voor vermaak en YouTube voor leren — dezelfde persoon, drie verschillende behoeften." },
      { domain: "Marketing", icon: "📣", text: "Effectieve content sluit aan bij de behoefte die een medium vervult: LinkedIn-posts voor professionele identiteit werken anders dan Instagram-posts voor lifestyle." }
    ],
  },

  // ── Batch Z9: Leiderschap & Organisatie ─────────────────────────────────────
  {
    id: "servant-leadership",
    title: "Dienend Leiderschap",
    difficulty: 2,
    emoji: "🤝",
    academicCategory: "Organisatiekunde",
    skillCategory: "Leiderschap & Organisatie",
    definition: "Dienend leiderschap (Greenleaf) stelt dat de primaire taak van een leider niet is macht uit te oefenen, maar anderen te dienen — medewerkers te empoweren, hindernissen weg te nemen en hun groei te faciliteren.",
    abstractExample: "In plaats van 'hoe kan ik bereiken wat ik wil via mijn team', vraagt de dienend leider 'wat hebben mijn teamleden nodig om te floreren en hun beste werk te leveren'.",
    examples: [
      { domain: "Bedrijf", icon: "💼", text: "Een manager vraagt in één-op-één gesprekken wat hij kan doen om het werk makkelijker te maken voor zijn medewerkers, in plaats van alleen prestaties te controleren." },
      { domain: "Onderwijs", icon: "📚", text: "Een rector investeert zijn tijd in het wegnemen van administratieve lasten voor docenten, zodat zij maximaal energie kunnen steken in lesgeven." },
      { domain: "Sport", icon: "⚽", text: "Een coach stelt het welzijn en de ontwikkeling van spelers centraal boven persoonlijke successen — zijn missie is de potentie van elk individu te ontgrendelen." }
    ],
  },
  {
    id: "distributed-leadership",
    title: "Gedistribueerd Leiderschap",
    difficulty: 2,
    emoji: "🕸️",
    academicCategory: "Organisatiekunde",
    skillCategory: "Leiderschap & Organisatie",
    definition: "Gedistribueerd leiderschap spreidt leiderschapsfuncties over meerdere personen in een organisatie, in plaats van alles te concentreren bij één persoon. Iedereen neemt leiderschap op basis van expertise en context.",
    abstractExample: "In een crisis neemt de persoon met de meeste relevante expertise de leiding over, niet de hiërarchisch hoogste. Leiderschap is situationeel en vloeit naar competentie.",
    examples: [
      { domain: "Chirurgie", icon: "🏥", text: "In een operatiezaal leidt de anesthesist tijdens risicovolle anesthesiemomenten, ook als de chirurg hoger in rang is — expertise bepaalt wie leidt." },
      { domain: "Software", icon: "💻", text: "In agile teams zijn er geen vaste leiders; technische beslissingen worden genomen door de persoon met meeste kennis van het specifieke probleem." },
      { domain: "Rampenbestrijding", icon: "🚨", text: "Bij een complex incident heeft de brandweercommandant operationele leiding, terwijl een medisch expert leidt bij triage — meerdere leiders, elk in hun domein." }
    ],
  },
  {
    id: "organizational-culture",
    title: "Organisatiecultuur",
    difficulty: 2,
    emoji: "🏛️",
    academicCategory: "Organisatiekunde",
    skillCategory: "Leiderschap & Organisatie",
    definition: "Organisatiecultuur zijn de gedeelde waarden, normen, overtuigingen en gedragspatronen die bepalen 'hoe we hier de dingen doen' — het onzichtbare besturingssysteem van een organisatie.",
    abstractExample: "Strategie is wat een organisatie zegt te willen doen. Cultuur is wat mensen werkelijk doen als niemand kijkt. Cultuur eet strategie als ontbijt.",
    examples: [
      { domain: "Tech", icon: "💻", text: "Google's cultuur van psychologische veiligheid en experimenteren maakt innovatie mogelijk die bij een meer hiërarchische cultuur wordt onderdrukt." },
      { domain: "Zorg", icon: "🏥", text: "Ziekenhuizen met een cultuur van openheid over fouten hebben betere patiëntveiligheid dan ziekenhuizen met een cultuur van schuld en bestraffing." },
      { domain: "Fusie", icon: "🤝", text: "De meeste fusies mislukken niet door financiële of strategische incompatibiliteit, maar door culturele clash — twee organisaties met onverenigbare waarden en gedragspatronen." }
    ],
  },
  {
    id: "power-dynamics",
    title: "Machtsdynamieken",
    difficulty: 3,
    emoji: "⚡",
    academicCategory: "Organisatiekunde",
    skillCategory: "Leiderschap & Organisatie",
    definition: "Machtsdynamieken beschrijven hoe macht wordt verworven, behouden en uitgeoefend in sociale en organisatorische systemen. Macht heeft meerdere bronnen: positie, expertise, relaties, informatie en persoonlijkheid.",
    abstractExample: "Iemand zonder formele titel kan meer macht hebben dan zijn manager, als hij de informatiestroom controleert, sterke relaties heeft met beslissers of onmisbare expertise bezit.",
    examples: [
      { domain: "Kantoor", icon: "🏢", text: "De assistent die de agenda van de directeur beheert, heeft informationele en toegangsmacht die ver uitstijgt boven zijn formele positie in de hiërarchie." },
      { domain: "Politiek", icon: "🏛️", text: "Lobbyisten hebben geen formele democratische macht, maar oefenen via informatieverstrekking, financiering en relaties enorme invloed uit op beleid." },
      { domain: "Wetenschap", icon: "🔬", text: "Gepresteerde onderzoekers met reputatie en netwerk kunnen de onderzoeksagenda van hun vakgebied sturen, los van hun officiële positie." }
    ],
  },
  {
    id: "change-management-kotter",
    title: "Verandermanagement (Kotter)",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Organisatiekunde",
    skillCategory: "Leiderschap & Organisatie",
    definition: "Kotters 8-stappenmodel voor organisatieverandering begint met urgentie creëren en een coalitie bouwen, vervolgens een visie communiceren, medewerkers empoweren, kortetermijnwinsten boeken en verandering verankeren.",
    abstractExample: "Verandering mislukt niet door gebrek aan goede ideeën, maar door gebrek aan urgentiegevoel, politieke coalitie of verankering. De technische kant is makkelijker dan de menselijke kant.",
    examples: [
      { domain: "Bedrijf", icon: "💼", text: "Een CEO die digitaliseringstransformatie wil doorvoeren, begint met zichtbaar maken van de crisis als ze niet transformeren — zonder urgentie geen beweging." },
      { domain: "Overheid", icon: "🏛️", text: "Overheidsreformen die niet slagen: goed ontworpen maar geen brede coalitie gebouwd en geen vroege successen gecommuniceerd om weerstand te overwinnen." },
      { domain: "Zorg", icon: "🏥", text: "Invoering van elektronische patiëntendossiers vereist niet alleen software maar ook cultuurverandering — Kotters stappen structureren het mensenwerk." }
    ],
  },
  {
    id: "span-of-control",
    title: "Spanwijdte van Controle",
    difficulty: 2,
    emoji: "📐",
    academicCategory: "Organisatiekunde",
    skillCategory: "Leiderschap & Organisatie",
    definition: "Spanwijdte van controle is het aantal medewerkers dat een manager effectief kan aansturen. Te breed (20+ mensen) leidt tot oppervlakkige aansturing; te smal (2-3 mensen) tot micromanagement en hoge overhead.",
    abstractExample: "Een organisatie met 1000 medewerkers en een spanwijdte van 10 heeft drie managementlagen. Met een spanwijdte van 5 heeft ze vijf lagen — meer lagen is trager en duurder.",
    examples: [
      { domain: "Leger", icon: "⚔️", text: "Militaire structuren gebruiken de 'rule of three': een officier leidt drie eenheden. Dit is empirisch geoptimaliseerd voor commandosnelheid en controle." },
      { domain: "Consultancy", icon: "💼", text: "Seniorpartners in consultancies managen doorgaans 6-8 consultants — genoeg voor mentoring en kwaliteitscontrole zonder verlies van diepgang." },
      { domain: "Technologie", icon: "💻", text: "Flat tech-bedrijven als Spotify werken met brede spans en kleine squads — minder hiërarchie, snellere beslissingen, maar hogere eisen aan zelforganisatie." }
    ],
  },
  {
    id: "mission-command",
    title: "Opdrachtgerichte Leiding",
    difficulty: 3,
    emoji: "🎯",
    academicCategory: "Organisatiekunde",
    skillCategory: "Leiderschap & Organisatie",
    definition: "Opdrachtgerichte leiding (Auftragstaktik) geeft medewerkers het 'wat' en 'waarom', maar niet het 'hoe'. Ze krijgen ruimte om zelf te beslissen hoe ze de missie bereiken, passend bij veranderende omstandigheden.",
    abstractExample: "In plaats van 'doe stap A, B dan C', geef je 'we willen X bereiken omdat Y. Jij bepaalt hoe.' Dit werkt in complexe, veranderende omgevingen waar gedetailleerde instructies snel verouderen.",
    examples: [
      { domain: "Militair", icon: "⚔️", text: "Duits Auftragstaktik: officieren kregen de missie en vrijheid van handelen — superieur aan het Britse befehlstaktik (gedetailleerde orders) in het hitte van het gevecht." },
      { domain: "Software", icon: "💻", text: "Spotify's squad-model: teams krijgen een doel ('verbeter retentie') maar bepalen zelf welke features ze bouwen — meer eigenaarschap en betere oplossingen." },
      { domain: "Noodhulp", icon: "🚨", text: "Rode Kruis-teams in rampengebieden krijgen een missie maar handelen zelfstandig — contacten met hoofdkwartier zijn onmogelijk in crisisomstandigheden." }
    ],
  },
  {
    id: "organizational-learning",
    title: "Organisatorisch Leren",
    difficulty: 2,
    emoji: "📖",
    academicCategory: "Organisatiekunde",
    skillCategory: "Leiderschap & Organisatie",
    definition: "Organisatorisch leren is het proces waarbij een organisatie kennis genereert, deelt en institutionaliseert, zodat collectieve intelligentie groeit en fouten niet keer op keer worden herhaald.",
    abstractExample: "Als alleen individuen leren maar de organisatie niet, verdwijnt kennis als mensen vertrekken. Als de organisatie leert, zit de kennis in systemen, processen en cultuur — onafhankelijk van individuen.",
    examples: [
      { domain: "Luchtvaart", icon: "✈️", text: "Na elke vliegtuigincident wordt de analyse institutioneel verankerd in procedures en training — de sector leert collectief, wat de veiligste industrie ter wereld heeft gecreëerd." },
      { domain: "Ziekenhuis", icon: "🏥", text: "Morbidititeits- en mortaliteitsconferenties (M&M) zijn een structureel leerproces: incidenten worden besproken en verbeteringen worden in protocollen verankerd." },
      { domain: "Technologie", icon: "💻", text: "Postmortems na systeemstoringen bij Google of Amazon zijn niet schuldoefeningen maar leerdocumenten die breed worden gedeeld om herhaling te voorkomen." }
    ],
  },
  {
    id: "stakeholder-theory",
    title: "Stakeholdertheorie",
    difficulty: 2,
    emoji: "🌐",
    academicCategory: "Organisatiekunde",
    skillCategory: "Leiderschap & Organisatie",
    definition: "Stakeholdertheorie (Freeman) stelt dat organisaties verantwoording verschuldigd zijn aan alle groepen die worden beïnvloed door hun activiteiten — niet alleen aandeelhouders, maar ook medewerkers, klanten, leveranciers, gemeenschap en milieu.",
    abstractExample: "Het maximaliseren van aandeelhouderswaarde ten koste van medewerkers of gemeenschap is op lange termijn zelfdestructief. Duurzame waarde vereist balanceren van belangen van alle stakeholders.",
    examples: [
      { domain: "Bedrijf", icon: "💼", text: "Johnson & Johnson's Tylenol-crisis (1982): ze trokken alle producten terug en beschermden klanten boven kortetermijnwinst — hun reputatie en waarde herstelden sneller dan concurrenten verwacht hadden." },
      { domain: "Overheid", icon: "🏛️", text: "Stadsplanners die alleen met projectontwikkelaars praten en omwonenden negeren, creëren projecten met juridische en sociale weerstand die meer kosten dan stakeholderconsultatie." },
      { domain: "Investering", icon: "📊", text: "ESG-beleggers (Environmental, Social, Governance) passen stakeholderdenken toe: bedrijven die alle stakeholders goed behandelen presteren op lange termijn beter." }
    ],
  },
  {
    id: "strategic-ambiguity",
    title: "Strategische Ambiguïteit",
    difficulty: 3,
    emoji: "🌫️",
    academicCategory: "Organisatiekunde",
    skillCategory: "Leiderschap & Organisatie",
    definition: "Strategische ambiguïteit is het bewust vaag houden van communicatie zodat verschillende groepen hun eigen interpretatie kunnen projecteren, waardoor consensus en samenwerking worden gefaciliteerd die bij precisie onmogelijk zou zijn.",
    abstractExample: "Een vage organisatiemissie als 'de beste zijn voor onze klanten' laat ruimte voor marketing, techniek en service om hun eigen invulling te geven — een precieze definitie zou conflict creëren.",
    examples: [
      { domain: "Politiek", icon: "🏛️", text: "Politieke slogans als 'verandering' of 'veiligheid' zijn bewust vaag — iedereen projecteert zijn eigen wensen op de term, waardoor een brede coalitie wordt aangetrokken." },
      { domain: "Diplomatie", icon: "🌐", text: "Internationale verdragen bevatten bewust vage formuleringen over soevereiniteit die tegengestelde partijen beide als winst kunnen presenteren aan hun achterban." },
      { domain: "Organisatie", icon: "🏢", text: "Een nieuwe CEO zegt 'we gaan focussen op kwaliteit' zonder te specificeren wat dat betekent — alle afdelingen horen wat ze willen horen en beginnen constructief mee te bewegen." }
    ],
  },

  // ── Batch Z10: Wetenschap & Epistemologie ───────────────────────────────────
  {
    id: "falsificationism",
    title: "Falsificationisme",
    difficulty: 2,
    emoji: "🔬",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Wetenschap & Epistemologie",
    definition: "Falsificationisme (Popper) stelt dat een theorie alleen wetenschappelijk is als ze in principe weerlegbaar is door een observatie. Wetenschap groeit door het verwerpen van onjuiste theorieën, niet door bevestiging.",
    abstractExample: "De claim 'alle zwanen zijn wit' is wetenschappelijk omdat één zwarte zwaan hem weerlegt. 'God is onzichtbaar en ongrijpbaar' is niet wetenschappelijk want geen observatie kan hem weerleggen.",
    examples: [
      { domain: "Biologie", icon: "🧬", text: "Darwins evolutietheorie is falsifieerbaar: een konijnenfossiel uit het precambrium zou haar vernietigen. Ze is wetenschappelijk juist omdat ze risico neemt." },
      { domain: "Psychologie", icon: "🧠", text: "Freudiaanse psychoanalyse was lang bekritiseerd als niet-falsifieerbaar: elke tegenwerping kon worden geïnterpreteerd als bewijs (weerstand = bevestiging)." },
      { domain: "Ondernemerschap", icon: "🚀", text: "Een goede bedrijfshypothese specificeert van tevoren wat bewijs zou zijn dat ze fout is — 'als minder dan 10% koopt na proef, dan klopt de aanname niet'." }
    ],
  },
  {
    id: "paradigm-shift",
    title: "Paradigmaverschuiving",
    difficulty: 2,
    emoji: "🔭",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Wetenschap & Epistemologie",
    definition: "Paradigmaverschuivingen (Kuhn) zijn revolutionaire momenten waarop de fundamentele aannames van een vakgebied worden vervangen door een nieuw kader — normaal wetenschap accumuleert kennis, paradigmaverschuivingen herstructureren haar.",
    abstractExample: "Wetenschap werkt niet lineair. Lange periodes van puzzeloplossen binnen een paradigma worden afgewisseld door crises en revoluties die het hele raamwerk transformeren.",
    examples: [
      { domain: "Astronomie", icon: "🌍", text: "De Copernicaanse revolutie verschoof het geocentrisch naar het heliocentrischer paradigma — niet door meer data, maar door een radicaal nieuw interpretatiekader." },
      { domain: "Geneeskunde", icon: "🏥", text: "De ontdekking dat bacteriën ziektes veroorzaken (Pasteur, Koch) was een paradigmaverschuiving die de miasmatheorie (kwade lucht) verving — alles moest worden herdacht." },
      { domain: "Business", icon: "💼", text: "Internet was een paradigmaverschuiving voor media, retail en communicatie — bedrijven die het als incrementele technologie behandelden verloren van pure-play concurrenten." }
    ],
  },
  {
    id: "replication-crisis",
    title: "Replicatiecrisis",
    difficulty: 2,
    emoji: "📊",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Wetenschap & Epistemologie",
    definition: "De replicatiecrisis is de ontdekking dat een groot deel van gepubliceerd wetenschappelijk onderzoek niet kan worden gerepliceerd — met name in psychologie, voedingswetenschappen en biomedisch onderzoek.",
    abstractExample: "Als een studie aantoont dat X Y veroorzaakt, maar tien onafhankelijke pogingen het resultaat niet kunnen reproduceren, dan was de oorspronkelijke bevinding waarschijnlijk vals positief of toevallig.",
    examples: [
      { domain: "Psychologie", icon: "🧠", text: "De Reproducibility Project (2015) kon slechts 39% van 100 gepubliceerde psychologieonderzoeken reproduceren — veel 'bewezen' effecten blijken statistisch artefacten." },
      { domain: "Voeding", icon: "🥗", text: "Tientallen dieetstudies die koffie, rode wijn of superfoods aanprijzen, konden niet worden gerepliceerd — kleine steekproeven en publicatiebias verklaren de valse bevindingen." },
      { domain: "Beleid", icon: "🏛️", text: "Beleidsmakers die onderwijsinterventies implementeren gebaseerd op niet-gerepliceerde studies verspillen budgetten — replicatie is vereist voor evidence-based beleid." }
    ],
  },
  {
    id: "induction-problem",
    title: "Probleem van Inductie",
    difficulty: 3,
    emoji: "🔄",
    academicCategory: "Epistemologie",
    skillCategory: "Wetenschap & Epistemologie",
    definition: "Het inductieprobleem (Hume) stelt dat we uit eindige observaties nooit met zekerheid universele conclusies kunnen trekken — hoe vaak je ook een witte zwaan ziet, je kunt niet bewijzen dat alle zwanen wit zijn.",
    abstractExample: "Duizend waarnemingen dat de zon opstijgt, bewijzen niet dat ze morgen ook opstijgt. Inductie is logisch ongeldig maar praktisch onmisbaar — we leven van inductieve aannames.",
    examples: [
      { domain: "Wetenschap", icon: "🔬", text: "Alle wetenschappelijke wetten zijn inductief — we nemen aan dat de zwaartekracht morgen nog werkt omdat ze altijd heeft gewerkt, niet door logisch bewijs." },
      { domain: "Finance", icon: "📈", text: "Financiële modellen die gebaseerd zijn op historische data gaan ervan uit dat patronen zich herhalen — maar het inductieprobleem garandeert niets over de toekomst." },
      { domain: "AI", icon: "🤖", text: "Machine learning is radicale inductie: een model leert patronen uit trainingsdata en extrapoleer naar nieuwe gevallen — het inductieprobleem verklaart generalisatiefouten." }
    ],
  },
  {
    id: "occams-razor",
    title: "Occams Scheermes",
    difficulty: 1,
    emoji: "✂️",
    academicCategory: "Epistemologie",
    skillCategory: "Wetenschap & Epistemologie",
    definition: "Occams scheermes is het principe dat bij twee verklaringen met gelijke verklarende kracht, de eenvoudigste de voorkeur verdient. Vermenigvuldig geen entiteiten zonder noodzaak.",
    abstractExample: "Als je 's ochtends lege koekjes vindt, is de eenvoudigste verklaring 'iemand van het gezin heeft ze gegeten' te prefereren boven een ingewikkeld verhaal over inbrekers die toevallig alleen koekjes wilden.",
    examples: [
      { domain: "Geneeskunde", icon: "🏥", text: "Medisch principe: 'Als je hoefgetrappel hoort, denk dan aan paarden, niet aan zebra's' — de meest voor de hand liggende diagnose is statistisch meest waarschijnlijk." },
      { domain: "Wetenschap", icon: "🔬", text: "Newton's gravitatiewet is eenvoudiger dan rivaliserende theorieën en verklaard evenveel — Occams scheermes geeft haar de voorkeur totdat Einstein meer precisie vereiste." },
      { domain: "Debugging", icon: "💻", text: "Bij een softwarebug: begin met de eenvoudigste verklaring (typefout, verkeerde variabele) voor je complexe oorzaken onderzoekt — Occams scheermes bespaart debugtijd." }
    ],
  },
  {
    id: "thought-experiment",
    title: "Gedachte-experiment",
    difficulty: 2,
    emoji: "💭",
    academicCategory: "Epistemologie",
    skillCategory: "Wetenschap & Epistemologie",
    definition: "Gedachte-experimenten zijn mentale simulaties van hypothetische scenario's die worden gebruikt om intuïties te testen, theorieën te verkennen of grenzen van begrip te identificeren — zonder fysieke uitvoering.",
    abstractExample: "Door je voor te stellen wat zou gebeuren als licht snelheid 0 had, of als je een kat in een gesloten doos met gifgas stopt, kun je theoretische consequenties verkennen die empirisch onmogelijk zijn.",
    examples: [
      { domain: "Fysica", icon: "⚛️", text: "Einsteins trein-gedachte-experiment leidde tot relativiteitstheorie: hij stelde zich voor met een lichtstraal mee te rijden. Geen experiment nodig — pure redenering." },
      { domain: "Ethiek", icon: "⚖️", text: "De trolleyprobleem stelt: mag je één schakelaar omzetten zodat een tram vijf mensen mist maar één doodt? Dit verkennt intuïties over actieve versus passieve schade." },
      { domain: "Recht", icon: "📜", text: "Rawls' 'sluier van onwetendheid' — welke regels zou je kiezen als je niet weet welke positie je in de samenleving krijgt? Dit denkexperiment genereert rechtvaardigheidstheorie." }
    ],
  },
  {
    id: "epistemic-justification",
    title: "Epistemische Rechtvaardiging",
    difficulty: 3,
    emoji: "📚",
    academicCategory: "Epistemologie",
    skillCategory: "Wetenschap & Epistemologie",
    definition: "Epistemische rechtvaardiging onderzoekt wat maakt dat een overtuiging 'gerechtvaardigd' is — niet alleen waar, maar op goede gronden aangehouden. Kennis = gerechtvaardigd ware overtuiging (met Gettier-voorbehoud).",
    abstractExample: "Ik geloof dat het 12:00 is omdat mijn stopgezet horloge dat toont, en toevallig is het precies 12:00. Mijn overtuiging is waar maar niet gerechtvaardigd — dit is geen kennis.",
    examples: [
      { domain: "Wetenschap", icon: "🔬", text: "Wetenschappelijke kennis vereist rechtvaardiging via methode, peer review en replicatie — niet elke ware claim is kennis als ze toevallig waar is." },
      { domain: "Recht", icon: "📜", text: "Getuigenverklaringen zijn bewijs maar niet altijd gerechtvaardigd: menselijk geheugen is reconstruerend en beïnvloedbaar. Rechtvaardiging vereist corroborerend bewijs." },
      { domain: "Dagelijks leven", icon: "🏠", text: "Je gelooft dat een product werkt omdat een vriend het aanbeval. Dat is een overtuiging maar nauwelijks gerechtvaardigd — anekdotisch bewijs is zwakke rechtvaardiging." }
    ],
  },
  {
    id: "scientific-consensus",
    title: "Wetenschappelijke Consensus",
    difficulty: 2,
    emoji: "🌡️",
    academicCategory: "Wetenschapsfilosofie",
    skillCategory: "Wetenschap & Epistemologie",
    definition: "Wetenschappelijke consensus is het collectieve oordeel van experts na kritische toetsing van het beschikbare bewijs. Het is niet de mening van één wetenschapper, maar het geaccumuleerde gewicht van gerepliceerd onderzoek.",
    abstractExample: "Eén studie bewijst niets. Honderd goed uitgevoerde studies die consistent hetzelfde concluderen, gecombineerd met een mechanistische verklaring, vormen consensus — het sterkste kennistype dat we hebben.",
    examples: [
      { domain: "Klimaat", icon: "🌍", text: "97% van klimaatonderzoekers is het eens over menselijk veroorzaakte klimaatverandering — dit is geen 'mening' maar geaccumuleerd wetenschappelijk oordeel na decennia onderzoek." },
      { domain: "Geneeskunde", icon: "🏥", text: "Vaccinveiligheid heeft de sterkste wetenschappelijke consensus in de geneeskunde — duizenden studies, elk met tegenstrijdig incentive, bevestigen consistent dezelfde conclusies." },
      { domain: "Voeding", icon: "🥗", text: "Onderscheid maken tussen consensus (verzadigde vetten en hartaandoeningen) en controversieel gebied (optimale eiwitinname) helpt om mediaberichten te kalibreren." }
    ],
  },
  {
    id: "abductive-reasoning",
    title: "Abductief Redeneren",
    difficulty: 2,
    emoji: "🕵️",
    academicCategory: "Epistemologie",
    skillCategory: "Wetenschap & Epistemologie",
    definition: "Abductief redeneren (inferentie naar de beste verklaring) start bij een waarneming en zoekt de meest aannemelijke verklaring — niet de enig mogelijke, maar de beste gegeven beschikbaar bewijs.",
    abstractExample: "Je ziet natte straten en concludeert dat het heeft geregend. Dat is abductie: je kiest de meest plausibele verklaring (regen) boven alternatieven (een waterleiding brak, sproeiers staan aan).",
    examples: [
      { domain: "Diagnostiek", icon: "🏥", text: "Een arts ziet symptomen (koorts, hoest, ademhalingsproblemen) en concludeert 'meest waarschijnlijk pneumonie' — abductieve gevolgtrekking, niet logisch bewijs." },
      { domain: "Wetenschappelijk onderzoek", icon: "🔬", text: "Darwin redeneerde abductief: hij zag fossiele records, eilandenspeciatie en homologe structuren, en concludeerde dat evolutie via selectie de beste verklaring was." },
      { domain: "Business", icon: "💼", text: "Een CEO ziet dalende verkopen, stijgende retourpercentages en negatieve reviews en concludeert abductief dat kwaliteitsproblemen de meest plausibele oorzaak zijn." }
    ],
  },
  {
    id: "social-epistemology",
    title: "Sociale Epistemologie",
    difficulty: 3,
    emoji: "👥",
    academicCategory: "Epistemologie",
    skillCategory: "Wetenschap & Epistemologie",
    definition: "Sociale epistemologie onderzoekt hoe kennis sociaal wordt gecreëerd, verspreid en gevalideerd. Individuele kennis is beperkt; de meeste kennis die we bezitten is gebaseerd op vertrouwen in anderen.",
    abstractExample: "Je weet niet zelf dat de aarde rond is — je vertrouwt een keten van wetenschappers, leraren en bronnen. Vrijwel alle kennis is gesocialiseerd en vraagt om epistemisch vertrouwen.",
    examples: [
      { domain: "Vertrouwen", icon: "🤝", text: "We vertrouwen op expertise van artsen, ingenieurs en rechters voor levensbelangrijke beslissingen — sociale epistemologie onderzoekt wanneer dat vertrouwen gerechtvaardigd is." },
      { domain: "Wetenschap", icon: "🔬", text: "Peer review is een sociaal kennisvalidatieproces — wetenschappers valideren elkaars werk, want individuele wetenschappers zijn feilbaar en beïnvloedbaar." },
      { domain: "Desinformatie", icon: "📱", text: "Als sociale kennisstructuren worden aangetast door desinformatie, verdwijnt het fundament van gesocialiseerde kennis — epistemic crisis is ook een sociale crisis." }
    ],
  },

  // ── Batch A1: Zelfkennis & Identiteit ───────────────────────────────────────
  {
    id: "johari-window",
    title: "Johari-venster",
    difficulty: 2,
    emoji: "🪟",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Het Johari-venster is een model met vier kwadranten: wat jij én anderen weten (open), wat jij weet maar anderen niet (verborgen), wat anderen weten maar jij niet (blinde vlek), en wat niemand weet (onbekend). Groei zit in het verkleinen van blinde vlekken.",
    abstractExample: "Door actief feedback te vragen en te delen over jezelf, vergroot je het 'open' venster ten koste van het 'verborgen' en 'blinde vlek'-venster — je zelfkennis en authenticiteit groeien.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Je denkt dat je vergaderingen goed faciliteert, maar collega's ervaren je als dominant. Die blinde vlek wordt pas zichtbaar via eerlijke 360-graden feedback." },
      { domain: "Relaties", icon: "❤️", text: "Partners die openlijk praten over angsten en zwakheden (het verborgen gebied verkleinen) ervaren meer intimiteit en minder conflicten door verrassingen." },
      { domain: "Coaching", icon: "🎯", text: "Een goede coach helpt het onbekende gebied te verkennen via vraagtechnieken — dingen ontdekken over jezelf die je zelf nog niet wist dat ze er waren." }
    ],
  },
  {
    id: "values-clarification",
    title: "Waardenclarificatie",
    difficulty: 2,
    emoji: "⚖️",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Waardenclarificatie is het proces van bewust identificeren welke waarden voor jou centraal staan — eerlijkheid, vrijheid, verbinding, groei — zodat je keuzes en gedrag in lijn brengt met wat je echt belangrijk vindt.",
    abstractExample: "Veel ontevredenheid ontstaat doordat mensen leven naar andermans waarden (succes zoals de maatschappij het definieert) in plaats van hun eigen. Clarificatie onthult de discrepantie.",
    examples: [
      { domain: "Carrière", icon: "💼", text: "Iemand die autonomie hoog waardeert maar een strak gestructureerde kantoorbaan accepteert, ervaart chronische frustratie — waardenclarificatie onthult de mismatch." },
      { domain: "Beslissingen", icon: "🎯", text: "Bij een moeilijke beslissing (verhuizen voor een baan?) helpt het je topwaarden expliciet te maken: als familie boven carrière gaat, wordt de keuze duidelijker." },
      { domain: "Relaties", icon: "❤️", text: "Conflicten in relaties komen vaak voort uit conflicterende waarden (vrijheid vs. stabiliteit). Clarificatie maakt impliciet verschil expliciet en bespreekbaar." }
    ],
  },
  {
    id: "narrative-identity",
    title: "Narratieve Identiteit",
    difficulty: 2,
    emoji: "📖",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Narratieve identiteit (McAdams) stelt dat we onszelf begrijpen via het levensverhaal dat we construeren — we zijn de protagonist in een intern verhaal dat verleden, heden en toekomst verbindt en betekenis geeft.",
    abstractExample: "Hetzelfde verleden kan worden verteld als een heldenreis ('ik heb tegenslagen overwonnen'), een slachtofferverhaal ('het leven was onrechtvaardig') of een groeiverhaal. Het verhaal dat je kiest, vormt wie je bent.",
    examples: [
      { domain: "Trauma", icon: "💪", text: "Post-traumatische groei treedt op als mensen hun pijnlijke ervaringen herkaderen als deel van een groeiverhaal, niet als definitieve breuk in hun levenslijn." },
      { domain: "Loopbaan", icon: "💼", text: "Iemand die zijn ontslag vertelt als 'ik werd geforceerd een betere weg te kiezen' versus 'ik heb gefaald' — hetzelfde feit, radicaal ander toekomstperspectief." },
      { domain: "Therapie", icon: "🛋️", text: "Narratieve therapie helpt mensen hun probleemverzadigd verhaal te herschrijven — je bent niet je probleem, het probleem is het probleem, en verhalen kunnen worden veranderd." }
    ],
  },
  {
    id: "self-concept",
    title: "Zelfconcept",
    difficulty: 2,
    emoji: "🪞",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Het zelfconcept is het geheel van overtuigingen dat je over jezelf hebt — wie je bent, wat je kunt, wat je waard bent. Het zelfconcept stuurt gedrag, keuzes en hoe je anderen ervaart.",
    abstractExample: "Als je gelooft 'ik ben iemand die sport', ga je automatisch sporten — je gedrag confirmeert de identiteit. Als je gelooft 'ik ben lui', zoek je bevestiging daarvoor. Identiteit gaat vóór gedrag.",
    examples: [
      { domain: "Sport", icon: "🏃", text: "James Clear: 'Elke keer dat je traint, bevestig je aan jezelf dat je een sporter bent.' Identiteitsverandering is duurzamer dan gedragsverandering zonder identiteitsverschuiving." },
      { domain: "School", icon: "📚", text: "Een kind dat zichzelf als 'slecht in wiskunde' ziet, vermijdt wiskundetaken — het zelfconcept creëert een self-fulfilling prophecy die moeilijk te doorbreken is." },
      { domain: "Leiderschap", icon: "👥", text: "Mensen die zichzelf niet als leider zien, ondermijnen hun eigen leiderschapsgedrag onbewust — het zelfconcept moet verschuiven voor duurzame gedragsverandering." }
    ],
  },
  {
    id: "ego-depletion-awareness",
    title: "Zelfbewustzijn van Ego-uitputting",
    difficulty: 2,
    emoji: "🔋",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Zelfcontrole, beslissingen nemen en emotieregulatie putten een beperkte mentale bron uit. Aan het eind van de dag zijn wilskracht en oordeel verminderd — bewustzijn hiervan helpt om slimmer te plannen.",
    abstractExample: "Je neemt 's avonds slechte eetbeslissingen niet door gebrek aan karakter maar door uitgeputte zelfcontrole. Weten dat je moe bent helpt je structuren te bouwen die wilskracht niet vereisen.",
    examples: [
      { domain: "Voeding", icon: "🥗", text: "Gezond eten 's avonds mislukt vaker dan 's ochtends — niet door slechte intenties, maar door verminderde zelfcontrole na een dag beslissingen nemen." },
      { domain: "Werk", icon: "💼", text: "Zet de moeilijkste, meest creatieve taken 's ochtends vroeg. Vergaderingen, e-mails en routinetaken 's middags. Je betere zelf werkt vroeg." },
      { domain: "Relaties", icon: "❤️", text: "Moeilijke gesprekken na een stressvolle werkdag leiden vaker tot conflict — uitgeputte partners hebben minder geduld. Plan zware gesprekken bewust op betere momenten." }
    ],
  },
  {
    id: "locus-of-control",
    title: "Interne vs. Externe Controle",
    difficulty: 2,
    emoji: "🎮",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Locus of control beschrijft of je gelooft dat je leven wordt bepaald door je eigen keuzes en acties (intern) of door externe krachten zoals geluk, anderen en omstandigheden (extern).",
    abstractExample: "Twee mensen falen een examen. De interne: 'Ik heb niet genoeg gestudeerd — ik ga dat veranderen.' De externe: 'Het examen was oneerlijk.' Zelfde feit, heel ander perspectief op agency.",
    examples: [
      { domain: "Gezondheid", icon: "🏥", text: "Mensen met interne locus of control volgen medisch advies beter op, sporten meer en leven gemiddeld gezonder — ze geloven dat hun keuzes er toe doen." },
      { domain: "Carrière", icon: "💼", text: "Mensen met externe locus of control wachten op kansen; interne mensen creëren kansen actief. Research laat consistent hogere carrièresucces zien bij interne oriëntatie." },
      { domain: "Tegenslag", icon: "💪", text: "Na een bedrijfsfaillissement: externe locus ('de markt werkte tegen mij') leidt tot herhaling; interne ('wat had ik anders kunnen doen') leidt tot leren en verbetering." }
    ],
  },
  {
    id: "authenticity",
    title: "Authenticiteit",
    difficulty: 2,
    emoji: "✨",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Authenticiteit is het consistent handelen in lijn met je eigen waarden, overtuigingen en karakter — ongeacht externe druk of sociale verwachtingen. Het is het tegendeel van performativiteit en masker dragen.",
    abstractExample: "Authenticiteit is niet alles zeggen wat je denkt (dat is bruutheid). Het is handelen vanuit wie je werkelijk bent in plaats van wie je denkt te moeten zijn — een subtiel maar fundamenteel onderscheid.",
    examples: [
      { domain: "Leiderschap", icon: "👥", text: "Authentieke leiders delen eigen fouten en twijfels — dit creëert meer vertrouwen dan een perfecte façade, omdat teams zien dat zwakheid benoemen veilig is." },
      { domain: "Relaties", icon: "❤️", text: "Mensen die in relaties consequent een beter zelf presenteren, ervaren chronische uitputting en afstand — het masker vereist energie die intimiteit ondermijnt." },
      { domain: "Carrière", icon: "💼", text: "Iemand die in een rol werkt die niet bij hem past (introvert in verkooprol) ervaart identiteitsconflict — authenticiteitsonderzoek wijst naar baantevredenheid als sleutelvoorwaarde." }
    ],
  },
  {
    id: "self-compassion",
    title: "Zelfcompassie",
    difficulty: 1,
    emoji: "🤗",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Zelfcompassie (Kristin Neff) betekent jezelf behandelen met hetzelfde begrip en vriendelijkheid als je een goede vriend zou behandelen bij fouten, falen of pijn — in plaats van harde zelfkritiek.",
    abstractExample: "Als een vriend een fout maakt, zeg je: 'Het kan gebeuren, wat kun je ervan leren?' Bij jezelf zeg je: 'Hoe kon ik zo stom zijn?' Zelfcompassie brengt de eerste reactie ook op jezelf toe.",
    examples: [
      { domain: "Prestatie", icon: "🏆", text: "Onderzoek: mensen met hoge zelfcompassie presteren beter na falen dan mensen met hoge zelfkritiek — ze herstellen sneller en leren meer omdat schaamte geen blokkerend effect heeft." },
      { domain: "Gezondheid", icon: "🏥", text: "Bij terugval in ongezond gedrag (roken, eten) leidt zelfcompassie tot sneller hervatten van gezond gedrag — zelfkritiek vergroot de spiraal van hopeloosheid." },
      { domain: "Ouderschap", icon: "👨‍👩‍👧", text: "Ouders die zichzelf vergeven voor fouten, modelleren dit voor kinderen — zelfcompassieve ouders hebben kinderen met hogere emotionele veerkracht en lager perfectionisme." }
    ],
  },
  {
    id: "shadow-self",
    title: "Het Schaduwzelf",
    difficulty: 3,
    emoji: "🌑",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Het schaduwzelf (Jung) zijn de onderdelen van onszelf die we onbewust afwijzen, ontkennen of verborgen houden — kanten die we als onaanvaardbaar beschouwen maar die ons gedrag onbewust sturen.",
    abstractExample: "Als je sterk reageert op 'arrogante' mensen, kan je eigen afgewezen arrogantie de echte oorzaak zijn. Wat je in anderen irriteert, wijst vaak naar je eigen schaduw.",
    examples: [
      { domain: "Relaties", icon: "❤️", text: "Extreme irritatie aan andermans gedrag is vaak projectie van de eigen schaduw — de persoon die altijd anderen als lui betitelt, vecht mogelijk met zijn eigen luiheid." },
      { domain: "Leiderschap", icon: "👥", text: "Leiders die falen publiek niet kunnen accepteren, projecteren hun schaduw (angst voor incompetentie) op medewerkers via micromanagement en overmatige controle." },
      { domain: "Persoonlijk", icon: "🧘", text: "Schaduwwerk via therapie of journaling: bewust maken wat onbewust was, vermindert projectie op anderen en vergroot authentieke zelfacceptatie." }
    ],
  },
  {
    id: "identity-foreclosure",
    title: "Identiteitsbevriezing",
    difficulty: 2,
    emoji: "🧊",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Identiteitsbevriezing (Marcia) treedt op als mensen een identiteit overnemen zonder haar te verkennen — de dokter-zijn die altijd dokter werd, de religie die nooit werd bevraagd. Groei vereist identiteitscrises.",
    abstractExample: "Een midlifecrisis is vaak een uitgestelde identiteitscrisis — 'Wie ben ik los van de rollen die anderen voor mij kozen?' Dat is pijnlijk maar noodzakelijk voor echte volwassenheid.",
    examples: [
      { domain: "Carrière", icon: "💼", text: "Iemand die advocaat werd omdat zijn vader advocaat was, zonder ooit andere mogelijkheden te verkennen, ervaart op zijn 40e een diepe identiteitscrisis als de bevrijdende vraag opkomt." },
      { domain: "Religie", icon: "🕌", text: "Mensen die als kind een geloof overnamen zonder persoonlijk te verkennen, hebben een bevroren religieuze identiteit — zij die het bevragen komen tot rijkere, authentiekere spiritualiteit." },
      { domain: "Studiekeuze", icon: "📚", text: "Jongeren die direct na middelbare school studeren zonder zelfexploratie, hebben hogere kans op spijt en studiewisseling — een gap year kan identiteitsverkenning faciliteren." }
    ],
  },

  // ── Batch A2: Gewoonten & Gedragsverandering ─────────────────────────────────
  {
    id: "habit-loop",
    title: "De Gewoontelus",
    difficulty: 1,
    emoji: "🔁",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "De gewoontelus (Duhigg) bestaat uit drie elementen: een signaal (cue) dat het gedrag triggert, de routine zelf, en de beloning die het gedrag versterkt. Gewoonten veranderen door de routine te vervangen terwijl signaal en beloning gelijk blijven.",
    abstractExample: "Je eet elke middag een koek (routine) als je je verveelt op het werk (signaal) voor even afleiding en suikerboost (beloning). Vervang de koek door een korte wandeling — zelfde signaal, zelfde beloning, andere routine.",
    examples: [
      { domain: "Gezondheid", icon: "🏃", text: "Een slechte gewoonte verwijder je niet — je overschrijft hem. Sigaretrokers die stoppen maar de rookpauze houden (signaal) en vervangen door diepe ademhaling (nieuwe routine) zijn succesvoller." },
      { domain: "Productiviteit", icon: "💻", text: "De gewoonte om bij verveling social media te checken (routine) vervangen door een korte takenlijst te bekijken — hetzelfde verveling-signaal, maar een productievere uitweg." },
      { domain: "Sporten", icon: "💪", text: "Sportskleding de avond voor uitleggen (signaal) maakt de volgende ochtend sporten gemakkelijker — het signaal verlaagt de activatiedrempel voor de gewenste routine." }
    ],
  },
  {
    id: "implementation-intentions",
    title: "Implementatie-intenties",
    difficulty: 1,
    emoji: "📅",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Implementatie-intenties (Gollwitzer) zijn 'als-dan'-plannen die specifiek omschrijven wanneer, waar en hoe je een gedrag uitvoert: 'Als X gebeurt, doe ik Y.' Ze verhogen de kans van gedragsuitvoering significant.",
    abstractExample: "In plaats van 'ik ga meer sporten' (intentie) zeg je 'als ik maandag thuiskom van werk, kleed ik me direct om en ga 30 minuten hardlopen' — het concrete plan activeert automatisch gedrag.",
    examples: [
      { domain: "Gezondheid", icon: "🏃", text: "Mensen die exact plannen wanneer en waar ze gaan sporten, doen dit 2-3x vaker dan mensen met alleen een vaag voornemen — de specificiteit is de sleutel." },
      { domain: "Leren", icon: "📚", text: "'Na het avondeten, elke dag om 20:00 aan de keukentafel, lees ik 20 pagina's' werkt veel beter dan 'ik ga meer lezen' — de routine verankert in een specifieke context." },
      { domain: "Financiën", icon: "💰", text: "'Op de eerste van de maand, zodra mijn salaris binnenkomt, zet ik automatisch €200 over naar mijn spaarrekening' — automatisering via implementatie-intentie." }
    ],
  },
  {
    id: "temptation-bundling",
    title: "Verleiding Koppelen",
    difficulty: 1,
    emoji: "🎁",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Verleiding koppelen (Milkman) is de strategie om iets wat je wilt doen te combineren met iets wat je moet doen — je traint alleen terwijl je je favoriete podcast luistert, waardoor beide activiteiten positief worden geladen.",
    abstractExample: "Je uitgestelde belasting papierwerk koppel je aan je favoriete koffie en muziek. De aangenaamheid van koffie en muziek maakt het papierwerk minder aversief — je hebt een reden om te beginnen.",
    examples: [
      { domain: "Sport", icon: "🏃", text: "Alleen je favoriete Netflix-serie kijken tijdens het sporten op de loopband — je gaat erop verheugen te sporten omdat je de serie wilt zien." },
      { domain: "Werk", icon: "💼", text: "Saaie administratieve taken koppelen aan een heerlijk drankje of aangenaam muziek — de beloning maakt de drempel lager en het vol te houden." },
      { domain: "Huishouden", icon: "🏠", text: "Alleen je favoriete audioboek luisteren tijdens huishoudelijke taken — schoonmaken en strijken worden aangenamer terwijl je ook leert." }
    ],
  },
  {
    id: "two-minute-rule",
    title: "De Twee-minutenregel",
    difficulty: 1,
    emoji: "⏱️",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "De twee-minutenregel (Allen/Clear) stelt: als een taak minder dan twee minuten kost, doe hem direct. Voor nieuwe gewoonten: maak de beginversie zo klein dat ze minder dan twee minuten kost — zo verlaag je de startdrempel tot nul.",
    abstractExample: "De meeste grote gewoonten mislukken niet door gebrek aan wil, maar door een te hoge startdrempel. Maak beginnen zo makkelijk dat weigeren belachelijk voelt: één push-up, één pagina lezen, één minuut mediteren.",
    examples: [
      { domain: "Lezen", icon: "📚", text: "Begin met 'ik lees elke avond één pagina'. Na een week is het gewoonlijk al 10-20 pagina's — het starten is de barrière, niet het verdergaan." },
      { domain: "Sporten", icon: "🏋️", text: "Zet je gymschoenen aan als gewoontestart. Soms ga je daarna vanzelf — de eerste micro-actie doorbreekt de inertie die meeste gewoonten saboteert." },
      { domain: "Meditatie", icon: "🧘", text: "Begin met één minuut adem observeren. Het is bijna onmogelijk dit te weigeren — na een maand is het vanzelf 10-15 minuten." }
    ],
  },
  {
    id: "environment-design",
    title: "Omgevingsontwerp",
    difficulty: 2,
    emoji: "🏗️",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Omgevingsontwerp is het bewust inrichten van je fysieke en digitale omgeving zodat gewenst gedrag makkelijker is en ongewenst gedrag moeilijker — in plaats van te vertrouwen op wilskracht.",
    abstractExample: "Wilskracht is eindig en onbetrouwbaar. Een gezondere omgeving die keuzes stuurt, werkt consistenter dan jezelf dwingen de goede keuze te maken in een omgeving vol verleidingen.",
    examples: [
      { domain: "Voeding", icon: "🥗", text: "Fruit op het aanrecht, ongezonde snacks achter in de kast — mensen eten gemiddeld 3x meer fruit als het zichtbaar staat. Zichtbaarheid stuurt keuze." },
      { domain: "Focus", icon: "💻", text: "Telefoon in een andere kamer leggen tijdens werk verhoogt cognitieve prestatie — zelfs de aanwezigheid van een telefoon (ook uitgeschakeld) vermindert aandachtscapaciteit." },
      { domain: "Lezen", icon: "📚", text: "Boek op het kussen leggen voor je gaat slapen, telefoon buiten de slaapkamer — je bent 4x eerder geneigd te lezen als het boek de standaardkeuze is op die plek." }
    ],
  },
  {
    id: "behavioral-substitution",
    title: "Gedragsvervanging",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Gedragsvervanging is het systematisch vervangen van ongewenste gewoonten door functioneel equivalente alternatieven die dezelfde behoefte vervullen — in plaats van gedrag simpelweg te stoppen.",
    abstractExample: "Stoppen met roken lukt beter als je het vervangt door iets wat dezelfde behoefte vervult (handgebaar, sociale pauze, nicotine via pleisters) dan als je het lege gat laat bestaan.",
    examples: [
      { domain: "Verslaving", icon: "🚭", text: "Alcoholvervanging door kombucha of alcoholvrij bier in sociale situaties vervult dezelfde sociale functie (iets vasthouden, meedoen) zonder de alcohol." },
      { domain: "Stress", icon: "😤", text: "Stresseten vervangen door een wandeling of ademhalingsoefening — beide vervullen de behoefte aan stressregulatie, maar de ene is destructief, de andere opbouwend." },
      { domain: "Schermen", icon: "📱", text: "Avondlijk scrollen vervangen door een boek of gesprek — dezelfde ontspanningsbehoefte, maar zonder de slaapverstorende blauwe licht en dopaminecyclus." }
    ],
  },
  {
    id: "habit-stacking",
    title: "Gewoonten Stapelen",
    difficulty: 1,
    emoji: "📚",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Gewoonten stapelen (Clear) is het koppelen van een nieuwe gewoonte aan een bestaande: 'Na [huidige gewoonte] doe ik [nieuwe gewoonte].' De bestaande gewoonte wordt het signaal voor de nieuwe.",
    abstractExample: "Je poetst al elke dag je tanden (bestaande gewoonte). Je koppelt eraan: 'Na het tandpoetstanden doe ik 2 minuten ademhalingsoefeningen.' Je hebt al een ankerpunt — gebruik het.",
    examples: [
      { domain: "Gezondheid", icon: "🧘", text: "'Na mijn ochtendkoffie doe ik 5 minuten stretching' — de koffie is het signaal. Na een maand is stretching zo automatisch als de koffie zelf." },
      { domain: "Leren", icon: "📖", text: "'Na het avondeten lees ik 10 minuten in een educatief boek' — het eten ankert de leesgewoonte. Consistentie verankert zich snel in de avondroutine." },
      { domain: "Dankbaarheid", icon: "🙏", text: "'Als ik 's ochtends douche, noem ik drie dingen waarvoor ik dankbaar ben' — de douche is het ankerpunt voor de mentale gewoonte." }
    ],
  },
  {
    id: "precommitment",
    title: "Voorafbinding",
    difficulty: 2,
    emoji: "🔒",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Voorafbinding is het bewust beperken van toekomstige keuzes om je toekomstige zelf te beschermen tegen zwakke momenten — je bindt je nu aan gewenst gedrag, wetende dat je later in de verleiding zult komen.",
    abstractExample: "Odysseus liet zichzelf vastbinden aan de mast zodat hij de sirenen kon horen maar er niet op in kon gaan. Je kunt dit toepassen door nu drempels op te werpen die toekomstige slechte keuzes moeilijker maken.",
    examples: [
      { domain: "Financiën", icon: "💰", text: "Automatisch sparen direct bij salarisbetaling ('betaal jezelf eerst') verwijdert de keuzemoment — het geld is al weg voor je het kunt uitgeven." },
      { domain: "Voeding", icon: "🥗", text: "Geen ongezond eten in huis kopen — je voorafbinding is de supermarkt, niet de eigen keuken. De moeilijke beslissing is eenmalig, niet elke avond." },
      { domain: "Productiviteit", icon: "💻", text: "Website-blockers instellen voor social media tijdens werktijden — je besluit 's ochtends in koud bloed, zodat je je ook aan houdt als de verleiding 's middags groot is." }
    ],
  },
  {
    id: "identity-based-habits",
    title: "Identiteitsgebaseerde Gewoonten",
    difficulty: 2,
    emoji: "🪪",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Identiteitsgebaseerde gewoonten (Clear) werken van binnen naar buiten: in plaats van een uitkomst nastreven ('ik wil 10 kg afvallen'), verschuif je naar identiteitsbevestiging ('ik ben iemand die gezond leeft'). Elke actie is een stem op wie je wilt zijn.",
    abstractExample: "Twee mensen weigeren een sigaret. De eerste: 'Ik probeer te stoppen.' De tweede: 'Ik rook niet.' De tweede heeft een identiteitsshift gemaakt — die is duurzamer dan een wilskrachtstrijd.",
    examples: [
      { domain: "Sport", icon: "🏃", text: "Jezelf een 'hardloper' noemen (niet 'iemand die hardloopt') verandert hoe je keuzes maakt — hardlopers hardlopen ook als ze moe zijn, het is wie ze zijn." },
      { domain: "Schrijven", icon: "✍️", text: "'Ik ben een schrijver' in plaats van 'ik probeer elke dag te schrijven' — identiteit gaat vóór gedrag en zorgt voor consistentie ook zonder externe motivatie." },
      { domain: "Financiën", icon: "💰", text: "'Ik ben iemand die niet impulsief koopt' is een krachtigere identiteitsframe dan een lijst budgetregels — bij elke aankoopdruk bevestig je of je verloochent wie je bent." }
    ],
  },
  {
    id: "fresh-start-effect",
    title: "Frisse Start Effect",
    difficulty: 1,
    emoji: "🌅",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Het frisse start effect (Milkman) toont dat mensen eerder nieuwe gewoonten beginnen na temporele markeringen — het nieuwe jaar, verjaardag, maandag, of begin van de maand — omdat ze het verleden mentaal afscheiden van de toekomst.",
    abstractExample: "Een maandag is objectief hetzelfde als een dinsdag. Maar mentaal biedt een maandag een 'nieuw begin' waarbij je jezelf lossnijdt van de mislukkingen van vorige week — je reset de teller.",
    examples: [
      { domain: "Gewoonten", icon: "🔁", text: "Gebruik tijdmarkeerders strategisch: begin nieuwe gewoonten op maandag, de eerste van de maand, of je verjaardag — de mentale reset verhoogt de kans van slagen." },
      { domain: "Herstel", icon: "💪", text: "Na een terugval in ongezond gedrag, wacht niet tot januari — creëer je eigen frisse start (volgende maandag, na dit weekend) om de herstelpoging te initiëren." },
      { domain: "Werk", icon: "💼", text: "Grote projecten starten na een vakantie of bij een nieuw kwartaal werkt beter dan midden in een lopende periode — het frisse start gevoel geeft motivatieboost." }
    ],
  },

  // ── Batch A3: Emotionele Intelligentie ──────────────────────────────────────
  {
    id: "emotional-granularity",
    title: "Emotionele Granulariteit",
    difficulty: 2,
    emoji: "🎨",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Emotionele granulariteit (Barrett) is het vermogen om emoties precies te benoemen en te onderscheiden — niet alleen 'ik voel me slecht' maar 'ik voel me teleurgesteld én bezorgd én een beetje beledigd'. Precisie vergroot regulatievermogen.",
    abstractExample: "Mensen die tientallen emotiewoorden kennen en gebruiken, reguleren hun emoties beter dan mensen die alles 'goed' of 'slecht' noemen — het woord creëert de emotionele categorie die je kunt hanteren.",
    examples: [
      { domain: "Zelfkennis", icon: "🪞", text: "Het onderscheid tussen 'moe' en 'uitgeput en zinloos' versus 'moe maar voldaan' leidt tot heel andere reacties — taal schept de emotionele werkelijkheid die actie stuurt." },
      { domain: "Relaties", icon: "❤️", text: "Iemand die woede onderscheidt in 'gefrustreerd', 'verontwaardigd' en 'vernederd' kan gerichter communiceren over wat hij nodig heeft dan iemand die alles 'boos zijn' noemt." },
      { domain: "Therapeutisch", icon: "🛋️", text: "Het bijhouden van een emotiedagboek met uitgebreid vocabulaire traint granulariteit — na weken merk je subtielere signalen vroeger, wat preventieve regulatie mogelijk maakt." }
    ],
  },
  {
    id: "emotion-regulation-strategies",
    title: "Emotieregulatiestrategieën",
    difficulty: 2,
    emoji: "🎛️",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Emotieregulatiestrategieën zijn technieken om de intensiteit, duur en uitdrukking van emoties te beïnvloeden. De meest effectieve zijn cognitieve herwaardering (de situatie anders interpreteren) en acceptatie — de minst effectieve is onderdrukking.",
    abstractExample: "Je verliest een grote klant. Suppressie: doe alsof het niets is. Herwaardering: dit is een kans om betere klanten te vinden. Acceptatie: dit doet pijn, en dat is oké. De laatste twee werken; de eerste ondermijnt welzijn.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Herwaardering voor presentatieangst: 'Dit is opwinding, mijn lichaam bereidt zich voor op iets belangrijks' vermindert angst effectiever dan 'kalm blijven proberen'." },
      { domain: "Relaties", icon: "❤️", text: "Bij irritatie over een partner: in plaats van suppressie ('ik mag niet boos zijn') of explosie, cognitief herkaderen: 'Hij is moe, niet gemeen' — de interpretatie verandert de emotie." },
      { domain: "Tegenslag", icon: "💪", text: "Acceptatie via mindfulness: de pijnlijke emotie toelaten zonder haar te versterken of te vermijden. Paradoxaal genoeg lost de emotie sneller op dan bij verzet of suppressie." }
    ],
  },
  {
    id: "empathy-types",
    title: "Soorten Empathie",
    difficulty: 2,
    emoji: "🫂",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Empathie kent drie vormen: cognitieve empathie (je kunt je andermans perspectief voorstellen), emotionele empathie (je voelt mee), en compassionele empathie (je voelt mee én wilt helpen). De drie zijn onafhankelijk en vereisen verschillende vaardigheden.",
    abstractExample: "Een goede manipulator heeft hoge cognitieve empathie (begrijpt hoe anderen voelen) maar lage compassionele empathie (gebruikt dit voor eigen voordeel). Een burn-out helper heeft hoge emotionele empathie maar mist grens tussen zichzelf en ander.",
    examples: [
      { domain: "Hulpverlening", icon: "🏥", text: "Artsen met alleen emotionele empathie raken burn-out. De beste artsen combineren cognitieve empathie (begrijpen wat de patiënt ervaart) met compassie, maar blijven zichzelf." },
      { domain: "Leiderschap", icon: "👥", text: "Leiders die cognitieve empathie trainen (actief vragen 'hoe ervaart mijn teamlid dit besluit?') creëren meer psychologische veiligheid dan leiders die alleen op rationele argumenten focussen." },
      { domain: "Conflict", icon: "⚡", text: "In conflicten helpt eerst cognitieve empathie ('wat is zijn perspectief?') voor je reageert — het verlaagt defensiviteit en opent ruimte voor compassionele oplossingen." }
    ],
  },
  {
    id: "emotional-contagion",
    title: "Emotionele Besmetting",
    difficulty: 2,
    emoji: "🌊",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Emotionele besmetting is het onbewust overnemen van emoties van anderen via spiegelneuronen, micromimicry en fysiologische synchronisatie. Groepen en relaties hebben een emotioneel klimaat dat individuen beïnvloedt.",
    abstractExample: "Je gaat energiek een vergadering in en voelt je na tien minuten uitgeput. De negatieve energie van het groep 'besmette' je onbewust via lichaamstaal, toon en gezichtsexpressies.",
    examples: [
      { domain: "Leiderschap", icon: "👥", text: "De emotie van een leider verspreidt zich het snelst door een team — een angstige of cynische leider creëert een angstcultuur ook zonder woorden. Emotionele regulatie is een leiderschapstaak." },
      { domain: "Relaties", icon: "❤️", text: "Chronisch negatieve of angstige partners 'besmetten' elkaar — partners synchroniseren fysiologisch over tijd. Bewustzijn hiervan is de eerste stap naar bescherming." },
      { domain: "Omgeving", icon: "🏠", text: "Bewust kiezen welke mensen je omringt is een van de krachtigste zelfzorgstrategieën — emotionele besmetting is reëel, consistent en onderschat in effect." }
    ],
  },
  {
    id: "alexithymia",
    title: "Alexithymie",
    difficulty: 2,
    emoji: "😶",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Alexithymie is de moeite om eigen emoties te identificeren en te beschrijven. Mensen met hoge alexithymie ervaren emoties via lichamelijke sensaties (buikpijn bij angst, hoofdpijn bij stress) zonder ze als emoties te herkennen.",
    abstractExample: "Iemand met alexithymie zegt 'ik weet niet wat ik voel' niet als sociaal masker maar letterlijk — de emotionele informatie is niet beschikbaar als duidelijk signaal, alleen als vage lichamelijke druk.",
    examples: [
      { domain: "Gezondheid", icon: "🏥", text: "Chronische stress die niet als emotie wordt herkend maar als lichamelijke klacht (nek, rug, maag) — somatisering is klassiek bij alexithymie. Lichaamsgerichte therapie helpt meer dan gesprekstherapie." },
      { domain: "Relaties", icon: "❤️", text: "Partners van alexithyme mensen voelen zich emotioneel niet gehoord — niet door gebrek aan zorg, maar door het letterlijk ontbreken van toegang tot emotionele taal." },
      { domain: "Zelfbewustzijn", icon: "🪞", text: "Bewust lichaamssensaties koppelen aan emotionele labels ('spanning in borst = angst') traint emotioneel bewustzijn — dit is trainbaar via somatische bewustzijnspraktijken." }
    ],
  },
  {
    id: "emotional-flooding",
    title: "Emotionele Overstroming",
    difficulty: 2,
    emoji: "🌊",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Emotionele overstroming (Gottman) treedt op als de fysiologische activatie zo hoog is dat rationeel denken onmogelijk wordt — hartslag boven ~100 slagen/min maakt het neocortex onbereikbaar. Pauzes zijn dan het enige effectieve middel.",
    abstractExample: "In een conflict zeg je dingen die je later betreurt. Dat is overstroming: het emotionele brein heeft de controle overgenomen van het rationele brein. Argumenteren in die staat is zinloos — wachten is de enige optie.",
    examples: [
      { domain: "Conflict", icon: "⚡", text: "Gottman: koppels die bij overstroming 20 minuten pauzeren en iets ontspannends doen (niet over het conflict nadenken), lossen conflicten productiever op dan koppels die doorgaan." },
      { domain: "Werk", icon: "💼", text: "Directe e-mails schrijven in woede leidt tot schade die uren later niet kan worden hersteld — de 24-uurwacht-regel beschermt je van de overspoelde staat." },
      { domain: "Ouderschap", icon: "👨‍👩‍👧", text: "Kinderen leren conflicten oplossen door ouders te zien pauzeren en terugkomen — 'ik ben nu te boos om hier goed over te praten, we praten er later over' is een model." }
    ],
  },
  {
    id: "affect-labeling",
    title: "Affect Labelen",
    difficulty: 1,
    emoji: "🏷️",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Affect labelen is het benoemen van emoties in woorden — 'ik voel angst' — wat neurobiologisch de amygdala-activatie vermindert en prefrontale regulatie verhoogt. Woorden maken emoties beheersbaarder.",
    abstractExample: "Feit: je zegt hardop 'ik ben bang' en je hart klopt minder snel. Hersenscans tonen dat labelen de amygdalarespons direct dempt. Praten over emoties is geen verzwakking maar neurobiologische regulatie.",
    examples: [
      { domain: "Angst", icon: "😰", text: "Piloten die hun angst hardop benoemen tijdens turbulentie ('ik merk dat ik angstig ben') presteren beter dan piloten die de angst verdringen — labelen vrijt cognitieve capaciteit." },
      { domain: "Kinderen", icon: "👧", text: "Kinderen leren emoties labelen via ouders die het voordoen: 'Ik zie dat je verdrietig bent omdat...' Later kunnen ze het zelf — en neuroregulatie volgt vanzelf." },
      { domain: "Mindfulness", icon: "🧘", text: "In meditatie leer je gedachten en emoties observeren en benoemen ('er is angst', 'er is irritatie') — afstand creëren door labelen is een kerncompetentie van mindfulness." }
    ],
  },
  {
    id: "social-baseline-theory",
    title: "Sociale Basislijntheorie",
    difficulty: 2,
    emoji: "🤝",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Sociale basislijntheorie (Coan) stelt dat het menselijk brein sociale verbinding als standaard rekent in zijn energieberekeningen — alleen zijn kost extra energie, verbonden zijn is de rust-staat. Eenzaamheid is geen luxeprobleem maar een basale stressbron.",
    abstractExample: "Het menselijk brein is evolutionair ingesteld op constant sociale verbinding. Alleen zijn vereist meer resources dan verbonden zijn. Eenzaamheid activeert dezelfde stressresponsen als fysieke bedreiging.",
    examples: [
      { domain: "Gezondheid", icon: "🏥", text: "Eenzaamheid heeft een vergelijkbaar gezondheidsrisico als roken 15 sigaretten per dag — het is geen sentimenteel probleem maar een fysiologisch stressor met reële lichamelijke gevolgen." },
      { domain: "Prestatie", icon: "🏆", text: "In een fMRI-studie ervaart iemand die pijn krijgt aanzienlijk minder activering als een vertrouwde hand vasthoudend — aanwezigheid van een vertrouwde persoon dempt letterlijk pijn." },
      { domain: "Werk vanuit huis", icon: "🏠", text: "Thuiswerkers die sociale verbinding niet bewust onderhouden, rapporteren hogere vermoeidheid — het brein verbruikt meer energie bij gebrek aan de sociale basislijn." }
    ],
  },
  {
    id: "vulnerability-courage",
    title: "Kwetsbaarheid als Moed",
    difficulty: 2,
    emoji: "🦁",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Kwetsbaarheid (Brown) is het tonen van onzekerheid, risico en emotionele blootstelling — het is niet zwakheid maar de bakermat van verbinding, innovatie en moed. Kwetsbaarheid vermijden kost meer dan het omarmen.",
    abstractExample: "Als je nooit iets deelt waarvoor je je schaamt of onzeker over bent, kun je ook nooit werkelijk worden begrepen. Verbinding vereist kwetsbaarheid — je kunt alleen verbinden op de plekken die je toont.",
    examples: [
      { domain: "Leiderschap", icon: "👥", text: "Leiders die fouten toegeven en onzekerheid tonen, creëren psychologisch veilige teams waar mensen ook risico's durven nemen — perfecte façades creëren angst, niet vertrouwen." },
      { domain: "Relaties", icon: "❤️", text: "Diepe vriendschappen en liefdesrelaties worden gebouwd op momenten van kwetsbaarheid — oppervlakkige relaties blijven oppervlakkig zolang kwetsbaarheid wordt vermeden." },
      { domain: "Creativiteit", icon: "🎨", text: "Elke creatieve daad is kwetsbaarheid — iets maken en het tonen aan de wereld, wetende dat het kan worden afgewezen. Kwetsbaarheid en creativiteit zijn onlosmakelijk verbonden." }
    ],
  },
  {
    id: "emotional-agility",
    title: "Emotionele Beweeglijkheid",
    difficulty: 2,
    emoji: "🤸",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Emotionele beweeglijkheid (David) is het vermogen om met emoties, gedachten en ervaringen om te gaan op een manier die interne waarden en intenties respecteert — niet het elimineren van negatieve emoties maar het soepel manoeuvreren ermee.",
    abstractExample: "Emotionele beweeglijkheid is niet positief denken of negatieve emoties verdringen. Het is het verschil tussen 'ik ben boos' (fusie met emotie) en 'ik merk dat ik boosheid ervaar' (afstand nemen en bewust reageren).",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een werknemer die angst voor mislukking voelt maar toch het risicovolle project accepteert omdat het bij zijn waarden past — emotionele beweeglijkheid, geen emotionele afwezigheid." },
      { domain: "Ouderschap", icon: "👨‍👩‍👧", text: "Een ouder die gefrustreerd is maar kiest te reageren vanuit liefde en geduld in plaats van vanuit de frustratie — de emotie is er, de reactie is bewust gekozen." },
      { domain: "Tegenslag", icon: "💪", text: "Na een verlies toestaan te rouwen (beweeglijk meebewegen met pijn) in plaats van 'sterk zijn' te pretenderen — paradoxaal herstellen rouwers sneller die hun verdriet volledig toelaten." }
    ],
  },

  // ── Batch A4: Communicatie & Relaties ────────────────────────────────────────
  {
    id: "nonviolent-communication",
    title: "Geweldloze Communicatie",
    difficulty: 2,
    emoji: "🕊️",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Geweldloze communicatie (Rosenberg) is een communicatiestructuur van vier stappen: observeer zonder te oordelen, benoem je gevoel, verbind het aan een behoefte, en doe een concreet verzoek. Het onderscheidt feiten van interpretaties.",
    abstractExample: "In plaats van 'jij luistert nooit naar me' (oordeel): 'Als je op je telefoon kijkt terwijl ik praat (observatie), voel ik me niet gezien (gevoel), omdat verbinding voor mij belangrijk is (behoefte). Kun je je telefoon wegleggen? (verzoek)'",
    examples: [
      { domain: "Relaties", icon: "❤️", text: "'Je bent altijd te laat' → 'Toen je gisteren 30 minuten later was dan afgesproken (observatie), voelde ik me niet belangrijk (gevoel). Kan ik erop rekenen dat je de volgende keer belt? (verzoek)'" },
      { domain: "Werk", icon: "💼", text: "Teamconflicten escaleren door interpretaties als feiten te framen. GVK traint medewerkers feiten te scheiden van verhalen — de vergadering duurde 2 uur is feit; 'zinloze vergadering' is oordeel." },
      { domain: "Ouderschap", icon: "👨‍👩‍👧", text: "'Je bent onverantwoordelijk' → 'Ik zie dat je huiswerk er nog niet uit is (observatie). Ik maak me zorgen (gevoel). Morgenochtend vroeg, kun je dan beginnen? (verzoek)'" }
    ],
  },
  {
    id: "deep-listening",
    title: "Diep Luisteren",
    difficulty: 2,
    emoji: "👂",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Diep luisteren is volledig aanwezig zijn bij wat de ander zegt — niet alleen de woorden, maar ook toon, lichaamstaal en wat niet wordt gezegd — zonder te plannen wat je gaat antwoorden. Het is zeldzaam en buitengewoon krachtig.",
    abstractExample: "De meeste mensen luisteren om te antwoorden. Diep luisteren is luisteren om te begrijpen. Het vereist het tijdelijk parkeren van je eigen oordelen, aannames en responsen — volledig de ruimte van de ander betreden.",
    examples: [
      { domain: "Relaties", icon: "❤️", text: "Partners die zich gehoord voelen (niet alleen begrepen maar echt gehoord) rapporteren significant hogere relatiestevredenheid — het gevoel van 'jij ziet mij' is een basale menselijke behoefte." },
      { domain: "Leiderschap", icon: "👥", text: "Medewerkers die het gevoel hebben dat hun manager echt luistert, zijn productiever en loyaler. De manager die aan het woord is, leert niets — de luisterende manager leert alles." },
      { domain: "Verkoop", icon: "📣", text: "De beste verkopers luisteren 70% van de tijd. Ze ontdekken daardoor pijnpunten die de klant niet bewust kan articuleren — en bieden dan precies de juiste oplossing." }
    ],
  },
  {
    id: "attachment-styles-adult",
    title: "Hechtingsstijlen bij Volwassenen",
    difficulty: 2,
    emoji: "🔗",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Hechtingsstijlen (Bowlby/Ainsworth) uit de vroege kindertijd zetten zich voort in volwassen relaties: veilig (verbinding zonder angst), angstig-preoccupeerd (angst voor verlating), vermijdend-afwijzend (angst voor intimiteit), gedesorganiseerd (beide tegelijk).",
    abstractExample: "Iemand met angstige hechting ervaart in relaties chronische onzekerheid en zoekt voortdurend bevestiging. Iemand met vermijdende hechting trekt zich terug bij intimiteit. Beide zijn aangeleerde beschermingsstrategieën.",
    examples: [
      { domain: "Relaties", icon: "❤️", text: "Angstig gehechte partner + vermijdend gehechte partner = prototype conflictpatroon: één trekt aan, de ander trekt zich terug, wat de angst versterkt en meer terugtrekking veroorzaakt." },
      { domain: "Werk", icon: "💼", text: "Vermijdend gehechte managers houden emotionele afstand van hun team — niet door arrogantie maar door geleerde zelfstandigheid die samenwerking ondermijnt." },
      { domain: "Zelfontwikkeling", icon: "🪞", text: "Hechting is geen lot — 'earned security' is mogelijk. Mensen met onveilige hechtingsstijl die bewust werken aan zichzelf, kunnen veilige relatiepatronen ontwikkelen via therapie en positieve relaties." }
    ],
  },
  {
    id: "repair-attempts",
    title: "Herstelgebaren",
    difficulty: 2,
    emoji: "🩹",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Herstelgebaren (Gottman) zijn pogingen om een conflict te de-escaleren tijdens een gesprek — een grapje, een aanraking, 'ik moet even pauzeren', 'ik hou van je ook al vinden we het hier niet over eens'. Ze voorspellen relatiegeluk sterker dan het conflict zelf.",
    abstractExample: "Het gaat er niet om of koppels ruziemaken — alle koppels doen dat. Het gaat erom of ze kunnen herstellen. Koppels die herstelgebaren doen en ontvangen, overleven conflicten. Koppels die dat niet kunnen, niet.",
    examples: [
      { domain: "Relaties", icon: "❤️", text: "Midden in een verhit gesprek zegt één partner: 'Wacht even, ik vergeet dat ik echt van je hou.' Dat is een herstelaanbieding — de ander die dat accepteert, redt het gesprek." },
      { domain: "Vriendschappen", icon: "👫", text: "Na een conflict de eerste stap zetten — ook als je 'gelijk hebt' — is een herstelaanbod. Wie altijd wacht op de ander, laat vriendschappen langzaam sterven." },
      { domain: "Werk", icon: "💼", text: "In een teamconflict zegt iemand: 'Even pauzeren — wat eten we vandaag to lunch?' De luchtige zijstap ontspant de sfeer, waarna hervatting productiever verloopt." }
    ],
  },
  {
    id: "bids-for-connection",
    title: "Verbindingsbiedingen",
    difficulty: 2,
    emoji: "🤲",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Verbindingsbiedingen (Gottman) zijn kleine momenten waarop mensen om aandacht, respons of verbinding vragen — een opmerking over het nieuws, een gedeelde foto, een zucht. De reactie (naar toe draaien, weg draaien, of negeren) bepaalt de relatiebasis.",
    abstractExample: "Je partner zegt 'kijk eens wat een mooie vogel'. Dit is een verbindingsbod. Je reageert met 'ja hé, mooi!' (naar toe draaien) of je zegt niets (weg draaien). De som van kleine momenten bepaalt de relatie.",
    examples: [
      { domain: "Relaties", icon: "❤️", text: "Gottman onderzoek: gelukkige koppels draaien 87% van de tijd naar verbindingsbiedingen toe. Koppels die later scheiden: 33%. De kleine dagelijkse momenten zijn het fundament." },
      { domain: "Vriendschappen", icon: "👫", text: "Een vriend die nooit reageert op je berichtjes over dagelijkse dingen, verbreekt langzaam de verbindingslaag — niet door grote ruzies maar door chronisch genegeerde kleine biedingen." },
      { domain: "Ouderschap", icon: "👨‍👩‍👧", text: "Een kind dat de ouder iets laat zien wat het interesseert — een tekening, een spel, een idee — dat verdient volle aanwezigheid. Weg draaien leert het kind dat zijn innerlijk leven niet interessant is." }
    ],
  },
  {
    id: "conflict-resolution-styles",
    title: "Conflictstijlen",
    difficulty: 2,
    emoji: "⚔️",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Thomas-Kilmann conflictmodel beschrijft vijf stijlen: vermijden, aanpassen, concurreren, compromis zoeken, en samenwerken. Elke stijl heeft hoge of lage assertiviteit en coöperativiteit — de context bepaalt welke stijl optimaal is.",
    abstractExample: "Samenwerken (hoog assertief + hoog coöperatief) is ideaal maar tijdrovend. Compromis is snel maar geeft niemand volledig wat ze willen. Vermijden werkt voor niet-essentiële conflicten maar niet voor fundamentele issues.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een manager die altijd aanpast (lage assertiviteit), verliest zijn geloofwaardigheid. Eentje die altijd concurreert, vernietigt teamdynamiek. Bewuste stijlkeuze afhankelijk van inzet is de vaardigheid." },
      { domain: "Relaties", icon: "❤️", text: "Koppels die structureel vermijden (geen conflict = harmonie) accumuleren onopgelost ressentiment — het gebrek aan conflict is de brandstof voor een later grote uitbarsting." },
      { domain: "Onderhandelen", icon: "🤝", text: "Bij een loononderhandeling: samenwerken ('wat zijn jouw beperkingen, wat zijn mijn behoeften, kunnen we creatief denken?') levert vaak betere resultaten dan concurreren of compromis." }
    ],
  },
  {
    id: "trust-anatomy",
    title: "Anatomie van Vertrouwen",
    difficulty: 2,
    emoji: "🏛️",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Vertrouwen (Brown/BRAVING) wordt opgebouwd door zeven elementen: grenzen, betrouwbaarheid, verantwoordelijkheid, kluis (vertrouwelijkheid), integriteit, niet-oordelen, en vrijgevigheid. Vertrouwen is niet een moment maar een patroon van kleine acties over tijd.",
    abstractExample: "Vertrouwen is als een marmerpot: elke positieve interactie is een marmer erin, elke vertrouwensbreuk haalt er marmers uit. Grote vertrouwensbreuken legen de pot in één keer. Opbouwen gaat langzaam.",
    examples: [
      { domain: "Leiderschap", icon: "👥", text: "De manager die zegt 'ik houd het vertrouwelijk' maar later geruchten verspreidt, verliest de kluis-component. Herstel vergt maanden van consistent gedrag, niet één verontschuldiging." },
      { domain: "Relaties", icon: "❤️", text: "Betrouwbaarheid betekent niet grote beloften houden maar kleine: op tijd komen, terugbellen als je zei het te doen, aanwezig zijn wanneer afgesproken. Kleine consistenties bouwen vertrouwen." },
      { domain: "Teams", icon: "👥", text: "Hoge vertrouwensteams (Lencioni) debatteren fel over ideeën maar niet over mensen — vertrouwen maakt kwetsbaarheid veilig, en kwetsbaarheid maakt eerlijk debat mogelijk." }
    ],
  },
  {
    id: "assertiveness",
    title: "Assertiviteit",
    difficulty: 2,
    emoji: "💬",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Assertiviteit is het rechtstreeks, eerlijk en respectvol communiceren van eigen behoeften, meningen en grenzen — zonder agressie (andermans rechten schenden) of passiviteit (eigen rechten verwaarlozen). Het is een geleerde vaardigheid, geen persoonlijkheidskenmerk.",
    abstractExample: "Assertiviteit staat op een spectrum: passief (alles accepteren, behoeften verzwijgen) → assertief (helder communiceren met respect voor beide) → agressief (eigen wil doorzetten ten koste van ander).",
    examples: [
      { domain: "Werk", icon: "💼", text: "Wanneer een collega je werk als zijn eigen presenteert: passief = niets zeggen, agressief = publiekelijk beschuldigen, assertief = privé zeggen: 'Ik merkte dat je mijn bijdrage niet noemde — dat is belangrijk voor mij.'" },
      { domain: "Relaties", icon: "❤️", text: "Nee zeggen zonder uitgebreide excuses is assertiviteit: 'Ik kan dit weekend niet, ik heb al plannen' — geen verontschuldigingen die de weigering ondermijnen of de ander overvragen." },
      { domain: "Onderhandeling", icon: "🤝", text: "Salarisonderhandeling: assertief = specifiek bedrag noemen met onderbouwing. Passief = wachten op aanbod. Agressief = ultimatum stellen. Assertieven verdienen gemiddeld significant meer." }
    ],
  },
  {
    id: "digital-communication-pitfalls",
    title: "Valkuilen van Digitale Communicatie",
    difficulty: 1,
    emoji: "📱",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Digitale communicatie mist non-verbale signalen (toon, gezichtsuitdrukking, lichaamshouding) die 70-93% van betekenis dragen. Dit leidt tot systematische misinterpretaties, escalatie en misverstand, versterkt door snelheid van respons en context-armoede.",
    abstractExample: "Een punt aan het einde van een WhatsApp-bericht wordt ervaren als koud of boos, ook als afzender alleen grammaticaal correct was. Toon is onzichtbaar in tekst — de ontvanger vult in, en vult negatief in bij twijfel.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Gevoelige feedback of conflicten via e-mail lossen zelden goed op — de kans op misinterpretatie is te groot. De vuistregel: als het meer dan 3 berichten kost, bel dan of spreek af." },
      { domain: "Relaties", icon: "❤️", text: "Koppels die conflicten via WhatsApp uitvechten, escaleren sneller dan degenen die wachten tot ze face-to-face zijn — de afwezigheid van herstelgebaren en toon maakt tekst gevaarlijk." },
      { domain: "Leiderschap", icon: "👥", text: "Kritiek via e-mail voelt altijd harder aan dan bedoeld — schrijf drie concepten voordat je verstuurt, of bel in plaats daarvan. Positieve feedback via tekst werkt juist wel." }
    ],
  },
  {
    id: "relationship-maintenance",
    title: "Relatiebeheer",
    difficulty: 1,
    emoji: "🌱",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Sterke relaties — zakelijk en persoonlijk — vergen actief onderhoud: regelmatig initiatief nemen, oprechte interesse tonen, iets geven zonder te verwachten. Relaties die alleen worden geactiveerd als je iets nodig hebt, verzwakken snel.",
    abstractExample: "Het netwerk dat je opbouwt als het goed gaat is het netwerk dat helpt als het moeilijk wordt. Mensen die alleen contact opnemen bij een gunst, worden ervaren als transactioneel — wat ze zijn.",
    examples: [
      { domain: "Netwerk", icon: "🌐", text: "De 'keep in touch'-strategie: elke week één oud contact bereiken met een interessant artikel of oprechte vraag — zonder agenda. Na een jaar is je netwerk significanter geactiveerd." },
      { domain: "Vriendschappen", icon: "👫", text: "Vriendschappen die na een verhuizing 'vanzelf' verdwijnen, verdwenen omdat niemand het initiatief nam. Het initiatief hoeft niet groot te zijn — een bericht van 20 seconden telt." },
      { domain: "Familie", icon: "👨‍👩‍👧", text: "Regelmatig oprechte aandacht geven aan familieleden zonder speciale aanleiding bouwt de relationele buffer die nodig is als zich echte crises voordoen." }
    ],
  },

  // ── Batch A5: Productiviteit & Focus ─────────────────────────────────────────
  {
    id: "attention-residue",
    title: "Aandachtsresidu",
    difficulty: 2,
    emoji: "🧠",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Aandachtsresidu (Leroy) is het fenomeen dat een deel van je aandacht bij een vorige taak blijft hangen nadat je overschakelt — waardoor je cognitieve prestatie op de nieuwe taak verminderd is. Multitasking en frequent schakelen stapelen dit effect.",
    abstractExample: "Je beantwoordt halverwege een rapport een e-mail. Zelfs nadat je terugkeert naar het rapport, blijft een deel van je brein bezig met de e-mail. Je denkt dat je 100% aanwezig bent, maar bent het niet.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Onderzoekers die taken afmaken voor ze schakelen, presteren significant beter op de nieuwe taak dan degenen die halfafgemaakt overschakelen. Afmaken verlaagt het residu." },
      { domain: "Vergaderingen", icon: "📅", text: "Naar een vergadering gaan terwijl je midden in een moeilijk probleem zit, leidt tot verdeelde aandacht in de vergadering — het probleem blijft aandacht eisen totdat het is opgelost." },
      { domain: "Studie", icon: "📚", text: "Studeren met meldingen aan creëert constant aandachtsresidu. Eén notificatie om de 5 minuten leidt tot effectief 40% minder cognitieve capaciteit voor de studiestof." }
    ],
  },
  {
    id: "time-blocking",
    title: "Tijdblokken",
    difficulty: 1,
    emoji: "📅",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Tijdblokken is het vooraf toewijzen van specifieke tijdsblokken aan specifieke taken of taaksoorten — in plaats van een takenlijst af te werken wanneer het uitkomt. Kalender = prioriteitenverklaring.",
    abstractExample: "Een open takenlijst geeft je de illusie van controle maar creëert voortdurende keuzedruk. Een gevulde kalender met blokken schakelt de dagelijkse vraag 'wat doe ik nu?' uit — je volgt gewoon het plan.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Cal Newport: plan elke dag voor de dag begint elk uur. Diep werk 's ochtends (ongestoord), vergaderingen 's middags gebundeld, e-mail in vaste blokken — niet doorlopend." },
      { domain: "Studie", icon: "📚", text: "Studenten die hun studie inplannen als harde afspraken in de kalender (niet als vage intenties) studeren gemiddeld 2x meer uren per week dan degenen met alleen een takenlijst." },
      { domain: "Creatief werk", icon: "🎨", text: "Schrijvers die een vast tijdblok hebben (09:00-12:00, altijd, geen uitzonderingen) produceren consistent meer dan schrijvers die 'schrijven als ze inspiratie voelen'." }
    ],
  },
  {
    id: "single-tasking",
    title: "Ééntaakgericht Werken",
    difficulty: 1,
    emoji: "🎯",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Ééntaakgericht werken is het bewust en volledig richten van aandacht op één taak tegelijk, zonder parallelle taken of afleiding. Multitasking is een mythe — het brein wisselt snel maar kan niet parallel cognitieve taken uitvoeren.",
    abstractExample: "Je denkt dat je tegelijk e-mail leest en luistert naar een vergadering. Neurobiologisch schakelt je brein snel tussen beide — geen enkel moment zijn beide volledig actief. Kwaliteit van beide lijdt.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Onderzoek: mensen die hun e-mail sluiten en telefoon wegleggen bij een complexe taak, voltooien die taak 25-30% sneller én met minder fouten dan degenen die 'multitasken'." },
      { domain: "Vergaderingen", icon: "📅", text: "Laptop openhouden in vergaderingen verlaagt begrip van de vergadering met ~20% én cognitieve prestatie op de laptoptaak — beide verliezen. Eén ding tegelijk werkt beter." },
      { domain: "Gesprekken", icon: "💬", text: "Volledig aanwezig in een gesprek (telefoon weg, oogcontact, actief luisteren) leidt tot dieper begrip en sterkere verbinding dan gesplitste aandacht — de ander merkt het altijd." }
    ],
  },
  {
    id: "energy-management",
    title: "Energiebeheer",
    difficulty: 2,
    emoji: "⚡",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Energiebeheer (Loehr & Schwartz) stelt dat prestatie niet wordt beperkt door tijd maar door energie — fysiek, emotioneel, mentaal en spiritueel. Strategisch herstellen is even belangrijk als inspannen; prestatie = stress + herstel.",
    abstractExample: "Je kunt tijd niet vermenigvuldigen, maar je kunt energie vermenigvuldigen. Een uur productieve arbeid met hoge energie overtreft twee uur uitgeputte arbeid. Herstel is niet zwakheid maar prestatiestrategie.",
    examples: [
      { domain: "Prestatie", icon: "🏆", text: "Topsporters schakelen bewust tussen volle inspanning en herstel. Kenniswerkers die dit principe toepassen (echte pauzes, niet doorwerken) presteren consistent beter over tijd." },
      { domain: "Werk", icon: "💼", text: "Een 20-minuten middagdutje verhoogt de cognitieve prestatie de rest van de middag meer dan cafeïne — fysiek herstel heeft direct effect op mentale energie." },
      { domain: "Leefstijl", icon: "🌿", text: "Slaap, beweging, voeding en sociale verbinding zijn energiebronnen — niet luxe. Mensen die deze als niet-onderhandelbaar behandelen, presteren over lange termijn beter dan degenen die ze sacrificeren voor meer werktijd." }
    ],
  },
  {
    id: "flow-conditions",
    title: "Voorwaarden voor Flow",
    difficulty: 2,
    emoji: "🌊",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Flow (Csikszentmihalyi) treedt op als uitdaging en vaardigheid in evenwicht zijn, het doel helder is, en feedback onmiddellijk is. In flow is je prestatie maximaal en tijdsbeleving vervalt. Flow is te creëren, niet te wachten.",
    abstractExample: "Te makkelijk = verveling. Te moeilijk = angst. Op de juiste rand van je vermogen, met duidelijk doel en directe feedback — dat is de flowzone. Dit is geen toeval maar een optimaliseerbaar systeem.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Programmeur in flow: moeilijk maar oplosbaar probleem, geen notificaties, directe feedback van de compiler. Na uren werken voelt het als minuten — de productiviteit was drie keer normaal." },
      { domain: "Sport", icon: "🏃", text: "Hardloper in flow: uitdagend tempo voor je niveau, mooie route, muziek die past bij ritme. Flow in sport correleerd met hogere prestatie én hogere intrinsieke motivatie om te trainen." },
      { domain: "Creativiteit", icon: "🎨", text: "Muzikanten, schrijvers en kunstenaars beschrijven flow als de beste werksessies — ze zoeken bewust de condities op (geen afleiding, uitdagende taak, tijdsdruk) die flow faciliteren." }
    ],
  },
  {
    id: "proactive-vs-reactive",
    title: "Proactief vs. Reactief",
    difficulty: 1,
    emoji: "🚀",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Proactief zijn is handelen op basis van waarden en intenties, los van externe omstandigheden. Reactief zijn is reageren op wat er op je afkomt. Covey: proactieve mensen focussen op hun invloedscirkel, reactieve op zorgen waar ze geen controle over hebben.",
    abstractExample: "Proactief: 'Ik kies hoe ik reageer op dit probleem, ongeacht de oorzaak.' Reactief: 'Ik ben zo omdat het weer slecht is, mijn baas vervelend is, het verkeer zwaar was.' De omgeving bepaalt de staat.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Proactieve medewerker: anticipeert op problemen, vraagt verduidelijking voor de deadline, bespreekt verwachtingen voor het project. Reactieve medewerker: wacht, en klaagt als het misgaat." },
      { domain: "Gezondheid", icon: "🏃", text: "Reactief: dokter bezoeken als je ziek bent. Proactief: bewegen, slapen en eten zodat je minder ziek wordt. Preventief handelen is proactiviteit in de gezondheidssfeer." },
      { domain: "Relaties", icon: "❤️", text: "Proactief in relaties: regelmatig quality time inplannen zonder dat er een probleem is. Reactief: pas investeren als de relatie al in crisis is." }
    ],
  },
  {
    id: "batching",
    title: "Taken Samenvoegen",
    difficulty: 1,
    emoji: "📦",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Batching is het samenvoegen van gelijksoortige taken in één tijdsblok om schakelovergangen te minimaliseren. Elke taakwissel kost aandachtsenergie — door gelijksoortige taken te clusteren, benut je de mentale context-setup maximaal.",
    abstractExample: "In plaats van de hele dag e-mail beantwoorden (constant schakelen), verwerk je e-mail in twee blokken van 30 minuten. In plaats van telefoontjes tussendoor, cluster je ze in één uur. Minder schakelen = meer focus.",
    examples: [
      { domain: "Werk", icon: "💼", text: "E-mailbatching: tweemaal per dag op vaste tijden e-mail behandelen (10:00 en 16:00) verhoogt productiviteit en verlaagt stress — je bent niet constant bereikbaar maar wel betrouwbaar." },
      { domain: "Administratie", icon: "📋", text: "Alle facturen, formulieren en administratie eens per week in één blok afhandelen, niet verspreid. De mentale setup voor 'administratiemodus' hoef je maar één keer per week te activeren." },
      { domain: "Boodschappen", icon: "🛒", text: "Eén grote boodschappenrun per week in plaats van dagelijks kleine ritjes bespaart niet alleen tijd maar ook beslissingsenergie — elke supermarktbezoek vereist cognitieve inspanning." }
    ],
  },
  {
    id: "weekly-review",
    title: "Wekelijkse Evaluatie",
    difficulty: 1,
    emoji: "📊",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Een wekelijkse evaluatie (Allen/Newport) is een structureel moment om terug te kijken op de afgelopen week, te beoordelen wat goed ging en wat niet, en de komende week bewust te plannen vanuit je prioriteiten.",
    abstractExample: "Zonder periodieke evaluatie leef je reactief — je past je aan wat er op je afkomt. Met een wekelijkse evaluatie stuur je actief: je ziet patronen, past bij, en behoudt richting op doelen die maanden vergen.",
    examples: [
      { domain: "Productiviteit", icon: "💼", text: "GTD-beoefenaars die wekelijkse reviews consequent doen, rapporteren lagere stress en hogere productiviteit dan degenen die alleen dagelijkse takenlijsten bijhouden." },
      { domain: "Gezondheid", icon: "🏃", text: "Wekelijks terugkijken op slaap, beweging en eetgedrag maakt patronen zichtbaar die dagelijks onzichtbaar blijven — de week als analyse-eenheid is optimaal voor gedragspatronen." },
      { domain: "Doelen", icon: "🎯", text: "Doelen die je wekelijks evalueert, zijn 4x vaker bereikt dan doelen die alleen jaarlijks worden bekeken — de frequentie van evaluatie voorspelt de kans van succes." }
    ],
  },
  {
    id: "maker-manager-schedule",
    title: "Maker vs. Manager Agenda",
    difficulty: 2,
    emoji: "🗓️",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Paul Graham: makers (schrijvers, programmeurs, ontwerpers) hebben blokken van meerdere uren nodig voor creatief werk. Managers werken op uur-segmenten. Een vergadering midden in de dag vernietigt een maker's productiviteit terwijl het voor een manager normaal is.",
    abstractExample: "Als maker: één vergadering om 14:00 vernietigt effectief de hele middag — de anticipatie ervoor en de herstelperiode erna maken diep werk onmogelijk. Managers begrijpen dit zelden omdat hun werk anders werkt.",
    examples: [
      { domain: "Creatief werk", icon: "🎨", text: "Schrijvers, ontwerpers en ontwikkelaars presteren optimaal met ochtendblokken van 3-4 uur zonder onderbreking. Eén 10-minuten vergadering om 10:00 vernietigt de hele ochtend." },
      { domain: "Leiderschap", icon: "👥", text: "Leiders die makers in hun team begrijpen, clusteren vergaderingen aan begin of eind van de dag — dit respecteert de maker-agenda en verhoogt teamproductiviteit significant." },
      { domain: "Freelance", icon: "💻", text: "Freelancers die klantcontact clusteren (bijv. dinsdag en donderdag) en maandag, woensdag en vrijdag vrijhouden voor productief werk, leveren consistent meer kwaliteitswerk." }
    ],
  },
  {
    id: "pareto-principle-personal",
    title: "Pareto in Persoonlijke Effectiviteit",
    difficulty: 1,
    emoji: "📈",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Het Pareto-principe (80/20) toegepast op persoonlijke effectiviteit: 20% van je activiteiten levert 80% van je resultaten. Identificeer die 20% en elimineer, automatiseer of delegeer zoveel mogelijk van de andere 80%.",
    abstractExample: "In je werk levert waarschijnlijk één of twee kerntaken het meeste op. De rest is ondersteuning, administratie en ruis. Radicaal focussen op de hoge-impact-20% verdubbelt effectief de uitkomst zonder meer uren.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Een verkoper ontdekt dat 3 van zijn 15 klanten 80% van zijn omzet genereren. Door meer tijd te investeren in de top-3 en tijd te verminderen bij de rest, verdubbelt hij zijn inkomen." },
      { domain: "Leren", icon: "📚", text: "20% van de grammaticaregels van een taal dekt 80% van alledaagse communicatie — richt je op de kern, niet op zeldzame uitzonderingen. Pareto-leren is efficiënter dan volledigheid zoeken." },
      { domain: "Gezondheid", icon: "🏃", text: "Een paar fundamentele gewoonten (slaap, kracht/conditietraining, minimaal bewerkt voedsel) hebben meer effect op gezondheid dan tientallen supplementen en biohacks samen." }
    ],
  },

  // ── Batch A6: Mentale Gezondheid & Veerkracht ────────────────────────────────
  {
    id: "stress-response-types",
    title: "Stressresponsen Begrijpen",
    difficulty: 2,
    emoji: "⚡",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Het autonome zenuwstelsel kent twee modi: sympathisch (vechten-vluchten-bevriezen, stressrespons) en parasympathisch (rust-en-verteer, herstelrespons). Chronische activering van de stressrespons schaadt gezondheid en cognitie.",
    abstractExample: "Kortdurende stress is nuttig en adaptief. Chronische stress waarbij het systeem nooit terugschakelt naar parasympathisch, schaadt het immuunsysteem, geheugen, slaap en cardiovasculaire gezondheid.",
    examples: [
      { domain: "Gezondheid", icon: "🏥", text: "Chronische stress verhoogt cortisol, wat het immuunsysteem onderdrukt, slaap verstoort en de hippocampus (geheugen) letterlijk verkleint — stress is een fysiologische realiteit, geen mentale zwakheid." },
      { domain: "Ademhaling", icon: "🫁", text: "Langzame uitademing (langer dan inademing) activeert direct het parasympathische systeem — fysiologische onderdrukking via de nervus vagus. Dit werkt onmiddellijk en vraagt geen geloof." },
      { domain: "Herstel", icon: "😴", text: "Slaap is de primaire stressreductiemechanisme — het parasympathische systeem domineert tijdens diepe slaap. Slaaptekort verhoogt stresshormonen de volgende dag, wat een negatieve spiraal creëert." }
    ],
  },
  {
    id: "rumination-vs-reflection",
    title: "Rumineren vs. Reflecteren",
    difficulty: 2,
    emoji: "🌀",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Rumineren is het herhaaldelijk, passief denken over problemen zonder progressie — je draait in cirkels. Reflecteren is actief, gericht denken dat inzichten genereert en tot conclusies leidt. Beide voelen hetzelfde maar hebben tegengestelde effecten.",
    abstractExample: "Rumineren: 'Waarom overkomt mij dit altijd? Wat is er mis met mij?' Reflecteren: 'Wat is hier precies misgegaan? Wat had ik anders kunnen doen? Wat leer ik hiervan?' De 'waarom'-vraag leidt tot rumineren; 'wat'-vragen leiden tot reflectie.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Na een mislukte presentatie: rumineren = uren piekeren over de schaamte. Reflecteren = 20 minuten systematisch analyseren wat beter kon en een concrete actie plannen." },
      { domain: "Relaties", icon: "❤️", text: "Rumineren over een conflict leidt tot versterking van negatieve emoties. Journalen met specifieke vragen ('wat probeerde de ander te communiceren?') leidt tot inzicht en begrip." },
      { domain: "Slaap", icon: "😴", text: "Nachtelijk piekeren is rumineren — het brein draait in cirkels zonder oplossingen te genereren. Een 'worry time' overdag (15 min actieve probleemoplossing) reduceert nachtelijk piekeren aantoonbaar." }
    ],
  },
  {
    id: "post-traumatic-growth",
    title: "Post-traumatische Groei",
    difficulty: 2,
    emoji: "🌱",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Post-traumatische groei (Tedeschi & Calhoun) beschrijft positieve psychologische verandering als resultaat van het worstelen met zeer uitdagende levensomstandigheden. Groei treedt niet door het trauma zelf op, maar door de cognitieve verwerking ervan.",
    abstractExample: "Tegenover PTSD staat PTG: mensen die door ernstige tegenslag gaan en er doorheen komen, rapporteren soms dieper begrip van wat belangrijk is, sterkere relaties, en hogere levenstevredenheid dan voor de tegenslag.",
    examples: [
      { domain: "Ziekte", icon: "🏥", text: "Kankerpatiënten die de ziekte overleven, rapporteren significant vaker hogere levenswaardering, diepere relaties en duidelijkere prioriteiten dan voor de diagnose — niet ondanks maar door de crisis." },
      { domain: "Verlies", icon: "💔", text: "Rouwverwerking die leidt tot herijking van wat echt belangrijk is — mensen die een dierbare verloren hebben en de verwerking doormaakten, leven soms bewuster dan daarvoor." },
      { domain: "Mislukking", icon: "🏆", text: "Ondernemers na faillissement: degenen die de mislukking actief verwerken (niet vermijden of verdringen), starten succesvoller opnieuw — de mislukkingservaring is een competitief voordeel." }
    ],
  },
  {
    id: "learned-helplessness",
    title: "Aangeleerde Hulpeloosheid",
    difficulty: 2,
    emoji: "⛓️",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Aangeleerde hulpeloosheid (Seligman) treedt op als organismen na herhaalde onvermijdbare negatieve ervaringen stoppen met proberen te ontsnappen of te veranderen — ook als de situatie verandert en ontsnapping mogelijk wordt.",
    abstractExample: "Een hond die herhaaldelijk schokken ontvangt die hij niet kan vermijden, probeert later niet te ontsnappen ook als dat mogelijk is. Mensen ontwikkelen dit na herhaalde mislukkingen waarbij ze geloven dat hun acties er niet toe doen.",
    examples: [
      { domain: "School", icon: "📚", text: "Leerlingen die herhaaldelijk falen op wiskunde (met terugkoppeling die hen incompetent doet voelen), geven moeiteloos op bij nieuwe wiskundeproblemen — ook haalbare. De hulpeloosheid is aangeleerd." },
      { domain: "Werk", icon: "💼", text: "Medewerkers in toxische organisaties waar goede ideeën stelselmatig worden genegeerd, stoppen met voorstellen doen — zelfs na een functiewissel naar een open organisatie. De hulpeloosheid reist mee." },
      { domain: "Gezondheid", icon: "🏃", text: "Mensen die herhaaldelijk diëten en jojo-effecten ervaren, kunnen aangeleerde hulpeloosheid ontwikkelen over gewichtsbeheersing — 'het lukt me toch nooit'. Dit is aangeleerd, niet waar." }
    ],
  },
  {
    id: "resilience-building",
    title: "Veerkracht Opbouwen",
    difficulty: 2,
    emoji: "🌳",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Veerkracht is niet de afwezigheid van moeilijkheid maar het vermogen om te herstellen na tegenslag en er sterker uit te komen. Veerkracht is geen persoonlijkheidskenmerk maar een set van opbouwbare vaardigheden en hulpbronnen.",
    abstractExample: "Veerkrachtige mensen zijn niet ongevoelig voor pijn — ze ervaren tegenslag net zo heftig. Maar ze hebben vaardigheden en hulpbronnen die herstel faciliteren: sociale steun, zingeving, coping-strategieën.",
    examples: [
      { domain: "Tegenslag", icon: "💪", text: "De vier pijlers van veerkracht: sociale verbinding (steun vragen en geven), zelfzorg (basis fysieke behoeften), zingeving (het 'waarom' behouden), en cognitieve flexibiliteit (situaties kunnen herkaderen)." },
      { domain: "Werk", icon: "💼", text: "Veerkrachtige professionals na ontslag: ze rouwen kort, analyseren wat er is geleerd, activeren hun netwerk, en herdefiniëren de situatie als kans — niet als identiteitsverlies." },
      { domain: "Opvoeding", icon: "👨‍👩‍👧", text: "Kinderen worden veerkrachtiger door leeftijdspassende uitdagingen te overwinnen — niet door bescherming van alle moeilijkheden. Ouders die problemen oplossen voor kinderen, verminderen kindveerkracht." }
    ],
  },
  {
    id: "cognitive-defusion",
    title: "Cognitieve Defusie",
    difficulty: 2,
    emoji: "🫧",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Cognitieve defusie (ACT) is het creëren van afstand tussen jezelf en je gedachten — je observeert gedachten als mentale gebeurtenissen in plaats van met hen te fuseren. 'Ik ben waardeloos' wordt 'ik merk dat ik de gedachte heb dat ik waardeloos ben'.",
    abstractExample: "Gedachten zijn geen feiten. Door ze te bekijken in plaats van erdoorheen te kijken, verliezen ze hun directe invloed op gedrag. De metafoor: gedachten zijn als wolken die voorbijdrijven — jij bent de hemel.",
    examples: [
      { domain: "Angst", icon: "😰", text: "'Ik ga falen' (fusie) → 'Ik merk dat mijn brein het scenario afspeelt dat ik ga falen' (defusie). De defusieversie geeft ruimte om anders te handelen dan de gedachte dicteert." },
      { domain: "Zelfkritiek", icon: "🪞", text: "Bij harde zelfkritische gedachten: stel je voor dat ze worden gezegd door een tekeningfiguur met grappige stem. Humor creëert defusie — de gedachte verliest zijn vat door de context te veranderen." },
      { domain: "Beslissingen", icon: "🎯", text: "Angst voor publiek spreken defuseren: 'Mijn angstbrein vertelt mij dat dit rampzalig wordt' — de gedachte is gelabeld als output van het angstbrein, niet als feit over de werkelijkheid." }
    ],
  },
  {
    id: "boundary-setting",
    title: "Grenzen Stellen",
    difficulty: 2,
    emoji: "🚧",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Grenzen zijn de limieten die je stelt aan wat je accepteert in interacties met anderen — gebaseerd op je waarden en behoeften. Grenzen zijn niet muren maar regels voor hoe je behandeld wilt worden, gecommuniceerd zonder agressie.",
    abstractExample: "Grenzen gaan niet over het controleren van andermans gedrag maar over het definiëren van je eigen reactie: 'Als je me zo blijft aanspreken, verlaat ik het gesprek' — niet 'je mag me niet zo aanspreken'.",
    examples: [
      { domain: "Werk", icon: "💼", text: "'Ik ben na 18:00 niet bereikbaar voor niet-urgente berichten' is een grens. Consistentie in nakomen is het fundament — een grens die je regelmatig schendt, communiceert dat hij niet bestaat." },
      { domain: "Relaties", icon: "❤️", text: "Grenzen stellen zonder schuldgevoel: je bent niet verantwoordelijk voor de emotionele reactie van de ander op je grens. Je bent verantwoordelijk voor jezelf, niet voor het managen van andermans gevoelens." },
      { domain: "Familie", icon: "👨‍👩‍👧", text: "Familiegrenzen zijn moeilijkst omdat sociale druk het sterkst is. 'Ik begrijp dat je teleurgesteld bent, en ik ga toch nee zeggen' — de grens houden zonder de relatie te vernietigen." }
    ],
  },
  {
    id: "self-regulation",
    title: "Zelfregulatie",
    difficulty: 2,
    emoji: "🎛️",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Zelfregulatie is het vermogen om gedachten, emoties en gedrag te sturen in lijn met doelen en waarden — ook onder druk. Het is de metataardigheid die alle andere persoonlijke ontwikkeling mogelijk maakt.",
    abstractExample: "Zelfregulatie is niet het onderdrukken van impulsen maar het managen van de ruimte tussen stimulus en respons. Die ruimte — hoe klein ook — is waar keuzevrijheid en groei beginnen.",
    examples: [
      { domain: "Gezondheid", icon: "🏃", text: "Zelfregulatie voorspelt gezondheidsuitkomsten beter dan IQ — mensen die impulsen kunnen vertragen en lange termijn boven korte termijn stellen, maken betere gezondheids- en financiële beslissingen." },
      { domain: "Leiderschap", icon: "👥", text: "Leiders met sterke zelfregulatie reageren kalm in crises, communiceren helder onder druk en modelleren het gedrag dat ze van hun team verwachten — dit schept psychologische veiligheid." },
      { domain: "Relaties", icon: "❤️", text: "De pauze van één seconde voor je reageert op een provocerende opmerking kan het verschil maken tussen constructief gesprek en destructief conflict — zelfregulatie in actie." }
    ],
  },
  {
    id: "acceptance-vs-resignation",
    title: "Acceptatie vs. Berusting",
    difficulty: 2,
    emoji: "🌿",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Acceptatie (ACT) is het volledig toelaten van moeilijke ervaringen zonder ertegen te vechten — niet omdat ze goed zijn, maar omdat weerstand extra lijden toevoegt. Berusting is passief opgeven. Acceptatie is actieve openheid die ruimte vrijmaakt voor actie.",
    abstractExample: "Acceptatie zegt: 'Dit is er, ik vecht er niet tegen, én ik kies wat ik doe.' Berusting zegt: 'Dit is er, ik kan toch niets doen.' Dezelfde erkenning van realiteit, maar tegengesteld in hun handlingspotentieel.",
    examples: [
      { domain: "Gezondheid", icon: "🏥", text: "Chronische pijnpatiënten die accepteren ('de pijn is er, ik bouw mijn leven eromheen') functioneren beter dan degenen die constant vechten om de pijn weg te maken — paradoxaal vermindert acceptatie ook de pijn-intensiteitsbeleving." },
      { domain: "Verlies", icon: "💔", text: "Rouwverwerking: acceptatie van verlies betekent niet dat het verlies goed was, maar dat je er niet langer kracht in steekt om het ongedaan te maken — die kracht komt vrij voor het leven dat nog voor je ligt." },
      { domain: "Werk", icon: "💼", text: "Een project dat mislukt: acceptatie = erkennen dat het is mislukt en analyseren wat er te leren valt. Niet-acceptatie = energie blijven steken in 'dit had niet mogen gebeuren'." }
    ],
  },
  {
    id: "cognitive-reappraisal",
    title: "Cognitieve Herwaardering",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Cognitieve herwaardering is het veranderen van de manier waarop je een situatie interpreteert om haar emotionele impact te veranderen — niet door ontkenning of suppressie, maar door een genuanceerder of alternatief perspectief te vinden.",
    abstractExample: "Herwaardering werkt bovenstrooms: je verandert de interpretatie voor de volledige emotionele respons plaatsvindt. Dit is effectiever dan suppressie (neerwaarts duwen van al aanwezige emotie).",
    examples: [
      { domain: "Angst", icon: "😰", text: "Presentatieangst herkaderen als opwinding — fysiologisch zijn ze identiek (verhoogde hartslag, adrenaline). 'Ik ben opgewonden' in plaats van 'ik ben bang' verbetert daadwerkelijk presentatieprestatie." },
      { domain: "Conflict", icon: "⚡", text: "Een kritische e-mail herkaderen: 'Mijn collega wil dit project succesvol laten zijn, net als ik' in plaats van 'hij valt mij persoonlijk aan' — dezelfde e-mail, andere interpretatie, andere respons." },
      { domain: "Tegenslag", icon: "💪", text: "Een tegenslag herkaderen als feedback in plaats van als mislukking: 'Dit toont me precies waar ik moet groeien' — niet positief denken maar genuanceerder interpreteren." }
    ],
  },

  // ── Batch A7: Doelen & Motivatie ─────────────────────────────────────────────
  {
    id: "self-determination-theory",
    title: "Zelfdeterminatietheorie",
    difficulty: 2,
    emoji: "🌱",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Zelfdeterminatietheorie (Deci & Ryan) stelt dat mensen drie basale psychologische behoeften hebben: autonomie (eigen keuzes maken), competentie (effectief zijn), en verbondenheid (betekenisvolle relaties). Vervulling van deze behoeften voorspelt intrinsieke motivatie en welzijn.",
    abstractExample: "Externe beloningen (geld, erkenning) kunnen intrinsieke motivatie ondermijnen — het 'overjustification effect'. Als je iets doet voor de beloning, vergeet je de intrinsieke waarde ervan.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Werknemers die autonomie hebben over hoe ze hun werk uitvoeren, zijn productiever en tevredener dan werknemers die gedetailleerde instructies krijgen — zelfs bij gelijke competentie." },
      { domain: "Ouderschap", icon: "👨‍👩‍👧", text: "Kinderen die worden betaald voor goed rapportcijfers, verliezen intrinsieke interesse in leren — de externe beloning ondermijnt de interne. Autonomie en competentieontwikkeling werken beter." },
      { domain: "Sport", icon: "🏃", text: "Mensen die sporten omdat ze het leuk vinden (intrinsiek) blijven gemiddeld 8x langer vol dan degenen die sporten voor een extern doel (zomer, bruiloft) — het doel verdwijnt, de gewoonte ook." }
    ],
  },
  {
    id: "goal-gradient-effect",
    title: "Doelgradient Effect",
    difficulty: 2,
    emoji: "📈",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Het doelgradient effect toont dat motivatie en inspanning toenemen naarmate het doel dichter bij is. Mensen werken harder als ze voelen dat ze bijna klaar zijn — dit kan worden benut door deeldoelen te creëren.",
    abstractExample: "Een koffiezegelsysteem met 10 stempel-vakken dat start met 2 al ingestempeld (nog 8 te gaan) wordt sneller volgestempeld dan een systeem dat start van 0 (ook 8 te gaan). Voortgang motiveert.",
    examples: [
      { domain: "Productiviteit", icon: "💼", text: "Grote projecten opdelen in zichtbare mijlpalen benut het doelgradient — je bent gemotiveerder als je 80% compleet bent dan als je nog 20% moet voltooien van een abstract geheel." },
      { domain: "Sport", icon: "🏃", text: "Hardlopers versnellen automatisch in de laatste kilometers van een marathon. Trainers benoemen bewust 'je bent bijna' om dit effect te activeren, ook als dat nog 5 km is." },
      { domain: "Spaardoelen", icon: "💰", text: "Een spaarrekening met een zichtbare voortgangsbalk motiveert meer dan een getal — de visuele nabijheid van het doel stuurt gedrag sterker dan de abstracte kennis van de afstand." }
    ],
  },
  {
    id: "intrinsic-extrinsic-motivation",
    title: "Intrinsieke vs. Extrinsieke Motivatie",
    difficulty: 1,
    emoji: "🔥",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Intrinsieke motivatie komt van binnenuit — plezier, interesse, nieuwsgierigheid, groei. Extrinsieke motivatie komt van buiten — beloning, vermijding van straf, sociale erkenning. Intrinsieke motivatie is duurzamer en leidt tot hogere kwaliteit.",
    abstractExample: "De schrijver die schrijft omdat hij ideeën wil verkennen (intrinsiek) schrijft andere en rijkere boeken dan de schrijver die schrijft voor bestsellerstatus (extrinsiek). Beiden schrijven, maar vanuit heel andere kracht.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Kenniswerkers die intrinsiek gemotiveerd zijn, produceren meer innovatief en kwalitatief werk. Pink: voor routinetaken werken externe beloningen, voor creatieve taken ondermijnen ze kwaliteit." },
      { domain: "Fitness", icon: "🏋️", text: "De sporters die 10 jaar later nog sporten, doen het omwille van hoe het voelt, de gemeenschap, of de uitdaging — niet voor het lichaam dat ze in jaar 1 wilden hebben." },
      { domain: "Leren", icon: "📚", text: "Studenten die studeren omdat het onderwerp hen fascineert, onthouden de stof jaren later. Studenten die voor het cijfer studeren, vergeten het een week na het examen." }
    ],
  },
  {
    id: "values-based-goals",
    title: "Waarden-gebaseerde Doelen",
    difficulty: 2,
    emoji: "🧭",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Waarden-gebaseerde doelen zijn gericht op wie je wilt zijn en wat je wilt uitdrukken, niet op wat je wilt bereiken. Ze zijn gebaseerd op intrinsieke waarden, niet op externe validatie — en zijn daardoor intrinsiek motiverend en bestand tegen tegenslag.",
    abstractExample: "Doel: '10 kg afvallen' (uitkomstgericht, extern). Waarde-gebaseerd: 'Ik wil iemand zijn die zijn lichaam respecteert door goed te slapen, te bewegen en te eten.' Het tweede stuurt gedrag ook als de weegschaal tegenvalt.",
    examples: [
      { domain: "Gezondheid", icon: "🏃", text: "Waardedoel: 'Ik wil fit en energiek zijn zodat ik aanwezig kan zijn voor mijn kinderen.' Dit motiveert ook op moeilijke dagen — uitkomstdoel '10 kg afvallen' niet." },
      { domain: "Carrière", icon: "💼", text: "'Ik wil werk doen dat bijdraagt aan iets dat er voor mij toe doet' is een waardedoel. Het stuurt carrièrekeuzes anders dan 'ik wil een hoog salaris' — en leidt tot duurzamere tevredenheid." },
      { domain: "Relaties", icon: "❤️", text: "'Ik wil een partner zijn die aanwezig, eerlijk en liefdevol is' stuurt dagelijkse keuzes anders dan 'ik wil een goede relatie hebben' — het eerste is actieerbaar, het tweede passief." }
    ],
  },
  {
    id: "progress-principle",
    title: "Voortgangsbeginsel",
    difficulty: 1,
    emoji: "📊",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Het voortgangsbeginsel (Amabile & Kramer) toont dat de grootste dagelijkse motivator voor kenniswerkers kleine, betekenisvolle voortgang in zinvol werk is — meer dan erkenning, prikkels of inspirerende speeches.",
    abstractExample: "De dag dat je één goed zinnetje schreef, één bug oploste of één klantprobleem hielp, voelt beter dan de dag dat je je manager enthousiast hoorde spreken. Voortgang in betekenisvol werk is de sleutel.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Managers die dagelijkse voortgang zichtbaar maken voor hun team ('we hebben vandaag X bereikt') creëren hogere motivatie dan managers die grote visiestories vertellen maar geen kleine successen benoemen." },
      { domain: "Schrijven", icon: "✍️", text: "Schrijvers die elke dag de woordtelling bijhouden zien directe voortgang — 200 woorden per dag voelt als weinig maar is 73.000 woorden per jaar, een volledig boek." },
      { domain: "Leren", icon: "📚", text: "Een taalapp die elke dag de streek-reeks toont, benut het voortgangsbeginsel — de visuele voortgang motiveert om de reeks niet te verbreken, meer dan het leren zelf." }
    ],
  },
  {
    id: "approach-avoidance-motivation",
    title: "Nader- vs. Vermijdingsmotivatie",
    difficulty: 2,
    emoji: "🏹",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Naderingsmotivatie is bewegen naar iets positiefs (plezier, groei, beloning). Vermijdingsmotivatie is bewegen weg van iets negatiefs (pijn, verlies, schaamte). Beiden kunnen gedrag sturen, maar leiden tot verschillende kwaliteiten van ervaring en prestatie.",
    abstractExample: "Studeren om te slagen (nadering) versus studeren om niet te zakken (vermijding). Beide leiden tot studeren, maar nadering gaat gepaard met hogere betrokkenheid, beter onthouden en positieve emoties.",
    examples: [
      { domain: "Gezondheid", icon: "🏃", text: "Sporten om gezond te zijn en energie te hebben (nadering) is duurzamer dan sporten om niet dik te worden (vermijding). Vermijdingsmotivatie verdwijnt zodra de bedreiging minder voelbaar wordt." },
      { domain: "Werk", icon: "💼", text: "Naderingsgerichte medewerkers innoveren meer en nemen meer initiatief. Vermijdingsgerichte medewerkers maken minder fouten maar ook minder doorbraken — ze spelen op safe." },
      { domain: "Relaties", icon: "❤️", text: "Relaties die overleven op angst voor eenzaamheid (vermijding) zijn anders dan relaties die bloeien op verlangen naar verbinding (nadering) — de motivatiebasis bepaalt de relatieskwaliteit." }
    ],
  },
  {
    id: "mental-contrasting",
    title: "Mentaal Contrasteren",
    difficulty: 2,
    emoji: "🔭",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Mentaal contrasteren (WOOP: Wish, Outcome, Obstacle, Plan) is een bewezen techniek waarbij je eerst het gewenste resultaat visualiseert, daarna de obstakels die in de weg staan, en vervolgens een concreet als-dan-plan maakt. Dit is effectiever dan alleen positief visualiseren.",
    abstractExample: "Alleen positief visualiseren werkt niet — het brein denkt dat het doel al bereikt is en verlaagt motivatie. Door ook obstakels te visualiseren en een plan te maken, activeer je gerichte actie.",
    examples: [
      { domain: "Doelen", icon: "🎯", text: "WOOP-methode: Wish (ik wil fitter zijn) → Outcome (ik heb meer energie, voel me beter) → Obstacle (ik ben 's avonds moe en Netflix is aantrekkelijk) → Plan (als ik thuiskom, trek ik direct sportkleren aan)." },
      { domain: "Studie", icon: "📚", text: "Studenten die WOOP toepasten op studiedoelen, studeerden meer uren en haalden hogere cijfers dan studenten die alleen positief visualiseerden of geen mentaal contrasteringstechniek gebruikten." },
      { domain: "Gezondheid", icon: "🏃", text: "Mensen die WOOP toepasten op beweegdoelen, bewogen significant meer dan controles. Het obstakelidentificatie-element is cruciaal — zonder het plan voor het obstakel vervalt het doel bij het eerste obstakel." }
    ],
  },
  {
    id: "commitment-devices-goals",
    title: "Commitment-apparaten voor Doelen",
    difficulty: 2,
    emoji: "🔐",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Commitment-apparaten zijn structuren die je nu opzet om toekomstig gedrag in lijn te brengen met je huidige intenties — je maakt het moeilijker om van je plan af te wijken als de verleiding groot is.",
    abstractExample: "Je weet dat je morgen 's ochtends niet wilt sporten maar weet ook dat je dat zou moeten. Je regelt een sportmaatje die op je rekent — de sociale verplichting is je commitment-apparaat.",
    examples: [
      { domain: "Financiën", icon: "💰", text: "Salarissplitsing naar spaarrekening direct bij salarisontvangst — het geld is nooit zichtbaar beschikbaar. Je toekomstige zelf wordt beschermd door het huidige commitment-apparaat." },
      { domain: "Gezondheid", icon: "🏃", text: "Een sportmaatje, prepaid sportlessen of een weddenschap met een vriend — sociale verplichtingen als commitment-apparaten verhogen opkomst bij sport significant versus alleen intentie." },
      { domain: "Schrijven", icon: "✍️", text: "Publiek aankondigen dat je een boek schrijft, een schrijfgroep deelnemen, of een deadline afspreken met een uitgever — externe commitments beschermen het doel tegen de interne weerstand." }
    ],
  },
  {
    id: "expectancy-theory",
    title: "Verwachtingstheorie",
    difficulty: 2,
    emoji: "🎲",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "De verwachtingstheorie (Vroom) stelt dat motivatie het product is van drie factoren: de verwachting dat inspanning tot prestatie leidt, de verwachting dat prestatie tot beloning leidt, en de waarde die je aan de beloning toekent. Motivatie = E × I × V.",
    abstractExample: "Als je gelooft dat harder werken niets oplevert (lage E), dat goede prestaties niet worden beloond (lage I), of dat de beloning je niets interesseert (lage V), is de motivatie nul — ongeacht de andere factoren.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Medewerkers die geloven dat hun inspanning niet leidt tot betere prestaties (lage eigen effectiviteit) of dat prestatie niet wordt beloond (lage instrumentaliteit), zijn chronisch laag gemotiveerd." },
      { domain: "Studie", icon: "📚", text: "Een student die niet gelooft dat studeren helpt (lage E) of die het diploma niet waardevol vindt (lage V), studeert niet — rationele motivatieanalyse helpt het obstakel te identificeren." },
      { domain: "Fitness", icon: "🏋️", text: "Iemand die heeft geprobeerd te sporten maar nooit resultaat zag (lage E), mist de motivatie opnieuw te starten. Zichtbaar resultaat in de vroege fase is cruciaal voor het opbouwen van verwachting." }
    ],
  },
  {
    id: "stretch-goals",
    title: "Uitrekdoelen",
    difficulty: 2,
    emoji: "🚀",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Uitrekdoelen (stretch goals) zijn ambitieuze doelen die buiten bereik lijken met huidige middelen en methoden — ze dwingen creatief denken en radicale aanpakken. Ze zijn effectief voor innovatie maar risicovol als ze te ver van het haalbare liggen.",
    abstractExample: "Een doel dat 10x verbetering vraagt dwingt anders denken dan een doel dat 10% vraagt. Voor 10% optimaliseer je het bestaande. Voor 10x moet je het systeem zelf heroverwegen — dat is waar innovatie begint.",
    examples: [
      { domain: "Business", icon: "💼", text: "Google's OKR-systeem gebruikt stretch goals (ambitieuze 70% gehaald = goed resultaat). Elon Musk's '10x' denken dwingt SpaceX om raketlanding te heroverwegen in plaats van bestaande systemen te verbeteren." },
      { domain: "Persoonlijk", icon: "🎯", text: "Een marathon lopen als je nooit hebt gesport is een stretch goal — het dwingt je een volledig nieuw systeem (trainingsplan, voeding, herstel) te bouwen in plaats van dagelijkse gewoonten te tweaken." },
      { domain: "Leren", icon: "📚", text: "Een vreemde taal in 3 maanden leren dwingt je tot dagelijks intensief contact in plaats van wekelijks een lesje — de ambitie stuurt radicaal andere methodes dan een bescheiden doel." }
    ],
  },

  // ── Batch A8: Creativiteit & Probleemoplossing ───────────────────────────────
  {
    id: "divergent-convergent-thinking",
    title: "Divergent en Convergent Denken",
    difficulty: 2,
    emoji: "🔀",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Creatief probleemoplossen wisselt tussen twee modi: divergent denken (breed, open, associatief — zoveel mogelijk ideeën genereren zonder oordeel) en convergent denken (gericht, kritisch, selectief — het beste idee kiezen). Beiden tegelijk doen, werkt niet.",
    abstractExample: "Brainstormen lukt alleen als je de convergente modus uitstelt — geen kritiek tijdens het genereren. Daarna schakel je om naar convergent om te selecteren. De volgorde is cruciaal: divergeer eerst, convergeer later.",
    examples: [
      { domain: "Teamwork", icon: "👥", text: "In vergaderingen worden ideeën te snel beoordeeld door de groep — dit onderdrukt divergent denken. Eerst 5 minuten stille individuele brainstorm, daarna gezamenlijke selectie, levert meer en betere ideeën op." },
      { domain: "Schrijven", icon: "✍️", text: "Eerste draft schrijven met uitgeschakelde zelfkritiek (divergent) — gewoon typen. Later reviseren met kritische blik (convergent). Schrijvers die tegelijk schrijven en redigeren, blokkeren beide processen." },
      { domain: "Design", icon: "🎨", text: "UX-designers gebruiken expliciete divergentie (crazy 8s: 8 ideeën in 8 minuten) gevolgd door convergentie (dotmethode om top-3 te kiezen). De scheiding van fasen is de methodologie." }
    ],
  },
  {
    id: "incubation-effect",
    title: "Het Incubatie-effect",
    difficulty: 2,
    emoji: "🥚",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Het incubatie-effect beschrijft hoe doorbraken in probleemoplossing vaak plaatsvinden na een pauze van actief nadenken — de 'aha!'-momenten tijdens een wandeling, douche of slaap zijn geen toeval maar een neurobiologisch proces.",
    abstractExample: "Je brein werkt onbewust door aan problemen als je er niet actief mee bezig bent. Defocus-mode netwerken (DMN) maken associatieve verbindingen die bewust, gefocust denken mist.",
    examples: [
      { domain: "Wetenschap", icon: "🔬", text: "Beroemde doorbraken (Archimedes, Kekulé's droomstructuur van benzeen, Newton's appel) illustreren incubatie. De pauze is geen afleiding maar een essentieel deel van het creatieve proces." },
      { domain: "Werk", icon: "💼", text: "Vastgelopen op een probleem? Doe iets anders 20-30 minuten. Wandelen, een andere taak, of een licht gesprek. De kans dat je terugkeert met een oplossing is significant groter dan doorbijten." },
      { domain: "Schrijven", icon: "✍️", text: "Schrijvers die stukken 'weg leggen' en later terugkijken, zien verbeteringen die ze tijdens intensief schrijven missen — de incubatieperiode verschaft de analytische afstand." }
    ],
  },
  {
    id: "lateral-thinking",
    title: "Lateraal Denken",
    difficulty: 2,
    emoji: "↗️",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Lateraal denken (De Bono) is het bewust zoeken naar onconventionele benaderingen van problemen — zijwaarts denken in plaats van lineair dieper graven. Technieken: willekeurige stimulus, provocatie, alternatieve perspectieven.",
    abstractExample: "Verticaal denken: beter en dieper graven in dezelfde richting. Lateraal denken: zoeken naar een ander gat op een andere plek. Soms is de oplossing niet in de voor de hand liggende richting.",
    examples: [
      { domain: "Business", icon: "💼", text: "Cirque du Soleil loste de vraag 'hoe concurreer ik met grote circussen?' niet op door goedkoper of beter te worden, maar door te stoppen dieren te gebruiken en kunst te worden — lateraal denken." },
      { domain: "Design", icon: "🎨", text: "Willekeurige stimulus-techniek: neem een willekeurig woord (bijv. 'schildpad') en dwing verbindingen met het probleem. De onverwachte associaties doorbreken vaste denkpatronen." },
      { domain: "Probleemoplossing", icon: "🧩", text: "Invers denken: 'Hoe kunnen we dit probleem erger maken?' — de tegenovergestelde vraag onthult factoren die je anders mist, en geeft vervolgens aanwijzingen voor verbetering." }
    ],
  },
  {
    id: "first-principles-thinking",
    title: "Eerste-Principes Denken",
    difficulty: 3,
    emoji: "🔧",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Eerste-principes denken is het afbreken van complexe problemen naar hun fundamentele bouwstenen, en vandaaruit opnieuw opbouwen — in plaats van op analogy-denken (wat doen anderen?) te vertrouwen.",
    abstractExample: "Analogie: 'Elektrische auto's zijn te duur omdat batterijen altijd duur zijn.' Eerste-principes: 'Wat zijn de grondstoffen voor een batterij? Hoeveel kosten die op de spotmarkt?' → Musk ontdekte dat de prijs kan dalen.",
    examples: [
      { domain: "Business", icon: "💼", text: "Musk over SpaceX: raketten kosten $65M. Breakdown van materiaalkosten: $2M. Vraag: waarom zijn we 30x te duur? Analyse leidde tot volledige herontwerp van productieproces." },
      { domain: "Persoonlijk", icon: "🎯", text: "'Ik kan me geen gezond eten veroorloven' — eerste-principes: wat kost gezond eten werkelijk per dag? Wat geef ik nu uit aan ongezond eten? De aanname was fout." },
      { domain: "Studie", icon: "📚", text: "In plaats van 'hoe studeren anderen dit vak?' (analogie), vraag: 'Wat moet ik werkelijk begrijpen? Wat is de meest effectieve manier om dat begrip te bouwen?' — ontwerp je eigen leerpad." }
    ],
  },
  {
    id: "constraint-driven-creativity",
    title: "Beperkingen als Creativiteitsbron",
    difficulty: 2,
    emoji: "🚀",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Beperkingen (tijd, budget, middelen, regels) stimuleren vaak creativiteit in plaats van haar te onderdrukken. Een onbeperkt canvas leidt tot verlammende keuzevrijheid. Beperkingen dwingen gedisciplineerd denken en onconventionele oplossingen.",
    abstractExample: "Twitter's 140-tekenlimiet leidde tot een geheel nieuwe taalstijl. Shakespeare's sonettenstructuur dwong tot poëtische precisie. The Dogma 95-filmmakers creëerden krachtige films door regels op te leggen die Hollywood films verboden.",
    examples: [
      { domain: "Creativiteit", icon: "🎨", text: "Schrijfuitdaging: vertel een volledig verhaal in precies 6 woorden. De extreme beperking dwingt tot radicale selectie — het resultaat is soms krachtiger dan een onbeperkt verhaal." },
      { domain: "Business", icon: "💼", text: "Startups met beperkt budget dwingen prioritering die grote bedrijven niet hebben — ze innoveren met minder omdat ze niet anders kunnen. Beperking dwingt focus op wat echt essentieel is." },
      { domain: "Leren", icon: "📚", text: "Leren in een vreemde taal met beperkt vocabulaire dwingt tot creatieve omschrijvingen. Native speakers beschrijven iets 'geel-oranje' — een kind zegt 'kleur van de zon'. De beperking creëert poëzie." }
    ],
  },
  {
    id: "reframing-problems",
    title: "Problemen Herkaderen",
    difficulty: 2,
    emoji: "🖼️",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Problemen herkaderen is het veranderen van de probleemformulering om nieuwe oplossingsruimte te openen. Hoe je een probleem formuleert, bepaalt sterk welke oplossingen je ziet. Een andere formulering onthult andere mogelijkheden.",
    abstractExample: "Probleem: 'Hoe maken we de lift sneller?' (technisch, duur). Herkaderd: 'Hoe zorgen we dat wachten minder vervelend is?' Oplossing: spiegel in de lift. Zelfde resultaat, radicaal andere oplossingsruimte.",
    examples: [
      { domain: "Design", icon: "🎨", text: "IDEO's David Kelley: 'Ontwerp een beter ziekenhuis' versus 'ontwerp een betere patiëntervaring' — de tweede formulering opent heel andere oplossingen die de eerste sluit." },
      { domain: "Persoonlijk", icon: "🎯", text: "'Hoe stop ik met te veel eten?' → 'Hoe maak ik het makkelijker om gezond te eten?' — de tweede formulering leidt tot toevoegen (gezond eten toegankelijker) in plaats van verbieden (niet eten)." },
      { domain: "Werk", icon: "💼", text: "'Hoe verhogen we de medewerkerstevredenheid?' → 'Wanneer zijn medewerkers van nature het meest gemotiveerd, en hoe creëren we meer van die condities?' — focus verschuift van remedie naar ontwerp." }
    ],
  },
  {
    id: "six-thinking-hats",
    title: "Zes Denkhoeden",
    difficulty: 2,
    emoji: "🎩",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "De zes denkhoeden (De Bono) is een parallelle denkstructuur waarbij deelnemers bewust van perspectief wisselen: feiten (wit), emoties (rood), risico's (zwart), kansen (geel), creativiteit (groen), en proces (blauw). Het voorkomt polariserend debat.",
    abstractExample: "In een normale vergadering debatteren mensen vanuit hun vaste perspectief. Met denkhoeden denkt iedereen tegelijk hetzelfde soort gedachten — eerst iedereen feiten, dan iedereen risico's. Dit leidt tot rijkere analyse.",
    examples: [
      { domain: "Vergaderingen", icon: "📅", text: "Teams die de zesdenkhoedenmethode gebruiken bij complexe beslissingen, nemen betere beslissingen dan teams die vrij debatteren — iedereen is gedwongen elk perspectief te verkennen." },
      { domain: "Persoonlijk", icon: "🎯", text: "Bij een moeilijke carrièrebeslissing: doorloop bewust alle zes perspectieven voordat je besluit. De emotionele hoed (wat voelt goed?) naast de zwarte (wat kan misgaan?) geeft volledig beeld." },
      { domain: "Schrijven", icon: "✍️", text: "Een essay schrijven met de denkhoeden-aanpak: eerst alle feiten verzamelen (wit), dan tegenargumenten (zwart), dan kansen (geel), dan creatieve invalshoeken (groen) — voor je structuur kiest." }
    ],
  },
  {
    id: "productive-failure",
    title: "Productief Falen",
    difficulty: 2,
    emoji: "🏗️",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Productief falen (Kapur) is het ontdekken dat studenten die eerst zelf moeizaam problemen oplossen (en falen), later beter presteren dan studenten die direct correcte instructie krijgen. De strijd voor begrip versterkt het leren.",
    abstractExample: "Directe instructie geeft snelle initiële prestatie maar minder diep begrip. Worstelen met een probleem voor de oplossing wordt gepresenteerd, activeert dieper cognitief verwerken en betere langetermijnretentie.",
    examples: [
      { domain: "Onderwijs", icon: "📚", text: "Wiskundestudenten die eerst zelf probeerden een nieuw concept toe te passen (met fouten) voor ze de formule kregen, scoorden hoger op transfertaken dan studenten die direct de formule kregen." },
      { domain: "Werk", icon: "💼", text: "Nieuwe medewerkers die eerst zelf een probleem mogen aanpakken voor ze de standaardprocedure leren, begrijpen waarom de procedure werkt — ze falen productief." },
      { domain: "Sport", icon: "🏋️", text: "Coaches die atleten eerst zelf oplossingen laten proberen voor ze corrigeren, creëren meer autonome leerders die beter presteren op nieuwe uitdagingen dan atleten die altijd direct instructie kregen." }
    ],
  },
  {
    id: "systems-thinking-personal",
    title: "Systeemdenken voor Persoonlijk Gebruik",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Systeemdenken voor persoonlijk gebruik is het begrijpen van je eigen gedragspatronen als systemen met feedbacklussen — hoe stress leidt tot slechte slaap, wat leidt tot verminderde focus, wat leidt tot meer stress. Interventie op het systeem, niet op symptomen.",
    abstractExample: "Als je telkens 's avonds te laat eet, is de symptoomoplossing: minder eten 's avonds. De systeemoplossing: begrijpen waarom (honger overdag onderdrukt, middagmaal overgeslagen) en de systeemfout aanpakken.",
    examples: [
      { domain: "Gezondheid", icon: "🏃", text: "Stresscyclus als systeem: stress → slechte slaap → verminderde zelfregulatie → slechte voeding → meer stress. Interventie op slaap (niet op stress) doorbreekt de cyclus effectiever." },
      { domain: "Financiën", icon: "💰", text: "Impulsief kopen als systeem: verveling → online shoppen → tijdelijk gevoel van beloning → lege bankrekening → stress → verveling. Interventie op verveling, niet op verbod van kopen." },
      { domain: "Relaties", icon: "❤️", text: "Conflictpatroon als systeem: partner A negeert → partner B escaleert → partner A trekt zich verder terug → partner B escaleert meer. Interventie op de feedbacklus, niet op het symptoom." }
    ],
  },
  {
    id: "inversion-thinking",
    title: "Inversiedenken",
    difficulty: 2,
    emoji: "🔃",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Inversiedenken is het omdraaien van de vraag — in plaats van 'hoe bereik ik succes?' vragen 'wat zorgt zeker voor mislukking?' en dat vermijden. Charlie Munger: 'Keer het probleem altijd om.'",
    abstractExample: "Je wilt een gelukkig leven. Inversie: wat maakt mensen zeker ongelukkig? (sociaal isolement, zinloos werk, financiële zorgen, slechte gezondheid). Vermijd die zaken systemisch in plaats van 'geluk' te najagen.",
    examples: [
      { domain: "Investeren", icon: "💰", text: "Munger: 'Vertel me waar ik ga sterven, zodat ik daar nooit naartoe ga.' Buffett's strategie is grotendeels inversie: wees gedisciplineerd in vermijden van blunders, niet alleen in zoeken naar goede deals." },
      { domain: "Gezondheid", icon: "🏃", text: "Inversie op gezondheid: wat veroorzaakt zeker chronische ziekte? (roken, obesitas, slaaptekort, sedentair leven). Vermijden hiervan heeft meer impact dan het najagen van de perfecte dieet of supplement." },
      { domain: "Leiderschap", icon: "👥", text: "Inversie op teamleiderschap: wat zeker een team vernietigt? (micromanagement, politiek, gebrek aan doel, geen feedback). Systematisch vermijden hiervan is een betere strategie dan de perfecte leiderschapsstijl zoeken." }
    ],
  },

  // ── Batch A9: Financiële Zelfredzaamheid ─────────────────────────────────────
  {
    id: "pay-yourself-first",
    title: "Betaal Jezelf Eerst",
    difficulty: 1,
    emoji: "💰",
    academicCategory: "Economie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Betaal jezelf eerst is het principe om direct bij salarisbetaling een vast deel naar spaargeld of investeringen over te boeken, voor je welke rekening dan ook betaalt. Wat je niet ziet, geef je niet uit.",
    abstractExample: "De meeste mensen sparen wat overblijft na uitgaven. Dit is het omgekeerde van wat werkt. Betaal jezelf eerst: spaar voor alles, geef de rest uit. Het gevoel van tekort werkt als automatische beperking.",
    examples: [
      { domain: "Sparen", icon: "🏦", text: "Automatische overboeking van 20% salaris naar spaarrekening op de dag van uitbetaling — voor het bewuste brein het geld ziet. Na drie maanden merk je het nauwelijks in je levensstijl." },
      { domain: "Pensioen", icon: "📊", text: "Pensioendeelname via werkgever met automatische inhouding is 'betaal jezelf eerst' in institutionele vorm — de reden dat werkgeverspensioen effectiever is dan zelfstandig sparen voor de meeste mensen." },
      { domain: "Freelance", icon: "💼", text: "Freelancers die direct bij ontvangst van betalingen 30% apart zetten (belasting + sparen), leven financieel stabiel. Degenen die wachten tot het einde van het jaar, vinden niets over." }
    ],
  },
  {
    id: "compound-interest-personal",
    title: "Samengestelde Rente in Persoonlijke Financiën",
    difficulty: 1,
    emoji: "📈",
    academicCategory: "Economie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Samengestelde rente is rente op rente — je rendement wordt herbelegd en genereert zelf rendement. Over lange periodes leidt dit tot exponentiële groei. Einstein noemde het het achtste wereldwonder.",
    abstractExample: "€10.000 bij 7% per jaar: na 10 jaar €19.700, na 20 jaar €38.700, na 30 jaar €76.100 — zonder ooit meer te storten. De tijd is de machtigste variabele, niet het bedrag.",
    examples: [
      { domain: "Beleggen", icon: "📊", text: "Iemand die op 22 jaar €5.000 belegt bij 7%, heeft op 65 jaar €105.000. Iemand die wacht tot 32 jaar heeft op 65 jaar €52.000 — 10 jaar verschil, half het vermogen." },
      { domain: "Schuld", icon: "💳", text: "Samengestelde rente werkt ook negatief: creditcardschuld van €2.000 bij 20% rente groeit naar €12.380 na 10 jaar als je alleen minimumbedragen betaalt — hetzelfde mechanisme in omgekeerde richting." },
      { domain: "Vaardigheden", icon: "🧠", text: "Samengestelde interesse geldt ook voor kennis en vaardigheden: kleine dagelijkse verbetering (1% per dag) leidt in een jaar tot 37x beter worden. De wet van samengesteld leren." }
    ],
  },
  {
    id: "loss-aversion-finance",
    title: "Verliesaversie in Financiën",
    difficulty: 2,
    emoji: "😨",
    academicCategory: "Economie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Verliesaversie in financiën is de tendens om verlies circa 2x zwaarder te wegen dan equivalent winst. Dit leidt tot irrationele financiële beslissingen: vasthouden aan dalende aandelen, te vroeg winst nemen, geen risico nemen bij logische kansen.",
    abstractExample: "Je verliest €100 en wint daarna €100 — je bent rationeel op nul maar psychologisch negatief. De pijn van het verlies overtreft het plezier van de winst. Dit misvormt financieel gedrag stelselmatig.",
    examples: [
      { domain: "Beleggen", icon: "📊", text: "Beleggers verkopen winnende aandelen te vroeg (winst pakken) en houden verliezers te lang (vasthouden in hoop op herstel). Beide zijn verliesaversie-gedrag dat rendement verlaagt." },
      { domain: "Huizen", icon: "🏠", text: "Huizeneigenaren verkopen hun huis niet onder de aanschafprijs, zelfs als rationeel gezien verkopen en huren beter is — verliesaversie fixeert op het aanschafbedrag als referentiepunt." },
      { domain: "Onderhandelen", icon: "🤝", text: "Wanneer je een korting framen als 'vermijden van €200 verlies' werkt beter dan '€200 besparen' — beide zijn identiek maar het verliesvermijding-frame motiveert sterker." }
    ],
  },
  {
    id: "emergency-fund",
    title: "Noodfonds",
    difficulty: 1,
    emoji: "🛡️",
    academicCategory: "Economie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Een noodfonds is een liquide reserve van 3-6 maanden vaste lasten die uitsluitend is bestemd voor echte noodgevallen — baanverlies, medische kosten, autoschade. Het is de financiële basis die alle andere financiële doelen mogelijk maakt.",
    abstractExample: "Zonder noodfonds zijn alle tegenslagen een financiële crisis. Met een noodfonds zijn tegenslagen ongemakkelijk maar beheersbaar. De psychologische rust van een noodfonds heeft ook directe waarde.",
    examples: [
      { domain: "Financiën", icon: "💰", text: "Mensen zonder noodfonds lopen meer schulden op, nemen impulsieve beslissingen onder druk, en stoppen eerder met beleggen bij tegenslag. Het noodfonds is de financiële 'bodem'." },
      { domain: "Werk", icon: "💼", text: "Een noodfonds van 6 maanden geeft onderhandelingsmacht bij werkgeverssituaties — je hoeft niet elke baan te accepteren uit financiële nood. Het geeft ook de vrijheid om te stoppen met een toxische baan." },
      { domain: "Ondernemerschap", icon: "🚀", text: "Startende ondernemers met een noodfonds kunnen meer risico nemen in hun bedrijf omdat hun basisbehoeften zijn gedekt — financiële veiligheid is een voorwaarde voor zakelijk risicogedrag." }
    ],
  },
  {
    id: "opportunity-cost-personal",
    title: "Opportuniteitskosten in Dagelijks Leven",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Economie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Opportuniteitskosten zijn de waarde van de beste alternatieve besteding van je geld, tijd of energie. Elke keuze heeft een verborgen prijs — wat je opgeeft door die keuze te maken.",
    abstractExample: "€30.000 auto kopen kost je niet alleen €30.000 — het kost je wat die €30.000 in 20 jaar zou zijn gegroeid bij 7% rendement (€116.000). Bewustzijn van opportuniteitskosten verandert financieel gedrag.",
    examples: [
      { domain: "Grote aankopen", icon: "🛒", text: "Denk bij elke grote aankoop: 'Wat geef ik op in termen van toekomstige waarde en andere opties?' Een boot van €50.000 kost inclusief opportuniteitskosten en onderhoud vaak €250.000+ over 10 jaar." },
      { domain: "Tijd", icon: "⏰", text: "Een uur besteden aan laagwaardige taken kost je het beste alternatieve gebruik van dat uur. De uurwaarde van je tijd berekenen helpt bij beslissingen over uitbesteden versus zelf doen." },
      { domain: "Carrière", icon: "💼", text: "Een veilige maar slechte baan aanhouden heeft opportuniteitskosten: de groei, het netwerk en het salaris van een betere baan. Zichtbaar maken van deze kosten helpt de beslissing te herkaderen." }
    ],
  },
  {
    id: "lifestyle-inflation",
    title: "Levensstijlinflatie",
    difficulty: 2,
    emoji: "📈",
    academicCategory: "Economie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Levensstijlinflatie is de tendens om uitgaven te verhogen naarmate het inkomen stijgt — elk salarisverhogingen verdwijnt in een duurdere auto, groter huis en meer abonnementen. Het verhindert vermogensopbouw ongeacht hoe hoog het inkomen wordt.",
    abstractExample: "De persoon die €30.000 verdient en 20% spaart, bouwt vermogen. Als hij €60.000 verdient en zijn levensstijl verdubbelt (nog steeds 0% spaart), bouwt hij niets. Inkomen ≠ rijkdom.",
    examples: [
      { domain: "Carrière", icon: "💼", text: "Na een promotie bewust de levensstandaard niet direct verhogen — de eerste 3 maanden het extra salaris naar sparen/beleggen sturen. Na het wennen aan minder, pas daarna overwegen of aanpassing wenselijk is." },
      { domain: "Consumptie", icon: "🛒", text: "Hedonic adaptation maakt dat duurder bezit snel normaal voelt — de luxe auto geeft na 3 maanden hetzelfde plezier als de oude auto. Levensstijlinflatie koopt tijdelijk geluk voor permanente kosten." },
      { domain: "Financiën", icon: "💰", text: "De rijkste mensen die Millionaire Next Door interviewde, dreven middenklasse auto's en woonden in bescheiden huizen — ze bestreden levensstijlinflatie bewust als kernstrategie voor vermogensopbouw." }
    ],
  },
  {
    id: "insurance-risk-management",
    title: "Verzekering als Risicobeheer",
    difficulty: 2,
    emoji: "🛡️",
    academicCategory: "Economie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Verzekering is economisch zinvol voor risico's die je niet kunt dragen (groot verlies, lage kans) maar irrationeel voor risico's die je kunt dragen (klein verlies, hoge kans). De vuistregel: verzeker wat je financieel zou vernietigen, niet wat je kunt absorberen.",
    abstractExample: "Ziektekostenverzekering en arbeidsongeschiktheid zijn essentieel — een grote ziekte of letsel kan levenslang gevolg hebben. Een telefoonverzekering voor een €600 telefoon is een slechte deal — de premie plus eigen risico overtreft op termijn de vervanging.",
    examples: [
      { domain: "Persoonlijk", icon: "💰", text: "Eigen risico bij autoverzekering verhogen en het verschil sparen — je eigen fondsbuffer (noodfonds) dekt kleine schades goedkoper dan lage eigen risico's die hoge premies kosten." },
      { domain: "Gezondheid", icon: "🏥", text: "Arbeidsongeschiktheidsverzekering voor zelfstandigen is cruciaal en wordt vaak vergeten — inkomensverlies door ziekte is een catastrofaal risico dat een noodfonds niet kan dekken." },
      { domain: "Levensverzekering", icon: "👨‍👩‍👧", text: "Levensverzekering is zinvol als anderen financieel van je afhankelijk zijn — niet als spaarvehikel (duur) maar als risicodekking. Vaste termijnverzekering + zelf beleggen overtreft gemengde producten." }
    ],
  },
  {
    id: "financial-independence",
    title: "Financiële Onafhankelijkheid",
    difficulty: 2,
    emoji: "🗝️",
    academicCategory: "Economie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Financiële onafhankelijkheid (FI) is het punt waarop passief inkomen (rente, dividenden, verhuur) je levenskosten dekt — je hoeft niet meer te werken voor geld. Het geeft keuzevrijheid over hoe je je tijd besteedt.",
    abstractExample: "De FIRE-beweging (Financial Independence, Retire Early) stelt: als je 25x je jaarlijkse uitgaven hebt gespaard/belegd, kun je 4% per jaar opnemen zonder het vermogen uit te putten (4%-regel).",
    examples: [
      { domain: "Strategie", icon: "📊", text: "FI berekening: als je €30.000 per jaar uitgeeft, heb je €750.000 nodig (25×). Als je €20.000 uitgeeft, heb je €500.000 nodig. Levensstijl bepaalt je FI-getal meer dan inkomen." },
      { domain: "Werken", icon: "💼", text: "FI hoeft niet 'stoppen met werken' te betekenen — het betekent dat je werk kiest omdat je het wilt, niet omdat je het moet. Dit verandert fundamenteel hoe je carrièrekeuzes maakt." },
      { domain: "Jong beginnen", icon: "📈", text: "€500 per maand bij 7% rendement: na 30 jaar €567.000, na 35 jaar €813.000, na 40 jaar €1.198.000. FI is een mathematisch probleem van tijd en spaartarief — geen inkomensdrempel." }
    ],
  },
  {
    id: "mental-accounting-personal",
    title: "Mentale Boekhoudingsfouten",
    difficulty: 2,
    emoji: "🧮",
    academicCategory: "Economie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Mentale boekhouding is de tendens om geld anders te behandelen afhankelijk van de bron of het label — 'belastingteruggave-geld' wordt anders uitgegeven dan 'salarisgeld', terwijl ze economisch identiek zijn. Dit leidt tot irrationele financiële beslissingen.",
    abstractExample: "Je geeft een belastingteruggave van €1.000 makkelijker uit dan €1.000 dat je normaal verdiende. Maar €1.000 is €1.000, ongeacht de bron. Mentale boekhouding creëert kunstmatige categorieën die slecht financieel gedrag stimuleren.",
    examples: [
      { domain: "Bonussen", icon: "💼", text: "Bonusgeld wordt 3x vaker uitgegeven aan luxe dan regulier salaris — mensen mentaal labelen het als 'extra' geld. Rationeel is het identiek. Bewust zijn van dit patroon helpt het te corrigeren." },
      { domain: "Gokken", icon: "🎲", text: "'Speelgeld' bij gokken — winst wordt als 'huisgeld' gezien en gemakkelijker teruggespeeld dan het geld waarmee je begon. Casinodisposities gebruiken dit systematisch in hun voordeel." },
      { domain: "Schuld", icon: "💳", text: "Mensen met creditcardschuld (20% rente) die tegelijkertijd spaargeld aanhouden (2% rente) — dit is irrationeel maar een klassiek mentale boekhouding-fenomeen: schuld en spaargeld worden als gescheiden accounts ervaren." }
    ],
  },
  {
    id: "delayed-gratification",
    title: "Uitgestelde Bevrediging",
    difficulty: 2,
    emoji: "⏳",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Uitgestelde bevrediging is het vermogen om een directe beloning op te geven voor een grotere beloning in de toekomst. Het voorspelt schoolprestaties, gezondheid, relatiestabiliteit en financieel succes beter dan IQ.",
    abstractExample: "Het marshmallow-experiment: kinderen die konden wachten (één marshmallow nu, twee later) hadden decennia later hogere SAT-scores, lager BMI, betere relaties en hogere inkomens. Zelfcontrole is de sleutelvaardigheid.",
    examples: [
      { domain: "Financiën", icon: "💰", text: "Investeren is uitgestelde bevrediging: je geeft vandaag koopkracht op voor meer koopkracht in de toekomst. Mensen die dit principe internaliseren, bouwen structureel meer vermogen dan gelijkwaardige inkomens." },
      { domain: "Gezondheid", icon: "🏃", text: "Dagelijks sporten voor gezondheid op lange termijn is uitgestelde bevrediging — de beloning is jaren verwijderd, de kosten zijn onmiddellijk. Koppeling aan directe intrinsieke beloning (gevoel van voldoening) overbrugt de kloof." },
      { domain: "Carrière", icon: "💼", text: "Jaren investeren in moeilijke vaardigheden, studie of een baan met lager salaris maar meer leerwaarde — uitgestelde bevrediging in carrièreontwikkeling die op lange termijn meer oplevert." }
    ],
  },

  // ── Batch A10: Levensfilosofie & Zingeving ───────────────────────────────────
  {
    id: "stoic-dichotomy",
    title: "Stoïsche Dichotomie van Controle",
    difficulty: 1,
    emoji: "⚖️",
    academicCategory: "Filosofie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "De stoïsche dichotomie van controle (Epictetus) onderscheidt wat in onze macht is (oordelen, verlangens, reacties, keuzes) van wat buiten onze macht is (andermans gedrag, weersomstandigheden, verleden, reputatie). Concentreer energie uitsluitend op het eerste.",
    abstractExample: "Je kunt niet controleren of het regent, maar je kunt je reactie daarop controleren. Je kunt niet controleren of je wordt ontslagen, maar je kunt je reactie, je volgende stap en je houding controleren.",
    examples: [
      { domain: "Tegenslag", icon: "💪", text: "Een sportief verlies: het resultaat was buiten je controle (de tegenstander speelde beter). Wat in je macht is: hoe je traint, hoe je je voorbereidt, hoe je met de teleurstelling omgaat — focus daarop." },
      { domain: "Werk", icon: "💼", text: "Je kunt niet controleren of je promotie krijgt. Je kunt wel controleren hoe goed je werk is, welke relaties je opbouwt, en hoe je reageert als het niet lukt. Stoïcijnse focus op het beheersbare vermindert nutteloze angst." },
      { domain: "Relaties", icon: "❤️", text: "Je kunt niet controleren of iemand van je houdt of je accepteert. Je kunt wel controleren hoe authentiek, vriendelijk en aanwezig je bent. Verlies van controle over andermans gevoelens is bron van chronische onvrede." }
    ],
  },
  {
    id: "memento-mori-personal",
    title: "Memento Mori",
    difficulty: 2,
    emoji: "⏳",
    academicCategory: "Filosofie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Memento mori — 'gedenk dat je sterft' — is de stoïsche en middeleeuwse meditatie over sterfelijkheid als motivator voor het leven van een betekenisvol, authentiek leven. Bewustzijn van eindigheid verhoogt de waarde van het heden.",
    abstractExample: "Als je weet dat je eindig bent, verschuiven prioriteiten. Zaken die nu belangrijk lijken (andermans mening, kleine ergernissen) worden klein. Wat echt telt, wordt duidelijker. De dood is een bruikbaar kompas.",
    examples: [
      { domain: "Prioriteiten", icon: "🎯", text: "Bezef goed: als dit je laatste jaar was, wat zou je anders doen? De vraag is geen drama maar een filtertest voor prioriteiten — veel ergernissen verdwijnen, echte dingen worden zichtbaarder." },
      { domain: "Relaties", icon: "❤️", text: "Rouwen om mensen die je liefhebt nog tijdens hun leven, niet daarna. Bewustzijn van eindigheid van relaties maakt je aandachtiger aanwezig, minder bezig met kleine conflicten." },
      { domain: "Werk", icon: "💼", text: "Steve Jobs: 'Als je elke dag denkt dat het de laatste dag van je leven zou kunnen zijn, zul je op een dag bijna zeker gelijk hebben.' Het was zijn filtertest voor wat hij deed en weigerde." }
    ],
  },
  {
    id: "hedonic-adaptation",
    title: "Hedonische Aanpassing",
    difficulty: 2,
    emoji: "🎡",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Hedonische aanpassing beschrijft hoe mensen emotioneel terugkeren naar hun geluksbasisniveau na positieve of negatieve levensveranderingen. De nieuwe auto, het grotere huis en de promotie verhogen het geluk tijdelijk, maar het neigt terug naar het startpunt.",
    abstractExample: "Je denkt dat de nieuwe baan je gelukkiger maakt. Na 6 maanden is het normaal geworden. Dit is hedonische aanpassing — je loopt op een hedonische molen waarop je hard loopt zonder verder te komen.",
    examples: [
      { domain: "Bezit", icon: "🛒", text: "Onderzoek: lotto-winnaars zijn een jaar na de grote win niet significant gelukkiger dan voor de win — hedonische aanpassing heeft het grotere geluk opgeslokt. Bezit is een slechte geluksstrategie." },
      { domain: "Ervaringen", icon: "✈️", text: "Ervaringen (reizen, concerten, gesprekken) adapteren minder dan bezit — de herinnering blijft waardevol terwijl de herinnering aan een aankoop vervaagt. Investeer in ervaringen boven spullen." },
      { domain: "Dankbaarheid", icon: "🙏", text: "Dankbaarheidspraktijk werkt deels door hedonische aanpassing te vertragen — bewust opmerken en waarderen van het gewone doorbreekt de automatische normalisatie van wat je al hebt." }
    ],
  },
  {
    id: "meaning-making",
    title: "Zingeving",
    difficulty: 2,
    emoji: "✨",
    academicCategory: "Filosofie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Zingeving (Frankl) is het vermogen om betekenis te vinden in elke situatie — inclusief lijden. Mensen die een 'waarom' hebben kunnen elk 'hoe' verdragen. Zin wordt niet gevonden maar gecreëerd via keuzes, bijdragen en houding.",
    abstractExample: "Viktor Frankl ontdekte in een concentratiekamp dat zij die bleven leven degenen waren die betekenis in het lijden vonden — voor de kinderen, voor het boek dat ze wilden schrijven, voor geliefden buiten het kamp.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Hetzelfde werk kan zinvol of zinloos voelen afhankelijk van het verhaal dat je eraan koppelt — de schoonmaker in een ziekenhuis die zijn werk ziet als 'infecties voorkomen' versus 'vloeren schoonmaken' ervaart fundamenteel ander welzijn." },
      { domain: "Tegenslag", icon: "💪", text: "Zingeving is de sterkste beschermfactor bij tegenslag — mensen die betekenis in moeilijkheden kunnen vinden, herstellen sneller en zijn psychologisch veerkrachtiger dan degenen voor wie de tegenslag simpelweg zinloos is." },
      { domain: "Ouderschap", icon: "👨‍👩‍👧", text: "Ouders rapporteren lager momentaan geluk dan niet-ouders (meer stress, minder vrije tijd) maar hogere zingeving — zin en geluk zijn verschillende dimensies die niet altijd in dezelfde richting bewegen." }
    ],
  },
  {
    id: "present-moment-awareness",
    title: "Aanwezigheid in het Heden",
    difficulty: 1,
    emoji: "🌅",
    academicCategory: "Filosofie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Aanwezigheid in het heden is het bewust richten van aandacht op de huidige ervaring — wat je nu waarneemt, voelt en doet — in plaats van te leven in herinneringen (verleden) of anticipatie (toekomst). Het is de enige plek waar het leven werkelijk plaatsvindt.",
    abstractExample: "Je eet terwijl je je zorgen maakt over de vergadering van morgen. Je eet maar ervaart het eten niet. Je bent overal behalve waar je bent. Aanwezigheid is het antidotum voor een leven dat voorbijgaat terwijl je erin leeft.",
    examples: [
      { domain: "Geluk", icon: "😊", text: "Harvard-onderzoek: mensen zijn gemiddeld 47% van de tijd mentaal afwezig van wat ze doen. Mentale aanwezigheid correleert sterker met geluk dan de activiteit zelf — het hoe overtreft het wat." },
      { domain: "Relaties", icon: "❤️", text: "Volledig aanwezig zijn bij een gesprek — telefoon weg, oogcontact, volledig luisteren — is een van de meest waardevolle geschenken die je kunt geven. Mensen voelen onmiddellijk het verschil." },
      { domain: "Ervaring", icon: "✈️", text: "Op vakantie voortdurend foto's maken voor sociale media, leidt tot minder herinneringen aan de vakantie zelf — je was er mentaal niet. Ervaring vereist aanwezigheid, niet documentatie." }
    ],
  },
  {
    id: "growth-vs-fixed-mindset",
    title: "Groeimindset vs. Vaste Mindset",
    difficulty: 1,
    emoji: "🧠",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Groeimindset (Dweck) is de overtuiging dat vaardigheden en intelligentie kunnen worden ontwikkeld door inzet, goede strategieën en feedback. Vaste mindset gelooft dat kwaliteiten aangeboren en onveranderlijk zijn. De mindset stuurt hoe mensen reageren op uitdaging en mislukking.",
    abstractExample: "Vaste mindset bij mislukking: 'Ik ben niet slim genoeg' (conclusie over identiteit). Groeimindset: 'Ik heb nog niet de juiste aanpak gevonden' (conclusie over proces). Dezelfde mislukking, fundamenteel andere implicatie.",
    examples: [
      { domain: "School", icon: "📚", text: "Kinderen geprezen voor intelligentie ('je bent zo slim') kiezen makkelijker taken — ze beschermen hun identiteit. Kinderen geprezen voor inspanning ('je hebt hard gewerkt') kiezen moeilijker uitdagingen." },
      { domain: "Werk", icon: "💼", text: "Medewerkers met groeimindset gaan meer de uitdaging aan, vragen meer feedback en leren sneller dan collega's met vaste mindset die vermijden situaties waarin ze er slecht uit kunnen zien." },
      { domain: "Sport", icon: "🏋️", text: "Michael Jordan werd als tiener van zijn schoolteam gegooid — zijn reactie (harder trainen) is een klassiek groeimindset-voorbeeld. Vaste mindset had hem tot het conclusie gebracht dat hij het niet kon." }
    ],
  },
  {
    id: "eudaimonia",
    title: "Eudaimonie",
    difficulty: 2,
    emoji: "🌟",
    academicCategory: "Filosofie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Eudaimonie (Aristoteles) is het bloeiende leven — niet het plezierige leven (hedonisme) maar het leven in lijn met je hoogste mogelijkheden en deugden. Het is geluk als activiteit, niet als gevoel: actief goed zijn in het zijn wie je kunt zijn.",
    abstractExample: "Hedoon (plezier) is passief — het overkomt je. Eudaimonia is actief — je beoefent het. Een kunstenaar in flow, een ouder die volledig aanwezig is, een wetenschapper die een probleem doorgrond — dat is eudaimonia.",
    examples: [
      { domain: "Werk", icon: "💼", text: "Jobs die eudaimonisch zijn (uitdagend, zinvol, in lijn met je sterke punten) leiden tot dieper welzijn dan plezierige maar zinloze jobs — comfort en geluk zijn niet hetzelfde." },
      { domain: "Relaties", icon: "❤️", text: "Eudaimonische relaties zijn niet altijd makkelijk of plezierig — ze vereisen groei, eerlijkheid en inspanning. Maar ze leiden tot dieper welzijn dan comfortabele relaties zonder uitdaging of diepte." },
      { domain: "Vrije tijd", icon: "🎨", text: "Eudaimonisch vrije-tijdsgebruik (hobby's die vaardigheden vergen, vrijwilligerswerk, leren) leidt tot meer welzijn dan passieve vrije tijd (scrollen, tv kijken) — activiteit overtreft passiviteit." }
    ],
  },
  {
    id: "examined-life",
    title: "Het Onderzochte Leven",
    difficulty: 2,
    emoji: "🔍",
    academicCategory: "Filosofie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Socrates' uitspraak 'het niet-onderzochte leven is het niet waard te leven' is een oproep tot zelfreflectie als morele verplichting. Bewust nadenken over je waarden, keuzes en leven is niet een luxe maar een voorwaarde voor authentiek bestaan.",
    abstractExample: "De meeste mensen leven de aannames, waarden en verwachtingen van anderen zonder ze ooit te bevragen. Het onderzochte leven begint met de vraag: 'Is dit wat ík kies, of is het wat ik nooit heb bevraagd?'",
    examples: [
      { domain: "Carrière", icon: "💼", text: "Iemand die 20 jaar in hetzelfde vak werkt zonder ooit te vragen 'is dit wat ik zou kiezen als ik nu opnieuw kon beginnen?' leeft een niet-onderzocht carrièreleven. De vraag alleen kan bevrijdend zijn." },
      { domain: "Waarden", icon: "⚖️", text: "Journaling, therapie, meditatie en filosofische gesprekken zijn methodes voor het onderzochte leven — ze helpen je aannames expliciet te maken die anders onzichtbaar maar sturend zijn." },
      { domain: "Keuzes", icon: "🎯", text: "Regelmatig terugkijken: 'Is mijn huidig leven gebouwd op keuzes die ik bewust heb gemaakt?' — niet als zelfkritiek maar als kompas. Het onderzochte leven is een levenshouding, niet een eenmalige sessie." }
    ],
  },
  {
    id: "amor-fati",
    title: "Amor Fati",
    difficulty: 2,
    emoji: "🌊",
    academicCategory: "Filosofie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Amor fati — 'liefde voor het lot' — is de stoïsche en Nietzscheaanse levenshouding waarbij je niet alleen aanvaardt wat er gebeurt, maar het actief omarmt en bemint — inclusief het moeilijke en pijnlijke.",
    abstractExample: "Niet: 'Ik accepteer dit tegenvallende resultaat.' Maar: 'Ik omarm dit als precies wat moest gebeuren voor wat ik kan worden.' Een fundamenteel andere relatie met de realiteit dan verzet of louter acceptatie.",
    examples: [
      { domain: "Tegenslag", icon: "💪", text: "Marcus Aurelius: 'Het beletsel bij de actie bevordert de actie. Wat in de weg staat, wordt de weg.' Tegenslagen omvormen van obstakels naar brandstof — amor fati als cognitieve alchemie." },
      { domain: "Verlies", icon: "💔", text: "Nietzsche: de sterkste wens is de ewige Wiederkehr — elk moment zo leven dat je het eindeloos zou willen herhalen. Dit dwingt keuzes die je kunt omarmen, niet keuzes die je spijt van hebt." },
      { domain: "Groeimindset", icon: "🌱", text: "Amor fati vertaald naar groei: elk moeilijk moment is een trainingskans. De atleet die moeilijke trainingen 'liefheeft' omdat ze hem sterker maken, incarneert amor fati in de sportpraktijk." }
    ],
  },
  {
    id: "legacy-thinking",
    title: "Nagedachtenisdenken",
    difficulty: 2,
    emoji: "🏺",
    academicCategory: "Filosofie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Nagedachtenisdenken is het bewust nadenken over welk spoor je achterlaat — in mensen, gemeenschappen en de wereld — als kompas voor huidig handelen. Hoe wil je herinnerd worden, en leef je nu in lijn met dat antwoord?",
    abstractExample: "Covey: begin met het einde in gedachten. Stel je je eigen begrafenis voor: wat wil je dat mensen over je zeggen? Het antwoord onthult je diepste waarden en toetst of je huidig leven daarmee overeenkomt.",
    examples: [
      { domain: "Beslissingen", icon: "🎯", text: "Bij moeilijke keuzes: 'Welke versie van mijzelf wordt herinnerd door deze keuze?' — de nagedachtenistoets helpt kortetermijn-verleidingen te wegen tegen langetermijn-integriteit." },
      { domain: "Werk", icon: "💼", text: "Leiders die zich afvragen 'welk soort organisatie laat ik achter?' maken andere beslissingen over cultuur, waarden en de behandeling van mensen dan leiders die alleen aan kwartaalresultaten denken." },
      { domain: "Ouderschap", icon: "👨‍👩‍👧", text: "De vraag 'wat wil ik dat mijn kinderen later over mijn ouderschap zeggen?' is een krachtige dagelijkse spiegel — ze herschikt prioriteiten van urgentie naar belang." }
    ],
  },

  // ── Batch B1: Leren & Geheugen ───────────────────────────────────────────────
  {
    id: "spaced-repetition-personal",
    title: "Gespreide Herhaling",
    difficulty: 1,
    emoji: "📆",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Gespreide herhaling is het herhalen van leerstof op toenemende intervallen — kort na het leren, dan na een dag, dan een week, dan een maand. Het benut de vergeetcurve van Ebbinghaus om langetermijnretentie te maximaliseren met minimale inspanning.",
    abstractExample: "Eén uur studeren verspreid over vier sessies van 15 minuten levert significant betere retentie op dan één blok van een uur — de tussenliggende vergeetperiodes versterken het geheugenspoor.",
    examples: [
      { domain: "Talen leren", icon: "🗣️", text: "Anki-flashcards gebruiken gespreide herhaling automatisch: woorden die je goed kent komen minder vaak terug. Woorden die je vergeet, vaker. Dit optimaliseert elke studieminuut." },
      { domain: "Studie", icon: "📚", text: "Studenten die verspreid herhalen in plaats van crammen scoren 20-30% hoger op eindtoetsen een maand later — zelfs bij minder totale studietijd. De spreiding is het mechanisme." },
      { domain: "Professioneel", icon: "💼", text: "Nieuwe werkprocedures herhalen op dag 1, dag 7, dag 30 en dag 90 verankert ze in langetermijngeheugen — effectiever dan één training en daarna niets." }
    ],
  },
  {
    id: "retrieval-practice-personal",
    title: "Actieve Terughaaloefening",
    difficulty: 1,
    emoji: "🎣",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Actieve terughaaloefening is het ophalen van informatie uit het geheugen zonder ondersteuning — jezelf testen, niet herlezen. Het terughaalpogingsproces zelf versterkt het geheugenspoor sterker dan elke passieve studietechniek.",
    abstractExample: "Na het lezen van een hoofdstuk: sluit het boek en schrijf op wat je weet. Dit is moeilijker dan herlezen, maar leidt tot 2-3x betere retentie. De moeite van het ophalen is de leeractiviteit.",
    examples: [
      { domain: "Studie", icon: "📚", text: "Studenten die zichzelf testen na het lezen, presteren beter dan studenten die dezelfde tijd besteden aan herlezen — ook al voelt herlezen productiever. De toetstechniek leert beter dan herbeleving." },
      { domain: "Lezingen", icon: "🎓", text: "Na een lezing: 5 minuten opschrijven wat je herinnert voor je aantekeningen raadpleegt. De actieve poging om te herinneren is de leeractiviteit, niet het passief luisteren." },
      { domain: "Taalonderwijs", icon: "🗣️", text: "Woorden produceren (vanuit moedertaal naar doeltaal) is effectiever dan herkennen — actieve productie versterkt het geheugenspoor dieper dan passieve herkenning." }
    ],
  },
  {
    id: "elaborative-interrogation-personal",
    title: "Uitbreidende Bevraging",
    difficulty: 2,
    emoji: "❓",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Uitbreidende bevraging is de leerstrategie waarbij je voortdurend vraagt 'waarom is dit waar?' en 'hoe past dit bij wat ik al weet?' — in plaats van feiten te memoriseren. Begrijpen via verbindingen is dieper en duurzamer dan oppervlakkige memorisatie.",
    abstractExample: "In plaats van een feit te memoriseren, vraag je: 'Hoe weten we dat? Welke verbanden heeft dit met andere kennis? Wat impliceert dit?' Begrip vervangt geheugendruk.",
    examples: [
      { domain: "Leren", icon: "📖", text: "Studenten die 'waarom'-vragen stellen bij elk nieuw concept onthouden 50-70% meer na twee weken dan studenten die samenvatten — de zelfbevraging genereert diepere verwerking." },
      { domain: "Werk", icon: "💼", text: "Bij het leren van een nieuwe werkprocedure: vraag 'waarom werkt dit zo?' in plaats van 'wat zijn de stappen?' Het begrip van de reden maakt aanpassing bij uitzonderingen mogelijk." },
      { domain: "Kinderen", icon: "👧", text: "Kinderen die 'waarom?' vragen zijn epistemisch actief. Goede leraren beantwoorden niet gewoon maar stellen een tegenvraag: 'Wat denk jij dat de reden is?'" }
    ],
  },
  {
    id: "interleaving-personal",
    title: "Verwevenheid in Leren",
    difficulty: 2,
    emoji: "🔀",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Verwevenheid is het afwisselen van verschillende onderwerpen of vaardigheden binnen een studiesessie in plaats van geblokt per onderwerp te studeren. Het voelt minder effectief maar leidt tot significant betere langetermijnretentie en transfervermogen.",
    abstractExample: "Geblokt studeren (AAABBBCCC) voelt efficiënter maar schept valse vertrouwdheid. Verweven studeren (ABCABCABC) dwingt continu het onderscheid te maken — en dat is precies wat je bij toetsen moet doen.",
    examples: [
      { domain: "Wiskunde", icon: "🔢", text: "Studenten die gemengde oefeningen deden scoorden 43% hoger op toetsen dan studenten die geblokt per type hadden geoefend — ondanks dat geblokt beter voelde tijdens het studeren." },
      { domain: "Sport", icon: "🏋️", text: "Tennissers met variabele oefensessies (wisselende slagen) presteerden beter in wedstrijden dan zij die elk slag geblokt oefenden — interleaving traint adaptiviteit." },
      { domain: "Talen", icon: "🗣️", text: "Vocabulaire, grammatica en luisteren afwisselen in één studiesessie werkt beter dan drie aparte sessies per vaardigheid — de verbanden tussen niveaus worden actief gelegd." }
    ],
  },
  {
    id: "desirable-difficulty-personal",
    title: "Wenselijke Moeilijkheid",
    difficulty: 2,
    emoji: "💪",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Wenselijke moeilijkheid beschrijft hoe bepaalde leermoeilijkheden — die het leren vertragen en zwaarder maken — leiden tot betere langetermijnretentie en transfer. Makkelijk leren ≠ goed leren.",
    abstractExample: "Leren dat moeiteloos gaat, verankert oppervlakkig. Leren dat cognitieve inspanning vraagt — zelftest, verwevenheid, gespreide herhaling — verankert diep. Het ongemak is het signaal van echte leeractiviteit.",
    examples: [
      { domain: "Studie", icon: "📚", text: "Studenten die moeilijkere, langzamere leermethodes gebruikten presteerden consequent beter op eindtoetsen dan studenten die makkelijkere methodes gebruikten die productiever aanvoelden." },
      { domain: "Training", icon: "🏋️", text: "Variabele trainingscondities zijn moeilijker maar trainen transfervermogen beter dan consistente, geoptimaliseerde condities — het ongemak is de versterking." },
      { domain: "Feedback", icon: "🎯", text: "Uitgestelde feedback leidt tot betere leerresultaten dan onmiddellijke feedback per poging — de worsteling met onzekerheid is de leerkracht." }
    ],
  },
  {
    id: "chunking-personal",
    title: "Chunking",
    difficulty: 1,
    emoji: "🧩",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Chunking is het groeperen van losse informatie-eenheden tot betekenisvolle clusters, waardoor het werkgeheugen efficiënter werkt. Experts denken in chunks; beginners in losse elementen — dit is een centrale verklaring voor expertverschillen.",
    abstractExample: "Een schaakexpert ziet geen 32 stukken op een bord maar 5-6 betekenisvolle patronen. Het verschil is niet geheugenomvang maar organisatieniveau. Chunking is de vaardigheidsverdichting.",
    examples: [
      { domain: "Muziek", icon: "🎵", text: "Een pianistbeginner leest noot voor noot. Een gevorderde pianist ziet akkoordpatronen en muzikale zinnen — de chunks zijn groter. Expertise is grootschalig chunken, niet sneller noten lezen." },
      { domain: "Programmeren", icon: "💻", text: "Beginners zien regels code; experts zien patronen (loop, recursie, factory pattern). Onderwijs dat expliciet patronen leert in plaats van alleen syntax, bouwt chunks sneller op." },
      { domain: "Leren", icon: "📖", text: "Nieuwe kennis organiseren in verbanden met bestaande kennis (conceptkaarten, hiërarchieën) bouwt chunks — losse feiten zijn kwetsbaar voor vergeten; georganiseerde structuren zijn robuust." }
    ],
  },
  {
    id: "generation-effect",
    title: "Generatie-effect",
    difficulty: 2,
    emoji: "⚡",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Het generatie-effect toont dat informatie die je zelf genereert (invult, aanmaakt, formuleert) beter wordt onthouden dan informatie die je passief ontvangt. Zelf produceren versterkt het geheugenspoor sterker dan consumeren.",
    abstractExample: "Een woordenboekdefinitie lezen behoudt je minder goed dan zelf een definitie formuleren en dan vergelijken. Het genereringsproces is de leeractiviteit — de vergelijking is de feedback.",
    examples: [
      { domain: "Aantekeningen", icon: "📝", text: "Aantekeningen in eigen woorden maken (niet kopiëren) leidt tot significant betere retentie dan woordelijk overschrijven — de vertaling naar eigen taal activeert het generatie-effect." },
      { domain: "Onderwijs", icon: "📚", text: "Studenten vragen om eerst een antwoord te construeren voor de correcte informatie wordt getoond, leidt tot dieper leren — ook als de initiële gok fout was." },
      { domain: "Training", icon: "💼", text: "Werknemers vragen om zelf oplossingen te bedenken voor casestudies voor de standaardoplossing te tonen, leidt tot betere kennisoverdracht dan direct presenteren van de oplossing." }
    ],
  },
  {
    id: "contextual-learning",
    title: "Contextueel Leren",
    difficulty: 2,
    emoji: "🌍",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Contextueel leren benut het feit dat geheugen context-afhankelijk is — je herinnert het beste in de context waarin je leerde. Leren in diverse contexten, of leren in de context van toepassing, verbetert retrieval en transfer.",
    abstractExample: "Abstracte kennis die nooit wordt verbonden aan concrete context, verdampt snel. Leer concepten in de situaties waar je ze gaat gebruiken.",
    examples: [
      { domain: "Talen", icon: "🗣️", text: "Woorden leren in context (zinnen, verhalen, gesprekken) wordt beter onthouden dan geïsoleerde woordenlijsten — de context biedt meerdere geheugenankers die retrieval faciliteren." },
      { domain: "Werk", icon: "💼", text: "Training direct op de werkplek, in de situaties waar de kennis nodig is, levert meer transfer dan klassikale training — de leercontext matcht de gebruikscontext." },
      { domain: "Studie", icon: "📚", text: "Studeren in wisselende omgevingen (niet altijd dezelfde kamer) leidt tot betere retrieval in nieuwe omgevingen — de kennis is niet aan één context vastgeknoopt." }
    ],
  },
  {
    id: "metacognition-learning",
    title: "Metacognitie",
    difficulty: 2,
    emoji: "🔭",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "Metacognitie is denken over je eigen denk- en leerprocessen — weten wat je weet, weten hoe je leert, bewaken of je begrijpt wat je denkt te begrijpen. Het is de metataardigheid die alle andere leervaardigheden coördineert.",
    abstractExample: "De meeste mensen overschatten wat ze hebben geleerd na passief lezen (illusion of knowing). Metacognitie is het vermogen om je eigen begrip accuraat in te schatten — en bij te sturen als je minder weet dan je dacht.",
    examples: [
      { domain: "Studie", icon: "📚", text: "Studenten die zichzelf testen na het lezen (in plaats van het gevoel van herkenning als begrip te accepteren), ontdekken wat ze niet weten — metacognitie beschermt tegen de illusie van leren." },
      { domain: "Werk", icon: "💼", text: "Experts die hun eigen blindspots kennen, zoeken gerichter feedback dan experts die hun kennis overschatten — metacognitief bewustzijn stuurt leergedrag." },
      { domain: "Probleemoplossing", icon: "🧩", text: "De vraag 'begrijp ik dit werkelijk of heb ik alleen de woorden?' onderscheidt diep begrip van oppervlakkige vertrouwdheid. Metacognitie stelt deze vraag automatisch bij hoge performers." }
    ],
  },
  {
    id: "teaching-effect",
    title: "Leren door Uitleggen",
    difficulty: 1,
    emoji: "🎓",
    academicCategory: "Psychologie",
    skillCategory: "Persoonlijke Ontwikkeling",
    definition: "De Feynman-techniek en het protégé-effect tonen dat het uitleggen van een concept aan anderen — of aan jezelf alsof je het uitlegt aan een beginner — leidt tot significant dieper begrip dan alleen studeren voor jezelf.",
    abstractExample: "Als je iets kunt uitleggen aan een 12-jarige zonder jargon, begrijp je het echt. Als je dat niet kunt, heb je de illusie van begrip — je herkent de woorden maar hebt het concept niet geïnternaliseerd.",
    examples: [
      { domain: "Studie", icon: "📚", text: "Studenten die anderen tutorden in een vak, presteerden beter op toetsen voor dat vak dan studenten die alleen voor zichzelf studeerden — uitleggen dwingt lacunes in het begrip bloot te leggen." },
      { domain: "Werk", icon: "💼", text: "Nieuwe kennis verwerken door het in een presentatie of gesprek uit te leggen verankert het dieper dan notities bijhouden — de productie van uitleg dwingt actieve kennisorganisatie." },
      { domain: "Feynman-techniek", icon: "🔬", text: "Stap 1: kies een concept. Stap 2: leg het uit alsof je een kind onderwijst. Stap 3: identificeer waar je vastloopt. Stap 4: terug naar de bron en probeer opnieuw. Hiaten worden zichtbaar." }
    ],
  },
];
