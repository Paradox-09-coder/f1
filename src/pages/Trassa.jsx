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

      <div className="container mt-[300px] bg-[#000]">

        {/* 1 */}
 <div class="select-container" tabindex="0">
  <select className='web bg-[#000]' >

  <option class="select-text">2026</option>
  <option class="select-text">2026</option>
  <option class="select-text">2026</option>
  <option class="select-text">2026</option>
  </select>

</div>
        {/* 2 */}
        <div className="orta flex  justify-between    bg-[#000] ">
          <h1 className='a1  text-[#fff] text-[40px] font-inter mt-[30px]'> 2026 FIA Formula One World Championship™ Race
            <br />
            Calendar 2026</h1>

          <button className='button1 w-[200px] h-[40px] bg-[red] rounded-[20px] text-[#fff]'>  Add F1 calendar</button>
        </div>




           
           {/* 3 */}

        <div className="past flex justify-center gap-[15px] flex-wrap mt-[50px]">
          <div className='w1'> <h1 className='a2'>Previous</h1>  </div>
          <div className='w2'> <h1 className='a2'>Next</h1></div>
          <div className='w3'> <h1 className='a2'>Upcoming</h1></div>
          <div className='w4'></div>


        </div>


      </div>




    </div>





  )
}

export default Trassa
