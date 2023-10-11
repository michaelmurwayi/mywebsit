import React from 'react'
import './Nav.css'
import { connect } from 'react-redux'
import Button from './download_button/button'

const Nav = ({dev}) => {
    return (
        <div className='topnav'>
                <div className='name'>
                    <h3>{ dev }</h3>
                </div>
                <div className='nav-items'>
                    <a href="/" className="active">Home</a>
                    <a href="blog">Blog</a>
                    <a href="resume">Resume</a>
                    <Button/>
                    <a className="icon" >
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        dev: state.reducer.dev,
        
    }
}

export default connect(mapStateToProps)(Nav);