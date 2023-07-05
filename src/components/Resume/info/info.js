import React from 'react'
import './info.css'

const Info = () =>{
    const firstname = 'Michael';
    const secondname = 'Murwayi';
    const number = '+254746256084';
    const email = 'mikemurwayi7@gmail.com';

    return (
        <div className='info-card row'>
            <div className='info-card-image col-md-5'></div>
            
            <div className='info-card-content col-md-7 row'>
                <div className='col-md-4'>
                    <p>Firstname </p>
                    <hr/>
                    <p>Secondname</p>
                    <hr/>
                    <p>Number</p>
                    <hr/>
                    <p>Email</p>
                </div>
                <div className='col-md-4'>
                    <h6> {firstname} </h6>
                    
                    <h6>{secondname} </h6>
                    
                    <h6>{number}</h6>
                    
                    <h6>{email}</h6>
                    
                </div>
            </div>
        </div>
    )
} 

export default Info