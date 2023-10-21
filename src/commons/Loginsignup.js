import React from "react";
import { NavLink } from "react-router-dom";

function Loginsignup() {
  return (
    <ul className="loginsignup">
      <NavLink to="/login">
        <li className="login">로그인</li>
      </NavLink>
      <NavLink to="/signup">
        <li className="signup">회원가입</li>
      </NavLink>
    </ul>
  );
}

export default Loginsignup;
