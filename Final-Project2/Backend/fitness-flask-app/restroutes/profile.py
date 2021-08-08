from flask import Flask, jsonify, request ,abort,session
from flask_restful import Resource, Api 
from config import app,auth
from database.models.users import User,db,Profile
from datetime import datetime as dt
import json


#gets a profile of the current user in the session
@app.route("/profile", methods=[ 'GET'])
@auth.login_required
def getprofile():
    username=session['username']
    profile = Profile.query.filter_by(username=username).first()
    return jsonify(profile.serialize()),  200

#update profile information
@app.route("/profile/<string:item>", methods=[ 'POST'])
@auth.login_required
def updateprofile(item):
    data=request.get_json()
    print(data)
    username=session['username']
    if item=='password':
        user=User.query.filter_by(username=username).first()
        user.password=data['password'];
        db.session.commit();
        return {"status": "success"} , 200
    
    if item=='weight':
        profile=Profile.query.filter_by(username=username).first()
        profile.weight=data['weight'];
        db.session.commit();
        return {"status": "success"}, 200

    if item=='height':
        profile=Profile.query.filter_by(username=username).first()
        profile.height=data['height'];
        db.session.commit();
        return {"status": "success"}, 200

    if item=='address':
        profile=Profile.query.filter_by(username=username).first()
        profile.address=data['address'];
        db.session.commit();
        return {"status": "success"}, 200

    if item=='age':
        profile=Profile.query.filter_by(username=username).first()
        profile.age=data['age'];
        db.session.commit();
        return {"status": "success"}, 200

    if item=='subscription':
        profile=Profile.query.filter_by(username=username).first()
        profile.subscription=data['subscription'];
        db.session.commit();
        return {"status": "success"}, 200
    