import { BASE_URL } from '../global'
import axios from 'axios'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"






const Drinks = () => {

    const [drink, setDrink] = useState([])
    const [drinkID, setDrinkId] = useState([])
    const [endpoint, setEndpoint] = useState({ text: '' })
    
    const maxDrinks = 30

    





      const handleChange = (event) => {
        setEndpoint({ text: event.target.value })
      };


      const handleSpiritClick = (spirit) => {
        // Set the search text when a spirit is clicked
        setEndpoint({ text: spirit })
      };



      const handleSubmit = async (event) => {
        event.preventDefault()
      
        try {
          const response1 = await axios.get(`${BASE_URL}${endpoint.text}`)
          if (response1.data.drinks) {
            setDrink(response1.data.drinks)
            console.log(response1.data.drinks)
          } else {
            // Handle the case when no data is returned (e.g., incorrect spelling)
            alert('Cocktail not found. Please check your spelling.')
            // Optionally reset the search bar or clear the input
            setEndpoint({ text: '' })
          }
        } catch (error) {
          // Handle other errors (e.g., network issues)
          console.error('An error occurred:', error)
        }
      }
      console.log('drinkData:', drink)



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
                  <li onClick={() => handleSpiritClick('Gin')}>Gin</li>
                  <li onClick={() => handleSpiritClick('Whiskey')}>Whiskey</li>
                  <li onClick={() => handleSpiritClick('Vodka')}>Vodka</li>
                  <li onClick={() => handleSpiritClick('Tequila')}>Tequila</li>
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
                <Link key={drink.idDrink} to={`/Drinks/${drink.idDrink}`}>
                  <div className="drink-card" >
                  <h2>{drink.strDrink}</h2>
                  <img className='drink-card-image' src={drink.strDrinkThumb} alt={drink.strDrink} />
                  
                  </div>
                </Link>
            ))}
            </div>
            
        </div>
    )
    }
}

export default Drinks
