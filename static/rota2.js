document.body.onload = function(){
    movieId = document.querySelector("#moviePage").getAttribute("aria-label");
    let url = `http://127.0.0.1:5000/getMovieDetails/${movieId}`;
    fetch(url,{
        method:"GET"
    })
    .then(response => response.json())
    .then(json =>{    
        console.log(json);
    })
    .catch(error => console.error(error))
}