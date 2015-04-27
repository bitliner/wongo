#!/bin/bash



PORT=3000


SCRIPT_HOME="$( cd "$( dirname "$0" )" && pwd )"
cd $SCRIPT_HOME/..


function start() {
	sudo docker run -p "$PORT":3000 -d -e MONGODB_HOST=172.17.42.1 -e MONGODB_PORT=27017 --name mongo-express bitliner/mongo-express
}
function build() {
	sudo docker build -t bitliner/mongo-express .
}
function logs() {
	sudo docker logs mongo-express 
}
function stop() {
	sudo docker stop mongo-express
	sudo docker rm mongo-express
}
function run() {
	stop 
	build && start
}

function usage() {
	echo -e "Commands:"
	echo -e "\t run"
	echo -e "\t stop"
	echo -e "\t build"
	echo -e "\t start"
	echo -e "\t logs"
}
case $1 in
        run)
                run;;
        build)
                build;;
        start)
                start;;
        stop)
                stop;;
        logs)
                logs;;
        *)
                usage
                exit 1
        ;;
esac
