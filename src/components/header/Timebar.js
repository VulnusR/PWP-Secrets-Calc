import React, { useState, useEffect } from 'react';
import '../../assets/header.css';


function Timebar() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const hours = now.getUTCHours().toString().padStart(2, '0');
            const minutes = now.getUTCMinutes().toString().padStart(2, '0');
            const seconds = now.getUTCSeconds().toString().padStart(2, '0');
            setTime(`${hours}:${minutes}:${seconds}`);
        },   1000);
    
      return () => clearInterval(intervalId);
    }, []);


    return (
        <header>
        <div className="header-parent">
            <div className='header-upper'>
                <h3 className='header-time'>{time}</h3>
            </div>
            </div>
        </header>
    );
}


export default Timebar;