#!/bin/bash

SCRIPT_HOME="$( cd "$( dirname "$0" )" && pwd )"
cd $SCRIPT_HOME

run() {
	cd ../tokumx-2.0.0-linux-x86_64/bin
	./mongod --dbpath "$(pwd)"/../data/
}

usage() {
	echo -e 'Commands'
	echo -e '\t\trun'
}

case $1 in
        run)
                run;;
        *)
                usage
                exit 1
        ;;
esac
