const inputElem = document.querySelector('#query');
const searchButton = document.querySelector('#search-button');

import { getToken, getTracks } from './modules/api.js';
import { displayTracks } from './modules/display.js';

console.log(test);

searchButton.addEventListener('click', async () => {
    const query = inputElem.value;

    const result = await getTracks(query);
    displayTracks(result);
});

getToken();