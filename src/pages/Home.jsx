import React from 'react';
import Video from './Video';

const Home = () => {
  return <div>
    <div className="hero-box">
      <div className="hero_card1">
        <img src="/icon/orqafon.png" alt="" className="background-image" />
      </div>
      <div className="hero_card2">
        <div className="malumot-wrapper">
        <img src="/icon/Container.png" alt="" className="malumot-img" />  
        <p className="news-p">Mekies insists Red Bull will 'happily' poach talent</p>      
      </div>
      <div className="malumot-wrapper">
        <img src="/icon/Container2.png" alt="" className="malumot-img" />
        <p className="news-p">The statistic that suggests Antonelli is set to become a
champion</p>      
      </div>
      <div className="malumot-wrapper">
        <img src="/icon/Container3.png" alt="" className="malumot-img" />
        <p className="news-p">TREMAYNE: Miami proved Colapinto has rediscovered his mojo</p>      
      </div>
      <div className="malumot-wrapper">
        <img src="/icon/Container4.png" alt="" className="malumot-img" />
        <p className="news-p">Brown on whether Verstappen could join GP at McLaren</p>      
      </div>
      <div className="malumot-wrapper">
        <img src="/icon/Container5.png" alt="" className="malumot-img" />
        <p className="news-p">Wolff praises Bonnington’s role in Antonelli’s success</p>      
      </div>
      </div>
    </div>
    <div className="new-Status">
          <button className="status_bt1">
            2026 SCHEDULE <img src="/icon/send.png" alt="" className="send-to" />
          </button>
          <button className="status_bt1">
            2026 STANDINGS <img src="/icon/send.png" alt="" className="send-to" />
          </button>
          <button className="status_bt1">
            2026 REGULATIONS <img src="/icon/send.png" alt="" className="send-to" />
          </button>
          <button className="status_bt1">
            LATEST NEWS <img src="/icon/send.png" alt="" className="send-to" />
          </button>
    </div>
    <Video/>
    <div className="jj">
      
    </div>
  </div>;
};

export default Home;
