import React from 'react';
import Video from './Video';
import Highlights from './Highlights';
import TopDrivers from './TopDrivers';
import IkkinchiVideo from './IkkinchiVideo';

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

    <Highlights/>

    <TopDrivers/>
    <button className="view-status">
      View full standings
    </button>

    <IkkinchiVideo/>
    <div className="new-Status2">
          <div className="newstatus_box">
            <button className="status_bt1">
            F1® STORE <img src="/icon/send.png" alt="" className="send-to" />
          </button>
          <button className="status_bt1">
            F1® TICKETS <img src="/icon/send.png" alt="" className="send-to" />
          </button>
          <button className="status_bt1">
            F1® FANTASY <img src="/icon/send.png" alt="" className="send-to" />
          </button>
          <div className="status_cards4">
            <div className="card4_text">
              <h1 className='cons-h1'>HELP SHAPE THE F1
              WEBSITE</h1>
              <p>Take a few minutes to tell us what you think.</p>
              <button>
                Let's go
              </button>
            </div>
          </div>
          </div>
    </div>
    
  </div>;
};

export default Home;
