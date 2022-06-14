#!/bin/bash

docker build -t jomartz/kerntopp.shop:v0.1 . --no-cache
docker image push jomartz/kerntopp.shop:v0.1