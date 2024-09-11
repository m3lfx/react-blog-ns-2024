import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getUser, logout } from './helpers';

const Nav = () => {
    let navigate = useNavigate()
    return (
        <nav>
            <ul className="nav nav-tabs">
                <li className="nav-item pr-3 pt-3 pb-3">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item pr-3 pt-3 pb-3">
                    <Link to="/create">Create</Link>
                </li>
                {getUser() ? <li
                    onClick={() => logout(() => navigate('/'))}
                    className="nav-item ml-auto pr-3 pt-3 pb-3"
                    style={{ cursor: 'pointer' }}
                >
                    Logout
                </li> :  <li className="nav-item ml-auto pr-3 pt-3 pb-3">
                    <Link to="/login">Login</Link>
                </li> }
               
            </ul>
        </nav>
    )
}

export default Nav