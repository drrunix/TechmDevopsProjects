from flask import Flask, jsonify, request ,abort
from flask_restful import Resource, Api 
from config import app,auth
from database.models.users import User,db
from database.models.exercises import Exercise
from datetime import datetime as dt
from sqlalchemy import func
import os


#adds a new exercise
#content type should be multipart/form-data
#we also upload two files using this route

@app.route("/exercises/add", methods=[ 'POST'])
@auth.login_required
def addexercise():
    name=  request.form["name"];
    description=  request.form["description"];
    duration=  request.form["duration"];
    reps=  request.form["reps"];
    sets=  request.form["sets"];
    calrange1=  request.form["calrange1"];
    calrange2=  request.form["calrange2"];
    calrange3=  request.form["calrange3"];
    equipment=  request.form["equipment"];
    difficulty=  request.form["difficulty"];
    bodypart=  request.form["bodypart"];
    file1=request.files['imagefile'];
    file2=request.files['videofile'];
    imagefile=file1.filename;
    videofile=file2.filename;
    print(name,description,duration,reps,sets,calrange1,calrange2,calrange3,equipment,difficulty,bodypart)

    exercise=Exercise(name,description,duration,reps,sets,calrange1,calrange2,calrange3,difficulty,bodypart,equipment,imagefile,videofile)
    
    db.session.add(exercise);
    db.session.commit();

    file1.save(os.path.join(app.config['UPLOAD_FOLDER'], file1.filename))
    file2.save(os.path.join(app.config['UPLOAD_FOLDER'], file2.filename))
    
    return {"Result": "Exercise Uploaded"}, 201


#returns all exercises in json format
@app.route("/exercises", methods=[ 'GET'])
@auth.login_required
def getexercise():
    exercises = Exercise.query.all()
    exercises = [ x.serialize() for x in exercises]
    return jsonify(exercises),  200
