import React from 'react';

const Teams = () => {
  return <div>
    <div className="container">
      <h1 className="team__title">F1 Teams 2026</h1>
      <p className="team__text">Find the current Formula 1 teams for the 2026 season</p>
        <div className="card">
          <div className="card__box">
            <div className="card__item">
            <h2 className="box__title">Mercedes</h2>
            <div className="box__item">
              <img src="/public/icon/a2.png" alt="" />
              <span>George</span>Russell
              <img src="/public/icon/a1.png" alt="" />
              <span>Kimi</span>Antonelli
            </div>
               <img src="/public/icon/mers.png" alt="" />
             </div>
             <img src="/public/icon/f1mers.png" alt="" />
          </div>
        </div>
    </div>
    
  </div>;
};

export default Teams;
