import "./Job1.css";

const Job1 = ({
  marketingOfficer,
  internship,
  employersLogo,
  mapPin,
  bookmarkSimple,
}) => {
  return (
    <div className="job5">
      <div className="heading2">
        <div className="marketing-officer">{marketingOfficer}</div>
        <div className="type-parent">
          <div className="type6">
            <div className="internship">{internship}</div>
          </div>
          <div className="salary-20000-2">Salary: $20,000 - $25,000</div>
        </div>
      </div>
      <div className="company">
        <div className="employers-logo">
          <img className="employers-logo-icon" alt="" src={employersLogo} />
        </div>
        <div className="info1">
          <div className="google-inc">Google Inc.</div>
          <div className="loaction">
            <img className="mappin-icon5" alt="" src={mapPin} />
            <div className="dhaka-bangladesh6">Dhaka, Bangladesh</div>
          </div>
        </div>
        <img className="bookmarksimple-icon5" alt="" src={bookmarkSimple} />
      </div>
    </div>
  );
};

export default Job1;
