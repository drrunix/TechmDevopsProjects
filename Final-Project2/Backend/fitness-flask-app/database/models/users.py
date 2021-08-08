from flask import Flask
from config import db

class User(db.Model):
 

    __tablename__ = 'users'
    id = db.Column(db.Integer,
                   primary_key=True)
    username = db.Column(db.String(64),
                         index=False,
                         unique=True,
                         nullable=False)
    password = db.Column(db.String(64),
                         index=False,
                         unique=False,
                         nullable=False)
    email = db.Column(db.String(80),
                      index=True,
                      unique=True,
                      nullable=False)
    created = db.Column(db.DateTime,
                        index=False,
                        unique=False,
                        nullable=False)
    role = db.Column(db.Text,
                    index=False,
                    unique=False,
                    nullable=False)
    
    def __init__(self,username,email,password,created,role):
        self.username=username
        self.email=email
        self.password=password
        self.created=created
        self.role=role

    def setPassword(self,password):
        self.password=password
        
    def serialize(self):
        return {
            'username': self.username,
            'created': str(self.created),
            'role': self.role,
            'email': self.email
        }

    def __repr__(self):
        return str(self.serialize())



#Profile Schema


class Profile(db.Model):
 

    __tablename__ = 'profile'
    id = db.Column(db.Integer,
                   primary_key=True)
    username = db.Column(db.String(64),
                         index=False,
                         unique=True,
                         nullable=False)
    height = db.Column(db.String(64),
                         index=False,
                         unique=False,
                         nullable=True)
    address = db.Column(db.Text,
                      index=False,
                      unique=False,
                      nullable=True)
    weight = db.Column(db.Integer,
                        index=False,
                        unique=False,
                        nullable=True)
    age = db.Column(db.Integer,
                        index=False,
                        unique=False,
                        nullable=True)
    subscription = db.Column(db.String(64),
                    index=False,
                    unique=False,
                    nullable=True)
    
    def __init__(self,username):
        self.username=username
        

    def serialize(self):
        return {
            'username': self.username,
            'age': self.age,
            'subscription': self.subscription,
            'height': self.height,
            'weight': self.weight,
            'address':self.address,
        }

    def __repr__(self):
        return str(self.serialize())