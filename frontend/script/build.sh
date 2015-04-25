#!/bin/bash


SCRIPT_HOME="$( cd "$( dirname "$0" )" && pwd )"
cd $SCRIPT_HOME/..

grunt build
cp package.json ./dist/package.json
cd dist
zip -r app.nw *
cd ..
cp ./dist/app.nw ./node-webkit-app/app.nw