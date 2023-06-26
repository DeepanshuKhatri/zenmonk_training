import axios from 'axios'
const fetchCountry = async ()=>{
    return await axios.get("https://restcountries.com/v3.1/all?fields=name")
}
export default fetchCountry;