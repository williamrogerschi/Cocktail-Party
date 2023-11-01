import { ID_URL } from '../global'
import axios from 'axios'
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


export default function DrinkDetails(){

    //setting up the individiual starship in state
    const [drink, setDrink] = useState()
    console.log(drink)
    //setting up the param to pull to be the ship's ID
    let {id} = useParams()
    
    useEffect(()=>{
      const getDrink = async() => {
        const response = await axios.get(`${ID_URL}${id}`)
        console.log(response.data)
        setDrink(response.data.drinks[0])
      }
      getDrink()
    },[])

    const displayIngredients = () => {
      const ingredientsWithAmounts = []
      for (let i = 1; i <= 15; i++) {
        const ingredient = drink[`strIngredient${i}`]
        const measure = drink[`strMeasure${i}`]
        
        if (ingredient) {
          ingredientsWithAmounts.push({ ingredient, measure })
        }
      }
      return ingredientsWithAmounts
  }
    
    



    return (
      <div className="random-container">
        <h1>Random Drinks</h1>
        <div className="random-drink-card">
          {drink && (
            <div className='drink-content'>
              <h2>{drink.strDrink}</h2>
              <img id='random-drink-image' src={drink.strDrinkThumb} alt={drink.strDrink} />
              {/* <p>Ingredients: {displayIngredients()}</p> */}
              <p><strong>Type:</strong> {drink.strAlcoholic}</p>
              <p><strong>Category:</strong> {drink.strCategory}</p>
              <p className='instructions'>Instructions: {drink.strInstructions}</p>
              <table>
              <thead>
                <tr>
                  <th>Ingredients</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {displayIngredients().map((item, index) => (
                  <tr key={index}>
                    <td>{item.ingredient}</td>
                    <td>{item.measure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            </div>
          )}
        
        </div>
        <Link to="/Drinks"> Return to Drinks page</Link>
      </div>
      
    );
}