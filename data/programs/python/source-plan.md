# 🤖 PYTHON → AI ENGINEERING (20 Weeks, Intensive)

> **Profile:** Developer (C#/Dart background, basic Python from katas) with a REAL AI project at work — LLM-based (chatbot/RAG) plus classical ML — and a long-term goal: AI Engineer. The LLM work runs on a LOCAL stack: Ollama with a Qwen model, already installed.
> **System:** Intensive — 5 days/week, 45-60 min/day, **weekend completely free**. Mon+Tue = main course track (your Turkish Udemy Python course first, then the official pandas/scikit-learn docs, then Ollama/LLM topics) · Wed = HACKERRANK DAY in Phases 1-2 (Python → SQL → statistics), ML/data upkeep in Phase 3 · Thu = practice + re-solve (platform history) · Fri = PROJECT day, pushed to GitHub — everything builds toward the work project.
> **Language note:** The Udemy course is Turkish; everything else is in English on purpose — AI documentation lives in English, and reading it IS part of the job.

---

## 🧰 Resources (all verified; free unless noted)

| Resource | What for | Address |
|---|---|---|
| Udemy Python course | Turkish spine for Phase 1 — VIDEO-ONLY (no exercises inside); covers basics → OOP/polymorphism. Watch at 1.25-1.5x and skip sections you pass the 5-minute self-check for | your Udemy library |
| Python tutorial | Official reference — the English half of Phase 1 and the source for every course gap | https://docs.python.org/3/tutorial/ |
| pandas (official) | Phase 2 data spine — the "Getting started" tutorial series plus the user guide | https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html |
| scikit-learn | Phase 2 ML spine — Getting Started plus User Guide chapters: trees, ensembles, cross-validation, imputation, encoders, metrics | https://scikit-learn.org/stable/getting_started.html |
| Ollama | Your local LLM runtime — REST API docs + official Python library (`pip install ollama`) | https://docs.ollama.com/api |
| Qwen (installed) | Your local model; variants list | https://ollama.com/library/qwen3 |
| nomic-embed-text | Local embedding model for semantic search / RAG | https://ollama.com/library/nomic-embed-text |
| ChromaDB | Open-source local vector store for RAG | https://docs.trychroma.com |
| HF LLM Course | Free Hugging Face course — how LLMs work under the hood | https://huggingface.co/learn/llm-course/chapter1/1 |
| Exercism Python | Kata upkeep — in-browser editor, tests run on the site | https://exercism.org/tracks/python |
| HackerRank Python | Wednesday practice in Phase 1 + FREE timed Python (Basic) certification (week 6) | https://www.hackerrank.com/domains/python |
| HackerRank SQL | Phase 2 Wednesdays — Basic Select, Aggregation, Basic Join + FREE timed SQL (Basic) certification (week 12) | https://www.hackerrank.com/domains/sql |
| HackerRank 10 Days of Statistics | Phase 2 Wednesdays — the statistics under every ML metric, up to linear regression | https://www.hackerrank.com/domains/tutorials/10-days-of-statistics |

## ⚖️ Fixed Rules

1. Fast-forward rule for Phase 1: the course is VIDEO-ONLY (it has no exercises), so the check lives OUTSIDE it — before each course section, do a 5-minute self-check: solve one matching mini-exercise on Exercism Python or HackerRank Python. Passed easily → skim that section at 1.5x or skip it. Struggled → watch it fully. Never sit through what you already know.
2. Friday project day always ends with a real GitHub push and a clear English commit message. These repos ARE your AI-engineer portfolio.
3. Thursday re-solve is never skipped: your solved-problem history lives on the platforms (Exercism solutions page, HackerRank submissions) — pick an old one and solve it better.
4. Everything you build points at the work project: prefer work-like data and work-like problems in every Friday session. Before closing, write one line: "how does this help the project at work?"
5. Local first: the LLM track runs on YOUR machine (Ollama + Qwen). Cloud APIs are a comparison note, not the path.
6. Weekend is free. If a week slips, the week stretches; the order never changes. The two free certifications (Python Basic in week 6, SQL Basic in week 12) are taken when you arrive.

---
# 🟢 FAZ 1 — Python Deepening (Hafta 1-6)

### Hafta 1 — Kickoff

**Özet:** Restart Python following the course's real outline: basics, data types, type conversions and operators — with a 5-minute self-check before every section. Set up a clean dev environment and push your first script.
**Kaynak:** your Udemy Python course · https://docs.python.org/3/tutorial/ · https://exercism.org/tracks/python · https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Self-check first: solve one easy exercise on Exercism Python (https://exercism.org/tracks/python) in the browser. Then open your Udemy Python course sections on basics, data types and type conversions: skim at 1.5x what the self-check proved you know; watch fully only what felt shaky. Note weak topics in a list (45-60 min)
- [ ] **[Salı]** Self-check first: one warm-up problem on HackerRank Python (https://www.hackerrank.com/domains/python). Then your Udemy course sections on operators (arithmetic, assignment, comparison, logical): skim at 1.5x or skip what you know, watch fully what you missed. Update your weak-topics list (45-60 min)
- [ ] **[Çar]** HACKERRANK DAY: on HackerRank Python (https://www.hackerrank.com/domains/python) work through the "Introduction" subdomain — solve 3 problems (Python If-Else, Arithmetic Operators, Loops). The problem statements are in English, so this is language practice too. After each accepted solution open the Discussions tab and read one solution shorter than yours. If a concept is missing, the matching chapter is https://docs.python.org/3/tutorial/introduction.html (45-60 min)
- [ ] **[Per]** Open Exercism Python (https://exercism.org/tracks/python), join the track, and solve 2 easy exercises in the browser editor. The tests run on the site, so you need no local setup (45-60 min)
- [ ] **[Cum]** PROJECT: Install Python and VS Code, create a venv, and write your first utility script — a folder organizer that sorts files in a folder by type. Create a GitHub repo named "python-journey" and push the script with a short commit message (45-60 min)

### Hafta 2 — Conditionals, Lists and Loops

**Özet:** The course's control-flow block: conditionals, lists, for/while and break/continue. The official tutorial covers the same ground in English this week — perfect double exposure.
**Kaynak:** your Udemy Python course · https://docs.python.org/3/tutorial/ · https://exercism.org/tracks/python · https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Self-check first: one conditionals/lists mini-exercise on Exercism Python (https://exercism.org/tracks/python). Then your Udemy course sections on conditional statements and lists: skim at 1.5x what you know, watch fully what you missed (45-60 min)
- [ ] **[Salı]** Self-check first: one loops problem on HackerRank Python (https://www.hackerrank.com/domains/python). Then your Udemy course sections on for/while loops and break/continue: same skim-or-watch rule (45-60 min)
- [ ] **[Çar]** HACKERRANK DAY: on HackerRank Python (https://www.hackerrank.com/domains/python) solve 3 problems from the "Basic Data Types" subdomain (Lists, Tuples, Find the Runner-Up Score, Nested Lists) — every one of them is loops and conditionals over lists. Read one Discussions solution after each. Stuck on a construct? https://docs.python.org/3/tutorial/controlflow.html (45-60 min)
- [ ] **[Per]** Solve 1 new exercise on Exercism Python (https://exercism.org/tracks/python) or HackerRank Python (https://www.hackerrank.com/domains/python), then RE-SOLVE 1 old problem from your platform history without looking at your old answer (45-60 min)
- [ ] **[Cum]** PROJECT: Write a CSV-processing script in "python-journey": read a CSV file (e.g., an export like the ones at work), filter rows by a condition, and print a small summary (counts, totals). Use functions, not one long block. Push to GitHub (45-60 min)

### Hafta 3 — Strings and Dictionaries

**Özet:** The course's text-and-data block: character strings, string methods, list methods and dictionaries — the day-to-day tools of data work.
**Kaynak:** your Udemy Python course · https://docs.python.org/3/tutorial/ · https://exercism.org/tracks/python · https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Self-check first: one string-manipulation exercise on Exercism Python (https://exercism.org/tracks/python). Then your Udemy course sections on character strings and string methods: skim at 1.5x what you know, watch fully what you missed (45-60 min)
- [ ] **[Salı]** Self-check first: one dictionary problem on HackerRank Python (https://www.hackerrank.com/domains/python). Then your Udemy course sections on list methods and dictionaries: same skim-or-watch rule. Try 5 dict operations in a scratch file (45-60 min)
- [ ] **[Çar]** HACKERRANK DAY: on HackerRank Python (https://www.hackerrank.com/domains/python) solve 3 problems across the "Strings" and "Collections" subdomains (sWAP cASE, String Split and Join, collections.Counter()). `Counter` and `defaultdict` are the dictionary tools you will actually reach for in real code. Comprehensions come back in Week 6 — if they feel shaky, read https://docs.python.org/3/tutorial/datastructures.html (45-60 min)
- [ ] **[Per]** Solve 1 new OOP-flavored exercise on Exercism Python (https://exercism.org/tracks/python) or a Classes problem on HackerRank Python (https://www.hackerrank.com/domains/python), then RE-SOLVE 1 old problem from your platform history (45-60 min)
- [ ] **[Cum]** PROJECT: Build a dictionary-based report tool in "python-journey": take the CSV from Week 2 and produce a per-category summary using dicts (counts, totals per group), printed as a small readable report. Push to GitHub (45-60 min)

### Hafta 4 — Functions, Recursion and Errors

**Özet:** The course's functions block: functions, recursive functions and error handling — plus a robust CLI tool that does not crash on bad input.
**Kaynak:** your Udemy Python course · https://docs.python.org/3/tutorial/ · https://exercism.org/tracks/python · https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Self-check first: one functions exercise on Exercism Python (https://exercism.org/tracks/python). Then your Udemy course sections on functions and recursive functions: skim at 1.5x what you know, watch fully what you missed. Write one small recursive function yourself (45-60 min)
- [ ] **[Salı]** Self-check first: one exceptions-flavored problem on HackerRank Python (https://www.hackerrank.com/domains/python). Then your Udemy course sections on error handling (try/except, raising): same skim-or-watch rule (45-60 min)
- [ ] **[Çar]** HACKERRANK DAY: on HackerRank Python (https://www.hackerrank.com/domains/python) solve the "Errors and Exceptions" subdomain (Exceptions, Incorrect Regex) plus one more problem of your choice — but add your own rule: every solution must fail gracefully with try/except instead of crashing. Then write one custom exception class of your own; the reference is https://docs.python.org/3/tutorial/errors.html (45-60 min)
- [ ] **[Per]** Solve 1 new exercise on Exercism Python (https://exercism.org/tracks/python) or HackerRank Python (https://www.hackerrank.com/domains/python), then RE-SOLVE 1 old problem from your platform history (45-60 min)
- [ ] **[Cum]** PROJECT: Build a robust CLI tool in "python-journey": use argparse for arguments, handle bad input with clear error messages (no raw tracebacks), and read/write files safely. Example: a tool that cleans or converts a CSV. Push to GitHub (45-60 min)

### Hafta 5 — OOP and Polymorphism

**Özet:** The course's final block: classes, objects, inheritance and polymorphism — the bridge from your C# knowledge to Python style. Read the official Classes chapter next to it: Python's object model is NOT C#'s.
**Kaynak:** your Udemy Python course · https://docs.python.org/3/tutorial/ · https://exercism.org/tracks/python · https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Self-check first: one classes exercise on Exercism Python (https://exercism.org/tracks/python). Then your Udemy course OOP sections (classes, `__init__`, methods): skim at 1.5x what you know from C#, watch fully what is Python-specific. Note 3 differences from C# (45-60 min)
- [ ] **[Salı]** Your Udemy course sections on inheritance and polymorphism (plus special methods like `__str__`): same skim-or-watch rule. Write one small class hierarchy of your own to test the ideas (45-60 min)
- [ ] **[Çar]** HACKERRANK DAY: on HackerRank Python (https://www.hackerrank.com/domains/python) solve both problems of the "Classes" subdomain (Dealing with Complex Numbers, Class 2 - Find the Torsional Angle) — Python OOP under exam conditions, which is exactly what Week 6 will ask of you. Then read https://docs.python.org/3/tutorial/classes.html for class vs instance attributes and why Python has no `private`, and add those to your C#-difference notes (45-60 min)
- [ ] **[Per]** On HackerRank Python (https://www.hackerrank.com/domains/python) solve a set of medium-difficulty problems (aim for 3). Note which topics still feel slow (45-60 min)
- [ ] **[Cum]** PROJECT: Refactor your "python-journey" scripts into classes: e.g., a `FileOrganizer` class and a `CsvReport` class, each in its own file, using what the OOP week taught. Keep behavior the same, make the code cleaner. Push to GitHub (45-60 min)

### Hafta 6 — Course Gaps and Phase Final

**Özet:** The course does NOT cover file I/O, modules/venv, generators or decorators — close those gaps from the official tutorial, then finish with the free timed certification.
**Kaynak:** your Udemy Python course · https://docs.python.org/3/tutorial/ · https://www.hackerrank.com/domains/python · https://www.hackerrank.com/skills-verification/python_basic

- [ ] **[Pzt]** COURSE GAP DAY 1: from the official Python tutorial (https://docs.python.org/3/tutorial/) read the "Input and Output" and "Modules" chapters — file reading/writing with `with`, imports, packages. Then apply: add requirements.txt and a clean package folder to "python-journey" (45-60 min)
- [ ] **[Salı]** COURSE GAP DAY 2: comprehensions, generators, decorators. You met comprehensions in the Week 3 Data Structures chapter — now rewrite 3 of your old loops as comprehensions; then, using the official tutorial (https://docs.python.org/3/tutorial/), write one tiny generator and one tiny decorator (e.g., a timer). Review your weak-topics list from Weeks 1-5 and rewatch only those course videos (45-60 min)
- [ ] **[Çar]** On HackerRank Python (https://www.hackerrank.com/domains/python) do timed practice: pick 3 medium problems and give yourself 15 minutes each. This is a warm-up for Friday's exam format (45-60 min)
- [ ] **[Per]** RE-SOLVE marathon: pick 3 old problems from your Exercism/HackerRank history and solve them again from scratch, without looking at your old code. Fast and clean is the goal (45-60 min)
- [ ] **[Cum]** 🏁 Take the FREE timed HackerRank "Python (Basic)" certification: 90 minutes, 2 questions (https://www.hackerrank.com/skills-verification/python_basic). After the exam, tidy the "python-journey" repo: update the README with what you built in Phase 1 and add the certificate link (~90 min)
# 🔵 FAZ 2 — Data and Classical ML (Hafta 7-12)

### Hafta 7 — Pandas I

**Özet:** Start working with real data. Learn the basics of pandas from the official documentation: what a DataFrame is, reading and writing files, selecting subsets and plotting. On Friday you explore a real CSV file with your new skills.
**Kaynak:** https://pandas.pydata.org/docs/user_guide/10min.html • https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html • https://www.hackerrank.com/domains/sql • https://exercism.org/tracks/python • https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Read "10 minutes to pandas" (https://pandas.pydata.org/docs/user_guide/10min.html) from top to bottom and TYPE every example yourself in a notebook or script — no copy-paste. This one page is your map of the whole library. Then skim tutorials 1-2 of the official series (https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html): DataFrame vs Series, and reading/writing CSV. (45-60 min)
- [ ] **[Salı]** In the official pandas "Getting started" tutorial series (https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html) work through tutorials 3-4: selecting a subset of a DataFrame (`loc`/`iloc`, boolean filters) and plotting. Take short notes: which pandas function does what? (45-60 min)
- [ ] **[Çar]** HACKERRANK DAY: on HackerRank SQL (https://www.hackerrank.com/domains/sql) solve 5 problems from the "Basic Select" subdomain. A `WHERE` clause is the exact same thought as yesterday's boolean mask in pandas — watch two languages say the same thing. Everything runs in the browser, and SQL is half of every real data job. (45-60 min)
- [ ] **[Per]** Python upkeep: solve one new kata on Exercism (https://exercism.org/tracks/python) or HackerRank (https://www.hackerrank.com/domains/python). Then re-solve one old problem from your platform history without looking at your previous answer. (45-60 min)
- [ ] **[Cum]** PROJECT: On your own computer, load a real CSV file about a topic you care about (for example football, movies, or prices). Explore it with pandas: check .shape, .dtypes, .head() and .value_counts(). Commit the notebook or script to your GitHub repo. (45-60 min)

### Hafta 8 — Pandas II

**Özet:** Finish the official tutorial series and go one level deeper into the user guide: new columns, grouping, reshaping, combining tables and missing values. On Friday you clean a messy dataset like a real data engineer.
**Kaynak:** https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html • https://pandas.pydata.org/docs/user_guide/merging.html • https://pandas.pydata.org/docs/user_guide/missing_data.html • https://www.hackerrank.com/domains/sql • https://exercism.org/tracks/python

- [ ] **[Pzt]** In the pandas tutorial series (https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html) complete tutorials 5-6: creating new columns derived from existing ones, and calculating summary statistics with `groupby` and `value_counts`. Run every example yourself. (45-60 min)
- [ ] **[Salı]** Complete tutorials 7-8 of the same series (https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html): reshaping the table layout (sort, pivot, melt) and combining data from multiple tables. Then read the user guide on merge/join (https://pandas.pydata.org/docs/user_guide/merging.html) and merge two tables of your own. (45-60 min)
- [ ] **[Çar]** HACKERRANK DAY: on HackerRank SQL (https://www.hackerrank.com/domains/sql) solve 5 problems from the "Aggregation" subdomain — COUNT, SUM, AVG, MIN/MAX with GROUP BY. This is Monday's `.groupby()` in the other language; doing both in one week is what makes the concept stick. (45-60 min)
- [ ] **[Per]** Python upkeep: solve one new kata on Exercism (https://exercism.org/tracks/python) or HackerRank (https://www.hackerrank.com/domains/python). Then re-solve one old problem from your platform history from memory. (45-60 min)
- [ ] **[Cum]** PROJECT: Take a messy dataset (or make your CSV from last week messy) and clean it with pandas: fix missing values, wrong data types and duplicate rows. Keep the missing-data user guide open while you work (https://pandas.pydata.org/docs/user_guide/missing_data.html) — `isna`/`dropna`/`fillna` and why the column dtype decides what "missing" even means. Write a short English summary of what you fixed and push everything to GitHub. (45-60 min)

### Hafta 9 — First Models

**Özet:** Machine learning starts here, straight from the scikit-learn documentation: the estimator API (fit/predict), decision trees, and why we split data into train and validation sets. On Friday you train your first decision tree.
**Kaynak:** https://scikit-learn.org/stable/getting_started.html • https://scikit-learn.org/stable/modules/tree.html • https://scikit-learn.org/stable/modules/cross_validation.html • https://www.hackerrank.com/domains/tutorials/10-days-of-statistics • https://exercism.org/tracks/python

- [ ] **[Pzt]** Read the official scikit-learn Getting Started guide (https://scikit-learn.org/stable/getting_started.html) and run every example yourself: estimators, fit/predict, transformers and pipelines. This is the library you will use at work — this page is its grammar. (45-60 min)
- [ ] **[Salı]** Read the decision trees chapter of the User Guide (https://scikit-learn.org/stable/modules/tree.html): how a tree splits, what `max_depth` changes, classifier vs regressor. Train one on a dataset that ships with scikit-learn (`load_iris` or `fetch_california_housing`). Then take the `train_test_split` part of https://scikit-learn.org/stable/modules/cross_validation.html and score your tree on a held-out half — write one English sentence: why can the training score lie? (45-60 min)
- [ ] **[Çar]** HACKERRANK DAY: start "10 Days of Statistics" (https://www.hackerrank.com/domains/tutorials/10-days-of-statistics) and finish Days 0-2 — mean/median/mode, weighted mean, quartiles, standard deviation and basic probability. Every ML metric you will read from now on sits on top of exactly this. (45-60 min)
- [ ] **[Per]** Python upkeep: solve one new kata on Exercism (https://exercism.org/tracks/python) or HackerRank (https://www.hackerrank.com/domains/python). Then re-solve one old problem from your platform history without looking at your previous answer. (45-60 min)
- [ ] **[Cum]** PROJECT: Train your first DecisionTreeRegressor (or classifier) locally. First repeat it on a dataset bundled with scikit-learn, then try it on YOUR dataset from Week 7-8. Compare the results and commit the notebook to GitHub. (45-60 min)

### Hafta 10 — Model Quality

**Özet:** Learn why models fail: underfitting and overfitting. Meet random forests and gradient boosting, and learn to measure a model with the RIGHT metric instead of bare accuracy. On Friday you build a full pipeline.
**Kaynak:** https://scikit-learn.org/stable/modules/learning_curve.html • https://scikit-learn.org/stable/modules/ensemble.html • https://scikit-learn.org/stable/modules/model_evaluation.html • https://www.hackerrank.com/domains/tutorials/10-days-of-statistics • https://exercism.org/tracks/python

- [ ] **[Pzt]** Underfitting and overfitting: read the validation-curve and learning-curve guide (https://scikit-learn.org/stable/modules/learning_curve.html). Then take your Week 9 tree and plot its validation score against `max_depth` — find the exact depth where it starts to overfit. (45-60 min)
- [ ] **[Salı]** Read the ensembles chapter (https://scikit-learn.org/stable/modules/ensemble.html): random forests and HistGradientBoosting, the two workhorses of real tabular projects. Train both on your dataset and note the difference between one tree and a forest. (45-60 min)
- [ ] **[Çar]** HACKERRANK DAY: back to "10 Days of Statistics" (https://www.hackerrank.com/domains/tutorials/10-days-of-statistics) for Days 7-9 — Pearson correlation, the least-squares regression line and multiple linear regression. You are implementing by hand this week what scikit-learn hands you as one `fit()` call; that is the point. (45-60 min)
- [ ] **[Per]** Python upkeep: solve one new kata on Exercism (https://exercism.org/tracks/python) or HackerRank (https://www.hackerrank.com/domains/python). Then re-solve one old problem from your platform history from memory. (45-60 min)
- [ ] **[Cum]** PROJECT: Build a scikit-learn Pipeline (preprocessing + model) for a classification task on work-like synthetic data. You can generate the data with make_classification. Train it, then score it with TWO metrics, not just accuracy — open https://scikit-learn.org/stable/modules/model_evaluation.html and add precision/recall or a confusion matrix, and write one line about where bare accuracy would have fooled you. Push the code to GitHub. (45-60 min)

### Hafta 11 — Preprocessing and Pipelines

**Özet:** Real data is dirty: missing values and categorical columns. Learn the scikit-learn way to handle both — imputers, encoders and ColumnTransformer — and pack everything into ONE pipeline object. On Friday you add cross-validation to your own project.
**Kaynak:** https://scikit-learn.org/stable/modules/impute.html • https://scikit-learn.org/stable/modules/preprocessing.html • https://scikit-learn.org/stable/modules/compose.html • https://www.hackerrank.com/domains/sql • https://exercism.org/tracks/python

- [ ] **[Pzt]** Read the imputation guide (https://scikit-learn.org/stable/modules/impute.html): SimpleImputer strategies, and why imputation must live INSIDE the pipeline instead of running before the split. Apply it to a dataset that has missing values. (45-60 min)
- [ ] **[Salı]** Read the preprocessing guide (https://scikit-learn.org/stable/modules/preprocessing.html) for OneHotEncoder, OrdinalEncoder and scaling, then the ColumnTransformer guide (https://scikit-learn.org/stable/modules/compose.html). Build ONE pipeline that treats numeric and categorical columns differently and ends in a model — this single object is the thing you actually ship at work. (45-60 min)
- [ ] **[Çar]** HACKERRANK DAY: on HackerRank SQL (https://www.hackerrank.com/domains/sql) solve 5 problems from the "Basic Join" subdomain. A JOIN is `pd.merge` with different punctuation. This is also your warm-up for next week's timed SQL certification, so time yourself loosely. (45-60 min)
- [ ] **[Per]** Python upkeep: solve one new kata on Exercism (https://exercism.org/tracks/python) or HackerRank (https://www.hackerrank.com/domains/python). Then re-solve one old problem from your platform history without looking at your previous answer. (45-60 min)
- [ ] **[Cum]** PROJECT: Apply cross-validation to your model from Week 10 and try to improve it (better features, better parameters). Log your metrics (before and after) in the README of your GitHub repo in English. (45-60 min)

### Hafta 12 — End-to-End ML Milestone

**Özet:** The big week, and it pays out twice: a FREE timed SQL certification on Wednesday, and a complete end-to-end model on YOUR OWN dataset on Friday. Before those, cross-validation done right, hyperparameter search, and the leakage traps that silently ruin real projects.
**Kaynak:** https://scikit-learn.org/stable/modules/cross_validation.html • https://scikit-learn.org/stable/modules/grid_search.html • https://scikit-learn.org/stable/common_pitfalls.html • https://www.hackerrank.com/skills-verification/sql_basic • https://exercism.org/tracks/python

- [ ] **[Pzt]** Go back to the cross-validation guide (https://scikit-learn.org/stable/modules/cross_validation.html), this time for `cross_val_score` and KFold on your own model. Then read the hyperparameter tuning guide (https://scikit-learn.org/stable/modules/grid_search.html) and run one small GridSearchCV. (45-60 min)
- [ ] **[Salı]** Read "Common pitfalls and recommended practices" (https://scikit-learn.org/stable/common_pitfalls.html), especially the DATA LEAKAGE section — this is the mistake that makes a model look great in the notebook and fail in production. Then audit your own code: is any preprocessing fitted on test data? Fix what you find. (45-60 min)
- [ ] **[Çar]** 🏁 HACKERRANK DAY: take the FREE timed HackerRank "SQL (Basic)" certification (https://www.hackerrank.com/skills-verification/sql_basic) — you have been building toward it since Week 7 with Basic Select, Aggregation and Basic Join. Add the certificate link to your GitHub profile README next to the Python (Basic) one. (45-60 min)
- [ ] **[Per]** Python upkeep: solve one new kata on Exercism (https://exercism.org/tracks/python) or HackerRank (https://www.hackerrank.com/domains/python). Then re-solve one old problem from your platform history from memory. (45-60 min)
- [ ] **[Cum]** 🏁 MILESTONE PROJECT: pick your dataset — work-like data if you can get it — and build the complete model on it: one pipeline (impute + encode + model), a cross-validated score, and at least one tuned hyperparameter. Then write an English README in your GitHub repo describing your approach: which features, which model, which metric decided success, the score, and what you want to try next. (90 min)
# 🔴 FAZ 3 — Local LLM Engineering: Ollama + Qwen (Hafta 13-20)

### Hafta 13 — Talk to Your Model

**Özet:** You start talking to your installed Qwen model (https://ollama.com/library/qwen3) from code. First with the REST API, then with the official Python library. On Friday you start your project repo "local-ai-lab" with a clean chat script.
**Kaynak:** Ollama REST API (https://docs.ollama.com/api), ollama-python (https://github.com/ollama/ollama-python), Qwen variants (https://ollama.com/library/qwen3)

- [ ] **[Pzt]** Read the Ollama REST API docs at https://docs.ollama.com/api. Send a chat request to your installed Qwen model with curl, then do the same with Python `requests`. Print the answer. (45-60 min)
- [ ] **[Salı]** Install the official Python library from https://github.com/ollama/ollama-python (`pip install ollama`). Rewrite yesterday's chat in Python with `ollama.chat`, then turn on streaming and print the tokens as they arrive. (45-60 min)
- [ ] **[Çar]** Sklearn upkeep: open your Week 12 milestone project and make ONE improvement to the pipeline (a new feature or a better model setting). Check whether your cross-validated score actually moves. (45-60 min)
- [ ] **[Per]** Kata day: solve one new exercise on https://exercism.org/tracks/python, then re-solve one OLD problem from your Exercism or HackerRank history without looking at your old code. (45-60 min)
- [ ] **[Cum]** PROJECT: create a new repo "local-ai-lab" on GitHub. Write a clean Python chat script for your installed Qwen model: streaming output plus easy-to-change model parameters (temperature, model name). Push it. (45-60 min)

### Hafta 14 — Prompt Engineering

**Özet:** You learn how to control your Qwen model: system prompts, temperature, top_p, and JSON output. You also read chapter 1 of the free Hugging Face LLM course to understand how LLMs really work. Friday: a CLI chatbot with memory.
**Kaynak:** HF LLM course chapter 1 (https://huggingface.co/learn/llm-course/chapter1/1), Ollama API (https://docs.ollama.com/api)

- [ ] **[Pzt]** Experiment with your installed Qwen model: give it different system prompts and change temperature and top_p (options are in https://docs.ollama.com/api). Write down in a notes file how each change affects the answers. (45-60 min)
- [ ] **[Salı]** Read chapter 1 of the free Hugging Face LLM course at https://huggingface.co/learn/llm-course/chapter1/1 to see how LLMs actually work. Then ask Qwen for structured output: request JSON format and parse it with Python `json.loads`. (45-60 min)
- [ ] **[Çar]** Data practice: pick any small dataset (CSV) you like and do a quick pandas analysis — load, clean, group, and make one plot. Keep your Phase 2 skills warm. (45-60 min)
- [ ] **[Per]** Kata day: solve one new exercise on https://www.hackerrank.com/domains/python, then re-solve one OLD problem from your platform history from memory. (45-60 min)
- [ ] **[Cum]** PROJECT: in "local-ai-lab", build a CLI chatbot for Qwen that keeps the conversation history in a list and loads the system prompt from a small config file. Push to GitHub. (45-60 min)

### Hafta 15 — Embeddings

**Özet:** Text becomes numbers this week. You pull the nomic-embed-text model, create embeddings in Python, and compare texts with cosine similarity. Friday: semantic search over your own notes.
**Kaynak:** nomic-embed-text (https://ollama.com/library/nomic-embed-text), ollama-python (https://github.com/ollama/ollama-python)

- [ ] **[Pzt]** Run `ollama pull nomic-embed-text` (model page: https://ollama.com/library/nomic-embed-text). Use the Python library from https://github.com/ollama/ollama-python to embed 5 short sentences and look at the vector shape and values. (45-60 min)
- [ ] **[Salı]** Write a cosine similarity function with numpy and compare your embedded sentences: which pairs are close, which are far? Test with similar and very different sentences to check it makes sense. (45-60 min)
- [ ] **[Çar]** Sklearn upkeep: revisit https://scikit-learn.org/stable/getting_started.html and practice one thing you feel weak on (pipelines, cross-validation, or a new model type) on your Week 12 project data. (45-60 min)
- [ ] **[Per]** Kata day: one new exercise on https://exercism.org/tracks/python plus one re-solve from your old solutions, without peeking. (45-60 min)
- [ ] **[Cum]** PROJECT: build semantic search over a folder of your own notes or documents: embed each file with nomic-embed-text, embed a query, rank files by cosine similarity, print the top 3. Push to "local-ai-lab". (45-60 min)

### Hafta 16 — Vector Store

**Özet:** Numpy search is fine for 10 files, but you need a real vector store. This week you learn ChromaDB (open source, runs locally): collections, add, query, and persistence. Friday: your documents live in Chroma.
**Kaynak:** ChromaDB docs (https://docs.trychroma.com), nomic-embed-text (https://ollama.com/library/nomic-embed-text)

- [ ] **[Pzt]** Read the ChromaDB getting-started docs at https://docs.trychroma.com. Install it, create a collection, add a few documents, and run your first `query`. (45-60 min)
- [ ] **[Salı]** Continue with https://docs.trychroma.com: learn persistence (saving the database to disk) and metadata filters. Restart Python and confirm your collection is still there. (45-60 min)
- [ ] **[Çar]** Data practice: take a messy CSV (or make one), and practice cleaning with pandas — missing values, wrong types, duplicates. Twenty minutes at the end: one groupby insight, one chart. (45-60 min)
- [ ] **[Per]** Kata day: one new problem on https://www.hackerrank.com/domains/python and one re-solve from your history. (45-60 min)
- [ ] **[Cum]** PROJECT: index your documents in a persistent Chroma collection using embeddings from https://ollama.com/library/nomic-embed-text, and write a small search script that queries the collection. Push to "local-ai-lab". (45-60 min)

### Hafta 17 — RAG v1

**Özet:** The big week: you connect everything into RAG. Retrieve the top-k chunks from Chroma, build a context, and let your Qwen model answer using YOUR documents. Fully local — no cloud API needed (that is the whole point compared to OpenAI-style setups).
**Kaynak:** HF LLM course (https://huggingface.co/learn/llm-course/chapter1/1), Ollama API (https://docs.ollama.com/api), ChromaDB (https://docs.trychroma.com)

- [ ] **[Pzt]** Study the RAG pattern on paper first: question → embed → retrieve top-k from Chroma (https://docs.trychroma.com) → build a context string → ask the LLM. Write the retrieve step: a function that returns the top 3 chunks for a question. (45-60 min)
- [ ] **[Salı]** Write the generation step: put the retrieved chunks into a prompt template and send it to your installed Qwen model via https://docs.ollama.com/api. Also skim a Hugging Face course page from https://huggingface.co/learn/llm-course/chapter1/1 for background reading. (45-60 min)
- [ ] **[Çar]** Sklearn upkeep: try one more improvement on your Week 12 model — for example a different model family or better feature encoding — and record the new cross-validated score in the project README. (45-60 min)
- [ ] **[Per]** Kata day: one new exercise on https://exercism.org/tracks/python plus one re-solve from your platform history. (45-60 min)
- [ ] **[Cum]** 🚀 PROJECT: connect the pieces into end-to-end minimal RAG over YOUR documents: question → Chroma retrieval → Qwen answer that also lists its sources. Test with 5 real questions and push to "local-ai-lab". (45-60 min)

### Hafta 18 — RAG Quality

**Özet:** A working RAG is not yet a good RAG. This week you improve quality: better chunking, top-k tuning, a prompt template with citations, and a simple hand evaluation with 10 test questions. Friday: measure and record the results.
**Kaynak:** ChromaDB (https://docs.trychroma.com), Ollama API (https://docs.ollama.com/api)

- [ ] **[Pzt]** Experiment with chunking strategies for your documents: try small chunks vs big chunks (and some overlap), re-index in Chroma (https://docs.trychroma.com), and compare the retrieved results for 3 test questions. (45-60 min)
- [ ] **[Salı]** Tune top-k (try 2, 4, 8) and rewrite your prompt template so Qwen must cite its sources, e.g. "[source: filename]". Check the effect on answer quality via https://docs.ollama.com/api chat calls. (45-60 min)
- [ ] **[Çar]** Data practice: pandas session with any dataset — practice merge/join of two tables and a pivot table. Finish with one clear chart. (45-60 min)
- [ ] **[Per]** Kata day: one new problem on https://www.hackerrank.com/domains/python and one re-solve from memory. (45-60 min)
- [ ] **[Cum]** PROJECT: write 10 test questions with expected answers, run them through your RAG, and score each answer by hand (good / partial / wrong). Apply the best chunking + citation setup and record the eval results in the README. Push to "local-ai-lab". (45-60 min)

### Hafta 19 — Serve It

**Özet:** Your RAG chatbot becomes a real local service this week. You expose it as a small web API with FastAPI or Flask, and you also serve your sklearn model from Week 12 behind the same API. One service, two brains: LLM and classical ML.
**Kaynak:** FastAPI or Flask official docs (choose one, follow it), Ollama API (https://docs.ollama.com/api), scikit-learn (https://scikit-learn.org/stable/getting_started.html)

- [ ] **[Pzt]** Choose FastAPI or Flask and follow its official docs to build a hello-world web API locally. Add one POST endpoint that receives JSON and returns JSON. (45-60 min)
- [ ] **[Salı]** Connect the API to your RAG code: a `/chat` endpoint that takes a question, runs retrieval + Qwen (via https://docs.ollama.com/api), and returns the answer with sources. Define simple request/response models. (45-60 min)
- [ ] **[Çar]** Sklearn upkeep: save your trained Week 12 model with joblib, then load it inside the API and test a prediction from Python. Refresh basics at https://scikit-learn.org/stable/getting_started.html if needed. (45-60 min)
- [ ] **[Per]** Kata day: one new exercise on https://exercism.org/tracks/python plus one re-solve from your old solutions. (45-60 min)
- [ ] **[Cum]** PROJECT: finish the local API that serves BOTH endpoints: `/chat` (RAG + Qwen) and `/predict` (your joblib-loaded sklearn model). Test both with curl or requests and push to "local-ai-lab". (45-60 min)

### Hafta 20 — Finals

**Özet:** Final week: you review the whole journey from Python basics to a local AI stack. Interview answers in English, one more course chapter, a last improvement to your ML model, a re-solve marathon, and a demo day where everything runs end to end.
**Kaynak:** HF LLM course (https://huggingface.co/learn/llm-course/chapter1/1), scikit-learn (https://scikit-learn.org/stable/getting_started.html), Exercism (https://exercism.org/tracks/python)

- [ ] **[Pzt]** Review your whole journey and write 5 short English interview answers in a notes file: "How does RAG work?", "What is overfitting?", "What is an embedding?", "Why run an LLM locally?", "How do you evaluate a model?". (45-60 min)
- [ ] **[Salı]** Go back to the Hugging Face LLM course (start at https://huggingface.co/learn/llm-course/chapter1/1) and skim one more chapter of your choice. Note 3 new things you learned. (45-60 min)
- [ ] **[Çar]** Final score attempt on your Week 12 model: apply your best ideas from the last 8 weeks and make one last improvement. Compare it with the score you recorded in Phase 2 and write down what actually moved the needle. (45-60 min)
- [ ] **[Per]** Re-solve marathon: pick 3 OLD problems from your https://exercism.org/tracks/python and HackerRank history and solve them again from scratch, no peeking. (45-60 min)
- [ ] **[Cum]** 🏁 FINAL: demo day — run the local RAG chatbot and the ML API end to end on your machine. Make sure both repos have English READMEs with short architecture notes, and list 3 things to bring into your work project next week. (90 min)

---

## 📈 Checkpoints

| Week | Event | Goal |
|---|---|---|
| 5 | OOP refactor: "python-journey" rebuilt with classes | Pushed |
| 6 | 🏁 HackerRank Python (Basic) certification (free, timed, 90 min) | Pass |
| 8 | Messy dataset cleaned with pandas + English summary | Pushed |
| 10 | scikit-learn Pipeline, scored with the right metric (not just accuracy) | Trained + pushed |
| 12 | 🏁 HackerRank SQL (Basic) certification (free, timed) | Pass |
| 12 | 🏁 End-to-end ML project on YOUR OWN dataset (pipeline + CV + tuning) | Pushed + English README |
| 17 | 🚀 RAG v1: question → Chroma → Qwen answer, over YOUR documents | Works end-to-end locally |
| 20 | 🏁 FINAL: local RAG chatbot + sklearn model behind one local API | Demo runs; READMEs done; 3 takeaways written for the work project |

If a certification or milestone fails: read what went wrong, put the weak topic into Thursday practice for 2 weeks, retry. The plan stretches; the order never changes.
