import React from 'react';
import './navbarStyles.css';
import logo from './logo.png'

class Navbar extends React.Component {
    render() {
        return (
            <div className='navbar'>
                <div style={{ float: 'left'}}>
                  <img className='logo' src={logo} />
                </div>
                <div className='logo-text'>
                    <p><b>Your Progress</b> IELTS Academic</p>
                </div>
                <div className='navbar-options'>
                    <div className='links'>
                    <a class="nav-link nav-link-grow-up active" href="#">Listening</a>
                    </div>
                    <div className='links'>
                    <a class="nav-link nav-link-grow-up" href="#">Reading</a>
                    </div>
                    <div className='links'>
                    <a class="nav-link nav-link-grow-up" href="#">Writing</a>
                    </div>
                    <div className='links'>
                    <a class="nav-link nav-link-grow-up" href="#">Speaking</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;