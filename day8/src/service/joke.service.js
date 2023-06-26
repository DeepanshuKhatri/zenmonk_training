import axios from 'axios'
const fetchJoke = async ()=>  axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist&type=single")

export default fetchJoke;