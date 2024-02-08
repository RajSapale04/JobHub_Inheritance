import { useMemo } from "react";
import "./Job2.css";

const Job2 = ({
  techicalSupportSpecialist,
  partTime,
  employersLogo,
  mapPin,
  bookmarkSimple,
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
    <div className="job6" style={jobStyle}>
      <div className="heading3">
        <div className="techical-support-specialist">
          {techicalSupportSpecialist}
        </div>
        <div className="icon-button-right-arrow">
          <div className="type7">
            <div className="part-time">{partTime}</div>
          </div>
          <div className="salary-20000-3">Salary: $20,000 - $25,000</div>
        </div>
      </div>
      <div className="company1">
        <div className="employers-logo2">
          <img
            className="employers-logo-icon1"
            loading="eager"
            alt=""
            src={employersLogo}
          />
        </div>
        <div className="info2">
          <div className="google-inc1">Google Inc.</div>
          <div className="loaction1">
            <img className="mappin-icon6" alt="" src={mapPin} />
            <div className="dhaka-bangladesh7">Dhaka, Bangladesh</div>
          </div>
        </div>
        <img
          className="bookmarksimple-icon6"
          loading="eager"
          alt=""
          src={bookmarkSimple}
        />
      </div>
    </div>
  );
};

export default Job2;
