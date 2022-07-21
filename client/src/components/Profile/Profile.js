import React ,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { ProfileNav } from './ProfileNav'


export const Profile = () => {

  const { user, isAuthenticated, loading } = useSelector((state) => state.user);
  const navigate = useNavigate()

useEffect(()=>{
  if(isAuthenticated ===false){
  navigate("login")
  }
},[user,isAuthenticated,loading,navigate])

  return (<>
      <div style={{display:"flex"}}>
        <ProfileNav/>
            <div className="box_two">
          <h2 className="pro_heading">Profile Photo</h2>

          <div className="pic_flex_box">
            <img  src={process.env.PUBLIC_URL + "img/Rectangle1322.png"}alt="rec" />
            <button className="big_btn">Upload Photo</button>
          </div>
          <h2 className="per_text">Personal Details</h2>
          <input className="name" type="text" placeholder="Full name" />
          <div className="input_flex_box">
            <input className="dob" type="date" placeholder="Date of Birth" />
            <input className="gender" type="text" placeholder="Gender(Optinal)" />
          </div>
          <div className="button_flex_box">
            <button className="dis_btn">Discard</button>
            <button className="sav_btn">Save</button>
          </div>
        </div>
    </div>
  </>
  )
}
