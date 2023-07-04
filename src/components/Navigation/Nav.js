import React from 'react'
import './Nav.css'

const Nav = () => {

    return (
        <div className='topnav'>
                <div className='name'>
                    <h2>Michael Murwayi</h2>
                </div>
                <div className='nav-items'>
                    <a href="#home" className="active">Home</a>
                    <a href="#news">Blog</a>
                    <a href="#contact">Resume</a>
                    <a href="#about"><button className='btn btn-sm btn-primary'>Download Resume</button></a>
                    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </div>
    )
}

export default Nav;