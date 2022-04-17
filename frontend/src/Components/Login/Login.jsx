import "./Login.css"
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"



export const Login = () =>{

    const navigate = useNavigate()

    const [user,setUser] = useState({
        email : "",
        password : ""
    })
    console.log(user)

    const handlechange = (event) =>{
        setUser({...user,[event.target.className]:event.target.value})

    }

    const handlenavigate = () => {
        navigate("/users")
    }

    return(
        <>
        <h3>Login Here</h3>
        <div>
        
            <div>
                
            <div>
                <Link to={"/signup"} ><button>Signup</button></Link> 
                </div>
        <br /><br />
                <form onSubmit={(e)=>{
                }}>
                    <input onChange={(e)=>{handlechange(e)}} type="text" className="email"  placeholder="Email Address"/> <br /> <br />
                    <input onChange={(e)=>{handlechange(e)}}type="password" className="password" placeholder="Password" /> <br /> <br />
                    
                    <input className="submitBtn" type="submit" onClick={handlenavigate}/>
                    </form>   
            </div>
        </div>
        
        </>
    )

}