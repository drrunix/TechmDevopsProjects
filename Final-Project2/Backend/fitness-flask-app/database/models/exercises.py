from flask import Flask
from config import db

class Exercise(db.Model):
 

    __tablename__ = 'exercise'
    id = db.Column(db.Integer,
                   primary_key=True)
    name = db.Column(db.String(50),
                         index=False,
                         unique=True,
                         nullable=False)
    description = db.Column(db.Text,
                         index=False,
                         unique=False,
                         nullable=False)
    duration = db.Column(db.Numeric(4),
                      index=False,
                      unique=False,
                      nullable=False)
    reps = db.Column(db.Numeric(5),
                        index=False,
                        unique=False,
                        nullable=False)
    sets = db.Column(db.Numeric(3),
                        index=False,
                        unique=False,
                        nullable=False)
    calrange1 = db.Column(db.Numeric(5),
                        index=False,
                        unique=False,
                        nullable=False)
    calrange2 = db.Column(db.Numeric(5),
                        index=False,
                        unique=False,
                        nullable=False)
    calrange3 = db.Column(db.Numeric(5),
                        index=False,
                        unique=False,
                        nullable=False)
                   
    
    difficulty = db.Column(db.String(50),
                         index=False,
                         unique=False,
                         nullable=False)
    
    bodypart = db.Column(db.String(100),
                         index=False,
                         unique=False,
                         nullable=False)
    
    equipment = db.Column(db.String(30),
                         index=False,
                         unique=False,
                         nullable=False)

    imagefile = db.Column(db.String(50),
                         index=False,
                         unique=True,
                         nullable=False)

    videofile = db.Column(db.String(50),
                         index=False,
                         unique=True,
                         nullable=False)
    
    
    
    def __init__(self,name,description,duration,reps,sets,calrange1,calrange2,calrange3,difficulty,bodypart,equipment,imagefile,videofile):
        self.name=name
        self.description=description
        self.duration=duration
        self.reps=reps
        self.sets=sets
        self.calrange1=calrange1
        self.calrange2=calrange2
        self.calrange3=calrange3
        self.difficulty=difficulty
        self.bodypart=bodypart
        self.equipment=equipment
        self.imagefile=imagefile
        self.videofile=videofile


    def serialize(self):
        return {
            'id':self.id, 'name':self.name, 
            'description':self.description,
            'duration':int(self.duration),
            'reps':int(self.reps),
            'sets':int(self.sets),
            'calrange1':int(self.calrange1),
            'calrange2':int(self.calrange2), 
             'calrange3':int(self.calrange3), 'bodypart': self.bodypart,'equipment':self.equipment,
             'difficulty':self.difficulty,
            'imagefile':self.imagefile, 'videofile': self.videofile
        }

    def __repr__(self):
        return str(self.serialize())