export interface ServiceData {
  title: string;
  description: string;
  features: string[];
  nachtrag?: string;
  image: string;
}

export interface ServiceDataMap {
  [key: string]: ServiceData;
}

export const serviceData: ServiceDataMap = {
  trockenbau: {
    title: "Trockenbau",
    description:
      "Wir bieten maßgeschneiderte Trockenbaulösungen für Ihre Bauprojekte. Mit langjähriger Erfahrung und modernster Technik liefern wir Ihnen stets Ergebnisse von höchster Qualität.",
    features: [
      "Wand- und Deckensysteme",
      "Akustiklösungen",
      "Brandschutzverkleidungen",
      "Schallschutzlösungen",
      "Dachgeschossausbau",
      "Raumgestaltung und Raumtrennung",
    ],
    image: "/images/services/03_Trockenbau.webp",
  },
  bodenbelagsarbeiten: {
    title: "Bodenbelagsarbeiten",
    description:
      "Professionelle Verlegung verschiedener Bodenbeläge nach Ihren individuellen Wünschen und Anforderungen.",
    features: [
      "Bemusterung von Bodenbelägen",
      "Nivellierung und Vorbereitung des Untergrunds ",
      "Laminat inkl. Trittschalldämmung",
      "Vinyl-/Designbeläge (click oder verklebt)",
      "Teppichbodenfliesen",
      "Sockelleisten",
    ],
    image: "/images/services/04_Boden.webp",
  },
  tapezier_streicharbeiten: {
    title: "Tapezier- und Streicharbeit",
    description:
      "Wir tapezieren Ihre Räumlichkeiten mit Raufasertapete durch modernste Techniken und Überstreichen diese mit Bindefarbe.",
    features: [
      "Alt-Tapeten entfernen",
      "Vorbereitung des Untergrundes",
      "Tapezieren von Raufasertapete",
      "Überstreichen in Ihrer Wunschfarbe",
    ],
    image: "/images/services/03_Tapezier-und-Streicharbeiten.webp",
  },
  tuer_und_fenstermontage: {
    title: "Tür- und Fenstermontage",
    description:
      "Wir montieren Innentüren und Fensteranlagen aus Kunststoff fachgerecht und optisch ansprechend.",
    features: [
      "Demontage Ihrer alten Innentür und Fenster",
      "Aufmaß und Bemusterung für Ihre neue Tür ",
      "Lieferung und Montage ",
      "Kürzen von Bestandstüren",
    ],
    image: "/images/services/08_Tür.webp",
  },
  kuechenmontage: {
    title: "Küchenmontage",
    description:
      "Wir montieren Ihre Küche professionell und passgenau – von Schränken über Arbeitsplatten bis zum Einbau der Elektrogeräte.",
    features: [
      "Küchenplanung",
      "Präzise Montage Ihrer Küchenzeile und Möbelstücke",
      "Einbau von Elektrogeräten",
      "Vorbereitung für Wasser- und Starkstromanschlüsse",
      "Demontage und Entsorgung Ihrer alten Küche",
      "Transport und Lieferung Ihrer bestellten Küche (auch von Privatverkäufern)",
    ],
    image: "/images/services/07_Küche.webp",
  },
  demontage_und_abbruch: {
    title: "Demontage und Abbruch",
    description:
      "Wir führen fachgerechte Demontage- und Abbrucharbeiten für Renovierungen, Umbauten oder Neubauten durch – schnell, sauber und professionell. Abbruch und Demontage von…",
    features: [
      "Bodenbelägen",
      "Trockenbau- und Holzrahmenbau",
      "Türen und Fenstern",
      "Sanitär- und Heizungs-Elemente",
      "Küchen und Möbel",
    ],
    nachtrag:
      "inkl. fachgerechter Entsorgung. Gerne übernehmen wir auch die Bestellung eines Bauschutt-Containers.",
    image: "/images/services/06_Demontage-und-Abbrucharbeiten.webp",
  },
  entruempelung_und_haushaltsaufloesung: {
    title: "Entrümpelung und Haushaltsauflösung",
    description:
      "Wir entrümpeln Keller, Dachböden und ganze Haushalte schnell, zuverlässig und umweltgerecht – inklusive fachgerechter Entsorgung.",
    features: [
      "Professionelle Entrümpelung",
      "Besenreine Haushaltsauflösungen",
      "Schnelle & diskrete Abwicklung",
      "Umweltgerechte Entsorgung",
      "Transparente Preisgestaltung",
      "Wiederverwertung brauchbarer Gegenstände",
    ],
    image: "/images/services/07_Entrümpelungen-und-Haushaltsauflösungen.webp",
  },
  transport: {
    title: "Kleintransporte und Umzüge",
    description:
      "Wir bieten zuverlässige Transporte bis 3,5 Tonnen und sorgen für einen stressfreien Umzug – schnell, sicher und zu fairen und transparenten Preisen. Egal, ob Kleintransporte oder komplette Umzüge, wir kümmern uns um den reibungslosen Ablauf und den sicheren Transport Ihrer Möbel und Waren.",
    features: [
      "Transporte bis 3,5 Tonnen für bereite verpackte Möbel, Waren und mehr",
      "Umzüge für Privat- und Gewerbekunden",
      "Lieferung und Abholung von Möbeln und Haushaltsgegenständen",
      "Erfahrene Fahrer und Möbelpacker",
      "Transparente Preisgestaltung",
    ],
    image: "/images/services/09_Umzug.webp",
  },
  pflaster_und_gartenarbeiten: {
    title: "Pflaster- und Gartenarbeiten",
    description:
      "Wir gestalten Ihren Garten zu Ihren Wünschen und Ihrer Zufriedenheit. Kleine Pflasterflächen sowie Terrassenanpassungen nach Ihren Vorstellungen.",
    features: [
      "Rasenmähen",
      "Grünschnitt",
      "Beete anlegen und bepflanzen",
      "Verlegung von Pflasterflächen und Randsteine",
    ],
    image: "/images/services/10_Garten.webp",
  },
  winterdienst: {
    title: "Winterdienst und Schneeräumung für Privatpersonen",
    description:
      "Verlassen Sie sich auf unseren zuverlässigen Winterdienst! Wir übernehmen die Schneeräumung und Streuung Ihrer Einfahrt, Gehwege und Außenflächen – schnell, gründlich und pünktlich. So bleiben Sie sicher und Ihre Wege stets frei von Schnee und Eis.",
    features: [
      "Schneeräumung von Einfahrten, Gehwegen und Zufahrten",
      "Streudienst für Gehwege und Parkflächen",
      "Freihalten von Hauszugängen und Eingängen",
      "Flexible Einsatzzeiten bei starkem Schneefall nach Ihren Terminvorgaben",
      "Pünktlicher Winterdienst rund um die Uhr, auch in der Nacht",
    ],
    image: "/images/services/11_Schnee.webp",
  },
  vermietung: {
    title: "Vermietung von Baugeräten",
    description:
      "Wir vermieten Bautrocknungs- sowie Bauheizgeräte für Ihr Bauvorhaben.",
    features: ["Entfeuchtungsgeräte", "Elektronische Heizgeräte/-lüfter "],
    image: "/images/services/011_Vermietung-von-Baugeräten.webp",
  },
};

export const craftingServices: ServiceDataMap = {
  trockenbau: {
    title: "Trockenbau",
    description:
      "Wir bieten maßgeschneiderte Trockenbaulösungen für Ihre Bauprojekte. Mit langjähriger Erfahrung und modernster Technik liefern wir Ihnen stets Ergebnisse von höchster Qualität.",
    features: [
      "Wand- und Deckensysteme",
      "Akustiklösungen",
      "Brandschutzverkleidungen",
      "Schallschutzlösungen",
      "Dachgeschossausbau",
      "Raumgestaltung und Raumtrennung",
    ],
    image: "/images/services/03_Trockenbau.webp",
  },
  bodenbelagsarbeiten: {
    title: "Bodenbelagsarbeiten",
    description:
      "Professionelle Verlegung verschiedener Bodenbeläge nach Ihren individuellen Wünschen und Anforderungen.",
    features: [
      "Bemusterung von Bodenbelägen",
      "Nivellierung und Vorbereitung des Untergrunds ",
      "Laminat inkl. Trittschalldämmung",
      "Vinyl-/Designbeläge (click oder verklebt)",
      "Teppichbodenfliesen",
      "Sockelleisten",
    ],
    image: "/images/services/04_Boden.webp",
  },
  tapezier_streicharbeiten: {
    title: "Tapezier- und Streicharbeit",
    description:
      "Wir tapezieren Ihre Räumlichkeiten mit Raufasertapete durch modernste Techniken und Überstreichen diese mit Bindefarbe.",
    features: [
      "Alt-Tapeten entfernen",
      "Vorbereitung des Untergrundes",
      "Tapezieren von Raufasertapete",
      "Überstreichen in Ihrer Wunschfarbe",
    ],
    image: "/images/services/03_Tapezier-und-Streicharbeiten.webp",
  },
  tuer_und_fenstermontage: {
    title: "Tür- und Fenstermontage",
    description:
      "Wir montieren Innentüren und Fensteranlagen aus Kunststoff fachgerecht und optisch ansprechend.",
    features: [
      "Demontage Ihrer alten Innentür und Fenster",
      "Aufmaß und Bemusterung für Ihre neue Tür ",
      "Lieferung und Montage ",
      "Kürzen von Bestandstüren",
    ],
    image: "/images/services/08_Tür.webp",
  },
  kuechenmontage: {
    title: "Küchenmontage",
    description:
      "Wir montieren Ihre Küche professionell und passgenau – von Schränken über Arbeitsplatten bis zum Einbau der Elektrogeräte.",
    features: [
      "Küchenplanung",
      "Präzise Montage Ihrer Küchenzeile und Möbelstücke",
      "Einbau von Elektrogeräten",
      "Vorbereitung für Wasser- und Starkstromanschlüsse",
      "Demontage und Entsorgung Ihrer alten Küche",
      "Transport und Lieferung Ihrer bestellten Küche (auch von Privatverkäufern)",
    ],
    image: "/images/services/07_Küche.webp",
  },
  demontage_und_abbruch: {
    title: "Demontage und Abbruch",
    description:
      "Wir führen fachgerechte Demontage- und Abbrucharbeiten für Renovierungen, Umbauten oder Neubauten durch – schnell, sauber und professionell. Abbruch und Demontage von…",
    features: [
      "Bodenbelägen",
      "Trockenbau- und Holzrahmenbau",
      "Türen und Fenstern",
      "Sanitär- und Heizungs-Elemente",
      "Küchen und Möbel",
    ],
    nachtrag:
      "inkl. fachgerechter Entsorgung. Gerne übernehmen wir auch die Bestellung eines Bauschutt-Containers.",
    image: "/images/services/06_Demontage-und-Abbrucharbeiten.webp",
  },
  entruempelung_und_haushaltsaufloesung: {
    title: "Entrümpelung und Haushaltsauflösung",
    description:
      "Wir entrümpeln Keller, Dachböden und ganze Haushalte schnell, zuverlässig und umweltgerecht – inklusive fachgerechter Entsorgung.",
    features: [
      "Professionelle Entrümpelung",
      "Besenreine Haushaltsauflösungen",
      "Schnelle & diskrete Abwicklung",
      "Umweltgerechte Entsorgung",
      "Transparente Preisgestaltung",
      "Wiederverwertung brauchbarer Gegenstände",
    ],
    image: "/images/services/07_Entrümpelungen-und-Haushaltsauflösungen.webp",
  },
  transport: {
    title: "Kleintransporte und Umzüge",
    description:
      "Wir bieten zuverlässige Transporte bis 3,5 Tonnen und sorgen für einen stressfreien Umzug – schnell, sicher und zu fairen und transparenten Preisen. Egal, ob Kleintransporte oder komplette Umzüge, wir kümmern uns um den reibungslosen Ablauf und den sicheren Transport Ihrer Möbel und Waren.",
    features: [
      "Transporte bis 3,5 Tonnen für bereite verpackte Möbel, Waren und mehr",
      "Umzüge für Privat- und Gewerbekunden",
      "Lieferung und Abholung von Möbeln und Haushaltsgegenständen",
      "Erfahrene Fahrer und Möbelpacker",
      "Transparente Preisgestaltung",
    ],
    image: "/images/services/09_Umzug.webp",
  },
  pflaster_und_gartenarbeiten: {
    title: "Pflaster- und Gartenarbeiten",
    description:
      "Wir gestalten Ihren Garten zu Ihren Wünschen und Ihrer Zufriedenheit. Kleine Pflasterflächen sowie Terrassenanpassungen nach Ihren Vorstellungen.",
    features: [
      "Rasenmähen",
      "Grünschnitt",
      "Beete anlegen und bepflanzen",
      "Verlegung von Pflasterflächen und Randsteine",
    ],
    image: "/images/services/10_Garten.webp",
  },
  winterdienst: {
    title: "Winterdienst und Schneeräumung für Privatpersonen",
    description:
      "Verlassen Sie sich auf unseren zuverlässigen Winterdienst! Wir übernehmen die Schneeräumung und Streuung Ihrer Einfahrt, Gehwege und Außenflächen – schnell, gründlich und pünktlich. So bleiben Sie sicher und Ihre Wege stets frei von Schnee und Eis.",
    features: [
      "Schneeräumung von Einfahrten, Gehwegen und Zufahrten",
      "Streudienst für Gehwege und Parkflächen",
      "Freihalten von Hauszugängen und Eingängen",
      "Flexible Einsatzzeiten bei starkem Schneefall nach Ihren Terminvorgaben",
      "Pünktlicher Winterdienst rund um die Uhr, auch in der Nacht",
    ],
    image: "/images/services/11_Schnee.webp",
  },
  vermietung: {
    title: "Vermietung von Baugeräten",
    description:
      "Wir vermieten Bautrocknungs- sowie Bauheizgeräte für Ihr Bauvorhaben.",
    features: ["Entfeuchtungsgeräte", "Elektronische Heizgeräte/-lüfter "],
    image: "/images/services/011_Vermietung-von-Baugeräten.webp",
  },
};

export const professionalServices: ServiceDataMap = {
  bauleitung: {
    title: "Bauleitung",
    description:
      "Von der  und Koordinierung aller Gewerke bis zur termingerechten Ausführung und erfolgreichen Fertigstellung Ihres Projekts – wir stehen Ihnen kompetent zur Seite und sorgen für Qualität, die Ihre Erwartungen übertrifft.",
    features: [
      "Koordination aller Gewerke",
      "Sicherstellung der Bauqualität",
      "Einhaltung von Zeitplänen",
      "Überwachung des Budgets",
      "Unterstützung bei Bauanträgen",
      "Reibungslose Projektabwicklung",
    ],
    image: "/images/services/NEU_Bauleitung.webp",
  },
  SiGeKo: {
    title: "Sicherheits- und Gesundheitsschutzkoor. (SiGeKo)",
    description:
      "Als Ihr SiGeKo stellen wir sicher, dass alle Vorschriften der Baustellenverordnung eingehalten werden. Von der Gefährdungsanalyse bis zur laufenden Überwachung sorgen wir für die Sicherheit und den Gesundheitsschutz aller Beteiligten, um einen reibungslosen und sicheren Ablauf der Bauarbeiten zu gewährleisten.",
    features: [
      "Vorankündigung",
      "SiGe-Plan",
      "Baustellenbegehungen inkl. Protokollführung",
      "Überwachung der Schutzmaßnahmen auf der Baustelle bis zur Fertigstellung",
    ],
    image: "/images/services/NEU_SiGeKo.webp",
  },
};
