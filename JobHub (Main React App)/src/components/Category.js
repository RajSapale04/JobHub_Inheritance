import { useMemo } from "react";
import "./Category.css";

const Category = ({
  legalServices,
  jobsAvailable,
  propLeft,
  propPadding,
  propTop,
}) => {
  const category5Style = useMemo(() => {
    return {
      left: propLeft,
      padding: propPadding,
      top: propTop,
    };
  }, [propLeft, propPadding, propTop]);

  return (
    <div className="category5" style={category5Style}>
      <div className="category5-child" />
      <img className="businessman-1-icon2" alt="" src="/businessman-1@2x.png" />
      <div className="legal-services-2500-container">
        <p className="legal-services">{legalServices}</p>
        <p className="jobs-available2">{jobsAvailable}</p>
      </div>
    </div>
  );
};

export default Category;
