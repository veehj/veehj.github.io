#!/bin/bash

jekyll build
touch _site/.nojekyll
node gh-pages.js