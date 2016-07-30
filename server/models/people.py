import csv


class People(object):
  def __init__(self, file_path):
    people_file = open(file_path, 'r')
    self.people_reader = csv.DictReader(people_file, delimiter='|')
    self.__people = {}
    self.load()

  def load(self):
    for p in self.people_reader:
      self.__people[p['usuario']] = p

  def all(self):
    if not self.__people: 
      self.people.load()
    return self.__people
  
  def between(self, item, ft):
    return min(ft['value']) <= int(item[ft['field']]) <= max(ft['value'])

  def eq(self, item, ft):
    if ft['field'] in item:
      return item[ft['field']] == ft['value']
    else:
      return True

  def gt(self, item, ft):
    if ft['field'] in item:
      return item[ft['field']] > ft['value']
    else:
      return True

  def lt(self, item, ft):
    if ft['field'] in item:
      return item[ft['field']] < ft['value']
    else:
      return True
  
  def gte(self, item, ft):
    if ft['field'] in item:
      return item[ft['field']] >= ft['value']
    else:
      return True

  def lte(self, item, ft):
    if ft['field'] in item:
      return item[ft['field']] <= ft['value']
    else:
      return True

  def filter(self, filters):
    filtered = {}
    for k, p in self.__people.iteritems():
      if self.should_be(self.__people[k], filters):
        filtered[k] = p

    return filtered

  def should_be(self, item, filters):
    sb = True
    for ft in filters:
      filter_func = getattr(self, ft['type'])
      if not filter_func(item, ft):
        sb = False
        break
    return sb
