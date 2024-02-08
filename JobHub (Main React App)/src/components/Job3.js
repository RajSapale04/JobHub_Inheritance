import { useMemo } from "react";
import "./Job3.css";

const Job3 = ({
  juniorGraphicDesigner,
  linkedin1,
  linkedinUSA,
  propOverflow,
}) => {
  const job1Style = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div className="job7" style={job1Style}>
      <div className="heading4">
        <div className="junior-graphic-designer">{juniorGraphicDesigner}</div>
        <div className="type-group">
          <div className="type8">
            <div className="internship1">Internship</div>
          </div>
          <div className="salary-20000-4">Salary: $20,000 - $25,000</div>
        </div>
      </div>
      <div className="company2">
        <img
          className="linkedin-1-icon"
          loading="eager"
          alt=""
          src={linkedin1}
        />
        <div className="info3">
          <div className="linkedin-usa">{linkedinUSA}</div>
          <div className="loaction2">
            <img className="mappin-icon8" alt="" src="/mappin.svg" />
            <div className="dhaka-bangladesh8">Dhaka, Bangladesh</div>
          </div>
        </div>
        <img
          className="bookmarksimple-icon7"
          alt=""
          src="/bookmarksimple-11.svg"
        />
      </div>
    </div>
  );
};

export default Job3;
