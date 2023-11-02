import { Link } from "react-router-dom"

const Nav = () => {


    return <div className="navbar">
        <Link to="/"> Home </Link>
        <Link to="/Drinks"> Drinks </Link>
        <Link to="/Random"> Random Drinks </Link>

    </div>
}

export default Nav