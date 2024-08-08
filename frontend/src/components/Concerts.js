import React from 'react';
import '../styles/Concerts.css';

const Concerts = () => {
  return (
    <div className="concerts">
      <h1>คอนเสิร์ต</h1>
      <div className="search-bar">
        <input type="text" placeholder="ค้นหาคอนเสิร์ตหรือศิลปิน" />
        <button>ค้นหา</button>
      </div>
      <div className="concerts-content">
        <section className="concerts-section">
          <h2>คอนเสิร์ต</h2>
          <div className="concerts-grid">
            <img src="/images/image1.jpg" alt="Dream Catcher" />
            <img src="/images/image2.jpg" alt="The Exclusive Private Party" />
            <img src="/images/image3.jpg" alt="Another Concert" />
          </div>
        </section>
        <section className="recommended-section">
          <h2>แนะนำสำหรับคุณ</h2>
          <div className="recommended-grid">
            <img src="/images/image4.jpg" alt="Beautiful Day" />
            <img src="/images/image1.jpg" alt="Fat Cat" />
            <img src="/images/image3.jpg" alt="Colorists Music Festival" />
            <img src="/images/image2.jpg" alt="Unleashed" />
          </div>
        </section>
        <div className="filters">
          <button>ทั้งหมด</button>
          <button>THAI MASS</button>
          <button>THAI INDY</button>
          <button>EDM</button>
          <button>ASIAN</button>
          <button>K-POP</button>
          <button>LGBTQ</button>
        </div>
      </div>
    </div>
  );
};

export default Concerts;
