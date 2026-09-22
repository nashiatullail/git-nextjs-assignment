# My App — Git, GitHub, Next.js & Better Auth Assignment

## Project Overview
This repository is a practical assignment covering Git/GitHub team workflow,
a basic Next.js frontend (Home, Login, Sign Up pages), and research into
authentication using Better Auth.

---

## Task 1 — Git & GitHub Commands Used

Below is every Git command used in this project, what it does, and the order
it was used in.

| # | Command | What it does |
|---|---------|---------------|
| 1 | `git clone <url>` | Copies the GitHub repository to my computer |
| 2 | `git status` | Shows which files have been changed / are untracked |
| 3 | `git add <file>` | Stages a file so it is included in the next commit |
| 4 | `git commit -m "message"` | Saves the staged changes to the project history |
| 5 | `git push origin main` | Uploads local commits to GitHub (main branch) |
| 6 | `git branch development` | Creates a new branch called `development` |
| 7 | `git switch development` | Moves my working directory to the `development` branch |
| 8 | `git add .` / `git commit -m "..."` | Staged and committed changes made in the `development` branch |
| 9 | `git push origin development` | Uploaded the `development` branch to GitHub |
| 10 | `git switch main` | Switched back to the `main` branch |
| 11 | `git merge development` | Brought the `development` branch's changes into `main` |
| 12 | `git push origin main` | Uploaded the merged `main` branch to GitHub |
| 13 | `git log` | Viewed the commit history |
| 14 | `git pull` | Fetched and merged the latest changes from GitHub before starting new work |
| 15 | `git remote -v` | Confirmed which GitHub URL this repo is connected to |

**Order used in this project:**
`git clone` → `git status` → `git add` → `git commit` → `git push` (main) →
`git branch` → `git switch` (development) → `git add`/`git commit` (development work) →
`git push` (development) → `git switch` (main) → `git merge` → `git push` (main)

---

## Task 2 — Next.js Application

- Built with Next.js (App Router) + TypeScript + Tailwind CSS.
- Pages:
  - `/` — Home page (shows a welcome message when the user is "logged in")
  - `/login` — Login form (email, password)
  - `/signup` — Sign up form (name, email, password, confirm password)
- No backend or database is used in this task — login/sign up are simulated.

**Live deployment:** _add your Vercel link here_

---

## Task 3 — What I Learned About Better Auth

<!-- Write this section in your own words after reading
     https://www.better-auth.com/docs/introduction -->

- **What is authentication?**
  _(your explanation here)_

- **What is Better Auth?**
  _(your explanation here)_

- **Why use an authentication library instead of building it yourself?**
  _(your explanation here)_

- **Authentication vs. authorization**
  _(your explanation here)_

- **Session management**
  _(your explanation here)_

- **Email/password authentication**
  _(your explanation here)_

- **How Better Auth integrates with Next.js**
  _(your explanation here)_

- **Client-side vs. server-side authentication**
  _(your explanation here)_

---

## Optional Task 4 — Better Auth Implementation

_(If attempted, describe what you tried and how far you got.)_