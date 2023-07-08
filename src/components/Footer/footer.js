import React from 'react'


const Footer = () =>{
    const currentYear = new Date().getFullYear();
    return (
        <footer class="footer">
        <div class="container">
            <p>&copy; {currentYear} Your Company. All rights reserved.</p>
        </div>
        </footer>

    )
}

export default Footer