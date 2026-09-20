# BDDA Trainer

Karteikarten-App für die Big-Data-Matura an der HTL Dornbirn. 246 Karten aus
dem gesamten Stoff, Fortschritt pro Schüler, Prüfungssimulation.

## Was die App kann

**Karteikarten** — die Karte zeigt entweder Frage oder Antwort und dreht sich
mit der Leertaste. Bewertet wird mit den Pfeiltasten: `←` nicht gewusst,
`↑` halb, `→` gewusst.

**Gewichtete Auswahl** — was schwach sitzt, kommt sechsmal so oft dran wie
etwas, das schon sitzt. Der Fortschritt hängt am Benutzer und überlebt jedes
Gerät.

**Ausfüllübungen** — bei 40 Karten tippt man die Begriffe selbst ein, etwa die
vier ACID-Eigenschaften. Die Prüfung ist tippfehlertolerant: Groß- und
Kleinschreibung, Umlaute und Bindestriche sind egal, ein eindeutiger
Wortanfang genügt.

**Originalfolien** — 44 Karten blenden die Folie zur Antwort ein, etwa das
CAP-Dreieck oder die Sequenzdiagramme zu Dirty Read und Non Repeatable Read.

**Prüfungssimulation** — die Beispielprüfungen im Format Reproduktion ·
Transfer · Reflexion, mit ausformulierter Musterantwort zum Aufdecken.

**Aufgabengenerator** — derselbe Aufbau, aber neu erzeugt: Pool 1–7 wählen,
optional einen Schwerpunkt angeben, und Claude schreibt Problemstellung, die
drei Aufgabenteile und die Musterantworten. Als Stilvorlage dienen die zwei
Originalangaben, als Faktenbasis ausschließlich die Karten des gewählten Pools —
erfunden wird nichts. Passt eine Folie zur Aufgabe, hängt sie als Angabe-Grafik
darüber, so wie die Grafiken in den Originalen.

## Stack

Next.js 16 (App Router) · shadcn/ui auf Base UI · Tailwind v4 · Clerk für die
Anmeldung · Supabase für den Fortschritt · Vercel.

Der Fortschritt liegt in zwei Tabellen:

```sql
create table bdda_progress (
  user_id text not null,
  card_id text not null,
  status smallint not null default 0,   -- 0 neu, 1 schwach, 2 wackelig, 3 sitzt
  seen integer not null default 0,
  correct integer not null default 0,
  updated_at timestamptz not null default now(),
  primary key (user_id, card_id)
);

create table bdda_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id text not null,
  mode text not null,
  chapters int[] not null default '{}',
  answered integer not null default 0,
  correct integer not null default 0,
  started_at timestamptz not null default now()
);
```

Geschrieben wird über Server Actions mit dem Service-Role-Key, die Clerk-User-ID
ist der Schlüssel — deshalb braucht es kein JWT-Template zwischen Clerk und
Supabase.

## Lokal starten

```bash
npm install
cp .env.example .env.local   # Werte eintragen
npm run dev
```

Benötigte Variablen: `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`,
`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY` und für den
Aufgabengenerator `ANTHROPIC_API_KEY` (console.anthropic.com). Ohne den
Schlüssel läuft alles andere weiter, der Generator sagt es dir.

## Der Generator

`src/lib/exam-prompt.ts` baut Systemprompt, Nachricht und Schema,
`src/lib/exam-generate.ts` schickt die Anfrage weg, `src/app/api/pruefung/route.ts`
nimmt sie entgegen. Modell ist `gpt-5.5` über die Responses-API mit
`reasoning.effort: "high"`, überschreibbar mit `OPENAI_MODEL`. Die Antwort kommt
über Structured Outputs gegen ein Zod-Schema zurück, also nie als Fließtext, den
man parsen müsste.

Der Systemprompt — Formatregeln plus die zwei Originalangaben — steht vorne und
ändert sich zwischen zwei Aufgaben nicht, den Rabatt für wiederholte Präfixe gibt
es dadurch automatisch. Ein Durchlauf schickt je nach Pool rund 6.000 Token
hinein, dauert 25 bis 35 Sekunden und kostet ein paar Cent.

## Die Karten

Ein Kapitel pro Datei unter `src/data/ch1.ts` bis `ch8.ts`:

```ts
{
  id: "k1-012",
  ch: 1,
  topic: "ACID",
  q: "Wofür steht ACID? Erkläre alle vier Eigenschaften.",
  a: "<b>A</b>tomicity – ganz oder gar nicht<br>…",
  img: "cap-theorem",                    // optional: Folie unter public/slides
  blanks: ["Atomicity", "Consistency"],  // optional: Ausfüllübung
}
```

Die Inhalte stammen aus den Vorlesungsunterlagen und wurden gegen die Folien
geprüft — auch gegen die reinen Grafikfolien, deren Inhalt in keinem
Textextrakt auftaucht.

## Folienbilder

`public/slides/` ist bewusst nicht Teil dieses Repos: die Folien sind
Unterrichtsmaterial der HTL Dornbirn und gehören ihren Autoren. Karten mit
`img` zeigen ohne diese Dateien einfach kein Bild, alles andere funktioniert.

Wer die Unterlagen selbst hat, erzeugt sie so:

```bash
pdftoppm -jpeg -r 105 "1.4_NoSQL_v1.1.pdf" seite
sips -Z 1100 seite-15.jpg --out public/slides/cap-theorem.jpg
```

Der Dateiname ohne Endung ist der Wert von `img` in der Karte.
