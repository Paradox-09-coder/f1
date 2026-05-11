import React from 'react'

export default function Video() {
  return (
    <div>
        <div className="video-box">
            <h1 className='video-h1'>
                FEATURED VIDEO
            </h1>
            <div className="wrapper-for-video">
               <div className="video-cards">
                <video className='kichkina-video' muted loop controls autoPlay src="/icon/video1.mp4"></video>
                <p className="video-text">
                    Jolyon Palmer's Analysis: Miami
                    Grand Prix
                </p>
               </div>
               <div className="video-cards">
                <video className='kichkina-video' muted loop controls autoPlay src="/icon/video2.mp4"></video>
                <p className="video-text">
                    DHL Fastest Pit Stop: 2026 Miami
                    Grand Prix
                </p>
               </div>
               <div className="video-cards">
                <video className='kichkina-video' muted loop controls autoPlay src="/icon/video3.mp4"></video>
                <p className="video-text">
                   2026 Miami Grand Prix: Why
                    Leclerc was handed a 20-second
                    penalty
                </p>
               </div>
               <div className="video-cards">
                <video className='kichkina-video' muted loop controls autoPlay src="/icon/video4.mp4"></video>
                <p className="video-text">
                    2026 Miami Grand Prix: Antonelli
                    storms into the lead with passes
                    on Norris and Verstappen
                </p>
               </div>
               <div className="video-cards">
                <video className='kichkina-video' muted loop controls autoPlay src="/icon/video5.mp4"></video>
                <p className="video-text">
                    2026 Miami Grand Prix: Hadjar
                    furious with himself after crashing
                    out on Lap 5
                </p>
               </div>
            </div>
            <img src="/icon/line.png" alt="" className="line" />
        </div>
    </div>
  )
}
