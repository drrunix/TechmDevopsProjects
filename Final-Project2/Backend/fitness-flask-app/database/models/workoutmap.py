from flask import Flask
from config import db
from database.models.exercises import Exercise

class WorkoutMap(db.Model):
 

    __tablename__ = 'workoutmap'
    id = db.Column(db.Integer,
                   primary_key=True)
   
    workoutid = db.Column(db.Integer, db.ForeignKey('workout.id'))
    exerciseid = db.Column(db.Integer, db.ForeignKey('exercise.id'))
    exercise = db.relationship("Exercise", back_populates = "workoutmap")


    
    
    def __init__(self,workoutid,exerciseid):
        self.workoutid=workoutid;
        self.exerciseid=exerciseid;



    def serialize(self):
        return {
            'id':self.id, 
            'workoutid': self.workoutid, 
            'exerciseid': self.exerciseid ,
            'exercise': self.exercise.serialize()
        }

    def __repr__(self):
        return str(self.serialize())

Exercise.workoutmap= db.relationship("WorkoutMap", back_populates="exercise")