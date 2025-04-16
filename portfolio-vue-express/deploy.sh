#!/usr/bin/env sh

# עצור בשגיאה
set -e

# עבור לתיקיית הקליינט
cd client

# בנה את הפרויקט
npm run build

# עבור לתיקיית הבנייה
cd dist

git init
git add -A
git commit -m 'deploy'

#https://sahareitam.github.io/Personal-website/
git push -f https://github.com/sahareitam/Personal-website.git master:gh-pages

cd -