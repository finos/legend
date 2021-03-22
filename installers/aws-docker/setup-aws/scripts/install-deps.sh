#!/bin/bash

yum install git -y

yum install docker -y

yum install python3 -y

yum install jq -y

yum install httpie -y

yum install java

wget https://corretto.aws/downloads/latest/amazon-corretto-11-x64-linux-jdk.tar.gz
tar xvzf amazon-corretto-11-x64-linux-jdk.tar.gz
mv amazon-corretto-11.0.6.10.1-linux-x64 /home/ec2-user/

service docker start
