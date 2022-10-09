import React from 'react'
import './Sitebar.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const Sitebar = () => {
  return (
    <div className='Sitebar'>
        <div className='Sitebar-heading'>
            <h3>Deshboard Kit</h3>
        </div>
        <Router><div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Overview</Link>
                    </li>
                    <li>
                        <Link to="/Tickets">Tickets</Link>
                    </li>
                    <li>
                        <Link to="/Ideas">Ideas</Link>
                    </li>
                    <li>
                        <Link to="/Contacts">Contacts</Link>
                    </li>
                    <li>
                        <Link to="/Agents">Agents</Link>
                    </li>
                    <li>
                        <Link to="/Articles">Articles</Link>
                    </li>
                    <hr/>
                    <li>
                        <Link to="/Settings">Settings</Link>
                    </li>
                    <li>
                        <Link to="/Subscription">Subscription</Link>
                    </li>
                </ul>
            </nav>
        </div></Router>
    </div>
  )
}

export default Sitebar