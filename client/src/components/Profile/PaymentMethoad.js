import React from "react";
import { ProfileNav } from "./ProfileNav";
import"./paymentmethoad.css"

export const PaymentMethoad = () => {
  return (
    <div style={{display:"flex"}}>
        <ProfileNav/>
        
      <div class="box_two">
        <h2>Bronze Membership</h2>
        <h2>$15 / Week</h2>
        <ul>
          <li>Recommended tips</li>
          <li>Recommended tips</li>
          <li>Recommended tips</li>
        </ul>

        <div>
          <div class="box_three">
            <h2 class="per_text">Membership Details</h2>
            <input
              class="Select_pack"
              type="text"
              placeholder="Select Package"
            />
            <h2 class="pay_detail">Payment Details</h2>
            <input class="card_name" type="text" placeholder="Name on Card" />
            <input
              class="card_number"
              type="number"
              placeholder="Card Number"
            />
            <div class="input_flex_box"></div>
            <div class="button_flex_box">
              <input class="exp" type="number" placeholder="Expairy" />
              <input class="cvc" type="number" placeholder="CVC" />
            </div>
            <button class="btn-save">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};
