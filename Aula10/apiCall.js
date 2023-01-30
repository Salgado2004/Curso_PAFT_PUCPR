button = document.querySelector("#getFacts");

button.onclick = async function getUser() {
    text = document.querySelector("#fact");

    axios.interceptors.response.use(function (response) {
        console.log("Dados recebidos");
        return response;
    })
    try {
      const response = await axios.get('https://cat-fact.herokuapp.com/facts');
      let id = Math.floor(Math.random() * 5);
      let object = response.data[id];

      text.innerText = `${id+1}º - ${object.text}`;
    } catch (error) {
      console.error(error);
    }
}