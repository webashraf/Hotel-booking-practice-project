import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='hotel-header text-white'>
            <div className="navbar bg-transparent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        <Link to={'/'}>
                        <li>Home</li>
                        </Link>                                        
                            <Link>
                            <li>Packeges</li></Link>
                        </ul>
                    </div>
                    <Link to={"/"} className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-3">
                        <Link to={'/'}>
                        <li>Home</li>
                        </Link>                                           
                        <Link>
                        <li>Packeges</li>
                        </Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={"/login"} className="btn">Log In</Link>
                    <Link to={"/register"} className="btn">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;