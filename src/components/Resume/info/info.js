import React from 'react'
import './info.css'

const Info = () =>{
    const firstname = 'Michael';
    const secondname = 'Murwayi';
    const nationality = 'Kenyan';
    const number = '+254746256084';
    const email = 'mikemurwayi7@gmail.com';

    return (
        <div className='info-card row'>
            <div className='info-card-image col-md-5'></div>
            
            <div className='info-card-content col-md-7 row'>
                <div className='col-md-4'>
                    <p>Name</p>
                    <hr/>
                    <p>Nationality</p>
                    <hr/>
                    <p>Number</p>
                    <hr/>
                    <p>Email</p>
                </div>
                <div className='col-md-6'>
                    <h6> {firstname} {secondname} </h6>
                    
                    <h6>{nationality}</h6>
                    
                    <h6>{number}</h6>
                    
                    <h6>{email}</h6>
                    
                </div>
            </div>
        </div>
    )
} 

export default Info