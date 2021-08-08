from flask import Flask, jsonify, request ,abort
from flask_restful import Resource, Api 
from config import app,auth
from database.models.users import User,db
from datetime import datetime as dt
import json

api = Api(app) 

class UserRest(Resource): 
  
    #verify User existence
    def get(self): 
        return jsonify({'message': 'hello world'}) 
  
    #user Registration 
    #returns 201 on success and user object 
    def post(self): 
        try:
            data=request.get_json()
            user=User(username=data['username'],password=data['password'],
            email=data['email'],created=dt.now(),role=data['role'])

            db.session.add(user)
            db.session.commit()
            return {"status": "success"}, 201
        except:
            abort({"status":"Internal server error"},500)
      
class UserOps(Resource):
    #get method to verify user and email already exists or not
    #parameter need to be sent like john_john@gmail.com
    #where john is username john@gmail.com is password
    def get(self,username):
        print('entered')
        list=username.split('_')
        print(list)
        userexists=User.query.filter_by(username=list[0]).first()
        if(userexists):
            return {"status":"user exists"}, 200
        emailexists=User.query.filter_by(email=list[1]).first()
        if(emailexists):
            return {"status":"email exists"}, 200
        else:
            return {"status":"available"}, 200

    @auth.login_required
    def post(self,username):
        try:
            current = User.query.filter_by(username=username).first()
        
            if(current):
                return {"username":current.username,"usertype":current.role}, 200
            else:
                return {"status": "user not exists"}, 200
        except:
            abort({"status":"serverside error"}, 500)


api.add_resource(UserRest, '/users') 
api.add_resource(UserOps, '/userlog/<string:username>');