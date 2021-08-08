from flask import Flask, jsonify, request ,abort,session
from flask_restful import Resource, Api 
from config import app,auth
from database.models.users import User,db
from database.models.progress import DailyStatus,Progress
from datetime import datetime,date
import json

@app.route("/exercisetracker/<int:exerciseid>",methods=["GET"])
@auth.login_required
def checkCompletion(exerciseid):
    username=session['username'];
    dstatus=DailyStatus.query.filter_by(username=username,exercise=exerciseid,date=date.today()).first()
    if(dstatus):
        return {"status":"completed","duration":dstatus.duration}, 200
    else:
        return {"status":"incomplete","duration":0}, 200

@app.route("/exercisetracker/<int:exerciseid>", methods=[ 'PUT'])
@auth.login_required
def addProfile(exerciseid):
    username=session['username']
    data=request.get_json()
    duration=data['duration']
    
    dstatus=DailyStatus.query.filter_by(username=username,exercise=exerciseid,date=date.today()).first()
    if(dstatus):
        dstatus.duration=duration
        db.session.commit()
    else:
       
        dstatus=DailyStatus(username,exerciseid,duration)
        db.session.add(dstatus)
        db.session.commit()

    
    
    return {"status":"completed","duration":duration}, 200

@app.route("/progressupdate", methods=['PUT'])
@auth.login_required
def progressupdate():
    username=session['username']
    data=request.get_json()
    calories=data['calories']
    weight=data['weight']
    status=data['status']
    progress=Progress.query.filter_by(username=username,date=date.today()).first()
    if(progress):
        progress.calories=calories;
        progress.weight=weight;
        progress.status=status;
        db.session.commit();
    else:
        progress=Progress(username,calories,weight,status)
        db.session.add(progress)
        db.session.commit()
   
    return {"status":"complted"}, 200

@app.route("/progressdata", methods=['GET'])
@auth.login_required
def sendProgress():
    username=session['username']
    progress = Progress.query.filter_by(username=username).order_by(Progress.date).all()
    progress = [ x.serialize() for x in progress]
    print(progress)
    return jsonify(progress),  200
    