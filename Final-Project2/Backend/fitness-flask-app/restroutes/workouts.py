from flask import Flask, jsonify, request ,abort
from flask_restful import Resource, Api 
from config import app,auth
from database.models.users import User,db
from database.models.workouts import Workout
from database.models.workoutmap import WorkoutMap
from datetime import datetime as dt
from sqlalchemy import func
import os


#inserts a new workout plan

@app.route("/workout/add", methods=['POST'])
@auth.login_required
def addworkout():
    name=  request.form["name"];
    description=  request.form["description"];
    days=  request.form["days"];
    weeks=  request.form["weeks"];
    file1=request.files['imagefile'];
    imagefile=file1.filename;

    

    workout=Workout(name,description,weeks,days,imagefile)
    
    db.session.add(workout);
    db.session.commit();
    current=Workout.query.filter_by(name=name).first()
    
    file1.save(os.path.join(app.config['UPLOAD_FOLDER'], file1.filename))
    
    
    return {"result": "Workout Uploaded", 'id': current.id}, 201


#returns all Workoutplans in json format
@app.route("/workouts", methods=[ 'GET'])
@auth.login_required
def getworkouts():
    workout = Workout.query.all()
    workout = [ x.serialize() for x in workout]
    return jsonify(workout),  200

#returns all Workoutplans in json format
@app.route("/workouts/<string:name>", methods=[ 'GET'])
@auth.login_required
def getworkoutsbyname(name):
    workout = Workout.query.filter_by(name=name).first()
    return jsonify(workout.serialize()),  200

#returns all mappings for workoutid in json format
@app.route("/workoutmap/<int:workoutid>", methods=[ 'GET'])
@auth.login_required
def getworkoutmap(workoutid):
    workoutmap = WorkoutMap.query.filter_by(workoutid=workoutid).all()
    exercises = [ x.serialize() for x in workoutmap]
    print(exercises)
    return jsonify(exercises),  200


#returns all exercises in json format
@app.route("/workoutmap/add", methods=[ 'POST'])
@auth.login_required
def addworkoutmap():
    data = request.get_json() 
    print(type(data))
    print(data['workoutid'])
    print(data['exercises'][0])

    for x in data['exercises']:
        workoutmap=WorkoutMap(data['workoutid'],x)
        db.session.add(workoutmap);
    
    db.session.commit();
    #print(data.exercise[0])
    return {"data":"success"},  200