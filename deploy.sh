#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

#https://sahareitam.github.io/Personal-website/
git push -f https://github.com/sahareitam/Personal-website.git master:gh-pages

cd -