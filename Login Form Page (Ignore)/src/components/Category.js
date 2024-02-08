import { useMemo } from "react";
import "./Category.css";

const Category = ({
  businessman1,
  marketingSales,
  jobsAvailable,
  propPadding,
}) => {
  const category1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="category1" style={category1Style}>
      <img
        className="businessman-1-icon"
        loading="eager"
        alt=""
        src={businessman1}
      />
      <div className="marketing-sales-container">
        <p className="marketing-sales">{marketingSales}</p>
        <p className="jobs-available">{jobsAvailable}</p>
      </div>
    </div>
  );
};

export default Category;
