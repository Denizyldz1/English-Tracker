# 💻 CODE PRACTICE v2 — React/TypeScript/Next.js + Advanced Flutter (16 Weeks, in English)

> **Profile:** Developer who knows C#, Dart/Flutter, SQL, jQuery/Bootstrap/HTML. Goal: master the React + TypeScript + Next.js trio (the standard stack in European job ads), reach advanced Flutter, and keep C#/Dart/MSSQL sharp. React/TS starts from ZERO — your jQuery experience is the bridge, not the enemy: many tasks include a "in jQuery you did X, in React you think Y" note.
> **System:** Mon = web track topic + exercises (TS → React → Next.js) · Tue = kata + re-solve (odd weeks C#, even weeks Dart) · Wed = MSSQL only · Thu = advanced Flutter (upgrading your flashcard app) · Sat = PROJECT session (60-75 min). Friday is free — it belongs to the English program.
> **Language note:** Written in English on purpose. Reading it IS part of your English practice.

---

## 🧰 Platforms and Resources (all verified, free)

| Resource | What for | Address |
|---|---|---|
| TypeScript Handbook | Official TS docs; start with "TS for JavaScript Programmers", practice in the Playground | https://www.typescriptlang.org/docs/handbook/intro.html |
| react.dev | Official React course; every page ends with challenges + built-in editor | https://react.dev/learn |
| Next.js Learn | Official FREE 16-chapter course (App Router: Server Components, Server Actions) | https://nextjs.org/learn |
| Exercism | TypeScript (106 exercises), C#, Dart tracks + FREE human mentoring | https://exercism.org/tracks/typescript |
| CodeWars | C#/Dart katas; compare with top solutions after solving | https://www.codewars.com/kata/search/csharp |
| MS Learn T-SQL | Official free path "Query and modify data with Transact-SQL" (6 modules) | https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/ |
| HackerRank | SQL practice (pick MS SQL Server engine where offered) + FREE timed certifications: JavaScript (Basic), React (Basic), SQL (Intermediate) | https://www.hackerrank.com/skills-verification |
| LeetCode Database | SQL problems — ALWAYS select the MS SQL Server dialect | https://leetcode.com/problemset/database/ |
| Riverpod | Primary Flutter state-management resource (the official Flutter page only covers built-ins) | https://riverpod.dev |
| Flutter docs | Testing (/testing/overview), animations (/ui/animations), go_router (pub.dev) | https://docs.flutter.dev/testing/overview |
| Vercel | Free Hobby plan — deploy your Next.js project live | https://vercel.com/pricing |

## ⚖️ Fixed Rules

1. Keep the SOLUTION LOG from day one: every solved problem and every mistake goes in (name, language, one-line lesson). Tuesday re-solve and Wednesday reviews pick from this log.
2. Tuesday re-solve is never skipped: one old problem, solved again in the OTHER language (C# ↔ Dart). Nothing is ever "done".
3. Web track rule: never skip the challenges at the end of a react.dev page. Reading React is not learning React — the challenges are the lesson.
4. SQL is MSSQL only: on LeetCode always select the MS SQL Server dialect; on HackerRank pick the MS SQL Server engine where the problem offers it. T-SQL syntax (TOP, GETDATE, ISNULL) is what your work uses.
5. Project commits are real commits: push to GitHub every Saturday with a clear English commit message. The repo IS your portfolio.
6. Timed days are honest: timer on, no pauses. A failed timed attempt teaches more than three relaxed ones — write WHY in the log.
7. If a week slips, the week stretches; the order never changes. Certifications are taken when you arrive, not on a calendar date.

---
# 🟢 FAZ 1 — Season 1: TypeScript + React Foundations (Hafta 1-8)

### Hafta 1 — TypeScript Kickoff
**Özet:** First contact with TypeScript. You come from jQuery, where you select and change things by hand. This week you learn how types describe your data before the code runs. You also keep C#, Dart and SQL warm.
**Kaynak:** TS for JS Programmers (https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html), TS Playground (https://www.typescriptlang.org/play), Exercism TypeScript (https://exercism.org/tracks/typescript), MS Learn T-SQL path (https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/)
- [ ] **[Pzt]** 📚 WEB TRACK: Read "TypeScript for JavaScript Programmers" (https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html). Try every code example in the TS Playground (https://www.typescriptlang.org/play). Bridge note: in jQuery you find bugs at runtime in the browser; in TypeScript the compiler finds many of them before you run anything. (30-40 min)
- [ ] **[Salı]** ⚔️ KATA: Solve 2 C# katas on Codewars (https://www.codewars.com/kata/search/csharp) or Exercism C# (https://exercism.org/tracks/csharp). Then pick 1 old problem from your solution log and re-solve it in Dart. Write the date next to it in the log. (30-40 min)
- [ ] **[Çar]** 🗄️ MSSQL: Do module 1 "Introduction to Transact-SQL" from the MS Learn path "Query and modify data with Transact-SQL" (https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/). Complete the built-in exercises. (30-40 min)
- [ ] **[Per]** 📱 FLUTTER: Solve 2 medium exercises on Exercism Dart (https://exercism.org/tracks/dart). Then open your flashcard app code, read it top to bottom, and write 3 concrete improvement ideas in your log. These ideas become your Flutter roadmap. (30-40 min)
- [ ] **[Cmt]** 🛠️ TS SETUP: Install Node.js and set up VS Code for TypeScript. Solve the first 3 exercises on Exercism TypeScript (https://exercism.org/tracks/typescript). Then rewrite one small jQuery snippet you know well (for example a click counter) in typed TS in the Playground (https://www.typescriptlang.org/play). Feel the difference: the same logic, but with types. (60-75 min)

### Hafta 2 — Everyday Types
**Özet:** The core TypeScript types you will use every day: objects, arrays, unions, type aliases. In jQuery everything is "whatever the DOM gives you"; in TS you name your data shapes. Plus your first HackerRank SQL problems and a Flutter state upgrade.
**Kaynak:** TS Handbook "Everyday Types" (https://www.typescriptlang.org/docs/handbook/intro.html), Exercism TypeScript (https://exercism.org/tracks/typescript), HackerRank SQL (https://www.hackerrank.com/domains/sql), Flutter state-mgmt options (https://docs.flutter.dev/data-and-backend/state-mgmt/options)
- [ ] **[Pzt]** 📚 WEB TRACK: Read the "Everyday Types" chapter of the TS Handbook (https://www.typescriptlang.org/docs/handbook/intro.html). Then solve 2 exercises on Exercism TypeScript (https://exercism.org/tracks/typescript) using union types or type aliases where you can. (30-40 min)
- [ ] **[Salı]** ⚔️ KATA: Solve 2 Dart exercises on Exercism Dart (https://exercism.org/tracks/dart). Then re-solve 1 old problem from your solution log in C#. Log it. (30-40 min)
- [ ] **[Çar]** 🗄️ MSSQL: Do the "Sort and filter results" module on MS Learn (https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/). Then solve 3 basic SELECT problems on HackerRank SQL (https://www.hackerrank.com/domains/sql) — choose the MS SQL Server engine where the problem offers it. (30-40 min)
- [ ] **[Per]** 📱 FLUTTER: Read the Flutter state management options page (https://docs.flutter.dev/data-and-backend/state-mgmt/options), focus on the built-in approaches: setState, ValueNotifier, InheritedWidget. Then replace one setState block in your flashcard app with a ValueNotifier + ValueListenableBuilder. (30-40 min)
- [ ] **[Cmt]** 🛠️ TS TOOL: Build a small typed browser tool with plain DOM + TypeScript, no framework. Idea: an expense splitter (enter names and amounts, show who pays whom). Define types for your data first, then write the logic. Finish with 2 more Exercism TypeScript exercises (https://exercism.org/tracks/typescript). (60-75 min)

### Hafta 3 — Narrowing, Generics and the Bridge
**Özet:** Two power tools: narrowing (TS understands your if-checks) and generics (one function, many types — like C# generics you already know). Saturday is the key bridge session: you rewrite a jQuery pattern as state + render. This is how React thinks.
**Kaynak:** TS Handbook "Narrowing" + generics (https://www.typescriptlang.org/docs/handbook/intro.html), Exercism TypeScript (https://exercism.org/tracks/typescript), Riverpod (https://riverpod.dev), MS Learn T-SQL path (https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/)
- [ ] **[Pzt]** 📚 WEB TRACK: Read the "Narrowing" chapter and the generics introduction in the TS Handbook (https://www.typescriptlang.org/docs/handbook/intro.html). Bridge note: generics in TS work like generics in C# — `List<T>` thinking transfers directly. Solve 2 Exercism TypeScript exercises (https://exercism.org/tracks/typescript). (30-40 min)
- [ ] **[Salı]** ⚔️ KATA: Solve 2 C# katas on Codewars (https://www.codewars.com/kata/search/csharp). Then re-solve 1 old problem from your solution log in Dart. Log it. (30-40 min)
- [ ] **[Çar]** 🗄️ MSSQL: Do the JOINs module on MS Learn (https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/). Then solve 2 join problems on HackerRank SQL (https://www.hackerrank.com/domains/sql) — MS SQL Server engine where offered. (30-40 min)
- [ ] **[Per]** 📱 FLUTTER: Read the Riverpod getting-started guide (https://riverpod.dev). Create a small scratch Flutter project (not your real app) and build one counter with a Riverpod provider. Goal: understand provider, ref.watch and ref.read in a safe playground. (30-40 min)
- [ ] **[Cmt]** 🛠️ BRIDGE SESSION: Take a classic jQuery pattern: an event handler that adds items to a DOM list. Rewrite it in TypeScript with an explicit state object (an array of typed items) and one render() function that redraws the list from state. Rule: event handlers only change state, then call render(). This is "Thinking in React" (https://react.dev/learn/thinking-in-react) preparation — read the first section as a preview. (60-75 min)

### Hafta 4 — React Begins
**Özet:** React starts now. The big mental shift: jQuery selects and mutates the DOM; React describes the UI and updates it for you. You write your first components. Saturday you kick off the DevBoard project — your portfolio piece for Season 1.
**Kaynak:** react.dev "Your First Component" + "Importing and Exporting Components" (https://react.dev/learn), Riverpod (https://riverpod.dev), LeetCode Database (https://leetcode.com/problemset/database/), Vite + jsonplaceholder (https://jsonplaceholder.typicode.com)
- [ ] **[Pzt]** 📚 WEB TRACK: Read "Your First Component" and "Importing and Exporting Components" on react.dev (https://react.dev/learn) and do ALL the challenges at the end of both pages. Bridge note: in jQuery you did `$('#list').append(...)` — you commanded the DOM. In React you return JSX that describes what the UI should look like; React does the DOM work. (30-40 min)
- [ ] **[Salı]** ⚔️ KATA: Solve 2 Dart exercises on Exercism Dart (https://exercism.org/tracks/dart). Then re-solve 1 old problem from your solution log in C#. Log it. (30-40 min)
- [ ] **[Çar]** 🗄️ MSSQL: Do the subqueries module on MS Learn (https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/). Then solve 1 Easy problem on LeetCode Database (https://leetcode.com/problemset/database/) — select the MS SQL Server dialect. (30-40 min)
- [ ] **[Per]** 📱 FLUTTER: Riverpod in the real app. Migrate the flashcard list state in your flashcard app from setState to a Riverpod provider (https://riverpod.dev). Start with just the list; leave the rest for later weeks. (30-40 min)
- [ ] **[Cmt]** 🛠️ PROJECT KICKOFF: Scaffold DevBoard with Vite using the react-ts template (`npm create vite@latest devboard -- --template react-ts`). Create a GitHub repo and make the first commit. Then render a hardcoded, typed list of items (define an interface, map over an array in JSX). Data source plan: jsonplaceholder (https://jsonplaceholder.typicode.com) or the free GitHub search API — decide today. (60-75 min)

### Hafta 5 — Describing the UI
**Özet:** Props, conditional rendering and lists — the React way to pass data down and show it. In jQuery you built HTML strings; in React you compose components. DevBoard gets a real component structure this Saturday.
**Kaynak:** react.dev "Passing Props", "Conditional Rendering", "Rendering Lists" (https://react.dev/learn), HackerRank SQL (https://www.hackerrank.com/domains/sql), Exercism (https://exercism.org/tracks/csharp)
- [ ] **[Pzt]** 📚 WEB TRACK: Read "Passing Props to a Component", "Conditional Rendering" and "Rendering Lists" on react.dev (https://react.dev/learn). Do all the challenges. Bridge note: in jQuery you concatenated HTML strings in a loop; in React you `items.map(item => <Row ... />)` and each row is a typed component. (30-40 min)
- [ ] **[Salı]** ⚔️ KATA: Solve 2 C# katas on Codewars (https://www.codewars.com/kata/search/csharp) or Exercism C# (https://exercism.org/tracks/csharp). Then re-solve 1 old logged problem in Dart. Log it. (30-40 min)
- [ ] **[Çar]** 🗄️ MSSQL: Solve 3 aggregation problems (COUNT, SUM, AVG, GROUP BY) on HackerRank SQL (https://www.hackerrank.com/domains/sql) — MS SQL Server engine where offered. Write each final query in your log with one sentence about what it does. (30-40 min)
- [ ] **[Per]** 📱 FLUTTER: Dart async deep-dive. Review Futures and Streams (use https://exercism.org/tracks/dart concept exercises if helpful). Then add a fake async loading state to your flashcard app: a Future.delayed that simulates fetching cards, with a loading spinner while it waits. (30-40 min)
- [ ] **[Cmt]** 🛠️ PROJECT: Split DevBoard into typed components: App, ItemList, ItemRow, maybe a Header. Give each component a props interface. Render the list from a local JSON file instead of hardcoded data. Commit with a clear message. (60-75 min)

### Hafta 6 — Interactivity
**Özet:** State and events — React becomes alive. The core bridge of the whole season: jQuery's `.on('click')` mutated the page; React's onClick + setState updates state, and the UI follows. DevBoard fetches its real API this week.
**Kaynak:** react.dev "Adding Interactivity" (https://react.dev/learn), MS Learn T-SQL path (https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/), jsonplaceholder (https://jsonplaceholder.typicode.com)
- [ ] **[Pzt]** 📚 WEB TRACK: Read the "Adding Interactivity" chapter on react.dev (https://react.dev/learn): responding to events, state, and how state works like a snapshot. Do the challenges. Bridge note: jQuery `$('#btn').on('click', ...)` changed the DOM directly; in React `onClick` calls `setState`, and React re-renders the UI from the new state. You never touch the DOM. (30-40 min)
- [ ] **[Salı]** ⚔️ KATA: Solve 2 Dart exercises on Exercism Dart (https://exercism.org/tracks/dart). Then re-solve 1 old logged problem in C#. Log it. (30-40 min)
- [ ] **[Çar]** 🗄️ MSSQL: Do the built-in functions and GROUP BY module on MS Learn (https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/). Then solve 2 problems on HackerRank SQL (https://www.hackerrank.com/domains/sql) that use those functions — MS SQL Server engine where offered. (30-40 min)
- [ ] **[Per]** 📱 FLUTTER: Polish the flashcard app: add form validation (empty input, duplicate card) and clean error handling (user-friendly messages, no raw exceptions on screen). Small, real quality work. (30-40 min)
- [ ] **[Cmt]** 🛠️ PROJECT: Connect DevBoard to the real public API (https://jsonplaceholder.typicode.com or the GitHub search API). Type the response with an interface, fetch it in useEffect, and add three UI states: loading, error, and data. Commit. (60-75 min)

### Hafta 7 — Thinking in React
**Özet:** The famous mental model: break the UI into components, find the minimal state, decide where state lives. Saturday you build search, filter and sort in DevBoard — your old jQuery muscle, done the React way.
**Kaynak:** Thinking in React (https://react.dev/learn/thinking-in-react), react.dev "Sharing State Between Components" (https://react.dev/learn), LeetCode Database (https://leetcode.com/problemset/database/), Flutter testing (https://docs.flutter.dev/testing/overview)
- [ ] **[Pzt]** 📚 WEB TRACK: Read "Thinking in React" fully (https://react.dev/learn/thinking-in-react) and then "Sharing State Between Components" (https://react.dev/learn). Follow the 5 steps of the article with pen and paper for your own DevBoard UI. (30-40 min)
- [ ] **[Salı]** ⚔️ KATA: Solve 2 C# katas on Codewars (https://www.codewars.com/kata/search/csharp). Then re-solve 1 old logged problem in Dart. Log it. (30-40 min)
- [ ] **[Çar]** 🗄️ MSSQL: Solve 2 Medium problems on LeetCode Database (https://leetcode.com/problemset/database/) — select the MS SQL Server dialect. If one is too hard after 15 minutes, read the discussion, understand the solution, and rewrite it yourself. (30-40 min)
- [ ] **[Per]** 📱 FLUTTER: Read the Flutter testing overview (https://docs.flutter.dev/testing/overview). Then write 2 widget tests for your flashcard app: one that checks a card renders its text, one that checks a button tap changes the UI. Run them with `flutter test`. (30-40 min)
- [ ] **[Cmt]** 🛠️ PROJECT: Add search, filter and sort to DevBoard. Bridge note: in jQuery you would hide/show rows with `.filter()` and `.toggle()`; in React the search text is state, and the visible list is computed from state during render — state up, props down. Commit. (60-75 min)

### Hafta 8 — Season 1 Final
**Özet:** Consolidation week. You redo the hardest challenges, close the Riverpod migration, learn to modify data in T-SQL, and finish with a timed certification plus the DevBoard v1 milestone. Season 1 done.
**Kaynak:** react.dev learn (https://react.dev/learn), MS Learn T-SQL path (https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/), HackerRank certifications (https://www.hackerrank.com/skills-verification), Riverpod (https://riverpod.dev)
- [ ] **[Pzt]** 📚 WEB TRACK: Go back to react.dev (https://react.dev/learn) and redo the 3 hardest challenges you flagged in weeks 4-7. Solve them without looking at your old answers first. (30-40 min)
- [ ] **[Salı]** ⚔️ KATA: Solve 2 Dart exercises on Exercism Dart (https://exercism.org/tracks/dart). Then re-solve 1 old logged problem in C#. Log it. (30-40 min)
- [ ] **[Çar]** 🗄️ MSSQL: Do the "Modify data" module (INSERT, UPDATE, DELETE) on MS Learn (https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/). Practice each statement in the module sandbox. (30-40 min)
- [ ] **[Per]** 📱 FLUTTER: Finish the Riverpod migration in the flashcard app (https://riverpod.dev): no raw setState left for shared state. Local, widget-only state may stay as setState. Run your widget tests to confirm nothing broke. (30-40 min)
- [ ] **[Cmt]** 🏁 SEASON 1 FINAL: Take the FREE timed HackerRank "JavaScript (Basic)" certification (https://www.hackerrank.com/skills-verification). Then the DevBoard v1 demo milestone: list + detail view + search all working. Write a short English README (what it is, tech stack, how to run) and push. Season 1 complete. (60-75 min)
# 🔵 FAZ 2 — Season 2: Next.js + Advanced Flutter (Hafta 9-16)

### Hafta 9 — Hello Next.js
**Özet:** Start the official Next.js course and create the Next.js version of DevBoard. Add go_router to the Flutter flashcard app.
**Kaynak:** https://nextjs.org/learn | https://exercism.org/tracks/csharp | https://www.hackerrank.com/domains/sql | https://pub.dev/packages/go_router
- [ ] **[Pzt]** 📚 Start the free official course at https://nextjs.org/learn ("Next.js Dashboard App", 16 chapters). Do chapters 1-3: setup, CSS, fonts and images. Note: the course demo uses Postgres — you do not need it. Focus on the Next.js ideas, not the course's database vendor. (30-40 min)
- [ ] **[Salı]** ⚔️ Solve 1 C# kata on https://exercism.org/tracks/csharp or https://www.codewars.com/kata/search/csharp. Then re-solve 1 old Dart problem from your log without looking at your old code. (30-40 min)
- [ ] **[Çar]** 🗄️ Solve 3 medium SQL problems on https://www.hackerrank.com/domains/sql. Pick the MS SQL Server engine where it is offered. Write each query yourself before checking. (30-40 min)
- [ ] **[Per]** 📱 Add the go_router package (https://pub.dev/packages/go_router) to your flashcard app. Replace your manual Navigator calls with named routes. The app should work exactly as before. (30-40 min)
- [ ] **[Cmt]** 🛠️ PROJECT: Create a new Next.js project (App Router) for DevBoard. Port the layout and the static pages from your React version. Commit your work with a clear message. (60-75 min)

### Hafta 10 — Pages and Navigation
**Özet:** Learn layouts, pages and navigation in Next.js. Port the DevBoard list and detail pages. Add your first Flutter animations.
**Kaynak:** https://nextjs.org/learn | https://exercism.org/tracks/dart | https://leetcode.com/problemset/database/ | https://docs.flutter.dev/ui/animations
- [ ] **[Pzt]** 📚 Continue https://nextjs.org/learn with chapters 4-5: creating layouts and pages, and navigating between pages. Try each code example in your own project too. (30-40 min)
- [ ] **[Salı]** ⚔️ Solve 1 Dart exercise on https://exercism.org/tracks/dart. Then re-solve 1 old C# problem from your log in a clean file. (30-40 min)
- [ ] **[Çar]** 🗄️ Solve 2 Medium problems from https://leetcode.com/problemset/database/. Always select the MS SQL Server dialect before you start. Log any syntax you had to look up. (30-40 min)
- [ ] **[Per]** 📱 Read https://docs.flutter.dev/ui/animations and add 2 animations to the flashcard app: a card flip for the flashcards (ideal for this app) plus one implicit animation (for example AnimatedContainer). (30-40 min)
- [ ] **[Cmt]** 🛠️ PROJECT: Port the DevBoard list and detail pages to Next.js routes. Use dynamic route segments for the detail page (for example /items/[id]). Commit when both pages render. (60-75 min)

### Hafta 11 — Data on the Server
**Özet:** Learn Server Components and data fetching. Move the DevBoard API calls to the server. Write your first Dart unit tests.
**Kaynak:** https://nextjs.org/learn | https://exercism.org/tracks/csharp | https://www.hackerrank.com/domains/sql | https://docs.flutter.dev/testing/overview
- [ ] **[Pzt]** 📚 Do the data fetching and Server Components chapters at https://nextjs.org/learn. Key idea: the component runs on the server and can fetch data directly. Ignore the Postgres parts — the concept is what matters. (30-40 min)
- [ ] **[Salı]** ⚔️ Solve 1 C# kata (https://exercism.org/tracks/csharp or codewars.com/kata/search/csharp). Then re-solve 1 old Dart problem from your log. (30-40 min)
- [ ] **[Çar]** 🗄️ On https://www.hackerrank.com/domains/sql, do 3 problems from the advanced SELECT and JOIN sets. Use the MS SQL Server engine where offered. (30-40 min)
- [ ] **[Per]** 📱 Read https://docs.flutter.dev/testing/overview and write 3 unit tests for your Dart logic: deck shuffling, progress calculation, and one more function you choose. Run them with `flutter test`. (30-40 min)
- [ ] **[Cmt]** 🛠️ PROJECT: Move the DevBoard API calls to the server side using Server Components. Write a short note (5-6 sentences) comparing this with your old client-side version: what got simpler, what got harder? (60-75 min)

### Hafta 12 — Mutations with Server Actions
**Özet:** Learn Server Actions and build a favorites feature in DevBoard. Add widget tests to the Flutter app. Timed SQL practice.
**Kaynak:** https://nextjs.org/learn | https://exercism.org/tracks/dart | https://www.hackerrank.com/domains/sql | https://docs.flutter.dev/testing/overview
- [ ] **[Pzt]** 📚 Do the Server Actions / mutations chapters at https://nextjs.org/learn. Key idea: a form can call a server function directly, no separate API endpoint needed. (30-40 min)
- [ ] **[Salı]** ⚔️ Solve 1 Dart exercise on https://exercism.org/tracks/dart. Then re-solve 1 old C# problem from your log. (30-40 min)
- [ ] **[Çar]** 🗄️ Timed SQL drill: pick 3 problems on https://www.hackerrank.com/domains/sql and give yourself 15 minutes for each. Log every mistake in your notes — you will review them in Hafta 14. (30-40 min)
- [ ] **[Per]** 📱 Write 3 more widget tests for the flashcard app, including one that tests the card flip animation (use `tester.pumpAndSettle()` after the tap). All tests should pass. (30-40 min)
- [ ] **[Cmt]** 🛠️ PROJECT: Add a "favorites" feature to DevBoard-Next using a Server Action: a form (or button) that marks an item as favorite, plus revalidation so the UI updates. Commit. (60-75 min)

### Hafta 13 — Route Handlers and Persistence
**Özet:** Learn route handlers and streaming UI. Make favorites persistent with real storage. Profile the Flutter app for performance.
**Kaynak:** https://nextjs.org/learn | https://exercism.org/tracks/csharp | https://leetcode.com/problemset/database/
- [ ] **[Pzt]** 📚 Do the route handlers and streaming / loading UI chapters at https://nextjs.org/learn. Key idea: loading.tsx and Suspense let parts of the page appear before the slow data arrives. (30-40 min)
- [ ] **[Salı]** ⚔️ Solve 1 C# kata (https://exercism.org/tracks/csharp or codewars.com/kata/search/csharp). Then re-solve 1 old Dart problem from your log. (30-40 min)
- [ ] **[Çar]** 🗄️ Attempt 1 Hard problem from https://leetcode.com/problemset/database/ with the MS SQL Server dialect. If you are stuck after 20 minutes, study the solution and write down WHY it works and where you got stuck. (30-40 min)
- [ ] **[Per]** 📱 Performance day: profile the flashcard app with Flutter DevTools. Find and fix 1 jank or unnecessary-rebuild issue (check your Riverpod watch scopes). Note what you changed. (30-40 min)
- [ ] **[Cmt]** 🛠️ PROJECT: Persist favorites in DevBoard-Next via a route handler + real storage. The Supabase free tier is fine — you already know it from your tracker project. Favorites must survive a page refresh. (60-75 min)

### Hafta 14 — Polish
**Özet:** Error handling and metadata in Next.js, full T-SQL review, Flutter release preparation, and a polish pass on DevBoard-Next.
**Kaynak:** https://nextjs.org/learn | https://exercism.org/tracks/dart | https://www.hackerrank.com/domains/sql
- [ ] **[Pzt]** 📚 Do the error handling and partial prerendering / metadata chapters at https://nextjs.org/learn. Add an error.tsx to at least one route in DevBoard-Next as you go. (30-40 min)
- [ ] **[Salı]** ⚔️ Solve 1 Dart exercise on https://exercism.org/tracks/dart. Then re-solve 1 old C# problem from your log. (30-40 min)
- [ ] **[Çar]** 🗄️ Full T-SQL review: reread your notes from all 6 MS Learn modules from Season 1, then redo the 3 problems you got wrong this season (check your Hafta 12 mistake log). (30-40 min)
- [ ] **[Per]** 📱 Release prep for the flashcard app: add an app icon and a splash screen, then run `flutter build appbundle`. Goal: the app is installable on your own phone. (30-40 min)
- [ ] **[Cmt]** 🛠️ PROJECT: Polish pass on DevBoard-Next: loading skeletons, error boundaries, a responsive check on mobile width, and empty states ("no results" screens). Commit each improvement separately. (60-75 min)

### Hafta 15 — Ship It
**Özet:** Finish the Next.js course and deploy DevBoard-Next to Vercel. QA day for Flutter. Start SQL certification preparation.
**Kaynak:** https://nextjs.org/learn | https://exercism.org/tracks/csharp | https://www.hackerrank.com/domains/sql | https://vercel.com/pricing
- [ ] **[Pzt]** 📚 Finish the remaining chapters of https://nextjs.org/learn (metadata and SEO). Congratulations — the course is done. Write 3 sentences: the most useful thing you learned. (30-40 min)
- [ ] **[Salı]** ⚔️ Solve 1 C# kata (https://exercism.org/tracks/csharp or codewars.com/kata/search/csharp). Then re-solve 1 old Dart problem from your log. (30-40 min)
- [ ] **[Çar]** 🗄️ SQL certification prep: on https://www.hackerrank.com/domains/sql, practice Intermediate-level topics with a timer. Next week you will take the real certification test, so simulate test conditions. (30-40 min)
- [ ] **[Per]** 📱 QA day: run ALL your Flutter tests, use the app for 10 minutes like a real user, fix 3 issues you find (small ones count), and tag a release commit (for example v1.0). (30-40 min)
- [ ] **[Cmt]** 🚀 DEPLOY: put DevBoard-Next on Vercel with the free Hobby plan (https://vercel.com/pricing). Connect your GitHub repo, deploy, open the live URL on your phone to verify it, and add the link to the README. (60-75 min)

### Hafta 16 — Finals
**Özet:** Final week: React review, a re-solve marathon, final builds and READMEs, and two free HackerRank certifications. Two shippable projects, CV-ready.
**Kaynak:** https://nextjs.org/learn | https://exercism.org/tracks/dart | https://leetcode.com/problemset/database/ | https://www.hackerrank.com/skills-verification
- [ ] **[Pzt]** 📚 React review day: redo the hardest react.dev challenges from Season 1 from memory. Then skim your DevBoard code and ask yourself honestly: "Would I hire the person who wrote this?" Note what you would improve. (30-40 min)
- [ ] **[Salı]** ⚔️ Re-solve marathon: pick 3 old problems from your log (mix of C# and Dart, but today's new one is Dart from https://exercism.org/tracks/dart) and solve them again without looking at old code. (30-40 min)
- [ ] **[Çar]** 🗄️ Final SQL warm-up: 2 medium problems from https://leetcode.com/problemset/database/ with the MS SQL Server dialect. Relaxed pace — this is a warm-up, not a test. (30-40 min)
- [ ] **[Per]** 📱 Flashcard app final: make a fresh release build and write an English README with screenshots (what the app does, how to run it, what you learned building it). (30-40 min)
- [ ] **[Cmt]** 🏁 SEASON 2 FINALS (~90 min): take the FREE timed HackerRank "React (Basic)" AND "SQL (Intermediate)" certifications at https://www.hackerrank.com/skills-verification. Then confirm the live Vercel URL works and both READMEs are done. Result: two shippable projects, two certificates, CV-ready. (60-75 min)

---

## 📈 Checkpoints

| Week | Event | Goal |
|---|---|---|
| 3 | Bridge session: jQuery pattern → TS state + render() | You can explain WHY React exists |
| 8 | 🏁 Season 1 Final: HackerRank JavaScript (Basic) certification | Pass + DevBoard v1 (list/detail/search) + English README |
| 12 | Server Actions working in DevBoard-Next | Favorites feature with form + revalidation |
| 15 | 🚀 Deploy day | DevBoard live on Vercel — link in README |
| 16 | 🏁 Finals: React (Basic) + SQL (Intermediate) certifications | Both passed + 2 shippable projects (live Next.js app + release-built Flutter app) — CV-ready |

If a certification fails: read the report, put weak topics into the Tuesday/Wednesday review pool for 2 weeks, retake. The plan stretches; the order never changes.
