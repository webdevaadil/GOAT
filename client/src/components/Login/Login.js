import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import "./Login.css";
import axios from "axios";
import {clearErrors,login } from "../../actions/userAction";
import image1 from "../../Images/Rectangle1.jpg"
import { Metadata } from "../layout/Metadata";
import { Loader } from "../layout/Loader";
import {useAlert, userAlert} from "react-alert"

export const Login = () => {
  const {user,error,loading,isAuthenticated}  = useSelector((state)=>state.user)

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert()

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const handleSubmit = async(e)=>{
    e.preventDefault()
    
    try {
    
      dispatch(login(loginEmail,loginPassword))
    

    } 
    catch (error) {
      if(error){
    return error
      }

    }}
    useEffect(()=>{

if(error){
  alert.error(error)
  dispatch(clearErrors());
}

      if(isAuthenticated){

        navigate("/") 
      }
     
    },[error,navigate,isAuthenticated,loading])

  return (
    <>
    {loading&&<Loader/>}
    <Metadata title = "loginUser"/>

    <section id="form-section">
    <div className="wel-form">
      <div className="wel-p1 img-main">
        <div className="img-main">
        </div>
      </div>
      <div className="wel-p1 wel-bg">
        <div className="form-content">
          <h2>Welcome!</h2>
          <div className="form-main">
            <form onSubmit={handleSubmit} className="form-floating mb-3">
              <input onChange={(e)=>(setLoginEmail(e.target.value))} name = "email" value = {loginEmail} type="email"
              className="form-control mb-4" id="floatingInputValue" placeholder="yourmail@mail.com"/>
              <label for="floatingInputValue">Email Address</label>
              <div className="form-floating mb-3">
                <input 
                name="password"
                value={loginPassword}

                onChange={(e)=>setLoginPassword(e.target.value)}
                type="password" className="form-control" id="myInput" placeholder="*******" />
                <i className="fa fa-eye" onclick="myFunction()"></i>
                <label for="floatingPassword">Passwords</label>
              </div>
              <div className="fom-btn mb-3">
                <button style={{backgroundColor:" #10867F",color:'black'}} disabled = {loginPassword==""} type="submit" className="btn btn-outline-secondary">Login</button>
                <Link to ="/signup"  className="btn btn-outline-secondary">Sign Up</Link>

              </div>
            </form>
           
          </div>
          <p>By signing up, I agree to the <span>Terms and conditions and Privacy policy</span></p>

        </div>
      </div>
    </div>

  </section>

    </>
  );
}

{/* <div className="login_container">
  <div className="login_form_container">
    <div className="login_left">
<img src={image1} alt="" />
    </div>
    <div className="login_right">
      <form onSubmit={handleSubmit} action="" className="form_container">
        <h1>Welcome!</h1>
<div className="input_label">
<label htmlFor="email">Email</label>
        <input
          onChange={(e)=>(setLoginEmail(e.target.value))}
          type="email"
          placeholder="yourmail@gmail.com"
          name="email"
          required
          value={loginEmail}
          className="login_input"
        />
</div>

<div className="input_label">
<label htmlFor="Password">Password</label>

        <input
          onChange={(e)=>setLoginPassword(e.target.value)}
          type="password"
          placeholder="*************"
          name="password"
          required
          value={loginPassword}
          className="login_input"
          />
</div>

{/* {error && <div className="error_msg">{error}</div>} */}

//         <button type = "submit" className="login_btn white">Login</button>

          
//       </form>
//     </div>
//   </div>
// </div> */}