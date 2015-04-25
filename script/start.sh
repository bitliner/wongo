#!/bin/bash

SCRIPT_HOME="$( cd "$( dirname "$0" )" && pwd )"
cd $SCRIPT_HOME/..

cd node-webkit-app
./nw ./app.nw
