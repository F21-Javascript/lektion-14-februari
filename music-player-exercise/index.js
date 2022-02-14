const inputElem = document.querySelector('#query');
const searchButton = document.querySelector('#search-button');
const trackListElem = document.querySelector('#track-list');
const audioElem = document.querySelector('audio');
let TOKEN = '';

function createListItem(track) {
    const listItem = document.createElement('li');
    listItem.innerText = track.name;
    trackListElem.appendChild(listItem);

    listItem.addEventListener('click', () => {
        console.log('Preview url:', track.preview_url);
        audioElem.setAttribute('src', track.preview_url);
    });
}

function displayTracks(tracks) {
    console.log(tracks);
    for (const track of tracks) {
        if (track.preview_url) {
            createListItem(track);
        }
    }
}

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
    console.log(data.tracks.items[0].preview_url); // Plockar preview url från första sökresultatet i arrayen items

    displayTracks(data.tracks.items);
}

searchButton.addEventListener('click', () => {
    const query = inputElem.value;

    getTracks(query);
});

getToken();