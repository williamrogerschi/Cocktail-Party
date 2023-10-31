import { Link } from "react-router-dom"

const Nav = () => {


    return <div className="Navbar">
        <Link to="/Drinks"> Drinks by Recipe </Link>
        <Link to="/Random"> Random Drinks </Link>
        <Link to="/"> Home </Link>
    </div>
}

export default Nav