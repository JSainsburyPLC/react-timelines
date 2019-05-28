#!/bin/bash

# Fail on the first error, rather than continuing
set -e

cd "$(dirname "$0")"

COMMIT_EMAIL="${GITHUB_ACTOR}@users.noreply.github.com"
COMMIT_NAME="${GITHUB_ACTOR}"

git config --global user.email "${COMMIT_EMAIL}"
git config --global user.name "${COMMIT_NAME}"

npm install
npm run build
npm run deploy
