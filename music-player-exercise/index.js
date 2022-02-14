const inputElem = document.querySelector('#query');
const searchButton = document.querySelector('#search-button');
let TOKEN = '';


async function getToken() {
    const response = await fetch('https://blooming-reef-63913.herokuapp.com/api/token');
    const data = await response.json();

    TOKEN = data.token;
}

async function getTracks(query) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const response = await fetch(url, {
        headers: {
            'authorization': `Bearer ${TOKEN}`
        }
    });
    const data = await response.json();
    console.log(data);
}

searchButton.addEventListener('click', () => {
    const query = inputElem.value;

    getTracks(query);
});

getToken();