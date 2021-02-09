#!/bin/bash -x

pwd=`readlink -f $(dirname $0)`

docker build --build-arg CONFIG_DIR=$pwd -t gitlab-ce-custom $pwd

