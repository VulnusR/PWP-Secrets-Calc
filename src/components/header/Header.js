import React from 'react';
import '../../assets/header.css';
import Timebar from './Timebar';
import Navbar from './Nav';


function Header() {
   
    return (
        <div className='Header-js-parent'>
            <Timebar />
            <div className='header-lower'>
                <Navbar />
            </div>
        </div>
    );
}


export default Header;