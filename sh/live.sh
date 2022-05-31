#!/bin/bash
rm -rv dist/*
esbuild --bundle src/dev.js --outdir=dist --sourcemap --watch --minify-whitespace --minify-syntax
exit
