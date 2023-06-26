import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  getProduct } from "./slice/product/productSlice";
import { useSelector } from "react-redux";
import { getCountry } from "./slice/country/countrySlice";
import {getJoke} from './slice/jokes/jokeSlice'

const App = () => {
  const data=useSelector((state)=>{
    return state.product
  })
  const jokeData = useSelector((state)=> state.joke)
  console.log(jokeData)

  const countryData = useSelector((state)=>{
    return state.country;
  })

  const dispatch = useDispatch();
  const show = () => {
    // if(jokeData.length==0){
    // }
    if(data.length==0){
      dispatch(getProduct());
    }
    if(countryData.length==0){
      dispatch(getCountry());  
    }
  };
  useEffect(()=>{
    show();
    dispatch(getJoke());

  },[])

  return (
    <div>
      App
      <div>
      {
        (
          data.map((i,index)=>{
            return <li key={index}>{`${i.title}  =>  ${countryData[index].name.common}`}</li>
          })
        )
      }

      </div>
      {/* <div>
        {jokeData.map((joke, i) => <li key={i}>{jokeData[i].joke}</li>)}

      {/* {jokeData[1].joke} */}
      {/* </div> */} 
      <div>
        {
          jokeData.map((joke, ind)=> <li key={ind}>{joke.joke}</li>)
        }
      </div>

    </div>
  );
};

export default App;
