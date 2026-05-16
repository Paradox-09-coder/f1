// import React from 'react'
// import './Trassa.css';


// const Trassa = () => {
//   const raceData = [
//   {
//     category: 'Previous',
//     round: 'ROUND 4',
//     city: 'Miami',
//     date: '01 - 03 MAY',
//     image: '/icon/trassa2.png ', // Rasm manzilini qo'ying
//     logo: '/icon/trassa1.png'
//   },
  
// ];

//   return (
//     <div className='Trassa'>

//       <div className="container">

//         {/* 1 */}
//         <select className='Trassa_select'>

//           <option>2026</option>
//           <option>2025</option>
//           <option>2024</option>
//           <option>2023</option>
//           <option>2022</option>
//           <option>2021</option>
//           <option>2020</option>

//         </select>

//         {/* 2 */}
//         <div className="orta">
//           <h1 className='a1'> 2026 FIA Formula One World Championship™ Race
//             <br />
//             Calendar 2026</h1>

//           <button className='button1'>  Add F1 calendar</button>
//         </div>


       

//    <div className="trassa-wrapper">
//       <div className="trassa-grid">
//         {raceData.map((race, index) => (

// <div key={index} className={`race-column-${index + 1}`}>           
//    <h3 className="category-title">{race.category}</h3>
//             <div 
//               className="race-card" 
//               style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8)),
//                  url(${race.image})` }}
//             >
//               <div className="card-top">
//                 <span className="round-no">{race.round}</span>
//                 <h2 className="city-name">{race.city}</h2>
//                 <span className="race-date">{race.date}</span>
//               </div>
//               <div className="card-bottom">
//                 {race.logo && <img src={race.logo} alt="logo" className="sponsor-logo" />}
//               </div>
//             </div>
//           </div>
//         ))}
//         <div className="card1">
//           <h1>Next</h1>
//         </div>
//         <div className="card2">
//           <h1>Upcoming</h1>
//         </div>
//         <div className="card3"></div>
//       </div>
//       </div>


//           </div>
      
    

          
//         </div>
    

    

    
//   )
// }

// export default Trassa
import React, { useState, useEffect, useRef } from 'react';

export default function Trassa() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(2026);
  const dropdownRef = useRef(null);

  // Yillar ro'yxati (2026 dan 2021 gacha)
  const years = [2026, 2025, 2024, 2023, 2022, 2021];

  // Tashqariga bosilganda dropdown yopilishi uchun
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-[#15151e] text-white p-8 font-sans select-none">
      <div className="max-w-[1600px] mx-auto">
        
        {/* TEPA QISMI: Dropdown menyu */}
        <div className="relative inline-block mb-6" ref={dropdownRef}>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[#25252c] border border-gray-700 text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm font-bold tracking-wider hover:bg-gray-800 transition cursor-pointer"
          >
            <span>{selectedYear}</span>
            <svg 
              className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          {/* Dropdown Ro'yxat */}
          {isOpen && (
            <div className="absolute left-0 mt-2 w-32 bg-[#25252c] border border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => {
                    setSelectedYear(year);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left block px-4 py-2 text-sm transition font-medium cursor-pointer ${
                    selectedYear === year ? 'bg-[#e10600] text-white' : 'hover:bg-[#e10600] hover:text-white'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Sarlavhalar va Tugma */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-black tracking-wide uppercase">
              {selectedYear} FIA Formula One World Championship™
            </h1>
            <h2 className="text-2xl md:text-3xl font-black tracking-wide uppercase text-gray-400 mt-1">
              Race Calendar {selectedYear}
            </h2>
          </div>
          
          <button className="bg-[#e10600] hover:bg-[#b80500] text-white px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition cursor-pointer active:scale-95">
            + Add F1 Calendar
          </button>
        </div>

        {/* Kategoriya nomlari (Previous, Next, Upcoming) */}
        <div className="flex gap-5 mb-3 text-xs font-bold tracking-widest uppercase text-gray-400">
          <div style={{ width: '312px' }}>Previous</div>
          <div style={{ width: '571px' }}>Next</div>
          <div className="flex-1">Upcoming</div>
        </div>

        {/* RASMLAR SETKASI (Aniq o'lchamlarda) */}
        <div className="flex flex-wrap gap-5">
          
          {/* 1-Rasm: Miami (312px x 312px) */}
          <div className="relative rounded-lg overflow-hidden group cursor-pointer shadow-lg" style={{ width: '312px', height: '312px' }}>
            <img 
              src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=600" 
              alt="Miami" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-5 flex flex-col justify-end">
              <p className="text-[10px] uppercase font-bold tracking-wider text-red-500 mb-1">Round 4</p>
              <h3 className="text-xl font-black tracking-wide">Miami</h3>
              <p className="text-xs text-gray-400 font-medium">01 - 03 MAY</p>
            </div>
          </div>

          {/* 2-Rasm: Canada (571px x 312px) */}
          <div className="relative rounded-lg overflow-hidden group cursor-pointer shadow-lg" style={{ width: '571px', height: '312px' }}>
            <img 
              src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800" 
              alt="Canada" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-5 flex flex-col justify-end">
              <p className="text-[10px] uppercase font-bold tracking-wider text-red-500 mb-1">Round 5</p>
              <h3 className="text-2xl font-black tracking-wide">Canada</h3>
              <p className="text-xs text-gray-400 font-medium">22 - 24 MAY</p>
            </div>
          </div>

          {/* 3-Rasm: Monaco (312px x 312px) */}
          <div className="relative rounded-lg overflow-hidden group cursor-pointer shadow-lg" style={{ width: '312px', height: '312px' }}>
            <img 
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=600" 
              alt="Monaco" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-5 flex flex-col justify-end">
              <p className="text-[10px] uppercase font-bold tracking-wider text-red-500 mb-1">Round 6</p>
              <h3 className="text-xl font-black tracking-wide">Monaco</h3>
              <p className="text-xs text-gray-400 font-medium">29 - 31 MAY</p>
            </div>
          </div>

          {/* 4-Rasm: Barcelona (332px x 312px) */}
          <div className="relative rounded-lg overflow-hidden group cursor-pointer shadow-lg" style={{ width: '332px', height: '312px' }}>
            <img 
              src="https://images.unsplash.com/photo-1562591176-6cbb6fcb1286?q=80&w=600" 
              alt="Barcelona" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-5 flex flex-col justify-end">
              <p className="text-[10px] uppercase font-bold tracking-wider text-red-500 mb-1">Round 7</p>
              <h3 className="text-xl font-black tracking-wide">Barcelona-Catalunya</h3>
              <p className="text-xs text-gray-400 font-medium">12 - 14 JUN</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}