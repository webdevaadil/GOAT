import React from "react";
import "./Footer.css"

const Footer=()=>
{
    return (
        <>
        <div className='container-fluid footer-sec'>
          <div className='container'>
            <div className='footer-ct'>
              <div className='foot_1'>
                <h4>Group 1</h4>
                <ul>
                  <li href='#'>Home</li>
                  <li href='#'>Features</li>
                </ul>
              </div>
              <div className='foot_1'>
                <h4>Group 2</h4>
                <ul>
                  <li href='#'>Privacy Policy</li>
                  <li href='#'>Terms & Conditions</li>
                </ul>
              </div>
              <div className='foot_1'>
                <h4>Project Name</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, suspendisse malesuada 
                  elit diam. Id rhoncus in sit varius fringilla. Massa sit lobortis lobortis congue.</p>
              </div>
            </div>
            <div className='foot-link'>
              <p>© Ullamcorper. Praesent luctus</p>
            </div>
          </div>
        </div>
        </>
    )
}

export default Footer;