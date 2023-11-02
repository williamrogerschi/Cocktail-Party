import { Route, Routes } from 'react-router-dom'
//import components
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import Drinks from './Drinks'
import Random from './Random'
import DrinkDetails from './DrinkDetails'



const Main = () => {

    return (
        
    <div className="Main">
        <div className='header-container'>
            <Header/>
            <Nav/>
        </div>
        <Routes>
            <Route path='/Drinks' element={<Drinks/>}/>
            <Route path='/Drinks/:id' element={<DrinkDetails/>}/>
            <Route path='/Random' element={<Random/>}/>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </div>
)
}

export default Main