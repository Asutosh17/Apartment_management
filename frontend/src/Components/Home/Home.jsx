import React from 'react';
import { Link } from 'react-router-dom'
import axios from "axios"
import './Home.css'


export const Home = () => {
    return (
        <div>
           <navbar className="nav">
               
               <div>
                   <h3>Apartment Manager</h3>
               </div>
               
               <div><Link to="/login"><button className='btn'>Login</button></Link> 
                    <Link to="/signup"><button className='btn'>Sign Up</button></Link>
               </div>
           </navbar>

           <div className='tablediv'>
                   <table>
                       <thead>
                           <th>Flat</th>
                           <th>Block</th>
                           <th>Flat No</th>
                       </thead>
                   </table>
               </div>
        </div>
    );
};
