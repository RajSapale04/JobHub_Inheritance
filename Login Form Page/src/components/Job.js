import { useMemo } from "react";
import "./Job.css";

const Job = ({
  juniorGraphicDesigner,
  linkedin1,
  linkedinUSA,
  mapPin,
  bookmarkSimple,
  propOverflow,
}) => {
  const jobStyle = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div className="job" style={jobStyle}>
      <div className="heading">
        <div className="junior-graphic-designer">{juniorGraphicDesigner}</div>
        <div className="type-parent">
          <div className="type">
            <div className="internship">Internship</div>
          </div>
          <div className="salary-20000-">Salary: $20,000 - $25,000</div>
        </div>
      </div>
      <div className="company">
        <img
          className="linkedin-1-icon"
          loading="eager"
          alt=""
          src={linkedin1}
        />
        <div className="info">
          <div className="linkedin-usa">{linkedinUSA}</div>
          <div className="loaction">
            <img className="mappin-icon" alt="" src={mapPin} />
            <div className="dhaka-bangladesh">Dhaka, Bangladesh</div>
          </div>
        </div>
        <img className="bookmarksimple-icon" alt="" src={bookmarkSimple} />
      </div>
    </div>
  );
};

export default Job;
