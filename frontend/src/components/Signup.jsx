import React from 'react';
import '../styles/Signup.css';

const Signup = () => {
  return (
    <div className="signup">
      <h2>สมัครสมาชิก</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">สมัครสมาชิก</button>
      </form>
    </div>
  );
};

export default Signup;
