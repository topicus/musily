from collections import deque

""" Graph 

An undirected graph implementation
"""
class Graph(object):
  def __init__(self):
    self.graph = {}
    self.groups = []
    self.edges = []
    self.nodes = []
    self.__processed = False

  def add_node(self, node, key):
    if node[key] not in self.graph:
      self.__processed = False
      self.nodes.append(node)
      self.call('add_node_callback', node[key])
      self.graph[node[key]] = set() 

  def add_edge(self, edge, **kwargs):
    self.__processed = False
    self.edges.append([edge[0], edge[1], kwargs])
    self.call('add_edge_callback', edge, kwargs)
    self.connect(edge[0], edge[1], kwargs)
      
  def connect(self, node1, node2, data):
    if node1 not in self.graph[node2]:
      self.graph[node2].add(node1)
      
    if node2 not in self.graph[node1]:
      self.graph[node1].add(node2)

  """ Walk through the graph """
  def dfs(self, graph):
    nodes = graph.keys()
    start = nodes[0] if nodes else None
    if start:
      visited = set()
      to_visit = deque([start])

      while to_visit:
        current = to_visit.popleft()
        if current in visited:
            continue
        visited.add(current)
        self.call('visit_node_callback', current)
        node_children = set(self.graph[current])
        to_visit.extend(node_children - visited)
      return set(visited)
    else:
      return set()

  """ Walk nodes creating subgroups """
  def process(self, total_visited=set()):
    nodes = self.graph.keys()
    if self.graph and len(nodes) - len(total_visited):
      remaining = len(nodes) - len(total_visited);
      sg = {k:self.graph[k] for k in self.graph if k not in total_visited}
      visited = self.dfs(sg)

      ## Call the group callback if exists
      self.call('group_callback', visited)

      self.groups.append(visited)
      total_visited = total_visited.union(visited)
      return self.process(total_visited)
    else:
      self.__processed = True
      return self.groups

  def processed(self):
    return self.__processed

  def call(self, name, *args):
    try:
      getattr(self, name)(*args)
    except AttributeError as e:
      pass

  def on_group(self, cb):
    self.group_callback = cb

  def on_add_node(self, cb):
    self.add_node_callback = cb    
  
  def on_add_edge(self, cb):
    self.add_edge_callback = cb        

  def on_visit_node(self, cb):
    self.visit_node_callback = cb
  
  def __len__(self):
      return len(self.graph)

  def __getitem__(self, item):
    return self.graph[item]

  def __str__(self):
    return str(self.graph)

