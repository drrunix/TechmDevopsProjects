from flask import Flask, jsonify, request 
from flask_restful import Resource, Api 
from config import app,auth

api = Api(app) 

class Hello(Resource): 
  
    @auth.login_required
    def get(self): 
  
        return jsonify({'message': 'hello world'}) 
  

    def post(self): 
          
        data = request.get_json()     # status code 
        print(data)
        return ({'data': data}), 201
  


api.add_resource(Hello, '/home') 
