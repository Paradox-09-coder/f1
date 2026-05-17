import React from 'react'
import './Trassa.css';
import { cardlar } from './Api';
import { cardlar1 } from './Api';
import { cardlar2 } from './Api';
import { cardlar3 } from './Api';


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

      <div className="container h-[750px] mt-[300px] bg-[#000]">

        {/* 1 */}
        <div class="select-container" tabindex="0">
          <select className='web bg-[#000]' >

            <option class="select-text">2026</option>
            <option class="select-text">2025</option>
            <option class="select-text">2024</option>
            <option class="select-text">2023</option>
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



      <div className="main  ">

        <div className="api  flex justify-center gap-[20px] flex-wrap">
          {

            cardlar.map((value) => {
              return (
                <div key={value.id} className="v flex items-center w-[520px] h-[240px]  bg-[#000000]  rounded-[8px] ">
                  <div className="s">

                    <h3 className='text-[#AAAAAA] font-inter indent-[20px] text-[14Rpx] t'>{value.p}   </h3>
                    <h1 className='text-[#fff] text-[24px] font-bold  indent-[10px] flex  t'>
                      <img className='w-[30px] h-[30px]  rounded-[50%] border-3 border-[#fff] n' src={value.nomi} alt="" />Bahrain
                    </h1>
                    <p className='text-[#AAA]  text-[14px] indent-[20px] t'>{value.malumot}</p>
                    <h2 className='text-[#fff] font-bold indent-[20px] text-[16px] z '>{value.kun}</h2>
                  </div>

                  <div className="f float-right  ">
                    <img className='right w-[148px] h-[198px] ' src={value.img} alt="" />
                  </div>
                </div>
              )
            })

          }


          {

            cardlar1.map((value) => {
              return (

                <div key={value.id} className="v    w-[520px] h-[240px]  bg-[#000000]  rounded-[8px] ">

                    <div className="card2  flex   justify-between">

                  <h3 className='text-[#AAAAAA] font-inter indent-[20px] text-[14px] avstraliya'>{value.p}   </h3>
                  <span className=' ong w-[140px]  h-[30px]  bg-[#15151E] '><i class="fa-solid fa-flag-checkered"></i>   {value.center}  </span>
                    </div>
                  <h1 className='text-[#fff] text-[24px] font-bold  indent-[10px] flex  t'>
                    <img className='w-[30px] h-[30px] rounded-[50%]  border-3 border-[#fff] n' src={value.bayroq1} alt="" />
                    {value.nomi}</h1>
                  <p className='text-[#AAA]  text-[14px] indent-[20px] t'>{value.malumot}</p>

                  <div className="cardlar1  flex   ">


                  <img className='rasm1 w-[182px] h-[48px] ' src={value.rasm1} alt="" />
                  <img className=' w-[150px] h-[48px] ' src={value.rasm2} alt="" />
                  <img className=' w-[155px] h-[48px] ' src={value.rasm3} alt="" />
                  </div>

                </div>

              )
            })
          }
        
        {
         
         
         cardlar2.map((value)=>{
           return(
             <div key={value.id} className="v    w-[520px] h-[240px]  bg-[#E10600]  rounded-[8px] ">

                            <div className="s  flex   justify-between">

                  <h3 className='text-[#AAAAAA] font-inter indent-[20px] text-[14px] avstraliya'>{value.p}   </h3>
                  <span className=' ong w-[130px]  h-[30px]  bg-[#fff] text '>   NEXT RACE <i class="fa-solid fa-angle-right"></i> </span>
                    </div>
                  <h1 className='text-[#fff] text-[24px] font-bold  indent-[10px] flex  t'>
                    <img className='w-[30px] h-[30px] rounded-[50%]  border-3 border-[#fff] n' src={value.bayroq1} alt="" />
                    {value.nomi}</h1>
                  <p className='text-[#AAA]  text-[14px] indent-[20px] t'>{value.malumot}</p>

                  <div className="cardlar1  flex justify-between  ">

                   <h1 className=' text-[#fff] font-bold indent-[20px] text-[19px] ta'>{value.kun} May</h1>
                   <img className='w-[86px] h-[48px]' src="/public/icon/lenovo.png" alt="" />
                 
                  </div>

              
             </div>
           )
         })
        }



        {
          cardlar3.map((value)=>{
            return (
              <div key={value.id} className="v  w-[520px] h-[240px]  bg-[#000000]  rounded-[8px]">
    <div className="s">

                    <h3 className='text-[#AAAAAA] font-inter indent-[20px] text-[14px] mn'>{value.p}   </h3>
                    <h1 className='text-[#fff] text-[24px] font-bold  indent-[10px] flex  t'>
                      <img className='w-[30px] h-[30px]  rounded-[50%] border-3 border-[#fff] n' src={value.rasm10} alt="" /> {value.nomi}
                    </h1>
                    <p className='text-[#AAA]  text-[12px] indent-[20px] t'>{value.malumot}</p>
                    <h2 className='text-[#fff] font-bold indent-[20px] text-[18px] az '>{value.kun}  </h2>
                  </div>

                  <div className="f float-right ">
                    <img className='right1 w-[100px] h-[60px]' src={value.rasm11} alt="" />
                  </div>
              </div>
            )
          })
        }

      
        </div>





      </div>


    </div>





  )
}

export default Trassa
