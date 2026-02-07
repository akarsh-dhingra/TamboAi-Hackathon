#!/bin/sh
# Run from expense-tracker-backend root: sh scripts/push-setup.sh
# Then add your remote and push: git remote add origin <your-repo-url> && git push -u origin main

set -e
cd "$(dirname "$0")/.."

if [ ! -d .git ]; then
  git init
  git add .
  git commit -m "Db added "
  git branch -M main
  echo "Done. Add remote and push: git remote add origin <repo-url> && git push -u origin main"
else
  git add .
  git status
  echo "Repo exists. Commit with: git commit -m \"Db added \" then push."
fi
