from flask import Flask,request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.get('/')
def hello_world():
    return 'Hello, World!'

@app.post('/predict')
@cross_origin(origins='*')
def predictData():
    print(request.get_json())
    return "Hello, World",200

if __name__ == '__main__':
    app.run()
