import re
import os

PARAM_SEPARATOR = ','
DS = '/'

def divide(a, b):
  try:
    return float(a) / b
  except ZeroDivisionError:
    return 'NaN'

def parse_filter_values(value):
  if value.find(PARAM_SEPARATOR) != -1:
    return [int(x) for x in value.split(PARAM_SEPARATOR)]
  else:
    return value

def parse_filters(query_filters):
  filters = []
  regex = re.compile(ur'(\w+)\[(.*?)\]', re.IGNORECASE)
  for ft in query_filters:
    (field, kind) = re.findall(regex, ft[0])[0]
    filters.append({'field': field, 'type': kind, 'value': parse_filter_values(ft[1]) })
  return filters

def db_file(filename):
  return os.path.abspath('server/data') + DS + filename