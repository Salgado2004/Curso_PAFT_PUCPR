from flask import Flask, request, render_template
import requests

app = Flask(__name__)

"""
Usando o flask crie 3 rotas:

1) Que consuma uma API e adapte o conteúdo para uma pagina web (crie tb uma pagina web que realize este consumo usando ajax/fetch)
https://meowfacts.herokuapp.com/

2) Que consuma duas APIs, combinando e adaptando o conteúdo para um json (crie tb uma pagina web que realize este consumo usando ajax/fetch)
https://meowfacts.herokuapp.com/
https://http.cat/

3) Crie uma rota que retorne um template (JINJA) que consuma os dados de uma API (pode ser uma dar anteriores).
https://meowfacts.herokuapp.com/
https://placekitten.com/
 
Realize a verificação de erros nos retornos da API.
"""


@app.route('/')
def index():
    resp = requests.get('https://meowfacts.herokuapp.com/?count=5&lang=por')
    catFacts = resp.json()
    return render_template('index.html', the_catfacts=catFacts)

app.run(debug=True)