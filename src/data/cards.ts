import type { Card, Chapter, ExamCase } from "@/lib/types";

export const CHAPTERS: Chapter[] = [
  {
    "id": 1,
    "name": "Datensysteme",
    "sub": "3V, RDBMS, ACID, DWH, NoSQL, CAP/BASE"
  },
  {
    "id": 2,
    "name": "Infrastruktur",
    "sub": "Hadoop, Spark, Cloud, Docker, InfluxDB, Grafana"
  },
  {
    "id": 3,
    "name": "Key-Value & Spalten",
    "sub": "Redis, Cassandra"
  },
  {
    "id": 4,
    "name": "Dokumente",
    "sub": "MongoDB, JSON/BSON, Aggregation"
  },
  {
    "id": 5,
    "name": "Graphen & Vektoren",
    "sub": "Neo4j, Cypher, Dijkstra, Embeddings, RAG"
  },
  {
    "id": 6,
    "name": "Analyse: Verfahren",
    "sub": "SQL, Pandas, Gartner-Stufen, Skalen, ML"
  },
  {
    "id": 7,
    "name": "Analyse: Algorithmen",
    "sub": "kNN, Regression, Clustering, Diskriminanz"
  },
  {
    "id": 8,
    "name": "Neuronale Netze",
    "sub": "Aufbau, Aktivierung, Backpropagation, CNN"
  }
];

export const CARDS: Card[] = [
  {
    "id": "k1-001",
    "ch": 1,
    "topic": "3V",
    "q": "Wofür stehen die 3 V von Big Data?",
    "a": "<b>Volume</b> – enorme Datenmengen.<br><b>Velocity</b> – hohe Geschwindigkeit der Entstehung/Verarbeitung (Echtzeit statt Batch).<br><b>Variety</b> – Vielfalt der Formate (strukturiert bis unstrukturiert).",
    "options": [
      "Volume, Velocity, Variety",
      "Volume, Value, Veracity",
      "Variety, Validity, Value",
      "Velocity, Veracity, Volume"
    ],
    "correct": 0
  },
  {
    "id": "k1-002",
    "ch": 1,
    "topic": "3V",
    "q": "Welche zwei V werden oft ergänzt und was bedeuten sie?",
    "a": "<b>Veracity</b> – Unsicherheit bzw. Qualität der Daten (wie verlässlich sind sie?).<br><b>Value</b> – der Nutzen, der aus den Daten gewonnen wird."
  },
  {
    "id": "k1-003",
    "ch": 1,
    "topic": "3V",
    "q": "Nenne je ein Praxisbeispiel für Volume, Velocity und Variety.",
    "a": "<b>Volume</b>: Videofiles im GB-Bereich vs. Textfiles mit wenigen KB.<br><b>Velocity</b>: Twitter – 2011 ca. 140 Mio. Tweets/Tag, 2021 ca. 500 Mio. Tweets/Tag; Echtzeit-Streams.<br><b>Variety</b>: Excel/Datenbank neben Logfiles, GPS-, Sensordaten, Foto/Audio/Video."
  },
  {
    "id": "k1-004",
    "ch": 1,
    "topic": "3V",
    "q": "Was sind strukturierte, was unstrukturierte Daten?",
    "a": "<b>Strukturiert</b>: festes Schema, in Zeilen/Spalten ablegbar – Datenbanktabellen, Excel.<br><b>Unstrukturiert</b>: kein festes Schema – Text, Logfiles, Foto, Audio, Video, Sensordaten.<br>RDBMS = extrem stark strukturiert.",
    "options": [
      "Strukturiert = festes Schema (Tabellen), unstrukturiert = kein Schema (Video, Text)",
      "Strukturiert = klein, unstrukturiert = groß",
      "Strukturiert = SQL, unstrukturiert = NoSQL",
      "Strukturiert = lokal, unstrukturiert = in der Cloud"
    ],
    "correct": 0
  },
  {
    "id": "k1-005",
    "ch": 1,
    "topic": "3V",
    "q": "Warum ist die Datenmenge in den letzten Jahren explodiert? (4 Gründe)",
    "a": "1) Digitalisierung von Prozessen<br>2) Sensoren und IoT<br>3) Soziale Medien und mobile Anwendungen<br>4) Wissenschaftliche Experimente und Simulationen"
  },
  {
    "id": "k1-006",
    "ch": 1,
    "topic": "RDBMS",
    "q": "Wie ist eine relationale Datenbank aufgebaut?",
    "a": "Tabellen (= <b>Relationen</b>) aus Zeilen (Tupel/Records/Datensätze) und Spalten (Attribute/Felder/Variablen).<br>Zwischen den Tabellen bestehen Beziehungen (Relationen)."
  },
  {
    "id": "k1-007",
    "ch": 1,
    "topic": "RDBMS",
    "q": "Erkläre Primary Key und Foreign Key an einem Beispiel.",
    "a": "<b>Primary Key</b>: Attribut (oder Kombination), das jeden Datensatz eindeutig identifiziert – z.B. <code>KundenID</code> in der Tabelle <i>Kunden</i>; keine zwei Kunden mit gleicher ID.<br><b>Foreign Key</b>: Attribut, das auf den Primary Key einer anderen Tabelle verweist – z.B. <code>KundenID</code> in <i>Bestellungen</i> verweist auf <i>Kunden.KundenID</i>. Dadurch weiß man, welche Bestellung zu welchem Kunden gehört."
  },
  {
    "id": "k1-008",
    "ch": 1,
    "topic": "RDBMS",
    "q": "Nenne die wichtigsten RDBMS-Anbieter.",
    "a": "Oracle (Marktführer), MySQL (Open Source, von Oracle erworben), Microsoft SQL Server, PostgreSQL, IBM Db2, SQLite, MS Access."
  },
  {
    "id": "k1-009",
    "ch": 1,
    "topic": "RDBMS",
    "q": "Was ist der zentrale Nachteil relationaler DBs im Big-Data-Kontext?",
    "a": "Wegen <b>ACID</b> läuft alles über eine zentrale Einheit – jede Transaktion muss über einen zentralen Punkt koordiniert/gesperrt werden.<br>Bei sehr vielen Daten und vielen gleichzeitigen Usern ist das nicht mehr skalierbar (keine einfache horizontale Skalierung).",
    "options": [
      "ACID erzwingt eine zentrale Koordination – das skaliert bei vielen Daten/Usern nicht mehr",
      "Relationale DBs können keine Zahlen speichern",
      "SQL ist zu langsam zu tippen",
      "Relationale DBs haben kein Schema"
    ],
    "correct": 0
  },
  {
    "id": "k1-010",
    "ch": 1,
    "topic": "ACID",
    "q": "Was ist eine Transaktion?",
    "a": "Eine feste Folge von Operationen, die als <b>eine logische Einheit</b> betrachtet wird. Sie wird entweder vollständig ausgeführt oder vollständig zurückgerollt (Rollback).<br>Klassisches Beispiel: Überweisung – Abbuchung Konto A + Gutschrift Konto B."
  },
  {
    "id": "k1-011",
    "ch": 1,
    "topic": "ACID",
    "q": "Wofür steht ACID?",
    "a": "<b>A</b>tomicity (Atomarität)<br><b>C</b>onsistency (Konsistenz)<br><b>I</b>solation (Isoliertheit)<br><b>D</b>urability (Dauerhaftigkeit)",
    "options": [
      "Atomicity, Consistency, Isolation, Durability",
      "Availability, Consistency, Isolation, Durability",
      "Atomicity, Concurrency, Integrity, Durability",
      "Access, Control, Isolation, Data"
    ],
    "correct": 0
  },
  {
    "id": "k1-012",
    "ch": 1,
    "topic": "ACID",
    "q": "Erkläre Atomarität.",
    "a": "Die Transaktion wird <b>entweder ganz oder gar nicht</b> ausgeführt. Es gibt keinen Zustand, in dem nur ein Teil abgeschlossen ist.<br>Beispiel: Geld wird abgebucht, Gutschrift schlägt fehl → alles wird rückgängig gemacht."
  },
  {
    "id": "k1-013",
    "ch": 1,
    "topic": "ACID",
    "q": "Erkläre Consistency – worauf bezieht sich das konkret?",
    "a": "Die Transaktion überführt die DB von einem konsistenten in einen anderen konsistenten Zustand; Integritätsregeln dürfen nie verletzt werden.<br>Konkret: <b>alle Primär- und Fremdschlüssel sind gültig</b> – beide Keys sind Constraints, die nach der Transaktion erfüllt sein müssen."
  },
  {
    "id": "k1-014",
    "ch": 1,
    "topic": "ACID",
    "q": "Erkläre Isolation – wie wird sie technisch realisiert?",
    "a": "Gleichzeitig laufende Transaktionen dürfen sich nicht gegenseitig beeinflussen; Zwischenstände sind für andere nicht sichtbar. Es muss aussehen, als liefen sie nacheinander.<br>Realisierung: <b>Sperrprotokolle</b> oder <b>Zeitstempelverfahren</b>."
  },
  {
    "id": "k1-015",
    "ch": 1,
    "topic": "ACID",
    "q": "Erkläre Durability.",
    "a": "Sobald eine Transaktion committed ist, sind die Änderungen dauerhaft – die Daten sind auch nach einem Systemabsturz vorhanden."
  },
  {
    "id": "k1-016",
    "ch": 1,
    "topic": "ACID",
    "q": "Wann ist ACID besonders relevant, wann kaum?",
    "a": "Sehr relevant, wenn <b>mehrere Personen/Prozesse gleichzeitig</b> auf der Datenbank arbeiten (Konflikte, Sperren, Konsistenz).<br>Als alleiniger Nutzer ist ACID praktisch kaum spürbar."
  },
  {
    "id": "k1-017",
    "ch": 1,
    "topic": "Isolation",
    "q": "Nenne die vier Isolationslevel nach ANSI/ISO SQL in aufsteigender Strenge.",
    "a": "1) READ UNCOMMITTED<br>2) READ COMMITTED<br>3) REPEATABLE READ<br>4) SERIALIZABLE",
    "options": [
      "Read Uncommitted → Read Committed → Repeatable Read → Serializable",
      "Read Committed → Read Uncommitted → Serializable → Repeatable Read",
      "Serializable → Repeatable Read → Read Committed → Read Uncommitted",
      "Dirty Read → Phantom Read → Non Repeatable Read → Serializable"
    ],
    "correct": 0
  },
  {
    "id": "k1-018",
    "ch": 1,
    "topic": "Isolation",
    "q": "Grundregel: Was passiert, wenn man das Isolationslevel erhöht?",
    "a": "Höheres Level = <b>mehr Konsistenz</b>, aber <b>weniger Parallelität</b> und schlechtere Performance (mehr/längere Sperren).<br>Niedrigeres Level = mehr Parallelität, aber Risiko von Inkonsistenzen (Anomalien)."
  },
  {
    "id": "k1-019",
    "ch": 1,
    "topic": "Anomalien",
    "q": "Was ist ein Dirty Read? Beispiel.",
    "a": "Eine Transaktion liest Daten, die eine andere geändert, aber noch <b>nicht committed</b> hat.<br>Beispiel: T1 setzt Kontostand auf 500 (kein Commit), T2 liest 500, T1 macht Rollback → T2 hat mit einem Wert gearbeitet, den es nie gab.<br>Tritt nur bei READ UNCOMMITTED auf."
  },
  {
    "id": "k1-020",
    "ch": 1,
    "topic": "Anomalien",
    "q": "Was ist ein Non Repeatable Read? Beispiel.",
    "a": "Eine Transaktion liest <b>denselben Datensatz zweimal</b> und bekommt unterschiedliche Werte, weil eine andere Transaktion ihn dazwischen geändert und committed hat.<br>Beispiel: T1 liest Preis = 100, T2 ändert auf 120 und committed, T1 liest erneut = 120.<br>Möglich bei READ COMMITTED; verhindert ab REPEATABLE READ.",
    "options": [
      "Derselbe Satz liefert beim zweiten Lesen einen anderen Wert",
      "Es kommen neue Zeilen dazu",
      "Daten werden vor dem Commit gelesen",
      "Eine Transaktion wird zweimal ausgeführt"
    ],
    "correct": 0
  },
  {
    "id": "k1-021",
    "ch": 1,
    "topic": "Anomalien",
    "q": "Was ist ein Phantom Read? Beispiel.",
    "a": "Eine Transaktion liest eine <b>Menge von Zeilen</b> nach einem Suchkriterium; eine andere Transaktion fügt neue passende Zeilen ein. Beim erneuten Lesen erscheinen diese wie „Phantome“.<br>Beispiel: T1 zählt alle Kunden aus Vorarlberg (= 50), T2 fügt 3 neue ein, T1 zählt erneut (= 53).<br>Möglich bei REPEATABLE READ; verhindert erst bei SERIALIZABLE."
  },
  {
    "id": "k1-022",
    "ch": 1,
    "topic": "Isolation",
    "q": "Welche Anomalie verhindert welches Level? (Tabelle im Kopf)",
    "a": "<b>READ UNCOMMITTED</b>: Dirty, Non-Repeatable, Phantom alle möglich.<br><b>READ COMMITTED</b>: kein Dirty Read.<br><b>REPEATABLE READ</b>: kein Dirty, kein Non-Repeatable Read.<br><b>SERIALIZABLE</b>: keine der drei Anomalien."
  },
  {
    "id": "k1-023",
    "ch": 1,
    "topic": "Isolation",
    "q": "Welches Isolationslevel ist Default bei Oracle, welches bei MySQL?",
    "a": "<b>Oracle</b>: READ COMMITTED<br><b>MySQL</b>: REPEATABLE READ",
    "options": [
      "Oracle: Read Committed, MySQL: Repeatable Read",
      "Oracle: Serializable, MySQL: Read Committed",
      "Oracle: Repeatable Read, MySQL: Read Uncommitted",
      "Beide: Serializable"
    ],
    "correct": 0
  },
  {
    "id": "k1-024",
    "ch": 1,
    "topic": "Isolation",
    "q": "Warum ist SERIALIZABLE in der Praxis oft nicht brauchbar?",
    "a": "Es funktioniert nur bei <b>geringer Last</b>. Bei vielen gleichzeitigen Transaktionen kommt es zu sehr vielen und langen <b>Sperren</b>, die Parallelität bricht ein und die Performance leidet stark."
  },
  {
    "id": "k1-025",
    "ch": 1,
    "topic": "DWH",
    "q": "Was ist ein Data Warehouse und wozu dient es?",
    "a": "Eine <b>zentrale Sammlung von Daten aus verschiedenen Quellen</b>.<br>Zweck: Analyse und betriebswirtschaftliche Entscheidungshilfe (Reporting, quellenübergreifende Auswertung)."
  },
  {
    "id": "k1-026",
    "ch": 1,
    "topic": "DWH",
    "q": "Nenne die 5 Schichten der DWH-Architektur.",
    "a": "1) Verschiedene Datenquellen/Systeme<br>2) Staging Area<br>3) Core DWH / Warehouse-DB-Server<br>4) OLAP-Server (Daten im Star-/Snowflake-Schema)<br>5) Client-Ebene / API für Abfragen und Reports<br>Dazwischen jeweils <b>ETL</b>.",
    "options": [
      "Quellen → Staging → Core DWH → OLAP → Client",
      "Quellen → OLAP → Staging → Core DWH → Client",
      "Staging → Quellen → Data Lake → OLAP → Client",
      "Quellen → Data Mart → Staging → Core DWH → Client"
    ],
    "correct": 0
  },
  {
    "id": "k1-027",
    "ch": 1,
    "topic": "DWH",
    "q": "Wofür steht ETL?",
    "a": "<b>E</b>xtract – <b>T</b>ransform – <b>L</b>oad.<br>Extraktion aus den Quellen, Transformation in ein einheitliches Format, Laden ins Warehouse."
  },
  {
    "id": "k1-028",
    "ch": 1,
    "topic": "DWH",
    "q": "Was ist die Staging Area und was passiert dort?",
    "a": "Die Zwischenschicht zwischen Quellsystemen und Core-DWH – meist selbst eine <b>relationale Datenbank</b>.<br>Hier werden die Daten aus den unterschiedlichen Quellen <b>einheitlich überführt</b> (vereinheitlicht, bereinigt), bevor sie ins Warehouse geladen werden."
  },
  {
    "id": "k1-029",
    "ch": 1,
    "topic": "DWH",
    "q": "Was ist ein Data Mart?",
    "a": "Ein <b>Ausschnitt / eine Sicht (View)</b> auf die DWH-Daten für eine bestimmte Fachabteilung.<br>Prinzip <b>need to know</b>: jeder bekommt nur die Daten, die er wirklich braucht (User Interface / Zugriffsschutz)."
  },
  {
    "id": "k1-030",
    "ch": 1,
    "topic": "DWH",
    "q": "Nenne die Gründe für den Betrieb eines DWH.",
    "a": "• Integration von Daten aus verteilten, unterschiedlich strukturierten Beständen<br>• konsistente, quellenübergreifende Auswertung<br>• aufwändiger Export/Import erfolgt <b>einmalig an zentraler Stelle</b><br>• Daten stehen Fachabteilungen für Analyse/Reporting bereit"
  },
  {
    "id": "k1-031",
    "ch": 1,
    "topic": "DWH",
    "q": "Erkläre das Star-Schema: Faktentabelle vs. Dimensionstabelle.",
    "a": "<b>Faktentabelle</b> (Mitte, „Würfelkern“): enthält die Kennzahlen/Measures, die ausgewertet werden sollen – z.B. Umsatz, Kosten. Sie speichert außerdem die Fremdschlüssel der Dimensionstabellen; diese bilden zusammen ihren Primärschlüssel.<br><b>Dimensionstabellen</b> (Strahlen): qualitative Daten, die unterschiedliche <b>Sichten</b> auf die Fakten ermöglichen – z.B. Zeit, Produkt, Region, Kunde.<br>Ziel: Anzahl der Tabellen gegenüber dem relationalen Modell minimieren.",
    "options": [
      "Fakten = Kennzahlen zum Auswerten, Dimensionen = Sichten darauf",
      "Fakten = Texte, Dimensionen = Zahlen",
      "Fakten = Rohdaten, Dimensionen = Backups",
      "Fakten = Primärschlüssel, Dimensionen = Fremdschlüssel"
    ],
    "correct": 0
  },
  {
    "id": "k1-032",
    "ch": 1,
    "topic": "DWH",
    "q": "Wie hängen Schlüssel im Star-Schema zusammen?",
    "a": "Die Primärschlüssel der Dimensionstabellen werden als <b>Fremdschlüssel</b> in die Faktentabelle aufgenommen und bilden dort zusammen den <b>zusammengesetzten Primärschlüssel</b> der Faktentabelle."
  },
  {
    "id": "k1-033",
    "ch": 1,
    "topic": "Data Lake",
    "q": "Was ist ein Data Lake und wie unterscheidet er sich vom DWH?",
    "a": "Erweiterung des DWH-Gedankens, technisch mit Hadoop bzw. NoSQL umgesetzt.<br><b>DWH</b>: Daten werden per ETL aufbereitet, damit sie vergleichbar/aggregierbar sind – <i>schema on write</i>.<br><b>Data Lake</b>: Daten werden im <b>ursprünglichen Format unbearbeitet</b> gesammelt; Transformation erst bei Bedarf unmittelbar vor der Analyse – <i>schema on read</i>.",
    "options": [
      "Data Lake speichert roh, transformiert erst bei der Analyse; DWH transformiert vorher per ETL",
      "Data Lake ist nur ein anderer Name fürs DWH",
      "Data Lake speichert nur Bilder",
      "Im Data Lake gibt es keine Datenquellen"
    ],
    "correct": 0
  },
  {
    "id": "k1-034",
    "ch": 1,
    "topic": "Data Lake",
    "q": "Was macht die Ingest-Plattform beim Data Lake?",
    "a": "Sie ist das „System von Schleusen und Pumpen“, das den Datenfluss in den See reguliert:<br>1) <b>Datenaufnahme</b> aus verschiedenen Quellen (DBs, Sensoren, Logs)<br>2) <b>Datenaufbereitung</b> in ein einheitliches Format<br>3) <b>Datenspeicherung</b> im Data Lake"
  },
  {
    "id": "k1-035",
    "ch": 1,
    "topic": "NoSQL",
    "q": "Wofür steht NoSQL – und was steckt historisch dahinter?",
    "a": "Heute: <b>„Not only SQL“</b>.<br>Ursprünglich 1998 von Carlo Strozzi als „no SQL“ für eine DB ohne SQL-Schnittstelle (die aber relational war). Strozzi meinte, korrekter wäre <b>„NoREL“</b> gewesen, denn das eigentliche Konzept ist der <b>Verzicht auf Relationen</b>."
  },
  {
    "id": "k1-036",
    "ch": 1,
    "topic": "NoSQL",
    "q": "Welche Kriterien kennzeichnen eine NoSQL-Datenbank?",
    "a": "• kein relationales Datenmodell – schemafrei oder schwache Schemarestriktionen, keine Joins, keine Normalisierung<br>• verteiltes, auf <b>horizontale Skalierbarkeit</b> ausgelegtes System auf Commodity Hardware<br>• „kein SQL“ – Zugriff über einfache API<br>• „keine Transaktionen“ – Konsistenzmodell <b>BASE</b> statt ACID"
  },
  {
    "id": "k1-037",
    "ch": 1,
    "topic": "NoSQL",
    "q": "Wie skaliert eine NoSQL-Datenbank?",
    "a": "<b>Horizontal</b>: die Architektur setzt auf viele kostengünstige, <b>gleichrangige</b> Rechnerknoten. Skalierung erfolgt einfach durch <b>Hinzufügen eines neuen Knotens</b>."
  },
  {
    "id": "k1-038",
    "ch": 1,
    "topic": "NoSQL",
    "q": "Nenne die 4 Core-NoSQL-Typen mit je einem Vertreter.",
    "a": "<b>Key-Value Store</b>: Redis, DynamoDB – 1 Wert je Schlüssel, get/put.<br><b>Document Store</b>: MongoDB, CouchDB – semistrukturierte Dokumente (JSON).<br><b>Wide Column Store</b>: Cassandra, HBase – Zeilen mit sehr vielen dynamischen Spalten.<br><b>Graph-DB</b>: Neo4j – Knoten und Kanten mit Eigenschaften.",
    "options": [
      "Key-Value, Document, Wide Column, Graph",
      "Key-Value, Relational, Vektor, Graph",
      "Document, Star, Snowflake, Graph",
      "Column, Row, Index, Cache"
    ],
    "correct": 0
  },
  {
    "id": "k1-039",
    "ch": 1,
    "topic": "NoSQL",
    "q": "Wann greift man zum Star-Schema und wann zu NoSQL?",
    "a": "Wenn die relationale DB an Grenzen stößt, kann man mit dem <b>Star-Schema</b> noch mehr aus dem RDBMS herausholen (große Datenmengen, analytisch optimiert).<br>Reicht auch das nicht mehr → <b>NoSQL-Datenbanken</b>."
  },
  {
    "id": "k1-040",
    "ch": 1,
    "topic": "CAP",
    "q": "Wofür stehen die drei Buchstaben im CAP-Theorem?",
    "a": "<b>C</b>onsistency – alle Clients sehen zur selben Zeit dieselben Daten.<br><b>A</b>vailability – jede Anfrage an einen funktionierenden Knoten wird in definierter Zeit beantwortet.<br><b>P</b>artition Tolerance – das System läuft weiter, auch wenn Verbindungen zwischen Knoten ausfallen.",
    "options": [
      "Consistency, Availability, Partition Tolerance",
      "Consistency, Atomicity, Persistence",
      "Concurrency, Availability, Performance",
      "Cache, Availability, Partition"
    ],
    "correct": 0
  },
  {
    "id": "k1-041",
    "ch": 1,
    "topic": "CAP",
    "q": "Wie lautet die Kernaussage des CAP-Theorems (Brewer)?",
    "a": "Ein <b>verteiltes System</b> kann maximal <b>2 der 3</b> Eigenschaften gleichzeitig erfüllen. Konsistenz, Verfügbarkeit und Ausfalltoleranz sind nicht gleichzeitig vollständig erreichbar."
  },
  {
    "id": "k1-042",
    "ch": 1,
    "topic": "CAP",
    "q": "Warum ist P in der Praxis nicht verhandelbar – und was folgt daraus?",
    "a": "Verteilte Systeme müssen immer mit Netzwerkfehlern rechnen → <b>Partitionstoleranz ist Pflicht</b>.<br>Bei einer Partition bleibt nur die Wahl:<br><b>CP</b> – Konsistenz halten, dafür Anfragen blockieren/ablehnen (keine Verfügbarkeit).<br><b>AP</b> – weiter antworten, dafür ggf. inkonsistente Daten.<br>Deshalb gilt <b>CA bei verteilten Systemen als nicht möglich</b>."
  },
  {
    "id": "k1-043",
    "ch": 1,
    "topic": "CAP",
    "q": "Was bedeutet CP konkret, was AP?",
    "a": "<b>CP</b>: konsistent, aber bei Netzwerkpartitionierung nicht verfügbar – Transaktionen werden blockiert, Merge-Konflikte werden vermieden. (z.B. Redis, Couchbase)<br><b>AP</b>: verfügbar, aber nicht konsistent – Schreiben ist immer möglich, auch ohne Kommunikation mit anderen Knoten; danach ist <b>Konfliktauflösung</b> nötig, weil verschiedene Versionen desselben Datums existieren."
  },
  {
    "id": "k1-044",
    "ch": 1,
    "topic": "BASE",
    "q": "Wofür steht BASE?",
    "a": "<b>BA</b>sically <b>A</b>vailable – <b>S</b>oft State – <b>E</b>ventually Consistent.",
    "options": [
      "Basically Available, Soft State, Eventually Consistent",
      "Basic Atomicity, Safe State, Exact Consistency",
      "Balanced Access, Shared State, Eventual Commit",
      "Basically Atomic, Serializable, Eventually Committed"
    ],
    "correct": 0
  },
  {
    "id": "k1-045",
    "ch": 1,
    "topic": "BASE",
    "q": "Erkläre die drei Teile von BASE.",
    "a": "<b>Basically Available</b>: fällt ein Teil des verteilten Systems aus, läuft der Rest weiter. Ohne Replikation: 1 von 10 Servern weg → 10 % der Queries schlagen fehl. Mit Replikation (z.B. RF=3) können Queries trotz Knotenausfall beantwortet werden.<br><b>Soft State</b>: Daten werden letztlich mit aktuelleren überschrieben; der Zustand ist nicht fix.<br><b>Eventually Consistent</b>: Replikate können kurzzeitig inkonsistent sein, der Replikationsmechanismus gleicht sie <b>letztendlich</b> ab."
  },
  {
    "id": "k1-046",
    "ch": 1,
    "topic": "BASE",
    "q": "Was heißt „Eventually Consistent“ genau – und was ist Konsistenz dann?",
    "a": "Gegenteil der strikten Konsistenz von ACID, Unterkategorie von Weak Consistency.<br>Nicht alle Benutzer sehen zur gleichen Zeit dieselben Daten – sie befinden sich in einem <b>Zeitfenster der Inkonsistenz</b>.<br>Konsistenz ist damit kein fester Zustand nach der Transaktion mehr, sondern ein <b>Übergangsprozess</b>."
  },
  {
    "id": "k1-047",
    "ch": 1,
    "topic": "BASE",
    "q": "Was ist MVCC und wozu dient es bei BASE?",
    "a": "<b>Multiversion Concurrency Control</b> – BASE versucht damit <b>Sperren zu vermeiden</b>, indem mehrere Versionen eines Datensatzes gehalten werden. Ziel: Verfügbarkeit gewährleisten."
  },
  {
    "id": "k1-048",
    "ch": 1,
    "topic": "BASE",
    "q": "Stelle ACID und BASE gegenüber.",
    "a": "<b>ACID</b>: starke Konsistenz, Isolation, Priorität Transaktionen im logischen Einbenutzerbetrieb, eingeschränkte Verfügbarkeit, konservativ/pessimistisch, schwierige Weiterentwicklung.<br><b>BASE</b>: schwache Konsistenz (veraltete Daten „ok“), „Availability first“, Priorität „Best effort“, ungefähre Antworten ok, schneller, leichtere Evolution."
  },
  {
    "id": "k1-049",
    "ch": 1,
    "topic": "BASE",
    "q": "Nenne Typen von Eventual Consistency.",
    "a": "Causal Consistency, Read-your-writes Consistency, Monotonic Read Consistency, Monotonic Write Consistency."
  },
  {
    "id": "k2-001",
    "ch": 2,
    "topic": "Hadoop",
    "q": "Was ist Hadoop?",
    "a": "Ein <b>Software-Framework zur Verarbeitung sehr großer Datenmengen</b>. Rechenaufgaben werden auf tausende Rechnerknoten verteilt.<br>Basiert ursprünglich auf dem MapReduce-Algorithmus und den Grundideen des Google-Dateisystems. Open-Source-Projekt der Apache Software Foundation."
  },
  {
    "id": "k2-002",
    "ch": 2,
    "topic": "Hadoop",
    "q": "Nenne die Hauptkomponenten von Apache Hadoop.",
    "a": "<b>HDFS</b> (verteiltes Dateisystem), <b>YARN</b> (Ressourcenverwaltung), <b>MapReduce</b> (Programmiermodell) – plus Erweiterungen („Others“).",
    "options": [
      "HDFS, YARN, MapReduce",
      "HDFS, SQL, Spark",
      "YARN, Docker, Kubernetes",
      "MapReduce, Cassandra, Redis"
    ],
    "correct": 0
  },
  {
    "id": "k2-003",
    "ch": 2,
    "topic": "Hadoop",
    "q": "Was macht HDFS – erkläre das Prinzip.",
    "a": "Hadoop Distributed File System: hochverfügbares, verteiltes Dateisystem für sehr große Datenmengen, organisiert in Server-Clustern.<br>Dateien werden in <b>Datenblöcke fester Länge zerlegt</b> und <b>redundant auf mehrere Nodes verteilt</b>. Dadurch kann parallel in mehreren Blöcken gearbeitet werden und einzelne Knotenausfälle sind unkritisch."
  },
  {
    "id": "k2-004",
    "ch": 2,
    "topic": "Hadoop",
    "q": "Wofür steht YARN und was tut es?",
    "a": "<b>Y</b>et <b>A</b>nother <b>R</b>esource <b>N</b>egotiator – der Ressourcenmanager von Hadoop.<br>Er verteilt die angefragten Ressourcen (CPU, Speicher) des Clusters auf die verschiedenen Jobs; pro Anwendung/Nutzer konfigurierbar."
  },
  {
    "id": "k2-005",
    "ch": 2,
    "topic": "Hadoop",
    "q": "Erkläre MapReduce und seine Phasen.",
    "a": "Von Google eingeführtes Programmiermodell für nebenläufige Berechnungen über sehr große Datenmengen auf Computerclustern.<br>Drei Phasen: <b>Map – Shuffle – Reduce</b>; Map und Reduce werden vom Anwender spezifiziert.<br><b>Map</b>: nimmt ein Set von Daten und wandelt es in Tupel (Key/Value-Paare) um.<br><b>Reduce</b>: nimmt den Output des Map-Jobs und kombiniert die Tupel zu einer kleineren Menge. Reduce kommt immer nach Map.",
    "options": [
      "Map, Shuffle, Reduce",
      "Map, Sort, Return",
      "Merge, Shuffle, Reduce",
      "Map, Filter, Join"
    ],
    "correct": 0
  },
  {
    "id": "k2-006",
    "ch": 2,
    "topic": "Hadoop",
    "q": "Warum gilt MapReduce als veraltet und was ersetzt es?",
    "a": "Es wird zunehmend durch <b>DAG-basierte Engines</b> ersetzt (Directed Acyclic Graph – erlaubt performante Ausführung komplexer verteilter Algorithmen).<br>Beispiele: <b>Apache Spark</b> und <b>Apache TEZ</b>."
  },
  {
    "id": "k2-007",
    "ch": 2,
    "topic": "Spark",
    "q": "Was ist Apache Spark und woher kommt es?",
    "a": "Framework für <b>Cluster Computing</b>, entstanden am AMPLab der University of California, Berkeley; seit 2010 Open Source, seit 2013 bei der Apache Software Foundation, seit 2014 Top-Level-Projekt.<br>Basiert ebenfalls auf einem gerichteten azyklischen Graphen (DAG)."
  },
  {
    "id": "k2-008",
    "ch": 2,
    "topic": "Spark",
    "q": "Was ist ein RDD?",
    "a": "<b>Resilient Distributed Dataset</b> – „robuster verteilter Datensatz“: die grundlegende Datenstruktur aller Spark-Operationen.<br>Ein nach logischen Kriterien gebildeter (Teil-)Bestand von Daten, der im Hintergrund <b>über viele Nodes/Blöcke verteilt</b> wird, sodass parallel gearbeitet werden kann.",
    "options": [
      "Resilient Distributed Dataset – verteilte Grunddatenstruktur von Spark",
      "Relational Data Definition",
      "Redundant Disk Drive",
      "Remote Data Descriptor"
    ],
    "correct": 0
  },
  {
    "id": "k2-009",
    "ch": 2,
    "topic": "Spark",
    "q": "Nenne die vier Kernkomponenten von Spark.",
    "a": "<b>Spark Core</b> – Grundinfrastruktur (Aufgabenverteilung, Scheduling, I/O), Basis der RDDs.<br><b>Spark SQL</b> – wandelt RDDs in DataFrames, auf denen SQL-Abfragen möglich sind.<br><b>Spark Streaming</b> – Verarbeitung von Datenströmen.<br><b>MLlib / SparkML</b> – Bibliotheken für Machine-Learning-Algorithmen."
  },
  {
    "id": "k2-010",
    "ch": 2,
    "topic": "Spark",
    "q": "Warum ist Spark schnell und wo läuft es?",
    "a": "Schnell, weil Zugriffe im <b>Hauptspeicher</b> erfolgen; leicht verwendbar durch Implementierungen für Java, Scala, Python, R und SQL.<br>Läuft auf Hadoop oder Kubernetes; Datenquellen u.a. HDFS, HBase, Cassandra."
  },
  {
    "id": "k2-011",
    "ch": 2,
    "topic": "Cloud",
    "q": "Definiere Cloud Computing.",
    "a": "Ein Ansatz, IT-Infrastrukturen (Speicherplatz, Rechenleistung, Anwendungssoftware) über ein Rechnernetz – z.B. das Internet – <b>als Dienstleistung</b> zur Verfügung zu stellen, ohne dass sie lokal installiert sein müssen.<br>Nutzung ausschließlich über technische Schnittstellen und Protokolle, etwa den Webbrowser."
  },
  {
    "id": "k2-012",
    "ch": 2,
    "topic": "Cloud",
    "q": "Erkläre SaaS mit Beispiel.",
    "a": "<b>Software as a Service</b>: Software und IT-Infrastruktur werden bei einem externen Dienstleister betrieben und vom Kunden als Dienstleistung genutzt.<br>Benötigt wird nur ein internetfähiger Rechner; Zugriff meist über den Webbrowser. (z.B. Microsoft 365, Gmail)",
    "options": [
      "Fertige Software als Dienst, Zugriff über den Browser",
      "Gemietete virtuelle Server",
      "Entwicklungsumgebung in der Cloud",
      "Automatische Containerverwaltung"
    ],
    "correct": 0
  },
  {
    "id": "k2-013",
    "ch": 2,
    "topic": "Cloud",
    "q": "Erkläre PaaS.",
    "a": "<b>Platform as a Service</b>: stellt in der Cloud eine <b>Computer-Plattform zur Entwicklung von Webanwendungen</b> bereit.<br>Schnell einsetzbare Laufzeit- und Entwicklungsumgebungen, ohne dass Hardware und Basissoftware angeschafft werden müssen."
  },
  {
    "id": "k2-014",
    "ch": 2,
    "topic": "Cloud",
    "q": "Erkläre IaaS und nenne die Vorteile.",
    "a": "<b>Infrastructure as a Service</b>: Rechnerinfrastruktur wird nicht gekauft, sondern <b>bei Bedarf gemietet</b> (on demand).<br>Vorteile: einmalige Anwendungen werden bezahlbar; Belastungsspitzen werden abgefangen; plötzliches Wachstum problemlos (Skalierbarkeit); brachliegende Kapazitäten sofort freigebbar; keine eigene Infrastruktur für selten genutzte Anwendungen; durch Virtualisierung einfaches Softwaretesting auf verschiedensten Plattformen."
  },
  {
    "id": "k2-015",
    "ch": 2,
    "topic": "Cloud",
    "q": "Was ist CaaS?",
    "a": "<b>Container as a Service</b>: stellt auf Basis eines Images und der Konfiguration automatisch Container bereit und verwaltet sie.<br>Ähnlich wie PaaS und schwer davon abzugrenzen; beide versprechen eine <b>„immutable Infrastruktur“</b>, mit der sich Dienste automatisch wiederherstellen lassen."
  },
  {
    "id": "k2-016",
    "ch": 2,
    "topic": "Container",
    "q": "Was bedeutet Virtualisierung – und was ist der Unterschied zwischen VM und Container?",
    "a": "<b>Virtualisierung</b>: physische Ressourcen werden abstrahiert, sodass mehrere isolierte Systeme auf einer Hardware laufen.<br><b>VM (Hypervisor-basiert)</b>: jede VM startet ein vollständiges eigenes Gastbetriebssystem → schwergewichtig, aber verschiedene Betriebssysteme möglich.<br><b>Container</b>: <b>kein weiteres Betriebssystem</b>, Container teilen sich den Kernel des Hosts → „leichtgewichtige“ Virtualisierung, deutlich effizienter bei CPU-Last, Haupt- und Massenspeicher.",
    "options": [
      "Container starten kein eigenes OS, VMs schon",
      "Container sind langsamer als VMs",
      "Container brauchen einen Hypervisor",
      "VMs teilen sich den Kernel"
    ],
    "correct": 0
  },
  {
    "id": "k2-017",
    "ch": 2,
    "topic": "Container",
    "q": "Was ist mit Containern NICHT möglich?",
    "a": "• Verschiedene Betriebssysteme (oder verschiedene Versionen desselben OS) gleichzeitig als Gastsystem betreiben.<br>• <b>Treiber laden</b> ist in Containern nicht möglich."
  },
  {
    "id": "k2-018",
    "ch": 2,
    "topic": "Docker",
    "q": "Was ist Docker?",
    "a": "Eine Virtualisierungslösung <b>ohne Hypervisor</b>: „Operating-system-level Virtualization“ mit Linux-Containern.<br>Container sind voneinander unabhängig, nutzen aber Teile des Linux-Kernels gemeinsam. Wichtiger Baustein im Umfeld von DevOps und Continuous Delivery."
  },
  {
    "id": "k2-019",
    "ch": 2,
    "topic": "Docker",
    "q": "Unterscheide Dockerfile, Docker-Image und Docker-Container.",
    "a": "<b>Dockerfile</b>: Skript, das die Konfiguration des Containers definiert und Installationsanweisungen enthält – versionierbar im VCS („Infrastructure as Code“).<br><b>Docker-Image</b>: Read-only-Template für Container.<br><b>Docker-Container</b>: aus einem Image per <code>docker run</code> instanziierte und gestartete, lauffähige Einheit.",
    "options": [
      "Dockerfile = Bauanleitung, Image = Read-only-Template, Container = laufende Instanz",
      "Dockerfile = Container, Image = Backup, Container = Skript",
      "Image = Bauanleitung, Dockerfile = Instanz, Container = Template",
      "Alle drei bezeichnen dasselbe"
    ],
    "correct": 0
  },
  {
    "id": "k2-020",
    "ch": 2,
    "topic": "Docker",
    "q": "Erkläre die Optionen: <code>docker run -d --name redis-db -p 6379:6379 redis</code>",
    "a": "<code>docker run</code> – aus einem Image einen Container erzeugen und starten.<br><code>-d</code> – detached, läuft im Hintergrund.<br><code>--name redis-db</code> – Name des Containers.<br><code>-p 6379:6379</code> – Portmapping <i>Host:Container</i>.<br><code>redis</code> – das verwendete Image.",
    "options": [
      "-d = im Hintergrund, -p = Portmapping Host:Container, --name = Containername",
      "-d = Debug, -p = Passwort, --name = Imagename",
      "-d = delete, -p = persistent, --name = Netzwerk",
      "-d = Datenbank, -p = Prozess, --name = Volume"
    ],
    "correct": 0
  },
  {
    "id": "k2-021",
    "ch": 2,
    "topic": "Docker",
    "q": "Was macht <code>-v ${PWD}/influxdb2:/var/lib/influxdb2</code> und <code>-e KEY=VALUE</code>?",
    "a": "<code>-v</code> – <b>Volume-Mapping</b>: verbindet ein Hostverzeichnis mit einem Verzeichnis im Container, damit Daten den Container überleben.<br><code>-e</code> – setzt eine <b>Umgebungsvariable</b> im Container (z.B. Initial-User/Passwort)."
  },
  {
    "id": "k2-022",
    "ch": 2,
    "topic": "Docker",
    "q": "Wie kommt man in die Kommandozeile eines laufenden Containers?",
    "a": "<code>docker exec -it &lt;name&gt; bash</code><br><code>-i</code> interaktiv, <code>-t</code> Terminal (TTY). Danach z.B. <code>redis-cli</code> bzw. <code>cqlsh</code> starten."
  },
  {
    "id": "k2-023",
    "ch": 2,
    "topic": "Kubernetes",
    "q": "Was ist Kubernetes?",
    "a": "Ein Open-Source-System zur <b>Automatisierung der Bereitstellung, Skalierung und Verwaltung von Container-Anwendungen</b> – also die Möglichkeit, viele Docker-Container automatisiert zu verwalten (Orchestrierung).<br>Ursprünglich von Google entworfen, an die CNCF gespendet; unterstützt von Azure, IBM Cloud, OpenShift, AWS EKS, Google Kubernetes Engine, Oracle OCI.",
    "options": [
      "Orchestrierung: automatisiertes Verwalten vieler Container",
      "Ein Ersatz für Docker-Images",
      "Eine NoSQL-Datenbank",
      "Ein Hypervisor für virtuelle Maschinen"
    ],
    "correct": 0
  },
  {
    "id": "k2-024",
    "ch": 2,
    "topic": "Visualisierung",
    "q": "Welche drei Hauptvorteile bringt Datenvisualisierung jedem Unternehmen?",
    "a": "1) Einblicke erhalten<br>2) Trends, Chancen und Risiken erkennen<br>3) Datengesteuerte Entscheidungen treffen"
  },
  {
    "id": "k2-025",
    "ch": 2,
    "topic": "Visualisierung",
    "q": "Beschreibe den BI-Workflow von der Datenquelle bis zur Handlung.",
    "a": "<b>Data Sources</b> (Datenquellen) → <b>Data Collection</b> (Sammlung der benötigten Daten) → <b>Data Analysis</b> (Datenanalyse) → <b>Visualisierung / Business Intelligence</b> → <b>Action Plan</b> (Entscheidungen und Maßnahmen auf Basis der analysierten Daten).",
    "options": [
      "Quellen → Sammlung → Analyse → Visualisierung (BI) → Action Plan",
      "Quellen → Visualisierung → Sammlung → Analyse → Archiv",
      "Sammlung → Quellen → Action Plan → Analyse",
      "Analyse → Quellen → Sammlung → Visualisierung"
    ],
    "correct": 0
  },
  {
    "id": "k2-026",
    "ch": 2,
    "topic": "TSDB",
    "q": "Was ist eine Zeitreihendatenbank und woraus besteht ein Datensatz?",
    "a": "Eine für das Speichern und Analysieren von <b>Zeitreihen</b> (Sensordaten, Aktienkurse) optimierte NoSQL-Datenbank.<br>Ein Datensatz besteht aus: <b>Zeitstempel</b> + <b>Wert</b> (z.B. Temperatur in °C) + optional <b>Metainformationen (Tags)</b>.",
    "options": [
      "Zeitstempel, Wert, optional Tags",
      "Primärschlüssel, Fremdschlüssel, Wert",
      "Key, Value, Score",
      "Knoten, Kante, Property"
    ],
    "correct": 0
  },
  {
    "id": "k2-027",
    "ch": 2,
    "topic": "TSDB",
    "q": "Nenne die typischen Kennzeichen einer Zeitreihendatenbank.",
    "a": "• Standardmäßige <b>Indizierung über den Zeitstempel</b><br>• Keine oder schwache Konsistenzgarantien (vgl. CAP), dafür Skalierbarkeit auf sehr große Mengen (z.B. 100.000+ Messwerte/Sekunde, mehrere TB/Tag)<br>• Schnelles Erzeugen von Datensätzen<br>• Ältere Daten können automatisch gelöscht oder reduziert werden (Downsampling, Aggregation, Kompression)"
  },
  {
    "id": "k2-028",
    "ch": 2,
    "topic": "TSDB",
    "q": "Was ist die Analogie zwischen Redis und einer Zeitreihendatenbank?",
    "a": "Beide sind Key-Value-artig – nur wird bei der TSDB statt eines beliebigen Keys der <b>Zeitstempel</b> als Schlüssel verwendet."
  },
  {
    "id": "k2-029",
    "ch": 2,
    "topic": "TSDB",
    "q": "Was ist ein Bucket in InfluxDB und wofür ist die Retention gut?",
    "a": "Ein <b>Bucket</b> ist der benannte Speicherbereich für Zeitreihendaten.<br>Man kann eine <b>Aufbewahrungsdauer</b> festlegen – z.B. „alles, was älter als 3 Monate ist, wird automatisch gelöscht“. So bleibt die DB trotz Millionen Messwerten handhabbar."
  },
  {
    "id": "k2-030",
    "ch": 2,
    "topic": "TSDB",
    "q": "Was ist Kompression/Aggregation bei Zeitreihen – Praxisbeispiel?",
    "a": "Täglich fallen Millionen Werte an. Diese werden zu <b>Mittelwerten je Zeitfenster</b> zusammengefasst (Vormittag, Nachmittag, Nacht / stündlich / täglich), statt jeden Rohwert ewig zu behalten.<br>Praxisbeispiel: <b>illwerke vkw</b> – Messwerte aus dem Energienetz."
  },
  {
    "id": "k2-031",
    "ch": 2,
    "topic": "InfluxDB",
    "q": "Welche zwei Abfragesprachen hat InfluxDB?",
    "a": "<b>InfluxQL</b> – SQL-ähnliche Kommandosprache.<br><b>Flux</b> – funktionale Skriptsprache.",
    "options": [
      "InfluxQL und Flux",
      "SQL und Cypher",
      "CQL und Flux",
      "InfluxQL und Gremlin"
    ],
    "correct": 0
  },
  {
    "id": "k2-032",
    "ch": 2,
    "topic": "InfluxDB",
    "q": "Was tut diese Flux-Abfrage?<br><code>from(bucket:\"hittisau\") |&gt; range(...) |&gt; filter(fn: (r) =&gt; r[\"_measurement\"] == \"temp\") |&gt; aggregateWindow(every: 24h, fn: max)</code>",
    "a": "Liest aus dem Bucket <i>hittisau</i>, schränkt auf den gewählten Zeitbereich ein, filtert auf die Messgröße <code>temp</code> und bildet je <b>24-Stunden-Fenster den Maximalwert</b> – also die Tageshöchstwerte."
  },
  {
    "id": "k2-033",
    "ch": 2,
    "topic": "Grafana",
    "q": "Was ist Grafana?",
    "a": "Eine Open-Source-Webanwendung, die Daten aus verschiedenen Datenquellen (InfluxDB, MySQL usw.) liest und über <b>Dashboards/Panels</b> visualisiert. Standardport 3000."
  },
  {
    "id": "k2-034",
    "ch": 2,
    "topic": "Grafana",
    "q": "Wozu dient beim Grafana-Setup <code>ports: - 8030:3000</code> in der docker-compose.yaml?",
    "a": "Portmapping: der Container-Port 3000 (Grafana) wird auf den Host-Port <b>8030</b> gelegt. Aufruf dann über <code>http://&lt;IP&gt;:8030</code>."
  },
  {
    "id": "k3-001",
    "ch": 3,
    "topic": "Key-Value",
    "q": "Wie funktioniert eine Key-Value-Datenbank und welche Befehle gibt es prinzipiell?",
    "a": "Sehr einfaches Prinzip: ein <b>eindeutiger Schlüssel</b> verweist auf einen Wert.<br>Meist nur: <code>PUT/SET(key, value)</code>, <code>value = GET(key)</code>, <code>DELETE(key)</code>."
  },
  {
    "id": "k3-002",
    "ch": 3,
    "topic": "Key-Value",
    "q": "Welche zwei Untergruppen von Key-Value-Stores gibt es?",
    "a": "<b>In-Memory</b>: Daten bleiben im Arbeitsspeicher → sehr hohe Performance.<br><b>On-Disk</b>: werden als Datenspeicher genutzt. <b>Redis</b> ist ein On-Disk-Key-Value-Store <b>mit Memory-Cache</b>."
  },
  {
    "id": "k3-003",
    "ch": 3,
    "topic": "Redis",
    "q": "Was ist Redis und warum ist es schnell?",
    "a": "Der verbreitetste Schlüssel-Werte-Speicher (Open Source).<br><b>On-Disk Key-Value-Store mit Memory-Cache</b> → deutlich schneller als relationale DBs wie MySQL. Persistenz durch regelmäßiges Abspeichern oder Protokolldatei; bei entsprechender Konfiguration ist sogar ACID-konforme Dauerhaftigkeit erreichbar.",
    "options": [
      "On-Disk Key-Value-Store mit Memory-Cache",
      "Reine In-Memory-DB ohne Persistenz",
      "Ein Dokumentenspeicher wie MongoDB",
      "Eine spaltenorientierte DB"
    ],
    "correct": 0
  },
  {
    "id": "k3-004",
    "ch": 3,
    "topic": "Redis",
    "q": "Welche O-Notation hat der Lesezugriff bei Redis – und was bedeutet das?",
    "a": "<b>O(1)</b> – konstante Zeit.<br>Der Zugriff auf einen beliebigen Satz dauert immer gleich lang, <b>unabhängig von der Datenmenge n</b>. Ob 10 oder 10 Mio. Einträge in der DB sind, spielt für die Zugriffszeit keine Rolle.",
    "options": [
      "O(1) – konstant, unabhängig von der Datenmenge",
      "O(n) – linear mit der Datenmenge",
      "O(log n) – logarithmisch",
      "O(n²) – quadratisch"
    ],
    "correct": 0
  },
  {
    "id": "k3-005",
    "ch": 3,
    "topic": "Redis",
    "q": "Welche Datentypen kann Redis verwalten – mit den zugehörigen Befehlen?",
    "a": "<b>Strings</b>: SET, GET, DEL<br><b>Hashes</b> (zum Speichern von Objekten): HSET, HGET<br><b>Lists</b> (sortiert nach Einfügereihenfolge, für Queue/Stack): LPUSH, RPUSH, LPOP, RPOP<br><b>Sets</b> (unsortiert, eindeutige Werte): SADD, SPOP<br><b>Sortierte Sets</b> (jedes Element hat einen Score): ZADD, ZSCORE"
  },
  {
    "id": "k3-006",
    "ch": 3,
    "topic": "Redis",
    "q": "Welcher Redis-Befehl gehört zu welchem Datentyp: HGET, LPUSH, SADD, ZADD?",
    "a": "<b>HGET</b> → Hash (Objekt/Feld auslesen)<br><b>LPUSH</b> → List (links einfügen)<br><b>SADD</b> → Set (Element hinzufügen)<br><b>ZADD</b> → Sorted Set (Element mit Score hinzufügen)",
    "options": [
      "Hash, List, Set, Sorted Set",
      "List, Hash, Sorted Set, Set",
      "Set, Sorted Set, Hash, List",
      "Hash, Set, List, Sorted Set"
    ],
    "correct": 0
  },
  {
    "id": "k3-007",
    "ch": 3,
    "topic": "Redis",
    "q": "Womit implementiert man in Redis eine Queue oder einen Stack?",
    "a": "Mit einer <b>List</b> – sie ist nach der Einfügereihenfolge sortiert.<br><b>Queue</b> (FIFO): <code>LPUSH</code> + <code>RPOP</code>.<br><b>Stack</b> (LIFO): <code>LPUSH</code> + <code>LPOP</code>."
  },
  {
    "id": "k3-008",
    "ch": 3,
    "topic": "Redis",
    "q": "Was ist der Unterschied zwischen Set und Sorted Set?",
    "a": "<b>Set</b>: unsortierte Liste mit eindeutigen Werten (SADD, SPOP).<br><b>Sorted Set</b>: sortierte Liste – jedes Element besitzt zusätzlich einen <b>Score</b>, nach dem sortiert wird (ZADD, ZSCORE)."
  },
  {
    "id": "k3-009",
    "ch": 3,
    "topic": "Redis",
    "q": "Erkläre die Installations- und Zugriffsbefehle für Redis.",
    "a": "<code>docker run -d --name redis-db -p 6379:6379 redis</code> → Container im Hintergrund, Name redis-db, Port 6379 gemappt.<br><code>docker exec -it redis-db bash</code> → Shell im Container.<br><code>redis-cli</code> → Redis Command Line Interface starten.<br>Dann z.B. <code>set K1 \"Hello\"</code> / <code>get K1</code>."
  },
  {
    "id": "k3-010",
    "ch": 3,
    "topic": "Redis",
    "q": "Was machen <code>dbsize</code> und <code>flushdb</code>?",
    "a": "<code>dbsize</code> – zeigt die Anzahl der Sätze in der Datenbank.<br><code>flushdb</code> – <b>löscht alle Datensätze</b> der Datenbank (Achtung, unwiderruflich)."
  },
  {
    "id": "k3-011",
    "ch": 3,
    "topic": "Redis",
    "q": "Erkläre diesen Python-Code:<br><code>redisConn = redis.StrictRedis(host='10.115.x.x', port=6379, db=0, decode_responses=True)</code><br><code>redisConn.set('key-001', 'Text')</code><br><code>print(redisConn.get('key-001'))</code>",
    "a": "Zeile 1 baut die Verbindung zum Redis-Server auf: IP des Servers, Port 6379, Datenbanknummer 0; <code>decode_responses=True</code> liefert Strings statt Bytes zurück.<br>Zeile 2 legt ein Key-Value-Paar an.<br>Zeile 3 liest den Wert über den Key wieder aus.<br>Hinweis: das File darf nicht <code>redis.py</code> heißen, sonst überdeckt es das Modul."
  },
  {
    "id": "k3-012",
    "ch": 3,
    "topic": "Wide Column",
    "q": "Was ist ein Wide Column Store?",
    "a": "Auch <i>Extensible Record Store</i> / spaltenorientierte Datenbank: speichert Datensätze mit potenziell <b>sehr vielen dynamischen Spalten</b>.<br>Weil der Spaltenname – wie der Schlüssel – nicht fix ist und ein Satz Milliarden Spalten haben kann, sind Wide Column Stores faktisch <b>zweidimensionale Key-Value-Stores</b>.",
    "options": [
      "Ein zweidimensionaler Key-Value-Store mit dynamischen Spalten",
      "Eine relationale DB mit festem Schema",
      "Eine Graphdatenbank",
      "Ein reiner In-Memory-Cache"
    ],
    "correct": 0
  },
  {
    "id": "k3-013",
    "ch": 3,
    "topic": "Wide Column",
    "q": "Was sind die zwei Dimensionen beim Wide Column Store?",
    "a": "1. Dimension: der <b>RowKey</b> – der eindeutige Schlüssel der Zeile (Oberschlüssel).<br>2. Dimension: die <b>Column</b> – der Schlüssel, über den man innerhalb der Zeile auf den Wert zugreift (Unterschlüssel)."
  },
  {
    "id": "k3-014",
    "ch": 3,
    "topic": "Wide Column",
    "q": "Nenne die populärsten Wide-Column-Systeme und was sie mit Document Stores gemeinsam haben.",
    "a": "Cassandra, HBase, Microsoft Azure Cosmos DB.<br>Gemeinsam mit Document Stores: die <b>Schemafreiheit</b> – die Realisierung ist aber sehr unterschiedlich."
  },
  {
    "id": "k3-015",
    "ch": 3,
    "topic": "Cassandra",
    "q": "Beschreibe die verteilte Architektur von Cassandra.",
    "a": "• <b>Peer-to-Peer</b>: es gibt <b>keinen Master-Node</b>, alle Knoten sind gleichwertig (dezentral).<br>• <b>Ring-Topologie</b>: Daten sind über das Cluster verteilt, die Partitionierung übernimmt <b>Consistent Hashing</b>.<br>• <b>Horizontale Skalierbarkeit</b>: neue Nodes können ohne Unterbrechung hinzugefügt werden.",
    "options": [
      "Peer-to-Peer ohne Master, Ring-Topologie, Consistent Hashing",
      "Master-Slave mit einem zentralen Koordinator",
      "Ein einzelner Server mit Replikaten",
      "Sternschema mit Faktentabelle"
    ],
    "correct": 0
  },
  {
    "id": "k3-016",
    "ch": 3,
    "topic": "Cassandra",
    "q": "Was ist der Replikationsfaktor und welche zwei Strategien gibt es?",
    "a": "<b>Replikationsfaktor (RF)</b>: auf wie vielen Nodes eine Kopie der Daten gespeichert wird.<br><b>SimpleStrategy</b> – für ein einzelnes Rechenzentrum.<br><b>NetworkTopologyStrategy</b> – für mehrere Rechenzentren; pro DC kann ein eigener RF angegeben werden (z.B. Daten nur in der EU halten)."
  },
  {
    "id": "k3-017",
    "ch": 3,
    "topic": "Cassandra",
    "q": "Was bedeutet „tunable consistency“ – nenne die Consistency Level.",
    "a": "Die Konsistenzstufe ist pro Abfrage einstellbar:<br><b>ONE</b> – nur ein Replikat muss antworten: schnell, aber weniger konsistent.<br><b>QUORUM</b> – die Mehrheit der Replikate muss antworten: guter Kompromiss.<br><b>ALL</b> – alle Replikate müssen antworten: höchste Konsistenz, geringste Verfügbarkeit.",
    "options": [
      "ONE, QUORUM, ALL",
      "LOW, MEDIUM, HIGH",
      "READ, WRITE, BOTH",
      "SIMPLE, NETWORK, GLOBAL"
    ],
    "correct": 0
  },
  {
    "id": "k3-018",
    "ch": 3,
    "topic": "Cassandra",
    "q": "Wo steht Cassandra im CAP-Theorem?",
    "a": "Cassandra priorisiert <b>Availability und Partition Tolerance (AP)</b>. Die Konsistenz wird weniger stark berücksichtigt – <b>kein ACID-Verhalten</b> wie bei relationalen Systemen."
  },
  {
    "id": "k3-019",
    "ch": 3,
    "topic": "Cassandra",
    "q": "Nenne Praxisbeispiele für Cassandra.",
    "a": "<b>Netflix</b>: Metadaten zu Filmen/Serien, Nutzerpräferenzen, Playback-Status.<br><b>Uber</b>: Fahrten- und Geodaten in Echtzeit.<br><b>Apple</b>: über 100 Petabyte iCloud-Daten.<br><b>Spotify</b>: Playlists und Benutzerdaten.<br><b>eBay</b>: Echtzeit-Suchvorschläge und Auktionsdaten."
  },
  {
    "id": "k3-020",
    "ch": 3,
    "topic": "Cassandra",
    "q": "Wie heißen Datenbank und Tabelle in Cassandra – und wie legt man sie an?",
    "a": "Datenbank = <b>Keyspace</b>, Tabelle = <b>Column Family</b>.<br><code>CREATE KEYSPACE IF NOT EXISTS store WITH REPLICATION = { 'class':'SimpleStrategy', 'replication_factor':'1' };</code><br><code>CREATE TABLE IF NOT EXISTS store.shopping_cart ( userid text PRIMARY KEY, item_count int, last_update_timestamp timestamp );</code>",
    "options": [
      "Keyspace = Datenbank, Column Family = Tabelle",
      "Keyspace = Tabelle, Column Family = Spalte",
      "Bucket = Datenbank, Collection = Tabelle",
      "Schema = Datenbank, Relation = Tabelle"
    ],
    "correct": 0
  },
  {
    "id": "k3-021",
    "ch": 3,
    "topic": "Cassandra",
    "q": "Wie greift man als Administrator, wie als Entwickler auf Cassandra zu?",
    "a": "<b>Administrator / Docker</b>: <code>docker run --name cassandra -d -p 8042:9042 cassandra:latest</code>, dann <code>docker exec -it cassandra cqlsh</code> – die CQL-Konsole.<br><b>Entwickler / PyCharm</b>: Library <code>cassandra-driver</code> über den Python-Interpreter einbinden und per Python zugreifen."
  },
  {
    "id": "k3-022",
    "ch": 3,
    "topic": "Cassandra",
    "q": "Erkläre diesen Python-Code:<br><code>cluster = Cluster(['localhost'], port=8042)</code><br><code>session = cluster.connect('store', wait_for_all_pools=True)</code><br><code>rows = session.execute('SELECT * FROM shopping_cart')</code>",
    "a": "Verbindung zum Cassandra-Cluster über die angegebene Adresse und den <b>auf der VM gemappten Port</b> (8042 → 9042 im Container).<br><code>connect('store')</code> wählt den Keyspace.<br><code>session.execute(...)</code> führt die CQL-Abfrage aus; über <code>for row in rows</code> wird zeilenweise ausgelesen (<code>row.userid</code>, <code>row.item_count</code>)."
  },
  {
    "id": "k3-023",
    "ch": 3,
    "topic": "Cassandra",
    "q": "Was ist der Map-Datentyp in Cassandra und wie entspricht er Python?",
    "a": "<code>data map &lt;text, text&gt;</code> speichert Key-Value-Paare innerhalb einer Spalte – also eine zweite Schlüsselebene in der Zeile.<br>In Python entspricht das dem Datentyp <b>dict</b>.<br>Für die Suche in einer Map muss ein Index angelegt werden: <code>CREATE INDEX meta_idx ON store.blog (entries(data));</code>"
  },
  {
    "id": "k4-001",
    "ch": 4,
    "topic": "Document Store",
    "q": "Was ist eine dokumentenorientierte Datenbank?",
    "a": "Eine DB, bei der <b>Dokumente die Grundeinheit der Speicherung</b> bilden. Statt Tabellen mit festem Schema enthält sie einzelne Dokumente mit einem eindeutigen Identifikator.<br>Faktisch ein Key-Value-Store mit Dokumenten als Werten – aber der Zugriff geht nicht nur über den Schlüssel, weil die <b>Struktur des Dokuments von der DB berücksichtigt</b> wird."
  },
  {
    "id": "k4-002",
    "ch": 4,
    "topic": "Document Store",
    "q": "Wie ist ein Dokument aufgebaut?",
    "a": "Dokument = Liste von Attributen.<br>Attribut = <b>Schlüssel-Wert-Paar</b>; Schlüssel = eindeutige Zeichenkette, Wert = beliebiger Datentyp inkl. Listen und weiterer Dokumente.<br>Jedes Dokument hat ein eindeutiges <b>ID-Attribut</b> (Primary Key, in MongoDB <code>_id</code>). Semistrukturiert, z.B. JSON/BSON oder XML."
  },
  {
    "id": "k4-003",
    "ch": 4,
    "topic": "Document Store",
    "q": "Was ist eine Collection?",
    "a": "Eine Zusammenfassung von Dokumenten mit <b>gleichem Entitätstyp und/oder ähnlicher Struktur</b>. Die Abstraktion richtet sich nach dem Anfragemuster; Indexierung wird unterstützt.<br>Entspricht grob der Tabelle im relationalen Modell."
  },
  {
    "id": "k4-004",
    "ch": 4,
    "topic": "JSON",
    "q": "Was ist JSON – und was ist BSON?",
    "a": "<b>JSON</b> (JavaScript Object Notation): kompaktes, in Textform gut lesbares Datenformat für den Datenaustausch zwischen Anwendungen, unabhängig von der Programmiersprache; standardisiert durch Ecma International.<br><b>BSON</b> (Binary JSON): die binäre Repräsentation – für die <b>Übertragung über das Netzwerk und effiziente Speicherung</b>. MongoDB speichert intern BSON.",
    "options": [
      "JSON = lesbares Textformat, BSON = binäre Form für Übertragung und Speicherung",
      "BSON = lesbar, JSON = binär",
      "JSON = für Bilder, BSON = für Text",
      "BSON ist ein JSON-Schema zur Validierung"
    ],
    "correct": 0
  },
  {
    "id": "k4-005",
    "ch": 4,
    "topic": "JSON",
    "q": "Was bedeuten [] und {} in JSON – und was kann ein Value sein?",
    "a": "<b>{ }</b> – ein <b>Objekt</b> mit Eigenschaften, also Key-Value-Paare: <code>{ key: value, ... }</code>. Key ist immer ein String.<br><b>[ ]</b> – ein <b>Array</b>, eine Liste von Werten: <code>[ value1, value2, ... ]</code>.<br>Value kann sein: Zahl, String, Boolean, Array, JSON-Objekt oder <code>null</code>.",
    "options": [
      "{} = Objekt mit Key-Value-Paaren, [] = Array/Liste",
      "{} = Array, [] = Objekt",
      "{} = Kommentar, [] = Index",
      "Beide bezeichnen Arrays"
    ],
    "correct": 0
  },
  {
    "id": "k4-006",
    "ch": 4,
    "topic": "JSON",
    "q": "Was ist Traversal in JSON und was macht ein JSON Schema?",
    "a": "<b>Traversal</b>: pfadbasiertes Navigieren entlang der Keys, z.B. <code>info.size</code> oder <code>name.given</code>.<br><b>JSON Schema</b>: dient der <b>Validierung</b> der Dokumentstruktur."
  },
  {
    "id": "k4-007",
    "ch": 4,
    "topic": "Document Store",
    "q": "Was bedeutet „Data accessed together, stays together“?",
    "a": "Zusammengehörige Daten werden im <b>gleichen Dokument</b> gespeichert (verschachtelt statt über Joins verteilt). Dadurch ist die Verarbeitung beliebig verschachtelter Daten effizient und Lesezugriffe brauchen keine Joins."
  },
  {
    "id": "k4-008",
    "ch": 4,
    "topic": "Document Store",
    "q": "Was ist Denormalisierung – Vor- und Nachteile?",
    "a": "Bewusstes <b>Einfügen redundanter Daten</b> über Arrays und eingebettete Dokumente (z.B. Produktname und Preis stehen mehrfach statt nur als Produkt-ID).<br><b>Vorteile</b>: geringere Latenzzeiten, einfachere Partitionierung.<br><b>Nachteile</b>: die Anwendung muss Correctness/Konsistenz selbst gewährleisten; Gefahr des Datenverlusts."
  },
  {
    "id": "k4-009",
    "ch": 4,
    "topic": "Document Store",
    "q": "Klassisches Beispiel: Zwei Personen wohnen in derselben Wohnung und ziehen um. Was ist das Problem?",
    "a": "Die Adresse ist in <b>beiden Dokumenten redundant</b> gespeichert. Beim Umzug muss sie an <b>zwei Stellen</b> geändert werden.<br>Kernaussage: Es gibt keine referentielle Integrität – <b>Consistency (das C aus ACID) muss der Entwickler in der Anwendung selbst sicherstellen</b>.",
    "options": [
      "Die Adresse steht redundant in beiden Dokumenten – der Entwickler muss die Konsistenz selbst sicherstellen",
      "MongoDB verweigert den Schreibvorgang",
      "Der Foreign Key wird automatisch aktualisiert",
      "Die Collection muss neu indexiert werden"
    ],
    "correct": 0
  },
  {
    "id": "k4-010",
    "ch": 4,
    "topic": "MongoDB",
    "q": "Was ist MongoDB?",
    "a": "Ein <b>dokumentenorientiertes NoSQL-DBMS</b>, geschrieben in C++; der Name kommt von engl. <i>humongous</i> („gigantisch“). Verwaltet Sammlungen JSON-ähnlicher Dokumente, wodurch viele Anwendungen Daten natürlicher modellieren können.<br>Erstveröffentlichung 2009; bis 15.10.2018 Open Source, seither unter der proprietären SSPL."
  },
  {
    "id": "k4-011",
    "ch": 4,
    "topic": "MongoDB",
    "q": "Wie startet man MongoDB mit Docker?",
    "a": "<code>docker run --name mongodb -p 8017:27017 -d -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=mysecret mongo:latest</code><br>Container-Port 27017 wird auf Host-Port 8017 gemappt, Root-User und Passwort werden über Umgebungsvariablen gesetzt."
  },
  {
    "id": "k4-012",
    "ch": 4,
    "topic": "MongoDB",
    "q": "Welche Konsolenbefehle legen DB, Collection und Dokument an?",
    "a": "<code>use crm;</code> – Datenbank crm anlegen/verwenden<br><code>db.createCollection(\"contacts\");</code><br><code>show collections;</code><br><code>db.contacts.insertOne({ \"_id\": 42, \"name\": \"John Hope\" });</code><br><code>db.contacts.find();</code><br><code>db.contacts.deleteMany({});</code> – alle Einträge löschen"
  },
  {
    "id": "k4-013",
    "ch": 4,
    "topic": "MongoDB",
    "q": "Was tut diese Abfrage?<br><code>db.incidents.find({$and: [{\"Bundesland\": \"Vorarlberg\"}, {\"AnzahlFaelle\": {$gte: 2000}}]})</code>",
    "a": "Sucht in der Collection <i>incidents</i> alle Dokumente, bei denen <b>Bundesland = Vorarlberg UND AnzahlFaelle ≥ 2000</b> ist.<br><code>$and</code> verknüpft die Bedingungen, <code>$gte</code> = greater than or equal.",
    "options": [
      "Bundesland Vorarlberg UND mindestens 2000 Fälle",
      "Bundesland Vorarlberg ODER 2000 Fälle",
      "Alle außer Vorarlberg",
      "Die 2000 neuesten Einträge aus Vorarlberg"
    ],
    "correct": 0
  },
  {
    "id": "k4-014",
    "ch": 4,
    "topic": "MongoDB",
    "q": "Was ist Aggregation in MongoDB?",
    "a": "Die Verarbeitung und Analyse von Datensätzen einer Collection, um <b>aggregierte Informationen</b> zu gewinnen.<br>Umgesetzt als <b>Pipeline</b>: eine Reihe von Stages, wobei jede Stage das Ergebnis der vorherigen weiterverarbeitet.<br>Hauptanwendungen: Gruppieren von Daten, Berechnung von Metriken, Datenaufbereitung."
  },
  {
    "id": "k4-015",
    "ch": 4,
    "topic": "MongoDB",
    "q": "Erkläre diese Aggregation:<br><code>db.incidents.aggregate([{ $group: {_id: \"$Bundesland\", maxAnzahlFaelle: {$max: \"$AnzahlFaelle\"}} }, { $sort: {maxAnzahlFaelle: -1} }])</code>",
    "a": "<b>Stage 1 ($group)</b>: gruppiert nach Bundesland und ermittelt je Bundesland den <b>Maximalwert</b> der Fälle.<br><b>Stage 2 ($sort)</b>: sortiert das Ergebnis nach maxAnzahlFaelle <b>absteigend</b> (-1).<br>Ergebnis: Liste der Bundesländer mit ihrem jeweiligen Höchstwert, größtes zuerst."
  },
  {
    "id": "k4-016",
    "ch": 4,
    "topic": "MongoDB",
    "q": "Was ist der Unterschied zwischen $match und find?",
    "a": "Praktisch <b>dasselbe</b> – beide filtern Dokumente nach Kriterien.<br><code>find()</code> ist die eigenständige Abfrage, <code>$match</code> ist die Filter-Stage <b>innerhalb einer Aggregation-Pipeline</b>."
  },
  {
    "id": "k4-017",
    "ch": 4,
    "topic": "MongoDB",
    "q": "Erkläre den Python-Zugriff auf MongoDB.",
    "a": "<code>import pymongo</code><br><code>conn = pymongo.MongoClient(\"mongodb://IP:8017/\", username='mongoadmin', password='mysecret')</code> – Verbindung<br><code>db = conn[\"crm\"]</code> – Datenbank wählen<br><code>col = db[\"contacts\"]</code> – Collection wählen<br><code>docs = col.find()</code> – alle Dokumente lesen, dann <code>for x in docs: print(x[\"_id\"], x[\"name\"])</code><br>Benötigte Library: <b>pymongo</b>."
  },
  {
    "id": "k4-018",
    "ch": 4,
    "topic": "MongoDB",
    "q": "Was macht dieser Code?<br><code>df = pd.DataFrame.from_records(incidents.find({\"BundeslandID\": 8}))</code><br><code>df.plot(y=['AnzahlFaelle','AnzahlTotSum'])</code>",
    "a": "Liest alle Dokumente mit BundeslandID 8 aus MongoDB, wandelt sie in einen <b>Pandas DataFrame</b> um und zeichnet mit matplotlib die beiden Spalten <i>AnzahlFaelle</i> und <i>AnzahlTotSum</i> als Diagramm.<br>Zeigt das Zusammenspiel NoSQL → Pandas → Visualisierung."
  },
  {
    "id": "k4-019",
    "ch": 4,
    "topic": "MongoDB",
    "q": "Welche Nachteile hat die Schemafreiheit?",
    "a": "Unterschiedliche Attribute pro Dokument sind möglich → <b>mehr Verantwortung auf Seiten der Anwendung</b>.<br>Beim Löschen gibt es <b>keine referentielle Integrität</b>."
  },
  {
    "id": "k5-001",
    "ch": 5,
    "topic": "Graph-DB",
    "q": "Was ist eine Graphdatenbank?",
    "a": "Eine Datenbank, die <b>Graphen</b> benutzt, um stark vernetzte Informationen darzustellen und zu speichern. Ein Graph besteht aus <b>Knoten</b> und <b>Kanten</b> (den Verbindungen zwischen Knoten).<br>Graph-DBs gehören zu NoSQL und priorisieren – anders als RDBMS – die <b>Beziehung zwischen den Daten</b>; hierarchische und vernetzte Strukturen lassen sich dadurch einfach abbilden."
  },
  {
    "id": "k5-002",
    "ch": 5,
    "topic": "Graph-DB",
    "q": "Welche Abfragesprachen gibt es und was ermöglichen sie?",
    "a": "<b>Cypher</b>, <b>SPARQL</b>, <b>GraphQL</b>.<br>Damit möglich: Abfrage komplexer Muster, <b>Traversieren</b> von Graphen und Ermittlung des <b>kürzesten Pfades</b> zwischen zwei Knoten."
  },
  {
    "id": "k5-003",
    "ch": 5,
    "topic": "Graph-DB",
    "q": "Was ist RDF und wie ist ein Triple aufgebaut?",
    "a": "<b>Resource Description Framework</b>: Graphen werden mit <b>Triplen</b> dargestellt.<br>Ein Triple besteht aus Knoten-Kante-Knoten, also <b>Subjekt → Prädikat → Objekt</b>; die Ressourcen werden über eine weltweit eindeutige URI (oder anonym) definiert.<br>Beispiel: <code>Alice --kennt--> Bob</code>, <code>Bob --hasst--> Dave</code>.",
    "options": [
      "Subjekt – Prädikat – Objekt",
      "Key – Value – Score",
      "Knoten – Knoten – Gewicht",
      "Label – Property – Index"
    ],
    "correct": 0
  },
  {
    "id": "k5-004",
    "ch": 5,
    "topic": "Graph-DB",
    "q": "Was ist ein Labeled-Property-Graph (LPG)?",
    "a": "Ein Graphmodell, in dem <b>sowohl Knoten als auch Kanten Eigenschaften (Properties)</b> tragen können – z.B. Gewicht: 10 kg, Farbe: Rot, Name: Alice.<br>Zusätzlich können Knoten mit einem <b>Label</b> ausgezeichnet werden (z.B. Label <i>Person</i>), womit die Treffermenge bei Suchen eingeschränkt werden kann. Neo4j speichert alles als Kante, Knoten oder Attribut nach diesem Modell.",
    "options": [
      "Knoten und Kanten haben Properties, Knoten zusätzlich Labels",
      "Nur Kanten haben Eigenschaften",
      "Nur Knoten dürfen Labels haben, Properties gibt es nicht",
      "Ein Graph ohne Richtung und Gewicht"
    ],
    "correct": 0
  },
  {
    "id": "k5-005",
    "ch": 5,
    "topic": "Cypher",
    "q": "Was ist Cypher und auf welchen Konzepten beruht es?",
    "a": "Eine <b>deklarative Abfragesprache für Graphen</b>, die effiziente Abfragen und Aktualisierungen auf Property-Graphen ermöglicht.<br>Konzepte zusätzlich zu den Standard-Graph-Elementen: Knoten (<i>nodes</i>), Kanten (in Cypher <i>relationships</i>), <b>Labels</b> und <b>Properties</b>."
  },
  {
    "id": "k5-006",
    "ch": 5,
    "topic": "Cypher",
    "q": "Was ist der Unterschied zwischen MATCH und WHERE?",
    "a": "<b>MATCH</b> beschreibt die <b>Struktur des gesuchten Musters</b> (pattern) – primär über die Beziehungen.<br><b>WHERE</b> definiert <b>zusätzliche Bedingungen/Einschränkungen</b> für dieses Muster.<br>Also: MATCH = allgemeines Suchmuster, WHERE = weitere Einschränkung.",
    "options": [
      "MATCH beschreibt das Muster, WHERE schränkt es zusätzlich ein",
      "WHERE beschreibt das Muster, MATCH filtert",
      "MATCH ist für Knoten, WHERE für Kanten",
      "Beide sind identisch"
    ],
    "correct": 0
  },
  {
    "id": "k5-007",
    "ch": 5,
    "topic": "Cypher",
    "q": "Zeichne den Graphen zu diesem Code:<br><code>create(:Person {name:\"Ann\"}) - [:LOVES]-> (:Person {name:\"Dan\"})</code><br><code>create(:Car {brand:\"Volvo\"})</code><br><code>MATCH(a:Person),(c:Car) WHERE a.name=\"Ann\" AND c.brand=\"Volvo\" CREATE (a)-[r:DRIVES]->(c)</code><br><code>... WHERE a.name=\"Dan\" ... CREATE (a)-[r:OWNS]->(c)</code>",
    "a": "Drei Knoten:<br>• <b>Ann</b> (Label Person)<br>• <b>Dan</b> (Label Person)<br>• <b>Volvo</b> (Label Car)<br>Drei gerichtete Kanten:<br>• Ann —LOVES→ Dan<br>• Ann —DRIVES→ Volvo<br>• Dan —OWNS→ Volvo<br>Merke: Pfeilrichtung und Label immer mitzeichnen."
  },
  {
    "id": "k5-008",
    "ch": 5,
    "topic": "Cypher",
    "q": "Wie legt man in Cypher einen Knoten an und verbindet zwei Knoten?",
    "a": "Knoten: <code>CREATE (p:Org { Name: \"Superrobotics Limited\" })</code><br>Verbinden:<br><code>MATCH (p:Person),(o:Org)</code><br><code>WHERE p.Name = \"Patrick Moon\" AND o.Name = \"Superrobotics Limited\"</code><br><code>CREATE (p)-[r:CHAIRMAN]->(o)</code><br><code>RETURN p,r,o</code><br>Man sucht die Knoten erst per MATCH/WHERE und erzeugt dann die Beziehung."
  },
  {
    "id": "k5-009",
    "ch": 5,
    "topic": "Cypher",
    "q": "Wie liest man alle Knoten und Beziehungen aus, wie löscht man alles?",
    "a": "Auslesen: <code>MATCH (n)-[r]->(m) RETURN n,r,m</code><br>Einen Knoten löschen: <code>MATCH (n:Person {name:'UNKNOWN'}) DELETE n</code><br>Alles löschen: <code>MATCH (n) DETACH DELETE n</code> – <code>DETACH</code> entfernt auch alle Beziehungen des Knotens."
  },
  {
    "id": "k5-010",
    "ch": 5,
    "topic": "Neo4j",
    "q": "Was ist Neo4j – Ports und Protokolle?",
    "a": "Eine in Java implementierte Open-Source-Graphdatenbank; eingebettete, Disk-basierte, <b>transaktionale</b> DB-Engine, die Daten als Graph statt in Tabellen speichert. Version 1.0 erschien 2010, Community Edition unter GPL v3.<br>Ports: <b>7474</b> für HTTP (API und Web-Interface), <b>7687</b> für <b>BOLT</b> (Binärprotokoll, performanter Zugriff).",
    "options": [
      "7474 = HTTP, 7687 = BOLT",
      "7474 = BOLT, 7687 = HTTP",
      "6379 = HTTP, 9042 = BOLT",
      "8086 = HTTP, 3000 = BOLT"
    ],
    "correct": 0
  },
  {
    "id": "k5-011",
    "ch": 5,
    "topic": "Neo4j",
    "q": "Nenne Anwendungsbereiche für Neo4j.",
    "a": "• <b>Betrugserkennung</b> – Betrüger agieren in Ringen / mit synthetischen Identitäten, die man in einzelnen Datensätzen nicht sieht<br>• <b>Geldwäsche</b> – Geldflüsse über viele Konten verfolgen (Circular Transactions)<br>• <b>Empfehlungssysteme</b> – „Kunden, die dies kauften, kauften auch...“<br>• <b>Root Cause Analysis</b> – bei Serverausfall über DEPENDS_ON-Beziehungen sofort zeigen, welche Dienste und Kunden betroffen sind"
  },
  {
    "id": "k5-012",
    "ch": 5,
    "topic": "Neo4j",
    "q": "Wie startet man Neo4j mit Docker und wie greift man mit Python zu?",
    "a": "<code>docker run -p 7474:7474 -p 7687:7687 -d --name neo4j-db --env NEO4J_AUTH=neo4j/Test123! neo4j</code><br>Python-Library: <b>py2neo</b><br><code>from py2neo import Graph</code><br><code>graph = Graph(\"bolt://10.115.x.x:7687\", auth=(\"neo4j\",\"Test123!\"))</code><br><code>nodes = graph.run(\"MATCH (n) RETURN n LIMIT 10\").data()</code>"
  },
  {
    "id": "k5-013",
    "ch": 5,
    "topic": "Dijkstra",
    "q": "Wofür dient der Dijkstra-Algorithmus und welche zwei Voraussetzungen muss der Graph erfüllen?",
    "a": "Bestimmung des <b>kürzesten Pfades</b> von einem Startknoten zu allen anderen Knoten.<br>Voraussetzungen: der Graph muss <b>gewichtet</b> sein und eine <b>Richtung</b> haben; die Kantengewichte müssen <b>nicht-negativ</b> sein.",
    "options": [
      "Der Graph muss gerichtet und gewichtet sein (keine negativen Gewichte)",
      "Der Graph muss ungerichtet und ungewichtet sein",
      "Der Graph darf keine Zyklen haben",
      "Alle Kanten müssen dasselbe Gewicht haben"
    ],
    "correct": 0
  },
  {
    "id": "k5-014",
    "ch": 5,
    "topic": "Dijkstra",
    "q": "Nenne die 5 Schritte des Dijkstra-Algorithmus.",
    "a": "1) <b>Initialisierung</b>: Entfernung Start→Start = 0, zu allen anderen = ∞, alle Knoten unbesucht, Start = aktueller Knoten.<br>2) <b>Entfernung aktualisieren</b>: für alle Nachbarn des aktuellen Knotens die Distanz über den aktuellen Knoten berechnen; ist sie kürzer als die bekannte, Distanz und Vorgängerknoten aktualisieren.<br>3) <b>Knoten als besucht markieren</b> – besuchte Knoten werden nicht erneut geprüft.<br>4) <b>Nächsten Knoten wählen</b>: den unbesuchten Knoten mit der kleinsten bekannten Entfernung; Schritte 2–4 wiederholen.<br>5) <b>Pfad zurückverfolgen</b>: vom Ziel über die Vorgängerknoten zurück zum Start."
  },
  {
    "id": "k5-015",
    "ch": 5,
    "topic": "Vektor-DB",
    "q": "Was ist eine Vektordatenbank?",
    "a": "Ein Datenbanksystem, das darauf ausgelegt ist, <b>hochdimensionale Vektoren</b> effizient zu speichern, zu indizieren und abzufragen.<br>Im Unterschied zu relationalen DBs kann sie komplexe Daten wie Text, Bilder oder Audio als <b>numerische Vektoren</b> repräsentieren."
  },
  {
    "id": "k5-016",
    "ch": 5,
    "topic": "Vektor-DB",
    "q": "Was ist ein Vektor in diesem Kontext, und was ist die Dimension?",
    "a": "Ein Vektor ist eine <b>geordnete Liste von Zahlen</b> (Fließkommazahlen), z.B. <code>[0.1, −0.5, 0.9, ...]</code>, die ein Datenelement in einem Vektorraum repräsentiert.<br>Die <b>Dimension</b> ist die Anzahl der Zahlen in dieser Liste – moderne Embeddings haben Hunderte bis Tausende (z.B. 768; ChromaDB-Standardmodell all-MiniLM-L6-v2: 384).",
    "options": [
      "Eine geordnete Zahlenliste; Dimension = Anzahl der Zahlen",
      "Ein Datensatz mit Primärschlüssel; Dimension = Anzahl Spalten",
      "Ein Knoten im Graphen; Dimension = Anzahl Kanten",
      "Ein Key-Value-Paar; Dimension = Länge des Keys"
    ],
    "correct": 0
  },
  {
    "id": "k5-017",
    "ch": 5,
    "topic": "Vektor-DB",
    "q": "Wie funktioniert die Suche in einer Vektordatenbank?",
    "a": "Die <b>Suchanfrage wird ebenfalls in einen Vektor umgewandelt</b>. Zurückgegeben werden die Vektoren mit der <b>geringsten Distanz</b> bzw. der <b>höchsten Ähnlichkeit</b> zum Abfragevektor – das sind die relevantesten Ergebnisse."
  },
  {
    "id": "k5-018",
    "ch": 5,
    "topic": "Embeddings",
    "q": "Was sind Embeddings und wie entstehen sie?",
    "a": "Eine Übersetzung komplexer Daten (Text, Bild, Audio) in <b>Zahlenlisten (Vektoren)</b>, die Computer verarbeiten können. Ziel: <b>Bedeutung und Beziehungen</b> der Originaldaten bleiben im Zahlenformat möglichst erhalten.<br>Früher: statistische Methoden (Zählen von Wortvorkommen). Heute: <b>neuronale Netze / Deep Learning</b> – meist Transformer-basierte <b>Encoder-Only-Modelle (BERT)</b> oder spezialisierte Sentence-Transformer."
  },
  {
    "id": "k5-019",
    "ch": 5,
    "topic": "Embeddings",
    "q": "Erkläre Ähnlichkeit am 2D-Modell (Hund, Katze, Vogel, Flugzeug, Tisch).",
    "a": "Vereinfachtes Modell mit 2 Dimensionen:<br><b>X-Achse</b>: Nähe zu „Tier“ (positiv) vs. „Gegenstand“ (negativ).<br><b>Y-Achse</b>: Nähe zu „fliegen/Luft“ (positiv) vs. „laufen/Erde“ (negativ).<br>→ Hund und Katze liegen sehr nah beieinander (hohe Ähnlichkeit).<br>→ Vogel und Flugzeug liegen relativ nah beieinander, weil beide hoch auf der Y-Achse sind.<br>→ Hund und Tisch liegen weit auseinander (geringe Ähnlichkeit)."
  },
  {
    "id": "k5-020",
    "ch": 5,
    "topic": "Kosinus",
    "q": "Was misst die Kosinus-Ähnlichkeit – und was ist der Unterschied zum euklidischen Abstand?",
    "a": "Die Kosinus-Ähnlichkeit misst den <b>Winkel</b> zwischen zwei Vektoren, also ihre <b>Richtung</b> – nicht ihre Länge.<br>Der euklidische Abstand misst dagegen die gerade Linie (Luftlinie) zwischen den Punkten.<br><b>Kleiner Winkel</b> = Vektoren zeigen fast in dieselbe Richtung = hohe Ähnlichkeit.<br><b>Großer Winkel</b> = unterschiedliche Richtungen = geringe Ähnlichkeit.",
    "options": [
      "Den Winkel (Richtung) zwischen den Vektoren, nicht die Länge",
      "Die Länge der Vektoren",
      "Die Anzahl der Dimensionen",
      "Die Summe aller Vektorwerte"
    ],
    "correct": 0
  },
  {
    "id": "k5-021",
    "ch": 5,
    "topic": "Kosinus",
    "q": "Wie ist die Kosinus-Ähnlichkeit aufgebaut und wie interpretiert man die Werte?",
    "a": "<b>Skalarprodukt geteilt durch das Produkt der Längen (Normen)</b> der beiden Vektoren.<br>Länge: ‖v‖ = √(x² + y²).<br>Interpretation: nahe <b>+1</b> = sehr ähnlich (Hund–Katze ≈ 0,99); <b>0</b> = kein Zusammenhang; nahe <b>−1</b> = entgegengesetzt/unähnlich (Hund–Tisch ≈ −0,73)."
  },
  {
    "id": "k5-022",
    "ch": 5,
    "topic": "Kosinus",
    "q": "Rechne: A=(1,0), B=(0,1). Wie groß ist die Kosinus-Ähnlichkeit?",
    "a": "Skalarprodukt = 1·0 + 0·1 = <b>0</b><br>Längen: ‖A‖ = 1, ‖B‖ = 1<br>cos = 0 / (1·1) = <b>0</b><br>→ Die Vektoren stehen im 90°-Winkel: keine Ähnlichkeit.",
    "options": [
      "0",
      "1",
      "−1",
      "0,5"
    ],
    "correct": 0
  },
  {
    "id": "k5-023",
    "ch": 5,
    "topic": "Kosinus",
    "q": "Was ist die L2-Distanz und warum nutzt man oft L2-Squared?",
    "a": "<b>L2</b> ist der „Luftlinien-Abstand“ zweier Punkte im Koordinatensystem (Pythagoras, mit Wurzel).<br><b>L2-Squared</b> lässt das Wurzelziehen weg. Bei vieldimensionalen Vektoren ist die Wurzel rechenaufwändig, deshalb nimmt man nur das Quadrat.<br>ChromaDB unterstützt üblicherweise Cosine, L2 und L2-Squared."
  },
  {
    "id": "k5-024",
    "ch": 5,
    "topic": "ChromaDB",
    "q": "Was ist ChromaDB und wie startet man es?",
    "a": "Eine Open-Source-<b>Vektordatenbank</b> zum effizienten Speichern, Indizieren und Abrufen hochdimensionaler Embeddings samt Metadaten. Standard-Embedding-Modell <b>all-MiniLM-L6-v2</b> mit <b>384 Dimensionen</b>.<br>Als Docker-Container mit Image <code>chromadb/chroma</code>, <code>IS_PERSISTENT=TRUE</code> und Portmapping z.B. <code>8077:8000</code>."
  },
  {
    "id": "k5-025",
    "ch": 5,
    "topic": "ChromaDB",
    "q": "Erkläre den Python-Code:<br><code>collection = client.get_or_create_collection(name=\"x\", metadata={\"hnsw:space\": \"cosine\"})</code><br><code>collection.add(documents=[...], metadatas=[...], ids=[...])</code><br><code>results = collection.query(query_texts=[\"...\"], n_results=4)</code>",
    "a": "Zeile 1: Collection holen oder anlegen; über <code>hnsw:space</code> wird die <b>Ähnlichkeitsmetrik</b> festgelegt (hier Kosinus).<br>Zeile 2: Dokumente werden hinzugefügt – ChromaDB erzeugt daraus automatisch die <b>Embeddings</b>; dazu Metadaten und eindeutige IDs.<br>Zeile 3: Der Abfragetext wird ebenfalls in einen Vektor gewandelt; zurück kommen die <b>4 ähnlichsten</b> Dokumente."
  },
  {
    "id": "k5-026",
    "ch": 5,
    "topic": "RAG",
    "q": "Wofür steht RAG und was ist die Grundidee?",
    "a": "<b>Retrieval-Augmented Generation</b>. Methode, um einer KI Zugriff auf <b>aktuelles oder privates Wissen</b> zu geben, <b>ohne das Modell neu zu trainieren</b>.<br>Analogie: Die KI ist ein kluger Student, der viel aus Lehrbüchern weiß, aber deine privaten Unterlagen nicht kennt – RAG ist das offene Buch, in dem er vor der Antwort nachschlägt.",
    "options": [
      "Retrieval-Augmented Generation",
      "Random Access Generation",
      "Relational Aggregated Graph",
      "Recursive Attention Gate"
    ],
    "correct": 0
  },
  {
    "id": "k5-027",
    "ch": 5,
    "topic": "RAG",
    "q": "Beschreibe den RAG-Prozess in drei Schritten.",
    "a": "<b>Retrieval (Abrufen)</b>: Die Frage wird in einen Vektor umgewandelt; in der Vektordatenbank wird nach den inhaltlich nächstliegenden Textabschnitten gesucht.<br><b>Augmented (Anreichern)</b>: Die gefundenen Informationen werden zusammen mit der ursprünglichen Frage an die KI gesendet.<br><b>Generation (Erzeugen)</b>: Die KI liest diese Informationen und formuliert eine Antwort, die auf diesem spezifischen Wissen basiert.",
    "options": [
      "Retrieval → Augmented → Generation",
      "Generation → Retrieval → Augmented",
      "Request → Answer → Generate",
      "Read → Aggregate → Group"
    ],
    "correct": 0
  },
  {
    "id": "k5-028",
    "ch": 5,
    "topic": "RAG",
    "q": "„Wie kann eine Firma interne Firmendaten in Sprachmodellen zur Verfügung stellen?“ – Skizze und Erklärung.",
    "a": "Ablauf der Skizze:<br>1) <b>Firmendokumente</b> (PDFs, Wiki, Handbücher) werden in Abschnitte (Chunks) zerlegt.<br>2) Ein <b>Embedding-Modell</b> wandelt jeden Abschnitt in einen Vektor um.<br>3) Die Vektoren werden in der <b>Vektordatenbank</b> gespeichert (das Archiv).<br>4) Die <b>Frage des Users</b> wird durch dasselbe Embedding-Modell in einen Vektor gewandelt.<br>5) <b>Ähnlichkeitssuche</b> (Kosinus) liefert die passendsten Abschnitte.<br>6) Diese Abschnitte werden zusammen mit der Frage als <b>Kontext an das LLM</b> übergeben.<br>7) Das LLM erzeugt die Antwort auf Basis der Firmendaten.<br>→ Die Vektordatenbank wird also als <b>Suchengine</b> für das Sprachmodell genutzt."
  },
  {
    "id": "k5-029",
    "ch": 5,
    "topic": "RAG",
    "q": "Nenne die drei Vorteile von RAG.",
    "a": "<b>Aktualität</b>: der Datenbank können jederzeit neue PDFs oder News hinzugefügt werden.<br><b>Faktentreue</b>: die KI halluziniert weniger, weil sie eine Quelle vor sich hat.<br><b>Datenschutz</b>: interne Firmendaten werden nutzbar, ohne dass sie ins allgemeine Training des Modells fließen."
  },
  {
    "id": "k5-030",
    "ch": 5,
    "topic": "Vektor-DB",
    "q": "Nenne vier Anwendungsgebiete von Vektordatenbanken.",
    "a": "• <b>Generative KI / RAG</b> – aktuelles Unternehmenswissen bereitstellen, verhindert Halluzinationen<br>• <b>Semantische Suche</b> – Suche nach der Bedeutung, nicht nach exakten Schlüsselwörtern<br>• <b>Empfehlungssysteme</b> – ähnliche Artikel, Filme, Produkte, Nutzer finden<br>• <b>Multimodale Anwendungen</b> – Vektoren aus Text, Bild und Video gemeinsam abfragen"
  },
  {
    "id": "k5-031",
    "ch": 5,
    "topic": "Embeddings",
    "q": "Was ist Ollama und wofür nutzt man nomic-embed-text?",
    "a": "<b>Ollama</b>: Open-Source-Tool für die einfache lokale Ausführung und Verwaltung großer Sprachmodelle auf eigener Hardware.<br><b>nomic-embed-text</b>: ein spezialisiertes Embedding-Modell, das über Ollama genutzt wird, um Text effizient in hochwertige numerische Vektoren für die semantische Suche umzuwandeln.<br>Zugriff per POST auf <code>/api/embeddings</code> mit <code>{\"model\": ..., \"prompt\": ...}</code>."
  },
  {
    "id": "k6-001",
    "ch": 6,
    "topic": "SQL",
    "q": "Nenne die wesentlichen Operationen von SQL.",
    "a": "<b>Projektion</b> – Auswahl von Spalten (Mapping von Daten)<br><b>Selektion</b> – Auswahl von Zeilen<br><b>Vereinigung</b> – Tabellen joinen<br><b>Differenz</b> – Ergebnisse von anderen Ergebnissen abziehen<br><b>Gruppierungen</b> – Aggregationsfunktionen",
    "options": [
      "Projektion, Selektion, Vereinigung, Differenz, Gruppierung",
      "Insert, Update, Delete, Commit",
      "Map, Shuffle, Reduce",
      "Create, Read, Update, Delete"
    ],
    "correct": 0
  },
  {
    "id": "k6-002",
    "ch": 6,
    "topic": "SQL",
    "q": "Was ist der Unterschied zwischen Projektion und Selektion? Beispiel in Pandas.",
    "a": "<b>Projektion</b> = Spalten auswählen: <code>df[['Name','Gehalt']]</code><br><b>Selektion</b> = Zeilen auswählen: <code>df[df['Abteilung']=='Finanzen']</code><br>Kombiniert: <code>df[df['Abteilung']=='Finanzen'][['Name','Gehalt']]</code>",
    "options": [
      "Projektion = Spalten, Selektion = Zeilen",
      "Projektion = Zeilen, Selektion = Spalten",
      "Projektion = Join, Selektion = Gruppierung",
      "Beide wählen Zeilen aus"
    ],
    "correct": 0
  },
  {
    "id": "k6-003",
    "ch": 6,
    "topic": "SQL",
    "q": "Vor- und Nachteil von SQL für die Datenanalyse?",
    "a": "<b>Vorteil</b>: sehr weit verbreitet, die Aufbereitung ist flexibel.<br><b>Nachteil</b>: die Anwendung von Verfahren und Algorithmen ist kompliziert und kann die <b>DB-Performance</b> beeinträchtigen."
  },
  {
    "id": "k6-004",
    "ch": 6,
    "topic": "R",
    "q": "Was ist R – Vor- und Nachteil?",
    "a": "Programmiersprache für <b>statistische Berechnungen und Grafiken</b>, Standardsprache für statistische Problemstellungen.<br><b>Vorteil</b>: viele Standardbibliotheken, z.B. <code>dplyr</code> (Teil des <i>tidyverse</i>) – das Pendant zu Pandas in Python.<br><b>Nachteil</b>: Operationen laufen größtenteils im <b>RAM</b> → hohe Anforderungen an das System."
  },
  {
    "id": "k6-005",
    "ch": 6,
    "topic": "Python",
    "q": "Nenne die 5 wichtigen Python-Libraries für die Datenanalyse mit ihrer Funktion.",
    "a": "<b>NumPy</b> – Verwaltung von Vektoren, Matrizen und multidimensionalen Arrays<br><b>SciPy</b> – Algorithmen zur numerischen Integration und Optimierung<br><b>Matplotlib</b> – grafische Auswertungen<br><b>Scikit-learn</b> – Klassifizierungs-, Regressions- und Clusteralgorithmen<br><b>Pandas</b> – Verarbeitung und Analyse von Daten: Datenstrukturen und Operatoren für numerische Tabellen und Zeitreihen",
    "options": [
      "NumPy=Arrays, SciPy=Numerik, Matplotlib=Plots, Scikit-learn=ML, Pandas=Tabellen",
      "NumPy=Plots, Pandas=ML, SciPy=Tabellen, Matplotlib=Arrays",
      "Alle fünf sind Plot-Bibliotheken",
      "Pandas=Deep Learning, NumPy=Datenbankzugriff"
    ],
    "correct": 0
  },
  {
    "id": "k6-006",
    "ch": 6,
    "topic": "Pandas",
    "q": "Was ist ein DataFrame und wie erzeugt/liest man einen?",
    "a": "Die zentrale tabellarische Datenstruktur von Pandas – Zeilen und benannte Spalten, ähnlich einer Tabelle.<br>Aus einem Dictionary: <code>df = pd.DataFrame(data)</code><br>Aus einer CSV: <code>df = pd.read_csv('daten.csv', sep=\",\", header=0)</code>"
  },
  {
    "id": "k6-007",
    "ch": 6,
    "topic": "Pandas",
    "q": "Welche Pandas-Befehle verschafft man sich für einen ersten Überblick über Daten?",
    "a": "<code>df.head()</code> – erste Zeilen<br><code>df.info()</code> – Spalten, Datentypen, Anzahl der Nicht-Null-Werte<br><code>df.describe()</code> – statistische Kennzahlen (Mittelwert, Min, Max, Quartile)<br><code>df.shape</code> – Zeilen/Spalten<br><code>df.isnull().sum()</code> – <b>Nullwerte je Spalte zählen</b>"
  },
  {
    "id": "k6-008",
    "ch": 6,
    "topic": "Pandas",
    "q": "Wie geht man mit Nullwerten um (Data Cleaning)?",
    "a": "<code>df.isnull().sum()</code> – Nullwerte zählen<br><code>df.dropna()</code> – Zeilen mit fehlenden Werten löschen<br><code>df.fillna(wert)</code> – fehlende Werte ersetzen, z.B. durch den Mittelwert <code>df['x'].mean()</code><br><code>df.drop_duplicates()</code> – Duplikate entfernen<br>Data Cleaning umfasst außerdem: falsche Formate korrigieren, Ausreißer behandeln, uneinheitliche Schreibweisen vereinheitlichen."
  },
  {
    "id": "k6-009",
    "ch": 6,
    "topic": "Plattformen",
    "q": "Was ist eine Data-Science-Plattform und welche Funktionen hat sie?",
    "a": "Softwarepakete, die Datenanalyse mit Machine Learning unterstützen. Typische Funktionen:<br>• Extraktion, Aufbereitung und Manipulation von Daten<br>• Algorithmen und Funktionen für die Datenanalyse<br>• Modellerstellung und Training (KI)<br>• Verifizierung von Modellen<br>• Bereitstellung und Integration in Geschäftsprozesse"
  },
  {
    "id": "k6-010",
    "ch": 6,
    "topic": "Plattformen",
    "q": "Welche Anbieter gelten laut Gartner Magic Quadrant als Leader?",
    "a": "<b>Databricks</b> – 2025 höchste Position bei Ability to Execute und Completeness of Vision<br><b>Google – Vertex AI</b> – starke Integration von generativer KI und Agent-Frameworks<br><b>Microsoft – Azure Machine Learning</b> – Verknüpfung mit Microsoft Fabric<br><b>AWS – Amazon SageMaker</b> – Skalierbarkeit und Breite des Tool-Angebots"
  },
  {
    "id": "k6-011",
    "ch": 6,
    "topic": "Plattformen",
    "q": "Was bieten Vertex AI und Cloudera Data Science Workbench?",
    "a": "<b>Vertex AI</b> (Google): Unified-AI-Plattform – 1) Datenexploration/Modellentwicklung über Vertex AI Workbench (verwaltete Jupyter-Umgebung), 2) Modelltraining und Optimierung, 3) Experiment-Tracking, 4) Modellverwaltung und Deployment, 5) Generative KI über den Model Garden.<br><b>Cloudera DSW</b>: Erstellen, Managen und Deployen von ML-Modellen; Web-Interface mit R, Python oder Scala und Open-Source-Bibliotheken; das Modell kann in einen Docker-Container überführt werden.<br>Weitere: H2O.ai und KNIME (beide Open Source)."
  },
  {
    "id": "k6-012",
    "ch": 6,
    "topic": "Jupyter",
    "q": "Was ist ein Jupyter Notebook?",
    "a": "Eine <b>webbasierte interaktive Rechenumgebung</b> zum Erstellen von Notebook-Dokumenten.<br>Ein Notebook ist eine browserbasierte <b>REPL</b> mit einer geordneten Liste von Eingabe-/Ausgabezellen, die Code, Text (Markdown), Mathematik, Diagramme und Rich Media enthalten können.<br>Technisch ein <b>JSON-Dokument</b> mit versioniertem Schema, Dateiendung <b>.ipynb</b>; konvertierbar nach HTML, PDF, LaTeX und Präsentationsfolien.",
    "options": [
      "Webbasierte interaktive Umgebung mit Zellen; JSON-Datei mit Endung .ipynb",
      "Ein Texteditor für Python-Skripte",
      "Eine Datenbank für Notizen",
      "Ein Docker-Image für Pandas"
    ],
    "correct": 0
  },
  {
    "id": "k6-013",
    "ch": 6,
    "topic": "Jupyter",
    "q": "Wofür steht REPL und warum ist das beim Lernen/Analysieren nützlich?",
    "a": "<b>Read-Eval-Print-Loop</b>: Man führt einzelne Zeilen/Zellen aus, nur diese werden ausgeführt und man sieht das Ergebnis direkt darunter.<br>Nützlich, weil man <b>sofort sieht, wie sich ein Ergebnis ändert, wenn man einen Parameter ändert</b> – ohne das gesamte Programm neu zu starten.",
    "options": [
      "Read-Eval-Print-Loop – Zelle ausführen und Ergebnis sofort sehen",
      "Run-Export-Print-Log",
      "Read-Export-Process-Load",
      "Repeat-Evaluate-Predict-Learn"
    ],
    "correct": 0
  },
  {
    "id": "k6-014",
    "ch": 6,
    "topic": "Jupyter",
    "q": "Woher kommt der Name Jupyter und welche Produkte gehören dazu?",
    "a": "Von den drei Sprachen <b>Ju</b>lia, <b>Py</b>thon und <b>R</b> – zugleich Hommage an Galileos Notizbucheinträge zur Entdeckung der Jupitermonde.<br>2014 als Ausgliederung aus IPython durch Fernando Pérez. Produkte: Jupyter Notebook, JupyterHub, JupyterLab.<br>Cloud-Angebote: Amazon SageMaker Notebook, Google Colab, MS Azure Notebook."
  },
  {
    "id": "k6-015",
    "ch": 6,
    "topic": "ML-Libs",
    "q": "Nenne die ML-Bibliotheken im Überblick.",
    "a": "<b>Mahout</b> – Apache-Projekt, ML-Libraries für die Hadoop-Plattform<br><b>Spark ML / MLlib</b> – Funktionsbibliotheken für Spark, nutzen alle Hadoop-Datenquellen (HDFS, HBase, lokale Files)<br><b>TensorFlow</b> – ursprünglich vom Google Brain Team, enthält Algorithmen aus der Graphentheorie"
  },
  {
    "id": "k6-016",
    "ch": 6,
    "topic": "Prozess",
    "q": "Nenne die 4 Grundschritte im Prozess der Datenanalyse.",
    "a": "1) Daten analysieren<br>2) Daraus Erkenntnisse gewinnen<br>3) Die Erkenntnisse dienen als Grundlage einer Entscheidung<br>4) Handlungen (Events) werden ausgelöst"
  },
  {
    "id": "k6-017",
    "ch": 6,
    "topic": "Gartner",
    "q": "Nenne die 4 Analytics-Stufen nach Gartner mit ihrer Leitfrage.",
    "a": "<b>Descriptive</b> – Was ist passiert?<br><b>Diagnostic</b> – Warum ist es passiert?<br><b>Predictive</b> – Was könnte/wird in Zukunft passieren?<br><b>Prescriptive</b> – Welche Maßnahmen sind zu treffen?<br>Je komplexer die Analyse, desto mehr Wert bzw. Wettbewerbsvorteil bringt sie.",
    "options": [
      "Descriptive, Diagnostic, Predictive, Prescriptive",
      "Descriptive, Predictive, Diagnostic, Prescriptive",
      "Diagnostic, Descriptive, Prescriptive, Predictive",
      "Reproduktiv, Deskriptiv, Prädiktiv, Präskriptiv"
    ],
    "correct": 0
  },
  {
    "id": "k6-018",
    "ch": 6,
    "topic": "Gartner",
    "q": "Deskriptive Analyse – Definition und Beispiele.",
    "a": "Es geht um <b>Daten aus der Vergangenheit</b>, die die Frage beantworten: <b>Was ist passiert?</b><br>Typische Quelle: <b>Logfiles</b>.<br>Beispiele: Wie viele Patienten wurden im letzten Monat stationär aufgenommen? Wie hoch ist der durchschnittliche Wochenumsatz? Wie viele Artikel wurden zurückgegeben? Die Bank erkennt aus den Kreditausfalldaten, <i>welche</i> Faktoren Zahlungsausfälle begünstigt haben."
  },
  {
    "id": "k6-019",
    "ch": 6,
    "topic": "Gartner",
    "q": "Diagnostische Analyse – Definition und Beispiel.",
    "a": "Historische Daten werden miteinander verglichen, um zu beantworten: <b>Warum ist etwas passiert?</b><br>Es werden Ursachen, Aus- und Wechselwirkungen geklärt, Folgen analysiert und Muster identifiziert – Suche nach Gründen (<b>Kausalanalyse</b>).<br>Beispiel: Die Bank erkennt, <b>warum</b> Zahlungsausfälle aufgetreten sind.<br>Merke: höherer Aufwand als die deskriptive Analyse, aber auch höherer Nutzen."
  },
  {
    "id": "k6-020",
    "ch": 6,
    "topic": "Gartner",
    "q": "Prädiktive Analyse – Definition und Beispiel.",
    "a": "Blick in die Zukunft: <b>Was könnte bzw. wird passieren?</b><br>Auf Basis deskriptiver und diagnostischer Ergebnisse werden Tendenzen ermittelt, Abweichungen von Normwerten früh erkannt und Trends vorhergesagt.<br>Beispiel: Die Bank erstellt ein <b>Scoring-Modell</b> – ein weiteres Entscheidungskriterium, aber nicht das ausschlaggebende."
  },
  {
    "id": "k6-021",
    "ch": 6,
    "topic": "Gartner",
    "q": "Präskriptive Analyse – Definition und Beispiel. Was ist hier mit dem Menschen?",
    "a": "<b>Welche Maßnahmen sind zu treffen</b>, um ein künftiges Problem zu verhindern bzw. Trends auszuschöpfen? Handlungen werden <b>automatisch ausgelöst</b>.<br>Beispiel: Eine Webapplikation verarbeitet Kleinkreditanträge, <b>entscheidet automatisch</b> über die Vergabe und veranlasst die Auszahlung.<br>Menschlicher Faktor: hier laufen <b>Entscheidung UND Aktion automatisch</b> – der Anteil menschlicher Interaktion ist am geringsten.",
    "options": [
      "Entscheidung und Aktion laufen automatisch – geringste menschliche Interaktion",
      "Der Mensch entscheidet, die Maschine führt aus",
      "Die Maschine schlägt vor, der Mensch entscheidet",
      "Der Mensch macht alles selbst"
    ],
    "correct": 0
  },
  {
    "id": "k6-022",
    "ch": 6,
    "topic": "Skalen",
    "q": "Nenne die vier Skalenniveaus in aufsteigender Reihenfolge und was jeweils messbar ist.",
    "a": "<b>Nominal</b> – nur Einteilung, keine Ordnung. Messbar: Häufigkeit. (Geschlecht, Berufsstatus, Ja/Nein)<br><b>Ordinal</b> – Rangordnung vorhanden. Messbar: Häufigkeit + Reihenfolge. (Schulnoten)<br><b>Intervall (kardinal)</b> – Zahl + Dimension. Messbar: Häufigkeit, Reihenfolge, <b>Abstand</b>. (Datum, Temperatur)<br><b>Verhältnis (kardinal)</b> – Zahl + Dimension + <b>Nullpunkt</b>. Messbar: zusätzlich Abstand zum Nullpunkt. (Einkommen in Euro, Alter in Jahren)",
    "options": [
      "Nominal, Ordinal, Intervall, Verhältnis",
      "Ordinal, Nominal, Verhältnis, Intervall",
      "Nominal, Intervall, Ordinal, Verhältnis",
      "Kardinal, Ordinal, Nominal, Intervall"
    ],
    "correct": 0
  },
  {
    "id": "k6-023",
    "ch": 6,
    "topic": "Skalen",
    "q": "Warum sind Schulnoten ordinal und nicht intervallskaliert?",
    "a": "Es gibt zwar eine <b>Rangordnung</b> – man erkennt, dass zwischen 1 und 2 ein Unterschied besteht –, aber <b>keine sinnvollen Zwischenwerte</b> und keine gleichen Abstände: eine Note 1,5 oder 3,4 existiert nicht."
  },
  {
    "id": "k6-024",
    "ch": 6,
    "topic": "Skalen",
    "q": "Warum ist Temperatur Intervall- und Alter Verhältnisskala?",
    "a": "<b>Temperatur</b>: Es gibt Zwischenwerte und definierte Abstände (20°C ist 10 Grad wärmer als 10°C), aber <b>keinen absoluten Nullpunkt</b> in der Alltagsskala – 20°C ist nicht „doppelt so warm“ wie 10°C.<br><b>Alter/Geburtsdatum</b>: Es gibt einen echten <b>Nullpunkt</b> – ab dem Geburtstag beginnt das Zählen. Verhältnisse sind sinnvoll: 40 Jahre ist doppelt so alt wie 20."
  },
  {
    "id": "k6-025",
    "ch": 6,
    "topic": "KI",
    "q": "Wer gilt als Fundament der modernen KI und warum?",
    "a": "<b>Alan Mathison Turing</b> – Londoner Logiker, Mathematiker, Kryptoanalytiker und Informatiker.<br>Er entwarf die <b>Turingmaschine</b>, deren Berechenbarkeitsmodell einen der Grundpfeiler der theoretischen Informatik darstellt.",
    "options": [
      "Alan Turing",
      "John von Neumann",
      "Edsger Dijkstra",
      "Thomas Cover"
    ],
    "correct": 0
  },
  {
    "id": "k6-026",
    "ch": 6,
    "topic": "KI",
    "q": "Womit beschäftigt sich KI?",
    "a": "KI ist ein Segment der Informatik. Sie beschäftigt sich damit, <b>intelligentes Verhalten zu automatisieren</b> und es Apparaten und Systemen mittels maschinellen Lernens beizubringen. Akteure der KI versuchen, gewisse <b>menschliche Entscheidungsstrukturen zu imitieren</b>."
  },
  {
    "id": "k6-027",
    "ch": 6,
    "topic": "ML",
    "q": "Was ist Machine Learning – und was passiert beim Lernen genau?",
    "a": "Oberbegriff für die „künstliche“ <b>Generierung von Wissen aus Erfahrung</b>: Ein System lernt aus Beispielen und kann diese nach der Lernphase <b>verallgemeinern</b>.<br>Die Algorithmen bauen ein <b>statistisches Modell</b> auf Basis von Trainingsdaten auf – die Beispiele werden also <b>nicht auswendig gelernt</b>, sondern Muster und Gesetzmäßigkeiten erkannt.<br>So kann das System auch unbekannte Daten beurteilen (<b>Lerntransfer</b>) – oder daran scheitern (<b>Overfitting / Überanpassung</b>)."
  },
  {
    "id": "k6-028",
    "ch": 6,
    "topic": "ML",
    "q": "Was ist Overfitting?",
    "a": "<b>Überanpassung</b>: Das Modell passt sich zu stark an die Trainingsdaten an (lernt sie quasi auswendig, inkl. Rauschen) und scheitert dann am Beurteilen <b>unbekannter</b> Daten – der Lerntransfer misslingt.",
    "options": [
      "Das Modell passt sich zu stark an die Trainingsdaten an und versagt bei neuen Daten",
      "Das Modell hat zu wenige Trainingsdaten gesehen",
      "Der Datensatz ist zu groß für den Arbeitsspeicher",
      "Es wurden zu viele Cluster gebildet"
    ],
    "correct": 0
  },
  {
    "id": "k6-029",
    "ch": 6,
    "topic": "ML",
    "q": "Erkläre den ML-Ablauf (die Machine-Learning-Grafik).",
    "a": "<b>Trainingsphase</b>: Historische/gelabelte <b>Daten</b> → <b>Data Cleaning / Vorverarbeitung</b> (fehlende Werte, Duplikate, Formate, Ausreißer) → <b>Feature-Auswahl</b> → <b>ML-Algorithmus</b> → <b>Modell</b> → <b>Evaluierung/Verifizierung</b> mit Testdaten; bei schlechtem Ergebnis Parameter anpassen und erneut trainieren.<br><b>Anwendungsphase</b>: <b>Neue, unbekannte Daten</b> → trainiertes Modell → <b>Vorhersage/Klassifikation</b> → Entscheidung/Aktion.<br>Wichtig: Trainingsdaten und Testdaten werden getrennt."
  },
  {
    "id": "k6-030",
    "ch": 6,
    "topic": "ML",
    "q": "Was ist Data Cleaning? Erkläre an einem konkreten Fall.",
    "a": "Bereinigung der Rohdaten vor der Analyse: fehlende Werte ergänzen oder entfernen, <b>Duplikate</b> löschen, Formate vereinheitlichen, falsche Werte und <b>Ausreißer</b> behandeln, uneinheitliche Schreibweisen zusammenführen.<br>Konkreter Fall: In einer Kundentabelle steht das Datum mal als 01.02.2024, mal als 2024-02-01; das Bundesland mal „Vbg“, mal „Vorarlberg“; bei manchen Sätzen fehlt das Alter und einer hat Alter = 999. Ohne Bereinigung liefert jede Auswertung falsche Gruppierungen und Mittelwerte."
  },
  {
    "id": "k6-031",
    "ch": 6,
    "topic": "ML",
    "q": "Überwachtes vs. unüberwachtes Lernen – Unterschied und je ein Verfahren.",
    "a": "<b>Supervised Learning</b>: Die Daten haben bereits ein Ergebnis bzw. <b>Label</b> (labeled data), die Kategorien sind vorab bekannt. → k-NN, Regression, Diskriminanzanalyse.<br><b>Unsupervised Learning</b>: <b>Keine Einteilungen</b> vorhanden (unlabeled data). Der Algorithmus weiß nicht, was erkannt werden soll, und versucht selbst Muster und Cluster zu bilden. → Clustering.",
    "options": [
      "Supervised = gelabelte Daten (kNN, Regression), Unsupervised = ungelabelt (Clustering)",
      "Supervised = Clustering, Unsupervised = Regression",
      "Supervised = schnell, Unsupervised = langsam",
      "Supervised braucht keine Trainingsdaten"
    ],
    "correct": 0
  },
  {
    "id": "k6-032",
    "ch": 6,
    "topic": "ML",
    "q": "Welche vier Lernarten werden unterschieden?",
    "a": "• Überwachtes Lernen (Supervised Learning)<br>• Unüberwachtes Lernen (Unsupervised Learning)<br>• Teilüberwachtes Lernen (Semi-Supervised Learning)<br>• Verstärkendes Lernen (Reinforcement Learning)"
  },
  {
    "id": "k6-033",
    "ch": 6,
    "topic": "ML",
    "q": "Was ist Reinforcement Learning?",
    "a": "Bestärkendes/verstärkendes Lernen: Ein <b>Software-Agent</b> erlernt selbstständig eine Strategie (<i>policy</i>), um erhaltene <b>Belohnungen zu maximieren</b>.<br>Dem Agenten wird nicht vorgezeigt, welche Aktion in welcher Situation die beste ist – er erhält durch die Interaktion mit seiner Umwelt zu bestimmten Zeitpunkten eine Belohnung, die auch <b>negativ</b> sein kann.",
    "options": [
      "Ein Agent lernt über Belohnungen aus der Interaktion mit der Umwelt",
      "Ein Modell wird mit gelabelten Daten trainiert",
      "Cluster werden ohne Vorgabe gebildet",
      "Ein Netz wird mit Backpropagation initialisiert"
    ],
    "correct": 0
  },
  {
    "id": "k6-034",
    "ch": 6,
    "topic": "ML",
    "q": "Nenne die vier Aufgabenarten der ML-Verfahren mit je einem Beispiel.",
    "a": "<b>Klassifikation</b>: Klassen sind vorab festgelegt, Elemente werden zugeordnet – z.B. aus Einkommen, Alter, Wohnort, Bildung die Klassen „kreditwürdig“/„nicht kreditwürdig“.<br><b>Prognose/Vorhersage</b>: Ein <b>stetiger Wert</b> wird auf Basis anderer Merkmale berechnet – z.B. Telefongesellschaft prognostiziert den Jahresumsatz eines Kunden.<br><b>Abhängigkeitsanalyse</b>: Beziehungen zwischen Objekten/Merkmalen finden – z.B. <b>Warenkorbanalyse</b>.<br><b>Abweichungsanalyse</b>: <b>Ausreißer</b> identifizieren – z.B. Qualitätskontrolle in der Fertigung."
  },
  {
    "id": "k7-001",
    "ch": 7,
    "topic": "Diskriminanz",
    "q": "Was ist die Diskriminanzanalyse und wozu dient sie?",
    "a": "Ein Verfahren zur <b>Analyse von Gruppenunterschieden</b>: Es werden die diskriminierenden Variablen erkannt, die für die Gruppenzugehörigkeit sorgen.<br>Ziel: für <b>neue Werte die Gruppenzugehörigkeit bestimmen</b>. Sie prüft Gruppen auf signifikante Unterschiede ihrer Merkmale und benennt geeignete bzw. ungeeignete Merkmale.<br>Steckbrief: Zweck = Klassifikation, Lernen = überwacht, Analysedaten = Kardinalskala, Ergebnis = Nominalskala."
  },
  {
    "id": "k7-002",
    "ch": 7,
    "topic": "Diskriminanz",
    "q": "Worin unterscheidet sich Diskriminanzanalyse von Clusteranalyse?",
    "a": "Bei der Diskriminanzanalyse (Klassifizierung) <b>liegen die Gruppen/Cluster bereits vor</b> – überwachtes Lernen.<br>Bei der Clusteranalyse sind die Gruppen <b>nicht bekannt</b> und werden erst gefunden – unüberwachtes Lernen.",
    "options": [
      "Bei der Diskriminanzanalyse sind die Gruppen vorab bekannt, beim Clustering nicht",
      "Beim Clustering sind die Gruppen vorab bekannt",
      "Beide brauchen gelabelte Daten",
      "Beide sind unüberwacht"
    ],
    "correct": 0
  },
  {
    "id": "k7-003",
    "ch": 7,
    "topic": "Diskriminanz",
    "q": "Welche Datenvoraussetzung braucht die Diskriminanzanalyse – und wo scheitert sie?",
    "a": "Sie setzt eine <b>Normalverteilung</b> (Gauß-/Glockenkurve) voraus: die meisten Werte liegen nah am Durchschnitt, extreme Abweichungen werden seltener.<br>Funktioniert gut bei biometrischen Daten (Körpergröße, Blutdruck) und Testergebnissen (IQ, standardisierte Prüfungen).<br><b>Scheitert</b> bei Einkommen und Vermögen – diese sind <b>rechtsschief</b>: eine riesige Masse mit geringem Einkommen und wenige Superreiche."
  },
  {
    "id": "k7-004",
    "ch": 7,
    "topic": "kNN",
    "q": "Was ist der k-Nearest-Neighbor-Algorithmus?",
    "a": "Einer der einfachsten und gängigsten Algorithmen zur <b>Klassifizierung</b>. Er gehört zum <b>Supervised Learning</b> und wird oft am Projektanfang eingesetzt, um einen ersten Überblick über die Daten zu bekommen.<br>Für die Klassifikation werden <b>k Nachbarn</b> berücksichtigt – die Punkte mit dem kürzesten Abstand. Der neue Punkt bekommt die Klasse, die unter diesen Nachbarn in der Mehrheit ist.<br>Geht auf Stanford-Professor <b>Thomas Cover</b> (Paper 1967) zurück.<br>Steckbrief: Klassifikation, überwacht, Kardinalskala → Ergebnis Nominalskala."
  },
  {
    "id": "k7-005",
    "ch": 7,
    "topic": "kNN",
    "q": "Was ist der große Vorteil von kNN gegenüber neuronalen Netzen?",
    "a": "kNN benötigt <b>kein aufwändiges Training</b>. Stattdessen werden bei jeder Klassifizierung <b>alle Daten</b> verwendet („lazy learning“).",
    "options": [
      "Kein aufwändiges Training nötig – alle Daten werden bei jeder Klassifizierung genutzt",
      "Es braucht weniger Speicher",
      "Es funktioniert ohne Labels",
      "Es ist immer genauer"
    ],
    "correct": 0
  },
  {
    "id": "k7-006",
    "ch": 7,
    "topic": "kNN",
    "q": "Wie wird bei kNN die Distanz berechnet?",
    "a": "Mit dem <b>euklidischen Abstand</b>. Bei zwei Parametern entspricht das dem <b>Satz von Pythagoras</b>:<br>d = √((y₁−x₁)² + (y₂−x₂)²)<br>Ordinale und nominale Daten müssen vorher transformiert werden (z.B. Ja/Nein → 1/0).",
    "options": [
      "Euklidischer Abstand (Pythagoras)",
      "Kosinus-Ähnlichkeit",
      "Manhattan-Distanz mit Gewichtung",
      "Levenshtein-Distanz"
    ],
    "correct": 0
  },
  {
    "id": "k7-007",
    "ch": 7,
    "topic": "kNN",
    "q": "Warum ist k=4 eine schlechte Wahl?",
    "a": "Weil k eine <b>ungerade Zahl</b> sein sollte. Bei geradem k kann es bei zwei Klassen zu einem <b>Gleichstand</b> kommen (2:2) – die Mehrheitsentscheidung ist dann nicht eindeutig.",
    "options": [
      "Bei geradem k kann ein Gleichstand entstehen – k sollte ungerade sein",
      "k=4 ist zu rechenaufwändig",
      "k muss immer durch die Klassenanzahl teilbar sein",
      "k=4 führt immer zu Overfitting"
    ],
    "correct": 0
  },
  {
    "id": "k7-008",
    "ch": 7,
    "topic": "kNN",
    "q": "Erkläre diesen Code:<br><code>model = KNeighborsClassifier(n_neighbors=3)</code><br><code>model.fit(data, target)</code><br><code>predicted = model.predict([[16, 60]])</code><br><code>distances, indices = model.kneighbors([[16,60]], n_neighbors=3)</code>",
    "a": "Zeile 1: kNN-Modell mit <b>k = 3</b> anlegen.<br>Zeile 2: Training – <code>data</code> sind die Merkmale (hier Temperatur und Luftfeuchte), <code>target</code> die bekannten Labels (Joggen ja/nein, gemappt auf 1/0).<br>Zeile 3: Klassifikation eines neuen Punktes (16 °C, 60 % Luftfeuchte) – liefert die vorhergesagte Klasse.<br>Zeile 4: liefert zusätzlich die <b>Distanzen</b> zu den 3 nächsten Nachbarn und deren <b>Indizes</b> im Trainingsdatensatz – damit ist die Entscheidung nachvollziehbar."
  },
  {
    "id": "k7-009",
    "ch": 7,
    "topic": "Regression",
    "q": "Warum heißt die Regression „Mutter aller Verfahren“?",
    "a": "Wegen ihrer <b>einfachen Ausprägung</b> und ihrer <b>guten Verständlichkeit und Nachvollziehbarkeit</b>.<br>Steckbrief: Zweck = <b>Prognose</b>, Lernen = überwacht, Analysedaten = Kardinalskala, Ergebnis = <b>Kardinalskala</b> (stetiger Wert)."
  },
  {
    "id": "k7-010",
    "ch": 7,
    "topic": "Regression",
    "q": "Was ist die einfache lineare Regression?",
    "a": "Ein statistisches Verfahren, das eine beobachtete <b>abhängige Variable</b> durch eine oder mehrere <b>unabhängige Variablen</b> erklärt.<br>Das einfache Modell (ELR) geht von zwei metrischen Größen aus: Einflussgröße X und Zielgröße Y. Mithilfe zweier Parameter (<b>Steigung</b> und <b>Achsenabschnitt</b>) wird eine Gerade so durch die Punktwolke gelegt, dass der lineare Zusammenhang möglichst gut beschrieben wird: <code>y = k·x + d</code>."
  },
  {
    "id": "k7-011",
    "ch": 7,
    "topic": "Regression",
    "q": "Was ist die abhängige, was die unabhängige Variable?",
    "a": "<b>Abhängige Variable</b> (Zielvariable, Kriterium): wird von anderen beeinflusst und soll vorhergesagt werden; auf der <b>y-Achse</b>, mathematisch „Y“.<br><b>Unabhängige Variable</b> (Prädiktorvariable): erklärt bzw. sagt die Veränderungen der abhängigen Variable vorher; man kann sie kontrollieren/manipulieren; auf der <b>x-Achse</b>, mathematisch „X“.",
    "options": [
      "Abhängige = Y-Achse, wird vorhergesagt; Unabhängige = X-Achse, erklärt",
      "Abhängige = X-Achse; Unabhängige = Y-Achse",
      "Beide liegen auf der Y-Achse",
      "Die unabhängige Variable wird vorhergesagt"
    ],
    "correct": 0
  },
  {
    "id": "k7-012",
    "ch": 7,
    "topic": "Regression",
    "q": "Wie interpretiert man den Korrelationsfaktor r?",
    "a": "r gibt an, wie stark zwei Variablen in Beziehung stehen:<br><b>r = ±1</b> – perfekter linearer bzw. monotoner Zusammenhang; je näher |r| bei 1, desto stärker.<br><b>r = 0</b> – kein linearer Zusammenhang.<br><b>r &lt; 0</b> – negativer Zusammenhang, <b>r &gt; 0</b> – positiver Zusammenhang.<br>Faustregel: <b>r &gt; 0,75</b> lässt auf eine gute Korrelation schließen.",
    "options": [
      "±1 = perfekter Zusammenhang, 0 = keiner; ab ca. 0,75 gilt er als gut",
      "0 = perfekter Zusammenhang, 1 = keiner",
      "r ist immer positiv",
      "r misst die Steigung der Geraden"
    ],
    "correct": 0
  },
  {
    "id": "k7-013",
    "ch": 7,
    "topic": "Regression",
    "q": "Erkläre diesen Code:<br><code>slope, intercept, r, p, std_err = stats.linregress(x, y)</code><br><code>def myfunc(x): return slope * x + intercept</code><br><code>speed = myfunc(10)</code>",
    "a": "<code>linregress</code> berechnet die Regressionsgerade: <b>slope</b> = Steigung, <b>intercept</b> = Achsenabschnitt (konstanter Wert), <b>r</b> = Korrelationsfaktor.<br><code>myfunc</code> ist die Geradengleichung y = slope·x + intercept.<br><code>myfunc(10)</code> berechnet den <b>Erwartungswert für x = 10</b> – so werden zukünftige Werte vorhergesagt."
  },
  {
    "id": "k7-014",
    "ch": 7,
    "topic": "Regression",
    "q": "Wann nimmt man polynomiale Regression und wie prüft man die Güte?",
    "a": "Wenn die Datenpunkte erkennbar <b>nicht auf einer Geraden</b> liegen. Statt einer Geraden wird eine Kurve durch die Punkte gelegt: <code>numpy.poly1d(numpy.polyfit(x, y, 3))</code> (3 = Grad des Polynoms).<br>Güte über <b>r-squared</b> (<code>r2_score</code>): Bereich <b>0</b> (keine Annäherung) bis <b>1</b> (100 % Annäherung).",
    "options": [
      "r-squared von 0 (keine Annäherung) bis 1 (perfekte Annäherung)",
      "r-squared von −1 bis +1",
      "r-squared ist die Steigung",
      "r-squared zählt die Datenpunkte"
    ],
    "correct": 0
  },
  {
    "id": "k7-015",
    "ch": 7,
    "topic": "Clustering",
    "q": "Was ist die Clusteranalyse?",
    "a": "Ein Verfahren zur <b>Bündelung/Gruppierung von Objekten</b>. Ziel: alle Objekte <b>innerhalb</b> einer Gruppe möglichst ähnlich, die Gruppen <b>untereinander</b> möglichst unähnlich.<br>Die Gruppen sind – anders als bei der Diskriminanzanalyse – <b>nicht bekannt</b> → <b>unüberwachtes Lernen</b>.<br>Steckbrief: Zweck = Segmentierung, Lernen = unüberwacht, Ergebnis = Cluster/Gruppen.",
    "options": [
      "Gruppen bilden: innen ähnlich, untereinander unähnlich – unüberwacht",
      "Bekannte Gruppen zuordnen – überwacht",
      "Stetige Werte vorhersagen",
      "Ausreißer entfernen"
    ],
    "correct": 0
  },
  {
    "id": "k7-016",
    "ch": 7,
    "topic": "Clustering",
    "q": "Nenne Clustering-Algorithmen. Gibt es den einen besten?",
    "a": "Affinity Propagation, Agglomerative Clustering, BIRCH, DBSCAN, K-Means, Mini-Batch K-Means, Mean Shift, OPTICS, Spectral Clustering, Mixture of Gaussians.<br><b>Nein</b> – es gibt keine einzelne beste Methode für alle Datensätze. In Python arbeitet man mit <b>scikit-learn</b>."
  },
  {
    "id": "k7-017",
    "ch": 7,
    "topic": "Clustering",
    "q": "Wie funktioniert Affinity Propagation und was macht der Parameter damping?",
    "a": "Graphenbasiertes Verfahren; die <b>Anzahl der Cluster muss nicht vorab angegeben werden</b>. Der Algorithmus ermittelt repräsentative Datenpunkte (<b>Exemplars</b>) durch iterativen Nachrichtenaustausch:<br><b>Responsibility R(i,k)</b> – wie gut eignet sich k als Repräsentant für i?<br><b>Availability A(i,k)</b> – wie angemessen wäre es für k, Repräsentant für i zu sein?<br>Läuft, bis die Zuordnungen konvergieren; übrige Punkte gehen zum nächsten Repräsentanten.<br><b>damping</b> (0.5–1.0) dämpft die Aktualisierung, um Oszillationen zu verhindern. 0.9 = 90 % des alten Werts bleiben → langsamere Konvergenz, aber stabil."
  },
  {
    "id": "k7-018",
    "ch": 7,
    "topic": "Clustering",
    "q": "Wie funktioniert BIRCH und was bedeuten threshold und n_clusters?",
    "a": "<b>B</b>alanced <b>I</b>terative <b>R</b>educing and <b>C</b>lustering using <b>H</b>ierarchies – hierarchisches Verfahren speziell für <b>sehr große Datensätze</b>; inkrementell und speichereffizient, komprimiert die Daten vor dem eigentlichen Clustering.<br><b>Phase 1</b>: Aufbau des <b>CF-Trees</b>; jedes Blatt speichert ein Clustering Feature aus N (Anzahl Punkte), LS (linearer Summenvektor) und SS (Quadratsumme). Rohdaten müssen danach nicht im RAM bleiben.<br><b>Phase 2</b>: globales Clustering auf den komprimierten Blättern (standardmäßig agglomerativ).<br><b>threshold</b> = maximal zulässiger Radius eines Sub-Clusters – kleiner = feinere, kompaktere Cluster, mehr Speicher.<br><b>n_clusters</b> = finale Anzahl der Cluster."
  },
  {
    "id": "k7-019",
    "ch": 7,
    "topic": "Clustering",
    "q": "Vergleiche Affinity Propagation und BIRCH.",
    "a": "<b>Skalierbarkeit</b>: AP gering – O(N²) Zeit und Speicher; BIRCH sehr hoch – O(N), minimaler Speicher.<br><b>Clusteranzahl</b>: AP wird automatisch aus den Daten bestimmt; BIRCH explizit über <code>n_clusters</code> vorgegeben.<br><b>Zielsetzung</b>: AP identifiziert reale Repräsentanten (Exemplars); BIRCH komprimiert massive Datenmengen effizient vor.",
    "options": [
      "AP: O(N²), Clusterzahl automatisch; BIRCH: O(N), Clusterzahl vorgegeben",
      "AP: O(N), BIRCH: O(N²)",
      "Beide brauchen n_clusters",
      "BIRCH bestimmt die Clusterzahl automatisch"
    ],
    "correct": 0
  },
  {
    "id": "k7-020",
    "ch": 7,
    "topic": "Clustering",
    "q": "Was ist der Iris-Datensatz und wie clustert man ihn?",
    "a": "150 Blumen von 3 Arten (Setosa, Versicolor, Virginica) mit je 4 Merkmalen (Länge/Breite von Kelch- und Blütenblättern – Sepal/Petal Length/Width).<br><code>iris = datasets.load_iris(); X = iris.data</code> → 2D-Matrix der Form <b>(150, 4)</b>, <b>nur Features, keine Labels</b> (unüberwacht!).<br><code>birch = Birch(n_clusters=3); birch.fit(X); labels = birch.labels_</code><br>Zum Plotten reichen 2 der 4 Features: <code>plt.scatter(X[:,0], X[:,1], c=labels)</code>."
  },
  {
    "id": "k7-021",
    "ch": 7,
    "topic": "Verfahren",
    "q": "Ordne zu: Welches Verfahren für Klassifikation, Prognose, Segmentierung?",
    "a": "<b>Klassifikation</b> (überwacht, Ergebnis nominal): Diskriminanzanalyse, k-Nearest-Neighbor<br><b>Prognose</b> (überwacht, Ergebnis kardinal): Regression<br><b>Segmentierung</b> (unüberwacht, Ergebnis Cluster): Clusteranalyse",
    "options": [
      "Klassifikation: kNN/Diskriminanz – Prognose: Regression – Segmentierung: Clustering",
      "Klassifikation: Regression – Prognose: Clustering – Segmentierung: kNN",
      "Alle drei: Clustering",
      "Klassifikation: Clustering – Prognose: kNN"
    ],
    "correct": 0
  },
  {
    "id": "k8-001",
    "ch": 8,
    "topic": "KNN",
    "q": "Was ist ein künstliches neuronales Netz?",
    "a": "Ein vom Gehirn inspiriertes Informationsverarbeitungsparadigma: Kombination aus mathematischer <b>Matrizenrechnung</b> und einem Ablaufschema (<b>Lernalgorithmus</b>) mit iterativen Verbesserungen.<br>ANNs lernen wie Menschen anhand von Beispielen; das Lernen besteht größtenteils aus <b>Anpassungen der synaptischen Verbindungen (Gewichte)</b> zwischen den Neuronen."
  },
  {
    "id": "k8-002",
    "ch": 8,
    "topic": "KNN",
    "q": "Wie rechnet ein einzelnes Neuron?",
    "a": "Die Eingangswerte x₀, x₁, x₂… werden mit den <b>Gewichten</b> w₀, w₁, w₂… multipliziert, alle Produkte <b>summiert</b>, ein <b>Offset/Bias b</b> addiert, und das Ergebnis geht in die <b>Aktivierungsfunktion f</b>.<br>Resultat ist der Ausgang des Neurons – die <b>Aktivierung</b>, die als Eingang für die nächste Schicht dient.",
    "options": [
      "Eingänge × Gewichte, summieren, Bias addieren, durch die Aktivierungsfunktion",
      "Eingänge addieren und durch die Anzahl teilen",
      "Eingänge sortieren und den Median nehmen",
      "Gewichte multiplizieren und die Wurzel ziehen"
    ],
    "correct": 0
  },
  {
    "id": "k8-003",
    "ch": 8,
    "topic": "KNN",
    "q": "Nenne drei Aktivierungsfunktionen – was haben sie gemeinsam?",
    "a": "<b>Sigmoid</b>, <b>Tangens Hyperbolicus (tanh)</b> und <b>ReLU</b> (Rectifier Linear Unit, f(x) = max(0, x)).<br>Alle drei sind <b>nichtlinear</b> – genau das ist ihr Sinn, denn ohne Nichtlinearität könnte das Netz nur lineare Zusammenhänge abbilden.",
    "options": [
      "Sigmoid, tanh, ReLU – alle nichtlinear",
      "Sigmoid, Linear, Konstant",
      "ReLU, Softmax, Pythagoras",
      "tanh, Kosinus, Euklid"
    ],
    "correct": 0
  },
  {
    "id": "k8-004",
    "ch": 8,
    "topic": "KNN",
    "q": "Wie wird ein neuronales Netz initialisiert – und was darf man nicht tun?",
    "a": "Im einfachsten Fall <b>gleichverteilt zufällig</b>.<br>Auf keinen Fall darf mit dem <b>gleichen Wert für alle Neuronen</b> initialisiert werden – dann wäre ein Lernen bzw. Anpassen der Werte nicht möglich (alle Neuronen würden identisch bleiben).",
    "options": [
      "Zufällig/gleichverteilt – niemals alle Neuronen mit demselben Wert",
      "Alle Neuronen mit 0",
      "Alle Neuronen mit 1",
      "Nach der Reihenfolge der Eingangsdaten"
    ],
    "correct": 0
  },
  {
    "id": "k8-005",
    "ch": 8,
    "topic": "KNN",
    "q": "Wie läuft das Lernen ab – Zielfunktion und Fehlerminimierung?",
    "a": "<b>Zielfunktion</b>: Man muss wissen, wann etwas richtig oder falsch war – bei einer Klassifikation gibt es nur richtig oder falsch.<br><b>Lernen</b>: Die Neuronen starten mit zufälligen Werten; der Ausgabewert wird berechnet und mit der Zielfunktion/den Testdaten verglichen. Bei zu vielen Fehlern werden die Aktivierungen angepasst, bis die Zielfunktion gut erreicht ist.<br><b>Fehlerminimierung</b>: Die Suche nach der idealen Aktivierung bedeutet mathematisch das <b>Finden von Minimalwerten im Fehlerraum</b>. Klassiker dafür ist <b>Stochastic Gradient Descent (SGD)</b>, das numerisch den Anstieg bestimmt und in die abfallende Richtung optimiert."
  },
  {
    "id": "k8-006",
    "ch": 8,
    "topic": "KNN",
    "q": "Was ist Backpropagation?",
    "a": "Der Fehler <b>e</b>, den das Netzwerk bei der Schätzung des Ausgangswertes macht, wird <b>zurück an das Netzwerk gegeben</b> und dabei <b>anteilig auf die Neuronen verteilt</b>, die maßgeblich am Fehler beteiligt waren.<br>Mathematisch werden über die <b>Kettenregel von hinten nach vorne</b> die Gradienten der Fehlerfunktion berechnet, um die Gewichte schrittweise zu optimieren.",
    "options": [
      "Der Fehler wird rückwärts anteilig auf die beteiligten Neuronen verteilt (Kettenregel)",
      "Die Eingangsdaten werden rückwärts eingelesen",
      "Das Netz wird neu initialisiert",
      "Die Aktivierungsfunktion wird umgekehrt"
    ],
    "correct": 0
  },
  {
    "id": "k8-007",
    "ch": 8,
    "topic": "KNN",
    "q": "Rechne den Forward Pass: x=2.0, w₁=0.5, w₂=0.8, Zielwert t=1.0, lineare Aktivierung.",
    "a": "Hidden: h = x · w₁ = 2.0 · 0.5 = <b>1.0</b><br>Output: y = h · w₂ = 1.0 · 0.8 = <b>0.8</b><br>Das Netzwerk <b>unterschätzt</b> das Ziel (0.8 statt 1.0).<br>Fehler (quadratisch, ½·(t−y)²): ½ · (1.0 − 0.8)² = ½ · 0.04 = <b>0.02</b>"
  },
  {
    "id": "k8-008",
    "ch": 8,
    "topic": "KNN",
    "q": "Was passiert beim Gewichts-Update (Gradientenabstieg)?",
    "a": "Die neuen Gewichte werden berechnet, indem der <b>negative Gradient</b> mit der <b>Lernrate η</b> multipliziert und zum alten Gewicht addiert wird:<br><code>w_neu = w_alt − η · ∂E/∂w</code><br>Die Lernrate (z.B. η = 0.1) steuert, wie groß die Schritte sind: zu groß → Überspringen des Minimums, zu klein → sehr langsames Lernen."
  },
  {
    "id": "k8-009",
    "ch": 8,
    "topic": "KNN",
    "q": "Was sind Layers – und ab wann spricht man von Deep Learning?",
    "a": "<b>Input-Neuronen</b> nehmen die Informationen auf und leiten sie an die <b>Hidden Layers</b> weiter; <b>Output-Neuronen</b> geben die verarbeiteten Informationen aus.<br>Ab ca. <b>10 bis 20 Hidden Layers</b> spricht man von <b>Deep Learning</b>.",
    "options": [
      "Ab ca. 10–20 Hidden Layers",
      "Ab 2 Hidden Layers",
      "Ab 100 Neuronen",
      "Sobald Backpropagation verwendet wird"
    ],
    "correct": 0
  },
  {
    "id": "k8-010",
    "ch": 8,
    "topic": "CNN",
    "q": "Was ist die MNIST-Datenbank?",
    "a": "Modified National Institute of Standards and Technology database – eine öffentlich verfügbare Datenbank <b>handgeschriebener Ziffern</b>, jede als <b>28 × 28 Pixel</b> großes Graustufenbild.<br><b>60.000</b> Trainingsbeispiele und <b>10.000</b> Testbeispiele. Dient dem Trainieren von Klassifikatoren, u.a. CNNs.<br>Ein 28×28-Bild ergibt als Eingangsvektor <b>784 Eingänge</b>.",
    "options": [
      "Handgeschriebene Ziffern, 28×28 Pixel, 60.000 Training / 10.000 Test",
      "Fotos von Blumen in 3 Klassen",
      "Sensordaten aus dem Energienetz",
      "Texte zum Trainieren von Embeddings"
    ],
    "correct": 0
  },
  {
    "id": "k8-011",
    "ch": 8,
    "topic": "CNN",
    "q": "Was ist ein CNN und wie funktioniert die Faltung?",
    "a": "Ein <b>Convolutional Neural Network</b> ist ein Deep-Learning-Algorithmus, der ein Eingabebild aufnimmt, verschiedenen Aspekten/Objekten im Bild erlernbare Gewichtungen zuweist und sie unterscheiden kann. Die nötige Vorverarbeitung ist geringer als bei anderen Klassifizierern – das CNN <b>erlernt die Filter selbst</b>.<br><b>Faltung</b>: Ein Filter (Kernel), z.B. 3×3, wird über die Eingangsmatrix (z.B. 5×5) geschoben; jeder Ausschnitt wird mit dem Filter multipliziert und die Summe gebildet – das Ergebnis kommt in die Ergebnismatrix. Bei 5×5 mit 3×3-Kernel lässt sich der Filter je 3× in x- und y-Richtung verschieben → <b>3×3-Ergebnismatrix</b>.<br>Aufbau: Hidden Layers (Feature Learning) + Klassifikation."
  },
  {
    "id": "k8-012",
    "ch": 8,
    "topic": "CNN",
    "q": "Was macht dieser Code?<br><code>img = cv2.resize(img, (28,28))</code><br><code>img = img / 255.0</code><br><code>pred = model.predict(img.reshape(1,28,28,1))</code><br><code>print(pred.argmax())</code>",
    "a": "Zeile 1: Bild auf <b>28×28</b> skalieren (MNIST-Format).<br>Zeile 2: Pixelwerte auf den Bereich <b>[0,1] normalisieren</b> (Graustufen 0–255).<br>Zeile 3: Bild in die vom Modell erwartete Form bringen und durchs Netz schicken – liefert die <b>Wahrscheinlichkeiten für jede Klasse 0–9</b>.<br>Zeile 4: <code>argmax()</code> gibt den Index mit der höchsten Wahrscheinlichkeit aus – also die <b>vorhergesagte Ziffer</b>."
  },
  {
    "id": "k8-013",
    "ch": 8,
    "topic": "KNN",
    "q": "Steckbrief KNN: Zweck, Lernen, Daten, Ergebnis?",
    "a": "<b>Zweck</b>: Klassifikation / Prognose / Vorhersage<br><b>Lernen</b>: überwacht <b>und</b> unüberwacht möglich<br><b>Analysedaten</b>: Nominal-, Ordinal- oder Kardinalskala<br><b>Ergebnis</b>: Nominal-, Ordinal- oder Kardinalskala<br>→ Das KNN ist damit das flexibelste der behandelten Verfahren."
  },
  {
    "id": "k8-014",
    "ch": 8,
    "topic": "KNN",
    "q": "Was ist Keras/TensorFlow und wie speichert man ein Modell?",
    "a": "<code>tensorflow.keras</code> ist eine Open-Source-Bibliothek als Teil des TensorFlow-Frameworks. Keras ist eine benutzerfreundliche Deep-Learning-Bibliothek zum Erstellen, Trainieren und Evaluieren neuronaler Netze.<br>Speichern: <code>tf.keras.models.save_model(model, 'model/mnist_model.h5')</code><br>Laden: <code>model = keras.models.load_model('model/mnist_model.h5')</code>"
  }
];

export const EXAM_CASES: ExamCase[] = [
  {
    "ch": 1,
    "title": "RDBMS – Anomalien / Non Repeatable Read",
    "intro": "Relationale Datenbanken (RDBMS) sind seit den 1970er Jahren im Einsatz, um große Daten strukturiert zu speichern und analysieren zu können.",
    "parts": [
      {
        "level": "Reproduktion",
        "q": "Beschreiben Sie den Begriff der „Transaktion“ in relationalen Datenbanken und deren erwünschte Eigenschaften.",
        "a": "<b>Transaktion</b>: feste Folge von Operationen, die als eine logische Einheit betrachtet wird – entweder vollständig ausgeführt oder vollständig zurückgerollt. Beispiel Überweisung: Abbuchung Konto A + Gutschrift Konto B.<br><b>Erwünschte Eigenschaften = ACID</b>:<br>• <b>Atomarität</b> – ganz oder gar nicht<br>• <b>Konsistenz</b> – konsistenter Zustand davor und danach, alle Primär- und Fremdschlüssel gültig<br>• <b>Isolation</b> – laufende Transaktionen beeinflussen sich nicht (Sperrprotokolle, Zeitstempelverfahren)<br>• <b>Dauerhaftigkeit</b> – nach dem Commit auch bei Systemabsturz vorhanden"
      },
      {
        "level": "Transfer",
        "q": "Erläutern Sie, was Anomalien im Zusammenhang mit RDBMS-Transaktionen sind und wie diese z.B. in MySQL in der Praxis verhindert werden.",
        "a": "<b>Anomalien</b> sind Probleme, die bei gleichzeitigen Zugriffen mehrerer Transaktionen auftreten:<br>• <b>Dirty Read</b> – Lesen noch nicht committeter Daten<br>• <b>Non Repeatable Read</b> – derselbe Satz liefert beim zweiten Lesen einen anderen Wert<br>• <b>Phantom Read</b> – neue Zeilen erscheinen beim erneuten Lesen einer Ergebnismenge<br><b>Verhinderung</b> über die <b>Isolationslevel</b>: READ UNCOMMITTED (alles möglich) → READ COMMITTED (kein Dirty Read) → REPEATABLE READ (zusätzlich kein Non Repeatable Read) → SERIALIZABLE (keine Anomalie).<br>MySQL verwendet standardmäßig <b>REPEATABLE READ</b>, Oracle <b>READ COMMITTED</b>. Technisch wird das über Sperren bzw. MVCC realisiert. Trade-off: höheres Level = mehr Konsistenz, aber weniger Parallelität und mehr Sperren."
      },
      {
        "level": "Reflexion",
        "q": "Begründen Sie, wie es zur Anomalie „Non Repeatable Read“ kommt, bewerten Sie die Auswirkungen für Transaktion 2 und entwerfen Sie einen Lösungsansatz.",
        "a": "<b>Entstehung</b>: Transaktion 2 liest einen Datensatz. Danach ändert Transaktion 1 denselben Datensatz und <b>committed</b>. Liest Transaktion 2 den Satz innerhalb derselben Transaktion erneut, erhält sie einen <b>anderen Wert</b>. Möglich, weil bei READ COMMITTED nur gegen Dirty Reads geschützt wird, aber keine Lesesperre über die gesamte Transaktion gehalten wird.<br><b>Auswirkung für T2</b>: T2 arbeitet innerhalb einer logischen Einheit mit zwei widersprüchlichen Werten. Berechnungen, Prüfungen und Ausgaben werden inkonsistent – z.B. wird eine Bedingung zuerst als erfüllt, danach als nicht erfüllt bewertet. Das Ergebnis der Transaktion ist nicht mehr reproduzierbar und nicht nachvollziehbar.<br><b>Lösungsansätze</b>: 1) Isolationslevel auf <b>REPEATABLE READ</b> anheben – T2 sieht die Daten so, wie sie zu Beginn der Transaktion waren. 2) Bei zusätzlich nötigem Schutz vor Phantom Reads SERIALIZABLE – allerdings mit Performanceverlust durch Sperren. 3) Alternativ Lesesperren gezielt setzen (SELECT ... FOR UPDATE) oder die Transaktion kurz halten, damit weniger Kollisionen entstehen."
      }
    ]
  },
  {
    "ch": 6,
    "title": "Datenanalyse – Verfahren Anwendung",
    "intro": "Die Verfahren der Datenanalyse geben einen Überblick, wie der Prozess für die Auswertung der gesammelten Daten durchgeführt werden kann.",
    "parts": [
      {
        "level": "Reproduktion",
        "q": "Definieren Sie „Descriptive Analytics“ und geben Sie ein Anwendungsbeispiel an.",
        "a": "<b>Descriptive Analytics</b> (deskriptive/beschreibende Datenanalyse) ist die erste Stufe des Gartner-Reifegradmodells. Sie betrachtet <b>Daten aus der Vergangenheit</b> und beantwortet die Frage <b>„Was ist passiert?“</b>. Typische Datenquelle sind Logfiles.<br><b>Beispiele</b>: Eine Gesundheitseinrichtung erfährt, wie viele Patienten im letzten Monat stationär aufgenommen wurden. Ein Händler ermittelt den durchschnittlichen Wochenumsatz. Ein Hersteller zählt die Retouren des letzten Monats. Eine Bank erkennt aus den Kreditausfalldaten, welche Faktoren die Ausfälle begünstigt haben."
      },
      {
        "level": "Transfer",
        "q": "Erörtern Sie, was die ML-Ablaufgrafik darstellt, erläutern Sie „Data Cleaning“ und erklären Sie es an einem konkreten Fall.",
        "a": "<b>Die Grafik</b> zeigt den Ablauf eines Machine-Learning-Projekts: Rohdaten → Datenaufbereitung/Data Cleaning → Auswahl der Merkmale (Features) → Training mit einem ML-Algorithmus → Modell → Evaluierung mit Testdaten → Einsatz des Modells auf neue, unbekannte Daten → Vorhersage → Entscheidung/Aktion. Ist das Ergebnis der Evaluierung schlecht, geht es in die Schleife zurück: Parameter anpassen und neu trainieren. Trainings- und Testdaten werden getrennt gehalten.<br><b>Data Cleaning</b> ist die Bereinigung der Rohdaten: fehlende Werte ergänzen oder entfernen, Duplikate löschen, Formate und Schreibweisen vereinheitlichen, falsche Werte und Ausreißer behandeln. Ohne diesen Schritt lernt das Modell aus fehlerhaften Daten – „garbage in, garbage out“.<br><b>Konkreter Fall</b>: In einer Kundendatei steht das Datum mal als 01.02.2024, mal als 2024-02-01; das Bundesland mal als „Vbg“, mal als „Vorarlberg“; bei einigen Sätzen fehlt das Alter, bei einem steht 999. Beim Cleaning werden Datumsformate vereinheitlicht, die Schreibweisen zusammengeführt, fehlende Alter durch den Mittelwert ersetzt oder die Sätze entfernt und der Ausreißer 999 korrigiert. Erst danach liefern Gruppierungen und Mittelwerte brauchbare Ergebnisse."
      },
      {
        "level": "Reflexion",
        "q": "Grippe-Neuerkrankungen pro Kalenderwoche (Stadt Wien): Welche Daten wurden benötigt und woher? Um welches Verfahren nach Gartner handelt es sich? Welche weiteren Analysemöglichkeiten hätte die Stadt Wien?",
        "a": "<b>Benötigte Daten</b>: Anzahl der Neuerkrankungen je Kalenderwoche, also Meldedatum bzw. KW, Fallzahl, Bezugsraum (Stadt Wien) und der Zeitraum der Grippesaison. <b>Quellen</b>: Meldungen niedergelassener Ärzte und Ambulanzen an den Grippemeldedienst, Labordaten, Krankenhaus-Aufnahmedaten, Daten der Krankenkassen (Krankenstände), ergänzend Bevölkerungszahlen für Inzidenzen.<br><b>Verfahren nach Gartner</b>: <b>Descriptive Analytics</b> – die Statistik zeigt, was in der Vergangenheit passiert ist (Fallzahlen je KW), ohne Ursachen oder Prognosen.<br><b>Weitere Möglichkeiten</b>:<br>• <b>Diagnostic</b>: Warum war der Anstieg in dieser Saison so stark? Vergleich mit Vorjahren, Wetterdaten, Impfquote, Schulferien, Virusvarianten – Kausalanalyse.<br>• <b>Predictive</b>: Vorhersage des Saisonverlaufs und des Peaks aus historischen Daten → rechtzeitige Planung von Personal, Betten und Impfstoffmengen.<br>• <b>Prescriptive</b>: automatisierte Maßnahmen – Impfkampagnen auslösen, Ressourcen in Spitälern umverteilen, Warnungen ausgeben.<br><b>Zweck</b>: frühzeitige Erkennung von Wellen, gezielter Ressourceneinsatz im Gesundheitssystem, Bewertung der Wirksamkeit von Impfkampagnen und Information der Bevölkerung."
      }
    ]
  }
];
