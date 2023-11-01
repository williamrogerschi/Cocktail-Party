import { RANDOM_URL } from '../global'
import axios from 'axios'
import { useState, useEffect } from "react";


// const Random = () => {

//

//     const displayRandomDrink = async () => {
//         try {
//           const randomData = await axios.get(RANDOM_URL)
//           const randomDrink = randomData.data.drinks[0]
//           console.log(randomDrink)
    
//           if (randomDrink) {
//             alert(`Random Drink: ${randomDrink.strDrink}`)
//           } else {
//             alert('No random drink data available.')
//           }
//         } catch (error) {
//           console.error('Error:', error)
//         }
//       }

      
    



//     return (
//         <div className="random-container">
//             <h1>Random Drinks</h1>
//             <div className='random-drink-card'>
//                 <h2>Ingredient1: {randomDrink.strIngredient1} </h2>
//                 <img src={randomDrink.strDrinkThumb}></img>    

                

//             <button onClick={displayRandomDrink}>Display Random Drink</button>


//             </div>
            
            
//         </div>
//     )
// }

// export default Random


const Random = () => {
    const [randomDrink, setRandomDrink] = useState(null)
  
    const displayRandomDrink = async () => {
      try {
        const randomData = await axios.get(RANDOM_URL)
        const randomDrinkData = randomData.data.drinks[0]
        console.log(randomDrinkData)
  
        if (randomDrinkData) {
          setRandomDrink(randomDrinkData)
        } else {
          alert('No random drink data available.')
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }

    const displayIngredients = () => {
        const ingredients = [];
        for (let i = 1; i <= 15; i++) {
          const ingredient = randomDrink[`strIngredient${i}`]
          if (ingredient) {
            ingredients.push(ingredient)
          }
        }
        return ingredients.join(', ')
    }
  
    return (
      <div className="random-container">
        <h1>Random Drinks</h1>
        <div className="random-drink-card">
          {randomDrink && (
            <div>
              <h2>Drink Name: {randomDrink.strDrink}</h2>
              <img src={randomDrink.strDrinkThumb} alt={randomDrink.strDrink} />
              <p>Ingredients: {displayIngredients()}</p>
              <p>Type: {randomDrink.strAlcoholic}</p>
              <p>Instructions: {randomDrink.strInstructions}</p>
              <p>Category: {randomDrink.strCategory}</p>
            </div>
          )}
          <button onClick={displayRandomDrink}>Display Random Drink</button>
        </div>
      </div>
    );
  };
  
  export default Random;