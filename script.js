const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single';


// Function for getting random joke
let getJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => {
        joke.textContent = `${item.joke}`
    });
}
getJoke();


jokeBtn.addEventListener("click", getJoke)




 