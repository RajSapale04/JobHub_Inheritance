import "./Candidate.css";

const Candidate = ({
  candidate,
  footerLink,
  footerLink1,
  footerLink2,
  footerLink3,
}) => {
  return (
    <div className="candidate">
      <h3 className="candidate1">{candidate}</h3>
      <div className="link">
        <div className="footer-link">
          <img className="fiarrow-right-icon2" alt="" src="/fiarrowright.svg" />
          <div className="footer-link1">{footerLink}</div>
        </div>
        <div className="footer-link">
          <img className="fiarrow-right-icon2" alt="" src="/fiarrowright.svg" />
          <div className="footer-link1">{footerLink1}</div>
        </div>
        <div className="footer-link">
          <img className="fiarrow-right-icon2" alt="" src="/fiarrowright.svg" />
          <div className="footer-link1">{footerLink2}</div>
        </div>
        <div className="footer-link">
          <img className="fiarrow-right-icon2" alt="" src="/fiarrowright.svg" />
          <div className="footer-link1">{footerLink3}</div>
        </div>
      </div>
    </div>
  );
};

export default Candidate;
