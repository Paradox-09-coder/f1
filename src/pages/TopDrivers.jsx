import React, { useEffect, useState } from 'react'
import '../Home.css'

export default function TopDrivers() {
  
  const[drivers , setDrivers] = useState([])

  useEffect(()=>{
    fetch("https://699ed77978dda56d396b8ef4.mockapi.io/abdumalik")
  .then((res)=> res.json())
  .then((data)=>{
     setDrivers(data)
  })
  },[])


  return (
    <div> 
        <div className="top-Drivers2">
          {
            drivers.map((item)=>{
              return(
                <div className="cardss" style={{background: `url(${item.topBg})`,backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",}}>
                  <h3 className='orinlari'>{item.orin}</h3>
                  <p className='hero-names'>{item.name}</p>
                  <p className="cars">
                    {item.car}
                  </p>
                  <img className='flag11' src={item.flag} alt="" />
                  <h3 className="orinlar2">
                    {item.pts} PTS
                  </h3>
                </div>
                )
            })
          }
          
        </div>
        <div className="reyting">
            <div className="wrapper-for_rey">
              <div className="rey-cloud">
              <p className="seriy">
                Pos.
              </p>  
              <p className="seriy">
                 Driver
              </p>  
              <p className="seriy">
               Nationality
              </p>   
              <p className="seriy">
                Team
              </p>   
              <p className="seriy">
                 Pts.
              </p>  
            </div>
            <div className="rey-cloud">
                  <p className="seriy">
                    1
                    </p> 
                      <nav className="reyy">
                        <img src="/icon/reytindagiicom.png" alt="" className="rey2-icon" />
                        <p className="namesss">
                          Kimi Antonelli
                        </p>
                      </nav>
                      <nav className="flag-reyting">
                        <img src="/icon/flag1.png" alt="" className="flag-rey" />
                        <p className="namesss">
                          Italy
                        </p>
                      </nav>
                      <nav className="flag-reyting">
                        <img src="/icon/reytindagiicom2.png" alt="" className="flag-rey" />
                        <p className="namesss">
                          Mercedes
                        </p>
                      </nav>
                      <p className="seriy1">
                        100
                      </p>
            </div>
            <div className="rey-cloud">
                    <p className="seriy">
                    2
                    </p> 
            </div>
            <div className="rey-cloud">
                 <p className="seriy">
                    3
                    </p> 
            </div>
            <div className="rey-cloud">
                  <p className="seriy">
                    4
                    </p> 
            </div>
            </div>
          </div>
    </div>
  )
}
