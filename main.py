from flask import Flask, request, render_template
import requests

app = Flask(__name__)

@app.route('/')
def index():
    resp = requests.get('https://meowfacts.herokuapp.com/?count=5&lang=por')
    catFacts = resp.json()
    return render_template('index.html', the_catfacts=catFacts)

app.run(debug=True)