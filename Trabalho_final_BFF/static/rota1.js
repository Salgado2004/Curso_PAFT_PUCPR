document.body.onload = function(){
    let url = `http://127.0.0.1:5000/getMovies`;
    fetch(url,{
        method:"GET"
    })
    .then(response => response.json())
    .then(json =>{
        list = document.querySelector("#movieList1");
        console.log(json)
        for (movie of json){
            data = new Date(`${movie.launch}`)
            list.innerHTML += `
            <div class="movieCard">
                <img class="movieCover" src="${movie.cover}">
                <div class="movieInfo">
                    <p class="title">${movie.title}</p>
                    <p class="data"><span class="nota">${movie.nota}</span> <span>${data.toLocaleDateString()}</span></p>
                    <p class="resumo">${movie.resumo}</p>
                    <a class="link" href="rota2/${movie.id}">Ver casting</a>
                </div>
            </div>
            `;
        }
    })
    .catch(error => console.error(error))
}

