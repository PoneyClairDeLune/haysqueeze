#!/bin/bash
esbuild --bundle src/index.js --outdir=dist --minify --sourcemap --watch
exit
