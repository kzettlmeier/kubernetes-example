#!/bin/bash

while true
do
    curl $1:3000/example/test
    echo ""
    sleep 1
done