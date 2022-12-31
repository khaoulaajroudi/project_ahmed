import "./NavbarStyle.css";
import React from 'react';
import { MenuNav } from "./MenuNav";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
        <nav className="first">
            <h1 className="navbar-logo">Trippy</h1>
            

            
            <ul className="nav-menu">
                {MenuNav.map((nav, index)=>{
                return(
                    <li key={index}>
                    <Link className={nav.cName} to={nav.url}>  <i className={nav.icon}>{nav.title}</i></Link>
                    
                      
                      
                </li>
               )
            })}
               <button>Sign Up</button>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;