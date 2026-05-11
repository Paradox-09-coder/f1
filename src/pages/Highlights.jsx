import React from 'react'
import '../Home.css'

export default function Highlights() {
  return (
    <div>
        <div className="highlights-box">
            <div className="all-wrappers2"><br /><br />
                <h1 className='pick_h1'>
                    EDITOR'S PICKS
                </h1>
                <div className="box2">
                <div className="top-wrappers">
                <img src="/public/icon/item.png" alt="" className="topstories" />
            </div>
            <div className="topstories-wrapper">
                <div className="cards-for-top">
                    <img src="/public/icon/item2.png" alt="" className="pick-moment" />
                    <p className='paragraph'>The next steps for Aston Martin after
                        progress in Miami</p>
                </div>
                <div className="cards-for-top">
                    <img src="/public/icon/item3.png" alt="" className="pick-moment" />
                    <p className='paragraph'>Vowles explains why Williams had a
                    'messy' winter</p>
                </div>
            </div>
            </div>
            <div className="box2">
            <div className="topstories-wrapper">
                <div className="cards-for-top">
                    <img src="/public/icon/item4.png" alt="" className="pick-moment" />
                    <p className='paragraph'>Proposals agreed for further evolutionary
                    regulation changes</p>
                </div>
                <div className="cards-for-top">
                    <img src="/public/icon/item2.png" alt="" className="pick-moment" />
                    <p className='paragraph'>The transformative upgrades behind Red
                     Bull's turnaround</p>
                </div>
            </div>
            <div className="top-wrappers">
                <img src="/public/icon/item6.png" alt="" className="topstories" />
            </div>
            </div>
            </div>
            <div className="new-sections">
                <img src="/icon/bgf1.png" alt="" className="big-f1" />
            <h1 className='pick_h2'>
                    2026 Season
                </h1>
                <div className="p-wrapper">
                    <p className='bolimlari'>
                    DRIVERS
                </p>
                
                <p className='bolimlari'>
                    TEAMS
                </p>
                <img src="/icon/red-line.png" alt="" className="red-line" />
                </div>
            </div>
        </div>
    </div>
  )
}
