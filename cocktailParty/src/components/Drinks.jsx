import { BASE_URL } from '../global'
import axios from 'axios'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";




const Drinks = () => {

    const [drink, setDrink] = useState([])
    const [endpoint, setEndpoint] = useState({ text: '' });
    


    

       

    //   let navigate = useNavigate()

    //     const showDrink = (key) => {
    //         navigate(`${key}`)
    //     }


      const handleChange = (event) => {
        setEndpoint({ text: event.target.value });
      };

      const handleSubmit  = async (event) => {
        event.preventDefault();
            const response1 = await axios.get(`${BASE_URL}${endpoint.text}`);
            setDrink(response1.data.drinks);
            console.log(response1.data.drinks);
        // The axios call will be made automatically due to the dependency on 'endpoint' in the useEffect.
      };
      console.log('drinkData:', drink);

      if(!drink){
        console.log("loading")
        return(
            <h2>Loading...</h2>
        )
      } else {
    return (
        <div className="drink-container">
            <h1>input a drink</h1>
            <form onSubmit={handleSubmit}> 
            <label htmlFor="text">alchohol:</label>
            <input
                id="text"
                type="text"
             onChange={handleChange}
                value={endpoint.text}
            />
            <button type="submit">Search</button>
            </form>
            <div className='drink-map'>
            {drink.map((drink, key) => (
            <div className="drink-card" onClick={()=>handleSubmit(key)} key={key}>
              <h2>Name: {drink.strDrink}</h2>

            </div>
            ))}  

            </div>
            
        </div>
    )
    }
}

export default Drinks