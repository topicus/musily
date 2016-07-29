from flask import Flask, jsonify
from flask.json import JSONEncoder

class SetJSONEncoder(JSONEncoder):
  def default(self, obj):
    if isinstance(obj, set):
      return list(obj)
    raise TypeError
      

