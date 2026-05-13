import React from 'react';

const DriverCard = ({
  team_colour,
  id,
  driver_number,
  headshot_url,
  first_name,
  last_name,
  team_name,
}) => {
  return (
    <div style={{ backgroundColor: `#${team_colour}` }} key={id} className='f1-driver-card'>
      <div>
        <div className='f1-driver_persona'>
          <h2 className='f1-driver-name'>{first_name}</h2>
          <h2 className='f1-driver-lastname'>{last_name}</h2>
        </div>
        <div className='f1-driver-team-number'>
          <div className='f1-driver-team'>{team_name}</div>
          <span>{driver_number}</span>
        </div>

        <div className='f1-driver-flag'></div>
      </div>

      <div className='f1-driver-imgs'>
        <img src={headshot_url} alt={first_name} className='f1-driver-image' />
      </div>
    </div>
  );
};

export default DriverCard;
