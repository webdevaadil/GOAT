import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";
import { Loginbtn } from "./Loginbtn";
export const Header = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state);
console.log(user)

  const navigate = useNavigate();
  return (
    <>
          <div className="container-fluid Mainheader">      
        <nav className="container navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/"><img src="../logo.png" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to= "/" className="nav-link" >HOME</Link>
                </li>
                <li className="nav-item">
                  <Link to = "/sports" className="nav-link">SPORTS</Link>
                </li>    
              </ul>
        <Loginbtn/>
            </div>
          </nav>
        </div>
    </>
  );
};
