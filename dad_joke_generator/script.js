const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    //Using async/await
    const red = await fetch('https://icanhazdadjoke.com', config)
    const data = await red.json()

    jokeEl.innerHTML = data.joke
    // Basic successful call
    // fetch('https://icanhazdadjoke.com', config)
    //     .then(res => res.json())
    //     .then(data => {
    //         jokeEl.innerHTML = data.joke
    //     })
}