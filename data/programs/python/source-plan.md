# 🤖 PYTHON → AI ENGINEERING (20 Weeks, Intensive)

> **Profile:** Developer (C#/Dart background, basic Python from katas) with a REAL AI project at work — LLM-based (chatbot/RAG) plus classical ML — and a long-term goal: AI Engineer. The LLM work runs on a LOCAL stack: Ollama with a Qwen model, already installed.
> **System:** Intensive — 5 days/week, 45-60 min/day, **weekend completely free**. Mon+Tue = main course track (your Turkish Udemy Python course first, then Kaggle Learn, then Ollama/LLM topics) · Wed = data/ML track in the browser · Thu = practice + re-solve (platform history) · Fri = PROJECT day, pushed to GitHub — everything builds toward the work project.
> **Language note:** The Udemy course is Turkish; everything else is in English on purpose — AI documentation lives in English, and reading it IS part of the job.

---

## 🧰 Resources (all verified; free unless noted)

| Resource | What for | Address |
|---|---|---|
| Udemy Python course | Turkish spine for Phase 1 — VIDEO-ONLY (no exercises inside); covers basics → OOP/polymorphism. Watch at 1.25-1.5x and skip sections you pass the 5-minute self-check for | your Udemy library |
| Kaggle Learn | Free in-browser courses WITH completion certificates: Python, Pandas, Intro ML, Intermediate ML | https://www.kaggle.com/learn/python |
| Kaggle Titanic | Your first competition submission (week 12) | https://www.kaggle.com/competitions/titanic |
| scikit-learn | Official Getting Started — estimators, pipelines, evaluation | https://scikit-learn.org/stable/getting_started.html |
| Ollama | Your local LLM runtime — REST API docs + official Python library (`pip install ollama`) | https://docs.ollama.com/api |
| Qwen (installed) | Your local model; variants list | https://ollama.com/library/qwen3 |
| nomic-embed-text | Local embedding model for semantic search / RAG | https://ollama.com/library/nomic-embed-text |
| ChromaDB | Open-source local vector store for RAG | https://docs.trychroma.com |
| HF LLM Course | Free Hugging Face course — how LLMs work under the hood | https://huggingface.co/learn/llm-course/chapter1/1 |
| Exercism Python | Kata upkeep — in-browser editor, tests run on the site | https://exercism.org/tracks/python |
| HackerRank Python | Practice + FREE timed Python (Basic) certification (week 6) | https://www.hackerrank.com/domains/python |
| Python tutorial | Official reference when the course is not enough | https://docs.python.org/3/tutorial/ |

## ⚖️ Fixed Rules

1. Fast-forward rule for Phase 1: the course is VIDEO-ONLY (it has no exercises), so the check lives OUTSIDE it — before each course section, do a 5-minute self-check: solve one matching mini-exercise on Exercism Python or HackerRank Python. Passed easily → skim that section at 1.5x or skip it. Struggled → watch it fully. Never sit through what you already know.
2. Friday project day always ends with a real GitHub push and a clear English commit message. These repos ARE your AI-engineer portfolio.
3. Thursday re-solve is never skipped: your solved-problem history lives on the platforms (Exercism solutions page, HackerRank submissions) — pick an old one and solve it better.
4. Everything you build points at the work project: prefer work-like data and work-like problems in every Friday session. Before closing, write one line: "how does this help the project at work?"
5. Local first: the LLM track runs on YOUR machine (Ollama + Qwen). Cloud APIs are a comparison note, not the path.
6. Weekend is free. If a week slips, the week stretches; the order never changes. Certificates are taken when you arrive.

---
# 🟢 FAZ 1 — Python Deepening (Hafta 1-6)

### Hafta 1 — Kickoff

**Özet:** Restart Python following the course's real outline: basics, data types, type conversions and operators — with a 5-minute self-check before every section. Set up a clean dev environment and push your first script.
**Kaynak:** your Udemy Python course · https://www.kaggle.com/learn/python · https://exercism.org/tracks/python

- [ ] **[Pzt]** Self-check first: solve one easy exercise on Exercism Python (https://exercism.org/tracks/python) in the browser. Then open your Udemy Python course sections on basics, data types and type conversions: skim at 1.5x what the self-check proved you know; watch fully only what felt shaky. Note weak topics in a list (45-60 min)
- [ ] **[Salı]** Self-check first: one warm-up problem on HackerRank Python (https://www.hackerrank.com/domains/python). Then your Udemy course sections on operators (arithmetic, assignment, comparison, logical): skim at 1.5x or skip what you know, watch fully what you missed. Update your weak-topics list (45-60 min)
- [ ] **[Çar]** Go to Kaggle Learn Python (https://www.kaggle.com/learn/python) and complete Lessons 1-2 ("Hello, Python" and "Functions and Getting Help") in the browser. It is free and repeats the same ideas in English — good language practice too (45-60 min)
- [ ] **[Per]** Open Exercism Python (https://exercism.org/tracks/python), join the track, and solve 2 easy exercises in the browser editor. The tests run on the site, so you need no local setup (45-60 min)
- [ ] **[Cum]** PROJECT: Install Python and VS Code, create a venv, and write your first utility script — a folder organizer that sorts files in a folder by type. Create a GitHub repo named "python-journey" and push the script with a short commit message (45-60 min)

### Hafta 2 — Conditionals, Lists and Loops

**Özet:** The course's control-flow block: conditionals, lists, for/while and break/continue. Kaggle covers the same ground in English this week — perfect double exposure.
**Kaynak:** your Udemy Python course · https://www.kaggle.com/learn/python · https://exercism.org/tracks/python · https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Self-check first: one conditionals/lists mini-exercise on Exercism Python (https://exercism.org/tracks/python). Then your Udemy course sections on conditional statements and lists: skim at 1.5x what you know, watch fully what you missed (45-60 min)
- [ ] **[Salı]** Self-check first: one loops problem on HackerRank Python (https://www.hackerrank.com/domains/python). Then your Udemy course sections on for/while loops and break/continue: same skim-or-watch rule (45-60 min)
- [ ] **[Çar]** On Kaggle Learn Python (https://www.kaggle.com/learn/python) complete Lessons 3-4 ("Booleans and Conditionals" and "Lists") in the browser (45-60 min)
- [ ] **[Per]** Solve 1 new exercise on Exercism Python (https://exercism.org/tracks/python) or HackerRank Python (https://www.hackerrank.com/domains/python), then RE-SOLVE 1 old problem from your platform history without looking at your old answer (45-60 min)
- [ ] **[Cum]** PROJECT: Write a CSV-processing script in "python-journey": read a CSV file (e.g., an export like the ones at work), filter rows by a condition, and print a small summary (counts, totals). Use functions, not one long block. Push to GitHub (45-60 min)

### Hafta 3 — Strings and Dictionaries

**Özet:** The course's text-and-data block: character strings, string methods, list methods and dictionaries — the day-to-day tools of data work.
**Kaynak:** your Udemy Python course · https://www.kaggle.com/learn/python · https://exercism.org/tracks/python · https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Self-check first: one string-manipulation exercise on Exercism Python (https://exercism.org/tracks/python). Then your Udemy course sections on character strings and string methods: skim at 1.5x what you know, watch fully what you missed (45-60 min)
- [ ] **[Salı]** Self-check first: one dictionary problem on HackerRank Python (https://www.hackerrank.com/domains/python). Then your Udemy course sections on list methods and dictionaries: same skim-or-watch rule. Try 5 dict operations in a scratch file (45-60 min)
- [ ] **[Çar]** On Kaggle Learn Python (https://www.kaggle.com/learn/python) complete Lesson 5 ("Loops and List Comprehensions") in the browser. If time is left, redo the hardest exercise from Lessons 1-4 (45-60 min)
- [ ] **[Per]** Solve 1 new OOP-flavored exercise on Exercism Python (https://exercism.org/tracks/python) or a Classes problem on HackerRank Python (https://www.hackerrank.com/domains/python), then RE-SOLVE 1 old problem from your platform history (45-60 min)
- [ ] **[Cum]** PROJECT: Build a dictionary-based report tool in "python-journey": take the CSV from Week 2 and produce a per-category summary using dicts (counts, totals per group), printed as a small readable report. Push to GitHub (45-60 min)

### Hafta 4 — Functions, Recursion and Errors

**Özet:** The course's functions block: functions, recursive functions and error handling — plus a robust CLI tool that does not crash on bad input.
**Kaynak:** your Udemy Python course · https://www.kaggle.com/learn/python · https://exercism.org/tracks/python · https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Self-check first: one functions exercise on Exercism Python (https://exercism.org/tracks/python). Then your Udemy course sections on functions and recursive functions: skim at 1.5x what you know, watch fully what you missed. Write one small recursive function yourself (45-60 min)
- [ ] **[Salı]** Self-check first: one exceptions-flavored problem on HackerRank Python (https://www.hackerrank.com/domains/python). Then your Udemy course sections on error handling (try/except, raising): same skim-or-watch rule (45-60 min)
- [ ] **[Çar]** On Kaggle Learn Python (https://www.kaggle.com/learn/python) complete Lesson 6 ("Strings and Dictionaries") in the browser (45-60 min)
- [ ] **[Per]** Solve 1 new exercise on Exercism Python (https://exercism.org/tracks/python) or HackerRank Python (https://www.hackerrank.com/domains/python), then RE-SOLVE 1 old problem from your platform history (45-60 min)
- [ ] **[Cum]** PROJECT: Build a robust CLI tool in "python-journey": use argparse for arguments, handle bad input with clear error messages (no raw tracebacks), and read/write files safely. Example: a tool that cleans or converts a CSV. Push to GitHub (45-60 min)

### Hafta 5 — OOP and Polymorphism

**Özet:** The course's final block: classes, objects, inheritance and polymorphism — the bridge from your C# knowledge to Python style. Finish the Kaggle course and claim your certificate.
**Kaynak:** your Udemy Python course · https://www.kaggle.com/learn/python · https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Self-check first: one classes exercise on Exercism Python (https://exercism.org/tracks/python). Then your Udemy course OOP sections (classes, `__init__`, methods): skim at 1.5x what you know from C#, watch fully what is Python-specific. Note 3 differences from C# (45-60 min)
- [ ] **[Salı]** Your Udemy course sections on inheritance and polymorphism (plus special methods like `__str__`): same skim-or-watch rule. Write one small class hierarchy of your own to test the ideas (45-60 min)
- [ ] **[Çar]** On Kaggle Learn Python (https://www.kaggle.com/learn/python) complete Lesson 7 ("Working with External Libraries") and claim your COMPLETION CERTIFICATE. Save the certificate link or image — it goes on your profile later (45-60 min)
- [ ] **[Per]** On HackerRank Python (https://www.hackerrank.com/domains/python) solve a set of medium-difficulty problems (aim for 3). Note which topics still feel slow (45-60 min)
- [ ] **[Cum]** PROJECT: Refactor your "python-journey" scripts into classes: e.g., a `FileOrganizer` class and a `CsvReport` class, each in its own file, using what the OOP week taught. Keep behavior the same, make the code cleaner. Push to GitHub (45-60 min)

### Hafta 6 — Course Gaps and Phase Final

**Özet:** The course does NOT cover file I/O, modules/venv, comprehensions, generators or decorators — close those gaps from the official tutorial and Kaggle, then finish with the free timed certification.
**Kaynak:** your Udemy Python course · https://docs.python.org/3/tutorial/ · https://www.hackerrank.com/domains/python · https://www.hackerrank.com/skills-verification/python_basic

- [ ] **[Pzt]** COURSE GAP DAY 1: from the official Python tutorial (https://docs.python.org/3/tutorial/) read the "Input and Output" and "Modules" chapters — file reading/writing with `with`, imports, packages. Then apply: add requirements.txt and a clean package folder to "python-journey" (45-60 min)
- [ ] **[Salı]** COURSE GAP DAY 2: comprehensions, generators, decorators. You met comprehensions in Kaggle Lesson 5 — now rewrite 3 of your old loops as comprehensions; then, using the official tutorial (https://docs.python.org/3/tutorial/), write one tiny generator and one tiny decorator (e.g., a timer). Review your weak-topics list from Weeks 1-5 and rewatch only those course videos (45-60 min)
- [ ] **[Çar]** On HackerRank Python (https://www.hackerrank.com/domains/python) do timed practice: pick 3 medium problems and give yourself 15 minutes each. This is a warm-up for Friday's exam format (45-60 min)
- [ ] **[Per]** RE-SOLVE marathon: pick 3 old problems from your Exercism/HackerRank history and solve them again from scratch, without looking at your old code. Fast and clean is the goal (45-60 min)
- [ ] **[Cum]** 🏁 Take the FREE timed HackerRank "Python (Basic)" certification: 90 minutes, 2 questions (https://www.hackerrank.com/skills-verification/python_basic). After the exam, tidy the "python-journey" repo: update the README with what you built in Phase 1 and add the certificate link (~90 min)
# 🔵 FAZ 2 — Data and Classical ML (Hafta 7-12)

### Hafta 7 — Pandas I

**Özet:** Start working with real data. Learn the basics of pandas on Kaggle Learn: how to create, read, select and summarize data. On Friday you explore a real CSV file with your new skills.
**Kaynak:** https://www.kaggle.com/learn/pandas • https://exercism.org/tracks/python • https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Open the Kaggle Pandas course (https://www.kaggle.com/learn/pandas) and complete Lesson 1 (Creating, Reading and Writing) and Lesson 2 (Indexing, Selecting, Assigning). Read the tutorial pages carefully and run the code cells in the browser. (45-60 min)
- [ ] **[Salı]** Continue the Kaggle Pandas course (https://www.kaggle.com/learn/pandas) and complete Lesson 3 (Summary Functions and Maps). Take short notes: which pandas function does what? (45-60 min)
- [ ] **[Çar]** Go back to the Kaggle Pandas course (https://www.kaggle.com/learn/pandas) and finish the hands-on exercises of Lessons 1-3. Try to solve each exercise yourself before you look at the hint. (45-60 min)
- [ ] **[Per]** Python upkeep: solve one new kata on Exercism (https://exercism.org/tracks/python) or HackerRank (https://www.hackerrank.com/domains/python). Then re-solve one old problem from your platform history without looking at your previous answer. (45-60 min)
- [ ] **[Cum]** PROJECT: On your own computer, load a real CSV file about a topic you care about (for example football, movies, or prices). Explore it with pandas: check .shape, .dtypes, .head() and .value_counts(). Commit the notebook or script to your GitHub repo. (45-60 min)

### Hafta 8 — Pandas II

**Özet:** Finish the pandas course and claim your first Kaggle certificate. Learn grouping, sorting, data types, missing values and combining data. On Friday you clean a messy dataset like a real data engineer.
**Kaynak:** https://www.kaggle.com/learn/pandas • https://exercism.org/tracks/python • https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** In the Kaggle Pandas course (https://www.kaggle.com/learn/pandas), complete Lesson 4 (Grouping and Sorting) and Lesson 5 (Data Types and Missing Values). Run every code example yourself. (45-60 min)
- [ ] **[Salı]** Complete Lesson 6 (Renaming and Combining) in the Kaggle Pandas course (https://www.kaggle.com/learn/pandas). Then finish any open steps and claim your Pandas COMPLETION CERTIFICATE from the course page. (45-60 min)
- [ ] **[Çar]** Finish the remaining exercises of the Kaggle Pandas course (https://www.kaggle.com/learn/pandas). Then practice groupby on your own: take any dataset and answer two questions with .groupby() (for example: average value per category). (45-60 min)
- [ ] **[Per]** Python upkeep: solve one new kata on Exercism (https://exercism.org/tracks/python) or HackerRank (https://www.hackerrank.com/domains/python). Then re-solve one old problem from your platform history from memory. (45-60 min)
- [ ] **[Cum]** PROJECT: Take a messy dataset (or make your CSV from last week messy) and clean it with pandas: fix missing values, wrong data types and duplicate rows. Write a short English summary of what you fixed and push everything to GitHub. (45-60 min)

### Hafta 9 — First Models

**Özet:** Machine learning starts here. The Kaggle Intro to ML course shows how models work, how to build your first model and how to validate it. On Friday you train your first decision tree.
**Kaynak:** https://www.kaggle.com/learn/intro-to-machine-learning • https://exercism.org/tracks/python • https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Start the Kaggle Intro to Machine Learning course (https://www.kaggle.com/learn/intro-to-machine-learning). Complete Lesson 1 (How Models Work) and Lesson 2 (Basic Data Exploration). (45-60 min)
- [ ] **[Salı]** Continue the Intro to ML course (https://www.kaggle.com/learn/intro-to-machine-learning). Complete Lesson 3 (Your First Machine Learning Model) and Lesson 4 (Model Validation). Make sure you understand why we split data into train and validation sets. (45-60 min)
- [ ] **[Çar]** Do the hands-on exercises of Lessons 1-4 in the Intro to ML course (https://www.kaggle.com/learn/intro-to-machine-learning). Write one sentence in English for each lesson: what did I learn? (45-60 min)
- [ ] **[Per]** Python upkeep: solve one new kata on Exercism (https://exercism.org/tracks/python) or HackerRank (https://www.hackerrank.com/domains/python). Then re-solve one old problem from your platform history without looking at your previous answer. (45-60 min)
- [ ] **[Cum]** PROJECT: Train your first DecisionTreeRegressor (or classifier) locally. First repeat it on the course data, then try it on YOUR dataset from Week 7-8. Compare the results and commit the notebook to GitHub. (45-60 min)

### Hafta 10 — Model Quality

**Özet:** Learn why models fail: underfitting and overfitting. Meet random forests, claim your Intro to ML certificate, and learn the scikit-learn way of building pipelines. On Friday you build a full pipeline.
**Kaynak:** https://www.kaggle.com/learn/intro-to-machine-learning • https://scikit-learn.org/stable/getting_started.html • https://exercism.org/tracks/python • https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** In the Intro to ML course (https://www.kaggle.com/learn/intro-to-machine-learning), complete Lesson 5 (Underfitting and Overfitting) and Lesson 6 (Random Forests). Note the difference between a single tree and a forest. (45-60 min)
- [ ] **[Salı]** Complete Lesson 7 (the final lesson) of the Intro to ML course (https://www.kaggle.com/learn/intro-to-machine-learning) and its exercises. Then claim your Intro to ML COMPLETION CERTIFICATE from the course page. (45-60 min)
- [ ] **[Çar]** Read the official scikit-learn Getting Started guide (https://scikit-learn.org/stable/getting_started.html). Run the examples yourself: estimators, fit/predict, transformers and pipelines. This is the library you will use at work. (45-60 min)
- [ ] **[Per]** Python upkeep: solve one new kata on Exercism (https://exercism.org/tracks/python) or HackerRank (https://www.hackerrank.com/domains/python). Then re-solve one old problem from your platform history from memory. (45-60 min)
- [ ] **[Cum]** PROJECT: Build a scikit-learn Pipeline (preprocessing + model) for a classification task on work-like synthetic data. You can generate the data with make_classification. Train it, print a simple accuracy score, and push the code to GitHub. (45-60 min)

### Hafta 11 — Intermediate ML I

**Özet:** Level up with the Kaggle Intermediate ML course: handle missing values and categorical variables the right way, and put everything into pipelines. On Friday you add cross-validation to your own project.
**Kaynak:** https://www.kaggle.com/learn/intermediate-machine-learning • https://exercism.org/tracks/python • https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** Start the Kaggle Intermediate Machine Learning course (https://www.kaggle.com/learn/intermediate-machine-learning). Complete Lesson 1 (Introduction) and Lesson 2 (Missing Values). (45-60 min)
- [ ] **[Salı]** Continue the Intermediate ML course (https://www.kaggle.com/learn/intermediate-machine-learning). Complete Lesson 3 (Categorical Variables) and Lesson 4 (Pipelines). Compare this pipeline lesson with the scikit-learn guide from last week. (45-60 min)
- [ ] **[Çar]** Do the hands-on exercises of Lessons 1-4 in the Intermediate ML course (https://www.kaggle.com/learn/intermediate-machine-learning). Focus on the missing values and categorical variables exercises — you will need them at work. (45-60 min)
- [ ] **[Per]** Python upkeep: solve one new kata on Exercism (https://exercism.org/tracks/python) or HackerRank (https://www.hackerrank.com/domains/python). Then re-solve one old problem from your platform history without looking at your previous answer. (45-60 min)
- [ ] **[Cum]** PROJECT: Apply cross-validation to your model from Week 10 and try to improve it (better features, better parameters). Log your metrics (before and after) in the README of your GitHub repo in English. (45-60 min)

### Hafta 12 — Titanic Milestone

**Özet:** The big week. Finish Intermediate ML (XGBoost and data leakage), claim the certificate, and then enter your first Kaggle competition: submit a real Titanic prediction and describe it in English.
**Kaynak:** https://www.kaggle.com/learn/intermediate-machine-learning • https://www.kaggle.com/competitions/titanic • https://exercism.org/tracks/python • https://www.hackerrank.com/domains/python

- [ ] **[Pzt]** In the Intermediate ML course (https://www.kaggle.com/learn/intermediate-machine-learning), complete the cross-validation and XGBoost lessons with their exercises. XGBoost is one of the most used models in real projects. (45-60 min)
- [ ] **[Salı]** Complete the final data leakage lesson of the Intermediate ML course (https://www.kaggle.com/learn/intermediate-machine-learning) and its exercises. Then claim your Intermediate ML COMPLETION CERTIFICATE from the course page. (45-60 min)
- [ ] **[Çar]** Titanic preparation: read the Kaggle Titanic competition page (https://www.kaggle.com/competitions/titanic) — the description, the data page and the rules. Write a short plan in English: which features will you use, which model will you start with? (45-60 min)
- [ ] **[Per]** Python upkeep: solve one new kata on Exercism (https://exercism.org/tracks/python) or HackerRank (https://www.hackerrank.com/domains/python). Then re-solve one old problem from your platform history from memory. (45-60 min)
- [ ] **[Cum]** 🏁 MILESTONE PROJECT: Build and train your model for the Kaggle Titanic competition (https://www.kaggle.com/competitions/titanic) and SUBMIT your first entry. Then write an English README in your GitHub repo describing your approach: features, model, score, and what you want to try next. (90 min)
# 🔴 FAZ 3 — Local LLM Engineering: Ollama + Qwen (Hafta 13-20)

### Hafta 13 — Talk to Your Model

**Özet:** You start talking to your installed Qwen model (https://ollama.com/library/qwen3) from code. First with the REST API, then with the official Python library. On Friday you start your project repo "local-ai-lab" with a clean chat script.
**Kaynak:** Ollama REST API (https://docs.ollama.com/api), ollama-python (https://github.com/ollama/ollama-python), Qwen variants (https://ollama.com/library/qwen3)

- [ ] **[Pzt]** Read the Ollama REST API docs at https://docs.ollama.com/api. Send a chat request to your installed Qwen model with curl, then do the same with Python `requests`. Print the answer. (45-60 min)
- [ ] **[Salı]** Install the official Python library from https://github.com/ollama/ollama-python (`pip install ollama`). Rewrite yesterday's chat in Python with `ollama.chat`, then turn on streaming and print the tokens as they arrive. (45-60 min)
- [ ] **[Çar]** Sklearn upkeep: open your Titanic notebook from https://www.kaggle.com/competitions/titanic and make ONE improvement to your pipeline (a new feature or a better model setting). Check if your score changes. (45-60 min)
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
- [ ] **[Çar]** Sklearn upkeep: revisit https://scikit-learn.org/stable/getting_started.html and practice one thing you feel weak on (pipelines, cross-validation, or a new model type) on the Titanic data. (45-60 min)
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
- [ ] **[Çar]** Sklearn upkeep: try one more Titanic improvement on https://www.kaggle.com/competitions/titanic — for example a different model or better feature encoding — and submit if the local score looks better. (45-60 min)
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

**Özet:** Your RAG chatbot becomes a real local service this week. You expose it as a small web API with FastAPI or Flask, and you also serve your sklearn Titanic model behind the same API. One service, two brains: LLM and classical ML.
**Kaynak:** FastAPI or Flask official docs (choose one, follow it), Ollama API (https://docs.ollama.com/api), scikit-learn (https://scikit-learn.org/stable/getting_started.html)

- [ ] **[Pzt]** Choose FastAPI or Flask and follow its official docs to build a hello-world web API locally. Add one POST endpoint that receives JSON and returns JSON. (45-60 min)
- [ ] **[Salı]** Connect the API to your RAG code: a `/chat` endpoint that takes a question, runs retrieval + Qwen (via https://docs.ollama.com/api), and returns the answer with sources. Define simple request/response models. (45-60 min)
- [ ] **[Çar]** Sklearn upkeep: save your trained Titanic model with joblib, then load it inside the API and test a prediction from Python. Refresh basics at https://scikit-learn.org/stable/getting_started.html if needed. (45-60 min)
- [ ] **[Per]** Kata day: one new exercise on https://exercism.org/tracks/python plus one re-solve from your old solutions. (45-60 min)
- [ ] **[Cum]** PROJECT: finish the local API that serves BOTH endpoints: `/chat` (RAG + Qwen) and `/predict` (your joblib-loaded sklearn model). Test both with curl or requests and push to "local-ai-lab". (45-60 min)

### Hafta 20 — Finals

**Özet:** Final week: you review the whole journey from Python basics to a local AI stack. Interview answers in English, one more course chapter, a last Titanic attempt, a re-solve marathon, and a demo day where everything runs end to end.
**Kaynak:** HF LLM course (https://huggingface.co/learn/llm-course/chapter1/1), Titanic (https://www.kaggle.com/competitions/titanic), Exercism (https://exercism.org/tracks/python)

- [ ] **[Pzt]** Review your whole journey and write 5 short English interview answers in a notes file: "How does RAG work?", "What is overfitting?", "What is an embedding?", "Why run an LLM locally?", "How do you evaluate a model?". (45-60 min)
- [ ] **[Salı]** Go back to the Hugging Face LLM course (start at https://huggingface.co/learn/llm-course/chapter1/1) and skim one more chapter of your choice. Note 3 new things you learned. (45-60 min)
- [ ] **[Çar]** Final Titanic score attempt on https://www.kaggle.com/competitions/titanic: apply your best ideas from the last 8 weeks and make one last submission. Compare with your Phase 2 score. (45-60 min)
- [ ] **[Per]** Re-solve marathon: pick 3 OLD problems from your https://exercism.org/tracks/python and HackerRank history and solve them again from scratch, no peeking. (45-60 min)
- [ ] **[Cum]** 🏁 FINAL: demo day — run the local RAG chatbot and the ML API end to end on your machine. Make sure both repos have English READMEs with short architecture notes, and list 3 things to bring into your work project next week. (90 min)

---

## 📈 Checkpoints

| Week | Event | Goal |
|---|---|---|
| 5 | Kaggle Python course certificate | Claimed |
| 6 | 🏁 HackerRank Python (Basic) certification (free, timed, 90 min) | Pass |
| 8 | Kaggle Pandas certificate | Claimed |
| 10 | Kaggle Intro to ML certificate | Claimed |
| 12 | 🏁 First Kaggle Titanic submission + Intermediate ML certificate | Submitted + English README |
| 17 | 🚀 RAG v1: question → Chroma → Qwen answer, over YOUR documents | Works end-to-end locally |
| 20 | 🏁 FINAL: local RAG chatbot + sklearn model behind one local API | Demo runs; READMEs done; 3 takeaways written for the work project |

If a certification or milestone fails: read what went wrong, put the weak topic into Thursday practice for 2 weeks, retry. The plan stretches; the order never changes.
