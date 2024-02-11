import { useMemo } from "react";
import "./Job2.css";
import { useNavigate } from "react-router-dom";

const Job2 = ({
  id,
  techicalSupportSpecialist,
  partTime,
  employersLogo,
  mapPin,
  bookmarkSimple,
  propBackground,
  propBackgroundColor,
  minSalary,
  maxSalary,
  companyName,
  city,
  country
}) => {
  const navigate=useNavigate()
  const jobStyle = useMemo(() => {
    return {
      background: propBackground,
      backgroundColor: propBackgroundColor,
    };
  }, [propBackground, propBackgroundColor]);

  const handleClick=()=>{
    navigate(`/job-detail/${id}`)
  }

  return (
    <div className="job6" style={jobStyle} onClick={handleClick}>
      <div className="heading3">
        <div className="techical-support-specialist">
          {techicalSupportSpecialist}
        </div>
        <div className="icon-button-right-arrow">
          <div className="type7">
            <div className="part-time">{partTime}</div>
          </div>
          <div className="salary-20000-3">Salary: {minSalary} - {maxSalary}</div>
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
          <div className="google-inc1">{companyName}</div>
          <div className="loaction1">
            <img className="mappin-icon6" alt="" src={mapPin} />
            <div className="dhaka-bangladesh7">{city}, {country}</div>
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
