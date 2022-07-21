import React from "react";
import "./Main.css";
import {Link, useNavigate} from "react-router-dom"
import { Header } from "../Header/Header";
import { Metadata } from "../layout/Metadata";
import Footer from "../Footer/Footer";

export const Main = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
  <Metadata title = "the Goat tips"/>
<Header/>
{/* main image */}

  <div className='slide'>
        <section className='container-fluid'>
          <div className='container'>
            <div className='row'>
              <div className='main-sec'>
              <div className='main-content'>
              <h2>The Goat Tips</h2>
              <p>The Goat Tips - Betting made easy! Your guide for sports betting, The Goat’s Tips caters to your needs with different packages, provides tips and guidance for betting on Thoroughbreds, 
                Greyhounds and much more with real-time data on upcoming races and a great ROI. Sign up now!</p>
            </div>
              </div>
            </div>
           
          </div>
        </section>
      </div>


{/* free tips section */}


<div>
        <div className='container-fluid' id='freetip-sec'>
          <div className='container section'>
          <h3>Today’s Free Tips</h3>
          </div>
          <div className='container main-freetips'>
            <div className='main_1'>             
              <div className='main-grid 1'>
              <div className='tip-grid'>
                 <div className='tips-colum1'>
                   <img src="../Vector.png" />
                 </div>
                 <div className='tips-colum1'>
                  <h3>Murray Bridge, NSW</h3>
                  <div className='space'>
                    <button className='btn'>Race 2</button>
                    <p>9:00  AM</p>
                  </div>
                 </div>
              </div>
              <div className='tip-grid'>
                 <div className='tips-colum1'>
                   <img src="../left-Vector.png" />
                 </div>
                 <div className='tips-colum1'>
                  <h3>Murray Bridge, NSW</h3>
                  <div className='space'>
                    <button className='btn freebt-2'>Race 2</button>
                    <p>9:00  AM</p>
                  </div>
                 </div>
              </div>
              <div className='tip-grid'>
                 <div className='tips-colum1'>
                   <img src="../left-Vector.png" />
                 </div>
                 <div className='tips-colum1'>
                  <h3>Murray Bridge, NSW</h3>
                  <div className='space'>
                    <button className='btn freebt-2'>Race 2</button>
                    <p>9:00  AM</p>
                  </div>
                 </div>
              </div>
              <div className='tip-grid'>
                 <div className='tips-colum1'>
                   <img src="../Vector.png" />
                 </div>
                 <div className='tips-colum1'>
                  <h3>Murray Bridge, NSW</h3>
                  <div className='space'>
                    <button className='btn'>Race 2</button>
                    <p>9:00  AM</p>
                  </div>
                 </div>
              </div>
              <div className='tip-grid'>
                 <div className='tips-colum1'>
                   <img src="../left-Vector.png" />
                 </div>
                 <div className='tips-colum1'>
                  <h3>Murray Bridge, NSW</h3>
                  <div className='space'>
                    <button className='btn freebt-2'>Race 2</button>
                    <p>9:00  AM</p>
                  </div>
                 </div>
              </div>
              <div className='tip-grid'>
                 <div className='tips-colum1'>
                   <img src="../Vector.png" />
                 </div>
                 <div className='tips-colum1'>
                  <h3>Murray Bridge, NSW</h3>
                  <div className='space'>
                    <button className='btn'>Race 2</button>
                    <p>9:00  AM</p>
                  </div>
                 </div>
              </div>             
            </div>
            </div>
            <div className='main_1 main-img'>
              <div className='main_cont'>
                <h3>Sign up to The Goat Tips Today!</h3>
                <p>And get the hottest tips that can earn you up to </p>
                <h4><span>678% in returns</span> on your initial investment.</h4>
                <button className='btn freetips-btn'>SIGN ME UP!</button>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div>
        <div className='container-fluid upcomming-sec'>
          <div className='container'>
            <h3>Upcoming Races</h3>
            <div className='upcomming-table'>
            <table>
                <tr>
                  <th className='first-border'>Category</th>
                  <th>Time</th>
                  <th>Track Name</th>
                  <th>Race No.</th>
                  <th className='first-border2'>Win Odds</th>
                </tr>
                <tr>
                  <td><img src="../Vector.png" /></td>
                  <td> 9:00 AM Today</td>
                  <td>Murray Bridge, SA</td>
                  <td> <button className='btn btn-1'>Race 1</button></td>
                  <td>6.7</td>  
                </tr>
                <tr>
                  <td><img src="../left-Vector.png" /></td>
                  <td>  9:15 AM Tomorrow</td>
                  <td>Aramac, QLD</td>
                  <td> <button className='btn btn-1 btn-2'>Race 2</button></td>
                  <td>6.7</td>  
                </tr>
                <tr>
                  <td><img src="../left-Vector.png" /></td>
                  <td>  12:00 PM Tomorrow  </td>
                  <td>Aramac, QLD</td>
                  <td> <button className='btn btn-1 btn-2'>Race 4</button></td>
                  <td>6.7</td>  
                </tr>
                <tr>
                  <td><img src="../Vector.png" /></td>
                  <td> 9:00 AM 23 Sep</td>
                  <td>Flemington, VIC</td>
                  <td> <button className='btn btn-1'>Race 1</button></td>
                  <td>6.7</td>  
                </tr>
                <tr>
                  <td><img src="../left-Vector.png" /></td>
                  <td>4:00 PM 23 Sep</td>
                  <td>Northam, WA</td>
                  <td> <button className='btn btn-1 btn-2'>Race 5</button></td>
                  <td>6.7</td>  
                </tr>
                <tr>
                  <td><img src="../Vector.png" /></td>
                  <td> 4:30 PM 23 Sep</td>
                  <td>Wawick, NSW</td>
                  <td> <button className='btn btn-1'>Race 7</button></td>
                  <td>6.7</td>  
                </tr>
                <tr>
                  <td><img src="../Vector.png" /></td>
                  <td>11:00 AM 25 Sep</td>
                  <td>Geelong, VIC</td>
                  <td> <button className='btn btn-1'>Race 3</button></td>
                  <td>6.7</td>  
                </tr>
                <tr>
                  <td><img src="../left-Vector.png" /></td>
                  <td> 3:00 PM 29 Sep</td>
                  <td>Narrogin, WA</td>
                  <td> <button className='btn btn-1 btn-2'>Race 6</button></td>
                  <td>6.7</td>  
                </tr>
                <tr>
                  <td><img src="../left-Vector.png" /></td>
                  <td>  9:30 AM 30 Sep</td>
                  <td>Birdsville, QLD</td>
                  <td> <button className='btn btn-1 btn-2'>Race 1</button></td>
                  <td>6.7</td>  
                </tr>
                <tr>
                  <td><img src="../Vector.png" /></td>
                  <td> 12:30 PM 30 Sep</td>
                  <td>Corowa, NSW</td>
                  <td> <button className='btn btn-1'>Race 4</button></td>
                  <td>6.7</td>  
                </tr>
                <tr>
                  <td><img src="../left-Vector.png                                                                                                                                                                                                " /></td>
                  <td>  3:00 PM 30 Sep</td>
                  <td>Corowa, NSW</td>
                  <td> <button className='btn btn-1 btn-2'>Race 2</button></td>
                  <td>6.7</td>  
                </tr>
                <tr>
                  <td><img src="../Vector.png" /></td>
                  <td>  4:30 PM 30 Sep</td>
                  <td>Mareeba, QLD</td>
                  <td> <button className='btn btn-1'>Race 6</button></td>
                  <td>6.7</td>  
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
<Footer/>
    </>
  );
};
