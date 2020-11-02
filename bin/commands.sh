#!/bin/bash

if [ $1 == 'up' ]
    then
        docker-compose -f docker-compose.local.yml up --build -d
        cd ui
        yarn start
fi

if [ $1 == 'down' ]
    then
        docker-compose -f docker-compose.local.yml down
fi