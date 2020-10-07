#!/bin/sh

if [ "$NODE_ENV" == "production" ] ; then
  npm run start
else
  npm run migrate && npm run seed && npm run start
fi

