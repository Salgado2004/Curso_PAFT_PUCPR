from flask import Flask, request, render_template
import requests

app = Flask(__name__)

@app.route("/rota1")
def rota1():
    return render_template('rota1.html')

@app.route("/rota2/<movieId>")
def rota2(movieId):
    return render_template('rota2.html', id=movieId)

@app.route("/getMovies")
def getMovies():
    params = {"api_key": "7128cc23bb835419dab02e5eab2923a5", "language": "pt-BR", "page": 10, "include_adult": False}
    resp = requests.get('https://api.themoviedb.org/3/discover/movie', params=params)
    movies = resp.json()
    movieList = []
    if movies['results'] != None:
        for movie in movies['results']:
            movieData = {
                "cover": "https://image.tmdb.org/t/p/w500" + movie['poster_path'],
                "title": movie['title'],
                "resumo": movie['overview'] if movie['overview'] != '' else "Nenhum resumo informado",
                "launch": movie['release_date'],
                "nota": movie['vote_average'],
                "id": movie['id']
            }
            movieList.append(movieData)
        return movieList
    
@app.route("/getMovieDetails/<movieId>")
def getMovieDetails(movieId):
    paramsMovie = {"api_key": "7128cc23bb835419dab02e5eab2923a5", "language": "pt-BR"}
    resp1 = requests.get(f'https://api.themoviedb.org/3/movie/{movieId}', params=paramsMovie)
    resp2 = requests.get(f'https://api.themoviedb.org/3/movie/{movieId}/credits', params=paramsMovie)
    details = resp1.json()
    casting = resp2.json()
    if details and casting != None:
        for actor in casting['cast']:
            print(actor["name"])
    return movieDetails

@app.route('/')
def index():
    return render_template('index.html')

app.run(debug=True)