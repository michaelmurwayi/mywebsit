import React from 'react';
import './Home.css';
import Nav from '../Navigation/Nav'
import { connect } from 'react-redux';


const Home = ({dev, role, bio}) =>{
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
                            <h5>{dev}</h5>
                        </div>

                        <div className='col'>
                            <p>Role</p>
                            <h5>{role}</h5>
                        </div>
                        <div className='bio'>
                            <p>Bio</p>
                            <span>{bio}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return{
        dev: state.reducer.dev,
        role: state.reducer.role,
        bio: state.reducer.bio
    }
}

export default connect(mapStateToProps)(Home);