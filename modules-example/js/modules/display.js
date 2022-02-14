const trackListElem = document.querySelector('#track-list');
const audioElem = document.querySelector('audio');

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

export { displayTracks }