// 'use strict'

let giphyAPI = search => `https://api.giphy.com/v1/gifs/search?api_key=OydT5OYqNx9rlguw3yHU3ZFEzGR5MSut&q=${search}&limit=25&offset=0&rating=G&lang=en`

fetch(giphyAPI("river"))
    .then(data => data.json())
    .then(data => console.log(data.data[0].images["downsized"].url))
    .catch(err => console.log(err))
