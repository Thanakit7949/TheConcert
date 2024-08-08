import React from 'react';
import '../styles/NightClub.css';

const NightClub = () => {
  return (
    <div className="night-club">
      <h1>ไนท์คลับ</h1>
      <p>Welcome to the Night Club page!</p>
      <div className="filter-buttons">
        <button>ทั้งหมด</button>
        <button>LIVE BAND</button>
        <button>ROOF TOP</button>
        <button>COCKTAIL</button>
        <button>CRAFT BEER</button>
        <button>KOREAN BAR</button>
        <button>IZAKAYA</button>
        <button>JAZZ BAR</button>
        <button>PUB & RESTAURANT</button>
      </div>
      <div className="nightclub-grid">
        <div className="club-item">
          <img src="/path/to/bitter-bottle-shop.png" alt="Bitter Bottle Shop" />
          <div className="club-info">
            <h3>Bitter Bottle Shop</h3>
            <p>0.4 กม.</p>
            <p>⭐ 0 (0 review)</p>
          </div>
        </div>
        <div className="club-item">
          <img src="/path/to/bee-groove.png" alt="Bee Groove" />
          <div className="club-info">
            <h3>Bee Groove</h3>
            <p>2.1 กม.</p>
            <p>⭐ 0 (0 review)</p>
          </div>
        </div>
        <div className="club-item">
          <img src="/path/to/yellow-mellow.png" alt="Yellow Mellow" />
          <div className="club-info">
            <h3>Yellow Mellow</h3>
            <p>3.6 กม.</p>
            <p>⭐ 0 (0 review)</p>
          </div>
        </div>
        <div className="club-item">
          <img src="/path/to/you-with-friends.png" alt="อยู่กับเพื่อนบ้าง" />
          <div className="club-info">
            <h3>อยู่กับเพื่อนบ้าง</h3>
            <p>3.8 กม.</p>
            <p>⭐ 5 (1 review)</p>
          </div>
        </div>
        <div className="club-item">
          <img src="/path/to/lynk-laksi.png" alt="Lynk Laksi" />
          <div className="club-info">
            <h3>Lynk Laksi</h3>
            <p>4.9 กม.</p>
            <p>⭐ 0 (0 review)</p>
          </div>
        </div>
        <div className="club-item">
          <img src="/path/to/the-viral-by-peak.png" alt="The Viral By PeaK" />
          <div className="club-info">
            <h3>The Viral By PeaK</h3>
            <p>5.1 กม.</p>
            <p>⭐ 0 (0 review)</p>
          </div>
        </div>
        <div className="club-item">
          <img src="/path/to/studio-bar.png" alt="Studio bar&restaurant" />
          <div className="club-info">
            <h3>Studio bar&restaurant</h3>
            <p>5.3 กม.</p>
            <p>⭐ 0 (0 review)</p>
          </div>
        </div>
        <div className="club-item">
          <img src="/path/to/tropicalia.png" alt="Tropicalia" />
          <div className="club-info">
            <h3>Tropicalia</h3>
            <p>5.5 กม.</p>
            <p>⭐ 0 (0 review)</p>
          </div>
        </div>
        <div className="club-item">
          <img src="/path/to/maganda-house.png" alt="Maganda House" />
          <div className="club-info">
            <h3>Maganda House</h3>
            <p>6.1 กม.</p>
            <p>⭐ 0 (0 review)</p>
          </div>
        </div>
        <div className="club-item">
          <img src="/path/to/hashtag-rangsit.png" alt="Hashtag rangsit" />
          <div className="club-info">
            <h3>Hashtag rangsit</h3>
            <p>6.2 กม.</p>
            <p>⭐ 3 (2 review)</p>
          </div>
        </div>
        <div className="club-item">
          <img src="/path/to/friend-bar.png" alt="ฉันมิตรบาร์" />
          <div className="club-info">
            <h3>ฉันมิตรบาร์</h3>
            <p>6.3 กม.</p>
            <p>⭐ 0 (0 review)</p>
          </div>
        </div>
        <div className="club-item">
          <img src="/path/to/flip-rangsit.png" alt="Flip Rangsit" />
          <div className="club-info">
            <h3>Flip Rangsit</h3>
            <p>6.4 กม.</p>
            <p>⭐ 5 (1 review)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NightClub;
