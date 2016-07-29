import os
import json
import copy
import pprint
from flask import Flask, request, jsonify
from models import Friend
from graph import Graph
from utils import parse_filters
from statistics import GraphStatistics

app = Flask(__name__)
data_dir = os.path.dirname(os.path.abspath(__file__)) + '/data'
friend = Friend(data_dir + '/melomanos.txt', data_dir + '/relaciones.txt')

@app.route("/filter")
def create_group():
  ## canciones[between]=0,20&sexo[equal]=mujer  
  filters = parse_filters(request.args.items())
  gph = Graph()
  people, friendships = friend.filter(filters)
  statistics = GraphStatistics(gph, people)
  for k, p in people.iteritems():
    gph.add_node(p['usuario'])
  for f in friendships:
    gph.add_edge([f['usuario_1'], f['usuario_2']], songs=f['canciones'])

  return jsonify(statistics.compute())

@app.route("/")
def index():
  return 'hello'

if __name__ == "__main__":
  app.run()