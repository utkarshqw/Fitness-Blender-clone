import axios from "axios"
import { useContext } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../Context/AppContext"
import styles from "./Login.module.css"



export default function Login(){
     const {con,logs} = useContext(AppContext)
    const [init,setinit] = useState({email:"",password:""})
    const navigate = useNavigate()

    const handleChange = (e) => {
        const {name,value} = e.target 

        setinit({...init,
        [name]:value
        })
    }

    const handleSubmit = (e) => {
           e.preventDefault()

           axios.post(`https://reqres.in/api/login`,{
            email:init.email,
            password:init.password
           })
           .then((res)=>{
            alert("Login Success")
            logs()
            navigate("/")
           })
    }

    return (
        <>
      
        
        <div className={styles.loginContainer} >
         { con.isAuth && <p style={{fontSize:"40px"}}>You are already</p>}
          
          <p style={{fontSize:"40px"}}>Sign In</p>
          <br />
          <br />
          
           <div className={styles.form}>
          <form onSubmit={handleSubmit} className={styles.loginform} >
            <input onChange={handleChange} name="email" value={init.email} type="text"  placeholder="Email"/>
            
            
            <input onChange={handleChange} name="password" value={init.password} type="password" placeholder="Password" />
            
            <input disabled={con.isAuth} type="submit" value={"Sing In"} />
          </form>
          </div>
        </div>
    
        </>
    )
} 