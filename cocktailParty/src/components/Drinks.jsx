import { BASE_URL } from '../global'
import axios from 'axios'
import { useState, useEffect } from "react";


const Drinks = () => {

    const [drink, setDrink] = useState([])

    useEffect(() => {
        const getDrink = async () => {
          let response1 = await axios.get(`${BASE_URL}gin`);
          setDrink(response1.drinks);
          console.log(response1.data);
        };
        getDrink();
      }, []);

    return (
        <div className="drink-container">
            <h1>Drinks</h1>
        </div>
    )
}

export default Drinks
