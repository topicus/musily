import csv
from people import People

class Friend(object):
  def __init__(self, people_path, friendships_path):
    friendships_file = open(friendships_path, 'r')
    self.___people = People(people_path)
    self.friendships_reader = csv.DictReader(friendships_file, delimiter='|')
    self.__friendships = []
    self.load()

  def load(self):
    for f in self.friendships_reader:
      self.__friendships.append(f)

  def people(self):
    return self.___people.all()    
  
  def friendships(self):
    return self.__friendships
  
  def filter(self, filters):
    people = self.___people.filter(filters)
    people_set = set(people)
    return people, [f for f in self.__friendships if self.people_exists(f, people_set)]

  def people_exists(self, friendship, people):
    f = friendship
    return f['usuario_1'] in people and f['usuario_2'] in people
