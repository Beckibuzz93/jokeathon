//https://sv443.net/jokeapi/v2
function joke() {
    const url = 'https://sv443.net/jokeapi/v2/joke/Any?type=single';
    const pTag = document.getElementById('pTag');

    fetch(url) 
        .then((response) => response.json())

        .then(function(data) {
            let jokes = data.joke;
            pTag.innerHTML = jokes;
        })
        .catch(function() {
            const error = pTag.innerHTML = "Something went really wrong."
            console.log(error);
    });
}
