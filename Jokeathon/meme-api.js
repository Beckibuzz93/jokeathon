// https://api.imgflip.com/
function meme() {
    const url = 'https://api.imgflip.com/get_memes';
    const imgTag = document.getElementById('imgTag');

    fetch(url)
    .then((response) => response.json())

    .then(function(data) {
        let randomMemes = data.data.memes;
        let randomItem = randomMemes[Math.floor(Math.random() * randomMemes.length)];
        console.log(randomItem.url);

        imgTag.src = randomItem.url;

    })

    .catch(function(error) {
        console.log(error);
    });

}