#!/usr/bin/env bash

rm -rf ./dist
tsc
node dist/app.js
