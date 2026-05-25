/* eslint-disable react-hooks/use-memo */
import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/searchSlice";
import debounce from "lodash.debounce";

import { fetchDrivers } from "../../redux/slices/driverSlice";
import DriverCard from "./DriverCard";

import "./f1-drivers.css";
import DriverSkeleton from "./DriversSkeleton";

const F1Drivers = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { status, items } = useSelector((state) => state.driver);
  const { searchValue } = useSelector((state) => state.search);

  const searchBar = useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 400),
    [],
  );

  const handleClearInput = () => {
    dispatch(setSearchValue(""));
    setValue("");
    searchBar.current.focus();
    searchBar.reset();
  };
  const onChangeInput = (event) => {
    updateSearchValue(event.target.value);
    setValue(event.target.value);
  };

  useEffect(() => {
    const getDrivers = async () => {
      dispatch(fetchDrivers(searchValue));
    };

    getDrivers();
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const skeletons = [...new Array(20)].map((_, index) => (
    <DriverSkeleton key={index} />
  ));
  return (
    <div className="f1-drivers">
      <div className="f1-drivers_header">
        <h1 className="f1-driver_title">F1 Drivers</h1>
        <div className="f1-driver_search-wrapper">
          <span className="f1-driver_search-icon">🔎</span>
          <input
            value={value}
            onChange={onChangeInput}
            ref={searchBar}
            type="text"
            placeholder="Search drivers..."
            className="f1-driver_search"
          />
          {value && <span className="f1-driver_clear" onClick={() => handleClearInput()}>
            ✖️
          </span>}
        </div>
      </div>

      <div className="f1-drivers_grid">
        {status === "loading"
          ? skeletons
          : items.map((player) => <DriverCard {...player} id={player.id} />)}
        {status === "error" && (
          <p>Error fetching drivers. Please try again later.</p>
        )}
      </div>
    </div>
  );
};

export default F1Drivers;
