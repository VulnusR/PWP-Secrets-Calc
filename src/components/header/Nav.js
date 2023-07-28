import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../assets/header.css';





function NavItem(props) {
    const location = useLocation();
  
    // check if the current location matches the NavItem path
    const isActive = location.pathname === props.path;
  
    // add the active class if the NavItem is active
    const buttonClass = isActive ? "Nav-btn-active" : "Nav-btn";
    
    return (
      <li>
        <Link to={props.path}>
          <button className={buttonClass}>
            {props.text}
          </button>
        </Link>
      </li>
    );
}



function Navbar() {
   
    return (
        
             <nav className="index-menu" style={{ listStyleType: 'none' }}>
                <NavItem path="/PWP-Secrets_Calculator/Data" text="Data" />
                <NavItem path="/PWP-Secrets_Calculator/Data" text="Assignments" />
                <NavItem path="/PWP-Secrets_Calculator/Data" text="Operations" />
                <NavItem path="/PWP-Secrets_Calculator/Data" text="History" />
              </nav>
        
    );
}


export default Navbar;