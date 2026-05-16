import React from 'react'
import './Trassa.css';


const Trassa = () => {
  const raceData = [
  {
    category: 'Previous',
    round: 'ROUND 4',
    city: 'Miami',
    date: '01 - 03 MAY',
    image: '/icon/trassa2.png ', // Rasm manzilini qo'ying
    logo: '/icon/trassa1.png'
  },
  
];

  return (
    <div className='Trassa'>

      <div className="container">

        {/* 1 */}
        <select className='Trassa_select'>

          <option>2026</option>
          <option>2025</option>
          <option>2024</option>
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>

        </select>

        {/* 2 */}
        <div className="orta">
          <h1 className='a1'> 2026 FIA Formula One World Championship™ Race
            <br />
            Calendar 2026</h1>

          <button className='button1'>  Add F1 calendar</button>
        </div>


       

   <div className="trassa-wrapper">
      <div className="trassa-grid">
        {raceData.map((race, index) => (

<div key={index} className={`race-column-${index + 1}`}>           
   <h3 className="category-title">{race.category}</h3>
            <div 
              className="race-card" 
              style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8)),
                 url(${race.image})` }}
            >
              <div className="card-top">
                <span className="round-no">{race.round}</span>
                <h2 className="city-name">{race.city}</h2>
                <span className="race-date">{race.date}</span>
              </div>
              <div className="card-bottom">
                {race.logo && <img src={race.logo} alt="logo" className="sponsor-logo" />}
              </div>
            </div>
          </div>
        ))}
        <div className="card1">
          <h1>Next</h1>
        </div>
        <div className="card2">
          <h1>Upcoming</h1>
        </div>
        <div className="card3"></div>
      </div>
      </div>


          </div>
      
    

          
        </div>
    

    

    
  )
}

export default Trassa
