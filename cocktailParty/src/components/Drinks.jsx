import { BASE_URL } from '../global'
import axios from 'axios'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";





const Drinks = () => {

    const [drink, setDrink] = useState([])
    const [drinkID, setDrinkId] = useState([])
    const [endpoint, setEndpoint] = useState({ text: '' });
    
    const maxDrinks = 30


      let navigate = useNavigate()

        const showDrink = (key) => {
            navigate(`${key}`)
        }


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
            <div className='search-container'>
              <h1>Cocktail by Spirit</h1>
              <h4>Here you can use the search bar below to search for your favorite Cocktail by Spririt.</h4>
              <p>Here are some popular spirits to help you get started!</p>
                <ul className='search-ul'>
                  <li>Gin</li>
                  <li>Whiskey</li>
                  <li>Vodka</li>
                  <li>Tequila</li>
                </ul>
            </div>
              <div className='form-container'>
            <form onSubmit={handleSubmit}> 
                <label htmlFor="text"></label>
                <input className='input-box'
                    id="text"
                    type="text"
                    placeholder='Search by Spirit!'
                    onChange={handleChange}
                    value={endpoint.text}
                />
                <button type="submit">Search</button>
            </form>
          </div>
            <div className='drink-map'>
            {drink.slice(0, maxDrinks).map((drink, key) => (
                <div className="drink-card" onClick={() => showDrink(key)} key={key}>
                <h2>{drink.strDrink}</h2>
                <img className='drink-card-image' src={drink.strDrinkThumb} alt={drink.strDrink} />
                <h3>{drink.idDrink}</h3>
                </div>
            ))}
            </div>
            
        </div>
    )
    }
}

export default Drinks
