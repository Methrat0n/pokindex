#!/bin/sh

create-react-app temp
mv temp/node_modules/ /home/pokindex/
rm -R ./temp/
npm install --reinstall
npm start