// Principles data structure
// Each principle includes full content, exercises, and relationships

import { principlesNew } from './principlesNew.js';
import { gedachteExperimenten1 } from './gedachteExperimenten1.js';
import { gedachteExperimenten2 } from './gedachteExperimenten2.js';
import { gedachteExperimenten3 } from './gedachteExperimenten3.js';
import { gedachteExperimenten4 } from './gedachteExperimenten4.js';
import { gedachteExperimenten5 } from './gedachteExperimenten5.js';
import { gedachteExperimenten6 } from './gedachteExperimenten6.js';
import { gedachteExperimenten7 } from './gedachteExperimenten7.js';
import { gedachteExperimenten8 } from './gedachteExperimenten8.js';
import { gedachteExperimenten9 } from './gedachteExperimenten9.js';
import { gedachteExperimenten10 } from './gedachteExperimenten10.js';
import { zelfvertrouwen1 } from './zelfvertrouwen1.js';
import { zelfvertrouwen2 } from './zelfvertrouwen2.js';
import { zelfvertrouwen3 } from './zelfvertrouwen3.js';
import { zelfvertrouwen4 } from './zelfvertrouwen4.js';
import { zelfvertrouwen5 } from './zelfvertrouwen5.js';
import { zelfvertrouwen6 } from './zelfvertrouwen6.js';
import { zelfvertrouwen7 } from './zelfvertrouwen7.js';
import { zelfvertrouwen8 } from './zelfvertrouwen8.js';
import { zelfvertrouwen9 } from './zelfvertrouwen9.js';
import { zelfvertrouwen10 } from './zelfvertrouwen10.js';
import { zelfvertrouwen11 } from './zelfvertrouwen11.js';
import { zelfvertrouwen12 } from './zelfvertrouwen12.js';
import { zelfvertrouwen13 } from './zelfvertrouwen13.js';
import { zelfvertrouwen14 } from './zelfvertrouwen14.js';
import { zelfvertrouwen15 } from './zelfvertrouwen15.js';
import { zelfvertrouwen16 } from './zelfvertrouwen16.js';
import { zelfvertrouwen17 } from './zelfvertrouwen17.js';
import { zelfvertrouwen18 } from './zelfvertrouwen18.js';
import { zelfvertrouwen19 } from './zelfvertrouwen19.js';
import { zelfvertrouwen20 } from './zelfvertrouwen20.js';
import { zelfvertrouwen21 } from './zelfvertrouwen21.js';
import { zelfvertrouwen22 } from './zelfvertrouwen22.js';
import { zelfvertrouwen23 } from './zelfvertrouwen23.js';
import { zelfvertrouwen24 } from './zelfvertrouwen24.js';
import { zelfvertrouwen25 } from './zelfvertrouwen25.js';
import { zelfvertrouwen26 } from './zelfvertrouwen26.js';
import { zelfvertrouwen27 } from './zelfvertrouwen27.js';
import { zelfvertrouwen28 } from './zelfvertrouwen28.js';
import { zelfvertrouwen29 } from './zelfvertrouwen29.js';
import { zelfvertrouwen30 } from './zelfvertrouwen30.js';
import { zelfvertrouwen31 } from './zelfvertrouwen31.js';
import { zelfvertrouwen32 } from './zelfvertrouwen32.js';
import { zelfvertrouwen33 } from './zelfvertrouwen33.js';
import { zelfvertrouwen34 } from './zelfvertrouwen34.js';
import { zelfvertrouwen35 } from './zelfvertrouwen35.js';
import { zelfvertrouwen36 } from './zelfvertrouwen36.js';
import { zelfvertrouwen37 } from './zelfvertrouwen37.js';
import { zelfvertrouwen38 } from './zelfvertrouwen38.js';
import { zelfvertrouwen39 } from './zelfvertrouwen39.js';
import { emotieregulatie1 } from './emotieregulatie1.js';
import { ethiek1 } from './ethiek1.js';
import { emotieregulatie2 } from './emotieregulatie2.js';
import { emotieregulatie3 } from './emotieregulatie3.js';
import { emotieregulatie4 } from './emotieregulatie4.js';
import { emotieregulatie5 } from './emotieregulatie5.js';
import { emotieregulatie6 } from './emotieregulatie6.js';
import { emotieregulatie7 } from './emotieregulatie7.js';
import { emotieregulatie8 } from './emotieregulatie8.js';
import { emotieregulatie9 } from './emotieregulatie9.js';
import { emotieregulatie10 } from './emotieregulatie10.js';
import { extraPrinciples3 } from './principlesExtra3.js';
import { extraPrinciples4 } from './principlesExtra4.js';
import { extraPrinciples5 } from './principlesExtra5.js';
import { extraPrinciples6 } from './principlesExtra6.js';
import { extraPrinciples7 } from './principlesExtra7.js';

export const principles = [
  {
    id: "modus-ponens",
    title: "Modus Ponens",
    difficulty: 1,
    emoji: "🔗",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    definition: "Modus ponens is een fundamentele logische regel die stelt: als A dan B, A is waar, dus B is waar. Het is een van de meest basale vormen van deductief redeneren.",
    abstractExample: "Als P waar is, en we weten dat P→Q (als P dan Q), dan kunnen we concluderen dat Q waar is. Dit is geldig ongeacht de inhoud van P en Q.",
    examples: [
      {
        domain: "business",
        icon: "💼",
        text: "Als we de prijs verlagen, stijgen de verkopen (regel). We verlagen de prijs (feit). Dus de verkopen zullen stijgen (conclusie)."
      },
      {
        domain: "daily",
        icon: "🏠",
        text: "Als het regent, wordt de straat nat (regel). Het regent (feit). Dus de straat wordt nat (conclusie)."
      },
      {
        domain: "science",
        icon: "🔬",
        text: "Als de temperatuur onder 0°C daalt, bevriest water (wet). De temperatuur is -5°C (meting). Dus het water bevriest (voorspelling)."
      }
    ],
    relatedPrinciples: ["deduction-induction", "necessary-sufficient"],
  },
  {
    id: "affirming-consequent",
    title: "Affirming the Consequent (Denkfout)",
    difficulty: 1,
    emoji: "⚠️",
    academicCategory: "Logica",
    skillCategory: "Manipulatie Herkennen",
    definition: "Een logische fout waarbij je concludeert dat als B waar is, dan moet A ook waar zijn (gegeven: als A dan B). Dit is ongeldig omdat B ook door andere oorzaken kan ontstaan.",
    abstractExample: "Gegeven: Als P dan Q. Q is waar. Foutieve conclusie: dus P is waar. Dit is fout omdat Q ook waar kan zijn zonder P.",
    examples: [
      {
        domain: "daily",
        icon: "🏠",
        text: "Fout: 'Als het regent, is de straat nat. De straat is nat. Dus het heeft geregend.' - Maar iemand kan ook water hebben gemorst!"
      },
      {
        domain: "business",
        icon: "💼",
        text: "Fout: 'Succesvolle bedrijven adverteren veel. Dit bedrijf adverteert veel. Dus dit bedrijf is succesvol.' - Adverteren garandeert geen succes."
      },
      {
        domain: "politics",
        icon: "🏛️",
        text: "Fout: 'Corrupte politici liegen. Deze politicus liegt. Dus deze politicus is corrupt.' - Mensen kunnen om vele redenen liegen."
      }
    ],
    relatedPrinciples: ["modus-ponens", "post-hoc-ergo"],
  },
  {
    id: "set-theory-basics",
    title: "Set Theory Basics (Een Koe is een Dier)",
    difficulty: 1,
    emoji: "🐄",
    academicCategory: "Logica",
    skillCategory: "Patronen Zien",
    definition: "Een element behoort tot een verzameling, maar niet alle elementen van die verzameling zijn dat specifieke element. Bijvoorbeeld: een koe is een dier, maar een dier hoeft geen koe te zijn.",
    abstractExample: "Als X een element is van verzameling Y, betekent dat niet dat alle elementen van Y gelijk zijn aan X. X ⊂ Y, maar Y ≠ X.",
    examples: [
      {
        domain: "daily",
        icon: "🏠",
        text: "Een appel is fruit, maar niet al het fruit is een appel. Bananen, peren en druiven zijn ook fruit."
      },
      {
        domain: "business",
        icon: "💼",
        text: "Tesla is een autobedrijf, maar niet elk autobedrijf is Tesla. Er zijn honderden andere autofabrikanten."
      },
      {
        domain: "politics",
        icon: "🏛️",
        text: "Nederland is een EU-land, maar niet elk EU-land is Nederland. De EU heeft 27 lidstaten."
      }
    ],
    relatedPrinciples: ["necessary-sufficient", "false-dilemma"],
  },
  {
    id: "correlation-causation",
    title: "Correlatie ≠ Causatie",
    difficulty: 1,
    emoji: "📊",
    academicCategory: "Epistemologie",
    skillCategory: "Causale Verbanden Begrijpen",
    definition: "Het feit dat twee dingen samen voorkomen (correlatie) betekent niet dat het ene het andere veroorzaakt (causatie). Er kunnen andere verklaringen zijn zoals toeval, een gemeenschappelijke oorzaak, of omgekeerde causaliteit.",
    abstractExample: "Als A en B vaak samen voorkomen, kan het zijn dat: 1) A veroorzaakt B, 2) B veroorzaakt A, 3) C veroorzaakt beide, of 4) het is toeval. Correlatie alleen is niet genoeg om causaliteit te bewijzen.",
    examples: [
      {
        domain: "daily",
        icon: "🏠",
        text: "IJsverkoop en verdrinkingen correleren, maar ijs eten veroorzaakt geen verdrinkingen. Beide stijgen in de zomer (gemeenschappelijke oorzaak: warm weer)."
      },
      {
        domain: "business",
        icon: "💼",
        text: "Bedrijven die meer uitgeven aan kantoorplanten hebben hogere productiviteit. Maar: succesvolle bedrijven hebben meer budget voor zowel planten als goede werknemers."
      },
      {
        domain: "science",
        icon: "🔬",
        text: "Het aantal piraten is afgenomen en de wereldtemperatuur gestegen. Dit betekent niet dat piraten de opwarming tegengaan - het is een toevalsrelatie."
      }
    ],
    relatedPrinciples: ["post-hoc-ergo", "confirmation-bias", "availability-heuristic"],
  },
  {
    id: "confirmation-bias",
    title: "Confirmation Bias",
    difficulty: 1,
    emoji: "🔍",
    academicCategory: "Epistemologie",
    skillCategory: "Manipulatie Herkennen",
    definition: "De neiging om informatie te zoeken, te interpreteren en te herinneren op een manier die je bestaande overtuigingen bevestigt, terwijl je tegenstrijdige informatie negeert of afwijst.",
    abstractExample: "Als je gelooft dat X waar is, ben je geneigd om vooral voorbeelden te zien die X bevestigen, en voorbeelden die X weerspreken te negeren of af te doen als uitzonderingen.",
    examples: [
      {
        domain: "daily",
        icon: "🏠",
        text: "Je denkt dat een bepaald merk auto vaak kapot gaat. Vanaf dan val je vooral op wanneer je er eentje langs de weg ziet staan, maar merk je de werkende exemplaren niet op."
      },
      {
        domain: "business",
        icon: "💼",
        text: "Een manager gelooft dat thuiswerken niet productief is. Ze let vooral op thuiswerkers die online niet reageren, maar ziet niet de productieve thuiswerkers."
      },
      {
        domain: "politics",
        icon: "🏛️",
        text: "Je steunt een politieke partij. Je leest vooral nieuws dat je partij in een goed daglicht stelt, en wijt negatief nieuws aan 'biased media'."
      }
    ],
    relatedPrinciples: ["availability-heuristic", "dunning-kruger", "false-dilemma"],
  },
  {
    id: "sunk-cost-fallacy",
    title: "Sunk Cost Fallacy",
    difficulty: 1,
    emoji: "💸",
    academicCategory: "Behavioral Economics",
    skillCategory: "Beslissingen Nemen",
    definition: "De neiging om door te gaan met iets omdat je er al tijd, geld of moeite in hebt gestoken, ook al is stoppen de rationele keuze. Eerdere investeringen die je niet terug kunt krijgen zouden je beslissing niet moeten beïnvloeden.",
    abstractExample: "Je beslissing zou moeten gebaseerd zijn op toekomstige kosten en baten, niet op wat je al hebt geïnvesteerd (sunk costs). Rationale vraag: 'Zou ik dit nu starten met wat ik nu weet?' niet 'Hoeveel heb ik er al in gestoken?'",
    examples: [
      {
        domain: "daily",
        icon: "🏠",
        text: "Je kijkt een saaie film, maar blijft kijken omdat je al een uur hebt gekeken. Rationeel: die tijd is al weg, stop met de film en doe iets leuks."
      },
      {
        domain: "business",
        icon: "💼",
        text: "Een bedrijf blijft investeren in een falend project omdat ze er al €1 miljoen in hebben gestoken. Rationeel: die €1M is al weg, stop het project voordat er meer verlies komt."
      },
      {
        domain: "daily",
        icon: "🏠",
        text: "Je eet je bord leeg ondanks dat je vol zit, 'want je hebt ervoor betaald'. Rationeel: het geld is al uitgegeven, je maakt jezelf alleen maar oncomfortabel."
      }
    ],
    relatedPrinciples: ["opportunity-cost", "loss-aversion", "status-quo-bias"],
    exercises: [{
      type: "multiple-choice",
      question: "Je hebt 3 jaar gestudeerd voor een diploma dat je niet meer wilt. Je hebt nog 1 jaar te gaan. Welk argument is rationeel om te stoppen?",
      options: [
        "Ik heb er al 3 jaar in geïnvesteerd, dus ik moet doorgaan",
        "De toekomstige kosten en baten van stoppen vs. doorgaan bepalen de keuze",
        "Mijn ouders hebben veel betaald, dus ik moet het afmaken",
        "Ik stop nooit halfweg iets"
      ],
      correct: 1,
      feedback: "Juist! De 3 jaar die je al hebt geïnvesteerd zijn weg, ongeacht je keuze. De rationele vraag is: 'Weegt het diploma het komende jaar tijd en geld op?' Niet: 'Wat heb ik al gespendeerd?' Eerdere investeringen zijn sunk costs en mogen je beslissing niet beïnvloeden."
    }],
    creativePrompt: "Bedenk een situatie in jouw eigen leven waarbij je merkte dat je doorging met iets vanwege wat je er al in had gestoken. Hoe zou je die beslissing nu rationeel benaderen?",
    aiHelperPrompts: [
      "Wanneer merk jij dat je 'sunk costs' laat meewegen in je beslissingen?",
      "Wat is de rationele vraag die je jezelf moet stellen als je een beslissing evalueert?",
      "Hoe kun je jezelf trainen om sunk costs los te laten en verder te kijken?"
    ]
  },
  {
    id: "prisoners-dilemma",
    title: "Prisoner's Dilemma",
    difficulty: 2,
    emoji: "🎲",
    academicCategory: "Speltheorie",
    skillCategory: "Beslissingen Nemen",
    definition: "Een situatie waarin individuele rationele keuzes leiden tot een slechtere uitkomst voor beide partijen dan wanneer ze zouden samenwerken. Het dilemma: vertrouwen op samenwerking riskeert uitbuiting, maar wederzijds wantrouwen maakt beide partijen slechter af.",
    abstractExample: "Twee spelers kunnen samenwerken of verraad plegen. Als beiden samenwerken: redelijke uitkomst. Als één verraadt terwijl de ander samenwerkt: beste voor verrader, slechtst voor samenwerkende. Als beiden verraden: slechte uitkomst voor beiden, maar beter dan uitgebuit worden.",
    examples: [
      {
        domain: "business",
        icon: "💼",
        text: "Twee concurrerende bedrijven kunnen prijzen hoog houden (samenwerken) of een prijzenoorlog starten (verraden). Beiden verlagen hun prijzen uit angst dat de ander het doet, waardoor beide bedrijven minder verdienen."
      },
      {
        domain: "politics",
        icon: "🏛️",
        text: "Twee landen kunnen ontwapenen (samenwerken) of bewapenen (verraden). Uit vrees dat de ander zich bewapent, bewapenen beide zich - resulterend in een dure en gevaarlijke wapenwedloop."
      },
      {
        domain: "daily",
        icon: "🏠",
        text: "Twee huisgenoten kunnen beiden het huis schoonmaken (samenwerken) of beiden het laten zitten (verraden). Als één schoonmaakt en de ander niet, profiteert de luie persoon. Uit angst hiervoor maken beiden niet schoon, met een vies huis als gevolg."
      }
    ],
    relatedPrinciples: ["nash-equilibrium", "zero-sum-games", "tragedy-commons"],
  },
  {
    id: "opportunity-cost",
    title: "Opportunity Cost",
    difficulty: 1,
    emoji: "⚖️",
    academicCategory: "Behavioral Economics",
    skillCategory: "Beslissingen Nemen",
    definition: "De waarde van de beste alternatieve optie die je opgeeft wanneer je een keuze maakt. Elke keuze betekent dat je andere mogelijkheden opgeeft - dat is de 'echte' kost van je beslissing.",
    abstractExample: "Als je kiest voor optie A, zijn de kosten niet alleen wat A kost, maar ook de waarde van optie B die je niet gekozen hebt. De werkelijke kost = directe kost + opportunity cost.",
    examples: [
      {
        domain: "daily",
        icon: "🏠",
        text: "Je kiest een avond Netflix kijken. De opportunity cost is niet alleen je tijd, maar wat je anders had kunnen doen: sporten, vrienden zien, of een vaardigheid leren."
      },
      {
        domain: "business",
        icon: "💼",
        text: "Een bedrijf investeert €1M in project A. De opportunity cost is project B waar ze niet in investeerden, dat misschien meer had opgeleverd. Het gaat niet alleen om wat A kost, maar wat B had kunnen opleveren."
      },
      {
        domain: "daily",
        icon: "🏠",
        text: "Je koopt een huis van €300K. De opportunity cost is niet alleen €300K, maar ook wat je anders met dat geld had kunnen: beleggen (mogelijke returns), reizen, of een bedrijf starten."
      }
    ],
    relatedPrinciples: ["sunk-cost-fallacy", "loss-aversion", "decision-making"],
  },
  {
    id: "straw-man-fallacy",
    title: "Straw Man Fallacy",
    difficulty: 1,
    emoji: "🎯",
    academicCategory: "Retorica",
    skillCategory: "Manipulatie Herkennen",
    definition: "Een denkfout waarbij je het argument van een ander verdraait naar een zwakkere, extremere of vereenvoudigde versie, om die makkelijker aan te kunnen vallen. Je vecht tegen een 'stropop' in plaats van het echte argument.",
    abstractExample: "Persoon A stelt: P. Persoon B verdraait dit naar Q (een extreme of vereenvoudigde versie van P). Persoon B weerlegt Q. Maar Q was nooit het argument van A - het echte argument P blijft onaangevallen.",
    examples: [
      {
        domain: "politics",
        icon: "🏛️",
        text: "A: 'We moeten kinderopvang betaalbaarder maken.' B: 'Dus jij wil dat de overheid al het ouderschap overneemt? Kinderen horen bij hun ouders!' - B verdraait A's voorstel naar een extreem standpunt."
      },
      {
        domain: "business",
        icon: "💼",
        text: "A: 'We moeten het wervingsproces versnellen.' B: 'Dus jij wil zomaar iedereen aannemen zonder te screenen? Dat is onverantwoord!' - B maakt er een extreem en onverantwoord voorstel van."
      },
      {
        domain: "daily",
        icon: "🏠",
        text: "A: 'Ik eet minder vlees voor het milieu.' B: 'Oh dus je dwingt iedereen om veganist te worden?' - B verdraait een persoonlijke keuze naar een extreme eis aan anderen."
      }
    ],
    relatedPrinciples: ["ad-hominem", "false-dilemma", "slippery-slope"],
  },
  {
    id: "ad-hominem",
    title: "Ad Hominem",
    difficulty: 1,
    emoji: "👤",
    academicCategory: "Retorica",
    skillCategory: "Manipulatie Herkennen",
    definition: "Een denkfout waarbij je de persoon aanvalt in plaats van hun argument. Je probeert iemands argument te ondergraven door hun karakter, motieven of persoonlijke eigenschappen aan te vallen, in plaats van de inhoud van het argument te weerleggen.",
    abstractExample: "Persoon A stelt argument P. Persoon B valt niet P aan, maar de persoon A ('Je bent X, dus je argument is waardeloos'). Dit is ongeldig omdat de validiteit van P onafhankelijk is van wie het stelt.",
    examples: [
      {
        domain: "politics",
        icon: "🏛️",
        text: "'Je zegt dat we moeten investeren in onderwijs, maar jij bent zelf een leraar dus je bent biased.' - Dit valt de persoon aan, niet het argument over onderwijs."
      },
      {
        domain: "business",
        icon: "💼",
        text: "'Je voorstel voor kostenbesparingen is onzin, want je bent zelf altijd te laat.' - Punctualiteit is irrelevant voor de kwaliteit van het voorstel."
      },
      {
        domain: "daily",
        icon: "🏠",
        text: "'Jij zegt dat roken ongezond is, maar je drinkt zelf elke dag frisdrank!' - Dit invalideert niet het argument over roken."
      }
    ],
    relatedPrinciples: ["straw-man-fallacy", "appeal-authority", "genetic-fallacy"],
  },
  {
    id: "deduction-induction",
    title: "Deductie vs Inductie",
    difficulty: 2,
    emoji: "🔬",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    definition: "Deductie: van algemeen naar specifiek (als de premissen waar zijn, is de conclusie gegarandeerd waar). Inductie: van specifiek naar algemeen (op basis van observaties een algemene regel afleiden - conclusie is waarschijnlijk maar niet gegarandeerd).",
    abstractExample: "Deductie: Alle A's zijn B. X is een A. Dus X is een B. (geldig)\nInductie: X1, X2, X3 (die A zijn) zijn allemaal B. Dus waarschijnlijk zijn alle A's B. (waarschijnlijk maar niet zeker)",
    examples: [
      {
        domain: "science",
        icon: "🔬",
        text: "Deductie: Alle metalen geleiden electriciteit (wet). Koper is een metaal. Dus koper geleidt electriciteit.\nInductie: Ik zie 100 zwanen, allemaal wit. Dus waarschijnlijk zijn alle zwanen wit. (Fout - er bestaan zwarte zwanen!)"
      },
      {
        domain: "daily",
        icon: "🏠",
        text: "Deductie: Alles wat ik uit de vriezer haal is koud. Dit is uit de vriezer. Dus dit is koud.\nInductie: De zon is elke dag opgekomen. Dus de zon komt morgen ook op. (Waarschijnlijk waar, maar niet gegarandeerd)"
      },
      {
        domain: "business",
        icon: "💼",
        text: "Deductie: Alle klanten met abonnement krijgen korting. Jan heeft een abonnement. Dus Jan krijgt korting.\nInductie: Onze laatste 5 producten waren succesvol. Dus dit nieuwe product wordt ook succesvol. (Niet gegarandeerd!)"
      }
    ],
    relatedPrinciples: ["modus-ponens", "necessary-sufficient", "falsification"],
  },
  {
    id: "availability-heuristic",
    title: "Availability Heuristic",
    difficulty: 2,
    emoji: "💭",
    academicCategory: "Epistemologie",
    skillCategory: "Manipulatie Herkennen",
    definition: "De neiging om de waarschijnlijkheid van iets te overschatten op basis van hoe gemakkelijk voorbeelden ervan in je gedachten komen. Recentere, emotionelere, of meer gepubliceerde gebeurtenissen lijken waarschijnlijker dan ze werkelijk zijn.",
    abstractExample: "Als voorbeelden van X makkelijk te herinneren zijn (recent, emotioneel, of veel gepubliceerd), overschatten we de frequentie of waarschijnlijkheid van X. Beschikbaarheid in het geheugen ≠ werkelijke frequentie.",
    examples: [
      {
        domain: "daily",
        icon: "🏠",
        text: "Na een vliegtuigongeluk in het nieuws zijn mensen banger om te vliegen, hoewel vliegtuigen statistisch heel veilig zijn. Het recente, emotionele beeld maakt het gevaar groter lijken."
      },
      {
        domain: "business",
        icon: "💼",
        text: "Een manager overschat het risico van een strategie omdat ze zich één keer herinneren dat het misging, terwijl het 10 keer wel werkte. De ene mislukking is emotioneel memorabel."
      },
      {
        domain: "politics",
        icon: "🏛️",
        text: "Criminaliteit voelt alsof het toeneemt door veelvuldige nieuwsberichten, terwijl statistieken tonen dat het daalt. De beschikbaarheid van nieuwsverhalen beïnvloedt onze perceptie."
      }
    ],
    relatedPrinciples: ["confirmation-bias", "correlation-causation", "base-rate-fallacy"],
  },
  {
    id: "anchoring",
    title: "Anchoring Effect",
    difficulty: 1,
    emoji: "⚓",
    academicCategory: "Behavioral Economics",
    skillCategory: "Manipulatie Herkennen",
    definition: "De neiging om te veel gewicht te geven aan het eerste stukje informatie (het 'anker') dat je hoort. Dit eerste cijfer of feit beïnvloedt je daaropvolgende oordeel, zelfs als het anker irrelevant of willekeurig is.",
    abstractExample: "Als eerst waarde A wordt genoemd, worden daaropvolgende schattingen en oordelen onbewust naar A toe getrokken, zelfs als A niet relevant is. Het eerste cijfer zet een referentiepunt waar je moeilijk vanaf komt.",
    examples: [
      {
        domain: "business",
        icon: "💼",
        text: "Een huis staat online voor €500K. Je biedt €480K, denkend dat het redelijk is. Maar de verkoopprijs van €500K was het anker - misschien is het huis €400K waard en is je bod nog steeds te hoog."
      },
      {
        domain: "daily",
        icon: "🏠",
        text: "Een restaurant menu toont een wijn van €80, daarna eentje van €30. De €30 wijn lijkt redelijk door het anker van €80, ook al is €30 nog steeds veel voor wijn in dat restaurant."
      },
      {
        domain: "business",
        icon: "💼",
        text: "In een salarisonderhandeling noemt de werkgever eerst €40K. Jouw tegenvoorstel wordt waarschijnlijk richting €40K getrokken. Beter: jij noemt eerst een hoger cijfer als anker."
      }
    ],
    relatedPrinciples: ["confirmation-bias", "availability-heuristic", "status-quo-bias"],
  },
  {
    id: "post-hoc-ergo",
    title: "Post Hoc Ergo Propter Hoc",
    difficulty: 2,
    emoji: "⏱️",
    academicCategory: "Logica",
    skillCategory: "Causale Verbanden Begrijpen",
    definition: "Latijn voor 'Na dit, dus door dit'. De fout om aan te nemen dat omdat B na A gebeurde, A de oorzaak van B moet zijn. Tijdsvolgorde betekent niet automatisch causaliteit - er kunnen andere verklaringen zijn.",
    abstractExample: "A gebeurt. Daarna gebeurt B. Foutieve conclusie: A veroorzaakte B. Dit negeert andere mogelijkheden: toeval, een gemeenschappelijke oorzaak C, of dat B A veroorzaakte (omgekeerde causatie).",
    examples: [
      {
        domain: "daily",
        icon: "🏠",
        text: "Fout: 'Ik at sushi gisteren en vandaag ben ik ziek, dus de sushi was slecht.' - Maar misschien kreeg je een virus van iemand anders; de timing is toeval."
      },
      {
        domain: "politics",
        icon: "🏛️",
        text: "Fout: 'Na de verkiezing van deze premier daalde de werkloosheid. Deze premier heeft dat veroorzaakt.' - Maar economische trends hebben vaak andere, eerdere oorzaken."
      },
      {
        domain: "daily",
        icon: "🏠",
        text: "Fout: 'Ik droeg mijn gelukssokken en we wonnen de wedstrijd, dus mijn sokken brachten geluk.' - De overwinning heeft andere oorzaken; de sokken zijn toeval."
      }
    ],
    relatedPrinciples: ["correlation-causation", "affirming-consequent", "false-cause"],
  },
  {
    id: "false-dilemma",
    title: "False Dilemma (Vals Dilemma)",
    difficulty: 1,
    emoji: "🔀",
    academicCategory: "Retorica",
    skillCategory: "Manipulatie Herkennen",
    definition: "Een denkfout waarbij wordt gesuggereerd dat er slechts twee opties zijn (vaak twee extremen), terwijl er in werkelijkheid meer mogelijkheden bestaan. Ook wel zwart-wit denken genoemd.",
    abstractExample: "Stelling: Je bent voor X of tegen X. Fout: er kunnen vele tussenposities, alternatieven, of nuances zijn. De werkelijkheid is zelden binair.",
    examples: [
      {
        domain: "politics",
        icon: "🏛️",
        text: "Fout: 'Je bent óf voor vrijheid óf voor veiligheid.' - Maar je kunt een balans zoeken tussen beide, of specifieke vormen van elk willen."
      },
      {
        domain: "business",
        icon: "💼",
        text: "Fout: 'We moeten óf groeien óf krimpen.' - Maar je kunt ook stabiliseren, herstructureren, of gefocust groeien in bepaalde gebieden."
      },
      {
        domain: "daily",
        icon: "🏠",
        text: "Fout: 'Je bent óf met ons óf tegen ons.' - Maar je kunt neutraal zijn, gedeeltelijk akkoord gaan, of een derde perspectief hebben."
      }
    ],
    relatedPrinciples: ["straw-man-fallacy", "slippery-slope", "excluded-middle"],
    exercises: [{
      type: "multiple-choice",
      question: "Een manager zegt: 'Je bent óf volledig toegewijd aan dit bedrijf óf je bent hier niet op je plek.' Wat klopt er niet aan dit argument?",
      options: [
        "Niets, dit is een logisch argument",
        "Er worden slechts twee extremen gepresenteerd terwijl er tussenposities mogelijk zijn",
        "De manager is te bot in zijn communicatie",
        "Toewijding aan een bedrijf is onmeetbaar"
      ],
      correct: 1,
      feedback: "Precies! Dit is een vals dilemma. Er zijn talloze tussenposities: iemand kan toegewijd zijn maar ook grenzen stellen, werk-privébalans bewaken, of kritisch zijn op bepaalde beslissingen. De werkelijkheid is zelden 'alles of niets'."
    }],
    creativePrompt: "Herinner je een moment waarop iemand jou voor een vals dilemma plaatste. Welke opties werden weggelaten? Hoe zou je het argument nu weerleggen?",
    aiHelperPrompts: [
      "Welke tussenposities waren er in die situatie die niet werden benoemd?",
      "Hoe herken je een vals dilemma in een discussie?",
      "Wanneer kan het presenteren van twee opties wél legitiem zijn?"
    ]
  },
  {
    id: "modus-tollens",
    title: "Modus Tollens",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    definition: "Als A dan B. B is niet waar. Dus is A ook niet waar. De contrapositive van modus ponens: door het gevolg te ontkennen, ontken je de oorzaak.",
    abstractExample: "Gegeven P→Q en ¬Q, volgt ¬P. Als we weten dat B niet waar is en dat A altijd B veroorzaakt, kan A ook niet gelden.",
    examples: [
      { domain: "science", icon: "🔬", text: "Als de theorie klopt, moeten we röntgenstraling meten. We meten niks. Dus klopt de theorie niet." },
      { domain: "daily", icon: "🏠", text: "Als de winkel open is, brandt het licht. Het licht is uit. Dus is de winkel dicht." },
      { domain: "business", icon: "💼", text: "Als de campagne werkte, stijgen de verkopen. Ze zijn niet gestegen. Dus heeft de campagne niet gewerkt." }
    ],
    relatedPrinciples: ["modus-ponens", "falsification", "deduction-induction"],
    exercises: [{
      type: "multiple-choice",
      question: "Als het goed management is, stijgen de winsten. De winsten zijn dit kwartaal gedaald. Wat volgt logisch?",
      options: [
        "Het management is goed",
        "De winsten stijgen altijd uiteindelijk",
        "Het is geen goed management",
        "We kunnen niets concluderen zonder meer data"
      ],
      correct: 2,
      feedback: "Correct! Dit is modus tollens: Als P→Q en ¬Q, dan ¬P. Als goed management (P) leidt tot winstgroei (Q), en de winsten zijn gedaald (¬Q), dan volgt: het is geen goed management (¬P). Dit is een geldige logische gevolgtrekking."
    }],
    creativePrompt: "Bedenk een eigen voorbeeld van modus tollens: formuleer een 'als...dan...' regel, geef aan dat het gevolg niet optrad, en trek de logische conclusie.",
    aiHelperPrompts: [
      "Wat is het verschil tussen modus ponens en modus tollens?",
      "Kun je een modus tollens-redenering bedenken uit wetenschap of dagelijks leven?",
      "Waarom is modus tollens zo krachtig voor het weerleggen van hypotheses?"
    ]
  },
  {
    id: "necessary-sufficient",
    title: "Noodzakelijke vs. Voldoende Voorwaarden",
    difficulty: 2,
    emoji: "🔑",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    definition: "Een noodzakelijke voorwaarde moet aanwezig zijn voor X, maar garandeert X niet. Een voldoende voorwaarde garandeert X, maar X kan ook zonder haar optreden.",
    abstractExample: "Zuurstof is noodzakelijk voor vuur (geen zuurstof = geen vuur), maar niet voldoende (zuurstof ≠ automatisch vuur). Een lucifer aansteken is voldoende voor vuur, maar niet noodzakelijk.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Water is noodzakelijk om te leven, maar niet voldoende: je hebt ook voedsel, lucht, etc." },
      { domain: "business", icon: "💼", text: "Hard werken is noodzakelijk voor succes, maar niet voldoende – je hebt ook talent, netwerk en timing nodig." },
      { domain: "science", icon: "🔬", text: "Een hypothese hebben is noodzakelijk voor wetenschap, maar niet voldoende – je moet hem ook testen." }
    ],
    relatedPrinciples: ["modus-ponens", "deduction-induction", "correlation-causation"],
  },
  {
    id: "reductio-ad-absurdum",
    title: "Reductio ad Absurdum",
    difficulty: 2,
    emoji: "🎭",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    definition: "Een bewijs- of weerleggingsmethode waarbij je aanneemt dat het tegendeel waar is en vervolgens aantoont dat dit leidt tot een onmogelijke of absurde conclusie.",
    abstractExample: "Om P te bewijzen: stel ¬P. Leidt ¬P tot een contradictie (¬P → absurditeit), dan moet P wel waar zijn.",
    examples: [
      { domain: "science", icon: "🔬", text: "Bewijs dat √2 irrationeel is: stel dat √2 = p/q (volledig vereenvoudigd). Dan volgt p² = 2q², dus p is even → p = 2k → 4k² = 2q² → q is ook even. Maar dan is p/q niet vereenvoudigd – tegenspraak!" },
      { domain: "politics", icon: "🏛️", text: "Als iedereen het recht heeft om altijd te liegen, zou 'ik lieg nooit' ook een leugen kunnen zijn – wat zichzelf tegenspreekt." },
      { domain: "daily", icon: "🏠", text: "Als niemand verantwoordelijk is, is ook de regel 'niemand is verantwoordelijk' van niemand afkomstig – een tegenspraak." }
    ],
    relatedPrinciples: ["modus-tollens", "falsification", "deduction-induction"],
  },
  {
    id: "contrapositive",
    title: "Contrapositief",
    difficulty: 2,
    emoji: "↔️",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    definition: "'Als P dan Q' is logisch equivalent aan 'Als niet-Q dan niet-P'. De contrapositieve stelling heeft dezelfde waarheidswaarde als de originele.",
    abstractExample: "P→Q ≡ ¬Q→¬P. Je kunt een uitspraak bewijzen via de contrapositieve: in plaats van te bewijzen dat P tot Q leidt, bewijs je dat het ontbreken van Q het ontbreken van P impliceert.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'Als het een zoogdier is, dan is het warmbloedig' ≡ 'Als het niet warmbloedig is, is het geen zoogdier'." },
      { domain: "business", icon: "💼", text: "'Als het product aan de norm voldoet, mag het de markt op' ≡ 'Als het de markt niet op mag, voldoet het niet aan de norm'." },
      { domain: "science", icon: "🔬", text: "'Als experiment X slaagt, klopt theorie T' ≡ 'Als theorie T niet klopt, slaagt experiment X niet'." }
    ],
    relatedPrinciples: ["modus-tollens", "modus-ponens", "necessary-sufficient"],
  },
  {
    id: "denying-antecedent",
    title: "Denying the Antecedent (Denkfout)",
    difficulty: 2,
    emoji: "🚫",
    academicCategory: "Logica",
    skillCategory: "Manipulatie Herkennen",
    definition: "De fout om te concluderen dat als de voorwaarde (A) niet geldt, het gevolg (B) ook niet kan gelden. Maar B kan ook via andere wegen waar worden.",
    abstractExample: "Als P dan Q. Niet P. Foutieve conclusie: dus niet Q. Dit is ongeldig – Q kan via een andere weg optreden.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Fout: 'Als het regent, is de straat nat. Het regent niet. Dus is de straat niet nat.' – Iemand kan ook water over de straat gegoten hebben." },
      { domain: "business", icon: "💼", text: "Fout: 'Als we adverteren stijgen de verkopen. We adverteren niet. Dus stijgen de verkopen niet.' – Er zijn andere manieren om verkopen te stimuleren." },
      { domain: "politics", icon: "🏛️", text: "Fout: 'Als er een crisis is, stijgen de belastingen. Er is geen crisis. Dus stijgen de belastingen niet.' – Er zijn andere redenen voor belastingverhogingen." }
    ],
    relatedPrinciples: ["affirming-consequent", "modus-tollens", "necessary-sufficient"],
  },
  // ── EPISTEMOLOGIE ────────────────────────────────────────────
  {
    id: "occams-razor",
    title: "Occam's Razor (Spaarzaamheidsbeginsel)",
    difficulty: 1,
    emoji: "✂️",
    academicCategory: "Epistemologie",
    skillCategory: "Patronen Zien",
    definition: "De eenvoudigste verklaring die de feiten verklaart, is bij voorkeur de juiste. Vermenigvuldig geen verklarende entiteiten meer dan noodzakelijk.",
    abstractExample: "Als verklaring A alle feiten verklaart met 2 aannames en verklaring B hetzelfde doet met 5 aannames, is A bij voorkeur juist – tenzij er goede redenen zijn voor die extra aannames.",
    examples: [
      { domain: "daily", icon: "🏠", text: "De auto start niet. Occam: controleer eerst de accu. Niet: ga meteen uit van een complex elektrisch defect." },
      { domain: "science", icon: "🔬", text: "Hemellichamen bewegen in ellipsen. De eenvoudigste verklaring (zwaartekracht) wint van complexe epicykels." },
      { domain: "business", icon: "💼", text: "Verkoop daalt na productwijziging. Occam: de wijziging is waarschijnlijk de oorzaak – niet een samenloop van macro-economie, seizoen én concurrentie." }
    ],
    relatedPrinciples: ["falsification", "burden-of-proof", "correlation-causation"],
  },
  {
    id: "falsification",
    title: "Falsificeerbaarheid (Popper)",
    difficulty: 2,
    emoji: "🧪",
    academicCategory: "Epistemologie",
    skillCategory: "Causale Verbanden Begrijpen",
    definition: "Een wetenschappelijke theorie moet in principe weerlegbaar zijn door observaties. Als geen enkele mogelijke waarneming de theorie kan weerleggen, is het geen wetenschap maar onweerlegbaar geloof.",
    abstractExample: "Een goede theorie T maakt voorspelling P die getest kan worden. Als P niet uitkomt, is T weerlegd. Een theorie die elke uitkomst 'verklaard', is niet falsifieerbaar.",
    examples: [
      { domain: "science", icon: "🔬", text: "Einstein: 'Als zwaartekracht licht buigt, zie je sterren verschoven tijdens een zonsverduistering.' Dit werd in 1919 getest – en klopte. Falsifieerbaar en bevestigd." },
      { domain: "daily", icon: "🏠", text: "Onweerlegbaar: 'De goden doen wat ze willen – succes én falen zijn hun wil.' Geen observatie kan dit weerleggen, dus het is geen wetenschappelijke claim." },
      { domain: "business", icon: "💼", text: "Goed: 'Onze nieuwe marketing verhoogt conversie met 10%.' Testbaar en dus falsifieerbaar. Slecht: 'Ons product is voor altijd revolutionair.' – niet toetsbaar." }
    ],
    relatedPrinciples: ["scientific-method", "modus-tollens", "deduction-induction"],
  },
  {
    id: "burden-of-proof",
    title: "Bewijslast (Burden of Proof)",
    difficulty: 1,
    emoji: "⚖️",
    academicCategory: "Epistemologie",
    skillCategory: "Beter Argumenteren",
    definition: "Wie een claim maakt, draagt de bewijslast. Je hoeft iets niet te weerleggen alleen omdat iemand het beweert – de bewering zelf moet onderbouwd worden.",
    abstractExample: "Als iemand P beweert, is het aan hen om P te onderbouwen. Het is niet aan de ontvanger om ¬P te bewijzen. Afwezigheid van bewijs voor ¬P is geen bewijs voor P.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Iemand zegt: 'Thee met honing geneest verkoudheid.' De bewijslast ligt bij hen, niet bij jou om het tegendeel te bewijzen." },
      { domain: "business", icon: "💼", text: "'Ons product geeft u energie!' – het bedrijf moet dit aantonen. Jij hoeft niet te bewijzen dat het niet werkt." },
      { domain: "politics", icon: "🏛️", text: "'De overheid verspilt al ons belastinggeld.' De spreker moet dit aantonen met cijfers, niet de luisteraar het tegendeel." }
    ],
    relatedPrinciples: ["occams-razor", "falsification", "ad-hominem"],
  },
  {
    id: "black-swan",
    title: "Zwarte Zwaan (Black Swan)",
    difficulty: 2,
    emoji: "🦢",
    academicCategory: "Epistemologie",
    skillCategory: "Beslissingen Nemen",
    definition: "Een onverwachte gebeurtenis met enorme impact die achteraf 'voorspelbaar' lijkt. Zwarte zwaan-theorie (Taleb) stelt dat zulke zeldzame maar impactvolle uitschieters de geschiedenis bepalen.",
    abstractExample: "Een zwarte zwaan is: 1) een uitbijter buiten normale verwachtingen, 2) met enorme gevolgen, 3) die achteraf geconstrueerd verklaarbaar lijkt. Eens leefde men in de veronderstelling dat alle zwanen wit zijn – tot men Australië ontdekte.",
    examples: [
      { domain: "business", icon: "💼", text: "De opkomst van internet, 9/11 of de financiële crisis van 2008 waren onverwacht maar veroverden de wereld compleet." },
      { domain: "science", icon: "🔬", text: "De ontdekking van penicilline was een zwarte zwaan: een bacteriekweek werd 'verpest' door schimmel – en dat redde miljoenen levens." },
      { domain: "politics", icon: "🏛️", text: "De val van de Berlijnse Muur in 1989 was voor nagenoeg iedereen onverwacht – maar had enorme gevolgen." }
    ],
    relatedPrinciples: ["falsification", "base-rate-fallacy", "availability-heuristic"],
  },
  {
    id: "base-rate-fallacy",
    title: "Base Rate Fallacy",
    difficulty: 2,
    emoji: "📉",
    academicCategory: "Epistemologie",
    skillCategory: "Causale Verbanden Begrijpen",
    definition: "De neiging om basispercentages (hoe vaak iets voorkomt in de populatie) te negeren en teveel gewicht te geven aan specifieke informatie over een geval.",
    abstractExample: "Als een test 99% accuraat is maar de ziekte slechts 0,1% van de bevolking treft, is een positieve test nog steeds vaker een vals-positief dan een echte ziekte.",
    examples: [
      { domain: "science", icon: "🔬", text: "Een drugstest is 99% accuraat. Slechts 1% van atleten gebruikt drugs. Als je positief test, is de kans ~50% dat het vals-positief is. Het basispercentage (1%) matcht." },
      { domain: "daily", icon: "🏠", text: "Je hoort dat iemand je beschrijft als 'stil en nauwkeurig'. Je denkt: bibliotheekmedewerker. Maar er zijn véél meer boekhoudkundige medewerkers dan bibliotheekmedewerkers." },
      { domain: "business", icon: "💼", text: "95% van de startups mislukt. Dat je een gepassioneerde ondernemer bent, verandert het basispercentage niet." }
    ],
    relatedPrinciples: ["availability-heuristic", "representativeness-heuristic", "correlation-causation"],
  },
  {
    id: "scientific-method",
    title: "Wetenschappelijke Methode",
    difficulty: 2,
    emoji: "🔭",
    academicCategory: "Epistemologie",
    skillCategory: "Causale Verbanden Begrijpen",
    definition: "Een systematische aanpak voor kennisverwerving: observeren, hypothese formuleren, voorspellingen doen, testen, resultaten analyseren en conclusies herzien op basis van bewijs.",
    abstractExample: "1) Observeer fenomeen X. 2) Formuleer hypothese H die X verklaart. 3) Leid testbare voorspelling P af. 4) Voer experiment uit. 5) Vergelijk resultaat met P. 6) Verwerp of verfijn H.",
    examples: [
      { domain: "science", icon: "🔬", text: "Semmelweis observeerde dat minder vrouwen stierven als artsen handen wasten. Hypothese: microben veroorzaken infecties. Test: handenwassen invoeren. Resultaat: sterftecijfer daalde drastisch." },
      { domain: "business", icon: "💼", text: "A/B-testen is de wetenschappelijke methode in actie: hypothese (versie B converteert beter), experiment, meting, conclusie." },
      { domain: "daily", icon: "🏠", text: "Je slaapt slecht. Hypothese: koffie 's middags is de oorzaak. Test: 2 weken geen koffie na 14u. Observeer slaapkwaliteit. Conclusie baseren op resultaat." }
    ],
    relatedPrinciples: ["falsification", "correlation-causation", "occams-razor"],
  },
  {
    id: "epistemic-humility",
    title: "Epistemische Bescheidenheid",
    difficulty: 2,
    emoji: "🙏",
    academicCategory: "Epistemologie",
    skillCategory: "Beslissingen Nemen",
    definition: "De erkenning dat onze kennis altijd beperkt, feilbaar en gekleurd is door onze positie, cultuur en ervaring. Goede denkers zijn bereid hun overtuigingen te herzien bij nieuwe informatie.",
    abstractExample: "We weten wat we weten, maar er is altijd meer we niet weten dan wat we wel weten. Epistemische bescheidenheid = bewust zijn van de grenzen van je eigen kennis.",
    examples: [
      { domain: "science", icon: "🔬", text: "Newton's mechanica was revolutionair en 'zeker', totdat Einstein aantoonde dat het slechts een benadering is bij lage snelheden." },
      { domain: "politics", icon: "🏛️", text: "Historisch 'zekere' opvattingen over ras, gender of religie zijn herhaaldelijk herzien naarmate de wereld meer leerde." },
      { domain: "daily", icon: "🏠", text: "Een goede arts zegt: 'Op basis van de huidige kennis adviseer ik X. Als nieuwe studies iets anders wijzen, herzien we het.' Dat is epistemische bescheidenheid." }
    ],
    relatedPrinciples: ["falsification", "confirmation-bias", "dunning-kruger"],
  },
  // ── BEHAVIORAL ECONOMICS ─────────────────────────────────────
  {
    id: "loss-aversion",
    title: "Verliesaversie (Loss Aversion)",
    difficulty: 1,
    emoji: "😨",
    academicCategory: "Behavioral Economics",
    skillCategory: "Beslissingen Nemen",
    definition: "Verliezen wegen psychologisch zwaarder dan equivalente winsten. Het verlies van €100 voelt erger dan de vreugde van €100 winnen – doorgaans zo'n 2x zo sterk.",
    abstractExample: "Nutsfunctie is asymmetrisch: de pijn van verlies X is sterker dan de vreugde van winst X. Mensen gaan irrationele risico's aan om verliezen te vermijden.",
    examples: [
      { domain: "business", icon: "💼", text: "Investeerders houden verlieslatende aandelen te lang vast, omdat verkopen het verlies 'officieel' maakt. Ze wachten tot het 'herstelt'." },
      { domain: "daily", icon: "🏠", text: "Je koopt een abonnement niet op vanwege de kans op mislukking, ook al zou de verwachte waarde positief zijn." },
      { domain: "politics", icon: "🏛️", text: "'We kunnen deze rechten niet verliezen!' mobiliseert meer kiezers dan 'We kunnen nieuwe rechten winnen!'" }
    ],
    relatedPrinciples: ["sunk-cost-fallacy", "status-quo-bias", "framing-effect"],
  },
  {
    id: "status-quo-bias",
    title: "Status Quo Bias",
    difficulty: 1,
    emoji: "🛑",
    academicCategory: "Behavioral Economics",
    skillCategory: "Beslissingen Nemen",
    definition: "De voorkeur voor de huidige situatie boven verandering, zelfs als verandering objectief beter zou zijn. De status quo fungeert als psychologisch anker.",
    abstractExample: "Als standaardoptie A is, kiezen de meeste mensen A – ook al is B beter. Dit is niet rationeel maar psychologisch: verandering vereist moeite en riskeert verlies.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Mensen blijven bij dezelfde energieleverancier ook al is overstappen goedkoper – omschakelen kost moeite." },
      { domain: "business", icon: "💼", text: "Bedrijven houden verouderde systemen omdat overstappen 'te veel gedoe' is, ook al zijn de nieuwe systemen aantoonbaar beter." },
      { domain: "politics", icon: "🏛️", text: "Kiezers stemmen op de zittende partij zelfs als een nieuw alternatief objectief beter lijkt. 'Liever de duivel die je kent.'" }
    ],
    relatedPrinciples: ["loss-aversion", "anchoring", "sunk-cost-fallacy"],
    exercises: [{
      type: "multiple-choice",
      question: "Erik weet dat een ander energiebedrijf hem €300 per jaar bespaart. Toch stapt hij niet over. 'Het is te veel gedoe', zegt hij. Welk principe speelt hier?",
      options: [
        "Opportunity cost",
        "Sunk cost fallacy",
        "Status quo bias",
        "Confirmation bias"
      ],
      correct: 2,
      feedback: "Juist! Status quo bias maakt dat mensen de huidige situatie verkiezen boven verandering, ook als de verandering objectief beter is. Het 'gedoe' wordt zwaarder gewogen dan de voordelen van overstappen — zelfs als die voordelen aanzienlijk zijn."
    }],
    creativePrompt: "In welk gebied van jouw leven zie jij status quo bias bij jezelf? Welke verandering heb je uitgesteld die eigenlijk beter voor je zou zijn?",
    aiHelperPrompts: [
      "Welke drempels houden jou tegen om veranderingen door te voeren die je eigenlijk wil?",
      "Hoe kun je status quo bias bewust tegengaan bij beslissingen?",
      "Is vasthouden aan de status quo altijd irrationeel, of zijn er situaties waar het zinvol is?"
    ]
  },
  {
    id: "framing-effect",
    title: "Framing Effect",
    difficulty: 1,
    emoji: "🖼️",
    academicCategory: "Behavioral Economics",
    skillCategory: "Manipulatie Herkennen",
    definition: "Dezelfde informatie leidt tot andere beslissingen afhankelijk van hoe die gepresenteerd wordt. '90% overlevingskans' en '10% sterftekans' zijn identiek maar leiden tot verschillende keuzes.",
    abstractExample: "De weergave (frame) van informatie beïnvloedt de interpretatie: positieve frames ('winst van X') versus negatieve frames ('verlies van Y') activeren verschillende psychologische reacties.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'95% vetvrij' klinkt gezonder dan '5% vet', maar het is precies hetzelfde product." },
      { domain: "business", icon: "💼", text: "'Dit project heeft 40% kans op succes' klinkt beter dan '60% kans op mislukking'." },
      { domain: "politics", icon: "🏛️", text: "'Belasting op overwinst' klinkt rechtvaardig; 'winststraf voor succesvolle bedrijven' klinkt problematisch. Zelfde beleid." }
    ],
    relatedPrinciples: ["anchoring", "loss-aversion", "availability-heuristic"],
  },
  {
    id: "mental-accounting",
    title: "Mental Accounting",
    difficulty: 2,
    emoji: "🗂️",
    academicCategory: "Behavioral Economics",
    skillCategory: "Beslissingen Nemen",
    definition: "De neiging om geld in mentale 'potjes' te verdelen op basis van herkomst of bestemming, en daarin anders mee te omgaan dan rationeel verdedigbaar is. Geld is fungibel – €1 is €1, ongeacht waarvandaan.",
    abstractExample: "Je vindt €100 en geeft het meteen uit (het is 'gratis geld'). Maar hetzelfde geld dat je had gespaard, geef je bewuster uit. Rationeel zijn beide €100 gelijk in waarde.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Je krijgt een onverwachte belastingteruggave van €500 en geeft die uit aan een luxeaankoop. Maar je spaarsaldo met €500 had je nooit zo besteed." },
      { domain: "business", icon: "💼", text: "Een bedrijf spendeert het marketingbudget royaal op in december 'anders valt het vrij', ook al zijn er betere investeringen." },
      { domain: "daily", icon: "🏠", text: "Casinochips voelen als minder echt geld – je neemt meer risico dan met contant geld." }
    ],
    relatedPrinciples: ["sunk-cost-fallacy", "loss-aversion", "framing-effect"],
  },
  {
    id: "hyperbolic-discounting",
    title: "Hyperbolisch Verdisconteren",
    difficulty: 3,
    emoji: "⏳",
    academicCategory: "Behavioral Economics",
    skillCategory: "Beslissingen Nemen",
    definition: "De neiging om onmiddellijke beloningen veel hoger te waarderen dan toekomstige beloningen, op een manier die inconsistent is met rationele discontering. Morgen voelt anders dan nu.",
    abstractExample: "Je kiest liever €100 nu boven €110 in een week, maar kiest wel voor €110 over een jaar boven €100 over 51 weken. Dezelfde tijdspanne, totaal andere keuze. Dit heet tijdsinconsistentie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Je weet dat je morgen vroeg op moet maar blijft nog even Netflix kijken. Je toekomstige zelf krijgt de rekening – je huidige zelf betaalt er niet voor." },
      { domain: "business", icon: "💼", text: "Mensen kiezen liever voor een kleine directe beloning (snack, feature) dan een grote toekomstige beloning (gezondheid, betere software)." },
      { domain: "daily", icon: "🏠", text: "Spaargedrag: 'Ik begin maandag te sparen' – maar maandag schuif je het opnieuw naar maandag. Uitstelgedrag is hyperbolisch verdisconteren in actie." }
    ],
    relatedPrinciples: ["status-quo-bias", "loss-aversion", "opportunity-cost"],
  },
  {
    id: "diminishing-returns",
    title: "Afnemende Meeropbrengsten",
    difficulty: 1,
    emoji: "📈",
    academicCategory: "Behavioral Economics",
    skillCategory: "Beslissingen Nemen",
    definition: "Elk extra eenheid input levert minder extra output op dan de vorige, na een bepaald punt. De marginale waarde neemt af naarmate je meer toevoegt.",
    abstractExample: "Functie van input X naar output Y: de afgeleide dY/dX neemt af voorbij een optimaal punt. De eerste eenheid X levert de meeste Y op, elke volgende eenheid minder.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Het eerste kopje koffie maakt je wakker en scherp. Het tweede helpt nog een beetje. Het zevende maakt je trillerig en moe." },
      { domain: "business", icon: "💼", text: "Een team van 5 ontwikkelaars is productiever dan 1. Maar 50 ontwikkelaars is niet 10x productiever – communicatie en coördinatie kosten steeds meer." },
      { domain: "science", icon: "🔬", text: "Kunstmest verbetert gewasopbrengst, maar na een optimale hoeveelheid leidt meer toe tot vervuiling en zelfs opbrengstverlies." }
    ],
    relatedPrinciples: ["ceteris-paribus", "opportunity-cost", "pareto-efficiency"],
  },
  {
    id: "ceteris-paribus",
    title: "Ceteris Paribus (Al het Andere Gelijk)",
    difficulty: 2,
    emoji: "🧮",
    academicCategory: "Behavioral Economics",
    skillCategory: "Causale Verbanden Begrijpen",
    definition: "Een Latijns begrip dat betekent 'al het andere gelijk'. In analyses isoleer je de invloed van één variabele door alle andere factoren constant te houden.",
    abstractExample: "Als je de invloed van X op Y wilt kennen, houd je alle andere factoren Z1, Z2, Z3 constant. Alleen dan meet je de 'zuivere' relatie tussen X en Y.",
    examples: [
      { domain: "science", icon: "🔬", text: "Als de prijs van een product stijgt (ceteris paribus), daalt de vraag. Maar als tegelijkertijd de inkomens stijgen, geldt die regel mogelijk niet." },
      { domain: "business", icon: "💼", text: "We veranderen de knopkleur op de website. Ceteris paribus (alles hetzelfde), meten we of conversie stijgt. Maar als ook het seizoen verandert, weet je het niet." },
      { domain: "science", icon: "🔬", text: "In medisch onderzoek: een controlegroep zorgt ervoor dat ceteris paribus geldt – alles is hetzelfde behalve de behandeling." }
    ],
    relatedPrinciples: ["scientific-method", "correlation-causation", "diminishing-returns"],
  },
  {
    id: "cause-reason",
    title: "Oorzaak vs. Reden",
    difficulty: 2,
    emoji: "🎯",
    academicCategory: "Epistemologie",
    skillCategory: "Causale Verbanden Begrijpen",
    definition: "Een oorzaak is een mechanistische, causale factor die een gevolg voortbrengt. Een reden is een motivatie of rechtvaardiging voor een handeling. Ze zijn niet hetzelfde.",
    abstractExample: "De fysieke oorzaak van een brand is hitte + brandstof + zuurstof. De reden waarom iemand brand stichtte is wraak. Oorzaak = mechanisme; Reden = motivatie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Oorzaak van de botsing: gladde weg. Reden waarom de bestuurder reed: hij moest naar het ziekenhuis. Beide zijn relevant maar niet hetzelfde." },
      { domain: "business", icon: "💼", text: "Oorzaak van het faillissement: cashflowprobleem. Reden waarom het bedrijf die keuzes maakte: overmoedige expansie. Oorzaak is technisch, reden is intentioneel." },
      { domain: "politics", icon: "🏛️", text: "Oorzaak van een oorlog: militaire acties. Reden: geopolitieke belangen. Historici analyseren beide lagen." }
    ],
    relatedPrinciples: ["correlation-causation", "necessary-sufficient", "post-hoc-ergo"],
  },

  // ── EXTRA PRINCIPES – BATCH 2 (principes 29-57) ──
  // ── SPELTHEORIE ──────────────────────────────────────────────
  {
    id: "nash-equilibrium",
    title: "Nash-Evenwicht",
    difficulty: 3,
    emoji: "🎯",
    academicCategory: "Speltheorie",
    skillCategory: "Strategisch Denken",
    definition: "Een situatie waarbij geen enkele speler zijn uitkomst kan verbeteren door eenzijdig van strategie te wisselen, gegeven de strategieën van de andere spelers.",
    abstractExample: "Stel iedere speler kiest zijn optimale strategie gegeven de keuzes van de anderen. Als niemand een prikkel heeft om af te wijken, is er een Nash-evenwicht – ook al is het voor allen suboptimaal.",
    examples: [
      { domain: "business", icon: "💼", text: "Twee benzinestations tegenover elkaar passen hun prijs voortdurend aan. Ze bereiken een evenwicht: beiden kunnen de prijs niet verhogen zonder klanten te verliezen." },
      { domain: "politics", icon: "🏛️", text: "De wapenwedloop: beide landen bewapenen zich maximaal. Eenzijdig ontwapenen is nadelig, dus blijven beide bewapend – een stabiel maar suboptimaal evenwicht." },
      { domain: "daily", icon: "🏠", text: "In files: rijden over de vluchtstrook helpt het individu maar verergert de file. Als iedereen dezelfde redenering volgt, ontstaat een chaotisch maar 'stabiel' evenwicht." }
    ],
    relatedPrinciples: ["prisoners-dilemma", "dominant-strategy", "pareto-efficiency"],
  },
  {
    id: "zero-sum-games",
    title: "Zero-Sum vs. Niet-Nulsom Spelen",
    difficulty: 2,
    emoji: "🏆",
    academicCategory: "Speltheorie",
    skillCategory: "Strategisch Denken",
    definition: "In een nulsomspel is de winst van de ene speler precies het verlies van de ander (totaal = 0). In niet-nulsomspelen kunnen alle partijen winnen of verliezen.",
    abstractExample: "Nulsom: jij wint €100 = ik verlies €100. Niet-nulsom: handel waarbij beide partijen meer welvaart creëren, of samenwerking waarbij 1+1=3.",
    examples: [
      { domain: "business", icon: "💼", text: "Aanbestedingen zijn vaak nulsom: de winnaar pakt het contract, de rest verliest. Maar samenwerking op standaarden is niet-nulsom: de hele sector wint." },
      { domain: "politics", icon: "🏛️", text: "Territoriale conflicten zijn vaak nulsom: land dat jij hebt, heeft de ander niet. Handelsakkoorden zijn niet-nulsom: beide economieën groeien." },
      { domain: "daily", icon: "🏠", text: "Sport is nulsom: één winnaar, één verliezer. Maar een vriendelijke samenwerking om een klus te klaren is niet-nulsom: beiden bereiken meer." }
    ],
    relatedPrinciples: ["prisoners-dilemma", "nash-equilibrium", "tragedy-commons"],
  },
  {
    id: "tragedy-commons",
    title: "Tragedie van de Meent (Tragedy of the Commons)",
    difficulty: 2,
    emoji: "🌿",
    academicCategory: "Speltheorie",
    skillCategory: "Strategisch Denken",
    definition: "Wanneer een gedeeld, begrensd hulpbron door individuen wordt uitgebuit op basis van eigenbelang, resulteert dit in de uitputting van dat hulpbron – wat schadelijk is voor alle gebruikers.",
    abstractExample: "Elk individu profiteert maximaal van de gemeenschappelijke bron R. Maar als iedereen hetzelfde doet, raakt R uitgeput. Rationeel individueel handelen leidt tot collectief verlies.",
    examples: [
      { domain: "politics", icon: "🏛️", text: "Visserij in internationale wateren: elk land vist zoveel mogelijk, totdat de vispopulatie instort. Rationeel individueel, rampzalig collectief." },
      { domain: "daily", icon: "🏠", text: "Verkeerscongestie: iedereen kiest de auto want het is handig. Maar als iedereen dit doet, staat iedereen in de file." },
      { domain: "business", icon: "💼", text: "Overexploitatie van het internet: spam, bots en clickfraude beschadigen de gedeelde bron (vertrouwen in online communicatie)." }
    ],
    relatedPrinciples: ["prisoners-dilemma", "nash-equilibrium", "zero-sum-games"],
  },
  {
    id: "tit-for-tat",
    title: "Tit-for-Tat Strategie",
    difficulty: 2,
    emoji: "🤝",
    academicCategory: "Speltheorie",
    skillCategory: "Strategisch Denken",
    definition: "Een coöperatieve strategie: begin met samenwerken, daarna doe je wat de ander de vorige ronde deed. Beloont samenwerking, bestraft verraad direct, maar vergeet snel.",
    abstractExample: "Ronde 1: jij werkt samen. Ronde n+1: jij doet wat de ander in ronde n deed. Resultaat: stabiele samenwerking als de ander ook samenwerkt; directe vergeldging bij verraad.",
    examples: [
      { domain: "business", icon: "💼", text: "Leverancier-afnemer relatie: je betaalt altijd op tijd zolang zij goed leveren. Als zij een keer slecht leveren, pas je je aan. Snel vergeven bij herstel." },
      { domain: "politics", icon: "🏛️", text: "Diplomatie: een land reageert op sancties met tegensancties, maar staat open voor normalisering als de ander de-escaleert." },
      { domain: "daily", icon: "🏠", text: "Buurrelaties: jij helpt je buur als hij jou heeft geholpen. Als hij je pest, wees je minder behulpzaam. Maar zodra hij normaal doet, ook jij weer." }
    ],
    relatedPrinciples: ["prisoners-dilemma", "nash-equilibrium", "zero-sum-games"],
  },
  {
    id: "dominant-strategy",
    title: "Dominante Strategie",
    difficulty: 2,
    emoji: "♟️",
    academicCategory: "Speltheorie",
    skillCategory: "Strategisch Denken",
    definition: "Een strategie die voor een speler altijd de beste keuze is, ongeacht wat de andere spelers doen.",
    abstractExample: "Strategie D domineert strategie C als D voor elke mogelijke tegenstrategie een betere of gelijke uitkomst geeft. Een rationele speler kiest altijd zijn dominante strategie.",
    examples: [
      { domain: "business", icon: "💼", text: "In een veiling is ophogen met €1 altijd de dominante strategie als je weet dat je het wil winnen en het budget het toelaat." },
      { domain: "politics", icon: "🏛️", text: "In het prisoner's dilemma is 'verraden' de dominante strategie: ongeacht wat de ander doet, ben je beter af met verraden." },
      { domain: "daily", icon: "🏠", text: "Bij rotsteen-papier-schaar bestaat geen dominante strategie: elke keuze verliest van een andere. Zonder dominantie moet je randomiseren." }
    ],
    relatedPrinciples: ["nash-equilibrium", "prisoners-dilemma", "zero-sum-games"],
  },
  {
    id: "pareto-efficiency",
    title: "Pareto-Efficiëntie",
    difficulty: 2,
    emoji: "🎪",
    academicCategory: "Speltheorie",
    skillCategory: "Strategisch Denken",
    definition: "Een situatie is Pareto-efficiënt als niemand beter af kan worden zonder dat iemand anders slechter af wordt. Pareto-verbeteringen zijn kansen om allen beter te maken.",
    abstractExample: "Toestand A is Pareto-superieur aan B als minstens één persoon in A beter af is en niemand slechter. A is Pareto-optimaal als er geen B bestaat die A Pareto-domineert.",
    examples: [
      { domain: "business", icon: "💼", text: "Een handel waarbij koper meer waardeert wat hij koopt dan de prijs die hij betaalt, en de verkoper meer de prijs waardeert dan het product: Pareto-verbetering." },
      { domain: "politics", icon: "🏛️", text: "Een beleidsmaatregel die alle burgers beter af maakt zonder niemand te benadelen is een Pareto-verbetering. Zulke maatregelen zijn politiek makkelijk te rechtvaardigen." },
      { domain: "daily", icon: "🏠", text: "Twee vrienden ruilen taken: jij kookt (wat je leuk vindt), hij doet de afwas (wat hij minder erg vindt). Beiden profiteren." }
    ],
    relatedPrinciples: ["nash-equilibrium", "zero-sum-games", "diminishing-returns"],
  },
  {
    id: "schelling-point",
    title: "Schelling Point (Focuspunt)",
    difficulty: 3,
    emoji: "📍",
    academicCategory: "Speltheorie",
    skillCategory: "Strategisch Denken",
    definition: "Een oplossing die mensen kiezen bij gebrek aan communicatie, puur op basis van gezamenlijke verwachting of salience. Mensen convergeren naar het meest 'voor de hand liggende' punt.",
    abstractExample: "Als twee mensen onafhankelijk een afspraakplaats moeten kiezen in een stad (zonder communicatie), kiezen ze waarschijnlijk hetzelfde markante punt – dat is het Schelling point.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Je afspreekt met iemand in New York zonder exact adres. De meeste mensen kiezen Grand Central Station of Times Square – herkenbaar, centraal, uniek." },
      { domain: "business", icon: "💼", text: "Bij onderhandelingen convergeert men snel naar ronde getallen (€100, €500, €1000) zelfs zonder expliciete afspraken." },
      { domain: "politics", icon: "🏛️", text: "Wapenstilstanden houden vaak halt bij geografische markers (rivieren, wegen) die voor beide partijen salient zijn." }
    ],
    relatedPrinciples: ["nash-equilibrium", "tit-for-tat", "zero-sum-games"],
  },
  // ── COGNITIEVE BIASES ────────────────────────────────────────
  {
    id: "dunning-kruger",
    title: "Dunning-Kruger Effect",
    difficulty: 2,
    emoji: "🧠",
    academicCategory: "Epistemologie",
    skillCategory: "Manipulatie Herkennen",
    definition: "Mensen met weinig kennis overschatten hun competentie, terwijl experts hun vaardigheid juist onderschatten. Incompetentie verhindert de herkenning van incompetentie.",
    abstractExample: "Hoe minder je weet over domein X, hoe minder je beseft hoeveel je niet weet. Je confidence is omgekeerd aan competentie bij lage kennisniveaus.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Na één YouTube-tutorial over beleggen voelt iemand zich expert. Na jaren studie realiseert men hoeveel ze nog niet weten." },
      { domain: "business", icon: "💼", text: "Een junior medewerker is zelfverzekerd in een vergadering. Een senior expert zegt voorzichtig: 'Ik weet het niet zeker, maar...'." },
      { domain: "politics", icon: "🏛️", text: "Een politicus zonder economische achtergrond kondigt zelfverzekerd complexe economische maatregelen aan; economen zijn voorzichtiger." }
    ],
    relatedPrinciples: ["confirmation-bias", "epistemic-humility", "availability-heuristic"],
  },
  {
    id: "representativeness-heuristic",
    title: "Representativiteitsheuristiek",
    difficulty: 2,
    emoji: "🎭",
    academicCategory: "Epistemologie",
    skillCategory: "Manipulatie Herkennen",
    definition: "De neiging om de kans op iets in te schatten op basis van hoe goed het past bij een prototype of stereotype, terwijl statistisch bewijs (basispercentages) wordt genegeerd.",
    abstractExample: "Als iemand aan een stereotiep patroon voldoet, schatten we de kans dat ze bij die categorie horen te hoog in, ongeacht de werkelijke prevalentie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Tom is stil, leest veel, en houdt van logica. Is hij een bibliotheekmedewerker of een verkoopmedewerker? We denken bibliotheekmede-werker – maar verkopers zijn veel talrijker." },
      { domain: "business", icon: "💼", text: "Een startup heeft een hippe kantoorinrichting en jonge medewerkers. We denken succesvol tech-bedrijf – maar de financiën kunnen desastreus zijn." },
      { domain: "politics", icon: "🏛️", text: "Iemand die netjes gekleed is en zelfverzekerd spreekt lijkt betrouwbaar – maar kleding en stemgeluid zijn geen indicatoren van integriteit." }
    ],
    relatedPrinciples: ["availability-heuristic", "base-rate-fallacy", "confirmation-bias"],
  },
  {
    id: "cognitive-dissonance",
    title: "Cognitieve Dissonantie",
    difficulty: 2,
    emoji: "⚡",
    academicCategory: "Epistemologie",
    skillCategory: "Beslissingen Nemen",
    definition: "De ongemakkelijkheid die ontstaat wanneer twee tegenstrijdige overtuigingen, waarden of gedragingen tegelijk bestaan. Mensen zijn gemotiveerd om dit ongemak te verminderen – vaak door de realiteit te verdraaien.",
    abstractExample: "Als overtuiging A en handeling B tegenstrijdig zijn, ontstaat dissonantie. Oplossingen: A veranderen, B veranderen, of B rationaliseren zodat het toch past bij A.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Je rookt maar weet dat het ongezond is. Dissonantie-reductie: 'Ik ken mensen die rookten en 90 werden', of 'ik stop later'." },
      { domain: "business", icon: "💼", text: "Je koopt een duur product maar twijfelt achteraf. Je gaat dan extra positieve informatie zoeken om je keuze te rechtvaardigen (post-purchase rationalisatie)." },
      { domain: "politics", icon: "🏛️", text: "Een moreel overtuigd persoon steunt een partij die iets doet dat hij normaal afkeurt. Oplossing: het goedpraten of bagatelliseren." }
    ],
    relatedPrinciples: ["confirmation-bias", "framing-effect", "sunk-cost-fallacy"],
  },
  {
    id: "hindsight-bias",
    title: "Hindsight Bias (Terugkijkbias)",
    difficulty: 1,
    emoji: "🔭",
    academicCategory: "Epistemologie",
    skillCategory: "Beslissingen Nemen",
    definition: "Na een gebeurtenis geloven mensen dat ze die hadden kunnen voorspellen. 'Ik wist het eigenlijk wel' – terwijl ze het niet wisten voordat het gebeurde.",
    abstractExample: "Na afloop van X is de kennis van X ingebakken in ons geheugen en lijkt het evident. Maar vooraf was er onzekerheid die we achteraf vergeten.",
    examples: [
      { domain: "business", icon: "💼", text: "Na de dotcom-crash van 2000: 'Ik wist dat het een zeepbel was.' Maar voor de crash hadden velen er vol in geïnvesteerd." },
      { domain: "politics", icon: "🏛️", text: "Na een verkiezingsuitslag: 'Ik had het kunnen voorspellen.' Maar peilingen wezen vaak anders." },
      { domain: "daily", icon: "🏠", text: "Na een ruzie: 'Ik wist altijd al dat die vriendschap niet zou duren.' Maar destijds dacht je er anders over." }
    ],
    relatedPrinciples: ["confirmation-bias", "availability-heuristic", "dunning-kruger"],
  },
  {
    id: "survivorship-bias",
    title: "Survivorship Bias",
    difficulty: 2,
    emoji: "🏅",
    academicCategory: "Epistemologie",
    skillCategory: "Patronen Zien",
    definition: "De fout om conclusies te baseren op degenen die een selectieproces hebben overleefd (de 'survivors'), terwijl de mislukkingen buiten beeld blijven.",
    abstractExample: "Als je alleen succesvolle X bestudeert, zie je de gedeelde kenmerken van succesvolle X. Maar je mist alle mislukte X met dezelfde kenmerken. Je conclusies zijn vertekend.",
    examples: [
      { domain: "business", icon: "💼", text: "'Alle succesvolle ondernemers dropten uit van de universiteit.' Maar hoeveel dropouts mislukte ook? Die worden niet geïnterviewd." },
      { domain: "science", icon: "🔬", text: "WWII-vliegtuigen die terugkwamen hadden kogelgaten op de vleugels. Conclusie: versterk de vleugels. Fout! Vliegtuigen met gaten in de motor kwamen nooit terug." },
      { domain: "daily", icon: "🏠", text: "'Vroeger werden mensen ook oud en aten ze vet.' Maar de gemiddelde levensverwachting lag vroeger veel lager – de ongezonde mensen bereikten die leeftijd niet." }
    ],
    relatedPrinciples: ["confirmation-bias", "base-rate-fallacy", "availability-heuristic"],
  },
  {
    id: "gambler-fallacy",
    title: "Gambler's Fallacy",
    difficulty: 1,
    emoji: "🎰",
    academicCategory: "Epistemologie",
    skillCategory: "Beslissingen Nemen",
    definition: "De foutieve overtuiging dat eerdere willekeurige uitkomsten de kans op toekomstige uitkomsten beïnvloeden. Bij onafhankelijke gebeurtenissen heeft het verleden geen invloed op de toekomst.",
    abstractExample: "Een munt is 5x kop gegooid. De kans op munt bij de volgende gooi is nog steeds 50%, niet 50%+ of 50%-. De munt heeft geen geheugen.",
    examples: [
      { domain: "daily", icon: "🏠", text: "'Rood is al 10x gevallen bij roulette, dus zwart is nu zeker.' Elke spin is onafhankelijk – de kans op zwart blijft ~50%." },
      { domain: "business", icon: "💼", text: "'We hebben 3 kwartalen op rij gemist. Dit kwartaal MOET het goed gaan.' Kwartaalresultaten zijn niet van eerdere resultaten afhankelijk op deze manier." },
      { domain: "daily", icon: "🏠", text: "'Het vliegtuig dat net gecrasht is, was gevaarlijk om in te stappen. Maar nu zijn vliegtuigen tijdelijk extra veilig.' Fout – veiligheidsincidenten zijn niet gecorreleerd in deze zin." }
    ],
    relatedPrinciples: ["availability-heuristic", "base-rate-fallacy", "correlation-causation"],
  },
  {
    id: "fundamental-attribution-error",
    title: "Fundamentele Attributiefout",
    difficulty: 2,
    emoji: "👥",
    academicCategory: "Epistemologie",
    skillCategory: "Beslissingen Nemen",
    definition: "De neiging om gedrag van anderen toe te schrijven aan hun karakter of persoonlijkheid (intern), terwijl we situationele factoren onderschatten. Bij onszelf doen we het omgekeerde.",
    abstractExample: "Als iemand anders iets fout doet: 'Hij is lui/dom/onbetrouwbaar.' Als wij zelf iets fout doen: 'De omstandigheden waren moeilijk.' De attributie is asymmetrisch.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Iemand snijdt je af in het verkeer: 'Wat een agressieveling!' Maar als jij iemand afsnijdt: 'Ik had haast, het was niet anders.'" },
      { domain: "business", icon: "💼", text: "Een collega mist een deadline: 'Die is niet professioneel.' Als jij een deadline mist: 'Mijn manager had me te veel werk gegeven.'" },
      { domain: "politics", icon: "🏛️", text: "Arme mensen zijn arm 'omdat ze lui zijn' (karakter). Maar contextfactoren (structurele ongelijkheid, kansen) worden vaak onderschat." }
    ],
    relatedPrinciples: ["confirmation-bias", "cognitive-dissonance", "availability-heuristic"],
  },
  {
    id: "peak-end-rule",
    title: "Peak-End Regel",
    difficulty: 2,
    emoji: "🏔️",
    academicCategory: "Epistemologie",
    skillCategory: "Beslissingen Nemen",
    definition: "Mensen beoordelen een ervaring niet op het gemiddelde, maar op basis van het hoogtepunt (positief of negatief) en het einde. De duur doet er weinig toe (duratieveronachtzaming).",
    abstractExample: "Herinnering van ervaring E = f(hoogtepunt van E, einde van E). Niet de integrale van alle momenten. Een korte pijnlijke ervaring met goed einde voelt beter dan een langere pijnlijke ervaring met ook goed einde.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een vakantie met spectaculaire hoogtepunten en goed einde wordt als geweldig herinnerd, ook al waren er saaie momenten tussenin." },
      { domain: "business", icon: "💼", text: "Klantenservice: een klacht die goed is opgelost laat een positievere indruk na dan service die nooit een probleem had maar ook nooit uitblonk." },
      { domain: "science", icon: "🔬", text: "Kahneman's experiment: patiënten die een kortere, pijnlijkere colonoscopie ondergingen herinnerden het als slechter dan patiënten met een langere procedure die eindigde met minder pijn." }
    ],
    relatedPrinciples: ["availability-heuristic", "framing-effect", "cognitive-dissonance"],
  },
  {
    id: "ikea-effect",
    title: "IKEA Effect",
    difficulty: 1,
    emoji: "🪑",
    academicCategory: "Behavioral Economics",
    skillCategory: "Beslissingen Nemen",
    definition: "Mensen hechten meer waarde aan dingen die ze zelf hebben gemaakt of samengesteld, los van de objectieve kwaliteit. Eigen arbeid verhoogt de gepercipieerde waarde.",
    abstractExample: "Object X gebouwd door jou is in jouw ogen meer waard dan identiek object X gemaakt door een ander, zelfs als het objectief gezien gelijkwaardig of slechter is.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een zelfgemaakte cake smaakt je beter dan dezelfde cake van de bakker. Je eigen IKEA-kast voelt waardevoller dan een identieke kant-en-klare kast." },
      { domain: "business", icon: "💼", text: "Medewerkers zijn meer committed aan projecten die ze zelf hebben opgezet, ook als een extern team dezelfde oplossing had kunnen bieden." },
      { domain: "daily", icon: "🏠", text: "Een zelfgeschreven tekst of zelfgemaakt kunstwerk voelt bijzonder – ook als vrienden het objectief minder goed vinden." }
    ],
    relatedPrinciples: ["sunk-cost-fallacy", "cognitive-dissonance", "loss-aversion"],
  },
  {
    id: "curse-of-knowledge",
    title: "Curse of Knowledge (Vloek van Kennis)",
    difficulty: 2,
    emoji: "📚",
    academicCategory: "Epistemologie",
    skillCategory: "Beslissingen Nemen",
    definition: "Wanneer je iets weet, is het moeilijk je voor te stellen hoe het is om het niet te weten. Experts communiceren slecht naar beginners omdat ze vergeten hoe het was om beginner te zijn.",
    abstractExample: "Expert E met kennis K kan zich moeilijk voorstellen hoe het is voor non-expert N die K niet kent. E communiceert alsof N ook K heeft, wat leidt tot miscommunicatie.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Een muzikant tikt een melodie op tafel. Voor hem is het kristalhelder welk nummer het is. Voor de luisteraar is het slechts tik-tik-tik." },
      { domain: "business", icon: "💼", text: "Een senior developer schrijft documentatie die vol met jargon staat. Voor beginners is het onbegrijpelijk, voor hem 'self-explanatory'." },
      { domain: "science", icon: "🔬", text: "Een professor die 20 jaar zijn vakgebied bestudeert, begrijpt niet waarom studenten de 'basisconcep ten' niet begrijpen." }
    ],
    relatedPrinciples: ["dunning-kruger", "epistemic-humility", "cognitive-dissonance"],
  },
  {
    id: "illusory-superiority",
    title: "Illusoire Superioriteit (Lake Wobegon Effect)",
    difficulty: 1,
    emoji: "⭐",
    academicCategory: "Epistemologie",
    skillCategory: "Beslissingen Nemen",
    definition: "De neiging van mensen om zichzelf boven het gemiddelde te beoordelen op positieve eigenschappen. Statistisch kunnen niet alle mensen bovengemiddeld zijn.",
    abstractExample: "Als 80% van de mensen zichzelf boven het gemiddelde vindt op eigenschap X, is er per definitie een collectieve overschatting. Het gemiddelde betekent dat de helft eronder zit.",
    examples: [
      { domain: "daily", icon: "🏠", text: "Studies tonen: 93% van de Amerikanen denkt beter te rijden dan gemiddeld. Statistisch onmogelijk." },
      { domain: "business", icon: "💼", text: "Managers denken dat hun team beter presteert dan andere teams. Als iedereen dat denkt, klopt het voor minder dan de helft." },
      { domain: "science", icon: "🔬", text: "In evaluaties denkt de meerderheid van de academici dat hun onderzoek boven het gemiddelde impact heeft." }
    ],
    relatedPrinciples: ["dunning-kruger", "confirmation-bias", "epistemic-humility"],
  },

  // ── EXTRA PRINCIPES – BATCH 3 (Statistiek & Retorica) ──
  // ── STATISTIEK ───────────────────────────────────────────────
  {
    id: "law-of-large-numbers",
    title: "Wet van de Grote Getallen",
    difficulty: 2,
    emoji: "📊",
    academicCategory: "Statistiek",
    skillCategory: "Beter Redeneren",
    definition: "Hoe groter de steekproef, hoe dichter het gemiddelde van de uitkomsten bij de werkelijke kans ligt. Kleine steekproeven produceren grillige resultaten; grote steekproeven onthullen de echte patronen.",
    abstractExample: "Gooi een munt 10 keer: je kunt 8× kop gooien. Gooi hem 10.000 keer: het percentage kop nadert 50%. De wet zegt niets over individuele worpen, alleen over gemiddelden over grote aantallen.",
    examples: [
      { domain: "science", icon: "🔬", text: "Een klinische studie met 20 patiënten geeft wisselende resultaten; met 2.000 patiënten worden echte effecten zichtbaar." },
      { domain: "business", icon: "💼", text: "Een casino verliest soms een avond, maar wint vrijwel altijd over duizenden spelers – de wet garandeert hun marge." },
      { domain: "daily", icon: "🏠", text: "Eén slechte recensie kan toeval zijn; honderd slechte recensies onthullen een patroon." }
    ],
    relatedPrinciples: ["base-rate-fallacy", "gambler-fallacy", "selection-bias"],
  },
  {
    id: "regression-to-mean",
    title: "Regressie naar het Gemiddelde",
    difficulty: 3,
    emoji: "📉",
    academicCategory: "Statistiek",
    skillCategory: "Beter Redeneren",
    definition: "Extreme metingen worden bij herhaling gevolgd door minder extreme metingen – niet door een echte oorzaak, maar simpelweg door kans. We verwarren dit ten onrechte met oorzaak en gevolg.",
    abstractExample: "Als je de beste prestatie selecteert, is een deel van dat succes geluk. De volgende meting zal gemiddeld lager uitvallen – niet door slecht beleid, maar door statistiek.",
    examples: [
      { domain: "science", icon: "🔬", text: "De hoogst scorende leerlingen op een toets presteren bij de volgende toets gemiddeld iets minder – deels doordat de eerste score deels op geluk berustte." },
      { domain: "business", icon: "💼", text: "Een recordkwartaal wordt vaak gevolgd door een normaler kwartaal. Managers schrijven dit aan hun beleid toe, maar deels is het statistiek." },
      { domain: "daily", icon: "🏠", text: "Geef je iemand een compliment na een geweldige prestatie en straf je hem na een slechte, dan lijkt straf effectiever – maar dat is regressie naar het gemiddelde." }
    ],
    relatedPrinciples: ["law-of-large-numbers", "correlation-causation", "post-hoc-ergo"],
    exercises: [{
      type: "multiple-choice",
      question: "Na een uitzonderlijk goed seizoen presteert een voetballer gemiddeld. De trainer schrijft dit toe aan zijn nieuwe trainingsaanpak. Wat is de meest waarschijnlijke verklaring?",
      options: [
        "De nieuwe trainingsaanpak werkt averechts",
        "De speler heeft minder gemotiveerd getraind",
        "Uitzonderlijke prestaties worden statistisch gevolgd door meer gemiddelde prestaties",
        "De concurrenten zijn sterker geworden"
      ],
      correct: 2,
      feedback: "Precies! Dit is regressie naar het gemiddelde. Het uitzonderlijk goede seizoen bevatte een element van toeval. De volgende meting valt statistisch dichter bij het langetermijngemiddelde — niet door de trainingsaanpak, maar door kans. De trainer trekt een causale conclusie uit wat statistiek is."
    }],
    creativePrompt: "Beschrijf een situatie waarbij je dacht dat een interventie (beloning, straf, beleid) werkte, maar waarbij regressie naar het gemiddelde een betere verklaring zou kunnen zijn.",
    aiHelperPrompts: [
      "Hoe kun je onderscheid maken tussen een echte verbetering en regressie naar het gemiddelde?",
      "Waarom overschatten managers en coaches vaak de effectiviteit van hun interventies?",
      "In welke domeinen is regressie naar het gemiddelde het meest misleidend?"
    ]
  },
  {
    id: "selection-bias",
    title: "Selectiebias",
    difficulty: 2,
    emoji: "🎯",
    academicCategory: "Statistiek",
    skillCategory: "Beter Redeneren",
    definition: "Als de groep die je onderzoekt niet representatief is voor de bredere populatie, zijn je conclusies vertekend. De manier waarop data worden verzameld bepaalt sterk welke conclusies mogelijk zijn.",
    abstractExample: "Als je alleen mensen ondervraagt die al klant zijn, mis je de mensen die zijn afgehaakt. Je beeld van klanttevredenheid is dan systematisch te positief.",
    examples: [
      { domain: "science", icon: "🔬", text: "Vroege medische studies gebruikten vrijwel alleen mannelijke proefpersonen – bevindingen gelden daardoor minder voor vrouwen." },
      { domain: "business", icon: "💼", text: "Online reviews zijn scheef: mensen met sterke ervaringen (heel goed of heel slecht) schrijven eerder een review dan tevreden middengroepers." },
      { domain: "daily", icon: "🏠", text: "Mensen die overleven schipbreuken worden geïnterviewd over reddingstechnieken – maar we horen nooit van degenen voor wie dezelfde technieken niet werkten." }
    ],
    relatedPrinciples: ["survivorship-bias", "confirmation-bias", "base-rate-fallacy"],
  },
  {
    id: "bayes-theorem",
    title: "Stelling van Bayes",
    difficulty: 4,
    emoji: "🧮",
    academicCategory: "Statistiek",
    skillCategory: "Beter Redeneren",
    definition: "De kans dat een hypothese waar is, gegeven nieuw bewijs, hangt af van hoe waarschijnlijk de hypothese al was (prior) én hoe waarschijnlijk het bewijs is als de hypothese klopt. Nieuwe informatie updatet bestaande kansen.",
    abstractExample: "P(H|E) = P(E|H) × P(H) / P(E). Als een ziekte zeldzaam is (lage prior), kan een positieve test toch grotendeels fout-positief zijn – zelfs bij een nauwkeurige test.",
    examples: [
      { domain: "science", icon: "🔬", text: "Een medische test voor een zeldzame ziekte (1 op 1000) met 99% nauwkeurigheid geeft bij een positief resultaat toch maar ~9% kans op werkelijke ziekte." },
      { domain: "business", icon: "💼", text: "Een spamfilter leert op basis van Bayes: een mail met 'gratis geld' is na veel voorbeelden waarschijnlijk spam, ook al komt het woord soms in legitieme mails voor." },
      { domain: "daily", icon: "🏠", text: "Je hoort een knal buiten: is het een schot of een knallend uitlaatpijp? In een veilige wijk is de kans op uitlaatpijp veel groter – je prior speelt mee." }
    ],
    relatedPrinciples: ["base-rate-fallacy", "confirmation-bias", "epistemic-humility"],
    exercises: [{
      type: "multiple-choice",
      question: "Een zeldzame ziekte treft 1 op 1000 mensen. Een test is 99% nauwkeurig. Je test positief. Hoe groot is de kans dat je de ziekte daadwerkelijk hebt?",
      options: [
        "99% — de test is immers 99% nauwkeurig",
        "50% — het is een open vraag",
        "Bijna 100% — positief is positief",
        "Ongeveer 9% — de lage basisfrequentie telt zwaar mee"
      ],
      correct: 3,
      feedback: "Juist! Bayes: P(ziekte|positief) = (0,99 × 0,001) / (0,99 × 0,001 + 0,01 × 0,999) ≈ 9%. De basisfrequentie van 0,1% is zo laag dat de meeste positieve tests vals-positief zijn. Nieuwe informatie updatet de kans, maar kan de prior niet zomaar overschrijven."
    }],
    creativePrompt: "Bedenk een situatie in jouw leven of werk waarbij je een conclusie trok op basis van één datapunt, zonder de basisfrequentie mee te nemen. Hoe zou Bayesiaans denken dit anders inzichtelijk maken?",
    aiHelperPrompts: [
      "Wat is een 'prior' in Bayesiaans denken, en hoe beïnvloedt die je conclusie?",
      "Waarom is het zo moeilijk voor mensen om lage basisfrequenties mee te wegen?",
      "Kun je een Bayesiaanse redenering toepassen op een beslissing die je binnenkort moet nemen?"
    ]
  },
  {
    id: "multiple-comparisons",
    title: "Meervoudige Vergelijkingen (p-hacking)",
    difficulty: 4,
    emoji: "🎲",
    academicCategory: "Statistiek",
    skillCategory: "Beter Redeneren",
    definition: "Als je genoeg vergelijkingen maakt, vind je altijd wel iets 'statistisch significant' door puur toeval. Hoe meer je test, hoe groter de kans op vals alarm.",
    abstractExample: "Bij een significantieniveau van 5% en 20 onafhankelijke tests verwacht je gemiddeld 1 vals positief resultaat – puur door kans. Dit heet het meervoudig vergelijkingsprobleem.",
    examples: [
      { domain: "science", icon: "🔬", text: "Een onderzoeker test 50 voedingssupplementen op kankerrisico. Statistisch verwacht hij 2-3 'significante' verbanden puur door toeval, ook als geen enkel supplement echt werkt." },
      { domain: "business", icon: "💼", text: "Een A/B-test die te lang doorgaat en tientallen varianten test, vindt bijna altijd een 'winnaar' – maar de kans is groot dat dit toeval is." },
      { domain: "daily", icon: "🏠", text: "Zoek lang genoeg naar verbanden in sterrenbeelden en geboortedata, en je vindt altijd iets. Maar dat bewijst niets." }
    ],
    relatedPrinciples: ["confirmation-bias", "survivorship-bias", "falsification"],
  },

  // ── RETORICA & DROGREDENEN ───────────────────────────────────
  {
    id: "appeal-to-authority",
    title: "Beroep op Autoriteit",
    difficulty: 2,
    emoji: "👑",
    academicCategory: "Retorica",
    skillCategory: "Beter Argumenteren",
    definition: "Een argument is niet juist alleen omdat een autoriteit of expert het zegt. Autoriteit kan relevante expertise ondersteunen, maar vervangt geen bewijs en is feilbaar.",
    abstractExample: "'Professor X zegt Y, dus Y is waar.' Dit is een drogreden als de professor buiten zijn vakgebied spreekt, als experts het oneens zijn, of als de uitspraak los staat van bewijs.",
    examples: [
      { domain: "science", icon: "🔬", text: "Een Nobelprijswinnaar in de natuurkunde promoot vitamine C als kankerkuur – buiten zijn vakgebied, zonder klinisch bewijs." },
      { domain: "business", icon: "💼", text: "'Onze CEO zegt dat de markt herstelt, dus we investeren.' De CEO kan het mis hebben, ook al is hij succesvol." },
      { domain: "daily", icon: "🏠", text: "Een beroemde voetballer adviseert een dieet. Zijn succes op het veld maakt hem geen voedingsdeskundige." }
    ],
    relatedPrinciples: ["ad-hominem", "burden-of-proof", "epistemic-humility"],
  },
  {
    id: "slippery-slope",
    title: "Het Hellende Vlak",
    difficulty: 2,
    emoji: "🎿",
    academicCategory: "Retorica",
    skillCategory: "Beter Argumenteren",
    definition: "De bewering dat stap A onvermijdelijk tot catastrofale uitkomst Z leidt, zonder bewijs voor de tussenliggende stappen. De redenering gaat ervan uit dat kleine veranderingen een onstuitbare ketting in gang zetten.",
    abstractExample: "A→B→C→…→Z, waarbij elke stap als onvermijdelijk wordt voorgesteld zonder dat dit wordt onderbouwd. Het is een drogreden als de keten speculatief is.",
    examples: [
      { domain: "science", icon: "🔬", text: "'Als we genetische modificatie toestaan bij planten, eindigen we onvermijdelijk met genetisch gemanipuleerde mensen.' De stappen daartussen zijn verre van zeker." },
      { domain: "business", icon: "💼", text: "'Als we één thuiswerkdag toestaan, willen ze binnenkort helemaal niet meer op kantoor komen.' Geen bewijs dat deze stap onvermijdelijk is." },
      { domain: "daily", icon: "🏠", text: "'Als mijn kind één snoepje krijgt, wil het er altijd meer en krijgt het gaatjes.' Elke stap vereist onderbouwing." }
    ],
    relatedPrinciples: ["straw-man-fallacy", "false-dilemma", "post-hoc-ergo"],
  },
  {
    id: "hasty-generalization",
    title: "Overhaaste Generalisatie",
    difficulty: 2,
    emoji: "🏃",
    academicCategory: "Retorica",
    skillCategory: "Beter Argumenteren",
    definition: "Een algemene conclusie trekken op basis van te weinig of niet-representatieve voorbeelden. De steekproef is te klein of te eenzijdig om de conclusie te dragen.",
    abstractExample: "Uit n gevallen (waarbij n te klein of niet-representatief is) wordt een universele of brede regel afgeleid. Hoe kleiner of schefer de steekproef, hoe zwakker de generalisatie.",
    examples: [
      { domain: "science", icon: "🔬", text: "Twee patiënten reageerden goed op een behandeling → 'De behandeling werkt.' Twee gevallen zijn onvoldoende bewijs voor een algemene conclusie." },
      { domain: "business", icon: "💼", text: "Drie klanten klaagden over de app → 'Alle gebruikers haten de nieuwe interface.' Drie klachten weerspiegelen niet alle gebruikers." },
      { domain: "daily", icon: "🏠", text: "Twee slechte ervaringen met een nationaliteit → stereotypering van miljoenen mensen op basis van twee gevallen." }
    ],
    relatedPrinciples: ["availability-heuristic", "confirmation-bias", "law-of-large-numbers"],
  },
  {
    id: "tu-quoque",
    title: "Tu Quoque (Jij Ook!)",
    difficulty: 2,
    emoji: "☝️",
    academicCategory: "Retorica",
    skillCategory: "Beter Argumenteren",
    definition: "Een argument verwerpen door te wijzen op inconsequent gedrag van de spreker, in plaats van op de inhoud van het argument in te gaan. 'Jij doet het zelf ook' weerlegde niets.",
    abstractExample: "Persoon A stelt claim C. Persoon B wijst op inconsistentie van A. Conclusie: C is onjuist. Dit is ongeldig: de waarheid van C hangt niet af van het gedrag van A.",
    examples: [
      { domain: "science", icon: "🔬", text: "'Jij rijdt zelf ook auto, dus jij mag niks zeggen over CO₂-uitstoot.' Het argument over klimaat is onafhankelijk van het rijgedrag van de spreker." },
      { domain: "business", icon: "💼", text: "'Jij hebt ook wel eens een deadline gemist, dus jij kunt mij niet aanspreken.' De kritiek op de deadline-mislukking staat los van de verleden fouten van de criticaster." },
      { domain: "daily", icon: "🏠", text: "Ouder: 'Rook niet.' Kind: 'Jij rookte vroeger ook.' Het verleden van de ouder maakt het advies niet minder valide." }
    ],
    relatedPrinciples: ["ad-hominem", "straw-man-fallacy", "burden-of-proof"],
  },
  {
    id: "appeal-to-nature",
    title: "Beroep op de Natuur",
    difficulty: 2,
    emoji: "🌿",
    academicCategory: "Retorica",
    skillCategory: "Beter Argumenteren",
    definition: "De aanname dat iets goed is omdat het 'natuurlijk' is, of slecht omdat het 'kunstmatig' is. Natuurlijk en kunstmatig zeggen op zichzelf niets over veiligheid, waarde of wenselijkheid.",
    abstractExample: "Premisse: X is natuurlijk. Conclusie: X is goed/veilig/gewenst. Dit is een drogreden: veel natuurlijke dingen zijn gevaarlijk (gif, bacteriën) en veel kunstmatige dingen zijn nuttig (vaccins, brillen).",
    examples: [
      { domain: "science", icon: "🔬", text: "'Kruiden zijn natuurlijk, dus veiliger dan medicijnen.' Arseen is ook natuurlijk. Veiligheid hangt af van werking en dosering, niet van herkomst." },
      { domain: "business", icon: "💼", text: "Marketingterm 'natuurlijk' of '100% puur' impliceert kwaliteit, maar zegt niets over effectiviteit of veiligheid." },
      { domain: "daily", icon: "🏠", text: "'Thuisbevallen is natuurlijker dan in het ziekenhuis.' Natuurlijkheid zegt niets over veiligheid voor moeder en kind." }
    ],
    relatedPrinciples: ["appeal-to-authority", "hasty-generalization", "confirmation-bias"],
  },

  // ── EXTRA PRINCIPES – BATCH 4 (Psychologie & Besliskunde) ──
  // ── PSYCHOLOGIE ──────────────────────────────────────────────
  {
    id: "social-proof",
    title: "Sociale Bewijskracht",
    difficulty: 2,
    emoji: "👥",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    definition: "We beschouwen gedrag als correct als we zien dat anderen het ook doen. In onzekerheid kijken we naar wat de meerderheid doet als aanwijzing voor de juiste keuze.",
    abstractExample: "Als niemand weet wat de norm is, kopiëren mensen elkaars gedrag. Dit kan leiden tot kuddedrag: een trend zet door omdat iedereen denkt dat anderen het al evalueerden.",
    examples: [
      { domain: "business", icon: "💼", text: "'Al 10.000 klanten gingen je voor.' Restaurants plaatsen populaire gerechten bovenaan om sociale bewijskracht op te wekken." },
      { domain: "daily", icon: "🏠", text: "Een lege kroeg voelt ongemakkelijk; een volle kroeg trekt meer mensen aan. De drukte zelf is het signaal." },
      { domain: "science", icon: "🔬", text: "In Milgrams gehoorzaamheidsexperiment speelde de aanwezigheid van anderen die meededen een grote rol in het gedrag van deelnemers." }
    ],
    relatedPrinciples: ["availability-heuristic", "confirmation-bias", "dunning-kruger"],
  },
  {
    id: "scarcity-effect",
    title: "Schaarste-effect",
    difficulty: 2,
    emoji: "⏳",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    definition: "Dingen lijken waardevoller als ze schaars zijn of dreigen te verdwijnen. Beperkte beschikbaarheid verhoogt de gepercipieerde waarde, ongeacht de intrinsieke kwaliteit.",
    abstractExample: "Wanneer iets moeilijker te verkrijgen is, schrijven we het meer waarde toe. Dit geldt voor tijd ('nog 2 beschikbaar!'), toegang en exclusiviteit.",
    examples: [
      { domain: "business", icon: "💼", text: "'Nog 3 kamers beschikbaar op dit tijdstip!' Booking.com en vergelijkbare sites gebruiken schaarste actief om urgentie te creëren." },
      { domain: "daily", icon: "🏠", text: "Limited-edition sneakers zijn soms objectief niet beter, maar de schaarste maakt ze begeerlijker en duurder." },
      { domain: "science", icon: "🔬", text: "Onderzoekers gaven groepen identieke koekjes, maar één groep had een pot met 2 koekjes en de ander met 10. De groep met 2 beoordeelde ze als lekkerder." }
    ],
    relatedPrinciples: ["loss-aversion", "framing-effect", "anchoring"],
  },
  {
    id: "reciprocity",
    title: "Wederkerigheid",
    difficulty: 2,
    emoji: "🤝",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    definition: "We voelen een sterke drang om terug te geven wat we ontvangen. Een gunst, cadeau of concessie creëert een sociale verplichting om iets terug te doen.",
    abstractExample: "Als A iets geeft aan B, ervaart B een psychologische druk om iets terug te geven. Dit werkt zelfs bij ongewenste giften en is een van de krachtigste sociale normen.",
    examples: [
      { domain: "business", icon: "💼", text: "Gratis samples in supermarkten verhogen de verkoopkans aanzienlijk: klanten voelen zich verplicht iets terug te doen voor het gratis monster." },
      { domain: "daily", icon: "🏠", text: "Als iemand je uitnodigt voor een feestje, voel je de druk om hem/haar ook uit te nodigen – zelfs als je dat normaal niet zou doen." },
      { domain: "science", icon: "🔬", text: "Cialdini toonde aan dat het sturen van een klein cadeau bij een enquête de respons significant verhoogde, ook al was het cadeau niets waard." }
    ],
    relatedPrinciples: ["social-proof", "loss-aversion", "ikea-effect"],
  },
  {
    id: "spotlight-effect",
    title: "Schijnwerperseffect",
    difficulty: 2,
    emoji: "🔦",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    definition: "We overschatten hoeveel anderen letten op ons uiterlijk, gedrag en fouten. De 'schijnwerper' die wij op onszelf richten, zien anderen nauwelijks.",
    abstractExample: "Als jij een vlek op je shirt hebt, denk je dat iedereen het ziet. In werkelijkheid merkt de meerderheid het niet of vergeet het snel – ze zijn bezig met hun eigen zorgen.",
    examples: [
      { domain: "science", icon: "🔬", text: "Gilovich et al. lieten studenten een shirt dragen met een gênant logo. Studenten dachten dat ~50% het zou opmerken; in werkelijkheid was het ~25%." },
      { domain: "daily", icon: "🏠", text: "Je zegt iets onhandigs in een vergadering en denkt de rest van de dag dat iedereen er nog aan denkt. Maar je collega's zijn er al lang overheen." },
      { domain: "business", icon: "💼", text: "Een presentator die een kleine fout maakt denkt dat het zijn geloofwaardigheid heeft geschaad. Het publiek heeft de fout vaak niet eens geregistreerd." }
    ],
    relatedPrinciples: ["dunning-kruger", "illusory-superiority", "curse-of-knowledge"],
  },
  {
    id: "planning-fallacy",
    title: "Planningsdrogreden",
    difficulty: 2,
    emoji: "📅",
    academicCategory: "Psychologie",
    skillCategory: "Beter Beslissen",
    definition: "We onderschatten systematisch de tijd, kosten en risico's van toekomstige plannen, terwijl we tegelijkertijd vergelijkbare taken in het verleden correct inschatten. We negeren historische data ten gunste van optimistische scenario's.",
    abstractExample: "Kahneman en Tversky: mensen schatten de voltooiingstijd van projecten te laag in, ook als ze weten dat vergelijkbare projecten uitliepen. De binnenperspectief overschaduwt het buitenperspectief.",
    examples: [
      { domain: "science", icon: "🔬", text: "De Sydney Opera House was gepland voor 1963 met een budget van 7 miljoen. Het werd klaar in 1973 voor 102 miljoen – een factor 14 over budget en 10 jaar vertraging." },
      { domain: "business", icon: "💼", text: "Softwareprojecten lopen gemiddeld 66% over budget en 33% over tijd – het is zo voorspelbaar dat het een eigen naam heeft: Hofstadters wet." },
      { domain: "daily", icon: "🏠", text: "'Dit rapport schrijf ik in twee uur.' Drie uur later ben je er nog mee bezig. Je negeerde onderbrekingen, complexiteit en perfectiedrang." }
    ],
    relatedPrinciples: ["hyperbolic-discounting", "overconfidence", "sunk-cost-fallacy"],
  },

  // ── BESLISKUNDE & ECONOMIE ───────────────────────────────────
  {
    id: "expected-value",
    title: "Verwachte Waarde",
    difficulty: 3,
    emoji: "🎰",
    academicCategory: "Besliskunde",
    skillCategory: "Beter Beslissen",
    definition: "De verwachte waarde van een keuze is de som van alle mogelijke uitkomsten, elk gewogen met hun kans. Het is de gemiddelde uitkomst bij een groot aantal herhalingen van dezelfde beslissing.",
    abstractExample: "EV = Σ (kans × uitkomst). Als een loterij 1 op 1.000.000 kans biedt op €1.000.000 en een lot kost €2, is de EV €1 – je verliest gemiddeld €1 per lot.",
    examples: [
      { domain: "science", icon: "🔬", text: "Bij medische beslissingen helpt verwachte waarde om behandelingen te vergelijken: kans op genezing × kwaliteitswinst minus kans op bijwerkingen × kwaliteitsverlies." },
      { domain: "business", icon: "💼", text: "Een project heeft 30% kans op €100.000 winst en 70% kans op €10.000 verlies. EV = 0,3×100.000 + 0,7×(−10.000) = €23.000. Positieve EV, dus rationeel om te doen." },
      { domain: "daily", icon: "🏠", text: "Een paraplu meenemen kost je 2 minuten ongemak. Geen paraplu en regen betekent nat worden (waarde −20). Bij 10% kans op regen: EV van meenemen is beter." }
    ],
    relatedPrinciples: ["opportunity-cost", "loss-aversion", "risk-aversion"],
  },
  {
    id: "risk-aversion",
    title: "Risicoaversie",
    difficulty: 3,
    emoji: "🛡️",
    academicCategory: "Besliskunde",
    skillCategory: "Beter Beslissen",
    definition: "Mensen kiezen doorgaans liever een zekere uitkomst boven een onzekere met dezelfde of zelfs hogere verwachte waarde. We zijn bereid te betalen voor zekerheid, boven en buiten de verwachte waarde.",
    abstractExample: "De nutsfunctie van geld is concaaf: €100 zekerheid is waardevoller dan 50% kans op €200, ook al zijn de verwachte waarden gelijk. De pijn van verlies weegt zwaarder dan het plezier van winst.",
    examples: [
      { domain: "science", icon: "🔬", text: "Bernoulli beschreef in 1738 al dat mensen liever €500 zeker nemen dan 50% kans op €1000, zelfs als de EV gelijk is." },
      { domain: "business", icon: "💼", text: "Verzekeringen zijn rationeel vanuit risicoaversie: je betaalt een premie (negatieve EV) voor de zekerheid dat je niet met een enorme schade zit." },
      { domain: "daily", icon: "🏠", text: "Je kiest een vaste baan boven zelfstandig ondernemen met hogere verwachte inkomsten maar meer onzekerheid – dat is risicoaversie in de praktijk." }
    ],
    relatedPrinciples: ["loss-aversion", "expected-value", "hyperbolic-discounting"],
  },
  {
    id: "comparative-advantage",
    title: "Comparatief Voordeel",
    difficulty: 3,
    emoji: "🔄",
    academicCategory: "Besliskunde",
    skillCategory: "Beter Beslissen",
    definition: "Zelfs als iemand (of een land) absoluut beter is in alles, is het rationeel om te specialiseren in datgene waarbij de opportuniteitskosten het laagst zijn en de rest uit te besteden.",
    abstractExample: "Als A beter is in zowel X als Y, maar relatief nog beter in X, dan profiteert A van specialisatie in X en B van Y. Door handel zijn beide beter af dan zonder.",
    examples: [
      { domain: "science", icon: "🔬", text: "Ricardo's klassieke voorbeeld: Portugal produceert zowel wijn als laken efficiënter dan Engeland, maar heeft het grootste voordeel bij wijn. Specialisatie en handel maken beiden rijker." },
      { domain: "business", icon: "💼", text: "Een topadvocaat die ook snel typt, besteedt het typen toch uit. Zijn comparatief voordeel ligt bij juridisch advies; de typist heeft comparatief voordeel bij typen." },
      { domain: "daily", icon: "🏠", text: "Zelfs als jij beter kunt koken én beter kunt klussen dan je huisgenoot, is het efficiënter om te verdelen op basis van relatieve sterktes." }
    ],
    relatedPrinciples: ["opportunity-cost", "pareto-efficiency", "diminishing-returns"],
  },
  {
    id: "moral-hazard",
    title: "Moreel Risico",
    difficulty: 3,
    emoji: "⚖️",
    academicCategory: "Besliskunde",
    skillCategory: "Beter Beslissen",
    definition: "Als iemand beschermd is tegen de gevolgen van zijn risicovol gedrag, neemt hij meer risico dan hij anders zou nemen. De kosten worden gedragen door anderen; de baten zijn voor hemzelf.",
    abstractExample: "Als actor A verzekerd is voor de gevolgen van zijn acties, maar de kosten worden gedragen door actor B (verzekeraar, overheid, samenleving), heeft A een prikkel tot risicovoller gedrag.",
    examples: [
      { domain: "science", icon: "🔬", text: "Verzekeringstheorie: een volledig verzekerd automobilist rijdt minder voorzichtig dan een onverzekerde. De verzekeraar draagt de kosten, de bestuurder plukt de baten van risicogedrag." },
      { domain: "business", icon: "💼", text: "'Too big to fail': banken die weten dat de overheid hen zal redden, nemen meer financieel risico dan verantwoord is – de winsten zijn privaat, de verliezen sociaal." },
      { domain: "daily", icon: "🏠", text: "Een huurder die weet dat de verhuurder de borg toch terug betaalt, past minder goed op het huurhuis. De scheiding van kosten en baten verandert gedrag." }
    ],
    relatedPrinciples: ["prisoners-dilemma", "tragedy-commons", "nash-equilibrium"],
  },
  {
    id: "margin-thinking",
    title: "Marginaal Denken",
    difficulty: 3,
    emoji: "➕",
    academicCategory: "Besliskunde",
    skillCategory: "Beter Beslissen",
    definition: "Rationele beslissingen worden gemaakt op de marge: wat kost of levert de volgende eenheid op? Niet de gemiddelde kosten of opbrengsten, maar de marginale zijn bepalend voor de optimale keuze.",
    abstractExample: "Als de marginale baten van een extra eenheid groter zijn dan de marginale kosten, is uitbreiding rationeel. Op het punt waarop marginale kosten = marginale baten, is het optimum bereikt.",
    examples: [
      { domain: "science", icon: "🔬", text: "Een fabriek besluit of ze een extra product maakt op basis van marginale kosten (extra grondstof, arbeid), niet de totale vaste kosten per product." },
      { domain: "business", icon: "💼", text: "Airlines bieden last-minute tickets aan voor prijzen ver onder de gemiddelde prijs: de vliegtuigstoel heeft toch nauwelijks marginale kosten als het vliegtuig al vliegt." },
      { domain: "daily", icon: "🏠", text: "'Ik heb al zo veel gegeten, één koekje meer maakt niet meer uit.' Dit is soms vreemd marginaal denken – het extra koekje heeft wel degelijk marginale calorieën." }
    ],
    relatedPrinciples: ["opportunity-cost", "diminishing-returns", "sunk-cost-fallacy"],
  },

  // ── EXTRA PRINCIPES – BATCH 5 (Systeemdenken & Wetenschapsfilosofie) ──
  // ── SYSTEEMDENKEN ────────────────────────────────────────────
  {
    id: "feedback-loop",
    title: "Terugkoppelingleus",
    difficulty: 3,
    emoji: "🔁",
    academicCategory: "Systeemdenken",
    skillCategory: "Beter Redeneren",
    definition: "Een terugkoppelingleus ontstaat wanneer de uitkomst van een systeem terugwerkt op de invoer. Positieve feedback versterkt verandering (exponentieel); negatieve feedback dempt verandering (stabiliserend).",
    abstractExample: "Positief: meer succes → meer middelen → nog meer succes. Negatief: hoge prijs → minder vraag → lagere prijs → meer vraag. Systemen met terugkoppeling gedragen zich fundamenteel anders dan lineaire systemen.",
    examples: [
      { domain: "science", icon: "🔬", text: "Klimaatwetenschap: opwarming smelt ijs → minder reflectie → meer absorptie → meer opwarming. Dit is een positieve terugkoppeling (versterkend)." },
      { domain: "business", icon: "💼", text: "Een populair product krijgt meer reviews → hogere ranking → meer zichtbaarheid → nog meer verkopen. Positieve terugkoppeling in platformeconomieën." },
      { domain: "daily", icon: "🏠", text: "Lichaamstemperatuur wordt geregeld door negatieve terugkoppeling: te warm → zweten → afkoeling → temperatuur daalt terug naar normaal." }
    ],
    relatedPrinciples: ["second-order-effects", "tragedy-commons", "nash-equilibrium"],
  },
  {
    id: "second-order-effects",
    title: "Tweede-orde-effecten",
    difficulty: 3,
    emoji: "♟️",
    academicCategory: "Systeemdenken",
    skillCategory: "Beter Redeneren",
    definition: "Elke actie heeft directe (eerste-orde) effecten, maar ook indirecte gevolgen van die gevolgen. Tweede-orde-effecten zijn vaak groter of anders dan verwacht en worden systematisch onderschat.",
    abstractExample: "Actie A → direct effect B (eerste orde) → gevolg van B: effect C (tweede orde) → gevolg van C: effect D (derde orde). Rationeel beleid analyseert minstens tot het tweede niveau.",
    examples: [
      { domain: "science", icon: "🔬", text: "DDT bestreed malaria (eerste orde: goed), maar accumuleerde in voedselketens en bijna uitgeroeide roofvogels (tweede orde: slecht)." },
      { domain: "business", icon: "💼", text: "Hogere lonen voor werknemers (eerste orde: goed voor hen) → hogere productiekosten → hogere prijzen → lagere koopkracht van diezelfde werknemers (tweede orde)." },
      { domain: "daily", icon: "🏠", text: "Snelwegen uitbreiden vermindert files (eerste orde), maar trekt meer autoverkeer aan en vergroot files op termijn (tweede orde: induced demand)." }
    ],
    relatedPrinciples: ["feedback-loop", "externalities", "tragedy-commons"],
  },
  {
    id: "externalities",
    title: "Externaliteiten",
    difficulty: 3,
    emoji: "🏭",
    academicCategory: "Systeemdenken",
    skillCategory: "Beter Redeneren",
    definition: "Externaliteiten zijn kosten of baten van een transactie die terechtkomen bij derden die niet bij de transactie betrokken zijn. Negatieve externaliteiten (zoals vervuiling) leiden tot overproductie; positieve tot onderproductie.",
    abstractExample: "Als actor A iets produceert en de kosten (vervuiling, lawaai) bij actor B terechtkomen zonder compensatie, dan zijn de sociale kosten hoger dan de private kosten. De markt faalt.",
    examples: [
      { domain: "science", icon: "🔬", text: "CO₂-uitstoot is een klassieke negatieve externaliteit: de producent betaalt niet voor de klimaatschade die bij de hele samenleving terechtkomt." },
      { domain: "business", icon: "💼", text: "Vaccinaties zijn een positieve externaliteit: wie zich laat vaccineren beschermt ook anderen (kudde-immuniteit), maar betaalt zelf de kosten. Zonder subsidie zou er te weinig worden gevaccineerd." },
      { domain: "daily", icon: "🏠", text: "Een buurman die laat muziek draait legt een negatieve externaliteit op jou: zijn plezier, jouw slaapgebrek." }
    ],
    relatedPrinciples: ["tragedy-commons", "moral-hazard", "pareto-efficiency"],
  },
  {
    id: "network-effects",
    title: "Netwerkeffecten",
    difficulty: 3,
    emoji: "🌐",
    academicCategory: "Systeemdenken",
    skillCategory: "Beter Redeneren",
    definition: "Een product of dienst wordt waardevoller naarmate meer mensen het gebruiken. Netwerkeffecten creëren zichzelf-versterkende monopolies en maken het moeilijk voor nieuwe toetreders om te concurreren.",
    abstractExample: "Als de waarde van product X stijgt met het aantal gebruikers n (Metcalfe's wet: n²), dan heeft de marktleider een cumulatief voordeel dat moeilijk te doorbreken is.",
    examples: [
      { domain: "science", icon: "🔬", text: "Het telefoonnetwerk: één telefoon is nutteloos. Twee telefoons creëren één verbinding. Met n gebruikers zijn er n(n-1)/2 mogelijke verbindingen." },
      { domain: "business", icon: "💼", text: "WhatsApp, Facebook, LinkedIn: hun waarde zit in het netwerk van bestaande gebruikers, niet in de technologie. Nieuwe alternatieven worstelen zelfs als ze technisch beter zijn." },
      { domain: "daily", icon: "🏠", text: "Waarom gebruik je waarschijnlijk nog steeds Word of Excel? Deels omdat iedereen om je heen dat ook doet – uitwisselbaarheid is waardevoller dan de software zelf." }
    ],
    relatedPrinciples: ["feedback-loop", "schelling-point", "pareto-efficiency"],
  },
  {
    id: "overton-window",
    title: "Overtonraam",
    difficulty: 3,
    emoji: "🪟",
    academicCategory: "Systeemdenken",
    skillCategory: "Beter Redeneren",
    definition: "Het spectrum van ideeën dat op een bepaald moment politiek acceptabel is. Buiten dit raam vallen ideeën als 'te radicaal' of 'ondenkbaar'. Het raam verschuift door maatschappelijke veranderingen en discours.",
    abstractExample: "Ideeën bevinden zich op een schaal van ondenkbaar → radicaal → acceptabel → verstandig → beleid. Wat vandaag beleid is, was ooit ondenkbaar, en vice versa.",
    examples: [
      { domain: "science", icon: "🔬", text: "Het Overtonraam voor klimaatbeleid verschoof: CO₂-belasting was in de jaren '90 politiek ondenkbaar; nu is het mainstream beleid in veel landen." },
      { domain: "business", icon: "💼", text: "Vierdaagse werkweek was tien jaar geleden een randbezigheid; nu is het in het Overtonraam van serieus beleid in meerdere landen." },
      { domain: "daily", icon: "🏠", text: "Roken op kantoor was ooit normaal; nu ondenkbaar. Het Overtonraam voor rookbeleid is radicaal verschoven." }
    ],
    relatedPrinciples: ["social-proof", "availability-heuristic", "status-quo-bias"],
  },

  // ── WETENSCHAPSFILOSOFIE ─────────────────────────────────────
  {
    id: "induction-problem",
    title: "Inductieprobleem (Hume)",
    difficulty: 4,
    emoji: "🦢",
    academicCategory: "Epistemologie",
    skillCategory: "Beter Redeneren",
    definition: "We kunnen nooit met zekerheid afleiden dat iets altijd waar zal zijn, alleen maar omdat het tot nu toe altijd waar was. Inductie geeft geen logische zekerheid, alleen verhoogde waarschijnlijkheid.",
    abstractExample: "Je hebt 1.000 witte zwanen gezien → conclusie: alle zwanen zijn wit. Dit is inductieve redenering. Eén zwarte zwaan weerlegt de conclusie. Het probleem: je kunt nooit genoeg witte zwanen zien om zekerheid te geven.",
    examples: [
      { domain: "science", icon: "🔬", text: "Newton's zwaartekrachtswet was millennialang 'bewezen' door inductie – tot Einstein aantoonde dat hij niet universeel geldig is. Elke wetenschappelijke wet is in principe falsifieerbaar." },
      { domain: "business", icon: "💼", text: "Een bedrijf groeit 10 jaar achter elkaar → 'Ons model werkt altijd.' Maar er is nooit een garantie dat de volgende jaar ook groei brengt." },
      { domain: "daily", icon: "🏠", text: "De zon ging elke dag op → 'De zon gaat morgen ook op.' Rationeel, maar niet logisch zeker – het is inductie." }
    ],
    relatedPrinciples: ["falsification", "black-swan", "epistemic-humility"],
  },
  {
    id: "paradigm-shift",
    title: "Paradigmaverschuiving (Kuhn)",
    difficulty: 4,
    emoji: "🌀",
    academicCategory: "Epistemologie",
    skillCategory: "Beter Redeneren",
    definition: "Wetenschappelijke vooruitgang verloopt niet geleidelijk, maar via revoluties: een dominant paradigma (denkkader) stapelt anomalieën op totdat het bezwijkt en wordt vervangen door een nieuw paradigma.",
    abstractExample: "Normaalwetenschap werkt binnen een paradigma. Anomalieën worden eerst wegverklaard. Als er te veel zijn, treedt crisis op. Een revolutie brengt een nieuw paradigma dat incompatibel is met het oude.",
    examples: [
      { domain: "science", icon: "🔬", text: "Ptolemaeïsch → Copernicaans stelsel. Geocentrisme was het paradigma; anomalieën (planeetbewegingen) stapelden zich op; Copernicus initieerde de revolutie." },
      { domain: "business", icon: "💼", text: "Fysieke retail → e-commerce was geen geleidelijke verbetering, maar een paradigmaverschuiving. Bedrijven die bleven denken in het oude paradigma (Blockbuster, Kodak) verdwenen." },
      { domain: "daily", icon: "🏠", text: "Smartphones waren niet 'een betere telefoon'; ze verschoven het paradigma van communicatie, navigatie, fotografie en meer tegelijk." }
    ],
    relatedPrinciples: ["falsification", "black-swan", "epistemic-humility"],
  },
  {
    id: "abduction",
    title: "Abductie (Beste Verklaring)",
    difficulty: 3,
    emoji: "🔍",
    academicCategory: "Epistemologie",
    skillCategory: "Beter Redeneren",
    definition: "Abductie (ook: inference to the best explanation) is het kiezen van de hypothese die de beschikbare feiten het best verklaart. Niet de meest zekere, maar de meest waarschijnlijke verklaring.",
    abstractExample: "Gegeven feiten F, zoek de hypothese H die F het best verklaart. 'Best' betekent: simpelste, meest coherente, meest overeenstemmende met achtergrondkennis. Sherlock Holmes-redenering.",
    examples: [
      { domain: "science", icon: "🔬", text: "Dokters stellen een diagnose via abductie: welke ziekte verklaart deze combinatie van symptomen het best? Ze kiezen niet de zekere diagnose, maar de meest waarschijnlijke." },
      { domain: "business", icon: "💼", text: "Omzet daalt plotseling. Verklaringen: seizoensgebondenheid, concurrent, productprobleem, PR-crisis. Je kiest de hypothese die alle data het best verklaart en test die eerst." },
      { domain: "daily", icon: "🏠", text: "Je komt thuis: de deur staat open, een lamp is kapot. Inbraak of wind? Je kiest de verklaring die alle feiten het best dekt." }
    ],
    relatedPrinciples: ["occams-razor", "falsification", "deduction-induction"],
  },
  {
    id: "self-serving-bias",
    title: "Zelfbevestigingsbias",
    difficulty: 2,
    emoji: "😇",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    definition: "We schrijven successen toe aan onze eigen capaciteiten en mislukkingen aan externe factoren. Dit beschermt ons zelfbeeld maar vertekent ons leren van fouten.",
    abstractExample: "Bij succes: 'Dat heb ik gedaan door mijn talent en inspanning.' Bij mislukking: 'Dat was pech, timing, of de fout van anderen.' De attributie is systematisch asymmetrisch.",
    examples: [
      { domain: "science", icon: "🔬", text: "Onderzoekers schrijven succesvolle publicaties toe aan hun inzichten; mislukte experimenten aan slechte apparatuur of ongeschikte proefpersonen." },
      { domain: "business", icon: "💼", text: "Een manager pakt de eer voor een succesvol kwartaal, maar wijt een slecht kwartaal aan de marktomstandigheden. Beide oorzaken spelen mee, maar de attribuut is scheef." },
      { domain: "daily", icon: "🏠", text: "Je haalt een goed cijfer: 'Ik heb hard gestudeerd.' Je haalt een slecht cijfer: 'De docent toetst oneerlijk.'" }
    ],
    relatedPrinciples: ["confirmation-bias", "fundamental-attribution-error", "dunning-kruger"],
  },
  {
    id: "time-value-money",
    title: "Tijdswaarde van Geld",
    difficulty: 3,
    emoji: "💰",
    academicCategory: "Besliskunde",
    skillCategory: "Beter Beslissen",
    definition: "Geld dat je nu hebt is meer waard dan hetzelfde bedrag in de toekomst, omdat je het kunt investeren en rendement kunt maken. Toekomstige geldstromen moeten worden 'verdisconteerd' naar hun huidige waarde.",
    abstractExample: "€100 nu is meer waard dan €100 over een jaar. Bij 5% rente is €100 nu equivalent aan €105 over een jaar. De 'netto contante waarde' verdisconteert alle toekomstige geldstromen naar vandaag.",
    examples: [
      { domain: "science", icon: "🔬", text: "Kosten-batenanalyses van overheidsprojecten gebruiken verdiscontering: een voordeel van €1 miljoen over 20 jaar is nu veel minder waard bij een discontovoet van 5%." },
      { domain: "business", icon: "💼", text: "Investeerders berekenen de netto contante waarde (NPV) van projecten: alle toekomstige kasstromen teruggerekend naar vandaag. Positieve NPV = rendabel." },
      { domain: "daily", icon: "🏠", text: "Waarom is een loterijprijs van €1 miljoen in 20 jaarlijkse termijnen minder waard dan €1 miljoen ineens? Tijdswaarde van geld." }
    ],
    relatedPrinciples: ["opportunity-cost", "hyperbolic-discounting", "expected-value"],
  },
  {
    id: "dunbar-number",
    title: "Getal van Dunbar",
    difficulty: 2,
    emoji: "👨‍👩‍👧‍👦",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    definition: "De cognitieve limiet voor het aantal stabiele sociale relaties dat een mens kan onderhouden is ca. 150. Groepen die groter zijn, vereisen formele hiërarchieën en regels om samen te werken.",
    abstractExample: "Robin Dunbar: de neocortexomvang van primaten correleert met groepsgrootte. Voor mensen is de voorspelde groep ~150. Grotere groepen vereisen bureaucratie; kleinere zijn stabiel zonder formele structuur.",
    examples: [
      { domain: "science", icon: "🔬", text: "Historische militaire eenheden (compagnie ~150 man), traditionele dorpen en neolithische nederzettingen convergeren opvallend naar ~150 mensen." },
      { domain: "business", icon: "💼", text: "Gore-Tex (W.L. Gore) limiteert bewust zijn fabrieken tot ~150 medewerkers. Als de grens bereikt is, opent het een nieuwe fabriek – minder bureaucratie, meer cohesie." },
      { domain: "daily", icon: "🏠", text: "Op sociale media heb je misschien 500 contacten, maar actief onderhoud je waarschijnlijk relaties met ~150 of minder – de rest zijn 'slapende' connecties." }
    ],
    relatedPrinciples: ["social-proof", "reciprocity", "tragedy-commons"],
  },
  {
    id: "locus-of-control",
    title: "Locus of Control",
    difficulty: 2,
    emoji: "🎮",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    definition: "De mate waarin mensen geloven dat zij (intern) of externe krachten (extern) de uitkomsten in hun leven bepalen. Een interne locus correleert met meer initiatief, doorzettingsvermogen en veerkracht.",
    abstractExample: "Intern: 'Mijn inspanning en keuzes bepalen mijn uitkomsten.' Extern: 'Succes of mislukking hangt af van geluk, anderen of het systeem.' Beide extremen zijn onrealistisch; de realiteit is altijd gemengd.",
    examples: [
      { domain: "science", icon: "🔬", text: "Rotter (1954) ontwikkelde de locus-of-control-schaal. Studies tonen dat mensen met een interne locus gemiddeld gezonder zijn, hogere schoolprestaties halen en meer tevreden zijn met hun werk." },
      { domain: "business", icon: "💼", text: "Ondernemers scoren doorgaans hoger op interne locus: ze geloven dat hun beslissingen het verschil maken. Extreme interne locus kan echter leiden tot overschatting van eigen controle." },
      { domain: "daily", icon: "🏠", text: "Iemand die denkt dat zijn gezondheid puur door genen bepaald wordt (externe locus), is minder geneigd gezond te leven. Iemand met interne locus zal eerder sport en voeding aanpassen." }
    ],
    relatedPrinciples: ["self-serving-bias", "planning-fallacy", "dunning-kruger"],
    exercises: [{
      type: "multiple-choice",
      question: "Welke uitspraak toont een interne locus of control?",
      options: [
        "\"Ik had gewoon pech bij dat sollicitatiegesprek\"",
        "\"Als ik harder oefen, verbeter ik mijn resultaten\"",
        "\"Succes hangt grotendeels af van de omstandigheden\"",
        "\"De docent was oneerlijk tegenover mij\""
      ],
      correct: 1,
      feedback: "Juist! Een interne locus of control betekent dat je gelooft dat jouw eigen inspanning en keuzes de uitkomsten beïnvloeden. 'Als ik harder oefen, verbeter ik' weerspiegelt dit geloof in eigen controle. De andere antwoorden schrijven uitkomsten toe aan externe factoren (pech, omstandigheden, anderen)."
    }],
    creativePrompt: "Denk aan een recente uitdaging of tegenslag. Welke elementen had je echt in de hand, en welke niet? Hoe verhoudt jouw interne vs. externe locus zich tot hoe je hiermee omgaat?",
    aiHelperPrompts: [
      "In welke situaties heb jij de neiging om succes of falen aan externe factoren toe te schrijven?",
      "Hoe kan een te sterke interne locus ook een nadeel zijn?",
      "Hoe cultiveer je een gezonde interne locus of control zonder zelfkritiek te overdrijven?"
    ]
  },

  // ── EXTRA PRINCIPES – BATCH 6 (Organisatie & Besliskunde) ──
  {
    id: "goodharts-law",
    title: "Wet van Goodhart",
    difficulty: 3,
    emoji: "📏",
    academicCategory: "Besliskunde",
    skillCategory: "Beter Beslissen",
    definition: "Zodra een maatstaf een doel wordt, houdt het op een goede maatstaf te zijn. Mensen optimaliseren voor de meting in plaats van voor wat de meting probeerde te vatten.",
    abstractExample: "Als prestatie-indicator M het doel wordt, wordt M geoptimaliseerd ten koste van het onderliggende doel D dat M moest meten. M ≠ D meer zodra M beloond wordt.",
    examples: [
      { domain: "science", icon: "🔬", text: "Wetenschappers worden beoordeeld op publicatieaantal → meer publicaties maar lagere gemiddelde kwaliteit. Het aantal publiceert als doel vervangt het eigenlijke doel: kennis vooruitbrengen." },
      { domain: "business", icon: "💼", text: "Callcenter-medewerkers worden beoordeeld op gespreksduur → gesprekken worden kunstmatig kort gehouden, problemen worden niet echt opgelost." },
      { domain: "daily", icon: "🏠", text: "Britse koloniale overheid in India beloonde de inlevering van kobrakoppen → mensen gingen cobra's kweken voor de beloning. Het cobra-effect in de praktijk." }
    ],
    relatedPrinciples: ["cobra-effect", "moral-hazard", "second-order-effects"],
  },
  {
    id: "hanlons-razor",
    title: "Scheermes van Hanlon",
    difficulty: 2,
    emoji: "🪒",
    academicCategory: "Epistemologie",
    skillCategory: "Beter Redeneren",
    definition: "Schrijf nooit toe aan kwade wil wat voldoende verklaard kan worden door incompetentie, onwetendheid of onachtzaamheid. De meest parsimonische verklaring voor fouten is zelden slechtheid.",
    abstractExample: "Als actie A een negatief gevolg heeft voor jou, zijn er twee verklaringen: A is bewust kwaadaardig gedaan, of A is het gevolg van incompetentie/onwetendheid. Hanlon's scheermes zegt: kies de tweede verklaring tenzij je bewijs hebt voor de eerste.",
    examples: [
      { domain: "science", icon: "🔬", text: "Een slechte wetenschapper publiceert onjuiste resultaten. Is het fraude of slechte methode? Hanlon zegt: ga uit van methodologische fouten tenzij bewijs wijst op opzettelijke misleiding." },
      { domain: "business", icon: "💼", text: "Een collega stuurt een e-mail die jouw werk bekritiseert. Is het sabotage of slordigheid? Hanlon's scheermes suggereert: ga uit van slechte communicatie, niet slechte intenties." },
      { domain: "daily", icon: "🏠", text: "Je buurman parkeert herhaaldelijk voor jouw oprit. Is hij vijandig of gedachteloos? Waarschijnlijk onachtzaam." }
    ],
    relatedPrinciples: ["occams-razor", "fundamental-attribution-error", "self-serving-bias"],
  },
  {
    id: "status-quo-bias",
    title: "Status-quo-bias",
    difficulty: 2,
    emoji: "🪨",
    academicCategory: "Psychologie",
    skillCategory: "Beter Beslissen",
    definition: "We geven de voorkeur aan de huidige situatie boven verandering, zelfs als de verandering objectief beter is. Afwijking van de status quo voelt als een verlies, niet als een gemiste kans.",
    abstractExample: "Gegeven opties A (huidige situatie) en B (beter alternatief), kiezen mensen vaker A dan rationeel te rechtvaardigen is. De 'default' heeft een buitenproportioneel grote aantrekkingskracht.",
    examples: [
      { domain: "science", icon: "🔬", text: "Orgaandonatie: landen met opt-out (je bent automatisch donor tenzij je je afmeldt) hebben 90%+ donorpercentages. Opt-in landen hebben 10-30%. De default is bijna allesbepalend." },
      { domain: "business", icon: "💼", text: "Werknemers kiezen zelden hun pensioenbijdrage actief om; de standaard instelling van de werkgever wordt doorgaans behouden, ook als een hogere bijdrage beter is." },
      { domain: "daily", icon: "🏠", text: "Je gebruikt nog steeds dezelfde bank, hetzelfde abonnement, dezelfde supermarkt – niet omdat het de beste keuze is, maar omdat overstappen moeite kost." }
    ],
    relatedPrinciples: ["loss-aversion", "sunk-cost-fallacy", "choice-overload"],
  },
  {
    id: "ikea-effect",
    title: "IKEA-effect",
    difficulty: 2,
    emoji: "🪛",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    definition: "We hechten onevenredig veel waarde aan dingen die we zelf hebben gemaakt of samengesteld, ongeacht de objectieve kwaliteit. Eigen inspanning verhoogt de gepercipieerde waarde.",
    abstractExample: "Als persoon A product P zelf in elkaar zet en persoon B een identiek kant-en-klaar product krijgt, waardeert A het product hoger dan B. De inspanning creëert een emotionele binding.",
    examples: [
      { domain: "science", icon: "🔬", text: "Norton, Mochon & Ariely (2011): deelnemers boden meer voor origami die ze zelf hadden gevouwen dan voor identieke origami van professionals. Ze overschatten hun eigen creaties." },
      { domain: "business", icon: "💼", text: "IKEA verkoopt platte pakketten niet alleen voor efficiënt transport – klanten die meubels zelf monteren waarderen ze meer en zijn loyaler aan het merk." },
      { domain: "daily", icon: "🏠", text: "Zelfgekookt eten smaakt (subjectief) beter dan identiek bereid eten van een restaurant. De inspanning van het koken verhoogt de ervaren waarde." }
    ],
    relatedPrinciples: ["sunk-cost-fallacy", "ownership-effect", "reciprocity"],
  },
  {
    id: "choice-overload",
    title: "Keuzeparadox",
    difficulty: 2,
    emoji: "😵",
    academicCategory: "Psychologie",
    skillCategory: "Beter Beslissen",
    definition: "Te veel keuzes leiden niet tot meer vrijheid maar tot verlamming, slechtere beslissingen en minder tevredenheid met de gemaakte keuze. Boven een optimaal aantal opties neemt de besliskwaliteit af.",
    abstractExample: "Bij n opties neemt de cognitieve last toe met n. Boven een drempel (empirisch vaak 7±2 tot contextafhankelijk) daalt de kans op een beslissing en de tevredenheid na de keuze.",
    examples: [
      { domain: "science", icon: "🔬", text: "Iyengar & Lepper (2000): jam-experiment. 24 soorten jam trok meer bezoekers, maar 6 soorten leidde tot 10× meer aankopen. Meer keuze = minder actie." },
      { domain: "business", icon: "💼", text: "Netflix verwijderde honderden titels en zag de kijktijd stijgen. Te veel keuze leidt tot het eindeloos scrollen zonder iets te kijken." },
      { domain: "daily", icon: "🏠", text: "In een restaurant met 200 gerechten bestel je minder zeker en ben je minder tevreden dan in een restaurant met 15 goed gekozen opties." }
    ],
    relatedPrinciples: ["status-quo-bias", "satisficing", "anchoring"],
  },
  {
    id: "parkinsons-law",
    title: "Wet van Parkinson",
    difficulty: 2,
    emoji: "⏰",
    academicCategory: "Organisatie",
    skillCategory: "Beter Beslissen",
    definition: "Werk vult de tijd die ervoor beschikbaar is. Hoe ruimer de deadline, hoe meer het werk uitdijt – niet door meer kwaliteit, maar door uitstelgedrag, perfectiedrang en onnodige uitbreidingen.",
    abstractExample: "Als taak T tijdsconstante D heeft, neemt de feitelijke werktijd toe naar D, ongeacht hoe lang T intrinsiek duurt. Krappe deadlines dwingen prioritering en focus.",
    examples: [
      { domain: "science", icon: "🔬", text: "C. Northcote Parkinson (1955): ambtenarenapparaten groeien ongeacht werkvolume. Een gepensioneerde vrouw schrijft in een uur een brief; een bureaucratie besteedt er een dag aan." },
      { domain: "business", icon: "💼", text: "Een vergadering van 2 uur besteedt aan een 10-minutentaak precies 2 uur. Dezelfde vergadering van 30 minuten rondt de taak af in 30 minuten." },
      { domain: "daily", icon: "🏠", text: "Een rapport dat je eigenlijk in een dagdeel kunt schrijven, neemt een week als je een week hebt. De taak dijt uit om de beschikbare tijd te vullen." }
    ],
    relatedPrinciples: ["planning-fallacy", "bikeshedding", "satisficing"],
  },
  {
    id: "cobra-effect",
    title: "Cobra-effect",
    difficulty: 3,
    emoji: "🐍",
    academicCategory: "Besliskunde",
    skillCategory: "Beter Beslissen",
    definition: "Een oplossing die het oorspronkelijke probleem erger maakt doordat de prikkel het tegenovergestelde gedrag uitlokt van wat beoogd werd. Slecht ontworpen beloningen en regels creëren perverse prikkels.",
    abstractExample: "Overheid wil probleem P verminderen → beloont/straft indicator I → mensen optimaliseren voor I op manieren die P doen toenemen. De interventie verergert wat ze wilde oplossen.",
    examples: [
      { domain: "science", icon: "🔬", text: "Brits India: overheid betaalde beloning voor dode cobra's om de populatie te verminderen. Indiërs begonnen cobra's te kweken voor de beloning → na stopzetting werden ze vrijgelaten → meer cobra's dan ooit." },
      { domain: "business", icon: "💼", text: "Om de klantenservicedruk te verminderen, werd een FAQ-pagina toegevoegd. Maar de FAQ genereerde meer vragen dan hij beantwoordde – mensen die de FAQ niet lazen, raakten nu verwarder." },
      { domain: "daily", icon: "🏠", text: "Ouder verbiedt kind snoep volledig → kind wordt obsessief met snoep en eet meer bij vrienden thuis dan het anders zou doen." }
    ],
    relatedPrinciples: ["goodharts-law", "second-order-effects", "moral-hazard"],
  },
  {
    id: "chestertons-fence",
    title: "Hek van Chesterton",
    difficulty: 3,
    emoji: "🚧",
    academicCategory: "Epistemologie",
    skillCategory: "Beter Redeneren",
    definition: "Verwijder of verander niets voordat je begrijpt waarom het er is. Als je het doel van iets niet kunt verklaren, begrijp je het systeem onvoldoende om er veilig iets aan te veranderen.",
    abstractExample: "Als je een hek tegenkomt en zijn doel niet begrijpt, mag je het niet weghalen. Begrijp eerst waarom het er staat; dan kun je besluiten of weghalen verstandig is.",
    examples: [
      { domain: "science", icon: "🔬", text: "Darwinistische 'rudimentaire' organen (appendix, wijsheidstanden) werden lang als nutteloos gezien. Onderzoek toont aan dat veel een functie hebben die we eerder niet begrepen." },
      { domain: "business", icon: "💼", text: "Een nieuwe CTO schrapt een 'verouderd' proces zonder te begrijpen waarvoor het diende. Later blijkt het een workaround te zijn voor een fundamenteel systeemlimiet." },
      { domain: "daily", icon: "🏠", text: "Je verwijdert een 'onnodige' stap uit een recept. Het gerecht mislukt. Die stap had een functie die je niet begreep." }
    ],
    relatedPrinciples: ["second-order-effects", "occams-razor", "epistemic-humility"],
    exercises: [{
      type: "multiple-choice",
      question: "Een nieuwe medewerker ziet een stap in het werkproces die 'nergens goed voor lijkt'. Wat zou Chesterton adviseren?",
      options: [
        "Schaf de stap meteen af — onnodige complexiteit moet weg",
        "Vraag eerst waarom de stap er is voordat je hem verwijdert",
        "Stel een stemming in om democratisch te beslissen",
        "Documenteer de stap en laat hem verder ongemoeid"
      ],
      correct: 1,
      feedback: "Correct! Het Hek van Chesterton: begrijp eerst waarom iets bestaat voordat je het verwijdert. De stap heeft waarschijnlijk een functie die de nieuwe medewerker nog niet ziet. Als je die functie begrijpt, kun je beter beoordelen of de stap echt overbodig is of een cruciaal probleem oplost."
    }],
    creativePrompt: "Herinner je een moment waarop jij (of iemand om je heen) iets veranderde of afschafte zonder de reden te begrijpen — met onverwachte gevolgen. Wat had je eerst moeten uitzoeken?",
    aiHelperPrompts: [
      "Hoe vraag je op een respectvolle manier naar de reden achter een bestaande regel of werkwijze?",
      "Wanneer is het wél gerechtvaardigd om iets te verwijderen zonder de volledige geschiedenis te kennen?",
      "Hoe past het Hek van Chesterton in het denken over organisatieverandering?"
    ]
  },

  // ── EXTRA PRINCIPES – BATCH 7 (Psychologie & Organisatie) ──
  {
    id: "brooks-law",
    title: "Wet van Brooks",
    difficulty: 3,
    emoji: "👷",
    academicCategory: "Organisatie",
    skillCategory: "Beter Beslissen",
    definition: "Meer mensen toevoegen aan een laat softwareproject maakt het nog later. Nieuwe teamleden vereisen inwerktijd, communicatiekosten stijgen kwadratisch en de productiviteit van het bestaande team daalt.",
    abstractExample: "Als project P achterloopt en n mensen worden toegevoegd, zijn de inleerkosten I(n) en de extra communicatiekosten C(n²) initieel groter dan de extra productiviteit. Op korte termijn wordt het project later, niet eerder.",
    examples: [
      { domain: "science", icon: "🔬", text: "Fred Brooks (The Mythical Man-Month, 1975): 'Negen vrouwen kunnen geen baby in één maand maken.' Sommige taken zijn inherent sequentieel en schalen niet met mensen." },
      { domain: "business", icon: "💼", text: "Een softwarebedrijf voegt 5 extra developers toe aan een al-late release. De bestaande developers besteden nu 30% van hun tijd aan onboarding → de deadline schuift nog verder op." },
      { domain: "daily", icon: "🏠", text: "Te veel koks bederven de broth: in een keuken met te veel medewerkers stijgen de coördinatiekosten sneller dan de output." }
    ],
    relatedPrinciples: ["planning-fallacy", "dunbar-number", "bikeshedding"],
    exercises: [{
      type: "multiple-choice",
      question: "Een softwareproject loopt 6 weken achter op de deadline. De projectmanager voegt 4 extra ontwikkelaars toe. Wat voorspelt de Wet van Brooks op korte termijn?",
      options: [
        "Het project haalt nu wel de deadline",
        "Het project loopt nog verder achter",
        "De kwaliteit van de code verbetert sterk",
        "De 4 nieuwe mensen compenseren precies de achterstand"
      ],
      correct: 1,
      feedback: "Juist! De Wet van Brooks: meer mensen toevoegen aan een laat project maakt het nog later. Nieuwe ontwikkelaars moeten ingewerkt worden, de communicatie tussen teamleden neemt kwadratisch toe, en de productiviteit van bestaande teamleden daalt doordat zij hun nieuwe collega's moeten begeleiden."
    }],
    creativePrompt: "Herinner je een situatie — in werk, studie of privé — waarbij meer mensen toevoegen aan een probleem het erger maakte in plaats van beter. Wat was de oorzaak?",
    aiHelperPrompts: [
      "Waarom schalen sommige taken niet met het aantal mensen dat eraan werkt?",
      "In welke situaties helpt het wél om meer mensen toe te voegen aan een project?",
      "Hoe verhoudt de Wet van Brooks zich tot het concept van afnemende meeropbrengsten?"
    ]
  },
  {
    id: "abilene-paradox",
    title: "Abilene-paradox",
    difficulty: 3,
    emoji: "🚌",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    definition: "Een groep neemt collectief een beslissing die niemand individueel wil, omdat iedereen denkt dat de anderen het willen en niemand zijn echte voorkeur uitspreekt.",
    abstractExample: "Ieder individu I heeft voorkeur P, maar denkt dat de rest voorkeur Q heeft. Om te conformeren spreekt niemand P uit. De groep besluit tot Q – wat niemand wilde. Mis-communicatie over groepsvoorkeuren.",
    examples: [
      { domain: "science", icon: "🔬", text: "Jerry Harvey (1974): een familie rijdt naar Abilene terwijl niemand dat eigenlijk wil – iedereen dacht dat de anderen het wilden. Klassiek gedragseconomisch fenomeen." },
      { domain: "business", icon: "💼", text: "Een MT stemt in met een dure conferentie omdat niemand als eerste 'nee' wil zeggen. Na afloop blijkt iedereen er twijfels over had maar conformisme overheerste." },
      { domain: "daily", icon: "🏠", text: "Vrienden gaan naar een restaurant dat niemand leuk vindt omdat iedereen dacht dat de anderen het wilden. Niemand sprak zijn echte voorkeur uit." }
    ],
    relatedPrinciples: ["groupthink", "social-proof", "bikeshedding"],
  },
  {
    id: "bikeshedding",
    title: "Bikeshedding (Trivialiteitswet)",
    difficulty: 2,
    emoji: "🚲",
    academicCategory: "Organisatie",
    skillCategory: "Beter Beslissen",
    definition: "Groepen besteden onevenredig veel tijd aan triviale, begrijpelijke kwesties en te weinig aan complexe, belangrijke ones. Iedereen kan meepraten over een fietsenstalling; niemand snapt de kernreactor.",
    abstractExample: "Bij agenda-items van verschillende complexiteit neemt de groepsdiscussietijd toe met de begrijpelijkheid, niet met de importantie. Triviaal maar begrijpelijk > complex maar cruciaal.",
    examples: [
      { domain: "science", icon: "🔬", text: "C. Northcote Parkinson: een comité keurt een kernreactor in 2 minuten goed (te complex om te bespreken) en debatteert 45 minuten over de kleur van de fietsenstalling." },
      { domain: "business", icon: "💼", text: "Een productvergadering besteedt 5 minuten aan de strategische roadmap en 40 minuten aan de kleur van de knop in de UI. Iedereen heeft een mening over de knop." },
      { domain: "daily", icon: "🏠", text: "Een buurtcomité beslist snel over een grootschalig renovatieplan maar debatteert eindeloos over de soort bloembakken op straat." }
    ],
    relatedPrinciples: ["parkinsons-law", "abilene-paradox", "opportunity-cost"],
  },
  {
    id: "hindsight-bias",
    title: "Achterafbias",
    difficulty: 2,
    emoji: "🔮",
    academicCategory: "Psychologie",
    skillCategory: "Beter Redeneren",
    definition: "Na het kennen van een uitkomst lijkt die achteraf voorspelbaar en onvermijdelijk te zijn geweest, ook al was dat van tevoren niet zo. We overschatten hoe goed we het hadden kunnen weten.",
    abstractExample: "Na het kennen van uitkomst O oordelen mensen dat O 'duidelijk' was. Dit vertekent evaluaties van beslissingen: een slechte uitkomst doet een beslissing als onverstandig lijken, ook als ze op basis van beschikbare informatie rationeel was.",
    examples: [
      { domain: "science", icon: "🔬", text: "Na de financiële crisis van 2008 zeiden velen: 'Het was zo duidelijk dat dit zou gebeuren.' Maar vóór de crisis hadden weinig experts het voorspeld." },
      { domain: "business", icon: "💼", text: "Na een mislukte productlancering: 'We hadden dit kunnen weten.' Maar op het moment van beslissing was de informatie anders geïnterpreteerd." },
      { domain: "daily", icon: "🏠", text: "Na een ongeluk: 'Ik wist altijd al dat die weg gevaarlijk was.' Maar was die kennis er echt vóór het ongeluk, of lijkt het zo achteraf?" }
    ],
    relatedPrinciples: ["self-serving-bias", "confirmation-bias", "overconfidence"],
  },
  {
    id: "peak-end-rule",
    title: "Piek-eindregel",
    difficulty: 2,
    emoji: "🏔️",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    definition: "We beoordelen ervaringen op basis van het emotionele hoogtepunt en het einde – niet het gemiddelde of de totale duur. Een korte negatieve ervaring met een goed einde wordt beter herinnerd dan een lange positieve ervaring met een slecht einde.",
    abstractExample: "Herinnering aan ervaring E = f(piek, einde) en niet f(gemiddelde). De duur van E heeft nauwelijks invloed op de beoordeling achteraf (durationeglect).",
    examples: [
      { domain: "science", icon: "🔬", text: "Kahneman's colonoscopie-experiment: patiënten met een langer ongemakkelijk einde beoordeelden de procedure slechter dan patiënten met een kortere maar minder ongemakkelijke finale, ook al was de totale pijn groter bij groep 2." },
      { domain: "business", icon: "💼", text: "Vluchten die vroeg vertragen maar op tijd landen worden beter beoordeeld dan vluchten die op tijd vertrekken maar vertraagd aankomen. Het einde bepaalt de herinnering." },
      { domain: "daily", icon: "🏠", text: "Een vakantie met een geweldig laatste weekend wordt beter herinnerd dan een vakantie met tien goede dagen en een verregende laatste dag." }
    ],
    relatedPrinciples: ["loss-aversion", "availability-heuristic", "hindsight-bias"],
  },
  {
    id: "curse-of-knowledge",
    title: "Vloek van de Kennis",
    difficulty: 2,
    emoji: "🧠",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    definition: "Als je iets weet, kun je je nauwelijks voorstellen hoe het is om het niet te weten. Experts communiceren onduidelijk met beginners omdat ze vergeten hoe complex hun kennis is voor iemand zonder die achtergrond.",
    abstractExample: "Expert E weet feit F. E kan zich moeilijk inleven in de perspectieven van niet-experts die F niet weten. Dit leidt tot communicatie die te veel aannames maakt over gedeelde kennis.",
    examples: [
      { domain: "science", icon: "🔬", text: "Heath & Heath (Made to Stick): getikte melodieën. Tikkers dachten dat 50% van de luisteraars de melodie zou raden; werkelijk slaagde 2,5%. De tikker 'hoorde' de melodie in zijn hoofd; de luisteraar hoorde slechts tikken." },
      { domain: "business", icon: "💼", text: "Een expert schrijft documentatie die voor collega-experts begrijpelijk is, maar voor nieuwe gebruikers volledig ondoorgrondelijk. Ze vergeten hoe ze zelf leerden." },
      { domain: "daily", icon: "🏠", text: "Een ervaren fietser legt iemand uit hoe je fietst: 'Je houdt gewoon je balans.' Wat voor hem vanzelfsprekend is, is voor de beginner een mysterie." }
    ],
    relatedPrinciples: ["dunning-kruger", "fundamental-attribution-error", "anchoring"],
  },
  {
    id: "overfitting",
    title: "Overfitting",
    difficulty: 3,
    emoji: "📈",
    academicCategory: "Statistiek",
    skillCategory: "Beter Redeneren",
    definition: "Een model dat te precies is afgesteld op trainingsdata past slecht op nieuwe, onziene data. Het heeft ruis en toevallige patronen geleerd in plaats van echte structuur. Meer complexiteit leidt hier tot slechtere generalisatie.",
    abstractExample: "Model M met k parameters past beter op trainingsdata naarmate k groeit. Maar als k te hoog is, past M op ruis. De test-fout daalt aanvankelijk met k maar stijgt daarna – de bias-variantie-afweging.",
    examples: [
      { domain: "science", icon: "🔬", text: "Een epidemiologisch model dat 50 variabelen past op 60 gevallen zal de trainingsdata perfect verklaren maar nieuwe gevallen slecht voorspellen. Te weinig data voor te veel parameters." },
      { domain: "business", icon: "💼", text: "Een handelsstrategie die historische data perfect beschrijft, faalt op nieuwe markten. De strategie leerde marktspecifieke ruis, geen algemene patronen." },
      { domain: "daily", icon: "🏠", text: "Je generaliseert op basis van drie ervaringen met één type persoon. Je 'model' is overfit op een te kleine steekproef en voorspelt nieuwe ontmoetingen slecht." }
    ],
    relatedPrinciples: ["occams-razor", "multiple-comparisons", "hasty-generalization"],
    exercises: [{
      type: "multiple-choice",
      question: "Een handelsstrategie beschrijft historische beursdata perfect maar faalt volledig op nieuwe markten. Wat is het probleem?",
      options: [
        "De historische data was te oud",
        "Het model had te weinig parameters",
        "Het model heeft toevallige patronen en ruis geleerd in plaats van echte structuur",
        "De nieuwe markten zijn fundamenteel anders dan alle voorgaande markten"
      ],
      correct: 2,
      feedback: "Correct! Dit is overfitting. Een model dat te precies is afgesteld op trainingsdata leert ook ruis en toevalspatronen. Het generaliseert daardoor slecht naar nieuwe, onziene data. Meer complexiteit leidt na een punt tot slechtere generalisatie — de kern van de bias-variantie-afweging."
    }],
    creativePrompt: "Herken je een moment waarop jij of iemand anders een 'regel' formuleerde op basis van te weinig voorbeelden, die later niet bleek te kloppen? Beschrijf de situatie.",
    aiHelperPrompts: [
      "Hoe weet je of je conclusie gebaseerd is op een patroon of op toeval?",
      "Wat is de rol van Occam's scheermes bij het voorkomen van overfitting in denken?",
      "Hoe past overfitting als concept buiten machine learning, in het dagelijks leven?"
    ]
  },

  // ── BATCH 8: 20 NIEUWE PRINCIPES ──────────────────────────────

  {
    id: "halo-effect",
    title: "Halo-effect",
    difficulty: 2,
    emoji: "😇",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    definition: "Eén positieve eigenschap van een persoon, product of merk kleurt onze beoordeling van al hun andere eigenschappen. Aantrekkelijke mensen worden automatisch als slimmer, vriendelijker en competenter gezien.",
    abstractExample: "Als persoon P eigenschap A heeft die positief beoordeeld wordt, dan worden P's andere eigenschappen B, C, D ook positiever beoordeeld – onafhankelijk van bewijs. De 'halo' straalt uit van A naar alles.",
    examples: [
      { domain: "business", icon: "💼", text: "Apple's designreputatie zorgt ervoor dat klanten ook aannemen dat Apple-producten betrouwbaarder en veiliger zijn – los van de feiten." },
      { domain: "science", icon: "🔬", text: "Thorndike (1920) toonde aan dat militaire officieren die als fysiek aantrekkelijk werden beoordeeld, ook hoger scoorden op intelligentie en leiderschap – zonder bewijs daarvoor." },
      { domain: "daily", icon: "🏠", text: "Een charismatische docent wordt automatisch als deskundiger ervaren, terwijl een saaie maar briljante docent als minder competent wordt gezien." }
    ],
    relatedPrinciples: ["confirmation-bias", "fundamental-attribution-error", "anchoring"],
  },
  {
    id: "mere-exposure-effect",
    title: "Blootstellingseffect",
    difficulty: 2,
    emoji: "🔄",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    definition: "We ontwikkelen een voorkeur voor dingen simpelweg omdat we er vaker aan worden blootgesteld. Bekendheid kweekt sympathie, zelfs als we ons de eerdere blootstelling niet herinneren.",
    abstractExample: "Na n blootstellingen aan stimulus S neemt de waardering voor S toe, zelfs als S neutraal of aanvankelijk licht negatief beoordeeld werd. Het effect werkt ook sublimin: zonder bewuste herkenning.",
    examples: [
      { domain: "business", icon: "💼", text: "Reclamecampagnes herhalen merknamen eindeloos. Zelfs als je de reclame bewust negeert, ontwikkel je een voorkeur voor het merk bij de volgende aankoopbeslissing." },
      { domain: "science", icon: "🔬", text: "Zajonc (1968): deelnemers beoordeelden Chinese karakters die ze vaker hadden gezien als 'mooier', zonder de betekenis te kennen." },
      { domain: "daily", icon: "🏠", text: "Een nummer dat je eerst irritant vond, ga je leuk vinden nadat je het tien keer op de radio hebt gehoord." }
    ],
    relatedPrinciples: ["availability-heuristic", "halo-effect", "social-proof"],
  },
  {
    id: "bystander-effect",
    title: "Omstandereffect",
    difficulty: 2,
    emoji: "👀",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    definition: "Hoe meer omstanders aanwezig zijn bij een noodsituatie, hoe minder waarschijnlijk het is dat iemand ingrijpt. De verantwoordelijkheid wordt onbewust verdeeld over alle aanwezigen.",
    abstractExample: "Bij n omstanders daalt de individuele verantwoordelijkheid naar 1/n. Iedereen denkt: 'Iemand anders zal wel helpen.' Het resultaat: niemand helpt.",
    examples: [
      { domain: "science", icon: "🔬", text: "Darley & Latané (1968): deelnemers die dachten alleen te zijn bij een noodgeval, hielpen in 85% van de gevallen. Bij 4 andere aanwezigen daalde dit naar 31%." },
      { domain: "business", icon: "💼", text: "Een e-mail naar het hele team ('Kan iemand dit oppakken?') leidt vaker tot niets dan een direct verzoek aan één persoon. Gedeelde verantwoordelijkheid is geen verantwoordelijkheid." },
      { domain: "daily", icon: "🏠", text: "Op een druk station zakt iemand in elkaar. Honderden mensen lopen door. Iedereen verwacht dat een ander zal helpen." }
    ],
    relatedPrinciples: ["social-proof", "tragedy-commons", "abilene-paradox"],
  },
  {
    id: "narrative-fallacy",
    title: "Narratieve Drogreden",
    difficulty: 2,
    emoji: "📖",
    academicCategory: "Epistemologie",
    skillCategory: "Beter Redeneren",
    definition: "We construeren achteraf coherente verhalen om willekeurige of complexe gebeurtenissen te verklaren. Ons brein zoekt causale verbanden en narratieven, zelfs waar die niet bestaan.",
    abstractExample: "Gegeven reeks gebeurtenissen E1, E2, E3 construeert het brein een verhaal: 'E1 veroorzaakte E2 wat leidde tot E3.' Dit verhaal voelt bevredigend maar is vaak een post-hoc constructie.",
    examples: [
      { domain: "business", icon: "💼", text: "Succesverhalen van bedrijven worden achteraf gepresenteerd als logische paden: 'Ze hadden een visie → ze voerden die uit → ze werden succesvol.' In werkelijkheid speelden toeval en geluk grote rollen." },
      { domain: "science", icon: "🔬", text: "Nassim Taleb (The Black Swan): we maken van willekeurige beursbewegingen achteraf logische verhalen. 'De markt daalde omdat investeerders nerveus waren' – dit is een verklaring achteraf, geen voorspelling." },
      { domain: "daily", icon: "🏠", text: "Je vertelt het verhaal van je carrière als een logisch pad, maar in werkelijkheid was het vol toevalligheden, gemiste kansen en onverwachte wendingen." }
    ],
    relatedPrinciples: ["hindsight-bias", "confirmation-bias", "post-hoc-ergo"],
  },
  {
    id: "conjunction-fallacy",
    title: "Conjunctiefout",
    difficulty: 2,
    emoji: "🔗",
    academicCategory: "Logica",
    skillCategory: "Beter Redeneren",
    definition: "We schatten de kans op twee gecombineerde gebeurtenissen vaak hoger in dan de kans op één van die gebeurtenissen alleen. Een specifiekere beschrijving voelt waarschijnlijker dan een algemene – maar is dat logisch nooit.",
    abstractExample: "P(A en B) ≤ P(A). Altijd. Maar als B het verhaal 'completer' maakt, schatten mensen P(A en B) hoger in dan P(A) alleen. Representativiteit overschaduwt logica.",
    examples: [
      { domain: "science", icon: "🔬", text: "Tversky & Kahneman's Linda-probleem: deelnemers vonden 'Linda is bankmedewerker én actief in de feministische beweging' waarschijnlijker dan 'Linda is bankmedewerker.' Logisch onmogelijk." },
      { domain: "business", icon: "💼", text: "'Ons product is populair bij millennials die yoga doen en biologisch eten' klinkt specifieker en geloofwaardiger dan 'ons product is populair bij millennials' – maar de eerste groep is per definitie kleiner." },
      { domain: "daily", icon: "🏠", text: "'Hij is vast een gepensioneerde wiskundeleraar die graag schaakt' voelt overtuigender dan 'hij is gepensioneerd' – maar de eerste beschrijving is altijd onwaarschijnlijker." }
    ],
    relatedPrinciples: ["representativeness-heuristic", "base-rate-fallacy", "availability-heuristic"],
  },
  {
    id: "simpsons-paradox",
    title: "Paradox van Simpson",
    difficulty: 3,
    emoji: "🔀",
    academicCategory: "Statistiek",
    skillCategory: "Beter Redeneren",
    definition: "Een trend die in elke subgroep zichtbaar is, kan verdwijnen of zelfs omdraaien als de subgroepen worden gecombineerd. Geaggregeerde data kan het tegenovergestelde tonen van wat er werkelijk gebeurt.",
    abstractExample: "Behandeling A is beter dan B in groep 1 én in groep 2. Maar als je de groepen combineert, lijkt B beter – omdat de groepen ongelijk verdeeld zijn. De samenstelling van de groepen vertekent het totaalbeeld.",
    examples: [
      { domain: "science", icon: "🔬", text: "Berkeley-toelatingsbias (1973): in elke faculteit werden vrouwen niet gediscrimineerd, maar het totaalcijfer suggereerde discriminatie. Vrouwen solliciteerden vaker bij competitievere faculteiten." },
      { domain: "business", icon: "💼", text: "Een bedrijf verlaagt de gemiddelde prijs per product maar verhoogt de omzet – omdat het nu meer dure producten verkoopt. De mix verandert, niet de individuele prijzen." },
      { domain: "daily", icon: "🏠", text: "Een dokter is beter dan een collega bij zowel milde als ernstige gevallen. Maar zijn totale slagingspercentage is lager – omdat hij meer ernstige gevallen krijgt." }
    ],
    relatedPrinciples: ["selection-bias", "base-rate-fallacy", "correlation-causation"],
  },
  {
    id: "endowment-effect",
    title: "Bezitseffect",
    difficulty: 2,
    emoji: "🏠",
    academicCategory: "Behavioral Economics",
    skillCategory: "Beter Beslissen",
    definition: "We waarderen dingen hoger zodra we ze bezitten. De prijs die we vragen om iets te verkopen is systematisch hoger dan wat we bereid zouden zijn om hetzelfde te kopen.",
    abstractExample: "Willingness to accept (WTA) > Willingness to pay (WTP) voor hetzelfde object. Bezit creëert een psychologische band die de objectieve waarde overstijgt.",
    examples: [
      { domain: "science", icon: "🔬", text: "Kahneman, Knetsch & Thaler (1990): studenten die een mok kregen, vroegen gemiddeld $7 om hem te verkopen. Studenten zonder mok boden gemiddeld $3 om hem te kopen. Zelfde mok, dubbele prijs." },
      { domain: "business", icon: "💼", text: "Onderhandelaars vragen meer voor hun eigen voorstel dan ze bereid zijn te betalen voor een identiek tegenvoorstel. Bezit van het idee verhoogt de gepercipieerde waarde." },
      { domain: "daily", icon: "🏠", text: "Je oude fiets staat al een jaar in de schuur. Iemand biedt €100 – 'Nee, hij is zeker €200 waard!' Maar zou jij €200 betalen voor dezelfde fiets van iemand anders?" }
    ],
    relatedPrinciples: ["loss-aversion", "ikea-effect", "status-quo-bias"],
  },
  {
    id: "decoy-effect",
    title: "Lokvogel-effect",
    difficulty: 2,
    emoji: "🪤",
    academicCategory: "Behavioral Economics",
    skillCategory: "Beter Beslissen",
    definition: "Door een derde, inferieure optie toe te voegen die op één optie lijkt, verschuift de voorkeur naar die optie. De 'lokvogel' wordt zelf niet gekozen maar beïnvloedt de keuze tussen de andere twee.",
    abstractExample: "Optie A en B zijn gelijkwaardig. Voeg optie C toe die duidelijk slechter is dan A maar niet vergelijkbaar met B. Nu kiest een meerderheid A – niet omdat A beter is, maar omdat C het vergelijken makkelijker maakt.",
    examples: [
      { domain: "business", icon: "💼", text: "The Economist: online-abonnement €59, print €125, online+print €125. De print-only optie (lokvogel) maakt de combo aantrekkelijk – niemand kiest print-only, maar het stuurt de keuze." },
      { domain: "science", icon: "🔬", text: "Ariely (2008): zonder lokvogel koos 68% de goedkope optie. Met lokvogel koos 84% de dure combo. Eén nutteloze optie verschoof het beslisgedrag radicaal." },
      { domain: "daily", icon: "🏠", text: "Een bioscoop biedt kleine popcorn (€4), grote (€7), en medium (€6.50). De medium is de lokvogel: bijna net zo duur als groot, wat groot de 'logische' keuze maakt." }
    ],
    relatedPrinciples: ["anchoring", "framing-effect", "choice-overload"],
  },
  {
    id: "principal-agent",
    title: "Principaal-agentprobleem",
    difficulty: 3,
    emoji: "🤵",
    academicCategory: "Besliskunde",
    skillCategory: "Beter Beslissen",
    definition: "Wanneer een persoon (de agent) handelt namens een ander (de principaal), kunnen hun belangen uiteenlopen. De agent kan zijn eigen belang nastreven ten koste van de principaal, vooral als de principaal het gedrag niet kan controleren.",
    abstractExample: "Principaal P huurt agent A in voor doel D. A heeft eigen belangen I ≠ D. Als P niet kan monitoren of A echt D nastreeft, kan A I nastreven. De oplossing: prikkels alignen of monitoring verbeteren.",
    examples: [
      { domain: "business", icon: "💼", text: "Aandeelhouders (principaal) huren een CEO (agent) in. De CEO kan risicovolle bonusstructuren nastreven die hemzelf verrijken maar het bedrijf op lange termijn schaden." },
      { domain: "science", icon: "🔬", text: "Een patiënt (principaal) vertrouwt een arts (agent). De arts kan onnodige behandelingen voorschrijven als hij per behandeling wordt betaald – zijn belang is niet identiek aan dat van de patiënt." },
      { domain: "daily", icon: "🏠", text: "Je huurt een makelaar in om je huis te verkopen. De makelaar verdient een percentage – hij wil snel verkopen, jij wilt de hoogste prijs. Jullie belangen zijn niet gelijk." }
    ],
    relatedPrinciples: ["moral-hazard", "goodharts-law", "tragedy-commons"],
  },
  {
    id: "information-asymmetry",
    title: "Informatieasymmetrie",
    difficulty: 3,
    emoji: "🔍",
    academicCategory: "Besliskunde",
    skillCategory: "Beter Beslissen",
    definition: "Wanneer één partij in een transactie meer of betere informatie heeft dan de andere, ontstaan marktverstoring en wantrouwen. De beter geïnformeerde partij kan dit uitbuiten.",
    abstractExample: "Verkoper V kent de kwaliteit van product P; koper K niet. V kan lage kwaliteit verkopen tegen hoge-kwaliteitsprijzen. K anticipeert dit → K biedt minder → hoge-kwaliteitsverkopers verlaten de markt → 'markt voor citroenen'.",
    examples: [
      { domain: "science", icon: "🔬", text: "Akerlof's Market for Lemons (1970): op de tweedehandsautomarkt weet de verkoper of de auto goed of slecht is. Kopers bieden gemiddeld → goede auto's verdwijnen van de markt." },
      { domain: "business", icon: "💼", text: "Bij een fusie weet het verkopende bedrijf meer over verborgen problemen dan de koper. Due diligence probeert deze informatiekloof te dichten." },
      { domain: "daily", icon: "🏠", text: "De huisverkoper weet van lekkage in de kelder; de koper niet. Zonder verplichte bouwkundige keuring profiteert de verkoper van informatieasymmetrie." }
    ],
    relatedPrinciples: ["moral-hazard", "principal-agent", "scarcity-effect"],
  },
  {
    id: "red-herring",
    title: "Afleidingsmanoeuvre (Red Herring)",
    difficulty: 1,
    emoji: "🐟",
    academicCategory: "Retorica",
    skillCategory: "Manipulatie Herkennen",
    definition: "Een irrelevant onderwerp introduceren om af te leiden van het oorspronkelijke argument. De afleidingsmanoeuvre verschuift de aandacht naar iets dat niet ter zake doet.",
    abstractExample: "Vraag Q wordt gesteld. In plaats van Q te beantwoorden, introduceert de spreker onderwerp R dat geen verband heeft met Q maar emotioneel of interessant genoeg is om de aandacht te verschuiven.",
    examples: [
      { domain: "business", icon: "💼", text: "Journalist: 'Waarom zijn de winstcijfers gedaald?' CEO: 'We investeren enorm in duurzaamheid en hebben net een prijs gewonnen.' De vraag wordt niet beantwoord." },
      { domain: "science", icon: "🔬", text: "'Moeten we kernenergie overwegen voor CO₂-reductie?' 'Maar denk aan de armoede in ontwikkelingslanden!' – relevant, maar niet het onderwerp." },
      { domain: "daily", icon: "🏠", text: "Kind: 'Waarom mag ik niet naar dat feestje?' Ouder: 'Heb je je huiswerk al af?' De vraag wordt ontweken met een nieuw onderwerp." }
    ],
    relatedPrinciples: ["straw-man-fallacy", "ad-hominem", "tu-quoque"],
  },
  {
    id: "circular-reasoning",
    title: "Cirkelredenering",
    difficulty: 1,
    emoji: "🔄",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    definition: "Een argument waarbij de conclusie al verondersteld wordt in de premisse. Het argument bewijst zichzelf met zichzelf – er wordt geen onafhankelijk bewijs geleverd.",
    abstractExample: "Premisse: A is waar omdat B. Bewijs voor B: B is waar omdat A. Het argument is een gesloten cirkel zonder externe onderbouwing.",
    examples: [
      { domain: "science", icon: "🔬", text: "'De Bijbel is waar want het is het woord van God. Hoe weet je dat? Omdat de Bijbel dat zegt.' De bron wordt bewezen door zichzelf." },
      { domain: "business", icon: "💼", text: "'Dit is het beste product op de markt. Hoe weet je dat? Omdat klanten het kopen. Waarom kopen ze het? Omdat het het beste is.' De conclusie is de premisse." },
      { domain: "daily", icon: "🏠", text: "'Ik heb gelijk omdat ik altijd gelijk heb. Hoe weet je dat? Omdat ik nu ook gelijk heb.' Er is geen onafhankelijk bewijs." }
    ],
    relatedPrinciples: ["burden-of-proof", "appeal-to-authority", "falsification"],
  },
  {
    id: "composition-fallacy",
    title: "Drogreden van Compositie",
    difficulty: 2,
    emoji: "🧱",
    academicCategory: "Logica",
    skillCategory: "Beter Redeneren",
    definition: "De foutieve aanname dat wat waar is voor de delen, ook waar moet zijn voor het geheel (of andersom). Eigenschappen van individuen gelden niet automatisch voor de groep, en groepseigenschappen niet voor individuen.",
    abstractExample: "Compositie: elke speler in team T is uitstekend, dus T is een uitstekend team. Divisie: bedrijf B is winstgevend, dus elke afdeling van B is winstgevend. Beide zijn ongeldig.",
    examples: [
      { domain: "business", icon: "💼", text: "Elk individu in het team is briljant, maar het team als geheel functioneert slecht door slechte communicatie. Individuele kwaliteit garandeert geen groepsprestatie." },
      { domain: "science", icon: "🔬", text: "Elke atoom in een tafel is grotendeels lege ruimte, maar de tafel is niet grotendeels lege ruimte (in de functionele zin). Microscopische eigenschappen vertalen niet direct naar macroscopische." },
      { domain: "daily", icon: "🏠", text: "Elk ingrediënt in een gerecht is heerlijk, maar samen smaken ze vreselijk. De som is niet altijd gelijk aan de delen." }
    ],
    relatedPrinciples: ["hasty-generalization", "ecological-fallacy", "fundamental-attribution-error"],
  },
  {
    id: "no-true-scotsman",
    title: "Geen-Echte-Schot",
    difficulty: 2,
    emoji: "🏴",
    academicCategory: "Logica",
    skillCategory: "Beter Argumenteren",
    definition: "Een ad-hoc aanpassing van de definitie om een tegenvoorbeeld te ontkrachten. In plaats van de claim te herzien, wordt het tegenvoorbeeld weggedefinieerd als 'geen echte' vertegenwoordiger van de groep.",
    abstractExample: "Claim: 'Geen A doet X.' Tegenvoorbeeld: 'B is een A en doet X.' Reactie: 'B is geen echte A.' De definitie wordt aangepast om de claim immuun te maken voor weerlegging.",
    examples: [
      { domain: "science", icon: "🔬", text: "'Echte wetenschap levert altijd reproduceerbare resultaten.' Wanneer een studie niet reproceert: 'Dat was geen echte wetenschap.' De definitie wordt aangepast om de claim te beschermen." },
      { domain: "business", icon: "💼", text: "'Goede managers verliezen nooit klanten.' Wanneer een gerespecteerde manager klanten verliest: 'Hij was dan geen echte goede manager.' De definitie verschuift." },
      { domain: "daily", icon: "🏠", text: "'Nederlanders zijn altijd direct.' Wanneer een Nederlander diplomatiek is: 'Ja, maar dat is geen echte Nederlander.' Het tegenvoorbeeld wordt weggedefinieerd." }
    ],
    relatedPrinciples: ["falsification", "confirmation-bias", "circular-reasoning"],
  },
  {
    id: "is-ought-problem",
    title: "Sein-Sollen-probleem (Hume)",
    difficulty: 3,
    emoji: "⚖️",
    academicCategory: "Ethiek",
    skillCategory: "Beter Argumenteren",
    definition: "Uit hoe de wereld is (feiten), kun je niet logisch afleiden hoe de wereld zou moeten zijn (normen). De sprong van 'is' naar 'ought' vereist een aanvullende morele premisse.",
    abstractExample: "Premisse: X is het geval (feit). Conclusie: X behoort het geval te zijn (norm). Dit is ongeldig zonder een aanvullende normatieve premisse die de brug slaat van feiten naar waarden.",
    examples: [
      { domain: "science", icon: "🔬", text: "'Dieren in de natuur doden elkaar. Dus is het moreel acceptabel voor mensen om te doden.' Het natuurlijke gedrag van dieren zegt niets over menselijke moraal." },
      { domain: "business", icon: "💼", text: "'De markt bepaalt dat CEO's 300× meer verdienen dan werknemers. Dus is dat eerlijk.' Marktuitkomsten zijn feiten, geen morele rechtvaardiging." },
      { domain: "daily", icon: "🏠", text: "'Mensen zijn van nature egoïstisch. Dus moeten we accepteren dat iedereen alleen voor zichzelf zorgt.' De menselijke natuur dicteert niet onze morele standaarden." }
    ],
    relatedPrinciples: ["appeal-to-nature", "burden-of-proof", "false-dilemma"],
  },
  {
    id: "normalcy-bias",
    title: "Normaliteitsbias",
    difficulty: 2,
    emoji: "🙈",
    academicCategory: "Psychologie",
    skillCategory: "Beter Beslissen",
    definition: "We onderschatten de waarschijnlijkheid en impact van catastrofes omdat we ervan uitgaan dat dingen blijven zoals ze altijd zijn geweest. 'Het is nooit eerder gebeurd, dus het zal niet gebeuren.'",
    abstractExample: "Gegeven dreiging D met lage maar reële waarschijnlijkheid, neigen mensen naar inactie en ontkenning omdat D niet past in hun 'normale' ervaringswereld. Pas als D manifest is, reageren ze – vaak te laat.",
    examples: [
      { domain: "science", icon: "🔬", text: "Bewoners van Pompeii negeerden waarschuwingssignalen van de Vesuvius omdat 'hij nooit eerder was uitgebarsten in hun leven.' Normaliteitsbias verhinderde evacuatie." },
      { domain: "business", icon: "💼", text: "Banken voor 2008: 'Huizenprijzen zijn nog nooit landelijk gedaald.' Normaliteitsbias maakte risicomanagers blind voor de mogelijkheid van een systeemcrash." },
      { domain: "daily", icon: "🏠", text: "Bewoners in overstromingsgebieden weigeren te evacueren: 'Het water is hier nooit zo hoog gekomen.' Ze wegen decennia van normaliteit zwaarder dan de huidige dreiging." }
    ],
    relatedPrinciples: ["black-swan", "availability-heuristic", "status-quo-bias"],
  },
  {
    id: "zero-risk-bias",
    title: "Zero-risicobias",
    difficulty: 2,
    emoji: "🎯",
    academicCategory: "Besliskunde",
    skillCategory: "Beter Beslissen",
    definition: "We prefereren het compleet elimineren van een klein risico boven het veel sterker verminderen van een groot risico. De aantrekkingskracht van 'nul risico' overstijgt rationele afwegingen.",
    abstractExample: "Keuze A: verlaag risico van 5% naar 0% (eliminatie van klein risico). Keuze B: verlaag risico van 50% naar 10% (grotere absolute verlaging). Mensen kiezen vaak A, ook al redt B meer levens.",
    examples: [
      { domain: "science", icon: "🔬", text: "De FDA besteedt onevenredig veel middelen aan het elimineren van zeldzame bijwerkingen (0,01% → 0%) terwijl grotere gezondheidsrisico's (roken, obesitas) meer levens zouden redden." },
      { domain: "business", icon: "💼", text: "Een bedrijf investeert miljoenen om een 0,1% defectpercentage naar 0% te brengen, terwijl hetzelfde budget de klantretentie van 60% naar 80% kon brengen – veel meer impact." },
      { domain: "daily", icon: "🏠", text: "Je koopt een extra slot voor een deur die al twee sloten heeft (risico bijna nul) terwijl je achterdeur wagenwijd openstaat." }
    ],
    relatedPrinciples: ["risk-aversion", "loss-aversion", "planning-fallacy"],
  },
  {
    id: "moral-licensing",
    title: "Morele Licentie",
    difficulty: 2,
    emoji: "😈",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    definition: "Na het doen van iets goeds geven we onszelf onbewust toestemming om iets slechts te doen. Een goede daad wordt een 'moreel krediet' dat we mogen uitgeven aan toekomstig slecht gedrag.",
    abstractExample: "Actie A (moreel goed) → gevoel van moreel krediet → actie B (moreel twijfelachtig) voelt gerechtvaardigd. De goede daad 'compenseert' de slechte in ons hoofd.",
    examples: [
      { domain: "science", icon: "🔬", text: "Sachdeva et al. (2009): deelnemers die zichzelf als moreel beschreven, doneerden minder aan goede doelen. Het positieve zelfbeeld gaf hen 'toestemming' om minder genereus te zijn." },
      { domain: "business", icon: "💼", text: "Een bedrijf met een sterk duurzaamheidsprogramma voelt zich gerechtvaardigd om op andere vlakken minder ethisch te handelen: 'We doen al zo veel voor het milieu.'" },
      { domain: "daily", icon: "🏠", text: "'Ik ben naar de sportschool geweest, dus ik mag vanavond een hele pizza eten.' De sportieve inspanning geeft morele licentie voor ongezond gedrag." }
    ],
    relatedPrinciples: ["cognitive-dissonance", "self-serving-bias", "mental-accounting"],
  },
  {
    id: "ingroup-bias",
    title: "Ingroepbias",
    difficulty: 2,
    emoji: "🏘️",
    academicCategory: "Psychologie",
    skillCategory: "Mensen Begrijpen",
    definition: "We bevoordelen automatisch leden van onze eigen groep en beoordelen buitenstaanders negatiever. Deze voorkeur ontstaat snel, op basis van zelfs willekeurige groepsindeling.",
    abstractExample: "Persoon P behoort tot groep G. P beoordeelt leden van G positiever op competentie, betrouwbaarheid en moreel dan leden van groep H, ongeacht individueel bewijs.",
    examples: [
      { domain: "science", icon: "🔬", text: "Tajfel's minimale-groepsexperimenten (1970): zelfs willekeurige groepsindeling (op basis van een muntworp) leidde tot voorkeur voor de eigen groep bij het verdelen van middelen." },
      { domain: "business", icon: "💼", text: "In sollicitatieprocedures worden kandidaten met dezelfde achtergrond als de interviewer systematisch hoger beoordeeld – niet op basis van kwalificaties maar op basis van herkenning." },
      { domain: "daily", icon: "🏠", text: "Sportfans schrijven de overwinning van hun team toe aan talent en het verlies aan pech. Voor het tegenovergestelde team geldt het omgekeerde." }
    ],
    relatedPrinciples: ["fundamental-attribution-error", "halo-effect", "self-serving-bias"],
  },
  {
    id: "affect-heuristic",
    title: "Affect Heuristiek",
    difficulty: 2,
    emoji: "💗",
    academicCategory: "Psychologie",
    skillCategory: "Beter Beslissen",
    definition: "We laten onze huidige emotie de inschatting van risico's en voordelen bepalen. Als iets een positief gevoel oproept, schatten we de voordelen hoger en de risico's lager in – en omgekeerd.",
    abstractExample: "Als emotionele reactie E op stimulus S positief is, dan worden voordelen van S overschat en risico's onderschat. Als E negatief is, worden risico's overschat en voordelen onderschat. Emotie vervangt analyse.",
    examples: [
      { domain: "science", icon: "🔬", text: "Slovic et al.: deelnemers die een positief gevoel hadden bij kernenergie schatten de voordelen hoger en de risico's lager in. Negatief gevoel: omgekeerd. Feiten speelden nauwelijks een rol." },
      { domain: "business", icon: "💼", text: "Beleggers die enthousiast zijn over een technologiebedrijf onderschatten de risico's. Wie bang is voor een sector overschat de risico's – ongeacht de fundamentele analyse." },
      { domain: "daily", icon: "🏠", text: "Je beoordeelt een restaurant positiever als je in een goede stemming bent, en negatiever als je gestrest bent – los van de werkelijke kwaliteit van het eten." }
    ],
    relatedPrinciples: ["availability-heuristic", "halo-effect", "framing-effect"],
  }
];

// Combineer originele, nieuwe principes en alle gedachte-experimenten
export const allPrinciples = [
  ...principles,
  ...principlesNew,
  ...gedachteExperimenten1,
  ...gedachteExperimenten2,
  ...gedachteExperimenten3,
  ...gedachteExperimenten4,
  ...gedachteExperimenten5,
  ...gedachteExperimenten6,
  ...gedachteExperimenten7,
  ...gedachteExperimenten8,
  ...gedachteExperimenten9,
  ...gedachteExperimenten10,
  ...zelfvertrouwen1,
  ...zelfvertrouwen2,
  ...zelfvertrouwen3,
  ...zelfvertrouwen4,
  ...zelfvertrouwen5,
  ...zelfvertrouwen6,
  ...zelfvertrouwen7,
  ...zelfvertrouwen8,
  ...zelfvertrouwen9,
  ...zelfvertrouwen10,
  ...zelfvertrouwen11,
  ...zelfvertrouwen12,
  ...zelfvertrouwen13,
  ...zelfvertrouwen14,
  ...zelfvertrouwen15,
  ...zelfvertrouwen16,
  ...zelfvertrouwen17,
  ...zelfvertrouwen18,
  ...zelfvertrouwen19,
  ...zelfvertrouwen20,
  ...zelfvertrouwen21,
  ...zelfvertrouwen22,
  ...zelfvertrouwen23,
  ...zelfvertrouwen24,
  ...zelfvertrouwen25,
  ...zelfvertrouwen26,
  ...zelfvertrouwen27,
  ...zelfvertrouwen28,
  ...zelfvertrouwen29,
  ...zelfvertrouwen30,
  ...zelfvertrouwen31,
  ...zelfvertrouwen32,
  ...zelfvertrouwen33,
  ...zelfvertrouwen34,
  ...zelfvertrouwen35,
  ...zelfvertrouwen36,
  ...zelfvertrouwen37,
  ...zelfvertrouwen38,
  ...zelfvertrouwen39,
  ...emotieregulatie1,
  ...emotieregulatie2,
  ...emotieregulatie3,
  ...emotieregulatie4,
  ...emotieregulatie5,
  ...emotieregulatie6,
  ...emotieregulatie7,
  ...emotieregulatie8,
  ...emotieregulatie9,
  ...emotieregulatie10,
  ...ethiek1,
  ...extraPrinciples3,
  ...extraPrinciples4,
  ...extraPrinciples5,
  ...extraPrinciples6,
  ...extraPrinciples7,
];

// Helper function to get principle by ID
export const getPrincipleById = (id) => {
  return allPrinciples.find(p => p.id === id);
};

// Helper function to get principles by category
export const getPrinciplesByCategory = (category, system = 'academic') => {
  const categoryKey = system === 'academic' ? 'academicCategory' : 'skillCategory';
  return allPrinciples.filter(p => p[categoryKey] === category);
};

// Helper function to get principles by difficulty
export const getPrinciplesByDifficulty = (difficulty) => {
  return allPrinciples.filter(p => p.difficulty === difficulty);
};

// Get all unique categories for each system
export const getCategories = (system = 'academic') => {
  const categoryKey = system === 'academic' ? 'academicCategory' : 'skillCategory';
  return [...new Set(allPrinciples.map(p => p[categoryKey]))];
};

export default allPrinciples;
