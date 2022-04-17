import React from 'react';
import { Link } from "react-router-dom"

export const Signup = () => {
    return (
        <div>
            <h3>Sign Up</h3>
            <div>
                <form>
                        <span>Name</span><input type="text" className='name'/>
                        <br /><br />
                        <span>Email</span><input type="text" className='email'/>
                        <br /><br />
                        <span>Password</span><input type="text" className='password'/>
                        <br /><br />
                        <input type="submit" className='submit'/>
                </form>
                <br /><br />
                <Link to={"/login"} ><button>Go to Login</button></Link> 
            </div>
        </div>
    );
};
