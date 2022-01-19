const endpoint = 'https://flynn.boolean.careers/exercises/api/array/music';
// const addBtn = document.querySelector('#addDog');
window.addEventListener('load', loadCards);

function loadCards() {
  axios
    .get(endpoint)
    .then((response) => {
        loadCardsFromResponse(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

function loadCardsFromResponse(response) {
    let album = response.data.response;
    console.log(response.data.response);

    for (let i = 0; i < album.length; i++) {
        const imgUrl = response.data.response[i].poster;
        console.log(imgUrl);

        const div = document.createElement('div');
        div.classList.add('card', 'col-4');

        const img = document.createElement('img');
        img.src = imgUrl;
        img.className = 'img-fluid';
        div.appendChild(img);
        document.getElementById('gallery').appendChild(div);

        const title = response.data.response[i].title;
        currentTitle = document.createElement('h3');
        currentTitle.innerText = title;
        div.appendChild(currentTitle);

        const author = response.data.response[i].author;
        currentAuthor = document.createElement('h4');
        currentAuthor.innerText = author;
        div.appendChild(currentAuthor);

        const genre = response.data.response[i].genre;
        currentGenre = document.createElement('p');
        currentGenre.innerText = genre;
        div.appendChild(currentGenre);

        const year = response.data.response[i].year;
        currentYear = document.createElement('p');
        currentYear.innerText = year;
        div.appendChild(currentYear);



    }
}


