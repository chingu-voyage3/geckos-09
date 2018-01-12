import React from "react";
import AboutUs from "./AboutUs";
import UserInfo from "./user-info";
import css from "../style/component.css";

export default function HeaderRight() {
  return (
    <span className="header-right">
      <AboutUs />
      <UserInfo />
    </span>
  );
}
