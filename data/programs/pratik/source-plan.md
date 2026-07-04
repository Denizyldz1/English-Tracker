# 🔧 DEV PRACTICE — C# / Python / Dart + MSSQL (20 Weeks, in English)

> **Profile:** Working developer keeping known skills sharp: C#, Python, Dart katas + MSSQL + light Flutter upkeep. A deliberately LIGHT program — only 2 days/week (Tuesday and Wednesday, 30-40 min each). It stands alone, and because it is this light it can also run next to any other program without collisions if you ever choose to.
> **System:** **Tue** = kata day, 3-week language rotation (C# → Python → Dart) + EVERY week one cross-language re-solve from the solution log (a problem is never "done" — it comes back in another language). **Wed** = MSSQL day (T-SQL only), except every 4th week which is a light Flutter upkeep day. Deep Flutter work is intentionally out of scope here: it deserves its own dedicated Flutter Advanced program later.
> **Language note:** Written in English on purpose — reading it IS part of your English practice.

---

## 🧰 Resources (all verified, free)

| Resource | What for | Address |
|---|---|---|
| Exercism | C#, Python, Dart tracks + free human mentoring | https://exercism.org/tracks/csharp |
| CodeWars | Katas with kyu ranks; compare with top solutions after solving | https://www.codewars.com/kata/search/csharp |
| MS Learn T-SQL | Official free path "Query and modify data with Transact-SQL" (6 modules) | https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/ |
| HackerRank SQL | Practice — pick the MS SQL Server engine where the problem offers it | https://www.hackerrank.com/domains/sql |
| LeetCode Database | SQL problems — ALWAYS select the MS SQL Server dialect | https://leetcode.com/problemset/database/ |
| HackerRank certifications | FREE timed: C# (Basic) at week 10, SQL (Intermediate) at week 20 | https://www.hackerrank.com/skills-verification |
| Flutter docs | Light upkeep weeks: testing (/testing/overview), animations (/ui/animations) | https://docs.flutter.dev/testing/overview |

## ⚖️ Fixed Rules

1. SOLUTION LOG from day one: every solved problem in (name, language, one-line approach). Tuesday re-solve picks from this log — no log, no program.
2. Cross-language re-solve is never skipped: one old problem, solved again in a language it was NOT solved in before. This is the whole point.
3. After every kata, read at least 2 top solutions and note ONE trick you did not use.
4. SQL is MSSQL only: T-SQL syntax (TOP, GETDATE, ISNULL) is what your work uses. On LeetCode always pick the MS SQL Server dialect.
5. Every 4th Tuesday includes a 10-minute jQuery upkeep note — your work stack stays honest.
6. Timed certification days are honest: timer on, no pauses. If a week slips, the week stretches; the order never changes.

---
# 🟠 FAZ 1 — Rotation and T-SQL Base (Hafta 1-10)

### Hafta 1 — Kickoff: C# Katas and First T-SQL Module
**Özet:** Start the 3-week kata rotation with C#, open your solution log, and begin the T-SQL path with the introduction module.
**Kaynak:** https://www.codewars.com/kata/search/csharp · https://exercism.org/tracks/csharp · https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/
- [ ] **[Salı]** Solve 2 CodeWars katas in C# (7 kyu level) or 2 medium Exercism C# exercises. Then create a "solution log": a simple file where you write the problem name, language, and one lesson learned. Pick one problem you solved in the past (at work or in practice), re-solve it in Python or Dart, and add both entries to the log (30-40 min)
- [ ] **[Çar]** On MS Learn, complete the module "Introduction to Transact-SQL" from the path "Query and modify data with Transact-SQL". Write the example queries yourself instead of only reading them, then solve 1-2 easy problems on HackerRank SQL (choose the MS SQL Server engine where offered) (30-40 min)

### Hafta 2 — Python Week and Sorting Data
**Özet:** Rotation moves to Python; on the SQL side you learn to sort and filter query results.
**Kaynak:** https://www.codewars.com/kata/search/python · https://exercism.org/tracks/python · https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/ · https://www.hackerrank.com/domains/sql
- [ ] **[Salı]** Solve 2 CodeWars katas in Python (7-6 kyu) or 2 medium Exercism Python exercises. Then open your solution log, pick one problem you originally solved in C#, and re-solve it in Python. Note in the log what felt different between the two languages (30-40 min)
- [ ] **[Çar]** Complete the MS Learn module "Sort and filter results in T-SQL queries" (WHERE, ORDER BY, TOP, OFFSET-FETCH). Then solve 1-2 easy HackerRank SQL problems that use filtering, with the MS SQL Server engine where offered (30-40 min)

### Hafta 3 — Dart Week and JOINs
**Özet:** Dart takes its turn in the rotation, and you practice combining tables with JOINs.
**Kaynak:** https://www.codewars.com/kata/search/dart · https://exercism.org/tracks/dart · https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/ · https://www.hackerrank.com/domains/sql
- [ ] **[Salı]** Solve 2 CodeWars katas in Dart (7-6 kyu) or 2 medium Exercism Dart exercises. Cross-language re-solve: take one problem from your solution log that was originally in Python or C# and solve it again in Dart. Add a short note about any Dart syntax you had to look up (30-40 min)
- [ ] **[Çar]** Complete the MS Learn module "Combine multiple tables with JOINs in T-SQL" (INNER, LEFT, RIGHT, self joins). Then solve 1-2 HackerRank SQL problems that need a JOIN, using the MS SQL Server engine where offered (30-40 min)

### Hafta 4 — C# Returns, jQuery Note, Flutter Upkeep
**Özet:** C# is back in the rotation with a small jQuery side note, and Wednesday is a light Flutter maintenance day.
**Kaynak:** https://www.codewars.com/kata/search/csharp · https://exercism.org/tracks/csharp · https://docs.flutter.dev/testing/overview
- [ ] **[Salı]** Solve 2 C# katas on CodeWars (7-6 kyu) or Exercism, then re-solve one logged problem in a different language than its original. jQuery upkeep (~10 min): take one jQuery pattern you use at work and write a one-paragraph English note on how you would test or refactor it (30-40 min)
- [ ] **[Çar]** Light Flutter day: open your flashcard app and add one widget test for a screen that has none (see the Flutter testing overview page). Run the test, make it pass, and commit. Keep it small — deep Flutter work is saved for a future dedicated program (30-40 min)

### Hafta 5 — Python Week and Subqueries
**Özet:** Python katas continue the rotation while the T-SQL path moves into subqueries.
**Kaynak:** https://www.codewars.com/kata/search/python · https://exercism.org/tracks/python · https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/ · https://www.hackerrank.com/domains/sql
- [ ] **[Salı]** Solve 2 Python katas (6 kyu if 7 kyu feels easy) or 2 medium Exercism Python exercises. Then pick one Dart or C# problem from your solution log and rewrite it in Python. In the log, write one sentence about which version is cleaner and why (30-40 min)
- [ ] **[Çar]** Complete the MS Learn module "Write subqueries in T-SQL" (scalar, multi-value, correlated subqueries). Then solve 1-2 HackerRank SQL problems where a subquery helps, choosing the MS SQL Server engine where offered (30-40 min)

### Hafta 6 — Dart Week, Functions and Data Changes
**Özet:** Dart closes the second rotation cycle; you finish the MS Learn path with built-in functions, GROUP BY, and data modification.
**Kaynak:** https://www.codewars.com/kata/search/dart · https://exercism.org/tracks/dart · https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/
- [ ] **[Salı]** Solve 2 Dart katas (7-6 kyu) or 2 medium Exercism Dart exercises. Cross-language re-solve: choose one problem from the log that you have not yet touched in Dart and solve it in Dart. Update the log with the entry (30-40 min)
- [ ] **[Çar]** Finish the MS Learn path: complete the module on built-in functions and GROUP BY, then quickly work through the "Modify data with T-SQL" module (INSERT, UPDATE, DELETE, MERGE). This closes the whole "Query and modify data with Transact-SQL" path — check that every module shows as completed (30-40 min)

### Hafta 7 — C# Week and the HackerRank SQL Ladder
**Özet:** Third rotation cycle starts with C#, and Wednesday switches from MS Learn modules to a steady HackerRank/LeetCode SQL practice ladder.
**Kaynak:** https://www.codewars.com/kata/search/csharp · https://exercism.org/tracks/csharp · https://www.hackerrank.com/domains/sql · https://leetcode.com/problemset/database/
- [ ] **[Salı]** Solve 2 C# katas, now aiming at 6 kyu on CodeWars (or 2 medium Exercism exercises). Then take one Python problem from your solution log and re-solve it in C#. Note one thing LINQ made shorter — or longer (30-40 min)
- [ ] **[Çar]** SQL practice day: solve 3-4 Easy problems on HackerRank SQL (MS SQL Server engine where offered) or LeetCode Database (always select the MS SQL Server dialect). Keep a small list of problems you found hard — you will retry them later (30-40 min)

### Hafta 8 — Python Week, jQuery Note, Flutter Upkeep
**Özet:** Python katas plus a short jQuery reflection on Tuesday; Wednesday is another light Flutter maintenance session.
**Kaynak:** https://www.codewars.com/kata/search/python · https://exercism.org/tracks/python · https://docs.flutter.dev/testing/overview
- [ ] **[Salı]** Solve 2 Python katas (6 kyu) or 2 medium Exercism Python exercises, then re-solve one logged C# or Dart problem in Python. jQuery upkeep (~10 min): pick a jQuery snippet from a work project and write a short English paragraph on how you would replace it with plain JavaScript — would it be worth it? (30-40 min)
- [ ] **[Çar]** Light Flutter day: run the analyzer on your flashcard app (`flutter analyze`) and fix one group of lint warnings (for example all unused imports, or all missing const keywords). Run the existing tests to confirm nothing broke, then commit (30-40 min)

### Hafta 9 — Dart Week and Easy-to-Medium SQL
**Özet:** Dart week in the rotation; SQL practice starts mixing in the first Medium-level problems.
**Kaynak:** https://www.codewars.com/kata/search/dart · https://exercism.org/tracks/dart · https://www.hackerrank.com/domains/sql · https://leetcode.com/problemset/database/
- [ ] **[Salı]** Solve 2 Dart katas (6 kyu if possible) or 2 medium Exercism Dart exercises. Cross-language re-solve: pick the oldest problem in your solution log and solve it in Dart if it is not already in Dart — otherwise use another language. Write one line about what you remembered wrong (30-40 min)
- [ ] **[Çar]** Solve 2 Easy and 1 Medium problem on HackerRank SQL (MS SQL Server engine where offered) or LeetCode Database (select the MS SQL Server dialect). If the Medium one blocks you for more than 15 minutes, read the discussion, understand the idea, and write the query yourself from memory (30-40 min)

### Hafta 10 — C# Week and the C# (Basic) Certification
**Özet:** Milestone week: C# katas as a warm-up on Tuesday, then the free timed HackerRank C# (Basic) certification on Wednesday.
**Kaynak:** https://www.codewars.com/kata/search/csharp · https://exercism.org/tracks/csharp · https://www.hackerrank.com/skills-verification
- [ ] **[Salı]** Warm-up for tomorrow: solve 2 C# katas (6 kyu) focusing on clean, fast solutions without looking things up. Then re-solve one logged Python or Dart problem in C#. Note in the log which C# features you reached for automatically (30-40 min)
- [ ] **[Çar]** 🏁 Take the FREE timed HackerRank "C# (Basic)" certification at https://www.hackerrank.com/skills-verification. Find a quiet 45-minute window, no notes. Afterwards, write 2-3 English sentences in your log: what was easy, what surprised you (30-40 min)

# 🟣 FAZ 2 — Deepening and Certifications (Hafta 11-20)

### Hafta 11 — Python Week and Medium SQL Territory
**Özet:** Phase 2 opens with Python katas at a higher level and SQL practice settling into Medium problems.
**Kaynak:** https://www.codewars.com/kata/search/python · https://exercism.org/tracks/python · https://www.hackerrank.com/domains/sql · https://leetcode.com/problemset/database/
- [ ] **[Salı]** Solve 2 Python katas at 6-5 kyu (or 2 medium-to-hard Exercism Python exercises). Cross-language re-solve: take one problem from the log and solve it in a language it has not been solved in yet. If every problem is covered in all three languages, pick the one whose solution you like least and improve it (30-40 min)
- [ ] **[Çar]** Solve 2-3 Medium problems on LeetCode Database (always select the MS SQL Server dialect) or HackerRank SQL (MS SQL Server engine where offered). Focus on GROUP BY + HAVING patterns. Add any problem that took two tries to your retry list (30-40 min)

### Hafta 12 — Dart Week, jQuery Note, Flutter Upkeep
**Özet:** Dart katas with a short jQuery item on Tuesday; Wednesday gives the flashcard app one small visible improvement.
**Kaynak:** https://www.codewars.com/kata/search/dart · https://exercism.org/tracks/dart · https://docs.flutter.dev/ui/animations
- [ ] **[Salı]** Solve 2 Dart katas (6-5 kyu) or 2 medium Exercism Dart exercises, then re-solve one logged problem in a different language than its original. jQuery upkeep (~10 min): choose one jQuery selector-heavy block from work and write a one-paragraph English note on how you would make it more readable (30-40 min)
- [ ] **[Çar]** Light Flutter day: add one small animation to your flashcard app — for example an AnimatedOpacity or AnimatedContainer when a card flips or appears (see the Flutter animations page). Keep the change under an hour of total effort; commit when it looks smooth (30-40 min)

### Hafta 13 — C# Week and Window Functions in SQL
**Özet:** C# rotation at 5-kyu ambition; SQL Mediums continue with ranking and window-style problems.
**Kaynak:** https://www.codewars.com/kata/search/csharp · https://exercism.org/tracks/csharp · https://leetcode.com/problemset/database/ · https://www.hackerrank.com/domains/sql
- [ ] **[Salı]** Solve 2 C# katas aiming at 6-5 kyu (or 2 harder Exercism C# exercises). Then pick a problem from your solution log that you last touched in Faz 1 and re-solve it in a different language than its original, from memory first, log second (30-40 min)
- [ ] **[Çar]** Solve 2-3 Medium problems on LeetCode Database (MS SQL Server dialect) that involve ranking or consecutive rows — these usually need ROW_NUMBER, RANK, or LAG/LEAD. If window functions feel rusty, spend the first 10 minutes re-reading your notes from the MS Learn path (30-40 min)

### Hafta 14 — Python Week and the Retry List
**Özet:** Python katas continue; on Wednesday you clear old debts by retrying SQL problems that beat you before.
**Kaynak:** https://www.codewars.com/kata/search/python · https://exercism.org/tracks/python · https://www.hackerrank.com/domains/sql · https://leetcode.com/problemset/database/
- [ ] **[Salı]** Solve 2 Python katas (6-5 kyu) or 2 harder Exercism Python exercises. Cross-language re-solve: choose one problem from the log where your original solution used a loop, and re-solve it in another language using a more functional style (LINQ, comprehension, or Dart collection methods) (30-40 min)
- [ ] **[Çar]** Open your SQL retry list and re-solve 2-3 problems from it without looking at your old answers (HackerRank SQL with the MS SQL Server engine, or LeetCode Database with the MS SQL Server dialect). Cross off the ones you now solve cleanly; keep the stubborn ones (30-40 min)

### Hafta 15 — Dart Week and First Hard Attempt
**Özet:** Dart takes its rotation turn, and you make your first serious attempt at a Hard SQL problem.
**Kaynak:** https://www.codewars.com/kata/search/dart · https://exercism.org/tracks/dart · https://leetcode.com/problemset/database/ · https://www.hackerrank.com/domains/sql
- [ ] **[Salı]** Solve 2 Dart katas (6-5 kyu) or 2 harder Exercism Dart exercises. Then take one C# problem from your log and re-solve it in Dart, paying attention to null-safety differences. One log line: what did Dart force you to think about that C# did not? (30-40 min)
- [ ] **[Çar]** Attempt 1 Hard problem on LeetCode Database (MS SQL Server dialect) — give it 20 focused minutes before checking any hints. Whether you solve it or not, write down the key idea in English. Use remaining time for 1 Medium problem as a confidence reset (30-40 min)

### Hafta 16 — C# Week, jQuery Note, Flutter Upkeep
**Özet:** Last combined upkeep week: C# katas plus a jQuery note on Tuesday, and a final light Flutter session on Wednesday.
**Kaynak:** https://www.codewars.com/kata/search/csharp · https://exercism.org/tracks/csharp · https://docs.flutter.dev/testing/overview
- [ ] **[Salı]** Solve 2 C# katas (5 kyu if you feel ready) or 2 harder Exercism C# exercises, then re-solve one logged problem in a different language than its original. jQuery upkeep (~10 min): pick one jQuery AJAX call from work and write a one-paragraph English note on how you would handle its error cases better (30-40 min)
- [ ] **[Çar]** Light Flutter day: add one more widget test to the flashcard app, this time for a user interaction (tap a button, expect a change). Run the full test suite and fix anything red. This is the last scheduled Flutter session — bigger Flutter plans wait for their own program (30-40 min)

### Hafta 17 — Python Week and SQL Mixed Set
**Özet:** The final regular practice week: Python katas and a mixed-difficulty SQL set that simulates real exam variety.
**Kaynak:** https://www.codewars.com/kata/search/python · https://exercism.org/tracks/python · https://www.hackerrank.com/domains/sql · https://leetcode.com/problemset/database/
- [ ] **[Salı]** Solve 2 Python katas (6-5 kyu) or 2 harder Exercism Python exercises. Cross-language re-solve: pick the problem from your log with the most entries and solve it one more time in the language you are slowest in. Time yourself and note the number (30-40 min)
- [ ] **[Çar]** Mixed SQL set: 1 Easy (speed — under 5 minutes), 2 Medium, and if time remains, revisit the Hard problem from Hafta 15. Use HackerRank SQL (MS SQL Server engine) or LeetCode Database (MS SQL Server dialect). This is your last free-form practice before certification prep (30-40 min)

### Hafta 18 — Dart Week and Timed Prep Round 1
**Özet:** Dart closes its rotation for this program, and SQL work moves to exam conditions: timed problem sets.
**Kaynak:** https://www.codewars.com/kata/search/dart · https://exercism.org/tracks/dart · https://www.hackerrank.com/domains/sql · https://leetcode.com/problemset/database/
- [ ] **[Salı]** Solve 2 Dart katas (6-5 kyu) or 2 harder Exercism Dart exercises — this is Dart's final turn in the program. Re-solve one logged problem in a different language than its original, then skim your whole solution log and mark your 3 favorite solutions (30-40 min)
- [ ] **[Çar]** Certification prep, round 1: set a 35-minute timer and solve as many Medium problems as you can on HackerRank SQL (MS SQL Server engine where offered) — no breaks, no docs, exam conditions. Afterwards note your count and the topic that slowed you down most (30-40 min)

### Hafta 19 — C# Finale and Timed Prep Round 2
**Özet:** C# takes the last kata slot of the program, and you run a second timed SQL rehearsal targeting your weak topic.
**Kaynak:** https://www.codewars.com/kata/search/csharp · https://exercism.org/tracks/csharp · https://www.hackerrank.com/domains/sql · https://leetcode.com/problemset/database/
- [ ] **[Salı]** Final C# kata session: solve 2 katas at 6-5 kyu, then do one last cross-language re-solve from your log. Close with 5 minutes reviewing the log start to finish — write 3 English sentences about what improved since Hafta 1 (30-40 min)
- [ ] **[Çar]** Certification prep, round 2: spend the first 10 minutes drilling the weak topic you noted last week, then run another 25-minute timed set of Medium SQL problems (HackerRank SQL, MS SQL Server engine where offered). You are ready when Mediums fall in under 10 minutes each (30-40 min)

### Hafta 20 — Python Send-off and SQL Certification
**Özet:** Program finale: a relaxed Python kata session with the last jQuery note, then the free timed HackerRank SQL (Intermediate) certification.
**Kaynak:** https://www.codewars.com/kata/search/python · https://exercism.org/tracks/python · https://www.hackerrank.com/skills-verification
- [ ] **[Salı]** Light warm-up before exam day: solve 2 Python katas at a comfortable level (6 kyu) and re-solve one logged problem in a different language than its original. jQuery upkeep (~10 min): write a final one-paragraph English note — which jQuery habit from these 20 weeks will you keep, and which will you drop? (30-40 min)
- [ ] **[Çar]** 🏁 Take the FREE timed HackerRank "SQL (Intermediate)" certification at https://www.hackerrank.com/skills-verification. Quiet room, full focus, no notes. Whatever the result, finish by writing a short English paragraph in your log: the one skill this program made noticeably stronger (30-40 min)

---

## 📈 Checkpoints

| Week | Event | Goal |
|---|---|---|
| 6 | MS Learn T-SQL path finished (all 6 modules) | Notes in the log |
| 10 | 🏁 HackerRank C# (Basic) certification (free, timed) | Pass |
| 15 | Kata level check | Solving 6-5 kyu comfortably in all three languages |
| 20 | 🏁 HackerRank SQL (Intermediate) certification | Pass — MSSQL skills certified |

After week 20: if you want to go deep on Flutter, a dedicated **Flutter Advanced** program (state management, testing, animations, release) is the natural next step — planned separately whenever you decide to start it.
