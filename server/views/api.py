# -*- coding: utf-8 -*-

import json
from flask import render_template, Blueprint, request
from models import Friend, Graph, GraphStatistics
from flask import Flask, request, jsonify
from utils import parse_filters, db_file

api_view = Blueprint('api', __name__)

friend = Friend(db_file('melomanos.txt'), db_file('relaciones.txt'))

@api_view.route('/filter')
def filter():
  ## canciones[between]=0,20&sexo[equal]=mujer  
  filters = parse_filters(request.args.items())
  gph = Graph()
  people, friendships = friend.filter(filters)
  statistics = GraphStatistics(gph, people)
  for k, p in people.iteritems():
    gph.add_node(p['usuario'])
  for f in friendships:
    gph.add_edge([f['usuario_1'], f['usuario_2']], songs=f['canciones'])
  st = statistics.compute()
  return jsonify({
    'statistics': st, 
    'graph': {
      'nodes': {k:p for k, p in friend.people().iteritems() if k in people},
      'links': [f for f in friend.friendships() if f['usuario_1'] in friendships and f['usuario_2'] in friendships]
    }
  })