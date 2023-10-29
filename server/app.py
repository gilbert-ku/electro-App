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

class Products(Resource):
    def get(self):
        products = Product.query.all()
        response_dict_list = []
        for item in products:
            response_dict = item.to_dict()
            response_dict_list.append(response_dict)

        resp = make_response(
            jsonify(response_dict_list), 
            200
        )
        return resp
    
    def post(self):
        product_data = request.get_json()
        name = product_data.get('name')
        price = product_data.get('price')
        description = product_data.get('description')
        category = product_data.get('category')
        quantity = product_data.get('quantity')
        admin_id = product_data.get('admin_id')

        if not name or not price or not description or not category or not quantity or not admin_id:
            return {"error": "Missing product information"}, 400

        new_product = Product(
            name=name,
            price=price,
            description=description,
            category=category,
            quantity=quantity,
            admin_id=admin_id
        )

        db.session.add(new_product)
        db.session.commit()

        response_data = {"message": "New product created", "product_id": new_product.id}

        return response_data, 201
api.add_resource(Products, '/products')

class ProductsByID(Resource):
    def get(self, id):
        product = Product.query.filter_by(id=id).first()
        if product:
            response_dict = product.to_dict()
            status_code = 200
        else:
            response_dict = {"error": "Product not found"}
            status_code = 404

        resp = make_response(
            jsonify(response_dict),
            status_code
        )
        return resp
    
    def patch(self, id):
        product = Product.query.filter_by(id=id).first()
        if not product:
            return {"error": "Product not found"}
        data = request.get_json()

        if 'quantity' in data:
            try:
                product.quantity = int(data['quantity'])
                db.session.commit()
                return product.to_dict(), 200
            except ValueError:
                return {"error": "Invalid 'quantity' value"}, 400
        else:
            return {"error": "Missing 'quantity' in request data"}, 400
        

    def delete(self, id):
        product = Product.query.filter_by(id=id).first()
        if not product:
            return {"error": "Product not found"}
        
        db.session.delete(product)
        db.session.commit()

        return {"message": "Product deleted successfully"}, 204

api.add_resource(ProductsByID, '/products/<int:id>')



class AdminSignup(Resource):
    def post(self):
        userData = request.get_json()
        name = userData['username']
        password = userData['password']
        email = userData['email']
        contact = userData['contact']
        address = userData['address']

        new_admin = Admin(name=name, email=email, contact=contact, address=address)
        new_admin.password_hash = password

        db.session.add(new_admin)
        db.session.commit()

        response_data = {"message": "New Admin Created"}

        return response_data, 201
api.add_resource(AdminSignup, '/adminsignup')

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