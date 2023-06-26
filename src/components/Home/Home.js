import React from 'react';
import './Home.css';


const Home = () =>{
    return (
        <div className='main'>
            <div className='topnav'>
                <div className='name'>
                    <h2>Michael Murwayi</h2>
                </div>
                <div className='nav-items'>
                    <a href="#home" className="active">Home</a>
                    <a href="#news">About</a>
                    <a href="#contact">Register</a>
                    <a href="#about">Login</a>
                    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </div>
            <div className='header'>
                <div className='col1'></div>
                <div className='col2'></div>
            </div>
            <div className='section'></div>
            <div className='footer'></div>
        </div>
    );
};

export default Home;