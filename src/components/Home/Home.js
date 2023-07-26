import React from 'react';
import './Home.css';
import Nav from '../Navigation/Nav'


const Home = () =>{
    return (
        <div className='main'>
            <Nav/>
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
        </div>
    );
};

export default Home;