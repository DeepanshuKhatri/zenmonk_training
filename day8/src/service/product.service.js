import axios from 'axios';


const fetchJoke = async()=>{
    
    return await axios.get("https://dummyjson.com/products");
}
export default fetchJoke;
