import React from 'react';
import '../styles/Login.css';

const Login = () => {
  return (
    <div className="login">
      <h2>เข้าสู่ระบบ</h2>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">เข้าสู่ระบบ</button>
      </form>
    </div>
  );
};

export default Login;
