from flask import Flask,send_from_directory
from flask_sqlalchemy import SQLAlchemy
#from flask_cors import CORS

app = Flask(__name__,static_url_path="")
app.secret_key = "fitness"
#cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.after_request
def add_headers(response):
    response.headers.add('Content-Type', 'application/json')
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Expose-Headers', 'Content-Type,Content-Length,Authorization,X-Pagination')
    return response


@app.route('/files/<path:path>')
def static_file(path):
    print("entered here...")
    print(path)
    return send_from_directory('../static',path)

UPLOAD_FOLDER='d:/fitnesssolution/fitness-flask-app/static/uploads'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://mysqladmin@finalazureserverdb:Tilly12345@finalazureserverdb.mysql.database.azure.com/fitness'
app.config[' SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 100 * 1024 * 1024  # 100MB max-limit.
 
db=SQLAlchemy(app)

from database import models

from security import auth