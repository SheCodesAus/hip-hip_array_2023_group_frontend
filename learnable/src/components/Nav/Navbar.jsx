import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css";
import navLogo from "../../assets/logo.png"
// import WorkshopCard from "../../components/WorkshopCard";

function Nav() {

    const ShowLoginButton = window.localStorage.getItem("token") === null;

    const navigate = useNavigate()
    const onLogOut = (event) =>{
        event.preventDefault()
        localStorage.clear()
        navigate("/")
    }
    let loginStuff;
    if (ShowLoginButton) {
        loginStuff = (<div>
            <div className="nav-btns">
            <Link to="/login">Login</Link>
            <button className="btn-1"><Link to="/createaccount">Create an account</Link></button>
            </div>
            
        </div>)
    }
    else {
        loginStuff = (<div>
        
            <button className="btn-1"><Link to="/Workshops">Workshops</Link></button>
            <button className="btn-2"><Link to="/workshop-form">Create a Workshop</Link></button>
            <button className="btn-7" onClick={onLogOut}> Logout</button>
        </div>)
    }
    return (
        <nav className="navbar">
                    <Link to="/"><img src={ navLogo } className="logo" alt="logo" /></Link>
                    <div className="links">
                    
                    { loginStuff }
                    
                    </div>

            
        </nav>
    )
};

export default Nav;
