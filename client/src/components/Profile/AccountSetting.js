import React from 'react'
import { ProfileNav } from './ProfileNav'
import"./accountsetting.css"

export const AccountSetting = () => {
  return (
    <div style={{display:"flex"}}>
           <ProfileNav/>
          
        <div class="box_two">
            <h2 class="per_text">Change Password</h2>
            <input class="cuttent_pass" type="password" placeholder="Enter Current Password"/>
            <input class="new_pass" type="password" placeholder="Enter a new Password"/>
            <input class="re_pass" type="password" placeholder="Re-enter a new Password"/>
            
            
            <button class="sav_btn">Save</button>
        </div>
    </div>
  )
}
