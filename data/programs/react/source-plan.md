# ⚛️ REACT STACK — React / TypeScript / Next.js + Redux (20 Weeks, in English)

> **Profile:** Developer coming from jQuery/Bootstrap — ZERO React/TS. Goal: the React + TypeScript + Next.js trio that European job ads keep asking for, plus Redux Toolkit and Context API. Your jQuery experience is the bridge, not the enemy.
> **System:** 3 days/week, spaced across the week on purpose (spacing helps retention): **Mon** = Udemy course day (Can Boz, Turkish video — concepts land fast) · **Thu** = English reinforcement of the SAME concept (react.dev challenges, TS Handbook, later Next.js Learn — double exposure IS the spaced repetition) · **Sat (60-75 min)** = "DevBoard" portfolio project. This program stands alone; the free days also mean it can run next to another program without collisions if you ever choose to.
> **Courses:** Season 1-2a: your 32.5-hour Udemy course "React 18 — Component, State, Hooks, Router 6, TypeScript, Redux Toolkit, Context API" (Can Boz). Season 2b (from week 15): your ~10-hour Udemy course "Next.js 16: Sıfırdan İleri Seviye" (App Router, Server Actions, auth, Formik+Yup, Hero UI). Watch at 1.25x. Course projects are follow-along learning; DevBoard is YOUR portfolio piece.

---

## 🧰 Resources (all verified, free — course excepted, you own it)

| Resource | What for | Address |
|---|---|---|
| Udemy course #1 (Can Boz, React 18) | Turkish concept track, weeks 1-14: Kurulum → Components → State → Hooks → Router 6 → Context → Redux Toolkit → MUI + projects | your Udemy library |
| Udemy course #2 (Next.js 16) | Turkish Next.js track, weeks 15-20: App Router, Server Actions, API routes, AUTH, Formik+Yup, Hero UI (~10h) | your Udemy library |
| react.dev | Official React course in English; every page ends with challenges — never skip them | https://react.dev/learn |
| TypeScript Handbook | Official TS docs; start with "TS for JavaScript Programmers"; practice in the Playground | https://www.typescriptlang.org/docs/handbook/intro.html |
| Exercism TypeScript | 106 free exercises + free human mentoring | https://exercism.org/tracks/typescript |
| Next.js Learn | Official FREE 16-chapter course (App Router, Server Components/Actions) — Season 2 | https://nextjs.org/learn |
| Vercel | Free Hobby plan — your Next.js app goes LIVE | https://vercel.com/pricing |
| HackerRank | FREE timed certifications: JavaScript (Basic) at week 10, React (Basic) at week 20 | https://www.hackerrank.com/skills-verification |

## ⚖️ Fixed Rules

1. Course notes in English: after each video section, write a 3-line English summary (what / why / one gotcha). Watching is not learning; explaining is.
2. Monday teaches the concept in Turkish, Thursday re-learns it in English. Do NOT skip Thursday because "I already know it from the video" — the second pass in English is where it sticks (and it is English practice).
3. Never skip react.dev challenges. Reading React is not learning React.
4. Every Saturday ends with a real GitHub push and a clear English commit message. The DevBoard repo IS your portfolio.
5. Course follow-along projects: type every line yourself, never copy-paste from the video.
6. If a week slips, the week stretches; the order never changes. Certifications are taken when you arrive.

---
# 🟢 FAZ 1 — Season 1: Course + React Core (Hafta 1-10)

### Hafta 1 — Setup
**Özet:** Install your tools, watch the first course videos, and create your DevBoard project. In jQuery you added a `<script>` tag to a page; in React you build the whole app from components inside a build tool (Vite).
**Kaynak:** Your Udemy course (Can Boz) — Kurulum section; https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html ; https://www.typescriptlang.org/play
- [ ] **[Pzt]** Watch the Kurulum section and the first component videos of your Udemy course (Can Boz) at 1.25x. Install Node.js and VS Code, and run the course starter project on your machine (45 min)
- [ ] **[Per]** Read "TypeScript for JavaScript Programmers" (https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html). Then open the TS Playground (https://www.typescriptlang.org/play) and type every example yourself — change the values and watch the errors (35 min)
- [ ] **[Cmt]** Scaffold your DevBoard project: run `npm create vite@latest devboard -- --template react-ts`, start it, delete the demo content, and render one small component (for example a `<Header />` with your name). Create a GitHub repo and push the first commit (70 min)

### Hafta 2 — Components
**Özet:** Components are the building blocks of React. In jQuery you copied HTML blocks and changed them with selectors; in React you write a component once and reuse it with different props.
**Kaynak:** Your Udemy course (Can Boz) — Componentler section; https://react.dev/learn
- [ ] **[Pzt]** Watch the Componentler section of your Udemy course (Can Boz) at 1.25x. Code along: pause the video and type every component yourself instead of only watching (50 min)
- [ ] **[Per]** On https://react.dev/learn read "Your First Component" and "Importing and Exporting Components", and complete ALL the challenges at the end of both pages (40 min)
- [ ] **[Cmt]** In DevBoard, build 3 typed components (for example `Card`, `Sidebar`, `StatBox`). Give each one a TypeScript `interface` for its props and render them with different prop values. Commit and push (70 min)

### Hafta 3 — State
**Özet:** State is data that changes and makes the UI re-render. In jQuery you changed the DOM by hand with `.text()` and `.append()`; in React you change the state and React updates the DOM for you.
**Kaynak:** Your Udemy course (Can Boz) — State section; https://www.typescriptlang.org/docs/handbook/intro.html ; https://exercism.org/tracks/typescript
- [ ] **[Pzt]** Watch the State videos of your Udemy course (Can Boz) at 1.25x and code along. Write one sentence in your notes: "What makes React re-render a component?" (45 min)
- [ ] **[Per]** Read "Everyday Types" in the TS Handbook (https://www.typescriptlang.org/docs/handbook/intro.html) and solve 2 easy exercises on the Exercism TypeScript track (https://exercism.org/tracks/typescript) (40 min)
- [ ] **[Cmt]** In DevBoard, create a local JSON array (for example 10 fake users or tasks) as typed data, put it in state with `useState`, and render it as a list of your Card components. Add a button that adds one item to the list. Commit and push (70 min)

### Hafta 4 — Events & Effects
**Özet:** Handle user events and load data with useEffect. In jQuery you did `$('#btn').on('click', ...)`; in React you think in `onClick={handleClick}` directly on the JSX element.
**Kaynak:** Your Udemy course (Can Boz) — Hooks section (useState/useEffect); https://react.dev/learn
- [ ] **[Pzt]** Watch the Hooks introduction videos (useState and useEffect) of your Udemy course (Can Boz) at 1.25x and code along with the examples (50 min)
- [ ] **[Per]** On https://react.dev/learn work through the "Adding Interactivity" pages ("Responding to Events" and "State: A Component's Memory") and complete all their challenges (40 min)
- [ ] **[Cmt]** In DevBoard, fetch real data from a public API (https://jsonplaceholder.typicode.com/users) inside `useEffect`, type the response with an interface, and show three UI states: loading, error, and the data list. Commit and push (75 min)

### Hafta 5 — Hooks Deep
**Özet:** Go deeper into hooks and rebuild your jQuery muscle memory the React way: search, filter, and sort are just state + derived data, not DOM manipulation.
**Kaynak:** Your Udemy course (Can Boz) — Hooks section (devam); https://react.dev/learn
- [ ] **[Pzt]** Watch the remaining Hooks videos of your Udemy course (Can Boz) at 1.25x and code along. Note down any hook you do not understand yet (45 min)
- [ ] **[Per]** On https://react.dev/learn read "Render and Commit", "State as a Snapshot" and "Synchronizing with Effects", and complete all the challenges on those pages (40 min)
- [ ] **[Cmt]** In DevBoard, add a search input, a filter dropdown, and a sort button for your API list. In jQuery you would `.hide()` and `.show()` rows; in React you filter the array in state and render the result. Commit and push (75 min)

### Hafta 6 — Custom Hooks
**Özet:** Extract repeated logic into your own hooks, and learn how React developers plan a UI before coding it.
**Kaynak:** Your Udemy course (Can Boz) — custom hooks videos; https://react.dev/learn/thinking-in-react
- [ ] **[Pzt]** Watch the custom hooks videos of your Udemy course (Can Boz) at 1.25x and code along with at least one custom hook example (45 min)
- [ ] **[Per]** Read "Thinking in React" (https://react.dev/learn/thinking-in-react) from start to finish. Take notes: write the 5 steps in your own simple English words (35 min)
- [ ] **[Cmt]** Refactor DevBoard: move your fetch logic into a typed `useFetch<T>` custom hook that returns `{ data, loading, error }`, and use it in two different components. Commit and push (70 min)

### Hafta 7 — Router
**Özet:** Turn DevBoard into a multi-page app with React Router 6. In jQuery each page was a separate HTML file; in React the router swaps components without reloading the page.
**Kaynak:** Your Udemy course (Can Boz) — Router 6 section; https://www.typescriptlang.org/docs/handbook/intro.html ; https://exercism.org/tracks/typescript
- [ ] **[Pzt]** Watch the Router 6 section of your Udemy course (Can Boz) at 1.25x and code along with the route examples (50 min)
- [ ] **[Per]** In the TS Handbook (https://www.typescriptlang.org/docs/handbook/intro.html) read "Narrowing" and the basics of "Generics", then solve 2 more exercises on the Exercism TypeScript track (https://exercism.org/tracks/typescript) (40 min)
- [ ] **[Cmt]** Add React Router to DevBoard: a list page (`/users`) and a detail page (`/users/:id`) that fetches and shows one item. Add a simple navbar with links. Commit and push (75 min)

### Hafta 8 — Fake Backend
**Özet:** Use json-server as a fake backend and start real CRUD. Until now you only read data; this week you create and delete it.
**Kaynak:** Your Udemy course (Can Boz) — json-server section; https://react.dev/learn
- [ ] **[Pzt]** Watch the json-server section of your Udemy course (Can Boz) at 1.25x and code along: run json-server locally and hit it from a React app (45 min)
- [ ] **[Per]** On https://react.dev/learn work through the "Managing State" pages ("Reacting to Input with State" and "Choosing the State Structure") and complete all their challenges (40 min)
- [ ] **[Cmt]** Add json-server to DevBoard with a `db.json` file. Build a form to CREATE a new item (POST) and a button to DELETE one (DELETE), then refresh the list from the server. Commit and push (75 min)

### Hafta 9 — Context
**Özet:** Context lets you pass data deeply without "prop drilling". In jQuery global state was often just a global variable; in React, Context gives shared data in a controlled way.
**Kaynak:** Your Udemy course (Can Boz) — Context API section; https://react.dev/learn
- [ ] **[Pzt]** Watch the Context API section of your Udemy course (Can Boz) at 1.25x and code along with the provider/consumer examples (50 min)
- [ ] **[Per]** On https://react.dev/learn read "Passing Data Deeply with Context" and complete all the challenges at the end of the page (35 min)
- [ ] **[Cmt]** In DevBoard, add a typed Context: either a dark/light theme toggle or a "favorites" list that any component can read and update. Commit and push (70 min)

### Hafta 10 — Season 1 Final
**Özet:** Finish the season with a follow-along project, review your weak spots, and ship DevBoard v1 with your first certificate.
**Kaynak:** Your Udemy course (Can Boz) — task management project; https://react.dev/learn ; https://www.hackerrank.com/skills-verification
- [ ] **[Pzt]** Watch the first half of the task-management project videos in your Udemy course (Can Boz) at 1.25x and code along — this is a full app built from everything you learned (50 min)
- [ ] **[Per]** Go back to the 3 hardest challenges you flagged on https://react.dev/learn during Weeks 2-9 and solve them again from scratch, without looking at your old answers (40 min)
- [ ] **[Cmt]** 🏁 Take the FREE timed HackerRank "JavaScript (Basic)" certification test (https://www.hackerrank.com/skills-verification). Then tag DevBoard v1 on GitHub: list + detail + search + CRUD all working, and write a short English README with screenshots (75 min)
# 🔵 FAZ 2 — Season 2: Redux, MUI and Next.js (Hafta 11-20)

### Hafta 11 — Redux Toolkit I
**Özet:** Start global state management. Learn why Redux exists, then set it up in DevBoard.
**Kaynak:** Your Udemy course (Can Boz) — Redux section; Redux Toolkit Quick Start: https://redux-toolkit.js.org/tutorials/quick-start
- [ ] **[Pzt]** Watch the first half of the Redux section in your Udemy course (Can Boz). Take short notes: store, slice, dispatch (45 min)
- [ ] **[Per]** Read the official Redux Toolkit Quick Start tutorial (https://redux-toolkit.js.org/tutorials/quick-start) and type the code along — do not copy-paste (35 min)
- [ ] **[Cmt]** DevBoard: install Redux Toolkit and React-Redux, create a slice, and move the filters/favorites state from Context into the slice (70 min)

### Hafta 12 — Redux Toolkit II
**Özet:** Finish the Redux section and learn async data with Redux Toolkit.
**Kaynak:** Your Udemy course (Can Boz) — Redux section (rest); Redux Toolkit docs: https://redux-toolkit.js.org/tutorials/quick-start
- [ ] **[Pzt]** Continue and finish the Redux section in your Udemy course (Can Boz). Code along with the examples (45 min)
- [ ] **[Per]** Read about createAsyncThunk and RTK basics in the official Redux Toolkit docs. Write one small async example yourself (35 min)
- [ ] **[Cmt]** DevBoard: load the json-server data through Redux Toolkit async logic — or keep your useFetch hook and write the tradeoff in English in the README (70 min)

### Hafta 13 — Material UI
**Özet:** Learn a component library. Rebuild parts of the DevBoard UI with MUI.
**Kaynak:** Your Udemy course (Can Boz) — Material UI section; MUI docs: https://mui.com/material-ui/getting-started/
- [ ] **[Pzt]** Watch the Material UI section in your Udemy course (Can Boz) and code the MUI card project along with the videos (50 min)
- [ ] **[Per]** Read the MUI getting-started guide (https://mui.com/material-ui/getting-started/), then try a custom theme and 2 components in a small sandbox app (35 min)
- [ ] **[Cmt]** DevBoard UI pass with MUI: add an AppBar, turn list items into Cards, and use a TextField for the search box (75 min)

### Hafta 14 — Course Wrap
**Özet:** Finish the whole Udemy course and close Season 1 work. Start the free Next.js course.
**Kaynak:** Your Udemy course (Can Boz) — final sections; Next.js Learn: https://nextjs.org/learn
- [ ] **[Pzt]** Finish the remaining course videos: the React Bootstrap section and the burger project follow-along — watch and code along. Next week your Udemy course "Next.js 16" begins (50 min)
- [ ] **[Per]** Start the official Next.js Learn course (https://nextjs.org/learn) — complete chapters 1-2 (35 min)
- [ ] **[Cmt]** Finish any leftover course project work, polish DevBoard (README, small fixes), and tag the repo as v1 on GitHub (70 min)

### Hafta 15 — Next.js Kickoff
**Özet:** Start your Udemy course "Next.js 16". Learn the App Router basics and scaffold DevBoard-Next.
**Kaynak:** Your Udemy course "Next.js 16" — setup and App Router sections; Next.js Learn: https://nextjs.org/learn
- [ ] **[Pzt]** Watch the setup and App Router fundamentals sections of your Udemy course "Next.js 16" at 1.25x speed. Take short notes in English (50-60 min)
- [ ] **[Per]** Skim chapters 1-4 of the official Next.js Learn course (https://nextjs.org/learn) in English and do the interactive parts — this repeats Monday's ideas in English (35-40 min)
- [ ] **[Cmt]** Scaffold a new project "DevBoard-Next" with the App Router. Port the layout and the static pages from DevBoard, then push it to GitHub (70-75 min)

### Hafta 16 — Routing and Rendering
**Özet:** Learn routing, Server vs Client Components, and static vs dynamic rendering — then apply them to DevBoard-Next.
**Kaynak:** Your Udemy course "Next.js 16" — routing and rendering sections; Next.js Learn: https://nextjs.org/learn
- [ ] **[Pzt]** Watch the routing, Server vs Client Components, and static/dynamic rendering sections of your Udemy course "Next.js 16" at 1.25x speed (50-60 min)
- [ ] **[Per]** Do the navigation and Server Components chapters of Next.js Learn (https://nextjs.org/learn) — the same concepts as Monday, now in English (35-40 min)
- [ ] **[Cmt]** DevBoard-Next: port the list and detail pages with dynamic routes ([id] segments), and add professional loading.js and not-found.js pages like in the course (70-75 min)

### Hafta 17 — Data and Cache
**Özet:** Learn data fetching, cache management, and revalidation — then move DevBoard-Next data to the server.
**Kaynak:** Your Udemy course "Next.js 16" — fetch, cache and revalidation sections; Next.js Learn: https://nextjs.org/learn
- [ ] **[Pzt]** Watch the fetch, cache management, and revalidation sections of your Udemy course "Next.js 16" at 1.25x speed. Note the cache options in English (50-60 min)
- [ ] **[Per]** Do the data fetching and streaming chapters of Next.js Learn (https://nextjs.org/learn) — Monday's topics again, in English (35-40 min)
- [ ] **[Cmt]** DevBoard-Next: fetch data on the server side, add loading skeletons, and set up revalidation for the list page like in the course (70-75 min)

### Hafta 18 — Forms and Server Actions
**Özet:** Change data with Server Actions and validate forms with Formik and Yup.
**Kaynak:** Your Udemy course "Next.js 16" — Server Actions and Formik/Yup sections; Next.js Learn: https://nextjs.org/learn
- [ ] **[Pzt]** Watch the Server Actions and Formik/Yup form validation sections of your Udemy course "Next.js 16" at 1.25x speed (50-60 min)
- [ ] **[Per]** Do the Server Actions (mutating data) chapter of Next.js Learn (https://nextjs.org/learn) — code the form examples yourself (35-40 min)
- [ ] **[Cmt]** DevBoard-Next: add a create/edit form with Formik and Yup validation, and submit it through a Server Action like in the course (70-75 min)

### Hafta 19 — Auth and API Routes
**Özet:** Learn authentication, authorization, and API Routes — then add login and go live on the internet.
**Kaynak:** Your Udemy course "Next.js 16" — auth and API Routes sections; Next.js Learn: https://nextjs.org/learn; Vercel Hobby (free): https://vercel.com/pricing
- [ ] **[Pzt]** Watch the Authentication & Authorization and API Routes (route.js) CRUD sections of your Udemy course "Next.js 16" at 1.25x speed (50-60 min)
- [ ] **[Per]** Do the auth-related chapter and the error handling chapter of Next.js Learn (https://nextjs.org/learn) in English (35-40 min)
- [ ] **[Cmt]** 🚀 Add simple auth to DevBoard-Next (login-protected favorites) following the course pattern, then deploy to Vercel on the free Hobby plan (https://vercel.com/pricing) and verify the live URL works (70-75 min)

### Hafta 20 — Finals
**Özet:** Finish the Next.js 16 course, review everything, test yourself, and make both projects CV-ready.
**Kaynak:** Your Udemy course "Next.js 16" — final CRUD project; react.dev: https://react.dev/learn; HackerRank: https://www.hackerrank.com/skills-verification
- [ ] **[Pzt]** Finish the remaining videos of your Udemy course "Next.js 16" — the full CRUD project follow-along. Compare its architecture with yours and write 5 English interview-answer notes (50-60 min)
- [ ] **[Per]** Redo the hardest challenges from react.dev (https://react.dev/learn) without looking at your old solutions, then reread all your course notes (35-40 min)
- [ ] **[Cmt]** 🏁 FINAL (~90 min): take the free timed HackerRank "React (Basic)" certification (https://www.hackerrank.com/skills-verification), confirm the live Vercel URL — now with auth — and make both READMEs CV-ready (90 min)

---

## 📈 Checkpoints

| Week | Event | Goal |
|---|---|---|
| 5 | DevBoard has real API data + search/filter | The jQuery muscle now works the React way |
| 10 | 🏁 Season 1 Final: HackerRank JavaScript (Basic) certification | Pass + DevBoard v1 (Router, Context, CRUD) + English README |
| 14 | React course (Can Boz) fully finished | Course notes log complete; Next.js 16 course starts next week |
| 19 | 🚀 Deploy day | DevBoard-Next LIVE on Vercel — WITH auth — link in README |
| 20 | 🏁 Final: HackerRank React (Basic) certification | Pass + live URL + CV-ready repo: React, TS, Router, Context, Redux Toolkit, MUI, Next.js, auth, Formik+Yup all demonstrated in ONE project |

If a certification fails: read the report, put weak topics into Thursday reviews for 2 weeks, retake. The plan stretches; the order never changes.
