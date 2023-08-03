import React from 'react'
import { connect } from 'react-redux';

const Footer = ({dev,year}) =>{
    return (
        <footer class="footer">
        <div class="container">
            <p>&copy; {year} {dev}. All rights reserved.</p>
        </div>
        </footer>

    )
}

const mapStateToProps = (state) =>{
    return {
        dev: state.reducer.dev,
        year: state.reducer.currentYear
    }
}

export default connect(mapStateToProps)(Footer)