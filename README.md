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

- - **What is authentication?**
  _(Authentication is a process by which a system verifies a person. It is a process that the system does to verify that it's you. E.g. you enter your email and password to login to any app, the system checks that password or email against their existing data to see if it's the same or not. If it matches the existing data, then it confirms that it's the right person, then it allows you to login and access the app.)_

- **What is Better Auth?**
  _(It is a ready-made tool or library that has ready-made login/sign-up systems for developers, so that developers use them instead of making their own from scratch. Email/password login, login from Google, 2FA (extra security), session tracking — everything is already coded, you only need to install and use it in your system. It can be used in any TypeScript project.)_

- **Why use an authentication library instead of building it yourself?**
  _(Because making a login/sign-up system from scratch is very difficult and also very risky. A small mistake allows hackers to access any user's account. When we make it ourselves, there is a higher security risk and it is more time-consuming. That's why we use Better Auth, because it is already tested.)_

- **Authentication vs. authorization**
  _(Authentication verifies who you are, while authorization verifies what you are allowed to do. This means authentication includes the login process, and authorization includes checking whether the user is a normal user or an admin who has access to many user profiles.)_

- **Session management**
  _(After a user logs in, the server gives that user a specific session ID or token. Every time the user opens a new page, the browser shows that ID to the server, so it confirms that it's the same user, without needing to ask for the password every time. That session ID is lost after logout. This is session management.)_

- **Email/password authentication**
  _(It is the common way of authentication in which a user adds a combination of email and password, and later, at the time of login, uses the same combination to verify itself. Better Auth plays a very important role in this, because when a user enters their password, it converts it into a complex scrambled version called a "hash" and saves that hashed version into the database. The real password is not saved anywhere, so a hacker cannot access it — and even if they do, it is only the hashed version of the password, not the real one. At the time of login, both hashed versions of the passwords are compared.)_

- **How Better Auth integrates with Next.js**
  _(Integrating Better Auth into a Next.js project involves a few simple steps. First, the library is installed using npm install better-auth. Then, a configuration file is created to specify which authentication methods to use, such as email/password or Google sign-in. Next, Better Auth is connected to Next.js API routes, which is the server-side part of the application that handles login and signup requests. Finally, the frontend forms (the Login and Sign Up pages) are connected to send their data through Better Auth for processing.)_

- **Client-side vs. server-side authentication**
  _(Client-side authentication happens in the user's browser — for example, checking if the email field is empty before submitting the form. This is only basic UI validation and does not provide real security, since it can easily be bypassed. Server-side authentication is where the actual security check takes place: the password is sent to the server, compared against the stored data in the database, and the server decides whether the login attempt is valid. Real authentication should always happen on the server side, not just the client side.)_
---

## Optional Task 4 — Better Auth Implementation

_(If attempted, describe what you tried and how far you got.)_