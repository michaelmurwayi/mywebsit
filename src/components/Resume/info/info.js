import React from 'react'
import './info.css'
import { connect } from 'react-redux';

const Info = ({dev, nationality, number, email}) =>{
    
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
                    <h6> {dev} </h6>
                    
                    <h6>{nationality}</h6>
                    
                    <h6>{number}</h6>
                    
                    <h6>{email}</h6>
                    
                </div>
            </div>
        </div>
    )
} 

const mapStateToProps = (state) =>{
    return {
        dev: state.reducer.dev,
        nationality: state.reducer.nationality,
        number: state.reducer.nationality,
        email: state.reducer.email
    }
}

export default connect(mapStateToProps)(Info)