import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="Login">
      <p className="login1">로그인</p>
      <div className="vertical-align">
        <input className="user-id" placeholder="아이디(이메일)"></input>
        <input
          className="password"
          type="password"
          placeholder="비밀번호"></input>
        <button className="login-button">로그인</button>
      </div>
      <div className="find">
        <p className="id-find">아이디 찾기</p>
        <p className="test1">|</p>
        <p className="pw-find">비밀번호 찾기</p>
      </div>
      <div className="link-signup">
        <p className="ment">회원이 아니신가요?</p>
        <Link to={`/signup`}>
          <p className="go-signup">지금 가입하세요</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
