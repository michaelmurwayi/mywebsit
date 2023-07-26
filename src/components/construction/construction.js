import React from "react";
import "./construction.css"
import { Link } from 'react-router-dom';

const Construction = () => {
    return (
        <div>
            <div className="header">

            </div>
            <div className="warning">
                <h1>Sorry. This Page is Still under construction</h1>
                <h4>Our Development Team is working hard to bring it up</h4>
                <Link to="/">
                    <button className="btn btn-primary">Back Home</button>
                </Link>

            </div>
        </div>
    )
}

export default Construction