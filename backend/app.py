
from flask import Flask
import pickle
import joblib
app = Flask(__name__)


@app.get('/')
def hello_world():
    return 'Hello, World!'


@app.post('/summary')
def get():
    sentences = summarize(source)
    l = joblib.load('Text_SVM.pkl')
    count_vect = l[1]
    transformer = l[2]
    model = l[0]
    d = {}
    for sentence in sentences:
        mc = count_vect.transform([sentence])
        m = transformer.transform(mc)
        output = model.predict(m)
        if output[0] not in d.keys():
            newlist = list()
            newlist.append(sentence)
            d[output[0]] = newlist
        else:
            d[output[0]].append(sentence)
    return d


if __name__ == '__main__':
    app.run()
