from utils import divide

""" Graph Statistics

An undirected graph implementation
"""
class GraphStatistics(object):
  def __init__(self, graph, nodes):
    self.graph = graph
    self.nodes = nodes
    self.statistics = {
      'women_count': 0,
      'men_count': 0,
      'likes_total': 0,
      'age_total': 0,
      'friends_women_count': 0,
      'friends_men_count': 0,
      'friends_age_total': 0,
      'shared_songs': 0,
      'shared_songs_total_group': {},
      'shared_songs_avg_group': {},
    }
    self.groups = []
    self.friends = set()
    self.graph.on_add_edge(self.analyze_edge)
    self.graph.on_visit_node(self.analyze_node)  
  
  # To finish  
  def analyze_group(self):
    for k, group in enumerate(self.graph.groups):
      shared_songs = 0
      friendships = 0
      for edge in self.graph.edges:
        if edge[0] in group or edge[1] in group:
          friendships += 1
          shared_songs += int(edge[2]['songs'])

      self.statistics['shared_songs_total_group'][k] = shared_songs
      self.statistics['shared_songs_avg_group'][k] = divide(shared_songs, friendships) if shared_songs else 0

  def analyze_node(self, node):
    n = self.nodes[node]
    if n['sexo'] == 'mujer':
      self.statistics['women_count'] += 1
    if n['sexo'] == 'hombre':
      self.statistics['men_count'] += 1

    self.statistics['likes_total'] += int(n['likes'])
    self.statistics['age_total'] += int(n['edad'])

  def analyze_edge(self, edge, data):
    # Because relation is bidirectional
    for node in edge:
      if node not in self.friends:
        self.friends.add(node)

        if self.nodes[node]['sexo'] == 'mujer':
          self.statistics['friends_women_count'] += 1
        elif self.nodes[node]['sexo'] == 'hombre':
          self.statistics['friends_men_count'] += 1

        self.statistics['friends_age_total'] += int(self.nodes[node]['edad'])
    self.statistics['shared_songs'] += int(data['songs'])

  def compute(self):
    if not(self.graph.processed()): self.graph.process()
    user_count = len(self.graph)
    self.analyze_group()
    self.statistics.update({
      'subgroups' : len(self.graph.groups),
      'user_count': user_count,
      'like_avg': divide(self.statistics['likes_total'], user_count),
      'age_avg': divide(self.statistics['age_total'], user_count),
      'friends_avg': divide(len(self.friends), user_count),
      'friends_age_avg':divide(self.statistics['friends_age_total'], len(self.friends)),
    })
    return self.statistics