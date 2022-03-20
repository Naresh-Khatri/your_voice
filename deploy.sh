#!/bin/bash

echo script started
quasar build
cd dist/spa/
ls
git init
git remote add origin https://github.com/Naresh-Khatri/your_voice.git
git checkout -b gh-pages
git status
git add .

git status
git commit -m 'Initial commit'
#git pull origin gh-pages --allow-unrelated-histories
git push origin gh-pages --force
