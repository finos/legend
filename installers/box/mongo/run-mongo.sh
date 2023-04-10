#!/bin/bash

#$MONGO_HOME/mongodb-linux-x86_64-ubuntu2204-6.0.5/bin/mongod  --dbpath $MONGO_HOME/data --logpath $MONGO_HOME/logs/mongod.log 

$MONGO_HOME/mongodb-linux-x86_64-ubuntu2204-6.0.5/bin/mongod --config /app/mongo/config/mongod.conf
