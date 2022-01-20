import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = ({click}) => {
    return (
        <nav className="navbar">
           {/* Logo */}
            <div className="navbar__logo">
                <h2>MERN Shopping Cart</h2>
            </div>
           {/* Links */}
            <ul className="navbar__links">
               <li>
                   <Link to="/cart" className="cart__link">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cartlogo__count">
                    Cart
                    </span>
                    <span className="cartlogo__count">0</span>
                   </Link>
               </li>
               <li>
                   <Link to="/">
                    Shop 
                   </Link>
               </li>
            </ul>
           {/* hambuger menu */}
           <div className="hambuger__menu" onClick={click}>
           <div></div>
           <div></div>
           <div></div>
           </div>
        </nav>
    )
}

export default Navbar; 