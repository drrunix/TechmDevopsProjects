from flask import Flask,session
from flask_httpauth import HTTPBasicAuth
from database.models.users import User,db

auth=HTTPBasicAuth()

@auth.verify_password
def verify_password(username,password):
    list=db.session.query(User).all();
    for x in list:
        if x.username == username:
            if x.password == password:
                session['username']=username
                return username