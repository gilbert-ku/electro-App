from setup import app, Resource, api, db
from flask import make_response, jsonify, session, request
from models import User, Admin, Product, Order

@app.route('/')
def index():
    return {"message": "electropulse backend page"}

class UserSignup(Resource):
    def post(self):
        userData = request.get_json()
        name = userData['username']
        password = userData['password']
        email = userData['email']
        contact = userData['contact']
        address = userData['address']

        new_user = User(name=name, email=email, contact=contact, address=address)
        new_user.password_hash = password

        db.session.add(new_user)
        db.session.commit()

        response_data = {"message": "New User Created"}

        return response_data, 201
api.add_resource(UserSignup, '/usersignup')

class Userlogin(Resource):
    def post(self):
        login_data = request.get_json()
        name = login_data.get('username')
        password = login_data.get('password')

        if not name or not password:
            return {"message": "Username and password are required"}, 400
        
        user = User.query.filter_by(name=name).first()
        if not user:
            return {"message": "User not found"}, 404
        
        if not user.validate_password(password):
            return {"message": "Invalid password"}, 401
        
        response_data = {
            "message": "Login successful",
            "user_id": user.id
        }

        return response_data
api.add_resource(Userlogin, '/userlogin')

class Adminlogin(Resource):
    def post(self):
        login_data = request.get_json()
        name = login_data.get('username')
        password = login_data.get('password')

        if not name or not password:
            return {"message": "Username and password are required"}, 400
        
        user = Admin.query.filter_by(name=name).first()
        if not user:
            return {"message": "User not found"}, 404
        
        if not user.validate_password(password):
            return {"message": "Invalid password"}, 401
        
        response_data = {
            "message": "Login successful",
            "user_id": user.id
        }

        return response_data
api.add_resource(Adminlogin, '/adminlogin')



if __name__ == '__main__':
    app.run(port=5555, debug=True)