import { useMemo } from "react";
import "./Category1.css";

const Category1 = ({
  marketingSales,
  jobsAvailable,
  propLeft,
  propPadding,
  propTop,
}) => {
  const category1Style = useMemo(() => {
    return {
      left: propLeft,
      padding: propPadding,
      top: propTop,
    };
  }, [propLeft, propPadding, propTop]);

  return (
    <div className="category1" style={category1Style}>
      <div className="category1-child" />
      <img
        className="businessman-1-icon1"
        loading="eager"
        alt=""
        src="/businessman-1@2x.png"
      />
      <div className="marketing-sales-container">
        <p className="marketing-sales">{marketingSales}</p>
        <p className="jobs-available1">{jobsAvailable}</p>
      </div>
    </div>
  );
};

export default Category1;
