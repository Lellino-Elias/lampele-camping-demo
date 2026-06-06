import type { CampsiteConfig } from "../types";

/**
 * Seecamping Lampele (Ideal Camping Lampele GmbH) — Ossiach am Ossiacher See, Kärnten.
 * Alle Texte/Fakten belegt aus lampele.at (Stand-Scrape 2026-06).
 * EHRLICH: der Platz liegt WIRKLICH direkt am Ossiacher See (Seeplätze am Ufer,
 * eigener Badestrand, Luftbild bestätigt) → "am See"-Rahmung ist belegt.
 * Bilder: Platz-eigene Fotos (gastmanager-Buchungssystem + lampele.at-CMS) für
 * Stellplätze/Mobilheime/Sanitär/Spielplatz; einige See-/Region-/Aktiv-Motive sind
 * lizenzierte Region-Villach-Tourismus-Fotos, die der Platz selbst auf lampele.at
 * verwendet (provenienz-gebunden an diese Region/diesen See). KEINE Stockbilder
 * (Unsplash/Pexels von der Quelle wurden bewusst ausgeschlossen). Keine Auszeichnung
 * eindeutig belegt → awards leer. Reale Preise vorhanden → keine Platzhalter.
 */
const IMG = "/campsites/lampele";

export const lampele: CampsiteConfig = {
  name: "Seecamping Lampele",
  shortName: "Lampele",
  slug: "lampele",
  ort: "Ossiach",
  region: "Kärnten",
  brandKind: "Camping & Mobilheime",
  see: "Ossiacher See",
  regionLong: "Urlaubsregion Ossiacher See · Kärnten · Österreich",

  claim: "Dein Campingurlaub direkt am Ossiacher See",
  claimEmphasis: "direkt am Ossiacher See",
  intro:
    "Großzügige Stellplätze und moderne Mobilheime direkt am Ossiacher See — umgeben von Bergen und Natur, mitten in Kärnten. Ein persönlich geführter Familienbetrieb in Ossiach.",

  statement: {
    text: "Bei uns bist du nicht nur Gast — sondern mittendrin im Urlaub, wie er sein soll.",
    emphasis: "mittendrin im Urlaub",
  },

  pillars: [
    {
      title: "Direkt am Ossiacher See",
      text: "Stellplätze und Mobilheime nahe am Wasser, mit eigenem Badestrand und Steg — näher am See geht's kaum.",
      image: { src: `${IMG}/hero-2b6f8d47c8.webp`, alt: "Luftaufnahme vom Seecamping Lampele direkt am Ufer des Ossiacher Sees" },
    },
    {
      title: "Berge, Natur & Kärnten",
      text: "Umgeben von Bergen und der typisch herzlichen Atmosphäre, die Urlaub in Kärnten so besonders macht.",
      image: { src: `${IMG}/hero-2780563498.webp`, alt: "Der Ossiacher See mit Bergen und Naturlandschaft in Kärnten" },
    },
    {
      title: "Aufwachen mit Seeblick",
      text: "Morgens ins Wasser, tagsüber Rad fahren oder wandern, abends entspannt vor dem eigenen Platz die Ruhe am See genießen.",
      image: { src: `${IMG}/gallery-1b0b46a71a.webp`, alt: "Blick vom Zelt auf den Ossiacher See beim Seecamping Lampele" },
    },
  ],

  usps: [
    "Direkt am Ossiacher See",
    "Eigener Badestrand",
    "Mobilheime mit Klimaanlage",
    "Gratis WLAN",
    "Familienbetrieb in Ossiach",
    "Gratis Erlebnis Card inklusive",
  ],

  trust: {
    heading: "Worauf du dich bei uns verlassen kannst",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführter Familienbetrieb direkt am Ossiacher See, transparente Preise im Online-Buchungsportal und moderne Ausstattung — vom Gratis-WLAN bis zum eigenen Badestrand.",
  },

  // Keine eindeutig belegbare Auszeichnung auf der Quelle → ehrlich leer (Band zeigt nur USP-Pills).
  awards: [],

  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/gallery-7e89815d95.webp`, alt: "Luftaufnahme: Seecamping Lampele am Ossiacher See mit Bergen im Hintergrund" },
    sunset: { src: `${IMG}/amenity-c15838219d.webp`, alt: "Paar am Badesteg des Seecamping Lampele in der Abendsonne am Ossiacher See" },
  },

  camping: {
    heading: "Camping am Ossiacher See",
    intro:
      "Großzügige Stellplätze direkt am Wasser in Ossiach, eingebettet in die Natur Kärntens — mit 16-A-Strom, modernen Sanitäranlagen und SB-Markt am Platz.",
    features: [
      { title: "Direkt am Wasser", text: "Ruhige, großzügige Plätze mit direktem Zugang zum Ossiacher See und eigenem Badestrand.", image: { src: `${IMG}/gallery-2e99e420ac.webp`, alt: "Stellplätze und Mobilheime am Seeufer des Seecamping Lampele aus der Luft" } },
      { title: "Standardplatz", text: "Großzügiger Standardplatz für Wohnwägen bis 8 m und Zelte bis 7 m, mit 16-A-Stromsäule (Abrechnung nach Verbrauch).", image: { src: `${IMG}/gallery-ab2515c1d1.webp`, alt: "Großzügige Standardplätze mit Wohnwagen und Wohnmobil am Seecamping Lampele" } },
      { title: "Komfortplatz", text: "Wie der Standardplatz, zusätzlich mit eigenem Wasser- und Abwasseranschluss — Camping mit dem Plus an Komfort.", image: { src: `${IMG}/amenity-911e6d81cb.webp`, alt: "Komfortstellplatz mit Wohnwagen, Vorzelt und Bäumen am Seecamping Lampele" } },
      { title: "Seeplatz", text: "Premiumplätze direkt am Seeufer im hundefreien Bereich — ein einzigartiges Naturerlebnis am Wasser.", image: { src: `${IMG}/gallery-05200b8c61.webp`, alt: "Seeplatz mit Liegewiese direkt am Ufer des Ossiacher Sees" } },
      { title: "Moderne Sanitäranlagen", text: "Helle, moderne Sanitäranlagen sorgen für unbeschwertes Camping direkt am See.", image: { src: `${IMG}/amenity-d57b06a679.webp`, alt: "Modernes Sanitärgebäude mit Waschbecken am Seecamping Lampele" } },
      { title: "Bike-Station am Platz", text: "Fahrradverleih und Self-Service-Bike-Station (iBike-Box) direkt am Campingplatz — ideal für die Ossiacher-See-Runde.", image: { src: `${IMG}/activity-4660745ce7.webp`, alt: "Bike Self-Service-Station für Gäste direkt am Seecamping Lampele" } },
    ],
  },

  mobilheime: {
    heading: "Mobilheime & Glamping",
    intro:
      "Moderne Mobilheime mit Campingkomfort und dem gewissen Extra — Küche, Bad, Klimaanlage und eigene Veranda, nur wenige Gehminuten vom Ossiacher See. Preise pro Tag, exklusive Ortstaxe.",
    items: [
      { name: "Mobilheim Kategorie A", kind: "Mobilheim · 1–5 Personen", text: "Klimatisierter Wohnbereich, überdachte Veranda und durchdachter Grundriss. Auch als barrierefreie Variante (A1) mit ebenerdiger Veranda verfügbar.", image: { src: `${IMG}/accommodation-04246e4e57.webp`, alt: "Mobilheim Kategorie A mit überdachter Veranda am Seecamping Lampele" }, priceFrom: 75, features: ["bis 5 Personen", "2 Schlafzimmer", "ca. 32 m²", "Klimaanlage"] },
      { name: "Mobilheim B Überdacht", kind: "Mobilheim · 1–4 Personen", text: "Zwei Schlafzimmer, heller Wohnbereich mit Küche und schattige überdachte Veranda — mit Klimaanlage für heiße Tage.", image: { src: `${IMG}/accommodation-913239b44a.webp`, alt: "Mobilheim Kategorie B mit überdachter Terrasse am Seecamping Lampele" }, priceFrom: 65, features: ["bis 4 Personen", "2 Schlafzimmer", "ca. 24 m²", "überdachte Veranda"] },
      { name: "Mobilheim B Terrasse", kind: "Mobilheim · 1–4 Personen", text: "Gemütliches Mobilheim mit offener Terrasse und Gartenmöbeln, ausgestattet mit Klimaanlage — naturnah und entspannt.", image: { src: `${IMG}/accommodation-cd6929d793.webp`, alt: "Mobilheim Kategorie B mit offener Terrasse am Seecamping Lampele" }, priceFrom: 65, features: ["bis 4 Personen", "2 Schlafzimmer", "ca. 24 m²", "offene Terrasse"] },
      { name: "Bali Premium", kind: "Mobilheim · 1–4 Personen", text: "Unser neuestes Modell: voll ausgestattete Küche inkl. Geschirrspüler, Veranda mit Gartenmöbeln und zwei Liegestühlen, Klimaanlage.", image: { src: `${IMG}/accommodation-e0a692f29d.webp`, alt: "Mobilheim Bali Premium mit überdachter Veranda am Seecamping Lampele" }, priceFrom: 105, features: ["bis 4 Personen", "2 Schlafzimmer", "ca. 27 m²", "Geschirrspüler"] },
      { name: "Bali Comfort", kind: "Mobilheim · 1–5 Personen", text: "Eines der beliebtesten Mobilheime am Platz: klimatisierte Wohnküche, große Veranda mit Sonnenschirm und separate Toilette.", image: { src: `${IMG}/accommodation-4b57ebf76c.webp`, alt: "Mobilheim Bali Comfort mit überdachter Veranda am Seecamping Lampele" }, priceFrom: 119, features: ["bis 5 Personen", "2 Schlafzimmer", "ca. 30 m²", "Klimaanlage"] },
      { name: "Bali Family", kind: "Mobilheim · 1–6 Personen", text: "Viel Raum für größere Familien: drei separate Schlafzimmer, geräumige Sitzecke und separate Toilette. Preis inkl. 5 Personen, 6. Person zubuchbar.", image: { src: `${IMG}/accommodation-0bb7d6ce36.webp`, alt: "Mobilheim Bali Family mit überdachter Veranda am Seecamping Lampele" }, priceFrom: 119, features: ["bis 6 Personen", "3 Schlafzimmer", "ca. 32 m²", "separate Toilette"] },
    ],
  },

  kinder: {
    heading: "Für Kinder & Familien",
    intro:
      "Familienfreundlich von früh bis spät: Spielplatz, Wasserrutsche, Trampolin und Tischtennis am Platz — dazu im Juli und August ein kostenloses Kinderprogramm (dienstags & donnerstags, ohne Anmeldung).",
    features: [
      { title: "Spielplatz & Kletterturm", text: "Kletterturm mit Rutsche direkt am Seeufer, dazu Trampolin, Wasserrutsche und Tischtennistische.", image: { src: `${IMG}/kids-400a9dad9e.webp`, alt: "Bunter Kinderspielturm mit Rutsche am Seeufer des Seecamping Lampele" } },
      { title: "Wasserspaß am See", text: "Baden, Stand-up-Paddeln und Plantschen am eigenen Badestrand — Wasserspaß für die ganze Familie.", image: { src: `${IMG}/kids-09538c5c83.webp`, alt: "Kinder beim Stand-up-Paddeln und Kajakfahren am Ossiacher See" } },
      { title: "Familien-Mobilheime", text: "Eigene Kinderzimmer mit Einzel- und Etagenbetten — so hat jeder in der Familie seinen Bereich.", image: { src: `${IMG}/kids-0c7408b8d1.webp`, alt: "Kinderzimmer mit Einzelbetten in einem Mobilheim am Seecamping Lampele" } },
    ],
  },

  aktivitaeten: {
    heading: "Aktiv am Ossiacher See",
    intro:
      "Wassersport wie Segeln, Windsurfen und Stand-up-Paddeln direkt vor der Tür, dazu Radwege, Wanderungen und Ausflugsziele rund um den See — hier beginnt dein Aktivurlaub am Campingplatz.",
    items: [
      { title: "Radfahren & E-Bikes", text: "Die Ossiacher-See-Runde startet direkt am Platz (rund eine Stunde) — mit E-Bikes gelingen auch längere Touren wie die Tiebelrunde.", image: { src: `${IMG}/activity-6f117453aa.webp`, alt: "Radfahrer mit E-Bikes auf dem Radweg am Ossiacher See" } },
      { title: "Mountainbiken", text: "Von gemütlichen Uferwegen bis zu anspruchsvollen Mountainbike-Strecken rund um den Ossiacher See.", image: { src: `${IMG}/activity-d28c3dee56.webp`, alt: "Mountainbiker auf einem Trail mit Blick auf den Ossiacher See" } },
      { title: "Wandern auf der Gerlitzen", text: "Wanderungen zwischen Bergen und See — von der Gerlitzen bis zu den Aussichtspunkten am Ossiachberg.", image: { src: `${IMG}/gallery-5201edea1b.webp`, alt: "Aussichtspunkt mit Bilderrahmen über dem Ossiacher See am Ossiachberg" } },
      { title: "Affenberg & Burg Landskron", text: "Ausflugsziele in der Umgebung: Affenberg Landskron, die Adler Arena auf der Burg Landskron und das Stift Ossiach.", image: { src: `${IMG}/activity-8509c6ced1.webp`, alt: "Japanmakaken am Affenberg Landskron nahe dem Ossiacher See" } },
      { title: "Gratis Erlebnis Card", text: "Bei jeder Buchung inklusive: zahlreiche Ermäßigungen und Freizeitangebote in der Region rund um den Ossiacher See und Villach.", image: { src: `${IMG}/gallery-c9d68c05a9.webp`, alt: "Gratis Erlebnis Card der Region Villach für Gäste am Ossiacher See" } },
    ],
  },

  anreise: {
    heading: "So findest du uns",
    modes: [
      { title: "Mit dem Auto", text: "Über Villach Richtung Ossiacher See nach Ossiach — Alt-Ossiach 57, A-9570 Ossiach, am Südufer des Sees." },
      { title: "Mit Bahn & Bus", text: "Mit der ÖBB nach Kärnten, weiter mit den Kärntner Linien im öffentlichen Nahverkehr rund um den Ossiacher See." },
      { title: "Mit dem Rad", text: "Der Ossiacher-See-Radweg führt direkt am Campingplatz vorbei — Fahrräder und E-Bikes gibt es am Platz." },
    ],
  },

  galerie: {
    heading: "Urlaub am Ossiacher See",
    headingEmphasis: "Ossiacher See",
    intro:
      "See, Berge, moderne Mobilheime und Camping direkt am Wasser — ein paar Eindrücke vom Seecamping Lampele in Ossiach.",
    tag: "Mai bis September",
    moreCount: 12,
    images: [
      { src: `${IMG}/hero-b995b6ff41.webp`, alt: "Luftaufnahme des Ossiacher Sees mit Bergen in Kärnten" },
      { src: `${IMG}/gallery-ea04f2e260.webp`, alt: "Panorama des Ossiacher Sees mit Bergpanorama" },
      { src: `${IMG}/accommodation-d1454eff9b.webp`, alt: "Klimatisierter Wohn- und Essbereich in einem Bali-Comfort-Mobilheim" },
      { src: `${IMG}/accommodation-206ff38d9d.webp`, alt: "Mobilheim Kategorie B mit Terrasse und Gartenmöbeln am Seecamping Lampele" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Preise",
    intro:
      "Wähle Zeitraum, Platz oder Mobilheim und Personenzahl — der aktuelle Preis wird im Buchungsportal sofort angezeigt, inklusive aller Leistungen.",
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatz: Preis pro Nacht (Platz-Basis) zzgl. Ortstaxe & Strom nach Verbrauch · Mobilheim: ab-Preis pro Tag, exkl. Ortstaxe, Endreinigung € 90 (WLAN, Strom, Wasser, Bettwäsche & Erlebnis Card inkl.) · Stand Website 2025/26 — bitte bestätigen.",
    highlight: {
      title: "Bei Mobilheimen inklusive",
      text: "WLAN, Strom, Wasser, Bettwäsche und die Erlebnis Card sind inklusive — nur die Endreinigung (€ 90) kommt hinzu.",
    },
    categories: [
      // Reale Preise lampele.at 2025/26: Stellplätze aus dem Buchungsportal (€/Nacht je Kategorie),
      // Mobilheim = günstigster "ab"-Preis (Kategorie B). Aufpreise/Ortstaxe pro Person nicht beziffert → kein perExtraGuest.
      { id: "standardplatz", label: "Standardplatz", perNight: 17 },
      { id: "komfortplatz", label: "Komfortplatz", perNight: 20 },
      { id: "seeplatz", label: "Seeplatz", perNight: 20 },
      { id: "mobilheim", label: "Mobilheim ab", perNight: 65 },
    ],
  },

  kontakt: {
    tel: "+43 4243 529",
    telHref: "tel:+434243529",
    mail: "camping@lampele.at",
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
        { label: "Seeplatz", href: "#camping" },
        { label: "Sanitäranlagen", href: "#camping" },
      ],
    },
    {
      label: "Mobilheime",
      href: "#mobilheime",
      children: [
        { label: "Kategorie A & B", href: "#mobilheime" },
        { label: "Bali Premium", href: "#mobilheime" },
        { label: "Bali Family", href: "#mobilheime" },
      ],
    },
    {
      label: "Familie",
      href: "#kinder",
      children: [
        { label: "Spielplatz", href: "#kinder" },
        { label: "Wasserspaß", href: "#kinder" },
        { label: "Kinderprogramm", href: "#kinder" },
      ],
    },
    {
      label: "Aktiv",
      href: "#aktivitaeten",
      children: [
        { label: "Radfahren & Biken", href: "#aktivitaeten" },
        { label: "Wandern", href: "#aktivitaeten" },
        { label: "Ausflugsziele", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default lampele;
