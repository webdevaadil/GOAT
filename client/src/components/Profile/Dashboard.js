import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PaymentMethoad } from "./PaymentMethoad";
import { Profile } from "./Profile";
import { ProfileNav } from "./ProfileNav";

export const Dashboard = () => {
  return (
    <>
      <div>
        <ProfileNav />
      </div>
    </>
  );
};
