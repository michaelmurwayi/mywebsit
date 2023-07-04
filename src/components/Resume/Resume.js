import React from 'react'
import Nav from '../Navigation/Nav'
import './Resume.css'

const Resume = () =>{
    return (
        <div>
            <Nav/>
            <header className="video-background">
                <video autoPlay muted loop className="video">
                    <source src="/videos/background.mp4" type="video/mp4"/>
                </video>
                
                <div className="content">
                    <h1>Your Website Title</h1>
                    <p>Subtitle or tagline</p>
                </div>
            </header>
        </div>
    )
}

export default Resume