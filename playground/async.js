// write a function to retrieve json
// make ajax request
// use fetch API
// https://rallycoding.herokuapp.com/api/music_albums

// function fetchAlbums() {
//     fetch('https://rallycoding.herokuapp.com/api/music_albums')
 //         .then(res => res.json()).then(json => console.log(json));
// }

// fetchAlbums();


// Async Await
const fetchAlbums = () => {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
    const json = await res.json();
    console.log(json);
}

fetchAlbums();
