#!/bin/bash
mkdir -p dist
# Remove the dev files
rm -rv dist/*
# Using esbuild to build all JS files
esbuild --bundle src/index.js --outfile=dist/index.js --minify --sourcemap
esbuild --bundle src/index.js --target=es6 --outfile=dist/index.es6.js --minify --sourcemap
cd dist
# Bundle the built file
zip -r9v ../build_all.zip ./*
# Using gzip to produce a precompressed file
gzip -k9v *.js
gzip -k9v *.map
# Using brotli to produce a precompressed file
brotli -kvq 11 *.js
brotli -kvq 11 *.map
# Bundle the precompressed files too
zip -r3 ../build_min.zip ./*
# Remove and get all bundles inside the dist folder
rm -rv ./*
mv ../build_*.zip ./
exit
