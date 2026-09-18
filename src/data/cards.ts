import type { Card, Chapter, ExamCase } from "@/lib/types";
import { CH1 } from "./ch1";
import { CH2 } from "./ch2";
import { CH3 } from "./ch3";
import { CH4 } from "./ch4";
import { CH5 } from "./ch5";
import { CH6 } from "./ch6";
import { CH7 } from "./ch7";
import { CH8 } from "./ch8";
import { EXAM } from "./exam";

export const CHAPTERS: Chapter[] = [
  { id: 1, name: "Datensysteme", sub: "3V, RDBMS, ACID, DWH, NoSQL, CAP/BASE" },
  { id: 2, name: "Infrastruktur", sub: "Hadoop, Spark, Cloud, Docker, InfluxDB, Grafana" },
  { id: 3, name: "Key-Value & Spalten", sub: "Redis, Cassandra" },
  { id: 4, name: "Dokumente", sub: "MongoDB, JSON/BSON, Aggregation" },
  { id: 5, name: "Graphen & Vektoren", sub: "Neo4j, Cypher, Dijkstra, Embeddings, RAG" },
  { id: 6, name: "Analyse: Verfahren", sub: "SQL, Pandas, Gartner-Stufen, Skalen, ML" },
  { id: 7, name: "Analyse: Algorithmen", sub: "kNN, Regression, Clustering, Diskriminanz" },
  { id: 8, name: "Neuronale Netze", sub: "Aufbau, Aktivierung, Backpropagation, CNN" },
];

export const CARDS: Card[] = [
  ...CH1,
  ...CH2,
  ...CH3,
  ...CH4,
  ...CH5,
  ...CH6,
  ...CH7,
  ...CH8,
];

export const EXAM_CASES: ExamCase[] = EXAM;
