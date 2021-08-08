from flask import Flask, jsonify, request ,abort
from flask_restful import Resource, Api 
from config import app,auth
from database.models.users import User,db
from datetime import datetime as dt
from sqlalchemy import func

@app.route("/userstats/count")
@auth.login_required
def numberofusers():
    rows = db.session.query(func.count('*')).select_from(User).filter(User.role=='user').scalar()
    print(rows)
    data={"count":rows}
    return  jsonify(data), 200


@app.route("/userstats/acount")
@auth.login_required
def numberofausers():
    rows = db.session.query(func.count('*')).select_from(User).filter(User.role=='admin').scalar()
    print(rows)
    data={"count":rows}
    return  jsonify(data), 200

@app.route("/userdata/<string:usertype>")
@auth.login_required
def getusers(usertype):
    users = User.query.filter_by(role=usertype).all()
    users = [ x.serialize() for x in users]
    print(users)
    return jsonify(users),  200