import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="Signup">
      <p className="signup2">회원가입</p>
      <div className="vertical-align">
        <input className="user-id" placeholder="아이디(이메일)"></input>
        <input
          className="password"
          type="password"
          placeholder="비밀번호"></input>
        <input
          className="re-password"
          type="re-password"
          placeholder="비밀번호 확인"></input>
        <input className="name1" placeholder="이름"></input>
        <input className="phone" placeholder="휴대폰 번호"></input>
        <div className="box11">
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="my-checkbox"
              className="checkbox1"></input>
            <label htmlFor="my-checkbox" className="label1">
              [필수] 만 14세 이상입니다.
            </label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="my-checkbox"
              className="checkbox2"></input>
            <label htmlFor="my-checkbox" className="label1">
              [필수] 사이트 이용약관 동의
            </label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="my-checkbox"
              className="checkbox3"></input>
            <label htmlFor="my-checkbox" className="label1">
              [필수] 전자금융거래 이용약관 동의
            </label>
          </div>

          <div className="checkbox-container">
            <input
              type="checkbox"
              id="my-checkbox"
              className="checkbox4"></input>
            <label htmlFor="my-checkbox" className="label1">
              [필수] 개인정보 수집 및 이용 동의
            </label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="my-checkbox"
              className="checkbox5"></input>
            <label htmlFor="my-checkbox" className="label1">
              [필수] 개인정보 제3자 제공 동의
            </label>
          </div>
        </div>

        <button className="login-button">로그인</button>
      </div>

      <div className="link-login">
        <p className="ment1">회원이신가요?</p>
        <Link to={`/login`}>
          <p className="go-login">로그인하기</p>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
