#!/bin/sh

create-react-app temp > /dev/null 2> /dev/null
mv temp/node_modules/ /home/pokindex/
rm -R ./temp/
npm install --reinstall > /dev/null 2> /dev/null
npm start
