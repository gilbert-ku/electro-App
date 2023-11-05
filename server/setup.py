from flask_sqlalchemy import SQLAlchemy
from flask import Flask, flash
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from sqlalchemy import MetaData
from flask_restful import Api, Resource
from flask_cors import CORS

app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})
db = SQLAlchemy(metadata=metadata)

migrate = Migrate(app, db)
CORS(app)
db.init_app(app)
bcrypt = Bcrypt(app)

api=Api(app)