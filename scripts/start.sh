#!/bin/bash
source venv/bin/activate
export FLASK_APP="server/entry.py"
node server.js &
flask run
