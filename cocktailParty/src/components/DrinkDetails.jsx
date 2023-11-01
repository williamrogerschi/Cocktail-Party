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
        const response = await axios.get(`${ID_URL}15300`)
        console.log(response.data.drinks[0].idDrink)
        setDrink(response.data.drinks[0])
      }
      getDrink()
    },[])
    
    
    return drink ? (
      <div className="detail">
        <h2>Name: {drink.idDrink}</h2> 
        <Link to="/Drinks"> Return to Drinks page</Link>
      </div>
    ) : <h3>Finding Drink...</h3>
    }