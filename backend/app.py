from flask import Flask
app = Flask(__name__)

@app.get('/')
def hello_world():
    return 'Hello, World!'

@app.post('/summary')
def get():
    sentences = summarized(source)
    load 
    for sentence in sentences:
        predict(sentence)

if __name__ == '__main__':
    app.run()
