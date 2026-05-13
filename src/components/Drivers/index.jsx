import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchDrivers } from '../../redux/slices/driverSlice';
import DriverCard from './DriverCard';

import './f1-drivers.css';
import DriverSkeleton from './DriversSkeleton';

const F1Drivers = () => {
  const dispatch = useDispatch();
  const { status, items } = useSelector((state) => state.driver);
  useEffect(() => {
    const getDrivers = async () => {
      dispatch(fetchDrivers());
    };

    getDrivers();
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const skeletons = [...new Array(20)].map((_, index) => <DriverSkeleton key={index} />);
  return (
    <div className='f1-drivers'>
      <h1 className='f1-driver_title'>F1 Drivers</h1>
      <div className='f1-drivers_grid'>
        {status === 'loading'
          ? skeletons
          : items.map((player) => <DriverCard {...player} id={player.id} />)}
        {status === 'error' && <p>Error fetching drivers. Please try again later.</p>}
      </div>
    </div>
  );
};

export default F1Drivers;
