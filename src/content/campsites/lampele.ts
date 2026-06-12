import type { CampsiteConfig } from "../types";

const IMG = "/campsites/lampele";

const lampele: CampsiteConfig = {
  name: "Seecamping Lampele",
  shortName: "Lampele",
  slug: "lampele",
  ort: "Ossiach am Ossiacher See",
  region: "Kärnten",
  brandKind: "Camping am Ossiacher See",
  see: "Ossiacher See",
  regionLong: "Ossiacher See · Kärnten · Österreich",

  heroVariant: "center",

  claim: "Aufwachen mit Blick auf den Ossiacher See",
  claimEmphasis: "den Ossiacher See",
  emailDetail: "euer privater Badestrand direkt am Ossiacher See",
  intro:
    "Direkt am Ufer des Ossiacher Sees, zwischen Kärntner Bergen und Wasser: ein familiengeführter Platz mit Stellplätzen, Seeplätzen und modernen Mobilheimen — eigener Badestrand und kurze Wege inklusive.",

  statement: {
    text: "Hier beginnt der Ossiacher See gleich hinter deinem Stellplatz.",
    emphasis: "gleich hinter deinem Stellplatz",
  },

  pillars: [
    {
      title: "Direkt am Seeufer",
      text: "Eigener Badestrand und Seeplätze in erster Reihe — vom Platz sind es nur ein paar Schritte ins kühle Nass.",
      image: { src: `${IMG}/amenity-c15838219d.webp`, alt: "Badesteg am Ossiacher See beim Seecamping Lampele im Abendlicht" },
    },
    {
      title: "Komfortabel campen",
      text: "Großzügige Stell-, Komfort- und Seeplätze mit 16-A-Strom, modernen Sanitäranlagen und Gratis-WLAN am ganzen Gelände.",
      image: { src: `${IMG}/gallery-1418c653ea.webp`, alt: "Luftaufnahme des Seecamping Lampele am Ossiachersee – gepflegte Stellplätze unter Bäumen direkt am Seeufer" },
    },
    {
      title: "Ein Familienbetrieb",
      text: "Persönlich geführter Familienbetrieb — hier wirst du herzlich empfangen und bist mittendrin im Urlaub, nicht nur Gast.",
      image: { src: `${IMG}/accommodation-c8a4b148f6.webp`, alt: "Familie auf der Veranda eines Mobilheims am Seecamping Lampele" },
    },
  ],

  usps: [
    "Direkt am Ossiacher See",
    "Eigener Badestrand",
    "Moderne Sanitäranlagen",
    "Gratis WLAN",
    "Familienbetrieb",
    "Hunde willkommen",
  ],

  trust: {
    heading: "Klein, fein und direkt am Wasser",
    headingEmphasis: "direkt am Wasser",
    intro:
      "Ein überschaubarer Platz, auf dem man sich noch kennt: gepflegte Plätze, ein renoviertes Sanitärgebäude, frische Backwaren am Morgen und der Ossiacher See direkt vor der Tür — ausgezeichnet als Qualität-Kärnten-Campingplatz.",
  },

  awards: [
    {
      label: "Qualität Kärnten Campingplatz",
      image: { src: `${IMG}/award-1281ef1c0c.png`, alt: "Gütesiegel Qualität Kärnten Campingplatz" },
    },
  ],

  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/gallery-7e89815d95.webp`, alt: "Luftaufnahme: Seecamping Lampele direkt am Ossiacher See mit Bergpanorama" },
  },

  breather: {
    image: { src: `${IMG}/gallery-2e99e420ac.webp`, alt: "Luftaufnahme des Seecamping Lampele am Ossiacher See" },
    line: "Zwischen Bergen und See — und mittendrin dein Platz.",
  },

  camping: {
    heading: "Camping am Ossiacher See",
    intro:
      "Vom Stellplatz ins Wasser: viel Wiese, alter Baumbestand und alles, was entspannte Campingtage brauchen — vom Bäcker am Morgen bis zum Steg am Abend.",
    features: [
      {
        title: "Privater Badestrand",
        text: "Eigener Zugang zum Ossiacher See mit Liegewiese und Steg — baden, ohne den Platz zu verlassen.",
        image: { src: `${IMG}/hero-2b6f8d47c8.webp`, alt: "Privater Badestrand am Ufer des Ossiacher Sees beim Seecamping Lampele" },
      },
      {
        title: "Steg & Seezugang",
        text: "Ein eigener Steg führt direkt ins Wasser — morgens schwimmen, abends die Ruhe am Ufer genießen.",
        image: { src: `${IMG}/gallery-f693ce1d9b.webp`, alt: "Steg und Seeufer am Seecamping Lampele am Ossiacher See" },
      },
      {
        title: "Geräumige Stellplätze",
        text: "Großzügige Wiesenplätze für Wohnwagen bis 8 m und Zelte, mit 16-A-Stromanschluss und Blick auf die Kärntner Berge.",
        image: { src: `${IMG}/gallery-ab2515c1d1.webp`, alt: "Geräumige Stellplätze mit Bergblick am Seecamping Lampele" },
      },
      {
        title: "Moderne Sanitäranlagen",
        text: "Neu renoviertes, helles Sanitärgebäude mit warmen Duschen und Familienbad — sauber und nah am Platz.",
        image: { src: `${IMG}/amenity-d57b06a679.webp`, alt: "Modernes Sanitärgebäude am Seecamping Lampele" },
      },
      {
        title: "Aufwachen mit Seeblick",
        text: "Plätze mit freiem Blick aufs Wasser — der erste Kaffee mit dem Ossiacher See direkt vor dem Vorzelt.",
        image: { src: `${IMG}/gallery-1b0b46a71a.webp`, alt: "Blick vom Zelt auf den Ossiacher See am Seecamping Lampele" },
      },
      {
        title: "Bike-Self-Service & E-Bikes",
        text: "Direkt am Platz: Reparaturstation und E-Bike-Verleih (iBike-Box) — perfekt für die Ossiacher-See-Runde.",
        image: { src: `${IMG}/activity-4660745ce7.webp`, alt: "Bike-Self-Service-Station am Seecamping Lampele" },
      },
    ],
  },

  mobilheime: {
    heading: "Glamping-Mobilheime am See",
    intro:
      "Wenige Gehminuten vom Ufer, mit Küche, Bad, Klimaanlage und eigener Veranda — Campingkomfort mit dem gewissen Extra. Bettwäsche, WLAN und Erlebnis Card inklusive.",
    items: [
      {
        name: "Mobilheim Kategorie B",
        kind: "1–4 Personen · 2 Schlafzimmer · 24 m²",
        text: "Gemütliches Mobilheim mit eigenem Bad und überdachter Veranda — wenige Meter vom Ossiacher See.",
        image: { src: `${IMG}/accommodation-913239b44a.webp`, alt: "Mobilheim Kategorie B mit überdachter Veranda am Seecamping Lampele" },
        priceFrom: 65,
        features: ["Eigenes Bad", "Überdachte Veranda", "Klimaanlage"],
      },
      {
        name: "Bali Premium",
        kind: "1–4 Personen · 2 Schlafzimmer · 27 m²",
        text: "Unser neuestes Modell: modernes Holz-Mobilheim mit Geschirrspüler, Klimaanlage und großer Veranda.",
        image: { src: `${IMG}/accommodation-d696e59e37.webp`, alt: "Mobilheim Bali Premium mit großer Veranda am Seecamping Lampele" },
        priceFrom: 105,
        features: ["Geschirrspüler", "Klimaanlage", "Große Veranda"],
      },
      {
        name: "Bali Family",
        kind: "1–6 Personen · 32 m²",
        text: "Viel Raum für die ganze Familie — großzügiges Mobilheim mit Veranda, ideal für längere Auszeiten am See.",
        image: { src: `${IMG}/accommodation-8298667075.webp`, alt: "Familien-Mobilheim Bali Family mit Veranda am Seecamping Lampele" },
        priceFrom: 119,
        features: ["Bis 6 Personen", "Eigene Veranda", "Voll ausgestattet"],
      },
    ],
  },

  kinder: {
    heading: "Kinderparadies am Seeufer",
    intro:
      "Spielturm in Strandnähe, Wasserrutsche, Trampolin und Tischtennis — und im Juli und August ein kostenloses Kinderprogramm direkt am Platz.",
    features: [
      {
        title: "Spielturm am Strand",
        text: "Bunter Spielturm mit Rutsche und Kletterwand, gleich neben dem Seezugang — Toben mit Blick auf den See.",
        image: { src: `${IMG}/kids-400a9dad9e.webp`, alt: "Spielturm am Strand des Seecamping Lampele am Ossiacher See" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Aktiv am Ossiacher See",
    intro:
      "Wassersport vor dem Vorzelt, die Ossiacher-See-Runde mit dem Rad in rund einer Stunde und Wandern auf der Gerlitzen — die gratis Erlebnis Card gibt es dazu.",
    items: [
      {
        title: "Wassersport am See",
        text: "Schwimmen, Stand-up-Paddeln, Segeln und Surfen direkt am Ossiacher See — Verleih und Einstieg ganz in der Nähe.",
        image: { src: `${IMG}/kids-09538c5c83.webp`, alt: "Stand-up-Paddeln und Wassersport am Ossiacher See" },
      },
      {
        title: "Radrunde um den See",
        text: "Direkt ab dem Platz startet die familienfreundliche Ossiacher-See-Runde — in rund einer Stunde ums Wasser, auch per E-Bike.",
        image: { src: `${IMG}/activity-e90f77ba7c.webp`, alt: "Radfahren rund um den Ossiacher See in Kärnten" },
      },
      {
        title: "Wandern auf der Gerlitzen",
        text: "Von gemütlichen Uferwegen bis zu den Gipfeln der Gerlitzen — die Bergwelt rund um den See lädt zum Wandern ein.",
        image: { src: `${IMG}/gallery-5201edea1b.webp`, alt: "Aussichtspunkt Bilderrahmen am Ossiachberg mit Blick auf den Ossiacher See" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg an den Ossiacher See",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A10 (Tauernautobahn) bis Villach, dann Richtung Ossiach am Südufer des Ossiacher Sees — der Platz liegt in Alt-Ossiach.",
      },
      {
        title: "Mit der Bahn",
        text: "Bis Villach Hauptbahnhof, von dort rund 20 Minuten mit Bus oder Taxi nach Ossiach an den See.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Der Flughafen Klagenfurt ist etwa 30 Fahrminuten entfernt, Salzburg rund zwei Stunden.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Ossiacher See",
    headingEmphasis: "Ossiacher See",
    intro:
      "Seeufer, Bergblick und entspannte Urlaubstage — ein paar Impressionen vom Platz und aus der Region rund um den Ossiacher See.",
    tag: "Mai bis September",
    moreCount: 20,
    images: [
      { src: `${IMG}/gallery-d2f4d6dcba.webp`, alt: "Seecamping Lampele am Ufer des Ossiacher Sees mit Bergkulisse" },
      { src: `${IMG}/gallery-43665b619b.webp`, alt: "Gratis Erlebnis Card für Gäste am Ossiacher See" },
      { src: `${IMG}/gallery-ea04f2e260.webp`, alt: "Panoramablick über den Ossiacher See in Kärnten" },
      { src: `${IMG}/gallery-e442e5b62d.webp`, alt: "Mobilheim am Seecamping Lampele – gepflegte Anlage mit Veranda im Abendlicht" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Ossiacher See",
    headingEmphasis: "am Ossiacher See",
    intro:
      "Wähle Zeitraum, Kategorie und Personen — wir melden uns persönlich mit deiner Verfügbarkeit am Ossiacher See.",
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatz € 19 (Standard) bzw. € 22 (Seeplatz) pro Person/Nacht — hier für 2 Personen gerechnet; Mobilheime ab-Preis pro Nacht. Zzgl. Ortstaxe, Strom (nach Verbrauch) und Mobilheim-Endreinigung € 90. Stand 2026, bitte bestätigen.",
    highlight: {
      title: "Direkt am Seeufer",
      text: "Privater Badestrand und Seeplätze in erster Reihe — der See beginnt am Platz.",
    },
    categories: [
      { id: "standard", label: "Standard-Stellplatz", perNight: 38, perExtraGuest: 19 },
      { id: "seeplatz", label: "Seeplatz", perNight: 44, perExtraGuest: 22 },
      { id: "mobilheim-b", label: "Mobilheim Kategorie B", perNight: 65 },
      { id: "bali-premium", label: "Bali Premium", perNight: 105 },
    ],
  },

  kontakt: {
    tel: "+43 4243 529",
    telHref: "tel:+434243529",
    mail: "camping@lampele.at",
    facebook: "https://facebook.com/IdealCampingLampele",
    adresse: "Alt-Ossiach 57 · 9570 Ossiach · Kärnten",
    coords: { lat: 46.6828611, lng: 13.9987337 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Badestrand", href: "#camping" },
      ],
    },
    { label: "Mobilheime", href: "#mobilheime" },
    { label: "Familie", href: "#kinder" },
    { label: "Aktiv", href: "#aktivitaeten" },
    {
      label: "Preise & Anreise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default lampele;
