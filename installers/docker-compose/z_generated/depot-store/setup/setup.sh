#!/bin/bash

sleep 5

curl -v -X GET "http://legend-depot-store:6201/depot-store/api/queue/PROD-1234/org.finos.legend.demo/legend-query/1.0.2?maxRetries=5" -H "accept: text/plain"
