# Expense Tracker Backend

Express API with Prisma and PostgreSQL.

## Setup

1. `npm install`
2. Copy `.env.example` to `.env` and set `DATABASE_URL` and `PORT`.
3. Run migrations: `npx prisma migrate deploy` (ensure Prisma is installed if needed).

## Run

- `npm run dev` — development (nodemon)
- `npm start` — production

## Push to main repo

From this folder (`expense-tracker-backend`):

```bash
# If this folder is not yet a git repo:
git init
git add .
git commit -m "Db added "
git branch -M main

# Add your remote (replace with your repo URL):
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git

# Push to main:
git push -u origin main
```

If the repo is already initialized, just stage and commit then push:

```bash
git add .
git commit -m "Db added "
git push origin main
```
