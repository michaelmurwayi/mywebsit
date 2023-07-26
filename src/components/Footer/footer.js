import React from 'react'


const Footer = () =>{
    const currentYear = new Date().getFullYear();
    const company = "huncho Inc";
    return (
        <footer class="footer">
        <div class="container">
            <p>&copy; {currentYear} {company}. All rights reserved.</p>
        </div>
        </footer>

    )
}

export default Footer