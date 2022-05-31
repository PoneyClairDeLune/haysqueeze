#!/bin/bash
esbuild --bundle src/dev.js --outdir=dist --minify --sourcemap --watch
exit
