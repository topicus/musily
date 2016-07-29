from flask import Flask
from utils import SetJSONEncoder


def create_app():
  from views.index import index_view
  from views.api import api_view

  app = Flask(__name__)
  app.register_blueprint(api_view)
  app.register_blueprint(index_view)
  app.json_encoder = SetJSONEncoder
  return app