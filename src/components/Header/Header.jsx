import "../Header/styles.scss"
import logo from "../Image/logo.png"
import { AiOutlineSearch } from "react-icons/ai"

function Header() {
    return (
        <div className='headercontainer'>
            <img src={logo} alt=""/>
            <h1>Masters Games</h1>
        <div className="searchheader">
            <AiOutlineSearch/>
            <input className="searchinput" placeholder="Busque o game"/>
        </div>
        </div>

    )
}

export default Header