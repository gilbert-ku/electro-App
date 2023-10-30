from random import sample, randint, choice
from faker import Faker
from datetime import datetime, timedelta
from setup import db, app

from models import User, Admin, Product

fake=Faker()

with app.app_context():
    db.session.query(User).delete()
    db.session.query(Admin).delete()
    db.session.query(Product).delete()
    db.session.commit()

