import React from 'react';
import '../../assets/index.css';
import Timebar from '../header/Timebar'
import Auth from './auth';




function Login() {
    
    return(
        <div className="body-parent">
        <Timebar />
        <div className="index-container">
          <div className="index-parent">
            <div className="index-content-parent">
                <div className='index-title-parent'>
                    <h1 className="index-title">Post World Powers</h1>
                    <h2 className="index-subtitle">Secrets Calculator</h2>
                </div>
              <div className="index-menu">
                <Auth />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Login;