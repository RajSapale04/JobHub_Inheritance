import { useMemo } from "react";
import "./Job.css";

const Job = ({
  interactionDesigner,
  partTime,
  propBackground,
  propBackgroundColor,
}) => {
  const jobStyle = useMemo(() => {
    return {
      background: propBackground,
      backgroundColor: propBackgroundColor,
    };
  }, [propBackground, propBackgroundColor]);

  return (
    <div className="job" style={jobStyle}>
      <div className="heading">
        <div className="interaction-designer">{interactionDesigner}</div>
        <div className="elgin-st-celina-delaware-new-y">
          <div className="type">
            <div className="part-time">{partTime}</div>
          </div>
          <div className="salary-20000-">Salary: $20,000 - $25,000</div>
        </div>
      </div>
      <div className="company">
        <div className="employers-logo">
          <img
            className="employers-logo-icon"
            loading="eager"
            alt=""
            src="/employers-logo.svg"
          />
        </div>
        <div className="info">
          <div className="google-inc">Google Inc.</div>
          <div className="loaction">
            <img className="mappin-icon1" alt="" src="/mappin-1.svg" />
            <div className="dhaka-bangladesh">Dhaka, Bangladesh</div>
          </div>
        </div>
        <img
          className="bookmarksimple-icon"
          loading="eager"
          alt=""
          src="/bookmarksimple.svg"
        />
      </div>
    </div>
  );
};

export default Job;
