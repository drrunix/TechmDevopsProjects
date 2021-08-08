from flask import Flask
from config import db
from datetime import datetime ,date

class DailyStatus(db.Model):
    __tablename__ = 'dailystatus'

    id = db.Column(db.Integer,
                   primary_key=True)
    username = db.Column(db.String(64),
                         index=False,
                         unique=False,
                         nullable=False)
    exercise = db.Column(db.Integer,
                         index=False,
                         unique=False,
                         nullable=True)
    duration = db.Column(db.Integer,
                      index=False,
                      unique=False,
                      nullable=True)
    date = db.Column(db.Date,
                        index=False,
                        unique=False,
                        nullable=False)
    
    def __init__(self,username,exercise,duration=0):
        self.username=username
        self.exercise=exercise
        self.date=date.today()
        self.duration=duration

    def serialize(self):
        return {'id':self.id,'username':self.username,
        'exercise':self.exercise,'duration':self.duration,date:str(self.date)}

    def __rep__(self):
        return str(self.serialize())
 
class Progress(db.Model):
    __tablename__ = 'progress'
    id = db.Column(db.Integer,
                   primary_key=True)
    username = db.Column(db.String(64),
                         index=False,
                         unique=False,
                         nullable=True)
    calories = db.Column(db.Integer,
                         index=False,
                         unique=False,
                         nullable=True)
    weight = db.Column(db.Integer,
                      index=False,
                      unique=False,
                      nullable=True)
    status = db.Column(db.String(64),
                        index=False,
                        unique=False,
                        nullable=True)
    date = db.Column(db.Date,
                        index=False,
                        unique=False,
                        nullable=True)
    
    def __init__(self,username,calories,weight,status):
        self.username=username;
        self.calories=calories;
        self.weight=weight;
        self.status=status;
        self.date=date.today()

    def serialize(self):
        return {'id':self.id,'username':self.username,
        'calories':self.calories,'weight':self.weight,'date':str(self.date),'status':self.status}

    def __rep__(self):
        return str(self.serialize())
 