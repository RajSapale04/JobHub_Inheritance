import { useMemo } from "react";
import "./Info.css";

const Info = ({
  calendarBlank,
  jobPosted,
  jun2021,
  propMinWidth,
  propOverflow,
}) => {
  const infoStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const calendarBlankIconStyle = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div className="info" style={infoStyle}>
      <img
        className="calendarblank-icon"
        loading="eager"
        alt=""
        src={calendarBlank}
        style={calendarBlankIconStyle}
      />
      <div className="heading1">
        <div className="job-posted">{jobPosted}</div>
        <div className="jun-2021">{jun2021}</div>
      </div>
    </div>
  );
};

export default Info;
