import React from 'react'
import './Nav.css'

const Nav = () => {

    return (
        <div className='topnav'>
                <div className='name'>
                    <h3>Michael Murwayi</h3>
                </div>
                <div className='nav-items'>
                    <a href="/" className="active">Home</a>
                    <a href="blog">Blog</a>
                    <a href="resume">Resume</a>
                    <a ><button className='btn btn-sm btn-primary'>Download Resume</button></a>
                    <a className="icon" >
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </div>
    )
}

export default Nav;