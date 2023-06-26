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
                    <a href="#news">Blog</a>
                    <a href="#contact">Resume</a>
                    <a href="#about"><button className='btn btn-sm btn-primary'>Download Resume</button></a>
                    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </div>
            <div className='section'>
                <div className='col1'>
                    <div className='card'>

                    </div>
                </div>
                <div className='col2'>
                    <div className='info'>
                        <div className='col'>
                            <p>Name</p>
                            <h5>Michael Murwayi</h5>
                        </div>

                        <div className='col'>
                            <p>Role</p>
                            <h5>Software Developer</h5>
                        </div>
                        <div className='bio'>
                            <p>Bio</p>
                            <span>As a code composer, I dance with algorithms, orchestrating symphonies of efficiency and functionality. With each keystroke, I strive to create clean, scalable, and maintainable software architectures, harnessing the power of cutting-edge technologies and frameworks.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer'>
            </div>
        </div>
    );
};

export default Home;