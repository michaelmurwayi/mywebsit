import React from 'react'
import './NotFound.css'

const NotFound = () =>{
    return (
        <div className='not-found'>
            <div className='header col-md-12'>
                <h1> Error 404 ! </h1>
                <h1>PAGE NOT FOUND</h1>
            </div>
            <div className='back col-md-12'>
                <p className=''>Back Home</p>
                <hr/>
            </div>
        </div>
    )
}


export default NotFound