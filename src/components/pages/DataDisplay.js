import React from 'react';
import '../../assets/index.css';
import '../../assets/header.css';
import Header from '../header/Header';



function DataPage() {
    
    return(
        <div className="body-parent">
        <Header />
        <div className="index-container">
            <div className='page-title-container'>
                <h2 className='page-title'>Data</h2>
            </div>
            <div className='page-main-container'>
                <div className='data-content-parent'>
                    <div className='data-content-top'>
                        <button className='refresh-btn'>Refresh</button>
                    </div>
                    
                    <div className='data-content-lower'>

                    </div>
                </div>
            </div>

         {/*
          <div className="index-parent">
            <div className="index-content-parent">
                <div className='index-title-parent'>
                    <h1 className="index-title">Post World Powers</h1>
                    <h2 className="index-subtitle">Secrets Calculator</h2>
                </div>
              <div className="index-menu">
                
              </div>
            </div>
          </div>
    */}
          
        </div>
      </div>
    );
}


export default DataPage;