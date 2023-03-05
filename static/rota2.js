document.body.onload = function(){
    moviePage = document.querySelector("#moviePage");
    movieId = moviePage.getAttribute("aria-label");
    let url = `http://127.0.0.1:5000/getMovieDetails/${movieId}`;
    moviePage.innerHTML = `
    <span class="loader"></span>
    `;
    fetch(url,{
        method:"GET"
    })
    .then(response => response.json())
    .then(json =>{    
        data = new Date(`${json.launch}`)
        moviePage.innerHTML = `
        <div class="movieStats">
            <img src="${json.cover}">
            <div>
                <h1>${json.title}</h1>
                <p>${data.toLocaleDateString()}</p>
                <p>${json.phrase}</p>
            </div>
        </div>
        <div class="cast">
            
        </div>
        `;
        cast = document.querySelector(".cast");
        for (actor of json.cast){
            birthday = new Date(`${actor.birthday}`)
            cast.innerHTML += `
            <div class="actorCard">
                <img class="profile_pic" src="${actor.foto}">
                <table>
                    <tr>
                        <th colspan="2">${actor.name}</th>
                    </tr>
                    <tr>
                        <td>Personagem:</td><td>${actor.character}</td>
                    </tr>
                    <tr>
                        <td>Idade:</td><td>${actor.age}</td>
                    </tr>
                    <tr>
                        <td>Aniversário:</td><td>${birthday.toLocaleDateString()}</td>
                    </tr>
                    <tr>
                        <td>Nacionalidade:</td><td>${actor.nacionalidade}</td>
                    </tr>
                </table>
                <a href="rota3/${actor.id}">Ver outros trabalhos</a>
            </div>
            `;
        }
    })
    .catch(error => console.error(error))
}