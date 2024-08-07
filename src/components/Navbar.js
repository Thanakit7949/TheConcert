import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">THE CONCERT</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">หน้าแรก</Link></li>
        <li><Link to="/concerts">คอนเสิร์ต</Link></li>
        <li><Link to="/night-club">ไนท์คลับ</Link></li>
        <li><Link to="/sports">กีฬา</Link></li>
        <li><Link to="/promotions">โปรโมชั่น</Link></li>
        <li><Link to="/products">สินค้า</Link></li>
        <li><Link to="/news">ข่าวสาร</Link></li>
        <li><Link to="/business-customers">ลูกค้าธุรกิจ</Link></li>
        <li><Link to="/ticket-protection">บริการคุ้มครองบัตรการแสดง</Link></li>
      </ul>

      <div className="navbar-actions">
        <Link to="/login" className="btn btn-primary">เข้าสู่ระบบ</Link>
        <Link to="/signup" className="btn btn-secondary">สมัครสมาชิก</Link>
      </div>
    </nav>
  );
};

export default Navbar;
