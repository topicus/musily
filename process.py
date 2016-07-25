import csv, json, copy, pprint
from collections import deque

""" Populate user relations """
def populate_relations(relations_reader, people={}, statistics={}):
  
  # Initialize
  graph = copy.deepcopy(people)
  shared_songs = 0
  women_friendships = 0
  men_friendships = 0
  
  for r in relations_reader:
    # Given we iterate over relationships can 
    # compute shared songs
    shared_songs += int(r['canciones'])
    
    # Set relationships
    uid_1 = r['usuario_1']
    uid_2 = r['usuario_2']
    graph[uid_1]['relations'][uid_2] = people[uid_1]
    graph[uid_2]['relations'][uid_1] = people[uid_2]
    
    # Given we iterate over relationships can 
    # compute shared friendships
    if people[uid_2]['sexo'] == 'mujer':
      women_friendships += 1
    elif people[uid_2]['sexo'] == 'hombre':
      men_friendships += 1
  
  statistics['shared_songs'] = shared_songs
  statistics['women_friendships'] = women_friendships
  statistics['men_friendships'] = men_friendships

  return graph, statistics


""" Populate users """
def populate_people(people_reader, people={}, statistics={}):
  for p in people_reader:
    p['relations'] = {}
    people[p['usuario']] = p
  return people, statistics


""" Compute statistics and prints them """
def analyze_friends(relations={}, statistics={}):
  friends_count = float(len(relations.keys()))
  friends_age_total = 0
  for uid, user in relations.iteritems():
    friends_age_total += int(user['edad'])
  statistics['friends_age_avg'] = friends_age_total / friends_count if friends_count else 0
  statistics['friends_count'] = friends_count

  return statistics 


""" Compute statistics and prints them """
def analyze(graph, statistics):
  user_count = float(len(graph.keys()))
  men_count = 0
  women_count = 0
  likes_total = 0
  age_total = 0
  friends_total = 0
  friends_men_count = 0 
  friends_women_count = 0
  friends_age_avg_total = 0
  
  for uid, user in graph.iteritems():
    if user['sexo'] == 'hombre':
      men_count += 1
    if user['sexo'] == 'mujer':
      women_count += 1

    likes_total += int(user['likes'])
    age_total += int(user['edad'])
    friends_statistics = analyze_friends(user['relations'])
    friends_total += friends_statistics['friends_count']
    friends_age_avg_total += friends_statistics['friends_age_avg']

  statistics['women_count'] = str(women_count)
  statistics['men_count'] = str(men_count)
  statistics['likes_avg'] = str(likes_total / user_count)
  statistics['age_avg'] = str(age_total / user_count)
  statistics['friends_avg'] = str(friends_total / user_count)
  statistics['shared_songs'] = str(statistics['shared_songs'])
  statistics['women_count'] = str(women_count)
  statistics['friends_age_avg'] = str(friends_age_avg_total / user_count)
  statistics['user_count'] = str(user_count)
  return statistics

""" Walk through the graph """
def walk_graph(graph):
    start = graph.keys()[0] if graph.keys() else None
    if start:
      visited = set()
      to_crawl = deque([start])

      while to_crawl:
        current = to_crawl.popleft()
        if current in visited:
            continue
        visited.add(current)
        if len(graph[current]) and len(graph[current]['relations']):
          node_children = set(graph[current]['relations'].keys())
          to_crawl.extend(node_children - visited)
      return set(visited)
    else:
      return set()

""" Walk nodes creating subgroups """
def subgroups(graph, subgraph={}, total_visited=set(), groups=[]):
  if graph and len(graph.keys()) - len(total_visited):
    remaining = len(graph.keys()) - len(total_visited);
    sg = {k:graph[k] for k in graph if k not in total_visited}
    visited = walk_graph(sg)
    groups
    total_visited = total_visited.union(visited)
    groups.append(visited)
    return subgroups(graph, sg, total_visited, groups)
  else:
    return groups


""" Main """
## File handlers
relations_file = open('relaciones.txt', 'r')
people_file = open('melomanos.txt', 'r')
data_file = open('data.json', 'w')

## Create readers
people_reader = csv.DictReader(people_file, delimiter='|')
relations_reader = csv.DictReader(relations_file, delimiter='|')

## Build graph
graph, statistics = populate_people(people_reader)
graph, statistics = populate_relations(relations_reader, graph, statistics)


pprint.pprint(analyze(graph, statistics))

print subgroups(graph)