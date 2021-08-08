from flask import Flask
from config import db

class Workout(db.Model):
 

    __tablename__ = 'workout'
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
    weeks = db.Column(db.Numeric(5),
                        index=False,
                        unique=False,
                        nullable=False)
    days = db.Column(db.Numeric(5),
                        index=False,
                        unique=False,
                        nullable=False)

    imagefile = db.Column(db.String(50),
                         index=False,
                         unique=True,
                         nullable=False)

  
    
    
    def __init__(self,name,description,weeks,days,imagefile):
        self.name=name
        self.description=description
        self.weeks=weeks
        self.days=days
        self.imagefile=imagefile



    def serialize(self):
        return {
            'id':self.id, 'name':self.name, 'days':int(self.days),'weeks':int(self.weeks),
            'imagefile':self.imagefile ,'description': self.description
        }

    def __repr__(self):
        return str(self.serialize())