#!/bin/bash

GIT_PAGES_DEPLOY=/c/minHong/project/HongChaeMin.github.io
GIT_PAGES_BUILD=/c/minHong/project/nuxt/github-pages

echo " >>> move build project "
cd $GIT_PAGES_BUILD

echo " >>> start project build "
yarn run generate

echo " >>> copy building project "
cp -r $GIT_PAGES_BUILD/dist/** $GIT_PAGES_DEPLOY/

echo " >>> github committing "

read -p " >>> please commit version : " version
echo " >>> input version : $version "

cd $GIT_PAGES_DEPLOY
git checkout main
git add --all
git commit -m "feat(pages): deploy version $version"
git push

echo " >>> success deploy! "
