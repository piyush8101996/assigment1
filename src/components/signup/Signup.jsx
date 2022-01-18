import { Link } from "react-router-dom";
import style from "../signin/Signin.module.css"
import style2 from "./Signup.module.css"
import cx from 'classnames'
import { useState } from "react";

const Signup=()=>{
    const[fname,setFname]=useState()
    const[lname,setLname]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const validemail= /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;


    const[fnameerror,setFnameerror]=useState(false)
    const[lnameerror,setLnameerror]=useState(false)
    const[emailerror,setEmailerror]=useState(false)
    const[passworderror,setPassworderror]=useState(false)
    
    const onfnamechangeHandler=(e)=>{
        const item=e.target.value;
        setFname(item)
        if(item.length<6){
            setFnameerror(true)
        }else{
            setFnameerror(false)

        }
    }
    const onlnamechangeHandler=(e)=>{
        const item=e.target.value;
        setLname(item)
        if(item.length<6){
            setLnameerror(true)
        }else{
            setLnameerror(false)
        }
    }
    const onemailchangeHandler=(e)=>{
        const item=e.target.value;
        setEmail(item)
        if(item.length<6){
            setEmailerror(true)
        }else if(!validemail.test(item)){
            setEmailerror(true)
        }else{
            setEmailerror(false)
        }
    }
    const onepasschangeHandler=(e)=>{
        const item=e.target.value;
        setPassword(item)
        if(item.length<6){
            setPassworderror(true)
        }else{
            setPassworderror(false)
        }
    }
    const signupHandler=()=>{
        setPassworderror(false)
        setEmailerror(false)
        setFnameerror(false)
        setLnameerror(false)
        if(!fname){
            setFnameerror(true)
        }
        if(!lname){
            setLnameerror(true)
        }
        if(!email){
            setEmailerror(true)
        }else if(!validemail.test(email)){
            setEmailerror(true)
        }
        if(!password){
            setPassworderror(true)
        }
        return
    }

    return(
        <div className={ cx(style.body, style2.mainbody) }>
            <h2>Sign Up</h2>
            <div className={style.form}>
                <div className={style.box}>
                <label>First Name</label><br />
                <input className={fnameerror?`${style.input} ${style.errormsg}`:style.input} value={fname} type="text" placeholder="First Name"
                onChange={ onfnamechangeHandler}/>
                {fnameerror&&<span className={style.error}>Enter the first  Name</span>}

                </div>
                <div className={style.box}>
                <label>Last Name</label><br />
                <input className={lnameerror?`${style.input} ${style.errormsg}`:style.input}value={lname} type="text" placeholder="Last Name"
                onChange={onlnamechangeHandler}/>
                 {lnameerror&&<span className={style.error}>Enter the  lat Name</span>}
                </div>
                <div className={style.box}>
                <label>Email</label><br />
                <input className={emailerror?`${style.input} ${style.errormsg}`:style.input} value={email} type="email" placeholder="Enter Email"
                onChange={onemailchangeHandler}/>
                 {emailerror&&<span className={style.error}>Invalid Email</span>}
                </div>
                <div className={style.box}>
                <label>Password</label><br />
                <input className={passworderror?`${style.input} ${style.errormsg}`:style.input} value={password} type="text" placeholder=" Enter Password"
                onChange={ onepasschangeHandler}/>
                 {passworderror&&<span className={style.error}>Enter the min 12 char Password</span>}
                </div>
                <div>
                    <button className={style.button} onClick={signupHandler}>Sign Up</button>
                </div>
                <div className={style.forgot}>
                <label >Already Registered</label>
                <Link className={style.link}to="/">Signin</Link>
                </div>


            </div>
        </div>
    )
}
export default Signup;