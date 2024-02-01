import { useState } from "react";
import "./AdbanceFilter.css";

const AdbanceFilter = () => {
  const [searchByJobValue, setSearchByJobValue] = useState("");
  const [cityStateOrValue, setCityStateOrValue] = useState("");
  return (
    <form className="adbance-filter">
      <div className="input-field">
        <img className="fisearch-icon1" alt="" src="/fisearch.svg" />
        <input
          className="search-by-job"
          placeholder="Search by: Job tittle, Position, Keyword..."
          type="text"
          value={searchByJobValue}
          onChange={(event) => setSearchByJobValue(event.target.value)}
        />
      </div>
      <div className="devider" />
      <div className="input-field1">
        <div className="full-time">
          <img className="mappin-icon" alt="" src="/mappin.svg" />
          <input
            className="city-state-or"
            placeholder="City, state or zip code"
            type="text"
            value={cityStateOrValue}
            onChange={(event) => setCityStateOrValue(event.target.value)}
          />
        </div>
        <img className="mappin-icon" alt="" src="/crosshair.svg" />
      </div>
      <button className="button1">
        <img className="mappin-icon" alt="" src="/sliders.svg" />
        <div className="primary">Filters</div>
      </button>
      <button className="button2">
        <div className="primary1">Find Job</div>
      </button>
    </form>
  );
};

export default AdbanceFilter;
