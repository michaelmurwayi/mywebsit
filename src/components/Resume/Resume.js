import React from 'react'
import Nav from '../Navigation/Nav'
import './Resume.css'
import Info from './info/info'

const Resume = () =>{
    return (
        <div>
            <Nav/>
            <header className="video-background">
                <video autoPlay muted loop className="video">
                    <source src="/videos/background.mp4" type="video/mp4"/>
                </video>
            </header>
            <Info/>
                
        </div>
    )
}

export default Resume