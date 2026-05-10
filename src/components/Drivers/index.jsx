import axios from 'axios';
import { useEffect, useState } from 'react';
import './f1-drivers.css';

const F1Drivers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const fetchDrivers = async () => {
      setIsLoading(true);

      try {
        const res = await axios.get('https://6a00bacc36fb6ad04de071d1.mockapi.io/drivers');
        console.log(res.data);
        setPlayers(res.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log('Ошибка при загрузке данных:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDrivers();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='f1-drivers'>
      <h1>F1 Drivers</h1>
      <div className='f1-drivers_grid'>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          players.map((player) => (
            <div
              style={{ backgroundColor: `#${player.team_colour}` }}
              key={player.id}
              className='f1-driver-card'
            >
              <div className='f1-driver-imgs'>
                <span>{player.driver_number}</span>
                <img
                  src={player.headshot_url}
                  alt={player.first_name}
                  className='f1-driver-image'
                />
              </div>
              <div className='f1-driver_persona'>
                <h2 className='f1-driver-name'>{player.first_name}</h2>
                <h2 className='f1-driver-name'>{player.last_name}</h2>
              </div>
              <div className='f1-driver-team'>{player.team_name}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default F1Drivers;
