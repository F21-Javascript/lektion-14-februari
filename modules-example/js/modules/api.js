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
    console.log(data.tracks.items[0].preview_url); // Plockar preview url från första sökresultatet i arrayen items

    return data.tracks.items;
}

export { getToken, getTracks } // Exporterar våra funktioner för att kunna importera i en annan fil