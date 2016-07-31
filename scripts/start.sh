#!/bin/bash
export FLASK_APP="server/entry.py"
node server.js &
flask run
