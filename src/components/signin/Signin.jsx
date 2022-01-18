import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Signin.module.css"

const Signin=()=>{
    const[password,setPassword]=useState('')
    const[email,setEmail]=useState('')
    const[psserror,setPssError]=useState(false)
    const[emailerror,setEmailerror]=useState(false)
    const validemail= /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    


   const  onEmailchangeHandler=(e)=>{
       const item=e.target.value
       setEmail(item)
      
    }
    const  onPasswordchangeHandler=(e)=>{
        const item=e.target.value
        setPassword(item)
     }

    const submitHandler=()=>{
        setEmailerror(false)
        setPssError(false)
       if (!password){
            setPssError(true)  
        }
         if (!email){
            setEmailerror(true)
        } else if(!validemail.test(email)){
            setEmailerror(true)
        }
       
       
        return;  
    }

    return(
        <>
        <div className={style.body}>
            <h2>Sign In</h2>
            <div className={style.form}>
                <div>
                <label>Email Address</label>
                <div className={style.box} >
                <input className={emailerror?`${style.input} ${style.errormsg}`:style.input} 
                type="email" placeholder="Enter Email"
                 value={email} 
                 onChange={onEmailchangeHandler}/>
                 {emailerror && <span className={style.error}>{"Enter the correct email"}</span>}
                 </div>
                </div>

                <div>
                <label>Password</label>
                <div className={style.box}>
                <input className={psserror?`${style.input} ${style.errormsg}`:style.input}
                 type="password" placeholder="Enter password"
                  value={password}
                  onChange={onPasswordchangeHandler}
                   />
                    {psserror&& <span className={style.error}>{"Enter the password"}</span>
                    }  
                </div>
                </div>

                <div>
                <input className={style.checkbox} type="checkbox" />
                <label>Remember me</label>
                </div>
                <div >
                <button  className={style.button} onClick={submitHandler}>Submit</button>
                </div>
                <div className={style.forgot}>
                <label>Create new account</label>
                <Link className={style.link} to="/signup">Signup</Link>
                </div>
                
            </div>
        </div>
       
        </>
    )
};
export default Signin;