export default {
    getJokes() {

        const joke = document.querySelector('#joke');
        const btn = document.querySelector('#btn');

        let getJoke = async () => {
            const urlAPI = await fetch("https://v2.jokeapi.dev/joke/Any");
            const responseJson = await urlAPI.json();

            joke.textContent = responseJson.joke || `${responseJson.setup} ${responseJson.delivery}`;
        }

        btn.addEventListener('click', getJoke)

    }
}