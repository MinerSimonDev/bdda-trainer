import type { LabelTask } from "@/lib/types";

/**
 * Beschriftungsübungen auf den Originalfolien.
 * x/y/w/h sind Prozentwerte relativ zum Bild — die Box deckt die Beschriftung
 * in der Folie ab, sonst könnte man sie ablesen.
 */
export const LABEL_TASKS: LabelTask[] = [
  {
    id: "g-cap",
    ch: 1,
    img: "cap-theorem",
    title: "CAP-Theorem",
    intro: "Beschrifte die drei Kreise und die beiden möglichen Kombinationen.",
    crop: { x: 54, y: 26, w: 41, h: 62 },
    spots: [
      { x: 65.5, y: 40.5, w: 12.5, h: 5.5, label: "Consistency" },
      { x: 58.5, y: 61, w: 11.5, h: 5.5, label: "Availability" },
      { x: 72.5, y: 59, w: 11, h: 10, label: "Partition Tolerance" },
      { x: 79.5, y: 44, w: 5.5, h: 6, label: "CP" },
      { x: 69, y: 75.5, w: 5.5, h: 6, label: "AP" },
    ],
  },
  {
    id: "g-dwh",
    ch: 1,
    img: "dwh-architektur",
    title: "DWH-Architektur",
    intro: "Die fünf Schichten von links nach rechts — und was zwischen ihnen läuft.",
    crop: { x: 5, y: 33, w: 56, h: 52 },
    spots: [
      { x: 7, y: 36.5, w: 9, h: 5, label: "Data Sources", alt: ["Datenquellen"] },
      { x: 16.5, y: 36.5, w: 9, h: 5, label: "Staging Area" },
      { x: 29.5, y: 36.5, w: 8.5, h: 5, label: "Warehouse", alt: ["Core DWH"] },
      { x: 41, y: 36.5, w: 8.5, h: 5, label: "Data Marts" },
      { x: 52, y: 36.5, w: 6, h: 5, label: "Users", alt: ["Client", "Client-Ebene"] },
      { x: 13, y: 58, w: 5.5, h: 6, label: "ETL" },
      { x: 23, y: 58, w: 5.5, h: 6, label: "ETL" },
    ],
  },
  {
    id: "g-cloud",
    ch: 2,
    img: "cloud-stack",
    title: "Cloud-Stack: SaaS, PaaS, CaaS, IaaS",
    intro:
      "Links die Ebenen des Stacks, rechts die vier Servicemodelle. Achte darauf, wie weit die Balken jeweils reichen.",
    crop: { x: 19, y: 27, w: 67, h: 55 },
    spots: [
      { x: 32, y: 29.5, w: 10, h: 5.5, label: "Anwendung" },
      { x: 32.5, y: 39, w: 9.5, h: 5.5, label: "Webserver" },
      { x: 31, y: 47, w: 12, h: 5.5, label: "Betriebssysteme" },
      { x: 31.5, y: 55, w: 11, h: 5.5, label: "Virtualisierung" },
      { x: 31, y: 63, w: 12, h: 5.5, label: "physische Server" },
      { x: 33, y: 70.5, w: 9, h: 5.5, label: "Netzwerk" },
      { x: 55, y: 50.5, w: 4.5, h: 9, label: "SaaS" },
      { x: 62, y: 56.5, w: 4.5, h: 9, label: "PaaS" },
      { x: 69, y: 58.5, w: 4.5, h: 9, label: "CaaS" },
      { x: 76.5, y: 61.5, w: 4.5, h: 9, label: "IaaS" },
    ],
  },
  {
    id: "g-ml",
    ch: 6,
    img: "ml-ablauf",
    title: "Wie funktioniert Machine Learning?",
    intro: "Was geht ins Training, was kommt heraus — und was kommt später dazu?",
    crop: { x: 4, y: 38, w: 79, h: 52 },
    spots: [
      { x: 7, y: 59.5, w: 9.5, h: 5.5, label: "Merkmale" },
      { x: 7, y: 66, w: 11, h: 5.5, label: "Zielvariable" },
      { x: 22, y: 62.5, w: 14, h: 6, label: "Modelltraining" },
      { x: 43.5, y: 60.5, w: 12.5, h: 10.5, label: "Modell", alt: ["KI-Software"] },
      { x: 44.5, y: 42, w: 11, h: 6, label: "Neue Daten" },
      { x: 62.5, y: 62.5, w: 11, h: 6, label: "Vorhersage" },
    ],
  },
  {
    id: "g-neuron",
    ch: 8,
    img: "neuron-aufbau",
    title: "Aufbau eines Neurons",
    intro: "Von den Eingängen bis zum Ausgang — und was von unten dazukommt.",
    crop: { x: 32, y: 36, w: 52, h: 60 },
    spots: [
      { x: 35, y: 47.5, w: 7.5, h: 5.5, label: "Eingang" },
      { x: 44, y: 47.5, w: 7.5, h: 5.5, label: "Gewichte" },
      { x: 52, y: 47.5, w: 7, h: 5.5, label: "Neuron" },
      { x: 60, y: 47, w: 9, h: 8, label: "Aktivierungsfunktion" },
      { x: 72, y: 47.5, w: 7.5, h: 5.5, label: "Ausgang" },
      { x: 44.5, y: 85.5, w: 6.5, h: 5.5, label: "Offset", alt: ["Bias"] },
      { x: 54, y: 39, w: 6, h: 5, label: "Layer", alt: ["Schicht"] },
    ],
  },
  {
    id: "g-rag",
    ch: 5,
    img: "rag-ablauf",
    title: "RAG-System",
    intro:
      "Der Ablauf von der Frage bis zur Antwort. Die Nummern im Bild zeigen die Reihenfolge.",
    crop: { x: 41, y: 52, w: 59, h: 48 },
    spots: [
      { x: 45.5, y: 68.5, w: 5.5, h: 5, label: "User", alt: ["Benutzer"] },
      { x: 56, y: 61.5, w: 6.5, h: 5.5, label: "Prompt", alt: ["Frage"] },
      { x: 54.5, y: 90.5, w: 10, h: 7.5, label: "VectorDB", alt: ["Vektordatenbank", "ChromaDB"] },
      { x: 69, y: 88, w: 8.5, h: 5, label: "Documents", alt: ["Dokumente"] },
      { x: 81, y: 67.5, w: 7, h: 7.5, label: "LLM", alt: ["Sprachmodell", "Ollama"] },
      { x: 91.5, y: 68.5, w: 7.5, h: 5, label: "Response", alt: ["Antwort"] },
    ],
  },
];
