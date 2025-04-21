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
        cast = []
        for actor in casting['cast']:
            headers = {"X-RapidAPI-Key": "a2a5f196d8msh98f510145890a90p10bd6fjsn1ce3f431f12f", "X-RapidAPI-Host": 'celebrity-by-api-ninjas.p.rapidapi.com'}
            paramsActor = {"name": actor['name']}
            resp3 = requests.get("https://celebrity-by-api-ninjas.p.rapidapi.com/v1/celebrity", headers=headers, params=paramsActor)
            if resp3.status_code == 200:
                respActor = resp3.json()
                if len(respActor) > 0:
                    try:
                        age = respActor[0]['age']
                        try:
                            age = str(age)+" anos"
                        except TypeError:
                            age = "Não informado"
                    except KeyError:
                        age = "Não informado"
                    try:
                        nation = respActor[0]['nationality']
                    except KeyError:
                        nation = "Não informado"
                    try:
                        birthday = respActor[0]['birthday']
                    except KeyError:
                        birthday = "Não informado"
                    actorDetails = {"id": actor['id'], "name": respActor[0]['name'], "nacionalidade": nation, "birthday": birthday, "character": actor['character'], "foto": "https://image.tmdb.org/t/p/w200" + actor['profile_path'] if actor['profile_path'] != None else "../static/no_profile_pic.PNG", "age": age}
                    cast.append(actorDetails)
        movieDetails = {"title": details['title'], "phrase": details['tagline'], "launch": details['release_date'], "cover": "https://image.tmdb.org/t/p/w200" + details['poster_path'], "cast": cast}
    return movieDetails

@app.route('/rota3/<personId>')
def getActorDetails(personId):
    params = {"api_key": "7128cc23bb835419dab02e5eab2923a5", "language": "pt-BR"}
    resp1 = requests.get(f'https://api.themoviedb.org/3/person/{personId}', params=params)
    resp2 = requests.get(f'https://api.themoviedb.org/3/person/{personId}/movie_credits', params=params)
    details = resp1.json()
    works = resp2.json()
    if details and works != None:
        workedFor = []
        for work in works['cast']:
            thisWork = {"name": work['title'], "character": work['character'], "cover": "https://image.tmdb.org/t/p/w200" + work['poster_path'] if work['poster_path'] != None else "../static/no_cover.PNG"}
            workedFor.append(thisWork)
        personDetails = {
            "name": details['name'],
            "bio": details['biography'],
            "birthday": details['birthday'],
            "home": details['place_of_birth'],
            "known_for": details['known_for_department'],
            "foto": "https://image.tmdb.org/t/p/w200" + details['profile_path'] if details['profile_path'] != None else "../static/no_profile_pic.PNG",
            "fame": details['popularity'],
            "trabalhos": workedFor
        }
        return render_template("rota3.html", actorDetails=personDetails)

@app.route('/')
def index():
    return render_template('index.html')

app.run(debug=True)